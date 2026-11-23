// ---------- gruppo 14: i buoni (4) ----------
function wendyD(o) {                                            // Wendy: camicia da notte azzurra lunga fino ai piedi, fiocco blu grande nei capelli castani, pantofole, libro di storie aperto che brilla; tira il ditale (il "bacio" di Peter)
  const nd = '#a8d4f2', nd2 = '#7ab0e0', sk = '#f8dcc4', hair = '#8a5a2a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, thr = u < 0 ? -u : 0, cast = m === 2 || m === 3;
  const b = bobOf(o, 1.8), sw = (w ? Math.sin(o.ph) * 2 : 0) + Math.sin(o.t * 1.8);
  g.save(); g.translate(0, b);
  const sl = f => V(E(f[0] + 2, f[1] - 1.4, 3.6, 2), '#f4a0b8', f[0] + 2, f[1] - 1.4, 3, 1);
  sl(legB(-3, -30, 15, 14, 2.4, 2, 1.8, o, Math.PI, dk(sk, .08), .5)); sl(legB(3, -30, 15, 14, 2.6, 2.2, 2, o, 0, sk, .5));
  V(SP(`M-4,-84 Q-12,-76 -12,-64 Q-12,-56 ${-10 + sw * .3},-52 Q-7,-62 -5,-72Z`), hair, -8, -68, 10, 1.4);
  const hb = limb(-6, -66, 1.2 + Math.sin(o.t * 1.4) * .05, 10, -1.3, 9, 2.4, 2, 1.8, dk(nd, .15));
  const gp = SP(`M-7,-70 Q0,-72 7,-70 Q12,-40 ${15 + sw},-8 Q${8 + sw},-6 ${0 + sw},-8 Q${-8 + sw},-6 ${-15 + sw},-8 Q-12,-40 -7,-70Z`); V(gp, nd, 0, -40, 34);
  g.save(); g.clip(gp); for (const x of [-6, 0, 6]) L(SP(`M${x * .4},-66 Q${x},-36 ${x * 1.6 + sw},-8`), nd2, 1); L(SP(`M${-16 + sw},-12 Q${sw},-9 ${16 + sw},-12`), '#fafaf6', 2); g.restore();
  V(SP('M-6,-72 Q0,-68 6,-72 L5,-66 Q0,-64 -5,-66Z'), '#fafaf6', 0, -69, 6, 1);
  g.save(); g.translate(hb[0] + 4, hb[1] - 4); g.rotate(-.2); const op = cast ? .5 : .15;
  if (cast) glowB(0, -2, 18, 'rgba(255,240,160,.6)');
  V(SP(`M0,0 L-9,${-3 - op * 4} L-9,7 L0,9Z`), '#c8402a', -5, 3, 7, 1.2); V(SP(`M0,0 L9,${-3 - op * 4} L9,7 L0,9Z`), '#c8402a', 5, 3, 7, 1.2);
  F(SP(`M0,1 L-8,${-2 - op * 4} L-8,6 L0,8Z`), '#fafaf0'); F(SP(`M0,1 L8,${-2 - op * 4} L8,6 L0,8Z`), '#fafaf0'); for (const y of [1, 3, 5]) { L(SP(`M-6,${y} l4,.6 M2,${y + .6} l4,-.6`), '#8a8a9a', .6); }
  if (cast) for (let i = 0; i < 4; i++) { const k = (o.t * 1.2 + i / 4) % 1; g.save(); g.globalAlpha = 1 - k; F(SP(`M${-4 + i * 3},${-4 - k * 22} l1,-2.4 l1,2.4 l-1,2.4Z`), '#fff4a0', '#ffd84a'); g.restore(); } g.restore();
  V(E(hb[0], hb[1], 2, 2), dk(sk, .06), hb[0], hb[1], 2, .9);
  g.save(); g.translate(1, -82); g.rotate(m === 3 ? -.1 : m === 4 ? -.24 : Math.sin(o.t * 1.7) * .04);
  const face = SP('M-6,-5 Q-6,-12 1,-12 Q8,-12 8,-5 Q8,2 5,6 Q2,9 -1,8 Q-5,5 -6,-5Z'); V(face, sk, 1, -2, 11);
  V(SP('M-8,5 Q-11,-10 0,-14 Q10,-15 10,-6 Q6,-10 2,-9 Q-2,-8 -5,-4 Q-6,0 -5,6Z'), hair, 0, -5, 11, 1.4);
  V(SP('M-4,-13 Q-12,-20 -14,-11 Q-12,-8 -4,-11 Q-2,-18 6,-19 Q6,-12 -3,-11Z'), '#3a6ac8', -4, -14, 7, 1.2); V(E(-3.4, -12, 2, 2), '#2a4aa8', -3, -12, 2, .7);
  F(E(-2.4, 2, 2, 1.2), 'rgba(250,120,140,.4)');
  eyesX(o, sk, [[.6, -2.4, 2.6, 1], [6.2, -2.6, 2.2, -1]], 'almond', '#3a7ad8'); browsX(o, [[.6, -6.4, 5, 1], [6.2, -6.6, 4, -1]], hair, 1.2, 'arch');
  L(SP('M5.6,-.6 Q7.6,2 5.8,3'), dk(sk, .25), 1); mouthX(o, 3.4, 5, 4.4, cast ? 'oh' : 'smile');
  g.restore();
  const hp = thr ? [16 + thr * 4, -74] : u > 0 ? [0, -78] : [10, -48];
  armTo(5, -66, hp[0], hp[1], 10, 9, 2.4, 2, 1.8, nd, u > 0 ? -1 : 1);
  if (thr) for (let i = 0; i < 2; i++) { const x = hp[0] + 8 + i * 12 * thr, y = hp[1] - 4 - i * 3; V(SP(`M${x - 2.4},${y + 2} L${x - 2},${y - 2} Q${x},${y - 4} ${x + 2},${y - 2} L${x + 2.4},${y + 2}Z`), '#c8ccd8', x, y, 3, .8); }
  V(E(hp[0], hp[1], 2, 2), sk, hp[0], hp[1], 2, .9);
  g.restore();
}

