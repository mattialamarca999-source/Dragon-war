const {chromium} = require('/home/claude/.npm-global/lib/node_modules/@playwright/mcp/node_modules/playwright-core');
(async () => { const b = await chromium.launch({executablePath:'/usr/bin/google-chrome'}); const q = await b.newPage(); const errs = []; q.on('pageerror', e => errs.push(e.message));
  const old = {seenStory:true, tutorialDone:true, calSeen:'2000-01-01', gold:4321, ru:77, stars:{'0:0':3, '0:1':2, '1:0':3}, unlocked:['goblin','topi','lupo','krampus'], up:{units:{goblin:5}, tana:{hp:2, cat:1, rate:0}, drago:{dmg:3, charge:1}}, shards:{goblin:9}, lang:'it', savedAt:1};
  await q.goto('file:///home/claude/dragon-war/dragon-war.html'); await q.evaluate(o => localStorage.setItem('dragonwar_v2', JSON.stringify(o)), old); await q.reload(); await q.waitForTimeout(1500);
  const now = await q.evaluate(() => ({main:JSON.parse(localStorage.getItem('dragonwar_v2')), bak:!!localStorage.getItem('dragonwar_v2_bak')}));
  const m = now.main; console.log('oro', m.gold, 'rubini', m.ru, 'stelle', JSON.stringify(m.stars), 'cattivi', m.unlocked.join(','), 'drago', JSON.stringify(m.up.drago), 'tana', JSON.stringify(m.up.tana), 'goblin lv', m.up.units.goblin, 'copia', now.bak);
  // salvataggio rovinato: deve ripartire dalla copia
  await q.evaluate(() => localStorage.setItem('dragonwar_v2', '{rotto')); await q.reload(); await q.waitForTimeout(1200);
  console.log('dopo salvataggio rovinato, oro:', await q.evaluate(() => JSON.parse(localStorage.getItem('dragonwar_v2_bak')).gold), 'menu oro:', (await q.textContent('#menuGold').catch(() => '?')));
  console.log(errs.join('|') || 'nessun errore'); await b.close(); })();
