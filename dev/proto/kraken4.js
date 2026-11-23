function krakenD(o) {                                           // il Kraken: mostro marino che emerge dalla pozza — collo da serpente marino con cresta, testa da leviatano a fauci aperte, gobba e coda che affiorano, tentacoli che escono dall'acqua
  const sk = '#2e6b78', sd = dk(sk, .35), bel = '#dccf96', fin = '#c4463e', bone = '#ece2c4', u = o.u, m = o.mood, w = o.walking ? 1 : 0;
  const shoot = u < 0 ? -u : 0, coil = u > 0 ? u : 0, hurt = m === 4 ? 1 : 0, sw = Math.sin(o.t * 1.5);
  const b = sw * 2 + (w ? Math.sin(o.ph * 1.6) * 2.5 : 0) + hurt * 6;
  // acqua: cerchi che si allargano e pozza scura
  for (let i = 0; i < 3; i++) { const k = (o.t * .7 + i / 3) % 1; g.save(); g.globalAlpha = (1 - k) * .7; L(E(0, 0, 40 + k * 34, 7 + k * 6), '#bfe8ff', 1.6); g.restore(); }
  F(E(0, 0, 58, 10), 'rgba(18,58,92,.85)');
  // coda che affiora dietro e sbatte
  g.save(); g.translate(-50, 0); g.rotate(-.5 + Math.sin(o.t * 2.4) * .25);
  const tl = SP('M-4,2 Q-6,-14 -2,-22 Q-14,-34 -22,-30 Q-12,-26 -8,-20 Q-16,-18 -20,-8 Q-8,-14 2,-16 Q6,-6 6,2Z'); V(tl, fin, -6, -16, 16, 1.6);
  L(SP('M0,-14 L-18,-28 M0,-14 L-16,-10'), dk(fin, .35), 1.2); g.restore();
  // gobba che affiora con le spine
  const hh = 22 + Math.sin(o.t * 1.5 + 1.4) * 4 + w * Math.sin(o.ph * 1.6 + 1) * 3;
  for (let i = 0; i < 4; i++) { const a = Math.PI + .5 + i * .7, x = -28 + Math.cos(a) * 15, y = 2 - hh + 8 + Math.sin(a) * 8; g.save(); g.translate(x, y); g.rotate(a + Math.PI / 2 - Math.PI / 2); V(PL([-4, 2, 0, -12, 4, 2]), fin, 0, -4, 6, 1.2); g.restore(); }
  const hump = SP(`M-45,3 Q-44,${-hh} -28,${-hh - 2} Q-12,${-hh} -11,3 L-18,3 Q-19,${-hh + 11} -28,${-hh + 9} Q-37,${-hh + 11} -38,3Z`); V(hump, sk, -28, -hh + 4, 20, 1.8);
  F(E(-34, -hh + 4, 2.2, 1.8), bone); F(E(-24, -hh + 2, 1.6, 1.3), bone);
  // tentacolo dietro
  tentacle(-14, 3, -1.95 - coil * .3 + shoot * .4, 46 + shoot * 8, 5, o.t * 2 + 1, sd, 1.2);
  // collo a S: dalla pozza alla testa
  const hx = 18 + sw * 3 + shoot * 30 - coil * 18 - hurt * 12 + (w ? Math.sin(o.ph * 1.6) * 3 : 0), hy = -100 + b + shoot * 24 - coil * 10 + hurt * 4;
  const P = [[-6, 6], [-26, -40 + b * .5], [hx - 30 + shoot * 6, hy - 8 - shoot * 10 + hurt * 10], [hx, hy]];
  const bz = (t, k) => (1 - t) ** 3 * P[0][k] + 3 * (1 - t) ** 2 * t * P[1][k] + 3 * (1 - t) * t * t * P[2][k] + t ** 3 * P[3][k];
  const N = 16, pts = []; for (let i = 0; i <= N; i++) { const t = i / N; pts.push([bz(t, 0), bz(t, 1), 17 - 6 * t]); }
  const nrm = i => { const n = pts[Math.min(N, i + 1)], p = pts[Math.max(0, i - 1)]; return Math.atan2(n[1] - p[1], n[0] - p[0]) - Math.PI / 2; };
  const off = (i, k) => { const a = nrm(i); return [pts[i][0] + Math.cos(a) * k, pts[i][1] + Math.sin(a) * k]; };
  // cresta dorsale (lato dietro del collo)
  const cr = new Path2D(); let q = off(1, pts[1][2] - 2); cr.moveTo(q[0], q[1]);
  for (let i = 2; i < N - 1; i++) { const t = off(i, pts[i][2] + 9 + Math.sin(o.t * 4 + i) * 1.6 - (i % 2) * 6); cr.lineTo(t[0], t[1]); }
  q = off(N - 1, pts[N - 1][2] - 2); cr.lineTo(q[0], q[1]); cr.closePath(); V(cr, fin, pts[8][0] - 10, pts[8][1], 40, 1.6);
  for (let i = 2; i < N - 1; i += 2) { const a = off(i, pts[i][2]), t = off(i, pts[i][2] + 8); L(SP(`M${a[0]},${a[1]} L${t[0]},${t[1]}`), dk(fin, .4), 1.2); }
  const nk = new Path2D(); for (let i = 0; i <= N; i++) { const t = off(i, pts[i][2]); i ? nk.lineTo(t[0], t[1]) : nk.moveTo(t[0], t[1]); }
  for (let i = N; i >= 0; i--) { const t = off(i, -pts[i][2]); nk.lineTo(t[0], t[1]); } nk.closePath();
  V(nk, sk, pts[8][0] - 6, pts[8][1], 46, 2);
  g.save(); g.clip(nk);
  const bl2 = new Path2D(); for (let i = 0; i <= N; i++) { const t = off(i, -pts[i][2] * .2); i ? bl2.lineTo(t[0], t[1]) : bl2.moveTo(t[0], t[1]); }
  for (let i = N; i >= 0; i--) { const t = off(i, -pts[i][2] - 4); bl2.lineTo(t[0], t[1]); } bl2.closePath(); F(bl2, bel);
  for (let i = 1; i < N; i++) { const a = off(i, -pts[i][2] * .2), t = off(i, -pts[i][2] - 2); L(SP(`M${a[0]},${a[1]} L${t[0]},${t[1]}`), dk(bel, .3), 1.1); }
  for (let i = 2; i < N - 1; i += 1) { const t = off(i, pts[i][2] * (.3 + (i % 3) * .2)); F(E(t[0], t[1], 1.6, 1.3), lt(sk, .25)); }
  g.restore();
  for (const i of [3, 6, 10]) { const t = off(i, pts[i][2] * .55); F(E(t[0], t[1], 2.6, 2.2), bone); L(E(t[0], t[1], 2.6, 2.2), dk(bone, .4), .9); F(E(t[0], t[1], .9, .9), INK); }
  // testa da leviatano
  const ang = Math.atan2(hy - P[2][1], hx - P[2][0]) * .7 - hurt * .45 - coil * .25 + shoot * .1;
  const jo = m === 3 ? .75 : m === 2 ? .12 : m === 4 ? .4 : w ? .3 : .2 + sw * .05;
  g.save(); g.translate(hx, hy); g.rotate(ang);
  for (let i = 0; i < 4; i++) { const a = 2.3 + i * .45 + Math.sin(o.t * 3 + i) * .06; g.save(); g.translate(-8, -6); g.rotate(a); V(SP('M0,-4 Q14,-7 22,0 Q14,7 0,4Z'), i % 2 ? dk(fin, .15) : fin, 10, 0, 12, 1.3); L(SP('M2,0 L20,0'), dk(fin, .4), 1); g.restore(); }
  V(SP('M-4,-22 Q-18,-38 -34,-42 Q-22,-32 -10,-18Z'), dk(bone, .2), -16, -30, 12, 1.4);
  g.save(); g.translate(-6, 0); g.rotate(jo);
  F(PL([0, -2, 34, -4, 34, 2, 0, 6]), '#5a1424');
  const lj = SP('M0,0 L36,0 Q41,4 35,9 Q16,15 0,9Z'); V(lj, sk, 18, 6, 18, 1.8);
  g.save(); g.clip(lj); F(SP('M0,7 Q18,13 36,6 L38,14 L0,14Z'), bel); g.restore();
  for (let i = 0; i < 6; i++) { const x = 8 + i * 4.6, hgt = i === 5 ? 9 : 5 + (i % 2) * 2; const t = PL([x, 1, x + 2, -hgt, x + 4, 1]); F(t, '#fffaea'); L(t, INK, .8); }
  F(E(26, 3, 5, 1.6), '#c84a5a');
  g.restore();
  F(PL([-6, 0, 36, -4, 30, 4]), '#3a0c18');
  const sku = SP('M-14,-6 Q-12,-24 4,-28 Q22,-30 34,-18 Q44,-10 43,-3 Q30,1 -4,2 Q-12,2 -14,-6Z'); V(sku, sk, 10, -14, 26, 2);
  g.save(); g.clip(sku); F(SP('M6,-28 Q26,-28 44,-10 L44,-6 Q24,-22 4,-24Z'), lt(sk, .18)); for (let i = 0; i < 5; i++) F(E(22 + i * 4, -18 + i * 2.4, 1.4, 1), lt(sk, .3)); g.restore();
  for (let i = 0; i < 7; i++) { const x = 6 + i * 5, hgt = i === 6 || i === 2 ? 10 : 5 + (i % 2) * 2.5; const t = PL([x, -1, x + 2.2, hgt - 1, x + 4.4, -1]); F(t, '#fffaea'); L(t, INK, .8); }
  V(SP('M2,-24 Q-10,-42 -26,-48 Q-14,-36 -6,-20Z'), bone, -10, -34, 12, 1.4); L(SP('M-4,-30 l4,-2 M-10,-36 l3,-3 M-16,-41 l2,-3'), dk(bone, .4), 1);
  for (let i = 0; i < 3; i++) L(SP(`M${-6 + i * 4},-14 Q${-4 + i * 4},-8 ${-6 + i * 4},-3`), sd, 1.4);
  F(E(39, -11, 1.8, 1.1, .4), INK);
  if (m === 4) { L(SP('M8,-19 Q14,-14 21,-19'), INK, 2.6); L(SP('M9,-14 l-3,3 M20,-14 l3,3'), INK, 1.4); }
  else {
    glowB(15, -16, 16, m >= 2 ? 'rgba(255,120,60,.55)' : 'rgba(190,255,110,.45)');
    V(E(15, -16, 7.4, 6.2), sd, 15, -16, 7, 1); const ey = E(15, -16, 5.6, m === 2 ? 3.2 : 4.6); F(ey, m >= 2 ? '#ffb43a' : '#d8ff6a');
    g.save(); g.clip(ey); F(E(16.4, -16, m === 3 ? 1 : 1.5, 4.2), INK); F(E(13, -18, 1.4, 1.2), '#fff'); g.restore(); L(ey, INK, 1.4);
  }
  L(SP(`M5,${m >= 2 ? -21 : -22} Q14,${m >= 2 ? -27 : -26} 25,${m >= 2 ? -18 : -20}`), sd, 3.6);
  V(PL([10, -25, 16, -34, 20, -24]), fin, 15, -27, 5, 1.1);
  g.restore();
  // acqua che gocciola dalle fauci
  const cx = hx + Math.cos(ang) * 32 - Math.sin(ang) * 6, cy = hy + Math.sin(ang) * 32 + Math.cos(ang) * 8;
  for (let k = 0; k < 3; k++) { const p = (o.t * 1.1 + k / 3) % 1; g.save(); g.globalAlpha = 1 - p; const dy = cy + p * (-cy - 4); F(SP(`M${cx + k * 3},${dy - 3} Q${cx + k * 3 + 2},${dy + 1} ${cx + k * 3},${dy + 2} Q${cx + k * 3 - 2},${dy + 1} ${cx + k * 3},${dy - 3}Z`), '#bfe8ff'); g.restore(); }
  // tentacoli davanti che escono dall'acqua
  tentacle(30, 4, -1.25 + shoot * .9 - coil * .5 + Math.sin(o.t * 1.7) * .1, 50 + shoot * 18 - coil * 6, 6, o.t * 2.2, sk, shoot ? .5 : 1.3 + coil);
  tentacle(42, 4, -1.0 + shoot * .6 + Math.sin(o.t * 2 + 1) * .12, 30 + shoot * 10, 4.4, o.t * 2.6 + 2, sd, 1.1);
  // bordo dell'acqua davanti: copre la base del collo, schiuma attorno a ciò che emerge
  g.save(); g.clip(E(0, 0, 58, 10));
  let wv = 'M-60,14 L-60,0'; for (let x = -60; x <= 60; x += 6) wv += ` L${x},${.6 + Math.sin(x * .3 + o.t * 4) * 1.1}`; wv += ' L60,14Z';
  F(SP(wv), 'rgba(34,92,136,.94)'); L(SP('M-40,5 Q-20,3 0,6 M14,6 Q30,4 44,6'), 'rgba(190,232,255,.5)', 1.2); g.restore();
  L(E(0, 0, 58, 10), '#8ad0f0', 1.8);
  for (const [x, r] of [[-6, 14], [-28, 11], [30, 6], [42, 5], [-14, 5], [-50, 5]]) for (let i = 0; i < 4; i++) F(E(x - r + i * r * .66, 1 + Math.sin(o.t * 5 + i + x) * .8, 2.4 + (i % 2), 1.6), 'rgba(240,250,255,.9)');
  if (shoot || m === 3) for (let i = 0; i < 6; i++) { const a = -Math.PI * (.15 + i * .14), r = 10 + shoot * 26; F(E(36 + Math.cos(a) * r, 2 + Math.sin(a) * r * .8, 2, 2), '#d8f2ff'); }
}
Object.assign(DRAW, { kraken: krakenD });