function giglioD(o) {                                           // Giglio Tigrato: principessa delle praterie, trecce nere lunghe, fascia di perline con una piuma, tunica di pelle con le frange e i disegni, mocassini, arco corto; velocissima
  const lea = '#c89060', lea2 = dk(lea, .25), sk = '#d89a70', hair = '#1a1218', u = o.u, m = o.mood, w = o.walking ? 1 : 0, draw = u > 0 ? u : 0;
  const b = bobOf(o, 2.4);
  g.save(); g.translate(0, b); g.rotate(w ? .06 : 0);
  const moc = f => V(SP(`M${f[0] - 3},${f[1] - 3} L${f[0] + 4},${f[1] - 3} Q${f[0] + 8},${f[1] - 2} ${f[0] + 8},${f[1] + 1} L${f[0] - 3},${f[1] + 1}Z`), '#a87040', f[0] + 2, f[1] - 1, 5, 1.1);
  moc(legB(-3, -40, 19, 18, 3, 2.4, 2, o, Math.PI, dk(sk, .12), .65));
  const tun = SP('M-8,-74 Q0,-78 8,-74 Q10,-58 9,-44 L11,-36 L-11,-36 L-9,-44 Q-10,-58 -8,-74Z'); V(tun, lea, 0, -56, 20);
  g.save(); g.clip(tun); F(SP('M-12,-50 L12,-50 L12,-46 L-12,-46Z'), '#c8302a'); for (let x = -10; x < 12; x += 4) { F(PL([x, -50, x + 2, -53, x + 4, -50]), '#2a8ad8'); F(PL([x, -46, x + 2, -43, x + 4, -46]), '#f2c43a'); } g.restore();
  for (let x = -10; x <= 10; x += 2.4) L(SP(`M${x},-36 l${Math.sin(o.t * 4 + x) * .8},5`), lea2, 1.2);
  moc(legB(3, -40, 19, 18, 3.2, 2.6, 2.2, o, 0, sk, .65));
  g.save(); g.translate(2, -86); g.rotate(m === 4 ? -.24 : Math.sin(o.t * 2.2) * .04 - draw * .05);
  for (const s of [-1, 1]) { const bw = Math.sin(o.t * 3 + s) * 1.2 + (w ? Math.sin(o.ph) * 2 : 0); const br = SP(`M${s * 5 - 2},2 Q${s * 6 - 2 + bw},14 ${s * 5 - 2 + bw},26 L${s * 3 - 2 + bw},26 Q${s * 3 - 2},12 ${s * 3 - 2},2Z`); V(br, hair, s * 5, 14, 6, 1.2); for (let y = 6; y < 24; y += 4) L(SP(`M${s * 3.4 - 2 + bw * y / 26},${y} l2,1.4`), '#4a3a4a', .8); V(E(s * 4.2 - 2 + bw, 24, 1.8, 1.4), '#c8302a', s * 4, 24, 1.6, .6); }
  const face = SP('M-6,-5 Q-6,-12 1,-12 Q8,-12 8,-5 Q8,2 5,6 Q2,9 -1,8 Q-5,5 -6,-5Z'); V(face, sk, 1, -2, 11);
  V(SP('M-8,4 Q-10,-11 1,-13 Q10,-13 10,-5 Q5,-10 -1,-9 Q-5,-6 -5,4Z'), hair, 0, -6, 11, 1.4);
  L(SP('M-8,-7 Q1,-12 10,-7'), '#c8302a', 2.4); for (let x = -6; x < 9; x += 3) F(E(x, -8.4 - Math.sin((x + 6) / 15 * Math.PI) * 1.6, .8, .8), x % 2 ? '#f2c43a' : '#2a8ad8');
  V(SP('M-6,-8 Q-10,-20 -6,-26 Q-4,-18 -4,-9Z'), '#f4f2ec', -6, -16, 5, 1); F(SP('M-6,-24 Q-5,-20 -5,-18 L-6,-26Z'), '#3a2a2a');
  eyesX(o, sk, [[.6, -2.4, 2.4, 1], [6.2, -2.6, 2, -1]], 'almond', '#3a2a1a'); browsX(o, [[.6, -6.4, 5, 1], [6.2, -6.6, 4, -1]], hair, 1.4, 'arch');
  L(SP('M5.6,-.6 Q7.6,2 5.8,3'), dk(sk, .25), 1); mouthX(o, 3.4, 5, 4.4, draw > .5 ? 'frown' : 'smile', { lips: '#a8504a' });
  g.restore();
  const bx = 22 - draw * 2, by = -64;
  armTo(6, -72, bx, by, 9, 9, 2.6, 2.2, 1.9, sk, -1); V(E(bx, by, 2.2, 2.2), sk, bx, by, 2.2, 1);
  g.save(); g.translate(bx, by); const bend = draw * 4;
  L(SP(`M0,-20 Q${10 + bend},-10 3,0 Q${10 + bend},10 0,20`), dk('#8a5a30', .7), 5); L(SP(`M0,-20 Q${10 + bend},-10 3,0 Q${10 + bend},10 0,20`), '#c8945a', 2.6); for (const y of [-14, 14]) L(SP(`M${y > 0 ? 3 : 3},${y - 2} l2,4`), '#c8302a', 1.6); V(E(3, 0, 2.4, 3.6), '#c8302a', 3, 0, 3, .9);
  const sx = -1 - draw * 16; L(SP(`M0,-20 L${sx},0 L0,20`), '#f4f0e0', 1);
  if (draw > .05) { L(SP(`M${sx},0 L14,0`), '#6a4a2a', 1.4); V(PL([14, -2, 18, 0, 14, 2]), '#3a3a4a', 16, 0, 2, .7); F(PL([sx, 0, sx + 3, -2.4, sx + 5, 0, sx + 3, 2.4]), '#2a8ad8'); }
  g.restore();
  armTo(-4, -72, bx - 1 - draw * 16, by, 9, 9, 2.6, 2.2, 1.9, dk(sk, .1), 1); V(E(bx - 1 - draw * 16, by, 2.2, 2.2), sk, bx - 1 - draw * 16, by, 2.2, 1);
  g.restore();
}

