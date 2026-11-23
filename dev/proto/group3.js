// ---------- gruppo 3: i rari ----------
function gattoD(o) {                                            // il Gatto: finto cieco, occhialoni scuri e bastone
  const fur = '#5e5e70', coat = '#6a4a7a', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3), sw = Math.sin(o.ph);
  const tl = SP(`M-7,-30 Q-22,-30 -22,${-44 + Math.sin(o.t * 3) * 4} Q-22,-52 -15,-52`); L(tl, dk(fur, .7), 6); L(tl, fur, 3.6);
  g.save(); g.translate(0, b); arm(-4, -50, 9, 9, 3.8, 1.7 + sw * .5 * w + u * .3, -.5, dk(coat, .3)); g.restore();
  leg(-3, -26, 12, 12, 4.4, o, Math.PI, dk(fur, .3), '#2a2a34', .65); leg(3, -26, 12, 12, 4.4, o, 0, fur, '#3a3a44', .65);
  g.save(); g.translate(0, b); g.rotate(.05 + w * .08 + (u > 0 ? -.08 * u : .12 * -u));
  const tor = SP('M-9,-54 Q0,-58 9,-54 L12,-27 Q0,-23 -12,-27Z'); V(tor, coat, 0, -40, 16);
  g.save(); g.clip(tor); V(SP('M2,-46 L9,-46 L9,-38 L2,-38Z'), '#8a6a3a', 5, -42, 5, 1.2); L(SP('M3,-45 l1,1 M8,-45 l-1,1'), '#1b1238', .8); g.restore();
  L(SP('M0,-54 L0,-28'), dk(coat, .4), 1.2);
  g.save(); g.translate(3, -65); g.rotate(Math.sin(o.t * 2) * .05 + (o.mood === 3 ? -.12 : o.mood === 4 ? .2 : 0) + (w ? sw * .04 : 0));
  V(PL([-9, -4, -8, -20, -1, -8]), dk(fur, .2), -6, -10, 6, 1.6); 
  V(E(0, 0, 11, 10), fur, 0, 0, 11); F(E(6, 4, 6, 4), lt(fur, .35));
  V(PL([2, -8, 8, -21, 11, -5]), fur, 7, -11, 6, 1.6); F(PL([4, -8, 8, -17, 9.4, -7]), '#e8a0b0');
  eyes(o, fur, [[0, -2, 3.2, 1], [7, -2.2, 2.6, -1]], '#9ad040'); brows(o, [[0, -8.4, 5.6, 1], [7, -8.4, 4.4, -1]], '#2a2a34', 1.8);
  const gy = o.mood >= 2 ? 3.6 : 0; for (const [x, r] of [[0, 4], [7.2, 3.4]]) { V(E(x, -2 + gy, r, r), '#1c1a24', x, -2 + gy, r, 1.4); F(E(x - r * .35, -3 + gy, r * .3, r * .22), 'rgba(255,255,255,.6)'); } L(SP(`M4,${-2 + gy} L3.8,${-2 + gy}`), '#1c1a24', 1.4);
  V(E(10, 3, 1.6, 1.3), '#e86a8a', 10, 3, 1.6, .8); mouth(o, 7, 6, 5.6);
  for (const dy of [3, 5.5]) L(SP(`M11,${dy} l7,${dy - 4}`), 'rgba(255,255,255,.55)', .7);
  g.restore();
  const h = arm(5, -50, 9, 9, 3.8, .9 - 1.8 * u, -.4, coat);
  atHand(h, -1.2, () => { seg(0, 14, 0, -26, 2.2, '#6a4426'); L(SP('M0,-26 Q0,-33 -5,-33 Q-9,-32 -8,-28'), '#6a4426', 2.6); });
  V(E(h[0], h[1], 3, 3), fur, h[0], h[1], 3, 1.4);
  g.restore();
}
function volpeD(o) {                                            // la Volpe: furba, giacca blu, coda folta e sacco dell'oro
  const fur = '#d8742a', jk = '#3a5a8a', cr = '#f4efe6', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3), sw = Math.sin(o.ph);
  g.save(); g.translate(-6, -32 + b); g.rotate(Math.sin(o.t * 2.4) * .12 + (w ? Math.sin(o.ph) * .15 : 0)); V(SP('M0,0 Q-22,4 -26,-16 Q-24,-28 -15,-24 Q-14,-10 0,-6Z'), fur, -14, -10, 14); F(E(-22, -22, 5.4, 5), cr); g.restore();
  g.save(); g.translate(0, b); arm(-4, -54, 10, 10, 3.8, 1.7 + sw * .5 * w, -.5, dk(jk, .3)); g.restore();
  leg(-3, -28, 13, 13, 4.4, o, Math.PI, dk(fur, .3), '#2a1a14', .7); leg(3, -28, 13, 13, 4.4, o, 0, fur, '#3a2418', .7);
  g.save(); g.translate(0, b); g.rotate(.06 + w * .09 + (u > 0 ? -.08 * u : .12 * -u));
  V(SP('M-10,-58 Q0,-62 10,-58 L12,-29 L4,-27 L0,-35 L-4,-27 L-12,-29Z'), jk, 0, -44, 16);
  F(PL([-3, -58, 3, -58, 0, -44]), cr); for (const y of [-50, -42, -34]) V(E(4.6, y, 1.5, 1.5), '#f2c14e', 4.6, y, 1.5, .8);
  g.save(); g.translate(4, -69); g.rotate(Math.sin(o.t * 2.2) * .05 + (o.mood === 3 ? -.12 : o.mood === 4 ? .2 : 0) + (w ? sw * .04 : 0));
  V(PL([-9, -3, -8, -22, 0, -8]), dk(fur, .2), -5, -10, 6, 1.6); F(PL([-9, -16, -8, -22, -5, -17]), '#1c1a24');
  V(E(0, 0, 10, 9.6), fur, 0, 0, 10);
  V(SP('M4,-4 Q16,-3 23,2 Q22,6 16,7 L4,7Z'), fur, 13, 2, 9, 1.8); F(SP('M3,3 Q12,4 22,4 Q20,7 14,8 Q6,9 3,6Z'), cr); V(E(23, 2, 2.4, 2), '#1c1a24', 23, 2, 2, 1);
  F(SP('M-9,2 Q-4,8 2,6 Q-2,1 -9,2Z'), cr);
  V(PL([2, -6, 8, -24, 11, -5]), fur, 7, -12, 6, 1.6); F(PL([6, -18, 8, -24, 9.6, -17]), '#1c1a24');
  eyes(o, fur, [[0, -2, 3.2, 1], [7, -2.4, 2.6, -1]], '#7ad04a'); brows(o, [[0, -7.6, 5.6, 1], [7, -7.6, 4.4, -1]], dk(fur, .6), 2);
  if (o.mood === 0) L(SP('M-3,-3.6 Q0,-5 3,-3.6 M5,-3.8 Q7,-5 9.4,-3.8'), dk(fur, .5), 1.6);
  mouth(o, 11, 7.6, 7, { fang: 1 });
  g.restore();
  const h = arm(5, -54, 10, 10, 3.8, .7 - 1.9 * u, -.5, jk);
  atHand(h, -.2, () => { V(E(0, 9, 8.4, 9.4), '#c8a050', 0, 9, 9); L(SP('M-4,1 Q0,4 4,1'), '#7a5530', 2); F(E(0, -1, 4, 2), '#7a5530'); F(E(-3, 11, 1.6, 1.6), '#f2d070'); F(E(3, 7, 1.2, 1.2), '#f2d070'); if (o.mood >= 2) F(E(6, 2, 2.6, 2.6), '#fff3a0', '#ffe060'); });
  V(E(h[0], h[1], 3, 3), fur, h[0], h[1], 3, 1.4);
  g.restore();
}
function pumpkinB(x, y, t, s = 1) { g.save(); g.translate(x, y); g.scale(s, s); V(E(0, 0, 6.6, 5.6), '#e8842a', 0, 0, 7, 1.6); L(SP('M0,-5 Q-3,0 0,5 M-3.4,-4.4 Q-6,0 -3.4,4.4 M3.4,-4.4 Q6,0 3.4,4.4'), '#b85a1a', 1); seg(0, -5, 1, -8, 1.6, '#4a7a2a');
  L(SP('M1,-8 Q4,-12 6,-11'), '#3a3a3a', 1.2); glowB(6, -11, 8, 'rgba(255,200,60,.8)'); F(E(6, -11, 1.6, 1.6), '#fff6a0'); g.restore(); }
