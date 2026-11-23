// ---------- corpi rifatti, lotto A: sagome diverse per ogni cattivo ----------
function taper(x1, y1, x2, y2, w1, w2, col, ow = 1.8) {            // arto che si assottiglia: niente più tubi tutti uguali
  const a = Math.atan2(y2 - y1, x2 - x1) + Math.PI / 2, c = Math.cos(a), s = Math.sin(a), p = new Path2D();
  p.moveTo(x1 + c * w1, y1 + s * w1); p.lineTo(x2 + c * w2, y2 + s * w2); p.arc(x2, y2, w2, a, a + Math.PI, true); p.lineTo(x1 - c * w1, y1 - s * w1); p.arc(x1, y1, w1, a + Math.PI, a, true); p.closePath();
  V(p, col, (x1 + x2) / 2 - c * w1 * .5, (y1 + y2) / 2 - s * w1 * .5, Math.max(w1, w2) * 2.2, ow); return p;
}
function limb(sx, sy, a, l1, b, l2, w1, w2, w3, col) { const ex = sx + Math.cos(a) * l1, ey = sy + Math.sin(a) * l1, hx = ex + Math.cos(a + b) * l2, hy = ey + Math.sin(a + b) * l2; taper(sx, sy, ex, ey, w1, w2, col); taper(ex, ey, hx, hy, w2, w3, col); return [hx, hy, a + b]; }
function legB(hx, hy, l1, l2, w1, w2, w3, o, off, col, amp = .6, lift = 1) { const p = o.ph + off, a = o.walking ? Math.sin(p) * amp : 0, bend = o.walking ? Math.max(0, Math.cos(p)) * .9 * lift : .05;
  const kx = hx + Math.sin(a) * l1, ky = hy + Math.cos(a) * l1, fx = kx + Math.sin(a - bend) * l2, fy = ky + Math.cos(a - bend) * l2; taper(hx, hy, kx, ky, w1, w2, col); taper(kx, ky, fx, fy, w2, w3, col); return [fx, fy, a - bend]; }
