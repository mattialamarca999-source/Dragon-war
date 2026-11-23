// ---------- gruppo 15: i buoni (5) ----------
function rennaD(o) {                                            // la Renna: corna enormi ramificate, collare rosso coi campanelli d'oro, gualdrappa rossa col bordo dorato, pancia bianca, carica a testa bassa
  const fur = '#a8784a', fd = dk(fur, .25), bel = '#f2e6d4', u = o.u, m = o.mood, w = o.walking ? 1 : 0, rush = u < 0 ? -u : 0, low = m === 2 ? 1 : 0, hurt = m === 4;
  const b = w ? -Math.abs(Math.sin(o.ph)) * 3 : Math.sin(o.t * 2) * .6;
  g.save(); g.translate(rush * 10, b); g.rotate(rush * .06);
  const hoof = f => V(SP(`M${f[0] - 2.6},${f[1] - 3} L${f[0] + 2.6},${f[1] - 3} L${f[0] + 3.4},${f[1] + 1} L${f[0] - 3.4},${f[1] + 1}Z`), '#3a2a20', f[0], f[1] - 1, 3, 1);
  for (const [x, off] of [[-18, 0], [12, Math.PI]]) hoof(legB(x, -36, 18, 18, 3.6, 2.6, 2.2, o, off, fd, .6));
  L(SP(`M-26,-44 q-6,-4 ${-4 + Math.sin(o.t * 4)},-10`), '#fafaf6', 4);
  const body = SP('M-28,-46 Q-28,-60 -12,-60 L14,-60 Q28,-58 26,-44 Q24,-32 10,-32 L-16,-32 Q-28,-34 -28,-46Z'); V(body, fur, 0, -46, 26);
  g.save(); g.clip(body); F(E(0, -32, 24, 6), bel); g.restore();
  const sd = SP('M-12,-60 L10,-60 L12,-44 Q0,-40 -14,-44Z'); V(sd, '#c8302a', -1, -52, 12, 1.4); L(SP('M-14,-45 Q0,-41 12,-45'), '#f2c43a', 2); L(SP('M-12,-58 L-14,-45 M10,-58 L12,-45'), '#f2c43a', 1.4);
  for (const [x, off] of [[-12, Math.PI], [18, 0]]) hoof(legB(x, -36, 18, 18, 3.8, 2.8, 2.4, o, off, fur, .6));
  const ha = low ? .7 : rush ? .9 : hurt ? -.3 : Math.sin(o.t * 1.6) * .05;
  g.save(); g.translate(22, -56); g.rotate(ha);
  V(SP('M-6,4 Q-2,-10 6,-18 L14,-14 Q8,-4 6,8Z'), fur, 4, -4, 10, 1.6);
  L(SP('M-4,6 Q4,2 8,6'), '#c8302a', 4); for (const x of [-1, 3, 7]) { V(E(x, 8, 1.8, 1.8), '#f2c43a', x, 8, 1.8, .7); F(E(x, 9, .6, .5), INK); }
  g.save(); g.translate(10, -20);
  for (const s of [-1, 1]) { const c = s < 0 ? dk('#e8d8b0', .15) : '#e8d8b0'; const ant = `M${s * 2},-6 Q${-2 + s * 3},-20 ${-10 + s * 4},-30 M${-3 + s * 3},-14 L${4 + s * 3},-22 M${-6 + s * 3.4},-22 L${-2 + s * 3},-32 M${-8 + s * 3.6},-26 L${-16 + s * 4},-30 M${s * 1},-9 L${-8 + s * 2},-12`; L(SP(ant), dk(c, .6), 4.6); L(SP(ant), c, 2.8); }
  V(PL([-4, -6, -9, -10, -3, -3]), fur, -5, -6, 4, 1.2); F(PL([-4.6, -6, -7.6, -8.6, -3.6, -4]), '#f4b8a8');
  V(SP('M-6,-4 Q-4,-10 4,-9 Q12,-8 16,-3 Q18,2 12,3 Q2,4 -4,2 Q-7,0 -6,-4Z'), fur, 4, -3, 11);
  V(SP('M8,-4 Q16,-4 17,0 Q15,3 9,2Z'), bel, 12, -1, 5, 1.1); V(E(16.6, -1.6, 2, 1.8), '#3a2420', 16.6, -1.6, 2, .8);
  eyesX(o, fur, [[4, -5, 2.2, -1]], 'round', '#3a2420'); browsX(o, [[4, -8.4, 4.6, -1]], fd, 1.4, 'thick');
  if (m === 3) mouthX(o, 12, 2, 4, 'oh');
  g.restore(); g.restore();
  if (rush) for (let i = 0; i < 4; i++) { const k = (o.t * 2 + i / 4) % 1; g.save(); g.globalAlpha = (1 - k) * .6; F(E(-28 - k * 22, -4 - k * 6, 4 + k * 5, 2 + k * 2), '#e8f0f8'); g.restore(); }
  g.restore();
}

