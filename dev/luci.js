/* ================= LUCI (26 nov 2026): studio della luce a strati per la grafica nuova =================
   1 colore dell'ora · 2 sole, raggi e riflessi · 3 buio vero con le luci che lo bucano · 4 luci «LED» a tre strati
   5 luce calda sui personaggi vicini · 6 lucciole · 7 bordi scuri. Ombre lunghe: in drawUnits.
   Ogni alone si disegna una volta sola (sprite) e poi si copia; il buio si calcola a risoluzione ridotta.
   Qualità: 3 alte, 2 medie, 1 basse; «auto» misura la fluidità in battaglia e si regola da sola. */
let LQ_SET = (() => { try { return localStorage.getItem('dw_luci') || 'auto'; } catch (e) { return 'auto'; } })();
let LQ = LQ_SET === 'auto' ? 3 : +LQ_SET || 3;
const LQ_FT = [];
function lqTick(rdt) {                                                       // automatico: se i fotogrammi rallentano, luci più leggere (e viceversa)
  if (LQ_SET !== 'auto' || !running || paused || document.hidden) { LQ_FT.length = 0; return; }
  LQ_FT.push(rdt); if (LQ_FT.length < 90) return;
  const a = LQ_FT.slice().sort((x, y) => x - y), med = a[45]; LQ_FT.length = 0;
  if (med > 1 / 42 && LQ > 1) LQ--; else if (med < 1 / 57 && LQ < 3) LQ++;
}
function lqSet(v) { LQ_SET = v; LQ = v === 'auto' ? 3 : +v; try { localStorage.setItem('dw_luci', v); } catch (e) {} }
const LX_SPR = {};
function lxSpr(rgb, kind) {                                                  // gli aloni pronti: «led» (nucleo bianco + colore + bagliore), «soft», «hole» (per bucare il buio), «pool» (pozza a terra)
  const key = rgb + '|' + kind; let c = LX_SPR[key]; if (c) return c;
  c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'), gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  if (kind === 'led') { gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.07, `rgba(${rgb},1)`); gr.addColorStop(.2, `rgba(${rgb},.5)`); gr.addColorStop(.5, `rgba(${rgb},.14)`); gr.addColorStop(1, `rgba(${rgb},0)`); }
  else if (kind === 'hole') { gr.addColorStop(0, 'rgba(0,0,0,1)'); gr.addColorStop(.3, 'rgba(0,0,0,.8)'); gr.addColorStop(.65, 'rgba(0,0,0,.3)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); }
  else { gr.addColorStop(0, `rgba(${rgb},.85)`); gr.addColorStop(.35, `rgba(${rgb},.32)`); gr.addColorStop(.7, `rgba(${rgb},.08)`); gr.addColorStop(1, `rgba(${rgb},0)`); }
  x.fillStyle = gr; x.fillRect(0, 0, 128, 128); return LX_SPR[key] = c;
}
function lxDraw(c, spr, x, y, r, a, sy = 1) { if (!(a > .004) || !(r > .5)) return; c.globalAlpha = Math.min(1, a); c.drawImage(spr, x - r, y - r * sy, r * 2, r * 2 * sy); }
let LX_RAYS = null;
function lxRays() {                                                          // i raggi del sole, disegnati una volta: poi girano piano
  if (LX_RAYS) return LX_RAYS; const c = document.createElement('canvas'); c.width = c.height = 512; const x = c.getContext('2d'); x.translate(256, 256);
  for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2 + (i % 3) * .09, w = .035 + (i % 4) * .018, L = 200 + (i % 5) * 12, gr = x.createRadialGradient(0, 0, 8, 0, 0, L);
    gr.addColorStop(0, 'rgba(255,240,200,.9)'); gr.addColorStop(.4, 'rgba(255,225,170,.35)'); gr.addColorStop(1, 'rgba(255,220,160,0)'); x.fillStyle = gr;
    x.beginPath(); x.moveTo(0, 0); x.lineTo(Math.cos(a - w) * L, Math.sin(a - w) * L); x.lineTo(Math.cos(a + w) * L, Math.sin(a + w) * L); x.closePath(); x.fill(); }
  return LX_RAYS = c;
}
let LX_VIG = null, LX_VIG_K = '';
function lxVig() {                                                           // bordi scuri morbidi (rifatti solo se cambia lo schermo)
  const key = Math.round(W) + 'x' + Math.round(H); if (LX_VIG && LX_VIG_K === key) return LX_VIG; LX_VIG_K = key;
  const c = LX_VIG || document.createElement('canvas'); c.width = Math.max(1, Math.round(W / 2)); c.height = Math.max(1, Math.round(H / 2)); const x = c.getContext('2d');
  const vg = x.createRadialGradient(c.width / 2, c.height * .55, Math.min(c.width, c.height) * .35, c.width / 2, c.height * .55, Math.max(c.width, c.height) * .78);
  vg.addColorStop(0, 'rgba(10,4,24,0)'); vg.addColorStop(1, 'rgba(10,4,24,1)'); x.fillStyle = vg; x.fillRect(0, 0, c.width, c.height); return LX_VIG = c;
}
const LX_FFC = [['190,255,110', '225,255,150'], ['215,255,100', '240,255,170'], ['255,232,110', '255,248,190'], ['160,255,170', '210,255,215'], ['255,196,90', '255,232,170'], ['200,255,140', '235,255,200']];
const LX_FF = Array.from({length:48}, (_, i) => { const r = n => { const v = Math.sin(i * 127.1 + n * 311.7) * 43758.5453; return v - Math.floor(v); };
  const ci = r(9) < .5 ? 0 : r(9) < .68 ? 1 : r(9) < .8 ? 2 : r(9) < .9 ? 3 : r(9) < .96 ? 5 : 4;   // quasi tutte verde-gialle, qualcuna più dorata o più fredda
  return {bx:(i * 0.618034 % 1) * 1120 - 60, by:-150 + ((i * 0.381966 + r(2) * .3) % 1) * 340, p:r(3) * 6.3, a1:.12 + r(4) * .3, a2:.4 + r(5) * .6, w:.8 + r(6) * 1.8, ph:r(7) * 9, sw:r(8),
    sz:.55 + r(10) * .9, c:LX_FFC[ci], kind:r(11) < .5 ? 0 : r(11) < .8 ? 1 : 2, rng:18 + r(12) * 40}; });   // sparse su tutto il campo, ognuna con la sua grandezza, colore, ritmo e giro
function lxFly(f, t) {                                                       // dove sta una lucciola al tempo t (curve morbide e lente)
  const sw = Math.sin(t * .07 + f.sw * 6) * 18;
  return [f.bx + Math.sin(t * f.a1 + f.p) * f.rng + Math.sin(t * f.a2 + f.p * 2) * f.rng * .3 + sw, f.by + Math.cos(t * f.a1 * .8 + f.p) * f.rng * .45 + Math.sin(t * f.a2 * 1.3 + f.p) * 7];
}
function lxFlash(f, t) {                                                     // tre modi di lampeggiare: lampo lento, doppio lampo, luce che respira
  const b = t * f.w + f.ph;
  if (f.kind === 0) return .3 + .7 * Math.pow(Math.max(0, Math.sin(b)), 4);
  if (f.kind === 1) { const c = (b / 6.283) % 1; return .22 + .78 * Math.max(Math.exp(-Math.pow((c - .1) * 22, 2)), Math.exp(-Math.pow((c - .22) * 22, 2))); }
  return .45 + .4 * (.5 + .5 * Math.sin(b * .6));
}
let LXM = null, LXMC = null, LXA = null, LXAC = null;
function lxBuf(c, x, lw, lh) { if (c.width !== lw || c.height !== lh) { c.width = lw; c.height = lh; } x.setTransform(1, 0, 0, 1, 0, 0); x.globalCompositeOperation = 'source-over'; x.globalAlpha = 1; x.clearRect(0, 0, lw, lh); }
function nwLights() {                                                         // due fogli a bassa risoluzione (ombra e luce) + pochi punti nitidi: 3 passate sullo schermo in tutto
  const d = L.dark, S = L.S, day = 1 - d, fire = dragon.fireT > 0 ? Math.min(1, dragon.fireT) : 0, q = LQ, t = time;
  const src = (NG.nw && NG.nw.lights && NG.nw.lights()) || [], sp = NG.nw && NG.nw.sun ? NG.nw.sun() : null;
  const fl = l => .88 + .1 * Math.sin(t * 7 + l.x) + .05 * Math.sin(t * 19 + l.y * .3);   // le fiamme tremolano
  const ffN = d > .22 ? (q >= 3 ? 48 : q === 2 ? 30 : 15) : 0, ffA = clamp01((d - .22) * 1.7), FX = 480, FY = -60;
  const ffPos = []; for (let i = 0; i < ffN; i++) { const f = LX_FF[i]; let [x, y] = lxFly(f, t); if (fire) { const dx = x - FX, dy = y - FY, dd = Math.hypot(dx, dy) + 1; x += dx / dd * 90 * fire; y += dy / dd * 60 * fire; } ffPos.push([x, y, lxFlash(f, t) * ffA, f]); }
  const sc = q >= 3 ? .5 : q === 2 ? .34 : .25, lw = Math.max(1, Math.ceil(W * sc)), lh = Math.max(1, Math.ceil(H * sc)), world = c => c.setTransform(k * sc, 0, 0, k * sc, -cam.x * k * sc, groundY * sc);
  if (!LXM) { LXM = document.createElement('canvas'); LXMC = LXM.getContext('2d'); LXA = document.createElement('canvas'); LXAC = LXA.getContext('2d'); }
  // 1) il colore dell'ora, in una passata sola: mattina dorata, tramonto arancio e rosa, notte blu
  if (q >= 2) { const wd = .26 * day * (1 - S), ws = .34 * S, wn = .16 * d, sum = wd + ws + wn;
    if (sum > .02) { const mixc = i => Math.round(([255, 205, 130][i] * wd + [255, 105, 80][i] * ws + [40, 60, 170][i] * wn) / sum);
      ctx.save(); ctx.globalCompositeOperation = 'soft-light'; ctx.fillStyle = `rgba(${mixc(0)},${mixc(1)},${mixc(2)},${Math.min(.6, sum)})`; ctx.fillRect(0, 0, W, H); ctx.restore(); } }
  // 2) il foglio dell'ombra: buio vero bucato dalle luci, più i bordi scuri
  const m = LXMC; lxBuf(LXM, m, lw, lh);
  if (d > .02) {
    m.fillStyle = `rgba(4,5,22,${.4 * d})`; m.fillRect(0, 0, lw, lh);
    world(m); m.globalCompositeOperation = 'destination-out'; const hole = lxSpr('0,0,0', 'hole');
    for (const l of src) lxDraw(m, hole, l.x, l.y, l.r * 2.6 * fl(l), 1);
    if (sp && !sp.noSun) lxDraw(m, hole, sp.moon.x, sp.moon.y, 260, .7);
    if (fire) lxDraw(m, hole, FX, FY, 640, fire);
    if (q >= 2) for (const [x, y, a] of ffPos) lxDraw(m, hole, x, y, 46, a * .6);
    for (const u of s.units) if (!u.dead) lxDraw(m, hole, u.x, dyAt(u.x, u.y) - 30 * CS, 64 * CS, .5);   // la luna illumina un po' chi combatte: si vede sempre bene
    m.setTransform(1, 0, 0, 1, 0, 0); m.globalCompositeOperation = 'source-over';
  }
  m.globalAlpha = lerp(.32, .62, d) + .08 * S; m.drawImage(lxVig(), 0, 0, lw, lh); m.globalAlpha = 1;
  ctx.save(); ctx.drawImage(LXM, 0, 0, lw, lh, 0, 0, W, H); ctx.restore();
  // 3) il foglio della luce (si somma): sole, raggi, riflessi, aloni, luce sui personaggi, lucciole
  const a = LXAC; lxBuf(LXA, a, lw, lh); a.globalCompositeOperation = 'lighter';
  let sunS = null;
  if (sp && !sp.noSun && d < .95) {
    const ws = S * (1 - d), wd = (1 - S) * (1 - d), A = clamp01(ws + wd);
    if (A > .02) { const sx = (sp.day.x * wd + sp.set.x * ws) / A, sy = (sp.day.y * wd + sp.set.y * ws) / A, x = (sx - cam.x) * k * sc, y = (groundY + sy * k) * sc, col = S > .5 ? '255,150,80' : '255,220,150', M = Math.max(lw, lh);
      sunS = [(sx - cam.x) * k, groundY + sy * k, A];
      lxDraw(a, lxSpr(col, 'soft'), x, y, M * (.55 + .2 * S), (.18 + .14 * S) * A);
      if (q >= 2) { a.save(); a.translate(x, y); a.rotate(t * .025); const R = M * (.9 + .3 * S); a.globalAlpha = (.09 + .06 * S) * A * (.85 + .15 * Math.sin(t * .7)); a.drawImage(lxRays(), -R, -R, R * 2, R * 2); a.restore(); }
      if (q >= 3) { const cx = lw / 2, cy = lh / 2;                             // i riflessi dell'obiettivo, come piccole luci colorate
        for (const [f, r, c2, al] of [[.35, 13, '255,200,120', .18], [.6, 7, '150,220,255', .22], [.85, 20, '255,140,200', .1], [1.2, 9, '200,255,170', .16]]) lxDraw(a, lxSpr(c2, 'soft'), x + (cx - x) * f * 2, y + (cy - y) * f * 2, r, al * A); }
      if (q >= 2) { world(a); for (const p of DUST) lxDraw(a, lxSpr('255,225,160', 'soft'), ((p.x + t * 9) % 1300) - 100, p.y + Math.sin(t + p.p) * 7, 6, (.25 + .3 * Math.sin(t * 2 + p.p)) * wd * .9); a.setTransform(1, 0, 0, 1, 0, 0); } }   // pulviscolo dorato nel sole
  }
  world(a); const nl = .18 + .82 * d;
  for (const l of src) lxDraw(a, lxSpr(l.rgb, 'soft'), l.x, l.y, l.r * 2.2 * fl(l), .5 * nl);
  if (fire) lxDraw(a, lxSpr('255,130,40', 'soft'), FX, FY, 560, .5 * fire);
  if (q >= 2 && (d > .1 || fire)) for (const u of s.units) { if (u.dead) continue; const uy = dyAt(u.x, u.y) - 34 * CS; let best = 0, rgb = '255,170,90';   // luce calda su chi sta vicino a una luce
    for (const l of src) { const dd = Math.hypot(u.x - l.x, uy - l.y) / (l.r * 2.4); if (dd < 1 && 1 - dd > best) { best = 1 - dd; rgb = l.rgb; } }
    if (fire) { const dd = Math.hypot(u.x - FX, uy - FY) / 700; if (dd < 1 && (1 - dd) * fire > best) { best = (1 - dd) * fire; rgb = '255,150,60'; } }
    if (best > .03) lxDraw(a, lxSpr(rgb, 'soft'), u.x, uy, 46 * CS, best * (.35 + .25 * d)); }
  for (const [x, y, al, f] of ffPos) { lxDraw(a, lxSpr(f.c[0], 'soft'), x, y, 52 * f.sz, al * .65);
    if (q >= 3) { for (let j = 1; j <= 3; j++) { const [px, py] = lxFly(f, t - j * .07); lxDraw(a, lxSpr(f.c[0], 'soft'), px, py, (9 - j) * f.sz, al * .45 / j); }
      if (y > -40) lxDraw(a, lxSpr(f.c[0], 'soft'), x, Math.max(y + 26, 4), 44 * f.sz, al * .3, .32); } }
  ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.drawImage(LXA, 0, 0, lw, lh, 0, 0, W, H);
  // 4) i punti nitidi, a piena risoluzione: nuclei LED delle luci, del sole e delle lucciole
  if (sunS) lxDraw(ctx, lxSpr('255,240,200', 'led'), sunS[0], sunS[1], 90 * k + 40, .45 * sunS[2]);
  ctx.translate(-cam.x * k, groundY); ctx.scale(k, k);
  if (q >= 2) for (const l of src) lxDraw(ctx, lxSpr(l.rgb, 'led'), l.x, l.y, l.r * .7 * fl(l), .85 * nl);
  if (fire) lxDraw(ctx, lxSpr('255,190,90', 'led'), FX - 60, FY, 220, .6 * fire);
  for (const [x, y, al, f] of ffPos) lxDraw(ctx, lxSpr(f.c[1], 'led'), x, y, 16 * f.sz, al);
  ctx.restore();
  // farfalle di giorno (come prima)
  if (day > .1) { ctx.save(); ctx.translate(-cam.x * k, groundY); ctx.scale(k, k);
    for (let i = 0; i < 5; i++) { const f = FLIES[i], x = ((f.x + t * 22) % 1300) - 100, y = f.y - 30 + Math.sin(t * 1.3 + f.p) * 22, w = Math.abs(Math.sin(t * 14 + i)) * 6 + 1;
      ctx.globalAlpha = day; ctx.fillStyle = ['#ffd24a', '#ff8ac0', '#9ad8ff', '#ffffff', '#c8a0ff'][i]; ctx.beginPath(); ctx.ellipse(x - 2.5, y, w, 5, -.3, 0, 7); ctx.ellipse(x + 2.5, y, w, 5, .3, 0, 7); ctx.fill(); }
    ctx.restore(); }
}
