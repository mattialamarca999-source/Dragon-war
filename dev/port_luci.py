# Luci nuove (26 nov 2026): studio della luce a strati per la grafica nuova (luci.js) + ombre che girano col sole + scelta nelle impostazioni. Si può rilanciare.
def patch(fn, reps):
    s = open(fn).read()
    for a, b, mark in reps:
        if mark in s: continue
        assert s.count(a) == 1, (fn, a[:90], s.count(a))
        s = s.replace(a, b)
    open(fn, 'w').write(s)

luci = open('luci.js').read()
patch('game.html', [
 ("function lights() {\n", luci + "function lights() {\n  if (NWON) { nwLights(); return; }                                          // grafica nuova: le luci a strati\n", 'if (NWON) { nwLights(); return; }'),
 ("const rdt = Math.min(.1, (now - last) / 1000); last = now; time += rdt;", "const rdt = Math.min(.1, (now - last) / 1000); last = now; time += rdt; lqTick(rdt);", 'lqTick(rdt);'),
 # ombre: corte di giorno, lunghe e piene al tramonto, deboli di notte; girano con la luce
 ("    const sk = lerp(.15, -1.4, L.N), sy = lerp(.32, -.22, L.N);\n    ctx.save(); ctx.translate(u.x, dy); ctx.globalAlpha = 1 - L.S * .6;",
  "    const sk = lerp(lerp(.3, 1.5, L.S), -1.4, L.N), sy = lerp(lerp(.32, .2, L.S), -.22, L.N);   // le ombre girano col sole: corte a mezzogiorno, lunghe al tramonto\n    ctx.save(); ctx.translate(u.x, dy); ctx.globalAlpha = lerp(.9, .5, L.N);", 'le ombre girano col sole'),
 # impostazioni: Luci
 ('        <div class="setRow lang"><span>🌐 Lingua</span>',
  '        <div class="setRow lang"><span>✨ Luci</span><div class="langBtns q4" id="setLuci"><button class="upBtn" data-q="auto">Auto</button><button class="upBtn" data-q="3">Alte</button><button class="upBtn" data-q="2">Medie</button><button class="upBtn" data-q="1">Basse</button></div></div>\n'
  '        <div class="setRow lang"><span>🌐 Lingua</span>', 'id="setLuci"'),
 (".langBtns .upBtn[aria-pressed=\"true\"]{background:var(--gold2)}", ".langBtns .upBtn[aria-pressed=\"true\"]{background:var(--gold2)}\n.langBtns.q4{grid-template-columns:repeat(4,1fr)}", '.langBtns.q4'),
 ("  $('setVib').textContent = S.vib ? 'Sì' : 'No';", "  document.querySelectorAll('#setLuci button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.q === String(LQ_SET))));\n  $('setVib').textContent = S.vib ? 'Sì' : 'No';", "#setLuci button').forEach(b => b.setAttribute"),
 ("  $('setVib').onclick = () => {", "  document.querySelectorAll('#setLuci button').forEach(b => b.onclick = () => { lqSet(b.dataset.q); showSettings(); });\n  $('setVib').onclick = () => {", "b.onclick = () => { lqSet(b.dataset.q)"),
])
import json
for fn, tr in [('i18n/en.json', {'✨ Luci': '✨ Lights', 'Alte': 'High', 'Medie': 'Medium', 'Basse': 'Low'}), ('i18n/es.json', {'✨ Luci': '✨ Luces', 'Auto': 'Auto', 'Alte': 'Altas', 'Medie': 'Medias', 'Basse': 'Bajas'})]:
    d = json.load(open(fn)); ch = False
    for k, v in tr.items():
        if k not in d: d[k] = v; ch = True
    if ch: open(fn, 'w').write(json.dumps(d, ensure_ascii=False, separators=(',', ':')))
print('ok')
