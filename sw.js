const CACHE_NAME = 'pixel-click-v1';
const assets = [
  '/',
  '/index.html',
  '/pixel-trivia.html',
  '/pixel-stroop.html',
  '/style.css', // adicione o nome correto do seu arquivo CSS aqui
  '/thumb.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
