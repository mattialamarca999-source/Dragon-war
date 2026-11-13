// Dragon War RPG: service worker solo per la cartella /rpg/ (separato dal gioco d'assedio).
// Con internet scarica sempre l'ultima versione; senza, usa quella salvata.
const CACHE='dw-rpg-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./manifest.json','./icon-192.png','./icon-512.png'])));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('dw-rpg-')&&k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin||!u.pathname.includes('/rpg/'))return;
  e.respondWith(fetch(r,{cache:'no-cache'}).then(res=>{if(res.status===200){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res}).catch(()=>caches.match(r).then(h=>h||caches.match('./'))))});
