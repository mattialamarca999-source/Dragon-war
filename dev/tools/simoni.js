// confronto: stesso mazzo, cambia solo il cattivo forte. Battaglie vere contro i castelli dei mondi 16-18, giocatore medio simulato
const DW = require('/home/claude/dragon-war/core.js'), N = +(process.argv[2] || 40);
const upAt = L => ({units:Object.fromEntries(DW.ROSTER.map(k => [k, L])), tana:{hp:5, cat:5, rate:5}, drago:{dmg:5, charge:5, wall:3}});
const base = ['goblin', 'strega', 'orco', 'lupo', 'fionda'];
const run = (star, w, c, L) => { let win = 0, hp = 0, t = 0, cd = 0;
  for (let i = 0; i < N; i++) { const s = DW.create({world:w, level:c, squad:[...base, star], up:upAt(L)}); let acc = 0, n = 0;
    while (!s.over && s.t < 300) { DW.step(s, 1 / 30); s.ev.length = 0; if ((acc += 1 / 30) >= .25) { acc = 0; n++;
      if (s.fire.v >= 1 && s.units.filter(u => !u.dead && u.side === 1).length >= 3) DW.fire(s);
      if (s.wallet.lv < 6 && s.wallet.cur >= DW.walletCost(s)) DW.upgradeWallet(s);
      if (s.hand.includes(star) && DW.canSpawn(s, star)) DW.spawn(s, star); else if (n % 2 === 0 && s.wallet.cur > 260) { const k = s.hand[Math.floor(Math.random() * s.hand.length)]; if (k !== star) DW.spawn(s, k); } } }
    if (s.over > 0) { win++; hp += s.base.hp / s.base.max; } t += s.t; cd += 1 - Math.max(0, s.castle.hp) / s.castle.max; }
  return `${(win / N * 100).toFixed(0).padStart(3)}% vinte · tana ${(hp / Math.max(1, win) * 100).toFixed(0)}% · ${Math.round(t / N)}s · castello colpito ${(cd / N * 100).toFixed(0)}%`; };
const stars = ['reoni', 'cavaliereverde', 'babajaga', 'dragotempesta', 'cobrabianco', 'orco'];
for (const [w, c, L] of [[15, 6, 9], [16, 6, 10], [17, 3, 10], [17, 9, 10]]) { console.log(`--- mondo ${w + 1}, castello ${c + 1}, cattivi liv ${L}`); for (const k of stars) console.log(k.padEnd(16), run(k, w, c, L)); }