function gnomoD(o) {                                            // lo Gnomo: cappello rosso, barba bianca, lancia zucche esplosive
  const sk = '#f0c8a0', sh = '#3a6ac8', hat = '#d8443a', pa = '#6a4a2a', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3.4), sw = Math.sin(o.ph);
  const hold = o.atk < 0 || o.atk < .5;
  g.save(); g.translate(0, b); arm(-6, -34, 8, 8, 4, 1.7 + sw * .6 * w, -.5, dk(sh, .3)); g.restore();
  leg(-4, -18, 8, 9, 4.8, o, Math.PI, dk(pa, .25), '#3a2418', .8); leg(4, -18, 8, 9, 4.8, o, 0, pa, '#4a3020', .8);
  g.save(); g.translate(0, b); g.rotate(.05 + w * .09 + (u > 0 ? -.1 * u : .15 * -u));
  V(SP('M-11,-38 Q0,-44 11,-38 Q14,-24 10,-16 L-10,-16 Q-14,-24 -11,-38Z'), sh, 0, -28, 15);
  F(SP('M-12,-22 L12,-22 L12,-18 L-12,-18Z'), '#4a3020'); V(SP('M-2,-23 L4,-23 L4,-17 L-2,-17Z'), '#f2c14e', 1, -20, 3, 1);
  g.save(); g.translate(2, -48); g.rotate(Math.sin(o.t * 2.4) * .06 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0) + (w ? sw * .05 : 0));
  V(E(0, 0, 10, 9.6), sk, 0, 0, 10);
  const beard = SP(`M-9,1 Q-10,14 -2,20 Q2,${17 + Math.sin(o.t * 3)} 4,21 Q8,17 12,18 Q14,10 11,2 Q6,6 1,5 Q-4,6 -9,1Z`); V(beard, '#f4f0ea', 1, 10, 12, 1.8);
  L(SP('M-4,10 Q-2,14 -4,17 M4,11 Q6,15 5,18'), '#c8c4d0', 1);
  eyes(o, sk, [[-1, -3, 3, 1], [5.6, -3.2, 2.5, -1]], '#3a6ac8'); brows(o, [[-1, -8, 6, 1], [5.6, -7.8, 4.8, -1]], '#f4f0ea', 3);
  V(E(5.6, 2, 3.4, 2.8), '#f0907a', 5.6, 2, 3, 1.2);
  if (o.mood === 3 || o.mood === 2) mouth(o, 3, 7, 6);
  const sway = Math.sin(o.t * 3) * 3 + (w ? sw * 3 : 0);
  V(SP(`M-11,-5 Q-8,-24 ${-2 + sway},-34 Q${-8 + sway},-40 ${-14 + sway},-36 Q${-4 + sway},-30 6,-28 Q10,-16 12,-5 Q0,-9 -11,-5Z`), hat, 0, -18, 16);
  F(SP('M-11.4,-6 Q0,-10 12.4,-6 L12.6,-3 Q0,-7 -11.6,-3Z'), dk(hat, .3));
  g.restore();
  const h = arm(5, -34, 8, 8, 4, .9 - 2.6 * u, -.5 + u * .4, sh);
  if (hold) pumpkinB(h[0] + 3, h[1] - 3, o.t, 1);
  V(E(h[0], h[1], 3.2, 3.2), sk, h[0], h[1], 3, 1.4);
  g.restore();
}
function spaventaD(o) {                                         // lo Spaventapasseri: paglia, toppe, sacco cucito per faccia, il corvo sulla spalla
  const sack = '#d8c08a', sh = '#4a7ac0', pa = '#7a6a42', hat = '#5a4a3a', straw = '#f2d060', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3), sw = Math.sin(o.ph);
  const tuft = (x, y, a, n = 4) => { for (let i = 0; i < n; i++) { const aa = a + (i - n / 2) * .3; L(SP(`M${x},${y} l${Math.cos(aa) * 7},${Math.sin(aa) * 7}`), straw, 1.4); } };
  g.save(); g.translate(0, b); const hb = arm(-6, -68, 14, 13, 4.8, 3.05 + Math.sin(o.t * 2) * .08, .2 - u * .2, dk(sh, .3)); tuft(hb[0], hb[1], hb[2]); g.restore();
  leg(-4, -38, 18, 18, 5.6, o, Math.PI, dk(pa, .25), '#4a3a2a', .5); leg(4, -38, 18, 18, 5.6, o, 0, pa, '#5a4a32', .5);
  g.save(); g.translate(0, b); g.rotate(.03 + (w ? sw * .07 : 0) + (u > 0 ? -.08 * u : .12 * -u));
  tuft(-4, -36, 1.9, 3); tuft(5, -36, 1.2, 3);
  const tor = SP('M-12,-74 Q0,-79 12,-74 L13,-38 Q0,-35 -13,-38Z'); V(tor, sh, 0, -56, 22);
  g.save(); g.clip(tor); for (const x of [-8, -2, 4, 10]) L(SP(`M${x},-80 L${x},-34`), 'rgba(200,40,40,.35)', 2); for (const y of [-68, -58, -48]) L(SP(`M-14,${y} L14,${y}`), 'rgba(200,40,40,.3)', 2);
  V(SP('M-9,-52 L-1,-52 L-1,-44 L-9,-44Z'), '#c86a3a', -5, -48, 5, 1.2); L(SP('M-9,-52 l1,1 M-1,-52 l-1,1 M-9,-44 l1,-1 M-1,-44 l-1,-1'), '#1b1238', .8);
  V(SP('M4,-70 L10,-70 L10,-64 L4,-64Z'), '#6aa044', 7, -67, 4, 1.2); g.restore();
  L(SP('M-13,-40 L13,-40'), '#7a5530', 3); tuft(0, -78, -1.6, 5);
  g.save(); g.translate(3, -86); g.rotate(-.12 + Math.sin(o.t * 1.6) * .08 + (o.mood === 3 ? -.1 : o.mood === 4 ? .24 : 0) + (w ? sw * .07 : 0));
  const hd = SP('M-10,-2 Q-11,-14 1,-15 Q12,-14 12,-2 Q13,9 2,11 Q-10,10 -10,-2Z'); V(hd, sack, 1, -2, 13);
  g.save(); g.clip(hd); for (let i = 0; i < 9; i++) L(SP(`M${-10 + i * 3},-15 l0,26`), 'rgba(120,90,40,.18)', .8); g.restore();
  eyes(o, sack, [[-1, -3, 3.3, 1], [6.6, -3.2, 2.7, -1]], '#2a1a10'); brows(o, [[-1, -8.6, 6, 1], [6.6, -8.4, 4.8, -1]], '#3a2a1a', 1.8);
  V(PL([3, 0, 11, 3, 3, 4]), '#e8842a', 6, 2, 4, 1.2);
  mouth(o, 3, 7, 10); for (const x of [-1, 2, 5, 8]) L(SP(`M${x},5 l0,4`), '#3a2a1a', 1);
  tuft(-10, 2, 2.4, 3); tuft(11, 2, .8, 3);
  V(SP('M-18,-9 Q0,-16 19,-8 Q21,-4 16,-4 Q0,-9 -16,-3 Q-21,-4 -18,-9Z'), hat, 0, -7, 18);
  V(SP('M-9,-11 Q-7,-24 2,-26 Q10,-24 11,-11 Q0,-14 -9,-11Z'), hat, 1, -18, 11); F(SP('M-8,-12 Q1,-15 10.6,-12 L10.8,-14.6 Q1,-17 -8.4,-14.6Z'), '#c8302a');
  V(SP('M2,-24 L7,-24 L7,-19 L2,-19Z'), '#6aa0d0', 4, -21, 3, 1);
  g.restore();
  g.save(); g.translate(-9, -78 + Math.sin(o.t * 4) * 1.4);                       // il corvo sulla spalla
  V(SP('M-6,0 L-14,-2 L-15,2 L-6,3Z'), '#2c2840', -10, 1, 5, 1.4); V(E(0, -3, 7, 5), '#2c2840', 0, -3, 7, 1.6);
  V(E(5, -9, 4.6, 4.2), '#2c2840', 5, -9, 4, 1.4); V(PL([8, -10, 15, -8, 8, -7]), '#3a3a44', 10, -8, 3, 1);
  F(E(6, -10, 1.6, 1.6), '#fff'); F(E(6.4, -10, .8, .8), '#1b1238'); L(SP('M-1,2 l0,4 M2,2 l0,4'), '#e8a03a', 1.2);
  g.restore();
  const h = arm(6, -68, 14, 13, 4.8, .5 - 2 * u, -.6 + u * .3, sh); tuft(h[0], h[1], h[2], 3);
  atHand(h, -.5, () => { seg(0, 8, 0, -16, 2.4, '#6a4426'); V(SP('M0,-16 Q16,-22 20,-8 Q14,-16 2,-12Z'), '#b8bcc8', 10, -14, 9, 1.6); F(E(12, -16, 1.4, 1), '#a8603a'); });
  g.restore();
}
function matrignaD(o) {                                         // la Matrigna: alta, secca, colletto alto, ventaglio
  const dr = '#4a2a5a', dr2 = '#6a3a7a', sk = '#f0dcc8', hair = '#8a8a9a', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 2), sw = Math.sin(o.ph) * (w ? 4 : 0) + Math.sin(o.t * 2) * 1.5;
  g.save(); g.translate(0, b);
  for (const x of [-5, 6]) V(E(x + (w ? Math.sin(o.ph + (x > 0 ? 0 : Math.PI)) * 4 : 0) + 3, -1, 5, 2.4), '#2a1a2a', x, -1, 5, 1.4);
  const sk1 = SP(`M-8,-60 Q-16,-30 ${-18 + sw},-2 Q0,${2} ${18 + sw},-2 Q14,-30 8,-60Z`); V(sk1, dr, 0, -30, 30);
  g.save(); g.clip(sk1); for (const x of [-8, 0, 8]) L(SP(`M${x * .4},-60 Q${x},-30 ${x * 1.5 + sw},0`), dk(dr, .3), 1.4); F(SP(`M-20,-6 L22,-6 L22,2 L-20,2Z`), dr2); g.restore();
  arm(-6, -80, 11, 11, 3.6, 1.55 + Math.sin(o.t * 1.6) * .06, -.6, dk(dr, .25));
  V(SP('M-8,-84 Q0,-88 8,-84 L9,-58 Q0,-55 -9,-58Z'), dr, 0, -72, 14); F(SP('M-9,-62 L9,-62 L9,-58 L-9,-58Z'), '#2a1a2a'); V(E(0, -60, 2.4, 2.4), '#7af0c0', 0, -60, 2, 1);
  g.save(); g.translate(1, -97); g.rotate(Math.sin(o.t * 1.4) * .04 + (o.mood === 3 ? -.1 : o.mood === 4 ? .2 : 0) + (w ? Math.sin(o.ph) * .03 : 0));
  V(SP('M-12,10 Q-20,-6 -12,-14 Q-6,-8 -4,-2 Q-4,-14 2,-18 Q8,-8 6,0 Q10,-10 16,-10 Q16,2 8,12Z'), '#ece6f2', 0, -2, 18, 1.8);
  V(SP('M-7,-4 Q-8,-14 1,-14 Q9,-13 9,-3 Q9,8 2,11 Q-6,9 -7,-4Z'), sk, 1, -2, 11);
  V(E(-2, -15, 8, 5.4), hair, -2, -15, 8, 1.6); V(E(-2, -22, 5, 4.4), hair, -2, -22, 5, 1.4);
  F(E(0, -4, 3.4, 2), 'rgba(140,60,160,.3)'); F(E(6.6, -4.2, 2.6, 1.6), 'rgba(140,60,160,.3)');
  eyes(o, sk, [[0, -3, 2.8, 1], [6.6, -3.2, 2.3, -1]], '#4a8a3a'); brows(o, [[0, -7.4, 5.4, 1], [6.6, -7.4, 4.4, -1]], '#4a4a5a', 1.4);
  V(PL([6, -3, 13, 3, 7, 4]), sk, 8, 1, 4, 1.2); F(E(-3, 3, .9, .9), '#4a2a2a');
  mouth(o, 4, 7, 5, { lips: '#8a1a3a' });
  g.restore();
  const h = arm(6, -80, 11, 11, 3.6, .5 - 1.6 * u, -.6, dr);
  g.save(); g.translate(h[0], h[1]); g.rotate(-.9 + (o.atk >= 0 ? Math.sin(o.atk * Math.PI * 2) * .5 : Math.sin(o.t * 4) * .15));
  const fan = new Path2D(); fan.moveTo(0, 0); fan.arc(0, 0, 16, -Math.PI * .95, -Math.PI * .05); fan.closePath(); V(fan, '#c8302a', 0, -8, 14, 1.6);
  for (let i = 0; i < 7; i++) { const a = -Math.PI * .95 + i * Math.PI * .9 / 6; L(SP(`M0,0 L${Math.cos(a) * 15},${Math.sin(a) * 15}`), '#3a0e14', .9); }
  g.restore(); V(E(h[0], h[1], 2.6, 2.6), sk, h[0], h[1], 3, 1.2);
  g.restore();
}
function sorellaD(o, v) {                                       // le sorellastre: tonde, capelli enormi, una scarpa come arma
  const dress = v ? '#c87ad8' : '#ff8aa8', hair = v ? '#c8642a' : '#4a3020', sk = '#f0c8a8', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3.4), sw = Math.sin(o.ph);
  leg(-4, -16, 8, 8, 4.4, o, Math.PI, dk(sk, .2), '#c8302a', .7); leg(4, -16, 8, 8, 4.4, o, 0, sk, '#c8302a', .7);
  g.save(); g.translate(0, b); g.rotate((w ? sw * .06 : 0) + (u > 0 ? -.08 * u : .12 * -u));
  arm(-8, -38, 8, 8, 4.4, 1.6 + sw * .5 * w, -.4, dk(sk, .2));
  const sk1 = SP('M-9,-36 Q-22,-20 -20,-12 Q0,-6 20,-12 Q22,-20 9,-36Z'); V(sk1, dress, 0, -24, 22);
  F(SP('M-20,-14 Q-15,-10 -10,-14 Q-5,-10 0,-14 Q5,-10 10,-14 Q15,-10 20,-14 L20,-11 Q0,-5 -20,-11Z'), lt(dress, .4));
  V(E(0, -40, 11, 9), dress, 0, -40, 11); F(E(0, -36, 9, 1.6), lt(dress, .4));
  g.save(); g.translate(1, -55); g.rotate(Math.sin(o.t * 2.2 + v) * .06 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0) + (w ? sw * .05 : 0));
  V(SP('M-15,4 Q-23,-14 -8,-24 Q6,-31 16,-18 Q22,-6 13,3 Q2,-6 -15,4Z'), hair, 0, -10, 20);
  for (const [x, y] of [[-14, -6], [-10, -18], [2, -24], [13, -15]]) V(E(x, y, 5, 4.4), hair, x, y, 5, 1.4);
  V(E(1, -1, 9, 9), sk, 1, -1, 9);
  F(E(-4, 3, 2.6, 1.6), 'rgba(240,100,110,.45)'); F(E(7, 3, 2.2, 1.4), 'rgba(240,100,110,.45)');
  eyes(o, sk, [[-1, -2, 3, 1], [5.6, -2.2, 2.5, -1]], '#4a6ad8'); brows(o, [[-1, -6.8, 5.4, 1], [5.6, -6.6, 4.4, -1]], hair, 1.6);
  L(SP('M-4,-4 l-1.6,-1.2 M-4,-2.6 l-1.8,0'), '#1b1238', .9);
  mouth(o, 3, 5, 5, { lips: '#d8304a' });
  V(E(-10, -18, 4, 3), v ? '#ffe04a' : '#7ad8e8', -10, -18, 3, 1.2);
  g.restore();
  const h = arm(7, -38, 8, 8, 4.4, .6 - 2 * u, -.4, sk);
  atHand(h, -1.1, () => { V(SP('M-2,0 L-3,-10 Q4,-14 12,-12 Q14,-8 8,-6 Q3,-5 2,0Z'), '#c8302a', 4, -7, 8, 1.4); seg(-2, 0, -3, 5, 1.6, '#c8302a'); });
  g.restore();
}
function ratHead(o, sc2, crown) {
  const fur = '#9a92aa';
  g.save(); g.scale(sc2, sc2);
  V(E(-5, -9, 5, 6), dk(fur, .2), -5, -9, 5, 1.6); F(E(-5, -9, 2.6, 3.4), '#e8a0b0');
  V(SP('M-8,-1 Q-8,-11 2,-11 Q10,-10 17,-2 Q19,2 15,4 Q4,7 -5,5 Q-9,3 -8,-1Z'), fur, 3, -2, 12);
  V(E(18, -.4, 2.4, 2), '#ff8aa8', 18, 0, 2, 1); for (const dy of [-1, 1.6]) L(SP(`M15,${dy} l9,${dy * 1.4}`), 'rgba(40,30,50,.5)', .7);
  eyes(o, fur, [[3, -4, 3, 1], [8.6, -4.4, 2.3, -1]], '#c82a3a'); brows(o, [[3, -8.4, 4.6, 1], [8.6, -8.2, 3.6, -1]], dk(fur, .6), 1.4);
  if (o.mood === 3) mouth(o, 12, 3, 5); else { F(SP('M11,3 L14,3 L13.8,6.4 L11.2,6.4Z'), '#fffdf4'); L(SP('M11,3 L14,3 L13.8,6.4 L11.2,6.4Z'), '#1b1238', .8); }
  V(E(1, -11, 5.4, 6.4), fur, 1, -11, 5, 1.6); F(E(1.4, -10.6, 3, 4), '#f2a4b8');
  if (crown) V(SP('M-5,-11 L-6,-19 L-2,-15 L1,-21 L4,-15 L8,-19 L7,-11Z'), '#f2c14e', 1, -15, 7, 1.4);
  g.restore();
}
function retopiD(o) {                                           // il Re dei Topi: tre teste coronate, mantello con l'ermellino, spadino
  const fur = '#9a92aa', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3), sw = Math.sin(o.ph) * (w ? 4 : 0);
  const tl = SP(`M-8,-30 Q-26,-24 -30,${-8 + Math.sin(o.t * 3) * 4} Q-34,4 -24,6`); L(tl, dk('#e8a0b0', .5), 4.4); L(tl, '#e8a0b0', 2.4);
  g.save(); g.translate(0, b);
  const cape = SP(`M-10,-70 Q-24,-40 ${-24 + sw},-6 L${10 + sw * .5},-10 Q8,-40 10,-70Z`); V(cape, '#a8283a', -6, -38, 30);
  L(SP(`M-10,-70 Q-24,-40 ${-24 + sw},-6`), '#f4f0ea', 4); for (let i = 0; i < 5; i++) F(E(-14 - i * 2.4 + sw * i / 5, -62 + i * 13, 1, 1.6), '#1b1238');
  arm(-6, -60, 11, 10, 4.4, 1.7 + Math.sin(o.ph) * .5 * w, -.5, dk(fur, .3));
  g.restore();
  leg(-5, -32, 14, 15, 5, o, Math.PI, dk(fur, .3), '#e8a0b0', .7); leg(5, -32, 14, 15, 5, o, 0, fur, '#f0b0c0', .7);
  g.save(); g.translate(0, b); g.rotate(.06 + w * .08 + (u > 0 ? -.08 * u : .12 * -u));
  const bd = E(0, -48, 13, 20); V(bd, fur, 0, -48, 20); g.save(); g.clip(bd); F(E(5, -42, 8, 14), lt(fur, .35)); g.restore();
  L(SP('M-10,-62 L11,-36'), '#f2c14e', 3.4); V(E(2, -50, 3, 3), '#e8384a', 2, -50, 3, 1);
  for (const [x, y, s2, v, c] of [[-10, -70, .82, 1, 1], [14, -72, .85, 2, 1], [2, -80, 1, 0, 1]]) { g.save(); g.translate(x, y); g.rotate(Math.sin(o.t * 2 + v * 2) * .1 + (o.mood === 4 ? .2 : 0)); ratHead(Object.assign({}, o, { blink: (o.t * 3 + v) % 4 < .15 ? .1 : o.blink }), s2, c); g.restore(); }
  const h = arm(7, -60, 11, 10, 4.6, .3 - 1.2 * u, -.3 + u * .3, fur);
  atHand(h, -.15 + (o.u < 0 ? .5 : 0), () => { V(SP('M-5,-1 Q0,-5 5,-1 L4,1 Q0,-2 -4,1Z'), '#f2c14e', 0, -1, 4, 1); seg(0, -2, 0, -28, 1.6, '#dfe6f2'); F(E(0, 2, 1.8, 1.8), '#f2c14e'); });
  V(E(h[0], h[1], 3, 3), fur, h[0], h[1], 3, 1.2);
  g.restore();
}
function zenzeroD(o) {                                          // l'Omino di Pan di Zenzero: biscotto con la glassa, corre come un matto
  const ck = '#c47a3a', ic = '#fff6ec', u = o.u, w = o.walking ? 1 : 0, sw = Math.sin(o.ph * 1.3), b = w ? -Math.abs(Math.sin(o.ph * 1.3)) * 5 : Math.sin(o.t * 5) * .8;
  const limb = (x1, y1, x2, y2) => { seg(x1, y1, x2, y2, 7.5, ck); const dx = x2 - x1, dy = y2 - y1, l = Math.hypot(dx, dy), nx = -dy / l, ny = dx / l, mx = x1 + dx * .8, my = y1 + dy * .8;
    L(SP(`M${mx + nx * 3},${my + ny * 3} L${mx + dx * .05 - nx * 3},${my + dy * .05 - ny * 3} L${mx + dx * .1 + nx * 3},${my + dy * .1 + ny * 3}`), ic, 1.3); };
  const run = o.walking ? 1 : 0, ph = o.ph * 1.3;
  g.save(); g.translate(0, b); g.rotate(.06 + run * .18 + (u > 0 ? -.1 * u : .18 * -u));
  const la = s => run ? Math.sin(ph + s) * 1.0 : 0;
  limb(-3, -14, -3 + Math.sin(la(Math.PI)) * 12, -14 + Math.cos(la(Math.PI)) * 12);
  limb(-5, -30, -5 - Math.cos(1.2 + la(0)) * 11, -30 + Math.sin(1.2 + la(0)) * 11);
  const bd = SP('M-9,-34 Q0,-38 9,-34 L10,-14 Q0,-10 -10,-14Z'); V(bd, ck, 0, -24, 14);
  for (const [y, c] of [[-29, '#e8384a'], [-23, '#4ac060'], [-17, '#e8384a']]) V(E(1, y, 2.2, 2.2), c, 1, y, 2, 1);
  limb(3, -14, 3 + Math.sin(la(0)) * 12 + (o.u < 0 ? 6 : 0), -14 + Math.cos(la(0)) * 12);
  g.save(); g.translate(1, -44); g.rotate(Math.sin(o.t * 3) * .07 + (o.mood === 3 ? -.12 : o.mood === 4 ? .22 : 0) + run * sw * .06);
  V(E(0, 0, 11, 10.5), ck, 0, 0, 11);
  L(SP('M-8,-6 Q-6,-10 -3,-8 Q0,-12 3,-8 Q6,-11 8,-6'), ic, 1.6);
  eyes(o, ck, [[-3, -1, 3, 1], [4, -1.2, 2.6, -1]], '#3a1a0a'); brows(o, [[-3, -5.6, 5, 1], [4, -5.4, 4, -1]], '#5a2a10', 1.8);
  F(E(-6, 4, 2.2, 1.4), 'rgba(240,110,90,.5)'); F(E(7, 4, 2, 1.3), 'rgba(240,110,90,.5)');
  mouth(o, .6, 5, 7); if (o.mood <= 1) L(SP('M-3,4.4 Q.6,7.6 4.4,4.2'), ic, 1.4);
  g.restore();
  const aa = run ? Math.sin(ph + Math.PI) * 1.1 : 0, ex = 5 + Math.cos(.9 + aa - u * 1.6) * 11, ey = -30 + Math.sin(.9 + aa - u * 1.6) * 11;
  limb(5, -30, ex, ey);
  g.restore();
}
function mummiaD(o) {                                           // la Mummia: bende, occhi che brillano, braccia tese, una benda che svolazza
  const bd = '#e8dcc0', sh = dk(bd, .25), u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 2), sw = Math.sin(o.ph);
  const wrap = (p, cx, cy, r) => { V(p, bd, cx, cy, r); g.save(); g.clip(p); for (let i = -6; i < 8; i++) L(SP(`M${cx - r},${cy + i * 4.4 - r * .3} L${cx + r},${cy + i * 4.4 + r * .3}`), sh, 1); g.restore(); };
  const reach = -.18 - u * .7 + Math.sin(o.t * 1.8) * .05;
  g.save(); g.translate(0, b); arm(-4, -68, 13, 12, 5.2, reach - .06, .1, sh); g.restore();
  leg(-5, -38, 18, 18, 6.4, o, Math.PI, sh, sh, .35); leg(5, -38, 18, 18, 6.4, o, 0, bd, bd, .45);
  g.save(); g.translate(0, b); g.rotate(.08 + w * .08 + Math.sin(o.ph * .5) * .05 * w + (u > 0 ? -.06 * u : .12 * -u));
  const fl = SP(`M-8,-50 Q-22,${-44 + Math.sin(o.t * 4) * 4} -30,${-46 + Math.sin(o.t * 4 + 1) * 6} L-30,${-42 + Math.sin(o.t * 4 + 1) * 6} Q-22,${-40 + Math.sin(o.t * 4) * 4} -8,-46Z`); V(fl, bd, -18, -46, 12, 1.4);
  wrap(SP('M-11,-74 Q0,-80 11,-74 Q14,-56 11,-38 Q0,-34 -11,-38 Q-14,-56 -11,-74Z'), 0, -56, 20);
  F(E(4, -64, 3, 2), 'rgba(80,60,40,.3)');
  g.save(); g.translate(3, -86); g.rotate(.08 + Math.sin(o.t * 1.4) * .06 + (o.mood === 3 ? -.12 : o.mood === 4 ? .24 : 0) + (w ? sw * .05 : 0)); g.scale(1.1, 1.1);
  wrap(E(0, 0, 10, 11), 0, 0, 11);
  const a = o.mood === 0 ? 0 : o.mood === 4 ? -.4 : .5;
  F(SP(`M-8,${-4 + a * 2} Q2,-6 11,${-4 - a * 2} L11,${0 - a} Q2,1 -8,${0 + a}Z`), '#2a1a20');
  if (o.mood !== 4 && o.blink > .5) for (const [x, r] of [[0, 1.8], [7, 1.5]]) { glowB(x, -2, 8, 'rgba(190,255,90,.6)'); F(E(x, -2, r, r), '#d8ff7a'); }
  else L(SP('M-2,-2 l3,1 M6,-2 l3,1'), '#d8ff7a', 1.2);
  const mo = o.mood === 3 ? 4 : o.mood === 2 ? 1 : 1.4 + Math.sin(o.t * 2) * .6; F(E(4, 6, 4, mo), '#2a1a20');
  g.restore();
  const h = arm(8, -68, 13, 12, 5.4, reach, .06, bd);
  for (const t of [-.35, 0, .35]) { g.save(); g.translate(h[0], h[1]); g.rotate(h[2] + t); seg(0, 0, 7, 0, 2.2, bd); g.restore(); }
  V(E(h[0], h[1], 4, 4), bd, h[0], h[1], 4, 1.4);
  const ex = h[0] - 6, ey = h[1] + 2; L(SP(`M${ex},${ey} q-4,${8 + Math.sin(o.t * 5) * 3} 2,14`), bd, 3);
  g.restore();
}
function pupazzoD(o) {                                          // Pupazzo a Molla: scatola a righe, molla, testa da pagliaccio con la gorgiera
  const u = o.u, w = o.walking ? 1 : 0, hop = w ? -Math.abs(Math.sin(o.ph * 1.1)) * 7 : 0, sq = w ? Math.max(0, -Math.sin(o.ph * 2.2)) * .06 : 0;
  g.save(); g.translate(0, hop); g.scale(1 + sq, 1 - sq);
  V(PL([-14, -26, -22, -44, 6, -48, 14, -26]), '#e8b440', -4, -36, 16, 1.8); F(SP('M-6,-42 L-4.4,-38 L0,-38 L-3.4,-35.6 L-2,-31.6 L-6,-34 L-10,-31.6 L-8.6,-35.6 L-12,-38 L-7.6,-38Z'), '#fff6c0');
  const box = SP('M-14,-26 L14,-26 L14,0 L-14,0Z'); V(box, '#d8443a', 0, -13, 18);
  g.save(); g.clip(box); for (let x = -12; x < 16; x += 8) F(SP(`M${x},-26 L${x + 4},-26 L${x + 4},0 L${x},0Z`), '#f2c14e'); g.restore();
  for (const [x, y] of [[-14, -26], [14, -26], [-14, 0], [14, 0]]) V(E(x, y, 2.6, 2.6), '#b8bcc8', x, y, 2.6, 1);
  const ca = o.t * 6; g.save(); g.translate(-14, -14); seg(0, 0, -6, 0, 2, '#9aa0b0'); seg(-6, 0, -6 + Math.cos(ca) * 5, Math.sin(ca) * 5, 2, '#9aa0b0'); V(E(-6 + Math.cos(ca) * 5, Math.sin(ca) * 5, 2.4, 2.4), '#e8384a', 0, 0, 2, 1); g.restore();
  const ext = 26 + Math.sin(o.t * 4) * 3 + (u < 0 ? -u * 40 : -u * 10), lean = u < 0 ? -u * 1.0 : (o.walking ? Math.sin(o.ph) * .15 : 0) + Math.sin(o.t * 2) * .08;
  const hx = Math.sin(lean) * ext, hy = -26 - Math.cos(lean) * ext;
  for (let i = 0; i < 7; i++) { const k = (i + .5) / 7, cx = hx * k, cy = -26 + (hy + 26) * k; L(E(cx, cy, 7, 2.4, lean), '#2a2a3a', 3.2); L(E(cx, cy, 7, 2.4, lean), '#c9ccd6', 1.6); }
  g.save(); g.translate(hx, hy); g.rotate(lean * .6 + Math.sin(o.t * 3) * .08 + (o.mood === 4 ? .3 : 0));
  for (let i = 0; i < 7; i++) { g.save(); g.rotate(-Math.PI * .1 + i * Math.PI * .2 / 6 - Math.PI * .5 + Math.PI); g.translate(0, 0); g.restore(); }
  const ruff = new Path2D(); for (let i = 0; i <= 12; i++) { const a = Math.PI + i * Math.PI / 12, r = i % 2 ? 9 : 14; i ? ruff.lineTo(Math.cos(a) * r, 4 - Math.sin(a) * r * .5) : ruff.moveTo(Math.cos(a) * r, 4 - Math.sin(a) * r * .5); }
  ruff.closePath(); g.save(); g.scale(1, -1); g.translate(0, -8); V(ruff, '#f4f0ea', 0, 4, 14, 1.6); g.restore();
  for (const x of [-8, 0, 8]) F(E(x, 6, 1.6, 1.6), '#e8384a');
  for (const sg of [-1, 1]) for (const dy of [-6, 0]) V(E(sg * 11, -6 + dy, 4.6, 4), '#ff8a2a', sg * 11, -6 + dy, 4, 1.4);
  V(E(0, -6, 10, 10), '#fbf6ee', 0, -6, 10); rim(E(0, -6, 10, 10), 'rgba(255,255,255,.8)', 2);
  eyes(o, '#fbf6ee', [[-3.4, -8, 3, 1], [3.6, -8.2, 2.8, -1]], '#3a6ac8'); brows(o, [[-3.4, -13.4, 5, 1], [3.6, -13.2, 4.4, -1]], '#3a6ac8', 1.8);
  F(PL([-3.4, -12, -2, -9, -3.4, -4, -4.8, -9]), 'rgba(60,110,220,.4)');
  mouth(o, 0, -1, 9, { lips: '#e8384a' }); V(E(1, -4.4, 2.8, 2.6), '#e8384a', 1, -4, 3, 1); F(E(0, -5.4, .9, .9), '#fff');
  V(PL([-4, -15, 1, -26, 6, -15]), '#3a6ac8', 1, -19, 6, 1.4); V(E(1, -26, 2.2, 2.2), '#f2c14e', 1, -26, 2, 1);
  g.restore();
  g.restore();
}
Object.assign(DRAW, {
  gattovolpe(o) { g.save(); g.translate(-18, 0); gattoD(Object.assign({}, o, { t: o.t + 1.1, ph: o.ph + 1 })); g.restore(); g.save(); g.translate(16, 0); volpeD(o); g.restore(); },
  gnomo: gnomoD, spaventapasseri: spaventaD, retopi: retopiD, pandizenzero: zenzeroD, mummia: mummiaD, pupazzo: pupazzoD,
  matrigna(o) { for (const [ox, s2, v] of [[-30, .92, 0], [30, .92, 1]]) { g.save(); g.translate(ox, 2); g.scale(s2, s2); sorellaD(Object.assign({}, o, { t: o.t + v + 1, ph: o.ph + v + 1 }), v); g.restore(); } matrignaD(o); }
});
