// Partite a due: duello, alternativo (cattivi contro buoni) e insieme (5 castelli per due)
const DW = require('./core.js'), N = +(process.argv[2] || 16);
const upAt = L => ({units:Object.fromEntries(DW.ROSTER.map(k => [k, L])), tana:{hp:Math.min(5, L >> 1), cat:Math.min(5, L >> 1), rate:Math.min(5, L >> 1)}, drago:{dmg:Math.min(5, L >> 1), charge:Math.min(5, L >> 1)}});
const bot = pi => (s) => {                                               // giocatore medio, per il lato pi
  const k = '_n' + pi; s[k] = (s[k] || 0) + 1; if (s[k] % 3) return;
  const pl = pi ? s.p2 : s, side = pi ? s.p2.side : 0, foes = s.units.filter(u => !u.dead && u.side !== side);
  if (pl.fire.v >= 1 && foes.length >= 3) DW.fire(s, pi);
  if (pl.wallet.lv < 3 && s.t > 15 && pl.wallet.cur >= DW.walletCost(s, pi)) DW.upgradeWallet(s, pi);
  if (Math.random() < .8) DW.spawn(s, pl.hand[Math.floor(Math.random() * pl.hand.length)], pi);
};
const run = (o, label) => { let w = 0, t = 0, dr = 0;
  for (let i = 0; i < N; i++) { const s = DW.create(o); let acc = 0;
    while (!s.over && s.t < 480) { DW.step(s, 1 / 30); s.ev.length = 0; if ((acc += 1 / 30) >= .25) { acc = 0; bot(0)(s); bot(1)(s); } }
    if (s.over > 0) w++; else if (!s.over) dr++; t += s.t; }
  console.log(label.padEnd(44), `vince chi ospita ${w}/${N} · pareggi ${dr} · durata ${Math.floor(t / N / 60)}:${String(Math.round(t / N % 60)).padStart(2, '0')}`);
};
const V = ['goblin', 'strega', 'orco', 'gnomo', 'lupo', 'mangiafuoco'];
run({world:3, level:2, squad:V, up:upAt(5), mp:{mode:'duel', squad:V, up:upAt(5)}}, 'Duello stessi mazzi liv5');
run({world:3, level:2, squad:V, up:upAt(8), mp:{mode:'duel', squad:V, up:upAt(4)}}, 'Duello liv8 contro liv4');
for (const B of [['soldatino', 'arciere', 'fata', 'porcellino', 'cacciatore', 'principe'], ['nani', 'raperonzolo', 'fata', 'carrozza', 'musicanti', 'principe']])
  run({world:3, level:2, squad:V, up:upAt(5), mp:{mode:'alt', squad:B}}, 'Alternativo liv5 vs ' + B.slice(0, 2).join('+'));
for (let i = 0; i < 5; i++) { const L = [4, 6, 7, 9, 10][i]; run({coop:i, squad:V, up:upAt(L), mp:{mode:'coop', squad:V, up:upAt(L)}}, `Insieme ${i + 1} ${DW.COOP[i].name.slice(0, 22)} liv${L}`); }
