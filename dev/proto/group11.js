// ---------- gruppo 11: i buoni (1) ----------
function soldatinoD(o) {                                        // il Soldatino di stagno: giocattolo con una gamba sola che saltella, colbacco nero col pennacchio, giacca rossa coi bottoni d'oro, bandoliere bianche, chiave della carica che gira sulla schiena, fucile con la baionetta
  const red = '#c8302a', blue = '#2a4a9a', blk = '#1e1a2a', gold = '#f2c14e', sk = '#f6d6b8', u = o.u, m = o.mood, w = o.walking ? 1 : 0, thrust = u < 0 ? -u : 0, pull = u > 0 ? u : 0;
  const hop = w ? -Math.abs(Math.sin(o.ph * 1.2)) * 9 : Math.sin(o.t * 3) * .5;
  g.save(); g.translate(0, hop); g.rotate(w ? Math.sin(o.ph * 1.2) * .05 : 0);
  g.save(); g.translate(-11, -44); g.rotate(o.t * (w ? 4 : 1.5)); L(SP('M0,0 L-5,0'), dk(gold, .4), 2.4); V(SP('M-5,0 Q-8,-6 -12,-3 Q-12,0 -12,3 Q-8,6 -5,0Z'), gold, -9, 0, 5, 1.2); g.restore();
  V(SP('M-6,-30 L-1,-30 L-1.6,-24 L-6,-25Z'), dk(blue, .2), -3, -27, 4, 1.2);
  V(SP('M-4,-31 L5,-31 L5,-7 L-4,-7Z'), blue, 0, -19, 10, 1.8); L(SP('M3.2,-30 L3.2,-8'), red, 1.6);
  V(SP('M-5,-8 L5,-8 Q12,-7 12,-1 L12,0 L-5,0Z'), blk, 3, -4, 8, 1.6); F(SP('M-4,-6 L4,-6 Q8,-5 9,-4'), 'rgba(255,255,255,.25)');
  const hb = limb(-8, -54, 1.65 - pull * .3, 10, .05, 10, 3.6, 3.2, 3, dk(red, .2)); V(E(hb[0], hb[1], 3, 3), '#f2f2f2', hb[0], hb[1], 3, 1.2);
  const jk = SP('M-10,-57 Q-11,-44 -10,-31 L10,-31 Q11,-44 10,-57 Q0,-61 -10,-57Z'); V(jk, red, 0, -44, 16);
  g.save(); g.clip(jk); L(SP('M-10,-56 L10,-34 M10,-56 L-10,-34'), '#f4f2ec', 3); F(SP('M-11,-37 L11,-37 L11,-33 L-11,-33Z'), blk); g.restore();
  V(E(0, -35, 2.4, 2), gold, 0, -35, 2, .8); for (const y of [-52, -47, -42]) V(E(5, y, 1.3, 1.3), gold, 5, y, 1.3, .6);
  for (const x of [-9, 9]) { V(E(x, -56, 4, 2.4), gold, x, -56, 4, 1); for (let i = -1; i <= 1; i++) L(SP(`M${x + i * 2.4},-54 l0,3`), gold, 1); }
  g.save(); g.translate(2, -67); g.rotate(m === 3 ? -.06 : m === 4 ? .2 : Math.sin(o.t * 2) * .02);
  const face = E(0, 0, 8.4, 8.6); V(face, sk, 0, 0, 9);
  F(E(-3.4, 3, 2.4, 1.8), 'rgba(230,80,80,.55)'); F(E(5.4, 2.6, 2, 1.6), 'rgba(230,80,80,.55)');
  eyesX(o, sk, [[-1, -1.4, 2.2, 1], [5, -1.6, 1.9, -1]], 'beady'); browsX(o, [[-1, -5, 4, 1], [5, -5, 3.4, -1]], blk, 1.4, 'thick');
  L(SP('M-2,3.6 Q1,2 3,3.4 Q5,2 8,3.6 M-2,3.6 q-2,0 -2,-2 M8,3.6 q2,0 2,-2'), blk, 1.8); mouthX(o, 3, 6.2, 4, 'smile');
  L(SP('M-7,1 Q0,10 7,3'), gold, 1.2);
  V(SP('M-9,-6 L-8,-28 Q0,-31 8,-28 L9,-6 Q0,-3 -9,-6Z'), blk, 0, -17, 14, 1.8); F(SP('M-8.6,-9 Q0,-6 8.6,-9 L8.6,-6.6 Q0,-3.6 -8.6,-6.6Z'), gold);
  V(SP('M-3,-22 L3,-22 L4,-14 L0,-12 L-4,-14Z'), gold, 0, -17, 4, .9); V(SP('M-1,-6 Q8,-6 12,-3 Q4,-2 -1,-3Z'), blk, 6, -4, 5, 1.2);
  const pw = Math.sin(o.t * 4) * 2; V(SP(`M-2,-29 Q${-4 + pw},-40 ${-1 + pw},-44 Q${3 + pw},-38 2,-29Z`), red, 0, -36, 6, 1.2); V(E(0, -29, 2.4, 1.6), gold, 0, -29, 2, .8);
  g.restore();
  const hp = thrust ? [16 + thrust * 12, -46] : pull ? [6, -44] : [9, -42], rr = thrust ? Math.PI / 2 : pull ? 1.2 : -.06 + (w ? Math.sin(o.ph * 1.2) * .05 : 0);
  g.save(); g.translate(hp[0], hp[1]); g.rotate(rr);
  V(SP('M-2.4,0 L-2.6,12 Q0,16 2.6,12 L2.4,0Z'), '#8a5a2a', 0, 6, 5, 1.2); L(SP('M0,0 L0,-36'), '#5a5a6a', 3.4); L(SP('M0,0 L0,-36'), '#a8acb8', 1.6);
  V(PL([-1.2, -36, 0, -50, 1.2, -36]), '#e8ecf4', 0, -42, 4, .9); g.restore();
  armTo(9, -54, hp[0], hp[1], 9, 9, 3.6, 3.2, 3, red); V(E(hp[0], hp[1], 3, 3), '#f2f2f2', hp[0], hp[1], 3, 1.2);
  g.restore();
}

