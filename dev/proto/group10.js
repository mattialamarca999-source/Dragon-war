// ---------- gruppo 10: leggendari (2) ----------
function batWing(sx, sy, a, col, sc, torn) {                     // ala da pipistrello: dita ossute, membrana a festoni, strappi
  g.save(); g.translate(sx, sy); g.rotate(a); g.scale(sc, sc);
  const p = SP(`M0,0 L-10,-34 L-36,-56 Q-22,-48 -8,-64 Q-4,-50 16,-48 Q${torn ? 8 : 10},-34 24,-22 Q10,-14 6,2Z`); V(p, col, -6, -30, 34, 1.8);
  g.save(); g.clip(p); F(E(-10, -18, 18, 10, -.6), 'rgba(255,255,255,.06)'); if (torn) { F(E(-18, -44, 2.6, 1.6, .5), 'rgba(0,0,0,.55)'); F(E(8, -36, 2, 1.4), 'rgba(0,0,0,.55)'); } g.restore();
  L(SP('M0,0 L-10,-34 L-36,-56 M-10,-34 L-8,-64 M-10,-34 L16,-48 M-10,-34 L24,-22'), dk(col, .55), 2); V(E(-10, -34, 2.4, 2.4), dk(col, .3), -10, -34, 2, 1); V(PL([-10, -35, -13, -42, -8, -37]), '#d8c8e0', -10, -38, 3, .8);
  g.restore();
}
function dragoneroD(o) {                                        // il Drago Nero: il fratello cattivo del draghetto, ma slanciato e spigoloso: scaglie nere, pancia viola, occhi rossi, corna a punta, ali enormi strappate, coda a frusta con la lama, fuoco viola
  const sk = '#2c2638', skd = '#18141f', bel = '#6a3a8a', horn = '#d8c8e0', u = o.u, m = o.mood, w = o.walking ? 1 : 0, fire = m === 3 || u < 0, hurt = m === 4 ? 1 : 0;
  const hov = -50 + Math.sin(o.t * 3) * 4, flap = Math.sin(o.t * (w ? 7 : 5)), pull = u > 0 ? u : 0;
  g.save(); g.translate(0, hov); g.rotate((w ? .1 : .02) - pull * .15 + (u < 0 ? .12 : 0) + hurt * -.15);
  batWing(-4, -14, -.55 + flap * .35, skd, .95, 1);
  const tw = Math.sin(o.t * 2.4) * 8; const tl = ribbon([[-14, 6], [-34, 14], [-44, 2 + tw * .5], [-66, 10 + tw]], 6, 1.6, sk, bel, 1);
  for (let i = 3; i < tl.pts.length - 2; i += 3) { const a = tl.off(i, tl.pts[i][2]), t = tl.off(i, tl.pts[i][2] + 6); V(PL([a[0] - 2, a[1], t[0], t[1], a[0] + 2, a[1]]), '#5a2a7a', t[0], t[1], 3, .8); }
  g.save(); g.translate(-66, 10 + tw); g.rotate(Math.PI + .3); V(SP('M0,0 Q6,-8 14,-2 Q8,0 14,3 Q6,8 0,0Z'), horn, 6, 0, 8, 1.2); g.restore();
  for (const [x, off] of [[-8, 0], [4, 1.4]]) { const h = limb(x, 10, 1.9 + Math.sin(o.t * 3 + off) * .15, 9, -.9, 8, 3.6, 2.6, 2, off ? sk : skd); clawsAt(h, horn, 3, 4); }
  const body = SP('M-18,4 Q-18,-12 -2,-18 Q14,-20 18,-6 Q20,10 6,16 Q-10,18 -18,4Z'); V(body, sk, 0, -2, 22);
  g.save(); g.clip(body); F(SP('M-6,18 Q14,14 20,-8 L26,-8 L26,22 L-6,22Z'), bel); for (const y of [-2, 4, 10]) L(SP(`M${4 + y * .3},${y + 6} Q12,${y + 2} 18,${y - 4}`), dk(bel, .3), 1.1); g.restore();
  for (let i = 0; i < 4; i++) V(PL([-16 + i * 7, -10 - i * 3, -12 + i * 7, -20 - i * 3, -9 + i * 7, -13 - i * 3]), '#5a2a7a', -12 + i * 7, -14 - i * 3, 4, 1);
  const hx = 28 + pull * -6 + (u < 0 ? -u * 8 : 0), hy = -34 - pull * 6 + hurt * 6;
  ribbon([[10, -10], [18, -20], [16, -30], [hx - 4, hy]], 7.4, 5, sk, bel, -1);
  const jo = fire ? .55 : m === 2 ? .12 : 0;
  g.save(); g.translate(hx, hy); g.rotate(-.1 + pull * -.2 + hurt * -.35 + (u < 0 ? .15 : 0));
  V(SP('M-4,-6 Q-12,-16 -26,-20 Q-16,-12 -8,-2Z'), horn, -14, -12, 8, 1.2); V(SP('M2,-10 Q-4,-24 -18,-32 Q-6,-20 -2,-6Z'), lt(horn, .05), -8, -20, 9, 1.4);
  g.save(); g.translate(-2, 2); g.rotate(jo);
  if (jo) F(PL([0, -1, 24, -1, 22, 6, 0, 4]), '#3a0a4a');
  V(SP('M0,0 L24,0 Q26,4 20,6 Q8,8 0,5Z'), skd, 12, 3, 12, 1.4); for (const x of [8, 14, 19]) F(PL([x, 0, x + 1.4, -3.4, x + 2.8, 0]), '#f0e8f8');
  g.restore();
  const hd = SP('M-8,-6 Q-6,-14 4,-14 Q16,-12 26,-4 Q29,1 24,2.6 Q10,3.6 -6,3 Q-10,0 -8,-6Z'); V(hd, sk, 8, -5, 18);
  for (const x of [8, 14, 20]) F(PL([x, 2.4, x + 1.4, 5.6, x + 2.8, 2.4]), '#f0e8f8');
  for (const [x, y, a] of [[-6, 2, 2.4], [-4, 4, 2.0]]) V(PL([x, y, x + Math.cos(a) * 7, y + Math.sin(a) * 7, x + 3, y + 1]), horn, x, y + 3, 3, .8);
  F(E(24, -4, 1.4, .9), '#ff4a4a');
  glowB(9, -7, m >= 2 ? 16 : 10, 'rgba(255,40,40,.5)'); eyesX(o, sk, [[9, -7, 3.4, -1]], 'slit', '#ff3a3a'); browsX(o, [[9, -11, 9, -1]], skd, 2.8, 'thick');
  g.restore();
  for (let i = 0; i < 2; i++) { const k = (o.t * .8 + i / 2) % 1; g.save(); g.globalAlpha = (1 - k) * .5; F(E(hx + 26 + k * 6, hy - 6 - k * 14, 2 + k * 4, 2 + k * 3), '#8a7a9a'); g.restore(); }
  if (fire) { const fx = hx + 26, fy = hy + 4; g.save(); g.globalCompositeOperation = 'lighter'; for (let i = 0; i < 9; i++) { const k = ((o.t * 2 + i / 9) % 1), x = fx + k * 70, y = fy + Math.sin(i * 2.1 + o.t * 8) * k * 10 + k * 8, r = 4 + k * 10; F(E(x, y, r, r * .8), `rgba(${170 - k * 60},${60 - k * 40},255,${.7 * (1 - k)})`); } g.restore(); for (let i = 0; i < 4; i++) { const k = ((o.t * 2 + i / 4 + .1) % 1); F(E(fx + k * 60, fy + k * 6, 3 + k * 5, 2.4 + k * 4), `rgba(30,6,40,${.8 * (1 - k)})`); } }
  const ha = limb(10, -4, .9 - pull * .6, 8, -1.2, 7, 3.4, 2.6, 2, sk); clawsAt(ha, horn, 3, 4);
  batWing(4, -16, -.25 + flap * .4, sk, 1.15, 1);
  g.restore();
}

