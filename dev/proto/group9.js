// ---------- gruppo 9: leggendari (1) ----------
function ribbon(P, w0, w1, col, belly, bs = -1, n = 18) {        // corpo morbido lungo una curva (serpenti, code): contorno pulito, pancia a scaglie su un lato
  const pts = []; for (let i = 0; i <= n; i++) { const q = bez(P[0], P[1], P[2], P[3], i / n); pts.push([q[0], q[1], w0 + (w1 - w0) * i / n]); }
  const nr = i => { const a = pts[Math.min(n, i + 1)], b = pts[Math.max(0, i - 1)]; return Math.atan2(a[1] - b[1], a[0] - b[0]) - Math.PI / 2; };
  const off = (i, k) => { const a = nr(i); return [pts[i][0] + Math.cos(a) * k, pts[i][1] + Math.sin(a) * k]; };
  const p = new Path2D(); for (let i = 0; i <= n; i++) { const t = off(i, pts[i][2]); i ? p.lineTo(t[0], t[1]) : p.moveTo(t[0], t[1]); }
  for (let i = n; i >= 0; i--) { const t = off(i, -pts[i][2]); p.lineTo(t[0], t[1]); } p.closePath();
  const mm = pts[n >> 1]; V(p, col, mm[0], mm[1], Math.hypot(P[3][0] - P[0][0], P[3][1] - P[0][1]) * .5 + 8, 2);
  if (belly) { g.save(); g.clip(p); const q = new Path2D(); for (let i = 0; i <= n; i++) { const t = off(i, bs * pts[i][2] * .15); i ? q.lineTo(t[0], t[1]) : q.moveTo(t[0], t[1]); } for (let i = n; i >= 0; i--) { const t = off(i, bs * (pts[i][2] + 3)); q.lineTo(t[0], t[1]); } q.closePath(); F(q, belly);
    for (let i = 1; i < n; i++) { const a = off(i, bs * pts[i][2] * .15), c = off(i, bs * (pts[i][2] + 2)); L(SP(`M${a[0]},${a[1]} L${c[0]},${c[1]}`), dk(belly, .3), 1); } g.restore(); }
  return { p, pts, off };
}
function ik(sx, sy, hx, hy, l1, l2, bs = 1) {                   // gomito (o ginocchio) per arrivare a un punto: braccia che seguono davvero l'arma
  const dx = hx - sx, dy = hy - sy, d = Math.max(1, Math.min(Math.hypot(dx, dy), l1 + l2 - .01)), a = Math.atan2(dy, dx), c = Math.acos(Math.max(-1, Math.min(1, (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d))));
  return [sx + Math.cos(a + bs * c) * l1, sy + Math.sin(a + bs * c) * l1];
}
function armTo(sx, sy, hx, hy, l1, l2, w1, w2, w3, col, bs = 1) { const e = ik(sx, sy, hx, hy, l1, l2, bs); taper(sx, sy, e[0], e[1], w1, w2, col); taper(e[0], e[1], hx, hy, w2, w3, col); return e; }