function arciereD(o) {                                          // l'Arciera dei boschi: snella, cappuccio verde a punta con mantellina, lentiggini, treccia rossa, corpetto di cuoio coi lacci, faretra piena, arco lungo che si tende davvero
  const hood = '#3f8f4c', lea = '#8a5a34', sk = '#f2cba8', hair = '#c85a2a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, draw = u > 0 ? u : 0, rel = u < 0 ? 1 : 0;
  const b = bobOf(o, 2), cw = Math.sin(o.t * 4 + o.ph) * 4;
  const boot = (f, col) => V(SP(`M${f[0] - 3},${f[1] - 7} L${f[0] + 3},${f[1] - 7} L${f[0] + 4},${f[1] - 2} Q${f[0] + 9},${f[1] - 2} ${f[0] + 9},${f[1] + 1} L${f[0] - 3},${f[1] + 1}Z`), col, f[0] + 2, f[1] - 3, 6, 1.4);
  g.save(); g.translate(0, b);
  boot(legB(-3, -40, 19, 19, 3.6, 2.8, 2.4, o, Math.PI, '#4a5a3a', .6), '#4a3020');
  V(SP(`M-7,-74 Q-22,-56 ${-22 + cw},-30 Q${-12 + cw * .5},-34 -3,-38 Q-2,-58 -2,-74Z`), dk(hood, .18), -12, -52, 24);
  g.save(); g.translate(-8, -60); g.rotate(-.35); V(SP('M-4,-14 L4,-14 L5,14 L-5,14Z'), dk(lea, .2), 0, 0, 10, 1.4); for (const x of [-2.6, 0, 2.6]) { L(SP(`M${x},-14 L${x},-22`), '#e8dcc0', 1.4); V(PL([x - 2, -22, x, -28, x + 2, -22]), '#d8443a', x, -24, 3, .7); } g.restore();
  const body = SP('M-8,-72 Q0,-76 8,-72 Q10,-56 8,-42 L-8,-42 Q-10,-56 -8,-72Z'); V(body, '#e8dcc0', 0, -58, 16);
  const cor = SP('M-8,-62 Q0,-60 8,-62 L8,-44 L-8,-44Z'); V(cor, lea, 0, -52, 12, 1.4); for (let y = -60; y < -46; y += 4) L(SP(`M-2,${y} L2,${y + 2} M2,${y} L-2,${y + 2}`), '#3a2010', .9);
  const sk2 = SP(`M-9,-44 L9,-44 L${12 + cw * .2},-30 L${-11 + cw * .2},-30Z`); V(sk2, hood, 0, -37, 12, 1.4); F(SP('M-9,-46 L9,-46 L9,-43 L-9,-43Z'), '#3a2010');
  boot(legB(3, -40, 19, 19, 3.8, 3, 2.6, o, 0, '#5a6a4a', .6), '#5a3a24');
  g.save(); g.translate(2, -84); g.rotate(m === 4 ? -.2 : Math.sin(o.t * 2.1) * .03 - draw * .06);
  V(SP(`M-6,-6 Q-8,8 ${-10 + cw * .2},20 Q-6,22 -4,18 Q-2,8 -2,-2Z`), hair, -6, 8, 12, 1.4); for (let i = 0; i < 4; i++) L(SP(`M-7,${2 + i * 4} l3,2`), dk(hair, .3), .9);
  const face = SP('M-6,-5 Q-6,-12 1,-12 Q8,-12 8,-5 Q8,3 4,7 Q1,9 -2,7 Q-6,3 -6,-5Z'); V(face, sk, 1, -2, 11);
  for (const [x, y] of [[-2, 1], [0, 2], [-1, 3], [6, 1.6], [7, 2.6]]) F(E(x, y, .5, .5), '#c0703a');
  eyesX(o, sk, [[.6, -2.4, 2.4, 1], [6.2, -2.6, 2, -1]], 'almond', '#3a9a4a'); browsX(o, [[.6, -6.4, 5, 1], [6.2, -6.4, 4, -1]], dk(hair, .2), 1.4, 'arch');
  L(SP('M5.6,-.6 Q7.6,2 5.8,3'), dk(sk, .3), 1); mouthX(o, 3.4, 5, 4.6, draw > .5 ? 'frown' : 'smirk');
  V(SP('M-9,8 Q-12,-10 0,-15 Q10,-16 12,-6 Q11,-2 9,-4 Q6,-11 -1,-10 Q-6,-7 -6,2 L-5,10Z'), hood, -1, -6, 14, 1.6); V(SP('M-5,-14 Q-14,-20 -20,-12 Q-14,-12 -9,-8Z'), hood, -11, -12, 8, 1.4);
  g.restore();
  const bx = 22 - draw * 2, by = -64;
  armTo(6, -70, bx, by, 9, 9, 3, 2.6, 2.2, hood, -1); V(E(bx, by, 2.4, 2.4), sk, bx, by, 2.4, 1);
  g.save(); g.translate(bx, by); const bend = draw * 4;
  L(SP(`M-1,-26 Q${12 + bend},-13 4,0 Q${12 + bend},13 -1,26`), dk('#8a5a30', .7), 5.6); L(SP(`M-1,-26 Q${12 + bend},-13 4,0 Q${12 + bend},13 -1,26`), '#b8803a', 3); V(E(4, 0, 2.6, 4), dk(lea, .2), 4, 0, 3, 1);
  const sx = -2 - draw * 18; L(SP(`M-1,-26 L${sx},0 L-1,26`), '#f4f0e0', 1);
  if (draw > .05 || !rel) { L(SP(`M${sx},0 L${14},0`), '#6a4a2a', 1.6); V(PL([14, -2.2, 19, 0, 14, 2.2]), '#c8ccd8', 16, 0, 3, .8); F(PL([sx, 0, sx + 4, -2.6, sx + 6, 0, sx + 4, 2.6]), '#d8443a'); }
  g.restore();
  armTo(-4, -70, bx - 2 - draw * 18, by, 9, 9, 3, 2.6, 2.2, dk(hood, .1), 1); V(E(bx - 2 - draw * 18, by, 2.4, 2.4), sk, bx - 2 - draw * 18, by, 2.4, 1);
  g.restore();
}