function fiammiferaiaD(o) {                                     // la Piccola Fiammiferaia: bambina infreddolita, scialle marrone rattoppato, fazzoletto in testa, piedi nudi nella neve, fiammifero acceso che scalda e cura; quando lo accende appare il caminetto
  const shawl = '#8a5a3a', dr = '#6a7a9a', sk = '#f6d6c0', hair = '#e8b860', u = o.u, m = o.mood, w = o.walking ? 1 : 0, cast = m === 2 || m === 3 || u !== 0;
  const b = bobOf(o, 1.6), shiver = Math.sin(o.t * 30) * (cast ? 0 : .4);
  for (let i = 0; i < 5; i++) { const k = (o.t * .4 + i / 5) % 1; F(E(-20 + i * 10 + Math.sin(o.t + i) * 4, -80 + k * 80, 1.2, 1.2), 'rgba(255,255,255,.9)'); }
  g.save(); g.translate(shiver, b);
  const foot = f => V(E(f[0] + 2, f[1] - 1, 3.2, 1.6), sk, f[0] + 2, f[1] - 1, 3, .9);
  foot(legB(-2, -28, 13, 13, 2.2, 1.9, 1.7, o, Math.PI, dk(sk, .1), .5)); foot(legB(2, -28, 13, 13, 2.4, 2, 1.8, o, 0, sk, .5));
  V(SP('M-6,-52 Q0,-54 6,-52 L11,-25 L7.4,-22 L3.8,-25 L.2,-22 L-3.4,-25 L-7,-22 L-11,-25Z'), dr, 0, -38, 16, 1.4);
  const sh = SP('M-9,-54 Q0,-58 9,-54 L12,-38 L4,-34 L0,-40 L-4,-34 L-12,-38Z'); V(sh, shawl, 0, -46, 14, 1.6); g.save(); g.clip(sh); const pt = SP('M-8,-44 L-3,-45 L-3,-40 L-8,-39Z'); F(pt, '#a87a4a'); L(pt, dk(shawl, .5), .6); g.restore();
  g.save(); g.translate(1, -62); g.rotate(m === 4 ? -.24 : Math.sin(o.t * 1.4) * .04);
  const face = E(1, 0, 8.2, 8.4); V(face, sk, 1, 0, 9); F(E(-2.6, 3, 2, 1.4), 'rgba(240,100,110,.5)'); F(E(7, 2.6, 1.4, 1), 'rgba(240,100,110,.5)');
  V(SP('M-7,3 Q-9,-4 -6,-6 L-5,4Z'), hair, -6, -1, 3, 1);
  eyesX(o, sk, [[-1, -.4, 2.4, 1], [5.4, -.6, 2, -1]], 'almond', '#5a8ac8'); browsX(o, [[-1, -4, 4, 1], [5.4, -4.2, 3.4, -1]], dk(hair, .3), 1, 'arch');
  F(E(7.6, 2, 1.2, 1), dk(sk, .15)); mouthX(o, 3, 4.6, 3.6, cast ? 'smile' : 'oh');
  V(SP('M-9,4 Q-11,-10 1,-11 Q12,-10 11,0 Q10,6 8,6 Q6,-5 1,-6 Q-5,-5 -6,6Z'), '#8a3a4a', 1, -4, 11, 1.4); V(SP('M8,5 L12,10 L9,10Z'), '#8a3a4a', 10, 8, 2, .8);
  g.restore();
  const hp = cast ? [12, -62] : [9, -46];
  armTo(5, -50, hp[0], hp[1], 8, 7, 2.2, 1.9, 1.6, shawl, -1);
  g.save(); g.translate(hp[0], hp[1]); g.rotate(-.3); L(SP('M0,2 L0,-9'), '#e8d8b0', 1.4); F(E(0, -9.4, 1.3, 1.6), '#c8302a');
  const fh = 3 + Math.sin(o.t * 14) * .8 + (cast ? 3 : 0); glowB(0, -12, cast ? 30 : 14, 'rgba(255,190,90,.6)'); F(SP(`M-1.8,-10 Q0,${-10 - fh * 2} 1.8,-10Z`), '#ffb030', '#ff8a20'); F(SP(`M-.8,-10 Q0,${-10 - fh * 1.2} .8,-10Z`), '#fff4c0'); g.restore();
  V(E(hp[0], hp[1], 1.8, 1.8), sk, hp[0], hp[1], 1.8, .9);
  if (cast) { g.save(); g.globalAlpha = .45; V(SP(`M${hp[0] + 6},${hp[1] - 20} L${hp[0] + 26},${hp[1] - 20} L${hp[0] + 26},${hp[1] + 2} L${hp[0] + 6},${hp[1] + 2}Z`), '#c8604a', hp[0] + 16, hp[1] - 9, 12, 1); F(SP(`M${hp[0] + 10},${hp[1] + 2} Q${hp[0] + 16},${hp[1] - 14 + Math.sin(o.t * 10) * 2} ${hp[0] + 22},${hp[1] + 2}Z`), '#ffb030'); g.restore(); }
  g.restore();
}

function pupazzonevD(o) {                                       // il Soldato di neve: pupazzo a tre palle col secchio in testa come elmo, naso di carota, occhi e bottoni di carbone, sciarpa rossa, braccia di rametti, scopa per arma
  const sn = '#f4f8ff', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, hit = u < 0 ? -u : 0;
  const b = w ? -Math.abs(Math.sin(o.ph)) * 3 : 0, sway = w ? Math.sin(o.ph) * .06 : Math.sin(o.t * 2) * .02;
  g.save(); g.translate(0, b); g.rotate(sway);
  V(E(0, -12, 14, 12), sn, 0, -12, 14, 1.8); for (const y of [-14, -6]) V(E(3, y, 1.6, 1.6), '#2a2a34', 3, y, 1.6, .6);
  const ta = up ? -.4 : 2.6 + Math.sin(o.t * 2) * .1; L(SP(`M-6,-36 l${Math.cos(ta) * 14},${Math.sin(ta) * 14} m${-Math.cos(ta) * 5},${-Math.sin(ta) * 5} l${Math.cos(ta - .6) * 5},${Math.sin(ta - .6) * 5}`), '#6a4a2a', 2);
  V(E(0, -32, 10.4, 9.4), sn, 0, -32, 10, 1.6); for (const y of [-34, -28]) V(E(3, y, 1.4, 1.4), '#2a2a34', 3, y, 1.4, .6);
  const sw = Math.sin(o.t * 3) * 3 + (w ? 3 : 0); V(SP(`M-8,-40 Q0,-36 8,-40 L8,-36 Q0,-32 -8,-36Z M-6,-38 L${-10 - sw},-26 L${-6 - sw},-25 L-3,-36Z`), '#d02a2a', 0, -36, 8, 1.2); for (const x of [-9, -7]) L(SP(`M${x - sw},-26 l0,2`), '#fafaf6', .8);
  g.save(); g.translate(1, -48); g.rotate(m === 4 ? -.24 : Math.sin(o.t * 2.4) * .04);
  V(E(0, 0, 8.4, 8), sn, 0, 0, 8, 1.6);
  if (m === 4) { L(SP('M-1,-3 l3,2 l-3,2 M5,-3 l-3,2 l3,2'), '#2a2a34', 1.4); }
  else { for (const [x, y] of [[0, -2], [5, -2.2]]) V(E(x, y, 1.6, 1.6), '#2a2a34', x, y, 1.6, .5); if (m >= 1 && m <= 3) L(SP('M-2,-5 L2,-4 M3.4,-4.2 L7,-5'), '#2a2a34', 1.2); }
  V(SP('M3,0 L13,1.6 L3,3Z'), '#f2802a', 6, 1.4, 5, 1); L(SP('M6,.6 l0,1.6 M9,1 l0,1'), dk('#f2802a', .3), .6);
  for (let i = 0; i < 5; i++) { const a = .4 + i * .3; F(E(Math.cos(a) * 5 - 1, Math.sin(a) * 4 + 3, .7, .7), '#2a2a34'); }
  g.save(); g.rotate(-.12); V(SP('M-7,-5 L-6,-14 L7,-14 L8,-5Z'), '#8a9aa8', 0, -9, 8, 1.4); L(SP('M-6,-12 L7,-12'), dk('#8a9aa8', .3), 1); V(SP('M-9,-5 L10,-5 L10,-3 L-9,-3Z'), '#6a7a88', 0, -4, 9, 1); L(SP('M-7,-6 Q-10,2 -6,4'), '#5a5a6a', .9); g.restore();
  g.restore();
  const hp = up ? [4, -58] : hit ? [16, -40] : [12, -36], ra = up ? -1.5 : hit ? .3 : .5;
  L(SP(`M6,-36 L${hp[0]},${hp[1]}`), '#6a4a2a', 2); for (const t of [-.6, .6]) L(SP(`M${hp[0]},${hp[1]} l${Math.cos(ra + t) * 3},${Math.sin(ra + t) * 3}`), '#6a4a2a', 1.2);
  g.save(); g.translate(hp[0], hp[1]); g.rotate(up ? -.5 : hit ? 1.5 : .2); L(SP('M0,10 L0,-24'), '#8a5a2a', 2.4); const br = SP('M-5,-24 L5,-24 L8,-38 L-8,-38Z'); V(br, '#d8b048', 0, -31, 8, 1.2); g.save(); g.clip(br); for (let x = -8; x < 9; x += 2) L(SP(`M${x * .6},-24 L${x},-38`), '#a8802a', .8); g.restore(); L(SP('M-5,-26 L5,-26'), '#c8302a', 1.4); g.restore();
  g.restore();
}

