# Mondo 16 «Regno delle Nuvole»: dati di gioco (core.js), tabelle e disegni (game.html), traduzioni. Si può rilanciare.
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
 ("    trollspecchio:{side:0, cost:230, cd:9, hp:200, dmg:16, rate:1.3, range:140, spd:42, ranged:1, fly:1, bounce:{n:2, k:.6, r:110}},\n",
  "    trollspecchio:{side:0, cost:230, cd:9, hp:200, dmg:16, rate:1.3, range:140, spd:42, ranged:1, fly:1, bounce:{n:2, k:.6, r:110}},\n"
  "    dragotempesta:{side:0, cost:260, cd:10, hp:300, dmg:20, rate:1.5, range:150, spd:34, ranged:1, fly:1, beast:1, bounce:{n:3, k:.55, r:120}},   // Mondo 16: vola e sputa fulmini che saltano su altri tre buoni\n", 'dragotempesta:{side:0'),
 ("    pollicino:  {side:1, hp:60,  dmg:8,  rate:1,   range:120, spd:110, bounty:25, ranged:1}\n  };",
  "    pollicino:  {side:1, hp:60,  dmg:8,  rate:1,   range:120, spd:110, bounty:25, ranged:1},\n"
  "    jack:       {side:1, hp:85,  dmg:10, rate:1.1, range:120, spd:60,  bounty:40, ranged:1, dodge:.15},          // Mondo 16: lancia i fagioli magici e schiva\n"
  "    arpa:       {side:1, hp:60,  dmg:11, rate:1.5, range:150, spd:34,  bounty:45, ranged:1, splash:25},          // suona: le note colpiscono da lontano\n"
  "    gallina:    {side:1, hp:110, dmg:13, rate:1.6, range:110, spd:40,  bounty:50, ranged:1, splash:30},          // lancia uova d'oro\n"
  "    cavnuvole:  {side:1, hp:250, dmg:17, rate:1.3, range:28,  spd:46,  bounty:70, charge:{dmg:24, r:50, kb:50}},  // carica con la lancia dalla nuvola\n"
  "    arpaincantata:{side:1, hp:90, dmg:14, rate:1.5, range:160, spd:30, bounty:60, ranged:1, splash:35},         // (solo per il semi-boss)\n"
  "    jackre:     {side:1, hp:300, dmg:22, rate:1.2, range:30,  spd:40,  bounty:80, splash:40}                     // (solo per il boss)\n  };", 'jack:       {side:1'),
 ("    re_specchi:       {base:'re',           name:'Re degli Specchi',         boss:1, hp:2400, dmg:40, scale:1.3, tint:'#cfe8ff'}\n  };",
  "    re_specchi:       {base:'re',           name:'Re degli Specchi',         boss:1, hp:2400, dmg:40, scale:1.3, tint:'#cfe8ff'},\n"
  "    arpa_inc:         {base:'arpaincantata', name:'Arpa Incantata',          semi:1, hp:1250, dmg:30, scale:1.4, tint:'#e8d0ff'},\n"
  "    jack_re:          {base:'jackre',       name:'Jack il Re delle Nuvole',  boss:1, hp:2600, dmg:42, scale:1.3, tint:'#fff2b8'}\n  };", 'arpa_inc:'),
 ("'Torre del riflesso', 'Il Trono del Drago']}\n  ];",
  "'Torre del riflesso', 'Il Trono del Drago']},\n"
  "    {name:'Regno delle Nuvole', theme:'nuvole', n:12, pool:['jack', 'arpa', 'gallina', 'cavnuvole', 'pollicino', 'cavcristallo', 'gemelli', 'merlino', 'principe', 'fata', 'renna', 'carrozza'], semi:'arpa_inc', boss:'jack_re',\n"
  "     names:['Il fagiolo magico', 'Prima nuvola', 'Scala di foglie', 'Ponte d’arcobaleno', 'Isola volante', 'Sala dell’Arpa', 'Nido d’oro', 'Buco tra le nuvole', 'Cucina del Gigante', 'Forziere del Gigante', 'Torre del vento', 'Il Trono delle Nuvole']}\n  ];", "theme:'nuvole'"),
 ("Array.from({length:14}, (_, i) => [i + 1,", "Array.from({length:15}, (_, i) => [i + 1,", "Array.from({length:15}"),
 ("'cavcristallo', 'gemelli']]];", "'cavcristallo', 'gemelli']], [20, ['jack', 'arpa', 'gallina', 'cavnuvole']]];", "[20, ['jack', 'arpa', 'gallina', 'cavnuvole']]"),
 ("const BCOST = {", "const BCOST = {jack:70, arpa:90, gallina:90, cavnuvole:150, ", "const BCOST = {jack:70"),
])