function principeD(o) {                                         // il Principe: alto e impettito, ciuffo biondo al vento, cerchietto d'oro, farsetto blu con gli alamari d'oro, fascia rossa, mantello rosso foderato d'oro, stivali alti, mano sul fianco, spada lucente
  const dbl = '#2a5ab8', cape = '#c8302a', gold = '#f2c14e', sk = '#f4d2b4', hair = '#f2c84a', tights = '#f0ead8', boot = '#5a3a20', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, cut = u < 0 ? -u : 0;
  const b = bobOf(o, 2.4), cw = Math.sin(o.t * 3.4 + o.ph) * 5 + (w ? 4 : 0);
  const bootF = (f, col) => V(SP(`M${f[0] - 4},${f[1] - 13} L${f[0] + 4},${f[1] - 13} L${f[0] + 4},${f[1] - 3} Q${f[0] + 11},${f[1] - 3} ${f[0] + 11},${f[1] + 1} L${f[0] - 4},${f[1] + 1}Z`), col, f[0] + 2, f[1] - 6, 9, 1.6);
  g.save(); g.translate(0, b);
  const cp = SP(`M-8,-82 Q-22,-60 ${-26 - cw},-26 Q${-18 - cw},-22 ${-8 - cw * .3},-28 Q-4,-56 4,-82Z`); V(cp, cape, -12, -54, 30); g.save(); g.clip(cp); F(SP(`M-12,-60 Q-20,-40 ${-26 - cw},-24 L${-30 - cw},-24 L-16,-64Z`), gold); g.restore();
  bootF(legB(-4, -46, 22, 22, 4.4, 3.4, 3, o, Math.PI, dk(tights, .2), .6), dk(boot, .2));
  const hb = armTo(-9, -78, -12, -50, 13, 13, 3.6, 3, 2.6, dk(dbl, .25), 1); V(E(-12, -50, 3, 3), '#f4f2ec', -12, -50, 3, 1.2);
  const tor = SP('M-11,-80 Q0,-86 11,-80 Q13,-62 9,-46 L-9,-46 Q-12,-62 -11,-80Z'); V(tor, dbl, 0, -64, 20);
  g.save(); g.clip(tor); for (const y of [-74, -68, -62, -56]) L(SP(`M-5,${y} L5,${y}`), gold, 1.4); L(SP('M-12,-80 L12,-50'), cape, 4); g.restore();
  V(SP(`M-10,-48 L10,-48 L${13 + cw * .1},-38 L${-12 + cw * .1},-38Z`), dbl, 0, -43, 12, 1.4); F(SP('M-10,-49 L10,-49 L10,-45 L-10,-45Z'), '#3a2414'); V(E(0, -47, 2.2, 2), gold, 0, -47, 2, .8);
  bootF(legB(4, -46, 22, 22, 4.6, 3.6, 3.2, o, 0, tights, .6), boot);
  g.save(); g.translate(2, -92); g.rotate(m === 3 ? -.08 : m === 4 ? -.24 : Math.sin(o.t * 1.8) * .03);
  const face = SP('M-6,-6 Q-6,-13 1,-13 Q9,-13 9,-5 Q9,3 6,7 Q3,10 0,9 Q-5,6 -6,-6Z'); V(face, sk, 1, -2, 12);
  L(SP('M2,8.6 Q3.4,7.6 4.6,8.6'), dk(sk, .3), .9);
  eyesX(o, sk, [[.6, -2.6, 2.6, 1], [6.6, -2.8, 2.2, -1]], 'round', '#2a6ad8'); browsX(o, [[.6, -6.8, 5.4, 1], [6.6, -6.8, 4.4, -1]], dk(hair, .35), 1.8, 'arch');
  V(SP('M6,-1 Q9,2 7,4 Q6,4 5.4,2.6Z'), dk(sk, .06), 7, 2, 3, 1); mouthX(o, 4, 5.6, 6, 'grin');
  const hw = Math.sin(o.t * 2.6) * 1.6; V(SP(`M-8,4 Q-11,-12 0,-15 Q10,-16 12,-8 Q${14 + hw},-4 ${15 + hw},-8 Q${13 + hw},-14 8,-14 Q4,-10 -2,-10 Q-5,-6 -4,4Z`), hair, 0, -8, 12, 1.6);
  L(SP('M-7,-9 Q2,-14 11,-10'), dk(gold, .4), 2.8); L(SP('M-7,-9 Q2,-14 11,-10'), gold, 1.6); V(E(2, -12.4, 1.6, 1.6), '#d02a4a', 2, -12.4, 1.6, .6);
  g.restore();
  const sa = up ? -2.4 - up * .4 : cut ? .6 + cut * .9 : .5 + (w ? Math.sin(o.ph) * .15 : 0) + Math.sin(o.t * 1.6) * .04;
  const h = limb(9, -78, up ? -1.9 : cut ? -.1 : .9, 12, up ? -.4 : cut ? .2 : -.9, 11, 3.6, 3, 2.6, dbl);
  g.save(); g.translate(h[0], h[1]); g.rotate(up ? -.5 - up * .3 : cut ? 1.5 + cut * .4 : 2.5 + Math.sin(o.t * 1.6) * .04);
  V(SP('M-1.6,0 L-1.4,-34 L0,-40 L1.4,-34 L1.6,0Z'), '#eef3fb', 0, -18, 20, 1.6); L(SP('M0,-3 L0,-34'), 'rgba(120,140,180,.6)', .8);
  V(SP('M-7,0 L7,0 L7,3 L-7,3Z'), gold, 0, 1, 7, 1.2); L(SP('M0,3 L0,9'), '#5a3a20', 2.6); V(E(0, 10, 2.2, 2.2), gold, 0, 10, 2, .8); g.restore();
  if (cut > .3) { g.save(); g.globalAlpha = cut * .55; L(SP(`M${h[0] - 10},${h[1] - 34} Q${h[0] + 34},${h[1] - 26} ${h[0] + 30},${h[1] + 16}`), '#f4f8ff', 4); g.restore(); }
  V(E(h[0], h[1], 3, 3), '#f4f2ec', h[0], h[1], 3, 1.2); V(E(9, -78, 5, 4.4), gold, 9, -78, 5, 1.2);
  g.restore();
}

