# skin nuove nel gioco: 11 aspetti in più (feste a tempo, mestieri, mostri) + traduzioni. Si può rilanciare.
import json
g = open('game.html').read()
def rep(a, b, mark):
    global g
    if mark in g: return
    assert g.count(a) == 1, a[:80]
    g = g.replace(a, b)

NEW = ("carnevale:{k:'goblin', name:'Goblin di Carnevale', from:'shop', ru:100, fest:[1, 25, 3, 10]}, sanvalentino:{k:'strega', name:'Strega di San Valentino', from:'shop', ru:100, fest:[2, 5, 2, 21]},\n"
       "  pasqua:{k:'lupo', name:'Lupo Coniglio di Pasqua', from:'shop', ru:100, fest:[3, 15, 4, 30]}, capodanno:{k:'orco', name:'Orco di Capodanno', from:'shop', ru:100, fest:[12, 20, 1, 10]},\n"
       "  cuoco:{k:'orco', name:'Orco Cuoco', from:'shop', ru:90}, pompiere:{k:'goblin', name:'Goblin Pompiere', from:'shop', ru:90}, astronauta:{k:'strega', name:'Strega Astronauta', from:'shop', ru:120}, dj:{k:'lupo', name:'Lupo DJ Rockstar', from:'shop', ru:120},\n"
       "  zombi:{k:'goblin', name:'Goblin Zombi', from:'shop', ru:90}, mummia:{k:'orco', name:'Orco Mummia', from:'shop', ru:110}, vampira:{k:'strega', name:'Strega Vampira', from:'shop', ru:110}};\n"
       "function festOn(L) {                                                       // le skin delle feste si comprano solo nel loro periodo (mese, giorno → mese, giorno)\n"
       "  if (!L.fest) return true; const n = new Date(), v = (n.getMonth() + 1) * 100 + n.getDate(), [m1, d1, m2, d2] = L.fest, a = m1 * 100 + d1, b = m2 * 100 + d2;\n"
       "  return a <= b ? v >= a && v <= b : v >= a || v <= b;\n}")
rep("stellata:{k:'strega', name:'Strega Stellata', from:'pass', lv:25}};", "stellata:{k:'strega', name:'Strega Stellata', from:'pass', lv:25},\n  " + NEW, "function festOn(L)")
rep("for (const [id, L] of Object.entries(LOOKS).filter(([, L]) => L.from === 'shop')) { const own = save.looks.includes(id);",
    "for (const [id, L] of Object.entries(LOOKS).filter(([id, L]) => L.from === 'shop' && (festOn(L) || save.looks.includes(id)))) { const own = save.looks.includes(id);", "festOn(L) || save.looks.includes(id)")
rep("own ? 'Ce l’hai! Lo scegli nella Fucina.' : L.k === 'drago' ? 'Il tuo drago cambia colore.' : `Aspetto per ${SHORT[L.k]}.`",
    "own ? 'Ce l’hai! Lo scegli nella Fucina.' : L.k === 'drago' ? 'Il tuo drago cambia colore.' : L.fest ? 'Solo in questo periodo!' : `Aspetto per ${SHORT[L.k]}.`", "L.fest ? 'Solo in questo periodo!'")
# i disegni nuovi conoscono queste skin: niente più disegno vecchio per loro
rep("DRAW[k] = o => { if (o && o.look && NG_SKIN.has(o.look)) return old(o);", "DRAW[k] = o => { if (o && o.look && NG_SKIN.has(o.look) && !NG.skin(o.look)) return old(o);", "!NG.skin(o.look)) return old(o);")
open('game.html', 'w').write(g)

TR = {'Goblin di Carnevale': ('Carnival Goblin', 'Goblin de Carnaval'), 'Strega di San Valentino': ('Valentine Witch', 'Bruja de San Valentín'),
      'Lupo Coniglio di Pasqua': ('Easter Bunny Wolf', 'Lobo Conejo de Pascua'), 'Orco di Capodanno': ('New Year Ogre', 'Ogro de Año Nuevo'),
      'Orco Cuoco': ('Chef Ogre', 'Ogro Cocinero'), 'Goblin Pompiere': ('Firefighter Goblin', 'Goblin Bombero'), 'Strega Astronauta': ('Astronaut Witch', 'Bruja Astronauta'),
      'Lupo DJ Rockstar': ('DJ Rockstar Wolf', 'Lobo DJ Rockstar'), 'Goblin Zombi': ('Zombie Goblin', 'Goblin Zombi'), 'Orco Mummia': ('Mummy Ogre', 'Ogro Momia'),
      'Strega Vampira': ('Vampire Witch', 'Bruja Vampira'), 'Solo in questo periodo!': ('Limited time only!', '¡Solo por tiempo limitado!')}
for i, l in enumerate(['en', 'es']):
    d = json.load(open(f'i18n/{l}.json'))
    for k, v in TR.items(): d[k] = v[i]
    open(f'i18n/{l}.json', 'w').write(json.dumps(d, ensure_ascii=False, separators=(',', ':')))
print('ok')
