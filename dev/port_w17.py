# Mondo 17 «Giungla di Mowgli»: dati di gioco (core.js), tabelle e disegni (game.html), traduzioni. Si può rilanciare.
# Novità: due miniboss (castelli 4 e 8, con «semis») e castelli che si giocano solo di notte (3, 7 e 11, con «nights»).
import json
def patch(fn, reps):
    s = open(fn).read()
    for a, b, mark in reps:
        if mark in s: continue
        assert s.count(a) == 1, (fn, a[:90], s.count(a))
        s = s.replace(a, b)
    open(fn, 'w').write(s)

# ---------------- core.js: personaggi, boss, mondo ----------------
patch('core.js', [
 ("    dragotempesta:{side:0,",
  "    cobrabianco:{side:0, cost:270, cd:11, hp:440, dmg:22, rate:1.8, range:130, spd:24, beast:1, ranged:1, splash:25, burn:{t:6, k:.9}, poison:1},   // Mondo 17: lentissimo, ma il suo veleno continua a far male a lungo\n"
  "    dragotempesta:{side:0,", 'cobrabianco:{side:0'),
 ("    jackre:     {side:1,",
  "    mowgli:     {side:1, hp:95,  dmg:12, rate:.9,  range:26,  spd:85,  bounty:45, dodge:.25},                    // Mondo 17: il cucciolo d'uomo, velocissimo, schiva\n"
  "    baloo:      {side:1, hp:330, dmg:16, rate:1.4, range:28,  spd:34,  bounty:70, splash:25},                    // il vecchio orso: resiste tanto, zampate su più cattivi\n"
  "    bagheera:   {side:1, hp:150, dmg:18, rate:.9,  range:26,  spd:95,  bounty:60, charge:{dmg:22, r:40, kb:30}},  // la pantera: corre e salta addosso\n"
  "    hathi:      {side:1, hp:480, dmg:20, rate:1.6, range:30,  spd:28,  bounty:90, splash:30, charge:{dmg:30, r:60, kb:70}},   // l'elefante: carica e travolge\n"
  "    bagheerare: {side:1, hp:300, dmg:22, rate:.9,  range:28,  spd:85,  bounty:80, dodge:.2, charge:{dmg:30, r:50, kb:40}},   // (solo per il miniboss)\n"
  "    hathire:    {side:1, hp:520, dmg:24, rate:1.6, range:32,  spd:28,  bounty:90, splash:40, charge:{dmg:36, r:70, kb:80}},  // (solo per il miniboss)\n"
  "    mowglire:   {side:1, hp:300, dmg:22, rate:1.1, range:34,  spd:46,  bounty:80, splash:40, burn:{t:3, k:.4}},   // (solo per il boss: il Fiore Rosso brucia)\n"
  "    jackre:     {side:1,", 'mowgli:     {side:1'),
 ("    jack_re:          {base:'jackre',",
  "    pantera_nera:     {base:'bagheerare',   name:'Bagheera la Pantera Nera', semi:1, hp:1300, dmg:30, scale:1.4, tint:'#d8c0ff'},\n"
  "    re_elefanti:      {base:'hathire',      name:'Hathi il Re degli Elefanti', semi:1, hp:1450, dmg:32, scale:1.25, tint:'#ffe8c0'},\n"
  "    mowgli_fuoco:     {base:'mowglire',     name:'Mowgli col Fiore Rosso',   boss:1, hp:2800, dmg:44, scale:1.35, tint:'#ff9a40'},\n"
  "    jack_re:          {base:'jackre',", 'pantera_nera:'),
 ("'Torre del vento', 'Il Trono delle Nuvole']}\n  ];",
  "'Torre del vento', 'Il Trono delle Nuvole']},\n"
  "    {name:'Giungla di Mowgli', theme:'giungla', n:12, pool:['mowgli', 'bagheera', 'baloo', 'hathi', 'jack', 'cavnuvole', 'pollicino', 'cavcristallo', 'merlino', 'principe', 'fata', 'renna'], semis:{3:'pantera_nera', 7:'re_elefanti'}, boss:'mowgli_fuoco', nights:[2, 6, 10],\n"
  "     names:['Il branco di Seeonee', 'La Rupe del Consiglio', 'Luna sulla giungla', 'Il ramo di Bagheera', 'Le lezioni di Baloo', 'Il fiume Waingunga', 'Le Tane Fredde', 'La pista degli elefanti', 'Il popolo delle scimmie', 'Il grande fico', 'Notte delle lucciole', 'Il Fiore Rosso']}\n  ];", "theme:'giungla'"),
 ("Array.from({length:15}, (_, i) => [i + 1,", "Array.from({length:16}, (_, i) => [i + 1,", "Array.from({length:16}"),
 ("[20, ['jack', 'arpa', 'gallina', 'cavnuvole']]];", "[20, ['jack', 'arpa', 'gallina', 'cavnuvole']], [24, ['mowgli', 'bagheera', 'baloo', 'hathi']]];", "[24, ['mowgli'"),
 ("const BCOST = {jack:70,", "const BCOST = {mowgli:80, bagheera:110, baloo:130, hathi:170, jack:70,", "BCOST = {mowgli:80"),
 ("bossAt:last ? 70 : 55, semi:isSemi};", "bossAt:last ? 70 : 55, semi:isSemi, night:!!(W.nights && W.nights.includes(c))};", "night:!!(W.nights"),
])

