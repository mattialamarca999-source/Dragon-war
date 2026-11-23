DRAW.orco = function (o) {                                    // l'Orco delle fiabe, più mostruoso: omone grigiastro, pancione, un occhio enorme e uno piccolo, denti storti
  const sk = '#a9a592', sk2 = dk(sk, .28), hair = '#2c2620', pant = '#5c4a38', lea = '#6e4a2c', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 4), sw = Math.sin(o.ph);
  g.save(); g.translate(0, b); const hb = arm(-14, -84, 17, 16, 10, 1.75 + sw * .5 * w + u * .35, -.45, sk2); V(E(hb[0], hb[1], 7, 7), sk2, hb[0], hb[1], 7, 2); g.restore();
  leg(-9, -42, 20, 20, 10.5, o, Math.PI, dk(pant, .25), '#2a2018', .55); leg(9, -42, 20, 20, 10.5, o, 0, pant, '#3a2a20', .55);
  g.save(); g.translate(0, b); g.rotate(.05 + w * .07 + sw * .03 * w);
  V(SP('M-21,-50 L21,-50 L23,-34 L-23,-34Z'), pant, 0, -42, 22); L(SP('M-14,-40 L-8,-36 M10,-42 L16,-38'), dk(pant, .4), 1.4);
  const torso = SP('M-24,-92 Q0,-102 24,-92 Q36,-70 30,-50 Q14,-36 -4,-38 Q-24,-40 -27,-58 Q-31,-76 -24,-92Z'); V(torso, sk, 2, -68, 38);
  g.save(); g.clip(torso); F(E(10, -60, 21, 19), lt(sk, .16)); F(E(14, -54, 2, 2.6), sk2);
  for (const [x, y] of [[4, -82], [8, -78], [12, -83], [2, -74]]) L(SP(`M${x},${y} l2,3`), hair, 1.2);
  L(SP('M-12,-78 L-2,-66'), '#7a5a5a', 2); for (const t of [-.8, -.4, 0, .4]) L(SP(`M${-9 + t * 6},${-74 + t * 7} l4,-2`), '#7a5a5a', 1.1); g.restore();
  V(SP('M-24,-92 Q-14,-98 -6,-96 L-10,-58 Q-20,-46 -27,-56 Q-31,-76 -24,-92Z'), lea, -16, -76, 22); L(SP('M-8,-92 L-11,-60'), dk(lea, .4), 1.2);
  V(SP('M-26,-54 Q0,-44 30,-52 L30,-45 Q0,-37 -26,-47Z'), '#4a3424', 2, -49, 28, 2);
  V(SP('M2,-53 L12,-53 L12,-43 L2,-43Z'), '#8a8e9a', 7, -48, 7, 1.6); F(SP('M5,-50 L9,-50 L9,-46 L5,-46Z'), '#4a3424');
  g.save(); g.translate(8, -108); g.rotate(Math.sin(o.t * 1.9) * .05 - sw * .05 * w + (o.mood === 3 ? .14 : o.mood === 4 ? -.2 : 0)); g.scale(1.2, 1.2);
  V(SP('M-12,-4 Q-20,-10 -21,0 Q-20,7 -12,6Z'), sk2, -16, 0, 8, 2); L(SP('M-17,-3 Q-14,0 -17,3'), dk(sk, .5), 1.2);
  for (const [x, y, a] of [[-12, -16, -.9], [-6, -20, -.5], [1, -21, -.15], [8, -20, .2], [-15, -10, -1.3]]) { g.save(); g.translate(x, y); g.rotate(a + Math.sin(o.t * 3 + x) * .06); V(SP('M-4,2 Q-2,-9 1,-12 Q3,-6 4,2Z'), hair, 0, -4, 6, 1.6); g.restore(); }
  const head = SP('M-14,-8 Q-13,-20 1,-21 Q15,-20 17,-6 Q20,8 15,15 Q4,21 -8,16 Q-15,8 -14,-8Z'); V(head, sk, 2, -2, 20);
  g.save(); g.clip(head); for (let i = 0; i < 14; i++) { const a = .2 + i * .19; F(E(4 + Math.cos(a) * 13, 6 + Math.sin(a) * 9, .8, .8), dk(sk, .45)); } g.restore();
  eyes(o, sk, [[2, -7, 5.6, 1], [13, -6, 2.8, -1]], '#d8b83a');
  if (o.mood !== 4 && o.blink >= .5) { L(SP('M-3,-8 l2,1 M-2.5,-4 l2,-1'), 'rgba(200,40,40,.6)', .9); }
  brows(o, [[2, -14.5, 11, 1], [13, -10.8, 7, -1]], hair, 3.6);
  V(E(17, 1, 6.5, 5.5), lt(sk, .05), 16, 0, 7, 2); F(E(20, 3, 1.3, 1), sk2); V(E(15, -2.6, 1.6, 1.6), dk(sk, .2), 15, -3, 2, 1);
  mouth(o, 7, 10, 16);
  for (const [x, h, a] of [[1, 5, -.25], [6.5, 3.6, .2], [12, 5.6, -.1]]) { g.save(); g.translate(x, 12.4); g.rotate(a); V(SP(`M-1.8,0 L-1.4,${-h} L1.4,${-h + 1} L1.8,0Z`), '#e6dbb0', 0, -h / 2, 3, 1.2); g.restore(); }
  if (o.mood === 0 || o.mood === 1) V(SP('M9,7.4 L11.6,7.4 L11,11 L9.6,11Z'), '#e6dbb0', 10, 9, 2, 1);
  g.restore();
  const h = arm(16, -84, 17, 16, 10.5, .95 - 1.9 * u, -.4, sk);
  atHand(h, -.55, () => { V(SP('M-4,6 L-3.6,-20 Q-12,-28 -11,-46 Q-2,-58 9,-48 Q12,-30 3.6,-20 L4,6Z'), '#8a5a30', 0, -28, 26);
    L(SP('M-6,-28 Q0,-34 6,-30 M-7,-40 Q-1,-45 7,-42'), dk('#8a5a30', .45), 1.4);
    for (const [x, y, a] of [[-10, -34, -1.5], [9, -38, 1.5], [-6, -48, -.7], [5, -50, .6], [10, -28, 1.6]]) { g.save(); g.translate(x, y); g.rotate(a); V(PL([-1.6, 0, 0, -6, 1.6, 0]), '#c9ccd6', 0, -3, 4, 1.2); g.restore(); } });
  V(E(h[0], h[1], 7.4, 7.4), sk, h[0], h[1], 8, 2);
  V(E(-1, -88, 10, 9), sk, -1, -88, 10, 2);
  g.restore();
};
