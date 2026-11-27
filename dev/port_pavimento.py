# Pavimento (27 nov 2026): l'ostacolo in mezzo al campo non è più la stessa «V» in ogni livello; ogni castello ha la sua forma (morbida, a lente,
# più larga o più stretta, spostata), e le ombre sotto l'ostacolo hanno i bordi sfumati invece delle linee nette. Le regole del gioco non cambiano. Si può rilanciare.
def patch(fn, reps):
    s = open(fn).read()
    for a, b, mark in reps:
        if mark in s: continue
        assert s.count(a) == 1, (fn, a[:90], s.count(a))
        s = s.replace(a, b)
    open(fn, 'w').write(s)

s = open('game.html').read()
i0 = s.index('function obGeo() {\n  let q = 11;'); i1 = s.index('\nconst OBS = {};', i0)
OLD = s[i0:i1]
NEW = '''function obGeo() {                                                            // la forma dell'ostacolo: dentro la curva della strada, diversa per ogni castello (OBSD)
  let q = 11 + ((OBSD | 0) * 7919) % 2000000; const R = () => (q = (q * 16807) % 2147483647) / 2147483647; for (let i = 0; i < 5; i++) R();
  const yT = G0 + 16, bot0 = x => G0 + (.78 * DEP(x, 0) - .09) * DY, all = [];
  for (let x = LX + 40; x <= CX - 40; x += 12) if (bot0(x) > yT + 26) all.push(x);
  const tl = R() * 70, tr = R() * 70, xs = all.filter(x => x >= all[0] + tl && x <= all[all.length - 1] - tr);   // più corta da una parte o dall'altra
  const x0 = xs[0], x1 = xs[xs.length - 1], cx = (x0 + x1) / 2, cy = (yT + bot0(cx)) / 2;
  const aT = 6 + R() * 22, aB = 6 + R() * 26, f1 = .6 + R() * .9, f2 = .8 + R() * 1.1, p1 = R() * 6.3, p2 = R() * 6.3, pw = .45 + R() * .3;   // gobbe sopra e sotto
  const wob = xs.map((_, i) => Math.sin(i * .9 + R() * 6) * 3 + Math.sin(i * .37 + p1) * 5);
  const RX = Math.max(1, (x1 - x0) / 2), RB = (bot0(cx) - cy) * (.5 + R() * .4), RT = (cy - yT) * (.75 + R() * .25);   // un ovale storto: niente punta a «V» in fondo
  const edge = (i, jag) => { const x = xs[i], u = (x - x0) / Math.max(1, x1 - x0), env = Math.pow(Math.max(0, Math.sin(Math.PI * u)), pw), mid = (yT + bot0(x)) / 2;   // a lente: le punte si chiudono morbide
    const t = yT + aT * (.5 + .5 * Math.sin(u * 6.283 * f1 + p1)) + wob[i] * .6 * jag, b = bot0(x) - aB * (.5 + .5 * Math.sin(u * 6.283 * f2 + p2)) + wob[i] * jag;
    const e = Math.sqrt(Math.max(0, 1 - Math.pow((x - cx) / RX, 2))), t2 = Math.max(t, cy - RT * e + wob[i] * .6 * jag), b2 = Math.min(b, cy + RB * e + wob[i] * jag);
    return [mid - (mid - t2) * env, mid + (Math.max(t2 + 4, b2) - mid) * env]; };
  const E1 = xs.map((_, i) => edge(i, 1)), at = x => { const f = Math.max(0, Math.min(xs.length - 1, (x - x0) / 12)), i = Math.floor(f), j = Math.min(xs.length - 1, i + 1), w = f - i; return [E1[i][0] * (1 - w) + E1[j][0] * w, E1[i][1] * (1 - w) + E1[j][1] * w]; };
  const bot = x => at(x)[1];
  const shape = (sh, jag = 1, dy = 0) => { const p = new Path2D(), pt = (x, y) => [cx + (x - cx) * sh, cy + (y - cy) * sh + dy], E = xs.map((_, i) => edge(i, jag));
    xs.forEach((x, i) => { const [a, b] = pt(x, E[i][0]); i ? p.lineTo(a, b) : p.moveTo(a, b); });
    for (let i = xs.length - 1; i >= 0; i--) { const [a, b] = pt(xs[i], E[i][1]); p.lineTo(a, b); } p.closePath(); p._ob = 1; return p; };
  const inside = (x, y, sh = 1) => { if (x < cx + (x0 - cx) * sh || x > cx + (x1 - cx) * sh) return false; const [t, b] = at(cx + (x - cx) / sh); return y > cy + (t - cy) * sh && y < cy + (b - cy) * sh; };
  const pts = (n, sh, ring) => { const out = []; for (let t = 0; out.length < n && t < n * 60; t++) { const x = x0 + R() * (x1 - x0), y = yT - 6 + R() * (bot0(cx) - yT + 12); if (inside(x, y, sh) && (!ring || !inside(x, y, ring))) out.push({ x, y, r: R() }); } return out.sort((a, b) => a.y - b.y); };
  OBG = { x0, x1, cx, cy, yT, bot, shape, inside, pts, R, ps: y => .5 + (y - G0) / DY * .7 };
}'''
assert OLD.count('function obGeo') == 1
if 'OBSD | 0' not in s: s = s.replace(OLD, NEW)
open('game.html', 'w').write(s)

