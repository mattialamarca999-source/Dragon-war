// ---------- gruppo 13: i buoni (3) ----------
function peterpanD(o) {                                         // Peter Pan: ragazzino che vola a mezz'aria a gambe incrociate, tunica di foglie a punte, berretto verde con la piuma rossa, orecchie a punta, sorriso sfrontato, pugnaletto, scia di polvere fatata
  const gr = '#4aa84a', grd = dk(gr, .3), sk = '#f4d2b0', hair = '#c8642a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, stab = u < 0 ? -u : 0, up = u > 0 ? u : 0;
  const hov = -24 + Math.sin(o.t * 2.4) * 4;
  for (let i = 0; i < 6; i++) { const k = (o.t * .9 + i / 6) % 1; g.save(); g.globalAlpha = 1 - k; F(E(-8 - k * 24 + Math.sin(i * 3) * 3, hov - 20 + k * 18, 1.3, 1.3), '#fff4a0', '#ffd84a'); g.restore(); }
  g.save(); g.translate(stab * 10, hov); g.rotate((w ? .2 : .06) + stab * .15);
  const shoe = (f, col) => V(SP(`M${f[0] - 3},${f[1] - 4} L${f[0] + 3},${f[1] - 4} Q${f[0] + 9},${f[1] - 4} ${f[0] + 10},${f[1] - 7} Q${f[0] + 10},${f[1] + 1} ${f[0] + 4},${f[1] + 1} L${f[0] - 3},${f[1] + 1}Z`), col, f[0] + 3, f[1] - 2, 6, 1.2);
  { const a = .5 + Math.sin(o.t * 2) * .1, k = [-3 + Math.sin(a) * 15, -38 + Math.cos(a) * 15], f = [k[0] - 12, k[1] + 5]; taper(-3, -38, k[0], k[1], 3.4, 2.8, grd); taper(k[0], k[1], f[0], f[1], 2.8, 2.2, grd); shoe(f, '#6a4a2a'); }
  const hb = limb(-5, -62, 2.4 + Math.sin(o.t * 2) * .1, 9, -1.4, 8, 2.6, 2.2, 1.9, dk(sk, .08)); V(E(hb[0], hb[1], 2.2, 2.2), dk(sk, .08), hb[0], hb[1], 2.2, 1);
  const tun = SP('M-8,-64 Q0,-68 8,-64 L9,-44 L6,-38 L3,-43 L0,-36 L-3,-43 L-6,-38 L-9,-44Z'); V(tun, gr, 0, -52, 16, 1.6);
  g.save(); g.clip(tun); for (const [x, y] of [[-4, -58], [3, -52], [-2, -46]]) L(SP(`M${x},${y} l3,-3 m-3,3 l3,2`), grd, .9); g.restore(); F(SP('M-9,-46 L9,-46 L9,-43 L-9,-43Z'), '#6a4a2a');
  { const a = -.4 + Math.sin(o.t * 2 + 1) * .1, k = [3 + Math.sin(a + 1.2) * 15, -38 + Math.cos(a + 1.2) * 15], f = [k[0] + Math.sin(a - .4) * 14, k[1] + Math.cos(a - .4) * 14]; taper(3, -38, k[0], k[1], 3.6, 3, gr); taper(k[0], k[1], f[0], f[1], 3, 2.4, gr); shoe(f, '#7a5a3a'); }
  g.save(); g.translate(2, -74); g.rotate(m === 3 ? -.1 : m === 4 ? -.24 : Math.sin(o.t * 2.6) * .05);
  V(PL([-6, -2, -13, -6, -6, 2]), sk, -8, -2, 4, 1.2);
  const face = SP('M-6,-5 Q-6,-12 1,-12 Q8,-12 8,-5 Q8,3 4,7 Q1,9 -2,7 Q-6,3 -6,-5Z'); V(face, sk, 1, -2, 11);
  for (const [x, y] of [[-2, 1.6], [-.6, 2.6], [6.4, 1.4]]) F(E(x, y, .5, .5), '#b8703a');
  eyesX(o, sk, [[.6, -2.4, 2.4, 1], [6.2, -2.6, 2, -1]], 'almond', '#3a9a5a'); browsX(o, [[.6, -6.6, 5, 1], [6.2, -6.8, 4, -1]], dk(hair, .3), 1.4, 'arch');
  L(SP('M5.6,-.6 Q7.6,2 5.8,3'), dk(sk, .3), 1); mouthX(o, 3.6, 4.8, 5, 'smirk');
  V(SP('M-8,2 Q-10,-8 -2,-11 L-4,-5 Q-6,-2 -6,3Z'), hair, -6, -4, 6, 1.2);
  V(SP('M-9,-6 Q-6,-16 4,-16 Q12,-14 14,-6 Q16,-2 18,0 Q10,-4 -9,-4Z'), gr, 3, -9, 12, 1.6);
  V(SP(`M-6,-10 Q-14,-18 ${-20 + Math.sin(o.t * 3) * 2},-20 Q-12,-14 -4,-8Z`), '#d8302a', -12, -14, 7, 1.1);
  g.restore();
  const hp = stab ? [18 + stab * 6, -58] : up ? [4, -74] : [12, -48];
  armTo(5, -62, hp[0], hp[1], 9, 8, 2.6, 2.2, 1.9, sk, up ? -1 : 1);
  g.save(); g.translate(hp[0], hp[1]); g.rotate(stab ? Math.PI / 2 : up ? -.6 : 2.6); V(SP('M-1.4,0 L-1.2,-14 L0,-18 L1.2,-14 L1.4,0Z'), '#eef3fb', 0, -9, 9, 1.2); V(SP('M-4,0 L4,0 L4,2 L-4,2Z'), '#c8a050', 0, 1, 4, .8); L(SP('M0,2 L0,6'), '#6a4a2a', 2); g.restore();
  V(E(hp[0], hp[1], 2.2, 2.2), sk, hp[0], hp[1], 2.2, 1);
  g.restore();
}