function tremotinoD(o) {                                        // Tremotino: ometto gobbo e saltellante, nasone a uncino, barba rossiccia fino alle ginocchia, orecchie a sventola, cappello floscio, fuso d'oro che gira e fila oro
  const sk = '#e2b48c', coat = '#6e5a2a', hat = '#a8322a', brd = '#c86a2a', gold = '#f4c43a', u = o.u, m = o.mood, w = o.walking ? 1 : 0;
  const hop = w ? -Math.abs(Math.sin(o.ph * 1.3)) * 8 : Math.sin(o.t * 3) * .8, wob = w ? Math.sin(o.ph * 1.3) * .08 : Math.sin(o.t * 2) * .03, spin = o.t * (m >= 2 ? 16 : 4);
  const shoe = (f, col) => { V(SP(`M${f[0] - 3},${f[1] - 3} Q${f[0] + 6},${f[1] - 5} ${f[0] + 10},${f[1] - 3} Q${f[0] + 14},${f[1] - 6} ${f[0] + 13},${f[1] - 10} Q${f[0] + 17},${f[1] - 6} ${f[0] + 13},${f[1]} Q${f[0] + 6},${f[1] + 1.4} ${f[0] - 3},${f[1] + 1}Z`), col, f[0] + 4, f[1] - 3, 8, 1.4); F(E(f[0] + 13, f[1] - 10, 1.4, 1.4), gold); };
  g.save(); g.translate(0, hop); g.rotate(wob);
  shoe(legB(-3, -22, 10, 10, 3, 2.2, 1.8, o, Math.PI, '#3e3456', 1), '#5a2a1a');
  const hb = limb(-4, -38, 2.1 + (w ? Math.sin(o.ph * 1.3) * .5 : 0) - u * .4, 9, -.5, 8, 2.8, 2.2, 1.8, dk(coat, .25)); V(E(hb[0], hb[1], 2.6, 2.4), dk(sk, .12), hb[0], hb[1], 3, 1.2);
  const body = SP('M-9,-20 Q-17,-32 -11,-43 Q-2,-49 8,-42 Q13,-32 9,-20 Q0,-17 -9,-20Z'); V(body, coat, -2, -32, 16);
  g.save(); g.clip(body); const pt = SP('M-6,-36 L2,-35 L2,-28 L-6,-29Z'); F(pt, '#9a8a4a'); L(pt, '#3a2a10', .8); L(SP('M-6,-33 l2,0 M-6,-31 l2,0 M0,-35 l0,2'), '#f0e0b0', .7); F(SP('M-14,-24 L14,-24 L14,-20 L-14,-20Z'), '#3a2414'); g.restore();
  V(SP('M0,-24.4 L5,-24.4 L5,-19.6 L0,-19.6Z'), gold, 2, -22, 3, .8);
  shoe(legB(3, -22, 10, 10, 3.2, 2.4, 2, o, 0, '#4a4068', 1), '#6a3020');
  g.save(); g.translate(7, -50); g.rotate((m === 3 ? -.12 : m === 4 ? .25 : 0) + Math.sin(o.t * 2.4) * .04);
  V(SP('M-6,-3 Q-21,-13 -20,2 Q-16,6 -7,4Z'), sk, -12, -2, 9, 1.6); L(SP('M-9,-1 Q-15,-5 -16,1'), dk(sk, .3), 1.2);
  const face = SP('M-8,-5 Q-9,-15 1,-15 Q10,-14 10,-5 Q11,3 6,7 Q-4,9 -8,-5Z'); V(face, sk, 1, -4, 12);
  L(SP('M-3,-12 Q1,-13 4,-12 M-2,-10 Q1,-11 3,-10'), dk(sk, .25), .8);
  const bw = Math.sin(o.t * 2.6) * 2 + (w ? Math.sin(o.ph * 1.3) * 2 : 0);
  const beard = SP(`M-7,0 Q-2,6 5,6 Q11,4 12,1 Q13,12 10,22 Q${8 + bw},32 ${4 + bw},40 Q${2 + bw},33 0,29 Q${-2 + bw},36 ${-7 + bw},38 Q-7,28 -9,18 Q-11,8 -7,0Z`); V(beard, brd, 2, 18, 22, 1.8);
  g.save(); g.clip(beard); for (let i = 0; i < 6; i++) L(SP(`M${-6 + i * 3},4 Q${-6 + i * 3 + bw * .5},22 ${-5 + i * 2.6 + bw},38`), dk(brd, .25), .9); g.restore();
  eyesX(o, sk, [[1, -6, 2.4, 1], [7, -6.4, 2, -1]], 'beady'); browsX(o, [[1, -10, 5, 1], [7, -10.2, 4.4, -1]], '#7a3a1a', 1.6, 'bushy');
  mouthX(o, 5, 3, 7, 'gap');
  V(SP('M5,-7 Q14,-8 17,0 Q18,4 14,4 Q12,1 9,1 Q6,0 5,-2Z'), sk, 10, -3, 8, 1.6); F(E(15, 1.6, 2.6, 2), 'rgba(220,80,70,.5)');
  const tip = Math.sin(o.t * 2.2) * 3 + (w ? Math.sin(o.ph * 1.3) * 4 : 0);
  const hp = SP(`M-11,-9 Q-1,-17 11,-9 Q7,-22 -6,-28 Q${-16 + tip},-32 ${-22 + tip},${-24 + tip * .3} Q${-15 + tip * .5},-25 -10,-20 Q-12,-14 -11,-9Z`); V(hp, hat, -4, -18, 16, 1.8);
  F(SP('M-11,-11 Q0,-18 11,-11 L11,-8.5 Q0,-15 -11,-8.5Z'), '#3a2414'); F(E(-22 + tip, -24 + tip * .3, 2.2, 2.2), gold);
  g.restore();
  const ra = m === 2 ? -1.6 : m === 3 ? -.2 : .6 + (w ? -Math.sin(o.ph * 1.3) * .4 : 0) - u * 1.4;
  const h = limb(5, -38, ra, 9, m === 3 ? 0 : -.9, 8, 2.8, 2.2, 1.8, coat);
  g.save(); g.translate(h[0], h[1]); g.rotate(m === 3 ? .9 : -.15 + Math.sin(o.t * 3) * .05);
  L(SP('M0,-16 L0,12'), '#8a5a1a', 2.4); L(SP('M0,-16 L0,12'), gold, 1.2);
  V(E(0, -6, 3.4, 6.4), gold, 0, -6, 6, 1.2); for (let i = 0; i < 4; i++) L(SP(`M-3,${-10 + i * 2.6} Q0,${-9 + i * 2.6 + Math.sin(spin + i)} 3,${-10 + i * 2.6}`), '#b8861a', .8);
  g.save(); g.translate(0, 7); g.scale(1, .35); g.rotate(spin); V(E(0, 0, 6, 6), '#8a4a1a', 0, 0, 6, 1); L(SP('M-6,0 L6,0 M0,-6 L0,6'), '#e8b060', 1.2); g.restore();
  g.restore();
  V(E(h[0], h[1], 2.8, 2.6), sk, h[0], h[1], 3, 1.2);
  if (m >= 2 || u !== 0) { const k = m === 3 ? 1 : .5; let s = `M${h[0]},${h[1] - 6}`; for (let i = 1; i <= 8; i++) { const a = spin * .5 + i * .9; s += ` L${h[0] + i * 4 * k + Math.cos(a) * 3},${h[1] - 6 - i * 2 * k + Math.sin(a) * 3}`; } L(SP(s), gold, 1.4); glowB(h[0] + 14 * k, h[1] - 12 * k, 14, 'rgba(255,210,80,.5)'); }
  g.restore();
  if (u < 0) for (let i = 0; i < 4; i++) { const k = (o.t * 1.4 + i / 4) % 1; V(E(18 + i * 5, -42 - k * 22, 2.6, 2.6), gold, 18 + i * 5, -42 - k * 22, 3, .8); }
}

