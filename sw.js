var CACHE_NAME = 'game-timer-v3';

var SHELL_ASSETS = [
  './',
  './index.html',
  './themes.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

/* ── Install: cache the app shell ─────────────────────────────── */
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(SHELL_ASSETS);
    })
  );
  self.skipWaiting();
});

/* ── Activate: delete old caches ──────────────────────────────── */
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE_NAME; })
            .map(function (key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

/* ── Fetch: cache-first for same-origin assets ─────────────────── */
self.addEventListener('fetch', function (event) {
  var url = new URL(event.request.url);

  /* Let Google Fonts and any other cross-origin requests fall through */
  if (url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function (cached) {
      if (cached) return cached;
      return fetch(event.request).then(function (response) {
        /* Only cache successful same-origin responses */
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        var toCache = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, toCache);
        });
        return response;
      });
    })
  );
});
