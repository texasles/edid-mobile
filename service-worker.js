// service-worker.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('edid-v1').then(cache =>
      cache.addAll([
        '/',
        '/index.html',
        '/edid-widget.js',
        '/manifest.json',
        '/service-worker.js',
        '/icon-192.png',
        '/icon-512.png'
      ])
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