function reginacattivaD(o) {                                    // la Regina Cattiva: altissima e dritta, colletto a ventaglio, cappuccio nero, corona d'oro a punte, mantello viola, abito cremisi e nero, specchio magico che si accende
  const gown = '#8a1a2a', blk = '#1e1424', cape = '#4a1a5a', sk = '#f2e2dc', gold = '#e8b830', u = o.u, m = o.mood, w = o.walking ? 1 : 0;
  const b = bobOf(o, 1.2), sw = (w ? Math.sin(o.ph) * 3 : 0) + Math.sin(o.t * 1.8) * 1.2, cast = m === 2 || m === 3;
  g.save(); g.translate(0, b);
  const cw = Math.sin(o.t * 1.6) * 3 + (w ? 4 : 0);
  const cp = SP(`M-6,-88 Q-18,-60 ${-26 - cw},-20 Q${-30 - cw},-4 ${-24 - cw},2 L-2,2 Q-10,-40 -2,-86Z`); V(cp, cape, -14, -40, 34);
  g.save(); g.clip(cp); F(SP(`M-12,-60 Q-22,-30 ${-28 - cw},2 L${-22 - cw},2 Q-16,-30 -8,-62Z`), '#7a2a8a'); g.restore();
  limb(-5, -78, 1.75 + Math.sin(o.t * 1.4) * .04, 13, -.2, 12, 3, 2.4, 2, dk(gown, .35));
  const gp = SP(`M-6,-82 Q-8,-66 -6,-58 Q-14,-30 ${-21 + sw},0 L${21 + sw},0 Q14,-30 6,-58 Q8,-66 6,-82Z`); V(gp, gown, 0, -40, 40);
  g.save(); g.clip(gp); F(SP(`M-2,-58 L2,-58 L${9 + sw},0 L${-7 + sw},0Z`), blk); for (const x of [-12, 12]) L(SP(`M${x * .3},-54 Q${x},-24 ${x * 1.4 + sw},0`), dk(gown, .35), 1.4);
  F(SP('M-8,-60 L8,-60 L8,-56 L-8,-56Z'), gold); F(SP(`M${-24 + sw},-3 L${24 + sw},-3 L${24 + sw},0 L${-24 + sw},0Z`), gold); L(SP('M-3,-78 L3,-72 M3,-78 L-3,-72 M-3,-72 L3,-66 M3,-72 L-3,-66'), gold, .9); g.restore();
  V(SP('M-11,-80 Q-20,-98 -15,-112 Q-7,-102 0,-100 Q7,-102 15,-112 Q20,-98 11,-80Z'), '#e8e0f0', 0, -96, 16, 1.6); L(SP('M-13,-106 L-4,-84 M0,-99 L0,-84 M13,-106 L4,-84'), '#a898c0', 1);
  V(E(0, -80, 2.4, 2.4), '#d01838', 0, -80, 2.4, .8);
  g.save(); g.translate(1, -92); g.rotate(m === 3 ? -.1 : m === 4 ? .22 : Math.sin(o.t * 1.4) * .03);
  V(SP('M-10,10 Q-14,-14 1,-17 Q14,-16 12,0 Q12,8 10,11 L8,-3 Q2,-10 -5,-7 Q-7,0 -7,11Z'), blk, 0, -4, 14, 1.8);
  const face = SP('M-6,-5 Q-6,-12 1,-12 Q8,-12 8,-5 Q8,3 4,8 Q2,10.4 1,10.4 Q-2,9 -4,4 Q-6,0 -6,-5Z'); V(face, sk, 1, -2, 11);
  F(E(.6, -3.6, 3.6, 1.8), 'rgba(130,40,150,.35)'); F(E(6.2, -3.8, 2.8, 1.5), 'rgba(130,40,150,.35)');
  eyesX(o, sk, [[.6, -3, 2.4, 1], [6.2, -3.2, 2, -1]], 'lidded', '#6a2a9a'); browsX(o, [[.6, -7, 5.6, 1], [6.2, -7, 4.6, -1]], blk, 1.3, 'arch');
  V(PL([5.4, -2, 8.8, 2.6, 5.4, 2.6]), sk, 6.4, 1, 3, .9); F(E(-2.6, 2.4, 2, 1.2), 'rgba(220,90,120,.25)');
  mouthX(o, 3.4, 5.6, 5, 'smirk', { lips: '#c01830' });
  V(PL([-6, -13, -7.4, -23, -3, -17.4, 0, -26, 3, -17.4, 7.6, -23, 7, -13]), gold, 0, -18, 9, 1.2); for (const [x, y] of [[-7.4, -23], [0, -26], [7.6, -23]]) F(E(x, y, 1.3, 1.3), '#ffe890'); F(E(0, -15.4, 1.6, 1.6), '#d01838');
  g.restore();
  const ra = cast ? -1.0 - (m === 3 ? .35 : 0) : .9 - u * 1.3 + (w ? -Math.sin(o.ph) * .2 : 0);
  const h = limb(5, -78, ra, 12, cast ? -.3 : -1.1, 11, 3, 2.4, 2, gown);
  g.save(); g.translate(h[0], h[1]); g.rotate(cast ? .35 : -.25 + Math.sin(o.t * 1.6) * .05);
  L(SP('M0,2 L0,-7'), dk(gold, .4), 3.4); L(SP('M0,2 L0,-7'), gold, 1.8);
  const fr = E(0, -16, 7, 9.4); V(fr, gold, 0, -16, 9, 1.4); for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; F(E(Math.cos(a) * 7.2, -16 + Math.sin(a) * 9.6, 1.3, 1.3), '#fff0a0'); }
  const gl = E(0, -16, 5, 7.2); const gg = g.createLinearGradient(-5, -23, 5, -9); gg.addColorStop(0, cast ? '#e8c8ff' : '#f4f6ff'); gg.addColorStop(1, cast ? '#7a2ab8' : '#9aa6c8'); g.fillStyle = gg; g.fill(gl);
  if (cast) { glowB(0, -16, 20, 'rgba(200,110,255,.6)'); g.save(); g.clip(gl); g.globalAlpha = .7; F(E(-1.8, -18, 1.1, 1.6), '#2a0a3a'); F(E(1.8, -18, 1.1, 1.6), '#2a0a3a'); L(SP('M-2,-12 Q0,-11 2,-12'), '#2a0a3a', 1); g.restore(); }
  else L(SP('M-3,-20 L-1,-22 M-3,-17 L1,-21'), 'rgba(255,255,255,.8)', 1);
  g.restore();
  V(E(h[0], h[1], 2.6, 2.6), sk, h[0], h[1], 3, 1.1);
  if (m === 3) for (let i = 0; i < 5; i++) { const k = (o.t * 1.6 + i / 5) % 1; F(PL([h[0] + 6 + k * 30, h[1] - 18 - i * 3, h[0] + 9 + k * 30, h[1] - 16 - i * 3, h[0] + 7 + k * 30, h[1] - 13 - i * 3]), `rgba(220,180,255,${1 - k})`); }
  g.restore();
}