function cappuccettoD(o) {                                      // Cappuccetto Rosso: bambina con la mantella rossa col cappuccio, trecce castane, grembiule bianco, calzettoni, cestino col panno a quadretti, il pane e i fiori; corre veloce e picchia col cestino
  const red = '#d02a2a', sk = '#f6d2b0', hair = '#7a4a2a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, sw = u < 0 ? -u : 0, up = u > 0 ? u : 0;
  const b = w ? -Math.abs(Math.sin(o.ph * 1.2)) * 4 : Math.sin(o.t * 3.4) * .6, cw = Math.sin(o.t * 4) * 3 + (w ? 6 : 0);
  const shoe = (f, col) => V(E(f[0] + 2, f[1] - 1.4, 3.8, 2.2), col, f[0] + 2, f[1] - 1.4, 3, 1.2);
  g.save(); g.translate(0, b); g.rotate(w ? .08 : 0);
  const cp = SP(`M-6,-60 Q-16,-44 ${-20 - cw},-22 Q${-12 - cw},-20 -4,-24 Q-4,-40 2,-58Z`); V(cp, red, -10, -40, 20, 1.6);
  shoe(legB(-2, -28, 13, 12, 2.6, 2.2, 2, o, Math.PI, '#f4f2ec', .8), '#3a2a1a');
  const hb = limb(-5, -48, 1.9 + (w ? Math.sin(o.ph * 1.2) * .7 : 0), 8, -.3, 8, 2.2, 1.9, 1.7, dk(red, .2)); V(E(hb[0], hb[1], 2, 2), dk(sk, .08), hb[0], hb[1], 2, .9);
  const dr = SP(`M-6,-50 Q0,-52 6,-50 L${10 + (w ? 2 : 0)},-26 L${-9 + (w ? 2 : 0)},-26Z`); V(dr, '#3a5aa8', 0, -38, 14, 1.6); V(SP('M-4,-44 L5,-44 L7,-28 L-6,-28Z'), '#fafaf6', 0, -36, 8, 1.1); L(SP('M-5,-44 L5,-44'), '#d02a2a', 1.2);
  shoe(legB(2, -28, 13, 12, 2.8, 2.4, 2.1, o, 0, '#fafaf6', .8), '#4a3020');
  V(SP('M-7,-52 Q0,-56 7,-52 L6,-46 Q0,-48 -6,-46Z'), red, 0, -50, 8, 1.4); V(E(0, -50, 1.8, 1.8), '#f2c43a', 0, -50, 2, .7);
  g.save(); g.translate(1, -60); g.rotate(m === 3 ? -.12 : m === 4 ? -.26 : Math.sin(o.t * 3) * .05);
  V(SP('M-11,8 Q-14,-12 0,-15 Q13,-15 13,-2 Q13,8 10,10 L9,-2 Q4,-9 -4,-7 Q-8,-2 -8,8Z'), red, 0, -4, 14, 1.6);
  for (const s of [-1, 1]) { const bw = Math.sin(o.t * 4 + s) * 1.2; V(SP(`M${s * 5 - 1},4 Q${s * 7 + bw},10 ${s * 6 + bw},14 Q${s * 4 + bw},14 ${s * 3 - 1},6Z`), hair, s * 5, 9, 4, 1.1); }
  const face = E(1, 0, 8.6, 8.4); V(face, sk, 1, 0, 9);
  V(SP('M-7,-2 Q-6,-8 1,-8 Q8,-8 9,-2 Q4,-5 1,-4 Q-3,-5 -7,-2Z'), hair, 1, -5, 8, 1.1);
  F(E(-3, 3, 2, 1.3), 'rgba(240,100,110,.45)'); F(E(6.4, 3, 1.4, 1), 'rgba(240,100,110,.45)');
  eyesX(o, sk, [[-1, -.2, 2.6, 1], [5.6, -.4, 2.2, -1]], 'round', '#7a4a2a'); browsX(o, [[-1, -4, 4, 1], [5.6, -4.2, 3.4, -1]], dk(hair, .2), 1.2, 'arch');
  F(E(8, 2, 1.2, 1), dk(sk, .1)); mouthX(o, 3.4, 4.6, 4, 'smile');
  g.restore();
  const hp = sw ? [16 + sw * 4, -46] : up ? [-6, -56] : [10, -36];
  armTo(5, -48, hp[0], hp[1], 8, 8, 2.2, 1.9, 1.7, red, up ? -1 : 1);
  g.save(); g.translate(hp[0], hp[1]); g.rotate(sw ? -.6 : up ? .6 : 0);
  L(SP('M-6,4 Q0,-6 6,4'), '#8a5a2a', 2.2); const bk = SP('M-8,4 L8,4 L6,14 L-6,14Z'); V(bk, '#c8945a', 0, 9, 8, 1.4); g.save(); g.clip(bk); for (let x = -8; x < 8; x += 3) L(SP(`M${x},4 L${x + 2},14`), dk('#c8945a', .3), .8); g.restore();
  V(SP('M-7,4 Q-4,0 0,2 Q4,0 7,4Z'), '#f4f2ec', 0, 3, 6, 1); for (const x of [-4, 0, 4]) F(SP(`M${x - 1},2.4 L${x + 1},2.4 L${x + 1},4 L${x - 1},4Z`), '#d02a2a');
  V(E(-3, 1, 3.4, 2), '#e8b060', -3, 1, 3, 1); for (const [x, c] of [[3, '#f4a0c8'], [5, '#f2c43a']]) F(E(x, -1, 1.4, 1.4), c);
  g.restore();
  V(E(hp[0], hp[1], 2, 2), sk, hp[0], hp[1], 2, .9);
  g.restore();
}

