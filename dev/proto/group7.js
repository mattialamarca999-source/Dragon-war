// ---------- gruppo 7 ----------
const clawsAt = (h, col, n = 3, l = 9) => { for (let i = 0; i < n; i++) { const a = (i - (n - 1) / 2) * .45; g.save(); g.translate(h[0], h[1]); g.rotate(h[2] + a); const c = PL([2, -1.8, l, 0, 2, 1.8]); F(c, '#fffdf4'); L(c, INK, .8); g.restore(); } V(E(h[0], h[1], 4.6, 4.2), col, h[0], h[1], 4.6, 1.6); };
function mannaroD(o) {                                          // Lupo Mannaro: bestione gobbo, spalle enormi, criniera ispida, pantaloni strappati, artigli, bava, occhi gialli accesi
  const fur = '#5a5260', fd = dk(fur, .3), bel = '#a8a0a0', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 4), sw = Math.sin(o.ph);
  g.save(); g.translate(-12, -52 + b); g.rotate(-.9 + Math.sin(o.t * 3) * .2); V(SP('M0,-4 Q-18,-16 -30,-8 Q-34,0 -26,4 Q-12,4 0,4Z'), fur, -14, -2, 14); g.restore();
  g.save(); g.translate(0, b); const hb = limb(-12, -88, 1.4 + sw * .6 * w + u * .5, 20, -.5, 18, 8, 5.6, 4.6, fd); clawsAt(hb, fd, 4, 11); g.restore();
  for (const [x, off, c] of [[-6, Math.PI, fd], [8, 0, fur]]) { const p2 = o.ph + off, a = w ? Math.sin(p2) * .6 : 0, kx = x + 10 + Math.sin(a) * 12, ky = -26, hx2 = kx - 10 + Math.sin(a) * 8, hy2 = -10, fx = hx2 + 3, fy = -(w ? Math.max(0, Math.cos(p2)) * 5 : 0);
    V(SP(`M${x - 8},-48 L${x + 8},-48 L${kx + 6},${ky + 4} L${kx - 2},${ky + 8} L${kx - 6},${ky}Z`), '#3a4a6a', x, -38, 10, 1.6); taper(kx - 2, ky + 4, hx2, hy2, 5, 3.4, c); taper(hx2, hy2, fx, fy, 3.4, 3, c); V(SP(`M${fx - 4},${fy - 3} Q${fx + 6},${fy - 6} ${fx + 12},${fy} L${fx - 4},${fy}Z`), c, fx + 3, fy - 1, 7, 1.6); for (const t of [6, 9, 12]) F(PL([fx + t, fy - 1, fx + t + 3, fy, fx + t, fy + 1]), '#fffdf4'); }
  g.save(); g.translate(0, b); g.rotate(.34 + w * .1 + (u > 0 ? -.1 * u : .16 * -u));
  const tor = SP('M-22,-90 Q0,-108 22,-92 Q26,-74 16,-58 Q8,-46 0,-44 Q-10,-44 -14,-54 Q-24,-70 -22,-90Z'); V(tor, fur, 0, -72, 32);
  g.save(); g.clip(tor); F(SP('M4,-90 Q20,-80 14,-56 Q6,-46 0,-50 Q10,-66 4,-90Z'), bel); L(SP('M2,-84 Q8,-78 4,-72 M6,-70 Q10,-64 6,-58'), dk(bel, .3), 1.4); g.restore();
  for (let i = 0; i < 7; i++) { const x = -20 + i * 5, y = -94 - Math.sin(i * .5) * 6; V(PL([x - 3, y + 4, x - 1, y - 8 - (i % 2) * 3, x + 3, y + 4]), fd, x, y - 2, 4, 1.2); }
  g.save(); g.translate(22, -96); g.rotate(-.1 + Math.sin(o.t * 2.2) * .05 + (o.mood === 3 ? -.22 : o.mood === 4 ? .22 : 0) + (w ? sw * .04 : 0)); g.scale(1.15, 1.15);
  V(PL([-8, -6, -8, -24, 0, -10]), fd, -5, -12, 8, 2); V(PL([0, -10, 6, -26, 10, -10]), fur, 5, -16, 8, 2); F(PL([3, -11, 6, -21, 8, -11]), '#a07a8a');
  V(SP('M-12,2 Q-14,-10 -2,-12 Q10,-12 12,-4 Q12,6 4,10 Q-6,12 -12,2Z'), fur, 0, -2, 13);
  const open = o.mood === 3 ? .7 : o.mood === 2 ? .3 : o.mood === 4 ? .3 : .12;
  g.save(); g.translate(8, 5); g.rotate(open); V(SP('M0,0 L24,1 Q21,7 8,7 Q0,6 0,0Z'), dk(fur, .12), 11, 3, 12, 2); for (const x of [5, 10, 15, 20]) F(PL([x, .5, x + 1.8, -4, x + 3.6, .5]), '#fffdf4'); g.restore();
  F(SP(`M8,5 L32,4 L${30 - open * 10},${7 + open * 18} L8,6Z`), '#5a1220'); if (open > .2) { L(SP(`M12,${6 + open * 8} q1,${6} 0,${10}`), 'rgba(220,240,255,.8)', 1.4); }
  V(SP('M4,-8 Q24,-9 33,-2 Q35,3 32,5 L8,6Z'), fur, 18, -1, 14);
  for (const x of [12, 17, 22, 27]) F(PL([x, 5, x + 1.8, 10, x + 3.6, 5]), '#fffdf4');
  V(E(33, -1, 3.4, 2.8), '#1c1a24', 33, -1, 3, 1.2);
  eyesX(o, fur, [[2, -4, 3.4, 1], [9, -4.6, 2.6, -1]], 'glow', '#ffd02a'); browsX(o, [[2, -9, 7.4, 1], [9, -8.8, 5.6, -1]], '#1e1a24', 3, 'thick');
  g.restore();
  const h = limb(14, -86, .4 - 1.9 * u, 20, -.45 - u * .3, 18, 8.4, 6, 5, fur); clawsAt(h, fur, 4, 12);
  g.restore();
}
function frankD(o) {                                            // il Mostro di Frankenstein: alto e squadrato, testa piatta coi bulloni, giacca con le maniche corte, scarponi enormi, braccia tese
  const sk = '#8ab870', skd = dk(sk, .28), jk = '#2a2a3a', u = o.u, w = o.walking ? 1 : 0, b = w ? -Math.abs(Math.sin(o.ph * .8)) * 3 : 0, sw = Math.sin(o.ph * .8);
  const reach = -.08 - u * .7 + Math.sin(o.t * 1.6) * .04;
  g.save(); g.translate(0, b); const hb = limb(-12, -88, reach - .05, 16, .05, 14, 6, 5, 4.6, dk(jk, .2)); taper(hb[0], hb[1], hb[0] + 8, hb[1] + 1, 4, 3, skd); g.restore();
  for (const [x, off, c] of [[-8, Math.PI, '#1e1e28'], [8, 0, '#2a2a36']]) { const a = w ? Math.sin(o.ph * .8 + off) * .28 : 0, fx = x + Math.sin(a) * 40; taper(x, -48, fx, -10, 7, 6, c); V(SP(`M${fx - 8},-12 L${fx + 10},-12 L${fx + 12},0 L${fx - 8},0Z`), '#141418', fx + 2, -6, 10, 1.8); L(SP(`M${fx - 8},-3 L${fx + 12},-3`), '#3a3a44', 1.4); }
  g.save(); g.translate(0, b); g.rotate(.03 + (w ? sw * .05 : 0) + (u > 0 ? -.05 * u : .1 * -u));
  const tor = SP('M-20,-94 L20,-94 L18,-48 L-18,-48Z'); V(tor, jk, 0, -71, 26);
  g.save(); g.clip(tor); F(SP('M-4,-94 L4,-94 L2,-60 L-2,-60Z'), '#5a5a6a'); F(SP('M-18,-56 L18,-56 L18,-48 L-18,-48Z'), '#3a3424'); for (const y of [-86, -76, -66]) V(E(-6, y, 1.6, 1.6), '#8a8a9a', -6, y, 1.6, .8); g.restore();
  L(SP('M10,-84 L14,-76 M8,-80 L16,-80'), '#c8c8d0', 1);
  taper(0, -94, 0, -102, 7, 7, sk);
  g.save(); g.translate(2, -116); g.rotate(Math.sin(o.t * 1.2) * .03 + (o.mood === 3 ? -.08 : o.mood === 4 ? .18 : 0)); g.scale(1.1, 1.1);
  for (const sx of [-1, 1]) { V(SP(`M${sx * 10},2 L${sx * 15},2 L${sx * 15},6 L${sx * 10},6Z`), '#8a8e9a', sx * 13, 4, 3, 1.2); V(E(sx * 16, 4, 1.6, 3), '#aeb2c0', sx * 16, 4, 2, 1); }
  const hd = SP('M-11,-12 L12,-12 L12,8 Q10,15 0,15 Q-10,15 -11,8Z'); V(hd, sk, 0, 0, 15);
  V(SP('M-12,-12 L13,-12 L13,-6 L8,-8 L4,-5 L0,-8 L-4,-5 L-8,-8 L-12,-6Z'), '#1e1a24', 0, -9, 12, 1.4);
  L(SP('M-8,-2 L6,-3'), dk(sk, .45), 1.2); for (const x of [-6, -2, 2, 5]) L(SP(`M${x},-4.4 l.4,3`), dk(sk, .45), 1);
  eyesX(o, sk, [[-2, 2, 3, 1], [6, 1.8, 2.5, -1]], 'lidded', '#c8d070'); browsX(o, [[-2, -2.4, 6.4, 1], [6, -2.6, 5, -1]], '#1e1a24', 3.4, 'thick');
  V(SP('M3,3 Q6,4 6,8 Q4,9 3,8Z'), skd, 4, 6, 2, 1); mouthX(o, 3, 11, 9, 'frown'); L(SP('M-1,11 l0,2 M3,11 l0,2 M7,11 l0,2'), dk(sk, .45), .9);
  g.restore();
  const h = limb(14, -88, reach, 16, .06, 14, 6, 5, 4.6, jk); taper(h[0], h[1], h[0] + 9, h[1] + 1, 4.2, 3.2, sk); for (const t of [-.3, 0, .3]) { g.save(); g.translate(h[0] + 8, h[1] + 1); g.rotate(reach + t); taper(0, 0, 5, 0, 1.6, 1.2, sk, 1); g.restore(); }
  if ((o.t * 1.3) % 3 < .2 || o.mood === 3) { glowB(14, -126, 14, 'rgba(160,220,255,.8)'); L(SP('M12,-124 l4,-6 l-3,0 l4,-6'), '#e8f8ff', 1.6); }
  g.restore();
}
function hydeD(o) {                                             // Dottor Jekyll e Mr. Hyde: gentiluomo col cilindro e il bastone; quando attacca diventa un bruto gobbo e peloso che strappa i vestiti
  const hy = o.mood >= 2 || o.u !== 0, sk = hy ? '#b89a8a' : '#f0d0b8', suit = '#2a2a3a', vest = '#7a2a3a', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, hy ? 4 : 2.4), sw = Math.sin(o.ph);
  if (!hy) {
    for (const [x, off, c] of [[-3, Math.PI, '#1e1e28'], [4, 0, suit]]) { const f = legB(x, -42, 20, 20, 3.8, 3, 2.6, o, off, c, .55); V(SP(`M${f[0] - 3},${f[1] - 3} L${f[0] + 8},${f[1] - 2} L${f[0] + 8},${f[1]} L${f[0] - 3},${f[1]}Z`), '#0e0c12', f[0] + 2, f[1] - 1, 5, 1.2); }
    g.save(); g.translate(0, b); g.rotate(.02 + (w ? sw * .03 : 0));
    limb(-6, -86, 1.7 + sw * .4 * w, 13, -.4, 12, 3, 2.4, 2, dk(suit, .2));
    V(SP('M-9,-88 Q0,-92 9,-88 L10,-42 L4,-46 L0,-40 L-4,-46 L-10,-42Z'), suit, 0, -64, 16); V(SP('M-4,-86 L4,-86 L5,-56 L-5,-56Z'), vest, 0, -72, 5, 1.2); F(SP('M-2,-88 L2,-88 L1,-80 L-1,-80Z'), '#f4f0ea'); for (const y of [-78, -70, -62]) V(E(0, y, 1.2, 1.2), '#f2c14e', 0, y, 1.2, .6);
    g.save(); g.translate(1, -100); g.rotate(Math.sin(o.t * 1.6) * .04 + (o.mood === 4 ? .22 : 0));
    V(SP('M-7,-4 Q-8,-13 1,-13 Q9,-12 9,-3 Q9,7 3,10 Q-5,9 -7,-4Z'), sk, 1, -2, 10);
    eyesX(o, sk, [[0, -3, 2.6, 1], [5.8, -3.2, 2.2, -1]], 'almond', '#4a6a9a'); browsX(o, [[0, -7, 5, 1], [5.8, -7, 4, -1]], '#6a4a2a', 1.4, 'arch');
    V(PL([5, -2, 9, 2, 5, 3]), sk, 6, 1, 2, 1); L(SP('M1,4 Q4,3 7,4'), '#6a4a2a', 1.6); mouthX(o, 4, 6.4, 5, 'smile');
    V(SP('M-9,-10 L11,-10 L11,-7 L-9,-7Z'), '#1a1a22', 1, -8, 10, 1.4); V(SP('M-6,-10 L-6,-24 L8,-24 L8,-10Z'), '#1a1a22', 1, -17, 7, 1.4); F(SP('M-6,-13 L8,-13 L8,-11 L-6,-11Z'), vest);
    g.restore();
    const h = limb(7, -86, .9, 13, -.6, 12, 3, 2.4, 2, suit);
    atHand(h, -1.4, () => { seg(0, 16, 0, -24, 2, '#3a2a1a'); V(E(0, -25, 2.6, 2.6), '#c8c8d0', 0, -25, 2, 1); });
    g.save(); g.translate(-12, -50); V(SP('M-3,0 L3,0 L4,-6 Q4,-10 0,-12 Q-4,-10 -4,-6Z'), 'rgba(120,255,150,.7)', 0, -6, 4, 1.2); g.restore();
    g.restore(); return;
  }
  const fur = '#4a3a3a';
  for (const [x, off, c] of [[-6, Math.PI, '#1e1e28'], [7, 0, suit]]) { const f = legB(x, -36, 16, 16, 7, 5.4, 4.6, o, off, c, .55); V(SP(`M${f[0] - 5},${f[1] - 4} Q${f[0] + 6},${f[1] - 6} ${f[0] + 12},${f[1]} L${f[0] - 5},${f[1]}Z`), '#2a1e1e', f[0] + 3, f[1] - 1, 8, 1.4); }
  g.save(); g.translate(0, b); g.rotate(.36 + w * .08 + (u > 0 ? -.1 * u : .16 * -u));
  const hb = limb(-14, -74, 1.4 + u * .5, 18, -.4, 17, 8, 6, 5.4, dk(sk, .2)); V(E(hb[0], hb[1], 6.4, 6), dk(sk, .2), hb[0], hb[1], 6, 1.6);
  const tor = SP('M-22,-80 Q0,-96 22,-80 Q26,-60 16,-42 Q0,-34 -16,-42 Q-26,-60 -22,-80Z'); V(tor, sk, 0, -62, 32);
  g.save(); g.clip(tor); for (const [x1, x2] of [[-22, -8], [10, 24]]) F(SP(`M${x1},-84 L${x2},-84 L${x2 - 2},-40 L${x1 + 4},-40Z`), suit); F(SP('M-8,-82 L8,-82 L6,-56 L-6,-56Z'), vest); for (const [x, y] of [[0, -70], [-4, -60], [4, -64]]) L(SP(`M${x},${y} l2,-4 M${x},${y} l-2,-4`), fur, 1.2); L(SP('M-8,-74 l-4,6 l3,0 l-3,6 M10,-70 l4,6 l-3,0 l3,6'), INK, 1.4); g.restore();
  g.save(); g.translate(18, -86); g.rotate(-.1 + Math.sin(o.t * 2.6) * .05 + (o.mood === 3 ? -.14 : o.mood === 4 ? .22 : 0)); g.scale(1.1, 1.1);
  const hd = SP('M-10,-4 Q-10,-13 1,-13 Q11,-12 12,-3 Q13,6 8,10 Q0,13 -6,10 Q-11,6 -10,-4Z'); V(hd, sk, 1, -1, 12);
  for (const [x, y, a] of [[-8, -12, -2.2], [-4, -14, -1.9], [1, -14, -1.6], [6, -13, -1.3], [-10, -6, -2.6]]) L(SP(`M${x},${y} l${Math.cos(a) * 6},${Math.sin(a) * 6}`), fur, 2.2);
  eyesX(o, sk, [[0, -3, 3.2, 1], [6.6, -3.4, 2.6, -1]], 'wide', '#c8302a'); browsX(o, [[0, -8, 7, 1], [6.6, -7.8, 5.4, -1]], fur, 3.4, 'bushy');
  V(SP('M6,-2 Q12,0 10,5 Q7,5 6,3Z'), dk(sk, .08), 8, 2, 3, 1); mouthX(o, 3, 6.4, 10, 'sharp');
  V(SP('M-10,-10 L-12,-18 L4,-18 L2,-10Z'), '#1a1a22', -4, -14, 6, 1.4); L(SP('M-12,-14 L4,-16'), INK, 1);
  g.restore();
  const h = limb(14, -74, .3 - 1.9 * u, 18, -.4, 17, 8.4, 6.4, 5.6, sk); V(E(h[0], h[1], 7, 6.4), sk, h[0], h[1], 7, 1.6); for (const y of [-2, 1.6]) L(SP(`M${h[0] + 1},${h[1] + y} l5,0`), dk(sk, .3), 1);
  g.restore();
}
function stregattoD(o) {                                        // il Gatto del Cheshire: sinuoso, tigrato, coda ad anelli lunghissima, sorriso enorme; ogni tanto sparisce e restano occhi e sorriso
  const fur = '#b48c5e', str = '#6a4a32', u = o.u, w = o.walking ? 1 : 0, p = o.ph * 1.4, van = (Math.sin(o.t * .8) > .7) && u === 0;
  const fade = van ? .12 : 1, b = w ? -Math.abs(Math.sin(p)) * 3 : Math.sin(o.t * 2) * 1;
  g.save(); g.translate(0, b);
  g.save(); g.globalAlpha *= fade;
  const tw = Math.sin(o.t * 2.4) * 8; const tl = SP(`M-24,-26 Q-40,${-30 + tw * .3} -42,${-50 + tw} Q-44,${-64 + tw} -34,${-66 + tw} Q-28,${-66 + tw} -30,${-60 + tw}`); L(tl, dk(fur, .7), 7); L(tl, fur, 4.6);
  for (let i = 1; i < 6; i++) { const k = i / 6; L(SP(`M${-24 - 18 * k},${-26 - 30 * k + tw * k} l3,2`), str, 3); }
  const leg2 = (x, off, col) => { const a = w ? Math.sin(p + off) * .7 : 0, kx = x + Math.sin(a) * 7, fx = kx + Math.sin(a - .3) * 5; taper(x, -20, kx, -10, 4, 3, col); taper(kx, -10, fx, -2, 3, 2.6, col); V(E(fx + 2, -1, 4, 2.4), col, fx, -1, 4, 1.2); };
  leg2(-18, 0, dk(fur, .3)); leg2(10, Math.PI, dk(fur, .3));
  const body = SP('M-26,-24 Q-24,-36 -8,-36 Q8,-38 16,-30 Q20,-22 12,-18 Q0,-16 -12,-18 Q-24,-16 -26,-24Z'); V(body, fur, -4, -27, 22);
  g.save(); g.clip(body); for (let x = -22; x < 16; x += 6) L(SP(`M${x},-40 Q${x + 3},-30 ${x},-20`), str, 2.6); F(E(-4, -18, 18, 3), lt(fur, .35)); g.restore();
  leg2(-14, Math.PI, fur); leg2(14, 0, fur);
  g.restore();
  g.save(); g.translate(18, -38); g.rotate(-.1 + Math.sin(o.t * 1.5) * .08 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0)); g.scale(1.15, 1.15);
  g.save(); g.globalAlpha *= fade;
  for (const [x, c] of [[-9, dk(fur, .2)], [6, fur]]) V(PL([x - 5, -6, x - 2, -20, x + 4, -7]), c, x, -10, 6, 1.6);
  const hd = SP('M-12,0 Q-13,-12 -1,-13 Q12,-13 14,-2 Q15,8 6,11 Q-6,12 -12,0Z'); V(hd, fur, 1, -1, 14); g.save(); g.clip(hd); for (const x of [-6, -1, 4]) L(SP(`M${x},-14 Q${x + 2},-9 ${x},-5`), str, 2.2); g.restore();
  g.restore();
  eyesX(o, fur, [[-2, -3, 3.4, 1], [6, -3.4, 2.8, -1]], 'slit', '#e8e040');
  const gw = 22; if (o.mood === 4) mouthX(o, 2, 4, 12, 'grin'); else { const p2 = SP(`M${2 - gw / 2},1 Q2,${o.mood === 3 ? 18 : 12} ${2 + gw / 2},-1 Q${2 + gw / 3},${o.mood === 3 ? 6 : 3} 2,${o.mood === 3 ? 7 : 4} Q${2 - gw / 3},${o.mood === 3 ? 7 : 4} ${2 - gw / 2},1Z`); L(p2, INK, 2.4); F(p2, '#fffdf4'); g.save(); g.clip(p2); L(SP(`M${2 - gw / 2},4 Q2,${o.mood === 3 ? 12 : 8} ${2 + gw / 2},3`), INK, 1); for (let i = 1; i < 7; i++) L(SP(`M${2 - gw / 2 + gw * i / 7},0 L${2 - gw / 2 + gw * i / 7},14`), INK, .8); g.restore(); if (o.mood === 3) { g.save(); g.clip(p2); F(E(2, 10, 6, 3), '#f07a8a'); g.restore(); } }
  g.restore();
  g.restore();
}
function ovestD(o) {                                            // la Strega dell'Ovest: vecchietta curva con un occhio solo, Cappello d'Oro, treccine grigie, ombrello chiuso come bastone, scarpe d'argento
  const dr = '#1e1a28', sk = '#c8c0a8', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 2), sw = Math.sin(o.ph) * (w ? 3 : 0) + Math.sin(o.t * 2) * 1.4, cast = o.mood === 2 || o.mood === 3;
  for (const x of [-4, 5]) { const a = w ? Math.sin(o.ph + (x > 0 ? 0 : Math.PI)) * 4 : 0; V(SP(`M${x - 3 + a},-1 L${x + 6 + a},-1 Q${x + 9 + a},-3 ${x + 7 + a},-5 L${x - 3 + a},-5Z`), '#d8dce8', x + 3 + a, -3, 5, 1.2); F(E(x + 4 + a, -4, 1.4, .8), '#fff'); }
  g.save(); g.translate(0, b); g.rotate(.22 + (u > 0 ? -.08 * u : .12 * -u));
  const robe = SP(`M-6,-58 Q-12,-30 ${-16 + sw},-4 L${14 + sw},-4 Q10,-30 6,-58Z`); V(robe, dr, 0, -30, 24); g.save(); g.clip(robe); for (const x of [-6, 2, 8]) L(SP(`M${x * .4},-58 Q${x},-30 ${x * 1.4 + sw},-2`), lt(dr, .15), 1.2); g.restore();
  V(SP('M-10,-58 Q0,-62 10,-58 L12,-48 Q0,-44 -12,-48Z'), '#2a2438', 0, -53, 12, 1.4);
  limb(-6, -54, 1.8 + (cast ? -1 : 0), 9, -.6, 8, 2.4, 2, 1.6, dk(dr, .2));
  g.save(); g.translate(5, -68); g.rotate(-.1 + Math.sin(o.t * 1.6) * .05 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0)); g.scale(1.2, 1.2);
  for (const sx of [-1, 1]) { const tw = Math.sin(o.t * 3 + sx) * 2; L(SP(`M${sx * 7},0 Q${sx * 10},8 ${sx * 8 + tw},16`), '#a8a8b0', 3); for (let i = 1; i < 4; i++) L(SP(`M${sx * 8 + tw * i / 4 - 2},${i * 4} l4,1`), '#7a7a88', .8); V(E(sx * 8 + tw, 17, 1.6, 1.6), '#c8302a', 0, 0, 1, .6); }
  const hd = SP('M-8,-4 Q-9,-12 0,-12 Q9,-12 9,-3 Q10,4 8,8 Q10,11 11,13 Q6,12 4,10 Q-2,11 -5,7 Q-9,3 -8,-4Z'); V(hd, sk, 1, -1, 11);
  const bl = o.blink < .5; if (o.mood === 4) L(SP('M-2,-5 Q2,-2 6,-5'), INK, 2); else { const p = E(2, -3, 4.6, bl ? .8 : 4.2); L(p, INK, 2.2); F(p, '#fffdf4'); if (!bl) { g.save(); g.clip(p); F(E(3.4, -2.6, 2.6, 2.6), '#c8302a'); F(E(3.6, -2.6, 1.2, 1.2), INK); F(E(1, -4.4, 1, 1), '#fff'); g.restore(); } }
  browsX(o, [[2, -9, 9, 1]], '#7a7a88', 1.8, 'arch');
  V(SP('M7,-3 Q14,-1 13,4 Q10,4 8,2Z'), dk(sk, .06), 10, 1, 4, 1.2); F(E(-4, 3, .9, .9), dk(sk, .3)); mouthX(o, 3, 7, 6, 'gap');
  V(SP('M-12,-6 Q0,-14 13,-6 Q14,-3 11,-3 Q0,-8 -10,-2 Q-14,-3 -12,-6Z'), '#e8b43a', 0, -6, 12, 1.6); V(SP('M-7,-8 Q-6,-20 1,-21 Q8,-20 9,-8 Q1,-11 -7,-8Z'), '#f2c14e', 1, -14, 8, 1.4); for (const x of [-3, 2, 6]) V(E(x, -13, 1.4, 1.4), '#3ac0e8', x, -13, 1.4, .8);
  g.restore();
  const h = limb(6, -54, (cast ? -.9 : .9) - u * .7, 9, -.4, 8, 2.4, 2, 1.6, dr);
  atHand(h, cast ? -.4 : -1.5, () => { seg(0, 16, 0, -22, 2, '#2a2a3a'); V(SP('M-4,-22 Q0,-30 4,-22 L3,4 Q0,6 -3,4Z'), '#3a3a6a', 0, -10, 6, 1.2); L(SP('M0,16 Q4,20 6,17'), '#2a2a3a', 2); if (cast) glowB(0, -26, 12, 'rgba(120,255,140,.6)'); });
  V(E(h[0], h[1], 2.4, 2.4), sk, h[0], h[1], 2.4, 1.2);
  g.restore();
}
function sherekhanD(o) {                                        // Shere Khan: tigre enorme e regale, strisce nere, muso fiero, zoppica dalla zampa dietro, balzo
  const fur = '#e8862a', fd = dk(fur, .3), wh = '#f8f0e0', str = '#2a1a14', u = o.u, w = o.walking ? 1 : 0, p = o.ph * 1.3, lunge = u < 0 ? -u * 20 : -u * 6, rear = u > 0 ? u : 0;
  g.save(); g.translate(lunge, w ? -Math.abs(Math.sin(p)) * 3 : Math.sin(o.t * 2) * .6); g.rotate(-rear * .12);
  const lg = (x, off, col, limp) => { const a = w ? Math.sin(p + off) * (limp ? .25 : .6) : 0, kx = x + Math.sin(a) * 8, ky = -16, fx = kx + Math.sin(a - .3) * 6 + (limp ? 3 : 0); taper(x, -30, kx, ky, 7, 4.6, col); taper(kx, ky, fx, -3, 4.6, 4, col); V(E(fx + 3, -2, 6, 3), col, fx, -2, 5, 1.4); for (const t of [2, 5]) L(SP(`M${fx + t},-3 l0,2`), dk(col, .4), .8); };
  lg(-26, 0, fd, 1); lg(14, Math.PI, fd);
  const tw = Math.sin(o.t * 2.2) * 6; const tl = SP(`M-34,-34 Q-50,${-30 + tw * .4} -54,${-44 + tw} Q-56,${-54 + tw} -50,${-56 + tw}`); L(tl, dk(fur, .7), 7.4); L(tl, fur, 5); for (let i = 1; i < 5; i++) { const k = i / 5; L(SP(`M${-34 - 18 * k},${-34 - 18 * k + tw * k} l4,1`), str, 2.4); } F(E(-50, -56 + tw, 3, 3), str);
  const body = SP('M-36,-32 Q-34,-46 -14,-46 Q6,-48 20,-40 Q28,-32 24,-24 Q14,-18 0,-20 Q-20,-18 -32,-22 Q-38,-26 -36,-32Z'); V(body, fur, -6, -32, 30);
  g.save(); g.clip(body); F(SP('M-34,-24 Q-8,-18 24,-26 L26,-18 L-36,-18Z'), wh); for (let x = -30; x < 20; x += 7) V(SP(`M${x},-48 Q${x + 4},-40 ${x + 1},-32 Q${x + 3},-40 ${x + 3},-48Z`), str, x + 2, -40, 3, 0); g.restore();
  lg(-20, Math.PI, fur, 1); lg(18, 0, fur);
  g.save(); g.translate(28, -46 - rear * 6); g.rotate(Math.sin(o.t * 1.8) * .05 - rear * .2 + (o.mood === 3 ? -.18 : o.mood === 4 ? .22 : 0)); g.scale(1.1, 1.1);
  for (const [x, c] of [[-8, fd], [4, fur]]) { V(E(x, -12, 4.4, 4.4), c, x, -12, 4, 1.4); F(E(x, -12, 2, 2), '#2a1a14'); }
  const hd = SP('M-12,2 Q-14,-12 0,-13 Q14,-13 16,0 Q17,10 8,14 Q-4,16 -10,10 Q-14,6 -12,2Z'); V(hd, fur, 1, 0, 15);
  g.save(); g.clip(hd); F(SP('M-12,6 Q0,2 16,4 L16,16 L-12,16Z'), wh); for (const [x, a] of [[-6, -.3], [-1, -.1], [4, .1]]) L(SP(`M${x},-13 l${a * 6},6`), str, 2); for (const y of [0, 4]) { L(SP(`M-12,${y} l5,1`), str, 1.8); } g.restore();
  eyesX(o, fur, [[1, -4, 3, 1], [8, -4.4, 2.4, -1]], 'almond', '#8ad040'); browsX(o, [[1, -8.4, 6, 1], [8, -8.2, 4.6, -1]], str, 2.4, 'thick');
  V(SP('M8,0 Q14,-1 15,3 Q12,5 9,4Z'), '#3a2420', 12, 2, 4, 1);
  mouthX(o, 8, 8, 9, 'snarl'); for (const dy of [5, 7.4]) L(SP(`M13,${dy} l7,${dy - 6}`), 'rgba(255,255,255,.7)', .7);
  g.restore();
  g.restore();
}
function krampusD(o) {                                          // Krampus: pelliccia nera arruffata, corna di capra ricurve, lunga lingua rossa, zampe da capra, catene coi campanacci, verghe di betulla
  const fur = '#2e2630', fd = dk(fur, .2), sk = '#6a4a4a', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3.6), sw = Math.sin(o.ph);
  for (const [x, off, c] of [[-6, Math.PI, fd], [6, 0, fur]]) { const p2 = o.ph + off, a = w ? Math.sin(p2) * .6 : 0, kx = x + 8 + Math.sin(a) * 10, ky = -26, hx2 = kx - 8 + Math.sin(a) * 6, hy2 = -10, fx = hx2 + 2, fy = -(w ? Math.max(0, Math.cos(p2)) * 5 : 0);
    taper(x, -44, kx, ky, 8, 5, c); taper(kx, ky, hx2, hy2, 4, 3, c); taper(hx2, hy2, fx, fy, 3, 2.6, c); V(SP(`M${fx - 3},${fy - 3} L${fx + 4},${fy - 3} L${fx + 4},${fy} L${fx + 1},${fy - 1} L${fx - 3},${fy}Z`), '#0e0a0e', fx, fy - 1, 4, 1); }
  g.save(); g.translate(0, b); g.rotate(.22 + w * .08 + (u > 0 ? -.08 * u : .14 * -u));
  const hb = limb(-12, -84, 1.5 + sw * .5 * w, 15, -.5, 14, 6, 4.4, 3.6, fd); clawsAt(hb, sk, 3, 8);
  g.save(); g.translate(hb[0], hb[1]); g.rotate(hb[2] + Math.PI / 2 - .8); for (let i = -2; i <= 2; i++) L(SP(`M0,0 Q${i * 3},-16 ${i * 6},-30`), '#6a4a2a', 1.4); g.restore();
  const tor = SP('M-20,-88 Q0,-100 20,-88 Q24,-68 16,-50 Q0,-42 -14,-50 Q-24,-68 -20,-88Z'); V(tor, fur, 0, -68, 30);
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2, x = Math.cos(a) * 18, y = -68 + Math.sin(a) * 20; L(SP(`M${x},${y} l${Math.cos(a) * 5},${Math.sin(a) * 5}`), fur, 3); }
  const ch = SP(`M-18,-82 Q0,-70 18,-60 Q8,-46 -6,-44`); L(ch, '#5a5a64', 3.4); for (let i = 0; i < 9; i++) { const k = i / 9; const x = -18 + 36 * k - 4 * Math.sin(k * 3), y = -82 + 30 * k; L(E(x, y, 2, 1.4, .6), '#9a9aa8', 1.4); }
  for (const [x, y] of [[-10, -78], [10, -62]]) { V(SP(`M${x - 4},${y} L${x + 4},${y} L${x + 5},${y + 7} L${x - 5},${y + 7}Z`), '#c8a040', x, y + 3, 5, 1.2); F(E(x, y + 7.4, 1.4, 1.4), '#5a4a2a'); }
  g.save(); g.translate(14, -100); g.rotate(Math.sin(o.t * 2) * .05 + (o.mood === 3 ? -.14 : o.mood === 4 ? .22 : 0)); g.scale(1.15, 1.15);
  for (const [sx, c] of [[-1, dk('#d8c8a8', .2)], [1, '#d8c8a8']]) { const hp = SP(`M${sx * 4},-10 Q${sx * 14},-26 ${sx * 6},-34 Q${sx * 2},-36 ${sx * 4},-30 Q${sx * 8},-24 ${sx * 1},-12Z`); V(hp, c, sx * 6, -22, 10, 1.6); for (let i = 1; i < 4; i++) L(SP(`M${sx * (4 + i * 2)},${-12 - i * 6} l${sx * 3},-1`), dk(c, .35), 1); }
  V(PL([-10, -6, -20, -10, -12, 0]), sk, -13, -5, 5, 1.4);
  const hd = SP('M-10,-4 Q-10,-13 1,-14 Q12,-13 13,-3 Q16,4 10,10 Q2,14 -5,10 Q-11,6 -10,-4Z'); V(hd, sk, 1, -1, 13);
  for (let i = 0; i < 6; i++) { const a = -2.8 + i * .4; L(SP(`M${Math.cos(a) * 11},${Math.sin(a) * 11 - 2} l${Math.cos(a) * 5},${Math.sin(a) * 5}`), fur, 3); }
  eyesX(o, sk, [[0, -4, 3, 1], [7, -4.4, 2.4, -1]], 'glow', '#ff7a2a'); browsX(o, [[0, -8.6, 6.4, 1], [7, -8.4, 5, -1]], fur, 3, 'thick');
  V(E(10, 0, 3.4, 2.8), dk(sk, .1), 10, 0, 3, 1.2); mouthX(o, 4, 6, 10, 'sharp');
  const tg = Math.sin(o.t * 4) * 3; const tq = SP(`M4,${8} Q6,${18 + tg} ${2 + tg},${26 + (o.mood === 3 ? 6 : 0)}`); L(tq, '#7a1020', 5); L(tq, '#e8384a', 3);
  g.restore();
  const h = limb(14, -84, .7 - 2 * u, 15, -.4, 14, 6, 4.4, 3.6, fur); clawsAt(h, sk, 3, 8);
  if (o.atk >= 0) { const k = swing(o.atk); L(SP(`M${h[0]},${h[1]} Q${h[0] + 20 - k * 10},${h[1] - 10 + k * 20} ${h[0] + 40},${h[1] + 6}`), '#9a9aa8', 2.4); } else L(SP(`M${h[0]},${h[1]} Q${h[0] + 4},${h[1] + 14} ${h[0] - 2},${h[1] + 26}`), '#9a9aa8', 2.4);
  g.restore();
}
function jabberD(o) {                                           // Jabberwocky: drago di Carroll, collo lunghissimo, ali da pipistrello, baffi lunghi, denti a paletta, antenne, sputa fuoco viola
  const sk = '#5a6a3a', sk2 = '#8a7a9a', bel = '#c8c890', u = o.u, f = Math.sin(o.t * 5), fly = -40 + Math.sin(o.t * 2) * 5, cast = o.mood === 2 || o.mood === 3;
  g.save(); g.translate(0, fly); g.rotate((u > 0 ? -.08 * u : .12 * -u));
  const wing = (a, col, sc) => { g.save(); g.translate(-6, -20); g.rotate(a); g.scale(sc, sc); const p = SP('M0,0 L-14,-36 L-44,-46 Q-36,-34 -44,-22 Q-30,-22 -32,-8 Q-20,-12 -16,4 Q-8,-4 0,4Z'); V(p, col, -22, -18, 30); g.save(); g.clip(p); for (const [x, y] of [[-44, -22], [-32, -8], [-16, 4]]) L(SP(`M-14,-36 L${x},${y}`), dk(col, .35), 1.6); g.restore(); seg(0, 0, -14, -36, 3.6, sk); seg(-14, -36, -44, -46, 2.6, sk); g.restore(); };
  wing(-.2 + f * .35, dk(sk2, .3), .9);
  const tl = SP(`M-20,-6 Q-36,${2 + f * 3} -48,${-4 + Math.sin(o.t * 2.6) * 6} Q-56,${-10 + Math.sin(o.t * 2.6) * 6} -60,${-6 + Math.sin(o.t * 2.6) * 8}`); L(tl, dk(sk, .7), 7); L(tl, sk, 4.4);
  for (const [x, c] of [[-10, dk(sk, .25)], [4, sk]]) { taper(x, -2, x + 2, 10, 4, 3, c); for (const a of [-.4, 0, .4]) L(SP(`M${x + 2},10 l${Math.cos(a + 1.2) * 6},${Math.sin(a + 1.2) * 6}`), '#e8e0c0', 1.6); }
  const body = SP('M-22,-4 Q-20,-16 -4,-18 Q10,-18 14,-8 Q14,2 4,4 Q-14,6 -22,-4Z'); V(body, sk, -4, -7, 20); g.save(); g.clip(body); F(E(-4, 2, 16, 5), bel); for (const x of [-14, -8, -2, 4]) L(SP(`M${x},-2 l1,6`), dk(bel, .3), 1); g.restore();
  const pts = []; for (let i = 0; i <= 12; i++) { const t = i / 12, q = bez([8, -14], [20, -30], [6 + Math.sin(o.t * 1.6) * 6, -54], [24 + (u < 0 ? -u * 10 : 0), -66], t); pts.push([q[0], q[1], 6 - t * 2.4]); }
  chain([[8, -14], [20, -30], [6 + Math.sin(o.t * 1.6) * 6, -54], [24 + (u < 0 ? -u * 10 : 0), -66]], 12, 6, 3.6, sk, bel);
  const hx = pts[12][0], hy = pts[12][1];
  g.save(); g.translate(hx, hy); g.rotate(.2 + Math.sin(o.t * 2.4) * .08 + (o.mood === 3 ? -.2 : o.mood === 4 ? .25 : 0));
  for (const sx of [-1, 1]) L(SP(`M${sx * 2},-6 Q${sx * 6 - 2},-18 ${sx * 4 + 4},-22`), sk2, 1.6), F(E(sx * 4 + 4, -22, 1.6, 1.6), '#e8384a');
  const op = o.mood === 3 ? .5 : o.mood === 2 ? .2 : 0;
  g.save(); g.translate(2, 3); g.rotate(op); V(SP('M0,0 L16,1 Q14,5 4,5 Q-2,4 0,0Z'), dk(sk, .1), 8, 3, 8, 1.4); g.restore();
  if (op > .1) { F(SP(`M2,3 L18,${3 - op * 2} L14,${5 + op * 12} L2,6Z`), '#3a0e2a'); if (cast) { glowB(22, 6, 14, 'rgba(200,120,255,.6)'); } }
  V(SP('M-6,-2 Q-4,-10 6,-10 Q16,-8 20,-2 Q20,2 16,3 L-2,4Z'), sk, 6, -3, 12);
  for (const x of [8, 12]) V(SP(`M${x},2 L${x + 3},2 L${x + 3},7 L${x},7Z`), '#fffdf4', x + 1.5, 4.5, 2, .8);
  for (const sx of [1, -1]) L(SP(`M16,1 Q${24},${6 + sx * 4 + Math.sin(o.t * 3) * 3} ${30},${2 + sx * 10 + Math.sin(o.t * 3 + 1) * 4}`), sk2, 1.4);
  eyesX(o, sk, [[3, -5, 3.2, 1], [9, -5.6, 2.4, -1]], 'wide', '#ff5a2a'); browsX(o, [[3, -9.4, 6, 1], [9, -9, 4.4, -1]], '#1e2a14', 2.2, 'thick');
  g.restore();
  wing(-.5 - f * .45, sk2, 1);
  g.restore();
}
Object.assign(DRAW, { lupomannaro: mannaroD, frankenstein: frankD, hyde: hydeD, stregatto: stregattoD, stregaovest: ovestD, sherekhan: sherekhanD, krampus: krampusD, jabberwocky: jabberD });
