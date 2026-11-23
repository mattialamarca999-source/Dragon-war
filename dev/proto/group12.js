// ---------- gruppo 12: i buoni (2) ----------
function bimboD(o, girl = 0) {                                  // Hansel o Gretel (e i Bimbi Sperduti): bambini svegli, lui coi calzoni di cuoio, le bretelle e le lentiggini, lei col vestitino rosso, il grembiule e le trecce bionde; lui ha i sassolini bianchi, lei il lecca-lecca
  const sk = '#f6d2b0', hair = girl ? '#f2c84a' : '#8a5a2a', top = girl ? '#c8302a' : '#f4f2ec', bot = girl ? '#f8f4ea' : '#6a7a3a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, thr = u < 0 ? -u : 0, up = u > 0 ? u : 0;
  const b = w ? -Math.abs(Math.sin(o.ph)) * 4 : Math.sin(o.t * 4) * .6;
  const shoe = (f, col) => V(E(f[0] + 2, f[1] - 1.4, 3.6, 2.2), col, f[0] + 2, f[1] - 1.4, 3, 1.2);
  g.save(); g.translate(0, b);
  shoe(legB(-2, -20, 10, 9, 2.6, 2.2, 2, o, Math.PI, girl ? '#f4f2ec' : dk(sk, .1), .8), '#4a2a1a');
  const hb = limb(-5, -30, 1.9 + (w ? Math.sin(o.ph) * .6 : 0), 6, -.3, 6, 2.2, 1.9, 1.7, girl ? dk(top, .2) : dk(top, .12)); V(E(hb[0], hb[1], 1.9, 1.9), dk(sk, .08), hb[0], hb[1], 2, .9);
  if (girl) { const dr = SP(`M-5,-32 Q0,-34 5,-32 L${8 + (w ? Math.sin(o.ph) : 0)},-14 L${-8 + (w ? Math.sin(o.ph) : 0)},-14Z`); V(dr, top, 0, -24, 10, 1.6); V(SP('M-3,-26 L4,-26 L6,-15 L-5,-15Z'), bot, 0, -20, 6, 1); L(SP('M-4,-29 L4,-29'), '#2a6a3a', 2); }
  else { V(SP('M-5,-32 Q0,-34 5,-32 L5,-20 L-5,-20Z'), top, 0, -26, 8, 1.6); V(SP('M-5,-21 L5,-21 L6,-14 L1,-14 L0,-17 L-1,-14 L-6,-14Z'), bot, 0, -18, 7, 1.4); L(SP('M-3,-32 L-3,-21 M3,-32 L3,-21 M-3,-27 L3,-27'), dk(bot, .3), 1.4); }
  shoe(legB(2, -20, 10, 9, 2.8, 2.4, 2.1, o, 0, girl ? '#fff' : sk, .8), '#5a3020');
  g.save(); g.translate(2, -38); g.rotate(m === 3 ? -.12 : m === 4 ? -.26 : Math.sin(o.t * 3 + girl) * .05);
  if (girl) for (const s of [-1, 1]) { const bw = Math.sin(o.t * 4 + s) * 1.4 + (w ? Math.sin(o.ph) * 2 : 0); V(SP(`M${s * 6 - 2},2 Q${s * 9 - 2 + bw},8 ${s * 8 - 2 + bw},14 Q${s * 6 - 2 + bw},14 ${s * 5 - 2},4Z`), hair, s * 7, 8, 5, 1.2); V(E(s * 8 - 2 + bw, 14, 2, 1.4), '#c8302a', s * 8, 14, 2, .7); }
  const face = E(1, 0, 9.4, 9); V(face, sk, 1, 0, 10);
  eyesX(o, sk, [[-1, -.4, 2.8, 1], [6, -.6, 2.4, -1]], 'round', girl ? '#3a8ad8' : '#5a8a3a'); browsX(o, [[-1, -4.6, 4.4, 1], [6, -4.8, 3.6, -1]], dk(hair, .3), 1.3, 'arch');
  F(E(-3, 4, 2, 1.3), 'rgba(240,110,110,.4)'); if (!girl) for (const [x, y] of [[-3, 2.6], [-1.6, 3.4], [6.4, 2.6]]) F(E(x, y, .5, .5), '#b8703a');
  F(E(8.4, 2, 1.4, 1.2), dk(sk, .1)); mouthX(o, 4, 5, 4.6, girl ? 'smile' : 'grin');
  if (girl) V(SP('M-9,2 Q-11,-10 0,-11 Q10,-11 10,-3 Q4,-8 -2,-7 Q-6,-4 -7,3Z'), hair, 0, -6, 10, 1.4);
  else { V(SP('M-9,2 Q-11,-10 1,-11 Q11,-11 10,-3 L8,-6 L6,-3 L4,-7 L1,-4 L-1,-7 Q-6,-4 -7,3Z'), hair, 0, -6, 10, 1.4); V(PL([0, -10, 2, -15, 4, -10]), hair, 2, -12, 3, 1); }
  g.restore();
  const hp = thr ? [12 + thr * 4, -36] : up ? [-4, -38] : [8, -24];
  armTo(4, -30, hp[0], hp[1], 6, 6, 2.2, 1.9, 1.7, top, up ? -1 : 1);
  if (girl) { g.save(); g.translate(hp[0], hp[1]); g.rotate(thr ? 1 : up ? -.8 : .1); L(SP('M0,0 L0,-12'), '#f4f2ec', 1.4); V(E(0, -16, 5, 5), '#f27aa8', 0, -16, 5, 1.2); L(SP('M0,-16 m-3,0 a3,3 0 1 1 3,3 a2,2 0 1 1 -2,-2'), '#fff', 1.2); g.restore(); }
  else if (!thr) { V(SP(`M${hp[0] - 3},${hp[1]} Q${hp[0] - 4},${hp[1] + 6} ${hp[0]},${hp[1] + 7} Q${hp[0] + 4},${hp[1] + 6} ${hp[0] + 3},${hp[1]}Z`), '#c8a878', hp[0], hp[1] + 3, 4, 1); }
  if (thr && !girl) for (let i = 0; i < 3; i++) V(E(hp[0] + 6 + i * 7 * thr, hp[1] - 2 - i * 2, 1.8, 1.6), '#f4f4f4', hp[0] + 6, hp[1], 2, .7);
  V(E(hp[0], hp[1], 1.9, 1.9), sk, hp[0], hp[1], 2, .9);
  g.restore();
}
function hanselgretelD(o) {                                     // Hansel e Gretel: fratellino e sorellina mano nella mano che tirano sassolini e caramelle
  g.save(); g.translate(-12, 0); bimboD(Object.assign({}, o, { ph: o.ph + 1.4, t: o.t + .7 }), 0); g.restore();
  g.save(); g.translate(12, 1); bimboD(o, 1); g.restore();
}

