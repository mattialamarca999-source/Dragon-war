# collega i mondi nuovi (NG.nw) al gioco: sfondo, tana, castello, luci. Si può rilanciare: ogni modifica controlla se c'è già.
g = open('game.html').read()
def rep(a, b, mark):
    global g
    if mark in g: return
    assert g.count(a) == 1, a[:80]
    g = g.replace(a, b)

HELP = r'''/* ================= mondi nuovi in battaglia (disegni del prototipo, vedi NG.nw) ================= */
let NWON = false, nwHeadW = null, nwDS = 1, dragonHead = {x:110, y:172};
function nwOn() {                                                          // in battaglia: sfondo, tana e castello nuovi
  if (GALLERY || !s || !s.base || !s.castle || !NG.nw || !(P34 ? s.lv : inMenu || inStory)) return false;   // anche nel menu, dietro i pulsanti
  return NG.nw.ensure({th:TH, ob:P34 ? obstKind() : null, l:cam.x - 30, r:cam.x + W / k + 30, t:-groundY / k - 30, b:(H - groundY) / k + 2, dy:DY, px:k * dpr, p:lightP, spr:Math.max(1, BS / .78)});
}
function nwPlace(xs, floor, need) {                                       // la soglia della grotta / del portone dove nascono i personaggi; e tutto dentro lo schermo
  const sp = dyAt(xs, .5), s = Math.min(Math.max(1, BS / .78), Math.max(.3, (sp + groundY / k - 34) / need));
  return {s, dy:sp - (24.6 + s * floor * .8776)};
}
const NW_SEEN = new WeakMap();                                              // quando è comparso ogni personaggio: esce dal buio della tana
function nwAppear(u) { if (!NWON || !P34) return 1; let t0 = NW_SEEN.get(u); if (t0 == null) NW_SEEN.set(u, t0 = time); return Math.min(1, (time - t0) / .4); }
function nwTana(b, mirror) {
  const sh = shakeB[mirror ? 1 : 0] > 0 ? Math.sin(time * 80) * 3 : 0, lost = b.hp <= 0, dy = lost ? Math.min(1, endT / 1.2) * 60 : 0;
  const pl = nwPlace(mirror ? s.castle.x - 30 : s.base.x + 30, 40, 365);
  NG.nw.owned(ctx, 'L', L.p, time, {dx:sh, dy:dy + pl.dy, s:pl.s, flip:mirror, at:mirror ? 'C' : 'L'});
  const pt = NG.nw.pt('L', -8, -206), ds = pt.s * 1.75;                    // il drago in cima alla roccia
  ctx.save(); ctx.translate(pt.x, pt.y); ctx.scale(mirror ? -ds : ds, ds); ctx.translate(-92, -228);
  CHAR = true; const m = drawDragon(); CHAR = false; ctx.restore();
  if (!mirror) { mouthW = {x:pt.x + (m.x - 92) * ds, y:pt.y + (m.y - 228) * ds}; nwHeadW = {x:pt.x + (dragonHead.x - 92) * ds, y:pt.y + (dragonHead.y - 228) * ds}; nwDS = ds; }
}
function nwCastle() {
  const c = s.castle, f = c.hp / c.max, sink = c.hp <= 0 ? Math.min(1, endT / 1.2) * 150 : 0, sh = shakeB[1] > 0 ? Math.sin(time * 90) * 2.5 : 0;
  const pl = nwPlace(c.x - 30, 34, 402);
  NG.nw.owned(ctx, 'C', L.p, time, {dx:sh, dy:sink + pl.dy, s:pl.s, cracks:f < .33 ? 2 : f < .66 ? 1 : 0, crackC:L.shadow});
  if (f < .33 || sink > 0) for (let i = 0; i < 4; i++) {                   // fumo dal castello in fiamme
    const pr = (time * .4 + i / 4) % 1, b = NG.nw.pt('C', -10 + i * 16 + pr * 20, -150 - pr * 130);
    ctx.fillStyle = `rgba(40,30,50,${.45 * (1 - pr)})`; ctx.beginPath(); ctx.arc(b.x, b.y, (10 + pr * 20) * b.s / .88, 0, 7); ctx.fill();
  }
}
'''
rep('function drawWorldBack() {\n', HELP + 'function drawWorldBack() {\n  if (NWON) { NG.nw.back(ctx, L.p, time); return; }\n', 'let NWON = false;')
rep("function drawTana(b = s.base, mirror = false) {\n", "function drawTana(b = s.base, mirror = false) {\n  if (NWON) { nwTana(b, mirror); return; }\n", 'if (NWON) { nwTana(b, mirror); return; }')
rep("function drawCastle() {\n", "function drawCastle() {\n  if (NWON) { if (s.mp === 'duel') nwTana(s.castle, true); else nwCastle(); return; }\n", 'else nwCastle(); return; }')
rep("function drawThemeFx() {                                                   // neve, bolle, foglie, coriandoli…\n",
    "function drawThemeFx() {                                                   // neve, bolle, foglie, coriandoli…\n  if (NWON) { NG.nw.front(ctx, L.p, time); return; }\n", 'NG.nw.front(ctx, L.p, time)')