function cavcristalloD(o) {                                     // il Cavaliere di Cristallo: armatura di vetro azzurro a facce che luccica, elmo con la cresta di schegge, spada e scudo di cristallo; i colpi da lontano gli rimbalzano
  const cr = '#9ad8f2', cr2 = '#5ab0e0', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, cut = u < 0 ? -u : 0;
  const b = bobOf(o, 2.2);
  const facet = (p, col, cx, cy, r) => { V(p, col, cx, cy, r, 1.8); g.save(); g.clip(p); g.globalAlpha = .55; L(SP(`M${cx - r},${cy - r * .6} L${cx},${cy} L${cx + r},${cy - r * .8} M${cx},${cy} L${cx - r * .4},${cy + r}`), '#ffffff', 1); g.restore(); };
  const sp = (x, y, k) => { const a = (o.t * 2 + k) % 3; if (a < .4) { g.save(); g.globalAlpha = 1 - a / .4; F(SP(`M${x},${y - 4} L${x + 1},${y - 1} L${x + 4},${y} L${x + 1},${y + 1} L${x},${y + 4} L${x - 1},${y + 1} L${x - 4},${y} L${x - 1},${y - 1}Z`), '#ffffff', '#bff4ff'); g.restore(); } };
  g.save(); g.translate(0, b);
  const boot = (f, col) => facet(SP(`M${f[0] - 4},${f[1] - 6} L${f[0] + 5},${f[1] - 6} L${f[0] + 10},${f[1] + 1} L${f[0] - 4},${f[1] + 1}Z`), col, f[0] + 2, f[1] - 3, 6);
  boot(legB(-4, -46, 21, 20, 5, 4, 3.4, o, Math.PI, cr2, .5), cr2);
  const tor = SP('M-12,-86 L12,-86 L14,-66 L9,-50 L-9,-50 L-14,-66Z'); facet(tor, cr, 0, -68, 18);
  L(SP('M0,-86 L0,-50 M-12,-70 L12,-70'), 'rgba(40,110,170,.5)', 1.2); F(SP('M-11,-52 L11,-52 L11,-48 L-11,-48Z'), '#2a6aa8');
  facet(SP('M-11,-50 L11,-50 L13,-38 L-13,-38Z'), cr2, 0, -44, 12);
  boot(legB(4, -46, 21, 20, 5.2, 4.2, 3.6, o, 0, cr, .5), cr);
  g.save(); g.translate(2, -98); g.rotate(m === 4 ? -.2 : Math.sin(o.t * 1.6) * .03);
  const hm = SP('M-9,8 L-10,-6 L-4,-13 L6,-13 L11,-6 L10,8Z'); facet(hm, cr, 0, -2, 12);
  F(SP('M-1,-3 L11,-4 L11,0 L-1,1Z'), '#1a3a5a'); glowB(6, -1.6, 10, m >= 2 ? 'rgba(160,240,255,.8)' : 'rgba(160,240,255,.45)'); F(E(4, -1.6, 1.4, 1), '#dff8ff'); F(E(8, -1.8, 1.2, .9), '#dff8ff');
  for (let i = 0; i < 5; i++) { const x = -6 + i * 3, hh = 6 + (2 - Math.abs(i - 2)) * 3; facet(PL([x - 1.6, -12, x, -12 - hh, x + 1.6, -12]), i % 2 ? cr2 : cr, x, -12 - hh / 2, hh / 2); }
  g.restore();
  sp(-6, -76, 0); sp(8, -60, 1.1); sp(-2, -100, 2.2);
  const pv = up ? [4, -112] : cut ? [26 + cut * 6, -66] : [18, -56], rr = up ? -.8 : cut ? 1.5 + cut * .3 : .3;
  armTo(11, -84, pv[0], pv[1], 13, 12, 4.6, 3.8, 3.2, cr, up ? -1 : 1);
  g.save(); g.translate(pv[0], pv[1]); g.rotate(rr); facet(SP('M-2.4,0 L-2.4,-34 L0,-42 L2.4,-34 L2.4,0Z'), '#c8f0ff', 0, -20, 14); facet(SP('M-8,0 L8,0 L6,3 L-6,3Z'), cr2, 0, 1, 7); L(SP('M0,3 L0,9'), '#2a6aa8', 2.4); g.restore();
  if (cut > .3) { g.save(); g.globalAlpha = cut * .6; L(SP(`M${pv[0] - 14},${pv[1] - 40} Q${pv[0] + 34},${pv[1] - 34} ${pv[0] + 30},${pv[1] + 14}`), '#dff8ff', 4); g.restore(); }
  V(E(pv[0], pv[1], 3.4, 3.4), cr, pv[0], pv[1], 3.4, 1.2);
  g.save(); g.translate(-12, -64); facet(SP('M-11,-14 L11,-14 L10,6 L0,18 L-10,6Z'), cr2, 0, -2, 14); facet(SP('M-6,-9 L6,-9 L5,3 L0,10 L-5,3Z'), cr, 0, 0, 8); sp(0, -2, .6); g.restore();
  g.restore();
}

