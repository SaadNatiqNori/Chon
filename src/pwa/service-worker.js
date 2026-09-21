/* eslint-env serviceworker */
// The offline layer.
//
// Two caches, because the two halves of the site are worth different things.
// The shell — the page, the script, the stylesheet, the fonts, the logos — is
// small and is what every visit needs, so it is taken in one go at install and
// served from disk from then on. The guide screenshots are ten megabytes and
// nobody reads all of them, so they are kept as they are read: open a guide
// once on wifi and it is yours on the bus.
//
// PRECACHE is written in by the build, so every deploy gets its own cache name
// and the one before it is thrown away on activate.

const VERSION = '__VERSION__';
const PRECACHE = __PRECACHE__;

const SHELL = 'chon-shell-' + VERSION;
const RUNTIME = 'chon-runtime-v1';

// Everything is addressed relative to the worker, which sits at the root of
// the deployment, so the same file works at /Chon/dist/ and at a domain root.
const url = path => new URL(path, self.location.href).href;
const INDEX = url('./');

// A server that answers with `Vary: Origin` — which is most of them, and both
// Vite's preview and Apache among them — makes the cache match on a header the
// worker's own precache requests never carried. The stored file is then
// invisible to the page's stylesheet and module requests, which carry it, and
// the site quietly falls back to a network that is not there. Matching without
// Vary is what makes precaching work at all.
const MATCH = { ignoreVary: true };

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(SHELL)
      // addAll is all or nothing: one 404 in the list and nothing is cached at
      // all. Each entry is added on its own so a missing file costs only that
      // file, and the visitor still gets an offline site.
      .then(cache => Promise.all(
        PRECACHE.map(path => cache.add(url(path)).catch(() => {}))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(
        names
          .filter(n => n.startsWith('chon-') && n !== SHELL && n !== RUNTIME)
          .map(n => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

// The page asks for this after it has finished loading a guide it wants kept.
self.addEventListener('message', event => {
  if (!event.data || event.data.type !== 'cache-urls') return;
  event.waitUntil(
    caches.open(RUNTIME).then(cache => Promise.all(
      (event.data.urls || []).map(u =>
        cache.match(u, MATCH).then(hit => (hit ? null : cache.add(u).catch(() => {})))
      )
    ))
  );
});

function isShot(request) {
  return request.destination === 'image' || /\.(jpe?g|png|webp|avif|gif|svg)$/i.test(new URL(request.url).pathname);
}

// Reads from the cache and refreshes it in the background, so a repeat visit
// paints instantly and still ends up on the current file.
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(request, MATCH);
  const fetching = fetch(request)
    .then(response => {
      if (response && response.ok && response.type === 'basic') cache.put(request, response.clone());
      return response;
    })
    .catch(() => null);
  return hit || (await fetching) || Response.error();
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  // Every cache, not just this one: the brand icons are images as well, and
  // looking only here would keep a second copy of what install already took.
  const hit = await caches.match(request, MATCH);
  if (hit) return hit;
  try {
    const response = await fetch(request);
    if (response && response.ok && response.type === 'basic') cache.put(request, response.clone());
    return response;
  } catch (e) {
    return (await caches.match(request, MATCH)) || Response.error();
  }
}

// A guide is a hash on the one page, so every navigation in this app is a
// request for the same document. Cache first keeps it instant and keeps it
// working with no network at all; the copy on disk is refreshed behind it.
async function navigate(request) {
  const cache = await caches.open(SHELL);
  const hit = (await cache.match(request, MATCH)) || (await cache.match(INDEX, MATCH));
  const fetching = fetch(request)
    .then(response => {
      if (response && response.ok) cache.put(INDEX, response.clone());
      return response;
    })
    .catch(() => null);
  return hit || (await fetching) || Response.error();
}

self.addEventListener('fetch', event => {
  const { request } = event;

  // A POST is never ours to answer, and another origin's file is its own
  // business: both go to the network untouched.
  if (request.method !== 'GET') return;
  if (new URL(request.url).origin !== self.location.origin) return;

  // The edge function that answers which country a reader is in has a different
  // answer for every visitor, and no answer at all worth keeping. Cached, it
  // would hand the first reader's country to everyone behind the same node.
  if (new URL(request.url).pathname.startsWith('/api/')) return;

  if (request.mode === 'navigate') {
    event.respondWith(navigate(request));
    return;
  }

  if (isShot(request)) {
    event.respondWith(cacheFirst(request, RUNTIME));
    return;
  }

  event.respondWith(staleWhileRevalidate(request, SHELL));
});
