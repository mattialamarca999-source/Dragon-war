// prova il Mondo 17 nel gioco: mappa, castello normale, castello notturno, i due miniboss, il boss e il Cobra Bianco in campo
const {chromium} = require('/home/claude/.npm-global/lib/node_modules/@playwright/mcp/node_modules/playwright-core');
const out = '/home/claude/work/w17/';
const runs = JSON.parse(process.argv[2] || '[[0,12]]');   // [castello, secondi]
(async () => {
  const b = await chromium.launch({executablePath:'/usr/bin/google-chrome'}); const errs = [];
  for (const [c, secs, tag] of runs) {
    const q = await b.newPage({viewport:{width:844, height:390}, deviceScaleFactor:2});
    q.on('pageerror', e => errs.push(c + ': ' + e.message));
    await q.clock.install(); await q.goto('file:///home/claude/dragon-war/t17.html');
    const deck = ['cobrabianco', 'orco', 'strega', 'lupo', 'fionda', 'topi'];
    const stars = {}; for (let a = 0; a < 16; a++) for (let k = 0; k < 12; k++) stars[a + ':' + k] = 3; for (let k = 0; k < 11; k++) stars['16:' + k] = 3;
    await q.evaluate(([st, d]) => localStorage.setItem('dragonwar_beta_v2', JSON.stringify({seenStory:true, tutorialDone:true, lang:'it', stars:st, unlocked:d, ru:600, gold:5000, squad:d, boost:{fire:2, gold2:1}})), [stars, deck]);
    await q.reload(); await q.clock.runFor(1200); await q.click('#calNo', {force:true}).catch(() => {}); await q.clock.runFor(200);
    await q.click('#menuPlay', {force:true}); await q.clock.runFor(300); await q.click('.wCard >> nth=18', {force:true}); await q.clock.runFor(600);
    if (c < 0) { await q.screenshot({path:out + 'mappa.png'}); const info = await q.evaluate(() => [0, 2, 3, 6, 7, 10, 11].map(i => { const l = DW.levelOf(16, i); return [i + 1, l.name, l.night, l.semi, l.boss]; })); console.log(JSON.stringify(info)); await q.close(); continue; }
    await q.click(`.node >> nth=${c}`, {force:true}); await q.clock.runFor(300); await q.click('#sqGo', {force:true}); await q.clock.runFor(3200);
    if (secs > 40) await q.evaluate(x => { __S.t = x; }, secs - 6);
    for (let t = (secs > 40 ? secs - 6 : 0); t < secs; t += 3) { await q.evaluate(() => { if (window.__S) __S.wallet.cur = 2000; }); await q.click(`#unitRow .ub >> nth=${(t / 3) % 3}`, {force:true, timeout:500}).catch(() => {}); await q.clock.runFor(3000); }
    await q.screenshot({path:out + (tag || 'c' + (c + 1)) + '.png'});
    await q.close();
  }
  console.log('errori:', errs.length ? [...new Set(errs)].join(' | ') : 'nessuno'); await b.close();
})();