rep("  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);\n  drawSkyScreen();\n", "  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);\n  NWON = nwOn(); if (NG.frame) NG.frame(); drawSkyScreen();\n", 'NWON = nwOn();')
# luci: con i mondi nuovi la notte è già dipinta nello sfondo
rep("  if (d > .02) {\n    const lw = Math.max(1, Math.ceil(W))", "  if (d > .02 && !NWON) {\n    const lw = Math.max(1, Math.ceil(W))", 'd > .02 && !NWON')
rep("  glow(ctx, lava.x, lava.y, 200 * pulse, '255,90,30', .16 + .2 * d);\n  for (const w of wins) glow(ctx, w.x, w.y, 64, '255,190,90', .42 * d);\n",
    "  if (!NWON) { glow(ctx, lava.x, lava.y, 200 * pulse, '255,90,30', .16 + .2 * d);\n  for (const w of wins) glow(ctx, w.x, w.y, 64, '255,190,90', .42 * d); }\n", "if (!NWON) { glow(ctx, lava.x")
rep("  if (ra > .02 && sp.y < 40) for", "  if (!NWON && ra > .02 && sp.y < 40) for", '!NWON && ra > .02')
rep("  ctx.fillStyle = `rgba(255,190,110,${.22 * (1 - d)})`; ctx.fillRect(0, 0, W, H);\n  if (L.S > 0)",
    "  if (!NWON) ctx.fillStyle = `rgba(255,190,110,${.22 * (1 - d)})`, ctx.fillRect(0, 0, W, H);\n  if (L.S > 0 && !NWON)", 'if (L.S > 0 && !NWON)')
rep("function drawDragon() {\n", """function drawDragon() {
  if (NG.dragon) {                                                         // il draghetto nuovo del prototipo
    const d = dragon, t = time; let rear = 0, inflate = 0, open = 0;
    if (d.phase === 'antic') { const e = ease(Math.min(1, d.pt / .18)); rear = -.35 * e; inflate = .1 * e; }
    if (d.phase === 'fire') { rear = .25 - Math.min(.25, d.pt * .4); open = 1; }
    rear += d.rear;
    ctx.save(); ctx.translate(92, 228);
    const dlk = !NET.g && save.look && LOOKS[save.look.drago]; if (dlk && dlk.filter) ctx.filter = dlk.filter;   // Drago Dorato / Drago Nero
    const bt = t % 4.2, blink = bt < .14 ? Math.abs(Math.cos(bt / .14 * Math.PI)) : 1;
    const m = NG.dragon(ctx, {t, rear, inflate, open, glasses:d.glasses, sad:d.sad, blink}); ctx.filter = 'none';
    if (inStory && story.i === 3 && story.t > 1.75 && story.t < 2.5) star(m[2] + 6, m[3], 12 * Math.sin((story.t - 1.75) / .75 * Math.PI), '#fffbe0');
    ctx.restore(); dragonHead = {x:92 + m[2], y:228 + m[3]};
    return {x:92 + m[0], y:228 + m[1]};
  }
""", 'if (NG.dragon) {')
rep("const g = tanaPt(120, 171); burst(", "const g = NWON && nwHeadW ? nwHeadW : tanaPt(120, 171); burst(", 'NWON && nwHeadW ? nwHeadW : tanaPt(120, 171)')
rep("  const head = tanaPt(128, 176), kk = R * 2 / 165,", "  const head = NWON && nwHeadW ? nwHeadW : tanaPt(128, 176), kk = R * 2 / 165 / (NWON ? nwDS : 1),", 'kk = R * 2 / 165 / (NWON')
rep("    ctx.save(); ctx.translate(u.x, dy);\n    if (u.dead) {", "    ctx.save(); ctx.translate(u.x, dy); const ap = nwAppear(u); if (ap < 1) { ctx.globalAlpha *= .25 + .75 * ap; ctx.scale(.86 + .14 * ap, .86 + .14 * ap); }\n    if (u.dead) {", 'const ap = nwAppear(u);')
rep("    if (u.cookie > 0 && !u.dead) { MODE = 'flash'; FLASHC = '200,140,80'; FLASH = .6; DRAW[vis(u.k)](o); FLASHC = '255,255,255'; MODE = 'normal'; }",
    "    if (u.cookie > 0 && !u.dead) { MODE = 'flash'; FLASHC = '200,140,80'; FLASH = .6; DRAW[vis(u.k)](o); FLASHC = '255,255,255'; MODE = 'normal'; }\n    if (ap < 1 && !u.dead) { MODE = 'flash'; FLASHC = '14,8,26'; FLASH = (1 - ap) * .9; DRAW[vis(u.k)](o); FLASHC = '255,255,255'; MODE = 'normal'; }   // escono dal buio", "escono dal buio")
open('game.html', 'w').write(g)
print('ok')