function reginaneviD(o) {                                       // la Regina delle Nevi: alta e gelida, corona di ghiaccioli altissima, capelli bianchi lunghissimi al vento, abito di cristallo con bordo di pelliccia, scettro col fiocco di neve, neve che le gira intorno
  const gown = '#dff2fb', ice = '#9ad8f2', sk = '#e2f0fa', hair = '#f6faff', fur = '#ffffff', u = o.u, m = o.mood, w = o.walking ? 1 : 0, cast = m === 2 || m === 3;
  const fl = -2 + Math.sin(o.t * 1.8) * 1.6, sw = (w ? Math.sin(o.ph) * 2.4 : 0) + Math.sin(o.t * 2) * 1.4, wind = Math.sin(o.t * 1.5) * 4 + (w ? 3 : 0);
  F(E(0, 0, 26, 5), 'rgba(200,240,255,.5)'); L(E(0, 0, 26, 5), 'rgba(255,255,255,.8)', 1.2);
  for (const [x, s] of [[-18, 1], [14, .8], [22, .6], [-8, .7]]) V(PL([x - 2 * s, 0, x, -7 * s, x + 2 * s, 0]), '#c8f0ff', x, -3, 4, .8);
  g.save(); g.translate(0, fl);
  const hp = SP(`M-4,-98 Q-18,-90 ${-22 - wind},-62 Q${-30 - wind * 1.4},-34 ${-36 - wind * 1.8},-16 Q${-28 - wind},-24 ${-22 - wind},-30 Q${-24 - wind},-18 ${-30 - wind * 1.4},-6 Q-14,-30 -10,-56 Q-8,-80 -2,-92Z`);
  V(hp, hair, -16, -54, 30, 1.6); g.save(); g.clip(hp); for (let i = 0; i < 4; i++) L(SP(`M${-4 - i * 3},-92 Q${-16 - i * 2 - wind},-60 ${-26 - i * 2 - wind * 1.6},-14`), '#c8dcef', 1); g.restore();
  const cp = SP(`M-6,-82 Q-14,-50 ${-22 - wind * .5},0 L4,0 Q-4,-40 2,-80Z`); g.save(); g.globalAlpha = .65; V(cp, '#b8e4f8', -10, -40, 30, 1.4); g.restore();
  limb(-5, -76, 1.75 + Math.sin(o.t * 1.3) * .05, 12, -.25, 11, 2.8, 2.2, 1.8, '#c8e6f4');
  let hem = ''; for (let i = 0; i <= 8; i++) { const x = -20 + i * 5 + sw; hem += ` L${x},${i % 2 ? -5 : 1}`; }
  const gp = SP(`M-6,-80 Q-8,-62 -7,-56 Q-14,-30 ${-20 + sw},0${hem} Q14,-30 7,-56 Q8,-62 6,-80Z`); V(gp, gown, 0, -40, 40, 2);
  g.save(); g.clip(gp); const gr = g.createLinearGradient(0, -56, 0, 0); gr.addColorStop(0, 'rgba(120,200,240,0)'); gr.addColorStop(1, 'rgba(110,190,240,.6)'); g.fillStyle = gr; g.fillRect(-26, -60, 54, 62);
  const flake = (x, y, r, c, lw) => { for (let k = 0; k < 6; k++) { const a = k * Math.PI / 3, ex = x + Math.cos(a) * r, ey = y + Math.sin(a) * r; L(SP(`M${x},${y} L${ex},${ey} M${x + Math.cos(a) * r * .55},${y + Math.sin(a) * r * .55} l${Math.cos(a + .8) * r * .3},${Math.sin(a + .8) * r * .3} M${x + Math.cos(a) * r * .55},${y + Math.sin(a) * r * .55} l${Math.cos(a - .8) * r * .3},${Math.sin(a - .8) * r * .3}`), c, lw); } };
  flake(-4, -34, 5, 'rgba(90,170,220,.7)', 1); flake(7, -18, 4, 'rgba(90,170,220,.6)', .9); flake(-10, -12, 3, 'rgba(90,170,220,.6)', .8); g.restore();
  for (let i = 0; i < 9; i++) V(E(-7 + i * 1.75, -80 + Math.abs(i - 4) * .6, 2.6, 2.4), fur, -7 + i * 1.75, -80, 3, 1);
  g.save(); g.translate(1, -92); g.rotate(m === 3 ? -.08 : m === 4 ? .22 : Math.sin(o.t * 1.2) * .03);
  const face = SP('M-6,-6 Q-6,-13 1,-13 Q8,-13 8,-6 Q8,2 4,7 Q1,9 -2,7 Q-6,3 -6,-6Z'); V(face, sk, 1, -3, 11);
  V(SP('M-8,10 Q-11,-10 0,-14 Q9,-15 10,-6 Q4,-11 -2,-9 Q-5,-4 -4,8Z'), hair, -2, -6, 11, 1.4);
  if (cast) glowB(3, -3, 16, 'rgba(120,220,255,.55)');
  eyesX(o, sk, [[.6, -3, 2.4, 1], [6.2, -3.2, 2, -1]], 'almond', '#38b8e8'); browsX(o, [[.6, -7, 5, 1], [6.2, -6.8, 4, -1]], '#a8c8e0', 1.1, 'arch');
  V(PL([5.4, -2, 8.4, 2.4, 5.4, 2.4]), sk, 6.4, 1, 3, .8); F(E(-2.4, 1.8, 2, 1.1), 'rgba(140,200,240,.35)');
  mouthX(o, 3.4, 4.8, 4.6, m === 3 ? 'oh' : 'frown', { lips: '#5a8ac8' });
  for (let i = 0; i < 7; i++) { const x = -7 + i * 2.4, hh = 8 + (3 - Math.abs(i - 3)) * 4 + (i % 2) * 2; const sp = PL([x - 1.4, -12, x, -12 - hh, x + 1.4, -12]); V(sp, i % 2 ? ice : '#e8f8ff', x, -14 - hh / 2, hh * .5, .9); }
  F(SP('M-8,-13 L10,-13 L10,-11 L-8,-11Z'), '#bfe8ff'); glowB(1, -22, 14, 'rgba(160,230,255,.35)');
  g.restore();
  const ra = cast ? -1.2 - (m === 3 ? .3 : 0) : 1.1 - u * 1.4;
  const h = limb(5, -76, ra, 11, cast ? -.2 : -.9, 10, 2.8, 2.2, 1.8, '#c8e6f4');
  g.save(); g.translate(h[0], h[1]); g.rotate(cast ? .4 : .05 + Math.sin(o.t * 1.4) * .04);
  L(SP('M0,22 L0,-30'), '#5a8aa8', 3.6); L(SP('M0,22 L0,-30'), '#d8f0ff', 1.8);
  g.save(); g.translate(0, -36); g.rotate(o.t * (cast ? 2 : .6)); if (cast) glowB(0, 0, 22, 'rgba(140,230,255,.7)'); flake(0, 0, 9, '#3a8ac0', 3.2); flake(0, 0, 9, '#e8fbff', 1.6); g.restore();
  V(E(0, -30, 2.4, 2.4), ice, 0, -30, 2.4, .8);
  g.restore();
  V(E(h[0], h[1], 2.6, 2.6), sk, h[0], h[1], 3, 1.1);
  g.restore();
  for (let i = 0; i < 10; i++) { const a = o.t * (cast ? 1.6 : .7) + i * .63, r = 26 + (i % 3) * 8, x = Math.cos(a) * r, y = -54 + Math.sin(a * 1.3) * 34; g.save(); g.globalAlpha = .55 + .45 * Math.sin(a * 2); F(E(x, y, 1.4 + (i % 2), 1.4 + (i % 2)), '#ffffff', '#bfe8ff'); g.restore(); }
  if (m === 3) for (let i = 0; i < 5; i++) { const k = (o.t * 1.8 + i / 5) % 1; g.save(); g.globalAlpha = (1 - k) * .7; F(E(12 + k * 26, -88 + Math.sin(i * 2) * 4, 3 + k * 6, 2 + k * 3), '#e8f8ff'); g.restore(); }
}

