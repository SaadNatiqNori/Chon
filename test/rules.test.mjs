// Proof that firestore.rules does what its comments claim.
//
// Runs against the local emulator, so none of this touches a real project.
//   npx firebase emulators:exec --project demo-chon "node test/rules.test.mjs"

import {
  initializeTestEnvironment,
  assertSucceeds,
  assertFails
} from '@firebase/rules-unit-testing';
import { readFileSync } from 'node:fs';
import {
  doc, getDoc, setDoc, updateDoc, writeBatch, serverTimestamp,
  increment, collection, getDocs, deleteDoc
} from 'firebase/firestore';

const env = await initializeTestEnvironment({
  projectId: 'demo-chon',
  firestore: { rules: readFileSync('firestore.rules', 'utf8'), host: '127.0.0.1', port: 8080 }
});

let pass = 0, fail = 0;
const results = [];

async function check(name, fn) {
  try {
    await fn();
    pass++; results.push('  PASS  ' + name);
  } catch (e) {
    fail++; results.push('  FAIL  ' + name + '\n         ' + (e.message || e).split('\n')[0]);
  }
}

const db = uid => env.authenticatedContext(uid).firestore();
const anon = () => env.unauthenticatedContext().firestore();

// Puts the counters document in place the way the app does, but through the
// admin context so a broken create rule cannot silently skip the whole file.
async function seed() {
  await env.clearFirestore();
  await env.withSecurityRulesDisabled(async ctx => {
    await setDoc(doc(ctx.firestore(), 'counters', 'global'), { likes: 0, visitors: 0, views: 0 });
  });
}

// A first visit, exactly as pulse.js writes it.
async function arrive(uid, country) {
  const d = db(uid);
  const b = writeBatch(d);
  b.set(doc(d, 'visitors', uid), {
    country, liked: false, firstSeen: serverTimestamp(), lastSeen: serverTimestamp()
  });
  b.update(doc(d, 'counters', 'global'), { visitors: increment(1), views: increment(1) });
  b.set(doc(d, 'countries', country), { n: increment(1) }, { merge: true });
  return b.commit();
}

async function like(uid, next) {
  const d = db(uid);
  const b = writeBatch(d);
  b.update(doc(d, 'visitors', uid), { liked: next, lastSeen: serverTimestamp() });
  b.update(doc(d, 'counters', 'global'), { likes: increment(next ? 1 : -1) });
  return b.commit();
}

// ---- The happy path -----------------------------------------------------

await seed();
await check('a new reader may arrive', () => assertSucceeds(arrive('ada', 'IQ')));

await check('the public may read the counters without signing in',
  () => assertSucceeds(getDoc(doc(anon(), 'counters', 'global'))));

await check('the public may read the country table',
  () => assertSucceeds(getDocs(collection(anon(), 'countries'))));

await check('a reader may like once', () => assertSucceeds(like('ada', true)));
await check('a reader may take the like back', () => assertSucceeds(like('ada', false)));
await check('and like again', () => assertSucceeds(like('ada', true)));

await check('a returning reader adds a view', async () => {
  const d = db('ada');
  const b = writeBatch(d);
  b.update(doc(d, 'visitors', 'ada'), { lastSeen: serverTimestamp() });
  b.update(doc(d, 'counters', 'global'), { views: increment(1) });
  await assertSucceeds(b.commit());
});

await check('the totals add up', async () => {
  await env.withSecurityRulesDisabled(async ctx => {
    const snap = await getDoc(doc(ctx.firestore(), 'counters', 'global'));
    const v = snap.data();
    const want = { likes: 1, visitors: 1, views: 2 };
    for (const k of Object.keys(want)) {
      if (v[k] !== want[k]) throw new Error(`${k} is ${v[k]}, expected ${want[k]}`);
    }
  });
});

// ---- The attacks --------------------------------------------------------

await check('a second like from the same reader is refused', async () => {
  await assertFails(like('ada', true));
});

