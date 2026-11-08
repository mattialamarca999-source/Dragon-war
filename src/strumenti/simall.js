// Bilanciamento delle 10 mappe: simula castelli campione con i potenziamenti che un giocatore normale ha a quel punto
const DW = require(process.env.CORE || '/home/claude/dragon-war/core.js');
const [w0, w1, N] = [+(process.argv[2] || 1), +(process.argv[3] || 9), +(process.argv[4] || 12)];
const expectedUp = g => {                                          // potenziamenti attesi al castello g
  const L = Math.max(+(process.env.LMIN || 0), g < 16 ? Math.min(5, 1 + Math.floor(g / 4)) : Math.min(10, 5 + Math.floor((g - 16) / 12))), b = Math.max(0, Math.min(5, Math.floor((g - 3) / 12)));
  return {L, b};
};
const squadAt = g => g < 11 ? ['goblin', 'topi', 'fionda', 'orco', 'strega', 'lupo'] : g < 19 ? ['goblin', 'strega', 'gnomo', 'uncino', 'orco', 'lupo'] : g < 35 ? ['goblin', 'strega', 'gnomo', 'uncino', 'mangiafuoco', 'orco'] : ['goblin', 'strega', 'gnomo', 'gigante', 'mangiafuoco', 'orco'];
const players = {
  Bravo: (s) => {
    const ours = s.units.filter(u => !u.dead && u.side === 0), foes = s.units.filter(u => !u.dead && u.side === 1);
    if (s.fire.v >= 1 && (foes.length >= 4 || foes.some(u => DW.U[u.k].boss))) DW.fire(s);
    if (s.wallet.lv < 5 && ours.length >= 2 && s.wallet.cur >= DW.walletCost(s)) DW.upgradeWallet(s);
    const sq = s.hand.slice().sort((a, b) => DW.U[b].cost - DW.U[a].cost);
    if (s.wallet.cur >= DW.walletMax(s.wallet.lv) * .7) { for (const k of sq) if (DW.spawn(s, k)) return; }
    for (const k of sq.slice().reverse()) if (DW.spawn(s, k)) return;
  },
  Medio: (s) => {                                                  // gioca discretamente: potenzia un po', usa la fiammata
    s._n = (s._n || 0) + 1; if (s._n % 3) return;
    const foes = s.units.filter(u => !u.dead && u.side === 1);
    if (s.fire.v >= 1 && foes.length >= 3) DW.fire(s);
    if (s.wallet.lv < 3 && s.t > 15 && s.wallet.cur >= DW.walletCost(s)) DW.upgradeWallet(s);
    if (Math.random() < .8) DW.spawn(s, s.hand[Math.floor(Math.random() * s.hand.length)]);
  }
};
const m = t => `${Math.floor(t / 60)}:${String(Math.round(t % 60)).padStart(2, '0')}`;
for (let w = w0; w <= w1; w++) {
  const W = DW.WORLDS[w], all = process.env.CS ? JSON.parse(process.env.CS) : [...Array(W.n).keys()].filter((v, i, a) => a.indexOf(v) === i), picks = process.env.BOSS ? all.filter(c => DW.levelOf(w, c).boss) : all;
  for (const c of picks) {
    const lv = DW.levelOf(w, c), {L, b} = expectedUp(lv.g), sq = squadAt(lv.g);
    const units = Object.fromEntries(sq.map(k => [k, L]));
    const out = [];
    for (const [pn, ai, noUp] of [['Bravo', players.Bravo], ['Medio', players.Medio], ]) {
      let wins = 0, t = 0;
      for (let i = 0; i < N; i++) {
        const s = DW.create({world:w, level:c, squad:sq, up:noUp ? {} : {units, tana:{hp:b, cat:b, rate:b}, drago:{dmg:b, charge:b}}}); let acc = 0;
        while (!s.over && s.t < 600) { DW.step(s, 1 / 30); s.ev.length = 0; if ((acc += 1 / 30) >= .25) { acc = 0; ai(s); } }
        if (s.over > 0) wins++; t += s.t;
      }
      out.push(`${pn} ${String(wins).padStart(2)}/${N} ${m(t / N)}`);
    }
    console.log(`M${w + 1} C${String(c + 1).padStart(2)} g${String(lv.g).padStart(2)} ${(lv.boss ? '[' + lv.boss + ']' : '').padEnd(20)} forza ${lv.eMul.toFixed(2)} liv${L} base${b} | ${out.join(' | ')}`);
  }
}