function basiliscoD(o) {                                        // il Basilisco: re dei serpenti, grossa spira a terra, collo alzato a S, cresta rossa da gallo sotto la corona d'oro, occhi gialli che pietrificano, lingua biforcuta
  const sk = '#557a2a', pat = '#2c4416', bel = '#e6d67e', gold = '#eab83a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, cast = m === 2 || m === 3;
  const sl = w ? Math.sin(o.ph * 1.6) : Math.sin(o.t * 1.4) * .4, rear = u > 0 ? u : 0, lunge = u < 0 ? -u : 0, hurt = m === 4 ? 1 : 0;
  const tw = Math.sin(o.t * 2.6) * 6;
  ribbon([[-40, -6], [-52, -8], [-58, -18 + tw * .5], [-62, -26 + tw]], 7, 2.4, sk, bel, 1);
  const cl = ribbon([[-36, -6], [-46, -30 + sl * 2], [24, -34 - sl * 2], [24, -8]], 11, 12, sk, bel, 1);
  g.save(); g.clip(cl.p); for (let i = 2; i < cl.pts.length - 1; i += 2) { const [x, y] = cl.pts[i]; F(PL([x - 3, y - 2, x, y - 7, x + 3, y - 2, x, y + 3]), pat); } g.restore();
  F(SP('M-40,0 L28,0 L28,-4 L-40,-4Z'), 'rgba(0,0,0,0)');
  const hx = 18 + sl * 3 + lunge * 22 - rear * 14 - hurt * 8, hy = -88 - rear * 8 + lunge * 16 + hurt * 6 + Math.sin(o.t * 1.6) * 2;
  const nk = ribbon([[18, -16], [44, -34], [-4 + lunge * 10, -62 - rear * 6], [hx, hy]], 11, 8, sk, bel, -1);
  g.save(); g.clip(nk.p); for (let i = 3; i < nk.pts.length - 2; i += 2) { const [x, y] = nk.pts[i]; F(PL([x - 2.4, y, x, y - 5, x + 2.4, y, x, y + 4]), pat); } g.restore();
  const ang = Math.atan2(hy - nk.pts[16][1], hx - nk.pts[16][0]) * .35 + .1 - rear * .3 + lunge * .25 - hurt * .4;
  const jo = m === 3 ? .7 : m === 2 ? .15 : m === 4 ? .3 : .05;
  g.save(); g.translate(hx, hy); g.rotate(ang);
  for (let i = 0; i < 5; i++) { const a = -2.4 + i * .26 + Math.sin(o.t * 3 + i) * .05; V(SP(`M-4,-6 Q${-4 + Math.cos(a - .2) * 16},${-6 + Math.sin(a - .2) * 16} ${-4 + Math.cos(a) * 18},${-6 + Math.sin(a) * 18} Q${-4 + Math.cos(a + .25) * 10},${-6 + Math.sin(a + .25) * 10} 0,-8Z`), i % 2 ? '#c8302a' : '#e04a32', -10, -14, 10, 1.2); }
  g.save(); g.translate(-4, 2); g.rotate(jo);
  if (jo > .1) F(PL([0, -1, 26, -2, 24, 6, 0, 4]), '#5a1424');
  V(SP('M0,0 L26,0 Q28,4 22,6 Q8,8 0,5Z'), dk(sk, .1), 12, 3, 12, 1.6); F(SP('M2,4 Q12,7 24,5 L24,6.4 Q12,9 2,6Z'), bel);
  if (jo > .1) { const tf = Math.sin(o.t * 9) * 2; L(SP(`M6,1 Q18,${-1 + tf} 30,${1 + tf} M30,${1 + tf} l4,-3 M30,${1 + tf} l4,2`), '#d0303a', 1.4); }
  g.restore();
  const hd = SP('M-10,-6 Q-8,-15 4,-15 Q18,-13 25,-5 Q28,0 24,2 Q10,4 -8,4 Q-12,0 -10,-6Z'); V(hd, sk, 6, -6, 18);
  g.save(); g.clip(hd); for (const [x, y] of [[0, -10], [8, -11], [14, -8], [-4, -4]]) F(E(x, y, 2.4, 1.6), lt(sk, .18)); F(SP('M-10,0 Q8,4 26,0 L26,6 L-10,6Z'), bel); g.restore();
  if (jo > .3) for (const x of [16, 21]) { const f = PL([x, 1, x + 1.4, 7, x + 2.6, 1]); F(f, '#fffaea'); L(f, INK, .8); }
  F(E(23, -6, 1.4, .9), INK);
  if (cast) glowB(10, -8, 22, 'rgba(255,230,80,.7)');
  eyesX(o, sk, [[10, -8, 3.6, -1]], 'slit', cast ? '#fff27a' : '#f2d040'); browsX(o, [[10, -12.4, 8, -1]], dk(sk, .4), 2.4, 'thick');
  V(PL([-6, -14, -8, -23, -3, -18, 0, -26, 3, -18, 8, -24, 6, -14]), gold, 0, -19, 9, 1.2); F(E(0, -16, 1.4, 1.4), '#2a8ad8'); for (const [x, y] of [[-8, -23], [0, -26], [8, -24]]) F(E(x, y, 1.2, 1.2), '#fff0a0');
  g.restore();
  if (m === 3) { const ex = hx + Math.cos(ang) * 10 + Math.sin(ang) * 8, ey = hy + Math.sin(ang) * 10 - Math.cos(ang) * 8; g.save(); g.globalCompositeOperation = 'lighter'; const gr = g.createLinearGradient(ex, ey, ex + 90, ey + 20); gr.addColorStop(0, 'rgba(255,240,120,.7)'); gr.addColorStop(1, 'rgba(255,240,120,0)'); g.fillStyle = gr; g.fill(PL([ex, ey - 2, ex + 90, ey - 10, ex + 90, ey + 40, ex, ey + 2])); g.restore(); }
}

