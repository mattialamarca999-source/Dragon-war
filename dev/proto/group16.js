// ---------- gruppo 16: Regno delle Nuvole (Mondo 16) ----------
function dragotempestaD(o) {                                     // il Drago di Tempesta: drago fatto di nuvole nere, occhi gialli elettrici, ali di nuvola sfilacciata con le venature dei fulmini, coda a saetta; sputa fulmini
  const cl = '#4a4a66', cl2 = '#62627e', cl3 = '#7e7e9a', bolt = '#ffe45a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, hit = u < 0 ? -u : 0;
  const fl = Math.sin(o.t * 2.2) * 4 + (w ? Math.sin(o.ph * 1.4) * 3 : 0), flick = Math.sin(o.t * 23) > .3;
  g.save(); g.translate(hit * 8, -46 + fl);
  F(E(0, 46 - fl, 30, 5), 'rgba(16,10,40,.0)');
  for (let i = 0; i < 6; i++) { const k = (o.t * 1.2 + i / 6) % 1; g.save(); g.globalAlpha = .5 * (1 - k); L(SP(`M${-18 + i * 7},${10 + k * 30} l-1.4,5`), '#9ab8e8', 1.4); g.restore(); }   // pioggia sotto la pancia
  const puff = (x, y, r, c = cl) => { V(E(x, y, r, r * .86), c, x, y, r, 1.6); g.save(); g.clip(E(x, y, r, r * .86)); F(E(x - r * .25, y - r * .4, r * .7, r * .42), cl3); g.restore(); };
  const ws = Math.sin(o.t * 3.4 + (w ? o.ph : 0)) * .25 - up * .3;                  // ala dietro
  g.save(); g.translate(-6, -22); g.rotate(-.5 + ws);
  const wb = SP('M0,0 Q-10,-30 -6,-58 Q2,-44 10,-48 Q8,-36 22,-40 Q18,-24 30,-24 Q16,-10 0,0Z'); V(wb, dk(cl, .2), 8, -28, 30, 1.6); g.save(); g.clip(wb); L(SP('M0,0 L-2,-22 L4,-30 L-4,-54 M2,-14 L14,-26 L12,-34 L22,-38'), 'rgba(255,228,90,.55)', 1.4); g.restore(); g.restore();
  const tl = [[-22, 4], [-36, 10], [-48, 6 + Math.sin(o.t * 3) * 4], [-58, -2 + Math.sin(o.t * 3 - 1) * 6]];        // coda di nuvola
  tl.forEach(([x, y], i) => puff(x, y, 11 - i * 2.2, i % 2 ? cl : cl2));
  const te = tl[3]; V(SP(`M${te[0]},${te[1] - 2} L${te[0] - 10},${te[1] - 6} L${te[0] - 6},${te[1]} L${te[0] - 16},${te[1] - 2} L${te[0] - 4},${te[1] + 5}Z`), bolt, te[0] - 8, te[1], 8, 1.2);
  for (const [x, y, r, c] of [[-14, 0, 15, cl], [2, -4, 18, cl2], [16, 2, 13, cl], [6, 10, 12, cl], [-6, 12, 11, cl2]]) puff(x, y, r, c);
  g.save(); g.clip(E(4, 8, 16, 10)); F(E(4, 12, 14, 7), 'rgba(160,180,230,.35)'); g.restore();
  for (const [x, a] of [[-8, Math.PI], [12, 0]]) { const p2 = o.ph + a, sw2 = w ? Math.sin(p2) * 4 : 0; taper(x, 14, x + 3 + sw2, 26, 4.6, 3, dk(cl, .1), 1.4); for (const t2 of [-3, 0, 3]) V(PL([x + 3 + sw2 + t2, 25, x + 5 + sw2 + t2, 31, x + 6.4 + sw2 + t2, 25]), '#e8e8f4', x + 5, 28, 2, .8); }
  const neck = [[14, -8], [24, -20], [30, -32]]; neck.forEach(([x, y], i) => puff(x, y, 11 - i * 1.4, i % 2 ? cl2 : cl));
  const hr = (m === 3 ? -.2 : m === 4 ? .25 : up ? -.35 * up : hit ? .25 * hit : Math.sin(o.t * 1.6) * .06);
  g.save(); g.translate(34, -40); g.rotate(hr);
  for (const [x, l, a] of [[-6, 16, -.9], [0, 13, -.6]]) V(SP(`M${x - 3},-6 Q${x - 2 + Math.cos(a - 1.57) * l * .5},${-6 - l * .6} ${x + Math.cos(a - 1.57) * l * .3 - 6},${-6 - l} Q${x + 2},${-6 - l * .5} ${x + 3},-6Z`), '#2a2a40', x - 3, -12, 8, 1.2);
  const jaw = m === 3 || hit > .3 ? .5 : up ? .1 : .08;
  g.save(); g.translate(6, 4); g.rotate(jaw); V(SP('M-4,0 L22,2 Q20,8 8,8 Q-2,7 -4,0Z'), dk(cl, .15), 9, 4, 12, 1.4); for (const x of [6, 11, 16]) F(PL([x, 1, x + 1.6, -2.6, x + 3.2, 1]), '#f4f4ff'); g.restore();
  if (jaw > .3) { F(SP('M8,4 L28,4 L26,14 L8,8Z'), '#2a1a40'); glowB(22, 8, 18, 'rgba(255,230,120,.8)'); }
  const hd = SP('M-10,4 Q-12,-10 2,-12 Q14,-12 22,-6 Q30,-2 30,3 Q24,6 6,6 Q-6,8 -10,4Z'); V(hd, cl2, 8, -2, 18); g.save(); g.clip(hd); F(E(4, -8, 10, 4), cl3); g.restore();
  F(E(28.4, -1, 1.2, .9), '#1b1238');
  const ec = flick || up > .5 ? '#fff7a0' : bolt; F(SP('M4,-6 Q9,-9 14,-5 Q9,-3 4,-6Z'), ec, '#ffe45a'); F(E(10, -5.6, 1.2, 1.4), '#2a1a10'); L(SP('M2,-9 L15,-8'), '#1c1a2a', 2.2);
  g.restore();
  const wf = Math.sin(o.t * 3.4 + (w ? o.ph : 0)) * .3 - up * .4;                    // ala davanti
  g.save(); g.translate(4, -24); g.rotate(-.35 + wf);
  const wa = SP('M0,0 Q-6,-34 2,-62 Q8,-46 16,-50 Q14,-36 28,-40 Q24,-22 38,-22 Q22,-8 0,0Z'); V(wa, cl, 12, -28, 34, 1.6); g.save(); g.clip(wa); F(E(4, -40, 10, 18), cl3); L(SP('M0,0 L2,-22 L8,-28 L4,-56 M4,-12 L18,-24 L16,-32 L28,-38'), 'rgba(255,228,90,.7)', 1.6); g.restore(); g.restore();
  if (flick || up > .4) { const z = up > .4 ? 1 : .5; g.save(); g.globalAlpha = z; L(SP(`M-20,-30 L-14,-22 L-18,-18 L-10,-8`), '#fff7a0', 1.6); L(SP(`M26,6 L32,12 L28,14 L34,22`), '#fff7a0', 1.6); g.restore(); }
  if (up > .3) { glowB(34, -36, 26 * up, 'rgba(255,230,120,.55)'); }
  g.restore();
}