function robinhoodD(o) {                                        // Robin Hood: il ladro gentiluomo, cappello a punta verde con la piuma rossa lunga, pizzetto e baffetti, giubba di cuoio, calzamaglia verde, faretra, sacchetto di monete, arco lungo
  const gr = '#3a7a3a', lea = '#8a5a34', sk = '#eec4a0', hair = '#9a5a2a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, draw = u > 0 ? u : 0;
  const b = bobOf(o, 2.4);
  const boot = (f, col) => V(SP(`M${f[0] - 3},${f[1] - 10} L${f[0] + 4},${f[1] - 10} L${f[0] + 4},${f[1] - 3} Q${f[0] + 10},${f[1] - 3} ${f[0] + 10},${f[1] + 1} L${f[0] - 3},${f[1] + 1}Z`), col, f[0] + 2, f[1] - 4, 8, 1.4);
  g.save(); g.translate(0, b);
  boot(legB(-3, -44, 21, 20, 3.8, 3, 2.6, o, Math.PI, dk(gr, .3), .6), '#4a3020');
  g.save(); g.translate(-9, -64); g.rotate(-.3); V(SP('M-4,-16 L4,-16 L5,14 L-5,14Z'), dk(lea, .25), 0, 0, 10, 1.4); for (const x of [-2.6, 0, 2.6]) { L(SP(`M${x},-16 L${x},-24`), '#e8dcc0', 1.4); V(PL([x - 2, -24, x, -30, x + 2, -24]), '#f4f2ec', x, -26, 3, .7); } g.restore();
  const tor = SP('M-9,-80 Q0,-84 9,-80 Q11,-62 10,-48 L12,-38 L-12,-38 L-10,-48 Q-11,-62 -9,-80Z'); V(tor, lea, 0, -60, 22);
  g.save(); g.clip(tor); F(SP('M-12,-84 L12,-84 L12,-76 Q0,-72 -12,-76Z'), gr); L(SP('M0,-76 L0,-38'), dk(lea, .35), 1.2); for (const y of [-70, -62, -54]) L(SP(`M-2,${y} L2,${y + 2} M2,${y} L-2,${y + 2}`), '#3a2010', .9); g.restore();
  F(SP('M-11,-48 L11,-48 L11,-44 L-11,-44Z'), '#3a2010'); V(E(0, -46, 2.4, 2), '#c8a050', 0, -46, 2, .7);
  V(SP('M-8,-44 Q-11,-40 -9,-35 Q-5,-33 -3,-36 Q-3,-42 -6,-44Z'), '#c8a868', -6, -39, 4, 1); F(E(-6, -38, 1.2, 1.2), '#f2c43a');
  boot(legB(3, -44, 21, 20, 4, 3.2, 2.8, o, 0, gr, .6), '#5a3a24');
  g.save(); g.translate(2, -92); g.rotate(m === 4 ? -.22 : Math.sin(o.t * 1.9) * .04 - draw * .05);
  const face = SP('M-6,-6 Q-6,-13 1,-13 Q8,-13 8,-5 Q9,3 5,8 Q2,10 -1,9 Q-5,6 -6,-6Z'); V(face, sk, 1, -2, 12);
  V(SP('M-7,4 Q-9,-8 -2,-10 L-3,-4 Q-6,-1 -5,5Z'), hair, -5, -3, 6, 1.2);
  eyesX(o, sk, [[.6, -2.6, 2.4, 1], [6.4, -2.8, 2, -1]], 'lidded', '#5a7a3a'); browsX(o, [[.6, -6.6, 5, 1], [6.4, -6.8, 4, -1]], hair, 1.6, 'arch');
  V(SP('M5.6,-1 Q9,2 7,4 Q5.4,4 5,2Z'), dk(sk, .06), 7, 2, 3, 1);
  mouthX(o, 4, 5.6, 5, 'smirk'); L(SP('M1,4.4 Q4,3 6,4.2 Q8,3 9,4.6'), hair, 1.6); V(SP('M2,7.4 Q4,12 6,7.6Z'), hair, 4, 9, 3, 1);
  V(SP('M-9,-6 Q-6,-14 4,-14 Q10,-12 12,-6 L20,-2 Q8,-2 -9,-4Z'), gr, 4, -8, 12, 1.6); F(SP('M-9,-6 L12,-6 L12,-4 L-9,-4Z'), dk(gr, .3));
  V(SP(`M-4,-10 Q-14,-22 ${-22 + Math.sin(o.t * 3) * 2},-28 Q-12,-18 -2,-8Z`), '#d8302a', -12, -18, 8, 1.1); L(SP(`M-4,-10 Q-13,-20 ${-21 + Math.sin(o.t * 3) * 2},-27`), '#8a1a1a', .8);
  g.restore();
  const bx = 22 - draw * 2, by = -66;
  armTo(6, -76, bx, by, 11, 10, 3, 2.6, 2.2, gr, -1); V(E(bx, by, 2.4, 2.4), sk, bx, by, 2.4, 1);
  g.save(); g.translate(bx, by); const bend = draw * 5;
  L(SP(`M-1,-32 Q${14 + bend},-16 4,0 Q${14 + bend},16 -1,32`), dk('#8a5a30', .7), 6); L(SP(`M-1,-32 Q${14 + bend},-16 4,0 Q${14 + bend},16 -1,32`), '#a8703a', 3.2); V(E(4, 0, 2.8, 4.4), '#4a2a1a', 4, 0, 3, 1);
  const sx = -2 - draw * 20; L(SP(`M-1,-32 L${sx},0 L-1,32`), '#f4f0e0', 1);
  if (draw > .05) { L(SP(`M${sx},0 L16,0`), '#6a4a2a', 1.6); V(PL([16, -2.2, 21, 0, 16, 2.2]), '#c8ccd8', 18, 0, 3, .8); F(PL([sx, 0, sx + 4, -2.6, sx + 6, 0, sx + 4, 2.6]), '#f4f2ec'); }
  g.restore();
  armTo(-4, -76, bx - 2 - draw * 20, by, 11, 10, 3, 2.6, 2.2, dk(lea, .1), 1); V(E(bx - 2 - draw * 20, by, 2.4, 2.4), sk, bx - 2 - draw * 20, by, 2.4, 1);
  g.restore();
}

