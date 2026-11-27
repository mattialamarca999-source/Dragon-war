# Ottimizzazioni dell'avvio (25 nov 2026): i suoni arrivano un po' alla volta invece che tutti insieme all'apertura. Si può rilanciare.
def patch(fn, reps):
    s = open(fn).read()
    for a, b, mark in reps:
        if mark in s: continue
        assert s.count(a) == 1, (fn, a[:90], s.count(a))
        s = s.replace(a, b)
    open(fn, 'w').write(s)

patch('game.html', [
 ("  for (const n of SFX_FILES) load('audio/' + n + '.mp3', b => { SND.buf[n] = b; });\n  for (const k of Object.keys(VOICE)) if (!VALIAS[k]) load('audio/v_' + k + '.mp3', b => { SND.vbuf[k] = b; });\n",
  "  const Q = SFX_FILES.map(n => ['audio/' + n + '.mp3', b => { SND.buf[n] = b; }]).concat(Object.keys(VOICE).filter(k => !VALIAS[k]).map(k => ['audio/v_' + k + '.mp3', b => { SND.vbuf[k] = b; }]));\n"
  "  const go = () => { const j = Q.shift(); if (j) load(j[0], j[1]).finally(() => setTimeout(go, 40)); };   // i suoni arrivano due alla volta: niente blocchi all'apertura\n"
  "  setTimeout(() => { go(); go(); }, 1200);\n", 'i suoni arrivano due alla volta'),
 ("  TH = DW.WORLDS[w].theme; toScene(); $('squad').hidden = false; sqLevel = i; sqWorld = w;\n",
  "  TH = DW.WORLDS[w].theme; toScene(); $('squad').hidden = false; sqLevel = i; sqWorld = w;\n  setTimeout(() => { if (!$('squad').hidden) nwPrepBattle(w, i); }, 250);   // intanto si prepara lo sfondo della battaglia\n", 'nwPrepBattle(w, i)'),
 ("function nwPlace(xs, floor, need) {",
  "let BATTLE_WH = (() => { try { return JSON.parse(localStorage.getItem('dw_bwh') || 'null'); } catch (e) { return null; } })();   // misure del campo nell'ultima battaglia (con la barra delle carte), ricordate anche alla prossima apertura\n"
  "function battleView(w2, h2) {                                              // la stessa vista che calcola resize() in battaglia, senza cambiare niente\n"
  "  const k2 = Math.min(w2 / 1150, (h2 - 40) / 420), cs = Math.min(2.1, Math.max(1, .64 / k2)), bs = Math.min(1.45, cs * .78), dpx = Math.max(50, Math.min(300, h2 * .4)), gy = Math.min(h2 - 40 - dpx, Math.max(h2 * .42, 420 * k2 + 30)), cx = 495 - (w2 / k2) / 2;\n"
  "  return {l:cx - 30, r:cx + w2 / k2 + 30, t:-gy / k2 - 30, b:(h2 - gy) / k2 + 2, dy:dpx / k2, px:k2 * dpr, spr:Math.max(1, bs / .78)};\n"
  "}\n"
  "function nwPrepBattle(w, c) {                                               // mentre scegli la squadra, lo sfondo della battaglia si disegna a pezzi: al «Via» è già pronto\n"
  "  if (!NG.nw || !NG.nw.prep || GALLERY) return;\n"
  "  let wh = BATTLE_WH && BATTLE_WH[0] === W ? BATTLE_WH : null;\n"
  "  if (!wh) { let tmp = null; if (!$('unitRow').querySelector('.ub')) { tmp = document.createElement('button'); tmp.className = 'ub'; tmp.innerHTML = '<kbd>1</kbd><canvas width=\"112\" height=\"104\"></canvas><span class=\"nm\">x</span><span class=\"cs\">1</span>'; $('unitRow').insertBefore(tmp, $('fireBtn')); }   // la prima volta la barra delle carte è vuota: una carta finta per misurarla giusta\n"
  "    document.body.classList.remove('inMenu'); const r = $('stage').getBoundingClientRect(); wh = [r.width, r.height]; document.body.classList.add('inMenu'); if (tmp) tmp.remove(); }   // si misura il campo come sarà in battaglia (niente si vede: si rimette subito)\n"
  "  const sv = s.lv, lv = DW.levelOf(w, c), p = sqOpt.hard || lv.night ? 1 : w === 7 ? .5 : 0;\n"
  "  let ob; try { s.lv = lv; ob = obstKind(); } finally { s.lv = sv; }\n"
  "  NG.nw.prep(Object.assign({th:DW.WORLDS[w].theme, ob, p}, battleView(wh[0], wh[1])));\n"
  "}\n"
  "function nwPlace(xs, floor, need) {", 'function nwPrepBattle(w, c)'),
 # la battaglia misura il campo una volta sola, quando la barra delle carte è già al suo posto (prima: due sfondi costruiti di fila)
 ("`${opt.hard ? 'Eroica · ' : ''}${DW.WORLDS[world].name} · ${level + 1}/${DW.WORLDS[world].n}`;\n",
  "`${opt.hard ? 'Eroica · ' : ''}${DW.WORLDS[world].name} · ${level + 1}/${DW.WORLDS[world].n}`;\n  resize(); BATTLE_WH = [W, H]; try { localStorage.setItem('dw_bwh', JSON.stringify(BATTLE_WH)); } catch (e) {}   // misure finali, con la barra delle carte già piena: uno sfondo solo invece di due\n", 'BATTLE_WH = [W, H];  '),
 ("`${opt.hard ? 'Eroica · ' : ''}${DW.WORLDS[d.world].name} · ${d.level + 1}/${DW.WORLDS[d.world].n}`;\n",
  "`${opt.hard ? 'Eroica · ' : ''}${DW.WORLDS[d.world].name} · ${d.level + 1}/${DW.WORLDS[d.world].n}`;\n    resize();                                                             // battaglia ripresa: misure finali, uno sfondo solo\n", 'battaglia ripresa: misure finali'),
 # all'apertura il menu non aspetta lo sfondo: il cielo subito, tana, castello e drago un attimo dopo (lo schermo non si blocca)
 ("  return NG.nw.ensure({th:TH, ob:P34 ? obstKind() : null,", "  return NG.nw.ensure({lazy:inMenu && !inStory && time < 4, th:TH, ob:P34 ? obstKind() : null,", 'lazy:inMenu && !inStory'),
 ("function nwTana(b, mirror) {", "function nwTana(b, mirror) {\n  if (NG.nw.ready && !NG.nw.ready()) return;                                // sfondo non ancora pronto (apertura): la tana arriva tra un attimo", 'sfondo non ancora pronto (apertura): la tana'),
 ("function nwCastle() {", "function nwCastle() {\n  if (NG.nw.ready && !NG.nw.ready()) return;", 'function nwCastle() {\n  if (NG.nw.ready'),
 # le icone dei personaggi: si disegnano una volta sola e poi si copiano (prima la squadra le ridisegnava tutte, ogni volta)
 ("function drawIcon(cvs, key, look) {                                         // icona di un personaggio, sempre alla luce del giorno (con il suo aspetto)",
  "const ICON_MEMO = new Map();                                                // icone già disegnate: si copiano invece di ridisegnarle\n"
  "function drawIcon(cvs, key, look) {\n"
  "  const lk0 = look !== undefined ? look : DW.U[key] && DW.U[key].side === 0 && save.look ? save.look[key] || null : null, mk = key + '|' + lk0 + '|' + cvs.width + 'x' + cvs.height, hit = ICON_MEMO.get(mk);\n"
  "  const ic = cvs.getContext('2d'); ic.setTransform(1, 0, 0, 1, 0, 0);\n"
  "  if (hit) { ic.clearRect(0, 0, cvs.width, cvs.height); ic.drawImage(hit, 0, 0); return; }\n"
  "  if (NG.sprOff) NG.sprOff(1); try { drawIcon0(cvs, key, look); } finally { if (NG.sprOff) NG.sprOff(0); }   // l'icona si disegna direttamente (più veloce)\n  const c2 = document.createElement('canvas'); c2.width = cvs.width; c2.height = cvs.height; c2.getContext('2d').drawImage(cvs, 0, 0);\n"
  "  ICON_MEMO.set(mk, c2); if (ICON_MEMO.size > 500) ICON_MEMO.delete(ICON_MEMO.keys().next().value);\n"
  "}\n"
  "const idleDo = fn => window.requestIdleCallback ? requestIdleCallback(fn, {timeout:150}) : setTimeout(fn, 70);   // lavoro di sottofondo solo nei momenti liberi tra un fotogramma e l'altro\n"
  "function iconWarm() {                                                       // dopo l'apertura, piano piano: le icone della squadra pronte prima di servire\n"
  "  const todo = DW.ROSTER.map(k => [k]).concat(Object.entries(LOOKS).map(([id, L]) => [L.k === 'drago' ? 'goblin' : L.k, L.k === 'drago' ? null : id]), GOODS.concat(Object.keys(DW.ELITE)).map(k => [vis(k)])), scratch = document.createElement('canvas'); scratch.width = 112; scratch.height = 104;   // cattivi, buoni e boss, aspetti speciali\n"
  "  const step = dl => { if (running && !paused) return setTimeout(() => idleDo(step), 1500);   // in battaglia si aspetta: tutto il telefono per la battaglia\n"
  "    const t0 = performance.now(), bud = dl && dl.timeRemaining ? Math.max(2, Math.min(6, dl.timeRemaining() - 1)) : 3; do { const [k, lk] = todo.shift(); if (DW.U[k] || k === 'drago') drawIcon(scratch, k, lk); } while (todo.length && performance.now() - t0 < bud); if (todo.length) idleDo(step); else idleDo(sqBuildIdle); };   // pochi millesimi alla volta: pezzi piccoli; alla fine si prepara anche la griglia della squadra\n"
  "  setTimeout(() => idleDo(step), 3000);\n"
  "}\n"
  "function drawIcon0(cvs, key, look) {                                        // icona di un personaggio, sempre alla luce del giorno (con il suo aspetto)", 'const ICON_MEMO = new Map();'),
 ("new ResizeObserver(resize).observe($('stage'));", "new ResizeObserver(resize).observe($('stage'));\nif (!GALLERY) iconWarm();", 'iconWarm();'),
 # la scelta della squadra: la griglia dei cattivi si prepara prima, a pezzetti, e poi si cambia solo quello che è cambiato davvero
 ("  if (!Object.keys(sqCards).length) for (const kk of DW.ROSTER) {          // la griglia dei cattivi si costruisce una volta sola\n"
  "    const c = document.createElement('button'); c.className = 'card2'; c.dataset.r = RAR[kk] || 0;\n"
  "    c.innerHTML = `<span class=\"badge\" hidden></span><canvas width=\"112\" height=\"104\"></canvas><span class=\"nm\">${SHORT[kk]}</span><span class=\"cs\">${DW.U[kk].cost}</span><span class=\"lk\" hidden></span>`;\n"
  "    drawIcon(c.querySelector('canvas'), kk);\n"
  "    c.onclick = () => pickSquad(kk); longPress(c, () => openUnit(kk, 'squad'));\n"
  "    $('sqGrid').appendChild(c); sqCards[kk] = c;\n"
  "  }\n"
  "  for (const [kk, c] of Object.entries(sqCards)) {\n"
  "    c.querySelector('.nm').textContent = dispName(kk); drawCard(c.querySelector('canvas'), kk); c.dataset.r = secretLocked(kk) ? 's' : RAR[kk] || 0; c.classList.toggle('secret', !!secretLocked(kk));\n"
  "    const lock = !isUnlocked(kk); c.classList.toggle('lock', lock);\n"
  "    const lk = c.querySelector('.lk'); lk.hidden = !lock; lk.textContent = lock ? lockText(kk) : '';\n"
  "    c.querySelector('.cs').textContent = lock ? DW.U[kk].cost : `${DW.U[kk].cost} · Liv ${unitLv(kk)}`;\n"
  "  }\n",
  "  const done = sqBuild(18, forgeFiltered(sqF), 25);                          // la griglia dei cattivi (di solito è già pronta; se no: prima quelli che si vedono)\n"
  "  for (const [kk, c] of Object.entries(sqCards)) sqPaint(kk, c);\n"
  "  if (!done) setTimeout(sqBuildMore, 30);                                    // gli altri arrivano subito dopo, a pezzetti\n", 'sqBuild(18, forgeFiltered(sqF), 25);'),
 ("function renderDecks() {", "function setTx(el, v) { v = String(v); if (el.textContent !== v) el.textContent = v; }   // scrive solo se il testo cambia (niente lavoro inutile)\n"
  "function sqPaint(kk, c) {                                                   // una carta della griglia: nome, lucchetto, costo e livello di adesso\n"
  "  const sec = !!secretLocked(kk), lock = !isUnlocked(kk);\n"
  "  setTx(c.querySelector('.nm'), dispName(kk)); drawCard(c.querySelector('canvas'), kk); c.dataset.r = sec ? 's' : RAR[kk] || 0; c.classList.toggle('secret', sec);\n"
  "  c.classList.toggle('lock', lock);\n"
  "  const lk = c.querySelector('.lk'); lk.hidden = !lock; setTx(lk, lock ? lockText(kk) : '');\n"
  "  setTx(c.querySelector('.cs'), lock ? DW.U[kk].cost : `${DW.U[kk].cost} · Liv ${unitLv(kk)}`);\n"
  "}\n"
  "function sqBuildMore() {                                                    // squadra aperta prima che la griglia fosse pronta: 10 carte alla volta, senza bloccare\n"
  "  if ($('squad').hidden) return sqBuildIdle();\n"
  "  const before = new Set(Object.keys(sqCards)), done = sqBuild(10, forgeFiltered(sqF).concat(DW.ROSTER));\n"
  "  for (const [kk, c] of Object.entries(sqCards)) if (!before.has(kk)) sqPaint(kk, c);\n"
  "  sqFilter(); renderSquad(); if (!done) setTimeout(sqBuildMore, 30);\n"
  "}\n"
  "function sqBuild(n, list = DW.ROSTER, ms = 8) {                            // la griglia dei cattivi: si costruisce una volta sola, anche a pezzi (al massimo n carte e pochi millesimi alla volta)\n"
  "  const grid = $('sqGrid'), t0 = performance.now();\n"
  "  for (const kk of list) {\n"
  "    if (sqCards[kk]) continue; if (n-- <= 0 || performance.now() - t0 > ms) return false;\n"
  "    const c = document.createElement('button'); c.className = 'card2'; c.dataset.r = RAR[kk] || 0;\n"
  "    c.innerHTML = `<span class=\"badge\" hidden></span><canvas width=\"112\" height=\"104\"></canvas><span class=\"nm\">${dispName(kk)}</span><span class=\"cs\">${DW.U[kk].cost}</span><span class=\"lk\" hidden></span>`;\n"
  "    drawCard(c.querySelector('canvas'), kk);\n"
  "    c.onclick = () => pickSquad(kk); longPress(c, () => openUnit(kk, 'squad'));\n"
  "    grid.appendChild(c); sqCards[kk] = c;\n"
  "  }\n"
  "  return DW.ROSTER.every(k => sqCards[k]);\n"
  "}\n"
  "function sqBuildIdle(dl) { if (!$('squad').hidden) return; if (running && !paused) return setTimeout(() => idleDo(sqBuildIdle), 1500); const bud = dl && dl.timeRemaining ? Math.max(2, Math.min(6, dl.timeRemaining() - 1)) : 3; if (!sqBuild(12, DW.ROSTER, bud)) idleDo(sqBuildIdle); }   // mentre sei nel menu, nei momenti liberi\n"
  "function renderDecks() {", 'function sqBuild(n)'),
 ("  for (const [kk, c] of Object.entries(sqCards)) { const at = sqSel.indexOf(kk), bd = c.querySelector('.badge'); c.classList.toggle('sel', at >= 0); bd.hidden = at < 0; bd.textContent = at + 1; }",
  "  for (const [kk, c] of Object.entries(sqCards)) { const at = sqSel.indexOf(kk), bd = c.querySelector('.badge'); c.classList.toggle('sel', at >= 0); bd.hidden = at < 0; if (at >= 0) setTx(bd, at + 1); }", 'if (at >= 0) setTx(bd, at + 1);'),
 # la carta si ridisegna solo se è cambiata (segreto svelato, aspetto nuovo)
 ("function drawCard(cv, kk) {                                                // i segreti non si vedono: solo un punto di domanda\n  if (!secretLocked(kk)) return drawIcon(cv, kk);",
  "function drawCard(cv, kk) {                                                // i segreti non si vedono: solo un punto di domanda\n"
  "  const sig = kk + '|' + (secretLocked(kk) ? '?' : DW.U[kk] && DW.U[kk].side === 0 && save.look ? save.look[kk] || '' : '') + '|' + cv.width + 'x' + cv.height;\n"
  "  if (cv.dwSig === sig) return; cv.dwSig = sig;                              // già disegnata così: niente da rifare\n"
  "  if (!secretLocked(kk)) return drawIcon(cv, kk);", "if (cv.dwSig === sig) return;"),
 # la richiesta «non cancellare i dati» fatta subito costringeva il telefono a rileggere tutto il codice (0,2 s): ora parte 2 secondi dopo, da sola
 ("try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {}); } catch (e) {}",
  "setTimeout(() => { try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {}); } catch (e) {} }, 2000);", "setTimeout(() => { try { if (navigator.storage && navigator.storage.persist)"),
 # apertura in due tempi: prima il codice, poi (subito dopo, a parte) il menu: nessun blocco unico lungo
 ("resize(); if (GALLERY) startGallery(); else if (save.seenStory) { showMenu(); battleResume(); } else startStory();\nif (!GALLERY) netInit();\nrequestAnimationFrame(frame);",
  "setTimeout(() => {                                                          // il menu si prepara un attimo dopo il codice: l'apertura non si blocca tutta insieme\n"
  "  resize(); if (GALLERY) startGallery(); else if (save.seenStory) { showMenu(); battleResume(); } else startStory();\n"
  "  requestAnimationFrame(frame);\n"
  "  if (!GALLERY) setTimeout(netInit, 0);                                       // l'online parte subito dopo, a parte\n"
  "  setTimeout(() => { try { (1234.5).toLocaleString(LOC()); } catch (e) {} }, 900);   // i numeri «1.234» si preparano mentre non tocchi niente\n"
  "}, 0);", 'il menu si prepara un attimo dopo il codice'),
 # i numeri del menu senza il formattatore del telefono (la prima volta è lento): stesso risultato
 ("  $('menuGold').textContent = save.gold.toLocaleString(LOC());", "  $('menuGold').textContent = fmtN(save.gold);", "fmtN(save.gold);"),
 ("  $('menuRu').textContent = save.ru.toLocaleString(LOC());", "  $('menuRu').textContent = fmtN(save.ru);", "fmtN(save.ru);"),
 ("function showMenu() {", "function fmtN(n) {                                                          // i numeri come li scrive il telefono: «12.345» (in inglese «1,234»; in italiano e spagnolo quelli di 4 cifre restano «4500»)\n"
  "  if (!Number.isInteger(n)) return n.toLocaleString(LOC());\n"
  "  const t = String(Math.abs(n)); if (LANG !== 'en' && t.length < 5) return String(n);\n"
  "  return (n < 0 ? '-' : '') + t.replace(/\\B(?=(\\d{3})+$)/g, LANG === 'en' ? ',' : '.');\n"
  "}\n"
  "function showMenu() {", 'function fmtN(n)'),
])
patch('i18n.js', [
 ("I18N_FIT_RAF = requestAnimationFrame(() => { I18N_FIT_RAF = 0; for (const x of I18N_FIT) i18nFitEl(x); I18N_FIT.clear(); });",
  "I18N_FIT_RAF = requestAnimationFrame(() => { I18N_FIT_RAF = 0; const l = [...I18N_FIT]; I18N_FIT.clear(); i18nFitAll(l); });", 'i18nFitAll(l);'),
 ("function i18nFitLater(n) {",
  "function i18nFitAll(list) {                                                 // come i18nFitEl, ma per tante scritte insieme: prima si misura tutto, poi si cambia tutto (la pagina si ricalcola 3 volte, non centinaia)\n"
  "  const todo = [];\n"
  "  for (const el of list) {\n"
  "    const box = el.parentElement; if (!box || !el.isConnected) continue;\n"
  "    const w = box.clientWidth - 6; if (w <= 0) { if ((el.i18nTry = (el.i18nTry || 0) + 1) < 20) setTimeout(() => i18nFitLater(el), 250); continue; }\n"
  "    el.i18nTry = 0; if (!el.style.fontSize && !el.style.whiteSpace && el.scrollWidth <= w) continue;   // ci sta già\n"
  "    todo.push([el, w]);\n"
  "  }\n"
  "  if (!todo.length) return;\n"
  "  for (const [el] of todo) { el.style.fontSize = ''; el.style.whiteSpace = ''; }\n"
  "  const m = todo.map(([el, w]) => [el, w, el.scrollWidth, parseFloat(getComputedStyle(el).fontSize) || 12]);\n"
  "  let cur = []; const wrap = [];\n"
  "  for (const [el, w, sw, fs] of m) if (sw > w) { const f = Math.max(8, Math.floor(fs * w / sw * 2) / 2); el.style.fontSize = f + 'px'; cur.push([el, w, f]); }   // quasi giusto al primo colpo\n"
  "  for (let r = 0; r < 12 && cur.length; r++) {                              // poi mezzo punto alla volta, ma tutte insieme (una misura per giro)\n"
  "    cur = cur.filter(([el, w]) => el.scrollWidth > w);\n"
  "    for (const x of cur) { if (x[2] <= 8) wrap.push(x[0]); else { x[2] -= .5; x[0].style.fontSize = x[2] + 'px'; } }\n"
  "    cur = cur.filter(x => !wrap.includes(x[0]));\n"
  "  }\n"
  "  for (const el of wrap) { el.style.whiteSpace = 'normal'; el.style.textAlign = 'center'; }\n"
  "}\n"
  "function i18nFitLater(n) {", 'function i18nFitAll(list)'),
 ("  el.i18nTry = 0;\n  let fs = parseFloat(getComputedStyle(el).fontSize) || 12;",
  "  el.i18nTry = 0;\n  if (!el.style.fontSize && !el.style.whiteSpace && el.scrollWidth <= w) return;   // ci sta già: non si tocca niente (niente ricalcoli della pagina)\n  el.style.fontSize = ''; el.style.whiteSpace = '';\n  let fs = parseFloat(getComputedStyle(el).fontSize) || 12;", 'ci sta già: non si tocca niente'),
 ("  const box = el.parentElement; if (!box || !el.isConnected) return;\n  el.style.fontSize = ''; el.style.whiteSpace = '';\n  const w = box.clientWidth - 6;",
  "  const box = el.parentElement; if (!box || !el.isConnected) return;\n  const w = box.clientWidth - 6;", "if (!box || !el.isConnected) return;\n  const w = box.clientWidth - 6;"),
])