function jackD(o, king = 0) {                                     // Jack del fagiolo magico: ragazzo di campagna coi capelli castani spettinati, camicia a quadri rattoppata, bretelle, pantaloni arrotolati, scarponi; sacchetto di fagioli magici che lancia. Re: corona, mantello rosso, ascia d'oro e la pianta del fagiolo attorcigliata al braccio
  const sk = '#f0c8a0', shirt = king ? '#f4f0e4' : '#3a7ac8', sh2 = king ? '#d8d0c0' : '#2a5a9a', pants = king ? '#5a3a6a' : '#7a5a3a', boot = '#4a3020', hair = '#8a4a1a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, th = u < 0 ? -u : 0;
  const b = bobOf(o, 2.6);
  g.save(); g.translate(0, b);
  const foot = f => V(SP(`M${f[0] - 4},${f[1] - 5} L${f[0] + 5},${f[1] - 5} Q${f[0] + 10},${f[1] - 4} ${f[0] + 10},${f[1] + 1} L${f[0] - 4},${f[1] + 1}Z`), boot, f[0] + 3, f[1] - 2, 6, 1.2);
  if (king) { const cw = Math.sin(o.t * 2.4) * 3 + (w ? Math.sin(o.ph) * 3 : 0); V(SP(`M-6,-82 Q-20,-60 ${-24 + cw},-20 L${-6 + cw * .5},-18 Q-4,-50 4,-80Z`), '#c8202a', -12, -50, 22, 1.6); F(SP(`M${-24 + cw},-20 L${-6 + cw * .5},-18 L${-7 + cw * .5},-22 L${-23 + cw},-24Z`), '#f4f2f0'); }
  foot(legB(-3, -42, 18, 18, 5, 3.4, 2.6, o, Math.PI, dk(pants, .25), .7));
  const hb = limb(-6, -76, 1.9 + (w ? Math.sin(o.ph) * .5 : 0) - th * .4, 11, -.5, 10, 3.6, 2.8, 2.2, sh2); V(E(hb[0], hb[1], 2.6, 2.6), dk(sk, .08), hb[0], hb[1], 2.6, 1);
  const tor = SP('M-10,-80 Q0,-84 10,-80 Q12,-62 11,-44 L-11,-44 Q-12,-62 -10,-80Z'); V(tor, shirt, 0, -62, 20);
  g.save(); g.clip(tor); if (!king) { for (const x of [-8, -2, 4, 10]) L(SP(`M${x},-84 L${x},-40`), 'rgba(20,30,70,.35)', 1.4); for (const y of [-74, -64, -54]) L(SP(`M-12,${y} L12,${y}`), 'rgba(20,30,70,.35)', 1.4); V(SP('M-6,-60 L1,-60 L1,-53 L-6,-53Z'), '#c8a040', -2, -56, 4, .9); }
  else { F(SP('M-2,-84 L2,-84 L2,-40 L-2,-40Z'), '#f2c43a'); for (const y of [-72, -62, -52]) V(E(0, y, 1.4, 1.4), '#f2c43a', 0, y, 1.4, .6); } g.restore();
  L(SP('M-6,-80 L-5,-46 M6,-80 L5,-46'), king ? '#f2c43a' : '#5a3a20', 2.2);
  V(SP('M-12,-46 L12,-46 L12,-40 L-12,-40Z'), '#4a3020', 0, -43, 12, 1.2); V(SP('M-2,-46 L3,-46 L3,-40 L-2,-40Z'), '#c8a040', 0, -43, 3, .8);
  g.save(); g.translate(-11, -40); V(SP('M-4,0 Q-7,8 -2,12 Q4,13 6,8 Q6,2 3,0Z'), '#c8a870', 0, 6, 6, 1.2); L(SP('M-4,1 Q0,3 3,1'), '#7a5a3a', 1); F(E(1, -1, 1.6, 1.2), '#6ac84a', '#a8ff8a'); g.restore();   // sacchetto dei fagioli
  V(SP('M-11,-44 Q-13,-36 -9,-30 L9,-30 Q13,-36 11,-44Z'), pants, 0, -37, 12, 1.4);
  foot(legB(3, -42, 18, 18, 5.2, 3.6, 2.8, o, 0, pants, .7));
  g.save(); g.translate(2, -92); g.rotate(m === 3 ? -.12 : m === 4 ? -.26 : Math.sin(o.t * 2) * .04);
  const face = SP('M-7,-5 Q-7,-13 1,-13 Q9,-13 9,-5 Q9,3 6,7 Q2,9 -2,8 Q-6,5 -7,-5Z'); V(face, sk, 1, -2, 12);
  for (const [x, y] of [[-4, 2], [6, 3], [-2, 4], [4, 5]]) F(E(x, y, .7, .6), '#d88a5a');
  eyesX(o, sk, [[.6, -2.4, 2.8, 1], [6.6, -2.6, 2.3, -1]], 'almond', '#2a6aa8'); browsX(o, [[.6, -6.8, 5, 1], [6.6, -7, 4, -1]], hair, 1.8, 'arch');
  V(SP('M6,-1 Q10,2 8,4 Q6,4 5.4,2Z'), dk(sk, .06), 7.6, 2, 3, 1); mouthX(o, 3.6, 5.4, 5, m === 0 || m === 1 ? 'smile' : 'grin');
  V(E(-6, -2, 2.2, 3), sk, -6, -2, 2.4, 1);
  const hs = Math.sin(o.t * 3) * 1.2; V(SP(`M-9,-2 Q-12,-12 -6,-16 Q-4,-20 2,-18 Q6,-22 10,-17 Q14,-16 12,-10 Q8,-13 4,-11 Q0,-14 -3,-10 Q-6,-8 -7,-2Z`), hair, 1, -12, 12, 1.4);
  for (const [x, a] of [[-6, -2.4], [0, -1.7], [6, -1.2]]) L(SP(`M${x},-15 l${Math.cos(a) * 5 + hs},${Math.sin(a) * 5}`), hair, 2.4);
  if (king) { V(SP('M-7,-15 L-8,-25 L-3,-19 L1,-27 L5,-19 L10,-25 L9,-15Z'), '#f2c43a', 1, -20, 9, 1.4); for (const x of [-3, 1, 5]) V(E(x, -17, 1.2, 1.2), x === 1 ? '#3ac8f0' : '#e8283a', x, -17, 1.2, .6); }
  g.restore();
  if (king) {                                                     // il Re: ascia d'oro, la pianta del fagiolo attorno al braccio
    const pv = up ? [2, -108] : th ? [24 + th * 6, -64] : [16, -58], rr = up ? -.9 : th ? 1.6 + th * .3 : .3;
    armTo(6, -78, pv[0], pv[1], 11, 10, 3.6, 2.8, 2.2, shirt, up ? -1 : 1);
    L(SP(`M6,-78 Q${(6 + pv[0]) / 2 + 6},${(-78 + pv[1]) / 2 - 4} ${pv[0]},${pv[1]}`), '#4aa83a', 2); for (const k2 of [.3, .7]) V(E(6 + (pv[0] - 6) * k2 + 3, -78 + (pv[1] + 78) * k2 - 3, 3, 1.6, -.6), '#5ac84a', 0, 0, 3, .7);
    g.save(); g.translate(pv[0], pv[1]); g.rotate(rr); V(SP('M-1.8,8 L-1.8,-30 L1.8,-30 L1.8,8Z'), '#7a4a2a', 0, -10, 18, 1.2); V(SP('M1,-32 Q18,-38 20,-20 Q14,-22 1,-16Z'), '#f2c43a', 10, -26, 12, 1.4); F(SP('M3,-30 Q12,-33 15,-26 Q9,-28 3,-24Z'), 'rgba(255,255,255,.5)'); V(SP('M-1,-32 Q-10,-32 -10,-24 Q-6,-24 -1,-20Z'), '#e8b830', -5, -26, 6, 1.2); g.restore();
    if (th > .3) { g.save(); g.globalAlpha = th * .5; L(SP(`M${pv[0] - 12},${pv[1] - 34} Q${pv[0] + 28},${pv[1] - 28} ${pv[0] + 26},${pv[1] + 12}`), '#fff4c0', 3.4); g.restore(); }
    V(E(pv[0], pv[1], 2.6, 2.6), sk, pv[0], pv[1], 2.6, 1);
  } else {                                                        // lancia i fagioli magici
    const pv = up ? [-8 - up * 6, -94] : th ? [22 + th * 4, -84] : [14, -62];
    armTo(6, -78, pv[0], pv[1], 11, 10, 3.6, 2.8, 2.2, shirt, up ? -1 : 1);
    if (!th) { for (const [dx, dy] of [[-1, -2], [2, -3], [.5, 0]]) { V(E(pv[0] + dx, pv[1] + dy, 2, 1.4, .4), '#6ac84a', pv[0], pv[1], 2, .7); } glowB(pv[0], pv[1] - 1, 7, 'rgba(140,255,120,.5)'); }
    else { for (let i = 0; i < 3; i++) { const k2 = th * (1 + i * .3); V(E(pv[0] + 6 + k2 * 14 + i * 4, pv[1] - 4 - i * 3, 2, 1.4, .4), '#6ac84a', 0, 0, 2, .7); } glowB(pv[0] + 18, pv[1] - 6, 10, 'rgba(140,255,120,.55)'); }
    V(E(pv[0], pv[1], 2.6, 2.6), sk, pv[0], pv[1], 2.6, 1);
  }
  g.restore();
}