function cacciatoreD(o) {                                       // il Cacciatore: grosso e barbuto, cappello tirolese con la piuma, giaccone verde, pelle di lupo sulle spalle con la testa, cinturone con il corno da caccia, ascia da boscaiolo
  const coat = '#4e6e34', sk = '#e8b890', brd = '#7a4a2a', hat = '#4a5a2a', wolf = '#8a8a96', boot = '#3a2a1a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, cut = u < 0 ? -u : 0;
  const b = bobOf(o, 2.6);
  const bootF = (f, col) => V(SP(`M${f[0] - 5},${f[1] - 9} L${f[0] + 4},${f[1] - 9} L${f[0] + 4},${f[1] - 3} Q${f[0] + 12},${f[1] - 3} ${f[0] + 12},${f[1] + 1} L${f[0] - 5},${f[1] + 1}Z`), col, f[0] + 2, f[1] - 4, 9, 1.6);
  g.save(); g.translate(0, b);
  bootF(legB(-5, -44, 21, 20, 6, 4.8, 4, o, Math.PI, '#4a3a2a', .55), dk(boot, .2));
  const tl = Math.sin(o.t * 2) * 2; V(SP(`M-12,-82 Q-26,-70 ${-24 + tl},-44 Q-16,-48 -10,-50Z`), wolf, -18, -62, 18, 1.6); for (let i = 0; i < 4; i++) L(SP(`M${-20 + i * 2},-70 l-2,6`), dk(wolf, .3), .9);
  const hb = limb(-11, -78, 1.75 + (w ? Math.sin(o.ph) * .4 : 0), 14, -.3, 13, 5, 4.2, 3.6, dk(coat, .25)); V(E(hb[0], hb[1], 3.6, 3.4), dk(sk, .1), hb[0], hb[1], 3.6, 1.2);
  const tor = SP('M-14,-82 Q0,-88 14,-82 Q17,-62 13,-38 L-13,-38 Q-16,-62 -14,-82Z'); V(tor, coat, 0, -62, 24);
  g.save(); g.clip(tor); L(SP('M-14,-84 L14,-46'), '#5a3a20', 5); for (const y of [-76, -68, -60]) V(E(-14 + (y + 84) * .74, y, 1.8, 1.8), '#c8c8d0', 0, y, 2, .6); L(SP('M2,-80 L2,-40'), dk(coat, .3), 1.2); g.restore();
  F(SP('M-14,-48 L14,-48 L14,-43 L-14,-43Z'), '#3a2414'); V(SP('M-5,-49 L1,-49 L1,-42 L-5,-42Z'), '#c8a050', -2, -45, 3, .8);
  g.save(); g.translate(-10, -42); g.rotate(.3); V(SP('M0,0 Q6,4 12,2 Q14,-2 16,-6 L18,-2 Q16,6 6,8 Q-2,6 0,0Z'), '#e8dcc0', 8, 3, 9, 1.2); F(E(16.6, -4, 1.4, 2), '#3a2a1a'); g.restore();
  bootF(legB(5, -44, 21, 20, 6.4, 5, 4.2, o, 0, '#5a4a36', .55), boot);
  g.save(); g.translate(-12, -84); g.rotate(-.2 + Math.sin(o.t * 2) * .03); V(SP('M-8,-2 Q-8,-10 0,-11 Q8,-10 10,-2 Q12,4 4,6 Q-6,6 -8,-2Z'), wolf, 0, -2, 10, 1.6); V(PL([-6, -8, -5, -16, -1, -10]), wolf, -4, -11, 4, 1); V(PL([2, -10, 5, -17, 7, -9]), wolf, 4, -12, 4, 1); V(SP('M6,-2 Q14,-1 16,3 Q12,6 6,4Z'), lt(wolf, .1), 11, 2, 5, 1.2); F(E(15.4, 2, 1.4, 1), INK); L(SP('M0,-4 Q2,-2 4,-4'), INK, 1.2); g.restore();
  g.save(); g.translate(3, -96); g.rotate(m === 3 ? -.1 : m === 4 ? -.22 : Math.sin(o.t * 1.6) * .03);
  const face = SP('M-8,-6 Q-8,-14 1,-14 Q10,-14 10,-6 Q11,2 8,6 L-6,6 Q-8,2 -8,-6Z'); V(face, sk, 1, -4, 12);
  const bd = SP('M-8,-2 Q-4,2 2,2 Q8,2 11,-2 Q13,8 8,14 Q2,18 -3,16 Q-9,12 -8,-2Z'); V(bd, brd, 1, 7, 12, 1.6); for (let i = 0; i < 4; i++) L(SP(`M${-4 + i * 3.4},4 l1,9`), dk(brd, .3), .9);
  eyesX(o, sk, [[.4, -4, 2.4, 1], [6.8, -4.2, 2, -1]], 'lidded', '#6a4a2a'); browsX(o, [[.4, -8, 6, 1], [6.8, -8.2, 5, -1]], brd, 2, 'bushy');
  V(E(8, -1, 3.2, 2.8), dk(sk, .05), 8, -1, 3, 1.2); F(E(7, -2, 1, .8), 'rgba(255,255,255,.4)'); mouthX(o, 4, 4.4, 6, 'smirk');
  V(SP('M-10,-10 Q-8,-22 2,-22 Q10,-22 12,-10 Z'), hat, 1, -15, 12, 1.6); V(SP('M-14,-10 Q1,-14 16,-10 Q1,-6 -14,-10Z'), dk(hat, .1), 1, -10, 14, 1.4); F(SP('M-9,-12 L11,-12 L11,-10 L-9,-10Z'), '#8a3a2a');
  V(SP(`M-8,-12 Q-16,-22 ${-20 + Math.sin(o.t * 3) * 2},-30 Q-14,-20 -6,-12Z`), '#4a3a2a', -12, -20, 8, 1.1);
  g.restore();
  const hp = up ? [0, -108] : cut ? [24, -60] : [16, -54], rr = up ? -.7 : cut ? 1.4 : .5 + Math.sin(o.t * 1.4) * .03;
  armTo(11, -78, hp[0], hp[1], 14, 13, 5.2, 4.4, 3.8, coat, up ? -1 : 1);
  g.save(); g.translate(hp[0], hp[1]); g.rotate(rr); L(SP('M0,10 L0,-34'), '#3a2414', 4.4); L(SP('M0,10 L0,-34'), '#9a6a3a', 2.4);
  const ab = SP('M0,-34 Q10,-40 16,-36 Q18,-26 14,-18 Q8,-20 0,-24Z'); V(ab, '#b8c0c8', 9, -28, 10, 1.6); g.save(); g.clip(ab); F(SP('M12,-40 Q18,-28 12,-16 L20,-16 L20,-40Z'), '#eef2f4'); g.restore(); g.restore();
  if (cut > .3) { g.save(); g.globalAlpha = cut * .5; L(SP(`M${hp[0] - 20},${hp[1] - 40} Q${hp[0] + 30},${hp[1] - 40} ${hp[0] + 34},${hp[1]}`), '#f4f8ff', 4); g.restore(); }
  V(E(hp[0], hp[1], 3.8, 3.6), sk, hp[0], hp[1], 3.8, 1.2);
  g.restore();
}