# ---------------- game.html ----------------
BLOCK = r'''/* ================= Mondo 17: Giungla di Mowgli ================= */
Object.assign(SHORT, {cobrabianco:'Cobra Bianco'}); Object.assign(NAMES, {cobrabianco:'Cobra Bianco'});
Object.assign(ROLE, {cobrabianco:'Lentissimo, ma il suo veleno continua a far male a lungo.'});
Object.assign(UNLOCK, {cobrabianco:{w:16, kind:'boss', noEgg:1, txt:'Batti il boss della mappa 17'}});
Object.assign(LINES, {cobrabianco:['Il tesoro è mio!', 'Sssì…']});
Object.assign(RAR, {cobrabianco:3}); VILLAINS.add('cobrabianco');
GOODS.push('mowgli', 'bagheera', 'baloo', 'hathi');
Object.assign(WNAME, {mowgli:'Mowgli', bagheera:'Bagheera', baloo:'Baloo', hathi:'Hathi'});
Object.assign(WTXT, {mowgli:'Il cucciolo d’uomo: velocissimo e schiva i colpi.', bagheera:'La pantera nera: corre e salta addosso ai cattivi.', baloo:'Il vecchio orso: resiste tanto e le sue zampate colpiscono più cattivi.', hathi:'L’elefante: carica e travolge tutto.'});
Object.assign(VOICE, {cobrabianco:.7, mowgli:1.3, bagheera:1, baloo:.8, hathi:.7, mowglire:1.25, bagheerare:.95, hathire:.65});
Object.assign(VALIAS, {cobrabianco:'basilisco', mowgli:'pollicino', mowglire:'pollicino', bagheera:'robinhood', bagheerare:'robinhood', baloo:'nani', hathi:'carrozza', hathire:'carrozza'});
THEMES.giungla = {sky:'#78c0cc', amt:.42, hill1:'#3a7a3a', hill2:'#2a6a34', tree:'#2a7a34', tt:'palm', g1:'#a8c060', g2:'#3a7a34', stone:'#a8a088', roof:['#c8603a', '#e8b830'], fx:'sparkle', card:['#1a4a2a', '#8ad070']};
OBST.giungla = ['waingunga', 'rovine', 'fico']; ROADC.giungla = '#b89a60';
OBST_BY_NAME.unshift([/waingunga/i, 'waingunga'], [/tane fredde|scimmie/i, 'rovine'], [/fico|rupe|lucciole/i, 'fico']);
MUS_FILE.w17 = 'w13'; MUS_BOSS.w17 = 'w13b';                               // la giungla usa la musica del Deserto di Aladino (e la sua musica del boss)
{ const NAT = {cobrabianco:125, mowgli:106, mowglire:121, baloo:123, bagheera:64, bagheerare:64, hathi:102, hathire:102};   // altezza vera dei disegni nuovi
  Object.assign(HEIGHT, {cobrabianco:86, mowgli:84, mowglire:92, baloo:100, bagheera:56, bagheerare:58, hathi:100, hathire:102});
  Object.assign(SC, {cobrabianco:.9, mowgli:.86, mowglire:.88, baloo:.9, bagheera:.9, bagheerare:.92, hathi:.92, hathire:.92});
  for (const k of Object.keys(NAT)) DRAW[k] = o => { const s2 = HEIGHT[k] / NAT[k]; ctx.save(); ctx.scale(s2, s2); NG.draw(k, ctx, o || {}); ctx.restore(); }; }
GSETS.mondo17 = ['cobrabianco', 'mowgli', 'bagheera', 'baloo', 'hathi', 'bagheerare', 'hathire', 'mowglire'];
'''
patch('game.html', [
 ("new ResizeObserver(resize).observe($('stage'));", BLOCK + "new ResizeObserver(resize).observe($('stage'));", 'Mondo 17: Giungla di Mowgli ====='),
 ("  if (s.lv && s.lv.world === 7) {",                                         # castelli notturni: si gioca tutta la battaglia di notte
  "  if (s.lv && s.lv.night) { lightP = 1; return 1; }                       // castello notturno: si combatte sempre di notte\n  if (s.lv && s.lv.world === 7) {", 'if (s.lv && s.lv.night)'),
 ("    b.className = 'node' + (bs ? ' boss' : lv.semi ? ' semi' : '') + (open ? '' : ' lock')",
  "    b.className = 'node' + (bs ? ' boss' : lv.semi ? ' semi' : '') + (lv.night ? ' night' : '') + (open ? '' : ' lock')", "(lv.night ? ' night' : '')"),
 ("    b.innerHTML = `<span class=\"disc\">${icon}</span>",
  "    b.innerHTML = `<span class=\"disc\">${icon}${lv.night ? '<svg class=\"moon\" viewBox=\"0 0 24 24\"><path d=\"M15 3a9 9 0 1 0 6 15A8 8 0 0 1 15 3Z\" fill=\"#fff2a8\" stroke=\"#1c1a24\" stroke-width=\"1.6\"/></svg>' : ''}</span>", 'class=\\"moon\\"'),
 ("  else lightP += (battleLight() - lightP) * Math.min(1, rdt * .7);",
  "  else { const bl = battleLight(); lightP += (bl - lightP) * Math.min(1, rdt * .7); }   // prima si chiede la luce (un castello notturno può mettere subito la notte)", 'const bl = battleLight()'),
 (".node.semi .disc{", ".node.night .disc{position:relative;box-shadow:0 0 0 3px #3a4a9a,0 4px 0 #000}.node .disc svg.moon{position:absolute;top:-10px;right:-10px;width:26px;height:26px}\n.node.semi .disc{", '.node.night .disc'),
 ("      } else if (p.kind === 'dragotempesta') {",
  "      } else if (p.kind === 'cobrabianco') {                                      // lo sputo di veleno del Cobra Bianco\n"
  "        const r = 5 * CS * .8; ctx.globalCompositeOperation = 'lighter'; glow(ctx, x, y, 22 * CS * .8, '120,255,120', .8); ctx.globalCompositeOperation = 'source-over';\n"
  "        ctx.fillStyle = '#8aff6a'; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill(); ctx.fillStyle = '#d8ffc8'; ctx.beginPath(); ctx.arc(x - r * .3, y - r * .3, r * .35, 0, 7); ctx.fill();\n"
  "        for (let i = 1; i < 3; i++) { ctx.globalAlpha = .5 / i; ctx.fillStyle = '#8aff6a'; ctx.beginPath(); ctx.arc(x - i * r * 1.4, y + i * r * .3, r * (1 - i * .3), 0, 7); ctx.fill(); } ctx.globalAlpha = 1;\n"
  "      } else if (p.kind === 'dragotempesta') {", "p.kind === 'cobrabianco'"),
])

