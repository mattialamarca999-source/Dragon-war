# Mondo 18 «Isola degli Oni»: dati di gioco (core.js), tabelle, disegni, marea e Perle di Ryūjin (game.html), traduzioni. Si può rilanciare.
# Novità per i mondi futuri:
#  - «mods» nel mondo: per ogni castello le meccaniche speciali. tide:{p:periodo in s, w:mezza larghezza dell'acqua, slow:rallentamento}, pearls:{every:ogni quanti s}
#  - «fury» nei personaggi: più è ferito più colpisce forte (dmg) e va veloce (spd)
#  - «call» nei boss: sotto una certa vita chiama altri personaggi (una volta sola)
#  - «air» nei personaggi: vola sopra l'acqua (la marea non lo rallenta) ma si può colpire anche corpo a corpo
#  - COMING in game.html: i prossimi mondi mostrati come «Coming soon»
import json
def patch(fn, reps):
    s = open(fn).read()
    for a, b, mark in reps:
        if any(m in s for m in (mark if isinstance(mark, list) else [mark])): continue
        assert s.count(a) == 1, (fn, a[:90], s.count(a))
        s = s.replace(a, b)
    open(fn, 'w').write(s)

# ---------------- core.js ----------------
patch('core.js', [
 ("    cobrabianco:{side:0,",
  "    reoni:      {side:0, cost:300, cd:12, hp:700, dmg:32, rate:1.5, range:30, spd:36, splash:40, fury:{dmg:1, spd:.6}},   // Mondo 18: il Re degli Oni, più è ferito più picchia forte e corre\n"
  "    cobrabianco:{side:0,", 'reoni:      {side:0'),
 ("    mowgli:     {side:1,",
  "    momotaro:   {side:1, hp:130, dmg:14, rate:1,   range:30,  spd:60,  bounty:55, splash:20},                    // Mondo 18: il ragazzo nato dalla pesca, colpo di katana su più cattivi\n"
  "    cane:       {side:1, hp:120, dmg:12, rate:.8,  range:24,  spd:95,  bounty:45},                               // il Cane: corre e morde\n"
  "    scimmiamomo:{side:1, hp:95,  dmg:10, rate:.7,  range:24,  spd:80,  bounty:45, dodge:.3},                     // la Scimmia: graffia veloce e schiva\n"
  "    fagiano:    {side:1, hp:80,  dmg:12, rate:1,   range:28,  spd:70,  bounty:50, air:1},                        // il Fagiano: vola sopra l'acqua, becca dall'alto\n"
  "    canere:     {side:1, hp:300, dmg:22, rate:.8,  range:26,  spd:85,  bounty:80},                               // (solo per il miniboss)\n"
  "    scimmiare:  {side:1, hp:280, dmg:20, rate:.7,  range:28,  spd:75,  bounty:80, dodge:.3},                     // (solo per il miniboss)\n"
  "    momotarore: {side:1, hp:300, dmg:24, rate:1,   range:34,  spd:46,  bounty:80, splash:40, call:{at:.5, ks:['cane', 'scimmiamomo', 'fagiano']}},   // (solo per il boss: a metà vita chiama i tre amici)\n"
  "    mowgli:     {side:1,", 'momotaro:   {side:1'),
 ("    pantera_nera:     {base:'bagheerare',",
  "    cane_momo:        {base:'canere',       name:'Il Cane di Momotaro',      semi:1, hp:1350, dmg:30, scale:1.5, tint:'#ffe8c0'},\n"
  "    scimmia_momo:     {base:'scimmiare',    name:'La Scimmia di Momotaro',   semi:1, hp:1300, dmg:30, scale:1.5, tint:'#ffd0a0'},\n"
  "    momotaro_re:      {base:'momotarore',   name:'Momotaro col Vessillo',    boss:1, hp:2900, dmg:46, scale:1.35, tint:'#ff8a9a'},\n"
  "    pantera_nera:     {base:'bagheerare',", 'cane_momo:'),
 ("'Il grande fico', 'Notte delle lucciole', 'Il Fiore Rosso']}\n  ];",
  "'Il grande fico', 'Notte delle lucciole', 'Il Fiore Rosso']},\n"
  "    {name:'Isola degli Oni', theme:'oni', n:12, pool:['momotaro', 'cane', 'scimmiamomo', 'fagiano', 'mowgli', 'bagheera', 'jack', 'cavnuvole', 'cavcristallo', 'merlino', 'principe', 'fata'], semis:{5:'cane_momo', 8:'scimmia_momo'}, boss:'momotaro_re', nights:[6],\n"
  "     mods:{1:{tide:{p:26, w:200, slow:.55}}, 2:{pearls:{every:12}}, 3:{tide:{p:22, w:260, slow:.45}}, 4:{tide:{p:26, w:200, slow:.55}, pearls:{every:12}}, 5:{tide:{p:26, w:200, slow:.55}}, 6:{tide:{p:24, w:280, slow:.5}},\n"
  "           7:{pearls:{every:7}}, 8:{pearls:{every:10}}, 9:{tide:{p:24, w:240, slow:.5}}, 10:{tide:{p:22, w:280, slow:.45}, pearls:{every:8}}, 11:{tide:{p:26, w:220, slow:.5}, pearls:{every:10}}},\n"
  "     names:['La spiaggia dello sbarco', 'Alta marea', 'Il dono del Re Drago', 'Onde sulla spiaggia', 'Perle nella risacca', 'Il Cane di Momotaro', 'Luna sull’isola', 'Il tesoro del Re Drago', 'La Scimmia sul tetto', 'Il volo del Fagiano', 'Il cancello degli Oni', 'Momotaro']}\n  ];", "theme:'oni'"),
 ("Array.from({length:16}, (_, i) => [i + 1,", "Array.from({length:17}, (_, i) => [i + 1,", "Array.from({length:17}"),
 ("[24, ['mowgli', 'bagheera', 'baloo', 'hathi']]];", "[24, ['mowgli', 'bagheera', 'baloo', 'hathi']], [28, ['momotaro', 'cane', 'scimmiamomo', 'fagiano']]];", "[28, ['momotaro'"),
 ("const BCOST = {mowgli:80,", "const BCOST = {momotaro:110, cane:80, scimmiamomo:80, fagiano:90, mowgli:80,", "BCOST = {momotaro:110"),
 ("semi:isSemi, night:!!(W.nights && W.nights.includes(c))};", "semi:isSemi, night:!!(W.nights && W.nights.includes(c)), mods:W.mods && W.mods[c] || null};", "mods:W.mods && W.mods[c]"),
 # meccaniche del campo: marea e perle (dopo l'elenco dei vivi)
 ("    const crocOnField = alive.some(u => u.k === 'coccodrillo' && u.side === 0);\n",
  "    const crocOnField = alive.some(u => u.k === 'coccodrillo' && u.side === 0);\n"
  "    const MOD = s.mp ? null : s.lv.mods, mid = (s.base.x + s.castle.x) / 2;   // Mondo 18: marea e Perle di Ryūjin\n"
  "    s.tideW = MOD && MOD.tide ? MOD.tide.w * (.5 - .5 * Math.cos(s.t * 2 * Math.PI / MOD.tide.p)) : 0;\n"
  "    if (MOD && MOD.pearls) {\n"
  "      s.pearls = s.pearls || []; if (s.pearlT == null) s.pearlT = 8;\n"
  "      if ((s.pearlT -= dt) <= 0) { s.pearlT = MOD.pearls.every; s.pearls.push({id:++s.id, x:mid - 180 + Math.random() * 360, y:.15 + Math.random() * .7, t:0}); s.ev.push({type:'pearlNew'}); }\n"
  "      for (const p of s.pearls) { p.t += dt; if (p.t > 16) { p.gone = 1; continue; }\n"
  "        for (const u of alive) if (!u.dead && Math.abs(u.x - p.x) < 20 && Math.abs(u.y - p.y) < .3) { u.pearlT = 10; p.gone = 1; s.ev.push({type:'pearl', x:p.x, y:p.y, side:u.side}); break; } }\n"
  "      s.pearls = s.pearls.filter(p => !p.gone);\n"
  "    }\n", 'MOD = s.mp ? null : s.lv.mods'),
 ("if (u.buffT > 0) u.buffT -= dt; if (u.smokeT > 0) u.smokeT -= dt;",
  "if (u.buffT > 0) u.buffT -= dt; if (u.smokeT > 0) u.smokeT -= dt; if (u.pearlT > 0) u.pearlT -= dt;", 'if (u.pearlT > 0) u.pearlT -= dt;'),
 ("      abilities(s, u, d, dir, alive);\n",
  "      abilities(s, u, d, dir, alive);\n"
  "      if (d.call && !u.called && u.hp < u.max * d.call.at) { u.called = 1; d.call.ks.forEach((k2, i) => { const m2 = addUnit(s, k2, u.x + (i - 1) * 18, (u.y + .3 * i) % 1); m2.side = u.side; }); s.ev.push({type:'call', x:u.x, y:u.y}); }   // il boss chiama gli amici\n", 'if (d.call && !u.called'),
 ("* (d.moon ? 1 + d.moon.dmg * s.night : 1);\n",
  "* (d.moon ? 1 + d.moon.dmg * s.night : 1) * (u.pearlT > 0 ? 1.4 : 1) * (d.fury ? 1 + d.fury.dmg * (1 - u.hp / u.max) : 1);\n", 'u.pearlT > 0 ? 1.4 : 1'),
 ("        u.x += dir * d.spd * u.spdMul * boost * slow * (d.moon ? 1 + d.moon.spd * s.night : 1) * dt;",
  "        const wet = s.tideW > 0 && !d.fly && !d.air && Math.abs(u.x - mid) < s.tideW ? MOD.tide.slow : 1;   // nell'acqua dell'alta marea si cammina piano\n"
  "        u.x += dir * d.spd * u.spdMul * boost * slow * wet * (u.pearlT > 0 ? 1.15 : 1) * (d.fury ? 1 + d.fury.spd * (1 - u.hp / u.max) : 1) * (d.moon ? 1 + d.moon.spd * s.night : 1) * dt;", 'const wet = s.tideW > 0'),
])

