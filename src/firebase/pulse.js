// The numbers under the footer: how many people came, where from, and how many
// of them pressed the heart.
//
// Three shapes in Firestore, kept deliberately small because every one of them
// is read by every visitor:
//
//   counters/global   { likes, visitors, views }   one document, three numbers
//   countries/{CC}    { n }                        one document per country
//   visitors/{uid}    { country, firstSeen, lastSeen, liked }
//
// The visitor document is the honest part of the design. It is what stops one
// reader counting as five, and it is what firestore.rules reads to decide
// whether a like is allowed, so the counter cannot be driven up by anyone
// holding the page open and pressing a key.
//
// No address, no name, no fingerprint. An anonymous Firebase id and two
// letters of country.

import { db, auth, firestoreModule, configured } from './client.js';

const GEO_ENDPOINT = import.meta.env.VITE_GEO_ENDPOINT || '/api/geo';
const GEO_TIMEOUT = 2500;
const UNKNOWN = 'ZZ';
const GEO_KEY = 'chon.country';

// ---- Country ------------------------------------------------------------

// Asked once per browser session. The answer cannot change while a tab is
// open, and a reader who opens nine guides should not cost nine lookups.
async function askCountry() {
  try {
    const cached = sessionStorage.getItem(GEO_KEY);
    if (cached) return cached;
  } catch (e) {}

  let code = UNKNOWN;
  try {
    // Running under `vite dev` or from XAMPP there is no edge function to ask,
    // so this 404s, and unknown is the correct answer rather than an error.
    const stop = new AbortController();
    const timer = setTimeout(() => stop.abort(), GEO_TIMEOUT);
    const res = await fetch(GEO_ENDPOINT, { signal: stop.signal, cache: 'no-store' });
    clearTimeout(timer);
    if (res.ok) {
      const body = await res.json();
      if (typeof body.country === 'string' && /^[A-Z]{2}$/.test(body.country)) code = body.country;
    }
  } catch (e) {}

  try { sessionStorage.setItem(GEO_KEY, code); } catch (e) {}
  return code;
}

// ---- Counters -----------------------------------------------------------

// The rules only allow writes that move a number by one, which means the
// document has to exist before anybody can move it. Whoever arrives first
// creates it at zero; everyone after that loses the race harmlessly.
async function ensureCounters(store, fs) {
  const ref = fs.doc(store, 'counters', 'global');
  try {
    const snap = await fs.getDoc(ref);
    if (snap.exists()) return ref;
    await fs.setDoc(ref, { likes: 0, visitors: 0, views: 0 });
  } catch (e) {}
  return ref;
}

async function ready() {
  if (!configured) return null;
  const [store, session, fs] = await Promise.all([db(), auth(), firestoreModule()]);
  if (!store || !session || !session.uid) return null;
  return { store, fs, uid: session.uid };
}

// ---- Arrival ------------------------------------------------------------

// Called once per page load. A new reader is counted as a visitor, a country
// and a view; a returning one is only a view. Returns what the footer needs to
// draw itself, so the whole thing is a single round of work.
export async function arrive() {
  const ctx = await ready();
  if (!ctx) return null;
  const { store, fs, uid } = ctx;

  const counters = await ensureCounters(store, fs);
  const mine = fs.doc(store, 'visitors', uid);

  let snap = null;
  try { snap = await fs.getDoc(mine); } catch (e) { return null; }

  const returning = snap && snap.exists();
  const country = returning ? (snap.data().country || UNKNOWN) : await askCountry();
  const liked = returning ? Boolean(snap.data().liked) : false;

  const batch = fs.writeBatch(store);
  if (returning) {
    batch.update(mine, { lastSeen: fs.serverTimestamp() });
    batch.update(counters, { views: fs.increment(1) });
  } else {
    batch.set(mine, {
      country,
      liked: false,
      firstSeen: fs.serverTimestamp(),
      lastSeen: fs.serverTimestamp()
    });
    batch.update(counters, { visitors: fs.increment(1), views: fs.increment(1) });
    batch.set(fs.doc(store, 'countries', country), { n: fs.increment(1) }, { merge: true });
  }

  try { await batch.commit(); } catch (e) {}

  return { country, liked, isNew: !returning };
}

// ---- Likes --------------------------------------------------------------

// The heart is a toggle, and the rules check the reader's own document to see
// which way it is allowed to move. Pressing it twice from two tabs cannot add
// two, and pressing it from a script cannot add any.
export async function setLiked(next) {
  const ctx = await ready();
  if (!ctx) return false;
  const { store, fs, uid } = ctx;

  const batch = fs.writeBatch(store);
  batch.update(fs.doc(store, 'visitors', uid), { liked: next, lastSeen: fs.serverTimestamp() });
  batch.update(fs.doc(store, 'counters', 'global'), { likes: fs.increment(next ? 1 : -1) });

  try {
    await batch.commit();
    return true;
  } catch (e) {
    return false;
  }
}

// ---- Reading ------------------------------------------------------------

const TOP_COUNTRIES = 6;

export async function readStats() {
  const ctx = await ready();
  if (!ctx) return null;
  const { store, fs } = ctx;

  try {
    const [totals, places] = await Promise.all([
      fs.getDoc(fs.doc(store, 'counters', 'global')),
      // Ordered and capped in the query rather than in the page, so a site with
      // readers in ninety countries still costs six document reads.
      fs.getDocs(fs.query(
        fs.collection(store, 'countries'),
        fs.orderBy('n', 'desc'),
        fs.limit(TOP_COUNTRIES)
      ))
    ]);

    const t = totals.exists() ? totals.data() : {};
    return {
      likes: Number(t.likes) || 0,
      visitors: Number(t.visitors) || 0,
      views: Number(t.views) || 0,
      countries: places.docs.map(d => ({ code: d.id, n: Number(d.data().n) || 0 }))
    };
  } catch (e) {
    return null;
  }
}