function arpaD(o, big = 0) {                                      // l'Arpa d'Oro: arpa magica viva, la testa è una dama di legno dorato coi capelli intagliati che canta; corde che brillano e note che volano. Incantata: più grande, corona di luce e aura viola
  const gd = big ? '#e8c040' : '#e8b830', gd2 = dk(gd, .25), u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, hit = u < 0 ? -u : 0, sing = up > .2 || hit > .2 || m === 3;
  const hop = w ? -Math.abs(Math.sin(o.ph * 1.2)) * 5 : Math.sin(o.t * 2) * 1.2;
  g.save(); g.translate(hit * 6, hop); g.rotate(w ? Math.sin(o.ph * 1.2) * .05 : -up * .08);
  if (big) glowB(0, -46, 50, 'rgba(200,140,255,.35)');
  V(SP('M-16,0 L14,0 L12,-6 L-14,-6Z'), gd2, -1, -3, 15, 1.4); V(SP('M-12,-6 L10,-6 L8,-12 L-10,-12Z'), gd, -1, -9, 11, 1.2);
  const col = SP('M-14,-10 L-10,-10 L-8,-62 Q-8,-72 -14,-74 L-18,-72 Q-12,-68 -13,-60Z'); V(col, gd, -12, -40, 30, 1.6); for (const y of [-24, -40, -56]) L(SP(`M-14,${y} Q-11,${y - 2} -9,${y}`), gd2, 1.2);
  const neck = SP('M-14,-74 Q2,-82 14,-70 Q22,-58 20,-40 Q18,-24 10,-12 L6,-12 Q14,-26 15,-42 Q16,-58 8,-66 Q-2,-74 -12,-70Z'); V(neck, gd, 4, -48, 34, 1.6);
  g.save(); g.clip(neck); F(E(10, -60, 6, 14), 'rgba(255,255,255,.35)'); g.restore();
  const vib = sing ? Math.sin(o.t * 40) * 1.2 : 0;
  for (let i = 0; i < 6; i++) { const x0 = -9 + i * 3.4, ytop = -66 + i * 2 + (i > 3 ? (i - 3) * 3 : 0), ybot = -12; L(SP(`M${x0},${ytop} Q${x0 + vib * (i % 2 ? 1 : -1)},${(ytop + ybot) / 2} ${x0 + i * .6},${ybot}`), sing ? '#fff7c0' : 'rgba(255,248,220,.85)', 1); }
  if (sing) glowB(-2, -40, 22, 'rgba(255,240,160,.4)');
  g.save(); g.translate(14, -80); g.rotate(m === 4 ? .2 : Math.sin(o.t * 1.8) * .05);  // la testa della dama
  V(SP('M-12,6 Q-16,-4 -10,-12 Q-6,-18 2,-16 Q10,-16 12,-8 Q8,-10 4,-8 L-4,12Z'), gd2, -4, -2, 14, 1.4);
  const face = SP('M-5,-4 Q-5,-11 2,-11 Q8,-11 8,-4 Q8,3 5,6 Q2,7 -1,6 Q-5,3 -5,-4Z'); V(face, '#f4d890', 2, -2, 10);
  for (let i = 0; i < 4; i++) L(SP(`M${-8 + i * 2},${-10 + i} Q${-12 + i * 2},${2 + i} ${-8 + i},${10 + i}`), gd2, 1);
  eyesX(o, '#f4d890', [[1, -3, 2.2, 1], [6, -3.2, 1.8, -1]], 'almond', '#7a4a10'); browsX(o, [[1, -6.6, 4, 1], [6, -6.8, 3.2, -1]], gd2, 1.2, 'arch');
  mouthX(o, 3, 3.6, 3.6, sing ? 'oh' : 'smile', { lips: '#c8603a' }); F(E(-1, 1, 1.6, 1), 'rgba(230,120,90,.35)');
  if (big) { V(SP('M-6,-10 L-7,-19 L-3,-14 L1,-21 L4,-14 L8,-19 L7,-10Z'), '#fff0a0', 1, -14, 8, 1.2); glowB(1, -16, 14, 'rgba(255,240,180,.6)'); }
  g.restore();
  if (sing) for (let i = 0; i < 3; i++) { const k = (o.t * 1.4 + i / 3) % 1, x = 18 + k * 26, y = -50 - k * 20 + Math.sin(k * 9 + i) * 4; g.save(); g.globalAlpha = 1 - k; L(SP(`M${x},${y} L${x},${y - 9} L${x + 5},${y - 11}`), '#1b1238', 1.6); V(E(x - 2, y, 2.6, 2), big ? '#c87aff' : '#ffd35a', x - 2, y, 2.6, .8); g.restore(); }
  g.restore();
}