# ---------------- game.html ----------------
BLOCK = r'''/* ================= Mondo 18: Isola degli Oni ================= */
Object.assign(SHORT, {reoni:'Re degli Oni'}); Object.assign(NAMES, {reoni:'Re degli Oni'});
Object.assign(ROLE, {reoni:'Più è ferito, più picchia forte e corre veloce: la Furia degli Oni.'});
Object.assign(UNLOCK, {reoni:{w:17, kind:'boss', noEgg:1, txt:'Batti il boss della mappa 18'}});
Object.assign(LINES, {reoni:['Oni!', 'Il tesoro resta qui!']});
Object.assign(RAR, {reoni:3}); VILLAINS.add('reoni');
GOODS.push('momotaro', 'cane', 'scimmiamomo', 'fagiano');
Object.assign(WNAME, {momotaro:'Momotaro', cane:'Il Cane', scimmiamomo:'La Scimmia', fagiano:'Il Fagiano'});
Object.assign(WTXT, {momotaro:'Il ragazzo nato dalla pesca: un colpo di katana prende più cattivi.', cane:'Corre velocissimo e morde.', scimmiamomo:'Graffia in fretta e schiva i colpi.', fagiano:'Vola sopra l’acqua e becca dall’alto.'});
Object.assign(VOICE, {reoni:.6, momotaro:1.2, cane:1.3, scimmiamomo:1.4, fagiano:1.5, momotarore:1.1, canere:1.1, scimmiare:1.2});
Object.assign(VALIAS, {reoni:'orco', momotaro:'robinhood', momotarore:'robinhood', cane:'lupo', canere:'lupo', scimmiamomo:'pollicino', scimmiare:'pollicino', fagiano:'arciere'});
THEMES.oni = {sky:'#6ab0e8', amt:.42, hill1:'#3a6a4a', hill2:'#4a7a44', tree:'#2a5a3a', tt:'palm', g1:'#e8d8a8', g2:'#5a8a4a', stone:'#6a6260', roof:['#d8303a', '#2a3a4a'], fx:'sparkle', card:['#7a1a2a', '#f8b8c8']};
OBST.oni = ['torii', 'sakura', 'onsen']; ROADC.oni = '#d8c8a0';
OBST_BY_NAME.unshift([/drago|perle|tesoro/i, 'torii'], [/sbarco|marea|onde|fagiano/i, 'torii'], [/cane|scimmia|cancello/i, 'sakura'], [/luna/i, 'onsen']);
MUS_FILE.w18 = 'w18'; MUS_BOSS.w18 = 'w18b';                               // l'isola degli oni: "House of the Shogun's Son" (jomusic, CC0); Momotaro: "Boss Koto" (G_P, CC0)
{ const NAT = {reoni:171, momotaro:114, momotarore:139, cane:67, canere:69, scimmiamomo:71, scimmiare:71, fagiano:97};   // altezza vera dei disegni nuovi
  Object.assign(HEIGHT, {reoni:128, momotaro:88, momotarore:100, cane:56, canere:58, scimmiamomo:60, scimmiare:62, fagiano:76});
  Object.assign(SC, {reoni:.9, momotaro:.86, momotarore:.88, cane:.9, canere:.92, scimmiamomo:.9, scimmiare:.92, fagiano:.9});
  for (const k of Object.keys(NAT)) DRAW[k] = o => { const s2 = HEIGHT[k] / NAT[k]; ctx.save(); ctx.scale(s2, s2); NG.draw(k === 'reoni' && o && o.hpf != null && o.hpf < .5 ? 'reonifuria' : k, ctx, o || {}); ctx.restore(); }; }   // il Re degli Oni sotto metà vita va in Furia
GSETS.mondo18 = ['reoni', 'momotaro', 'cane', 'scimmiamomo', 'fagiano', 'canere', 'scimmiare', 'momotarore'];
function drawTide() {                                                     // l'acqua dell'alta marea in mezzo al campo
  const w2 = s.tideW || 0; if (w2 < 4) return;
  const mid = (s.base.x + s.castle.x) / 2, x0 = mid - w2, x1 = mid + w2, Y0 = -.02, Y1 = 1.06, ya = Y0 * DY, yb = Y1 * DY, n = 18;   // l'acqua copre tutta la profondità del campo
  const side = (x, sg) => { const P = []; for (let i = 0; i <= n; i++) { const f = Y0 + (Y1 - Y0) * i / n, X = x + sg * (Math.sin(time * 1.6 + i * .55) * 7 + Math.sin(i * .9) * 12); P.push([X, f * DY]); } return P; };
  const A = side(x0, -1), B = side(x1, 1), pth = new Path2D(); [...A, ...B.slice().reverse()].forEach(([X, Y], i) => i ? pth.lineTo(X, Y) : pth.moveTo(X, Y)); pth.closePath();
  const line = P => { const q = new Path2D(); q.moveTo(P[0][0], P[0][1]); for (let i = 1; i < P.length - 1; i++) q.quadraticCurveTo(P[i][0], P[i][1], (P[i][0] + P[i + 1][0]) / 2, (P[i][1] + P[i + 1][1]) / 2); return q; };   // bordo morbido, come schiuma
  ctx.save(); const gr = ctx.createLinearGradient(0, ya, 0, yb); gr.addColorStop(0, `rgba(110,200,235,${.72 - .15 * L.dark})`); gr.addColorStop(1, `rgba(40,120,180,${.82 - .15 * L.dark})`);
  ctx.fillStyle = gr; ctx.fill(pth); ctx.clip(pth); ctx.strokeStyle = 'rgba(255,255,255,.5)'; ctx.lineWidth = 2;
  for (let i = 0; i < 16; i++) { const f = Y0 + (Y1 - Y0) * (i + .5) / 16, xx = x0 + ((time * 22 + i * 97) % (x1 - x0 + 60)) - 30, Y = f * DY; ctx.beginPath(); ctx.moveTo(xx - 14, Y); ctx.quadraticCurveTo(xx, Y - 4, xx + 14, Y); ctx.stroke(); }
  ctx.restore(); ctx.strokeStyle = 'rgba(255,255,255,.45)'; ctx.lineWidth = 12; ctx.stroke(line(A)); ctx.stroke(line(B)); ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.lineWidth = 4; ctx.stroke(line(A)); ctx.stroke(line(B));
  for (const u of s.units) if (!u.dead && Math.abs(u.x - mid) < w2 && !DW.U[u.k].fly && !DW.U[u.k].air) { const Y = dyAt(u.x, u.y), r = 16 + Math.sin(time * 4 + u.id) * 3; ctx.strokeStyle = 'rgba(255,255,255,.7)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(u.x, Y, r * 1.4, r * .35, 0, 0, 7); ctx.stroke(); }   // cerchi nell'acqua intorno a chi cammina
  if (!s._toldTide && w2 > 60) { s._toldTide = 1; toastOnce('Alta marea! Nell’acqua tutti camminano piano'); }
}
function drawPearls() {                                                   // le Perle di Ryūjin portate dalle onde
  if (!s.pearls || !s.pearls.length) return;
  for (const p of s.pearls) {
    const y = dyAt(p.x, p.y) - 8 - Math.abs(Math.sin(time * 3 + p.id)) * 6, a = p.t > 13 ? (16 - p.t) / 3 : Math.min(1, p.t * 3);
    ctx.save(); ctx.globalAlpha = a; ctx.globalCompositeOperation = 'lighter'; glow(ctx, p.x, y, 44, '170,230,255', .9); ctx.globalCompositeOperation = 'source-over';
    const gr = ctx.createRadialGradient(p.x - 4, y - 4, 1, p.x, y, 13); gr.addColorStop(0, '#ffffff'); gr.addColorStop(.5, '#d8f0ff'); gr.addColorStop(1, '#7ab0e0');
    ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(p.x, y, 12, 0, 7); ctx.fill(); ctx.strokeStyle = '#1c1a24'; ctx.lineWidth = 2.2; ctx.stroke();
    ctx.strokeStyle = `rgba(200,240,255,${.6 * (1 - (time * 1.2 + p.id) % 1)})`; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(p.x, y, 14 + ((time * 1.2 + p.id) % 1) * 14, 0, 7); ctx.stroke();   // onda che si allarga
    if (Math.sin(time * 5 + p.id) > .6) { ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.moveTo(p.x + 9, y - 12); ctx.lineTo(p.x + 10, y - 9); ctx.lineTo(p.x + 13, y - 8); ctx.lineTo(p.x + 10, y - 7); ctx.lineTo(p.x + 9, y - 4); ctx.lineTo(p.x + 8, y - 7); ctx.lineTo(p.x + 5, y - 8); ctx.lineTo(p.x + 8, y - 9); ctx.fill(); }
    ctx.restore();
  }
  if (!s._toldPearl) { s._toldPearl = 1; toastOnce('Perla di Ryūjin! Chi la prende per primo diventa più forte'); }
}
'''
patch('game.html', [
 ("new ResizeObserver(resize).observe($('stage'));", BLOCK + "new ResizeObserver(resize).observe($('stage'));", 'Mondo 18: Isola degli Oni ====='),
 ("if (inStory && SLIDES[story.i].book) drawBook(); drawUnits(dt);",
  "if (inStory && SLIDES[story.i].book) drawBook(); if (running || ended) { drawTide(); drawPearls(); } drawUnits(dt);", 'drawTide(); drawPearls();'),
 ("    if (el && el.tint && !u.dead) { ctx.globalCompositeOperation = 'lighter'; glow(ctx, 0, -50, 75, hexRgb(el.tint), .35 + .15 * Math.sin(time * 4)); ctx.globalCompositeOperation = 'source-over'; }   // aura del boss\n",
  "    if (el && el.tint && !u.dead) { ctx.globalCompositeOperation = 'lighter'; glow(ctx, 0, -50, 75, hexRgb(el.tint), .35 + .15 * Math.sin(time * 4)); ctx.globalCompositeOperation = 'source-over'; }   // aura del boss\n"
  "    if (u.k === 'reoni' && !u.dead && u.hp < u.max * .5) { ctx.globalCompositeOperation = 'lighter'; glow(ctx, 0, -60, 90, '255,90,30', .5 + .25 * Math.sin(time * 9)); ctx.globalCompositeOperation = 'source-over'; }   // la Furia degli Oni\n"
  "    if (u.pearlT > 0 && !u.dead) { ctx.globalCompositeOperation = 'lighter'; glow(ctx, 0, -45, 60, '160,225,255', .45 + .2 * Math.sin(time * 6)); ctx.globalCompositeOperation = 'source-over'; }   // ha preso una Perla di Ryūjin\n", 'ha preso una Perla di Ryūjin'),
  ("    else if (e.type === 'summon' || e.type === 'release')",
  "    else if (e.type === 'call') { toast('Momotaro chiama i suoi amici!'); shake = Math.max(shake, 8); for (let i = 0; i < 18; i++) particles.push({x:e.x + (Math.random() - .5) * 60, y:dyAt(e.x, e.y) - 30 - Math.random() * 50, vx:(Math.random() - .5) * 120, vy:-40 - Math.random() * 60, life:1, max:1, kind:'puff', r:7 + Math.random() * 6}); }   // seconda fase del boss\n"
  "    else if (e.type === 'pearl') for (let i = 0; i < 10; i++) particles.push({x:e.x + (Math.random() - .5) * 20, y:dyAt(e.x, e.y) - 10 - Math.random() * 20, vx:(Math.random() - .5) * 60, vy:-30 - Math.random() * 40, life:.7, max:.7, kind:'puff', r:4 + Math.random() * 4});\n"
  "    else if (e.type === 'summon' || e.type === 'release')", "e.type === 'call'"),
  ("    case 'summon': case 'curse':", "    case 'call': sfx('vroar2', {vol:.8, rate:1.2}); break;\n    case 'pearl': sfx('gem', {vol:.6, gap:.2}); break;\n    case 'summon': case 'curse':", "case 'call': sfx("),
 # «Coming soon»: i prossimi mondi col nome
 ("  const cs = document.createElement('button'); cs.className = 'wCard lock soon';   // il prossimo mondo: in arrivo\n",
  "  for (const [i, nm] of COMING.entries()) {                                // i prossimi mondi: «Coming soon» col nome\n"
  "  const cs = document.createElement('button'); cs.className = 'wCard lock soon';   // il prossimo mondo: in arrivo\n", 'for (const [i, nm] of COMING.entries())'),
 ("<b>Mondo ${DW.WORLDS.length + 1} · Coming soon</b>", "<b>${DW.WORLDS.length + 1 + i}. ${nm} · Coming soon</b>", "${DW.WORLDS.length + 1 + i}. ${nm}"),
 ("  cs.onclick = () => toast('Il drago ci sta lavorando. Torna presto!');\n  list.appendChild(cs);\n",
  "  cs.onclick = () => toast('Il drago ci sta lavorando. Torna presto!');\n  list.appendChild(cs);\n  }\n", "list.appendChild(cs);\n  }\n"),
 ("function showWorlds() {", "const COMING = ['Foresta di Sherwood', 'Mondo di Oz'];                    // i prossimi mondi: quando ne esce uno, si toglie da qui e se ne aggiunge un altro\nfunction showWorlds() {", "const COMING = ["),
 # sulla mappa: marea e perle si vedono sul castello
 ("${lv.night ? '<svg class=\"moon\" viewBox=\"0 0 24 24\"><path d=\"M15 3a9 9 0 1 0 6 15A8 8 0 0 1 15 3Z\" fill=\"#fff2a8\" stroke=\"#1c1a24\" stroke-width=\"1.6\"/></svg>' : ''}",
  "${lv.night ? '<svg class=\"moon\" viewBox=\"0 0 24 24\"><path d=\"M15 3a9 9 0 1 0 6 15A8 8 0 0 1 15 3Z\" fill=\"#fff2a8\" stroke=\"#1c1a24\" stroke-width=\"1.6\"/></svg>' : ''}"
  "${lv.mods ? `<span class=\"mods\">${lv.mods.tide ? '<svg viewBox=\"0 0 24 24\"><path d=\"M2 14c3-4 5-4 8 0s5 4 8 0 3-2 4-1v7H2z\" fill=\"#5ab4e0\" stroke=\"#1c1a24\" stroke-width=\"1.6\"/></svg>' : ''}${lv.mods.pearls ? '<svg viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#e8f6ff\" stroke=\"#1c1a24\" stroke-width=\"1.6\"/><circle cx=\"9.5\" cy=\"9.5\" r=\"2.4\" fill=\"#fff\"/></svg>' : ''}</span>` : ''}", 'class="mods"'),
 (".node.night .disc{", ".node .disc{position:relative}.node .disc .mods{position:absolute;bottom:-8px;left:-10px;display:flex;gap:1px}.node .disc .mods svg{width:22px;height:22px}\n.node.night .disc{", '.node .disc .mods'),
])

