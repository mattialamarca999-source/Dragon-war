// ---------- corpi rifatti, lotto C ----------
function monkeyB(o, ph0) {                                      // Scimmia Alata: gobba, braccia lunghissime, gambette corte che penzolano, muso sporgente, orecchie a sventola, ali di piume
  const fur = '#7a5232', fd = dk(fur, .28), face = '#e8c49a', u = o.u, f = Math.sin(o.t * 9 + ph0), fly = -48 + Math.sin(o.t * 2.6 + ph0) * 5;
  g.save(); g.translate(u < 0 ? -u * 12 : -u * 3, fly); g.rotate(.2 + (u < 0 ? .35 * -u : -.12 * u));
  const wg = (a, col, sc2) => { g.save(); g.translate(-6, -24); g.rotate(a); g.scale(sc2, sc2); const p = SP('M0,0 Q-6,-24 -24,-36 Q-22,-28 -30,-26 Q-22,-20 -30,-16 Q-21,-12 -25,-6 Q-14,-4 -8,4Z'); V(p, col, -14, -16, 20); L(SP('M-4,-4 L-22,-32 M-4,-2 L-27,-21 M-4,0 L-23,-9'), dk(col, .3), 1); g.restore(); };
  wg(-.2 + f * .5, '#8a90a8', 1);
  const tl = SP(`M-8,-6 Q-22,2 -22,-12 Q-22,-22 -13,-20 Q-8,-18 -12,-14`); L(tl, dk(fur, .7), 5); L(tl, fur, 3);
  for (const [x, c] of [[-3, fd], [4, fur]]) { const sw = Math.sin(o.t * 3 + x + ph0) * 4; taper(x, -6, x + sw * .5, 2, 3.6, 2.8, c); taper(x + sw * .5, 2, x + sw, 8, 2.8, 2.4, c); V(E(x + sw + 2, 9, 3.4, 2), face, x + sw, 9, 3, 1); }
  const hb = limb(-6, -26, 1.5 + Math.sin(o.t * 2 + ph0) * .2, 11, -.3, 11, 3.2, 2.6, 2.2, fd); V(E(hb[0], hb[1], 3, 3), face, hb[0], hb[1], 3, 1);
  const bd = SP('M-9,-30 Q0,-36 9,-28 Q12,-14 6,-6 Q0,-3 -6,-6 Q-12,-16 -9,-30Z'); V(bd, fur, 0, -18, 14); g.save(); g.clip(bd); F(E(4, -12, 6, 7), face); g.restore();
  V(SP('M-9,-30 Q0,-35 9,-28 L7,-14 L3,-22 L-3,-22 L-7,-14Z'), '#3a6ab8', 0, -24, 10, 1.6); F(E(-4, -18, 1.2, 1.2), '#f2c14e');
  g.save(); g.translate(7, -36); g.rotate(Math.sin(o.t * 2.4 + ph0) * .08 + (o.mood === 3 ? -.15 : o.mood === 4 ? .22 : 0));
  for (const [x, c] of [[-10, fd], [7, fur]]) { V(E(x, -1, 5, 5.6), c, x, -1, 5, 1.4); F(E(x, -1, 2.6, 3.2), face); }
  V(E(0, -2, 9, 8.6), fur, 0, -2, 9);
  V(SP('M-4,-5 Q4,-9 9,-4 Q14,1 12,6 Q6,10 -1,7 Q-6,3 -4,-5Z'), face, 4, 0, 9, 1.6); F(E(9, 1, 1, .8), dk(face, .5)); F(E(11.4, 1, 1, .8), dk(face, .5));
  eyesX(o, face, [[0, -3.4, 2.8, 1], [5.4, -3.6, 2.3, -1]], 'beady', '#6a3a1a'); browsX(o, [[0, -7.4, 5, 1], [5.4, -7.4, 4, -1]], '#3a2010', 2.2, 'thick');
  mouthX(o, 6, 5.4, 7, 'grin');
  V(SP('M-6,-8 L-5,-16 L5,-16 L6,-8Z'), '#c8302a', 0, -12, 6, 1.6); L(SP('M4,-16 Q9,-15 9,-9'), INK, 1.2); F(E(9, -8.4, 1.6, 1.6), '#f2c14e');
  g.restore();
  const h = limb(6, -26, -.1 + u * -.8, 11, -.4, 11, 3.2, 2.6, 2.2, fur); for (const t of [-.4, 0, .4]) { g.save(); g.translate(h[0], h[1]); g.rotate(h[2] + t); F(PL([1, -1.2, 6, 0, 1, 1.2]), '#fffdf4'); g.restore(); } V(E(h[0], h[1], 3, 3), face, h[0], h[1], 3, 1);
  wg(-.45 - f * .6, '#b8bed0', .95);
  g.restore();
}
function matrignaB(o) {                                         // la Matrigna: alta, rigida come un bastone, collo lungo, naso all'insù, crocchia alta, abito con lo strascico, ventaglio
  const dr = '#4a2a5a', dr2 = '#6a3a7a', sk = '#f0dcc8', hair = '#8a8a9a', u = o.u, w = o.walking ? 1 : 0, b = w ? -Math.abs(Math.sin(o.ph)) * 1.4 : 0, sw = Math.sin(o.ph) * (w ? 2 : 0);
  g.save(); g.translate(0, b);
  for (const x of [0, 8]) V(SP(`M${x},0 L${x + 6},0 Q${x + 9},-2 ${x + 7},-4 L${x},-4Z`), '#2a1a2a', x + 3, -2, 4, 1.2);
  const sk1 = SP(`M-6,-64 Q-10,-36 -12,-14 Q-22,-10 ${-30 + sw},-2 L${16 + sw},-2 Q12,-30 7,-64Z`); V(sk1, dr, -4, -30, 30);
  g.save(); g.clip(sk1); for (const x of [-6, 0, 6]) L(SP(`M${x * .4},-64 Q${x},-30 ${x * 1.6 + sw},0`), dk(dr, .3), 1.4); F(SP(`M-32,-8 L18,-8 L18,0 L-32,0Z`), dr2); g.restore();
  V(SP(`M-10,-40 Q-24,-34 -22,-18 Q-14,-22 -9,-26Z`), dr2, -16, -28, 8, 1.6);
  limb(-5, -82, 1.6 + Math.sin(o.t * 1.6) * .05, 12, -.55, 11, 2.6, 2, 1.8, dk(dr, .25));
  const bod = SP('M-6,-86 Q0,-89 6,-86 L7,-62 Q0,-59 -7,-62Z'); V(bod, dr, 0, -74, 12); F(SP('M-7,-66 L7,-66 L7,-62 L-7,-62Z'), '#2a1a2a'); V(E(0, -64, 2.2, 2.2), '#7af0c0', 0, -64, 2, 1);
  taper(1, -88, 3, -98, 2.4, 2.2, sk);
  g.save(); g.translate(4, -106); g.rotate(-.14 + Math.sin(o.t * 1.4) * .03 + (o.mood === 3 ? -.06 : o.mood === 4 ? .2 : 0));
  V(SP('M-12,10 Q-20,-6 -12,-14 Q-6,-8 -4,-2 Q-4,-14 2,-18 Q8,-8 6,0 Q10,-10 16,-10 Q16,2 8,12Z'), '#ece6f2', 0, -2, 18, 1.8);
  V(SP('M-6,-4 Q-7,-13 1,-13 Q8,-12 8,-3 Q8,7 2,10 Q-5,8 -6,-4Z'), sk, 1, -2, 10);
  V(E(-2, -14, 7, 5), hair, -2, -14, 7, 1.6); V(E(-3, -22, 4.6, 5.4), hair, -3, -22, 5, 1.4); V(E(-3, -28, 3, 3), hair, -3, -28, 3, 1.2);
  eyesX(o, sk, [[0, -3, 2.6, 1], [5.8, -3.2, 2.1, -1]], 'lidded', '#4a8a3a'); browsX(o, [[0, -7, 5, 1], [5.8, -7, 4, -1]], '#4a4a5a', 1.4, 'arch');
  V(SP('M5,-3 Q10,-2 11,-5 Q11,1 6,2Z'), sk, 8, -1, 3, 1.1); F(E(-3, 3, .9, .9), '#4a2a2a');
  mouthX(o, 3.4, 6, 4.6, 'frown', { lips: '#8a1a3a' });
  g.restore();
  const h = limb(5, -82, .5 - 1.6 * u, 12, -.55, 11, 2.6, 2, 1.8, dr);
  g.save(); g.translate(h[0], h[1]); g.rotate(-.9 + (o.atk >= 0 ? Math.sin(o.atk * Math.PI * 2) * .5 : Math.sin(o.t * 4) * .15));
  const fan = new Path2D(); fan.moveTo(0, 0); fan.arc(0, 0, 16, -Math.PI * .95, -Math.PI * .05); fan.closePath(); V(fan, '#c8302a', 0, -8, 14, 1.6);
  for (let i = 0; i < 7; i++) { const a = -Math.PI * .95 + i * Math.PI * .9 / 6; L(SP(`M0,0 L${Math.cos(a) * 15},${Math.sin(a) * 15}`), '#3a0e14', .9); }
  g.restore(); V(E(h[0], h[1], 2.4, 2.4), sk, h[0], h[1], 2.4, 1.2);
  g.restore();
}
function sorellaB(o, v) {                                       // le sorellastre: una bassa e tonda, l'altra alta e ossuta; capelli enormi, una scarpa come arma
  const dress = v ? '#c87ad8' : '#ff8aa8', hair = v ? '#c8642a' : '#4a3020', sk = '#f0c8a8', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, v ? 2 : 3.6), sw = Math.sin(o.ph);
  const T = v ? 1.25 : .92, W = v ? .7 : 1.25;
  for (const [x, off, c] of [[-4, Math.PI, dk(sk, .2)], [4, 0, sk]]) { const f = legB(x * W, -16 * T, 8 * T, 8 * T, 3 * W, 2.4 * W, 2, o, off, c, .7); V(SP(`M${f[0] - 3},${f[1] - 3} L${f[0] + 6},${f[1] - 3} L${f[0] + 5},${f[1]} L${f[0] - 3},${f[1]}Z`), '#c8302a', f[0] + 1, f[1] - 1, 4, 1); }
  g.save(); g.translate(0, b); g.rotate((w ? sw * .06 : 0) + (u > 0 ? -.08 * u : .12 * -u));
  limb(-8 * W, -40 * T, 1.6 + sw * .5 * w, 8 * T, -.4, 8 * T, 3.2 * W, 2.6 * W, 2.2 * W, dk(sk, .2));
  const sk1 = SP(`M${-8 * W},${-36 * T} Q${-22 * W},${-20 * T} ${-20 * W},${-12 * T} Q0,${-6 * T} ${20 * W},${-12 * T} Q${22 * W},${-20 * T} ${8 * W},${-36 * T}Z`); V(sk1, dress, 0, -24 * T, 22 * W);
  for (let i = 0; i < 4; i++) { const x = (-15 + i * 10) * W; F(E(x, -12 * T, 4 * W, 2.4), lt(dress, .4)); }
  V(E(0, -42 * T, 10 * W, 9 * T), dress, 0, -42 * T, 11); F(E(0, -38 * T, 8 * W, 1.6), lt(dress, .4));
  g.save(); g.translate(1, -56 * T); g.rotate(Math.sin(o.t * 2.2 + v) * .06 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0) + (w ? sw * .05 : 0));
  if (v) { V(SP('M-10,6 Q-16,-10 -8,-22 Q2,-36 12,-24 Q18,-14 14,-2 Q8,-12 0,-10 Q-6,-4 -10,6Z'), hair, 1, -10, 18); for (const [x, y] of [[-10, -12], [-4, -26], [6, -30], [12, -18]]) V(E(x, y, 5, 5.4), hair, x, y, 5, 1.4); }
  else { V(SP('M-15,4 Q-23,-14 -8,-24 Q6,-31 16,-18 Q22,-6 13,3 Q2,-6 -15,4Z'), hair, 0, -10, 20); for (const [x, y] of [[-14, -6], [-10, -18], [2, -24], [13, -15]]) V(E(x, y, 5, 4.4), hair, x, y, 5, 1.4); }
  const hd = v ? SP('M-6,-6 Q-7,-11 1,-11 Q8,-11 8,-4 Q9,4 6,9 Q2,12 -1,10 Q-6,6 -6,-6Z') : E(1, -1, 9.4, 8.6); V(hd, sk, 1, -1, 9);
  F(E(-4, 3, 2.6, 1.6), 'rgba(240,100,110,.45)'); F(E(7, 3, 2.2, 1.4), 'rgba(240,100,110,.45)');
  eyesX(o, sk, [[-1, -2, v ? 2.4 : 3, 1], [5.6, -2.2, v ? 2 : 2.5, -1]], v ? 'wide' : 'lashes', '#4a6ad8'); browsX(o, [[-1, -6.6, 5.4, 1], [5.6, -6.4, 4.4, -1]], hair, 1.6, 'arch');
  if (v) V(SP('M4,-1 Q12,1 10,5 Q7,5 5,3Z'), dk(sk, .06), 7, 2, 3, 1); else V(E(6, 1.4, 2.2, 1.8), dk(sk, .06), 6, 1, 2, 1);
  mouthX(o, 3, v ? 7 : 5, v ? 6 : 5, v ? 'gap' : 'pout', { lips: '#d8304a' });
  V(E(-10, -18, 4, 3), v ? '#ffe04a' : '#7ad8e8', -10, -18, 3, 1.2);
  g.restore();
  const h = limb(7 * W, -40 * T, .6 - 2 * u, 8 * T, -.4, 8 * T, 3.2 * W, 2.6 * W, 2.2 * W, sk);
  atHand(h, -1.1, () => { V(SP('M-2,0 L-3,-10 Q4,-14 12,-12 Q14,-8 8,-6 Q3,-5 2,0Z'), '#c8302a', 4, -7, 8, 1.4); seg(-2, 0, -3, 5, 1.6, '#c8302a'); });
  g.restore();
}
function reginaB(o) {                                           // la Regina di Cuori: bassa e larghissima, gonna a triangolo enorme, piedini, braccia corte, crocchia a torre, testa grossa
  const dr = '#c8202e', blk = '#1e1a28', yl = '#f2c14e', sk = '#f4d8c0', u = o.u, w = o.walking ? 1 : 0, b = w ? -Math.abs(Math.sin(o.ph * 1.4)) * 2 : 0, sw = Math.sin(o.ph * 1.4);
  const heart = (x, y, r, c) => F(SP(`M${x},${y + r * .9} C${x - r * 1.6},${y - r * .2} ${x - r * .8},${y - r * 1.4} ${x},${y - r * .5} C${x + r * .8},${y - r * 1.4} ${x + r * 1.6},${y - r * .2} ${x},${y + r * .9}Z`), c);
  for (const x of [-6, 4]) V(E(x + (w ? Math.sin(o.ph * 1.4 + (x > 0 ? 0 : Math.PI)) * 3 : 0) + 3, -1, 4, 2), blk, x, -1, 4, 1.2);
  g.save(); g.translate(0, b); g.rotate((w ? sw * .05 : 0) + (u > 0 ? -.06 * u : .1 * -u));
  const sk1 = SP(`M-8,-52 L-34,-3 Q0,${2 + sw} 34,-3 L8,-52Z`); V(sk1, dr, 0, -26, 34);
  g.save(); g.clip(sk1); F(SP('M-4,-52 L4,-52 L12,0 L-12,0Z'), blk); for (const [x, y] of [[-20, -10], [-12, -28], [20, -12], [12, -30], [0, -8], [-26, -4], [26, -4]]) heart(x, y, 3.4, x === 0 ? dr : yl); g.restore();
  L(SP(`M-34,-3 Q0,${2 + sw} 34,-3`), yl, 2);
  limb(-10, -56, 1.5 + sw * .4 * w, 7, -.4, 6, 3.6, 3, 2.6, dk(sk, .2));
  V(E(0, -58, 11, 9), dr, 0, -58, 11); heart(0, -58, 3.6, yl);
  V(SP('M-16,-66 Q0,-60 16,-66 L22,-78 Q0,-68 -22,-78Z'), '#f4f0ea', 0, -70, 18, 1.6);
  g.save(); g.translate(1, -82); g.rotate(Math.sin(o.t * 2) * .05 + (o.mood === 3 ? -.14 : o.mood === 4 ? .22 : 0)); g.scale(1.25, 1.25);
  V(SP('M-11,-4 Q-13,-18 0,-20 Q13,-18 11,-4Z'), blk, 0, -12, 13); V(E(0, -21, 6, 5), blk, 0, -21, 6, 1.6); V(E(0, -27, 4, 3.6), blk, 0, -27, 4, 1.2);
  V(SP('M-11,0 Q-12,-10 1,-11 Q13,-10 12,0 Q12,9 2,11 Q-10,10 -11,0Z'), sk, 1, 0, 12);
  F(E(-5, 5, 3, 2), 'rgba(240,80,100,.45)'); F(E(8, 5, 2.4, 1.6), 'rgba(240,80,100,.45)');
  eyesX(o, sk, [[-2, -2, 3.4, 1], [6, -2.2, 2.8, -1]], 'wide', '#2a6ac8'); browsX(o, [[-2, -7.4, 6.4, 1], [6, -7.2, 5, -1]], blk, 2.6, 'thick');
  F(PL([-6, -4, -7, -6, -4, -5]), '#4a7ad8');
  mouthX(o, 2, 6, o.mood === 3 ? 11 : 7, 'frown', { lips: '#c8202e' });
  V(SP('M-9,-10 L-10,-20 L-5,-15 L0,-23 L5,-15 L10,-20 L9,-10Z'), yl, 0, -15, 10, 1.6); heart(0, -16, 2, dr);
  g.restore();
  const h = limb(9, -56, .6 - 2 * u, 7, -.4, 6, 3.6, 3, 2.6, sk);
  atHand(h, -1.1, () => { seg(0, 10, 0, -26, 2.4, yl); heart(0, -31, 5.4, dr); });
  g.restore();
}
function cartaB(o, v) {                                         // carta-soldato: piatta come una carta, testolina, braccia e gambe stecchite, marcia rigida
  const u = o.u, w = o.walking ? 1 : 0, b = w ? -Math.abs(Math.sin(o.ph * 1.2)) * 2 : 0, sk = '#f4d8c0', red = '#c8202e';
  const heart = (x, y, r) => F(SP(`M${x},${y + r * .9} C${x - r * 1.6},${y - r * .2} ${x - r * .8},${y - r * 1.4} ${x},${y - r * .5} C${x + r * .8},${y - r * 1.4} ${x + r * 1.6},${y - r * .2} ${x},${y + r * .9}Z`), red);
  for (const [x, off, c] of [[-4, Math.PI, dk(red, .3)], [4, 0, red]]) { const a = w ? Math.sin(o.ph * 1.2 + off) * .35 : 0, fx = x + Math.sin(a) * 26; taper(x, -28, fx, -2, 1.8, 1.6, c, 1.2); V(E(fx + 2, -1, 3.4, 1.6), '#1e1a28', fx, -1, 3, 1); }
  g.save(); g.translate(0, b); g.rotate((u > 0 ? -.06 * u : .1 * -u));
  limb(-12, -64, 1.7 + (w ? Math.sin(o.ph * 1.2) * .3 : 0), 10, -.1, 9, 1.6, 1.4, 1.4, dk(red, .3));
  const card = SP('M-14,-74 Q-14,-77 -11,-77 L11,-77 Q14,-77 14,-74 L14,-30 Q14,-27 11,-27 L-11,-27 Q-14,-27 -14,-30Z'); V(card, '#fbf8f2', 0, -52, 24, 2);
  L(SP('M-11,-74 L11,-74 L11,-30 L-11,-30Z'), red, 1); g.save(); g.fillStyle = red; g.font = 'bold 8px sans-serif'; g.fillText(String(v + 2), -10, -66); g.restore();
  for (let i = 0; i < v + 2; i++) heart(i % 2 ? 4 : -4, -64 + Math.floor(i / 2) * 13 + (i % 2 ? 6 : 0), 3.4);
  g.save(); g.translate(1, -84); g.rotate(Math.sin(o.t * 2.4 + v) * .04 + (o.mood === 4 ? .22 : 0)); g.scale(.85, .85);
  V(E(0, 0, 7, 7.4), sk, 0, 0, 7);
  eyesX(o, sk, [[-1, -1, 2.4, 1], [4.6, -1.2, 2, -1]], 'beady', '#4a3020'); browsX(o, [[-1, -4.8, 4.4, 1], [4.6, -4.6, 3.4, -1]], '#4a3020', 1.4, 'thick'); mouthX(o, 2, 3.6, 4.6, 'oh');
  V(SP('M-7,-3 Q-8,-11 0,-11 Q8,-11 7,-3Z'), red, 0, -7, 8, 1.6); heart(0, -7, 2.2);
  g.restore();
  const h = limb(12, -64, 1.0 - 1.6 * u, 10, -.6 + u * .4, 9, 1.6, 1.4, 1.4, red);
  atHand(h, -1.2 + (u < 0 ? .8 : 0), () => { seg(0, 14, 0, -36, 1.8, '#6a4426'); V(SP('M0,-48 C-6,-42 -5,-36 0,-36 C5,-36 6,-42 0,-48Z'), '#c9ccd6', 0, -42, 6, 1.4); });
  g.restore();
}
function gothelB(o) {                                           // Madre Gothel: alta e formosa, vita stretta, si tiene impettita all'indietro, ricci neri voluminosi, mantello lungo, treccia d'oro
  const dr = '#6a1a2a', dr2 = '#8a2a3a', sk = '#f0e2d8', hair = '#1e1626', gold = '#f2c45a', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 2), sw = Math.sin(o.ph) * (w ? 4 : 0) + Math.sin(o.t * 2) * 1.6;
  g.save(); g.translate(0, b);
  const cape = SP(`M-10,-82 Q-28,-50 ${-30 + sw * 1.4},-2 L${4 + sw},-2 Q-2,-50 -4,-82Z`); V(cape, dk(dr, .3), -12, -40, 30);
  for (const x of [-3, 6]) V(E(x + 3 + (w ? Math.sin(o.ph + (x > 0 ? 0 : Math.PI)) * 4 : 0), -1, 5, 2.4), '#1a1420', x, -1, 5, 1.4);
  const robe = SP(`M-7,-80 Q-12,-66 -6,-58 Q-14,-40 ${-17 + sw},-3 L${17 + sw},-3 Q14,-40 7,-58 Q12,-66 7,-80Z`); V(robe, dr, 0, -42, 28);
  g.save(); g.clip(robe); for (const x of [-6, 2, 9]) L(SP(`M${x * .4},-58 Q${x},-30 ${x * 1.4 + sw},0`), dk(dr, .35), 1.4); F(SP('M-7,-80 Q0,-74 7,-80 L6,-72 Q0,-68 -6,-72Z'), dr2); g.restore();
  F(SP('M-7,-60 L7,-60 L8,-56 L-8,-56Z'), '#1a1420'); V(E(0, -58, 2, 2), gold, 0, -58, 2, .8);
  limb(-6, -78, 1.9 + Math.sin(o.t * 1.6) * .05, 12, -2.2, 10, 2.8, 2.2, 1.8, dk(dr, .25));
  g.save(); g.translate(0, -92); g.rotate(-.12 + Math.sin(o.t * 1.5) * .05 + (o.mood === 3 ? -.06 : o.mood === 4 ? .22 : 0) + (w ? Math.sin(o.ph) * .03 : 0));
  V(SP('M-16,8 Q-24,-12 -12,-22 Q0,-30 12,-22 Q20,-12 14,2 Q8,-12 -2,-10 Q-8,-4 -6,16 Q-14,14 -16,8Z'), hair, -2, -6, 22);
  for (const [x, y, r] of [[-18, -8, 6], [-16, 6, 6], [-8, -20, 6], [4, -22, 6], [13, -14, 5.4], [-12, 16, 5.4], [-20, 0, 5]]) V(E(x, y, r, r), hair, x, y, r, 1.4);
  V(SP('M-7,-4 Q-8,-14 1,-14 Q9,-13 9,-3 Q9,8 2,11 Q-6,9 -7,-4Z'), sk, 1, -2, 11);
  eyesX(o, sk, [[0, -3, 3, 1], [6.4, -3.2, 2.4, -1]], 'lashes', '#5a3a8a'); browsX(o, [[0, -7.6, 5.8, 1], [6.4, -7.4, 4.8, -1]], hair, 1.6, 'arch');
  F(E(0, -4.4, 3.6, 1.6), 'rgba(110,40,90,.3)'); V(PL([6, -3, 11, 3, 6, 3]), sk, 8, 1, 4, 1.2); F(E(-3, 5, .9, .9), '#4a2a2a');
  mouthX(o, 3.6, 6.6, 5.6, 'smirk', { lips: '#8a1a2a' });
  g.restore();
  const lash = o.atk >= 0 && swing(o.atk) < 0 ? -swing(o.atk) * 2.4 : 0, h = limb(6, -78, .5 - 1.8 * u + lash * .5, 12, -.4, 10, 2.8, 2.2, 1.8, dr);
  const n = 14, L0 = 30 + lash * 28; let px = h[0], py = h[1];
  for (let i = 0; i < n; i++) { const k = i / n, a = h[2] + (lash ? -.3 : 1.2 + Math.sin(o.t * 3 + i * .5) * .25 * k) - (lash ? 0 : k * .8), nx = px + Math.cos(a) * L0 / n, ny = py + Math.sin(a) * L0 / n;
    V(E(nx, ny, 3.4 - k * 1.2, 2.6 - k * .8, a), i % 2 ? gold : dk(gold, .12), nx, ny, 3, 1.1); px = nx; py = ny; }
  V(E(px, py, 2.4, 3.4), '#e8384a', px, py, 3, 1);
  V(E(h[0], h[1], 2.6, 2.6), sk, h[0], h[1], 3, 1.2);
  g.restore();
}
function ominoB(o) {                                            // l'Omino di Burro: a forma d'uovo, piedini minuscoli, braccine corte, guance enormi, cappellino; mellifluo con la frusta
  const sk = '#f4c8a8', coat = '#3a7a4a', u = o.u, w = o.walking ? 1 : 0, b = w ? -Math.abs(Math.sin(o.ph * 1.6)) * 3 : Math.sin(o.t * 3) * .6, sw = Math.sin(o.ph * 1.6);
  for (const [x, off] of [[-5, Math.PI], [5, 0]]) { const a = w ? Math.sin(o.ph * 1.6 + off) * 4 : 0; V(E(x + a, -2, 5, 2.6), '#2a1a14', x + a, -2, 4, 1.2); taper(x * .8, -10, x + a, -3, 2.4, 2, '#5a4a3a', 1.2); }
  g.save(); g.translate(0, b); g.rotate((w ? sw * .08 : 0) + (u > 0 ? -.1 * u : .14 * -u));
  limb(-14, -38, 1.5 + sw * .5 * w, 6, -.4, 6, 3.6, 3, 2.8, dk(coat, .3));
  V(SP(`M-14,-20 Q-20,-12 ${-18 + sw * 2},-6 L-10,-12Z`), dk(coat, .25), -14, -12, 6, 1.4);
  const egg = SP('M0,-62 Q16,-60 18,-36 Q18,-14 0,-10 Q-18,-14 -18,-36 Q-16,-60 0,-62Z'); V(egg, coat, 0, -36, 24);
  g.save(); g.clip(egg); F(E(5, -30, 9, 20), '#f4f0e0'); for (const y of [-40, -32, -24]) V(E(-2, y, 1.6, 1.6), '#f2c14e', -2, y, 1.6, .8); g.restore();
  g.save(); g.translate(3, -60); g.rotate(Math.sin(o.t * 2.6) * .08 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0) + (w ? sw * .05 : 0));
  V(E(0, 0, 13, 11), sk, 0, 0, 13); F(E(-3, -6, 5, 2.4), 'rgba(255,255,255,.5)');
  V(E(-8, 4, 5, 4), lt('#f4a0a0', .1), -8, 4, 5, 1); V(E(9, 4, 4, 3.4), lt('#f4a0a0', .1), 9, 4, 4, 1);
  eyesX(o, sk, [[-2, -2, 2.4, 1], [5, -2.2, 2, -1]], 'beady', '#4a8ac8'); browsX(o, [[-2, -6, 4.6, 1], [5, -5.8, 3.8, -1]], '#c89a5a', 1.4, 'arch');
  if (o.mood === 0) for (const x of [-2, 5]) L(SP(`M${x - 2.4},-2 Q${x},-4.4 ${x + 2.4},-2`), INK, 1.6);
  V(E(10, 1, 2.6, 2.4), '#f0907a', 10, 1, 2.6, 1);
  mouthX(o, 2.6, 6, 8, 'smile', { lips: '#c8304a' });
  V(SP('M-10,-7 Q-9,-11 0,-11 Q9,-11 10,-7 Q0,-9 -10,-7Z'), '#2a2a2a', 0, -9, 10, 1.6); V(SP('M-5,-10 L-4,-18 L5,-18 L6,-10Z'), '#2a2a2a', 0, -14, 6, 1.4); F(SP('M-4.6,-13 L5.6,-13 L5.8,-11 L-4.8,-11Z'), '#c8304a');
  g.restore();
  const crack = o.atk >= .45 && o.atk < .75, h = limb(14, -38, .4 - 2 * u, 6, -.4, 6, 3.6, 3, 2.8, coat);
  seg(h[0], h[1], h[0] + Math.cos(h[2] - .8) * 14, h[1] + Math.sin(h[2] - .8) * 14, 2.4, '#5a3a20');
  const ex = h[0] + Math.cos(h[2] - .8) * 14, ey = h[1] + Math.sin(h[2] - .8) * 14, ln = SP(crack ? `M${ex},${ey} Q${ex + 20},${ey - 10} ${ex + 40},${ey + 4}` : `M${ex},${ey} Q${ex - 10},${ey + 14} ${ex + 4},${ey + 26 + Math.sin(o.t * 3) * 3}`); L(ln, '#3a2a1a', 1.6);
  if (crack) glowB(ex + 40, ey + 4, 10, 'rgba(255,240,170,.8)');
  V(E(h[0], h[1], 3.2, 3.2), sk, h[0], h[1], 3, 1.2);
  g.restore();
}
function stregamareB(o) {                                       // la Strega del Mare: massiccia, spalle larghe, gonna di tentacoli sopra la coda, capelli d'alga, conchiglia che brilla, tridente
  const sk = '#8aa4c0', skd = dk(sk, .25), hair = '#3a7a4a', u = o.u, fl = Math.sin(o.t * 2) * 3, cast = o.mood === 2 || o.mood === 3;
  const wave = SP(`M-32,0 Q-22,${-10 + Math.sin(o.t * 3) * 3} -12,-6 Q0,${-14 + Math.sin(o.t * 3 + 1) * 3} 12,-6 Q22,${-12 + Math.sin(o.t * 3 + 2) * 3} 32,0Z`);
  V(wave, '#2a6a9a', 0, -6, 30, 1.8); L(SP(`M-24,-3 Q-16,${-9 + Math.sin(o.t * 3) * 2} -8,-6 M4,-7 Q12,${-12 + Math.sin(o.t * 3 + 2) * 2} 22,-4`), '#bfe8ff', 2);
  g.save(); g.translate(0, -8 + fl); g.rotate(-.04 + (u > 0 ? -.08 * u : .1 * -u));
  const tw = Math.sin(o.t * 3) * 6; V(SP(`M-6,-14 Q${-14 + tw * .3},-4 ${-24 + tw},-4 L${-32 + tw},-12 L${-30 + tw},6 Q${-14 + tw * .5},6 4,-4Z`), '#2a4a5a', -16, -6, 16, 1.8);
  for (let i = 0; i < 6; i++) { const x0 = -14 + i * 6, a = Math.sin(o.t * 2.4 + i) * 4; const t2 = SP(`M${x0 - 3},-24 Q${x0 - 4 + a},-12 ${x0 + a * 1.4},-2 Q${x0 + 4 + a * 1.6},-4 ${x0 + 3 + a},-8 Q${x0 + 3},-16 ${x0 + 3},-24Z`); V(t2, i % 2 ? '#5a2a7a' : '#6a3a8a', x0, -12, 6, 1.6); for (let k = 0; k < 3; k++) F(E(x0 + a * (k / 3), -18 + k * 5, 1, 1), '#e8b8e8'); }
  const hs = Math.sin(o.t * 2) * 4;
  V(SP(`M-10,-62 Q-28,-54 ${-30 + hs},-28 Q${-24 + hs},-16 ${-14 + hs * .6},-22 Q-18,-38 -8,-50Z`), hair, -16, -40, 20);
  const tor = SP('M-16,-56 Q0,-62 16,-56 Q20,-40 14,-24 Q0,-20 -14,-24 Q-20,-40 -16,-56Z'); V(tor, sk, 0, -40, 22);
  V(SP('M-15,-30 Q0,-24 15,-30 L15,-24 Q0,-18 -15,-24Z'), '#2a3a6a', 0, -26, 15, 1.4);
  for (const x of [-6, 6]) V(E(x, -44, 5, 4), '#3a4a7a', x, -44, 5, 1.2);
  limb(-15, -54, 1.8 + (cast ? -.8 : 0), 11, -.9, 10, 5, 4, 3.4, skd);
  g.save(); g.translate(1, -50); V(SP('M-5,0 Q0,-6 5,0 Q4,5 0,6 Q-4,5 -5,0Z'), '#f2d0a0', 0, 1, 5, 1.2); L(SP('M0,-4 L0,5 M-3,-1 L-2,4 M3,-1 L2,4'), dk('#f2d0a0', .3), .8); if (cast) glowB(0, 1, 16, 'rgba(255,220,120,.7)'); g.restore();
  g.save(); g.translate(2, -68); g.rotate(Math.sin(o.t * 1.6) * .05 - (cast ? .06 : 0) + (o.mood === 4 ? .22 : 0)); g.scale(1.15, 1.15);
  V(SP('M-10,-2 Q-11,-13 1,-13 Q12,-12 12,-2 Q13,8 8,11 Q2,13 -4,11 Q-10,8 -10,-2Z'), sk, 1, -1, 13);
  V(SP('M-12,6 Q-15,-14 1,-15 Q14,-14 12,-2 Q4,-10 -2,-8 Q-8,-2 -7,12Z'), hair, 0, -4, 13);
  for (const [x, y] of [[-10, -12], [4, -15], [11, -7], [-12, 0]]) L(SP(`M${x},${y} q2,-4 0,-8`), hair, 2.2);
  eyesX(o, sk, [[0, -2, 3.2, 1], [6.6, -2.2, 2.6, -1]], 'slit', '#f2c040'); browsX(o, [[0, -6.6, 5.8, 1], [6.6, -6.4, 4.6, -1]], '#1e3a2a', 2, 'arch');
  F(E(0, -3.6, 3.8, 1.6), 'rgba(40,60,120,.35)'); V(SP('M6,-2 Q12,2 9,5 Q7,5 6,3Z'), dk(sk, .06), 8, 1, 3, 1); F(E(-4, 6, .9, .9), '#2a3a5a');
  mouthX(o, 4, 6.4, 7, 'smirk', { lips: '#2a3a8a' });
  g.restore();
  const h = limb(15, -54, -.2 - u * .9, 11, -.4, 10, 5, 4, 3.4, sk);
  g.save(); g.translate(h[0], h[1]); seg(0, 18, 0, -26, 2.4, '#c8a85a'); for (const x of [-5, 0, 5]) V(PL([x - 1.8, -26, x, -35, x + 1.8, -26]), '#c8a85a', x, -29, 3, 1); L(SP('M-5,-26 L5,-26'), '#c8a85a', 2.4); if (cast) glowB(0, -30, 14, 'rgba(120,255,200,.6)'); g.restore();
  V(E(h[0], h[1], 3.6, 3.6), sk, h[0], h[1], 3.6, 1.2);
  g.restore();
}
Object.assign(DRAW, {
  scimmie: grp(monkeyB, [[-40, 8, .86, 1], [38, -10, .9, 2], [0, 0, 1, 0]]),
  matrigna(o) { for (const [ox, s2, v] of [[-32, .92, 0], [32, .92, 1]]) { g.save(); g.translate(ox, 2); g.scale(s2, s2); sorellaB(Object.assign({}, o, { t: o.t + v + 1, ph: o.ph + v + 1 }), v); g.restore(); } matrignaB(o); },
  reginacuori(o) { for (const [ox, s2, v] of [[-34, .9, 0], [34, .9, 1]]) { g.save(); g.translate(ox, 0); g.scale(s2, s2); cartaB(Object.assign({}, o, { t: o.t + v + 1, ph: o.ph + v + 1 }), v); g.restore(); } reginaB(o); },
  gothel: gothelB, omino: ominoB, stregamare: stregamareB
});
