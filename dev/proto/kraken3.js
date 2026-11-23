function krakenD(o) {                                           // il Kraken: calamaro mostruoso, corpo a siluro inclinato con le pinne in punta, occhio enorme, braccia corte e due tentacoli lunghissimi da caccia con la clava uncinata
  const sk = '#b8343a', sd = dk(sk, .35), bel = '#f0b0a0', u = o.u, w = o.walking ? 1 : 0, b = Math.sin(o.t * 1.6) * 2 + (w ? -Math.abs(Math.sin(o.ph * .8)) * 3 : 0), shoot = u < 0 ? -u : 0, coil = u > 0 ? u : 0;
  for (let i = 0; i < 3; i++) { const k = (o.t * .8 + i / 3) % 1; g.save(); g.globalAlpha = (1 - k) * .7; L(E(0, 0, 30 + k * 30, 5 + k * 5), '#bfe8ff', 1.6); g.restore(); }
  F(E(0, 0, 50, 8), 'rgba(40,110,160,.55)'); L(E(0, 0, 50, 8), '#8ad0f0', 1.6);
  for (let i = 0; i < 4; i++) tentacle(-6 + i * 5, -28 + b, 2.2 - i * .28 + Math.sin(o.t * 1.6 + i) * .08, 30 - i * 2, 4.4, o.t * 2 + i, sd, 1);
  g.save(); g.translate(0, b); g.rotate(-.1 - coil * .18 + shoot * .12 + Math.sin(o.t * 1.2) * .03);
  const fw = Math.sin(o.t * 4) * 4;
  for (const [sx, c] of [[-1, sd], [1, sk]]) { const p = SP(`M-26,-116 Q${-26 + sx * 26},${-118 + fw * sx} ${-22 + sx * 30},${-100 + fw} Q${-22 + sx * 8},${-104} -16,-96Z`); V(p, c, -22 + sx * 12, -106, 16, 1.8); L(SP(`M-24,-110 Q${-22 + sx * 16},${-108 + fw * sx * .5} ${-22 + sx * 24},${-102 + fw}`), lt(c, .2), 1); }
  const man = SP('M-6,-30 Q-26,-40 -32,-70 Q-38,-104 -28,-132 Q-22,-142 -18,-132 Q-6,-104 6,-76 Q14,-52 12,-34 Q4,-26 -6,-30Z'); V(man, sk, -12, -80, 40);
  g.save(); g.clip(man); F(SP('M-4,-30 Q8,-50 4,-80 Q-6,-110 -20,-136 L-10,-136 Q8,-100 16,-70 Q18,-40 12,-28Z'), bel);
  for (let i = 0; i < 14; i++) { const t2 = i / 14, x = -10 - t2 * 18 + Math.sin(i * 2.3) * 6, y = -40 - t2 * 88, r = 2.6 - t2 * 1.2, k = .5 + .5 * Math.sin(o.t * 3 + i * 1.7); F(E(x, y, r, r * .8), `rgba(${110 + k * 90},20,${40 + k * 60},${.6 + k * .3})`); }
  L(SP('M-22,-112 Q-14,-80 -4,-50'), sd, 1.6); g.restore();
  const hd = SP('M-8,-38 Q-6,-54 8,-56 Q20,-54 22,-40 Q22,-28 12,-24 Q0,-22 -6,-28 Q-10,-32 -8,-38Z'); V(hd, sk, 6, -40, 18);
  g.save(); g.clip(hd); F(SP('M-8,-30 Q6,-24 22,-32 L22,-20 L-8,-20Z'), bel); g.restore();
  V(SP('M-6,-34 Q-14,-30 -16,-24 Q-10,-24 -4,-28Z'), sd, -10, -28, 5, 1.2);
  g.save(); g.translate(10, -42); g.rotate(o.mood === 4 ? .2 : 0);
  const bl = o.blink < .5;
  if (o.mood === 4) L(SP('M-8,-2 Q0,2 8,-2 Q0,0 -8,4'), INK, 2.6);
  else { const ey = E(0, 0, 9, bl ? 1.4 : 8.4); L(ey, INK, 2.8); F(ey, '#f8e070'); if (!bl) { g.save(); g.clip(ey); const ps = o.mood === 3 ? 3 : o.mood === 2 ? 4 : 5.4; F(E(2.4, 0, ps, ps * 1.1), INK); F(E(-2, -3, 2, 2), '#fff'); F(E(4, 3, 1, 1), 'rgba(255,255,255,.6)'); const a = o.mood === 0 ? .1 : .5; F(PL([-12, -12, 12, -12, 12, -6 - a * 6, -12, -6 + a * 4]), sk); L(SP(`M-12,${-6 + a * 4} L12,${-6 - a * 6}`), INK, 2); g.restore(); } }
  L(SP('M-11,-10 Q0,-15 12,-11'), sd, 3);
  g.restore();
  g.restore();
  const op = o.mood === 3 ? .6 : o.mood === 2 ? .25 : .08;
  g.save(); g.translate(18, -24 + b); V(SP('M-4,0 Q2,-6 8,-2 L2,4Z'), '#1a1018', 2, -1, 5, 1.2); g.rotate(op); V(SP('M-4,1 Q2,6 8,2 L2,-2Z'), '#2a1a20', 2, 2, 5, 1.2); g.restore();
  for (let i = 0; i < 2; i++) {
    const len = 46 + shoot * 70 - coil * 12, base = .1 - i * .32 - shoot * .25 + coil * -.6, curl = shoot ? .15 : 1.5 + coil;
    const e = tentacle(16, -24 + b + i * 3, base, len, 3.2, o.t * 2.2 + i * 2, i ? sd : sk, curl);
    g.save(); g.translate(e[0], e[1]); g.rotate(base + (shoot ? 0 : Math.sin(o.t * 2 + i) * .6));
    const club = SP('M-2,-4 Q8,-8 16,-3 Q19,0 16,3 Q8,8 -2,4Z'); V(club, i ? sd : sk, 7, 0, 10, 1.6);
    for (let k = 0; k < 4; k++) { F(E(2 + k * 3.6, 0, 1.4, 1.4), bel); L(SP(`M${2 + k * 3.6},1.4 l1,2`), '#fffdf4', .9); }
    g.restore();
  }
  for (let i = 0; i < 4; i++) tentacle(8 + i * 4, -22 + b, 1.35 - i * .22 + Math.sin(o.t * 1.8 + i) * .08, 28 + (i % 2) * 6, 5, o.t * 2.4 + i * 1.3, sk, 1);
}
Object.assign(DRAW, { kraken: krakenD });
