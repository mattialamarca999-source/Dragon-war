// ---------- gruppo 17: Giungla di Mowgli (Mondo 17) ----------
function cobrabiancoD(o) {                                      // il Cobra Bianco, Re del tesoro delle Tane Fredde: arrotolato su un mucchio d'oro che si trascina dietro, cappuccio enorme coi falsi occhi neri cerchiati d'oro, corona, e con la coda stringe l'Ankus del Re (il pungolo d'oro coi rubini); sputa veleno verde
  const sc = '#efe8d4', sc2 = '#cfc4a4', gold = '#e8b830', ru = '#d0203a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, hit = u < 0 ? -u : 0;
  const sw = Math.sin(o.t * 2 + (w ? o.ph * 1.4 : 0)), bob = w ? Math.sin(o.ph * 2) * 1.2 : 0;
  const tube = (p, wd) => { L(p, INK, wd + 4.4); L(p, sc, wd); L(p, 'rgba(255,255,255,.55)', wd * .22); };
  g.save(); g.translate(hit * 6, 0);
  // il mucchio del tesoro
  V(SP('M-46,0 Q-40,-14 -16,-16 Q14,-17 30,-8 Q36,-3 34,0Z'), gold, -6, -8, 36, 1.4);
  for (const [x, y, c] of [[-38, -4, gold], [-28, -9, '#f4cc50'], [-14, -12, gold], [2, -13, '#f4cc50'], [18, -10, gold], [28, -4, '#f4cc50'], [-20, -3, gold], [8, -4, gold]]) { V(E(x, y, 4.4, 2.4), c, x, y, 4.4, 1); L(E(x, y, 2.4, 1.2), 'rgba(160,100,20,.6)', .8); }
  V(SP('M22,-4 L26,-18 L30,-4Z'), '#f4cc50', 26, -10, 6, 1); V(E(26, -18, 4, 2), '#f4cc50', 26, -18, 4, 1); V(E(-30, -2, 3, 2.2), '#3ac8a0', -30, -2, 3, .8);   // calice e gemma
  g.save(); g.translate(0, bob);
  // la coda stringe l'Ankus del Re
  const ax = -40, ay = -14, ar = sw * .06 - up * .25;
  g.save(); g.translate(ax, ay); g.rotate(ar);
  V(SP('M-1.8,4 L-1.8,-46 L1.8,-46 L1.8,4Z'), gold, 0, -20, 24, 1.2); for (const y of [-6, -18, -30]) { V(E(0, y, 3.2, 2), '#c89820', 0, y, 3, .8); F(E(0, y, 1.4, 1.2), ru); }
  V(SP('M0,-44 Q-12,-46 -12,-56 Q-12,-62 -6,-62 Q-9,-56 -6,-52 Q-3,-48 1,-48Z'), gold, -6, -54, 8, 1.2); V(SP('M-1.8,-46 L0,-60 L1.8,-46Z'), '#f4e0a0', 0, -52, 6, 1);   // gancio e punta
  V(E(0, -46, 3, 3), ru, 0, -46, 3, 1); F(E(-1, -47, 1, 1), 'rgba(255,255,255,.8)'); glowB(0, -46, 8, 'rgba(255,60,80,.4)');
  g.restore();
  tube(SP(`M-14,-18 Q-34,-16 -38,-22 Q-44,-30 -36,-30 Q-30,-28 -40,-20`), 6);
  // le spire
  const coil = (cy, rx, ry, wd) => { F(E(-6, cy - 2, rx, ry), dk(sc, .3)); F(E(-6, cy - 4, rx * .7, ry * .55), dk(sc, .45)); tube(SP(`M${-6 - rx},${cy} A${rx},${ry} 0 1 1 ${-6 + rx},${cy} A${rx},${ry} 0 1 1 ${-6 - rx},${cy}`), wd); g.save(); g.globalAlpha = .35; for (let i = 0; i < 9; i++) { const a = Math.PI * (.12 + i * .095); L(SP(`M${-6 + Math.cos(a) * rx},${cy + Math.sin(a) * ry - wd * .3} l0,${wd * .6}`), sc2, 1.2); } g.restore(); };
  coil(-20, 24, 8, 11); coil(-30, 18, 6, 10);
  // il collo
  const nx = 10 - up * 8 + hit * 8, ny = -74 - up * 4;
  chain([[4, -32], [20 + sw * 2, -44], [4 - up * 4, -58], [nx, ny]], 12, 7.4, 6.4, sc, sc2);
  g.save(); g.translate(nx, ny); g.rotate(-up * .2 + hit * .22 + sw * .03);
  // il cappuccio enorme coi falsi occhi
  const hood = SP('M-2,18 Q-30,8 -30,-14 Q-28,-40 -4,-44 Q16,-42 20,-22 Q24,2 8,18Z'); V(hood, sc, -4, -12, 30); g.save(); g.clip(hood);
  F(SP('M-30,-14 Q-28,-40 -4,-44 Q-14,-30 -16,-10 Q-18,8 -2,18 Q-30,8 -30,-14Z'), 'rgba(170,150,110,.35)');
  for (const [x, y, r] of [[-17, -18, 6.4], [9, -24, 4.6]]) { F(E(x, y, r * 1.45, r * 1.3), gold); F(E(x, y, r, r * .95), '#1b1426'); F(E(x - r * .3, y - r * .3, r * .28, r * .26), 'rgba(255,255,255,.35)'); }
  for (let i = 0; i < 5; i++) L(SP(`M-6,${10 - i * 7} Q-1,${8 - i * 7} 4,${10 - i * 7}`), 'rgba(150,120,70,.55)', 1.6);
  g.restore();
  // la testa con la corona
  const hd = SP('M-4,-30 Q2,-41 14,-40 Q28,-38 31,-29 Q32,-21 22,-20 Q8,-19 -2,-23 Q-6,-26 -4,-30Z'); V(hd, sc, 13, -30, 15); g.save(); g.clip(hd); for (let i = 0; i < 4; i++) L(SP(`M${2 + i * 6},-40 l2,4`), 'rgba(150,130,90,.55)', 1); g.restore();
  V(SP('M3,-38 L5,-47 L9,-41 L13,-49 L17,-41 L21,-46 L21,-37 Q12,-40 3,-38Z'), gold, 12, -42, 9, 1.4); for (const x of [5, 13, 21]) V(E(x, x === 13 ? -49 : x === 5 ? -47 : -46, 1.4, 1.4), ru, x, -47, 1.4, .5);
  const op = hit > .2 ? 1 : up ? .45 : 0;
  if (op) { V(SP(`M6,-24 Q20,${-24 + op * 2} 31,-27 Q22,${-18 + op * 7} 6,-22Z`), '#8a2030', 18, -22, 11, 1); for (const x of [20, 26]) { F(PL([x, -25.6, x + 1, -20.6, x + 2, -25.8]), '#ffffff'); F(E(x + 1, -19.6, .8, 1.2), '#8aff6a'); } }
  else { L(SP('M7,-22.6 Q19,-22 30,-26'), '#5a4a30', 1.4); if (o.t % 2.4 < .6) L(SP(`M31,-26 l7,${Math.sin(o.t * 30) * 1.6} m-2,0 l3,-2 m-3,2 l3,2`), ru, 1.2); }
  F(SP('M11,-33 Q16,-37 21,-33 Q16,-30 11,-33Z'), '#ff3a3a', '#ff7a5a'); F(E(16.4, -33, .9, 1.8), '#1b0a10'); if (m === 3 || hit) glowB(16, -33, 7, 'rgba(255,60,60,.5)');
  L(SP(`M10,-35.4 Q16,${m === 3 || hit ? -34.6 : -37.6} 22,-35.6`), '#a89870', 2);
  if (hit > .2) { glowB(40, -25, 16, 'rgba(120,255,120,.55)'); for (let i = 0; i < 4; i++) F(E(36 + i * 7, -25 + i * 1.8, 2.8 - i * .5, 2.4 - i * .4), '#8aff6a'); }
  g.restore();
  g.restore();
  g.restore();
}

