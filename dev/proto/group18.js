// ---------- gruppo 18: Isola degli Oni (Mondo 18) ----------
function momotaroD(o, boss = 0) {                               // Momotaro, il ragazzo nato dalla pesca: hachimaki bianca con la pesca, codino, kimono blu a pesche, hakama grigia, katana. Boss: armatura laccata rossa, elmo col mezzaluna d'oro, stendardo con la pesca sulla schiena
  const sk = '#f2c8a0', hair = '#1c1418', kim = boss ? '#b0283a' : '#2a4a9a', hak = '#5a5a6a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, th = u < 0 ? -u : 0;
  const b = bobOf(o, 3), peach = (x, y, r) => { V(SP(`M${x},${y + r} Q${x - r * 1.2},${y + r * .2} ${x - r * .6},${y - r * .6} Q${x},${y - r * .9} ${x},${y - r * 1.3} Q${x},${y - r * .9} ${x + r * .6},${y - r * .6} Q${x + r * 1.2},${y + r * .2} ${x},${y + r}Z`), '#ffa0a8', x, y, r, .8); F(SP(`M${x},${y - r * 1.2} q${r * .9},${-r * .5} ${r * 1.3},${-r * .1} q${-r * .6},${r * .5} ${-r * 1.3},${r * .1}Z`), '#5aa84a'); };
  g.save(); g.translate(0, b);
  if (boss) {                                                   // lo stendardo con la pesca
    const fl = Math.sin(o.t * 3) * 3; L(SP('M-10,-60 L-14,-138'), '#3a2a20', 2.6);
    V(SP(`M-14,-136 L-40,${-134 + fl} L-38,${-96 + fl} L-13,-98Z`), '#f4ecd8', -26, -116, 14, 1.4); peach(-27, -118 + fl * .6, 7);
  }
  const sand = f => V(SP(`M${f[0] - 3},${f[1] - 2} L${f[0] + 8},${f[1] - 2} L${f[0] + 8},${f[1] + 1} L${f[0] - 3},${f[1] + 1}Z`), '#c8a060', f[0] + 2, f[1], 5, 1);
  sand(legB(-3, -42, 18, 18, 5.6, 4.4, 3.2, o, Math.PI, dk(hak, .2), .8));
  const hb = limb(-5, -72, 1.9 + (w ? Math.sin(o.ph) * .6 : 0) - th * .3, 12, -.5, 11, 4.6, 4, 3, dk(kim, .2)); V(E(hb[0], hb[1], 2.8, 2.8), dk(sk, .1), hb[0], hb[1], 2.8, 1);
  const tor = SP('M-9,-78 Q2,-82 10,-76 Q12,-60 11,-44 L-11,-44 Q-12,-62 -9,-78Z'); V(tor, kim, 0, -60, 18); g.save(); g.clip(tor);
  if (boss) { for (let i = 0; i < 4; i++) { L(SP(`M-12,${-70 + i * 7} L12,${-70 + i * 7}`), '#e8b830', 1.6); } } else { peach(-3, -60, 4); peach(6, -52, 3.4); }
  F(SP('M-2,-78 L4,-78 L1,-58Z'), '#f4ecd8'); g.restore(); V(SP('M-12,-48 L12,-48 L12,-44 L-12,-44Z'), boss ? '#e8b830' : '#c8303a', 0, -46, 12, 1);
  sand(legB(3, -42, 18, 18, 6, 4.6, 3.4, o, 0, hak, .8));
  { const sw2 = w ? Math.sin(o.ph) * 3 : 0; V(SP(`M-11,-46 L11,-46 L${16 + sw2},-18 Q0,-14 ${-16 + sw2},-18Z`), hak, 0, -32, 16, 1.6); for (const x of [-6, 0, 6]) L(SP(`M${x},-44 L${x * 1.5 + sw2},-19`), dk(hak, .25), 1.2); }
  if (boss) for (const s of [-1, 1]) V(SP(`M${s * 6 - 7},-80 L${s * 6 + 7},-80 L${s * 6 + 8},-70 L${s * 6 - 8},-70Z`), '#8a1a28', s * 6, -75, 8, 1.2);   // spallacci
  g.save(); g.translate(2, -88); g.rotate(m === 3 ? -.1 : m === 4 ? -.24 : Math.sin(o.t * 2) * .04);
  const face = SP('M-7,-5 Q-7,-13 1,-13 Q9,-13 9,-5 Q9,3 6,7 Q2,9 -2,8 Q-6,5 -7,-5Z'); V(face, sk, 1, -2, 12);
  eyesX(o, sk, [[.8, -2.6, 2.7, 1], [6.6, -2.8, 2.2, -1]], 'almond', '#2a1a10'); browsX(o, [[.8, -6.6, 5, 1], [6.6, -6.8, 4, -1]], hair, 2.2, m === 3 ? 'thick' : 'arch');
  V(SP('M6,-1 Q9,1 7.6,3 Q6,3 5.6,1.6Z'), dk(sk, .05), 7, 1.6, 2.4, .9); mouthX(o, 3.6, 5.2, 5, m === 3 ? 'grin' : 'smile');
  V(SP('M-9,1 Q-11,-12 -2,-15 Q8,-17 10,-9 Q5,-12 0,-11 Q-5,-10 -7,-4 Q-7,0 -9,1Z'), hair, 0, -8, 12, 1.4);
  V(SP('M-6,-16 Q-12,-22 -6,-25 Q-2,-22 -3,-17Z'), hair, -6, -20, 5, 1.2);                                       // il codino
  if (boss) { V(SP('M-10,-6 Q-10,-20 1,-21 Q12,-20 12,-6 L8,-8 Q2,-12 -6,-8Z'), '#3a2a30', 1, -13, 12, 1.4); V(SP('M-6,-20 Q1,-34 8,-20 Q1,-28 -6,-20Z'), '#e8b830', 1, -25, 7, 1.2); }   // kabuto con la mezzaluna d'oro
  else { V(SP('M-9,-8 Q1,-13 11,-9 L11,-5 Q1,-9 -9,-4Z'), '#f4f0e8', 1, -8, 10, 1); peach(2, -8, 2.6); L(SP(`M-9,-6 q-5,${3 + Math.sin(o.t * 6) * 2} -9,${2 + Math.sin(o.t * 6) * 3}`), '#f4f0e8', 2); }   // hachimaki con la pesca
  g.restore();
  const pv = up ? [4, -108] : th ? [26 + th * 4, -74] : [15, -62], rr = up ? -.5 : th ? 1.3 + th * .2 : .5;   // la katana
  armTo(6, -74, pv[0], pv[1], 11, 10, 4.6, 4, 3, kim, up ? -1 : 1);
  g.save(); g.translate(pv[0], pv[1]); g.rotate(rr); V(SP('M-1.4,6 L-1.4,-4 L1.4,-4 L1.4,6Z'), '#2a1a20', 0, 1, 5, 1); V(E(0, -4.6, 3.4, 1.2), '#e8b830', 0, -4.6, 3.4, .8);
  V(SP('M-1.2,-5 Q-1.6,-30 1.6,-40 Q1.6,-28 1.2,-5Z'), '#e8eef6', 0, -22, 18, 1); g.restore(); V(E(pv[0], pv[1], 2.8, 2.8), sk, pv[0], pv[1], 2.8, 1);
  if (th > .3) { g.save(); g.globalAlpha = th * .6; L(SP(`M${pv[0] - 8},${pv[1] - 34} Q${pv[0] + 26},${pv[1] - 20} ${pv[0] + 24},${pv[1] + 14}`), '#ffffff', 3); g.restore(); }
  g.restore();
}

