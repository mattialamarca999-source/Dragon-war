const {chromium}=require('/home/claude/.npm-global/lib/node_modules/@playwright/mcp/node_modules/playwright-core');
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/google-chrome'});
const html='<!doctype html><html><head><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1"></head><body style="margin:0">'+require('fs').readFileSync('dragon-war-grafica.html','utf8')+'</body></html>';
require('fs').writeFileSync('t.html',html);
for(const [n,w,h,wait,fire] of [['land',900,520,1500,0],['fire',900,520,1500,1],['phone',400,760,2500,0]]){
const p=await b.newPage({viewport:{width:w,height:h},deviceScaleFactor:n=='phone'?2:1.5});
p.on('pageerror',e=>console.log('ERR',e.message));p.on('console',m=>m.type()=='error'&&console.log('C',m.text()));
await p.goto('file://'+process.cwd()+'/t.html');await p.waitForTimeout(wait);
if(fire){await p.click('#bFire');await p.waitForTimeout(1500);}
await p.screenshot({path:n+'.png'});await p.close();}
await b.close()})();
