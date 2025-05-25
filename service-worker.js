self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('edid-cache-v1').then(cache =>
      cache.addAll([
        './',
        './index.html',
        './edid-widget.js',
        './manifest.json',
        './icon-192.png',
        './icon-512.png'
      ])
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
