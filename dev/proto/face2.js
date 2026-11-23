// ---------- facce varie: occhi, sopracciglia e bocche con stili diversi per ogni personaggio ----------
const INK = '#1b1238';
function eyesX(o, skin, list, st, col = '#2a1a3a') {             // st: almond, lashes, slit, lidded, wide, beady, glow
  for (const [x, y, r, d] of list) {
    const ang = o.mood === 0 ? 0 : o.mood === 4 ? -.5 : o.mood === 3 ? .35 : .6;
    if (o.mood === 4 && st !== 'glow') { L(SP(`M${x - d * r},${y - r * .6} Q${x},${y - r * .1} ${x + d * r * .7},${y} Q${x},${y + r * .2} ${x - d * r},${y + r * .6}`), INK, Math.max(1.4, r * .42)); continue; }
    const bl = o.blink < .5;
    if (st === 'beady') { if (bl) { L(SP(`M${x - r},${y} L${x + r},${y}`), INK, 1.4); continue; } F(E(x, y, r * .7, r * .8), INK); F(E(x - r * .2, y - r * .3, r * .24, r * .24), '#fff'); continue; }
    if (st === 'glow') { const p = SP(`M${x - r},${y + d * ang * r * .3} Q${x},${y - r * (1 - ang * .5)} ${x + r},${y - d * ang * r * .3} Q${x},${y + r * .7} ${x - r},${y + d * ang * r * .3}Z`); glowB(x, y, r * 3, 'rgba(255,220,90,.55)'); F(p, bl ? 'rgba(0,0,0,0)' : col, col); if (bl) L(SP(`M${x - r},${y} L${x + r},${y}`), col, 1.2); continue; }
    const lens = (rx, ry) => SP(`M${x - rx},${y} Q${x - rx * .2},${y - ry * 1.5} ${x + rx},${y - ry * .2} Q${x + rx * .3},${y + ry * 1.1} ${x - rx},${y}Z`);
    let p; const wide = st === 'wide' ? 1.25 : 1;
    if (st === 'almond' || st === 'lashes' || st === 'slit') p = d > 0 ? lens(r * 1.15, r * .8) : SP(`M${x + r * 1.15},${y} Q${x + r * .23},${y - r * 1.2} ${x - r * 1.15},${y - r * .16} Q${x - r * .35},${y + r * .88} ${x + r * 1.15},${y}Z`);
    else p = E(x, y, r * wide, r * 1.08 * wide);
    if (bl) { L(SP(`M${x - r},${y} Q${x},${y + r * .4} ${x + r},${y}`), INK, 1.6); if (st === 'lashes') L(SP(`M${x + d * r},${y} l${d * 2.4},-2`), INK, 1.1); continue; }
    L(p, INK, 2.2); F(p, st === 'slit' ? col : '#fffdf4');
    g.save(); g.clip(p);
    if (st === 'slit') { const n = o.mood === 3 ? .1 : o.mood === 2 ? .14 : .2; F(E(x + d * r * .1, y, r * n, r * .9), INK); F(E(x - r * .35, y - r * .3, r * .22, r * .18), 'rgba(255,255,255,.8)'); }
    else if (st === 'wide') { F(E(x + d * r * .2, y, r * .34, r * .34), col); F(E(x + d * r * .22, y, r * .16, r * .16), INK); for (const a of [2.4, 3.4, 4]) L(SP(`M${x + Math.cos(a) * r * 1.2},${y + Math.sin(a) * r * 1.2} l${-Math.cos(a) * r * .5},${-Math.sin(a) * r * .5}`), 'rgba(220,40,40,.6)', .8); }
    else { const pr = st === 'lashes' ? .6 : .58; F(E(x + d * r * .22, y + r * .1, r * pr, r * pr * 1.05), col); F(E(x + d * r * .26, y + r * .1, r * .28, r * .3), INK); F(E(x - r * .1, y - r * .25, r * .22, r * .22), '#fff'); }
    const lidY = st === 'lidded' ? y - r * (o.mood === 3 ? .4 : .05) : y - r * (1.1 - (o.mood >= 1 && o.mood <= 3 ? .45 : 0));
    if (st === 'lidded' || (o.mood >= 1 && o.mood <= 3)) { const a2 = lidY - d * ang * r * .45, b2 = lidY + d * ang * r * .45; F(PL([x - r * 1.6, y - r * 2.2, x + r * 1.6, y - r * 2.2, x + r * 1.6, b2, x - r * 1.6, a2]), skin); L(SP(`M${x - r * 1.6},${a2} L${x + r * 1.6},${b2}`), INK, st === 'lidded' ? 2 : 1.4); }
    g.restore();
    if (st === 'lashes') for (let i = 0; i < 3; i++) L(SP(`M${x + d * r * (.7 + i * .22)},${y - r * (.55 - i * .2)} l${d * (2.6 + i * .4)},${-2.4 + i * .8}`), INK, 1.1);
  }
}
function browsX(o, list, col, w, st = 'arch') {                  // st: arch (curva), thick (dritta e grossa), bushy (a ciuffi)
  for (const [x, y, len, d] of list) {
    const a = (o.mood === 4 ? -.45 : o.mood === 0 ? .08 : o.mood === 3 ? .55 : .42) * d, up = o.mood === 3 ? -1.4 : o.mood === 4 ? -1.2 : 0, c = Math.cos(a) * len / 2, s = Math.sin(a) * len / 2;
    if (st === 'arch') L(SP(`M${x - c},${y - s + up + 1} Q${x},${y - len * .32 + up + (o.mood >= 1 && o.mood <= 3 ? len * .25 : 0)} ${x + c},${y + s + up + 1}`), col, w);
    else if (st === 'bushy') for (let i = 0; i < 4; i++) { const k = i / 3, px = x - c + 2 * c * k, py = y - s + 2 * s * k + up; L(SP(`M${px},${py + 1.4} l${d * 1.6},-3`), col, w); }
    else { const p = SP(`M${x - c},${y - s + up - w * .3} L${x + c},${y + s + up - w * .3} L${x + c},${y + s + up + w * .4} L${x - c},${y - s + up + w * .5}Z`); L(p, col, w * .8); F(p, col); }
  }
}
function mouthX(o, x, y, w, st = 'smile', op = {}) {            // st: smirk, grin, sharp, frown, snarl, oh, gap, pout
  const m = o.mood, ink = op.lips || INK, lw = op.lips ? 2.4 : 1.9, hw = w / 2;
  const cave = (pts, tongue = 1) => { const p = SP(pts); L(p, INK, 2.2); F(p, '#5a1220'); if (tongue) { g.save(); g.clip(p); F(E(x, y + w * .55, w * .3, w * .22), '#f07a8a'); g.restore(); } return p; };
  const zig = (x0, x1, yy, n, h, dir) => { let s = `M${x0},${yy}`; for (let i = 0; i < n; i++) { const a = x0 + (x1 - x0) * (i + .5) / n, b = x0 + (x1 - x0) * (i + 1) / n; s += ` L${a},${yy + h * dir} L${b},${yy}`; } return s + 'Z'; };
  if (m === 4) { if (st === 'oh') { L(E(x, y + 1, w * .22, w * .16), INK, 1.8); return; } L(SP(`M${x - hw},${y + 1} L${x - hw * .5},${y - 1} L${x},${y + 1.4} L${x + hw * .5},${y - 1} L${x + hw},${y + 1}`), INK, 1.8); return; }
  if (m === 3) {
    if (st === 'oh') { cave(`M${x},${y - 2} Q${x + w * .4},${y - 2} ${x + w * .4},${y + w * .35} Q${x + w * .4},${y + w * .8} ${x},${y + w * .8} Q${x - w * .4},${y + w * .8} ${x - w * .4},${y + w * .35} Q${x - w * .4},${y - 2} ${x},${y - 2}Z`); return; }
    if (st === 'smirk' || st === 'snarl') { const p = cave(`M${x - hw},${y + 1} Q${x},${y - 1} ${x + hw},${y - 3} Q${x + hw * .8},${y + w * .5} ${x},${y + w * .45} Q${x - hw * .7},${y + w * .35} ${x - hw},${y + 1}Z`); g.save(); g.clip(p); F(SP(zig(x - hw, x + hw, y - 3, 4, 3, 1)), '#fffdf4'); g.restore(); return; }
    if (st === 'sharp') { const p = cave(`M${x - hw},${y} L${x + hw},${y - 1} L${x + hw * .7},${y + w * .6} L${x - hw * .7},${y + w * .6}Z`, 0); g.save(); g.clip(p); F(SP(zig(x - hw, x + hw, y - 1, 5, 4, 1)), '#fffdf4'); F(SP(zig(x - hw, x + hw, y + w * .6, 4, -3.4, 1)), '#fffdf4'); g.restore(); return; }
    if (st === 'frown') { const p = cave(`M${x - hw * .8},${y} L${x + hw * .8},${y} L${x + hw},${y + w * .65} Q${x},${y + w * .75} ${x - hw},${y + w * .65}Z`); g.save(); g.clip(p); F(SP(`M${x - hw},${y - 1} L${x + hw},${y - 1} L${x + hw},${y + 2.2} L${x - hw},${y + 2.2}Z`), '#fffdf4'); g.restore(); return; }
    if (st === 'gap') { cave(`M${x - hw},${y} Q${x},${y - 2} ${x + hw},${y} Q${x + hw},${y + w * .55} ${x},${y + w * .55} Q${x - hw},${y + w * .55} ${x - hw},${y}Z`); F(SP(`M${x - 1},${y - .6} L${x + 2.4},${y - .6} L${x + 1.6},${y + 3.4} L${x - .4},${y + 3.4}Z`), '#e8dcb0'); return; }
    if (st === 'pout') { cave(`M${x - hw * .7},${y} Q${x},${y - 1.6} ${x + hw * .7},${y} Q${x + hw * .6},${y + w * .45} ${x},${y + w * .5} Q${x - hw * .6},${y + w * .45} ${x - hw * .7},${y}Z`); if (op.lips) L(SP(`M${x - hw * .7},${y} Q${x},${y - 1.6} ${x + hw * .7},${y} Q${x + hw * .6},${y + w * .45} ${x},${y + w * .5} Q${x - hw * .6},${y + w * .45} ${x - hw * .7},${y}Z`), op.lips, 1.8); return; }
    const p = cave(`M${x - hw},${y - 1} Q${x},${y - 3} ${x + hw},${y - 1} Q${x + hw},${y + w * .62} ${x},${y + w * .62} Q${x - hw},${y + w * .62} ${x - hw},${y - 1}Z`); g.save(); g.clip(p); F(SP(`M${x - hw},${y - 3} L${x + hw},${y - 3} L${x + hw},${y + 1.6} L${x - hw},${y + 1.6}Z`), '#fffdf4'); g.restore(); return;
  }
  if (m === 2) {
    if (st === 'oh') { L(E(x, y + 1, w * .18, w * .14), INK, 1.8); return; }
    if (st === 'sharp') { const p = SP(zig(x - hw, x + hw, y, 5, 3, 1)); L(SP(`M${x - hw},${y} L${x + hw},${y}`), INK, 1.4); F(p, '#fffdf4'); L(p, INK, 1); const q = SP(zig(x - hw * .9, x + hw * .9, y + 4, 4, -3, 1)); F(q, '#fffdf4'); L(q, INK, 1); return; }
    const sm = st === 'smirk' || st === 'snarl'; const h = w * .34, p = SP(`M${x - hw},${y + (sm ? 1.4 : 0)} Q${x},${y - 1.5} ${x + hw},${y - (sm ? 1.6 : 0)} L${x + hw - 1},${y + h - (sm ? 1 : 0)} Q${x},${y + h + 1} ${x - hw + 1},${y + h + (sm ? 1 : 0)}Z`);
    L(p, INK, 2); F(p, '#fffdf4'); for (let i = 1; i < 4; i++) L(SP(`M${x - hw + w * i / 4},${y - 1} L${x - hw + w * i / 4},${y + h + 1}`), INK, .9); if (op.lips) L(p, op.lips, 1.6); return;
  }
  const walk = m === 1;
  if (st === 'smirk') { L(SP(`M${x - hw},${y + 1} Q${x},${y + 1.6} ${x + hw},${y - (walk ? 1 : 2.6)}`), ink, lw); L(SP(`M${x + hw},${y - (walk ? 1 : 2.6)} l1.2,-.6`), ink, 1.2); return; }
  if (st === 'grin') { if (walk) { L(SP(`M${x - hw},${y} Q${x},${y + 2} ${x + hw},${y}`), ink, lw); return; } const p = SP(`M${x - hw},${y - 1} Q${x},${y + 1} ${x + hw},${y - 1} Q${x + hw * .7},${y + w * .38} ${x},${y + w * .4} Q${x - hw * .7},${y + w * .38} ${x - hw},${y - 1}Z`); L(p, INK, 2); F(p, '#fffdf4'); L(SP(`M${x - hw * .9},${y + w * .16} Q${x},${y + w * .28} ${x + hw * .9},${y + w * .16}`), INK, .9); for (const k of [-.5, 0, .5]) L(SP(`M${x + hw * k},${y + .4} L${x + hw * k},${y + w * .36}`), INK, .8); return; }
  if (st === 'sharp') { const p = SP(zig(x - hw, x + hw, y, 5, 2.6, 1)); L(SP(`M${x - hw},${y} Q${x},${y + (walk ? 0 : 2)} ${x + hw},${y - 1}`), INK, 1.6); F(p, '#fffdf4'); L(p, INK, .9); return; }
  if (st === 'frown') { L(SP(`M${x - hw},${y + 2.4} Q${x},${y - (walk ? 1 : 2.4)} ${x + hw},${y + 2.4}`), ink, lw); if (!walk) L(SP(`M${x - 1},${y + 4.4} L${x + 1.6},${y + 4.4}`), INK, 1); return; }
  if (st === 'snarl') { L(SP(`M${x - hw},${y + 1} L${x},${y + 1} Q${x + hw * .5},${y - 2} ${x + hw},${y}`), ink, lw); F(PL([x + hw * .2, y, x + hw * .45, y + 3.6, x + hw * .6, y - .4]), '#fffdf4'); L(PL([x + hw * .2, y, x + hw * .45, y + 3.6, x + hw * .6, y - .4]), INK, .8); return; }
  if (st === 'oh') { const p = E(x, y + 1, w * .16, w * (walk ? .12 : .2)); L(p, INK, 1.8); F(p, '#3a1020'); return; }
  if (st === 'gap') { L(SP(`M${x - hw},${y} Q${x - hw * .4},${y + 2} ${x},${y + .6} Q${x + hw * .4},${y - 1} ${x + hw},${y + 1}`), ink, lw); F(SP(`M${x - 2.4},${y + .6} L${x},${y + .4} L${x - .8},${y + 3.6}Z`), '#e8dcb0'); F(SP(`M${x + 2},${y + .2} L${x + 4},${y - .2} L${x + 3.4},${y - 3}Z`), '#e8dcb0'); return; }
  if (st === 'pout') { const p = SP(`M${x - hw * .6},${y} Q${x - hw * .3},${y - 1.8} ${x},${y - .6} Q${x + hw * .3},${y - 1.8} ${x + hw * .6},${y} Q${x},${y + 2.6} ${x - hw * .6},${y}Z`); F(p, op.lips || '#c8304a'); L(p, INK, 1); return; }
  L(SP(`M${x - hw},${y} Q${x},${y + (walk ? 1 : w * .34)} ${x + hw},${y - 1.6}`), ink, lw);
}
