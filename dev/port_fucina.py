# Fucina e squadra (27 nov 2026): ordine «Più potenziati» / «Meno potenziati» (livello, poi stelle, poi costo) e la scelta resta ricordata. Si può rilanciare.
def patch(fn, reps):
    s = open(fn).read()
    for a, b, mark in reps:
        if mark in s: continue
        assert s.count(a) == 1, (fn, a[:90], s.count(a))
        s = s.replace(a, b)
    open(fn, 'w').write(s)
OPT_OLD = '<option value="lv">Più potenziati</option></select>'
OPT_NEW = '<option value="lv">Più potenziati</option><option value="lv-">Meno potenziati</option></select>'
s = open('game.html').read()
if 'value="lv-"' not in s: s = s.replace(OPT_OLD, OPT_NEW); open('game.html', 'w').write(s)
patch('game.html', [
 ("  else if (fgF.sort === 'lv') ks = ks.slice().sort((a, b) => lvOf(b) - lvOf(a));",
  "  else if (fgF.sort === 'lv' || fgF.sort === 'lv-') { const sg = fgF.sort === 'lv' ? 1 : -1, own = kk => isUnlocked(kk) ? 1 : 0;   // prima il livello, poi le stelle, poi il costo; quelli da sbloccare sempre in fondo\n"
  "    ks = ks.slice().sort((a, b) => (own(b) - own(a)) || sg * (lvOf(b) - lvOf(a)) || sg * (evoOf(b) - evoOf(a)) || sg * (DW.costOf(b) - DW.costOf(a))); }", "const sg = fgF.sort === 'lv' ? 1 : -1"),
 ("$('fgSort').onchange = () => { fgF.sort = $('fgSort').value; renderForge(true); };",
  "$('fgSort').onchange = () => { fgF.sort = $('fgSort').value; try { localStorage.setItem('dw_fgsort', fgF.sort); } catch (e) {} renderForge(true); };\n"
  "try { const v = localStorage.getItem('dw_fgsort'); if (v && [...$('fgSort').options].some(o => o.value === v)) { fgF.sort = v; $('fgSort').value = v; } } catch (e) {}   // l'ordine scelto nella Fucina resta", "dw_fgsort"),
 ("$('sqSort').onchange = () => { sqF.sort = $('sqSort').value; sqFilter(); };",
  "$('sqSort').onchange = () => { sqF.sort = $('sqSort').value; try { localStorage.setItem('dw_sqsort', sqF.sort); } catch (e) {} sqFilter(); };\n"
  "try { const v = localStorage.getItem('dw_sqsort'); if (v && [...$('sqSort').options].some(o => o.value === v)) { sqF.sort = v; $('sqSort').value = v; } } catch (e) {}", "dw_sqsort"),
])
import json
for fn, v in [('i18n/en.json', 'Least upgraded'), ('i18n/es.json', 'Menos mejorados')]:
    d = json.load(open(fn))
    if 'Meno potenziati' not in d: d['Meno potenziati'] = v; open(fn, 'w').write(json.dumps(d, ensure_ascii=False, separators=(',', ':')))
print('ok')