function caneD(o, big = 0) {                                    // il Cane di Momotaro: cane bianco tipo shiba, coda arricciata, sciarpa rossa; morde. Miniboss: armatura da samurai sulla schiena, elmetto, occhi decisi
  const fur = '#f4ece0', fd = '#d8ccb8', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, th = u < 0 ? -u : 0;
  const b = w ? -Math.abs(Math.sin(o.ph * 1.2)) * 3 : Math.sin(o.t * 2.4) * .8;
  g.save(); g.translate(th * 8, b + up * 3);
  V(SP(`M-24,-34 Q-36,${-46 + Math.sin(o.t * 6) * 2} -28,-54 Q-20,-56 -22,-46 Q-24,-40 -18,-36Z`), fur, -26, -46, 8, 1.4);   // coda a ricciolo
  for (const [x, off] of [[-16, Math.PI], [12, 0]]) { const f = legB(x, -24, 11, 11, 5.4, 4.4, 3.8, o, off * 1.2, fd, .8); V(E(f[0] + 2, f[1], 4.4, 2.4), fd, f[0] + 2, f[1], 4, 1); }
  const body = SP('M-26,-30 Q-26,-44 -8,-44 Q12,-46 20,-38 Q24,-28 16,-20 Q0,-17 -18,-20 Q-28,-22 -26,-30Z'); V(body, fur, -3, -32, 24);
  g.save(); g.clip(body); F(E(-4, -44, 22, 6), '#e8a860'); g.restore();
  if (big) { V(SP('M-20,-44 Q-4,-50 12,-44 L10,-30 Q-4,-26 -18,-30Z'), '#8a1a28', -4, -38, 14, 1.4); for (let i = 0; i < 3; i++) L(SP(`M-18,${-40 + i * 4} L10,${-40 + i * 4}`), '#e8b830', 1.2); }
  for (const [x, off] of [[-10, Math.PI * .5], [16, Math.PI * 1.5]]) { const f = legB(x, -22, 11, 11, 5.6, 4.6, 4, o, off * 1.2, fur, .8); V(E(f[0] + 2, f[1], 4.6, 2.6), fur, f[0] + 2, f[1], 4, 1); }
  V(SP('M12,-44 Q22,-40 22,-32 L10,-30Z'), '#d8303a', 16, -37, 7, 1.2); L(SP(`M12,-36 q-6,${4 + Math.sin(o.t * 7) * 2} -12,${3 + Math.sin(o.t * 7) * 2}`), '#d8303a', 3);   // sciarpa
  g.save(); g.translate(22, -46); g.rotate(up ? .25 : th ? -.2 : m === 4 ? .2 : Math.sin(o.t * 2) * .05);
  V(PL([-8, -6, -6, -18, 1, -9]), '#e8a860', -5, -11, 6, 1.4); V(PL([0, -9, 5, -19, 8, -7]), '#e8a860', 4, -12, 6, 1.4); F(PL([-6.4, -8, -5.6, -14, -2.4, -8.6]), '#f8c8c0');
  const hd = SP('M-9,2 Q-11,-10 1,-10 Q12,-10 16,-3 Q21,2 16,6 Q4,9 -5,7 Q-10,5 -9,2Z'); V(hd, fur, 2, -1, 13); g.save(); g.clip(hd); F(E(0, -9, 10, 5), '#e8a860'); g.restore();
  V(E(17, 0, 2.4, 1.8), '#2a1a20', 17, 0, 2.2, .8);
  eyesX(o, fur, [[6, -4, 2.2, -1]], 'beady', '#2a1a20'); browsX(o, [[6, -7.4, 4, -1]], '#c89060', 1.6, big || m === 3 ? 'thick' : 'arch');
  const op = m === 3 || th > .3; if (op) { F(SP('M8,4 Q14,11 20,5Z'), '#8a2030'); F(PL([11, 4.6, 12, 7.6, 13, 4.8]), '#ffffff'); F(PL([16, 4.4, 17, 7, 18, 4.4]), '#ffffff'); F(E(14, 8, 2, 1.2), '#f07a8a'); } else { L(SP('M9,5 Q13,7 17,5'), '#2a1a20', 1.2); F(E(13, 7.4, 1.8, 2.4), '#f07a8a'); }
  if (big) { V(SP('M-8,-8 Q2,-18 14,-10 L12,-6 Q2,-12 -6,-5Z'), '#3a2a30', 3, -10, 10, 1.2); V(SP('M2,-14 L4,-22 L6,-14Z'), '#e8b830', 4, -17, 4, .9); }
  g.restore();
  g.restore();
}