function cappellaioD(o) {                                       // il Cappellaio Matto: cilindro enorme e storto col cartellino 10/6, capelli arancioni sparati, papillon gigante a pois, giacca verde coi rattoppi, tazza di tè in mano che lancia
  const coat = '#3a8a5a', hat = '#5a4a6a', sk = '#f8e0d0', hair = '#f2803a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, thr = u < 0 ? -u : 0;
  const b = bobOf(o, 2.6), wob = Math.sin(o.t * 2.8) * .06 + (w ? Math.sin(o.ph) * .08 : 0);
  g.save(); g.translate(0, b); g.rotate(wob * .5);
  const shoe = (f, col) => V(SP(`M${f[0] - 3},${f[1] - 4} L${f[0] + 4},${f[1] - 4} Q${f[0] + 11},${f[1] - 4} ${f[0] + 11},${f[1] + 1} L${f[0] - 3},${f[1] + 1}Z`), col, f[0] + 3, f[1] - 2, 7, 1.2);
  shoe(legB(-3, -42, 20, 20, 3.4, 2.8, 2.4, o, Math.PI, '#c8a868', .7), '#c8302a');
  const hb = limb(-7, -76, 1.6 + Math.sin(o.t * 2) * .2, 11, -.9, 10, 3, 2.6, 2.2, dk(coat, .25));
  g.save(); g.translate(hb[0], hb[1]); V(SP('M-5,-2 L5,-2 L4,4 Q0,6 -4,4Z'), '#fafaf6', 0, 1, 5, 1); L(E(6, 1, 2, 2), '#fafaf6', 1.4); F(E(0, -1.6, 4.4, 1.2), '#8a5a2a'); V(E(0, 6, 7, 1.6), '#fafaf6', 0, 6, 6, 1); g.restore();
  V(E(hb[0], hb[1], 2.4, 2.4), dk(sk, .06), hb[0], hb[1], 2.4, 1);
  const tor = SP('M-9,-78 Q0,-82 9,-78 Q12,-60 10,-46 L14,-30 L-14,-30 L-10,-46 Q-12,-60 -9,-78Z'); V(tor, coat, 0, -56, 24);
  g.save(); g.clip(tor); F(SP('M-4,-78 L4,-78 L3,-48 L-3,-48Z'), '#f2d860'); for (let y = -74; y < -50; y += 5) F(E(0, y, 1, 1), '#c8302a'); const pt = SP('M-10,-42 L-4,-43 L-4,-36 L-10,-35Z'); F(pt, '#c8508a'); L(pt, dk(coat, .5), .7); L(SP('M4,-62 L10,-60 M4,-58 L10,-56'), '#2a5a3a', 1); g.restore();
  shoe(legB(3, -42, 20, 20, 3.6, 3, 2.6, o, 0, '#e0c890', .7), '#2a6ac8');
  g.save(); g.translate(1, -78); g.rotate(Math.sin(o.t * 3) * .08); V(SP('M0,0 L-9,-5 L-10,4 Z'), '#c8302a', -6, 0, 6, 1.2); V(SP('M0,0 L9,-5 L10,4 Z'), '#c8302a', 6, 0, 6, 1.2); V(E(0, 0, 2.4, 2.2), '#a8202a', 0, 0, 2.4, 1); for (const [x, y] of [[-6, -1], [-7, 2], [6, -1], [7, 2]]) F(E(x, y, .9, .9), '#fafaf6'); g.restore();
  g.save(); g.translate(2, -90); g.rotate(m === 3 ? -.1 : m === 4 ? -.24 : wob);
  for (let i = 0; i < 6; i++) { const a = 2.4 + i * .36, l = 9 + (i % 2) * 4; V(SP(`M${Math.cos(a) * 4},${Math.sin(a) * 4 - 2} L${Math.cos(a) * l},${Math.sin(a) * l - 2} L${Math.cos(a + .3) * 5},${Math.sin(a + .3) * 5 - 2}Z`), hair, Math.cos(a) * 7, Math.sin(a) * 7, 5, 1.1); }
  const face = SP('M-6,-6 Q-6,-12 1,-12 Q9,-12 9,-5 Q9,3 6,7 Q3,10 0,9 Q-5,6 -6,-6Z'); V(face, sk, 1, -2, 12);
  eyesX(o, sk, [[.4, -2.6, 2.8, 1], [6.8, -3, 2.4, -1]], 'wide', '#4ab06a'); browsX(o, [[.4, -7, 5.4, 1], [6.8, -7.4, 4.4, -1]], hair, 1.8, 'arch');
  V(SP('M6,-1 Q12,1 8,4 L6,3Z'), dk(sk, .06), 8, 1, 3, 1); F(E(-2.6, 2, 1.8, 1.2), 'rgba(230,110,140,.5)');
  mouthX(o, 4, 5.4, 7, m === 4 ? 'oh' : 'grin');
  g.save(); g.translate(2, -10); g.rotate(-.2 + Math.sin(o.t * 2.4) * .06); V(SP('M-12,0 Q0,-3 13,0 Q0,3 -12,0Z'), dk(hat, .1), 0, 0, 12, 1.4);
  const ht = SP('M-7,-1 L-9,-26 Q0,-29 10,-26 L8,-1Z'); V(ht, hat, 0, -13, 14, 1.6); F(SP('M-7.6,-6 L8.4,-6 L8.2,-2 L-7.4,-2Z'), '#c8508a');
  g.save(); g.translate(5, -6); g.rotate(.2); V(SP('M0,-4 L9,-4 L9,4 L0,4Z'), '#fafaf0', 4, 0, 5, .9); L(SP('M2,-1.4 l1,0 m1,0 l0,3 M5.6,-1.4 l1.6,0 l0,3 l-1.6,0 l0,-3'), INK, .7); g.restore();
  g.restore();
  g.restore();
  const hp = thr ? [18 + thr * 4, -80] : u > 0 ? [0, -84] : [12, -56];
  armTo(6, -76, hp[0], hp[1], 11, 10, 3, 2.6, 2.2, coat, u > 0 ? -1 : 1);
  if (!thr) { g.save(); g.translate(hp[0] + 2, hp[1] - 4); V(SP('M-4,-3 L4,-3 L3,3 Q0,5 -3,3Z'), '#f4c0d8', 0, 0, 4, 1); L(E(5, 0, 1.6, 1.6), '#f4c0d8', 1.2); F(E(0, -2.6, 3.6, .9), '#8a5a2a'); for (let i = 0; i < 2; i++) { const k = (o.t * .8 + i / 2) % 1; g.save(); g.globalAlpha = (1 - k) * .6; L(SP(`M${-1 + i * 2},${-4 - k * 10} q2,-3 0,-6`), '#fafaf6', 1.2); g.restore(); } g.restore(); }
  else { const x = hp[0] + 10 + thr * 20, y = hp[1] - 6; g.save(); g.translate(x, y); g.rotate(o.t * 9); V(SP('M-4,-3 L4,-3 L3,3 Q0,5 -3,3Z'), '#f4c0d8', 0, 0, 4, 1); g.restore(); for (let i = 0; i < 4; i++) F(E(x - 6 - i * 3, y + i, 1, 1), '#c88a4a'); }
  V(E(hp[0], hp[1], 2.4, 2.4), sk, hp[0], hp[1], 2.4, 1);
  g.restore();
}

