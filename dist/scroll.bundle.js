var Z_=Object.defineProperty;var be=(s,t,e)=>()=>{if(e)throw e[0];try{return s&&(t=s(s=0)),t}catch(n){throw e=[n],n}};var Dp=(s,t)=>{for(var e in t)Z_(s,e,{get:t[e],enumerable:!0})};function $_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Mr(s,t){return new J_[s](t)}function B0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Pr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pf(){let s=Pr("canvas");return s.style.display="block",s}function z0(s){Xi=s}function k0(){return Xi}function Ir(...s){let t="THREE."+s.shift();Xi?Xi("log",t,...s):console.log(t,...s)}function G0(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Tt(...s){s=G0(s);let t="THREE."+s.shift();if(Xi)Xi("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Gt(...s){s=G0(s);let t="THREE."+s.shift();if(Xi)Xi("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function jn(...s){let t=s.join(" ");t in Np||(Np[t]=!0,Tt(...s))}function V0(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Bn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[s&255]+je[s>>8&255]+je[s>>16&255]+je[s>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Zt(s,t,e){return Math.max(t,Math.min(e,s))}function If(s,t){return(s%t+t)%t}function K_(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Q_(s,t,e){return s!==t?(e-s)/(t-s):0}function Va(s,t,e){return(1-e)*s+e*t}function j_(s,t,e,n){return Va(s,t,1-Math.exp(-e*n))}function tx(s,t=1){return t-Math.abs(If(s,t*2)-t)}function ex(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function nx(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function ix(s,t){return s+Math.floor(Math.random()*(t-s+1))}function sx(s,t){return s+Math.random()*(t-s)}function rx(s){return s*(.5-Math.random())}function ax(s){s!==void 0&&(Up=s);let t=Up+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ox(s){return s*As}function lx(s){return s*Cs}function cx(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function hx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Lf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ux(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),f=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*f,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*f,o*c);break;case"ZYZ":s.set(l*f,l*p,o*h,o*c);break;default:Tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mu(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ts(s,t){if(t.constructor===Float32Array)return s;let e=Mu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function nn(s,t){if(t.constructor===Float32Array)return s;let e=Mu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}function dx(){let s={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(i.r=br(i.r),i.g=br(i.g),i.b=br(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?Rr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Cr]:{primaries:t,whitePoint:n,transfer:Rr,toXYZ:Op,fromXYZ:Bp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:Op,fromXYZ:Bp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),s}function wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function br(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function Ku(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ja.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Tt("Texture: Unable to serialize Texture."),{})}function td(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function ld(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ms.fromArray(s,r);let o=i.x*Math.abs(ms.x)+i.y*Math.abs(ms.y)+i.z*Math.abs(ms.z),l=t.dot(ms),c=e.dot(ms),h=n.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function Sx(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function xn(s){Math.abs(s)>65504&&Tt("DataUtils.toHalfFloat(): Value out of range."),s=Zt(s,-65504,65504),Si.floatView[0]=s;let t=Si.uint32View[0],e=t>>23&511;return Si.baseTable[e]+((t&8388607)>>Si.shiftTable[e])}function Ba(s){let t=s>>10;return Si.uint32View[0]=Si.mantissaTable[Si.offsetTable[t]+(s&1023)]+Si.exponentTable[t],Si.floatView[0]}function Yp(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Bn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}function pc(s,t,e,n,i,r){pr.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(La.x=r*pr.x-i*pr.y,La.y=i*pr.x+r*pr.y):La.copy(pr),s.copy(t),s.x+=La.x,s.y+=La.y,s.applyMatrix4(X0)}function Rx(s,t,e,n,i,r,a,o){let l;if(t.side===rn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Ii,o),l===null)return null;bc.copy(o),bc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(bc);return c<e.near||c>e.far?null:{distance:c,point:bc.clone(),object:s}}function wc(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,vc),s.getVertexPosition(l,yc),s.getVertexPosition(c,Mc);let h=Rx(s,t,e,n,vc,yc,Mc,jp);if(h){let u=new L;Wn.getBarycoord(jp,vc,yc,Mc,u),i&&(h.uv=Wn.getInterpolatedAttribute(i,o,l,c,u,new et)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,o,l,c,u,new et)),a&&(h.normal=Wn.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};Wn.getNormal(vc,yc,Mc,d.normal),h.face=d,h.barycoord=u}return h}function _d(s,t){return s-t}function Nx(s,t){return s.z-t.z}function Ux(s,t){return t.z-s.z}function kx(s,t,e=0){let n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)t.setComponent(r+e,a,s.getComponent(r,a))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function Kn(s,t){if(s.constructor!==t.constructor){let e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{let e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}function Ic(s,t,e,n,i,r,a){let o=s.geometry.attributes.position;if(ah.fromBufferAttribute(o,i),oh.fromBufferAttribute(o,r),e.distanceSqToSegment(ah,oh,yd,um)>n)return;yd.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(yd);if(!(c<t.near||c>t.far))return{distance:c,point:um.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}function mm(s,t,e,n,i,r,a){let o=Dd.distanceSqToPoint(s);if(o<e){let l=new L;Dd.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}function Nf(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}function xm(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Gx(s,t){let e=1-s;return e*e*t}function Vx(s,t){return 2*(1-s)*s*t}function Hx(s,t){return s*s*t}function Ha(s,t,e,n){return Gx(s,t)+Vx(s,e)+Hx(s,n)}function Wx(s,t){let e=1-s;return e*e*e*t}function Xx(s,t){let e=1-s;return 3*e*e*s*t}function qx(s,t){return 3*(1-s)*s*s*t}function Yx(s,t){return s*s*s*t}function Wa(s,t,e,n,i){return Wx(s,t)+Xx(s,e)+qx(s,n)+Yx(s,i)}function Zx(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=q0(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=jx(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,u=l;for(let d=e;d<i;d+=e){let p=s[d],f=s[d+1];p<o&&(o=p),f<l&&(l=f),p>h&&(h=p),f>u&&(u=f)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return vo(r,a,e,o,l,c,0),a}function q0(s,t,e,n,i){let r;if(i===hv(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=vm(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=vm(a/n|0,s[a],s[a+1],r);return r&&Zr(r,r.next)&&(Mo(r),r=r.next),r}function Os(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Zr(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Mo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vo(s,t,e,n,i,r,a){if(!s)return;!a&&r&&sv(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Jx(s,n,i,r):$x(s)){t.push(l.i,s.i,c.i),Mo(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Kx(Os(s),t),vo(s,t,e,n,i,r,2)):a===2&&Qx(s,t,e,n,i,r):vo(Os(s),t,e,n,i,r,1);break}}}function $x(s){let t=s.prev,e=s,n=s.next;if(Ce(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),d=Math.max(i,r,a),p=Math.max(o,l,c),f=n.next;for(;f!==t;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&za(i,o,r,l,a,c,f.x,f.y)&&Ce(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Jx(s,t,e,n){let i=s.prev,r=s,a=s.next;if(Ce(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,p=Math.min(o,l,c),f=Math.min(h,u,d),_=Math.max(o,l,c),m=Math.max(h,u,d),g=Nd(p,f,t,e,n),x=Nd(_,m,t,e,n),y=s.prevZ,M=s.nextZ;for(;y&&y.z>=g&&M&&M.z<=x;){if(y.x>=p&&y.x<=_&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&za(o,h,l,u,c,d,y.x,y.y)&&Ce(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=p&&M.x<=_&&M.y>=f&&M.y<=m&&M!==i&&M!==a&&za(o,h,l,u,c,d,M.x,M.y)&&Ce(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=g;){if(y.x>=p&&y.x<=_&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&za(o,h,l,u,c,d,y.x,y.y)&&Ce(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=x;){if(M.x>=p&&M.x<=_&&M.y>=f&&M.y<=m&&M!==i&&M!==a&&za(o,h,l,u,c,d,M.x,M.y)&&Ce(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Kx(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Zr(n,i)&&Z0(n,e,e.next,i)&&yo(n,i)&&yo(i,n)&&(t.push(n.i,e.i,i.i),Mo(e),Mo(e.next),e=s=i),e=e.next}while(e!==s);return Os(e)}function Qx(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ov(a,o)){let l=$0(a,o);a=Os(a,a.next),l=Os(l,l.next),vo(a,t,e,n,i,r,0),vo(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function jx(s,t,e,n){let i=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=q0(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(av(c))}i.sort(tv);for(let r=0;r<i.length;r++)e=ev(i[r],e);return e}function tv(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function ev(s,t){let e=nv(s,t);if(!e)return t;let n=$0(e,s);return Os(n,n.next),Os(e,e.next)}function nv(s,t){let e=t,n=s.x,i=s.y,r=-1/0,a;if(Zr(s,e))return e;do{if(Zr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Y0(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);yo(e,s)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&iv(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function iv(s,t){return Ce(s.prev,s,t.prev)<0&&Ce(t.next,s,s.next)<0}function sv(s,t,e,n){let i=s;do i.z===0&&(i.z=Nd(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,rv(i)}function rv(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function Nd(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function av(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Y0(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function za(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Y0(s,t,e,n,i,r,a,o)}function ov(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!lv(s,t)&&(yo(s,t)&&yo(t,s)&&cv(s,t)&&(Ce(s.prev,s,t.prev)||Ce(s,t.prev,t))||Zr(s,t)&&Ce(s.prev,s,s.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Zr(s,t){return s.x===t.x&&s.y===t.y}function Z0(s,t,e,n){let i=Bc(Ce(s,t,e)),r=Bc(Ce(s,t,n)),a=Bc(Ce(e,n,s)),o=Bc(Ce(e,n,t));return!!(i!==r&&a!==o||i===0&&Oc(s,e,t)||r===0&&Oc(s,n,t)||a===0&&Oc(e,s,n)||o===0&&Oc(e,t,n))}function Oc(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Bc(s){return s>0?1:s<0?-1:0}function lv(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Z0(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function yo(s,t){return Ce(s.prev,s,s.next)<0?Ce(s,t,s.next)>=0&&Ce(s,s.prev,t)>=0:Ce(s,t,s.prev)<0||Ce(s,s.next,t)<0}function cv(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function $0(s,t){let e=Ud(s.i,s.x,s.y),n=Ud(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vm(s,t,e,n){let i=Ud(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Mo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ud(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hv(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}function ym(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Mm(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}function dv(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function fv(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}function Sm(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}function Js(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(wm(i))i.isRenderTargetTexture?(Tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(wm(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function an(s){let t={};for(let e=0;e<s.length;e++){let n=Js(s[e]);for(let i in n)t[i]=n[i]}return t}function wm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function pv(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Uf(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}function Hn(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Sr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function J0(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Od(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i}function K0(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}function _v(s,t,e,n,i=30){let r=s.clone();r.name=t;let a=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let p=0;p<c.times.length;++p){let f=c.times[p]*i;if(!(f<e||f>=n)){u.push(c.times[p]);for(let _=0;_<h;++_)d.push(c.values[p*h+_])}}u.length!==0&&(c.times=Hn(u,c.times.constructor),c.values=Hn(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function xv(s,t=0,e=s,n=30){n<=0&&(n=30);let i=e.tracks.length,r=t/n;for(let a=0;a<i;++a){let o=e.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);let f=o.times.length-1,_;if(r<=o.times[0]){let g=h,x=u-h;_=o.values.slice(g,x)}else if(r>=o.times[f]){let g=f*u+h,x=g+u-h;_=o.values.slice(g,x)}else{let g=o.createInterpolant();g.evaluate(r),_=g.resultBuffer.slice()}l==="quaternion"&&new Xe().fromArray(_).normalize().conjugate().toArray(_);let m=c.times.length;for(let g=0;g<m;++g){let x=g*p+d;if(l==="quaternion")Xe.multiplyQuaternionsFlat(c.values,x,_,0,c.values,x);else{let y=p-d*2;for(let M=0;M<y;++M)c.values[x+M]-=_[M]}}}return s.blendMode=gu,s}function Q0(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function vv(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function yv(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=Q0(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=vv(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}function Tm(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function Am(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}function Mv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bs;case"vector":case"vector2":case"vector3":case"vector4":return ea;case"color":return ta;case"quaternion":return zs;case"bool":case"boolean":return ni;case"string":return ii}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Sv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Mv(s.type);if(s.times===void 0){let n=[],i=[];K0(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),Sr(s.settings)&&(e.settings={inTangents:Hn(s.settings.inTangents,Float32Array),outTangents:Hn(s.settings.outTangents,Float32Array)}),e}function Em(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}function wv(){this._document.hidden===!1&&this.reset()}function zm(s,t){return s.distance-t.distance}function Hd(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Hd(r[a],t,e,!0)}}function j0(s){let t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...j0(s.children[e]));return t}function De(s,t,e,n,i,r,a){Xc.set(i,r,a).unproject(n);let o=t[s];if(o!==void 0){let l=e.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Xc.x,Xc.y,Xc.z)}}function kv(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function Gv(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Vv(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Su(s,t,e,n){let i=Hv(n);switch(e){case pu:return s*t;case ol:return s*t/i.components*i.byteLength;case da:return s*t/i.components*i.byteLength;case Li:return s*t*2/i.components*i.byteLength;case ll:return s*t*2/i.components*i.byteLength;case mu:return s*t*3/i.components*i.byteLength;case un:return s*t*4/i.components*i.byteLength;case cl:return s*t*4/i.components*i.byteLength;case fa:case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ma:case ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ul:case fl:return Math.max(s,16)*Math.max(t,8)/4;case hl:case dl:return Math.max(s,8)*Math.max(t,8)/2;case pl:case ml:case _l:case xl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case gl:case _a:case vl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case bl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case wl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Al:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case El:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Il:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Nl:case Ul:case Fl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ol:case Bl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case xa:case zl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hv(s){switch(s){case fn:case hu:return{byteLength:1,components:1};case $s:case uu:case ze:return{byteLength:2,components:1};case rl:case al:return{byteLength:2,components:4};case pn:case sl:case sn:return{byteLength:4,components:1};case du:case fu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}var Wd,Zm,$m,Xd,su,qd,Jm,Km,ts,Yd,qs,Ii,rn,$n,si,Ys,aa,ru,au,Zd,Qm,es,$d,Jd,Kd,Qd,jd,tf,ef,nf,ou,lu,sf,rf,af,of,lf,cf,hf,uf,df,Xa,qa,Ya,Es,Za,$a,Ja,Ka,oa,ff,pf,En,ns,is,ss,ri,la,rs,as,Zc,mf,il,ai,os,ca,ha,wr,cn,Tr,Ie,cu,jm,Zs,t0,we,ua,e0,On,n0,fn,hu,uu,$s,sl,pn,sn,ze,rl,al,ls,du,fu,pu,mu,un,ti,oi,ol,da,Li,ll,i0,cl,fa,pa,ma,ga,hl,ul,dl,fl,pl,ml,gl,_l,xl,_a,vl,yl,Ml,Sl,bl,wl,Tl,Al,El,Cl,Rl,Pl,Il,Ll,Dl,Nl,Ul,Fl,Ol,Bl,xa,zl,gf,_f,xf,Ar,Qa,ka,$c,Vi,Hi,Er,kl,gu,vf,yf,Mf,Sf,s0,r0,a0,li,bf,ci,$e,Cr,Rr,ue,o0,l0,c0,h0,Ga,u0,d0,f0,p0,m0,g0,_0,x0,v0,y0,M0,S0,b0,wf,Tf,Af,Ef,_u,Cf,Rf,xu,vu,Gl,w0,T0,A0,E0,C0,R0,P0,I0,L0,yu,vn,Wi,D0,N0,U0,F0,O0,J_,Np,Xi,H0,yn,je,Up,As,Cs,Df,zf,et,Xe,kf,L,$u,Fp,Gf,Kt,Ju,Op,Bp,ae,er,ja,fx,wn,Jc,px,Qu,Le,Vf,fe,Lr,Te,Rs,Kc,Ps,Qc,iu,Jt,nr,kn,mx,gx,Fi,rc,Sn,zp,kp,Ln,Is,_x,Gp,ir,gi,ac,Ea,xx,vx,Vp,Hp,Wp,Xp,yx,sr,ju,pe,bi,Mx,Ls,W0,Oi,oc,gt,tn,Ds,to,qn,Gn,_i,ed,xi,rr,ar,qp,nd,id,sd,rd,ad,od,Wn,Ne,vi,Vn,lc,or,lr,cr,Bi,zi,ps,Ca,cc,hc,ms,Si,jc,Fe,uc,bx,de,th,eh,nh,ih,Dr,sh,Nr,rh,Lt,wx,Ra,cd,Pe,Tx,Rn,hd,hr,bn,Pa,We,Yt,qi,ln,Ti,ud,Ax,Ex,Pn,Cx,Oe,Ur,ur,Ia,dr,fr,pr,La,X0,dc,Da,fc,Zp,dd,$p,eo,mc,Jp,no,yi,fd,gc,_c,Ai,Dn,Kp,gs,xc,Qp,vc,yc,Mc,pd,Sc,jp,bc,ye,Na,tm,em,Px,nm,Tc,md,im,gd,io,Fr,hn,sm,Ix,so,Tn,mr,rm,Ac,am,Lx,Ua,Fa,Ns,_s,Dx,Ec,ei,om,Or,Ld,_n,Fx,Ox,Bx,Cc,xs,xd,lm,cm,zx,vd,en,Rc,ro,qe,ah,oh,hm,Oa,Pc,yd,um,Yn,dm,fm,An,ao,Br,pm,Dd,Lc,Dc,oo,lo,lh,ch,Us,hh,uh,Yi,dh,fh,Nn,zr,kr,Zi,co,ho,Gr,Vr,Ei,uo,Nc,Uc,Md,Fc,fo,Mn,Fs,po,gm,_m,Sd,bd,wd,mo,Hr,go,Wr,_o,Xr,qr,Yr,ph,xo,$i,Ji,Fd,In,So,uv,bo,wo,$r,Ci,To,Ao,Jr,Eo,Co,Ro,Po,Io,bm,Lo,hi,mv,gv,Be,Ki,Un,Do,No,Uo,Fo,Oo,Kr,Qr,Bo,zo,mh,Ri,ko,jr,Go,Vo,dn,ni,ta,Bs,Ho,zs,ii,ea,Qi,Xn,na,Ff,Je,Mi,Bd,Fn,gh,_h,gr,ji,xh,vh,yh,Zn,ks,Td,Cm,Rm,Gs,zc,kc,Qn,Vs,ki,Pm,Im,Ee,zd,Wo,kd,Xo,Pi,Gd,Hs,qo,Yo,ia,Zo,Lm,$o,sa,Jo,Ko,Ad,Mh,bv,Dm,Nm,Ed,Sh,Gc,ra,bh,Um,Fm,vs,wh,_r,xr,Ws,Qo,Xs,ys,Cd,Tv,Ms,Ss,Th,jo,bs,Om,Av,ws,Ah,Eh,tl,Of,Ev,Bf,Cv,Rv,Pv,Iv,Lv,Dv,Nv,Vd,_e,Ch,el,Uv,Rh,Ph,Ih,Fv,Lh,Dh,Nh,Bm,Uh,Fh,Oh,Bh,Hf,zh,km,nl,Gm,Vc,vr,yr,Rd,Ov,Bv,kh,Vm,Gh,Gi,Hc,Pd,Vh,Hh,zv,Hm,Wm,Wh,Xh,qh,Xm,Wc,qm,Yh,Xc,Re,Zh,qc,$h,Jh,Kh,Ym,Yc,Id,Qh,jh,tu,eu,nu,Wf=be(()=>{Wd="187",Zm={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$m={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xd=0,su=1,qd=2,Jm=3,Km=0,ts=1,Yd=2,qs=3,Ii=0,rn=1,$n=2,si=0,Ys=1,aa=2,ru=3,au=4,Zd=5,Qm=6,es=100,$d=101,Jd=102,Kd=103,Qd=104,jd=200,tf=201,ef=202,nf=203,ou=204,lu=205,sf=206,rf=207,af=208,of=209,lf=210,cf=211,hf=212,uf=213,df=214,Xa=0,qa=1,Ya=2,Es=3,Za=4,$a=5,Ja=6,Ka=7,oa=0,ff=1,pf=2,En=0,ns=1,is=2,ss=3,ri=4,la=5,rs=6,as=7,Zc="attached",mf="detached",il=300,ai=301,os=302,ca=303,ha=304,wr=1e3,cn=1001,Tr=1002,Ie=1003,cu=1004,jm=1004,Zs=1005,t0=1005,we=1006,ua=1007,e0=1007,On=1008,n0=1008,fn=1009,hu=1010,uu=1011,$s=1012,sl=1013,pn=1014,sn=1015,ze=1016,rl=1017,al=1018,ls=1020,du=35902,fu=35899,pu=1021,mu=1022,un=1023,ti=1026,oi=1027,ol=1028,da=1029,Li=1030,ll=1031,i0=1032,cl=1033,fa=33776,pa=33777,ma=33778,ga=33779,hl=35840,ul=35841,dl=35842,fl=35843,pl=36196,ml=37492,gl=37496,_l=37488,xl=37489,_a=37490,vl=37491,yl=37808,Ml=37809,Sl=37810,bl=37811,wl=37812,Tl=37813,Al=37814,El=37815,Cl=37816,Rl=37817,Pl=37818,Il=37819,Ll=37820,Dl=37821,Nl=36492,Ul=36494,Fl=36495,Ol=36283,Bl=36284,xa=36285,zl=36286,gf=2200,_f=2201,xf=2202,Ar=2300,Qa=2301,ka=2302,$c=2303,Vi=2400,Hi=2401,Er=2402,kl=2500,gu=2501,vf=0,yf=1,Mf=2,Sf=3200,s0=3201,r0=3202,a0=3203,li=0,bf=1,ci="",$e="srgb",Cr="srgb-linear",Rr="linear",ue="srgb",o0="",l0="rg",c0="ga",h0=0,Ga=7680,u0=7681,d0=7682,f0=7683,p0=34055,m0=34056,g0=5386,_0=512,x0=513,v0=514,y0=515,M0=516,S0=517,b0=518,wf=519,Tf=512,Af=513,Ef=514,_u=515,Cf=516,Rf=517,xu=518,vu=519,Gl=35044,w0=35048,T0=35040,A0=35045,E0=35049,C0=35041,R0=35046,P0=35050,I0=35042,L0="100",yu="300 es",vn=2e3,Wi=2001,D0={COMPUTE:"compute",RENDER:"render"},N0={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},U0={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},F0={TEXTURE_COMPARE:"depthTextureCompare"},O0={NONE:0,SHARED:1,FULL:2};J_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};Np={},Xi=null;H0={[Xa]:Xa,[Ya]:Ja,[Za]:Za,[Es]:$a,[qa]:qa,[Ja]:Ya,[Ka]:Ka,[$a]:Es},yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Up=1234567,As=Math.PI/180,Cs=180/Math.PI;Df={DEG2RAD:As,RAD2DEG:Cs,generateUUID:Bn,clamp:Zt,euclideanModulo:If,mapLinear:K_,inverseLerp:Q_,lerp:Va,damp:j_,pingpong:tx,smoothstep:ex,smootherstep:nx,randInt:ix,randFloat:sx,randFloatSpread:rx,seededRandom:ax,degToRad:ox,radToDeg:lx,isPowerOfTwo:cx,ceilPowerOfTwo:hx,floorPowerOfTwo:Lf,setQuaternionFromProperEuler:ux,normalize:nn,denormalize:Ts},zf=class zf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zf.prototype.isVector2=!0;et=zf,Xe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],p=r[a+1],f=r[a+2],_=r[a+3];if(u!==_||l!==d||c!==p||h!==f){let m=l*d+c*p+h*f+u*_;m<0&&(d=-d,p=-p,f=-f,_=-_,m=-m);let g=1-o;if(m<.9995){let x=Math.acos(m),y=Math.sin(x);g=Math.sin(g*x)/y,o=Math.sin(o*x)/y,l=l*g+d*o,c=c*g+p*o,h=h*g+f*o,u=u*g+_*o}else{l=l*g+d*o,c=c*g+p*o,h=h*g+f*o,u=u*g+_*o;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],f=r[a+3];return t[e]=o*f+h*u+l*p-c*d,t[e+1]=l*f+h*d+c*u-o*p,t[e+2]=c*f+h*p+o*d-l*u,t[e+3]=h*f-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),f=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:Tt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},kf=class kf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $u.copy(this).projectOnVector(t),this.sub($u)}reflect(t){return this.sub($u.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kf.prototype.isVector3=!0;L=kf,$u=new L,Fp=new Xe,Gf=class Gf{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],_=i[0],m=i[3],g=i[6],x=i[1],y=i[4],M=i[7],w=i[2],T=i[5],v=i[8];return r[0]=a*_+o*x+l*w,r[3]=a*m+o*y+l*T,r[6]=a*g+o*M+l*v,r[1]=c*_+h*x+u*w,r[4]=c*m+h*y+u*T,r[7]=c*g+h*M+u*v,r[2]=d*_+p*x+f*w,r[5]=d*m+p*y+f*T,r[8]=d*g+p*M+f*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,f=e*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return jn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ju.makeScale(t,e)),this}rotate(t){return jn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ju.makeRotation(-t)),this}translate(t,e){return jn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ju.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Gf.prototype.isMatrix3=!0;Kt=Gf,Ju=new Kt,Op=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bp=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae=dx();ja=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{er===void 0&&(er=Pr("canvas")),er.width=t.width,er.height=t.height;let i=er.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=er}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=wi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return Tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fx=0,wn=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Bn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ku(i[a].image)):r.push(Ku(i[a]))}else r=Ku(i);n.url=r}return e||(t.images[this.uuid]=n),n}};Jc=class extends wn{constructor(t=null){jn('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}},px=0,Qu=new L,Le=class s extends yn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=cn,i=cn,r=we,a=On,o=un,l=fn,c=s.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Bn(),this.name="",this.source=new wn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Qu).x}get height(){return this.source.getSize(Qu).y}get depth(){return this.source.getSize(Qu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Tt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Tt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==il)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wr:t.x=t.x-Math.floor(t.x);break;case cn:t.x=t.x<0?0:1;break;case Tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wr:t.y=t.y-Math.floor(t.y);break;case cn:t.y=t.y<0?0:1;break;case Tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=il;Le.DEFAULT_ANISOTROPY=1;Vf=class Vf{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,M=(p+1)/2,w=(g+1)/2,T=(h+d)/4,v=(u+_)/4,S=(f+m)/4;return y>M&&y>w?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=v/n):M>w?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=S/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=v/r,i=S/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-f)*(m-f)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-f)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vf.prototype.isVector4=!0;fe=Vf,Lr=class extends yn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:we,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Le({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:we,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new wn(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Te=class extends Lr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Rs=class extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Kc=class extends Te{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Rs(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},Ps=class extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Qc=class extends Te{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Ps(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},iu=class iu{constructor(t,e,n,i,r,a,o,l,c,h,u,d,p,f,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,p,f,_,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,p,f,_,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new iu().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/nr.setFromMatrixColumn(t,0).length(),r=1/nr.setFromMatrixColumn(t,1).length(),a=1/nr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,f=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+f*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=f+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,f=c*h,_=c*u;e[0]=d+_*o,e[4]=f*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-f,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,f=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=f+p*o,e[1]=p+f*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,f=o*h,_=o*u;e[0]=l*h,e[4]=f*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-f,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,f=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=f*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+f,e[10]=d-_*u}else if(t.order==="XZY"){let d=a*l,p=a*c,f=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=p*u-f,e[2]=f*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mx,t,gx)}lookAt(t,e,n){let i=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Fi.crossVectors(n,Sn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Fi.crossVectors(n,Sn)),Fi.normalize(),rc.crossVectors(Sn,Fi),i[0]=Fi.x,i[4]=rc.x,i[8]=Sn.x,i[1]=Fi.y,i[5]=rc.y,i[9]=Sn.y,i[2]=Fi.z,i[6]=rc.z,i[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],_=n[6],m=n[10],g=n[14],x=n[3],y=n[7],M=n[11],w=n[15],T=i[0],v=i[4],S=i[8],R=i[12],E=i[1],I=i[5],N=i[9],z=i[13],D=i[2],O=i[6],q=i[10],V=i[14],st=i[3],X=i[7],$=i[11],nt=i[15];return r[0]=a*T+o*E+l*D+c*st,r[4]=a*v+o*I+l*O+c*X,r[8]=a*S+o*N+l*q+c*$,r[12]=a*R+o*z+l*V+c*nt,r[1]=h*T+u*E+d*D+p*st,r[5]=h*v+u*I+d*O+p*X,r[9]=h*S+u*N+d*q+p*$,r[13]=h*R+u*z+d*V+p*nt,r[2]=f*T+_*E+m*D+g*st,r[6]=f*v+_*I+m*O+g*X,r[10]=f*S+_*N+m*q+g*$,r[14]=f*R+_*z+m*V+g*nt,r[3]=x*T+y*E+M*D+w*st,r[7]=x*v+y*I+M*O+w*X,r[11]=x*S+y*N+M*q+w*$,r[15]=x*R+y*z+M*V+w*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],f=t[3],_=t[7],m=t[11],g=t[15],x=l*p-c*d,y=o*p-c*u,M=o*d-l*u,w=a*p-c*h,T=a*d-l*h,v=a*u-o*h;return e*(_*x-m*y+g*M)-n*(f*x-m*w+g*T)+i*(f*y-_*w+g*v)-r*(f*M-_*T+m*v)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],f=t[12],_=t[13],m=t[14],g=t[15],x=e*o-n*a,y=e*l-i*a,M=e*c-r*a,w=n*l-i*o,T=n*c-r*o,v=i*c-r*l,S=h*_-u*f,R=h*m-d*f,E=h*g-p*f,I=u*m-d*_,N=u*g-p*_,z=d*g-p*m,D=x*z-y*N+M*I+w*E-T*R+v*S;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return t[0]=(o*z-l*N+c*I)*O,t[1]=(i*N-n*z-r*I)*O,t[2]=(_*v-m*T+g*w)*O,t[3]=(d*T-u*v-p*w)*O,t[4]=(l*E-a*z-c*R)*O,t[5]=(e*z-i*E+r*R)*O,t[6]=(m*M-f*v-g*y)*O,t[7]=(h*v-d*M+p*y)*O,t[8]=(a*N-o*E+c*S)*O,t[9]=(n*E-e*N-r*S)*O,t[10]=(f*T-_*M+g*x)*O,t[11]=(u*M-h*T-p*x)*O,t[12]=(o*R-a*I-l*S)*O,t[13]=(e*I-n*R+i*S)*O,t[14]=(_*y-f*w-m*x)*O,t[15]=(h*w-u*y+d*x)*O,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,f=r*u,_=a*h,m=a*u,g=o*u,x=l*c,y=l*h,M=l*u,w=n.x,T=n.y,v=n.z;return i[0]=(1-(_+g))*w,i[1]=(p+M)*w,i[2]=(f-y)*w,i[3]=0,i[4]=(p-M)*T,i[5]=(1-(d+g))*T,i[6]=(m+x)*T,i[7]=0,i[8]=(f+y)*v,i[9]=(m-x)*v,i[10]=(1-(d+_))*v,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=nr.set(i[0],i[1],i[2]).length(),o=nr.set(i[4],i[5],i[6]).length(),l=nr.set(i[8],i[9],i[10]).length();r<0&&(a=-a),kn.copy(this);let c=1/a,h=1/o,u=1/l;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,e.setFromRotationMatrix(kn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=vn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),p=(n+i)/(n-i),f,_;if(l)f=r/(a-r),_=a*r/(a-r);else if(o===vn)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Wi)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=vn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),p=-(n+i)/(n-i),f,_;if(l)f=1/(a-r),_=a/(a-r);else if(o===vn)f=-2/(a-r),_=-(a+r)/(a-r);else if(o===Wi)f=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};iu.prototype.isMatrix4=!0;Jt=iu,nr=new L,kn=new Jt,mx=new L(0,0,0),gx=new L(1,1,1),Fi=new L,rc=new L,Sn=new L,zp=new Jt,kp=new Xe,Ln=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kp.setFromEuler(this),this.setFromQuaternion(kp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";Is=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_x=0,Gp=new L,ir=new Xe,gi=new Jt,ac=new L,Ea=new L,xx=new L,vx=new Xe,Vp=new L(1,0,0),Hp=new L(0,1,0),Wp=new L(0,0,1),Xp={type:"added"},yx={type:"removed"},sr={type:"childadded",child:null},ju={type:"childremoved",child:null},pe=class s extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new Ln,n=new Xe,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Kt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.multiply(ir),this}rotateOnWorldAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.premultiply(ir),this}rotateX(t){return this.rotateOnAxis(Vp,t)}rotateY(t){return this.rotateOnAxis(Hp,t)}rotateZ(t){return this.rotateOnAxis(Wp,t)}translateOnAxis(t,e){return Gp.copy(t).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vp,t)}translateY(t){return this.translateOnAxis(Hp,t)}translateZ(t){return this.translateOnAxis(Wp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ac.copy(t):ac.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Ea,ac,this.up):gi.lookAt(ac,Ea,this.up),this.quaternion.setFromRotationMatrix(gi),i&&(gi.extractRotation(i.matrixWorld),ir.setFromRotationMatrix(gi),this.quaternion.premultiply(ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xp),sr.child=t,this.dispatchEvent(sr),sr.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yx),ju.child=t,this.dispatchEvent(ju),ju.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xp),sr.child=t,this.dispatchEvent(sr),sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,t,xx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,vx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),f=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pe.DEFAULT_UP=new L(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;bi=class extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mx={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},W0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},oc={h:0,s:0,l:0};gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=If(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=td(a,r,t+1/3),this.g=td(a,r,t),this.b=td(a,r,t-1/3)}return ae.colorSpaceToWorking(this,i),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&Tt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Tt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Tt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=W0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Tt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return ae.workingToColorSpace(tn.copy(this),t),Math.round(Zt(tn.r*255,0,255))*65536+Math.round(Zt(tn.g*255,0,255))*256+Math.round(Zt(tn.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(tn.copy(this),e);let n=tn.r,i=tn.g,r=tn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=$e){ae.workingToColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,i=tn.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(oc);let n=Va(Oi.h,oc.h,e),i=Va(Oi.s,oc.s,e),r=Va(Oi.l,oc.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new gt;gt.NAMES=W0;Ds=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new gt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},to=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new gt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qn=class extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gn=new L,_i=new L,ed=new L,xi=new L,rr=new L,ar=new L,qp=new L,nd=new L,id=new L,sd=new L,rd=new fe,ad=new fe,od=new fe,Wn=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Gn.subVectors(t,e),i.cross(Gn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Gn.subVectors(i,e),_i.subVectors(n,e),ed.subVectors(t,e);let a=Gn.dot(Gn),o=Gn.dot(_i),l=Gn.dot(ed),c=_i.dot(_i),h=_i.dot(ed),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return r.set(1-p-f,f,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return rd.setScalar(0),ad.setScalar(0),od.setScalar(0),rd.fromBufferAttribute(t,e),ad.fromBufferAttribute(t,n),od.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(rd,r.x),a.addScaledVector(ad,r.y),a.addScaledVector(od,r.z),a}static isFrontFacing(t,e,n,i){return Gn.subVectors(n,e),_i.subVectors(t,e),Gn.cross(_i).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Gn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;rr.subVectors(i,n),ar.subVectors(r,n),nd.subVectors(t,n);let l=rr.dot(nd),c=ar.dot(nd);if(l<=0&&c<=0)return e.copy(n);id.subVectors(t,i);let h=rr.dot(id),u=ar.dot(id);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(rr,a);sd.subVectors(t,r);let p=rr.dot(sd),f=ar.dot(sd);if(f>=0&&p<=f)return e.copy(r);let _=p*c-l*f;if(_<=0&&c>=0&&f<=0)return o=c/(c-f),e.copy(n).addScaledVector(ar,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return qp.subVectors(r,i),o=(u-h)/(u-h+(p-f)),e.copy(i).addScaledVector(qp,o);let g=1/(m+_+d);return a=_*g,o=d*g,e.copy(n).addScaledVector(rr,a).addScaledVector(ar,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ne=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lc.copy(n.boundingBox)),lc.applyMatrix4(t.matrixWorld),this.union(lc)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ca),cc.subVectors(this.max,Ca),or.subVectors(t.a,Ca),lr.subVectors(t.b,Ca),cr.subVectors(t.c,Ca),Bi.subVectors(lr,or),zi.subVectors(cr,lr),ps.subVectors(or,cr);let e=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-ps.z,ps.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,ps.z,0,-ps.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-ps.y,ps.x,0];return!ld(e,or,lr,cr,cc)||(e=[1,0,0,0,1,0,0,0,1],!ld(e,or,lr,cr,cc))?!1:(hc.crossVectors(Bi,zi),e=[hc.x,hc.y,hc.z],ld(e,or,lr,cr,cc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vi=[new L,new L,new L,new L,new L,new L,new L,new L],Vn=new L,lc=new Ne,or=new L,lr=new L,cr=new L,Bi=new L,zi=new L,ps=new L,Ca=new L,cc=new L,hc=new L,ms=new L;Si=Sx();jc=class{static toHalfFloat(t){return xn(t)}static fromHalfFloat(t){return Ba(t)}},Fe=new L,uc=new et,bx=0,de=class extends yn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=sn,this.version=0,this._normalizationScale=t!==void 0?Mu(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)uc.fromBufferAttribute(this,e),uc.applyMatrix3(t),this.setXY(e,uc.x,uc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ts(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):nn(t,this.array)}},th=class extends de{constructor(t,e,n){super(new Int8Array(t),e,n)}},eh=class extends de{constructor(t,e,n){super(new Uint8Array(t),e,n)}},nh=class extends de{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}},ih=class extends de{constructor(t,e,n){super(new Int16Array(t),e,n)}},Dr=class extends de{constructor(t,e,n){super(new Uint16Array(t),e,n)}},sh=class extends de{constructor(t,e,n){super(new Int32Array(t),e,n)}},Nr=class extends de{constructor(t,e,n){super(new Uint32Array(t),e,n)}},rh=class extends de{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Ba(this.array[t*this.itemSize]);return this.normalized&&(e=Ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=xn(e),this}getY(t){let e=Ba(this.array[t*this.itemSize+1]);return this.normalized&&(e=Ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=xn(e),this}getZ(t){let e=Ba(this.array[t*this.itemSize+2]);return this.normalized&&(e=Ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=xn(e),this}getW(t){let e=Ba(this.array[t*this.itemSize+3]);return this.normalized&&(e=Ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=xn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=xn(e),this.array[t+1]=xn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),i=nn(i,this.array)),this.array[t+0]=xn(e),this.array[t+1]=xn(n),this.array[t+2]=xn(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[t+0]=xn(e),this.array[t+1]=xn(n),this.array[t+2]=xn(i),this.array[t+3]=xn(r),this}},Lt=class extends de{constructor(t,e,n){super(new Float32Array(t),e,n)}},wx=new Ne,Ra=new L,cd=new L,Pe=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wx.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ra.subVectors(t,this.center);let e=Ra.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ra,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ra.copy(t.center).add(cd)),this.expandByPoint(Ra.copy(t.center).sub(cd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Tx=0,Rn=new Jt,hd=new pe,hr=new L,bn=new Ne,Pa=new Ne,We=new L,Yt=class s extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($_(t)?Nr:Dr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return hd.lookAt(t),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ne);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Pa.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(bn.min,Pa.min),bn.expandByPoint(We),We.addVectors(bn.max,Pa.max),bn.expandByPoint(We)):(bn.expandByPoint(Pa.min),bn.expandByPoint(Pa.max))}bn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)We.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(We));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)We.fromBufferAttribute(o,c),l&&(hr.fromBufferAttribute(t,c),We.add(hr)),i=Math.max(i,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new de(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new L,l[R]=new L;let h=new L,u=new L,d=new L,p=new et,f=new et,_=new et,m=new L,g=new L;function x(R,E,I){c[R]=c[E]=c[I]=1,h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,I),p.fromBufferAttribute(r,R),f.fromBufferAttribute(r,E),_.fromBufferAttribute(r,I),u.sub(h),d.sub(h),f.sub(p),_.sub(p);let N=1/(f.x*_.y-_.x*f.y);isFinite(N)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(N),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(N),o[R].add(m),o[E].add(m),o[I].add(m),l[R].add(g),l[E].add(g),l[I].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,E=y.length;R<E;++R){let I=y[R],N=I.start,z=I.count;for(let D=N,O=N+z;D<O;D+=3)x(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let M=new L,w=new L,T=new L,v=new L;function S(R){T.fromBufferAttribute(i,R),v.copy(T);let E=o[R];M.copy(E),M.sub(T.multiplyScalar(T.dot(E))).normalize(),w.crossVectors(v,E);let N=w.dot(l[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,N)}for(let R=0,E=n.count;R<E;++R)c[R]&&S(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new de(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){let f=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,f),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new de(d,h,u)}if(this.index===null)return Tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},qi=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gl,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Yp(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Yp(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};ln=new L,Ti=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?Mu(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ir("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new de(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ir("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ts(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):nn(t,this.data.array)}},ud=new L,Ax=new L,Ex=new Kt,Pn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ud.subVectors(n,e).cross(Ax.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(ud),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ex.getNormalMatrix(t),i=this.coplanarPoint(ud).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Cx=0,Oe=class extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Ys,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ou,this.blendDst=lu,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Tt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Tt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new et().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ur=class extends Oe{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ia=new L,dr=new L,fr=new L,pr=new et,La=new et,X0=new Jt,dc=new L,Da=new L,fc=new L,Zp=new et,dd=new et,$p=new et,eo=class extends pe{constructor(t=new Ur){if(super(),this.isSprite=!0,this.type="Sprite",ur===void 0){ur=new Yt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qi(e,5);ur.setIndex([0,1,2,0,2,3]),ur.setAttribute("position",new Ti(n,3,0,!1)),ur.setAttribute("uv",new Ti(n,2,3,!1))}this.geometry=ur,this.material=t,this.center=new et(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),dr.setFromMatrixScale(this.matrixWorld),X0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&dr.multiplyScalar(-fr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;pc(dc.set(-.5,-.5,0),fr,a,dr,i,r),pc(Da.set(.5,-.5,0),fr,a,dr,i,r),pc(fc.set(.5,.5,0),fr,a,dr,i,r),Zp.set(0,0),dd.set(1,0),$p.set(1,1);let o=t.ray.intersectTriangle(dc,Da,fc,!1,Ia);if(o===null&&(pc(Da.set(-.5,.5,0),fr,a,dr,i,r),dd.set(0,1),o=t.ray.intersectTriangle(dc,fc,Da,!1,Ia),o===null))return;let l=t.ray.origin.distanceTo(Ia);l<t.near||l>t.far||e.push({distance:l,point:Ia.clone(),uv:Wn.getInterpolation(Ia,dc,Da,fc,Zp,dd,$p,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};mc=new L,Jp=new L,no=class extends pe{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let i=this.levels,r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){let i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){mc.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(mc);this.getObjectForDistance(i).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){mc.setFromMatrixPosition(t.matrixWorld),Jp.setFromMatrixPosition(this.matrixWorld);let n=mc.distanceTo(Jp)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let a=e[i].distance;if(e[i].object.visible&&(a-=a*e[i].hysteresis),n>=a)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){let e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let a=n[i];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}},yi=new L,fd=new L,gc=new L,_c=new L,Ai=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){fd.copy(t).add(e).multiplyScalar(.5),gc.copy(e).sub(t).normalize(),_c.copy(this.origin).sub(fd);let r=t.distanceTo(e)*.5,a=-this.direction.dot(gc),o=_c.dot(this.direction),l=-_c.dot(gc),c=_c.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=r*h,u>=0)if(d>=-f)if(d<=f){let _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(fd).addScaledVector(gc,d),p}intersectSphere(t,e){if(t.radius<0)return null;yi.subVectors(t.center,this.origin);let n=yi.dot(this.direction),i=yi.dot(yi)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,p=t.z-a.z,f=e.x-a.x,_=e.y-a.y,m=e.z-a.z,g=n.x-a.x,x=n.y-a.y,y=n.z-a.z,M=Math.abs(l),w=Math.abs(c),T=Math.abs(h),v,S,R,E,I,N,z,D,O,q,V,st;if(M>=w&&M>=T?(R=l,N=u,O=f,st=g,l>=0?(v=c,S=h,E=d,I=p,z=_,D=m,q=x,V=y):(v=h,S=c,E=p,I=d,z=m,D=_,q=y,V=x)):w>=T?(R=c,N=d,O=_,st=x,c>=0?(v=h,S=l,E=p,I=u,z=m,D=f,q=y,V=g):(v=l,S=h,E=u,I=p,z=f,D=m,q=g,V=y)):(R=h,N=p,O=m,st=y,h>=0?(v=l,S=c,E=u,I=d,z=f,D=_,q=g,V=x):(v=c,S=l,E=d,I=u,z=_,D=f,q=x,V=g)),R===0)return null;let X=v/R,$=S/R,nt=1/R,At=E-X*N,at=I-$*N,G=z-X*O,lt=D-$*O,vt=q-X*st,kt=V-$*st,wt=vt*lt-kt*G,Vt=At*kt-at*vt,xe=G*at-lt*At;if(i){if(wt<0||Vt<0||xe<0)return null}else if((wt<0||Vt<0||xe<0)&&(wt>0||Vt>0||xe>0))return null;let Pt=wt+Vt+xe;if(Pt===0)return null;let ee=nt*(wt*N+Vt*O+xe*st);return(Pt>0?ee<0:ee>0)?null:this.at(ee/Pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dn=class extends Oe{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Kp=new Jt,gs=new Ai,xc=new Pe,Qp=new L,vc=new L,yc=new L,Mc=new L,pd=new L,Sc=new L,jp=new L,bc=new L,ye=class extends pe{constructor(t=new Yt,e=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Sc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(pd.fromBufferAttribute(u,t),a?Sc.addScaledVector(pd,h):Sc.addScaledVector(pd.sub(e),h))}e.add(Sc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xc.copy(n.boundingSphere),xc.applyMatrix4(r),gs.copy(t.ray).recast(t.near),!(xc.containsPoint(gs.origin)===!1&&(gs.intersectSphere(xc,Qp)===null||gs.origin.distanceToSquared(Qp)>(t.far-t.near)**2))&&(Kp.copy(r).invert(),gs.copy(t.ray).applyMatrix4(Kp),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,_=d.length;f<_;f++){let m=d[f],g=a[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,w=y;M<w;M+=3){let T=o.getX(M),v=o.getX(M+1),S=o.getX(M+2);i=wc(this,g,t,n,c,h,u,T,v,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let f=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=f,g=_;m<g;m+=3){let x=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);i=wc(this,a,t,n,c,h,u,x,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let f=0,_=d.length;f<_;f++){let m=d[f],g=a[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,w=y;M<w;M+=3){let T=M,v=M+1,S=M+2;i=wc(this,g,t,n,c,h,u,T,v,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let f=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=f,g=_;m<g;m+=3){let x=m,y=m+1,M=m+2;i=wc(this,a,t,n,c,h,u,x,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};Na=new fe,tm=new fe,em=new fe,Px=new fe,nm=new Jt,Tc=new L,md=new Pe,im=new Jt,gd=new Ai,io=class extends ye{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zc,this.bindMatrix=new Jt,this.bindMatrixInverse=new Jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ne),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Tc),this.boundingBox.expandByPoint(Tc)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pe),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Tc),this.boundingSphere.expandByPoint(Tc)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),md.copy(this.boundingSphere),md.applyMatrix4(i),t.ray.intersectsSphere(md)!==!1&&(im.copy(i).invert(),gd.copy(t.ray).applyMatrix4(im),!(this.boundingBox!==null&&gd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,gd)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new fe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Zc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Tt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;tm.fromBufferAttribute(i.attributes.skinIndex,t),em.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(Na.copy(e),e.set(0,0,0,0)):(Na.set(e.x,e.y,e.z,1),e.set(0,0,0)),Na.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=em.getComponent(r);if(a!==0){let o=tm.getComponent(r);nm.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Px.copy(Na).applyMatrix4(nm),a)}}return e.isVector4&&(e.w=Na.w),e.applyMatrix4(this.bindMatrixInverse)}},Fr=class extends pe{constructor(){super(),this.isBone=!0,this.type="Bone"}},hn=class extends Le{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ie,h=Ie,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sm=new Jt,Ix=new Jt,so=class s{constructor(t=[],e=[]){this.uuid=Bn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Tt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Jt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:Ix;sm.multiplyMatrices(o,e[r]),sm.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new hn(e,t,t,un,sn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],a=e[r];a===void 0&&(Tt("Skeleton: No bone found with UUID:",r),a=new Fr),this.bones.push(a),this.boneInverses.push(new Jt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let a=e[i];t.bones.push(a.uuid);let o=n[i];t.boneInverses.push(o.toArray())}return t}},Tn=class extends de{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},mr=new Jt,rm=new Jt,Ac=[],am=new Ne,Lx=new Jt,Ua=new ye,Fa=new Pe,Ns=class extends ye{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Lx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ne),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mr),am.copy(t.boundingBox).applyMatrix4(mr),this.boundingBox.union(am)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pe),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mr),Fa.copy(t.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(Fa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ua.geometry=this.geometry,Ua.material=this.material,Ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fa.copy(this.boundingSphere),Fa.applyMatrix4(n),t.ray.intersectsSphere(Fa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,mr),rm.multiplyMatrices(n,mr),Ua.matrixWorld=rm,Ua.raycast(t,Ac);for(let a=0,o=Ac.length;a<o;a++){let l=Ac[a];l.instanceId=r,l.object=this,e.push(l)}Ac.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Tn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new hn(new Float32Array(i*this.count),i,this.count,ol,sn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_s=new Pe,Dx=new et(.5,.5),Ec=new L,ei=class{constructor(t=new Pn,e=new Pn,n=new Pn,i=new Pn,r=new Pn,a=new Pn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],f=r[8],_=r[9],m=r[10],g=r[11],x=r[12],y=r[13],M=r[14],w=r[15];if(i[0].setComponents(c-a,p-h,g-f,w-x).normalize(),i[1].setComponents(c+a,p+h,g+f,w+x).normalize(),i[2].setComponents(c+o,p+u,g+_,w+y).normalize(),i[3].setComponents(c-o,p-u,g-_,w-y).normalize(),n)i[4].setComponents(l,d,m,M).normalize(),i[5].setComponents(c-l,p-d,g-m,w-M).normalize();else if(i[4].setComponents(c-l,p-d,g-m,w-M).normalize(),e===vn)i[5].setComponents(c+l,p+d,g+m,w+M).normalize();else if(e===Wi)i[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){_s.center.set(0,0,0);let e=Dx.distanceTo(t.center);return _s.radius=.7071067811865476+e,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ec.x=i.normal.x>0?t.max.x:t.min.x,Ec.y=i.normal.y>0?t.max.y:t.min.y,Ec.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},om=new Jt,Or=class s{constructor(){this.coordinateSystem=vn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];om.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new ei),n[i].setFromProjectionMatrix(om,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new ei),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};Ld=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=t,o.count=e,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},_n=new Jt,Fx=new gt(1,1,1),Ox=new ei,Bx=new Or,Cc=new Ne,xs=new Pe,xd=new L,lm=new L,cm=new L,zx=new L,vd=new Ld,en=new ye,Rc=[];ro=class extends ye{constructor(t,e,n=e*2,i){super(new Yt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(t),this._mergedDrawStarts=new Int32Array(t),this._mergedDrawInstanceCounts=new Int32Array(t),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new hn(e,t,t,un,sn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new hn(e,t,t,da,pn);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new hn(e,t,t,un,sn);n.colorSpace=ae.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in t.attributes){let a=t.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),u=new de(h,l,c);e.setAttribute(r,u)}if(t.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new de(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(t){let e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){let e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ne);let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,_n),this.getBoundingBoxAt(r,Cc).applyMatrix4(_n),t.union(Cc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pe);let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,_n),this.getBoundingSphereAt(r,xs).applyMatrix4(_n),t.union(xs)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(_d),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;_n.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let a=this._colorsTexture;return a&&(Fx.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let a=t.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(_d),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=e.getIndex(),o=this._geometryInfo[t];if(i&&a.count>o.reservedIndexCount||e.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=e.getAttribute("position").count;for(let h in n.attributes){let u=e.getAttribute(h),d=n.getAttribute(h);kx(u,d,l);let p=u.itemSize;for(let f=u.count,_=c;f<_;f++){let m=l+f;for(let g=0;g<p;g++)d.setComponent(m,g,0)}d.needsUpdate=!0,d.addUpdateRange(l*p,c*p)}if(i){let h=o.indexStart,u=o.reservedIndexCount;o.indexCount=e.getIndex().count;for(let d=0;d<a.count;d++)r.setX(h+d,l+a.getX(d));for(let d=a.count,p=u;d<p;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,e.boundingBox!==null&&(o.boundingBox=e.boundingBox.clone()),o.boundingSphere=null,e.boundingSphere!==null&&(o.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0,n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){let l=i[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,p=r.index,f=p.array,_=t-u;for(let m=h;m<h+d;m++)f[m]=f[m]+_;p.array.copyWithin(e,h,h+d),p.addUpdateRange(e,d),p.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){let{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(let p in d){let f=d[p],{array:_,itemSize:m}=f;_.copyWithin(t*m,h*m,(h+u)*m),f.addUpdateRange(t*m,u*m),f.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){let r=new Ne,a=n.index,o=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(xd.fromBufferAttribute(o,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){let r=new Pe;this.getBoundingBoxAt(t,Cc),Cc.getCenter(r.center);let a=n.index,o=n.attributes.position,l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let u=c;a&&(u=a.getX(u)),xd.fromBufferAttribute(o,u),l=Math.max(l,r.center.distanceToSquared(xd))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);let n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);let n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){let e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(_d);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let i=new Int32Array(t),r=new Int32Array(t);Kn(this._multiDrawCounts,i),Kn(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r;let a=new Int32Array(t),o=new Int32Array(t),l=new Int32Array(t);Kn(this._mergedDrawCounts,a),Kn(this._mergedDrawStarts,o),Kn(this._mergedDrawInstanceCounts,l),this._mergedDrawCounts=a,this._mergedDrawStarts=o,this._mergedDrawInstanceCounts=l,this._maxInstanceCount=t;let c=this._indirectTexture,h=this._matricesTexture,u=this._colorsTexture;c.dispose(),this._initIndirectTexture(),Kn(c.image.data,this._indirectTexture.image.data),h.dispose(),this._initMatricesTexture(),Kn(h.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),Kn(u.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(t,e){let n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Yt,this._initializeGeometry(r));let a=this.geometry;r.index&&Kn(r.index.array,a.index.array);for(let o in r.attributes)Kn(r.attributes[o].array,a.attributes[o].array);this._visibilityChanged=!0}raycast(t,e){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;en.material=this.material,en.geometry.index=a.index,en.geometry.attributes=a.attributes,en.geometry.boundingBox===null&&(en.geometry.boundingBox=new Ne),en.geometry.boundingSphere===null&&(en.geometry.boundingSphere=new Pe);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;let c=n[o].geometryIndex,h=i[c];en.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,en.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,en.geometry.boundingBox),this.getBoundingSphereAt(c,en.geometry.boundingSphere),en.raycast(t,Rc);for(let u=0,d=Rc.length;u<d;u++){let p=Rc[u];p.object=this,p.batchId=o,e.push(p)}Rc.length=0}en.material=null,en.geometry.index=null,en.geometry.attributes={},en.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._mergedDrawCounts=t._mergedDrawCounts.slice(),this._mergedDrawStarts=t._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=t._mergedDrawInstanceCounts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),t._colorsTexture!==null?(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(t,e,n,i="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let r=e.getIndex(),a=r===null?1:r.array.BYTES_PER_ELEMENT,o=1;n.wireframe&&(o=2,a=e.attributes.position.count>65535?4:2);let l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._mergedDrawStarts,d=this._mergedDrawCounts,p=this._mergedDrawInstanceCounts,f=this._geometryInfo,_=this.perObjectFrustumCulled,m=this._indirectTexture,g=m.image.data,x=t.isArrayCamera?Bx:Ox;_&&(t.isArrayCamera?x.setFromArrayCamera(t):(_n.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).multiply(this.matrixWorld),x.setFromProjectionMatrix(_n,t.coordinateSystem,t.reversedDepth)));let y=0,M=0;if(this.sortObjects){_n.copy(this.matrixWorld).invert(),lm.setFromMatrixPosition(t.matrixWorld).applyMatrix4(_n),cm.set(0,0,-1).transformDirection(t.matrixWorld).transformDirection(_n);for(let v=0,S=l.length;v<S;v++)if(l[v].visible&&l[v].active){let R=l[v].geometryIndex;this.getMatrixAt(v,_n),this.getBoundingSphereAt(R,xs).applyMatrix4(_n);let E=!1;if(_&&(E=!x.intersectsSphere(xs)),!E){let I=f[R],N=zx.subVectors(xs.center,lm).dot(cm);vd.push(I.start,I.count,N,v)}}let w=vd.list,T=this.customSort;T===null?w.sort(n.transparent?Ux:Nx):T.call(this,w,t);for(let v=0,S=w.length;v<S;v++){let R=w[v],E=R.start*a*o,I=R.count*o;i==="merged"?M>0&&u[M-1]===E&&d[M-1]===I?p[M-1]++:(u[M]=E,d[M]=I,p[M]=1,M++):(c[y]=E,h[y]=I),g[y]=R.index,y++}vd.reset()}else for(let w=0,T=l.length;w<T;w++)if(l[w].visible&&l[w].active){let v=l[w].geometryIndex,S=!1;if(_&&(this.getMatrixAt(w,_n),this.getBoundingSphereAt(v,xs).applyMatrix4(_n),S=!x.intersectsSphere(xs)),!S){let R=f[v],E=R.start*a*o,I=R.count*o;i==="merged"?M>0&&u[M-1]===E&&d[M-1]===I?p[M-1]++:(u[M]=E,d[M]=I,p[M]=1,M++):(c[y]=E,h[y]=I),g[y]=w,y++}}m.needsUpdate=!0,this._multiDrawCount=y,this._mergedDrawCount=M,this._multiDrawBytesPerElement=a,this._visibilityChanged=!1}onBeforeRender(t,e,n,i,r){t.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(n,i,r)}onBeforeShadow(t,e,n,i,r,a){t.isWebGPURenderer!==!0&&this._updateDrawParameters(i,r,a)}},qe=class extends Oe{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ah=new L,oh=new L,hm=new Jt,Oa=new Ai,Pc=new Pe,yd=new L,um=new L,Yn=class extends pe{constructor(t=new Yt,e=new qe){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ah.fromBufferAttribute(e,i-1),oh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ah.distanceTo(oh);t.setAttribute("lineDistance",new Lt(n,1))}else Tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pc.copy(n.boundingSphere),Pc.applyMatrix4(i),Pc.radius+=r,t.ray.intersectsSphere(Pc)===!1)return;hm.copy(i).invert(),Oa.copy(t.ray).applyMatrix4(hm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let _=p,m=f-1;_<m;_+=c){let g=h.getX(_),x=h.getX(_+1),y=Ic(this,t,Oa,l,g,x,_);y&&e.push(y)}if(this.isLineLoop){let _=h.getX(f-1),m=h.getX(p),g=Ic(this,t,Oa,l,_,m,f-1);g&&e.push(g)}}else{let p=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let _=p,m=f-1;_<m;_+=c){let g=Ic(this,t,Oa,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){let _=Ic(this,t,Oa,l,f-1,p,f-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};dm=new L,fm=new L,An=class extends Yn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)dm.fromBufferAttribute(e,i),fm.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+dm.distanceTo(fm);t.setAttribute("lineDistance",new Lt(n,1))}else Tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ao=class extends Yn{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Br=class extends Oe{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pm=new Jt,Dd=new Ai,Lc=new Pe,Dc=new L,oo=class extends pe{constructor(t=new Yt,e=new Br){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lc.copy(n.boundingSphere),Lc.applyMatrix4(i),Lc.radius+=r,t.ray.intersectsSphere(Lc)===!1)return;pm.copy(i).invert(),Dd.copy(t.ray).applyMatrix4(pm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let f=d,_=p;f<_;f++){let m=c.getX(f);Dc.fromBufferAttribute(u,m),mm(Dc,m,l,i,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let f=d,_=p;f<_;f++)Dc.fromBufferAttribute(u,f),mm(Dc,f,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};lo=class extends Le{constructor(t,e,n,i,r=we,a=we,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},lh=class extends lo{constructor(t,e,n,i,r,a,o,l){super({},t,e,n,i,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}},ch=class extends Le{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ie,this.minFilter=Ie,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new wn(Object.assign({},t.image)),this}},Us=class extends Le{constructor(t=[],e,n,i,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},hh=class extends Us{constructor(t,e,n,i,r,a){super(t,e,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=cn,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},uh=class extends Us{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,ai),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},Yi=class extends Le{constructor(t=[],e=ai,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},dh=class extends Le{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fh=class extends Le{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){let t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}},Nn=class extends Le{constructor(t,e,n=pn,i,r,a,o=Ie,l=Ie,c,h=ti,u=1){if(h!==ti&&h!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},zr=class extends Nn{constructor(t,e=pn,n=ai,i,r,a=Ie,o=Ie,l,c=ti){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},kr=class extends Le{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Zi=class s extends Yt{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;f("z","y","x",-1,-1,n,e,t,a,r,0),f("z","y","x",1,-1,n,e,-t,a,r,1),f("x","z","y",1,1,t,n,e,i,a,2),f("x","z","y",1,-1,t,n,-e,i,a,3),f("x","y","z",1,-1,t,e,n,i,r,4),f("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function f(_,m,g,x,y,M,w,T,v,S,R){let E=M/v,I=w/S,N=M/2,z=w/2,D=T/2,O=v+1,q=S+1,V=0,st=0,X=new L;for(let $=0;$<q;$++){let nt=$*I-z;for(let At=0;At<O;At++){let at=At*E-N;X[_]=at*x,X[m]=nt*y,X[g]=D,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[g]=T>0?1:-1,h.push(X.x,X.y,X.z),u.push(At/v),u.push(1-$/S),V+=1}}for(let $=0;$<S;$++)for(let nt=0;nt<v;nt++){let At=d+nt+O*$,at=d+nt+O*($+1),G=d+(nt+1)+O*($+1),lt=d+(nt+1)+O*$;l.push(At,at,lt),l.push(at,G,lt),st+=6}o.addGroup(p,st,R),p+=st,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},co=class s extends Yt{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,p=2*u+d,f=n*2+r,_=i+1,m=new L,g=new L;for(let x=0;x<=f;x++){let y=0,M=0,w=0,T=0;if(x<=n){let R=x/n,E=R*Math.PI/2;M=-h-t*Math.cos(E),w=t*Math.sin(E),T=-t*Math.cos(E),y=R*u}else if(x<=n+r){let R=(x-n)/r;M=-h+R*e,w=t,T=0,y=u+R*d}else{let R=(x-n-r)/n,E=R*Math.PI/2;M=h+t*Math.sin(E),w=t*Math.cos(E),T=t*Math.sin(E),y=u+d+R*u}let v=Math.max(0,Math.min(1,y/p)),S=0;x===0?S=.5/i:x===f&&(S=-.5/i);for(let R=0;R<=i;R++){let E=R/i,I=E*Math.PI*2,N=Math.sin(I),z=Math.cos(I);g.x=-w*z,g.y=M,g.z=w*N,o.push(g.x,g.y,g.z),m.set(-w*z,T,w*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(E+S,v)}if(x>0){let R=(x-1)*_;for(let E=0;E<i;E++){let I=R+E,N=R+E+1,z=x*_+E,D=x*_+E+1;a.push(I,N,z),a.push(N,D,z)}}}this.setIndex(a),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ho=class s extends Yt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new L,h=new et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(o,3)),this.setAttribute("uv",new Lt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Gr=class s extends Yt{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],f=0,_=[],m=n/2,g=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(p,2));function x(){let M=new L,w=new L,T=0,v=(e-t)/n;for(let S=0;S<=r;S++){let R=[],E=S/r,I=E*(e-t)+t;for(let N=0;N<=i;N++){let z=N/i,D=z*l+o,O=Math.sin(D),q=Math.cos(D);w.x=I*O,w.y=-E*n+m,w.z=I*q,u.push(w.x,w.y,w.z),M.set(O,v,q).normalize(),d.push(M.x,M.y,M.z),p.push(z,1-E),R.push(f++)}_.push(R)}for(let S=0;S<i;S++)for(let R=0;R<r;R++){let E=_[R][S],I=_[R+1][S],N=_[R+1][S+1],z=_[R][S+1];(t>0||R!==0)&&(h.push(E,I,z),T+=3),(e>0||R!==r-1)&&(h.push(I,N,z),T+=3)}c.addGroup(g,T,0),g+=T}function y(M){let w=f,T=new et,v=new L,S=0,R=M===!0?t:e,E=M===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),f++;let I=f;for(let N=0;N<=i;N++){let D=N/i*l+o,O=Math.cos(D),q=Math.sin(D);v.x=R*q,v.y=m*E,v.z=R*O,u.push(v.x,v.y,v.z),d.push(0,E,0),T.x=O*.5+.5,T.y=q*.5*E+.5,p.push(T.x,T.y),f++}for(let N=0;N<i;N++){let z=w+N,D=I+N;M===!0?h.push(D,D+1,z):h.push(D+1,D,z),S+=3}c.addGroup(g,S,M===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vr=class s extends Gr{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ei=class s extends Yt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(r.slice(),3)),this.setAttribute("uv",new Lt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let y=new L,M=new L,w=new L;for(let T=0;T<e.length;T+=3)p(e[T+0],y),p(e[T+1],M),p(e[T+2],w),l(y,M,w,x)}function l(x,y,M,w){let T=w+1,v=[];for(let S=0;S<=T;S++){v[S]=[];let R=x.clone().lerp(M,S/T),E=y.clone().lerp(M,S/T),I=T-S;for(let N=0;N<=I;N++)N===0&&S===T?v[S][N]=R:v[S][N]=R.clone().lerp(E,N/I)}for(let S=0;S<T;S++)for(let R=0;R<2*(T-S)-1;R++){let E=Math.floor(R/2);R%2===0?(d(v[S][E+1]),d(v[S+1][E]),d(v[S][E])):(d(v[S][E+1]),d(v[S+1][E+1]),d(v[S+1][E]))}}function c(x){let y=new L;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(x),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let x=new L;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];let M=m(x)/2/Math.PI+.5,w=g(x)/Math.PI+.5;a.push(M,1-w)}f(),u()}function u(){for(let x=0;x<a.length;x+=6){let y=a[x+0],M=a[x+2],w=a[x+4],T=Math.max(y,M,w),v=Math.min(y,M,w);T>.9&&v<.1&&(y<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function p(x,y){let M=x*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function f(){let x=new L,y=new L,M=new L,w=new L,T=new et,v=new et,S=new et;for(let R=0,E=0;R<r.length;R+=9,E+=6){x.set(r[R+0],r[R+1],r[R+2]),y.set(r[R+3],r[R+4],r[R+5]),M.set(r[R+6],r[R+7],r[R+8]),T.set(a[E+0],a[E+1]),v.set(a[E+2],a[E+3]),S.set(a[E+4],a[E+5]),w.copy(x).add(y).add(M).divideScalar(3);let I=m(w);_(T,E+0,x,I),_(v,E+2,y,I),_(S,E+4,M,I)}}function _(x,y,M,w){w<0&&x.x===1&&(a[y]=x.x-1),M.x===0&&M.z===0&&(a[y]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}},uo=class s extends Ei{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Nc=new L,Uc=new L,Md=new L,Fc=new Wn,fo=class extends Yt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(As*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d=new Map,p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:_,b:m,c:g}=Fc;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Fc.getNormal(Md),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){let y=(x+1)%3,M=u[x],w=u[y],T=Fc[h[x]],v=Fc[h[y]],S=`${M}_${w}`,R=`${w}_${M}`,E=d.get(R);E?(Md.dot(E.normal)<=r&&(p.push(T.x,T.y,T.z),p.push(v.x,v.y,v.z)),d.set(R,null)):d.has(S)||d.set(S,{index0:c[x],index1:c[y],normal:Md.clone()})}}for(let f of d.values())if(f){let{index0:_,index1:m}=f;Nc.fromBufferAttribute(o,_),Uc.fromBufferAttribute(o,m),p.push(Nc.x,Nc.y,Nc.z),p.push(Uc.x,Uc.y,Uc.z)}this.setAttribute("position",new Lt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Tt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,p=(a-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new et:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,i=[],r=[],a=[],o=new L,l=new Jt;for(let p=0;p<=t;p++){let f=p/t;i[p]=this.getTangentAt(f,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Zt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Zt(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let f=1;f<=t;f++)r[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Fs=class extends Mn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new et){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},po=class extends Fs{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};gm=new L,_m=new L,Sd=new Nf,bd=new Nf,wd=new Nf,mo=class extends Mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(_m.subVectors(i[0],i[1]).add(i[0]),c=_m);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(gm.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=gm),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),f<1e-4&&(f=_),m<1e-4&&(m=_),Sd.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,f,_,m),bd.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,f,_,m),wd.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,f,_,m)}else this.curveType==="catmullrom"&&(Sd.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),bd.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),wd.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Sd.calc(l),bd.calc(l),wd.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};Hr=class extends Mn{constructor(t=new et,e=new et,n=new et,i=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new et){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Wa(t,i.x,r.x,a.x,o.x),Wa(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},go=class extends Mn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Wa(t,i.x,r.x,a.x,o.x),Wa(t,i.y,r.y,a.y,o.y),Wa(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wr=class extends Mn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_o=class extends Mn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xr=class extends Mn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ha(t,i.x,r.x,a.x),Ha(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qr=class extends Mn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ha(t,i.x,r.x,a.x),Ha(t,i.y,r.y,a.y),Ha(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yr=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(xm(o,l.x,c.x,h.x,u.x),xm(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new et().fromArray(i))}return this}},ph=Object.freeze({__proto__:null,ArcCurve:po,CatmullRomCurve3:mo,CubicBezierCurve:Hr,CubicBezierCurve3:go,EllipseCurve:Fs,LineCurve:Wr,LineCurve3:_o,QuadraticBezierCurve:Xr,QuadraticBezierCurve3:qr,SplineCurve:Yr}),xo=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ph[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new ph[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},$i=class extends xo{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Wr(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Xr(this.currentPoint.clone(),new et(t,e),new et(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new Hr(this.currentPoint.clone(),new et(t,e),new et(n,i),new et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Yr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new Fs(t,e,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ji=class extends $i{constructor(t){super(t),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new $i().fromJSON(i))}return this}};Fd=class{static triangulate(t,e,n=2){return Zx(t,e,n)}},In=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];ym(t),Mm(n,t);let a=t.length;e.forEach(ym);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Mm(n,e[l]);let o=Fd.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};So=class s extends Yt{constructor(t=new Ji([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Lt(i,3)),this.setAttribute("uv",new Lt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,f=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:uv,y,M=!1,w,T,v,S;if(g){y=g.getSpacedPoints(h),M=!0,d=!1;let it=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(h,it),T=new L,v=new L,S=new L}d||(m=0,p=0,f=0,_=0);let R=o.extractPoints(c),E=R.shape,I=R.holes;if(!In.isClockWise(E)){E=E.reverse();for(let it=0,mt=I.length;it<mt;it++){let dt=I[it];In.isClockWise(dt)&&(I[it]=dt.reverse())}}function z(it){let dt=10000000000000001e-36,Nt=it[0];for(let ft=1;ft<=it.length;ft++){let Qt=ft%it.length,Bt=it[Qt],se=Bt.x-Nt.x,te=Bt.y-Nt.y,k=se*se+te*te,P=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(Nt.x),Math.abs(Nt.y)),Z=dt*P*P;if(k<=Z){it.splice(Qt,1),ft--;continue}Nt=Bt}}z(E),I.forEach(z);let D=I.length,O=E;for(let it=0;it<D;it++){let mt=I[it];E=E.concat(mt)}function q(it,mt,dt){return mt||Gt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(mt,dt)}let V=E.length;function st(it,mt,dt){let Nt,ft,Qt,Bt=it.x-mt.x,se=it.y-mt.y,te=dt.x-it.x,k=dt.y-it.y,P=Bt*Bt+se*se,Z=Bt*k-se*te;if(Math.abs(Z)>Number.EPSILON){let ct=Math.sqrt(P),Ht=Math.sqrt(te*te+k*k),rt=mt.x-se/ct,qt=mt.y+Bt/ct,Ct=dt.x-k/Ht,Dt=dt.y+te/Ht,C=((Ct-rt)*k-(Dt-qt)*te)/(Bt*k-se*te);Nt=rt+Bt*C-it.x,ft=qt+se*C-it.y;let b=Nt*Nt+ft*ft;if(b<=2)return new et(Nt,ft);Qt=Math.sqrt(b/2)}else{let ct=!1;Bt>Number.EPSILON?te>Number.EPSILON&&(ct=!0):Bt<-Number.EPSILON?te<-Number.EPSILON&&(ct=!0):Math.sign(se)===Math.sign(k)&&(ct=!0),ct?(Nt=-se,ft=Bt,Qt=Math.sqrt(P)):(Nt=Bt,ft=se,Qt=Math.sqrt(P/2))}return new et(Nt/Qt,ft/Qt)}let X=[];for(let it=0,mt=O.length,dt=mt-1,Nt=it+1;it<mt;it++,dt++,Nt++)dt===mt&&(dt=0),Nt===mt&&(Nt=0),X[it]=st(O[it],O[dt],O[Nt]);let $=[],nt,At=X.concat();for(let it=0,mt=D;it<mt;it++){let dt=I[it];nt=[];for(let Nt=0,ft=dt.length,Qt=ft-1,Bt=Nt+1;Nt<ft;Nt++,Qt++,Bt++)Qt===ft&&(Qt=0),Bt===ft&&(Bt=0),nt[Nt]=st(dt[Nt],dt[Qt],dt[Bt]);$.push(nt),At=At.concat(nt)}let at;if(m===0)at=In.triangulateShape(O,I);else{let it=[],mt=[];for(let dt=0;dt<m;dt++){let Nt=dt/m,ft=p*Math.cos(Nt*Math.PI/2),Qt=f*Math.sin(Nt*Math.PI/2)+_;for(let Bt=0,se=O.length;Bt<se;Bt++){let te=q(O[Bt],X[Bt],Qt);Vt(te.x,te.y,-ft),Nt===0&&it.push(te)}for(let Bt=0,se=D;Bt<se;Bt++){let te=I[Bt];nt=$[Bt];let k=[];for(let P=0,Z=te.length;P<Z;P++){let ct=q(te[P],nt[P],Qt);Vt(ct.x,ct.y,-ft),Nt===0&&k.push(ct)}Nt===0&&mt.push(k)}}at=In.triangulateShape(it,mt)}let G=at.length,lt=f+_;for(let it=0;it<V;it++){let mt=d?q(E[it],At[it],lt):E[it];M?(v.copy(w.normals[0]).multiplyScalar(mt.x),T.copy(w.binormals[0]).multiplyScalar(mt.y),S.copy(y[0]).add(v).add(T),Vt(S.x,S.y,S.z)):Vt(mt.x,mt.y,0)}for(let it=1;it<=h;it++)for(let mt=0;mt<V;mt++){let dt=d?q(E[mt],At[mt],lt):E[mt];M?(v.copy(w.normals[it]).multiplyScalar(dt.x),T.copy(w.binormals[it]).multiplyScalar(dt.y),S.copy(y[it]).add(v).add(T),Vt(S.x,S.y,S.z)):Vt(dt.x,dt.y,u/h*it)}for(let it=m-1;it>=0;it--){let mt=it/m,dt=p*Math.cos(mt*Math.PI/2),Nt=f*Math.sin(mt*Math.PI/2)+_;for(let ft=0,Qt=O.length;ft<Qt;ft++){let Bt=q(O[ft],X[ft],Nt);Vt(Bt.x,Bt.y,u+dt)}for(let ft=0,Qt=I.length;ft<Qt;ft++){let Bt=I[ft];nt=$[ft];for(let se=0,te=Bt.length;se<te;se++){let k=q(Bt[se],nt[se],Nt);M?Vt(k.x,k.y+y[h-1].y,y[h-1].x+dt):Vt(k.x,k.y,u+dt)}}}vt(),kt();function vt(){let it=i.length/3;if(d){let mt=0,dt=V*mt;for(let Nt=0;Nt<G;Nt++){let ft=at[Nt];xe(ft[2]+dt,ft[1]+dt,ft[0]+dt)}mt=h+m*2,dt=V*mt;for(let Nt=0;Nt<G;Nt++){let ft=at[Nt];xe(ft[0]+dt,ft[1]+dt,ft[2]+dt)}}else{for(let mt=0;mt<G;mt++){let dt=at[mt];xe(dt[2],dt[1],dt[0])}for(let mt=0;mt<G;mt++){let dt=at[mt];xe(dt[0]+V*h,dt[1]+V*h,dt[2]+V*h)}}n.addGroup(it,i.length/3-it,0)}function kt(){let it=i.length/3,mt=0;wt(O,mt),mt+=O.length;for(let dt=0,Nt=I.length;dt<Nt;dt++){let ft=I[dt];wt(ft,mt),mt+=ft.length}n.addGroup(it,i.length/3-it,1)}function wt(it,mt){let dt=it.length;for(;--dt>=0;){let Nt=dt,ft=dt-1;ft<0&&(ft=it.length-1);for(let Qt=0,Bt=h+m*2;Qt<Bt;Qt++){let se=V*Qt,te=V*(Qt+1),k=mt+Nt+se,P=mt+ft+se,Z=mt+ft+te,ct=mt+Nt+te;Pt(k,P,Z,ct)}}}function Vt(it,mt,dt){l.push(it),l.push(mt),l.push(dt)}function xe(it,mt,dt){ee(it),ee(mt),ee(dt);let Nt=i.length/3,ft=x.generateTopUV(n,i,Nt-3,Nt-2,Nt-1);oe(ft[0]),oe(ft[1]),oe(ft[2])}function Pt(it,mt,dt,Nt){ee(it),ee(mt),ee(Nt),ee(mt),ee(dt),ee(Nt);let ft=i.length/3,Qt=x.generateSideWallUV(n,i,ft-6,ft-3,ft-2,ft-1);oe(Qt[0]),oe(Qt[1]),oe(Qt[3]),oe(Qt[1]),oe(Qt[2]),oe(Qt[3])}function ee(it){i.push(l[it*3+0]),i.push(l[it*3+1]),i.push(l[it*3+2])}function oe(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return dv(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ph[i.type]().fromJSON(i)),new s(n,t.options)}},uv={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new et(r,a),new et(o,l),new et(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],p=t[i*3+1],f=t[i*3+2],_=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new et(a,1-l),new et(c,1-u),new et(d,1-f),new et(_,1-g)]:[new et(o,1-l),new et(h,1-u),new et(p,1-f),new et(m,1-g)]}};bo=class s extends Ei{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},wo=class s extends Yt{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Zt(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new L,d=new et,p=new L,f=new L,_=new L,m=0,g=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,p.x=g*1,p.y=-m,p.z=g*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:m=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,p.x=g*1,p.y=-m,p.z=g*0,f.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(f)}for(let x=0;x<=e;x++){let y=n+x*h*i,M=Math.sin(y),w=Math.cos(y);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*M,u.y=t[T].y,u.z=t[T].x*w,a.push(u.x,u.y,u.z),d.x=x/e,d.y=T/(t.length-1),o.push(d.x,d.y);let v=l[3*T+0]*M,S=l[3*T+1],R=l[3*T+0]*w;c.push(v,S,R)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){let M=y+x*t.length,w=M,T=M+t.length,v=M+t.length+1,S=M+1;r.push(w,T,S),r.push(v,S,T)}this.setIndex(r),this.setAttribute("position",new Lt(a,3)),this.setAttribute("uv",new Lt(o,2)),this.setAttribute("normal",new Lt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},$r=class s extends Ei{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Ci=class s extends Yt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,p=[],f=[],_=[],m=[];for(let g=0;g<h;g++){let x=g*d-a;for(let y=0;y<c;y++){let M=y*u-r;f.push(M,-x,0),_.push(0,0,1),m.push(y/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){let y=x+c*g,M=x+c*(g+1),w=x+1+c*(g+1),T=x+1+c*g;p.push(y,M,T),p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new Lt(f,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},To=class s extends Yt{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/i,p=new L,f=new et;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let g=r+m/n*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/e+1)/2,f.y=(p.y/e+1)/2,h.push(f.x,f.y)}u+=d}for(let _=0;_<i;_++){let m=_*(n+1);for(let g=0;g<n;g++){let x=g+m,y=x,M=x+n+1,w=x+n+2,T=x+1;o.push(y,M,T),o.push(M,w,T)}}this.setIndex(o),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ao=class s extends Yt{constructor(t=new Ji([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Lt(i,3)),this.setAttribute("normal",new Lt(r,3)),this.setAttribute("uv",new Lt(a,2));function c(h){let u=i.length/3,d=h.extractPoints(e),p=d.shape,f=d.holes;In.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let x=f[m];In.isClockWise(x)===!0&&(f[m]=x.reverse())}let _=In.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let x=f[m];p=p.concat(x)}for(let m=0,g=p.length;m<g;m++){let x=p[m];i.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,g=_.length;m<g;m++){let x=_[m],y=x[0]+u,M=x[1]+u,w=x[2]+u;n.push(y,M,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return fv(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let a=e[t.shapes[i]];n.push(a)}return new s(n,t.curveSegments)}};Jr=class s extends Yt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,d=new L,p=[],f=[],_=[],m=[];for(let g=0;g<=n;g++){let x=[],y=g/n,M=a+y*o,w=t*Math.cos(M),T=Math.sqrt(t*t-w*w),v=0;g===0&&a===0?v=.5/e:g===n&&l===Math.PI&&(v=-.5/e);for(let S=0;S<=e;S++){let R=S/e,E=i+R*r;u.x=-T*Math.cos(E),u.y=w,u.z=T*Math.sin(E),f.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+v,1-y),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<e;x++){let y=h[g][x+1],M=h[g][x],w=h[g+1][x],T=h[g+1][x+1];(g!==0||a>0)&&p.push(y,M,T),(g!==n-1||l<Math.PI)&&p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new Lt(f,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Eo=class s extends Ei{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Co=class s extends Yt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new L,p=new L,f=new L;for(let _=0;_<=n;_++){let m=a+_/n*o;for(let g=0;g<=i;g++){let x=g/i*r;p.x=(t+e*Math.cos(m))*Math.cos(x),p.y=(t+e*Math.cos(m))*Math.sin(x),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),d.x=t*Math.cos(x),d.y=t*Math.sin(x),f.subVectors(p,d).normalize(),h.push(f.x,f.y,f.z),u.push(g/i),u.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let g=(i+1)*_+m-1,x=(i+1)*(_-1)+m-1,y=(i+1)*(_-1)+m,M=(i+1)*_+m;l.push(g,x,M),l.push(x,y,M)}this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Ro=class s extends Yt{constructor(t=1,e=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new L,d=new L,p=new L,f=new L,_=new L,m=new L,g=new L;for(let y=0;y<=n;++y){let M=y/n*r*Math.PI*2;x(M,r,a,t,p),x(M+.01,r,a,t,f),m.subVectors(f,p),g.addVectors(f,p),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let w=0;w<=i;++w){let T=w/i*Math.PI*2,v=-e*Math.cos(T),S=e*Math.sin(T);u.x=p.x+(v*g.x+S*_.x),u.y=p.y+(v*g.y+S*_.y),u.z=p.z+(v*g.z+S*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(y/n),h.push(w/i)}}for(let y=1;y<=n;y++)for(let M=1;M<=i;M++){let w=(i+1)*(y-1)+(M-1),T=(i+1)*y+(M-1),v=(i+1)*y+M,S=(i+1)*(y-1)+M;o.push(w,T,S),o.push(T,v,S)}this.setIndex(o),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(h,2));function x(y,M,w,T,v){let S=Math.cos(y),R=Math.sin(y),E=w/M*y,I=Math.cos(E);v.x=T*(2+I)*.5*S,v.y=T*(2+I)*R*.5,v.z=T*Math.sin(E)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Po=class s extends Yt{constructor(t=new qr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new et,h=new L,u=[],d=[],p=[],f=[];_(),this.setIndex(f),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(p,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),x(),g()}function m(y){h=t.getPointAt(y/e,h);let M=a.normals[y],w=a.binormals[y];for(let T=0;T<=i;T++){let v=T/i*Math.PI*2,S=Math.sin(v),R=-Math.cos(v);l.x=R*M.x+S*w.x,l.y=R*M.y+S*w.y,l.z=R*M.z+S*w.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let y=1;y<=e;y++)for(let M=1;M<=i;M++){let w=(i+1)*(y-1)+(M-1),T=(i+1)*y+(M-1),v=(i+1)*y+M,S=(i+1)*(y-1)+M;f.push(w,T,S),f.push(T,v,S)}}function x(){for(let y=0;y<=e;y++)for(let M=0;M<=i;M++)c.x=y/e,c.y=M/i,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new ph[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Io=class extends Yt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new L,r=new L;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,p=u.count;for(let f=d,_=d+p;f<_;f+=3)for(let m=0;m<3;m++){let g=o.getX(f+m),x=o.getX(f+(m+1)%3);i.fromBufferAttribute(a,g),r.fromBufferAttribute(a,x),Sm(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Sm(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Lt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};bm=Object.freeze({__proto__:null,BoxGeometry:Zi,CapsuleGeometry:co,CircleGeometry:ho,ConeGeometry:Vr,CylinderGeometry:Gr,DodecahedronGeometry:uo,EdgesGeometry:fo,ExtrudeGeometry:So,IcosahedronGeometry:bo,LatheGeometry:wo,OctahedronGeometry:$r,PlaneGeometry:Ci,PolyhedronGeometry:Ei,RingGeometry:To,ShapeGeometry:Ao,SphereGeometry:Jr,TetrahedronGeometry:Eo,TorusGeometry:Co,TorusKnotGeometry:Ro,TubeGeometry:Po,WireframeGeometry:Io}),Lo=class extends Oe{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new gt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};hi={clone:Js,merge:an},mv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Be=class extends Oe{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mv,this.fragmentShader=gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Js(t.uniforms),this.uniformsGroups=pv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new gt().setHex(i.value);break;case"v2":this.uniforms[n].value=new et().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new fe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Jt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ki=class extends Be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Un=class extends Oe{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=li,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Do=class extends Un{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return jn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){jn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},No=class extends Oe{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new gt(16777215),this.specular=new gt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=li,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=oa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Uo=class extends Oe{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new gt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=li,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Fo=class extends Oe{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=li,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},Oo=class extends Oe{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=li,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=oa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Kr=class extends Oe{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qr=class extends Oe{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Bo=class extends Oe{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new gt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=li,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}},zo=class extends qe{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};mh=class{static convertArray(t,e){return Hn(t,e)}static isTypedArray(t){return B0(t)}static hasTangents(t){return Sr(t)}static getKeyframeOrder(t){return J0(t)}static sortedArray(t,e,n){return Od(t,e,n)}static flattenJSON(t,e,n,i){K0(t,e,n,i)}static subclip(t,e,n,i,r=30){return _v(t,e,n,i,r)}static makeClipAdditive(t,e=0,n=t,i=30){return xv(t,e,n,i)}},Ri=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ko=class extends Ri{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vi,endingEnd:Vi}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hi:r=t,o=2*e-n;break;case Er:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hi:a=t,l=2*n-e;break;case Er:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-e)/(i-e),_=f*f,m=_*f,g=-d*m+2*d*_-d*f,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*f+1,y=(-1-p)*m+(1.5+p)*_+.5*f,M=p*m-p*_;for(let w=0;w!==o;++w)r[w]=g*a[h+w]+x*a[c+w]+y*a[l+w]+M*a[u+w];return r}},jr=class extends Ri{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Go=class extends Ri{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Vo=class extends Ri{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let f=(n-e)/(i-e),_=1-f;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*f;return r}let d=o*2,p=t-1;for(let f=0;f!==o;++f){let _=a[c+f],m=a[l+f],g=p*d+f*2,x=u[g],y=u[g+1],M=t*d+f*2,w=h[M],T=h[M+1],v=yv(n,e,x,w,i);r[f]=Q0(v,_,y,T,m)}return r}};dn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hn(e,this.TimeBufferType),this.values=Hn(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hn(t.times,Array),values:Hn(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Sr(t.settings)&&(n.settings={inTangents:Hn(t.settings.inTangents,Array),outTangents:Hn(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Go(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Vo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ar:e=this.InterpolantFactoryMethodDiscrete;break;case Qa:e=this.InterpolantFactoryMethodLinear;break;case ka:e=this.InterpolantFactoryMethodSmooth;break;case $c:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Tt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Qa;case this.InterpolantFactoryMethodSmooth:return ka;case this.InterpolantFactoryMethodBezier:return $c}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Sr(this.settings)&&(Tm(this.settings.inTangents,t),Tm(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Sr(this.settings)&&(Am(this.settings.inTangents,t),Am(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Gt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&B0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ka,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let f=0;f!==n;++f){let _=e[u+f];if(_!==e[d+f]||_!==e[p+f]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Sr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=Qa;ni=class extends dn{constructor(t,e,n){super(t,e,n)}};ni.prototype.ValueTypeName="bool";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=Ar;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;ta=class extends dn{constructor(t,e,n,i){super(t,e,n,i)}};ta.prototype.ValueTypeName="color";Bs=class extends dn{constructor(t,e,n,i){super(t,e,n,i)}};Bs.prototype.ValueTypeName="number";Ho=class extends Ri{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Xe.slerpFlat(r,0,a,c-o,a,c,l);return r}},zs=class extends dn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Ho(this.times,this.values,this.getValueSize(),t)}};zs.prototype.ValueTypeName="quaternion";zs.prototype.InterpolantFactoryMethodSmooth=void 0;ii=class extends dn{constructor(t,e,n){super(t,e,n)}};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Ar;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;ea=class extends dn{constructor(t,e,n,i){super(t,e,n,i)}};ea.prototype.ValueTypeName="vector";Qi=class{constructor(t="",e=-1,n=[],i=kl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Bn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Sv(n[a]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=J0(l);l=Od(l,1,h),c=Od(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Bs(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){let c=t[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};Xn={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Em(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Em(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};na=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ff=new na,Je=class{constructor(t){this.manager=t!==void 0?t:Ff,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Je.DEFAULT_MATERIAL_NAME="__DEFAULT";Mi={},Bd=class extends Error{constructor(t,e){super(t),this.response=e}},Fn=class extends Je{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Xn.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Mi[t]!==void 0){Mi[t].push({onLoad:e,onProgress:n,onError:i});return}Mi[t]=[],Mi[t].push({onLoad:e,onProgress:n,onError:i});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Tt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Mi[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0,_=0,m=new ReadableStream({start(g){x();function x(){u.read().then(({done:y,value:M})=>{if(y)g.close();else{_+=M.byteLength;let w=new ProgressEvent("progress",{lengthComputable:f,loaded:_,total:p});for(let T=0,v=h.length;T<v;T++){let S=h[T];S.onProgress&&S.onProgress(w)}g.enqueue(M),x()}},y=>{g.error(y)})}}});return new Response(m)}else throw new Bd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(f=>p.decode(f))}}}).then(c=>{Xn.add(`file:${t}`,c);let h=Mi[t];delete Mi[t];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Mi[t];if(h===void 0)throw this.manager.itemError(t),c;delete Mi[t];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},gh=class extends Je{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new Fn(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):Gt(l),r.manager.itemError(t)}},n,i)}parse(t){let e=[];for(let n=0;n<t.length;n++){let i=Qi.parse(t[n]);e.push(i)}return e}},_h=class extends Je{constructor(t){super(t)}load(t,e,n,i){let r=this,a=[],o=new Us,l=new Fn(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(t[u],function(d){let p=r.parse(d,!0);a[u]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},c+=1,c===6&&(p.mipmapCount===1&&(o.minFilter=we),o.image=a,o.format=p.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let u=0,d=t.length;u<d;++u)h(u);else l.load(t,function(u){let d=r.parse(u,!0);if(d.isCubemap){let p=d.mipmaps.length/d.mipmapCount;for(let f=0;f<p;f++){a[f]={mipmaps:[]};for(let _=0;_<d.mipmapCount;_++)a[f].mipmaps.push(d.mipmaps[f*d.mipmapCount+_]),a[f].format=d.format,a[f].width=d.width,a[f].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=we),o.format=d.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}},gr=new WeakMap,ji=class extends Je{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Xn.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=gr.get(a);u===void 0&&(u=[],gr.set(a,u)),u.push({onLoad:e,onError:i})}return a}let o=Pr("img");function l(){h(),e&&e(this);let u=gr.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}gr.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),Xn.remove(`image:${t}`);let d=gr.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(u)}gr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Xn.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}},xh=class extends Je{constructor(t){super(t)}load(t,e,n,i){let r=new Yi;r.colorSpace=$e;let a=new ji(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}},vh=class extends Je{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new hn,o=new Fn(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):Gt(h);return}r._applyTexData(a,c),e&&e(a,c)},n,i),a}createDataTexture(t){let e=new hn;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:cn,t.wrapT=e.wrapT!==void 0?e.wrapT:cn,t.magFilter=e.magFilter!==void 0?e.magFilter:we,t.minFilter=e.minFilter!==void 0?e.minFilter:we,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=On),e.mipmapCount===1&&(t.minFilter=we),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}},yh=class extends Je{constructor(t){super(t)}load(t,e,n,i){let r=new Le,a=new ji(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},Zn=class extends pe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ks=class extends Zn{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Td=new Jt,Cm=new L,Rm=new L,Gs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ei,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Cm.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cm),Rm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Td.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Td,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Wi||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Td)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},zc=new L,kc=new Xe,Qn=new L,Vs=class extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zc,kc,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,kc,Qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(zc,kc,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,kc,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ki=new L,Pm=new et,Im=new et,Ee=class extends Vs{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,Pm,Im),e.subVectors(Im,Pm)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(As*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},zd=class extends Gs{constructor(){super(new Ee(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Cs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Wo=class extends Zn{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new zd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},kd=class extends Gs{constructor(){super(new Ee(90,1,.5,500)),this.isPointLightShadow=!0}},Xo=class extends Zn{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new kd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Pi=class extends Vs{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gd=class extends Gs{constructor(){super(new Pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hs=class extends Zn{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new Gd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},qo=class extends Zn{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},Yo=class extends Zn{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}},ia=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new L)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*r)),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],1.092548*(n*r)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){let n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*r),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],2*.429043*n*r),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){let n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}},Zo=class extends Zn{constructor(t=new ia,e=1){super(void 0,e),this.isLightProbe=!0,this.type="LightProbe",this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}},Lm={},$o=class s extends Je{constructor(t){super(t),this.textures={}}load(t,e,n,i){let r=this,a=new Fn(r.manager);a.setPriority(r.priority),a.setCache(r.cache),a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):Gt(l),r.manager.itemError(t)}},n,i)}parse(t){let e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return s.createMaterialFromType(t)}static createMaterialFromType(t){let n={ShadowMaterial:Lo,SpriteMaterial:Ur,RawShaderMaterial:Ki,ShaderMaterial:Be,PointsMaterial:Br,MeshPhysicalMaterial:Do,MeshStandardMaterial:Un,MeshPhongMaterial:No,MeshToonMaterial:Uo,MeshNormalMaterial:Fo,MeshLambertMaterial:Oo,MeshDepthMaterial:Kr,MeshDistanceMaterial:Qr,MeshBasicMaterial:Dn,MeshMatcapMaterial:Bo,LineDashedMaterial:zo,LineBasicMaterial:qe,Material:Oe,...Lm}[t],i;return n===void 0?(jn(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),i=new Oe):i=new n,i}static registerMaterial(t,e){Lm[t]=e}},sa=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Jo=class extends Yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}},Ko=class extends Je{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new Fn(r.manager);a.setPriority(r.priority),a.setCache(r.cache),a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):Gt(l),r.manager.itemError(t)}},n,i)}parse(t){let e={},n={};function i(p,f){if(e[f]!==void 0)return e[f];let m=p.interleavedBuffers[f],g=r(p,m.buffer),x=Mr(m.type,g),y=new qi(x,m.stride);return y.uuid=m.uuid,m.usage!==void 0&&y.setUsage(m.usage),e[f]=y,y}function r(p,f){if(n[f]!==void 0)return n[f];let m=p.arrayBuffers[f],g=new Uint32Array(m).buffer;return n[f]=g,g}let a=t.isInstancedBufferGeometry?new Jo:new Yt,o=t.data.index;if(o!==void 0){let p=Mr(o.type,o.array);a.setIndex(new de(p,1))}let l=t.data.attributes;for(let p in l){let f=l[p],_;if(f.isInterleavedBufferAttribute){let m=i(t.data,f.data);_=new Ti(m,f.itemSize,f.offset,f.normalized)}else{let m=Mr(f.type,f.array),g=f.isInstancedBufferAttribute?Tn:de;_=new g(m,f.itemSize,f.normalized)}f.name!==void 0&&(_.name=f.name),f.usage!==void 0&&_.setUsage(f.usage),f.gpuType!==void 0&&(_.gpuType=f.gpuType),a.setAttribute(p,_)}let c=t.data.morphAttributes;if(c)for(let p in c){let f=c[p],_=[];for(let m=0,g=f.length;m<g;m++){let x=f[m],y;if(x.isInterleavedBufferAttribute){let M=i(t.data,x.data);y=new Ti(M,x.itemSize,x.offset,x.normalized)}else{let M=Mr(x.type,x.array);y=new de(M,x.itemSize,x.normalized)}x.name!==void 0&&(y.name=x.name),x.usage!==void 0&&y.setUsage(x.usage),x.gpuType!==void 0&&(y.gpuType=x.gpuType),_.push(y)}a.morphAttributes[p]=_}t.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let p=0,f=u.length;p!==f;++p){let _=u[p];a.addGroup(_.start,_.count,_.materialIndex)}let d=t.data.boundingSphere;return d!==void 0&&(a.boundingSphere=new Pe().fromJSON(d)),t.name&&(a.name=t.name),t.userData&&(a.userData=t.userData),a}},Ad={},Mh=class extends Je{constructor(t){super(t)}load(t,e,n,i){let r=this,a=this.path===""?sa.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;let o=new Fn(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),Gt("ObjectLoader: Can't parse "+t+".",u.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),Gt("ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){let n=this,i=this.path===""?sa.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;let r=new Fn(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let a=await r.loadAsync(t,e),o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}let l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(o)}parse(t,e){let n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),a=this.parseImages(t.images,function(){e!==void 0&&e(c)}),o=this.parseTextures(t.textures,a),l=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,r,l,o,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let u=!1;for(let d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&e(c)}return c}async parseAsync(t){let e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),a=this.parseTextures(t.textures,r),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,i,o,a,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){Ad[t]=e}parseShapes(t){let e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){let r=new Ji().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){let n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,a=t.length;r<a;r++){let o=new so().fromJSON(t[r],i);n[o.uuid]=o}return n}parseGeometries(t,e){let n={};if(t!==void 0){let i=new Ko;for(let r=0,a=t.length;r<a;r++){let o,l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in bm?o=bm[l.type].fromJSON(l,e):l.type in Ad?o=Ad[l.type].fromJSON(l,e):Tt(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(t,e){let n={},i={};if(t!==void 0){let r=new $o;r.setTextures(e);for(let a=0,o=t.length;a<o;a++){let l=t[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){let e={};if(t!==void 0)for(let n=0;n<t.length;n++){let i=t[n],r=Qi.parse(i);e[r.uuid]=r}return e}parseImages(t,e){let n=this,i={},r;function a(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:Mr(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){let l=new na(e);r=new ji(l),r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){let u=t[c],d=u.url;if(Array.isArray(d)){let p=[];for(let f=0,_=d.length;f<_;f++){let m=d[f],g=o(m);g!==null&&(g instanceof HTMLImageElement?p.push(g):p.push(new hn(g.data,g.width,g.height)))}i[u.uuid]=new wn(p)}else{let p=o(u.url);i[u.uuid]=new wn(p)}}}return i}async parseImagesAsync(t){let e=this,n={},i;async function r(a){if(typeof a=="string"){let o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:e.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:Mr(a.type,a.data),width:a.width,height:a.height}:null}if(t!==void 0&&t.length>0){i=new ji(this.manager),i.setPriority(this.priority),i.setCache(this.cache),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=t.length;a<o;a++){let l=t[a],c=l.url;if(Array.isArray(c)){let h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u],f=await r(p);f!==null&&(f instanceof HTMLImageElement?h.push(f):h.push(new hn(f.data,f.width,f.height)))}n[l.uuid]=new wn(h)}else{let h=await r(l.url);n[l.uuid]=new wn(h)}}}return n}parseTextures(t,e){function n(r,a){return typeof r=="number"?r:(Tt("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let i={};if(t!==void 0)for(let r=0,a=t.length;r<a;r++){let o=t[r];o.image===void 0&&Tt('ObjectLoader: No "image" specified for',o.uuid),e[o.image]===void 0&&Tt("ObjectLoader: Undefined image",o.image);let l=e[o.image],c=l.data,h;Array.isArray(c)?(h=new Yi,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new hn:h=new Le,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,bv)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Dm),h.wrapT=n(o.wrap[1],Dm)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,Nm)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,Nm)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.mipmapsAutoUpdate!==void 0&&(h.mipmapsAutoUpdate=o.mipmapsAutoUpdate),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.normalized!==void 0&&(h.normalized=o.normalized),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(t,e,n,i,r){let a;function o(d){return e[d]===void 0&&Tt("ObjectLoader: Undefined geometry",d),e[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){let p=[];for(let f=0,_=d.length;f<_;f++){let m=d[f];n[m]===void 0&&Tt("ObjectLoader: Undefined material",m),p.push(n[m])}return p}return n[d]===void 0&&Tt("ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&Tt("ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(t.type){case"Scene":a=new qn,t.background!==void 0&&(Number.isInteger(t.background)?a.background=new gt(t.background):a.background=c(t.background)),t.environment!==void 0&&(a.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?a.fog=new to(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(a.fog=new Ds(t.fog.color,t.fog.density)),t.fog.name!==""&&(a.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(a.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(a.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&a.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":a=new Ee(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(a.focus=t.focus),t.zoom!==void 0&&(a.zoom=t.zoom),t.filmGauge!==void 0&&(a.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(a.filmOffset=t.filmOffset),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"OrthographicCamera":a=new Pi(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(a.zoom=t.zoom),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"AmbientLight":a=new qo(t.color,t.intensity);break;case"DirectionalLight":a=new Hs(t.color,t.intensity),a.target=t.target||"";break;case"PointLight":a=new Xo(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":a=new Yo(t.color,t.intensity,t.width,t.height);break;case"SpotLight":a=new Wo(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),a.target=t.target||"",t.map!==void 0&&(a.map=c(t.map));break;case"HemisphereLight":a=new ks(t.color,t.groundColor,t.intensity);break;case"LightProbe":let d=new ia().fromArray(t.sh);a=new Zo(d,t.intensity);break;case"SkinnedMesh":h=o(t.geometry),u=l(t.material),a=new io(h,u),t.bindMode!==void 0&&(a.bindMode=t.bindMode),t.bindMatrix!==void 0&&a.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(a.skeleton=t.skeleton);break;case"Mesh":h=o(t.geometry),u=l(t.material),a=new ye(h,u);break;case"InstancedMesh":h=o(t.geometry),u=l(t.material);let p=t.count,f=t.instanceMatrix,_=t.instanceColor;a=new Ns(h,u,p),a.instanceMatrix=new Tn(new Float32Array(f.array),16),_!==void 0&&(a.instanceColor=new Tn(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":h=o(t.geometry),u=l(t.material),a=new ro(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=t.perObjectFrustumCulled,a.sortObjects=t.sortObjects,a._drawRanges=t.drawRanges,a._reservedRanges=t.reservedRanges,a._geometryInfo=t.geometryInfo.map(m=>{let g=null,x=null;return m.boundingBox!==void 0&&(g=new Ne().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(x=new Pe().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:x}}),a._instanceInfo=t.instanceInfo,a._availableInstanceIds=t.availableInstanceIds,a._availableGeometryIds=t.availableGeometryIds,a._nextIndexStart=t.nextIndexStart,a._nextVertexStart=t.nextVertexStart,a._geometryCount=t.geometryCount,a._maxInstanceCount=t.maxInstanceCount,a._maxVertexCount=t.maxVertexCount,a._maxIndexCount=t.maxIndexCount,a._geometryInitialized=t.geometryInitialized,a._matricesTexture=c(t.matricesTexture.uuid),a._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(a._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(a.boundingSphere=new Pe().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(a.boundingBox=new Ne().fromJSON(t.boundingBox));break;case"LOD":a=new no;break;case"Line":a=new Yn(o(t.geometry),l(t.material));break;case"LineLoop":a=new ao(o(t.geometry),l(t.material));break;case"LineSegments":a=new An(o(t.geometry),l(t.material));break;case"PointCloud":case"Points":a=new oo(o(t.geometry),l(t.material));break;case"Sprite":a=new eo(l(t.material)),t.center!==void 0&&a.center.fromArray(t.center);break;case"Group":a=new bi;break;case"Bone":a=new Fr;break;default:a=new pe}if(a.uuid=t.uuid,t.name!==void 0&&(a.name=t.name),t.pivot!==void 0&&(a.pivot=new L().fromArray(t.pivot)),t.matrix!==void 0?(a.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=t.matrixAutoUpdate),a.matrixAutoUpdate&&(a.matrix.decompose(a.position,a.quaternion,a.scale),a.pivot!==null&&a.position.copy(a.pivot).applyMatrix4(a.matrix).sub(a.pivot))):(t.position!==void 0&&a.position.fromArray(t.position),t.rotation!==void 0&&a.rotation.fromArray(t.rotation),t.quaternion!==void 0&&a.quaternion.fromArray(t.quaternion),t.scale!==void 0&&a.scale.fromArray(t.scale)),t.up!==void 0&&a.up.fromArray(t.up),t.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(a.castShadow=t.castShadow),t.receiveShadow!==void 0&&(a.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(a.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(a.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(a.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(a.shadow.radius=t.shadow.radius),t.shadow.blurSamples!==void 0&&(a.shadow.blurSamples=t.shadow.blurSamples),t.shadow.focus!==void 0&&(a.shadow.focus=t.shadow.focus),t.shadow.aspect!==void 0&&(a.shadow.aspect=t.shadow.aspect),t.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.mapType!==void 0&&(a.shadow.mapType=t.shadow.mapType),t.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(a.visible=t.visible),t.frustumCulled!==void 0&&(a.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(a.renderOrder=t.renderOrder),t.static!==void 0&&(a.static=t.static),t.userData!==void 0&&(a.userData=t.userData),t.layers!==void 0&&(a.layers.mask=t.layers),t.children!==void 0){let d=t.children;for(let p=0;p<d.length;p++)a.add(this.parseObject(d[p],e,n,i,r))}if(t.animations!==void 0){let d=t.animations;for(let p=0;p<d.length;p++){let f=d[p];a.animations.push(r[f])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(a.autoUpdate=t.autoUpdate);let d=t.levels;for(let p=0;p<d.length;p++){let f=d[p],_=a.getObjectByProperty("uuid",f.object);_!==void 0&&a.addLevel(_,f.distance,f.hysteresis)}}return a}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=e[n.skeleton];i===void 0?Tt("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){let n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new pe}})}},bv={UVMapping:il,CubeReflectionMapping:ai,CubeRefractionMapping:os,EquirectangularReflectionMapping:ca,EquirectangularRefractionMapping:ha},Dm={RepeatWrapping:wr,ClampToEdgeWrapping:cn,MirroredRepeatWrapping:Tr},Nm={NearestFilter:Ie,NearestMipmapNearestFilter:cu,NearestMipmapLinearFilter:Zs,LinearFilter:we,LinearMipmapNearestFilter:ua,LinearMipmapLinearFilter:On},Ed=new WeakMap,Sh=class extends Je{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Tt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Tt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Xn.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{Ed.has(a)===!0?(i&&i(Ed.get(a)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Xn.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Ed.set(l,c),Xn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Xn.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},ra=class{static getContext(){return Gc===void 0&&(Gc=new(window.AudioContext||window.webkitAudioContext)),Gc}static setContext(t){Gc=t}},bh=class extends Je{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new Fn(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{let c=l.slice(0),h=ra.getContext(),u=t+"#decode";r.manager.itemStart(u),h.decodeAudioData(c,function(d){e(d),r.manager.itemEnd(u)}).catch(function(d){o(d),r.manager.itemEnd(u)})}catch(c){o(c)}},n,i);function o(l){i?i(l):Gt(l),r.manager.itemError(t)}}},Um=new Jt,Fm=new Jt,vs=new Jt,wh=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ee,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ee,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,vs.copy(t.projectionMatrix);let i=e.eyeSep/2,r=i*e.near/e.focus,a=e.near*Math.tan(As*e.fov*.5)/e.zoom,o,l;Fm.elements[12]=-i,Um.elements[12]=i,o=-a*e.aspect+r,l=a*e.aspect+r,vs.elements[0]=2*e.near/(l-o),vs.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(vs),o=-a*e.aspect-r,l=a*e.aspect-r,vs.elements[0]=2*e.near/(l-o),vs.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(vs)}this.cameraL.matrix.copy(t.matrixWorld).multiply(Fm),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(Um),this.cameraR.matrixWorldNeedsUpdate=!0}},_r=-90,xr=1,Ws=class extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ee(_r,xr,t,e);i.layers=this.layers,this.add(i);let r=new Ee(_r,xr,t,e);r.layers=this.layers,this.add(r);let a=new Ee(_r,xr,t,e);a.layers=this.layers,this.add(a);let o=new Ee(_r,xr,t,e);o.layers=this.layers,this.add(o);let l=new Ee(_r,xr,t,e);l.layers=this.layers,this.add(l);let c=new Ee(_r,xr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wi)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Qo=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Xs=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=wv.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};ys=new L,Cd=new Xe,Tv=new L,Ms=new L,Ss=new L,Th=class extends pe{constructor(){super(),this.type="AudioListener",this.context=ra.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Xs}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(ys,Cd,Tv),Ms.set(0,0,-1).applyQuaternion(Cd),Ss.set(0,1,0).applyQuaternion(Cd),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(ys.x,n),e.positionY.linearRampToValueAtTime(ys.y,n),e.positionZ.linearRampToValueAtTime(ys.z,n),e.forwardX.linearRampToValueAtTime(Ms.x,n),e.forwardY.linearRampToValueAtTime(Ms.y,n),e.forwardZ.linearRampToValueAtTime(Ms.z,n),e.upX.linearRampToValueAtTime(Ss.x,n),e.upY.linearRampToValueAtTime(Ss.y,n),e.upZ.linearRampToValueAtTime(Ss.z,n)}else e.setPosition(ys.x,ys.y,ys.z),e.setOrientation(Ms.x,Ms.y,Ms.z,Ss.x,Ss.y,Ss.z)}},jo=class extends pe{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Tt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Tt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Tt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}},bs=new L,Om=new Xe,Av=new L,ws=new L,Ah=class extends jo{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(bs,Om,Av),ws.set(0,0,1).applyQuaternion(Om);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(bs.x,n),e.positionY.linearRampToValueAtTime(bs.y,n),e.positionZ.linearRampToValueAtTime(bs.z,n),e.orientationX.linearRampToValueAtTime(ws.x,n),e.orientationY.linearRampToValueAtTime(ws.y,n),e.orientationZ.linearRampToValueAtTime(ws.z,n)}else e.setPosition(bs.x,bs.y,bs.z),e.setOrientation(ws.x,ws.y,ws.z)}},Eh=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},tl=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;let o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){Xe.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let a=this._workIndex*r;Xe.multiplyQuaternionsFlat(t,a,t,e,t,n),Xe.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){let o=e+a;t[o]=t[o]+t[n+a]*i}}},Of="\\[\\]\\.:\\/",Ev=new RegExp("["+Of+"]","g"),Bf="[^"+Of+"]",Cv="[^"+Of.replace("\\.","")+"]",Rv=/((?:WC+[\/:])*)/.source.replace("WC",Bf),Pv=/(WCOD+)?/.source.replace("WCOD",Cv),Iv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bf),Lv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bf),Dv=new RegExp("^"+Rv+Pv+Iv+Lv+"$"),Nv=["material","materials","bones","map"],Vd=class{constructor(t,e,n){let i=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ev,"")}static parseTrackName(t){let e=Dv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Nv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=Vd;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Ch=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Bn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length,o,l=t.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],p=d.uuid,f=e[p];if(f===void 0){f=l++,e[p]=f,t.push(d);for(let _=0,m=a;_!==m;++_)r[_].push(new _e(d,n[_],i[_]))}else if(f<c){o=t[f];let _=--c,m=t[_];e[m.uuid]=f,t[f]=m,e[p]=_,t[_]=d;for(let g=0,x=a;g!==x;++g){let y=r[g],M=y[_],w=y[f];y[f]=M,w===void 0&&(w=new _e(d,n[g],i[g])),y[_]=w}}else t[f]!==o&&Gt("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){let u=r++,d=t[u];e[d.uuid]=h,t[h]=d,e[c]=u,t[u]=l;for(let p=0,f=i;p!==f;++p){let _=n[p],m=_[u],g=_[h];_[h]=m,_[u]=g}}}this.nCachedObjects_=r}uncache(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,a=t.length;for(let o=0,l=arguments.length;o!==l;++o){let c=arguments[o],h=c.uuid,u=e[h];if(u!==void 0)if(delete e[h],u<r){let d=--r,p=t[d],f=--a,_=t[f];u!==d&&(e[p.uuid]=u),t[u]=p,d!==f&&(e[_.uuid]=d),t[d]=_,t.pop();for(let m=0,g=i;m!==g;++m){let x=n[m],y=x[d],M=x[f];x[u]=y,x[d]=M,x.pop()}}else{let d=--a,p=t[d];u!==d&&(e[p.uuid]=u),t[u]=p,t.pop();for(let f=0,_=i;f!==_;++f){let m=n[f];m[u]=m[d],m.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[t]=i,a.push(t),o.push(e),r.push(u);for(let d=h,p=l.length;d!==p;++d){let f=l[d];u[d]=new _e(f,t,e)}return u}unsubscribe_(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=i[o];e[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}},el=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,a=r.length,o=new Array(a),l={endingStart:Vi,endingEnd:Vi};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=_f,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);let a=this._updateTime(e),o=this._updateWeight(t);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case gu:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case kl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,a=n===xf;if(t===0)return r===-1?i:a&&(r&1)===1?e-i:i;if(n===gf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){let o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=Hi,i.endingEnd=Hi):(t?i.endingStart=this.zeroSlopeAtStart?Hi:Vi:i.endingStart=Er,e?i.endingEnd=this.zeroSlopeAtEnd?Hi:Vi:i.endingEnd=Er)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}},Uv=new Float32Array(1),Rh=class extends yn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=i[u],p=d.name,f=h[p];if(f!==void 0)++f.referenceCount,a[u]=f;else{if(f=a[u],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,p));continue}let _=e&&e._propertyBindings[u].binding.parsedPath;f=new tl(_e.create(n,p,_),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,p),a[u]=f}o[u].resultBuffer=f.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{let o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;let u=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new jr(new Float32Array(2),new Float32Array(2),1,Uv),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,a=typeof t=="string"?Qi.findByName(i,t):t,o=a!==null?a.uuid:t,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=kl),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new el(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?Qi.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Ph=class extends Lr{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n;for(let r=0;r<this.textures.length;r++){let a=new Ps(null,t,e,n);a.isRenderTargetTexture=!0,a.renderTarget=this,this.textures[r]=a}this._setTextureOptions(i)}},Ih=class s{constructor(t){this.value=t}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},Fv=0,Lh=class extends yn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Fv++}),this.name="",this.usage=Gl,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){let r=e[n];Array.isArray(r)?this.uniforms.push(r.map(a=>a.clone())):this.uniforms.push(r.clone())}return this}clone(){return new this.constructor().copy(this)}},Dh=class extends qi{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},Nh=class{constructor(t,e,n,i,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=a,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},Bm=new Jt,Uh=class{constructor(t,e,n=0,i=1/0){this.ray=new Ai(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Gt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bm.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bm),this}intersectObject(t,e=!0,n=[]){return Hd(t,this,n,e),n.sort(zm),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Hd(t[i],this,n,e);return n.sort(zm),n}};Fh=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Tt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},Oh=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Bh=class{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}},Hf=class Hf{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Hf.prototype.isMatrix2=!0;zh=Hf,km=new et,nl=class{constructor(t=new et(1/0,1/0),e=new et(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=km.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,km).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Gm=new L,Vc=new L,vr=new L,yr=new L,Rd=new L,Ov=new L,Bv=new L,kh=class{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Gm.subVectors(t,this.start),Vc.subVectors(this.end,this.start);let n=Vc.dot(Vc);if(n===0)return 0;let r=Vc.dot(Gm)/n;return e&&(r=Zt(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=Ov,n=Bv){let i=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;vr.subVectors(c,o),yr.subVectors(h,l),Rd.subVectors(o,l);let u=vr.dot(vr),d=yr.dot(yr),p=yr.dot(Rd);if(u<=i&&d<=i)return e.copy(o),n.copy(l),e.distanceToSquared(n);if(u<=i)r=0,a=p/d,a=Zt(a,0,1);else{let f=vr.dot(Rd);if(d<=i)a=0,r=Zt(-f/u,0,1);else{let _=vr.dot(yr),m=u*d-_*_;m!==0?r=Zt((_*p-f*d)/m,0,1):r=0,a=(_*r+p)/d,a<0?(a=0,r=Zt(-f/u,0,1)):a>1&&(a=1,r=Zt((_-f)/u,0,1))}}return e.copy(o).addScaledVector(vr,r),n.copy(l).addScaledVector(yr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Vm=new L,Gh=class extends pe{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let n=new Yt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){let c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Lt(i,3));let r=new qe({fog:!1,toneMapped:!1});this.cone=new An(n,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Vm.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Vm),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Gi=new L,Hc=new Jt,Pd=new Jt,Vh=class extends An{constructor(t){let e=j0(t),n=new Yt,i=[],r=[];for(let c=0;c<e.length;c++){let h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Lt(i,3)),n.setAttribute("color",new Lt(r,3));let a=new qe({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;let o=new gt(255),l=new gt(65280);this.setColors(o,l)}updateMatrixWorld(t){let e=this.bones,n=this.geometry,i=n.getAttribute("position");Pd.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<e.length;r++){let o=e[r];o.parent&&o.parent.isBone&&(Hc.multiplyMatrices(Pd,o.matrixWorld),Gi.setFromMatrixPosition(Hc),i.setXYZ(a,Gi.x,Gi.y,Gi.z),Hc.multiplyMatrices(Pd,o.parent.matrixWorld),Gi.setFromMatrixPosition(Hc),i.setXYZ(a+1,Gi.x,Gi.y,Gi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){let i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};Hh=class extends ye{constructor(t,e,n){let i=new Jr(e,4,2),r=new Dn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},zv=new L,Hm=new gt,Wm=new gt,Wh=class extends pe{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new $r(e);i.rotateY(Math.PI*.5),this.material=new Dn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new de(a,3)),this.add(new ye(i,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");Hm.copy(this.light.color),Wm.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){let r=n<i/2?Hm:Wm;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(zv.setFromMatrixPosition(this.light.matrixWorld).negate())}},Xh=class extends An{constructor(t=10,e=10,n=4473924,i=8947848){n=new gt(n),i=new gt(i);let r=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,p=0,f=-o;d<=e;d++,f+=a){l.push(-o,0,f,o,0,f),l.push(f,0,-o,f,0,o);let _=d===r?n:i;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}let h=new Yt;h.setAttribute("position",new Lt(l,3)),h.setAttribute("color",new Lt(c,3));let u=new qe({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},qh=class extends An{constructor(t=10,e=16,n=8,i=64,r=4473924,a=8947848){r=new gt(r),a=new gt(a);let o=[],l=[];if(e>1)for(let u=0;u<e;u++){let d=u/e*(Math.PI*2),p=Math.sin(d)*t,f=Math.cos(d)*t;o.push(0,0,0),o.push(p,0,f);let _=u&1?r:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){let d=u&1?r:a,p=t-t/n*u;for(let f=0;f<i;f++){let _=f/i*(Math.PI*2),m=Math.sin(_)*p,g=Math.cos(_)*p;o.push(m,0,g),l.push(d.r,d.g,d.b),_=(f+1)/i*(Math.PI*2),m=Math.sin(_)*p,g=Math.cos(_)*p,o.push(m,0,g),l.push(d.r,d.g,d.b)}}let c=new Yt;c.setAttribute("position",new Lt(o,3)),c.setAttribute("color",new Lt(l,3));let h=new qe({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Xm=new L,Wc=new L,qm=new L,Yh=class extends pe{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Yt;i.setAttribute("position",new Lt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let r=new qe({fog:!1,toneMapped:!1});this.lightPlane=new Yn(i,r),this.add(this.lightPlane),i=new Yt,i.setAttribute("position",new Lt([0,0,0,0,0,1],3)),this.targetLine=new Yn(i,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Xm.setFromMatrixPosition(this.light.matrixWorld),Wc.setFromMatrixPosition(this.light.target.matrixWorld),qm.subVectors(Wc,Xm),this.lightPlane.lookAt(Wc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Wc),this.targetLine.scale.z=qm.length()}},Xc=new L,Re=new Vs,Zh=class extends An{constructor(t){let e=new Yt,n=new qe({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(f,_){l(f),l(_)}function l(f){i.push(0,0,0),r.push(0,0,0),a[f]===void 0&&(a[f]=[]),a[f].push(i.length/3-1)}e.setAttribute("position",new Lt(i,3)),e.setAttribute("color",new Lt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new gt(16755200),h=new gt(16711680),u=new gt(43775),d=new gt(16777215),p=new gt(3355443);this.setColors(c,h,u,d,p)}setColors(t,e,n,i,r){let o=this.geometry.getAttribute("color");return o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){let t=this.geometry,e=this.pointMap,n=1,i=1,r,a;if(Re.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===vn)r=-1,a=1;else if(this.camera.coordinateSystem===Wi)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);De("c",e,t,Re,0,0,r),De("t",e,t,Re,0,0,a),De("n1",e,t,Re,-n,-i,r),De("n2",e,t,Re,n,-i,r),De("n3",e,t,Re,-n,i,r),De("n4",e,t,Re,n,i,r),De("f1",e,t,Re,-n,-i,a),De("f2",e,t,Re,n,-i,a),De("f3",e,t,Re,-n,i,a),De("f4",e,t,Re,n,i,a),De("u1",e,t,Re,n*.7,i*1.1,r),De("u2",e,t,Re,-n*.7,i*1.1,r),De("u3",e,t,Re,0,i*2,r),De("cf1",e,t,Re,-n,0,a),De("cf2",e,t,Re,n,0,a),De("cf3",e,t,Re,0,-i,a),De("cf4",e,t,Re,0,i,a),De("cn1",e,t,Re,-n,0,r),De("cn2",e,t,Re,n,0,r),De("cn3",e,t,Re,0,-i,r),De("cn4",e,t,Re,0,i,r),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};qc=new Ne,$h=class extends An{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Yt;r.setIndex(new de(n,1)),r.setAttribute("position",new de(i,3)),super(r,new qe({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&qc.setFromObject(this.object),qc.isEmpty())return;let t=qc.min,e=qc.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Jh=class extends An{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Yt;r.setIndex(new de(n,1)),r.setAttribute("position",new Lt(i,3)),super(r,new qe({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Kh=class extends Yn{constructor(t,e=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Yt;a.setAttribute("position",new Lt(r,3)),a.computeBoundingSphere(),super(a,new qe({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Yt;l.setAttribute("position",new Lt(o,3)),l.computeBoundingSphere(),this.add(new ye(l,new Dn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Ym=new L,Qh=class extends pe{constructor(t=new L(0,0,1),e=new L(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Yc===void 0&&(Yc=new Yt,Yc.setAttribute("position",new Lt([0,0,0,0,1,0],3)),Id=new Vr(.5,1,5,1),Id.translate(0,-.5,0)),this.position.copy(e),this.line=new Yn(Yc,new qe({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ye(Id,new Dn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Ym.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Ym,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},jh=class extends An{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Yt;i.setAttribute("position",new Lt(e,3)),i.setAttribute("color",new Lt(n,3));let r=new qe({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){let i=new gt,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},tu=class{constructor(){this.type="ShapePath",this.color=new gt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new $i,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,a){return this.currentPath.bezierCurveTo(t,e,n,i,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1,u=c.length;for(let d=0,p=u-1;d<u;p=d++){let f=c[d],_=c[p];f.y>l.y!=_.y>l.y&&l.x<(_.x-f.x)*(l.y-f.y)/(_.y-f.y)+f.x&&(h=!h)}return h}function e(l,c){let h=c.getCenter(new et);if(t(h,l))return h;let u=h.y,d=[],p=l.length;for(let f=0;f<p;f++){let _=l[f],m=l[(f+1)%p];if(_.y>u!=m.y>u){let g=_.x+(u-_.y)*(m.x-_.x)/(m.y-_.y);d.push(g)}}return d.length>1&&(d.sort((f,_)=>f-_),h.x=(d[0]+d[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Tt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=In.area(c);if(h===0)continue;let u=new nl;for(let d=0;d<c.length;d++)u.expandByPoint(c[d]);r.push({subPath:l,points:c,boundingBox:u,interiorPoint:e(c,u),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let u=l-1;u>=0;u--){let d=r[u];if(d.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,d.points)){c.container=d.exclude?d.container:d,h=d.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new Ji;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let h=new $i;h.curves=l.subPath.curves,c.holes.push(h)}return a}},eu=class extends yn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};nu=class{static contain(t,e){return kv(t,e)}static cover(t,e){return Gv(t,e)}static fill(t){return Vv(t)}static getByteLength(t,e,n,i){return Su(t,e,n,i)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});var me={};Dp(me,{ACESFilmicToneMapping:()=>ri,AddEquation:()=>es,AddOperation:()=>pf,AdditiveAnimationBlendMode:()=>gu,AdditiveBlending:()=>aa,AgXToneMapping:()=>rs,AlphaFormat:()=>pu,AlwaysCompare:()=>vu,AlwaysDepth:()=>qa,AlwaysStencilFunc:()=>wf,AmbientLight:()=>qo,AnimationAction:()=>el,AnimationClip:()=>Qi,AnimationLoader:()=>gh,AnimationMixer:()=>Rh,AnimationObjectGroup:()=>Ch,AnimationUtils:()=>mh,ArcCurve:()=>po,ArrayCamera:()=>Qo,ArrowHelper:()=>Qh,AttachedBindMode:()=>Zc,Audio:()=>jo,AudioAnalyser:()=>Eh,AudioContext:()=>ra,AudioListener:()=>Th,AudioLoader:()=>bh,AxesHelper:()=>jh,BackSide:()=>rn,BasicDepthPacking:()=>Sf,BasicShadowMap:()=>Km,BatchedMesh:()=>ro,BezierInterpolant:()=>Vo,Bone:()=>Fr,BooleanKeyframeTrack:()=>ni,Box2:()=>nl,Box3:()=>Ne,Box3Helper:()=>Jh,BoxGeometry:()=>Zi,BoxHelper:()=>$h,BufferAttribute:()=>de,BufferGeometry:()=>Yt,BufferGeometryLoader:()=>Ko,ByteType:()=>hu,Cache:()=>Xn,Camera:()=>Vs,CameraHelper:()=>Zh,CanvasTexture:()=>dh,CapsuleGeometry:()=>co,CatmullRomCurve3:()=>mo,CineonToneMapping:()=>ss,CircleGeometry:()=>ho,ClampToEdgeWrapping:()=>cn,Clock:()=>Fh,Color:()=>gt,ColorKeyframeTrack:()=>ta,ColorManagement:()=>ae,Compatibility:()=>F0,CompressedArrayTexture:()=>hh,CompressedCubeTexture:()=>uh,CompressedTexture:()=>Us,CompressedTextureLoader:()=>_h,ConeGeometry:()=>Vr,ConstantAlphaFactor:()=>uf,ConstantColorFactor:()=>cf,Controls:()=>eu,CubeCamera:()=>Ws,CubeDepthTexture:()=>zr,CubeReflectionMapping:()=>ai,CubeRefractionMapping:()=>os,CubeTexture:()=>Yi,CubeTextureLoader:()=>xh,CubicBezierCurve:()=>Hr,CubicBezierCurve3:()=>go,CubicInterpolant:()=>ko,CullFaceBack:()=>su,CullFaceFront:()=>qd,CullFaceFrontBack:()=>Jm,CullFaceNone:()=>Xd,Curve:()=>Mn,CurvePath:()=>xo,CustomBlending:()=>Zd,CustomToneMapping:()=>la,CylinderGeometry:()=>Gr,Cylindrical:()=>Bh,Data3DTexture:()=>Ps,DataArrayTexture:()=>Rs,DataTexture:()=>hn,DataTextureLoader:()=>vh,DataUtils:()=>jc,DecrementStencilOp:()=>f0,DecrementWrapStencilOp:()=>m0,DefaultLoadingManager:()=>Ff,DepthFormat:()=>ti,DepthStencilFormat:()=>oi,DepthTexture:()=>Nn,DetachedBindMode:()=>mf,DirectionalLight:()=>Hs,DirectionalLightHelper:()=>Yh,DiscreteInterpolant:()=>Go,DodecahedronGeometry:()=>uo,DoubleSide:()=>$n,DstAlphaFactor:()=>sf,DstColorFactor:()=>af,DynamicCopyUsage:()=>P0,DynamicDrawUsage:()=>w0,DynamicReadUsage:()=>E0,EdgesGeometry:()=>fo,EllipseCurve:()=>Fs,EqualCompare:()=>Ef,EqualDepth:()=>Za,EqualStencilFunc:()=>v0,EquirectangularReflectionMapping:()=>ca,EquirectangularRefractionMapping:()=>ha,Euler:()=>Ln,EventDispatcher:()=>yn,ExternalTexture:()=>kr,ExtrudeGeometry:()=>So,FileLoader:()=>Fn,Float16BufferAttribute:()=>rh,Float32BufferAttribute:()=>Lt,FloatType:()=>sn,Fog:()=>to,FogExp2:()=>Ds,FramebufferTexture:()=>ch,FrontSide:()=>Ii,Frustum:()=>ei,FrustumArray:()=>Or,GLBufferAttribute:()=>Nh,GLSL1:()=>L0,GLSL3:()=>yu,GreaterCompare:()=>Cf,GreaterDepth:()=>Ja,GreaterEqualCompare:()=>xu,GreaterEqualDepth:()=>$a,GreaterEqualStencilFunc:()=>b0,GreaterStencilFunc:()=>M0,GridHelper:()=>Xh,Group:()=>bi,HTMLTexture:()=>fh,HalfFloatType:()=>ze,HemisphereLight:()=>ks,HemisphereLightHelper:()=>Wh,IcosahedronGeometry:()=>bo,ImageBitmapLoader:()=>Sh,ImageLoader:()=>ji,ImageUtils:()=>ja,IncrementStencilOp:()=>d0,IncrementWrapStencilOp:()=>p0,InstancedBufferAttribute:()=>Tn,InstancedBufferGeometry:()=>Jo,InstancedInterleavedBuffer:()=>Dh,InstancedMesh:()=>Ns,Int16BufferAttribute:()=>ih,Int32BufferAttribute:()=>sh,Int8BufferAttribute:()=>th,IntType:()=>sl,InterleavedBuffer:()=>qi,InterleavedBufferAttribute:()=>Ti,Interpolant:()=>Ri,InterpolateBezier:()=>$c,InterpolateDiscrete:()=>Ar,InterpolateLinear:()=>Qa,InterpolateSmooth:()=>ka,InterpolationSamplingMode:()=>U0,InterpolationSamplingType:()=>N0,InvertStencilOp:()=>g0,KeepStencilOp:()=>Ga,KeyframeTrack:()=>dn,LOD:()=>no,LatheGeometry:()=>wo,Layers:()=>Is,LessCompare:()=>Af,LessDepth:()=>Ya,LessEqualCompare:()=>_u,LessEqualDepth:()=>Es,LessEqualStencilFunc:()=>y0,LessStencilFunc:()=>x0,Light:()=>Zn,LightProbe:()=>Zo,LightShadow:()=>Gs,Line:()=>Yn,Line3:()=>kh,LineBasicMaterial:()=>qe,LineCurve:()=>Wr,LineCurve3:()=>_o,LineDashedMaterial:()=>zo,LineLoop:()=>ao,LineSegments:()=>An,LinearFilter:()=>we,LinearInterpolant:()=>jr,LinearMipMapLinearFilter:()=>n0,LinearMipMapNearestFilter:()=>e0,LinearMipmapLinearFilter:()=>On,LinearMipmapNearestFilter:()=>ua,LinearSRGBColorSpace:()=>Cr,LinearToneMapping:()=>ns,LinearTransfer:()=>Rr,Loader:()=>Je,LoaderUtils:()=>sa,LoadingManager:()=>na,LoopOnce:()=>gf,LoopPingPong:()=>xf,LoopRepeat:()=>_f,MOUSE:()=>Zm,Material:()=>Oe,MaterialBlending:()=>Qm,MaterialLoader:()=>$o,MathUtils:()=>Df,Matrix2:()=>zh,Matrix3:()=>Kt,Matrix4:()=>Jt,MaxEquation:()=>Qd,Mesh:()=>ye,MeshBasicMaterial:()=>Dn,MeshDepthMaterial:()=>Kr,MeshDistanceMaterial:()=>Qr,MeshLambertMaterial:()=>Oo,MeshMatcapMaterial:()=>Bo,MeshNormalMaterial:()=>Fo,MeshPhongMaterial:()=>No,MeshPhysicalMaterial:()=>Do,MeshStandardMaterial:()=>Un,MeshToonMaterial:()=>Uo,MinEquation:()=>Kd,MirroredRepeatWrapping:()=>Tr,MixOperation:()=>ff,MultiplyBlending:()=>au,MultiplyOperation:()=>oa,NearestFilter:()=>Ie,NearestMipMapLinearFilter:()=>t0,NearestMipMapNearestFilter:()=>jm,NearestMipmapLinearFilter:()=>Zs,NearestMipmapNearestFilter:()=>cu,NeutralToneMapping:()=>as,NeverCompare:()=>Tf,NeverDepth:()=>Xa,NeverStencilFunc:()=>_0,NoBlending:()=>si,NoColorSpace:()=>ci,NoNormalPacking:()=>o0,NoToneMapping:()=>En,NormalAnimationBlendMode:()=>kl,NormalBlending:()=>Ys,NormalGAPacking:()=>c0,NormalRGPacking:()=>l0,NotEqualCompare:()=>Rf,NotEqualDepth:()=>Ka,NotEqualStencilFunc:()=>S0,NumberKeyframeTrack:()=>Bs,Object3D:()=>pe,ObjectLoader:()=>Mh,ObjectSpaceNormalMap:()=>bf,OctahedronGeometry:()=>$r,OneFactor:()=>tf,OneMinusConstantAlphaFactor:()=>df,OneMinusConstantColorFactor:()=>hf,OneMinusDstAlphaFactor:()=>rf,OneMinusDstColorFactor:()=>of,OneMinusSrcAlphaFactor:()=>lu,OneMinusSrcColorFactor:()=>nf,OrthographicCamera:()=>Pi,PCFShadowMap:()=>ts,PCFSoftShadowMap:()=>Yd,PMREMGenerator:()=>Ks,Path:()=>$i,PerspectiveCamera:()=>Ee,Plane:()=>Pn,PlaneGeometry:()=>Ci,PlaneHelper:()=>Kh,PointLight:()=>Xo,PointLightHelper:()=>Hh,Points:()=>oo,PointsMaterial:()=>Br,PolarGridHelper:()=>qh,PolyhedronGeometry:()=>Ei,PositionalAudio:()=>Ah,PropertyBinding:()=>_e,PropertyMixer:()=>tl,QuadraticBezierCurve:()=>Xr,QuadraticBezierCurve3:()=>qr,Quaternion:()=>Xe,QuaternionKeyframeTrack:()=>zs,QuaternionLinearInterpolant:()=>Ho,R11_EAC_Format:()=>_l,RED_GREEN_RGTC2_Format:()=>xa,RED_RGTC1_Format:()=>Ol,REVISION:()=>Wd,RG11_EAC_Format:()=>_a,RGBADepthPacking:()=>s0,RGBAFormat:()=>un,RGBAIntegerFormat:()=>cl,RGBA_ASTC_10x10_Format:()=>Il,RGBA_ASTC_10x5_Format:()=>Cl,RGBA_ASTC_10x6_Format:()=>Rl,RGBA_ASTC_10x8_Format:()=>Pl,RGBA_ASTC_12x10_Format:()=>Ll,RGBA_ASTC_12x12_Format:()=>Dl,RGBA_ASTC_4x4_Format:()=>yl,RGBA_ASTC_5x4_Format:()=>Ml,RGBA_ASTC_5x5_Format:()=>Sl,RGBA_ASTC_6x5_Format:()=>bl,RGBA_ASTC_6x6_Format:()=>wl,RGBA_ASTC_8x5_Format:()=>Tl,RGBA_ASTC_8x6_Format:()=>Al,RGBA_ASTC_8x8_Format:()=>El,RGBA_BPTC_Format:()=>Nl,RGBA_ETC2_EAC_Format:()=>gl,RGBA_PVRTC_2BPPV1_Format:()=>fl,RGBA_PVRTC_4BPPV1_Format:()=>dl,RGBA_S3TC_DXT1_Format:()=>pa,RGBA_S3TC_DXT3_Format:()=>ma,RGBA_S3TC_DXT5_Format:()=>ga,RGBDepthPacking:()=>r0,RGBFormat:()=>mu,RGBIntegerFormat:()=>i0,RGB_BPTC_SIGNED_Format:()=>Ul,RGB_BPTC_UNSIGNED_Format:()=>Fl,RGB_ETC1_Format:()=>pl,RGB_ETC2_Format:()=>ml,RGB_PVRTC_2BPPV1_Format:()=>ul,RGB_PVRTC_4BPPV1_Format:()=>hl,RGB_S3TC_DXT1_Format:()=>fa,RGDepthPacking:()=>a0,RGFormat:()=>Li,RGIntegerFormat:()=>ll,RawShaderMaterial:()=>Ki,Ray:()=>Ai,Raycaster:()=>Uh,RectAreaLight:()=>Yo,RedFormat:()=>ol,RedIntegerFormat:()=>da,ReinhardToneMapping:()=>is,RenderObjectRefreshType:()=>O0,RenderTarget:()=>Lr,RenderTarget3D:()=>Ph,RepeatWrapping:()=>wr,ReplaceStencilOp:()=>u0,ReverseSubtractEquation:()=>Jd,RingGeometry:()=>To,SIGNED_R11_EAC_Format:()=>xl,SIGNED_RED_GREEN_RGTC2_Format:()=>zl,SIGNED_RED_RGTC1_Format:()=>Bl,SIGNED_RG11_EAC_Format:()=>vl,SRGBColorSpace:()=>$e,SRGBTransfer:()=>ue,Scene:()=>qn,ShaderChunk:()=>ie,ShaderLib:()=>Jn,ShaderMaterial:()=>Be,ShadowMaterial:()=>Lo,Shape:()=>Ji,ShapeGeometry:()=>Ao,ShapePath:()=>tu,ShapeUtils:()=>In,ShortType:()=>uu,Skeleton:()=>so,SkeletonHelper:()=>Vh,SkinnedMesh:()=>io,Source:()=>Jc,Sphere:()=>Pe,SphereGeometry:()=>Jr,Spherical:()=>Oh,SphericalHarmonics3:()=>ia,SplineCurve:()=>Yr,SpotLight:()=>Wo,SpotLightHelper:()=>Gh,Sprite:()=>eo,SpriteMaterial:()=>Ur,SrcAlphaFactor:()=>ou,SrcAlphaSaturateFactor:()=>lf,SrcColorFactor:()=>ef,StaticCopyUsage:()=>R0,StaticDrawUsage:()=>Gl,StaticReadUsage:()=>A0,StereoCamera:()=>wh,StreamCopyUsage:()=>I0,StreamDrawUsage:()=>T0,StreamReadUsage:()=>C0,StringKeyframeTrack:()=>ii,SubtractEquation:()=>$d,SubtractiveBlending:()=>ru,TOUCH:()=>$m,TangentSpaceNormalMap:()=>li,TetrahedronGeometry:()=>Eo,Texture:()=>Le,TextureLoader:()=>yh,TextureSource:()=>wn,TextureUtils:()=>nu,Timer:()=>Xs,TimestampQuery:()=>D0,TorusGeometry:()=>Co,TorusKnotGeometry:()=>Ro,Triangle:()=>Wn,TriangleFanDrawMode:()=>Mf,TriangleStripDrawMode:()=>yf,TrianglesDrawMode:()=>vf,TubeGeometry:()=>Po,UVMapping:()=>il,Uint16BufferAttribute:()=>Dr,Uint32BufferAttribute:()=>Nr,Uint8BufferAttribute:()=>eh,Uint8ClampedBufferAttribute:()=>nh,Uniform:()=>Ih,UniformsGroup:()=>Lh,UniformsLib:()=>Et,UniformsUtils:()=>hi,UnsignedByteType:()=>fn,UnsignedInt101111Type:()=>fu,UnsignedInt248Type:()=>ls,UnsignedInt5999Type:()=>du,UnsignedIntType:()=>pn,UnsignedShort4444Type:()=>rl,UnsignedShort5551Type:()=>al,UnsignedShortType:()=>$s,VSMShadowMap:()=>qs,Vector2:()=>et,Vector3:()=>L,Vector4:()=>fe,VectorKeyframeTrack:()=>ea,VideoFrameTexture:()=>lh,VideoTexture:()=>lo,WebGL3DRenderTarget:()=>Qc,WebGLArrayRenderTarget:()=>Kc,WebGLCoordinateSystem:()=>vn,WebGLCubeRenderTarget:()=>ya,WebGLRenderTarget:()=>Te,WebGLRenderer:()=>Wl,WebGLUtils:()=>Ig,WebGPUCoordinateSystem:()=>Wi,WebXRController:()=>Ls,WireframeGeometry:()=>Io,WrapAroundEnding:()=>Er,ZeroCurvatureEnding:()=>Vi,ZeroFactor:()=>jd,ZeroSlopeEnding:()=>Hi,ZeroStencilOp:()=>h0,createCanvasElement:()=>Pf,error:()=>Gt,getConsoleFunction:()=>k0,log:()=>Ir,setConsoleFunction:()=>z0,warn:()=>Tt,warnOnce:()=>jn});function Mg(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Wv(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,f)=>p.start-f.start);let d=0;for(let p=1;p<u.length;p++){let f=u[d],_=u[p];_.start<=f.start+f.count+1?f.count=Math.max(f.count,_.start+_.count-f.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,f=u.length;p<f;p++){let _=u[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}function TS(s,t,e,n,i,r){let a=new gt(0),o=i===!0?0:1,l,c,h=null,u=0,d=null;function p(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){let M=x.backgroundBlurriness>0;y=t.get(y,M)}return y}function f(x){let y=!1,M=p(x);M===null?m(a,o):M&&M.isColor&&(m(M,1),y=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(x,y){let M=p(y);M&&M.isCubeTexture?(c===void 0&&(c=new ye(new Zi(1,1,1),new Be({name:"BackgroundCubeMaterial",uniforms:Js(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wS.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sg),c.material.toneMapped=ae.getTransfer(M.colorSpace)!==ue,(h!==M||u!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ye(new Ci(2,2),new Be({name:"BackgroundMaterial",uniforms:Js(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ae.getTransfer(M.colorSpace)!==ue,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,y){x.getRGB(bu,Uf(s)),e.buffers.color.setClear(bu.r,bu.g,bu.b,y,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:f,addToRenderList:_,dispose:g}}function AS(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(I,N,z,D,O){let q=!1,V=u(I,D,z,N);r!==V&&(r=V,c(r.object)),q=p(I,D,z,O),q&&f(I,D,z,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(I,N,z,D),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function u(I,N,z,D){let O=D.wireframe===!0,q=n[N.id];q===void 0&&(q={},n[N.id]=q);let V=I.isInstancedMesh===!0?I.id:0,st=q[V];st===void 0&&(st={},q[V]=st);let X=st[z.id];X===void 0&&(X={},st[z.id]=X);let $=X[O];return $===void 0&&($=d(l()),X[O]=$),$}function d(I){let N=[],z=[],D=[];for(let O=0;O<e;O++)N[O]=0,z[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:D,object:I,attributes:{},index:null}}function p(I,N,z,D){let O=r.attributes,q=N.attributes,V=0,st=z.getAttributes();for(let X in st)if(st[X].location>=0){let nt=O[X],At=q[X];if(At===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(At=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(At=I.instanceColor)),nt===void 0||nt.attribute!==At||At&&nt.data!==At.data)return!0;V++}return r.attributesNum!==V||r.index!==D}function f(I,N,z,D){let O={},q=N.attributes,V=0,st=z.getAttributes();for(let X in st)if(st[X].location>=0){let nt=q[X];nt===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(nt=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(nt=I.instanceColor));let At={};At.attribute=nt,nt&&nt.data&&(At.data=nt.data),O[X]=At,V++}r.attributes=O,r.attributesNum=V,r.index=D}function _(){let I=r.newAttributes;for(let N=0,z=I.length;N<z;N++)I[N]=0}function m(I){g(I,0)}function g(I,N){let z=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;z[I]=1,D[I]===0&&(s.enableVertexAttribArray(I),D[I]=1),O[I]!==N&&(s.vertexAttribDivisor(I,N),O[I]=N)}function x(){let I=r.newAttributes,N=r.enabledAttributes;for(let z=0,D=N.length;z<D;z++)N[z]!==I[z]&&(s.disableVertexAttribArray(z),N[z]=0)}function y(I,N,z,D,O,q,V){V===!0?s.vertexAttribIPointer(I,N,z,O,q):s.vertexAttribPointer(I,N,z,D,O,q)}function M(I,N,z,D){_();let O=D.attributes,q=z.getAttributes(),V=N.defaultAttributeValues;for(let st in q){let X=q[st];if(X.location>=0){let $=O[st];if($===void 0&&(st==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),st==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){let nt=$.normalized,At=$.itemSize,at=t.get($);if(at===void 0)continue;let G=at.buffer,lt=at.type,vt=at.bytesPerElement,kt=lt===s.INT||lt===s.UNSIGNED_INT||$.gpuType===sl;if($.isInterleavedBufferAttribute){let wt=$.data,Vt=wt.isInterleavedBuffer===!0?wt.stride:wt.itemSize,xe=$.offset;if(wt.isInstancedInterleavedBuffer||wt.isInstancedBufferAttribute){for(let Pt=0;Pt<X.locationSize;Pt++)g(X.location+Pt,wt.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Pt=0;Pt<X.locationSize;Pt++)m(X.location+Pt);s.bindBuffer(s.ARRAY_BUFFER,G);for(let Pt=0;Pt<X.locationSize;Pt++)y(X.location+Pt,At/X.locationSize,lt,nt,Vt*vt,(xe+At/X.locationSize*Pt)*vt,kt)}else{if($.isInstancedBufferAttribute){for(let wt=0;wt<X.locationSize;wt++)g(X.location+wt,$.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let wt=0;wt<X.locationSize;wt++)m(X.location+wt);s.bindBuffer(s.ARRAY_BUFFER,G);for(let wt=0;wt<X.locationSize;wt++)y(X.location+wt,At/X.locationSize,lt,nt,At*vt,At/X.locationSize*wt*vt,kt)}}else if(V!==void 0){let nt=V[st];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(X.location,nt);break;case 3:s.vertexAttrib3fv(X.location,nt);break;case 4:s.vertexAttrib4fv(X.location,nt);break;default:s.vertexAttrib1fv(X.location,nt)}}}}x()}function w(){R();for(let I in n){let N=n[I];for(let z in N){let D=N[z];for(let O in D){let q=D[O];for(let V in q)h(q[V].object),delete q[V];delete D[O]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let z in N){let D=N[z];for(let O in D){let q=D[O];for(let V in q)h(q[V].object),delete q[V];delete D[O]}}delete n[I.id]}function v(I){for(let N in n){let z=n[N];for(let D in z){let O=z[D];if(O[I.id]===void 0)continue;let q=O[I.id];for(let V in q)h(q[V].object),delete q[V];delete O[I.id]}}}function S(I){for(let N in n){let z=n[N],D=I.isInstancedMesh===!0?I.id:0,O=z[D];if(O!==void 0){for(let q in O){let V=O[q];for(let st in V)h(V[st].object),delete V[st];delete O[q]}delete z[D],Object.keys(z).length===0&&delete n[N]}}}function R(){E(),a=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function ES(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function CS(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(v){return!(v!==un&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let S=v===ze&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==fn&&v!==sn&&!S&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Tt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Tt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:M,maxSamples:w,samples:T}}function RS(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Pn,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let f=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||f===null||f.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,y=x*4,M=g.clippingState||null;l.value=M,M=h(f,d,y,p);for(let w=0;w!==y;++w)M[w]=e[w];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,f){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,f!==!0||m===null){let g=p+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,M=p;y!==_;++y,M+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function eg(s,t,e){return new ya(s,{minFilter:On,generateMipmaps:t,type:ze,colorSpace:Cr,depthBuffer:e})}function Xl(s,t,e){return new Be({name:s,uniforms:t,vertexShader:ie.cube_vert,fragmentShader:e,side:rn,blending:si,depthTest:!1,depthWrite:!1})}function US(){return Xl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bg}u

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
	`)}function FS(){return Xl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:wg}},`

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
	`)}function OS(){return Xl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${IS}
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
	`)}function ng(){return Xl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ig(){return Xl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function BS(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===ca||p===ha)if(t.has(d)){let f=t.get(d).texture;return o(f,d.mapping)}else{let f=d.image;if(f&&f.height>0){let _=new ya(f.height);return _.fromEquirectangularTexture(s,d),t.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,f=p===ca||p===ha,_=p===ai||p===os;if(f||_){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Ks(s)),m=f?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let x=d.image;return f&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new Ks(s)),m=f?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,p){return p===ca?d.mapping=ai:p===ha&&(d.mapping=os),d}function l(d){let p=0,f=6;for(let _=0;_<f;_++)d[_]!==void 0&&p++;return p===f}function c(d){let p=d.target;p.removeEventListener("dispose",c);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function h(d){let p=d.target;p.removeEventListener("dispose",h);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function zS(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&jn("WebGLRenderer: "+n+" extension not supported."),i}}}function kS(s,t,e,n){let i={},r=new WeakMap,a=new FinalizationRegistry(f=>delete i[f]);function o(f){l(f.target)}function l(f){f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id],a.unregister(f);let _=r.get(f);_&&(t.remove(_),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function c(f,_){return i[_.id]!==void 0||(_.addEventListener("dispose",o),i[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function h(f){let _=f.attributes;for(let m in _)t.update(_[m],s.ARRAY_BUFFER)}function u(f){let _=f.index,m=f.attributes.position,g=0;if(m===void 0)return;let x=_!==null?_.array.length:m.array.length/3-1,y=m.count>=65535?Nr:Dr,M=new y(Math.ceil(x/3)*6,1),w=M.array;if(_!==null){let v=_.array;g=_.version;for(let S=0,R=0;S<x;S+=3){let E=v[S+0],I=v[S+1],N=v[S+2];w[R++]=E,w[R++]=I,w[R++]=I,w[R++]=N,w[R++]=N,w[R++]=E}}else{g=m.version;for(let v=0,S=0;v<x;v+=3){let R=v+0,E=v+1,I=v+2;w[S++]=R,w[S++]=E,w[S++]=E,w[S++]=I,w[S++]=I,w[S++]=R}}M.version=g;let T=r.get(f);T&&t.remove(T),r.set(f,M)}function d(f){let _=r.get(f);if(_){let m=f.index;m!==null&&_.version<m.version&&u(f)}else u(f);return r.get(f)}function p(){for(let f in i){let _=i[f].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:p}}function GS(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,u*a,p),e.update(d,n,p))}function h(u,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let _=0;for(let m=0;m<p;m++)_+=d[m];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function VS(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Gt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function HS(s,t,e){let n=new WeakMap,i=new fe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let R=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],y=0;p===!0&&(y=1),f===!0&&(y=2),_===!0&&(y=3);let M=o.attributes.position.count*y,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*w*4*u),v=new Rs(T,M,w,u);v.type=sn,v.needsUpdate=!0;let S=y*4;for(let E=0;E<u;E++){let I=m[E],N=g[E],z=x[E],D=M*w*4*E;for(let O=0;O<I.count;O++){let q=O*S;p===!0&&(i.fromBufferAttribute(I,O),T[D+q+0]=i.x,T[D+q+1]=i.y,T[D+q+2]=i.z,T[D+q+3]=0),f===!0&&(i.fromBufferAttribute(N,O),T[D+q+4]=i.x,T[D+q+5]=i.y,T[D+q+6]=i.z,T[D+q+7]=0),_===!0&&(i.fromBufferAttribute(z,O),T[D+q+8]=i.x,T[D+q+9]=i.y,T[D+q+10]=i.z,T[D+q+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:v,size:new et(M,w)},n.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let f=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",f),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function WS(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}function qS(s,t,e,n,i,r){let a=new Te(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Yt;h.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Lt([0,2,0,0,2,0],2));let u=new Ki({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ye(h,u),p=new Pi(-1,1,1,-1,0,1),f=null,_=null,m=!1,g,x=null,y=[],M=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let v=0;v<y.length;v++){let S=y[v];S.setSize&&S.setSize(w,T)}},this.setEffects=function(w){y=w,M=y.length>0&&y[0].isRenderPass===!0;let T=a.width,v=a.height;y.length>0&&o===null&&(o=new Te(T,v,{type:ze,depthBuffer:!1,stencilBuffer:!1}),l=new Te(T,v,{type:ze,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&y.some(R=>R.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Nn(T,v),r===!0&&(c.format=oi,c.type=ls)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let R=0;R<y.length;R++){let E=y[R];E.setSize&&E.setSize(T,v),S&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(w,T){if(m||w.toneMapping===En&&y.length===0)return!1;if(x=T,T!==null){let v=T.width,S=T.height;(a.width!==v||a.height!==S)&&this.setSize(v,S)}return M===!1&&w.setRenderTarget(a),g=w.toneMapping,w.toneMapping=En,!0},this.hasRenderPass=function(){return M},this.end=function(w,T){w.toneMapping=g,m=!0;let v=a,S=o;for(let R=0;R<y.length;R++){let E=y[R];E.enabled!==!1&&(E.render(w,S,v,T),E.needsSwap!==!1&&(v=S,S=S===o?l:o))}if(f!==w.outputColorSpace||_!==w.toneMapping){f=w.outputColorSpace,_=w.toneMapping,u.defines={},ae.getTransfer(f)===ue&&(u.defines.SRGB_TRANSFER="");let R=XS[_];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,w.setRenderTarget(x),w.render(d,p),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}function Ma(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=sg[i];if(r===void 0&&(r=new Float32Array(i),sg[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ke(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Tu(s,t){let e=rg[t];e===void 0&&(e=new Int32Array(t),rg[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function YS(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function ZS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2fv(this.addr,t),Ge(e,t)}}function $S(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;s.uniform3fv(this.addr,t),Ge(e,t)}}function JS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4fv(this.addr,t),Ge(e,t)}}function KS(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;lg.set(n),s.uniformMatrix2fv(this.addr,!1,lg),Ge(e,n)}}function QS(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;og.set(n),s.uniformMatrix3fv(this.addr,!1,og),Ge(e,n)}}function jS(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;ag.set(n),s.uniformMatrix4fv(this.addr,!1,ag),Ge(e,n)}}function tb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function eb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2iv(this.addr,t),Ge(e,t)}}function nb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3iv(this.addr,t),Ge(e,t)}}function ib(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4iv(this.addr,t),Ge(e,t)}}function sb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function rb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2uiv(this.addr,t),Ge(e,t)}}function ab(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3uiv(this.addr,t),Ge(e,t)}}function ob(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4uiv(this.addr,t),Ge(e,t)}}function Au(s){return s.version===0&&(s.compareFunction=vu,s.needsUpdate=!0),s}function lb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Au(Ag):r=Tg,e.setTexture2D(t||r,i)}function cb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Rg,i)}function hb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Au(Eg):r=Pg,e.setTextureCube(t||r,i)}function ub(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Cg,i)}function db(s){switch(s){case 5126:return YS;case 35664:return ZS;case 35665:return $S;case 35666:return JS;case 35674:return KS;case 35675:return QS;case 35676:return jS;case 5124:case 35670:return tb;case 35667:case 35671:return eb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return sb;case 36294:return rb;case 36295:return ab;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return ub}}function fb(s,t){s.uniform1fv(this.addr,t)}function pb(s,t){let e=Ma(t,this.size,2);s.uniform2fv(this.addr,e)}function mb(s,t){let e=Ma(t,this.size,3);s.uniform3fv(this.addr,e)}function gb(s,t){let e=Ma(t,this.size,4);s.uniform4fv(this.addr,e)}function _b(s,t){let e=Ma(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function xb(s,t){let e=Ma(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function vb(s,t){let e=Ma(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function yb(s,t){s.uniform1iv(this.addr,t)}function Mb(s,t){s.uniform2iv(this.addr,t)}function Sb(s,t){s.uniform3iv(this.addr,t)}function bb(s,t){s.uniform4iv(this.addr,t)}function wb(s,t){s.uniform1uiv(this.addr,t)}function Tb(s,t){s.uniform2uiv(this.addr,t)}function Ab(s,t){s.uniform3uiv(this.addr,t)}function Eb(s,t){s.uniform4uiv(this.addr,t)}function Cb(s,t,e){let n=this.cache,i=t.length,r=Tu(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Au(Ag):a=Tg;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function Rb(s,t,e){let n=this.cache,i=t.length,r=Tu(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Rg,r[a])}function Pb(s,t,e){let n=this.cache,i=t.length,r=Tu(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Au(Eg):a=Pg;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||a,r[o])}function Ib(s,t,e){let n=this.cache,i=t.length,r=Tu(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Cg,r[a])}function Lb(s){switch(s){case 5126:return fb;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return _b;case 35675:return xb;case 35676:return vb;case 5124:case 35670:return yb;case 35667:case 35671:return Mb;case 35668:case 35672:return Sb;case 35669:case 35673:return bb;case 5125:return wb;case 36294:return Tb;case 36295:return Ab;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Ib}}function cg(s,t){s.seq.push(t),s.map[t.id]=t}function Db(s,t,e){let n=s.name,i=n.length;for(Xf.lastIndex=0;;){let r=Xf.exec(n),a=Xf.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){cg(e,c===void 0?new Yf(o,s,t):new Zf(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new $f(o),cg(e,u)),e=u}}}function hg(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}function Fb(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Ob(s){ae._getMatrix(ug,ae.workingColorSpace,s);let t=`mat3( ${ug.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(s)){case Rr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Tt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function dg(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Fb(s.getShaderSource(t),o)}else return r}function Bb(s,t){let e=Ob(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function kb(s,t){let e=zb[t];return e===void 0?(Tt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Gb(){ae.getLuminanceCoefficients(wu);let s=wu.x.toFixed(4),t=wu.y.toFixed(4),e=wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hl).join(`
`)}function Hb(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wb(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Hl(s){return s!==""}function fg(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function pg(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Jf(s){return s.replace(Xb,qb)}function qb(s,t){let e=ie[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Jf(e)}function mg(s){return s.replace(Yb,Zb)}function Zb(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gg(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Jb(s){return $b[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Qb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Kb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}function t1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":jb[s.combine]||"ENVMAP_BLENDING_NONE"}function e1(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Jb(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Qb(e),u=t1(e),d=Vb(e),p=Hb(r),f=i.createProgram(),_,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Hl).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Hl).join(`
`),m.length>0&&(m+=`
`)):(_=[gg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hl).join(`
`),m=[gg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?ie.tonemapping_pars_fragment:"",e.toneMapping!==En?kb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Bb("linearToOutputTexel",e.outputColorSpace),Gb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hl).join(`
`)),a=Jf(a),a=fg(a,e),a=pg(a,e),o=Jf(o),o=fg(o,e),o=pg(o,e),a=mg(a),o=mg(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=g+_+a,y=g+m+o,M=hg(i,i.VERTEX_SHADER,x),w=hg(i,i.FRAGMENT_SHADER,y);i.attachShader(f,M),i.attachShader(f,w),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function T(E){if(s.debug.checkShaderErrors){let I=i.getProgramInfoLog(f)||"",N=i.getShaderInfoLog(M)||"",z=i.getShaderInfoLog(w)||"",D=I.trim(),O=N.trim(),q=z.trim(),V=!0,st=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,M,w);else{let X=dg(i,M,"vertex"),$=dg(i,w,"fragment");Gt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+D+`
`+X+`
`+$)}else D!==""?Tt("WebGLProgram: Program Info Log:",D):(O===""||q==="")&&(st=!1);st&&(E.diagnostics={runnable:V,programLog:D,vertexShader:{log:O,prefix:_},fragmentShader:{log:q,prefix:m}})}i.deleteShader(M),i.deleteShader(w),v=new va(i,f),S=Wb(i,f)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(f,Nb)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ub++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=M,this.fragmentShader=w,this}function i1(s){return s===Li||s===_a||s===xa}function s1(s,t,e,n,i,r){let a=new Is,o=new Kf,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,S,R,E,I,N){let z=E.fog,D=I.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?E.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,V=t.get(v.envMap||O,q),st=d[v.type],X=n.precision;v.precision!==null&&(X=n.getMaxPrecision(v.precision),X!==v.precision&&Tt("WebGLProgram.getParameters:",v.precision,"not supported, using",X,"instead."));let $=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,nt=$!==void 0?$.length:0,At=0;D.morphAttributes.position!==void 0&&(At=1),D.morphAttributes.normal!==void 0&&(At=2),D.morphAttributes.color!==void 0&&(At=3);let at,G,lt,vt;if(st){let Rt=Jn[st];at=Rt.vertexShader,G=Rt.fragmentShader}else{at=v.vertexShader,G=v.fragmentShader;let Rt=o.getVertexShaderStage(v),ve=o.getFragmentShaderStage(v);o.update(v,Rt,ve),lt=Rt.id,vt=ve.id}let kt=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),Vt=I.isInstancedMesh===!0,xe=I.isBatchedMesh===!0,Pt=!!v.map,ee=!!v.matcap,oe=!!V,it=oe&&V.isPMREMTexture===!0,mt=!!v.aoMap,dt=!!v.lightMap,Nt=!!v.bumpMap&&v.wireframe===!1,ft=!!v.normalMap,Qt=!!v.displacementMap,Bt=!!v.emissiveMap,se=!!v.metalnessMap,te=!!v.roughnessMap,k=v.anisotropy>0,P=v.clearcoat>0,Z=v.diffuseRoughness>0,ct=v.dispersion>0,Ht=v.retroreflectivity>0,rt=v.iridescence>0,qt=v.sheen>0,Ct=v.transmission>0,Dt=k&&!!v.anisotropyMap,C=P&&!!v.clearcoatMap,b=P&&!!v.clearcoatNormalMap,B=P&&!!v.clearcoatRoughnessMap,ot=Z&&!!v.diffuseRoughnessMap,j=rt&&!!v.iridescenceMap,ut=rt&&!!v.iridescenceThicknessMap,_t=qt&&!!v.sheenColorMap,K=qt&&!!v.sheenRoughnessMap,Q=!!v.specularMap,yt=!!v.specularColorMap,U=!!v.specularIntensityMap,tt=Ct&&!!v.transmissionMap,J=Ct&&!!v.thicknessMap,Mt=!!v.gradientMap,pt=!!v.alphaMap,xt=v.alphaTest>0,Wt=!!v.alphaHash,re=!!v.extensions,ht=En;v.toneMapped&&(kt===null||kt.isXRRenderTarget===!0)&&(ht=s.toneMapping);let Xt=it?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,ne={shaderID:st,shaderType:v.type,shaderName:v.name,vertexShader:at,fragmentShader:G,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:vt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:X,batching:xe,batchingColor:xe&&I._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&I.instanceColor!==null,instancingMorph:Vt&&I.morphTexture!==null,outputColorSpace:kt===null?s.outputColorSpace:kt.isXRRenderTarget===!0?kt.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Pt,matcap:ee,envMap:oe,envMapMode:oe&&V.mapping,envMapPMREM:it,envMapMaxLod:it?Xt.length-1:null,envMapSize:it?Xt[0].width:null,aoMap:mt,lightMap:dt,bumpMap:Nt,normalMap:ft,displacementMap:Qt,emissiveMap:Bt,normalMapObjectSpace:ft&&v.normalMapType===bf,normalMapTangentSpace:ft&&v.normalMapType===li,packedNormalMap:ft&&v.normalMapType===li&&i1(v.normalMap.format),metalnessMap:se,roughnessMap:te,anisotropy:k,anisotropyMap:Dt,clearcoat:P,clearcoatMap:C,clearcoatNormalMap:b,clearcoatRoughnessMap:B,diffuseRoughness:Z,diffuseRoughnessMap:ot,dispersion:ct,retroreflection:Ht,iridescence:rt,iridescenceMap:j,iridescenceThicknessMap:ut,sheen:qt,sheenColorMap:_t,sheenRoughnessMap:K,specularMap:Q,specularColorMap:yt,specularIntensityMap:U,transmission:Ct,transmissionMap:tt,thicknessMap:J,gradientMap:Mt,opaque:v.transparent===!1&&v.blending===Ys&&v.alphaToCoverage===!1,alphaMap:pt,alphaTest:xt,alphaHash:Wt,combine:v.combine,mapUv:Pt&&p(v.map.channel),aoMapUv:mt&&p(v.aoMap.channel),lightMapUv:dt&&p(v.lightMap.channel),bumpMapUv:Nt&&p(v.bumpMap.channel),normalMapUv:ft&&p(v.normalMap.channel),displacementMapUv:Qt&&p(v.displacementMap.channel),emissiveMapUv:Bt&&p(v.emissiveMap.channel),metalnessMapUv:se&&p(v.metalnessMap.channel),roughnessMapUv:te&&p(v.roughnessMap.channel),anisotropyMapUv:Dt&&p(v.anisotropyMap.channel),clearcoatMapUv:C&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:b&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:j&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:K&&p(v.sheenRoughnessMap.channel),specularMapUv:Q&&p(v.specularMap.channel),specularColorMapUv:yt&&p(v.specularColorMap.channel),specularIntensityMapUv:U&&p(v.specularIntensityMap.channel),transmissionMapUv:tt&&p(v.transmissionMap.channel),thicknessMapUv:J&&p(v.thicknessMap.channel),alphaMapUv:pt&&p(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ft||k),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!D.attributes.uv&&(Pt||pt),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&ft===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:wt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:At,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:N.filter(Rt=>Rt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:Pt&&v.map.isVideoTexture===!0&&ae.getTransfer(v.map.colorSpace)===ue,decodeVideoTextureEmissive:Bt&&v.emissiveMap.isVideoTexture===!0&&ae.getTransfer(v.emissiveMap.colorSpace)===ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$n,flipSided:v.side===rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:re&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&v.extensions.multiDraw===!0||xe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ne.vertexUv1s=l.has(1),ne.vertexUv2s=l.has(2),ne.vertexUv3s=l.has(3),l.clear(),ne}function _(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)S.push(R),S.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(m(S,v),g(S,v),S.push(s.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function m(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function g(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function x(v){let S=d[v.type],R;if(S){let E=Jn[S];R=hi.clone(E.uniforms)}else R=v.uniforms;return R}function y(v,S){let R=h.get(S);return R!==void 0?++R.usedTimes:(R=new e1(s,S,v,i),c.push(R),h.set(S,R)),R}function M(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function T(){o.dispose()}return{getParameters:f,getProgramCacheKey:_,getUniforms:x,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:T}}function r1(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function a1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function _g(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function xg(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,f,_,m,g){let x=s[t];return x===void 0?(x={id:d.id,object:d,geometry:p,material:f,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},s[t]=x):(x.id=d.id,x.object=d,x.geometry=p,x.material=f,x.materialVariant=a(d),x.groupOrder=_,x.renderOrder=d.renderOrder,x.z=m,x.group=g),t++,x}function l(d,p,f,_,m,g,x){x.reversedDepth===!0&&(m=-m);let y=o(d,p,f,_,m,g);f.transmission>0?n.push(y):f.transparent===!0?i.push(y):e.push(y)}function c(d,p,f,_,m,g){let x=o(d,p,f,_,m,g);f.transmission>0?n.unshift(x):f.transparent===!0?i.unshift(x):e.unshift(x)}function h(d,p){e.length>1&&e.sort(d||a1),n.length>1&&n.sort(p||_g),i.length>1&&i.sort(p||_g)}function u(){for(let d=t,p=s.length;d<p;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function o1(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new xg,s.set(n,[a])):i>=r.length?(a=new xg,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function l1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new gt};break;case"SpotLight":e={position:new L,direction:new L,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":e={color:new gt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function c1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}function u1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function d1(s){let t=new l1,e=c1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new Jt,a=new Jt;function o(c){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,f=0,_=0,m=0,g=0,x=0,y=0,M=0,w=0,T=0,v=0,S=0,R=0,E=0;c.sort(u1);for(let N=0,z=c.length;N<z;N++){let D=c[N],O=D.color,q=D.intensity,V=D.distance,st=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Li?st=D.shadow.map.texture:st=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*q,u+=O.g*q,d+=O.b*q;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],q);E++}else if(D.isSunLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let $=D.shadow,nt=e.get(D);nt.shadowIntensity=$.intensity,nt.shadowBias=$.bias,nt.shadowNormalBias=$.normalBias,nt.shadowRadius=$.radius,nt.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[f]=nt,n.sunShadowMap[f]=st;let At=$.getViewportCount();for(let at=0;at<At;at++)n.sunShadowMatrix[_+at]=$.getMatrix(at),n.sunShadowCascade[_+at]=$._cascadeData[at];_+=At,f++}n.sun[p]=X,p++}else if(D.isDirectionalLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let $=D.shadow,nt=e.get(D);nt.shadowIntensity=$.intensity,nt.shadowBias=$.bias,nt.shadowNormalBias=$.normalBias,nt.shadowRadius=$.radius,nt.shadowMapSize=$.mapSize,n.directionalShadow[m]=nt,n.directionalShadowMap[m]=st,n.directionalShadowMatrix[m]=D.shadow.matrix,w++}n.directional[m]=X,m++}else if(D.isSpotLight){let X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(O).multiplyScalar(q),X.distance=V,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[x]=X;let $=D.shadow;if(D.map&&(n.spotLightMap[S]=D.map,S++,$.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[x]=$.matrix,D.castShadow){let nt=e.get(D);nt.shadowIntensity=$.intensity,nt.shadowBias=$.bias,nt.shadowNormalBias=$.normalBias,nt.shadowRadius=$.radius,nt.shadowMapSize=$.mapSize,n.spotShadow[x]=nt,n.spotShadowMap[x]=st,v++}x++}else if(D.isRectAreaLight){let X=t.get(D);X.color.copy(O).multiplyScalar(q),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[y]=X,y++}else if(D.isPointLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let $=D.shadow,nt=e.get(D);nt.shadowIntensity=$.intensity,nt.shadowBias=$.bias,nt.shadowNormalBias=$.normalBias,nt.shadowRadius=$.radius,nt.shadowMapSize=$.mapSize,nt.shadowCameraNear=$.camera.near,nt.shadowCameraFar=$.camera.far,n.pointShadow[g]=nt,n.pointShadowMap[g]=st,n.pointShadowMatrix[g]=D.shadow.matrix,T++}n.point[g]=X,g++}else if(D.isHemisphereLight){let X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(q),X.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[M]=X,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==y||I.hemiLength!==M||I.numSunShadows!==f||I.numDirectionalShadows!==w||I.numPointShadows!==T||I.numSpotShadows!==v||I.numSpotMaps!==S||I.numLightProbes!==E)&&(n.sun.length=p,n.directional.length=m,n.spot.length=x,n.rectArea.length=y,n.point.length=g,n.hemi.length=M,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,I.sunLength=p,I.directionalLength=m,I.pointLength=g,I.spotLength=x,I.rectAreaLength=y,I.hemiLength=M,I.numSunShadows=f,I.numDirectionalShadows=w,I.numPointShadows=T,I.numSpotShadows=v,I.numSpotMaps=S,I.numLightProbes=E,n.version=h1++)}function l(c,h){let u=0,d=0,p=0,f=0,_=0,m=0,g=h.matrixWorldInverse;for(let x=0,y=c.length;x<y;x++){let M=c[x];if(M.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(g),u++}else if(M.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),d++}else if(M.isSpotLight){let w=n.spot[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let w=n.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let w=n.point[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),p++}else if(M.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function vg(s){let t=new d1(s),e=[],n=[],i=[];function r(u){h.camera=u,e.length=0,n.length=0,i.length=0}function a(u){u.isLightProbeGrid?i.push(u):e.push(u)}function o(u){n.push(u)}function l(){t.setup(e),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function f1(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new vg(s),t.set(i,[o])):r>=a.length?(o=new vg(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function x1(s,t,e){let n=new ei,i=new et,r=new et,a=new fe,o=new Kr,l=new Qr,c={},h=e.maxTextureSize,u={[Ii]:rn,[rn]:Ii,[$n]:$n},d=new Be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:p1,fragmentShader:m1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Yt;f.setAttribute("position",new de(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ye(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ts;let g=this.type;this.render=function(T,v,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Yd&&(Tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ts);let R=s.getRenderTarget(),E=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),N=s.state;N.setBlending(si),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=g!==this.type;z&&v.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=T.length;D<O;D++){let q=T[D],V=q.shadow;if(V===void 0){Tt("WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let st=V.getFrameExtents();i.multiply(st),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,V.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===qs){if(q.isPointLight){Tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Te(i.x,i.y,{format:Li,type:ze,minFilter:we,magFilter:we,generateMipmaps:!1}),V.map.texture.name=q.name+".shadowMap",V.map.depthTexture=new Nn(i.x,i.y,sn),V.map.depthTexture.name=q.name+".shadowMapDepth",V.map.depthTexture.format=ti,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ie,V.map.depthTexture.magFilter=Ie}else q.isPointLight?(V.map=new ya(i.x),V.map.depthTexture=new zr(i.x,pn)):(V.map=new Te(i.x,i.y),V.map.depthTexture=new Nn(i.x,i.y,pn)),V.map.depthTexture.name=q.name+".shadowMap",V.map.depthTexture.format=ti,this.type===ts?(V.map.depthTexture.compareFunction=X?xu:_u,V.map.depthTexture.minFilter=we,V.map.depthTexture.magFilter=we):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ie,V.map.depthTexture.magFilter=Ie);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);let $=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();q.isPointLight!==!0&&V.updateMatrices(q,S);let nt=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:S.layers;for(let At=0;At<$;At++){let at=V.getCamera(At);if(q.isPointLight){let G=V.camera,lt=V.matrix,vt=q.distance||G.far;vt!==G.far&&(G.far=vt,G.updateProjectionMatrix()),Vl.setFromMatrixPosition(q.matrixWorld),G.position.copy(Vl),qf.copy(G.position),qf.add(g1[At]),G.up.copy(_1[At]),G.lookAt(qf),G.updateMatrixWorld(),lt.makeTranslation(-Vl.x,-Vl.y,-Vl.z),yg.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),V._frustum.setFromProjectionMatrix(yg,G.coordinateSystem,G.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,At),s.clear();else{At===0&&(s.setRenderTarget(V.map),s.clear());let G=V.getViewport(At);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),N.viewport(a)}n=V.getFrustum(At),M(v,S,at,q,nt,this.type)}V.isPointLightShadow!==!0&&this.type===qs&&x(V,S),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(R,E,I)};function x(T,v){let S=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Te(i.x,i.y,{format:Li,type:ze}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(v,null,S,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(v,null,S,p,_,null)}function y(T,v,S,R){let E=null,I=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)E=I;else if(E=S.isPointLight===!0?l:o,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let N=E.uuid,z=v.uuid,D=c[N];D===void 0&&(D={},c[N]=D);let O=D[z];O===void 0&&(O=E.clone(),D[z]=O,v.addEventListener("dispose",w)),E=O}if(E.visible=v.visible,E.wireframe=v.wireframe,R===qs?E.side=v.shadowSide!==null?v.shadowSide:v.side:E.side=v.shadowSide!==null?v.shadowSide:u[v.side],E.alphaMap=v.alphaMap,E.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,E.map=v.map,E.clipShadows=v.clipShadows,E.clippingPlanes=v.clippingPlanes,E.clipIntersection=v.clipIntersection,E.displacementMap=v.displacementMap,E.displacementScale=v.displacementScale,E.displacementBias=v.displacementBias,E.wireframeLinewidth=v.wireframeLinewidth,E.linewidth=v.linewidth,S.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let N=s.properties.get(E);N.light=S}return E}function M(T,v,S,R,E,I){if(T.visible===!1)return;if(T.layers.test(E)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===qs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let D=t.update(T),O=T.material;if(Array.isArray(O)){let q=D.groups;for(let V=0,st=q.length;V<st;V++){let X=q[V],$=O[X.materialIndex];if($&&$.visible){let nt=y(T,$,R,I);T.onBeforeShadow(s,T,v,S,D,nt,X),s.renderBufferDirect(S,null,D,nt,T,X),T.onAfterShadow(s,T,v,S,D,nt,X)}}}else if(O.visible){let q=y(T,O,R,I);T.onBeforeShadow(s,T,v,S,D,q,null),s.renderBufferDirect(S,null,D,q,T,null),T.onAfterShadow(s,T,v,S,D,q,null)}}let z=T.children;for(let D=0,O=z.length;D<O;D++)M(z[D],v,S,R,E,I)}function w(T){T.target.removeEventListener("dispose",w);for(let S in c){let R=c[S],E=T.target.uuid;E in R&&(R[E].dispose(),delete R[E])}}}function v1(s,t){function e(){let U=!1,tt=new fe,J=null,Mt=new fe(0,0,0,0);return{setMask:function(pt){J!==pt&&!U&&(s.colorMask(pt,pt,pt,pt),J=pt)},setLocked:function(pt){U=pt},setClear:function(pt,xt,Wt,re,ht){ht===!0&&(pt*=re,xt*=re,Wt*=re),tt.set(pt,xt,Wt,re),Mt.equals(tt)===!1&&(s.clearColor(pt,xt,Wt,re),Mt.copy(tt))},reset:function(){U=!1,J=null,Mt.set(-1,0,0,0)}}}function n(){let U=!1,tt=!1,J=null,Mt=null,pt=null;return{setReversed:function(xt){if(tt!==xt){let Wt=t.get("EXT_clip_control");xt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),tt=xt;let re=pt;pt=null,this.setClear(re)}},getReversed:function(){return tt},setTest:function(xt){xt?wt(s.DEPTH_TEST):Vt(s.DEPTH_TEST)},setMask:function(xt){J!==xt&&!U&&(s.depthMask(xt),J=xt)},setFunc:function(xt){if(tt&&(xt=H0[xt]),Mt!==xt){switch(xt){case Xa:s.depthFunc(s.NEVER);break;case qa:s.depthFunc(s.ALWAYS);break;case Ya:s.depthFunc(s.LESS);break;case Es:s.depthFunc(s.LEQUAL);break;case Za:s.depthFunc(s.EQUAL);break;case $a:s.depthFunc(s.GEQUAL);break;case Ja:s.depthFunc(s.GREATER);break;case Ka:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Mt=xt}},setLocked:function(xt){U=xt},setClear:function(xt){pt!==xt&&(pt=xt,tt&&(xt=1-xt),s.clearDepth(xt))},reset:function(){U=!1,J=null,Mt=null,pt=null,tt=!1}}}function i(){let U=!1,tt=null,J=null,Mt=null,pt=null,xt=null,Wt=null,re=null,ht=null;return{setTest:function(Xt){U||(Xt?wt(s.STENCIL_TEST):Vt(s.STENCIL_TEST))},setMask:function(Xt){tt!==Xt&&!U&&(s.stencilMask(Xt),tt=Xt)},setFunc:function(Xt,ne,Rt){(J!==Xt||Mt!==ne||pt!==Rt)&&(s.stencilFunc(Xt,ne,Rt),J=Xt,Mt=ne,pt=Rt)},setOp:function(Xt,ne,Rt){(xt!==Xt||Wt!==ne||re!==Rt)&&(s.stencilOp(Xt,ne,Rt),xt=Xt,Wt=ne,re=Rt)},setLocked:function(Xt){U=Xt},setClear:function(Xt){ht!==Xt&&(s.clearStencil(Xt),ht=Xt)},reset:function(){U=!1,tt=null,J=null,Mt=null,pt=null,xt=null,Wt=null,re=null,ht=null}}}let r=new e,a=new n,o=new i,l={},c=new WeakMap,h={},u={},d={},p=new WeakMap,f=[],_=null,m=!1,g=null,x=null,y=null,M=null,w=null,T=null,v=null,S=new gt(0,0,0),R=0,E=!1,I=null,N=null,z=null,D=null,O=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,st=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=st>=1):X.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=st>=2);let $=null,nt={},At=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),G=new fe().fromArray(At),lt=new fe().fromArray(at);function vt(U,tt,J,Mt){let pt=new Uint8Array(4),xt=s.createTexture();s.bindTexture(U,xt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<J;Wt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(tt,0,s.RGBA,1,1,Mt,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(tt+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return xt}let kt={};kt[s.TEXTURE_2D]=vt(s.TEXTURE_2D,s.TEXTURE_2D,1),kt[s.TEXTURE_CUBE_MAP]=vt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),kt[s.TEXTURE_2D_ARRAY]=vt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),kt[s.TEXTURE_3D]=vt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),wt(s.DEPTH_TEST),a.setFunc(Es),Nt(!1),ft(su),wt(s.CULL_FACE),mt(si);function wt(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Vt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function xe(U,tt){return d[U]!==tt?(s.bindFramebuffer(U,tt),d[U]=tt,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=tt),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=tt),!0):!1}function Pt(U,tt){let J=f,Mt=!1;if(U){J=p.get(tt),J===void 0&&(J=[],p.set(tt,J));let pt=U.textures;if(J.length!==pt.length||J[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,Wt=pt.length;xt<Wt;xt++)J[xt]=s.COLOR_ATTACHMENT0+xt;J.length=pt.length,Mt=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,Mt=!0);Mt&&s.drawBuffers(J)}function ee(U){return _!==U?(s.useProgram(U),_=U,!0):!1}let oe={[es]:s.FUNC_ADD,[$d]:s.FUNC_SUBTRACT,[Jd]:s.FUNC_REVERSE_SUBTRACT};oe[Kd]=s.MIN,oe[Qd]=s.MAX;let it={[jd]:s.ZERO,[tf]:s.ONE,[ef]:s.SRC_COLOR,[ou]:s.SRC_ALPHA,[lf]:s.SRC_ALPHA_SATURATE,[af]:s.DST_COLOR,[sf]:s.DST_ALPHA,[nf]:s.ONE_MINUS_SRC_COLOR,[lu]:s.ONE_MINUS_SRC_ALPHA,[of]:s.ONE_MINUS_DST_COLOR,[rf]:s.ONE_MINUS_DST_ALPHA,[cf]:s.CONSTANT_COLOR,[hf]:s.ONE_MINUS_CONSTANT_COLOR,[uf]:s.CONSTANT_ALPHA,[df]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(U,tt,J,Mt,pt,xt,Wt,re,ht,Xt){if(U===si){m===!0&&(Vt(s.BLEND),m=!1);return}if(m===!1&&(wt(s.BLEND),m=!0),U!==Zd){if(U!==g||Xt!==E){if((x!==es||w!==es)&&(s.blendEquation(s.FUNC_ADD),x=es,w=es),Xt)switch(U){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case aa:s.blendFunc(s.ONE,s.ONE);break;case ru:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case au:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",U);break}else switch(U){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case aa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ru:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case au:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",U);break}y=null,M=null,T=null,v=null,S.set(0,0,0),R=0,g=U,E=Xt}return}pt=pt||tt,xt=xt||J,Wt=Wt||Mt,(tt!==x||pt!==w)&&(s.blendEquationSeparate(oe[tt],oe[pt]),x=tt,w=pt),(J!==y||Mt!==M||xt!==T||Wt!==v)&&(s.blendFuncSeparate(it[J],it[Mt],it[xt],it[Wt]),y=J,M=Mt,T=xt,v=Wt),(re.equals(S)===!1||ht!==R)&&(s.blendColor(re.r,re.g,re.b,ht),S.copy(re),R=ht),g=U,E=!1}function dt(U,tt){U.side===$n?Vt(s.CULL_FACE):wt(s.CULL_FACE);let J=U.side===rn;tt&&(J=!J),Nt(J),U.blending===Ys&&U.transparent===!1?mt(si):mt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let Mt=U.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Bt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?wt(s.SAMPLE_ALPHA_TO_COVERAGE):Vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(U){I!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),I=U)}function ft(U){U!==Xd?(wt(s.CULL_FACE),U!==N&&(U===su?s.cullFace(s.BACK):U===qd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Vt(s.CULL_FACE),N=U}function Qt(U){U!==z&&(V&&s.lineWidth(U),z=U)}function Bt(U,tt,J){U?(wt(s.POLYGON_OFFSET_FILL),(D!==tt||O!==J)&&(D=tt,O=J,a.getReversed()&&(tt=-tt,J=-J),s.polygonOffset(tt,J))):Vt(s.POLYGON_OFFSET_FILL)}function se(U){U?wt(s.SCISSOR_TEST):Vt(s.SCISSOR_TEST)}function te(U){U===void 0&&(U=s.TEXTURE0+q-1),$!==U&&(s.activeTexture(U),$=U)}function k(U,tt,J){J===void 0&&($===null?J=s.TEXTURE0+q-1:J=$);let Mt=nt[J];Mt===void 0&&(Mt={type:void 0,texture:void 0},nt[J]=Mt),(Mt.type!==U||Mt.texture!==tt)&&($!==J&&(s.activeTexture(J),$=J),s.bindTexture(U,tt||kt[U]),Mt.type=U,Mt.texture=tt)}function P(){let U=nt[$];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{s.compressedTexImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function ct(){try{s.compressedTexImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function Ht(){try{s.texSubImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function rt(){try{s.texSubImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function qt(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function Ct(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function Dt(){try{s.texStorage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function C(){try{s.texStorage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function b(){try{s.texImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function B(){try{s.texImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function ot(U){return u[U]!==void 0?u[U]:s.getParameter(U)}function j(U,tt){u[U]!==tt&&(s.pixelStorei(U,tt),u[U]=tt)}function ut(U){G.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),G.copy(U))}function _t(U){lt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),lt.copy(U))}function K(U,tt){let J=c.get(tt);J===void 0&&(J=new WeakMap,c.set(tt,J));let Mt=J.get(U);Mt===void 0&&(Mt=s.getUniformBlockIndex(tt,U.name),s.uniformBlockBinding(tt,Mt,Mt),J.set(U,Mt))}function Q(U,tt,J){let pt=c.get(tt).get(U);l[pt]!==J&&(s.bindBufferBase(s.UNIFORM_BUFFER,pt,J),l[pt]=J)}function yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},$=null,nt={},d={},l={},p=new WeakMap,f=[],_=null,m=!1,g=null,x=null,y=null,M=null,w=null,T=null,v=null,S=new gt(0,0,0),R=0,E=!1,I=null,N=null,z=null,D=null,O=null,G.set(0,0,s.canvas.width,s.canvas.height),lt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:wt,disable:Vt,bindFramebuffer:xe,drawBuffers:Pt,useProgram:ee,setBlending:mt,setMaterial:dt,setFlipSided:Nt,setCullFace:ft,setLineWidth:Qt,setPolygonOffset:Bt,setScissorTest:se,activeTexture:te,bindTexture:k,unbindTexture:P,compressedTexImage2D:Z,compressedTexImage3D:ct,texImage2D:b,texImage3D:B,pixelStorei:j,getParameter:ot,updateUBOMapping:K,uniformBlockBinding:Q,texStorage2D:Dt,texStorage3D:C,texSubImage2D:Ht,texSubImage3D:rt,compressedTexSubImage2D:qt,compressedTexSubImage3D:Ct,scissor:ut,viewport:_t,reset:yt}}function y1(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap,u=new Set,d,p=new WeakMap,f=new Set,_=new FinalizationRegistry(C=>f.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return m?new OffscreenCanvas(C,b):Pr("canvas")}function x(C,b,B){let ot=1,j=Dt(C);if((j.width>B||j.height>B)&&(ot=B/Math.max(j.width,j.height)),ot<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ut=Math.floor(ot*j.width),_t=Math.floor(ot*j.height);d===void 0&&(d=g(ut,_t));let K=b?g(ut,_t):d;return K.width=ut,K.height=_t,K.getContext("2d").drawImage(C,0,0,ut,_t),Tt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ut+"x"+_t+")."),K}else return"data"in C&&Tt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function y(C){return C.generateMipmaps}function M(C){s.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(C,b,B,ot,j,ut=!1){if(C!==null){if(s[C]!==void 0)return s[C];Tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let _t;ot&&(_t=t.get("EXT_texture_norm16"),_t||Tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=b;if(b===s.RED&&(B===s.FLOAT&&(K=s.R32F),B===s.HALF_FLOAT&&(K=s.R16F),B===s.UNSIGNED_BYTE&&(K=s.R8),B===s.UNSIGNED_SHORT&&_t&&(K=_t.R16_EXT),B===s.SHORT&&_t&&(K=_t.R16_SNORM_EXT)),b===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.R8UI),B===s.UNSIGNED_SHORT&&(K=s.R16UI),B===s.UNSIGNED_INT&&(K=s.R32UI),B===s.BYTE&&(K=s.R8I),B===s.SHORT&&(K=s.R16I),B===s.INT&&(K=s.R32I)),b===s.RG&&(B===s.FLOAT&&(K=s.RG32F),B===s.HALF_FLOAT&&(K=s.RG16F),B===s.UNSIGNED_BYTE&&(K=s.RG8),B===s.UNSIGNED_SHORT&&_t&&(K=_t.RG16_EXT),B===s.SHORT&&_t&&(K=_t.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RG8UI),B===s.UNSIGNED_SHORT&&(K=s.RG16UI),B===s.UNSIGNED_INT&&(K=s.RG32UI),B===s.BYTE&&(K=s.RG8I),B===s.SHORT&&(K=s.RG16I),B===s.INT&&(K=s.RG32I)),b===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGB8UI),B===s.UNSIGNED_SHORT&&(K=s.RGB16UI),B===s.UNSIGNED_INT&&(K=s.RGB32UI),B===s.BYTE&&(K=s.RGB8I),B===s.SHORT&&(K=s.RGB16I),B===s.INT&&(K=s.RGB32I)),b===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),B===s.UNSIGNED_INT&&(K=s.RGBA32UI),B===s.BYTE&&(K=s.RGBA8I),B===s.SHORT&&(K=s.RGBA16I),B===s.INT&&(K=s.RGBA32I)),b===s.RGB&&(B===s.UNSIGNED_SHORT&&_t&&(K=_t.RGB16_EXT),B===s.SHORT&&_t&&(K=_t.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),b===s.RGBA){let Q=ut?Rr:ae.getTransfer(j);B===s.FLOAT&&(K=s.RGBA32F),B===s.HALF_FLOAT&&(K=s.RGBA16F),B===s.UNSIGNED_BYTE&&(K=Q===ue?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&_t&&(K=_t.RGBA16_EXT),B===s.SHORT&&_t&&(K=_t.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(C,b){let B;return C?b===null||b===pn||b===ls?B=s.DEPTH24_STENCIL8:b===sn?B=s.DEPTH32F_STENCIL8:b===$s&&(B=s.DEPTH24_STENCIL8,Tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===pn||b===ls?B=s.DEPTH_COMPONENT24:b===sn?B=s.DEPTH_COMPONENT32F:b===$s&&(B=s.DEPTH_COMPONENT16),B}function S(C,b){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ie&&C.minFilter!==we?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function R(C){let b=new WeakRef(C);n.get(C).__ref=b,f.add(b),_.register(C,b,b)}function E(C){let b=n.get(C).__ref;b!==void 0&&(f.delete(b),_.unregister(b))}function I(C){z(C.target)}function N(C){D(C.target)}function z(C){C.removeEventListener("dispose",I),E(C),q(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function D(C){C.removeEventListener("dispose",N),E(C),st(C)}function O(){for(let C of f){let b=C.deref();b!==void 0&&(b.isRenderTarget===!0?D(b):z(b))}f.clear(),u.clear()}function q(C){let b=n.get(C);if(b.__webglInit===void 0)return;let B=C.source,ot=p.get(B);if(ot){let j=ot[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&V(C),Object.keys(ot).length===0&&p.delete(B)}n.remove(C)}function V(C){let b=n.get(C);s.deleteTexture(b.__webglTexture);let B=C.source,ot=p.get(B);delete ot[b.__cacheKey],a.memory.textures--}function st(C){let b=n.get(C);b.__depthDisposeCallback&&b.__depthDisposeCallback();let B=C.depthTexture;if(B&&B.renderTarget===C&&z(B),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let ut=0;ut<b.__webglFramebuffer[j].length;ut++)s.deleteFramebuffer(b.__webglFramebuffer[j][ut]);else s.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)s.deleteFramebuffer(b.__webglFramebuffer[j]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ot=C.textures;for(let j=0,ut=ot.length;j<ut;j++){let _t=n.get(ot[j]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(ot[j])}n.remove(C)}let X=0;function $(){X=0}function nt(){return X}function At(C){X=C}function at(){let C=X;return C>=i.maxTextures&&Tt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),X+=1,C}function G(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.mipmapsAutoUpdate),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function lt(C,b){let B=n.get(C);if(C.isVideoTexture&&qt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let ot=C.image;if(ot===null)Tt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Tt("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(B,C,b);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+b)}function vt(C,b){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){dt(B,C,b);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+b)}function kt(C,b){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){dt(B,C,b);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+b)}function wt(C,b){let B=n.get(C);if(C.version>0&&B.__version!==C.version){Nt(B,C,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+b)}let Vt={[wr]:s.REPEAT,[cn]:s.CLAMP_TO_EDGE,[Tr]:s.MIRRORED_REPEAT},xe={[Ie]:s.NEAREST,[cu]:s.NEAREST_MIPMAP_NEAREST,[Zs]:s.NEAREST_MIPMAP_LINEAR,[we]:s.LINEAR,[ua]:s.LINEAR_MIPMAP_NEAREST,[On]:s.LINEAR_MIPMAP_LINEAR},Pt={[Tf]:s.NEVER,[vu]:s.ALWAYS,[Af]:s.LESS,[_u]:s.LEQUAL,[Ef]:s.EQUAL,[xu]:s.GEQUAL,[Cf]:s.GREATER,[Rf]:s.NOTEQUAL};function ee(C,b){if(b.type===sn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===we||b.magFilter===ua||b.magFilter===Zs||b.magFilter===On||b.minFilter===we||b.minFilter===ua||b.minFilter===Zs||b.minFilter===On)&&Tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Vt[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Vt[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Vt[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,xe[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,xe[b.minFilter]),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Pt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ie||b.minFilter!==Zs&&b.minFilter!==On||b.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function oe(C,b){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",I),R(b));let ot=b.source,j=p.get(ot);j===void 0&&(j={},p.set(ot,j));let ut=G(b);if(ut!==C.__cacheKey){j[ut]===void 0&&(j[ut]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[ut].usedTimes++;let _t=j[C.__cacheKey];_t!==void 0&&(j[C.__cacheKey].usedTimes--,_t.usedTimes===0&&V(b)),C.__cacheKey=ut,C.__webglTexture=j[ut].texture}return B}function it(C,b,B){return Math.floor(Math.floor(C/B)/b)}function mt(C,b,B,ot){let ut=C.updateRanges;if(ut.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,B,ot,b.data);else{ut.sort((U,tt)=>U.start-tt.start);let _t=0;for(let U=1;U<ut.length;U++){let tt=ut[_t],J=ut[U],Mt=tt.start+tt.count,pt=it(J.start,b.width,4),xt=it(tt.start,b.width,4);J.start<=Mt+1&&pt===xt&&it(J.start+J.count-1,b.width,4)===pt?tt.count=Math.max(tt.count,J.start+J.count-tt.start):(++_t,ut[_t]=J)}ut.length=_t+1;let K=e.getParameter(s.UNPACK_ROW_LENGTH),Q=e.getParameter(s.UNPACK_SKIP_PIXELS),yt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let U=0,tt=ut.length;U<tt;U++){let J=ut[U],Mt=Math.floor(J.start/4),pt=Math.ceil(J.count/4),xt=Mt%b.width,Wt=Math.floor(Mt/b.width),re=pt,ht=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Wt),e.texSubImage2D(s.TEXTURE_2D,0,xt,Wt,re,ht,B,ot,b.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,K),e.pixelStorei(s.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(s.UNPACK_SKIP_ROWS,yt)}}function dt(C,b,B){let ot=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ot=s.TEXTURE_3D);let j=oe(C,b),ut=b.source;e.bindTexture(ot,C.__webglTexture,s.TEXTURE0+B);let _t=n.get(ut);if(ut.version!==_t.__version||j===!0){if(e.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ht=ae.getPrimaries(ae.workingColorSpace),Xt=b.colorSpace===ci?null:ae.getPrimaries(b.colorSpace),ne=b.colorSpace===ci||ht===Xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let Q=x(b.image,!1,i.maxTextureSize);Q=Ct(b,Q);let yt=r.convert(b.format,b.colorSpace),U=r.convert(b.type),tt=T(b.internalFormat,yt,U,b.normalized,b.colorSpace,b.isVideoTexture);ee(ot,b);let J,Mt=b.mipmaps,pt=b.isVideoTexture!==!0,xt=_t.__version===void 0||j===!0,Wt=ut.dataReady,re=S(b,Q);if(b.isDepthTexture)tt=v(b.format===oi,b.type),xt&&(pt?e.texStorage2D(s.TEXTURE_2D,1,tt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,tt,Q.width,Q.height,0,yt,U,null));else if(b.isDataTexture)if(Mt.length>0){pt&&xt&&e.texStorage2D(s.TEXTURE_2D,re,tt,Mt[0].width,Mt[0].height);for(let ht=0,Xt=Mt.length;ht<Xt;ht++)J=Mt[ht],pt?Wt&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,J.width,J.height,yt,U,J.data):e.texImage2D(s.TEXTURE_2D,ht,tt,J.width,J.height,0,yt,U,J.data);b.generateMipmaps=!1}else pt?(xt&&e.texStorage2D(s.TEXTURE_2D,re,tt,Q.width,Q.height),Wt&&mt(b,Q,yt,U)):e.texImage2D(s.TEXTURE_2D,0,tt,Q.width,Q.height,0,yt,U,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){pt&&xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,re,tt,Mt[0].width,Mt[0].height,Q.depth);for(let ht=0,Xt=Mt.length;ht<Xt;ht++)if(J=Mt[ht],b.format!==un)if(yt!==null)if(pt){if(Wt)if(b.layerUpdates.size>0){let ne=Su(J.width,J.height,b.format,b.type);for(let Rt of b.layerUpdates){let ve=J.data.subarray(Rt*ne/J.data.BYTES_PER_ELEMENT,(Rt+1)*ne/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,Rt,J.width,J.height,1,yt,ve)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,J.width,J.height,Q.depth,yt,J.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,tt,J.width,J.height,Q.depth,0,J.data,0,0);else Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?Wt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,J.width,J.height,Q.depth,yt,U,J.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ht,tt,J.width,J.height,Q.depth,0,yt,U,J.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{pt&&xt&&e.texStorage2D(s.TEXTURE_2D,re,tt,Mt[0].width,Mt[0].height);for(let ht=0,Xt=Mt.length;ht<Xt;ht++)J=Mt[ht],b.format!==un?yt!==null?pt?Wt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,J.width,J.height,yt,J.data):e.compressedTexImage2D(s.TEXTURE_2D,ht,tt,J.width,J.height,0,J.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?Wt&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,J.width,J.height,yt,U,J.data):e.texImage2D(s.TEXTURE_2D,ht,tt,J.width,J.height,0,yt,U,J.data)}else if(b.isDataArrayTexture)if(pt){if(xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,re,tt,Q.width,Q.height,Q.depth),Wt)if(b.layerUpdates.size>0){let ht=Su(Q.width,Q.height,b.format,b.type);for(let Xt of b.layerUpdates){let ne=Q.data.subarray(Xt*ht/Q.data.BYTES_PER_ELEMENT,(Xt+1)*ht/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Xt,Q.width,Q.height,1,yt,U,ne)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,yt,U,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,Q.width,Q.height,Q.depth,0,yt,U,Q.data);else if(b.isData3DTexture)pt?(xt&&e.texStorage3D(s.TEXTURE_3D,re,tt,Q.width,Q.height,Q.depth),Wt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,yt,U,Q.data)):e.texImage3D(s.TEXTURE_3D,0,tt,Q.width,Q.height,Q.depth,0,yt,U,Q.data);else if(b.isFramebufferTexture){if(xt)if(pt)e.texStorage2D(s.TEXTURE_2D,re,tt,Q.width,Q.height);else{let ht=Q.width,Xt=Q.height;for(let ne=0;ne<re;ne++)e.texImage2D(s.TEXTURE_2D,ne,tt,ht,Xt,0,yt,U,null),ht>>=1,Xt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let ht=s.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),Q.parentNode!==ht){ht.appendChild(Q),u.add(b),ht.onpaint=Xt=>{let ne=Xt.changedElements;for(let Rt of u)ne.includes(Rt.image)&&(Rt.needsUpdate=!0)},ht.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Q);else{let ne=s.RGBA,Rt=s.RGBA,ve=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ne,Rt,ve,Q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(pt&&xt){let ht=Dt(Mt[0]);e.texStorage2D(s.TEXTURE_2D,re,tt,ht.width,ht.height)}for(let ht=0,Xt=Mt.length;ht<Xt;ht++)J=Mt[ht],pt?Wt&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,yt,U,J):e.texImage2D(s.TEXTURE_2D,ht,tt,yt,U,J);b.generateMipmaps=!1}else if(pt){if(xt){let ht=Dt(Q);e.texStorage2D(s.TEXTURE_2D,re,tt,ht.width,ht.height)}Wt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,U,Q)}else e.texImage2D(s.TEXTURE_2D,0,tt,yt,U,Q);y(b)&&b.mipmapsAutoUpdate===!0&&M(ot),_t.__version=ut.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Nt(C,b,B){if(b.image.length!==6)return;let ot=oe(C,b),j=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+B);let ut=n.get(j);if(j.version!==ut.__version||ot===!0){e.activeTexture(s.TEXTURE0+B);let _t=ae.getPrimaries(ae.workingColorSpace),K=b.colorSpace===ci?null:ae.getPrimaries(b.colorSpace),Q=b.colorSpace===ci||_t===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let yt=b.isCompressedTexture||b.image[0].isCompressedTexture,U=b.image[0]&&b.image[0].isDataTexture,tt=[];for(let Rt=0;Rt<6;Rt++)!yt&&!U?tt[Rt]=x(b.image[Rt],!0,i.maxCubemapSize):tt[Rt]=U?b.image[Rt].image:b.image[Rt],tt[Rt]=Ct(b,tt[Rt]);let J=tt[0],Mt=r.convert(b.format,b.colorSpace),pt=r.convert(b.type),xt=T(b.internalFormat,Mt,pt,b.normalized,b.colorSpace),Wt=b.isVideoTexture!==!0,re=ut.__version===void 0||ot===!0,ht=j.dataReady,Xt=S(b,J);ee(s.TEXTURE_CUBE_MAP,b);let ne;if(b.isDepthTexture){if(xt=v(b.format===oi,b.type),re)if(Wt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,xt,J.width,J.height);else for(let Rt=0;Rt<6;Rt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,xt,J.width,J.height,0,Mt,pt,null)}else if(yt){Wt&&re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Xt,xt,J.width,J.height);for(let Rt=0;Rt<6;Rt++){ne=tt[Rt].mipmaps;for(let ve=0;ve<ne.length;ve++){let Ve=ne[ve];b.format!==un?Mt!==null?Wt?ht&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ve,0,0,Ve.width,Ve.height,Mt,Ve.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ve,xt,Ve.width,Ve.height,0,Ve.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ve,0,0,Ve.width,Ve.height,Mt,pt,Ve.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ve,xt,Ve.width,Ve.height,0,Mt,pt,Ve.data)}}}else{if(ne=b.mipmaps,Wt&&re){ne.length>0&&Xt++;let Rt=Dt(tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Xt,xt,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(U){Wt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,tt[Rt].width,tt[Rt].height,Mt,pt,tt[Rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,xt,tt[Rt].width,tt[Rt].height,0,Mt,pt,tt[Rt].data);for(let ve=0;ve<ne.length;ve++){let Ni=ne[ve].image[Rt].image;Wt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ve+1,0,0,Ni.width,Ni.height,Mt,pt,Ni.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ve+1,xt,Ni.width,Ni.height,0,Mt,pt,Ni.data)}}else{Wt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Mt,pt,tt[Rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,xt,Mt,pt,tt[Rt]);for(let ve=0;ve<ne.length;ve++){let Ve=ne[ve];Wt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ve+1,0,0,Mt,pt,Ve.image[Rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ve+1,xt,Mt,pt,Ve.image[Rt])}}}y(b)&&b.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),ut.__version=j.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ft(C,b,B,ot,j,ut){let _t=r.convert(B.format,B.colorSpace),K=r.convert(B.type),Q=T(B.internalFormat,_t,K,B.normalized,B.colorSpace),yt=n.get(b),U=n.get(B);if(U.__renderTarget=b,!yt.__hasExternalTextures){let tt=Math.max(1,b.width>>ut),J=Math.max(1,b.height>>ut);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,ut,Q,tt,J,b.depth,0,_t,K,null):e.texImage2D(j,ut,Q,tt,J,0,_t,K,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),rt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,j,U.__webglTexture,0,Ht(b)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,j,U.__webglTexture,ut),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Qt(C,b,B){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer){let ot=b.depthTexture,j=ot&&ot.isDepthTexture?ot.type:null,ut=v(b.stencilBuffer,j),_t=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;rt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(b),ut,b.width,b.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(b),ut,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ut,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,C)}else{let ot=b.textures;for(let j=0;j<ot.length;j++){let ut=ot[j],_t=r.convert(ut.format,ut.colorSpace),K=r.convert(ut.type),Q=T(ut.internalFormat,_t,K,ut.normalized,ut.colorSpace);rt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(b),Q,b.width,b.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(b),Q,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Q,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Bt(C,b,B){let ot=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(b.depthTexture);j.__renderTarget=b;let ut=ot?b.depthTexture.image[0]:b.depthTexture.image;(!j.__webglTexture||ut.width!==b.width||ut.height!==b.height)&&(ut.width=b.width,ut.height=b.height,b.depthTexture.needsUpdate=!0),ot?wt(b.depthTexture,0):lt(b.depthTexture,0);let _t=j.__webglTexture,K=Ht(b),Q=ot?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,yt=b.depthTexture.format===oi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===ti)rt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,Q,_t,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,yt,Q,_t,0);else if(b.depthTexture.format===oi)rt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,Q,_t,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,yt,Q,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(C){let b=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let ot=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ot){let j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ot.removeEventListener("dispose",j)};ot.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=ot}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let ot=0;ot<6;ot++)Bt(b.__webglFramebuffer[ot],C,ot);else C.texture.mipmaps.length>0?Bt(b.__webglFramebuffer[0],C,0):Bt(b.__webglFramebuffer,C,0);else if(B){b.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ot]),b.__webglDepthbuffer[ot]===void 0)b.__webglDepthbuffer[ot]=s.createRenderbuffer(),Qt(b.__webglDepthbuffer[ot],C,!1);else{let j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer[ot];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ut)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Qt(b.__webglDepthbuffer,C,!1);else{let j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ut)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function te(C,b,B){let ot=n.get(C);b!==void 0&&ft(ot.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&se(C)}function k(C){let b=C.texture,B=n.get(C),ot=n.get(b);C.addEventListener("dispose",N),R(C);let j=C.textures,ut=C.isWebGLCubeRenderTarget===!0,_t=j.length>1;if(_t||(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=b.version,a.memory.textures++),ut){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(b.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let Q=0;Q<b.mipmaps.length;Q++)B.__webglFramebuffer[K][Q]=s.createFramebuffer()}else B.__webglFramebuffer[K]=s.createFramebuffer()}else{if(b.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<b.mipmaps.length;K++)B.__webglFramebuffer[K]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(_t)for(let K=0,Q=j.length;K<Q;K++){let yt=n.get(j[K]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&rt(C)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){let Q=j[K];B.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let yt=r.convert(Q.format,Q.colorSpace),U=r.convert(Q.type),tt=T(Q.internalFormat,yt,U,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),J=Ht(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,J,tt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,B.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Qt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),ee(s.TEXTURE_CUBE_MAP,b);for(let K=0;K<6;K++)if(b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)ft(B.__webglFramebuffer[K][Q],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else ft(B.__webglFramebuffer[K],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);y(b)?M(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let K=0,Q=j.length;K<Q;K++){let yt=j[K],U=n.get(yt),tt=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(tt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,U.__webglTexture),ee(tt,yt),ft(B.__webglFramebuffer,C,yt,s.COLOR_ATTACHMENT0+K,tt,0),y(yt)&&M(tt)}e.unbindTexture()}else{let K=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,ot.__webglTexture),ee(K,b),b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)ft(B.__webglFramebuffer[Q],C,b,s.COLOR_ATTACHMENT0,K,Q);else ft(B.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,K,0);y(b)?M(K):b.mipmaps.length>0&&s.texParameteri(K,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&se(C)}function P(C){let b=C.textures;for(let B=0,ot=b.length;B<ot;B++){let j=b[B];if(y(j)&&j.mipmapsAutoUpdate===!0){let ut=w(C),_t=n.get(j).__webglTexture;e.bindTexture(ut,_t),M(ut),e.unbindTexture()}}}let Z=[];function ct(C){if(C.samples>0){if(rt(C)===!1){let b=C.textures,B=C.width,ot=C.height,j=s.COLOR_BUFFER_BIT,ut=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=n.get(C),K=b.length>1;if(K)for(let yt=0;yt<b.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let yt=0;yt<b.length;yt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[yt]);let U=n.get(b[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,U,0)}s.blitFramebuffer(0,0,B,ot,0,0,B,ot,j,s.NEAREST),l===!0&&(Z.length=0,Z.push(s.COLOR_ATTACHMENT0+yt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Z.push(ut),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let yt=0;yt<b.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,_t.__webglColorRenderbuffer[yt]);let U=n.get(b[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,U,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ht(C){return Math.min(i.maxSamples,C.samples)}function rt(C){let b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function qt(C){let b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Ct(C,b){let B=C.colorSpace,ot=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Cr&&B!==ci&&(ae.getTransfer(B)===ue?(ot!==un||j!==fn)&&Tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",B)),b}function Dt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=at,this.resetTextureUnits=$,this.getTextureUnits=nt,this.setTextureUnits=At,this.setTexture2D=lt,this.setTexture2DArray=vt,this.setTexture3D=kt,this.setTextureCube=wt,this.rebindTextures=te,this.setupRenderTarget=k,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=rt,this.dispose=O}function Ig(s,t){function e(n,i=ci){let r,a=ae.getTransfer(i);if(n===fn)return s.UNSIGNED_BYTE;if(n===rl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===al)return s.UNSIGNED_SHORT_5_5_5_1;if(n===du)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===fu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===hu)return s.BYTE;if(n===uu)return s.SHORT;if(n===$s)return s.UNSIGNED_SHORT;if(n===sl)return s.INT;if(n===pn)return s.UNSIGNED_INT;if(n===sn)return s.FLOAT;if(n===ze)return s.HALF_FLOAT;if(n===pu)return s.ALPHA;if(n===mu)return s.RGB;if(n===un)return s.RGBA;if(n===ti)return s.DEPTH_COMPONENT;if(n===oi)return s.DEPTH_STENCIL;if(n===ol)return s.RED;if(n===da)return s.RED_INTEGER;if(n===Li)return s.RG;if(n===ll)return s.RG_INTEGER;if(n===cl)return s.RGBA_INTEGER;if(n===fa||n===pa||n===ma||n===ga)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hl||n===ul||n===dl||n===fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pl||n===ml||n===gl||n===_l||n===xl||n===_a||n===vl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pl||n===ml)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===_l)return r.COMPRESSED_R11_EAC;if(n===xl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_a)return r.COMPRESSED_RG11_EAC;if(n===vl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yl||n===Ml||n===Sl||n===bl||n===wl||n===Tl||n===Al||n===El||n===Cl||n===Rl||n===Pl||n===Il||n===Ll||n===Dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ml)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Al)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===El)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Il)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nl||n===Ul||n===Fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Nl)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ol||n===Bl||n===xa||n===zl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ol)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}function w1(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Uf(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,y,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&p(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),f(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,x,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===rn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===rn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=t.get(g),y=x.envMap,M=x.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(b1.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Lg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=y*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,x){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===rn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let x=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function T1(s,t,e,n){let i={},r={};function a(x,y){let M=y.program;n.uniformBlockBinding(x,M,i[x.id])}function o(x,y){let M=i[x.id];M===void 0&&(f(x),M=l(x),i[x.id]=M,x.addEventListener("dispose",m));let w=y.program;n.updateUBOMapping(x,w);let T=t.render.frame;r[x.id]!==T&&(c(x),r[x.id]=T)}function l(x){let y=s.createBuffer(),M=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,M,w),s.bindBuffer(s.UNIFORM_BUFFER,null),y}function c(x){let y=i[x.id],M=x.uniforms,w=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,v=M.length;T<v;T++){let S=M[T];if(Array.isArray(S))for(let R=0,E=S.length;R<E;R++)h(S[R],T,R,w);else h(S,T,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(x,y,M,w){if(d(x,y,M,w)===!0){let T=x.__offset,v=x.value;if(Array.isArray(v)){let S=0;for(let R=0;R<v.length;R++){let E=v[R],I=_(E,!0);u(E,x.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,x.__data)}}function u(x,y,M){typeof x=="number"||typeof x=="boolean"?y[M]=x:x.isMatrix3?(y[M]=x.elements[0],y[M+1]=x.elements[1],y[M+2]=x.elements[2],y[M+3]=0,y[M+4]=x.elements[3],y[M+5]=x.elements[4],y[M+6]=x.elements[5],y[M+7]=0,y[M+8]=x.elements[6],y[M+9]=x.elements[7],y[M+10]=x.elements[8],y[M+11]=0):ArrayBuffer.isView(x)?y.set(x.subarray(0,y.length-M),M):x.toArray(y,M)}function d(x,y,M,w){let T=x.value,v=y+"_"+M;if(Array.isArray(T)){w[v]===void 0&&(w[v]=[]);let S=w[v],R=!1;for(let E=0;E<T.length;E++)p(T[E],S,E)===!0&&(R=!0);return R}return p(T,w,v)}function p(x,y,M){if(y[M]===void 0)return typeof x=="number"||typeof x=="boolean"?y[M]=x:ArrayBuffer.isView(x)?y[M]=x.slice():y[M]=x.clone(),!0;{let w=y[M];if(typeof x=="number"||typeof x=="boolean"){if(w!==x)return y[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(w.equals(x)===!1)return w.copy(x),!0}}return!1}function f(x){let y=x.uniforms,M=0,w=16;for(let v=0,S=y.length;v<S;v++){let R=Array.isArray(y[v])?y[v]:[y[v]];for(let E=0,I=R.length;E<I;E++){let N=R[E],z=Array.isArray(N.value)?N.value:[N.value],D=Array.isArray(y[v])||Array.isArray(N.value),O=M;for(let V=0,st=z.length;V<st;V++){let X=z[V],$=_(X,D),nt=M%w,At=nt%$.boundary,at=nt+At;M+=At,at!==0&&w-at<$.storage&&(M+=w-at),V===0&&(O=M),M+=$.storage}let q=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new q((M-O)/Float32Array.BYTES_PER_ELEMENT),N.__offset=O}}let T=M%w;return T>0&&(M+=w-T),x.__size=M,x.__cache={},this}function _(x,y){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=16,M.storage=48):x.isMatrix4?(M.boundary=16,M.storage=64):x.isTexture?Tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Tt("WebGLRenderer: Unsupported uniform value type.",x),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(x){let y=x.target;y.removeEventListener("dispose",m),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function g(){for(let x in i)s.deleteBuffer(i[x]);i={},r={}}return{bind:a,update:o,dispose:g}}function E1(){return ui===null&&(ui=new hn(A1,16,16,Li,ze),ui.name="DFG_LUT",ui.minFilter=we,ui.magFilter=we,ui.wrapS=cn,ui.wrapT=cn,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var Xv,qv,Yv,Zv,$v,Jv,Kv,Qv,jv,ty,ey,ny,iy,sy,ry,ay,oy,ly,cy,hy,uy,dy,fy,py,my,gy,_y,xy,vy,yy,My,Sy,by,wy,Ty,Ay,Ey,Cy,Ry,Py,Iy,Ly,Dy,Ny,Uy,Fy,Oy,By,zy,ky,Gy,Vy,Hy,Wy,Xy,qy,Yy,Zy,$y,Jy,Ky,Qy,jy,tM,eM,nM,iM,sM,rM,aM,oM,lM,cM,hM,uM,dM,fM,pM,mM,gM,_M,xM,vM,yM,MM,SM,bM,wM,TM,AM,EM,CM,RM,PM,IM,LM,DM,NM,UM,FM,OM,BM,zM,kM,GM,VM,HM,WM,XM,qM,YM,ZM,$M,JM,KM,QM,jM,tS,eS,nS,iS,sS,rS,aS,oS,lS,cS,hS,uS,dS,fS,pS,mS,gS,_S,xS,vS,yS,MS,SS,bS,ie,Et,Jn,bu,wS,Sg,ya,tg,PS,IS,bg,wg,LS,DS,NS,Ks,XS,Tg,Ag,Eg,Cg,Rg,Pg,sg,rg,ag,og,lg,Yf,Zf,$f,Xf,va,Nb,Ub,ug,zb,wu,Xb,Yb,$b,Kb,jb,n1,Kf,Qf,h1,p1,m1,g1,_1,yg,Vl,qf,M1,S1,jf,tp,b1,Lg,A1,ui,Wl,Ye=be(()=>{Wf();Wf();Xv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qv=`#ifdef USE_ALPHAHASH
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
#endif`,Yv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$v=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kv=`#ifdef USE_AOMAP
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
#endif`,Qv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jv=`#ifdef USE_BATCHING
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
#endif`,ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sy=`#ifdef USE_IRIDESCENCE
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
#endif`,ry=`#ifdef USE_BUMPMAP
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
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,py=`#define PI 3.141592653589793
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
} // validated`,my=`vec3 transformedNormal = objectNormal;
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
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",My=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sy=`#ifdef USE_ENVMAP
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
#endif`,by=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ry=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iy=`#ifdef USE_GRADIENTMAP
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
}`,Ly=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fy=`#ifdef USE_ENVMAP
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
#endif`,Oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gy=`PhysicalMaterial material;
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
#endif`,Vy=`uniform sampler2D dfgLUT;
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
}`,Hy=`
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
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qy=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$y=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ky=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tM=`#if defined( USE_POINTS_UV )
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
#endif`,eM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sM=`#if defined( USE_MORPHCOLORS )
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
#endif`,rM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aM=`#ifdef USE_MORPHTARGETS
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
#endif`,oM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fM=`#ifdef USE_NORMALMAP
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
#endif`,pM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,RM=`float getShadowMask() {
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
}`,PM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IM=`#ifdef USE_SKINNING
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
#endif`,LM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DM=`#ifdef USE_SKINNING
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
#endif`,NM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BM=`#ifdef USE_TRANSMISSION
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
#endif`,zM=`#ifdef USE_TRANSMISSION
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
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,WM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XM=`uniform sampler2D t2D;
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
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YM=`uniform float backgroundBlurriness;
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
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JM=`#include <common>
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
}`,KM=`#if DEPTH_PACKING == 3200
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
}`,QM=`#define DISTANCE
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
}`,jM=`#define DISTANCE
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
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`uniform float scale;
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
}`,iS=`uniform vec3 diffuse;
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
}`,sS=`#include <common>
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
}`,rS=`uniform vec3 diffuse;
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
}`,aS=`#define LAMBERT
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
}`,oS=`#define LAMBERT
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
}`,lS=`#define MATCAP
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
}`,cS=`#define MATCAP
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
}`,hS=`#define NORMAL
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
}`,uS=`#define NORMAL
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
}`,dS=`#define PHONG
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
}`,fS=`#define PHONG
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
}`,pS=`#define STANDARD
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
}`,mS=`#define STANDARD
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
}`,gS=`#define TOON
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
}`,_S=`#define TOON
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
}`,xS=`uniform float size;
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
}`,vS=`uniform vec3 diffuse;
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
}`,yS=`#include <common>
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
}`,MS=`uniform vec3 color;
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
}`,SS=`uniform float rotation;
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
}`,bS=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:Xv,alphahash_pars_fragment:qv,alphamap_fragment:Yv,alphamap_pars_fragment:Zv,alphatest_fragment:$v,alphatest_pars_fragment:Jv,aomap_fragment:Kv,aomap_pars_fragment:Qv,batching_pars_vertex:jv,batching_vertex:ty,begin_vertex:ey,beginnormal_vertex:ny,bsdfs:iy,iridescence_fragment:sy,bumpmap_pars_fragment:ry,clipping_planes_fragment:ay,clipping_planes_pars_fragment:oy,clipping_planes_pars_vertex:ly,clipping_planes_vertex:cy,color_fragment:hy,color_pars_fragment:uy,color_pars_vertex:dy,color_vertex:fy,common:py,defaultnormal_vertex:my,displacementmap_pars_vertex:gy,displacementmap_vertex:_y,emissivemap_fragment:xy,emissivemap_pars_fragment:vy,colorspace_fragment:yy,colorspace_pars_fragment:My,envmap_fragment:Sy,envmap_common_pars_fragment:by,envmap_pars_fragment:wy,envmap_pars_vertex:Ty,envmap_physical_pars_fragment:Fy,envmap_vertex:Ay,fog_vertex:Ey,fog_pars_vertex:Cy,fog_fragment:Ry,fog_pars_fragment:Py,gradientmap_pars_fragment:Iy,lightmap_pars_fragment:Ly,lights_lambert_fragment:Dy,lights_lambert_pars_fragment:Ny,lights_pars_begin:Uy,lights_toon_fragment:Oy,lights_toon_pars_fragment:By,lights_phong_fragment:zy,lights_phong_pars_fragment:ky,lights_physical_fragment:Gy,lights_physical_pars_fragment:Vy,lights_fragment_begin:Hy,lights_fragment_maps:Wy,lights_fragment_end:Xy,lightprobes_pars_fragment:qy,logdepthbuf_fragment:Yy,logdepthbuf_pars_fragment:Zy,logdepthbuf_pars_vertex:$y,logdepthbuf_vertex:Jy,map_fragment:Ky,map_pars_fragment:Qy,map_particle_fragment:jy,map_particle_pars_fragment:tM,metalnessmap_fragment:eM,metalnessmap_pars_fragment:nM,morphinstance_vertex:iM,morphcolor_vertex:sM,morphnormal_vertex:rM,morphtarget_pars_vertex:aM,morphtarget_vertex:oM,normal_fragment_begin:lM,normal_fragment_maps:cM,normal_pars_fragment:hM,normal_pars_vertex:uM,normal_vertex:dM,normalmap_pars_fragment:fM,clearcoat_normal_fragment_begin:pM,clearcoat_normal_fragment_maps:mM,clearcoat_pars_fragment:gM,iridescence_pars_fragment:_M,opaque_fragment:xM,packing:vM,premultiplied_alpha_fragment:yM,project_vertex:MM,dithering_fragment:SM,dithering_pars_fragment:bM,roughnessmap_fragment:wM,roughnessmap_pars_fragment:TM,shadowmap_pars_fragment:AM,shadowmap_pars_vertex:EM,shadowmap_vertex:CM,shadowmask_pars_fragment:RM,skinbase_vertex:PM,skinning_pars_vertex:IM,skinning_vertex:LM,skinnormal_vertex:DM,specularmap_fragment:NM,specularmap_pars_fragment:UM,tonemapping_fragment:FM,tonemapping_pars_fragment:OM,transmission_fragment:BM,transmission_pars_fragment:zM,uv_pars_fragment:kM,uv_pars_vertex:GM,uv_vertex:VM,worldpos_vertex:HM,background_vert:WM,background_frag:XM,backgroundCube_vert:qM,backgroundCube_frag:YM,cube_vert:ZM,cube_frag:$M,depth_vert:JM,depth_frag:KM,distance_vert:QM,distance_frag:jM,equirect_vert:tS,equirect_frag:eS,linedashed_vert:nS,linedashed_frag:iS,meshbasic_vert:sS,meshbasic_frag:rS,meshlambert_vert:aS,meshlambert_frag:oS,meshmatcap_vert:lS,meshmatcap_frag:cS,meshnormal_vert:hS,meshnormal_frag:uS,meshphong_vert:dS,meshphong_frag:fS,meshphysical_vert:pS,meshphysical_frag:mS,meshtoon_vert:gS,meshtoon_frag:_S,points_vert:xS,points_frag:vS,shadow_vert:yS,shadow_frag:MS,sprite_vert:SS,sprite_frag:bS},Et={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Jn={basic:{uniforms:an([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:an([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:an([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:an([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:an([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new gt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:an([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:an([Et.points,Et.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:an([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:an([Et.common,Et.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:an([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:an([Et.sprite,Et.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:an([Et.common,Et.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:an([Et.lights,Et.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Jn.physical={uniforms:an([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};bu={r:0,b:0,g:0},wS=new Jt,Sg=new Kt;Sg.set(-1,0,0,0,1,0,0,0,1);ya=class extends Te{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Yi(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zi(5,5,5),r=new Be({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:si});r.uniforms.tEquirect.value=e;let a=new ye(i,r),o=e.minFilter;return e.minFilter===On&&(e.minFilter=we),new Ws(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},tg=256,PS=3,IS=20,bg=256,wg=16,LS=3,DS=new L,NS=new gt,Ks=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ws(1,10,null),this._boxMesh=new ye(new Zi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=DS}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,f=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(NS));let m=new Ws(n,i,h);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=f,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(tg,Lf(t))}_fromTexture(t,e){t.mapping===ai||t.mapping===os?this._setSize(t.image.length===0?tg:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=eg(t,!1,!1),n=Math.log2(t)-PS;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=eg(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ai||t.mapping===os?(this._cubemapMaterial===null&&(this._cubemapMaterial=ig()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ng()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=US(),this._integrationMaterial=FS());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/wg);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-LS)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(bg*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=OS());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};XS={[ns]:"LINEAR_TONE_MAPPING",[is]:"REINHARD_TONE_MAPPING",[ss]:"CINEON_TONE_MAPPING",[ri]:"ACES_FILMIC_TONE_MAPPING",[rs]:"AGX_TONE_MAPPING",[as]:"NEUTRAL_TONE_MAPPING",[la]:"CUSTOM_TONE_MAPPING"};Tg=new Le,Ag=new Nn(1,1),Eg=new zr(1),Cg=new Rs,Rg=new Ps,Pg=new Yi,sg=[],rg=[],ag=new Float32Array(16),og=new Float32Array(9),lg=new Float32Array(4);Yf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=db(e.type)}},Zf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lb(e.type)}},$f=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Xf=/(\w+)(\])?(\[|\.)?/g;va=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Db(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};Nb=37297,Ub=0;ug=new Kt;zb={[ns]:"Linear",[is]:"Reinhard",[ss]:"Cineon",[ri]:"ACESFilmic",[rs]:"AgX",[as]:"Neutral",[la]:"Custom"};wu=new L;Xb=/^[ \t]*#include +<([\w\d./]+)>/gm;Yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;$b={[ts]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};Kb={[os]:"ENVMAP_MODE_REFRACTION"};jb={[oa]:"ENVMAP_BLENDING_MULTIPLY",[ff]:"ENVMAP_BLENDING_MIX",[pf]:"ENVMAP_BLENDING_ADD"};n1=0,Kf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qf(t),e.set(t,n)),n}},Qf=class{constructor(t){this.id=n1++,this.code=t,this.usedTimes=0}};h1=0;p1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m1=`uniform sampler2D shadow_pass;
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
}`,g1=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],_1=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],yg=new Jt,Vl=new L,qf=new L;M1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S1=`
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

}`,jf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new kr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Be({vertexShader:M1,fragmentShader:S1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new Ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tp=class extends yn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,_=typeof XRWebGLBinding<"u",m=new jf,g={},x=e.getContextAttributes(),y=null,M=null,w=[],T=[],v=new et,S=null,R=null,E=new Ee;E.viewport=new fe;let I=new Ee;I.viewport=new fe;let N=[E,I],z=new Qo,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let lt=w[G];return lt===void 0&&(lt=new Ls,w[G]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(G){let lt=w[G];return lt===void 0&&(lt=new Ls,w[G]=lt),lt.getGripSpace()},this.getHand=function(G){let lt=w[G];return lt===void 0&&(lt=new Ls,w[G]=lt),lt.getHandSpace()};function q(G){let lt=T.indexOf(G.inputSource);if(lt===-1)return;let vt=w[lt];vt!==void 0&&(vt.update(G.inputSource,G.frame,c||a),vt.dispatchEvent({type:G.type,data:G.inputSource}))}function V(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",st);for(let G=0;G<w.length;G++){let lt=T[G];lt!==null&&(T[G]=null,w[G].disconnect(lt))}D=null,O=null,m.reset();for(let G in g)delete g[G];if(t.setRenderTarget(y),p=null,d=null,u=null,i=null,M=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(v.width,v.height,!1),R!==null){let G=R.camera;G.fov=R.fov,G.zoom=R.zoom,G.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&Tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&Tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",V),i.addEventListener("inputsourceschange",st),x.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(v),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,kt=null,wt=null;x.depth&&(wt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=x.stencil?oi:ti,kt=x.stencil?ls:pn);let Vt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Vt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Te(d.textureWidth,d.textureHeight,{format:un,type:fn,depthTexture:new Nn(d.textureWidth,d.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let vt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,vt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Te(p.framebufferWidth,p.framebufferHeight,{format:un,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(G){for(let lt=0;lt<G.removed.length;lt++){let vt=G.removed[lt],kt=T.indexOf(vt);kt>=0&&(T[kt]=null,w[kt].disconnect(vt))}for(let lt=0;lt<G.added.length;lt++){let vt=G.added[lt],kt=T.indexOf(vt);if(kt===-1){for(let Vt=0;Vt<w.length;Vt++)if(Vt>=T.length){T.push(vt),kt=Vt;break}else if(T[Vt]===null){T[Vt]=vt,kt=Vt;break}if(kt===-1)break}let wt=w[kt];wt&&wt.connect(vt)}}function X(G,lt){lt===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(lt.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;let lt=G.near,vt=G.far;m.texture!==null&&(m.depthNear>0&&(lt=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),z.near=I.near=E.near=lt,z.far=I.far=E.far=vt,(D!==z.near||O!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),D=z.near,O=z.far),z.layers.mask=G.layers.mask|6,E.layers.mask=z.layers.mask&-5,I.layers.mask=z.layers.mask&-3;let kt=G.parent,wt=z.cameras;X(z,kt);for(let Vt=0;Vt<wt.length;Vt++)X(wt[Vt],kt);z.projectionMatrix.copy(E.projectionMatrix),z.projectionMatrixInverse.copy(E.projectionMatrixInverse),R===null&&G.isPerspectiveCamera&&(R={camera:G,fov:G.fov,zoom:G.zoom}),$(G,z,kt)};function $(G,lt,vt){vt===null?G.matrix.copy(lt.matrixWorld):(G.matrix.copy(vt.matrixWorld),G.matrix.invert(),G.matrix.multiply(lt.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(lt.projectionMatrix),G.projectionMatrixInverse.copy(lt.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Cs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(G){return g[G]};let nt=null;function At(G,lt){if(h=lt.getViewerPose(c||a),f=lt,h!==null){let vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let kt=!1;vt.length!==z.cameras.length&&(z.cameras.length=0,kt=!0);for(let Pt=0;Pt<vt.length;Pt++){let ee=vt[Pt],oe=null;if(p!==null)oe=p.getViewport(ee);else{let mt=u.getViewSubImage(d,ee);oe=mt.viewport,Pt===0&&(t.setRenderTargetTextures(M,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(M))}let it=N[Pt];it===void 0&&(it=new Ee,it.layers.enable(Pt),it.viewport=new fe,N[Pt]=it),it.matrix.fromArray(ee.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(ee.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(oe.x,oe.y,oe.width,oe.height),Pt===0&&(z.matrix.copy(it.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),kt===!0&&z.cameras.push(it)}let wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let Pt=u.getDepthInformation(vt[0]);Pt&&Pt.isValid&&Pt.texture&&m.init(Pt,i.renderState)}if(wt&&wt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let Pt=0;Pt<vt.length;Pt++){let ee=vt[Pt].camera;if(ee){let oe=g[ee];oe||(oe=new kr,g[ee]=oe);let it=u.getCameraImage(ee);oe.sourceTexture=it}}}}for(let vt=0;vt<w.length;vt++){let kt=T[vt],wt=w[vt];kt!==null&&wt!==void 0&&wt.update(kt,lt,c||a)}nt&&nt(G,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),f=null}let at=new Mg;at.setAnimationLoop(At),this.setAnimationLoop=function(G){nt=G},this.dispose=function(){}}},b1=new Jt,Lg=new Kt;Lg.set(-1,0,0,0,1,0,0,0,1);A1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;Wl=class{constructor(t={}){let{canvas:e=Pf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=fn}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let _=p,m=new Set([cl,ll,da]),g=new Set([fn,pn,$s,ls,rl,al]),x=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},w=null,T=null,v=[],S=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,I=!1,N=null,z=null,D=null,O=null;this._outputColorSpace=$e;let q=0,V=0,st=null,X=-1,$=null,nt=new fe,At=new fe,at=null,G=new gt(0),lt=0,vt=e.width,kt=e.height,wt=1,Vt=null,xe=null,Pt=new fe(0,0,vt,kt),ee=new fe(0,0,vt,kt),oe=!1,it=new ei,mt=new Or,dt=!1,Nt=!1,ft=new Jt,Qt=new L,Bt=new fe,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function k(){return st===null?wt:1}let P=n;function Z(A,F){return e.getContext(A,F)}let ct,Ht,rt,qt,Ct,Dt,C,b,B,ot,j,ut,_t,K,Q,yt,U,tt,J,Mt,pt,xt,Wt;try{let A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",ne,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),P===null){let F="webgl2";if(P=Z(F,A),P===null)throw Z(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}re()}catch(A){throw e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Gt("WebGLRenderer: "+A.message),A}function re(){ct=new zS(P),ct.init(),pt=new Ig(P,ct),Ht=new CS(P,ct,t,pt),rt=new v1(P,ct),Ht.reversedDepthBuffer&&d&&rt.buffers.depth.setReversed(!0),z=P.createFramebuffer(),D=P.createFramebuffer(),O=P.createFramebuffer(),qt=new VS(P),Ct=new r1,Dt=new y1(P,ct,rt,Ct,Ht,pt,qt),C=new BS(E),b=new Wv(P),xt=new AS(P,b),B=new kS(P,b,qt,xt),ot=new WS(P,B,b,xt,qt),tt=new HS(P,Ht,Dt),Q=new RS(Ct),j=new s1(E,C,ct,Ht,xt,Q),ut=new w1(E,Ct),_t=new o1,K=new f1(ct),U=new TS(E,C,rt,ot,f,l),yt=new x1(E,ot,Ht),Wt=new T1(P,qt,Ht,rt),J=new ES(P,ct,qt),Mt=new GS(P,ct,qt),qt.programs=j.programs,E.capabilities=Ht,E.extensions=ct,E.properties=Ct,E.renderLists=_t,E.shadowMap=yt,E.state=rt,E.info=qt}_!==fn&&(R=new qS(_,e.width,e.height,o,i,r));let ht=new tp(E,P);this.xr=ht,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let A=ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(A){A!==void 0&&(wt=A,this.setSize(vt,kt,!1))},this.getSize=function(A){return A.set(vt,kt)},this.setSize=function(A,F,Y=!0){if(ht.isPresenting){Tt("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=A,kt=F,e.width=Math.floor(A*wt),e.height=Math.floor(F*wt),Y===!0&&(e.style.width=A+"px",e.style.height=F+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(vt*wt,kt*wt).floor()},this.setDrawingBufferSize=function(A,F,Y){vt=A,kt=F,wt=Y,e.width=Math.floor(A*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,A,F)},this.setEffects=function(A){if(_===fn){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let F=0;F<A.length;F++)if(A[F].isOutputPass===!0){Tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(nt)},this.getViewport=function(A){return A.copy(Pt)},this.setViewport=function(A,F,Y,H){A.isVector4?Pt.set(A.x,A.y,A.z,A.w):Pt.set(A,F,Y,H),rt.viewport(nt.copy(Pt).multiplyScalar(k()).round())},this.getScissor=function(A){return A.copy(ee)},this.setScissor=function(A,F,Y,H){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,F,Y,H),rt.scissor(At.copy(ee).multiplyScalar(k()).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(A){rt.setScissorTest(oe=A)},this.setOpaqueSort=function(A){Vt=A},this.setTransparentSort=function(A){xe=A},this.getClearColor=function(A){return A.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,Y=!0){let H=0;if(A){let W=!1;if(st!==null){let bt=st.texture.format;W=m.has(bt)}if(W){let bt=st.texture.type,Ut=g.has(bt),St=U.getClearColor(),It=U.getClearAlpha(),zt=St.r,jt=St.g,le=St.b;Ut?(x[0]=zt,x[1]=jt,x[2]=le,x[3]=It,P.clearBufferuiv(P.COLOR,0,x)):(y[0]=zt,y[1]=jt,y[2]=le,y[3]=It,P.clearBufferiv(P.COLOR,0,y))}else H|=P.COLOR_BUFFER_BIT}F&&(H|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),U.dispose(),_t.dispose(),K.dispose(),Dt.dispose(),Ct.dispose(),C.dispose(),ot.dispose(),B.dispose(),xt.dispose(),Wt.dispose(),j.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",bp),ht.removeEventListener("sessionend",wp),us.stop()};function Xt(A){A.preventDefault(),Ir("WebGLRenderer: Context Lost."),I=!0}function ne(){Ir("WebGLRenderer: Context Restored."),I=!1;let A=qt.autoReset,F=yt.enabled,Y=yt.autoUpdate,H=yt.needsUpdate,W=yt.type;re(),qt.autoReset=A,yt.enabled=F,yt.autoUpdate=Y,yt.needsUpdate=H,yt.type=W}function Rt(A){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ve(A){let F=A.target;F.removeEventListener("dispose",ve),Ve(F)}function Ve(A){Ni(A),Ct.remove(A)}function Ni(A){let F=Ct.get(A).programs;F!==void 0&&(F.forEach(function(Y){j.releaseProgram(Y)}),A.isShaderMaterial&&j.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,Y,H,W,bt){F===null&&(F=se);let Ut=W.isMesh&&W.matrixWorld.determinantAffine()<0,St=X_(A,F,Y,H,W);rt.setMaterial(H,Ut);let It=Y.index,zt=1;if(H.wireframe===!0){if(It=B.getWireframeAttribute(Y),It===void 0)return;zt=2}let jt=Y.drawRange,le=Y.attributes.position,Ft=jt.start*zt,ce=(jt.start+jt.count)*zt;bt!==null&&(Ft=Math.max(Ft,bt.start*zt),ce=Math.min(ce,(bt.start+bt.count)*zt)),It!==null?(Ft=Math.max(Ft,0),ce=Math.min(ce,It.count)):le!=null&&(Ft=Math.max(Ft,0),ce=Math.min(ce,le.count));let Ue=ce-Ft;if(Ue<0||Ue===1/0)return;xt.setup(W,H,St,Y,It);let Se,Me=J;if(It!==null&&(Se=b.get(It),Me=Mt,Me.setIndex(Se)),W.isMesh)H.wireframe===!0?(rt.setLineWidth(H.wireframeLinewidth*k()),Me.setMode(P.LINES)):Me.setMode(P.TRIANGLES);else if(W.isLine){let Ke=H.linewidth;Ke===void 0&&(Ke=1),rt.setLineWidth(Ke*k()),W.isLineSegments?Me.setMode(P.LINES):W.isLineLoop?Me.setMode(P.LINE_LOOP):Me.setMode(P.LINE_STRIP)}else W.isPoints?Me.setMode(P.POINTS):W.isSprite&&Me.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))Me.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ke=W._multiDrawStarts,Ot=W._multiDrawCounts,on=W._multiDrawCount,ge=It?b.get(It).bytesPerElement:1,ds=Ct.get(H).currentProgram.getUniforms();for(let Qe=0;Qe<on;Qe++)ds.setValue(P,"_gl_DrawID",Qe),Me.render(Ke[Qe]/ge,Ot[Qe])}else if(W.isInstancedMesh)Me.renderInstances(Ft,Ue,W.count);else if(Y.isInstancedBufferGeometry){let Ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ot=Math.min(Y.instanceCount,Ke);Me.renderInstances(Ft,Ue,Ot)}else Me.render(Ft,Ue)};function Sp(A,F,Y,H){N!==null&&A.isNodeMaterial&&N.setObject(H,A),dt===!0&&Q.setState(A,Y,!1),A.transparent===!0&&A.side===$n&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,Aa(A,F,H),A.side=Ii,A.needsUpdate=!0,Aa(A,F,H),A.side=$n):Aa(A,F,H)}this.compile=function(A,F,Y=null){Y===null&&(Y=A),N!==null&&N.renderStart(A,F,Y),T=K.get(Y),T.init(F),S.push(T),Y.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),A!==Y&&A.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),Nt=this.localClippingEnabled,dt=Q.init(this.clippingPlanes,Nt),dt===!0&&Q.setGlobalState(this.clippingPlanes,F),N!==null&&yt.render(T.state.shadowsArray,Y,F);let H=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let bt=W.material;if(bt)if(Array.isArray(bt))for(let Ut=0;Ut<bt.length;Ut++){let St=bt[Ut];Sp(St,Y,F,W),H.add(St)}else Sp(bt,Y,F,W),H.add(bt)}),T=S.pop(),N!==null&&N.renderEnd(),H},this.compileAsync=function(A,F,Y=null){let H=this.compile(A,F,Y);return new Promise(W=>{function bt(){if(H.forEach(function(Ut){let It=Ct.get(Ut).currentProgram;(It===void 0||It.isReady())&&H.delete(Ut)}),H.size===0){W(A);return}setTimeout(bt,10)}ct.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Yu=null;function H_(A){Yu&&Yu(A)}function bp(){us.stop()}function wp(){us.start()}let us=new Mg;us.setAnimationLoop(H_),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(A){Yu=A,ht.setAnimationLoop(A),A===null?us.stop():us.start()},ht.addEventListener("sessionstart",bp),ht.addEventListener("sessionend",wp),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(A,F);let Y=ht.enabled===!0&&ht.isPresenting===!0,H=R!==null&&(st===null||Y)&&R.begin(E,st);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(F),F=ht.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,F,st),T=K.get(A,S.length),T.init(F),T.state.textureUnits=Dt.getTextureUnits(),S.push(T),ft.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?mt.setFromArrayCamera(F):it.setFromProjectionMatrix(ft,vn,F.reversedDepth),Nt=this.localClippingEnabled,dt=Q.init(this.clippingPlanes,Nt),w=_t.get(A,v.length),w.init(),v.push(w),this.info.render.frame++,ht.enabled===!0&&ht.isPresenting===!0){let Ut=E.xr.getDepthSensingMesh();Ut!==null&&Zu(Ut,F,-1/0,E.sortObjects)}Zu(A,F,0,E.sortObjects),w.finish(),N!==null&&N.updateLights(T.state.lightsArray),E.sortObjects===!0&&w.sort(Vt,xe),te=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,te&&U.addToRenderList(w,A),this.info.autoReset===!0&&this.info.reset(),dt===!0&&Q.beginShadows();let W=T.state.shadowsArray;if(yt.render(W,A,F),dt===!0&&Q.endShadows(),(H&&R.hasRenderPass())===!1){let Ut=w.opaque,St=w.transmissive;if(T.setupLights(),F.isArrayCamera){let It=F.cameras;if(St.length>0)for(let zt=0,jt=It.length;zt<jt;zt++){let le=It[zt];Ap(Ut,St,A,le)}te&&U.render(A);for(let zt=0,jt=It.length;zt<jt;zt++){let le=It[zt];Tp(w,A,le,le.viewport)}}else St.length>0&&Ap(Ut,St,A,F),te&&U.render(A),Tp(w,A,F)}st!==null&&V===0&&(Dt.updateMultisampleRenderTarget(st),Dt.updateRenderTargetMipmap(st)),H&&R.end(E),A.isScene===!0&&A.onAfterRender(E,A,F),xt.resetDefaultState(),X=-1,$=null,S.pop(),S.length>0?(T=S[S.length-1],Dt.setTextureUnits(T.state.textureUnits),dt===!0&&Q.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,v.pop(),v.length>0?w=v[v.length-1]:w=null,N!==null&&N.renderEnd()};function Zu(A,F,Y,H){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){let Ut=F.isArrayCamera?mt:it;if(!A.frustumCulled||A.intersectsFrustum(Ut)){H&&Bt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ft);let St=ot.update(A),It=A.material;It.visible&&w.push(A,St,It,Y,Bt.z,null,F)}}else if(A.isMesh||A.isLine||A.isPoints){let Ut=F.isArrayCamera?mt:it;if(!A.frustumCulled||A.intersectsFrustum(Ut)){let St=ot.update(A),It=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Bt.copy(A.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Bt.copy(St.boundingSphere.center)),Bt.applyMatrix4(A.matrixWorld).applyMatrix4(ft)),Array.isArray(It)){let zt=St.groups;for(let jt=0,le=zt.length;jt<le;jt++){let Ft=zt[jt],ce=It[Ft.materialIndex];ce&&ce.visible&&w.push(A,St,ce,Y,Bt.z,Ft,F)}}else It.visible&&w.push(A,St,It,Y,Bt.z,null,F)}}}let bt=A.children;for(let Ut=0,St=bt.length;Ut<St;Ut++)Zu(bt[Ut],F,Y,H)}function Tp(A,F,Y,H){let{opaque:W,transmissive:bt,transparent:Ut}=A;T.setupLightsView(Y),dt===!0&&Q.setGlobalState(E.clippingPlanes,Y),H&&rt.viewport(nt.copy(H)),W.length>0&&ic(W,F,Y),bt.length>0&&ic(bt,F,Y),Ut.length>0&&ic(Ut,F,Y),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Ap(A,F,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){let Ft=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new Te(1,1,{generateMipmaps:!0,type:Ft?ze:fn,minFilter:On,samples:Math.max(4,Ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let bt=T.state.transmissionRenderTarget[H.id],Ut=H.viewport||nt;bt.setSize(Ut.z*E.transmissionResolutionScale,Ut.w*E.transmissionResolutionScale);let St=E.getRenderTarget(),It=E.getActiveCubeFace(),zt=E.getActiveMipmapLevel();E.setRenderTarget(bt),E.getClearColor(G),lt=E.getClearAlpha(),lt<1&&E.setClearColor(16777215,.5),E.clear(),te&&U.render(Y);let jt=E.toneMapping;E.toneMapping=En;let le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),dt===!0&&Q.setGlobalState(E.clippingPlanes,H),ic(A,Y,H),Dt.updateMultisampleRenderTarget(bt),Dt.updateRenderTargetMipmap(bt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ce=0,Ue=F.length;ce<Ue;ce++){let Se=F[ce],{object:Me,geometry:Ke,material:Ot,group:on}=Se;if(Ot.side===$n&&Me.layers.test(H.layers)){let ge=Ot.side;Ot.side=rn,Ot.needsUpdate=!0,Ep(Me,Y,H,Ke,Ot,on),Ot.side=ge,Ot.needsUpdate=!0,Ft=!0}}Ft===!0&&(Dt.updateMultisampleRenderTarget(bt),Dt.updateRenderTargetMipmap(bt))}E.setRenderTarget(St,It,zt),E.setClearColor(G,lt),le!==void 0&&(H.viewport=le),E.toneMapping=jt}function ic(A,F,Y){let H=F.isScene===!0?F.overrideMaterial:null;for(let W=0,bt=A.length;W<bt;W++){let Ut=A[W],{object:St,geometry:It,group:zt}=Ut,jt=Ut.material;jt.allowOverride===!0&&H!==null&&(jt=H),St.layers.test(Y.layers)&&Ep(St,F,Y,It,jt,zt)}}function Ep(A,F,Y,H,W,bt){N!==null&&W.isNodeMaterial&&N.setObject(A,W),A.onBeforeRender(E,F,Y,H,W,bt),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(E,F,Y,H,A,bt),W.transparent===!0&&W.side===$n&&W.forceSinglePass===!1?(W.side=rn,W.needsUpdate=!0,E.renderBufferDirect(Y,F,H,W,A,bt),W.side=Ii,W.needsUpdate=!0,E.renderBufferDirect(Y,F,H,W,A,bt),W.side=$n):E.renderBufferDirect(Y,F,H,W,A,bt),A.onAfterRender(E,F,Y,H,W,bt)}function Cp(A){let F=0;for(let Y of A)Y.texture!==null&&F++;return F}function Aa(A,F,Y){F.isScene!==!0&&(F=se);let H=Ct.get(A),W=T.state.lights,bt=T.state.shadowsArray,Ut=W.state.version,St=j.getParameters(A,W.state,bt,F,Y,T.state.lightProbeGridArray),It=j.getProgramCacheKey(St),zt=H.programs;H.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let jt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;H.envMap=C.get(A.envMap||H.environment,jt),H.envMapRotation=H.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,zt===void 0&&(A.addEventListener("dispose",ve),zt=new Map,H.programs=zt,H.programVariants=new Map);let le=zt.get(It);if(le!==void 0){if(H.currentProgram===le&&H.lightsStateVersion===Ut)return Pp(A,St),le}else St.uniforms=j.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,Y,St),A.onBeforeCompile(St,E),le=j.acquireProgram(St,It),zt.set(It,le),H.uniforms=St.uniforms;let Ft=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ft.clippingPlanes=Q.uniform),Pp(A,St),H.needsLights=Y_(A),H.lightsStateVersion=Ut,H.needsLights&&(Ft.ambientLightColor.value=W.state.ambient,Ft.lightProbe.value=W.state.probe,Ft.sunLights.value=W.state.sun,Ft.sunLightShadows.value=W.state.sunShadow,Ft.directionalLights.value=W.state.directional,Ft.directionalLightShadows.value=W.state.directionalShadow,Ft.spotLights.value=W.state.spot,Ft.spotLightShadows.value=W.state.spotShadow,Ft.rectAreaLights.value=W.state.rectArea,Ft.ltc_1.value=W.state.rectAreaLTC1,Ft.ltc_2.value=W.state.rectAreaLTC2,Ft.pointLights.value=W.state.point,Ft.pointLightShadows.value=W.state.pointShadow,Ft.hemisphereLights.value=W.state.hemi,Ft.sunShadowMatrix.value=W.state.sunShadowMatrix,Ft.sunShadowCascade.value=W.state.sunShadowCascade,Ft.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ft.spotLightMatrix.value=W.state.spotLightMatrix,Ft.spotLightMap.value=W.state.spotLightMap,Ft.pointShadowMatrix.value=W.state.pointShadowMatrix),H.numLightProbeGrids=Cp(T.state.lightProbeGridArray),H.currentProgram=le,H.uniformsList=null,le}function W_(A,F,Y,H,W){let bt=Ct.get(A),Ut=bt.currentProgram.id+","+H+","+W,St=bt.programVariants.get(Ut);return St===void 0?(St=Aa(A,F,Y),bt.programVariants.set(Ut,St)):(bt.currentProgram=St,bt.uniformsList=null,bt.outputColorSpace=H,bt.toneMapping=W),St}function Rp(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=va.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Pp(A,F){let Y=Ct.get(A);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function X_(A,F,Y,H,W){F.isScene!==!0&&(F=se),Dt.resetTextureUnits();let bt=F.fog,Ut=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,St=st===null?E.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ae.workingColorSpace,It=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,zt=C.get(H.envMap||Ut,It),jt=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,le=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ft=!!Y.morphAttributes.position,ce=!!Y.morphAttributes.normal,Ue=!!Y.morphAttributes.color,Se=En;H.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Se=E.toneMapping);let Me=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ke=Me!==void 0?Me.length:0,Ot=Ct.get(H),on=T.state.lights;if(dt===!0&&(Nt===!0||A!==$)){let Ae=A===$&&H.id===X;Q.setState(H,A,Ae)}let ge=!1,ds=!1;H.version===Ot.__version?Ot.needsLights&&Ot.lightsStateVersion!==on.state.version||W.isBatchedMesh&&Ot.batching===!1||!W.isBatchedMesh&&Ot.batching===!0||W.isBatchedMesh&&Ot.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ot.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ot.instancing===!1||!W.isInstancedMesh&&Ot.instancing===!0||W.isSkinnedMesh&&Ot.skinning===!1||!W.isSkinnedMesh&&Ot.skinning===!0||W.isInstancedMesh&&Ot.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ot.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ot.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ot.instancingMorph===!1&&W.morphTexture!==null||Ot.envMap!==zt||H.fog===!0&&Ot.fog!==bt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Q.numPlanes||Ot.numIntersection!==Q.numIntersection)||Ot.vertexAlphas!==jt||Ot.vertexTangents!==le||Ot.morphTargets!==Ft||Ot.morphNormals!==ce||Ot.morphColors!==Ue||Ot.morphTargetsCount!==Ke||Ot.numLightProbeGrids!==Cp(T.state.lightProbeGridArray)?ge=!0:(Ot.outputColorSpace!==St||Ot.toneMapping!==Se)&&(ds=!0):(ge=!0,Ot.__version=H.version);let Qe=Ot.currentProgram;(ge===!0||ds===!0)&&(Qe=ds===!0?W_(H,F,W,St,Se):Aa(H,F,W),N&&H.isNodeMaterial&&N.onUpdateProgram(H,Qe,Ot));let sc=!1,Ui=!1,fs=!1,he=Qe.getUniforms(),Ze=Ot.uniforms;if(rt.useProgram(Qe.program)&&(sc=!0,Ui=!0,fs=!0),H.id!==X&&(X=H.id,Ui=!0),sc||$!==A){rt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),he.setValue(P,"projectionMatrix",A.projectionMatrix),he.setValue(P,"viewMatrix",A.matrixWorldInverse);let He=he.map.cameraPosition;He!==void 0&&He.setValue(P,Qt.setFromMatrixPosition(A.matrixWorld)),Ht.logarithmicDepthBuffer&&he.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&he.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,Ui=!0,fs=!0)}if(Ot.needsLights&&(on.state.sunShadowMap.length>0&&he.setValue(P,"sunShadowMap",on.state.sunShadowMap,Dt),on.state.directionalShadowMap.length>0&&he.setValue(P,"directionalShadowMap",on.state.directionalShadowMap,Dt),on.state.spotShadowMap.length>0&&he.setValue(P,"spotShadowMap",on.state.spotShadowMap,Dt),on.state.pointShadowMap.length>0&&he.setValue(P,"pointShadowMap",on.state.pointShadowMap,Dt)),W.isSkinnedMesh){he.setOptional(P,W,"bindMatrix"),he.setOptional(P,W,"bindMatrixInverse");let Ae=W.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),he.setValue(P,"boneTexture",Ae.boneTexture,Dt))}W.isBatchedMesh&&(he.setOptional(P,W,"batchingTexture"),he.setValue(P,"batchingTexture",W._matricesTexture,Dt),he.setOptional(P,W,"batchingIdTexture"),he.setValue(P,"batchingIdTexture",W._indirectTexture,Dt),he.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&he.setValue(P,"batchingColorTexture",W._colorsTexture,Dt));let zn=Y.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&tt.update(W,Y,Qe),(Ui||Ot.receiveShadow!==W.receiveShadow)&&(Ot.receiveShadow=W.receiveShadow,he.setValue(P,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Ze.envMapIntensity.value=F.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=E1()),Ui){if(he.setValue(P,"toneMappingExposure",E.toneMappingExposure),Ot.needsLights&&q_(Ze,fs),bt&&H.fog===!0&&ut.refreshFogUniforms(Ze,bt),ut.refreshMaterialUniforms(Ze,H,wt,kt,T.state.transmissionRenderTarget[A.id]),Ot.needsLights&&Ot.numLightProbeGrids>0){let Ae=M,He=0;for(let mi of T.state.lightProbeGridArray)mi.texture!==null&&(Ae.textures[He]=mi.texture,Ae.min[He]=mi.boundingBox.min,Ae.max[He]=mi.boundingBox.max,Ae.resolution[He]=mi.resolution,He++);for(let mi in Ae)Ae[mi].length=He;Ze.probesSH.value=Ae.textures,Ze.probesMin.value=Ae.min,Ze.probesMax.value=Ae.max,Ze.probesResolution.value=Ae.resolution}va.upload(P,Rp(Ot),Ze,Dt)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(va.upload(P,Rp(Ot),Ze,Dt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&he.setValue(P,"center",W.center),he.setValue(P,"modelViewMatrix",W.modelViewMatrix),he.setValue(P,"normalMatrix",W.normalMatrix),he.setValue(P,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let Ae=H.uniformsGroups;for(let He=0,mi=Ae.length;He<mi;He++){let Lp=Ae[He];Wt.update(Lp,Qe),Wt.bind(Lp,Qe)}}return Qe}function q_(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.sunLights.needsUpdate=F,A.sunLightShadows.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Y_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(A,F,Y){let H=Ct.get(A);H.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Ct.get(A.texture).__webglTexture=F,Ct.get(A.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){let Y=Ct.get(A);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,Y=0){st=A,q=F,V=Y;let H=null,W=!1,bt=!1;if(A){let St=Ct.get(A);if(St.__useDefaultFramebuffer!==void 0){rt.bindFramebuffer(P.FRAMEBUFFER,St.__webglFramebuffer),nt.copy(A.viewport),At.copy(A.scissor),at=A.scissorTest,rt.viewport(nt),rt.scissor(At),rt.setScissorTest(at),X=-1;return}else if(St.__webglFramebuffer===void 0)Dt.setupRenderTarget(A);else if(St.__hasExternalTextures)Dt.rebindTextures(A,Ct.get(A.texture).__webglTexture,Ct.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let jt=A.depthTexture;if(St.__boundDepthTexture!==jt){if(jt!==null&&Ct.has(jt)&&(A.width!==jt.image.width||A.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Dt.setupDepthRenderbuffer(A)}}let It=A.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(bt=!0);let zt=Ct.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(zt[F])?H=zt[F][Y]:H=zt[F],W=!0):A.samples>0&&Dt.useMultisampledRTT(A)===!1?H=Ct.get(A).__webglMultisampledFramebuffer:Array.isArray(zt)?H=zt[Y]:H=zt,nt.copy(A.viewport),At.copy(A.scissor),at=A.scissorTest}else nt.copy(Pt).multiplyScalar(wt).floor(),At.copy(ee).multiplyScalar(wt).floor(),at=oe;if(Y!==0&&(H=z),rt.bindFramebuffer(P.FRAMEBUFFER,H)&&rt.drawBuffers(A,H),rt.viewport(nt),rt.scissor(At),rt.setScissorTest(at),W){let St=Ct.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,St.__webglTexture,Y)}else if(bt){let St=F;for(let It=0;It<A.textures.length;It++){let zt=Ct.get(A.textures[It]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+It,zt.__webglTexture,Y,St)}}else if(A!==null&&Y!==0){let St=Ct.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,St.__webglTexture,Y)}X=-1};function Ip(A){let F=Ct.get(A);return(F.__readFormat!==A.format||F.__readType!==A.type)&&(F.__readFormat=A.format,F.__readType=A.type,F.__formatReadable=Ht.textureFormatReadable(A.format),F.__typeReadable=Ht.textureTypeReadable(A.type)),F}this.readRenderTargetPixels=function(A,F,Y,H,W,bt,Ut,St=0){if(!(A&&A.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(It=It[Ut],Array.isArray(It)&&(It=It[0])),It){rt.bindFramebuffer(P.FRAMEBUFFER,It);try{let zt=A.textures[St],jt=zt.format,le=zt.type;A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+St);let Ft=Ip(zt);if(Ft.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-H&&Y>=0&&Y<=A.height-W&&P.readPixels(F,Y,H,W,pt.convert(jt),pt.convert(le),bt)}finally{let zt=st!==null?Ct.get(st).__webglFramebuffer:null;rt.bindFramebuffer(P.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,F,Y,H,W,bt,Ut,St=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(It=It[Ut],Array.isArray(It)&&(It=It[0])),It)if(F>=0&&F<=A.width-H&&Y>=0&&Y<=A.height-W){rt.bindFramebuffer(P.FRAMEBUFFER,It);let zt=A.textures[St],jt=zt.format,le=zt.type;A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+St);let Ft=Ip(zt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ce),P.bufferData(P.PIXEL_PACK_BUFFER,bt.byteLength,P.STREAM_READ),P.readPixels(F,Y,H,W,pt.convert(jt),pt.convert(le),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Ue=st!==null?Ct.get(st).__webglFramebuffer:null;rt.bindFramebuffer(P.FRAMEBUFFER,Ue);let Se=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await V0(P,Se,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ce),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,bt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(ce),P.deleteSync(Se),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,Y=0){let H=Math.pow(2,-Y),W=Math.floor(A.image.width*H),bt=Math.floor(A.image.height*H),Ut=F!==null?F.x:0,St=F!==null?F.y:0;Dt.setTexture2D(A,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,Ut,St,W,bt),rt.unbindTexture()},this.copyTextureToTexture=function(A,F,Y=null,H=null,W=0,bt=0){let Ut,St,It,zt,jt,le,Ft,ce,Ue,Se=A.isCompressedTexture?A.mipmaps[bt]:A.image;if(Y!==null)Ut=Y.max.x-Y.min.x,St=Y.max.y-Y.min.y,It=Y.isBox3?Y.max.z-Y.min.z:1,zt=Y.min.x,jt=Y.min.y,le=Y.isBox3?Y.min.z:0;else{let he=Math.pow(2,-W);Ut=Math.floor(Se.width*he),St=Math.floor(Se.height*he),A.isDataArrayTexture?It=Se.depth:A.isData3DTexture?It=Math.floor(Se.depth*he):It=1,zt=0,jt=0,le=0}H!==null?(Ft=H.x,ce=H.y,Ue=H.z):(Ft=0,ce=0,Ue=0);let Me=pt.convert(F.format),Ke=pt.convert(F.type),Ot;F.isData3DTexture?(Dt.setTexture3D(F,0),Ot=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Dt.setTexture2DArray(F,0),Ot=P.TEXTURE_2D_ARRAY):(Dt.setTexture2D(F,0),Ot=P.TEXTURE_2D),rt.activeTexture(P.TEXTURE0),rt.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),rt.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),rt.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let on=rt.getParameter(P.UNPACK_ROW_LENGTH),ge=rt.getParameter(P.UNPACK_IMAGE_HEIGHT),ds=rt.getParameter(P.UNPACK_SKIP_PIXELS),Qe=rt.getParameter(P.UNPACK_SKIP_ROWS),sc=rt.getParameter(P.UNPACK_SKIP_IMAGES);rt.pixelStorei(P.UNPACK_ROW_LENGTH,Se.width),rt.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Se.height),rt.pixelStorei(P.UNPACK_SKIP_PIXELS,zt),rt.pixelStorei(P.UNPACK_SKIP_ROWS,jt),rt.pixelStorei(P.UNPACK_SKIP_IMAGES,le);let Ui=A.isDataArrayTexture||A.isData3DTexture,fs=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){let he=Ct.get(A),Ze=Ct.get(F),zn=Ct.get(he.__renderTarget),Ae=Ct.get(Ze.__renderTarget);rt.bindFramebuffer(P.READ_FRAMEBUFFER,zn.__webglFramebuffer),rt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let He=0;He<It;He++)Ui&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ct.get(A).__webglTexture,W,le+He),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ct.get(F).__webglTexture,bt,Ue+He)),P.blitFramebuffer(zt,jt,zt+Ut,jt+St,Ft,ce,Ft+Ut,ce+St,P.DEPTH_BUFFER_BIT,P.NEAREST);rt.bindFramebuffer(P.READ_FRAMEBUFFER,null),rt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||Ct.has(A)){let he=Ct.get(A),Ze=Ct.get(F);rt.bindFramebuffer(P.READ_FRAMEBUFFER,D),rt.bindFramebuffer(P.DRAW_FRAMEBUFFER,O);for(let zn=0;zn<It;zn++)Ui?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,he.__webglTexture,W,le+zn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,he.__webglTexture,W),fs?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ze.__webglTexture,bt,Ue+zn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ze.__webglTexture,bt),W!==0?P.blitFramebuffer(zt,jt,zt+Ut,jt+St,Ft,ce,Ft+Ut,ce+St,P.COLOR_BUFFER_BIT,P.NEAREST):fs?P.copyTexSubImage3D(Ot,bt,Ft,ce,Ue+zn,zt,jt,Ut,St):P.copyTexSubImage2D(Ot,bt,Ft,ce,zt,jt,Ut,St);rt.bindFramebuffer(P.READ_FRAMEBUFFER,null),rt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else fs?A.isDataTexture||A.isData3DTexture?P.texSubImage3D(Ot,bt,Ft,ce,Ue,Ut,St,It,Me,Ke,Se.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Ot,bt,Ft,ce,Ue,Ut,St,It,Me,Se.data):P.texSubImage3D(Ot,bt,Ft,ce,Ue,Ut,St,It,Me,Ke,Se):A.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,bt,Ft,ce,Ut,St,Me,Ke,Se.data):A.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,bt,Ft,ce,Se.width,Se.height,Me,Se.data):P.texSubImage2D(P.TEXTURE_2D,bt,Ft,ce,Ut,St,Me,Ke,Se);rt.pixelStorei(P.UNPACK_ROW_LENGTH,on),rt.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ge),rt.pixelStorei(P.UNPACK_SKIP_PIXELS,ds),rt.pixelStorei(P.UNPACK_SKIP_ROWS,Qe),rt.pixelStorei(P.UNPACK_SKIP_IMAGES,sc),bt===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&P.generateMipmap(Ot),rt.unbindTexture()},this.initRenderTarget=function(A){Ct.get(A).__webglFramebuffer===void 0&&Dt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Dt.setTextureCube(A,0):A.isData3DTexture?Dt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Dt.setTexture2DArray(A,0):Dt.setTexture2D(A,0),rt.unbindTexture()},this.resetState=function(){q=0,V=0,st=null,rt.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}});function Og(s,t,{start:e=12,fadeIn:n=1.4,fadeOut:i=.6}={}){let r=gn.outCubic(mn((s-e)/n)),a=mn((t-s)/i);return{visible:s>=e,opacity:r*gn.smooth(a),reveal:r,spacing:Fg(.9,.42,gn.outExpo(mn((s-e)/(n*1.8))))}}function Bg(s,t,{inSec:e=.8,outSec:n=.8}={}){return Math.min(gn.smooth(mn(s/e)),gn.smooth(mn((t-s)/n)))}var mn,Fg,gn,Iu,Zl,$l=be(()=>{mn=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),Fg=(s,t,e)=>s+(t-s)*e,gn={linear:s=>s,smooth:s=>s*s*(3-2*s),smoother:s=>s*s*s*(s*(s*6-15)+10),inOutCubic:s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,outCubic:s=>1-Math.pow(1-s,3),inCubic:s=>s*s*s,outExpo:s=>s>=1?1:1-Math.pow(2,-10*s)},Iu=class{constructor({fps:t=30,duration:e=15}={}){this.fps=t,this.duration=e,this.frameCount=Math.round(t*e)}timeAtFrame(t){return t/this.fps}progressAtFrame(t){return mn(t/Math.max(1,this.frameCount-1))}segment(t,e,n,i=gn.linear){return i(mn((t-e)/(n-e)))}},Zl=class{constructor(t){this.keys=[...t].sort((e,n)=>e.t-n.t)}sample(t){let e=this.keys;if(t<=e[0].t)return e[0].v;if(t>=e[e.length-1].t)return e[e.length-1].v;let n=0;for(;t>e[n+1].t;)n++;let i=(e[n].ease??gn.smooth)((t-e[n].t)/(e[n+1].t-e[n].t));return Fg(e[n].v,e[n+1].v,i)}}});function P1(s,t,e=8){let n=s.count,i=s.instanceMatrix.array,r=new Map;for(let l=0;l<n;l++){let c=kg(Math.floor(i[l*16+12]/t),Math.floor(i[l*16+14]/t)),h=r.get(c);h||r.set(c,h=[]),h.push(l)}let a=s.geometry,o=[];for(let l of r.values()){let c=new Yt;for(let u of Object.keys(a.attributes)){let d=a.attributes[u];if(d.isInstancedBufferAttribute){let p=new d.array.constructor(l.length*d.itemSize);l.forEach((f,_)=>{for(let m=0;m<d.itemSize;m++)p[_*d.itemSize+m]=d.array[f*d.itemSize+m]}),c.setAttribute(u,new Tn(p,d.itemSize,d.normalized,d.meshPerAttribute))}else c.setAttribute(u,d)}a.index&&c.setIndex(a.index),c.groups=a.groups.slice(),c.boundingBox=a.boundingBox,c.boundingSphere=a.boundingSphere,c.boundingSphere||(a.computeBoundingSphere(),c.boundingSphere=a.boundingSphere);let h=new Ns(c,s.material,l.length);l.forEach((u,d)=>h.instanceMatrix.array.set(i.subarray(u*16,u*16+16),d*16)),h.instanceMatrix.needsUpdate=!0,s.instanceColor&&(h.instanceColor=new Tn(new Float32Array(l.length*3),3),l.forEach((u,d)=>h.instanceColor.array.set(s.instanceColor.array.subarray(u*3,u*3+3),d*3)),h.instanceColor.needsUpdate=!0),h.castShadow=s.castShadow,h.receiveShadow=s.receiveShadow,h.renderOrder=s.renderOrder,h.name=s.name,h.userData=s.userData,h.layers.mask=s.layers.mask,h.position.copy(s.position),h.quaternion.copy(s.quaternion),h.scale.copy(s.scale),h.frustumCulled=!0,h.computeBoundingSphere(),h.boundingSphere.radius+=e,o.push(h)}return o}function I1(s,t,e=2){let n=s.geometry,i=n.attributes.position,r=n.index;if(!r)return[s];let a=r.array,o=a.length/3,l=new Map;for(let h=0;h<o;h++){let u=a[h*3],d=a[h*3+1],p=a[h*3+2],f=(i.getX(u)+i.getX(d)+i.getX(p))/3,_=(i.getZ(u)+i.getZ(d)+i.getZ(p))/3,m=kg(Math.floor(f/t),Math.floor(_/t)),g=l.get(m);g||l.set(m,g=[]),g.push(h)}let c=[];for(let h of l.values()){let u=new a.constructor(h.length*3);h.forEach((m,g)=>{u[g*3]=a[m*3],u[g*3+1]=a[m*3+1],u[g*3+2]=a[m*3+2]});let d=new Yt;for(let m of Object.keys(n.attributes))d.setAttribute(m,n.attributes[m]);d.setIndex(new de(u,1));let p=new Ne,f=new L;for(let m=0;m<u.length;m++)f.fromBufferAttribute(i,u[m]),p.expandByPoint(f);d.boundingBox=p,d.boundingSphere=p.getBoundingSphere(new Pe),d.boundingSphere.radius+=e;let _=new ye(d,s.material);_.castShadow=s.castShadow,_.receiveShadow=s.receiveShadow,_.renderOrder=s.renderOrder,_.name=s.name+"-tile",_.userData=s.userData,_.position.copy(s.position),_.quaternion.copy(s.quaternion),_.scale.copy(s.scale),_.frustumCulled=!0,c.push(_)}return c}function Gg(s,{exclude:t=[],instSize:e=350,mountainCell:n=3e3,only:i=null,minCount:r=2e3}={}){let a=new Set(t),o={instancedSrc:0,instancedTiles:0,mountainTiles:0,instances:0};for(let l of s.children.slice()){if(a.has(l)||l.isInstancedMesh&&l.count<r)continue;let c=null;if(l.isInstancedMesh&&!l.isPoints&&(!i||i==="inst")?(c=P1(l,e),o.instancedSrc++,o.instancedTiles+=c.length,o.instances+=l.count):l.isMesh&&l.name==="mountains"&&(!i||i==="mtn")&&(c=I1(l,n),o.mountainTiles=c.length),!!c){s.remove(l);for(let h of c)s.add(h)}}return o}var kg,Vg=be(()=>{Ye();kg=(s,t)=>s+"_"+t});function Hg(s,t=Jl){let e=s.get("haze"),n=e===null||e===""?1:Math.max(0,parseFloat(e)),i=(r,a)=>s.has(r)&&isFinite(parseFloat(s.get(r)))?parseFloat(s.get(r)):a;return{mult:isFinite(n)?n:1,start:i("hazeStart",t.start),end:i("hazeEnd",t.end),strength:i("hazeMax",t.strength),desat:i("hazeDesat",t.desat),mountain:i("hazeMtn",t.mountain)}}function Wg(s,t,e){let n=new fe,i={uHazeP:{value:n},uHazeHor:t.uHorizon,uHazeWarm:t.uHorizonWarm,uHazeSun:t.uSunDir},r={cfg:{...e},uniforms:i,materials:0,set(o){Object.assign(r.cfg,o);let l=r.cfg.strength*r.cfg.mult;n.set(r.cfg.start,r.cfg.end,Math.min(1,l),r.cfg.desat)}};r.set({});let a=new Set;return s.traverse(o=>{let l=o.material?Array.isArray(o.material)?o.material:[o.material]:[];for(let c of l){if(a.has(c)||c.isShaderMaterial&&!c.isMeshStandardMaterial||c.fog===!1||c.isPointsMaterial)continue;a.add(c);let h=String(o.name||"").startsWith("mountains")?r.cfg.mountain:1,u=c.onBeforeCompile,d=c.customProgramCacheKey();c.onBeforeCompile=function(p,f){u?.call(this,p,f);let _=p.fragmentShader;if(!_.includes("#include <fog_fragment>"))return;let m=_.includes("vViewPosition");Object.assign(p.uniforms,i),p.fragmentShader=_.replace("#include <fog_pars_fragment>",`#include <fog_pars_fragment>
uniform vec4 uHazeP; uniform vec3 uHazeHor, uHazeWarm, uHazeSun;`).replace("#include <fog_fragment>","#include <fog_fragment>"+L1.replace("HAZE_COL",m?D1:N1).replace("HZ_K",h.toFixed(3)))},c.customProgramCacheKey=()=>d+"|haze1|"+h,c.needsUpdate=!0,r.materials++}}),r}var Jl,L1,D1,N1,sp=be(()=>{Ye();Jl={start:700,end:7e3,strength:.6,desat:.55,mountain:.5};L1=`
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
#endif`,D1=`
    vec3 hzV = normalize((vec4(-vViewPosition, 0.0) * viewMatrix).xyz);
    float hzMu = max(dot(hzV, uHazeSun), 0.0);
    vec3 hzCol = mix(uHazeHor, uHazeWarm, pow(hzMu, 1.6));`,N1=`
    vec3 hzCol = uHazeHor;`});function Xg(s){Di(s,s&&s.contract===1,"contract: 1 \u304C\u5FC5\u8981");let t=s.meta;Di(s,t&&t.id&&t.name?.ja&&t.name?.en&&t.season&&t.docTitle,"meta.{id,name.ja,name.en,season,docTitle}"),Di(s,Array.isArray(s.captions)&&s.captions.length>0,"captions[]"),s.captions.forEach((e,n)=>{Di(s,e.id&&e.title&&typeof e.a=="number"&&typeof e.b=="number"&&e.a<e.b,`captions[${n}] \u306F {id,title,sub,a<b}`),n&&Di(s,e.a>=s.captions[n-1].b,`captions[${n}] \u306E\u7A93\u304C\u524D\u306E\u7A93\u3068\u91CD\u306A\u308B`)}),Di(s,s.timeline&&s.timeline.duration>0&&typeof s.timeline.globalStart=="number","timeline.{globalStart,duration}"),Di(s,s.ambient&&s.ambient.name&&s.ambient.counts&&s.ambient.counts.normal>0&&s.ambient.counts.light>0,"ambient.{name,counts.{normal,light}}"),Di(s,s.tuning&&typeof s.tuning=="object","tuning\uFF08\u7A7A\u3067\u3082\u53EF\uFF09"),Di(s,typeof s.buildScene=="function","buildScene(ctx)")}function qg(s){for(let t of["frameState","setAmbientCount","setLayoutWeight"])if(typeof s[t]!="function")throw new Error(`\u30B7\u30FC\u30F3\u306B ${t}() \u304C\u3042\u308A\u307E\u305B\u3093`);for(let t of["scene","camera","look","rig"])if(!s[t])throw new Error(`\u30B7\u30FC\u30F3\u306B ${t} \u304C\u3042\u308A\u307E\u305B\u3093`)}function Yg(s,{tiled:t,haze:e,tileExclude:n=[],skyUniforms:i}){s.tiled=t===void 0?!0:t,s.hazeCfg=e??{mult:1,...Jl},s.tiled&&(s.tileStats=Gg(s.scene,{exclude:n,only:typeof s.tiled=="string"?s.tiled:null})),s.haze=s.hazeCfg.mult>0&&i?Wg(s.scene,i,s.hazeCfg):{cfg:s.hazeCfg,materials:0}}function Zg(s){let t=new Set,e=n=>{for(let i of Object.values(n))i&&i.isTexture&&!t.has(i)&&(t.add(i),i.dispose())};s.scene.traverse(n=>{n.geometry?.dispose?.();for(let i of Array.isArray(n.material)?n.material:n.material?[n.material]:[])t.has(i)||(t.add(i),e(i),i.dispose())}),s.scene.clear()}var Di,Fu=be(()=>{Vg();sp();Di=(s,t,e)=>{if(!t)throw new Error(`\u90FD\u5E02\u30E2\u30B8\u30E5\u30FC\u30EB "${s?.meta?.id??"?"}" \u304C\u5951\u7D04\u3092\u6E80\u305F\u3057\u3066\u3044\u307E\u305B\u3093: ${e}`)}});function $g(s,t,e,n,i){let r=i*i,a=r*i,o=(l,c,h,u)=>.5*(2*c+(-l+h)*i+(2*l-5*c+4*h-u)*r+(-l+3*c-3*h+u)*a);return[o(s[0],t[0],e[0],n[0]),o(s[1],t[1],e[1],n[1]),o(s[2],t[2],e[2],n[2])]}function F1(s,t,e=0){let n=(i,r)=>Math.sin(s*i+r+e);return[t*(n(1.7,.3)*.6+n(3.1,1.9)*.4),t*(n(1.3,2.1)*.6+n(2.7,.7)*.4),t*(n(1.1,4.2)*.6+n(2.3,3.3)*.4)]}var U1,js,rp=be(()=>{$l();U1=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]];js=class{constructor(t,{shakeAmp:e=0,shakeSeed:n=0,timeWarp:i=null}={}){this.keys=[...t].sort((r,a)=>r.t-a.t),this.shakeAmp=e,this.shakeSeed=n,this.timeWarp=i}sample(t){let e=this.keys;if(this.timeWarp){let _=e[0].t,m=e[e.length-1].t;t=_+(m-_)*this.timeWarp(mn((t-_)/(m-_)))}let n=e.length,i=mn(t,e[0].t,e[n-1].t),r=0;for(;r<n-2&&i>e[r+1].t;)r++;let a=e[r],o=e[r+1],l=(i-a.t)/(o.t-a.t),c=(a.ease??gn.smoother)(mn(l)),h=_=>Math.min(n-1,Math.max(0,_)),u=(_,m)=>e[h(_)][m],d=$g(u(r-1,"pos"),u(r,"pos"),u(r+1,"pos"),u(r+2,"pos"),c),p=$g(u(r-1,"target"),u(r,"target"),u(r+1,"target"),u(r+2,"target"),c),f=a.fov+(o.fov-a.fov)*c;return this.shakeAmp>0&&(d=U1(d,F1(t,this.shakeAmp,this.shakeSeed))),{position:d,target:p,fov:f}}}});var Ou,Jg=be(()=>{Ye();rp();$l();Ou=class{constructor(t,e,n,{renderer:i}={}){this.meta=t,this.glRenderer=i,this.duration=t.durationSec??15,this.timeline=new Iu({fps:30,duration:this.duration}),this.scene=new qn,this.camera=new Ee(35,16/9,4,4e4),this.titleInfo={englishName:t.englishName,name:t.name,index:e,total:n},this.rig=null,this.tracks={},this.look={grade:{}},this.focusLead=0,this.timeOffset=0,this.showTitle=!0,this.fadeSec=.8}async build(){throw new Error("build() \u3092\u5B9F\u88C5\u3057\u3066\u304F\u3060\u3055\u3044")}sampleTrack(t,e,n=0){return this.tracks[t]?this.tracks[t].sample(e):n}frameState(t){let e=t+this.timeOffset,n=this.rig.sample(e);this.camera.position.set(...n.position),this.camera.lookAt(...n.target),this.camera.fov=n.fov;let i=n.position[0]-n.target[0],r=n.position[1]-n.target[1],a=n.position[2]-n.target[2],o=Math.hypot(i,r,a)+this.focusLead;return this.applyTime?.(e,n),{exposure:this.sampleTrack("exposure",e,1),bloom:this.sampleTrack("bloom",e,.6),bloomRadius:this.sampleTrack("bloomRadius",e,.7),bloomThreshold:this.sampleTrack("bloomThreshold",e,.9),dofAperture:this.sampleTrack("dofAperture",e,1),dofMaxBlur:this.sampleTrack("dofMaxBlur",e,6),focusDistance:o}}}});function Kg(s=1){let t=s>>>0,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return e.range=(n,i)=>n+(i-n)*e(),e.int=(n,i)=>Math.floor(n+(i-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e}function Kl(s=7){let t=(i,r)=>{let a=Math.imul(i,374761393)+Math.imul(r,668265263)+Math.imul(s,2147483647);return a=Math.imul(a^a>>>13,1274126177),((a^a>>>16)>>>0)/4294967296},e=i=>i*i*(3-2*i),n=(i,r)=>{let a=Math.floor(i),o=Math.floor(r),l=e(i-a),c=e(r-o),h=t(a,o),u=t(a+1,o),d=t(a,o+1),p=t(a+1,o+1);return h+(u-h)*l+(d-h)*c+(h-u-d+p)*l*c};return n.fbm=(i,r,a=5)=>{let o=0,l=.5,c=1,h=0;for(let u=0;u<a;u++)o+=l*n(i*c,r*c),h+=l,l*=.5,c*=2.03;return o/h},n.ridged=(i,r,a=5)=>{let o=0,l=.5,c=1,h=0;for(let u=0;u<a;u++){let d=1-Math.abs(n(i*c,r*c)*2-1);o+=l*d*d,h+=l,l*=.5,c*=2.03}return o/h},n}var ap=be(()=>{});var hs,wa=be(()=>{hs=`
float hash11(float p){ p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash21(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  float a = hash21(i), b = hash21(i + vec2(1., 0.)), c = hash21(i + vec2(0., 1.)), d = hash21(i + vec2(1., 1.));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 5; i++){ s += a * vnoise(p); p = p * 2.03 + vec2(17.1, 9.7); a *= .5; } return s; }
`});function Qg(s,{sunDir:t,colors:e}){let n={uSunDir:{value:t.clone().normalize()},uTime:{value:0},uZenith:{value:new s.Color(e.zenith)},uHorizon:{value:new s.Color(e.horizon)},uHorizonWarm:{value:new s.Color(e.horizonWarm)},uSunColor:{value:new s.Color(e.sun)},uCloudLit:{value:new s.Color(e.cloudLit)},uCloudDark:{value:new s.Color(e.cloudDark)},uCloudCover:{value:e.cloudCover??.5},uSunStrength:{value:1}},i=new s.ShaderMaterial({uniforms:n,side:s.BackSide,depthWrite:!1,depthTest:!1,fog:!1,vertexShader:`
      varying vec3 vDir;
      void main(){
        vDir = position;
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p;
      }`,fragmentShader:`
      uniform vec3 uSunDir, uZenith, uHorizon, uHorizonWarm, uSunColor, uCloudLit, uCloudDark;
      uniform float uTime, uCloudCover, uSunStrength;
      varying vec3 vDir;
      ${hs}
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
      }`}),r=new s.Mesh(new s.SphereGeometry(1e3,48,24),i);return r.frustumCulled=!1,r.renderOrder=-1e3,r.name="sky",{mesh:r,material:i,uniforms:n}}var jg=be(()=>{wa()});function t_(s,{uNight:t,uSnow:e}){let n=new s.MeshStandardMaterial({color:16777215,roughness:.8,metalness:0});return n.customProgramCacheKey=()=>"facade-v3",n.onBeforeCompile=i=>{i.uniforms.uNight=t,i.uniforms.uSnow=e,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aBld; attribute vec4 aPar;
        varying vec4 vBld; varying vec4 vPar; varying vec3 vWP; varying vec3 vON; varying float vTopDist;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vBld = aBld; vPar = aPar; vON = normal;
        mat4 fim = instanceMatrix;
        vWP = (modelMatrix * fim * vec4(transformed, 1.0)).xyz;
        vTopDist = (1.0 - position.y) * fim[1][1];`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uNight, uSnow;
        varying vec4 vBld; varying vec4 vPar; varying vec3 vWP; varying vec3 vON; varying float vTopDist;
        ${hs}
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
        totalEmissiveRadiance += fEmis;`)},n}function e_(s){let t=[-.5,0,-.5],e=[.5,0,-.5],n=[0,1,-.5],i=[-.5,0,.5],r=[.5,0,.5],a=[0,1,.5],o=[t,n,e,i,r,a,t,i,a,t,a,n,e,n,a,e,a,r,t,e,r,t,r,i],l=new s.BufferGeometry;return l.setAttribute("position",new s.Float32BufferAttribute(o.flat(),3)),l.computeVertexNormals(),l}function n_(s){let t=new s.CylinderGeometry(.5,.5,1,14,1,!1);return t.translate(0,.5,0),t}function O1(s,t){let e=n=>{let i=Math.sin((t+n)*12.9898)*43758.5453;return i-Math.floor(i)};switch(s){case 2:return[2.4+e(1)*1.4,3.6+e(2)*.6,.94,.55+e(3)*.2];case 3:return[2.6+e(1)*1,2.8+e(2)*.3,.55+e(3)*.15,.5+e(4)*.12];case 4:return[3.6+e(1)*1.6,3.8+e(2)*.8,.45+e(3)*.2,.7];case 1:return[2.2+e(1)*.8,3.4+e(2)*.6,.5+e(3)*.15,.6+e(4)*.12];default:return[2.7+e(1)*1.2,3.5+e(2)*.5,.62+e(3)*.2,.55+e(4)*.15]}}var Ta,di,op=be(()=>{wa();Ta=class{constructor(t,e,n=6e4,i=null){this.THREE=t,this.material=e,this.capacity=n,this.n=0,this.geometry=i,this.mats=new Float32Array(n*16),this.bld=new Float32Array(n*4),this.par=new Float32Array(n*4),this._m=new t.Matrix4,this._p=new t.Vector3,this._q=new t.Quaternion,this._s=new t.Vector3}add(t,e,n,i,r,a,o,l,c=.5,h=0,u=null){if(this.n>=this.capacity)return;let{_m:d,_p:p,_q:f,_s:_}=this;p.set(t,e,n),_.set(i,r,a),f.setFromAxisAngle(this.THREE.Object3D.DEFAULT_UP,h),d.compose(p,f,_),d.toArray(this.mats,this.n*16);let m=this.n*4;this.bld[m]=l,this.bld[m+1]=o,this.bld[m+2]=c,this.bld[m+3]=0;let g=u??O1(o,l);this.par[m]=g[0],this.par[m+1]=g[1],this.par[m+2]=g[2],this.par[m+3]=g[3],this.n++}build({castShadow:t=!0}={}){let e=this.THREE,n=this.geometry??(()=>{let r=new e.BoxGeometry(1,1,1);return r.translate(0,.5,0),r})();n.setAttribute("aBld",new e.InstancedBufferAttribute(this.bld.slice(0,this.n*4),4)),n.setAttribute("aPar",new e.InstancedBufferAttribute(this.par.slice(0,this.n*4),4));let i=new e.InstancedMesh(n,this.material,this.n);return i.instanceMatrix.array.set(this.mats.subarray(0,this.n*16)),i.instanceMatrix.needsUpdate=!0,i.castShadow=t,i.receiveShadow=!0,i.frustumCulled=!1,i}};di=class{constructor(t,e){this.THREE=t,this.material=e,this.items=[]}add(t,e,n,i=n){this.items.push([t,e,n,i])}build({castShadow:t=!1,sides:e=6}={}){let n=this.THREE,i=new n.CylinderGeometry(1,1,1,e,1,!1),r=new n.InstancedMesh(i,this.material,this.items.length),a=new Float32Array(this.items.length),o=new n.Matrix4,l=new n.Quaternion,c=new n.Vector3(0,1,0),h=new n.Vector3,u=new n.Vector3,d=new n.Vector3,p=new n.Vector3,f=new n.Vector3;this.items.forEach(([m,g,x,y],M)=>{h.set(...m),u.set(...g),d.subVectors(u,h);let w=d.length();d.normalize(),l.setFromUnitVectors(c,d),p.addVectors(h,u).multiplyScalar(.5),f.set(x,w,x),o.compose(p,l,f),r.setMatrixAt(M,o),a[M]=y/x}),i.setAttribute("aTaper",new n.InstancedBufferAttribute(a,1));let _=this.material;if(!_.userData.beamTaper){_.userData.beamTaper=!0;let m=_.onBeforeCompile;_.onBeforeCompile=(x,y)=>{m?.(x,y),x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
attribute float aTaper;`).replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
transformed.xz *= mix(1.0, aTaper, position.y + 0.5);
#endif`)};let g=_.customProgramCacheKey?.bind(_);_.customProgramCacheKey=()=>(g?g():"")+"|taper",_.needsUpdate=!0}return r.instanceMatrix.needsUpdate=!0,r.castShadow=t,r.receiveShadow=!1,r.frustumCulled=!1,r}}});function i_(){let s=Kl(11),t=Kl(23),e=Kl(41);return(n,i)=>{let r=Math.hypot(n,i),a=Math.atan2(i,n),o=Math.abs((a-2.75+Math.PI*3)%(Math.PI*2)-Math.PI),l=Math.exp(-((o/.95)**2)),c=n+1300*(t.fbm(n*18e-5,i*18e-5,3)-.5)*2,h=i+1300*(t.fbm(n*18e-5+7.3,i*18e-5-2.1,3)-.5)*2,u=s.ridged(c*42e-5+3.1,h*42e-5-1.7,6),d=s.fbm(n*9e-4,i*9e-4,4),p=fi(6500,15e3,r)*l*(110+560*u);p+=fi(14e3,3e4,r)*l*380*e.ridged(c*2e-4+9.1,h*2e-4+4.4,5);for(let f of B1){let _=Math.cos(f.rot),m=Math.sin(f.rot),g=n-f.x,x=i-f.z,y=(g*_+x*m)/f.sx,M=(-g*m+x*_)/f.sz,w=y*y+M*M;if(w>16)continue;let T=Math.exp(-Math.pow(w,.82)*1.15),v=.66+.62*s.ridged(c*8e-4+f.x*3e-4,h*8e-4+f.z*3e-4,5);p+=f.h*T*(f.h>400?v:.86+.28*d)}return p+=(e.ridged(n*.0026,i*.0026,4)-.3)*Math.min(95,p*.13),p=Math.max(0,p+(s.fbm(n*.012,i*.012,3)-.5)*Math.min(14,p*.03)),p}}function s_(s,{heightFn:t,y:e=-4,rInner:n=2500,rOuter:i=44e3,rings:r=420,segs:a=820,thA:o=.55,thB:l=3.95,snowLine:c=260}){let h=(r+1)*(a+1),u=new Float32Array(h*3),d=new Float32Array(h),p=Math.log(i/n),f=0;for(let v=0;v<=r;v++){let S=n*Math.exp(p*v/r);for(let R=0;R<=a;R++){let E=o+(l-o)*R/a,I=Math.cos(E)*S,N=Math.sin(E)*S,z=fi(0,.18,R/a)*fi(0,.18,1-R/a),D=t(I,N)*(0+z);u[f++]=I,u[f++]=D,u[f++]=N,d[v*(a+1)+R]=D}}let _=new Uint32Array(r*a*6),m=0;for(let v=0;v<r;v++)for(let S=0;S<a;S++){let R=v*(a+1)+S,E=R+1,I=R+a+1,N=I+1;_[m++]=R,_[m++]=I,_[m++]=E,_[m++]=E,_[m++]=I,_[m++]=N}let g=new s.BufferGeometry;g.setAttribute("position",new s.BufferAttribute(u,3)),g.setIndex(new s.BufferAttribute(_,1)),g.computeVertexNormals();let x=g.attributes.normal,y=new Float32Array(h*3),M=Kl(31);for(let v=0;v<h;v++){let S=u[v*3],R=u[v*3+2],E=d[v],I=1-x.getY(v),N=M.fbm(S*.0011,R*.0011,4),z=M.fbm(S*.006+5,R*.006,3),D=x.getX(v)*-.66+x.getZ(v)*.71,O=fi(c-140,c+280,E+(N-.5)*220-D*70)*(1-fi(.12,.42,I)*.8),q=fi(15,130,E)*(1-fi(850,1150,E+(N-.5)*200)),V=fi(.22,.5,I)*fi(300,800,E),st=[.86,.88,.93],X=[.2,.235,.235],$=[.3,.285,.29],nt=[.93,.945,.975],At=[0,0,0];for(let at=0;at<3;at++){let G=st[at]+(X[at]-st[at])*q;G+=($[at]-G)*V*.7,G=G+(nt[at]-G)*O,At[at]=G*(.9+.2*z)}y[v*3]=At[0],y[v*3+1]=At[1],y[v*3+2]=At[2]}g.setAttribute("color",new s.BufferAttribute(y,3));let w=new s.MeshStandardMaterial({vertexColors:!0,roughness:.93,metalness:0});w.customProgramCacheKey=()=>"mountain-v1",w.onBeforeCompile=v=>{v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP;
${hs}`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          // \u6A39\u6797\u306E\u7C92\u72B6\u611F\u30FB\u96EA\u9762\u306E\u3046\u306D\u308A\uFF08\u8DDD\u96E2\u306B\u5FDC\u3058\u3066\u5F31\u3081\u308B\uFF09
          float d = length(vWP - cameraPosition);
          float fadeD = 1.0 - smoothstep(4000.0, 16000.0, d);
          float tex = 0.55 * vnoise(vWP.xz * 0.045) + 0.3 * vnoise(vWP.xz * 0.16) + 0.15 * vnoise(vWP.xz * 0.6);
          float lum = dot(diffuseColor.rgb, vec3(0.333));
          float forestness = 1.0 - smoothstep(0.38, 0.7, lum);
          diffuseColor.rgb *= 1.0 + (tex - 0.5) * (0.5 * forestness + 0.12) * (0.4 + 0.6 * fadeD);
        }`)};let T=new s.Mesh(g,w);return T.position.y=e,T.castShadow=!1,T.receiveShadow=!1,T.frustumCulled=!1,T.name="mountains",T}function r_(s,{size:t=9e4,y:e=-40}){let n=new s.PlaneGeometry(t,t,1,1);n.rotateX(-Math.PI/2);let i=new s.MeshStandardMaterial({color:14212584,roughness:.95}),r=new s.Mesh(n,i);return r.position.y=e,r.frustumCulled=!1,r.name="far-plain",r}var fi,B1,a_=be(()=>{ap();wa();fi=(s,t,e)=>{let n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)},B1=[{name:"\u624B\u7A32\u5C71",x:-12800,z:-3300,h:1023,sx:3600,sz:2700,rot:.5},{name:"\u4E09\u89D2\u5C71\u301C\u5965\u624B\u7A32",x:-9e3,z:-1e3,h:560,sx:2400,sz:1500,rot:.8},{name:"\u5186\u5C71",x:-4500,z:1300,h:226,sx:900,sz:700,rot:.3},{name:"\u85FB\u5CA9\u5C71",x:-2500,z:3650,h:531,sx:1500,sz:1100,rot:2.4},{name:"\u4E09\u89D2\u5C71\u30FB\u8352\u4E95\u5C71\u65B9\u9762",x:-6200,z:600,h:311,sx:1100,sz:800,rot:.2},{name:"\u7A7A\u6CBC\u5CB3",x:-14800,z:7400,h:1099,sx:3200,sz:2400,rot:2.2},{name:"\u672D\u5E4C\u5CB3",x:-16500,z:9600,h:1293,sx:3800,sz:2600,rot:2},{name:"\u6075\u5EAD\u5CB3\u65B9\u9762",x:-8e3,z:22e3,h:1320,sx:4500,sz:3500,rot:.6},{name:"\u4F59\u5E02\u5CB3\u65B9\u9762",x:-34e3,z:-4e3,h:1488,sx:6500,sz:4500,rot:.2}]});function Ql(s,{positions:t,colors:e,sizes:n,fogDensity:i=1e-4,minPx:r=1.5,maxPx:a=48}){let o=new s.BufferGeometry;o.setAttribute("position",new s.BufferAttribute(t,3)),o.setAttribute("aColor",new s.BufferAttribute(e,3)),o.setAttribute("aSize",new s.BufferAttribute(n,1));let l={uProj:{value:1e3},uFog:{value:i},uGain:{value:1},uMinPx:{value:r},uMaxPx:{value:a}},c=new s.ShaderMaterial({uniforms:l,transparent:!0,depthWrite:!1,blending:s.AdditiveBlending,vertexShader:`
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
      }`}),h=new s.Points(o,c);return h.frustumCulled=!1,{points:h,geo:o,uniforms:l,material:c}}function o_(s,{count:t=9e3,box:e=160,fall:n=3.2,wind:i=[2.2,.8],size:r=.11,bright:a=1}){let o=new Float32Array(t*4),l=12345,c=()=>(l=Math.imul(l,1664525)+1013904223>>>0)/4294967296;for(let f=0;f<t;f++)o[f*4]=c(),o[f*4+1]=c(),o[f*4+2]=c(),o[f*4+3]=c();let h=new s.BufferGeometry;h.setAttribute("position",new s.BufferAttribute(new Float32Array(t*3),3)),h.setAttribute("aSeed",new s.BufferAttribute(o,4));let u={uTime:{value:0},uCam:{value:new s.Vector3},uBox:{value:e},uFall:{value:n},uWind:{value:new s.Vector2(i[0],i[1])},uSize:{value:r},uProj:{value:1e3},uBright:{value:a},uFog:{value:1e-4},uTint:{value:new s.Color(1,.92,.88)}},d=new s.ShaderMaterial({uniforms:u,transparent:!0,depthWrite:!1,blending:s.AdditiveBlending,vertexShader:`
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
      }`}),p=new s.Points(h,d);return p.frustumCulled=!1,{points:p,uniforms:u,material:d}}var lp=be(()=>{wa()});function l_(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function cp({panes:s,rows:t,w:e,h:n,seed:i,deck:r}){let a=()=>{let g=document.createElement("canvas");return g.width=e,g.height=n,g},o=a(),l=a(),c=a(),h=o.getContext("2d"),u=l.getContext("2d"),d=c.getContext("2d"),p=l_(i),f=e/s;h.fillStyle=r?"#c9ccd0":"#b9b5ac",h.fillRect(0,0,e,n),u.fillStyle="#000",u.fillRect(0,0,e,n),d.fillStyle="#c8c8c8",d.fillRect(0,0,e,n);let _=r?[{y0:0,y1:.14,glass:!1},{y0:.14,y1:.84,glass:!0},{y0:.84,y1:1,glass:!1}]:[{y0:0,y1:.5,glass:!0,shop:!0},{y0:.5,y1:.6,glass:!1},{y0:.6,y1:.9,glass:!0},{y0:.9,y1:1,glass:!1}];for(let g of _){let x=Math.round(g.y0*n),y=Math.round(g.y1*n);if(!g.glass){h.fillStyle=r?"#aeb2b8":"#9a968d",h.fillRect(0,x,e,y-x),h.fillStyle="rgba(0,0,0,0.22)",h.fillRect(0,x,e,2),h.fillRect(0,y-3,e,3),h.fillStyle="rgba(255,255,255,0.25)",h.fillRect(0,x+2,e,2);continue}for(let M=0;M<s;M++){let w=Math.round(M*f),T=Math.round((M+1)*f),v=3,S=w+v,R=T-v,E=x+v,I=y-v,N=.55+.45*p(),z=h.createLinearGradient(0,E,0,I);z.addColorStop(0,`rgb(${Math.round(70+80*N)},${Math.round(95+90*N)},${Math.round(125+90*N)})`),z.addColorStop(.55,`rgb(${Math.round(24+30*N)},${Math.round(34+36*N)},${Math.round(50+40*N)})`),z.addColorStop(1,`rgb(${Math.round(14+14*N)},${Math.round(18+16*N)},${Math.round(26+18*N)})`),h.fillStyle=z,h.fillRect(S,E,R-S,I-E),h.fillStyle=r?"#d7dade":"#8e8a82",h.fillRect(S+(R-S)*.5-1,E,2,I-E),h.fillRect(S,E+(I-E)*.62,R-S,2);let D=p()<(g.shop?.82:.62),O=.35+.65*p(),q=p()<.72,V=p()<.3?.2+.6*p():0;if(D){let st=u.createLinearGradient(0,E,0,I),X=q?[255,196,130]:[215,232,255];st.addColorStop(0,`rgb(${X[0]*O|0},${X[1]*O|0},${X[2]*O|0})`),st.addColorStop(1,`rgb(${X[0]*O*.55|0},${X[1]*O*.55|0},${X[2]*O*.55|0})`),u.fillStyle=st,u.fillRect(S,E,R-S,I-E),u.fillStyle="rgba(0,0,0,0.25)",u.fillRect(S,E+(I-E)*.62,R-S,(I-E)*.38)}V>0&&(h.fillStyle="#b9ad98",h.fillRect(S,E,R-S,(I-E)*V),D&&(u.fillStyle=`rgb(${200*O|0},${150*O|0},${100*O|0})`,u.fillRect(S,E,R-S,(I-E)*V))),d.fillStyle="#1a1a60",d.fillRect(S,E,R-S,I-E),d.fillStyle="#c8c8a0",d.fillRect(S+(R-S)*.5-1,E,2,I-E)}if(g.shop)for(let M=0;M<s;M+=5){let w=Math.round(M*f)+4;h.fillStyle="#2a2a2c",h.fillRect(w,x+(y-x)*.1,f*1.6,(y-x)*.9),u.fillStyle="#ffd9a8",u.fillRect(w+4,x+(y-x)*.16,f*1.6-8,(y-x)*.74)}}let m=(g,x)=>{let y=new $t.CanvasTexture(g);return x&&(y.colorSpace=$t.SRGBColorSpace),y.anisotropy=8,y.generateMipmaps=!0,y.minFilter=$t.LinearMipmapLinearFilter,y};return{map:m(o,!0),emissiveMap:m(l,!0),rough:m(c,!1)}}function c_(s,{x:t,z:e}){let n={},i=new $t.MeshStandardMaterial({color:14475235,roughness:.5,metalness:.45,emissive:new $t.Color(.7,.8,1),emissiveIntensity:0}),r=new $t.MeshStandardMaterial({color:10133414,roughness:.55,metalness:.55,emissive:new $t.Color(.7,.8,1),emissiveIntensity:0}),a=new $t.MeshStandardMaterial({color:10328724,roughness:.9}),o=new $t.MeshStandardMaterial({color:15856889,roughness:.7});n.steel=i,n.steelDark=r;let l=new di($t,i),c=new di($t,r),h=(k,P,Z,ct,Ht,rt=!0)=>{let qt=new $t.Mesh(k,P);return qt.position.set(Z,ct,Ht),qt.castShadow=rt,qt.receiveShadow=!0,s.add(qt),qt},u=10,d=87,p=13.5,f=3.7,_=k=>p+(f-p)*((k-u)/(d-u)),m=[[1,1],[1,-1],[-1,-1],[-1,1]],g=(k,P,Z,ct=1)=>{let Ht=_(Z)*ct;return[t+k*Ht,Z,e+P*Ht]},x=(k,P,Z)=>k+(P-k)*Z,y=k=>(k-u)/(d-u),M=[u,18.5,27,35.5,44.5,53.5,62,70,77.5,83,d],w=(k,P,Z)=>[x(k[0],P[0],Z),x(k[1],P[1],Z),x(k[2],P[2],Z)],T=(k,P)=>{let Z=[P[0]-k[0],P[1]-k[1],P[2]-k[2]],ct=Math.hypot(...Z);return[Z[0]/ct,Z[1]/ct,Z[2]/ct]},v=(k,P,Z)=>[k[0]+P[0]*Z,k[1]+P[1]*Z,k[2]+P[2]*Z],S=(k,P,Z)=>{l.add(k,P,Z);let ct=T(k,P);c.add(k,v(k,ct,.7),Z*1.7,Z*1.35),c.add(P,v(P,ct,-.7),Z*1.7,Z*1.35)};for(let k=0;k<M.length-1;k++){let P=M[k],Z=M[k+1],ct=y(P),Ht=y(Z),rt=x(.82,.36,ct),qt=x(.82,.36,Ht),Ct=x(.3,.13,(ct+Ht)/2),Dt=x(.36,.16,Ht);for(let C=0;C<4;C++){let[b,B]=m[C],[ot,j]=m[(C+1)%4];l.add(g(b,B,P),g(b,B,Z),rt,qt),l.add(g(b,B,P,.9),g(b,B,Z,.9),rt*.5,qt*.5);let ut=(P+Z)/2;l.add(g(b,B,ut),g(b,B,ut,.9),.08),S(g(b,B,P),g(ot,j,Z),Ct),S(g(ot,j,P),g(b,B,Z),Ct),l.add(g(b,B,Z),g(ot,j,Z),Dt),k%2===0&&k<6&&l.add(g(b,B,ut),g(ot,j,ut),Dt*.55);let _t=g(b,B,Z,.62),K=g(ot,j,Z,.62);l.add(_t,K,Dt*.5),l.add(g(b,B,Z,.95),_t,Dt*.45),c.add([g(b,B,Z)[0],Z-.55,g(b,B,Z)[2]],[g(b,B,Z)[0],Z+.55,g(b,B,Z)[2]],qt*1.5),c.add([g(b,B,Z)[0],Z-.07,g(b,B,Z)[2]],[g(b,B,Z)[0],Z+.07,g(b,B,Z)[2]],qt*2.7)}if(k%2===1){let C=(b,B)=>g(b,B,Z,.62);l.add(C(1,1),C(-1,-1),.09),l.add(C(1,-1),C(-1,1),.09)}}for(let[k,P]of m){let Z=g(k,P,u);h(new $t.BoxGeometry(3.6,1.6,3.6),a,Z[0],u+.2,Z[2]),c.add([Z[0],u+.9,Z[2]],[Z[0],u+1.5,Z[2]],1.5,1)}let R=(k,P,Z)=>[t+k*1.35,Z,e+P*1.35];for(let[k,P]of m)l.add(R(k,P,u),R(k,P,d+3),.2);for(let k=0;k<M.length;k++){let P=M[k];for(let Z=0;Z<4;Z++){let[ct,Ht]=m[Z],[rt,qt]=m[(Z+1)%4];if(l.add(R(ct,Ht,P),R(rt,qt,P),.1),k<M.length-1){let Ct=M[k+1];l.add(R(ct,Ht,P),R(rt,qt,Ct),.07)}}}let E=(k,P)=>{let Z=_(k)*P;h(new $t.BoxGeometry(Z*2,.22,Z*2),r,t,k,e);for(let ct=0;ct<4;ct++){let[Ht,rt]=m[ct],[qt,Ct]=m[(ct+1)%4],Dt=[t+Ht*Z,k+1.05,e+rt*Z],C=[t+qt*Z,k+1.05,e+Ct*Z];l.add(Dt,C,.045),l.add(w(Dt,C,0),w(Dt,C,1),.045);let b=Math.max(2,Math.round(Z*2/1.9));for(let B=0;B<b;B++){let ot=w([Dt[0],k,Dt[2]],[C[0],k,C[2]],B/b);l.add(ot,[ot[0],k+1.05,ot[2]],.035)}l.add([Dt[0],k+.55,Dt[2]],[C[0],k+.55,C[2]],.03)}for(let[ct,Ht]of m)l.add(R(ct,Ht,k-.1),g(ct,Ht,k,.85),.1)};E(35.5,.86),E(62,.86);let I=15.6,N=90,z=4.5,D=h(new $t.CylinderGeometry(6.6*Math.SQRT2,3.9*Math.SQRT2,3.3,4,1),i,t,88.35,e);D.rotation.y=Math.PI/4;for(let[k,P]of m){c.add([t+k*3.9,86.7,e+P*3.9],[t+k*6.6,90,e+P*6.6],.28);for(let Z of[-.5,0,.5]){let ct=[t+k*3.9*1,86.7,e+P*3.9],Ht=[t+k*6.6,90,e+P*6.6]}}for(let k=0;k<4;k++){let[P,Z]=m[k],[ct,Ht]=m[(k+1)%4],rt=[(P+ct)/2,(Z+Ht)/2];c.add([t+rt[0]*3.9,86.7,e+rt[1]*3.9],[t+rt[0]*6.6,90,e+rt[1]*6.6],.16)}for(let[k,P]of m)h(new $t.BoxGeometry(1.6,.5,1.6),r,t+k*3.7,86.8,e+P*3.7);h(new $t.BoxGeometry(I+.8,.45,I+.8),r,t,90,e);for(let k=-3;k<=3;k++)l.add([t-I/2,89.6,e+k*2.2],[t+I/2,89.6,e+k*2.2],.12),l.add([t+k*2.2,89.6,e-I/2],[t+k*2.2,89.6,e+I/2],.12);let O=cp({panes:15,rows:1,w:1024,h:192,seed:77,deck:!0}),q=new $t.MeshStandardMaterial({map:O.map,emissiveMap:O.emissiveMap,emissive:new $t.Color(1,1,1),emissiveIntensity:.4,roughnessMap:O.rough,metalnessMap:O.rough,roughness:1,metalness:1});n.deckMat=q;let V=h(new $t.BoxGeometry(I,z,I),[q,q,i,r,q,q],t,N+.2+z/2,e),st=N+.2+z;h(new $t.BoxGeometry(I+1.4,.55,I+1.4),i,t,st+.28,e),h(new $t.BoxGeometry(I+.9,.4,I+.9),r,t,N+.2,e);let X=(I+1.4)/2-.2,$=st+.55;for(let k=0;k<4;k++){let[P,Z]=m[k],[ct,Ht]=m[(k+1)%4],rt=[t+P*X,$+1,e+Z*X],qt=[t+ct*X,$+1,e+Ht*X];l.add(rt,qt,.05),l.add([rt[0],$+.5,rt[2]],[qt[0],$+.5,qt[2]],.03);for(let Ct=0;Ct<10;Ct++){let Dt=w([rt[0],$,rt[2]],[qt[0],$,qt[2]],Ct/10);l.add(Dt,[Dt[0],$+1,Dt[2]],.035)}}h(new $t.BoxGeometry(6.2,2.8,6.2),i,t,$+1.4,e),h(new $t.BoxGeometry(3.6,1.6,3.6),r,t+.4,$+3.6,e-.3),h(new $t.CylinderGeometry(.9,.9,1.4,12),r,t-4.8,$+.7,e+3.8),h(new $t.CylinderGeometry(.5,.5,1.1,10),r,t+4.6,$+.55,e-4.2),h(new $t.BoxGeometry(2.2,1,1.4),r,t+4.5,$+.5,e+4.4);let nt=$+3.2,At=126.5,at=k=>x(2.2,.95,(k-nt)/(At-nt)),G=(k,P,Z,ct=1)=>[t+k*at(Z)*ct,Z,e+P*at(Z)*ct],lt=6,vt=[];for(let k=0;k<=lt;k++)vt.push(x(nt,At,k/lt));for(let k=0;k<lt;k++){let P=vt[k],Z=vt[k+1],ct=k/lt,Ht=x(.34,.17,ct);for(let rt=0;rt<4;rt++){let[qt,Ct]=m[rt],[Dt,C]=m[(rt+1)%4];l.add(G(qt,Ct,P),G(qt,Ct,Z),Ht,Ht*.92),S(G(qt,Ct,P),G(Dt,C,Z),.095),S(G(Dt,C,P),G(qt,Ct,Z),.095),l.add(G(qt,Ct,Z),G(Dt,C,Z),.12);let b=G(qt,Ct,Z);c.add([b[0],Z-.3,b[2]],[b[0],Z+.3,b[2]],Ht*1.5)}}let kt=(k,P)=>{h(new $t.BoxGeometry(P*2,.15,P*2),r,t,k,e,!1);for(let Z=0;Z<4;Z++){let[ct,Ht]=m[Z],[rt,qt]=m[(Z+1)%4],Ct=[t+ct*P,k+.95,e+Ht*P],Dt=[t+rt*P,k+.95,e+qt*P];l.add(Ct,Dt,.04);for(let C=0;C<4;C++){let b=w([Ct[0],k,Ct[2]],[Dt[0],k,Dt[2]],C/4);l.add(b,[b[0],k+.95,b[2]],.03)}}};kt(vt[3],2.9),kt(vt[5],2.4);let wt=new $t.MeshStandardMaterial({color:15922164,roughness:.4,metalness:.5,side:$t.DoubleSide}),Vt=new $t.SphereGeometry(1.15,18,8,0,Math.PI*2,0,.75),xe=(k,P,Z)=>{let ct=new $t.Mesh(Vt,wt);ct.position.set(t+Math.cos(k)*3.6,P,e+Math.sin(k)*3.6),ct.rotation.set(0,-k+Math.PI/2,Math.PI/2+.2*0),ct.rotateZ(0),ct.scale.setScalar(Z),ct.lookAt(t+Math.cos(k)*30,P+1,e+Math.sin(k)*30),ct.rotateX(Math.PI/2*0),ct.castShadow=!0,s.add(ct),l.add([t+Math.cos(k)*2.4,P-.1,e+Math.sin(k)*2.4],[t+Math.cos(k)*3.5,P,e+Math.sin(k)*3.5],.1),l.add([t+Math.cos(k)*3.6,P,e+Math.sin(k)*3.6],[t+Math.cos(k)*4.5,P+.1,e+Math.sin(k)*4.5],.05,.03)};xe(.6,vt[4]+.3,1),xe(3.5,vt[4]+.3,.8),xe(5.2,vt[2]+.3,.9);for(let k=0;k<4;k++){let P=k*Math.PI/2+Math.PI/4,Z=new $t.Mesh(new $t.BoxGeometry(.14,2.4,.55),i);Z.position.set(t+Math.cos(P)*3.3,vt[5]+1.2,e+Math.sin(P)*3.3),Z.rotation.y=-P,Z.castShadow=!0,s.add(Z),l.add([t+Math.cos(P)*1.5,vt[5]+1.2,e+Math.sin(P)*1.5],[t+Math.cos(P)*3.2,vt[5]+1.2,e+Math.sin(P)*3.2],.06)}let Pt=At;h(new $t.CylinderGeometry(.5,.62,.9,12),r,t,Pt+.45,e),c.add([t,Pt,e],[t,Pt+8,e],.55,.42),l.add([t,Pt,e],[t,Pt+8,e],.5,.38),c.add([t,Pt+8,e],[t,Pt+8.4,e],.9,.9),c.add([t,Pt+4,e],[t,Pt+4.3,e],.8,.8),l.add([t,Pt+8.4,e],[t,Pt+15,e],.3,.2),c.add([t,Pt+12.2,e],[t,Pt+12.45,e],.55,.55),l.add([t,Pt+15,e],[t,147.2,e],.17,.045),l.add([t-1.7,Pt+11.2,e],[t+1.7,Pt+11.2,e],.05),l.add([t,Pt+11.2,e-1.4],[t,Pt+11.2,e+1.4],.05);for(let k=0;k<3;k++){let P=k/3*Math.PI*2;l.add([t,Pt+4.2,e],[t+Math.cos(P)*1.9,Pt+1.5,e+Math.sin(P)*1.9],.05)}let ee=(k,P)=>new $t.MeshStandardMaterial({map:P.map,emissiveMap:P.emissiveMap,emissive:new $t.Color(1,1,1),emissiveIntensity:.35,roughnessMap:P.rough,metalnessMap:P.rough,roughness:1,metalness:.4}),oe=cp({panes:12,rows:2,w:1024,h:256,seed:91,deck:!1}),it=cp({panes:8,rows:2,w:1024,h:256,seed:92,deck:!1}),mt=ee(12,oe),dt=ee(8,it);n.baseMats=[mt,dt];let Nt=new $t.MeshStandardMaterial({color:15659510,roughness:.7}),ft=34,Qt=22,Bt=10;h(new $t.BoxGeometry(ft,Bt,Qt),[dt,dt,Nt,a,mt,mt],t,Bt/2,e+.5),h(new $t.BoxGeometry(ft+.8,.8,Qt+.8),o,t,Bt+.3,e+.5),h(new $t.BoxGeometry(5.5,.35,9),i,t-ft/2-2.6,3.8,e+.5);for(let k of[-1,1])h(new $t.CylinderGeometry(.17,.17,3.8,8),i,t-ft/2-4.9,1.9,e+.5+k*4.2);let se=new $t.MeshStandardMaterial({color:4869975,roughness:.5,metalness:.5,emissive:new $t.Color(1,.75,.45),emissiveIntensity:0});n.bolM=se;for(let k=0;k<26;k++){let P=k/26*Math.PI*2,Z=t+Math.cos(P)*31,ct=e+Math.sin(P)*21;Math.abs(ct-e)<12&&Math.abs(Z-t)<19||h(new $t.CylinderGeometry(.16,.16,.9,8),se,Z,.45,ct,!1)}let te=l_(5);for(let[k,P,Z,ct]of[[-ft/2-6,-9,3,2],[-ft/2-6,10,3,2],[ft/2+4,-6,2,3],[ft/2+4,8,2,3]])h(new $t.BoxGeometry(Z*2,.7,ct*2),a,t+k,.35,e+P,!1),h(new $t.SphereGeometry(1,10,6),o,t+k,.7,e+P,!1).scale.set(Z*.95,.45,ct*.95);for(let k=0;k<9;k++){let P=te()*Math.PI*2,Z=23+te()*10,ct=h(new $t.SphereGeometry(1,10,6),o,t+Math.cos(P)*Z*1.1,.2,e+Math.sin(P)*Z*.75,!1);ct.scale.set(1.5+te()*2.2,.5+te()*.6,1.2+te()*1.8),ct.rotation.y=te()*3}for(let k=0;k<3;k++){let P=t-27,Z=e-6+k*6;l.add([P,0,Z],[P,8.5,Z],.09,.06)}return s.add(l.build({castShadow:!0,sides:6}),c.build({castShadow:!0,sides:7})),n.beacon=Ql($t,{positions:new Float32Array([t,148,e,t,Pt+8.6,e,t+1,$+5.3,e]),colors:new Float32Array([14,.6,.4,6,.4,.3,4,.3,.25]),sizes:new Float32Array([2.4,1.4,1.1]),fogDensity:4e-5,minPx:2,maxPx:40}),s.add(n.beacon.points),n}var $t,h_=be(()=>{Ye();op();lp();$t=me});function hp(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Yt;l.morphTargetsRelative=o;let c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0,p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[f].length!==s[0].morphAttributes[f].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+f+'" morph attribute.'),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let p=s[d].index;for(let f=0;f<p.count;++f)u.push(p.getX(f)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=u_(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let _=0;_<a[h].length;++_)p.push(a[h][_][d]);let f=u_(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(f)}}}return l}function u_(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new de(a,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,p=h.count;d<p;d++)for(let f=0;f<e;f++){let _=h.getComponent(d,f);o.setComponent(d+u,f,_)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}var d_=be(()=>{Ye()});function z1(s){let n=[[-2.25,.34],[-2.25,.86],[-1.95,.98],[-1.45,1],[-.95,1.46],[.45,1.47],[1.05,1.02],[2,.9],[2.25,.78],[2.25,.34]],i=new s.Shape(n.map(([d,p])=>new s.Vector2(d,p))),r=new s.ExtrudeGeometry(i,{depth:1.8-.12,bevelEnabled:!0,bevelThickness:.06,bevelSize:.06,bevelSegments:1,curveSegments:1});r.translate(0,0,-(1.8-.12)/2),r.deleteAttribute("uv");let a=new s.ExtrudeGeometry(new s.Shape([[-.88,1.03],[-.5,1.4],[.4,1.41],[.96,1.06]].map(([d,p])=>new s.Vector2(d,p))),{depth:1.8+.02,bevelEnabled:!1});a.translate(0,0,-(1.8+.02)/2),a.deleteAttribute("uv");let o=[];for(let d of[1.45,-1.4])for(let p of[-1,1]){let f=new s.CylinderGeometry(.34,.34,.24,10);f.rotateX(Math.PI/2),f.translate(d,.34,p*(1.8/2-.1)),f.deleteAttribute("uv"),o.push(f)}let l=new s.BoxGeometry(4.5-.5,.18,1.8-.08);l.translate(0,.43,0),l.deleteAttribute("uv");let c=(d,p,f)=>{let _=d.attributes.position.count,m=new Float32Array(_*3),g=new Float32Array(_);for(let x=0;x<_;x++)m[x*3]=p[0],m[x*3+1]=p[1],m[x*3+2]=p[2],g[x]=f;return d.setAttribute("color",new s.BufferAttribute(m,3)),d.setAttribute("aPart",new s.BufferAttribute(g,1)),d},h=[c(r,[1,1,1],0),c(a,[.045,.055,.07],1),c(l,[.34,.33,.32],1),...o.map(d=>c(d,[.03,.03,.035],1))],u=hp(h.map(d=>d.index?d.toNonIndexed():d));return u.computeVertexNormals(),u}function k1(s){s.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aPart;`).replace("#include <color_vertex>",`#include <color_vertex>
if (aPart > 0.5) vColor.xyz = color.xyz;`)},s.customProgramCacheKey=()=>"part-color-v1"}function m_(s,t){let e=z1(s),n=new s.MeshStandardMaterial({color:16777215,roughness:.34,metalness:.5,vertexColors:!0});k1(n);let i=new s.InstancedMesh(e,n,t.length);i.frustumCulled=!1,i.castShadow=!1,i.receiveShadow=!1;let r=new s.Color;t.forEach((_,m)=>{r.setHex(f_[(m*7+(_.ph*97|0))%f_.length]),i.setColorAt(m,r)});let a=new s.Matrix4,o=new s.Quaternion,l=new s.Vector3,c=new s.Vector3(1,1,1),h=new s.Vector3(0,1,0),u=new s.Vector3(0,0,1),d=new s.Quaternion,p=.8,f=(_,m)=>{let g=Math.PI*2/(16+_.ph*26),x=_.ph*40,y=_.speed*(m+p*Math.sin(g*m+x)/g),M=((_.off+_.dir*y)%_.len+_.len)%_.len+_.min,w=_.speed*(1+p*Math.cos(g*m+x)),T=-_.speed*p*g*Math.sin(g*m+x);return{pos:_.alongX?[M,_.fixed]:[_.fixed,M],v:w,acc:T}};return{mesh:i,posOf:f,update(_,m){for(let g=0;g<t.length;g++){let x=t[g],{pos:[y,M],acc:w}=f(x,_),T=x.alongX?x.dir>0?0:Math.PI:x.dir>0?-Math.PI/2:Math.PI/2;if(o.setFromAxisAngle(h,T),d.setFromAxisAngle(u,Math.max(-.03,Math.min(.03,-w*.012))),o.multiply(d),l.set(y,0,M),a.compose(l,o,c),i.setMatrixAt(g,a),m){let v=x.alongX?x.dir:0,S=x.alongX?0:x.dir,R=x.alongX?0:.7,E=x.alongX?.7:0,I=y+v*2.2,N=M+S*2.2,z=y-v*2.2,D=M-S*2.2,O=g*12;m[O++]=I-R,m[O++]=.74,m[O++]=N-E,m[O++]=I+R,m[O++]=.74,m[O++]=N+E,m[O++]=z-R,m[O++]=.9,m[O++]=D-E,m[O++]=z+R,m[O++]=.9,m[O++]=D+E}}i.instanceMatrix.needsUpdate=!0}}}function G1(s){let t=[],e=(o,l,c,h,u)=>{o.deleteAttribute("uv");let d=o.index?o.toNonIndexed():o,p=d.attributes.position.count,f=new Float32Array(p*3),_=new Float32Array(p),m=new Float32Array(p),g=new Float32Array(p);for(let x=0;x<p;x++)f[x*3]=l[0],f[x*3+1]=l[1],f[x*3+2]=l[2],_[x]=c,m[x]=h,g[x]=u;d.setAttribute("color",new s.BufferAttribute(f,3)),d.setAttribute("aPart",new s.BufferAttribute(_,1)),d.setAttribute("aSide",new s.BufferAttribute(m,1)),d.setAttribute("aPivot",new s.BufferAttribute(g,1)),t.push(d)},n=new s.BoxGeometry(.44,.62,.26);n.translate(0,1.18,0),e(n,[1,1,1],0,0,0);let i=new s.SphereGeometry(.115,8,6);i.translate(0,1.6,0),e(i,[.82,.64,.54],1,0,0);let r=new s.SphereGeometry(.125,8,5,0,Math.PI*2,0,Math.PI*.55);r.translate(0,1.625,0),e(r,[.16,.17,.2],1,0,0);for(let o of[-1,1]){let l=new s.BoxGeometry(.16,.86,.17);l.translate(0,.43,o*.11),e(l,[.07,.075,.09],1,o,.86);let c=new s.BoxGeometry(.11,.56,.11);c.translate(0,1.14,o*.27),e(c,[1,1,1],0,-o,1.46);let h=new s.BoxGeometry(.24,.1,.18);h.translate(.04,.05,o*.11),e(h,[.05,.05,.05],1,o,.86)}let a=hp(t);return a.computeVertexNormals(),a}function g_(s,t){let e=G1(s),n=new Float32Array(t.length);e.setAttribute("aGait",new s.InstancedBufferAttribute(n,1));let i=new s.MeshStandardMaterial({color:16777215,roughness:.9,metalness:0,vertexColors:!0});i.onBeforeCompile=p=>{p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
attribute float aPart, aSide, aPivot, aGait;`).replace("#include <color_vertex>",`#include <color_vertex>
if (aPart > 0.5) vColor.xyz = color.xyz;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        if (aSide != 0.0) {
          float ang = sin(aGait) * 0.62 * aSide;
          float cs = cos(ang), sn = sin(ang);
          vec2 d = vec2(transformed.x, transformed.y - aPivot);
          transformed.x = d.x * cs - d.y * sn;
          transformed.y = aPivot + d.x * sn + d.y * cs;
        }
        transformed.y += abs(sin(aGait)) * 0.035;`)},i.customProgramCacheKey=()=>"walker-v1";let r=new s.InstancedMesh(e,i,t.length);r.frustumCulled=!1,r.castShadow=!1;let a=new s.Color;t.forEach((p,f)=>{a.setHex(p_[(f*5+(p.ph*31|0))%p_.length]),r.setColorAt(f,a)});let o=new s.Matrix4,l=new s.Quaternion,c=new s.Vector3,h=new s.Vector3(1,1,1),u=new s.Vector3(0,1,0),d=1.35;return{mesh:r,update(p){for(let f=0;f<t.length;f++){let _=t[f],m=Math.abs(_.x1-_.x0),g=((_.off+_.speed*p)%(2*m)+2*m)%(2*m),x=g<m?g:2*m-g,y=(g<m?1:-1)*(_.dir>0?1:-1),M=Math.min(_.x0,_.x1)+(_.dir>0?x:m-x);l.setFromAxisAngle(u,y>0?0:Math.PI),c.set(M,0,_.z+Math.sin(M*.07+_.ph*9)*.35),o.compose(c,l,h),r.setMatrixAt(f,o),n[f]=g/d*Math.PI*2+_.ph*6.28}r.instanceMatrix.needsUpdate=!0,e.attributes.aGait.needsUpdate=!0}}}var f_,p_,__=be(()=>{d_();f_=[15921906,15263978,13225170,9277849,1776930,2764602,8003359,2045270,14209732,11975360,4081233];p_=[1382172,2106412,2830138,3812139,1911615,4868690,8006186,2902586,9071146,14474460,5913386,3493998]});function Bu({kita:s,minami:t,nishi:e,higashi:n}){let i=e?-e:n-1,r=H1(i),a=s?up(s-1):dp(t-1);return{x:r,z:a,j:i}}var jl,zu,V1,H1,up,dp,CT,x_=be(()=>{jl={x:-90,z:0},zu=s=>-54+108*s,V1=s=>62.5+108*s,H1=s=>108*s,up=s=>-(116.5+108*s),dp=s=>116.5+108*s;CT={tvTower:{name:"\u3055\u3063\u307D\u308D\u30C6\u30EC\u30D3\u5854",...jl,basis:"\u5927\u901A\u897F1\u4E01\u76EE\uFF08\u6771\u7AEF\u4ED8\u8FD1\uFF09",model:"\u624B\u7D9A\u304D\u751F\u6210\u306E\u6982\u7565\u30E2\u30C7\u30EB\uFF08\u9AD8\u3055147.2m\u30FB\u5C55\u671B\u53F0\u7D0490m\uFF09"},jrTower:{name:"JR\u30BF\u30EF\u30FC",...Bu({kita:5,nishi:2}),basis:"\u53175\u6761\u897F2\u4E01\u76EE",model:"\u624B\u7D9A\u304D\u751F\u6210\u306E\u6982\u7565\u30E2\u30C7\u30EB\uFF08\u9AD8\u3055173m\uFF09"},station:{name:"\u672D\u5E4C\u99C5",...Bu({kita:6,nishi:3}),basis:"\u53176\u6761\u897F4\u4E01\u76EE\u4ED8\u8FD1",model:"\u4F4E\u5C64\u306E\u99C5\u30D3\u30EB\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},clockTower:{name:"\u672D\u5E4C\u5E02\u6642\u8A08\u53F0",...Bu({kita:1,nishi:2}),basis:"\u53171\u6761\u897F2\u4E01\u76EE",model:"\u624B\u7D9A\u304D\u751F\u6210\u306E\u6982\u7565\u30E2\u30C7\u30EB\uFF08\u6728\u90202\u968E\u5EFA\u3066\u30FB\u4E2D\u592E\u306B\u6642\u8A08\u5854\uFF09"},tanukikoji:{name:"\u72F8\u5C0F\u8DEF",x:-430,z:332.5,basis:"\u53572\u301C3\u6761\u30FB\u897F1\u301C7\u4E01\u76EE\uFF08\u8857\u533A\u306E\u4E2D\u592E\u3092\u901A\u308B\u5546\u5E97\u8857\uFF09",model:"\u30A2\u30FC\u30B1\u30FC\u30C9\u5546\u5E97\u8857\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},susukino:{name:"\u3059\u3059\u304D\u306E\u4EA4\u5DEE\u70B9",x:zu(-4)+0,z:V1(4),basis:"\u53574\u301C5\u6761\u897F4\u4E01\u76EE\u4ED8\u8FD1",model:"\u4EA4\u5DEE\u70B9\u3068\u30CD\u30AA\u30F3\u770B\u677F\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},factory:{name:"\u30B5\u30C3\u30DD\u30ED\u30D5\u30A1\u30AF\u30C8\u30EA\u30FC",...Bu({kita:2,higashi:4}),basis:"\u53172\u6761\u67714\u4E01\u76EE",model:"\u8D64\u30EC\u30F3\u30AC\u68DF\u3068\u30AC\u30E9\u30B9\u5C4B\u6839\u306E\u30A2\u30C8\u30EA\u30A6\u30E0\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},moiwa:{name:"\u85FB\u5CA9\u5C71\uFF08\u5C55\u671B\u53F0\uFF09",x:-2496,z:3607,elev:531,basis:"\u7DEF\u5EA6\u7D4C\u5EA6\uFF08\u6982\u7565\uFF09\u304B\u3089\u306E\u914D\u7F6E",model:"\u5730\u5F62\u306E\u76DB\u308A\u4E0A\u304C\u308A\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"}}});var v_,y_,fp,Gu,M_=be(()=>{Ye();Jg();ap();wa();jg();op();a_();h_();lp();__();x_();v_=[{id:"overview",name:"\u672D\u5E4C\u306E\u5168\u666F",start:0,end:5,ready:!1},{id:"station",name:"\u672D\u5E4C\u99C5\u30FBJR\u30BF\u30EF\u30FC",start:5,end:11,ready:!1},{id:"odori",name:"\u5927\u901A\u516C\u5712\u30FB\u3055\u3063\u307D\u308D\u30C6\u30EC\u30D3\u5854",start:11,end:18,ready:!0},{id:"clocktower",name:"\u672D\u5E4C\u5E02\u6642\u8A08\u53F0",start:18,end:25,ready:!1},{id:"susukino",name:"\u72F8\u5C0F\u8DEF\u30FB\u3059\u3059\u304D\u306E",start:25,end:32,ready:!1},{id:"factory",name:"\u30B5\u30C3\u30DD\u30ED\u30D5\u30A1\u30AF\u30C8\u30EA\u30FC",start:32,end:39,ready:!1},{id:"moiwa",name:"\u85FB\u5CA9\u5C71\u304B\u3089\u306E\u591C\u666F",start:39,end:49,ready:!1},{id:"ending",name:"ENDING",start:49,end:55,ready:!1}],y_=new L(-.66,.25,.71).normalize(),fp=[{zenith:"#24508f",horizon:"#a9c6e8",horizonWarm:"#ffbd80",sun:"#ffd2a2",cloudLit:"#ffdcc0",cloudDark:"#8296b8",fog:"#bfd0e6",sunCol:"#ffc88f",fogD:62e-6},{zenith:"#0f2a5c",horizon:"#4a78b4",horizonWarm:"#f29a58",sun:"#ff9d62",cloudLit:"#eaa68e",cloudDark:"#3b4d7c",fog:"#5a7fb0",sunCol:"#ff9a60",fogD:7e-5},{zenith:"#050b20",horizon:"#12305c",horizonWarm:"#243e66",sun:"#ff9a60",cloudLit:"#3a4a70",cloudDark:"#0c1630",fog:"#122646",sunCol:"#ff9a60",fogD:8e-5}],Gu=class extends Ou{constructor(t,e,n,i={}){super(t,e,n,i),this.shot=v_.find(r=>r.id===(i.shot||"odori"))??v_[2],this.timeOffset=this.shot.start,this.duration=this.shot.end-this.shot.start,this.timeline.duration=this.duration,this.timeline.frameCount=Math.round(this.duration*this.timeline.fps),this.showTitle=this.shot.id==="ending",this.fadeSec=.35,this.nightU={value:.1},this.snowU={value:1}}async build(){let t=Kg(20261115),e=this.scene,n=fp[0],i=Qg(me,{sunDir:y_,colors:{...n,cloudCover:.36}});if(this.sky=i,e.add(i.mesh),e.fog=new Ds(new gt(n.fog),n.fogD),this.glRenderer){let d=new qn;d.add(new ye(i.mesh.geometry,i.material));let p=new Ks(this.glRenderer);e.environment=p.fromScene(d,.015,1,3e3).texture,p.dispose()}let r=new Hs(16763023,3.4),a=this.shot.id==="odori"?new L(-330,0,0):new L(-500,0,-250);r.position.copy(a).addScaledVector(y_,3e3),r.target.position.copy(a),r.castShadow=!0,r.shadow.mapSize.set(4096,4096);let o=r.shadow.camera,l=this.shot.id==="odori"?[560,260]:[1700,520];o.left=-l[0],o.right=l[0],o.top=l[1],o.bottom=-l[1],o.near=200,o.far=6500,r.shadow.bias=-2e-4,r.shadow.normalBias=.9,e.add(r,r.target),this.sun=r,this.hemi=new ks(15134463,14271394,.5),e.add(this.hemi),e.add(r_(me,{size:9e4,y:-40})),e.add(s_(me,{heightFn:i_(),y:-4})),e.add(this._buildGround()),this._buildCity(t),this._buildTVTower(),this._buildParkAndStreet(t),this._buildTraffic(t),this.snow=o_(me,{count:14e3,box:150,fall:3,wind:[2.2,.8],size:.06,bright:.55}),e.add(this.snow.points);let c=d=>{let p=d*d*(3-2*d),f=1-(1-d)*(1-d);return .5*p+.5*f},h=d=>d;this.rig=new js([{t:11,pos:[-420,40,14],target:[-140,54,-2],fov:38,ease:h},{t:12.78,pos:[-313,50,32],target:[-100,103,-20],fov:34,ease:h},{t:14.36,pos:[-211,62,44],target:[-108,76,-33],fov:35,ease:h},{t:15.99,pos:[-111,77,54],target:[-95,82,-25],fov:36,ease:h},{t:17.63,pos:[-61,85,39],target:[-109,85,-13],fov:37,ease:h},{t:18,pos:[-64,97,45],target:[-188,91,-69],fov:38,ease:h}],{shakeAmp:.1,shakeSeed:4,timeWarp:c});let u=d=>new Zl(d.map(([p,f])=>({t:p,v:f})));this.tracks={night:u([[0,.04],[11,.1],[18,.22],[25,.55],[32,.8],[39,1],[55,1]]),palette:u([[0,0],[11,.12],[18,.4],[25,.85],[32,1.2],[39,2],[55,2]]),sunPower:u([[0,3.8],[18,3.1],[25,1.5],[32,.5],[39,0],[55,0]]),envPower:u([[0,.75],[18,.62],[25,.46],[32,.36],[39,.2],[55,.2]]),exposure:u([[0,1],[55,1]]),bloom:u([[0,.22],[18,.3],[32,.45],[55,.55]]),bloomThreshold:u([[0,1.5],[55,1]]),bloomRadius:u([[0,.5],[55,.7]]),dofAperture:u([[0,.5],[55,.6]]),dofMaxBlur:u([[0,4],[55,5]])},this.look.grade={uShadowAmt:.3,uVig:.3,uSat:1.04,uGrain:.022,uAberr:7e-4,uHighTint:new gt(1.03,1,.96)},this._ca=new gt,this._cb=new gt}_buildGround(){let t=new Ci(12e3,12e3,1,1);t.rotateX(-Math.PI/2);let e=new Un({color:16777215,roughness:.85,metalness:0});e.customProgramCacheKey=()=>"sapporo-ground-v2";let n=this.nightU;e.onBeforeCompile=r=>{r.uniforms.uNight=n,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
          uniform float uNight; varying vec3 vWP;
          ${hs}`).replace("#include <color_fragment>",`#include <color_fragment>
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
totalEmissiveRadiance += gEmis;`)};let i=new ye(t,e);return i.receiveShadow=!0,i}_buildCity(t){let e=t_(me,{uNight:this.nightU,uSnow:this.snowU}),n=new Ta(me,e,11e4),i=new Ta(me,e,3e4,e_(me));this.boxes=n;let r=new Ta(me,e,12e3,n_(me)),a=(f,_,m,g)=>Math.hypot(f-m,_-g),o=(f,_)=>{let m=Math.exp(-(((Math.abs(_)-112)/170)**2))*(f>-1500&&f<400?1:.3),g=Math.exp(-((a(f,_,-300,-600)/420)**2)),x=Math.exp(-((a(f,_,-430,520)/380)**2)),y=a(f,_,-450,-100);return Math.max(m,g,x)*.85+.25*Math.exp(-((y/1700)**2))},l=f=>{let _=t();return f>.55?_<.32?0:_<.55?2:_<.75?4:_<.85?1:3:f>.3?_<.25?0:_<.4?2:_<.6?4:_<.7?1:3:_<.12?0:_<.18?4:_<.25?1:3},c=f=>f===3?2.9:f===4?3.9:f===2?3.8:3.6,h=(f,_,m,g,x,y,M)=>{let w=Math.abs(m)<700&&f>-1500&&f<500;w&&g>12&&x>12&&(n.add(f,_,m-x/2+.35/2,g,.9,.35,6,y,M),n.add(f,_,m+x/2-.35/2,g,.9,.35,6,y,M),n.add(f-g/2+.35/2,_,m,.35,.9,x-2*.35,6,y,M),n.add(f+g/2-.35/2,_,m,.35,.9,x-2*.35,6,y,M));let T=t.int(2,w?5:3);for(let v=0;v<T;v++){let S=f+t.range(-g*.3,g*.3),R=m+t.range(-x*.3,x*.3),E=t();if(E<.34)n.add(S,_,R,t.range(2,Math.min(7,g*.35)),t.range(1.2,2.2),t.range(1.5,Math.min(5,x*.35)),5,y+v*.13,M);else if(E<.58)n.add(S,_,R,t.range(3,5),t.range(2.6,3.4),t.range(3,5),0,y+v*.17,M,0,[3,3.2,.3,.3]);else if(E<.82){let I=t.range(2,3.6);r.add(S,_,R,I,t.range(2.2,3.6),I,5,y+v*.11,M)}else n.add(S,_,R,.18,t.range(5,12),.18,6,y,M)}},u=!1,d=(f,_,m,g,x,y,M)=>{let w=t(),T=t(),v=c(y),S=Math.max(6,x*v);if(y===3&&x<=3&&!u&&t()<.7){n.add(f,0,_,m,S*.78,g,3,w,T);let R=Math.min(m,g)*t.range(.28,.4),E=m>=g;i.add(f,S*.78,_,(E?g:m)+.8,R,(E?m:g)+.8,3,w,T,E?Math.PI/2:0,[2.6,2.9,.5,.5]);return}if(x>=11&&m>30&&g>30){let R=t.int(3,4),E=R*4.2;n.add(f,0,_,m,E,g,t()<.5?4:0,w,T);let I=m*t.range(.55,.8),N=g*t.range(.5,.75),z=f+(m-I)*t.range(-.3,.3),D=_+(g-N)*t.range(-.3,.3),O=S-E;n.add(z,E,D,I,O,N,y===4?2:y,w+.31,T),t()<.5&&n.add(z,S,D,I*.6,t.range(4,9),N*.6,0,w+.7,T,0,[4,3.6,.8,.3]),h(z,S,D,I,N,w,T);return}if(x>=6&&t()<.4){let R=Math.ceil(x*.65),E=R*v;n.add(f,0,_,m,E,g,y,w,T);let I=t.range(3,6);n.add(f+t.range(-1.5,1.5),E,_+t.range(-1.5,1.5),m-I*2,S-E,g-I*2,y,w+.2,T),h(f,S,_,m-I*2,g-I*2,w,T);return}if(x>=5&&m>28&&g>28&&t()<.45){n.add(f,0,_,m,S,g,y,w,T);let R=m*t.range(.35,.5),E=g*t.range(.4,.6),I=Math.max(6,(x-t.int(2,3))*v),N=t()<.5?1:-1,z=t()<.5?1:-1;n.add(f+N*(m/2+R/2-.5),0,_+z*(g/2-E/2),R,I,E,y===2?0:y,w+.4,T),h(f,S,_,m,g,w,T);return}n.add(f,0,_,m,S,g,y,w,T),S>12&&h(f,S,_,m,g,w,T)},p=(f,_,m,g)=>{let x=a(f,_,-450,-100);if(x>4600)return;let y=o(f,_),M=x>2600,w=2.6+8.5*y*y+1.4*y,T=t(),v=()=>t.range(2.5,5.5);if(u=M,M){let R=x<3400?2:1,E=x<3400?2:1,I=m*2/R,N=g*2/E,z=t.range(2.5,4.5);for(let D=0;D<R;D++)for(let O=0;O<E;O++){let q=Math.max(2,Math.round(z+t.range(-.6,.6)));d(f-m+(D+.5)*I,_-g+(O+.5)*N,I-t.range(2,4),N-t.range(2,4),q,3,.1)}return}let S=()=>Math.max(2,Math.round(w*(.55+Math.pow(t(),1.5)*1.1)*(t()<.07&&y>.5?1.7:1)));if(T<.28+.2*y)d(f,_,m*2-t.range(3,8),g*2-t.range(3,8),Math.min(22,S()+1),l(y),y);else if(T<.55){let R=t()<.5,E=t.range(.38,.62);if(R){let I=m*2*E-2,N=m*2*(1-E)-2;d(f-m+I/2+1,_,I,g*2-v(),S(),l(y),y),d(f+m-N/2-1,_,N,g*2-v(),S(),l(y),y)}else{let I=g*2*E-2,N=g*2*(1-E)-2;d(f,_-g+I/2+1,m*2-v(),I,S(),l(y),y),d(f,_+g-N/2-1,m*2-v(),N,S(),l(y),y)}}else if(T<.75){let R=t.int(3,5),E=m*2/R,I=t()<.5?-1:1,N=t.range(.55,.75)*g*2;for(let z=0;z<R;z++)d(f-m+(z+.5)*E,_+I*(g-N/2),E-t.range(.4,1.4),N,Math.max(2,S()+t.int(-1,1)),l(y),y);d(f,_-I*(g-(g*2-N)/2),m*2-3,g*2-N-3,Math.max(2,S()-1),l(y*.6),y)}else{let R=m,E=g;for(let I=0;I<2;I++)for(let N=0;N<2;N++)d(f-m+(I+.5)*R,_-g+(N+.5)*E,R-v(),E-v(),S(),l(y),y)}};for(let f=-30;f<=28;f++){let _=108*f;f>=-12&&f<=-1||p(_,0,44,50.5);for(let m=0;m<=19;m++)for(let g of[-1,1]){let x=g<0?up(m):dp(m);p(_,x,44,44)}}this.scene.add(n.build(),i.build(),r.build())}_buildTVTower(){let t=c_(this.scene,jl);this.towerSteel=t.steel,this.towerSteel2=t.steelDark,this.deckMat=t.deckMat,this.beacon=t.beacon,this.baseMats=t.baseMats,this.bolM=t.bolM}_buildParkAndStreet(t){let e=new Un({color:4406584,roughness:.95}),n=new Un({color:15922682,roughness:.75}),i=new di(me,e),r=new di(me,n),a=(x,y,M,w,T,v)=>{let S=[x[0]+y[0]*M,x[1]+y[1]*M,x[2]+y[2]*M],R=w*(T===0?.55:.4);if(i.add(x,S,w,R),T<=2&&y[1]>.35&&w>.045&&r.add([x[0],x[1]+w*.8,x[2]],[S[0],S[1]+R*.8,S[2]],w*.7,R*.6),T>=3)return;let E=T===0?t.int(3,4):t.int(2,3),I=t()*Math.PI*2;for(let N=0;N<E;N++){let z=I+N/E*Math.PI*2+t.range(-.5,.5),D=Math.min(1.25,v*t.range(.7,1.3)),O=[Math.cos(z)*Math.sin(D),Math.cos(D)*.9+.1,Math.sin(z)*Math.sin(D)],q=Math.hypot(...O),V=T===0?1:t.range(.6,1),st=[x[0]+(S[0]-x[0])*V,x[1]+(S[1]-x[1])*V,x[2]+(S[2]-x[2])*V];a(st,O.map(X=>X/q),M*t.range(.55,.72),R*t.range(.7,.9),T+1,v*1.12)}},o=(x,y)=>{let M=t.range(8,13.5),w=[t.range(-.12,.12),1,t.range(-.12,.12)],T=Math.hypot(...w);a([x,0,y],w.map(v=>v/T),M*.4,t.range(.3,.42),0,t.range(.5,.75));for(let v=0;v<2;v++){let S=t()*6.28,R=M*t.range(.18,.32);a([x,R,y],[Math.cos(S)*.8,.55,Math.sin(S)*.8],M*.26,.12,1,.8)}};for(let x=-12;x<=-1;x++){let y=108*x;for(let M of[-42,-22,22,42])for(let w=y-40;w<=y+40;w+=11.5){let T=w+t.range(-2,2),v=M+t.range(-2.5,2.5);Math.hypot(T-jl.x,v-jl.z)<30||Math.abs((T%108+108)%108-54)<11||o(T,v)}}for(let x of[-1,1])for(let y=-1330;y<=-60;y+=15)Math.abs((y%108+108)%108-54)<12||(o(y+t.range(-1.5,1.5),x*(62.5+8.6)),o(y+7+t.range(-1.5,1.5),x*(62.5-8.6)));this.scene.add(i.build({castShadow:!0,sides:5}),r.build({castShadow:!1,sides:4}));let l=new Un({color:4869975,roughness:.6,metalness:.6}),c=new di(me,l),h=new Un({color:3817029,roughness:.5,metalness:.5,emissive:new gt(1,.72,.4),emissiveIntensity:0});this.lampHeadM=h;let u=new di(me,h),d=[],p=[],f=[],_=(x,y,M=9,w=!1)=>{d.push(x,M,y);let T=t.range(.85,1.15);p.push(3.4*T,2*T,.9*T),f.push(1.3),w&&(c.add([x,0,y],[x,M,y],.13,.08),c.add([x,M-.2,y],[x+.9,M+.15,y],.05,.04),u.add([x+.55,M+.02,y],[x+1.25,M+.02,y],.22,.18))},m=2400,g=1900;for(let x=-23;x<=23;x++){let y=zu(x);for(let M=-g;M<=g;M+=44){let w=Math.abs(M)<260&&y>-1400&&y<200;_(y-9.2,M+t.range(-2,2),9,w),_(y+9.2,M+22,9,w)}}for(let x=0;x<=17;x++)for(let y of[-1,1]){let M=y*(62.5+108*x);for(let w=-m;w<=m;w+=44){let T=x===0&&w>-1400&&w<200;_(w+t.range(-2,2),M-9.2,9,T),_(w+22,M+9.2,9,T)}}for(let x=-1330;x<=-110;x+=26)for(let y of[-6.5,6.5])_(x,y,4.6,!0);this.scene.add(c.build({castShadow:!1,sides:5}),u.build({castShadow:!1,sides:6})),this.lamps=Ql(me,{positions:new Float32Array(d),colors:new Float32Array(p),sizes:new Float32Array(f),fogDensity:4e-5,minPx:1.6,maxPx:14}),this.scene.add(this.lamps.points)}_buildTraffic(t){let e=[];for(let l=0;l<1500;l++){let c=t()<.5,h=t()<.5?1:-1,u;if(c){let d=t.int(0,14);u=(t()<.5?-1:1)*(62.5+108*d)+(h>0?-3.4:3.4)}else u=zu(t.int(-20,18))+(h>0?3.4:-3.4);e.push({alongX:c,dir:h,fixed:u,speed:t.range(6,13),off:t.range(0,5e3),len:c?4800:3800,min:c?-2400:-1900,ph:t()})}this.cars=m_(me,e),this.scene.add(this.cars.mesh);let i=new Float32Array(1500*4*3),r=new Float32Array(1500*4*3),a=new Float32Array(1500*4);for(let l=0;l<1500;l++)for(let c=0;c<4;c++){let h=(l*4+c)*3,u=c<2;u?(r[h]=3,r[h+1]=2.9,r[h+2]=2.3):(r[h]=2.4,r[h+1]=.1,r[h+2]=.07),a[l*4+c]=u?.7:.5}this.carGlow=Ql(me,{positions:i,colors:r,sizes:a,fogDensity:4e-5,minPx:1.4,maxPx:12}),this.scene.add(this.carGlow.points);let o=[];for(let l=0;l<260;l++){let c=t.pick([-3,-1.2,1.2,3,-31,31,-29,29]);o.push({x0:-1320,x1:-110,z:c+t.range(-.4,.4),dir:t()<.5?1:-1,speed:t.range(1.1,1.6),off:t.range(0,2400),ph:t()})}for(let l=0;l<40;l++)o.push({x0:-135,x1:-52,z:t.pick([-26,-20,-16,16,20,26])+t.range(-.8,.8),dir:t()<.5?1:-1,speed:t.range(.9,1.5),off:t.range(0,800),ph:t()});this.peds=g_(me,o),this.scene.add(this.peds.mesh)}applyTime(t){let e=this.sampleTrack("palette",t,0),n=Math.min(1,Math.floor(e)),i=Math.min(1,e-n),r=fp[n],a=fp[Math.min(2,n+1)],o=this.sky.uniforms,l=(h,u)=>{this._ca.set(r[h]),this._cb.set(a[h]),u.value.lerpColors(this._ca,this._cb,i)};l("zenith",o.uZenith),l("horizon",o.uHorizon),l("horizonWarm",o.uHorizonWarm),l("sun",o.uSunColor),l("cloudLit",o.uCloudLit),l("cloudDark",o.uCloudDark),this._ca.set(r.fog),this._cb.set(a.fog),this.scene.fog.color.lerpColors(this._ca,this._cb,i),this.scene.fog.density=r.fogD+(a.fogD-r.fogD)*i,this._ca.set(r.sunCol),this._cb.set(a.sunCol),this.sun.color.lerpColors(this._ca,this._cb,i),this.nightU.value=this.sampleTrack("night",t,.1);let c=this.sampleTrack("sunPower",t,3);this.sun.intensity=c,o.uSunStrength.value=Math.min(1,c/2),this.hemi.intensity=.5*Math.max(.22,1-this.nightU.value*1.05),this.scene.environmentIntensity=this.sampleTrack("envPower",t,.6)}onBeforeRender({t,projScale:e,camera:n}){let i=t+this.timeOffset;this.sky.mesh.position.copy(n.position),this.sky.uniforms.uTime.value=i*5;let r=this.scene.fog.density;for(let l of[this.lamps,this.carGlow,this.beacon])l.uniforms.uProj.value=e,l.uniforms.uFog.value=r;let a=this.nightU.value;this.lamps.uniforms.uGain.value=.08+1*a,this.carGlow.uniforms.uGain.value=.5+.7*a,this.beacon.uniforms.uGain.value=.15+.85*Math.pow(.5+.5*Math.sin(i*Math.PI*1.25),3),this.towerSteel.emissiveIntensity=.03+.4*Math.max(0,a-.25),this.towerSteel2.emissiveIntensity=this.towerSteel.emissiveIntensity,this.lampHeadM.emissiveIntensity=.2+2.4*a,this.deckMat.emissiveIntensity=.25+1*a;for(let l of this.baseMats)l.emissiveIntensity=.25+.9*a;this.bolM.emissiveIntensity=.1+2*a,this.cars.update(i,this.carGlow.points.geometry.attributes.position.array),this.carGlow.points.geometry.attributes.position.needsUpdate=!0,this.peds.update(i);let o=this.snow.uniforms;o.uTime.value=i,o.uCam.value.copy(n.position),o.uProj.value=e,o.uFog.value=r}}});function T_(s,t,e,n){let i=s*e*t*e,r=Math.min(1,Math.sqrt(n*1e6/i));return{w:Math.max(2,Math.round(s*e*r)),h:Math.max(2,Math.round(t*e*r)),scale:r}}function E_(s,t,e,{rate:n,vmax:i}=W1){let r=t-s;if(Math.abs(r)<1e-5)return tr(t);let a=r*(1-Math.exp(-n*e)),o=i*e;return Math.abs(a)>o&&(a=Math.sign(a)*o),tr(s+a)}var tr,pp,S_,b_,mp,gp,w_,_p,A_,W1,xp=be(()=>{tr=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),pp=(s,t,e)=>{let n=tr((e-s)/(t-s));return n*n*(3-2*n)},S_=(s,t,e)=>tr(-s/Math.max(1,t-e)),b_=(s,t=7)=>Math.min(1,tr(s)/.94)*t,mp=s=>1-pp(.88,1.12,s),gp=(s,t,e,n=.03)=>pp(s,s+n,e)*(1-pp(t-n,t,e)),w_=[{id:"T0",mp:.3,samples:0,dof:!1},{id:"T1",mp:.55,samples:2,dof:!1},{id:"T2",mp:1.25,samples:2,dof:!0},{id:"T3",mp:2.4,samples:4,dof:!1}];_p=(s,t,e)=>!!e&&Math.min(s,t)<700,A_=(s,t,e)=>_p(s,t,e)?"T1":"T2",W1={rate:6.5,vmax:.07/.15}});function q1(s,t){let e=s.keys,n=e.length;if(t<=e[0][0]||t>=e[n-1][0])return null;let i=0;for(;t>e[i+1][0];)i++;let r=e[i+1][0]-e[i][0],a=(t-e[i][0])/r,o=(_,m)=>_===0||_===n-1?0:(e[_+1][m]-e[_-1][m])/(e[_+1][0]-e[_-1][0]),l=a*a,c=l*a,h=2*c-3*l+1,u=c-2*l+a,d=-2*c+3*l,p=c-l,f=[];for(let _=1;_<=6;_++)f.push(h*e[i][_]+u*r*o(i,_)+d*e[i+1][_]+p*r*o(i+1,_));return f}function Y1(s,t){return s.map(([e,n,i,r,a,o])=>({pos:[t.x+n*Math.cos(C_(e)),i,t.z+n*Math.sin(C_(e))],target:[t.x,r,t.z],fov:a,speed:o}))}function Z1(s,t,e,n,i){let r=i*i,a=r*i,o=(l,c,h,u)=>.5*(2*c+(-l+h)*i+(2*l-5*c+4*h-u)*r+(-l+3*c-3*h+u)*a);return[o(s[0],t[0],e[0],n[0]),o(s[1],t[1],e[1],n[1]),o(s[2],t[2],e[2],n[2])]}function $1(s,t,e=0){let n=(i,r)=>Math.sin(s*i+r+e);return[t*(n(1.7,.3)*.6+n(3.1,1.9)*.4),t*(n(1.3,2.1)*.6+n(2.7,.7)*.4),t*(n(1.1,4.2)*.6+n(2.3,3.3)*.4)]}var P_,C_,vp,J1,Vu,I_=be(()=>{rp();xp();P_=s=>{let t=s*s*(3-2*s),e=1-(1-s)*(1-s);return .5*t+.5*e};C_=s=>s*Math.PI/180;vp=class{constructor(t,{shakeAmp:e=.1,shakeSeed:n=4,timeWarp:i=P_,N:r=160,t0:a=0,dur:o=7}={}){this.t0=a,this.dur=o,this.keys=t,this.shakeAmp=e,this.shakeSeed=n,this.timeWarp=i;let l=t.length,c=(l-1)*r;this.cum=new Float64Array(c+1);let h=this._at(0).position;for(let u=1;u<=c;u++){let d=u/c*(l-1),p=this._at(d).position,f=this._speed(d);this.cum[u]=this.cum[u-1]+Math.hypot(p[0]-h[0],p[1]-h[1],p[2]-h[2])/f,h=p}this.total=this.cum[c],this.M=c}_speed(t){let e=this.keys,n=Math.min(e.length-2,Math.floor(t)),i=t-n;return e[n].speed+(e[n+1].speed-e[n].speed)*i}_at(t){let e=this.keys,n=e.length,i=Math.min(n-2,Math.max(0,Math.floor(t))),r=t-i,a=l=>Math.min(n-1,Math.max(0,l)),o=l=>Z1(e[a(i-1)][l],e[i][l],e[a(i+1)][l],e[a(i+2)][l],r);return{position:o("pos"),target:o("target"),fov:e[i].fov+(e[i+1].fov-e[i].fov)*r}}sampleU(t,e=0){let i=(this.timeWarp?this.timeWarp(Math.min(1,Math.max(0,t))):t)*this.total,r=0,a=this.M;for(;a-r>1;){let h=r+a>>1;this.cum[h]<=i?r=h:a=h}let o=(i-this.cum[r])/Math.max(1e-12,this.cum[a]-this.cum[r]),l=(r+o)/this.M*(this.keys.length-1),c=this._at(l);if(this.shakeAmp>0){let h=$1(e,this.shakeAmp,this.shakeSeed);c.position=c.position.map((u,d)=>u+h[d])}return c}sample(t){return this.sampleU((t-this.t0)/this.dur,t)}},J1=30,Vu=class{constructor(t){let{globalStart:e,duration:n=7,landscapeKeys:i,adj:r,portraitSpec:a,axis:o}=t;this.t0=e,this.dur=n,this.landscape=new js(i,{shakeAmp:.1,shakeSeed:4,timeWarp:P_}),this.portrait=new vp(Y1(a,o),{t0:e,dur:n}),this.adj=r,this.weight=0,this.blendLift=t.blendLift??J1}pOf(t){return tr((t-this.t0)/this.dur)*.94}landscapeAt(t){let e=this.landscape.sample(t),n=q1(this.adj,this.pOf(t));return n&&(e.position=e.position.map((i,r)=>i+n[r]),e.target=e.target.map((i,r)=>i+n[3+r])),e}portraitAt(t){return this.portrait.sample(t)}sample(t,e=this.weight){if(e<=0)return this.landscapeAt(t);let n=this.portraitAt(t);if(e>=1)return n;let i=this.landscapeAt(t),r=(o,l)=>o.map((c,h)=>c+(l[h]-c)*e),a=r(i.position,n.position);return a[1]+=this.blendLift*4*e*(1-e),{position:a,target:r(i.target,n.target),fov:i.fov+(n.fov-i.fov)*e}}}});var L_,K1,Q1,j1,tc,yp=be(()=>{L_={x:-90,z:0,tipY:147.2,glowY:149},K1=[{t:11,pos:[-420,40,14],target:[-140,54,-2],fov:38},{t:12.78,pos:[-313,50,32],target:[-100,103,-20],fov:34},{t:14.36,pos:[-211,62,44],target:[29,94,-137],fov:35},{t:15.99,pos:[-111,77,54],target:[-54,95,-240],fov:36},{t:16.5,pos:[-74,102,52.9],target:[-125.1,66.4,-242.7],fov:41.1},{t:17,pos:[-35,123.4,55],target:[-190.4,102.7,-201.6],fov:46.7},{t:17.5,pos:[57.3,122.4,49.4],target:[-229.9,95.1,-37.3],fov:45.9},{t:18,pos:[64.8,122.3,31.1],target:[-234.1,74.2,5],fov:45.9}].map(s=>({...s,ease:t=>t})),Q1={keys:[[.4,0,0,0,0,0,0],[.44,-13.9,10.8,28.9,-.6,74.1,32.6],[.47,-17.1,19.3,53.7,9.5,60.2,19.2],[.5,-6.9,27.5,66.3,5.3,46.3,15],[.53,7.6,32.3,56.1,-12.7,48.9,.5],[.56,.2,26.8,28.8,-26.6,66.5,10],[.6,0,0,0,0,0,0]]},j1=[[180,280,46,66,50,1],[167.7,235,99.5,80,51,1],[141.2,204.6,117.9,90,52,.9],[103,170.6,127.9,95.6,53,.75],[83.4,146,127.9,106.9,54,.65],[11.3,132.3,126,106.9,55,.6],[3.5,149.3,124.1,95.4,56,.5]],tc={globalStart:11,duration:7,landscapeKeys:K1,adj:Q1,portraitSpec:j1,axis:{x:L_.x,z:L_.z}}});var Hu,D_=be(()=>{M_();I_();Fu();yp();Hu=class extends Gu{constructor(t,e,n,i={}){super(t,e,n,{...i,shot:"odori"}),this.fadeSec=0,this.fx=i.fx??{}}async build(){await super.build(),this.videoRig=this.rig,this.rig=new Vu(tc),Yg(this,{tiled:this.fx.tiled,haze:this.fx.haze,tileExclude:[this.cars.mesh,this.peds.mesh,this.scene.children.find(t=>t.isInstancedMesh&&t.count===this.boxes.n)],skyUniforms:this.sky.uniforms})}setAmbientCount(t){this.snow.points.geometry.setDrawRange(0,t),this.ambientCount=t}setLayoutWeight(t){this.rig.weight=t}}});var N_,U_=be(()=>{N_=[{id:"cap-sapporo",title:"SAPPORO",sub:"\u672D\u5E4C",a:-.05,b:.17},{id:"cap-tower",title:"\u3055\u3063\u307D\u308D\u30C6\u30EC\u30D3\u5854",sub:"Sapporo TV Tower",a:.2,b:.45},{id:"cap-odori",title:"\u5927\u901A\u516C\u5712",sub:"Odori Park",a:.47,b:.7},{id:"cap-teine",title:"\u624B\u7A32\u5C71\u306E\u65B9\u3078",sub:"Toward Mt. Teine",a:.72,b:1.08}]});var F_={};Dp(F_,{default:()=>tw});var tw,O_=be(()=>{D_();U_();yp();tw={contract:1,meta:{id:"sapporo",name:{ja:"\u672D\u5E4C",en:"Sapporo"},season:"winter",theme:"\u96EA\u306E\u5927\u901A\u516C\u5712\uFF08\u663C\u2192\u5915\uFF09",docTitle:"SAPPORO \u2014 JAPAN \u2014 THE CITY COLLECTION"},captions:N_,timeline:{globalStart:tc.globalStart,duration:tc.duration},ambient:{name:"\u96EA",counts:{normal:14e3,light:7e3}},tuning:{haze:{},grade:{}},async buildScene(s){let t=new Hu(s.cityMeta,s.index,s.total,{renderer:s.renderer,fx:s.fx});return await t.build(),t}}});Ye();Ye();Ye();Ye();var Sa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};Ye();Ye();var Cn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},C1=new Pi(-1,1,1,-1,0,1),ep=class extends Yt{constructor(){super(),this.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Lt([0,2,0,0,2,0],2))}},R1=new ep,cs=class{constructor(t){this._mesh=new ye(R1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,C1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Qs=class extends Cn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=hi.clone(t.uniforms),this.material=new Be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new cs(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ql=class extends Cn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Eu=class extends Cn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Cu=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new et);this._width=n.width,this._height=n.height,e=new Te(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ze}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qs(Sa),this.copyPass.material.blending=si,this.timer=new Xs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ql!==void 0&&(a instanceof ql?n=!0:a instanceof Eu&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};Ye();var Ru=class extends Cn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new gt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}};Ye();Ye();var Dg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new gt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ba=class s extends Cn{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new gt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Te(r,a,{type:ze,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Te(r,a,{type:ze,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Te(r,a,{type:ze,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Dg;this.highPassUniforms=hi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Be({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new et(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hi.clone(Sa.uniforms),this.blendMaterial=new Be({uniforms:this.copyUniforms,vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader,premultipliedAlpha:!0,blending:aa,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new gt,this._oldClearAlpha=1,this._basic=new Dn,this._fsQuad=new cs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new et(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let i=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),r.push(c)}return new Be({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ba.BlurDirectionX=new et(1,0);ba.BlurDirectionY=new et(0,1);Ye();var Yl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Pu=class extends Cn{constructor(){super(),this.isOutputPass=!0,this.uniforms=hi.clone(Yl.uniforms),this.material=new Ki({name:Yl.name,uniforms:this.uniforms,vertexShader:Yl.vertexShader,fragmentShader:Yl.fragmentShader}),this._fsQuad=new cs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ns?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===is?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ss?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ri?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===rs?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===as?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===la&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Ng(s,{near:t,far:e}){let n={uniforms:{tDiffuse:{value:null},tDepth:{value:null},uNear:{value:t},uFar:{value:e},uFocus:{value:200},uAperture:{value:1},uMaxBlur:{value:8},uRes:{value:new s.Vector2(1920,1080)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`},i=new Qs(n),r=i.render.bind(i);return i.render=function(a,o,l,c,h){this.uniforms.tDepth.value=l.depthTexture,r(a,o,l,c,h)},i}function Ug(s){let t={uniforms:{tDiffuse:{value:null},uFade:{value:1},uSeed:{value:0},uRes:{value:new s.Vector2(1920,1080)},uSat:{value:1.08},uContrast:{value:.35},uShadowTint:{value:new s.Color(0,.05,.1)},uShadowAmt:{value:.35},uHighTint:{value:new s.Color(1.05,1,.93)},uVig:{value:.55},uGrain:{value:.028},uAberr:{value:.0016}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`};return new Qs(t)}$l();var np='"Helvetica Neue", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Segoe UI", Arial, sans-serif';function ip(s,t,e,n,i,r){let a=[...t],o=a.map(h=>s.measureText(h).width),l=o.reduce((h,u)=>h+u,0)+i*(a.length-1),c=e-l/2;a.forEach((h,u)=>{s.globalAlpha=r(u,a.length),s.fillText(h,c,n),c+=o[u]+i})}function zg(s,t,e,n,i,{englishName:r,name:a,index:o,total:l}){let c=Og(n,i);if(!c.visible||c.opacity<=.001)return;let h=e/1080;s.save(),s.textBaseline="alphabetic",s.fillStyle="#fff",s.shadowColor="rgba(8,14,34,0.55)",s.shadowBlur=24*h;let u=s.createLinearGradient(0,e*.62,0,e);u.addColorStop(0,"rgba(6,10,24,0)"),u.addColorStop(1,`rgba(6,10,24,${.5*c.opacity})`),s.shadowColor="transparent",s.fillStyle=u,s.fillRect(0,e*.62,t,e*.38),s.fillStyle="#fff",s.shadowColor="rgba(8,14,34,0.55)";let d=t/2,p=104*h;s.font=`200 ${p}px ${np}`;let f=c.spacing*p,_=r.toUpperCase();ip(s,_,d+f/2,e*.865,f,(g,x)=>{let y=mn(c.reveal*(x+3)-g*.9,0,1);return c.opacity*gn.outCubic(y)});let m=t*.16*gn.outCubic(c.reveal);s.globalAlpha=c.opacity*.8,s.shadowBlur=0,s.fillRect(d-m/2,e*.885,m,Math.max(1,1.5*h)),s.shadowBlur=12*h,s.shadowColor="rgba(8,14,34,0.6)",s.font=`300 ${24*h}px ${np}`,s.globalAlpha=c.opacity*gn.outCubic(mn(c.reveal*1.4-.4,0,1)),ip(s,`${a}`,d,e*.925,10*h,()=>s.globalAlpha),s.font=`300 ${15*h}px ${np}`,s.globalAlpha=c.opacity*.75*gn.outCubic(mn(c.reveal*1.4-.4,0,1)),ip(s,`JAPAN \u2014 THE CITY COLLECTION      ${String(o).padStart(2,"0")} / ${String(l).padStart(2,"0")}`,d,e*.958,5*h,()=>s.globalAlpha),s.restore()}$l();var Lu=4,Du=4e4,Nu=class{constructor(t,{width:e=1920,height:n=1080,samples:i=4}={}){this.stage=t,this.ctx2d=t.getContext("2d",{alpha:!1}),this.glCanvas=document.createElement("canvas"),this.gl=new Wl({canvas:this.glCanvas,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.gl.setPixelRatio(1),this.gl.outputColorSpace=$e,this.gl.toneMapping=ri,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=ts,this.gl.shadowMap.autoUpdate=!1,this.samples=i,this.width=0,this.height=0,this.city=null,this._shadowDirty=!0,this.setSize(e,n)}_buildComposer(){let{width:t,height:e}=this;this.composer?.dispose?.();let n=r=>new Te(t,e,{type:ze,samples:r,depthBuffer:!0,depthTexture:new Nn(t,e,pn)}),i;try{i=n(this.samples)}catch{i=n(0)}this.composer=new Cu(this.gl,i),this.composer.setPixelRatio(1),this.composer.setSize(t,e),this.renderPass=new Ru(new qn,new Ee),this.dofPass=Ng(me,{near:Lu,far:Du}),this.bloomPass=new ba(new et(t,e),.6,.7,.9),this.outputPass=new Pu,this.gradePass=Ug(me),[this.renderPass,this.dofPass,this.bloomPass,this.outputPass,this.gradePass].forEach(r=>this.composer.addPass(r)),this.dofPass.uniforms.uRes.value.set(t,e),this.gradePass.uniforms.uRes.value.set(t,e)}setSize(t,e){t=Math.round(t),e=Math.round(e),!(t===this.width&&e===this.height)&&(this.width=t,this.height=e,this.stage.width=t,this.stage.height=e,this.gl.setSize(t,e,!1),this._buildComposer(),this.city&&this._bindCity())}_bindCity(){this.renderPass.scene=this.city.scene,this.renderPass.camera=this.city.camera,this.city.camera.aspect=this.width/this.height,this.city.camera.updateProjectionMatrix()}setCity(t){this.city=t,this._bindCity(),this._shadowDirty=!0}renderAt(t,e=0){let n=this.city,i=n.frameState(t),r=n.camera;r.aspect=this.width/this.height,r.near=Lu,r.far=Du,r.updateProjectionMatrix(),r.updateMatrixWorld(!0);let a=r.projectionMatrix.elements[5]*.5*this.height;n.onBeforeRender?.({t,frame:e,projScale:a,camera:r}),this.gl.toneMappingExposure=i.exposure,this.bloomPass.strength=i.bloom,this.bloomPass.radius=i.bloomRadius??.7,this.bloomPass.threshold=i.bloomThreshold??.9;let o=this.dofPass.uniforms;o.uFocus.value=i.focusDistance,o.uAperture.value=i.dofAperture??1,o.uMaxBlur.value=(i.dofMaxBlur??7)*(this.height/1080),this.dofPass.enabled=(i.dofMaxBlur??7)>.05;let l=this.gradePass.uniforms;l.uFade.value=Bg(t,n.duration,{inSec:n.fadeSec??.8,outSec:n.fadeSec??.8}),l.uSeed.value=e%997,Object.entries(n.look.grade??{}).forEach(([h,u])=>{l[h]&&(l[h].value.isColor?l[h].value.set(u):l[h].value=u)}),this._shadowDirty&&(this.gl.shadowMap.needsUpdate=!0,this._shadowDirty=!1),this.composer.render();let c=this.ctx2d;c.drawImage(this.glCanvas,0,0,this.width,this.height),n.showTitle!==!1&&zg(c,this.width,this.height,t,n.duration,n.titleInfo)}dispose(){this.composer?.dispose?.(),this.gl.dispose()}};var Uu=class extends Nu{constructor(t,e){super(t,e),this.gl.info.autoReset=!1,this.lastInfo={calls:0,triangles:0},this.grade=null}applyQuality({w:t,h:e,samples:n,dof:i}){this.dofOn=i,n!==this.samples&&(this.samples=n,this.width=0),this.setSize(t,e)}gpuString(){let t=this.gl.getContext(),e=t.getExtension("WEBGL_debug_renderer_info");return e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):"unknown"}renderAt(t,e=0,n=t){let i=this.city,r=i.frameState(t),a=i.camera;a.aspect=this.width/this.height,a.near=Lu,a.far=Du,a.updateProjectionMatrix(),a.updateMatrixWorld(!0);let o=a.projectionMatrix.elements[5]*.5*this.height;i.onBeforeRender?.({t:n,frame:e,projScale:o,camera:a}),this.gl.toneMappingExposure=r.exposure*(this.grade?.enabled?this.grade.exposureGain(t):1),this.bloomPass.strength=r.bloom,this.bloomPass.radius=r.bloomRadius??.7,this.bloomPass.threshold=r.bloomThreshold??.9;let l=this.dofPass.uniforms;l.uFocus.value=r.focusDistance,l.uAperture.value=r.dofAperture??1,l.uMaxBlur.value=(r.dofMaxBlur??7)*(this.height/1080),this.dofPass.enabled=this.dofOn!==!1&&(r.dofMaxBlur??7)>.05;let c=this.gradePass.uniforms;c.uFade.value=1,c.uSeed.value=e%997,Object.entries(i.look.grade??{}).forEach(([h,u])=>{c[h]&&(c[h].value.isColor?c[h].value.set(u):c[h].value=u)}),this.grade?.apply(t,c),this._shadowDirty&&(this.gl.shadowMap.needsUpdate=!0,this._shadowDirty=!1),this.gl.info.reset(),this.composer.render(),this.lastInfo={calls:this.gl.info.render.calls,triangles:this.gl.info.render.triangles},this.ctx2d.drawImage(this.glCanvas,0,0,this.width,this.height)}};Fu();var Mp="sapporo",B_={sapporo:()=>Promise.resolve().then(()=>(O_(),F_))};async function z_(s){let t=null,e=s||Mp;B_[e]||(t=`\u672A\u77E5\u306E\u90FD\u5E02 "${e}" \u2192 ${Mp} \u3092\u8868\u793A`,e=Mp);let n=(await B_[e]()).default;return Xg(n),{mod:n,note:t}}Fu();var Wu=class{constructor(){this.el=document.createElement("pre"),this.el.id="dbg",this.el.setAttribute("aria-hidden","true"),this.el.style.cssText=["position:fixed","left:max(6px,env(safe-area-inset-left))","top:max(6px,env(safe-area-inset-top))","z-index:99","margin:0","padding:6px 8px","max-width:calc(100vw - 12px)","box-sizing:border-box","font:10px/1.35 ui-monospace,Menlo,monospace","color:#cfe","background:rgba(0,0,0,.62)","border-radius:6px","white-space:pre-wrap","word-break:break-all","pointer-events:auto","user-select:text"].join(";"),document.body.appendChild(this.el),this.frames=[],this.history=[],this.text="",this.el.addEventListener("click",()=>this.copy())}tick(t){this.frames.push(t);let e=t-1e3;for(;this.frames.length&&this.frames[0]<e;)this.frames.shift()}logTier(t,e,n){this.history.push(`${new Date().toISOString().slice(11,19)} ${t}\u2192${e} (${n})`),this.history.length>6&&this.history.shift()}fps(){let t=this.frames;if(t.length<2)return{avg:0,maxGap:0};let e=0;for(let n=1;n<t.length;n++)e=Math.max(e,t[n]-t[n-1]);return{avg:(t.length-1)*1e3/(t[t.length-1]-t[0]),maxGap:e}}update(t){let{avg:e,maxGap:n}=this.fps(),i=[`FPS ${e.toFixed(1)}  \u6700\u5927\u9593\u9694 ${n.toFixed(0)}ms  (\u76F4\u8FD11\u79D2)`,`tier ${t.tierLabel}${this.history.length?"  \u5C65\u6B74: "+this.history.join(" | "):"  \u5C65\u6B74: \u306A\u3057"}`,`canvas ${t.width}x${t.height} (${(t.width*t.height/1e6).toFixed(2)}MP)  DPR ${t.dpr}  scale ${t.scale.toFixed(3)}`,`p ${t.p.toFixed(4)}${t.target!==void 0?" \u2192\u76EE\u6A19 "+t.target.toFixed(4):""}  t ${t.t.toFixed(3)}s  layout \u7E26${(t.wPortrait*100).toFixed(0)}%`,`GL calls ${t.calls}  tris ${t.triangles}`,t.haze?`haze \xD7${t.haze.mult}${t.haze.mult===0?"(\u7121\u52B9)":""}  \u958B\u59CB ${t.haze.start}m \u5230\u9054 ${t.haze.end}m \u4E0A\u9650 ${t.haze.strength}\uFF08\u5C71 \xD7${t.haze.mountain}\uFF09 \u5F69\u5EA6\u6E1B ${t.haze.desat}`:"haze \u306A\u3057",t.grade?`grade \xD7${t.grade.cfg.mult}${t.grade.cfg.mult===0?"(\u7121\u52B9)":""}  \u30C8\u30FC\u30F3\u30DE\u30C3\u30D7 ${t.grade.tone}  \u9732\u51FA \xD7${(t.grade.now.exposure??1).toFixed(3)} (\u663C${t.grade.cfg.expDay}\u2192\u5915${t.grade.cfg.expDusk})  \u5915\u666F\u5EA6 ${(t.grade.now.dusk??0).toFixed(2)}  \u30D3\u30CD\u30C3\u30C8 ${t.grade.vig??"-"}`:"",`GPU ${t.gpu}`];this.text=i.join(`
`),this.el.textContent=this.text}async copy(){try{await navigator.clipboard.writeText(this.text),this.flash("copied")}catch{let t=document.createRange();t.selectNodeContents(this.el);let e=getSelection();e.removeAllRanges(),e.addRange(t);try{document.execCommand("copy"),this.flash("copied")}catch{this.flash("\u9078\u629E\u3057\u307E\u3057\u305F\uFF08\u624B\u52D5\u3067\u30B3\u30D4\u30FC\uFF09")}}}flash(t){let e=this.el.style.outline;this.el.style.outline="1px solid #6f6",this.el.title=t,setTimeout(()=>{this.el.style.outline=e},600)}};sp();Ye();var ew=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),nw=(s,t,e)=>{let n=ew((e-s)/(t-s));return n*n*(3-2*n)},ec=(s,t,e)=>s+(t-s)*e,qu={expDay:1.15,expDusk:.9,rampFrom:.25,rampTo:1,highDusk:[1.075,1,.905],shadowDusk:[.035,.03,.1],satDusk:1.075,vig:.2};function k_(s,t=qu){let e=s.get("grade"),n=e===null||e===""?1:Math.max(0,parseFloat(e)),i=(r,a)=>s.has(r)&&isFinite(parseFloat(s.get(r)))?parseFloat(s.get(r)):a;return{mult:isFinite(n)?n:1,...t,expDay:i("gradeExpDay",t.expDay),expDusk:i("gradeExpDusk",t.expDusk),vig:s.has("vig")&&isFinite(parseFloat(s.get("vig")))?parseFloat(s.get("vig")):t.vig}}var Xu=class{constructor(t){this.cfg={...qu,...t},this.now={exposure:1,dusk:0}}get enabled(){return this.cfg.mult>0}dusk(t){return nw(this.cfg.rampFrom,this.cfg.rampTo,t/7)}exposureGain(t){let e=this.cfg,n=this.dusk(t);return 1+(ec(e.expDay,e.expDusk,n)-1)*e.mult}apply(t,e){if(!this.enabled)return;this.cfg.vig!==null&&(e.uVig.value=this.cfg.vig),this.now={vig:e.uVig.value};let n=this.dusk(t);this.now={vig:e.uVig.value,exposure:this.exposureGain(t),dusk:n};let i=n*this.cfg.mult,r=(a,o)=>a.setRGB(ec(a.r,o[0],i),ec(a.g,o[1],i),ec(a.b,o[2],i));e.uHighTint&&r(e.uHighTint.value,this.cfg.highDusk),e.uShadowTint&&(this.baseShadow??(this.baseShadow=e.uShadowTint.value.clone()),e.uShadowTint.value.copy(this.baseShadow),r(e.uShadowTint.value,this.cfg.shadowDusk)),e.uSat.value=ec(e.uSat.value,this.cfg.satDusk,i)}},G_=s=>({[En]:"\u306A\u3057",[ns]:"Linear",[is]:"Reinhard",[ss]:"Cineon",[ri]:"ACES Filmic",[rs]:"AgX",[as]:"Neutral"})[s.toneMapping]??String(s.toneMapping);xp();var nc=s=>document.getElementById(s),pi=new URLSearchParams(location.search),iw=pi.get("debug")==="1",sw=pi.get("freeze")==="1",V_=matchMedia("(pointer: coarse)").matches;async function rw(){let s=nc("track"),t=nc("stage"),e=nc("cv"),n=await(await fetch("metadata/cities.json")).json(),{mod:i,note:r}=await z_(pi.get("city"));r&&console.warn("[scroll]",r);let a=n.cities.find(at=>at.id===i.meta.id);document.title=i.meta.docTitle;let{globalStart:o,duration:l}=i.timeline,c=at=>b_(at,l),h=new Uu(e,{width:320,height:568});h.grade=new Xu(k_(pi,{...qu,...i.tuning.grade}));let u=await i.buildScene({renderer:h.gl,cityMeta:a,index:a.displayOrder,total:n.cities.length,fx:{tiled:pi.get("tiles")==="0"?!1:pi.get("tiles")||!0,haze:Hg(pi,{...Jl,...i.tuning.haze})}});qg(u),h.setCity(u);let d=iw?new Wu:null,p=h.gpuString(),f={p:0,t:0,w:0,width:0,height:0,dpr:1,scale:1},_=at=>w_.find(G=>G.id===at),m=_((pi.get("tier")||"").toUpperCase())||_(A_(t.clientWidth||innerWidth,t.clientHeight||innerHeight,V_)),g=()=>pi.get("snow")==="normal"?"normal":pi.get("snow")==="light"||_p(t.clientWidth||innerWidth,t.clientHeight||innerHeight,V_)?"light":"normal";function x(){let at=t.clientWidth||innerWidth,G=t.clientHeight||innerHeight,lt=Math.min(devicePixelRatio||1,3),{w:vt,h:kt,scale:wt}=T_(at,G,lt,m.mp);h.applyQuality({w:vt,h:kt,samples:m.samples,dof:m.dof});let Vt=g();u.setAmbientCount(i.ambient.counts[Vt]),Object.assign(f,{width:vt,height:kt,dpr:lt,scale:wt,aspect:at/G,ambientMode:Vt}),f.w=mp(f.aspect),u.setLayoutWeight(f.w),M=!0}function y(at,G="manual"){let lt=_(at);!lt||lt===m||(d?.logTier(m.id,lt.id,G),m=lt,x())}let M=!0,w=null,T=()=>S_(s.getBoundingClientRect().top,s.offsetHeight,t.offsetHeight);addEventListener("scroll",()=>{M=!0},{passive:!0});let v=0,S=null,R=!1,E=0,I=at=>{let G=s.offsetHeight-t.offsetHeight;window.scrollTo(0,at*G)},N=0,z=0,D=()=>{t.clientWidth===N&&t.clientHeight===z||(R||(R=!0),clearTimeout(E),E=setTimeout(()=>{x(),I(v),R=!1},160),N=t.clientWidth,z=t.clientHeight)};addEventListener("resize",D),addEventListener("orientationchange",D),x(),N=t.clientWidth,z=t.clientHeight;let O=()=>({tierLabel:`${m.id} \u4E88\u7B97${m.mp}MP MSAA${m.samples} DoF${m.dof?"\u3042\u308A":"\u306A\u3057"} ${i.ambient.name}${i.ambient.counts[f.ambientMode]}`,width:f.width,height:f.height,dpr:f.dpr,scale:f.scale,p:f.p,target:f.target,t:f.t,wPortrait:f.w,calls:h.lastInfo.calls,triangles:h.lastInfo.triangles,gpu:p,haze:u.haze?.cfg,grade:{cfg:h.grade.cfg,now:h.grade.now,vig:h.grade.now.vig?.toFixed?.(2),tone:G_(h.gl)}}),q=document.querySelector(".captions"),V=i.captions.map(at=>{let G=document.createElement("div");G.className="cap",G.id=at.id;let lt=document.createElement("h2");if(lt.textContent=at.title,G.appendChild(lt),at.sub){let vt=document.createElement("p");vt.textContent=at.sub,G.appendChild(vt)}return q.appendChild(G),{...at,el:G,last:-1}}),st=at=>V.map(G=>gp(G.a,G.b,at));function X(at){for(let G of V){let lt=gp(G.a,G.b,at);Math.abs(lt-G.last)<.004||(G.last=lt,G.el.style.opacity=lt.toFixed(3),G.el.style.transform=`translateY(${((1-lt)*8).toFixed(1)}px)`)}}let $=performance.now(),nt=0;function At(at){if(requestAnimationFrame(At),sw)return;R||(v=w??T());let G=Math.min(.1,Math.max(0,(at-(At.last??at))/1e3));At.last=at,S=w!==null||S===null?v:E_(S,v,G),f.p=S,f.target=v,f.t=c(f.p),X(f.p);let lt=w!==null?f.t:(at-$)/1e3;h.renderAt(f.t,nt++,lt),d?.tick(at),d&&nt%6===0&&d.update(O())}requestAnimationFrame(At),nc("loading").classList.add("hide"),window.__scroll={state:()=>({...f}),tileStats:()=>u.tileStats??null,renderAtProgress(at){w=at,S=at,f.p=at,f.t=c(at),X(at),h.renderAt(f.t,0,f.t),d?.update(O())},unpin(){w=null},setTier:y,tier:()=>m.id,renderer:h,city:u,THREE:me,cityModule:i,dispose(){Zg(u)},cameraAt(at,G){let lt=mp(G);return u.rig.sample(o+c(at),lt)},pStable:()=>v,captionOpacity:st,captionDom:()=>V.map(at=>({id:at.id,opacity:+getComputedStyle(at.el).opacity,text:at.el.textContent}))},window.__ready=!0}rw().catch(s=>{console.error(s),window.__bootError=String(s.stack||s);let t=nc("loadMsg");t&&(t.textContent="\u30A8\u30E9\u30FC: "+(s.message||s))});
