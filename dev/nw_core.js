// --- i mondi nel gioco: lo sfondo si disegna una volta per ogni ora del giorno; tana e castello in fogli a parte (così tremano, sprofondano, si girano) ---
const NW_SX = 860 / 980;                                                     // 1 unità del prototipo = 0,8776 unità del gioco (tana→castello: 980 → 860)
let NWS = null, OBK = null, LO = [0, 0];
function nwApply(P) { ({ LX, CX, WW, VW, G0, HOR, BASE, DY, OY, H, S } = P); WORLD = P.th; OBK = P.ob; }
function nwGround(w) {                                                       // il terreno del prototipo, senza tana e castello
  const W = WD();
  const gg = g.createLinearGradient(0, HOR, 0, H); W.gr.forEach((c, i) => gg.addColorStop([0, .16, .55, 1][i], c)); g.fillStyle = gg; g.fillRect(0, HOR, w, H - HOR);
  for (let i = 0; i < 12; i++) { const x = rr(0, w), y = rr(G0 - 32, G0 + DY), r = rr(90, 190), p = g.createRadialGradient(x, y, 0, x, y, r); p.addColorStop(0, i % 3 ? W.patch[0] : W.patch[1]); p.addColorStop(1, 'rgba(0,0,0,0)'); g.save(); g.translate(0, y * .62); g.scale(1, .38); g.fillStyle = p; g.fillRect(x - r, y - r, r * 2, r * 2); g.restore(); }
  if (W.groundFx) W.groundFx(w);
  OBG = { inside: () => false }; if (OBK && OBS[OBK]) { obGeo(); OBS[OBK].draw(OBG, W); }
  const items = []; for (let i = 0; i < 300 * w / 1300; i++) items.push([rr(0, w), HOR + 6 + Math.pow(rnd(), 1.4) * (H - HOR - 10), rnd()]);
  items.sort((a, b) => a[1] - b[1]);
  for (const [x, y, k] of items) { const d = (y - HOR) / (H - HOR), s = .35 + d * 1.1, pT = G0 + .78 * DEP(x, 0) * DY - 8, inLane = (y > pT && y < pT + .22 * DY + 22) || OBG.inside(x, y, 1.12) || (x < LX + 190 && y < BASE + 70) || (x > CX - 190 && y < BASE + 70);
    W.scatter(x, y, s, k, d, inLane); }
}
const nwFree = st => { for (const z of st.sets) if (z) for (const c of [z.bg, z.lair, z.castle]) c.width = c.height = 0; };
const nwSnap = () => ({ g, RAW, TIME, seed, LIGHTS, FLAMES, FLAGS, OBA, LITOK, S, H, WW, VW, HOR, LX, CX, BASE, G0, DY, OY });
const nwPut = o => { g = o.g; RAW = o.RAW; TIME = o.TIME; seed = o.seed; LIGHTS = o.LIGHTS; FLAMES = o.FLAMES; FLAGS = o.FLAGS; OBA = o.OBA; LITOK = o.LITOK; S = o.S; H = o.H; WW = o.WW; VW = o.VW; HOR = o.HOR; LX = o.LX; CX = o.CX; BASE = o.BASE; G0 = o.G0; DY = o.DY; OY = o.OY; };
function* nwPause(st) { st.mine = nwSnap(); nwPut(st.outer); yield; st.outer = nwSnap(); nwApply(st.P); nwPut(st.mine); }   // pausa: il gioco ritrova tutto com'era, poi si riprende da qui
function* nwBuildG(t, P) {                                                   // costruisce giorno, tramonto o notte a pezzi (un livello alla volta)
  const st = { outer: nwSnap(), P }; nwApply(P); TIME = t; const W = WD(); seed = W.seed || 7; LIGHTS = []; FLAMES = []; FLAGS = []; OBA = null; RAW = 1;
  try {
    const sky = layer(WW, skyLayer, 0); yield* nwPause(st); LITOK = 0; const far = layer(WW, w => W.far(w)); yield* nwPause(st); const hill = layer(WW, w => W.hill(w)); LITOK = 1; yield* nwPause(st);
    const gr = layer(WW, nwGround); yield* nwPause(st);
    const bg = document.createElement('canvas'); bg.width = sky.width; bg.height = sky.height; g = bg.getContext('2d'); g.scale(S, S); g.translate(0, -OY);
    for (const c of [sky, far, hill]) g.drawImage(c, 0, OY, WW, H - OY);
    const hzc = hex(W.sky[t][3]).join(','), hz = g.createLinearGradient(0, 210, 0, HOR + 30); hz.addColorStop(0, `rgba(${hzc},0)`); hz.addColorStop(.8, `rgba(${hzc},${t === 2 ? .2 : .36})`); hz.addColorStop(1, `rgba(${hzc},0)`); g.fillStyle = hz; g.fillRect(0, 200, WW, 160);
    g.drawImage(gr, 0, OY, WW, H - OY);
    for (const c of [sky, far, hill, gr]) c.width = c.height = 0;
    yield* nwPause(st);
    const n0 = [LIGHTS.length, FLAMES.length, FLAGS.length];
    const S0 = S; S = Math.min(3, S * (P.spr || 1));                     // tana e castello si possono ingrandire: più definiti
    const lair = layer(WW, () => { g.save(); g.translate(LX, BASE); W.lair(); g.restore(); }, 1, [LX - 290, BASE - 420, LX + 330, BASE + 130]);
    yield* nwPause(st);
    const n1 = [LIGHTS.length, FLAMES.length, FLAGS.length];
    const castle = layer(WW, () => { g.save(); g.translate(CX, BASE); W.castle(); g.restore(); }, 1, [CX - 310, BASE - 660, CX + 330, BASE + 130]);
    S = S0;
    [LIGHTS, FLAMES, FLAGS].forEach((arr, j) => { for (let i = n0[j]; i < arr.length; i++) arr[i].own = i < n1[j] ? 'L' : 'C'; });
    return { bg, lair, castle, lights: LIGHTS, flames: FLAMES, flags: FLAGS, oba: OBA };
  } finally { const o = st.outer, keep = [LIGHTS, FLAMES, FLAGS, OBA]; nwPut(o); [LIGHTS, FLAMES, FLAGS, OBA] = keep; }   // luci, fiamme e bandiere restano quelle appena fatte, come prima
}
function nwBuild(t, P = NWS.P) { const it = nwBuildG(t, P); let r; while (!(r = it.next()).done); return r.value; }   // tutto in una volta (serve per il primo disegno)
const nwKey = v => [v.th, v.ob, Math.round(v.l), Math.round(v.r), Math.round(v.t), Math.round(v.b), Math.round(v.dy), Math.round(v.px * 100), Math.round((v.spr || 1) * 20)].join('|');
function nwMake(v, key) {                                                   // un mondo nuovo, ancora da disegnare
  const LXn = (70 - v.l) / NW_SX, ww = (v.r - v.l) / NW_SX;
  const P = { th: v.th, ob: v.ob, LX: LXn, CX: LXn + 980, WW: ww, VW: ww, G0: 372, HOR: 318, BASE: 400, DY: Math.max(60, v.dy / NW_SX), OY: Math.min(0, 372 + v.t / NW_SX), H: Math.max(560, 372 + v.b / NW_SX), S: Math.min(2.2, v.px * NW_SX), spr: v.spr || 1, l: v.l };
  const fg = []; { let sd = 99; const r = () => (sd = (sd * 16807) % 2147483647) / 2147483647; for (let x = -40; x < ww + 120; x += 60 + r() * 110) fg.push([x, r(), r()]); }
  return { key, P, sets: [null, null, null], fg, ow: { L: [], C: [] } };
}
const nwFirst = p => p < .25 ? 0 : p < .75 ? 1 : 2;
function nwEnsure(v) {                                                       // v: mondo, ostacolo e riquadro visibile (in unità del gioco)
  if (!WORLDS[v.th]) return false;
  const key = nwKey(v);
  if (NWS && NWS.key === key) return true;
  if (NWS) { clearTimeout(NWS.tm); NWS.run = null; }
  let hit = NW_KEEP.find(z => z.key === key);                                  // già fatto poco fa (per esempio tornando al menu): si riusa
  if (hit) NW_KEEP.splice(NW_KEEP.indexOf(hit), 1);
  else if (NW_PREP && NW_PREP.key === key) { hit = NW_PREP; clearTimeout(hit.tm); hit.run = null; NW_PREP = null; }   // preparato mentre sceglievi la squadra
  if (NWS && NWS !== hit) nwKeep(NWS);
  NWS = hit || nwMake(v, key);
  NWS.first = nwFirst(v.p);
  if (!v.lazy && !NWS.sets.some(Boolean)) NWS.sets[NWS.first] = nwBuild(NWS.first, NWS.P);   // il primo momento del giorno subito, per disegnare (all'apertura invece a pezzi: lazy)
  nwMore(NWS);
  return true;
}
let NW_PREP = null;
function nwPrep(v) {                                                         // prepara in anticipo, a pezzi, un mondo che servirà tra poco (la battaglia)
  if (!WORLDS[v.th]) return; const key = nwKey(v);
  if ((NWS && NWS.key === key) || NW_KEEP.some(z => z.key === key) || (NW_PREP && NW_PREP.key === key)) return;
  if (NW_PREP) clearTimeout(NW_PREP.tm);
  const me = NW_PREP = nwMake(v, key), f = nwFirst(v.p), order = [f, ...[0, 1, 2].filter(i => i !== f)];
  const step = () => {
    if (NW_PREP !== me) return;
    if (!me.run) { const i = order.find(j => !me.sets[j]); if (i == null) { NW_PREP = null; nwKeep(me); return; } me.run = { i, it: nwBuildG(i, me.P) }; }
    const r = me.run.it.next(); if (r.done) { me.sets[me.run.i] = r.value; me.run = null; }
    me.tm = setTimeout(step, 30);
  };
  me.tm = setTimeout(step, 30);
}
const NW_KEEP = [];                                                          // gli ultimi mondi lasciati, per tornarci senza rifarli
function nwKeep(st) { NW_KEEP.unshift(st); while (NW_KEEP.length > 2) nwFree(NW_KEEP.pop()); }   // al massimo gli ultimi due (memoria del telefono)
function nwMore(me) {                                                        // gli altri momenti del giorno: un pezzo ogni 30 ms, senza bloccare
  const step = () => {
    if (NWS !== me) return;
    if (!me.run) { const i = [me.first ?? 0, 0, 1, 2].find(j => !me.sets[j]); if (i == null) return; me.run = { i, it: nwBuildG(i, me.P) }; }
    const r = me.run.it.next(); if (r.done) { me.sets[me.run.i] = r.value; me.run = null; }
    me.tm = setTimeout(step, 30);
  };
  clearTimeout(me.tm); me.run = null; me.tm = setTimeout(step, me.sets.some(Boolean) ? 60 : 0);
}
function nwW(p) {                                                            // quanto pesa giorno, tramonto e notte (sfuma tra due)
  const w = [0, 0, 0]; if (p < .5) { const f = ease(Math.max(0, p) / .5); w[0] = 1 - f; w[1] = f; } else { const f = ease(Math.min(1, (p - .5) / .5)); w[1] = 1 - f; w[2] = f; }
  for (let i = 0; i < 3; i++) if (w[i] > 0 && !NWS.sets[i]) { const j = [i - 1, i + 1, i - 2, i + 2].find(j => j >= 0 && j < 3 && NWS.sets[j]); if (j != null) w[j] += w[i]; w[i] = 0; }
  return w;
}
function nwBlend(c, wts, pick, draw) {
  const idx = [0, 1, 2].filter(i => wts[i] > .002 && NWS.sets[i]); if (!idx.length) return;
  const a0 = c.globalAlpha; draw(pick(NWS.sets[idx[0]])); if (idx[1] != null) { c.globalAlpha = a0 * wts[idx[1]]; draw(pick(NWS.sets[idx[1]])); c.globalAlpha = a0; }
}
const nwSet0 = () => NWS.sets.find(Boolean);
const nwNight = (c, n) => n > .05 && typeof c === 'string' && c[0] === '#' && c.length === 7 ? mix(c, '#141030', .38 * n) : c;   // di notte le bandiere si scuriscono
const NW_GL = {};                                                             // l'alone di ogni colore di luce, disegnato una volta sola
function nwGlow(col) { if (NW_GL[col]) return NW_GL[col]; const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'), rg = x.createRadialGradient(64, 64, 2, 64, 64, 64); rg.addColorStop(0, col); rg.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = rg; x.fillRect(0, 0, 128, 128); return NW_GL[col] = c; }
const nwTime = p => p < .25 ? 0 : p < .75 ? 1 : 2;
function nwBack(c, p, t) {
  if (!NWS || !NWS.sets.some(Boolean)) return; nwApply(NWS.P); T = t; TIME = nwTime(p); const wts = nwW(p), W = WD(), s0 = nwSet0();
  g = c; RAW = 1; c.save(); c.translate(NWS.P.l, -G0 * NW_SX); c.scale(NW_SX, NW_SX);
  nwBlend(c, wts, z => z.bg, im => c.drawImage(im, 0, OY, WW, H - OY));
  if (wts[1] > .02 && !W.noSun) { c.save(); c.globalCompositeOperation = 'lighter'; c.globalAlpha = wts[1]; const sx = VW * .6, sy = 262;           // i raggi del tramonto
    for (let i = 0; i < 6; i++) { const a = -2.5 + i * .38 + Math.sin(T * .2 + i) * .04, wd = .07 + (i % 2) * .04; const rg = c.createRadialGradient(sx, sy, 20, sx, sy, 520); rg.addColorStop(0, 'rgba(255,220,150,.16)'); rg.addColorStop(1, 'rgba(255,220,150,0)'); c.fillStyle = rg; c.beginPath(); c.moveTo(sx, sy); c.lineTo(sx + Math.cos(a - wd) * 620, sy + Math.sin(a - wd) * 620); c.lineTo(sx + Math.cos(a + wd) * 620, sy + Math.sin(a + wd) * 620); c.fill(); }
    c.restore(); }
  if (s0.oba) s0.oba();
  for (const f of s0.flames) if (!f.own) flame(f.x, f.y, T, f.s, f.c);
  for (const f of s0.flags) if (!f.own) flag(f.x, f.y, T, nwNight(f.c, wts[2]));
  if (W.anim) { if (wts[2] > .05) c.filter = `brightness(${1 - .38 * wts[2]}) saturate(${1 - .2 * wts[2]})`; W.anim(T); c.filter = 'none'; }
  c.restore(); g = null; RAW = 0; NWS.ow = { L: [], C: [] };
}
function nwOwned(c, who, p, t, o) {                                          // tana ('L') o castello ('C'); o: spostamento, scala, girata, crepe
  if (!NWS || !NWS.sets.some(Boolean)) return; nwApply(NWS.P); T = t; TIME = nwTime(p); const wts = nwW(p), s0 = nwSet0();
  const AX = who === 'L' ? LX : CX, TX = (o.at === 'C' ? CX : o.at === 'L' ? LX : AX) + (o.dx || 0) / NW_SX, sc = o.s || 1, sg = o.flip ? -1 : 1, dy = (o.dy || 0) / NW_SX;
  NWS.ow[who].push({ AX, TX, sc, sg, dy });
  g = c; RAW = 1; c.save(); c.translate(NWS.P.l, -G0 * NW_SX); c.scale(NW_SX, NW_SX); c.translate(TX, BASE + dy); c.scale(sg * sc, sc); c.translate(-AX, -BASE);
  nwBlend(c, wts, z => who === 'L' ? z.lair : z.castle, im => c.drawImage(im, im.box[0], im.box[1], im.box[2] - im.box[0], im.box[3] - im.box[1]));
  for (const f of s0.flames) if (f.own === who) flame(f.x, f.y, T, f.s, f.c);
  for (const f of s0.flags) if (f.own === who) flag(f.x, f.y, T, nwNight(f.c, wts[2]));
  if (o.cracks) { c.save(); c.translate(AX, BASE); c.strokeStyle = o.crackC || '#2a2140'; c.lineWidth = 3.4; c.lineJoin = c.lineCap = 'round'; c.beginPath();      // il castello si crepa
    c.moveTo(70, -66); c.lineTo(56, -36); c.lineTo(72, -14); c.lineTo(62, 6); c.moveTo(-64, -10); c.lineTo(-46, 10); c.lineTo(-56, 30);
    if (o.cracks > 1) { c.moveTo(4, -72); c.lineTo(-8, -40); c.lineTo(10, -20); c.lineTo(-2, 0); c.moveTo(-112, -90); c.lineTo(-100, -50); c.lineTo(-114, -20); c.moveTo(132, -70); c.lineTo(122, -40); }
    c.stroke(); c.restore(); }
  c.restore(); g = null; RAW = 0;
}
function nwPt(who, x, y) {                                                   // un punto vicino alla tana/castello (unità del prototipo, dall'àncora) → coordinate del gioco
  const o = NWS && NWS.ow[who][NWS.ow[who].length - 1]; if (!o) return { x: 0, y: 0, s: NW_SX };
  return { x: NWS.P.l + NW_SX * (o.TX + o.sg * o.sc * x), y: NW_SX * (BASE - G0 + o.dy + o.sc * y), s: NW_SX * o.sc };
}
function nwFront(c, p, t) {                                                  // davanti ai personaggi: luci della notte, pulviscolo, erba in primo piano
  if (!NWS || !NWS.sets.some(Boolean)) return; nwApply(NWS.P); T = t; TIME = nwTime(p); cam = 0; const wts = nwW(p), W = WD(), s0 = nwSet0();
  g = c; RAW = 1; c.save(); c.translate(NWS.P.l, -G0 * NW_SX); c.scale(NW_SX, NW_SX);
  if (wts[2] > .02) { c.save(); c.globalCompositeOperation = 'lighter'; c.globalAlpha = wts[2];
    for (const l of s0.lights) for (const o of l.own ? NWS.ow[l.own] : [null]) { let x = l.x, y = l.y, r = l.r; if (o) { x = o.TX + o.sg * o.sc * (l.x - o.AX); y = BASE + o.dy + o.sc * (l.y - BASE); r *= o.sc; }
      const r2 = r * (.85 + Math.sin(T * 7 + l.x) * .15); c.drawImage(nwGlow(l.c), x - r2, y - r2, r2 * 2, r2 * 2); }
    c.restore(); }
  c.save(); c.globalCompositeOperation = 'lighter';
  if (W.pfx) W.pfx(T);
  else if (W.frozen) for (let i = 0; i < 60; i++) { const x = ((i * 97.3 + Math.sin(T * .7 + i) * 20) % (VW + 40) + VW + 40) % (VW + 40) - 20, y = ((i * 53 + T * (24 + i % 4 * 8)) % (H + 20)) - 10; c.fillStyle = 'rgba(255,255,255,.8)'; c.beginPath(); c.arc(x, y, 1 + (i % 3) * .7, 0, 7); c.fill(); }
  else for (let i = 0; i < 26; i++) { const x = ((i * 137.5 + T * (6 + i % 5)) % (VW + 40) + VW + 40) % (VW + 40) - 20, y = 300 + ((i * 71) % 220) + Math.sin(T * .8 + i) * 12, a = .25 + .25 * Math.sin(T * 1.7 + i * 2); c.fillStyle = `rgba(255,236,160,${a})`; c.beginPath(); c.arc(x, y, 1.2 + (i % 3) * .7, 0, 7); c.fill(); }
  c.restore();
  const nd = wts[2] * .45 + wts[1] * .15, fg0 = mix(W.fg[0], '#0d0a18', nd), fg1 = mix(W.fg[1], '#0d0a18', nd);   // l'erba davanti si scurisce con la sera
  for (const [x, a, b] of NWS.fg) { const sw = Math.sin(T * 1.2 + x) * 5;
    if (a < .55) { const n = 5 + Math.floor(b * 4); for (let i = 0; i < n; i++) { const o = (i - n / 2) * 9, hh = 46 + ((i * 53 + x) % 40), p = SP(`M${x + o - 5},${H + 4} Q${x + o - 2},${H - hh * .6} ${x + o + sw + o * .3},${H - hh} Q${x + o + 5},${H - hh * .5} ${x + o + 6},${H + 4}Z`); F(p, i % 2 ? fg0 : fg1); } }
    else { for (const [dx, r] of [[-26, 30], [22, 34], [0, 44]]) { const p = E(x + dx + sw * .3, H + 6 - r * .3, r, r * .9); F(p, dk(fg0, .1)); c.save(); c.clip(p); F(E(x + dx - r * .3, H - r * .9, r * .8, r * .5), 'rgba(120,180,90,.28)'); c.restore(); } } }
  c.restore(); g = null; RAW = 0;
}