function gallinaD(o) {                                            // la Gallina dalle Uova d'Oro: gallinona fulva con le piume che luccicano d'oro, cresta rossa, bargigli, zampe gialle; cova e lancia uova d'oro
  const fe = '#c8843a', fe2 = '#e8a84a', gold = '#f2c43a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, th = u < 0 ? -u : 0;
  const bob = w ? -Math.abs(Math.sin(o.ph * 1.5)) * 3 : Math.sin(o.t * 2.4) * .6, peck = w ? Math.max(0, Math.sin(o.ph * 1.5)) * .2 : 0;
  g.save(); g.translate(0, bob);
  for (const [x, off] of [[-6, Math.PI], [6, 0]]) { const p2 = o.ph * 1.5 + off, a = w ? Math.sin(p2) * 5 : 0, lift = w ? Math.max(0, Math.cos(p2)) * 4 : 0;
    L(SP(`M${x},-20 L${x + a * .5},${-8 - lift} L${x + a},${-lift}`), '#e8a020', 2.6); for (const t2 of [-4, 0, 5]) L(SP(`M${x + a},${-lift} l${t2},1.4`), '#e8a020', 1.6); }
  const tl = Math.sin(o.t * 3) * .1; g.save(); g.translate(-18, -40); g.rotate(-.3 + tl);           // coda
  for (const [a, l, c] of [[-1.2, 24, '#5a3a2a'], [-.8, 26, '#2a5a4a'], [-.4, 22, '#5a3a2a']]) { g.save(); g.rotate(a); V(SP(`M0,0 Q-4,${-l * .5} 2,${-l} Q6,${-l * .5} 4,0Z`), c, 2, -l / 2, l / 2, 1.2); g.restore(); } g.restore();
  const body = SP('M-22,-36 Q-22,-54 -2,-54 Q16,-54 20,-40 Q22,-22 8,-16 Q-10,-12 -18,-22 Q-24,-28 -22,-36Z'); V(body, fe, -1, -34, 24);
  g.save(); g.clip(body); F(E(6, -24, 14, 10), fe2); for (let i = 0; i < 5; i++) { const x = -14 + i * 7, y = -44 + (i % 2) * 6; L(SP(`M${x},${y} q3,3 6,0`), dk(fe, .2), 1); }
  for (let i = 0; i < 5; i++) { const k = (o.t * .7 + i / 5) % 1; if (k < .25) F(SP(`M${-12 + i * 8},${-46 + (i % 3) * 8} l1,2 l2,1 l-2,1 l-1,2 l-1,-2 l-2,-1 l2,-1Z`), '#fff7c0'); } g.restore();
  const wf = up ? -.6 * up : th ? .4 : w ? Math.sin(o.ph * 3) * .15 : 0;                             // ala
  g.save(); g.translate(-4, -40); g.rotate(wf); const wg = SP('M-2,0 Q-14,4 -16,14 Q-6,12 2,16 Q10,10 10,2 Q4,-2 -2,0Z'); V(wg, dk(fe, .1), -3, 7, 12, 1.4); g.save(); g.clip(wg); for (const y of [6, 10, 14]) L(SP(`M-16,${y} L10,${y - 4}`), dk(fe, .3), 1); g.restore(); g.restore();
  g.save(); g.translate(14, -54); g.rotate(-peck + (m === 3 ? -.15 : m === 4 ? .25 : th ? .2 : Math.sin(o.t * 2) * .05));
  V(SP('M-8,10 Q-10,-4 -2,-10 Q6,-14 10,-6 Q12,4 8,12Z'), fe2, 0, 0, 12);
  for (const [x, h] of [[-3, 8], [1, 10], [5, 8]]) V(E(x, -11 - h * .3, 3, h * .5), '#e8283a', x, -12, 3, 1);
  const op = m === 3 || th > .3 ? 1 : 0; V(SP(`M8,-3 L17,${-1 - op} L9,1Z`), '#f2c43a', 12, -1, 5, 1); if (op) V(SP('M9,1 L16,3 L8,3Z'), '#e8a020', 12, 2, 4, .9);
  V(SP('M8,3 Q10,9 7,10 Q5,8 6,3Z'), '#e8283a', 7, 6, 3, 1);
  eyesX(o, fe2, [[4, -4, 2.4, -1]], 'round', '#2a1a10'); browsX(o, [[4, -7.6, 4, -1]], dk(fe, .4), 1.4, 'arch');
  g.restore();
  if (up > .2 || th > .1) { const ex = th ? 20 + th * 24 : 0, ey = th ? -30 - th * 10 : -12, eg = SP(`M${ex},${ey - 7} Q${ex + 5},${ey - 6} ${ex + 5},${ey} Q${ex + 4},${ey + 5} ${ex},${ey + 5} Q${ex - 4},${ey + 5} ${ex - 5},${ey} Q${ex - 5},${ey - 6} ${ex},${ey - 7}Z`);
    glowB(ex, ey, 12, 'rgba(255,220,100,.6)'); V(eg, gold, ex, ey, 6, 1.2); F(E(ex - 1.6, ey - 3, 1.4, 2), 'rgba(255,255,255,.7)'); }
  g.restore();
}

