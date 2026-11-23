// ---------- sfondi dei mondi (disegnati una volta sola per mondo e ora del giorno) ----------
let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647, rr = (a, b) => a + rnd() * (b - a);
let WORLD = 'bosco', TIME = 1, OBI = 0, LIGHTS = [];
const TIMES = ['Giorno', 'Tramonto', 'Notte'];
function layer(w, fn, grade = 1) { const c = document.createElement('canvas'); c.width = Math.ceil(w * S); c.height = Math.ceil(H * S); const old = g; g = c.getContext('2d'); g.scale(S, S); fn(w);
  if (grade && TIME) { g.save(); g.globalCompositeOperation = 'source-atop'; g.fillStyle = TIME === 2 ? (WD().night || 'rgba(16,20,64,.5)') : 'rgba(255,120,70,.12)'; g.fillRect(0, 0, w, H); g.restore(); }
  g = old; return c; }
const WD = () => WORLDS[WORLD];
const atm = (c, k) => mix(c, WD().sky[TIME][3], k);                                 // prospettiva aerea: le cose lontane prendono il colore del cielo
function tree(x, y, s, col, trunk = '#6a4630') { V(SP(`M${x - 3 * s},${y} L${x - 2 * s},${y - 22 * s} L${x + 2 * s},${y - 22 * s} L${x + 3 * s},${y}Z`), trunk, x, y - 10 * s, 10 * s, 1.6 * s);
  for (const [dx, dy, r] of [[-11, -28, 13], [11, -30, 12], [0, -42, 15], [-2, -26, 12]]) V(E(x + dx * s, y + dy * s, r * s, r * s * .92), col, x + dx * s, y + dy * s, r * s, 2 * s); }
function pine(x, y, s, col, snow) { g.fillStyle = col; for (let i = 0; i < 3; i++) { g.beginPath(); g.moveTo(x, y - (46 - i * 4) * s); g.lineTo(x - (8 + i * 4) * s, y - (26 - i * 12) * s); g.lineTo(x + (8 + i * 4) * s, y - (26 - i * 12) * s); g.fill();
    if (snow) { g.fillStyle = snow; g.beginPath(); g.moveTo(x, y - (46 - i * 4) * s); g.lineTo(x - (5 + i * 2.6) * s, y - (34 - i * 10) * s); g.quadraticCurveTo(x, y - (38 - i * 10) * s, x + (5 + i * 2.6) * s, y - (34 - i * 10) * s); g.fill(); g.fillStyle = col; } }
  g.fillRect(x - 1.5 * s, y - 4 * s, 3 * s, 5 * s); }
function ridge(y0, amp, step, w, sharp = 0) { const p = new Path2D(); p.moveTo(-20, H); p.lineTo(-20, y0); let y = y0; for (let x = -20; x <= w + step; x += step) { const ny = y0 - rnd() * amp; if (sharp) p.lineTo(x + step * .5, Math.min(y, ny) - amp * sharp * rnd()); else p.quadraticCurveTo(x + step * .5, Math.min(y, ny) - amp * .22, x + step, ny); if (sharp) p.lineTo(x + step, ny); y = ny; } p.lineTo(w + 20, H); p.closePath(); return p; }
function shadeClip(p, y0, y1, top, bot) { g.save(); g.clip(p); const a = g.createLinearGradient(0, y0, 0, y1); a.addColorStop(0, top); a.addColorStop(1, bot); g.fillStyle = a; g.fillRect(-20, y0 - 200, 4000, y1 - y0 + 400); g.restore(); }
function clouds(w, n, y0, y1, k = 1) { const W = WD(), c = TIME === 0 ? ['rgba(255,255,255,.85)', 'rgba(200,215,240,.7)'] : TIME === 1 ? ['rgba(120,78,150,.55)', 'rgba(255,170,120,.75)'] : ['rgba(40,40,90,.6)', 'rgba(90,90,150,.35)'];
  for (let i = 0; i < n; i++) { const x = rr(0, w), y = rr(y0, y1), s = rr(.7, 1.5) * k;
    for (const [dx, dy, rx, ry] of [[0, 0, 60, 13], [-34, 5, 40, 10], [38, 6, 46, 10], [6, -9, 34, 12]]) { const p = E(x + dx * s, y + dy * s, rx * s, ry * s); F(p, c[0]); g.save(); g.clip(p); F(E(x + dx * s, y + dy * s + ry * s * .9, rx * s, ry * s), c[1]); g.restore(); } } }
