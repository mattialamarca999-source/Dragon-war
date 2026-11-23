// ---------- pezzi comuni: fiamme e bandiere animate, tana di roccia, castello di pietra, acqua ----------
let FLAMES = [], FLAGS = [];
const addFlame = (x, y, s = 1, c = 0) => { FLAMES.push({ x, y, s, c }); LIGHTS.push({ x, y: y - 10, r: 70 * s, c: c === 1 ? 'rgba(120,200,255,.5)' : c === 2 ? 'rgba(190,110,255,.5)' : 'rgba(255,160,70,.5)' }); };
const addFlag = (x, y, c) => FLAGS.push({ x, y, c });
const addLight = (x, y, r, c = 'rgba(255,200,110,.45)') => LIGHTS.push({ x, y, r, c });
function lairRock(o) {                                                      // la tana: montagna di roccia con la bocca della grotta a denti, il teschio sopra, due torce
  const rock = o.rock || '#5a4f78', hi = o.hi || 'rgba(255,214,170,.3)';
  F(E(10, 22, 190, 30), 'rgba(16,10,40,.42)');
  for (const [x, hh, wd] of [[-120, 250, 60], [90, 215, 54], [-50, 280, 70]]) V(SP(`M${x - wd / 2},0 L${x - wd * .3},${-hh * .7} L${x},${-hh} L${x + wd * .34},${-hh * .62} L${x + wd / 2},0Z`), dk(rock, .28), x, -hh * .5, hh * .6);
  const m = SP('M-170,46 L-166,-70 Q-150,-160 -96,-196 L-40,-212 L40,-208 Q92,-190 122,-128 Q146,-70 150,-10 L164,46Z'); V(m, rock, -10, -80, 210, 3);
  g.save(); g.clip(m);
  F(PL([-96, -196, -40, -212, 40, -208, 60, -176, -20, -168, -90, -160]), hi);
  F(PL([60, -176, 122, -128, 150, -10, 164, 46, 100, 46, 96, -80]), 'rgba(20,10,50,.34)');
  for (const p of ['M-90,-160 L-70,-90 L-110,-20', 'M-20,-168 L-10,-110 L-50,-60', 'M-70,-90 L-10,-110', 'M-50,-60 L-60,46']) L(SP(p), 'rgba(20,10,50,.3)', 2.4);
  if (o.top) o.top(); g.restore(); rim(m, o.rim || 'rgba(255,190,130,.55)', 5);
  const cave = SP('M22,46 L24,-36 Q30,-92 76,-92 Q122,-92 128,-36 L130,46Z');
  for (let i = 0; i <= 8; i++) { const a = Math.PI + i / 8 * Math.PI, x = 76 + Math.cos(a) * 62, y = -34 + Math.sin(a) * 68; g.save(); g.translate(x, y); g.rotate(a + Math.PI / 2); V(SP('M-13,-11 L13,-11 L11,11 L-11,11Z'), mix(o.arch || '#7a6f98', rock, i % 2), 0, 0, 16); g.restore(); }
  for (const x of [14, 138]) V(SP(`M${x - 13},46 L${x - 12},-30 L${x + 12},-30 L${x + 13},46Z`), o.arch2 || '#6a5f88', x, 0, 44);
  F(cave, '#120818'); g.save(); g.clip(cave); const cg = g.createRadialGradient(76, 50, 4, 76, 30, 96); const gc = o.glow || [255, 150, 60]; cg.addColorStop(0, `rgba(${gc},.95)`); cg.addColorStop(.5, `rgba(${gc[0] * .8 | 0},${gc[1] * .4 | 0},${gc[2] * .7 | 0},.4)`); cg.addColorStop(1, 'rgba(60,10,60,0)'); g.fillStyle = cg; g.fillRect(0, -100, 150, 150);
  for (const [x, l] of [[36, 20], [52, 30], [70, 22], [88, 32], [106, 24], [120, 16]]) V(PL([x - 7, -96, x, -96 + l + 34, x + 7, -96]), o.teeth || '#cfc8dc', x, -70, 20, 2);
  g.restore(); addLight(LX + 76, BASE + 10, 120, `rgba(${gc},.45)`);
  g.save(); g.translate(76, -112); V(SP('M-13,-4 Q-34,-14 -32,-34 Q-22,-18 -8,-14Z'), '#e6dcc4', -20, -18, 14, 2); V(SP('M13,-4 Q34,-14 32,-34 Q22,-18 8,-14Z'), '#e6dcc4', 20, -18, 14, 2);
  V(SP('M-15,-6 Q-15,-22 0,-22 Q15,-22 15,-6 Q15,4 8,7 L8,14 L-8,14 L-8,7 Q-15,4 -15,-6Z'), o.skull || '#f2ead6', 0, -6, 18); F(E(-6, -6, 4, 5), '#1b1238'); F(E(6, -6, 4, 5), '#1b1238'); F(PL([-2, 3, 0, -2, 2, 3]), '#1b1238'); for (const x of [-4, 0, 4]) L(SP(`M${x},9 L${x},14`), '#1b1238', 1.2);
  if (TIME === 2) { F(E(-6, -6, 2, 2.4), `rgba(${gc},.9)`); F(E(6, -6, 2, 2.4), `rgba(${gc},.9)`); } g.restore();
  for (const x of [-4, 156]) { seg(x, 30, x, -26, 5, '#5a3a24'); V(SP(`M${x - 8},-26 L${x + 8},-26 L${x + 5},-14 L${x - 5},-14Z`), '#4a4458', x, -20, 9, 2); addFlame(LX + x, BASE - 28, 1, o.fl || 0); }
  for (const [x, y, s] of [[176, 50, 1], [-150, 56, 1.3], [112, 64, .8]]) V(SP(`M${x - 16 * s},${y} Q${x - 14 * s},${y - 18 * s} ${x},${y - 20 * s} Q${x + 15 * s},${y - 16 * s} ${x + 17 * s},${y}Z`), o.arch2 || '#6a5f88', x, y - 10 * s, 18 * s);
  if (o.deco) o.deco();
}
function castleStd(o) {                                                     // castello di pietra: mastio, mura merlate, portone, due torri tonde
  const st = o.st || '#e6d8bc', roof = o.roof || '#3d62b8';
  F(E(0, 30, 200, 30), 'rgba(16,10,40,.4)');
  tower(34, -50, 78, 190, dk(st, .1), o.roof2 || dk(roof, .1), o.spire);
  const side = PL([-88, 34, -128, 10, -128, -84, -88, -74]); L(side, dk(st, .7), 5); F(side, lt(st, .25));
  const wall = SP('M-88,34 L-88,-74 L112,-74 L112,34Z'); L(wall, dk(st, .7), 5); F(wall, stone(-88, 0, 200, 0, st));
  g.save(); g.clip(wall); g.strokeStyle = 'rgba(60,40,90,.18)'; g.lineWidth = 1.6; for (let i = 0; i < 16; i++) g.strokeRect(-80 + (i * 53) % 176, -62 + (i * 29) % 84, 16, 8);
  const ao = g.createLinearGradient(0, -6, 0, 34); ao.addColorStop(0, 'rgba(27,14,60,0)'); ao.addColorStop(1, 'rgba(27,14,60,.36)'); g.fillStyle = ao; g.fillRect(-90, -6, 204, 42); if (o.wallDeco) o.wallDeco(); g.restore();
  for (let i = 0; i < 8; i++) { const mx = -88 + i * 26.4, p = SP(`M${mx},-73 L${mx},-90 L${mx + 15},-90 L${mx + 15},-73Z`); L(p, dk(st, .7), 5); F(p, mix(lt(st, .4), dk(st, .3), i / 7)); F(PL([mx, -90, mx + 15, -90, mx + 11, -94, mx - 4, -94]), o.cap || lt(st, .55)); }
  const gate = SP('M-18,34 L-18,-12 Q8,-50 34,-12 L34,34Z'); V(SP('M-28,34 L-28,-14 Q8,-66 44,-14 L44,34Z'), dk(st, .18), 8, -10, 50);
  F(gate, o.gate || '#6a4428'); g.save(); g.clip(gate); for (let x = -12; x < 34; x += 9) L(SP(`M${x},-50 L${x},34`), dk(o.gate || '#6a4428', .3), 1.6); for (const y of [-4, 18]) F(SP(`M-18,${y} L34,${y} L34,${y + 4} L-18,${y + 4}Z`), '#3a3a4a'); g.restore(); L(gate, dk(st, .75), 3);
  for (const x of [-56, 78]) { const w = SP(`M${x - 8},-22 L${x - 8},-40 Q${x},-52 ${x + 8},-40 L${x + 8},-22Z`); L(w, dk(st, .7), 5); F(w, '#ffd27a', '#ffb040'); L(SP(`M${x},-46 L${x},-22`), '#6a4a2a', 1.6); addLight(CX + x, BASE - 32, 40); }
  V(SP('M-4,-70 L20,-70 L20,-52 L8,-44 L-4,-52Z'), o.shield || '#2f6fd6', 8, -60, 16, 2); F(SP('M8,-66 L10.4,-60 L16,-60 L11.6,-56 L13,-50 L8,-54 L3,-50 L4.4,-56 L0,-60 L5.6,-60Z'), '#f2c14e');
  tower(-112, 46, 62, 176, st, roof, o.spire); tower(132, 50, 66, 150, st, roof, o.spire);
  addFlag(CX - 112, BASE + 46 - 176 - 22 - 62 * (o.spire ? 1.8 : 1.2) - 24, o.flag || '#e0483a'); addFlag(CX + 132, BASE + 50 - 150 - 22 - 66 * (o.spire ? 1.8 : 1.2) - 24, o.flag || '#e0483a'); addFlag(CX + 34, BASE - 50 - 190 - 22 - 78 * (o.spire ? 1.8 : 1.2) - 24, o.flag2 || '#f2c14e');
  if (o.deco) o.deco();
}
function tower(x, yb, w, h, col, roof, spire) {
  const top = yb - h, r = w / 2, e = w * .15, body = SP(`M${x - r},${yb} L${x - r},${top} L${x + r},${top} L${x + r},${yb} A${r},${e} 0 0 1 ${x - r},${yb}Z`);
  L(body, dk(col, .7), 5); F(body, stone(x - r, 0, w, 0, col));
  g.save(); g.clip(body); g.strokeStyle = 'rgba(60,40,90,.2)'; g.lineWidth = 1.6; for (let i = 0; i < h / 16; i++) { const bx = x - r + ((i * 37) % (w - 16)) + 2, by = top + 26 + i * 15; g.strokeRect(bx, by, 14, 7); }
  const ao = g.createLinearGradient(0, yb - 36, 0, yb + e); ao.addColorStop(0, 'rgba(27,14,60,0)'); ao.addColorStop(1, 'rgba(27,14,60,.38)'); g.fillStyle = ao; g.fillRect(x - r, yb - 36, w, 40 + e); g.restore();
  const band = SP(`M${x - r - 6},${top + 4} L${x - r - 6},${top - 14} L${x + r + 6},${top - 14} L${x + r + 6},${top + 4} A${r + 6},${e} 0 0 1 ${x - r - 6},${top + 4}Z`);
  L(band, dk(col, .7), 5); F(band, stone(x - r - 6, 0, w + 12, 0, lt(col, .1)));
  const n = 5, mw = (w + 12) / (n * 2 - 1); for (let i = 0; i < n; i++) { const mx = x - r - 6 + i * mw * 2, p = SP(`M${mx},${top - 13} L${mx},${top - 25} L${mx + mw},${top - 25} L${mx + mw},${top - 13}Z`); L(p, dk(col, .7), 5); F(p, mix(lt(col, .4), dk(col, .36), i / (n - 1))); }
  if (roof) { const rb = top - 22, rh = w * (spire ? 1.8 : 1.2), cone = SP(`M${x - r - 3},${rb} L${x},${rb - rh} L${x + r + 3},${rb} A${r + 3},${e} 0 0 1 ${x - r - 3},${rb}Z`); L(cone, dk(roof, .7), 5); F(cone, stone(x - r - 3, 0, w + 6, 0, roof));
    g.save(); g.clip(cone); for (let i = 1; i < 5; i++) L(SP(`M${x - r - 3},${rb - rh * i / 5 + e} Q${x},${rb - rh * i / 5 + e * 2.4} ${x + r + 3},${rb - rh * i / 5 + e}`), 'rgba(20,10,60,.22)', 1.6); g.restore();
    seg(x, rb - rh, x, rb - rh - 26, 2, '#5a4a3a'); V(E(x, rb - rh - 1, 3.4, 3.4), '#f2c14e', x, rb - rh, 4, 1.6); }
  const wy = top + h * .34, win = SP(`M${x - 7},${wy + 14} L${x - 7},${wy} Q${x},${wy - 12} ${x + 7},${wy} L${x + 7},${wy + 14}Z`); L(win, dk(col, .7), 5); F(win, '#ffd27a', '#ffb040'); L(SP(`M${x},${wy - 5} L${x},${wy + 14}`), '#6a4a2a', 1.6);
  addLight(x + (x < 0 || x > 0 ? 0 : 0) + (g.getTransform().e / S), wy + g.getTransform().f / S, 34);
}
function stone(x, y, w, h, col) { const gr = g.createLinearGradient(x, 0, x + w, 0); gr.addColorStop(0, lt(col, .4)); gr.addColorStop(.28, col); gr.addColorStop(.8, dk(col, .42)); gr.addColorStop(1, dk(col, .26)); return gr; }
function flag(x, y, t, col) { g.save(); g.translate(x, y); const a = Math.sin(t * 3 + x) * 4, b = Math.cos(t * 3.4 + x) * 3; V(SP(`M0,0 Q-12,${-3 + a} -24,${b} Q-34,${4 + a} -42,${2 + b} L-36,${11 + b} L-42,${20 + b} Q-34,${22 + a} -24,${18 + b} Q-12,${15 + a} 0,18Z`), col, -20, 9, 26, 2); g.restore(); }
function flame(x, y, t, s, c = 0) { const P = c === 1 ? ['120,200,255', '#4ab8ff', '#bff0ff', '#ffffff'] : c === 2 ? ['190,110,255', '#9a4aff', '#d8a8ff', '#f8eaff'] : ['255,170,70', '#ff6a24', '#ffc23a', '#fff6c8'];
  g.save(); g.translate(x, y); g.scale(s, s); g.globalCompositeOperation = 'lighter'; const gl = g.createRadialGradient(0, -8, 2, 0, -8, 46); gl.addColorStop(0, `rgba(${P[0]},.5)`); gl.addColorStop(1, `rgba(${P[0]},0)`); g.fillStyle = gl; g.fillRect(-50, -58, 100, 100); g.globalCompositeOperation = 'source-over';
  const k = Math.sin(t * 9 + x) * 2.4, k2 = Math.sin(t * 13 + x) * 2; F(SP(`M-8,0 Q-11,-12 ${-3 + k},-26 Q${2 + k2},-16 9,-6 Q9,2 0,3 Q-6,3 -8,0Z`), P[1]); F(SP(`M-5,0 Q-6,-9 ${-1 + k2},-17 Q${3 + k},-9 5,-3 Q5,2 0,2Z`), P[2]); F(SP(`M-2.4,0 Q-3,-5 ${k * .4},-9 Q3,-4 2.4,0Z`), P[3]); g.restore(); }