function gattostivaliD(o) {                                     // il Gatto con gli Stivali: gatto rosso tigrato in piedi, cappellone piumato da moschettiere, stivaloni con il risvolto, mantellina, spadino; occhi furbi e baffi
  const fur = '#e88a2a', furd = dk(fur, .3), bel = '#f8e0c0', boot = '#5a3420', u = o.u, m = o.mood, w = o.walking ? 1 : 0, lunge = u < 0 ? -u : 0, up = u > 0 ? u : 0;
  const b = bobOf(o, 2.2);
  g.save(); g.translate(lunge * 8, b); g.rotate(lunge * .12);
  const tw = Math.sin(o.t * 3) * 4; L(SP(`M-8,-30 Q-20,-30 -22,${-44 + tw} Q-22,${-52 + tw} ${-16 + tw * .3},-54`), furd, 6); L(SP(`M-8,-30 Q-20,-30 -22,${-44 + tw} Q-22,${-52 + tw} ${-16 + tw * .3},-54`), fur, 4);
  const cw = Math.sin(o.t * 3.4) * 3 + (w ? 4 : 0); V(SP(`M-6,-52 Q-14,-38 ${-16 - cw},-24 Q-8,-26 -2,-30Z`), '#3a4ab8', -10, -38, 12, 1.4);
  const bt = (f, col) => { V(SP(`M${f[0] - 4},${f[1] - 14} L${f[0] + 4},${f[1] - 14} L${f[0] + 4},${f[1] - 3} Q${f[0] + 11},${f[1] - 3} ${f[0] + 11},${f[1] + 1} L${f[0] - 4},${f[1] + 1}Z`), col, f[0] + 2, f[1] - 6, 9, 1.4); V(SP(`M${f[0] - 6},${f[1] - 16} L${f[0] + 6},${f[1] - 16} L${f[0] + 5},${f[1] - 11} L${f[0] - 5},${f[1] - 11}Z`), lt(col, .1), f[0], f[1] - 13, 6, 1.2); };
  bt(legB(-3, -28, 14, 13, 3.6, 3, 2.6, o, Math.PI, furd, .6), dk(boot, .2));
  const hb = limb(-5, -48, 1.9 + (w ? Math.sin(o.ph) * .5 : 0), 8, -.4, 8, 2.6, 2.2, 2, furd); V(E(hb[0], hb[1], 2.4, 2.4), furd, hb[0], hb[1], 2.4, 1);
  const body = SP('M-8,-50 Q0,-54 8,-50 Q11,-38 8,-26 L-8,-26 Q-11,-38 -8,-50Z'); V(body, fur, 0, -38, 14); g.save(); g.clip(body); F(E(3, -36, 5, 10), bel); for (const y of [-46, -40]) L(SP(`M-8,${y} l4,1`), furd, 1.2); g.restore();
  F(SP('M-9,-30 L9,-30 L9,-27 L-9,-27Z'), '#3a2414'); V(E(0, -28.5, 1.8, 1.6), '#e8c040', 0, -28, 2, .7);
  bt(legB(3, -28, 14, 13, 3.8, 3.2, 2.8, o, 0, fur, .6), boot);
  g.save(); g.translate(3, -60); g.rotate(m === 3 ? -.1 : m === 4 ? -.26 : Math.sin(o.t * 2.4) * .05);
  V(PL([-8, -3, -8, -14, -2, -7]), fur, -6, -7, 5, 1.2); V(PL([3, -8, 8, -14, 9, -3]), fur, 6, -8, 5, 1.2); F(PL([-7, -5, -7, -11, -4, -7]), '#f4a8b0');
  const hd = E(1, 0, 9.4, 8.4); V(hd, fur, 1, 0, 10); for (const y of [-6, -4]) L(SP(`M-3,${y} l3,1.6 l3,-1.6`), furd, 1.1);
  V(E(5, 4, 5, 3.6), bel, 5, 4, 5, 1); F(SP('M7,1.6 L10,1.6 L8.6,3.4Z'), '#e86a8a');
  eyesX(o, fur, [[0, -1, 2.6, 1], [6.4, -1.2, 2.2, -1]], 'slit', '#9ad83a');
  mouthX(o, 7, 5.4, 4, 'smirk'); L(SP('M9,4 l7,-2 M9,4.6 l7,1 M9,5.2 l6,3'), '#fff', .7);
  g.save(); g.rotate(-.12); V(SP('M-14,-6 Q0,-12 16,-6 Q2,-2 -14,-6Z'), '#2a2a3a', 1, -6, 14, 1.4); V(SP('M-7,-7 Q-6,-16 2,-16 Q9,-16 9,-7Z'), '#2a2a3a', 1, -11, 9, 1.4); F(SP('M-7,-9 L9,-9 L9,-7 L-7,-7Z'), '#c8302a');
  const pw = Math.sin(o.t * 3) * 2; V(SP(`M-4,-12 Q-16,-22 ${-24 + pw},-14 Q-14,-12 -6,-8Z`), '#f4f2ec', -12, -13, 9, 1.1); g.restore();
  g.restore();
  const hp = lunge ? [16 + lunge * 6, -46] : up ? [0, -58] : [10, -36];
  armTo(5, -48, hp[0], hp[1], 8, 8, 2.6, 2.2, 2, fur, up ? -1 : 1);
  g.save(); g.translate(hp[0], hp[1]); g.rotate(lunge ? Math.PI / 2 : up ? -.7 : 2.4); L(SP('M0,0 L0,-26'), '#9aa0ac', 1.6); L(SP('M0,0 L0,-26'), '#eef3fb', .8); L(SP('M-3,0 Q0,4 3,0'), '#e8c040', 1.4); L(SP('M0,0 L0,4'), '#3a2414', 1.8); g.restore();
  V(E(hp[0], hp[1], 2.4, 2.4), fur, hp[0], hp[1], 2.4, 1);
  g.restore();
}