function nanoD(o) {                                             // il Nano minatore: piccolo e tozzo, elmetto con la lampada accesa, nasone tondo e rosso, barba bianca fino alla pancia, giubba blu, stivaloni, piccone
  const sk = '#f2c6a0', tun = '#3a6ac8', brd = '#f2f0ea', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, hit = u < 0 ? -u : 0;
  const b = bobOf(o, 2);
  const boot = f => V(SP(`M${f[0] - 4},${f[1] - 5} L${f[0] + 3},${f[1] - 5} Q${f[0] + 9},${f[1] - 3} ${f[0] + 9},${f[1] + 1} L${f[0] - 4},${f[1] + 1}Z`), '#4a2a1a', f[0] + 2, f[1] - 2, 6, 1.4);
  g.save(); g.translate(0, b);
  boot(legB(-4, -18, 9, 8, 4, 3.4, 3, o, Math.PI, '#5a4a3a', .6));
  const hb = limb(-9, -32, 1.8 + (w ? Math.sin(o.ph) * .5 : 0), 7, -.3, 7, 3.4, 3, 2.6, dk(tun, .25)); V(E(hb[0], hb[1], 2.8, 2.6), dk(sk, .1), hb[0], hb[1], 2.6, 1);
  const tor = SP('M-11,-34 Q0,-40 11,-34 Q14,-24 11,-14 L-11,-14 Q-14,-24 -11,-34Z'); V(tor, tun, 0, -25, 16); F(SP('M-12,-20 L12,-20 L12,-16 L-12,-16Z'), '#5a3a1a'); V(SP('M-2,-21 L3,-21 L3,-15 L-2,-15Z'), '#e8c040', 0, -18, 3, .7);
  boot(legB(4, -18, 9, 8, 4.2, 3.6, 3.2, o, 0, '#6a5a44', .6));
  g.save(); g.translate(3, -44); g.rotate(m === 3 ? -.1 : m === 4 ? -.24 : Math.sin(o.t * 2.4) * .04);
  const face = E(1, 0, 10, 9.4); V(face, sk, 1, 0, 11);
  const bw = Math.sin(o.t * 2.4) * 1.2; const bd = SP(`M-9,2 Q-4,6 3,5 Q9,6 11,2 Q12,12 6,20 Q${2 + bw},26 ${-2 + bw},22 Q-8,16 -9,2Z`); V(bd, brd, 1, 12, 13, 1.4); for (let i = 0; i < 4; i++) L(SP(`M${-5 + i * 3.4},6 l${bw * .3 + .6},12`), '#c8ccd8', .8);
  eyesX(o, sk, [[-1, -2, 2.2, 1], [6, -2.2, 1.9, -1]], 'round', '#5a3a2a'); browsX(o, [[-1, -5.8, 5, 1], [6, -6, 4, -1]], brd, 2, 'bushy');
  V(E(7, 2, 3.8, 3.4), '#f08a7a', 7, 2, 4, 1.2); F(E(6, 1, 1.2, .9), 'rgba(255,255,255,.5)'); mouthX(o, 4, 7.2, 5, 'grin');
  V(SP('M-11,-1 Q-11,-14 1,-14 Q13,-14 13,-1Z'), '#c8b048', 1, -7, 12, 1.6); V(SP('M-12,-1 L14,-1 Q15,2 12,2 L-12,2Z'), dk('#c8b048', .15), 1, 0, 13, 1.2);
  V(SP('M3,-12 L9,-12 L9,-6 L3,-6Z'), '#8a8a90', 6, -9, 4, 1); glowB(9, -9, 18, 'rgba(255,240,150,.55)'); F(E(9, -9, 2.4, 2.4), '#fff6c0', '#ffe080');
  g.restore();
  const hp = up ? [2, -58] : hit ? [14, -30] : [10, -28], rr = up ? -1.0 : hit ? 1.6 : .2 + Math.sin(o.t * 2) * .04;
  armTo(8, -32, hp[0], hp[1], 7, 7, 3.4, 3, 2.6, tun, up ? -1 : 1);
  g.save(); g.translate(hp[0], hp[1]); g.rotate(rr); L(SP('M0,8 L0,-18'), '#3a2414', 3.2); L(SP('M0,8 L0,-18'), '#9a6a3a', 1.6); V(SP('M-12,-16 Q0,-24 12,-16 Q0,-20 -12,-16Z'), '#8a909a', 0, -19, 10, 1.4); g.restore();
  V(E(hp[0], hp[1], 2.8, 2.6), sk, hp[0], hp[1], 2.6, 1);
  if (hit > .4) for (let i = 0; i < 4; i++) F(E(28 + i * 3, -4 - i * 3, 1.4, 1.4), '#ffe080', '#ffb040');
  g.restore();
}