function waterBody(k, W, o = {}) {                                          // acqua che riflette il cielo, con la riva intorno
  const bank = o.bank || W.bank || '#b8a878';
  F(k.shape(1.1, 1, 3), 'rgba(20,40,40,.25)'); V(k.shape(1.06), bank, k.cx, k.cy, 200, 0); F(k.shape(1.0), dk(bank, .22));
  const wat = k.shape(o.sh || .95, .8), sk = W.sky[TIME], deep = o.deep || '#2f6a8a', wg = g.createLinearGradient(0, k.yT, 0, k.bot(k.cx));
  wg.addColorStop(0, mix(sk[3], deep, .25)); wg.addColorStop(.3, mix(sk[2], deep, .45)); wg.addColorStop(.65, o.mid || mix(deep, '#ffffff', .2)); wg.addColorStop(1, deep); g.fillStyle = wg; g.fill(wat);
  g.save(); g.clip(wat); g.translate(0, 4); L(k.shape(.95, .8), 'rgba(20,40,70,.35)', 8); g.restore(); L(wat, 'rgba(255,240,200,.55)', 1.6);
  const few = k.pts(9, .78); OBA = () => { g.save(); g.clip(k.shape(.93, .8)); for (const [i, p] of few.entries()) { const w2 = 22 + p.r * 30, of = Math.sin(T * 1.1 + i * 1.7) * 7; g.globalAlpha = .3 + .2 * Math.sin(T * 2 + i); F(E(p.x + of + 26, p.y + 4, w2, w2 * .12), o.glint || '#fff4dc'); } g.restore(); };
  return few;
}
function boulder(x, y, s, col, cap) { F(E(x + 3 * s, y + 1, 15 * s, 4 * s), 'rgba(20,30,50,.3)'); const p = SP(`M${x - 14 * s},${y} Q${x - 15 * s},${y - 14 * s} ${x - 4 * s},${y - 18 * s} Q${x + 8 * s},${y - 21 * s} ${x + 14 * s},${y - 10 * s} Q${x + 16 * s},${y - 3 * s} ${x + 14 * s},${y}Z`); V(p, col, x - 3 * s, y - 10 * s, 16 * s, 2 * s);
  g.save(); g.clip(p); L(SP(`M${x - 4 * s},${y - 18 * s} L${x},${y - 8 * s} L${x + 8 * s},${y - 4 * s}`), dk(col, .3), 1.4 * s); if (cap) F(SP(`M${x - 15 * s},${y - 9 * s} Q${x - 10 * s},${y - 22 * s} ${x},${y - 20 * s} Q${x + 10 * s},${y - 21 * s} ${x + 15 * s},${y - 8 * s} Q${x + 6 * s},${y - 12 * s} ${x},${y - 10 * s} Q${x - 8 * s},${y - 13 * s} ${x - 15 * s},${y - 9 * s}Z`), cap); g.restore(); }
