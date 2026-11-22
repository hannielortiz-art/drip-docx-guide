/* Drip Docx Nurse Guide: keeps a copy of the app so it opens without signal.
   Pages and files load from the network first (so updates arrive right away) and fall back to the saved copy. */
const CACHE = "ddx-shell-2";
const SHELL = ["./", "index.html", "logo.jpg", "manifest.webmanifest", "icon-192.png?v=4", "icon-512.png", "apple-touch-icon.png?v=4",
  "fonts/montserrat-latin-400-normal.woff2", "fonts/montserrat-latin-500-normal.woff2", "fonts/montserrat-latin-600-normal.woff2", "fonts/playfair-display-latin-500-normal.woff2", "fonts/playfair-display-latin-600-normal.woff2", "fonts/playfair-display-latin-500-italic.woff2", "fonts/atkinson-hyperlegible-latin-400-normal.woff2", "fonts/atkinson-hyperlegible-latin-700-normal.woff2"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  const net = fetch(req).then(r => { if (r && (r.ok || r.type === "opaque")) cache.put(req, r.clone()); return r; });
  net.catch(() => {});
  const wait = new Promise(res => setTimeout(() => res(null), 4000));
  try { const r = await Promise.race([net, wait]); if (r) return r; } catch (e) {}
  const hit = (await cache.match(req, { ignoreSearch: true })) || (req.mode === "navigate" ? ((await cache.match("index.html")) || (await cache.match("./"))) : null);
  return hit || net;
}
async function cacheFirst(req) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req);
  if (hit) return hit;
  const r = await fetch(req);
  if (r && (r.ok || r.type === "opaque")) cache.put(req, r.clone());
  return r;
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    if (url.pathname.endsWith("/version.json")) return; /* the update check always goes to the network */
    e.respondWith(networkFirst(req));
  } else if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(cacheFirst(req));
  }
});

self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window" }).then(cs => cs.length ? cs[0].focus() : self.clients.openWindow("./")));
});
