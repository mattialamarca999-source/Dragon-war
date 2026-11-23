# Pass del Drago a stagioni mensili + Stagione 2 (Yeti delle Nevi, Goblin Elfo di Natale, Topi Pan di Zenzero). Si può rilanciare.
import json
def patch(fn, reps):
    s = open(fn).read()
    for a, b, mark in reps:
        if mark in s: continue
        assert s.count(a) == 1, (fn, a[:90], s.count(a))
        s = s.replace(a, b)
    open(fn, 'w').write(s)

patch('core.js', [
 ("    dragonero:  {side:0, cost:340,", "    yeti:       {side:0, cost:240, cd:10, hp:420, dmg:20, rate:1.6, range:120, spd:30, ranged:1, beast:1, splash:30, slowHit:{t:2}},   // lo Yeti delle Nevi: solo dal Pass (Stagione 2)\n    dragonero:  {side:0, cost:340,", "    yeti:       {side:0"),
])

SEASONS = r'''const PASS_XP = 150, PASS_LV = 30, PASS_RU = 500, PASS_S1 = new Date(2026, 11, 7).getTime();   // stagione 1: fino al 7 dicembre 2026; poi una stagione per ogni mese
// i premi speciali del Pass d'oro di ogni stagione: cattivo esclusivo al livello 30, skin ai livelli 15 e 25 (le stagioni senza voce danno uova e rubini)
const PASS_SEASONS = [
  {name:'Il Drago Nero', char:'dragonero', l15:'cavaliere', l25:'stellata'},
  {name:'Inverno', char:'yeti', l15:'elfo', l25:'panzenzero'}
];
const XP = {day:40, week:120, castle:20, crown:15};
const passSeason = () => { const n = new Date(); return n.getTime() < PASS_S1 ? 0 : 1 + (n.getFullYear() - 2026) * 12 + n.getMonth() - 11; };
const passEndT = () => { if (passSeason() === 0) return PASS_S1; const n = new Date(); return new Date(n.getFullYear(), n.getMonth() + 1, 1).getTime(); };
const passEnds = () => { const t = Math.max(0, passEndT() - Date.now()); const d = Math.floor(t / 864e5); return d >= 1 ? `${d} giorni` : `${Math.floor(t / 36e5)} ore`; };
const passFree = lv => lv % 10 === 0 ? {ru:10, eggs:{big:1}} : lv % 5 === 0 ? {eggs:{base:1}} : lv % 3 === 0 ? {lives:1} : lv % 2 === 0 ? {frR:6} : {gold:150 + lv * 20};
const passPrem = lv => { const S = PASS_SEASONS[passSeason()] || {};
  return lv === 30 && S.char ? {char:S.char} : lv === 15 && S.l15 ? {look:S.l15} : lv === 25 && S.l25 ? {look:S.l25} : lv === 30 ? {eggs:{leg:2}, ru:50} : lv % 10 === 0 ? {eggs:{leg:1}} : lv % 5 === 0 ? {ru:25} : lv % 3 === 0 ? {eggs:{big:1}} : lv % 2 === 0 ? {frR:12} : {gold:400 + lv * 40}; };'''
OLD = ("const PASS_XP = 150, PASS_LV = 30, PASS_RU = 500, PASS_DAYS = 30, PASS_T0 = new Date(2026, 10, 7).getTime();\n"
       "const XP = {day:40, week:120, castle:20, crown:15};\n"
       "const passSeason = () => Math.max(0, Math.floor((Date.now() - PASS_T0) / 864e5 / PASS_DAYS));\n")
g = open('game.html').read()
i = g.index(OLD); j = g.index('\n', g.index('const passPrem = lv =>', i)) + 1
if 'PASS_SEASONS' not in g:
    g = g[:i] + SEASONS + '\n' + g[j:]
open('game.html', 'w').write(g)

patch('game.html', [
 ("stellata:{k:'strega', name:'Strega Stellata', from:'pass', lv:25},", "stellata:{k:'strega', name:'Strega Stellata', from:'pass', lv:25},\n  elfo:{k:'goblin', name:'Goblin Elfo di Natale', from:'pass', lv:15}, panzenzero:{k:'topi', name:'Topi Pan di Zenzero', from:'pass', lv:25},", "elfo:{k:'goblin'"),
 ("dragonero:{pass:1, txt:'Livello 30 del Pass d’oro'}", "dragonero:{pass:1, txt:'Livello 30 del Pass d’oro · Stagione 1'}, yeti:{pass:1, txt:'Livello 30 del Pass d’oro · Stagione 2'}", "yeti:{pass:1"),
 ("/* ================= Mondo 16: Regno delle Nuvole ================= */",
  "/* ================= Pass Stagione 2: Yeti delle Nevi ================= */\n"
  "Object.assign(SHORT, {yeti:'Yeti delle Nevi'}); Object.assign(NAMES, {yeti:'Yeti delle Nevi'}); Object.assign(ROLE, {yeti:'Lancia palle di neve che rallentano i buoni.'});\n"
  "Object.assign(LINES, {yeti:['Fa freddo, eh?', 'Palla di neve!']}); Object.assign(RAR, {yeti:3}); VILLAINS.add('yeti');\n"
  "Object.assign(VOICE, {yeti:.7}); Object.assign(VALIAS, {yeti:'gigante'});\n"
  "{ const n = 140; HEIGHT.yeti = 112; SC.yeti = .9; DRAW.yeti = o => { const s2 = HEIGHT.yeti / n; ctx.save(); ctx.scale(s2, s2); NG.draw('yeti', ctx, o || {}); ctx.restore(); }; }\n"
  "/* ================= Mondo 16: Regno delle Nuvole ================= */", "Pass Stagione 2: Yeti delle Nevi ====="),
])

TR = {'Yeti delle Nevi': ('Snow Yeti', 'Yeti de las Nieves'), 'Lancia palle di neve che rallentano i buoni.': ('Throws snowballs that slow the good guys.', 'Lanza bolas de nieve que frenan a los buenos.'),
      'Fa freddo, eh?': ('Chilly, huh?', 'Hace frío, ¿eh?'), 'Palla di neve!': ('Snowball!', '¡Bola de nieve!'),
      'Goblin Elfo di Natale': ('Christmas Elf Goblin', 'Goblin Elfo Navideño'), 'Topi Pan di Zenzero': ('Gingerbread Mice', 'Ratones de Jengibre'),
      'Livello 30 del Pass d’oro · Stagione 1': ('Golden Pass level 30 · Season 1', 'Nivel 30 del Pase de oro · Temporada 1'),
      'Livello 30 del Pass d’oro · Stagione 2': ('Golden Pass level 30 · Season 2', 'Nivel 30 del Pase de oro · Temporada 2')}
for i2, l in enumerate(['en', 'es']):
    d = json.load(open(f'i18n/{l}.json'))
    for k, v in TR.items(): d[k] = v[i2]
    open(f'i18n/{l}.json', 'w').write(json.dumps(d, ensure_ascii=False, separators=(',', ':')))
print('ok')