function grassTuft(x, y, s, c) { g.strokeStyle = c; g.lineCap = 'round'; g.lineWidth = 2.2 * s; for (const a of [-.5, 0, .5]) { g.beginPath(); g.moveTo(x + a * 5 * s, y); g.quadraticCurveTo(x + a * 7 * s, y - 7 * s, x + a * 12 * s, y - (11 - Math.abs(a) * 5) * s); g.stroke(); } }
function flower(x, y, s, c) { L(SP(`M${x},${y} L${x},${y - 8 * s}`), '#3f8a3e', 1.6 * s); for (let j = 0; j < 5; j++) F(E(x + Math.cos(j * 1.257) * 3 * s, y - 9 * s + Math.sin(j * 1.257) * 3 * s, 2.2 * s, 2.2 * s), c); F(E(x, y - 9 * s, 1.7 * s, 1.7 * s), '#f2a030'); }

// ---------- ostacoli: gruppo 1 ----------
OBS.lago = { draw(k, W) {                                                   // laghetto con le ninfee, le canne e i sassi sulla riva
  const few = waterBody(k, W, { bank: '#b8a878', deep: '#2f6a8a' });
  for (const p of few.slice(0, 6)) { const s = k.ps(p.y); g.save(); g.translate(p.x, p.y); g.scale(s, s); V(SP('M0,0 L14,-2 A15,6 0 1 1 13,3Z'), '#5aa04a', 0, 0, 15, 1.6); if (p.r > .45) { for (let i = 0; i < 6; i++) { g.save(); g.translate(2, -3); g.rotate(i * 1.05); V(E(0, -4, 2.2, 4.4), i % 2 ? '#ffd0e0' : '#fff2f6', 0, -4, 4, 1); g.restore(); } F(E(2, -3, 1.8, 1.8), '#f2c040'); } g.restore(); }
  for (const [i, p] of k.pts(30, 1.04, .9).entries()) { const s = k.ps(p.y); g.save(); g.translate(p.x, p.y + 2); g.scale(s, s);
    if (i % 3 === 0) { for (const a of [-.35, -.1, .2, .4]) { const tx = a * 18, ty = -36 - p.r * 14 - Math.abs(a) * 8; L(SP(`M${a * 4},0 Q${tx * .4},${ty * .5} ${tx},${ty}`), dk('#5a8a3a', .55), 5); L(SP(`M${a * 4},0 Q${tx * .4},${ty * .5} ${tx},${ty}`), '#6aa044', 2.6); } V(E(6, -40 - p.r * 10, 3, 7.5), '#7a4a2a', 6, -40, 7, 1.4); }
    else if (i % 3 === 1) V(SP('M-12,0 Q-11,-10 0,-11 Q11,-9 12,0Z'), '#9a94a8', 0, -5, 12, 1.8); else grassTuft(0, 0, 1, '#4f9a40'); g.restore(); } } };