# ---------------- traduzioni ----------------
TR = {
 'Isola degli Oni': ('Oni Island', 'Isla de los Oni'), 'Re degli Oni': ('Oni King', 'Rey de los Oni'),
 'Più è ferito, più picchia forte e corre veloce: la Furia degli Oni.': ('The more he is hurt, the harder he hits and the faster he runs: the Oni Fury.', 'Cuanto más herido está, más fuerte golpea y más rápido corre: la Furia Oni.'),
 'Batti il boss della mappa 18': ('Beat the boss of map 18', 'Vence al jefe del mapa 18'),
 'Oni!': ('Oni!', '¡Oni!'), 'Il tesoro resta qui!': ('The treasure stays here!', '¡El tesoro se queda aquí!'),
 'Momotaro': ('Momotaro', 'Momotaro'), 'Il Cane': ('The Dog', 'El Perro'), 'La Scimmia': ('The Monkey', 'El Mono'), 'Il Fagiano': ('The Pheasant', 'El Faisán'),
 'Il ragazzo nato dalla pesca: un colpo di katana prende più cattivi.': ('The boy born from a peach: one katana slash hits several villains.', 'El niño nacido de un melocotón: un tajo de katana alcanza a varios villanos.'),
 'Corre velocissimo e morde.': ('Runs super fast and bites.', 'Corre rapidísimo y muerde.'), 'Graffia in fretta e schiva i colpi.': ('Scratches fast and dodges hits.', 'Araña rápido y esquiva los golpes.'),
 'Vola sopra l’acqua e becca dall’alto.': ('Flies over the water and pecks from above.', 'Vuela sobre el agua y picotea desde arriba.'),
 'Il Cane di Momotaro': ('Momotaro’s Dog', 'El Perro de Momotaro'), 'La Scimmia di Momotaro': ('Momotaro’s Monkey', 'El Mono de Momotaro'), 'Momotaro col Vessillo': ('Momotaro with the Banner', 'Momotaro con el Estandarte'),
 'La spiaggia dello sbarco': ('The Landing Beach', 'La playa del desembarco'), 'Alta marea': ('High Tide', 'Marea alta'), 'Il dono del Re Drago': ('The Dragon King’s Gift', 'El regalo del Rey Dragón'),
 'Onde sulla spiaggia': ('Waves on the Beach', 'Olas en la playa'), 'Perle nella risacca': ('Pearls in the Surf', 'Perlas en la resaca'), 'Luna sull’isola': ('Moon over the Island', 'Luna sobre la isla'),
 'Il tesoro del Re Drago': ('The Dragon King’s Treasure', 'El tesoro del Rey Dragón'), 'La Scimmia sul tetto': ('The Monkey on the Roof', 'El mono en el tejado'), 'Il volo del Fagiano': ('The Pheasant’s Flight', 'El vuelo del faisán'),
 'Il cancello degli Oni': ('The Oni Gate', 'La puerta de los Oni'),
 'Alta marea! Nell’acqua tutti camminano piano': ('High tide! Everyone walks slowly in the water', '¡Marea alta! En el agua todos caminan despacio'),
 'Perla di Ryūjin! Chi la prende per primo diventa più forte': ('Ryūjin Pearl! Whoever grabs it first gets stronger', '¡Perla de Ryūjin! Quien la coja primero se vuelve más fuerte'),
 'Momotaro chiama i suoi amici!': ('Momotaro calls his friends!', '¡Momotaro llama a sus amigos!'),
 'Foresta di Sherwood': ('Sherwood Forest', 'Bosque de Sherwood'), 'Mondo di Oz': ('Land of Oz', 'Mundo de Oz'),
}
for i, l in enumerate(['en', 'es']):
    d = json.load(open(f'i18n/{l}.json'))
    for k, v in TR.items(): d[k] = v[i]
    open(f'i18n/{l}.json', 'w').write(json.dumps(d, ensure_ascii=False, separators=(',', ':')))
print('ok')