function biancaneveD(o) {                                       // Biancaneve: capelli neri a caschetto col fiocco rosso, pelle bianca come la neve, labbra rosse, corpetto blu con le maniche a sbuffo rosse e blu, gonna gialla, colletto alto bianco, mela rossa in mano, un uccellino azzurro sulla spalla
  const blue = '#2a4aa8', yel = '#f2d860', sk = '#fbeee4', hair = '#1a1424', u = o.u, m = o.mood, w = o.walking ? 1 : 0, thr = u < 0 ? -u : 0, cast = m === 2 || m === 3;
  const b = bobOf(o, 1.8), sw = (w ? Math.sin(o.ph) * 2.4 : 0) + Math.sin(o.t * 1.8);
  g.save(); g.translate(0, b);
  const shoe = f => V(E(f[0] + 2, f[1] - 1.4, 3.6, 1.8), '#e8d040', f[0] + 2, f[1] - 1.4, 3, 1);
  shoe(legB(-3, -36, 17, 17, 2.6, 2.2, 2, o, Math.PI, dk(sk, .08), .5));
  const hb = limb(-6, -72, 1.8 + Math.sin(o.t * 1.4) * .05, 10, -.4, 10, 2.4, 2, 1.8, dk(sk, .06)); V(E(hb[0], hb[1], 2, 2), dk(sk, .06), hb[0], hb[1], 2, .9);
  const sk2 = SP(`M-7,-58 Q-14,-34 ${-17 + sw},-8 L${17 + sw},-8 Q14,-34 7,-58Z`); V(sk2, yel, 0, -34, 30); g.save(); g.clip(sk2); for (const x of [-8, 0, 8]) L(SP(`M${x * .4},-56 Q${x},-30 ${x * 1.4 + sw},-8`), dk(yel, .2), 1.1); g.restore();
  shoe(legB(3, -36, 17, 17, 2.8, 2.4, 2.2, o, 0, sk, .5));
  const bod = SP('M-7,-74 Q0,-76 7,-74 L8,-58 L-8,-58Z'); V(bod, blue, 0, -66, 10, 1.6); L(SP('M0,-74 L0,-60'), '#d02a2a', 1.6);
  for (const s of [-1, 1]) { V(E(s * 7, -72, 4.4, 4), '#3a5ac8', s * 7, -72, 4, 1.2); L(SP(`M${s * 7 - 2},-75 l1,6 M${s * 7 + 1.4},-75 l-.6,6`), '#d02a2a', 1.2); }
  V(SP('M-9,-76 Q-12,-84 -6,-88 L-3,-78 L3,-78 L6,-88 Q12,-84 9,-76Z'), '#fafaf6', 0, -82, 8, 1.2);
  g.save(); g.translate(1, -88); g.rotate(m === 3 ? -.1 : m === 4 ? -.24 : Math.sin(o.t * 1.6) * .04);
  V(SP('M-9,6 Q-12,-10 0,-13 Q12,-13 11,-2 Q11,6 9,7 L8,-2 Q4,-8 -3,-7 Q-6,-2 -5,7Z'), hair, 0, -3, 12, 1.6);
  const face = SP('M-6,-5 Q-6,-11 1,-11 Q8,-11 8,-4 Q8,3 5,6 Q2,8 -1,7 Q-5,4 -6,-5Z'); V(face, sk, 1, -2, 11);
  V(SP('M-6,-6 Q-2,-12 4,-10 Q8,-10 9,-5 Q4,-9 0,-7 Q-3,-6 -6,-4Z'), hair, 1, -8, 8, 1.2);
  V(SP('M-4,-11 Q-8,-16 -11,-12 Q-8,-10 -4,-10 Q-2,-15 2,-15 Q2,-12 -3,-10Z'), '#d02a2a', -4, -12, 6, 1.1);
  F(E(-2.4, 2, 2, 1.2), 'rgba(240,110,130,.4)');
  eyesX(o, sk, [[.6, -2, 2.4, 1], [6.2, -2.2, 2, -1]], 'lashes', '#6a4a2a'); browsX(o, [[.6, -6, 5, 1], [6.2, -6.2, 4, -1]], hair, 1.2, 'arch');
  L(SP('M5.6,-.6 Q7.6,2 5.8,3'), dk(sk, .2), 1); mouthX(o, 3.4, 4.6, 4.4, 'smile', { lips: '#d02a3a' });
  g.restore();
  g.save(); g.translate(-8, -82 + Math.abs(Math.sin(o.t * 5)) * -1); const flap = Math.sin(o.t * 14) * .5;
  V(E(0, 0, 4, 3), '#4ab0e8', 0, 0, 4, 1); V(E(3, -2, 2.4, 2.2), '#4ab0e8', 3, -2, 2.4, .9); F(E(3.6, -2.4, .7, .7), INK); V(PL([5, -2, 7, -1.4, 5, -1]), '#f2b03a', 6, -1.6, 1.4, .5); V(SP(`M-1,-1 Q-5,${-5 + flap * 4} -6,-1Z`), '#2a8ac8', -3, -2, 3, .8); F(SP('M-4,0 L-7,2 L-4,1.6Z'), '#2a8ac8'); g.restore();
  const hp = thr ? [16 + thr * 4, -78] : cast ? [12, -86] : [11, -56];
  armTo(6, -72, hp[0], hp[1], 10, 10, 2.4, 2, 1.8, sk, cast ? -1 : 1);
  if (!thr) { if (cast) glowB(hp[0], hp[1] - 4, 14, 'rgba(160,255,170,.5)'); V(E(hp[0], hp[1] - 4, 4.4, 4.2), '#d8202a', hp[0], hp[1] - 4, 4.4, 1.2); L(SP(`M${hp[0]},${hp[1] - 8} l.6,-3`), '#5a3a1a', 1.2); V(E(hp[0] + 2, hp[1] - 10, 2, 1, -.5), '#4ab84a', hp[0] + 2, hp[1] - 10, 2, .6); F(E(hp[0] - 1.6, hp[1] - 5.6, 1.2, 1.4), 'rgba(255,255,255,.6)'); }
  V(E(hp[0], hp[1], 2, 2), sk, hp[0], hp[1], 2, .9);
  if (cast) for (let i = 0; i < 5; i++) { const k = (o.t + i / 5) % 1; g.save(); g.globalAlpha = 1 - k; F(SP(`M${-14 + i * 7},${-10 - k * 40} l1.4,-1.4 a1.4,1.4 0 0 1 2,2 l-3.4,3.4 l-3.4,-3.4 a1.4,1.4 0 0 1 2,-2Z`), '#f07a9a'); g.restore(); }
  g.restore();
}