OBS.stagno = { draw(k, W) {                                                 // lo stagno delle papere: acqua verde, canne, pontile di legno, due papere che dondolano
  const few = waterBody(k, W, { bank: '#a89a6a', deep: '#3a6a4a', mid: '#5a9a6a' });
  const px = k.cx + 140, py = k.yT + 18; for (let i = 0; i < 6; i++) V(SP(`M${px + i * 9 - 2},${py - 2} L${px + i * 9 + 8},${py - 2} L${px + i * 9 + 10},${py + 26} L${px + i * 9},${py + 26}Z`), i % 2 ? '#a8784a' : '#b8885a', px + i * 9 + 4, py + 12, 8, 1.4); for (const x of [0, 50]) seg(px + x, py + 24, px + x, py + 36, 3, '#6a4a2a');
  for (const [i, p] of k.pts(26, 1.05, .9).entries()) { const s = k.ps(p.y); g.save(); g.translate(p.x, p.y + 2); g.scale(s, s); if (i % 2) { for (const a of [-.3, 0, .3]) { L(SP(`M${a * 4},0 L${a * 10},${-30 - p.r * 12}`), '#5a8a3a', 2.4); } V(E(2, -30 - p.r * 12, 2.4, 6), '#7a4a2a', 2, -30, 6, 1.2); } else grassTuft(0, 0, 1.1, '#5a9a40'); g.restore(); }
  const ducks = [[k.cx - 90, k.cy - 2], [k.cx - 40, k.cy + 10]], base = OBA;
  OBA = () => { base(); for (const [i, [x, y]] of ducks.entries()) { const b = Math.sin(T * 2 + i * 2) * 1.4, dx = Math.sin(T * .4 + i) * 20; g.save(); g.translate(x + dx, y + b); g.scale(Math.cos(T * .4 + i) > 0 ? 1 : -1, 1);
    F(E(0, 4, 12, 2), 'rgba(255,255,255,.4)'); V(SP('M-10,0 Q-12,-8 -4,-8 Q4,-8 8,-4 Q10,2 0,4 Q-8,4 -10,0Z'), '#f4f0e0', 0, -2, 10, 1.4); V(E(7, -10, 4.4, 4), '#3a8a4a', 7, -10, 4, 1.2); V(PL([10, -10, 15, -9, 10, -8]), '#f2a02a', 12, -9, 3, .8); F(E(8, -11, .9, .9), INK); g.restore(); } }; } };
OBS.laguna = { draw(k, W) {                                                 // la laguna: d'acqua turchese oppure gelata (nei mondi di ghiaccio)
  if (W.frozen) { F(k.shape(1.1, 1, 3), 'rgba(20,40,60,.2)'); V(k.shape(1.06), '#f4f8ff', k.cx, k.cy, 200, 0); const ice = k.shape(.95, .8), ig = g.createLinearGradient(0, k.yT, 0, k.bot(k.cx)); ig.addColorStop(0, '#e8f6ff'); ig.addColorStop(.5, '#a8d8f0'); ig.addColorStop(1, '#6ab0d8'); g.fillStyle = ig; g.fill(ice);
    g.save(); g.clip(ice); for (let i = 0; i < 9; i++) { const x = k.x0 + 60 + i * (k.x1 - k.x0 - 120) / 8, y = k.cy - 6 + Math.sin(i * 2.3) * 10; L(SP(`M${x},${y} l${12 + i % 3 * 6},${-5 + i % 2 * 8} l${10},${4} M${x},${y} l${-8},${7}`), 'rgba(255,255,255,.85)', 1.4); } F(E(k.cx - 80, k.yT + 14, 140, 6), 'rgba(255,255,255,.5)'); g.restore(); L(ice, 'rgba(255,255,255,.9)', 2);
    for (const [i, p] of k.pts(22, 1.05, .9).entries()) { const s = k.ps(p.y); i % 2 ? boulder(p.x, p.y + 2, s * .7, '#9aa8c0', '#ffffff') : V(E(p.x, p.y, 10 * s, 4 * s), '#ffffff', p.x, p.y, 10 * s, 1.2 * s); }
    OBA = () => { g.save(); g.clip(k.shape(.93, .8)); const x = k.x0 + ((T * 60) % (k.x1 - k.x0)); g.globalAlpha = .5; F(PL([x, k.yT, x + 18, k.yT, x - 20, k.bot(k.cx), x - 38, k.bot(k.cx)]), '#ffffff'); g.restore(); }; return; }
  const few = waterBody(k, W, { bank: W.sand || '#e8d4a0', deep: '#1a8aa8', mid: '#3ac8c8', glint: '#ffffff' });
  for (const [i, p] of k.pts(24, 1.05, .9).entries()) { const s = k.ps(p.y); i % 3 ? boulder(p.x, p.y + 2, s * .6, W.rock || '#a89888') : grassTuft(p.x, p.y, s, '#5aa04a'); } } };
OBS.rocce = { draw(k, W) {                                                  // un mucchio di massi coi ciuffi d'erba (col muschio, la neve o la sabbia a seconda del mondo)
  F(k.shape(1.02, 1, 2), 'rgba(20,20,40,.22)');
  const ps = k.pts(40, .95).sort((a, b) => a.y - b.y); for (const [i, p] of ps.entries()) { const s = k.ps(p.y) * (1.2 + p.r * 1.4); if (i % 4 === 3) grassTuft(p.x, p.y, k.ps(p.y), W.grass || '#4f9a40'); else boulder(p.x, p.y + 4, s, mix(W.rock || '#8a8498', '#ffffff', p.r * .15), W.rockCap); } } };
OBS.funghi = { draw(k, W) {                                                 // il cerchio delle streghe: funghi giganti rossi a pois con quelli piccoli intorno
  F(k.shape(1, 1, 2), 'rgba(20,40,20,.18)');
  const ps = k.pts(26, .95).sort((a, b) => a.y - b.y); for (const [i, p] of ps.entries()) { const big = i % 5 === 0, s = k.ps(p.y) * (big ? 2.4 : 1 + p.r * .6), c = i % 3 === 2 ? '#e8a030' : '#d83a3a';
    g.save(); g.translate(p.x, p.y + 2); g.scale(s, s); F(E(2, 1, 12, 3), 'rgba(20,30,20,.3)'); V(SP('M-4,0 Q-5,-10 -3,-14 L3,-14 Q5,-10 4,0Z'), '#f4ead4', 0, -7, 6, 1.2);
    const cap = SP('M-13,-12 Q-12,-26 0,-27 Q12,-26 13,-12 Q0,-9 -13,-12Z'); V(cap, c, 0, -18, 13, 1.4); g.save(); g.clip(cap); for (const [x, y, r] of [[-6, -20, 2.4], [4, -23, 2], [8, -15, 1.6], [-1, -15, 1.4]]) F(E(x, y, r, r * .8), '#fff8ec'); g.restore(); g.restore(); }
  const glow = ps.filter((_, i) => i % 5 === 0); OBA = () => { if (TIME !== 2) return; g.save(); g.globalCompositeOperation = 'lighter'; for (const p of glow) { const a = .25 + .15 * Math.sin(T * 2 + p.x); F(E(p.x, p.y - 30, 30, 20), `rgba(255,120,120,${a})`); } g.restore(); }; } };