function gemelloD(o, v = 0) {                                   // i Gemelli dello Specchio: due ragazzini identici in casacca a rombi, capelli argento a caschetto, spadina; uno è il riflesso dell'altro coi colori scambiati; se uno cade, l'altro si divide
  const c1 = v ? '#d8dcf0' : '#7a4ab8', c2 = v ? '#7a4ab8' : '#d8dcf0', sk = '#f6dcc8', hair = v ? '#4a3a6a' : '#e8ecf6', u = o.u, m = o.mood, w = o.walking ? 1 : 0, stab = u < 0 ? -u : 0;
  const b = bobOf(o, 2.2);
  g.save(); g.translate(0, b);
  const shoe = (f, col) => V(SP(`M${f[0] - 3},${f[1] - 4} L${f[0] + 4},${f[1] - 4} Q${f[0] + 9},${f[1] - 4} ${f[0] + 10},${f[1] - 6} Q${f[0] + 10},${f[1] + 1} ${f[0] + 5},${f[1] + 1} L${f[0] - 3},${f[1] + 1}Z`), col, f[0] + 3, f[1] - 2, 6, 1.2);
  shoe(legB(-3, -40, 18, 18, 3, 2.6, 2.2, o, Math.PI, dk(c2, .2), .6), dk(c1, .2));
  const hb = limb(-6, -70, 1.9 + (w ? Math.sin(o.ph) * .5 : 0), 10, -.4, 9, 2.6, 2.2, 1.9, dk(c1, .2)); V(E(hb[0], hb[1], 2.2, 2.2), dk(sk, .06), hb[0], hb[1], 2.2, 1);
  const tor = SP('M-8,-72 Q0,-76 8,-72 Q10,-56 9,-42 L11,-34 L-11,-34 L-9,-42 Q-10,-56 -8,-72Z'); V(tor, c1, 0, -54, 20);
  g.save(); g.clip(tor); for (let y = -74; y < -30; y += 8) for (let x = -12 + ((y + 74) % 16 ? 4 : 0); x < 12; x += 8) F(PL([x, y, x + 4, y + 4, x, y + 8, x - 4, y + 4]), c2); L(SP('M-12,-38 L-8,-34 L-4,-38 L0,-34 L4,-38 L8,-34 L12,-38'), '#f2c43a', 1.4); g.restore();
  shoe(legB(3, -40, 18, 18, 3.2, 2.8, 2.4, o, 0, c2, .6), c1);
  V(SP('M-8,-74 L-4,-70 L0,-74 L4,-70 L8,-74 L6,-78 L-6,-78Z'), c2, 0, -74, 8, 1.2);
  g.save(); g.translate(1, -86); g.rotate(m === 3 ? -.1 : m === 4 ? -.24 : Math.sin(o.t * 2) * .04);
  const face = SP('M-6,-5 Q-6,-12 1,-12 Q8,-12 8,-5 Q8,2 5,6 Q2,9 -1,8 Q-5,5 -6,-5Z'); V(face, sk, 1, -2, 11);
  V(SP('M-8,5 Q-11,-11 1,-14 Q12,-13 10,-3 L8,-6 Q4,-9 1,-9 L-1,-6 L-3,-9 Q-6,-6 -5,5Z'), hair, 0, -5, 11, 1.4);
  F(E(-2.4, 2, 2, 1.2), 'rgba(240,120,140,.35)');
  eyesX(o, sk, [[.6, -2.4, 2.4, 1], [6.2, -2.6, 2, -1]], 'almond', v ? '#7a4ab8' : '#9aa8c8'); browsX(o, [[.6, -6.4, 5, 1], [6.2, -6.6, 4, -1]], dk(hair, .35), 1.2, 'arch');
  L(SP('M5.6,-.6 Q7.6,2 5.8,3'), dk(sk, .25), 1); mouthX(o, 3.4, 5, 4.4, 'smirk');
  g.restore();
  const hp = stab ? [18 + stab * 6, -60] : u > 0 ? [0, -74] : [11, -48];
  armTo(5, -70, hp[0], hp[1], 10, 9, 2.6, 2.2, 1.9, c1, u > 0 ? -1 : 1);
  g.save(); g.translate(hp[0], hp[1]); g.rotate(stab ? Math.PI / 2 : u > 0 ? -.6 : 2.5); V(SP('M-1.6,0 L-1.4,-20 L0,-25 L1.4,-20 L1.6,0Z'), '#eef3fb', 0, -12, 12, 1.2); V(SP('M-5,0 L5,0 L5,2 L-5,2Z'), c2, 0, 1, 5, .9); L(SP('M0,2 L0,6'), '#3a2414', 2); g.restore();
  V(E(hp[0], hp[1], 2.2, 2.2), sk, hp[0], hp[1], 2.2, 1);
  g.restore();
}
function gemelliD(o) { g.save(); g.translate(-12, 0); gemelloD(o, 0); g.restore(); g.save(); g.translate(12, 2); gemelloD(Object.assign({}, o, { t: o.t + .5, ph: o.ph + .5 }), 1); g.restore(); }

function piselloD(o) {                                          // la Principessa sul Pisello: assonnatissima, camicia da notte rosa con i pizzi, coroncina piccola storta, occhiaie, capelli rossi spettinati, abbraccia il cuscino; il pisello verde le ronza intorno; cura con la ninnananna
  const nd = '#f4b8d0', nd2 = '#e090b0', sk = '#f8e0d0', hair = '#d8603a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, cast = m === 2 || m === 3 || u !== 0;
  const b = bobOf(o, 1.4), sway = Math.sin(o.t * 1.2) * .05 + (w ? Math.sin(o.ph) * .04 : 0);
  g.save(); g.translate(0, b); g.rotate(sway);
  const sl = f => V(E(f[0] + 2, f[1] - 1.4, 4, 2.2), '#f8e0ec', f[0] + 2, f[1] - 1.4, 3, 1);
  sl(legB(-3, -30, 15, 14, 2.4, 2, 1.8, o, Math.PI, dk(sk, .08), .4)); sl(legB(3, -30, 15, 14, 2.6, 2.2, 2, o, 0, sk, .4));
  const gp = SP(`M-7,-70 Q0,-72 7,-70 Q12,-40 15,-10 Q0,-6 -15,-10 Q-12,-40 -7,-70Z`); V(gp, nd, 0, -40, 34);
  g.save(); g.clip(gp); for (let x = -16; x < 16; x += 4) F(E(x, -10, 2.2, 2.2), '#fafaf6'); for (const x of [-6, 0, 6]) L(SP(`M${x * .4},-66 Q${x},-36 ${x * 1.6},-10`), nd2, 1); g.restore();
  V(SP('M-9,-70 Q-12,-64 -7,-60 L7,-60 Q12,-64 9,-70 Q0,-66 -9,-70Z'), '#fafaf6', 0, -66, 9, 1.1);
  g.save(); g.translate(6, -52); g.rotate(-.2 + (cast ? -.2 : 0)); const pl = SP('M-12,-8 Q-14,0 -12,8 Q0,11 12,8 Q14,0 12,-8 Q0,-11 -12,-8Z'); V(pl, '#fafaf6', 0, 0, 14, 1.6); L(SP('M-6,-5 Q0,-2 6,-5'), '#d8d0e0', 1); for (const [x, y] of [[-12, -8], [12, -8], [-12, 8], [12, 8]]) V(E(x, y, 1.6, 1.6), '#f2c43a', x, y, 1.6, .6); g.restore();
  for (const s of [-1, 1]) { const h = limb(s * 6, -66, s < 0 ? .7 : .9, 9, -.8, 8, 2.4, 2, 1.8, s < 0 ? dk(nd, .1) : nd); V(E(h[0], h[1], 2, 2), sk, h[0], h[1], 2, .9); }
  g.save(); g.translate(1, -80); g.rotate(m === 4 ? -.24 : Math.sin(o.t * 1.2) * .07);
  for (let i = 0; i < 6; i++) { const a = 2.6 + i * .5; V(SP(`M${Math.cos(a) * 5},${Math.sin(a) * 5 - 3} L${Math.cos(a) * 12},${Math.sin(a) * 11 - 3} L${Math.cos(a + .4) * 6},${Math.sin(a + .4) * 6 - 3}Z`), hair, Math.cos(a) * 8, Math.sin(a) * 8, 4, 1); }
  const face = SP('M-6,-5 Q-6,-12 1,-12 Q8,-12 8,-5 Q8,2 5,6 Q2,9 -1,8 Q-5,5 -6,-5Z'); V(face, sk, 1, -2, 11);
  V(SP('M-8,4 Q-10,-10 0,-14 Q10,-15 10,-6 Q6,-10 1,-9 Q-4,-9 -5,-3 Q-6,0 -5,4Z'), hair, 0, -6, 11, 1.4);
  F(E(.6, -.4, 2.6, 1.1), 'rgba(140,100,170,.35)'); F(E(6.2, -.6, 2.2, 1), 'rgba(140,100,170,.35)');
  if (m === 4) eyesX(o, sk, [[.6, -2.4, 2.4, 1], [6.2, -2.6, 2, -1]], 'lidded', '#5a8a3a');
  else { L(SP('M-1.6,-2.4 Q.6,-1 2.8,-2.4 M4.4,-2.6 Q6.2,-1.4 8,-2.6'), INK, 1.4); browsX(o, [[.6, -6, 5, 1], [6.2, -6.2, 4, -1]], dk(hair, .3), 1.1, 'arch'); }
  L(SP('M5.6,-.6 Q7.6,2 5.8,3'), dk(sk, .25), 1);
  const yawn = (o.t % 6) < 1.2 || m === 3; if (yawn) { const p = E(3.4, 5.4, 2.4, 3); F(p, '#5a1220'); L(p, INK, 1.4); } else mouthX(o, 3.4, 5, 4, 'pout', { lips: '#d8607a' });
  g.save(); g.translate(1, -13); g.rotate(.35); V(PL([-5, 0, -5.6, -5, -2.6, -2.6, 0, -6, 2.6, -2.6, 5.6, -5, 5, 0]), '#f2c14e', 0, -3, 5, 1); g.restore();
  g.restore();
  g.restore();
  const pa = o.t * 2.4; V(E(Math.cos(pa) * 18 + 2, -82 + Math.sin(pa * 1.3) * 10, 2.8, 2.8), '#6ac84a', 2, -82, 3, 1);
  for (let i = 0; i < 3; i++) { const k = (o.t * .5 + i / 3) % 1; g.save(); g.globalAlpha = 1 - k; g.fillStyle = cast ? '#c8a8f0' : '#8a7ab8'; g.font = `bold ${5 + k * 4}px sans-serif`; g.fillText('z', 10 + k * 14 + i * 2, -96 - k * 20); g.restore(); }
  if (cast) for (let i = 0; i < 5; i++) { const k = (o.t * .9 + i / 5) % 1; g.save(); g.globalAlpha = 1 - k; F(E(-16 + i * 8, -20 - k * 50, 1.6, 1.6), '#f4c8f0', '#e8a8ff'); g.restore(); }
}

