// --- immagini pronte (sprite): ogni posa si disegna una volta sola, poi si incolla; ombre e lampi di colore si ricavano dalla stessa immagine ---
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
  const q = .5, W = 480, Hh = 400, OX = 240, OY = 320, cv = document.createElement('canvas'); cv.width = W * q; cv.height = Hh * q; const g2 = cv.getContext('2d'), old = g;
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
  const m = NG_MODE(), tm = c.getTransform(), sc = Math.hypot(tm.a, tm.b); if (!(sc > 0)) return false;
  const qi = Math.round(Math.log2(sc) * 6), qs = Math.pow(2, qi / 6), Lt = NG_LIGHT();
  const [p, pk] = sprPose(k, o), key = k + '|' + pk + '|' + qi + '|' + (Lt.shadow || '') + Math.round((NG_CHAR() ? Lt.amtC : Lt.amtB || 0) * 24);
  let e = SPR.get(key);
  if (e) { SPR.delete(key); SPR.set(key, e); }
  else {
    if (m !== 'normal' || SPR_NEW >= SPR_BUDGET) return false;                // niente immagine pronta: si disegna come prima
    SPR_NEW++; const b = sprBox(k, o, fn), cv = document.createElement('canvas'); cv.width = Math.max(1, Math.ceil((b[2] - b[0]) * qs)); cv.height = Math.max(1, Math.ceil((b[3] - b[1]) * qs));
    const g2 = cv.getContext('2d'), old = g; g2.setTransform(qs, 0, 0, qs, -b[0] * qs, -b[1] * qs); g = g2; try { fn(p); } finally { g = old; }
    e = { cv, b, sil: {} }; SPR.set(key, e); SPR_PX += cv.width * cv.height;
    for (const [k2, e2] of SPR) { if (SPR_PX <= SPR_MAX) break; SPR.delete(k2); SPR_PX -= e2.cv.width * e2.cv.height; for (const s of Object.values(e2.sil)) SPR_PX -= s.width * s.height; }
  }
  const b = e.b; c.save(); c.rotate((o.lean || 0) * .5); const sq = o.sq || 0; c.scale(1 + sq, 1 - sq);
  if (m === 'normal') c.drawImage(e.cv, b[0], b[1], b[2] - b[0], b[3] - b[1]);
  else { const [fc, fa] = NG_FC(), a0 = c.globalAlpha; c.globalAlpha = a0 * (m === 'shadow' ? .3 : fa); c.drawImage(sprSil(e, m === 'shadow' ? '20,12,36' : fc), b[0], b[1], b[2] - b[0], b[3] - b[1]); c.globalAlpha = a0; }
  c.restore(); return true;
}
