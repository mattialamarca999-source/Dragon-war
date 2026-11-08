// Dragon War: tiene il gioco nel telefono per giocare anche senza internet.
// Con internet scarica sempre l'ultima versione; senza, usa quella salvata.
const CACHE = 'dragon-war-v10';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const font = /fonts\.(googleapis|gstatic)\.com/.test(r.url);
  if (font) { e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); return res; }))); return; }
  if (new URL(r.url).origin !== location.origin) return;
  e.respondWith(fetch(r, {cache: 'no-cache'}).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); return res; }).catch(() => caches.match(r).then(hit => hit || caches.match('./index.html'))));
});
