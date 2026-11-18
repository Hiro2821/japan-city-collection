import { ScrollRig, GLOBAL0 } from '/home/claude/japan-city-collection/src/scroll/rig.js';
import { tOfP } from '/home/claude/japan-city-collection/src/scroll/math.js';
export function stats(rig, w, p0=0, p1=1, n=400){let ms=0,mr=0,ps=-1,pr=-1;let prev=null;
 for(let i=0;i<=n;i++){const p=p0+(p1-p0)*i/n;const t=tOfP(p);const c=rig.sample(GLOBAL0+t,w);const d=[c.target[0]-c.position[0],c.target[1]-c.position[1],c.target[2]-c.position[2]];const l=Math.hypot(...d);const dir=d.map(v=>v/l);
  if(prev){const dt=tOfP(p)-tOfP(prev.p);if(dt>0){const sp=Math.hypot(c.position[0]-prev.c.position[0],c.position[1]-prev.c.position[1],c.position[2]-prev.c.position[2])/dt;const dot=Math.min(1,dir[0]*prev.dir[0]+dir[1]*prev.dir[1]+dir[2]*prev.dir[2]);const rot=Math.acos(dot)*180/Math.PI/dt;if(sp>ms){ms=sp;ps=p}if(rot>mr){mr=rot;pr=p}}}
  prev={p,c,dir};}
 return {maxSpeed:ms.toFixed(1),atP:ps.toFixed(3),maxRot:mr.toFixed(1),atPr:pr.toFixed(3)};}
if(process.argv[1].endsWith('stats.mjs')){const r=new ScrollRig();console.log('landscape all',stats(r,0));console.log('landscape 0.40-0.60',stats(r,0,0.4,0.6,200));console.log('portrait',stats(r,1));}
