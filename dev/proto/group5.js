// ---------- gruppo 5: epici ----------
function barbabluD(o) {                                         // Barbablù: grosso, barbone blu, la chiave proibita
  const sk = '#e8c0a0', dub = '#5a2a6a', dub2 = '#7a3a8a', bl = '#2a4ac8', gold = '#f2c14e', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3.4), sw = Math.sin(o.ph);
  g.save(); g.translate(0, b); const hb = arm(-14, -78, 14, 13, 7, 1.4 + sw * .4 * w, -1.1, dk(dub, .3)); V(E(hb[0], hb[1], 4.6, 4.6), dk(sk, .2), hb[0], hb[1], 5, 1.4); g.restore();
  leg(-7, -40, 19, 19, 7.5, o, Math.PI, '#2a2230', '#1a141e', .55); leg(7, -40, 19, 19, 7.5, o, 0, '#3a3040', '#241c2a', .55);
  g.save(); g.translate(0, b); g.rotate(.04 + w * .07 + (u > 0 ? -.1 * u : .14 * -u));
  const tor = SP('M-18,-82 Q0,-90 18,-82 Q22,-60 16,-40 Q0,-34 -16,-40 Q-22,-60 -18,-82Z'); V(tor, dub, 0, -62, 28);
  g.save(); g.clip(tor); F(SP('M-3,-86 L3,-86 L4,-36 L-4,-36Z'), dub2); for (const y of [-74, -64, -54]) V(E(0, y, 2, 2), gold, 0, y, 2, .8); g.restore();
  V(SP('M-18,-46 L18,-46 L18,-40 L-18,-40Z'), '#2a1a14', 0, -43, 18, 1.6); V(SP('M-4,-47 L4,-47 L4,-39 L-4,-39Z'), gold, 0, -43, 4, 1);
  g.save(); g.translate(4, -98); g.rotate(Math.sin(o.t * 1.7) * .05 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0) + (w ? sw * .04 : 0)); g.scale(1.1, 1.1);
  V(E(-10, 0, 3.6, 5), sk, -10, 0, 4, 1.4);
  V(SP('M-10,-4 Q-10,-16 1,-16 Q12,-16 12,-4 Q13,6 2,8 Q-9,7 -10,-4Z'), sk, 1, -4, 13);
  F(SP('M-10,-8 Q-8,-16 1,-17 Q11,-16 12,-8 Q6,-13 1,-13 Q-5,-13 -10,-8Z'), '#1a2050');
  const beard = SP(`M-10,-1 Q-14,14 -6,24 Q-2,${30 + Math.sin(o.t * 3)} 4,${27 + Math.sin(o.t * 3 + 1)} Q10,30 13,22 Q16,10 12,-1 Q8,5 1,4 Q-6,5 -10,-1Z`);
  V(beard, bl, 1, 12, 16); g.save(); g.clip(beard); for (const [x, y] of [[-6, 8], [0, 14], [7, 10], [-3, 20], [5, 22]]) L(SP(`M${x},${y} q2,-3 4,0`), lt(bl, .3), 1.2); g.restore();
  eyes(o, sk, [[-1, -6, 3.2, 1], [6.4, -6.2, 2.6, -1]], '#1a2050'); brows(o, [[-1, -11, 6.4, 1], [6.4, -10.8, 5, -1]], '#1a2050', 3);
  V(E(9, -1, 3.4, 3), dk(sk, .06), 9, -1, 3, 1.2);
  if (o.mood >= 2) { glowB(-1, -6, 10, 'rgba(90,130,255,.6)'); }
  mouth(o, 4, 5, 8);
  g.restore();
  const h = arm(15, -78, 14, 13, 7, .8 - 1.9 * u, -.5, dub);
  atHand(h, -1.0, () => { V(E(0, 6, 6, 6), gold, 0, 6, 6, 1.6); F(E(0, 6, 3, 3), dk(gold, .5)); seg(0, 0, 0, -26, 3.6, gold); V(SP('M-1.6,-26 L7,-26 L7,-22 L4,-22 L4,-18 L7,-18 L7,-14 L-1.6,-14Z'), gold, 3, -20, 5, 1.2); if (o.mood >= 2) glowB(0, -10, 14, 'rgba(255,60,60,.4)'); });
  V(E(h[0], h[1], 5, 5), sk, h[0], h[1], 5, 1.4);
  g.restore();
}
function ominoD(o) {                                            // l'Omino di Burro: tondo, dolce, untuoso, con la frusta
  const sk = '#f4c8a8', coat = '#3a7a4a', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3), sw = Math.sin(o.ph);
  leg(-5, -22, 10, 10, 5, o, Math.PI, '#5a4a3a', '#2a1a14', .6); leg(5, -22, 10, 10, 5, o, 0, '#6a5a4a', '#3a2418', .6);
  g.save(); g.translate(0, b); g.rotate((w ? sw * .06 : 0) + (u > 0 ? -.1 * u : .14 * -u));
  arm(-10, -46, 9, 9, 5, 1.6 + sw * .5 * w, -.4, dk(coat, .3));
  const bd = E(0, -38, 17, 18); V(bd, coat, 0, -38, 18); g.save(); g.clip(bd); F(E(5, -36, 8, 16), '#f4f0e0'); for (const y of [-46, -38, -30]) V(E(-2, y, 1.6, 1.6), '#f2c14e', -2, y, 1.6, .8); g.restore();
  g.save(); g.translate(3, -62); g.rotate(Math.sin(o.t * 2.6) * .07 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0) + (w ? sw * .05 : 0));
  V(E(0, 0, 12, 11), sk, 0, 0, 12); F(E(-3, -5, 5, 2.4), 'rgba(255,255,255,.45)');
  F(E(-6, 4, 3.6, 2.2), 'rgba(250,110,110,.45)'); F(E(8, 4, 3, 1.8), 'rgba(250,110,110,.45)');
  eyes(o, sk, [[-2, -2, 2.8, 1], [5.4, -2.2, 2.4, -1]], '#4a8ac8'); brows(o, [[-2, -6.4, 5, 1], [5.4, -6.2, 4, -1]], '#c89a5a', 1.6);
  if (o.mood === 0) for (const x of [-2, 5.4]) L(SP(`M${x - 2.6},-2.6 Q${x},-4.6 ${x + 2.6},-2.6`), '#1b1238', 1.6);
  V(E(9, 1, 2.6, 2.4), '#f0907a', 9, 1, 2.6, 1);
  mouth(o, 3, 5.6, 8, { lips: '#c8304a' });
  V(SP('M-11,-6 Q-10,-12 0,-12 Q10,-12 11,-6 Q0,-8 -11,-6Z'), '#2a2a2a', 0, -9, 11, 1.6); V(SP('M-7,-10 L-6,-22 L6,-22 L7,-10Z'), '#2a2a2a', 0, -16, 8, 1.6); F(SP('M-6.6,-14 L6.6,-14 L6.8,-11 L-6.8,-11Z'), '#c8304a');
  g.restore();
  const crack = o.atk >= .45 && o.atk < .75, h = arm(10, -46, 9, 9, 5, .4 - 2 * u, -.4, coat);
  seg(h[0], h[1], h[0] + Math.cos(h[2] - .8) * 14, h[1] + Math.sin(h[2] - .8) * 14, 2.4, '#5a3a20');
  const ex = h[0] + Math.cos(h[2] - .8) * 14, ey = h[1] + Math.sin(h[2] - .8) * 14, ln = SP(crack ? `M${ex},${ey} Q${ex + 20},${ey - 10} ${ex + 40},${ey + 4}` : `M${ex},${ey} Q${ex - 10},${ey + 14} ${ex + 4},${ey + 26 + Math.sin(o.t * 3) * 3}`); L(ln, '#3a2a1a', 1.6);
  if (crack) { glowB(ex + 40, ey + 4, 10, 'rgba(255,240,170,.8)'); }
  V(E(h[0], h[1], 3.4, 3.4), sk, h[0], h[1], 3, 1.2);
  g.restore();
}
function babajagaD(o) {                                         // Baba Jaga: la casetta sulle zampe di gallina, lei alla finestra
  const wood = '#8a5a34', roof = '#5a4a6a', leg1 = '#e8b43a', sk = '#c8c49a', u = o.u, w = o.walking ? 1 : 0, p = o.ph * .9;
  const stomp = u > 0 ? -u * 14 : u < 0 ? -u * 6 : 0, lift = (w ? -Math.abs(Math.sin(p)) * 8 : Math.sin(o.t * 1.6) * 1.5) + stomp;
  const cleg = (x, off, col) => { const a = w ? Math.sin(p + off) * .45 : 0, kx = x + Math.sin(a) * 14 - 6, ky = -24, fx = x + Math.sin(a) * 22, fy = -(w ? Math.max(0, Math.cos(p + off)) * 6 : 0);
    const t1 = SP(`M${x},${-46 + lift} L${kx},${ky}`), t2 = SP(`M${kx},${ky} L${fx},${fy}`); for (const t of [t1, t2]) { L(t, '#5a3a10', 9); L(t, col, 5.6); }
    for (const y of [-36, -30]) L(SP(`M${x - 3 + (kx - x) * .5},${y} l5,0`), dk(col, .3), 1.2);
    for (const a2 of [-.5, 0, .5]) { L(SP(`M${fx},${fy} l${Math.cos(a2) * 10},${Math.sin(a2) * 2}`), '#5a3a10', 4); L(SP(`M${fx},${fy} l${Math.cos(a2) * 10},${Math.sin(a2) * 2}`), col, 2.2); } L(SP(`M${fx},${fy} l-7,-1`), col, 2.2); };
  cleg(-10, Math.PI, dk(leg1, .2));
  g.save(); g.translate(0, lift); g.rotate((w ? Math.sin(p) * .05 : Math.sin(o.t * 1.3) * .02) + (u > 0 ? -.06 * u : .05 * -u));
  for (let i = 0; i < 3; i++) { const k = (o.t * .4 + i / 3) % 1; g.save(); g.globalAlpha = .55 * (1 - k); F(E(-14 - k * 10, -128 - k * 40, 5 + k * 10, 5 + k * 8), '#c8c4d0'); g.restore(); }
  V(SP('M-18,-118 L-10,-118 L-10,-102 L-18,-102Z'), '#6a5a5a', -14, -110, 6, 1.6);
  const hut = SP('M-30,-46 L30,-46 L30,-96 L-30,-96Z'); V(hut, wood, 0, -70, 34);
  g.save(); g.clip(hut); for (let y = -92; y < -44; y += 8) { L(SP(`M-32,${y} L32,${y}`), dk(wood, .4), 1.6); for (const x of [-30, 30]) F(E(x, y + 4, 4, 3.4), lt(wood, .2)); } g.restore();
  const rf = SP('M-38,-92 L0,-124 L38,-92 L32,-88 L0,-114 L-32,-88Z'); V(PL([-38, -92, 0, -126, 38, -92]), roof, 0, -104, 30);
  L(SP('M-30,-96 L0,-120 L30,-96'), dk(roof, .4), 1.6); for (const x of [-20, -8, 8, 20]) L(SP(`M${x},${-94 + Math.abs(x) * 0} l${x > 0 ? 4 : -4},6`), dk(roof, .3), 1);
  V(SP('M-24,-60 L-12,-60 L-12,-48 L-24,-48Z'), '#3a2418', -18, -54, 6, 1.4); F(E(-14, -54, 1.2, 1.2), '#f2c14e');
  const win = SP('M2,-88 L26,-88 L26,-64 L2,-64Z'); V(win, '#ffcf6a', 14, -76, 14, 1.8); g.save(); g.clip(win);
  F(SP('M2,-88 L26,-88 L26,-64 L2,-64Z'), '#3a2a1a');
  g.save(); g.translate(15, -72); g.rotate(Math.sin(o.t * 2) * .06 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0)); const lean = o.mood === 3 ? 4 : 0; g.translate(lean, 0);
  V(SP('M-9,-2 Q-9,-12 1,-12 Q10,-12 10,-2 Q11,8 2,10 Q-8,9 -9,-2Z'), sk, 1, -2, 11);
  eyes(o, sk, [[-1, -3, 2.8, 1], [5.4, -3.4, 2, -1]], '#c8302a'); brows(o, [[-1, -7.4, 5.4, 1], [5.4, -7, 4, -1]], '#e8e4f0', 2);
  V(SP('M4,-3 Q14,0 12,6 Q9,3 5,3Z'), dk(sk, .06), 8, 1, 5, 1.2); F(E(11, 3, 1, 1), '#5a4a3a');
  mouth(o, 2, 6, 6); if (o.mood === 3) for (const x of [0, 3]) F(SP(`M${x},4.6 L${x + 2},4.6 L${x + 1},7Z`), '#9aa0b0');
  V(SP('M-11,4 Q-13,-14 1,-15 Q14,-14 12,-4 Q4,-10 -4,-8 Q-8,-4 -7,6Z'), '#c8302a', 0, -6, 12, 1.6); F(E(-4, -10, 1.4, 1.4), '#f4f0ea'); F(E(5, -12, 1.4, 1.4), '#f4f0ea');
  g.restore(); g.restore(); L(SP('M14,-88 L14,-64 M2,-76 L26,-76'), '#5a3a1a', 2);
  g.restore();
  cleg(10, 0, leg1);
  g.restore();
}
function stregamareD(o) {                                       // la Strega del Mare: coda di pesce su un'onda, capelli d'alga, conchiglia che ruba le voci
  const sk = '#9ab0c8', hair = '#3a7a4a', u = o.u, fl = Math.sin(o.t * 2) * 3, cast = o.mood === 2 || o.mood === 3;
  const wave = SP(`M-28,0 Q-20,${-10 + Math.sin(o.t * 3) * 3} -10,-6 Q0,${-14 + Math.sin(o.t * 3 + 1) * 3} 10,-6 Q20,${-12 + Math.sin(o.t * 3 + 2) * 3} 28,0Z`);
  V(wave, '#2a6a9a', 0, -6, 28, 1.8); L(SP(`M-22,-3 Q-14,${-9 + Math.sin(o.t * 3) * 2} -6,-6 M4,-7 Q12,${-12 + Math.sin(o.t * 3 + 2) * 2} 20,-4`), '#bfe8ff', 2);
  g.save(); g.translate(0, -10 + fl); g.rotate(-.04 + (u > 0 ? -.08 * u : .1 * -u));
  const tw = Math.sin(o.t * 3) * 6, tail = SP(`M-9,-42 Q-16,-20 -8,-6 Q${-4 + tw * .3},2 ${-18 + tw},0 L${-28 + tw},-10 L${-26 + tw},8 Q${-10 + tw * .5},10 0,2 Q9,-14 9,-42Z`);
  const tg = g.createLinearGradient(0, -42, 0, 6); tg.addColorStop(0, '#2a3a6a'); tg.addColorStop(1, '#1a6a5a'); L(tail, '#0e1a30', 4.4); g.fillStyle = tg; g.fill(tail);
  g.save(); g.clip(tail); for (let y = -40; y < 6; y += 5) for (let x = -14; x < 10; x += 5) L(SP(`M${x + (y % 10 ? 2.5 : 0) - 2},${y} q2,3 4,0`), 'rgba(160,255,220,.3)', .8); g.restore();
  for (const [a, l] of [[-.3, 16], [.1, 18], [.5, 14]]) { const sx = -8, sy = -36; g.save(); g.translate(sx, sy); g.rotate(Math.PI * .75 + a + Math.sin(o.t * 2.6 + a * 4) * .2); L(SP(`M0,0 Q${l * .5},4 ${l},0`), '#0e1a30', 4.6); L(SP(`M0,0 Q${l * .5},4 ${l},0`), '#4a2a6a', 2.6); g.restore(); }
  const hs = Math.sin(o.t * 2) * 4;
  V(SP(`M-6,-68 Q-22,-60 ${-24 + hs},-34 Q${-18 + hs},-22 ${-10 + hs * .6},-26 Q-14,-40 -4,-54Z`), hair, -12, -46, 18);
  for (let i = 0; i < 4; i++) L(SP(`M${-8 - i * 3},-58 q${-4 + hs * .3},${10 + i * 3} ${-2 + hs * .5},${20 + i * 4}`), lt(hair, .2), 1.2);
  V(SP('M-9,-60 Q0,-64 9,-60 L9,-40 Q0,-38 -9,-40Z'), sk, 0, -50, 12);
  V(SP('M-10,-44 Q0,-38 10,-44 L10,-40 Q0,-34 -10,-40Z'), '#2a3a6a', 0, -41, 10, 1.4);
  arm(-7, -58, 10, 9, 3.6, 1.8 + (cast ? -.8 : 0), -.9, dk(sk, .15));
  g.save(); g.translate(1, -54); V(SP('M-5,0 Q0,-6 5,0 Q4,5 0,6 Q-4,5 -5,0Z'), '#f2d0a0', 0, 1, 5, 1.2); L(SP('M0,-4 L0,5 M-3,-1 L-2,4 M3,-1 L2,4'), dk('#f2d0a0', .3), .8); if (cast) glowB(0, 1, 14, 'rgba(255,220,120,.7)'); g.restore();
  g.save(); g.translate(1, -72); g.rotate(Math.sin(o.t * 1.6) * .05 - (cast ? .06 : 0) + (o.mood === 4 ? .22 : 0));
  V(SP('M-8,-4 Q-9,-13 1,-13 Q10,-12 10,-3 Q10,7 2,10 Q-7,9 -8,-4Z'), sk, 1, -2, 11);
  V(SP('M-10,4 Q-13,-14 1,-15 Q13,-14 11,-2 Q4,-9 -2,-7 Q-7,-1 -6,10Z'), hair, 0, -5, 12);
  for (const [x, y] of [[-8, -12], [4, -14], [10, -6]]) L(SP(`M${x},${y} q2,-4 0,-7`), hair, 2);
  eyes(o, sk, [[0, -2, 3, 1], [6.4, -2.2, 2.4, -1]], '#f2c040'); brows(o, [[0, -6.4, 5.4, 1], [6.4, -6.2, 4.4, -1]], '#1e3a2a', 1.8);
  F(E(0, -3.6, 3.4, 1.6), 'rgba(40,60,120,.35)'); V(PL([6, -2, 11, 3, 6, 3]), sk, 8, 1, 3, 1);
  mouth(o, 4, 6, 6, { lips: '#2a3a8a' });
  g.restore();
  const h = arm(7, -58, 10, 9, 3.6, -.2 - u * .9, -.4, sk);
  g.save(); g.translate(h[0], h[1]); seg(0, 16, 0, -22, 2.2, '#c8a85a'); for (const x of [-4, 0, 4]) V(PL([x - 1.6, -22, x, -30, x + 1.6, -22]), '#c8a85a', x, -25, 3, 1); L(SP('M-4,-22 L4,-22'), '#c8a85a', 2); if (cast) glowB(0, -26, 12, 'rgba(120,255,200,.6)'); g.restore();
  V(E(h[0], h[1], 2.8, 2.8), sk, h[0], h[1], 3, 1.2);
  g.restore();
}
function morganaD(o) {                                          // Fata Morgana: veste di stelle, luna sulla fronte, magia viola
  const dr = '#1e2a6a', dr2 = '#3a3a9a', sk = '#f2dcd0', hair = '#2a1a4a', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 2) - 4 + Math.sin(o.t * 2) * 2, sw = Math.sin(o.ph) * (w ? 3 : 0) + Math.sin(o.t * 2.2) * 2.4, cast = o.mood === 2 || o.mood === 3;
  g.save(); g.translate(0, b);
  const hs = Math.sin(o.t * 2) * 4; V(SP(`M-4,-86 Q-20,-74 ${-22 + hs},-46 Q${-20 + hs},-34 ${-12 + hs * .6},-38 Q-12,-60 -2,-74Z`), hair, -12, -60, 20);
  const robe = SP(`M-8,-82 Q-14,-40 ${-20 + sw},2 Q${-6 + sw},${-2 + Math.sin(o.t * 3)} ${4 + sw},2 Q${12 + sw},${-2} ${20 + sw},2 Q14,-40 8,-82Z`); V(robe, dr, 0, -40, 32);
  g.save(); g.clip(robe); const gr = g.createLinearGradient(0, -82, 0, 2); gr.addColorStop(0, 'rgba(120,80,220,0)'); gr.addColorStop(1, 'rgba(160,110,255,.45)'); g.fillStyle = gr; g.fillRect(-30, -84, 60, 90);
  for (const [x, y, r] of [[-6, -60, 1.6], [4, -48, 2], [-10, -30, 1.8], [8, -22, 1.6], [-2, -14, 2.2], [12, -40, 1.4], [-14, -8, 1.6]]) { const tw2 = .6 + .4 * Math.sin(o.t * 4 + x); F(SP(`M${x},${y - r * 2} L${x + r * .5},${y - r * .5} L${x + r * 2},${y} L${x + r * .5},${y + r * .5} L${x},${y + r * 2} L${x - r * .5},${y + r * .5} L${x - r * 2},${y} L${x - r * .5},${y - r * .5}Z`), `rgba(255,240,180,${tw2})`); } g.restore();
  arm(-6, -78, 11, 10, 3.6, (cast ? -2.4 : 1.7) + Math.sin(o.t * 1.6) * .06, cast ? -.4 : -.6, dk(dr, .2));
  V(SP('M-8,-82 Q0,-86 8,-82 L9,-62 Q0,-58 -9,-62Z'), dr2, 0, -72, 12);
  g.save(); g.translate(1, -94); g.rotate(Math.sin(o.t * 1.5) * .05 + (o.mood === 3 ? -.1 : o.mood === 4 ? .22 : 0));
  V(SP('M-7,-4 Q-8,-14 1,-14 Q9,-13 9,-3 Q9,8 2,11 Q-6,9 -7,-4Z'), sk, 1, -2, 11);
  V(SP('M-9,6 Q-12,-14 1,-15 Q12,-14 10,-4 Q4,-10 -3,-8 Q-6,-2 -5,10Z'), hair, -1, -4, 11);
  V(SP('M-1,-12 A4,4 0 1 1 5,-9 A3,3 0 1 0 -1,-12Z'), '#f4f0c0', 2, -11, 4, 1); glowB(2, -11, 8, 'rgba(255,250,180,.5)');
  eyes(o, sk, [[0, -2.6, 2.8, 1], [6.4, -2.8, 2.3, -1]], '#9a4ae8'); brows(o, [[0, -6.6, 5.4, 1], [6.4, -6.4, 4.4, -1]], hair, 1.6);
  F(E(0, -3.8, 3.4, 1.6), 'rgba(120,60,200,.3)'); V(PL([6, -2, 10.4, 3, 6, 3]), sk, 8, 1, 3, 1);
  mouth(o, 4, 6.4, 5.4, { lips: '#7a2a8a' });
  g.restore();
  const h = arm(6, -78, 11, 10, 3.6, (cast ? -.8 : .3) - u * .6, -.3, sk);
  if (cast || u > 0) { const k = cast ? 1 : u; glowB(h[0] + 3, h[1] - 3, 18 * k + 4, 'rgba(180,100,255,.7)'); for (let i = 0; i < 4; i++) { const a = o.t * 4 + i * 1.57, r = 7 * k; F(E(h[0] + 3 + Math.cos(a) * r, h[1] - 3 + Math.sin(a) * r, 1.4, 1.4), '#f0d8ff'); } }
  V(E(h[0], h[1], 2.8, 2.8), sk, h[0], h[1], 3, 1.2);
  g.restore();
}
function grifoneD(o) {                                          // il Grifone: testa d'aquila, corpo di leone, ali alzate
  const fur = '#c89a4a', fe = '#f4ece0', wg = '#8a5a2a', u = o.u, f = Math.sin(o.t * 6), fly = -50 + Math.sin(o.t * 2) * 5 + (u < 0 ? -u * 30 : 0);
  g.save(); g.translate(u < 0 ? -u * 12 : 0, fly); g.rotate(-.05 + (u < 0 ? .45 * -u : -.12 * u));
  const wing = (a, col, sc) => { g.save(); g.translate(-4, -12); g.rotate(a); g.scale(sc, sc); const p = SP('M0,0 Q-6,-26 -20,-42 Q-32,-50 -50,-48 Q-42,-42 -46,-36 Q-36,-34 -38,-28 Q-28,-27 -30,-20 Q-20,-19 -20,-12 Q-10,-10 -6,4Z'); V(p, col, -22, -22, 28);
    g.save(); g.clip(p); for (const [x, y] of [[-46, -44], [-38, -32], [-30, -24], [-22, -16]]) L(SP(`M-4,-4 L${x},${y}`), lt(col, .25), 1.2); F(SP('M0,0 Q-6,-26 -20,-42 Q-12,-20 -4,2Z'), fe); g.restore(); g.restore(); };
  wing(-.3 + f * .4, dk(wg, .3), .9);
  const tl = SP(`M-20,0 Q-34,${4 + Math.sin(o.t * 3) * 4} -40,${-6 + Math.sin(o.t * 3) * 6}`); L(tl, dk(fur, .7), 5); L(tl, fur, 2.8); V(E(-40, -6 + Math.sin(o.t * 3) * 6, 3.4, 4), '#7a4a1a', -40, -6, 3, 1.2);
  for (const [x, c] of [[-14, dk(fur, .25)], [-6, fur]]) { seg(x, 4, x - 4, 14, 4.6, c); V(E(x - 5, 15, 4, 2.4), c, x - 5, 15, 4, 1.2); }
  const body = SP('M-22,0 Q-22,-12 -8,-14 Q8,-16 14,-8 Q16,4 6,8 Q-12,10 -22,0Z'); V(body, fur, -4, -3, 20);
  g.save(); g.clip(body); F(E(-2, 6, 16, 5), lt(fur, .25)); g.restore();
  for (const [x, c] of [[4, dk(fe, .15)], [12, fe]]) { const ex = x + 6 + (u < 0 ? 6 : 0); seg(x, 2, ex, 10, 4, c); for (const a of [-.5, 0, .5]) L(SP(`M${ex},${10} l${Math.cos(a + .6) * 5},${Math.sin(a + .6) * 5}`), '#3a3a3a', 1.6); }
  g.save(); g.translate(16, -16); g.rotate(Math.sin(o.t * 2.4) * .06 + (o.mood === 3 ? -.18 : o.mood === 4 ? .25 : 0));
  V(SP('M-10,8 Q-12,-6 -2,-12 Q8,-14 12,-4 Q12,6 4,10 Q-4,12 -10,8Z'), fe, 0, -1, 12);
  for (const [x, y, a] of [[-8, -8, -2.4], [-6, -11, -2.1], [-3, -13, -1.8]]) { g.save(); g.translate(x, y); g.rotate(a); V(SP('M0,-2 Q6,-3 10,0 Q6,3 0,2Z'), fe, 5, 0, 5, 1.2); g.restore(); }
  const op = o.mood === 3 ? .35 : 0; g.save(); g.translate(8, 0); g.rotate(op); V(SP('M0,0 L10,2 Q6,6 0,4Z'), '#e8a83a', 5, 2, 5, 1.2); g.restore();
  V(SP('M6,-6 Q16,-6 20,2 Q18,6 14,4 Q12,0 6,1Z'), '#f2b43a', 13, -1, 7, 1.6); F(E(11, -3, 1, .8), dk('#f2b43a', .5));
  eyes(o, fe, [[2, -4, 3, 1], [7.4, -4.4, 2.3, -1]], '#e8a020'); brows(o, [[2, -8.6, 5.6, 1], [7.4, -8.2, 4, -1]], '#5a3a1a', 2.4);
  g.restore();
  wing(-.55 - f * .5, wg, 1);
  g.restore();
}
function spiritoD(o) {                                          // lo Spirito nella Bottiglia: esce dal collo della bottiglia, fumo azzurro, braccia muscolose
  const sm = '#5ab8c8', sm2 = '#3a8aa8', u = o.u, w = o.walking ? 1 : 0, grow = o.mood === 3 ? 1.08 : 1, hop = w ? -Math.abs(Math.sin(o.ph)) * 4 : 0;
  g.save(); g.translate(0, hop);
  const bot = SP('M-12,0 Q-15,-8 -14,-18 Q-12,-26 -5,-28 L-4,-36 L4,-36 L5,-28 Q12,-26 14,-18 Q15,-8 12,0Z'); V(bot, '#3a8a4a', 0, -16, 16); g.save(); g.clip(bot); F(E(-6, -16, 3, 9), 'rgba(255,255,255,.35)'); F(E(0, -4, 12, 4), 'rgba(20,60,30,.3)'); g.restore();
  V(SP('M-5,-36 L5,-36 L5,-39 L-5,-39Z'), '#8a6a3a', 0, -37, 5, 1.2);
  g.restore();
  g.save(); g.translate(0, hop - 38); g.scale(grow, grow); g.rotate((w ? Math.sin(o.ph) * .06 : Math.sin(o.t * 1.4) * .04) + (u > 0 ? -.1 * u : .15 * -u));
  const sw = Math.sin(o.t * 3) * 4;
  const smoke = SP(`M-3,0 Q${-8 + sw},-14 ${-2 - sw},-26 Q${6 + sw},-34 -2,-44 Q-16,-50 -14,-66 Q-8,-80 6,-78 Q22,-74 18,-56 Q14,-44 6,-38 Q${8 - sw},-24 ${4 + sw},-12 Q4,-4 3,0Z`);
  V(smoke, sm, 2, -40, 34); g.save(); g.clip(smoke); F(E(8, -60, 8, 14), lt(sm, .3)); g.restore();
  glowB(2, -50, 40, 'rgba(90,220,240,.25)');
  arm(-8, -62, 12, 12, 6.4, 1.6 + Math.sin(o.t * 2) * .1 + u * .3, -.8, sm2);
  g.save(); g.translate(4, -82); g.rotate(Math.sin(o.t * 2) * .05 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0));
  V(SP('M-10,-2 Q-10,-14 1,-14 Q12,-14 12,-2 Q12,9 2,11 Q-9,10 -10,-2Z'), sm, 1, -2, 13);
  V(SP('M-4,6 Q2,10 8,6 Q8,16 3,22 Q-1,14 -4,6Z'), sm2, 2, 12, 7, 1.4);
  eyes(o, sm, [[-1, -3, 3.4, 1], [6.4, -3.2, 2.8, -1]], '#f2d040'); brows(o, [[-1, -8.4, 6.4, 1], [6.4, -8.2, 5, -1]], '#1a4a5a', 3);
  mouth(o, 3, 4, 8);
  V(SP('M-6,-12 Q0,-22 6,-12 Q2,-15 0,-15 Q-2,-15 -6,-12Z'), sm2, 0, -14, 5, 1.2); V(SP('M-1,-17 Q0,-26 3,-28 Q2,-21 1,-17Z'), sm2, 1, -22, 3, 1);
  for (const x of [-11, 12]) V(E(x, 0, 2, 2), '#f2c14e', x, 0, 2, .8);
  g.restore();
  const h = arm(10, -62, 12, 12, 6.8, .4 - 1.8 * u, -.6 - u * .3, sm);
  V(E(h[0], h[1], 6, 6), sm, h[0], h[1], 6, 1.6); for (const y of [-2, 1.4]) L(SP(`M${h[0] - 3},${h[1] + y} l5,0`), sm2, 1);
  V(SP(`M${h[0] - 8},${h[1] - 18} L${h[0] - 4},${h[1] - 18} L${h[0] - 4},${h[1] - 12} L${h[0] - 8},${h[1] - 12}Z`), 'rgba(0,0,0,0)', 0, 0, 1, 0);
  g.restore();
}
function bestiaD(o) {                                           // la Bestia Latrante: corpo di leopardo, collo di serpente, zampe di cervo
  const fur = '#e8b43a', spot = '#6a3a1a', sn = '#4a8a4a', u = o.u, w = o.walking ? 1 : 0, p = o.ph * 1.7, b = w ? -Math.abs(Math.sin(p)) * 4 : Math.sin(o.t * 3) * .8, lunge = u < 0 ? -u * 14 : -u * 4;
  g.save(); g.translate(lunge, b);
  const dl = (x, off, col) => { const a = w ? Math.sin(p + off) * .7 : 0, kx = x + Math.sin(a) * 10, ky = -14, fx = kx + Math.sin(a - .5) * 10 - 2, fy = -(w ? Math.max(0, Math.cos(p + off)) * 5 : 0);
    seg(x, -24, kx, ky, 3.6, col); seg(kx, ky, fx, fy, 2.4, col); V(E(fx + 1.4, fy - 1, 2.4, 2.6), '#3a2a20', fx, fy, 2, 1); };
  dl(-18, 0, dk(fur, .3)); dl(10, Math.PI, dk(fur, .3));
  const tl = SP(`M-26,-30 Q-40,${-34 + Math.sin(o.t * 4) * 4} -44,${-22 + Math.sin(o.t * 4 + 1) * 5}`); L(tl, dk(fur, .7), 5); L(tl, fur, 2.8);
  const body = SP('M-28,-28 Q-26,-40 -8,-40 Q10,-42 16,-32 Q18,-22 8,-20 L-22,-20 Q-30,-22 -28,-28Z'); V(body, fur, -6, -30, 24);
  g.save(); g.clip(body); for (const [x, y] of [[-20, -34], [-12, -30], [-4, -36], [4, -30], [10, -36], [-16, -24], [-2, -25]]) { L(E(x, y, 2.6, 2.2), spot, 1.6); F(E(x, y, 1, 1), spot); } F(E(-6, -21, 18, 2.6), lt(fur, .3)); g.restore();
  dl(-14, Math.PI * .5, fur); dl(14, Math.PI * 1.5, fur);
  const nk = SP(`M10,-34 Q18,-52 ${14 + Math.sin(o.t * 2) * 3},-62 Q12,-74 22,-80`); L(nk, dk(sn, .7), 10); L(nk, sn, 7); L(nk, lt(sn, .25), 2);
  g.save(); g.translate(22, -80); g.rotate(.15 + Math.sin(o.t * 2.6) * .1 + (o.mood === 3 ? -.25 : o.mood === 4 ? .3 : 0));
  const op = o.mood === 3 ? .45 : o.mood === 2 ? .15 : 0;
  g.save(); g.translate(2, 2); g.rotate(op); V(SP('M0,0 L14,1 Q10,5 1,4Z'), dk(sn, .1), 7, 2, 7, 1.4); g.restore();
  if (op > .2) { F(SP('M2,2 L16,2 L4,6Z'), '#8a1a2a'); L(SP('M8,3 l10,2 m0,0 l2,-2 m-2,2 l2,2'), '#e8384a', 1.2); }
  V(SP('M-6,-4 Q-4,-10 4,-9 Q14,-8 17,-1 Q14,3 3,3 Q-6,4 -6,-4Z'), sn, 4, -3, 11);
  for (const x of [2, 6, 10]) F(PL([x, 3, x + 1, 6, x + 2, 3]), '#fffdf4');
  eyes(o, sn, [[3, -4.6, 2.8, 1], [8, -5, 2.1, -1]], '#f2d040'); brows(o, [[3, -8.4, 5.4, 1], [8, -8.2, 4, -1]], '#1e3a1e', 2);
  g.restore();
  g.restore();
}
Object.assign(DRAW, { barbablu: barbabluD, omino: ominoD, babajaga: babajagaD, stregamare: stregamareD, morgana: morganaD, grifone: grifoneD, spirito: spiritoD, bestia: bestiaD });