function pinocchioD(o) {                                        // Pinocchio: burattino di legno con le giunture a pallina, calzoncini rossi, camicina gialla, colletto bianco, cappello a cono, guance dipinte; il naso si allunga quando colpisce
  const wood = '#e0a868', wd = dk(wood, .25), red = '#d0402a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, poke = u < 0 ? -u : 0, up = u > 0 ? u : 0;
  const b = w ? -Math.abs(Math.sin(o.ph)) * 3.6 : Math.sin(o.t * 3) * .6, jerk = w ? Math.sin(o.ph * 2) * .06 : 0;
  const shoe = f => V(SP(`M${f[0] - 3},${f[1] - 4} L${f[0] + 3},${f[1] - 4} Q${f[0] + 9},${f[1] - 3} ${f[0] + 9},${f[1] + 1} L${f[0] - 3},${f[1] + 1}Z`), '#5a3420', f[0] + 2, f[1] - 2, 6, 1.2);
  const ball = (x, y, r = 2.2) => V(E(x, y, r, r), wd, x, y, r, .9);
  g.save(); g.translate(0, b); g.rotate(jerk);
  { const f = legB(-3, -30, 14, 14, 2.4, 2.4, 2.4, o, Math.PI, wd, .7); shoe(f); }
  const hb = limb(-6, -54, 1.9 + (w ? Math.sin(o.ph) * .7 : 0), 9, -.2, 9, 2.2, 2.2, 2.2, wd); ball(hb[0], hb[1], 2.4);
  V(SP('M-8,-34 L8,-34 L9,-26 L-9,-26Z'), red, 0, -30, 9, 1.4); for (const s of [-1, 1]) L(SP(`M${s * 5},-56 L${s * 4},-34`), red, 2.2);
  const sh = SP('M-7,-56 Q0,-58 7,-56 L8,-34 L-8,-34Z'); V(sh, '#f2d040', 0, -45, 12, 1.4); V(SP('M-6,-57 L0,-52 L6,-57 L4,-59 L-4,-59Z'), '#fafaf6', 0, -56, 5, 1); for (const y of [-50, -44, -38]) V(E(1, y, 1.2, 1.2), red, 1, y, 1.2, .5);
  { const f = legB(3, -30, 14, 14, 2.4, 2.4, 2.4, o, 0, wood, .7); shoe(f); ball(3, -16 + (w ? 0 : 0), 0); }
  g.save(); g.translate(2, -66); g.rotate(m === 3 ? -.06 : m === 4 ? -.24 : Math.sin(o.t * 2.6) * .05);
  const face = E(1, 0, 8.6, 8.8); V(face, wood, 1, 0, 9); L(SP('M-4,6 Q0,8 4,6'), wd, .7); F(E(-3, 3, 2, 2), 'rgba(230,80,80,.6)'); F(E(6.4, 3, 1.6, 1.6), 'rgba(230,80,80,.6)');
  const nl = 9 + poke * 26 + (m === 3 ? 4 : 0); V(SP(`M6,0 L${6 + nl},-.4 Q${7 + nl},1 ${6 + nl},2 L6,3Z`), wood, 6 + nl / 2, 1, nl / 2, 1.2); if (poke > .5) { L(SP(`M${6 + nl * .6},-.4 l2,-5 M${6 + nl * .6 + 1},-3 l3,-1`), '#4a9a3a', 1.2); V(E(6 + nl * .6 + 4, -5, 2, 1.2, -.4), '#5ab84a', 6 + nl * .6 + 4, -5, 2, .6); }
  eyesX(o, wood, [[-1, -2.4, 2.4, 1], [5, -2.6, 2, -1]], 'round', '#3a6ab8'); browsX(o, [[-1, -6.2, 4, 1], [5, -6.4, 3.4, -1]], '#3a2414', 1.4, 'arch');
  mouthX(o, 3, 5.4, 4.4, 'grin');
  V(SP('M-9,-4 Q-10,-10 -6,-10 L4,-10 L-2,-30 Q-4,-24 -8,-14Z'), '#f4f2ec', -4, -14, 10, 1.4); V(E(-2, -30, 2.4, 2.4), red, -2, -30, 2.4, .8);
  V(SP('M-9,-4 Q-10,-10 -4,-11 L3,-10 Q-2,-8 -6,-3Z'), '#3a2414', -4, -7, 6, 1);
  g.restore();
  const hp = poke ? [12, -52] : up ? [8, -60] : [10, -40];
  armTo(5, -54, hp[0], hp[1], 9, 9, 2.2, 2.2, 2.2, wood, -1); ball(hp[0], hp[1], 2.6); ball(5, -54, 2.4);
  g.restore();
}