function cavaliereverdeD(o) {                                   // il Cavaliere Verde: gigante tutto verde, spalle enormi, barba e capelli a cespuglio come foglie, tunica verde con cintura d'oro e agrifoglio, ascia gigante a due mani
  const sk = '#86ad52', hair = '#3c6a2a', tun = '#2e6a3a', mail = '#94a08e', gold = '#e0b040', boot = '#3a2a1a', u = o.u, m = o.mood, w = o.walking ? 1 : 0;
  const b = bobOf(o, 3), sw = w ? Math.sin(o.ph) : 0, up = u > 0 ? u : 0, chop = u < 0 ? -u : 0;
  const bootF = (f, col) => V(SP(`M${f[0] - 6},${f[1] - 8} L${f[0] + 4},${f[1] - 8} Q${f[0] + 14},${f[1] - 4} ${f[0] + 14},${f[1] + 1} L${f[0] - 7},${f[1] + 1}Z`), col, f[0] + 2, f[1] - 4, 10, 1.8);
  g.save(); g.translate(0, b);
  bootF(legB(-8, -62, 30, 29, 8.4, 6.6, 5.6, o, Math.PI, dk(tun, .35), .5), dk(boot, .2));
  const pv = [6 + chop * 16 - up * 6, -96 + chop * 22 - up * 26], r = up ? -.6 - up * 1.4 : chop ? .4 + chop * 1.9 : -.45 + Math.sin(o.t * 1.4) * .04 + sw * .05;
  const along = k => [pv[0] + Math.sin(r) * k, pv[1] - Math.cos(r) * k];
  const h1 = along(0), h2 = along(-14);
  armTo(-16, -112, h2[0], h2[1], 22, 20, 7, 6, 5, dk(sk, .2), -1);
  V(E(h2[0], h2[1], 5.4, 5), dk(sk, .2), h2[0], h2[1], 5, 1.4);
  const tor = SP('M-26,-112 Q-34,-96 -24,-64 L24,-64 Q32,-96 26,-112 Q0,-124 -26,-112Z'); V(tor, tun, 0, -92, 34);
  g.save(); g.clip(tor); F(SP('M-30,-120 L30,-120 L30,-108 Q0,-100 -30,-108Z'), mail); for (let x = -26; x < 28; x += 4) for (let y = -118; y < -104; y += 3) L(E(x + (y % 2 ? 2 : 0), y, 1.6, 1.2), dk(mail, .3), .6);
  for (const x of [-14, 0, 14]) L(SP(`M${x},-100 Q${x + 2},-82 ${x},-66`), dk(tun, .3), 1.4); g.restore();
  F(SP('M-25,-72 L25,-72 L25,-64 L-25,-64Z'), gold); L(SP('M-25,-72 L25,-72 L25,-64 L-25,-64Z'), dk(gold, .5), 1.2); V(SP('M-4,-74 L6,-74 L6,-62 L-4,-62Z'), '#c89a28', 1, -68, 6, 1); F(SP('M-1,-71 L3,-71 L3,-65 L-1,-65Z'), tun);
  for (const [x, y, a] of [[-16, -70, -.6], [-12, -72, .2], [-19, -66, -1.4]]) { g.save(); g.translate(x, y); g.rotate(a); V(SP('M0,0 Q3,-4 8,-3 L6,-1 L9,1 L5,2 Q3,3 0,0Z'), '#2a7a3a', 4, 0, 5, .9); g.restore(); } for (const [x, y] of [[-14, -68], [-12, -66.4], [-15.6, -66]]) V(E(x, y, 1.6, 1.6), '#d82a2a', x, y, 1.6, .7);
  F(SP('M-22,-66 L22,-66 L26,-50 L-26,-50Z'), dk(tun, .1)); L(SP('M-22,-66 L22,-66 L26,-50 L-26,-50Z'), dk(tun, .55), 1.6);
  bootF(legB(8, -62, 30, 29, 9, 7, 6, o, 0, dk(tun, .2), .5), boot);
  g.save(); g.translate(4, -128); g.rotate(m === 3 ? -.1 : m === 4 ? .2 : Math.sin(o.t * 1.3) * .03);
  const hw = Math.sin(o.t * 2) * 1.6;
  const hairP = SP(`M-16,8 Q-22,-6 -16,-18 Q-8,-28 4,-26 Q16,-26 18,-12 Q20,-4 16,0 L12,-8 Q4,-14 -6,-12 Q-10,-2 -8,8Z`); V(hairP, hair, 0, -12, 20, 1.8);
  for (const [x, y] of [[-18, -6], [-14, -20], [-4, -26], [8, -26], [16, -18], [-19, 4]]) V(E(x + hw * .3, y, 4.6, 3.8), lt(hair, .08), x, y, 4, 1.2);
  const face = SP('M-10,-6 Q-11,-17 2,-18 Q14,-17 14,-6 Q15,4 10,8 Q2,11 -6,8 Q-11,4 -10,-6Z'); V(face, sk, 2, -4, 14);
  eyesX(o, sk, [[0, -7, 3, 1], [8.4, -7.2, 2.6, -1]], 'round', '#d8c03a'); browsX(o, [[0, -11.6, 7, 1], [8.4, -11.6, 6, -1]], hair, 2.6, 'bushy');
  V(SP('M7,-6 Q12,-3 11,1 Q8,1.6 6,0Z'), dk(sk, .06), 9, -2, 4, 1.2);
  const bd = SP(`M-11,-2 Q-6,3 4,3 Q12,2 15,-3 Q18,10 12,22 Q${6 + hw},32 ${0 + hw},34 Q-6,30 -10,22 Q-16,12 -11,-2Z`); V(bd, hair, 2, 14, 20, 1.8);
  for (const [x, y] of [[-8, 14], [0, 18], [8, 14], [2, 28], [-4, 24], [10, 6], [-10, 6]]) V(E(x, y, 3.4, 2.8), lt(hair, .06), x, y, 3, .9);
  mouthX(o, 4, 5.4, 9, 'grin');
  g.restore();
  g.save(); g.translate(pv[0], pv[1]); g.rotate(r);
  L(SP('M0,22 L0,-58'), dk('#7a5a32', .5), 6.4); L(SP('M0,22 L0,-58'), '#8a6a3a', 4); for (let k = -50; k < 18; k += 10) L(SP(`M-2,${k} L2,${k + 4}`), dk('#8a6a3a', .4), 1);
  const bl = SP('M-2,-58 Q16,-74 30,-66 Q36,-50 30,-32 Q16,-26 -2,-40Z'); V(bl, '#b8c4c8', 16, -50, 22, 2);
  g.save(); g.clip(bl); F(SP('M22,-70 Q34,-50 26,-28 L36,-28 L36,-72Z'), '#e8f0f2'); L(SP('M4,-56 Q14,-62 22,-58 M4,-44 Q14,-40 22,-44'), '#2e6a3a', 1.6); g.restore();
  V(SP('M-2,-58 L-8,-62 L-6,-50 L-8,-38 L-2,-42Z'), '#8a9498', -4, -50, 6, 1.2); V(E(0, -50, 3, 3), gold, 0, -50, 3, 1);
  g.restore();
  if (chop > .2) { g.save(); g.globalAlpha = chop * .6; L(SP(`M${pv[0] + 10},${pv[1] - 66} Q${pv[0] + 60},${pv[1] - 40} ${pv[0] + 50},${pv[1] + 20}`), '#e8f8e8', 5); g.restore(); }
  const h1b = along(0);
  armTo(14, -110, h1b[0], h1b[1], 22, 20, 7.4, 6.4, 5.4, sk, 1);
  V(E(h1b[0], h1b[1], 5.8, 5.4), sk, h1b[0], h1b[1], 5, 1.4);
  V(E(17, -110, 9, 8), mail, 17, -110, 9, 1.6);
  g.restore();
}

