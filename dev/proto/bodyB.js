// ---------- corpi rifatti, lotto B ----------
function stregaB(o) {                                           // la Strega: vecchia, magrissima e gobba, naso e mento a uncino, dita lunghe, veste a brandelli, stivaletti a punta
  const dr = '#5b2f92', dr2 = '#7a45b8', sk = '#b8d49a', skd = dk(sk, .25), hair = '#2a1c3a', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 2.4), sw = Math.sin(o.ph) * (w ? 4 : 0) + Math.sin(o.t * 2.4) * 2;
  const boot = (x, off) => { const a = w ? Math.sin(o.ph + off) * 5 : 0; V(SP(`M${x - 4 + a},-4 L${x + 6 + a},-4 Q${x + 12 + a},-4 ${x + 13 + a},-9 Q${x + 12 + a},-1 ${x + 8 + a},0 L${x - 4 + a},0Z`), '#2a1a2a', x + 3 + a, -2, 7, 1.4); taper(x + a * .6, -18, x + a, -4, 2, 1.6, '#3a2a3a', 1.2); };
  boot(-4, Math.PI); boot(4, 0);
  g.save(); g.translate(0, b); g.rotate(.26 + (w ? .06 : 0) + (u > 0 ? -.08 * u : .12 * -u));
  const hs = Math.sin(o.t * 2) * 4; V(SP(`M-6,-76 Q-22,-66 ${-30 + hs},-48 Q${-34 + hs},-34 ${-24 + hs * 1.4},-26 Q-14,-44 -4,-56Z`), hair, -18, -50, 22);
  const robe = SP(`M-6,-74 Q4,-80 10,-70 Q12,-50 14,-34 Q18,-20 ${20 + sw},-14 L${16 + sw},-10 L${12 + sw},-16 L${8 + sw},-8 L${2 + sw},-15 L${-4 + sw},-8 L${-8 + sw},-15 L${-14 + sw},-10 Q-14,-30 -12,-44 Q-10,-62 -6,-74Z`); V(robe, dr, 2, -42, 34);
  g.save(); g.clip(robe); F(SP(`M4,-60 Q12,-34 ${16 + sw},-14 L${8 + sw},-12 Q6,-34 0,-56Z`), dr2); V(SP('M-4,-60 L4,-60 L4,-52 L-4,-52Z'), '#8a5a8a', 0, -56, 4, 1); for (const [x, y] of [[-6, -30], [10, -26], [2, -44]]) F(SP(`M${x},${y - 3} L${x + 1},${y - 1} L${x + 3},${y} L${x + 1},${y + 1} L${x},${y + 3} L${x - 1},${y + 1} L${x - 3},${y} L${x - 1},${y - 1}Z`), '#f2d27a'); g.restore();
  F(SP('M-12,-46 Q2,-41 14,-46 L14,-42 Q2,-37 -12,-42Z'), '#f2b84a'); F(E(2, -42, 2.6, 3), '#7af0c0', '#7af0c0');
  limb(-4, -66, 2.1 - u * .4, 11, -.9 - u * .5, 10, 2.6, 2, 1.6, dk(dr, .2));
  g.save(); g.translate(10, -84); g.rotate(-.18 + Math.sin(o.t * 1.5) * .05 + (o.mood === 3 ? -.12 : o.mood === 4 ? .2 : 0)); g.scale(1.18, 1.18);
  const face = SP('M-7,-6 Q-7,-13 1,-13 Q8,-13 9,-6 Q10,0 9,4 Q12,8 13,12 Q8,11 5,9 Q0,10 -3,7 Q-7,2 -7,-6Z'); V(face, sk, 1, -1, 11);
  V(SP('M4,-4 Q14,-2 16,6 Q14,6 11,4 Q8,2 6,1Z'), lt(sk, .05), 10, 2, 6, 1.6); V(E(13, 3, 1.4, 1.4), skd, 13, 3, 1.4, .8); V(E(-2, 2, 1.2, 1.2), skd, -2, 2, 1.2, .6);
  eyesX(o, sk, [[0, -4, 2.8, 1], [6, -4.4, 2.2, -1]], 'wide', '#c9f060'); browsX(o, [[0, -8.4, 5.4, 1], [6, -8.2, 4, -1]], hair, 1.8, 'arch');
  mouthX(o, 3, 6.4, 6, 'gap', { lips: '#5a1a3a' });
  V(SP('M-9,-4 Q-12,6 -8,14 Q-5,4 -6,-4Z'), hair, -8, 4, 7, 1.6);
  V(SP('M-22,-5 Q0,-13 22,-6 Q24,-2 20,0 Q0,-6 -20,1 Q-25,-1 -22,-5Z'), dk(dr, .25), 0, -5, 22);
  const tw = Math.sin(o.t * 2.2) * 3; V(SP(`M-10,-7 Q-6,-26 2,-36 Q${8 + tw},-44 ${-4 + tw * 1.6},-50 Q${12 + tw},-50 12,-38 Q13,-22 11,-8 Q0,-11 -10,-7Z`), dr, 1, -24, 24);
  F(SP('M-10,-9 Q0,-13 11,-10 L11.4,-15 Q0,-18 -8.6,-14Z'), '#f2b84a'); F(SP('M-1,-17.4 L4,-17.4 L4,-11.8 L-1,-11.8Z'), '#fff3d0');
  g.restore();
  const h = limb(8, -66, .45 - 1.4 * u, 11, -.4, 10, 2.6, 2, 1.6, dr);
  g.save(); g.translate(h[0], h[1]); g.rotate(.14 + u * .55 + Math.sin(o.t * 2) * .04);
  const st = SP('M-1.4,36 Q1,10 -1,-10 Q-3,-24 1,-34 L2.6,-34 Q-.4,-22 1.4,-10 Q3,10 1.4,36Z'); V(st, '#6a4426', 0, 0, 20, 1.6);
  const pulse = 1 + Math.sin(o.t * 5) * .12 + Math.max(0, u) * .7; glowB(1, -40, 18 * pulse, 'rgba(190,120,255,.75)'); V(E(1, -40, 5.4, 5.4), '#d9a8ff', 1, -40, 6, 1.4); F(E(-.6, -42, 1.6, 1.6), '#fff');
  for (const a of [-1, 1]) L(SP(`M1,-35 Q${1 + a * 6},-38 ${1 + a * 5},-45`), '#6a4426', 1.6);
  g.restore();
  for (const a of [-.5, -.1, .3]) { g.save(); g.translate(h[0], h[1]); g.rotate(h[2] + a); taper(0, 0, 6, 0, 1.2, .8, sk, 1); g.restore(); } V(E(h[0], h[1], 2.6, 2.6), sk, h[0], h[1], 3, 1.2);
  g.restore();
}
function gattoB(o) {                                            // il Gatto: smilzo e svogliato, spalle cadenti, finto cieco con occhialoni e bastone, coda lunghissima
  const fur = '#5e5e70', fd = dk(fur, .28), coat = '#6a4a7a', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 2), sw = Math.sin(o.ph);
  const tl = SP(`M-6,-30 Q-24,-26 -26,${-44 + Math.sin(o.t * 2.4) * 5} Q-26,-58 -18,-60 Q-14,-60 -16,-56`); L(tl, dk(fur, .7), 6); L(tl, fur, 3.6);
  g.save(); g.translate(0, b); limb(-3, -50, 1.75 + sw * .3 * w, 10, -.2, 10, 3, 2.4, 2, dk(coat, .3)); g.restore();
  for (const [x, off, c] of [[-3, Math.PI, fd], [3, 0, fur]]) { const f = legB(x, -28, 13, 13, 3.4, 2.6, 2.2, o, off, c, .5); V(SP(`M${f[0] - 3},${f[1] - 3} Q${f[0] + 5},${f[1] - 5} ${f[0] + 8},${f[1]} L${f[0] - 3},${f[1]}Z`), '#2a2a34', f[0] + 2, f[1] - 1, 5, 1.4); }
  g.save(); g.translate(0, b); g.rotate(.2 + (w ? sw * .05 : 0) + (u > 0 ? -.06 * u : .12 * -u));
  const tor = SP('M-6,-54 Q2,-58 7,-52 Q10,-40 9,-28 L-9,-28 Q-10,-42 -6,-54Z'); V(tor, coat, 0, -42, 14);
  g.save(); g.clip(tor); V(SP('M1,-44 L8,-44 L8,-36 L1,-36Z'), '#8a6a3a', 4, -40, 4, 1.2); F(SP('M-9,-32 L9,-32 L9,-28 L-9,-28Z'), dk(coat, .3)); g.restore();
  V(SP('M-9,-30 L-6,-24 L-3,-29 L0,-23 L3,-29 L6,-24 L9,-29 L9,-28 L-9,-28Z'), dk(coat, .2), 0, -27, 9, 1.2);
  g.save(); g.translate(6, -63); g.rotate(.18 + Math.sin(o.t * 1.6) * .06 + (o.mood === 3 ? -.1 : o.mood === 4 ? .2 : 0) + (w ? sw * .04 : 0));
  V(PL([-8, -3, -10, -18, -2, -7]), dk(fur, .2), -6, -9, 6, 1.6);
  const hd = SP('M-9,0 Q-10,-9 0,-10 Q10,-9 11,-1 Q12,7 4,9 Q-6,9 -9,0Z'); V(hd, fur, 1, 0, 11); F(E(6, 4, 6, 3.6), lt(fur, .35));
  V(PL([2, -8, 7, -21, 10, -5]), fur, 6, -11, 6, 1.6); F(PL([4, -8, 7, -17, 8.6, -7]), '#e8a0b0');
  eyesX(o, fur, [[0, -2, 3, 1], [6.6, -2.2, 2.4, -1]], 'lidded', '#9ad040'); browsX(o, [[0, -7.4, 5.4, 1], [6.6, -7.4, 4.2, -1]], '#2a2a34', 1.6, 'arch');
  const gy = o.mood >= 2 ? 4 : 0; for (const [x, r] of [[0, 4], [7.2, 3.4]]) { V(E(x, -2 + gy, r, r), '#1c1a24', x, -2 + gy, r, 1.4); F(E(x - r * .35, -3 + gy, r * .3, r * .22), 'rgba(255,255,255,.6)'); } L(SP(`M4,${-2 + gy} L3.8,${-2 + gy}`), '#1c1a24', 1.4);
  V(E(10, 3, 1.6, 1.3), '#e86a8a', 10, 3, 1.6, .8); mouthX(o, 7, 6, 5.6, 'oh');
  for (const dy of [2, 4.5]) L(SP(`M11,${dy} l8,${dy - 4}`), 'rgba(255,255,255,.55)', .7);
  g.restore();
  const h = limb(5, -50, 1.1 - 1.7 * u, 10, -.5, 10, 3, 2.4, 2, coat);
  atHand(h, -1.4, () => { seg(0, 16, 0, -26, 2.2, '#6a4426'); L(SP('M0,-26 Q0,-33 -5,-33 Q-9,-32 -8,-28'), '#6a4426', 2.6); });
  V(E(h[0], h[1], 2.8, 2.8), fur, h[0], h[1], 3, 1.2);
  g.restore();
}
function volpeB(o) {                                            // la Volpe: impettita e saltellante, petto in fuori, frac blu con le code, coda enorme, sacco dell'oro
  const fur = '#d8742a', fd = dk(fur, .28), jk = '#3a5a8a', cr = '#f4efe6', u = o.u, w = o.walking ? 1 : 0, b = w ? -Math.abs(Math.sin(o.ph * 1.2)) * 5 : Math.sin(o.t * 3) * 1, sw = Math.sin(o.ph);
  g.save(); g.translate(-4, -34 + b); g.rotate(-.2 + Math.sin(o.t * 2.4) * .14 + (w ? Math.sin(o.ph) * .15 : 0));
  const tl = SP('M0,0 Q-14,8 -28,2 Q-38,-10 -30,-24 Q-22,-30 -14,-22 Q-14,-10 0,-6Z'); V(tl, fur, -16, -8, 18); g.save(); g.clip(tl); F(E(-28, -18, 8, 8), cr); g.restore(); g.restore();
  g.save(); g.translate(0, b); limb(-4, -56, 1.9 + sw * .5 * w, 10, -.6, 9, 3, 2.4, 2, dk(jk, .3)); g.restore();
  for (const [x, off, c] of [[-3, Math.PI, fd], [3, 0, fur]]) { const f = legB(x, -30, 14, 14, 3.4, 2.4, 2, o, off, c, .7); V(SP(`M${f[0] - 2},${f[1] - 3} L${f[0] + 7},${f[1] - 2} L${f[0] + 7},${f[1]} L${f[0] - 2},${f[1]}Z`), '#1c1a24', f[0] + 2, f[1] - 1, 5, 1.2); }
  g.save(); g.translate(0, b); g.rotate(-.06 + (w ? sw * .05 : 0) + (u > 0 ? -.08 * u : .12 * -u));
  V(SP('M-9,-36 L-6,-22 L-12,-18 L-12,-30Z'), dk(jk, .2), -10, -26, 5, 1.4);
  const tor = SP('M-9,-58 Q2,-64 10,-56 Q14,-46 10,-36 L-9,-34 Q-12,-46 -9,-58Z'); V(tor, jk, 0, -46, 14);
  F(SP('M0,-60 Q10,-52 8,-40 Q4,-36 0,-40 Q4,-50 0,-60Z'), cr); for (const y of [-52, -45, -38]) V(E(-3, y, 1.4, 1.4), '#f2c14e', -3, y, 1.4, .8);
  V(SP('M2,-58 L6,-56 L2,-52 L-2,-56Z'), '#c8302a', 2, -55, 3, 1);
  g.save(); g.translate(5, -70); g.rotate(-.12 + Math.sin(o.t * 2.2) * .05 + (o.mood === 3 ? -.12 : o.mood === 4 ? .2 : 0) + (w ? sw * .04 : 0));
  V(PL([-8, -3, -8, -23, 0, -8]), dk(fur, .2), -5, -10, 6, 1.6); F(PL([-8.4, -17, -8, -23, -4.6, -18]), '#1c1a24');
  const hd = SP('M-8,2 Q-10,-8 0,-9 Q10,-9 18,-2 Q25,1 24,4 Q14,7 4,7 Q-6,8 -8,2Z'); V(hd, fur, 6, 0, 14); F(SP('M2,3 Q12,4 23,4 Q20,7 14,8 Q6,9 2,6Z'), cr); V(E(24, 2.4, 2.4, 2), '#1c1a24', 24, 2, 2, 1);
  F(SP('M-8,2 Q-4,9 3,7 Q-2,2 -8,2Z'), cr);
  V(PL([2, -6, 8, -25, 11, -5]), fur, 7, -12, 6, 1.6); F(PL([6, -19, 8, -25, 9.6, -18]), '#1c1a24');
  eyesX(o, fur, [[1, -2, 3, 1], [7.6, -2.4, 2.4, -1]], 'almond', '#7ad04a'); browsX(o, [[1, -7, 5.6, 1], [7.6, -7, 4.4, -1]], dk(fur, .6), 1.8, 'arch');
  mouthX(o, 12, 6.4, 7, 'smirk');
  g.restore();
  const h = limb(6, -56, .75 - 1.9 * u, 10, -.5, 9, 3, 2.4, 2, jk);
  atHand(h, -.2, () => { V(E(0, 10, 8.6, 9.6), '#c8a050', 0, 10, 9); L(SP('M-4,1 Q0,4 4,1'), '#7a5530', 2); F(E(0, -1, 4, 2), '#7a5530'); F(E(-3, 12, 1.6, 1.6), '#f2d070'); F(E(3, 8, 1.2, 1.2), '#f2d070'); L(SP('M-3,10 l2,2 M2,14 l2,-1'), '#7a5530', .9); if (o.mood >= 2) F(E(6, 2, 2.6, 2.6), '#fff3a0', '#ffe060'); });
  V(E(h[0], h[1], 2.8, 2.8), fur, h[0], h[1], 3, 1.2);
  g.restore();
}
function spaventaB(o) {                                         // lo Spaventapasseri: infilato su un palo, braccia a croce rigide, gambe molli di stoffa, sacco per testa, corvo sul braccio
  const sack = '#d8c08a', sh = '#4a7ac0', pa = '#7a6a42', hat = '#5a4a3a', straw = '#f2d060', u = o.u, w = o.walking ? 1 : 0, hop = w ? -Math.abs(Math.sin(o.ph * .8)) * 9 : Math.sin(o.t * 1.6) * 1, sw = Math.sin(o.ph * .8);
  const tuft = (x, y, a, n = 4) => { for (let i = 0; i < n; i++) { const aa = a + (i - n / 2) * .3; L(SP(`M${x},${y} l${Math.cos(aa) * 7},${Math.sin(aa) * 7}`), straw, 1.4); } };
  V(SP(`M-2,${hop - 40} L2,${hop - 40} L2.4,${Math.min(0, hop + 2)} L-2.4,${Math.min(0, hop + 2)}Z`), '#8a6a3a', 0, -20, 4, 1.4);
  g.save(); g.translate(0, hop); g.rotate((w ? sw * .1 : Math.sin(o.t * 1.4) * .04) + (u > 0 ? -.08 * u : .14 * -u));
  for (const [x, ph, c] of [[-5, 0, dk(pa, .25)], [5, 1.7, pa]]) { const fl = SP(`M${x - 3},-40 Q${x - 4 + Math.sin(o.t * 4 + ph) * 3},-26 ${x - 2 + Math.sin(o.t * 4 + ph + 1) * 5},-12 L${x + 4 + Math.sin(o.t * 4 + ph + 1) * 5},-12 Q${x + 4 + Math.sin(o.t * 4 + ph) * 3},-26 ${x + 3},-40Z`); V(fl, c, x, -26, 8, 1.6); tuft(x + 1 + Math.sin(o.t * 4 + ph + 1) * 5, -12, 1.6, 3); }
  const hb = [-30, -70 + Math.sin(o.t * 2) * 2]; taper(-2, -70, hb[0], hb[1], 4, 3.6, dk(sh, .3)); tuft(hb[0], hb[1], Math.PI, 5);
  g.save(); g.translate(-24, hb[1] - 4); g.scale(.74, .74); crowD(Object.assign({}, o, { mood: Math.sin(o.t * .9) > .85 ? 3 : 0, u: 0, atk: -1 }), { perch: 1 }); g.restore();
  const tor = SP('M-12,-76 Q0,-80 12,-76 L16,-40 Q8,-36 4,-42 Q0,-36 -4,-42 Q-8,-36 -16,-40Z'); V(tor, sh, 0, -58, 22);
  g.save(); g.clip(tor); for (const x of [-10, -4, 2, 8, 14]) L(SP(`M${x},-80 L${x - 1},-34`), 'rgba(200,40,40,.35)', 2); for (const y of [-70, -60, -50]) L(SP(`M-16,${y} L16,${y}`), 'rgba(200,40,40,.3)', 2);
  V(SP('M-9,-54 L-1,-54 L-1,-46 L-9,-46Z'), '#c86a3a', -5, -50, 5, 1.2); L(SP('M-9,-54 l1,1 M-1,-54 l-1,1 M-9,-46 l1,-1 M-1,-46 l-1,-1'), INK, .8); V(SP('M5,-70 L11,-70 L11,-64 L5,-64Z'), '#6aa044', 8, -67, 4, 1.2); g.restore();
  L(SP('M-15,-44 L15,-44'), '#7a5530', 3); tuft(-14, -42, 2, 3); tuft(14, -42, 1, 3); tuft(0, -78, -1.6, 5);
  g.save(); g.translate(3, -88); g.rotate(-.18 + Math.sin(o.t * 1.6) * .1 + (o.mood === 3 ? -.1 : o.mood === 4 ? .24 : 0) + (w ? sw * .1 : 0)); g.scale(1.2, 1.2);
  const hd = SP('M-10,-2 Q-11,-14 1,-15 Q12,-14 12,-2 Q13,9 2,11 Q-10,10 -10,-2Z'); V(hd, sack, 1, -2, 13);
  g.save(); g.clip(hd); for (let i = 0; i < 9; i++) L(SP(`M${-10 + i * 3},-15 l0,26`), 'rgba(120,90,40,.18)', .8); g.restore();
  for (const [x, y, r] of [[-1, -3, 3.4], [6.6, -3.4, 2.8]]) { V(E(x, y, r, r), '#2a2a3a', x, y, r, 1.2); for (const [dx, dy] of [[-.8, -.8], [.8, -.8], [-.8, .8], [.8, .8]]) F(E(x + dx * r * .4, y + dy * r * .4, .5, .5), '#8a8aa0'); if (o.mood === 4) L(SP(`M${x - r},${y - r} L${x + r},${y + r}`), INK, 1.2); }
  browsX(o, [[-1, -8.6, 6, 1], [6.6, -8.4, 4.8, -1]], '#3a2a1a', 1.8, 'thick');
  V(PL([3, 0, 11, 3, 3, 4]), '#e8842a', 6, 2, 4, 1.2);
  mouthX(o, 3, 7, 10, 'gap'); for (const x of [-1, 2, 5, 8]) L(SP(`M${x},5 l0,4`), '#3a2a1a', 1);
  tuft(-10, 2, 2.4, 3); tuft(11, 2, .8, 3);
  V(SP('M-18,-9 Q0,-16 19,-8 Q21,-4 16,-4 Q0,-9 -16,-3 Q-21,-4 -18,-9Z'), hat, 0, -7, 18);
  V(SP(`M-9,-11 Q-7,-24 2,-26 Q${10 + Math.sin(o.t * 2) * 2},-28 11,-11 Q0,-14 -9,-11Z`), hat, 1, -18, 11); F(SP('M-8,-12 Q1,-15 10.6,-12 L10.8,-14.6 Q1,-17 -8.4,-14.6Z'), '#c8302a');
  V(SP('M2,-24 L7,-24 L7,-19 L2,-19Z'), '#6aa0d0', 4, -21, 3, 1);
  g.restore();
  const fa = u > 0 ? -1.4 * u : u < 0 ? .6 * -u : Math.sin(o.t * 2 + 1) * .06, h = [2 + Math.cos(fa) * 28, -70 + Math.sin(fa) * 28]; taper(2, -70, h[0], h[1], 4, 3.6, sh); tuft(h[0], h[1], fa, 3);
  atHand([h[0], h[1], fa], -.5, () => { seg(0, 8, 0, -16, 2.4, '#6a4426'); V(SP('M0,-16 Q16,-22 20,-8 Q14,-16 2,-12Z'), '#b8bcc8', 10, -14, 9, 1.6); F(E(12, -16, 1.4, 1), '#a8603a'); });
  g.restore();
}
function retopiB(o) {                                           // il Re dei Topi: grasso a pera, gambette corte, tre teste coronate su tre colli, mantello con l'ermellino, spadino
  const fur = '#9a92aa', fd = dk(fur, .28), u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3), sw = Math.sin(o.ph) * (w ? 4 : 0);
  const tl = SP(`M-10,-24 Q-28,-18 -32,${-4 + Math.sin(o.t * 3) * 4} Q-36,8 -26,8`); L(tl, dk('#e8a0b0', .5), 4.4); L(tl, '#e8a0b0', 2.4);
  g.save(); g.translate(0, b);
  const cape = SP(`M-12,-66 Q-30,-40 ${-30 + sw},-6 L${12 + sw * .5},-10 Q10,-40 12,-66Z`); V(cape, '#a8283a', -8, -38, 32);
  L(SP(`M-12,-66 Q-30,-40 ${-30 + sw},-6`), '#f4f0ea', 5); for (let i = 0; i < 5; i++) F(E(-17 - i * 2.6 + sw * i / 5, -58 + i * 12, 1, 1.6), INK);
  limb(-12, -52, 1.7 + Math.sin(o.ph) * .5 * w, 9, -.5, 8, 4, 3, 2.6, fd);
  g.restore();
  for (const [x, off, c] of [[-6, Math.PI, fd], [6, 0, fur]]) { const f = legB(x, -18, 8, 8, 5, 3.6, 3, o, off, c, .7); V(E(f[0] + 3, f[1], 5, 2.4), '#e8a0b0', f[0], f[1], 4, 1.2); }
  g.save(); g.translate(0, b); g.rotate(.04 + w * .07 + (u > 0 ? -.08 * u : .12 * -u));
  const bd = SP('M-10,-66 Q0,-72 10,-66 Q20,-44 18,-26 Q10,-16 0,-16 Q-12,-16 -18,-26 Q-20,-44 -10,-66Z'); V(bd, fur, 0, -40, 26);
  g.save(); g.clip(bd); F(E(4, -32, 12, 14), lt(fur, .35)); g.restore();
  L(SP('M-12,-58 L14,-30'), '#f2c14e', 3.6); V(E(4, -44, 3, 3), '#e8384a', 4, -44, 3, 1);
  const necks = [[-12, -70, -16, -82, .84, 1], [12, -72, 18, -82, .86, 2], [0, -68, 3, -90, 1, 0]];
  for (const [x, y, hx, hy, s2, v] of necks) { taper(x * .4, -62, hx, hy + 4, 5, 3.4, fur); }
  for (const [, , hx, hy, s2, v] of necks) { g.save(); g.translate(hx, hy); g.rotate(Math.sin(o.t * 2 + v * 2) * .12 + (o.mood === 4 ? .2 : 0) + (v === 1 ? -.2 : v === 2 ? .15 : 0)); ratHead(Object.assign({}, o, { blink: (o.t * 3 + v) % 4 < .15 ? .1 : o.blink, mood: v === 1 && o.mood === 0 ? 1 : o.mood }), s2, 1); g.restore(); }
  const h = limb(12, -52, .3 - 1.2 * u, 9, -.3 + u * .3, 8, 4, 3, 2.6, fur);
  atHand(h, -.15 + (o.u < 0 ? .5 : 0), () => { V(SP('M-5,-1 Q0,-5 5,-1 L4,1 Q0,-2 -4,1Z'), '#f2c14e', 0, -1, 4, 1); seg(0, -2, 0, -28, 1.6, '#dfe6f2'); F(E(0, 2, 1.8, 1.8), '#f2c14e'); });
  V(E(h[0], h[1], 3, 3), fur, h[0], h[1], 3, 1.2);
  g.restore();
}
function ladroneB(o, v, capo) {                                 // i Ladroni: il Capo grosso e panciuto, i ladruncoli secchi, curvi, in punta di piedi
  const sk = '#c8946a', skd = dk(sk, .25), tur = ['#e8e0d0', '#d8443a', '#3a8ac8', '#e8b440'][v], vest = capo ? '#7a1a2a' : ['#4a3a6a', '#3a6a4a', '#6a4a2a', '#4a3a6a'][v], pant = capo ? '#f2e8d0' : '#e8d8b0';
  const u = o.u, w = o.walking ? 1 : 0, sw = Math.sin(o.ph * (capo ? 1 : 1.3)), b = capo ? bobOf(o, 3.6) : (w ? -Math.abs(sw) * 5 : Math.sin(o.t * 3 + v) * 1), K = capo ? 1.15 : .9;
  g.save(); g.translate(0, b); limb(-7 * K, -52 * K, 1.7 + sw * .5 * w, 9 * K, -.5, 8 * K, 4 * K, 3 * K, 2.6 * K, skd);
  if (!capo) { const bx = -14, by = -40; V(E(bx, by, 8, 9), '#b8946a', bx, by, 9, 1.6); L(SP(`M${bx - 3},${by - 8} Q${bx},${by - 5} ${bx + 3},${by - 8}`), '#6a4a2a', 1.6); F(E(bx + 2, by + 2, 1.6, 1.6), '#f2d070'); } g.restore();
  for (const [x, off, c] of [[-4, Math.PI, dk(pant, .2)], [4, 0, pant]]) { const p2 = o.ph * (capo ? 1 : 1.3) + off, a = w ? Math.sin(p2) * .6 : 0, kx = x + Math.sin(a) * 7, up = w ? Math.max(0, Math.cos(p2)) * 4 : 0;
    V(E(kx, -18 * K, 7 * K, 9 * K), c, kx, -18 * K, 8, 1.8); taper(kx, -11 * K, kx + 2, -2 - up, 2.6 * K, 2 * K, skd); V(SP(`M${kx - 2},${-3 - up} L${kx + 7},${-4 - up} Q${kx + 10},${-6 - up} ${kx + 9},${-9 - up} Q${kx + 10},${-1 - up} ${kx + 5},${-up} L${kx - 2},${-up}Z`), '#3a2a1a', kx + 3, -2 - up, 5, 1.2); }
  g.save(); g.translate(0, b); g.rotate((capo ? .02 : .3) + w * .06 + (u > 0 ? -.1 * u : .14 * -u)); g.scale(K, K);
  const bd = capo ? SP('M-11,-56 Q0,-60 11,-56 Q18,-40 14,-28 Q0,-22 -14,-28 Q-18,-40 -11,-56Z') : SP('M-8,-54 Q0,-58 8,-54 Q10,-40 8,-30 Q0,-26 -8,-30 Q-10,-40 -8,-54Z'); V(bd, sk, 0, -42, 16);
  V(SP('M-11,-56 Q-6,-58 -3,-56 L-5,-28 L-12,-30 Q-15,-42 -11,-56Z'), vest, -8, -42, 12, 1.6); V(SP('M11,-56 Q6,-58 3,-56 L5,-28 L12,-30 Q15,-42 11,-56Z'), vest, 8, -42, 12, 1.6);
  F(SP(capo ? 'M-15,-32 L15,-32 L15,-26 L-15,-26Z' : 'M-9,-32 L9,-32 L9,-28 L-9,-28Z'), capo ? '#f2c14e' : '#c8302a');
  g.save(); g.translate(2, -64); g.rotate((capo ? 0 : -.2) + Math.sin(o.t * 2.2 + v) * .06 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0) + (w ? sw * .05 : 0));
  const hd = capo ? SP('M-10,-2 Q-10,-11 0,-11 Q11,-11 11,-1 Q12,8 4,11 Q-8,11 -10,-2Z') : SP('M-8,-1 Q-8,-9 1,-9 Q9,-8 9,0 Q9,6 6,9 Q2,11 -2,9 Q-8,6 -8,-1Z'); V(hd, sk, 0, 0, 10);
  eyesX(o, sk, [[-1, -1, 2.8, 1], [5.4, -1.2, 2.3, -1]], capo ? 'lidded' : ['beady', 'almond', 'wide', 'beady'][v], '#3a2010'); browsX(o, [[-1, -5.4, 5.4, 1], [5.4, -5.2, 4.4, -1]], '#1a1010', capo ? 2.8 : 2, capo ? 'thick' : 'arch');
  V(capo ? E(7, 2, 3, 2.6) : SP('M5,-1 Q12,1 10,4 Q7,4 5,3Z'), skd, 7, 2, 2, 1);
  if (capo) { V(SP('M-3,5 Q4,2 11,5 Q16,9 14,12 Q9,7 4,8 Q-1,7 -6,12 Q-8,8 -3,5Z'), '#1a1010', 4, 7, 9, 1.4); mouthX(o, 4, 9.4, 5, 'frown'); F(E(-6, 4, 2, 2.4), 'rgba(0,0,0,.12)'); }
  else { mouthX(o, 3, 6, 5, ['gap', 'snarl', 'grin', 'smirk'][v]); F(E(-2, 3, 3, 2), 'rgba(20,10,10,.15)'); }
  V(SP('M-10,-1 Q-12,-14 0,-15 Q12,-14 11,-1 Q0,-6 -10,-1Z'), tur, 0, -8, 12); L(SP('M-9,-6 Q1,-11 11,-5'), dk(tur, .3), 1.2);
  if (capo) { V(E(1, -9, 2.6, 3), '#3ac0a8', 1, -9, 3, 1); V(SP('M1,-11 Q-3,-22 3,-26 Q2,-18 3,-11Z'), '#f4f0ea', 2, -18, 5, 1.2); } else V(SP(`M-9,-3 Q-16,${2 + Math.sin(o.t * 4) * 2} -14,${8 + Math.sin(o.t * 4)} L-10,2Z`), tur, -12, 2, 4, 1.2);
  g.restore(); g.restore();
  const h = limb(7 * K, -52 * K, .8 - 2 * u, 9 * K, -.5, 8 * K, 4 * K, 3 * K, 2.6 * K, sk);
  atHand(h, -.9, () => { g.scale(K, K); V(SP('M-4,0 L4,0 L4,3 L-4,3Z'), '#f2c14e', 0, 1, 4, 1); seg(0, 3, 0, 8, 2, '#5a3a20'); V(SP('M-2,0 Q-3,-14 2,-24 Q10,-30 12,-26 Q5,-22 4,-12 L2,0Z'), '#dfe6f2', 3, -14, 14, 1.6); });
  V(E(h[0], h[1], 3 * K, 3 * K), sk, h[0], h[1], 3, 1.2);
}
function stregoneB(o) {                                         // lo Stregone di Aladino: altissimo e secco, spalline a punta, viso lungo, barba a punta, lampada che brilla
  const tu = '#2a1e3a', tu2 = '#8a1a2a', sk = '#c8a088', gold = '#f2c14e', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 2), sw = Math.sin(o.ph) * (w ? 4 : 0) + Math.sin(o.t * 2) * 1.6;
  g.save(); g.translate(0, b);
  for (const x of [-4, 6]) V(SP(`M${x - 2},0 L${x + 8},0 Q${x + 12},-3 ${x + 9},-7 Q${x + 9},-3 ${x + 6},-4 L${x},-4Z`), '#1a1420', x + 3, -2, 5, 1.4);
  const cape = SP(`M-10,-96 Q-26,-50 ${-24 + sw * 1.4},-3 L${-4 + sw},-3 Q-6,-50 -4,-96Z`); V(cape, tu2, -14, -50, 24);
  const robe = SP(`M-7,-94 Q-10,-50 ${-16 + sw},-3 L${16 + sw},-3 Q10,-50 7,-94Z`); V(robe, tu, 0, -48, 30);
  g.save(); g.clip(robe); F(SP(`M-2,-94 L2,-94 L${7 + sw},-3 L${-5 + sw},-3Z`), tu2); L(SP(`M${-16 + sw},-8 L${16 + sw},-8`), gold, 2); for (let y = -80; y < -10; y += 14) F(E(sw * (y + 94) / 94 * .3, y, 1.4, 1.4), gold); g.restore();
  limb(-6, -88, 1.65 + Math.sin(o.t * 1.6) * .06, 13, -.5, 12, 3, 2.4, 2, dk(tu, .2));
  for (const sx of [-1, 1]) V(SP(`M${sx * 4},-90 Q${sx * 18},-96 ${sx * 20},-112 Q${sx * 12},-104 ${sx * 3},-98Z`), tu2, sx * 12, -100, 10, 1.6);
  F(SP('M-6,-66 L6,-66 L6,-62 L-6,-62Z'), gold);
  g.save(); g.translate(2, -108); g.rotate(Math.sin(o.t * 1.5) * .04 + (o.mood === 3 ? -.1 : o.mood === 4 ? .22 : 0) + (w ? Math.sin(o.ph) * .03 : 0)); g.scale(1.12, 1.12);
  const face = SP('M-6,-6 Q-7,-14 1,-14 Q8,-14 8,-6 Q9,4 6,10 Q3,14 1,14 Q-3,13 -5,8 Q-7,2 -6,-6Z'); V(face, sk, 1, -1, 11);
  V(SP(`M-2,8 Q3,12 7,8 Q7,${20 + Math.sin(o.t * 3)} ${3 + Math.sin(o.t * 2)},30 Q0,18 -2,8Z`), '#14101a', 2, 16, 7, 1.6);
  eyesX(o, sk, [[0, -3, 2.6, 1], [5.8, -3.2, 2.2, -1]], 'lidded', '#e8c03a'); browsX(o, [[0, -7.4, 5.6, 1], [5.8, -7.2, 4.6, -1]], '#14101a', 2.2, 'arch');
  F(E(0, -4.4, 3.2, 1.4), 'rgba(80,20,60,.35)'); V(PL([5, -3, 11, 4, 5, 4]), sk, 7, 1, 4, 1.2);
  L(SP('M0,6 Q3,4 7,6'), '#14101a', 1.8); mouthX(o, 3.6, 6.6, 5, 'smirk');
  V(SP('M-9,-6 Q-11,-18 -2,-22 Q10,-24 12,-12 Q13,-6 9,-5 Q0,-9 -9,-6Z'), tu2, 1, -13, 13); L(SP('M-7,-9 Q2,-14 11,-9 M-7,-14 Q2,-19 11,-14'), dk(tu2, .35), 1.2);
  V(E(2, -11, 2.6, 3.2), '#e83a5a', 2, -11, 3, 1.2); V(SP('M2,-14 Q-2,-28 6,-34 Q4,-24 4,-14Z'), '#2a1e3a', 3, -24, 6, 1.4);
  g.restore();
  const h = limb(6, -88, .4 - 1.4 * u, 13, -.4, 12, 3, 2.4, 2, tu);
  g.save(); g.translate(h[0] + 3, h[1] - 1);
  V(SP('M-7,0 Q-6,-6 2,-6 Q8,-6 10,-2 L18,-6 Q16,-2 12,2 Q4,5 -4,4 Q-8,3 -7,0Z'), gold, 3, -1, 10, 1.6); V(E(0, -7, 3, 1.8), gold, 0, -7, 3, 1.2);
  if (u > 0 || o.mood === 3) { const k = Math.max(u, o.mood === 3 ? .8 : 0); glowB(18, -10, 16 * k + 4, 'rgba(120,220,255,.7)'); for (let i = 0; i < 3; i++) { const t2 = (o.t * 1.4 + i / 3) % 1; g.save(); g.globalAlpha = (1 - t2) * k; F(E(18 + Math.sin(t2 * 8) * 3, -8 - t2 * 22, 2 + t2 * 3, 2 + t2 * 3), '#a0e8ff'); g.restore(); } }
  g.restore(); V(E(h[0], h[1], 2.6, 2.6), sk, h[0], h[1], 3, 1.2);
  g.restore();
}
function mummiaB(o) {                                           // la Mummia: rigida e un po' curva, braccia tese, passi strascicati, strisce di benda che pendono e svolazzano
  const bd = '#e8dcc0', sh = dk(bd, .25), u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 1.6), sw = Math.sin(o.ph);
  const wrapL = (x1, y1, x2, y2, w1, w2, col) => { const p = taper(x1, y1, x2, y2, w1, w2, col); g.save(); g.clip(p); const n = Math.hypot(x2 - x1, y2 - y1) / 4; for (let i = 0; i < n; i++) { const k = i / n, x = x1 + (x2 - x1) * k, y = y1 + (y2 - y1) * k; L(SP(`M${x - 8},${y - 3} L${x + 8},${y + 3}`), sh, .9); } g.restore(); };
  const reach = -.15 - u * .7 + Math.sin(o.t * 1.8) * .05;
  g.save(); g.translate(0, b); const e1 = [-4 + Math.cos(reach - .06) * 13, -68 + Math.sin(reach - .06) * 13]; wrapL(-4, -68, e1[0], e1[1], 4, 3.4, sh); const h1 = [e1[0] + Math.cos(reach) * 12, e1[1] + Math.sin(reach) * 12]; wrapL(e1[0], e1[1], h1[0], h1[1], 3.4, 2.8, sh); g.restore();
  for (const [x, off, c, a0] of [[-5, Math.PI, sh, .25], [5, 0, bd, .4]]) { const p2 = o.ph + off, a = w ? Math.sin(p2) * a0 : 0, kx = x + Math.sin(a) * 18, ky = -20, fx = kx + Math.sin(a - .05) * 18, fy = 0; wrapL(x, -38, kx, ky, 5.4, 4.2, c); wrapL(kx, ky, fx, fy - 2, 4.2, 3.6, c); V(E(fx + 3, fy - 1, 5.4, 2.6), c, fx, fy, 5, 1.4); }
  g.save(); g.translate(0, b); g.rotate(.14 + w * .06 + Math.sin(o.ph * .5) * .04 * w + (u > 0 ? -.06 * u : .12 * -u));
  for (const [x, y, ph] of [[-10, -46, 0], [8, -40, 1.6], [-4, -38, 3]]) { const s2 = Math.sin(o.t * 4 + ph) * 4; V(SP(`M${x - 2},${y} Q${x - 4 + s2},${y + 8} ${x - 2 + s2 * 1.4},${y + 16} L${x + 2 + s2 * 1.4},${y + 15} Q${x + s2},${y + 8} ${x + 2},${y}Z`), bd, x, y + 8, 4, 1.2); }
  const tor = SP('M-12,-74 Q0,-80 12,-74 Q14,-56 10,-38 Q0,-34 -10,-38 Q-14,-56 -12,-74Z'); V(tor, bd, 0, -56, 20);
  g.save(); g.clip(tor); for (let i = -6; i < 9; i++) L(SP(`M-14,${-56 + i * 4.4 - 6} L14,${-56 + i * 4.4 + 6}`), sh, 1); F(E(4, -64, 3, 2), 'rgba(80,60,40,.3)'); F(E(-4, -48, 2.6, 1.6), 'rgba(80,60,40,.3)'); g.restore();
  const fl = SP(`M-8,-60 Q-22,${-56 + Math.sin(o.t * 4) * 5} -32,${-60 + Math.sin(o.t * 4 + 1) * 7} L-32,${-55 + Math.sin(o.t * 4 + 1) * 7} Q-22,${-51 + Math.sin(o.t * 4) * 5} -8,-56Z`); V(fl, bd, -20, -58, 12, 1.4);
  g.save(); g.translate(3, -86); g.rotate(.1 + Math.sin(o.t * 1.4) * .06 + (o.mood === 3 ? -.12 : o.mood === 4 ? .24 : 0) + (w ? sw * .05 : 0)); g.scale(1.1, 1.1);
  const hd = SP('M-9,-4 Q-9,-13 1,-13 Q10,-13 10,-3 Q10,7 4,10 Q-4,11 -8,6 Q-10,2 -9,-4Z'); V(hd, bd, 1, -1, 12); g.save(); g.clip(hd); for (let i = -4; i < 6; i++) L(SP(`M-10,${i * 3.6 - 4} L11,${i * 3.6 + 2}`), sh, 1); g.restore();
  const a = o.mood === 0 ? 0 : o.mood === 4 ? -.4 : .5;
  F(SP(`M-8,${-5 + a * 2} Q2,-7 10,${-5 - a * 2} L10,${-1 - a} Q2,0 -8,${-1 + a}Z`), '#2a1a20');
  if (o.mood !== 4 && o.blink > .5) for (const [x, r] of [[-1, 1.8], [6, 1.4]]) { glowB(x, -3, 8, 'rgba(190,255,90,.6)'); F(E(x, -3, r, r), '#d8ff7a'); } else L(SP('M-3,-3 l3,1 M5,-3 l3,1'), '#d8ff7a', 1.2);
  const mo = o.mood === 3 ? 4.4 : o.mood === 2 ? 1 : 1.4 + Math.sin(o.t * 2) * .6; F(E(4, 5, 3.6, mo), '#2a1a20');
  V(SP(`M8,-10 Q14,${-8 + Math.sin(o.t * 5) * 2} 16,${-2 + Math.sin(o.t * 5) * 3} L13,-4Z`), bd, 12, -6, 4, 1.2);
  g.restore();
  const e2 = [8 + Math.cos(reach) * 13, -68 + Math.sin(reach) * 13]; wrapL(8, -68, e2[0], e2[1], 4.4, 3.6, bd); const h2 = [e2[0] + Math.cos(reach + .06) * 12, e2[1] + Math.sin(reach + .06) * 12]; wrapL(e2[0], e2[1], h2[0], h2[1], 3.6, 3, bd);
  for (const t of [-.35, 0, .35]) { g.save(); g.translate(h2[0], h2[1]); g.rotate(reach + t); taper(0, 0, 7, 0, 1.4, 1, bd, 1); g.restore(); }
  L(SP(`M${h2[0] - 6},${h2[1] + 2} q-4,${8 + Math.sin(o.t * 5) * 3} 2,14`), bd, 3);
  g.restore();
}
Object.assign(DRAW, { strega: stregaB, spaventapasseri: spaventaB, retopi: retopiB, stregone: stregoneB, mummia: mummiaB,
  gattovolpe(o) { g.save(); g.translate(22, 0); volpeB(o); g.restore(); g.save(); g.translate(-24, 0); gattoB(Object.assign({}, o, { t: o.t + 1.1, ph: o.ph + 1 })); g.restore(); },
  ladroni(o) { for (const [ox, oy, s2, v] of [[-36, -2, .9, 1], [36, 2, .9, 2], [-14, 4, .92, 3]]) { g.save(); g.translate(ox, oy); g.scale(s2, s2); ladroneB(Object.assign({}, o, { t: o.t + v * 1.3, ph: o.ph + v }), v, 0); g.restore(); } g.save(); g.translate(14, 0); ladroneB(o, 0, 1); g.restore(); } });