function giganteD(o) {                                          // il Gigante del fagiolo: enorme e curvo, pancione, testa piccola spinta avanti, mento sporgente coi denti in fuori, nasone a patata, braccia lunghissime con pugni giganti, tunica rattoppata, piedi nudi
  const sk = '#dca27c', tun = '#7a6a48', pants = '#5a4a6a', hair = '#5a3a1a', rope = '#c8a868', u = o.u, m = o.mood, w = o.walking ? 1 : 0, hurt = m === 4 ? 1 : 0;
  const b = bobOf(o, 3.6), sway = w ? Math.sin(o.ph) * .05 : Math.sin(o.t * 1.2) * .015, up = u > 0 ? u : 0, smash = u < 0 ? -u : 0;
  const foot = (f, col) => { V(SP(`M${f[0] - 8},${f[1] - 6} Q${f[0] + 4},${f[1] - 10} ${f[0] + 16},${f[1] - 3} Q${f[0] + 18},${f[1] + 1} ${f[0] + 12},${f[1] + 1} L${f[0] - 9},${f[1] + 1}Z`), col, f[0] + 3, f[1] - 3, 11, 1.6); for (const t of [10, 13.4, 16]) V(E(f[0] + t, f[1] - 1.4, 2, 1.8), col, f[0] + t, f[1] - 1, 2, .8); };
  g.save(); g.translate(0, b); g.rotate(sway + smash * .12 - up * .06);
  foot(legB(-12, -58, 27, 26, 11, 9, 7.4, o, Math.PI, dk(pants, .25), .45), dk(sk, .14));
  const fist = (hx, hy, col) => { const fp = SP(`M${hx - 9},${hy - 6} Q${hx - 9},${hy - 12} ${hx},${hy - 11} Q${hx + 10},${hy - 11} ${hx + 10},${hy - 2} Q${hx + 10},${hy + 9} ${hx},${hy + 9} Q${hx - 10},${hy + 8} ${hx - 9},${hy - 6}Z`); V(fp, col, hx, hy, 10, 1.8); for (const k of [-4, 0, 4]) L(SP(`M${hx + 4},${hy + k - 1} l4,0`), dk(col, .35), 1.2); };
  const tgt = s => up ? [s ? -18 : 6, -186 - up * 6] : smash ? [34 + (s ? -6 : 6), -30 + smash * 6] : [s ? -30 + (w ? -Math.sin(o.ph) * 10 : 0) : 30 + (w ? Math.sin(o.ph) * 10 : 0), -46 + Math.sin(o.t * 2) * 1.4];
  const bt = tgt(1); armTo(-24, -128, bt[0], bt[1], 38, 36, 10, 8, 7, dk(sk, .14), up ? -1 : 1); fist(bt[0], bt[1], dk(sk, .14));
  const tor = SP('M-32,-132 Q-46,-104 -38,-74 Q-30,-52 0,-50 Q32,-52 36,-76 Q42,-106 28,-134 Q0,-150 -32,-132Z'); V(tor, sk, 0, -98, 46);
  const tu = SP('M-36,-120 Q-44,-96 -38,-72 Q-34,-60 -26,-60 L-20,-54 L-12,-60 L-2,-54 L8,-60 L18,-54 L26,-60 Q34,-62 36,-76 Q40,-100 30,-124 Q0,-114 -36,-120Z'); V(tu, tun, 0, -90, 40);
  g.save(); g.clip(tu); const pa = SP('M-20,-100 L-6,-102 L-4,-88 L-20,-86Z'); F(pa, '#9a5a3a'); L(pa, dk(tun, .5), .9); L(SP('M-18,-98 l2,0 M-18,-92 l2,0 M-8,-98 l2,0'), '#f0e0b0', .8); L(SP('M16,-110 Q18,-90 14,-74'), dk(tun, .3), 1.4); g.restore();
  L(SP('M-38,-74 Q0,-66 36,-76'), dk(rope, .5), 5); L(SP('M-38,-74 Q0,-66 36,-76'), rope, 3); L(SP('M10,-71 l4,10 M12,-71 l-2,11'), rope, 2.4);
  F(E(-14, -128, 6, 2), 'rgba(80,40,20,.25)');
  foot(legB(10, -58, 27, 26, 11.4, 9.4, 7.8, o, 0, pants, .45), sk);
  g.save(); g.translate(26, -140 + hurt * 4); g.rotate(m === 3 ? -.2 : hurt ? .3 : Math.sin(o.t * 1.4) * .04 + (w ? Math.sin(o.ph) * .05 : 0));
  V(SP('M-8,-4 Q-16,-8 -15,2 Q-12,6 -7,4Z'), sk, -11, 0, 6, 1.4); V(E(-12, 6, 1.8, 1.8), '#e8c040', -12, 6, 2, .7);
  const face = SP('M-10,-6 Q-10,-20 2,-20 Q13,-20 14,-8 Q16,4 12,10 Q2,15 -8,10 Q-12,4 -10,-6Z'); V(face, sk, 2, -4, 15);
  g.save(); g.clip(face); for (let i = 0; i < 18; i++) F(E(-6 + (i * 7 % 18), 4 + (i * 5 % 8), .5, .5), 'rgba(60,30,20,.45)'); F(E(-2, -18, 8, 3), 'rgba(255,240,220,.35)'); g.restore();
  for (const [x, y] of [[-10, -12], [-11, -6], [-8, -17]]) V(E(x, y, 3.4, 3), hair, x, y, 3, 1);
  const jw = m === 3 ? 4 : m === 2 ? 1 : 0; const jaw = SP(`M-6,${6 + jw} Q4,${14 + jw} 15,${7 + jw} Q16,${3 + jw} 13,${2 + jw}Z`); V(jaw, sk, 5, 7 + jw, 8, 1.6);
  if (jw) F(SP(`M-2,${4} L13,${2} L13,${3 + jw} L-2,${5 + jw}Z`), '#5a1a20');
  for (const x of [2, 9]) { const t = PL([x, 7 + jw, x + 1.6, 1.6 + jw, x + 3.2, 7 + jw]); F(t, '#f4ead0'); L(t, INK, .8); }
  eyesX(o, sk, [[2, -8, 2.4, 1], [9, -8.4, 2, -1]], 'lidded', '#6a4a2a'); browsX(o, [[2, -12, 6, 1], [9, -12.4, 5, -1]], hair, 2.6, 'bushy');
  V(E(12, -2, 5, 4.2), lt(sk, .03), 12, -3, 5, 1.6); F(E(11, -.4, 1.4, 1), 'rgba(80,30,20,.6)'); F(E(14.4, -.6, 1.2, .9), 'rgba(80,30,20,.6)'); F(E(12, -4.6, 1.8, 1.2), 'rgba(255,255,255,.4)');
  g.restore();
  const ft = tgt(0); armTo(24, -126, ft[0], ft[1], 38, 36, 11, 9, 7.6, sk, up ? -1 : 1); fist(ft[0], ft[1], sk);
  V(E(26, -126, 11, 10), tun, 26, -126, 11, 1.6);
  if (smash > .4) for (let i = 0; i < 6; i++) { const a = Math.PI + i * .5; F(E(36 + Math.cos(a) * 18, -8 + Math.sin(a) * 6, 3, 2), 'rgba(200,170,120,.7)'); }
  g.restore();
}

