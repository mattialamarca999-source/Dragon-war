// backtest difficoltà: stesso giocatore (livello che cresce coi mondi), tutti i castelli dei mondi scelti; quante vittorie, quanti buoni al minuto e quanto sono forti
const DW = require(process.env.CORE || '/home/claude/dragon-war/core.js'), N = +(process.argv[2] || 16), WS = (process.argv[3] || '12,13,14,15,16,17').split(',').map(Number);
const upAt = L => ({units:Object.fromEntries(DW.ROSTER.map(k => [k, L])), tana:{hp:Math.min(10, L), cat:Math.min(10, L), rate:Math.min(10, L)}, drago:{dmg:Math.min(10, L), charge:Math.min(10, L), wall:Math.min(5, L >> 1)}});
const SQ = ['orco', 'strega', 'lupo', 'babajaga', 'gigantegh', 'idra'];
const run = (w, c, L) => { let win = 0, t = 0, goods = 0, gHp = 0, gN = 0;
  for (let i = 0; i < N; i++) { const s = DW.create({world:w, level:c, squad:SQ, up:upAt(L)}); let acc = 0; const seen = new Set();
    while (!s.over && s.t < 360) { DW.step(s, 1 / 30); s.ev.length = 0;
      for (const u of s.units) if (u.side === 1 && !seen.has(u.id)) { seen.add(u.id); goods++; gHp += u.max || u.hp || 0; gN++; }
      if ((acc += 1 / 30) >= .2) { acc = 0;
        if (s.fire.v >= 1 && s.units.filter(u => !u.dead && u.side === 1).length >= 3) DW.fire(s);
        if (s.wallet.lv < DW.WALLET_MAX_LV && s.wallet.cur >= DW.walletCost(s) && s.t > 4) DW.upgradeWallet(s);
        const can = s.hand.filter(k => DW.canSpawn(s, k)); if (can.length) DW.spawn(s, can.sort((a, b) => DW.costOf(b) - DW.costOf(a))[0]); } }
    if (s.over > 0) win++; t += s.t; }
  return {win:win / N, t:t / N, gpm:goods / (t / 60), ghp:gHp / Math.max(1, gN)}; };
for (const w of WS) { const L = Math.min(10, Math.max(2, Math.round(2 + w * .47))); const rows = [];
  for (let c = 0; c < DW.WORLDS[w].n; c++) { const r = run(w, c, L); rows.push(r); }
  console.log(`mondo ${w + 1} ${DW.WORLDS[w].name.padEnd(26)} liv ${L} · vittorie per castello: ${rows.map(r => String(Math.round(r.win * 100)).padStart(3)).join(' ')} · media ${Math.round(rows.reduce((a, r) => a + r.win, 0) / rows.length * 100)}%`);
  console.log(`   buoni al minuto: ${rows.map(r => String(Math.round(r.gpm)).padStart(3)).join(' ')} · vita media di un buono: ${rows.map(r => String(Math.round(r.ghp)).padStart(4)).join(' ')}`); }
