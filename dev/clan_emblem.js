/* ================= stemma del clan: forma + colore + simbolo, bordo che cresce col livello ================= */
const EMB_COL = [                                     // [scuro, medio, chiaro]
  ['#3d1b63', '#7b3fb3', '#c99cf0'],   // viola
  ['#6a1020', '#c8303e', '#ff8a8a'],   // rosso
  ['#153a7a', '#3d6fd1', '#9cc0ff'],   // blu
  ['#164a26', '#3f9a4a', '#9fe08f'],   // verde
  ['#7a3d06', '#e8862a', '#ffc77a'],   // arancio
  ['#0e4a4a', '#26a69a', '#8ff0e0'],   // acqua
  ['#5a0e40', '#c23a8a', '#ff9ad2'],   // magenta
  ['#1b1824', '#3b3548', '#8c84a3'],   // notte
];
const EMB_FORM = ['Scudo', 'Tondo', 'Stendardo', 'Esagono', 'Rombo', 'Corona'];
const EMB_SYM = ['Drago', 'Teschio', 'Corona', 'Spada', 'Luna', 'Fiamma', 'Cappello da strega', 'Ragno', 'Pipistrello', 'Occhio', 'Artiglio', 'Testa di lupo'];
const EMB_PATH = [
  'M50 6 L90 16 L90 50 C90 74 72 88 50 96 C28 88 10 74 10 50 L10 16 Z',                       // scudo
  'M50 6 A44 44 0 1 1 49.9 6 Z',                                                                 // tondo
  'M14 6 H86 V78 L50 96 L14 78 Z',                                                               // stendardo
  'M50 5 L89 27 L89 73 L50 95 L11 73 L11 27 Z',                                                  // esagono
  'M50 4 L94 50 L50 96 L6 50 Z',                                                                 // rombo
  'M10 26 L26 8 L38 22 L50 4 L62 22 L74 8 L90 26 L90 56 C90 78 70 90 50 96 C30 90 10 78 10 56 Z', // corona
];
const EMB_SYMS = [
  // volto di drago di fronte: corna ad anelli, pinne laterali, baffi lunghi, sopracciglia a V, occhi gialli a fessura, narici fumanti, zanne grandi, mento a punte
  (d, l) => { const m = h => `${h}<g transform="translate(100 0) scale(-1 1)">${h}</g>`;
    const back = m(`<path d="M34 76 C24 78 15 86 9 98 C17 90 25 84 36 81 Z" fill="${d}" stroke="#1c1a24" stroke-width="2.4" stroke-linejoin="round"/><path d="M40 28 C30 20 20 12 12 -2 C13 12 19 25 29 38 Z" fill="#f6e7c4" stroke="#1c1a24" stroke-width="3" stroke-linejoin="round"/><path d="M33 24 L26 28 M27 17 L21 20 M21 9 L16 12" stroke="#b08a4a" stroke-width="2.2" stroke-linecap="round"/><path d="M28 41 C20 37 10 35 1 37 C9 41 15 47 21 53 Z" fill="#f6e7c4" stroke="#1c1a24" stroke-width="3" stroke-linejoin="round"/><path d="M27 50 L6 52 L15 57 L5 65 L17 65 L11 73 L30 64 Z" fill="${d}" stroke="#1c1a24" stroke-width="3" stroke-linejoin="round"/>`);
    const head = `<path d="M50 19 L60 21 L68 27 L74 37 L76 47 L72 55 L69 62 L67 70 L64 80 L36 80 L33 70 L31 62 L28 55 L24 47 L26 37 L32 27 L40 21 Z" fill="${l}" stroke="#1c1a24" stroke-width="3" stroke-linejoin="round"/>`;
    const face = m(`<path d="M31 58 L18 61 L31 65 Z" fill="${d}" stroke="#1c1a24" stroke-width="2" stroke-linejoin="round"/><path d="M50 24 L54 29 L50 34 Z M43 26 L47 30 L43 34 L39 30 Z M50 50 L53 54 L50 58 Z" fill="${d}" stroke="#1c1a24" stroke-width="1.6" stroke-linejoin="round"/><path d="M29 42 L46 47 L41 52 L33 50 Z" fill="none" stroke="#ffd35a" stroke-width="6" stroke-linejoin="round" opacity=".4"/><path d="M29 42 L46 47 L41 52 L33 50 Z" fill="#ffd35a" stroke="#1c1a24" stroke-width="2.2" stroke-linejoin="round"/><path d="M39 45 C37.5 47 37.5 49 38.6 51.2" fill="none" stroke="#1c1a24" stroke-width="2.6" stroke-linecap="round"/><path d="M25 35 L49 42 L47 47 L28 41 Z" fill="${d}" stroke="#1c1a24" stroke-width="2.4" stroke-linejoin="round"/><path d="M47 66 C43 65 40 68 41 72 C43 73 46 72 48 70" fill="none" stroke="#1c1a24" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 68.5 L46 70.5" stroke="#1c1a24" stroke-width="2.8" stroke-linecap="round"/>`);
    const mouth = `<path d="M37 78 L63 78 L61 89 L39 89 Z" fill="#6a0d1e" stroke="#1c1a24" stroke-width="2.4" stroke-linejoin="round"/><path d="M43 86 C47 84 53 84 57 86" fill="none" stroke="#e8607a" stroke-width="2.6" stroke-linecap="round"/><path d="M39 87 L61 87 L58 95 L50 99 L42 95 Z" fill="${l}" stroke="#1c1a24" stroke-width="3" stroke-linejoin="round"/>`;
    const teeth = m(`<path d="M38.5 78 L41.5 89 L45 79 Z M46 79 L47.2 83 L48.4 79 Z" fill="#fff" stroke="#1c1a24" stroke-width="1.4" stroke-linejoin="round"/><path d="M42.5 88.5 L44.5 83 L46.5 88.5 Z" fill="#fff" stroke="#1c1a24" stroke-width="1.2" stroke-linejoin="round"/><path d="M44 95 L41 101 L47 97 Z" fill="${d}" stroke="#1c1a24" stroke-width="1.8" stroke-linejoin="round"/>`);
    return back + head + face + mouth + teeth; },
  // teschio
  (d, l) => `<path d="M30 46 C30 30 40 22 50 22 C60 22 70 30 70 46 C70 54 66 58 62 60 V70 H38 V60 C34 58 30 54 30 46 Z" fill="${l}" stroke="#1c1a24" stroke-width="3" stroke-linejoin="round"/><ellipse cx="41" cy="46" rx="6" ry="7" fill="#1c1a24"/><ellipse cx="59" cy="46" rx="6" ry="7" fill="#1c1a24"/><path d="M50 52 L46 58 H54 Z" fill="#1c1a24"/><path d="M44 62 V70 M50 62 V70 M56 62 V70" stroke="#1c1a24" stroke-width="2.5"/>`,
  // corona
  (d, l) => `<path d="M24 66 L20 34 L36 46 L50 26 L64 46 L80 34 L76 66 Z" fill="${l}" stroke="#1c1a24" stroke-width="3" stroke-linejoin="round"/><rect x="24" y="64" width="52" height="9" rx="2" fill="${d}" stroke="#1c1a24" stroke-width="3"/><circle cx="50" cy="52" r="4.5" fill="#e8304a" stroke="#1c1a24" stroke-width="2"/><circle cx="20" cy="33" r="3.5" fill="${l}" stroke="#1c1a24" stroke-width="2"/><circle cx="50" cy="24" r="3.5" fill="${l}" stroke="#1c1a24" stroke-width="2"/><circle cx="80" cy="33" r="3.5" fill="${l}" stroke="#1c1a24" stroke-width="2"/>`,
  // spada
  (d, l) => `<path d="M50 14 L57 24 V62 H43 V24 Z" fill="${l}" stroke="#1c1a24" stroke-width="3" stroke-linejoin="round"/><path d="M50 22 V58" stroke="rgba(28,26,36,.35)" stroke-width="2"/><rect x="31" y="61" width="38" height="8" rx="3" fill="${d}" stroke="#1c1a24" stroke-width="3"/><rect x="46" y="68" width="8" height="14" fill="#7a4a24" stroke="#1c1a24" stroke-width="3"/><circle cx="50" cy="86" r="5" fill="${d}" stroke="#1c1a24" stroke-width="3"/>`,
  // luna con stellina
  (d, l) => `<path d="M60 20 C42 22 30 36 30 52 C30 68 44 80 60 80 C50 74 44 64 44 52 C44 38 50 28 60 20 Z" fill="${l}" stroke="#1c1a24" stroke-width="3" stroke-linejoin="round"/><path d="M68 36 L70.5 42 L77 42.5 L72 46.5 L73.5 53 L68 49.5 L62.5 53 L64 46.5 L59 42.5 L65.5 42 Z" fill="${l}" stroke="#1c1a24" stroke-width="2" stroke-linejoin="round"/>`,
  // fiamma
  (d, l) => `<path d="M50 14 C54 28 70 34 70 54 C70 70 60 80 50 80 C38 80 30 70 30 56 C30 44 38 38 40 28 C44 36 46 40 48 42 C50 32 48 22 50 14 Z" fill="#ff6a2a" stroke="#1c1a24" stroke-width="3" stroke-linejoin="round"/><path d="M50 44 C54 54 62 58 60 68 C58 75 54 78 50 78 C44 78 40 73 41 66 C42 60 46 58 48 52 Z" fill="#ffd35a"/>`,
  // cappello da strega con la fibbia e la punta piegata
  (d, l) => `<path d="M14 72 C26 64 74 64 86 72 C80 80 20 80 14 72 Z" fill="#2b2734" stroke="#1c1a24" stroke-width="3" stroke-linejoin="round"/><path d="M30 68 L44 30 C46 22 52 16 62 14 C70 13 74 18 72 22 C66 20 60 24 58 30 L70 68 Z" fill="#3b3548" stroke="#1c1a24" stroke-width="3" stroke-linejoin="round"/><path d="M33 60 C44 56 58 56 67 60 L69 66 C58 62 42 62 31 66 Z" fill="${l}" stroke="#1c1a24" stroke-width="2.5" stroke-linejoin="round"/><rect x="45" y="56" width="11" height="10" rx="2" fill="#ffd35a" stroke="#1c1a24" stroke-width="2.5"/><rect x="48.5" y="59" width="4" height="4" fill="#3b3548"/><path d="M47 40 C50 36 54 34 57 34" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="3" stroke-linecap="round"/><path d="M72 22 L78 26 L74 18 Z" fill="${l}" stroke="#1c1a24" stroke-width="2" stroke-linejoin="round"/>`,
  // ragno
  (d, l) => `<path d="M50 6 V30" stroke="#1c1a24" stroke-width="2"/><g stroke="#1c1a24" stroke-width="3.5" fill="none" stroke-linecap="round"><path d="M44 48 L30 38 L22 46 M44 54 L28 52 L20 60 M44 58 L30 64 L26 76 M56 48 L70 38 L78 46 M56 54 L72 52 L80 60 M56 58 L70 64 L74 76"/></g><ellipse cx="50" cy="58" rx="12" ry="14" fill="${l}" stroke="#1c1a24" stroke-width="3"/><circle cx="50" cy="38" r="8" fill="${l}" stroke="#1c1a24" stroke-width="3"/><circle cx="47" cy="37" r="1.8" fill="#e8304a"/><circle cx="53" cy="37" r="1.8" fill="#e8304a"/><path d="M50 52 L46 58 L50 64 L54 58 Z" fill="#e8304a"/>`,
  // pipistrello ad ali spiegate: dita delle ali, bordo a festoni, orecchie a punta, zanne
  (d, l) => `<path d="M46 46 L28 26 L4 34 Q10 42 10 54 Q18 48 26 53 Q30 56 32 64 Q38 56 46 58 Z M54 46 L72 26 L96 34 Q90 42 90 54 Q82 48 74 53 Q70 56 68 64 Q62 56 54 58 Z" fill="${l}" stroke="#1c1a24" stroke-width="3" stroke-linejoin="round"/><path d="M28 27 L10 53 M28 27 L26 52 M28 27 L32 63 M72 27 L90 53 M72 27 L74 52 M72 27 L68 63" stroke="${d}" stroke-width="2.2" stroke-linecap="round"/><ellipse cx="50" cy="56" rx="8" ry="13" fill="${d}" stroke="#1c1a24" stroke-width="3"/><path d="M42 36 L41 22 L47 30 Z M58 36 L59 22 L53 30 Z" fill="${d}" stroke="#1c1a24" stroke-width="2.5" stroke-linejoin="round"/><circle cx="50" cy="38" r="8" fill="${d}" stroke="#1c1a24" stroke-width="3"/><circle cx="46.8" cy="37" r="1.9" fill="#ff3a4a"/><circle cx="53.2" cy="37" r="1.9" fill="#ff3a4a"/><path d="M47.5 42 L48.5 45 L49.5 42 M50.5 42 L51.5 45 L52.5 42" fill="#fff" stroke="#fff" stroke-width="1" stroke-linejoin="round"/>`,
  // occhio
  (d, l) => `<path d="M16 50 C28 32 72 32 84 50 C72 68 28 68 16 50 Z" fill="#fff8e6" stroke="#1c1a24" stroke-width="3" stroke-linejoin="round"/><circle cx="50" cy="50" r="14" fill="${l}" stroke="#1c1a24" stroke-width="3"/><ellipse cx="50" cy="50" rx="4" ry="11" fill="#1c1a24"/><circle cx="55" cy="44" r="3" fill="#fff"/><path d="M30 34 L26 26 M50 30 V20 M70 34 L74 26" stroke="#1c1a24" stroke-width="3" stroke-linecap="round"/>`,
  // artiglio (tre graffi)
  (d, l) => `${[[-16, 0], [0, -4], [16, 0]].map(([x, y]) => `<path d="M${42 + x} ${22 + y} C${50 + x} ${40 + y} ${52 + x} ${58 + y} ${46 + x} ${80 + y} C${58 + x} ${64 + y} ${60 + x} ${42 + y} ${42 + x} ${22 + y} Z" fill="${l}" stroke="#1c1a24" stroke-width="3" stroke-linejoin="round"/>`).join('')}`,
  // lupo di fronte che ringhia: orecchie alte, ciuffi di pelo sulle guance, maschera scura sulla fronte, occhi gialli, zanne
  (d, l) => `<path d="M30 42 L22 6 L46 27 Z M70 42 L78 6 L54 27 Z" fill="${l}" stroke="#1c1a24" stroke-width="3" stroke-linejoin="round"/><path d="M30 36 L26 15 L40 28 Z M70 36 L74 15 L60 28 Z" fill="#e8a0b0" stroke="#1c1a24" stroke-width="1.8" stroke-linejoin="round"/><path d="M50 22 C62 22 71 29 75 40 L88 50 L77 53 L85 61 L71 62 C66 73 59 84 50 90 C41 84 34 73 29 62 L15 61 L23 53 L12 50 L25 40 C29 29 38 22 50 22 Z" fill="${l}" stroke="#1c1a24" stroke-width="3" stroke-linejoin="round"/><path d="M50 22 C59 22 66 26 70 33 L58 46 L50 44 L42 46 L30 33 C34 26 41 22 50 22 Z" fill="${d}" opacity=".85"/><path d="M33 45 L46 50 L42 55 C38 54 35 51 33 45 Z M67 45 L54 50 L58 55 C62 54 65 51 67 45 Z" fill="#ffd35a" stroke="#1c1a24" stroke-width="2.2" stroke-linejoin="round"/><path d="M41 49.5 L42.5 54 M59 49.5 L57.5 54" stroke="#1c1a24" stroke-width="2.4" stroke-linecap="round"/><path d="M30 42 L46 47 M70 42 L54 47" stroke="#1c1a24" stroke-width="3" stroke-linecap="round"/><path d="M43 55 L57 55 L61 70 C59 77 55 81 50 82 C45 81 41 77 39 70 Z" fill="#f3ead8" stroke="#1c1a24" stroke-width="2.2" stroke-linejoin="round"/><path d="M45 63 C45 60 55 60 55 63 L50 68 Z" fill="#1c1a24" stroke="#1c1a24" stroke-width="2" stroke-linejoin="round"/><path d="M50 68 L50 71" stroke="#1c1a24" stroke-width="2"/><path d="M42 72 Q50 69 58 72 L56 78 Q50 81 44 78 Z" fill="#8a1028" stroke="#1c1a24" stroke-width="2" stroke-linejoin="round"/><path d="M44 72 L45.5 77 L47 72.3 Z M56 72 L54.5 77 L53 72.3 Z" fill="#fff" stroke="#1c1a24" stroke-width="1" stroke-linejoin="round"/><path d="M22 53 L30 55 M24 59 L31 59 M78 53 L70 55 M76 59 L69 59" stroke="${d}" stroke-width="2" stroke-linecap="round"/>`,
];
let embN = 0;
// e = {f:forma, c:colore, s:simbolo}, lv = livello del clan (3 argento, 6 oro, 10 fuoco)
function clanEmblem(e, lv = 1, px = 56) {
  const id = 'emb' + (++embN), [d, m, l] = EMB_COL[e.c % EMB_COL.length], p = EMB_PATH[e.f % EMB_PATH.length];
  const rim = lv >= 10 ? 'fuoco' : lv >= 6 ? 'oro' : lv >= 3 ? 'argento' : '';
  const rimCol = {argento:['#f4f6fb', '#9aa3b5'], oro:['#fff2a8', '#d99a1e'], fuoco:['#ffe066', '#ff4a1a']}[rim];
  const flames = rim === 'fuoco' ? `<g fill="#ff6a2a" stroke="#1c1a24" stroke-width="2" stroke-linejoin="round">${[18, 34, 50, 66, 82].map((x, i) => `<path d="M${x - 7} ${i % 2 ? 12 : 8} C${x - 6} ${i % 2 ? 2 : -2} ${x} ${i % 2 ? 0 : -6} ${x} ${i % 2 ? -4 : -10} C${x + 3} ${i % 2 ? 0 : -4} ${x + 7} ${i % 2 ? 2 : 0} ${x + 7} ${i % 2 ? 12 : 8} Z"/>`).join('')}</g>` : '';
  return `<svg class="emb" viewBox="-6 -14 112 116" width="${px}" height="${px}" aria-hidden="true"><defs>
    <linearGradient id="${id}g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${m}"/><stop offset="1" stop-color="${d}"/></linearGradient>
    ${rimCol ? `<linearGradient id="${id}r" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${rimCol[0]}"/><stop offset="1" stop-color="${rimCol[1]}"/></linearGradient>` : ''}
    <clipPath id="${id}c"><path d="${p}"/></clipPath></defs>
    ${flames}
    <path d="${p}" fill="url(#${id}g)" stroke="${rimCol ? `url(#${id}r)` : '#1c1a24'}" stroke-width="${rimCol ? 9 : 4}" stroke-linejoin="round"/>
    ${rimCol ? `<path d="${p}" fill="none" stroke="#1c1a24" stroke-width="2.5" stroke-linejoin="round"/>` : ''}
    <g clip-path="url(#${id}c)"><path d="M0 0 H100 V40 C70 30 30 30 0 40 Z" fill="rgba(255,255,255,.12)"/></g>
    <g transform="translate(50 52) scale(.78) translate(-50 -50)">${EMB_SYMS[e.s % EMB_SYMS.length](d, l)}</g>
  </svg>`;
}
