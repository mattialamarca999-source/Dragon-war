// foglio delle skin: per ogni riga una skin in 4 pose (fermo, marcia, carica, colpisce)
const {chromium} = require('/home/claude/.npm-global/lib/node_modules/@playwright/mcp/node_modules/playwright-core');
const sets = JSON.parse(process.argv[2]);
(async () => { const b = await chromium.launch({executablePath:'/usr/bin/google-chrome'});
  const html = '<!doctype html><html><head><meta charset=utf-8></head><body style="margin:0">' + require('fs').readFileSync('dragon-war-grafica.html', 'utf8') + '</body></html>'; require('fs').writeFileSync('t.html', html);
  for (const [name, rows] of Object.entries(sets)) { const H = rows.length * 240 + 30; const p = await b.newPage({viewport:{width:1000, height:H}, deviceScaleFactor:1.5});
    p.on('pageerror', e => console.log('ERR', e.message));
    await p.goto('file://' + process.cwd() + '/t.html'); await p.waitForTimeout(400);
    await p.evaluate(([rows, H]) => { const c = document.createElement('canvas'); c.width = 1500; c.height = H * 1.5; Object.assign(c.style, {position:'fixed', left:0, top:0, zIndex:9, width:'1000px', height:H + 'px'}); document.body.appendChild(c);
      const old = g; g = c.getContext('2d'); g.scale(1.5, 1.5); g.fillStyle = '#c4d8a4'; g.fillRect(0, 0, 1000, H);
      const P = [[0, 'fermo'], [1, 'marcia'], [2, 'carica'], [3, 'colpisce']];
      rows.forEach(([lk, title], r) => { const k = lk === 'base' ? title : SKINS[lk].k, sc = Math.min(k === 'topi' ? 1.45 : 2.3, 185 / DEF[k].h); g.fillStyle = '#1b1238'; g.font = 'bold 18px sans-serif'; g.fillText(lk === 'base' ? title + ' (com\'è ora)' : title, 10, 30 + r * 240 + 4);
        P.forEach(([m, n], i) => { g.save(); g.translate(150 + i * 230, 30 + r * 240 + 222); g.fillStyle = 'rgba(20,30,40,.18)'; g.beginPath(); g.ellipse(0, 0, 50, 8, 0, 0, 7); g.fill(); g.scale(sc, sc);
          DRAW[k]({t:1.3 + i * .7, ph:m === 1 ? 1.2 : 0, walking:m === 1, atk:m === 2 ? .3 : m === 3 ? .62 : -1, u:m === 2 ? .75 : m === 3 ? -.35 : 0, mood:m, blink:1, look:lk === 'base' ? null : lk}); g.restore();
          if (r === 0) { g.fillStyle = '#1b1238'; g.font = 'bold 15px sans-serif'; g.fillText(n, 125 + i * 230, 20); } }); }); g = old; }, [rows, H]);
    await p.screenshot({path:name + '.png'}); await p.close(); } await b.close(); })();