function merlinoD(o) {                                          // Mago Merlino: vecchio alto e curvo, tunica blu a stelle e lune, barba bianca lunghissima, cappello a punta storto, occhialini tondi, bastone col cristallo che si accende, il gufo sulla spalla
  const robe = '#2a4ab8', robe2 = '#1a2a7a', sk = '#f2d4c0', brd = '#f4f2ec', u = o.u, m = o.mood, w = o.walking ? 1 : 0, cast = m === 2 || m === 3 || u !== 0;
  const b = bobOf(o, 1.8), sw = (w ? Math.sin(o.ph) * 2.4 : 0) + Math.sin(o.t * 1.6);
  g.save(); g.translate(0, b);
  const hb = limb(-7, -84, 1.8 + Math.sin(o.t * 1.4) * .05, 13, -.4, 12, 3.2, 2.6, 2.2, robe2);
  const gp = SP(`M-9,-88 Q-14,-60 ${-19 + sw},-2 L${19 + sw},-2 Q14,-60 9,-88Z`); V(gp, robe, 0, -46, 44);
  g.save(); g.clip(gp); for (const [x, y, r] of [[-6, -70, 1.6], [6, -56, 2], [-10, -36, 1.8], [8, -24, 1.6], [-2, -14, 2.2], [10, -42, 1.4]]) F(SP(`M${x},${y - r * 2} L${x + r * .5},${y - r * .5} L${x + r * 2},${y} L${x + r * .5},${y + r * .5} L${x},${y + r * 2} L${x - r * .5},${y + r * .5} L${x - r * 2},${y} L${x - r * .5},${y - r * .5}Z`), '#f2d860');
  for (const [x, y] of [[0, -40], [-6, -26]]) { F(E(x, y, 3, 3), '#f2d860'); F(E(x + 1.4, y - 1, 2.6, 2.6), robe); } F(SP(`M${-22 + sw},-6 L${22 + sw},-6 L${22 + sw},-2 L${-22 + sw},-2Z`), '#f2d860'); g.restore();
  V(SP('M-10,-90 Q0,-94 10,-90 L11,-82 L-11,-82Z'), robe2, 0, -86, 10, 1.4);
  g.save(); g.translate(2, -100); g.rotate(m === 3 ? -.08 : m === 4 ? -.22 : Math.sin(o.t * 1.4) * .03);
  const face = SP('M-7,-6 Q-7,-13 1,-13 Q9,-13 9,-5 Q9,3 6,7 L-5,7 Q-7,2 -7,-6Z'); V(face, sk, 1, -3, 12);
  const bw = Math.sin(o.t * 1.8) * 1.6 + (w ? Math.sin(o.ph) * 2 : 0);
  const bd = SP(`M-8,-2 Q-3,3 2,2 Q8,3 11,-2 Q13,14 10,30 Q${8 + bw},44 ${5 + bw},54 Q${1 + bw},44 -1,36 Q-6,24 -8,-2Z`); V(bd, brd, 2, 22, 24, 1.6); g.save(); g.clip(bd); for (let i = 0; i < 5; i++) L(SP(`M${-6 + i * 3.4},4 Q${-4 + i * 3 + bw * .4},26 ${-2 + i * 2 + bw},50`), '#c8ccd8', .9); g.restore();
  V(SP('M-3,1 Q2,-1 4,1 Q7,-1 11,1 Q11,5 7,4 Q4,3 2,4 Q-2,5 -3,1Z'), brd, 4, 2, 7, 1.1);
  for (const x of [1, 7]) { L(E(x, -4, 2.8, 2.6), '#c8a050', 1.2); F(E(x, -4, 2.4, 2.2), 'rgba(220,240,255,.35)'); } L(SP('M3.8,-4 L4.2,-4'), '#c8a050', 1.2);
  eyesX(o, sk, [[1, -4, 1.8, 1], [7, -4.2, 1.6, -1]], 'beady'); browsX(o, [[1, -8, 5, 1], [7, -8.2, 4, -1]], brd, 2.2, 'bushy');
  V(SP('M6,-3 Q11,0 8,3 L6,2Z'), dk(sk, .06), 8, 0, 3, 1); if (m === 3) mouthX(o, 4, 4, 4, 'oh');
  const tip = Math.sin(o.t * 1.6) * 3; V(SP(`M-11,-9 Q0,-14 13,-9 Q8,-22 2,-34 Q${-6 + tip},-46 ${-14 + tip},-44 Q-6,-38 -6,-26 Q-8,-16 -11,-9Z`), robe, 0, -22, 18, 1.6); V(SP('M-13,-8 Q0,-12 15,-8 Q0,-4 -13,-8Z'), robe2, 1, -8, 14, 1.2);
  F(SP('M2,-24 L3,-21 L6,-21 L3.6,-19 L4.6,-16 L2,-18 L-.6,-16 L.4,-19 L-2,-21 L1,-21Z'), '#f2d860');
  g.restore();
  g.save(); g.translate(-10, -90); const hb2 = Math.sin(o.t * 2) * .1; g.rotate(hb2);
  V(E(0, -6, 6, 7), '#8a6a4a', 0, -6, 6, 1.2); V(E(1, -12, 5, 4.4), '#8a6a4a', 1, -12, 5, 1.1); V(PL([-3, -15, -4, -19, -1, -16]), '#8a6a4a', -2, -16, 2, .8); V(PL([4, -16, 5, -19, 6, -15]), '#8a6a4a', 5, -16, 2, .8);
  for (const x of [-1, 3.4]) { F(E(x, -12, 2, 2), '#fff0a0'); F(E(x, -12, 1, 1), INK); } V(PL([1, -10, 2.4, -10, 1.6, -8]), '#e8a83a', 1.6, -9, 1.4, .5); F(E(0, -4, 3.4, 4), '#c8a888'); g.restore();
  const ra = cast ? -1.4 : 1.2 - (w ? Math.sin(o.ph) * .15 : 0);
  const h = limb(8, -84, ra, 13, cast ? .3 : -.9, 12, 3.4, 2.8, 2.4, robe);
  g.save(); g.translate(h[0], h[1]); g.rotate(cast ? .3 : .06); L(SP('M0,30 L0,-36'), '#3a2414', 3.6); L(SP('M0,30 L0,-36'), '#9a6a3a', 2); L(SP('M0,-36 Q-6,-42 -3,-48 M0,-36 Q6,-42 3,-48'), '#7a5a3a', 2);
  if (cast) glowB(0, -44, 24, 'rgba(140,200,255,.7)'); V(SP('M0,-52 L4,-44 L0,-38 L-4,-44Z'), cast ? '#c8f0ff' : '#8ac8f0', 0, -45, 5, 1.2); g.restore();
  V(E(h[0], h[1], 2.6, 2.6), sk, h[0], h[1], 2.6, 1);
  if (m === 3) for (let i = 0; i < 6; i++) { const k = (o.t * 1.6 + i / 6) % 1, a = i * 1.05; F(E(h[0] + 8 + k * 40 + Math.cos(a) * 4, h[1] - 44 + Math.sin(a + o.t * 3) * 8, 1.6, 1.6), `rgba(200,230,255,${1 - k})`, '#8ac8ff'); }
  g.restore();
}