function spiritistaD(o) {                                       // il Cacciatore di spiriti: magro e allampanato, cappotto lungo fino agli stivali, cappello a tesa larga con gli occhialoni d'ottone, baffi a manubrio, lanterna con la fiamma azzurra, sacchetto di sale che lancia
  const coat = '#4a3a5e', hat = '#2a2232', sk = '#f0d0b8', brass = '#c89a3a', fl = '#7ae0ff', u = o.u, m = o.mood, w = o.walking ? 1 : 0, cast = m === 2 || m === 3, throwS = u < 0 ? -u : 0;
  const b = bobOf(o, 2.2), ct = Math.sin(o.t * 3 + o.ph) * 3 + (w ? 3 : 0);
  g.save(); g.translate(0, b);
  const bootF = f => V(SP(`M${f[0] - 3},${f[1] - 8} L${f[0] + 3},${f[1] - 8} L${f[0] + 3},${f[1] - 2} Q${f[0] + 10},${f[1] - 2} ${f[0] + 10},${f[1] + 1} L${f[0] - 3},${f[1] + 1}Z`), '#2a1a14', f[0] + 2, f[1] - 3, 7, 1.4);
  bootF(legB(-3, -44, 22, 22, 3.4, 2.8, 2.4, o, Math.PI, '#3a3040', .6));
  const la = limb(-7, -80, (cast ? -.6 : .4) + Math.sin(o.t * 1.6) * .05, 12, cast ? -.1 : 0, 11, 3.2, 2.6, 2.2, dk(coat, .25));
  g.save(); g.translate(la[0], la[1]); L(SP('M0,0 L0,5'), '#3a2a1a', 1.4); const lp = SP('M-5,5 L5,5 L4,18 L-4,18Z'); glowB(0, 12, cast ? 26 : 16, 'rgba(120,220,255,.55)'); F(lp, 'rgba(200,240,255,.35)');
  const fh = 5 + Math.sin(o.t * 10) * 1.2 + (cast ? 2 : 0); F(SP(`M-2.4,16 Q0,${16 - fh * 2} 2.4,16Z`), fl, '#bff4ff'); L(lp, brass, 1.6); L(SP('M-4,10 L4,10'), brass, 1); V(SP('M-6,3 L6,3 L5,6 L-5,6Z'), brass, 0, 4, 6, 1); V(SP('M-5,18 L5,18 L6,21 L-6,21Z'), brass, 0, 19, 6, 1); g.restore();
  V(E(la[0], la[1], 2.4, 2.4), '#2a2a2a', la[0], la[1], 2.4, 1);
  const cp = SP(`M-9,-82 Q0,-86 9,-82 Q11,-60 10,-44 L${13 + ct * .4},-14 L${-13 + ct},-12 L-10,-44 Q-11,-60 -9,-82Z`); V(cp, coat, 0, -50, 34);
  g.save(); g.clip(cp); L(SP('M2,-82 L1,-14'), dk(coat, .35), 1.2); for (const y of [-74, -66, -58]) V(E(4, y, 1.4, 1.4), brass, 4, y, 1.4, .6); F(SP('M-12,-50 L12,-50 L12,-46 L-12,-46Z'), '#2a1a14'); g.restore();
  V(SP('M-9,-82 L-3,-78 L-6,-70Z M9,-82 L3,-78 L6,-70Z'), dk(coat, .2), 0, -78, 6, 1.2);
  bootF(legB(3, -44, 22, 22, 3.6, 3, 2.6, o, 0, '#4a4050', .6));
  g.save(); g.translate(2, -94); g.rotate(m === 3 ? -.08 : m === 4 ? -.22 : Math.sin(o.t * 1.7) * .03);
  const face = SP('M-5,-7 Q-5,-13 1,-13 Q8,-13 8,-6 Q8,4 5,9 Q2,12 -1,10 Q-5,6 -5,-7Z'); V(face, sk, 1, -2, 12);
  F(E(-1, 3, 2, 3), 'rgba(140,100,120,.2)');
  eyesX(o, sk, [[.6, -3, 2.4, 1], [6.2, -3.2, 2, -1]], 'wide', '#4a6a8a'); browsX(o, [[.6, -7.4, 5, 1], [6.2, -7.4, 4, -1]], '#3a2a1a', 1.6, 'thick');
  V(SP('M5.6,-2 Q9,2 7,4 Q5.4,4 5,2Z'), dk(sk, .06), 7, 2, 3, 1);
  mouthX(o, 4, 7.4, 4.4, cast || throwS ? 'oh' : 'frown');
  L(SP('M-2,5.4 Q2,4 4,5 Q6,4 10,5.4 M-2,5.4 q-3,0 -3,-3 M10,5.4 q3,0 3,-3'), '#3a2a1a', 1.8);
  V(SP('M-6,-10 Q-5,-20 2,-20 Q9,-20 10,-10Z'), hat, 2, -15, 10, 1.6); V(SP('M-14,-9 Q2,-13 18,-9 Q2,-5 -14,-9Z'), dk(hat, .1), 2, -9, 16, 1.4); F(SP('M-5,-13 L10,-13 L10,-10.6 L-5,-10.6Z'), '#6a3a2a');
  for (const x of [-1, 6]) { V(E(x, -15, 2.8, 2.6), brass, x, -15, 3, 1); F(E(x, -15, 1.8, 1.6), 'rgba(160,220,240,.8)'); }
  g.restore();
  const hp = throwS ? [22 + throwS * 4, -78] : u > 0 ? [-2, -70] : [12, -60];
  armTo(7, -80, hp[0], hp[1], 12, 11, 3.2, 2.6, 2.2, coat, u > 0 ? -1 : 1);
  if (!throwS) { V(SP(`M${hp[0] - 4},${hp[1]} Q${hp[0] - 5},${hp[1] + 8} ${hp[0]},${hp[1] + 9} Q${hp[0] + 5},${hp[1] + 8} ${hp[0] + 4},${hp[1]}Z`), '#d8c8a8', hp[0], hp[1] + 4, 5, 1.2); L(SP(`M${hp[0] - 3},${hp[1] + 1} L${hp[0] + 3},${hp[1] + 1}`), '#8a5a2a', 1.2); }
  else for (let i = 0; i < 10; i++) { const a = -.5 + (i % 5) * .22, r = 6 + throwS * 26 + (i * 7 % 9); F(E(hp[0] + Math.cos(a) * r, hp[1] + Math.sin(a) * r, 1.2, 1.2), '#ffffff', '#bfe8ff'); }
  V(E(hp[0], hp[1], 2.4, 2.4), '#2a2a2a', hp[0], hp[1], 2.4, 1);
  g.restore();
}