OBS.zucche = { draw(k, W) {                                                 // l'orto delle zucche: solchi di terra, viticci, zucche grandi e piccole, un cartello
  const soil = k.shape(1, .6); F(k.shape(1.04, .6, 2), 'rgba(40,20,10,.25)'); F(soil, '#8a5a3a'); g.save(); g.clip(soil); for (let y = k.yT; y < k.bot(k.cx) + 10; y += 9) L(SP(`M${k.x0},${y} Q${k.cx},${y + 6} ${k.x1},${y}`), '#6a4028', 2.4); g.restore();
  const ps = k.pts(30, .9).sort((a, b) => a.y - b.y); for (const [i, p] of ps.entries()) { const s = k.ps(p.y) * (i % 6 === 0 ? 2.2 : 1 + p.r * .7);
    L(SP(`M${p.x - 14 * s},${p.y} Q${p.x - 6 * s},${p.y - 6 * s} ${p.x},${p.y - 2 * s} Q${p.x + 8 * s},${p.y + 2 * s} ${p.x + 16 * s},${p.y - 4 * s}`), '#4a8a3a', 1.6 * s); V(E(p.x - 10 * s, p.y - 4 * s, 4 * s, 2.4 * s), '#5aa04a', p.x - 10 * s, p.y - 4 * s, 4 * s, .8 * s);
    if (i % 4 !== 3) { g.save(); g.translate(p.x, p.y); g.scale(s, s); F(E(1, 1, 11, 3), 'rgba(30,20,10,.35)'); const pk = i % 7 === 0 ? '#e8d050' : '#ec8a2a'; for (const [dx, rx] of [[-5, 6], [5, 6], [0, 7]]) V(E(dx, -6, rx, 7), pk, dx, -6, rx, 1.2); seg(0, -12, 1.4, -16, 1.8, '#5a7a2a'); g.restore(); } }
  g.save(); g.translate(k.cx + 160, k.yT + 30); seg(0, 0, 0, -26, 3, '#6a4a2a'); V(SP('M-14,-34 L14,-34 L14,-22 L-14,-22Z'), '#c8945a', 0, -28, 14, 1.4); L(SP('M-9,-28 L9,-28'), '#6a3a1a', 1.4); g.restore(); } };
OBS.fieno = { draw(k, W) {                                                  // i covoni: balle tonde di fieno, il pagliaio a cono, il carretto con la forca
  F(k.shape(1.02, 1, 2), 'rgba(60,40,10,.2)'); const st = k.shape(.98, .7); F(st, '#d8b860'); g.save(); g.clip(st); for (let i = 0; i < 120; i++) { const x = k.x0 + k.R() * (k.x1 - k.x0), y = k.yT + k.R() * 70; L(SP(`M${x},${y} l${-3 + k.R() * 6},${-3}`), i % 2 ? '#b89840' : '#f0d070', 1); } g.restore();
  const bale = (x, y, s) => { g.save(); g.translate(x, y); g.scale(s, s); F(E(3, 1, 18, 4), 'rgba(40,30,10,.35)'); V(SP('M-16,0 L-16,-20 Q-16,-26 -10,-26 L10,-26 Q16,-26 16,-20 L16,0Z'), '#e0c060', 0, -13, 16, 1.6); V(E(16, -13, 6, 13), '#f0d478', 16, -13, 7, 1.4); L(E(16, -13, 3.4, 8), '#c8a040', 1.2); L(SP('M-8,-26 L-8,0 M4,-26 L4,0'), '#a8802a', 1.2); g.restore(); };
  const stack = (x, y, s) => { g.save(); g.translate(x, y); g.scale(s, s); F(E(3, 1, 20, 5), 'rgba(40,30,10,.35)'); V(SP('M-20,0 Q-18,-30 0,-46 Q18,-30 20,0Z'), '#e8c860', 0, -20, 20, 1.6); for (let i = 0; i < 8; i++) L(SP(`M${-16 + i * 4.4},-2 Q${-10 + i * 2.4},-20 ${-1 + i * .2},-40`), '#c8a040', 1); seg(0, -46, 0, -54, 1.6, '#6a4a2a'); g.restore(); };
  const ps = k.pts(7, .7).sort((a, b) => a.y - b.y); for (const [i, p] of ps.entries()) { const s = k.ps(p.y) * 1.3; i === 3 ? stack(p.x, p.y + 6, s * 1.2) : bale(p.x, p.y + 6, s); }
  g.save(); g.translate(k.cx + 150, k.cy + 10); const s = 1.1; g.scale(s, s); F(E(0, 4, 34, 5), 'rgba(40,30,10,.3)'); V(SP('M-30,-14 L30,-14 L26,-4 L-26,-4Z'), '#9a6a3a', 0, -9, 28, 1.6); V(SP('M-28,-16 Q0,-30 28,-16Z'), '#e8c860', 0, -20, 26, 1.4);
  for (const x of [-16, 16]) { V(E(x, -2, 8, 8), '#7a5030', x, -2, 8, 1.4); L(SP(`M${x - 6},-2 L${x + 6},-2 M${x},-8 L${x},4`), '#5a3a20', 1.2); } L(SP('M30,-12 L48,-4'), '#6a4a2a', 2.4); L(SP('M-20,-28 L-34,-46 M-34,-46 l-3,-5 M-34,-46 l0,-6 M-34,-46 l3,-5'), '#8a8a90', 1.6); g.restore(); } };
OBS.pozzo = { draw(k, W) {                                                  // il pozzo dei desideri: pietre, tettuccio di legno, secchio e corda (con la neve nei mondi freddi)
  F(k.shape(1, 1, 2), 'rgba(30,30,40,.2)');
  for (const [i, p] of k.pts(26, 1.02, .5).entries()) { const s = k.ps(p.y); i % 3 ? boulder(p.x, p.y + 3, s * .8, W.rock || '#9a94a8', W.rockCap) : grassTuft(p.x, p.y, s, W.grass || '#4f9a40'); }
  const x = k.cx, y = k.cy + 14, st = W.wellStone || '#a8a0b0'; g.save(); g.translate(x, y);
  F(E(4, 2, 40, 8), 'rgba(20,20,40,.35)'); const wl = SP('M-30,0 L-30,-26 Q0,-34 30,-26 L30,0 Q0,8 -30,0Z'); V(wl, st, 0, -14, 30, 2); g.save(); g.clip(wl); for (let r = 0; r < 4; r++) for (let c = -4; c < 5; c++) g.strokeRect(c * 14 + (r % 2) * 7 - 7, -26 + r * 7, 14, 7); g.restore();
  F(E(0, -28, 30, 7), '#1a1420'); L(E(0, -28, 30, 7), dk(st, .5), 3);
  for (const s of [-1, 1]) seg(s * 26, -28, s * 26, -70, 4, '#7a5030');
  const rf = SP('M-36,-66 L0,-88 L36,-66 L30,-62 L0,-80 L-30,-62Z'); V(rf, '#a8582a', 0, -74, 34, 2); if (W.rockCap) F(SP('M-36,-66 L0,-88 L36,-66 Q18,-72 0,-82 Q-18,-72 -36,-66Z'), W.rockCap);
  L(SP('M-26,-62 L26,-62'), '#5a3a20', 3); L(SP('M4,-62 L4,-40'), '#c8b080', 1.2); V(SP('M-2,-40 L10,-40 L9,-30 L-1,-30Z'), '#8a8a98', 4, -35, 6, 1.2); L(SP('M26,-62 l8,4 l-2,6'), '#5a3a20', 2);
  g.restore(); } };