function cavnuvoleD(o) {                                          // il Cavaliere delle Nuvole: armatura argento-azzurra, elmo con le ali, mantello bianco come il cielo, lancia con la bandierina; sta in piedi su una nuvoletta che vola
  const arm = '#c8d4e8', arm2 = dk(arm, .25), cape = '#f4f6fc', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, th = u < 0 ? -u : 0;
  const fl = Math.sin(o.t * 2) * 3 + (w ? Math.sin(o.ph) * 2 : 0);
  g.save(); g.translate(th * 10, -16 + fl);
  for (let i = 0; i < 3; i++) { const k = (o.t * .8 + i / 3) % 1; g.save(); g.globalAlpha = (1 - k) * .5; F(E(-26 - k * 20, 10, 6 + k * 6, 3 + k * 2), '#ffffff'); g.restore(); }
  const cw = Math.sin(o.t * 2.6) * 3; V(SP(`M-6,-86 Q-18,-64 ${-26 + cw},-34 L${-8 + cw * .4},-30 Q-6,-60 4,-82Z`), cape, -14, -58, 24, 1.6); F(SP(`M${-26 + cw},-34 L${-8 + cw * .4},-30 L${-9 + cw * .4},-34 L${-24 + cw},-38Z`), '#9ab8e8');
  for (const [x, off, c] of [[-4, 0, arm2], [5, 1, arm]]) { const sw2 = Math.sin(o.t * 1.6 + off) * 1.5; taper(x, -42, x + 1 + sw2, -22, 5.6, 4.2, c, 1.4); taper(x + 1 + sw2, -22, x + 2, -6, 4.4, 3.6, c, 1.4); V(SP(`M${x - 3},-8 L${x + 8},-8 Q${x + 11},-6 ${x + 10},-3 L${x - 3},-3Z`), arm2, x + 3, -5, 6, 1.2); }
  for (const [x, y, r] of [[-20, 0, 11], [-6, -2, 14], [10, -1, 13], [22, 1, 9], [0, 6, 12], [-14, 6, 9], [16, 6, 9]]) { V(E(x, y, r, r * .72), '#ffffff', x, y, r, 1.4); g.save(); g.clip(E(x, y, r, r * .72)); F(E(x, y + r * .5, r, r * .4), '#d8e4f8'); g.restore(); }
  const hb = limb(-7, -78, 1.9 - th * .3 + up * .2, 12, -.5, 11, 4, 3.2, 2.6, arm2); V(E(hb[0], hb[1], 3.4, 3.4), arm2, hb[0], hb[1], 3.4, 1.2);
  g.save(); g.translate(hb[0] - 2, hb[1] - 2); V(SP('M-8,-12 L8,-12 L8,2 Q0,12 -8,2Z'), '#2f6fd6', 0, -3, 10, 1.4); F(SP('M-6,-10 L6,-10 L6,1 Q0,9 -6,1Z'), '#4a8ae8'); V(SP('M-4,-4 Q-6,-8 -2,-8 Q0,-10 2,-8 Q6,-8 4,-4 Q2,-2 0,-3 Q-2,-2 -4,-4Z'), '#ffffff', 0, -6, 4, .8); g.restore();
  const tor = SP('M-11,-84 Q0,-90 11,-84 Q13,-62 11,-42 L-11,-42 Q-13,-62 -11,-84Z'); V(tor, arm, 0, -63, 22); g.save(); g.clip(tor); F(E(5, -70, 5, 12), 'rgba(255,255,255,.55)'); L(SP('M0,-86 L0,-42'), arm2, 1.4); g.restore();
  V(SP('M-12,-46 L12,-46 L12,-40 L-12,-40Z'), '#2f6fd6', 0, -43, 12, 1.2); V(E(0, -43, 2.4, 2.4), '#f2c43a', 0, -43, 2.4, .8);
  g.save(); g.translate(2, -96); g.rotate(m === 3 ? -.1 : m === 4 ? -.24 : Math.sin(o.t * 2) * .03);
  const hm = SP('M-9,4 Q-11,-13 1,-14 Q13,-13 12,4 L12,8 L-9,8Z'); V(hm, arm, 1, -3, 13, 1.6); g.save(); g.clip(hm); F(E(-3, -8, 5, 3), 'rgba(255,255,255,.5)'); g.restore();
  F(SP('M2,-2 L13,-2 L13,2 L2,2Z'), '#1c1a2a'); F(E(8, 0, 1.4, 1), m === 4 ? '#ff8a8a' : '#8ad8ff'); L(SP('M2,4 L12,4 M2,6 L12,6'), arm2, .9);
  for (const s of [-1, 1]) { const wa = Math.sin(o.t * 5) * .12; g.save(); g.translate(s < 0 ? -8 : 10, -6); g.rotate(s * (.4 + wa) - .2); V(SP(`M0,0 Q${s * 6},-12 ${s * 4},-20 Q${s * 10},-12 ${s * 12},-8 Q${s * 6},-4 0,0Z`), '#ffffff', s * 6, -8, 8, 1.2); g.restore(); }
  g.restore();
  const pv = up ? [10, -100] : th ? [26 + th * 6, -66] : [16, -60], rr = up ? -.2 : th ? 1.3 : .5;
  armTo(7, -78, pv[0], pv[1], 12, 11, 4, 3.2, 2.6, arm, up ? -1 : 1);
  g.save(); g.translate(pv[0], pv[1]); g.rotate(rr);
  V(SP('M-1.6,20 L-1.6,-54 L1.6,-54 L1.6,20Z'), '#d8c8a0', 0, -17, 36, 1.2); V(SP('M-3,-54 L0,-68 L3,-54Z'), '#e3e9f4', 0, -60, 7, 1.2);
  const fw = Math.sin(o.t * 6) * 2; V(SP(`M1.6,-52 L${14 + fw},-48 L1.6,-44Z`), '#2f6fd6', 7, -48, 6, 1);
  g.restore(); V(E(pv[0], pv[1], 3.4, 3.4), arm, pv[0], pv[1], 3.4, 1.2);
  g.restore();
}
Object.assign(DRAW, { dragotempesta: dragotempestaD, jack: o => jackD(o, 0), jackre: o => jackD(o, 1), arpa: o => arpaD(o, 0), arpaincantata: o => arpaD(o, 1), gallina: gallinaD, cavnuvole: cavnuvoleD });