function mowgliD(o, fire = 0) {                                 // Mowgli: il cucciolo d'uomo, pelle bruna, capelli neri a caschetto spettinati, perizoma rosso, piedi nudi; bastone. Boss: col Fiore Rosso, la torcia accesa, e la collana di zanne
  const sk = '#b8703e', hair = '#1c1418', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, th = u < 0 ? -u : 0;
  const b = bobOf(o, 3);
  g.save(); g.translate(0, b);
  const foot = f => V(SP(`M${f[0] - 3},${f[1] - 3} Q${f[0] + 8},${f[1] - 4} ${f[0] + 9},${f[1] + 1} L${f[0] - 3},${f[1] + 1}Z`), dk(sk, .08), f[0] + 3, f[1] - 1, 5, 1.1);
  foot(legB(-3, -40, 18, 18, 5, 3.8, 2.8, o, Math.PI, dk(sk, .2), .8));
  const hb = limb(-5, -70, 1.9 + (w ? Math.sin(o.ph) * .6 : 0) - th * .4, 12, -.5, 11, 3.6, 3, 2.4, dk(sk, .18)); V(E(hb[0], hb[1], 2.6, 2.6), dk(sk, .12), hb[0], hb[1], 2.6, 1);
  const tor = SP('M-8,-74 Q2,-78 9,-72 Q11,-56 9,-42 L-9,-42 Q-10,-58 -8,-74Z'); V(tor, sk, 0, -58, 18); g.save(); g.clip(tor); F(E(5, -62, 6, 12), 'rgba(255,220,180,.25)'); L(SP('M-4,-62 Q1,-60 6,-62'), dk(sk, .25), 1); g.restore();
  V(SP('M-10,-44 L10,-44 L11,-36 L6,-30 L1,-38 L-4,-30 L-10,-36Z'), '#c8303a', 0, -37, 11, 1.4); L(SP('M-10,-44 L10,-44'), '#8a1a20', 1.6);
  if (fire) { for (let i = 0; i < 5; i++) { const x = -5 + i * 2.6, y = -71 + Math.abs(i - 2) * -1.2; V(PL([x - 1.2, y, x, y + 5, x + 1.2, y]), '#f4ecd8', x, y + 2, 2, .7); } L(SP('M-7,-72 Q0,-66 8,-71'), '#5a3a20', 1); }
  foot(legB(3, -40, 18, 18, 5.2, 4, 3, o, 0, sk, .8));
  g.save(); g.translate(2, -86); g.rotate(m === 3 ? -.12 : m === 4 ? -.26 : Math.sin(o.t * 2) * .04);
  const face = SP('M-7,-5 Q-7,-13 1,-13 Q9,-13 9,-5 Q9,3 6,7 Q2,9 -2,8 Q-6,5 -7,-5Z'); V(face, sk, 1, -2, 12);
  eyesX(o, sk, [[.8, -2.6, 2.8, 1], [6.6, -2.8, 2.3, -1]], 'almond', '#3a2010'); browsX(o, [[.8, -6.8, 5, 1], [6.6, -7, 4, -1]], hair, 2, m === 3 ? 'thick' : 'arch');
  V(SP('M6,-1 Q10,2 8,4 Q6,4 5.4,2Z'), dk(sk, .05), 7.6, 2, 3, 1); mouthX(o, 3.6, 5.4, 5, m === 0 || m === 1 ? 'smile' : 'grin');
  V(E(-6, -2, 2.2, 3), sk, -6, -2, 2.4, 1);
  V(SP('M-9,2 Q-12,-10 -6,-15 Q0,-19 6,-17 Q12,-16 11,-9 Q7,-12 2,-10 Q-1,-13 -4,-9 Q-6,-5 -6,2 Q-7,6 -9,2Z'), hair, 0, -8, 12, 1.4);
  for (const [x, a] of [[-6, -2.6], [-1, -2], [5, -1.5], [9, -1]]) L(SP(`M${x},-15 l${Math.cos(a) * 4},${Math.sin(a) * 4}`), hair, 2.2);
  g.restore();
  if (fire) {                                                     // il Fiore Rosso
    const pv = up ? [4, -110] : th ? [26 + th * 4, -86] : [16, -68];
    armTo(6, -72, pv[0], pv[1], 11, 10, 3.6, 3, 2.4, sk, up ? -1 : 1);
    g.save(); g.translate(pv[0], pv[1]); g.rotate(up ? -.3 : th ? .9 : .15);
    V(SP('M-2,10 L-2,-18 L2,-18 L2,10Z'), '#6a4426', 0, -4, 14, 1.2); V(SP('M-3.6,-18 L3.6,-18 L3,-22 L-3,-22Z'), '#3a2a20', 0, -20, 4, 1);
    const fl = 1 + Math.sin(o.t * 16) * .12; glowB(0, -30, 26 * fl, 'rgba(255,150,40,.75)');
    F(SP(`M-6,-22 Q-9,-32 -3,${-40 * fl} Q-1,-32 2,${-44 * fl} Q4,-34 7,-36 Q8,-28 6,-22Z`), '#ff6a1a', '#ffb040'); F(SP(`M-3,-22 Q-4,-28 0,-34 Q2,-28 4,-30 Q4,-24 3,-22Z`), '#ffd35a', '#fff0a0');
    g.restore(); V(E(pv[0], pv[1], 2.6, 2.6), sk, pv[0], pv[1], 2.6, 1);
  } else {                                                        // il bastone
    const pv = up ? [2, -104] : th ? [24 + th * 6, -70] : [14, -60], rr = up ? -.6 : th ? 1.4 + th * .3 : .3;
    armTo(6, -72, pv[0], pv[1], 11, 10, 3.6, 3, 2.4, sk, up ? -1 : 1);
    g.save(); g.translate(pv[0], pv[1]); g.rotate(rr); V(SP('M-1.6,16 L-1.6,-34 Q0,-38 1.6,-34 L1.6,16Z'), '#8a6a3a', 0, -9, 26, 1.2); L(SP('M0,-28 l-4,-4 M0,-18 l4,-3'), '#5a8a3a', 1.4); g.restore();
    V(E(pv[0], pv[1], 2.6, 2.6), sk, pv[0], pv[1], 2.6, 1);
  }
  g.restore();
}

