// --- immagini pronte (sprite): ogni posa si disegna una volta sola, poi si incolla; ombre e lampi di colore si ricavano dalla stessa immagine ---
let SPR_PROBE = null, SPR_FIX = 0, SPR_OFF = 0, SPR_RES = 1;   // SPR_RES: quanto la tela è più piccola del massimo (risoluzione automatica)
const SPR_DAY = { shadow: '#2a2140', amtC: .36, amtB: .55 };   // la luce fissa con cui si disegnano le immagini pronte
const TAU = Math.PI * 2, SPR = new Map(), KB = {}; let SPR_PX = 0, SPR_NEW = 0;
const SPR_MAX = 1.8e7, SPR_BUDGET = 8;                                       // memoria massima (pixel) e pose nuove per fotogramma
function sprPose(k, o) {                                                    // la posa "arrotondata": pochi fotogrammi per camminata, respiro e attacco
  const a = o.arm || 0, u0 = a < 0 ? Math.min(1, -a / 1.5) : a > 0 ? -Math.min(1, a / 1.3) : 0, mood = o.hit ? 4 : a < -.3 ? 2 : a > .3 ? 3 : o.walking ? 1 : 0;
  let t, ph = 0, u = 0, blink = 1, fk;
  if (a) { u = Math.round(u0 * 4) / 4; t = .6; fk = 'a' + u; }
  else if (o.walking) { const f = Math.floor((((o.ph || 0) % TAU) + TAU) % TAU / TAU * 10) % 10; ph = f / 10 * TAU; t = f * .24; fk = 'w' + f; }
  else { const f = Math.floor((((o.t || 0) % 2.4) + 2.4) % 2.4 / .2) % 12; t = f * .2; blink = (o.blink ?? 1) < .5 ? .1 : 1; fk = 'i' + f + (blink < 1 ? 'b' : ''); }
  const p = { t, ph, walking: !!o.walking && !a, atk: a ? .5 : -1, u, mood, blink, id: o.id || 0, look: o.look, hpf: o.hpf == null ? o.hpf : Math.round(o.hpf * 3) / 3, hyde: typeof o.hyde === 'number' ? Math.round(o.hyde * 6) / 6 : o.hyde, van: typeof o.van === 'number' ? Math.round(o.van * 6) / 6 : o.van };
  return [p, fk + '|' + mood + '|' + (SUB[k] ? (o.id || 0) % 6 : '') + '|' + (o.look || '') + '|' + p.hpf + '|' + p.hyde + '|' + p.van];
}
function sprBox(k, o, fn) {                                                  // quanto spazio occupa il personaggio (provato in 4 pose, a bassa risoluzione)
  const id = k + '|' + (o.look || '') + '|' + (SUB[k] ? (o.id || 0) % 6 : ''); if (KB[id]) return KB[id];
  const q = .5, W = 480, Hh = 400, OX = 240, OY = 320, cv = SPR_PROBE || (SPR_PROBE = document.createElement('canvas')); cv.width = W * q; cv.height = Hh * q;   // un foglio solo, sempre lo stesso
  const g2 = cv.getContext('2d', { willReadFrequently: true }), old = g; g2.setTransform(1, 0, 0, 1, 0, 0); g2.clearRect(0, 0, cv.width, cv.height);   // letto dal processore: niente attese della scheda video
  g = g2; RAW = 1;
  try { for (const ps of [{ t: 1, ph: 0, walking: false, atk: -1, u: 0, mood: 0 }, { t: 1, ph: 1.6, walking: true, atk: -1, u: 0, mood: 1 }, { t: .6, ph: 0, walking: false, atk: .5, u: 1, mood: 2 }, { t: .6, ph: 0, walking: false, atk: .5, u: -1, mood: 3 }]) {
      g2.setTransform(q, 0, 0, q, OX * q, OY * q); fn(Object.assign({ blink: 1, id: o.id || 0, look: o.look, hpf: o.hpf, hyde: o.hyde, van: o.van }, ps)); } } finally { g = old; RAW = 0; }
  const d = g2.getImageData(0, 0, cv.width, cv.height).data; let x0 = 1e9, y0 = 1e9, x1 = -1, y1 = -1;
  for (let y = 0; y < cv.height; y++) for (let x = 0; x < cv.width; x++) if (d[(y * cv.width + x) * 4 + 3] > 8) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  const b = x1 < 0 ? [-60, -160, 60, 20] : [x0 / q - OX - 14, y0 / q - OY - 14, x1 / q - OX + 14, y1 / q - OY + 14];
  return KB[id] = b;
}
function sprSil(e, col) {                                                     // la sagoma piena di un colore (per ombre e lampi)
  let s = e.sil[col]; if (s) return s;
  s = document.createElement('canvas'); s.width = e.cv.width; s.height = e.cv.height; const x = s.getContext('2d'); x.drawImage(e.cv, 0, 0); x.globalCompositeOperation = 'source-in'; x.fillStyle = `rgb(${col})`; x.fillRect(0, 0, s.width, s.height);
  SPR_PX += s.width * s.height; return e.sil[col] = s;
}
function sprDraw(k, c, o, fn) {
  if (SPR_OFF) return false;                                                   // icone: disegnate una volta sola, l'immagine pronta non serve
  const m = NG_MODE(), tm = c.getTransform(), sc = Math.hypot(tm.a, tm.b) / SPR_RES; if (!(sc > 0)) return false;   // le immagini pronte restano quelle a piena risoluzione
  const qi = Math.ceil(Math.log2(sc) * 3 - .15), qs = Math.pow(2, qi / 3), Lt = NG_LIGHT();   // 3 grandezze per raddoppio, sempre un po' più nitida del necessario: meno immagini da tenere
  const [p, pk] = sprPose(k, o), key = k + '|' + pk + '|' + qi;              // la luce del momento NON entra nel nome: l'immagine resta buona dal giorno alla notte
  let e = SPR.get(key);
  if (e) { SPR.delete(key); SPR.set(key, e); }
  else {
    if (m !== 'normal' || SPR_NEW >= SPR_BUDGET) return false;                // niente immagine pronta: si disegna come prima
    SPR_NEW++; const b = sprBox(k, o, fn), cv = document.createElement('canvas'); cv.width = Math.max(1, Math.ceil((b[2] - b[0]) * qs)); cv.height = Math.max(1, Math.ceil((b[3] - b[1]) * qs));
    const g2 = cv.getContext('2d'), old = g; g2.setTransform(qs, 0, 0, qs, -b[0] * qs, -b[1] * qs); g = g2; SPR_FIX = 1; try { fn(p); } finally { g = old; SPR_FIX = 0; }   // sempre coi colori del giorno: di sera e di notte scurisce il velo delle luci
    e = { cv, b, sil: {} }; SPR.set(key, e); SPR_PX += cv.width * cv.height;
    for (const [k2, e2] of SPR) { if (SPR_PX <= SPR_MAX) break; SPR.delete(k2); SPR_PX -= e2.cv.width * e2.cv.height; for (const s of Object.values(e2.sil)) SPR_PX -= s.width * s.height; }
  }
  const b = e.b; c.save(); c.rotate((o.lean || 0) * .5); const sq = o.sq || 0; c.scale(1 + sq, 1 - sq);
  if (m === 'normal') c.drawImage(e.cv, b[0], b[1], b[2] - b[0], b[3] - b[1]);
  else { const [fc, fa] = NG_FC(), a0 = c.globalAlpha; c.globalAlpha = a0 * (m === 'shadow' ? .3 : fa); c.drawImage(sprSil(e, m === 'shadow' ? '20,12,36' : fc), b[0], b[1], b[2] - b[0], b[3] - b[1]); c.globalAlpha = a0; }
  c.restore(); return true;
}
