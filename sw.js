// Dragon War: tiene il gioco nel telefono per giocare anche senza internet.
// Con internet scarica sempre l'ultima versione del gioco; senza, usa quella salvata.
// Musica, effetti e versi invece si scaricano una volta sola e poi partono subito dal telefono.
const CACHE = 'dragon-war-v33';
const AUDIO = 'dragon-war-audio-v1';                 // cambia nome solo se cambiano i file audio
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
const FIRST = ['audio/mus_menu.mp3', 'audio/mus_story.mp3', 'audio/mus_w1.mp3'];   // la prima musica è pronta già all'installazione
self.addEventListener('install', e => {
  e.waitUntil(Promise.all([caches.open(CACHE).then(c => c.addAll(FILES)), caches.open(AUDIO).then(c => Promise.all(FIRST.map(f => c.add(f).catch(() => {}))))]));
  self.skipWaiting();
});
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== AUDIO).map(k => caches.delete(k))))); self.clients.claim(); });
async function audio(req) {                          // il file intero sta in memoria; se il lettore chiede un pezzo (Range) glielo taglio io
  const url = req.url.split('#')[0], c = await caches.open(AUDIO);
  let full = await c.match(url);
  if (!full) {
    const res = await fetch(url);                   // senza Range: scarico il file intero una volta
    if (!res.ok) return res;
    await c.put(url, res.clone()); full = res;
  }
  const range = req.headers.get('range');
  if (!range) return full;
  const buf = await full.arrayBuffer(), size = buf.byteLength, m = /bytes=(\d*)-(\d*)/.exec(range) || [];
  const start = m[1] ? +m[1] : 0, end = m[2] ? Math.min(+m[2], size - 1) : size - 1;
  return new Response(buf.slice(start, end + 1), {status:206, statusText:'Partial Content', headers:{'Content-Type':'audio/mpeg', 'Content-Range':`bytes ${start}-${end}/${size}`, 'Content-Length':String(end - start + 1), 'Accept-Ranges':'bytes'}});
}
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const font = /fonts\.(googleapis|gstatic)\.com/.test(r.url);
  if (font) { e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); return res; }))); return; }
  const u = new URL(r.url); if (u.origin !== location.origin) return;
  if (u.pathname.includes('/rpg/')) return;             // la cartella /rpg/ è un altro gioco col suo service worker
  if (/\/audio\/[^/]+\.mp3$/.test(u.pathname)) { e.respondWith(audio(r).catch(() => fetch(r))); return; }
  e.respondWith(fetch(r, {cache: 'no-cache'}).then(res => { if (res.status === 200) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); } return res; }).catch(() => caches.match(r).then(hit => hit || caches.match('./index.html'))));
});