function raperonzoloD(o) {                                      // Raperonzolo: treccia d'oro lunghissima intrecciata di fiori che usa come frusta, vestito lilla con le maniche a sbuffo, piedi scalzi, coroncina di fiori
  const dr = '#9a7ad8', dr2 = '#6a4aa8', hair = '#f6cc48', sk = '#f8dcc4', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, lash = u < 0 ? -u : 0;
  const b = bobOf(o, 1.8), sw = (w ? Math.sin(o.ph) * 2.4 : 0) + Math.sin(o.t * 1.8);
  g.save(); g.translate(0, b);
  const S = [-3, -96], P = lash ? [[16, -120], [50, -110], [70 + lash * 30, -70 + lash * 20]] : up ? [[-30, -118], [-56, -122], [-64, -92]] : [[-26, -84 + Math.sin(o.t * 1.5) * 2], [-34, -26], [-58 + Math.sin(o.t * 1.2) * 4 - (w ? 6 : 0), -2]];
  const n = 26; for (let i = n; i >= 0; i--) { const t = i / n, q = bez(S, P[0], P[1], P[2], t), q2 = bez(S, P[0], P[1], P[2], Math.min(1, t + .02)), a = Math.atan2(q2[1] - q[1], q2[0] - q[0]), r = 5 - t * 2.4;
    g.save(); g.translate(q[0], q[1]); g.rotate(a + (i % 2 ? .5 : -.5)); V(E(0, 0, r * 1.2, r * .75), i % 2 ? hair : dk(hair, .08), 0, 0, r, 1.1); g.restore();
    if (i % 6 === 3) { for (let k = 0; k < 5; k++) F(E(q[0] + Math.cos(k * 1.26) * 1.8, q[1] + Math.sin(k * 1.26) * 1.8, 1.2, 1.2), i % 12 === 3 ? '#f4a0c8' : '#ffffff'); F(E(q[0], q[1], .9, .9), '#f2c42a'); } }
  { const q = P[2]; V(E(q[0], q[1], 2.6, 2.2), '#c8508a', q[0], q[1], 2.4, .8); }
  const foot = f => V(E(f[0] + 2, f[1] - 1, 3.4, 1.8), sk, f[0] + 2, f[1] - 1, 3, 1);
  foot(legB(-3, -40, 19, 18, 3, 2.4, 2, o, Math.PI, dk(sk, .1), .55));
  const hb = limb(-6, -74, 1.8 + Math.sin(o.t * 1.4) * .05, 11, -.4, 10, 2.6, 2.2, 1.8, dk(sk, .08)); V(E(hb[0], hb[1], 2.2, 2.2), dk(sk, .08), hb[0], hb[1], 2.2, 1);
  const gp = SP(`M-7,-78 Q0,-80 7,-78 L8,-60 Q14,-34 ${17 + sw},-10 L${-17 + sw},-10 Q-13,-34 -8,-60Z`); V(gp, dr, 0, -44, 36);
  g.save(); g.clip(gp); F(SP('M-4,-76 L4,-76 L5,-60 L-5,-60Z'), dr2); L(SP('M-2,-74 L2,-70 M2,-74 L-2,-70 M-2,-68 L2,-64 M2,-68 L-2,-64'), '#f4e8ff', 1); for (const x of [-8, 0, 8]) L(SP(`M${x * .5},-58 Q${x},-34 ${x * 1.4 + sw},-10`), dr2, 1.1); F(SP('M-8,-62 L8,-62 L8,-59 L-8,-59Z'), '#f4a0c8'); g.restore();
  foot(legB(3, -40, 19, 18, 3.2, 2.6, 2.2, o, 0, sk, .55));
  for (const s of [-1, 1]) V(E(s * 7, -76, 4.4, 3.6), lt(dr, .15), s * 7, -76, 4, 1.2);
  g.save(); g.translate(1, -90); g.rotate(m === 3 ? -.1 : m === 4 ? -.24 : Math.sin(o.t * 1.6) * .04);
  const face = SP('M-6,-5 Q-6,-12 1,-12 Q8,-12 8,-5 Q8,2 5,6 Q2,9 -1,8 Q-5,5 -6,-5Z'); V(face, sk, 1, -2, 11);
  V(SP('M-8,6 Q-11,-10 0,-14 Q10,-15 10,-6 Q6,-10 1,-9 Q-3,-10 -5,-5 Q-6,0 -5,6Z'), hair, 0, -6, 11, 1.4);
  for (let i = 0; i < 5; i++) { const x = -6 + i * 3.4, y = -11.4 - Math.sin(i * .8) * 1.4; for (let k = 0; k < 5; k++) F(E(x + Math.cos(k * 1.26) * 1.3, y + Math.sin(k * 1.26) * 1.3, .9, .9), i % 2 ? '#f4a0c8' : '#ffffff'); F(E(x, y, .6, .6), '#f2c42a'); }
  F(E(-2.4, 2, 2, 1.2), 'rgba(250,120,140,.4)');
  eyesX(o, sk, [[.6, -2.6, 2.6, 1], [6.2, -2.8, 2.2, -1]], 'lashes', '#3aa86a'); browsX(o, [[.6, -6.6, 5, 1], [6.2, -6.6, 4, -1]], dk(hair, .35), 1.1, 'arch');
  L(SP('M5.6,-.6 Q7.6,2 5.8,3'), dk(sk, .3), 1); mouthX(o, 3.4, 5, 4.6, lash ? 'grin' : 'smile', { lips: '#e06a8a' });
  g.restore();
  const hp = lash ? [16, -86] : up ? [-6, -94] : [10, -58];
  armTo(6, -74, hp[0], hp[1], 11, 10, 2.6, 2.2, 1.8, sk, up ? -1 : 1); V(E(hp[0], hp[1], 2.2, 2.2), sk, hp[0], hp[1], 2.2, 1);
  if (lash > .4) { const q = P[2]; for (let i = 0; i < 5; i++) { const a = i * 1.26 + o.t * 3; F(E(q[0] + Math.cos(a) * 7, q[1] + Math.sin(a) * 7, 1.2, 1.2), '#fff6a0', '#ffe060'); } }
  g.restore();
}