function tappetoD(o) {                                          // il Tappeto Volante: tappeto persiano rosso con le frange che ondeggia nell'aria, con sopra un cavaliere del deserto col turbante blu, i baffoni e la lancia
  const rug = '#b8302a', gold = '#f2c43a', sk = '#c8946a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, jab = u < 0 ? -u : 0, up = u > 0 ? u : 0;
  const hov = -26 + Math.sin(o.t * 2.4) * 4, ph = o.t * 4;
  g.save(); g.translate(jab * 8, hov); g.rotate((w ? -.05 : 0) + jab * .05);
  const wv = x => Math.sin(ph + x * .12) * 3;
  let top = '', bot = ''; for (let x = -36; x <= 36; x += 6) { top += `${x === -36 ? 'M' : 'L'}${x},${-4 + wv(x)} `; } for (let x = 36; x >= -36; x -= 6) bot += `L${x},${4 + wv(x)} `;
  const rp = SP(top + bot + 'Z'); V(rp, rug, 0, 0, 36, 1.8);
  g.save(); g.clip(rp); for (let x = -30; x <= 30; x += 12) { F(PL([x, -1 + wv(x), x + 4, 2 + wv(x), x, 5 + wv(x), x - 4, 2 + wv(x)]), gold); } L(SP(top), '#2a4a8a', 2); g.restore();
  for (const s of [-1, 1]) for (let y = -3; y <= 3; y += 2) L(SP(`M${s * 36},${y + wv(s * 36)} l${s * 4},${Math.sin(ph + y) * 1.4}`), gold, 1.2);
  g.save(); g.translate(-2, -4 + wv(-2));
  V(SP('M-12,0 Q-12,-6 -4,-6 L8,-6 Q14,-4 14,0Z'), '#2a8a8a', 1, -3, 12, 1.4);
  const tor = SP('M-8,-6 Q-10,-22 -2,-30 Q6,-32 8,-24 Q10,-14 8,-6Z'); V(tor, '#f4f0e4', 0, -18, 14); V(SP('M-8,-14 L8,-14 L8,-9 L-8,-9Z'), gold, 0, -12, 8, 1);
  g.save(); g.translate(2, -38); g.rotate(m === 4 ? -.22 : Math.sin(o.t * 2) * .04);
  const face = SP('M-6,-5 Q-6,-12 1,-12 Q8,-12 8,-5 Q8,3 5,6 L-4,6 Q-6,2 -6,-5Z'); V(face, sk, 1, -2, 11);
  L(SP('M0,3 Q4,1 6,2.6 Q9,1 12,4 M0,3 q-3,0 -3,3'), '#1a1214', 2);
  eyesX(o, sk, [[.4, -2.6, 2.2, 1], [6.2, -2.8, 1.9, -1]], 'almond', '#3a2a1a'); browsX(o, [[.4, -6.4, 5, 1], [6.2, -6.6, 4, -1]], '#1a1214', 1.8, 'thick');
  V(SP('M5.6,-2 Q9,1 7,3 Q5.4,3 5,1Z'), dk(sk, .06), 7, 0, 3, 1); if (m === 3) mouthX(o, 4, 6, 4, 'oh');
  const tb = SP('M-9,-6 Q-11,-20 1,-21 Q13,-20 11,-6 Q1,-3 -9,-6Z'); V(tb, '#2a4ab8', 1, -12, 12, 1.6); g.save(); g.clip(tb); for (const y of [-16, -11]) L(SP(`M-12,${y} Q1,${y - 3} 14,${y}`), dk('#2a4ab8', .3), 1.1); g.restore(); V(E(2, -12, 2, 2.4), '#f2c43a', 2, -12, 2, .7);
  g.restore();
  const hp = jab ? [16 + jab * 8, -22] : up ? [2, -34] : [10, -20];
  armTo(4, -26, hp[0], hp[1], 8, 8, 2.6, 2.2, 1.9, '#f4f0e4', u > 0 ? -1 : 1);
  g.save(); g.translate(hp[0], hp[1]); g.rotate(jab ? Math.PI / 2 : up ? -.2 : .5); L(SP('M0,14 L0,-30'), '#5a3a1a', 2.4); V(PL([-2.4, -30, 0, -40, 2.4, -30]), '#dfe4ec', 0, -34, 4, 1); V(SP('M-2,-30 Q-6,-26 -3,-24 Z'), '#c8302a', -3, -27, 2, .6); g.restore();
  V(E(hp[0], hp[1], 2.2, 2.2), sk, hp[0], hp[1], 2.2, 1);
  g.restore();
  g.restore();
  for (let i = 0; i < 4; i++) { const k = (o.t * .8 + i / 4) % 1; g.save(); g.globalAlpha = (1 - k) * .7; F(E(-40 - k * 20, hov + 4 + Math.sin(i * 2) * 4, 1.4, 1.4), '#fff4a0'); g.restore(); }
}