function balooD(o) {                                            // Baloo: il vecchio orso bruno della giungla, in piedi, panciuto e bonario, muso chiaro; dà zampate
  const fur = '#7a5a40', fd = dk(fur, .25), mz = '#d8c0a0', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, th = u < 0 ? -u : 0;
  const b = bobOf(o, 2.4);
  const paw = (f, c) => { V(E(f[0] + 3, f[1] - 1, 9, 4.6), c, f[0] + 3, f[1] - 1, 9, 1.2); for (const t2 of [-3, 0, 3]) F(E(f[0] + 10, f[1] - 2 + t2 * .5, 1.1, .8), '#e8e0d0'); };
  g.save(); g.translate(0, b);
  paw(legB(-10, -36, 17, 16, 11, 9, 8, o, Math.PI, fd, .6), fd);
  const ba = limb(-16, -70, 2 + (w ? Math.sin(o.ph) * .4 : 0) + up * .5, 17, -.6, 15, 10, 8.4, 7.4, fd); V(E(ba[0], ba[1], 7, 6.4), fd, ba[0], ba[1], 7, 1.2);
  const body = SP('M-26,-56 Q-30,-88 -6,-94 Q18,-96 24,-74 Q32,-50 22,-34 Q2,-26 -16,-30 Q-28,-38 -26,-56Z'); V(body, fur, -2, -62, 32);
  g.save(); g.clip(body); F(E(6, -50, 16, 20), '#a8886a'); for (let i = 0; i < 6; i++) L(SP(`M${-22 + i * 6},${-88 + (i % 2) * 5} q2,4 0,8`), fd, 1.2); g.restore();
  paw(legB(8, -36, 17, 16, 11.4, 9.4, 8.4, o, 0, fur, .6), fur);
  g.save(); g.translate(8, -100); g.rotate(up ? -.2 * up : th ? .2 : m === 4 ? .2 : Math.sin(o.t * 1.6) * .05);
  V(E(-10, -14, 6, 6), fur, -10, -14, 6, 1.4); V(E(7, -16, 5.4, 5.4), fur, 7, -16, 5.4, 1.4); F(E(-10, -14, 3, 3), '#c8a080'); F(E(7, -16, 2.6, 2.6), '#c8a080');
  const hd = SP('M-16,0 Q-18,-16 -2,-18 Q14,-18 16,-6 Q20,6 12,12 Q0,16 -10,10 Q-18,6 -16,0Z'); V(hd, fur, 0, -2, 18);
  V(E(9, 3, 10, 7.6), mz, 9, 3, 10, 1.4); V(E(16, -1, 4, 3), '#2a1a14', 16, -1, 4, 1); F(E(15, -2, 1.2, .8), 'rgba(255,255,255,.6)');
  eyesX(o, fur, [[-1, -6, 2.6, 1], [8, -7, 2.2, -1]], 'beady', '#2a1a14'); browsX(o, [[-1, -10.4, 5, 1], [8, -11.4, 4, -1]], dk(fur, .45), 2.2, 'bushy');
  mouthX(o, 9, 7, 7, m === 3 || th > .3 ? 'snarl' : 'smile');
  g.restore();
  const pv = up ? [24, -126] : th ? [46 + th * 6, -72] : [26, -52];                                                          // la zampata
  armTo(14, -76, pv[0], pv[1], 16, 15, 10.4, 8.8, 7.8, fur, up ? -1 : 1); V(E(pv[0], pv[1], 7.6, 6.6), dk(fur, .1), pv[0], pv[1], 7, 1.4); for (const t2 of [-3, 0, 3]) F(E(pv[0] + 6, pv[1] + t2, 1.2, .9), '#e8e0d0');
  if (th > .3) { g.save(); g.globalAlpha = th * .7; L(SP(`M${pv[0] - 4},${pv[1] - 22} Q${pv[0] + 16},${pv[1] - 10} ${pv[0] + 12},${pv[1] + 16}`), '#fff4c0', 3); g.restore(); }
  g.restore();
}

