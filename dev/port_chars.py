# porta i disegni nuovi dei personaggi dal prototipo dentro game.html (in una scatola separata: NG)
import re, json, sys
PROTO = 'proto/dragon-war-grafica.html'
src = open(PROTO).read()
a = src.index('// ---------- colori ----------')
b = src.index('const DEF = {')
chars = src[a:b].replace("MC.set(key, v); return v; }", "if (MC.size > 8000) MC.clear(); MC.set(key, v); return v; }")
# bez e chain stanno dopo DEF nel prototipo
for name in ['bez', 'chain']:
    m = re.search(r'^function ' + name + r'\(.*?^}\n' if name == 'chain' else r'^function bez\(.*?\n', src[b:], re.S | re.M)
    chars += m.group(0)
# i mondi: sfondi, tane, castelli, ostacoli (adattati al campo del gioco)
w0 = src.index('// ---------- sfondi dei mondi'); w1 = src.index('// ---------- gioco ----------')
worlds = src[w0:w1]
OLD_LAYER = worlds[worlds.index('function layer('):worlds.index('const WD = ')]
worlds = worlds.replace(OLD_LAYER, '''function layer(w, fn, grade = 1, box) { const b = box || [0, OY, w, H], c = document.createElement('canvas'); c.width = Math.max(1, Math.ceil((b[2] - b[0]) * S)); c.height = Math.max(1, Math.ceil((b[3] - b[1]) * S)); const old = g, lo = LO; g = c.getContext('2d'); g.scale(S, S); g.translate(-b[0], -b[1]); LO = [b[0], b[1]]; fn(w);
  if (grade && TIME) { g.save(); g.globalCompositeOperation = 'source-atop'; g.fillStyle = TIME === 2 ? (WD().night || 'rgba(16,20,64,.5)') : 'rgba(255,120,70,.12)'; g.fillRect(b[0], b[1], b[2] - b[0], b[3] - b[1]); g.restore(); }
  g = old; LO = lo; c.box = b; return c; }
''')
for a, b2, n in [('g.fillRect(0, 0, w, H)', 'g.fillRect(0, OY, w, H - OY)', 4), ('rr(0, HOR - 60)', 'rr(Math.min(0, OY), HOR - 60)', 1),
                 ('(g.getTransform().e / S), wy + g.getTransform().f / S, 34)', '(g.getTransform().e / S + LO[0]), wy + g.getTransform().f / S + LO[1], 34)', 1)]:
    assert worlds.count(a) == n, a
    worlds = worlds.replace(a, b2)
chars += worlds
chars += open('nw_core.js').read()
chars += open('nw_dragon.js').read()
chars += open('nw_sprites.js').read()
NH = json.load(open('proto/nh.json'))
NH = {k: v[0] for k, v in NH.items() if isinstance(v, list)}

