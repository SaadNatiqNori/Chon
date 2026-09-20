// Turning the service worker on, and keeping it out of the way in development.
//
// The worker is written by the build, so there is no file to register while
// Vite is serving from memory. A worker left over from a previous `npm run
// build` on the same host would go on answering with stale files, which is why
// development actively tears one down rather than merely skipping this.

const SW_PATH = 'sw.js';

export function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  if (!import.meta.env.PROD) {
    navigator.serviceWorker.getRegistrations()
      .then(list => list.forEach(r => r.unregister()))
      .catch(() => {});
    return;
  }

  // After load, so the worker's install never competes with the page's own
  // first paint for bandwidth.
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(SW_PATH, { scope: './' }).catch(() => {});
  });
}

// Asks the worker to keep a guide's screenshots, including the ones further
// down that lazy loading has not reached. Without this, a guide is only as
// offline as the part of it that was scrolled to.
export function keepOffline(paths) {
  if (!('serviceWorker' in navigator) || !paths || !paths.length) return;
  navigator.serviceWorker.ready
    .then(reg => {
      const target = reg.active || navigator.serviceWorker.controller;
      if (target) target.postMessage({ type: 'cache-urls', urls: paths.map(p => new URL(p, document.baseURI).href) });
    })
    .catch(() => {});
}
