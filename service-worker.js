self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('myfootprints-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/style.css',
        '/js/app.js',
        '/js/map.js',
        '/js/storage.js'
      ]);
    })
  );
});