function goblinB(o, v = 0) {                                    // Goblin: piccolo e gobbo, testa enorme con orecchie a vela, pancetta, piedi nudi lunghi
  const sk = v ? '#7ab84a' : '#8cc94f', skd = dk(sk, .26), cl = v ? '#6a5a3a' : '#7c4a2a', sc = v ? '#3f7fd0' : '#d8443a', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 2.6), sw = Math.sin(o.ph);
  const tall = v ? 1.12 : 1, foot = (f, col) => { V(SP(`M${f[0] - 3},${f[1] - 2} Q${f[0] + 4},${f[1] - 4} ${f[0] + 10},${f[1] - 1} Q${f[0] + 12},${f[1] + 1} ${f[0] + 8},${f[1] + 1} L${f[0] - 3},${f[1] + 1}Z`), col, f[0] + 3, f[1], 7, 1.6); for (const t of [6, 9]) F(E(f[0] + t, f[1] - .4, 1.2, 1), '#e8f0c8'); };
  g.save(); g.translate(0, b); const hb = limb(-5, -34 * tall, 1.9 + sw * .8 * w + u * .5, 9, -.7, 9, 3.6, 2.6, 2.2, skd); V(E(hb[0], hb[1], 3.2, 3.2), skd, hb[0], hb[1], 3, 1.4); g.restore();
  foot(legB(-3, -18 * tall, 9 * tall, 9 * tall, 3.4, 2.6, 2.2, o, Math.PI, skd, .8), skd); foot(legB(4, -18 * tall, 9 * tall, 9 * tall, 3.6, 2.8, 2.4, o, 0, sk, .8), sk);
  g.save(); g.translate(0, b); g.rotate(.14 + w * .12 + (u > 0 ? -.1 * u : .16 * -u));
  const tor = SP(`M-7,${-36 * tall} Q4,${-40 * tall} 9,${-32 * tall} Q14,${-22 * tall} 10,-16 Q2,-12 -6,-16 Q-12,${-24 * tall} -7,${-36 * tall}Z`); V(tor, sk, 2, -26 * tall, 14);
  g.save(); g.clip(tor); F(E(6, -22 * tall, 7, 7), lt(sk, .25)); g.restore();
  V(SP(`M-9,-20 L11,-20 L10,-12 L6,-15 L2,-10 L-2,-14 L-6,-10 L-9,-14Z`), cl, 1, -15, 10, 1.6);
  if (v) { V(SP(`M-10,${-34 * tall} Q-18,${-26 * tall} -14,-18 L-8,-20 Q-10,${-26 * tall} -6,${-32 * tall}Z`), '#8a6a3a', -11, -26, 8, 1.6); for (const y of [-26, -21]) V(E(-12, y, 2, 2), '#b8b4c4', -12, y, 2, 1); }
  else { const fl = Math.sin(o.t * 6 + o.ph) * 3; V(SP(`M-6,${-35 * tall} Q-16,${-36 * tall + fl} -24,${-29 * tall + fl} Q-15,${-30 * tall + fl * .6} -6,${-31 * tall}Z`), sc, -14, -32, 9, 1.6); }
  V(SP(`M-8,${-36 * tall} Q2,${-41 * tall} 10,${-34 * tall} L9,${-31 * tall} Q2,${-36 * tall} -7,${-32 * tall}Z`), sc, 1, -35 * tall, 9, 1.6);
  g.save(); g.translate(6, -50 * tall); g.rotate(Math.sin(o.t * 2.3) * .06 - sw * .06 * w + (o.mood === 3 ? -.14 : o.mood === 4 ? .22 : 0));
  g.save(); g.translate(-12, -4); g.rotate(-.15 + Math.sin(o.t * 3.1) * .12 - (o.mood === 4 ? .5 : 0)); V(SP('M4,2 Q-14,-10 -30,-16 Q-20,-2 2,8Z'), sk, -10, -3, 14); F(SP('M0,1 Q-12,-7 -24,-12 Q-14,-3 0,5Z'), 'rgba(240,120,110,.45)'); g.restore();
  const head = SP('M-14,0 Q-16,-14 -2,-17 Q14,-18 18,-6 Q20,6 12,12 Q2,16 -8,12 Q-14,8 -14,0Z'); V(head, sk, 2, -2, 19);
  g.save(); g.translate(14, -6); g.rotate(.4 + Math.sin(o.t * 3.1 + 1) * .1); V(SP('M-2,2 Q8,-12 20,-18 Q12,-2 0,8Z'), sk, 7, -4, 10, 1.6); g.restore();
  if (v) { V(SP('M-15,-4 Q-14,-20 2,-20 Q16,-19 19,-8 Q4,-13 -15,-4Z'), '#8a5a34', 2, -12, 16); V(SP('M-6,-17 Q-18,-30 -22,-22 Q-14,-20 -7,-14Z'), '#e0483a', -13, -21, 8, 1.6); }
  else for (const [x, a] of [[-6, -1.9], [-1, -1.6], [4, -1.3]]) L(SP(`M${x},-16 l${Math.cos(a) * 6},${Math.sin(a) * 6}`), '#33261f', 2);
  eyesX(o, sk, [[1, -4, 5.4, 1], [12, -4.6, 4, -1]], v ? 'lidded' : 'wide', '#ffcf2a'); browsX(o, [[1, -11.5, 10, 1], [12, -11, 7.6, -1]], '#2a3a1a', 2.4, 'thick');
  V(SP('M8,-1 Q20,-6 25,2 Q22,7 12,5Z'), lt(sk, .1), 16, 1, 9, 1.8); F(E(21, 2, 1.3, 1), dk(sk, .5)); V(E(14, -3, 1.6, 1.6), dk(sk, .12), 14, -3, 1.6, .8);
  F(E(-7, 5, 3.6, 2.2), 'rgba(240,110,80,.35)'); mouthX(o, 6, 8, 14, v ? 'smirk' : 'grin');
  g.restore();
  if (v) { const dr = o.atk < 0 ? 0 : o.atk < .5 ? o.atk / .5 : 0, h = limb(5, -34 * tall, -.25, 9, .1, 9, 3.4, 2.6, 2.2, sk), px = h[0] - 6 - dr * 14, py = h[1] - 7;
    g.save(); g.translate(h[0], h[1]); seg(0, 3, 0, 12, 3, '#7a4a2a'); seg(0, 3, -5, -11, 2.6, '#7a4a2a'); seg(0, 3, 6, -11, 2.6, '#7a4a2a'); g.restore();
    L(SP(`M${h[0] - 5},${h[1] - 11} L${px},${py} L${h[0] + 6},${h[1] - 11}`), '#c08a5a', 1.6); if (dr > 0) V(E(px, py, 2.6, 2.6), '#b8b4c4', px, py, 3, 1.2); V(E(px - 2, py + 1, 3.2, 3.2), sk, px, py, 3, 1.2); }
  else { const h = limb(5, -34, 1.0 - 1.9 * u, 9, -.45, 9, 3.6, 2.8, 2.3, sk); atHand(h, -.8, () => { F(SP('M-4.5,-3 L4.5,-3 L4.5,-.5 L-4.5,-.5Z'), '#6a4a22'); V(SP('M-2.6,-3 Q-5,-15 1,-26 Q6,-14 2.6,-3Z'), '#e3e9f4', 0, -13, 12, 2); V(E(0, 1.5, 3, 3.4), '#5a3a20', 0, 1, 3, 1.6); }); V(E(h[0], h[1], 3.2, 3.2), sk, h[0], h[1], 3, 1.2); }
  g.restore();
}
function lupoB(o) {                                             // il Lupo: alto e allampanato, spalle curve, braccia lunghissime con artigli, coda folta, cuffietta della nonna
  const fur = '#7d7a8a', fd = dk(fur, .28), bel = '#cfc6ba', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3.4), sw = Math.sin(o.ph);
  g.save(); g.translate(-8, -46 + b); g.rotate(-.7 + (w ? Math.sin(o.ph - .7) * .4 : Math.sin(o.t * 3) * .25));
  const tl = SP('M0,-5 Q-14,-16 -32,-12 Q-42,-6 -36,2 Q-28,6 -16,4 Q-6,4 0,4Z'); V(tl, fur, -18, -4, 18); g.save(); g.clip(tl); F(E(-34, -4, 8, 6), bel); L(SP('M-8,-2 L-30,-6 M-10,1 L-28,0'), fd, 1); g.restore(); g.restore();
  const claws = h => { for (const a of [-.5, 0, .5]) { g.save(); g.translate(h[0], h[1]); g.rotate(h[2] + a); const c = PL([2, -1.8, 10, 0, 2, 1.8]); F(c, '#fffdf4'); L(c, INK, .8); g.restore(); } V(E(h[0], h[1], 4.6, 4.2), h.col, h[0], h[1], 4.6, 1.6); };
  g.save(); g.translate(0, b); const hb = limb(-6, -80, 1.5 + sw * .6 * w + u * .5, 18, -.5, 17, 5.4, 3.6, 3, fd); hb.col = fd; claws(hb); g.restore();
  const paw = (f, c) => V(SP(`M${f[0] - 3},${f[1] - 3} Q${f[0] + 6},${f[1] - 5} ${f[0] + 10},${f[1]} L${f[0] - 3},${f[1]}Z`), c, f[0] + 3, f[1] - 1, 7, 1.6);
  for (const [x, off, c] of [[-4, Math.PI, fd], [5, 0, fur]]) { const p2 = o.ph + off, a = w ? Math.sin(p2) * .6 : 0, kx = x + 8 + Math.sin(a) * 12, ky = -24, hx2 = kx - 9 + Math.sin(a) * 8, hy2 = -10, fx = hx2 + 3, fy = -(w ? Math.max(0, Math.cos(p2)) * 5 : 0);
    taper(x, -42, kx, ky, 7, 4.6, c); taper(kx, ky, hx2, hy2, 4.6, 3, c); taper(hx2, hy2, fx, fy, 3, 2.6, c); paw([fx, fy], c); }
  g.save(); g.translate(0, b); g.rotate(.22 + w * .14 + (u > 0 ? -.1 * u : .16 * -u));
  const tor = SP('M-14,-84 Q4,-94 18,-80 Q20,-66 12,-54 Q6,-44 2,-40 Q-6,-38 -8,-44 Q-12,-58 -16,-70 Q-18,-80 -14,-84Z'); V(tor, fur, 2, -64, 26);
  g.save(); g.clip(tor); F(SP('M4,-84 Q18,-72 12,-50 Q6,-40 0,-44 Q8,-60 4,-84Z'), bel); for (let i = 0; i < 4; i++) L(SP(`M${6 + i * 2},${-78 + i * 8} l3,2 l-3,2`), dk(bel, .25), 1); g.restore();
  for (const [x, y] of [[-14, -82], [-16, -76], [-10, -86]]) L(SP(`M${x},${y} l-4,-3`), fur, 3);
  g.save(); g.translate(16, -90); g.rotate(.1 + Math.sin(o.t * 2.2) * .05 + (o.mood === 3 ? -.15 : o.mood === 4 ? .22 : 0) + (w ? sw * .04 : 0));
  V(PL([-8, -6, -7, -22, 0, -10]), dk(fur, .2), -5, -12, 8, 2);
  V(SP('M-10,2 Q-12,-10 0,-12 Q10,-12 12,-4 Q12,6 4,9 Q-6,10 -10,2Z'), fur, 0, -2, 12);
  const open = o.mood === 3 ? .55 : o.mood === 2 ? .16 : o.mood === 4 ? .25 : .05;
  g.save(); g.translate(8, 5); g.rotate(open); V(SP('M0,0 L22,1 Q19,6 8,6 Q0,5 0,0Z'), dk(fur, .12), 10, 3, 11, 2); for (const x of [6, 11, 16]) F(PL([x, .5, x + 1.6, -3.4, x + 3.2, .5]), '#fffdf4'); g.restore();
  if (open > .1) F(SP(`M8,5 L30,4 L${29 - open * 10},${6 + open * 16} L8,6Z`), '#5a1220');
  V(SP('M5,-7 Q22,-8 31,-2 Q33,3 30,5 L8,6Z'), fur, 18, -1, 13);
  for (const x of [12, 17, 22]) F(PL([x, 5, x + 1.6, 9.4, x + 3.2, 5]), '#fffdf4');
  V(E(31, -.6, 3.2, 2.6), '#1c1a24', 31, 0, 3, 1.2);
  eyesX(o, fur, [[3, -4, 3.4, 1], [10, -4.6, 2.6, -1]], 'almond', '#ffc42a'); browsX(o, [[3, -9, 7, 1], [10, -8.8, 5.4, -1]], '#3a3644', 2.4, 'thick');
  const cap = SP('M-13,0 Q-17,-16 -3,-19 Q10,-19 13,-10 Q2,-13 -6,-7 Q-10,0 -13,0Z'); V(cap, '#f4eef6', -2, -10, 14, 2);
  for (let i = 0; i < 7; i++) F(E(-12 + i * 3.8, 0 - i * 1.5 + (i > 3 ? (i - 3) * 1.6 : 0), 1.6, 1.6), '#e2d8ea');
  V(PL([0, -14, 7, -30, 10, -12]), fur, 6, -19, 8, 2); F(PL([3, -15, 7, -25, 8.4, -14]), '#d8a0b0');
  V(E(-14, -1, 3.4, 2.8), '#ff8ab0', -14, -1, 3, 1.4);
  g.restore();
  const h = limb(12, -80, .5 - 1.9 * u, 18, -.45 - u * .3, 17, 5.6, 3.8, 3.2, fur); h.col = fur; claws(h);
  g.restore();
}
function zombieB(o) {                                           // lo Zombie: storto, una spalla più bassa, braccia magre, una scarpa sola, trascina la gamba
  const sk = '#97ae84', skd = dk(sk, .28), sh = '#6a5a82', pa = '#3e3e52', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 2), drag = Math.sin(o.ph);
  const reach = -.1 - u * .8 + Math.sin(o.t * 2) * .06;
  g.save(); g.translate(0, b); g.rotate(.12); const hb = limb(-4, -66, reach + .12, 13, .14, 12, 3.4, 2.6, 2.2, skd); for (const a of [-.4, 0, .4]) { g.save(); g.translate(hb[0], hb[1]); g.rotate(hb[2] + a); taper(0, 0, 6, 0, 1.4, 1, skd, 1.2); g.restore(); } g.restore();
  const f1 = legB(-5, -38, 18, 18, 5, 3.6, 3, o, Math.PI, dk(pa, .25), .25, .3); V(E(f1[0] + 3, f1[1], 5.6, 2.4), '#9a8a6a', f1[0], f1[1], 5, 1.4); for (const t of [1, 4, 7]) F(E(f1[0] + t, f1[1] - .4, 1, .8), '#7a9a6a');
  const f2 = legB(5, -38, 18, 18, 5.4, 4, 3.4, o, 0, pa, .55); V(E(f2[0] + 3, f2[1], 6, 3), '#2a2a30', f2[0], f2[1], 6, 1.4);
  L(SP(`M-7,-30 l3,2 l2,-1`), '#2a2a3a', 1); F(SP('M2,-26 L6,-26 L5,-20 L2,-22Z'), sk);
  g.save(); g.translate(0, b); g.rotate(.16 + w * .06 + drag * .05 * w + (u > 0 ? -.06 * u : .12 * -u));
  V(SP('M-9,-42 L11,-40 L10,-33 L-10,-35Z'), pa, 0, -38, 12, 1.8);
  const shirt = SP('M-11,-70 Q-2,-74 13,-66 Q15,-52 12,-40 L8,-36 L6,-41 L2,-35 L-1,-41 L-5,-35 L-8,-40 L-11,-38 Q-14,-54 -11,-70Z'); V(shirt, sh, 1, -54, 20);
  const hole = SP('M2,-60 Q9,-62 10,-53 Q6,-47 1,-50 Q-1,-56 2,-60Z'); F(hole, sk); g.save(); g.clip(hole); for (const y of [-58, -55, -52]) L(SP(`M1,${y} Q5,${y - 1} 10,${y}`), lt(sk, .3), 1.2); g.restore(); L(hole, dk(sh, .5), 1.2);
  L(SP('M-8,-66 L-6,-58 M-9,-63 L-5,-63 M-9,-60 L-5,-61'), '#2a2030', 1.1); V(SP('M-11,-70 L-15,-64 L-11,-60Z'), dk(sh, .2), -12, -64, 3, 1);
  g.save(); g.translate(5, -80); g.rotate(.34 + Math.sin(o.t * 1.3) * .12 + (o.mood === 3 ? -.2 : o.mood === 4 ? .25 : 0) + (w ? drag * .06 : 0));
  const hd = SP('M-8,-8 Q-6,-16 3,-15 Q12,-14 12,-4 Q13,4 10,8 Q4,14 -2,11 Q-9,8 -9,0Z'); V(hd, sk, 2, -2, 13);
  g.save(); g.clip(hd); F(SP('M-9,-16 L13,-16 L13,-12 Q4,-10 -1,-13 Q-6,-10 -9,-12Z'), '#5a5068'); g.restore();
  for (const [x, a] of [[-5, -.8], [-1, -.3], [4, .2], [8, .5]]) L(SP(`M${x},-14 q${a * 4},-6 ${a * 8},-5`), '#3a3040', 1.4);
  L(SP('M-5,-8 L7,-10'), '#5a3a4a', 1.1); for (const x of [-3, 0, 3, 6]) L(SP(`M${x},-11 l.6,3`), '#5a3a4a', 1);
  F(E(2, 0, 4.4, 2.2), 'rgba(70,50,90,.3)');
  eyesX(o, sk, [[2, -3.6, 4.2, 1], [9.6, -2.2, 2.3, -1]], 'lidded', '#cdd88a'); browsX(o, [[2, -9, 6.4, 1], [9.6, -7, 4, -1]], '#3a3040', 1.4, 'thick');
  V(E(-9, 0, 2.6, 3.4), skd, -9, 0, 3, 1.2);
  if (o.mood <= 1) { const m = SP(`M3,5 Q6,${3 + Math.sin(o.t * 3) * .6} 9,5 Q9.4,${11 + Math.sin(o.t * 3)} 6,11 Q3,11 3,5Z`); L(m, INK, 2); F(m, '#3a1020'); F(PL([5, 5, 6.4, 5, 5.8, 7]), '#e8e0b0'); F(PL([7, 11, 8, 11, 7.6, 9]), '#e8e0b0'); }
  else mouthX(o, 6, 6, 8, 'gap');
  g.restore();
  const h = limb(9, -64, reach, 13, .08, 12, 3.6, 2.8, 2.4, sk);
  for (const a of [-.4, 0, .4]) { g.save(); g.translate(h[0], h[1]); g.rotate(h[2] + a); taper(0, 0, 7, 0, 1.6, 1.1, sk, 1.2); g.restore(); } V(E(h[0], h[1], 3.6, 3.4), sk, h[0], h[1], 3.6, 1.4);
  g.restore();
}
function trollB(o) {                                            // il Troll del Ponte: macigno gobbo, testa piccola infossata, braccia da gorilla che toccano terra, gambe corte
  const sk = '#8c9aa2', skd = dk(sk, .28), moss = '#5f8a46', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 4), sw = Math.sin(o.ph);
  const fist = (h, c) => { V(E(h[0], h[1], 9, 8), c, h[0], h[1], 9, 2); for (const y of [-3, 1, 4]) L(SP(`M${h[0] + 2},${h[1] + y} l5,0`), dk(c, .35), 1.2); };
  g.save(); g.translate(0, b); const hb = limb(-20, -76, 1.75 + sw * .35 * w + u * .3, 22, -.2, 24, 11, 8, 9, skd); fist(hb, skd); g.restore();
  for (const [x, off, c] of [[-10, Math.PI, skd], [12, 0, sk]]) { const f = legB(x, -30, 13, 13, 11, 8, 7, o, off, c, .4); V(SP(`M${f[0] - 8},${f[1] - 4} Q${f[0] + 6},${f[1] - 7} ${f[0] + 12},${f[1]} L${f[0] - 8},${f[1]}Z`), c, f[0] + 2, f[1] - 2, 10, 1.8); }
  g.save(); g.translate(0, b); g.rotate(.18 + w * .06 + sw * .03 * w + (u > 0 ? -.08 * u : .12 * -u));
  const body = SP('M-34,-62 Q-30,-96 -4,-104 Q24,-108 32,-88 Q38,-68 30,-50 Q20,-30 -2,-28 Q-26,-30 -32,-44 Q-36,-52 -34,-62Z'); V(body, sk, -2, -68, 42);
  g.save(); g.clip(body); L(SP('M-14,-94 L-8,-78 L-16,-64 M12,-62 L18,-50 L14,-40 M22,-92 L14,-82 M-26,-56 L-18,-50'), dk(sk, .45), 1.8);
  for (const [x, y, r] of [[-12, -102, 16], [-28, -72, 8], [14, -100, 10], [26, -84, 6]]) { F(E(x, y, r, r * .6), moss); F(E(x - r * .3, y - r * .2, r * .4, r * .22), lt(moss, .3)); }
  F(SP('M-6,-46 Q8,-40 26,-50 Q22,-34 0,-32 Q-14,-34 -6,-46Z'), lt(sk, .14)); g.restore();
  for (const [x, y] of [[-20, -104], [-12, -106], [10, -106], [16, -104]]) L(SP(`M${x},${y + 3} l-1,-6 M${x},${y + 3} l2,-5`), moss, 1.6);
  V(E(-14, -108, 3, 2), '#e85a5a', -14, -108, 3, 1.2); F(E(-14, -109, 1, .8), '#fff');
  V(SP('M-26,-36 L24,-36 L20,-22 L8,-28 L-2,-20 L-12,-28 L-22,-22Z'), '#6a4a2a', 0, -29, 22);
  g.save(); g.translate(24, -78); g.rotate(Math.sin(o.t * 1.6) * .05 - sw * .04 * w + (o.mood === 3 ? -.12 : o.mood === 4 ? .2 : 0));
  const hd = SP('M-10,-4 Q-10,-12 0,-12 Q10,-12 12,-4 Q14,6 8,10 Q-2,12 -8,8 Q-12,2 -10,-4Z'); V(hd, sk, 1, -1, 13);
  V(SP('M-10,-8 Q0,-14 12,-6 L12,-3 Q0,-9 -10,-4Z'), dk(sk, .2), 1, -7, 11, 1.6);
  eyesX(o, sk, [[0, -4, 2.6, 1], [7, -4.4, 2.2, -1]], 'beady', '#ff9a2a'); browsX(o, [[0, -8, 7, 1], [7, -8, 5.4, -1]], dk(sk, .5), 3.4, 'thick');
  V(SP('M6,-4 Q18,-4 20,6 Q18,12 10,10 Q6,6 6,-4Z'), lt(sk, .06), 13, 3, 9, 2); V(E(16, 0, 1.6, 1.6), dk(sk, .2), 16, 0, 2, 1);
  mouthX(o, 3, 7, 12, 'frown');
  for (const x of [-2, 7]) V(SP(`M${x - 2},9 L${x - .4},1 L${x + 2},9Z`), '#efe6cc', x, 5, 4, 1.3);
  g.restore();
  const h = limb(18, -78, .9 - 1.9 * u, 20, -.3, 22, 11, 8, 9, sk);
  atHand(h, -1.0, () => { const pl = SP('M-7,8 L-7,-58 L-3,-62 L-1,-57 L3,-63 L7,-58 L7,8Z'); V(pl, '#7a5a3a', 0, -26, 30);
    L(SP('M-3,4 L-3,-52 M2,2 Q3,-20 1,-50'), dk('#7a5a3a', .4), 1); for (const y of [-12, -40]) { F(SP(`M-7.6,${y} L7.6,${y} L7.6,${y + 5} L-7.6,${y + 5}Z`), '#5a5e6a'); F(E(-4, y + 2.5, 1.3, 1.3), '#b8bcc8'); F(E(4, y + 2.5, 1.3, 1.3), '#b8bcc8'); } F(E(-5, -30, 4, 2.4), moss); });
  fist(h, sk);
  g.restore();
}
function diavB(o) {                                             // Diavoletto: piccolo e panciuto, testa grossa, gambette da capra con gli zoccoli, svolazza
  const sk = '#d8443a', skd = dk(sk, .3), u = o.u, w = o.walking ? 1 : 0, hov = -6 + Math.sin(o.t * 4) * 3, sw = Math.sin(o.ph), th = o.atk >= 0 ? Math.max(0, Math.sin(o.atk * Math.PI * 4 - .6)) : 0, wingA = Math.sin(o.t * 16) * .5;
  g.save(); g.translate(0, hov);
  const tl = SP(`M-8,-22 Q-22,-14 -24,${-28 + Math.sin(o.t * 4) * 4} Q-26,-40 -18,-42`); L(tl, dk(sk, .7), 4.4); L(tl, sk, 2.4); g.save(); g.translate(-18, -42); g.rotate(-.6 + Math.sin(o.t * 4) * .2); V(SP('M-5,2 Q0,-9 5,2 Q0,0 -5,2Z'), sk, 0, -1, 5, 1.6); g.restore();
  const wing = (a, col) => { g.save(); g.translate(-4, -34); g.rotate(a); V(SP('M0,0 Q-6,-18 -22,-20 Q-16,-14 -20,-8 Q-13,-9 -14,-2 Q-7,-4 0,4Z'), col, -10, -8, 12, 1.8); L(SP('M0,0 L-20,-18 M0,0 L-18,-8'), dk(col, .3), 1); g.restore(); };
  wing(-.2 + wingA, '#7a2234');
  for (const [x, off, c] of [[-3, Math.PI, skd], [4, 0, sk]]) { const p2 = o.ph * 1.4 + off, a = Math.sin(p2) * (w ? .6 : .25), kx = x + 4 + Math.sin(a) * 5, ky = -12, fx = kx - 3 + Math.sin(a) * 4, fy = -2; taper(x, -20, kx, ky, 3.4, 2.2, c); taper(kx, ky, fx, fy, 2.2, 1.6, c); V(SP(`M${fx - 2.4},${fy - 1} L${fx + 2.6},${fy - 1} L${fx + 2},${fy + 2.4} L${fx},${fy + 1.4} L${fx - 2},${fy + 2.4}Z`), '#2a1a1a', fx, fy, 2.4, 1); }
  g.save(); g.rotate(.06 + w * .1 + (th ? .14 : 0));
  limb(-5, -30, 1.9 + sw * .6 * w, 6, -.6, 6, 2.6, 2, 1.8, skd);
  const bd = SP('M-8,-34 Q0,-38 7,-32 Q12,-22 6,-16 Q0,-13 -6,-16 Q-11,-24 -8,-34Z'); V(bd, sk, 0, -25, 11); g.save(); g.clip(bd); F(E(3, -22, 6, 6), lt(sk, .3)); g.restore(); F(E(2, -22, .8, 1), skd);
  g.save(); g.translate(3, -46); g.rotate(Math.sin(o.t * 2.6) * .06 + (o.mood === 3 ? -.12 : o.mood === 4 ? .2 : 0) + (w ? sw * .05 : 0));
  for (const [x, sg, c] of [[-6, -1, dk('#f2e6c8', .2)], [7, 1, '#f2e6c8']]) V(SP(`M${x - 3},-9 Q${x + sg * 3},-26 ${x + sg * 11},-25 Q${x + sg * 4},-19 ${x + 4},-8Z`), c, x + sg * 3, -15, 8, 1.8);
  V(PL([-12, -2, -22, -10, -11, 3]), dk(sk, .15), -15, -3, 6, 1.6);
  const hd = SP('M-12,-2 Q-13,-13 0,-14 Q13,-14 14,-2 Q15,6 9,10 Q2,13 -4,11 Q-12,8 -12,-2Z'); V(hd, sk, 1, -2, 14);
  eyesX(o, sk, [[-1, -3, 4.2, 1], [7.6, -3.2, 3.4, -1]], 'almond', '#ffd02a'); browsX(o, [[-1, -9, 7.6, 1], [7.6, -8.8, 6, -1]], '#3a0e14', 2.6, 'thick');
  F(E(-6, 3, 2.6, 1.6), 'rgba(255,150,120,.4)'); mouthX(o, 4, 4.6, 10, 'sharp');
  V(PL([1, 10, 4, 17, 7, 10]), skd, 4, 12, 3, 1.2);
  g.restore();
  const h = limb(4, -30, .25 - th * .3, 6, -.7 + th * .6, 6, 2.6, 2, 1.8, sk);
  g.save(); g.translate(h[0] + th * 7, h[1]); g.rotate(-.12 + (o.u > 0 ? -.6 * o.u : 0));
  seg(-14, 0, 22, 0, 2, '#6a4426'); V(SP('M20,-6 L22,-6 L22,6 L20,6Z'), '#9aa0b0', 21, 0, 4, 1.4);
  for (const y of [-6, 0, 6]) V(PL([22, y - 1.4, 31, y, 22, y + 1.4]), '#c9ccd6', 26, y, 4, 1.2);
  g.restore(); V(E(h[0] + th * 7, h[1], 2.8, 2.8), sk, h[0], h[1], 3, 1.2);
  g.restore();
  wing(-.5 - wingA, '#9a3044');
  g.restore();
}
function gnomoB(o) {                                            // lo Gnomo: tozzo come un fungo, barbone fino alla pancia, nasone, gambette corte, cappello enorme
  const sk = '#f0c8a0', sh = '#3a6ac8', hat = '#d8443a', pa = '#6a4a2a', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3), sw = Math.sin(o.ph), hold = o.atk < 0 || o.atk < .5;
  g.save(); g.translate(0, b); limb(-11, -28, 1.7 + sw * .6 * w, 7, -.5, 7, 4, 3.2, 3, dk(sh, .3)); g.restore();
  for (const [x, off, c] of [[-5, Math.PI, '#3a2418'], [5, 0, '#4a3020']]) { const f = legB(x, -12, 6, 6, 4.6, 4, 3.6, o, off, dk(pa, x < 0 ? .25 : 0), .8); V(SP(`M${f[0] - 4},${f[1] - 3} Q${f[0] + 5},${f[1] - 5} ${f[0] + 7},${f[1]} L${f[0] - 4},${f[1]}Z`), c, f[0], f[1] - 1, 6, 1.6); }
  g.save(); g.translate(0, b); g.rotate((w ? sw * .07 : 0) + (u > 0 ? -.1 * u : .15 * -u));
  const bd = SP('M-12,-30 Q-2,-36 10,-30 Q18,-20 14,-12 Q0,-6 -14,-12 Q-18,-20 -12,-30Z'); V(bd, sh, 0, -20, 18);
  F(SP('M-15,-16 L15,-16 L15,-12 L-15,-12Z'), '#4a3020'); V(SP('M-2,-17 L4,-17 L4,-11 L-2,-11Z'), '#f2c14e', 1, -14, 3, 1);
  g.save(); g.translate(2, -40); g.rotate(Math.sin(o.t * 2.4) * .06 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0) + (w ? sw * .05 : 0));
  V(E(0, 0, 9, 8.6), sk, 0, 0, 9);
  const beard = SP(`M-10,0 Q-14,14 -6,24 Q0,${30 + Math.sin(o.t * 3)} 4,25 Q8,30 13,22 Q17,10 12,0 Q6,6 1,5 Q-4,6 -10,0Z`); V(beard, '#f4f0ea', 1, 12, 14, 1.8);
  L(SP('M-5,8 Q-3,14 -5,20 M4,10 Q6,16 5,22 M0,12 L0,24'), '#c8c4d0', 1);
  eyesX(o, sk, [[-1.6, -2, 2.6, 1], [4.6, -2.2, 2.2, -1]], 'beady', '#3a6ac8'); browsX(o, [[-1.6, -6, 6, 1], [4.6, -5.8, 5, -1]], '#f4f0ea', 2.6, 'bushy');
  V(E(5.6, 3, 5, 4.4), '#f0907a', 5.6, 3, 5, 1.4); F(E(4, 1.4, 1.6, 1), 'rgba(255,255,255,.6)');
  if (o.mood === 3 || o.mood === 2) mouthX(o, 3, 9, 6, 'frown');
  const sway = Math.sin(o.t * 3) * 4 + (w ? sw * 3 : 0);
  V(SP(`M-12,-4 Q-10,-26 ${-2 + sway},-38 Q${-10 + sway},-46 ${-18 + sway},-42 Q${-6 + sway},-34 8,-30 Q12,-16 13,-4 Q0,-8 -12,-4Z`), hat, 0, -20, 18);
  F(SP('M-12.4,-5 Q0,-9 13.4,-5 L13.6,-2 Q0,-6 -12.6,-2Z'), dk(hat, .3));
  g.restore();
  const h = limb(9, -28, .9 - 2.6 * u, 7, -.5 + u * .4, 7, 4, 3.2, 3, sh);
  if (hold) pumpkinB(h[0] + 3, h[1] - 3, o.t, 1);
  V(E(h[0], h[1], 3.2, 3.2), sk, h[0], h[1], 3, 1.4);
  g.restore();
}
function barbabluB(o) {                                         // Barbablù: torace a botte, spalle enormi, gambe corte, mantello, barbone blu, la chiave proibita
  const sk = '#e8c0a0', dub = '#5a2a6a', dub2 = '#7a3a8a', bl = '#2a4ac8', gold = '#f2c14e', cape = '#2a1838', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3.4), sw = Math.sin(o.ph);
  g.save(); g.translate(0, b); const cp = SP(`M-20,-92 Q-34,-60 ${-32 + sw * 3 * w},-30 Q-20,-34 -12,-40 Q-14,-70 -8,-90Z`); V(cp, cape, -20, -60, 26); g.restore();
  g.save(); g.translate(0, b); const hb = limb(-22, -88, 1.5 + sw * .4 * w, 16, -.9, 14, 8, 6, 5, dk(dub, .3)); V(E(hb[0], hb[1], 6, 6), dk(sk, .2), hb[0], hb[1], 6, 1.6); g.restore();
  for (const [x, off, c] of [[-7, Math.PI, '#2a2230'], [7, 0, '#3a3040']]) { const f = legB(x, -36, 16, 16, 8, 6, 5, o, off, c, .5); V(SP(`M${f[0] - 6},${f[1] - 4} Q${f[0] + 6},${f[1] - 6} ${f[0] + 10},${f[1]} L${f[0] - 6},${f[1]}Z`), '#1a141e', f[0] + 2, f[1] - 2, 8, 1.6); }
  g.save(); g.translate(0, b); g.rotate(.04 + w * .07 + (u > 0 ? -.1 * u : .14 * -u));
  const tor = SP('M-26,-90 Q-4,-104 24,-92 Q30,-74 22,-52 Q14,-38 0,-36 Q-14,-38 -20,-52 Q-30,-72 -26,-90Z'); V(tor, dub, 0, -66, 34);
  g.save(); g.clip(tor); F(SP('M-4,-100 L4,-100 L6,-34 L-6,-34Z'), dub2); for (const y of [-80, -70, -60, -50]) V(E(0, y, 2, 2), gold, 0, y, 2, .8); F(E(-14, -84, 10, 6), 'rgba(255,255,255,.12)'); g.restore();
  V(SP('M-20,-44 L20,-44 L18,-38 L-18,-38Z'), '#2a1a14', 0, -41, 18, 1.6); V(SP('M-4,-45 L4,-45 L4,-37 L-4,-37Z'), gold, 0, -41, 4, 1);
  for (const [x, c] of [[-22, dk(dub, .15)], [22, dub]]) V(E(x, -90, 10, 8), c, x, -90, 10, 1.8);
  g.save(); g.translate(5, -104); g.rotate(Math.sin(o.t * 1.7) * .05 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0) + (w ? sw * .04 : 0));
  V(E(-10, 0, 3.4, 4.6), sk, -10, 0, 4, 1.4);
  const hd = SP('M-10,-6 Q-9,-17 1,-17 Q12,-17 12,-5 Q12,4 2,6 Q-9,5 -10,-6Z'); V(hd, sk, 1, -5, 12);
  F(SP('M-10,-9 Q-8,-17 1,-18 Q11,-17 12,-9 Q6,-14 1,-14 Q-5,-14 -10,-9Z'), '#1a2050');
  const beard = SP(`M-11,-2 Q-16,14 -8,26 Q-2,${33 + Math.sin(o.t * 3)} 4,${29 + Math.sin(o.t * 3 + 1)} Q11,33 14,23 Q18,10 12,-2 Q8,4 1,3 Q-6,4 -11,-2Z`);
  V(beard, bl, 1, 13, 17); g.save(); g.clip(beard); for (const [x, y] of [[-6, 8], [0, 14], [7, 10], [-3, 20], [5, 23], [-8, 15]]) L(SP(`M${x},${y} q2,-3 4,0 q2,3 4,0`), lt(bl, .3), 1.2); g.restore();
  eyesX(o, sk, [[-1, -7, 3.2, 1], [6.4, -7.2, 2.6, -1]], 'lidded', '#1a2050'); browsX(o, [[-1, -12, 7, 1], [6.4, -11.8, 5.6, -1]], '#1a2050', 3.4, 'thick');
  V(E(9, -2, 3.6, 3), dk(sk, .06), 9, -2, 3, 1.2);
  if (o.mood >= 2) glowB(-1, -7, 10, 'rgba(90,130,255,.6)');
  mouthX(o, 4, 4, 8, 'snarl');
  g.restore();
  const h = limb(22, -88, .8 - 1.9 * u, 16, -.5, 14, 8.4, 6.4, 5.4, dub);
  atHand(h, -1.0, () => { V(E(0, 6, 6.4, 6.4), gold, 0, 6, 6, 1.6); F(E(0, 6, 3.2, 3.2), dk(gold, .5)); seg(0, 0, 0, -28, 3.8, gold); V(SP('M-1.6,-28 L8,-28 L8,-24 L4,-24 L4,-20 L8,-20 L8,-16 L-1.6,-16Z'), gold, 3, -22, 5, 1.2); if (o.mood >= 2) glowB(0, -10, 16, 'rgba(255,60,60,.4)'); });
  V(E(h[0], h[1], 5.6, 5.6), sk, h[0], h[1], 5.6, 1.4);
  g.restore();
}
Object.assign(DRAW, { goblin: goblinB, fionda: o => goblinB(o, 1), lupo: lupoB, zombie: zombieB, trollponte: trollB, diavoletto: diavB, gnomo: gnomoB, barbablu: barbabluB });