function pifferaioD(o) {                                        // il Pifferaio magico: alto e dinoccolato, vestito a spicchi rosso e giallo, calzamaglia spaiata, scarpe a punta arricciate, cappello a punta con la piuma lunga, suona il piffero, note che volano, un topolino incantato che lo segue
  const red = '#d0402a', yel = '#f2c43a', sk = '#f2d0b0', u = o.u, m = o.mood, w = o.walking ? 1 : 0, play = m === 2 || m === 3 || u !== 0;
  const b = bobOf(o, 2.4), sway = Math.sin(o.t * 2.4) * .05 + (w ? Math.sin(o.ph) * .06 : 0);
  { const rx = -26 + (w ? Math.sin(o.ph * 2) * 2 : 0), rb = w ? -Math.abs(Math.sin(o.ph * 2)) * 2 : 0; L(SP(`M${rx - 8},${-3 + rb} q-8,-2 -10,-8`), '#c89aa0', 1.4); V(E(rx, -5 + rb, 8, 4.6), '#9a9aa8', rx, -5 + rb, 8, 1.4); V(E(rx + 7, -7 + rb, 4.4, 3.4), '#9a9aa8', rx + 7, -7 + rb, 4, 1.2); V(E(rx + 5, -11 + rb, 2.2, 2.2), '#c8a8b0', rx + 5, -11 + rb, 2, .8); F(E(rx + 11.4, -7 + rb, 1, 1), '#e86a8a'); F(SP(`M${rx + 7},${-9 + rb} q1,-1.4 2,0`), INK); L(SP(`M${rx + 6.4},${-8.6 + rb} q1,-1.2 2,0`), INK, 1); }
  const shoe = (f, col) => V(SP(`M${f[0] - 3},${f[1] - 4} L${f[0] + 4},${f[1] - 4} Q${f[0] + 10},${f[1] - 4} ${f[0] + 12},${f[1] - 9} Q${f[0] + 14},${f[1] - 2} ${f[0] + 8},${f[1] + 1} L${f[0] - 3},${f[1] + 1}Z`), col, f[0] + 3, f[1] - 2, 7, 1.3);
  g.save(); g.translate(0, b); g.rotate(sway);
  shoe(legB(-3, -44, 21, 20, 3.2, 2.6, 2.2, o, Math.PI, dk(yel, .15), .65), dk(red, .2));
  const tor = SP('M-9,-82 Q0,-86 9,-82 Q11,-62 9,-46 L13,-38 L-13,-38 L-9,-46 Q-11,-62 -9,-82Z'); V(tor, red, 0, -62, 22);
  g.save(); g.clip(tor); F(SP('M-14,-90 L0,-90 L0,-36 L-14,-36Z'), yel); for (let y = -80; y < -40; y += 8) { F(PL([0, y, 4, y + 4, 0, y + 8, -4, y + 4]), 'rgba(255,255,255,.25)'); } F(SP('M-14,-50 L14,-50 L14,-46 L-14,-46Z'), '#3a2414'); L(SP('M-13,-38 L-9,-42 L-5,-38 L-1,-42 L3,-38 L7,-42 L11,-38'), dk(red, .3), 1.2); g.restore();
  shoe(legB(3, -44, 21, 20, 3.4, 2.8, 2.4, o, 0, red, .65), dk(yel, .25));
  g.save(); g.translate(3, -94); g.rotate(m === 4 ? -.24 : Math.sin(o.t * 2.2) * .05 - (play ? .1 : 0));
  const face = SP('M-6,-6 Q-6,-13 1,-13 Q8,-13 8,-5 Q8,3 4,7 Q1,9 -2,7 Q-6,3 -6,-6Z'); V(face, sk, 1, -2, 11);
  V(SP('M-8,4 Q-10,-8 -4,-10 L-5,6Z'), '#8a4a2a', -6, -2, 6, 1.2);
  if (play && m !== 4) { F(E(4, 3.4, 3.4, 2.6), 'rgba(240,130,120,.45)'); L(SP('M-1,-2.4 Q1,-1 3,-2.4 M5,-2.6 Q7,-1.4 8.4,-2.6'), INK, 1.4); browsX(o, [[1, -6.4, 4.6, 1], [6.6, -6.6, 3.8, -1]], '#8a4a2a', 1.2, 'arch'); }
  else { eyesX(o, sk, [[1, -2.4, 2.3, 1], [6.6, -2.6, 1.9, -1]], 'almond', '#8a5ac8'); browsX(o, [[1, -6.4, 4.6, 1], [6.6, -6.6, 3.8, -1]], '#8a4a2a', 1.2, 'arch'); mouthX(o, 4, 5, 4.4, 'smirk'); }
  V(SP('M6,-2 Q11,1 8,3 L6,2Z'), dk(sk, .06), 8, 1, 3, 1);
  const tip = Math.sin(o.t * 2) * 3; V(SP(`M-9,-8 Q0,-14 11,-8 Q6,-18 -2,-26 Q${-12 + tip},-34 ${-18 + tip},-28 Q-8,-24 -6,-16Z`), red, -2, -16, 14, 1.6); F(SP('M-9,-9 Q0,-14 11,-9 L11,-7 Q0,-12 -9,-7Z'), yel);
  V(SP(`M-4,-14 Q-16,-30 ${-22 + tip},-44 Q-12,-32 -2,-16Z`), '#f4f2ec', -10, -28, 8, 1.1); L(SP(`M-4,-14 Q-14,-28 ${-21 + tip},-42`), '#c8c4b8', .8);
  g.restore();
  const hx = play ? 18 : 16, hy = play ? -90 : -70;
  g.save(); g.translate(play ? 10 : 12, play ? -92 : -72); g.rotate(play ? .55 : 1.2); L(SP('M0,0 L24,0'), '#5a3a1a', 3.4); L(SP('M0,0 L24,0'), '#b8865a', 2); for (const x of [8, 12, 16, 20]) F(E(x, -.4, .8, .8), '#3a2414'); g.restore();
  armTo(-6, -80, play ? 14 : 14, play ? -86 : -66, 11, 10, 2.6, 2.2, 1.8, dk(yel, .15), 1); V(E(play ? 14 : 14, play ? -86 : -66, 2.2, 2.2), dk(sk, .08), hx, hy, 2.2, 1);
  armTo(7, -80, play ? 22 : 22, play ? -82 : -62, 11, 10, 2.6, 2.2, 1.8, red, 1); V(E(play ? 22 : 22, play ? -82 : -62, 2.2, 2.2), sk, hx, hy, 2.2, 1);
  g.restore();
  const nn = play ? 5 : 3; for (let i = 0; i < nn; i++) { const k = (o.t * (play ? .9 : .5) + i / nn) % 1, x = 30 + k * (play ? 60 : 24), y = -96 - k * 30 + Math.sin(k * 8 + i) * 6; g.save(); g.globalAlpha = 1 - k; const c = ['#f2c43a', '#d0402a', '#8a5ac8', '#3a9ad8', '#3ab86a'][i % 5];
    F(E(x, y, 3, 2.2, -.4), c); L(SP(`M${x + 2.6},${y - 1} L${x + 2.6},${y - 11} Q${x + 6},${y - 9} ${x + 6},${y - 6}`), c, 1.4); g.restore(); }
}