# --- schermate del menu più veloci (26 nov 2026) ---
g = open('game.html').read()
if 'WANTED_TOK' not in g:
    a = g.index("  keys.forEach((k, i) => {\n    const n = save.beaten[k]")
    e = g.index("\n  });\n}", a)
    body = g[a:e].replace("  keys.forEach((k, i) => {", "  const mk = (k, i) => {", 1)
    g = g[:a] + body + ("\n  };\n"
        "  let i = 0; const tok = WANTED_TOK = {};                                    // i manifesti arrivano a pezzi: subito i primi 12, poi gli altri senza bloccare\n"
        "  const step = first => { if (WANTED_TOK !== tok || $('wanted').hidden) return; const t0 = performance.now(); while (i < keys.length && (first ? i < 12 && (i < 4 || performance.now() - t0 < 25) : performance.now() - t0 < 8)) { mk(keys[i], i); i++; } if (i < keys.length) setTimeout(step, 30); };\n"
        "  step(true);\n}\nlet WANTED_TOK = null;") + g[e + len("\n  });\n}"):]
    open('game.html', 'w').write(g)
if 'FORGE_TOK' not in g:
    a = g.index("    for (const kk of forgeFiltered()) {\n      const lock = !isUnlocked(kk), c = document.createElement('button');")
    end_mark = "      grid.appendChild(c);\n    }\n    if (!grid.children.length) {"
    e = g.index(end_mark, a)
    body = g[a:e].replace("    for (const kk of forgeFiltered()) {", "    const ks = forgeFiltered(), tok = FORGE_TOK = {}; let fi = 0;\n    const mkF = kk => {", 1)
    g = g[:a] + body + ("      grid.appendChild(c);\n    };\n"
        "    const stepF = first => { if (FORGE_TOK !== tok || !grid.isConnected) return; const t0 = performance.now(); while (fi < ks.length && (first ? !fast || fi < 12 : performance.now() - t0 < 8)) mkF(ks[fi++]); if (fi < ks.length) setTimeout(stepF, 30); };   // subito le prime 12 carte, le altre a pezzi\n"
        "    stepF(true);\n    if (!ks.length) {") + g[e + len(end_mark):]
    g = g.replace("function renderForge() {", "let FORGE_TOK = null;\nfunction renderForge(fast) {                                               // fast: appena aperta o filtrata (dopo un acquisto si rifà tutto subito, la lista non salta)", 1)
    for x in ["$('forge').hidden = false; renderForge(); }", "forgeJust = null; renderForge(); });", "fgF.q = $('fgQ').value; renderForge(); };", "fgF.own = $('fgOwn').value; renderForge(); };", "fgF.rar = +$('fgRar').value; renderForge(); };", "fgF.sort = $('fgSort').value; renderForge(); };"]:
        assert g.count(x) == 1, x; g = g.replace(x, x.replace('renderForge()', 'renderForge(true)'))
    open('game.html', 'w').write(g)