function porcellinoD(o) {                                       // il Porcellino muratore: il terzo porcellino, quello furbo: salopette di jeans, caschetto giallo da cantiere, matita dietro l'orecchio, scudo di mattoni e cazzuola
  const pk = '#f4a6b4', pd = dk(pk, .2), jeans = '#3a6ac8', helm = '#f2c42a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, bash = u < 0 ? -u : 0, up = u > 0 ? u : 0;
  const b = bobOf(o, 2.4);
  g.save(); g.translate(0, b);
  L(SP(`M-16,-34 q-6,-2 -5,3 q1,4 -4,3`), pd, 2.2);
  const trot = f => { V(SP(`M${f[0] - 4},${f[1] - 5} L${f[0] + 5},${f[1] - 5} L${f[0] + 5},${f[1] + 1} L${f[0] - 4},${f[1] + 1}Z`), '#5a2a2a', f[0], f[1] - 2, 5, 1.2); L(SP(`M${f[0] + .6},${f[1] - 5} L${f[0] + .6},${f[1] + 1}`), '#2a1010', 1); };
  trot(legB(-6, -22, 11, 10, 4.6, 4, 3.6, o, Math.PI, dk(jeans, .2), .6));
  const hb = limb(-12, -50, (up ? -.6 : 1.7) + (w ? Math.sin(o.ph) * .4 : 0), 10, up ? -.6 : -.3, 9, 4, 3.4, 3, pd);
  g.save(); g.translate(hb[0], hb[1]); g.rotate(up ? -1.6 : -.6); L(SP('M0,0 L0,-8'), '#8a5a2a', 2.6); V(SP('M-4,-8 L4,-8 L0,-18Z'), '#c8ccd4', 0, -11, 5, 1); g.restore(); V(E(hb[0], hb[1], 3.4, 3), pd, hb[0], hb[1], 3, 1.2);
  const body = SP('M-17,-30 Q-20,-52 -6,-58 Q8,-60 15,-50 Q20,-36 14,-22 Q0,-16 -14,-20 Q-18,-24 -17,-30Z'); V(body, pk, -1, -40, 22);
  const ov = SP('M-17,-36 Q0,-32 16,-36 Q18,-26 14,-21 Q0,-16 -14,-20 Q-18,-26 -17,-36Z'); V(ov, jeans, 0, -28, 18, 1.6); V(SP('M-6,-36 L8,-36 L8,-48 L-6,-48Z'), jeans, 1, -42, 8, 1.4); L(SP('M-6,-48 L-10,-56 M8,-48 L10,-56'), jeans, 3); for (const x of [-5, 7]) V(E(x, -46, 1.4, 1.4), '#d8c050', x, -46, 1.4, .6); L(SP('M-2,-44 L4,-44 L4,-40 L-2,-40Z'), dk(jeans, .3), .9);
  trot(legB(6, -22, 11, 10, 5, 4.2, 3.8, o, 0, jeans, .6));
  g.save(); g.translate(6, -66); g.rotate(m === 3 ? -.1 : m === 4 ? -.24 : Math.sin(o.t * 2.2) * .04);
  V(SP('M-10,-6 Q-18,-12 -16,0 Q-12,0 -9,-1Z'), pd, -12, -4, 6, 1.4); V(SP('M8,-8 Q16,-16 18,-6 Q14,-2 9,-3Z'), pd, 13, -6, 6, 1.4);
  const hd = E(0, 0, 12, 11); V(hd, pk, 0, 0, 12);
  V(E(10, 3, 5, 4.4), lt(pk, .06), 10, 3, 5, 1.4); F(E(9, 3, 1.1, 1.6), '#8a3a4a'); F(E(12, 3, 1.1, 1.6), '#8a3a4a');
  F(E(-3, 4, 2.6, 1.8), 'rgba(240,90,110,.4)');
  eyesX(o, pk, [[-1, -2.6, 2.4, 1], [6, -3.4, 2, -1]], 'round', '#3a6ac8'); browsX(o, [[-1, -6.4, 5, 1], [6, -7, 4, -1]], dk(pk, .45), 1.4, 'arch');
  mouthX(o, 4.6, 8.4, 5.4, 'grin');
  V(SP('M-12,-4 Q-12,-17 0,-17 Q12,-17 13,-4 Z'), helm, 0, -10, 13, 1.6); V(SP('M-14,-4 L16,-4 Q17,-1 14,-1 L-14,-1Z'), dk(helm, .1), 1, -2, 15, 1.2); L(SP('M0,-17 L0,-5'), dk(helm, .25), 2);
  g.save(); g.translate(-11, -2); g.rotate(-.6); V(SP('M-1,-6 L1,-6 L1,4 L0,6 L-1,4Z'), '#f2c42a', 0, 0, 3, .8); F(E(0, -6, 1, .6), '#e86a8a'); g.restore();
  g.restore();
  const sx = 20 + bash * 14, sy = -42;
  armTo(10, -50, sx - 2, sy, 9, 9, 4, 3.4, 3, pk, 1);
  g.save(); g.translate(sx, sy); g.rotate(bash * .1 + Math.sin(o.t * 2) * .02);
  const sh = SP('M-6,-16 L6,-16 L6,16 L-6,16Z'); V(sh, '#c45a3a', 0, 0, 14, 1.8);
  g.save(); g.clip(sh); for (let r = 0; r < 6; r++) { const y = -16 + r * 5.4; L(SP(`M-7,${y} L7,${y}`), '#e8dcc8', 1.2); for (let x = -6 + (r % 2) * 3; x < 7; x += 6) L(SP(`M${x},${y} L${x},${y + 5.4}`), '#e8dcc8', 1.2); } g.restore();
  g.restore();
  g.restore();
}

