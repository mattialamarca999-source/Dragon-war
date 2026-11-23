// ---------- rifatti con più cura: Baba Jaga, Bestia Latrante, Spirito, Morgana ----------
function babajagaD(o) {                                         // Baba Jaga: la capanna di tronchi col tetto di paglia sulle zampe di gallina, lei che si sporge col pestello
  const log = '#8a5a34', straw = '#c8a050', leg1 = '#f0a838', sk = '#b8c890', u = o.u, w = o.walking ? 1 : 0, p = o.ph * .85;
  const lift = (w ? -Math.abs(Math.sin(p)) * 10 : Math.sin(o.t * 1.6) * 1.5) + (u > 0 ? -u * 16 : u < 0 ? -u * 3 : 0), sq = u < 0 ? -u * .08 : 0;
  if (u < 0) { g.save(); g.globalAlpha = -u * .6; for (const sx of [-1, 1]) F(E(sx * 34, -2, 16, 5), '#d9cf9a'); g.restore(); }
  const cleg = (x, off, col) => {                                        // zampa di gallina: coscia piumata, ginocchio che piega all'indietro, quattro dita con gli artigli
    const a = w ? Math.sin(p + off) * .5 : 0, up = w ? Math.max(0, Math.cos(p + off)) * 8 : 0;
    const hx = x, hy = -52 + lift, ax = x + 10 + Math.sin(a) * 10, ay = -26 - up * .5, fx = x + 2 + Math.sin(a) * 22, fy = -up;
    for (const [px, py, r] of [[hx - 5, hy + 2, 7], [hx + 4, hy + 3, 7], [hx, hy + 7, 6]]) V(E(px, py, r, r * .8), dk('#8a6a5a', col === leg1 ? 0 : .25), px, py, r, 1.6);
    for (const [s1, s2] of [[[hx, hy + 8], [ax, ay]], [[ax, ay], [fx, fy]]]) { const t = SP(`M${s1[0]},${s1[1]} L${s2[0]},${s2[1]}`); L(t, '#6a3a10', 10); L(t, col, 6.4); L(t, lt(col, .3), 1.6); }
    for (let i = 1; i < 5; i++) { const k = i / 5, sx2 = ax + (fx - ax) * k, sy2 = ay + (fy - ay) * k; L(SP(`M${sx2 - 3},${sy2} l6,0`), dk(col, .35), 1.2); }
    V(E(ax, ay, 4.4, 4.4), col, ax, ay, 4, 1.6);
    for (const t of [-.35, .05, .45]) { const ex = fx + Math.cos(t) * 13, ey = fy + Math.sin(t) * 2.4; const q = SP(`M${fx},${fy} L${ex},${ey}`); L(q, '#6a3a10', 5.4); L(q, col, 3); F(PL([ex, ey - 1.6, ex + 4, ey + .4, ex, ey + 1.6]), '#2a1a14'); }
    L(SP(`M${fx},${fy} l-7,-1.4`), '#6a3a10', 4.6); L(SP(`M${fx},${fy} l-7,-1.4`), col, 2.4);
  };
  cleg(-12, Math.PI, dk(leg1, .22));
  g.save(); g.translate(0, lift); g.scale(1 + sq, 1 - sq); g.rotate((w ? Math.sin(p) * .05 : Math.sin(o.t * 1.3) * .02) + (u > 0 ? -.05 * u : 0));
  for (let i = 0; i < 4; i++) { const k = (o.t * .35 + i / 4) % 1; g.save(); g.globalAlpha = .5 * (1 - k); F(E(-20 - k * 12 + Math.sin(k * 6) * 3, -138 - k * 42, 5 + k * 9, 4 + k * 7), '#cfcad8'); g.restore(); }
  V(SP('M-26,-114 L-14,-112 L-15,-128 L-25,-130Z'), '#7a6a6a', -20, -120, 8, 1.6); for (const y of [-124, -118]) L(SP(`M-25,${y} L-15,${y + 1}`), '#5a4a4a', 1);
  const wall = SP('M-34,-50 L34,-50 L33,-104 L-33,-104Z'); V(wall, log, 0, -76, 38, 2.4);
  g.save(); g.clip(wall); for (let i = 0; i < 6; i++) { const y = -104 + i * 9; const lg = SP(`M-36,${y + 1} Q0,${y - 1} 36,${y + 1} L36,${y + 8} Q0,${y + 10} -36,${y + 8}Z`); F(lg, i % 2 ? log : lt(log, .08)); L(SP(`M-36,${y + 8.5} Q0,${y + 10.5} 36,${y + 8.5}`), dk(log, .45), 1.6); L(SP(`M-20,${y + 4} l10,0 M8,${y + 5} l14,0`), dk(log, .25), .8); }
  F(SP('M-36,-62 Q0,-56 36,-62 L36,-50 L-36,-50Z'), 'rgba(40,20,10,.3)'); g.restore();
  for (let i = 0; i < 6; i++) for (const x of [-35, 35]) { const y = -100 + i * 9; V(E(x, y, 4.6, 4.4), lt(log, .25), x, y, 4.6, 1.4); L(E(x, y, 2.4, 2.2), dk(log, .3), .8); }
  V(SP('M-30,-80 L-14,-80 L-14,-50 L-30,-50Z'), '#4a2e1a', -22, -65, 9, 1.8); L(SP('M-22,-80 L-22,-50'), '#2e1a0e', 1.2); V(E(-17, -64, 1.4, 1.4), '#c8a040', -17, -64, 1.4, .8);
  const winP = SP('M-6,-98 L26,-98 L26,-70 L-6,-70Z');
  F(winP, '#2a1a10'); glowB(10, -84, 26, 'rgba(255,180,80,.55)'); F(SP('M-6,-98 L26,-98 L26,-70 L-6,-70Z'), 'rgba(255,190,90,.35)');
  for (const [sx, a] of [[-6, -1], [26, 1]]) { g.save(); g.translate(sx, -98); g.scale(a, 1); V(SP('M0,0 L-10,3 L-10,31 L0,28Z'), '#5a7a4a', -5, 15, 10, 1.6); L(SP('M-5,4 L-5,28'), dk('#5a7a4a', .3), 1); F(SP('M-7,12 L-3,12 L-5,16Z'), '#c8302a'); g.restore(); }
  // lei: si sporge dalla finestra
  const lean = (u > 0 ? u * 5 : u < 0 ? -u * 8 : 0) + Math.sin(o.t * 1.8) * 1;
  g.save(); g.translate(10 + lean, -82); g.rotate(.08 + Math.sin(o.t * 1.7) * .06 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0));
  V(SP('M-10,14 Q-12,4 -6,0 L8,0 Q14,4 12,14Z'), '#5a3a6a', 1, 8, 12, 1.8);
  for (const [x, y, a] of [[-11, -10, -2.2], [-12, -4, -2.6], [-10, -15, -1.9], [12, -12, -.9], [13, -6, -.5]]) L(SP(`M${x},${y} l${Math.cos(a) * 7},${Math.sin(a) * 7} l${Math.cos(a + .8) * 3},${Math.sin(a + .8) * 3}`), '#d8d4e0', 1.6);
  V(SP('M-12,-6 Q-14,-22 0,-24 Q14,-23 13,-8 Q8,-14 0,-14 Q-8,-14 -12,-6Z'), '#2a3a6a', 0, -16, 14, 1.8); for (const [x, y] of [[-6, -20], [4, -21], [-1, -17], [8, -16]]) F(E(x, y, 1.6, 1.6), '#e8c040');
  const face = SP('M-9,-10 Q-10,-16 0,-16 Q10,-16 11,-8 Q12,2 9,8 Q6,14 2,15 Q-1,15 -2,10 Q-8,8 -9,-10Z'); V(face, sk, 1, -2, 13);
  g.save(); g.clip(face); L(SP('M-7,-4 q2,1 4,0 M-8,2 q2,1 4,0 M5,9 q2,-1 3,0'), dk(sk, .35), .9); g.restore();
  V(SP('M-12,-6 Q-14,4 -8,10 Q-10,0 -9,-6Z'), '#2a3a6a', -10, 2, 6, 1.4); V(SP('M10,-6 Q13,-2 11,4 Q10,-1 9,-5Z'), '#2a3a6a', 10, 0, 4, 1.2);
  eyesX(o, sk, [[-1, -6, 3.6, 1], [6.4, -6.6, 2.4, -1]], 'wide', '#c8302a'); browsX(o, [[-1, -11, 6.4, 1], [6.4, -11, 4.6, -1]], '#d8d4e0', 2.2, 'bushy');
  V(SP('M4,-6 Q12,-6 15,2 Q16,8 12,9 Q12,4 7,2Z'), dk(sk, .06), 10, 2, 7, 1.6); V(E(13, 3, 1.4, 1.4), dk(sk, .25), 13, 3, 1.4, .8);
  V(SP('M3,13 Q6,16 9,12 Q8,17 4,17Z'), dk(sk, .06), 6, 14, 4, 1.2);
  mouthX(o, 3, 9, 8, 'gap');
  if (o.mood === 3 || o.mood === 2) for (const x of [0, 3, 6]) F(SP(`M${x},8.4 L${x + 2},8.4 L${x + 1},11Z`), '#9aa0b0');
  g.restore();
  const ang = u > 0 ? -2.2 * u - .2 : u < 0 ? .5 + -u * 1.2 : -.3 + Math.sin(o.t * 2) * .2, sx = 18 + lean, sy = -76;
  const ex = sx + Math.cos(ang) * 9, ey = sy + Math.sin(ang) * 9, hx = ex + Math.cos(ang + .4) * 8, hy = ey + Math.sin(ang + .4) * 8;
  seg(sx, sy, ex, ey, 4, '#5a3a6a'); seg(ex, ey, hx, hy, 3.4, sk);
  g.save(); g.translate(hx, hy); g.rotate(ang + .4 + Math.PI / 2 - .3); V(SP('M-3,6 L-3,-18 Q-6,-24 0,-28 Q6,-24 3,-18 L3,6Z'), '#9a7a5a', 0, -10, 14, 1.6); L(SP('M-1,-4 L-1,-20'), lt('#9a7a5a', .3), 1); g.restore();
  V(E(hx, hy, 3.4, 3.4), sk, hx, hy, 3, 1.2);
  V(SP('M-6,-70 L30,-70 L30,-65 L-6,-65Z'), dk(log, .15), 12, -68, 18, 1.6);
  // il tetto di paglia
  const roof = SP('M-46,-98 Q-20,-138 0,-150 Q20,-138 46,-98 L40,-92 L34,-96 L28,-90 L22,-95 L16,-89 L10,-94 L4,-88 L-2,-94 L-8,-88 L-14,-95 L-20,-89 L-26,-95 L-32,-90 L-38,-96Z');
  V(roof, straw, 0, -116, 44, 2.6); g.save(); g.clip(roof); for (let i = -9; i <= 9; i++) L(SP(`M${i * 2},-150 Q${i * 4},-120 ${i * 5.4},-88`), dk(straw, .3), 1); F(E(-18, -126, 12, 5, -.5), 'rgba(110,150,70,.65)'); F(E(18, -110, 9, 4, .4), 'rgba(110,150,70,.55)'); g.restore();
  g.save(); g.translate(40, -96); L(SP(`M0,0 L${Math.sin(o.t * 2) * 2},14`), '#3a2a1a', 1.4); g.translate(Math.sin(o.t * 2) * 2, 14);
  V(SP('M-6,2 Q-7,-8 0,-8 Q7,-8 6,2 Q5,7 2,8 L-2,8 Q-5,7 -6,2Z'), '#ece4d0', 0, 0, 7, 1.6); for (const x of [-2.4, 2.4]) { F(E(x, -1.4, 1.8, 2.2), '#1b1238'); F(E(x, -1.4, 1, 1.2), '#9aff6a', '#9aff6a'); } F(PL([-.8, 2.4, .8, 2.4, 0, 4]), '#1b1238'); glowB(0, 0, 12, 'rgba(150,255,100,.3)'); g.restore();
  g.restore();
  cleg(12, 0, leg1);
}
function bestiaD(o) {                                           // la Bestia Latrante: corpo di leopardo, zampe di cervo, collo e testa di serpente; abbaia
  const fur = '#e6b23a', fur2 = '#c8902a', spot = '#5a3414', sn = '#4f8a3a', snb = '#d8d890', u = o.u, w = o.walking ? 1 : 0, p = o.ph * 1.6;
  const b = w ? -Math.abs(Math.sin(p)) * 5 : Math.sin(o.t * 2.4) * .8, lunge = u < 0 ? -u * 16 : -u * 5, rear = u > 0 ? u : 0;
  g.save(); g.translate(lunge, b);
  const front = (x, off, col) => { const a = w ? Math.sin(p + off) * .7 : 0, kx = x + Math.sin(a) * 9, ky = -18, fx = kx + Math.sin(a + .4) * 2, fy = -(w ? Math.max(0, Math.cos(p + off)) * 6 : 0);
    seg(x, -30, kx, ky, 4.6, col); seg(kx, ky, fx, fy, 2.6, col); F(E(kx, ky, 2.6, 2.6), col); V(SP(`M${fx - 2.6},${fy - 3} L${fx + 2.6},${fy - 3} L${fx + 3.6},${fy} L${fx - 3},${fy}Z`), '#2a1a14', fx, fy - 1, 3, 1); };
  const back = (x, off, col) => { const a = w ? Math.sin(p + off) * .6 : 0, kx = x + 8 + Math.sin(a) * 8, ky = -22, hx = kx - 8 + Math.sin(a) * 6, hy = -12, fx = hx + 2 + Math.sin(a) * 4, fy = -(w ? Math.max(0, Math.cos(p + off)) * 6 : 0);
    seg(x, -34, kx, ky, 6.4, col); seg(kx, ky, hx, hy, 3, col); seg(hx, hy, fx, fy, 2.4, col); V(SP(`M${fx - 2.6},${fy - 3} L${fx + 2.6},${fy - 3} L${fx + 3.6},${fy} L${fx - 3},${fy}Z`), '#2a1a14', fx, fy - 1, 3, 1); };
  back(-22, 0, dk(fur, .3)); front(10, Math.PI, dk(fur, .3));
  const tw = Math.sin(o.t * 3.4) * 6 + (w ? Math.sin(p) * 5 : 0);
  const tl = SP(`M-30,-38 Q-46,${-40 + tw * .4} -50,${-54 + tw} Q-52,${-64 + tw} -44,${-66 + tw}`); L(tl, dk(fur, .7), 6.4); L(tl, fur, 4); for (let i = 1; i < 4; i++) { const k = i / 4; L(SP(`M${-30 - 18 * k},${-38 - 14 * k + tw * k} l2,2`), spot, 2); } V(E(-44, -66 + tw, 3, 3), spot, -44, -66, 3, 1);
  const body = SP('M-32,-36 Q-32,-48 -18,-48 Q-4,-46 6,-50 Q20,-54 24,-42 Q26,-30 16,-26 Q4,-24 -6,-28 Q-20,-24 -28,-28 Q-34,-30 -32,-36Z'); V(body, fur, -4, -38, 28);
  g.save(); g.clip(body); F(SP('M-30,-30 Q-8,-26 22,-30 L24,-24 L-32,-24Z'), lt(fur, .4));
  for (const [x, y] of [[-24, -40], [-14, -36], [-6, -42], [4, -38], [12, -44], [-18, -30], [-2, -32], [16, -34]]) { for (let i = 0; i < 4; i++) { const a = i * 1.6 + x; F(E(x + Math.cos(a) * 2.6, y + Math.sin(a) * 2.2, 1.2, 1), spot); } F(E(x, y, 1.4, 1.2), fur2); } g.restore();
  back(-16, Math.PI, fur); front(16, 0, fur);
  const sway = Math.sin(o.t * 2) * 4 + (w ? Math.sin(p) * 2 : 0), hx = 30 + sway + rear * 4 + (u < 0 ? -u * 10 : 0), hy = -88 - rear * 10;
  const P0 = [14, -44], P1 = [30, -54], P2 = [12 + sway, -72], P3 = [hx, hy];
  const pts = []; for (let i = 0; i <= 14; i++) { const t = i / 14, q = bez(P0, P1, P2, P3, t); pts.push([q[0], q[1], 8 - t * 3]); }
  const neck = new Path2D(); pts.forEach((q, i) => { const n = pts[Math.min(14, i + 1)], pr = pts[Math.max(0, i - 1)], a = Math.atan2(n[1] - pr[1], n[0] - pr[0]) - Math.PI / 2; const x = q[0] + Math.cos(a) * q[2], y = q[1] + Math.sin(a) * q[2]; i ? neck.lineTo(x, y) : neck.moveTo(x, y); });
  for (let i = 14; i >= 0; i--) { const q = pts[i], n = pts[Math.min(14, i + 1)], pr = pts[Math.max(0, i - 1)], a = Math.atan2(n[1] - pr[1], n[0] - pr[0]) + Math.PI / 2; neck.lineTo(q[0] + Math.cos(a) * q[2], q[1] + Math.sin(a) * q[2]); } neck.closePath();
  V(neck, sn, 20, -66, 20); g.save(); g.clip(neck); for (let i = 1; i < 14; i++) { const q = pts[i], n = pts[i + 1], a = Math.atan2(n[1] - q[1], n[0] - q[0]) + Math.PI / 2; L(SP(`M${q[0] + Math.cos(a) * q[2] * .2},${q[1] + Math.sin(a) * q[2] * .2} L${q[0] + Math.cos(a) * q[2]},${q[1] + Math.sin(a) * q[2]}`), snb, 2.2); }
  for (let i = 2; i < 14; i += 2) { const q = pts[i]; F(E(q[0] - 2, q[1], 2, 1.4), dk(sn, .3)); } g.restore();
  g.save(); g.translate(hx, hy); g.rotate(.1 + Math.sin(o.t * 2.6) * .08 - rear * .2 + (o.mood === 4 ? .3 : 0));
  const op = o.mood === 3 ? .6 : o.mood === 2 ? .2 : Math.max(0, Math.sin(o.t * 1.3) - .93) * 6;
  g.save(); g.translate(0, 3); g.rotate(op); V(SP('M-6,0 L18,1 Q16,6 4,6 Q-5,5 -6,0Z'), dk(sn, .12), 6, 3, 12, 1.6); F(SP('M-4,1.4 L16,2 Q14,4 4,4.4Z'), snb); g.restore();
  if (op > .15) { F(SP(`M-4,3 L20,${3 - op * 2} L16,${4 + op * 14} L-4,5Z`), '#9a1a3a'); F(PL([14, 2.4, 16, 9, 18, 2]), '#fffdf4'); F(PL([4, 2.6, 6, 8, 8, 2.4]), '#fffdf4'); const tg = Math.sin(o.t * 12) * 2; L(SP(`M6,${5 + op * 4} L22,${6 + op * 6 + tg} M22,${6 + op * 6 + tg} l4,-2 M22,${6 + op * 6 + tg} l4,2`), '#e8384a', 1.4); }
  const head = SP('M-8,-2 Q-8,-10 2,-11 Q12,-11 20,-5 Q24,-1 21,2 Q12,4 2,4 Q-8,4 -8,-2Z'); V(head, sn, 6, -3, 14);
  g.save(); g.clip(head); for (const [x, y] of [[0, -8], [6, -9], [12, -7], [3, -5]]) L(SP(`M${x},${y} l3,0 l-1.5,2Z`), dk(sn, .35), 1); F(SP('M-8,1 Q8,3 22,0 L22,4 L-8,4Z'), snb); g.restore();
  F(E(19, -4, 1, .7), INK); V(SP('M2,-10 Q6,-14 11,-10 Q7,-11 3,-8Z'), dk(sn, .15), 6, -10, 4, 1.2);
  eyesX(o, sn, [[5, -6, 3.2, 1]], 'slit', '#f2d040');
  g.restore();
  if (o.mood === 3) for (let i = 0; i < 3; i++) { const r2 = 8 + i * 6 + (o.t * 30 % 6); g.save(); g.globalAlpha = .7 - i * .2; L(SP(`M${hx + 24 + Math.cos(-.6) * r2},${hy + Math.sin(-.6) * r2} A${r2},${r2} 0 0 1 ${hx + 24 + Math.cos(.6) * r2},${hy + Math.sin(.6) * r2}`), '#fff6d0', 2.4); g.restore(); }
  g.restore();
}
function spiritoD(o) {                                          // lo Spirito nella Bottiglia: genio muscoloso di fumo blu, braccia conserte, codino nero, orecchini d'oro
  const sk = '#5a9ae8', skd = dk(sk, .22), u = o.u, w = o.walking ? 1 : 0, hop = w ? -Math.abs(Math.sin(o.ph * .9)) * 5 : 0, grow = o.mood === 3 ? 1.07 : 1;
  g.save(); g.translate(0, hop);
  const bot = SP('M-15,0 Q-19,-10 -18,-22 Q-16,-32 -7,-34 L-6,-44 L6,-44 L7,-34 Q16,-32 18,-22 Q19,-10 15,0Z'); V(bot, '#2f8a4a', 0, -20, 20, 2.4);
  g.save(); g.clip(bot); F(SP('M-14,-18 L14,-18 L14,-6 L-14,-6Z'), '#e8d8a8'); L(SP('M-10,-14 L10,-14 M-8,-10 L6,-10'), '#8a6a3a', 1); F(E(-9, -24, 3, 10), 'rgba(255,255,255,.35)'); F(E(0, -2, 16, 4), 'rgba(10,40,20,.35)'); g.restore();
  V(SP('M-7,-44 L7,-44 L7,-47 L-7,-47Z'), '#3a6a4a', 0, -45, 7, 1.2);
  g.restore();
  V(SP('M22,0 L30,0 L31,-6 L21,-6Z'), '#a8804a', 26, -3, 5, 1.4);
  g.save(); g.translate(0, hop - 46); g.scale(grow, grow); g.rotate((w ? Math.sin(o.ph) * .05 : Math.sin(o.t * 1.4) * .03) + (u > 0 ? -.08 * u : .12 * -u));
  const sw = Math.sin(o.t * 3) * 5;
  const smoke = SP(`M-4,0 Q${-12 + sw},-12 ${-4 - sw},-22 Q${6 + sw * .5},-30 0,-38 Q-6,-42 -8,-48 L14,-48 Q16,-40 10,-34 Q${16 - sw},-24 ${6 + sw},-12 Q4,-4 4,0Z`);
  V(smoke, mix(sk, '#ffffff', .25), 2, -24, 24); for (const [x, y, r] of [[-6 + sw * .6, -14, 6], [8 - sw * .5, -26, 7], [-2, -36, 7]]) V(E(x, y, r, r * .8), mix(sk, '#ffffff', .3), x, y, r, 1.4);
  glowB(2, -64, 46, 'rgba(90,170,255,.22)');
  const tor = SP('M-24,-82 Q-30,-90 -18,-96 Q2,-102 20,-96 Q32,-90 26,-80 Q18,-66 10,-52 Q2,-46 -6,-52 Q-16,-64 -24,-82Z'); V(tor, sk, 0, -76, 32);
  g.save(); g.clip(tor); F(SP('M-16,-90 Q-6,-80 2,-86 Q10,-80 18,-90 Q12,-76 2,-78 Q-8,-76 -16,-90Z'), lt(sk, .2)); L(SP('M2,-84 L2,-56 M-6,-70 Q2,-68 10,-70 M-4,-62 Q2,-60 8,-62'), skd, 1.4); g.restore();
  V(SP('M-6,-54 L10,-54 L9,-48 L-5,-48Z'), '#c8302a', 2, -51, 8, 1.4);
  const crossed = u === 0 && o.mood !== 3 && o.mood !== 2;
  if (crossed) {
    for (const [sx, c] of [[-22, skd], [22, sk]]) { const sgn = sx < 0 ? 1 : -1; seg(sx, -88, sx + sgn * 2, -68, 8, c); }
    V(SP('M-22,-74 Q-2,-80 20,-72 L20,-64 Q-2,-70 -22,-66Z'), skd, 0, -70, 20, 2); V(SP('M-20,-68 Q0,-74 22,-68 L22,-60 Q0,-66 -20,-60Z'), sk, 0, -64, 20, 2);
    for (const [x, y] of [[-20, -64], [22, -64]]) V(E(x, y, 5.4, 5), sk, x, y, 5, 1.6);
    V(SP('M10,-70 L18,-70 L18,-62 L10,-62Z'), '#f2c14e', 14, -66, 4, 1.2);
  } else {
    const hb = arm(-22, -88, 15, 14, 8, 2.0 + (o.mood === 2 ? .3 : 0) + u * .6, -1.2, skd); V(E(hb[0], hb[1], 6, 6), skd, hb[0], hb[1], 6, 1.6);
  }
  g.save(); g.translate(4, -110); g.rotate(Math.sin(o.t * 2) * .04 + (o.mood === 3 ? -.1 : o.mood === 4 ? .22 : 0));
  const pt = Math.sin(o.t * 3) * 4; L(SP(`M-4,-14 Q-16,-18 ${-22 + pt},-6 Q${-26 + pt},6 ${-20 + pt * 1.3},14`), '#0e0e1a', 6); L(SP(`M-4,-14 Q-16,-18 ${-22 + pt},-6 Q${-26 + pt},6 ${-20 + pt * 1.3},14`), '#2a2a3a', 3.4);
  V(E(-3, -15, 4, 3.4), '#2a2a3a', -3, -15, 4, 1.4); V(E(-3, -12, 4.6, 1.6), '#f2c14e', -3, -12, 4, 1);
  for (const sx of [-1, 1]) { const ex = sx < 0 ? -11 : 13; V(SP(`M${ex},${-4} L${ex + sx * 8},${-10} L${ex},${2}Z`), sx < 0 ? skd : sk, ex + sx * 3, -4, 5, 1.4); g.save(); g.strokeStyle = '#f2c14e'; g.lineWidth = 1.6; g.beginPath(); g.arc(ex + sx * 1, 4, 2.6, 0, 7); g.stroke(); g.restore(); }
  const hd = SP('M-11,-4 Q-12,-17 1,-18 Q14,-17 14,-4 Q15,6 9,10 Q2,14 -5,10 Q-11,6 -11,-4Z'); V(hd, sk, 1, -4, 15); F(E(-3, -12, 6, 3), lt(sk, .25));
  eyesX(o, sk, [[-1, -4, 3.4, 1], [7.4, -4.4, 2.8, -1]], 'lidded', '#f2d040'); browsX(o, [[-1, -9.4, 7, 1], [7.4, -9.2, 5.6, -1]], '#0e0e1a', 3.2, 'thick');
  V(SP('M5,-2 Q9,-1 9,3 Q7,4 5,3Z'), skd, 7, 1, 3, 1.1);
  V(SP(`M-1,8 Q4,10 9,8 Q8,14 ${4 + Math.sin(o.t * 2)},22 Q1,14 -1,8Z`), '#0e0e1a', 4, 14, 6, 1.2);
  mouthX(o, 4, 6, 8, 'smirk');
  g.restore();
  if (!crossed) { const h = arm(22, -88, 15, 14, 8.4, .2 - 1.7 * u, -.5 - u * .3, sk); const fs = 6.4 + (u < 0 ? -u * 4 : 0); V(E(h[0], h[1], fs, fs * .92), sk, h[0], h[1], fs, 1.8); for (const y of [-2, 1.4]) L(SP(`M${h[0] - fs * .5},${h[1] + y} l${fs},0`), skd, 1); V(SP(`M${h[0] - 9},${h[1] - 4} L${h[0] - 5},${h[1] - 4} L${h[0] - 5},${h[1] + 4} L${h[0] - 9},${h[1] + 4}Z`), '#f2c14e', h[0] - 7, h[1], 3, 1); if (u < 0) glowB(h[0], h[1], 18, 'rgba(160,220,255,.6)'); }
  g.restore();
}
function morganaD(o) {                                          // Fata Morgana: fluttua, veste di stelle che finisce in scie, maniche a campana, capelli al vento, luna sulla fronte
  const dr = '#1e2466', dr2 = '#343c9a', sl = 'rgba(150,120,255,.55)', sk = '#ece0f4', hair = '#1a1238', u = o.u, cast = o.mood === 2 || o.mood === 3;
  const fl = -8 + Math.sin(o.t * 2) * 3, wind = Math.sin(o.t * 1.6) * 4, sw = Math.sin(o.t * 2.2) * 3 + (o.walking ? Math.sin(o.ph) * 2 : 0);
  F(E(0, 0, 14, 3), 'rgba(160,120,255,.25)');
  g.save(); g.translate(0, fl); g.rotate((o.walking ? .06 : 0) + (u > 0 ? -.06 * u : .1 * -u));
  const hp = SP(`M-4,-92 Q-22,-82 ${-28 + wind},-56 Q${-34 + wind * 1.4},-36 ${-26 + wind * 1.6},-22 Q${-22 + wind},-34 -16,-44 Q${-20 + wind * .6},-30 ${-14 + wind},-20 Q-8,-44 -4,-66Z`);
  V(hp, hair, -14, -56, 26); g.save(); g.clip(hp); for (let i = 0; i < 4; i++) L(SP(`M${-6 - i * 3},-86 Q${-18 - i * 3 + wind},-56 ${-20 - i * 2 + wind * 1.4},-26`), lt(hair, .25), 1); g.restore();
  const robe = SP(`M-7,-66 Q-14,-36 ${-18 + sw},-14 L${-22 + sw * 1.4},-4 L${-12 + sw},-12 L${-8 + sw},0 L${-1 + sw},-10 L${6 + sw},2 L${10 + sw},-10 L${18 + sw},-2 L${16 + sw},-16 Q14,-38 7,-66Z`);
  V(robe, dr, 0, -36, 34); g.save(); g.clip(robe); const gr = g.createLinearGradient(0, -66, 0, 2); gr.addColorStop(0, 'rgba(120,90,255,0)'); gr.addColorStop(1, 'rgba(170,130,255,.55)'); g.fillStyle = gr; g.fillRect(-30, -70, 60, 74);
  for (const [x, y, r] of [[-6, -52, 1.4], [5, -44, 1.8], [-9, -30, 1.6], [7, -24, 1.4], [-1, -16, 2], [11, -34, 1.2], [-13, -12, 1.4], [3, -6, 1.2]]) { const k = .55 + .45 * Math.sin(o.t * 4 + x * 2); g.save(); g.globalAlpha = k; F(SP(`M${x},${y - r * 2.2} L${x + r * .5},${y - r * .5} L${x + r * 2.2},${y} L${x + r * .5},${y + r * .5} L${x},${y + r * 2.2} L${x - r * .5},${y + r * .5} L${x - r * 2.2},${y} L${x - r * .5},${y - r * .5}Z`), '#fff4c8', '#ffe9a0'); g.restore(); } g.restore();
  for (let i = 0; i < 3; i++) { const k = (o.t * .7 + i / 3) % 1; g.save(); g.globalAlpha = 1 - k; F(E(-14 + i * 14 + sw, 2 + k * -10, 1.4, 1.4), '#e0d0ff', '#c8a8ff'); g.restore(); }
  const sleeve = (sx, sy, a, col, front) => { g.save(); g.translate(sx, sy); g.rotate(a); seg(0, 0, 0, 12, 3.4, col); const sl2 = SP(`M-2,8 Q-10,22 ${-12 + (front ? 0 : 2)},${30 + Math.sin(o.t * 3 + sx) * 2} Q-2,26 4,24 Q4,16 3,8Z`); V(sl2, front ? dr2 : dk(dr2, .25), -3, 18, 12, 1.6); g.save(); g.clip(sl2); F(SP('M-14,24 Q-4,20 6,22 L6,34 L-14,34Z'), sl); g.restore(); g.restore(); };
  sleeve(-6, -64, .3 + (cast ? -1.4 : 0) + Math.sin(o.t * 1.4) * .05, dk(dr, .2), 0);
  V(SP('M-7,-68 Q0,-72 7,-68 L8,-50 Q0,-47 -8,-50Z'), dr2, 0, -60, 12); L(SP('M-7,-68 Q0,-60 7,-68'), '#c8c8e8', 1.6); F(SP('M-8,-52 L8,-52 L8,-49 L-8,-49Z'), '#c8c8e8'); V(E(0, -50.5, 2, 2), '#c8a8ff', 0, -50, 2, .8);
  F(SP('M-3,-72 L3,-72 L3,-68 L-3,-68Z'), sk);
  g.save(); g.translate(1, -80); g.rotate(Math.sin(o.t * 1.5) * .05 + (o.mood === 3 ? -.08 : o.mood === 4 ? .22 : 0));
  const face = SP('M-7,-6 Q-7,-14 1,-14 Q9,-14 9,-5 Q9,3 5,8 Q2,11 0,11 Q-3,10 -5,5 Q-7,1 -7,-6Z'); V(face, sk, 1, -2, 11);
  V(SP(`M-8,8 Q-11,-10 -2,-15 Q8,-17 10,-8 Q4,-12 -2,-10 Q-5,-4 -4,8 Q${-6 + wind * .3},14 -8,8Z`), hair, -2, -4, 12);
  V(SP('M-7,-11 Q1,-15 9,-11 L9,-9.4 Q1,-13 -7,-9.4Z'), '#c8c8e8', 1, -11, 8, 1);
  V(SP('M-.6,-17 A4,4 0 1 1 5,-14 A3,3 0 1 0 -.6,-17Z'), '#f8f0c0', 2, -15, 4, 1); glowB(2, -15, 9, 'rgba(255,250,190,.55)');
  F(E(0, -4.6, 3.6, 1.4), 'rgba(110,60,200,.35)'); F(E(6.4, -4.8, 2.8, 1.2), 'rgba(110,60,200,.35)');
  eyesX(o, sk, [[0, -3, 2.8, 1], [6.4, -3.2, 2.2, -1]], 'lashes', '#8a3ae8'); browsX(o, [[0, -7.6, 5.4, 1], [6.4, -7.4, 4.2, -1]], hair, 1.3, 'arch');
  V(SP('M6,-2 Q8.6,2.4 7.4,3.6 Q6.4,3.4 6,2.6Z'), dk(sk, .05), 7, 1, 2, .9);
  mouthX(o, 3.6, 6.4, 5.4, 'pout', { lips: '#6a2a8a' });
  g.restore();
  const fa = cast ? -1.1 - u * .4 : -.15 + Math.sin(o.t * 1.6) * .1;
  sleeve(6, -64, fa - Math.PI / 2 + .2, dr, 1);
  const hx = 6 + Math.cos(fa + .2) * 15, hy = -64 + Math.sin(fa + .2) * 15, orb = cast ? 6 + (u > 0 ? u * 3 : 2) : 3.2;
  glowB(hx + 4, hy - 4, orb * 3.4, 'rgba(180,110,255,.75)'); V(E(hx + 4, hy - 4, orb, orb), '#d8b0ff', hx + 4, hy - 4, orb, 1); F(E(hx + 2.6, hy - 5.6, orb * .3, orb * .3), '#fff');
  for (let i = 0; i < 5; i++) { const a = o.t * 3 + i * 1.26, r = orb * 2.2; F(E(hx + 4 + Math.cos(a) * r, hy - 4 + Math.sin(a) * r * .6, 1.1, 1.1), '#f4e8ff'); }
  g.restore();
}
Object.assign(DRAW, { babajaga: babajagaD, bestia: bestiaD, spirito: spiritoD, morgana: morganaD });
