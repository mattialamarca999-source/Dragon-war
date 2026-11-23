// ---------- Kraken e Zucca rifatti: più slancio e dettagli ----------
function krakenD(o) {                                           // il Kraken: mantello lungo inclinato all'indietro con creste e cirripedi, becco da pappagallo, tentacoli a S, alcuni alzati in aria
  const sk = '#7a3a6a', sd = dk(sk, .35), bel = '#c88aa8', u = o.u, w = o.walking ? 1 : 0, b = Math.sin(o.t * 1.6) * 2 + (w ? -Math.abs(Math.sin(o.ph * .8)) * 3 : 0), lash = u < 0 ? -u : 0, rear = u > 0 ? u : 0;
  for (let i = 0; i < 3; i++) { const k = (o.t * .8 + i / 3) % 1; g.save(); g.globalAlpha = (1 - k) * .7; L(E(0, 0, 30 + k * 30, 5 + k * 5), '#bfe8ff', 1.6); g.restore(); }
  F(E(0, 0, 50, 8), 'rgba(40,110,160,.55)'); L(E(0, 0, 50, 8), '#8ad0f0', 1.6);
  for (const [x, a, ph] of [[-26, Math.PI * .95, 0], [-18, -2.2, 1.4], [-10, Math.PI * .8, 2.2]]) tentacle(x, -12 + b, a + Math.sin(o.t + ph) * .1, 40, 5, o.t * 2.2 + ph, sd);
  tentacle(-14, -18 + b, -1.9 - rear * .4, 54 + rear * 10, 5.6, o.t * 1.8 + 3, sd, 1.4);
  g.save(); g.translate(4, b); g.rotate(-.05 - rear * .12 + (u < 0 ? .1 * -u : 0));
  const man = SP('M-20,-18 Q-26,-40 -22,-60 Q-18,-86 -2,-104 Q8,-112 14,-104 Q22,-88 24,-64 Q26,-40 22,-20 Q0,-12 -20,-18Z');
  g.save(); g.translate(0, -20); g.rotate(-.28); g.translate(0, 20);
  V(man, sk, 2, -60, 46);
  g.save(); g.clip(man); const gr = g.createLinearGradient(-24, 0, 26, 0); gr.addColorStop(0, 'rgba(255,200,230,.25)'); gr.addColorStop(1, 'rgba(30,10,40,.35)'); g.fillStyle = gr; g.fillRect(-30, -116, 60, 104);
  for (let i = 0; i < 4; i++) L(SP(`M${-16 + i * 9},-26 Q${-20 + i * 9},-60 ${-6 + i * 6},-98`), sd, 2);
  for (const [x, y, r] of [[-12, -70, 3.6], [6, -84, 2.8], [12, -56, 3.2], [-6, -46, 2.4], [-14, -90, 2.4], [16, -76, 2]]) { F(E(x, y, r, r * .8), lt(sk, .3)); F(E(x - r * .3, y - r * .3, r * .3, r * .24), 'rgba(255,255,255,.5)'); }
  for (const [x, y] of [[-2, -96], [6, -100], [2, -92]]) { V(PL([x - 3, y + 2, x, y - 4, x + 3, y + 2]), '#d8d0c0', x, y, 3, 1); }
  L(SP('M-8,-74 l6,5 l-4,2 l6,4'), '#3a1430', 1.4);
  g.restore();
  g.restore();
  g.save(); g.translate(12, -26 + b); g.rotate(-rear * .12 + (o.mood === 4 ? .2 : 0));
  V(SP('M-16,6 Q-18,-10 -4,-14 Q12,-16 20,-6 Q24,4 16,10 Q0,14 -16,6Z'), sk, 2, -2, 18);
  g.save(); g.clip(SP('M-16,6 Q-18,-10 -4,-14 Q12,-16 20,-6 Q24,4 16,10 Q0,14 -16,6Z')); F(SP('M-16,4 Q2,10 22,2 L22,14 L-16,14Z'), bel); g.restore();
  V(SP('M16,-4 Q24,-6 26,-1 Q22,0 18,1Z'), sk, 21, -2, 4, 1.2);
  eyesX(o, sk, [[-6, -6, 5.4, 1], [8, -6.6, 4.2, -1]], 'slit', '#f2d040'); browsX(o, [[-6, -14, 12, 1], [8, -13, 9, -1]], sd, 4, 'thick');
  const op = o.mood === 3 ? .5 : o.mood === 2 ? .2 : .04;
  g.save(); g.translate(2, 8); V(SP(`M-5,0 Q0,-4 5,0 L1,${6}Z`), '#2a1a20', 0, 2, 4, 1.2); g.rotate(op); V(SP('M-4,1 Q0,6 4,1 L0,8Z'), '#3a2428', 0, 4, 4, 1.2); g.restore();
  g.restore();
  for (let i = 0; i < 4; i++) { const a = 1.2 - i * .32 - lash * (i < 2 ? 1.3 : 0), len = 38 + (i < 2 ? lash * 32 : 0) + i * 3; tentacle(-4 + i * 9, -14 + b, a, len, 6, o.t * 2.6 + i * 1.3, sk, i < 2 && lash ? .3 : 1.2); }
  tentacle(22, -20 + b, -.9 - rear * .8 + Math.sin(o.t * 1.4) * .1, 44, 5.4, o.t * 2 + 5, sk, 1.3);
}
function zuccaD(o) {                                            // la Zucca Stregata: zucca bitorzoluta e storta, intagliata con denti aguzzi e una candela dentro, picciolo a corno, telaio d'oro rotto della carrozza, ruote spaiate, viticci spinosi come braccia
  const pk = '#e8842a', pd = dk(pk, .32), gold = '#d8a83a', u = o.u, w = o.walking ? 1 : 0, roll = u < 0 ? -u * 2.4 : 0, sp = o.t * (w ? 3 : .5) + roll * 4;
  const wheel = (x, y, r, c, sp2) => { g.save(); g.translate(x, y); g.rotate(sp2); V(E(0, 0, r, r), c, 0, 0, r, 1.8); L(E(0, 0, r * .72, r * .72), dk(c, .3), 1.6); for (let i = 0; i < 7; i++) { if (i === 3) continue; L(SP(`M0,0 L${Math.cos(i * .9) * r * .72},${Math.sin(i * .9) * r * .72}`), lt(c, .25), 2); } V(E(0, 0, r * .22, r * .22), gold, 0, 0, 2, 1); g.restore(); };
  wheel(-26, -13, 13, '#4a3a2a', sp); wheel(28, -10, 10, '#5a4632', sp * 1.3 + 1);
  g.save(); g.translate(0, (w ? -Math.abs(Math.sin(o.ph * 1.2)) * 4 : 0) - roll * 5); g.rotate(.06 + (w ? Math.sin(o.ph * 1.2) * .06 : 0) + roll * .45 - (u > 0 ? u * .14 : 0));
  L(SP('M-30,-18 Q-36,-34 -30,-46 M32,-16 Q40,-30 34,-44 M-30,-18 L32,-16'), dk(gold, .5), 5); L(SP('M-30,-18 Q-36,-34 -30,-46 M32,-16 Q40,-30 34,-44 M-30,-18 L32,-16'), gold, 2.6);
  for (const [x, y, d] of [[-34, -40, -1], [38, -36, 1]]) { L(SP(`M${x},${y} q${d * 6},-4 ${d * 4},-10 q${-d * 2},-3 ${-d * 4},0`), gold, 2); }
  const body = SP('M-34,-24 Q-42,-52 -24,-70 Q-14,-80 -2,-76 Q6,-82 16,-78 Q36,-70 38,-46 Q40,-26 30,-14 Q14,-6 0,-8 Q-20,-6 -30,-14 Q-36,-18 -34,-24Z'); V(body, pk, 0, -44, 40);
  g.save(); g.clip(body); for (const [x, c] of [[-24, 1.5], [-10, 1.25], [6, 1.15], [22, 1.3]]) L(SP(`M${x},-80 Q${x * c},-44 ${x * .9},-6`), pd, 2.6); F(E(-14, -66, 12, 6), 'rgba(255,240,200,.25)');
  for (const [x, y, r] of [[18, -28, 4], [-26, -40, 3], [26, -60, 2.4]]) F(E(x, y, r, r * .8), 'rgba(90,60,20,.45)');
  V(SP('M24,-56 L34,-56 L34,-40 L24,-40Z'), '#3a2a1a', 29, -48, 6, 1.2); F(SP('M25.6,-54 L32.4,-54 L32.4,-42 L25.6,-42Z'), 'rgba(255,200,90,.6)'); g.restore();
  V(SP('M-4,-74 Q-8,-88 -2,-96 Q8,-100 10,-92 Q4,-90 2,-84 Q2,-78 4,-74Z'), '#5a6a2a', 2, -86, 7, 1.6);
  V(SP('M4,-82 Q16,-94 26,-86 Q16,-84 8,-78Z'), '#6aa044', 14, -86, 7, 1.4); L(SP('M8,-80 L22,-87'), dk('#6aa044', .3), .9);
  for (let i = 0; i < 2; i++) { const k = (o.t * .9 + i / 2) % 1; g.save(); g.globalAlpha = (1 - k) * .5; F(E(6 + Math.sin(k * 6) * 3, -96 - k * 22, 3 + k * 5, 3 + k * 4), '#8a8494'); g.restore(); }
  const gl = .8 + Math.sin(o.t * 7) * .15 + Math.sin(o.t * 13) * .08 + (o.mood === 3 ? .4 : 0); glowB(2, -40, 32 * gl, 'rgba(255,180,50,.6)');
  const eye = (x, d, r) => { const a = o.mood === 0 ? .2 : o.mood === 4 ? -.3 : .6; F(SP(`M${x - r},${-50 + d * a * 5} L${x + r},${-50 - d * a * 5} L${x + r * .4},-40 L${x - r * .6},-42Z`), '#ffe07a', '#ffb030'); F(E(x, -44, r * .25, r * .25), '#fff6d0'); };
  if (o.mood === 4) L(SP('M-18,-50 l9,5 l-9,5 M20,-52 l-9,5 l9,5'), '#3a1a0a', 3); else { eye(-12, 1, 8); eye(16, -1, 6.4); }
  F(PL([2, -40, 7, -32, -2, -32]), '#ffe07a', '#ffb030');
  const mo = o.mood === 3 ? 10 : o.mood === 2 ? 5 : 2; const teeth = SP(`M-24,-26 L-20,-30 L-16,-23 L-11,-30 L-7,-22 L-2,-30 L2,-21 L7,-30 L11,-22 L16,-30 L20,-24 L26,-28 Q18,${-14 + mo} 2,${-12 + mo} Q-16,${-13 + mo} -24,-26Z`); F(teeth, '#ffe07a', '#ffb030');
  for (const x of [-14, -4, 6, 16]) F(PL([x, -12 + mo - 1, x + 2.4, -18 + mo, x + 4.6, -12 + mo]), pk);
  g.restore();
  for (const [x, y, a, d] of [[-30, -40, -2.6, -1], [34, -34, -.5, 1]]) { const ext = (u < 0 && d > 0) ? -u * 22 : 0, pts = []; for (let i = 0; i <= 8; i++) { const k = i / 8; pts.push([x + Math.cos(a + Math.sin(o.t * 2 + i * .6) * .3 * k) * (24 + ext) * k + d * Math.sin(k * 5 + o.t) * 3, y + Math.sin(a) * (24 + ext) * k - Math.sin(k * Math.PI) * 6]); }
    const v = SP('M' + pts.map(q => q.join(',')).join(' L')); L(v, '#2a4a1a', 5); L(v, '#4a7a2a', 3); for (let i = 2; i < 8; i += 2) F(PL([pts[i][0], pts[i][1] - 1, pts[i][0] + 2, pts[i][1] - 5, pts[i][0] + 3, pts[i][1] - 1]), '#2a4a1a'); const e = pts[8]; L(SP(`M${e[0]},${e[1]} q${d * 6},-2 ${d * 4},-8 q${-d * 3},-2 ${-d * 4},2`), '#4a7a2a', 2); }
}
Object.assign(DRAW, { kraken: krakenD, zucca: zuccaD });