function brucaliffoD(o) {                                       // il Brucaliffo: bruco azzurro grassottello seduto sul fungo rosso a pois che cammina, occhiali a mezzaluna, pipa lunga e ricurva, anelli di fumo colorati che confondono i nemici
  const bl = '#5ab0e8', bld = dk(bl, .3), u = o.u, m = o.mood, w = o.walking ? 1 : 0, smoke = m === 2 || m === 3 || u !== 0;
  const b = w ? -Math.abs(Math.sin(o.ph)) * 2 : 0;
  for (let i = 0; i < (smoke ? 5 : 3); i++) { const k = (o.t * (smoke ? .8 : .4) + i / (smoke ? 5 : 3)) % 1; g.save(); g.globalAlpha = (1 - k) * .75; L(E(26 + k * (smoke ? 50 : 16), -96 - k * 26, 4 + k * 8, 2.6 + k * 4), ['#c8a8f0', '#a8e0f0', '#f0c8e8'][i % 3], 2.2); g.restore(); }
  g.save(); g.translate(0, b);
  for (const [x, off] of [[-10, 0], [8, Math.PI]]) { const a = w ? Math.sin(o.ph * 1.4 + off) * .4 : 0; taper(x, -14, x + Math.sin(a) * 6, 0, 3, 2.6, '#e8dcc0'); }
  const st = SP('M-8,-36 Q-10,-20 -10,-8 Q0,-4 10,-8 Q10,-20 8,-36Z'); V(st, '#f4ead4', 0, -22, 14, 1.6);
  const cap = SP('M-30,-34 Q-28,-56 0,-58 Q28,-56 30,-34 Q0,-28 -30,-34Z'); V(cap, '#d8302a', 0, -44, 30, 1.8);
  g.save(); g.clip(cap); for (const [x, y, r] of [[-18, -44, 4], [-4, -52, 3.4], [12, -46, 4.4], [22, -38, 2.6], [-24, -36, 2.4]]) F(E(x, y, r, r * .8), '#fafaf0'); g.restore();
  const wob = Math.sin(o.t * 2) * 2;
  for (let i = 4; i >= 0; i--) { const x = -18 + i * 7, y = -60 - Math.sin(i / 4 * Math.PI) * 4 - i * 3 + (i === 4 ? wob : 0); V(E(x, y, 7 - i * .2, 6.4), i % 2 ? bl : lt(bl, .06), x, y, 7, 1.6); for (const s of [-1, 1]) L(SP(`M${x + s * 2},${y + 5} l${s},4`), bld, 1.6); }
  g.save(); g.translate(12 + wob * .3, -84 + wob); g.rotate(-.2 + Math.sin(o.t * 1.6) * .05);
  V(E(0, 4, 7, 9), bl, 0, 4, 8, 1.6); F(E(2, 8, 4, 5), lt(bl, .2));
  for (const s of [-1, 1]) limb(s * 3 - 2, 2, s > 0 ? .4 : 2.6, 5, s > 0 ? -1 : 1, 4, 1.8, 1.5, 1.3, s > 0 ? bl : bld);
  g.save(); g.translate(2, -10); g.rotate(m === 4 ? -.2 : 0);
  V(E(0, 0, 8.4, 7.6), bl, 0, 0, 8); L(SP('M-2,-7 Q-6,-14 -10,-14 M2,-7 Q4,-14 8,-15'), bld, 1.4); V(E(-10, -14, 1.6, 1.6), bld, -10, -14, 1.6, .7); V(E(8, -15, 1.6, 1.6), bld, 8, -15, 1.6, .7);
  eyesX(o, bl, [[0, -1, 2.4, 1], [6, -1.2, 2, -1]], 'lidded', '#3a2a5a'); L(SP('M-2.6,1 Q0,2.6 2.6,1 M3.6,.8 Q6,2.4 8.4,.8 M2.6,1 L3.6,.8'), '#c8a050', 1.2);
  mouthX(o, 4, 4.4, 4, 'smirk');
  g.restore();
  g.save(); g.translate(8, -4); g.rotate(-.3); L(SP('M0,0 Q10,6 16,-4'), '#7a4a2a', 2.4); V(SP('M14,-4 L20,-4 L19,-10 L15,-10Z'), '#c8a050', 17, -7, 4, 1); if (smoke) glowB(17, -10, 8, 'rgba(255,170,90,.6)'); g.restore();
  g.restore();
  g.restore();
}