function aladinoD(o) {                                          // Aladino: ragazzo agile e scalzo, camicia bianca larga, gilet verde, fusciacca arancio, pantaloni rossi a sbuffo, piccolo turbante bianco con la gemma, lampada d'oro alla cintura, scimitarra; schiva i colpi
  const sk = '#d8a07a', vest = '#3a8a4a', pants = '#c8302a', sash = '#f2902a', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, cut = u < 0 ? -u : 0;
  const b = bobOf(o, 2.4);
  g.save(); g.translate(0, b); g.rotate(w ? .05 : 0);
  const foot = f => V(SP(`M${f[0] - 3},${f[1] - 3} L${f[0] + 5},${f[1] - 3} Q${f[0] + 9},${f[1] - 2} ${f[0] + 9},${f[1] + 1} L${f[0] - 3},${f[1] + 1}Z`), sk, f[0] + 2, f[1] - 1, 5, 1.1);
  foot(legB(-3, -44, 20, 19, 5, 3, 2.2, o, Math.PI, dk(pants, .25), .65));
  const hb = limb(-6, -78, 1.9 + (w ? Math.sin(o.ph) * .5 : 0), 11, -.4, 10, 3.4, 2.6, 2, '#e8e4d8'); V(E(hb[0], hb[1], 2.4, 2.4), dk(sk, .08), hb[0], hb[1], 2.4, 1);
  const tor = SP('M-9,-80 Q0,-84 9,-80 Q11,-62 10,-48 L-10,-48 Q-11,-62 -9,-80Z'); V(tor, '#f4f0e4', 0, -64, 20);
  V(SP('M-9,-80 L-3,-80 L-4,-50 L-10,-49Z M9,-80 L4,-80 L5,-50 L10,-49Z'), vest, 0, -64, 14, 1.2);
  V(SP('M-11,-52 L11,-52 L11,-45 L-11,-45Z'), sash, 0, -48, 11, 1.4);
  g.save(); g.translate(-8, -46); V(SP('M-6,2 Q-6,-2 0,-2 Q4,-2 6,0 L10,-2 L7,2 Q4,5 -4,5Z'), '#f2c43a', 0, 1, 7, 1); L(SP('M-1,-2 Q0,-5 1,-2'), '#c89a28', 1); g.restore();
  V(SP('M-11,-45 Q-14,-38 -9,-30 L9,-30 Q14,-38 11,-45Z'), pants, 0, -38, 12, 1.4);
  foot(legB(3, -44, 20, 19, 5.2, 3.2, 2.4, o, 0, pants, .65));
  g.save(); g.translate(2, -92); g.rotate(m === 3 ? -.1 : m === 4 ? -.24 : Math.sin(o.t * 2) * .04);
  const face = SP('M-6,-5 Q-6,-12 1,-12 Q8,-12 8,-5 Q8,3 5,7 Q2,9 -1,8 Q-5,5 -6,-5Z'); V(face, sk, 1, -2, 11);
  V(SP('M-8,5 Q-11,-6 -6,-10 L-5,5Z'), '#1a1214', -6, -2, 4, 1.1);
  eyesX(o, sk, [[.6, -2.4, 2.6, 1], [6.4, -2.6, 2.2, -1]], 'almond', '#3a2a1a'); browsX(o, [[.6, -6.6, 5, 1], [6.4, -6.8, 4, -1]], '#1a1214', 1.8, 'arch');
  V(SP('M5.6,-1 Q9,2 7,4 Q5.4,4 5,2Z'), dk(sk, .06), 7, 2, 3, 1); mouthX(o, 3.6, 5, 4.6, 'grin');
  const tb = SP('M-8,-6 Q-10,-18 1,-19 Q12,-18 10,-6 Q1,-3 -8,-6Z'); V(tb, '#f4f0e8', 1, -12, 11, 1.4); g.save(); g.clip(tb); for (const y of [-14, -10]) L(SP(`M-10,${y} Q1,${y - 3} 12,${y}`), '#c8c0b0', 1); g.restore(); V(E(2, -12, 1.8, 2.2), '#c8302a', 2, -12, 1.8, .7);
  g.restore();
  const pv = up ? [4, -108] : cut ? [24 + cut * 6, -66] : [16, -56], rr = up ? -.8 : cut ? 1.5 + cut * .3 : .4;
  armTo(6, -78, pv[0], pv[1], 11, 10, 3.4, 2.6, 2, '#f4f0e4', up ? -1 : 1);
  g.save(); g.translate(pv[0], pv[1]); g.rotate(rr); V(SP('M-2,0 L-2.4,-20 Q0,-32 6,-34 Q2,-22 2.6,0Z'), '#dfe4ec', 0, -16, 16, 1.3); V(SP('M-5,0 L5,0 L5,2 L-5,2Z'), '#f2c43a', 0, 1, 5, .8); L(SP('M0,2 L0,7'), '#3a2414', 2.4); g.restore();
  if (cut > .3) { g.save(); g.globalAlpha = cut * .55; L(SP(`M${pv[0] - 12},${pv[1] - 34} Q${pv[0] + 28},${pv[1] - 28} ${pv[0] + 26},${pv[1] + 12}`), '#f4f8ff', 3.4); g.restore(); }
  V(E(pv[0], pv[1], 2.4, 2.4), sk, pv[0], pv[1], 2.4, 1);
  g.restore();
}

