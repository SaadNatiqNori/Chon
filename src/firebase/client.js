// Firebase, loaded late and never in the way.
//
// The SDK is around a quarter of a megabyte, which is more than the rest of
// this site put together, and nothing on the page needs it to render. So it is
// behind a dynamic import: the guides paint first, Firebase arrives after, and
// a visitor on a slow connection in Sulaymaniyah never waits on analytics to
// read a guide.
//
// Everything here is written to fail quietly. No config, a blocked request, an
// ad blocker eating the analytics endpoint, a browser with storage turned off:
// all of them end with the counters unavailable and the site working exactly
// as it did before any of this existed.

const CONFIG = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// A half filled .env is worse than an empty one, because it fails deep inside
// the SDK with a message nobody can act on. These four are what it takes to
// reach Firestore at all.
export const configured = Boolean(
  CONFIG.apiKey && CONFIG.projectId && CONFIG.appId && CONFIG.authDomain
);

export const hasAnalytics = Boolean(configured && CONFIG.measurementId);

// Point the SDK at the local emulator instead of the real project. Set
// VITE_FIREBASE_EMULATOR=1 to work on the counters without writing a visit
// into the live numbers every time the page reloads.
const EMULATOR = import.meta.env.VITE_FIREBASE_EMULATOR === '1';
const EMULATOR_HOST = '127.0.0.1';

let appPromise = null;

function app() {
  if (!appPromise) {
    appPromise = import('firebase/app').then(({ initializeApp, getApps, getApp }) =>
      getApps().length ? getApp() : initializeApp(CONFIG)
    );
  }
  return appPromise;
}

let dbPromise = null;

// The long polling flag is not a preference. Firestore's default transport is a
// streaming channel that some mobile networks and most corporate proxies cut,
// and its own auto detection needs a round trip to find that out. Chon's
// readers are on exactly those networks, so it starts in the mode that works.
export function db() {
  if (!configured) return Promise.resolve(null);
  if (!dbPromise) {
    dbPromise = Promise.all([app(), import('firebase/firestore')])
      .then(([instance, fs]) => {
        const store = fs.initializeFirestore(instance, { experimentalAutoDetectLongPolling: true });
        if (EMULATOR) fs.connectFirestoreEmulator(store, EMULATOR_HOST, 8080);
        return store;
      })
      .catch(() => null);
  }
  return dbPromise;
}

let authPromise = null;

// An anonymous account is how one reader stays one reader. Firebase keeps the
// id in the browser's own storage, so a second visit is recognised without a
// login, a password, or a name. Clearing site data makes a new person, which is
// the same bargain every visitor counter on the web makes.
export function auth() {
  if (!configured) return Promise.resolve(null);
  if (!authPromise) {
    authPromise = Promise.all([app(), import('firebase/auth')])
      .then(async ([instance, fbAuth]) => {
        const a = fbAuth.getAuth(instance);
        if (EMULATOR) fbAuth.connectAuthEmulator(a, 'http://' + EMULATOR_HOST + ':9099', { disableWarnings: true });
        const current = a.currentUser || (await new Promise(resolve => {
          const stop = fbAuth.onAuthStateChanged(a, user => { stop(); resolve(user); });
        }));
        if (current) return { auth: a, uid: current.uid };
        const cred = await fbAuth.signInAnonymously(a);
        return { auth: a, uid: cred.user.uid };
      })
      .catch(() => null);
  }
  return authPromise;
}

let analyticsPromise = null;

export function analytics() {
  if (!hasAnalytics) return Promise.resolve(null);
  if (!analyticsPromise) {
    analyticsPromise = Promise.all([app(), import('firebase/analytics')])
      .then(async ([instance, ga]) => ((await ga.isSupported()) ? ga.getAnalytics(instance) : null))
      .catch(() => null);
  }
  return analyticsPromise;
}

export function firestoreModule() {
  return import('firebase/firestore');
}
