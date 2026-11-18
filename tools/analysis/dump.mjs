import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('/opt/npm-tools/node_modules/playwright');
const ROOT='/home/claude/japan-city-collection';
const srv=http.createServer((q,r)=>{const f=path.join(ROOT,path.normalize(q.url.split('?')[0]));if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){r.writeHead(404);r.end();return;}r.writeHead(200,{'Content-Type':{'.html':'text/html','.js':'text/javascript','.json':'application/json','.css':'text/css'}[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(r);}).listen(0,'127.0.0.1');
await new Promise(r=>srv.once('listening',r));
const b=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
const pg=await (await b.newContext({viewport:{width:390,height:844}})).newPage();
await pg.goto(`http://127.0.0.1:${srv.address().port}/scroll.html?three=local&freeze=1`);
await pg.waitForFunction(()=>window.__ready||window.__bootError,null,{timeout:200000});
const data=await pg.evaluate(()=>{const c=window.__scroll.city, B=c.boxes, m=B.mats, out=[];
  for(let i=0;i<B.n;i++){const o=i*16; const x=m[o+12],y=m[o+13],z=m[o+14]; if(x<-700||x>150||z<-400||z>400) continue;
    // 列ベクトル: X軸=(m0,m1,m2)*w ...  スケール=列の長さ, 回転Y
    const sx=Math.hypot(m[o],m[o+1],m[o+2]), sy=Math.hypot(m[o+4],m[o+5],m[o+6]), sz=Math.hypot(m[o+8],m[o+9],m[o+10]);
    const rot=Math.atan2(-m[o+2], m[o]); out.push([x,y,z,sx,sy,sz,rot]);}
  return {boxes:out, rigKeys:c.rig.keys.map(k=>({t:k.t,pos:k.pos,target:k.target,fov:k.fov})), shake:[c.rig.shakeAmp,c.rig.shakeSeed]};});
fs.writeFileSync(process.argv[2], JSON.stringify(data)); console.log('boxes', data.boxes.length);
await b.close(); srv.close();
