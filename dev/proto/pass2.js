// ---------- Pass Stagione 2 (dicembre): Yeti delle Nevi ----------
function yetiD(o) {                                               // lo Yeti delle Nevi: bestione col pelo bianco a ciuffi, faccia e mani azzurro-grigie, corna corte, fiato di ghiaccio; lancia palle di neve
  const fur = '#eef2f8', fd = '#c4cede', sk = '#8a9ab8', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, th = u < 0 ? -u : 0;
  const b = bobOf(o, 3.4);
  const tuft = (x, y, r, a = 0) => { V(SP(`M${x - r},${y} Q${x - r * .6},${y + r * 1.3} ${x},${y + r * .9} Q${x + r * .6},${y + r * 1.4} ${x + r},${y} Q${x},${y - r * 1.1} ${x - r},${y}Z`), fur, x, y, r, 1.4); };
  g.save(); g.translate(0, b);
  for (const [x, off, c] of [[-8, Math.PI, fd], [10, 0, fur]]) { const p2 = o.ph + off, sw = w ? Math.sin(p2) * 8 : 0, lift = w ? Math.max(0, Math.cos(p2)) * 5 : 0;      // gambe corte e pelose, piedoni
    V(SP(`M${x - 10},-40 Q${x - 12 + sw * .5},-20 ${x - 9 + sw},${-6 - lift} L${x + 9 + sw},${-6 - lift} Q${x + 12 + sw * .5},-20 ${x + 10},-40Z`), c, x, -24, 12, 1.8);
    V(SP(`M${x - 11 + sw},${-8 - lift} Q${x - 12 + sw},${-lift} ${x - 6 + sw},${-lift} L${x + 16 + sw},${-lift} Q${x + 18 + sw},${-6 - lift} ${x + 10 + sw},${-9 - lift}Z`), sk, x + 3, -4, 12, 1.4); }
  const hb = limb(-16, -92, 1.9 + (w ? Math.sin(o.ph) * .5 : 0) - th * .3, 22, -.4, 20, 9, 7, 6, fd); V(E(hb[0], hb[1], 7, 6), sk, hb[0], hb[1], 7, 1.4);   // braccio dietro
  const body = SP('M-30,-80 Q-34,-112 -6,-120 Q24,-122 30,-96 Q36,-66 26,-42 Q6,-30 -16,-36 Q-32,-48 -30,-80Z'); V(body, fur, -2, -78, 34);
  g.save(); g.clip(body); F(E(8, -70, 20, 26), '#ffffff'); for (let i = 0; i < 14; i++) { const x = -26 + (i * 13) % 52, y = -112 + (i * 17) % 76; L(SP(`M${x},${y} q3,6 0,10`), fd, 1.3); } g.restore();
  for (const [x, y, r] of [[-30, -60, 7], [-24, -42, 8], [26, -46, 7], [-8, -36, 8], [12, -36, 7]]) tuft(x, y, r);
  g.save(); g.translate(14, -122); g.rotate(m === 3 ? -.12 : m === 4 ? .2 : Math.sin(o.t * 1.7) * .05);                  // testa
  for (const s of [-1, 1]) V(SP(`M${s < 0 ? -10 : 6},-14 Q${s < 0 ? -18 : 14},-26 ${s < 0 ? -12 : 12},-30 Q${s < 0 ? -10 : 8},-22 ${s < 0 ? -4 : 2},-16Z`), '#e8e2cc', s < 0 ? -11 : 9, -22, 8, 1.4);
  const hd = SP('M-18,4 Q-20,-18 -2,-22 Q16,-24 20,-8 Q22,6 14,14 Q0,20 -12,14 Q-18,10 -18,4Z'); V(hd, fur, 0, -3, 20);
  for (const [x, y] of [[-14, -16], [-4, -22], [8, -22]]) tuft(x, y, 5);
  const face = SP('M-6,-8 Q4,-14 14,-8 Q18,2 14,10 Q4,15 -4,10 Q-9,2 -6,-8Z'); V(face, sk, 4, 1, 12, 1.4);
  eyesX(o, sk, [[1, -3, 3, 1], [10, -3.4, 2.6, -1]], 'almond', '#3ad8ff'); browsX(o, [[1, -7.4, 6, 1], [10, -7.6, 5, -1]], fd, 3, 'bushy');
  F(E(15, 1.6, 2.6, 2), '#4a5a78'); mouthX(o, 6, 8, 11, m === 3 || th > .3 ? 'snarl' : 'grin');
  if (m === 3 || th > .3) { g.save(); g.globalAlpha = .6; for (let i = 0; i < 3; i++) F(E(20 + i * 7, 8 + i * 2, 4 + i * 2, 2.6 + i), 'rgba(220,240,255,.7)'); g.restore(); }   // fiato di ghiaccio
  g.restore();
  const pv = up ? [-6 - up * 10, -136] : th ? [40 + th * 6, -104] : [30, -74];                                            // braccio davanti con la palla di neve
  armTo(16, -96, pv[0], pv[1], 22, 20, 9, 7, 6, fur, up ? -1 : 1); V(E(pv[0], pv[1], 7, 6), sk, pv[0], pv[1], 7, 1.4);
  if (!th || th < .5) { const bx = pv[0] + 2, by = pv[1] - 9; V(E(bx, by, 11, 10), '#f8fbff', bx, by, 11, 1.6); F(E(bx - 3, by - 3, 4, 3), '#ffffff'); L(SP(`M${bx - 6},${by + 4} q5,3 10,0`), '#c8d8ee', 1.2); glowB(bx, by, 14, 'rgba(180,230,255,.35)'); }
  g.restore();
}
Object.assign(DRAW, { yeti: yetiD });