function diavoloD(o) {                                          // il Diavolo: rosso e asciutto, gambe da capro pelose con zoccoli, corna lunghe ricurve, orecchie a punta, pizzetto nero, alette da pipistrello, coda a freccia, tridente infuocato
  const sk = '#c8302a', skd = dk(sk, .28), fur = '#3a1a18', hoof = '#1a1012', u = o.u, m = o.mood, w = o.walking ? 1 : 0, cast = m === 2 || m === 3;
  const b = bobOf(o, 2.4), lean = w ? .06 : 0, thrust = u < 0 ? -u : 0, pull = u > 0 ? u : 0;
  g.save(); g.translate(0, b); g.rotate(lean);
  const fl = Math.sin(o.t * 5) * .25 + (w ? Math.sin(o.ph * 2) * .2 : 0);
  for (const s of [-1, 1]) { g.save(); g.translate(-6, -82); g.rotate(-.5 - fl * s * .5 + (s < 0 ? -.2 : 0)); g.scale(s < 0 ? .85 : 1, 1);
    const wg = SP('M0,0 L-30,-22 Q-26,-12 -28,-8 Q-20,-10 -18,-2 Q-12,-6 -8,2Z'); V(wg, s < 0 ? dk('#5a1a24', .2) : '#5a1a24', -14, -8, 18, 1.6); L(SP('M0,0 L-30,-22 M-8,-6 L-28,-8 M-6,-2 L-18,-2'), '#2a0a10', 1); g.restore(); }
  const tw = Math.sin(o.t * 3) * 6;
  const tl = ribbon([[-8, -52], [-30, -48], [-34, -24 + tw * .5], [-46, -30 + tw]], 2.6, 1.6, skd, null);
  g.save(); g.translate(-46, -30 + tw); g.rotate(Math.atan2(tw * .5 - 6, -12) + Math.PI); V(PL([0, 0, 6, -5, 4, 0, 6, 5]), skd, 3, 0, 5, 1.2); g.restore();
  const legG = (hx, off, col, back) => { const p = o.ph + off, a = w ? Math.sin(p) * .55 : 0, lift = w ? Math.max(0, Math.cos(p)) * .5 : 0;
    const k = [hx + Math.sin(a + .45) * 16, -54 + Math.cos(a + .45) * 16], hk = [k[0] + Math.sin(a - .9 - lift) * 14, k[1] + Math.cos(a - .9 - lift) * 14], f = [hk[0] + Math.sin(a + .1) * 11, hk[1] + Math.cos(a + .1) * 11];
    taper(hx, -56, k[0], k[1], 7.4, 5.4, col); taper(k[0], k[1], hk[0], hk[1], 4.6, 3.4, col); taper(hk[0], hk[1], f[0], f[1], 3, 2.6, col);
    V(SP(`M${f[0] - 3},${f[1] - 3} L${f[0] + 4},${f[1] - 3} L${f[0] + 5},${f[1] + 1} L${f[0] - 4},${f[1] + 1}Z`), hoof, f[0], f[1] - 1, 4, 1.2); L(SP(`M${f[0] + .5},${f[1] - 3} L${f[0] + .5},${f[1] + 1}`), '#5a4a4a', .8);
    if (!back) { g.save(); g.globalAlpha = .7 + .3 * Math.sin(o.t * 12 + off); F(SP(`M${f[0] - 4},${f[1]} Q${f[0] - 2},${f[1] - 6 - Math.sin(o.t * 14) * 2} ${f[0]},${f[1] - 3} Q${f[0] + 2},${f[1] - 8} ${f[0] + 5},${f[1]}Z`), '#ffa030', '#ff6a20'); g.restore(); } };
  legG(-4, Math.PI, dk(fur, .2), 1);
  const hb = limb(-9, -84, 1.9 + (w ? Math.sin(o.ph) * .4 : 0), 13, -.4, 12, 3.8, 3, 2.4, skd); clawsAt(hb, '#1a0a0a', 3, 5);
  const tor = SP('M-12,-86 Q-16,-74 -9,-56 L8,-56 Q16,-72 14,-86 Q2,-92 -12,-86Z'); V(tor, sk, 0, -72, 20);
  g.save(); g.clip(tor); L(SP('M-8,-78 Q-2,-74 2,-78 Q6,-74 12,-78'), skd, 1.4); L(SP('M2,-74 L2,-58 M-4,-68 L8,-68 M-3,-62 L8,-62'), skd, 1.1); g.restore();
  F(SP('M-11,-60 L10,-60 L11,-54 L-11,-54Z'), '#1a0a0a'); V(E(0, -57, 2.6, 2.6), '#e8c040', 0, -57, 2.6, .8);
  legG(4, 0, fur, 0);
  g.save(); g.translate(3, -98); g.rotate(m === 3 ? -.12 : m === 4 ? .24 : Math.sin(o.t * 1.8) * .04);
  for (const s of [-1, 1]) { const hp = s < 0 ? SP('M-6,-10 Q-14,-18 -16,-30 Q-12,-24 -8,-22 Q-6,-26 -4,-14Z') : SP('M3,-12 Q4,-24 -2,-34 Q8,-28 10,-18 Q10,-12 8,-10Z'); g.save(); const gr = g.createLinearGradient(0, -10, 0, -34); gr.addColorStop(0, '#e8dcc0'); gr.addColorStop(1, '#3a2a2a'); g.lineJoin = 'round'; g.strokeStyle = INK; g.lineWidth = 3.4; g.stroke(hp); g.fillStyle = gr; g.fill(hp); g.restore(); }
  V(SP('M-8,-4 Q-18,-10 -16,-2 Q-12,2 -7,2Z'), sk, -11, -2, 6, 1.4);
  const face = SP('M-8,-6 Q-8,-14 1,-14 Q10,-14 10,-5 Q10,2 6,7 L2,11 Q-2,10 -5,5 Q-8,1 -8,-6Z'); V(face, sk, 1, -3, 12);
  V(SP('M-9,-4 Q-10,-14 0,-16 Q10,-17 11,-8 Q6,-12 2,-10 L0,-7 L-2,-10 Q-6,-9 -7,-2Z'), '#1a0a10', 0, -11, 11, 1.4);
  const gt = SP('M0,6 Q4,8 7,6 Q6,12 3,16 Q1,11 0,6Z'); V(gt, '#1a0a10', 3, 10, 5, 1.2);
  F(SP('M-1,4.6 Q3,3 8,4.4 Q4,5.6 -1,4.6Z'), '#1a0a10');
  if (cast) glowB(4, -3, 14, 'rgba(255,190,60,.5)');
  eyesX(o, sk, [[0, -3.4, 2.6, 1], [6.6, -3.6, 2.2, -1]], 'slit', '#ffd030'); browsX(o, [[0, -7.4, 6, 1], [6.6, -7.4, 5, -1]], '#1a0a10', 1.8, 'thick');
  V(PL([6, -2, 10, 2.6, 6, 2.6]), sk, 7, 1, 3, .9);
  mouthX(o, 3.6, 3.2, 6, m === 3 ? 'sharp' : 'smirk');
  g.restore();
  const ra = pull ? -.1 - pull * .4 : .6 - thrust * .7 + (w ? -Math.sin(o.ph) * .25 : 0);
  const h = limb(8, -84, ra, 13, pull ? -1.6 : -1.1 + thrust * 1.1, 12, 4, 3, 2.6, sk);
  g.save(); g.translate(h[0] + thrust * 10, h[1]); g.rotate(thrust ? Math.PI / 2 - .05 : -.1 + (w ? Math.sin(o.ph) * .05 : 0));
  L(SP('M0,30 L0,-44'), '#1a0a10', 4.4); L(SP('M0,30 L0,-44'), '#4a2a2a', 2.2);
  const tr = SP('M-9,-44 Q-9,-50 -8,-58 L-6,-50 Q-4,-46 -2,-46 L-1,-62 L1,-62 L2,-46 Q4,-46 6,-50 L8,-58 Q9,-50 9,-44Z'); V(tr, '#2a2a30', 0, -50, 10, 1.2); L(SP('M-8,-57 L-8,-52 M0,-61 L0,-50 M8,-57 L8,-52'), '#8a8a98', .9);
  if (cast || thrust) for (const x of [-8, 0, 8]) { const fh = 6 + Math.sin(o.t * 14 + x) * 2; F(SP(`M${x - 2.6},${x ? -57 : -61} Q${x},${(x ? -57 : -61) - fh * 2} ${x + 2.6},${x ? -57 : -61}Z`), '#ff9a30', '#ff5a20'); }
  g.restore();
  clawsAt(h, '#1a0a0a', 3, 5); V(E(h[0], h[1], 3, 3), sk, h[0], h[1], 3, 1.2);
  g.restore();
}
Object.assign(DRAW, { tremotino: tremotinoD, reginacattiva: reginacattivaD, reginanevi: reginaneviD, basilisco: basiliscoD, cavaliereverde: cavaliereverdeD, diavolo: diavoloD });