function scimmiaD(o, big = 0) {                                 // la Scimmia di Momotaro: macaco giapponese, pelo grigio-bruno, faccia e mani rosse, fascia in testa; salta e graffia. Miniboss: più grossa, gilet da samurai, bastone
  const fur = '#8a7a68', fd = dk(fur, .25), red = '#e86a6a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, th = u < 0 ? -u : 0;
  const hop = w ? -Math.abs(Math.sin(o.ph * 1.3)) * 6 : Math.sin(o.t * 3) * 1, jump = up * -10 + th * -4;
  g.save(); g.translate(th * 10, hop + jump);
  L(SP(`M-12,-26 q-14,4 -16,-8 q-1,-6 4,-6`), fd, 3);                                                                   // codina corta
  const hand = (p, c) => V(E(p[0], p[1], 3.2, 2.8), c, p[0], p[1], 3, 1);
  const f1 = legB(-5, -26, 11, 11, 5, 4, 3.4, o, Math.PI, fd, 1, 1.4); hand([f1[0] + 2, f1[1] - 1], dk(red, .2));
  const f2 = legB(4, -24, 11, 11, 5.2, 4.2, 3.6, o, 0, fur, 1, 1.4); hand([f2[0] + 2, f2[1] - 1], red);
  hand(limb(-6, -42, 2.2 + (w ? Math.sin(o.ph) * .7 : 0), 11, -.6, 10, 4, 3.4, 3, fd), dk(red, .2));
  const body = SP('M-14,-28 Q-16,-48 -2,-50 Q12,-50 13,-36 Q14,-24 6,-22 Q-8,-20 -14,-28Z'); V(body, fur, -1, -36, 16);
  g.save(); g.clip(body); F(E(3, -32, 8, 9), '#b8a890'); g.restore();
  if (big) { V(SP('M-13,-46 Q-1,-52 12,-46 L12,-30 Q-1,-26 -14,-30Z'), '#2a4a9a', -1, -38, 13, 1.2); for (const x of [-6, 4]) F(E(x, -40, 2.4, 2.4), '#e8b830'); }
  g.save(); g.translate(6, -56); g.rotate(up ? -.2 : th ? .15 : m === 4 ? -.2 : Math.sin(o.t * 2.6) * .06);
  V(E(-8, -2, 4, 4), fur, -8, -2, 4, 1.2); F(E(-8, -2, 2, 2.2), red);
  const hd = SP('M-9,0 Q-10,-12 1,-12 Q12,-12 12,-2 Q12,8 2,9 Q-8,9 -9,0Z'); V(hd, fur, 1, -2, 12);
  V(SP('M-3,-3 Q-3,-9 4,-9 Q11,-9 11,-2 Q11,6 4,6 Q-3,6 -3,-3Z'), red, 4, -2, 8, 1.2);                                     // la faccia rossa
  eyesX(o, red, [[2, -4, 2, 1], [7.6, -4, 1.8, -1]], 'beady', '#2a1a20'); browsX(o, [[2, -7, 3.4, 1], [7.6, -7, 3, -1]], fd, 1.6, m === 3 ? 'thick' : 'arch');
  F(E(5.6, -.4, 1.4, .8), dk(red, .35)); mouthX(o, 5, 3, 5, m === 3 || th > .3 ? 'grin' : 'smirk');
  V(SP('M-9,-8 Q1,-15 12,-9 L12,-6 Q1,-11 -9,-5Z'), big ? '#e8b830' : '#f4f0e8', 1, -9, 10, 1); L(SP(`M-9,-7 q-5,${2 + Math.sin(o.t * 6) * 2} -8,${3 + Math.sin(o.t * 6) * 2}`), big ? '#e8b830' : '#f4f0e8', 1.8);
  g.restore();
  const pv = up ? [12, -76] : th ? [24 + th * 6, -46] : [14, -32];
  if (big) { armTo(6, -44, pv[0], pv[1], 10, 9, 4.2, 3.6, 3.2, fur, up ? -1 : 1); g.save(); g.translate(pv[0], pv[1]); g.rotate(up ? -.4 : th ? 1.3 : .2); V(SP('M-1.6,14 L-1.6,-30 L1.6,-30 L1.6,14Z'), '#8a2a2a', 0, -8, 22, 1.2); for (const y of [-28, 12]) V(E(0, y, 2.6, 1.6), '#e8b830', 0, y, 2.4, .8); g.restore(); hand(pv, red); }
  else { armTo(6, -44, pv[0], pv[1], 10, 9, 4.2, 3.6, 3.2, fur, up ? -1 : 1); hand(pv, red); if (th > .3) for (const d of [-4, 0, 4]) L(SP(`M${pv[0] + 4},${pv[1] - 6 + d} l8,4`), '#ffffff', 1.4); }
  g.restore();
}