function ecateD(o) {                                            // Ecate: la dea delle streghe, alta e solenne, diadema con la triplice luna, velo nero stellato, veste viola a strati, chiave d'oro alla cintura, due fiaccole col fuoco viola, due volti d'ombra ai lati
  const robe = '#2a1a3e', robe2 = '#4a2a6e', sk = '#eadae2', veil = '#151022', silver = '#e2e2f6', u = o.u, m = o.mood, w = o.walking ? 1 : 0, cast = m === 2 || m === 3;
  const fl = -3 + Math.sin(o.t * 1.6) * 2, sw = (w ? Math.sin(o.ph) * 2.4 : 0) + Math.sin(o.t * 1.8) * 1.4;
  g.save(); g.translate(0, -1); g.scale(1, .28); g.rotate(o.t * .5); const ga = cast ? .9 : .45; L(E(0, 0, 30, 30), `rgba(190,120,255,${ga})`, 2.4); L(E(0, 0, 24, 24), `rgba(190,120,255,${ga * .6})`, 1.2);
  for (let i = 0; i < 3; i++) { const a = i * 2.094; F(E(Math.cos(a) * 27, Math.sin(a) * 27, 3, 3), `rgba(220,180,255,${ga})`); } g.restore();
  const torch = (h, k) => { g.save(); g.translate(h[0], h[1]); g.rotate(-.1 + k * .1); L(SP('M0,14 L0,-14'), '#3a2414', 3.6); L(SP('M0,14 L0,-14'), '#7a5a3a', 2); V(SP('M-4,-14 L4,-14 L3,-19 L-3,-19Z'), '#8a8aa0', 0, -16, 4, 1);
    const fh = (cast ? 15 : 10) + Math.sin(o.t * 11 + k) * 2; glowB(0, -24, cast ? 22 : 14, 'rgba(180,90,255,.6)');
    F(SP(`M-6,-19 Q-7,${-19 - fh * .6} ${Math.sin(o.t * 7 + k) * 2},${-19 - fh} Q7,${-19 - fh * .6} 6,-19Z`), '#9a4aff', '#c88aff'); F(SP(`M-3,-19 Q-3,${-19 - fh * .4} ${Math.sin(o.t * 9 + k) * 1.4},${-19 - fh * .7} Q3,${-19 - fh * .4} 3,-19Z`), '#f0d8ff'); g.restore(); };
  g.save(); g.translate(0, fl);
  for (const s of [-1, 1]) { g.save(); g.globalAlpha = .28 + (cast ? .15 : 0); g.translate(1 + s * 13, -94); V(SP('M-6,-6 Q-6,-13 0,-13 Q6,-13 6,-6 Q6,4 0,8 Q-6,4 -6,-6Z'), '#8a6ab8', 0, -2, 8, 0); F(E(-2.2, -3, 1.2, .8), '#f0e0ff'); F(E(2.2, -3, 1.2, .8), '#f0e0ff'); g.restore(); }
  const vp = SP(`M-3,-104 Q-16,-96 -20,-60 Q${-26 - sw},-24 ${-28 - sw},-4 L-8,-6 Q-12,-50 -6,-84Z`); V(vp, veil, -14, -50, 34, 1.6);
  g.save(); g.clip(vp); for (const [x, y] of [[-14, -70], [-18, -46], [-22, -20], [-12, -32], [-16, -88]]) F(E(x, y, 1, 1), '#d8c8ff'); g.restore();
  const hb = limb(-5, -78, (cast ? -2.4 : 2.0) + Math.sin(o.t * 1.4) * .05 - u * .3, 12, cast ? .3 : -1.2, 11, 3, 2.4, 2, dk(robe2, .3)); torch(hb, 1); V(E(hb[0], hb[1], 2.4, 2.4), dk(sk, .1), hb[0], hb[1], 2.4, 1);
  let hem = ''; for (let i = 0; i <= 6; i++) hem += ` L${-20 + i * 6.6 + sw},${i % 2 ? -4 : 1}`;
  const gp = SP(`M-7,-82 Q-9,-60 -8,-54 Q-15,-30 ${-20 + sw},0${hem} Q15,-30 8,-54 Q9,-60 7,-82Z`); V(gp, robe, 0, -40, 40);
  g.save(); g.clip(gp); const ov = SP(`M-8,-56 Q-12,-40 ${-14 + sw},-22 L${-6 + sw},-28 L${2 + sw},-20 L${10 + sw},-28 L${16 + sw},-22 Q12,-40 8,-56Z`); V(ov, robe2, 0, -40, 22, 1.2); for (const x of [-8, 0, 8]) L(SP(`M${x * .4},-52 Q${x},-28 ${x * 1.4 + sw},0`), dk(robe, .4), 1.2); g.restore();
  F(SP('M-8,-58 L8,-58 L8,-54 L-8,-54Z'), silver);
  g.save(); g.translate(-3, -54); g.rotate(Math.sin(o.t * 2) * .12); L(SP('M0,0 L0,10'), '#c89a28', 1.4); V(E(0, 12, 2.4, 2.4), '#e8b830', 0, 12, 2.4, .8); F(E(0, 12, .9, .9), robe); V(SP('M-.8,14 L.8,14 L.8,21 L2.6,21 L2.6,22.6 L.8,22.6 L.8,24 L-.8,24Z'), '#e8b830', 0, 19, 3, .7); g.restore();
  g.save(); g.translate(1, -94); g.rotate(m === 3 ? -.08 : m === 4 ? .22 : Math.sin(o.t * 1.2) * .03);
  V(SP('M-10,12 Q-14,-12 0,-16 Q13,-15 12,-2 Q12,8 10,12 L8,-2 Q2,-9 -5,-7 Q-7,0 -7,12Z'), veil, 0, -4, 14, 1.6);
  const face = SP('M-6,-5 Q-6,-12 1,-12 Q8,-12 8,-5 Q8,3 4,8 Q1,10 -2,8 Q-6,3 -6,-5Z'); V(face, sk, 1, -2, 11);
  V(SP('M-7,-7 Q0,-14 8,-8 Q4,-10 0,-9 Q-4,-9 -7,-4Z'), '#c8c0d8', 0, -9, 6, 1); L(SP('M-5,-8 Q0,-11 6,-8'), '#5a4a6a', .8);
  if (cast) glowB(3, -3, 14, 'rgba(190,120,255,.5)');
  eyesX(o, sk, [[.6, -3, 2.4, 1], [6.2, -3.2, 2, -1]], 'almond', '#8a4ae8'); browsX(o, [[.6, -7, 5, 1], [6.2, -6.8, 4, -1]], '#3a2a4a', 1.2, 'arch');
  L(SP('M5.6,-1 Q7.6,1.8 5.8,2.8'), dk(sk, .3), 1); mouthX(o, 3.4, 5, 4.6, 'smile', { lips: '#7a3a7a' });
  g.save(); g.translate(1, -17); glowB(0, 0, 12, 'rgba(230,230,255,.45)'); V(E(0, 0, 3.6, 3.6), silver, 0, 0, 4, 1); for (const s of [-1, 1]) V(SP(`M${s * 5},-4 A5,5 0 1 ${s > 0 ? 1 : 0} ${s * 5},4 A3.6,3.6 0 1 ${s > 0 ? 0 : 1} ${s * 5},-4Z`), silver, s * 6, 0, 4, 1); g.restore();
  g.restore();
  const ra = cast ? -1.3 - (m === 3 ? .3 : 0) : .9 - u * 1.3 + (w ? -Math.sin(o.ph) * .2 : 0);
  const h = limb(5, -78, ra, 12, cast ? -.3 : -1.1, 11, 3, 2.4, 2, robe2); torch(h, 0); V(E(h[0], h[1], 2.6, 2.6), sk, h[0], h[1], 3, 1.1);
  g.restore();
  if (cast) for (let i = 0; i < 6; i++) { const k = (o.t * .9 + i / 6) % 1; g.save(); g.globalAlpha = 1 - k; F(SP(`M${-18 + i * 7},${-10 - k * 60} l1.6,-4 l1.6,4 l-1.6,4Z`), i % 2 ? '#c8ffd0' : '#e0c8ff', '#b080ff'); g.restore(); }
}