function lepreD(o) {                                            // la Lepre Marzolina: lepre marrone magra e scattante, orecchie lunghissime (una piegata), panciotto a quadri, papillon, orologio da taschino che penzola, salta e scalcia
  const fur = '#b8885a', fd = dk(fur, .25), bel = '#f2e2c8', u = o.u, m = o.mood, w = o.walking ? 1 : 0, kick = u < 0 ? -u : 0, hurt = m === 4;
  const jp = w ? Math.max(0, Math.sin(o.ph * 1.4)) : 0, b = -jp * 10;
  g.save(); g.translate(0, b); g.rotate(-jp * .15 + kick * -.2);
  const foot = (f, col) => V(SP(`M${f[0] - 3},${f[1] - 3} Q${f[0] + 6},${f[1] - 5} ${f[0] + 12},${f[1] - 2} Q${f[0] + 13},${f[1] + 1} ${f[0] + 9},${f[1] + 1} L${f[0] - 3},${f[1] + 1}Z`), col, f[0] + 4, f[1] - 1, 8, 1.3);
  V(E(-12, -30, 4, 4), '#fafaf6', -12, -30, 4, 1.2);
  foot(legB(-4, -30, 15, 15, 4.2, 3, 2.4, o, Math.PI, fd, .9, 1.4), fd);
  const hb = limb(-5, -56, 1.9 + (w ? Math.sin(o.ph * 1.4) * .6 : 0), 9, -.4, 8, 2.4, 2, 1.8, fd); V(E(hb[0], hb[1], 2.2, 2), fd, hb[0], hb[1], 2.2, 1);
  const body = SP('M-8,-58 Q0,-62 8,-58 Q12,-44 9,-28 L-9,-28 Q-12,-44 -8,-58Z'); V(body, fur, 0, -44, 16); g.save(); g.clip(body); F(E(3, -40, 5, 12), bel); g.restore();
  const vest = SP('M-8,-56 L-1,-56 L-2,-36 L-9,-38Z M8,-56 L2,-56 L3,-36 L9,-38Z'); V(vest, '#c8402a', 0, -46, 12, 1.2); g.save(); g.clip(vest); for (let y = -56; y < -36; y += 3) L(SP(`M-10,${y} L10,${y}`), '#f2c43a', .7); for (let x = -9; x < 10; x += 3) L(SP(`M${x},-56 L${x},-36`), '#f2c43a', .7); g.restore();
  g.save(); g.translate(5, -40); g.rotate(Math.sin(o.t * 3) * .4); L(SP('M0,0 L0,6'), '#e8c040', .8); V(E(0, 8, 2.6, 2.6), '#e8c040', 0, 8, 2.6, .8); F(E(0, 8, 1.8, 1.8), '#fafaf0'); L(SP(`M0,8 L0,6.6 M0,8 L1.2,8.4`), INK, .5); g.restore();
  V(SP('M-4,-58 L0,-56 L4,-58 L4,-54 L0,-56 L-4,-54Z'), '#2a6ac8', 0, -56, 4, .8);
  foot(legB(4, -30, 15, 15, 4.4, 3.2, 2.6, o, 0, fur, .9, 1.4), fur);
  g.save(); g.translate(3, -68); g.rotate(m === 3 ? -.1 : hurt ? -.26 : Math.sin(o.t * 3) * .05);
  const ew = Math.sin(o.t * 2.6) * .1;
  g.save(); g.translate(-3, -6); g.rotate(-.35 + ew); V(SP('M-3,0 Q-6,-14 -2,-26 Q3,-14 3,0Z'), fur, 0, -13, 6, 1.4); F(SP('M-1.4,-2 Q-3.4,-14 -1.4,-22 Q1,-14 1.4,-2Z'), '#f4b8c0'); g.restore();
  g.save(); g.translate(2, -7); g.rotate(.15 - ew); V(SP('M-3,0 Q-4,-10 0,-16 L8,-24 Q4,-12 3,0Z'), fur, 2, -10, 6, 1.4); F(SP('M-1.4,-2 Q-2,-10 0,-14 L5,-20 Q2,-10 1.4,-2Z'), '#f4b8c0'); g.restore();
  const hd = SP('M-7,-3 Q-7,-11 1,-11 Q10,-10 12,-1 Q13,6 6,8 Q-4,9 -7,-3Z'); V(hd, fur, 2, -1, 11);
  V(E(8, 3, 4.6, 3.4), bel, 8, 3, 4, 1); F(E(11.6, 1, 1.6, 1.2), '#e86a8a');
  eyesX(o, fur, [[1, -3, 2.8, 1], [6.6, -3.4, 2.2, -1]], 'wide', '#c84a2a'); browsX(o, [[1, -7, 4.4, 1], [6.6, -7.4, 3.6, -1]], fd, 1.4, 'thick');
  mouthX(o, 8, 5.6, 4, 'gap'); L(SP('M12,3 l6,-2 M12,3.6 l6,1'), '#fafaf6', .6);
  g.restore();
  const hp = kick ? [16, -54] : [10, -44];
  armTo(5, -56, hp[0], hp[1], 9, 8, 2.4, 2, 1.8, fur, 1); V(E(hp[0], hp[1], 2.2, 2), fur, hp[0], hp[1], 2.2, 1);
  if (kick) { g.save(); g.translate(2, -30); g.rotate(-1.3 * kick); taper(0, 0, 16, 0, 4.4, 3, fur); foot([16, 0], fur); g.restore(); }
  g.restore();
}