function bagheeraD(o, nera = 0) {                               // Bagheera: la pantera nera, elegante, occhi verde-oro, coda lunga; salta e graffia. Miniboss: occhi che brillano, rosetta delle macchie viola, collare d'oro spezzato
  const fur = nera ? '#1c1626' : '#26222e', fd = '#121018', hi = nera ? 'rgba(170,120,255,.45)' : 'rgba(150,160,200,.35)', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, th = u < 0 ? -u : 0;
  const crouch = up * 6, leap = th * 10;
  const b = w ? -Math.abs(Math.sin(o.ph * 1.2)) * 2.5 : Math.sin(o.t * 2.2) * .8;
  g.save(); g.translate(leap, b + crouch - leap * .6);
  const tw = Math.sin(o.t * 2.4); L(SP(`M-28,-34 Q-46,${-30 + tw * 6} -50,${-48 + tw * 8} Q-52,${-58 + tw * 6} -44,${-60 + tw * 4}`), fd, 7.4); L(SP(`M-28,-34 Q-46,${-30 + tw * 6} -50,${-48 + tw * 8} Q-52,${-58 + tw * 6} -44,${-60 + tw * 4}`), fur, 5);
  for (const [x, off] of [[-20, Math.PI], [14, 0]]) { const f = legB(x, -26, 12, 13, 6.4, 5, 4.4, o, off * 1.2, fd, .7); V(E(f[0] + 2, f[1], 5, 2.6), fd, f[0] + 2, f[1], 5, 1); }
  const body = SP('M-30,-32 Q-30,-46 -10,-46 Q12,-48 24,-42 Q30,-34 22,-22 Q0,-18 -22,-22 Q-32,-24 -30,-32Z'); V(body, fur, -3, -34, 28);
  g.save(); g.clip(body); F(E(0, -44, 22, 4), hi); if (nera) for (let i = 0; i < 7; i++) { const x = -22 + i * 7, y = -38 + (i % 2) * 6; L(E(x, y, 2.4, 2), 'rgba(170,120,255,.35)', 1); } g.restore();
  for (const [x, off] of [[-12, Math.PI * .5], [20, Math.PI * 1.5]]) { const f = legB(x, -24, 12, 13, 6.6, 5.2, 4.6, o, off * 1.2, fur, .7); V(E(f[0] + 2, f[1], 5.4, 2.8), fur, f[0] + 2, f[1], 5, 1); if (th > .3) for (const t2 of [-2, 0, 2]) L(SP(`M${f[0] + 6},${f[1] + t2} l3,1`), '#f4f0e8', 1); }
  g.save(); g.translate(26, -46); g.rotate(up ? .25 : th ? -.15 : m === 4 ? .2 : Math.sin(o.t * 1.6) * .04);
  V(PL([-8, -6, -6, -16, 0, -8]), fur, -5, -10, 6, 1.4); V(PL([0, -8, 4, -17, 7, -7]), fur, 4, -11, 6, 1.4); F(PL([-6.6, -8, -5.6, -13, -2.6, -8.6]), '#5a4060');
  const hd = SP('M-10,2 Q-12,-10 0,-10 Q12,-10 16,-3 Q20,2 16,6 Q4,10 -6,8 Q-11,6 -10,2Z'); V(hd, fur, 2, -1, 14); g.save(); g.clip(hd); F(E(2, -8, 10, 3), hi); g.restore();
  V(E(15, 1, 2.2, 1.6), '#3a2a3a', 15, 1, 2, .8);
  const ec = nera ? '#d8a0ff' : '#c8e040'; F(SP('M1,-4 Q5,-7 9,-4 Q5,-2 1,-4Z'), ec, nera ? '#e8c8ff' : '#e8ff80'); F(E(5, -4, .7, 1.4), '#0a0810'); if (nera) glowB(5, -4, 8, 'rgba(200,140,255,.6)');
  browsX(o, [[5, -7.6, 6, -1]], '#0a0810', 1.6, m === 3 || th ? 'thick' : 'flat');
  const op = m === 3 || th > .3; if (op) { F(SP('M6,4 Q12,10 18,5 Z'), '#7a1a30'); F(PL([9, 4.6, 10, 8, 11, 4.8]), '#ffffff'); F(PL([14, 4.4, 15, 7.4, 16, 4.4]), '#ffffff'); } else L(SP('M6,5 Q11,7 16,5'), '#0a0810', 1.2);
  for (const s of [-1, 1]) L(SP(`M16,${2 + s} l8,${s * 2}`), 'rgba(240,240,250,.6)', .7);
  if (nera) { V(SP('M-9,6 Q0,12 8,8 L7,11 Q0,15 -9,9Z'), '#e8b830', 0, 9, 9, 1); F(E(-2, 11, 1.6, 1.6), '#c8303a'); }
  g.restore();
  g.restore();
}

