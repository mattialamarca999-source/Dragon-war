// ---------- gruppo 1: i comuni ----------
function topo1(o, ph0) {                                       // un topolino che corre a quattro zampe
  const fur = '#8f88a0', u = o.u, run = o.walking, p = o.ph * 1.8 + ph0;
  const hop = run ? -Math.abs(Math.sin(p)) * 4 : Math.sin(o.t * 5 + ph0) * .6, lunge = u < 0 ? -u * 12 : -u * 4;
  g.save(); g.translate(lunge, hop); g.rotate(run ? Math.sin(p) * .07 : u > 0 ? -.1 * u : .12 * -u);
  const tw = Math.sin(o.t * 7 + ph0) * 5, tail = SP(`M-14,-9 Q-28,${-4 + tw} -36,${-12 - tw * .6} Q-42,-18 -38,-23`);
  L(tail, dk('#e8a0b0', .5), 3.6); L(tail, '#e8a0b0', 1.8);
  const lg = (x, off, col) => { const a = run ? Math.sin(p + off) * .8 : 0, fx = x + Math.sin(a) * 8, fy = -1 - (run ? Math.max(0, Math.cos(p + off)) * 3 : 0); seg(x, -8, fx, fy, 3, col); F(E(fx + 1.5, fy, 3, 1.6), '#e8a0b0'); };
  lg(-9, 0, dk(fur, .3)); lg(7, Math.PI, dk(fur, .3));
  const body = SP('M-16,-10 Q-16,-24 0,-24 Q14,-24 18,-14 Q20,-6 12,-4 L-12,-4 Q-17,-5 -16,-10Z'); V(body, fur, 0, -14, 18);
  g.save(); g.clip(body); F(E(4, -5, 12, 4.5), lt(fur, .35)); g.restore();
  lg(-6, Math.PI * .5, fur); lg(10, Math.PI * 1.5, fur);
  g.save(); g.translate(15, -17); g.rotate((run ? Math.sin(p) * .06 : Math.sin(o.t * 3 + ph0) * .08) + (o.mood === 3 ? -.15 : o.mood === 4 ? .2 : 0));
  V(E(-3, -10, 5.6, 6.6), dk(fur, .2), -3, -10, 6, 1.8);
  V(SP('M-8,-2 Q-8,-11 2,-11 Q10,-10 16,-2 Q18,2 14,4 Q4,7 -5,5 Q-9,3 -8,-2Z'), fur, 3, -3, 12);
  V(E(17, -1, 2.4, 2), '#ff8aa8', 17, -1, 2.4, 1.2);
  for (const dy of [-2, 1]) L(SP(`M14,${dy} l9,${dy * 1.4 - 1}`), 'rgba(40,30,50,.55)', .8);
  eyes(o, fur, [[4, -5, 3.4, 1], [9.6, -5.4, 2.5, -1]], '#2a1a3a'); brows(o, [[4, -9.8, 5, 1], [9.6, -9.6, 3.6, -1]], dk(fur, .6), 1.4);
  if (o.mood === 3) mouth(o, 11, 3, 5.4); else { F(SP('M10.5,3 L13.5,3 L13.3,6.6 L10.7,6.6Z'), '#fffdf4'); L(SP('M10.5,3 L13.5,3 L13.3,6.6 L10.7,6.6Z M12,3 L12,6.6'), '#1b1238', .9); }
  V(E(1, -12, 6.2, 7.4), fur, 1, -12, 7, 1.8); F(E(1.6, -11.4, 3.4, 4.6), '#f2a4b8');
  g.restore(); g.restore();
}
function lupoD(o) {                                             // il Lupo di Cappuccetto, con la cuffietta della nonna
  const fur = '#7d7a8a', belly = '#c9c0b4', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 3.6), sw = Math.sin(o.ph);
  g.save(); g.translate(-9, -40 + b); g.rotate(-.9 + (w ? Math.sin(o.ph - .7) * .4 : Math.sin(o.t * 3) * .25));
  V(SP('M0,-4 Q-18,-14 -33,-3 Q-37,4 -31,6 Q-16,7 0,4Z'), fur, -16, 0, 16); F(E(-30, 1.6, 5, 3.6), belly); g.restore();
  g.save(); g.translate(0, b); const hb = arm(-5, -64, 12, 12, 5.4, 1.5 + sw * .6 * w + u * .5, -.7, dk(fur, .3));
  for (const a of [-.5, 0, .5]) { g.save(); g.translate(hb[0], hb[1]); g.rotate(hb[2] + a); F(PL([2, -1.4, 7, 0, 2, 1.4]), '#fffdf4'); g.restore(); } g.restore();
  leg(-5, -34, 15, 16, 6.5, o, Math.PI, dk(fur, .3), '#4a4650', .8); leg(5, -34, 15, 16, 6.5, o, 0, fur, '#5a5662', .8);
  g.save(); g.translate(0, b); g.rotate(.14 + w * .16 + (u > 0 ? -.08 * u : .14 * -u));
  const torso = SP('M-12,-70 Q2,-78 14,-66 Q18,-48 10,-33 Q0,-28 -10,-34 Q-16,-50 -12,-70Z'); V(torso, fur, 0, -52, 24);
  g.save(); g.clip(torso); F(SP('M2,-66 Q16,-58 12,-38 Q4,-30 -2,-36 Q6,-50 2,-66Z'), belly); g.restore();
  L(SP('M4,-64 l3,3 l-2,2 l4,3 l-3,2'), dk(belly, .3), 1.3);
  g.save(); g.translate(10, -80); g.rotate(Math.sin(o.t * 2.2) * .05 + (o.mood === 3 ? -.12 : o.mood === 4 ? .2 : 0) + (w ? sw * .04 : 0));
  V(PL([-8, -6, -6, -24, 1, -9]), dk(fur, .2), -5, -12, 8, 2);
  V(E(0, 0, 12, 11), fur, 0, 0, 12);
  const open = o.mood === 3 ? .5 : o.mood === 2 ? .14 : o.mood === 4 ? .25 : .05;
  g.save(); g.translate(8, 5); g.rotate(open);
  V(SP('M0,0 L19,1 Q17,6 7,6 Q0,5 0,0Z'), dk(fur, .12), 9, 3, 10, 2);
  for (const x of [6, 11, 15]) F(PL([x, .5, x + 1.6, -3.4, x + 3.2, .5]), '#fffdf4'); g.restore();
  if (open > .1) F(SP(`M8,5 L27,4 L${26 - open * 10},${6 + open * 14} L8,6Z`), '#5a1220');
  V(SP('M5,-7 Q20,-7 28,-1 Q30,3 27,5 L8,6Z'), fur, 16, -1, 12);
  for (const x of [11, 16, 21]) F(PL([x, 5, x + 1.6, 9, x + 3.2, 5]), '#fffdf4');
  V(E(28, -.4, 3.2, 2.6), '#1c1a24', 28, 0, 3, 1.2);
  F(E(-2, 4, 3.4, 2), 'rgba(240,120,130,.25)');
  eyes(o, fur, [[3, -4, 3.6, 1], [10.5, -4.6, 2.8, -1]], '#ffc42a'); brows(o, [[3, -9.4, 7.4, 1], [10.5, -9.2, 5.6, -1]], '#3a3644', 2.3);
  const cap = SP('M-14,-1 Q-17,-16 -3,-18 Q10,-18 13,-9 Q2,-12 -6,-6 Q-10,1 -14,-1Z'); V(cap, '#f4eef6', -2, -10, 14, 2);
  for (let i = 0; i < 7; i++) F(E(-13 + i * 3.8, -1 - i * 1.4 + (i > 3 ? (i - 3) * 1.6 : 0), 1.6, 1.6), '#e2d8ea');
  V(PL([0, -13, 7, -29, 10, -11]), fur, 6, -18, 8, 2); F(PL([3, -14, 7, -24, 8.4, -13]), '#d8a0b0');
  V(E(-15, -2, 3.4, 2.8), '#ff8ab0', -15, -2, 3, 1.4); V(E(-15, 3, 2.4, 3.6, .4), '#ff8ab0', -15, 3, 3, 1.2);
  g.restore();
  const h = arm(8, -64, 13, 12, 6, .6 - 1.8 * u, -.5 - u * .3, fur);
  for (const a of [-.5, 0, .5]) { g.save(); g.translate(h[0], h[1]); g.rotate(h[2] + a); F(PL([2, -1.8, 9, 0, 2, 1.8]), '#fffdf4'); L(PL([2, -1.8, 9, 0, 2, 1.8]), '#1b1238', .8); g.restore(); }
  V(E(h[0], h[1], 4.6, 4.6), fur, h[0], h[1], 5, 1.8);
  g.restore();
}
function schel1(o, v) {                                         // uno scheletro: ossa, teschio con gli occhi accesi, spada arrugginita e scudo rotto
  const bone = '#ece4d0', bd = dk(bone, .38), u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 2.4), sw = Math.sin(o.ph);
  g.save(); g.translate(0, b); const hb = arm(-5, -58, 10, 10, 3, 1.3 + sw * .4 * w, -1.2, bd);
  g.save(); g.translate(hb[0] + 2, hb[1] - 4); g.rotate(-.15);
  const sh = SP('M-10,-12 Q0,-16 10,-12 L9,4 L4,2 L2,8 L-2,5 Q-9,0 -10,-12Z'); V(sh, '#7a5a3a', 0, -3, 14); L(SP('M-8,-6 L8,-6 M-6,2 L6,0'), '#5a5a64', 2.4); F(E(0, -4, 2.6, 2.6), '#8a8e9a'); g.restore(); g.restore();
  leg(-4, -36, 15, 15, 3.2, o, Math.PI, bd, bd, .6); leg(4, -36, 15, 15, 3.2, o, 0, bone, bone, .6);
  g.save(); g.translate(0, b); g.rotate(.05 + w * .08 + (u > 0 ? -.1 * u : .16 * -u));
  V(SP('M-8,-39 Q0,-43 8,-39 L6,-32 Q0,-29 -6,-32Z'), bone, 0, -36, 9, 2);
  seg(0, -40, -1, -60, 3, bone); for (let y = -44; y > -60; y -= 4) F(E(-.5, y, 2.6, 1.4), bd);
  for (let i = 0; i < 4; i++) { const y = -60 + i * 4.4, r = 10 - i * 1.2; for (const sg of [-1, 1]) { const p = SP(`M0,${y} Q${sg * r},${y - 1} ${sg * (r - 1)},${y + 4}`); L(p, dk(bone, .7), 4.6); L(p, sg < 0 ? bd : bone, 2.4); } }
  if (v === 2) V(SP(`M-6,-62 Q-16,-48 ${-18 + Math.sin(o.t * 4) * 3},-30 L-12,-34 L-10,-28 Q-6,-44 -2,-60Z`), '#5a3a6a', -10, -46, 14, 2);
  g.save(); g.translate(3, -73); g.rotate(Math.sin(o.t * 2.5 + v) * .06 + (o.mood === 3 ? -.12 : o.mood === 4 ? .25 : 0) + (w ? sw * .05 : 0)); g.scale(1.15, 1.15);
  const open = o.mood === 3 ? .5 : o.mood === 4 ? .3 : o.mood === 2 ? .05 : Math.max(0, Math.sin(o.t * 3 + v * 2)) * .12;
  g.save(); g.translate(-2, 6); g.rotate(open); V(SP('M-3,0 L11,0 L10,5 L-1,5Z'), bone, 4, 2, 7, 1.8); L(SP('M2,0 L2,4 M5,0 L5,4 M8,0 L8,4'), bd, .9); g.restore();
  const sk = SP('M-9,2 Q-11,-13 1,-14 Q13,-13 12,0 Q12,6 8,7 L-4,7 Q-9,5 -9,2Z'); V(sk, bone, 1, -4, 13);
  L(SP('M-3,-13 l2,4 l-2,2 l2,3'), bd, 1);
  for (const [x, y, r, d] of [[1, -2, 3.8, 1], [8, -2, 3.1, -1]]) {
    const a = o.mood === 0 ? 0 : o.mood === 4 ? -.6 : .55, p = SP(`M${x - r},${y - r * .6 + d * a * r * .5} Q${x},${y - r * 1.25} ${x + r},${y - r * .6 - d * a * r * .5} Q${x + r * 1.1},${y + r} ${x},${y + r} Q${x - r * 1.1},${y + r} ${x - r},${y - r * .6 + d * a * r * .5}Z`);
    F(p, '#2a1a30'); if (o.mood !== 4 && o.blink > .5) { F(E(x + r * .25, y + r * .2, r * .38, r * .38), '#7af0ff', '#7af0ff'); F(E(x + r * .25, y + r * .2, r * .16, r * .16), '#fff'); } else L(SP(`M${x - r * .5},${y} L${x + r * .5},${y + r * .4}`), '#7af0ff', 1);
  }
  F(PL([5, 2.4, 3.6, 5.4, 6.4, 5.4]), '#2a1a30');
  if (v === 1) { V(SP('M-11,-4 Q-12,-17 1,-18 Q14,-17 13,-4 L9,-6 Q1,-10 -7,-6Z'), '#8a8e9a', 1, -11, 14, 2); F(E(-1, -14, 1.4, 1.4), '#a8603a'); F(E(6, -12, 2, 1.2), '#a8603a'); }
  g.restore();
  const h = arm(4, -59, 10, 10, 3, .9 - 1.9 * u, -.4, bone); F(E(h[0], h[1], 2.8, 2.8), bone);
  atHand(h, -.6, () => { F(SP('M-4.5,-2 L4.5,-2 L4.5,1 L-4.5,1Z'), '#5a4a3a'); V(SP('M-2.4,-2 L-2,-28 L0,-34 L1.4,-30 L.6,-27 L2,-24 L2.4,-2Z'), '#b8ae98', 0, -16, 16, 1.8); F(E(-.6, -10, 1.4, 2.6), '#a8603a'); F(E(.6, -19, 1, 1.6), '#a8603a'); });
  g.restore();
}
function trollD(o) {                                            // il Troll del Ponte: pietra e muschio, la clava è una trave del ponte
  const sk = '#8c9aa2', moss = '#5f8a46', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 4.5), sw = Math.sin(o.ph);
  g.save(); g.translate(0, b); const hb = arm(-18, -80, 22, 20, 11, 1.7 + sw * .4 * w + u * .3, -.25, dk(sk, .28)); V(E(hb[0], hb[1], 8, 7.4), dk(sk, .28), hb[0], hb[1], 8, 2); g.restore();
  leg(-11, -34, 16, 16, 12, o, Math.PI, dk(sk, .28), '#4a4a40', .5); leg(11, -34, 16, 16, 12, o, 0, sk, '#5a5a4e', .5);
  g.save(); g.translate(0, b); g.rotate(.12 + w * .08 + sw * .03 * w + (u > 0 ? -.08 * u : .12 * -u));
  const body = SP('M-30,-80 Q-8,-104 22,-94 Q38,-76 30,-46 Q14,-28 -12,-30 Q-34,-40 -30,-80Z'); V(body, sk, 0, -64, 40);
  g.save(); g.clip(body); L(SP('M-14,-86 L-8,-72 L-16,-60 M10,-60 L16,-50 L12,-40 M20,-84 L14,-76'), dk(sk, .45), 1.6);
  for (const [x, y, r] of [[-18, -90, 12], [-26, -64, 7], [8, -96, 9]]) { F(E(x, y, r, r * .62), moss); F(E(x - r * .3, y - r * .2, r * .4, r * .22), lt(moss, .3)); } g.restore();
  for (const [x, y] of [[-20, -96], [-14, -97], [6, -100]]) { L(SP(`M${x},${y + 3} l-1,-6 M${x},${y + 3} l2,-5`), moss, 1.6); }
  V(SP('M-12,-102 L-12,-96 M-12,-102'), '#fff', 0, 0, 1, 0); V(E(-12, -103, 3, 2), '#e85a5a', -12, -103, 3, 1.2); F(E(-12, -104, 1, .8), '#fff');
  V(SP('M-25,-38 L23,-38 L19,-24 L7,-30 L-3,-22 L-13,-30 L-22,-24Z'), '#6a4a2a', 0, -31, 22);
  g.save(); g.translate(17, -96); g.rotate(Math.sin(o.t * 1.6) * .05 - sw * .04 * w + (o.mood === 3 ? .14 : o.mood === 4 ? -.2 : 0)); g.scale(1.15, 1.15);
  V(E(-12, 0, 4, 6), dk(sk, .15), -12, 0, 5, 2);
  V(SP('M-12,-6 Q-10,-18 2,-18 Q14,-17 15,-4 Q17,8 10,12 Q-2,15 -10,9 Q-14,3 -12,-6Z'), sk, 1, -3, 17);
  for (const [x, y, r] of [[-6, -17, 6], [3, -18, 5], [-11, -12, 4]]) F(E(x, y, r, r * .55), moss);
  for (const x of [-8, -3, 2, 6]) L(SP(`M${x},-18 l${x * .2},-5`), moss, 1.4);
  eyes(o, sk, [[1, -7, 3.3, 1], [9, -7.4, 2.7, -1]], '#ff9a2a'); brows(o, [[1, -11.6, 8, 1], [9, -11.6, 6, -1]], dk(sk, .5), 3.8);
  V(SP('M8,-7 Q20,-7 22,3 Q20,10 12,8 Q8,4 8,-7Z'), lt(sk, .08), 15, 1, 9, 2); V(E(19, -2, 1.6, 1.6), dk(sk, .2), 19, -2, 2, 1);
  mouth(o, 4, 9, 13);
  for (const x of [-1, 9]) V(SP(`M${x - 2},11 L${x - .4},3 L${x + 2},11Z`), '#efe6cc', x, 7, 4, 1.3);
  g.restore();
  const h = arm(19, -82, 20, 18, 12, .9 - 1.9 * u, -.4, sk);
  atHand(h, -1.0, () => { const pl = SP('M-7,8 L-7,-56 L-3,-60 L-1,-55 L3,-61 L7,-56 L7,8Z'); V(pl, '#7a5a3a', 0, -26, 30);
    L(SP('M-3,4 L-3,-50 M2,2 Q3,-20 1,-48'), dk('#7a5a3a', .4), 1); for (const y of [-12, -40]) { F(SP(`M-7.6,${y} L7.6,${y} L7.6,${y + 5} L-7.6,${y + 5}Z`), '#5a5e6a'); F(E(-4, y + 2.5, 1.3, 1.3), '#b8bcc8'); F(E(4, y + 2.5, 1.3, 1.3), '#b8bcc8'); }
    F(E(-5, -30, 4, 2.4), moss); });
  V(E(h[0], h[1], 8.4, 8), sk, h[0], h[1], 8, 2);
  g.restore();
}
function ragnoD(o) {                                            // il Ragno Gigante: otto zampe, clessidra rossa, tanti occhi
  const bd = '#33284a', lgc = '#241c36', u = o.u, w = o.walking ? 1 : 0, p = o.ph * 1.6;
  const b = w ? -Math.abs(Math.sin(p * 2)) * 2 : Math.sin(o.t * 2.4), rear = u > 0 ? u : 0, lunge = u < 0 ? -u * 14 : -u * 3;
  g.save(); g.translate(lunge, b);
  const legs = far => { for (let i = 0; i < 4; i++) {
    const hx = 6 - i * 5 + (far ? -2 : 0), hy = -24, reach = [30, 15, -4, -22][i], ph = p + i * Math.PI / 2 + (far ? Math.PI : 0);
    let fx = hx + reach + (w ? Math.cos(ph) * 7 : 0), fy = -(w ? Math.max(0, Math.sin(ph)) * 7 : 0);
    if (i === 0) { fx += rear * 6; fy -= rear * 26; }
    const kx = (hx + fx) / 2 + (reach > 0 ? -3 : 3), ky = -50 + i * 2 - (i === 0 ? rear * 14 : 0) + (far ? 3 : 0), col = far ? lgc : '#3a2e52';
    seg(hx, hy, kx, ky, 3.6, col); seg(kx, ky, fx, fy, 2.8, col); F(E(kx, ky, 2.6, 2.6), col); } };
  g.save(); g.rotate(-rear * .2); legs(1); g.restore();
  g.save(); g.rotate(-rear * .2);
  const ab = E(-17, -30, 18, 15); V(ab, bd, -17, -30, 18);
  g.save(); g.clip(ab); for (const [x, y] of [[-24, -40], [-12, -42], [-30, -30]]) F(E(x, y, 2.4, 1.6), lt(bd, .2)); g.restore();
  V(SP('M-22,-38 L-12,-38 L-15,-32 L-12,-26 L-22,-26 L-19,-32Z'), '#d8302a', -17, -32, 6, 1.6);
  for (const a of [2.6, 3.2, 3.8]) L(SP(`M${-17 + Math.cos(a) * 18},${-30 + Math.sin(a) * 15} l${Math.cos(a) * 4},${Math.sin(a) * 3}`), lt(bd, .1), 1.4);
  V(E(5, -27, 13, 10.5), bd, 5, -27, 13);
  legs(0);
  const op = o.mood === 3 ? .5 : o.mood === 2 ? .15 : o.mood === 4 ? .3 : Math.sin(o.t * 4) * .06;
  for (const sg of [-1, 1]) { g.save(); g.translate(15, -20); g.rotate(sg * op); V(SP(`M-2,0 Q4,${2 + sg} 3,${8} Q1,${10} 0,${7} Q0,4 -2,0Z`), sg < 0 ? '#1e1830' : '#3a2e52', 1, 4, 5, 1.4); F(PL([1, 7, 3, 8, 1.4, 11]), '#fffdf4'); g.restore(); }
  eyes(o, bd, [[10, -31, 3.6, 1], [16.4, -30, 2.8, -1]], '#d03a3a'); brows(o, [[10, -36, 6.2, 1], [16.4, -35, 4.6, -1]], '#120a20', 2);
  for (const [x, y, r] of [[7, -36, 1.6], [12.6, -37.4, 1.4], [17.4, -35.4, 1.2], [4.6, -32, 1.2]]) { F(E(x, y, r + .8, r + .8), '#120a20'); F(E(x, y, r, r), '#ffd02a', '#ffd02a'); }
  g.restore(); g.restore();
}
function zombieD(o) {                                           // lo Zombie: pelle verdognola, camicia strappata, braccia tese, cuciture
  const sk = '#97ae84', sh = '#6a5a82', pa = '#3e3e52', u = o.u, w = o.walking ? 1 : 0, b = bobOf(o, 2), sw = Math.sin(o.ph);
  const reach = -.12 - u * .75 + Math.sin(o.t * 2) * .06;
  g.save(); g.translate(0, b); const hb = arm(-3, -68, 13, 12, 5, reach - .05, .12, dk(sk, .28)); for (const a of [-.35, 0, .35]) { g.save(); g.translate(hb[0], hb[1]); g.rotate(hb[2] + a); seg(0, 0, 6, 0, 2, dk(sk, .28)); g.restore(); } g.restore();
  leg(-5, -38, 18, 18, 6.5, o, Math.PI, dk(pa, .25), '#2a2a30', .3); leg(5, -38, 18, 18, 6.5, o, 0, pa, '#3a3a40', .55);
  g.save(); g.translate(0, b); g.rotate(.1 + w * .08 + Math.sin(o.ph * .5) * .06 * w + (u > 0 ? -.06 * u : .12 * -u));
  V(SP('M-10,-42 L10,-42 L11,-34 L-11,-34Z'), pa, 0, -38, 12, 2);
  const shirt = SP('M-12,-74 Q0,-80 12,-74 Q15,-56 12,-40 L8,-36 L5,-41 L1,-35 L-3,-40 L-7,-35 L-12,-40 Q-15,-56 -12,-74Z'); V(shirt, sh, 0, -58, 22);
  const hole = SP('M2,-60 Q8,-62 9,-54 Q6,-48 1,-51 Q-1,-56 2,-60Z'); F(hole, sk); g.save(); g.clip(hole); for (const y of [-58, -55, -52]) L(SP(`M1,${y} Q5,${y - 1} 9,${y}`), lt(sk, .3), 1.2); g.restore(); L(hole, dk(sh, .5), 1.2);
  L(SP('M-8,-70 L-6,-60 M-9,-66 L-5,-66 M-9,-62 L-5,-63'), '#2a2030', 1.1);
  g.save(); g.translate(4, -86); g.rotate(.22 + Math.sin(o.t * 1.3) * .1 + (o.mood === 3 ? -.18 : o.mood === 4 ? .25 : 0) + (w ? sw * .06 : 0)); g.scale(1.12, 1.12);
  V(SP('M-9,-6 Q-9,-15 1,-15 Q11,-15 12,-4 Q13,6 8,10 Q0,13 -6,9 Q-10,3 -9,-6Z'), sk, 1, -2, 13);
  for (const [x, a] of [[-6, -.8], [-2, -.3], [3, .2]]) L(SP(`M${x},-14 q${a * 4},-6 ${a * 8},-5`), '#3a3040', 1.4);
  L(SP('M-6,-10 L6,-12'), '#5a3a4a', 1.1); for (const x of [-4, -1, 2, 5]) L(SP(`M${x},-13 l.6,3`), '#5a3a4a', 1);
  F(E(2, 0, 4.4, 2.2), 'rgba(70,50,90,.28)'); F(E(9.6, .6, 3, 1.6), 'rgba(70,50,90,.28)');
  eyes(o, sk, [[2, -3.6, 3.9, 1], [9.6, -2.6, 2.6, -1]], '#cdd88a'); brows(o, [[2, -8.6, 6.4, 1], [9.6, -7.2, 4.6, -1]], '#3a3040', 1.6);
  if (o.mood <= 1) { const m = SP(`M3,5 Q6,${3 + Math.sin(o.t * 3) * .6} 9,5 Q9.4,${10 + Math.sin(o.t * 3)} 6,10 Q3,10 3,5Z`); L(m, '#1b1238', 2); F(m, '#3a1020'); F(PL([5, 5, 6.4, 5, 5.8, 7]), '#e8e0b0'); }
  else mouth(o, 6, 6, 8);
  V(SP('M-9,-3 Q-13,-1 -12,4 Q-10,6 -8,4Z'), dk(sk, .12), -10, 1, 4, 1.4);
  g.restore();
  const h = arm(8, -68, 13, 12, 5.2, reach, .08, sk);
  for (const a of [-.35, 0, .35]) { g.save(); g.translate(h[0], h[1]); g.rotate(h[2] + a); seg(0, 0, 7, 0, 2.2, sk); g.restore(); } V(E(h[0], h[1], 4, 4), sk, h[0], h[1], 4, 1.6);
  g.restore();
}
Object.assign(DRAW, {
  fionda: o => DRAW.goblin(o, 1),
  topi(o) { for (const [ox, oy, ph, s2] of [[-30, -4, 0, 1.15], [24, -2, 2.6, 1.18], [-6, 4, 1.3, 1.25], [44, 6, 3.9, 1.2]]) { g.save(); g.translate(ox, oy); g.scale(s2, s2); topo1(o, ph); g.restore(); } },
  lupo: lupoD,
  scheletri(o) { for (const [ox, s2, v] of [[-24, .86, 1], [24, .86, 2], [0, 1, 0]]) { g.save(); g.translate(ox, 0); g.scale(s2, s2); schel1(Object.assign({}, o, { t: o.t + v * 1.7, ph: o.ph + v }), v); g.restore(); } },
  trollponte: trollD, ragno: ragnoD, zombie: zombieD
});