block = r'''
/* ================= grafica nuova dei personaggi (dal prototipo, in una scatola a parte: NG) ================= */
const NG_LIGHT = () => L, NG_MODE = () => MODE, NG_FLASH = () => `rgba(${FLASHC},${FLASH})`, NG_CHAR = () => CHAR, NG_FC = () => [FLASHC, FLASH];
const NG = (() => {
let g = null;
let H = 560, WW = 1300, VW = 1300, HOR = 318, LX = 150, CX = 1130, BASE = 400, S = 1, G0 = 372, DY = 150, OY = 0, T = 0, cam = 0, RAW = 0;
const DEP = (x, z) => .78 * Math.sin(Math.PI * Math.max(0, Math.min(1, (x - LX) / (CX - LX)))) + .22 * z;
''' + chars + r'''
// --- luce del gioco, ombre a terra e lampi di colore ---
const _F = F, _L = L, _V = V, _glowB = glowB, _rim = rim;
const tint = c => { if (RAW || typeof c !== 'string' || c.length !== 7 || c[0] !== '#') return c; const Lt = NG_LIGHT(); return Lt.shadow ? mix(c, Lt.shadow, NG_CHAR() ? (Lt.amtC || 0) : (Lt.amtB || 0)) : c; };
F = (p, col, glow) => _F(p, tint(col), NG_LIGHT().dark > .5 ? glow : glow);
L = (p, col, w) => _L(p, tint(col), w);
V = (p, col, cx, cy, r, ow) => _V(p, tint(col), cx, cy, r, ow);
glowB = (x, y, r, c) => { if (NG_MODE() !== 'normal') return; _glowB(x, y, r, c); };
rim = (p, col, w) => { if (NG_MODE() !== 'normal') return; _rim(p, col, w); };
let REAL = null, PROXY = null, PCOL = '';
function proxyOf(c) { if (PROXY && REAL === c) return PROXY; REAL = c;
  const paint = name => (...a) => { const op = c.globalCompositeOperation; c.globalCompositeOperation = 'source-over'; if (name === 'stroke' || name === 'strokeRect' || name === 'strokeText') c.strokeStyle = PCOL; else c.fillStyle = PCOL; c[name](...a); c.globalCompositeOperation = op; };
  const over = { fill: paint('fill'), stroke: paint('stroke'), fillRect: paint('fillRect'), strokeRect: paint('strokeRect'), fillText: paint('fillText'), strokeText: paint('strokeText') };
  PROXY = new Proxy(c, { get(t, p) { if (over[p]) return over[p]; const v = t[p]; return typeof v === 'function' ? v.bind(t) : v; }, set(t, p, v) { t[p] = v; return true; } }); return PROXY; }
const SUB = { topo: o => topo1(o, (o.id || 0) % 4 * 1.3), scheletro: o => schel1(o, (o.id || 0) % 3), pipsciame: o => pip1(o, (o.id || 0) % 5), pipistrello: o => pip1(o, (o.id || 0) % 5), lupetto: o => cub1(o, (o.id || 0) % 3),
  scimmia: o => monkeyB(o, (o.id || 0) % 3), capoladroni: o => ladroneB(o, 0, 1), ladrone: o => ladroneB(o, 1 + (o.id || 0) % 3, 0), matrigna_m: o => matrignaB(o), sorella: o => sorellaB(o, (o.id || 0) % 2),
  reginacuori_q: o => reginaB(o), carta: o => cartaB(o, (o.id || 0) % 2), burattino: o => burattinoD(o, (o.id || 0) % 3), corvo: o => crowD(o), troll: o => DRAW.trollponte(o), gemello: o => gemelloD(o, (o.id || 0) % 2),
  bimbo: o => bimboD(o, (o.id || 0) % 2), miraggio: o => { g.save(); if (NG_MODE() !== 'shadow') g.globalAlpha *= .45; DRAW.morgana(o); g.restore(); },
  nani: o => { for (const [x, s2, v] of [[-22, .9, 1], [22, .9, 2], [0, 1, 0]]) { g.save(); g.translate(x, 0); g.scale(s2, s2); nanoD(Object.assign({}, o, { t: o.t + v, ph: o.ph + v })); g.restore(); } },
  bimbi: o => { for (const [x, v] of [[-14, 0], [14, 1]]) { g.save(); g.translate(x, 0); bimboD(Object.assign({}, o, { t: o.t + v, ph: o.ph + v }), v); g.restore(); } },
  guardie: o => { for (const [x, s2, v] of [[-22, .9, 1], [22, .9, 2], [0, 1, 0]]) { g.save(); g.translate(x, 0); g.scale(s2, s2); guardiaD(Object.assign({}, o, { t: o.t + v, ph: o.ph + v })); g.restore(); } },
  soldatineve: o => { for (const [x, s2, v] of [[-24, .9, 1], [24, .9, 2], [0, 1, 0]]) { g.save(); g.translate(x, 0); g.scale(s2, s2); pupazzonevD(Object.assign({}, o, { t: o.t + v, ph: o.ph + v })); g.restore(); } } };
function draw(k, c, o) {                                                    // o: i parametri del gioco (arm, lean, sq, walking, ph, t, blink, hit…)
  const fn = SUB[k] || DRAW[k]; if (!fn) return false;
  if (sprDraw(k, c, o, fn)) return true;
  const a = o.arm || 0, u = a < 0 ? Math.min(1, -a / 1.5) : a > 0 ? -Math.min(1, a / 1.3) : 0;
  const p = { t: o.t || 0, ph: o.ph || 0, walking: !!o.walking, atk: a ? .5 : -1, u, mood: o.hit ? 4 : a < -.3 ? 2 : a > .3 ? 3 : o.walking ? 1 : 0, blink: (o.blink ?? 1) < .5 ? .1 : 1, id: o.id || 0, look: o.look, hpf: o.hpf, hyde: o.hyde, van: o.van };
  const m = NG_MODE(); if (m === 'normal') g = c; else { PCOL = m === 'shadow' ? 'rgba(20,12,36,.22)' : NG_FLASH(); g = proxyOf(c); }
  c.save(); c.rotate((o.lean || 0) * .5); const sq = o.sq || 0; c.scale(1 + sq, 1 - sq); fn(p); c.restore(); g = null; return true;
}
return { draw, has: k => !!(SUB[k] || DRAW[k]), nw: { ensure: nwEnsure, prep: nwPrep, ready: () => !!NWS && NWS.sets.some(Boolean), back: nwBack, owned: nwOwned, front: nwFront, pt: nwPt, lights: nwLightList, sun: nwSunPos }, dragon: ngDragon, skin: id => !!SKINS[id], frame: () => { SPR_NEW = 0; }, sprInfo: () => ({ n: SPR.size, px: SPR_PX }) };
})();
const NG_H = ''' + json.dumps(NH) + r''';
const NG_OLD = Object.assign({}, DRAW), NG_SKIN = new Set(Object.keys(LOOKS).filter(id => !LOOKS[id].tint && !LOOKS[id].filter));   // le skin con gli accessori restano col disegno di prima
for (const k of Object.keys(DRAW)) { if (!NG.has(k) || !NG_H[k] || k === 'drago') continue;
  const old = DRAW[k], hk = k;
  DRAW[k] = o => { if (o && o.look && NG_SKIN.has(o.look)) return old(o); const s2 = (HEIGHT[hk] || NG_H[hk]) / NG_H[hk]; ctx.save(); ctx.scale(s2, s2); NG.draw(hk, ctx, o || {}); ctx.restore(); }; }
'''
g = open('game.html').read()
if 'grafica nuova dei personaggi (dal prototipo' in g:
    i = g.index('/* ================= grafica nuova dei personaggi (dal prototipo'); j = g.index("e => ", i) if False else g.index("NG.draw(hk, ctx, o || {}); ctx.restore(); }; }\n", i) + len("NG.draw(hk, ctx, o || {}); ctx.restore(); }; }\n")
    g = g[:i] + g[j:]
anchor = 'function drawIcon(cvs, key, look) {'
assert g.count(anchor) == 1
g = g.replace(anchor, block.lstrip('\n') + anchor)
# il colpo subito arriva ai disegni nuovi (faccia "colpito")
a2 = "look:unitLook(u)};"
if 'hit:(u.flash || 0) > .3' not in g:
    assert g.count(a2) == 1; g = g.replace(a2, "look:unitLook(u), hit:(u.flash || 0) > .3};")
open('game.html', 'w').write(g)
print('ok', len(block))
