const {chromium}=require('/home/claude/.npm-global/lib/node_modules/@playwright/mcp/node_modules/playwright-core');
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/google-chrome'});const p=await b.newPage({viewport:{width:1000,height:420}});
p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+process.cwd()+'/t.html');await p.waitForTimeout(500);
await p.evaluate(()=>{const c=document.createElement('canvas');c.width=1000;c.height=420;Object.assign(c.style,{position:'fixed',left:0,top:0,zIndex:9,background:'#cfe0b0'});document.body.appendChild(c);
const old=g;g=c.getContext('2d');g.fillStyle='#bcd49a';g.fillRect(0,0,1000,420);
[[0,'fermo'],[1,'marcia'],[2,'carica'],[3,'colpisce'],[4,'colpito']].forEach(([m,n],i)=>{g.save();g.translate(100+i*205,380);g.scale(2.3,2.3);DRAW.orco({t:1,ph:m===1?1.2:0,walking:m===1,atk:m===2?.3:m===3?.55:-1,u:m===2?.6:m===3?1:0,mood:m,blink:1});g.restore();g.fillStyle='#1b1238';g.font='bold 20px sans-serif';g.fillText(n,60+i*205,410);});g=old;});
await p.screenshot({path:'orco.png'});await b.close()})();
