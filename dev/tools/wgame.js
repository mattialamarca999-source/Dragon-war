// prova i mondi nuovi nel gioco: per ogni mondo una battaglia, foto di giorno, al tramonto e di notte
const {chromium} = require('/home/claude/.npm-global/lib/node_modules/@playwright/mcp/node_modules/playwright-core');
const worlds = (process.argv[2] || '0').split(',').map(Number), out = '/tmp/claude-0/-home-claude/80e20e9f-4261-521b-a647-4c93b9ac332a/scratchpad/wg';
const vp = process.argv[3] ? process.argv[3].split('x').map(Number) : [844, 390];
(async () => {
  const b = await chromium.launch({executablePath:'/usr/bin/google-chrome'});
  const errs = [];
  for (const w of worlds) {
    const q = await b.newPage({viewport:{width:vp[0], height:vp[1]}, deviceScaleFactor:2});
    q.on('pageerror', e => errs.push(w + ': ' + e.message));
    await q.clock.install();
    await q.goto('file:///home/claude/dragon-war/dragon-war-beta.html');
    const deck = ['goblin', 'orco', 'strega', 'lupo', 'fionda', 'topi'];
    const stars = {}; for (let a = 0; a < 15; a++) for (let c = 0; c < 10; c++) stars[a + ':' + c] = 3;
    await q.evaluate(([st, d]) => localStorage.setItem('dragonwar_beta_v2', JSON.stringify({seenStory:true, tutorialDone:true, stars:st, unlocked:d, ru:600, gold:5000, squad:d, boost:{fire:2, gold2:1}})), [stars, deck]);
    await q.reload(); await q.clock.runFor(1200); await q.click('#calNo', {force:true}).catch(() => {}); await q.clock.runFor(200);
    await q.click('#menuPlay', {force:true}); await q.clock.runFor(300); await q.click(`.wCard >> nth=${w + 2}`, {force:true}); await q.clock.runFor(300);
    await q.click(`.node >> nth=${+(process.argv[4] || 0)}`, {force:true}); await q.clock.runFor(300); await q.click('#sqGo', {force:true}); await q.clock.runFor(3200);
    for (let i = 0; i < 6; i++) { await q.click(`#unitRow .ub >> nth=${i % 3}`, {force:true, timeout:500}).catch(() => {}); await q.clock.runFor(900); }
    for (const [l, name] of [['0', 'd'], ['.5', 's'], ['1', 'n']]) {
      await q.evaluate(l2 => document.querySelector(`#lightBtns button[data-l="${l2}"]`).click(), l);
      await q.clock.runFor(9000);
      await q.screenshot({path:`${out}_${w}_${name}.png`});
    }
    await q.close();
  }
  console.log('errori:', errs.length ? [...new Set(errs)].join(' | ') : 'nessuno');
  await b.close();
})();