function musicantiD(o) {                                        // i Musicanti di Brema: asino, cane, gatto e gallo uno sopra l'altro che cantano tutti insieme
  const don = '#9a98a8', dog = '#b07a4a', cat = '#e8922a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, sing = m === 2 || m === 3 || u < 0, hurt = m === 4;
  const b = bobOf(o, 2), wob = i => Math.sin(o.t * 2.4 + i * .9) * (.03 + i * .012) + (w ? Math.sin(o.ph + i) * .03 : 0);
  if (sing) for (let i = 0; i < 3; i++) { const k = (o.t * 1.4 + i / 3) % 1; g.save(); g.globalAlpha = (1 - k) * .8; L(SP(`M${46 + k * 40},${-120 - k * 10} Q${56 + k * 46},${-90} ${46 + k * 40},${-60 + k * 10}`), '#f4f0ff', 2.6); g.restore(); }
  g.save(); g.translate(0, b);
  const hoof = f => V(SP(`M${f[0] - 3},${f[1] - 3} L${f[0] + 3},${f[1] - 3} L${f[0] + 4},${f[1] + 1} L${f[0] - 4},${f[1] + 1}Z`), '#3a3040', f[0], f[1] - 1, 4, 1);
  for (const [x, off, c] of [[-16, 0, dk(don, .2)], [14, Math.PI, dk(don, .2)]]) hoof(legB(x, -30, 15, 15, 4, 3.2, 2.8, o, off, c, .5));
  const tw = Math.sin(o.t * 3) * 4; L(SP(`M-26,-38 Q-34,-30 ${-34 + tw},-20`), dk(don, .6), 4); L(SP(`M-26,-38 Q-34,-30 ${-34 + tw},-20`), don, 2.4); V(E(-34 + tw, -19, 2.4, 3.4), '#4a4050', -34 + tw, -19, 3, 1);
  V(E(0, -38, 28, 13), don, 0, -40, 26); F(E(2, -30, 18, 4), 'rgba(255,255,255,.25)');
  for (const [x, off] of [[-10, Math.PI], [20, 0]]) hoof(legB(x, -30, 15, 15, 4.2, 3.4, 3, o, off, don, .5));
  g.save(); g.translate(26, -48); g.rotate(-.5 + wob(0) + (sing ? -.2 : 0) + (hurt ? .3 : 0));
  V(SP('M-6,-8 L0,-26 L4,-8Z'), don, -1, -16, 6, 1.4); V(SP('M0,-8 L8,-28 L9,-8Z'), don, 5, -16, 6, 1.4); F(SP('M1,-10 L7,-24 L7,-10Z'), '#e8c0c8');
  V(SP('M-8,-6 Q-4,-12 6,-10 Q20,-6 24,2 Q22,8 12,8 Q0,8 -8,2Z'), don, 6, -1, 14); V(SP('M14,-2 Q24,0 24,4 Q20,9 12,8Z'), '#d8d4dc', 18, 3, 6, 1.2); F(E(20, 1, 1, .8), INK);
  eyesX(o, don, [[6, -4, 2.4, -1]], 'lidded', '#5a4a3a'); if (sing) { F(SP('M14,5 Q20,12 24,6Z'), '#5a1220'); for (const x of [16, 19]) F(SP(`M${x},5.4 l1.6,0 l0,2 l-1.6,0Z`), '#fff'); } else L(SP('M14,6 Q19,7 23,5'), INK, 1.2);
  g.restore();
  g.save(); g.translate(-2, -50); g.rotate(wob(1));
  for (const x of [-6, 4]) taper(x, -6, x + 1, 2, 2.6, 2.2, dk(dog, .2));
  V(E(-1, -12, 11, 9), dog, -1, -12, 11); L(SP(`M-11,-12 Q-18,${-20 + Math.sin(o.t * 6) * 3} -16,-24`), dk(dog, .4), 3);
  g.save(); g.translate(8, -22); g.rotate(sing ? -.2 : 0);
  V(E(0, 0, 7.4, 6.6), dog, 0, 0, 7); V(SP('M-6,-3 Q-12,0 -9,10 Q-5,8 -4,0Z'), dk(dog, .35), -7, 3, 5, 1.2); V(SP('M4,0 Q12,-1 13,3 Q11,7 4,6Z'), lt(dog, .2), 8, 3, 5, 1.2); F(E(12.6, 2, 1.4, 1.1), INK);
  eyesX(o, dog, [[2, -2, 1.8, -1]], 'round', '#5a3a1a'); if (sing) { F(E(9, 7, 3, 2.4), '#5a1220'); F(E(9, 8, 1.6, 1.2), '#f07a8a'); }
  g.restore(); g.restore();
  g.save(); g.translate(-3, -80); g.rotate(wob(2));
  V(E(0, -6, 7.4, 7), cat, 0, -6, 7); L(SP(`M-6,-2 Q-14,${-6 + Math.sin(o.t * 4) * 2} -12,-16`), dk(cat, .5), 3.6); L(SP(`M-6,-2 Q-14,${-6 + Math.sin(o.t * 4) * 2} -12,-16`), cat, 2); for (const x of [-3, 1]) L(SP(`M${x},-12 l1,4`), dk(cat, .3), 1);
  g.save(); g.translate(3, -16); g.rotate(sing ? -.2 : 0);
  V(PL([-6, -2, -5, -10, -1, -5]), cat, -4, -5, 4, 1.2); V(PL([1, -5, 5, -10, 6, -2]), cat, 4, -5, 4, 1.2);
  V(E(0, 0, 6.4, 5.4), cat, 0, 0, 6); for (const y of [-3, -1]) L(SP(`M-3,${y} l3,0`), dk(cat, .3), .9); F(E(4.6, 1.4, 1, .7), '#e86a8a');
  eyesX(o, cat, [[0, -1, 1.8, 1], [4, -1, 1.6, -1]], 'slit', '#9ad83a'); L(SP('M5,2.4 l5,-1 M5,2.4 l5,1'), '#fff', .6);
  if (sing) { F(E(4, 4, 1.8, 1.6), '#5a1220'); }
  g.restore(); g.restore();
  g.save(); g.translate(0, -104); g.rotate(wob(3) + (sing ? -.15 : 0));
  for (const x of [-2, 2]) L(SP(`M${x},-2 L${x},4`), '#e8a83a', 1.4);
  for (let i = 0; i < 4; i++) { const a = -2.2 - i * .3; V(SP(`M-4,-6 Q${-4 + Math.cos(a) * 10},${-6 + Math.sin(a) * 10} ${-4 + Math.cos(a - .3) * 16},${-6 + Math.sin(a - .3) * 16} Q${-4 + Math.cos(a - .1) * 6},${-6 + Math.sin(a - .1) * 6} -2,-4Z`), i % 2 ? '#2a6a4a' : '#3a2a5a', -10, -12, 8, 1); }
  V(E(0, -6, 7, 5.4), '#f2f0ea', 0, -6, 7); V(SP('M2,-10 Q4,-18 8,-16 Q10,-10 7,-6Z'), '#f2f0ea', 6, -12, 5, 1.2);
  g.save(); g.translate(7, -16); V(SP('M-2,-3 Q-1,-7 1,-4 Q2,-8 4,-4 Q6,-7 5,-2Z'), '#e02a2a', 1, -4, 3, .9); const bo = sing ? .5 : .05; V(SP('M3,-1 L8,0 L3,1Z'), '#f2b03a', 5, 0, 3, .8); g.save(); g.translate(3, 1); g.rotate(bo); V(SP('M0,0 L5,-1 L0,1.4Z'), '#e09a2a', 2, 0, 2, .7); g.restore(); V(E(3, 3, 1.4, 2), '#e02a2a', 3, 3, 1.4, .7); F(E(1, -1.4, .9, .9), INK); g.restore();
  g.restore();
  g.restore();
}