function alibabaD(o) {                                          // Alì Babà: taglialegna furbo e allegro, berretto rosso con la nappa, barbetta riccia, gilet ricamato, fusciacca, pantaloni a sbuffo, babbucce a punta, sacco di monete d'oro in spalla, pugnale ricurvo
  const vest = '#2a8a8a', pants = '#f2e8d0', sash = '#e8a020', sk = '#d8a07a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, stab = u < 0 ? -u : 0;
  const b = bobOf(o, 2.4);
  g.save(); g.translate(0, b);
  const sl = (f, col) => V(SP(`M${f[0] - 3},${f[1] - 4} L${f[0] + 4},${f[1] - 4} Q${f[0] + 10},${f[1] - 3} ${f[0] + 12},${f[1] - 7} Q${f[0] + 12},${f[1] + 1} ${f[0] + 6},${f[1] + 1} L${f[0] - 3},${f[1] + 1}Z`), col, f[0] + 3, f[1] - 2, 7, 1.2);
  g.save(); g.translate(-10, -74); g.rotate(-.3 + Math.sin(o.t * 2) * .03); V(SP('M-8,-10 Q-14,4 -10,16 Q0,22 10,16 Q12,4 6,-10Z'), '#a8865a', 0, 4, 12, 1.6); L(SP('M-7,-9 Q0,-14 6,-9'), '#5a3a1a', 2); for (const [x, y] of [[-3, -12], [0, -14], [3, -12]]) V(E(x, y, 1.8, 1.4), '#f2c43a', x, y, 2, .6); g.restore();
  sl(legB(-3, -44, 20, 19, 4.6, 3, 2.4, o, Math.PI, dk(pants, .15), .6), '#c8302a');
  const tor = SP('M-9,-80 Q0,-84 9,-80 Q11,-62 10,-46 L-10,-46 Q-11,-62 -9,-80Z'); V(tor, '#f4f0e4', 0, -62, 20);
  const vp = SP('M-9,-80 L-3,-80 L-4,-50 L-10,-48Z M9,-80 L3,-80 L4,-50 L10,-48Z'); V(vp, vest, 0, -64, 14, 1.2); g.save(); g.clip(vp); for (let y = -76; y < -50; y += 5) L(SP(`M-10,${y} q2,-2 4,0 M4,${y} q2,-2 4,0`), '#f2c43a', .9); g.restore();
  V(SP('M-11,-50 L11,-50 L11,-43 L-11,-43Z'), sash, 0, -46, 11, 1.4); V(SP(`M-8,-44 L-6,-44 L${-9 + Math.sin(o.t * 3)},-34 L${-12 + Math.sin(o.t * 3)},-36Z`), sash, -8, -40, 4, 1);
  V(SP('M-10,-44 Q-12,-36 -8,-30 L8,-30 Q12,-36 10,-44Z'), pants, 0, -38, 10, 1.4);
  sl(legB(3, -44, 20, 19, 4.8, 3.2, 2.6, o, 0, pants, .6), '#c8302a');
  g.save(); g.translate(2, -92); g.rotate(m === 3 ? -.1 : m === 4 ? -.24 : Math.sin(o.t * 2) * .04);
  const face = SP('M-6,-6 Q-6,-13 1,-13 Q8,-13 8,-5 Q8,3 5,7 Q2,9 -1,8 Q-5,5 -6,-6Z'); V(face, sk, 1, -2, 12);
  V(SP('M-6,2 Q-4,10 2,11 Q7,10 8,3 Q4,6 1,6 Q-3,6 -6,2Z'), '#2a1a14', 1, 6, 7, 1.2); for (const [x, y] of [[-3, 8], [0, 10], [4, 9]]) L(E(x, y, 1, 1), '#4a3a2a', .7);
  eyesX(o, sk, [[.6, -2.6, 2.4, 1], [6.4, -2.8, 2, -1]], 'almond', '#3a2a1a'); browsX(o, [[.6, -6.8, 5, 1], [6.4, -7, 4, -1]], '#2a1a14', 1.8, 'thick');
  V(SP('M5.6,-2 Q10,2 7,4 Q5.4,4 5,2Z'), dk(sk, .06), 7, 1, 3, 1); mouthX(o, 3.6, 4.4, 4.6, 'grin');
  V(SP('M-7,-8 Q-7,-18 1,-18 Q9,-18 9,-8 Q1,-6 -7,-8Z'), '#c8302a', 1, -12, 9, 1.4); L(SP(`M1,-18 Q-4,-20 ${-6 + Math.sin(o.t * 3) * 2},-14`), '#1a1a2a', 1.2); V(E(-6 + Math.sin(o.t * 3) * 2, -13, 1.6, 2.4), '#1a1a2a', -6, -13, 2, .6);
  g.restore();
  const hp = stab ? [20 + stab * 4, -62] : u > 0 ? [2, -80] : [12, -52];
  armTo(6, -78, hp[0], hp[1], 11, 10, 3, 2.6, 2.2, '#f4f0e4', u > 0 ? -1 : 1);
  g.save(); g.translate(hp[0], hp[1]); g.rotate(stab ? Math.PI / 2 : u > 0 ? -.6 : 2.5); V(SP('M-1.6,0 Q-3,-8 0,-16 Q3,-12 1.6,0Z'), '#dfe4ec', 0, -8, 8, 1.1); V(SP('M-4,0 L4,0 L4,2 L-4,2Z'), '#f2c43a', 0, 1, 4, .8); L(SP('M0,2 L0,6'), '#5a3a1a', 2.2); g.restore();
  V(E(hp[0], hp[1], 2.4, 2.4), sk, hp[0], hp[1], 2.4, 1);
  if (stab > .4) for (let i = 0; i < 3; i++) { const k = (o.t * 1.4 + i / 3) % 1; V(E(hp[0] - 8 - k * 14, hp[1] - 10 - k * 20, 2, 2), '#f2c43a', hp[0], hp[1], 2, .6); }
  g.restore();
}

