import './cache.js';

const cacheName = 'v1.0.1';
const cacheFiles = [
  '/img/icons/mpb-icon152.png',
  '/img/icons/mpb-icon144.png',
  '/img/icons/mpb-icon192.png',
];

self.addEventListener('beforeinstallprompt', function(e) {
  // beforeinstallprompt Event fired

  // e.userChoice will return a Promise.
  // For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
  e.userChoice.then(choiceResult => {
    console.log(choiceResult.outcome);
    if (choiceResult.outcome === 'dismissed') {
      console.log('User cancelled home screen install');
    } else {
      console.log('User added to home screen');
    }
  });
});

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('ServiceWorker installed');
      return cache.addAll(cacheFiles)
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(cacheNames.map(function(thisCacheName) {
        if (thisCacheName !== cacheName) {
          console.log('ServiceWorker removing cached files from',
            sthisCacheName);
          return caches.delete(thisCacheName);
        }
      }));
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch: true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