function circeD(o) {                                            // Circe: maga greca, veste verde mare a pieghe con la greca d'oro, spalla scoperta, capelli biondi raccolti con diadema e alloro, coppa d'oro fumante, bacchetta, porcellino che la segue
  const dr = '#2a9a8a', dr2 = '#1c6e64', gold = '#e8c040', hair = '#efc35a', sk = '#f2d2b8', u = o.u, m = o.mood, w = o.walking ? 1 : 0, cast = m === 2 || m === 3;
  const b = bobOf(o, 1.4), sw = (w ? Math.sin(o.ph) * 2.6 : 0) + Math.sin(o.t * 1.8) * 1;
  { const px = -26, pb = w ? -Math.abs(Math.sin(o.ph * 2)) * 3 : 0, pk = '#f4a8b0', pd = dk(pk, .2);
    for (const [x, off, c] of [[-8, 0, pd], [4, Math.PI, pd], [-5, Math.PI, pk], [7, 0, pk]]) { const a = w ? Math.sin(o.ph * 2 + off) * .5 : 0; taper(px + x, -8 + pb, px + x + Math.sin(a) * 6, -1, 2.4, 2, c); F(E(px + x + Math.sin(a) * 6 + .6, -.6, 2.2, 1.2), '#5a2a2a'); }
    V(E(px, -12 + pb, 12, 8), pk, px, -12 + pb, 12, 1.6); L(SP(`M${px - 12},${-14 + pb} q-4,-2 -3,2 q1,3 -3,2`), pd, 1.4);
    V(E(px + 10, -16 + pb, 6.6, 6), pk, px + 10, -16 + pb, 6, 1.4); V(PL([px + 6, -21 + pb, px + 8, -26 + pb, px + 10, -21 + pb]), pd, px + 8, -22 + pb, 3, 1); V(E(px + 16, -15 + pb, 3, 2.6), lt(pk, .1), px + 16, -15 + pb, 3, 1); F(E(px + 15.4, -15.4 + pb, .6, .9), '#5a2a2a'); F(E(px + 17, -15.4 + pb, .6, .9), '#5a2a2a'); F(E(px + 11, -18 + pb, 1, 1.2), INK); }
  g.save(); g.translate(0, b);
  V(SP(`M-2,-92 Q-12,-84 -12,-70 Q-14,-56 ${-10 + sw * .3},-46 Q-6,-58 -4,-74Z`), hair, -8, -70, 14, 1.6);
  const cup = (h) => { g.save(); g.translate(h[0], h[1]); V(SP('M-7,-5 Q-6,1 0,2 Q6,1 7,-5Z'), gold, 0, -2, 6, 1.2); L(SP('M0,2 L0,6 M-3,6.4 L3,6.4'), dk(gold, .3), 1.6); F(E(0, -5, 6, 1.4), '#4ab86a');
    for (let i = 0; i < 3; i++) { const k = (o.t * .8 + i / 3) % 1; g.save(); g.globalAlpha = (1 - k) * .7; F(E(Math.sin(o.t * 2 + i * 2) * 3, -8 - k * 16, 2 + k * 3, 2 + k * 2), '#8ae8a8'); g.restore(); } g.restore(); };
  const hb = limb(-5, -78, (cast ? .9 : 1.0) + Math.sin(o.t * 1.4) * .05, 12, -1.3, 11, 2.8, 2.2, 1.9, dk(sk, .1)); for (const k of [.4, .5]) F(E(-5 + (hb[0] + 5) * k, -78 + (hb[1] + 78) * k, 2.6, 1.2), gold); cup([hb[0], hb[1] - 2]); V(E(hb[0], hb[1], 2.4, 2.4), dk(sk, .1), hb[0], hb[1], 2.4, 1);
  const gp = SP(`M-7,-82 Q-9,-62 -7,-56 Q-14,-30 ${-18 + sw},0 L${18 + sw},0 Q14,-30 7,-56 Q8,-66 4,-82Z`); V(gp, dr, 0, -40, 40);
  g.save(); g.clip(gp); for (const x of [-10, -4, 2, 8]) L(SP(`M${x * .4},-56 Q${x},-28 ${x * 1.5 + sw},0`), dr2, 1.3); F(SP(`M${-22 + sw},-6 L${22 + sw},-6 L${22 + sw},0 L${-22 + sw},0Z`), gold);
  let gk = `M${-20 + sw},-1.4`; for (let x = -20; x < 20; x += 4) gk += ` l0,-3 l3,0 l0,2 l-1.4,0 M${x + 4 + sw},-1.4`; L(SP(gk), dr2, .9);
  F(SP('M-7,-60 L7,-60 L7,-56 L-7,-56Z'), gold); V(E(0, -58, 2, 2), '#2a8ad8', 0, -58, 2, .7); g.restore();
  F(SP('M-7,-82 Q-2,-80 0,-74 Q2,-80 4,-82 L1,-84 Q-3,-84 -7,-82Z'), sk); L(SP('M4,-82 L-6,-70'), dr2, 1.6);
  g.save(); g.translate(1, -92); g.rotate(m === 3 ? -.1 : m === 4 ? .22 : Math.sin(o.t * 1.5) * .04);
  V(E(-7, -8, 5.4, 5), hair, -7, -8, 5, 1.4);
  const face = SP('M-6,-5 Q-6,-12 1,-12 Q8,-12 8,-5 Q8,2 5,6 Q2,9 -1,8 Q-5,5 -6,-5Z'); V(face, sk, 1, -2, 11);
  V(SP('M-8,4 Q-10,-12 0,-14 Q9,-14 9,-7 Q4,-11 -1,-9 Q-4,-6 -5,4Z'), hair, -1, -6, 11, 1.4); L(SP('M-6,-8 Q0,-12 7,-9'), dk(hair, .3), .8);
  L(SP('M-7,-11 Q1,-16 9,-10'), dk(gold, .4), 2.8); L(SP('M-7,-11 Q1,-16 9,-10'), gold, 1.6); V(PL([0, -14, 1.6, -18, 3.2, -14]), gold, 1.6, -15, 2, .7);
  for (const [x, y, a] of [[-8, -10, -2.4], [-9, -6, -2.8], [-6, -13, -2.0]]) { g.save(); g.translate(x, y); g.rotate(a); V(E(3, 0, 3.4, 1.4), '#4a9a3a', 3, 0, 3, .7); g.restore(); }
  eyesX(o, sk, [[.6, -3, 2.4, 1], [6.2, -3.2, 2, -1]], 'lashes', '#2aa86a'); browsX(o, [[.6, -7, 5, 1], [6.2, -6.8, 4, -1]], dk(hair, .45), 1.2, 'arch');
  L(SP('M5.6,-1 Q7.6,1.8 5.8,2.8'), dk(sk, .3), 1); F(E(-2.6, 1.8, 2, 1.1), 'rgba(240,120,120,.3)'); mouthX(o, 3.4, 4.8, 5, 'pout', { lips: '#d0506a' });
  V(E(-5, 2, 1.2, 1.2), gold, -5, 2, 1.2, .6);
  g.restore();
  const ra = cast ? -.7 - (m === 3 ? .3 : 0) : .9 - u * 1.2 + (w ? -Math.sin(o.ph) * .2 : 0);
  const h = limb(4, -78, ra, 12, cast ? -.1 : -1.0, 11, 2.8, 2.2, 1.9, sk); F(E(4 + (h[0] - 4) * .5, -78 + (h[1] + 78) * .5, 2.6, 1.2), gold);
  g.save(); g.translate(h[0], h[1]); g.rotate(cast ? .7 : -.1 + Math.sin(o.t * 2) * .06); L(SP('M0,4 L0,-22'), '#5a3a1a', 2.4); L(SP('M0,4 L0,-22'), '#b8865a', 1.2);
  const st = (r) => SP(`M0,${-26 - r} L${r * .3},${-26 - r * .3} L${r},-26 L${r * .3},${-26 + r * .3} L0,${-26 + r} L${-r * .3},${-26 + r * .3} L${-r},-26 L${-r * .3},${-26 - r * .3}Z`);
  if (cast) glowB(0, -26, 16, 'rgba(255,140,200,.6)'); F(st(cast ? 6 : 4), '#ffd0e8', '#ff8ac8'); g.restore();
  V(E(h[0], h[1], 2.4, 2.4), sk, h[0], h[1], 2.4, 1);
  if (m === 3) for (let i = 0; i < 6; i++) { const k = (o.t * 1.6 + i / 6) % 1, a = i * 1.1; F(E(h[0] + 14 + k * 34 + Math.cos(a) * 4, h[1] - 24 + Math.sin(a + o.t * 4) * 6, 1.8, 1.8), `rgba(255,170,220,${1 - k})`, '#ff8ac8'); }
  g.restore();
}