function hathiD(o, re = 0) {                                    // Hathi: l'elefante capo della giungla, grigio, orecchie enormi, zanne; carica. Re: gualdrappa rossa e oro sulla schiena e sulla fronte, zanne con anelli d'oro
  const sk = '#8a8a96', sd = dk(sk, .22), u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, th = u < 0 ? -u : 0;
  const b = w ? -Math.abs(Math.sin(o.ph)) * 2.5 : Math.sin(o.t * 1.6) * 1;
  g.save(); g.translate(th * 12, b);
  const leg = (x, off, c) => { const p = o.ph + off, a = w ? Math.sin(p) * 6 : 0, lift = w ? Math.max(0, Math.cos(p)) * 4 : 0; V(SP(`M${x - 8},-46 L${x + 8},-46 L${x + 8 + a},${-4 - lift} Q${x + a},${-lift + 1} ${x - 8 + a},${-4 - lift}Z`), c, x + a, -24, 12, 1.6); for (const t2 of [-4, 0, 4]) F(E(x + a + t2, -3 - lift, 1.8, 1.2), '#e8e4d8'); };
  leg(-24, Math.PI, sd); leg(14, 0, sd);
  L(SP(`M-44,-60 Q-52,${-48 + Math.sin(o.t * 3) * 4} -50,-36`), sd, 2.4);
  const body = SP('M-46,-60 Q-48,-96 -10,-100 Q30,-102 40,-76 Q44,-52 32,-42 Q0,-34 -34,-40 Q-48,-46 -46,-60Z'); V(body, sk, -4, -70, 44);
  g.save(); g.clip(body); F(E(-4, -46, 40, 10), 'rgba(40,30,60,.18)'); for (let i = 0; i < 6; i++) L(SP(`M${-30 + i * 12},-60 q3,4 0,8`), sd, 1); g.restore();
  if (re) { const gw = SP('M-28,-98 Q0,-104 24,-96 L28,-62 Q0,-56 -30,-62Z'); V(gw, '#c8202a', -2, -80, 28, 1.6); g.save(); g.clip(gw); for (let i = 0; i < 6; i++) F(SP(`M${-28 + i * 10},-62 l5,-8 l5,8Z`), '#e8b830'); L(SP('M-30,-90 L28,-90'), '#e8b830', 2.4); g.restore(); for (let i = 0; i < 6; i++) V(E(-26 + i * 10, -58, 2.2, 3), '#e8b830', -26 + i * 10, -58, 2.4, .8); }
  leg(-14, Math.PI * .5, sk); leg(26, Math.PI * 1.5, sk);
  g.save(); g.translate(36, -78); g.rotate(up ? -.25 : th ? .1 : m === 4 ? .15 : Math.sin(o.t * 1.4) * .04);
  const ef = Math.sin(o.t * 2.2) * .12; g.save(); g.translate(-6, -4); g.rotate(-.1 + ef); const ear = SP('M0,-14 Q-26,-22 -30,0 Q-28,20 -6,22 Q2,10 2,0Z'); V(ear, sk, -14, 2, 22, 1.8); g.save(); g.clip(ear); F(E(-12, 2, 12, 14), '#b89aa8'); g.restore(); g.restore();
  const hd = SP('M-6,-18 Q8,-26 20,-16 Q26,-6 22,8 Q14,14 6,12 Q-6,10 -8,-2 Q-10,-12 -6,-18Z'); V(hd, sk, 8, -4, 20);
  if (re) { V(SP('M2,-18 Q12,-24 20,-16 L16,-8 Q10,-12 4,-10Z'), '#c8202a', 11, -15, 9, 1.2); V(E(12, -16, 2.4, 2.4), '#e8b830', 12, -16, 2.4, .8); }
  const tr = up ? -1 : th ? .8 : Math.sin(o.t * 1.8) * .4;                                                                 // proboscide
  const tp = [[18, 4], [26, 16 + tr * 4], [26 + tr * 10, 30 + tr * 2], [22 + tr * 18, up ? -2 : 40]];
  chain(tp, 12, 6, 3, sk);
  for (const s of [-1, 1]) { V(SP(`M${14 + s},8 Q${22 + s},18 ${34 + s * 2},14 Q${24},12 ${18},6Z`), '#f4eed8', 24, 11, 8, 1.2); if (re) V(E(22 + s, 12, 2, 2.6), '#e8b830', 22, 12, 2, .7); }
  eyesX(o, sk, [[10, -6, 2.4, -1]], 'almond', '#2a1a14'); browsX(o, [[10, -10, 5, -1]], sd, 2, m === 3 || th ? 'thick' : 'flat');
  g.restore();
  if (up > .5) { g.save(); g.globalAlpha = .6; for (let i = 0; i < 3; i++) F(E(30 + i * 4, -96 - i * 6, 4 + i * 2, 2 + i), 'rgba(200,230,255,.6)'); g.restore(); }   // barrito
  g.restore();
}
Object.assign(DRAW, { cobrabianco: cobrabiancoD, mowgli: o => mowgliD(o, 0), mowglire: o => mowgliD(o, 1), baloo: balooD, bagheera: o => bagheeraD(o, 0), bagheerare: o => bagheeraD(o, 1), hathi: o => hathiD(o, 0), hathire: o => hathiD(o, 1) });
