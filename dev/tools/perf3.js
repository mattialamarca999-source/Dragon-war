// battaglia con tanti personaggi: quanto tempo serve per disegnare ogni fotogramma
const {chromium} = require('/home/claude/.npm-global/lib/node_modules/@playwright/mcp/node_modules/playwright-core');
const file = process.argv[2], tag = process.argv[3] || '', N = +(process.argv[4] || 50);
(async () => {
  const b = await chromium.launch({executablePath:'/usr/bin/google-chrome'}); const errs = [];
  const q = await b.newPage({viewport:{width:844, height:390}, deviceScaleFactor:2, locale:'it-IT'}); q.on('pageerror', e => errs.push(e.message));
  await q.goto('file://' + file);
  const deck = ['goblin', 'orco', 'topi', 'lupo', 'fionda', 'strega'], stars = {}; for (let a = 0; a < 15; a++) for (let c = 0; c < 10; c++) stars[a + ':' + c] = 3;
  await q.evaluate(([st, d]) => localStorage.setItem('dragonwar_beta_v2', JSON.stringify({lang:'it', seenStory:true, tutorialDone:true, stars:st, unlocked:d, ru:600, gold:99999, squad:d})), [stars, deck]);
  await q.reload(); await q.waitForTimeout(1500); await q.click('#calNo', {force:true}).catch(() => {});
  await q.click('#menuPlay', {force:true}); await q.waitForTimeout(400); await q.click('.wCard >> nth=6', {force:true}); await q.waitForTimeout(400);
  await q.click('.node >> nth=6', {force:true}); await q.waitForTimeout(400); await q.click('#sqGo', {force:true}); await q.waitForTimeout(3500);
  for (let i = 0; i < N; i++) { await q.evaluate(() => { const s = __S; s.wallet.cur = 1e6; const k = s.hand[Math.floor(Math.random() * s.hand.length)]; __DW.spawn(s, k, 0); }); await q.waitForTimeout(90); }
  await q.waitForTimeout(1500);
  await q.evaluate(() => { __T.r = __T.u = __T.b = __T.n = 0; }); await q.waitForTimeout(4000);
  const r = await q.evaluate(() => ({n:__T.n, r:__T.r / __T.n, u:__T.u / __T.n, b:__T.b / __T.n, units:__S.units.filter(u => !u.dead).length}));
  await q.screenshot({path:`perf3_${tag}.png`});
  console.log(tag, 'personaggi', r.units, '| ms per fotogramma: totale', r.r.toFixed(1), 'personaggi', r.u.toFixed(1), 'sfondo', r.b.toFixed(1), '| fotogrammi', r.n);
  console.log('errori:', errs.join(' | ') || 'nessuno'); await b.close();
})();