function aliceD(o) {                                            // Alice: capelli biondi lunghi col cerchietto nero, vestito giallo col grembiule bianco, calze a righe, scarpette nere; gioca col fenicottero da croquet come mazza; quando cresce diventa enorme
  const dr = '#f2c84a', sk = '#f8dcc4', hair = '#f6d870', u = o.u, m = o.mood, w = o.walking ? 1 : 0, swg = u < 0 ? -u : 0, up = u > 0 ? u : 0;
  const b = bobOf(o, 2), sw = (w ? Math.sin(o.ph) * 2 : 0) + Math.sin(o.t * 2) * .8;
  g.save(); g.translate(0, b);
  V(SP(`M-4,-80 Q-14,-72 -14,-54 Q-15,-44 ${-12 + sw * .3},-38 Q-8,-50 -6,-64Z`), hair, -10, -60, 12, 1.4);
  const sh = (f, col) => V(SP(`M${f[0] - 3},${f[1] - 3} L${f[0] + 5},${f[1] - 3} Q${f[0] + 7},${f[1] + 1} ${f[0] + 4},${f[1] + 1} L${f[0] - 3},${f[1] + 1}Z`), col, f[0] + 1, f[1] - 1, 4, 1);
  const stripes = (hx, off, col) => { const f = legB(hx, -34, 16, 16, 2.8, 2.4, 2.1, o, off, col, .6); return f; };
  const f1 = stripes(-3, Math.PI, '#e8e4f0'); sh(f1, '#1e1a2a');
  const hb = limb(-6, -68, 1.9 + Math.sin(o.t * 1.6) * .05 + (w ? Math.sin(o.ph) * .4 : 0), 10, -.3, 9, 2.4, 2, 1.8, dk(dr, .2)); V(E(hb[0], hb[1], 2, 2), dk(sk, .06), hb[0], hb[1], 2, .9);
  const dp = SP(`M-7,-70 Q0,-72 7,-70 L8,-56 Q14,-44 ${16 + sw},-32 L${-16 + sw},-32 Q-12,-44 -8,-56Z`); V(dp, dr, 0, -50, 24);
  V(SP(`M-5,-62 L5,-62 L${9 + sw},-34 L${-8 + sw},-34Z`), '#fafaf6', 0, -48, 12, 1.2); L(SP('M-5,-62 L-7,-70 M5,-62 L7,-70'), '#fafaf6', 2); F(SP(`M${-16 + sw},-33 L${16 + sw},-33 L${16 + sw},-31 L${-16 + sw},-31Z`), '#fafaf6');
  const f2 = stripes(3, 0, '#f4f2ec'); sh(f2, '#1e1a2a');
  for (const f of [f1, f2]) { const hx = f === f1 ? -3 : 3; for (let k = .55; k < 1; k += .14) { const x = hx + (f[0] - hx) * k, y = -34 + (f[1] + 34) * k; L(SP(`M${x - 2.4},${y} L${x + 2.4},${y}`), '#2a2a3a', 1.6); } }
  for (const s of [-1, 1]) V(E(s * 7, -68, 4, 3.4), lt(dr, .15), s * 7, -68, 4, 1.1);
  g.save(); g.translate(1, -82); g.rotate(m === 3 ? -.1 : m === 4 ? -.24 : Math.sin(o.t * 1.8) * .04);
  const face = SP('M-6,-5 Q-6,-12 1,-12 Q8,-12 8,-5 Q8,2 5,6 Q2,9 -1,8 Q-5,5 -6,-5Z'); V(face, sk, 1, -2, 11);
  V(SP('M-8,8 Q-11,-10 0,-14 Q10,-15 10,-6 Q6,-10 1,-9 Q-3,-10 -5,-5 Q-6,2 -5,8Z'), hair, 0, -5, 11, 1.4);
  L(SP('M-7,-9 Q1,-15 9,-9'), '#1e1a2a', 2.6);
  F(E(-2.4, 2, 2, 1.2), 'rgba(250,120,140,.4)');
  eyesX(o, sk, [[.6, -2.4, 2.8, 1], [6.2, -2.6, 2.3, -1]], 'round', '#3a8ad8'); browsX(o, [[.6, -6.6, 5, 1], [6.2, -6.8, 4, -1]], dk(hair, .35), 1.1, 'arch');
  L(SP('M5.6,-.6 Q7.6,2 5.8,3'), dk(sk, .2), 1); mouthX(o, 3.4, 5, 4.4, m === 2 ? 'pout' : 'smile');
  g.restore();
  const hp = swg ? [18, -46] : up ? [-2, -84] : [10, -50];
  armTo(6, -68, hp[0], hp[1], 10, 9, 2.4, 2, 1.8, dr, up ? -1 : 1);
  g.save(); g.translate(hp[0], hp[1]); g.rotate(swg ? 2.2 + swg * .5 : up ? -.6 : 2.9);
  const pk = '#f47aa0'; L(SP('M0,4 Q2,-14 0,-30'), dk(pk, .5), 4.4); L(SP('M0,4 Q2,-14 0,-30'), pk, 2.8); V(E(-1, 10, 4.6, 7), pk, -1, 10, 6, 1.2); L(SP('M-2,16 l-1,8 M1,16 l1,8'), '#e86a3a', 1);
  g.save(); g.translate(0, -32); V(E(0, 0, 3, 2.6), pk, 0, 0, 3, 1); V(SP('M2,-1 Q7,0 7,4 L4,4 Q4,1 2,1Z'), '#2a2a2a', 4, 1, 3, .8); F(E(-.6, -1, .7, .7), INK); g.restore(); g.restore();
  V(E(hp[0], hp[1], 2, 2), sk, hp[0], hp[1], 2, .9);
  if (swg > .4) { g.save(); g.globalAlpha = .6; L(SP(`M${hp[0] - 6},${hp[1] - 20} Q${hp[0] + 26},${hp[1] - 6} ${hp[0] + 20},${hp[1] + 26}`), '#ffffff', 3); g.restore(); F(E(hp[0] + 30, -4, 4, 4), '#d02a2a'); }
  g.restore();
}
Object.assign(DRAW, { peterpan: peterpanD, cappuccetto: cappuccettoD, robinhood: robinhoodD, gattostivali: gattostivaliD, biancaneve: biancaneveD, pinocchio: pinocchioD, merlino: merlinoD, alice: aliceD });
