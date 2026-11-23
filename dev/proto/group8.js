// ---------- gruppo 8 ----------
function tentacle(x0, y0, a0, len, w0, ph, col, curl = 1) {      // tentacolo che ondeggia, con le ventose
  const pts = []; let a = a0, x = x0, y = y0; for (let i = 0; i <= 10; i++) { pts.push([x, y, w0 * (1 - i / 11)]); a += Math.sin(ph + i * .6) * .22 * curl; x += Math.cos(a) * len / 10; y += Math.sin(a) * len / 10; }
  const p = new Path2D(); pts.forEach((q, i) => { const n = pts[Math.min(10, i + 1)], pr = pts[Math.max(0, i - 1)], aa = Math.atan2(n[1] - pr[1], n[0] - pr[0]) - Math.PI / 2; const xx = q[0] + Math.cos(aa) * q[2], yy = q[1] + Math.sin(aa) * q[2]; i ? p.lineTo(xx, yy) : p.moveTo(xx, yy); });
  for (let i = 10; i >= 0; i--) { const q = pts[i], n = pts[Math.min(10, i + 1)], pr = pts[Math.max(0, i - 1)], aa = Math.atan2(n[1] - pr[1], n[0] - pr[0]) + Math.PI / 2; p.lineTo(q[0] + Math.cos(aa) * q[2], q[1] + Math.sin(aa) * q[2]); } p.closePath();
  V(p, col, x0, y0, len * .5, 1.8); for (let i = 1; i < 9; i += 2) { const q = pts[i], n = pts[i + 1], aa = Math.atan2(n[1] - q[1], n[0] - q[0]) + Math.PI / 2; F(E(q[0] + Math.cos(aa) * q[2] * .5, q[1] + Math.sin(aa) * q[2] * .5, q[2] * .35, q[2] * .35), lt(col, .4)); } return pts[10];
}
function krakenD(o) {                                           // il Kraken: testa enorme da polpo, occhi gialli feroci, otto tentacoli che si muovono, esce da una pozza
  const sk = '#7a3a6a', u = o.u, w = o.walking ? 1 : 0, b = Math.sin(o.t * 1.6) * 2 + (w ? -Math.abs(Math.sin(o.ph * .8)) * 3 : 0), lash = u < 0 ? -u : 0;
  F(E(0, 0, 46, 8), 'rgba(40,110,160,.5)'); L(E(0, 0, 46, 8), '#8ad0f0', 1.6);
  for (let i = 0; i < 4; i++) tentacle(-24 + i * 8, -12 + b, Math.PI * .9 - i * .25, 34, 5, o.t * 2.4 + i, dk(sk, .25));
  g.save(); g.translate(0, b); g.rotate((u > 0 ? -.06 * u : .08 * -u));
  const head = SP('M-26,-20 Q-30,-56 -6,-74 Q16,-84 28,-60 Q34,-40 26,-20 Q0,-12 -26,-20Z'); V(head, sk, 0, -46, 34);
  g.save(); g.clip(head); for (const [x, y, r] of [[-12, -60, 4], [6, -68, 3], [16, -50, 3.4], [-18, -40, 3]]) F(E(x, y, r, r), lt(sk, .25)); F(E(-6, -66, 12, 6), 'rgba(255,255,255,.12)'); g.restore();
  eyesX(o, sk, [[4, -34, 6, 1], [18, -34, 4.6, -1]], 'slit', '#f2d040'); browsX(o, [[4, -43, 12, 1], [18, -42, 9, -1]], dk(sk, .55), 3.4, 'thick');
  mouthX(o, 12, -22, 10, 'frown');
  g.restore();
  for (let i = 0; i < 4; i++) { const a = -.1 - i * .3 - lash * (i < 2 ? .6 : 0), len = 36 + (i < 2 ? lash * 26 : 0); tentacle(-6 + i * 10, -12 + b, a + Math.PI * .1, len, 5.6, o.t * 2.6 + i * 1.3, sk, i < 2 && lash ? .3 : 1); }
}
function idraD(o) {                                             // l'Idra di Lerna: corpo da serpente arrotolato, tre colli a ventaglio, teste da drago con le creste; quando è ferita spuntano altre teste
  const sk = '#3a7a6a', bel = '#c8d890', u = o.u, w = o.walking ? 1 : 0, b = w ? -Math.abs(Math.sin(o.ph * .9)) * 3 : 0;
  g.save(); g.translate(0, b);
  const tw = Math.sin(o.t * 2.4) * 6; const tl = SP(`M-26,-8 Q-44,${-6 + tw * .4} -52,${-18 + tw} Q-56,${-26 + tw} -48,${-28 + tw}`); L(tl, dk(sk, .7), 9); L(tl, sk, 6.4);
  const coil = SP('M-30,-4 Q-34,-24 -14,-30 Q8,-34 22,-24 Q30,-12 22,-2 Q0,4 -30,-4Z'); V(coil, sk, -4, -16, 30); g.save(); g.clip(coil); F(SP('M-30,-6 Q0,-2 24,-6 L24,4 L-30,4Z'), bel); for (let x = -26; x < 20; x += 6) L(SP(`M${x},-30 Q${x + 4},-20 ${x},-10`), dk(sk, .25), 1.2); g.restore();
  for (const x of [-20, 10]) { taper(x, -6, x + 3, 0, 4, 3.4, dk(sk, .2)); for (const a of [-.4, 0, .4]) L(SP(`M${x + 3},0 l${Math.cos(a) * 5},0`), '#e8e0c0', 1.6); }
  const n = (o.mood >= 2 || u !== 0) ? 5 : 3, heads = [];
  for (let i = 0; i < n; i++) { const k = n === 1 ? .5 : i / (n - 1), base = -2.2 + k * 1.6, sway = Math.sin(o.t * 2 + i * 1.7) * .15, L0 = 40 + (i === Math.floor(n / 2) ? 8 : 0), ex = 4 + Math.cos(base + sway) * L0 + (u < 0 ? -u * 14 : 0), ey = -26 + Math.sin(base + sway) * L0;
    chain([[0 + i * 3, -26], [4 + Math.cos(base) * 14, -26 + Math.sin(base) * 14 - 6], [ex - 8, ey + 10], [ex, ey]], 10, 6.4, 4.4, sk, bel); heads.push([ex, ey, base, i]); }
  for (const [ex, ey, base, i] of heads) { g.save(); g.translate(ex, ey); g.rotate(.15 + Math.sin(o.t * 2.6 + i) * .1 + (o.mood === 4 ? .3 : 0)); g.scale(.8, .8);
    for (const a of [-2.2, -1.9, -1.6]) V(PL([-4, -4, -4 + Math.cos(a) * 12, -4 + Math.sin(a) * 12, 2, -6]), '#c8402a', -2, -10, 5, 1.2);
    const op = o.mood === 3 ? .5 : o.mood === 2 ? .2 : 0; g.save(); g.translate(2, 3); g.rotate(op); V(SP('M-4,0 L16,1 Q14,5 4,5 Q-4,4 -4,0Z'), dk(sk, .15), 6, 3, 8, 1.4); g.restore(); if (op) F(SP(`M-2,3 L18,${3 - op * 2} L14,${5 + op * 12} L-2,5Z`), '#5a1220');
    V(SP('M-8,0 Q-8,-9 2,-10 Q12,-9 18,-3 Q20,1 17,3 L-6,4Z'), sk, 4, -3, 12); for (const x of [6, 10, 14]) F(PL([x, 3, x + 1.4, 6.4, x + 2.8, 3]), '#fffdf4');
    eyesX(Object.assign({}, o, { blink: (o.t * 2 + i) % 5 < .15 ? .1 : o.blink }), sk, [[3, -4, 2.8, 1]], 'slit', '#f2a02a'); browsX(o, [[3, -8, 5, 1]], dk(sk, .5), 2, 'thick');
    g.restore(); }
  g.restore();
}
function bandersD(o) {                                          // il Bandersnatch: belva scattante a strisce viola e arancio, collo lungo, mascella enorme coi denti storti, tratteggio da incisione
  const c1 = '#e8862a', c2 = '#6a3a8a', u = o.u, w = o.walking ? 1 : 0, p = o.ph * 2, b = w ? -Math.abs(Math.sin(p)) * 6 : Math.sin(o.t * 3) * .8, lunge = u < 0 ? -u * 22 : -u * 6;
  g.save(); g.translate(lunge, b); g.rotate(w ? Math.sin(p) * .06 : 0);
  const lg = (x, off, col, back) => { const a = w ? Math.sin(p + off) * .9 : 0, kx = x + Math.sin(a) * 9, ky = -14, fx = kx + Math.sin(a + (back ? .6 : -.4)) * 8; taper(x, -26, kx, ky, 5, 3, col); taper(kx, ky, fx, -2, 3, 2.4, col); for (const t of [-.5, 0, .5]) L(SP(`M${fx},-2 l${Math.cos(t) * 6},1`), '#fffdf4', 1.6); };
  lg(-20, 0, dk(c1, .3), 1); lg(12, Math.PI, dk(c1, .3));
  const tl = SP(`M-26,-28 Q-40,${-36 + Math.sin(o.t * 5) * 6} -50,${-30 + Math.sin(o.t * 5 + 1) * 8}`); L(tl, INK, 5); L(tl, c2, 3);
  const body = SP('M-28,-26 Q-26,-40 -8,-38 Q10,-40 18,-32 Q22,-22 14,-18 Q0,-16 -14,-18 Q-28,-18 -28,-26Z'); V(body, c1, -4, -28, 24);
  g.save(); g.clip(body); for (let x = -28; x < 22; x += 6) V(SP(`M${x},-42 L${x + 3},-42 L${x + 1},-16 L${x - 2},-16Z`), c2, x, -30, 3, 0); for (let i = 0; i < 18; i++) L(SP(`M${-28 + i * 3},-40 l6,22`), 'rgba(30,10,40,.25)', .7); g.restore();
  lg(-14, Math.PI, c1, 1); lg(16, 0, c1);
  chain([[12, -34], [22, -42], [18, -54], [30, -58]], 8, 6, 4.4, c1, '#f4d8a0');
  g.save(); g.translate(30, -58); g.rotate(.1 + Math.sin(o.t * 3) * .1 + (o.mood === 4 ? .3 : 0));
  const op = o.mood === 3 ? .7 : o.mood === 2 ? .3 : .08;
  g.save(); g.rotate(op); V(SP('M-6,2 L26,4 Q22,12 8,12 Q-4,10 -6,2Z'), dk(c1, .12), 10, 6, 16, 1.8); for (const [x, h] of [[2, 6], [8, 4], [13, 7], [18, 5]]) { g.save(); g.translate(x, 4); g.rotate(Math.sin(x) * .3); V(PL([-1.6, 0, 0, -h, 1.6, 0]), '#fff6d0', 0, -2, 2, .9); g.restore(); } g.restore();
  if (op > .1) F(SP(`M-4,2 L26,${2 - op * 3} L22,${6 + op * 16} L-4,6Z`), '#3a0e2a');
  V(SP('M-8,-2 Q-8,-12 4,-13 Q16,-12 26,-4 Q28,1 24,3 L-6,3Z'), c1, 8, -4, 16); g.save(); g.clip(SP('M-8,-2 Q-8,-12 4,-13 Q16,-12 26,-4 Q28,1 24,3 L-6,3Z')); for (const x of [-2, 6, 14]) F(SP(`M${x},-14 L${x + 3},-14 L${x + 1},3 L${x - 2},3Z`), c2); g.restore();
  for (const [x, h] of [[4, 6], [9, 8], [15, 5], [20, 7]]) { g.save(); g.translate(x, 2); g.rotate(Math.sin(x * 2) * .3); V(PL([-1.6, 0, 0, h, 1.6, 0]), '#fff6d0', 0, 2, 2, .9); g.restore(); }
  V(PL([-6, -10, -10, -22, 0, -12]), c2, -5, -14, 5, 1.4);
  eyesX(o, c1, [[2, -6, 3.6, 1], [9, -6.6, 2.8, -1]], 'wide', '#e83a2a'); browsX(o, [[2, -11, 6.4, 1], [9, -11, 5, -1]], INK, 2.4, 'thick');
  g.restore();
  g.restore();
}
function zuccaD(o) {                                            // la Zucca Stregata: la carrozza tornata zucca, faccia intagliata che brilla, ruote storte, viticci; rotola addosso
  const pk = '#e8842a', pd = dk(pk, .3), u = o.u, w = o.walking ? 1 : 0, roll = u < 0 ? -u * 2.4 : 0, sp = o.t * (w ? 3 : .5) + roll * 4;
  for (const [x, c] of [[-24, dk('#4a3a2a', .2)], [24, '#4a3a2a']]) { g.save(); g.translate(x, -14); g.rotate(sp + x); V(E(0, 0, 14, 13), c, 0, 0, 14, 1.8); F(E(0, 0, 10, 9), 'rgba(0,0,0,0)'); L(E(0, 0, 10, 9), dk(c, .3), 1.6); for (let i = 0; i < 6; i++) L(SP(`M0,0 L${Math.cos(i * 1.05) * 10},${Math.sin(i * 1.05) * 9}`), lt(c, .2), 2); V(E(0, 0, 3, 3), '#c8a040', 0, 0, 3, 1); g.restore(); }
  g.save(); g.translate(0, (w ? -Math.abs(Math.sin(o.ph * 1.2)) * 3 : 0) - roll * 4); g.rotate((w ? Math.sin(o.ph * 1.2) * .05 : 0) + roll * .4 - (u > 0 ? u * .1 : 0));
  for (let i = 0; i < 3; i++) { const a = -1.6 + (i - 1) * .9; L(SP(`M${Math.cos(a) * 30},${-44 + Math.sin(a) * 26} q${Math.cos(a) * 10},-4 ${Math.cos(a) * 14},${-10 + Math.sin(o.t * 2 + i) * 4} q4,-4 0,-6`), '#4a7a2a', 2); }
  const body = SP('M-36,-30 Q-38,-64 -10,-70 Q0,-74 10,-70 Q38,-64 36,-30 Q34,-8 0,-8 Q-34,-8 -36,-30Z'); V(body, pk, 0, -40, 38);
  g.save(); g.clip(body); for (const x of [-22, -8, 8, 22]) L(SP(`M${x},-72 Q${x * 1.4},-40 ${x},-8`), pd, 2.4); g.restore();
  V(SP('M-4,-70 Q-6,-80 0,-86 Q6,-82 4,-70Z'), '#5a7a2a', 0, -78, 5, 1.6); V(SP('M2,-80 Q12,-90 18,-82 Q10,-80 4,-76Z'), '#6aa044', 10, -82, 6, 1.4);
  const gl = .8 + Math.sin(o.t * 6) * .2 + (o.mood === 3 ? .4 : 0); glowB(4, -38, 30 * gl, 'rgba(255,190,60,.55)');
  const eye = (x, d) => { const a = o.mood === 0 ? 0 : o.mood === 4 ? -.4 : .5; F(SP(`M${x - 7},${-44 + d * a * 4} L${x + 7},${-44 - d * a * 4} L${x + 3},-36 L${x - 5},-36Z`), '#ffe07a', '#ffb030'); };
  if (o.mood === 4) { L(SP('M-14,-44 l8,4 l-8,4 M18,-44 l-8,4 l8,4'), '#3a1a0a', 2.6); } else { eye(-10, 1); eye(16, -1); }
  F(PL([2, -36, 6, -30, -1, -30]), '#ffe07a', '#ffb030');
  const mo = o.mood === 3 ? 8 : o.mood === 2 ? 4 : 2; F(SP(`M-18,-26 L-12,-28 L-10,-24 L-4,-28 L-1,-23 L5,-28 L8,-23 L13,-28 L16,-24 L22,-27 Q14,${-16 + mo} 2,${-15 + mo} Q-12,${-16 + mo} -18,-26Z`), '#ffe07a', '#ffb030');
  g.restore();
}
function marzapaneD(o) {                                        // la Strega del Marzapane: grassoccia, tutta caramelle pastello, cappello a gelatina, glassa che cola, codette, bastone lecca-lecca
  const dr = '#f4a8c8', dr2 = '#a8e0f0', sk = '#f8d8c0', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 2.6), sw = Math.sin(o.ph) * (w ? 3 : 0), cast = o.mood === 2 || o.mood === 3;
  for (const x of [-5, 5]) V(E(x + 3 + (w ? Math.sin(o.ph + (x > 0 ? 0 : Math.PI)) * 4 : 0), -2, 5, 3), '#8a5ab8', x, -2, 5, 1.2);
  g.save(); g.translate(0, b); g.rotate((u > 0 ? -.08 * u : .12 * -u));
  const sk1 = SP(`M-10,-48 Q-26,-24 ${-24 + sw},-4 Q0,2 ${24 + sw},-4 Q26,-24 10,-48Z`); V(sk1, dr, 0, -26, 28);
  g.save(); g.clip(sk1); for (let x = -24; x < 24; x += 8) F(SP(`M${x},-50 L${x + 4},-50 L${x + 6 + sw},0 L${x + 2 + sw},0Z`), '#fff0f6'); const cs = ['#e8384a', '#4ac060', '#3a8ae8', '#f2c14e', '#a85ae8']; for (let i = 0; i < 16; i++) { const x = -20 + (i * 37) % 40, y = -40 + (i * 23) % 36; g.save(); g.translate(x, y); g.rotate(i); F(SP('M-1.6,-.6 L1.6,-.6 L1.6,.6 L-1.6,.6Z'), cs[i % 5]); g.restore(); } g.restore();
  F(SP(`M${-24 + sw},-4 Q-20,2 -16,-2 Q-14,6 -10,0 Q-6,8 -2,0 Q2,6 6,0 Q10,8 14,-2 Q18,4 ${24 + sw},-4 L${24 + sw},-8 L${-24 + sw},-8Z`), '#fff6fa');
  limb(-10, -52, 1.7 + Math.sin(o.ph) * .4 * w, 9, -.5, 8, 4.4, 3.6, 3, dk(sk, .15));
  V(E(0, -54, 12, 10), dr2, 0, -54, 12); for (const [x, y, c] of [[-4, -58, '#e8384a'], [4, -52, '#f2c14e'], [-2, -50, '#4ac060']]) V(E(x, y, 2, 2), c, x, y, 2, .8);
  g.save(); g.translate(2, -72); g.rotate(Math.sin(o.t * 2) * .06 + (o.mood === 3 ? -.1 : o.mood === 4 ? .22 : 0)); g.scale(1.15, 1.15);
  V(E(1, 0, 10.4, 10), sk, 1, 0, 10);
  F(E(-5, 4, 3.2, 2.2), 'rgba(250,110,140,.5)'); F(E(8, 4, 2.6, 1.8), 'rgba(250,110,140,.5)');
  eyesX(o, sk, [[-2, -2, 2.8, 1], [5, -2.2, 2.3, -1]], 'lashes', '#e84a8a'); browsX(o, [[-2, -6.4, 5, 1], [5, -6.2, 4, -1]], '#c84a8a', 1.6, 'arch');
  V(E(8, 1, 2.4, 2), '#f0907a', 8, 1, 2, 1); mouthX(o, 2.6, 6, 7, 'grin', { lips: '#e8384a' });
  for (const sx of [-1, 1]) V(E(sx * 10, 4, 4, 5.4), '#f2e0a0', sx * 10, 4, 4, 1.4);
  V(SP('M-13,-4 Q0,-10 14,-4 Q14,-1 11,-1 Q0,-6 -10,-1 Q-14,-1 -13,-4Z'), '#8a5ab8', 0, -4, 13, 1.4);
  V(SP('M-9,-6 Q-6,-20 0,-24 Q8,-20 10,-6 Q0,-9 -9,-6Z'), '#4ac060', 0, -14, 10); F(E(-2, -16, 2, 4), 'rgba(255,255,255,.5)'); V(E(0, -26, 3.4, 3.4), '#e8384a', 0, -26, 3, 1);
  g.restore();
  const h = limb(10, -52, (cast ? -1.2 : .4) - u * .6, 9, -.4, 8, 4.4, 3.6, 3, sk);
  g.save(); g.translate(h[0], h[1]); g.rotate(-.1 + (cast ? .5 : 0)); seg(0, 22, 0, -20, 2.2, '#fff6fa'); for (let y = 18; y > -20; y -= 6) L(SP(`M-1.6,${y} l3.2,-3`), '#e8384a', 1.4);
  const lp = SP('M0,-36 m-11,0 a11,11 0 1,0 22,0 a11,11 0 1,0 -22,0'); V(lp, '#ff8ac8', 0, -36, 11, 1.6); g.save(); g.clip(lp); for (let i = 0; i < 4; i++) L(SP(`M0,-36 m${-10 + i * 2},0 a${10 - i * 2.4},${10 - i * 2.4} 0 1,1 ${20 - i * 4.8},0`), i % 2 ? '#fff' : '#f2e070', 2.4); g.restore(); if (cast) glowB(0, -36, 16, 'rgba(255,160,220,.6)'); g.restore();
  V(E(h[0], h[1], 3.2, 3.2), sk, h[0], h[1], 3, 1.2);
  g.restore();
}
function giganteghD(o) {                                        // il Gigante di Ghiaccio: corpo di cristallo a facce, barba di ghiaccioli, occhi azzurri, fiato gelato; enorme e lento
  const ic = '#a8d8f0', id = dk(ic, .3), u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 4), sw = Math.sin(o.ph);
  const facet = (p, cx, cy, r) => { V(p, ic, cx, cy, r, 2.2); g.save(); g.clip(p); F(PL([cx - r, cy - r, cx, cy - r * .2, cx - r * .2, cy + r]), 'rgba(255,255,255,.35)'); F(PL([cx + r, cy - r * .4, cx + r * .2, cy + r * .2, cx + r, cy + r]), 'rgba(40,80,140,.25)'); L(SP(`M${cx - r * .2},${cy - r} L${cx},${cy} L${cx + r},${cy - r * .2} M${cx},${cy} L${cx - r * .4},${cy + r}`), 'rgba(255,255,255,.5)', 1); g.restore(); };
  for (const [x, off] of [[-12, Math.PI], [12, 0]]) { const a = w ? Math.sin(o.ph + off) * .35 : 0, kx = x + Math.sin(a) * 22, fx = kx + Math.sin(a) * 4; facet(PL([x - 9, -52, x + 9, -52, kx + 8, -26, kx - 8, -26]), x, -40, 12); facet(PL([kx - 8, -28, kx + 8, -28, fx + 12, 0, fx - 10, 0]), kx, -14, 12); }
  g.save(); g.translate(0, b); g.rotate(.06 + w * .05 + sw * .03 * w + (u > 0 ? -.08 * u : .1 * -u));
  const hb = limb(-30, -110, 1.6 + sw * .3 * w + u * .3, 26, -.3, 24, 11, 9, 8, id); facet(PL([hb[0] - 9, hb[1] - 8, hb[0] + 9, hb[1] - 9, hb[0] + 10, hb[1] + 8, hb[0] - 9, hb[1] + 9]), hb[0], hb[1], 9);
  facet(PL([-34, -112, -10, -126, 22, -124, 36, -106, 30, -70, 18, -50, -18, -50, -30, -70]), 0, -88, 36);
  facet(PL([-20, -54, 20, -54, 24, -40, -24, -40]), 0, -47, 22);
  g.save(); g.translate(6, -140); g.rotate(Math.sin(o.t * 1.2) * .03 + (o.mood === 3 ? -.08 : o.mood === 4 ? .18 : 0)); g.scale(1.15, 1.15);
  facet(PL([-14, -12, -6, -22, 10, -22, 16, -10, 14, 6, -12, 6]), 0, -8, 16);
  for (let i = 0; i < 4; i++) V(PL([-12 + i * 3, -20, -10 + i * 4, -32 - (i % 2) * 6, -6 + i * 4, -21]), lt(ic, .2), -8 + i * 4, -26, 4, 1.2);
  eyesX(o, ic, [[-1, -9, 3.2, 1], [8, -9.4, 2.6, -1]], 'glow', '#4ad8ff'); browsX(o, [[-1, -14, 7, 1], [8, -14, 5.6, -1]], '#5a8ab0', 3.4, 'thick');
  for (let i = 0; i < 7; i++) { const x = -12 + i * 4, l = 10 + (i % 3) * 5; V(PL([x - 2, 4, x + 2, 4, x, 4 + l]), lt(ic, .3), x, 4 + l / 2, 3, 1.2); }
  mouthX(o, 3, 0, 12, 'frown');
  if (o.mood >= 2) for (let i = 0; i < 4; i++) { const k = (o.t * 1.4 + i / 4) % 1; g.save(); g.globalAlpha = (1 - k) * .7; F(E(12 + k * 26, 2 + Math.sin(k * 6) * 3, 3 + k * 6, 2 + k * 4), '#e8f8ff'); g.restore(); }
  g.restore();
  const h = limb(30, -110, .8 - 1.9 * u, 26, -.4, 24, 11, 9, 8, ic); facet(PL([h[0] - 10, h[1] - 9, h[0] + 10, h[1] - 10, h[0] + 11, h[1] + 9, h[0] - 10, h[1] + 10]), h[0], h[1], 10);
  g.restore();
  for (let i = 0; i < 3; i++) { const k = (o.t * .5 + i / 3) % 1; g.save(); g.globalAlpha = (1 - k) * .4; F(E(-20 + i * 20, -4 - k * 10, 8 + k * 6, 3), '#e8f8ff'); g.restore(); }
}
function uncinoD(o) {                                           // Capitan Uncino: snello e vanitoso, giacca rossa lunga, cappellone con la piuma, riccioli neri, baffetti, uncino d'argento e sciabola
  const coat = '#b8202e', sk = '#f0d0b8', hair = '#1a1428', gold = '#f2c14e', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 2.6), sw = Math.sin(o.ph);
  for (const [x, off, c] of [[-4, Math.PI, '#2a2a34'], [4, 0, '#3a3a46']]) { const f = legB(x, -42, 19, 19, 4, 3.4, 3, o, off, c, .6); V(SP(`M${f[0] - 4},${f[1] - 8} L${f[0] + 5},${f[1] - 8} L${f[0] + 9},${f[1]} L${f[0] - 4},${f[1]}Z`), '#1a1420', f[0] + 2, f[1] - 3, 6, 1.4); }
  g.save(); g.translate(0, b); g.rotate(-.04 + (w ? sw * .04 : 0) + (u > 0 ? -.08 * u : .14 * -u));
  const tails = SP(`M-10,-56 Q-16,-36 ${-18 + sw * 2},-22 L${-6 + sw},-28 L-2,-46Z`); V(tails, dk(coat, .2), -10, -38, 12);
  const hb = limb(-8, -84, 1.6 + sw * .4 * w, 12, -.6, 11, 3.6, 3, 2.6, dk(coat, .25)); V(SP(`M${hb[0] - 3},${hb[1]} L${hb[0] + 3},${hb[1]} L${hb[0] + 2},${hb[1] + 4} L${hb[0] - 2},${hb[1] + 4}Z`), '#e8e0d0', hb[0], hb[1] + 2, 3, 1); L(SP(`M${hb[0]},${hb[1] + 4} q0,6 5,6 q4,0 4,-4`), '#c8ccd8', 2.4);
  const tor = SP('M-10,-88 Q0,-92 10,-88 L12,-50 Q0,-46 -12,-50Z'); V(tor, coat, 0, -70, 16);
  g.save(); g.clip(tor); F(SP('M-3,-88 L3,-88 L6,-60 L-6,-60Z'), '#f4f0ea'); for (const y of [-80, -70, -60]) { V(E(-6, y, 1.6, 1.6), gold, -6, y, 1.6, .8); V(E(6, y, 1.6, 1.6), gold, 6, y, 1.6, .8); } g.restore();
  F(SP('M-12,-54 L12,-54 L12,-50 L-12,-50Z'), '#2a1a14'); V(SP('M-3,-55 L3,-55 L3,-49 L-3,-49Z'), gold, 0, -52, 3, 1);
  V(SP('M-4,-90 Q0,-84 4,-90 Q6,-84 2,-80 L-2,-80 Q-6,-84 -4,-90Z'), '#f4f0ea', 0, -86, 5, 1.2);
  g.save(); g.translate(2, -102); g.rotate(Math.sin(o.t * 1.6) * .04 + (o.mood === 3 ? -.1 : o.mood === 4 ? .22 : 0)); g.scale(1.1, 1.1);
  for (const [x, y] of [[-10, 0], [-11, 6], [-9, 12], [9, 6], [10, 12]]) { const c = SP(`M${x},${y - 3} q${x < 0 ? -5 : 5},3 0,6`); L(c, '#0a0814', 4.6); L(c, hair, 2.6); }
  V(SP('M-7,-4 Q-8,-13 1,-13 Q9,-12 9,-3 Q9,7 3,10 Q-5,9 -7,-4Z'), sk, 1, -2, 10);
  eyesX(o, sk, [[0, -3, 2.6, 1], [6, -3.2, 2.2, -1]], 'lidded', '#3a6ac8'); browsX(o, [[0, -7, 5.4, 1], [6, -7, 4.4, -1]], hair, 2, 'arch');
  V(PL([5, -2, 10, 2, 5, 3]), sk, 7, 1, 3, 1);
  L(SP('M-1,4.4 Q2,3 4,5 Q6,3 9,4.4'), hair, 2); L(SP('M9,4.4 q2,-1 2,-3 M-1,4.4 q-2,-1 -2,-3'), hair, 1.2); mouthX(o, 4, 7, 5, 'smirk');
  V(SP('M-18,-8 Q0,-18 20,-8 Q16,-4 0,-10 Q-14,-4 -18,-8Z'), '#2a1a3a', 1, -9, 18, 1.6); V(SP('M-12,-10 Q-6,-26 2,-24 Q10,-26 14,-10 Q0,-14 -12,-10Z'), '#2a1a3a', 1, -17, 13); L(SP('M-12,-10 Q0,-14 14,-10'), gold, 1.6);
  const pf = SP(`M-4,-20 Q-16,${-34 + Math.sin(o.t * 3) * 2} -26,${-24 + Math.sin(o.t * 3) * 3} Q-14,-24 -4,-16Z`); V(pf, '#f4f0ea', -14, -24, 10, 1.4); L(SP(`M-4,-18 Q-14,-28 -24,${-24 + Math.sin(o.t * 3) * 3}`), '#c8c4d0', .9);
  g.restore();
  const h = limb(8, -84, .9 - 2 * u, 12, -.5, 11, 3.6, 3, 2.6, coat);
  atHand(h, -1, () => { V(SP('M-5,0 Q0,4 5,0 L5,3 Q0,7 -5,3Z'), gold, 0, 2, 5, 1); seg(0, 3, 0, 8, 1.8, '#3a2a1a'); V(SP('M-1.6,0 Q-3,-20 3,-34 Q4,-20 1.6,0Z'), '#e3e9f4', 0, -16, 16, 1.6); });
  V(E(h[0], h[1], 2.4, 2.4), sk, h[0], h[1], 2.4, 1.2);
  g.restore();
}
function burattinoD(o, ph0) {                                   // un burattino appeso ai fili
  const sk = '#e8b890', c = ['#3a8ac8', '#e8384a', '#4ac060'][Math.abs(Math.round(ph0)) % 3], dg = Math.sin(o.t * 3 + ph0) * .4;
  g.save(); g.rotate(Math.sin(o.t * 2 + ph0) * .1);
  for (const sx of [-1, 1]) { taper(sx * 3, -14, sx * 4 + Math.sin(o.t * 4 + sx + ph0) * 3, -2, 1.8, 1.4, '#7a5a3a', 1); V(E(sx * 4 + Math.sin(o.t * 4 + sx + ph0) * 3, -1, 2.4, 1.4), '#3a2418', 0, 0, 1, .6); }
  V(SP('M-5,-26 L5,-26 L6,-12 L-6,-12Z'), c, 0, -19, 6, 1.4); L(SP('M-5,-16 L5,-16'), '#2a1a14', 1.2);
  for (const sx of [-1, 1]) taper(sx * 5, -24, sx * 9, -16 + sx * dg * 6, 1.6, 1.4, c, 1);
  V(E(0, -31, 5.4, 5.4), sk, 0, -31, 5, 1.4); F(E(-2, -31, .9, .9), INK); F(E(2, -31, .9, .9), INK); F(E(-3.4, -28.6, 1.4, 1), 'rgba(240,80,80,.6)'); F(E(3.4, -28.6, 1.4, 1), 'rgba(240,80,80,.6)'); L(SP('M-2,-28 Q0,-26.6 2,-28'), INK, 1); F(SP('M-5,-34 Q0,-40 5,-34 L4,-36 L0,-40 L-4,-36Z'), c);
  g.restore();
}
function mangiafuocoD(o) {                                      // Mangiafuoco: burattinaio enorme e panciuto, barba nera fino a terra, giacca rossa, regge la croce coi fili del burattino
  const coat = '#8a1a2a', sk = '#e8a888', bd = '#141018', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3.6), sw = Math.sin(o.ph);
  for (const [x, off, c] of [[-10, Math.PI, '#2a1a14'], [10, 0, '#3a2418']]) { const f = legB(x, -40, 18, 18, 9, 7, 6, o, off, c, .45); V(SP(`M${f[0] - 7},${f[1] - 5} Q${f[0] + 8},${f[1] - 7} ${f[0] + 12},${f[1]} L${f[0] - 7},${f[1]}Z`), '#1a0e0a', f[0] + 2, f[1] - 2, 9, 1.6); }
  g.save(); g.translate(0, b); g.rotate((w ? sw * .04 : 0) + (u > 0 ? -.06 * u : .1 * -u));
  limb(-26, -112, 1.6 + sw * .3 * w, 20, -.5, 18, 9, 7, 6, dk(coat, .25));
  const tor = SP('M-30,-116 Q0,-130 30,-116 Q42,-80 30,-48 Q0,-36 -30,-48 Q-42,-80 -30,-116Z'); V(tor, coat, 0, -82, 44);
  g.save(); g.clip(tor); F(E(4, -70, 22, 26), '#f4e8c8'); for (const y of [-96, -80, -64]) { V(E(-16, y, 2.4, 2.4), '#f2c14e', -16, y, 2.4, .8); } g.restore();
  g.save(); g.translate(4, -134); g.rotate(Math.sin(o.t * 1.4) * .04 + (o.mood === 3 ? -.1 : o.mood === 4 ? .2 : 0)); g.scale(1.2, 1.2);
  const beard = SP(`M-14,0 Q-18,30 -12,60 Q-6,${100 + Math.sin(o.t * 2) * 3} 2,${108 + Math.sin(o.t * 2 + 1) * 3} Q10,${100 + Math.sin(o.t * 2 + 2) * 3} 14,60 Q18,30 14,0 Q8,8 0,7 Q-8,8 -14,0Z`); V(beard, bd, 0, 50, 30); g.save(); g.clip(beard); for (const x of [-8, -2, 4, 10]) L(SP(`M${x},6 Q${x + 4},50 ${x - 2},104`), lt(bd, .25), 1.2); g.restore();
  V(SP('M-12,-4 Q-12,-17 1,-17 Q14,-17 14,-4 Q14,6 1,8 Q-12,6 -12,-4Z'), sk, 1, -4, 14);
  V(SP('M-13,-6 Q-14,-20 1,-21 Q15,-20 15,-6 Q10,-14 1,-14 Q-8,-14 -13,-6Z'), bd, 1, -14, 14);
  eyesX(o, sk, [[-3, -6, 3.4, 1], [6, -6.2, 2.8, -1]], 'wide', '#4a1a1a'); browsX(o, [[-3, -11, 8, 1], [6, -11, 6.4, -1]], bd, 4, 'bushy');
  V(E(3, 0, 5, 4), '#d87a6a', 3, 0, 5, 1.4);
  L(SP('M-10,4 Q-4,8 2,5 Q8,8 14,4'), bd, 3.4); mouthX(o, 2, 8, 10, 'frown');
  g.restore();
  const ar = u > 0 ? -2 - u * .4 : u < 0 ? -.8 : -1.3 + Math.sin(o.t * 2) * .1, h = limb(26, -112, ar, 20, -.3, 18, 9, 7, 6, coat); V(E(h[0], h[1], 6, 6), sk, h[0], h[1], 6, 1.4);
  g.save(); g.translate(h[0], h[1] - 4); g.rotate(Math.sin(o.t * 2) * .15); V(SP('M-14,-2 L14,-2 L14,2 L-14,2Z'), '#6a4a2a', 0, 0, 14, 1.2); V(SP('M-2,-12 L2,-12 L2,10 L-2,10Z'), '#6a4a2a', 0, 0, 10, 1.2);
  const px = Math.sin(o.t * 2) * 6, py = 54; for (const [sx, sy] of [[-13, 0], [13, 0], [0, -11], [0, 10]]) L(SP(`M${sx},${sy} L${px + sx * .3},${py - 30}`), 'rgba(240,240,255,.6)', .8);
  g.translate(px, py); burattinoD(o, 1); g.restore();
  g.restore();
}
Object.assign(DRAW, { kraken: krakenD, idra: idraD, bandersnatch: bandersD, zucca: zuccaD, marzapane: marzapaneD, gigantegh: giganteghD, uncino: uncinoD, mangiafuoco: mangiafuocoD });
