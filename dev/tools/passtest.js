const {chromium} = require('/home/claude/.npm-global/lib/node_modules/@playwright/mcp/node_modules/playwright-core');
(async () => {
  const b = await chromium.launch({executablePath:'/usr/bin/google-chrome'}); const errs = [];
  for (const [tag, date] of [['nov', '2026-11-23T12:00:00'], ['dic', '2026-12-10T12:00:00'], ['gen', '2027-01-15T12:00:00']]) {
    const q = await b.newPage({viewport:{width:390, height:844}, deviceScaleFactor:2, locale:'it-IT'}); q.on('pageerror', e => errs.push(e.message));
    await q.clock.install({time:new Date(date)}); await q.goto('file:///home/claude/dragon-war/dragon-war.html');
    await q.evaluate(() => localStorage.setItem('dragonwar_v2', JSON.stringify({lang:'it', seenStory:true, tutorialDone:true, stars:{'0:0':3}, gold:5000, ru:600, pass:{season:0, xp:2000, prem:true, gotF:[], gotP:[], d:{k:'', prog:{}, got:[]}, w:{k:'', prog:{}, got:[]}}})));
    await q.reload(); await q.clock.runFor(1500); await q.click('#calNo', {force:true}).catch(() => {}); await q.clock.runFor(300);
    await q.click('#menuPass', {force:true}); await q.clock.runFor(600);
    await q.evaluate(() => { const el = [...document.querySelectorAll('#passList > *')]; const t = el[14] || el[el.length - 1]; if (t) t.scrollIntoView(); });
    await q.clock.runFor(300); await q.screenshot({path:`pass_${tag}.png`});
    console.log(tag, await q.evaluate(() => document.getElementById('passEnd').textContent + ' | lv ' + document.getElementById('passLv').textContent));
    await q.close();
  }
  console.log('errori:', errs.join(' | ') || 'nessuno'); await b.close();
})();