function fagianoD(o) {                                          // il Fagiano di Momotaro: fagiano verde giapponese, faccia rossa, coda lunghissima a strisce; vola e becca dall'alto
  const gr = '#2a7a5a', gd = dk(gr, .3), u = o.u, m = o.mood, up = u > 0 ? u : 0, th = u < 0 ? -u : 0;
  const fl = Math.sin(o.t * 10), hy = -64 + Math.sin(o.t * 3) * 4 - up * 10 + th * 14;
  g.save(); g.translate(th * 12, hy); g.rotate(th * .4 - up * .2);
  V(SP('M-12,2 Q-34,6 -54,2 Q-36,10 -12,8Z'), '#a8804a', -30, 5, 20, 1.2); for (let i = 0; i < 5; i++) L(SP(`M${-18 - i * 7},${4 + i * .2} l-2,${5 - i * .4}`), '#5a3a1a', 1.2);   // coda lunga a strisce
  g.save(); g.translate(-4, -4); g.rotate(-.5 - fl * .6); V(SP('M0,0 Q-10,-18 -28,-16 Q-20,-8 -24,-2 Q-12,2 0,4Z'), '#6a8a5a', -12, -8, 14, 1.4); for (let i = 0; i < 3; i++) L(SP(`M${-10 - i * 6},${-12 + i * 3} l-6,4`), '#3a5a3a', 1); g.restore();
  const body = SP('M-14,4 Q-16,-10 0,-12 Q14,-12 18,-2 Q18,8 6,10 Q-8,12 -14,4Z'); V(body, gr, 1, -1, 16);
  g.save(); g.clip(body); F(E(4, 6, 12, 5), '#3a5a8a'); for (let i = 0; i < 6; i++) F(E(-8 + i * 4, -4 + (i % 2) * 3, 1.4, 1), 'rgba(255,255,255,.25)'); g.restore();
  g.save(); g.translate(-2, -2); g.rotate(-.2 + fl * .7); V(SP('M0,0 Q-8,-20 -26,-24 Q-18,-12 -22,-6 Q-10,0 0,4Z'), '#8aa86a', -10, -8, 14, 1.4); g.restore();
  for (const x of [-2, 4]) L(SP(`M${x},9 l${th * 4},8 m0,0 l3,2 m-3,-2 l-2,3`), '#c8a060', 1.6);
  g.save(); g.translate(16, -12); g.rotate(up ? -.3 : th ? .5 : m === 4 ? -.3 : Math.sin(o.t * 2.6) * .06);
  const hd = SP('M-6,4 Q-8,-6 2,-8 Q10,-8 11,0 Q10,6 2,7 Q-4,7 -6,4Z'); V(hd, '#2a4a6a', 2, 0, 9);
  V(SP('M0,-4 Q4,-8 8,-4 Q8,2 4,3 Q0,2 0,-4Z'), '#e02a3a', 4, -1, 5, 1);                                                // la faccia rossa
  eyesX(o, '#e02a3a', [[4.6, -2, 1.8, -1]], 'beady', '#1b1238'); browsX(o, [[4.6, -4.6, 3, -1]], '#1b1238', 1.4, m === 3 ? 'thick' : 'flat');
  V(SP(`M10,-1 L17,${1 + th * 2} L10,3Z`), '#e8c060', 13, 1, 4, 1);
  g.restore();
  g.restore();
}

