const {chromium}=require('/home/claude/.npm-global/lib/node_modules/@playwright/mcp/node_modules/playwright-core');
const jobs=JSON.parse(process.argv[2]); // [[name, world, time, ob], ...]
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/google-chrome'});
const html='<!doctype html><html><head><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1"></head><body style="margin:0">'+require('fs').readFileSync('dragon-war-grafica.html','utf8')+'</body></html>';
require('fs').writeFileSync('t.html',html);
const p=await b.newPage({viewport:{width:900,height:560},deviceScaleFactor:1});
p.on('pageerror',e=>console.log('ERR',e.message));p.on('console',m=>m.type()=='error'&&console.log('C',m.text()));
await p.goto('file://'+process.cwd()+'/t.html');await p.waitForTimeout(800);
for(const [n,w,t,o,cam] of jobs){await p.evaluate(([w,t,o,cam])=>{setWorld(w,t,o); units.length=0; shots.length=0; fx.length=0; spV=1e9; spG=1e9; fire=0; fireCd=1e9; fireP.length=0; if(cam!==undefined){camT=cam;}},[w,t,o,cam]);await p.waitForTimeout(700);
await p.screenshot({path:n+'.png',clip:{x:0,y:0,width:900,height:470}});}
await b.close()})();