function fataD(o) {                                             // la Fata Turchina: piccola, vola con quattro ali da libellula trasparenti, capelli turchini raccolti con i brillantini, vestito a petali, bacchetta con la stella, scia di brillantini che cura
  const dr = '#7ad8e8', dr2 = '#4ab8d0', hair = '#2ab0c8', sk = '#f8e0cc', u = o.u, m = o.mood, w = o.walking ? 1 : 0, cast = m === 2 || m === 3;
  const hov = -16 + Math.sin(o.t * 2.5) * 4, fl = Math.sin(o.t * 22) * .35;
  for (let i = 0; i < 6; i++) { const k = (o.t * .8 + i / 6) % 1; g.save(); g.globalAlpha = 1 - k; F(SP(`M${-6 - k * 18 + Math.sin(i * 2) * 4},${hov - 20 + k * 22} l1.4,-3 l1.4,3 l-1.4,3Z`), i % 2 ? '#fff6a0' : '#bff4ff', '#8ae8ff'); g.restore(); }
  g.save(); g.translate(0, hov); g.rotate((w ? .12 : .04) + (cast ? -.05 : 0));
  const wing = (a, l, wd, al) => { g.save(); g.translate(-4, -52); g.rotate(a); const p = E(-l * .5, 0, l * .5, wd); g.save(); g.globalAlpha = al; F(p, 'rgba(210,250,255,.55)'); g.restore(); L(p, 'rgba(120,200,230,.9)', 1); L(SP(`M0,0 L${-l * .9},0 M${-l * .4},0 l-4,-3 M${-l * .6},0 l-4,3`), 'rgba(120,200,230,.6)', .7); g.restore(); };
  wing(-2.5 + fl, 26, 6, .8); wing(-3.4 - fl, 22, 5, .8);
  for (const [x, off] of [[-3, 0], [3, 1]]) { const a = .2 + Math.sin(o.t * 2 + off) * .15; const f = [x + Math.sin(a) * 14, -28 + Math.cos(a) * 14]; taper(x, -30, f[0], f[1], 2.4, 1.6, off ? sk : dk(sk, .08)); V(E(f[0] + 1.4, f[1], 2.4, 1.2), dr2, f[0], f[1], 2, .8); }
  const sk2 = SP('M-6,-46 Q-14,-38 -14,-28 Q-10,-32 -7,-26 Q-4,-32 0,-25 Q4,-32 7,-26 Q10,-32 14,-28 Q14,-38 6,-46Z'); V(sk2, dr, 0, -36, 16, 1.6);
  g.save(); g.clip(sk2); for (const x of [-7, 0, 7]) L(SP(`M${x * .5},-46 Q${x},-36 ${x},-26`), dr2, 1); g.restore();
  V(SP('M-5,-58 Q0,-60 5,-58 L6,-46 L-6,-46Z'), dr2, 0, -52, 8, 1.4);
  limb(-4, -56, 2.0 + Math.sin(o.t * 2) * .1, 7, -.6, 7, 2, 1.6, 1.4, dk(sk, .08));
  g.save(); g.translate(1, -68); g.rotate(m === 4 ? -.24 : Math.sin(o.t * 2.4) * .05);
  V(E(-4, -10, 6, 5.4), hair, -4, -10, 6, 1.4); for (const [x, y] of [[-6, -13], [-2, -12], [-5, -8]]) F(E(x, y, .8, .8), '#fff6a0', '#fff');
  const face = SP('M-7,-3 Q-7,-11 1,-11 Q9,-11 9,-3 Q9,5 4,8 Q1,9 -2,8 Q-7,5 -7,-3Z'); V(face, sk, 1, -1, 10);
  V(SP('M-9,4 Q-11,-10 0,-12 Q10,-13 10,-4 Q6,-9 1,-7 Q-2,-9 -4,-5 Q-6,-2 -5,4Z'), hair, 0, -6, 10, 1.4);
  F(E(-2.4, 3, 2, 1.3), 'rgba(250,120,150,.45)'); F(E(7, 2.8, 1.4, 1), 'rgba(250,120,150,.45)');
  eyesX(o, sk, [[0, -1.4, 2.8, 1], [6, -1.6, 2.3, -1]], 'lashes', '#2ab0c8'); browsX(o, [[0, -5.4, 4, 1], [6, -5.4, 3.2, -1]], dk(hair, .3), 1, 'arch');
  mouthX(o, 3.4, 4.6, 4, 'smile', { lips: '#e8608a' });
  V(PL([-3, -12, -1.4, -16, 0, -12.6, 2, -17, 3.6, -12.6, 5, -15.4, 5.6, -11.6]), '#f4f4ff', 1, -13, 4, .8);
  g.restore();
  const ra = cast ? -1.1 - (m === 3 ? .3 : 0) : .4 - u * .8;
  const h = limb(4, -56, ra, 7, cast ? -.2 : -.8, 7, 2, 1.6, 1.4, sk);
  g.save(); g.translate(h[0], h[1]); g.rotate(cast ? .6 : 0); L(SP('M0,2 L0,-14'), '#e8e8f8', 1.6);
  const st = r => SP(`M0,${-18 - r} L${r * .3},${-18 - r * .3} L${r},-18 L${r * .3},${-18 + r * .3} L0,${-18 + r} L${-r * .3},${-18 + r * .3} L${-r},-18 L${-r * .3},${-18 - r * .3}Z`);
  if (cast) glowB(0, -18, 16, 'rgba(150,255,210,.6)'); F(st(cast ? 6 : 4.4), '#fff6a0', '#ffe060'); g.restore();
  V(E(h[0], h[1], 1.8, 1.8), sk, h[0], h[1], 2, .9);
  wing(-1.9 - fl, 24, 5.4, .65); wing(-2.9 + fl, 20, 4.6, .65);
  if (cast) for (let i = 0; i < 6; i++) { const k = (o.t * 1.4 + i / 6) % 1, a = i * 1.05 + o.t; F(E(h[0] + Math.cos(a) * (6 + k * 16), h[1] - 18 + Math.sin(a) * (6 + k * 16), 1.2, 1.2), `rgba(160,255,200,${1 - k})`, '#8affc8'); }
  g.restore();
}

