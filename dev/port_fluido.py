# Fluidità (27 nov 2026): niente salti di luce o di nitidezza mentre si gioca, immagini dei personaggi preparate senza scatti, cielo nascosto non più disegnato. Si può rilanciare.
def patch(fn, reps):
    s = open(fn).read()
    for a, b, mark in reps:
        if mark in s: continue
        assert s.count(a) == 1, (fn, a[:90], s.count(a))
        s = s.replace(a, b)
    open(fn, 'w').write(s)

patch('game.html', [
 # 1) qualità luci e risoluzione: si misurano sempre, ma si cambiano solo quando non si sta combattendo (menu, conto alla rovescia, pausa, fine):
 #    prima cambiavano a metà battaglia, appena c'era uno scatto (per esempio a un tocco) → luci, lucciole e nitidezza saltavano
 ("const LQ_FT = [];",
  "const LQ_FT = []; let LQ_NEXT = null;\n"
  "const LIVE = () => typeof running !== 'undefined' && running && !paused && !ended && !inMenu && countT <= 0;   // si sta combattendo: niente cambi visibili",
  'let LQ_NEXT = null;'),
 ("  if (med > 1 / 42 && LQ > 1) LQ--; else if (med < 1 / 57 && LQ < 3) LQ++;\n}",
  "  const cur = LQ_NEXT ?? LQ; if (med > 1 / 42 && cur > 1) LQ_NEXT = cur - 1; else if (med < 1 / 57 && cur < 3) LQ_NEXT = cur + 1;\n"
  "}\n"
  "function lqLater() { if (LQ_NEXT != null && !LIVE()) { if (LQ_SET === 'auto') LQ = LQ_NEXT; LQ_NEXT = null; } }   // il cambio deciso si fa al momento giusto",
  'function lqLater()'),
 ("function lqSet(v) { LQ_SET = v; LQ = v === 'auto' ? 2 : +v;", "function lqSet(v) { LQ_SET = v; LQ_NEXT = null; LQ = v === 'auto' ? 2 : +v;", 'LQ_SET = v; LQ_NEXT = null;'),
 ("  if (p80 > 1 / 45 && RES > .6) { RES = Math.round((RES - .1) * 10) / 10; RES_GOOD = 0; resApply(); }\n"
  "  else if (med < 1 / 57 && p80 < 1 / 50 && RES < 1) { if (++RES_GOOD >= 4) { RES = Math.round((RES + .1) * 10) / 10; RES_GOOD = 0; resApply(); } }\n"
  "  else RES_GOOD = 0;\n}",
  "  const cur = RES_NEXT ?? RES;\n"
  "  if (p80 > 1 / 45 && cur > .6) { if (++RES_BAD >= 2) { RES_NEXT = Math.round((cur - .1) * 10) / 10; RES_BAD = 0; } RES_GOOD = 0; }   // due misure lente di fila, non uno scatto solo\n"
  "  else if (med < 1 / 57 && p80 < 1 / 50 && cur < 1) { RES_BAD = 0; if (++RES_GOOD >= 4) { RES_NEXT = Math.round((cur + .1) * 10) / 10; RES_GOOD = 0; } }\n"
  "  else { RES_GOOD = 0; RES_BAD = 0; }\n"
  "}\n"
  "let RES_NEXT = null, RES_BAD = 0;\n"
  "function resLater() { if (RES_NEXT != null && !LIVE()) { if (RES_NEXT !== RES) { RES = RES_NEXT; resApply(); } RES_NEXT = null; } }   // la nitidezza cambia solo fuori dal combattimento",
  'function resLater()'),
 ("time += rdt; lqTick(rdt); resTick(rdt);", "time += rdt; lqTick(rdt); resTick(rdt); lqLater(); resLater();", 'lqLater(); resLater();'),
 # 2) il cielo dello schermo resta sotto lo sfondo nuovo (che è pieno): non serve disegnarlo, né le stelle
 ("function drawSkyScreen() {\n", "function drawSkyScreen() {\n  if (NWON && NG.nw && NG.nw.ready && NG.nw.ready()) return;                 // lo sfondo dei mondi copre già tutto lo schermo\n", 'lo sfondo dei mondi copre già tutto lo schermo'),
 # 3) immagini pronte dei personaggi: al massimo ~2,5 ms al fotogramma per disegnarne di nuove; intanto si usa quella più vicina che c'è già
 ("const SPR_MAX = 1.8e7, SPR_BUDGET = 8;",
  "const SPR_MAX = 1.8e7, SPR_BUDGET = 8, SPR_MSMAX = 2.5; let SPR_MS = 0;\n"
  "const SPR_ALT = new Map(), SPR_UL = new Map();                               // per ogni posa: le grandezze già pronte; per ogni personaggio: l'ultima immagine usata\n"
  "function sprAlt(base, qi, ul) {                                              // un'immagine già pronta da usare al posto di quella che manca (per uno o due fotogrammi)\n"
  "  const m = SPR_ALT.get(base); let best = null, bd = 1e9;\n"
  "  if (m) for (const [q, key] of m) { const e = SPR.get(key); if (!e) { m.delete(q); continue; } const d = Math.abs(q - qi) + (q < qi ? .5 : 0); if (d < bd) { bd = d; best = e; } }\n"
  "  if (best) return best; const k2 = SPR_UL.get(ul); return (k2 && SPR.get(k2)) || null;\n"
  "}",
  'function sprAlt(base, qi, ul)'),
 ("  const [p, pk] = sprPose(k, o), key = k + '|' + pk + '|' + qi;              // la luce del momento NON entra nel nome: l'immagine resta buona dal giorno alla notte\n"
  "  let e = SPR.get(key);\n"
  "  if (e) { SPR.delete(key); SPR.set(key, e); }\n"
  "  else {\n"
  "    if (m !== 'normal' || SPR_NEW >= SPR_BUDGET) return false;                // niente immagine pronta: si disegna come prima\n"
  "    SPR_NEW++; const b = sprBox(k, o, fn), cv = document.createElement('canvas');",
  "  const [p, pk] = sprPose(k, o), base = k + '|' + pk, key = base + '|' + qi, ul = k + '|' + (o.look || '') + '|' + (SUB[k] ? (o.id || 0) % 6 : '');   // la luce del momento NON entra nel nome: l'immagine resta buona dal giorno alla notte\n"
  "  let e = SPR.get(key);\n"
  "  if (e) { SPR.delete(key); SPR.set(key, e); }\n"
  "  else if (m !== 'normal' || SPR_MS >= SPR_MSMAX || SPR_NEW >= SPR_BUDGET) { e = sprAlt(base, qi, ul); if (!e) return false; }   // tempo finito: si usa quella più vicina, la nuova arriva nei prossimi fotogrammi\n"
  "  else {\n"
  "    const t0 = performance.now(); SPR_NEW++; const b = sprBox(k, o, fn), cv = document.createElement('canvas');",
  'const t0 = performance.now(); SPR_NEW++;'),
 ("    e = { cv, b, sil: {} }; SPR.set(key, e); SPR_PX += cv.width * cv.height;",
  "    e = { cv, b, sil: {}, key }; SPR.set(key, e); SPR_PX += cv.width * cv.height; SPR_MS += performance.now() - t0;\n"
  "    let am = SPR_ALT.get(base); if (!am) SPR_ALT.set(base, am = new Map()); am.set(qi, key);",
  'SPR_MS += performance.now() - t0;'),
 ("  const b = e.b; c.save(); c.rotate((o.lean || 0) * .5);", "  if (e.key) SPR_UL.set(ul, e.key);\n  const b = e.b; c.save(); c.rotate((o.lean || 0) * .5);", 'if (e.key) SPR_UL.set(ul, e.key);'),
 ("frame: () => { SPR_NEW = 0; }", "frame: () => { SPR_NEW = 0; SPR_MS = 0; }", 'SPR_NEW = 0; SPR_MS = 0;'),
])
print('fluido ok')