function minotauroD(o) {                                        // il Minotauro: uomo-toro enorme, testa di toro con corna larghissime, anello d'oro al naso, vapore dalle narici, petto villoso, cinghie e gonnellino di cuoio con la greca, zoccoli, ascia bipenne
  const fur = '#6a3a22', furd = dk(fur, .3), hornC = '#efe2c4', muz = '#b88a6a', lea = '#7a4a2a', metal = '#b8c0c4', gold = '#e8b830', u = o.u, m = o.mood, w = o.walking ? 1 : 0, hurt = m === 4 ? 1 : 0;
  const b = bobOf(o, 3), charge = u < 0 ? -u : 0, low = m === 2 ? 1 : 0, lean = charge * .35 + low * .12 + (w ? .06 : 0);
  if (low || charge) for (let i = 0; i < 4; i++) { const k = (o.t * 1.6 + i / 4) % 1; g.save(); g.globalAlpha = (1 - k) * .6; F(E(-10 - k * 24, -2 - k * 8, 4 + k * 6, 2 + k * 3), '#c8b090'); g.restore(); }
  g.save(); g.translate(charge * 18, b); g.rotate(lean);
  const legH = (hx, off, col) => { const p = o.ph + off, a = w ? Math.sin(p) * .5 : (low ? Math.sin(o.t * 8) * .15 * (off ? 1 : 0) : 0), lift = w ? Math.max(0, Math.cos(p)) * .5 : 0;
    const k = [hx + Math.sin(a + .3) * 24, -64 + Math.cos(a + .3) * 24], hk = [k[0] + Math.sin(a - .6 - lift) * 20, k[1] + Math.cos(a - .6 - lift) * 20], f = [hk[0] + Math.sin(a + .05 + lift * .6) * 22, hk[1] + Math.cos(a + .05 + lift * .6) * 22];
    taper(hx, -66, k[0], k[1], 11, 8, col); taper(k[0], k[1], hk[0], hk[1], 6.4, 4.6, col); taper(hk[0], hk[1], f[0], f[1], 4.4, 4, col);
    V(SP(`M${f[0] - 5},${f[1] - 4} L${f[0] + 6},${f[1] - 4} L${f[0] + 7},${f[1] + 1} L${f[0] - 6},${f[1] + 1}Z`), '#2a1a14', f[0], f[1] - 1, 6, 1.4); L(SP(`M${f[0] + .5},${f[1] - 4} L${f[0] + .5},${f[1] + 1}`), '#6a5a4a', 1); };
  legH(-8, Math.PI, furd);
  const hb = limb(-22, -118, 1.8 + (w ? Math.sin(o.ph) * .4 : 0) + charge * .5, 22, -.5, 20, 9, 7.4, 6, furd); V(E(hb[0], hb[1], 7, 6.4), furd, hb[0], hb[1], 7, 1.4);
  const tor = SP('M-28,-122 Q-36,-100 -24,-70 L22,-70 Q34,-98 28,-124 Q0,-136 -28,-122Z'); V(tor, fur, 0, -98, 34);
  g.save(); g.clip(tor); V(SP('M-12,-118 Q0,-110 14,-118 Q16,-100 2,-96 Q-14,-100 -12,-118Z'), lt(fur, .12), 0, -108, 14, 0); for (let i = 0; i < 10; i++) L(SP(`M${-14 + i * 3},${-104 + (i % 3) * 3} l-1.4,3 m2,-3 l1.4,3`), furd, .9);
  L(SP('M-30,-128 L30,-74'), dk(lea, .3), 6); L(SP('M-30,-128 L30,-74'), lea, 4); V(E(-2, -100, 3, 3), metal, -2, -100, 3, 1); g.restore();
  const sk = SP('M-26,-74 L24,-74 L30,-48 L-30,-48Z'); V(sk, lea, 0, -62, 26); g.save(); g.clip(sk); for (let x = -30; x < 30; x += 10) L(SP(`M${x},-48 L${x + 2},-70`), dk(lea, .3), 1.2);
  let gk = 'M-30,-52'; for (let x = -30; x < 30; x += 6) gk += ` l0,-4 l4,0 l0,3 l-2,0 M${x + 6},-52`; L(SP(gk), gold, 1.2); g.restore(); F(SP('M-26,-76 L24,-76 L24,-71 L-26,-71Z'), dk(lea, .3));
  legH(8, 0, fur);
  g.save(); g.translate(16, -134 + low * 10 + charge * 8); g.rotate(low * .55 + charge * .7 - hurt * .3 + Math.sin(o.t * 1.6) * .03);
  for (const s of [-1, 1]) { const hp = s < 0 ? SP('M-8,-10 Q-26,-8 -32,-24 Q-30,-34 -24,-38 Q-24,-26 -18,-20 Q-12,-16 -6,-16Z') : SP('M6,-14 Q20,-16 28,-30 Q32,-38 30,-44 Q38,-32 32,-18 Q24,-8 8,-6Z'); g.save(); const gr = g.createLinearGradient(0, -8, 0, -42); gr.addColorStop(0, hornC); gr.addColorStop(1, '#5a4a3a'); g.lineJoin = 'round'; g.strokeStyle = INK; g.lineWidth = 3.6; g.stroke(hp); g.fillStyle = gr; g.fill(hp); g.restore(); }
  V(SP('M-12,-8 Q-22,-14 -22,-4 Q-18,0 -11,-1Z'), furd, -16, -6, 7, 1.4);
  const hd = SP('M-12,-6 Q-12,-20 0,-20 Q12,-20 14,-8 Q18,0 22,6 Q22,14 12,16 Q0,16 -6,10 Q-12,4 -12,-6Z'); V(hd, fur, 4, -2, 18);
  V(SP('M6,2 Q16,-2 22,4 Q24,12 18,15 Q8,17 4,12 Q2,6 6,2Z'), muz, 14, 8, 9, 1.4); F(E(15, 6.4, 1.6, 2.2, .3), '#2a1410'); F(E(20, 7, 1.4, 2, .3), '#2a1410'); L(SP('M10,13 Q14,15 19,13'), dk(muz, .5), 1.2);
  L(E(18, 11, 3, 3.4), dk(gold, .5), 2.8); L(E(18, 11, 3, 3.4), gold, 1.6);
  for (let i = 0; i < 4; i++) L(SP(`M${-6 + i * 3},-18 l-1,-5`), furd, 1.4);
  eyesX(o, fur, [[2, -8, 2.8, 1], [10, -9, 2.4, -1]], 'wide', '#c82020'); browsX(o, [[2, -12.4, 7, 1], [10, -13, 6, -1]], dk(fur, .55), 3, 'thick');
  g.restore();
  for (let i = 0; i < 2; i++) { const k = (o.t * (low || charge ? 2 : .7) + i / 2) % 1, nx = 16 + 18 + charge * 4, ny = -126 + low * 12 + charge * 14; g.save(); g.globalAlpha = (1 - k) * .55; F(E(nx + k * 14, ny + k * 4, 2 + k * 5, 1.6 + k * 3), '#f4f0ea'); g.restore(); }
  const ra = u > 0 ? -1.6 - u * .6 : charge ? .2 : .5 + (w ? -Math.sin(o.ph) * .3 : 0);
  const h = limb(22, -118, ra, 22, u > 0 ? -.4 : -1.2 + charge * .6, 20, 10, 8, 6.4, fur);
  g.save(); g.translate(h[0], h[1]); g.rotate(u > 0 ? -2.2 : charge ? .4 : -.3 + Math.sin(o.t * 1.4) * .04);
  L(SP('M0,22 L0,-50'), '#3a2414', 5); L(SP('M0,22 L0,-50'), '#7a5a3a', 3);
  for (const s of [-1, 1]) { const bl = SP(`M0,-46 Q${s * 10},-58 ${s * 22},-60 Q${s * 18},-46 ${s * 22},-30 Q${s * 10},-32 0,-38Z`); V(bl, metal, s * 12, -46, 14, 1.6); g.save(); g.clip(bl); F(SP(`M${s * 18},-62 Q${s * 14},-46 ${s * 18},-28 L${s * 26},-28 L${s * 26},-62Z`), '#eef2f4'); g.restore(); }
  V(E(0, -42, 3, 5), gold, 0, -42, 4, 1); g.restore();
  V(E(h[0], h[1], 7.4, 6.6), fur, h[0], h[1], 7, 1.4);
  V(E(22, -118, 11, 10), dk(lea, .1), 22, -118, 11, 1.6); F(E(22, -118, 3, 3), metal);
  g.restore();
}