await check('a like without flipping the reader flag is refused', async () => {
  const d = db('ada');
  await assertFails(updateDoc(doc(d, 'counters', 'global'), { likes: increment(1) }));
});

await check('a signed out visitor cannot like', async () => {
  await assertFails(updateDoc(doc(anon(), 'counters', 'global'), { likes: increment(1) }));
});

await check('likes cannot be moved by more than one', async () => {
  const d = db('bob');
  await arrive('bob', 'DE');
  const b = writeBatch(d);
  b.update(doc(d, 'visitors', 'bob'), { liked: true, lastSeen: serverTimestamp() });
  b.update(doc(d, 'counters', 'global'), { likes: increment(1000) });
  await assertFails(b.commit());
});

await check('the counters cannot be set to an arbitrary number', async () => {
  await assertFails(setDoc(doc(db('bob'), 'counters', 'global'), { likes: 99999, visitors: 1, views: 1 }));
});

await check('a reader cannot be counted as a visitor twice', async () => {
  const d = db('ada');
  const b = writeBatch(d);
  b.update(doc(d, 'visitors', 'ada'), { lastSeen: serverTimestamp() });
  b.update(doc(d, 'counters', 'global'), { visitors: increment(1), views: increment(1) });
  await assertFails(b.commit());
});

await check('a reader cannot pad a country they are not in', async () => {
  await assertFails(setDoc(doc(db('ada'), 'countries', 'US'), { n: increment(1) }, { merge: true }));
});

await check('a country that is not two letters is refused', async () => {
  await assertFails(arrive('carol', 'KURDISTAN'));
});

await check('a reader cannot write somebody else\'s record', async () => {
  await assertFails(setDoc(doc(db('ada'), 'visitors', 'bob'), {
    country: 'IQ', liked: false, firstSeen: serverTimestamp(), lastSeen: serverTimestamp()
  }));
});

await check('a reader cannot read somebody else\'s record', async () => {
  await assertFails(getDoc(doc(db('ada'), 'visitors', 'bob')));
});

await check('a reader cannot change their country later', async () => {
  await assertFails(updateDoc(doc(db('ada'), 'visitors', 'ada'), {
    country: 'US', lastSeen: serverTimestamp()
  }));
});

await check('a reader cannot arrive already liked', async () => {
  const d = db('dave');
  const b = writeBatch(d);
  b.set(doc(d, 'visitors', 'dave'), {
    country: 'IQ', liked: true, firstSeen: serverTimestamp(), lastSeen: serverTimestamp()
  });
  b.update(doc(d, 'counters', 'global'), { visitors: increment(1), views: increment(1) });
  b.set(doc(d, 'countries', 'IQ'), { n: increment(1) }, { merge: true });
  await assertFails(b.commit());
});

await check('a reader cannot backdate their arrival', async () => {
  const d = db('erin');
  const b = writeBatch(d);
  b.set(doc(d, 'visitors', 'erin'), {
    country: 'IQ', liked: false, firstSeen: new Date(0), lastSeen: serverTimestamp()
  });
  b.update(doc(d, 'counters', 'global'), { visitors: increment(1), views: increment(1) });
  await assertFails(b.commit());
});

await check('nobody can delete the counters', async () => {
  await assertFails(deleteDoc(doc(db('ada'), 'counters', 'global')));
});

await check('nobody can delete a visitor record', async () => {
  await assertFails(deleteDoc(doc(db('ada'), 'visitors', 'ada')));
});

await check('unrelated collections stay closed', async () => {
  await assertFails(setDoc(doc(db('ada'), 'secrets', 'x'), { a: 1 }));
  await assertFails(getDoc(doc(db('ada'), 'secrets', 'x')));
});

await check('the visitor list cannot be harvested', async () => {
  await assertFails(getDocs(collection(db('ada'), 'visitors')));
});

await env.cleanup();

console.log('\nFirestore rules\n');
console.log(results.join('\n'));
console.log(`\n  ${pass} passed, ${fail} failed\n`);
process.exit(fail ? 1 : 0);