# ---------------- game.html ----------------
BLOCK = r'''/* ================= Mondo 16: Regno delle Nuvole ================= */
Object.assign(SHORT, {dragotempesta:'Drago di Tempesta'}); Object.assign(NAMES, {dragotempesta:'Drago di Tempesta'});
Object.assign(ROLE, {dragotempesta:'Vola e sputa fulmini che saltano su altri tre buoni.'});
Object.assign(UNLOCK, {dragotempesta:{w:15, kind:'boss', noEgg:1, txt:'Batti il boss della mappa 16'}});
Object.assign(LINES, {dragotempesta:['Tuono!', 'Arriva la tempesta!']});
Object.assign(RAR, {dragotempesta:3}); VILLAINS.add('dragotempesta');
GOODS.push('jack', 'arpa', 'gallina', 'cavnuvole');
Object.assign(WNAME, {jack:'Jack del fagiolo', arpa:'Arpa d’Oro', gallina:'Gallina dalle Uova d’Oro', cavnuvole:'Cavaliere delle Nuvole'});
Object.assign(WTXT, {jack:'Lancia fagioli magici e schiva i colpi.', arpa:'Suona: le note colpiscono da lontano.', gallina:'Lancia uova d’oro che fanno male a tanti.', cavnuvole:'Carica con la lancia dalla sua nuvoletta.'});
Object.assign(VOICE, {dragotempesta:.75, jack:1.2, arpa:1.25, gallina:1.4, cavnuvole:1, jackre:1.05, arpaincantata:1.15});
Object.assign(VALIAS, {dragotempesta:'grifone', jack:'robinhood', arpa:'fata', gallina:'cappuccetto', cavnuvole:'carrozza', jackre:'robinhood', arpaincantata:'fata'});
THEMES.nuvole = {sky:'#8ac0f0', amt:.4, hill1:'#e8f0ff', hill2:'#c8d4f0', tree:'#5ab84a', tt:'goldtree', g1:'#f4f8ff', g2:'#c8d4f0', stone:'#ffffff', roof:['#3a6ad8', '#e8b83a'], fx:'sparkle', card:['#2a4a9a', '#bfe0ff']};
OBST.nuvole = ['fagiolo', 'voragine', 'nido']; ROADC.nuvole = '#e8eef8';
OBST_BY_NAME.unshift([/fagiolo|scala di foglie/i, 'fagiolo'], [/nido/i, 'nido'], [/buco tra le nuvole|arcobaleno/i, 'voragine']);
MUS_FILE.w16 = 'w12';                                                     // il Regno delle Nuvole usa la musica dell'Isola che non c'è
{ const NAT = {dragotempesta:122, jack:113, jackre:121, arpa:98, arpaincantata:106, gallina:74, cavnuvole:136};   // altezza vera dei disegni nuovi
  Object.assign(HEIGHT, {dragotempesta:112, jack:88, jackre:92, arpa:80, arpaincantata:84, gallina:62, cavnuvole:104});
  Object.assign(SC, {dragotempesta:.92, jack:.84, jackre:.86, arpa:.86, arpaincantata:.9, gallina:.88, cavnuvole:.86});
  for (const k of Object.keys(NAT)) DRAW[k] = o => { const s2 = HEIGHT[k] / NAT[k]; ctx.save(); ctx.scale(s2, s2); NG.draw(k, ctx, o || {}); ctx.restore(); }; }
GSETS.mondo16 = ['dragotempesta', 'jack', 'arpa', 'gallina', 'cavnuvole', 'arpaincantata', 'jackre'];
'''
patch('game.html', [
 ("new ResizeObserver(resize).observe($('stage'));", BLOCK + "new ResizeObserver(resize).observe($('stage'));", 'Mondo 16: Regno delle Nuvole ====='),
 ("world === DW.WORLDS.length - 1 && level === W0.n - 1 && draculaReady", "world === 14 && level === W0.n - 1 && draculaReady", "world === 14 && level === W0.n - 1"),   # il Conte resta al Trono del Drago
 ("curWorld === DW.WORLDS.length - 1 && curLevel === W.n - 1", "curWorld === 14 && curLevel === W.n - 1", "curWorld === 14 && curLevel"),             # il finale della storia resta al Trono del Drago
 ("      } else if (p.kind === 'hanselgretel' || p.kind === 'pollicino' || p.kind === 'biancaneve') {",
  "      } else if (p.kind === 'dragotempesta') {                                   // il fulmine del Drago di Tempesta\n"
  "        const z = 10 * CS * .8; ctx.globalCompositeOperation = 'lighter'; glow(ctx, x, y, 28 * CS * .8, '255,235,140', .9); ctx.globalCompositeOperation = 'source-over';\n"
  "        ctx.strokeStyle = '#fff7a0'; ctx.lineWidth = 3 * CS * .8; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(x - z, y - z); ctx.lineTo(x, y - z * .1); ctx.lineTo(x - z * .4, y + z * .2); ctx.lineTo(x + z, y + z); ctx.stroke();\n"
  "      } else if (p.kind === 'jack' || p.kind === 'gallina' || p.kind === 'arpa' || p.kind === 'arpa_inc' || p.kind === 'arpaincantata') {   // fagiolo magico, uovo d'oro, nota dell'arpa\n"
  "        const r = 4.6 * CS * .8, gc = {jack:'140,255,120', gallina:'255,215,90', arpa:'255,230,140'}[p.kind] || '200,140,255';\n"
  "        ctx.globalCompositeOperation = 'lighter'; glow(ctx, x, y, 20 * CS * .8, gc, .75); ctx.globalCompositeOperation = 'source-over'; ctx.translate(x, y);\n"
  "        if (p.kind === 'jack') { ctx.rotate(f * 10); ctx.fillStyle = '#5ac84a'; ctx.beginPath(); ctx.ellipse(0, 0, r, r * .7, 0, 0, 7); ctx.fill(); }\n"
  "        else if (p.kind === 'gallina') { ctx.rotate(f * 6); ctx.fillStyle = '#f2c43a'; ctx.beginPath(); ctx.ellipse(0, 0, r * 1.1, r * 1.4, 0, 0, 7); ctx.fill(); ctx.fillStyle = '#fff6c8'; ctx.beginPath(); ctx.arc(-r * .35, -r * .5, r * .35, 0, 7); ctx.fill(); }\n"
  "        else { ctx.fillStyle = p.kind === 'arpa' ? '#ffd35a' : '#c87aff'; ctx.beginPath(); ctx.ellipse(-r * .4, r * .4, r * .8, r * .6, -.4, 0, 7); ctx.fill(); ctx.fillRect(r * .2, -r * 1.8, r * .3, r * 2.2); }\n"
  "      } else if (p.kind === 'hanselgretel' || p.kind === 'pollicino' || p.kind === 'biancaneve') {", "p.kind === 'dragotempesta'"),
])