// ---------- i mondi: gruppo 1 ----------
const WORLDS = {};
WORLDS.bosco = { name: 'Bosco incantato', seed: 7, ob: ['lago', 'rocce', 'funghi'],
  sky: [['#4a90e0', '#86c0f0', '#cfe8f8', '#eef6e8'], ['#231c5c', '#6a3f96', '#e8785a', '#ffd690'], ['#05061a', '#141a46', '#242a66', '#3a3a7a']],
  gr: ['#c2c96c', '#86b452', '#4f9446', '#2a6238'], patch: ['rgba(255,236,140,.16)', 'rgba(20,50,60,.16)'], lane: 'rgba(255,232,150,.14)', bank: '#b8a878', rock: '#9a94a8', grass: '#4f9a40', fg: ['#173a2c', '#1e4a32'],
  far(w) { clouds(w, 9, 60, 210); const m1 = ridge(250, 120, 150, w); F(m1, atm('#6f5c9e', .35)); shadeClip(m1, 130, 330, 'rgba(255,255,255,.12)', atm('#8a7ab8', .6));
    const m2 = ridge(290, 70, 110, w); F(m2, atm('#59508c', .25)); shadeClip(m2, 220, 330, 'rgba(255,255,255,.08)', atm('#7a70a8', .5)); },
  hill(w) { const h1 = ridge(300, 46, 170, w); F(h1, atm('#4d7a62', .15)); for (let x = 10; x < w; x += rr(26, 70)) pine(x, rr(296, 312), rr(.7, 1.1), atm('#33584e', .1));
    const h2 = ridge(318, 26, 200, w); F(h2, '#3f7448'); rim(h2, TIME === 1 ? 'rgba(255,224,140,.55)' : 'rgba(255,255,220,.3)', 5); for (let x = 30; x < w; x += rr(90, 190)) tree(x, rr(312, 322), rr(.8, 1.15), mix('#3f8a48', '#6aa84a', rnd())); },
  scatter(x, y, s, k, d, inLane) { if (k < .72) { g.strokeStyle = mix('#7fb850', '#2f7a3e', d * .7 + rnd() * .3); grassTuft(x, y, s, g.strokeStyle); } else if (k < .9 && !inLane) flower(x, y, s, ['#ffe07a', '#ff9ab0', '#fff6e8', '#c9a0ff'][Math.floor(rnd() * 4)]); else if (!inLane) boulder(x, y, s * .8, '#9a94a8'); },
  lair() { lairRock({}); }, castle() { castleStd({}); } };