function carrozzaD(o) {                                         // la Carrozza di Cenerentola: zucca arancio lucida con le volute d'oro, finestrella con la tendina rosa, ruote dorate a raggi, topolino cocchiere col cilindro e la frusta, scintille di magia; quando carica parte a tutta velocità
  const pump = '#f28a2a', gold = '#f2c14e', u = o.u, m = o.mood, w = o.walking ? 1 : 0, rush = u < 0 ? -u : 0, hurt = m === 4;
  const spin = (o.ph || 0) * 1.6 + o.t * (rush ? 10 : w ? 3 : .4), b = w || rush ? Math.sin(o.t * 12) * 1.2 : 0;
  if (rush) for (let i = 0; i < 5; i++) { const y = -20 - i * 14; g.save(); g.globalAlpha = .5; L(SP(`M${-40 - i * 4},${y} L${-70 - i * 6},${y}`), '#ffffff', 2); g.restore(); }
  for (let i = 0; i < 6; i++) { const k = (o.t * .7 + i / 6) % 1; g.save(); g.globalAlpha = 1 - k; F(SP(`M${-30 + i * 12 + Math.sin(i + o.t) * 4},${-100 + k * 30} l1.2,-3 l1.2,3 l-1.2,3Z`), '#fff6c0', '#ffe080'); g.restore(); }
  const wheel = (x, y, r, back) => { g.save(); g.translate(x, y); V(E(0, 0, r, r), back ? dk(gold, .25) : gold, 0, 0, r, 1.8); F(E(0, 0, r * .78, r * .78), back ? '#5a3a1a' : '#7a4a1a'); for (let i = 0; i < 8; i++) { const a = spin + i * Math.PI / 4; L(SP(`M0,0 L${Math.cos(a) * r * .78},${Math.sin(a) * r * .78}`), back ? dk(gold, .3) : gold, 1.6); } V(E(0, 0, r * .25, r * .25), gold, 0, 0, r * .25, 1); g.restore(); };
  g.save(); g.translate(0, b); g.rotate(rush * .08 + (hurt ? -.08 : 0));
  wheel(-18, -15, 14, 1); wheel(22, -14, 12, 1);
  L(SP('M-30,-24 Q0,-14 34,-24'), dk(gold, .4), 4); L(SP('M-30,-24 Q0,-14 34,-24'), gold, 2.4);
  const body = SP('M-30,-52 Q-34,-84 -10,-92 Q4,-96 18,-92 Q38,-84 34,-52 Q32,-28 2,-26 Q-28,-28 -30,-52Z'); V(body, pump, 2, -60, 36);
  g.save(); g.clip(body); for (const x of [-18, -6, 8, 20]) L(SP(`M${x},-94 Q${x + (x > 0 ? 6 : -6)},-60 ${x},-26`), dk(pump, .2), 1.8); F(E(-8, -80, 10, 5), 'rgba(255,255,255,.3)'); g.restore();
  for (const s of [-1, 1]) L(SP(`M${2 + s * 6},-92 Q${2 + s * 20},-100 ${2 + s * 26},-88 Q${2 + s * 28},-80 ${2 + s * 22},-82`), gold, 2);
  L(SP('M-26,-36 Q-14,-30 -4,-36 Q6,-42 16,-36 Q24,-30 30,-36'), gold, 2);
  const win = E(4, -62, 10, 12); V(win, gold, 4, -62, 12, 1.4); F(E(4, -62, 8, 10), '#fff2c8'); g.save(); g.clip(E(4, -62, 8, 10)); F(SP('M-6,-74 Q0,-62 -2,-50 L-6,-50Z M14,-74 Q8,-62 10,-50 L14,-50Z'), '#f4a0c8'); F(E(4, -58, 4, 5), 'rgba(255,220,120,.6)'); g.restore(); L(SP('M4,-72 L4,-52 M-4,-62 L12,-62'), gold, 1.2);
  V(SP('M0,-96 Q-2,-104 4,-108 Q2,-102 6,-98Z'), '#5a8a3a', 2, -102, 4, 1); V(PL([-4, -94, -2, -100, 2, -96, 6, -100, 8, -94]), gold, 2, -96, 6, 1);
  V(SP('M30,-56 L44,-56 L44,-50 L30,-50Z'), dk(gold, .2), 37, -53, 7, 1.2);
  g.save(); g.translate(40, -60); g.rotate(rush ? .2 : Math.sin(o.t * 3) * .05);
  V(E(0, 0, 5, 6), '#c0392b', 0, 0, 5, 1.2); V(E(4, -8, 4.4, 4), '#a8a8b8', 4, -8, 4, 1.2); V(E(1, -12, 2.6, 2.6), '#a8a8b8', 1, -12, 2.6, 1); F(E(1, -12, 1.4, 1.4), '#f0b0c0'); F(E(8.4, -7.4, 1, 1), '#e86a8a'); F(E(5, -9, .9, .9), INK); L(SP('M8,-6 l4,-1 M8,-6 l4,1'), '#fff', .5);
  V(SP('M-1,-12 L7,-12 L6,-20 L0,-20Z'), '#1e1a2a', 3, -16, 4, 1); F(SP('M-1,-14 L7,-14 L7,-12.6 L-1,-12.6Z'), '#c0392b'); L(SP('M-3,-12 L9,-12'), '#1e1a2a', 1.6);
  const wa = rush ? -.4 : Math.sin(o.t * 4) * .3; L(SP(`M4,0 L${4 + Math.cos(-1.2 + wa) * 16},${Math.sin(-1.2 + wa) * 16} q8,-4 12,4`), '#5a3a1a', 1.2);
  g.restore();
  wheel(-22, -14, 15, 0); wheel(26, -13, 13, 0);
  g.restore();
  if (rush) for (let i = 0; i < 4; i++) { const k = (o.t * 2 + i / 4) % 1; g.save(); g.globalAlpha = (1 - k) * .6; F(E(-30 - k * 20, -4 - k * 6, 4 + k * 5, 2 + k * 2), '#d8c8a8'); g.restore(); }
}

