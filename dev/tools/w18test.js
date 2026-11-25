const {chromium} = require('/home/claude/.npm-global/lib/node_modules/@playwright/mcp/node_modules/playwright-core');
const out = '/home/claude/work/w18/'; const runs = JSON.parse(process.argv[2]);
(async () => { const b = await chromium.launch({executablePath:'/usr/bin/google-chrome'}); const errs = [];
  for (const [c, secs, tag, js] of runs) {
    const q = await b.newPage({viewport:{width:844, height:390}, deviceScaleFactor:2}); q.on('pageerror', e => errs.push(c + ': ' + e.message));
    await q.clock.install(); await q.goto('file:///home/claude/dragon-war/t18.html');
    const deck = ['reoni', 'orco', 'strega', 'lupo', 'fionda', 'topi'];
    const stars = {}; for (let a = 0; a < 17; a++) for (let k = 0; k < 12; k++) stars[a + ':' + k] = 3; for (let k = 0; k < 11; k++) stars['17:' + k] = 3;
    await q.evaluate(([st, d]) => localStorage.setItem('dragonwar_beta_v2', JSON.stringify({seenStory:true, tutorialDone:true, lang:'it', stars:st, unlocked:d, ru:600, gold:5000, squad:d, boost:{fire:2, gold2:1}})), [stars, deck]);
    await q.reload(); await q.clock.runFor(1200); await q.click('#calNo', {force:true}).catch(() => {}); await q.clock.runFor(200);
    await q.click('#menuPlay', {force:true}); await q.clock.runFor(400);
    if (c === -2) { await q.evaluate(() => document.querySelector('#wList').lastElementChild.scrollIntoView()); await q.clock.runFor(300); await q.screenshot({path:out + 'lista.png'}); await q.close(); continue; }
    await q.click('.wCard >> nth=19', {force:true}); await q.clock.runFor(600);
    if (c === -1) { await q.screenshot({path:out + 'mappa.png'}); await q.evaluate(() => { const el = document.querySelector('.node >> nth=0'); }).catch(() => {}); await q.close(); continue; }
    await q.click(`.node >> nth=${c}`, {force:true}); await q.clock.runFor(300); await q.click('#sqGo', {force:true}); await q.clock.runFor(3200);
    if (secs > 40) await q.evaluate(x => { __S.t = x; }, secs - 8);
    for (let t = (secs > 40 ? secs - 8 : 0); t < secs; t += 2) { await q.evaluate(() => { if (window.__S) __S.wallet.cur = 2000; }); await q.click(`#unitRow .ub >> nth=${(t / 2) % 3}`, {force:true, timeout:500}).catch(() => {}); if (js) await q.evaluate(`(${js})()`); await q.clock.runFor(2000); }
    if (js) { await q.evaluate(`(${js})()`); await q.clock.runFor(700); }
    await q.screenshot({path:out + tag + '.png'}); await q.close();
  }
  console.log('errori:', errs.length ? [...new Set(errs)].join(' | ') : 'nessuno'); await b.close(); })();