WORLDS.brema = { name: 'Campagna di Brema', seed: 21, ob: ['zucche', 'stagno', 'fieno'],
  sky: [['#5aa8e8', '#9ad0f4', '#e8f0d8', '#fff0c8'], ['#3a2a6a', '#a04a7a', '#f08a4a', '#ffd070'], ['#06081a', '#18204a', '#2a3060', '#4a4a70']],
  gr: ['#e8d088', '#c8b860', '#8aa848', '#5a7a30'], patch: ['rgba(255,220,120,.2)', 'rgba(90,70,20,.14)'], lane: 'rgba(200,150,80,.22)', bank: '#a89a6a', rock: '#b0a080', grass: '#6aa040', fg: ['#5a5a20', '#6a6a28'],
  far(w) { clouds(w, 7, 50, 190);
    const h = ridge(270, 50, 220, w); F(h, atm('#b8a868', .45)); shadeClip(h, 220, 320, 'rgba(255,255,255,.12)', atm('#a89858', .5));
    for (let i = 0; i < 4; i++) { const x = rr(40, w - 40), y = rr(250, 270); g.fillStyle = atm('#6a5a48', .5); g.fillRect(x - 3, y - 26, 6, 26); F(PL([x - 6, y - 26, x, y - 34, x + 6, y - 26]), atm('#7a4a3a', .5)); L(SP(`M${x},${y - 28} l14,-10 M${x},${y - 28} l-14,10 M${x},${y - 28} l-10,-14 M${x},${y - 28} l10,14`), atm('#6a5a48', .5), 2); }
    const tx = w * .82; for (const [dx, hh, wd] of [[-30, 40, 18], [-8, 70, 14], [14, 46, 22], [36, 34, 26]]) { g.fillStyle = atm('#8a6a5a', .55); g.fillRect(tx + dx - wd / 2, 286 - hh, wd, hh); F(PL([tx + dx - wd / 2 - 2, 286 - hh, tx + dx, 286 - hh - wd * .9, tx + dx + wd / 2 + 2, 286 - hh]), atm('#a8503a', .5)); } },
  hill(w) { const h1 = ridge(302, 30, 180, w); F(h1, atm('#a8b858', .15)); g.save(); g.clip(h1); for (let y = 290; y < 330; y += 6) L(SP(`M-20,${y} Q${w / 2},${y - 8} ${w + 20},${y}`), atm('#c8c870', .2), 2.4); g.restore();
    for (let x = 20; x < w; x += rr(60, 140)) { const y = rr(300, 312); if (rnd() < .5) tree(x, y, rr(.6, .9), mix('#6a9a3a', '#8ab040', rnd())); else { V(SP(`M${x - 10},${y} Q${x - 9},${y - 16} ${x},${y - 18} Q${x + 9},${y - 16} ${x + 10},${y}Z`), '#e0c060', x, y - 9, 10, 1.4); } }
    const h2 = ridge(320, 20, 220, w); F(h2, '#9ab048'); rim(h2, 'rgba(255,230,150,.4)', 4); for (let x = 0; x < w; x += 22) { seg(x, 322, x, 308, 2, '#8a6a3a'); } L(SP(`M0,312 L${w},312 M0,318 L${w},318`), '#9a7a4a', 2); },
  scatter(x, y, s, k, d, inLane) { if (k < .6) { g.strokeStyle = mix('#d8c060', '#8a9a3a', d * .6 + rnd() * .3); for (const a of [-.4, 0, .4]) { g.lineWidth = 1.6 * s; g.beginPath(); g.moveTo(x + a * 4 * s, y); g.lineTo(x + a * 8 * s, y - 13 * s); g.stroke(); F(E(x + a * 8 * s, y - 14 * s, 1.4 * s, 3 * s), '#e8c860'); } }
    else if (k < .85 && !inLane) flower(x, y, s, ['#e83a3a', '#e83a3a', '#fff6e8', '#5a8ae8'][Math.floor(rnd() * 4)]); else if (!inLane) boulder(x, y, s * .7, '#b0a080'); },
  lair() { const wd = '#5a4a5a', wd2 = dk(wd, .2);                             // il covo dei briganti: casupola storta col tetto bucato, finestre rosse, botti e il camino che fuma
    F(E(10, 22, 170, 28), 'rgba(16,10,40,.42)'); for (const [x, hh] of [[-130, 120], [120, 100]]) { seg(x, 30, x, -hh, 10, '#4a3a3a'); for (const [dx, dy, r] of [[-20, -hh - 20, 30], [20, -hh - 10, 26], [0, -hh - 40, 34]]) V(E(x + dx, dy, r, r * .9), '#3a4a3a', x + dx, dy, r, 2); }
    const hs = SP('M-120,40 L-116,-110 L104,-122 L110,40Z'); V(hs, wd, -4, -40, 140, 3); g.save(); g.clip(hs); for (let y = -120; y < 40; y += 14) L(SP(`M-130,${y} L120,${y - 4}`), wd2, 2); for (let x = -110; x < 110; x += 46) L(SP(`M${x},-120 L${x + 2},40`), dk(wd, .35), 3); g.restore();
    const rf = SP('M-140,-100 L-6,-196 L130,-112 L118,-100 L-6,-178 L-128,-90Z'); V(rf, '#4a3a5a', -6, -140, 120, 3); const rf2 = SP('M-128,-92 L-6,-178 L118,-104 L104,-112 L-6,-168 L-116,-100Z'); g.save(); g.clip(SP('M-140,-100 L-6,-196 L130,-112 L110,-110 L110,-100 L-120,-90Z')); for (let i = 0; i < 9; i++) L(SP(`M${-120 + i * 28},-96 L${-6 + i * 2},-186`), '#2a2232', 1.6); g.restore();
    F(PL([20, -160, 40, -150, 30, -136]), '#120818'); V(SP('M60,-150 L60,-196 L80,-196 L80,-140Z'), '#6a5a6a', 70, -170, 14, 2); addLight(LX + 70, BASE - 200, 30, 'rgba(160,160,180,.2)');
    for (const [x, y] of [[-80, -60], [-30, -64]]) { const w2 = SP(`M${x - 14},${y + 18} L${x - 14},${y - 8} L${x + 14},${y - 10} L${x + 14},${y + 18}Z`); F(w2, '#ff7a3a', '#ff4a2a'); L(w2, '#2a1a2a', 3); L(SP(`M${x},${y - 9} L${x},${y + 18} M${x - 14},${y + 4} L${x + 14},${y + 4}`), '#2a1a2a', 2); V(SP(`M${x + 14},${y - 10} L${x + 26},${y - 4} L${x + 26},${y + 22} L${x + 14},${y + 18}Z`), '#6a4a3a', x + 20, y + 6, 8, 1.4); addLight(LX + x, BASE + y + 4, 50, 'rgba(255,110,50,.5)'); }
    const dr = SP('M24,40 L24,-50 Q50,-74 76,-50 L76,40Z'); F(dr, '#120818'); g.save(); g.clip(dr); const cg = g.createRadialGradient(50, 40, 4, 50, 20, 80); cg.addColorStop(0, 'rgba(255,150,60,.9)'); cg.addColorStop(1, 'rgba(60,10,60,0)'); g.fillStyle = cg; g.fillRect(20, -80, 60, 130); g.restore(); L(dr, '#2a1a2a', 4); V(SP('M74,40 L74,-46 L96,-34 L96,46Z'), '#7a5a4a', 85, 0, 14, 2);
    g.save(); g.translate(50, -96); V(SP('M-12,-4 Q-12,-18 0,-18 Q12,-18 12,-4 Q12,4 6,6 L6,12 L-6,12 L-6,6 Q-12,4 -12,-4Z'), '#f2ead6', 0, -4, 14); F(E(-5, -5, 3.4, 4), INK); F(E(5, -5, 3.4, 4), INK); g.restore();
    for (const [x, y, s] of [[-150, 40, 1], [-110, 46, .8], [140, 44, .9]]) { g.save(); g.translate(x, y); g.scale(s, s); V(SP('M-14,0 Q-16,-16 -14,-30 L14,-30 Q16,-16 14,0Z'), '#7a5030', 0, -15, 16, 2); for (const yy of [-24, -6]) L(SP(`M-15,${yy} L15,${yy}`), '#4a4a58', 2.4); g.restore(); }
    for (const x of [-150, 130]) { seg(x, 30, x, -26, 5, '#5a3a24'); V(SP(`M${x - 8},-26 L${x + 8},-26 L${x + 5},-14 L${x - 5},-14Z`), '#4a4458', x, -20, 9, 2); addFlame(LX + x, BASE - 28, 1, 0); } },
  castle() { const st = '#e8d4b0', brk = '#c86a4a';                             // le Porte di Brema: torrione col portone, case a graticcio dietro le mura, campanile, bandiera con la chiave
    F(E(0, 30, 210, 30), 'rgba(16,10,40,.4)');
    for (const [x, hh, wd, rc] of [[-70, 120, 50, '#b84a3a'], [-20, 150, 44, '#c8603a'], [90, 130, 54, '#a83a3a'], [140, 110, 46, '#c8603a']]) { const b = SP(`M${x - wd / 2},-60 L${x - wd / 2},${-hh} L${x + wd / 2},${-hh} L${x + wd / 2},-60Z`); V(b, '#f4ead4', x, -hh + 30, wd, 2.4); g.save(); g.clip(b); for (let y = -hh; y < -60; y += 18) L(SP(`M${x - wd / 2},${y} L${x + wd / 2},${y}`), '#6a4a2a', 3); for (let i = -1; i <= 1; i++) L(SP(`M${x + i * wd / 3},${-hh} L${x + i * wd / 3},-60 M${x - wd / 2},${-hh + 18} L${x},${-hh + 36}`), '#6a4a2a', 2.6); g.restore();
      V(PL([x - wd / 2 - 6, -hh, x, -hh - wd * .9, x + wd / 2 + 6, -hh]), rc, x, -hh - 18, wd / 2, 2.4); const wy = -hh + 26; F(SP(`M${x - 6},${wy} L${x + 6},${wy} L${x + 6},${wy + 12} L${x - 6},${wy + 12}Z`), '#ffd27a', '#ffb040'); L(SP(`M${x - 6},${wy} L${x + 6},${wy} L${x + 6},${wy + 12} L${x - 6},${wy + 12}Z M${x},${wy} L${x},${wy + 12}`), '#4a2a1a', 1.4); addLight(CX + x, BASE + wy + 6, 30); }
    { const x = 40, hh = 240, wd = 30; V(SP(`M${x - wd / 2},-60 L${x - wd / 2},${-hh} L${x + wd / 2},${-hh} L${x + wd / 2},-60Z`), brk, x, -150, 30, 2.4); V(PL([x - wd / 2 - 6, -hh, x, -hh - 70, x + wd / 2 + 6, -hh]), '#3a7a6a', x, -hh - 30, 20, 2.4); V(E(x, -hh + 30, 9, 9), '#f4ead4', x, -hh + 30, 9, 1.6); L(SP(`M${x},${-hh + 30} l0,-6 M${x},${-hh + 30} l5,0`), INK, 1.4); addFlag(CX + x, BASE - hh - 70 - 22, '#e0483a'); seg(x, -hh - 70, x, -hh - 92, 2, '#5a4a3a'); }
    const wall = SP('M-130,34 L-130,-62 L170,-62 L170,34Z'); L(wall, dk(st, .7), 5); F(wall, stone(-130, 0, 300, 0, st)); g.save(); g.clip(wall); g.strokeStyle = 'rgba(60,40,90,.18)'; g.lineWidth = 1.6; for (let i = 0; i < 20; i++) g.strokeRect(-124 + (i * 53) % 286, -54 + (i * 29) % 80, 16, 8); g.restore();
    for (let i = 0; i < 11; i++) { const mx = -130 + i * 28, p = SP(`M${mx},-61 L${mx},-76 L${mx + 16},-76 L${mx + 16},-61Z`); L(p, dk(st, .7), 5); F(p, mix(lt(st, .4), dk(st, .3), i / 10)); }
    const gt = SP('M-40,34 L-40,-110 L40,-110 L40,34Z'); V(gt, brk, 0, -40, 50, 3); g.save(); g.clip(gt); for (let y = -106; y < 34; y += 8) for (let x = -40 + (y % 16 ? 0 : 6); x < 40; x += 12) g.strokeRect(x, y, 12, 8); g.restore();
    V(PL([-48, -110, 0, -150, 48, -110]), '#a83a3a', 0, -126, 40, 3); const gate = SP('M-22,34 L-22,-20 Q0,-50 22,-20 L22,34Z'); F(gate, '#6a4428'); L(gate, dk(brk, .6), 3); for (let x = -16; x < 22; x += 8) L(SP(`M${x},-40 L${x},34`), '#4a2e1a', 1.4);
    V(SP('M-12,-90 L12,-90 L12,-68 L0,-60 L-12,-68Z'), '#c8302a', 0, -78, 12, 2); g.save(); g.translate(0, -78); L(SP('M0,-8 L0,6 M0,4 l4,0 M0,0 l3,0'), '#f4f2ec', 2); L(E(0, -9, 3, 3), '#f4f2ec', 1.6); g.restore();
    addFlag(CX - 44, BASE - 150, '#c8302a'); addFlag(CX + 140, BASE - 160, '#f2c14e');
    for (const [x, y, s] of [[-150, 44, 1], [180, 46, 1.1]]) for (const [dx, r] of [[-12, 12], [10, 13], [0, 16]]) V(E(x + dx * s, y - r * s * .7, r * s, r * s * .8), '#7a9a3e', x + dx * s, y - r * s * .7, r * s, 2); },
  anim(t) { const x = 430, y = 318; g.save(); g.translate(x, y); V(SP('M-12,0 L-8,-52 L8,-52 L12,0Z'), '#e8d8b8', 0, -26, 12, 2); V(PL([-12, -52, 0, -66, 12, -52]), '#b84a3a', 0, -58, 10, 1.8); F(SP('M-4,0 L-4,-14 Q0,-18 4,-14 L4,0Z'), '#6a4428');
    g.translate(0, -54); g.rotate(t * .8); for (let i = 0; i < 4; i++) { g.rotate(Math.PI / 2); V(SP('M2,-2 L44,-5 L44,5 L2,2Z'), '#c8b090', 22, 0, 22, 1.4); g.save(); g.clip(SP('M10,-5 L44,-6 L44,6 L10,5Z')); for (let x = 12; x < 44; x += 6) L(SP(`M${x},-6 L${x},6`), '#8a6a4a', 1); g.restore(); } V(E(0, 0, 4, 4), '#5a3a20', 0, 0, 4, 1.2); g.restore(); } };