function reD(o) {                                               // il Re: grande e grosso, corona alta con le gemme, barba bianca lunghissima a due punte, armatura d'argento col sole d'oro sul pancione, mantello rosso d'ermellino, mani sul pomo dello spadone
  const arm = '#c9ccd6', gold = '#f2c14e', cape = '#b8202a', sk = '#f0c8a0', brd = '#f4f2ec', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, cut = u < 0 ? -u : 0;
  const b = bobOf(o, 3);
  const bootF = (f, col) => V(SP(`M${f[0] - 6},${f[1] - 8} L${f[0] + 5},${f[1] - 8} Q${f[0] + 14},${f[1] - 5} ${f[0] + 14},${f[1] + 1} L${f[0] - 6},${f[1] + 1}Z`), col, f[0] + 3, f[1] - 4, 10, 1.6);
  g.save(); g.translate(0, b);
  const cw = Math.sin(o.t * 2.4) * 3 + (w ? 4 : 0);
  const cp = SP(`M-14,-118 Q-30,-90 ${-36 - cw},-30 Q${-36 - cw},-6 ${-30 - cw},0 L-4,0 Q-14,-60 4,-116Z`); V(cp, cape, -18, -60, 50); g.save(); g.clip(cp); F(SP(`M${-40 - cw},-12 L0,-12 L0,4 L${-40 - cw},4Z`), '#f4f2ec'); for (let x = -36; x < 0; x += 7) F(E(x - cw * .5, -6, 1.2, 2), INK); g.restore();
  bootF(legB(-8, -60, 28, 27, 8, 6.4, 5.4, o, Math.PI, dk(arm, .3), .45), dk(arm, .4));
  const pv = up ? [4, -150 - up * 6] : cut ? [30 + cut * 10, -70] : [16, -66], rr = up ? Math.PI - .6 : cut ? -1.5 : .02;
  armTo(-18, -112, pv[0] - 2, pv[1] + 1, 22, 21, 7, 6, 5, dk(arm, .25), up ? -1 : 1); V(E(pv[0] - 2, pv[1] + 1, 5, 4.6), dk(arm, .2), pv[0], pv[1], 5, 1.4);
  const tor = SP('M-24,-118 Q0,-128 24,-118 Q34,-90 26,-62 Q0,-52 -26,-62 Q-34,-90 -24,-118Z'); V(tor, arm, 0, -90, 34);
  g.save(); g.clip(tor); L(SP('M-26,-64 Q0,-56 26,-64'), gold, 3); L(SP('M0,-122 L0,-60'), dk(arm, .3), 1.4);
  g.save(); g.translate(2, -84); for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; L(SP(`M${Math.cos(a) * 6},${Math.sin(a) * 6} L${Math.cos(a) * 10},${Math.sin(a) * 10}`), gold, 1.8); } V(E(0, 0, 6, 6), gold, 0, 0, 6, 1.2); g.restore(); g.restore();
  V(SP('M-26,-64 L26,-64 L30,-46 L-30,-46Z'), dk(arm, .1), 0, -55, 24, 1.8); F(SP('M-26,-66 L26,-66 L26,-62 L-26,-62Z'), '#5a3a20');
  bootF(legB(8, -60, 28, 27, 8.4, 6.8, 5.8, o, 0, arm, .45), dk(arm, .3));
  g.save(); g.translate(6, -132); g.rotate(m === 3 ? -.08 : m === 4 ? -.2 : Math.sin(o.t * 1.4) * .03);
  const face = SP('M-11,-6 Q-11,-17 1,-17 Q13,-17 13,-6 Q14,4 10,8 L-8,8 Q-12,4 -11,-6Z'); V(face, sk, 1, -4, 15);
  const bw = Math.sin(o.t * 2) * 1.6 + (w ? Math.sin(o.ph) * 2 : 0);
  const bd = SP(`M-11,-2 Q-6,4 2,3 Q10,4 14,-2 Q16,14 12,28 Q${10 + bw},40 ${8 + bw},46 Q${5 + bw},36 2,30 Q${-1 + bw},38 ${-4 + bw},46 Q-8,34 -10,24 Q-14,10 -11,-2Z`); V(bd, brd, 1, 18, 22, 1.6);
  g.save(); g.clip(bd); for (let i = 0; i < 6; i++) L(SP(`M${-8 + i * 4},4 Q${-8 + i * 4 + bw * .4},24 ${-6 + i * 3.4 + bw},44`), '#c8ccd8', .9); g.restore();
  V(SP('M-4,2 Q2,-1 4,2 Q8,-1 13,2 Q14,6 9,5 Q6,4 4,5 Q0,7 -3,6 Q-6,5 -4,2Z'), brd, 4, 3, 8, 1.2);
  F(E(-5, -1, 3, 2), 'rgba(230,90,90,.4)'); V(E(9, -3, 3.4, 3), '#e89a8a', 9, -3, 3, 1.2);
  eyesX(o, sk, [[0, -7, 2.6, 1], [8, -7.4, 2.2, -1]], 'round', '#3a6ab8'); browsX(o, [[0, -11.4, 7, 1], [8, -11.8, 6, -1]], brd, 2.6, 'bushy');
  if (m === 3) mouthX(o, 5, 7, 6, 'frown');
  const cr = SP('M-12,-14 L-14,-30 L-7,-22 L-2,-34 L3,-22 L9,-32 L12,-22 L16,-30 L14,-14Z'); V(cr, gold, 1, -22, 14, 1.6); F(SP('M-12,-16 L14,-16 L14,-13 L-12,-13Z'), cape);
  for (const [x, y, c] of [[-2, -20, '#d02a4a'], [7, -20, '#2a8ad8'], [-9, -19, '#3ab86a']]) V(E(x, y, 1.8, 2), c, x, y, 2, .6); for (const [x, y] of [[-14, -30], [-2, -34], [9, -32], [16, -30]]) F(E(x, y, 1.4, 1.4), '#fff4c0');
  g.restore();
  g.save(); g.translate(pv[0], pv[1]); g.rotate(rr);
  L(SP('M0,-14 L0,0'), '#5a3a20', 4); V(E(0, -16, 3.4, 3.4), gold, 0, -16, 3.4, 1); V(SP('M-12,0 L12,0 L12,4 L-12,4Z'), gold, 0, 2, 12, 1.4);
  V(SP('M-3.6,4 L-3.2,52 L0,60 L3.2,52 L3.6,4Z'), '#eef3fb', 0, 30, 30, 1.8); L(SP('M0,8 L0,52'), 'rgba(120,140,180,.6)', 1.2); g.restore();
  if (cut > .3) { g.save(); g.globalAlpha = cut * .55; L(SP(`M${pv[0] - 20},${pv[1] - 56} Q${pv[0] + 50},${pv[1] - 40} ${pv[0] + 50},${pv[1] + 30}`), '#f4f8ff', 6); g.restore(); for (let i = 0; i < 6; i++) { const a = Math.PI + i * .5; F(E(60 + Math.cos(a) * 20, -6 + Math.sin(a) * 6, 3, 2), 'rgba(200,170,120,.7)'); } }
  armTo(16, -112, pv[0] + 2, pv[1] - 1, 22, 21, 7.4, 6.2, 5.2, arm, up ? -1 : 1); V(E(pv[0] + 2, pv[1] - 1, 5.4, 5), arm, pv[0], pv[1], 5, 1.4);
  V(E(17, -112, 11, 9), arm, 17, -112, 11, 1.8); L(SP('M8,-116 Q17,-122 27,-116'), gold, 1.6);
  g.restore();
}
Object.assign(DRAW, { soldatino: soldatinoD, arciere: arciereD, principe: principeD, cacciatore: cacciatoreD, spiritista: spiritistaD, porcellino: porcellinoD, fata: fataD, re: reD });
