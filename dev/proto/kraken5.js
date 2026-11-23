function tentO(x0, y0, a0, len, w0, bend, ph, col, under) {      // tentacolo da polpo gigante: si arriccia in punta, ventose sul lato interno della curva
  const n = 16, pts = []; let a = a0, x = x0, y = y0;
  for (let i = 0; i <= n; i++) { const t = i / n; pts.push([x, y, w0 * Math.pow(1 - t, .85) + .6, a]); a += bend * Math.pow(t, 1.4) * .32 + Math.sin(ph + i * .5) * .07; x += Math.cos(a) * len / n; y += Math.sin(a) * len / n; }
  const sd = bend >= 0 ? 1 : -1, side = (i, k) => { const q = pts[i], aa = q[3] + sd * Math.PI / 2; return [q[0] + Math.cos(aa) * q[2] * k, q[1] + Math.sin(aa) * q[2] * k]; };
  const p = new Path2D(); for (let i = 0; i <= n; i++) { const s = side(i, -1); i ? p.lineTo(s[0], s[1]) : p.moveTo(s[0], s[1]); }
  for (let i = n; i >= 0; i--) { const s = side(i, 1); p.lineTo(s[0], s[1]); } p.closePath();
  V(p, col, x0, y0 - len * .3, len * .6, 1.9);
  g.save(); g.clip(p); const u2 = new Path2D(); for (let i = 0; i <= n; i++) { const s = side(i, .25); i ? u2.lineTo(s[0], s[1]) : u2.moveTo(s[0], s[1]); } for (let i = n; i >= 0; i--) { const s = side(i, 1.4); u2.lineTo(s[0], s[1]); } u2.closePath(); F(u2, under); g.restore();
  for (let i = 1; i < n - 1; i++) { const s = side(i, .62), r = pts[i][2] * .34; if (r < .9) break; F(E(s[0], s[1], r, r), lt(under, .3)); L(E(s[0], s[1], r, r), dk(under, .35), .9); F(E(s[0], s[1], r * .4, r * .4), dk(under, .3)); }
  return pts[n];
}
function krakenD(o) {                                           // il Kraken: polpo mostruoso gigante che emerge dalla pozza — testa enorme a sacco piena di verruche e vene, occhi gialli a pupilla orizzontale, otto tentacoli che si arricciano; niente bocca
  const sk = '#8a2d52', sd = dk(sk, .3), und = '#eeb0a2', u = o.u, m = o.mood, w = o.walking ? 1 : 0;
  const shoot = u < 0 ? -u : 0, coil = u > 0 ? u : 0, hurt = m === 4 ? 1 : 0, sw = Math.sin(o.t * 1.4);
  const b = sw * 2.4 + (w ? -Math.abs(Math.sin(o.ph * 1.6)) * 4 : 0) + hurt * 8;
  for (let i = 0; i < 3; i++) { const k = (o.t * .7 + i / 3) % 1; g.save(); g.globalAlpha = (1 - k) * .7; L(E(0, 0, 44 + k * 34, 7 + k * 6), '#bfe8ff', 1.6); g.restore(); }
  F(E(0, 0, 68, 11), 'rgba(18,58,92,.85)');
  // tentacoli dietro (più scuri)
  tentO(-46, 4, -1.95 - coil * .25 + Math.sin(o.t * 1.3) * .08, 82 - hurt * 14, 8.4, -2.4 - coil * .8, o.t * 2, sd, dk(und, .2));
  tentO(40, 4, -1.5 - coil * .2 + Math.sin(o.t * 1.5 + 1) * .08, 76 - hurt * 12, 8, -2.6 - coil * .6, o.t * 2 + 2, sd, dk(und, .2));
  // testa a sacco, inclinata all'indietro
  g.save(); g.translate(0, b); g.rotate(-.06 + sw * .03 - coil * .1 + shoot * .1 + hurt * .12);
  const hd = SP('M-30,4 Q-30,-22 -40,-48 Q-56,-88 -44,-118 Q-30,-146 -2,-140 Q24,-132 26,-100 Q28,-76 24,-62 Q34,-44 30,-24 Q28,-6 32,4Z');
  V(hd, sk, -14, -86, 64, 2.4);
  g.save(); g.clip(hd);
  F(SP('M8,-136 Q30,-120 26,-90 Q22,-70 30,-40 Q34,-14 32,6 L40,6 L40,-140Z'), dk(sk, .18));
  for (let i = 0; i < 16; i++) { const x = -40 + (i * 37 % 60), y = -128 + (i * 23 % 110), k = .5 + .5 * Math.sin(o.t * 2.6 + i * 1.9), r = 2 + (i % 3); F(E(x, y, r, r * .8), `rgba(${80 + k * 70},14,${50 + k * 40},${.35 + k * .35})`); }
  L(SP('M-20,-60 Q-28,-84 -24,-108 M-24,-90 Q-34,-98 -36,-112 M-24,-84 Q-12,-100 -10,-122 M-6,-70 Q2,-90 4,-112'), 'rgba(60,8,40,.45)', 1.6);
  L(SP('M-38,-104 Q-20,-126 6,-128'), 'rgba(255,220,230,.35)', 4);
  g.restore();
  for (const [x, y, r] of [[-30, -100, 4.4], [-14, -122, 3.6], [6, -116, 3], [-38, -76, 3.2], [-22, -86, 2.6], [12, -94, 2.6], [-4, -100, 2.2], [-34, -56, 2.6], [16, -76, 2], [-26, -32, 2.4]]) { const wp = E(x, y, r, r * .85); V(wp, lt(sk, .14), x, y, r, 1); F(E(x - r * .3, y - r * .35, r * .3, r * .25), 'rgba(255,230,240,.6)'); }
  V(SP('M-46,-82 Q-54,-84 -54,-74 Q-50,-70 -44,-72Z'), lt(sk, .1), -50, -78, 6, 1.4);
  // occhi enormi da polpo, pupilla orizzontale (nessuna bocca)
  const eye = (x, y, rx, ry, far) => {
    V(E(x, y, rx + 4, ry + 4), far ? dk(sk, .12) : sk, x - 1, y - 2, rx + 4, 1.8);
    if (m === 4) { L(SP(`M${x - rx},${y} Q${x},${y + ry * .6} ${x + rx},${y}`), INK, 2.6); L(SP(`M${x - rx + 1},${y - 3} l-3,-3 M${x + rx - 1},${y - 3} l3,-3`), INK, 1.4); return; }
    if (m >= 2) glowB(x, y, rx * 2.4, 'rgba(255,200,60,.5)');
    const ey = E(x, y, rx, ry); F(ey, '#ffd23a'); g.save(); g.clip(ey);
    F(E(x + rx * .55, y + ry * .45, rx * .9, ry * .8), 'rgba(200,110,0,.45)');
    const ph = m === 3 ? 1.1 : m === 2 ? 1.5 : 2.1 - (o.blink < .5 ? 2 : 0) * 0, pw = rx * (m === 3 ? .5 : .62);
    g.save(); g.translate(x + rx * .12, y + ry * .1); F(SP(`M${-pw},0 Q${-pw},${-ph} 0,${-ph} Q${pw},${-ph} ${pw},0 Q${pw},${ph} 0,${ph} Q${-pw},${ph} ${-pw},0Z`), INK); g.restore();
    F(E(x - rx * .4, y - ry * .45, rx * .22, ry * .2), '#fff');
    const lid = m === 2 ? .55 : m === 3 ? .2 : .35 + (o.blink < .5 ? .6 : 0);
    F(PL([x - rx - 2, y - ry - 2, x + rx + 2, y - ry - 2, x + rx + 2, y - ry + ry * 2 * lid * .7, x - rx - 2, y - ry + ry * 2 * lid * 1.15]), sd);
    L(SP(`M${x - rx - 1},${y - ry + ry * 2 * lid * 1.15} L${x + rx + 1},${y - ry + ry * 2 * lid * .7}`), INK, 1.8);
    g.restore(); L(ey, INK, 2);
  };
  eye(-14, -50, 7, 6.4, 1);
  eye(14, -46, 10.5, 9.6, 0);
  L(SP('M2,-62 Q14,-66 28,-58'), sd, 4); L(SP('M-22,-62 Q-14,-66 -6,-61'), sd, 3);
  g.restore();
  // tentacoli davanti che escono dall'acqua
  tentO(-34, 5, -2.25 - coil * .2 + Math.sin(o.t * 1.6) * .1, 62 - hurt * 12, 9.6, 2.2 + coil * .8, o.t * 2.2 + 1, sk, und);
  tentO(4, 7, -1.85 + Math.sin(o.t * 1.9 + 2) * .1, 40 - hurt * 6, 9, -3.2, o.t * 2.4 + 3, sk, und);
  tentO(22, 6, shoot ? -.35 : -1.25 - coil * .45 + Math.sin(o.t * 1.4 + .5) * .1, 70 + shoot * 34 - hurt * 14, 10.4, shoot ? .5 : 2.4 + coil * 1.2, o.t * 2 + .5, sk, und);
  tentO(46, 6, shoot ? -.1 : -.75 - coil * .35 + Math.sin(o.t * 1.7 + 4) * .1, 52 + shoot * 26 - hurt * 10, 8.6, shoot ? .3 : 2.8 + coil, o.t * 2.3 + 4, sk, und);
  // bordo dell'acqua davanti con la schiuma
  g.save(); g.clip(E(0, 0, 68, 11));
  let wv = 'M-70,14 L-70,0'; for (let x = -70; x <= 70; x += 6) wv += ` L${x},${.8 + Math.sin(x * .3 + o.t * 4) * 1.1}`; wv += ' L70,14Z';
  F(SP(wv), 'rgba(34,92,136,.94)'); L(SP('M-46,6 Q-24,4 -2,7 M14,7 Q32,5 50,7'), 'rgba(190,232,255,.5)', 1.2); g.restore();
  L(E(0, 0, 68, 11), '#8ad0f0', 1.8);
  for (const [x, r] of [[0, 26], [-46, 7], [40, 7], [-34, 8], [22, 9], [46, 7], [4, 8]]) for (let i = 0; i < 4; i++) F(E(x - r + i * r * .66, 1.4 + Math.sin(o.t * 5 + i + x) * .8, 2.4 + (i % 2), 1.6), 'rgba(240,250,255,.9)');
  for (let i = 0; i < 4; i++) { const k = (o.t * .9 + i / 4) % 1; g.save(); g.globalAlpha = 1 - k; L(E(-50 + i * 30, -k * 26, 2 + i % 2, 2 + i % 2), '#d8f2ff', 1.2); g.restore(); }
  if (shoot || m === 3) for (let i = 0; i < 7; i++) { const a = -Math.PI * (.12 + i * .12), r = 12 + shoot * 30; F(E(52 + Math.cos(a) * r, 2 + Math.sin(a) * r * .8, 2.2, 2.2), '#d8f2ff'); }
}
Object.assign(DRAW, { kraken: krakenD });