WORLDS.ghiaccio = { name: 'Monti di ghiaccio', seed: 33, ob: ['laguna', 'rocce', 'pozzo'], frozen: 1,
  sky: [['#5a9ae0', '#9ac8f0', '#d8ecfa', '#f4faff'], ['#2a2a6a', '#7a5aa8', '#f0a0a8', '#ffe0c0'], ['#04081e', '#10204e', '#1c3470', '#30508a']],
  gr: ['#f4f8ff', '#dde8f6', '#b8cce8', '#8aa4cc'], patch: ['rgba(255,255,255,.4)', 'rgba(80,110,170,.15)'], lane: 'rgba(160,190,230,.25)', rock: '#8a98b4', rockCap: '#ffffff', wellStone: '#b8c0d0', grass: '#7a9ab0', fg: ['#2a4a6a', '#3a5a7a'], night: 'rgba(14,24,70,.45)',
  far(w) { clouds(w, 6, 50, 170, .9); const m1 = ridge(250, 170, 130, w, .6); F(m1, atm('#8aa0d0', .3)); g.save(); g.clip(m1); g.fillStyle = atm('#ffffff', .15); for (let x = -20; x < w; x += 4) { } const sg = g.createLinearGradient(0, 80, 0, 220); sg.addColorStop(0, 'rgba(255,255,255,.95)'); sg.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = sg; g.fillRect(0, 60, w, 180); g.restore();
    const m2 = ridge(292, 90, 100, w, .5); F(m2, atm('#7088c0', .2)); shadeClip(m2, 200, 320, 'rgba(255,255,255,.5)', atm('#90a8d8', .4)); },
  hill(w) { const h1 = ridge(302, 40, 160, w); F(h1, atm('#c8d8f0', .1)); for (let x = 10; x < w; x += rr(22, 56)) pine(x, rr(298, 314), rr(.7, 1.15), atm('#2a4a6a', .1), '#ffffff');
    const h2 = ridge(320, 22, 200, w); F(h2, '#e8f0fa'); rim(h2, 'rgba(255,255,255,.7)', 4); },
  groundFx(w) { for (let i = 0; i < 40; i++) { const x = rr(0, w), y = rr(HOR + 10, H); F(E(x, y, rr(20, 60), rr(3, 6)), 'rgba(255,255,255,.35)'); } },
  scatter(x, y, s, k, d, inLane) { if (k < .5) { F(E(x, y, 8 * s, 2.4 * s), 'rgba(140,170,220,.35)'); } else if (k < .75 && !inLane) { for (const a of [-.3, .3]) V(PL([x + a * 10 * s, y, x + a * 4 * s, y - 14 * s, x + a * 14 * s + 3 * s, y]), '#c8ecff', x, y - 7 * s, 6 * s, 1 * s); } else if (!inLane) boulder(x, y, s * .7, '#8a98b4', '#ffffff'); },
  lair() { lairRock({ rock: '#5a6a98', hi: 'rgba(255,255,255,.4)', rim: 'rgba(200,230,255,.7)', arch: '#8aa0c8', arch2: '#6a80b0', glow: [120, 200, 255], teeth: '#e8f8ff', fl: 1, skull: '#e8f4ff',
    top: () => { F(SP('M-170,-60 Q-150,-170 -96,-196 L-40,-212 L40,-208 Q92,-190 122,-128 Q146,-70 150,-30 Q120,-80 80,-150 Q20,-190 -40,-196 Q-110,-170 -150,-80Z'), 'rgba(255,255,255,.85)'); },
    deco: () => { for (let i = 0; i < 12; i++) { const x = -150 + i * 26, l = 10 + (i * 7) % 18; V(PL([x - 4, -60 + Math.abs(i - 6) * -14, x, -60 + Math.abs(i - 6) * -14 + l, x + 4, -60 + Math.abs(i - 6) * -14]), '#dff4ff', x, -50, 6, 1); } } }); },
  castle() { castleStd({ st: '#cfe4f6', roof: '#7ab0e8', roof2: '#5a90d8', spire: 1, gate: '#3a5a8a', shield: '#5a90d8', cap: '#ffffff', flag: '#8ad0ff', flag2: '#ffffff',
    deco: () => { for (const [x, y] of [[-112, -130], [132, -100], [34, -240]]) for (let i = -2; i <= 2; i++) V(PL([x + i * 7 - 2, y, x + i * 7, y + 8 + (i % 2 + 1) * 4, x + i * 7 + 2, y]), '#e8f8ff', x, y + 6, 4, .8); } }); } };