function sinbadD(o) {                                           // Sinbad il Marinaio: robusto e abbronzato, turbante rosso con la piuma, barba nera a punta, orecchino d'oro, gilet aperto, fusciacca a righe, stivali, scimitarra larga e corda arrotolata in spalla
  const sk = '#c88a5a', tur = '#c8302a', vest = '#2a3a6a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, cut = u < 0 ? -u : 0;
  const b = bobOf(o, 2.6);
  const boot = (f, col) => V(SP(`M${f[0] - 4},${f[1] - 11} L${f[0] + 4},${f[1] - 11} L${f[0] + 4},${f[1] - 3} Q${f[0] + 11},${f[1] - 3} ${f[0] + 11},${f[1] + 1} L${f[0] - 4},${f[1] + 1}Z`), col, f[0] + 2, f[1] - 5, 9, 1.4);
  g.save(); g.translate(0, b);
  boot(legB(-5, -46, 21, 21, 5.6, 4.2, 3.6, o, Math.PI, '#e8dcc0', .55), '#3a2414');
  const hb = limb(-12, -84, 1.75 + (w ? Math.sin(o.ph) * .4 : 0), 14, -.3, 13, 5, 4.2, 3.6, dk(sk, .12)); V(E(hb[0], hb[1], 3.6, 3.4), dk(sk, .12), hb[0], hb[1], 3.6, 1.2);
  g.save(); g.translate(-8, -78); g.rotate(-.5); for (let i = 0; i < 3; i++) L(E(0, 0, 9 - i * 2.4, 6 - i * 1.6), i % 2 ? '#c8a868' : '#a8885a', 2.6); g.restore();
  const tor = SP('M-14,-86 Q0,-92 14,-86 Q17,-66 13,-48 L-13,-48 Q-17,-66 -14,-86Z'); V(tor, sk, 0, -68, 24);
  g.save(); g.clip(tor); L(SP('M-6,-82 Q0,-78 6,-82 M-4,-70 L4,-70'), dk(sk, .2), 1.2); g.restore();
  V(SP('M-14,-86 L-5,-86 L-6,-50 L-14,-48Z M14,-86 L5,-86 L6,-50 L14,-48Z'), vest, 0, -68, 16, 1.4);
  const sh = SP('M-15,-52 L15,-52 L15,-44 L-15,-44Z'); V(sh, '#f2c43a', 0, -48, 15, 1.4); g.save(); g.clip(sh); for (let x = -16; x < 16; x += 4) L(SP(`M${x},-52 L${x + 3},-44`), '#c8302a', 1.6); g.restore();
  boot(legB(5, -46, 21, 21, 5.8, 4.4, 3.8, o, 0, '#f4ead4', .55), '#4a2a1a');
  g.save(); g.translate(3, -100); g.rotate(m === 3 ? -.1 : m === 4 ? -.22 : Math.sin(o.t * 1.6) * .03);
  const face = SP('M-8,-6 Q-8,-14 1,-14 Q10,-14 10,-6 Q11,2 8,6 L-6,6 Q-8,2 -8,-6Z'); V(face, sk, 1, -4, 12);
  V(SP('M-8,0 Q-4,4 2,3 Q8,4 10,0 Q11,8 4,16 Q0,12 -4,9 Q-8,6 -8,0Z'), '#1a1214', 1, 6, 9, 1.4); L(SP('M-1,2.6 Q3,1 5,2.4 Q7,1 10,2.8'), '#1a1214', 2);
  V(E(-6, 2, 1.6, 1.6), '#f2c43a', -6, 2, 1.6, .6);
  eyesX(o, sk, [[.4, -4, 2.4, 1], [6.8, -4.2, 2, -1]], 'almond', '#3a2a1a'); browsX(o, [[.4, -8.2, 6, 1], [6.8, -8.4, 5, -1]], '#1a1214', 2.4, 'thick');
  V(SP('M6,-3 Q11,0 8,3 Q6,3 5.6,1Z'), dk(sk, .08), 8, 0, 3, 1); mouthX(o, 4, 5, 5, 'grin');
  const tb = SP('M-10,-8 Q-12,-22 1,-24 Q14,-22 12,-8 Q1,-5 -10,-8Z'); V(tb, tur, 1, -14, 14, 1.6); g.save(); g.clip(tb); for (const y of [-20, -15, -10]) L(SP(`M-12,${y} Q1,${y - 3} 14,${y}`), dk(tur, .3), 1.2); g.restore();
  V(E(2, -14, 2.4, 2.8), '#2a8ad8', 2, -14, 2.4, .8); V(SP(`M2,-16 Q${-2 + Math.sin(o.t * 3)},-30 ${-6 + Math.sin(o.t * 3) * 2},-34 Q0,-26 3,-16Z`), '#fafaf6', -1, -24, 5, 1);
  g.restore();
  const pv = up ? [4, -112] : cut ? [26 + cut * 6, -66] : [18, -58], rr = up ? -.9 : cut ? 1.5 + cut * .3 : .5 + Math.sin(o.t * 1.4) * .03;
  armTo(12, -84, pv[0], pv[1], 14, 13, 5.2, 4.4, 3.8, sk, up ? -1 : 1);
  g.save(); g.translate(pv[0], pv[1]); g.rotate(rr); V(SP('M-3,0 L-4,-26 Q-2,-40 8,-46 Q4,-30 4,0Z'), '#dfe4ec', 0, -22, 22, 1.6); L(SP('M2,-4 L1,-30'), 'rgba(120,140,180,.5)', 1); V(SP('M-7,0 L7,0 L7,3 L-7,3Z'), '#f2c43a', 0, 1, 7, 1); L(SP('M0,3 L0,10'), '#3a2414', 3); g.restore();
  if (cut > .3) { g.save(); g.globalAlpha = cut * .55; L(SP(`M${pv[0] - 14},${pv[1] - 40} Q${pv[0] + 34},${pv[1] - 34} ${pv[0] + 30},${pv[1] + 14}`), '#f4f8ff', 4); g.restore(); }
  V(E(pv[0], pv[1], 3.8, 3.6), sk, pv[0], pv[1], 3.8, 1.2);
  g.restore();
}