function kaiD(o) {                                              // Kai: ragazzo col cappotto pesante, sciarpa rossa che svolazza, berretto di lana col pon pon, guanti; ha una scheggia dello specchio di ghiaccio nell'occhio (che brilla azzurra) e combatte con una spada di ghiaccio
  const coat = '#6a4a3a', sk = '#f2d4c0', hair = '#e8c070', u = o.u, m = o.mood, w = o.walking ? 1 : 0, up = u > 0 ? u : 0, cut = u < 0 ? -u : 0;
  const b = bobOf(o, 2.2);
  g.save(); g.translate(0, b);
  const boot = (f, col) => V(SP(`M${f[0] - 4},${f[1] - 8} L${f[0] + 4},${f[1] - 8} L${f[0] + 4},${f[1] - 3} Q${f[0] + 10},${f[1] - 3} ${f[0] + 10},${f[1] + 1} L${f[0] - 4},${f[1] + 1}Z`), col, f[0] + 2, f[1] - 3, 7, 1.3);
  boot(legB(-3, -38, 18, 17, 3.6, 3, 2.6, o, Math.PI, '#3a3a5a', .6), '#2a1a14');
  const sw = Math.sin(o.t * 4) * 4 + (w ? 6 : 0); V(SP(`M-6,-70 Q-14,-68 ${-22 - sw},${-66 + Math.sin(o.t * 5) * 3} L${-22 - sw},${-60 + Math.sin(o.t * 5) * 3} Q-12,-62 -4,-64Z`), '#d02a2a', -14, -66, 9, 1.2); for (const y of [-64, -62]) L(SP(`M${-22 - sw},${y + Math.sin(o.t * 5) * 3} l-3,0`), '#d02a2a', 1);
  const hb = limb(-6, -66, 1.9 + (w ? Math.sin(o.ph) * .5 : 0), 10, -.4, 9, 3.4, 2.8, 2.4, dk(coat, .25)); V(E(hb[0], hb[1], 2.8, 2.6), '#2a4a8a', hb[0], hb[1], 2.8, 1);
  const tor = SP('M-9,-70 Q0,-74 9,-70 Q12,-52 11,-34 L-11,-34 Q-12,-52 -9,-70Z'); V(tor, coat, 0, -52, 22);
  g.save(); g.clip(tor); L(SP('M2,-70 L2,-34'), dk(coat, .35), 1.4); for (const y of [-62, -54, -46]) V(E(5, y, 1.4, 1.4), '#c8a050', 5, y, 1.4, .6); F(SP('M-12,-38 L12,-38 L12,-34 L-12,-34Z'), lt(coat, .2)); g.restore();
  V(SP('M-8,-72 Q0,-68 8,-72 L8,-66 Q0,-62 -8,-66Z'), '#d02a2a', 0, -69, 8, 1.2);
  boot(legB(3, -38, 18, 17, 3.8, 3.2, 2.8, o, 0, '#4a4a6a', .6), '#3a2414');
  g.save(); g.translate(2, -80); g.rotate(m === 3 ? -.1 : m === 4 ? -.24 : Math.sin(o.t * 2) * .04);
  const face = SP('M-6,-5 Q-6,-12 1,-12 Q8,-12 8,-5 Q8,3 5,7 Q2,9 -1,8 Q-5,5 -6,-5Z'); V(face, sk, 1, -2, 11);
  F(E(-2.6, 2, 2, 1.2), 'rgba(240,100,110,.45)'); F(E(7, 1.8, 1.4, 1), 'rgba(240,100,110,.45)');
  V(SP('M-7,4 Q-9,-4 -5,-6 L-4,4Z'), hair, -6, -1, 3, 1);
  eyesX(o, sk, [[.6, -2.4, 2.4, 1], [6.2, -2.6, 2, -1]], 'almond', '#5a7ab8'); browsX(o, [[.6, -6.4, 5, 1], [6.2, -6.6, 4, -1]], dk(hair, .35), 1.2, 'arch');
  glowB(6.2, -2.6, 8, 'rgba(140,230,255,.8)'); F(PL([5.6, -4, 6.6, -2.6, 5.8, -1.4]), '#dff8ff', '#8ae8ff');
  L(SP('M5.6,-.6 Q7.6,2 5.8,3'), dk(sk, .25), 1); mouthX(o, 3.4, 5, 4.4, m === 0 ? 'frown' : 'smirk');
  V(SP('M-8,-4 Q-9,-15 1,-16 Q11,-15 10,-4 Q1,-7 -8,-4Z'), '#2a6ac8', 1, -10, 11, 1.4); L(SP('M-8,-5 Q1,-8 10,-5'), '#fafaf6', 2.4); for (let x = -5; x < 9; x += 3) L(SP(`M${x},-13 l1,3`), '#4a8ae8', 1); V(E(-1, -17, 3.4, 3.2), '#fafaf6', -1, -17, 3.4, 1);
  g.restore();
  const pv = up ? [4, -96] : cut ? [22 + cut * 6, -58] : [14, -46], rr = up ? -.8 : cut ? 1.5 + cut * .3 : .35;
  armTo(6, -66, pv[0], pv[1], 10, 9, 3.4, 2.8, 2.4, coat, up ? -1 : 1);
  g.save(); g.translate(pv[0], pv[1]); g.rotate(rr); if (cut || up) glowB(0, -16, 16, 'rgba(160,240,255,.5)'); V(SP('M-2.4,0 L-2,-22 L0,-30 L2,-22 L2.4,0Z'), '#c8f0ff', 0, -15, 14, 1.3); L(SP('M0,-2 L0,-24'), 'rgba(255,255,255,.8)', .8); V(SP('M-5,0 L5,0 L4,2.4 L-4,2.4Z'), '#8ad0f0', 0, 1, 5, .8); g.restore();
  V(E(pv[0], pv[1], 2.8, 2.6), '#2a4a8a', pv[0], pv[1], 2.8, 1);
  if (cut > .4) for (let i = 0; i < 5; i++) F(E(pv[0] + 10 + i * 5, pv[1] - 14 + Math.sin(i * 2) * 6, 1.2, 1.2), '#ffffff', '#bff4ff');
  g.restore();
}

function gerdaD(o) {                                            // Gerda: ragazza coraggiosa, mantella rossa col cappuccio orlato di pelliccia bianca, trecce bionde, vestito azzurro, scarpette rosse, rosa in mano; scalda e cura col calore del cuore
  const red = '#c8202a', dr = '#5a8ad8', sk = '#f8dcc8', hair = '#f4cc58', u = o.u, m = o.mood, w = o.walking ? 1 : 0, cast = m === 2 || m === 3 || u !== 0;
  const b = bobOf(o, 1.8), cw = Math.sin(o.t * 3) * 3 + (w ? 5 : 0);
  g.save(); g.translate(0, b);
  const cp = SP(`M-7,-82 Q-18,-60 ${-22 - cw},-20 Q${-14 - cw},-16 -4,-22 Q-6,-50 2,-80Z`); V(cp, red, -10, -50, 30, 1.6); L(SP(`M${-22 - cw},-20 Q${-14 - cw},-16 -4,-22`), '#fafaf6', 3);
  const shoe = f => V(E(f[0] + 2, f[1] - 1.4, 3.8, 2), red, f[0] + 2, f[1] - 1.4, 3, 1);
  shoe(legB(-3, -36, 17, 17, 2.6, 2.2, 2, o, Math.PI, dk(sk, .08), .55));
  const gp = SP(`M-7,-72 Q0,-74 7,-72 Q12,-50 ${14 + (w ? 1 : 0)},-26 L${-14 + (w ? 1 : 0)},-26 Q-12,-50 -7,-72Z`); V(gp, dr, 0, -50, 26);
  g.save(); g.clip(gp); F(SP('M-16,-30 L16,-30 L16,-26 L-16,-26Z'), '#fafaf6'); for (let x = -12; x < 14; x += 5) F(E(x, -28, 1, 1), red); g.restore();
  shoe(legB(3, -36, 17, 17, 2.8, 2.4, 2.2, o, 0, sk, .55));
  g.save(); g.translate(1, -86); g.rotate(m === 3 ? -.1 : m === 4 ? -.24 : Math.sin(o.t * 1.8) * .04);
  V(SP('M-11,10 Q-14,-12 1,-16 Q15,-16 13,0 Q13,8 10,11 L9,-2 Q4,-9 -4,-7 Q-8,-2 -8,10Z'), red, 0, -4, 14, 1.6);
  L(SP('M-11,10 Q-14,-12 1,-16 Q15,-16 13,0 Q13,8 10,11'), '#fafaf6', 3.2);
  for (const s of [-1, 1]) { const bw = Math.sin(o.t * 3 + s) * 1.2; V(SP(`M${s * 5 - 1},4 Q${s * 7 + bw},12 ${s * 6 + bw},18 Q${s * 4 + bw},18 ${s * 3 - 1},6Z`), hair, s * 5, 11, 4, 1.1); V(E(s * 6 + bw, 18, 1.6, 1.2), dr, s * 6, 18, 1.4, .6); }
  const face = SP('M-6,-5 Q-6,-12 1,-12 Q8,-12 8,-5 Q8,2 5,6 Q2,9 -1,8 Q-5,5 -6,-5Z'); V(face, sk, 1, -2, 11);
  V(SP('M-6,-4 Q-4,-11 2,-10 Q8,-10 9,-5 Q4,-8 0,-7 Q-3,-6 -6,-2Z'), hair, 1, -7, 8, 1.1);
  F(E(-2.4, 2, 2, 1.2), 'rgba(250,120,140,.45)');
  eyesX(o, sk, [[.6, -2.2, 2.6, 1], [6.2, -2.4, 2.2, -1]], 'lashes', '#3a8ad8'); browsX(o, [[.6, -6.2, 5, 1], [6.2, -6.4, 4, -1]], dk(hair, .35), 1.1, 'arch');
  L(SP('M5.6,-.6 Q7.6,2 5.8,3'), dk(sk, .25), 1); mouthX(o, 3.4, 5, 4.4, 'smile', { lips: '#d8506a' });
  g.restore();
  const hp = cast ? [12, -76] : [10, -52];
  armTo(5, -70, hp[0], hp[1], 10, 9, 2.4, 2, 1.8, red, -1);
  g.save(); g.translate(hp[0], hp[1]); L(SP('M0,4 L1,-12'), '#3a7a3a', 1.4); V(E(-2, -4, 2.4, 1.2, -.5), '#4ab84a', -2, -4, 2, .6);
  if (cast) glowB(1, -14, 22, 'rgba(255,150,150,.6)'); V(E(1, -14, 4, 3.6), '#e02a4a', 1, -14, 4, 1.1); L(SP('M-1,-15 Q1,-12 3,-15 M0,-13 Q1,-16 2,-13'), '#8a1020', .8); g.restore();
  V(E(hp[0], hp[1], 2, 2), sk, hp[0], hp[1], 2, .9);
  if (cast) for (let i = 0; i < 5; i++) { const k = (o.t * .9 + i / 5) % 1; g.save(); g.globalAlpha = 1 - k; F(SP(`M${-16 + i * 8},${-20 - k * 50} l1.6,-1.6 a1.6,1.6 0 0 1 2.2,2.2 l-3.8,3.8 l-3.8,-3.8 a1.6,1.6 0 0 1 2.2,-2.2Z`), '#ff8aa0', '#ff5a7a'); g.restore(); }
  g.restore();
}

