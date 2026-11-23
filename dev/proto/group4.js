// ---------- il corvo rifatto (Cornacchia e il corvo dello Spaventapasseri) ----------
function crowD(o, op = {}) {
  const bk = '#2a2638', bk2 = '#3a3450', sheen = 'rgba(120,150,255,.38)', u = o.u, perch = op.perch, f = Math.sin(o.t * 11);
  const feather = (x, y, a, l, w, col) => { g.save(); g.translate(x, y); g.rotate(a); const p = SP(`M0,${-w} Q${l * .6},${-w * 1.1} ${l},0 Q${l * .6},${w * 1.1} 0,${w}Z`); V(p, col, l * .4, 0, l * .6, 1.6); L(SP(`M1,0 L${l * .85},0`), lt(col, .18), .8); g.restore(); };
  const wing = (open, col) => { const spread = perch ? .1 : .55 + open * .35, base = perch ? 2.9 : -2.2 - open * .9;
    for (let i = 4; i >= 0; i--) feather(0, 0, base + (i - 2) * spread * .32, (perch ? 20 : 30) - i * 2.6, 4.2, i % 2 ? col : dk(col, .12));
    V(SP(perch ? 'M-2,-5 Q-16,-6 -18,2 Q-8,6 2,4Z' : 'M-3,-4 Q-12,-14 -16,-8 Q-10,2 3,4Z'), lt(col, .06), -6, -2, 10, 1.6); };
  g.save();
  if (!perch) { g.translate(u < 0 ? -u * 10 : 0, -54 + Math.sin(o.t * 2.2) * 5 + (u < 0 ? -u * 26 : 0)); g.rotate((u < 0 ? .45 * -u : -.12 * u) + .04); }
  else g.translate(0, -8);
  if (!perch) { g.save(); g.translate(-2, -4); g.rotate(f * .25); wing(Math.max(0, f), dk(bk, .25)); g.restore(); }
  for (let i = 0; i < 5; i++) feather(-11, 2, Math.PI + (i - 2) * (perch ? .12 : .2) + (perch ? .5 : 0) + Math.sin(o.t * 3 + i) * .03, 15 - Math.abs(i - 2) * 1.4, 3.4, i % 2 ? bk : bk2);
  if (!perch) for (const x of [-2, 4]) { const ex = x + (u < 0 ? 6 : -2), ey = 13; L(SP(`M${x},7 L${ex},${ey}`), '#4a4650', 1.8); for (const a of [-.6, 0, .6]) L(SP(`M${ex},${ey} l${Math.cos(a + 1.2) * 4},${Math.sin(a + 1.2) * 4}`), '#4a4650', 1.4); }
  else for (const x of [-1, 4]) { L(SP(`M${x},7 L${x},12`), '#4a4650', 2); L(SP(`M${x - 3},13 L${x + 4},13`), '#4a4650', 1.6); }
  const body = SP('M-14,2 Q-12,-11 2,-12 Q14,-10 16,-1 Q14,9 2,10 Q-9,10 -14,2Z'); V(body, bk, 0, -1, 16);
  g.save(); g.clip(body); F(E(-2, -7, 10, 3), sheen); for (let i = 0; i < 4; i++) L(SP(`M${4 + i * 3},2 q1.6,2 3,0`), lt(bk, .2), 1); g.restore();
  g.save(); g.translate(13, -9); g.rotate(Math.sin(o.t * 3) * .08 + (o.mood === 3 ? -.25 : o.mood === 4 ? .3 : 0) + (perch ? Math.sin(o.t * 1.3) * .2 : 0));
  for (const [x, a] of [[-4, -1.9], [-1, -1.6], [2, -1.35]]) feather(x, -7, a, 6, 1.6, bk);
  V(E(0, 0, 9.4, 8.8), bk, 0, 0, 9); F(E(-3, -4, 4.6, 1.8), sheen);
  const op2 = o.mood === 3 ? .45 : o.mood === 2 ? .12 : 0;
  g.save(); g.translate(6, 1); g.rotate(op2); V(SP('M0,0 L14,1 Q10,4 1,4Z'), '#2e2e38', 6, 2, 7, 1.4); g.restore();
  if (op2 > .2) F(SP('M6,1 L18,1 L8,5Z'), '#c8304a');
  V(SP('M5,-3 Q15,-4 22,1 Q14,2 6,2Z'), '#3a3a46', 13, -1, 8, 1.6); F(SP('M8,-2.4 Q14,-3 18,-.6 L9,-1Z'), 'rgba(255,255,255,.25)');
  if (op.coin && o.mood !== 3) { V(E(20, 3, 4, 4), '#f2c14e', 20, 3, 4, 1.4); F(E(19.4, 2.2, 1.4, 1.4), '#fff6c0'); L(SP('M19,4.4 L21.4,1.8'), '#b8802a', .9); }
  eyes(o, bk, [[1, -2, 3.3, 1], [6.6, -2.4, 2.5, -1]], '#8a6cff'); brows(o, [[1, -6.4, 6, 1], [6.6, -6.2, 4.4, -1]], '#000', 2.2);
  g.restore();
  if (!perch) { g.save(); g.translate(-2, -4); g.rotate(-.5 - f * .5); wing(Math.max(0, -f) + .4, bk); g.restore(); }
  else { g.save(); g.translate(2, -4); g.rotate(Math.sin(o.t * .8) > .9 ? -.8 : 0); wing(0, bk2); g.restore(); }
  g.restore();
}
// ---------- gruppo 4: gli ultimi rari e i primi epici ----------
function reginaD(o) {                                           // la Regina di Cuori: tonda, abito a cuori, corona, scettro col cuore, urla sempre
  const dr = '#c8202e', blk = '#1e1a28', yl = '#f2c14e', sk = '#f4d8c0', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3), sw = Math.sin(o.ph);
  const heart = (x, y, r, c) => F(SP(`M${x},${y + r * .9} C${x - r * 1.6},${y - r * .2} ${x - r * .8},${y - r * 1.4} ${x},${y - r * .5} C${x + r * .8},${y - r * 1.4} ${x + r * 1.6},${y - r * .2} ${x},${y + r * .9}Z`), c);
  for (const x of [-5, 6]) V(E(x + (w ? Math.sin(o.ph + (x > 0 ? 0 : Math.PI)) * 4 : 0) + 3, -1, 5, 2.4), blk, x, -1, 5, 1.4);
  g.save(); g.translate(0, b); g.rotate((w ? sw * .05 : 0) + (u > 0 ? -.08 * u : .12 * -u));
  arm(-10, -56, 10, 9, 5, 1.6 + sw * .4 * w, -.5, dk(sk, .2));
  const sk1 = SP('M-12,-50 Q-28,-24 -26,-2 Q0,4 26,-2 Q28,-24 12,-50Z'); V(sk1, dr, 0, -26, 28);
  g.save(); g.clip(sk1); F(SP('M-4,-50 L4,-50 L10,0 L-10,0Z'), blk); for (const [x, y] of [[-16, -10], [-10, -28], [16, -12], [10, -30], [0, -10]]) heart(x, y, 3.4, x === 0 ? dr : yl); g.restore();
  V(E(0, -56, 13, 11), dr, 0, -56, 13); heart(0, -56, 4, yl);
  V(SP('M-14,-66 Q0,-60 14,-66 L18,-74 Q0,-66 -18,-74Z'), '#f4f0ea', 0, -68, 16, 1.6);
  g.save(); g.translate(1, -80); g.rotate(Math.sin(o.t * 2) * .05 + (o.mood === 3 ? -.14 : o.mood === 4 ? .22 : 0));
  V(SP('M-12,-4 Q-14,-20 0,-22 Q14,-20 12,-4Z'), blk, 0, -12, 14); V(E(0, -24, 7, 6), blk, 0, -24, 7, 1.6);
  V(E(1, 0, 11, 11), sk, 1, 0, 11);
  F(E(-5, 5, 3, 2), 'rgba(240,80,100,.4)'); F(E(8, 5, 2.4, 1.6), 'rgba(240,80,100,.4)');
  eyes(o, sk, [[-2, -2, 3.4, 1], [6, -2.2, 2.8, -1]], '#2a6ac8'); brows(o, [[-2, -7.4, 6.4, 1], [6, -7.2, 5, -1]], blk, 2.4);
  F(PL([-6, -4, -7, -6, -4, -5]), '#4a7ad8');
  mouth(o, 2, 6, o.mood === 3 ? 11 : 7, { lips: '#c8202e' });
  V(SP('M-9,-10 L-10,-20 L-5,-15 L0,-23 L5,-15 L10,-20 L9,-10Z'), yl, 0, -15, 10, 1.6); heart(0, -16, 2, dr);
  g.restore();
  const h = arm(9, -56, 10, 9, 5, .6 - 2 * u, -.5, sk);
  atHand(h, -1.1, () => { seg(0, 10, 0, -26, 2.4, yl); heart(0, -31, 5.4, dr); L(SP('M0,-36 L0,-36'), '#000', 0); });
  g.restore();
}
function cartaD(o, v) {                                         // carta-soldato: piatta, coi cuori, picca in mano
  const u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3), sk = '#f4d8c0', red = '#c8202e';
  const heart = (x, y, r) => F(SP(`M${x},${y + r * .9} C${x - r * 1.6},${y - r * .2} ${x - r * .8},${y - r * 1.4} ${x},${y - r * .5} C${x + r * .8},${y - r * 1.4} ${x + r * 1.6},${y - r * .2} ${x},${y + r * .9}Z`), red);
  leg(-4, -30, 13, 13, 3.4, o, Math.PI, dk(red, .3), '#1e1a28', .7); leg(4, -30, 13, 13, 3.4, o, 0, red, '#1e1a28', .7);
  g.save(); g.translate(0, b); g.rotate((w ? Math.sin(o.ph) * .05 : 0) + (u > 0 ? -.08 * u : .12 * -u));
  arm(-12, -60, 9, 9, 3, 1.7, -.4, dk(red, .3));
  const card = SP('M-13,-70 Q-13,-73 -10,-73 L10,-73 Q13,-73 13,-70 L13,-30 Q13,-27 10,-27 L-10,-27 Q-13,-27 -13,-30Z'); V(card, '#fbf8f2', 0, -50, 22, 2);
  L(SP('M-10,-70 L10,-70 L10,-30 L-10,-30Z'), red, 1); g.save(); g.fillStyle = red; g.font = 'bold 7px sans-serif'; g.fillText(String(v + 2), -9, -63); g.restore();
  for (let i = 0; i < v + 2; i++) heart(i % 2 ? 4 : -4, -62 + Math.floor(i / 2) * 12 + (i % 2 ? 6 : 0), 3);
  g.save(); g.translate(1, -82); g.rotate(Math.sin(o.t * 2.4 + v) * .06 + (o.mood === 4 ? .22 : 0));
  V(E(0, 0, 8, 8.4), sk, 0, 0, 8);
  eyes(o, sk, [[-1, -1, 2.6, 1], [5, -1.2, 2.1, -1]], '#4a3020'); brows(o, [[-1, -4.8, 4.4, 1], [5, -4.6, 3.4, -1]], '#4a3020', 1.4); mouth(o, 2, 4, 4.6);
  V(SP('M-8,-3 Q-9,-12 0,-12 Q9,-12 8,-3Z'), red, 0, -8, 9, 1.6); heart(0, -8, 2.4);
  g.restore();
  const h = arm(12, -60, 9, 9, 3, .9 - 1.6 * u, -.6 + u * .4, red);
  atHand(h, -1.2 + (u < 0 ? .8 : 0), () => { seg(0, 12, 0, -34, 1.8, '#6a4426'); V(SP('M0,-46 C-6,-40 -5,-34 0,-34 C5,-34 6,-40 0,-46Z'), '#c9ccd6', 0, -40, 6, 1.4); });
  g.restore();
}
function stregoneD(o) {                                         // lo Stregone di Aladino: tunica scura, turbante, barba a punta, lampada magica
  const tu = '#2a1e3a', tu2 = '#8a1a2a', sk = '#c8a088', gold = '#f2c14e', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 2.4), sw = Math.sin(o.ph) * (w ? 4 : 0) + Math.sin(o.t * 2) * 1.6;
  g.save(); g.translate(0, b);
  for (const x of [-4, 6]) V(SP(`M${x - 2},0 L${x + 8},0 Q${x + 10},-3 ${x + 6},-4 L${x},-4Z`), '#1a1420', x + 3, -2, 5, 1.4);
  const robe = SP(`M-9,-80 Q-16,-40 ${-17 + sw},-3 L${17 + sw},-3 Q14,-40 9,-80Z`); V(robe, tu, 0, -40, 30);
  g.save(); g.clip(robe); F(SP(`M-2,-80 L2,-80 L${8 + sw},-3 L${-6 + sw},-3Z`), tu2); L(SP(`M${-17 + sw},-8 L${17 + sw},-8`), gold, 2); g.restore();
  arm(-6, -76, 12, 11, 4, 1.65 + Math.sin(o.t * 1.6) * .06, -.6, dk(tu, .2));
  V(SP('M-14,-80 Q-24,-92 -18,-104 Q-10,-94 -6,-84Z'), tu2, -14, -92, 10, 1.6); V(SP('M14,-80 Q24,-92 18,-104 Q10,-94 6,-84Z'), tu2, 14, -92, 10, 1.6);
  F(SP('M-6,-60 L6,-60 L6,-56 L-6,-56Z'), gold);
  g.save(); g.translate(2, -92); g.rotate(Math.sin(o.t * 1.5) * .04 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0) + (w ? Math.sin(o.ph) * .03 : 0));
  V(SP('M-7,-4 Q-8,-14 1,-14 Q9,-13 9,-3 Q9,8 2,11 Q-6,9 -7,-4Z'), sk, 1, -2, 11);
  V(SP(`M-3,6 Q3,10 8,6 Q8,${18 + Math.sin(o.t * 3)} ${4 + Math.sin(o.t * 2)},${26} Q1,16 -3,6Z`), '#14101a', 3, 14, 8, 1.6);
  eyes(o, sk, [[0, -3, 2.8, 1], [6.4, -3.2, 2.3, -1]], '#e8c03a'); brows(o, [[0, -7.6, 5.6, 1], [6.4, -7.4, 4.6, -1]], '#14101a', 2);
  L(SP('M-3,-1 l-2,1'), '#14101a', .9); V(PL([6, -3, 12, 3, 6, 3]), sk, 8, 1, 4, 1.2);
  L(SP('M2,6 Q5,4 8,6'), '#14101a', 1.6); mouth(o, 4, 6.6, 5);
  V(SP('M-10,-6 Q-12,-18 -2,-22 Q10,-24 13,-12 Q14,-6 10,-5 Q0,-9 -10,-6Z'), tu2, 1, -13, 14); L(SP('M-8,-9 Q2,-14 12,-9 M-8,-14 Q2,-19 12,-14'), dk(tu2, .35), 1.2);
  V(E(2, -11, 2.6, 3.2), '#e83a5a', 2, -11, 3, 1.2); V(SP('M2,-14 Q-2,-26 6,-32 Q4,-22 4,-14Z'), '#2a1e3a', 3, -22, 6, 1.4);
  g.restore();
  const h = arm(6, -76, 12, 11, 4, .4 - 1.4 * u, -.4, tu);
  g.save(); g.translate(h[0] + 3, h[1] - 1);
  V(SP('M-7,0 Q-6,-6 2,-6 Q8,-6 10,-2 L18,-6 Q16,-2 12,2 Q4,5 -4,4 Q-8,3 -7,0Z'), gold, 3, -1, 10, 1.6); V(E(0, -7, 3, 1.8), gold, 0, -7, 3, 1.2);
  if (u > 0 || o.mood === 3) { const k = Math.max(u, o.mood === 3 ? .8 : 0); glowB(18, -10, 14 * k + 4, 'rgba(120,220,255,.7)'); F(SP(`M17,-6 Q${22 + Math.sin(o.t * 6) * 3},-14 18,-22 Q${26},-18 24,-28`), 'rgba(160,230,255,.0)'); L(SP(`M17,-6 Q${22 + Math.sin(o.t * 6) * 3},-14 18,-22`), 'rgba(160,230,255,.8)', 3 * k); }
  g.restore(); V(E(h[0], h[1], 2.8, 2.8), sk, h[0], h[1], 3, 1.2);
  g.restore();
}
function gothelD(o) {                                           // Madre Gothel: mantello rosso scuro, viso pallido, ricci neri, la treccia d'oro come frusta
  const dr = '#6a1a2a', dr2 = '#8a2a3a', sk = '#f0e2d8', hair = '#1e1626', gold = '#f2c45a', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 2.4), sw = Math.sin(o.ph) * (w ? 4 : 0) + Math.sin(o.t * 2) * 1.6;
  g.save(); g.translate(0, b);
  const cape = SP(`M-8,-82 Q-24,-50 ${-24 + sw * 1.3},-2 L${8 + sw},-2 Q6,-50 8,-82Z`); V(cape, dk(dr, .25), -8, -40, 30);
  for (const x of [-4, 6]) V(E(x + 3 + (w ? Math.sin(o.ph + (x > 0 ? 0 : Math.PI)) * 4 : 0), -1, 5, 2.4), '#1a1420', x, -1, 5, 1.4);
  const robe = SP(`M-8,-78 Q-13,-40 ${-15 + sw},-3 L${16 + sw},-3 Q13,-40 8,-78Z`); V(robe, dr, 0, -40, 28);
  g.save(); g.clip(robe); for (const x of [-6, 2, 9]) L(SP(`M${x * .4},-78 Q${x},-40 ${x * 1.4 + sw},0`), dk(dr, .35), 1.4); g.restore();
  F(SP('M-8,-56 L8,-56 L9,-52 L-9,-52Z'), '#1a1420');
  arm(-6, -76, 12, 11, 4, 1.6 + Math.sin(o.t * 1.6) * .06, -.6, dk(dr, .25));
  g.save(); g.translate(2, -90); g.rotate(Math.sin(o.t * 1.5) * .05 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0) + (w ? Math.sin(o.ph) * .03 : 0));
  V(SP('M-14,6 Q-20,-10 -10,-18 Q0,-24 10,-18 Q16,-10 12,0 Q8,-12 -2,-10 Q-8,-4 -6,14 Q-12,12 -14,6Z'), hair, -2, -6, 18);
  for (const [x, y, r] of [[-14, -8, 5], [-12, 4, 5], [-6, -16, 5], [4, -18, 5], [11, -12, 4.4], [-10, 12, 4.4]]) V(E(x, y, r, r), hair, x, y, r, 1.4);
  V(SP('M-7,-4 Q-8,-14 1,-14 Q9,-13 9,-3 Q9,8 2,11 Q-6,9 -7,-4Z'), sk, 1, -2, 11);
  eyes(o, sk, [[0, -3, 3, 1], [6.4, -3.2, 2.4, -1]], '#5a3a8a'); brows(o, [[0, -7.6, 5.8, 1], [6.4, -7.4, 4.8, -1]], hair, 1.8);
  F(E(0, -4.4, 3.6, 1.6), 'rgba(110,40,90,.3)'); V(PL([6, -3, 11, 3, 6, 3]), sk, 8, 1, 4, 1.2);
  mouth(o, 3.6, 6.6, 5.6, { lips: '#8a1a2a' });
  g.restore();
  const lash = o.atk >= 0 && o.atk < .8 ? Math.max(0, swing(o.atk) < 0 ? -swing(o.atk) * 2.4 : 0) : 0, h = arm(6, -76, 12, 11, 4, .5 - 1.8 * u + lash * .5, -.4, dr);
  const n = 12, L0 = 26 + lash * 26; let px = h[0], py = h[1];
  for (let i = 0; i < n; i++) { const k = i / n, a = h[2] + (lash ? -.3 : 1.2 + Math.sin(o.t * 3 + i * .5) * .25 * k) - (lash ? 0 : k * .8), nx = px + Math.cos(a) * L0 / n, ny = py + Math.sin(a) * L0 / n;
    V(E(nx, ny, 3.4 - k * 1.2, 2.6 - k * .8, a), i % 2 ? gold : dk(gold, .12), nx, ny, 3, 1.1); px = nx; py = ny; }
  V(E(px, py, 2.4, 3.4), '#e8384a', px, py, 3, 1);
  V(E(h[0], h[1], 2.8, 2.8), sk, h[0], h[1], 3, 1.2);
  g.restore();
}
function sirenaD(o) {                                           // la Sirena: galleggia su un'onda, coda a squame sfumate, capelli lunghi, canta
  const sk = '#f2d2bc', hair = '#7a3aa8', u = o.u, fl = Math.sin(o.t * 2.2) * 3, sing = o.mood === 3 || o.mood === 2;
  const wave = SP(`M-28,0 Q-20,${-10 + Math.sin(o.t * 3) * 3} -10,-6 Q0,${-14 + Math.sin(o.t * 3 + 1) * 3} 10,-6 Q20,${-12 + Math.sin(o.t * 3 + 2) * 3} 28,0Z`);
  V(wave, '#3aa0d8', 0, -6, 28, 1.8); F(SP(`M-24,-2 Q-14,${-8 + Math.sin(o.t * 3) * 2} -6,-5`), 'rgba(0,0,0,0)'); L(SP(`M-22,-3 Q-14,${-9 + Math.sin(o.t * 3) * 2} -6,-6 M4,-7 Q12,${-12 + Math.sin(o.t * 3 + 2) * 2} 20,-4`), '#e8f8ff', 2);
  g.save(); g.translate(0, -10 + fl); g.rotate(-.04 + (u > 0 ? -.08 * u : .1 * -u));
  const tw = Math.sin(o.t * 3) * 6;
  const tail = SP(`M-8,-40 Q-14,-20 -8,-6 Q${-4 + tw * .3},2 ${-18 + tw},0 L${-26 + tw},-8 L${-24 + tw},6 Q${-10 + tw * .5},10 0,2 Q8,-14 8,-40Z`);
  const tg = g.createLinearGradient(0, -40, 0, 6); tg.addColorStop(0, '#3ac0a8'); tg.addColorStop(1, '#7a4ab8'); L(tail, dk('#3a6a9a', .6), 4.4); g.fillStyle = tg; g.fill(tail);
  g.save(); g.clip(tail); for (let y = -38; y < 6; y += 5) for (let x = -12; x < 10; x += 5) L(SP(`M${x + (y % 10 ? 2.5 : 0) - 2},${y} q2,3 4,0`), 'rgba(255,255,255,.35)', .8); g.restore();
  V(SP(`M-24,-2 Q-36,-12 -34,${-2 + tw * .2} Q-30,4 -22,4Z`), '#9a6ad8', -28, -2, 6, 1.4);
  const hs = Math.sin(o.t * 2) * 4;
  V(SP(`M-6,-66 Q-20,-58 ${-22 + hs},-36 Q${-20 + hs},-24 ${-12 + hs * .6},-20 Q-12,-40 -4,-52Z`), hair, -12, -44, 18);
  V(SP('M-8,-58 Q0,-62 8,-58 L8,-40 Q0,-38 -8,-40Z'), sk, 0, -50, 12);
  for (const x of [-3.6, 3.6]) V(E(x, -52, 4, 3.4), '#e87aa8', x, -52, 4, 1.2);
  arm(-6, -56, 10, 9, 3.4, 1.9, -.9, dk(sk, .15));
  g.save(); g.translate(1, -70); g.rotate(Math.sin(o.t * 1.6) * .05 - (sing ? .1 : 0) + (o.mood === 4 ? .22 : 0));
  V(E(1, 0, 9, 9.4), sk, 1, 0, 9);
  V(SP('M-9,4 Q-12,-12 0,-12 Q11,-12 10,-2 Q4,-8 -2,-6 Q-6,0 -5,8Z'), hair, -1, -4, 11);
  eyes(o, sk, [[0, -1, 2.8, 1], [6, -1.2, 2.3, -1]], '#2aa0a8'); brows(o, [[0, -5, 4.8, 1], [6, -4.8, 3.8, -1]], hair, 1.4);
  F(E(-3, 4, 2.2, 1.4), 'rgba(240,110,130,.4)');
  if (sing) { const m = SP('M2,5 Q4.4,3 6.6,5 Q7,9 4.4,9.6 Q2,9 2,5Z'); L(m, '#1b1238', 1.8); F(m, '#7a1a3a'); } else mouth(o, 4, 6, 5, { lips: '#d8385a' });
  V(E(-6, -8, 2.6, 2), '#ff8ab0', -6, -8, 2, 1);
  g.restore();
  const h = arm(6, -56, 10, 9, 3.4, -.3 - u * .8, -.4, sk);
  if (sing) for (let i = 0; i < 3; i++) { const k = (o.t * .8 + i / 3) % 1, x = h[0] + 4 + k * 20, y = h[1] - 6 - k * 26 + Math.sin(k * 9) * 3; g.save(); g.globalAlpha = 1 - k; L(SP(`M${x},${y} L${x},${y - 8} L${x + 5},${y - 10}`), '#1b1238', 1.6); F(E(x - 2, y, 2.6, 2), '#1b1238'); g.restore(); }
  g.restore();
}
function ladroneD(o, v, capo) {                                 // i Ladroni di Ali Babà: turbante, gilet, pantaloni a sbuffo, scimitarra, sacco
  const sk = '#c8946a', tur = ['#e8e0d0', '#d8443a', '#3a8ac8', '#e8b440'][v], vest = capo ? '#7a1a2a' : ['#4a3a6a', '#3a6a4a', '#6a4a2a', '#4a3a6a'][v], pant = capo ? '#f2e8d0' : '#e8d8b0';
  const u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3), sw = Math.sin(o.ph);
  g.save(); g.translate(0, b); arm(-7, -54, 10, 9, 4.4, 1.7 + sw * .5 * w, -.5, dk(sk, .25));
  if (!capo) { const bx = -12, by = -40; V(E(bx, by, 8, 9), '#b8946a', bx, by, 9, 1.6); L(SP(`M${bx - 3},${by - 8} Q${bx},${by - 5} ${bx + 3},${by - 8}`), '#6a4a2a', 1.6); } g.restore();
  for (const [x, off, c] of [[-4, Math.PI, dk(pant, .2)], [4, 0, pant]]) { const a = w ? Math.sin(o.ph + off) * .5 : 0; V(E(x + Math.sin(a) * 6, -18, 7, 9), c, x, -18, 8, 1.8); leg(x + Math.sin(a) * 6, -12, 5, 6, 3.6, o, off, sk, '#3a2a1a', .3); }
  g.save(); g.translate(0, b); g.rotate(.04 + w * .08 + (u > 0 ? -.1 * u : .14 * -u)); if (capo) g.scale(1.12, 1.12);
  V(E(0, -40, 11, 15), sk, 0, -40, 15); 
  V(SP('M-11,-54 Q-6,-56 -3,-54 L-5,-28 L-12,-30 Q-14,-42 -11,-54Z'), vest, -8, -42, 12, 1.6); V(SP('M11,-54 Q6,-56 3,-54 L5,-28 L12,-30 Q14,-42 11,-54Z'), vest, 8, -42, 12, 1.6);
  F(SP('M-12,-30 L12,-30 L12,-25 L-12,-25Z'), capo ? '#f2c14e' : '#c8302a');
  g.save(); g.translate(2, -62); g.rotate(Math.sin(o.t * 2.2 + v) * .06 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0) + (w ? sw * .05 : 0));
  V(E(0, 0, 9, 9), sk, 0, 0, 9);
  eyes(o, sk, [[-1, -1, 2.8, 1], [5.4, -1.2, 2.3, -1]], '#3a2010'); brows(o, [[-1, -5.4, 5.4, 1], [5.4, -5.2, 4.4, -1]], '#1a1010', 2.2);
  V(E(7, 2, 2.4, 2.2), dk(sk, .08), 7, 2, 2, 1);
  if (capo) { V(SP('M-2,5 Q4,2 10,5 Q14,9 12,11 Q8,6 4,7 Q0,6 -4,11 Q-6,8 -2,5Z'), '#1a1010', 4, 7, 8, 1.4); mouth(o, 4, 9.4, 5); }
  else { mouth(o, 3, 6, 5, { fang: v % 2 }); F(E(-2, 3, 3, 2), 'rgba(20,10,10,.15)'); }
  V(SP('M-10,-1 Q-12,-14 0,-15 Q12,-14 11,-1 Q0,-6 -10,-1Z'), tur, 0, -8, 12); L(SP('M-9,-6 Q1,-11 11,-5'), dk(tur, .3), 1.2);
  if (capo) { V(E(1, -9, 2.6, 3), '#3ac0a8', 1, -9, 3, 1); V(SP('M1,-11 Q-3,-22 3,-26 Q2,-18 3,-11Z'), '#f4f0ea', 2, -18, 5, 1.2); }
  g.restore();
  const h = arm(7, -54, 10, 9, 4.4, .8 - 2 * u, -.5, sk);
  atHand(h, -.9, () => { V(SP('M-4,0 L4,0 L4,3 L-4,3Z'), '#f2c14e', 0, 1, 4, 1); seg(0, 3, 0, 8, 2, '#5a3a20'); V(SP('M-2,0 Q-3,-14 2,-24 Q10,-30 12,-26 Q5,-22 4,-12 L2,0Z'), '#dfe6f2', 3, -14, 14, 1.6); L(SP('M0,-2 Q0,-14 4,-22'), 'rgba(120,140,180,.6)', .9); });
  V(E(h[0], h[1], 3, 3), sk, h[0], h[1], 3, 1.2);
  g.restore();
}
function lumaconeD(o) {                                         // il Lumacone Gigante: viscido, antenne con gli occhi, scia di bava
  const sk = '#b8c04a', sk2 = '#8a9a32', u = o.u, w = o.walking ? 1 : 0, p = o.t * (w ? 3 : 1.2);
  g.save(); g.globalAlpha = .5; const tr = g.createLinearGradient(-70, 0, 0, 0); tr.addColorStop(0, 'rgba(200,240,170,0)'); tr.addColorStop(1, 'rgba(210,250,180,.9)'); g.fillStyle = tr; g.beginPath(); g.ellipse(-30, 1, 40, 4, 0, 0, 7); g.fill(); g.restore();
  for (let i = 0; i < 4; i++) F(E(-44 + i * 12, 1, 2.4, 1), 'rgba(255,255,255,.6)');
  const lunge = u < 0 ? -u * 10 : -u * 3, rear = u > 0 ? u : 0; g.save(); g.translate(lunge, 0);
  const bump = k => Math.sin(p * 2 - k * 4) * 2;
  const body = SP(`M-34,0 Q-36,${-10 + bump(0)} -24,${-14 + bump(.2)} Q-10,${-20 + bump(.4)} 6,${-22 + bump(.6) - rear * 6} Q20,${-30 - rear * 10} 26,${-22 - rear * 10} Q30,-8 22,0Z`); V(body, sk, -2, -12, 30);
  g.save(); g.clip(body); F(E(-2, -2, 30, 5), lt(sk, .3)); for (const [x, y, r] of [[-20, -10, 3], [-6, -16, 3.6], [8, -18, 2.6], [-14, -14, 2]]) { F(E(x, y + bump(.3), r, r * .7), sk2); F(E(x - r * .3, y - r * .3 + bump(.3), r * .3, r * .2), 'rgba(255,255,255,.5)'); } F(E(-6, -16, 22, 2.4), 'rgba(255,255,255,.3)'); g.restore();
  for (let i = 0; i < 2; i++) { const k = (o.t * .6 + i * .5) % 1; g.save(); g.globalAlpha = 1 - k; F(E(-10 + i * 18, -4 + k * 6, 1.6, 2.4 + k * 2), 'rgba(220,255,190,.9)'); g.restore(); }
  g.save(); g.translate(20, -22 - rear * 10); g.rotate(Math.sin(o.t * 2) * .06 + (o.mood === 4 ? .2 : 0));
  for (const [sx, sl, d] of [[-2, 20, 1], [6, 22, -1]]) { const a = -1.75 + d * .25 + Math.sin(o.t * 3 + sx) * .15 + (o.mood === 4 ? .6 : 0), ex = sx + Math.cos(a) * sl, ey = Math.sin(a) * sl;
    L(SP(`M${sx},0 Q${sx + Math.cos(a) * sl * .5 + 2},${ey * .5} ${ex},${ey}`), dk(sk, .7), 6); L(SP(`M${sx},0 Q${sx + Math.cos(a) * sl * .5 + 2},${ey * .5} ${ex},${ey}`), sk, 3.4);
    eyes(o, sk, [[ex, ey - 2, d > 0 ? 4.4 : 3.8, d]], '#c8302a'); brows(o, [[ex, ey - 8.6, 6, d]], '#3a4a10', 2); }
  for (const x of [8, 12]) L(SP(`M${x},6 l3,4`), dk(sk, .4), 2);
  mouth(o, 6, 6, 10);
  g.restore(); g.restore();
}
function fantasmaD(o) {                                         // il Fantasma: lenzuolo che svolazza, occhi neri, catena con la palla
  const sh = '#dcd8f4', u = o.u, fl = Math.sin(o.t * 2.2) * 6 - 16, lunge = u < 0 ? -u * 14 : -u * 5;
  const cx = -22 + Math.sin(o.t * 1.5) * 2; L(SP(`M-8,${fl - 4} Q-18,${fl + 8} ${cx},-2`), '#4a4a5a', 2.6);
  for (let i = 0; i < 5; i++) { const k = i / 5, x = -8 + (cx + 8) * k, y = fl - 4 + (-2 - fl + 4) * k + Math.sin(k * Math.PI) * 6; L(E(x, y, 2.6, 1.6, .6), '#6a6a7a', 1.6); }
  V(E(cx, -6, 6.6, 6.6), '#4a4a5a', cx, -6, 7, 1.6); F(E(cx - 2, -8, 2, 1.4), 'rgba(255,255,255,.4)');
  g.save(); g.translate(lunge, fl); g.rotate(Math.sin(o.t * 1.4) * .05 + (o.walking ? .12 : 0) + (u > 0 ? -.12 * u : .2 * -u)); g.globalAlpha *= .9;
  glowB(0, -40, 50, 'rgba(180,170,255,.3)');
  const p = new Path2D(); p.moveTo(-18, -6); for (let i = 0; i <= 6; i++) p.quadraticCurveTo(-18 + i * 6 - 3, -6 + (i % 2 ? 9 : -2) + Math.sin(o.t * 5 + i) * 2.4, -18 + i * 6, -6 + Math.sin(o.t * 5 + i + 1) * 2);
  p.quadraticCurveTo(20, -30, 16, -50); p.quadraticCurveTo(12, -80, 0, -80); p.quadraticCurveTo(-16, -80, -18, -50); p.quadraticCurveTo(-22, -30, -18, -6); p.closePath(); V(p, sh, 0, -40, 34);
  g.save(); g.clip(p); for (const x of [-8, 2, 10]) L(SP(`M${x},-58 Q${x - 2},-30 ${x + 1},-4`), 'rgba(120,110,170,.22)', 2); g.restore();
  const ar = u > 0 ? -u * .8 : -u * .5; V(SP(`M12,-44 Q${24 + ar * 6},${-46 - ar * 10} ${26 + ar * 6},${-36 - ar * 12} Q20,-36 13,-34Z`), sh, 18, -40, 8, 1.6);
  const a = o.mood === 0 ? 0 : o.mood === 4 ? -.5 : .5;
  for (const [x, r, d] of [[-2, 4.6, 1], [8, 3.8, -1]]) { const y = -56; if (o.mood === 4) L(SP(`M${x - r},${y - r * .6} L${x + r * .4},${y} L${x - r},${y + r * .6}`), '#1b1238', 2.2); else { F(SP(`M${x - r},${y - r * .4 + d * a * r * .6} Q${x},${y - r * 1.3} ${x + r},${y - r * .4 - d * a * r * .6} Q${x + r},${y + r * 1.2} ${x},${y + r * 1.2} Q${x - r},${y + r * 1.2} ${x - r},${y - r * .4 + d * a * r * .6}Z`), '#1b1238'); if (o.blink > .5) F(E(x + 1, y - 1, 1.2, 1.2), '#fff'); } }
  const mo = o.mood === 3 ? 6 : o.mood === 2 ? 2 : 3.4 + Math.sin(o.t * 2) * .8; F(E(3, -44, 4, mo), '#1b1238');
  g.restore();
}
function coccoD(o) {                                            // il Coccodrillo di Capitan Uncino: basso e lungo, la sveglia nella pancia, tic-tac
  const sk = '#4a9a4a', sk2 = '#3a7a3a', bel = '#d8d890', u = o.u, w = o.walking ? 1 : 0, p = o.ph * 1.4, snap = o.mood === 3 ? .5 : o.mood === 2 ? .32 : Math.max(0, Math.sin(o.t * .8) - .9) * 2;
  const lunge = u < 0 ? -u * 16 : -u * 5;
  g.save(); g.translate(lunge, w ? -Math.abs(Math.sin(p)) * 2 : 0);
  const lg = (x, off, col) => { const a = w ? Math.sin(p + off) * .6 : 0; seg(x, -10, x + Math.sin(a) * 6, -2, 5, col); V(E(x + Math.sin(a) * 6 + 2, -1, 4.4, 2.2), col, x, -1, 4, 1.4); };
  lg(-18, 0, sk2); lg(8, Math.PI, sk2);
  const tw = Math.sin(o.t * 3) * 5 + (w ? Math.sin(p) * 4 : 0);
  const body = SP(`M24,-10 Q20,-24 0,-24 Q-20,-24 -30,-16 Q-48,-12 ${-64 + tw},${-6 + tw * .3} Q-46,-2 -28,-2 Q-10,2 10,-2 Q22,-4 24,-10Z`); V(body, sk, -10, -12, 34);
  g.save(); g.clip(body); F(SP('M-28,-6 Q0,-10 24,-8 L24,0 L-30,0Z'), bel); for (let x = -50; x < 20; x += 7) V(PL([x, -24, x + 3.5, -29, x + 7, -24]), sk2, x + 3, -26, 3, 1.2); g.restore();
  for (let x = -54; x < 14; x += 8) V(PL([x, -22 + (x < -30 ? (x + 30) * -.2 : 0), x + 3, -28 + (x < -30 ? (x + 30) * -.2 : 0), x + 6, -22 + (x < -30 ? (x + 30) * -.2 : 0)]), sk2, x + 3, -24, 3, 1.2);
  g.save(); g.translate(-4, -10); V(E(0, 0, 7, 6), '#d8d8e0', 0, 0, 7, 1.6); F(E(0, 0, 5.4, 4.6), '#fbf8f0'); const tick = Math.floor(o.t * 2) * .52; L(SP(`M0,0 L${Math.sin(tick) * 4},${-Math.cos(tick) * 4}`), '#1b1238', 1.2); L(SP('M0,0 L2.4,0'), '#1b1238', 1.4); V(E(-5, -6, 2, 2), '#c8302a', -5, -6, 2, 1); V(E(5, -6, 2, 2), '#c8302a', 5, -6, 2, 1); g.restore();
  if (Math.floor(o.t * 2) % 2 === 0) { g.save(); g.fillStyle = 'rgba(27,18,56,.7)'; g.font = 'bold 7px sans-serif'; g.fillText('tic', -12, -32); g.restore(); } else { g.save(); g.fillStyle = 'rgba(27,18,56,.7)'; g.font = 'bold 7px sans-serif'; g.fillText('tac', -2, -34); g.restore(); }
  lg(-12, Math.PI, sk); lg(14, 0, sk);
  g.save(); g.translate(20, -14); g.rotate(-snap * .1 + (o.mood === 4 ? .2 : 0));
  g.save(); g.rotate(snap); V(SP('M0,2 L34,2 Q36,6 30,8 L0,8Z'), sk2, 16, 5, 16, 1.8); for (let x = 6; x < 32; x += 5) F(PL([x, 2, x + 2, -2, x + 4, 2]), '#fffdf4'); g.restore();
  if (snap > .15) F(SP(`M2,2 L34,${2 - snap * 4} L${30},${4 + snap * 14} L2,8Z`), '#a8283a');
  g.save(); g.rotate(-snap * .9); V(SP('M-4,-10 Q10,-12 30,-6 Q38,-4 37,1 L0,3 Q-6,-2 -4,-10Z'), sk, 14, -3, 20, 2); for (let x = 6; x < 34; x += 5) F(PL([x, 2.6, x + 2, 6.4, x + 4, 2.6]), '#fffdf4'); V(E(34, -3, 1.6, 1.2), sk2, 34, -3, 2, .8);
  V(E(4, -11, 6, 5.4), sk, 4, -11, 6, 1.6); eyes(o, sk, [[3, -12, 3.6, 1], [9.6, -11, 2.6, -1]], '#e8c03a'); brows(o, [[3, -17, 6.4, 1], [9.6, -15.4, 4.6, -1]], dk(sk, .6), 2.2);
  g.restore(); g.restore();
  g.restore();
}
Object.assign(DRAW, {
  cornacchia: o => crowD(o, { coin: 1 }),
  reginacuori(o) { for (const [ox, s2, v] of [[-30, .9, 0], [30, .9, 1]]) { g.save(); g.translate(ox, 0); g.scale(s2, s2); cartaD(Object.assign({}, o, { t: o.t + v + 1, ph: o.ph + v + 1 }), v); g.restore(); } reginaD(o); },
  stregone: stregoneD, gothel: gothelD, sirena: sirenaD, lumacone: lumaconeD, fantasma: fantasmaD, coccodrillo: coccoD,
  ladroni(o) { for (const [ox, oy, s2, v] of [[-34, -2, .86, 1], [34, 2, .86, 2], [-14, 4, .9, 3]]) { g.save(); g.translate(ox, oy); g.scale(s2, s2); ladroneD(Object.assign({}, o, { t: o.t + v * 1.3, ph: o.ph + v }), v, 0); g.restore(); } g.save(); g.translate(14, 0); ladroneD(o, 0, 1); g.restore(); }
});
