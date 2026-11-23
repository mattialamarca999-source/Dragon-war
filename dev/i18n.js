/* ================= lingue: inglese (predefinita), italiano, spagnolo =================
   Il gioco è scritto in italiano. Ogni testo che compare sullo schermo passa da tr(): se la lingua non è
   l'italiano lo cerca nel dizionario. I numeri, i nomi dei personaggi e le frasi tra «» diventano segnaposto
   ({#1}, {n1}, {q1}), così una sola voce del dizionario vale per tutti i valori. */
const LANGS = {en:'English', it:'Italiano', es:'Español'};
if (!LANGS[save.lang]) save.lang = (save.tutorialDone || save.seenStory || Object.keys(save.stars || {}).length) ? 'it' : 'en';   // chi gioca già resta in italiano
let LANG = save.lang;
const LOC = () => ({it:'it-IT', en:'en-US', es:'es-ES'})[LANG];
const I18N = {en:/*I18N_EN*/{}, es:/*I18N_ES*/{}};
const I18N_MISS = new Map(); window.__i18nMiss = I18N_MISS;                 // per i test: testi senza traduzione
const I18N_SKIP = /^[\s\d.,:;+\-−×x%\/★⭐()!?…·|«»"'#*→←↑↓✓✔✕✖︎❤️🔥⚡️💎🪙]*$/u;
let I18N_NAMES = null, I18N_NAME_RE = null;
function i18nNames() {                                                       // nomi propri che possono stare dentro una frase
  const set = new Set(); let ready = true;
  const add = v => { if (typeof v === 'string' && v.length > 2 && I18N[LANG] && I18N[LANG][v]) set.add(v); };
  try { for (const v of Object.values(SHORT)) add(v); } catch (e) { ready = false; }       // all'avvio i nomi non ci sono ancora
  try { for (const v of Object.values(NAMES)) add(v); } catch (e) { ready = false; }
  try { for (const w of DW.WORLDS) add(w.name); } catch (e) {}
  try { for (const k of Object.keys(DW.U)) { add(DW.U[k].name); if (DW.U[k].elite) add(DW.U[k].elite.name); } } catch (e) {}
  try { DW.WORLDS.forEach((w, wi) => { for (let i = 0; i < w.n; i++) add(DW.levelOf(wi, i).name); }); } catch (e) {}
  try { for (const c of DW.COOP || []) add(c.name); for (const c of DW.CAPRICCI || []) add(c.name); } catch (e) {}
  try { for (const v of Object.values(WNAME)) add(v); for (const v of Object.values(GNAME)) add(v); } catch (e) {}
  for (const k of Object.keys(I18N[LANG] || {})) if (k.startsWith('@')) set.add(k.slice(1));   // nomi segnati a mano nel dizionario
  const names = [...set].sort((a, b) => b.length - a.length);
  I18N_NAMES = ready ? names : null;
  I18N_NAME_RE = names.length ? new RegExp('(?<![\\p{L}])(' + names.map(n => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')(?![\\p{L}])', 'gu') : null;
}
const I18N_TOKNUM = /\{[nq]\d+\}|[+\-−]?\d+(?:[.,:\/]\d+)*%?/g;
function trCore(t) {
  const D = I18N[LANG]; if (!D) return null;
  if (Object.prototype.hasOwnProperty.call(D, t)) return D[t];
  if (Object.prototype.hasOwnProperty.call(D, '@' + t)) return D['@' + t];
  return null;
}
function trKey(t) {                                                          // testo → chiave con segnaposto
  const vals = {}; let q = 0, n = 0, h = 0;
  let k = t.replace(/«([^»]{1,80})»/g, (m, x) => { const id = 'q' + (++q); vals[id] = LANG === 'en' ? '“' + tr(x) + '”' : '«' + tr(x) + '»'; return '{' + id + '}'; });
  if (I18N_NAME_RE) k = k.replace(I18N_NAME_RE, m => { const id = 'n' + (++n); vals[id] = trCore(m) || m; return '{' + id + '}'; });
  k = k.replace(I18N_TOKNUM, m => { if (m[0] === '{') return m; const id = '#' + (++h); vals[id] = m; return '{' + id + '}'; });   // i segnaposto già messi non si toccano
  return {k, vals};
}
const I18N_CACHE = new Map();
function tr(text) {
  if (LANG === 'it' || text == null) return text;
  text = String(text);
  const c = I18N_CACHE.get(text); if (c !== undefined) return c;
  const r = trRaw(text); if (I18N_CACHE.size > 4000) I18N_CACHE.clear(); I18N_CACHE.set(text, r); return r;
}
function trRaw(text) {
  const m = /^(\s*)([\s\S]*?)(\s*)$/.exec(text), core = m[2];
  if (!core || I18N_SKIP.test(core)) return text;
  let out = trCore(core);
  if (out == null && core.includes(' · ')) { const parts = core.split(' · '); const tp = parts.map(p => tr(p)); if (tp.some((x, i) => x !== parts[i])) out = tp.join(' · '); }
  if (out == null) {
    if (!I18N_NAMES) i18nNames();
    const {k, vals} = trKey(core);
    const t = k !== core ? trCore(k) : null;
    if (t != null) out = t.replace(/\{([#nq]\d+)\}/g, (x, id) => vals[id] != null ? vals[id] : x);
    else if (!I18N_MISS.has(k)) I18N_MISS.set(k, core);
  }
  return out == null ? text : m[1] + out + m[3];
}
// tr() serve anche per i testi composti nel codice
const Lf = (it, p) => tr(it).replace(/\{(\w+)\}/g, (x, k) => p && p[k] != null ? p[k] : x);   // frase con parametri: Lf('Ciao {nome}', {nome})
/* ---------- traduzione automatica di tutto quello che compare nella pagina ---------- */
const I18N_ORIG = new WeakMap(), I18N_SET = new WeakMap(), I18N_ATTRS = ['placeholder', 'aria-label', 'title'];
const i18nSkipEl = el => !el || el.nodeName === 'SCRIPT' || el.nodeName === 'STYLE' || (el.closest && el.closest('[data-noi18n]'));
function i18nText(n) {
  const cur = n.data;
  if (I18N_SET.get(n) === cur) return;                                       // l'ho scritto io: già tradotto
  if (i18nSkipEl(n.parentNode)) return;
  I18N_ORIG.set(n, cur);
  const t = tr(cur); I18N_SET.set(n, t); if (t !== cur) n.data = t;
}
function i18nAttr(el, a) {
  const cur = el.getAttribute(a); if (cur == null) return;
  const key = 'i18n' + a; if (el[key] && el[key].set === cur) return;
  const t = tr(cur); el[key] = {orig:cur, set:t}; if (t !== cur) el.setAttribute(a, t);
}
function i18nWalk(root) {
  if (root.nodeType === 3) return i18nText(root);
  if (root.nodeType !== 1 || i18nSkipEl(root)) return;
  for (const a of I18N_ATTRS) if (root.hasAttribute(a)) i18nAttr(root, a);
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  let x; while ((x = w.nextNode())) { if (x.nodeType === 3) i18nText(x); else if (!i18nSkipEl(x)) for (const a of I18N_ATTRS) if (x.hasAttribute(a)) i18nAttr(x, a); }
}
function i18nAll() {                                                         // cambio lingua: rimetto gli originali e ritraduco
  document.documentElement.lang = LANG; I18N_NAMES = null; I18N_CACHE.clear();
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  let x; while ((x = w.nextNode())) {
    if (x.nodeType === 3) { if (I18N_ORIG.has(x) && I18N_SET.get(x) === x.data) { const o = I18N_ORIG.get(x); I18N_SET.delete(x); x.data = o; } i18nText(x); }
    else for (const a of I18N_ATTRS) { const k = 'i18n' + a; if (x[k] && x.getAttribute(a) === x[k].set) { x.setAttribute(a, x[k].orig); x[k] = null; } if (x.hasAttribute(a) && !i18nSkipEl(x)) i18nAttr(x, a); }
  }
}
/* nomi nelle carte piccole: se il nome (tradotto) è più largo della carta, il carattere si rimpicciolisce */
const I18N_FIT_SEL = '.ub .nm, .slot span, .card2 .nm';
const I18N_FIT = new Set(); let I18N_FIT_RAF = 0;
function i18nFitEl(el) {
  const box = el.parentElement; if (!box || !el.isConnected) return;
  el.style.fontSize = ''; el.style.whiteSpace = '';
  const w = box.clientWidth - 6; if (w <= 0) { if ((el.i18nTry = (el.i18nTry || 0) + 1) < 20) setTimeout(() => i18nFitLater(el), 250); return; }
  el.i18nTry = 0;
  let fs = parseFloat(getComputedStyle(el).fontSize) || 12;
  while (el.scrollWidth > w && fs > 8) { fs -= .5; el.style.fontSize = fs + 'px'; }
  if (el.scrollWidth > w) { el.style.whiteSpace = 'normal'; el.style.textAlign = 'center'; }
}
function i18nFitLater(n) {
  const el = n.nodeType === 3 ? n.parentElement : n; if (!el || !el.closest) return;
  const m = el.closest(I18N_FIT_SEL); if (m) I18N_FIT.add(m);
  if (el.querySelectorAll) el.querySelectorAll(I18N_FIT_SEL).forEach(x => I18N_FIT.add(x));
  if (I18N_FIT.size && !I18N_FIT_RAF) I18N_FIT_RAF = requestAnimationFrame(() => { I18N_FIT_RAF = 0; for (const x of I18N_FIT) i18nFitEl(x); I18N_FIT.clear(); });
}
addEventListener('resize', () => document.querySelectorAll(I18N_FIT_SEL).forEach(i18nFitLater));
const I18N_OBS = new MutationObserver(list => {
  for (const r of list) {
    if (r.type === 'characterData') { i18nText(r.target); i18nFitLater(r.target); }
    else if (r.type === 'attributes') { if (!i18nSkipEl(r.target)) i18nAttr(r.target, r.attributeName); }
    else { for (const n of r.addedNodes) i18nWalk(n); i18nFitLater(r.target); }
  }
});
I18N_OBS.observe(document.body, {subtree:true, childList:true, characterData:true, attributes:true, attributeFilter:I18N_ATTRS});
document.documentElement.lang = LANG;
i18nWalk(document.body);
/* ---------- anche i testi disegnati nella battaglia (fumetti, numeri, nomi dei boss) ---------- */
const I18N_CV = {f:CanvasRenderingContext2D.prototype.fillText, s:CanvasRenderingContext2D.prototype.strokeText, m:CanvasRenderingContext2D.prototype.measureText};
function i18nFit(c, t, x, mw) {                                              // un testo tradotto più lungo non deve uscire dallo schermo
  if (mw !== undefined) return mw;
  const m = c.getTransform(); if (m.b || m.c || !m.a) return mw;
  const dx = m.a * x + m.e, W = c.canvas.width, al = c.textAlign;
  let av = al === 'center' ? 2 * Math.min(dx, W - dx) : (al === 'right' || al === 'end') ? dx : W - dx;
  av = (av - 12 * m.a) / m.a;
  return av > 30 && I18N_CV.m.call(c, t).width > av ? av : mw;
}
CanvasRenderingContext2D.prototype.fillText = function (t, x, y, mw) { if (LANG === 'it') return I18N_CV.f.apply(this, arguments); const s = tr(t); mw = s !== t ? i18nFit(this, s, x, mw) : mw; return mw === undefined ? I18N_CV.f.call(this, s, x, y) : I18N_CV.f.call(this, s, x, y, mw); };
CanvasRenderingContext2D.prototype.strokeText = function (t, x, y, mw) { if (LANG === 'it') return I18N_CV.s.apply(this, arguments); const s = tr(t); mw = s !== t ? i18nFit(this, s, x, mw) : mw; return mw === undefined ? I18N_CV.s.call(this, s, x, y) : I18N_CV.s.call(this, s, x, y, mw); };
CanvasRenderingContext2D.prototype.measureText = function (t) { return I18N_CV.m.call(this, LANG === 'it' ? t : tr(t)); };
function setLang(l) {
  if (!LANGS[l] || l === LANG) return;
  LANG = save.lang = l; persist(); i18nAll();
  document.querySelectorAll('#setLang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === LANG));
}
