# Capricci del Drago per i mondi 11-18 (27 nov 2026) + regole nuove: sempre notte, fiammata veloce. Si può rilanciare.
def patch(fn, reps):
    s = open(fn).read()
    for a, b, mark in reps:
        if mark in s: continue
        assert s.count(a) == 1, (fn, a[:90], s.count(a))
        s = s.replace(a, b)
    open(fn, 'w').write(s)

NEW = """,
    {name:'Tutti in volo',                 txt:'Bimbi Sperduti e fata, tutti insieme. Nessuno li ha invitati.', w:10, c:3, rule:{extra:[['capo_bimbi', 25], ['trilli', 70]]}, prize:'sirena'},
    {name:'Il tè del Cappellaio',          txt:'Al tè matto la squadra la sceglie la teiera.',                 w:11, c:2, rule:{catMul:1.5}, random:6, prize:'bandersnatch'},
    {name:'Le Mille e una Notte',          txt:'Qui è sempre notte, e i guardiani non dormono.',               w:12, c:2, rule:{night:1, extra:[['tappeto_volante', 30], ['capo_guardie', 75]]}, prize:'mangiafuoco'},
    {name:'Carte congelate',               txt:'Il freddo rallenta la Cattiveria. Ma il castello è di ghiaccio sottile.', w:13, c:2, rule:{catMul:.6, castleMul:.6}, prize:'yeti'},
    {name:'In coppia allo specchio',       txt:'Due cattivi soli, uno e il suo riflesso.',                     w:14, c:3, rule:{catMul:1.3, castleMul:.8}, pick:2, prize:'trollspecchio'},
    {name:'Drago al peperoncino',          txt:'Il drago ha mangiato piccante: fiammata a raffica.',           w:15, c:4, rule:{fireFast:.33, castleMul:3}, prize:'grifone'},
    {name:'Il Fiore Rosso è vietato',      txt:'Nella giungla il fuoco non si usa. E la notte è lunga.',       w:16, c:4, rule:{noFire:1, night:1}, prize:'sherekhan'},
    {name:'Arrivano gli amici di Momotaro', txt:'Marea, perle e due ospiti pelosi. Buona fortuna.',            w:17, c:4, rule:{extra:[['cane_momo', 30], ['scimmia_momo', 80]]}, prize:'kraken'}
  ];
  CAPRICCI.forEach((c, i) => { c.fr = 10; c.gold = 300 + 100 * i; });"""
patch('core.js', [
 ("prize:'gigante'}\n  ];\n  CAPRICCI.forEach((c, i) => { c.fr = 10; c.gold = 300 + 100 * i; });", "prize:'gigante'}" + NEW, "name:'Tutti in volo'"),
 ("    if (r.castleMul) { s.castle.max = Math.round(s.castle.max * r.castleMul); s.castle.hp = s.castle.max; }\n    return s;",
  "    if (r.castleMul) { s.castle.max = Math.round(s.castle.max * r.castleMul); s.castle.hp = s.castle.max; }\n"
  "    if (r.night) s.lv = Object.assign({}, s.lv, {night:true});             // Capriccio: sempre notte\n"
  "    if (r.fireFast && isFinite(s.fire.charge)) s.fire.charge *= r.fireFast;   // Capriccio: fiammata a raffica\n    return s;", "Capriccio: sempre notte"),
])
print('ok')
