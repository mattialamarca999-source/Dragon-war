// ---------- gruppo 6: altri epici ----------
function rockB(x, y, r) { V(SP(`M${x - r},${y} Q${x - r},${y - r} ${x - r * .2},${y - r * 1.05} Q${x + r},${y - r * .9} ${x + r},${y - r * .1} Q${x + r * .9},${y + r * .9} ${x},${y + r * .9} Q${x - r * .9},${y + r * .8} ${x - r},${y}Z`), '#8a8494', x, y, r); L(SP(`M${x - r * .4},${y - r * .5} L${x},${y} L${x + r * .3},${y - r * .2}`), '#5a5464', 1.2); F(E(x + r * .2, y + r * .3, r * .3, r * .2), 'rgba(90,140,70,.6)'); }
function ciclopeD(o) {                                          // il Ciclope: gigante muscoloso, un occhio solo enorme, monociglio, perizoma di pelliccia, masso sopra la testa
  const sk = '#d8a27a', skd = dk(sk, .28), u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 4.4), sw = Math.sin(o.ph), hold = o.atk < 0 || o.atk < .55;
  const ra = u > 0 ? -2.6 - u * .4 : u < 0 ? -2.6 + -u * 2.4 : -2.5 + Math.sin(o.t * 1.4) * .05;
  for (const [x, off, c] of [[-10, Math.PI, skd], [10, 0, sk]]) { const f = legB(x, -44, 20, 20, 11, 8, 7, o, off, c, .45); V(SP(`M${f[0] - 8},${f[1] - 4} Q${f[0] + 8},${f[1] - 6} ${f[0] + 14},${f[1]} L${f[0] - 8},${f[1]}Z`), c, f[0] + 3, f[1] - 2, 10, 1.8); L(SP(`M${f[0] - 6},${f[1] - 3} l12,-2`), '#7a4a2a', 2); }
  g.save(); g.translate(0, b); g.rotate(.06 + w * .06 + sw * .03 * w);
  const bh = limb(-24, -100, ra - .1, 22, .3, 20, 11, 8, 7, skd);
  const tor = SP('M-28,-102 Q0,-118 28,-100 Q34,-80 22,-60 Q14,-44 0,-42 Q-14,-44 -22,-60 Q-34,-80 -28,-102Z'); V(tor, sk, 0, -78, 38);
  g.save(); g.clip(tor); L(SP('M0,-100 L0,-60 M-14,-84 Q-6,-78 0,-84 Q6,-78 14,-84 M-10,-70 Q0,-66 10,-70 M-8,-60 Q0,-56 8,-60'), skd, 1.8); F(E(-10, -94, 10, 6), 'rgba(255,255,255,.12)'); g.restore();
  V(SP('M-24,-50 L24,-50 L26,-34 L14,-26 L4,-34 L-6,-24 L-16,-34 L-26,-30Z'), '#8a6a4a', 0, -38, 26); for (const [x, y] of [[-16, -42], [-4, -44], [10, -40]]) F(E(x, y, 3, 1.6), '#5a3a20');
  g.save(); g.translate(4, -124); g.rotate(Math.sin(o.t * 1.6) * .05 + (o.mood === 3 ? -.1 : o.mood === 4 ? .22 : 0)); g.scale(1.1, 1.1);
  for (const sx of [-1, 1]) V(E(sx * 13, 0, 4, 5.6), skd, sx * 13, 0, 4, 1.4);
  const hd = SP('M-13,-2 Q-14,-18 0,-19 Q14,-18 14,-2 Q16,10 8,15 Q0,18 -8,15 Q-15,10 -13,-2Z'); V(hd, sk, 0, -2, 17);
  L(SP('M-3,-18 q2,-5 5,-4'), '#3a2414', 2);
  const bl = o.blink < .5, ey = -5; if (o.mood === 4) L(SP('M-7,-7 Q0,-3 7,-7 Q0,-4 -7,-2'), INK, 2.4); else { const p = E(0, ey, 9, bl ? 1.2 : 8); L(p, INK, 2.6); F(p, '#fffdf4'); if (!bl) { g.save(); g.clip(p); F(E(2, ey + 1, 5, 5), '#c83a2a'); F(E(2.4, ey + 1, 2.6, 2.6), INK); F(E(-1.6, ey - 3, 1.8, 1.8), '#fff'); for (const a of [2.6, 3.4, .3]) L(SP(`M${Math.cos(a) * 9},${ey + Math.sin(a) * 8} l${-Math.cos(a) * 3},${-Math.sin(a) * 3}`), 'rgba(220,40,40,.6)', 1); g.restore(); } }
  browsX(o, [[0, ey - 11, 20, 1]], '#3a2414', 4.4, 'thick');
  V(SP('M-3,2 Q0,0 4,2 L5,7 Q0,9 -4,7Z'), lt(sk, .05), 0, 5, 5, 1.4);
  mouthX(o, 0, 11, 14, 'frown'); for (const x of [-5, 4]) V(SP(`M${x - 1.8},13 L${x},7 L${x + 1.8},13Z`), '#efe6cc', x, 10, 3, 1.1);
  g.restore();
  const fh = limb(24, -100, ra + .1, 22, -.3, 20, 11, 8, 7, sk);
  if (hold) rockB((bh[0] + fh[0]) / 2, (bh[1] + fh[1]) / 2 - 12, 18);
  V(E(fh[0], fh[1], 7, 7), sk, fh[0], fh[1], 7, 1.6); V(E(bh[0], bh[1], 7, 7), skd, bh[0], bh[1], 7, 1.6);
  g.restore();
}
function senzatestaD(o) {                                       // il Cavaliere senza Testa: cavallo nero impennato, mantello a brandelli, niente testa, zucca infuocata in mano
  const hr = '#1e1a26', hr2 = '#2e2838', cl = '#2a1a3a', u = o.u, w = o.walking ? 1 : 0, p = o.ph * 1.5, gal = w ? Math.sin(p) : Math.sin(o.t * 1.4) * .2, rear = u > 0 ? u * .25 : 0, hold = o.atk < 0 || o.atk < .5;
  g.save(); g.translate(0, w ? -Math.abs(Math.sin(p)) * 5 : 0); g.rotate(-rear);
  const hl = (x, off, col, front) => { const a = (w ? Math.sin(p + off) * .7 : .1) + (front && rear ? -1.2 * rear * 4 : 0), kx = x + Math.sin(a) * 14, ky = -30 + (front && rear ? -6 : 0), fx = kx + Math.sin(a + (front ? -.6 : .5)) * 14, fy = ky + Math.cos(a + (front ? -.6 : .5)) * 14 + 16;
    taper(x, -44, kx, ky, 6, 3.4, col); taper(kx, ky, fx, Math.min(fy, 0), 3.4, 2.6, col); V(SP(`M${fx - 3},${Math.min(fy, 0) - 3} L${fx + 3},${Math.min(fy, 0) - 3} L${fx + 4},${Math.min(fy, 0) + 1} L${fx - 4},${Math.min(fy, 0) + 1}Z`), '#5a5060', fx, Math.min(fy, 0), 3, 1); };
  hl(-24, 0, dk(hr, .1), 0); hl(16, Math.PI * .6, dk(hr, .1), 1);
  const tw = Math.sin(o.t * 4) * 6; V(SP(`M-32,-50 Q-48,${-46 + tw} -50,${-28 + tw} Q-44,${-36 + tw * .6} -40,${-30 + tw} Q-40,-42 -30,-44Z`), '#3a3448', -40, -40, 10, 1.6);
  const body = SP('M-34,-50 Q-30,-62 -10,-62 Q10,-62 22,-58 Q30,-52 26,-42 Q18,-34 0,-34 Q-24,-34 -32,-40 Q-36,-44 -34,-50Z'); V(body, hr, -4, -48, 32);
  g.save(); g.clip(body); F(E(-8, -58, 20, 4), 'rgba(140,120,200,.25)'); g.restore();
  hl(-18, Math.PI, hr, 0); hl(20, Math.PI * 1.6, hr, 1);
  g.save(); g.translate(22, -60); g.rotate(-.5 - rear * 1.2 + gal * .06);
  V(SP('M-6,4 L4,-24 L14,-22 L10,6Z'), hr, 4, -8, 12); for (let i = 0; i < 4; i++) V(SP(`M${2 + i * 2},${-20 + i * 6} Q${-6 + Math.sin(o.t * 6 + i) * 3},${-16 + i * 6} ${-8 + Math.sin(o.t * 6 + i) * 4},${-10 + i * 6} L${2 + i * 2},${-14 + i * 6}Z`), '#4a2a5a', -2, -14 + i * 6, 5, 1.2);
  V(SP('M2,-30 Q12,-34 22,-26 Q26,-20 20,-16 L6,-18 Q0,-22 2,-30Z'), hr, 12, -24, 12); V(PL([4, -30, 6, -40, 10, -30]), hr2, 6, -34, 4, 1.2);
  F(E(10, -26, 2.4, 1.6), '#ff3a2a', '#ff3a2a'); F(E(22, -21, 1.2, 1), '#000'); if (o.mood >= 2) for (let i = 0; i < 2; i++) { const k = (o.t * 2 + i / 2) % 1; g.save(); g.globalAlpha = 1 - k; F(E(24 + k * 8, -20 - k * 4, 2 + k * 3, 1.6 + k * 2), 'rgba(200,190,220,.7)'); g.restore(); }
  g.restore();
  g.save(); g.translate(-2, -62); g.rotate(-.05 + gal * .05);
  const cw = Math.sin(o.t * 5) * 4; V(SP(`M-6,-36 Q-24,-28 ${-36 + cw},-10 L${-30 + cw},-6 L${-24 + cw},-12 L${-18 + cw},-2 L${-12 + cw},-10 L-4,-4Z`), cl, -16, -18, 18);
  taper(-2, -6, -8, 4, 4, 3.4, '#2a2230'); taper(4, -6, 10, 4, 4, 3.4, '#2a2230');
  V(SP('M-8,-34 Q0,-40 8,-34 L9,-8 Q0,-4 -9,-8Z'), '#2a2230', 0, -22, 14); L(SP('M-8,-14 L9,-14'), '#5a4a3a', 2.4);
  V(SP('M-6,-36 Q0,-42 6,-36 L6,-32 Q0,-36 -6,-32Z'), cl, 0, -36, 6, 1.4); F(E(0, -37, 4, 1.6), '#3a0e14');
  for (let i = 0; i < 3; i++) { const k = (o.t * 1.6 + i / 3) % 1; g.save(); g.globalAlpha = (1 - k) * .6; F(E(Math.sin(k * 7 + i) * 2, -40 - k * 14, 2 + k * 3, 2 + k * 3), '#6a5a7a'); g.restore(); }
  limb(-6, -32, 1.6, 10, -.5, 9, 3.2, 2.6, 2.2, dk('#2a2230', .2));
  const h = limb(6, -32, (u > 0 ? -2 - u * .6 : u < 0 ? -.4 : -.5), 10, -.3, 9, 3.2, 2.6, 2.2, '#2a2230');
  if (hold) { const px = h[0] + 2, py = h[1] - 8; glowB(px, py, 18, 'rgba(255,150,40,.7)'); V(E(px, py, 8, 7), '#e8842a', px, py, 8, 1.6); L(SP(`M${px},${py - 7} Q${px - 3},${py} ${px},${py + 7} M${px - 4},${py - 6} Q${px - 8},${py} ${px - 4},${py + 6} M${px + 4},${py - 6} Q${px + 8},${py} ${px + 4},${py + 6}`), '#b85a1a', 1);
    F(PL([px - 5, py - 2, px - 2, py - 4, px - 2, py]), '#ffe07a', '#ffb030'); F(PL([px + 2, py - 4, px + 5, py - 2, px + 2, py]), '#ffe07a', '#ffb030'); F(SP(`M${px - 5},${py + 2} L${px + 5},${py + 2} L${px + 3},${py + 5} L${px},${py + 3} L${px - 3},${py + 5}Z`), '#ffe07a', '#ffb030');
    for (let i = 0; i < 3; i++) F(SP(`M${px - 4 + i * 4},${py - 6} Q${px - 6 + i * 4 + Math.sin(o.t * 9 + i) * 2},${py - 14} ${px - 3 + i * 4},${py - 18 - i % 2 * 3} Q${px - 1 + i * 4},${py - 12} ${px - 2 + i * 4},${py - 6}Z`), '#ff8a2a', '#ff6a1a'); }
  g.restore();
  g.restore();
}
function draculaD(o) {                                          // il Conte Dracula: alto ed elegante, mantello a ali di pipistrello col collo alto, capelli a punta sulla fronte, canini, occhi rossi
  const sk = '#d8d4e0', capeO = '#141018', capeI = '#8a1a2a', suit = '#1e1a26', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 2), sw = Math.sin(o.ph), open = u > 0 ? u : o.mood === 3 ? 1 : 0;
  g.save(); g.translate(0, b);
  const cw = Math.sin(o.t * 3) * 3, sp = open * 22;
  const cape = SP(`M-8,-92 Q${-24 - sp},-80 ${-28 - sp * 1.4},-46 L${-24 - sp},-40 L${-26 - sp * 1.2},-28 L${-18 - sp * .6},-22 Q-16,-4 ${-10 + cw},-2 L${12 + cw},-2 Q16,-20 ${18 + sp * .6},-22 L${24 + sp * 1.2},-28 L${22 + sp},-40 L${26 + sp * 1.4},-46 Q${22 + sp},-80 8,-92Z`);
  V(cape, capeO, 0, -50, 36); g.save(); g.clip(cape); F(SP(`M-6,-90 Q${-20 - sp},-70 ${-22 - sp * 1.2},-30 L${22 + sp * 1.2},-30 Q${20 + sp},-70 6,-90Z`), open > .2 ? capeI : dk(capeI, .4)); g.restore();
  for (const [x, off, c] of [[-4, Math.PI, '#141018'], [4, 0, '#1e1a26']]) { const f = legB(x, -40, 19, 19, 4, 3.2, 2.6, o, off, c, .5); V(SP(`M${f[0] - 3},${f[1] - 3} L${f[0] + 8},${f[1] - 2} L${f[0] + 8},${f[1]} L${f[0] - 3},${f[1]}Z`), '#0e0c12', f[0] + 2, f[1] - 1, 5, 1.2); }
  g.rotate(.03 + (w ? sw * .03 : 0) + (u < 0 ? .16 * -u : 0));
  const tor = SP('M-10,-88 Q0,-92 10,-88 L9,-42 Q0,-38 -9,-42Z'); V(tor, suit, 0, -65, 16);
  F(SP('M-3,-88 L3,-88 L4,-70 L0,-66 L-4,-70Z'), '#f4f0ea'); V(SP('M-2,-86 L2,-86 L1,-80 L-1,-80Z'), capeI, 0, -83, 2, 1); V(E(0, -72, 3, 3), '#c8302a', 0, -72, 3, 1); L(SP('M-3,-80 L0,-72 L3,-80'), '#f2c14e', 1.2);
  V(SP('M-16,-90 Q-20,-106 -10,-112 L-6,-96Z'), capeO, -12, -100, 8, 1.6); V(SP('M16,-90 Q20,-106 10,-112 L6,-96Z'), capeO, 12, -100, 8, 1.6); F(SP('M-14,-92 Q-17,-104 -10,-108 L-7,-96Z'), capeI);
  limb(-8, -86, 1.7 - open * 1.2, 12, -.4, 11, 3.2, 2.6, 2.2, suit);
  g.save(); g.translate(2, -100); g.rotate(Math.sin(o.t * 1.5) * .04 + (o.mood === 3 ? -.1 : o.mood === 4 ? .22 : 0) + (u < 0 ? .2 * -u : 0));
  const hd = SP('M-7,-6 Q-8,-14 1,-15 Q9,-14 9,-5 Q9,4 6,9 Q2,12 0,12 Q-3,11 -5,7 Q-7,2 -7,-6Z'); V(hd, sk, 1, -2, 11);
  V(SP('M-8,-2 Q-10,-16 1,-17 Q11,-16 10,-6 Q6,-11 4,-11 L1,-7 L-2,-11 Q-6,-10 -6,-2Z'), '#0e0c18', 1, -10, 10); F(E(-2, -14, 3, 1, -.3), 'rgba(200,200,255,.35)');
  V(PL([-8, -4, -14, -10, -8, 2]), sk, -10, -3, 4, 1.2);
  eyesX(o, sk, [[0, -3, 2.6, 1], [6, -3.2, 2.2, -1]], 'almond', '#e0202a'); browsX(o, [[0, -7.4, 5.4, 1], [6, -7.2, 4.4, -1]], '#0e0c18', 1.8, 'arch');
  F(E(0, -4.4, 3.4, 1.4), 'rgba(80,40,90,.3)'); V(PL([5, -3, 10, 3, 5, 3]), sk, 7, 1, 3, 1);
  mouthX(o, 3.4, 6, 6, 'snarl'); if (o.mood <= 1) for (const x of [1.6, 5]) F(PL([x, 6.2, x + 1.2, 6.2, x + .6, 9]), '#fffdf4');
  g.restore();
  const h = limb(8, -86, .3 - 1.6 * u - open * .6, 12, -.4, 11, 3.2, 2.6, 2.2, suit); for (const t of [-.4, 0, .4]) { g.save(); g.translate(h[0], h[1]); g.rotate(h[2] + t); taper(0, 0, 6, 0, 1, .7, sk, 1); g.restore(); } V(E(h[0], h[1], 2.6, 2.6), sk, h[0], h[1], 3, 1.2);
  g.restore();
}
function medusaD(o) {                                           // la Medusa: coda di serpente al posto delle gambe, capelli di serpenti vivi, corazza di bronzo, occhi che pietrificano
  const sk = '#a8c890', sn = '#4f8a3a', snb = '#d8d890', br = '#c8903a', u = o.u, w = o.walking ? 1 : 0, cast = o.mood === 2 || o.mood === 3;
  const pts = []; for (let i = 0; i <= 16; i++) { const t = i / 16, x = -4 - t * 34 + Math.sin(t * 5 + o.t * 3 * (w ? 2 : 1)) * 5 * t, y = -36 + t * 34 + Math.sin(t * 3) * 2; pts.push([x, Math.min(y, -2 - t * 2), 9 - t * 6]); }
  const tail = new Path2D(); pts.forEach((q, i) => i ? tail.lineTo(q[0], q[1] - q[2]) : tail.moveTo(q[0], q[1] - q[2])); for (let i = 16; i >= 0; i--) tail.lineTo(pts[i][0], pts[i][1] + pts[i][2]); tail.closePath();
  V(SP('M-12,-12 Q4,-20 18,-10 Q20,0 6,0 L-16,0 Q-20,-6 -12,-12Z'), sn, 0, -6, 16); V(tail, sn, -20, -20, 26);
  g.save(); g.clip(tail); for (let i = 1; i < 16; i++) L(SP(`M${pts[i][0]},${pts[i][1] + pts[i][2] * .2} L${pts[i][0]},${pts[i][1] + pts[i][2]}`), snb, 1.6); g.restore();
  g.save(); g.translate(0, w ? -Math.abs(Math.sin(o.ph)) * 2 : 0); g.rotate(-.04 + (u > 0 ? -.08 * u : .12 * -u));
  taper(0, -14, 2, -40, 10, 8, sn);
  const tor = SP('M-9,-68 Q0,-72 9,-68 L8,-40 Q0,-36 -8,-40Z'); V(tor, sk, 0, -54, 14);
  V(SP('M-9,-62 Q0,-56 9,-62 L8,-50 Q0,-46 -8,-50Z'), br, 0, -56, 9, 1.6); for (const x of [-3, 3]) L(E(x, -56, 3, 2.6), dk(br, .35), 1);
  V(SP('M-9,-44 L9,-44 L10,-38 L-10,-38Z'), br, 0, -41, 10, 1.4);
  const bh = limb(-7, -64, 2.0 + Math.sin(o.t * 1.6) * .1, 10, -.6, 9, 2.8, 2.2, 1.8, dk(sk, .2));
  g.save(); g.translate(1, -80); g.rotate(Math.sin(o.t * 1.6) * .05 + (o.mood === 4 ? .22 : 0)); g.scale(1.1, 1.1);
  const snake = (sx, sy, a, l, ph) => { const p2 = []; for (let i = 0; i <= 6; i++) { const k = i / 6, aa = a + Math.sin(o.t * 4 + ph + k * 3) * .4 * k; p2.push([sx + Math.cos(aa) * l * k + Math.sin(o.t * 3 + ph) * 2 * k, sy + Math.sin(aa) * l * k]); }
    const s = SP('M' + p2.map(q => q.join(',')).join(' L')); L(s, dk(sn, .6), 5.4); L(s, sn, 3.4); const e = p2[6], e2 = p2[5], ha = Math.atan2(e[1] - e2[1], e[0] - e2[0]); g.save(); g.translate(e[0], e[1]); g.rotate(ha); V(E(1.5, 0, 3.6, 2.6), sn, 1.5, 0, 3, 1.2); F(E(2, -1, .8, .8), '#ffd02a'); if (Math.sin(o.t * 5 + ph) > .5) L(SP('M5,0 l3,0 l1,-1 m-1,1 l1,1'), '#e8384a', .8); g.restore(); };
  for (const [sx, sy, a, l, ph] of [[-8, -6, -2.6, 16, 0], [-6, -11, -2.1, 15, 1], [-1, -13, -1.7, 14, 2], [5, -12, -1.3, 13, 3], [-10, 0, -2.9, 14, 4], [-9, 6, 2.8, 12, 5]]) snake(sx, sy, a, l, ph);
  V(SP('M-7,-4 Q-8,-13 1,-13 Q9,-12 9,-3 Q9,7 2,10 Q-6,8 -7,-4Z'), sk, 1, -2, 10);
  eyesX(o, sk, [[0, -3, 2.8, 1], [6.2, -3.2, 2.3, -1]], cast ? 'glow' : 'slit', cast ? '#fff36a' : '#ffd02a'); browsX(o, [[0, -7.2, 5.4, 1], [6.2, -7, 4.4, -1]], '#2a4a2a', 1.6, 'arch');
  V(PL([5, -2, 10, 3, 5, 3]), sk, 7, 1, 3, 1); mouthX(o, 3.6, 6.4, 5.4, 'snarl', { lips: '#3a5a2a' });
  g.restore();
  const h = limb(7, -64, -.3 - u * .6 - (cast ? .5 : 0), 10, -.4, 9, 2.8, 2.2, 1.8, sk); if (cast) glowB(h[0], h[1], 14, 'rgba(255,240,120,.6)');
  g.restore();
  if (cast) { g.save(); g.globalCompositeOperation = 'lighter'; const gr = g.createLinearGradient(10, -84, 90, -70); gr.addColorStop(0, 'rgba(255,240,120,.5)'); gr.addColorStop(1, 'rgba(255,240,120,0)'); g.fillStyle = gr; g.beginPath(); g.moveTo(8, -86); g.lineTo(90, -100); g.lineTo(90, -60); g.closePath(); g.fill(); g.restore(); }
}
function pescecaneD(o) {                                        // il Pescecane di Pinocchio: enorme, schiena scura, pancia chiara, bocca gigante piena di denti, occhietto, nuota su un'onda
  const bk = '#3a4a6a', bel = '#d8dce8', u = o.u, w = o.walking ? 1 : 0, sw = Math.sin(o.t * 2 + (w ? o.ph : 0)), open = o.mood === 3 ? .9 : o.mood === 2 ? .3 : Math.max(0, Math.sin(o.t * .7) - .85) * 3;
  const wave = (y, a, c) => { const p = SP(`M-70,0 Q-50,${y + Math.sin(o.t * 3 + a) * 3} -30,${y + 4} Q-10,${y - 4 + Math.sin(o.t * 3 + a + 1) * 3} 10,${y + 4} Q30,${y - 4 + Math.sin(o.t * 3 + a + 2) * 3} 50,${y + 4} Q60,${y} 70,0Z`); V(p, c, 0, y / 2, 60, 1.8); };
  wave(-10, 0, '#2a6a9a');
  g.save(); g.translate(0, -20 + sw * 3); g.rotate(sw * .04 + (u > 0 ? -.06 * u : .08 * -u));
  const tl = SP(`M-50,-6 Q-64,${-16 + sw * 6} -76,${-28 + sw * 8} Q-72,${-10 + sw * 4} -78,${6 + sw * 4} Q-64,${2 + sw * 3} -50,4Z`); V(tl, bk, -64, -6, 16);
  V(SP('M-8,-28 Q4,-50 14,-52 Q12,-40 14,-28Z'), bk, 6, -38, 12);
  const body = SP('M-54,-6 Q-50,-30 -10,-32 Q30,-34 50,-20 Q58,-12 56,-4 L50,6 Q20,14 -10,12 Q-46,10 -54,-6Z'); V(body, bk, 0, -10, 52);
  g.save(); g.clip(body); F(SP('M-54,0 Q-20,14 50,4 L56,14 L-56,14Z'), bel); for (let i = 0; i < 5; i++) L(SP(`M${-40 + i * 9},2 Q${-38 + i * 9},8 ${-42 + i * 9},12`), dk(bel, .2), 1.2); g.restore();
  V(SP('M-6,4 Q-14,12 -20,20 Q-10,16 0,8Z'), dk(bk, .15), -10, 12, 8, 1.6);
  g.save(); g.translate(28, -8);
  g.save(); g.rotate(open * .5); const jaw = SP('M-6,4 L32,6 Q30,12 18,14 Q0,14 -6,8Z'); V(jaw, bel, 12, 9, 20, 2); for (let x = 0; x < 30; x += 4) F(PL([x, 5, x + 2, 0, x + 4, 5]), '#fffdf4'); g.restore();
  if (open > .1) { F(SP(`M-4,2 L34,${2 - open * 6} L30,${8 + open * 18} L-4,8Z`), '#4a0e1a'); F(E(10, 6 + open * 8, 10, 3 + open * 4), '#a82a3a'); }
  g.save(); g.rotate(-open * .3); V(SP('M-10,-22 Q16,-26 34,-6 Q36,0 32,3 L-6,4Z'), bk, 12, -8, 24); for (let x = 2; x < 32; x += 4) F(PL([x, 2.4, x + 2, 8, x + 4, 2.4]), '#fffdf4'); L(SP('M-4,3 L33,2'), INK, 1.6);
  eyesX(o, bk, [[10, -12, 3, 1]], 'beady', INK); browsX(o, [[10, -17, 7, 1]], '#1a2030', 2.6, 'thick');
  for (const x of [-4, -1, 2]) L(SP(`M${x},-6 q1,4 0,8`), dk(bk, .4), 1.2);
  g.restore(); g.restore();
  g.restore();
  wave(-4, 2, '#3a8ac8'); for (let i = 0; i < 4; i++) { const k = (o.t + i / 4) % 1; g.save(); g.globalAlpha = 1 - k; F(E(-40 + i * 26 + k * 6, -6 - k * 14, 2, 2), '#e8f8ff'); g.restore(); }
}
function alberichD(o) {                                         // Alberich: nano curvo e avido, sacco di monete più grande di lui, elmo d'oro con le ali, barba rossa, anello che brilla
  const sk = '#e8b890', tun = '#4a5a3a', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3), sw = Math.sin(o.ph), gold = '#f2c14e';
  g.save(); g.translate(0, b); g.rotate(.2);
  V(SP('M-30,-36 Q-36,-58 -20,-66 Q-6,-70 2,-58 Q6,-44 -2,-32 Q-14,-26 -30,-36Z'), '#a8845a', -16, -48, 22); L(SP('M-18,-66 Q-10,-62 -4,-66'), '#6a4a2a', 2); for (const [x, y] of [[-20, -50], [-12, -42], [-24, -40]]) { V(E(x, y, 2.6, 2.6), gold, x, y, 3, 1); } F(E(-6, -66, 3, 3), gold, '#ffe060');
  g.restore();
  for (const [x, off, c] of [[-4, Math.PI, dk('#5a4030', .2)], [5, 0, '#5a4030']]) { const f = legB(x, -18, 8, 8, 4.6, 3.6, 3, o, off, c, .7); V(SP(`M${f[0] - 3},${f[1] - 3} Q${f[0] + 6},${f[1] - 5} ${f[0] + 8},${f[1]} L${f[0] - 3},${f[1]}Z`), '#2a1a14', f[0] + 2, f[1] - 1, 5, 1.2); }
  g.save(); g.translate(0, b); g.rotate(.28 + w * .08 + (u > 0 ? -.1 * u : .14 * -u));
  limb(-6, -32, -2.3, 8, -.9, 7, 3.6, 3, 2.6, dk(sk, .2));
  const bd = SP('M-8,-36 Q2,-40 10,-34 Q14,-24 10,-16 Q0,-12 -10,-16 Q-12,-26 -8,-36Z'); V(bd, tun, 0, -26, 14); F(SP('M-11,-20 L11,-20 L11,-16 L-11,-16Z'), '#3a2a1a');
  g.save(); g.translate(6, -44); g.rotate(-.2 + Math.sin(o.t * 2.4) * .06 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0)); g.scale(1.1, 1.1);
  V(E(0, 0, 9, 8.6), sk, 0, 0, 9);
  const beard = SP(`M-9,0 Q-12,12 -4,18 Q2,${22 + Math.sin(o.t * 3)} 6,17 Q12,14 12,4 Q6,6 1,5 Q-4,6 -9,0Z`); V(beard, '#c84a1a', 1, 10, 11, 1.6); L(SP('M-4,6 Q-2,12 -4,16 M4,8 Q6,12 5,16'), dk('#c84a1a', .3), 1);
  eyesX(o, sk, [[-1, -2, 2.8, 1], [5.6, -2.2, 2.3, -1]], 'lidded', '#5a3a1a'); browsX(o, [[-1, -6, 5.6, 1], [5.6, -6, 4.4, -1]], '#c84a1a', 2.2, 'bushy');
  V(E(8, 2, 3.6, 3), dk(sk, .06), 8, 2, 3, 1.2); mouthX(o, 3, 8, 6, 'grin');
  V(SP('M-10,-2 Q-11,-13 1,-14 Q12,-13 11,-2 Q0,-6 -10,-2Z'), gold, 0, -8, 12); V(E(1, -14, 2.4, 2.4), gold, 1, -14, 2, 1);
  for (const sx of [-1, 1]) V(SP(`M${sx * 9},-6 Q${sx * 18},-14 ${sx * 20},-24 Q${sx * 14},-18 ${sx * 13},-16 Q${sx * 14},-12 ${sx * 8},-9Z`), '#f4f0ea', sx * 14, -14, 7, 1.4);
  g.restore();
  const h = limb(6, -32, .4 - 1.6 * u, 8, -.6, 7, 3.6, 3, 2.6, sk); V(E(h[0], h[1], 3.6, 3.6), sk, h[0], h[1], 3.6, 1.2);
  g.save(); g.strokeStyle = gold; g.lineWidth = 1.8; g.beginPath(); g.arc(h[0] + 1, h[1] - 1, 2, 0, 7); g.stroke(); g.restore(); glowB(h[0] + 1, h[1] - 1, 8 + Math.sin(o.t * 5) * 2, 'rgba(255,220,80,.7)');
  g.restore();
}
function trollspD(o) {                                          // Troll dello Specchio: diavoletto magrissimo argentato, orecchie a punta, alucce, sorriso storto, scheggia di specchio
  const sk = '#b8bcd0', skd = dk(sk, .28), u = o.u, f = Math.sin(o.t * 14), fly = -40 + Math.sin(o.t * 2.6) * 5;
  g.save(); g.translate(u < 0 ? -u * 8 : 0, fly); g.rotate(.18 + (u > 0 ? -.12 * u : .2 * -u));
  const wing = (a, col) => { g.save(); g.translate(-4, -26); g.rotate(a); V(SP('M0,0 Q-8,-14 -18,-14 Q-14,-8 -16,-3 Q-10,-4 -9,2 Q-4,0 0,4Z'), col, -8, -5, 10, 1.6); g.restore(); };
  wing(-.2 + f * .4, '#7a7a9a');
  const tl = SP(`M-4,-12 Q-16,-4 -18,${-14 + Math.sin(o.t * 4) * 4} Q-20,-24 -12,-26`); L(tl, dk(sk, .7), 3.6); L(tl, sk, 1.8);
  for (const [x, c] of [[-2, skd], [3, sk]]) { const a = Math.sin(o.t * 3 + x) * .3; const kx = x + 4 + Math.sin(a) * 4; taper(x, -12, kx, -2, 2.4, 1.6, c); taper(kx, -2, kx - 3, 8, 1.6, 1.2, c); }
  limb(-4, -26, 2.0, 9, -.8, 8, 2, 1.6, 1.3, skd);
  const bd = SP('M-5,-28 Q2,-32 6,-26 Q8,-18 5,-12 Q0,-10 -4,-12 Q-7,-20 -5,-28Z'); V(bd, sk, 0, -20, 10); for (const y of [-24, -20, -16]) L(SP(`M-3,${y} Q1,${y + 1} 5,${y}`), skd, .8);
  g.save(); g.translate(4, -38); g.rotate(Math.sin(o.t * 2.6) * .08 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0));
  for (const [sx, c] of [[-1, skd], [1, sk]]) V(SP(`M${sx * 6},-2 L${sx * 18},-14 L${sx * 9},2Z`), c, sx * 10, -5, 6, 1.4);
  const hd = SP('M-8,-2 Q-9,-11 0,-12 Q10,-11 10,-2 Q11,6 4,12 Q0,14 -4,11 Q-9,6 -8,-2Z'); V(hd, sk, 1, -1, 11);
  for (const sx of [-1, 1]) V(SP(`M${sx * 3},-10 Q${sx * 5},-18 ${sx * 2},-22 Q${sx * 7},-16 ${sx * 6},-9Z`), '#8a8ab0', sx * 4, -15, 4, 1.2);
  eyesX(o, sk, [[-1, -2, 3.2, 1], [6, -2.4, 2.6, -1]], 'almond', '#5ae0ff'); browsX(o, [[-1, -6.6, 5.4, 1], [6, -6.4, 4.4, -1]], '#3a3a5a', 1.8, 'arch');
  mouthX(o, 3, 6, 9, 'smirk'); V(PL([2, 10, 4, 15, 6, 10]), skd, 4, 12, 2, 1);
  g.restore();
  const h = limb(5, -26, .2 - u * 1.2, 9, -.6, 8, 2, 1.6, 1.3, sk);
  g.save(); g.translate(h[0], h[1]); g.rotate(-.4 + Math.sin(o.t * 2) * .1); const sh = PL([0, -2, 12, -10, 16, -4, 8, 4]); const gr = g.createLinearGradient(0, -10, 16, 4); gr.addColorStop(0, '#e8f4ff'); gr.addColorStop(.5, '#8ab8e8'); gr.addColorStop(1, '#f4faff'); L(sh, '#3a4a6a', 2.4); g.fillStyle = gr; g.fill(sh); F(PL([4, -3, 10, -7, 9, -5]), '#fff'); glowB(10, -4, 10, 'rgba(170,230,255,.5)'); g.restore();
  wing(-.5 - f * .5, '#9a9abf');
  g.restore();
}
function mordredD(o) {                                          // Mordred: cavaliere traditore, armatura nera spigolosa, spallacci a punta, elmo con le corna e la fessura rossa, mantello rosso, spada d'ombra
  const ar = '#2e2a38', ar2 = '#4a4458', cp = '#8a1a2a', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3), sw = Math.sin(o.ph), cw = Math.sin(o.t * 4 + o.ph) * 4;
  g.save(); g.translate(0, b); V(SP(`M-10,-82 Q-28,-60 ${-30 + cw},-18 L${-24 + cw},-14 L${-20 + cw},-20 L${-14 + cw},-12 L-6,-40Z`), cp, -16, -46, 28); g.restore();
  for (const [x, off, c] of [[-6, Math.PI, dk(ar, .2)], [6, 0, ar]]) { const f = legB(x, -42, 19, 19, 7, 5.4, 4.4, o, off, c, .5); V(SP(`M${f[0] - 5},${f[1] - 4} L${f[0] + 9},${f[1] - 3} L${f[0] + 11},${f[1]} L${f[0] - 5},${f[1]}Z`), ar2, f[0] + 3, f[1] - 2, 7, 1.4); }
  g.save(); g.translate(0, b); g.rotate(.06 + w * .06 + (u > 0 ? -.1 * u : .14 * -u));
  const hb = limb(-12, -80, 1.6 + sw * .4 * w, 13, -.5, 12, 6, 4.6, 4, dk(ar, .2));
  const tor = SP('M-16,-84 Q0,-90 16,-84 L14,-56 L8,-44 L-8,-44 L-14,-56Z'); V(tor, ar, 0, -66, 24);
  g.save(); g.clip(tor); L(SP('M0,-86 L0,-46 M-12,-70 L0,-64 L12,-70'), ar2, 1.6); F(SP('M-4,-76 L4,-76 L6,-66 L0,-60 L-6,-66Z'), cp); g.restore();
  V(SP('M-12,-46 L12,-46 L14,-38 L8,-32 L0,-38 L-8,-32 L-14,-38Z'), ar2, 0, -40, 14, 1.6);
  g.save(); g.translate(2, -98); g.rotate(Math.sin(o.t * 1.4) * .04 + (o.mood === 3 ? -.1 : o.mood === 4 ? .22 : 0));
  for (const sx of [-1, 1]) V(SP(`M${sx * 8},-8 Q${sx * 18},-14 ${sx * 16},-26 Q${sx * 12},-16 ${sx * 6},-14Z`), '#c8c4d0', sx * 12, -16, 6, 1.4);
  const hm = SP('M-10,-4 Q-11,-16 0,-17 Q11,-16 11,-4 L12,8 Q0,14 -11,8Z'); V(hm, ar, 0, -2, 15);
  F(SP('M0,-6 L12,-5 L12,-1 L0,-2Z'), '#0e0a12'); const gl = o.mood >= 2 ? 1 : .6 + Math.sin(o.t * 3) * .2; glowB(7, -3.6, 10 * gl, 'rgba(255,40,40,.7)'); F(E(4, -3.6, 1.6, 1), '#ff4a3a', '#ff2a2a'); F(E(9, -3.4, 1.4, .9), '#ff4a3a', '#ff2a2a');
  L(SP('M0,-16 L0,10'), ar2, 1.4); for (const y of [2, 5]) L(SP(`M4,${y} L11,${y}`), ar2, 1.2);
  g.restore();
  for (const [x, c] of [[-14, dk(ar, .15)], [14, ar]]) V(SP(`M${x - 9},-80 Q${x},-92 ${x + 9},-82 L${x + 12 * Math.sign(x)},-90 L${x + 6},-76 Q${x},-74 ${x - 9},-80Z`), c, x, -82, 10, 1.6);
  const h = limb(12, -80, .7 - 1.9 * u, 13, -.4, 12, 6, 4.6, 4, ar);
  atHand(h, -.5, () => { glowB(0, -26, 22, 'rgba(120,40,160,.45)'); V(SP('M-3,0 L-2.6,-44 L0,-52 L2.6,-44 L3,0Z'), '#3a3448', 0, -24, 26, 2); L(SP('M0,-4 L0,-44'), '#a070d0', 1.2); V(SP('M-10,-1 L10,-1 L12,-5 L-12,-5Z'), ar2, 0, -3, 10, 1.4); V(E(0, 6, 3, 3.4), cp, 0, 6, 3, 1.2); });
  V(E(h[0], h[1], 5, 5), ar, h[0], h[1], 5, 1.4);
  g.restore();
}
Object.assign(DRAW, { ciclope: ciclopeD, senzatesta: senzatestaD, dracula: draculaD, medusa: medusaD, pescecane: pescecaneD, alberich: alberichD, trollspecchio: trollspD, mordred: mordredD });
