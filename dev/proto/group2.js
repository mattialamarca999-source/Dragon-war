// ---------- gruppo 2: gli altri comuni ----------
function glowB(x, y, r, c) { g.save(); g.globalCompositeOperation = 'lighter'; const gr = g.createRadialGradient(x, y, 1, x, y, r); gr.addColorStop(0, c); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2); g.restore(); }
function fatuoD(o) {                                            // Fuoco Fatuo: fiammella azzurra a tre lingue, sorriso dispettoso
  const u = o.u, fl = -26 + Math.sin(o.t * 3) * 4, lunge = u < 0 ? -u * 14 : -u * 5, tw = k => Math.sin(o.t * 9 + k) * 3;
  for (let i = 1; i < 6; i++) { g.save(); g.globalAlpha = .7 - i * .11; F(E(-10 - i * 7 + Math.sin(o.t * 5 + i) * 2, fl - 10 + Math.sin(o.t * 4 + i * 2) * 4, 3 - i * .4, 3 - i * .4), '#9ae8ff', '#3ab0ff'); g.restore(); }
  g.save(); g.translate(lunge, fl); g.rotate((o.walking ? .18 : 0) + (u > 0 ? -.15 * u : .25 * -u));
  glowB(0, -12, 46, 'rgba(60,170,255,.5)');
  const fire = (s, c) => { const p = SP(`M${-14 * s},-6 Q${-17 * s},${-22 * s} ${-9 * s + tw(1)},${-34 * s} Q${-6 * s},${-24 * s} ${-2 * s},${-26 * s} Q${-1 * s + tw(2)},${-40 * s} ${4 * s + tw(2)},${-48 * s} Q${8 * s},${-34 * s} ${8 * s},${-26 * s} Q${12 * s},${-30 * s} ${14 * s + tw(3)},${-36 * s} Q${19 * s},${-20 * s} ${14 * s},-6 Q${10 * s},${4 * s} 0,${4 * s} Q${-10 * s},${4 * s} ${-14 * s},-6Z`); return p; };
  const f1 = fire(1); L(f1, '#1a4a9a', 4.4); F(f1, '#3aa8ff'); g.save(); g.clip(f1); F(fire(.72), '#8adcff'); F(E(0, -4, 9, 7), '#e6faff'); g.restore();
  eyes(o, '#8adcff', [[-2, -14, 3.6, 1], [6.4, -14.4, 3, -1]], '#1b3a8a'); brows(o, [[-2, -19, 6.4, 1], [6.4, -19, 5, -1]], '#1a4a9a', 2);
  mouth(o, 2.6, -7, 8, { fang: 1 }); F(E(-7, -9, 2.4, 1.4), 'rgba(255,255,255,.45)');
  g.restore();
}
function diavD(o) {                                             // Diavoletto: piccolo, rosso, corna, codina a freccia e forcone (due colpi)
  const sk = '#d8443a', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3), sw = Math.sin(o.ph), th = o.atk >= 0 ? Math.max(0, Math.sin(o.atk * Math.PI * 4 - .6)) : 0;
  const wingA = Math.sin(o.t * 14) * .45;
  g.save(); g.translate(0, b);
  const tl = SP(`M-6,-24 Q-20,-16 -22,${-30 + Math.sin(o.t * 4) * 4} Q-24,-40 -16,-42`); L(tl, dk(sk, .7), 4.6); L(tl, sk, 2.4); g.save(); g.translate(-16, -42); g.rotate(-.6 + Math.sin(o.t * 4) * .2); V(PL([-5, 2, 0, -7, 5, 2]), sk, 0, -1, 5, 1.6); g.restore();
  const wing = (a, col) => { g.save(); g.translate(-4, -32); g.rotate(a); V(SP('M0,0 Q-10,-16 -22,-14 Q-17,-9 -19,-4 Q-12,-5 -12,1 Q-6,-1 0,4Z'), col, -10, -6, 12, 2); g.restore(); };
  wing(-.2 + wingA, '#7a2234'); g.restore();
  leg(-3, -20, 8, 9, 3.8, o, Math.PI, dk(sk, .3), '#2a1a1a', .8); leg(3, -20, 8, 9, 3.8, o, 0, sk, '#3a2222', .8);
  g.save(); g.translate(0, b); g.rotate(.06 + w * .1 + (th ? .1 : 0));
  arm(-4, -32, 7, 7, 3.4, 1.8 + sw * .6 * w, -.5, dk(sk, .3));
  const bd = E(0, -28, 9, 10); V(bd, sk, 0, -28, 10); g.save(); g.clip(bd); F(E(4, -26, 5, 7), lt(sk, .3)); g.restore();
  g.save(); g.translate(2, -46); g.rotate(Math.sin(o.t * 2.6) * .06 + (o.mood === 3 ? -.1 : o.mood === 4 ? .2 : 0) + (w ? sw * .05 : 0));
  for (const [x, sg, c] of [[-6, -1, dk('#f2e6c8', .2)], [6, 1, '#f2e6c8']]) V(SP(`M${x - 3},-8 Q${x + sg * 2},-24 ${x + sg * 9},-22 Q${x + sg * 3},-17 ${x + 4},-7Z`), c, x + sg * 3, -14, 8, 1.8);
  V(PL([-12, -3, -20, -9, -11, 2]), dk(sk, .15), -14, -3, 6, 1.6);
  V(SP('M-11,-2 Q-11,-12 1,-12 Q12,-12 12,-1 Q12,9 1,10 Q-11,9 -11,-2Z'), sk, 0, -1, 12);
  eyes(o, sk, [[0, -2, 3.8, 1], [7.4, -2.2, 3.1, -1]], '#ffd02a'); brows(o, [[0, -7.4, 6.6, 1], [7.4, -7.4, 5.2, -1]], '#3a0e14', 2.2);
  mouth(o, 4, 4.6, 8, { fang: 1 }); V(PL([2, 9, 5, 15, 7, 9]), dk(sk, .35), 5, 11, 3, 1.2);
  g.restore();
  const h = arm(4, -32, 7, 7, 3.4, .25 - th * .3, -.7 + th * .6, sk);
  g.save(); g.translate(h[0] + th * 7, h[1]); g.rotate(-.12 + (o.u > 0 ? -.6 * o.u : 0));
  seg(-14, 0, 22, 0, 2, '#6a4426'); V(SP('M20,-6 L22,-6 L22,6 L20,6Z'), '#9aa0b0', 21, 0, 4, 1.4);
  for (const y of [-6, 0, 6]) V(PL([22, y - 1.4, 31, y, 22, y + 1.4]), '#c9ccd6', 26, y, 4, 1.2);
  g.restore(); V(E(h[0] + th * 7, h[1], 3, 3), sk, h[0], h[1], 3, 1.4);
  wing(-.5 - wingA, '#9a3044');
  g.restore();
}
function rospoD(o) {                                            // Rospo Velenoso: bitorzoli viola, occhioni, le guance si gonfiano e sputa
  const sk = '#7a4a9a', bel = '#dcc890', u = o.u, w = o.walking ? 1 : 0, p = o.ph * 1.3, hop = w ? Math.max(0, Math.sin(p)) : 0, puff = o.mood === 2 ? 1 : 0;
  g.save(); g.translate(0, -hop * 10); g.scale(1 - hop * .06 + puff * .04, 1 + hop * .08 - puff * .04);
  V(SP(`M-12,-6 Q-28,${-12 + hop * 8} -24,${2 + hop * 6} L-10,0Z`), dk(sk, .25), -18, -4, 10, 2); V(E(-22 - hop * 4, 1 + hop * 6, 6, 2.6), dk(sk, .25), -22, 1, 6, 1.6);
  const body = SP('M-20,-4 Q-22,-26 -2,-28 Q18,-29 23,-15 Q25,-2 14,0 L-16,0Z'); V(body, sk, 0, -14, 22);
  g.save(); g.clip(body); F(E(6, -2, 16, 6), bel); for (const [x, y, r] of [[-12, -20, 2.6], [-4, -24, 2], [-14, -11, 2], [-6, -15, 1.8], [10, -24, 1.6]]) { F(E(x, y, r + 1, r + 1), dk(sk, .2)); F(E(x - .5, y - .5, r, r), '#a07ac0'); } g.restore();
  if (puff) V(E(17, -8, 9, 7.4), '#e8bfe8', 17, -8, 9, 1.8);
  seg(10, -6, 13, 0, 4, sk); for (const a of [-.4, 0, .4]) F(E(14 + a * 6, 1, 2.4, 1.4), dk(sk, .2));
  V(E(5, -27, 6.6, 6.2), sk, 5, -27, 6, 1.8); V(E(14, -26, 5.4, 5), sk, 14, -26, 5, 1.8);
  eyes(o, sk, [[5, -28, 4.6, 1], [14, -27, 3.8, -1]], '#f2c040'); brows(o, [[5, -34.4, 7, 1], [14, -32.6, 5.4, -1]], '#2a1440', 2.2);
  if (o.mood === 3) { const m = SP('M2,-15 Q13,-16 24,-14 Q20,-6 12,-6 Q4,-7 2,-15Z'); L(m, '#1b1238', 2.2); F(m, '#5a1230'); F(E(14, -9, 5, 2.4), '#f07aa0'); }
  else L(SP(`M2,-15 Q12,${o.mood === 4 ? -18 : -12} 24,-15`), '#1b1238', 2);
  F(E(20, -18, .9, .7), '#1b1238');
  g.restore();
}
function cornD(o) {                                             // Cornacchia Ladra: nera e lucida, moneta d'oro nel becco
  const bk = '#2c2840', u = o.u, f = Math.sin(o.t * 11), fly = -54 + Math.sin(o.t * 2.2) * 5 + (u < 0 ? -u * 26 : 0);
  g.save(); g.translate(u < 0 ? -u * 10 : 0, fly); g.rotate((u < 0 ? .45 * -u : -.12 * u) + .04);
  const wg = (a, col) => { g.save(); g.translate(-2, -4); g.rotate(a); const p = SP('M0,0 Q-6,-20 -24,-30 Q-21,-21 -28,-17 Q-20,-12 -25,-6 Q-14,-3 -9,4Z'); V(p, col, -12, -12, 18); L(SP('M-6,-6 L-22,-26 M-6,-4 L-25,-15 M-6,-2 L-22,-6'), lt(col, .14), 1); g.restore(); };
  wg(-.1 + f * .5, dk(bk, .25));
  V(SP('M-12,-2 L-31,-6 L-33,1 L-31,7 L-12,4Z'), bk, -22, 1, 10, 2);
  const body = E(0, 0, 15, 9.6, -.12); V(body, bk, 0, 0, 15); g.save(); g.clip(body); F(E(-3, -5, 9, 2.6), 'rgba(110,140,255,.35)'); g.restore();
  for (const x of [-2, 3]) L(SP(`M${x},8 l1,5 l-2,2 M${x + 1},13 l2,2`), '#4a4650', 1.4);
  g.save(); g.translate(13, -8); g.rotate(Math.sin(o.t * 3) * .08 + (o.mood === 4 ? .3 : 0));
  V(E(0, 0, 8.4, 7.6), bk, 0, 0, 8); F(E(-2, -4, 4, 1.6), 'rgba(110,140,255,.4)');
  V(PL([5, -2, 18, 1, 6, 3]), '#3a3a44', 10, 1, 6, 1.6); if (o.mood !== 3) { V(E(17, 2.4, 3.6, 3.6), '#f2c14e', 17, 2, 4, 1.4); F(E(16.4, 1.6, 1.2, 1.2), '#fff6c0'); } else { V(PL([6, 3, 16, 7, 6, 5]), '#3a3a44', 10, 5, 5, 1.4); }
  eyes(o, bk, [[0, -1, 3, 1], [5, -1.4, 2.3, -1]], '#7a5cff'); brows(o, [[0, -5, 5.4, 1], [5, -5, 4, -1]], '#000', 1.8);
  g.restore();
  wg(-.35 - f * .6, bk);
  g.restore();
}
function pip1(o, ph0) {                                         // un pipistrello dello sciame
  const fur = '#4a3a5a', mem = '#6a4a7a', f = Math.sin(o.t * 15 + ph0), u = o.u;
  g.save(); g.translate(u < 0 ? -u * 10 : 0, -46 + Math.sin(o.t * 3 + ph0) * 5); g.rotate(u < 0 ? .3 * -u : 0);
  const wg = (sg, col) => { g.save(); g.scale(sg, 1); g.rotate(f * .5); V(SP('M0,-2 Q8,-16 22,-14 Q19,-8 21,-4 Q15,-5 14,0 Q9,-2 7,3 Q3,1 0,3Z'), col, 10, -5, 12, 1.8); g.restore(); };
  wg(-1, dk(mem, .2));
  V(E(0, 0, 7, 8), fur, 0, 0, 8, 1.8);
  for (const sg of [-1, 1]) V(PL([sg * 2, -6, sg * 6, -16, sg * 7, -5]), fur, sg * 5, -9, 5, 1.4);
  eyes(o, fur, [[-2, -2, 2.4, 1], [2.6, -2, 2.4, -1]], '#ff4a3a'); brows(o, [[-2, -5.4, 4, 1], [2.6, -5.4, 4, -1]], '#120a20', 1.4);
  F(PL([-1.6, 3, -.6, 6, .4, 3]), '#fffdf4'); F(PL([.6, 3, 1.6, 6, 2.6, 3]), '#fffdf4'); L(SP('M-2,3 L3,3'), '#1b1238', 1);
  wg(1, mem);
  g.restore();
}
function cub1(o, ph0) {                                         // un lupetto: cucciolo grigio, testa grande, dentini
  const fur = '#8a8696', bel = '#d6cfc6', u = o.u, run = o.walking, p = o.ph * 1.7 + ph0;
  const hop = run ? -Math.abs(Math.sin(p)) * 4 : Math.sin(o.t * 4 + ph0) * .6, lunge = u < 0 ? -u * 14 : -u * 4;
  g.save(); g.translate(lunge, hop); g.rotate(run ? Math.sin(p) * .06 : u > 0 ? -.1 * u : .14 * -u);
  g.save(); g.translate(-14, -16); g.rotate(-.8 + Math.sin(o.t * 8 + ph0) * .35); V(SP('M0,-3 Q-12,-10 -18,-2 Q-14,4 0,3Z'), fur, -8, 0, 9, 1.8); F(E(-15, -1, 3, 2.4), bel); g.restore();
  const lg = (x, off, col) => { const a = run ? Math.sin(p + off) * .8 : 0, fx = x + Math.sin(a) * 7, fy = -(run ? Math.max(0, Math.cos(p + off)) * 3 : 0); seg(x, -9, fx, fy, 3.6, col); F(E(fx + 1.4, fy, 3, 2), dk(col, .3)); };
  lg(-9, 0, dk(fur, .3)); lg(6, Math.PI, dk(fur, .3));
  const body = E(-2, -14, 14, 9); V(body, fur, -2, -14, 14); g.save(); g.clip(body); F(E(2, -7, 10, 4), bel); g.restore();
  lg(-6, Math.PI * .5, fur); lg(9, Math.PI * 1.5, fur);
  g.save(); g.translate(12, -22); g.rotate((run ? Math.sin(p) * .05 : Math.sin(o.t * 3 + ph0) * .1) + (o.mood === 3 ? -.15 : o.mood === 4 ? .22 : 0));
  V(PL([-8, -6, -6, -20, 1, -8]), dk(fur, .2), -5, -11, 6, 1.6);
  V(E(0, 0, 11, 10), fur, 0, 0, 11);
  V(SP('M5,-2 Q14,-3 17,2 Q16,6 11,7 L5,6Z'), lt(fur, .1), 11, 3, 7, 1.8); V(E(16.6, 1.4, 2.4, 2), '#1c1a24', 16, 1, 2, 1);
  F(E(-3, 4, 2.6, 1.6), 'rgba(240,120,130,.3)');
  eyes(o, fur, [[1, -3, 4, 1], [8.4, -3.4, 3.2, -1]], '#ffc42a'); brows(o, [[1, -8.4, 6, 1], [8.4, -8.2, 4.8, -1]], '#3a3644', 1.8);
  mouth(o, 10.5, 7, 7, { fang: 1 });
  V(PL([1, -7, 5, -21, 8, -6]), fur, 5, -12, 6, 1.6); F(PL([3, -8, 5, -16, 6.4, -7]), '#d8a0b0');
  g.restore(); g.restore();
}
function monkey1(o, ph0) {                                      // una scimmia alata: pelo marrone, muso chiaro, ali di piume, fez rosso e gilet
  const fur = '#7a5232', face = '#e8c49a', u = o.u, f = Math.sin(o.t * 9 + ph0), fly = -46 + Math.sin(o.t * 2.6 + ph0) * 5;
  g.save(); g.translate(u < 0 ? -u * 12 : -u * 3, fly); g.rotate(.12 + (u < 0 ? .3 * -u : -.12 * u));
  const wg = (a, col) => { g.save(); g.translate(-4, -22); g.rotate(a); const p = SP('M0,0 Q-4,-22 -20,-32 Q-18,-24 -26,-22 Q-19,-16 -26,-12 Q-17,-8 -21,-3 Q-11,-2 -6,4Z'); V(p, col, -12, -14, 18); L(SP('M-4,-4 L-18,-28 M-4,-2 L-23,-18 M-4,0 L-19,-6'), dk(col, .3), 1); g.restore(); };
  wg(-.2 + f * .5, '#9aa0b8');
  const tl = SP(`M-6,-6 Q-18,0 -18,-10 Q-18,-18 -11,-16 Q-7,-14 -10,-11`); L(tl, dk(fur, .7), 5); L(tl, fur, 3);
  for (const [x, a] of [[-3, .3], [4, -.1]]) { seg(x, -6, x + Math.sin(o.t * 3 + x + ph0) * 3, 8, 3.6, x < 0 ? dk(fur, .3) : fur); F(E(x + 2, 9, 3, 2), face); }
  const bd = E(0, -14, 9, 11); V(bd, fur, 0, -14, 11); g.save(); g.clip(bd); F(E(4, -12, 5, 8), face); g.restore();
  V(SP('M-9,-20 Q0,-26 9,-20 L8,-8 L3,-14 L-3,-14 L-8,-8Z'), '#3a6ab8', 0, -16, 10, 1.6); F(E(-4, -12, 1.2, 1.2), '#f2c14e'); F(E(-4, -16, 1.2, 1.2), '#f2c14e');
  g.save(); g.translate(5, -32); g.rotate(Math.sin(o.t * 2.4 + ph0) * .08 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0));
  V(E(-9, 0, 4, 4.6), fur, -9, 0, 4, 1.6); F(E(-9, 0, 2, 2.6), face);
  V(E(0, 0, 10, 9.6), fur, 0, 0, 10);
  V(SP('M-3,-4 Q4,-8 9,-4 Q12,2 8,7 Q2,9 -3,5 Q-6,0 -3,-4Z'), face, 3, 1, 8, 1.6);
  eyes(o, face, [[1, -2, 3.2, 1], [7, -2.2, 2.6, -1]], '#6a3a1a'); brows(o, [[1, -6.2, 5.4, 1], [7, -6, 4.2, -1]], '#3a2010', 2);
  mouth(o, 5, 4.6, 6.6, { fang: 1 });
  V(SP('M-6,-8 L-5,-15 L5,-15 L6,-8Z'), '#c8302a', 0, -11, 6, 1.6); L(SP('M4,-15 Q9,-14 9,-8'), '#1b1238', 1.2); F(E(9, -7.4, 1.6, 1.6), '#f2c14e');
  g.restore();
  for (const [a, col] of [[-.1 + u * -.8, fur]]) { const h = arm(5, -20, 7, 7, 3.4, a, -.5, col); for (const t of [-.4, 0, .4]) { g.save(); g.translate(h[0], h[1]); g.rotate(h[2] + t); F(PL([1, -1.2, 5, 0, 1, 1.2]), '#fffdf4'); g.restore(); } }
  wg(-.45 - f * .6, '#b8bed0');
  g.restore();
}
function gargD(o) {                                             // il Gargoyle: di pietra, ali corte, corna, sempre accucciato, occhi di brace
  const st = '#8e8ea0', u = o.u, w = o.walking ? 1 : 0, sw = Math.sin(o.ph), hop = w ? -Math.abs(Math.sin(o.ph * .9)) * 6 : 0;
  g.save(); g.translate(0, hop); g.rotate(.18 + (u > 0 ? -.12 * u : .2 * -u));
  const tl = SP(`M-14,-14 Q-30,-8 -34,${-20 + Math.sin(o.t * 2) * 3}`); L(tl, dk(st, .7), 7); L(tl, dk(st, .2), 4); g.save(); g.translate(-34, -20 + Math.sin(o.t * 2) * 3); g.rotate(-1.2); V(PL([-4, 2, 0, -8, 4, 2]), dk(st, .2), 0, -2, 5, 1.6); g.restore();
  const wing = (a, col) => { g.save(); g.translate(-6, -46); g.rotate(a); const p = SP('M0,0 Q-8,-22 -26,-24 Q-20,-16 -24,-10 Q-16,-12 -16,-4 Q-9,-7 -6,2Z'); V(p, col, -12, -10, 16); L(SP('M0,0 L-24,-22 M0,0 L-22,-10'), dk(col, .4), 1.4); g.restore(); };
  wing(-.15 + Math.sin(o.t * 2) * .08, dk(st, .3));
  const hb = arm(-8, -44, 12, 12, 6, 1.5 + u * .4, -.4, dk(st, .3)); for (const t of [-.4, 0, .4]) { g.save(); g.translate(hb[0], hb[1]); g.rotate(hb[2] + t); F(PL([2, -1.6, 7, 0, 2, 1.6]), '#e8e4f0'); g.restore(); }
  for (const [x, c, off] of [[-6, dk(st, .3), Math.PI], [6, st, 0]]) { const a = w ? Math.sin(o.ph + off) * .4 : 0; seg(x, -22, x + 10 + Math.sin(a) * 6, -12, 8, c); seg(x + 10 + Math.sin(a) * 6, -12, x + 4 + Math.sin(a) * 6, 0, 6, c); V(E(x + 7 + Math.sin(a) * 6, 0, 7, 3), c, x + 7, 0, 7, 1.6); }
  const body = SP('M-16,-46 Q0,-56 14,-46 Q20,-30 12,-18 Q0,-12 -12,-18 Q-20,-30 -16,-46Z'); V(body, st, 0, -32, 22);
  g.save(); g.clip(body); L(SP('M-6,-48 L-2,-38 L-8,-28 M8,-34 L12,-26'), dk(st, .45), 1.4); F(E(4, -28, 8, 9), lt(st, .14)); g.restore();
  g.save(); g.translate(10, -56); g.rotate(Math.sin(o.t * 1.6) * .05 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0)); g.scale(1.1, 1.1);
  for (const [x, c] of [[-6, dk(st, .2)], [4, st]]) V(SP(`M${x - 3},-8 Q${x - 4},-22 ${x - 12},-24 Q${x - 6},-18 ${x + 3},-7Z`), c, x - 5, -14, 8, 1.8);
  V(PL([-12, -2, -19, -8, -11, 4]), dk(st, .15), -13, -2, 5, 1.6);
  V(SP('M-11,-2 Q-11,-12 1,-12 Q12,-12 13,-2 Q14,9 4,11 Q-9,10 -11,-2Z'), st, 1, -1, 13);
  L(SP('M-4,-11 l2,4 l-2,3'), dk(st, .45), 1);
  eyes(o, st, [[1, -3, 3.6, 1], [8.4, -3.2, 2.9, -1]], '#ff7a2a'); brows(o, [[1, -8.4, 7, 1], [8.4, -8.2, 5.4, -1]], dk(st, .6), 3);
  V(E(12, 1, 3, 2.6), lt(st, .08), 12, 1, 3, 1.4);
  mouth(o, 4, 5.6, 11, { fang: 1 }); if (o.mood <= 1) F(PL([7, 5.6, 9, 5.4, 8, 9]), '#fffdf4');
  g.restore();
  const h = arm(8, -44, 12, 12, 6, .7 - 1.8 * u, -.6, st); for (const t of [-.4, 0, .4]) { g.save(); g.translate(h[0], h[1]); g.rotate(h[2] + t); F(PL([2, -1.8, 9, 0, 2, 1.8]), '#e8e4f0'); L(PL([2, -1.8, 9, 0, 2, 1.8]), '#1b1238', .8); g.restore(); } V(E(h[0], h[1], 4.6, 4.6), st, h[0], h[1], 5, 1.6);
  wing(-.4 + Math.sin(o.t * 2 + 1) * .08, st);
  g.restore();
}
const grp = (fn, list) => o => { for (const [ox, oy, s2, v] of list) { g.save(); g.translate(ox, oy); g.scale(s2, s2); fn(Object.assign({}, o, { t: o.t + v * 1.3, ph: o.ph + v * 1.1 }), v * 2.1); g.restore(); } };
Object.assign(DRAW, {
  fuocofatuo: fatuoD, diavoletto: diavD, rospo: rospoD, cornacchia: cornD, gargoyle: gargD,
  sciame: grp(pip1, [[-26, 6, .9, 1], [24, -10, .85, 2], [-6, -18, .8, 3], [28, 10, .82, 4], [0, 0, 1, 0]]),
  lupetti: grp(cub1, [[-26, -2, .9, 1], [24, 4, .92, 2], [0, 0, 1, 0]]),
  scimmie: grp(monkey1, [[-28, 6, .86, 1], [26, -8, .9, 2], [0, 0, 1, 0]])
});