function reoniD(o) {                                            // il Re degli Oni: orco giapponese rosso, corna, capelli selvaggi, zanne, perizoma di pelle di tigre, mazza di ferro chiodata (kanabō). Furia: più è ferito, più diventa rosso fuoco e fuma
  const fury = o.fury != null ? o.fury : (o.mood === 4 ? .6 : 0), sk = mix('#d8443a', '#ff2a10', fury), sd = dk(sk, .25), hair = '#2a1a20', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, th = u < 0 ? -u : 0;
  const b = bobOf(o, 3.4);
  g.save(); g.translate(th * 8, b);
  if (fury > .2) { g.save(); g.globalAlpha = fury * .5; for (let i = 0; i < 3; i++) { const k2 = (o.t * .8 + i / 3) % 1; F(E(-6 + i * 8, -150 - k2 * 30, 6 + k2 * 10, 5 + k2 * 6), 'rgba(240,240,240,.6)'); } g.restore(); glowB(0, -80, 70, `rgba(255,80,30,${fury * .35})`); }
  const foot = f => V(SP(`M${f[0] - 6},${f[1] - 4} Q${f[0] + 12},${f[1] - 6} ${f[0] + 13},${f[1] + 1} L${f[0] - 6},${f[1] + 1}Z`), sd, f[0] + 3, f[1] - 2, 8, 1.4);
  foot(legB(-8, -50, 24, 24, 12, 10, 8, o, Math.PI, sd, .6));
  const ba = limb(-16, -110, 1.9 + (w ? Math.sin(o.ph) * .4 : 0), 20, -.5, 18, 11, 9, 8, sd); V(E(ba[0], ba[1], 7, 7), sd, ba[0], ba[1], 7, 1.4);
  const tor = SP('M-26,-114 Q0,-126 26,-112 Q32,-80 22,-50 L-22,-50 Q-32,-80 -26,-114Z'); V(tor, sk, 0, -84, 34); g.save(); g.clip(tor);
  F(E(6, -96, 14, 10), 'rgba(255,220,200,.18)'); L(SP('M-12,-98 Q0,-92 12,-98'), sd, 2); L(SP('M-8,-82 Q0,-78 8,-82'), sd, 1.6); L(SP('M0,-108 L0,-66'), sd, 1.4); g.restore();
  const loin = SP('M-24,-58 L24,-58 L26,-36 L14,-30 L6,-38 L-4,-30 L-14,-38 L-26,-32Z'); V(loin, '#f0b030', 0, -44, 26, 1.8); g.save(); g.clip(loin); for (let i = 0; i < 6; i++) F(SP(`M${-22 + i * 9},-58 q4,10 -2,22 l3,0 q5,-12 1,-22Z`), '#1c1418'); g.restore();
  foot(legB(8, -50, 24, 24, 12.6, 10.4, 8.4, o, 0, sk, .6));
  g.save(); g.translate(6, -132); g.rotate(m === 3 ? -.08 : m === 4 ? -.2 : Math.sin(o.t * 1.8) * .04);
  V(SP('M-22,6 Q-30,-14 -18,-28 Q-4,-38 12,-32 Q28,-26 26,-6 Q20,-14 12,-16 Q0,-22 -12,-14 Q-18,-6 -22,6Z'), hair, 0, -14, 26, 1.6);   // criniera
  const face = SP('M-14,-6 Q-14,-22 2,-22 Q18,-22 18,-6 Q18,8 12,14 Q2,18 -6,14 Q-14,8 -14,-6Z'); V(face, sk, 2, -2, 18);
  for (const [x, a] of [[-6, -.4], [10, .3]]) { g.save(); g.translate(x, -20); g.rotate(a); V(SP('M-3.6,0 Q-3,-12 2,-18 Q1,-10 3.6,0Z'), '#f4ecd8', 0, -8, 6, 1.4); L(SP('M-2.6,-4 L2.8,-5 M-2,-9 L2,-10'), '#c8b898', 1); g.restore(); }   // le corna
  eyesX(o, sk, [[-1, -6, 3.6, 1], [10, -6, 3.2, -1]], 'wide', fury > .5 ? '#ffe040' : '#f2c040'); browsX(o, [[-1, -11.6, 7, 1], [10, -11.6, 6, -1]], hair, 3.4, 'thick');
  V(SP('M3,-2 Q6,4 3,6 Q0,6 0,3Z'), sd, 2, 2, 4, 1); mouthX(o, 4, 10, 12, m === 0 || m === 1 ? 'grin' : 'snarl');
  for (const x of [-2, 10]) V(PL([x - 2, 9, x, 14, x + 2, 9]), '#f4ecd8', x, 11, 3, .8);
  g.restore();
  const pv = up ? [14, -170] : th ? [44 + th * 8, -100] : [30, -84], rr = up ? -.5 : th ? 1.3 + th * .3 : .2;   // il kanabō
  armTo(16, -110, pv[0], pv[1], 20, 18, 11, 9, 8, sk, up ? -1 : 1);
  g.save(); g.translate(pv[0], pv[1]); g.rotate(rr);
  V(SP('M-3,10 L-3,-8 Q-8,-50 -6,-62 L6,-62 Q8,-50 3,-8 L3,10Z'), '#4a4a5a', 0, -26, 30, 1.6); for (let i = 0; i < 4; i++) for (const s of [-1, 1]) V(PL([s * 5, -18 - i * 11, s * 9, -21 - i * 11, s * 5, -24 - i * 11]), '#c8c8d8', s * 6, -21 - i * 11, 3, .8);
  V(SP('M-4,2 L4,2 L4,12 L-4,12Z'), '#8a2a2a', 0, 7, 5, 1); g.restore(); V(E(pv[0], pv[1], 7.4, 7.4), sk, pv[0], pv[1], 7, 1.4);
  if (th > .3) { g.save(); g.globalAlpha = th * .6; L(SP(`M${pv[0] - 20},${pv[1] - 50} Q${pv[0] + 30},${pv[1] - 30} ${pv[0] + 36},${pv[1] + 20}`), '#fff4c0', 4); g.restore(); }
  g.restore();
}
Object.assign(DRAW, { momotaro: o => momotaroD(o, 0), momotarore: o => momotaroD(o, 1), cane: o => caneD(o, 0), canere: o => caneD(o, 1), scimmiamomo: o => scimmiaD(o, 0), scimmiare: o => scimmiaD(o, 1), fagiano: fagianoD, reoni: reoniD, reonifuria: o => reoniD(Object.assign({}, o, {fury:1})) });
