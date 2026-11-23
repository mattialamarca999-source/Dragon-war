const {chromium}=require('/home/claude/.npm-global/lib/node_modules/@playwright/mcp/node_modules/playwright-core');
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/google-chrome'});const p=await b.newPage();
p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file:///home/claude/dragon-war/proto/t.html');await p.waitForTimeout(800);
const r=await p.evaluate(()=>{const F2={...DRAW, topo:o=>topo1(o,0), scheletro:o=>schel1(o,0), pipsciame:o=>pip1(o,0), pipistrello:o=>pip1(o,0), lupetto:o=>cub1(o,0), scimmia:o=>monkeyB(o,0), capoladroni:o=>ladroneB(o,0,1), ladrone:o=>ladroneB(o,1,0), matrigna_m:o=>matrignaB(o), sorella:o=>sorellaB(o,0), reginacuori_q:o=>reginaB(o), carta:o=>cartaB(o,0), burattino:o=>burattinoD(o,0), corvo:o=>crowD(o)};
 const out={}; const c=document.createElement('canvas'); c.width=800; c.height=800; const old=g; g=c.getContext('2d');
 for(const [k,fn] of Object.entries(F2)){ g.setTransform(1,0,0,1,0,0); g.clearRect(0,0,800,800); g.setTransform(1,0,0,1,400,600); try{fn({t:1.3,ph:0,walking:false,atk:-1,u:0,mood:0,blink:1});}catch(e){out[k]='ERR '+e.message;continue;}
  const d=g.getImageData(0,0,800,800).data; let top=800,l=800,rgt=0; for(let y=0;y<800;y++)for(let x=0;x<800;x++){if(d[(y*800+x)*4+3]>40){if(y<top)top=y; if(x<l)l=x; if(x>rgt)rgt=x;}} out[k]=[600-top, l-400, rgt-400]; }
 g=old; return out;});
require('fs').writeFileSync('/home/claude/dragon-war/proto/nh.json',JSON.stringify(r));
console.log(JSON.stringify(r).slice(0,1500));
await b.close()})();