function skyLayer(w) {
  const W = WD(), st = W.sky[TIME], sg = g.createLinearGradient(0, 0, 0, HOR + 20); st.forEach((c, i) => sg.addColorStop(i / (st.length - 1), c)); g.fillStyle = sg; g.fillRect(0, 0, w, H);
  if (TIME === 2) { for (let i = 0; i < 90; i++) { g.fillStyle = `rgba(255,248,230,${rr(.3, .95)})`; g.beginPath(); g.arc(rr(0, w), rr(0, HOR - 60), rr(.5, 1.6), 0, 7); g.fill(); }
    const mx = w * .72, my = 96, gl = g.createRadialGradient(mx, my, 6, mx, my, 170); gl.addColorStop(0, 'rgba(230,240,255,.55)'); gl.addColorStop(1, 'rgba(160,180,255,0)'); g.fillStyle = gl; g.fillRect(0, 0, w, H);
    F(E(mx, my, 24, 24), '#f4f2e0', '#c8d8ff'); for (const [dx, dy, r] of [[-7, -5, 5], [6, 6, 4], [8, -8, 3]]) F(E(mx + dx, my + dy, r, r), 'rgba(180,180,170,.45)'); }
  else if (TIME === 1) { const sx = w * .6, sy = 262, gl = g.createRadialGradient(sx, sy, 8, sx, sy, 300); gl.addColorStop(0, 'rgba(255,250,220,1)'); gl.addColorStop(.1, 'rgba(255,224,150,.85)'); gl.addColorStop(.4, 'rgba(255,150,90,.3)'); gl.addColorStop(1, 'rgba(255,120,90,0)');
    g.fillStyle = gl; g.fillRect(0, 0, w, H); F(E(sx, sy, 34, 34), '#fff8dc', '#ffd27a'); for (let i = 0; i < 30; i++) { g.fillStyle = `rgba(255,244,220,${rr(.2, .6)})`; g.beginPath(); g.arc(rr(0, w), rr(0, 90), rr(.5, 1.2), 0, 7); g.fill(); } }
  else { const sx = w * .78, sy = 70, gl = g.createRadialGradient(sx, sy, 6, sx, sy, 200); gl.addColorStop(0, 'rgba(255,255,240,.95)'); gl.addColorStop(.15, 'rgba(255,250,210,.5)'); gl.addColorStop(1, 'rgba(255,250,210,0)'); g.fillStyle = gl; g.fillRect(0, 0, w, H); F(E(sx, sy, 22, 22), '#fffbe8', '#fff2b0'); }
  if (W.skyFx) W.skyFx(w);
}
let LAY = {};
function buildLayers() {
  const W = WD(); seed = W.seed || 7; LIGHTS = [];
  LAY.sky = layer(VW, skyLayer, 0);
  LAY.far = layer(VW + (WW - VW) * .2, w => W.far(w));
  LAY.hill = layer(VW + (WW - VW) * .5, w => W.hill(w));
  LAY.ground = layer(WW, w => {
    const gg = g.createLinearGradient(0, HOR, 0, H); W.gr.forEach((c, i) => gg.addColorStop([0, .16, .55, 1][i], c)); g.fillStyle = gg; g.fillRect(0, HOR, w, H - HOR);
    for (let i = 0; i < 12; i++) { const x = rr(0, w), y = rr(340, 520), r = rr(90, 190), p = g.createRadialGradient(x, y, 0, x, y, r); p.addColorStop(0, i % 3 ? W.patch[0] : W.patch[1]); p.addColorStop(1, 'rgba(0,0,0,0)'); g.save(); g.translate(0, y * .62); g.scale(1, .38); g.fillStyle = p; g.fillRect(x - r, y - r, r * 2, r * 2); g.restore(); }
    if (W.groundFx) W.groundFx(w);
    obGeo(); const ob = OBS[W.ob[OBI % W.ob.length]]; ob.draw(OBG, W);
    const lane = g.createLinearGradient(0, 0, 0, 1); lane.addColorStop(0, 'rgba(0,0,0,0)'); lane.addColorStop(.3, W.lane); lane.addColorStop(.75, W.lane); lane.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = lane; g.fillRect(0, 372, w, 114);
    const items = []; for (let i = 0; i < 300; i++) items.push([rr(0, w), HOR + 6 + Math.pow(rnd(), 1.4) * (H - HOR - 10), rnd()]);
    items.sort((a, b) => a[1] - b[1]);
    for (const [x, y, k] of items) { const d = (y - HOR) / (H - HOR), s = .35 + d * 1.1, pT = G0 + .78 * DEP(x, 0) * DY - 8, inLane = (y > pT && y < pT + .22 * DY + 22) || OBG.inside(x, y, 1.12) || (x < LX + 190 && y < BASE + 70) || (x > CX - 190 && y < BASE + 70);
      W.scatter(x, y, s, k, d, inLane); }
    g.save(); g.translate(LX, BASE); W.lair(); g.restore(); g.save(); g.translate(CX, BASE); W.castle(); g.restore();
  });
}
// ---------- l'ostacolo in mezzo alla curva: la sua forma (sempre la stessa) e 26 modi di riempirla ----------
let OBG = { inside: () => false };
function obGeo() {
  let q = 11; const R = () => (q = (q * 16807) % 2147483647) / 2147483647;
  const yT = G0 + 16, bot = x => G0 + (.78 * DEP(x, 0) - .09) * DY, xs = [];
  for (let x = LX + 40; x <= CX - 40; x += 12) if (bot(x) > yT + 26) xs.push(x);
  const x0 = xs[0], x1 = xs[xs.length - 1], cx = (x0 + x1) / 2, cy = (yT + bot(cx)) / 2, wob = xs.map((_, i) => Math.sin(i * .9 + R() * 6) * 3 + Math.sin(i * .37) * 5);
  const shape = (sh, jag = 1, dy = 0) => { const p = new Path2D(), pt = (x, y) => [cx + (x - cx) * sh, cy + (y - cy) * sh + dy];
    xs.forEach((x, i) => { const [a, b] = pt(x, yT + wob[i] * .4 * jag); i ? p.lineTo(a, b) : p.moveTo(a, b); });
    for (let i = xs.length - 1; i >= 0; i--) { const [a, b] = pt(xs[i], bot(xs[i]) + wob[i] * jag); p.lineTo(a, b); } p.closePath(); return p; };
  const inside = (x, y, sh = 1) => { if (x < cx + (x0 - cx) * sh || x > cx + (x1 - cx) * sh) return false; return y > cy + (yT - cy) * sh && y < cy + (bot(x) - cy) * sh; };
  const pts = (n, sh, ring) => { const out = []; for (let t = 0; out.length < n && t < n * 60; t++) { const x = x0 + R() * (x1 - x0), y = yT - 6 + R() * (bot(cx) - yT + 12); if (inside(x, y, sh) && (!ring || !inside(x, y, ring))) out.push({ x, y, r: R() }); } return out.sort((a, b) => a.y - b.y); };
  OBG = { x0, x1, cx, cy, yT, bot, shape, inside, pts, R, ps: y => .5 + (y - G0) / DY * .7 };
}
const OBS = {};
let OBA = null;                                                             // animazione dell'ostacolo (riflessi, fumo, fiamme)
