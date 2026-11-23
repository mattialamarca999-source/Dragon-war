// --- il draghetto comandante del prototipo, con le scene della storia: triste, occhiali che scendono, carica e fiammata ---
function dwing(x, y, a, col) { g.save(); g.translate(x, y); g.rotate(a); const p = SP('M0,0 Q-27,-40 -9,-64 Q-2,-44 18,-44 Q13,-20 0,0Z'); V(p, col, 0, -34, 32); g.save(); g.clip(p); L(SP('M0,0 Q-10,-34 -9,-62 M0,0 Q6,-26 16,-43'), dk(col, .4), 1.6); g.restore(); g.restore(); }
function ngDragon(c, o) {                                                    // o: t, rear, inflate, open, glasses (0-1), sad, blink; piedi in 0,0; restituisce la bocca
  const m = NG_MODE(); if (m !== 'normal') { PCOL = m === 'shadow' ? 'rgba(20,12,36,.22)' : NG_FLASH(); g = proxyOf(c); } else g = c;
  const t = o.t || 0, f = o.open || 0, gl = o.glasses == null ? 1 : o.glasses, sad = o.sad ? 1 : 0;
  const gr = '#3fae5a', gd = '#2b7a40', bel = '#cbeea0', yl = '#f2b33d', br = Math.sin(t * 2.2), wa = br * .18 + f * .3, rear = (o.rear || 0) + Math.sin(t * 1.1) * .06 * (1 - f) * (1 - sad), bob = Math.sin(t * 2.2) * 1.5 * (1 - f) - sad * 2;
  g.save();
  F(E(0, 1, 30, 5), 'rgba(16,10,40,.4)');
  const tl = chain([[-14, -12], [-38, -2], [-52, -20 + Math.sin(t * 2) * 4 * (1 - sad * .7)], [-72, -12 + Math.sin(t * 2 - 1) * 7 * (1 - sad * .7) + sad * 8]], 12, 11, 3.6, gr);
  const te = tl[tl.length - 1]; V(SP(`M${te[0] + 3},${te[1] - 6} L${te[0] - 13},${te[1]} L${te[0] + 3},${te[1] + 6}Z`), yl, te[0] - 4, te[1], 8, 2);
  dwing(-8, -40 + bob, -.5 + wa - sad * .35, gd);
  V(E(-9, -3, 10, 5.5), gd, -9, -3, 10, 2);
  g.save(); g.translate(0, -26 + bob); const inf = 1 + (o.inflate || 0) + f * .08; g.scale(inf, inf);
  for (const [x, y, a] of [[-19, -14, -1.0], [-24, -2, -1.4], [-21, 10, -1.9]]) { g.save(); g.translate(x, y); g.rotate(a); V(PL([-4, 0, 0, -8, 4, 0]), yl, 0, -4, 6, 1.6); g.restore(); }
  const body = E(0, 0, 25, 24); V(body, gr, 0, 0, 25); g.save(); g.clip(body); F(E(9, 6, 15, 17), bel); for (const y of [-2, 5, 12]) L(SP(`M-3,${y} Q9,${y + 4} 22,${y}`), dk(bel, .28), 1.4);
  const sh = g.createLinearGradient(0, 0, 14, 26); sh.addColorStop(0, 'rgba(27,14,60,0)'); sh.addColorStop(1, 'rgba(27,14,60,.34)'); g.fillStyle = sh; g.fillRect(-26, -4, 54, 30); g.restore(); rim(body, 'rgba(255,214,150,.5)', 2.6);
  g.restore();
  V(E(9, -3, 11, 6), gr, 9, -3, 11, 2); for (const x of [13, 17, 21]) V(PL([x - 2, -2, x + 3.4, 1.4, x - 1, 2]), '#fff6e0', x, 0, 3, 1.2);
  const ah = arm(12, -34 + bob, 8, 8, 5, f > 0 ? .1 : sad ? 1.2 : 1.9, f > 0 ? -.1 : sad ? -.6 : -1.9, gr); V(E(ah[0], ah[1], 3.6, 3.6), gr, ah[0], ah[1], 4, 1.6);
  g.save(); g.translate(16, -58 + bob); g.rotate(rear);
  V(PL([-12, -10, -7, -31, 0, -12]), yl, -6, -18, 9, 2); V(PL([0, -13, 8, -33, 11, -12]), yl, 6, -20, 9, 2);
  V(E(0, 0, 22, 18), gr, 0, 0, 21);
  if (f > .05) { V(SP(`M6,8 Q22,${10 + f * 3} 32,${8 + f * 2} Q30,${16 + f * 9} 18,${17 + f * 9} Q8,${16 + f * 6} 6,8Z`), dk(gr, .15), 19, 14, 14, 2); F(E(22, 12 + f * 4, 8, 3 + f * 4), '#6a1820'); F(E(24, 13 + f * 5, 7, 2 + f * 3), '#ffd35a', '#ff8a2a'); }
  V(E(19, 5, 15, 10.5), '#47b863', 19, 4, 14);
  F(E(29, 1, 1.5, 1.1), gd); F(E(24.6, .4, 1.5, 1.1), gd); F(E(-9, 8, 4.4, 2.6), sad ? 'rgba(150,170,255,.3)' : 'rgba(255,150,110,.35)');
  if (f < .05) { if (sad) L(SP('M11,15 Q20,10 31,13'), '#1b4a2a', 2); else { L(SP('M9,12 Q20,17 32,10'), '#1b4a2a', 2); F(PL([13, 13.6, 16.6, 14.6, 14.4, 18.4]), '#fffdf4'); L(SP('M31,8.6 Q34,9 33,12'), '#1b4a2a', 1.6); } }
  else for (const x of [12, 18, 24]) F(PL([x, 13.4, x + 2, 17.4, x + 4, 13.6]), '#fffdf4');
  if (gl < 1) {                                                              // senza occhiali si vedono gli occhi (tristi all'inizio della storia)
    const bl = Math.max(.12, o.blink == null ? 1 : o.blink) * (sad ? .62 : 1);
    for (const [x, y, rx, ry] of [[2, -6, 5.2, 6], [17, -6.4, 4.4, 5.4]]) { const ey = E(x, y + (1 - bl) * ry * .5, rx, ry * bl); V(ey, '#fffdf4', x, y, rx, 1.4); g.save(); g.clip(ey); F(E(x + 1.6, y + 1 + sad * 1.6, rx * .52, ry * .58), '#1b1238'); F(E(x + 2.4, y - 1 + sad * 1.6, rx * .18, ry * .18), '#ffffff'); g.restore(); }
    if (sad) { L(SP('M-4,-11 L7,-15.5'), gd, 2.4); L(SP('M13,-15.5 L23,-12'), gd, 2.4); if (Math.sin(t * .9) > .2) { const k = (t * .9 % (Math.PI * 2)) / 3; F(SP(`M-1,${1 + k * 14} q-2,4 0,5 q2,-1 0,-5Z`), 'rgba(150,200,255,.85)'); } }   // una lacrima
    else { const ba = .08; L(SP(`M-6,${-13.5 - ba * 6} L7,${-12 + ba * 4}`), gd, 2.6); L(SP(`M12,${-12.5 + ba * 3} L22,${-13 - ba * 2}`), gd, 2.4); }
  }
  if (gl > 0) {                                                              // gli occhiali scendono dall'alto e si posano
    const e = 1 - Math.pow(1 - gl, 3); g.save(); g.globalAlpha *= Math.min(1, gl * 3); g.translate(10, -(1 - e) * 70); g.rotate((1 - e) * -.7); g.translate(-10, 0);
    const ba = f > 0 ? .34 : .08; if (gl >= 1) { L(SP(`M-6,${-13.5 - ba * 6} L7,${-12 + ba * 4}`), gd, 2.6); L(SP(`M12,${-12.5 + ba * 3} L22,${-13 - ba * 2}`), gd, 2.4); }
    const gp = SP('M-8,-10 Q-8,-11.6 -6,-11.6 L24,-11.6 Q26,-11.6 26,-9.6 Q26,-2 19.6,-1.4 Q14,-1 12,-6 Q10,-6.8 8.6,-6 Q6,0 -1,-.4 Q-8,-1 -8,-10Z');
    L(gp, '#000', 2.4); F(gp, '#17141e'); g.save(); g.clip(gp); const gx = (t * 14 % 70) - 22; F(PL([gx, -13, gx + 5, -13, gx - 1, 1, gx - 6, 1]), 'rgba(255,255,255,.55)'); F(PL([gx + 8, -13, gx + 10, -13, gx + 4, 1, gx + 2, 1]), 'rgba(255,255,255,.4)');
    const lg = g.createLinearGradient(0, -12, 0, 0); lg.addColorStop(0, 'rgba(120,150,255,.28)'); lg.addColorStop(1, 'rgba(120,150,255,0)'); g.fillStyle = lg; g.fillRect(-9, -12, 36, 12); g.restore();
    L(SP('M-8,-9 L-18,-7'), '#17141e', 2.4); g.restore();
  }
  g.restore();
  dwing(-3, -44 + bob, -.25 - wa * 1.2 - sad * .3, '#37984f');
  g.restore(); g = null;
  const cr = Math.cos(rear), sr = Math.sin(rear);
  return [16 + 30 * cr - 13 * sr, -58 + bob + 30 * sr + 13 * cr, 16 + 10 * cr + 6 * sr, -58 + bob - 6 * cr + 10 * sr];   // bocca e occhiali
}
