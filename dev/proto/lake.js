// ---------- l'ostacolo in mezzo alla curva (come nel gioco): il lago del Bosco ----------
let LK = { inside: () => false };
function lakeGeo() {
  let q = 11; const R = () => (q = (q * 16807) % 2147483647) / 2147483647;
  const yT = G0 + 16, bot = x => G0 + (.78 * DEP(x, 0) - .09) * DY, xs = [];
  for (let x = LX + 40; x <= CX - 40; x += 12) if (bot(x) > yT + 26) xs.push(x);
  const x0 = xs[0], x1 = xs[xs.length - 1], cx = (x0 + x1) / 2, cy = (yT + bot(cx)) / 2, wob = xs.map((_, i) => Math.sin(i * .9 + R() * 6) * 3 + Math.sin(i * .37) * 5);
  const shape = (sh, jag = 1, dy = 0) => { const p = new Path2D(), pt = (x, y) => [cx + (x - cx) * sh, cy + (y - cy) * sh + dy];
    xs.forEach((x, i) => { const [a, b] = pt(x, yT + wob[i] * .4 * jag); i ? p.lineTo(a, b) : p.moveTo(a, b); });
    for (let i = xs.length - 1; i >= 0; i--) { const [a, b] = pt(xs[i], bot(xs[i]) + wob[i] * jag); p.lineTo(a, b); } p.closePath(); return p; };
  const inside = (x, y, sh = 1) => { if (x < cx + (x0 - cx) * sh || x > cx + (x1 - cx) * sh) return false; return y > cy + (yT - cy) * sh && y < cy + (bot(x) - cy) * sh; };
  const pts = (n, sh, ring) => { const out = []; for (let t = 0; out.length < n && t < n * 60; t++) { const x = x0 + R() * (x1 - x0), y = yT - 6 + R() * (bot(cx) - yT + 12); if (inside(x, y, sh) && (!ring || !inside(x, y, ring))) out.push({ x, y, r: R() }); } return out.sort((a, b) => a.y - b.y); };
  LK = { x0, x1, cx, cy, yT, bot, shape, inside, few: pts(9, .78), rim: pts(30, 1.04, .9) };
}
function lakeDraw() {
  const k = LK; if (!k.x0) return;
  const ps = y => .5 + (y - G0) / DY * .7;
  F(k.shape(1.1, 1, 3), 'rgba(20,40,40,.25)');
  V(k.shape(1.06), '#b8a878', k.cx, k.cy, 200, 0); F(k.shape(1.0), '#8f8a64');
  const wat = k.shape(.95, .8);
  const wg = g.createLinearGradient(0, k.yT, 0, k.bot(k.cx)); wg.addColorStop(0, '#f2a27a'); wg.addColorStop(.25, '#b48ab0'); wg.addColorStop(.6, '#4f8fb0'); wg.addColorStop(1, '#2f6a8a');
  g.fillStyle = wg; g.fill(wat);
  g.save(); g.clip(wat);
  const sun = g.createRadialGradient(k.cx + 40, k.yT + 8, 2, k.cx + 40, k.yT + 8, 160); sun.addColorStop(0, 'rgba(255,230,170,.55)'); sun.addColorStop(1, 'rgba(255,230,170,0)'); g.fillStyle = sun; g.fillRect(k.x0, k.yT - 20, k.x1 - k.x0, 120);
  g.translate(0, 4); L(k.shape(.95, .8), 'rgba(20,40,70,.35)', 8); g.restore();
  L(wat, 'rgba(255,240,200,.55)', 1.6);
  for (const p of k.few.slice(0, 6)) { const s = ps(p.y); g.save(); g.translate(p.x, p.y); g.scale(s, s);
    V(SP('M0,0 L14,-2 A15,6 0 1 1 13,3Z'), '#5aa04a', 0, 0, 15, 1.6); if (p.r > .45) { for (let i = 0; i < 6; i++) { g.save(); g.translate(2, -3); g.rotate(i * 1.05); V(E(0, -4, 2.2, 4.4), i % 2 ? '#ffd0e0' : '#fff2f6', 0, -4, 4, 1); g.restore(); } F(E(2, -3, 1.8, 1.8), '#f2c040'); }
    g.restore(); }
  for (const [i, p] of k.rim.entries()) { const s = ps(p.y); g.save(); g.translate(p.x, p.y + 2); g.scale(s, s);
    if (i % 3 === 0) { for (const a of [-.35, -.1, .2, .4]) { const tx = a * 18, ty = -36 - p.r * 14 - Math.abs(a) * 8; L(SP(`M${a * 4},0 Q${tx * .4},${ty * .5} ${tx},${ty}`), dk('#5a8a3a', .55), 5); L(SP(`M${a * 4},0 Q${tx * .4},${ty * .5} ${tx},${ty}`), '#6aa044', 2.6); }
      V(E(6, -40 - p.r * 10, 3, 7.5), '#7a4a2a', 6, -40, 7, 1.4); }
    else if (i % 3 === 1) V(SP('M-12,0 Q-11,-10 0,-11 Q11,-9 12,0Z'), '#9a94a8', 0, -5, 12, 1.8);
    else for (const a of [-.5, 0, .5]) L(SP(`M${a * 5},0 Q${a * 7},-7 ${a * 12},${-11 + Math.abs(a) * 4}`), '#4f9a40', 2.2);
    g.restore(); }
}
function lakeAnim() {
  const k = LK; if (!k.x0) return; g.save(); g.clip(k.shape(.93, .8));
  for (const [i, p] of k.few.entries()) { const w = 22 + p.r * 30, o = Math.sin(T * 1.1 + i * 1.7) * 7; g.globalAlpha = .3 + .2 * Math.sin(T * 2 + i); F(E(p.x + o + 26, p.y + 4, w, w * .12), '#fff4dc'); }
  g.restore();
}