# 4) i numeri e le barre sopra la battaglia si riscrivono solo quando cambiano (prima a ogni fotogramma: il telefono rifaceva stile e impaginazione 60 volte al secondo);
#    la barra della cattiveria si allunga con una trasformazione, che non rifà l'impaginazione
patch('game.html', [
 ("#catFill{position:absolute;inset:0 auto 0 0;width:0;", "#catFill{position:absolute;inset:0 auto 0 0;width:100%;transform-origin:0 50%;transform:scaleX(0);will-change:transform;", 'transform-origin:0 50%;transform:scaleX(0)'),
 ("function updateHud() {\n  const me = ME(), w = me.wallet, max = DW.walletCap(s, MYPI());\n  $('catFill').style.width = (100 * w.cur / max) + '%';\n  $('catNum').textContent = `${Math.floor(w.cur)} / ${max}`;",
  "const HUD = (el, k, v, f) => { if (el['_h' + k] !== v) { el['_h' + k] = v; f(el, v); } };   // scrive solo se il valore è cambiato\n"
  "function updateHud() {\n  const me = ME(), w = me.wallet, max = DW.walletCap(s, MYPI());\n"
  "  HUD($('catFill'), 'w', Math.round(1000 * Math.min(1, w.cur / max)) / 1000, (el, v) => { el.style.transform = 'scaleX(' + v + ')'; });\n"
  "  HUD($('catNum'), 't', `${Math.floor(w.cur)} / ${max}`, (el, v) => { el.textContent = v; });", 'const HUD = (el, k, v, f)'),
 ("  $('walletInfo').textContent = isFinite(c) ? `Liv ${w.lv} → ${w.lv + 1} · ${c}` : `Liv ${w.lv} · al massimo`;",
  "  HUD($('walletInfo'), 't', isFinite(c) ? `Liv ${w.lv} → ${w.lv + 1} · ${c}` : `Liv ${w.lv} · al massimo`, (el, v) => { el.textContent = v; });", "HUD($('walletInfo')"),
 ("  fb.style.setProperty('--p', p + '%'); fb.classList.toggle('ready', p >= 100);\n  $('fireTxt').innerHTML = noF ? tr(NET.g || s.mp || s.guest ? 'Niente fiammata' : 'In sciopero').replace(' ', '<br>') : p >= 100 ? 'Fiammata!' : `Fiammata<br>${p}%`;\n  $('goldTxt').textContent = save.gold.toLocaleString(LOC());",
  "  HUD(fb, 'p', p, (el, v) => { el.style.setProperty('--p', v + '%'); el.classList.toggle('ready', v >= 100); });\n"
  "  HUD($('fireTxt'), 'h', noF ? tr(NET.g || s.mp || s.guest ? 'Niente fiammata' : 'In sciopero').replace(' ', '<br>') : p >= 100 ? 'Fiammata!' : `Fiammata<br>${p}%`, (el, v) => { el.innerHTML = v; });\n"
  "  HUD($('goldTxt'), 'g', save.gold + LANG, el => { el.textContent = save.gold.toLocaleString(LOC()); });", "HUD($('goldTxt')"),
])
print('hud ok')

# 5) in battaglia, se la scena cambia di pochi pixel (la barra delle carte o un tasto che a un tocco diventa un filo più alto), non si rifà niente:
#    prima ogni volta si svuotava la tela e si ridisegnava tutto lo sfondo (scatto + giorno/notte che "saltava" mentre lo sfondo si rifaceva)
patch('game.html', [
 ("function resize() {\n  const r = $('stage').getBoundingClientRect();\n",
  "function resize(ro) {\n  const r = $('stage').getBoundingClientRect();\n"
  "  if (Array.isArray(ro) && running && !inMenu && W > 0 && Math.abs(r.width - W) < 2 && Math.abs(r.height - H) < Math.max(24, H * .06)) return;   // pochi pixel: la tela si allarga da sola, senza rifare la scena\n",
  'Array.isArray(ro) && running && !inMenu'),
])
print('resize ok')