function pollicinoD(o) {                                        // Pollicino: piccolissimo e svelto, berretto rosso, camiciola, gli stivali delle sette leghe enormi (fanno passi lunghissimi), saccoccia di sassolini bianchi che tira
  const sk = '#f6d2b0', u = o.u, m = o.mood, w = o.walking ? 1 : 0, thr = u < 0 ? -u : 0;
  const stride = w ? Math.sin(o.ph * 1.2) : 0, b = w ? -Math.abs(Math.sin(o.ph * 1.2)) * 6 : Math.sin(o.t * 4) * .5;
  for (let i = 0; i < (w ? 3 : 0); i++) { const k = (o.t * 2 + i / 3) % 1; g.save(); g.globalAlpha = (1 - k) * .5; F(E(-14 - k * 16, -2, 3 + k * 4, 1.4 + k), '#d8c8a8'); g.restore(); }
  g.save(); g.translate(0, b);
  const boot = (hx, a, col) => { const kx = hx + Math.sin(a) * 9, ky = -16 + Math.cos(a) * 9, fx = kx + Math.sin(a * .6) * 6, fy = ky + Math.cos(a * .6) * 6; taper(hx, -18, kx, ky, 2.4, 2, '#4a6a3a'); V(SP(`M${fx - 5},${fy - 12} L${fx + 4},${fy - 12} L${fx + 4},${fy - 4} Q${fx + 14},${fy - 4} ${fx + 14},${fy + 1} L${fx - 5},${fy + 1}Z`), col, fx + 3, fy - 5, 9, 1.4); V(SP(`M${fx - 6},${fy - 14} L${fx + 5},${fy - 14} L${fx + 4},${fy - 10} L${fx - 5},${fy - 10}Z`), lt(col, .1), fx, fy - 12, 6, 1); };
  boot(-2, -stride * .9, '#5a3420');
  const hb = limb(-4, -30, 1.9 + stride * .6, 6, -.3, 6, 1.8, 1.6, 1.4, dk('#e8dcc0', .2)); V(E(hb[0], hb[1], 1.6, 1.6), dk(sk, .08), hb[0], hb[1], 1.6, .8);
  V(SP('M-5,-32 Q0,-34 5,-32 L6,-18 L-6,-18Z'), '#e8dcc0', 0, -25, 8, 1.4); F(SP('M-6,-21 L6,-21 L6,-18 L-6,-18Z'), '#5a3a1a');
  V(SP('M3,-22 Q8,-22 8,-17 Q6,-14 3,-16Z'), '#a8865a', 5, -18, 3, .9);
  boot(2, stride * .9, '#6a4024');
  g.save(); g.translate(1, -40); g.rotate(m === 3 ? -.12 : m === 4 ? -.26 : Math.sin(o.t * 3) * .05);
  const face = E(1, 0, 7.6, 7.4); V(face, sk, 1, 0, 8); for (const [x, y] of [[-2, 2.4], [-.6, 3.2], [5.6, 2.2]]) F(E(x, y, .5, .5), '#b8703a');
  eyesX(o, sk, [[-.4, -.6, 2.2, 1], [5.2, -.8, 1.9, -1]], 'beady'); browsX(o, [[-.4, -3.8, 3.6, 1], [5.2, -4, 3, -1]], '#8a5a2a', 1.1, 'arch');
  F(E(7.2, 1.6, 1.1, .9), dk(sk, .12)); mouthX(o, 3, 4, 3.6, 'grin');
  V(SP('M-8,-1 Q-8,-10 1,-10 Q9,-9 9,-2 Q12,-6 14,-2 Q8,-1 -8,-1Z'), '#d02a2a', 2, -5, 9, 1.3); V(PL([-3, -9, -1, -13, 1, -9]), '#d02a2a', -1, -10, 2, .7);
  g.restore();
  const hp = thr ? [12, -42] : u > 0 ? [-2, -40] : [8, -24];
  armTo(4, -30, hp[0], hp[1], 6, 6, 1.8, 1.6, 1.4, '#e8dcc0', u > 0 ? -1 : 1); V(E(hp[0], hp[1], 1.6, 1.6), sk, hp[0], hp[1], 1.6, .8);
  if (thr) for (let i = 0; i < 3; i++) V(E(hp[0] + 6 + i * 8 * thr, hp[1] - 2 - i * 2, 1.6, 1.4), '#f4f4f4', hp[0] + 6, hp[1], 2, .6);
  g.restore();
}
Object.assign(DRAW, { renna: rennaD, fiammiferaia: fiammiferaiaD, pupazzoneve: pupazzonevD, cavcristallo: cavcristalloD, gemello: o => gemelloD(o, 0), gemelli: gemelliD, pisello: piselloD, tappeto: tappetoD, aladino: aladinoD, kai: kaiD, gerda: gerdaD, pollicino: pollicinoD });