if 'ALB_TOK' not in g:
    a = g.index("  ALB.forEach((pg, i) => {\n    const ks = albKeys(pg)")
    end_mark = "    list.appendChild(sec);\n  });\n}"
    e = g.index(end_mark, a)
    body = g[a:e].replace("  ALB.forEach((pg, i) => {", "  const tok = ALB_TOK = {}; let ai = 0;\n  const mkA = (pg, i) => {", 1)
    g = g[:a] + body + ("    list.appendChild(sec);\n  };\n"
        "  const stepA = first => { if (ALB_TOK !== tok || !list.isConnected) return; const t0 = performance.now(); while (ai < ALB.length && (first ? !fast || ai < 1 || (ai < 2 && performance.now() - t0 < 25) : performance.now() - t0 < 8)) { mkA(ALB[ai], ai); ai++; } if (ai < ALB.length) setTimeout(stepA, 30); };   // subito le prime 2 pagine, le altre a pezzi\n"
        "  stepA(true);\n}") + g[e + len(end_mark):]
    g = g.replace("function renderAlbum() {", "let ALB_TOK = null;\nfunction renderAlbum(fast) {                                                // fast: appena aperto l'Album (dopo un Ritira si rifà tutto subito, la pagina non salta)", 1)
    g = g.replace("function showAlbum() { toScene(); $('album').hidden = false; renderAlbum(); }", "function showAlbum() { toScene(); $('album').hidden = false; renderAlbum(true); }", 1)
    open('game.html', 'w').write(g)
print('ok')