patch('game.html', [
 # le ombre e le macchie sotto l'ostacolo (colori trasparenti) si disegnano sfumate: niente più bordo netto sul prato
 ("function F(p, col, glow) { if (glow) {",
  "function F(p, col, glow) { if (p && p._ob && typeof col === 'string' && !glow) { g.save(); g.filter = `blur(${((col.charCodeAt(3) === 97 ? 15 : 2.6) * S).toFixed(1)}px)`; g.fillStyle = col; g.fill(p); g.restore(); return; }   // ombre larghe e sfumate, rive con il bordo morbido\n  if (glow) {",
  'p._ob && typeof col'),
 ("function V(p, col, cx, cy, r, ow = 2.4) {\n  g.lineJoin = 'round';",
  "function V(p, col, cx, cy, r, ow = 2.4) {\n  if (p && p._ob && !ow) { g.save(); g.filter = `blur(${(2.6 * S).toFixed(1)}px)`; g.fillStyle = col; g.fill(p); g.restore(); return; }   // la riva dell'ostacolo: bordo morbido\n  g.lineJoin = 'round';",
  'p._ob && !ow'),
 ("let NWS = null, OBK = null, LO = [0, 0];", "let NWS = null, OBK = null, OBSD = 0, LO = [0, 0];", 'OBSD = 0, LO'),
 ("function nwApply(P) { ({ LX, CX, WW, VW, G0, HOR, BASE, DY, OY, H, S } = P); WORLD = P.th; OBK = P.ob; }",
  "function nwApply(P) { ({ LX, CX, WW, VW, G0, HOR, BASE, DY, OY, H, S } = P); WORLD = P.th; OBK = P.ob; OBSD = P.sd || 0; }", 'OBSD = P.sd || 0;'),
 ("const nwKey = v => [v.th, v.ob, ", "const nwKey = v => [v.th, v.ob, v.sd || 0, ", 'v.ob, v.sd || 0,'),
 ("const P = { th: v.th, ob: v.ob, LX: LXn,", "const P = { th: v.th, ob: v.ob, sd: v.sd || 0, LX: LXn,", 'sd: v.sd || 0, LX: LXn'),
 ("ob:P34 ? obstKind() : null, l:cam.x - 30,", "ob:P34 ? obstKind() : null, sd:P34 ? obSeed() : 0, l:cam.x - 30,", 'sd:P34 ? obSeed() : 0'),
 ("  let ob; try { s.lv = lv; ob = obstKind(); } finally { s.lv = sv; }\n  NG.nw.prep(Object.assign({th:DW.WORLDS[w].theme, ob, p}, battleView(wh[0], wh[1])));",
  "  let ob, sd; try { s.lv = lv; ob = obstKind(); sd = obSeed(); } finally { s.lv = sv; }\n  NG.nw.prep(Object.assign({th:DW.WORLDS[w].theme, ob, sd, p}, battleView(wh[0], wh[1])));", 'ob = obstKind(); sd = obSeed();'),
 ("function obstKind() {", "const obSeed = () => { const lv = s && s.lv; return lv ? 1 + (lv.world || 0) * 37 + (lv.castle || 0) * 11 : 0; };   // ogni castello la sua forma d'ostacolo\nfunction obstKind() {", 'const obSeed = ()'),
])
print('pavimento ok')