function guardiaD(o) {                                          // la Guardia del Sultano: alta e impettita, turbante alto bianco col pennacchio e la gemma, corazza a scaglie dorate, mantellina viola, pantaloni a sbuffo, scudo tondo decorato, scimitarra
  const sk = '#c89068', arm = '#e0b84a', cape = '#6a3a9a', pants = '#c8302a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, cut = u < 0 ? -u : 0;
  const b = bobOf(o, 2);
  const sl = (f, col) => V(SP(`M${f[0] - 3},${f[1] - 5} L${f[0] + 4},${f[1] - 5} Q${f[0] + 10},${f[1] - 4} ${f[0] + 12},${f[1] - 8} Q${f[0] + 12},${f[1] + 1} ${f[0] + 6},${f[1] + 1} L${f[0] - 3},${f[1] + 1}Z`), col, f[0] + 3, f[1] - 2, 7, 1.2);
  g.save(); g.translate(0, b);
  const cw = Math.sin(o.t * 2.6) * 3 + (w ? 4 : 0); V(SP(`M-8,-84 Q-18,-66 ${-20 - cw},-44 Q-12,-46 -4,-50Z`), cape, -12, -64, 18, 1.6);
  sl(legB(-4, -46, 21, 20, 5, 3.4, 2.6, o, Math.PI, dk(pants, .25), .55), '#2a1a14');
  const tor = SP('M-11,-84 Q0,-88 11,-84 Q13,-66 11,-50 L-11,-50 Q-13,-66 -11,-84Z'); V(tor, arm, 0, -68, 20);
  g.save(); g.clip(tor); for (let y = -84; y < -50; y += 4) for (let x = -12 + (y % 8 ? 2 : 0); x < 12; x += 4) L(SP(`M${x - 2},${y} Q${x},${y + 3} ${x + 2},${y}`), dk(arm, .35), .8); g.restore();
  F(SP('M-12,-54 L12,-54 L12,-49 L-12,-49Z'), '#3a2414');
  V(SP('M-11,-50 Q-14,-40 -10,-34 L10,-34 Q14,-40 11,-50Z'), pants, 0, -42, 12, 1.4);
  sl(legB(4, -46, 21, 20, 5.2, 3.6, 2.8, o, 0, pants, .55), '#3a2414');
  g.save(); g.translate(2, -96); g.rotate(m === 3 ? -.08 : m === 4 ? -.22 : Math.sin(o.t * 1.6) * .03);
  const face = SP('M-6,-6 Q-6,-13 1,-13 Q8,-13 8,-5 Q9,3 5,8 Q2,10 -1,9 Q-5,6 -6,-6Z'); V(face, sk, 1, -2, 12);
  L(SP('M0,4 Q3,3 5,4 Q7,3 9,4.6'), '#1a1214', 1.8);
  eyesX(o, sk, [[.4, -2.6, 2.2, 1], [6.4, -2.8, 1.9, -1]], 'lidded', '#3a2a1a'); browsX(o, [[.4, -6.6, 5, 1], [6.4, -6.8, 4, -1]], '#1a1214', 2, 'thick');
  V(SP('M5.6,-2 Q9,2 7,4 Q5.4,4 5,2Z'), dk(sk, .06), 7, 1, 3, 1); mouthX(o, 4, 6.6, 4, 'frown');
  const tb = SP('M-9,-6 Q-12,-26 1,-28 Q14,-26 11,-6 Q1,-3 -9,-6Z'); V(tb, '#f4f0e8', 1, -16, 14, 1.6); g.save(); g.clip(tb); for (const y of [-22, -16, -10]) L(SP(`M-12,${y} Q1,${y - 3} 14,${y}`), '#c8c0b0', 1.2); g.restore();
  V(E(2, -14, 2.6, 3), '#2ab86a', 2, -14, 2.6, .9); F(E(2, -14, 4, 4.4), 'rgba(0,0,0,0)'); L(E(2, -14, 3.6, 4), '#f2c43a', 1);
  V(SP(`M1,-26 Q${-2 + Math.sin(o.t * 3)},-40 ${-6 + Math.sin(o.t * 3) * 2},-42 Q-2,-34 3,-26Z`), cape, -1, -34, 5, 1);
  g.restore();
  const pv = up ? [6, -112] : cut ? [24 + cut * 6, -66] : [18, -56], rr = up ? -.9 : cut ? 1.5 + cut * .3 : .35;
  armTo(9, -82, pv[0], pv[1], 12, 11, 3.6, 3, 2.6, dk(arm, .1), up ? -1 : 1);
  g.save(); g.translate(pv[0], pv[1]); g.rotate(rr); V(SP('M-2,0 L-2.6,-22 Q0,-34 7,-38 Q3,-24 3,0Z'), '#dfe4ec', 0, -18, 18, 1.4); V(SP('M-6,0 L6,0 L6,2.4 L-6,2.4Z'), '#f2c43a', 0, 1, 6, .9); L(SP('M0,2.4 L0,8'), '#3a2414', 2.6); g.restore();
  V(E(pv[0], pv[1], 2.8, 2.8), sk, pv[0], pv[1], 2.8, 1);
  g.save(); g.translate(-13 + (cut ? 4 : 0), -64); V(E(0, 0, 12, 13), '#2a6ac8', 0, 0, 13, 1.8); L(E(0, 0, 9, 10), '#f2c43a', 1.6); for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; F(E(Math.cos(a) * 6, Math.sin(a) * 6.6, 1.2, 1.2), '#f2c43a'); } V(E(0, 0, 3, 3), '#f2c43a', 0, 0, 3, 1); g.restore();
  g.restore();
}
Object.assign(DRAW, { wendy: wendyD, giglio: giglioD, cappellaio: cappellaioD, brucaliffo: brucaliffoD, lepre: lepreD, alibaba: alibabaD, sinbad: sinbadD, guardia: guardiaD });