function ranocchioD(o) {                                        // il Principe Ranocchio: rana verde brillante con la coroncina d'oro storta, occhioni sopra la testa, boccone largo, mantellina rossa; salta e tira la lingua
  const gr = '#5ab84a', grd = dk(gr, .25), bel = '#e8f0a8', u = o.u, m = o.mood, w = o.walking ? 1 : 0, tongue = u < 0 ? -u : 0, hurt = m === 4;
  const jp = w ? Math.max(0, Math.sin(o.ph * 1.2)) : 0, hop = -jp * 16, stretch = jp;
  g.save(); g.translate(0, hop); g.rotate(-jp * .25);
  const cw = Math.sin(o.t * 3) * 2; V(SP(`M-4,-34 Q-16,-30 ${-20 + cw},-12 Q-12,-14 -6,-18Z`), '#c8302a', -12, -24, 12, 1.4);
  const lg = (x, col, back) => { if (stretch > .3) { taper(x - 6, -14, x - 18, -4 + stretch * 4, 4.6, 3, col); taper(x - 18, -4 + stretch * 4, x - 26, 2 + stretch * 4, 3, 2, col); V(SP(`M${x - 26},${2 + stretch * 4} l-6,-3 m6,3 l-7,1 m7,-1 l-5,4`), col, x - 28, 3, 3, 1.4); }
    else { V(E(x - 6, -12, 9, 7), col, x - 6, -12, 9, 1.6); V(SP(`M${x - 12},-2 L${x + 2},-2 L${x + 6},0 L${x - 12},0Z`), col, x - 4, -1, 7, 1.2); for (const t of [2, 5]) F(E(x + t, -1, 1.4, 1), lt(col, .1)); } };
  lg(-2, grd, 1);
  const body = SP('M-14,-10 Q-16,-28 -2,-34 Q12,-36 16,-24 Q18,-10 8,-4 Q-6,-2 -14,-10Z'); V(body, gr, 0, -20, 20);
  g.save(); g.clip(body); F(E(6, -12, 10, 8), bel); for (const [x, y] of [[-8, -26], [-4, -18], [2, -30]]) F(E(x, y, 2, 1.6), grd); g.restore();
  lg(4, gr, 0);
  for (const x of [8, 12]) { V(SP(`M${x},-14 L${x + 2},-2 L${x + 6},0 L${x - 2},0Z`), gr, x + 1, -6, 5, 1.2); }
  g.save(); g.translate(4, -32); g.rotate(hurt ? -.2 : Math.sin(o.t * 2) * .04);
  const hd = SP('M-14,2 Q-14,-10 0,-12 Q14,-12 16,0 Q14,8 0,8 Q-12,8 -14,2Z'); V(hd, gr, 0, -2, 16);
  for (const [x, s] of [[-6, 1], [7, -1]]) V(E(x, -11, 6, 5.6), gr, x, -11, 6, 1.6);
  eyesX(o, gr, [[-6, -11, 4, 1], [7, -11.4, 3.6, -1]], 'round', '#f2c43a');
  F(E(-10, 1, 2.6, 1.6), 'rgba(250,120,120,.4)');
  if (tongue) { F(SP('M2,2 Q12,0 16,2 Q12,6 2,4Z'), '#5a1220'); L(SP(`M10,3 Q${20 + tongue * 20},${-2} ${24 + tongue * 30},3`), '#e8507a', 3); V(E(24 + tongue * 30, 3, 3, 2.4), '#f07a9a', 24 + tongue * 30, 3, 3, 1); }
  else if (m === 3) { F(SP('M-6,2 Q6,0 16,1 Q8,8 -4,5Z'), '#5a1220'); F(E(6, 4, 4, 1.6), '#f07a8a'); }
  else L(SP(`M-8,2 Q4,${m === 4 ? 0 : 6} 16,0`), INK, 1.6);
  g.save(); g.translate(1, -17); g.rotate(.3 + Math.sin(o.t * 2) * .05); V(PL([-6, 0, -7, -8, -3, -4, 0, -10, 3, -4, 7, -8, 6, 0]), '#f2c14e', 0, -4, 7, 1.2); F(E(0, -2, 1.2, 1.2), '#d02a4a'); g.restore();
  g.restore();
  g.restore();
}
Object.assign(DRAW, { bimbo: o => bimboD(o, 0), hanselgretel: hanselgretelD, nano: nanoD, raperonzolo: raperonzoloD, pifferaio: pifferaioD, musicanti: musicantiD, carrozza: carrozzaD, ranocchio: ranocchioD });
