var Z_=Object.defineProperty;var pe=(s,t,e)=>()=>{if(e)throw e[0];try{return s&&(t=s(s=0)),t}catch(n){throw e=[n],n}};var Td=(s,t)=>{for(var e in t)Z_(s,e,{get:t[e],enumerable:!0})};function $_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Or(s,t){return new J_[s](t)}function yg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function qr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ap(){let s=qr("canvas");return s.style.display="block",s}function Mg(s){os=s}function Sg(){return os}function Yr(...s){let t="THREE."+s.shift();os?os("log",t,...s):console.log(t,...s)}function bg(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function At(...s){s=bg(s);let t="THREE."+s.shift();if(os)os("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Gt(...s){s=bg(s);let t="THREE."+s.shift();if(os)os("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function hi(...s){let t=s.join(" ");t in gm||(gm[t]=!0,At(...s))}function wg(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Yn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function Jt(s,t,e){return Math.max(t,Math.min(e,s))}function lp(s,t){return(s%t+t)%t}function K_(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Q_(s,t,e){return s!==t?(e-s)/(t-s):0}function la(s,t,e){return(1-e)*s+e*t}function j_(s,t,e,n){return la(s,t,1-Math.exp(-e*n))}function tv(s,t=1){return t-Math.abs(lp(s,t*2)-t)}function ev(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function nv(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function iv(s,t){return s+Math.floor(Math.random()*(t-s+1))}function sv(s,t){return s+Math.random()*(t-s)}function rv(s){return s*(.5-Math.random())}function ov(s){s!==void 0&&(xm=s);let t=xm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function av(s){return s*Vs}function lv(s){return s*Xs}function cv(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function hv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function uv(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),f=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*f,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*f,a*c);break;case"ZYZ":s.set(l*f,l*p,a*h,a*c);break;default:At("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Gu(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Hs(s,t){if(t.constructor===Float32Array)return s;let e=Gu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function rn(s,t){if(t.constructor===Float32Array)return s;let e=Gu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}function dv(){let s={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ge&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(i.r=zr(i.r),i.g=zr(i.g),i.b=zr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yi?Xr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Wr]:{primaries:t,whitePoint:n,transfer:Xr,toXYZ:vm,fromXYZ:ym,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:vm,fromXYZ:ym,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),s}function Ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function Cd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?va.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(At("Texture: Unable to serialize Texture."),{})}function Id(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function zd(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ls.fromArray(s,r);let a=i.x*Math.abs(Ls.x)+i.y*Math.abs(Ls.y)+i.z*Math.abs(Ls.z),l=t.dot(Ls),c=e.dot(Ls),h=n.dot(Ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Sv(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Tn(s){Math.abs(s)>65504&&At("DataUtils.toHalfFloat(): Value out of range."),s=Jt(s,-65504,65504),Ni.floatView[0]=s;let t=Ni.uint32View[0],e=t>>23&511;return Ni.baseTable[e]+((t&8388607)>>Ni.shiftTable[e])}function sa(s){let t=s>>10;return Ni.uint32View[0]=Ni.mantissaTable[Ni.offsetTable[t]+(s&1023)]+Ni.exponentTable[t],Ni.floatView[0]}function Rm(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Yn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}function Nc(s,t,e,n,i,r){Pr.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Qo.x=r*Pr.x-i*Pr.y,Qo.y=i*Pr.x+r*Pr.y):Qo.copy(Pr),s.copy(t),s.x+=Qo.x,s.y+=Qo.y,s.applyMatrix4(Eg)}function Rv(s,t,e,n,i,r,o,a){let l;if(t.side===cn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Wi,a),l===null)return null;Vc.copy(a),Vc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Vc);return c<e.near||c>e.far?null:{distance:c,point:Vc.clone(),object:s}}function Wc(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,zc),s.getVertexPosition(l,kc),s.getVertexPosition(c,Gc);let h=Rv(s,t,e,n,zc,kc,Gc,Um);if(h){let u=new L;ti.getBarycoord(Um,zc,kc,Gc,u),i&&(h.uv=ti.getInterpolatedAttribute(i,a,l,c,u,new et)),r&&(h.uv1=ti.getInterpolatedAttribute(r,a,l,c,u,new et)),o&&(h.normal=ti.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};ti.getNormal(zc,kc,Gc,d.normal),h.face=d,h.barycoord=u}return h}function Zd(s,t){return s-t}function Nv(s,t){return s.z-t.z}function Uv(s,t){return t.z-s.z}function kv(s,t,e=0){let n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function li(s,t){if(s.constructor!==t.constructor){let e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{let e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}function Kc(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(Ah.fromBufferAttribute(a,i),Eh.fromBufferAttribute(a,r),e.distanceSqToSegment(Ah,Eh,Kd,Ym)>n)return;Kd.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Kd);if(!(c<t.near||c>t.far))return{distance:c,point:Ym.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}function Km(s,t,e,n,i,r,o){let a=uf.distanceSqToPoint(s);if(a<e){let l=new L;uf.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function up(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}function t0(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Gv(s,t){let e=1-s;return e*e*t}function Hv(s,t){return 2*(1-s)*s*t}function Vv(s,t){return s*s*t}function ca(s,t,e,n){return Gv(s,t)+Hv(s,e)+Vv(s,n)}function Wv(s,t){let e=1-s;return e*e*e*t}function Xv(s,t){let e=1-s;return 3*e*e*s*t}function qv(s,t){return 3*(1-s)*s*s*t}function Yv(s,t){return s*s*s*t}function ha(s,t,e,n,i){return Wv(s,t)+Xv(s,e)+qv(s,n)+Yv(s,i)}function Zv(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Cg(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=jv(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,u=l;for(let d=e;d<i;d+=e){let p=s[d],f=s[d+1];p<a&&(a=p),f<l&&(l=f),p>h&&(h=p),f>u&&(u=f)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ba(r,o,e,a,l,c,0),o}function Cg(s,t,e,n,i){let r;if(i===hy(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=e0(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=e0(o/n|0,s[o],s[o+1],r);return r&&co(r,r.next)&&(ka(r),r=r.next),r}function Qs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(co(e,e.next)||Pe(e.prev,e,e.next)===0)){if(ka(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ba(s,t,e,n,i,r,o){if(!s)return;!o&&r&&sy(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Jv(s,n,i,r):$v(s)){t.push(l.i,s.i,c.i),ka(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Kv(Qs(s),t),Ba(s,t,e,n,i,r,2)):o===2&&Qv(s,t,e,n,i,r):Ba(Qs(s),t,e,n,i,r,1);break}}}function $v(s){let t=s.prev,e=s,n=s.next;if(Pe(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),p=Math.max(a,l,c),f=n.next;for(;f!==t;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&ra(i,a,r,l,o,c,f.x,f.y)&&Pe(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Jv(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Pe(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,p=Math.min(a,l,c),f=Math.min(h,u,d),x=Math.max(a,l,c),m=Math.max(h,u,d),g=df(p,f,t,e,n),_=df(x,m,t,e,n),y=s.prevZ,M=s.nextZ;for(;y&&y.z>=g&&M&&M.z<=_;){if(y.x>=p&&y.x<=x&&y.y>=f&&y.y<=m&&y!==i&&y!==o&&ra(a,h,l,u,c,d,y.x,y.y)&&Pe(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=p&&M.x<=x&&M.y>=f&&M.y<=m&&M!==i&&M!==o&&ra(a,h,l,u,c,d,M.x,M.y)&&Pe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=g;){if(y.x>=p&&y.x<=x&&y.y>=f&&y.y<=m&&y!==i&&y!==o&&ra(a,h,l,u,c,d,y.x,y.y)&&Pe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=_;){if(M.x>=p&&M.x<=x&&M.y>=f&&M.y<=m&&M!==i&&M!==o&&ra(a,h,l,u,c,d,M.x,M.y)&&Pe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Kv(s,t){let e=s;do{let n=e.prev,i=e.next.next;!co(n,i)&&Pg(n,e,e.next,i)&&za(n,i)&&za(i,n)&&(t.push(n.i,e.i,i.i),ka(e),ka(e.next),e=s=i),e=e.next}while(e!==s);return Qs(e)}function Qv(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ay(o,a)){let l=Ig(o,a);o=Qs(o,o.next),l=Qs(l,l.next),Ba(o,t,e,n,i,r,0),Ba(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function jv(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Cg(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(oy(c))}i.sort(ty);for(let r=0;r<i.length;r++)e=ey(i[r],e);return e}function ty(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function ey(s,t){let e=ny(s,t);if(!e)return t;let n=Ig(e,s);return Qs(n,n.next),Qs(e,e.next)}function ny(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(co(s,e))return e;do{if(co(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Rg(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);za(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&iy(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function iy(s,t){return Pe(s.prev,s,t.prev)<0&&Pe(t.next,s,s.next)<0}function sy(s,t,e,n){let i=s;do i.z===0&&(i.z=df(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ry(i)}function ry(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function df(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function oy(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Rg(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function ra(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Rg(s,t,e,n,i,r,o,a)}function ay(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!ly(s,t)&&(za(s,t)&&za(t,s)&&cy(s,t)&&(Pe(s.prev,s,t.prev)||Pe(s,t.prev,t))||co(s,t)&&Pe(s.prev,s,s.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function co(s,t){return s.x===t.x&&s.y===t.y}function Pg(s,t,e,n){let i=sh(Pe(s,t,e)),r=sh(Pe(s,t,n)),o=sh(Pe(e,n,s)),a=sh(Pe(e,n,t));return!!(i!==r&&o!==a||i===0&&ih(s,e,t)||r===0&&ih(s,n,t)||o===0&&ih(e,s,n)||a===0&&ih(e,t,n))}function ih(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function sh(s){return s>0?1:s<0?-1:0}function ly(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Pg(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function za(s,t){return Pe(s.prev,s,s.next)<0?Pe(s,t,s.next)>=0&&Pe(s,s.prev,t)>=0:Pe(s,t,s.prev)<0||Pe(s,s.next,t)<0}function cy(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Ig(s,t){let e=ff(s.i,s.x,s.y),n=ff(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function e0(s,t,e,n){let i=ff(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ka(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ff(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hy(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}function n0(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function i0(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}function dy(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function fy(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}function s0(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}function cr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(o0(i))i.isRenderTargetTexture?(At("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(o0(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function hn(s){let t={};for(let e=0;e<s.length;e++){let n=cr(s[e]);for(let i in n)t[i]=n[i]}return t}function o0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function py(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function dp(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}function jn(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Br(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Lg(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function mf(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function Dg(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}function xy(s,t,e,n,i=30){let r=s.clone();r.name=t;let o=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let p=0;p<c.times.length;++p){let f=c.times[p]*i;if(!(f<e||f>=n)){u.push(c.times[p]);for(let x=0;x<h;++x)d.push(c.values[p*h+x])}}u.length!==0&&(c.times=jn(u,c.times.constructor),c.values=jn(d,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function _y(s,t=0,e=s,n=30){n<=0&&(n=30);let i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){let a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);let f=a.times.length-1,x;if(r<=a.times[0]){let g=h,_=u-h;x=a.values.slice(g,_)}else if(r>=a.times[f]){let g=f*u+h,_=g+u-h;x=a.values.slice(g,_)}else{let g=a.createInterpolant();g.evaluate(r),x=g.resultBuffer.slice()}l==="quaternion"&&new Se().fromArray(x).normalize().conjugate().toArray(x);let m=c.times.length;for(let g=0;g<m;++g){let _=g*p+d;if(l==="quaternion")Se.multiplyQuaternionsFlat(c.values,_,x,0,c.values,_);else{let y=p-d*2;for(let M=0;M<y;++M)c.values[_+M]-=x[M]}}}return s.blendMode=Fu,s}function Ng(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function vy(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function yy(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=Ng(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=vy(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function a0(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function l0(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}function My(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return js;case"vector":case"vector2":case"vector3":case"vector4":return go;case"color":return mo;case"quaternion":return tr;case"bool":case"boolean":return fi;case"string":return pi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Sy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=My(s.type);if(s.times===void 0){let n=[],i=[];Dg(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),Br(s.settings)&&(e.settings={inTangents:jn(s.settings.inTangents,Float32Array),outTangents:jn(s.settings.outTangents,Float32Array)}),e}function c0(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}function wy(){this._document.hidden===!1&&this.reset()}function M0(s,t){return s.distance-t.distance}function Mf(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Mf(r[o],t,e,!0)}}function Ug(s){let t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...Ug(s.children[e]));return t}function Fe(s,t,e,n,i,r,o){uh.set(i,r,o).unproject(n);let a=t[s];if(a!==void 0){let l=e.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],uh.x,uh.y,uh.z)}}function ky(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function Gy(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Hy(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Hu(s,t,e,n){let i=Vy(n);switch(e){case Nu:return s*t;case Tl:return s*t/i.components*i.byteLength;case Eo:return s*t/i.components*i.byteLength;case Xi:return s*t*2/i.components*i.byteLength;case Al:return s*t*2/i.components*i.byteLength;case Uu:return s*t*3/i.components*i.byteLength;case xn:return s*t*4/i.components*i.byteLength;case El:return s*t*4/i.components*i.byteLength;case Co:case Ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Po:case Io:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rl:case Il:return Math.max(s,16)*Math.max(t,8)/4;case Cl:case Pl:return Math.max(s,8)*Math.max(t,8)/2;case Ll:case Dl:case Ul:case Fl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Nl:case Lo:case Ol:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case kl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ql:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case $l:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ql:case jl:case tc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ec:case nc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Do:case ic:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vy(s){switch(s){case yn:case Pu:return{byteLength:1,components:1};case lr:case Iu:case He:return{byteLength:2,components:1};case bl:case wl:return{byteLength:2,components:4};case Mn:case Sl:case on:return{byteLength:4,components:1};case Lu:case Du:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}var Sf,P0,I0,bf,wu,wf,L0,D0,ms,Tf,rr,Wi,cn,Un,mi,or,Mo,Tu,Au,Af,N0,gs,Ef,Cf,Rf,Pf,If,Lf,Df,Nf,Eu,Cu,Uf,Ff,Of,Bf,zf,kf,Gf,Hf,Vf,ua,da,fa,Ws,pa,ma,ga,xa,So,Wf,Xf,Fn,xs,_s,vs,gi,bo,ys,Ms,ph,qf,Ml,xi,Ss,wo,To,kr,mn,Gr,Ne,Ru,U0,ar,F0,Ae,Ao,O0,qn,B0,yn,Pu,Iu,lr,Sl,Mn,on,He,bl,wl,bs,Lu,Du,Nu,Uu,xn,ui,_i,Tl,Eo,Xi,Al,z0,El,Co,Ro,Po,Io,Cl,Rl,Pl,Il,Ll,Dl,Nl,Ul,Fl,Lo,Ol,Bl,zl,kl,Gl,Hl,Vl,Wl,Xl,ql,Yl,Zl,$l,Jl,Kl,Ql,jl,tc,ec,nc,Do,ic,Yf,Zf,$f,Hr,_a,oa,mh,is,ss,Vr,sc,Fu,Jf,Kf,Qf,jf,k0,G0,H0,vi,tp,yi,Ke,Wr,Xr,ge,V0,W0,X0,q0,aa,Y0,Z0,$0,J0,K0,Q0,j0,tg,eg,ng,ig,sg,rg,ep,np,ip,sp,Ou,rp,op,Bu,zu,rc,og,ag,lg,cg,hg,ug,dg,fg,pg,ku,An,rs,mg,gg,xg,_g,vg,J_,gm,os,Tg,En,en,xm,Vs,Xs,hp,gp,et,Se,xp,L,Ad,_m,_p,jt,Ed,vm,ym,le,xr,va,fv,Ln,gh,pv,Rd,Ue,vp,de,Zr,Ee,qs,xh,Ys,_h,bu,Vt,_r,Jn,mv,gv,Ki,Tc,Pn,Mm,Sm,Gn,Zs,xv,bm,vr,Ci,Ac,Yo,_v,vv,wm,Tm,Am,Em,yv,yr,Pd,xe,ei,Mv,$s,Ag,Qi,Ec,ct,nn,Fi,ya,Dn,Kn,Ri,Ld,Pi,Mr,Sr,Cm,Dd,Nd,Ud,Fd,Od,Bd,ti,Oe,Ii,Qn,Cc,br,wr,Tr,ji,ts,Is,Zo,Rc,Pc,Ls,Ni,vh,ze,Ic,bv,$t,yh,Mh,Sh,bh,$r,wh,Jr,Th,vt,wv,$o,kd,De,Tv,Bn,Gd,Ar,In,Jo,Ye,Zt,as,pn,Oi,Hd,Av,Ev,zn,Cv,ke,Kr,Er,Ko,Cr,Rr,Pr,Qo,Eg,Lc,jo,Dc,Pm,Vd,Im,Ma,Uc,Lm,Sa,Li,Wd,Fc,Oc,Bi,Hn,Dm,Ds,Bc,Nm,zc,kc,Gc,Xd,Hc,Um,Vc,fe,ta,Fm,Om,Pv,Bm,Xc,qd,zm,Yd,ba,Qr,gn,km,Iv,wa,_n,Ir,Gm,qc,Hm,Lv,ea,na,Ze,Ns,Dv,Yc,di,Vm,jr,hf,wn,Fv,Ov,Bv,Zc,Us,$d,Wm,Xm,zv,Jd,sn,$c,Ta,$e,Ah,Eh,qm,ia,Jc,Kd,Ym,ii,Zm,$m,Nn,Aa,to,Jm,uf,Qc,jc,Ea,Ca,Ch,Rh,Js,Ph,Ih,ls,Lh,Dh,Vn,eo,no,an,Ra,Pa,ln,io,zi,Ia,th,eh,Qd,nh,La,Cn,Ks,Da,Qm,jm,jd,tf,ef,Na,so,Ua,ro,Fa,oo,ao,lo,Nh,Oa,cs,hs,pf,kn,Ga,uy,si,Ha,us,Wn,Va,Wa,ho,Xa,qa,Ya,Za,$a,r0,Ja,Mi,my,gy,Ge,ds,be,Ka,Qa,ja,tl,el,uo,fo,nl,il,Uh,ki,sl,po,rl,ol,vn,fi,mo,js,al,tr,pi,go,fs,ni,xo,fp,Qe,Di,gf,Xn,Fh,Oh,Lr,ps,Bh,zh,kh,ri,Gi,nf,h0,u0,er,rh,oh,ci,nr,es,d0,f0,Re,xf,ll,_f,cl,Hi,vf,Vi,hl,ul,_o,dl,p0,fl,vo,pl,ml,sf,Gh,by,m0,g0,rf,Hh,ah,yo,Vh,x0,_0,Fs,Wh,Dr,Nr,ir,gl,sr,Os,of,Ty,Bs,zs,Xh,xl,ks,v0,Ay,Gs,qh,Yh,_l,pp,Ey,mp,Cy,Ry,Py,Iy,Ly,Dy,Ny,yf,ve,Zh,vl,Uy,$h,Jh,Kh,Fy,Qh,jh,tu,y0,eu,nu,iu,su,yp,ru,S0,yl,b0,lh,Ur,Fr,af,Oy,By,ou,w0,au,ns,ch,lf,lu,cu,zy,T0,A0,hu,uu,du,E0,hh,C0,fu,uh,Le,pu,dh,mu,gu,xu,R0,fh,cf,_u,vu,yu,Mu,Su,Mp=pe(()=>{Sf="187",P0={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},I0={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bf=0,wu=1,wf=2,L0=3,D0=0,ms=1,Tf=2,rr=3,Wi=0,cn=1,Un=2,mi=0,or=1,Mo=2,Tu=3,Au=4,Af=5,N0=6,gs=100,Ef=101,Cf=102,Rf=103,Pf=104,If=200,Lf=201,Df=202,Nf=203,Eu=204,Cu=205,Uf=206,Ff=207,Of=208,Bf=209,zf=210,kf=211,Gf=212,Hf=213,Vf=214,ua=0,da=1,fa=2,Ws=3,pa=4,ma=5,ga=6,xa=7,So=0,Wf=1,Xf=2,Fn=0,xs=1,_s=2,vs=3,gi=4,bo=5,ys=6,Ms=7,ph="attached",qf="detached",Ml=300,xi=301,Ss=302,wo=303,To=304,kr=1e3,mn=1001,Gr=1002,Ne=1003,Ru=1004,U0=1004,ar=1005,F0=1005,Ae=1006,Ao=1007,O0=1007,qn=1008,B0=1008,yn=1009,Pu=1010,Iu=1011,lr=1012,Sl=1013,Mn=1014,on=1015,He=1016,bl=1017,wl=1018,bs=1020,Lu=35902,Du=35899,Nu=1021,Uu=1022,xn=1023,ui=1026,_i=1027,Tl=1028,Eo=1029,Xi=1030,Al=1031,z0=1032,El=1033,Co=33776,Ro=33777,Po=33778,Io=33779,Cl=35840,Rl=35841,Pl=35842,Il=35843,Ll=36196,Dl=37492,Nl=37496,Ul=37488,Fl=37489,Lo=37490,Ol=37491,Bl=37808,zl=37809,kl=37810,Gl=37811,Hl=37812,Vl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,Zl=37818,$l=37819,Jl=37820,Kl=37821,Ql=36492,jl=36494,tc=36495,ec=36283,nc=36284,Do=36285,ic=36286,Yf=2200,Zf=2201,$f=2202,Hr=2300,_a=2301,oa=2302,mh=2303,is=2400,ss=2401,Vr=2402,sc=2500,Fu=2501,Jf=0,Kf=1,Qf=2,jf=3200,k0=3201,G0=3202,H0=3203,vi=0,tp=1,yi="",Ke="srgb",Wr="srgb-linear",Xr="linear",ge="srgb",V0="",W0="rg",X0="ga",q0=0,aa=7680,Y0=7681,Z0=7682,$0=7683,J0=34055,K0=34056,Q0=5386,j0=512,tg=513,eg=514,ng=515,ig=516,sg=517,rg=518,ep=519,np=512,ip=513,sp=514,Ou=515,rp=516,op=517,Bu=518,zu=519,rc=35044,og=35048,ag=35040,lg=35045,cg=35049,hg=35041,ug=35046,dg=35050,fg=35042,pg="100",ku="300 es",An=2e3,rs=2001,mg={COMPUTE:"compute",RENDER:"render"},gg={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},xg={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},_g={TEXTURE_COMPARE:"depthTextureCompare"},vg={NONE:0,SHARED:1,FULL:2};J_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};gm={},os=null;Tg={[ua]:ua,[fa]:ga,[pa]:pa,[Ws]:ma,[da]:da,[ga]:fa,[xa]:xa,[ma]:Ws},En=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xm=1234567,Vs=Math.PI/180,Xs=180/Math.PI;hp={DEG2RAD:Vs,RAD2DEG:Xs,generateUUID:Yn,clamp:Jt,euclideanModulo:lp,mapLinear:K_,inverseLerp:Q_,lerp:la,damp:j_,pingpong:tv,smoothstep:ev,smootherstep:nv,randInt:iv,randFloat:sv,randFloatSpread:rv,seededRandom:ov,degToRad:av,radToDeg:lv,isPowerOfTwo:cv,ceilPowerOfTwo:hv,floorPowerOfTwo:cp,setQuaternionFromProperEuler:uv,normalize:rn,denormalize:Hs},gp=class gp{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gp.prototype.isVector2=!0;et=gp,Se=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],p=r[o+1],f=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==p||h!==f){let m=l*d+c*p+h*f+u*x;m<0&&(d=-d,p=-p,f=-f,x=-x,m=-m);let g=1-a;if(m<.9995){let _=Math.acos(m),y=Math.sin(_);g=Math.sin(g*_)/y,a=Math.sin(a*_)/y,l=l*g+d*a,c=c*g+p*a,h=h*g+f*a,u=u*g+x*a}else{l=l*g+d*a,c=c*g+p*a,h=h*g+f*a,u=u*g+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],f=r[o+3];return t[e]=a*f+h*u+l*p-c*d,t[e+1]=l*f+h*d+c*u-a*p,t[e+2]=c*f+h*p+a*d-l*u,t[e+3]=h*f-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),f=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:At("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},xp=class xp{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_m.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_m.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ad.copy(this).projectOnVector(t),this.sub(Ad)}reflect(t){return this.sub(Ad.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xp.prototype.isVector3=!0;L=xp,Ad=new L,_m=new Se,_p=class _p{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],x=i[0],m=i[3],g=i[6],_=i[1],y=i[4],M=i[7],b=i[2],w=i[5],v=i[8];return r[0]=o*x+a*_+l*b,r[3]=o*m+a*y+l*w,r[6]=o*g+a*M+l*v,r[1]=c*x+h*_+u*b,r[4]=c*m+h*y+u*w,r[7]=c*g+h*M+u*v,r[2]=d*x+p*_+f*b,r[5]=d*m+p*y+f*w,r[8]=d*g+p*M+f*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,f=e*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ed.makeScale(t,e)),this}rotate(t){return hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ed.makeRotation(-t)),this}translate(t,e){return hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ed.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_p.prototype.isMatrix3=!0;jt=_p,Ed=new jt,vm=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ym=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le=dv();va=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xr===void 0&&(xr=qr("canvas")),xr.width=t.width,xr.height=t.height;let i=xr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=xr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return At("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fv=0,Ln=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Cd(i[o].image)):r.push(Cd(i[o]))}else r=Cd(i);n.url=r}return e||(t.images[this.uuid]=n),n}};gh=class extends Ln{constructor(t=null){hi('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}},pv=0,Rd=new L,Ue=class s extends En{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=mn,i=mn,r=Ae,o=qn,a=xn,l=yn,c=s.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=Yn(),this.name="",this.source=new Ln(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rd).x}get height(){return this.source.getSize(Rd).y}get depth(){return this.source.getSize(Rd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){At(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){At(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ml)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kr:t.x=t.x-Math.floor(t.x);break;case mn:t.x=t.x<0?0:1;break;case Gr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kr:t.y=t.y-Math.floor(t.y);break;case mn:t.y=t.y<0?0:1;break;case Gr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Ml;Ue.DEFAULT_ANISOTROPY=1;vp=class vp{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,M=(p+1)/2,b=(g+1)/2,w=(h+d)/4,v=(u+x)/4,S=(f+m)/4;return y>M&&y>b?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=v/n):M>b?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=w/i,r=S/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=v/r,i=S/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-f)*(m-f)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-f)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vp.prototype.isVector4=!0;de=vp,Zr=class extends En{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Ue({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ae,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ln(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ee=class extends Zr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},qs=class extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},xh=class extends Ee{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new qs(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},Ys=class extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},_h=class extends Ee{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Ys(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},bu=class bu{constructor(t,e,n,i,r,o,a,l,c,h,u,d,p,f,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,p,f,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,p,f,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bu().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/_r.setFromMatrixColumn(t,0).length(),r=1/_r.setFromMatrixColumn(t,1).length(),o=1/_r.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,f=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+f*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=f+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,f=c*h,x=c*u;e[0]=d+x*a,e[4]=f*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-f,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,f=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=f+p*a,e[1]=p+f*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,f=a*h,x=a*u;e[0]=l*h,e[4]=f*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-f,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,f=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=f*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+f,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,p=o*c,f=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=p*u-f,e[2]=f*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mv,t,gv)}lookAt(t,e,n){let i=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ki.crossVectors(n,Pn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ki.crossVectors(n,Pn)),Ki.normalize(),Tc.crossVectors(Pn,Ki),i[0]=Ki.x,i[4]=Tc.x,i[8]=Pn.x,i[1]=Ki.y,i[5]=Tc.y,i[9]=Pn.y,i[2]=Ki.z,i[6]=Tc.z,i[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],x=n[6],m=n[10],g=n[14],_=n[3],y=n[7],M=n[11],b=n[15],w=i[0],v=i[4],S=i[8],C=i[12],A=i[1],R=i[5],D=i[9],z=i[13],N=i[2],O=i[6],W=i[10],H=i[14],st=i[3],X=i[7],Z=i[11],nt=i[15];return r[0]=o*w+a*A+l*N+c*st,r[4]=o*v+a*R+l*O+c*X,r[8]=o*S+a*D+l*W+c*Z,r[12]=o*C+a*z+l*H+c*nt,r[1]=h*w+u*A+d*N+p*st,r[5]=h*v+u*R+d*O+p*X,r[9]=h*S+u*D+d*W+p*Z,r[13]=h*C+u*z+d*H+p*nt,r[2]=f*w+x*A+m*N+g*st,r[6]=f*v+x*R+m*O+g*X,r[10]=f*S+x*D+m*W+g*Z,r[14]=f*C+x*z+m*H+g*nt,r[3]=_*w+y*A+M*N+b*st,r[7]=_*v+y*R+M*O+b*X,r[11]=_*S+y*D+M*W+b*Z,r[15]=_*C+y*z+M*H+b*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],f=t[3],x=t[7],m=t[11],g=t[15],_=l*p-c*d,y=a*p-c*u,M=a*d-l*u,b=o*p-c*h,w=o*d-l*h,v=o*u-a*h;return e*(x*_-m*y+g*M)-n*(f*_-m*b+g*w)+i*(f*y-x*b+g*v)-r*(f*M-x*w+m*v)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],f=t[12],x=t[13],m=t[14],g=t[15],_=e*a-n*o,y=e*l-i*o,M=e*c-r*o,b=n*l-i*a,w=n*c-r*a,v=i*c-r*l,S=h*x-u*f,C=h*m-d*f,A=h*g-p*f,R=u*m-d*x,D=u*g-p*x,z=d*g-p*m,N=_*z-y*D+M*R+b*A-w*C+v*S;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/N;return t[0]=(a*z-l*D+c*R)*O,t[1]=(i*D-n*z-r*R)*O,t[2]=(x*v-m*w+g*b)*O,t[3]=(d*w-u*v-p*b)*O,t[4]=(l*A-o*z-c*C)*O,t[5]=(e*z-i*A+r*C)*O,t[6]=(m*M-f*v-g*y)*O,t[7]=(h*v-d*M+p*y)*O,t[8]=(o*D-a*A+c*S)*O,t[9]=(n*A-e*D-r*S)*O,t[10]=(f*w-x*M+g*_)*O,t[11]=(u*M-h*w-p*_)*O,t[12]=(a*C-o*R-l*S)*O,t[13]=(e*R-n*C+i*S)*O,t[14]=(x*y-f*b-m*_)*O,t[15]=(h*b-u*y+d*_)*O,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,f=r*u,x=o*h,m=o*u,g=a*u,_=l*c,y=l*h,M=l*u,b=n.x,w=n.y,v=n.z;return i[0]=(1-(x+g))*b,i[1]=(p+M)*b,i[2]=(f-y)*b,i[3]=0,i[4]=(p-M)*w,i[5]=(1-(d+g))*w,i[6]=(m+_)*w,i[7]=0,i[8]=(f+y)*v,i[9]=(m-_)*v,i[10]=(1-(d+x))*v,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=_r.set(i[0],i[1],i[2]).length(),a=_r.set(i[4],i[5],i[6]).length(),l=_r.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Jn.copy(this);let c=1/o,h=1/a,u=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,e.setFromRotationMatrix(Jn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=An,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),p=(n+i)/(n-i),f,x;if(l)f=r/(o-r),x=o*r/(o-r);else if(a===An)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===rs)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=An,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),p=-(n+i)/(n-i),f,x;if(l)f=1/(o-r),x=o/(o-r);else if(a===An)f=-2/(o-r),x=-(o+r)/(o-r);else if(a===rs)f=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};bu.prototype.isMatrix4=!0;Vt=bu,_r=new L,Jn=new Vt,mv=new L(0,0,0),gv=new L(1,1,1),Ki=new L,Tc=new L,Pn=new L,Mm=new Vt,Sm=new Se,Gn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:At("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sm.setFromEuler(this),this.setFromQuaternion(Sm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";Zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xv=0,bm=new L,vr=new Se,Ci=new Vt,Ac=new L,Yo=new L,_v=new L,vv=new Se,wm=new L(1,0,0),Tm=new L(0,1,0),Am=new L(0,0,1),Em={type:"added"},yv={type:"removed"},yr={type:"childadded",child:null},Pd={type:"childremoved",child:null},xe=class s extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new Gn,n=new Se,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Vt},normalMatrix:{value:new jt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vr.setFromAxisAngle(t,e),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,e){return vr.setFromAxisAngle(t,e),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(wm,t)}rotateY(t){return this.rotateOnAxis(Tm,t)}rotateZ(t){return this.rotateOnAxis(Am,t)}translateOnAxis(t,e){return bm.copy(t).applyQuaternion(this.quaternion),this.position.add(bm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wm,t)}translateY(t){return this.translateOnAxis(Tm,t)}translateZ(t){return this.translateOnAxis(Am,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ac.copy(t):Ac.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Yo,Ac,this.up):Ci.lookAt(Ac,Yo,this.up),this.quaternion.setFromRotationMatrix(Ci),i&&(Ci.extractRotation(i.matrixWorld),vr.setFromRotationMatrix(Ci),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Em),yr.child=t,this.dispatchEvent(yr),yr.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yv),Pd.child=t,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Em),yr.child=t,this.dispatchEvent(yr),yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,_v),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,vv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),f=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xe.DEFAULT_UP=new L(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ei=class extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mv={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ei;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Ec={h:0,s:0,l:0};ct=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=lp(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Id(o,r,t+1/3),this.g=Id(o,r,t),this.b=Id(o,r,t-1/3)}return le.colorSpaceToWorking(this,i),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&At("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:At("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);At("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let n=Ag[t.toLowerCase()];return n!==void 0?this.setHex(n,e):At("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return le.workingToColorSpace(nn.copy(this),t),Math.round(Jt(nn.r*255,0,255))*65536+Math.round(Jt(nn.g*255,0,255))*256+Math.round(Jt(nn.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(nn.copy(this),e);let n=nn.r,i=nn.g,r=nn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Ke){le.workingToColorSpace(nn.copy(this),t);let e=nn.r,n=nn.g,i=nn.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Qi),this.setHSL(Qi.h+t,Qi.s+e,Qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qi),t.getHSL(Ec);let n=la(Qi.h,Ec.h,e),i=la(Qi.s,Ec.s,e),r=la(Qi.l,Ec.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new ct;ct.NAMES=Ag;Fi=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},ya=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ct(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dn=class extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Kn=new L,Ri=new L,Ld=new L,Pi=new L,Mr=new L,Sr=new L,Cm=new L,Dd=new L,Nd=new L,Ud=new L,Fd=new de,Od=new de,Bd=new de,ti=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Kn.subVectors(t,e),i.cross(Kn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Kn.subVectors(i,e),Ri.subVectors(n,e),Ld.subVectors(t,e);let o=Kn.dot(Kn),a=Kn.dot(Ri),l=Kn.dot(Ld),c=Ri.dot(Ri),h=Ri.dot(Ld),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,f=(o*h-a*l)*d;return r.set(1-p-f,f,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Fd.setScalar(0),Od.setScalar(0),Bd.setScalar(0),Fd.fromBufferAttribute(t,e),Od.fromBufferAttribute(t,n),Bd.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Fd,r.x),o.addScaledVector(Od,r.y),o.addScaledVector(Bd,r.z),o}static isFrontFacing(t,e,n,i){return Kn.subVectors(n,e),Ri.subVectors(t,e),Kn.cross(Ri).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Kn.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Mr.subVectors(i,n),Sr.subVectors(r,n),Dd.subVectors(t,n);let l=Mr.dot(Dd),c=Sr.dot(Dd);if(l<=0&&c<=0)return e.copy(n);Nd.subVectors(t,i);let h=Mr.dot(Nd),u=Sr.dot(Nd);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Mr,o);Ud.subVectors(t,r);let p=Mr.dot(Ud),f=Sr.dot(Ud);if(f>=0&&p<=f)return e.copy(r);let x=p*c-l*f;if(x<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(Sr,a);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return Cm.subVectors(r,i),a=(u-h)/(u-h+(p-f)),e.copy(i).addScaledVector(Cm,a);let g=1/(m+x+d);return o=x*g,a=d*g,e.copy(n).addScaledVector(Mr,o).addScaledVector(Sr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Oe=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cc.copy(n.boundingBox)),Cc.applyMatrix4(t.matrixWorld),this.union(Cc)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zo),Rc.subVectors(this.max,Zo),br.subVectors(t.a,Zo),wr.subVectors(t.b,Zo),Tr.subVectors(t.c,Zo),ji.subVectors(wr,br),ts.subVectors(Tr,wr),Is.subVectors(br,Tr);let e=[0,-ji.z,ji.y,0,-ts.z,ts.y,0,-Is.z,Is.y,ji.z,0,-ji.x,ts.z,0,-ts.x,Is.z,0,-Is.x,-ji.y,ji.x,0,-ts.y,ts.x,0,-Is.y,Is.x,0];return!zd(e,br,wr,Tr,Rc)||(e=[1,0,0,0,1,0,0,0,1],!zd(e,br,wr,Tr,Rc))?!1:(Pc.crossVectors(ji,ts),e=[Pc.x,Pc.y,Pc.z],zd(e,br,wr,Tr,Rc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ii=[new L,new L,new L,new L,new L,new L,new L,new L],Qn=new L,Cc=new Oe,br=new L,wr=new L,Tr=new L,ji=new L,ts=new L,Is=new L,Zo=new L,Rc=new L,Pc=new L,Ls=new L;Ni=Sv();vh=class{static toHalfFloat(t){return Tn(t)}static fromHalfFloat(t){return sa(t)}},ze=new L,Ic=new et,bv=0,$t=class extends En{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=on,this.version=0,this._normalizationScale=t!==void 0?Gu(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ic.fromBufferAttribute(this,e),Ic.applyMatrix3(t),this.setXY(e,Ic.x,Ic.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Hs(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):rn(t,this.array)}},yh=class extends $t{constructor(t,e,n){super(new Int8Array(t),e,n)}},Mh=class extends $t{constructor(t,e,n){super(new Uint8Array(t),e,n)}},Sh=class extends $t{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}},bh=class extends $t{constructor(t,e,n){super(new Int16Array(t),e,n)}},$r=class extends $t{constructor(t,e,n){super(new Uint16Array(t),e,n)}},wh=class extends $t{constructor(t,e,n){super(new Int32Array(t),e,n)}},Jr=class extends $t{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Th=class extends $t{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=sa(this.array[t*this.itemSize]);return this.normalized&&(e=Hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=Tn(e),this}getY(t){let e=sa(this.array[t*this.itemSize+1]);return this.normalized&&(e=Hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=Tn(e),this}getZ(t){let e=sa(this.array[t*this.itemSize+2]);return this.normalized&&(e=Hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=Tn(e),this}getW(t){let e=sa(this.array[t*this.itemSize+3]);return this.normalized&&(e=Hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=Tn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=Tn(e),this.array[t+1]=Tn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),i=rn(i,this.array)),this.array[t+0]=Tn(e),this.array[t+1]=Tn(n),this.array[t+2]=Tn(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[t+0]=Tn(e),this.array[t+1]=Tn(n),this.array[t+2]=Tn(i),this.array[t+3]=Tn(r),this}},vt=class extends $t{constructor(t,e,n){super(new Float32Array(t),e,n)}},wv=new Oe,$o=new L,kd=new L,De=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wv.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$o.subVectors(t,this.center);let e=$o.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector($o,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($o.copy(t.center).add(kd)),this.expandByPoint($o.copy(t.center).sub(kd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Tv=0,Bn=new Vt,Gd=new xe,Ar=new L,In=new Oe,Jo=new Oe,Ye=new L,Zt=class s extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($_(t)?Jr:$r)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Bn.makeRotationFromQuaternion(t),this.applyMatrix4(Bn),this}rotateX(t){return Bn.makeRotationX(t),this.applyMatrix4(Bn),this}rotateY(t){return Bn.makeRotationY(t),this.applyMatrix4(Bn),this}rotateZ(t){return Bn.makeRotationZ(t),this.applyMatrix4(Bn),this}translate(t,e,n){return Bn.makeTranslation(t,e,n),this.applyMatrix4(Bn),this}scale(t,e,n){return Bn.makeScale(t,e,n),this.applyMatrix4(Bn),this}lookAt(t){return Gd.lookAt(t),Gd.updateMatrix(),this.applyMatrix4(Gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&At("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new De);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Jo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(In.min,Jo.min),In.expandByPoint(Ye),Ye.addVectors(In.max,Jo.max),In.expandByPoint(Ye)):(In.expandByPoint(Jo.min),In.expandByPoint(Jo.max))}In.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ye));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ye.fromBufferAttribute(a,c),l&&(Ar.fromBufferAttribute(t,c),Ye.add(Ar)),i=Math.max(i,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new $t(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)a[C]=new L,l[C]=new L;let h=new L,u=new L,d=new L,p=new et,f=new et,x=new et,m=new L,g=new L;function _(C,A,R){c[C]=c[A]=c[R]=1,h.fromBufferAttribute(n,C),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,R),p.fromBufferAttribute(r,C),f.fromBufferAttribute(r,A),x.fromBufferAttribute(r,R),u.sub(h),d.sub(h),f.sub(p),x.sub(p);let D=1/(f.x*x.y-x.x*f.y);isFinite(D)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(D),a[C].add(m),a[A].add(m),a[R].add(m),l[C].add(g),l[A].add(g),l[R].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,A=y.length;C<A;++C){let R=y[C],D=R.start,z=R.count;for(let N=D,O=D+z;N<O;N+=3)_(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let M=new L,b=new L,w=new L,v=new L;function S(C){w.fromBufferAttribute(i,C),v.copy(w);let A=a[C];M.copy(A),M.sub(w.multiplyScalar(w.dot(A))).normalize(),b.crossVectors(v,A);let D=b.dot(l[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,D)}for(let C=0,A=n.count;C<A;++C)c[C]&&S(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new $t(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){let f=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,f),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,f),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new $t(d,h,u)}if(this.index===null)return At("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},as=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rc,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Rm(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Rm(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};pn=new L,Oi=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?Gu(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new $t(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Hs(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):rn(t,this.data.array)}},Hd=new L,Av=new L,Ev=new jt,zn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Hd.subVectors(n,e).cross(Av.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Hd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ev.getNormalMatrix(t),i=this.coplanarPoint(Hd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Cv=0,ke=class extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=or,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eu,this.blendDst=Cu,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=aa,this.stencilZFail=aa,this.stencilZPass=aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){At(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){At(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new et().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Kr=class extends ke{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ko=new L,Cr=new L,Rr=new L,Pr=new et,Qo=new et,Eg=new Vt,Lc=new L,jo=new L,Dc=new L,Pm=new et,Vd=new et,Im=new et,Ma=class extends xe{constructor(t=new Kr){if(super(),this.isSprite=!0,this.type="Sprite",Er===void 0){Er=new Zt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new as(e,5);Er.setIndex([0,1,2,0,2,3]),Er.setAttribute("position",new Oi(n,3,0,!1)),Er.setAttribute("uv",new Oi(n,2,3,!1))}this.geometry=Er,this.material=t,this.center=new et(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cr.setFromMatrixScale(this.matrixWorld),Eg.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Rr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cr.multiplyScalar(-Rr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Nc(Lc.set(-.5,-.5,0),Rr,o,Cr,i,r),Nc(jo.set(.5,-.5,0),Rr,o,Cr,i,r),Nc(Dc.set(.5,.5,0),Rr,o,Cr,i,r),Pm.set(0,0),Vd.set(1,0),Im.set(1,1);let a=t.ray.intersectTriangle(Lc,jo,Dc,!1,Ko);if(a===null&&(Nc(jo.set(-.5,.5,0),Rr,o,Cr,i,r),Vd.set(0,1),a=t.ray.intersectTriangle(Lc,Dc,jo,!1,Ko),a===null))return;let l=t.ray.origin.distanceTo(Ko);l<t.near||l>t.far||e.push({distance:l,point:Ko.clone(),uv:ti.getInterpolation(Ko,Lc,jo,Dc,Pm,Vd,Im,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};Uc=new L,Lm=new L,Sa=class extends xe{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let i=this.levels,r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){let i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Uc.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(Uc);this.getObjectForDistance(i).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){Uc.setFromMatrixPosition(t.matrixWorld),Lm.setFromMatrixPosition(this.matrixWorld);let n=Uc.distanceTo(Lm)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){let e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}},Li=new L,Wd=new L,Fc=new L,Oc=new L,Bi=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Wd.copy(t).add(e).multiplyScalar(.5),Fc.copy(e).sub(t).normalize(),Oc.copy(this.origin).sub(Wd);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Fc),a=Oc.dot(this.direction),l=-Oc.dot(Fc),c=Oc.lengthSq(),h=Math.abs(1-o*o),u,d,p,f;if(h>0)if(u=o*l-a,d=o*a-l,f=r*h,u>=0)if(d>=-f)if(d<=f){let x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Wd).addScaledVector(Fc,d),p}intersectSphere(t,e){if(t.radius<0)return null;Li.subVectors(t.center,this.origin);let n=Li.dot(this.direction),i=Li.dot(Li)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,p=t.z-o.z,f=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,_=n.y-o.y,y=n.z-o.z,M=Math.abs(l),b=Math.abs(c),w=Math.abs(h),v,S,C,A,R,D,z,N,O,W,H,st;if(M>=b&&M>=w?(C=l,D=u,O=f,st=g,l>=0?(v=c,S=h,A=d,R=p,z=x,N=m,W=_,H=y):(v=h,S=c,A=p,R=d,z=m,N=x,W=y,H=_)):b>=w?(C=c,D=d,O=x,st=_,c>=0?(v=h,S=l,A=p,R=u,z=m,N=f,W=y,H=g):(v=l,S=h,A=u,R=p,z=f,N=m,W=g,H=y)):(C=h,D=p,O=m,st=y,h>=0?(v=l,S=c,A=u,R=d,z=f,N=x,W=g,H=_):(v=c,S=l,A=d,R=u,z=x,N=f,W=_,H=g)),C===0)return null;let X=v/C,Z=S/C,nt=1/C,Et=A-X*D,ot=R-Z*D,G=z-X*O,lt=N-Z*O,yt=W-X*st,kt=H-Z*st,Tt=yt*lt-kt*G,Ht=Et*kt-ot*yt,ye=G*ot-lt*Et;if(i){if(Tt<0||Ht<0||ye<0)return null}else if((Tt<0||Ht<0||ye<0)&&(Tt>0||Ht>0||ye>0))return null;let It=Tt+Ht+ye;if(It===0)return null;let ie=nt*(Tt*D+Ht*O+ye*st);return(It>0?ie<0:ie>0)?null:this.at(ie/It,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hn=class extends ke{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Dm=new Vt,Ds=new Bi,Bc=new De,Nm=new L,zc=new L,kc=new L,Gc=new L,Xd=new L,Hc=new L,Um=new L,Vc=new L,fe=class extends xe{constructor(t=new Zt,e=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Hc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Xd.fromBufferAttribute(u,t),o?Hc.addScaledVector(Xd,h):Hc.addScaledVector(Xd.sub(e),h))}e.add(Hc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bc.copy(n.boundingSphere),Bc.applyMatrix4(r),Ds.copy(t.ray).recast(t.near),!(Bc.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Bc,Nm)===null||Ds.origin.distanceToSquared(Nm)>(t.far-t.near)**2))&&(Dm.copy(r).invert(),Ds.copy(t.ray).applyMatrix4(Dm),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ds)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,x=d.length;f<x;f++){let m=d[f],g=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,b=y;M<b;M+=3){let w=a.getX(M),v=a.getX(M+1),S=a.getX(M+2);i=Wc(this,g,t,n,c,h,u,w,v,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let f=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let _=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);i=Wc(this,o,t,n,c,h,u,_,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,x=d.length;f<x;f++){let m=d[f],g=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,b=y;M<b;M+=3){let w=M,v=M+1,S=M+2;i=Wc(this,g,t,n,c,h,u,w,v,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let f=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let _=m,y=m+1,M=m+2;i=Wc(this,o,t,n,c,h,u,_,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};ta=new de,Fm=new de,Om=new de,Pv=new de,Bm=new Vt,Xc=new L,qd=new De,zm=new Vt,Yd=new Bi,ba=class extends fe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ph,this.bindMatrix=new Vt,this.bindMatrixInverse=new Vt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Oe),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Xc),this.boundingBox.expandByPoint(Xc)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new De),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Xc),this.boundingSphere.expandByPoint(Xc)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qd.copy(this.boundingSphere),qd.applyMatrix4(i),t.ray.intersectsSphere(qd)!==!1&&(zm.copy(i).invert(),Yd.copy(t.ray).applyMatrix4(zm),!(this.boundingBox!==null&&Yd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Yd)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new de,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===ph?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qf?this.bindMatrixInverse.copy(this.bindMatrix).invert():At("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;Fm.fromBufferAttribute(i.attributes.skinIndex,t),Om.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(ta.copy(e),e.set(0,0,0,0)):(ta.set(e.x,e.y,e.z,1),e.set(0,0,0)),ta.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Om.getComponent(r);if(o!==0){let a=Fm.getComponent(r);Bm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Pv.copy(ta).applyMatrix4(Bm),o)}}return e.isVector4&&(e.w=ta.w),e.applyMatrix4(this.bindMatrixInverse)}},Qr=class extends xe{constructor(){super(),this.isBone=!0,this.type="Bone"}},gn=class extends Ue{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Ne,h=Ne,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},km=new Vt,Iv=new Vt,wa=class s{constructor(t=[],e=[]){this.uuid=Yn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){At("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Vt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Vt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:Iv;km.multiplyMatrices(a,e[r]),km.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new gn(e,t,t,xn,on);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(At("Skeleton: No bone found with UUID:",r),o=new Qr),this.bones.push(o),this.boneInverses.push(new Vt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},_n=class extends $t{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ir=new Vt,Gm=new Vt,qc=[],Hm=new Oe,Lv=new Vt,ea=new fe,na=new De,Ze=class extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _n(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Lv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Oe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ir),Hm.copy(t.boundingBox).applyMatrix4(Ir),this.boundingBox.union(Hm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new De),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ir),na.copy(t.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(na)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(n),t.ray.intersectsSphere(na)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ir),Gm.multiplyMatrices(n,Ir),ea.matrixWorld=Gm,ea.raycast(t,qc);for(let o=0,a=qc.length;o<a;o++){let l=qc[o];l.instanceId=r,l.object=this,e.push(l)}qc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new _n(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gn(new Float32Array(i*this.count),i,this.count,Tl,on));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ns=new De,Dv=new et(.5,.5),Yc=new L,di=class{constructor(t=new zn,e=new zn,n=new zn,i=new zn,r=new zn,o=new zn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],f=r[8],x=r[9],m=r[10],g=r[11],_=r[12],y=r[13],M=r[14],b=r[15];if(i[0].setComponents(c-o,p-h,g-f,b-_).normalize(),i[1].setComponents(c+o,p+h,g+f,b+_).normalize(),i[2].setComponents(c+a,p+u,g+x,b+y).normalize(),i[3].setComponents(c-a,p-u,g-x,b-y).normalize(),n)i[4].setComponents(l,d,m,M).normalize(),i[5].setComponents(c-l,p-d,g-m,b-M).normalize();else if(i[4].setComponents(c-l,p-d,g-m,b-M).normalize(),e===An)i[5].setComponents(c+l,p+d,g+m,b+M).normalize();else if(e===rs)i[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(t){Ns.center.set(0,0,0);let e=Dv.distanceTo(t.center);return Ns.radius=.7071067811865476+e,Ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Yc.x=i.normal.x>0?t.max.x:t.min.x,Yc.y=i.normal.y>0?t.max.y:t.min.y,Yc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Vm=new Vt,jr=class s{constructor(){this.coordinateSystem=An,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Vm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new di),n[i].setFromProjectionMatrix(Vm,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new di),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};hf=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}},wn=new Vt,Fv=new ct(1,1,1),Ov=new di,Bv=new jr,Zc=new Oe,Us=new De,$d=new L,Wm=new L,Xm=new L,zv=new L,Jd=new hf,sn=new fe,$c=[];Ta=class extends fe{constructor(t,e,n=e*2,i){super(new Zt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(t),this._mergedDrawStarts=new Int32Array(t),this._mergedDrawInstanceCounts=new Int32Array(t),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new gn(e,t,t,xn,on);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new gn(e,t,t,Eo,Mn);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new gn(e,t,t,xn,on);n.colorSpace=le.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in t.attributes){let o=t.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),u=new $t(h,l,c);e.setAttribute(r,u)}if(t.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new $t(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(t){let e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){let e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oe);let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,wn),this.getBoundingBoxAt(r,Zc).applyMatrix4(wn),t.union(Zc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new De);let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,wn),this.getBoundingSphereAt(r,Us).applyMatrix4(wn),t.union(Us)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Zd),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;wn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(Fv.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let o=t.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Zd),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(i&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(let h in n.attributes){let u=e.getAttribute(h),d=n.getAttribute(h);kv(u,d,l);let p=u.itemSize;for(let f=u.count,x=c;f<x;f++){let m=l+f;for(let g=0;g<p;g++)d.setComponent(m,g,0)}d.needsUpdate=!0,d.addUpdateRange(l*p,c*p)}if(i){let h=a.indexStart,u=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let d=0;d<o.count;d++)r.setX(h+d,l+o.getX(d));for(let d=o.count,p=u;d<p;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0,n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let l=i[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,p=r.index,f=p.array,x=t-u;for(let m=h;m<h+d;m++)f[m]=f[m]+x;p.array.copyWithin(e,h,h+d),p.addUpdateRange(e,d),p.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){let{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(let p in d){let f=d[p],{array:x,itemSize:m}=f;x.copyWithin(t*m,h*m,(h+u)*m),f.addUpdateRange(t*m,u*m),f.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){let r=new Oe,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint($d.fromBufferAttribute(a,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){let r=new De;this.getBoundingBoxAt(t,Zc),Zc.getCenter(r.center);let o=n.index,a=n.attributes.position,l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let u=c;o&&(u=o.getX(u)),$d.fromBufferAttribute(a,u),l=Math.max(l,r.center.distanceToSquared($d))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);let n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);let n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){let e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Zd);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let i=new Int32Array(t),r=new Int32Array(t);li(this._multiDrawCounts,i),li(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r;let o=new Int32Array(t),a=new Int32Array(t),l=new Int32Array(t);li(this._mergedDrawCounts,o),li(this._mergedDrawStarts,a),li(this._mergedDrawInstanceCounts,l),this._mergedDrawCounts=o,this._mergedDrawStarts=a,this._mergedDrawInstanceCounts=l,this._maxInstanceCount=t;let c=this._indirectTexture,h=this._matricesTexture,u=this._colorsTexture;c.dispose(),this._initIndirectTexture(),li(c.image.data,this._indirectTexture.image.data),h.dispose(),this._initMatricesTexture(),li(h.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),li(u.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(t,e){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Zt,this._initializeGeometry(r));let o=this.geometry;r.index&&li(r.index.array,o.index.array);for(let a in r.attributes)li(r.attributes[a].array,o.attributes[a].array);this._visibilityChanged=!0}raycast(t,e){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;sn.material=this.material,sn.geometry.index=o.index,sn.geometry.attributes=o.attributes,sn.geometry.boundingBox===null&&(sn.geometry.boundingBox=new Oe),sn.geometry.boundingSphere===null&&(sn.geometry.boundingSphere=new De);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;let c=n[a].geometryIndex,h=i[c];sn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,sn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,sn.geometry.boundingBox),this.getBoundingSphereAt(c,sn.geometry.boundingSphere),sn.raycast(t,$c);for(let u=0,d=$c.length;u<d;u++){let p=$c[u];p.object=this,p.batchId=a,e.push(p)}$c.length=0}sn.material=null,sn.geometry.index=null,sn.geometry.attributes={},sn.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._mergedDrawCounts=t._mergedDrawCounts.slice(),this._mergedDrawStarts=t._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=t._mergedDrawInstanceCounts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),t._colorsTexture!==null?(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(t,e,n,i="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let r=e.getIndex(),o=r===null?1:r.array.BYTES_PER_ELEMENT,a=1;n.wireframe&&(a=2,o=e.attributes.position.count>65535?4:2);let l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._mergedDrawStarts,d=this._mergedDrawCounts,p=this._mergedDrawInstanceCounts,f=this._geometryInfo,x=this.perObjectFrustumCulled,m=this._indirectTexture,g=m.image.data,_=t.isArrayCamera?Bv:Ov;x&&(t.isArrayCamera?_.setFromArrayCamera(t):(wn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).multiply(this.matrixWorld),_.setFromProjectionMatrix(wn,t.coordinateSystem,t.reversedDepth)));let y=0,M=0;if(this.sortObjects){wn.copy(this.matrixWorld).invert(),Wm.setFromMatrixPosition(t.matrixWorld).applyMatrix4(wn),Xm.set(0,0,-1).transformDirection(t.matrixWorld).transformDirection(wn);for(let v=0,S=l.length;v<S;v++)if(l[v].visible&&l[v].active){let C=l[v].geometryIndex;this.getMatrixAt(v,wn),this.getBoundingSphereAt(C,Us).applyMatrix4(wn);let A=!1;if(x&&(A=!_.intersectsSphere(Us)),!A){let R=f[C],D=zv.subVectors(Us.center,Wm).dot(Xm);Jd.push(R.start,R.count,D,v)}}let b=Jd.list,w=this.customSort;w===null?b.sort(n.transparent?Uv:Nv):w.call(this,b,t);for(let v=0,S=b.length;v<S;v++){let C=b[v],A=C.start*o*a,R=C.count*a;i==="merged"?M>0&&u[M-1]===A&&d[M-1]===R?p[M-1]++:(u[M]=A,d[M]=R,p[M]=1,M++):(c[y]=A,h[y]=R),g[y]=C.index,y++}Jd.reset()}else for(let b=0,w=l.length;b<w;b++)if(l[b].visible&&l[b].active){let v=l[b].geometryIndex,S=!1;if(x&&(this.getMatrixAt(b,wn),this.getBoundingSphereAt(v,Us).applyMatrix4(wn),S=!_.intersectsSphere(Us)),!S){let C=f[v],A=C.start*o*a,R=C.count*a;i==="merged"?M>0&&u[M-1]===A&&d[M-1]===R?p[M-1]++:(u[M]=A,d[M]=R,p[M]=1,M++):(c[y]=A,h[y]=R),g[y]=b,y++}}m.needsUpdate=!0,this._multiDrawCount=y,this._mergedDrawCount=M,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeRender(t,e,n,i,r){t.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(n,i,r)}onBeforeShadow(t,e,n,i,r,o){t.isWebGPURenderer!==!0&&this._updateDrawParameters(i,r,o)}},$e=class extends ke{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ah=new L,Eh=new L,qm=new Vt,ia=new Bi,Jc=new De,Kd=new L,Ym=new L,ii=class extends xe{constructor(t=new Zt,e=new $e){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ah.fromBufferAttribute(e,i-1),Eh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ah.distanceTo(Eh);t.setAttribute("lineDistance",new vt(n,1))}else At("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jc.copy(n.boundingSphere),Jc.applyMatrix4(i),Jc.radius+=r,t.ray.intersectsSphere(Jc)===!1)return;qm.copy(i).invert(),ia.copy(t.ray).applyMatrix4(qm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let x=p,m=f-1;x<m;x+=c){let g=h.getX(x),_=h.getX(x+1),y=Kc(this,t,ia,l,g,_,x);y&&e.push(y)}if(this.isLineLoop){let x=h.getX(f-1),m=h.getX(p),g=Kc(this,t,ia,l,x,m,f-1);g&&e.push(g)}}else{let p=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let x=p,m=f-1;x<m;x+=c){let g=Kc(this,t,ia,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=Kc(this,t,ia,l,f-1,p,f-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Zm=new L,$m=new L,Nn=class extends ii{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Zm.fromBufferAttribute(e,i),$m.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zm.distanceTo($m);t.setAttribute("lineDistance",new vt(n,1))}else At("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Aa=class extends ii{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},to=class extends ke{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jm=new Vt,uf=new Bi,Qc=new De,jc=new L,Ea=class extends xe{constructor(t=new Zt,e=new to){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qc.copy(n.boundingSphere),Qc.applyMatrix4(i),Qc.radius+=r,t.ray.intersectsSphere(Qc)===!1)return;Jm.copy(i).invert(),uf.copy(t.ray).applyMatrix4(Jm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let f=d,x=p;f<x;f++){let m=c.getX(f);jc.fromBufferAttribute(u,m),Km(jc,m,l,i,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let f=d,x=p;f<x;f++)jc.fromBufferAttribute(u,f),Km(jc,f,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Ca=class extends Ue{constructor(t,e,n,i,r=Ae,o=Ae,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},Ch=class extends Ca{constructor(t,e,n,i,r,o,a,l){super({},t,e,n,i,r,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}},Rh=class extends Ue{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ne,this.minFilter=Ne,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new Ln(Object.assign({},t.image)),this}},Js=class extends Ue{constructor(t=[],e,n,i,r,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},Ph=class extends Js{constructor(t,e,n,i,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=mn,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Ih=class extends Js{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,xi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},ls=class extends Ue{constructor(t=[],e=xi,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Lh=class extends Ue{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Dh=class extends Ue{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){let t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}},Vn=class extends Ue{constructor(t,e,n=Mn,i,r,o,a=Ne,l=Ne,c,h=ui,u=1){if(h!==ui&&h!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ln(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},eo=class extends Vn{constructor(t,e=Mn,n=xi,i,r,o=Ne,a=Ne,l,c=ui){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},no=class extends Ue{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},an=class s extends Zt{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;f("z","y","x",-1,-1,n,e,t,o,r,0),f("z","y","x",1,-1,n,e,-t,o,r,1),f("x","z","y",1,1,t,n,e,i,o,2),f("x","z","y",1,-1,t,n,-e,i,o,3),f("x","y","z",1,-1,t,e,n,i,r,4),f("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(u,2));function f(x,m,g,_,y,M,b,w,v,S,C){let A=M/v,R=b/S,D=M/2,z=b/2,N=w/2,O=v+1,W=S+1,H=0,st=0,X=new L;for(let Z=0;Z<W;Z++){let nt=Z*R-z;for(let Et=0;Et<O;Et++){let ot=Et*A-D;X[x]=ot*_,X[m]=nt*y,X[g]=N,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[g]=w>0?1:-1,h.push(X.x,X.y,X.z),u.push(Et/v),u.push(1-Z/S),H+=1}}for(let Z=0;Z<S;Z++)for(let nt=0;nt<v;nt++){let Et=d+nt+O*Z,ot=d+nt+O*(Z+1),G=d+(nt+1)+O*(Z+1),lt=d+(nt+1)+O*Z;l.push(Et,ot,lt),l.push(ot,G,lt),st+=6}a.addGroup(p,st,C),p+=st,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ra=class s extends Zt{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,p=2*u+d,f=n*2+r,x=i+1,m=new L,g=new L;for(let _=0;_<=f;_++){let y=0,M=0,b=0,w=0;if(_<=n){let C=_/n,A=C*Math.PI/2;M=-h-t*Math.cos(A),b=t*Math.sin(A),w=-t*Math.cos(A),y=C*u}else if(_<=n+r){let C=(_-n)/r;M=-h+C*e,b=t,w=0,y=u+C*d}else{let C=(_-n-r)/n,A=C*Math.PI/2;M=h+t*Math.sin(A),b=t*Math.cos(A),w=t*Math.sin(A),y=u+d+C*u}let v=Math.max(0,Math.min(1,y/p)),S=0;_===0?S=.5/i:_===f&&(S=-.5/i);for(let C=0;C<=i;C++){let A=C/i,R=A*Math.PI*2,D=Math.sin(R),z=Math.cos(R);g.x=-b*z,g.y=M,g.z=b*D,a.push(g.x,g.y,g.z),m.set(-b*z,w,b*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+S,v)}if(_>0){let C=(_-1)*x;for(let A=0;A<i;A++){let R=C+A,D=C+A+1,z=_*x+A,N=_*x+A+1;o.push(R,D,z),o.push(D,N,z)}}}this.setIndex(o),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Pa=class s extends Zt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new L,h=new et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(a,3)),this.setAttribute("uv",new vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ln=class s extends Zt{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],f=0,x=[],m=n/2,g=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(p,2));function _(){let M=new L,b=new L,w=0,v=(e-t)/n;for(let S=0;S<=r;S++){let C=[],A=S/r,R=A*(e-t)+t;for(let D=0;D<=i;D++){let z=D/i,N=z*l+a,O=Math.sin(N),W=Math.cos(N);b.x=R*O,b.y=-A*n+m,b.z=R*W,u.push(b.x,b.y,b.z),M.set(O,v,W).normalize(),d.push(M.x,M.y,M.z),p.push(z,1-A),C.push(f++)}x.push(C)}for(let S=0;S<i;S++)for(let C=0;C<r;C++){let A=x[C][S],R=x[C+1][S],D=x[C+1][S+1],z=x[C][S+1];(t>0||C!==0)&&(h.push(A,R,z),w+=3),(e>0||C!==r-1)&&(h.push(R,D,z),w+=3)}c.addGroup(g,w,0),g+=w}function y(M){let b=f,w=new et,v=new L,S=0,C=M===!0?t:e,A=M===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*A,0),d.push(0,A,0),p.push(.5,.5),f++;let R=f;for(let D=0;D<=i;D++){let N=D/i*l+a,O=Math.cos(N),W=Math.sin(N);v.x=C*W,v.y=m*A,v.z=C*O,u.push(v.x,v.y,v.z),d.push(0,A,0),w.x=O*.5+.5,w.y=W*.5*A+.5,p.push(w.x,w.y),f++}for(let D=0;D<i;D++){let z=b+D,N=R+D;M===!0?h.push(N,N+1,z):h.push(N+1,N,z),S+=3}c.addGroup(g,S,M===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},io=class s extends ln{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zi=class s extends Zt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(r.slice(),3)),this.setAttribute("uv",new vt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new L,M=new L,b=new L;for(let w=0;w<e.length;w+=3)p(e[w+0],y),p(e[w+1],M),p(e[w+2],b),l(y,M,b,_)}function l(_,y,M,b){let w=b+1,v=[];for(let S=0;S<=w;S++){v[S]=[];let C=_.clone().lerp(M,S/w),A=y.clone().lerp(M,S/w),R=w-S;for(let D=0;D<=R;D++)D===0&&S===w?v[S][D]=C:v[S][D]=C.clone().lerp(A,D/R)}for(let S=0;S<w;S++)for(let C=0;C<2*(w-S)-1;C++){let A=Math.floor(C/2);C%2===0?(d(v[S][A+1]),d(v[S+1][A]),d(v[S][A])):(d(v[S][A+1]),d(v[S+1][A+1]),d(v[S+1][A]))}}function c(_){let y=new L;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(_),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let _=new L;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let M=m(_)/2/Math.PI+.5,b=g(_)/Math.PI+.5;o.push(M,1-b)}f(),u()}function u(){for(let _=0;_<o.length;_+=6){let y=o[_+0],M=o[_+2],b=o[_+4],w=Math.max(y,M,b),v=Math.min(y,M,b);w>.9&&v<.1&&(y<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function p(_,y){let M=_*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function f(){let _=new L,y=new L,M=new L,b=new L,w=new et,v=new et,S=new et;for(let C=0,A=0;C<r.length;C+=9,A+=6){_.set(r[C+0],r[C+1],r[C+2]),y.set(r[C+3],r[C+4],r[C+5]),M.set(r[C+6],r[C+7],r[C+8]),w.set(o[A+0],o[A+1]),v.set(o[A+2],o[A+3]),S.set(o[A+4],o[A+5]),b.copy(_).add(y).add(M).divideScalar(3);let R=m(b);x(w,A+0,_,R),x(v,A+2,y,R),x(S,A+4,M,R)}}function x(_,y,M,b){b<0&&_.x===1&&(o[y]=_.x-1),M.x===0&&M.z===0&&(o[y]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}},Ia=class s extends zi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},th=new L,eh=new L,Qd=new L,nh=new ti,La=class extends Zt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(Vs*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d=new Map,p=[];for(let f=0;f<l;f+=3){o?(c[0]=o.getX(f),c[1]=o.getX(f+1),c[2]=o.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:x,b:m,c:g}=nh;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),nh.getNormal(Qd),u[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let _=0;_<3;_++){let y=(_+1)%3,M=u[_],b=u[y],w=nh[h[_]],v=nh[h[y]],S=`${M}_${b}`,C=`${b}_${M}`,A=d.get(C);A?(Qd.dot(A.normal)<=r&&(p.push(w.x,w.y,w.z),p.push(v.x,v.y,v.z)),d.set(C,null)):d.has(S)||d.set(S,{index0:c[_],index1:c[y],normal:Qd.clone()})}}for(let f of d.values())if(f){let{index0:x,index1:m}=f;th.fromBufferAttribute(a,x),eh.fromBufferAttribute(a,m),p.push(th.x,th.y,th.z),p.push(eh.x,eh.y,eh.z)}this.setAttribute("position",new vt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){At("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new et:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,i=[],r=[],o=[],a=new L,l=new Vt;for(let p=0;p<=t;p++){let f=p/t;i[p]=this.getTangentAt(f,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(Jt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Jt(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let f=1;f<=t;f++)r[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),o[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ks=class extends Cn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new et){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Da=class extends Ks{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Qm=new L,jm=new L,jd=new up,tf=new up,ef=new up,Na=class extends Cn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(jm.subVectors(i[0],i[1]).add(i[0]),c=jm);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Qm.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Qm),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),f<1e-4&&(f=x),m<1e-4&&(m=x),jd.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,f,x,m),tf.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,f,x,m),ef.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,f,x,m)}else this.curveType==="catmullrom"&&(jd.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),tf.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ef.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(jd.calc(l),tf.calc(l),ef.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};so=class extends Cn{constructor(t=new et,e=new et,n=new et,i=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new et){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ha(t,i.x,r.x,o.x,a.x),ha(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ua=class extends Cn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ha(t,i.x,r.x,o.x,a.x),ha(t,i.y,r.y,o.y,a.y),ha(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ro=class extends Cn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fa=class extends Cn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oo=class extends Cn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ca(t,i.x,r.x,o.x),ca(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ao=class extends Cn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ca(t,i.x,r.x,o.x),ca(t,i.y,r.y,o.y),ca(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lo=class extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(t0(a,l.x,c.x,h.x,u.x),t0(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new et().fromArray(i))}return this}},Nh=Object.freeze({__proto__:null,ArcCurve:Da,CatmullRomCurve3:Na,CubicBezierCurve:so,CubicBezierCurve3:Ua,EllipseCurve:Ks,LineCurve:ro,LineCurve3:Fa,QuadraticBezierCurve:oo,QuadraticBezierCurve3:ao,SplineCurve:lo}),Oa=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Nh[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},cs=class extends Oa{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ro(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new oo(this.currentPoint.clone(),new et(t,e),new et(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new so(this.currentPoint.clone(),new et(t,e),new et(n,i),new et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new lo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new Ks(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},hs=class extends cs{constructor(t){super(t),this.uuid=Yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new cs().fromJSON(i))}return this}};pf=class{static triangulate(t,e,n=2){return Zv(t,e,n)}},kn=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];n0(t),i0(n,t);let o=t.length;e.forEach(n0);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,i0(n,e[l]);let a=pf.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Ga=class s extends Zt{constructor(t=new hs([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new vt(i,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,f=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:uy,y,M=!1,b,w,v,S;if(g){y=g.getSpacedPoints(h),M=!0,d=!1;let it=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,it),w=new L,v=new L,S=new L}d||(m=0,p=0,f=0,x=0);let C=a.extractPoints(c),A=C.shape,R=C.holes;if(!kn.isClockWise(A)){A=A.reverse();for(let it=0,gt=R.length;it<gt;it++){let ft=R[it];kn.isClockWise(ft)&&(R[it]=ft.reverse())}}function z(it){let ft=10000000000000001e-36,Nt=it[0];for(let pt=1;pt<=it.length;pt++){let te=pt%it.length,Bt=it[te],oe=Bt.x-Nt.x,ne=Bt.y-Nt.y,k=oe*oe+ne*ne,I=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(Nt.x),Math.abs(Nt.y)),$=ft*I*I;if(k<=$){it.splice(te,1),pt--;continue}Nt=Bt}}z(A),R.forEach(z);let N=R.length,O=A;for(let it=0;it<N;it++){let gt=R[it];A=A.concat(gt)}function W(it,gt,ft){return gt||Gt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(gt,ft)}let H=A.length;function st(it,gt,ft){let Nt,pt,te,Bt=it.x-gt.x,oe=it.y-gt.y,ne=ft.x-it.x,k=ft.y-it.y,I=Bt*Bt+oe*oe,$=Bt*k-oe*ne;if(Math.abs($)>Number.EPSILON){let ht=Math.sqrt(I),Wt=Math.sqrt(ne*ne+k*k),rt=gt.x-oe/ht,Yt=gt.y+Bt/ht,Rt=ft.x-k/Wt,Dt=ft.y+ne/Wt,P=((Rt-rt)*k-(Dt-Yt)*ne)/(Bt*k-oe*ne);Nt=rt+Bt*P-it.x,pt=Yt+oe*P-it.y;let T=Nt*Nt+pt*pt;if(T<=2)return new et(Nt,pt);te=Math.sqrt(T/2)}else{let ht=!1;Bt>Number.EPSILON?ne>Number.EPSILON&&(ht=!0):Bt<-Number.EPSILON?ne<-Number.EPSILON&&(ht=!0):Math.sign(oe)===Math.sign(k)&&(ht=!0),ht?(Nt=-oe,pt=Bt,te=Math.sqrt(I)):(Nt=Bt,pt=oe,te=Math.sqrt(I/2))}return new et(Nt/te,pt/te)}let X=[];for(let it=0,gt=O.length,ft=gt-1,Nt=it+1;it<gt;it++,ft++,Nt++)ft===gt&&(ft=0),Nt===gt&&(Nt=0),X[it]=st(O[it],O[ft],O[Nt]);let Z=[],nt,Et=X.concat();for(let it=0,gt=N;it<gt;it++){let ft=R[it];nt=[];for(let Nt=0,pt=ft.length,te=pt-1,Bt=Nt+1;Nt<pt;Nt++,te++,Bt++)te===pt&&(te=0),Bt===pt&&(Bt=0),nt[Nt]=st(ft[Nt],ft[te],ft[Bt]);Z.push(nt),Et=Et.concat(nt)}let ot;if(m===0)ot=kn.triangulateShape(O,R);else{let it=[],gt=[];for(let ft=0;ft<m;ft++){let Nt=ft/m,pt=p*Math.cos(Nt*Math.PI/2),te=f*Math.sin(Nt*Math.PI/2)+x;for(let Bt=0,oe=O.length;Bt<oe;Bt++){let ne=W(O[Bt],X[Bt],te);Ht(ne.x,ne.y,-pt),Nt===0&&it.push(ne)}for(let Bt=0,oe=N;Bt<oe;Bt++){let ne=R[Bt];nt=Z[Bt];let k=[];for(let I=0,$=ne.length;I<$;I++){let ht=W(ne[I],nt[I],te);Ht(ht.x,ht.y,-pt),Nt===0&&k.push(ht)}Nt===0&&gt.push(k)}}ot=kn.triangulateShape(it,gt)}let G=ot.length,lt=f+x;for(let it=0;it<H;it++){let gt=d?W(A[it],Et[it],lt):A[it];M?(v.copy(b.normals[0]).multiplyScalar(gt.x),w.copy(b.binormals[0]).multiplyScalar(gt.y),S.copy(y[0]).add(v).add(w),Ht(S.x,S.y,S.z)):Ht(gt.x,gt.y,0)}for(let it=1;it<=h;it++)for(let gt=0;gt<H;gt++){let ft=d?W(A[gt],Et[gt],lt):A[gt];M?(v.copy(b.normals[it]).multiplyScalar(ft.x),w.copy(b.binormals[it]).multiplyScalar(ft.y),S.copy(y[it]).add(v).add(w),Ht(S.x,S.y,S.z)):Ht(ft.x,ft.y,u/h*it)}for(let it=m-1;it>=0;it--){let gt=it/m,ft=p*Math.cos(gt*Math.PI/2),Nt=f*Math.sin(gt*Math.PI/2)+x;for(let pt=0,te=O.length;pt<te;pt++){let Bt=W(O[pt],X[pt],Nt);Ht(Bt.x,Bt.y,u+ft)}for(let pt=0,te=R.length;pt<te;pt++){let Bt=R[pt];nt=Z[pt];for(let oe=0,ne=Bt.length;oe<ne;oe++){let k=W(Bt[oe],nt[oe],Nt);M?Ht(k.x,k.y+y[h-1].y,y[h-1].x+ft):Ht(k.x,k.y,u+ft)}}}yt(),kt();function yt(){let it=i.length/3;if(d){let gt=0,ft=H*gt;for(let Nt=0;Nt<G;Nt++){let pt=ot[Nt];ye(pt[2]+ft,pt[1]+ft,pt[0]+ft)}gt=h+m*2,ft=H*gt;for(let Nt=0;Nt<G;Nt++){let pt=ot[Nt];ye(pt[0]+ft,pt[1]+ft,pt[2]+ft)}}else{for(let gt=0;gt<G;gt++){let ft=ot[gt];ye(ft[2],ft[1],ft[0])}for(let gt=0;gt<G;gt++){let ft=ot[gt];ye(ft[0]+H*h,ft[1]+H*h,ft[2]+H*h)}}n.addGroup(it,i.length/3-it,0)}function kt(){let it=i.length/3,gt=0;Tt(O,gt),gt+=O.length;for(let ft=0,Nt=R.length;ft<Nt;ft++){let pt=R[ft];Tt(pt,gt),gt+=pt.length}n.addGroup(it,i.length/3-it,1)}function Tt(it,gt){let ft=it.length;for(;--ft>=0;){let Nt=ft,pt=ft-1;pt<0&&(pt=it.length-1);for(let te=0,Bt=h+m*2;te<Bt;te++){let oe=H*te,ne=H*(te+1),k=gt+Nt+oe,I=gt+pt+oe,$=gt+pt+ne,ht=gt+Nt+ne;It(k,I,$,ht)}}}function Ht(it,gt,ft){l.push(it),l.push(gt),l.push(ft)}function ye(it,gt,ft){ie(it),ie(gt),ie(ft);let Nt=i.length/3,pt=_.generateTopUV(n,i,Nt-3,Nt-2,Nt-1);ce(pt[0]),ce(pt[1]),ce(pt[2])}function It(it,gt,ft,Nt){ie(it),ie(gt),ie(Nt),ie(gt),ie(ft),ie(Nt);let pt=i.length/3,te=_.generateSideWallUV(n,i,pt-6,pt-3,pt-2,pt-1);ce(te[0]),ce(te[1]),ce(te[3]),ce(te[1]),ce(te[2]),ce(te[3])}function ie(it){i.push(l[it*3+0]),i.push(l[it*3+1]),i.push(l[it*3+2])}function ce(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return dy(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Nh[i.type]().fromJSON(i)),new s(n,t.options)}},uy={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new et(r,o),new et(a,l),new et(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],p=t[i*3+1],f=t[i*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new et(o,1-l),new et(c,1-u),new et(d,1-f),new et(x,1-g)]:[new et(a,1-l),new et(h,1-u),new et(p,1-f),new et(m,1-g)]}};si=class s extends zi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Ha=class s extends Zt{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Jt(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new L,d=new et,p=new L,f=new L,x=new L,m=0,g=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,p.x=g*1,p.y=-m,p.z=g*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,p.x=g*1,p.y=-m,p.z=g*0,f.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(f)}for(let _=0;_<=e;_++){let y=n+_*h*i,M=Math.sin(y),b=Math.cos(y);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*M,u.y=t[w].y,u.z=t[w].x*b,o.push(u.x,u.y,u.z),d.x=_/e,d.y=w/(t.length-1),a.push(d.x,d.y);let v=l[3*w+0]*M,S=l[3*w+1],C=l[3*w+0]*b;c.push(v,S,C)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let M=y+_*t.length,b=M,w=M+t.length,v=M+t.length+1,S=M+1;r.push(b,w,S),r.push(v,S,w)}this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("uv",new vt(a,2)),this.setAttribute("normal",new vt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},us=class s extends zi{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Wn=class s extends Zt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],f=[],x=[],m=[];for(let g=0;g<h;g++){let _=g*d-o;for(let y=0;y<c;y++){let M=y*u-r;f.push(M,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let y=_+c*g,M=_+c*(g+1),b=_+1+c*(g+1),w=_+1+c*g;p.push(y,M,w),p.push(M,b,w)}this.setIndex(p),this.setAttribute("position",new vt(f,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Va=class s extends Zt{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/i,p=new L,f=new et;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let g=r+m/n*o;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/e+1)/2,f.y=(p.y/e+1)/2,h.push(f.x,f.y)}u+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let g=0;g<n;g++){let _=g+m,y=_,M=_+n+1,b=_+n+2,w=_+1;a.push(y,M,w),a.push(M,b,w)}}this.setIndex(a),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Wa=class s extends Zt{constructor(t=new hs([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new vt(i,3)),this.setAttribute("normal",new vt(r,3)),this.setAttribute("uv",new vt(o,2));function c(h){let u=i.length/3,d=h.extractPoints(e),p=d.shape,f=d.holes;kn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let _=f[m];kn.isClockWise(_)===!0&&(f[m]=_.reverse())}let x=kn.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let _=f[m];p=p.concat(_)}for(let m=0,g=p.length;m<g;m++){let _=p[m];i.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,g=x.length;m<g;m++){let _=x[m],y=_[0]+u,M=_[1]+u,b=_[2]+u;n.push(y,M,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return fy(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};ho=class s extends Zt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,d=new L,p=[],f=[],x=[],m=[];for(let g=0;g<=n;g++){let _=[],y=g/n,M=o+y*a,b=t*Math.cos(M),w=Math.sqrt(t*t-b*b),v=0;g===0&&o===0?v=.5/e:g===n&&l===Math.PI&&(v=-.5/e);for(let S=0;S<=e;S++){let C=S/e,A=i+C*r;u.x=-w*Math.cos(A),u.y=b,u.z=w*Math.sin(A),f.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(C+v,1-y),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){let y=h[g][_+1],M=h[g][_],b=h[g+1][_],w=h[g+1][_+1];(g!==0||o>0)&&p.push(y,M,w),(g!==n-1||l<Math.PI)&&p.push(M,b,w)}this.setIndex(p),this.setAttribute("position",new vt(f,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Xa=class s extends zi{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},qa=class s extends Zt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new L,p=new L,f=new L;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=i;g++){let _=g/i*r;p.x=(t+e*Math.cos(m))*Math.cos(_),p.y=(t+e*Math.cos(m))*Math.sin(_),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),f.subVectors(p,d).normalize(),h.push(f.x,f.y,f.z),u.push(g/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){let g=(i+1)*x+m-1,_=(i+1)*(x-1)+m-1,y=(i+1)*(x-1)+m,M=(i+1)*x+m;l.push(g,_,M),l.push(_,y,M)}this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Ya=class s extends Zt{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],u=new L,d=new L,p=new L,f=new L,x=new L,m=new L,g=new L;for(let y=0;y<=n;++y){let M=y/n*r*Math.PI*2;_(M,r,o,t,p),_(M+.01,r,o,t,f),m.subVectors(f,p),g.addVectors(f,p),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let b=0;b<=i;++b){let w=b/i*Math.PI*2,v=-e*Math.cos(w),S=e*Math.sin(w);u.x=p.x+(v*g.x+S*x.x),u.y=p.y+(v*g.y+S*x.y),u.z=p.z+(v*g.z+S*x.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(y/n),h.push(b/i)}}for(let y=1;y<=n;y++)for(let M=1;M<=i;M++){let b=(i+1)*(y-1)+(M-1),w=(i+1)*y+(M-1),v=(i+1)*y+M,S=(i+1)*(y-1)+M;a.push(b,w,S),a.push(w,v,S)}this.setIndex(a),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2));function _(y,M,b,w,v){let S=Math.cos(y),C=Math.sin(y),A=b/M*y,R=Math.cos(A);v.x=w*(2+R)*.5*S,v.y=w*(2+R)*C*.5,v.z=w*Math.sin(A)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Za=class s extends Zt{constructor(t=new ao(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new et,h=new L,u=[],d=[],p=[],f=[];x(),this.setIndex(f),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(p,2));function x(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),_(),g()}function m(y){h=t.getPointAt(y/e,h);let M=o.normals[y],b=o.binormals[y];for(let w=0;w<=i;w++){let v=w/i*Math.PI*2,S=Math.sin(v),C=-Math.cos(v);l.x=C*M.x+S*b.x,l.y=C*M.y+S*b.y,l.z=C*M.z+S*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let y=1;y<=e;y++)for(let M=1;M<=i;M++){let b=(i+1)*(y-1)+(M-1),w=(i+1)*y+(M-1),v=(i+1)*y+M,S=(i+1)*(y-1)+M;f.push(b,w,S),f.push(w,v,S)}}function _(){for(let y=0;y<=e;y++)for(let M=0;M<=i;M++)c.x=y/e,c.y=M/i,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Nh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},$a=class extends Zt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new L,r=new L;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,p=u.count;for(let f=d,x=d+p;f<x;f+=3)for(let m=0;m<3;m++){let g=a.getX(f+m),_=a.getX(f+(m+1)%3);i.fromBufferAttribute(o,g),r.fromBufferAttribute(o,_),s0(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),s0(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new vt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};r0=Object.freeze({__proto__:null,BoxGeometry:an,CapsuleGeometry:Ra,CircleGeometry:Pa,ConeGeometry:io,CylinderGeometry:ln,DodecahedronGeometry:Ia,EdgesGeometry:La,ExtrudeGeometry:Ga,IcosahedronGeometry:si,LatheGeometry:Ha,OctahedronGeometry:us,PlaneGeometry:Wn,PolyhedronGeometry:zi,RingGeometry:Va,ShapeGeometry:Wa,SphereGeometry:ho,TetrahedronGeometry:Xa,TorusGeometry:qa,TorusKnotGeometry:Ya,TubeGeometry:Za,WireframeGeometry:$a}),Ja=class extends ke{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ct(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};Mi={clone:cr,merge:hn},my=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ge=class extends ke{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=my,this.fragmentShader=gy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cr(t.uniforms),this.uniformsGroups=py(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ct().setHex(i.value);break;case"v2":this.uniforms[n].value=new et().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new de().fromArray(i.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Vt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ds=class extends Ge{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},be=class extends ke{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vi,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ka=class extends be{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},Qa=class extends ke{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ct(16777215),this.specular=new ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vi,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=So,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ja=class extends ke{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vi,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},tl=class extends ke{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vi,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},el=class extends ke{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vi,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=So,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},uo=class extends ke{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fo=class extends ke{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},nl=class extends ke{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ct(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vi,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}},il=class extends $e{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};Uh=class{static convertArray(t,e){return jn(t,e)}static isTypedArray(t){return yg(t)}static hasTangents(t){return Br(t)}static getKeyframeOrder(t){return Lg(t)}static sortedArray(t,e,n){return mf(t,e,n)}static flattenJSON(t,e,n,i){Dg(t,e,n,i)}static subclip(t,e,n,i,r=30){return xy(t,e,n,i,r)}static makeClipAdditive(t,e=0,n=t,i=30){return _y(t,e,n,i)}},ki=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sl=class extends ki{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:is,endingEnd:is}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ss:r=t,a=2*e-n;break;case Vr:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ss:o=t,l=2*n-e;break;case Vr:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-e)/(i-e),x=f*f,m=x*f,g=-d*m+2*d*x-d*f,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*f+1,y=(-1-p)*m+(1.5+p)*x+.5*f,M=p*m-p*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+_*o[c+b]+y*o[l+b]+M*o[u+b];return r}},po=class extends ki{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},rl=class extends ki{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ol=class extends ki{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let f=(n-e)/(i-e),x=1-f;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*f;return r}let d=a*2,p=t-1;for(let f=0;f!==a;++f){let x=o[c+f],m=o[l+f],g=p*d+f*2,_=u[g],y=u[g+1],M=t*d+f*2,b=h[M],w=h[M+1],v=yy(n,e,_,b,i);r[f]=Ng(v,x,y,w,m)}return r}};vn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=jn(e,this.TimeBufferType),this.values=jn(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:jn(t.times,Array),values:jn(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Br(t.settings)&&(n.settings={inTangents:jn(t.settings.inTangents,Array),outTangents:jn(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ol(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Hr:e=this.InterpolantFactoryMethodDiscrete;break;case _a:e=this.InterpolantFactoryMethodLinear;break;case oa:e=this.InterpolantFactoryMethodSmooth;break;case mh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return At("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return _a;case this.InterpolantFactoryMethodSmooth:return oa;case this.InterpolantFactoryMethodBezier:return mh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Br(this.settings)&&(a0(this.settings.inTangents,t),a0(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Br(this.settings)&&(l0(this.settings.inTangents,t),l0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Gt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&yg(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===oa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let f=0;f!==n;++f){let x=e[u+f];if(x!==e[d+f]||x!==e[p+f]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Br(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=_a;fi=class extends vn{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Hr;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;mo=class extends vn{constructor(t,e,n,i){super(t,e,n,i)}};mo.prototype.ValueTypeName="color";js=class extends vn{constructor(t,e,n,i){super(t,e,n,i)}};js.prototype.ValueTypeName="number";al=class extends ki{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Se.slerpFlat(r,0,o,c-a,o,c,l);return r}},tr=class extends vn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}};tr.prototype.ValueTypeName="quaternion";tr.prototype.InterpolantFactoryMethodSmooth=void 0;pi=class extends vn{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Hr;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;go=class extends vn{constructor(t,e,n,i){super(t,e,n,i)}};go.prototype.ValueTypeName="vector";fs=class{constructor(t="",e=-1,n=[],i=sc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Yn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Sy(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(vn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Lg(l);l=mf(l,1,h),c=mf(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new js(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};ni={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(c0(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!c0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};xo=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fp=new xo,Qe=class{constructor(t){this.manager=t!==void 0?t:fp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Qe.DEFAULT_MATERIAL_NAME="__DEFAULT";Di={},gf=class extends Error{constructor(t,e){super(t),this.response=e}},Xn=class extends Qe{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=ni.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Di[t]!==void 0){Di[t].push({onLoad:e,onProgress:n,onError:i});return}Di[t]=[],Di[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&At("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Di[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0,x=0,m=new ReadableStream({start(g){_();function _(){u.read().then(({done:y,value:M})=>{if(y)g.close();else{x+=M.byteLength;let b=new ProgressEvent("progress",{lengthComputable:f,loaded:x,total:p});for(let w=0,v=h.length;w<v;w++){let S=h[w];S.onProgress&&S.onProgress(b)}g.enqueue(M),_()}},y=>{g.error(y)})}}});return new Response(m)}else throw new gf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(f=>p.decode(f))}}}).then(c=>{ni.add(`file:${t}`,c);let h=Di[t];delete Di[t];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Di[t];if(h===void 0)throw this.manager.itemError(t),c;delete Di[t];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Fh=class extends Qe{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new Xn(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Gt(l),r.manager.itemError(t)}},n,i)}parse(t){let e=[];for(let n=0;n<t.length;n++){let i=fs.parse(t[n]);e.push(i)}return e}},Oh=class extends Qe{constructor(t){super(t)}load(t,e,n,i){let r=this,o=[],a=new Js,l=new Xn(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(t[u],function(d){let p=r.parse(d,!0);o[u]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},c+=1,c===6&&(p.mipmapCount===1&&(a.minFilter=Ae),a.image=o,a.format=p.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let u=0,d=t.length;u<d;++u)h(u);else l.load(t,function(u){let d=r.parse(u,!0);if(d.isCubemap){let p=d.mipmaps.length/d.mipmapCount;for(let f=0;f<p;f++){o[f]={mipmaps:[]};for(let x=0;x<d.mipmapCount;x++)o[f].mipmaps.push(d.mipmaps[f*d.mipmapCount+x]),o[f].format=d.format,o[f].width=d.width,o[f].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=Ae),a.format=d.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}},Lr=new WeakMap,ps=class extends Qe{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ni.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=Lr.get(o);u===void 0&&(u=[],Lr.set(o,u)),u.push({onLoad:e,onError:i})}return o}let a=qr("img");function l(){h(),e&&e(this);let u=Lr.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Lr.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),ni.remove(`image:${t}`);let d=Lr.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(u)}Lr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ni.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}},Bh=class extends Qe{constructor(t){super(t)}load(t,e,n,i){let r=new ls;r.colorSpace=Ke;let o=new ps(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}},zh=class extends Qe{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new gn,a=new Xn(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):Gt(h);return}r._applyTexData(o,c),e&&e(o,c)},n,i),o}createDataTexture(t){let e=new gn;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:mn,t.wrapT=e.wrapT!==void 0?e.wrapT:mn,t.magFilter=e.magFilter!==void 0?e.magFilter:Ae,t.minFilter=e.minFilter!==void 0?e.minFilter:Ae,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=qn),e.mipmapCount===1&&(t.minFilter=Ae),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}},kh=class extends Qe{constructor(t){super(t)}load(t,e,n,i){let r=new Ue,o=new ps(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},ri=class extends xe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Gi=class extends ri{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},nf=new Vt,h0=new L,u0=new L,er=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new di,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;h0.setFromMatrixPosition(t.matrixWorld),e.position.copy(h0),u0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(u0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){nf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(nf,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===rs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(nf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},rh=new L,oh=new Se,ci=new L,nr=class extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(rh,oh,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rh,oh,ci.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(rh,oh,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rh,oh,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},es=new L,d0=new et,f0=new et,Re=class extends nr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,e){return this.getViewBounds(t,d0,f0),e.subVectors(f0,d0)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xf=class extends er{constructor(){super(new Re(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Xs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},ll=class extends ri{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},_f=class extends er{constructor(){super(new Re(90,1,.5,500)),this.isPointLightShadow=!0}},cl=class extends ri{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _f}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Hi=class extends nr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vf=class extends er{constructor(){super(new Hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vi=class extends ri{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new vf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},hl=class extends ri{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},ul=class extends ri{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}},_o=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new L)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){let n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}},dl=class extends ri{constructor(t=new _o,e=1){super(void 0,e),this.isLightProbe=!0,this.type="LightProbe",this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}},p0={},fl=class s extends Qe{constructor(t){super(t),this.textures={}}load(t,e,n,i){let r=this,o=new Xn(r.manager);o.setPriority(r.priority),o.setCache(r.cache),o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Gt(l),r.manager.itemError(t)}},n,i)}parse(t){let e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return s.createMaterialFromType(t)}static createMaterialFromType(t){let n={ShadowMaterial:Ja,SpriteMaterial:Kr,RawShaderMaterial:ds,ShaderMaterial:Ge,PointsMaterial:to,MeshPhysicalMaterial:Ka,MeshStandardMaterial:be,MeshPhongMaterial:Qa,MeshToonMaterial:ja,MeshNormalMaterial:tl,MeshLambertMaterial:el,MeshDepthMaterial:uo,MeshDistanceMaterial:fo,MeshBasicMaterial:Hn,MeshMatcapMaterial:nl,LineDashedMaterial:il,LineBasicMaterial:$e,Material:ke,...p0}[t],i;return n===void 0?(hi(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),i=new ke):i=new n,i}static registerMaterial(t,e){p0[t]=e}},vo=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},pl=class extends Zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}},ml=class extends Qe{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new Xn(r.manager);o.setPriority(r.priority),o.setCache(r.cache),o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Gt(l),r.manager.itemError(t)}},n,i)}parse(t){let e={},n={};function i(p,f){if(e[f]!==void 0)return e[f];let m=p.interleavedBuffers[f],g=r(p,m.buffer),_=Or(m.type,g),y=new as(_,m.stride);return y.uuid=m.uuid,m.usage!==void 0&&y.setUsage(m.usage),e[f]=y,y}function r(p,f){if(n[f]!==void 0)return n[f];let m=p.arrayBuffers[f],g=new Uint32Array(m).buffer;return n[f]=g,g}let o=t.isInstancedBufferGeometry?new pl:new Zt,a=t.data.index;if(a!==void 0){let p=Or(a.type,a.array);o.setIndex(new $t(p,1))}let l=t.data.attributes;for(let p in l){let f=l[p],x;if(f.isInterleavedBufferAttribute){let m=i(t.data,f.data);x=new Oi(m,f.itemSize,f.offset,f.normalized)}else{let m=Or(f.type,f.array),g=f.isInstancedBufferAttribute?_n:$t;x=new g(m,f.itemSize,f.normalized)}f.name!==void 0&&(x.name=f.name),f.usage!==void 0&&x.setUsage(f.usage),f.gpuType!==void 0&&(x.gpuType=f.gpuType),o.setAttribute(p,x)}let c=t.data.morphAttributes;if(c)for(let p in c){let f=c[p],x=[];for(let m=0,g=f.length;m<g;m++){let _=f[m],y;if(_.isInterleavedBufferAttribute){let M=i(t.data,_.data);y=new Oi(M,_.itemSize,_.offset,_.normalized)}else{let M=Or(_.type,_.array);y=new $t(M,_.itemSize,_.normalized)}_.name!==void 0&&(y.name=_.name),_.usage!==void 0&&y.setUsage(_.usage),_.gpuType!==void 0&&(y.gpuType=_.gpuType),x.push(y)}o.morphAttributes[p]=x}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let p=0,f=u.length;p!==f;++p){let x=u[p];o.addGroup(x.start,x.count,x.materialIndex)}let d=t.data.boundingSphere;return d!==void 0&&(o.boundingSphere=new De().fromJSON(d)),t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}},sf={},Gh=class extends Qe{constructor(t){super(t)}load(t,e,n,i){let r=this,o=this.path===""?vo.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;let a=new Xn(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),Gt("ObjectLoader: Can't parse "+t+".",u.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),Gt("ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){let n=this,i=this.path===""?vo.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;let r=new Xn(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let o=await r.loadAsync(t,e),a;try{a=JSON.parse(o)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}let l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){let n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(c)}),a=this.parseTextures(t.textures,o),l=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,r,l,a,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let u=!1;for(let d in o)if(o[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&e(c)}return c}async parseAsync(t){let e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,i,a,o,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){sf[t]=e}parseShapes(t){let e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){let r=new hs().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){let n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=new wa().fromJSON(t[r],i);n[a.uuid]=a}return n}parseGeometries(t,e){let n={};if(t!==void 0){let i=new ml;for(let r=0,o=t.length;r<o;r++){let a,l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in r0?a=r0[l.type].fromJSON(l,e):l.type in sf?a=sf[l.type].fromJSON(l,e):At(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(t,e){let n={},i={};if(t!==void 0){let r=new fl;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){let l=t[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){let e={};if(t!==void 0)for(let n=0;n<t.length;n++){let i=t[n],r=fs.parse(i);e[r.uuid]=r}return e}parseImages(t,e){let n=this,i={},r;function o(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:Or(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){let l=new xo(e);r=new ps(l),r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){let u=t[c],d=u.url;if(Array.isArray(d)){let p=[];for(let f=0,x=d.length;f<x;f++){let m=d[f],g=a(m);g!==null&&(g instanceof HTMLImageElement?p.push(g):p.push(new gn(g.data,g.width,g.height)))}i[u.uuid]=new Ln(p)}else{let p=a(u.url);i[u.uuid]=new Ln(p)}}}return i}async parseImagesAsync(t){let e=this,n={},i;async function r(o){if(typeof o=="string"){let a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:Or(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){i=new ps(this.manager),i.setPriority(this.priority),i.setCache(this.cache),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){let l=t[o],c=l.url;if(Array.isArray(c)){let h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u],f=await r(p);f!==null&&(f instanceof HTMLImageElement?h.push(f):h.push(new gn(f.data,f.width,f.height)))}n[l.uuid]=new Ln(h)}else{let h=await r(l.url);n[l.uuid]=new Ln(h)}}}return n}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(At("ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}let i={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=t[r];a.image===void 0&&At('ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&At("ObjectLoader: Undefined image",a.image);let l=e[a.image],c=l.data,h;Array.isArray(c)?(h=new ls,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new gn:h=new Ue,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,by)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],m0),h.wrapT=n(a.wrap[1],m0)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,g0)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,g0)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.mipmapsAutoUpdate!==void 0&&(h.mipmapsAutoUpdate=a.mipmapsAutoUpdate),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.normalized!==void 0&&(h.normalized=a.normalized),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(t,e,n,i,r){let o;function a(d){return e[d]===void 0&&At("ObjectLoader: Undefined geometry",d),e[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){let p=[];for(let f=0,x=d.length;f<x;f++){let m=d[f];n[m]===void 0&&At("ObjectLoader: Undefined material",m),p.push(n[m])}return p}return n[d]===void 0&&At("ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&At("ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(t.type){case"Scene":o=new Dn,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new ct(t.background):o.background=c(t.background)),t.environment!==void 0&&(o.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new ya(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new Fi(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new Re(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new Hi(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new hl(t.color,t.intensity);break;case"DirectionalLight":o=new Vi(t.color,t.intensity),o.target=t.target||"";break;case"PointLight":o=new cl(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new ul(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new ll(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),o.target=t.target||"",t.map!==void 0&&(o.map=c(t.map));break;case"HemisphereLight":o=new Gi(t.color,t.groundColor,t.intensity);break;case"LightProbe":let d=new _o().fromArray(t.sh);o=new dl(d,t.intensity);break;case"SkinnedMesh":h=a(t.geometry),u=l(t.material),o=new ba(h,u),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":h=a(t.geometry),u=l(t.material),o=new fe(h,u);break;case"InstancedMesh":h=a(t.geometry),u=l(t.material);let p=t.count,f=t.instanceMatrix,x=t.instanceColor;o=new Ze(h,u,p),o.instanceMatrix=new _n(new Float32Array(f.array),16),x!==void 0&&(o.instanceColor=new _n(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":h=a(t.geometry),u=l(t.material),o=new Ta(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,u),o.geometry=h,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._geometryInfo=t.geometryInfo.map(m=>{let g=null,_=null;return m.boundingBox!==void 0&&(g=new Oe().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(_=new De().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:_}}),o._instanceInfo=t.instanceInfo,o._availableInstanceIds=t.availableInstanceIds,o._availableGeometryIds=t.availableGeometryIds,o._nextIndexStart=t.nextIndexStart,o._nextVertexStart=t.nextVertexStart,o._geometryCount=t.geometryCount,o._maxInstanceCount=t.maxInstanceCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._matricesTexture=c(t.matricesTexture.uuid),o._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(o._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(o.boundingSphere=new De().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(o.boundingBox=new Oe().fromJSON(t.boundingBox));break;case"LOD":o=new Sa;break;case"Line":o=new ii(a(t.geometry),l(t.material));break;case"LineLoop":o=new Aa(a(t.geometry),l(t.material));break;case"LineSegments":o=new Nn(a(t.geometry),l(t.material));break;case"PointCloud":case"Points":o=new Ea(a(t.geometry),l(t.material));break;case"Sprite":o=new Ma(l(t.material)),t.center!==void 0&&o.center.fromArray(t.center);break;case"Group":o=new ei;break;case"Bone":o=new Qr;break;default:o=new xe}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.pivot!==void 0&&(o.pivot=new L().fromArray(t.pivot)),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&(o.matrix.decompose(o.position,o.quaternion,o.scale),o.pivot!==null&&o.position.copy(o.pivot).applyMatrix4(o.matrix).sub(o.pivot))):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(o.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.blurSamples!==void 0&&(o.shadow.blurSamples=t.shadow.blurSamples),t.shadow.focus!==void 0&&(o.shadow.focus=t.shadow.focus),t.shadow.aspect!==void 0&&(o.shadow.aspect=t.shadow.aspect),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.mapType!==void 0&&(o.shadow.mapType=t.shadow.mapType),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.static!==void 0&&(o.static=t.static),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){let d=t.children;for(let p=0;p<d.length;p++)o.add(this.parseObject(d[p],e,n,i,r))}if(t.animations!==void 0){let d=t.animations;for(let p=0;p<d.length;p++){let f=d[p];o.animations.push(r[f])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);let d=t.levels;for(let p=0;p<d.length;p++){let f=d[p],x=o.getObjectByProperty("uuid",f.object);x!==void 0&&o.addLevel(x,f.distance,f.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=e[n.skeleton];i===void 0?At("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){let n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new xe}})}},by={UVMapping:Ml,CubeReflectionMapping:xi,CubeRefractionMapping:Ss,EquirectangularReflectionMapping:wo,EquirectangularRefractionMapping:To},m0={RepeatWrapping:kr,ClampToEdgeWrapping:mn,MirroredRepeatWrapping:Gr},g0={NearestFilter:Ne,NearestMipmapNearestFilter:Ru,NearestMipmapLinearFilter:ar,LinearFilter:Ae,LinearMipmapNearestFilter:Ao,LinearMipmapLinearFilter:qn},rf=new WeakMap,Hh=class extends Qe{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&At("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&At("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ni.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{rf.has(o)===!0?(i&&i(rf.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ni.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),rf.set(l,c),ni.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});ni.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},yo=class{static getContext(){return ah===void 0&&(ah=new(window.AudioContext||window.webkitAudioContext)),ah}static setContext(t){ah=t}},Vh=class extends Qe{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new Xn(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{let c=l.slice(0),h=yo.getContext(),u=t+"#decode";r.manager.itemStart(u),h.decodeAudioData(c,function(d){e(d),r.manager.itemEnd(u)}).catch(function(d){a(d),r.manager.itemEnd(u)})}catch(c){a(c)}},n,i);function a(l){i?i(l):Gt(l),r.manager.itemError(t)}}},x0=new Vt,_0=new Vt,Fs=new Vt,Wh=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Re,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Re,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Fs.copy(t.projectionMatrix);let i=e.eyeSep/2,r=i*e.near/e.focus,o=e.near*Math.tan(Vs*e.fov*.5)/e.zoom,a,l;_0.elements[12]=-i,x0.elements[12]=i,a=-o*e.aspect+r,l=o*e.aspect+r,Fs.elements[0]=2*e.near/(l-a),Fs.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(Fs),a=-o*e.aspect-r,l=o*e.aspect-r,Fs.elements[0]=2*e.near/(l-a),Fs.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(Fs)}this.cameraL.matrix.copy(t.matrixWorld).multiply(_0),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(x0),this.cameraR.matrixWorldNeedsUpdate=!0}},Dr=-90,Nr=1,ir=class extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Re(Dr,Nr,t,e);i.layers=this.layers,this.add(i);let r=new Re(Dr,Nr,t,e);r.layers=this.layers,this.add(r);let o=new Re(Dr,Nr,t,e);o.layers=this.layers,this.add(o);let a=new Re(Dr,Nr,t,e);a.layers=this.layers,this.add(a);let l=new Re(Dr,Nr,t,e);l.layers=this.layers,this.add(l);let c=new Re(Dr,Nr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},gl=class extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},sr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=wy.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};Os=new L,of=new Se,Ty=new L,Bs=new L,zs=new L,Xh=class extends xe{constructor(){super(),this.type="AudioListener",this.context=yo.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new sr}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Os,of,Ty),Bs.set(0,0,-1).applyQuaternion(of),zs.set(0,1,0).applyQuaternion(of),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Os.x,n),e.positionY.linearRampToValueAtTime(Os.y,n),e.positionZ.linearRampToValueAtTime(Os.z,n),e.forwardX.linearRampToValueAtTime(Bs.x,n),e.forwardY.linearRampToValueAtTime(Bs.y,n),e.forwardZ.linearRampToValueAtTime(Bs.z,n),e.upX.linearRampToValueAtTime(zs.x,n),e.upY.linearRampToValueAtTime(zs.y,n),e.upZ.linearRampToValueAtTime(zs.z,n)}else e.setPosition(Os.x,Os.y,Os.z),e.setOrientation(Bs.x,Bs.y,Bs.z,zs.x,zs.y,zs.z)}},xl=class extends xe{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){At("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){At("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){At("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){At("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){At("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(At("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){At("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(At("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}},ks=new L,v0=new Se,Ay=new L,Gs=new L,qh=class extends xl{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ks,v0,Ay),Gs.set(0,0,1).applyQuaternion(v0);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(ks.x,n),e.positionY.linearRampToValueAtTime(ks.y,n),e.positionZ.linearRampToValueAtTime(ks.z,n),e.orientationX.linearRampToValueAtTime(Gs.x,n),e.orientationY.linearRampToValueAtTime(Gs.y,n),e.orientationZ.linearRampToValueAtTime(Gs.z,n)}else e.setPosition(ks.x,ks.y,ks.z),e.setOrientation(Gs.x,Gs.y,Gs.z)}},Yh=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},_l=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Se.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let o=this._workIndex*r;Se.multiplyQuaternionsFlat(t,o,t,e,t,n),Se.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},pp="\\[\\]\\.:\\/",Ey=new RegExp("["+pp+"]","g"),mp="[^"+pp+"]",Cy="[^"+pp.replace("\\.","")+"]",Ry=/((?:WC+[\/:])*)/.source.replace("WC",mp),Py=/(WCOD+)?/.source.replace("WCOD",Cy),Iy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mp),Ly=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mp),Dy=new RegExp("^"+Ry+Py+Iy+Ly+"$"),Ny=["material","materials","bones","map"],yf=class{constructor(t,e,n){let i=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ey,"")}static parseTrackName(t){let e=Dy.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ny.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){At("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=yf;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Zh=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Yn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length,a,l=t.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],p=d.uuid,f=e[p];if(f===void 0){f=l++,e[p]=f,t.push(d);for(let x=0,m=o;x!==m;++x)r[x].push(new ve(d,n[x],i[x]))}else if(f<c){a=t[f];let x=--c,m=t[x];e[m.uuid]=f,t[f]=m,e[p]=x,t[x]=d;for(let g=0,_=o;g!==_;++g){let y=r[g],M=y[x],b=y[f];y[f]=M,b===void 0&&(b=new ve(d,n[g],i[g])),y[x]=b}}else t[f]!==a&&Gt("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){let u=r++,d=t[u];e[d.uuid]=h,t[h]=d,e[c]=u,t[u]=l;for(let p=0,f=i;p!==f;++p){let x=n[p],m=x[u],g=x[h];x[h]=m,x[u]=g}}}this.nCachedObjects_=r}uncache(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,o=t.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],h=c.uuid,u=e[h];if(u!==void 0)if(delete e[h],u<r){let d=--r,p=t[d],f=--o,x=t[f];u!==d&&(e[p.uuid]=u),t[u]=p,d!==f&&(e[x.uuid]=d),t[d]=x,t.pop();for(let m=0,g=i;m!==g;++m){let _=n[m],y=_[d],M=_[f];_[u]=y,_[d]=M,_.pop()}}else{let d=--o,p=t[d];u!==d&&(e[p.uuid]=u),t[u]=p,t.pop();for(let f=0,x=i;f!==x;++f){let m=n[f];m[u]=m[d],m.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[t]=i,o.push(t),a.push(e),r.push(u);for(let d=h,p=l.length;d!==p;++d){let f=l[d];u[d]=new ve(f,t,e)}return u}unsubscribe_(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=i[a];e[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}},vl=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,o=r.length,a=new Array(o),l={endingStart:is,endingEnd:is};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Zf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Fu:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case sc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,o=n===$f;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Yf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=ss,i.endingEnd=ss):(t?i.endingStart=this.zeroSlopeAtStart?ss:is:i.endingStart=Vr,e?i.endingEnd=this.zeroSlopeAtEnd?ss:is:i.endingEnd=Vr)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}},Uy=new Float32Array(1),$h=class extends En{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=i[u],p=d.name,f=h[p];if(f!==void 0)++f.referenceCount,o[u]=f;else{if(f=o[u],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,p));continue}let x=e&&e._propertyBindings[u].binding.parsedPath;f=new _l(ve.create(n,p,x),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,p),o[u]=f}a[u].resultBuffer=f.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;let u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new po(new Float32Array(2),new Float32Array(2),1,Uy),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,o=typeof t=="string"?fs.findByName(i,t):t,a=o!==null?o.uuid:t,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=sc),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new vl(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?fs.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Jh=class extends Zr{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n;for(let r=0;r<this.textures.length;r++){let o=new Ys(null,t,e,n);o.isRenderTargetTexture=!0,o.renderTarget=this,this.textures[r]=o}this._setTextureOptions(i)}},Kh=class s{constructor(t){this.value=t}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},Fy=0,Qh=class extends En{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Fy++}),this.name="",this.usage=rc,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){let r=e[n];Array.isArray(r)?this.uniforms.push(r.map(o=>o.clone())):this.uniforms.push(r.clone())}return this}clone(){return new this.constructor().copy(this)}},jh=class extends as{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},tu=class{constructor(t,e,n,i,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=o,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},y0=new Vt,eu=class{constructor(t,e,n=0,i=1/0){this.ray=new Bi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Gt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return y0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(y0),this}intersectObject(t,e=!0,n=[]){return Mf(t,this,n,e),n.sort(M0),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Mf(t[i],this,n,e);return n.sort(M0),n}};nu=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,At("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},iu=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},su=class{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}},yp=class yp{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};yp.prototype.isMatrix2=!0;ru=yp,S0=new et,yl=class{constructor(t=new et(1/0,1/0),e=new et(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=S0.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,S0).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},b0=new L,lh=new L,Ur=new L,Fr=new L,af=new L,Oy=new L,By=new L,ou=class{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){b0.subVectors(t,this.start),lh.subVectors(this.end,this.start);let n=lh.dot(lh);if(n===0)return 0;let r=lh.dot(b0)/n;return e&&(r=Jt(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=Oy,n=By){let i=10000000000000001e-32,r,o,a=this.start,l=t.start,c=this.end,h=t.end;Ur.subVectors(c,a),Fr.subVectors(h,l),af.subVectors(a,l);let u=Ur.dot(Ur),d=Fr.dot(Fr),p=Fr.dot(af);if(u<=i&&d<=i)return e.copy(a),n.copy(l),e.distanceToSquared(n);if(u<=i)r=0,o=p/d,o=Jt(o,0,1);else{let f=Ur.dot(af);if(d<=i)o=0,r=Jt(-f/u,0,1);else{let x=Ur.dot(Fr),m=u*d-x*x;m!==0?r=Jt((x*p-f*d)/m,0,1):r=0,o=(x*r+p)/d,o<0?(o=0,r=Jt(-f/u,0,1)):o>1&&(o=1,r=Jt((x-f)/u,0,1))}}return e.copy(a).addScaledVector(Ur,r),n.copy(l).addScaledVector(Fr,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},w0=new L,au=class extends xe{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let n=new Zt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){let c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new vt(i,3));let r=new $e({fog:!1,toneMapped:!1});this.cone=new Nn(n,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),w0.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(w0),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},ns=new L,ch=new Vt,lf=new Vt,lu=class extends Nn{constructor(t){let e=Ug(t),n=new Zt,i=[],r=[];for(let c=0;c<e.length;c++){let h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new vt(i,3)),n.setAttribute("color",new vt(r,3));let o=new $e({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;let a=new ct(255),l=new ct(65280);this.setColors(a,l)}updateMatrixWorld(t){let e=this.bones,n=this.geometry,i=n.getAttribute("position");lf.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){let a=e[r];a.parent&&a.parent.isBone&&(ch.multiplyMatrices(lf,a.matrixWorld),ns.setFromMatrixPosition(ch),i.setXYZ(o,ns.x,ns.y,ns.z),ch.multiplyMatrices(lf,a.parent.matrixWorld),ns.setFromMatrixPosition(ch),i.setXYZ(o+1,ns.x,ns.y,ns.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){let i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};cu=class extends fe{constructor(t,e,n){let i=new ho(e,4,2),r=new Hn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},zy=new L,T0=new ct,A0=new ct,hu=class extends xe{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new us(e);i.rotateY(Math.PI*.5),this.material=new Hn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new $t(o,3)),this.add(new fe(i,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");T0.copy(this.light.color),A0.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){let r=n<i/2?T0:A0;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(zy.setFromMatrixPosition(this.light.matrixWorld).negate())}},uu=class extends Nn{constructor(t=10,e=10,n=4473924,i=8947848){n=new ct(n),i=new ct(i);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,p=0,f=-a;d<=e;d++,f+=o){l.push(-a,0,f,a,0,f),l.push(f,0,-a,f,0,a);let x=d===r?n:i;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}let h=new Zt;h.setAttribute("position",new vt(l,3)),h.setAttribute("color",new vt(c,3));let u=new $e({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},du=class extends Nn{constructor(t=10,e=16,n=8,i=64,r=4473924,o=8947848){r=new ct(r),o=new ct(o);let a=[],l=[];if(e>1)for(let u=0;u<e;u++){let d=u/e*(Math.PI*2),p=Math.sin(d)*t,f=Math.cos(d)*t;a.push(0,0,0),a.push(p,0,f);let x=u&1?r:o;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let u=0;u<n;u++){let d=u&1?r:o,p=t-t/n*u;for(let f=0;f<i;f++){let x=f/i*(Math.PI*2),m=Math.sin(x)*p,g=Math.cos(x)*p;a.push(m,0,g),l.push(d.r,d.g,d.b),x=(f+1)/i*(Math.PI*2),m=Math.sin(x)*p,g=Math.cos(x)*p,a.push(m,0,g),l.push(d.r,d.g,d.b)}}let c=new Zt;c.setAttribute("position",new vt(a,3)),c.setAttribute("color",new vt(l,3));let h=new $e({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},E0=new L,hh=new L,C0=new L,fu=class extends xe{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Zt;i.setAttribute("position",new vt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let r=new $e({fog:!1,toneMapped:!1});this.lightPlane=new ii(i,r),this.add(this.lightPlane),i=new Zt,i.setAttribute("position",new vt([0,0,0,0,0,1],3)),this.targetLine=new ii(i,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),E0.setFromMatrixPosition(this.light.matrixWorld),hh.setFromMatrixPosition(this.light.target.matrixWorld),C0.subVectors(hh,E0),this.lightPlane.lookAt(hh),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(hh),this.targetLine.scale.z=C0.length()}},uh=new L,Le=new nr,pu=class extends Nn{constructor(t){let e=new Zt,n=new $e({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(f,x){l(f),l(x)}function l(f){i.push(0,0,0),r.push(0,0,0),o[f]===void 0&&(o[f]=[]),o[f].push(i.length/3-1)}e.setAttribute("position",new vt(i,3)),e.setAttribute("color",new vt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let c=new ct(16755200),h=new ct(16711680),u=new ct(43775),d=new ct(16777215),p=new ct(3355443);this.setColors(c,h,u,d,p)}setColors(t,e,n,i,r){let a=this.geometry.getAttribute("color");return a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0,this}update(){let t=this.geometry,e=this.pointMap,n=1,i=1,r,o;if(Le.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,o=0;else if(this.camera.coordinateSystem===An)r=-1,o=1;else if(this.camera.coordinateSystem===rs)r=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Fe("c",e,t,Le,0,0,r),Fe("t",e,t,Le,0,0,o),Fe("n1",e,t,Le,-n,-i,r),Fe("n2",e,t,Le,n,-i,r),Fe("n3",e,t,Le,-n,i,r),Fe("n4",e,t,Le,n,i,r),Fe("f1",e,t,Le,-n,-i,o),Fe("f2",e,t,Le,n,-i,o),Fe("f3",e,t,Le,-n,i,o),Fe("f4",e,t,Le,n,i,o),Fe("u1",e,t,Le,n*.7,i*1.1,r),Fe("u2",e,t,Le,-n*.7,i*1.1,r),Fe("u3",e,t,Le,0,i*2,r),Fe("cf1",e,t,Le,-n,0,o),Fe("cf2",e,t,Le,n,0,o),Fe("cf3",e,t,Le,0,-i,o),Fe("cf4",e,t,Le,0,i,o),Fe("cn1",e,t,Le,-n,0,r),Fe("cn2",e,t,Le,n,0,r),Fe("cn3",e,t,Le,0,-i,r),Fe("cn4",e,t,Le,0,i,r),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};dh=new Oe,mu=class extends Nn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Zt;r.setIndex(new $t(n,1)),r.setAttribute("position",new $t(i,3)),super(r,new $e({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&dh.setFromObject(this.object),dh.isEmpty())return;let t=dh.min,e=dh.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},gu=class extends Nn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Zt;r.setIndex(new $t(n,1)),r.setAttribute("position",new vt(i,3)),super(r,new $e({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},xu=class extends ii{constructor(t,e=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Zt;o.setAttribute("position",new vt(r,3)),o.computeBoundingSphere(),super(o,new $e({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Zt;l.setAttribute("position",new vt(a,3)),l.computeBoundingSphere(),this.add(new fe(l,new Hn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},R0=new L,_u=class extends xe{constructor(t=new L(0,0,1),e=new L(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",fh===void 0&&(fh=new Zt,fh.setAttribute("position",new vt([0,0,0,0,1,0],3)),cf=new io(.5,1,5,1),cf.translate(0,-.5,0)),this.position.copy(e),this.line=new ii(fh,new $e({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new fe(cf,new Hn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{R0.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(R0,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},vu=class extends Nn{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Zt;i.setAttribute("position",new vt(e,3)),i.setAttribute("color",new vt(n,3));let r=new $e({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){let i=new ct,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},yu=class{constructor(){this.type="ShapePath",this.color=new ct,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new cs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1,u=c.length;for(let d=0,p=u-1;d<u;p=d++){let f=c[d],x=c[p];f.y>l.y!=x.y>l.y&&l.x<(x.x-f.x)*(l.y-f.y)/(x.y-f.y)+f.x&&(h=!h)}return h}function e(l,c){let h=c.getCenter(new et);if(t(h,l))return h;let u=h.y,d=[],p=l.length;for(let f=0;f<p;f++){let x=l[f],m=l[(f+1)%p];if(x.y>u!=m.y>u){let g=x.x+(u-x.y)*(m.x-x.x)/(m.y-x.y);d.push(g)}}return d.length>1&&(d.sort((f,x)=>f-x),h.x=(d[0]+d[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(At('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=kn.area(c);if(h===0)continue;let u=new yl;for(let d=0;d<c.length;d++)u.expandByPoint(c[d]);r.push({subPath:l,points:c,boundingBox:u,interiorPoint:e(c,u),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let u=l-1;u>=0;u--){let d=r[u];if(d.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,d.points)){c.container=d.exclude?d.container:d,h=d.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let o=[],a=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new hs;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=a.get(l.container);if(!c)continue;let h=new cs;h.curves=l.subPath.curves,c.holes.push(h)}return o}},Mu=class extends En{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};Su=class{static contain(t,e){return ky(t,e)}static cover(t,e){return Gy(t,e)}static fill(t){return Hy(t)}static getByteLength(t,e,n,i){return Hu(t,e,n,i)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?At("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});var Kt={};Td(Kt,{ACESFilmicToneMapping:()=>gi,AddEquation:()=>gs,AddOperation:()=>Xf,AdditiveAnimationBlendMode:()=>Fu,AdditiveBlending:()=>Mo,AgXToneMapping:()=>ys,AlphaFormat:()=>Nu,AlwaysCompare:()=>zu,AlwaysDepth:()=>da,AlwaysStencilFunc:()=>ep,AmbientLight:()=>hl,AnimationAction:()=>vl,AnimationClip:()=>fs,AnimationLoader:()=>Fh,AnimationMixer:()=>$h,AnimationObjectGroup:()=>Zh,AnimationUtils:()=>Uh,ArcCurve:()=>Da,ArrayCamera:()=>gl,ArrowHelper:()=>_u,AttachedBindMode:()=>ph,Audio:()=>xl,AudioAnalyser:()=>Yh,AudioContext:()=>yo,AudioListener:()=>Xh,AudioLoader:()=>Vh,AxesHelper:()=>vu,BackSide:()=>cn,BasicDepthPacking:()=>jf,BasicShadowMap:()=>D0,BatchedMesh:()=>Ta,BezierInterpolant:()=>ol,Bone:()=>Qr,BooleanKeyframeTrack:()=>fi,Box2:()=>yl,Box3:()=>Oe,Box3Helper:()=>gu,BoxGeometry:()=>an,BoxHelper:()=>mu,BufferAttribute:()=>$t,BufferGeometry:()=>Zt,BufferGeometryLoader:()=>ml,ByteType:()=>Pu,Cache:()=>ni,Camera:()=>nr,CameraHelper:()=>pu,CanvasTexture:()=>Lh,CapsuleGeometry:()=>Ra,CatmullRomCurve3:()=>Na,CineonToneMapping:()=>vs,CircleGeometry:()=>Pa,ClampToEdgeWrapping:()=>mn,Clock:()=>nu,Color:()=>ct,ColorKeyframeTrack:()=>mo,ColorManagement:()=>le,Compatibility:()=>_g,CompressedArrayTexture:()=>Ph,CompressedCubeTexture:()=>Ih,CompressedTexture:()=>Js,CompressedTextureLoader:()=>Oh,ConeGeometry:()=>io,ConstantAlphaFactor:()=>Hf,ConstantColorFactor:()=>kf,Controls:()=>Mu,CubeCamera:()=>ir,CubeDepthTexture:()=>eo,CubeReflectionMapping:()=>xi,CubeRefractionMapping:()=>Ss,CubeTexture:()=>ls,CubeTextureLoader:()=>Bh,CubicBezierCurve:()=>so,CubicBezierCurve3:()=>Ua,CubicInterpolant:()=>sl,CullFaceBack:()=>wu,CullFaceFront:()=>wf,CullFaceFrontBack:()=>L0,CullFaceNone:()=>bf,Curve:()=>Cn,CurvePath:()=>Oa,CustomBlending:()=>Af,CustomToneMapping:()=>bo,CylinderGeometry:()=>ln,Cylindrical:()=>su,Data3DTexture:()=>Ys,DataArrayTexture:()=>qs,DataTexture:()=>gn,DataTextureLoader:()=>zh,DataUtils:()=>vh,DecrementStencilOp:()=>$0,DecrementWrapStencilOp:()=>K0,DefaultLoadingManager:()=>fp,DepthFormat:()=>ui,DepthStencilFormat:()=>_i,DepthTexture:()=>Vn,DetachedBindMode:()=>qf,DirectionalLight:()=>Vi,DirectionalLightHelper:()=>fu,DiscreteInterpolant:()=>rl,DodecahedronGeometry:()=>Ia,DoubleSide:()=>Un,DstAlphaFactor:()=>Uf,DstColorFactor:()=>Of,DynamicCopyUsage:()=>dg,DynamicDrawUsage:()=>og,DynamicReadUsage:()=>cg,EdgesGeometry:()=>La,EllipseCurve:()=>Ks,EqualCompare:()=>sp,EqualDepth:()=>pa,EqualStencilFunc:()=>eg,EquirectangularReflectionMapping:()=>wo,EquirectangularRefractionMapping:()=>To,Euler:()=>Gn,EventDispatcher:()=>En,ExternalTexture:()=>no,ExtrudeGeometry:()=>Ga,FileLoader:()=>Xn,Float16BufferAttribute:()=>Th,Float32BufferAttribute:()=>vt,FloatType:()=>on,Fog:()=>ya,FogExp2:()=>Fi,FramebufferTexture:()=>Rh,FrontSide:()=>Wi,Frustum:()=>di,FrustumArray:()=>jr,GLBufferAttribute:()=>tu,GLSL1:()=>pg,GLSL3:()=>ku,GreaterCompare:()=>rp,GreaterDepth:()=>ga,GreaterEqualCompare:()=>Bu,GreaterEqualDepth:()=>ma,GreaterEqualStencilFunc:()=>rg,GreaterStencilFunc:()=>ig,GridHelper:()=>uu,Group:()=>ei,HTMLTexture:()=>Dh,HalfFloatType:()=>He,HemisphereLight:()=>Gi,HemisphereLightHelper:()=>hu,IcosahedronGeometry:()=>si,ImageBitmapLoader:()=>Hh,ImageLoader:()=>ps,ImageUtils:()=>va,IncrementStencilOp:()=>Z0,IncrementWrapStencilOp:()=>J0,InstancedBufferAttribute:()=>_n,InstancedBufferGeometry:()=>pl,InstancedInterleavedBuffer:()=>jh,InstancedMesh:()=>Ze,Int16BufferAttribute:()=>bh,Int32BufferAttribute:()=>wh,Int8BufferAttribute:()=>yh,IntType:()=>Sl,InterleavedBuffer:()=>as,InterleavedBufferAttribute:()=>Oi,Interpolant:()=>ki,InterpolateBezier:()=>mh,InterpolateDiscrete:()=>Hr,InterpolateLinear:()=>_a,InterpolateSmooth:()=>oa,InterpolationSamplingMode:()=>xg,InterpolationSamplingType:()=>gg,InvertStencilOp:()=>Q0,KeepStencilOp:()=>aa,KeyframeTrack:()=>vn,LOD:()=>Sa,LatheGeometry:()=>Ha,Layers:()=>Zs,LessCompare:()=>ip,LessDepth:()=>fa,LessEqualCompare:()=>Ou,LessEqualDepth:()=>Ws,LessEqualStencilFunc:()=>ng,LessStencilFunc:()=>tg,Light:()=>ri,LightProbe:()=>dl,LightShadow:()=>er,Line:()=>ii,Line3:()=>ou,LineBasicMaterial:()=>$e,LineCurve:()=>ro,LineCurve3:()=>Fa,LineDashedMaterial:()=>il,LineLoop:()=>Aa,LineSegments:()=>Nn,LinearFilter:()=>Ae,LinearInterpolant:()=>po,LinearMipMapLinearFilter:()=>B0,LinearMipMapNearestFilter:()=>O0,LinearMipmapLinearFilter:()=>qn,LinearMipmapNearestFilter:()=>Ao,LinearSRGBColorSpace:()=>Wr,LinearToneMapping:()=>xs,LinearTransfer:()=>Xr,Loader:()=>Qe,LoaderUtils:()=>vo,LoadingManager:()=>xo,LoopOnce:()=>Yf,LoopPingPong:()=>$f,LoopRepeat:()=>Zf,MOUSE:()=>P0,Material:()=>ke,MaterialBlending:()=>N0,MaterialLoader:()=>fl,MathUtils:()=>hp,Matrix2:()=>ru,Matrix3:()=>jt,Matrix4:()=>Vt,MaxEquation:()=>Pf,Mesh:()=>fe,MeshBasicMaterial:()=>Hn,MeshDepthMaterial:()=>uo,MeshDistanceMaterial:()=>fo,MeshLambertMaterial:()=>el,MeshMatcapMaterial:()=>nl,MeshNormalMaterial:()=>tl,MeshPhongMaterial:()=>Qa,MeshPhysicalMaterial:()=>Ka,MeshStandardMaterial:()=>be,MeshToonMaterial:()=>ja,MinEquation:()=>Rf,MirroredRepeatWrapping:()=>Gr,MixOperation:()=>Wf,MultiplyBlending:()=>Au,MultiplyOperation:()=>So,NearestFilter:()=>Ne,NearestMipMapLinearFilter:()=>F0,NearestMipMapNearestFilter:()=>U0,NearestMipmapLinearFilter:()=>ar,NearestMipmapNearestFilter:()=>Ru,NeutralToneMapping:()=>Ms,NeverCompare:()=>np,NeverDepth:()=>ua,NeverStencilFunc:()=>j0,NoBlending:()=>mi,NoColorSpace:()=>yi,NoNormalPacking:()=>V0,NoToneMapping:()=>Fn,NormalAnimationBlendMode:()=>sc,NormalBlending:()=>or,NormalGAPacking:()=>X0,NormalRGPacking:()=>W0,NotEqualCompare:()=>op,NotEqualDepth:()=>xa,NotEqualStencilFunc:()=>sg,NumberKeyframeTrack:()=>js,Object3D:()=>xe,ObjectLoader:()=>Gh,ObjectSpaceNormalMap:()=>tp,OctahedronGeometry:()=>us,OneFactor:()=>Lf,OneMinusConstantAlphaFactor:()=>Vf,OneMinusConstantColorFactor:()=>Gf,OneMinusDstAlphaFactor:()=>Ff,OneMinusDstColorFactor:()=>Bf,OneMinusSrcAlphaFactor:()=>Cu,OneMinusSrcColorFactor:()=>Nf,OrthographicCamera:()=>Hi,PCFShadowMap:()=>ms,PCFSoftShadowMap:()=>Tf,PMREMGenerator:()=>qi,Path:()=>cs,PerspectiveCamera:()=>Re,Plane:()=>zn,PlaneGeometry:()=>Wn,PlaneHelper:()=>xu,PointLight:()=>cl,PointLightHelper:()=>cu,Points:()=>Ea,PointsMaterial:()=>to,PolarGridHelper:()=>du,PolyhedronGeometry:()=>zi,PositionalAudio:()=>qh,PropertyBinding:()=>ve,PropertyMixer:()=>_l,QuadraticBezierCurve:()=>oo,QuadraticBezierCurve3:()=>ao,Quaternion:()=>Se,QuaternionKeyframeTrack:()=>tr,QuaternionLinearInterpolant:()=>al,R11_EAC_Format:()=>Ul,RED_GREEN_RGTC2_Format:()=>Do,RED_RGTC1_Format:()=>ec,REVISION:()=>Sf,RG11_EAC_Format:()=>Lo,RGBADepthPacking:()=>k0,RGBAFormat:()=>xn,RGBAIntegerFormat:()=>El,RGBA_ASTC_10x10_Format:()=>$l,RGBA_ASTC_10x5_Format:()=>ql,RGBA_ASTC_10x6_Format:()=>Yl,RGBA_ASTC_10x8_Format:()=>Zl,RGBA_ASTC_12x10_Format:()=>Jl,RGBA_ASTC_12x12_Format:()=>Kl,RGBA_ASTC_4x4_Format:()=>Bl,RGBA_ASTC_5x4_Format:()=>zl,RGBA_ASTC_5x5_Format:()=>kl,RGBA_ASTC_6x5_Format:()=>Gl,RGBA_ASTC_6x6_Format:()=>Hl,RGBA_ASTC_8x5_Format:()=>Vl,RGBA_ASTC_8x6_Format:()=>Wl,RGBA_ASTC_8x8_Format:()=>Xl,RGBA_BPTC_Format:()=>Ql,RGBA_ETC2_EAC_Format:()=>Nl,RGBA_PVRTC_2BPPV1_Format:()=>Il,RGBA_PVRTC_4BPPV1_Format:()=>Pl,RGBA_S3TC_DXT1_Format:()=>Ro,RGBA_S3TC_DXT3_Format:()=>Po,RGBA_S3TC_DXT5_Format:()=>Io,RGBDepthPacking:()=>G0,RGBFormat:()=>Uu,RGBIntegerFormat:()=>z0,RGB_BPTC_SIGNED_Format:()=>jl,RGB_BPTC_UNSIGNED_Format:()=>tc,RGB_ETC1_Format:()=>Ll,RGB_ETC2_Format:()=>Dl,RGB_PVRTC_2BPPV1_Format:()=>Rl,RGB_PVRTC_4BPPV1_Format:()=>Cl,RGB_S3TC_DXT1_Format:()=>Co,RGDepthPacking:()=>H0,RGFormat:()=>Xi,RGIntegerFormat:()=>Al,RawShaderMaterial:()=>ds,Ray:()=>Bi,Raycaster:()=>eu,RectAreaLight:()=>ul,RedFormat:()=>Tl,RedIntegerFormat:()=>Eo,ReinhardToneMapping:()=>_s,RenderObjectRefreshType:()=>vg,RenderTarget:()=>Zr,RenderTarget3D:()=>Jh,RepeatWrapping:()=>kr,ReplaceStencilOp:()=>Y0,ReverseSubtractEquation:()=>Cf,RingGeometry:()=>Va,SIGNED_R11_EAC_Format:()=>Fl,SIGNED_RED_GREEN_RGTC2_Format:()=>ic,SIGNED_RED_RGTC1_Format:()=>nc,SIGNED_RG11_EAC_Format:()=>Ol,SRGBColorSpace:()=>Ke,SRGBTransfer:()=>ge,Scene:()=>Dn,ShaderChunk:()=>re,ShaderLib:()=>oi,ShaderMaterial:()=>Ge,ShadowMaterial:()=>Ja,Shape:()=>hs,ShapeGeometry:()=>Wa,ShapePath:()=>yu,ShapeUtils:()=>kn,ShortType:()=>Iu,Skeleton:()=>wa,SkeletonHelper:()=>lu,SkinnedMesh:()=>ba,Source:()=>gh,Sphere:()=>De,SphereGeometry:()=>ho,Spherical:()=>iu,SphericalHarmonics3:()=>_o,SplineCurve:()=>lo,SpotLight:()=>ll,SpotLightHelper:()=>au,Sprite:()=>Ma,SpriteMaterial:()=>Kr,SrcAlphaFactor:()=>Eu,SrcAlphaSaturateFactor:()=>zf,SrcColorFactor:()=>Df,StaticCopyUsage:()=>ug,StaticDrawUsage:()=>rc,StaticReadUsage:()=>lg,StereoCamera:()=>Wh,StreamCopyUsage:()=>fg,StreamDrawUsage:()=>ag,StreamReadUsage:()=>hg,StringKeyframeTrack:()=>pi,SubtractEquation:()=>Ef,SubtractiveBlending:()=>Tu,TOUCH:()=>I0,TangentSpaceNormalMap:()=>vi,TetrahedronGeometry:()=>Xa,Texture:()=>Ue,TextureLoader:()=>kh,TextureSource:()=>Ln,TextureUtils:()=>Su,Timer:()=>sr,TimestampQuery:()=>mg,TorusGeometry:()=>qa,TorusKnotGeometry:()=>Ya,Triangle:()=>ti,TriangleFanDrawMode:()=>Qf,TriangleStripDrawMode:()=>Kf,TrianglesDrawMode:()=>Jf,TubeGeometry:()=>Za,UVMapping:()=>Ml,Uint16BufferAttribute:()=>$r,Uint32BufferAttribute:()=>Jr,Uint8BufferAttribute:()=>Mh,Uint8ClampedBufferAttribute:()=>Sh,Uniform:()=>Kh,UniformsGroup:()=>Qh,UniformsLib:()=>Ct,UniformsUtils:()=>Mi,UnsignedByteType:()=>yn,UnsignedInt101111Type:()=>Du,UnsignedInt248Type:()=>bs,UnsignedInt5999Type:()=>Lu,UnsignedIntType:()=>Mn,UnsignedShort4444Type:()=>bl,UnsignedShort5551Type:()=>wl,UnsignedShortType:()=>lr,VSMShadowMap:()=>rr,Vector2:()=>et,Vector3:()=>L,Vector4:()=>de,VectorKeyframeTrack:()=>go,VideoFrameTexture:()=>Ch,VideoTexture:()=>Ca,WebGL3DRenderTarget:()=>_h,WebGLArrayRenderTarget:()=>xh,WebGLCoordinateSystem:()=>An,WebGLCubeRenderTarget:()=>Uo,WebGLRenderTarget:()=>Ee,WebGLRenderer:()=>lc,WebGLUtils:()=>fx,WebGPUCoordinateSystem:()=>rs,WebXRController:()=>$s,WireframeGeometry:()=>$a,WrapAroundEnding:()=>Vr,ZeroCurvatureEnding:()=>is,ZeroFactor:()=>If,ZeroSlopeEnding:()=>ss,ZeroStencilOp:()=>q0,createCanvasElement:()=>ap,error:()=>Gt,getConsoleFunction:()=>Sg,log:()=>Yr,setConsoleFunction:()=>Mg,warn:()=>At,warnOnce:()=>hi});function ix(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Wy(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,f)=>p.start-f.start);let d=0;for(let p=1;p<u.length;p++){let f=u[d],x=u[p];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,f=u.length;p<f;p++){let x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}function T1(s,t,e,n,i,r){let o=new ct(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function p(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let M=_.backgroundBlurriness>0;y=t.get(y,M)}return y}function f(_){let y=!1,M=p(_);M===null?m(o,a):M&&M.isColor&&(m(M,1),y=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,y){let M=p(y);M&&M.isCubeTexture?(c===void 0&&(c=new fe(new an(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:cr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(w1.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sx),c.material.toneMapped=le.getTransfer(M.colorSpace)!==ge,(h!==M||u!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new fe(new Wn(2,2),new Ge({name:"BackgroundMaterial",uniforms:cr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=le.getTransfer(M.colorSpace)!==ge,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,y){_.getRGB(Vu,dp(s)),e.buffers.color.setClear(Vu.r,Vu.g,Vu.b,y,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:f,addToRenderList:x,dispose:g}}function A1(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(R,D,z,N,O){let W=!1,H=u(R,N,z,D);r!==H&&(r=H,c(r.object)),W=p(R,N,z,O),W&&f(R,N,z,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(R,D,z,N),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(R){return s.bindVertexArray(R)}function h(R){return s.deleteVertexArray(R)}function u(R,D,z,N){let O=N.wireframe===!0,W=n[D.id];W===void 0&&(W={},n[D.id]=W);let H=R.isInstancedMesh===!0?R.id:0,st=W[H];st===void 0&&(st={},W[H]=st);let X=st[z.id];X===void 0&&(X={},st[z.id]=X);let Z=X[O];return Z===void 0&&(Z=d(l()),X[O]=Z),Z}function d(R){let D=[],z=[],N=[];for(let O=0;O<e;O++)D[O]=0,z[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:N,object:R,attributes:{},index:null}}function p(R,D,z,N){let O=r.attributes,W=D.attributes,H=0,st=z.getAttributes();for(let X in st)if(st[X].location>=0){let nt=O[X],Et=W[X];if(Et===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(Et=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(Et=R.instanceColor)),nt===void 0||nt.attribute!==Et||Et&&nt.data!==Et.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function f(R,D,z,N){let O={},W=D.attributes,H=0,st=z.getAttributes();for(let X in st)if(st[X].location>=0){let nt=W[X];nt===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor));let Et={};Et.attribute=nt,nt&&nt.data&&(Et.data=nt.data),O[X]=Et,H++}r.attributes=O,r.attributesNum=H,r.index=N}function x(){let R=r.newAttributes;for(let D=0,z=R.length;D<z;D++)R[D]=0}function m(R){g(R,0)}function g(R,D){let z=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;z[R]=1,N[R]===0&&(s.enableVertexAttribArray(R),N[R]=1),O[R]!==D&&(s.vertexAttribDivisor(R,D),O[R]=D)}function _(){let R=r.newAttributes,D=r.enabledAttributes;for(let z=0,N=D.length;z<N;z++)D[z]!==R[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function y(R,D,z,N,O,W,H){H===!0?s.vertexAttribIPointer(R,D,z,O,W):s.vertexAttribPointer(R,D,z,N,O,W)}function M(R,D,z,N){x();let O=N.attributes,W=z.getAttributes(),H=D.defaultAttributeValues;for(let st in W){let X=W[st];if(X.location>=0){let Z=O[st];if(Z===void 0&&(st==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),st==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor)),Z!==void 0){let nt=Z.normalized,Et=Z.itemSize,ot=t.get(Z);if(ot===void 0)continue;let G=ot.buffer,lt=ot.type,yt=ot.bytesPerElement,kt=lt===s.INT||lt===s.UNSIGNED_INT||Z.gpuType===Sl;if(Z.isInterleavedBufferAttribute){let Tt=Z.data,Ht=Tt.isInterleavedBuffer===!0?Tt.stride:Tt.itemSize,ye=Z.offset;if(Tt.isInstancedInterleavedBuffer||Tt.isInstancedBufferAttribute){for(let It=0;It<X.locationSize;It++)g(X.location+It,Tt.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let It=0;It<X.locationSize;It++)m(X.location+It);s.bindBuffer(s.ARRAY_BUFFER,G);for(let It=0;It<X.locationSize;It++)y(X.location+It,Et/X.locationSize,lt,nt,Ht*yt,(ye+Et/X.locationSize*It)*yt,kt)}else{if(Z.isInstancedBufferAttribute){for(let Tt=0;Tt<X.locationSize;Tt++)g(X.location+Tt,Z.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Tt=0;Tt<X.locationSize;Tt++)m(X.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,G);for(let Tt=0;Tt<X.locationSize;Tt++)y(X.location+Tt,Et/X.locationSize,lt,nt,Et*yt,Et/X.locationSize*Tt*yt,kt)}}else if(H!==void 0){let nt=H[st];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(X.location,nt);break;case 3:s.vertexAttrib3fv(X.location,nt);break;case 4:s.vertexAttrib4fv(X.location,nt);break;default:s.vertexAttrib1fv(X.location,nt)}}}}_()}function b(){C();for(let R in n){let D=n[R];for(let z in D){let N=D[z];for(let O in N){let W=N[O];for(let H in W)h(W[H].object),delete W[H];delete N[O]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;let D=n[R.id];for(let z in D){let N=D[z];for(let O in N){let W=N[O];for(let H in W)h(W[H].object),delete W[H];delete N[O]}}delete n[R.id]}function v(R){for(let D in n){let z=n[D];for(let N in z){let O=z[N];if(O[R.id]===void 0)continue;let W=O[R.id];for(let H in W)h(W[H].object),delete W[H];delete O[R.id]}}}function S(R){for(let D in n){let z=n[D],N=R.isInstancedMesh===!0?R.id:0,O=z[N];if(O!==void 0){for(let W in O){let H=O[W];for(let st in H)h(H[st].object),delete H[st];delete O[W]}delete z[N],Object.keys(z).length===0&&delete n[D]}}}function C(){A(),o=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function E1(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function C1(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(v){return!(v!==xn&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let S=v===He&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==yn&&v!==on&&!S&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(At("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&At("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&At("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:M,maxSamples:b,samples:w}}function R1(s){let t=this,e=null,n=0,i=!1,r=!1,o=new zn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let f=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||f===null||f.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,y=_*4,M=g.clippingState||null;l.value=M,M=h(f,d,y,p);for(let b=0;b!==y;++b)M[b]=e[b];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,f){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,f!==!0||m===null){let g=p+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,M=p;y!==x;++y,M+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Og(s,t,e){return new Uo(s,{minFilter:qn,generateMipmaps:t,type:He,colorSpace:Wr,depthBuffer:e})}function cc(s,t,e){return new Ge({name:s,uniforms:t,vertexShader:re.cube_vert,fragmentShader:e,side:cn,blending:mi,depthTest:!1,depthWrite:!1})}function U1(){return cc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${rx}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function F1(){return cc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ox}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function O1(){return cc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${I1}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Bg(){return cc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function zg(){return cc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function B1(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,p=!1){return d==null?null:p?o(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===wo||p===To)if(t.has(d)){let f=t.get(d).texture;return a(f,d.mapping)}else{let f=d.image;if(f&&f.height>0){let x=new Uo(f.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,f=p===wo||p===To,x=p===xi||p===Ss;if(f||x){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new qi(s)),m=f?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return f&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new qi(s)),m=f?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,p){return p===wo?d.mapping=xi:p===To&&(d.mapping=Ss),d}function l(d){let p=0,f=6;for(let x=0;x<f;x++)d[x]!==void 0&&p++;return p===f}function c(d){let p=d.target;p.removeEventListener("dispose",c);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function h(d){let p=d.target;p.removeEventListener("dispose",h);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function z1(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&hi("WebGLRenderer: "+n+" extension not supported."),i}}}function k1(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(f=>delete i[f]);function a(f){l(f.target)}function l(f){f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete i[f.id],o.unregister(f);let x=r.get(f);x&&(t.remove(x),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function c(f,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(f){let x=f.attributes;for(let m in x)t.update(x[m],s.ARRAY_BUFFER)}function u(f){let x=f.index,m=f.attributes.position,g=0;if(m===void 0)return;let _=x!==null?x.array.length:m.array.length/3-1,y=m.count>=65535?Jr:$r,M=new y(Math.ceil(_/3)*6,1),b=M.array;if(x!==null){let v=x.array;g=x.version;for(let S=0,C=0;S<_;S+=3){let A=v[S+0],R=v[S+1],D=v[S+2];b[C++]=A,b[C++]=R,b[C++]=R,b[C++]=D,b[C++]=D,b[C++]=A}}else{g=m.version;for(let v=0,S=0;v<_;v+=3){let C=v+0,A=v+1,R=v+2;b[S++]=C,b[S++]=A,b[S++]=A,b[S++]=R,b[S++]=R,b[S++]=C}}M.version=g;let w=r.get(f);w&&t.remove(w),r.set(f,M)}function d(f){let x=r.get(f);if(x){let m=f.index;m!==null&&x.version<m.version&&u(f)}else u(f);return r.get(f)}function p(){for(let f in i){let x=i[f].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:p}}function G1(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,u*o,p),e.update(d,n,p))}function h(u,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let x=0;for(let m=0;m<p;m++)x+=d[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function H1(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Gt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function V1(s,t,e){let n=new WeakMap,i=new de;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let C=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;p===!0&&(y=1),f===!0&&(y=2),x===!0&&(y=3);let M=a.attributes.position.count*y,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*b*4*u),v=new qs(w,M,b,u);v.type=on,v.needsUpdate=!0;let S=y*4;for(let A=0;A<u;A++){let R=m[A],D=g[A],z=_[A],N=M*b*4*A;for(let O=0;O<R.count;O++){let W=O*S;p===!0&&(i.fromBufferAttribute(R,O),w[N+W+0]=i.x,w[N+W+1]=i.y,w[N+W+2]=i.z,w[N+W+3]=0),f===!0&&(i.fromBufferAttribute(D,O),w[N+W+4]=i.x,w[N+W+5]=i.y,w[N+W+6]=i.z,w[N+W+7]=0),x===!0&&(i.fromBufferAttribute(z,O),w[N+W+8]=i.x,w[N+W+9]=i.y,w[N+W+10]=i.z,w[N+W+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:v,size:new et(M,b)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let f=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",f),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function W1(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}function q1(s,t,e,n,i,r){let o=new Ee(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Zt;h.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new vt([0,2,0,0,2,0],2));let u=new ds({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new fe(h,u),p=new Hi(-1,1,1,-1,0,1),f=null,x=null,m=!1,g,_=null,y=[],M=!1;this.setSize=function(b,w){o.setSize(b,w),a!==null&&a.setSize(b,w),l!==null&&l.setSize(b,w);for(let v=0;v<y.length;v++){let S=y[v];S.setSize&&S.setSize(b,w)}},this.setEffects=function(b){y=b,M=y.length>0&&y[0].isRenderPass===!0;let w=o.width,v=o.height;y.length>0&&a===null&&(a=new Ee(w,v,{type:He,depthBuffer:!1,stencilBuffer:!1}),l=new Ee(w,v,{type:He,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&y.some(C=>C.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Vn(w,v),r===!0&&(c.format=_i,c.type=bs)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let C=0;C<y.length;C++){let A=y[C];A.setSize&&A.setSize(w,v),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,w){if(m||b.toneMapping===Fn&&y.length===0)return!1;if(_=w,w!==null){let v=w.width,S=w.height;(o.width!==v||o.height!==S)&&this.setSize(v,S)}return M===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Fn,!0},this.hasRenderPass=function(){return M},this.end=function(b,w){b.toneMapping=g,m=!0;let v=o,S=a;for(let C=0;C<y.length;C++){let A=y[C];A.enabled!==!1&&(A.render(b,S,v,w),A.needsSwap!==!1&&(v=S,S=S===a?l:a))}if(f!==b.outputColorSpace||x!==b.toneMapping){f=b.outputColorSpace,x=b.toneMapping,u.defines={},le.getTransfer(f)===ge&&(u.defines.SRGB_TRANSFER="");let C=X1[x];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,b.setRenderTarget(_),b.render(d,p),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}function Fo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=kg[i];if(r===void 0&&(r=new Float32Array(i),kg[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function We(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Xu(s,t){let e=Gg[t];e===void 0&&(e=new Int32Array(t),Gg[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Y1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Z1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2fv(this.addr,t),We(e,t)}}function $1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;s.uniform3fv(this.addr,t),We(e,t)}}function J1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4fv(this.addr,t),We(e,t)}}function K1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Wg.set(n),s.uniformMatrix2fv(this.addr,!1,Wg),We(e,n)}}function Q1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Vg.set(n),s.uniformMatrix3fv(this.addr,!1,Vg),We(e,n)}}function j1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Hg.set(n),s.uniformMatrix4fv(this.addr,!1,Hg),We(e,n)}}function tb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function eb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2iv(this.addr,t),We(e,t)}}function nb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3iv(this.addr,t),We(e,t)}}function ib(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4iv(this.addr,t),We(e,t)}}function sb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function rb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2uiv(this.addr,t),We(e,t)}}function ob(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3uiv(this.addr,t),We(e,t)}}function ab(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4uiv(this.addr,t),We(e,t)}}function qu(s){return s.version===0&&(s.compareFunction=zu,s.needsUpdate=!0),s}function lb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=qu(lx):r=ax,e.setTexture2D(t||r,i)}function cb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ux,i)}function hb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=qu(cx):r=dx,e.setTextureCube(t||r,i)}function ub(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||hx,i)}function db(s){switch(s){case 5126:return Y1;case 35664:return Z1;case 35665:return $1;case 35666:return J1;case 35674:return K1;case 35675:return Q1;case 35676:return j1;case 5124:case 35670:return tb;case 35667:case 35671:return eb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return sb;case 36294:return rb;case 36295:return ob;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return ub}}function fb(s,t){s.uniform1fv(this.addr,t)}function pb(s,t){let e=Fo(t,this.size,2);s.uniform2fv(this.addr,e)}function mb(s,t){let e=Fo(t,this.size,3);s.uniform3fv(this.addr,e)}function gb(s,t){let e=Fo(t,this.size,4);s.uniform4fv(this.addr,e)}function xb(s,t){let e=Fo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function _b(s,t){let e=Fo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function vb(s,t){let e=Fo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function yb(s,t){s.uniform1iv(this.addr,t)}function Mb(s,t){s.uniform2iv(this.addr,t)}function Sb(s,t){s.uniform3iv(this.addr,t)}function bb(s,t){s.uniform4iv(this.addr,t)}function wb(s,t){s.uniform1uiv(this.addr,t)}function Tb(s,t){s.uniform2uiv(this.addr,t)}function Ab(s,t){s.uniform3uiv(this.addr,t)}function Eb(s,t){s.uniform4uiv(this.addr,t)}function Cb(s,t,e){let n=this.cache,i=t.length,r=Xu(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),We(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=qu(lx):o=ax;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Rb(s,t,e){let n=this.cache,i=t.length,r=Xu(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ux,r[o])}function Pb(s,t,e){let n=this.cache,i=t.length,r=Xu(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),We(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=qu(cx):o=dx;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function Ib(s,t,e){let n=this.cache,i=t.length,r=Xu(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||hx,r[o])}function Lb(s){switch(s){case 5126:return fb;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return xb;case 35675:return _b;case 35676:return vb;case 5124:case 35670:return yb;case 35667:case 35671:return Mb;case 35668:case 35672:return Sb;case 35669:case 35673:return bb;case 5125:return wb;case 36294:return Tb;case 36295:return Ab;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Ib}}function Xg(s,t){s.seq.push(t),s.map[t.id]=t}function Db(s,t,e){let n=s.name,i=n.length;for(Sp.lastIndex=0;;){let r=Sp.exec(n),o=Sp.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Xg(e,c===void 0?new wp(a,s,t):new Tp(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Ap(a),Xg(e,u)),e=u}}}function qg(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}function Fb(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Ob(s){le._getMatrix(Yg,le.workingColorSpace,s);let t=`mat3( ${Yg.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case Xr:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return At("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Zg(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Fb(s.getShaderSource(t),a)}else return r}function Bb(s,t){let e=Ob(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function kb(s,t){let e=zb[t];return e===void 0?(At("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Gb(){le.getLuminanceCoefficients(Wu);let s=Wu.x.toFixed(4),t=Wu.y.toFixed(4),e=Wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ac).join(`
`)}function Vb(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wb(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ac(s){return s!==""}function $g(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Jg(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Ep(s){return s.replace(Xb,qb)}function qb(s,t){let e=re[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ep(e)}function Kg(s){return s.replace(Yb,Zb)}function Zb(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qg(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jb(s){return $b[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Qb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Kb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}function tw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":jb[s.combine]||"ENVMAP_BLENDING_NONE"}function ew(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Jb(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Qb(e),u=tw(e),d=Hb(e),p=Vb(r),f=i.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ac).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ac).join(`
`),m.length>0&&(m+=`
`)):(x=[Qg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ac).join(`
`),m=[Qg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?re.tonemapping_pars_fragment:"",e.toneMapping!==Fn?kb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,Bb("linearToOutputTexel",e.outputColorSpace),Gb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ac).join(`
`)),o=Ep(o),o=$g(o,e),o=Jg(o,e),a=Ep(a),a=$g(a,e),a=Jg(a,e),o=Kg(o),a=Kg(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+x+o,y=g+m+a,M=qg(i,i.VERTEX_SHADER,_),b=qg(i,i.FRAGMENT_SHADER,y);i.attachShader(f,M),i.attachShader(f,b),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function w(A){if(s.debug.checkShaderErrors){let R=i.getProgramInfoLog(f)||"",D=i.getShaderInfoLog(M)||"",z=i.getShaderInfoLog(b)||"",N=R.trim(),O=D.trim(),W=z.trim(),H=!0,st=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,M,b);else{let X=Zg(i,M,"vertex"),Z=Zg(i,b,"fragment");Gt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+X+`
`+Z)}else N!==""?At("WebGLProgram: Program Info Log:",N):(O===""||W==="")&&(st=!1);st&&(A.diagnostics={runnable:H,programLog:N,vertexShader:{log:O,prefix:x},fragmentShader:{log:W,prefix:m}})}i.deleteShader(M),i.deleteShader(b),v=new No(i,f),S=Wb(i,f)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(f,Nb)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ub++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=M,this.fragmentShader=b,this}function iw(s){return s===Xi||s===Lo||s===Do}function sw(s,t,e,n,i,r){let o=new Zs,a=new Cp,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,S,C,A,R,D){let z=A.fog,N=R.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,H=t.get(v.envMap||O,W),st=d[v.type],X=n.precision;v.precision!==null&&(X=n.getMaxPrecision(v.precision),X!==v.precision&&At("WebGLProgram.getParameters:",v.precision,"not supported, using",X,"instead."));let Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,nt=Z!==void 0?Z.length:0,Et=0;N.morphAttributes.position!==void 0&&(Et=1),N.morphAttributes.normal!==void 0&&(Et=2),N.morphAttributes.color!==void 0&&(Et=3);let ot,G,lt,yt;if(st){let Pt=oi[st];ot=Pt.vertexShader,G=Pt.fragmentShader}else{ot=v.vertexShader,G=v.fragmentShader;let Pt=a.getVertexShaderStage(v),Me=a.getFragmentShaderStage(v);a.update(v,Pt,Me),lt=Pt.id,yt=Me.id}let kt=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Ht=R.isInstancedMesh===!0,ye=R.isBatchedMesh===!0,It=!!v.map,ie=!!v.matcap,ce=!!H,it=ce&&H.isPMREMTexture===!0,gt=!!v.aoMap,ft=!!v.lightMap,Nt=!!v.bumpMap&&v.wireframe===!1,pt=!!v.normalMap,te=!!v.displacementMap,Bt=!!v.emissiveMap,oe=!!v.metalnessMap,ne=!!v.roughnessMap,k=v.anisotropy>0,I=v.clearcoat>0,$=v.diffuseRoughness>0,ht=v.dispersion>0,Wt=v.retroreflectivity>0,rt=v.iridescence>0,Yt=v.sheen>0,Rt=v.transmission>0,Dt=k&&!!v.anisotropyMap,P=I&&!!v.clearcoatMap,T=I&&!!v.clearcoatNormalMap,B=I&&!!v.clearcoatRoughnessMap,at=$&&!!v.diffuseRoughnessMap,j=rt&&!!v.iridescenceMap,dt=rt&&!!v.iridescenceThicknessMap,xt=Yt&&!!v.sheenColorMap,K=Yt&&!!v.sheenRoughnessMap,Q=!!v.specularMap,Mt=!!v.specularColorMap,U=!!v.specularIntensityMap,tt=Rt&&!!v.transmissionMap,J=Rt&&!!v.thicknessMap,St=!!v.gradientMap,mt=!!v.alphaMap,_t=v.alphaTest>0,Xt=!!v.alphaHash,ae=!!v.extensions,ut=Fn;v.toneMapped&&(kt===null||kt.isXRRenderTarget===!0)&&(ut=s.toneMapping);let qt=it?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,se={shaderID:st,shaderType:v.type,shaderName:v.name,vertexShader:ot,fragmentShader:G,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:yt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:X,batching:ye,batchingColor:ye&&R._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&R.instanceColor!==null,instancingMorph:Ht&&R.morphTexture!==null,outputColorSpace:kt===null?s.outputColorSpace:kt.isXRRenderTarget===!0?kt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:It,matcap:ie,envMap:ce,envMapMode:ce&&H.mapping,envMapPMREM:it,envMapMaxLod:it?qt.length-1:null,envMapSize:it?qt[0].width:null,aoMap:gt,lightMap:ft,bumpMap:Nt,normalMap:pt,displacementMap:te,emissiveMap:Bt,normalMapObjectSpace:pt&&v.normalMapType===tp,normalMapTangentSpace:pt&&v.normalMapType===vi,packedNormalMap:pt&&v.normalMapType===vi&&iw(v.normalMap.format),metalnessMap:oe,roughnessMap:ne,anisotropy:k,anisotropyMap:Dt,clearcoat:I,clearcoatMap:P,clearcoatNormalMap:T,clearcoatRoughnessMap:B,diffuseRoughness:$,diffuseRoughnessMap:at,dispersion:ht,retroreflection:Wt,iridescence:rt,iridescenceMap:j,iridescenceThicknessMap:dt,sheen:Yt,sheenColorMap:xt,sheenRoughnessMap:K,specularMap:Q,specularColorMap:Mt,specularIntensityMap:U,transmission:Rt,transmissionMap:tt,thicknessMap:J,gradientMap:St,opaque:v.transparent===!1&&v.blending===or&&v.alphaToCoverage===!1,alphaMap:mt,alphaTest:_t,alphaHash:Xt,combine:v.combine,mapUv:It&&p(v.map.channel),aoMapUv:gt&&p(v.aoMap.channel),lightMapUv:ft&&p(v.lightMap.channel),bumpMapUv:Nt&&p(v.bumpMap.channel),normalMapUv:pt&&p(v.normalMap.channel),displacementMapUv:te&&p(v.displacementMap.channel),emissiveMapUv:Bt&&p(v.emissiveMap.channel),metalnessMapUv:oe&&p(v.metalnessMap.channel),roughnessMapUv:ne&&p(v.roughnessMap.channel),anisotropyMapUv:Dt&&p(v.anisotropyMap.channel),clearcoatMapUv:P&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:T&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:at&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:j&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:K&&p(v.sheenRoughnessMap.channel),specularMapUv:Q&&p(v.specularMap.channel),specularColorMapUv:Mt&&p(v.specularColorMap.channel),specularIntensityMapUv:U&&p(v.specularIntensityMap.channel),transmissionMapUv:tt&&p(v.transmissionMap.channel),thicknessMapUv:J&&p(v.thicknessMap.channel),alphaMapUv:mt&&p(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(pt||k),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!N.attributes.uv&&(It||mt),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&pt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Tt,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Et,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(Pt=>Pt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:It&&v.map.isVideoTexture===!0&&le.getTransfer(v.map.colorSpace)===ge,decodeVideoTextureEmissive:Bt&&v.emissiveMap.isVideoTexture===!0&&le.getTransfer(v.emissiveMap.colorSpace)===ge,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Un,flipSided:v.side===cn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ae&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&v.extensions.multiDraw===!0||ye)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function x(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)S.push(C),S.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(m(S,v),g(S,v),S.push(s.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function m(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function g(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function _(v){let S=d[v.type],C;if(S){let A=oi[S];C=Mi.clone(A.uniforms)}else C=v.uniforms;return C}function y(v,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new ew(s,S,v,i),c.push(C),h.set(S,C)),C}function M(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function w(){a.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:_,acquireProgram:y,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:w}}function rw(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function ow(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function jg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function tx(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,f,x,m,g){let _=s[t];return _===void 0?(_={id:d.id,object:d,geometry:p,material:f,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},s[t]=_):(_.id=d.id,_.object=d,_.geometry=p,_.material=f,_.materialVariant=o(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=m,_.group=g),t++,_}function l(d,p,f,x,m,g,_){_.reversedDepth===!0&&(m=-m);let y=a(d,p,f,x,m,g);f.transmission>0?n.push(y):f.transparent===!0?i.push(y):e.push(y)}function c(d,p,f,x,m,g){let _=a(d,p,f,x,m,g);f.transmission>0?n.unshift(_):f.transparent===!0?i.unshift(_):e.unshift(_)}function h(d,p){e.length>1&&e.sort(d||ow),n.length>1&&n.sort(p||jg),i.length>1&&i.sort(p||jg)}function u(){for(let d=t,p=s.length;d<p;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function aw(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new tx,s.set(n,[o])):i>=r.length?(o=new tx,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function lw(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new ct};break;case"SpotLight":e={position:new L,direction:new L,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function cw(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}function uw(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function dw(s){let t=new lw,e=cw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new Vt,o=new Vt;function a(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,f=0,x=0,m=0,g=0,_=0,y=0,M=0,b=0,w=0,v=0,S=0,C=0,A=0;c.sort(uw);for(let D=0,z=c.length;D<z;D++){let N=c[D],O=N.color,W=N.intensity,H=N.distance,st=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Xi?st=N.shadow.map.texture:st=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=O.r*W,u+=O.g*W,d+=O.b*W;else if(N.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(N.sh.coefficients[X],W);A++}else if(N.isSunLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,nt=e.get(N);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[f]=nt,n.sunShadowMap[f]=st;let Et=Z.getViewportCount();for(let ot=0;ot<Et;ot++)n.sunShadowMatrix[x+ot]=Z.getMatrix(ot),n.sunShadowCascade[x+ot]=Z._cascadeData[ot];x+=Et,f++}n.sun[p]=X,p++}else if(N.isDirectionalLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,nt=e.get(N);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,n.directionalShadow[m]=nt,n.directionalShadowMap[m]=st,n.directionalShadowMatrix[m]=N.shadow.matrix,b++}n.directional[m]=X,m++}else if(N.isSpotLight){let X=t.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(O).multiplyScalar(W),X.distance=H,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,n.spot[_]=X;let Z=N.shadow;if(N.map&&(n.spotLightMap[S]=N.map,S++,Z.updateMatrices(N),N.castShadow&&C++),n.spotLightMatrix[_]=Z.matrix,N.castShadow){let nt=e.get(N);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,n.spotShadow[_]=nt,n.spotShadowMap[_]=st,v++}_++}else if(N.isRectAreaLight){let X=t.get(N);X.color.copy(O).multiplyScalar(W),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),n.rectArea[y]=X,y++}else if(N.isPointLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){let Z=N.shadow,nt=e.get(N);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,nt.shadowCameraNear=Z.camera.near,nt.shadowCameraFar=Z.camera.far,n.pointShadow[g]=nt,n.pointShadowMap[g]=st,n.pointShadowMatrix[g]=N.shadow.matrix,w++}n.point[g]=X,g++}else if(N.isHemisphereLight){let X=t.get(N);X.skyColor.copy(N.color).multiplyScalar(W),X.groundColor.copy(N.groundColor).multiplyScalar(W),n.hemi[M]=X,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.sunLength!==p||R.directionalLength!==m||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==y||R.hemiLength!==M||R.numSunShadows!==f||R.numDirectionalShadows!==b||R.numPointShadows!==w||R.numSpotShadows!==v||R.numSpotMaps!==S||R.numLightProbes!==A)&&(n.sun.length=p,n.directional.length=m,n.spot.length=_,n.rectArea.length=y,n.point.length=g,n.hemi.length=M,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+S-C,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,R.sunLength=p,R.directionalLength=m,R.pointLength=g,R.spotLength=_,R.rectAreaLength=y,R.hemiLength=M,R.numSunShadows=f,R.numDirectionalShadows=b,R.numPointShadows=w,R.numSpotShadows=v,R.numSpotMaps=S,R.numLightProbes=A,n.version=hw++)}function l(c,h){let u=0,d=0,p=0,f=0,x=0,m=0,g=h.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let M=c[_];if(M.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),u++}else if(M.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),d++}else if(M.isSpotLight){let b=n.spot[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let b=n.point[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),p++}else if(M.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function ex(s){let t=new dw(s),e=[],n=[],i=[];function r(u){h.camera=u,e.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function fw(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new ex(s),t.set(i,[a])):r>=o.length?(a=new ex(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function _w(s,t,e){let n=new di,i=new et,r=new et,o=new de,a=new uo,l=new fo,c={},h=e.maxTextureSize,u={[Wi]:cn,[cn]:Wi,[Un]:Un},d=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:pw,fragmentShader:mw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Zt;f.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new fe(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let g=this.type;this.render=function(w,v,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Tf&&(At("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ms);let C=s.getRenderTarget(),A=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),D=s.state;D.setBlending(mi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let z=g!==this.type;z&&v.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(O=>O.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,O=w.length;N<O;N++){let W=w[N],H=W.shadow;if(H===void 0){At("WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let st=H.getFrameExtents();i.multiply(st),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,H.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===rr){if(W.isPointLight){At("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ee(i.x,i.y,{format:Xi,type:He,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),H.map.texture.name=W.name+".shadowMap",H.map.depthTexture=new Vn(i.x,i.y,on),H.map.depthTexture.name=W.name+".shadowMapDepth",H.map.depthTexture.format=ui,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ne,H.map.depthTexture.magFilter=Ne}else W.isPointLight?(H.map=new Uo(i.x),H.map.depthTexture=new eo(i.x,Mn)):(H.map=new Ee(i.x,i.y),H.map.depthTexture=new Vn(i.x,i.y,Mn)),H.map.depthTexture.name=W.name+".shadowMap",H.map.depthTexture.format=ui,this.type===ms?(H.map.depthTexture.compareFunction=X?Bu:Ou,H.map.depthTexture.minFilter=Ae,H.map.depthTexture.magFilter=Ae):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ne,H.map.depthTexture.magFilter=Ne);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);let Z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();W.isPointLight!==!0&&H.updateMatrices(W,S);let nt=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let Et=0;Et<Z;Et++){let ot=H.getCamera(Et);if(W.isPointLight){let G=H.camera,lt=H.matrix,yt=W.distance||G.far;yt!==G.far&&(G.far=yt,G.updateProjectionMatrix()),oc.setFromMatrixPosition(W.matrixWorld),G.position.copy(oc),bp.copy(G.position),bp.add(gw[Et]),G.up.copy(xw[Et]),G.lookAt(bp),G.updateMatrixWorld(),lt.makeTranslation(-oc.x,-oc.y,-oc.z),nx.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),H._frustum.setFromProjectionMatrix(nx,G.coordinateSystem,G.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,Et),s.clear();else{Et===0&&(s.setRenderTarget(H.map),s.clear());let G=H.getViewport(Et);o.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),D.viewport(o)}n=H.getFrustum(Et),M(v,S,ot,W,nt,this.type)}H.isPointLightShadow!==!0&&this.type===rr&&_(H,S),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(C,A,R)};function _(w,v){let S=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ee(i.x,i.y,{format:Xi,type:He}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(v,null,S,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(v,null,S,p,x,null)}function y(w,v,S,C){let A=null,R=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)A=R;else if(A=S.isPointLight===!0?l:a,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let D=A.uuid,z=v.uuid,N=c[D];N===void 0&&(N={},c[D]=N);let O=N[z];O===void 0&&(O=A.clone(),N[z]=O,v.addEventListener("dispose",b)),A=O}if(A.visible=v.visible,A.wireframe=v.wireframe,C===rr?A.side=v.shadowSide!==null?v.shadowSide:v.side:A.side=v.shadowSide!==null?v.shadowSide:u[v.side],A.alphaMap=v.alphaMap,A.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,A.map=v.map,A.clipShadows=v.clipShadows,A.clippingPlanes=v.clippingPlanes,A.clipIntersection=v.clipIntersection,A.displacementMap=v.displacementMap,A.displacementScale=v.displacementScale,A.displacementBias=v.displacementBias,A.wireframeLinewidth=v.wireframeLinewidth,A.linewidth=v.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=s.properties.get(A);D.light=S}return A}function M(w,v,S,C,A,R){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===rr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let N=t.update(w),O=w.material;if(Array.isArray(O)){let W=N.groups;for(let H=0,st=W.length;H<st;H++){let X=W[H],Z=O[X.materialIndex];if(Z&&Z.visible){let nt=y(w,Z,C,R);w.onBeforeShadow(s,w,v,S,N,nt,X),s.renderBufferDirect(S,null,N,nt,w,X),w.onAfterShadow(s,w,v,S,N,nt,X)}}}else if(O.visible){let W=y(w,O,C,R);w.onBeforeShadow(s,w,v,S,N,W,null),s.renderBufferDirect(S,null,N,W,w,null),w.onAfterShadow(s,w,v,S,N,W,null)}}let z=w.children;for(let N=0,O=z.length;N<O;N++)M(z[N],v,S,C,A,R)}function b(w){w.target.removeEventListener("dispose",b);for(let S in c){let C=c[S],A=w.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function vw(s,t){function e(){let U=!1,tt=new de,J=null,St=new de(0,0,0,0);return{setMask:function(mt){J!==mt&&!U&&(s.colorMask(mt,mt,mt,mt),J=mt)},setLocked:function(mt){U=mt},setClear:function(mt,_t,Xt,ae,ut){ut===!0&&(mt*=ae,_t*=ae,Xt*=ae),tt.set(mt,_t,Xt,ae),St.equals(tt)===!1&&(s.clearColor(mt,_t,Xt,ae),St.copy(tt))},reset:function(){U=!1,J=null,St.set(-1,0,0,0)}}}function n(){let U=!1,tt=!1,J=null,St=null,mt=null;return{setReversed:function(_t){if(tt!==_t){let Xt=t.get("EXT_clip_control");_t?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),tt=_t;let ae=mt;mt=null,this.setClear(ae)}},getReversed:function(){return tt},setTest:function(_t){_t?Tt(s.DEPTH_TEST):Ht(s.DEPTH_TEST)},setMask:function(_t){J!==_t&&!U&&(s.depthMask(_t),J=_t)},setFunc:function(_t){if(tt&&(_t=Tg[_t]),St!==_t){switch(_t){case ua:s.depthFunc(s.NEVER);break;case da:s.depthFunc(s.ALWAYS);break;case fa:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case pa:s.depthFunc(s.EQUAL);break;case ma:s.depthFunc(s.GEQUAL);break;case ga:s.depthFunc(s.GREATER);break;case xa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}St=_t}},setLocked:function(_t){U=_t},setClear:function(_t){mt!==_t&&(mt=_t,tt&&(_t=1-_t),s.clearDepth(_t))},reset:function(){U=!1,J=null,St=null,mt=null,tt=!1}}}function i(){let U=!1,tt=null,J=null,St=null,mt=null,_t=null,Xt=null,ae=null,ut=null;return{setTest:function(qt){U||(qt?Tt(s.STENCIL_TEST):Ht(s.STENCIL_TEST))},setMask:function(qt){tt!==qt&&!U&&(s.stencilMask(qt),tt=qt)},setFunc:function(qt,se,Pt){(J!==qt||St!==se||mt!==Pt)&&(s.stencilFunc(qt,se,Pt),J=qt,St=se,mt=Pt)},setOp:function(qt,se,Pt){(_t!==qt||Xt!==se||ae!==Pt)&&(s.stencilOp(qt,se,Pt),_t=qt,Xt=se,ae=Pt)},setLocked:function(qt){U=qt},setClear:function(qt){ut!==qt&&(s.clearStencil(qt),ut=qt)},reset:function(){U=!1,tt=null,J=null,St=null,mt=null,_t=null,Xt=null,ae=null,ut=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},u={},d={},p=new WeakMap,f=[],x=null,m=!1,g=null,_=null,y=null,M=null,b=null,w=null,v=null,S=new ct(0,0,0),C=0,A=!1,R=null,D=null,z=null,N=null,O=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,st=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=st>=1):X.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=st>=2);let Z=null,nt={},Et=s.getParameter(s.SCISSOR_BOX),ot=s.getParameter(s.VIEWPORT),G=new de().fromArray(Et),lt=new de().fromArray(ot);function yt(U,tt,J,St){let mt=new Uint8Array(4),_t=s.createTexture();s.bindTexture(U,_t),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xt=0;Xt<J;Xt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(tt,0,s.RGBA,1,1,St,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(tt+Xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return _t}let kt={};kt[s.TEXTURE_2D]=yt(s.TEXTURE_2D,s.TEXTURE_2D,1),kt[s.TEXTURE_CUBE_MAP]=yt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),kt[s.TEXTURE_2D_ARRAY]=yt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),kt[s.TEXTURE_3D]=yt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Tt(s.DEPTH_TEST),o.setFunc(Ws),Nt(!1),pt(wu),Tt(s.CULL_FACE),gt(mi);function Tt(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Ht(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function ye(U,tt){return d[U]!==tt?(s.bindFramebuffer(U,tt),d[U]=tt,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=tt),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=tt),!0):!1}function It(U,tt){let J=f,St=!1;if(U){J=p.get(tt),J===void 0&&(J=[],p.set(tt,J));let mt=U.textures;if(J.length!==mt.length||J[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Xt=mt.length;_t<Xt;_t++)J[_t]=s.COLOR_ATTACHMENT0+_t;J.length=mt.length,St=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,St=!0);St&&s.drawBuffers(J)}function ie(U){return x!==U?(s.useProgram(U),x=U,!0):!1}let ce={[gs]:s.FUNC_ADD,[Ef]:s.FUNC_SUBTRACT,[Cf]:s.FUNC_REVERSE_SUBTRACT};ce[Rf]=s.MIN,ce[Pf]=s.MAX;let it={[If]:s.ZERO,[Lf]:s.ONE,[Df]:s.SRC_COLOR,[Eu]:s.SRC_ALPHA,[zf]:s.SRC_ALPHA_SATURATE,[Of]:s.DST_COLOR,[Uf]:s.DST_ALPHA,[Nf]:s.ONE_MINUS_SRC_COLOR,[Cu]:s.ONE_MINUS_SRC_ALPHA,[Bf]:s.ONE_MINUS_DST_COLOR,[Ff]:s.ONE_MINUS_DST_ALPHA,[kf]:s.CONSTANT_COLOR,[Gf]:s.ONE_MINUS_CONSTANT_COLOR,[Hf]:s.CONSTANT_ALPHA,[Vf]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(U,tt,J,St,mt,_t,Xt,ae,ut,qt){if(U===mi){m===!0&&(Ht(s.BLEND),m=!1);return}if(m===!1&&(Tt(s.BLEND),m=!0),U!==Af){if(U!==g||qt!==A){if((_!==gs||b!==gs)&&(s.blendEquation(s.FUNC_ADD),_=gs,b=gs),qt)switch(U){case or:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mo:s.blendFunc(s.ONE,s.ONE);break;case Tu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Au:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",U);break}else switch(U){case or:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Tu:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Au:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",U);break}y=null,M=null,w=null,v=null,S.set(0,0,0),C=0,g=U,A=qt}return}mt=mt||tt,_t=_t||J,Xt=Xt||St,(tt!==_||mt!==b)&&(s.blendEquationSeparate(ce[tt],ce[mt]),_=tt,b=mt),(J!==y||St!==M||_t!==w||Xt!==v)&&(s.blendFuncSeparate(it[J],it[St],it[_t],it[Xt]),y=J,M=St,w=_t,v=Xt),(ae.equals(S)===!1||ut!==C)&&(s.blendColor(ae.r,ae.g,ae.b,ut),S.copy(ae),C=ut),g=U,A=!1}function ft(U,tt){U.side===Un?Ht(s.CULL_FACE):Tt(s.CULL_FACE);let J=U.side===cn;tt&&(J=!J),Nt(J),U.blending===or&&U.transparent===!1?gt(mi):gt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let St=U.stencilWrite;a.setTest(St),St&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Bt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Tt(s.SAMPLE_ALPHA_TO_COVERAGE):Ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(U){R!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),R=U)}function pt(U){U!==bf?(Tt(s.CULL_FACE),U!==D&&(U===wu?s.cullFace(s.BACK):U===wf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ht(s.CULL_FACE),D=U}function te(U){U!==z&&(H&&s.lineWidth(U),z=U)}function Bt(U,tt,J){U?(Tt(s.POLYGON_OFFSET_FILL),(N!==tt||O!==J)&&(N=tt,O=J,o.getReversed()&&(tt=-tt,J=-J),s.polygonOffset(tt,J))):Ht(s.POLYGON_OFFSET_FILL)}function oe(U){U?Tt(s.SCISSOR_TEST):Ht(s.SCISSOR_TEST)}function ne(U){U===void 0&&(U=s.TEXTURE0+W-1),Z!==U&&(s.activeTexture(U),Z=U)}function k(U,tt,J){J===void 0&&(Z===null?J=s.TEXTURE0+W-1:J=Z);let St=nt[J];St===void 0&&(St={type:void 0,texture:void 0},nt[J]=St),(St.type!==U||St.texture!==tt)&&(Z!==J&&(s.activeTexture(J),Z=J),s.bindTexture(U,tt||kt[U]),St.type=U,St.texture=tt)}function I(){let U=nt[Z];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{s.compressedTexImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function ht(){try{s.compressedTexImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function Wt(){try{s.texSubImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function rt(){try{s.texSubImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function Yt(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function Rt(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function Dt(){try{s.texStorage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function P(){try{s.texStorage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function T(){try{s.texImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function B(){try{s.texImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function at(U){return u[U]!==void 0?u[U]:s.getParameter(U)}function j(U,tt){u[U]!==tt&&(s.pixelStorei(U,tt),u[U]=tt)}function dt(U){G.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),G.copy(U))}function xt(U){lt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),lt.copy(U))}function K(U,tt){let J=c.get(tt);J===void 0&&(J=new WeakMap,c.set(tt,J));let St=J.get(U);St===void 0&&(St=s.getUniformBlockIndex(tt,U.name),s.uniformBlockBinding(tt,St,St),J.set(U,St))}function Q(U,tt,J){let mt=c.get(tt).get(U);l[mt]!==J&&(s.bindBufferBase(s.UNIFORM_BUFFER,mt,J),l[mt]=J)}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,nt={},d={},l={},p=new WeakMap,f=[],x=null,m=!1,g=null,_=null,y=null,M=null,b=null,w=null,v=null,S=new ct(0,0,0),C=0,A=!1,R=null,D=null,z=null,N=null,O=null,G.set(0,0,s.canvas.width,s.canvas.height),lt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Tt,disable:Ht,bindFramebuffer:ye,drawBuffers:It,useProgram:ie,setBlending:gt,setMaterial:ft,setFlipSided:Nt,setCullFace:pt,setLineWidth:te,setPolygonOffset:Bt,setScissorTest:oe,activeTexture:ne,bindTexture:k,unbindTexture:I,compressedTexImage2D:$,compressedTexImage3D:ht,texImage2D:T,texImage3D:B,pixelStorei:j,getParameter:at,updateUBOMapping:K,uniformBlockBinding:Q,texStorage2D:Dt,texStorage3D:P,texSubImage2D:Wt,texSubImage3D:rt,compressedTexSubImage2D:Yt,compressedTexSubImage3D:Rt,scissor:dt,viewport:xt,reset:Mt}}function yw(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap,u=new Set,d,p=new WeakMap,f=new Set,x=new FinalizationRegistry(P=>f.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return m?new OffscreenCanvas(P,T):qr("canvas")}function _(P,T,B){let at=1,j=Dt(P);if((j.width>B||j.height>B)&&(at=B/Math.max(j.width,j.height)),at<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let dt=Math.floor(at*j.width),xt=Math.floor(at*j.height);d===void 0&&(d=g(dt,xt));let K=T?g(dt,xt):d;return K.width=dt,K.height=xt,K.getContext("2d").drawImage(P,0,0,dt,xt),At("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+dt+"x"+xt+")."),K}else return"data"in P&&At("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function y(P){return P.generateMipmaps}function M(P){s.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(P,T,B,at,j,dt=!1){if(P!==null){if(s[P]!==void 0)return s[P];At("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let xt;at&&(xt=t.get("EXT_texture_norm16"),xt||At("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=T;if(T===s.RED&&(B===s.FLOAT&&(K=s.R32F),B===s.HALF_FLOAT&&(K=s.R16F),B===s.UNSIGNED_BYTE&&(K=s.R8),B===s.UNSIGNED_SHORT&&xt&&(K=xt.R16_EXT),B===s.SHORT&&xt&&(K=xt.R16_SNORM_EXT)),T===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.R8UI),B===s.UNSIGNED_SHORT&&(K=s.R16UI),B===s.UNSIGNED_INT&&(K=s.R32UI),B===s.BYTE&&(K=s.R8I),B===s.SHORT&&(K=s.R16I),B===s.INT&&(K=s.R32I)),T===s.RG&&(B===s.FLOAT&&(K=s.RG32F),B===s.HALF_FLOAT&&(K=s.RG16F),B===s.UNSIGNED_BYTE&&(K=s.RG8),B===s.UNSIGNED_SHORT&&xt&&(K=xt.RG16_EXT),B===s.SHORT&&xt&&(K=xt.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RG8UI),B===s.UNSIGNED_SHORT&&(K=s.RG16UI),B===s.UNSIGNED_INT&&(K=s.RG32UI),B===s.BYTE&&(K=s.RG8I),B===s.SHORT&&(K=s.RG16I),B===s.INT&&(K=s.RG32I)),T===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGB8UI),B===s.UNSIGNED_SHORT&&(K=s.RGB16UI),B===s.UNSIGNED_INT&&(K=s.RGB32UI),B===s.BYTE&&(K=s.RGB8I),B===s.SHORT&&(K=s.RGB16I),B===s.INT&&(K=s.RGB32I)),T===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),B===s.UNSIGNED_INT&&(K=s.RGBA32UI),B===s.BYTE&&(K=s.RGBA8I),B===s.SHORT&&(K=s.RGBA16I),B===s.INT&&(K=s.RGBA32I)),T===s.RGB&&(B===s.UNSIGNED_SHORT&&xt&&(K=xt.RGB16_EXT),B===s.SHORT&&xt&&(K=xt.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),T===s.RGBA){let Q=dt?Xr:le.getTransfer(j);B===s.FLOAT&&(K=s.RGBA32F),B===s.HALF_FLOAT&&(K=s.RGBA16F),B===s.UNSIGNED_BYTE&&(K=Q===ge?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&xt&&(K=xt.RGBA16_EXT),B===s.SHORT&&xt&&(K=xt.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(P,T){let B;return P?T===null||T===Mn||T===bs?B=s.DEPTH24_STENCIL8:T===on?B=s.DEPTH32F_STENCIL8:T===lr&&(B=s.DEPTH24_STENCIL8,At("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Mn||T===bs?B=s.DEPTH_COMPONENT24:T===on?B=s.DEPTH_COMPONENT32F:T===lr&&(B=s.DEPTH_COMPONENT16),B}function S(P,T){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ne&&P.minFilter!==Ae?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function C(P){let T=new WeakRef(P);n.get(P).__ref=T,f.add(T),x.register(P,T,T)}function A(P){let T=n.get(P).__ref;T!==void 0&&(f.delete(T),x.unregister(T))}function R(P){z(P.target)}function D(P){N(P.target)}function z(P){P.removeEventListener("dispose",R),A(P),W(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&u.delete(P)}function N(P){P.removeEventListener("dispose",D),A(P),st(P)}function O(){for(let P of f){let T=P.deref();T!==void 0&&(T.isRenderTarget===!0?N(T):z(T))}f.clear(),u.clear()}function W(P){let T=n.get(P);if(T.__webglInit===void 0)return;let B=P.source,at=p.get(B);if(at){let j=at[T.__cacheKey];j.usedTimes--,j.usedTimes===0&&H(P),Object.keys(at).length===0&&p.delete(B)}n.remove(P)}function H(P){let T=n.get(P);s.deleteTexture(T.__webglTexture);let B=P.source,at=p.get(B);delete at[T.__cacheKey],o.memory.textures--}function st(P){let T=n.get(P);T.__depthDisposeCallback&&T.__depthDisposeCallback();let B=P.depthTexture;if(B&&B.renderTarget===P&&z(B),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let dt=0;dt<T.__webglFramebuffer[j].length;dt++)s.deleteFramebuffer(T.__webglFramebuffer[j][dt]);else s.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)s.deleteFramebuffer(T.__webglFramebuffer[j]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let at=P.textures;for(let j=0,dt=at.length;j<dt;j++){let xt=n.get(at[j]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(at[j])}n.remove(P)}let X=0;function Z(){X=0}function nt(){return X}function Et(P){X=P}function ot(){let P=X;return P>=i.maxTextures&&At("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),X+=1,P}function G(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.mipmapsAutoUpdate),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function lt(P,T){let B=n.get(P);if(P.isVideoTexture&&Yt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&B.__version!==P.version){let at=P.image;if(at===null)At("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)At("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(B,P,T);return}}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+T)}function yt(P,T){let B=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){ft(B,P,T);return}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+T)}function kt(P,T){let B=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){ft(B,P,T);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+T)}function Tt(P,T){let B=n.get(P);if(P.version>0&&B.__version!==P.version){Nt(B,P,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+T)}let Ht={[kr]:s.REPEAT,[mn]:s.CLAMP_TO_EDGE,[Gr]:s.MIRRORED_REPEAT},ye={[Ne]:s.NEAREST,[Ru]:s.NEAREST_MIPMAP_NEAREST,[ar]:s.NEAREST_MIPMAP_LINEAR,[Ae]:s.LINEAR,[Ao]:s.LINEAR_MIPMAP_NEAREST,[qn]:s.LINEAR_MIPMAP_LINEAR},It={[np]:s.NEVER,[zu]:s.ALWAYS,[ip]:s.LESS,[Ou]:s.LEQUAL,[sp]:s.EQUAL,[Bu]:s.GEQUAL,[rp]:s.GREATER,[op]:s.NOTEQUAL};function ie(P,T){if(T.type===on&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ae||T.magFilter===Ao||T.magFilter===ar||T.magFilter===qn||T.minFilter===Ae||T.minFilter===Ao||T.minFilter===ar||T.minFilter===qn)&&At("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Ht[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Ht[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Ht[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ye[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ye[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,It[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ne||T.minFilter!==ar&&T.minFilter!==qn||T.type===on&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ce(P,T){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",R),C(T));let at=T.source,j=p.get(at);j===void 0&&(j={},p.set(at,j));let dt=G(T);if(dt!==P.__cacheKey){j[dt]===void 0&&(j[dt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[dt].usedTimes++;let xt=j[P.__cacheKey];xt!==void 0&&(j[P.__cacheKey].usedTimes--,xt.usedTimes===0&&H(T)),P.__cacheKey=dt,P.__webglTexture=j[dt].texture}return B}function it(P,T,B){return Math.floor(Math.floor(P/B)/T)}function gt(P,T,B,at){let dt=P.updateRanges;if(dt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,B,at,T.data);else{dt.sort((U,tt)=>U.start-tt.start);let xt=0;for(let U=1;U<dt.length;U++){let tt=dt[xt],J=dt[U],St=tt.start+tt.count,mt=it(J.start,T.width,4),_t=it(tt.start,T.width,4);J.start<=St+1&&mt===_t&&it(J.start+J.count-1,T.width,4)===mt?tt.count=Math.max(tt.count,J.start+J.count-tt.start):(++xt,dt[xt]=J)}dt.length=xt+1;let K=e.getParameter(s.UNPACK_ROW_LENGTH),Q=e.getParameter(s.UNPACK_SKIP_PIXELS),Mt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let U=0,tt=dt.length;U<tt;U++){let J=dt[U],St=Math.floor(J.start/4),mt=Math.ceil(J.count/4),_t=St%T.width,Xt=Math.floor(St/T.width),ae=mt,ut=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(s.UNPACK_SKIP_ROWS,Xt),e.texSubImage2D(s.TEXTURE_2D,0,_t,Xt,ae,ut,B,at,T.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,K),e.pixelStorei(s.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(s.UNPACK_SKIP_ROWS,Mt)}}function ft(P,T,B){let at=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(at=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(at=s.TEXTURE_3D);let j=ce(P,T),dt=T.source;e.bindTexture(at,P.__webglTexture,s.TEXTURE0+B);let xt=n.get(dt);if(dt.version!==xt.__version||j===!0){if(e.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ut=le.getPrimaries(le.workingColorSpace),qt=T.colorSpace===yi?null:le.getPrimaries(T.colorSpace),se=T.colorSpace===yi||ut===qt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,se)}e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let Q=_(T.image,!1,i.maxTextureSize);Q=Rt(T,Q);let Mt=r.convert(T.format,T.colorSpace),U=r.convert(T.type),tt=w(T.internalFormat,Mt,U,T.normalized,T.colorSpace,T.isVideoTexture);ie(at,T);let J,St=T.mipmaps,mt=T.isVideoTexture!==!0,_t=xt.__version===void 0||j===!0,Xt=dt.dataReady,ae=S(T,Q);if(T.isDepthTexture)tt=v(T.format===_i,T.type),_t&&(mt?e.texStorage2D(s.TEXTURE_2D,1,tt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,tt,Q.width,Q.height,0,Mt,U,null));else if(T.isDataTexture)if(St.length>0){mt&&_t&&e.texStorage2D(s.TEXTURE_2D,ae,tt,St[0].width,St[0].height);for(let ut=0,qt=St.length;ut<qt;ut++)J=St[ut],mt?Xt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,J.width,J.height,Mt,U,J.data):e.texImage2D(s.TEXTURE_2D,ut,tt,J.width,J.height,0,Mt,U,J.data);T.generateMipmaps=!1}else mt?(_t&&e.texStorage2D(s.TEXTURE_2D,ae,tt,Q.width,Q.height),Xt&&gt(T,Q,Mt,U)):e.texImage2D(s.TEXTURE_2D,0,tt,Q.width,Q.height,0,Mt,U,Q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){mt&&_t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ae,tt,St[0].width,St[0].height,Q.depth);for(let ut=0,qt=St.length;ut<qt;ut++)if(J=St[ut],T.format!==xn)if(Mt!==null)if(mt){if(Xt)if(T.layerUpdates.size>0){let se=Hu(J.width,J.height,T.format,T.type);for(let Pt of T.layerUpdates){let Me=J.data.subarray(Pt*se/J.data.BYTES_PER_ELEMENT,(Pt+1)*se/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,Pt,J.width,J.height,1,Mt,Me)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,J.width,J.height,Q.depth,Mt,J.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,tt,J.width,J.height,Q.depth,0,J.data,0,0);else At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?Xt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,J.width,J.height,Q.depth,Mt,U,J.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ut,tt,J.width,J.height,Q.depth,0,Mt,U,J.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{mt&&_t&&e.texStorage2D(s.TEXTURE_2D,ae,tt,St[0].width,St[0].height);for(let ut=0,qt=St.length;ut<qt;ut++)J=St[ut],T.format!==xn?Mt!==null?mt?Xt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,J.width,J.height,Mt,J.data):e.compressedTexImage2D(s.TEXTURE_2D,ut,tt,J.width,J.height,0,J.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?Xt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,J.width,J.height,Mt,U,J.data):e.texImage2D(s.TEXTURE_2D,ut,tt,J.width,J.height,0,Mt,U,J.data)}else if(T.isDataArrayTexture)if(mt){if(_t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ae,tt,Q.width,Q.height,Q.depth),Xt)if(T.layerUpdates.size>0){let ut=Hu(Q.width,Q.height,T.format,T.type);for(let qt of T.layerUpdates){let se=Q.data.subarray(qt*ut/Q.data.BYTES_PER_ELEMENT,(qt+1)*ut/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,qt,Q.width,Q.height,1,Mt,U,se)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Mt,U,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,Q.width,Q.height,Q.depth,0,Mt,U,Q.data);else if(T.isData3DTexture)mt?(_t&&e.texStorage3D(s.TEXTURE_3D,ae,tt,Q.width,Q.height,Q.depth),Xt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Mt,U,Q.data)):e.texImage3D(s.TEXTURE_3D,0,tt,Q.width,Q.height,Q.depth,0,Mt,U,Q.data);else if(T.isFramebufferTexture){if(_t)if(mt)e.texStorage2D(s.TEXTURE_2D,ae,tt,Q.width,Q.height);else{let ut=Q.width,qt=Q.height;for(let se=0;se<ae;se++)e.texImage2D(s.TEXTURE_2D,se,tt,ut,qt,0,Mt,U,null),ut>>=1,qt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let ut=s.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),Q.parentNode!==ut){ut.appendChild(Q),u.add(T),ut.onpaint=qt=>{let se=qt.changedElements;for(let Pt of u)se.includes(Pt.image)&&(Pt.needsUpdate=!0)},ut.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Q);else{let se=s.RGBA,Pt=s.RGBA,Me=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,se,Pt,Me,Q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(St.length>0){if(mt&&_t){let ut=Dt(St[0]);e.texStorage2D(s.TEXTURE_2D,ae,tt,ut.width,ut.height)}for(let ut=0,qt=St.length;ut<qt;ut++)J=St[ut],mt?Xt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Mt,U,J):e.texImage2D(s.TEXTURE_2D,ut,tt,Mt,U,J);T.generateMipmaps=!1}else if(mt){if(_t){let ut=Dt(Q);e.texStorage2D(s.TEXTURE_2D,ae,tt,ut.width,ut.height)}Xt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,U,Q)}else e.texImage2D(s.TEXTURE_2D,0,tt,Mt,U,Q);y(T)&&T.mipmapsAutoUpdate===!0&&M(at),xt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Nt(P,T,B){if(T.image.length!==6)return;let at=ce(P,T),j=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+B);let dt=n.get(j);if(j.version!==dt.__version||at===!0){e.activeTexture(s.TEXTURE0+B);let xt=le.getPrimaries(le.workingColorSpace),K=T.colorSpace===yi?null:le.getPrimaries(T.colorSpace),Q=T.colorSpace===yi||xt===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let Mt=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,tt=[];for(let Pt=0;Pt<6;Pt++)!Mt&&!U?tt[Pt]=_(T.image[Pt],!0,i.maxCubemapSize):tt[Pt]=U?T.image[Pt].image:T.image[Pt],tt[Pt]=Rt(T,tt[Pt]);let J=tt[0],St=r.convert(T.format,T.colorSpace),mt=r.convert(T.type),_t=w(T.internalFormat,St,mt,T.normalized,T.colorSpace),Xt=T.isVideoTexture!==!0,ae=dt.__version===void 0||at===!0,ut=j.dataReady,qt=S(T,J);ie(s.TEXTURE_CUBE_MAP,T);let se;if(T.isDepthTexture){if(_t=v(T.format===_i,T.type),ae)if(Xt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,_t,J.width,J.height);else for(let Pt=0;Pt<6;Pt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,_t,J.width,J.height,0,St,mt,null)}else if(Mt){Xt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,qt,_t,J.width,J.height);for(let Pt=0;Pt<6;Pt++){se=tt[Pt].mipmaps;for(let Me=0;Me<se.length;Me++){let Xe=se[Me];T.format!==xn?St!==null?Xt?ut&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Me,0,0,Xe.width,Xe.height,St,Xe.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Me,_t,Xe.width,Xe.height,0,Xe.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Me,0,0,Xe.width,Xe.height,St,mt,Xe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Me,_t,Xe.width,Xe.height,0,St,mt,Xe.data)}}}else{if(se=T.mipmaps,Xt&&ae){se.length>0&&qt++;let Pt=Dt(tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,qt,_t,Pt.width,Pt.height)}for(let Pt=0;Pt<6;Pt++)if(U){Xt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,tt[Pt].width,tt[Pt].height,St,mt,tt[Pt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,_t,tt[Pt].width,tt[Pt].height,0,St,mt,tt[Pt].data);for(let Me=0;Me<se.length;Me++){let $i=se[Me].image[Pt].image;Xt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Me+1,0,0,$i.width,$i.height,St,mt,$i.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Me+1,_t,$i.width,$i.height,0,St,mt,$i.data)}}else{Xt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,St,mt,tt[Pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,_t,St,mt,tt[Pt]);for(let Me=0;Me<se.length;Me++){let Xe=se[Me];Xt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Me+1,0,0,St,mt,Xe.image[Pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Me+1,_t,St,mt,Xe.image[Pt])}}}y(T)&&T.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),dt.__version=j.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function pt(P,T,B,at,j,dt){let xt=r.convert(B.format,B.colorSpace),K=r.convert(B.type),Q=w(B.internalFormat,xt,K,B.normalized,B.colorSpace),Mt=n.get(T),U=n.get(B);if(U.__renderTarget=T,!Mt.__hasExternalTextures){let tt=Math.max(1,T.width>>dt),J=Math.max(1,T.height>>dt);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,dt,Q,tt,J,T.depth,0,xt,K,null):e.texImage2D(j,dt,Q,tt,J,0,xt,K,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),rt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,j,U.__webglTexture,0,Wt(T)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,at,j,U.__webglTexture,dt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function te(P,T,B){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){let at=T.depthTexture,j=at&&at.isDepthTexture?at.type:null,dt=v(T.stencilBuffer,j),xt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;rt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(T),dt,T.width,T.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(T),dt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,dt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,P)}else{let at=T.textures;for(let j=0;j<at.length;j++){let dt=at[j],xt=r.convert(dt.format,dt.colorSpace),K=r.convert(dt.type),Q=w(dt.internalFormat,xt,K,dt.normalized,dt.colorSpace);rt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(T),Q,T.width,T.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(T),Q,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Q,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Bt(P,T,B){let at=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(T.depthTexture);j.__renderTarget=T;let dt=at?T.depthTexture.image[0]:T.depthTexture.image;(!j.__webglTexture||dt.width!==T.width||dt.height!==T.height)&&(dt.width=T.width,dt.height=T.height,T.depthTexture.needsUpdate=!0),at?Tt(T.depthTexture,0):lt(T.depthTexture,0);let xt=j.__webglTexture,K=Wt(T),Q=at?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,Mt=T.depthTexture.format===_i?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===ui)rt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Mt,Q,xt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,Mt,Q,xt,0);else if(T.depthTexture.format===_i)rt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Mt,Q,xt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,Mt,Q,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(P){let T=n.get(P),B=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let at=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),at){let j=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,at.removeEventListener("dispose",j)};at.addEventListener("dispose",j),T.__depthDisposeCallback=j}T.__boundDepthTexture=at}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(B)for(let at=0;at<6;at++)Bt(T.__webglFramebuffer[at],P,at);else P.texture.mipmaps.length>0?Bt(T.__webglFramebuffer[0],P,0):Bt(T.__webglFramebuffer,P,0);else if(B){T.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[at]),T.__webglDepthbuffer[at]===void 0)T.__webglDepthbuffer[at]=s.createRenderbuffer(),te(T.__webglDepthbuffer[at],P,!1);else{let j=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[at];s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,dt)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),te(T.__webglDepthbuffer,P,!1);else{let j=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,dt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(P,T,B){let at=n.get(P);T!==void 0&&pt(at.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&oe(P)}function k(P){let T=P.texture,B=n.get(P),at=n.get(T);P.addEventListener("dispose",D),C(P);let j=P.textures,dt=P.isWebGLCubeRenderTarget===!0,xt=j.length>1;if(xt||(at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture()),at.__version=T.version,o.memory.textures++),dt){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(T.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let Q=0;Q<T.mipmaps.length;Q++)B.__webglFramebuffer[K][Q]=s.createFramebuffer()}else B.__webglFramebuffer[K]=s.createFramebuffer()}else{if(T.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<T.mipmaps.length;K++)B.__webglFramebuffer[K]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(xt)for(let K=0,Q=j.length;K<Q;K++){let Mt=n.get(j[K]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&rt(P)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){let Q=j[K];B.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let Mt=r.convert(Q.format,Q.colorSpace),U=r.convert(Q.type),tt=w(Q.internalFormat,Mt,U,Q.normalized,Q.colorSpace,P.isXRRenderTarget===!0),J=Wt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,J,tt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,B.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),te(B.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture),ie(s.TEXTURE_CUBE_MAP,T);for(let K=0;K<6;K++)if(T.mipmaps.length>0)for(let Q=0;Q<T.mipmaps.length;Q++)pt(B.__webglFramebuffer[K][Q],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else pt(B.__webglFramebuffer[K],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);y(T)?M(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(xt){for(let K=0,Q=j.length;K<Q;K++){let Mt=j[K],U=n.get(Mt),tt=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(tt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,U.__webglTexture),ie(tt,Mt),pt(B.__webglFramebuffer,P,Mt,s.COLOR_ATTACHMENT0+K,tt,0),y(Mt)&&M(tt)}e.unbindTexture()}else{let K=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(K=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,at.__webglTexture),ie(K,T),T.mipmaps.length>0)for(let Q=0;Q<T.mipmaps.length;Q++)pt(B.__webglFramebuffer[Q],P,T,s.COLOR_ATTACHMENT0,K,Q);else pt(B.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,K,0);y(T)?M(K):T.mipmaps.length>0&&s.texParameteri(K,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&oe(P)}function I(P){let T=P.textures;for(let B=0,at=T.length;B<at;B++){let j=T[B];if(y(j)&&j.mipmapsAutoUpdate===!0){let dt=b(P),xt=n.get(j).__webglTexture;e.bindTexture(dt,xt),M(dt),e.unbindTexture()}}}let $=[];function ht(P){if(P.samples>0){if(rt(P)===!1){let T=P.textures,B=P.width,at=P.height,j=s.COLOR_BUFFER_BIT,dt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=n.get(P),K=T.length>1;if(K)for(let Mt=0;Mt<T.length;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Mt=0;Mt<T.length;Mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[Mt]);let U=n.get(T[Mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,U,0)}s.blitFramebuffer(0,0,B,at,0,0,B,at,j,s.NEAREST),l===!0&&($.length=0,$.push(s.COLOR_ATTACHMENT0+Mt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&$.push(dt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let Mt=0;Mt<T.length;Mt++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,xt.__webglColorRenderbuffer[Mt]);let U=n.get(T[Mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,U,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Wt(P){return Math.min(i.maxSamples,P.samples)}function rt(P){let T=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Yt(P){let T=o.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function Rt(P,T){let B=P.colorSpace,at=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==Wr&&B!==yi&&(le.getTransfer(B)===ge?(at!==xn||j!==yn)&&At("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",B)),T}function Dt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=ot,this.resetTextureUnits=Z,this.getTextureUnits=nt,this.setTextureUnits=Et,this.setTexture2D=lt,this.setTexture2DArray=yt,this.setTexture3D=kt,this.setTextureCube=Tt,this.rebindTextures=ne,this.setupRenderTarget=k,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=rt,this.dispose=O}function fx(s,t){function e(n,i=yi){let r,o=le.getTransfer(i);if(n===yn)return s.UNSIGNED_BYTE;if(n===bl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Lu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Du)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pu)return s.BYTE;if(n===Iu)return s.SHORT;if(n===lr)return s.UNSIGNED_SHORT;if(n===Sl)return s.INT;if(n===Mn)return s.UNSIGNED_INT;if(n===on)return s.FLOAT;if(n===He)return s.HALF_FLOAT;if(n===Nu)return s.ALPHA;if(n===Uu)return s.RGB;if(n===xn)return s.RGBA;if(n===ui)return s.DEPTH_COMPONENT;if(n===_i)return s.DEPTH_STENCIL;if(n===Tl)return s.RED;if(n===Eo)return s.RED_INTEGER;if(n===Xi)return s.RG;if(n===Al)return s.RG_INTEGER;if(n===El)return s.RGBA_INTEGER;if(n===Co||n===Ro||n===Po||n===Io)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cl||n===Rl||n===Pl||n===Il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===Lo||n===Ol)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ll||n===Dl)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Nl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ul)return r.COMPRESSED_R11_EAC;if(n===Fl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Lo)return r.COMPRESSED_RG11_EAC;if(n===Ol)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bl||n===zl||n===kl||n===Gl||n===Hl||n===Vl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===$l||n===Jl||n===Kl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ql)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$l)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ql||n===jl||n===tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ql)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ec||n===nc||n===Do||n===ic)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ec)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}function ww(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,dp(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,_,y,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&p(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),f(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===cn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===cn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=t.get(g),y=_.envMap,M=_.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(bw.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(px),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=y*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===cn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tw(s,t,e,n){let i={},r={};function o(_,y){let M=y.program;n.uniformBlockBinding(_,M,i[_.id])}function a(_,y){let M=i[_.id];M===void 0&&(f(_),M=l(_),i[_.id]=M,_.addEventListener("dispose",m));let b=y.program;n.updateUBOMapping(_,b);let w=t.render.frame;r[_.id]!==w&&(c(_),r[_.id]=w)}function l(_){let y=s.createBuffer(),M=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,M,b),s.bindBuffer(s.UNIFORM_BUFFER,null),y}function c(_){let y=i[_.id],M=_.uniforms,b=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,v=M.length;w<v;w++){let S=M[w];if(Array.isArray(S))for(let C=0,A=S.length;C<A;C++)h(S[C],w,C,b);else h(S,w,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(_,y,M,b){if(d(_,y,M,b)===!0){let w=_.__offset,v=_.value;if(Array.isArray(v)){let S=0;for(let C=0;C<v.length;C++){let A=v[C],R=x(A,!0);u(A,_.__data,S),S+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,_.__data)}}function u(_,y,M){typeof _=="number"||typeof _=="boolean"?y[M]=_:_.isMatrix3?(y[M]=_.elements[0],y[M+1]=_.elements[1],y[M+2]=_.elements[2],y[M+3]=0,y[M+4]=_.elements[3],y[M+5]=_.elements[4],y[M+6]=_.elements[5],y[M+7]=0,y[M+8]=_.elements[6],y[M+9]=_.elements[7],y[M+10]=_.elements[8],y[M+11]=0):ArrayBuffer.isView(_)?y.set(_.subarray(0,y.length-M),M):_.toArray(y,M)}function d(_,y,M,b){let w=_.value,v=y+"_"+M;if(Array.isArray(w)){b[v]===void 0&&(b[v]=[]);let S=b[v],C=!1;for(let A=0;A<w.length;A++)p(w[A],S,A)===!0&&(C=!0);return C}return p(w,b,v)}function p(_,y,M){if(y[M]===void 0)return typeof _=="number"||typeof _=="boolean"?y[M]=_:ArrayBuffer.isView(_)?y[M]=_.slice():y[M]=_.clone(),!0;{let b=y[M];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return y[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function f(_){let y=_.uniforms,M=0,b=16;for(let v=0,S=y.length;v<S;v++){let C=Array.isArray(y[v])?y[v]:[y[v]];for(let A=0,R=C.length;A<R;A++){let D=C[A],z=Array.isArray(D.value)?D.value:[D.value],N=Array.isArray(y[v])||Array.isArray(D.value),O=M;for(let H=0,st=z.length;H<st;H++){let X=z[H],Z=x(X,N),nt=M%b,Et=nt%Z.boundary,ot=nt+Et;M+=Et,ot!==0&&b-ot<Z.storage&&(M+=b-ot),H===0&&(O=M),M+=Z.storage}let W=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new W((M-O)/Float32Array.BYTES_PER_ELEMENT),D.__offset=O}}let w=M%b;return w>0&&(M+=b-w),_.__size=M,_.__cache={},this}function x(_,y){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?At("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):At("WebGLRenderer: Unsupported uniform value type.",_),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(_){let y=_.target;y.removeEventListener("dispose",m),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function g(){for(let _ in i)s.deleteBuffer(i[_]);i={},r={}}return{bind:o,update:a,dispose:g}}function Ew(){return Si===null&&(Si=new gn(Aw,16,16,Xi,He),Si.name="DFG_LUT",Si.minFilter=Ae,Si.magFilter=Ae,Si.wrapS=mn,Si.wrapT=mn,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var Xy,qy,Yy,Zy,$y,Jy,Ky,Qy,jy,tM,eM,nM,iM,sM,rM,oM,aM,lM,cM,hM,uM,dM,fM,pM,mM,gM,xM,_M,vM,yM,MM,SM,bM,wM,TM,AM,EM,CM,RM,PM,IM,LM,DM,NM,UM,FM,OM,BM,zM,kM,GM,HM,VM,WM,XM,qM,YM,ZM,$M,JM,KM,QM,jM,tS,eS,nS,iS,sS,rS,oS,aS,lS,cS,hS,uS,dS,fS,pS,mS,gS,xS,_S,vS,yS,MS,SS,bS,wS,TS,AS,ES,CS,RS,PS,IS,LS,DS,NS,US,FS,OS,BS,zS,kS,GS,HS,VS,WS,XS,qS,YS,ZS,$S,JS,KS,QS,jS,t1,e1,n1,i1,s1,r1,o1,a1,l1,c1,h1,u1,d1,f1,p1,m1,g1,x1,_1,v1,y1,M1,S1,b1,re,Ct,oi,Vu,w1,sx,Uo,Fg,P1,I1,rx,ox,L1,D1,N1,qi,X1,ax,lx,cx,hx,ux,dx,kg,Gg,Hg,Vg,Wg,wp,Tp,Ap,Sp,No,Nb,Ub,Yg,zb,Wu,Xb,Yb,$b,Kb,jb,nw,Cp,Rp,hw,pw,mw,gw,xw,nx,oc,bp,Mw,Sw,Pp,Ip,bw,px,Aw,Si,lc,Ie=pe(()=>{Mp();Mp();Xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ky=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yM="gl_FragColor = linearToOutputTexel( gl_FragColor );",MM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,EM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,FM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,OM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qM=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,YM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sS=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_S=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ES=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,US=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,WS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,d1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,m1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:Xy,alphahash_pars_fragment:qy,alphamap_fragment:Yy,alphamap_pars_fragment:Zy,alphatest_fragment:$y,alphatest_pars_fragment:Jy,aomap_fragment:Ky,aomap_pars_fragment:Qy,batching_pars_vertex:jy,batching_vertex:tM,begin_vertex:eM,beginnormal_vertex:nM,bsdfs:iM,iridescence_fragment:sM,bumpmap_pars_fragment:rM,clipping_planes_fragment:oM,clipping_planes_pars_fragment:aM,clipping_planes_pars_vertex:lM,clipping_planes_vertex:cM,color_fragment:hM,color_pars_fragment:uM,color_pars_vertex:dM,color_vertex:fM,common:pM,defaultnormal_vertex:mM,displacementmap_pars_vertex:gM,displacementmap_vertex:xM,emissivemap_fragment:_M,emissivemap_pars_fragment:vM,colorspace_fragment:yM,colorspace_pars_fragment:MM,envmap_fragment:SM,envmap_common_pars_fragment:bM,envmap_pars_fragment:wM,envmap_pars_vertex:TM,envmap_physical_pars_fragment:FM,envmap_vertex:AM,fog_vertex:EM,fog_pars_vertex:CM,fog_fragment:RM,fog_pars_fragment:PM,gradientmap_pars_fragment:IM,lightmap_pars_fragment:LM,lights_lambert_fragment:DM,lights_lambert_pars_fragment:NM,lights_pars_begin:UM,lights_toon_fragment:OM,lights_toon_pars_fragment:BM,lights_phong_fragment:zM,lights_phong_pars_fragment:kM,lights_physical_fragment:GM,lights_physical_pars_fragment:HM,lights_fragment_begin:VM,lights_fragment_maps:WM,lights_fragment_end:XM,lightprobes_pars_fragment:qM,logdepthbuf_fragment:YM,logdepthbuf_pars_fragment:ZM,logdepthbuf_pars_vertex:$M,logdepthbuf_vertex:JM,map_fragment:KM,map_pars_fragment:QM,map_particle_fragment:jM,map_particle_pars_fragment:tS,metalnessmap_fragment:eS,metalnessmap_pars_fragment:nS,morphinstance_vertex:iS,morphcolor_vertex:sS,morphnormal_vertex:rS,morphtarget_pars_vertex:oS,morphtarget_vertex:aS,normal_fragment_begin:lS,normal_fragment_maps:cS,normal_pars_fragment:hS,normal_pars_vertex:uS,normal_vertex:dS,normalmap_pars_fragment:fS,clearcoat_normal_fragment_begin:pS,clearcoat_normal_fragment_maps:mS,clearcoat_pars_fragment:gS,iridescence_pars_fragment:xS,opaque_fragment:_S,packing:vS,premultiplied_alpha_fragment:yS,project_vertex:MS,dithering_fragment:SS,dithering_pars_fragment:bS,roughnessmap_fragment:wS,roughnessmap_pars_fragment:TS,shadowmap_pars_fragment:AS,shadowmap_pars_vertex:ES,shadowmap_vertex:CS,shadowmask_pars_fragment:RS,skinbase_vertex:PS,skinning_pars_vertex:IS,skinning_vertex:LS,skinnormal_vertex:DS,specularmap_fragment:NS,specularmap_pars_fragment:US,tonemapping_fragment:FS,tonemapping_pars_fragment:OS,transmission_fragment:BS,transmission_pars_fragment:zS,uv_pars_fragment:kS,uv_pars_vertex:GS,uv_vertex:HS,worldpos_vertex:VS,background_vert:WS,background_frag:XS,backgroundCube_vert:qS,backgroundCube_frag:YS,cube_vert:ZS,cube_frag:$S,depth_vert:JS,depth_frag:KS,distance_vert:QS,distance_frag:jS,equirect_vert:t1,equirect_frag:e1,linedashed_vert:n1,linedashed_frag:i1,meshbasic_vert:s1,meshbasic_frag:r1,meshlambert_vert:o1,meshlambert_frag:a1,meshmatcap_vert:l1,meshmatcap_frag:c1,meshnormal_vert:h1,meshnormal_frag:u1,meshphong_vert:d1,meshphong_frag:f1,meshphysical_vert:p1,meshphysical_frag:m1,meshtoon_vert:g1,meshtoon_frag:x1,points_vert:_1,points_frag:v1,shadow_vert:y1,shadow_frag:M1,sprite_vert:S1,sprite_frag:b1},Ct={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},oi={basic:{uniforms:hn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:hn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:hn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:hn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:hn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new ct(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:hn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:hn([Ct.points,Ct.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:hn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:hn([Ct.common,Ct.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:hn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:hn([Ct.sprite,Ct.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:hn([Ct.common,Ct.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:hn([Ct.lights,Ct.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};oi.physical={uniforms:hn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};Vu={r:0,b:0,g:0},w1=new Vt,sx=new jt;sx.set(-1,0,0,0,1,0,0,0,1);Uo=class extends Ee{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ls(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new an(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:mi});r.uniforms.tEquirect.value=e;let o=new fe(i,r),a=e.minFilter;return e.minFilter===qn&&(e.minFilter=Ae),new ir(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Fg=256,P1=3,I1=20,rx=256,ox=16,L1=3,D1=new L,N1=new ct,qi=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ir(1,10,null),this._boxMesh=new fe(new an(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=D1}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,f=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(N1));let m=new ir(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=f,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Fg,cp(t))}_fromTexture(t,e){t.mapping===xi||t.mapping===Ss?this._setSize(t.image.length===0?Fg:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Og(t,!1,!1),n=Math.log2(t)-P1;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Og(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===xi||t.mapping===Ss?(this._cubemapMaterial===null&&(this._cubemapMaterial=zg()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bg()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=U1(),this._integrationMaterial=F1());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/ox);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-L1)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(rx*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=O1());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};X1={[xs]:"LINEAR_TONE_MAPPING",[_s]:"REINHARD_TONE_MAPPING",[vs]:"CINEON_TONE_MAPPING",[gi]:"ACES_FILMIC_TONE_MAPPING",[ys]:"AGX_TONE_MAPPING",[Ms]:"NEUTRAL_TONE_MAPPING",[bo]:"CUSTOM_TONE_MAPPING"};ax=new Ue,lx=new Vn(1,1),cx=new eo(1),hx=new qs,ux=new Ys,dx=new ls,kg=[],Gg=[],Hg=new Float32Array(16),Vg=new Float32Array(9),Wg=new Float32Array(4);wp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=db(e.type)}},Tp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lb(e.type)}},Ap=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Sp=/(\w+)(\])?(\[|\.)?/g;No=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Db(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};Nb=37297,Ub=0;Yg=new jt;zb={[xs]:"Linear",[_s]:"Reinhard",[vs]:"Cineon",[gi]:"ACESFilmic",[ys]:"AgX",[Ms]:"Neutral",[bo]:"Custom"};Wu=new L;Xb=/^[ \t]*#include +<([\w\d./]+)>/gm;Yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;$b={[ms]:"SHADOWMAP_TYPE_PCF",[rr]:"SHADOWMAP_TYPE_VSM"};Kb={[Ss]:"ENVMAP_MODE_REFRACTION"};jb={[So]:"ENVMAP_BLENDING_MULTIPLY",[Wf]:"ENVMAP_BLENDING_MIX",[Xf]:"ENVMAP_BLENDING_ADD"};nw=0,Cp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Rp(t),e.set(t,n)),n}},Rp=class{constructor(t){this.id=nw++,this.code=t,this.usedTimes=0}};hw=0;pw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gw=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],xw=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],nx=new Vt,oc=new L,bp=new L;Mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new no(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ge({vertexShader:Mw,fragmentShader:Sw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ip=class extends En{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,x=typeof XRWebGLBinding<"u",m=new Pp,g={},_=e.getContextAttributes(),y=null,M=null,b=[],w=[],v=new et,S=null,C=null,A=new Re;A.viewport=new de;let R=new Re;R.viewport=new de;let D=[A,R],z=new gl,N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let lt=b[G];return lt===void 0&&(lt=new $s,b[G]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(G){let lt=b[G];return lt===void 0&&(lt=new $s,b[G]=lt),lt.getGripSpace()},this.getHand=function(G){let lt=b[G];return lt===void 0&&(lt=new $s,b[G]=lt),lt.getHandSpace()};function W(G){let lt=w.indexOf(G.inputSource);if(lt===-1)return;let yt=b[lt];yt!==void 0&&(yt.update(G.inputSource,G.frame,c||o),yt.dispatchEvent({type:G.type,data:G.inputSource}))}function H(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",st);for(let G=0;G<b.length;G++){let lt=w[G];lt!==null&&(w[G]=null,b[G].disconnect(lt))}N=null,O=null,m.reset();for(let G in g)delete g[G];if(t.setRenderTarget(y),p=null,d=null,u=null,i=null,M=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(v.width,v.height,!1),C!==null){let G=C.camera;G.fov=C.fov,G.zoom=C.zoom,G.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&At("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&At("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",H),i.addEventListener("inputsourceschange",st),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,kt=null,Tt=null;_.depth&&(Tt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=_.stencil?_i:ui,kt=_.stencil?bs:Mn);let Ht={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ht),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Ee(d.textureWidth,d.textureHeight,{format:xn,type:yn,depthTexture:new Vn(d.textureWidth,d.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let yt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ee(p.framebufferWidth,p.framebufferHeight,{format:xn,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(G){for(let lt=0;lt<G.removed.length;lt++){let yt=G.removed[lt],kt=w.indexOf(yt);kt>=0&&(w[kt]=null,b[kt].disconnect(yt))}for(let lt=0;lt<G.added.length;lt++){let yt=G.added[lt],kt=w.indexOf(yt);if(kt===-1){for(let Ht=0;Ht<b.length;Ht++)if(Ht>=w.length){w.push(yt),kt=Ht;break}else if(w[Ht]===null){w[Ht]=yt,kt=Ht;break}if(kt===-1)break}let Tt=b[kt];Tt&&Tt.connect(yt)}}function X(G,lt){lt===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(lt.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;let lt=G.near,yt=G.far;m.texture!==null&&(m.depthNear>0&&(lt=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),z.near=R.near=A.near=lt,z.far=R.far=A.far=yt,(N!==z.near||O!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),N=z.near,O=z.far),z.layers.mask=G.layers.mask|6,A.layers.mask=z.layers.mask&-5,R.layers.mask=z.layers.mask&-3;let kt=G.parent,Tt=z.cameras;X(z,kt);for(let Ht=0;Ht<Tt.length;Ht++)X(Tt[Ht],kt);z.projectionMatrix.copy(A.projectionMatrix),z.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&G.isPerspectiveCamera&&(C={camera:G,fov:G.fov,zoom:G.zoom}),Z(G,z,kt)};function Z(G,lt,yt){yt===null?G.matrix.copy(lt.matrixWorld):(G.matrix.copy(yt.matrixWorld),G.matrix.invert(),G.matrix.multiply(lt.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(lt.projectionMatrix),G.projectionMatrixInverse.copy(lt.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Xs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(G){return g[G]};let nt=null;function Et(G,lt){if(h=lt.getViewerPose(c||o),f=lt,h!==null){let yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let kt=!1;yt.length!==z.cameras.length&&(z.cameras.length=0,kt=!0);for(let It=0;It<yt.length;It++){let ie=yt[It],ce=null;if(p!==null)ce=p.getViewport(ie);else{let gt=u.getViewSubImage(d,ie);ce=gt.viewport,It===0&&(t.setRenderTargetTextures(M,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(M))}let it=D[It];it===void 0&&(it=new Re,it.layers.enable(It),it.viewport=new de,D[It]=it),it.matrix.fromArray(ie.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(ie.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(ce.x,ce.y,ce.width,ce.height),It===0&&(z.matrix.copy(it.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),kt===!0&&z.cameras.push(it)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let It=u.getDepthInformation(yt[0]);It&&It.isValid&&It.texture&&m.init(It,i.renderState)}if(Tt&&Tt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let It=0;It<yt.length;It++){let ie=yt[It].camera;if(ie){let ce=g[ie];ce||(ce=new no,g[ie]=ce);let it=u.getCameraImage(ie);ce.sourceTexture=it}}}}for(let yt=0;yt<b.length;yt++){let kt=w[yt],Tt=b[yt];kt!==null&&Tt!==void 0&&Tt.update(kt,lt,c||o)}nt&&nt(G,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),f=null}let ot=new ix;ot.setAnimationLoop(Et),this.setAnimationLoop=function(G){nt=G},this.dispose=function(){}}},bw=new Vt,px=new jt;px.set(-1,0,0,0,1,0,0,0,1);Aw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;lc=class{constructor(t={}){let{canvas:e=ap(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=yn}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let x=p,m=new Set([El,Al,Eo]),g=new Set([yn,Mn,lr,bs,bl,wl]),_=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},b=null,w=null,v=[],S=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,R=!1,D=null,z=null,N=null,O=null;this._outputColorSpace=Ke;let W=0,H=0,st=null,X=-1,Z=null,nt=new de,Et=new de,ot=null,G=new ct(0),lt=0,yt=e.width,kt=e.height,Tt=1,Ht=null,ye=null,It=new de(0,0,yt,kt),ie=new de(0,0,yt,kt),ce=!1,it=new di,gt=new jr,ft=!1,Nt=!1,pt=new Vt,te=new L,Bt=new de,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function k(){return st===null?Tt:1}let I=n;function $(E,F){return e.getContext(E,F)}let ht,Wt,rt,Yt,Rt,Dt,P,T,B,at,j,dt,xt,K,Q,Mt,U,tt,J,St,mt,_t,Xt;try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",qt,!1),e.addEventListener("webglcontextrestored",se,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),I===null){let F="webgl2";if(I=$(F,E),I===null)throw $(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(E){throw e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),Gt("WebGLRenderer: "+E.message),E}function ae(){ht=new z1(I),ht.init(),mt=new fx(I,ht),Wt=new C1(I,ht,t,mt),rt=new vw(I,ht),Wt.reversedDepthBuffer&&d&&rt.buffers.depth.setReversed(!0),z=I.createFramebuffer(),N=I.createFramebuffer(),O=I.createFramebuffer(),Yt=new H1(I),Rt=new rw,Dt=new yw(I,ht,rt,Rt,Wt,mt,Yt),P=new B1(A),T=new Wy(I),_t=new A1(I,T),B=new k1(I,T,Yt,_t),at=new W1(I,B,T,_t,Yt),tt=new V1(I,Wt,Dt),Q=new R1(Rt),j=new sw(A,P,ht,Wt,_t,Q),dt=new ww(A,Rt),xt=new aw,K=new fw(ht),U=new T1(A,P,rt,at,f,l),Mt=new _w(A,at,Wt),Xt=new Tw(I,Yt,Wt,rt),J=new E1(I,ht,Yt),St=new G1(I,ht,Yt),Yt.programs=j.programs,A.capabilities=Wt,A.extensions=ht,A.properties=Rt,A.renderLists=xt,A.shadowMap=Mt,A.state=rt,A.info=Yt}x!==yn&&(C=new q1(x,e.width,e.height,a,i,r));let ut=new Ip(A,I);this.xr=ut,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=ht.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ht.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Tt},this.setPixelRatio=function(E){E!==void 0&&(Tt=E,this.setSize(yt,kt,!1))},this.getSize=function(E){return E.set(yt,kt)},this.setSize=function(E,F,Y=!0){if(ut.isPresenting){At("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=E,kt=F,e.width=Math.floor(E*Tt),e.height=Math.floor(F*Tt),Y===!0&&(e.style.width=E+"px",e.style.height=F+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(yt*Tt,kt*Tt).floor()},this.setDrawingBufferSize=function(E,F,Y){yt=E,kt=F,Tt=Y,e.width=Math.floor(E*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(x===yn){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){At("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(nt)},this.getViewport=function(E){return E.copy(It)},this.setViewport=function(E,F,Y,V){E.isVector4?It.set(E.x,E.y,E.z,E.w):It.set(E,F,Y,V),rt.viewport(nt.copy(It).multiplyScalar(k()).round())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,F,Y,V){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,F,Y,V),rt.scissor(Et.copy(ie).multiplyScalar(k()).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){rt.setScissorTest(ce=E)},this.setOpaqueSort=function(E){Ht=E},this.setTransparentSort=function(E){ye=E},this.getClearColor=function(E){return E.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,Y=!0){let V=0;if(E){let q=!1;if(st!==null){let wt=st.texture.format;q=m.has(wt)}if(q){let wt=st.texture.type,Ut=g.has(wt),bt=U.getClearColor(),Lt=U.getClearAlpha(),zt=bt.r,ee=bt.g,he=bt.b;Ut?(_[0]=zt,_[1]=ee,_[2]=he,_[3]=Lt,I.clearBufferuiv(I.COLOR,0,_)):(y[0]=zt,y[1]=ee,y[2]=he,y[3]=Lt,I.clearBufferiv(I.COLOR,0,y))}else V|=I.COLOR_BUFFER_BIT}F&&(V|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),U.dispose(),xt.dispose(),K.dispose(),Dt.dispose(),Rt.dispose(),P.dispose(),at.dispose(),B.dispose(),_t.dispose(),Xt.dispose(),j.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",om),ut.removeEventListener("sessionend",am),Cs.stop()};function qt(E){E.preventDefault(),Yr("WebGLRenderer: Context Lost."),R=!0}function se(){Yr("WebGLRenderer: Context Restored."),R=!1;let E=Yt.autoReset,F=Mt.enabled,Y=Mt.autoUpdate,V=Mt.needsUpdate,q=Mt.type;ae(),Yt.autoReset=E,Mt.enabled=F,Mt.autoUpdate=Y,Mt.needsUpdate=V,Mt.type=q}function Pt(E){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Me(E){let F=E.target;F.removeEventListener("dispose",Me),Xe(F)}function Xe(E){$i(E),Rt.remove(E)}function $i(E){let F=Rt.get(E).programs;F!==void 0&&(F.forEach(function(Y){j.releaseProgram(Y)}),E.isShaderMaterial&&j.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,Y,V,q,wt){F===null&&(F=oe);let Ut=q.isMesh&&q.matrixWorld.determinantAffine()<0,bt=X_(E,F,Y,V,q);rt.setMaterial(V,Ut);let Lt=Y.index,zt=1;if(V.wireframe===!0){if(Lt=B.getWireframeAttribute(Y),Lt===void 0)return;zt=2}let ee=Y.drawRange,he=Y.attributes.position,Ft=ee.start*zt,ue=(ee.start+ee.count)*zt;wt!==null&&(Ft=Math.max(Ft,wt.start*zt),ue=Math.min(ue,(wt.start+wt.count)*zt)),Lt!==null?(Ft=Math.max(Ft,0),ue=Math.min(ue,Lt.count)):he!=null&&(Ft=Math.max(Ft,0),ue=Math.min(ue,he.count));let Be=ue-Ft;if(Be<0||Be===1/0)return;_t.setup(q,V,bt,Y,Lt);let Te,we=J;if(Lt!==null&&(Te=T.get(Lt),we=St,we.setIndex(Te)),q.isMesh)V.wireframe===!0?(rt.setLineWidth(V.wireframeLinewidth*k()),we.setMode(I.LINES)):we.setMode(I.TRIANGLES);else if(q.isLine){let je=V.linewidth;je===void 0&&(je=1),rt.setLineWidth(je*k()),q.isLineSegments?we.setMode(I.LINES):q.isLineLoop?we.setMode(I.LINE_LOOP):we.setMode(I.LINE_STRIP)}else q.isPoints?we.setMode(I.POINTS):q.isSprite&&we.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))we.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let je=q._multiDrawStarts,Ot=q._multiDrawCounts,fn=q._multiDrawCount,_e=Lt?T.get(Lt).bytesPerElement:1,Rs=Rt.get(V).currentProgram.getUniforms();for(let tn=0;tn<fn;tn++)Rs.setValue(I,"_gl_DrawID",tn),we.render(je[tn]/_e,Ot[tn])}else if(q.isInstancedMesh)we.renderInstances(Ft,Be,q.count);else if(Y.isInstancedBufferGeometry){let je=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ot=Math.min(Y.instanceCount,je);we.renderInstances(Ft,Be,Ot)}else we.render(Ft,Be)};function rm(E,F,Y,V){D!==null&&E.isNodeMaterial&&D.setObject(V,E),ft===!0&&Q.setState(E,Y,!1),E.transparent===!0&&E.side===Un&&E.forceSinglePass===!1?(E.side=cn,E.needsUpdate=!0,qo(E,F,V),E.side=Wi,E.needsUpdate=!0,qo(E,F,V),E.side=Un):qo(E,F,V)}this.compile=function(E,F,Y=null){Y===null&&(Y=E),D!==null&&D.renderStart(E,F,Y),w=K.get(Y),w.init(F),S.push(w),Y.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),E!==Y&&E.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),Nt=this.localClippingEnabled,ft=Q.init(this.clippingPlanes,Nt),ft===!0&&Q.setGlobalState(this.clippingPlanes,F),D!==null&&Mt.render(w.state.shadowsArray,Y,F);let V=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let wt=q.material;if(wt)if(Array.isArray(wt))for(let Ut=0;Ut<wt.length;Ut++){let bt=wt[Ut];rm(bt,Y,F,q),V.add(bt)}else rm(wt,Y,F,q),V.add(wt)}),w=S.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(E,F,Y=null){let V=this.compile(E,F,Y);return new Promise(q=>{function wt(){if(V.forEach(function(Ut){let Lt=Rt.get(Ut).currentProgram;(Lt===void 0||Lt.isReady())&&V.delete(Ut)}),V.size===0){q(E);return}setTimeout(wt,10)}ht.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let bd=null;function V_(E){bd&&bd(E)}function om(){Cs.stop()}function am(){Cs.start()}let Cs=new ix;Cs.setAnimationLoop(V_),typeof self<"u"&&Cs.setContext(self),this.setAnimationLoop=function(E){bd=E,ut.setAnimationLoop(E),E===null?Cs.stop():Cs.start()},ut.addEventListener("sessionstart",om),ut.addEventListener("sessionend",am),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(E,F);let Y=ut.enabled===!0&&ut.isPresenting===!0,V=C!==null&&(st===null||Y)&&C.begin(A,st);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(F),F=ut.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,F,st),w=K.get(E,S.length),w.init(F),w.state.textureUnits=Dt.getTextureUnits(),S.push(w),pt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?gt.setFromArrayCamera(F):it.setFromProjectionMatrix(pt,An,F.reversedDepth),Nt=this.localClippingEnabled,ft=Q.init(this.clippingPlanes,Nt),b=xt.get(E,v.length),b.init(),v.push(b),this.info.render.frame++,ut.enabled===!0&&ut.isPresenting===!0){let Ut=A.xr.getDepthSensingMesh();Ut!==null&&wd(Ut,F,-1/0,A.sortObjects)}wd(E,F,0,A.sortObjects),b.finish(),D!==null&&D.updateLights(w.state.lightsArray),A.sortObjects===!0&&b.sort(Ht,ye),ne=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,ne&&U.addToRenderList(b,E),this.info.autoReset===!0&&this.info.reset(),ft===!0&&Q.beginShadows();let q=w.state.shadowsArray;if(Mt.render(q,E,F),ft===!0&&Q.endShadows(),(V&&C.hasRenderPass())===!1){let Ut=b.opaque,bt=b.transmissive;if(w.setupLights(),F.isArrayCamera){let Lt=F.cameras;if(bt.length>0)for(let zt=0,ee=Lt.length;zt<ee;zt++){let he=Lt[zt];cm(Ut,bt,E,he)}ne&&U.render(E);for(let zt=0,ee=Lt.length;zt<ee;zt++){let he=Lt[zt];lm(b,E,he,he.viewport)}}else bt.length>0&&cm(Ut,bt,E,F),ne&&U.render(E),lm(b,E,F)}st!==null&&H===0&&(Dt.updateMultisampleRenderTarget(st),Dt.updateRenderTargetMipmap(st)),V&&C.end(A),E.isScene===!0&&E.onAfterRender(A,E,F),_t.resetDefaultState(),X=-1,Z=null,S.pop(),S.length>0?(w=S[S.length-1],Dt.setTextureUnits(w.state.textureUnits),ft===!0&&Q.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?b=v[v.length-1]:b=null,D!==null&&D.renderEnd()};function wd(E,F,Y,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Ut=F.isArrayCamera?gt:it;if(!E.frustumCulled||E.intersectsFrustum(Ut)){V&&Bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pt);let bt=at.update(E),Lt=E.material;Lt.visible&&b.push(E,bt,Lt,Y,Bt.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){let Ut=F.isArrayCamera?gt:it;if(!E.frustumCulled||E.intersectsFrustum(Ut)){let bt=at.update(E),Lt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Bt.copy(E.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Bt.copy(bt.boundingSphere.center)),Bt.applyMatrix4(E.matrixWorld).applyMatrix4(pt)),Array.isArray(Lt)){let zt=bt.groups;for(let ee=0,he=zt.length;ee<he;ee++){let Ft=zt[ee],ue=Lt[Ft.materialIndex];ue&&ue.visible&&b.push(E,bt,ue,Y,Bt.z,Ft,F)}}else Lt.visible&&b.push(E,bt,Lt,Y,Bt.z,null,F)}}}let wt=E.children;for(let Ut=0,bt=wt.length;Ut<bt;Ut++)wd(wt[Ut],F,Y,V)}function lm(E,F,Y,V){let{opaque:q,transmissive:wt,transparent:Ut}=E;w.setupLightsView(Y),ft===!0&&Q.setGlobalState(A.clippingPlanes,Y),V&&rt.viewport(nt.copy(V)),q.length>0&&bc(q,F,Y),wt.length>0&&bc(wt,F,Y),Ut.length>0&&bc(Ut,F,Y),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function cm(E,F,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){let Ft=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new Ee(1,1,{generateMipmaps:!0,type:Ft?He:yn,minFilter:qn,samples:Math.max(4,Wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let wt=w.state.transmissionRenderTarget[V.id],Ut=V.viewport||nt;wt.setSize(Ut.z*A.transmissionResolutionScale,Ut.w*A.transmissionResolutionScale);let bt=A.getRenderTarget(),Lt=A.getActiveCubeFace(),zt=A.getActiveMipmapLevel();A.setRenderTarget(wt),A.getClearColor(G),lt=A.getClearAlpha(),lt<1&&A.setClearColor(16777215,.5),A.clear(),ne&&U.render(Y);let ee=A.toneMapping;A.toneMapping=Fn;let he=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),ft===!0&&Q.setGlobalState(A.clippingPlanes,V),bc(E,Y,V),Dt.updateMultisampleRenderTarget(wt),Dt.updateRenderTargetMipmap(wt),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ue=0,Be=F.length;ue<Be;ue++){let Te=F[ue],{object:we,geometry:je,material:Ot,group:fn}=Te;if(Ot.side===Un&&we.layers.test(V.layers)){let _e=Ot.side;Ot.side=cn,Ot.needsUpdate=!0,hm(we,Y,V,je,Ot,fn),Ot.side=_e,Ot.needsUpdate=!0,Ft=!0}}Ft===!0&&(Dt.updateMultisampleRenderTarget(wt),Dt.updateRenderTargetMipmap(wt))}A.setRenderTarget(bt,Lt,zt),A.setClearColor(G,lt),he!==void 0&&(V.viewport=he),A.toneMapping=ee}function bc(E,F,Y){let V=F.isScene===!0?F.overrideMaterial:null;for(let q=0,wt=E.length;q<wt;q++){let Ut=E[q],{object:bt,geometry:Lt,group:zt}=Ut,ee=Ut.material;ee.allowOverride===!0&&V!==null&&(ee=V),bt.layers.test(Y.layers)&&hm(bt,F,Y,Lt,ee,zt)}}function hm(E,F,Y,V,q,wt){D!==null&&q.isNodeMaterial&&D.setObject(E,q),E.onBeforeRender(A,F,Y,V,q,wt),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(A,F,Y,V,E,wt),q.transparent===!0&&q.side===Un&&q.forceSinglePass===!1?(q.side=cn,q.needsUpdate=!0,A.renderBufferDirect(Y,F,V,q,E,wt),q.side=Wi,q.needsUpdate=!0,A.renderBufferDirect(Y,F,V,q,E,wt),q.side=Un):A.renderBufferDirect(Y,F,V,q,E,wt),E.onAfterRender(A,F,Y,V,q,wt)}function um(E){let F=0;for(let Y of E)Y.texture!==null&&F++;return F}function qo(E,F,Y){F.isScene!==!0&&(F=oe);let V=Rt.get(E),q=w.state.lights,wt=w.state.shadowsArray,Ut=q.state.version,bt=j.getParameters(E,q.state,wt,F,Y,w.state.lightProbeGridArray),Lt=j.getProgramCacheKey(bt),zt=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let ee=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=P.get(E.envMap||V.environment,ee),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",Me),zt=new Map,V.programs=zt,V.programVariants=new Map);let he=zt.get(Lt);if(he!==void 0){if(V.currentProgram===he&&V.lightsStateVersion===Ut)return fm(E,bt),he}else bt.uniforms=j.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,Y,bt),E.onBeforeCompile(bt,A),he=j.acquireProgram(bt,Lt),zt.set(Lt,he),V.uniforms=bt.uniforms;let Ft=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ft.clippingPlanes=Q.uniform),fm(E,bt),V.needsLights=Y_(E),V.lightsStateVersion=Ut,V.needsLights&&(Ft.ambientLightColor.value=q.state.ambient,Ft.lightProbe.value=q.state.probe,Ft.sunLights.value=q.state.sun,Ft.sunLightShadows.value=q.state.sunShadow,Ft.directionalLights.value=q.state.directional,Ft.directionalLightShadows.value=q.state.directionalShadow,Ft.spotLights.value=q.state.spot,Ft.spotLightShadows.value=q.state.spotShadow,Ft.rectAreaLights.value=q.state.rectArea,Ft.ltc_1.value=q.state.rectAreaLTC1,Ft.ltc_2.value=q.state.rectAreaLTC2,Ft.pointLights.value=q.state.point,Ft.pointLightShadows.value=q.state.pointShadow,Ft.hemisphereLights.value=q.state.hemi,Ft.sunShadowMatrix.value=q.state.sunShadowMatrix,Ft.sunShadowCascade.value=q.state.sunShadowCascade,Ft.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ft.spotLightMatrix.value=q.state.spotLightMatrix,Ft.spotLightMap.value=q.state.spotLightMap,Ft.pointShadowMatrix.value=q.state.pointShadowMatrix),V.numLightProbeGrids=um(w.state.lightProbeGridArray),V.currentProgram=he,V.uniformsList=null,he}function W_(E,F,Y,V,q){let wt=Rt.get(E),Ut=wt.currentProgram.id+","+V+","+q,bt=wt.programVariants.get(Ut);return bt===void 0?(bt=qo(E,F,Y),wt.programVariants.set(Ut,bt)):(wt.currentProgram=bt,wt.uniformsList=null,wt.outputColorSpace=V,wt.toneMapping=q),bt}function dm(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=No.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function fm(E,F){let Y=Rt.get(E);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function X_(E,F,Y,V,q){F.isScene!==!0&&(F=oe),Dt.resetTextureUnits();let wt=F.fog,Ut=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,bt=st===null?A.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:le.workingColorSpace,Lt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,zt=P.get(V.envMap||Ut,Lt),ee=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,he=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ft=!!Y.morphAttributes.position,ue=!!Y.morphAttributes.normal,Be=!!Y.morphAttributes.color,Te=Fn;V.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Te=A.toneMapping);let we=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,je=we!==void 0?we.length:0,Ot=Rt.get(V),fn=w.state.lights;if(ft===!0&&(Nt===!0||E!==Z)){let Ce=E===Z&&V.id===X;Q.setState(V,E,Ce)}let _e=!1,Rs=!1;V.version===Ot.__version?Ot.needsLights&&Ot.lightsStateVersion!==fn.state.version||q.isBatchedMesh&&Ot.batching===!1||!q.isBatchedMesh&&Ot.batching===!0||q.isBatchedMesh&&Ot.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ot.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ot.instancing===!1||!q.isInstancedMesh&&Ot.instancing===!0||q.isSkinnedMesh&&Ot.skinning===!1||!q.isSkinnedMesh&&Ot.skinning===!0||q.isInstancedMesh&&Ot.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ot.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ot.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ot.instancingMorph===!1&&q.morphTexture!==null||Ot.envMap!==zt||V.fog===!0&&Ot.fog!==wt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Q.numPlanes||Ot.numIntersection!==Q.numIntersection)||Ot.vertexAlphas!==ee||Ot.vertexTangents!==he||Ot.morphTargets!==Ft||Ot.morphNormals!==ue||Ot.morphColors!==Be||Ot.morphTargetsCount!==je||Ot.numLightProbeGrids!==um(w.state.lightProbeGridArray)?_e=!0:(Ot.outputColorSpace!==bt||Ot.toneMapping!==Te)&&(Rs=!0):(_e=!0,Ot.__version=V.version);let tn=Ot.currentProgram;(_e===!0||Rs===!0)&&(tn=Rs===!0?W_(V,F,q,bt,Te):qo(V,F,q),D&&V.isNodeMaterial&&D.onUpdateProgram(V,tn,Ot));let wc=!1,Ji=!1,Ps=!1,me=tn.getUniforms(),Je=Ot.uniforms;if(rt.useProgram(tn.program)&&(wc=!0,Ji=!0,Ps=!0),V.id!==X&&(X=V.id,Ji=!0),wc||Z!==E){rt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),me.setValue(I,"projectionMatrix",E.projectionMatrix),me.setValue(I,"viewMatrix",E.matrixWorldInverse);let qe=me.map.cameraPosition;qe!==void 0&&qe.setValue(I,te.setFromMatrixPosition(E.matrixWorld)),Wt.logarithmicDepthBuffer&&me.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&me.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,Ji=!0,Ps=!0)}if(Ot.needsLights&&(fn.state.sunShadowMap.length>0&&me.setValue(I,"sunShadowMap",fn.state.sunShadowMap,Dt),fn.state.directionalShadowMap.length>0&&me.setValue(I,"directionalShadowMap",fn.state.directionalShadowMap,Dt),fn.state.spotShadowMap.length>0&&me.setValue(I,"spotShadowMap",fn.state.spotShadowMap,Dt),fn.state.pointShadowMap.length>0&&me.setValue(I,"pointShadowMap",fn.state.pointShadowMap,Dt)),q.isSkinnedMesh){me.setOptional(I,q,"bindMatrix"),me.setOptional(I,q,"bindMatrixInverse");let Ce=q.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),me.setValue(I,"boneTexture",Ce.boneTexture,Dt))}q.isBatchedMesh&&(me.setOptional(I,q,"batchingTexture"),me.setValue(I,"batchingTexture",q._matricesTexture,Dt),me.setOptional(I,q,"batchingIdTexture"),me.setValue(I,"batchingIdTexture",q._indirectTexture,Dt),me.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&me.setValue(I,"batchingColorTexture",q._colorsTexture,Dt));let $n=Y.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&tt.update(q,Y,tn),(Ji||Ot.receiveShadow!==q.receiveShadow)&&(Ot.receiveShadow=q.receiveShadow,me.setValue(I,"receiveShadow",q.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Je.envMapIntensity.value=F.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=Ew()),Ji){if(me.setValue(I,"toneMappingExposure",A.toneMappingExposure),Ot.needsLights&&q_(Je,Ps),wt&&V.fog===!0&&dt.refreshFogUniforms(Je,wt),dt.refreshMaterialUniforms(Je,V,Tt,kt,w.state.transmissionRenderTarget[E.id]),Ot.needsLights&&Ot.numLightProbeGrids>0){let Ce=M,qe=0;for(let Ei of w.state.lightProbeGridArray)Ei.texture!==null&&(Ce.textures[qe]=Ei.texture,Ce.min[qe]=Ei.boundingBox.min,Ce.max[qe]=Ei.boundingBox.max,Ce.resolution[qe]=Ei.resolution,qe++);for(let Ei in Ce)Ce[Ei].length=qe;Je.probesSH.value=Ce.textures,Je.probesMin.value=Ce.min,Je.probesMax.value=Ce.max,Je.probesResolution.value=Ce.resolution}No.upload(I,dm(Ot),Je,Dt)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(No.upload(I,dm(Ot),Je,Dt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&me.setValue(I,"center",q.center),me.setValue(I,"modelViewMatrix",q.modelViewMatrix),me.setValue(I,"normalMatrix",q.normalMatrix),me.setValue(I,"modelMatrix",q.matrixWorld),V.uniformsGroups!==void 0){let Ce=V.uniformsGroups;for(let qe=0,Ei=Ce.length;qe<Ei;qe++){let mm=Ce[qe];Xt.update(mm,tn),Xt.bind(mm,tn)}}return tn}function q_(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Y_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(E,F,Y){let V=Rt.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Rt.get(E.texture).__webglTexture=F,Rt.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let Y=Rt.get(E);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,Y=0){st=E,W=F,H=Y;let V=null,q=!1,wt=!1;if(E){let bt=Rt.get(E);if(bt.__useDefaultFramebuffer!==void 0){rt.bindFramebuffer(I.FRAMEBUFFER,bt.__webglFramebuffer),nt.copy(E.viewport),Et.copy(E.scissor),ot=E.scissorTest,rt.viewport(nt),rt.scissor(Et),rt.setScissorTest(ot),X=-1;return}else if(bt.__webglFramebuffer===void 0)Dt.setupRenderTarget(E);else if(bt.__hasExternalTextures)Dt.rebindTextures(E,Rt.get(E.texture).__webglTexture,Rt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ee=E.depthTexture;if(bt.__boundDepthTexture!==ee){if(ee!==null&&Rt.has(ee)&&(E.width!==ee.image.width||E.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Dt.setupDepthRenderbuffer(E)}}let Lt=E.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(wt=!0);let zt=Rt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[F])?V=zt[F][Y]:V=zt[F],q=!0):E.samples>0&&Dt.useMultisampledRTT(E)===!1?V=Rt.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?V=zt[Y]:V=zt,nt.copy(E.viewport),Et.copy(E.scissor),ot=E.scissorTest}else nt.copy(It).multiplyScalar(Tt).floor(),Et.copy(ie).multiplyScalar(Tt).floor(),ot=ce;if(Y!==0&&(V=z),rt.bindFramebuffer(I.FRAMEBUFFER,V)&&rt.drawBuffers(E,V),rt.viewport(nt),rt.scissor(Et),rt.setScissorTest(ot),q){let bt=Rt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,bt.__webglTexture,Y)}else if(wt){let bt=F;for(let Lt=0;Lt<E.textures.length;Lt++){let zt=Rt.get(E.textures[Lt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Lt,zt.__webglTexture,Y,bt)}}else if(E!==null&&Y!==0){let bt=Rt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bt.__webglTexture,Y)}X=-1};function pm(E){let F=Rt.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=Wt.textureFormatReadable(E.format),F.__typeReadable=Wt.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,Y,V,q,wt,Ut,bt=0){if(!(E&&E.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ut!==void 0&&(Lt=Lt[Ut],Array.isArray(Lt)&&(Lt=Lt[0])),Lt){rt.bindFramebuffer(I.FRAMEBUFFER,Lt);try{let zt=E.textures[bt],ee=zt.format,he=zt.type;E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+bt);let Ft=pm(zt);if(Ft.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&Y>=0&&Y<=E.height-q&&I.readPixels(F,Y,V,q,mt.convert(ee),mt.convert(he),wt)}finally{let zt=st!==null?Rt.get(st).__webglFramebuffer:null;rt.bindFramebuffer(I.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(E,F,Y,V,q,wt,Ut,bt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ut!==void 0&&(Lt=Lt[Ut],Array.isArray(Lt)&&(Lt=Lt[0])),Lt)if(F>=0&&F<=E.width-V&&Y>=0&&Y<=E.height-q){rt.bindFramebuffer(I.FRAMEBUFFER,Lt);let zt=E.textures[bt],ee=zt.format,he=zt.type;E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+bt);let Ft=pm(zt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ue),I.bufferData(I.PIXEL_PACK_BUFFER,wt.byteLength,I.STREAM_READ),I.readPixels(F,Y,V,q,mt.convert(ee),mt.convert(he),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Be=st!==null?Rt.get(st).__webglFramebuffer:null;rt.bindFramebuffer(I.FRAMEBUFFER,Be);let Te=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await wg(I,Te,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ue),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,wt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ue),I.deleteSync(Te),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,Y=0){let V=Math.pow(2,-Y),q=Math.floor(E.image.width*V),wt=Math.floor(E.image.height*V),Ut=F!==null?F.x:0,bt=F!==null?F.y:0;Dt.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,Ut,bt,q,wt),rt.unbindTexture()},this.copyTextureToTexture=function(E,F,Y=null,V=null,q=0,wt=0){let Ut,bt,Lt,zt,ee,he,Ft,ue,Be,Te=E.isCompressedTexture?E.mipmaps[wt]:E.image;if(Y!==null)Ut=Y.max.x-Y.min.x,bt=Y.max.y-Y.min.y,Lt=Y.isBox3?Y.max.z-Y.min.z:1,zt=Y.min.x,ee=Y.min.y,he=Y.isBox3?Y.min.z:0;else{let me=Math.pow(2,-q);Ut=Math.floor(Te.width*me),bt=Math.floor(Te.height*me),E.isDataArrayTexture?Lt=Te.depth:E.isData3DTexture?Lt=Math.floor(Te.depth*me):Lt=1,zt=0,ee=0,he=0}V!==null?(Ft=V.x,ue=V.y,Be=V.z):(Ft=0,ue=0,Be=0);let we=mt.convert(F.format),je=mt.convert(F.type),Ot;F.isData3DTexture?(Dt.setTexture3D(F,0),Ot=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Dt.setTexture2DArray(F,0),Ot=I.TEXTURE_2D_ARRAY):(Dt.setTexture2D(F,0),Ot=I.TEXTURE_2D),rt.activeTexture(I.TEXTURE0),rt.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),rt.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),rt.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let fn=rt.getParameter(I.UNPACK_ROW_LENGTH),_e=rt.getParameter(I.UNPACK_IMAGE_HEIGHT),Rs=rt.getParameter(I.UNPACK_SKIP_PIXELS),tn=rt.getParameter(I.UNPACK_SKIP_ROWS),wc=rt.getParameter(I.UNPACK_SKIP_IMAGES);rt.pixelStorei(I.UNPACK_ROW_LENGTH,Te.width),rt.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Te.height),rt.pixelStorei(I.UNPACK_SKIP_PIXELS,zt),rt.pixelStorei(I.UNPACK_SKIP_ROWS,ee),rt.pixelStorei(I.UNPACK_SKIP_IMAGES,he);let Ji=E.isDataArrayTexture||E.isData3DTexture,Ps=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let me=Rt.get(E),Je=Rt.get(F),$n=Rt.get(me.__renderTarget),Ce=Rt.get(Je.__renderTarget);rt.bindFramebuffer(I.READ_FRAMEBUFFER,$n.__webglFramebuffer),rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let qe=0;qe<Lt;qe++)Ji&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rt.get(E).__webglTexture,q,he+qe),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rt.get(F).__webglTexture,wt,Be+qe)),I.blitFramebuffer(zt,ee,zt+Ut,ee+bt,Ft,ue,Ft+Ut,ue+bt,I.DEPTH_BUFFER_BIT,I.NEAREST);rt.bindFramebuffer(I.READ_FRAMEBUFFER,null),rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||Rt.has(E)){let me=Rt.get(E),Je=Rt.get(F);rt.bindFramebuffer(I.READ_FRAMEBUFFER,N),rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,O);for(let $n=0;$n<Lt;$n++)Ji?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,me.__webglTexture,q,he+$n):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,me.__webglTexture,q),Ps?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Je.__webglTexture,wt,Be+$n):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Je.__webglTexture,wt),q!==0?I.blitFramebuffer(zt,ee,zt+Ut,ee+bt,Ft,ue,Ft+Ut,ue+bt,I.COLOR_BUFFER_BIT,I.NEAREST):Ps?I.copyTexSubImage3D(Ot,wt,Ft,ue,Be+$n,zt,ee,Ut,bt):I.copyTexSubImage2D(Ot,wt,Ft,ue,zt,ee,Ut,bt);rt.bindFramebuffer(I.READ_FRAMEBUFFER,null),rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ps?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Ot,wt,Ft,ue,Be,Ut,bt,Lt,we,je,Te.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Ot,wt,Ft,ue,Be,Ut,bt,Lt,we,Te.data):I.texSubImage3D(Ot,wt,Ft,ue,Be,Ut,bt,Lt,we,je,Te):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,wt,Ft,ue,Ut,bt,we,je,Te.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,wt,Ft,ue,Te.width,Te.height,we,Te.data):I.texSubImage2D(I.TEXTURE_2D,wt,Ft,ue,Ut,bt,we,je,Te);rt.pixelStorei(I.UNPACK_ROW_LENGTH,fn),rt.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e),rt.pixelStorei(I.UNPACK_SKIP_PIXELS,Rs),rt.pixelStorei(I.UNPACK_SKIP_ROWS,tn),rt.pixelStorei(I.UNPACK_SKIP_IMAGES,wc),wt===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&I.generateMipmap(Ot),rt.unbindTexture()},this.initRenderTarget=function(E){Rt.get(E).__webglFramebuffer===void 0&&Dt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Dt.setTextureCube(E,0):E.isData3DTexture?Dt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Dt.setTexture2DArray(E,0):Dt.setTexture2D(E,0),rt.unbindTexture()},this.resetState=function(){W=0,H=0,st=null,rt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}});function vx(s,t,{start:e=12,fadeIn:n=1.4,fadeOut:i=.6}={}){let r=bn.outCubic(Sn((s-e)/n)),o=Sn((t-s)/i);return{visible:s>=e,opacity:r*bn.smooth(o),reveal:r,spacing:_x(.9,.42,bn.outExpo(Sn((s-e)/(n*1.8))))}}function yx(s,t,{inSec:e=.8,outSec:n=.8}={}){return Math.min(bn.smooth(Sn(s/e)),bn.smooth(Sn((t-s)/n)))}var Sn,_x,bn,Ku,ur,dc=pe(()=>{Sn=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),_x=(s,t,e)=>s+(t-s)*e,bn={linear:s=>s,smooth:s=>s*s*(3-2*s),smoother:s=>s*s*s*(s*(s*6-15)+10),inOutCubic:s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,outCubic:s=>1-Math.pow(1-s,3),inCubic:s=>s*s*s,outExpo:s=>s>=1?1:1-Math.pow(2,-10*s)},Ku=class{constructor({fps:t=30,duration:e=15}={}){this.fps=t,this.duration=e,this.frameCount=Math.round(t*e)}timeAtFrame(t){return t/this.fps}progressAtFrame(t){return Sn(t/Math.max(1,this.frameCount-1))}segment(t,e,n,i=bn.linear){return i(Sn((t-e)/(n-e)))}},ur=class{constructor(t){this.keys=[...t].sort((e,n)=>e.t-n.t)}sample(t){let e=this.keys;if(t<=e[0].t)return e[0].v;if(t>=e[e.length-1].t)return e[e.length-1].v;let n=0;for(;t>e[n+1].t;)n++;let i=(e[n].ease??bn.smooth)((t-e[n].t)/(e[n+1].t-e[n].t));return _x(e[n].v,e[n+1].v,i)}}});function Pw(s,t,e=8){let n=s.count,i=s.instanceMatrix.array,r=new Map;for(let l=0;l<n;l++){let c=Sx(Math.floor(i[l*16+12]/t),Math.floor(i[l*16+14]/t)),h=r.get(c);h||r.set(c,h=[]),h.push(l)}let o=s.geometry,a=[];for(let l of r.values()){let c=new Zt;for(let u of Object.keys(o.attributes)){let d=o.attributes[u];if(d.isInstancedBufferAttribute){let p=new d.array.constructor(l.length*d.itemSize);l.forEach((f,x)=>{for(let m=0;m<d.itemSize;m++)p[x*d.itemSize+m]=d.array[f*d.itemSize+m]}),c.setAttribute(u,new _n(p,d.itemSize,d.normalized,d.meshPerAttribute))}else c.setAttribute(u,d)}o.index&&c.setIndex(o.index),c.groups=o.groups.slice(),c.boundingBox=o.boundingBox,c.boundingSphere=o.boundingSphere,c.boundingSphere||(o.computeBoundingSphere(),c.boundingSphere=o.boundingSphere);let h=new Ze(c,s.material,l.length);l.forEach((u,d)=>h.instanceMatrix.array.set(i.subarray(u*16,u*16+16),d*16)),h.instanceMatrix.needsUpdate=!0,s.instanceColor&&(h.instanceColor=new _n(new Float32Array(l.length*3),3),l.forEach((u,d)=>h.instanceColor.array.set(s.instanceColor.array.subarray(u*3,u*3+3),d*3)),h.instanceColor.needsUpdate=!0),h.castShadow=s.castShadow,h.receiveShadow=s.receiveShadow,h.renderOrder=s.renderOrder,h.name=s.name,h.userData=s.userData,h.layers.mask=s.layers.mask,h.position.copy(s.position),h.quaternion.copy(s.quaternion),h.scale.copy(s.scale),h.frustumCulled=!0,h.computeBoundingSphere(),h.boundingSphere.radius+=e,a.push(h)}return a}function Iw(s,t,e=2){let n=s.geometry,i=n.attributes.position,r=n.index;if(!r)return[s];let o=r.array,a=o.length/3,l=new Map;for(let h=0;h<a;h++){let u=o[h*3],d=o[h*3+1],p=o[h*3+2],f=(i.getX(u)+i.getX(d)+i.getX(p))/3,x=(i.getZ(u)+i.getZ(d)+i.getZ(p))/3,m=Sx(Math.floor(f/t),Math.floor(x/t)),g=l.get(m);g||l.set(m,g=[]),g.push(h)}let c=[];for(let h of l.values()){let u=new o.constructor(h.length*3);h.forEach((m,g)=>{u[g*3]=o[m*3],u[g*3+1]=o[m*3+1],u[g*3+2]=o[m*3+2]});let d=new Zt;for(let m of Object.keys(n.attributes))d.setAttribute(m,n.attributes[m]);d.setIndex(new $t(u,1));let p=new Oe,f=new L;for(let m=0;m<u.length;m++)f.fromBufferAttribute(i,u[m]),p.expandByPoint(f);d.boundingBox=p,d.boundingSphere=p.getBoundingSphere(new De),d.boundingSphere.radius+=e;let x=new fe(d,s.material);x.castShadow=s.castShadow,x.receiveShadow=s.receiveShadow,x.renderOrder=s.renderOrder,x.name=s.name+"-tile",x.userData=s.userData,x.position.copy(s.position),x.quaternion.copy(s.quaternion),x.scale.copy(s.scale),x.frustumCulled=!0,c.push(x)}return c}function bx(s,{exclude:t=[],instSize:e=350,mountainCell:n=3e3,only:i=null,minCount:r=2e3}={}){let o=new Set(t),a={instancedSrc:0,instancedTiles:0,mountainTiles:0,instances:0};for(let l of s.children.slice()){if(o.has(l)||l.isInstancedMesh&&l.count<r)continue;let c=null;if(l.isInstancedMesh&&!l.isPoints&&(!i||i==="inst")?(c=Pw(l,e),a.instancedSrc++,a.instancedTiles+=c.length,a.instances+=l.count):l.isMesh&&l.name==="mountains"&&(!i||i==="mtn")&&(c=Iw(l,n),a.mountainTiles=c.length),!!c){s.remove(l);for(let h of c)s.add(h)}}return a}var Sx,wx=pe(()=>{Ie();Sx=(s,t)=>s+"_"+t});function Tx(s,t=fc){let e=s.get("haze"),n=e===null||e===""?1:Math.max(0,parseFloat(e)),i=(r,o)=>s.has(r)&&isFinite(parseFloat(s.get(r)))?parseFloat(s.get(r)):o;return{mult:isFinite(n)?n:1,start:i("hazeStart",t.start),end:i("hazeEnd",t.end),strength:i("hazeMax",t.strength),desat:i("hazeDesat",t.desat),mountain:i("hazeMtn",t.mountain)}}function Ax(s,t,e){let n=new de,i={uHazeP:{value:n},uHazeHor:t.uHorizon,uHazeWarm:t.uHorizonWarm,uHazeSun:t.uSunDir},r={cfg:{...e},uniforms:i,materials:0,set(a){Object.assign(r.cfg,a);let l=r.cfg.strength*r.cfg.mult;n.set(r.cfg.start,r.cfg.end,Math.min(1,l),r.cfg.desat)}};r.set({});let o=new Set;return s.traverse(a=>{let l=a.material?Array.isArray(a.material)?a.material:[a.material]:[];for(let c of l){if(o.has(c)||c.isShaderMaterial&&!c.isMeshStandardMaterial||c.fog===!1||c.isPointsMaterial)continue;o.add(c);let h=String(a.name||"").startsWith("mountains")?r.cfg.mountain:1,u=c.onBeforeCompile,d=c.customProgramCacheKey();c.onBeforeCompile=function(p,f){u?.call(this,p,f);let x=p.fragmentShader;if(!x.includes("#include <fog_fragment>"))return;let m=x.includes("vViewPosition");Object.assign(p.uniforms,i),p.fragmentShader=x.replace("#include <fog_pars_fragment>",`#include <fog_pars_fragment>
uniform vec4 uHazeP; uniform vec3 uHazeHor, uHazeWarm, uHazeSun;`).replace("#include <fog_fragment>","#include <fog_fragment>"+Lw.replace("HAZE_COL",m?Dw:Nw).replace("HZ_K",h.toFixed(3)))},c.customProgramCacheKey=()=>d+"|haze1|"+h,c.needsUpdate=!0,r.materials++}}),r}var fc,Lw,Dw,Nw,Up=pe(()=>{Ie();fc={start:700,end:7e3,strength:.6,desat:.55,mountain:.5};Lw=`
#ifdef USE_FOG
{
  float hz = smoothstep(uHazeP.x, uHazeP.y, vFogDepth) * uHazeP.z * HZ_K;
  if (hz > 0.0) {
    HAZE_COL
    float lm = dot(gl_FragColor.rgb, vec3(0.2126, 0.7152, 0.0722));
    gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(lm), hz * uHazeP.w);
    gl_FragColor.rgb = mix(gl_FragColor.rgb, hzCol, hz);
  }
}
#endif`,Dw=`
    vec3 hzV = normalize((vec4(-vViewPosition, 0.0) * viewMatrix).xyz);
    float hzMu = max(dot(hzV, uHazeSun), 0.0);
    vec3 hzCol = mix(uHazeHor, uHazeWarm, pow(hzMu, 1.6));`,Nw=`
    vec3 hzCol = uHazeHor;`});function Ex(s){Yi(s,s&&s.contract===1,"contract: 1 \u304C\u5FC5\u8981");let t=s.meta;Yi(s,t&&t.id&&t.name?.ja&&t.name?.en&&t.season&&t.docTitle,"meta.{id,name.ja,name.en,season,docTitle}"),Yi(s,Array.isArray(s.captions)&&s.captions.length>0,"captions[]"),s.captions.forEach((e,n)=>{Yi(s,e.id&&e.title&&typeof e.a=="number"&&typeof e.b=="number"&&e.a<e.b,`captions[${n}] \u306F {id,title,sub,a<b}`),n&&Yi(s,e.a>=s.captions[n-1].b,`captions[${n}] \u306E\u7A93\u304C\u524D\u306E\u7A93\u3068\u91CD\u306A\u308B`)}),Yi(s,s.timeline&&s.timeline.duration>0&&typeof s.timeline.globalStart=="number","timeline.{globalStart,duration}"),Yi(s,s.ambient&&s.ambient.name&&s.ambient.counts&&s.ambient.counts.normal>0&&s.ambient.counts.light>0,"ambient.{name,counts.{normal,light}}"),Yi(s,s.tuning&&typeof s.tuning=="object","tuning\uFF08\u7A7A\u3067\u3082\u53EF\uFF09"),Yi(s,typeof s.buildScene=="function","buildScene(ctx)")}function Cx(s){for(let t of["frameState","setAmbientCount","setLayoutWeight"])if(typeof s[t]!="function")throw new Error(`\u30B7\u30FC\u30F3\u306B ${t}() \u304C\u3042\u308A\u307E\u305B\u3093`);for(let t of["scene","camera","look","rig"])if(!s[t])throw new Error(`\u30B7\u30FC\u30F3\u306B ${t} \u304C\u3042\u308A\u307E\u305B\u3093`)}function nd(s,{tiled:t,haze:e,tileExclude:n=[],skyUniforms:i}){s.tiled=t===void 0?!0:t,s.hazeCfg=e??{mult:1,...fc},s.tiled&&(s.tileStats=bx(s.scene,{exclude:n,only:typeof s.tiled=="string"?s.tiled:null})),s.haze=s.hazeCfg.mult>0&&i?Ax(s.scene,i,s.hazeCfg):{cfg:s.hazeCfg,materials:0}}function Rx(s){let t=new Set,e=n=>{for(let i of Object.values(n))i&&i.isTexture&&!t.has(i)&&(t.add(i),i.dispose())};s.scene.traverse(n=>{n.geometry?.dispose?.();for(let i of Array.isArray(n.material)?n.material:n.material?[n.material]:[])t.has(i)||(t.add(i),e(i),i.dispose())}),s.scene.clear()}var Yi,pc=pe(()=>{wx();Up();Yi=(s,t,e)=>{if(!t)throw new Error(`\u90FD\u5E02\u30E2\u30B8\u30E5\u30FC\u30EB "${s?.meta?.id??"?"}" \u304C\u5951\u7D04\u3092\u6E80\u305F\u3057\u3066\u3044\u307E\u305B\u3093: ${e}`)}});function Px(s,t,e,n,i){let r=i*i,o=r*i,a=(l,c,h,u)=>.5*(2*c+(-l+h)*i+(2*l-5*c+4*h-u)*r+(-l+3*c-3*h+u)*o);return[a(s[0],t[0],e[0],n[0]),a(s[1],t[1],e[1],n[1]),a(s[2],t[2],e[2],n[2])]}function Fw(s,t,e=0){let n=(i,r)=>Math.sin(s*i+r+e);return[t*(n(1.7,.3)*.6+n(3.1,1.9)*.4),t*(n(1.3,2.1)*.6+n(2.7,.7)*.4),t*(n(1.1,4.2)*.6+n(2.3,3.3)*.4)]}var Uw,dr,Fp=pe(()=>{dc();Uw=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]];dr=class{constructor(t,{shakeAmp:e=0,shakeSeed:n=0,timeWarp:i=null}={}){this.keys=[...t].sort((r,o)=>r.t-o.t),this.shakeAmp=e,this.shakeSeed=n,this.timeWarp=i}sample(t){let e=this.keys;if(this.timeWarp){let x=e[0].t,m=e[e.length-1].t;t=x+(m-x)*this.timeWarp(Sn((t-x)/(m-x)))}let n=e.length,i=Sn(t,e[0].t,e[n-1].t),r=0;for(;r<n-2&&i>e[r+1].t;)r++;let o=e[r],a=e[r+1],l=(i-o.t)/(a.t-o.t),c=(o.ease??bn.smoother)(Sn(l)),h=x=>Math.min(n-1,Math.max(0,x)),u=(x,m)=>e[h(x)][m],d=Px(u(r-1,"pos"),u(r,"pos"),u(r+1,"pos"),u(r+2,"pos"),c),p=Px(u(r-1,"target"),u(r,"target"),u(r+1,"target"),u(r+2,"target"),c),f=o.fov+(a.fov-o.fov)*c;return this.shakeAmp>0&&(d=Uw(d,Fw(t,this.shakeAmp,this.shakeSeed))),{position:d,target:p,fov:f}}}});var zo,Op=pe(()=>{Ie();Fp();dc();zo=class{constructor(t,e,n,{renderer:i}={}){this.meta=t,this.glRenderer=i,this.duration=t.durationSec??15,this.timeline=new Ku({fps:30,duration:this.duration}),this.scene=new Dn,this.camera=new Re(35,16/9,4,4e4),this.titleInfo={englishName:t.englishName,name:t.name,index:e,total:n},this.rig=null,this.tracks={},this.look={grade:{}},this.focusLead=0,this.timeOffset=0,this.showTitle=!0,this.fadeSec=.8}async build(){throw new Error("build() \u3092\u5B9F\u88C5\u3057\u3066\u304F\u3060\u3055\u3044")}sampleTrack(t,e,n=0){return this.tracks[t]?this.tracks[t].sample(e):n}frameState(t){let e=t+this.timeOffset,n=this.rig.sample(e);this.camera.position.set(...n.position),this.camera.lookAt(...n.target),this.camera.fov=n.fov;let i=n.position[0]-n.target[0],r=n.position[1]-n.target[1],o=n.position[2]-n.target[2],a=Math.hypot(i,r,o)+this.focusLead;return this.applyTime?.(e,n),{exposure:this.sampleTrack("exposure",e,1),bloom:this.sampleTrack("bloom",e,.6),bloomRadius:this.sampleTrack("bloomRadius",e,.7),bloomThreshold:this.sampleTrack("bloomThreshold",e,.9),dofAperture:this.sampleTrack("dofAperture",e,1),dofMaxBlur:this.sampleTrack("dofMaxBlur",e,6),focusDistance:a}}}});function id(s=1){let t=s>>>0,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return e.range=(n,i)=>n+(i-n)*e(),e.int=(n,i)=>Math.floor(n+(i-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e}function bi(s=7){let t=(i,r)=>{let o=Math.imul(i,374761393)+Math.imul(r,668265263)+Math.imul(s,2147483647);return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967296},e=i=>i*i*(3-2*i),n=(i,r)=>{let o=Math.floor(i),a=Math.floor(r),l=e(i-o),c=e(r-a),h=t(o,a),u=t(o+1,a),d=t(o,a+1),p=t(o+1,a+1);return h+(u-h)*l+(d-h)*c+(h-u-d+p)*l*c};return n.fbm=(i,r,o=5)=>{let a=0,l=.5,c=1,h=0;for(let u=0;u<o;u++)a+=l*n(i*c,r*c),h+=l,l*=.5,c*=2.03;return a/h},n.ridged=(i,r,o=5)=>{let a=0,l=.5,c=1,h=0;for(let u=0;u<o;u++){let d=1-Math.abs(n(i*c,r*c)*2-1);a+=l*d*d,h+=l,l*=.5,c*=2.03}return a/h},n}var sd=pe(()=>{});var Zn,Ts=pe(()=>{Zn=`
float hash11(float p){ p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash21(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  float a = hash21(i), b = hash21(i + vec2(1., 0.)), c = hash21(i + vec2(0., 1.)), d = hash21(i + vec2(1., 1.));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 5; i++){ s += a * vnoise(p); p = p * 2.03 + vec2(17.1, 9.7); a *= .5; } return s; }
`});function rd(s,{sunDir:t,colors:e}){let n={uSunDir:{value:t.clone().normalize()},uTime:{value:0},uZenith:{value:new s.Color(e.zenith)},uHorizon:{value:new s.Color(e.horizon)},uHorizonWarm:{value:new s.Color(e.horizonWarm)},uSunColor:{value:new s.Color(e.sun)},uCloudLit:{value:new s.Color(e.cloudLit)},uCloudDark:{value:new s.Color(e.cloudDark)},uCloudCover:{value:e.cloudCover??.5},uSunStrength:{value:1}},i=new s.ShaderMaterial({uniforms:n,side:s.BackSide,depthWrite:!1,depthTest:!1,fog:!1,vertexShader:`
      varying vec3 vDir;
      void main(){
        vDir = position;
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p;
      }`,fragmentShader:`
      uniform vec3 uSunDir, uZenith, uHorizon, uHorizonWarm, uSunColor, uCloudLit, uCloudDark;
      uniform float uTime, uCloudCover, uSunStrength;
      varying vec3 vDir;
      ${Zn}
      void main(){
        vec3 d = normalize(vDir);
        float el = d.y;
        float mu = max(dot(d, uSunDir), 0.0);
        float h = clamp(el, 0.0, 1.0);

        vec3 hor = mix(uHorizon, uHorizonWarm, pow(mu, 1.6));
        vec3 col = mix(hor, uZenith, pow(h, 0.42));
        if (el < 0.0) col = mix(hor, hor * 0.55, clamp(-el * 5.0, 0.0, 1.0));

        // \u96F2\uFF08\u7A7A\u306B\u6295\u5F71\u3057\u305F\u5E73\u9762\u4E0A\u306Efbm\u3002\u6C34\u5E73\u7DDA\u3078\u5411\u304B\u3063\u3066\u5727\u7E2E\u30FB\u6E1B\u8870\uFF09
        if (el > 0.0) {
          vec2 cp = d.xz / (el + 0.40);
          cp = cp * 1.6 + vec2(uTime * 0.010, uTime * 0.003);
          vec2 st = vec2(1.0, 1.45);
          float c  = fbm(cp * st);
          float c2 = fbm((cp + uSunDir.xz * 0.06) * st);
          float cov = smoothstep(1.0 - uCloudCover, 1.0 - uCloudCover + 0.32, c);
          cov *= smoothstep(0.0, 0.08, el) * (1.0 - 0.85 * smoothstep(0.45, 0.95, el));
          float edge = clamp((c - c2) * 7.0 + 0.5, 0.0, 1.0);
          float lit = pow(mu, 2.2);
          vec3 cc = mix(uCloudDark, uCloudLit, clamp(edge * 0.6 + lit * 0.9, 0.0, 1.0));
          cc += uSunColor * pow(mu, 8.0) * 0.5 * edge;
          col = mix(col, cc, cov * 0.88);
        }

        // \u592A\u967D
        col += uSunColor * uSunStrength * (pow(mu, 5.0) * 0.18 + pow(mu, 40.0) * 0.8 + smoothstep(0.99965, 0.99992, mu) * 60.0);
        gl_FragColor = vec4(col, 1.0);
      }`}),r=new s.Mesh(new s.SphereGeometry(1e3,48,24),i);return r.frustumCulled=!1,r.renderOrder=-1e3,r.name="sky",{mesh:r,material:i,uniforms:n}}var Bp=pe(()=>{Ts()});function od(s,{uNight:t,uSnow:e}){let n=new s.MeshStandardMaterial({color:16777215,roughness:.8,metalness:0});return n.customProgramCacheKey=()=>"facade-v3",n.onBeforeCompile=i=>{i.uniforms.uNight=t,i.uniforms.uSnow=e,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aBld; attribute vec4 aPar;
        varying vec4 vBld; varying vec4 vPar; varying vec3 vWP; varying vec3 vON; varying float vTopDist;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vBld = aBld; vPar = aPar; vON = normal;
        mat4 fim = instanceMatrix;
        vWP = (modelMatrix * fim * vec4(transformed, 1.0)).xyz;
        vTopDist = (1.0 - position.y) * fim[1][1];`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uNight, uSnow;
        varying vec4 vBld; varying vec4 vPar; varying vec3 vWP; varying vec3 vON; varying float vTopDist;
        ${Zn}
        vec3 wallPalette(float kind, float pr){
          int i = int(floor(pr * 8.0));
          if (kind > 0.5 && kind < 1.5) { // \u30EC\u30F3\u30AC\u30FB\u30BF\u30A4\u30EB
            if (i == 0) return vec3(0.34, 0.15, 0.11); if (i == 1) return vec3(0.42, 0.22, 0.15);
            if (i == 2) return vec3(0.30, 0.17, 0.13); if (i == 3) return vec3(0.48, 0.30, 0.20);
            if (i == 4) return vec3(0.36, 0.26, 0.22); if (i == 5) return vec3(0.52, 0.36, 0.26);
            if (i == 6) return vec3(0.27, 0.15, 0.14); return vec3(0.40, 0.20, 0.14);
          }
          if (kind > 2.5 && kind < 3.5) { // \u96C6\u5408\u4F4F\u5B85\uFF08\u6DE1\u8272\u306E\u5439\u4ED8\u3051\u30FB\u30BF\u30A4\u30EB\uFF09
            if (i == 0) return vec3(0.72, 0.68, 0.60); if (i == 1) return vec3(0.62, 0.64, 0.66);
            if (i == 2) return vec3(0.70, 0.62, 0.52); if (i == 3) return vec3(0.55, 0.58, 0.55);
            if (i == 4) return vec3(0.78, 0.76, 0.72); if (i == 5) return vec3(0.66, 0.58, 0.50);
            if (i == 6) return vec3(0.82, 0.80, 0.76); return vec3(0.50, 0.52, 0.58);
          }
          // \u4E8B\u52D9\u6240\u30FB\u5546\u696D\uFF08\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\u3001\u77F3\u5F35\u308A\u3001\u91D1\u5C5E\u30D1\u30CD\u30EB\u3001\u767D\u30BF\u30A4\u30EB\u3001\u6FC3\u8272\u30D1\u30CD\u30EB\uFF09
          if (i == 0) return vec3(0.58, 0.58, 0.60); if (i == 1) return vec3(0.66, 0.62, 0.55);
          if (i == 2) return vec3(0.36, 0.38, 0.42); if (i == 3) return vec3(0.72, 0.70, 0.66);
          if (i == 4) return vec3(0.48, 0.45, 0.42); if (i == 5) return vec3(0.52, 0.56, 0.62);
          if (i == 6) return vec3(0.80, 0.79, 0.76); return vec3(0.28, 0.30, 0.34);
        }
        vec3 signCol(float h){
          int i = int(floor(h * 6.0));
          if (i == 0) return vec3(0.55, 0.08, 0.07); if (i == 1) return vec3(0.88, 0.86, 0.80);
          if (i == 2) return vec3(0.08, 0.12, 0.30); if (i == 3) return vec3(0.10, 0.28, 0.16);
          if (i == 4) return vec3(0.12, 0.12, 0.13); return vec3(0.75, 0.50, 0.12);
        }`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 fEmis = vec3(0.0); float fRough = 0.85; float fMetal = 0.0; float fH = 0.0;
        {
          vec3 N = normalize(vON);
          float seed = vBld.x, kind = vBld.y;
          float pr = fract(seed * 7.13);
          float dCam = length(vWP - cameraPosition);
          float lod = 1.0 - smoothstep(90.0, 420.0, dCam);              // \u8FD1\u666F\u30C7\u30A3\u30C6\u30FC\u30EB\u306E\u91CF
          vec3 base = wallPalette(kind, pr);
          vec3 snowC = vec3(0.95, 0.96, 0.985);
          float us = clamp(uSnow, 0.0, 1.0);
          float groundSnow = 1.0 - smoothstep(0.35, 1.1, vWP.y);          // \u8DB3\u5143\u306B\u5439\u304D\u6E9C\u307E\u3063\u305F\u96EA
          bool plant = kind > 4.5 && kind < 5.5;
          if (N.y > 0.45) {
            // \u5C4B\u6839\uFF1A\u539A\u307F\u306B\u30E0\u30E9\u306E\u3042\u308B\u7A4D\u96EA\uFF08\u6A5F\u5668\u307E\u308F\u308A\u306F\u5439\u304D\u6E9C\u307E\u308A\uFF09
            float sn = 0.9 + (0.12 * vnoise(vWP.xz * 0.45) + 0.04 * vnoise(vWP.xz * 3.1)) * (1.0 - smoothstep(150.0, 700.0, dCam));
            diffuseColor.rgb = mix(base * 0.8, snowC * sn, us);
            fRough = 0.6;
          } else if (plant || kind > 5.5) {
            float u = (abs(N.x) > 0.5 ? vWP.z : vWP.x);
            vec3 wall = base * (kind > 5.5 ? 0.9 : 0.78);
            if (plant) {                                                   // \u5C4B\u4E0A\u8A2D\u5099\uFF1A\u30EB\u30FC\u30D0\u30FC
              float lv = fract(vWP.y * 6.0);
              wall *= 0.80 + 0.30 * smoothstep(0.35, 0.6, lv) * (1.0 - smoothstep(0.85, 1.0, lv));
              fH -= 0.03 * smoothstep(0.35, 0.6, lv);
            }
            float cap = 1.0 - smoothstep(0.1, 0.6, vTopDist);
            wall = mix(wall, snowC, cap * 0.95 * us);
            wall *= 0.86 + 0.2 * vnoise(vec2(u * 0.7, vWP.y * 0.6) + seed * 40.0);
            diffuseColor.rgb = wall; fRough = plant ? 0.5 : 0.85; fMetal = plant ? 0.35 : 0.0;
          } else if (N.y > -0.5) {
            float u = (abs(N.x) > 0.5 ? vWP.z : vWP.x) + seed * 53.0;
            float cw = vPar.x, ch = vPar.y;
            vec2 q = vec2(u / cw, vWP.y / ch);
            vec2 cell = floor(q), f = fract(q);
            float fw = max(fwidth(q.x), fwidth(q.y));
            float aa = smoothstep(0.12, 0.5, fw);                        // \u9060\u304F\u3067\u306F\u7A93\u30D1\u30BF\u30FC\u30F3\u3092\u5E73\u5747\u5316
            bool glassK = kind > 1.5 && kind < 2.5;
            bool brick = kind > 0.5 && kind < 1.5;
            bool resid = kind > 2.5 && kind < 3.5;
            float ww = vPar.z, wh = vPar.w;
            float x0 = (1.0 - ww) * 0.5, y0 = (1.0 - wh) * 0.45;
            vec2 wUV = vec2((f.x - x0) / ww, (f.y - y0) / wh);
            float inWin = step(0.0, wUV.x) * step(wUV.x, 1.0) * step(0.0, wUV.y) * step(wUV.y, 1.0);
            if (glassK) inWin *= step(0.035, f.x);
            float inWinA = mix(inWin, ww * wh, aa);

            // ---- \u58C1\u9762\uFF08\u7D20\u6750\u30FB\u968E\u3054\u3068\u306E\u8272\u306E\u63FA\u3089\u304E\u30FB\u76EE\u5730\uFF09
            vec3 wall = base * (0.94 + 0.12 * hash21(vec2(cell.y, seed * 17.0)));
            if (brick) {
              float bj = abs(fract(vWP.y / 0.25) - 0.5) * 2.0;
              float mortar = smoothstep(0.86, 0.96, bj) * (1.0 - aa);
              float bx = abs(fract((u + 0.25 * floor(vWP.y / 0.25)) / 0.5) - 0.5) * 2.0;
              mortar = max(mortar, smoothstep(0.9, 0.97, bx) * (1.0 - aa) * 0.8);
              wall = mix(wall, vec3(0.55, 0.5, 0.45), mortar * 0.6) * (0.88 + 0.22 * vnoise(vec2(u * 2.0, vWP.y * 4.0)));
            } else {
              wall *= 0.88 + 0.24 * vnoise(vec2(u * 0.12, vWP.y * 0.1) + seed * 10.0);
              float pj = smoothstep(0.02, 0.0, abs(fract(u / 1.5) - 0.5) - 0.495) * (1.0 - aa);
              wall *= 1.0 - 0.12 * pj;
            }
            // \u30D4\u30E9\u30B9\u30BF\u30FC\uFF08\u67F1\u578B\uFF09\u30FB\u30D9\u30EB\u30C8\u30B3\u30FC\u30B9\u30FB\u30B3\u30FC\u30CB\u30B9\uFF1A\u7ACB\u4F53\u611F\u3068\u9670\u5F71
            float usePil = step(0.45, fract(seed * 5.3)) * (resid ? 0.0 : 1.0);
            float pd = abs(fract(q.x / 4.0 + 0.5) - 0.5) * 4.0;
            float pil = (1.0 - smoothstep(0.16, 0.2, pd)) * usePil * (glassK ? 0.0 : 1.0);
            wall = mix(wall, wall * 1.1 + 0.02, pil);
            fH += pil * 0.16;
            float bn = 3.0 + floor(fract(seed * 9.1) * 4.0);
            float belt = step(mod(cell.y, bn), 0.5) * (1.0 - smoothstep(0.05, 0.1, f.y)) * (glassK ? 0.0 : 1.0);
            wall = mix(wall, wall * 1.15 + 0.03, belt); fH += belt * 0.12;
            float cornice = 1.0 - smoothstep(0.5, 0.95, vTopDist);
            float undercor = smoothstep(0.95, 1.1, vTopDist) * (1.0 - smoothstep(1.1, 1.8, vTopDist));
            wall = mix(wall * (1.0 - 0.18 * undercor), wall * 1.12 + 0.03, cornice);
            fH += cornice * 0.28;
            if (resid) {                                                   // \u30D0\u30EB\u30B3\u30CB\u30FC\u306E\u8170\u58C1\u30FB\u30B9\u30E9\u30D6
              float slab = smoothstep(0.0, 0.1, f.y) * (1.0 - smoothstep(0.12, 0.22, f.y));
              wall = mix(wall, wall * 1.25, slab); fH += slab * 0.2;
              inWin *= step(0.0, f.y - 0.18); inWinA *= step(0.0, f.y - 0.18);
            }
            // \u7A93\u53F0\uFF08\u96EA\u304C\u7A4D\u3082\u308B\uFF09\u30FB\u307E\u3050\u3055
            float sill = step(y0 - 0.075, f.y) * step(f.y, y0) * step(x0 - 0.035, f.x) * step(f.x, 1.0 - x0 + 0.035) * (glassK ? 0.0 : 1.0);
            float sillSnow = sill * step(0.4, hash21(cell + seed * 7.7)) * us;
            wall = mix(wall, wall * 1.12 + 0.04, sill);
            wall = mix(wall, snowC, sillSnow * 0.92);
            fH += sill * 0.14 + sillSnow * 0.06;
            float lintel = step(y0 + wh, f.y) * step(f.y, y0 + wh + 0.07) * step(x0 - 0.03, f.x) * step(f.x, 1.0 - x0 + 0.03) * (glassK ? 0.0 : 1.0);
            wall = mix(wall, wall * 1.12 + 0.03, lintel);
            // \u96E8\u3060\u308C\u30FB\u8DB3\u5143\u306E\u6C5A\u308C\u30FB\u5916\u58C1\u306E\u98A8\u5316
            float streak = vnoise(vec2(u * 2.3, vWP.y * 0.05 + seed * 3.0));
            float stain = smoothstep(0.55, 0.9, streak) * (1.0 - smoothstep(0.0, 0.5, f.y)) * step(f.y, y0 + 0.05);
            wall *= 1.0 - 0.24 * stain * lod;
            wall *= 1.0 - 0.28 * (1.0 - smoothstep(0.0, 9.0, vWP.y));
            wall *= 0.93 + 0.1 * vnoise(vWP.xy * 0.35 + vWP.zy * 0.35);
            // \u5C4B\u4E0A\u7E01\u30FB\u5730\u4E0A\u306E\u96EA
            float cap = 1.0 - smoothstep(0.30, 0.8, vTopDist);
            wall = mix(wall, snowC, max(cap * 0.9, groundSnow) * us);

            // ---- \u7A93
            float gh = hash21(cell + seed * 13.7), gh2 = hash21(cell + seed * 5.5), gh3 = hash21(cell + 3.3);
            float frameW = 0.075;
            float inner = step(frameW, wUV.x) * step(wUV.x, 1.0 - frameW) * step(frameW * 1.5, wUV.y) * step(wUV.y, 1.0 - frameW * 1.5);
            float mull = (ww * cw > 1.6 && !glassK) ? (1.0 - step(0.022, abs(wUV.x - 0.5))) : 0.0;
            float transom = (wh * ch > 1.9 && !glassK) ? (1.0 - step(0.02, abs(wUV.y - 0.72))) : 0.0;
            float frameM = inWin * (1.0 - inner * (1.0 - max(mull, transom)));
            float glassM = inWin * (1.0 - frameM);
            vec3 frameC = brick ? vec3(0.10, 0.09, 0.08) : (glassK ? vec3(0.17, 0.18, 0.2) : mix(vec3(0.72, 0.72, 0.7), vec3(0.2, 0.2, 0.22), step(0.5, fract(seed * 3.3))));
            // \u30AC\u30E9\u30B9\uFF1A\u7A93\u3054\u3068\u306B\u53CD\u5C04\u91CF\u304C\u9055\u3044\u30011\u679A\u306E\u4E2D\u3067\u3082\u4E0A\u304C\u660E\u308B\u3044\uFF08\u7A7A\u306E\u5199\u308A\u8FBC\u307F\uFF09
            float refl = glassK ? 0.62 : (resid ? 0.2 : 0.4);
            vec3 skyG = mix(vec3(0.10, 0.13, 0.19), vec3(0.34, 0.43, 0.56), smoothstep(0.0, 1.0, wUV.y));
            vec3 glassC = mix(vec3(0.045, 0.058, 0.08), vec3(0.15, 0.19, 0.25), smoothstep(0.0, 90.0, vWP.y));
            glassC = mix(glassC, skyG, refl * (0.55 + 0.7 * gh));
            glassC *= 0.8 + 0.4 * gh3;
            float ao = 1.0 - 0.5 * (1.0 - smoothstep(0.0, 0.22, 1.0 - wUV.y)) - 0.25 * (1.0 - smoothstep(0.0, 0.14, wUV.x));  // \u7A93\u306E\u5965\u307E\u308A(\u5E87\u30FB\u7E26\u67A0\u306E\u5F71)
            ao = mix(1.0, ao, lod);
            // \u30D6\u30E9\u30A4\u30F3\u30C9\u30FB\u30AB\u30FC\u30C6\u30F3
            float blind = step(0.74, gh2) * glassM;
            float blindH = 0.25 + 0.75 * gh3;
            float inBlind = blind * step(1.0 - blindH, wUV.y);
            vec3 blindC = mix(vec3(0.70, 0.66, 0.56), vec3(0.78, 0.78, 0.76), step(0.5, gh)) * (0.75 + 0.3 * gh3);
            // \u70B9\u706F\uFF1A\u968E\u3068\u5217\u306E\u307E\u3068\u307E\u308A\u3067\u76F8\u95A2\u3055\u305B\u308B
            float r = 0.62 * hash21(vec2(cell.y, floor(cell.x / 6.0)) + seed * 91.0) + 0.38 * hash21(cell + seed * 91.0);
            float litP = clamp(mix(0.05, 0.55, uNight) * (0.4 + vBld.z), 0.0, 0.92);
            float lit = step(r, litP);
            float coolP = (kind < 0.5 || glassK) ? 0.7 : 0.15;
            float cool = step(hash21(vec2(cell.y, seed) * 3.1), coolP);
            vec3 lc = mix(vec3(1.0, 0.68, 0.38), vec3(0.80, 0.90, 1.0), cool) * (0.7 + 0.6 * hash21(cell + 4.3));
            float room = 0.55 + 0.45 * smoothstep(0.0, 1.0, wUV.y) * (0.7 + 0.3 * hash21(cell + 8.1));   // \u5BA4\u5185\u306E\u5929\u4E95\u7167\u660E\u306E\u660E\u6697

            // ---- 1\u968E\uFF1A\u5E97\u8217\u30AC\u30E9\u30B9\u30FB\u51FA\u5165\u53E3\u30FB\u770B\u677F\u5E2F\uFF08\u4F4F\u5B85\u306F\u5C0F\u3055\u306A\u51FA\u5165\u53E3\u306E\u307F\uFF09
            bool gfl = vWP.y < 4.4 && !resid;
            vec3 col = wall; float isGlass = 0.0; float rough = 0.8; float metal = 0.0;
            if (gfl) {
              float bw = 3.2 + 2.2 * fract(seed * 3.7);
              float bi = floor(u / bw), gx = fract(u / bw);
              float plinth = 1.0 - smoothstep(0.65, 0.75, vWP.y);
              float shopG = step(0.06, gx) * step(gx, 0.94) * step(0.75, vWP.y) * step(vWP.y, 3.3);
              float door = step(0.84, hash21(vec2(bi, seed * 9.0))) * step(0.18, gx) * step(gx, 0.82) * step(vWP.y, 2.5);
              float sgn = step(3.35, vWP.y) * step(vWP.y, 4.25);
              vec3 sc = signCol(hash21(vec2(floor(u / (bw * 2.0)), seed * 4.0)));
              col = mix(col, col * 0.62, plinth);
              col = mix(col, sc, sgn * 0.95);
              fH += sgn * 0.12 - shopG * 0.12;
              float gl = max(shopG, door);
              col = mix(col, mix(vec3(0.05, 0.065, 0.085), vec3(0.2, 0.24, 0.3), (vWP.y - 0.75) / 2.5 * refl * 2.0), gl);
              col = mix(col, frameC, gl * (1.0 - step(0.04, min(gx, 1.0 - gx)) * step(0.04, abs(vWP.y - 2.0)) * step(abs(vWP.y - 3.3), 0.0)) * 0.0);
              isGlass = gl; rough = mix(0.8, 0.06, gl); metal = gl * 0.5;
              float shopLit = step(0.32, hash21(vec2(bi, seed))) * gl;
              vec3 shopC = mix(vec3(1.0, 0.76, 0.5), vec3(0.95, 0.97, 1.0), step(0.6, hash21(vec2(bi, seed + 1.0))));
              fEmis = shopLit * shopC * (0.25 + 0.95 * uNight) * (0.55 + 0.45 * (1.0 - (vWP.y - 0.75) / 2.6));
              fEmis += sgn * sc * (0.05 + 0.55 * uNight);
              if (door > 0.5) { col = mix(col, vec3(0.08, 0.075, 0.07), 0.6); }
            } else {
              vec3 wc = mix(wall, frameC, frameM * (1.0 - aa));
              wc = mix(wc, glassC * ao, glassM);
              wc = mix(wc, blindC * (0.5 + 0.5 * ao), inBlind);
              col = mix(wall, wc, step(0.001, inWinA));
              col = mix(col, mix(wall, vec3(0.1), ww * wh * 0.85), aa * 0.0);
              isGlass = glassM * (1.0 - inBlind) * (1.0 - max(cap, groundSnow * 0.6));
              rough = mix(0.8, 0.06, isGlass); rough = mix(rough, 0.9, inBlind);
              metal = isGlass * (glassK ? 0.85 : 0.4);
              float glow = glassM * lit * (0.2 + 0.8 * uNight) * (1.0 - cap);
              fEmis = glow * lc * room * ao * mix(1.0, 0.7, inBlind) * (inBlind > 0.5 ? 1.0 : 1.0);
              fH -= inWin * 0.14 * (1.0 - frameM);                          // \u7A93\u9762\u306E\u5965\u307E\u308A
              fH += frameM * 0.03;
              // \u9060\u65B9\uFF1A\u7A93\u306E\u5E73\u5747\u8272\u3078\u30D5\u30A7\u30FC\u30C9\uFF08\u7A93\u30D1\u30BF\u30FC\u30F3\u306E\u9762\u30CE\u30A4\u30BA\u3092\u6291\u3048\u308B\uFF09
              col = mix(col, mix(wall, glassC, ww * wh * 0.85), aa);
              fEmis = mix(fEmis, lc * lit * (0.2 + 0.8 * uNight) * ww * wh * 0.8, aa);
            }
            diffuseColor.rgb = col;
            fRough = rough; fMetal = metal;
            fH *= lod * (1.0 - aa);
          } else {
            diffuseColor.rgb = base * 0.6;
          }
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = fRough;`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        metalnessFactor = fMetal;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          vec3 sX = dFdx(-vViewPosition), sY = dFdy(-vViewPosition);
          float px = length(sX) + 1e-5;
          float hx = clamp(dFdx(fH), -1.2 * px, 1.2 * px), hy = clamp(dFdy(fH), -1.2 * px, 1.2 * px);
          vec3 R1 = cross(sY, normal), R2 = cross(normal, sX);
          float det = dot(sX, R1);
          normal = normalize(abs(det) * normal - sign(det) * (hx * R1 + hy * R2));
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += fEmis;`)},n}function Ix(s){let t=[-.5,0,-.5],e=[.5,0,-.5],n=[0,1,-.5],i=[-.5,0,.5],r=[.5,0,.5],o=[0,1,.5],a=[t,n,e,i,r,o,t,i,o,t,o,n,e,n,o,e,o,r,t,e,r,t,r,i],l=new s.BufferGeometry;return l.setAttribute("position",new s.Float32BufferAttribute(a.flat(),3)),l.computeVertexNormals(),l}function Lx(s){let t=new s.CylinderGeometry(.5,.5,1,14,1,!1);return t.translate(0,.5,0),t}function Ow(s,t){let e=n=>{let i=Math.sin((t+n)*12.9898)*43758.5453;return i-Math.floor(i)};switch(s){case 2:return[2.4+e(1)*1.4,3.6+e(2)*.6,.94,.55+e(3)*.2];case 3:return[2.6+e(1)*1,2.8+e(2)*.3,.55+e(3)*.15,.5+e(4)*.12];case 4:return[3.6+e(1)*1.6,3.8+e(2)*.8,.45+e(3)*.2,.7];case 1:return[2.2+e(1)*.8,3.4+e(2)*.6,.5+e(3)*.15,.6+e(4)*.12];default:return[2.7+e(1)*1.2,3.5+e(2)*.5,.62+e(3)*.2,.55+e(4)*.15]}}var As,wi,ad=pe(()=>{Ts();As=class{constructor(t,e,n=6e4,i=null){this.THREE=t,this.material=e,this.capacity=n,this.n=0,this.geometry=i,this.mats=new Float32Array(n*16),this.bld=new Float32Array(n*4),this.par=new Float32Array(n*4),this._m=new t.Matrix4,this._p=new t.Vector3,this._q=new t.Quaternion,this._s=new t.Vector3}add(t,e,n,i,r,o,a,l,c=.5,h=0,u=null){if(this.n>=this.capacity)return;let{_m:d,_p:p,_q:f,_s:x}=this;p.set(t,e,n),x.set(i,r,o),f.setFromAxisAngle(this.THREE.Object3D.DEFAULT_UP,h),d.compose(p,f,x),d.toArray(this.mats,this.n*16);let m=this.n*4;this.bld[m]=l,this.bld[m+1]=a,this.bld[m+2]=c,this.bld[m+3]=0;let g=u??Ow(a,l);this.par[m]=g[0],this.par[m+1]=g[1],this.par[m+2]=g[2],this.par[m+3]=g[3],this.n++}build({castShadow:t=!0}={}){let e=this.THREE,n=this.geometry??(()=>{let r=new e.BoxGeometry(1,1,1);return r.translate(0,.5,0),r})();n.setAttribute("aBld",new e.InstancedBufferAttribute(this.bld.slice(0,this.n*4),4)),n.setAttribute("aPar",new e.InstancedBufferAttribute(this.par.slice(0,this.n*4),4));let i=new e.InstancedMesh(n,this.material,this.n);return i.instanceMatrix.array.set(this.mats.subarray(0,this.n*16)),i.instanceMatrix.needsUpdate=!0,i.castShadow=t,i.receiveShadow=!0,i.frustumCulled=!1,i}};wi=class{constructor(t,e){this.THREE=t,this.material=e,this.items=[]}add(t,e,n,i=n){this.items.push([t,e,n,i])}build({castShadow:t=!1,sides:e=6}={}){let n=this.THREE,i=new n.CylinderGeometry(1,1,1,e,1,!1),r=new n.InstancedMesh(i,this.material,this.items.length),o=new Float32Array(this.items.length),a=new n.Matrix4,l=new n.Quaternion,c=new n.Vector3(0,1,0),h=new n.Vector3,u=new n.Vector3,d=new n.Vector3,p=new n.Vector3,f=new n.Vector3;this.items.forEach(([m,g,_,y],M)=>{h.set(...m),u.set(...g),d.subVectors(u,h);let b=d.length();d.normalize(),l.setFromUnitVectors(c,d),p.addVectors(h,u).multiplyScalar(.5),f.set(_,b,_),a.compose(p,l,f),r.setMatrixAt(M,a),o[M]=y/_}),i.setAttribute("aTaper",new n.InstancedBufferAttribute(o,1));let x=this.material;if(!x.userData.beamTaper){x.userData.beamTaper=!0;let m=x.onBeforeCompile;x.onBeforeCompile=(_,y)=>{m?.(_,y),_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
attribute float aTaper;`).replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
transformed.xz *= mix(1.0, aTaper, position.y + 0.5);
#endif`)};let g=x.customProgramCacheKey?.bind(x);x.customProgramCacheKey=()=>(g?g():"")+"|taper",x.needsUpdate=!0}return r.instanceMatrix.needsUpdate=!0,r.castShadow=t,r.receiveShadow=!1,r.frustumCulled=!1,r}}});function Dx(){let s=bi(11),t=bi(23),e=bi(41);return(n,i)=>{let r=Math.hypot(n,i),o=Math.atan2(i,n),a=Math.abs((o-2.75+Math.PI*3)%(Math.PI*2)-Math.PI),l=Math.exp(-((a/.95)**2)),c=n+1300*(t.fbm(n*18e-5,i*18e-5,3)-.5)*2,h=i+1300*(t.fbm(n*18e-5+7.3,i*18e-5-2.1,3)-.5)*2,u=s.ridged(c*42e-5+3.1,h*42e-5-1.7,6),d=s.fbm(n*9e-4,i*9e-4,4),p=Ti(6500,15e3,r)*l*(110+560*u);p+=Ti(14e3,3e4,r)*l*380*e.ridged(c*2e-4+9.1,h*2e-4+4.4,5);for(let f of Bw){let x=Math.cos(f.rot),m=Math.sin(f.rot),g=n-f.x,_=i-f.z,y=(g*x+_*m)/f.sx,M=(-g*m+_*x)/f.sz,b=y*y+M*M;if(b>16)continue;let w=Math.exp(-Math.pow(b,.82)*1.15),v=.66+.62*s.ridged(c*8e-4+f.x*3e-4,h*8e-4+f.z*3e-4,5);p+=f.h*w*(f.h>400?v:.86+.28*d)}return p+=(e.ridged(n*.0026,i*.0026,4)-.3)*Math.min(95,p*.13),p=Math.max(0,p+(s.fbm(n*.012,i*.012,3)-.5)*Math.min(14,p*.03)),p}}function ld(s,{heightFn:t,y:e=-4,rInner:n=2500,rOuter:i=44e3,rings:r=420,segs:o=820,thA:a=.55,thB:l=3.95,snowLine:c=260}){let h=(r+1)*(o+1),u=new Float32Array(h*3),d=new Float32Array(h),p=Math.log(i/n),f=0;for(let v=0;v<=r;v++){let S=n*Math.exp(p*v/r);for(let C=0;C<=o;C++){let A=a+(l-a)*C/o,R=Math.cos(A)*S,D=Math.sin(A)*S,z=Ti(0,.18,C/o)*Ti(0,.18,1-C/o),N=t(R,D)*(0+z);u[f++]=R,u[f++]=N,u[f++]=D,d[v*(o+1)+C]=N}}let x=new Uint32Array(r*o*6),m=0;for(let v=0;v<r;v++)for(let S=0;S<o;S++){let C=v*(o+1)+S,A=C+1,R=C+o+1,D=R+1;x[m++]=C,x[m++]=R,x[m++]=A,x[m++]=A,x[m++]=R,x[m++]=D}let g=new s.BufferGeometry;g.setAttribute("position",new s.BufferAttribute(u,3)),g.setIndex(new s.BufferAttribute(x,1)),g.computeVertexNormals();let _=g.attributes.normal,y=new Float32Array(h*3),M=bi(31);for(let v=0;v<h;v++){let S=u[v*3],C=u[v*3+2],A=d[v],R=1-_.getY(v),D=M.fbm(S*.0011,C*.0011,4),z=M.fbm(S*.006+5,C*.006,3),N=_.getX(v)*-.66+_.getZ(v)*.71,O=Ti(c-140,c+280,A+(D-.5)*220-N*70)*(1-Ti(.12,.42,R)*.8),W=Ti(15,130,A)*(1-Ti(850,1150,A+(D-.5)*200)),H=Ti(.22,.5,R)*Ti(300,800,A),st=[.86,.88,.93],X=[.2,.235,.235],Z=[.3,.285,.29],nt=[.93,.945,.975],Et=[0,0,0];for(let ot=0;ot<3;ot++){let G=st[ot]+(X[ot]-st[ot])*W;G+=(Z[ot]-G)*H*.7,G=G+(nt[ot]-G)*O,Et[ot]=G*(.9+.2*z)}y[v*3]=Et[0],y[v*3+1]=Et[1],y[v*3+2]=Et[2]}g.setAttribute("color",new s.BufferAttribute(y,3));let b=new s.MeshStandardMaterial({vertexColors:!0,roughness:.93,metalness:0});b.customProgramCacheKey=()=>"mountain-v1",b.onBeforeCompile=v=>{v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP;
${Zn}`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          // \u6A39\u6797\u306E\u7C92\u72B6\u611F\u30FB\u96EA\u9762\u306E\u3046\u306D\u308A\uFF08\u8DDD\u96E2\u306B\u5FDC\u3058\u3066\u5F31\u3081\u308B\uFF09
          float d = length(vWP - cameraPosition);
          float fadeD = 1.0 - smoothstep(4000.0, 16000.0, d);
          float tex = 0.55 * vnoise(vWP.xz * 0.045) + 0.3 * vnoise(vWP.xz * 0.16) + 0.15 * vnoise(vWP.xz * 0.6);
          float lum = dot(diffuseColor.rgb, vec3(0.333));
          float forestness = 1.0 - smoothstep(0.38, 0.7, lum);
          diffuseColor.rgb *= 1.0 + (tex - 0.5) * (0.5 * forestness + 0.12) * (0.4 + 0.6 * fadeD);
        }`)};let w=new s.Mesh(g,b);return w.position.y=e,w.castShadow=!1,w.receiveShadow=!1,w.frustumCulled=!1,w.name="mountains",w}function Nx(s,{size:t=9e4,y:e=-40}){let n=new s.PlaneGeometry(t,t,1,1);n.rotateX(-Math.PI/2);let i=new s.MeshStandardMaterial({color:14212584,roughness:.95}),r=new s.Mesh(n,i);return r.position.y=e,r.frustumCulled=!1,r.name="far-plain",r}var Ti,Bw,zp=pe(()=>{sd();Ts();Ti=(s,t,e)=>{let n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)},Bw=[{name:"\u624B\u7A32\u5C71",x:-12800,z:-3300,h:1023,sx:3600,sz:2700,rot:.5},{name:"\u4E09\u89D2\u5C71\u301C\u5965\u624B\u7A32",x:-9e3,z:-1e3,h:560,sx:2400,sz:1500,rot:.8},{name:"\u5186\u5C71",x:-4500,z:1300,h:226,sx:900,sz:700,rot:.3},{name:"\u85FB\u5CA9\u5C71",x:-2500,z:3650,h:531,sx:1500,sz:1100,rot:2.4},{name:"\u4E09\u89D2\u5C71\u30FB\u8352\u4E95\u5C71\u65B9\u9762",x:-6200,z:600,h:311,sx:1100,sz:800,rot:.2},{name:"\u7A7A\u6CBC\u5CB3",x:-14800,z:7400,h:1099,sx:3200,sz:2400,rot:2.2},{name:"\u672D\u5E4C\u5CB3",x:-16500,z:9600,h:1293,sx:3800,sz:2600,rot:2},{name:"\u6075\u5EAD\u5CB3\u65B9\u9762",x:-8e3,z:22e3,h:1320,sx:4500,sz:3500,rot:.6},{name:"\u4F59\u5E02\u5CB3\u65B9\u9762",x:-34e3,z:-4e3,h:1488,sx:6500,sz:4500,rot:.2}]});function ai(s,{positions:t,colors:e,sizes:n,fogDensity:i=1e-4,minPx:r=1.5,maxPx:o=48}){let a=new s.BufferGeometry;a.setAttribute("position",new s.BufferAttribute(t,3)),a.setAttribute("aColor",new s.BufferAttribute(e,3)),a.setAttribute("aSize",new s.BufferAttribute(n,1));let l={uProj:{value:1e3},uFog:{value:i},uGain:{value:1},uMinPx:{value:r},uMaxPx:{value:o}},c=new s.ShaderMaterial({uniforms:l,transparent:!0,depthWrite:!1,blending:s.AdditiveBlending,vertexShader:`
      attribute vec3 aColor; attribute float aSize;
      uniform float uProj, uFog, uGain, uMinPx, uMaxPx;
      varying vec3 vCol;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float dist = max(-mv.z, 0.1);
        float px = aSize * uProj / dist;
        float fade = clamp(px / uMinPx, 0.0, 1.0);          // \u5C0F\u3055\u3059\u304E\u308B\u70B9\u306F\u6697\u304F\u3057\u3066\u9762\u7A4D\xD7\u660E\u308B\u3055\u3092\u4FDD\u3064
        gl_PointSize = clamp(px, uMinPx, uMaxPx);
        float fog = exp(-pow(uFog * dist, 2.0));
        vCol = aColor * uGain * fog * fade * fade;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying vec3 vCol;
      void main(){
        vec2 q = gl_PointCoord * 2.0 - 1.0;
        float d2 = dot(q, q);
        if (d2 > 1.0) discard;
        float a = exp(-d2 * 3.5) ;
        gl_FragColor = vec4(vCol * a, 1.0);
      }`}),h=new s.Points(a,c);return h.frustumCulled=!1,{points:h,geo:a,uniforms:l,material:c}}function Ux(s,{count:t=9e3,box:e=160,fall:n=3.2,wind:i=[2.2,.8],size:r=.11,bright:o=1}){let a=new Float32Array(t*4),l=12345,c=()=>(l=Math.imul(l,1664525)+1013904223>>>0)/4294967296;for(let f=0;f<t;f++)a[f*4]=c(),a[f*4+1]=c(),a[f*4+2]=c(),a[f*4+3]=c();let h=new s.BufferGeometry;h.setAttribute("position",new s.BufferAttribute(new Float32Array(t*3),3)),h.setAttribute("aSeed",new s.BufferAttribute(a,4));let u={uTime:{value:0},uCam:{value:new s.Vector3},uBox:{value:e},uFall:{value:n},uWind:{value:new s.Vector2(i[0],i[1])},uSize:{value:r},uProj:{value:1e3},uBright:{value:o},uFog:{value:1e-4},uTint:{value:new s.Color(1,.92,.88)}},d=new s.ShaderMaterial({uniforms:u,transparent:!0,depthWrite:!1,blending:s.AdditiveBlending,vertexShader:`
      attribute vec4 aSeed;
      uniform float uTime, uBox, uFall, uSize, uProj, uFog;
      uniform vec3 uCam; uniform vec2 uWind;
      varying float vA;
      void main(){
        float spd = 0.65 + 0.7 * aSeed.w;
        vec3 p = aSeed.xyz * uBox;
        p += vec3(uWind.x * uTime, -uFall * spd * uTime, uWind.y * uTime);
        p.x += sin(uTime * (0.9 + aSeed.w) + aSeed.x * 40.0) * 0.6;
        p.z += cos(uTime * (0.7 + aSeed.z) + aSeed.y * 40.0) * 0.6;
        vec3 wp = uCam + mod(p - uCam + 0.5 * uBox, uBox) - 0.5 * uBox;
        vec4 mv = viewMatrix * vec4(wp, 1.0);
        float dist = max(-mv.z, 0.1);
        float sz = uSize * (0.5 + 1.3 * aSeed.w * aSeed.w);
        gl_PointSize = clamp(sz * uProj / dist, 1.0, 9.0);
        float near = smoothstep(1.5, 6.0, dist);
        float far  = 1.0 - smoothstep(0.55 * uBox, 0.5 * uBox + 20.0, dist);
        vA = near * far * (0.35 + 0.65 * aSeed.w);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uBright; uniform vec3 uTint;
      varying float vA;
      void main(){
        vec2 q = gl_PointCoord * 2.0 - 1.0;
        float d = length(q);
        float a = smoothstep(1.0, 0.15, d);
        gl_FragColor = vec4(uTint * uBright * vA * a * a, 1.0);
      }`}),p=new s.Points(h,d);return p.frustumCulled=!1,{points:p,uniforms:u,material:d}}var cd=pe(()=>{Ts()});function Fx(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function kp({panes:s,rows:t,w:e,h:n,seed:i,deck:r}){let o=()=>{let g=document.createElement("canvas");return g.width=e,g.height=n,g},a=o(),l=o(),c=o(),h=a.getContext("2d"),u=l.getContext("2d"),d=c.getContext("2d"),p=Fx(i),f=e/s;h.fillStyle=r?"#c9ccd0":"#b9b5ac",h.fillRect(0,0,e,n),u.fillStyle="#000",u.fillRect(0,0,e,n),d.fillStyle="#c8c8c8",d.fillRect(0,0,e,n);let x=r?[{y0:0,y1:.14,glass:!1},{y0:.14,y1:.84,glass:!0},{y0:.84,y1:1,glass:!1}]:[{y0:0,y1:.5,glass:!0,shop:!0},{y0:.5,y1:.6,glass:!1},{y0:.6,y1:.9,glass:!0},{y0:.9,y1:1,glass:!1}];for(let g of x){let _=Math.round(g.y0*n),y=Math.round(g.y1*n);if(!g.glass){h.fillStyle=r?"#aeb2b8":"#9a968d",h.fillRect(0,_,e,y-_),h.fillStyle="rgba(0,0,0,0.22)",h.fillRect(0,_,e,2),h.fillRect(0,y-3,e,3),h.fillStyle="rgba(255,255,255,0.25)",h.fillRect(0,_+2,e,2);continue}for(let M=0;M<s;M++){let b=Math.round(M*f),w=Math.round((M+1)*f),v=3,S=b+v,C=w-v,A=_+v,R=y-v,D=.55+.45*p(),z=h.createLinearGradient(0,A,0,R);z.addColorStop(0,`rgb(${Math.round(70+80*D)},${Math.round(95+90*D)},${Math.round(125+90*D)})`),z.addColorStop(.55,`rgb(${Math.round(24+30*D)},${Math.round(34+36*D)},${Math.round(50+40*D)})`),z.addColorStop(1,`rgb(${Math.round(14+14*D)},${Math.round(18+16*D)},${Math.round(26+18*D)})`),h.fillStyle=z,h.fillRect(S,A,C-S,R-A),h.fillStyle=r?"#d7dade":"#8e8a82",h.fillRect(S+(C-S)*.5-1,A,2,R-A),h.fillRect(S,A+(R-A)*.62,C-S,2);let N=p()<(g.shop?.82:.62),O=.35+.65*p(),W=p()<.72,H=p()<.3?.2+.6*p():0;if(N){let st=u.createLinearGradient(0,A,0,R),X=W?[255,196,130]:[215,232,255];st.addColorStop(0,`rgb(${X[0]*O|0},${X[1]*O|0},${X[2]*O|0})`),st.addColorStop(1,`rgb(${X[0]*O*.55|0},${X[1]*O*.55|0},${X[2]*O*.55|0})`),u.fillStyle=st,u.fillRect(S,A,C-S,R-A),u.fillStyle="rgba(0,0,0,0.25)",u.fillRect(S,A+(R-A)*.62,C-S,(R-A)*.38)}H>0&&(h.fillStyle="#b9ad98",h.fillRect(S,A,C-S,(R-A)*H),N&&(u.fillStyle=`rgb(${200*O|0},${150*O|0},${100*O|0})`,u.fillRect(S,A,C-S,(R-A)*H))),d.fillStyle="#1a1a60",d.fillRect(S,A,C-S,R-A),d.fillStyle="#c8c8a0",d.fillRect(S+(C-S)*.5-1,A,2,R-A)}if(g.shop)for(let M=0;M<s;M+=5){let b=Math.round(M*f)+4;h.fillStyle="#2a2a2c",h.fillRect(b,_+(y-_)*.1,f*1.6,(y-_)*.9),u.fillStyle="#ffd9a8",u.fillRect(b+4,_+(y-_)*.16,f*1.6-8,(y-_)*.74)}}let m=(g,_)=>{let y=new Qt.CanvasTexture(g);return _&&(y.colorSpace=Qt.SRGBColorSpace),y.anisotropy=8,y.generateMipmaps=!0,y.minFilter=Qt.LinearMipmapLinearFilter,y};return{map:m(a,!0),emissiveMap:m(l,!0),rough:m(c,!1)}}function Ox(s,{x:t,z:e}){let n={},i=new Qt.MeshStandardMaterial({color:14475235,roughness:.5,metalness:.45,emissive:new Qt.Color(.7,.8,1),emissiveIntensity:0}),r=new Qt.MeshStandardMaterial({color:10133414,roughness:.55,metalness:.55,emissive:new Qt.Color(.7,.8,1),emissiveIntensity:0}),o=new Qt.MeshStandardMaterial({color:10328724,roughness:.9}),a=new Qt.MeshStandardMaterial({color:15856889,roughness:.7});n.steel=i,n.steelDark=r;let l=new wi(Qt,i),c=new wi(Qt,r),h=(k,I,$,ht,Wt,rt=!0)=>{let Yt=new Qt.Mesh(k,I);return Yt.position.set($,ht,Wt),Yt.castShadow=rt,Yt.receiveShadow=!0,s.add(Yt),Yt},u=10,d=87,p=13.5,f=3.7,x=k=>p+(f-p)*((k-u)/(d-u)),m=[[1,1],[1,-1],[-1,-1],[-1,1]],g=(k,I,$,ht=1)=>{let Wt=x($)*ht;return[t+k*Wt,$,e+I*Wt]},_=(k,I,$)=>k+(I-k)*$,y=k=>(k-u)/(d-u),M=[u,18.5,27,35.5,44.5,53.5,62,70,77.5,83,d],b=(k,I,$)=>[_(k[0],I[0],$),_(k[1],I[1],$),_(k[2],I[2],$)],w=(k,I)=>{let $=[I[0]-k[0],I[1]-k[1],I[2]-k[2]],ht=Math.hypot(...$);return[$[0]/ht,$[1]/ht,$[2]/ht]},v=(k,I,$)=>[k[0]+I[0]*$,k[1]+I[1]*$,k[2]+I[2]*$],S=(k,I,$)=>{l.add(k,I,$);let ht=w(k,I);c.add(k,v(k,ht,.7),$*1.7,$*1.35),c.add(I,v(I,ht,-.7),$*1.7,$*1.35)};for(let k=0;k<M.length-1;k++){let I=M[k],$=M[k+1],ht=y(I),Wt=y($),rt=_(.82,.36,ht),Yt=_(.82,.36,Wt),Rt=_(.3,.13,(ht+Wt)/2),Dt=_(.36,.16,Wt);for(let P=0;P<4;P++){let[T,B]=m[P],[at,j]=m[(P+1)%4];l.add(g(T,B,I),g(T,B,$),rt,Yt),l.add(g(T,B,I,.9),g(T,B,$,.9),rt*.5,Yt*.5);let dt=(I+$)/2;l.add(g(T,B,dt),g(T,B,dt,.9),.08),S(g(T,B,I),g(at,j,$),Rt),S(g(at,j,I),g(T,B,$),Rt),l.add(g(T,B,$),g(at,j,$),Dt),k%2===0&&k<6&&l.add(g(T,B,dt),g(at,j,dt),Dt*.55);let xt=g(T,B,$,.62),K=g(at,j,$,.62);l.add(xt,K,Dt*.5),l.add(g(T,B,$,.95),xt,Dt*.45),c.add([g(T,B,$)[0],$-.55,g(T,B,$)[2]],[g(T,B,$)[0],$+.55,g(T,B,$)[2]],Yt*1.5),c.add([g(T,B,$)[0],$-.07,g(T,B,$)[2]],[g(T,B,$)[0],$+.07,g(T,B,$)[2]],Yt*2.7)}if(k%2===1){let P=(T,B)=>g(T,B,$,.62);l.add(P(1,1),P(-1,-1),.09),l.add(P(1,-1),P(-1,1),.09)}}for(let[k,I]of m){let $=g(k,I,u);h(new Qt.BoxGeometry(3.6,1.6,3.6),o,$[0],u+.2,$[2]),c.add([$[0],u+.9,$[2]],[$[0],u+1.5,$[2]],1.5,1)}let C=(k,I,$)=>[t+k*1.35,$,e+I*1.35];for(let[k,I]of m)l.add(C(k,I,u),C(k,I,d+3),.2);for(let k=0;k<M.length;k++){let I=M[k];for(let $=0;$<4;$++){let[ht,Wt]=m[$],[rt,Yt]=m[($+1)%4];if(l.add(C(ht,Wt,I),C(rt,Yt,I),.1),k<M.length-1){let Rt=M[k+1];l.add(C(ht,Wt,I),C(rt,Yt,Rt),.07)}}}let A=(k,I)=>{let $=x(k)*I;h(new Qt.BoxGeometry($*2,.22,$*2),r,t,k,e);for(let ht=0;ht<4;ht++){let[Wt,rt]=m[ht],[Yt,Rt]=m[(ht+1)%4],Dt=[t+Wt*$,k+1.05,e+rt*$],P=[t+Yt*$,k+1.05,e+Rt*$];l.add(Dt,P,.045),l.add(b(Dt,P,0),b(Dt,P,1),.045);let T=Math.max(2,Math.round($*2/1.9));for(let B=0;B<T;B++){let at=b([Dt[0],k,Dt[2]],[P[0],k,P[2]],B/T);l.add(at,[at[0],k+1.05,at[2]],.035)}l.add([Dt[0],k+.55,Dt[2]],[P[0],k+.55,P[2]],.03)}for(let[ht,Wt]of m)l.add(C(ht,Wt,k-.1),g(ht,Wt,k,.85),.1)};A(35.5,.86),A(62,.86);let R=15.6,D=90,z=4.5,N=h(new Qt.CylinderGeometry(6.6*Math.SQRT2,3.9*Math.SQRT2,3.3,4,1),i,t,88.35,e);N.rotation.y=Math.PI/4;for(let[k,I]of m){c.add([t+k*3.9,86.7,e+I*3.9],[t+k*6.6,90,e+I*6.6],.28);for(let $ of[-.5,0,.5]){let ht=[t+k*3.9*1,86.7,e+I*3.9],Wt=[t+k*6.6,90,e+I*6.6]}}for(let k=0;k<4;k++){let[I,$]=m[k],[ht,Wt]=m[(k+1)%4],rt=[(I+ht)/2,($+Wt)/2];c.add([t+rt[0]*3.9,86.7,e+rt[1]*3.9],[t+rt[0]*6.6,90,e+rt[1]*6.6],.16)}for(let[k,I]of m)h(new Qt.BoxGeometry(1.6,.5,1.6),r,t+k*3.7,86.8,e+I*3.7);h(new Qt.BoxGeometry(R+.8,.45,R+.8),r,t,90,e);for(let k=-3;k<=3;k++)l.add([t-R/2,89.6,e+k*2.2],[t+R/2,89.6,e+k*2.2],.12),l.add([t+k*2.2,89.6,e-R/2],[t+k*2.2,89.6,e+R/2],.12);let O=kp({panes:15,rows:1,w:1024,h:192,seed:77,deck:!0}),W=new Qt.MeshStandardMaterial({map:O.map,emissiveMap:O.emissiveMap,emissive:new Qt.Color(1,1,1),emissiveIntensity:.4,roughnessMap:O.rough,metalnessMap:O.rough,roughness:1,metalness:1});n.deckMat=W;let H=h(new Qt.BoxGeometry(R,z,R),[W,W,i,r,W,W],t,D+.2+z/2,e),st=D+.2+z;h(new Qt.BoxGeometry(R+1.4,.55,R+1.4),i,t,st+.28,e),h(new Qt.BoxGeometry(R+.9,.4,R+.9),r,t,D+.2,e);let X=(R+1.4)/2-.2,Z=st+.55;for(let k=0;k<4;k++){let[I,$]=m[k],[ht,Wt]=m[(k+1)%4],rt=[t+I*X,Z+1,e+$*X],Yt=[t+ht*X,Z+1,e+Wt*X];l.add(rt,Yt,.05),l.add([rt[0],Z+.5,rt[2]],[Yt[0],Z+.5,Yt[2]],.03);for(let Rt=0;Rt<10;Rt++){let Dt=b([rt[0],Z,rt[2]],[Yt[0],Z,Yt[2]],Rt/10);l.add(Dt,[Dt[0],Z+1,Dt[2]],.035)}}h(new Qt.BoxGeometry(6.2,2.8,6.2),i,t,Z+1.4,e),h(new Qt.BoxGeometry(3.6,1.6,3.6),r,t+.4,Z+3.6,e-.3),h(new Qt.CylinderGeometry(.9,.9,1.4,12),r,t-4.8,Z+.7,e+3.8),h(new Qt.CylinderGeometry(.5,.5,1.1,10),r,t+4.6,Z+.55,e-4.2),h(new Qt.BoxGeometry(2.2,1,1.4),r,t+4.5,Z+.5,e+4.4);let nt=Z+3.2,Et=126.5,ot=k=>_(2.2,.95,(k-nt)/(Et-nt)),G=(k,I,$,ht=1)=>[t+k*ot($)*ht,$,e+I*ot($)*ht],lt=6,yt=[];for(let k=0;k<=lt;k++)yt.push(_(nt,Et,k/lt));for(let k=0;k<lt;k++){let I=yt[k],$=yt[k+1],ht=k/lt,Wt=_(.34,.17,ht);for(let rt=0;rt<4;rt++){let[Yt,Rt]=m[rt],[Dt,P]=m[(rt+1)%4];l.add(G(Yt,Rt,I),G(Yt,Rt,$),Wt,Wt*.92),S(G(Yt,Rt,I),G(Dt,P,$),.095),S(G(Dt,P,I),G(Yt,Rt,$),.095),l.add(G(Yt,Rt,$),G(Dt,P,$),.12);let T=G(Yt,Rt,$);c.add([T[0],$-.3,T[2]],[T[0],$+.3,T[2]],Wt*1.5)}}let kt=(k,I)=>{h(new Qt.BoxGeometry(I*2,.15,I*2),r,t,k,e,!1);for(let $=0;$<4;$++){let[ht,Wt]=m[$],[rt,Yt]=m[($+1)%4],Rt=[t+ht*I,k+.95,e+Wt*I],Dt=[t+rt*I,k+.95,e+Yt*I];l.add(Rt,Dt,.04);for(let P=0;P<4;P++){let T=b([Rt[0],k,Rt[2]],[Dt[0],k,Dt[2]],P/4);l.add(T,[T[0],k+.95,T[2]],.03)}}};kt(yt[3],2.9),kt(yt[5],2.4);let Tt=new Qt.MeshStandardMaterial({color:15922164,roughness:.4,metalness:.5,side:Qt.DoubleSide}),Ht=new Qt.SphereGeometry(1.15,18,8,0,Math.PI*2,0,.75),ye=(k,I,$)=>{let ht=new Qt.Mesh(Ht,Tt);ht.position.set(t+Math.cos(k)*3.6,I,e+Math.sin(k)*3.6),ht.rotation.set(0,-k+Math.PI/2,Math.PI/2+.2*0),ht.rotateZ(0),ht.scale.setScalar($),ht.lookAt(t+Math.cos(k)*30,I+1,e+Math.sin(k)*30),ht.rotateX(Math.PI/2*0),ht.castShadow=!0,s.add(ht),l.add([t+Math.cos(k)*2.4,I-.1,e+Math.sin(k)*2.4],[t+Math.cos(k)*3.5,I,e+Math.sin(k)*3.5],.1),l.add([t+Math.cos(k)*3.6,I,e+Math.sin(k)*3.6],[t+Math.cos(k)*4.5,I+.1,e+Math.sin(k)*4.5],.05,.03)};ye(.6,yt[4]+.3,1),ye(3.5,yt[4]+.3,.8),ye(5.2,yt[2]+.3,.9);for(let k=0;k<4;k++){let I=k*Math.PI/2+Math.PI/4,$=new Qt.Mesh(new Qt.BoxGeometry(.14,2.4,.55),i);$.position.set(t+Math.cos(I)*3.3,yt[5]+1.2,e+Math.sin(I)*3.3),$.rotation.y=-I,$.castShadow=!0,s.add($),l.add([t+Math.cos(I)*1.5,yt[5]+1.2,e+Math.sin(I)*1.5],[t+Math.cos(I)*3.2,yt[5]+1.2,e+Math.sin(I)*3.2],.06)}let It=Et;h(new Qt.CylinderGeometry(.5,.62,.9,12),r,t,It+.45,e),c.add([t,It,e],[t,It+8,e],.55,.42),l.add([t,It,e],[t,It+8,e],.5,.38),c.add([t,It+8,e],[t,It+8.4,e],.9,.9),c.add([t,It+4,e],[t,It+4.3,e],.8,.8),l.add([t,It+8.4,e],[t,It+15,e],.3,.2),c.add([t,It+12.2,e],[t,It+12.45,e],.55,.55),l.add([t,It+15,e],[t,147.2,e],.17,.045),l.add([t-1.7,It+11.2,e],[t+1.7,It+11.2,e],.05),l.add([t,It+11.2,e-1.4],[t,It+11.2,e+1.4],.05);for(let k=0;k<3;k++){let I=k/3*Math.PI*2;l.add([t,It+4.2,e],[t+Math.cos(I)*1.9,It+1.5,e+Math.sin(I)*1.9],.05)}let ie=(k,I)=>new Qt.MeshStandardMaterial({map:I.map,emissiveMap:I.emissiveMap,emissive:new Qt.Color(1,1,1),emissiveIntensity:.35,roughnessMap:I.rough,metalnessMap:I.rough,roughness:1,metalness:.4}),ce=kp({panes:12,rows:2,w:1024,h:256,seed:91,deck:!1}),it=kp({panes:8,rows:2,w:1024,h:256,seed:92,deck:!1}),gt=ie(12,ce),ft=ie(8,it);n.baseMats=[gt,ft];let Nt=new Qt.MeshStandardMaterial({color:15659510,roughness:.7}),pt=34,te=22,Bt=10;h(new Qt.BoxGeometry(pt,Bt,te),[ft,ft,Nt,o,gt,gt],t,Bt/2,e+.5),h(new Qt.BoxGeometry(pt+.8,.8,te+.8),a,t,Bt+.3,e+.5),h(new Qt.BoxGeometry(5.5,.35,9),i,t-pt/2-2.6,3.8,e+.5);for(let k of[-1,1])h(new Qt.CylinderGeometry(.17,.17,3.8,8),i,t-pt/2-4.9,1.9,e+.5+k*4.2);let oe=new Qt.MeshStandardMaterial({color:4869975,roughness:.5,metalness:.5,emissive:new Qt.Color(1,.75,.45),emissiveIntensity:0});n.bolM=oe;for(let k=0;k<26;k++){let I=k/26*Math.PI*2,$=t+Math.cos(I)*31,ht=e+Math.sin(I)*21;Math.abs(ht-e)<12&&Math.abs($-t)<19||h(new Qt.CylinderGeometry(.16,.16,.9,8),oe,$,.45,ht,!1)}let ne=Fx(5);for(let[k,I,$,ht]of[[-pt/2-6,-9,3,2],[-pt/2-6,10,3,2],[pt/2+4,-6,2,3],[pt/2+4,8,2,3]])h(new Qt.BoxGeometry($*2,.7,ht*2),o,t+k,.35,e+I,!1),h(new Qt.SphereGeometry(1,10,6),a,t+k,.7,e+I,!1).scale.set($*.95,.45,ht*.95);for(let k=0;k<9;k++){let I=ne()*Math.PI*2,$=23+ne()*10,ht=h(new Qt.SphereGeometry(1,10,6),a,t+Math.cos(I)*$*1.1,.2,e+Math.sin(I)*$*.75,!1);ht.scale.set(1.5+ne()*2.2,.5+ne()*.6,1.2+ne()*1.8),ht.rotation.y=ne()*3}for(let k=0;k<3;k++){let I=t-27,$=e-6+k*6;l.add([I,0,$],[I,8.5,$],.09,.06)}return s.add(l.build({castShadow:!0,sides:6}),c.build({castShadow:!0,sides:7})),n.beacon=ai(Qt,{positions:new Float32Array([t,148,e,t,It+8.6,e,t+1,Z+5.3,e]),colors:new Float32Array([14,.6,.4,6,.4,.3,4,.3,.25]),sizes:new Float32Array([2.4,1.4,1.1]),fogDensity:4e-5,minPx:2,maxPx:40}),s.add(n.beacon.points),n}var Qt,Bx=pe(()=>{Ie();ad();cd();Qt=Kt});function un(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Zt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0,p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[f].length!==s[0].morphAttributes[f].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+f+'" morph attribute.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let p=s[d].index;for(let f=0;f<p.count;++f)u.push(p.getX(f)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=zx(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][d]);let f=zx(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(f)}}}return l}function zx(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new $t(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,p=h.count;d<p;d++)for(let f=0;f<e;f++){let x=h.getComponent(d,f);a.setComponent(d+u,f,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var ko=pe(()=>{Ie()});function zw(s){let n=[[-2.25,.34],[-2.25,.86],[-1.95,.98],[-1.45,1],[-.95,1.46],[.45,1.47],[1.05,1.02],[2,.9],[2.25,.78],[2.25,.34]],i=new s.Shape(n.map(([d,p])=>new s.Vector2(d,p))),r=new s.ExtrudeGeometry(i,{depth:1.8-.12,bevelEnabled:!0,bevelThickness:.06,bevelSize:.06,bevelSegments:1,curveSegments:1});r.translate(0,0,-(1.8-.12)/2),r.deleteAttribute("uv");let o=new s.ExtrudeGeometry(new s.Shape([[-.88,1.03],[-.5,1.4],[.4,1.41],[.96,1.06]].map(([d,p])=>new s.Vector2(d,p))),{depth:1.8+.02,bevelEnabled:!1});o.translate(0,0,-(1.8+.02)/2),o.deleteAttribute("uv");let a=[];for(let d of[1.45,-1.4])for(let p of[-1,1]){let f=new s.CylinderGeometry(.34,.34,.24,10);f.rotateX(Math.PI/2),f.translate(d,.34,p*(1.8/2-.1)),f.deleteAttribute("uv"),a.push(f)}let l=new s.BoxGeometry(4.5-.5,.18,1.8-.08);l.translate(0,.43,0),l.deleteAttribute("uv");let c=(d,p,f)=>{let x=d.attributes.position.count,m=new Float32Array(x*3),g=new Float32Array(x);for(let _=0;_<x;_++)m[_*3]=p[0],m[_*3+1]=p[1],m[_*3+2]=p[2],g[_]=f;return d.setAttribute("color",new s.BufferAttribute(m,3)),d.setAttribute("aPart",new s.BufferAttribute(g,1)),d},h=[c(r,[1,1,1],0),c(o,[.045,.055,.07],1),c(l,[.34,.33,.32],1),...a.map(d=>c(d,[.03,.03,.035],1))],u=un(h.map(d=>d.index?d.toNonIndexed():d));return u.computeVertexNormals(),u}function kw(s){s.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aPart;`).replace("#include <color_vertex>",`#include <color_vertex>
if (aPart > 0.5) vColor.xyz = color.xyz;`)},s.customProgramCacheKey=()=>"part-color-v1"}function hd(s,t){let e=zw(s),n=new s.MeshStandardMaterial({color:16777215,roughness:.34,metalness:.5,vertexColors:!0});kw(n);let i=new s.InstancedMesh(e,n,t.length);i.frustumCulled=!1,i.castShadow=!1,i.receiveShadow=!1;let r=new s.Color;t.forEach((x,m)=>{r.setHex(kx[(m*7+(x.ph*97|0))%kx.length]),i.setColorAt(m,r)});let o=new s.Matrix4,a=new s.Quaternion,l=new s.Vector3,c=new s.Vector3(1,1,1),h=new s.Vector3(0,1,0),u=new s.Vector3(0,0,1),d=new s.Quaternion,p=.8,f=(x,m)=>{let g=Math.PI*2/(16+x.ph*26),_=x.ph*40,y=x.speed*(m+p*Math.sin(g*m+_)/g),M=((x.off+x.dir*y)%x.len+x.len)%x.len+x.min,b=x.speed*(1+p*Math.cos(g*m+_)),w=-x.speed*p*g*Math.sin(g*m+_);return{pos:x.alongX?[M,x.fixed]:[x.fixed,M],v:b,acc:w}};return{mesh:i,posOf:f,update(x,m){for(let g=0;g<t.length;g++){let _=t[g],{pos:[y,M],acc:b}=f(_,x),w=_.alongX?_.dir>0?0:Math.PI:_.dir>0?-Math.PI/2:Math.PI/2;if(a.setFromAxisAngle(h,w),d.setFromAxisAngle(u,Math.max(-.03,Math.min(.03,-b*.012))),a.multiply(d),l.set(y,0,M),o.compose(l,a,c),i.setMatrixAt(g,o),m){let v=_.alongX?_.dir:0,S=_.alongX?0:_.dir,C=_.alongX?0:.7,A=_.alongX?.7:0,R=y+v*2.2,D=M+S*2.2,z=y-v*2.2,N=M-S*2.2,O=g*12;m[O++]=R-C,m[O++]=.74,m[O++]=D-A,m[O++]=R+C,m[O++]=.74,m[O++]=D+A,m[O++]=z-C,m[O++]=.9,m[O++]=N-A,m[O++]=z+C,m[O++]=.9,m[O++]=N+A}}i.instanceMatrix.needsUpdate=!0}}}function Gw(s){let t=[],e=(a,l,c,h,u)=>{a.deleteAttribute("uv");let d=a.index?a.toNonIndexed():a,p=d.attributes.position.count,f=new Float32Array(p*3),x=new Float32Array(p),m=new Float32Array(p),g=new Float32Array(p);for(let _=0;_<p;_++)f[_*3]=l[0],f[_*3+1]=l[1],f[_*3+2]=l[2],x[_]=c,m[_]=h,g[_]=u;d.setAttribute("color",new s.BufferAttribute(f,3)),d.setAttribute("aPart",new s.BufferAttribute(x,1)),d.setAttribute("aSide",new s.BufferAttribute(m,1)),d.setAttribute("aPivot",new s.BufferAttribute(g,1)),t.push(d)},n=new s.BoxGeometry(.44,.62,.26);n.translate(0,1.18,0),e(n,[1,1,1],0,0,0);let i=new s.SphereGeometry(.115,8,6);i.translate(0,1.6,0),e(i,[.82,.64,.54],1,0,0);let r=new s.SphereGeometry(.125,8,5,0,Math.PI*2,0,Math.PI*.55);r.translate(0,1.625,0),e(r,[.16,.17,.2],1,0,0);for(let a of[-1,1]){let l=new s.BoxGeometry(.16,.86,.17);l.translate(0,.43,a*.11),e(l,[.07,.075,.09],1,a,.86);let c=new s.BoxGeometry(.11,.56,.11);c.translate(0,1.14,a*.27),e(c,[1,1,1],0,-a,1.46);let h=new s.BoxGeometry(.24,.1,.18);h.translate(.04,.05,a*.11),e(h,[.05,.05,.05],1,a,.86)}let o=un(t);return o.computeVertexNormals(),o}function mc(s,t){let e=Gw(s),n=new Float32Array(t.length);e.setAttribute("aGait",new s.InstancedBufferAttribute(n,1));let i=new s.MeshStandardMaterial({color:16777215,roughness:.9,metalness:0,vertexColors:!0});i.onBeforeCompile=p=>{p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
attribute float aPart, aSide, aPivot, aGait;`).replace("#include <color_vertex>",`#include <color_vertex>
if (aPart > 0.5) vColor.xyz = color.xyz;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        if (aSide != 0.0) {
          float ang = sin(aGait) * 0.62 * aSide;
          float cs = cos(ang), sn = sin(ang);
          vec2 d = vec2(transformed.x, transformed.y - aPivot);
          transformed.x = d.x * cs - d.y * sn;
          transformed.y = aPivot + d.x * sn + d.y * cs;
        }
        transformed.y += abs(sin(aGait)) * 0.035;`)},i.customProgramCacheKey=()=>"walker-v1";let r=new s.InstancedMesh(e,i,t.length);r.frustumCulled=!1,r.castShadow=!1;let o=new s.Color;t.forEach((p,f)=>{o.setHex(Gx[(f*5+(p.ph*31|0))%Gx.length]),r.setColorAt(f,o)});let a=new s.Matrix4,l=new s.Quaternion,c=new s.Vector3,h=new s.Vector3(1,1,1),u=new s.Vector3(0,1,0),d=1.35;return{mesh:r,update(p){for(let f=0;f<t.length;f++){let x=t[f],m=Math.abs(x.x1-x.x0),g=((x.off+x.speed*p)%(2*m)+2*m)%(2*m),_=g<m?g:2*m-g,y=(g<m?1:-1)*(x.dir>0?1:-1),M=Math.min(x.x0,x.x1)+(x.dir>0?_:m-_);l.setFromAxisAngle(u,y>0?0:Math.PI),c.set(M,0,x.z+Math.sin(M*.07+x.ph*9)*.35),a.compose(c,l,h),r.setMatrixAt(f,a),n[f]=g/d*Math.PI*2+x.ph*6.28}r.instanceMatrix.needsUpdate=!0,e.attributes.aGait.needsUpdate=!0}}}var kx,Gx,Gp=pe(()=>{ko();kx=[15921906,15263978,13225170,9277849,1776930,2764602,8003359,2045270,14209732,11975360,4081233];Gx=[1382172,2106412,2830138,3812139,1911615,4868690,8006186,2902586,9071146,14474460,5913386,3493998]});function ud({kita:s,minami:t,nishi:e,higashi:n}){let i=e?-e:n-1,r=Vw(i),o=s?Hp(s-1):Vp(t-1);return{x:r,z:o,j:i}}var gc,dd,Hw,Vw,Hp,Vp,VA,Hx=pe(()=>{gc={x:-90,z:0},dd=s=>-54+108*s,Hw=s=>62.5+108*s,Vw=s=>108*s,Hp=s=>-(116.5+108*s),Vp=s=>116.5+108*s;VA={tvTower:{name:"\u3055\u3063\u307D\u308D\u30C6\u30EC\u30D3\u5854",...gc,basis:"\u5927\u901A\u897F1\u4E01\u76EE\uFF08\u6771\u7AEF\u4ED8\u8FD1\uFF09",model:"\u624B\u7D9A\u304D\u751F\u6210\u306E\u6982\u7565\u30E2\u30C7\u30EB\uFF08\u9AD8\u3055147.2m\u30FB\u5C55\u671B\u53F0\u7D0490m\uFF09"},jrTower:{name:"JR\u30BF\u30EF\u30FC",...ud({kita:5,nishi:2}),basis:"\u53175\u6761\u897F2\u4E01\u76EE",model:"\u624B\u7D9A\u304D\u751F\u6210\u306E\u6982\u7565\u30E2\u30C7\u30EB\uFF08\u9AD8\u3055173m\uFF09"},station:{name:"\u672D\u5E4C\u99C5",...ud({kita:6,nishi:3}),basis:"\u53176\u6761\u897F4\u4E01\u76EE\u4ED8\u8FD1",model:"\u4F4E\u5C64\u306E\u99C5\u30D3\u30EB\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},clockTower:{name:"\u672D\u5E4C\u5E02\u6642\u8A08\u53F0",...ud({kita:1,nishi:2}),basis:"\u53171\u6761\u897F2\u4E01\u76EE",model:"\u624B\u7D9A\u304D\u751F\u6210\u306E\u6982\u7565\u30E2\u30C7\u30EB\uFF08\u6728\u90202\u968E\u5EFA\u3066\u30FB\u4E2D\u592E\u306B\u6642\u8A08\u5854\uFF09"},tanukikoji:{name:"\u72F8\u5C0F\u8DEF",x:-430,z:332.5,basis:"\u53572\u301C3\u6761\u30FB\u897F1\u301C7\u4E01\u76EE\uFF08\u8857\u533A\u306E\u4E2D\u592E\u3092\u901A\u308B\u5546\u5E97\u8857\uFF09",model:"\u30A2\u30FC\u30B1\u30FC\u30C9\u5546\u5E97\u8857\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},susukino:{name:"\u3059\u3059\u304D\u306E\u4EA4\u5DEE\u70B9",x:dd(-4)+0,z:Hw(4),basis:"\u53574\u301C5\u6761\u897F4\u4E01\u76EE\u4ED8\u8FD1",model:"\u4EA4\u5DEE\u70B9\u3068\u30CD\u30AA\u30F3\u770B\u677F\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},factory:{name:"\u30B5\u30C3\u30DD\u30ED\u30D5\u30A1\u30AF\u30C8\u30EA\u30FC",...ud({kita:2,higashi:4}),basis:"\u53172\u6761\u67714\u4E01\u76EE",model:"\u8D64\u30EC\u30F3\u30AC\u68DF\u3068\u30AC\u30E9\u30B9\u5C4B\u6839\u306E\u30A2\u30C8\u30EA\u30A6\u30E0\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},moiwa:{name:"\u85FB\u5CA9\u5C71\uFF08\u5C55\u671B\u53F0\uFF09",x:-2496,z:3607,elev:531,basis:"\u7DEF\u5EA6\u7D4C\u5EA6\uFF08\u6982\u7565\uFF09\u304B\u3089\u306E\u914D\u7F6E",model:"\u5730\u5F62\u306E\u76DB\u308A\u4E0A\u304C\u308A\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"}}});var Vx,Wx,Wp,pd,Xx=pe(()=>{Ie();Op();sd();Ts();Bp();ad();zp();Bx();cd();Gp();Hx();Vx=[{id:"overview",name:"\u672D\u5E4C\u306E\u5168\u666F",start:0,end:5,ready:!1},{id:"station",name:"\u672D\u5E4C\u99C5\u30FBJR\u30BF\u30EF\u30FC",start:5,end:11,ready:!1},{id:"odori",name:"\u5927\u901A\u516C\u5712\u30FB\u3055\u3063\u307D\u308D\u30C6\u30EC\u30D3\u5854",start:11,end:18,ready:!0},{id:"clocktower",name:"\u672D\u5E4C\u5E02\u6642\u8A08\u53F0",start:18,end:25,ready:!1},{id:"susukino",name:"\u72F8\u5C0F\u8DEF\u30FB\u3059\u3059\u304D\u306E",start:25,end:32,ready:!1},{id:"factory",name:"\u30B5\u30C3\u30DD\u30ED\u30D5\u30A1\u30AF\u30C8\u30EA\u30FC",start:32,end:39,ready:!1},{id:"moiwa",name:"\u85FB\u5CA9\u5C71\u304B\u3089\u306E\u591C\u666F",start:39,end:49,ready:!1},{id:"ending",name:"ENDING",start:49,end:55,ready:!1}],Wx=new L(-.66,.25,.71).normalize(),Wp=[{zenith:"#24508f",horizon:"#a9c6e8",horizonWarm:"#ffbd80",sun:"#ffd2a2",cloudLit:"#ffdcc0",cloudDark:"#8296b8",fog:"#bfd0e6",sunCol:"#ffc88f",fogD:62e-6},{zenith:"#0f2a5c",horizon:"#4a78b4",horizonWarm:"#f29a58",sun:"#ff9d62",cloudLit:"#eaa68e",cloudDark:"#3b4d7c",fog:"#5a7fb0",sunCol:"#ff9a60",fogD:7e-5},{zenith:"#050b20",horizon:"#12305c",horizonWarm:"#243e66",sun:"#ff9a60",cloudLit:"#3a4a70",cloudDark:"#0c1630",fog:"#122646",sunCol:"#ff9a60",fogD:8e-5}],pd=class extends zo{constructor(t,e,n,i={}){super(t,e,n,i),this.shot=Vx.find(r=>r.id===(i.shot||"odori"))??Vx[2],this.timeOffset=this.shot.start,this.duration=this.shot.end-this.shot.start,this.timeline.duration=this.duration,this.timeline.frameCount=Math.round(this.duration*this.timeline.fps),this.showTitle=this.shot.id==="ending",this.fadeSec=.35,this.nightU={value:.1},this.snowU={value:1}}async build(){let t=id(20261115),e=this.scene,n=Wp[0],i=rd(Kt,{sunDir:Wx,colors:{...n,cloudCover:.36}});if(this.sky=i,e.add(i.mesh),e.fog=new Fi(new ct(n.fog),n.fogD),this.glRenderer){let d=new Dn;d.add(new fe(i.mesh.geometry,i.material));let p=new qi(this.glRenderer);e.environment=p.fromScene(d,.015,1,3e3).texture,p.dispose()}let r=new Vi(16763023,3.4),o=this.shot.id==="odori"?new L(-330,0,0):new L(-500,0,-250);r.position.copy(o).addScaledVector(Wx,3e3),r.target.position.copy(o),r.castShadow=!0,r.shadow.mapSize.set(4096,4096);let a=r.shadow.camera,l=this.shot.id==="odori"?[560,260]:[1700,520];a.left=-l[0],a.right=l[0],a.top=l[1],a.bottom=-l[1],a.near=200,a.far=6500,r.shadow.bias=-2e-4,r.shadow.normalBias=.9,e.add(r,r.target),this.sun=r,this.hemi=new Gi(15134463,14271394,.5),e.add(this.hemi),e.add(Nx(Kt,{size:9e4,y:-40})),e.add(ld(Kt,{heightFn:Dx(),y:-4})),e.add(this._buildGround()),this._buildCity(t),this._buildTVTower(),this._buildParkAndStreet(t),this._buildTraffic(t),this.snow=Ux(Kt,{count:14e3,box:150,fall:3,wind:[2.2,.8],size:.06,bright:.55}),e.add(this.snow.points);let c=d=>{let p=d*d*(3-2*d),f=1-(1-d)*(1-d);return .5*p+.5*f},h=d=>d;this.rig=new dr([{t:11,pos:[-420,40,14],target:[-140,54,-2],fov:38,ease:h},{t:12.78,pos:[-313,50,32],target:[-100,103,-20],fov:34,ease:h},{t:14.36,pos:[-211,62,44],target:[-108,76,-33],fov:35,ease:h},{t:15.99,pos:[-111,77,54],target:[-95,82,-25],fov:36,ease:h},{t:17.63,pos:[-61,85,39],target:[-109,85,-13],fov:37,ease:h},{t:18,pos:[-64,97,45],target:[-188,91,-69],fov:38,ease:h}],{shakeAmp:.1,shakeSeed:4,timeWarp:c});let u=d=>new ur(d.map(([p,f])=>({t:p,v:f})));this.tracks={night:u([[0,.04],[11,.1],[18,.22],[25,.55],[32,.8],[39,1],[55,1]]),palette:u([[0,0],[11,.12],[18,.4],[25,.85],[32,1.2],[39,2],[55,2]]),sunPower:u([[0,3.8],[18,3.1],[25,1.5],[32,.5],[39,0],[55,0]]),envPower:u([[0,.75],[18,.62],[25,.46],[32,.36],[39,.2],[55,.2]]),exposure:u([[0,1],[55,1]]),bloom:u([[0,.22],[18,.3],[32,.45],[55,.55]]),bloomThreshold:u([[0,1.5],[55,1]]),bloomRadius:u([[0,.5],[55,.7]]),dofAperture:u([[0,.5],[55,.6]]),dofMaxBlur:u([[0,4],[55,5]])},this.look.grade={uShadowAmt:.3,uVig:.3,uSat:1.04,uGrain:.022,uAberr:7e-4,uHighTint:new ct(1.03,1,.96)},this._ca=new ct,this._cb=new ct}_buildGround(){let t=new Wn(12e3,12e3,1,1);t.rotateX(-Math.PI/2);let e=new be({color:16777215,roughness:.85,metalness:0});e.customProgramCacheKey=()=>"sapporo-ground-v2";let n=this.nightU;e.onBeforeCompile=r=>{r.uniforms.uNight=n,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
          uniform float uNight; varying vec3 vWP;
          ${Zn}`).replace("#include <color_fragment>",`#include <color_fragment>
          float gRough = 0.85; vec3 gEmis = vec3(0.0); float gBump = 1.0;
          {
            vec2 p = vWP.xz;
            float cx = abs(mod(p.x, 108.0) - 54.0);                    // \u5357\u5317\u306E\u901A\u308A\u306E\u4E2D\u5FC3\u7DDA\u307E\u3067\u306E\u8DDD\u96E2
            float zz = abs(p.y) - 62.5;
            float cz = abs(mod(zz + 54.0, 108.0) - 54.0);               // \u6771\u897F\u306E\u901A\u308A\u306E\u4E2D\u5FC3\u7DDA\u307E\u3067\u306E\u8DDD\u96E2
            float rd = min(cx, cz);
            float fw = fwidth(rd) * 1.2 + 0.02;
            float asphalt = 1.0 - smoothstep(7.0 - fw, 7.0 + fw, rd);
            float lotEdge = smoothstep(10.0 - fw, 10.0 + fw, rd);        // \u6B69\u9053\u306E\u5916\u5074\uFF08\u6577\u5730\uFF09
            float walk = (1.0 - lotEdge) - asphalt;                      // \u6B69\u9053
            float bank = smoothstep(5.6, 6.9, rd) * (1.0 - smoothstep(6.9, 8.3, rd));  // \u8DEF\u80A9\u306E\u96EA\u5824

            float nz = fbm(p * 0.05);
            float fine = vnoise(p * 1.9);
            bool inPark = abs(p.y) < 52.5 && p.x > -1350.0 && p.x < -54.0 && !(cx < 10.0);
            vec3 snow = vec3(0.94, 0.95, 0.972) * (0.93 + 0.12 * nz + 0.04 * fine);
            if (!inPark) snow *= 0.94;
            // \u8ECA\u9053\uFF1A\u9664\u96EA\u3055\u308C\u305F\u6FE1\u308C\u305F\u8DEF\u9762\uFF08\u308F\u3060\u3061\u306B\u8584\u3044\u96EA\uFF09
            vec3 roadC = mix(vec3(0.055, 0.058, 0.064), vec3(0.20, 0.205, 0.22), smoothstep(0.58, 0.95, nz) * 0.6);
            float alongRoad = (cx < cz) ? p.y : p.x;
            float lateral = (cx < cz) ? (cx) : (cz);
            roadC += vec3(0.05) * smoothstep(3.0, 4.2, lateral) * (1.0 - smoothstep(4.2, 6.5, lateral));   // \u8DEF\u80A9\u5BC4\u308A\u306E\u96EA
            // \u8ECA\u7DDA\u306E\u7834\u7DDA\uFF08\u96EA\u3067\u304B\u3059\u308C\u308B\uFF09
            float dash = step(0.5, fract(alongRoad / 8.0)) * (1.0 - smoothstep(0.12, 0.3, lateral)) * smoothstep(0.35, 0.7, fine);
            roadC = mix(roadC, vec3(0.7), dash * 0.7);
            // \u6A2A\u65AD\u6B69\u9053
            float zebraA = step(cx, 7.0) * step(10.8, cz) * step(cz, 14.6) * step(0.5, fract(p.x / 1.1));
            float zebraB = step(cz, 7.0) * step(10.8, cx) * step(cx, 14.6) * step(0.5, fract(p.y / 1.1));
            float zebra = max(zebraA, zebraB) * smoothstep(0.25, 0.6, fine + 0.15);
            roadC = mix(roadC, vec3(0.78), zebra * 0.85);
            vec3 walkC = vec3(0.62, 0.63, 0.67) * (0.88 + 0.24 * fine);        // \u8E0F\u307F\u56FA\u3081\u3089\u308C\u305F\u6B69\u9053
            vec3 c = snow;
            c = mix(c, walkC, walk);
            c = mix(c, vec3(0.93, 0.945, 0.97) * (0.95 + 0.08 * fine), bank * 0.9);
            c = mix(c, roadC, asphalt);
            // \u516C\u5712\u306E\u5712\u8DEF\uFF08\u8E0F\u307F\u56FA\u3081\u3089\u308C\u305F\u96EA\u306E\u9053\uFF09\u3068 \u30C6\u30EC\u30D3\u5854\u306E\u5E83\u5834
            if (inPark) {
              float path = (1.0 - smoothstep(3.8, 4.8, abs(p.y))) + (1.0 - smoothstep(1.6, 2.4, abs(abs(p.y) - 30.0))) * 0.8;
              c = mix(c, vec3(0.64, 0.65, 0.69) * (0.9 + 0.2 * fine), clamp(path, 0.0, 1.0));
              float plaza = 1.0 - smoothstep(24.0, 32.0, length(p - vec2(-90.0, 0.0)));
              c = mix(c, vec3(0.58, 0.58, 0.61) * (0.92 + 0.14 * fine), plaza * 0.8);
            }
            diffuseColor.rgb = c;
            gRough = mix(0.9, 0.34, asphalt);
            gBump = (1.0 - asphalt * 0.85) * (1.0 - walk * 0.5);
            // \u591C\uFF1A\u8857\u706F\u306E\u6696\u8272\u306E\u5149\u3060\u307E\u308A
            float phase = 0.5 + 0.5 * cos(6.2831853 * alongRoad / 42.0);
            float pool = pow(phase, 3.0);
            float spill = (1.0 - smoothstep(6.0, 40.0, rd)) * (0.5 + 0.5 * pool);
            gEmis = uNight * vec3(1.0, 0.6, 0.3) * (spill * 0.028 + asphalt * pool * 0.05);
          }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = gRough;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          {
            vec2 q = vWP.xz * 0.9;
            float e = 0.35;
            float n0 = vnoise(q), nx = vnoise(q + vec2(e, 0.0)), nz2 = vnoise(q + vec2(0.0, e));
            vec3 pert = vec3((n0 - nx), 0.0, (n0 - nz2)) * 0.8 * gBump;
            float fade = 1.0 - smoothstep(120.0, 600.0, length(vWP - cameraPosition));
            normal = normalize(normal + (mat3(viewMatrix) * pert) * fade);
          }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += gEmis;`)};let i=new fe(t,e);return i.receiveShadow=!0,i}_buildCity(t){let e=od(Kt,{uNight:this.nightU,uSnow:this.snowU}),n=new As(Kt,e,11e4),i=new As(Kt,e,3e4,Ix(Kt));this.boxes=n;let r=new As(Kt,e,12e3,Lx(Kt)),o=(f,x,m,g)=>Math.hypot(f-m,x-g),a=(f,x)=>{let m=Math.exp(-(((Math.abs(x)-112)/170)**2))*(f>-1500&&f<400?1:.3),g=Math.exp(-((o(f,x,-300,-600)/420)**2)),_=Math.exp(-((o(f,x,-430,520)/380)**2)),y=o(f,x,-450,-100);return Math.max(m,g,_)*.85+.25*Math.exp(-((y/1700)**2))},l=f=>{let x=t();return f>.55?x<.32?0:x<.55?2:x<.75?4:x<.85?1:3:f>.3?x<.25?0:x<.4?2:x<.6?4:x<.7?1:3:x<.12?0:x<.18?4:x<.25?1:3},c=f=>f===3?2.9:f===4?3.9:f===2?3.8:3.6,h=(f,x,m,g,_,y,M)=>{let b=Math.abs(m)<700&&f>-1500&&f<500;b&&g>12&&_>12&&(n.add(f,x,m-_/2+.35/2,g,.9,.35,6,y,M),n.add(f,x,m+_/2-.35/2,g,.9,.35,6,y,M),n.add(f-g/2+.35/2,x,m,.35,.9,_-2*.35,6,y,M),n.add(f+g/2-.35/2,x,m,.35,.9,_-2*.35,6,y,M));let w=t.int(2,b?5:3);for(let v=0;v<w;v++){let S=f+t.range(-g*.3,g*.3),C=m+t.range(-_*.3,_*.3),A=t();if(A<.34)n.add(S,x,C,t.range(2,Math.min(7,g*.35)),t.range(1.2,2.2),t.range(1.5,Math.min(5,_*.35)),5,y+v*.13,M);else if(A<.58)n.add(S,x,C,t.range(3,5),t.range(2.6,3.4),t.range(3,5),0,y+v*.17,M,0,[3,3.2,.3,.3]);else if(A<.82){let R=t.range(2,3.6);r.add(S,x,C,R,t.range(2.2,3.6),R,5,y+v*.11,M)}else n.add(S,x,C,.18,t.range(5,12),.18,6,y,M)}},u=!1,d=(f,x,m,g,_,y,M)=>{let b=t(),w=t(),v=c(y),S=Math.max(6,_*v);if(y===3&&_<=3&&!u&&t()<.7){n.add(f,0,x,m,S*.78,g,3,b,w);let C=Math.min(m,g)*t.range(.28,.4),A=m>=g;i.add(f,S*.78,x,(A?g:m)+.8,C,(A?m:g)+.8,3,b,w,A?Math.PI/2:0,[2.6,2.9,.5,.5]);return}if(_>=11&&m>30&&g>30){let C=t.int(3,4),A=C*4.2;n.add(f,0,x,m,A,g,t()<.5?4:0,b,w);let R=m*t.range(.55,.8),D=g*t.range(.5,.75),z=f+(m-R)*t.range(-.3,.3),N=x+(g-D)*t.range(-.3,.3),O=S-A;n.add(z,A,N,R,O,D,y===4?2:y,b+.31,w),t()<.5&&n.add(z,S,N,R*.6,t.range(4,9),D*.6,0,b+.7,w,0,[4,3.6,.8,.3]),h(z,S,N,R,D,b,w);return}if(_>=6&&t()<.4){let C=Math.ceil(_*.65),A=C*v;n.add(f,0,x,m,A,g,y,b,w);let R=t.range(3,6);n.add(f+t.range(-1.5,1.5),A,x+t.range(-1.5,1.5),m-R*2,S-A,g-R*2,y,b+.2,w),h(f,S,x,m-R*2,g-R*2,b,w);return}if(_>=5&&m>28&&g>28&&t()<.45){n.add(f,0,x,m,S,g,y,b,w);let C=m*t.range(.35,.5),A=g*t.range(.4,.6),R=Math.max(6,(_-t.int(2,3))*v),D=t()<.5?1:-1,z=t()<.5?1:-1;n.add(f+D*(m/2+C/2-.5),0,x+z*(g/2-A/2),C,R,A,y===2?0:y,b+.4,w),h(f,S,x,m,g,b,w);return}n.add(f,0,x,m,S,g,y,b,w),S>12&&h(f,S,x,m,g,b,w)},p=(f,x,m,g)=>{let _=o(f,x,-450,-100);if(_>4600)return;let y=a(f,x),M=_>2600,b=2.6+8.5*y*y+1.4*y,w=t(),v=()=>t.range(2.5,5.5);if(u=M,M){let C=_<3400?2:1,A=_<3400?2:1,R=m*2/C,D=g*2/A,z=t.range(2.5,4.5);for(let N=0;N<C;N++)for(let O=0;O<A;O++){let W=Math.max(2,Math.round(z+t.range(-.6,.6)));d(f-m+(N+.5)*R,x-g+(O+.5)*D,R-t.range(2,4),D-t.range(2,4),W,3,.1)}return}let S=()=>Math.max(2,Math.round(b*(.55+Math.pow(t(),1.5)*1.1)*(t()<.07&&y>.5?1.7:1)));if(w<.28+.2*y)d(f,x,m*2-t.range(3,8),g*2-t.range(3,8),Math.min(22,S()+1),l(y),y);else if(w<.55){let C=t()<.5,A=t.range(.38,.62);if(C){let R=m*2*A-2,D=m*2*(1-A)-2;d(f-m+R/2+1,x,R,g*2-v(),S(),l(y),y),d(f+m-D/2-1,x,D,g*2-v(),S(),l(y),y)}else{let R=g*2*A-2,D=g*2*(1-A)-2;d(f,x-g+R/2+1,m*2-v(),R,S(),l(y),y),d(f,x+g-D/2-1,m*2-v(),D,S(),l(y),y)}}else if(w<.75){let C=t.int(3,5),A=m*2/C,R=t()<.5?-1:1,D=t.range(.55,.75)*g*2;for(let z=0;z<C;z++)d(f-m+(z+.5)*A,x+R*(g-D/2),A-t.range(.4,1.4),D,Math.max(2,S()+t.int(-1,1)),l(y),y);d(f,x-R*(g-(g*2-D)/2),m*2-3,g*2-D-3,Math.max(2,S()-1),l(y*.6),y)}else{let C=m,A=g;for(let R=0;R<2;R++)for(let D=0;D<2;D++)d(f-m+(R+.5)*C,x-g+(D+.5)*A,C-v(),A-v(),S(),l(y),y)}};for(let f=-30;f<=28;f++){let x=108*f;f>=-12&&f<=-1||p(x,0,44,50.5);for(let m=0;m<=19;m++)for(let g of[-1,1]){let _=g<0?Hp(m):Vp(m);p(x,_,44,44)}}this.scene.add(n.build(),i.build(),r.build())}_buildTVTower(){let t=Ox(this.scene,gc);this.towerSteel=t.steel,this.towerSteel2=t.steelDark,this.deckMat=t.deckMat,this.beacon=t.beacon,this.baseMats=t.baseMats,this.bolM=t.bolM}_buildParkAndStreet(t){let e=new be({color:4406584,roughness:.95}),n=new be({color:15922682,roughness:.75}),i=new wi(Kt,e),r=new wi(Kt,n),o=(_,y,M,b,w,v)=>{let S=[_[0]+y[0]*M,_[1]+y[1]*M,_[2]+y[2]*M],C=b*(w===0?.55:.4);if(i.add(_,S,b,C),w<=2&&y[1]>.35&&b>.045&&r.add([_[0],_[1]+b*.8,_[2]],[S[0],S[1]+C*.8,S[2]],b*.7,C*.6),w>=3)return;let A=w===0?t.int(3,4):t.int(2,3),R=t()*Math.PI*2;for(let D=0;D<A;D++){let z=R+D/A*Math.PI*2+t.range(-.5,.5),N=Math.min(1.25,v*t.range(.7,1.3)),O=[Math.cos(z)*Math.sin(N),Math.cos(N)*.9+.1,Math.sin(z)*Math.sin(N)],W=Math.hypot(...O),H=w===0?1:t.range(.6,1),st=[_[0]+(S[0]-_[0])*H,_[1]+(S[1]-_[1])*H,_[2]+(S[2]-_[2])*H];o(st,O.map(X=>X/W),M*t.range(.55,.72),C*t.range(.7,.9),w+1,v*1.12)}},a=(_,y)=>{let M=t.range(8,13.5),b=[t.range(-.12,.12),1,t.range(-.12,.12)],w=Math.hypot(...b);o([_,0,y],b.map(v=>v/w),M*.4,t.range(.3,.42),0,t.range(.5,.75));for(let v=0;v<2;v++){let S=t()*6.28,C=M*t.range(.18,.32);o([_,C,y],[Math.cos(S)*.8,.55,Math.sin(S)*.8],M*.26,.12,1,.8)}};for(let _=-12;_<=-1;_++){let y=108*_;for(let M of[-42,-22,22,42])for(let b=y-40;b<=y+40;b+=11.5){let w=b+t.range(-2,2),v=M+t.range(-2.5,2.5);Math.hypot(w-gc.x,v-gc.z)<30||Math.abs((w%108+108)%108-54)<11||a(w,v)}}for(let _ of[-1,1])for(let y=-1330;y<=-60;y+=15)Math.abs((y%108+108)%108-54)<12||(a(y+t.range(-1.5,1.5),_*(62.5+8.6)),a(y+7+t.range(-1.5,1.5),_*(62.5-8.6)));this.scene.add(i.build({castShadow:!0,sides:5}),r.build({castShadow:!1,sides:4}));let l=new be({color:4869975,roughness:.6,metalness:.6}),c=new wi(Kt,l),h=new be({color:3817029,roughness:.5,metalness:.5,emissive:new ct(1,.72,.4),emissiveIntensity:0});this.lampHeadM=h;let u=new wi(Kt,h),d=[],p=[],f=[],x=(_,y,M=9,b=!1)=>{d.push(_,M,y);let w=t.range(.85,1.15);p.push(3.4*w,2*w,.9*w),f.push(1.3),b&&(c.add([_,0,y],[_,M,y],.13,.08),c.add([_,M-.2,y],[_+.9,M+.15,y],.05,.04),u.add([_+.55,M+.02,y],[_+1.25,M+.02,y],.22,.18))},m=2400,g=1900;for(let _=-23;_<=23;_++){let y=dd(_);for(let M=-g;M<=g;M+=44){let b=Math.abs(M)<260&&y>-1400&&y<200;x(y-9.2,M+t.range(-2,2),9,b),x(y+9.2,M+22,9,b)}}for(let _=0;_<=17;_++)for(let y of[-1,1]){let M=y*(62.5+108*_);for(let b=-m;b<=m;b+=44){let w=_===0&&b>-1400&&b<200;x(b+t.range(-2,2),M-9.2,9,w),x(b+22,M+9.2,9,w)}}for(let _=-1330;_<=-110;_+=26)for(let y of[-6.5,6.5])x(_,y,4.6,!0);this.scene.add(c.build({castShadow:!1,sides:5}),u.build({castShadow:!1,sides:6})),this.lamps=ai(Kt,{positions:new Float32Array(d),colors:new Float32Array(p),sizes:new Float32Array(f),fogDensity:4e-5,minPx:1.6,maxPx:14}),this.scene.add(this.lamps.points)}_buildTraffic(t){let e=[];for(let l=0;l<1500;l++){let c=t()<.5,h=t()<.5?1:-1,u;if(c){let d=t.int(0,14);u=(t()<.5?-1:1)*(62.5+108*d)+(h>0?-3.4:3.4)}else u=dd(t.int(-20,18))+(h>0?3.4:-3.4);e.push({alongX:c,dir:h,fixed:u,speed:t.range(6,13),off:t.range(0,5e3),len:c?4800:3800,min:c?-2400:-1900,ph:t()})}this.cars=hd(Kt,e),this.scene.add(this.cars.mesh);let i=new Float32Array(1500*4*3),r=new Float32Array(1500*4*3),o=new Float32Array(1500*4);for(let l=0;l<1500;l++)for(let c=0;c<4;c++){let h=(l*4+c)*3,u=c<2;u?(r[h]=3,r[h+1]=2.9,r[h+2]=2.3):(r[h]=2.4,r[h+1]=.1,r[h+2]=.07),o[l*4+c]=u?.7:.5}this.carGlow=ai(Kt,{positions:i,colors:r,sizes:o,fogDensity:4e-5,minPx:1.4,maxPx:12}),this.scene.add(this.carGlow.points);let a=[];for(let l=0;l<260;l++){let c=t.pick([-3,-1.2,1.2,3,-31,31,-29,29]);a.push({x0:-1320,x1:-110,z:c+t.range(-.4,.4),dir:t()<.5?1:-1,speed:t.range(1.1,1.6),off:t.range(0,2400),ph:t()})}for(let l=0;l<40;l++)a.push({x0:-135,x1:-52,z:t.pick([-26,-20,-16,16,20,26])+t.range(-.8,.8),dir:t()<.5?1:-1,speed:t.range(.9,1.5),off:t.range(0,800),ph:t()});this.peds=mc(Kt,a),this.scene.add(this.peds.mesh)}applyTime(t){let e=this.sampleTrack("palette",t,0),n=Math.min(1,Math.floor(e)),i=Math.min(1,e-n),r=Wp[n],o=Wp[Math.min(2,n+1)],a=this.sky.uniforms,l=(h,u)=>{this._ca.set(r[h]),this._cb.set(o[h]),u.value.lerpColors(this._ca,this._cb,i)};l("zenith",a.uZenith),l("horizon",a.uHorizon),l("horizonWarm",a.uHorizonWarm),l("sun",a.uSunColor),l("cloudLit",a.uCloudLit),l("cloudDark",a.uCloudDark),this._ca.set(r.fog),this._cb.set(o.fog),this.scene.fog.color.lerpColors(this._ca,this._cb,i),this.scene.fog.density=r.fogD+(o.fogD-r.fogD)*i,this._ca.set(r.sunCol),this._cb.set(o.sunCol),this.sun.color.lerpColors(this._ca,this._cb,i),this.nightU.value=this.sampleTrack("night",t,.1);let c=this.sampleTrack("sunPower",t,3);this.sun.intensity=c,a.uSunStrength.value=Math.min(1,c/2),this.hemi.intensity=.5*Math.max(.22,1-this.nightU.value*1.05),this.scene.environmentIntensity=this.sampleTrack("envPower",t,.6)}onBeforeRender({t,projScale:e,camera:n}){let i=t+this.timeOffset;this.sky.mesh.position.copy(n.position),this.sky.uniforms.uTime.value=i*5;let r=this.scene.fog.density;for(let l of[this.lamps,this.carGlow,this.beacon])l.uniforms.uProj.value=e,l.uniforms.uFog.value=r;let o=this.nightU.value;this.lamps.uniforms.uGain.value=.08+1*o,this.carGlow.uniforms.uGain.value=.5+.7*o,this.beacon.uniforms.uGain.value=.15+.85*Math.pow(.5+.5*Math.sin(i*Math.PI*1.25),3),this.towerSteel.emissiveIntensity=.03+.4*Math.max(0,o-.25),this.towerSteel2.emissiveIntensity=this.towerSteel.emissiveIntensity,this.lampHeadM.emissiveIntensity=.2+2.4*o,this.deckMat.emissiveIntensity=.25+1*o;for(let l of this.baseMats)l.emissiveIntensity=.25+.9*o;this.bolM.emissiveIntensity=.1+2*o,this.cars.update(i,this.carGlow.points.geometry.attributes.position.array),this.carGlow.points.geometry.attributes.position.needsUpdate=!0,this.peds.update(i);let a=this.snow.uniforms;a.uTime.value=i,a.uCam.value.copy(n.position),a.uProj.value=e,a.uFog.value=r}}});function $x(s,t,e,n){let i=s*e*t*e,r=Math.min(1,Math.sqrt(n*1e6/i));return{w:Math.max(2,Math.round(s*e*r)),h:Math.max(2,Math.round(t*e*r)),scale:r}}function Kx(s,t,e,{rate:n,vmax:i}=Ww){let r=t-s;if(Math.abs(r)<1e-5)return fr(t);let o=r*(1-Math.exp(-n*e)),a=i*e;return Math.abs(o)>a&&(o=Math.sign(o)*a),fr(s+o)}var fr,Xp,qx,Yx,qp,Yp,Zx,Zp,Jx,Ww,$p=pe(()=>{fr=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),Xp=(s,t,e)=>{let n=fr((e-s)/(t-s));return n*n*(3-2*n)},qx=(s,t,e)=>fr(-s/Math.max(1,t-e)),Yx=(s,t=7)=>Math.min(1,fr(s)/.94)*t,qp=s=>1-Xp(.88,1.12,s),Yp=(s,t,e,n=.03)=>Xp(s,s+n,e)*(1-Xp(t-n,t,e)),Zx=[{id:"T0",mp:.3,samples:0,dof:!1},{id:"T1",mp:.55,samples:2,dof:!1},{id:"T2",mp:1.25,samples:2,dof:!0},{id:"T3",mp:2.4,samples:4,dof:!1}];Zp=(s,t,e)=>!!e&&Math.min(s,t)<700,Jx=(s,t,e)=>Zp(s,t,e)?"T1":"T2",Ww={rate:6.5,vmax:.07/.15}});function qw(s,t){let e=s.keys,n=e.length;if(t<=e[0][0]||t>=e[n-1][0])return null;let i=0;for(;t>e[i+1][0];)i++;let r=e[i+1][0]-e[i][0],o=(t-e[i][0])/r,a=(x,m)=>x===0||x===n-1?0:(e[x+1][m]-e[x-1][m])/(e[x+1][0]-e[x-1][0]),l=o*o,c=l*o,h=2*c-3*l+1,u=c-2*l+o,d=-2*c+3*l,p=c-l,f=[];for(let x=1;x<=6;x++)f.push(h*e[i][x]+u*r*a(i,x)+d*e[i+1][x]+p*r*a(i+1,x));return f}function Yw(s,t){return s.map(([e,n,i,r,o,a])=>({pos:[t.x+n*Math.cos(Qx(e)),i,t.z+n*Math.sin(Qx(e))],target:[t.x,r,t.z],fov:o,speed:a}))}function Zw(s,t,e,n,i){let r=i*i,o=r*i,a=(l,c,h,u)=>.5*(2*c+(-l+h)*i+(2*l-5*c+4*h-u)*r+(-l+3*c-3*h+u)*o);return[a(s[0],t[0],e[0],n[0]),a(s[1],t[1],e[1],n[1]),a(s[2],t[2],e[2],n[2])]}function $w(s,t,e=0){let n=(i,r)=>Math.sin(s*i+r+e);return[t*(n(1.7,.3)*.6+n(3.1,1.9)*.4),t*(n(1.3,2.1)*.6+n(2.7,.7)*.4),t*(n(1.1,4.2)*.6+n(2.3,3.3)*.4)]}function Kw(s,t){return t.map(([e,n,i,r,o,a=80,l=0])=>{let c=e*s.length,[h,u,d,p]=s.at(c),[f,x]=s.at(c+a);return{pos:[h-p*l,n,u+d*l],target:[f,i,x],fov:r,speed:o}})}var t_,Qx,Jp,Jw,xc,Kp,md,Qp=pe(()=>{Fp();$p();t_=s=>{let t=s*s*(3-2*s),e=1-(1-s)*(1-s);return .5*t+.5*e};Qx=s=>s*Math.PI/180;Jp=class{constructor(t,{shakeAmp:e=.1,shakeSeed:n=4,timeWarp:i=t_,N:r=160,t0:o=0,dur:a=7}={}){this.t0=o,this.dur=a,this.keys=t,this.shakeAmp=e,this.shakeSeed=n,this.timeWarp=i;let l=t.length,c=(l-1)*r;this.cum=new Float64Array(c+1);let h=this._at(0).position;for(let u=1;u<=c;u++){let d=u/c*(l-1),p=this._at(d).position,f=this._speed(d);this.cum[u]=this.cum[u-1]+Math.hypot(p[0]-h[0],p[1]-h[1],p[2]-h[2])/f,h=p}this.total=this.cum[c],this.M=c}_speed(t){let e=this.keys,n=Math.min(e.length-2,Math.floor(t)),i=t-n;return e[n].speed+(e[n+1].speed-e[n].speed)*i}_at(t){let e=this.keys,n=e.length,i=Math.min(n-2,Math.max(0,Math.floor(t))),r=t-i,o=l=>Math.min(n-1,Math.max(0,l)),a=l=>Zw(e[o(i-1)][l],e[i][l],e[o(i+1)][l],e[o(i+2)][l],r);return{position:a("pos"),target:a("target"),fov:e[i].fov+(e[i+1].fov-e[i].fov)*r}}sampleU(t,e=0){let i=(this.timeWarp?this.timeWarp(Math.min(1,Math.max(0,t))):t)*this.total,r=0,o=this.M;for(;o-r>1;){let h=r+o>>1;this.cum[h]<=i?r=h:o=h}let a=(i-this.cum[r])/Math.max(1e-12,this.cum[o]-this.cum[r]),l=(r+a)/this.M*(this.keys.length-1),c=this._at(l);if(this.shakeAmp>0){let h=$w(e,this.shakeAmp,this.shakeSeed);c.position=c.position.map((u,d)=>u+h[d])}return c}sample(t){return this.sampleU((t-this.t0)/this.dur,t)}},Jw=30,xc=class{constructor(t){let{globalStart:e,duration:n=7,landscapeKeys:i,adj:r,portraitSpec:o,axis:a,portraitKeys:l}=t;this.t0=e,this.dur=n,this.landscape=new dr(i,{shakeAmp:.1,shakeSeed:4,timeWarp:t_}),this.portrait=new Jp(l??Yw(o,a),{t0:e,dur:n}),this.adj=r,this.weight=0,this.blendLift=t.blendLift??Jw}pOf(t){return fr((t-this.t0)/this.dur)*.94}landscapeAt(t){let e=this.landscape.sample(t),n=this.adj?qw(this.adj,this.pOf(t)):null;return n&&(e.position=e.position.map((i,r)=>i+n[r]),e.target=e.target.map((i,r)=>i+n[3+r])),e}portraitAt(t){return this.portrait.sample(t)}sample(t,e=this.weight){if(e<=0)return this.landscapeAt(t);let n=this.portraitAt(t);if(e>=1)return n;let i=this.landscapeAt(t),r=(a,l)=>a.map((c,h)=>c+(l[h]-c)*e),o=r(i.position,n.position);return o[1]+=this.blendLift*4*e*(1-e),{position:o,target:r(i.target,n.target),fov:i.fov+(n.fov-i.fov)*e}}},Kp=class{constructor(t){this.pts=t,this.cum=[0];for(let e=1;e<t.length;e++)this.cum.push(this.cum[e-1]+Math.hypot(t[e][0]-t[e-1][0],t[e][1]-t[e-1][1]));this.length=this.cum[t.length-1]}at(t){let e=this.pts,n=e.length,i=this.cum,r=Math.min(this.length,Math.max(0,t)),o=0;for(;o<n-2&&r>i[o+1];)o++;let a=Math.max(1e-9,i[o+1]-i[o]),l=(r-i[o])/a;return[e[o][0]+(e[o+1][0]-e[o][0])*l,e[o][1]+(e[o+1][1]-e[o][1])*l,(e[o+1][0]-e[o][0])/a,(e[o+1][1]-e[o][1])/a]}};md=class extends xc{constructor(t){let e=new Kp(t.route);super({...t,portraitKeys:Kw(e,t.dolly)}),this.poly=e}}});var e_,Qw,jw,tT,_c,jp=pe(()=>{e_={x:-90,z:0,tipY:147.2,glowY:149},Qw=[{t:11,pos:[-420,40,14],target:[-140,54,-2],fov:38},{t:12.78,pos:[-313,50,32],target:[-100,103,-20],fov:34},{t:14.36,pos:[-211,62,44],target:[29,94,-137],fov:35},{t:15.99,pos:[-111,77,54],target:[-54,95,-240],fov:36},{t:16.5,pos:[-74,102,52.9],target:[-125.1,66.4,-242.7],fov:41.1},{t:17,pos:[-35,123.4,55],target:[-190.4,102.7,-201.6],fov:46.7},{t:17.5,pos:[57.3,122.4,49.4],target:[-229.9,95.1,-37.3],fov:45.9},{t:18,pos:[64.8,122.3,31.1],target:[-234.1,74.2,5],fov:45.9}].map(s=>({...s,ease:t=>t})),jw={keys:[[.4,0,0,0,0,0,0],[.44,-13.9,10.8,28.9,-.6,74.1,32.6],[.47,-17.1,19.3,53.7,9.5,60.2,19.2],[.5,-6.9,27.5,66.3,5.3,46.3,15],[.53,7.6,32.3,56.1,-12.7,48.9,.5],[.56,.2,26.8,28.8,-26.6,66.5,10],[.6,0,0,0,0,0,0]]},tT=[[180,280,46,66,50,1],[167.7,235,99.5,80,51,1],[141.2,204.6,117.9,90,52,.9],[103,170.6,127.9,95.6,53,.75],[83.4,146,127.9,106.9,54,.65],[11.3,132.3,126,106.9,55,.6],[3.5,149.3,124.1,95.4,56,.5]],_c={globalStart:11,duration:7,landscapeKeys:Qw,adj:jw,portraitSpec:tT,axis:{x:e_.x,z:e_.z}}});var gd,n_=pe(()=>{Xx();Qp();pc();jp();gd=class extends pd{constructor(t,e,n,i={}){super(t,e,n,{...i,shot:"odori"}),this.fadeSec=0,this.fx=i.fx??{}}async build(){await super.build(),this.videoRig=this.rig,this.rig=new xc(_c),nd(this,{tiled:this.fx.tiled,haze:this.fx.haze,tileExclude:[this.cars.mesh,this.peds.mesh,this.scene.children.find(t=>t.isInstancedMesh&&t.count===this.boxes.n)],skyUniforms:this.sky.uniforms})}setAmbientCount(t){this.snow.points.geometry.setDrawRange(0,t),this.ambientCount=t}setLayoutWeight(t){this.rig.weight=t}}});var i_,s_=pe(()=>{i_=[{id:"cap-sapporo",title:"SAPPORO",sub:"\u672D\u5E4C",a:-.05,b:.17},{id:"cap-tower",title:"\u3055\u3063\u307D\u308D\u30C6\u30EC\u30D3\u5854",sub:"Sapporo TV Tower",a:.2,b:.45},{id:"cap-odori",title:"\u5927\u901A\u516C\u5712",sub:"Odori Park",a:.47,b:.7},{id:"cap-teine",title:"\u624B\u7A32\u5C71\u306E\u65B9\u3078",sub:"Toward Mt. Teine",a:.72,b:1.08}]});var r_={};Td(r_,{default:()=>eT});var eT,o_=pe(()=>{n_();s_();jp();eT={contract:1,meta:{id:"sapporo",name:{ja:"\u672D\u5E4C",en:"Sapporo"},season:"winter",theme:"\u96EA\u306E\u5927\u901A\u516C\u5712\uFF08\u663C\u2192\u5915\uFF09",docTitle:"SAPPORO \u2014 JAPAN \u2014 THE CITY COLLECTION"},captions:i_,timeline:{globalStart:_c.globalStart,duration:_c.duration},ambient:{name:"\u96EA",counts:{normal:14e3,light:7e3}},tuning:{haze:{},grade:{}},async buildScene(s){let t=new gd(s.cityMeta,s.index,s.total,{renderer:s.renderer,fx:s.fx});return await t.build(),t}}});function a_(s,t){let e=xd(Go.x0,Go.crestX,s)*(1-xd(-1150,-1500,s)),n=Math.abs(t-250),i=1-xd(260,760,n);return Go.top*e*(1-xd(700,1e3,n))*(.4+.6*i)}var dn,Ho,Es,Vo,Go,xd,l_,c_,Wo=pe(()=>{dn=[{id:"aoba",dir:"x",c:230,w:50,a:-330,b:330,kind:1},{id:"joz",dir:"x",c:0,w:46,a:-240,b:110,kind:2},{id:"ichi-n",dir:"z",c:0,w:20,a:-130,b:40,kind:0},{id:"ichi-arcade",dir:"z",c:0,w:14,a:40,b:200,kind:3},{id:"ichi-s",dir:"z",c:0,w:20,a:200,b:330,kind:0},{id:"conn",dir:"z",c:-170,w:22,a:-130,b:330,kind:0},{id:"w1",dir:"z",c:-85,w:14,a:-130,b:330,kind:0},{id:"w2",dir:"z",c:-300,w:16,a:24,b:330,kind:0},{id:"e1",dir:"z",c:110,w:20,a:24,b:330,kind:0},{id:"e1n",dir:"z",c:110,w:20,a:-130,b:-24,kind:0},{id:"e2",dir:"z",c:200,w:18,a:-130,b:330,kind:0},{id:"cross",dir:"x",c:115,w:16,a:-330,b:330,kind:0},{id:"north",dir:"x",c:-120,w:18,a:-330,b:330,kind:0},{id:"south",dir:"x",c:330,w:18,a:-330,b:330,kind:0}],Ho=[{id:"nishi",x0:-340,x1:-240,z0:-55,z1:55},{id:"kotodai",x0:110,x1:170,z0:-45,z1:45}],Es=[{id:"station",x0:205,x1:352,z0:120,z1:205}],Vo={x0:-335,x1:340,z0:-240,z1:400},Go={x0:-320,top:95,crestX:-460},xd=(s,t,e)=>{let n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)};l_=[-.86,.3,-.3],c_=[[250,232],[60,232],[-170,232],[-170,110],[-170,0],[0,0],[0,110],[0,215],[-90,236],[-200,238],[-310,236],[-430,230]]});var nT,h_,iT,sT,rT,oT,aT,lT,pr,tm=pe(()=>{Wo();nT=0,h_=7,iT=s=>{let t=s*s*(3-2*s),e=1-(1-s)*(1-s);return .5*t+.5*e},sT=s=>h_*iT(Math.min(1,s/.94)),rT=s=>s,oT=[[0,[330,96,238],[60,26,232],40],[.1,[80,56,232],[-250,22,232],38],[.2,[-90,100,230],[-210,30,40],38],[.27,[-165,92,120],[-185,14,10],37],[.31,[-175,40,40],[-110,8,0],36],[.36,[-150,4.8,0],[-20,7,0],35],[.44,[-85,4.8,0],[30,7,4],35],[.51,[-12,5.2,4],[0,7,90],37],[.56,[0,6,55],[0,8,150],40],[.63,[0,6.6,130],[0,9,200],42],[.7,[0,9.5,190],[-30,14,238],44],[.74,[-30,36,236],[-200,34,238],44],[.81,[-230,78,240],[-430,100,232],44],[.88,[-380,118,242],[-300,50,236],43],[.94,[-428,128,244],[-120,16,218],42],[1,[-428,128,244],[-120,16,218],42]],aT=oT.map(([s,t,e,n])=>({t:sT(s),pos:t,target:e,fov:n,ease:rT})),lT=[[0,85,30,58,1,120,0],[.14,46,24,60,1,100,0],[.25,38,20,60,1,90,0],[.286,40,18,60,1.1,60,0],[.35,26,14,60,1.25,70,0],[.43,8,10,62,1.25,50,0],[.5,4.8,8,62,.9,50,0],[.56,4.8,8,62,.8,45,0],[.63,5.5,8,62,.85,45,0],[.706,7,10,62,.9,45,0],[.75,26,24,60,3,-120,0],[.88,72,30,56,5,-300,0],[1,135,12,52,5,-620,0]],pr={globalStart:nT,duration:h_,landscapeKeys:aT,route:c_,dolly:lT}});function vc(s,t,e,n,i,r,o){let a=new si(1,0),l=a.attributes.position,c=l.count,h=new Float32Array(c*3),u=new Float32Array(c*3),d=p=>{let f=Math.sin((p+r)*12.9898)*43758.5453;return .86+.28*(f-Math.floor(f))};for(let p=0;p<c;p++){let f=l.getX(p),x=l.getY(p),m=l.getZ(p),g=Math.hypot(f,x,m);h[p*3]=f/g,h[p*3+1]=x/g,h[p*3+2]=m/g;let _=d(Math.floor(p/3)+r*7);l.setXYZ(p,s+f*n*_,t+x*n*i*_,e+m*n*_);let y=.5+.5*(x/g),M=o*(.7+.5*y);u[p*3]=.2*M,u[p*3+1]=.36*M,u[p*3+2]=.1*M}return a.setAttribute("normal",new $t(h,3)),a.setAttribute("color",new $t(u,3)),a.deleteAttribute("uv"),a}function d_(s,t,e,n,i){let r=new ln(n,e,1,5,1,!1);r.translate(0,.5,0);let o=new L(t[0]-s[0],t[1]-s[1],t[2]-s[2]),a=o.length();r.scale(1,a,1),r.applyQuaternion(new Se().setFromUnitVectors(new L(0,1,0),o.normalize())),r.translate(s[0],s[1],s[2]);let l=r.attributes.position.count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c[h*3]=i[0],c[h*3+1]=i[1],c[h*3+2]=i[2];return r.setAttribute("color",new $t(c,3)),r.deleteAttribute("uv"),r}function hT(){let s=[.115,.1,.085],t=[d_([0,0,0],[0,4.6,0],.42,.3,s)],e=[],n=6;for(let i=0;i<n;i++){let r=i/n*Math.PI*2+.3,o=Math.cos(r),a=Math.sin(r);t.push(d_([0,4.4,0],[o*3.4,9.2,a*3.4],.22,.1,s)),e.push(vc(o*4.2,10,a*4.2,3.5,.82,i,1)),e.push(vc(o*2.2,13.2,a*2.2,3,.8,i+9,1.1))}e.push(vc(0,11.5,0,3.6,.9,20,1.05)),e.push(vc(0,14.6,0,3,.8,21,1.15));for(let i=0;i<3;i++){let r=i*2.1;e.push(vc(Math.cos(r)*3.2,7,Math.sin(r)*3.2,2.2,.8,30+i,.8))}return{wood:un(t),leaf:un(e)}}function uT(s){let t=[],e=dn.map(cT),n=(r,o,a)=>!dn.some((l,c)=>l!==a&&l.kind!==3&&u_(e[c],r,o,l.kind===0?.5:-.5))&&!Ho.some(l=>u_(l,r,o,0)),i=(r,o,a,l,c,h=r.b)=>{for(let u=r.a+l;u<h;u+=a){let d=r.dir==="x"?u:r.c+o,p=r.dir==="x"?r.c+o:u;n(d,p,r)&&t.push([d+s.range(-.4,.4),p+s.range(-.4,.4),c*s.range(.92,1.12),s()])}};for(let r of dn)if(r.kind===1)i(r,0,13,4,1.05,200),i(r,-20.6,13,10.5,1,200),i(r,20.6,13,10.5,1,200);else if(r.kind===2)i(r,-4.5,16,3,1.1),i(r,4.5,16,11,1.1),i(r,-20.2,16,11,1),i(r,20.2,16,3,1);else if(r.kind===0){let o=r.w/2-1.8;i(r,-o,22,8,.55),i(r,o,22,19,.55)}for(let r of Ho)for(let o=0;o<26;o++)t.push([s.range(r.x0+6,r.x1-6),s.range(r.z0+6,r.z1-6),s.range(.8,1.15),s()]);return t}function f_(s){let{wood:t,leaf:e}=hT(),n=uT(s),i=new be({vertexColors:!0,roughness:.95,metalness:0}),r=new be({vertexColors:!0,roughness:.88,metalness:0});r.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPl;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPl = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPl;
`+Zn).replace("#include <color_fragment>",`#include <color_fragment>
        {
          float lt = 0.55 * vnoise(vWPl.xz * 0.8 + vWPl.y * 0.6) + 0.45 * vnoise(vWPl.xz * 2.6 - vWPl.y * 1.9);
          float d = length(vWPl - cameraPosition);
          diffuseColor.rgb *= mix(1.0, 0.62 + 0.75 * lt, 1.0 - smoothstep(60.0, 400.0, d));
        }`)},i.customProgramCacheKey=()=>"sendai-wood-v1",r.customProgramCacheKey=()=>"sendai-leaf-v1";let o=(c,h,u)=>{let d=new Ze(c,h,n.length),p=new Vt,f=new Se,x=new L,m=new L,g=new ct;return n.forEach(([_,y,M,b],w)=>{f.setFromAxisAngle(new L(0,1,0),b*6.283),x.set(M,M*(.92+.16*b),M),m.set(_,0,y),p.compose(m,f,x),d.setMatrixAt(w,p),h===r&&(g.setRGB(.9+.2*b,.95+.1*b,.85+.2*(1-b)),d.setColorAt(w,g))}),d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0),d.castShadow=u,d.receiveShadow=!1,d.frustumCulled=!1,d},a=o(t,i,!0),l=o(e,r,!0);return a.name="zelkova-wood",l.name="zelkova-leaf",{meshes:[a,l],count:n.length,tris:(t.index?t.index.count:t.attributes.position.count)/3+(e.index?e.index.count:e.attributes.position.count)/3}}var cT,u_,p_=pe(()=>{Ie();ko();Ts();Wo();cT=s=>s.dir==="x"?{x0:s.a,x1:s.b,z0:s.c-s.w/2,z1:s.c+s.w/2}:{x0:s.c-s.w/2,x1:s.c+s.w/2,z0:s.a,z1:s.b},u_=(s,t,e,n=0)=>t>s.x0-n&&t<s.x1+n&&e>s.z0-n&&e<s.z1+n});function m_(){let{z0:s,z1:t,half:e,spring:n,crown:i}=mr,r=8,o=[.62,.64,.66],a=[],l=(_,y,M)=>{let b=new L(y[0]-_[0],y[1]-_[1],0),w=b.length(),v=new ln(M,M,w,5,1,!1);v.applyQuaternion(new Se().setFromUnitVectors(new L(0,1,0),b.normalize())),v.translate((_[0]+y[0])/2,(_[1]+y[1])/2,0),a.push(_d(v,o))},c=10,h=_=>{let y=-e+.2+2*(e-.2)*_,M=1-Math.pow(2*_-1,2);return[y,n+(i-n)*M]};for(let _ of[-1,1])l([_*(e-.2),0],[_*(e-.2),n],.1);for(let _=0;_<c;_++)l(h(_/c),h((_+1)/c),.09);l([-(e-.2),4.2],[e-.2,4.2],.05);let u=un(a),d=new be({vertexColors:!0,roughness:.5,metalness:.5});d.customProgramCacheKey=()=>"sendai-arcade-v1";let p=Math.floor((t-s)/r)+1,f=new Ze(u,d,p),x=new Vt;for(let _=0;_<p;_++)x.makeTranslation(0,0,s+_*r),f.setMatrixAt(_,x);f.instanceMatrix.needsUpdate=!0,f.castShadow=!0,f.receiveShadow=!1,f.frustumCulled=!1,f.name="arcade-frame";let m=[];for(let[_,y]of[[0,i],[-5.2,10.2],[5.2,10.2],[-e+.2,n],[e-.2,n]]){let M=new ln(.07,.07,t-s,5);M.rotateX(Math.PI/2),M.translate(_+0,y,(s+t)/2),m.push(_d(M,o))}let g=new fe(un(m),d);return g.castShadow=!1,g.frustumCulled=!1,g.name="arcade-beams",{meshes:[f,g],archCount:p}}function g_(s,t){let{z0:e,z1:n,half:i}=mr,r=[[.75,.2,.18],[.2,.4,.7],[.85,.7,.25],[.25,.55,.4],[.85,.85,.8],[.6,.3,.55],[.9,.5,.2]],o=[],a=[];for(let x of[-1,1])for(let m=e+2;m<n-3;){let g=4+s()*3.5;o.push({x:0+x*(i-.7),y:3.3,z:m+g/2,w:g,d:1.4,h:.35,c:r[Math.floor(s()*r.length)]}),s()<.55&&a.push({x:0+x*(i-.35),y:5.6+s()*1.4,z:m+g/2,w:.2,h:1+s()*.8,d:.9+s()*.5,c:r[Math.floor(s()*r.length)],side:x}),m+=g+.4}let l=new be({color:16777215,roughness:.7,metalness:0});l.customProgramCacheKey=()=>"sendai-shop-v1",l.onBeforeCompile=x=>{x.uniforms.uShopGlow=t.uShopGlow,x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
uniform float uShopGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * uShopGlow;`)};let c=new an(1,1,1),h=(x,m)=>{let g=new Ze(c,l,x.length),_=new Vt,y=new L,M=new Se,b=new L,w=new ct;return x.forEach((v,S)=>{y.set(v.x,v.y,v.z),b.set(v.d,v.h,v.w),M.identity(),_.compose(y,M,b),g.setMatrixAt(S,_),w.setRGB(...v.c),g.setColorAt(S,w)}),g.instanceMatrix.needsUpdate=!0,g.instanceColor.needsUpdate=!0,g.castShadow=!1,g.frustumCulled=!1,g},u=o.map(x=>({...x,x:x.x})),d=a.map(x=>({x:x.x-x.side*.45,y:x.y,z:x.z,w:x.w,h:x.h,d:x.d,c:x.c})),p=h(u,0),f=h(d,0);return p.name="awnings",f.name="signs",{meshes:[p,f],count:o.length+a.length}}function x_(){let s=[],t=[],e=[],{z0:n,z1:i}=mr;for(let r of[-5.2,0,5.2])for(let o=n;o<=i;o+=3)s.push(r+0,r===0?11.2:10.1,o),t.push(3,1.9,.9),e.push(.5);for(let r of[-5.9,5.9])for(let o=n+2;o<=i;o+=5)s.push(r+0,4.6,o),t.push(2.6,1.6,.8),e.push(.45);return{positions:new Float32Array(s),colors:new Float32Array(t),sizes:new Float32Array(e)}}function __(s){let t=[],e=[],n=[],i=(h,u,d,p=1)=>t.push({x:h,y:u,z:d,s:p*(.9+.2*s()),yaw:s()*6.283,phase:s()*6.283}),{z0:r,z1:o,half:a}=mr;for(let h=r+1;h<o;h+=3.2)i(0-4.6+(s()-.5)*.4,10.3,h+(s()-.5)*.6,1),i(0+4.6+(s()-.5)*.4,10.3,h+1.6+(s()-.5)*.6,.95),i(0-2.3,10.4,h+.8+(s()-.5)*.5,.72),i(0+2.3,10.4,h+2.4+(s()-.5)*.5,.7);for(let h=r+4;h<o;h+=8)n.push([0,10.6,h]);let l=dn.find(h=>h.id==="joz");for(let h=l.a+12;h<l.b-6;h+=15)for(let u of[-9.6,9.6,-21.4,21.4])Math.abs(h-0)<14||(e.push([h,0+u]),i(h,7.2,0+u-Math.sign(u)*.9,1.05),s()<.5&&i(h+1.1,6.6,0+u-Math.sign(u)*.9,.85));for(let[h,u]of[[-125,30],[205,325]])for(let d=h;d<u;d+=13)for(let p of[-1,1])e.push([0+p*8.8,d]),i(0+p*7.9,6.6,d,.85);let c=Es[0];for(let h=0;h<6;h++){let u=c.x0+14+h*14,d=c.z1-4;e.push([u,d]),i(u,6.8,d-.8,.9)}return{items:t,poles:e,balls:n}}function v_(s,t){let e=new ln(.035,.06,7.8,5);e.translate(0,3.9,0);let n=new ln(.03,.03,1.2,4);n.rotateZ(Math.PI/2),n.translate(-.5,7.5,0);let i=un([_d(e,[.3,.36,.16]),_d(n,[.3,.36,.16])]),r=new be({vertexColors:!0,roughness:.8,metalness:0}),o=new Ze(i,r,s.length),a=new Vt;s.forEach(([x,m],g)=>{a.makeTranslation(x,0,m),o.setMatrixAt(g,a)}),o.instanceMatrix.needsUpdate=!0,o.castShadow=!1,o.frustumCulled=!1,o.name="bamboo-poles";let l=new si(.5,1).toNonIndexed(),c=l.attributes.position,h=new Float32Array(c.count*3),u=new Float32Array(c.count*3),d=[[.06,.3,.85],[.88,.08,.1],[.96,.74,.08],[.92,.92,.88],[.45,.16,.62],[.95,.35,.55]];for(let x=0;x<c.count/3;x++){let m=d[Math.floor(dT(x+17)*5.99)];for(let g=0;g<3;g++)h.set(m,(x*3+g)*3)}for(let x=0;x<c.count;x++){let m=c.getX(x),g=c.getY(x),_=c.getZ(x),y=Math.hypot(m,g,_);u[x*3]=m/y,u[x*3+1]=g/y,u[x*3+2]=_/y}l.setAttribute("color",new $t(h,3)),l.setAttribute("normal",new $t(u,3)),l.deleteAttribute("uv");let p=new be({vertexColors:!0,roughness:.7}),f=new Ze(l,p,t.length);return t.forEach(([x,m,g],_)=>{a.makeTranslation(x,m,g),f.setMatrixAt(_,a)}),f.instanceMatrix.needsUpdate=!0,f.castShadow=!1,f.frustumCulled=!1,f.name="kusudama",[o,f]}var em,mr,_d,dT,y_=pe(()=>{Ie();ko();Wo();em=dn.find(s=>s.id==="ichi-arcade"),mr={z0:em.a+2,z1:em.b-2,half:em.w/2,spring:7.6,crown:11.6},_d=(s,t)=>{let e=s.attributes.position.count,n=new Float32Array(e*3);for(let i=0;i<e;i++)n.set(t,i*3);return s.setAttribute("color",new $t(n,3)),s.deleteAttribute("uv"),s},dT=s=>{let t=Math.sin(s*12.9898)*43758.5453;return t-Math.floor(t)}});function fT(){let e=[],n=[],i=[],r=[],o=[],a=[];for(let g=0;g<20;g++){let _=g/20*Math.PI*2+Zi(g)*.3,y=.1+.26*Zi(g+40),M=3.3+1.5*Zi(g+80),b=.085+.04*Zi(g+120),w=yc[(g+(Zi(g+7)>.8?1:0))%5],v=_+1.57+(Zi(g+11)-.5)*1,S=Math.cos(v),C=Math.sin(v),A=e.length/3;for(let R=0;R<=10;R++){let D=R/10,z=-.15-M*D,N=b*(1-.45*D);for(let O of[-1,1]){e.push(Math.cos(_)*y+S*N*O,z,Math.sin(_)*y+C*N*O);let W=.85+.3*Zi(g*31+R);n.push(w[0]*W,w[1]*W,w[2]*W),i.push(D),r.push(Zi(g+200)),o.push(-C,0,S)}}for(let R=0;R<10;R++){let D=A+R*2;a.push(D,D+1,D+2,D+1,D+3,D+2)}}let l=new Zt;l.setAttribute("position",new vt(e,3)),l.setAttribute("normal",new vt(o,3)),l.setAttribute("color",new vt(n,3)),l.setAttribute("aH",new vt(i,1)),l.setAttribute("aS",new vt(r,1)),l.setIndex(a);let c=new si(.42,1).toNonIndexed(),h=c.attributes.position,u=h.count,d=new Float32Array(u*3),p=new Float32Array(u),f=new Float32Array(u),x=new Float32Array(u*3);for(let g=0;g<u/3;g++){let _=yc[Math.floor(Zi(g+3)*6.99)%yc.length];for(let y=0;y<3;y++){let M=g*3+y;d.set(_,M*3),h.setY(M,h.getY(M)+.3)}}for(let g=0;g<u;g++){let _=h.getX(g),y=h.getY(g)-.3,M=h.getZ(g),b=Math.hypot(_,y,M);x[g*3]=_/b,x[g*3+1]=y/b,x[g*3+2]=M/b}c.setAttribute("color",new $t(d,3)),c.setAttribute("aH",new $t(p,1)),c.setAttribute("aS",new $t(f,1)),c.setAttribute("normal",new $t(x,3)),c.deleteAttribute("uv");let m=un([l.toNonIndexed(),c]);return m.deleteAttribute("uv"),m.computeBoundingSphere(),m.boundingSphere.radius+=1.6,m}function pT(){let s=[],t=[],e=[],n=[],i=[];for(let c of[0,Math.PI/2]){let h=Math.cos(c),u=Math.sin(c);for(let d=0;d<4;d++){let p=d/4,f=(d+1)/4,x=yc[d%5],m=.28*(1-.5*p),g=.28*(1-.5*f),_=-.15-4.2*p,y=-.15-4.2*f,M=[[-m,_,p],[m,_,p],[-g,y,f],[m,_,p],[g,y,f],[-g,y,f]];for(let[b,w,v]of M)s.push(h*b,w,u*b),t.push(...x),e.push(v),n.push(.5),i.push(-u,0,h)}}let o=new us(.4,0).toNonIndexed(),a=o.attributes.position;for(let c=0;c<a.count;c++){s.push(a.getX(c),a.getY(c)+.3,a.getZ(c)),t.push(...yc[(c>>2)%5]),e.push(0),n.push(0);let h=Math.hypot(a.getX(c),a.getY(c),a.getZ(c));i.push(a.getX(c)/h,a.getY(c)/h,a.getZ(c)/h)}let l=new Zt;return l.setAttribute("position",new vt(s,3)),l.setAttribute("normal",new vt(i,3)),l.setAttribute("color",new vt(t,3)),l.setAttribute("aH",new vt(e,1)),l.setAttribute("aS",new vt(n,1)),l.computeBoundingSphere(),l.boundingSphere.radius+=1.6,l}function M_(s){let t=new be({vertexColors:!0,roughness:.75,metalness:0,side:Un});return t.customProgramCacheKey=()=>"sendai-streamer-v1",t.onBeforeCompile=e=>{e.uniforms.uTime=s.uTime,e.uniforms.uGlow=s.uGlow,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float aH, aS; attribute float aPhase; uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        {
          float ph = aPhase, h = aH;
          float amp = 0.36 * h * h + 0.04 * h;
          float mainW = sin(uTime * 1.25 + ph + h * 2.0) + 0.55 * sin(uTime * 2.6 + ph * 1.7 + h * 3.7);
          float cross = 0.5 * sin(uTime * 1.05 + ph * 0.7 + h * 1.4 + 1.0);
          transformed.x += amp * mainW;
          transformed.z += amp * cross;
          transformed.x += 0.05 * h * sin(uTime * 5.0 + aS * 40.0 + h * 6.0);   // \u5E2F\u3054\u3068\u306E\u306F\u305F\u3081\u304D
          transformed.y += 0.18 * h * (1.0 - cos(amp * mainW * 1.5));
        }`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * uGlow;`)},t}function S_(s,t,e,n=80){let i=fT(),r=pT(),o=M_(e),a=M_(e),l=new Map;for(let g of s){let _=Math.floor(g.x/n)+","+Math.floor(g.z/n);(l.get(_)??l.set(_,[]).get(_)).push(g)}let c=new ei;c.name="streamers";let h=[],u=new Vt,d=new Se,p=new L,f=new L,x=new L(0,1,0);for(let[,g]of l){for(let S=g.length-1;S>0;S--){let C=Math.floor(t()*(S+1));[g[S],g[C]]=[g[C],g[S]]}let _=(S,C)=>{let A=new Ze(S.clone(),C,g.length);A.geometry.boundingSphere=S.boundingSphere.clone();let R=new Float32Array(g.length);return g.forEach((D,z)=>{d.setFromAxisAngle(x,D.yaw),f.set(D.s,D.s,D.s),p.set(D.x,D.y,D.z),u.compose(p,d,f),A.setMatrixAt(z,u),R[z]=D.phase}),A.geometry.setAttribute("aPhase",new _n(R,1)),A.instanceMatrix.needsUpdate=!0,A.castShadow=!1,A.receiveShadow=!1,A.frustumCulled=!0,A.computeBoundingSphere(),A},y=_(i,o),M=_(r,a);y.name="streamer-near",M.name="streamer-far";let b=0,w=0;for(let S of g)b+=S.x,w+=S.z;b/=g.length,w/=g.length;let v=0;for(let S of g)v=Math.max(v,Math.hypot(S.x-b,S.z-w));c.add(y,M),h.push({near:y,far:M,n:g.length,cx:b,cz:w,rad:v})}let m=s.length;return{group:c,chunks:h,total:m,setFraction(g){for(let _ of h){let y=Math.max(0,Math.min(_.n,Math.ceil(_.n*g)));_.near.count=y,_.far.count=y}},updateLod(g,_){let y=0,M=0;for(let b of h){let v=Math.hypot(g.x-b.cx,g.z-b.cz)-b.rad>_;b.near.visible=!v,b.far.visible=v,v?M+=b.far.count:y+=b.near.count}return{nearN:y,farN:M}},geoTris:{near:i.index?i.index.count/3:i.attributes.position.count/3,far:r.attributes.position.count/3}}}var yc,Zi,b_=pe(()=>{Ie();ko();yc=[[.06,.3,.85],[.88,.08,.1],[.96,.74,.08],[.92,.92,.88],[.45,.16,.62],[.95,.35,.55],[.1,.55,.3]],Zi=s=>{let t=Math.sin(s*12.9898)*43758.5453;return t-Math.floor(t)}});function w_(){let s=[];for(let t of dn){if(t.kind===3)continue;let e=t.w/2-1.2,n=Math.floor((t.b-t.a)/36);for(let i=0;i<=n;i++)for(let r of[-1,1]){let o=t.a+i*36+(r>0?18:0);if(o>t.b)continue;let a=t.dir==="x"?o:t.c+r*e,l=t.dir==="x"?t.c+r*e:o,c=t.dir==="x"?0:-r,h=t.dir==="x"?-r:0;s.push({base:[a,l],top:[a+c*1.5,9,l+h*1.5],yaw:Math.atan2(-h,c)})}}return s}function T_(){let s=[];for(let t of dn.filter(e=>e.kind===1||e.kind===2))for(let e of dn.filter(n=>n.kind===0&&n.dir==="z"&&n.a<=t.c&&n.b>=t.c&&t.a<n.c&&t.b>n.c))for(let n of[-1,1])for(let i of[-1,1])s.push({x:e.c+n*(e.w/2+1.2),z:t.c+i*(t.w/2-1.5),green:n*i>0});return s}function A_(s,t){let e=a=>gr(new ln(.07,.13,a,6,1).translate(0,a/2,0),[.16,.17,.18]),n=un([e(9),gr(new an(1.6,.1,.1).translate(.75,8.95,0),[.16,.17,.18]),gr(new an(.6,.14,.3).translate(1.5,8.9,0),[.4,.4,.36])]),i=un([e(6.5),gr(new an(.3,.9,.3).translate(0,6.2,0),[.1,.1,.11])]),r=new be({vertexColors:!0,roughness:.6,metalness:.4});r.customProgramCacheKey=()=>"sendai-pole-v1";let o=(a,l)=>{let c=new Ze(a,r,l.length),h=new Vt,u=new Se,d=new L,p=new L(1,1,1);return l.forEach((f,x)=>{u.setFromAxisAngle(new L(0,1,0),f.yaw??0),d.set(f.base?f.base[0]:f.x,0,f.base?f.base[1]:f.z),h.compose(d,u,p),c.setMatrixAt(x,h)}),c.instanceMatrix.needsUpdate=!0,c.castShadow=!1,c.frustumCulled=!1,c};return[o(n,s),o(i,t)]}function E_(){let s=Es[0],t=s.x0+8,e=s.x1-40,n=s.z0+6,i=s.z1-5,r=8.4,o=[.55,.54,.52],a=[.22,.23,.25],l=[],c=(x,m,g,_,y,M,b)=>l.push(gr(new an(_,y,M).translate(x,m,g),b));c((t+e)/2,r,(n+i)/2,e-t,.9,i-n,o);let h=[],u=(x,m,g,_)=>{let y=Math.hypot(g-x,_-m),M=new an(y,1,.18);M.rotateY(-Math.atan2(_-m,g-x)),M.translate((x+g)/2,r+.95,(m+_)/2),l.push(gr(M,a));for(let b=0;b<y;b+=9)h.push([x+(g-x)*b/y,r+1.25,m+(_-m)*b/y])};u(t,n,e,n),u(t,i,e,i),u(t,n,t,i),u(e,n,e,i);for(let x=t+10;x<e;x+=24)for(let m of[n+5,i-5])l.push(gr(new ln(.7,.8,r,8).translate(x,r/2,m),o));c(t+14,r+2.2,(n+i)/2,6,3.6,8,a);let d=un(l),p=new be({vertexColors:!0,roughness:.8,metalness:.05,emissive:new ct(1,.7,.4),emissiveIntensity:0});p.customProgramCacheKey=()=>"sendai-deck-v1";let f=new fe(d,p);return f.castShadow=!0,f.receiveShadow=!0,f.name="deck",f.frustumCulled=!1,{mesh:f,mat:p,lights:h,bounds:{x0:t,x1:e,z0:n,z1:i,y:r}}}var gr,C_=pe(()=>{Ie();ko();Wo();gr=(s,t)=>{let e=s.attributes.position.count,n=new Float32Array(e*3);for(let i=0;i<e;i++)n.set(t,i*3);return s.setAttribute("color",new $t(n,3)),s.deleteAttribute("uv"),s}});var R_,P_,im,I_,L_,vd,D_=pe(()=>{Ie();Op();Bp();ad();cd();Gp();zp();sd();Ts();Qp();pc();tm();p_();y_();b_();C_();Wo();R_=1200,P_=new L(...l_).normalize(),im=[{zenith:"#2a66b6",horizon:"#bcd3ec",horizonWarm:"#ffc488",sun:"#ffd6a6",cloudLit:"#ffe3c8",cloudDark:"#8da3c4",fog:"#c8d6e8",sunCol:"#ffcf9a",fogD:5e-5},{zenith:"#17387a",horizon:"#6f96c8",horizonWarm:"#f7965a",sun:"#ff9a62",cloudLit:"#f2aa8e",cloudDark:"#45588c",fog:"#7f9cc6",sunCol:"#ff9a60",fogD:6e-5},{zenith:"#060f2c",horizon:"#1b3a6e",horizonWarm:"#3a4f82",sun:"#ff9a60",cloudLit:"#3a4a70",cloudDark:"#0c1630",fog:"#1a3156",sunCol:"#ff9a60",fogD:7e-5}],I_=s=>s.dir==="x"?{x0:s.a,x1:s.b,z0:s.c-s.w/2,z1:s.c+s.w/2}:{x0:s.c-s.w/2,x1:s.c+s.w/2,z0:s.a,z1:s.b},L_=(s,t,e=0)=>s.x0-e<t.x1&&s.x1+e>t.x0&&s.z0-e<t.z1&&s.z1+e>t.z0,vd=class extends zo{constructor(t,e,n,i={}){super(t,e,n,i),this.timeOffset=pr.globalStart,this.duration=pr.duration,this.timeline.duration=this.duration,this.timeline.frameCount=Math.round(this.duration*this.timeline.fps),this.showTitle=!1,this.fadeSec=0,this.fx=i.fx??{},this.nightU={value:.1},this.snowU={value:0},this.ambientCount=0,this.streamU={uTime:{value:0},uGlow:{value:.05}},this.shopU={uShopGlow:{value:.05}},this.lodDist=150}async build(){let t=id(20260806),e=this.scene,n=im[0],i=rd(Kt,{sunDir:P_,colors:{...n,cloudCover:.2}});if(this.sky=i,e.add(i.mesh),e.fog=new Fi(new ct(n.fog),n.fogD),this.glRenderer){let c=new Dn;c.add(new fe(i.mesh.geometry,i.material));let h=new qi(this.glRenderer);e.environment=h.fromScene(c,.015,1,3e3).texture,h.dispose()}let r=new Vi(16764826,3.3),o=new L(-150,0,100);r.position.copy(o).addScaledVector(P_,3e3),r.target.position.copy(o),r.castShadow=!0,r.shadow.mapSize.set(4096,4096);let a=r.shadow.camera;a.left=-820,a.right=820,a.top=520,a.bottom=-520,a.near=200,a.far=6500,r.shadow.bias=-2e-4,r.shadow.normalBias=.9,e.add(r,r.target),this.sun=r,this.hemi=new Gi(14674687,13226408,.55),e.add(this.hemi),e.add(this._buildGround()),e.add(this._buildBluff()),e.add(this._buildFarMountains()),this._buildBlocks(t),this._buildLamps(),this._buildStation(),this._buildTreesAll(t),this._buildArcade(t),this._buildTraffic(t),this.rig=new md(pr);let l=c=>new ur(c.map(([h,u])=>({t:h,v:u})));this.tracks={night:l([[0,.1],[1.2,.3],[2.6,.6],[4.2,.85],[7,1]]),palette:l([[0,0],[1.2,.5],[3,1],[5,1.45],[7,1.85]]),sunPower:l([[0,3.3],[1.5,2.3],[3,1.2],[4.5,.5],[7,.1]]),envPower:l([[0,.7],[3,.5],[7,.25]]),exposure:l([[0,1],[7,1]]),bloom:l([[0,.25],[3,.4],[7,.55]]),bloomThreshold:l([[0,1.4],[7,1]]),bloomRadius:l([[0,.55],[7,.7]]),dofAperture:l([[0,.6],[7,.6]]),dofMaxBlur:l([[0,4],[7,5]])},this.look.grade={uShadowAmt:.3,uVig:.3,uSat:1.06,uGrain:.02,uAberr:6e-4,uHighTint:new ct(1.03,1,.95)},this._ca=new ct,this._cb=new ct,nd(this,{tiled:this.fx.tiled,haze:this.fx.haze,tileExclude:[this.cars.mesh,this.peds.mesh,this.pedsArcade.mesh,this.boxMesh],skyUniforms:this.sky.uniforms})}_buildGround(){let t=new Wn(24e3,24e3,1,1);t.rotateX(-Math.PI/2);let e=new be({color:16777215,roughness:.85,metalness:0});e.customProgramCacheKey=()=>"sendai-ground-v3";let n=x=>x.kind===0?0:x.kind===3?1:2,i=[...dn].sort((x,m)=>n(x)-n(m)),r=i.map(x=>new de(x.dir==="x"?0:1,x.c,x.w,x.kind)),o=i.map(x=>new de(x.a,x.b,0,0)),a=[...Ho,...Es],l=a.map(x=>new de(x.x0,x.x1,x.z0,x.z1)),c=a.map(x=>Es.includes(x)?1:0),h=i.length,u=a.length,d=this.nightU,p=Vo;e.onBeforeCompile=x=>{x.uniforms.uNight=d,x.uniforms.uStA={value:r},x.uniforms.uStB={value:o},x.uniforms.uPark={value:l},x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
          uniform float uNight; varying vec3 vWP;
          uniform vec4 uStA[${h}]; uniform vec4 uStB[${h}]; uniform vec4 uPark[${u}];
          ${Zn}`).replace("#include <color_fragment>",`#include <color_fragment>
          float gRough = 0.85; vec3 gEmis = vec3(0.0); float gBump = 1.0;
          {
            vec2 p = vWP.xz;
            float nz = fbm(p * 0.05), fine = vnoise(p * 1.9);
            float fw = fwidth(p.x) * 1.0 + 0.02;
            // \u5E02\u8857\u306E\u5916\u5074\u306F\u8349\u5730\u3001\u8857\u533A\u306E\u4E2D\uFF08\u5EFA\u7269\u306E\u8DB3\u5143\uFF09\u306F\u8217\u88C5
            float inCity = step(${p.x0.toFixed(1)}, p.x) * step(p.x, ${p.x1.toFixed(1)}) * step(${p.z0.toFixed(1)}, p.y) * step(p.y, ${p.z1.toFixed(1)});
            vec3 grass = vec3(0.17, 0.25, 0.10) * (0.85 + 0.3 * nz + 0.08 * fine);
            vec3 c = mix(grass, vec3(0.30, 0.30, 0.29) * (0.9 + 0.2 * fine), inCity);
            float surf = -1.0, lat = 99.0, alongRoad = 0.0, kindHit = 0.0, cHit = 0.0;
            for (int i = 0; i < ${h}; i++) {
              vec4 A = uStA[i], B = uStB[i];
              float along = A.x < 0.5 ? p.x : p.y;
              float off = abs((A.x < 0.5 ? p.y : p.x) - A.y);
              float half_ = A.z * 0.5;
              if (along > B.x && along < B.y && off < half_) {
                float kind = A.w; float s = 0.0;                              // 0=\u6B69\u9053 1=\u8ECA\u9053 2=\u7DD1\u5730\u5E2F 3=\u30BF\u30A4\u30EB
                if (kind < 0.5) s = off < half_ - 3.4 ? 1.0 : 0.0;
                else if (kind < 1.5) s = off < 4.0 ? 2.0 : (off < 16.5 ? 1.0 : 0.0);
                else if (kind < 2.5) s = off < 9.0 ? ((off > 2.6 && off < 6.4) ? 2.0 : 3.0) : (off < 17.0 ? 1.0 : 0.0);
                else s = 3.0;
                surf = s; lat = off; alongRoad = along; kindHit = kind; cHit = A.y;
              }
            }
            float zebra = 0.0;
            if (surf > 0.5 && surf < 1.5 && kindHit > 0.5) {                 // \u9752\u8449\u901A\u30FB\u5B9A\u7985\u5BFA\u901A\u306E\u8ECA\u9053\uFF1A\u4E00\u822C\u8857\u8DEF\u3068\u306E\u4EA4\u5DEE\u306E\u624B\u524D\u306B\u6A2A\u65AD\u6B69\u9053
              for (int k = 0; k < ${h}; k++) {
                vec4 A2 = uStA[k], B2 = uStB[k];
                if (A2.x > 0.5 && A2.w < 0.5 && B2.x < cHit && B2.y > cHit) {
                  float dx = abs(p.x - A2.y), e = A2.z * 0.5;
                  if (dx > e + 1.0 && dx < e + 4.6) zebra = max(zebra, step(0.5, fract(p.y / 1.1)));
                }
              }
            }
            if (surf > -0.5) {
              vec3 roadC = mix(vec3(0.075, 0.078, 0.085), vec3(0.17, 0.17, 0.18), smoothstep(0.55, 0.95, nz) * 0.5);
              vec3 walkC = vec3(0.50, 0.49, 0.47) * (0.88 + 0.24 * fine);
              vec3 tileC = vec3(0.56, 0.50, 0.44) * (0.9 + 0.2 * vnoise(p * 0.7));
              vec3 greenC = vec3(0.14, 0.22, 0.08) * (0.9 + 0.25 * fine);
              float lineAt = kindHit < 0.5 ? 0.0 : (kindHit < 1.5 ? 10.25 : 13.0);
              float dash = step(0.5, fract(alongRoad / 8.0)) * (1.0 - smoothstep(0.1, 0.3, abs(lat - lineAt)));
              if (surf < 0.5) c = walkC;
              else if (surf < 1.5) { c = mix(roadC, vec3(0.72), dash * 0.65 * smoothstep(0.3, 0.7, fine)); c = mix(c, vec3(0.78), zebra * 0.8); gRough = 0.5; }
              else if (surf < 2.5) c = greenC;
              else { c = tileC; if (kindHit > 2.5) { float g = step(0.04, abs(fract(p.x / 1.2) - 0.5)) * step(0.04, abs(fract(p.y / 1.2) - 0.5)); c *= 0.9 + 0.1 * g; } }
            }
            for (int j = 0; j < ${u}; j++) {
              vec4 R = uPark[j];
              if (p.x > R.x && p.x < R.y && p.y > R.z && p.y < R.w) {
                c = grass * 1.15;
                float path = (1.0 - smoothstep(1.6, 2.4, abs(p.y - 0.5 * (R.z + R.w)))) * 0.9;
                c = mix(c, vec3(0.55, 0.50, 0.42) * (0.9 + 0.2 * fine), path);
              }
            }
            diffuseColor.rgb = c;
            // \u591C\uFF1A\u8857\u706F\u306E\u6696\u8272\u306E\u5149\u3060\u307E\u308A\uFF08\u9053\u8DEF\u6CBF\u3044\uFF09
            float pool = pow(0.5 + 0.5 * cos(6.2831853 * alongRoad / 36.0), 3.0);
            float nearRoad = surf > -0.5 ? (1.0 - smoothstep(18.0, 28.0, lat)) : 0.0;
            gEmis = uNight * vec3(1.0, 0.62, 0.32) * nearRoad * (0.02 + (surf < 1.5 && surf > 0.5 ? 0.05 : 0.025) * pool);
            if (kindHit > 2.5) gEmis += uNight * vec3(1.0, 0.62, 0.32) * 0.05;     // \u30A2\u30FC\u30B1\u30FC\u30C9\u306E\u5E8A\uFF1A\u5E97\u660E\u304B\u308A\u30FB\u63D0\u706F\u306E\u7167\u308A\u8FD4\u3057
            gBump = surf > 0.5 && surf < 1.5 ? 0.2 : 1.0;
          }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = gRough;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          {
            vec2 q = vWP.xz * 0.9; float e = 0.35;
            float n0 = vnoise(q), nx = vnoise(q + vec2(e, 0.0)), nz2 = vnoise(q + vec2(0.0, e));
            vec3 pert = vec3((n0 - nx), 0.0, (n0 - nz2)) * 0.5 * gBump;
            float fade = 1.0 - smoothstep(120.0, 600.0, length(vWP - cameraPosition));
            normal = normalize(normal + (mat3(viewMatrix) * pert) * fade);
          }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += gEmis;`)};let f=new fe(t,e);return f.receiveShadow=!0,f.name="ground",f}_buildBluff(){let e=Go.x0,n=-750,i=1250,r=110,o=150,a=new Wn(e- -1500,i-n,r,o);a.rotateX(-Math.PI/2),a.translate((-1500+e)/2,0,(n+i)/2);let l=a.attributes.position;for(let f=0;f<l.count;f++)l.setY(f,a_(l.getX(f),l.getZ(f)));a.computeVertexNormals();let c=a.attributes.normal,h=new Float32Array(l.count*3),u=bi(19);for(let f=0;f<l.count;f++){let x=l.getY(f),m=1-c.getY(f),g=u.fbm(l.getX(f)*.01,l.getZ(f)*.01,3),_=Math.min(1,x/20),y=.85+.3*g;h[f*3]=(.17+(.09-.17)*_+m*.25)*y,h[f*3+1]=(.25+(.17-.25)*_+m*.15)*y,h[f*3+2]=(.1+(.07-.1)*_+m*.1)*y}a.setAttribute("color",new $t(h,3));let d=new be({vertexColors:!0,roughness:.95,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});d.customProgramCacheKey=()=>"sendai-bluff-v1";let p=new fe(a,d);return p.receiveShadow=!0,p.castShadow=!1,p.name="bluff",p.position.y=.02,p}_buildFarMountains(){let t=bi(51),e=bi(77),n=[{x:-24e3,z:22e3,h:1550,sx:6500,sz:5200},{x:-9e3,z:-19e3,h:1150,sx:3600,sz:3200},{x:-22e3,z:-3e3,h:850,sx:4800,sz:9500},{x:-17e3,z:11e3,h:700,sx:4200,sz:3800}],r=ld(Kt,{heightFn:(h,u)=>{let d=0;for(let f of n)d+=f.h*Math.exp(-(((h-f.x)/f.sx)**2+((u-f.z)/f.sz)**2));let p=Math.hypot(h,u);return d+=(160+380*t.fbm(h*18e-5,u*18e-5,4))*Math.min(1,Math.max(0,(p-2500)/6500))*(.6+.8*e.fbm(h*4e-4,u*4e-4,3)),d},y:-4,rings:240,segs:400,thA:1.9,thB:4.4,snowLine:99999}),o=r.geometry.attributes.position,a=r.geometry.attributes.normal,l=new Float32Array(o.count*3),c=bi(31);for(let h=0;h<o.count;h++){let u=o.getX(h),d=o.getZ(h),p=o.getY(h),f=1-a.getY(h),x=c.fbm(u*.0011,d*.0011,4),m=c.fbm(u*.006+5,d*.006,3),g=Math.min(1,Math.max(0,(f-.22)/.3))*Math.min(1,Math.max(0,(p-500)/500)),_=Math.min(1,Math.max(0,(p-900)/500)),y=[.14+.05*_+.03*x,.22-.02*_+.03*x,.1+.02*_],M=[.34,.32,.3],b=.88+.24*m;for(let w=0;w<3;w++)l[h*3+w]=(y[w]+(M[w]-y[w])*g*.7)*b}return r.geometry.setAttribute("color",new $t(l,3)),r}_buildBlocks(t){let e=od(Kt,{uNight:this.nightU,uSnow:this.snowU}),n=new As(Kt,e,4e3),i=dn.map(I_),r=[...Ho,...Es],o=new Set([Vo.x0,Vo.x1]),a=new Set([Vo.z0,Vo.z1]);for(let u of dn){let d=I_(u);u.dir==="z"?(o.add(d.x0),o.add(d.x1)):(a.add(d.z0),a.add(d.z1))}let l=[...o].sort((u,d)=>u-d),c=[...a].sort((u,d)=>u-d),h=1;for(let u=0;u<l.length-1;u++)for(let d=0;d<c.length-1;d++){let p=l[u],f=l[u+1],x=c[d],m=c[d+1];if(f-p<9||m-x<9)continue;let g=Math.max(1,Math.round((f-p)/27)),_=Math.max(1,Math.round((m-x)/25));for(let y=0;y<g;y++)for(let M=0;M<_;M++){let b=p+(f-p)*y/g,w=p+(f-p)*(y+1)/g,v=x+(m-x)*M/_,S=x+(m-x)*(M+1)/_,C={x0:b,x1:w,z0:v,z1:S};if(i.some(nt=>L_(C,nt,-.6))||r.some(nt=>L_(C,nt,2)))continue;let A=(b+w)/2,R=(v+S)/2;if(A<Go.x0-20)continue;let D=Math.abs(R-230),z=Math.abs(R-0),N=Math.abs(A),O=16,W=44;D<62?(O=38,W=95):z<58&&(O=28,W=66),N<36&&R>20&&R<215&&(O=14,W=26),A>180&&R>60&&R<330&&(O=55,W=120),A<-240&&(O=10,W=28);let H=O+(W-O)*Math.pow(t(),1.3),st=H>60?t()<.6?2:0:H>30?t.pick([0,2,4]):t.pick([1,3,4,4]),X=w-b-1.2,Z=S-v-1.2;X<6||Z<6||n.add(A,0,R,X,H,Z,st,h+++t(),.35+.55*t())}}n.add(326,0,160,44,36,112,2,901.3,.7),n.add(300,0,96,30,70,30,0,902.1,.6),n.add(300,0,226,34,58,28,2,903.7,.6),n.add(350,0,160,18,84,40,2,904.4,.7),this.boxes=n,this.boxMesh=n.build({castShadow:!0}),this.scene.add(this.boxMesh)}_buildLamps(){let t=w_(),e=T_(),[n,i]=A_(t,e);this.scene.add(n,i);let r=new Float32Array(t.length*3),o=new Float32Array(t.length*3),a=new Float32Array(t.length);t.forEach((u,d)=>{r.set(u.top,d*3),o.set([3,1.9,.9],d*3),a[d]=1.1}),this.lamps=ai(Kt,{positions:r,colors:o,sizes:a,fogDensity:5e-5,minPx:1.4,maxPx:22}),this.scene.add(this.lamps.points);let l=new Float32Array(e.length*3),c=new Float32Array(e.length*3),h=new Float32Array(e.length);e.forEach((u,d)=>{l.set([u.x,6.2,u.z],d*3),c.set(u.green?[.3,2.4,.9]:[2.6,.2,.12],d*3),h[d]=.5}),this.signals=ai(Kt,{positions:l,colors:c,sizes:h,fogDensity:5e-5,minPx:1.4,maxPx:10}),this.scene.add(this.signals.points),this.lampCount=t.length,this.signalCount=e.length}_buildStation(){let t=E_();this.deck=t,this.scene.add(t.mesh);let e=new Float32Array(t.lights.length*3),n=new Float32Array(t.lights.length*3),i=new Float32Array(t.lights.length);t.lights.forEach((r,o)=>{e.set(r,o*3),n.set([2.4,1.6,.8],o*3),i[o]=.6}),this.deckGlow=ai(Kt,{positions:e,colors:n,sizes:i,fogDensity:5e-5,minPx:1.4,maxPx:12}),this.scene.add(this.deckGlow.points)}_buildTreesAll(t){let e=f_(t);e.meshes.forEach(n=>this.scene.add(n)),this.treeCount=e.count,this.treeTris=e.tris}_buildArcade(t){let e=m_();e.meshes.forEach(l=>this.scene.add(l)),g_(t,this.shopU).meshes.forEach(l=>this.scene.add(l));let i=x_();this.arcadeGlow=ai(Kt,{...i,fogDensity:5e-5,minPx:1.4,maxPx:16}),this.scene.add(this.arcadeGlow.points);let r=__(t),[o,a]=v_(r.poles,r.balls);this.scene.add(o,a),this.streamers=S_(r.items,t,this.streamU),this.scene.add(this.streamers.group),this.decoCount=r.items.length,this.archCount=e.archCount}_buildTraffic(t){let e=[];for(let h of dn){if(h.kind===3)continue;let u=h.b-h.a,d=h.kind===0?[3.4]:h.kind===1?[6,12.4]:[10.4,14.6];for(let p of d)for(let f of[1,-1]){let x=Math.max(1,Math.round(u/70));for(let m=0;m<x;m++){let g=h.dir==="x"?f>0?-1:1:f>0?1:-1;e.push({alongX:h.dir==="x",dir:f,fixed:h.c+g*p,speed:t.range(6,12),off:t.range(0,4e3),len:u,min:h.a,ph:t()})}}}this.cars=hd(Kt,e),this.scene.add(this.cars.mesh);let n=e.length,i=new Float32Array(n*4*3),r=new Float32Array(n*4*3),o=new Float32Array(n*4);for(let h=0;h<n;h++)for(let u=0;u<4;u++){let d=(h*4+u)*3,p=u<2;p?(r[d]=3,r[d+1]=2.9,r[d+2]=2.3):(r[d]=2.4,r[d+1]=.1,r[d+2]=.07),o[h*4+u]=p?.7:.5}this.carGlow=ai(Kt,{positions:i,colors:r,sizes:o,fogDensity:4e-5,minPx:1.4,maxPx:12}),this.scene.add(this.carGlow.points),this.carCount=n;let a=[],l=(h,u,d,p)=>{for(let f=0;f<p;f++)a.push({x0:u,x1:d,z:h+t.range(-.8,.8),dir:t()<.5?1:-1,speed:t.range(.9,1.5),off:t.range(0,800),ph:t()})};l(230-21.5,-420,300,55),l(230+21.5,-420,300,55);for(let h of[-3,3,-19.5,19.5])l(0+h,-235,105,30);l(109,-330,-10,12),l(121,-330,-10,12),l(109,10,330,12),l(121,10,330,12),this.peds=mc(Kt,a),this.scene.add(this.peds.mesh),this.pedCount=a.length;let c=[];for(let h=0;h<90;h++)c.push({x0:-(mr.z1-2),x1:-(mr.z0+2),z:t.range(-5.2,5.2),dir:t()<.5?1:-1,speed:t.range(.7,1.3),off:t.range(0,800),ph:t()});this.pedsArcade=mc(Kt,c),this.pedsArcade.mesh.rotation.y=Math.PI/2,this.pedsArcade.mesh.updateMatrix(),this.scene.add(this.pedsArcade.mesh),this.pedCount+=c.length}applyTime(t){let e=this.sampleTrack("palette",t,0),n=Math.min(1,Math.floor(e)),i=Math.min(1,e-n),r=im[n],o=im[Math.min(2,n+1)],a=this.sky.uniforms,l=(h,u)=>{this._ca.set(r[h]),this._cb.set(o[h]),u.value.lerpColors(this._ca,this._cb,i)};l("zenith",a.uZenith),l("horizon",a.uHorizon),l("horizonWarm",a.uHorizonWarm),l("sun",a.uSunColor),l("cloudLit",a.uCloudLit),l("cloudDark",a.uCloudDark),this._ca.set(r.fog),this._cb.set(o.fog),this.scene.fog.color.lerpColors(this._ca,this._cb,i),this.scene.fog.density=r.fogD+(o.fogD-r.fogD)*i,this._ca.set(r.sunCol),this._cb.set(o.sunCol),this.sun.color.lerpColors(this._ca,this._cb,i),this.nightU.value=this.sampleTrack("night",t,.1);let c=this.sampleTrack("sunPower",t,3);this.sun.intensity=c,a.uSunStrength.value=Math.min(1,c/2),this.hemi.intensity=.55*Math.max(.25,1-this.nightU.value*1),this.scene.environmentIntensity=this.sampleTrack("envPower",t,.6)}onBeforeRender({t,projScale:e,camera:n}){let i=t+this.timeOffset;this.sky.mesh.position.copy(n.position),this.sky.uniforms.uTime.value=i*5;let r=this.scene.fog.density;for(let a of[this.lamps,this.carGlow,this.signals,this.deckGlow])a.uniforms.uProj.value=e,a.uniforms.uFog.value=r;let o=this.nightU.value;this.lamps.uniforms.uGain.value=.08+1*o,this.carGlow.uniforms.uGain.value=.5+.7*o,this.signals.uniforms.uGain.value=.6+.6*o,this.deckGlow.uniforms.uGain.value=.1+1*o,this.deck.mat.emissiveIntensity=.02+.2*o,this.cars.update(i,this.carGlow.points.geometry.attributes.position.array),this.carGlow.points.geometry.attributes.position.needsUpdate=!0,this.peds.update(i),this.pedsArcade.update(i),this.streamU.uTime.value=i,this.streamU.uGlow.value=.04+.5*o,this.shopU.uShopGlow.value=.08+.9*o,this.arcadeGlow.uniforms.uProj.value=e,this.arcadeGlow.uniforms.uFog.value=r,this.arcadeGlow.uniforms.uGain.value=.15+1*o,this.lodStats=this.streamers.updateLod(n.position,this.lodDist)}setAmbientCount(t){this.ambientCount=t,this.streamers.setFraction(Math.min(1,t/R_)),this.lodDist=t>=R_?150:100}setLayoutWeight(t){this.rig.weight=t}}});var N_,U_=pe(()=>{N_=[{id:"cap-sendai",title:"SENDAI",sub:"\u4ED9\u53F0",a:-.05,b:.15},{id:"cap-aoba",title:"\u9752\u8449\u901A",sub:"Aoba-dori",a:.18,b:.34},{id:"cap-jozenji",title:"\u5B9A\u7985\u5BFA\u901A",sub:"Jozenji-dori",a:.37,b:.52},{id:"cap-tanabata",title:"\u4ED9\u53F0\u4E03\u5915",sub:"Sendai Tanabata",a:.55,b:.72},{id:"cap-aobajo",title:"\u9752\u8449\u57CE\u5740\u304B\u3089",sub:"From Aoba Castle Ruins",a:.75,b:1.08}]});var F_={};Td(F_,{default:()=>mT});var mT,O_=pe(()=>{D_();U_();tm();mT={contract:1,meta:{id:"sendai",name:{ja:"\u4ED9\u53F0",en:"Sendai"},season:"summer",theme:"\u4E03\u5915\u306E\u5915\u3079\uFF08\u91D1\u8272\u306E\u5915\u65B9\u2192\u706F\u308A\u59CB\u3081\u308B\u8857\uFF09",docTitle:"SENDAI \u2014 JAPAN \u2014 THE CITY COLLECTION"},captions:N_,timeline:{globalStart:pr.globalStart,duration:pr.duration},ambient:{name:"\u5439\u304D\u6D41\u3057",counts:{normal:1200,light:700}},tuning:{haze:{start:500,end:5e3,strength:.65},grade:{expDay:1.08,expDusk:.92,highDusk:[1.09,1,.885]}},async buildScene(s){let t=new vd(s.cityMeta,s.index,s.total,{renderer:s.renderer,fx:s.fx});return await t.build(),t}}});Ie();Ie();Ie();Ie();var Oo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};Ie();Ie();var On=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Cw=new Hi(-1,1,1,-1,0,1),Lp=class extends Zt{constructor(){super(),this.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vt([0,2,0,0,2,0],2))}},Rw=new Lp,ws=class{constructor(t){this._mesh=new fe(Rw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Cw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var hr=class extends On{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Mi.clone(t.uniforms),this.material=new Ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ws(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var hc=class extends On{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Yu=class extends On{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Zu=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new et);this._width=n.width,this._height=n.height,e=new Ee(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:He}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hr(Oo),this.copyPass.material.blending=mi,this.timer=new sr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}hc!==void 0&&(o instanceof hc?n=!0:o instanceof Yu&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};Ie();var $u=class extends On{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ct}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};Ie();Ie();var mx={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ct(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Bo=class s extends On{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new ct(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ee(r,o,{type:He,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ee(r,o,{type:He,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Ee(r,o,{type:He,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=mx;this.highPassUniforms=Mi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ge({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new et(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Mi.clone(Oo.uniforms),this.blendMaterial=new Ge({uniforms:this.copyUniforms,vertexShader:Oo.vertexShader,fragmentShader:Oo.fragmentShader,premultipliedAlpha:!0,blending:Mo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ct,this._oldClearAlpha=1,this._basic=new Hn,this._fsQuad=new ws(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new et(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let i=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new Ge({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Bo.BlurDirectionX=new et(1,0);Bo.BlurDirectionY=new et(0,1);Ie();var uc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ju=class extends On{constructor(){super(),this.isOutputPass=!0,this.uniforms=Mi.clone(uc.uniforms),this.material=new ds({name:uc.name,uniforms:this.uniforms,vertexShader:uc.vertexShader,fragmentShader:uc.fragmentShader}),this._fsQuad=new ws(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===ge&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xs?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_s?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vs?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ys?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ms?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===bo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function gx(s,{near:t,far:e}){let n={uniforms:{tDiffuse:{value:null},tDepth:{value:null},uNear:{value:t},uFar:{value:e},uFocus:{value:200},uAperture:{value:1},uMaxBlur:{value:8},uRes:{value:new s.Vector2(1920,1080)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform sampler2D tDiffuse, tDepth;
      uniform float uNear, uFar, uFocus, uAperture, uMaxBlur;
      uniform vec2 uRes;
      varying vec2 vUv;
      float linZ(float d){ float z = d * 2.0 - 1.0; return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear)); }
      float coc(float z){ return clamp(uAperture * abs(z - uFocus) / max(z, 1.0), 0.0, 1.0) * uMaxBlur; }
      void main(){
        vec4 c0 = texture2D(tDiffuse, vUv);
        float z0 = linZ(texture2D(tDepth, vUv).x);
        float d0 = texture2D(tDepth, vUv).x;
        float r0 = d0 > 0.99995 ? 0.0 : coc(z0);   // \u7A7A\u306F\u5E38\u306B\u30B7\u30E3\u30FC\u30D7
        vec3 acc = c0.rgb; float wsum = 1.0;
        const int N = 28;
        float maxR = uMaxBlur;
        for (int i = 0; i < N; i++){
          float fi = float(i);
          float rr = sqrt((fi + 0.5) / float(N)) * maxR;
          float th = fi * 2.399963;
          vec2 o = vec2(cos(th), sin(th)) * rr;
          vec2 uv = vUv + o / uRes;
          float zs = linZ(texture2D(tDepth, uv).x);
          float rs = coc(zs);
          if (texture2D(tDepth, uv).x > 0.99995) rs = 0.0;
          // \u30B5\u30F3\u30D7\u30EB\u81EA\u8EAB\u306E\u30DC\u30B1\u534A\u5F84\u304C\u8DDD\u96E2\u3092\u8986\u3046\u304B\u3001\u4E2D\u5FC3\u304C\u5341\u5206\u30DC\u30B1\u3066\u3044\u308B\u3068\u304D\u306E\u307F\u5BC4\u4E0E
          float w = smoothstep(rr - 1.0, rr + 1.0, max(rs, r0 * (zs >= z0 ? 1.0 : 0.0)));
          vec3 sc = texture2D(tDiffuse, uv).rgb;
          // \u660E\u308B\u3044\u70B9\u3092\u5C11\u3057\u5F37\u8ABF\u3057\u3066\u5186\u5F62\u30DC\u30B1(\u7389\u30DC\u30B1)\u3092\u6B8B\u3059
          float lum = dot(sc, vec3(0.299, 0.587, 0.114));
          w *= 1.0 + clamp(lum - 1.0, 0.0, 6.0) * 0.6;
          acc += sc * w; wsum += w;
        }
        gl_FragColor = vec4(acc / wsum, c0.a);
      }`},i=new hr(n),r=i.render.bind(i);return i.render=function(o,a,l,c,h){this.uniforms.tDepth.value=l.depthTexture,r(o,a,l,c,h)},i}function xx(s){let t={uniforms:{tDiffuse:{value:null},uFade:{value:1},uSeed:{value:0},uRes:{value:new s.Vector2(1920,1080)},uSat:{value:1.08},uContrast:{value:.35},uShadowTint:{value:new s.Color(0,.05,.1)},uShadowAmt:{value:.35},uHighTint:{value:new s.Color(1.05,1,.93)},uVig:{value:.55},uGrain:{value:.028},uAberr:{value:.0016}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float uFade, uSeed, uSat, uContrast, uShadowAmt, uVig, uGrain, uAberr;
      uniform vec2 uRes; uniform vec3 uShadowTint, uHighTint;
      varying vec2 vUv;
      float h21(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      void main(){
        vec2 cuv = vUv - 0.5;
        float rad = dot(cuv, cuv);
        // \u5468\u8FBA\u306E\u8272\u53CE\u5DEE
        vec3 c;
        c.r = texture2D(tDiffuse, vUv + cuv * uAberr * 2.0 * rad * 4.0).r;
        c.g = texture2D(tDiffuse, vUv).g;
        c.b = texture2D(tDiffuse, vUv - cuv * uAberr * 2.0 * rad * 4.0).b;
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        // \u30B9\u30D7\u30EA\u30C3\u30C8\u30C8\u30FC\u30F3\uFF1A\u5F71\u3092\u30C6\u30A3\u30FC\u30EB\u5BC4\u308A\u3001\u30CF\u30A4\u30E9\u30A4\u30C8\u3092\u6696\u8272\u3078
        c += uShadowTint * (1.0 - smoothstep(0.0, 0.55, l)) * uShadowAmt;
        c = mix(c, c * uHighTint, smoothstep(0.35, 1.0, l));
        l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        c = mix(vec3(l), c, uSat);
        c = mix(c, c * c * (3.0 - 2.0 * c), uContrast);               // S\u5B57\u30AB\u30FC\u30D6
        // \u30D3\u30CD\u30C3\u30C8
        float vig = smoothstep(0.80, 0.18, length(cuv * vec2(uRes.x / uRes.y, 1.0)));
        c *= mix(1.0, vig, uVig);
        // \u30D5\u30A3\u30EB\u30E0\u30B0\u30EC\u30A4\u30F3\uFF08\u30D5\u30EC\u30FC\u30E0\u756A\u53F7\u3067\u6C7A\u5B9A\u7684\uFF09
        float n = h21(gl_FragCoord.xy + uSeed * 17.0) - 0.5;
        c += n * uGrain * (1.0 - l * 0.6);
        c *= uFade;
        gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
      }`};return new hr(t)}dc();var Dp='"Helvetica Neue", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Segoe UI", Arial, sans-serif';function Np(s,t,e,n,i,r){let o=[...t],a=o.map(h=>s.measureText(h).width),l=a.reduce((h,u)=>h+u,0)+i*(o.length-1),c=e-l/2;o.forEach((h,u)=>{s.globalAlpha=r(u,o.length),s.fillText(h,c,n),c+=a[u]+i})}function Mx(s,t,e,n,i,{englishName:r,name:o,index:a,total:l}){let c=vx(n,i);if(!c.visible||c.opacity<=.001)return;let h=e/1080;s.save(),s.textBaseline="alphabetic",s.fillStyle="#fff",s.shadowColor="rgba(8,14,34,0.55)",s.shadowBlur=24*h;let u=s.createLinearGradient(0,e*.62,0,e);u.addColorStop(0,"rgba(6,10,24,0)"),u.addColorStop(1,`rgba(6,10,24,${.5*c.opacity})`),s.shadowColor="transparent",s.fillStyle=u,s.fillRect(0,e*.62,t,e*.38),s.fillStyle="#fff",s.shadowColor="rgba(8,14,34,0.55)";let d=t/2,p=104*h;s.font=`200 ${p}px ${Dp}`;let f=c.spacing*p,x=r.toUpperCase();Np(s,x,d+f/2,e*.865,f,(g,_)=>{let y=Sn(c.reveal*(_+3)-g*.9,0,1);return c.opacity*bn.outCubic(y)});let m=t*.16*bn.outCubic(c.reveal);s.globalAlpha=c.opacity*.8,s.shadowBlur=0,s.fillRect(d-m/2,e*.885,m,Math.max(1,1.5*h)),s.shadowBlur=12*h,s.shadowColor="rgba(8,14,34,0.6)",s.font=`300 ${24*h}px ${Dp}`,s.globalAlpha=c.opacity*bn.outCubic(Sn(c.reveal*1.4-.4,0,1)),Np(s,`${o}`,d,e*.925,10*h,()=>s.globalAlpha),s.font=`300 ${15*h}px ${Dp}`,s.globalAlpha=c.opacity*.75*bn.outCubic(Sn(c.reveal*1.4-.4,0,1)),Np(s,`JAPAN \u2014 THE CITY COLLECTION      ${String(a).padStart(2,"0")} / ${String(l).padStart(2,"0")}`,d,e*.958,5*h,()=>s.globalAlpha),s.restore()}dc();var Qu=4,ju=4e4,td=class{constructor(t,{width:e=1920,height:n=1080,samples:i=4}={}){this.stage=t,this.ctx2d=t.getContext("2d",{alpha:!1}),this.glCanvas=document.createElement("canvas"),this.gl=new lc({canvas:this.glCanvas,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.gl.setPixelRatio(1),this.gl.outputColorSpace=Ke,this.gl.toneMapping=gi,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=ms,this.gl.shadowMap.autoUpdate=!1,this.samples=i,this.width=0,this.height=0,this.city=null,this._shadowDirty=!0,this.setSize(e,n)}_buildComposer(){let{width:t,height:e}=this;this.composer?.dispose?.();let n=r=>new Ee(t,e,{type:He,samples:r,depthBuffer:!0,depthTexture:new Vn(t,e,Mn)}),i;try{i=n(this.samples)}catch{i=n(0)}this.composer=new Zu(this.gl,i),this.composer.setPixelRatio(1),this.composer.setSize(t,e),this.renderPass=new $u(new Dn,new Re),this.dofPass=gx(Kt,{near:Qu,far:ju}),this.bloomPass=new Bo(new et(t,e),.6,.7,.9),this.outputPass=new Ju,this.gradePass=xx(Kt),[this.renderPass,this.dofPass,this.bloomPass,this.outputPass,this.gradePass].forEach(r=>this.composer.addPass(r)),this.dofPass.uniforms.uRes.value.set(t,e),this.gradePass.uniforms.uRes.value.set(t,e)}setSize(t,e){t=Math.round(t),e=Math.round(e),!(t===this.width&&e===this.height)&&(this.width=t,this.height=e,this.stage.width=t,this.stage.height=e,this.gl.setSize(t,e,!1),this._buildComposer(),this.city&&this._bindCity())}_bindCity(){this.renderPass.scene=this.city.scene,this.renderPass.camera=this.city.camera,this.city.camera.aspect=this.width/this.height,this.city.camera.updateProjectionMatrix()}setCity(t){this.city=t,this._bindCity(),this._shadowDirty=!0}renderAt(t,e=0){let n=this.city,i=n.frameState(t),r=n.camera;r.aspect=this.width/this.height,r.near=Qu,r.far=ju,r.updateProjectionMatrix(),r.updateMatrixWorld(!0);let o=r.projectionMatrix.elements[5]*.5*this.height;n.onBeforeRender?.({t,frame:e,projScale:o,camera:r}),this.gl.toneMappingExposure=i.exposure,this.bloomPass.strength=i.bloom,this.bloomPass.radius=i.bloomRadius??.7,this.bloomPass.threshold=i.bloomThreshold??.9;let a=this.dofPass.uniforms;a.uFocus.value=i.focusDistance,a.uAperture.value=i.dofAperture??1,a.uMaxBlur.value=(i.dofMaxBlur??7)*(this.height/1080),this.dofPass.enabled=(i.dofMaxBlur??7)>.05;let l=this.gradePass.uniforms;l.uFade.value=yx(t,n.duration,{inSec:n.fadeSec??.8,outSec:n.fadeSec??.8}),l.uSeed.value=e%997,Object.entries(n.look.grade??{}).forEach(([h,u])=>{l[h]&&(l[h].value.isColor?l[h].value.set(u):l[h].value=u)}),this._shadowDirty&&(this.gl.shadowMap.needsUpdate=!0,this._shadowDirty=!1),this.composer.render();let c=this.ctx2d;c.drawImage(this.glCanvas,0,0,this.width,this.height),n.showTitle!==!1&&Mx(c,this.width,this.height,t,n.duration,n.titleInfo)}dispose(){this.composer?.dispose?.(),this.gl.dispose()}};var ed=class extends td{constructor(t,e){super(t,e),this.gl.info.autoReset=!1,this.lastInfo={calls:0,triangles:0},this.grade=null}applyQuality({w:t,h:e,samples:n,dof:i}){this.dofOn=i,n!==this.samples&&(this.samples=n,this.width=0),this.setSize(t,e)}gpuString(){let t=this.gl.getContext(),e=t.getExtension("WEBGL_debug_renderer_info");return e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):"unknown"}renderAt(t,e=0,n=t){let i=this.city,r=i.frameState(t),o=i.camera;o.aspect=this.width/this.height,o.near=Qu,o.far=ju,o.updateProjectionMatrix(),o.updateMatrixWorld(!0);let a=o.projectionMatrix.elements[5]*.5*this.height;i.onBeforeRender?.({t:n,frame:e,projScale:a,camera:o}),this.gl.toneMappingExposure=r.exposure*(this.grade?.enabled?this.grade.exposureGain(t):1),this.bloomPass.strength=r.bloom,this.bloomPass.radius=r.bloomRadius??.7,this.bloomPass.threshold=r.bloomThreshold??.9;let l=this.dofPass.uniforms;l.uFocus.value=r.focusDistance,l.uAperture.value=r.dofAperture??1,l.uMaxBlur.value=(r.dofMaxBlur??7)*(this.height/1080),this.dofPass.enabled=this.dofOn!==!1&&(r.dofMaxBlur??7)>.05;let c=this.gradePass.uniforms;c.uFade.value=1,c.uSeed.value=e%997,Object.entries(i.look.grade??{}).forEach(([h,u])=>{c[h]&&(c[h].value.isColor?c[h].value.set(u):c[h].value=u)}),this.grade?.apply(t,c),this._shadowDirty&&(this.gl.shadowMap.needsUpdate=!0,this._shadowDirty=!1),this.gl.info.reset(),this.composer.render(),this.lastInfo={calls:this.gl.info.render.calls,triangles:this.gl.info.render.triangles},this.ctx2d.drawImage(this.glCanvas,0,0,this.width,this.height)}};pc();var sm="sapporo",B_={sapporo:()=>Promise.resolve().then(()=>(o_(),r_)),sendai:()=>Promise.resolve().then(()=>(O_(),F_))};async function z_(s){let t=null,e=s||sm;B_[e]||(t=`\u672A\u77E5\u306E\u90FD\u5E02 "${e}" \u2192 ${sm} \u3092\u8868\u793A`,e=sm);let n=(await B_[e]()).default;return Ex(n),{mod:n,note:t}}pc();var yd=class{constructor(){this.el=document.createElement("pre"),this.el.id="dbg",this.el.setAttribute("aria-hidden","true"),this.el.style.cssText=["position:fixed","left:max(6px,env(safe-area-inset-left))","top:max(6px,env(safe-area-inset-top))","z-index:99","margin:0","padding:6px 8px","max-width:calc(100vw - 12px)","box-sizing:border-box","font:10px/1.35 ui-monospace,Menlo,monospace","color:#cfe","background:rgba(0,0,0,.62)","border-radius:6px","white-space:pre-wrap","word-break:break-all","pointer-events:auto","user-select:text"].join(";"),document.body.appendChild(this.el),this.frames=[],this.history=[],this.text="",this.el.addEventListener("click",()=>this.copy())}tick(t){this.frames.push(t);let e=t-1e3;for(;this.frames.length&&this.frames[0]<e;)this.frames.shift()}logTier(t,e,n){this.history.push(`${new Date().toISOString().slice(11,19)} ${t}\u2192${e} (${n})`),this.history.length>6&&this.history.shift()}fps(){let t=this.frames;if(t.length<2)return{avg:0,maxGap:0};let e=0;for(let n=1;n<t.length;n++)e=Math.max(e,t[n]-t[n-1]);return{avg:(t.length-1)*1e3/(t[t.length-1]-t[0]),maxGap:e}}update(t){let{avg:e,maxGap:n}=this.fps(),i=[`FPS ${e.toFixed(1)}  \u6700\u5927\u9593\u9694 ${n.toFixed(0)}ms  (\u76F4\u8FD11\u79D2)`,`tier ${t.tierLabel}${this.history.length?"  \u5C65\u6B74: "+this.history.join(" | "):"  \u5C65\u6B74: \u306A\u3057"}`,`canvas ${t.width}x${t.height} (${(t.width*t.height/1e6).toFixed(2)}MP)  DPR ${t.dpr}  scale ${t.scale.toFixed(3)}`,`p ${t.p.toFixed(4)}${t.target!==void 0?" \u2192\u76EE\u6A19 "+t.target.toFixed(4):""}  t ${t.t.toFixed(3)}s  layout \u7E26${(t.wPortrait*100).toFixed(0)}%`,`GL calls ${t.calls}  tris ${t.triangles}`,t.haze?`haze \xD7${t.haze.mult}${t.haze.mult===0?"(\u7121\u52B9)":""}  \u958B\u59CB ${t.haze.start}m \u5230\u9054 ${t.haze.end}m \u4E0A\u9650 ${t.haze.strength}\uFF08\u5C71 \xD7${t.haze.mountain}\uFF09 \u5F69\u5EA6\u6E1B ${t.haze.desat}`:"haze \u306A\u3057",t.grade?`grade \xD7${t.grade.cfg.mult}${t.grade.cfg.mult===0?"(\u7121\u52B9)":""}  \u30C8\u30FC\u30F3\u30DE\u30C3\u30D7 ${t.grade.tone}  \u9732\u51FA \xD7${(t.grade.now.exposure??1).toFixed(3)} (\u663C${t.grade.cfg.expDay}\u2192\u5915${t.grade.cfg.expDusk})  \u5915\u666F\u5EA6 ${(t.grade.now.dusk??0).toFixed(2)}  \u30D3\u30CD\u30C3\u30C8 ${t.grade.vig??"-"}`:"",`GPU ${t.gpu}`];this.text=i.join(`
`),this.el.textContent=this.text}async copy(){try{await navigator.clipboard.writeText(this.text),this.flash("copied")}catch{let t=document.createRange();t.selectNodeContents(this.el);let e=getSelection();e.removeAllRanges(),e.addRange(t);try{document.execCommand("copy"),this.flash("copied")}catch{this.flash("\u9078\u629E\u3057\u307E\u3057\u305F\uFF08\u624B\u52D5\u3067\u30B3\u30D4\u30FC\uFF09")}}}flash(t){let e=this.el.style.outline;this.el.style.outline="1px solid #6f6",this.el.title=t,setTimeout(()=>{this.el.style.outline=e},600)}};Up();Ie();var gT=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),xT=(s,t,e)=>{let n=gT((e-s)/(t-s));return n*n*(3-2*n)},Mc=(s,t,e)=>s+(t-s)*e,Sd={expDay:1.15,expDusk:.9,rampFrom:.25,rampTo:1,highDusk:[1.075,1,.905],shadowDusk:[.035,.03,.1],satDusk:1.075,vig:.2};function k_(s,t=Sd){let e=s.get("grade"),n=e===null||e===""?1:Math.max(0,parseFloat(e)),i=(r,o)=>s.has(r)&&isFinite(parseFloat(s.get(r)))?parseFloat(s.get(r)):o;return{mult:isFinite(n)?n:1,...t,expDay:i("gradeExpDay",t.expDay),expDusk:i("gradeExpDusk",t.expDusk),vig:s.has("vig")&&isFinite(parseFloat(s.get("vig")))?parseFloat(s.get("vig")):t.vig}}var Md=class{constructor(t){this.cfg={...Sd,...t},this.now={exposure:1,dusk:0}}get enabled(){return this.cfg.mult>0}dusk(t){return xT(this.cfg.rampFrom,this.cfg.rampTo,t/7)}exposureGain(t){let e=this.cfg,n=this.dusk(t);return 1+(Mc(e.expDay,e.expDusk,n)-1)*e.mult}apply(t,e){if(!this.enabled)return;this.cfg.vig!==null&&(e.uVig.value=this.cfg.vig),this.now={vig:e.uVig.value};let n=this.dusk(t);this.now={vig:e.uVig.value,exposure:this.exposureGain(t),dusk:n};let i=n*this.cfg.mult,r=(o,a)=>o.setRGB(Mc(o.r,a[0],i),Mc(o.g,a[1],i),Mc(o.b,a[2],i));e.uHighTint&&r(e.uHighTint.value,this.cfg.highDusk),e.uShadowTint&&(this.baseShadow??(this.baseShadow=e.uShadowTint.value.clone()),e.uShadowTint.value.copy(this.baseShadow),r(e.uShadowTint.value,this.cfg.shadowDusk)),e.uSat.value=Mc(e.uSat.value,this.cfg.satDusk,i)}},G_=s=>({[Fn]:"\u306A\u3057",[xs]:"Linear",[_s]:"Reinhard",[vs]:"Cineon",[gi]:"ACES Filmic",[ys]:"AgX",[Ms]:"Neutral"})[s.toneMapping]??String(s.toneMapping);$p();var Sc=s=>document.getElementById(s),Ai=new URLSearchParams(location.search),_T=Ai.get("debug")==="1",vT=Ai.get("freeze")==="1",H_=matchMedia("(pointer: coarse)").matches;async function yT(){let s=Sc("track"),t=Sc("stage"),e=Sc("cv"),n=await(await fetch("metadata/cities.json")).json(),{mod:i,note:r}=await z_(Ai.get("city"));r&&console.warn("[scroll]",r);let o=n.cities.find(ot=>ot.id===i.meta.id);document.title=i.meta.docTitle;let{globalStart:a,duration:l}=i.timeline,c=ot=>Yx(ot,l),h=new ed(e,{width:320,height:568});h.grade=new Md(k_(Ai,{...Sd,...i.tuning.grade}));let u=await i.buildScene({renderer:h.gl,cityMeta:o,index:o.displayOrder,total:n.cities.length,fx:{tiled:Ai.get("tiles")==="0"?!1:Ai.get("tiles")||!0,haze:Tx(Ai,{...fc,...i.tuning.haze})}});Cx(u),h.setCity(u);let d=_T?new yd:null,p=h.gpuString(),f={p:0,t:0,w:0,width:0,height:0,dpr:1,scale:1},x=ot=>Zx.find(G=>G.id===ot),m=x((Ai.get("tier")||"").toUpperCase())||x(Jx(t.clientWidth||innerWidth,t.clientHeight||innerHeight,H_)),g=()=>Ai.get("snow")==="normal"?"normal":Ai.get("snow")==="light"||Zp(t.clientWidth||innerWidth,t.clientHeight||innerHeight,H_)?"light":"normal";function _(){let ot=t.clientWidth||innerWidth,G=t.clientHeight||innerHeight,lt=Math.min(devicePixelRatio||1,3),{w:yt,h:kt,scale:Tt}=$x(ot,G,lt,m.mp);h.applyQuality({w:yt,h:kt,samples:m.samples,dof:m.dof});let Ht=g();u.setAmbientCount(i.ambient.counts[Ht]),Object.assign(f,{width:yt,height:kt,dpr:lt,scale:Tt,aspect:ot/G,ambientMode:Ht}),f.w=qp(f.aspect),u.setLayoutWeight(f.w),M=!0}function y(ot,G="manual"){let lt=x(ot);!lt||lt===m||(d?.logTier(m.id,lt.id,G),m=lt,_())}let M=!0,b=null,w=()=>qx(s.getBoundingClientRect().top,s.offsetHeight,t.offsetHeight);addEventListener("scroll",()=>{M=!0},{passive:!0});let v=0,S=null,C=!1,A=0,R=ot=>{let G=s.offsetHeight-t.offsetHeight;window.scrollTo(0,ot*G)},D=0,z=0,N=()=>{t.clientWidth===D&&t.clientHeight===z||(C||(C=!0),clearTimeout(A),A=setTimeout(()=>{_(),R(v),C=!1},160),D=t.clientWidth,z=t.clientHeight)};addEventListener("resize",N),addEventListener("orientationchange",N),_(),D=t.clientWidth,z=t.clientHeight;let O=()=>({tierLabel:`${m.id} \u4E88\u7B97${m.mp}MP MSAA${m.samples} DoF${m.dof?"\u3042\u308A":"\u306A\u3057"} ${i.ambient.name}${i.ambient.counts[f.ambientMode]}`,width:f.width,height:f.height,dpr:f.dpr,scale:f.scale,p:f.p,target:f.target,t:f.t,wPortrait:f.w,calls:h.lastInfo.calls,triangles:h.lastInfo.triangles,gpu:p,haze:u.haze?.cfg,grade:{cfg:h.grade.cfg,now:h.grade.now,vig:h.grade.now.vig?.toFixed?.(2),tone:G_(h.gl)}}),W=document.querySelector(".captions"),H=i.captions.map(ot=>{let G=document.createElement("div");G.className="cap",G.id=ot.id;let lt=document.createElement("h2");if(lt.textContent=ot.title,G.appendChild(lt),ot.sub){let yt=document.createElement("p");yt.textContent=ot.sub,G.appendChild(yt)}return W.appendChild(G),{...ot,el:G,last:-1}}),st=ot=>H.map(G=>Yp(G.a,G.b,ot));function X(ot){for(let G of H){let lt=Yp(G.a,G.b,ot);Math.abs(lt-G.last)<.004||(G.last=lt,G.el.style.opacity=lt.toFixed(3),G.el.style.transform=`translateY(${((1-lt)*8).toFixed(1)}px)`)}}let Z=performance.now(),nt=0;function Et(ot){if(requestAnimationFrame(Et),vT)return;C||(v=b??w());let G=Math.min(.1,Math.max(0,(ot-(Et.last??ot))/1e3));Et.last=ot,S=b!==null||S===null?v:Kx(S,v,G),f.p=S,f.target=v,f.t=c(f.p),X(f.p);let lt=b!==null?f.t:(ot-Z)/1e3;h.renderAt(f.t,nt++,lt),d?.tick(ot),d&&nt%6===0&&d.update(O())}requestAnimationFrame(Et),Sc("loading").classList.add("hide"),window.__scroll={state:()=>({...f}),tileStats:()=>u.tileStats??null,renderAtProgress(ot){b=ot,S=ot,f.p=ot,f.t=c(ot),X(ot),h.renderAt(f.t,0,f.t),d?.update(O())},unpin(){b=null},setTier:y,tier:()=>m.id,renderer:h,city:u,THREE:Kt,cityModule:i,dispose(){Rx(u)},cameraAt(ot,G){let lt=qp(G);return u.rig.sample(a+c(ot),lt)},pStable:()=>v,captionOpacity:st,captionDom:()=>H.map(ot=>({id:ot.id,opacity:+getComputedStyle(ot.el).opacity,text:ot.el.textContent}))},window.__ready=!0}yT().catch(s=>{console.error(s),window.__bootError=String(s.stack||s);let t=Sc("loadMsg");t&&(t.textContent="\u30A8\u30E9\u30FC: "+(s.message||s))});