# ---------------- traduzioni ----------------
TR = {
 'Giungla di Mowgli': ('Mowgli’s Jungle', 'Selva de Mowgli'), 'Cobra Bianco': ('White Cobra', 'Cobra Blanca'),
 'Lentissimo, ma il suo veleno continua a far male a lungo.': ('Very slow, but its venom keeps hurting for a long time.', 'Lentísima, pero su veneno sigue haciendo daño mucho tiempo.'),
 'Batti il boss della mappa 17': ('Beat the boss of map 17', 'Vence al jefe del mapa 17'),
 'Il tesoro è mio!': ('The treasure is mine!', '¡El tesoro es mío!'), 'Sssì…': ('Sssyes…', 'Sssí…'),
 'Mowgli': ('Mowgli', 'Mowgli'), 'Bagheera': ('Bagheera', 'Bagheera'), 'Baloo': ('Baloo', 'Baloo'), 'Hathi': ('Hathi', 'Hathi'),
 'Il cucciolo d’uomo: velocissimo e schiva i colpi.': ('The man-cub: super fast and dodges hits.', 'El cachorro humano: rapidísimo y esquiva los golpes.'),
 'La pantera nera: corre e salta addosso ai cattivi.': ('The black panther: runs and pounces on the villains.', 'La pantera negra: corre y salta sobre los villanos.'),
 'Il vecchio orso: resiste tanto e le sue zampate colpiscono più cattivi.': ('The old bear: very tough, his swipes hit several villains.', 'El viejo oso: muy resistente, sus zarpazos golpean a varios villanos.'),
 'L’elefante: carica e travolge tutto.': ('The elephant: charges and tramples everything.', 'El elefante: carga y arrolla todo.'),
 'Bagheera la Pantera Nera': ('Bagheera the Black Panther', 'Bagheera la Pantera Negra'), 'Hathi il Re degli Elefanti': ('Hathi, King of the Elephants', 'Hathi, Rey de los Elefantes'),
 'Mowgli col Fiore Rosso': ('Mowgli with the Red Flower', 'Mowgli con la Flor Roja'),
 'Il branco di Seeonee': ('The Seeonee Pack', 'La manada de Seeonee'), 'La Rupe del Consiglio': ('Council Rock', 'La Roca del Consejo'), 'Luna sulla giungla': ('Moon over the Jungle', 'Luna sobre la selva'),
 'Il ramo di Bagheera': ('Bagheera’s Branch', 'La rama de Bagheera'), 'Le lezioni di Baloo': ('Baloo’s Lessons', 'Las lecciones de Baloo'), 'Il fiume Waingunga': ('The Waingunga River', 'El río Waingunga'),
 'Le Tane Fredde': ('The Cold Lairs', 'Las Guaridas Frías'), 'La pista degli elefanti': ('The Elephant Trail', 'La senda de los elefantes'), 'Il popolo delle scimmie': ('The Monkey People', 'El pueblo de los monos'),
 'Il grande fico': ('The Great Fig Tree', 'La gran higuera'), 'Notte delle lucciole': ('Night of the Fireflies', 'Noche de las luciérnagas'), 'Il Fiore Rosso': ('The Red Flower', 'La Flor Roja'),
}
for i, l in enumerate(['en', 'es']):
    d = json.load(open(f'i18n/{l}.json'))
    for k, v in TR.items(): d[k] = v[i]
    open(f'i18n/{l}.json', 'w').write(json.dumps(d, ensure_ascii=False, separators=(',', ':')))
print('ok')
