// fluidità percepita: fotogrammi al secondo e scatti (fotogrammi oltre 33 ms) in battaglia con tanti personaggi, sera e notte
const {chromium} = require('/home/claude/.npm-global/lib/node_modules/@playwright/mcp/node_modules/playwright-core');
(async () => { const b = await chromium.launch({executablePath:'/usr/bin/google-chrome'});
  for (const u of process.argv.slice(2)) { const c = await b.newContext({viewport:{width:390, height:844}, deviceScaleFactor:2, isMobile:true, hasTouch:true}); const q = await c.newPage(); const errs = []; q.on('pageerror', e => errs.push(e.message));
    await q.addInitScript(() => localStorage.setItem('dragonwar_v2', JSON.stringify({seenStory:true, tutorialDone:true, lang:'it', calSeen:'2099-01-01', stars:{'0:0':3, '0:1':3}})));
    await q.goto(u); await q.waitForTimeout(2500); await q.click('#calNo', {force:true}).catch(() => {});
    const meas = async (name, ms) => { const r = await q.evaluate(ms => new Promise(res => { const d = []; let last = performance.now(); const t0 = last; const tick = now => { d.push(now - last); last = now; if (now - t0 < ms) requestAnimationFrame(tick); else res(d); }; requestAnimationFrame(tick); }), ms);
      const fps = r.length / ms * 1000, jank = r.filter(x => x > 33).length / r.length * 100, big = r.filter(x => x > 66).length; const res = await q.evaluate(() => typeof RES !== 'undefined' ? RES : '-').catch(() => '-');
      console.log(u.slice(-6), name.padEnd(20), String(Math.round(fps)).padStart(3), 'fps · scatti', jank.toFixed(0).padStart(3) + '% dei fotogrammi · blocchi >66 ms:', big); };
    await meas('menu', 3000);
    await q.click('#menuPlay', {force:true}); await q.waitForTimeout(600); await q.click('.wCard >> nth=2', {force:true}); await q.waitForTimeout(600); await q.click('.node >> nth=1', {force:true}); await q.waitForTimeout(600); await q.click('#sqGo', {force:true}); await q.waitForTimeout(4500);
    await q.evaluate(async () => { const s = window.__S(); for (let i = 0; i < 36; i++) { s.wallet.cur = 1e6; DW.spawn(s, s.hand[i % s.hand.length]); await new Promise(r => setTimeout(r, 50)); } });
    await meas('battaglia, giorno', 5000); await q.evaluate(() => window.__setLight(.5)); await meas('tramonto', 4000); await q.evaluate(() => window.__setLight(1)); await meas('notte', 4000);
    console.log('   errori:', [...new Set(errs)].join(' | ') || 'nessuno'); await c.close(); }
  await b.close(); })();