function feniceD(o) {                                           // la Fenice Nera: uccello slanciato tutto nero col bordo delle piume di brace, collo lungo, cresta di fiamma, ali alte, coda lunghissima con le punte accese, scintille che cadono
  const blk = '#1e1a24', blk2 = '#2e2834', emb = '#ff7a2a', emb2 = '#ffd04a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, fire = m === 3 || u < 0, hurt = m === 4 ? 1 : 0;
  const hov = -56 + Math.sin(o.t * 2.6) * 4, flap = Math.sin(o.t * (w ? 6 : 3.6)), pull = u > 0 ? u : 0;
  for (let i = 0; i < 6; i++) { const k = (o.t * .6 + i / 6) % 1; g.save(); g.globalAlpha = 1 - k; F(E(-30 + i * 8 + Math.sin(i * 3 + o.t) * 4, hov + 10 + k * 40, 1.4, 1.4), i % 2 ? emb2 : emb, emb); g.restore(); }
  g.save(); g.translate(0, hov); g.rotate((w ? .12 : .04) - pull * .2 + hurt * -.2);
  const fea = (x0, y0, a, len, wd, col, edge) => { g.save(); g.translate(x0, y0); g.rotate(a); const p = SP(`M0,0 Q${len * .4},${-wd} ${len},0 Q${len * .4},${wd} 0,0Z`); V(p, col, len * .4, 0, len * .5, 1.4); L(SP(`M${len * .2},${wd * .5} Q${len * .55},${wd * .6} ${len},0`), edge, 1.6); L(SP(`M0,0 L${len * .9},0`), dk(col, .4), .8); g.restore(); };
  const wingF = (sx, sy, a, sc, col) => { g.save(); g.translate(sx, sy); g.rotate(a); g.scale(sc, sc); for (let i = 0; i < 7; i++) fea(0, 0, -1.2 - i * .2, 40 - Math.abs(i - 2) * 4, 5, i % 2 ? col : dk(col, .15), i < 3 ? emb2 : emb); V(SP('M-4,2 Q-6,-14 4,-22 Q10,-10 6,4Z'), col, 2, -8, 10, 1.4); g.restore(); };
  wingF(-6, -6, -.3 + flap * .45, .9, blk);
  for (let i = 0; i < 4; i++) { const tw = Math.sin(o.t * 2 + i) * 6; const t = ribbon([[-10, 6], [-30, 14 + i * 3], [-50, 18 + i * 6 + tw * .5], [-74 + i * 4, 18 + i * 10 + tw]], 3.2, 1.2, i % 2 ? blk2 : blk, null);
    const e = [-74 + i * 4, 18 + i * 10 + tw]; glowB(e[0], e[1], 10, 'rgba(255,140,40,.6)'); g.save(); g.translate(e[0], e[1]); g.rotate(Math.PI + .3 + i * .15); F(SP(`M0,0 Q5,-6 ${10 + Math.sin(o.t * 9 + i) * 2},${-1} Q5,5 0,0Z`), emb, emb2); F(E(4, 0, 1.6, 1.6), emb2); g.restore(); }
  for (const [x, off] of [[-4, 0], [4, 1.4]]) { const h = limb(x, 10, 1.7 + Math.sin(o.t * 2.6 + off) * .1, 8, -.6, 7, 2, 1.6, 1.2, '#3a2a2a'); clawsAt(h, emb2, 3, 4); }
  const body = SP('M-14,6 Q-14,-10 0,-14 Q12,-14 14,-4 Q14,10 2,14 Q-10,14 -14,6Z'); V(body, blk, 0, 0, 18);
  g.save(); g.clip(body); for (let i = 0; i < 6; i++) L(SP(`M${-10 + i * 4},${4 - i} q2,3 4,0`), 'rgba(255,140,60,.5)', 1); g.restore();
  const hx = 22 - pull * 8 + (u < 0 ? -u * 6 : 0), hy = -40 - pull * 4 + hurt * 4;
  ribbon([[6, -8], [16, -18], [10, -30], [hx - 2, hy]], 5, 3.4, blk, null);
  g.save(); g.translate(hx, hy); g.rotate(-.1 - pull * .3 + hurt * -.3 + (u < 0 ? .2 : 0));
  for (let i = 0; i < 4; i++) { const a = -2.0 - i * .3 + Math.sin(o.t * 6 + i) * .08, l = 14 - i * 1.5; F(SP(`M-2,-4 Q${Math.cos(a - .3) * l * .7},${-4 + Math.sin(a - .3) * l * .7} ${Math.cos(a) * l},${-4 + Math.sin(a) * l} Q${Math.cos(a + .3) * l * .5},${-4 + Math.sin(a + .3) * l * .5} 2,-6Z`), i % 2 ? emb : emb2, emb); }
  const hd = SP('M-6,-2 Q-6,-10 2,-10 Q9,-9 10,-3 Q10,3 2,4 Q-5,4 -6,-2Z'); V(hd, blk, 2, -3, 9);
  const op = fire ? .45 : m === 2 ? .12 : 0; V(SP('M8,-5 Q16,-4 19,2 Q14,0 9,0Z'), '#c89a2a', 13, -2, 5, 1.2); g.save(); g.translate(9, 0); g.rotate(op); V(SP('M0,0 Q6,1 9,3 Q4,3 0,2Z'), '#8a6a1a', 4, 1, 4, 1); g.restore();
  glowB(4, -4, m >= 2 ? 12 : 8, 'rgba(255,170,50,.55)'); eyesX(o, blk, [[4, -4, 2.4, -1]], 'glow', emb2);
  g.restore();
  if (fire) { const fx = hx + 18, fy = hy + 2; glowB(fx + 10, fy + 4, 22, 'rgba(255,140,40,.7)'); for (let i = 0; i < 7; i++) { const k = ((o.t * 2.2 + i / 7) % 1); F(E(fx + k * 60, fy + k * 12 + Math.sin(i * 2 + o.t * 9) * k * 6, 3 + k * 7, 2.6 + k * 5), `rgba(255,${200 - k * 120},${60 - k * 50},${.85 * (1 - k)})`); } }
  wingF(2, -8, -.1 + flap * .5, 1.12, blk2);
  g.restore();
}
Object.assign(DRAW, { dragonero: dragoneroD, gigante: giganteD, ecate: ecateD, circe: circeD, minotauro: minotauroD, fenice: feniceD });