# ---------------- traduzioni ----------------
TR = {
 'Regno delle Nuvole': ('Cloud Kingdom', 'Reino de las Nubes'), 'Drago di Tempesta': ('Storm Dragon', 'Dragón de Tormenta'),
 'Vola e sputa fulmini che saltano su altri tre buoni.': ('Flies and spits lightning that jumps to three more good guys.', 'Vuela y escupe rayos que saltan a otros tres buenos.'),
 'Batti il boss della mappa 16': ('Beat the boss of map 16', 'Vence al jefe del mapa 16'),
 'Tuono!': ('Thunder!', '¡Trueno!'), 'Arriva la tempesta!': ('The storm is coming!', '¡Llega la tormenta!'),
 'Jack del fagiolo': ('Jack of the Beanstalk', 'Jack de las habichuelas'), 'Arpa d’Oro': ('Golden Harp', 'Arpa de Oro'), 'Gallina dalle Uova d’Oro': ('Golden Goose', 'Gallina de los Huevos de Oro'),
 'Cavaliere delle Nuvole': ('Cloud Knight', 'Caballero de las Nubes'), 'Arpa Incantata': ('Enchanted Harp', 'Arpa Encantada'), 'Jack il Re delle Nuvole': ('Jack, King of the Clouds', 'Jack, Rey de las Nubes'),
 'Lancia fagioli magici e schiva i colpi.': ('Throws magic beans and dodges hits.', 'Lanza habichuelas mágicas y esquiva los golpes.'),
 'Suona: le note colpiscono da lontano.': ('Plays music: the notes hit from afar.', 'Toca música: las notas golpean de lejos.'),
 'Lancia uova d’oro che fanno male a tanti.': ('Throws golden eggs that hurt many at once.', 'Lanza huevos de oro que dañan a muchos.'),
 'Carica con la lancia dalla sua nuvoletta.': ('Charges with his lance from his little cloud.', 'Carga con la lanza desde su nubecita.'),
 'Il fagiolo magico': ('The Magic Bean', 'La habichuela mágica'), 'Prima nuvola': ('First Cloud', 'Primera nube'), 'Scala di foglie': ('Ladder of Leaves', 'Escalera de hojas'),
 'Ponte d’arcobaleno': ('Rainbow Bridge', 'Puente del arcoíris'), 'Isola volante': ('Floating Island', 'Isla flotante'), 'Sala dell’Arpa': ('Hall of the Harp', 'Sala del Arpa'),
 'Nido d’oro': ('Golden Nest', 'Nido de oro'), 'Buco tra le nuvole': ('Hole in the Clouds', 'Agujero entre las nubes'), 'Cucina del Gigante': ('Giant’s Kitchen', 'Cocina del Gigante'),
 'Forziere del Gigante': ('Giant’s Chest', 'Cofre del Gigante'), 'Torre del vento': ('Tower of the Wind', 'Torre del viento'), 'Il Trono delle Nuvole': ('The Cloud Throne', 'El Trono de las Nubes'),
}
for i, l in enumerate(['en', 'es']):
    d = json.load(open(f'i18n/{l}.json'))
    for k, v in TR.items(): d[k] = v[i]
    open(f'i18n/{l}.json', 'w').write(json.dumps(d, ensure_ascii=False, separators=(',', ':')))
print('ok')
