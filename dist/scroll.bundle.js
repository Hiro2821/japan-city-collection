var uy=Object.defineProperty;var ne=(s,t,e)=>()=>{if(e)throw e[0];try{return s&&(t=s(s=0)),t}catch(n){throw e=[n],n}};var nh=(s,t)=>{for(var e in t)uy(s,e,{get:t[e],enumerable:!0})};function dy(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ho(s,t){return new fy[s](t)}function Jg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function yo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Up(){let s=yo("canvas");return s.style.display="block",s}function Qg(s){bs=s}function jg(){return bs}function Mo(...s){let t="THREE."+s.shift();bs?bs("log",t,...s):console.log(t,...s)}function tx(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Tt(...s){s=tx(s);let t="THREE."+s.shift();if(bs)bs("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Wt(...s){s=tx(s);let t="THREE."+s.shift();if(bs)bs("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Si(...s){let t=s.join(" ");t in Ym||(Ym[t]=!0,Tt(...s))}function ex(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ei(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[s&255]+cn[s>>8&255]+cn[s>>16&255]+cn[s>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function Qt(s,t,e){return Math.max(t,Math.min(e,s))}function Fp(s,t){return(s%t+t)%t}function py(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function my(s,t,e){return s!==t?(e-s)/(t-s):0}function Ua(s,t,e){return(1-e)*s+e*t}function gy(s,t,e,n){return Ua(s,t,1-Math.exp(-e*n))}function xy(s,t=1){return t-Math.abs(Fp(s,t*2)-t)}function _y(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function vy(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function yy(s,t){return s+Math.floor(Math.random()*(t-s+1))}function My(s,t){return s+Math.random()*(t-s)}function Sy(s){return s*(.5-Math.random())}function by(s){s!==void 0&&(Zm=s);let t=Zm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wy(s){return s*cr}function Ty(s){return s*ur}function Ey(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Ay(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Op(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Cy(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:Tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vd(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function lr(s,t){if(t.constructor===Float32Array)return s;let e=vd(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function dn(s,t){if(t.constructor===Float32Array)return s;let e=vd(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}function Ry(){let s={enabled:!0,workingColorSpace:_o,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(i.r=fo(i.r),i.g=fo(i.g),i.b=fo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Di?vo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[_o]:{primaries:t,whitePoint:n,transfer:vo,toXYZ:Km,fromXYZ:Jm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:Km,fromXYZ:Jm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),s}function ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function nf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Tt("Texture: Unable to serialize Texture."),{})}function of(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function pf(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Qs.fromArray(s,r);let a=i.x*Math.abs(Qs.x)+i.y*Math.abs(Qs.y)+i.z*Math.abs(Qs.z),l=t.dot(Qs),c=e.dot(Qs),h=n.dot(Qs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function zy(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Nn(s){Math.abs(s)>65504&&Tt("DataUtils.toHalfFloat(): Value out of range."),s=Qt(s,-65504,65504),Qi.floatView[0]=s;let t=Qi.uint32View[0],e=t>>23&511;return Qi.baseTable[e]+((t&8388607)>>Qi.shiftTable[e])}function Ia(s){let t=s>>10;return Qi.uint32View[0]=Qi.mantissaTable[Qi.offsetTable[t]+(s&1023)]+Qi.exponentTable[t],Qi.floatView[0]}function o0(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=ei()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}function dh(s,t,e,n,i,r){io.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ta.x=r*io.x-i*io.y,Ta.y=i*io.x+r*io.y):Ta.copy(io),s.copy(t),s.x+=Ta.x,s.y+=Ta.y,s.applyMatrix4(sx)}function qy(s,t,e,n,i,r,o,a){let l;if(t.side===pn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===rs,a),l===null)return null;Mh.copy(a),Mh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Mh);return c<e.near||c>e.far?null:{distance:c,point:Mh.clone(),object:s}}function Sh(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,xh),s.getVertexPosition(l,_h),s.getVertexPosition(c,vh);let h=qy(s,t,e,n,xh,_h,vh,d0);if(h){let u=new P;ai.getBarycoord(d0,xh,_h,vh,u),i&&(h.uv=ai.getInterpolatedAttribute(i,a,l,c,u,new it)),r&&(h.uv1=ai.getInterpolatedAttribute(r,a,l,c,u,new it)),o&&(h.normal=ai.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};ai.getNormal(xh,_h,vh,d.normal),h.face=d,h.barycoord=u}return h}function bf(s,t){return s-t}function Jy(s,t){return s.z-t.z}function Qy(s,t){return t.z-s.z}function i1(s,t,e=0){let n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function yi(s,t){if(s.constructor!==t.constructor){let e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{let e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}function Rh(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(su.fromBufferAttribute(a,i),ru.fromBufferAttribute(a,r),e.distanceSqToSegment(su,ru,Ef,w0)>n)return;Ef.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Ef);if(!(c<t.near||c>t.far))return{distance:c,point:w0.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}function C0(s,t,e,n,i,r,o){let a=zf.distanceSqToPoint(s);if(a<e){let l=new P;zf.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function zp(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}function I0(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function s1(s,t){let e=1-s;return e*e*t}function r1(s,t){return 2*(1-s)*s*t}function o1(s,t){return s*s*t}function Fa(s,t,e,n){return s1(s,t)+r1(s,e)+o1(s,n)}function a1(s,t){let e=1-s;return e*e*e*t}function l1(s,t){let e=1-s;return 3*e*e*s*t}function c1(s,t){return 3*(1-s)*s*s*t}function h1(s,t){return s*s*s*t}function Oa(s,t,e,n,i){return a1(s,t)+l1(s,e)+c1(s,n)+h1(s,i)}function u1(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=rx(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=g1(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,u=l;for(let d=e;d<i;d+=e){let f=s[d],p=s[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return cl(r,o,e,a,l,c,0),o}function rx(s,t,e,n,i){let r;if(i===A1(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=L0(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=L0(o/n|0,s[o],s[o+1],r);return r&&Fo(r,r.next)&&(ul(r),r=r.next),r}function yr(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Fo(e,e.next)||Fe(e.prev,e,e.next)===0)){if(ul(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function cl(s,t,e,n,i,r,o){if(!s)return;!o&&r&&M1(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?f1(s,n,i,r):d1(s)){t.push(l.i,s.i,c.i),ul(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=p1(yr(s),t),cl(s,t,e,n,i,r,2)):o===2&&m1(s,t,e,n,i,r):cl(yr(s),t,e,n,i,r,1);break}}}function d1(s){let t=s.prev,e=s,n=s.next;if(Fe(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&La(i,a,r,l,o,c,p.x,p.y)&&Fe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function f1(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Fe(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),x=Math.max(a,l,c),m=Math.max(h,u,d),g=kf(f,p,t,e,n),_=kf(x,m,t,e,n),v=s.prevZ,M=s.nextZ;for(;v&&v.z>=g&&M&&M.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&La(a,h,l,u,c,d,v.x,v.y)&&Fe(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&La(a,h,l,u,c,d,M.x,M.y)&&Fe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&La(a,h,l,u,c,d,v.x,v.y)&&Fe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&La(a,h,l,u,c,d,M.x,M.y)&&Fe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function p1(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Fo(n,i)&&ax(n,e,e.next,i)&&hl(n,i)&&hl(i,n)&&(t.push(n.i,e.i,i.i),ul(e),ul(e.next),e=s=i),e=e.next}while(e!==s);return yr(e)}function m1(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&w1(o,a)){let l=lx(o,a);o=yr(o,o.next),l=yr(l,l.next),cl(o,t,e,n,i,r,0),cl(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function g1(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=rx(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(b1(c))}i.sort(x1);for(let r=0;r<i.length;r++)e=_1(i[r],e);return e}function x1(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function _1(s,t){let e=v1(s,t);if(!e)return t;let n=lx(e,s);return yr(n,n.next),yr(e,e.next)}function v1(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(Fo(s,e))return e;do{if(Fo(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ox(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);hl(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&y1(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function y1(s,t){return Fe(s.prev,s,t.prev)<0&&Fe(t.next,s,s.next)<0}function M1(s,t,e,n){let i=s;do i.z===0&&(i.z=kf(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,S1(i)}function S1(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function kf(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function b1(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ox(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function La(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&ox(s,t,e,n,i,r,o,a)}function w1(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!T1(s,t)&&(hl(s,t)&&hl(t,s)&&E1(s,t)&&(Fe(s.prev,s,t.prev)||Fe(s,t.prev,t))||Fo(s,t)&&Fe(s.prev,s,s.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Fo(s,t){return s.x===t.x&&s.y===t.y}function ax(s,t,e,n){let i=Fh(Fe(s,t,e)),r=Fh(Fe(s,t,n)),o=Fh(Fe(e,n,s)),a=Fh(Fe(e,n,t));return!!(i!==r&&o!==a||i===0&&Uh(s,e,t)||r===0&&Uh(s,n,t)||o===0&&Uh(e,s,n)||a===0&&Uh(e,t,n))}function Uh(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Fh(s){return s>0?1:s<0?-1:0}function T1(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&ax(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function hl(s,t){return Fe(s.prev,s,s.next)<0?Fe(s,t,s.next)>=0&&Fe(s,s.prev,t)>=0:Fe(s,t,s.prev)<0||Fe(s,s.next,t)<0}function E1(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function lx(s,t){let e=Hf(s.i,s.x,s.y),n=Hf(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function L0(s,t,e,n){let i=Hf(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ul(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Hf(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function A1(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}function D0(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function N0(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}function R1(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function P1(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}function U0(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}function Lr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(O0(i))i.isRenderTargetTexture?(Tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(O0(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function mn(s){let t={};for(let e=0;e<s.length;e++){let n=Lr(s[e]);for(let i in n)t[i]=n[i]}return t}function O0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function I1(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function kp(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}function oi(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function uo(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function cx(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Vf(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function hx(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}function N1(s,t,e,n,i=30){let r=s.clone();r.name=t;let o=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){let p=c.times[f]*i;if(!(p<e||p>=n)){u.push(c.times[f]);for(let x=0;x<h;++x)d.push(c.values[f*h+x])}}u.length!==0&&(c.times=oi(u,c.times.constructor),c.values=oi(d,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function U1(s,t=0,e=s,n=30){n<=0&&(n=30);let i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){let a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let p=a.times.length-1,x;if(r<=a.times[0]){let g=h,_=u-h;x=a.values.slice(g,_)}else if(r>=a.times[p]){let g=p*u+h,_=g+u-h;x=a.values.slice(g,_)}else{let g=a.createInterpolant();g.evaluate(r),x=g.resultBuffer.slice()}l==="quaternion"&&new pe().fromArray(x).normalize().conjugate().toArray(x);let m=c.times.length;for(let g=0;g<m;++g){let _=g*f+d;if(l==="quaternion")pe.multiplyQuaternionsFlat(c.values,_,x,0,c.values,_);else{let v=f-d*2;for(let M=0;M<v;++M)c.values[_+M]-=x[M]}}}return s.blendMode=pd,s}function ux(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function F1(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function O1(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=ux(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=F1(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function B0(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function z0(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}function B1(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Sr;case"vector":case"vector2":case"vector3":case"vector4":return Ho;case"color":return ko;case"quaternion":return br;case"bool":case"boolean":return Ei;case"string":return Ai}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function z1(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=B1(s.type);if(s.times===void 0){let n=[],i=[];hx(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),uo(s.settings)&&(e.settings={inTangents:oi(s.settings.inTangents,Float32Array),outTangents:oi(s.settings.outTangents,Float32Array)}),e}function k0(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}function H1(){this._document.hidden===!1&&this.reset()}function Q0(s,t){return s.distance-t.distance}function $f(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)$f(r[o],t,e,!0)}}function dx(s){let t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...dx(s.children[e]));return t}function Ge(s,t,e,n,i,r,o){Vh.set(i,r,o).unproject(n);let a=t[s];if(a!==void 0){let l=e.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],Vh.x,Vh.y,Vh.z)}}function iM(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function sM(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function rM(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function yd(s,t,e,n){let i=oM(n);switch(e){case dd:return s*t;case $l:return s*t/i.components*i.byteLength;case Jo:return s*t/i.components*i.byteLength;case os:return s*t*2/i.components*i.byteLength;case Kl:return s*t*2/i.components*i.byteLength;case fd:return s*t*3/i.components*i.byteLength;case Sn:return s*t*4/i.components*i.byteLength;case Jl:return s*t*4/i.components*i.byteLength;case Qo:case jo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jl:case ec:return Math.max(s,16)*Math.max(t,8)/4;case Ql:case tc:return Math.max(s,8)*Math.max(t,8)/2;case nc:case ic:case rc:case oc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case sc:case na:case ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case hc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case uc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case dc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case fc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case pc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case mc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case gc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case xc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case _c:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case vc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case yc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Sc:case bc:case wc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Tc:case Ec:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ia:case Ac:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function oM(s){switch(s){case En:case ld:return{byteLength:1,components:1};case Ir:case cd:case Ye:return{byteLength:2,components:1};case Yl:case Zl:return{byteLength:2,components:4};case An:case ql:case fn:return{byteLength:4,components:1};case hd:case ud:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}var Kf,ag,lg,Jf,nd,Qf,cg,hg,Ls,jf,Cr,rs,pn,nn,Ci,Rr,Ds,id,sd,tp,ug,Ns,ep,np,ip,sp,rp,op,ap,lp,rd,od,cp,hp,up,dp,fp,pp,mp,gp,xp,Ba,za,ka,hr,Ha,Ga,Va,Wa,qo,_p,vp,Xn,Us,Fs,Os,Ri,Yo,Bs,zs,qh,yp,Xl,Pi,ks,Zo,$o,po,yn,mo,ze,ad,dg,Pr,fg,Ie,Ko,pg,ti,mg,En,ld,cd,Ir,ql,An,fn,Ye,Yl,Zl,Hs,hd,ud,dd,fd,Sn,bi,Ii,$l,Jo,os,Kl,gg,Jl,Qo,jo,ta,ea,Ql,jl,tc,ec,nc,ic,sc,rc,oc,na,ac,lc,cc,hc,uc,dc,fc,pc,mc,gc,xc,_c,vc,yc,Mc,Sc,bc,wc,Tc,Ec,ia,Ac,Mp,Sp,bp,go,Xa,Da,Yh,ys,Ms,xo,Cc,pd,wp,Tp,Ep,Ap,xg,_g,vg,Li,Cp,Di,rn,_o,vo,_e,yg,Mg,Sg,bg,Na,wg,Tg,Eg,Ag,Cg,Rg,Pg,Ig,Lg,Dg,Ng,Ug,Fg,Rp,Pp,Ip,Lp,md,Dp,Np,gd,xd,Rc,Og,Bg,zg,kg,Hg,Gg,Vg,Wg,Xg,_d,Un,Ss,qg,Yg,Zg,$g,Kg,fy,Ym,bs,nx,Fn,cn,Zm,cr,ur,Bp,Wp,it,pe,Xp,P,tf,$m,qp,te,ef,Km,Jm,ue,Wr,qa,Py,Vn,Zh,Iy,sf,ke,Yp,de,So,Le,dr,$h,fr,Kh,ed,Ot,Xr,ii,Ly,Dy,ps,ih,Hn,Qm,jm,Jn,pr,Ny,t0,qr,qi,sh,ya,Uy,Fy,e0,n0,i0,s0,Oy,Yr,rf,ve,li,By,mr,ix,ms,rh,ot,hn,hi,Ya,bn,si,Yi,af,Zi,Zr,$r,r0,lf,cf,hf,uf,df,ff,ai,Ve,$i,ri,oh,Kr,Jr,Qr,gs,xs,Js,Ma,ah,lh,Qs,Qi,Jh,Xe,ch,ky,Vt,Qh,jh,tu,eu,bo,nu,wo,iu,dt,Hy,Sa,mf,Be,Gy,Zn,gf,jr,Gn,ba,je,Zt,ws,vn,ts,xf,Vy,Wy,$n,Xy,qe,To,to,wa,eo,no,io,Ta,sx,hh,Ea,uh,a0,_f,l0,Za,fh,c0,$a,Ki,vf,ph,mh,es,On,h0,js,gh,u0,xh,_h,vh,yf,yh,d0,Mh,Jt,Aa,f0,p0,Yy,m0,bh,Mf,g0,Sf,Ka,Eo,Mn,x0,Zy,Ja,wn,so,_0,wh,v0,$y,Ca,Ra,De,tr,Ky,Th,wi,y0,Ao,Bf,Dn,jy,t1,e1,Eh,er,wf,M0,S0,n1,Tf,un,Ah,Qa,tn,su,ru,b0,Pa,Ch,Ef,w0,ui,T0,E0,Wn,ja,Co,A0,zf,Ph,Ih,gr,tl,ou,au,xr,lu,cu,Ts,hu,uu,Qn,Ro,Po,ye,el,_r,Re,di,ns,nl,Lh,Dh,Af,Nh,il,Bn,vr,sl,R0,P0,Cf,Rf,Pf,rl,Io,ol,Lo,al,Do,No,Uo,du,ll,Es,As,Gf,Kn,dl,C1,fi,fl,Cs,en,pl,ml,Ti,gl,Mr,xl,_l,vl,F0,yl,Ni,L1,D1,He,Rs,ie,Ml,Sl,bl,wl,Tl,Oo,Bo,El,Al,fu,is,Cl,zo,Rl,Pl,Tn,Ei,ko,Sr,Il,br,Ai,Ho,Ps,ci,Go,Hp,on,Ji,Wf,jn,pu,mu,ro,Is,gu,xu,_u,pi,mi,If,H0,G0,wr,Oh,Bh,Mi,Tr,_s,V0,W0,Ue,Xf,Ll,qf,Dl,ss,Yf,gi,Nl,Ul,Vo,Fl,X0,Ol,Wo,Bl,zl,Lf,vu,k1,q0,Y0,Df,yu,zh,Xo,Mu,Z0,$0,nr,Su,oo,ao,Er,kl,Ar,ir,Nf,G1,sr,rr,bu,Hl,or,K0,V1,ar,wu,Tu,Gl,Gp,W1,Vp,X1,q1,Y1,Z1,$1,K1,J1,Zf,be,Eu,Vl,Q1,Au,Cu,Ru,j1,Pu,Iu,Lu,J0,Du,Nu,Uu,Fu,Zp,Ou,j0,Wl,tg,kh,lo,co,Uf,tM,eM,Bu,eg,zu,vs,Hh,Ff,ku,Hu,nM,ng,ig,Gu,Vu,Wu,sg,Gh,rg,Xu,Vh,Oe,qu,Wh,Yu,Zu,$u,og,Xh,Of,Ku,Ju,Qu,ju,td,$p=ne(()=>{Kf="187",ag={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},lg={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jf=0,nd=1,Qf=2,cg=3,hg=0,Ls=1,jf=2,Cr=3,rs=0,pn=1,nn=2,Ci=0,Rr=1,Ds=2,id=3,sd=4,tp=5,ug=6,Ns=100,ep=101,np=102,ip=103,sp=104,rp=200,op=201,ap=202,lp=203,rd=204,od=205,cp=206,hp=207,up=208,dp=209,fp=210,pp=211,mp=212,gp=213,xp=214,Ba=0,za=1,ka=2,hr=3,Ha=4,Ga=5,Va=6,Wa=7,qo=0,_p=1,vp=2,Xn=0,Us=1,Fs=2,Os=3,Ri=4,Yo=5,Bs=6,zs=7,qh="attached",yp="detached",Xl=300,Pi=301,ks=302,Zo=303,$o=304,po=1e3,yn=1001,mo=1002,ze=1003,ad=1004,dg=1004,Pr=1005,fg=1005,Ie=1006,Ko=1007,pg=1007,ti=1008,mg=1008,En=1009,ld=1010,cd=1011,Ir=1012,ql=1013,An=1014,fn=1015,Ye=1016,Yl=1017,Zl=1018,Hs=1020,hd=35902,ud=35899,dd=1021,fd=1022,Sn=1023,bi=1026,Ii=1027,$l=1028,Jo=1029,os=1030,Kl=1031,gg=1032,Jl=1033,Qo=33776,jo=33777,ta=33778,ea=33779,Ql=35840,jl=35841,tc=35842,ec=35843,nc=36196,ic=37492,sc=37496,rc=37488,oc=37489,na=37490,ac=37491,lc=37808,cc=37809,hc=37810,uc=37811,dc=37812,fc=37813,pc=37814,mc=37815,gc=37816,xc=37817,_c=37818,vc=37819,yc=37820,Mc=37821,Sc=36492,bc=36494,wc=36495,Tc=36283,Ec=36284,ia=36285,Ac=36286,Mp=2200,Sp=2201,bp=2202,go=2300,Xa=2301,Da=2302,Yh=2303,ys=2400,Ms=2401,xo=2402,Cc=2500,pd=2501,wp=0,Tp=1,Ep=2,Ap=3200,xg=3201,_g=3202,vg=3203,Li=0,Cp=1,Di="",rn="srgb",_o="srgb-linear",vo="linear",_e="srgb",yg="",Mg="rg",Sg="ga",bg=0,Na=7680,wg=7681,Tg=7682,Eg=7683,Ag=34055,Cg=34056,Rg=5386,Pg=512,Ig=513,Lg=514,Dg=515,Ng=516,Ug=517,Fg=518,Rp=519,Pp=512,Ip=513,Lp=514,md=515,Dp=516,Np=517,gd=518,xd=519,Rc=35044,Og=35048,Bg=35040,zg=35045,kg=35049,Hg=35041,Gg=35046,Vg=35050,Wg=35042,Xg="100",_d="300 es",Un=2e3,Ss=2001,qg={COMPUTE:"compute",RENDER:"render"},Yg={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Zg={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},$g={TEXTURE_COMPARE:"depthTextureCompare"},Kg={NONE:0,SHARED:1,FULL:2};fy={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};Ym={},bs=null;nx={[Ba]:Ba,[ka]:Va,[Ha]:Ha,[hr]:Ga,[za]:za,[Va]:ka,[Wa]:Wa,[Ga]:hr},Fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zm=1234567,cr=Math.PI/180,ur=180/Math.PI;Bp={DEG2RAD:cr,RAD2DEG:ur,generateUUID:ei,clamp:Qt,euclideanModulo:Fp,mapLinear:py,inverseLerp:my,lerp:Ua,damp:gy,pingpong:xy,smoothstep:_y,smootherstep:vy,randInt:yy,randFloat:My,randFloatSpread:Sy,seededRandom:by,degToRad:wy,radToDeg:Ty,isPowerOfTwo:Ey,ceilPowerOfTwo:Ay,floorPowerOfTwo:Op,setQuaternionFromProperEuler:Cy,normalize:dn,denormalize:lr},Wp=class Wp{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wp.prototype.isVector2=!0;it=Wp,pe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let _=Math.acos(m),v=Math.sin(_);g=Math.sin(g*_)/v,a=Math.sin(a*_)/v,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Xp=class Xp{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($m.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($m.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tf.copy(this).projectOnVector(t),this.sub(tf)}reflect(t){return this.sub(tf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xp.prototype.isVector3=!0;P=Xp,tf=new P,$m=new pe,qp=class qp{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=i[0],m=i[3],g=i[6],_=i[1],v=i[4],M=i[7],b=i[2],w=i[5],y=i[8];return r[0]=o*x+a*_+l*b,r[3]=o*m+a*v+l*w,r[6]=o*g+a*M+l*y,r[1]=c*x+h*_+u*b,r[4]=c*m+h*v+u*w,r[7]=c*g+h*M+u*y,r[2]=d*x+f*_+p*b,r[5]=d*m+f*v+p*w,r[8]=d*g+f*M+p*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Si("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ef.makeScale(t,e)),this}rotate(t){return Si("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ef.makeRotation(-t)),this}translate(t,e){return Si("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ef.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};qp.prototype.isMatrix3=!0;te=qp,ef=new te,Km=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jm=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ue=Ry();qa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Wr===void 0&&(Wr=yo("canvas")),Wr.width=t.width,Wr.height=t.height;let i=Wr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Wr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=yo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ji(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ji(e[n]/255)*255):e[n]=ji(e[n]);return{data:e,width:t.width,height:t.height}}else return Tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Py=0,Vn=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(nf(i[o].image)):r.push(nf(i[o]))}else r=nf(i);n.url=r}return e||(t.images[this.uuid]=n),n}};Zh=class extends Vn{constructor(t=null){Si('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}},Iy=0,sf=new P,ke=class s extends Fn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=yn,i=yn,r=Ie,o=ti,a=Sn,l=En,c=s.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=ei(),this.name="",this.source=new Vn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sf).x}get height(){return this.source.getSize(sf).y}get depth(){return this.source.getSize(sf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Tt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Tt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case po:t.x=t.x-Math.floor(t.x);break;case yn:t.x=t.x<0?0:1;break;case mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case po:t.y=t.y-Math.floor(t.y);break;case yn:t.y=t.y<0?0:1;break;case mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Xl;ke.DEFAULT_ANISOTROPY=1;Yp=class Yp{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,M=(f+1)/2,b=(g+1)/2,w=(h+d)/4,y=(u+x)/4,S=(p+m)/4;return v>M&&v>b?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=y/n):M>b?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=w/i,r=S/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=y/r,i=S/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yp.prototype.isVector4=!0;de=Yp,So=class extends Fn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new ke({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ie,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Vn(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Le=class extends So{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},dr=class extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},$h=class extends Le{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new dr(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},fr=class extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Kh=class extends Le{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new fr(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},ed=class ed{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ed().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Xr.setFromMatrixColumn(t,0).length(),r=1/Xr.setFromMatrixColumn(t,1).length(),o=1/Xr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ly,t,Dy)}lookAt(t,e,n){let i=this.elements;return Hn.subVectors(t,e),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),ps.crossVectors(n,Hn),ps.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),ps.crossVectors(n,Hn)),ps.normalize(),ih.crossVectors(Hn,ps),i[0]=ps.x,i[4]=ih.x,i[8]=Hn.x,i[1]=ps.y,i[5]=ih.y,i[9]=Hn.y,i[2]=ps.z,i[6]=ih.z,i[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],_=n[3],v=n[7],M=n[11],b=n[15],w=i[0],y=i[4],S=i[8],A=i[12],E=i[1],R=i[5],D=i[9],B=i[13],N=i[2],F=i[6],G=i[10],H=i[14],et=i[3],V=i[7],Z=i[11],st=i[15];return r[0]=o*w+a*E+l*N+c*et,r[4]=o*y+a*R+l*F+c*V,r[8]=o*S+a*D+l*G+c*Z,r[12]=o*A+a*B+l*H+c*st,r[1]=h*w+u*E+d*N+f*et,r[5]=h*y+u*R+d*F+f*V,r[9]=h*S+u*D+d*G+f*Z,r[13]=h*A+u*B+d*H+f*st,r[2]=p*w+x*E+m*N+g*et,r[6]=p*y+x*R+m*F+g*V,r[10]=p*S+x*D+m*G+g*Z,r[14]=p*A+x*B+m*H+g*st,r[3]=_*w+v*E+M*N+b*et,r[7]=_*y+v*R+M*F+b*V,r[11]=_*S+v*D+M*G+b*Z,r[15]=_*A+v*B+M*H+b*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],_=l*f-c*d,v=a*f-c*u,M=a*d-l*u,b=o*f-c*h,w=o*d-l*h,y=o*u-a*h;return e*(x*_-m*v+g*M)-n*(p*_-m*b+g*w)+i*(p*v-x*b+g*y)-r*(p*M-x*w+m*y)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],_=e*a-n*o,v=e*l-i*o,M=e*c-r*o,b=n*l-i*a,w=n*c-r*a,y=i*c-r*l,S=h*x-u*p,A=h*m-d*p,E=h*g-f*p,R=u*m-d*x,D=u*g-f*x,B=d*g-f*m,N=_*B-v*D+M*R+b*E-w*A+y*S;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/N;return t[0]=(a*B-l*D+c*R)*F,t[1]=(i*D-n*B-r*R)*F,t[2]=(x*y-m*w+g*b)*F,t[3]=(d*w-u*y-f*b)*F,t[4]=(l*E-o*B-c*A)*F,t[5]=(e*B-i*E+r*A)*F,t[6]=(m*M-p*y-g*v)*F,t[7]=(h*y-d*M+f*v)*F,t[8]=(o*D-a*E+c*S)*F,t[9]=(n*E-e*D-r*S)*F,t[10]=(p*w-x*M+g*_)*F,t[11]=(u*M-h*w-f*_)*F,t[12]=(a*A-o*R-l*S)*F,t[13]=(e*R-n*A+i*S)*F,t[14]=(x*v-p*b-m*_)*F,t[15]=(h*b-u*v+d*_)*F,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,m=o*u,g=a*u,_=l*c,v=l*h,M=l*u,b=n.x,w=n.y,y=n.z;return i[0]=(1-(x+g))*b,i[1]=(f+M)*b,i[2]=(p-v)*b,i[3]=0,i[4]=(f-M)*w,i[5]=(1-(d+g))*w,i[6]=(m+_)*w,i[7]=0,i[8]=(p+v)*y,i[9]=(m-_)*y,i[10]=(1-(d+x))*y,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Xr.set(i[0],i[1],i[2]).length(),a=Xr.set(i[4],i[5],i[6]).length(),l=Xr.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ii.copy(this);let c=1/o,h=1/a,u=1/l;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=u,ii.elements[9]*=u,ii.elements[10]*=u,e.setFromRotationMatrix(ii),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Un,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Un)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ss)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Un,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Un)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ss)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ed.prototype.isMatrix4=!0;Ot=ed,Xr=new P,ii=new Ot,Ly=new P(0,0,0),Dy=new P(1,1,1),ps=new P,ih=new P,Hn=new P,Qm=new Ot,jm=new pe,Jn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jm.setFromEuler(this),this.setFromQuaternion(jm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ny=0,t0=new P,qr=new pe,qi=new Ot,sh=new P,ya=new P,Uy=new P,Fy=new pe,e0=new P(1,0,0),n0=new P(0,1,0),i0=new P(0,0,1),s0={type:"added"},Oy={type:"removed"},Yr={type:"childadded",child:null},rf={type:"childremoved",child:null},ve=class s extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new P,e=new Jn,n=new pe,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ot},normalMatrix:{value:new te}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.multiply(qr),this}rotateOnWorldAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.premultiply(qr),this}rotateX(t){return this.rotateOnAxis(e0,t)}rotateY(t){return this.rotateOnAxis(n0,t)}rotateZ(t){return this.rotateOnAxis(i0,t)}translateOnAxis(t,e){return t0.copy(t).applyQuaternion(this.quaternion),this.position.add(t0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(e0,t)}translateY(t){return this.translateOnAxis(n0,t)}translateZ(t){return this.translateOnAxis(i0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sh.copy(t):sh.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(ya,sh,this.up):qi.lookAt(sh,ya,this.up),this.quaternion.setFromRotationMatrix(qi),i&&(qi.extractRotation(i.matrixWorld),qr.setFromRotationMatrix(qi),this.quaternion.premultiply(qr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(s0),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Oy),rf.child=t,this.dispatchEvent(rf),rf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(s0),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,t,Uy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,Fy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ve.DEFAULT_UP=new P(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;li=class extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},By={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(By)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ix={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},rh={h:0,s:0,l:0};ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=Fp(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=of(o,r,t+1/3),this.g=of(o,r,t),this.b=of(o,r,t-1/3)}return ue.colorSpaceToWorking(this,i),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&Tt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Tt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Tt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){let n=ix[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Tt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=fo(t.r),this.g=fo(t.g),this.b=fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ue.workingToColorSpace(hn.copy(this),t),Math.round(Qt(hn.r*255,0,255))*65536+Math.round(Qt(hn.g*255,0,255))*256+Math.round(Qt(hn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(hn.copy(this),e);let n=hn.r,i=hn.g,r=hn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=rn){ue.workingToColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,i=hn.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ms),this.setHSL(ms.h+t,ms.s+e,ms.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ms),t.getHSL(rh);let n=Ua(ms.h,rh.h,e),i=Ua(ms.s,rh.s,e),r=Ua(ms.l,rh.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new ot;ot.NAMES=ix;hi=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ya=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ot(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bn=class extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},si=new P,Yi=new P,af=new P,Zi=new P,Zr=new P,$r=new P,r0=new P,lf=new P,cf=new P,hf=new P,uf=new de,df=new de,ff=new de,ai=class s{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),si.subVectors(t,e),i.cross(si);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){si.subVectors(i,e),Yi.subVectors(n,e),af.subVectors(t,e);let o=si.dot(si),a=si.dot(Yi),l=si.dot(af),c=Yi.dot(Yi),h=Yi.dot(af),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zi.x),l.addScaledVector(o,Zi.y),l.addScaledVector(a,Zi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return uf.setScalar(0),df.setScalar(0),ff.setScalar(0),uf.fromBufferAttribute(t,e),df.fromBufferAttribute(t,n),ff.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(uf,r.x),o.addScaledVector(df,r.y),o.addScaledVector(ff,r.z),o}static isFrontFacing(t,e,n,i){return si.subVectors(n,e),Yi.subVectors(t,e),si.cross(Yi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),si.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Zr.subVectors(i,n),$r.subVectors(r,n),lf.subVectors(t,n);let l=Zr.dot(lf),c=$r.dot(lf);if(l<=0&&c<=0)return e.copy(n);cf.subVectors(t,i);let h=Zr.dot(cf),u=$r.dot(cf);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Zr,o);hf.subVectors(t,r);let f=Zr.dot(hf),p=$r.dot(hf);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector($r,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return r0.subVectors(r,i),a=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(r0,a);let g=1/(m+x+d);return o=x*g,a=d*g,e.copy(n).addScaledVector(Zr,o).addScaledVector($r,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ve=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oh.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oh.copy(n.boundingBox)),oh.applyMatrix4(t.matrixWorld),this.union(oh)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ma),ah.subVectors(this.max,Ma),Kr.subVectors(t.a,Ma),Jr.subVectors(t.b,Ma),Qr.subVectors(t.c,Ma),gs.subVectors(Jr,Kr),xs.subVectors(Qr,Jr),Js.subVectors(Kr,Qr);let e=[0,-gs.z,gs.y,0,-xs.z,xs.y,0,-Js.z,Js.y,gs.z,0,-gs.x,xs.z,0,-xs.x,Js.z,0,-Js.x,-gs.y,gs.x,0,-xs.y,xs.x,0,-Js.y,Js.x,0];return!pf(e,Kr,Jr,Qr,ah)||(e=[1,0,0,0,1,0,0,0,1],!pf(e,Kr,Jr,Qr,ah))?!1:(lh.crossVectors(gs,xs),e=[lh.x,lh.y,lh.z],pf(e,Kr,Jr,Qr,ah))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},$i=[new P,new P,new P,new P,new P,new P,new P,new P],ri=new P,oh=new Ve,Kr=new P,Jr=new P,Qr=new P,gs=new P,xs=new P,Js=new P,Ma=new P,ah=new P,lh=new P,Qs=new P;Qi=zy();Jh=class{static toHalfFloat(t){return Nn(t)}static fromHalfFloat(t){return Ia(t)}},Xe=new P,ch=new it,ky=0,Vt=class extends Fn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ky++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=fn,this.version=0,this._normalizationScale=t!==void 0?vd(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ch.fromBufferAttribute(this,e),ch.applyMatrix3(t),this.setXY(e,ch.x,ch.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):lr(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):dn(t,this.array)}},Qh=class extends Vt{constructor(t,e,n){super(new Int8Array(t),e,n)}},jh=class extends Vt{constructor(t,e,n){super(new Uint8Array(t),e,n)}},tu=class extends Vt{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}},eu=class extends Vt{constructor(t,e,n){super(new Int16Array(t),e,n)}},bo=class extends Vt{constructor(t,e,n){super(new Uint16Array(t),e,n)}},nu=class extends Vt{constructor(t,e,n){super(new Int32Array(t),e,n)}},wo=class extends Vt{constructor(t,e,n){super(new Uint32Array(t),e,n)}},iu=class extends Vt{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Ia(this.array[t*this.itemSize]);return this.normalized&&(e=lr(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=Nn(e),this}getY(t){let e=Ia(this.array[t*this.itemSize+1]);return this.normalized&&(e=lr(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=Nn(e),this}getZ(t){let e=Ia(this.array[t*this.itemSize+2]);return this.normalized&&(e=lr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=Nn(e),this}getW(t){let e=Ia(this.array[t*this.itemSize+3]);return this.normalized&&(e=lr(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=Nn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array)),this.array[t+0]=Nn(e),this.array[t+1]=Nn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),i=dn(i,this.array)),this.array[t+0]=Nn(e),this.array[t+1]=Nn(n),this.array[t+2]=Nn(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[t+0]=Nn(e),this.array[t+1]=Nn(n),this.array[t+2]=Nn(i),this.array[t+3]=Nn(r),this}},dt=class extends Vt{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hy=new Ve,Sa=new P,mf=new P,Be=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Hy.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sa.subVectors(t,this.center);let e=Sa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Sa,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sa.copy(t.center).add(mf)),this.expandByPoint(Sa.copy(t.center).sub(mf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gy=0,Zn=new Ot,gf=new ve,jr=new P,Gn=new Ve,ba=new Ve,je=new P,Zt=class s extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dy(t)?wo:bo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Zn.makeRotationFromQuaternion(t),this.applyMatrix4(Zn),this}rotateX(t){return Zn.makeRotationX(t),this.applyMatrix4(Zn),this}rotateY(t){return Zn.makeRotationY(t),this.applyMatrix4(Zn),this}rotateZ(t){return Zn.makeRotationZ(t),this.applyMatrix4(Zn),this}translate(t,e,n){return Zn.makeTranslation(t,e,n),this.applyMatrix4(Zn),this}scale(t,e,n){return Zn.makeScale(t,e,n),this.applyMatrix4(Zn),this}lookAt(t){return gf.lookAt(t),gf.updateMatrix(),this.applyMatrix4(gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ve);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Be);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ba.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(Gn.min,ba.min),Gn.expandByPoint(je),je.addVectors(Gn.max,ba.max),Gn.expandByPoint(je)):(Gn.expandByPoint(ba.min),Gn.expandByPoint(ba.max))}Gn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(jr.fromBufferAttribute(t,c),je.add(jr)),i=Math.max(i,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Vt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let A=0;A<n.count;A++)a[A]=new P,l[A]=new P;let h=new P,u=new P,d=new P,f=new it,p=new it,x=new it,m=new P,g=new P;function _(A,E,R){c[A]=c[E]=c[R]=1,h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,R),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,E),x.fromBufferAttribute(r,R),u.sub(h),d.sub(h),p.sub(f),x.sub(f);let D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(D),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(D),a[A].add(m),a[E].add(m),a[R].add(m),l[A].add(g),l[E].add(g),l[R].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let A=0,E=v.length;A<E;++A){let R=v[A],D=R.start,B=R.count;for(let N=D,F=D+B;N<F;N+=3)_(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let M=new P,b=new P,w=new P,y=new P;function S(A){w.fromBufferAttribute(i,A),y.copy(w);let E=a[A];M.copy(E),M.sub(w.multiplyScalar(w.dot(E))).normalize(),b.crossVectors(y,E);let D=b.dot(l[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,D)}for(let A=0,E=n.count;A<E;++A)c[A]&&S(A);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Vt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Vt(d,h,u)}if(this.index===null)return Tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ws=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=o0(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=o0(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};vn=new P,ts=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?vd(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Mo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Vt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Mo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):lr(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):dn(t,this.data.array)}},xf=new P,Vy=new P,Wy=new te,$n=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=xf.subVectors(n,e).cross(Vy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(xf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wy.getNormalMatrix(t),i=this.coplanarPoint(xf).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Xy=0,qe=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=Rr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=od,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Tt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Tt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new $n().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new it().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},To=class extends qe{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},wa=new P,eo=new P,no=new P,io=new it,Ta=new it,sx=new Ot,hh=new P,Ea=new P,uh=new P,a0=new it,_f=new it,l0=new it,Za=class extends ve{constructor(t=new To){if(super(),this.isSprite=!0,this.type="Sprite",to===void 0){to=new Zt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ws(e,5);to.setIndex([0,1,2,0,2,3]),to.setAttribute("position",new ts(n,3,0,!1)),to.setAttribute("uv",new ts(n,2,3,!1))}this.geometry=to,this.material=t,this.center=new it(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),eo.setFromMatrixScale(this.matrixWorld),sx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),no.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&eo.multiplyScalar(-no.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;dh(hh.set(-.5,-.5,0),no,o,eo,i,r),dh(Ea.set(.5,-.5,0),no,o,eo,i,r),dh(uh.set(.5,.5,0),no,o,eo,i,r),a0.set(0,0),_f.set(1,0),l0.set(1,1);let a=t.ray.intersectTriangle(hh,Ea,uh,!1,wa);if(a===null&&(dh(Ea.set(-.5,.5,0),no,o,eo,i,r),_f.set(0,1),a=t.ray.intersectTriangle(hh,uh,Ea,!1,wa),a===null))return;let l=t.ray.origin.distanceTo(wa);l<t.near||l>t.far||e.push({distance:l,point:wa.clone(),uv:ai.getInterpolation(wa,hh,Ea,uh,a0,_f,l0,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};fh=new P,c0=new P,$a=class extends ve{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let i=this.levels,r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){let i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){fh.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(fh);this.getObjectForDistance(i).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){fh.setFromMatrixPosition(t.matrixWorld),c0.setFromMatrixPosition(this.matrixWorld);let n=fh.distanceTo(c0)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){let e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}},Ki=new P,vf=new P,ph=new P,mh=new P,es=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,e),Ki.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){vf.copy(t).add(e).multiplyScalar(.5),ph.copy(e).sub(t).normalize(),mh.copy(this.origin).sub(vf);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ph),a=mh.dot(this.direction),l=-mh.dot(ph),c=mh.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(vf).addScaledVector(ph,d),f}intersectSphere(t,e){if(t.radius<0)return null;Ki.subVectors(t.center,this.origin);let n=Ki.dot(this.direction),i=Ki.dot(Ki)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,_=n.y-o.y,v=n.z-o.z,M=Math.abs(l),b=Math.abs(c),w=Math.abs(h),y,S,A,E,R,D,B,N,F,G,H,et;if(M>=b&&M>=w?(A=l,D=u,F=p,et=g,l>=0?(y=c,S=h,E=d,R=f,B=x,N=m,G=_,H=v):(y=h,S=c,E=f,R=d,B=m,N=x,G=v,H=_)):b>=w?(A=c,D=d,F=x,et=_,c>=0?(y=h,S=l,E=f,R=u,B=m,N=p,G=v,H=g):(y=l,S=h,E=u,R=f,B=p,N=m,G=g,H=v)):(A=h,D=f,F=m,et=v,h>=0?(y=l,S=c,E=u,R=d,B=p,N=x,G=g,H=_):(y=c,S=l,E=d,R=u,B=x,N=p,G=_,H=g)),A===0)return null;let V=y/A,Z=S/A,st=1/A,Et=E-V*D,Ut=R-Z*D,q=B-V*F,Q=N-Z*F,lt=G-V*et,At=H-Z*et,_t=lt*Q-At*q,Xt=Et*At-Ut*lt,Me=q*Ut-Q*Et;if(i){if(_t<0||Xt<0||Me<0)return null}else if((_t<0||Xt<0||Me<0)&&(_t>0||Xt>0||Me>0))return null;let Ct=_t+Xt+Me;if(Ct===0)return null;let oe=st*(_t*D+Xt*F+Me*et);return(Ct>0?oe<0:oe>0)?null:this.at(oe/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},On=class extends qe{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},h0=new Ot,js=new es,gh=new Be,u0=new P,xh=new P,_h=new P,vh=new P,yf=new P,yh=new P,d0=new P,Mh=new P,Jt=class extends ve{constructor(t=new Zt,e=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){yh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(yf.fromBufferAttribute(u,t),o?yh.addScaledVector(yf,h):yh.addScaledVector(yf.sub(e),h))}e.add(yh)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gh.copy(n.boundingSphere),gh.applyMatrix4(r),js.copy(t.ray).recast(t.near),!(gh.containsPoint(js.origin)===!1&&(js.intersectSphere(gh,u0)===null||js.origin.distanceToSquared(u0)>(t.far-t.near)**2))&&(h0.copy(r).invert(),js.copy(t.ray).applyMatrix4(h0),!(n.boundingBox!==null&&js.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,js)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,b=v;M<b;M+=3){let w=a.getX(M),y=a.getX(M+1),S=a.getX(M+2);i=Sh(this,g,t,n,c,h,u,w,y,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);i=Sh(this,o,t,n,c,h,u,_,v,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,b=v;M<b;M+=3){let w=M,y=M+1,S=M+2;i=Sh(this,g,t,n,c,h,u,w,y,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=m,v=m+1,M=m+2;i=Sh(this,o,t,n,c,h,u,_,v,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};Aa=new de,f0=new de,p0=new de,Yy=new de,m0=new Ot,bh=new P,Mf=new Be,g0=new Ot,Sf=new es,Ka=class extends Jt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qh,this.bindMatrix=new Ot,this.bindMatrixInverse=new Ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ve),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,bh),this.boundingBox.expandByPoint(bh)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Be),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,bh),this.boundingSphere.expandByPoint(bh)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mf.copy(this.boundingSphere),Mf.applyMatrix4(i),t.ray.intersectsSphere(Mf)!==!1&&(g0.copy(i).invert(),Sf.copy(t.ray).applyMatrix4(g0),!(this.boundingBox!==null&&Sf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Sf)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new de,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===qh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Tt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;f0.fromBufferAttribute(i.attributes.skinIndex,t),p0.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(Aa.copy(e),e.set(0,0,0,0)):(Aa.set(e.x,e.y,e.z,1),e.set(0,0,0)),Aa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=p0.getComponent(r);if(o!==0){let a=f0.getComponent(r);m0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Yy.copy(Aa).applyMatrix4(m0),o)}}return e.isVector4&&(e.w=Aa.w),e.applyMatrix4(this.bindMatrixInverse)}},Eo=class extends ve{constructor(){super(),this.isBone=!0,this.type="Bone"}},Mn=class extends ke{constructor(t=null,e=1,n=1,i,r,o,a,l,c=ze,h=ze,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},x0=new Ot,Zy=new Ot,Ja=class s{constructor(t=[],e=[]){this.uuid=ei(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Tt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ot)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Ot;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:Zy;x0.multiplyMatrices(a,e[r]),x0.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Mn(e,t,t,Sn,fn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(Tt("Skeleton: No bone found with UUID:",r),o=new Eo),this.bones.push(o),this.boneInverses.push(new Ot().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},wn=class extends Vt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},so=new Ot,_0=new Ot,wh=[],v0=new Ve,$y=new Ot,Ca=new Jt,Ra=new Be,De=class extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$y)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ve),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,so),v0.copy(t.boundingBox).applyMatrix4(so),this.boundingBox.union(v0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Be),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,so),Ra.copy(t.boundingSphere).applyMatrix4(so),this.boundingSphere.union(Ra)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ca.geometry=this.geometry,Ca.material=this.material,Ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(n),t.ray.intersectsSphere(Ra)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,so),_0.multiplyMatrices(n,so),Ca.matrixWorld=_0,Ca.raycast(t,wh);for(let o=0,a=wh.length;o<a;o++){let l=wh[o];l.instanceId=r,l.object=this,e.push(l)}wh.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new wn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mn(new Float32Array(i*this.count),i,this.count,$l,fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},tr=new Be,Ky=new it(.5,.5),Th=new P,wi=class{constructor(t=new $n,e=new $n,n=new $n,i=new $n,r=new $n,o=new $n){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],_=r[12],v=r[13],M=r[14],b=r[15];if(i[0].setComponents(c-o,f-h,g-p,b-_).normalize(),i[1].setComponents(c+o,f+h,g+p,b+_).normalize(),i[2].setComponents(c+a,f+u,g+x,b+v).normalize(),i[3].setComponents(c-a,f-u,g-x,b-v).normalize(),n)i[4].setComponents(l,d,m,M).normalize(),i[5].setComponents(c-l,f-d,g-m,b-M).normalize();else if(i[4].setComponents(c-l,f-d,g-m,b-M).normalize(),e===Un)i[5].setComponents(c+l,f+d,g+m,b+M).normalize();else if(e===Ss)i[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(t){tr.center.set(0,0,0);let e=Ky.distanceTo(t.center);return tr.radius=.7071067811865476+e,tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Th.x=i.normal.x>0?t.max.x:t.min.x,Th.y=i.normal.y>0?t.max.y:t.min.y,Th.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Th)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},y0=new Ot,Ao=class s{constructor(){this.coordinateSystem=Un,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];y0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new wi),n[i].setFromProjectionMatrix(y0,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new wi),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};Bf=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}},Dn=new Ot,jy=new ot(1,1,1),t1=new wi,e1=new Ao,Eh=new Ve,er=new Be,wf=new P,M0=new P,S0=new P,n1=new P,Tf=new Bf,un=new Jt,Ah=[];Qa=class extends Jt{constructor(t,e,n=e*2,i){super(new Zt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(t),this._mergedDrawStarts=new Int32Array(t),this._mergedDrawInstanceCounts=new Int32Array(t),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new Mn(e,t,t,Sn,fn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new Mn(e,t,t,Jo,An);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new Mn(e,t,t,Sn,fn);n.colorSpace=ue.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in t.attributes){let o=t.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),u=new Vt(h,l,c);e.setAttribute(r,u)}if(t.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new Vt(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(t){let e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){let e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ve);let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,Dn),this.getBoundingBoxAt(r,Eh).applyMatrix4(Dn),t.union(Eh)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Be);let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,Dn),this.getBoundingSphereAt(r,er).applyMatrix4(Dn),t.union(er)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(bf),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;Dn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(jy.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let o=t.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(bf),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(i&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(let h in n.attributes){let u=e.getAttribute(h),d=n.getAttribute(h);i1(u,d,l);let f=u.itemSize;for(let p=u.count,x=c;p<x;p++){let m=l+p;for(let g=0;g<f;g++)d.setComponent(m,g,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(i){let h=a.indexStart,u=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let d=0;d<o.count;d++)r.setX(h+d,l+o.getX(d));for(let d=o.count,f=u;d<f;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0,n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let l=i[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=r.index,p=f.array,x=t-u;for(let m=h;m<h+d;m++)p[m]=p[m]+x;f.array.copyWithin(e,h,h+d),f.addUpdateRange(e,d),f.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){let{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(let f in d){let p=d[f],{array:x,itemSize:m}=p;x.copyWithin(t*m,h*m,(h+u)*m),p.addUpdateRange(t*m,u*m),p.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){let r=new Ve,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint(wf.fromBufferAttribute(a,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){let r=new Be;this.getBoundingBoxAt(t,Eh),Eh.getCenter(r.center);let o=n.index,a=n.attributes.position,l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let u=c;o&&(u=o.getX(u)),wf.fromBufferAttribute(a,u),l=Math.max(l,r.center.distanceToSquared(wf))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);let n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);let n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){let e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(bf);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let i=new Int32Array(t),r=new Int32Array(t);yi(this._multiDrawCounts,i),yi(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r;let o=new Int32Array(t),a=new Int32Array(t),l=new Int32Array(t);yi(this._mergedDrawCounts,o),yi(this._mergedDrawStarts,a),yi(this._mergedDrawInstanceCounts,l),this._mergedDrawCounts=o,this._mergedDrawStarts=a,this._mergedDrawInstanceCounts=l,this._maxInstanceCount=t;let c=this._indirectTexture,h=this._matricesTexture,u=this._colorsTexture;c.dispose(),this._initIndirectTexture(),yi(c.image.data,this._indirectTexture.image.data),h.dispose(),this._initMatricesTexture(),yi(h.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),yi(u.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(t,e){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Zt,this._initializeGeometry(r));let o=this.geometry;r.index&&yi(r.index.array,o.index.array);for(let a in r.attributes)yi(r.attributes[a].array,o.attributes[a].array);this._visibilityChanged=!0}raycast(t,e){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;un.material=this.material,un.geometry.index=o.index,un.geometry.attributes=o.attributes,un.geometry.boundingBox===null&&(un.geometry.boundingBox=new Ve),un.geometry.boundingSphere===null&&(un.geometry.boundingSphere=new Be);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;let c=n[a].geometryIndex,h=i[c];un.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,un.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,un.geometry.boundingBox),this.getBoundingSphereAt(c,un.geometry.boundingSphere),un.raycast(t,Ah);for(let u=0,d=Ah.length;u<d;u++){let f=Ah[u];f.object=this,f.batchId=a,e.push(f)}Ah.length=0}un.material=null,un.geometry.index=null,un.geometry.attributes={},un.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._mergedDrawCounts=t._mergedDrawCounts.slice(),this._mergedDrawStarts=t._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=t._mergedDrawInstanceCounts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),t._colorsTexture!==null?(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(t,e,n,i="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let r=e.getIndex(),o=r===null?1:r.array.BYTES_PER_ELEMENT,a=1;n.wireframe&&(a=2,o=e.attributes.position.count>65535?4:2);let l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._mergedDrawStarts,d=this._mergedDrawCounts,f=this._mergedDrawInstanceCounts,p=this._geometryInfo,x=this.perObjectFrustumCulled,m=this._indirectTexture,g=m.image.data,_=t.isArrayCamera?e1:t1;x&&(t.isArrayCamera?_.setFromArrayCamera(t):(Dn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).multiply(this.matrixWorld),_.setFromProjectionMatrix(Dn,t.coordinateSystem,t.reversedDepth)));let v=0,M=0;if(this.sortObjects){Dn.copy(this.matrixWorld).invert(),M0.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Dn),S0.set(0,0,-1).transformDirection(t.matrixWorld).transformDirection(Dn);for(let y=0,S=l.length;y<S;y++)if(l[y].visible&&l[y].active){let A=l[y].geometryIndex;this.getMatrixAt(y,Dn),this.getBoundingSphereAt(A,er).applyMatrix4(Dn);let E=!1;if(x&&(E=!_.intersectsSphere(er)),!E){let R=p[A],D=n1.subVectors(er.center,M0).dot(S0);Tf.push(R.start,R.count,D,y)}}let b=Tf.list,w=this.customSort;w===null?b.sort(n.transparent?Qy:Jy):w.call(this,b,t);for(let y=0,S=b.length;y<S;y++){let A=b[y],E=A.start*o*a,R=A.count*a;i==="merged"?M>0&&u[M-1]===E&&d[M-1]===R?f[M-1]++:(u[M]=E,d[M]=R,f[M]=1,M++):(c[v]=E,h[v]=R),g[v]=A.index,v++}Tf.reset()}else for(let b=0,w=l.length;b<w;b++)if(l[b].visible&&l[b].active){let y=l[b].geometryIndex,S=!1;if(x&&(this.getMatrixAt(b,Dn),this.getBoundingSphereAt(y,er).applyMatrix4(Dn),S=!_.intersectsSphere(er)),!S){let A=p[y],E=A.start*o*a,R=A.count*a;i==="merged"?M>0&&u[M-1]===E&&d[M-1]===R?f[M-1]++:(u[M]=E,d[M]=R,f[M]=1,M++):(c[v]=E,h[v]=R),g[v]=b,v++}}m.needsUpdate=!0,this._multiDrawCount=v,this._mergedDrawCount=M,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeRender(t,e,n,i,r){t.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(n,i,r)}onBeforeShadow(t,e,n,i,r,o){t.isWebGPURenderer!==!0&&this._updateDrawParameters(i,r,o)}},tn=class extends qe{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},su=new P,ru=new P,b0=new Ot,Pa=new es,Ch=new Be,Ef=new P,w0=new P,ui=class extends ve{constructor(t=new Zt,e=new tn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)su.fromBufferAttribute(e,i-1),ru.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=su.distanceTo(ru);t.setAttribute("lineDistance",new dt(n,1))}else Tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ch.copy(n.boundingSphere),Ch.applyMatrix4(i),Ch.radius+=r,t.ray.intersectsSphere(Ch)===!1)return;b0.copy(i).invert(),Pa.copy(t.ray).applyMatrix4(b0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=h.getX(x),_=h.getX(x+1),v=Rh(this,t,Pa,l,g,_,x);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=Rh(this,t,Pa,l,x,m,p-1);g&&e.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=Rh(this,t,Pa,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=Rh(this,t,Pa,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};T0=new P,E0=new P,Wn=class extends ui{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)T0.fromBufferAttribute(e,i),E0.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+T0.distanceTo(E0);t.setAttribute("lineDistance",new dt(n,1))}else Tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ja=class extends ui{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Co=class extends qe{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},A0=new Ot,zf=new es,Ph=new Be,Ih=new P,gr=class extends ve{constructor(t=new Zt,e=new Co){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ph.copy(n.boundingSphere),Ph.applyMatrix4(i),Ph.radius+=r,t.ray.intersectsSphere(Ph)===!1)return;A0.copy(i).invert(),zf.copy(t.ray).applyMatrix4(A0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,x=f;p<x;p++){let m=c.getX(p);Ih.fromBufferAttribute(u,m),C0(Ih,m,l,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,x=f;p<x;p++)Ih.fromBufferAttribute(u,p),C0(Ih,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};tl=class extends ke{constructor(t,e,n,i,r=Ie,o=Ie,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},ou=class extends tl{constructor(t,e,n,i,r,o,a,l){super({},t,e,n,i,r,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}},au=class extends ke{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=ze,this.minFilter=ze,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new Vn(Object.assign({},t.image)),this}},xr=class extends ke{constructor(t=[],e,n,i,r,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},lu=class extends xr{constructor(t,e,n,i,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=yn,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},cu=class extends xr{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,Pi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},Ts=class extends ke{constructor(t=[],e=Pi,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hu=class extends ke{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},uu=class extends ke{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){let t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}},Qn=class extends ke{constructor(t,e,n=An,i,r,o,a=ze,l=ze,c,h=bi,u=1){if(h!==bi&&h!==Ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ro=class extends Qn{constructor(t,e=An,n=Pi,i,r,o=ze,a=ze,l,c=bi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Po=class extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ye=class s extends Zt{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2));function p(x,m,g,_,v,M,b,w,y,S,A){let E=M/y,R=b/S,D=M/2,B=b/2,N=w/2,F=y+1,G=S+1,H=0,et=0,V=new P;for(let Z=0;Z<G;Z++){let st=Z*R-B;for(let Et=0;Et<F;Et++){let Ut=Et*E-D;V[x]=Ut*_,V[m]=st*v,V[g]=N,c.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[g]=w>0?1:-1,h.push(V.x,V.y,V.z),u.push(Et/y),u.push(1-Z/S),H+=1}}for(let Z=0;Z<S;Z++)for(let st=0;st<y;st++){let Et=d+st+F*Z,Ut=d+st+F*(Z+1),q=d+(st+1)+F*(Z+1),Q=d+(st+1)+F*Z;l.push(Et,Ut,Q),l.push(Ut,q,Q),et+=6}a.addGroup(f,et,A),f+=et,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},el=class s extends Zt{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,p=n*2+r,x=i+1,m=new P,g=new P;for(let _=0;_<=p;_++){let v=0,M=0,b=0,w=0;if(_<=n){let A=_/n,E=A*Math.PI/2;M=-h-t*Math.cos(E),b=t*Math.sin(E),w=-t*Math.cos(E),v=A*u}else if(_<=n+r){let A=(_-n)/r;M=-h+A*e,b=t,w=0,v=u+A*d}else{let A=(_-n-r)/n,E=A*Math.PI/2;M=h+t*Math.sin(E),b=t*Math.cos(E),w=t*Math.sin(E),v=u+d+A*u}let y=Math.max(0,Math.min(1,v/f)),S=0;_===0?S=.5/i:_===p&&(S=-.5/i);for(let A=0;A<=i;A++){let E=A/i,R=E*Math.PI*2,D=Math.sin(R),B=Math.cos(R);g.x=-b*B,g.y=M,g.z=b*D,a.push(g.x,g.y,g.z),m.set(-b*B,w,b*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(E+S,y)}if(_>0){let A=(_-1)*x;for(let E=0;E<i;E++){let R=A+E,D=A+E+1,B=_*x+E,N=_*x+E+1;o.push(R,D,B),o.push(D,N,B)}}}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},_r=class s extends Zt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new P,h=new it;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(a,3)),this.setAttribute("uv",new dt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Re=class s extends Zt{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],m=n/2,g=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function _(){let M=new P,b=new P,w=0,y=(e-t)/n;for(let S=0;S<=r;S++){let A=[],E=S/r,R=E*(e-t)+t;for(let D=0;D<=i;D++){let B=D/i,N=B*l+a,F=Math.sin(N),G=Math.cos(N);b.x=R*F,b.y=-E*n+m,b.z=R*G,u.push(b.x,b.y,b.z),M.set(F,y,G).normalize(),d.push(M.x,M.y,M.z),f.push(B,1-E),A.push(p++)}x.push(A)}for(let S=0;S<i;S++)for(let A=0;A<r;A++){let E=x[A][S],R=x[A+1][S],D=x[A+1][S+1],B=x[A][S+1];(t>0||A!==0)&&(h.push(E,R,B),w+=3),(e>0||A!==r-1)&&(h.push(R,D,B),w+=3)}c.addGroup(g,w,0),g+=w}function v(M){let b=p,w=new it,y=new P,S=0,A=M===!0?t:e,E=M===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),p++;let R=p;for(let D=0;D<=i;D++){let N=D/i*l+a,F=Math.cos(N),G=Math.sin(N);y.x=A*G,y.y=m*E,y.z=A*F,u.push(y.x,y.y,y.z),d.push(0,E,0),w.x=F*.5+.5,w.y=G*.5*E+.5,f.push(w.x,w.y),p++}for(let D=0;D<i;D++){let B=b+D,N=R+D;M===!0?h.push(N,N+1,B):h.push(N+1,N,B),S+=3}c.addGroup(g,S,M===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},di=class s extends Re{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ns=class s extends Zt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new P,M=new P,b=new P;for(let w=0;w<e.length;w+=3)f(e[w+0],v),f(e[w+1],M),f(e[w+2],b),l(v,M,b,_)}function l(_,v,M,b){let w=b+1,y=[];for(let S=0;S<=w;S++){y[S]=[];let A=_.clone().lerp(M,S/w),E=v.clone().lerp(M,S/w),R=w-S;for(let D=0;D<=R;D++)D===0&&S===w?y[S][D]=A:y[S][D]=A.clone().lerp(E,D/R)}for(let S=0;S<w;S++)for(let A=0;A<2*(w-S)-1;A++){let E=Math.floor(A/2);A%2===0?(d(y[S][E+1]),d(y[S+1][E]),d(y[S][E])):(d(y[S][E+1]),d(y[S+1][E+1]),d(y[S+1][E]))}}function c(_){let v=new P;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(_),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let _=new P;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let M=m(_)/2/Math.PI+.5,b=g(_)/Math.PI+.5;o.push(M,1-b)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){let v=o[_+0],M=o[_+2],b=o[_+4],w=Math.max(v,M,b),y=Math.min(v,M,b);w>.9&&y<.1&&(v<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,v){let M=_*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function p(){let _=new P,v=new P,M=new P,b=new P,w=new it,y=new it,S=new it;for(let A=0,E=0;A<r.length;A+=9,E+=6){_.set(r[A+0],r[A+1],r[A+2]),v.set(r[A+3],r[A+4],r[A+5]),M.set(r[A+6],r[A+7],r[A+8]),w.set(o[E+0],o[E+1]),y.set(o[E+2],o[E+3]),S.set(o[E+4],o[E+5]),b.copy(_).add(v).add(M).divideScalar(3);let R=m(b);x(w,E+0,_,R),x(y,E+2,v,R),x(S,E+4,M,R)}}function x(_,v,M,b){b<0&&_.x===1&&(o[v]=_.x-1),M.x===0&&M.z===0&&(o[v]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}},nl=class s extends ns{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Lh=new P,Dh=new P,Af=new P,Nh=new ai,il=class extends Zt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(cr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d=new Map,f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:m,c:g}=Nh;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Nh.getNormal(Af),u[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let _=0;_<3;_++){let v=(_+1)%3,M=u[_],b=u[v],w=Nh[h[_]],y=Nh[h[v]],S=`${M}_${b}`,A=`${b}_${M}`,E=d.get(A);E?(Af.dot(E.normal)<=r&&(f.push(w.x,w.y,w.z),f.push(y.x,y.y,y.z)),d.set(A,null)):d.has(S)||d.set(S,{index0:c[_],index1:c[v],normal:Af.clone()})}}for(let p of d.values())if(p){let{index0:x,index1:m}=p;Lh.fromBufferAttribute(a,x),Dh.fromBufferAttribute(a,m),f.push(Lh.x,Lh.y,Lh.z),f.push(Dh.x,Dh.y,Dh.z)}this.setAttribute("position",new dt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Tt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new it:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,i=[],r=[],o=[],a=new P,l=new Ot;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Qt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Qt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},vr=class extends Bn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new it){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},sl=class extends vr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};R0=new P,P0=new P,Cf=new zp,Rf=new zp,Pf=new zp,rl=class extends Bn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(P0.subVectors(i[0],i[1]).add(i[0]),c=P0);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(R0.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=R0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Cf.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,m),Rf.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,m),Pf.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Cf.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Rf.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Pf.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Cf.calc(l),Rf.calc(l),Pf.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};Io=class extends Bn{constructor(t=new it,e=new it,n=new it,i=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new it){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Oa(t,i.x,r.x,o.x,a.x),Oa(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ol=class extends Bn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Oa(t,i.x,r.x,o.x,a.x),Oa(t,i.y,r.y,o.y,a.y),Oa(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lo=class extends Bn{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},al=class extends Bn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends Bn{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Fa(t,i.x,r.x,o.x),Fa(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},No=class extends Bn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Fa(t,i.x,r.x,o.x),Fa(t,i.y,r.y,o.y),Fa(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(I0(a,l.x,c.x,h.x,u.x),I0(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new it().fromArray(i))}return this}},du=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:rl,CubicBezierCurve:Io,CubicBezierCurve3:ol,EllipseCurve:vr,LineCurve:Lo,LineCurve3:al,QuadraticBezierCurve:Do,QuadraticBezierCurve3:No,SplineCurve:Uo}),ll=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new du[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new du[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},Es=class extends ll{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Lo(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Do(this.currentPoint.clone(),new it(t,e),new it(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Io(this.currentPoint.clone(),new it(t,e),new it(n,i),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Uo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new vr(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},As=class extends Es{constructor(t){super(t),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Es().fromJSON(i))}return this}};Gf=class{static triangulate(t,e,n=2){return u1(t,e,n)}},Kn=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];D0(t),N0(n,t);let o=t.length;e.forEach(D0);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,N0(n,e[l]);let a=Gf.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};dl=class s extends Zt{constructor(t=new As([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new dt(i,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:C1,v,M=!1,b,w,y,S;if(g){v=g.getSpacedPoints(h),M=!0,d=!1;let rt=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,rt),w=new P,y=new P,S=new P}d||(m=0,f=0,p=0,x=0);let A=a.extractPoints(c),E=A.shape,R=A.holes;if(!Kn.isClockWise(E)){E=E.reverse();for(let rt=0,xt=R.length;rt<xt;rt++){let pt=R[rt];Kn.isClockWise(pt)&&(R[rt]=pt.reverse())}}function B(rt){let pt=10000000000000001e-36,Nt=rt[0];for(let mt=1;mt<=rt.length;mt++){let ee=mt%rt.length,kt=rt[ee],ce=kt.x-Nt.x,re=kt.y-Nt.y,k=ce*ce+re*re,L=Math.max(Math.abs(kt.x),Math.abs(kt.y),Math.abs(Nt.x),Math.abs(Nt.y)),$=pt*L*L;if(k<=$){rt.splice(ee,1),mt--;continue}Nt=kt}}B(E),R.forEach(B);let N=R.length,F=E;for(let rt=0;rt<N;rt++){let xt=R[rt];E=E.concat(xt)}function G(rt,xt,pt){return xt||Wt("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(xt,pt)}let H=E.length;function et(rt,xt,pt){let Nt,mt,ee,kt=rt.x-xt.x,ce=rt.y-xt.y,re=pt.x-rt.x,k=pt.y-rt.y,L=kt*kt+ce*ce,$=kt*k-ce*re;if(Math.abs($)>Number.EPSILON){let ht=Math.sqrt(L),qt=Math.sqrt(re*re+k*k),at=xt.x-ce/ht,Kt=xt.y+kt/ht,Pt=pt.x-k/qt,Dt=pt.y+re/qt,I=((Pt-at)*k-(Dt-Kt)*re)/(kt*k-ce*re);Nt=at+kt*I-rt.x,mt=Kt+ce*I-rt.y;let T=Nt*Nt+mt*mt;if(T<=2)return new it(Nt,mt);ee=Math.sqrt(T/2)}else{let ht=!1;kt>Number.EPSILON?re>Number.EPSILON&&(ht=!0):kt<-Number.EPSILON?re<-Number.EPSILON&&(ht=!0):Math.sign(ce)===Math.sign(k)&&(ht=!0),ht?(Nt=-ce,mt=kt,ee=Math.sqrt(L)):(Nt=kt,mt=ce,ee=Math.sqrt(L/2))}return new it(Nt/ee,mt/ee)}let V=[];for(let rt=0,xt=F.length,pt=xt-1,Nt=rt+1;rt<xt;rt++,pt++,Nt++)pt===xt&&(pt=0),Nt===xt&&(Nt=0),V[rt]=et(F[rt],F[pt],F[Nt]);let Z=[],st,Et=V.concat();for(let rt=0,xt=N;rt<xt;rt++){let pt=R[rt];st=[];for(let Nt=0,mt=pt.length,ee=mt-1,kt=Nt+1;Nt<mt;Nt++,ee++,kt++)ee===mt&&(ee=0),kt===mt&&(kt=0),st[Nt]=et(pt[Nt],pt[ee],pt[kt]);Z.push(st),Et=Et.concat(st)}let Ut;if(m===0)Ut=Kn.triangulateShape(F,R);else{let rt=[],xt=[];for(let pt=0;pt<m;pt++){let Nt=pt/m,mt=f*Math.cos(Nt*Math.PI/2),ee=p*Math.sin(Nt*Math.PI/2)+x;for(let kt=0,ce=F.length;kt<ce;kt++){let re=G(F[kt],V[kt],ee);Xt(re.x,re.y,-mt),Nt===0&&rt.push(re)}for(let kt=0,ce=N;kt<ce;kt++){let re=R[kt];st=Z[kt];let k=[];for(let L=0,$=re.length;L<$;L++){let ht=G(re[L],st[L],ee);Xt(ht.x,ht.y,-mt),Nt===0&&k.push(ht)}Nt===0&&xt.push(k)}}Ut=Kn.triangulateShape(rt,xt)}let q=Ut.length,Q=p+x;for(let rt=0;rt<H;rt++){let xt=d?G(E[rt],Et[rt],Q):E[rt];M?(y.copy(b.normals[0]).multiplyScalar(xt.x),w.copy(b.binormals[0]).multiplyScalar(xt.y),S.copy(v[0]).add(y).add(w),Xt(S.x,S.y,S.z)):Xt(xt.x,xt.y,0)}for(let rt=1;rt<=h;rt++)for(let xt=0;xt<H;xt++){let pt=d?G(E[xt],Et[xt],Q):E[xt];M?(y.copy(b.normals[rt]).multiplyScalar(pt.x),w.copy(b.binormals[rt]).multiplyScalar(pt.y),S.copy(v[rt]).add(y).add(w),Xt(S.x,S.y,S.z)):Xt(pt.x,pt.y,u/h*rt)}for(let rt=m-1;rt>=0;rt--){let xt=rt/m,pt=f*Math.cos(xt*Math.PI/2),Nt=p*Math.sin(xt*Math.PI/2)+x;for(let mt=0,ee=F.length;mt<ee;mt++){let kt=G(F[mt],V[mt],Nt);Xt(kt.x,kt.y,u+pt)}for(let mt=0,ee=R.length;mt<ee;mt++){let kt=R[mt];st=Z[mt];for(let ce=0,re=kt.length;ce<re;ce++){let k=G(kt[ce],st[ce],Nt);M?Xt(k.x,k.y+v[h-1].y,v[h-1].x+pt):Xt(k.x,k.y,u+pt)}}}lt(),At();function lt(){let rt=i.length/3;if(d){let xt=0,pt=H*xt;for(let Nt=0;Nt<q;Nt++){let mt=Ut[Nt];Me(mt[2]+pt,mt[1]+pt,mt[0]+pt)}xt=h+m*2,pt=H*xt;for(let Nt=0;Nt<q;Nt++){let mt=Ut[Nt];Me(mt[0]+pt,mt[1]+pt,mt[2]+pt)}}else{for(let xt=0;xt<q;xt++){let pt=Ut[xt];Me(pt[2],pt[1],pt[0])}for(let xt=0;xt<q;xt++){let pt=Ut[xt];Me(pt[0]+H*h,pt[1]+H*h,pt[2]+H*h)}}n.addGroup(rt,i.length/3-rt,0)}function At(){let rt=i.length/3,xt=0;_t(F,xt),xt+=F.length;for(let pt=0,Nt=R.length;pt<Nt;pt++){let mt=R[pt];_t(mt,xt),xt+=mt.length}n.addGroup(rt,i.length/3-rt,1)}function _t(rt,xt){let pt=rt.length;for(;--pt>=0;){let Nt=pt,mt=pt-1;mt<0&&(mt=rt.length-1);for(let ee=0,kt=h+m*2;ee<kt;ee++){let ce=H*ee,re=H*(ee+1),k=xt+Nt+ce,L=xt+mt+ce,$=xt+mt+re,ht=xt+Nt+re;Ct(k,L,$,ht)}}}function Xt(rt,xt,pt){l.push(rt),l.push(xt),l.push(pt)}function Me(rt,xt,pt){oe(rt),oe(xt),oe(pt);let Nt=i.length/3,mt=_.generateTopUV(n,i,Nt-3,Nt-2,Nt-1);fe(mt[0]),fe(mt[1]),fe(mt[2])}function Ct(rt,xt,pt,Nt){oe(rt),oe(xt),oe(Nt),oe(xt),oe(pt),oe(Nt);let mt=i.length/3,ee=_.generateSideWallUV(n,i,mt-6,mt-3,mt-2,mt-1);fe(ee[0]),fe(ee[1]),fe(ee[3]),fe(ee[1]),fe(ee[2]),fe(ee[3])}function oe(rt){i.push(l[rt*3+0]),i.push(l[rt*3+1]),i.push(l[rt*3+2])}function fe(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return R1(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new du[i.type]().fromJSON(i)),new s(n,t.options)}},C1={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new it(r,o),new it(a,l),new it(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],p=t[i*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new it(o,1-l),new it(c,1-u),new it(d,1-p),new it(x,1-g)]:[new it(a,1-l),new it(h,1-u),new it(f,1-p),new it(m,1-g)]}};fi=class s extends ns{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},fl=class s extends Zt{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Qt(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new P,d=new it,f=new P,p=new P,x=new P,m=0,g=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=e;_++){let v=n+_*h*i,M=Math.sin(v),b=Math.cos(v);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*M,u.y=t[w].y,u.z=t[w].x*b,o.push(u.x,u.y,u.z),d.x=_/e,d.y=w/(t.length-1),a.push(d.x,d.y);let y=l[3*w+0]*M,S=l[3*w+1],A=l[3*w+0]*b;c.push(y,S,A)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){let M=v+_*t.length,b=M,w=M+t.length,y=M+t.length+1,S=M+1;r.push(b,w,S),r.push(y,S,w)}this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("uv",new dt(a,2)),this.setAttribute("normal",new dt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Cs=class s extends ns{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},en=class s extends Zt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let _=g*d-o;for(let v=0;v<c;v++){let M=v*u-r;p.push(M,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let v=_+c*g,M=_+c*(g+1),b=_+1+c*(g+1),w=_+1+c*g;f.push(v,M,w),f.push(M,b,w)}this.setIndex(f),this.setAttribute("position",new dt(p,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},pl=class s extends Zt{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/i,f=new P,p=new it;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let g=r+m/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let g=0;g<n;g++){let _=g+m,v=_,M=_+n+1,b=_+n+2,w=_+1;a.push(v,M,w),a.push(M,b,w)}}this.setIndex(a),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ml=class s extends Zt{constructor(t=new As([new it(0,.5),new it(-.5,-.5),new it(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new dt(i,3)),this.setAttribute("normal",new dt(r,3)),this.setAttribute("uv",new dt(o,2));function c(h){let u=i.length/3,d=h.extractPoints(e),f=d.shape,p=d.holes;Kn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let _=p[m];Kn.isClockWise(_)===!0&&(p[m]=_.reverse())}let x=Kn.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let _=p[m];f=f.concat(_)}for(let m=0,g=f.length;m<g;m++){let _=f[m];i.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,g=x.length;m<g;m++){let _=x[m],v=_[0]+u,M=_[1]+u,b=_[2]+u;n.push(v,M,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return P1(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};Ti=class s extends Zt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,d=new P,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let _=[],v=g/n,M=o+v*a,b=t*Math.cos(M),w=Math.sqrt(t*t-b*b),y=0;g===0&&o===0?y=.5/e:g===n&&l===Math.PI&&(y=-.5/e);for(let S=0;S<=e;S++){let A=S/e,E=i+A*r;u.x=-w*Math.cos(E),u.y=b,u.z=w*Math.sin(E),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+y,1-v),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){let v=h[g][_+1],M=h[g][_],b=h[g+1][_],w=h[g+1][_+1];(g!==0||o>0)&&f.push(v,M,w),(g!==n-1||l<Math.PI)&&f.push(M,b,w)}this.setIndex(f),this.setAttribute("position",new dt(p,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},gl=class s extends ns{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Mr=class s extends Zt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new P,f=new P,p=new P;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=i;g++){let _=g/i*r;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){let g=(i+1)*x+m-1,_=(i+1)*(x-1)+m-1,v=(i+1)*(x-1)+m,M=(i+1)*x+m;l.push(g,_,M),l.push(_,v,M)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},xl=class s extends Zt{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],u=new P,d=new P,f=new P,p=new P,x=new P,m=new P,g=new P;for(let v=0;v<=n;++v){let M=v/n*r*Math.PI*2;_(M,r,o,t,f),_(M+.01,r,o,t,p),m.subVectors(p,f),g.addVectors(p,f),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let b=0;b<=i;++b){let w=b/i*Math.PI*2,y=-e*Math.cos(w),S=e*Math.sin(w);u.x=f.x+(y*g.x+S*x.x),u.y=f.y+(y*g.y+S*x.y),u.z=f.z+(y*g.z+S*x.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(v/n),h.push(b/i)}}for(let v=1;v<=n;v++)for(let M=1;M<=i;M++){let b=(i+1)*(v-1)+(M-1),w=(i+1)*v+(M-1),y=(i+1)*v+M,S=(i+1)*(v-1)+M;a.push(b,w,S),a.push(w,y,S)}this.setIndex(a),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(h,2));function _(v,M,b,w,y){let S=Math.cos(v),A=Math.sin(v),E=b/M*v,R=Math.cos(E);y.x=w*(2+R)*.5*S,y.y=w*(2+R)*A*.5,y.z=w*Math.sin(E)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},_l=class s extends Zt{constructor(t=new No(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new it,h=new P,u=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function x(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),_(),g()}function m(v){h=t.getPointAt(v/e,h);let M=o.normals[v],b=o.binormals[v];for(let w=0;w<=i;w++){let y=w/i*Math.PI*2,S=Math.sin(y),A=-Math.cos(y);l.x=A*M.x+S*b.x,l.y=A*M.y+S*b.y,l.z=A*M.z+S*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let v=1;v<=e;v++)for(let M=1;M<=i;M++){let b=(i+1)*(v-1)+(M-1),w=(i+1)*v+(M-1),y=(i+1)*v+M,S=(i+1)*(v-1)+M;p.push(b,w,S),p.push(w,y,S)}}function _(){for(let v=0;v<=e;v++)for(let M=0;M<=i;M++)c.x=v/e,c.y=M/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new du[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},vl=class extends Zt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new P,r=new P;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let p=d,x=d+f;p<x;p+=3)for(let m=0;m<3;m++){let g=a.getX(p+m),_=a.getX(p+(m+1)%3);i.fromBufferAttribute(o,g),r.fromBufferAttribute(o,_),U0(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),U0(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new dt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};F0=Object.freeze({__proto__:null,BoxGeometry:ye,CapsuleGeometry:el,CircleGeometry:_r,ConeGeometry:di,CylinderGeometry:Re,DodecahedronGeometry:nl,EdgesGeometry:il,ExtrudeGeometry:dl,IcosahedronGeometry:fi,LatheGeometry:fl,OctahedronGeometry:Cs,PlaneGeometry:en,PolyhedronGeometry:ns,RingGeometry:pl,ShapeGeometry:ml,SphereGeometry:Ti,TetrahedronGeometry:gl,TorusGeometry:Mr,TorusKnotGeometry:xl,TubeGeometry:_l,WireframeGeometry:vl}),yl=class extends qe{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ot(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};Ni={clone:Lr,merge:mn},L1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends qe{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L1,this.fragmentShader=D1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lr(t.uniforms),this.uniformsGroups=I1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ot().setHex(i.value);break;case"v2":this.uniforms[n].value=new it().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new de().fromArray(i.value);break;case"m3":this.uniforms[n].value=new te().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ot().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Rs=class extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ie=class extends qe{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ml=class extends ie{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Si('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Si('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},Sl=class extends qe{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ot(16777215),this.specular=new ot(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=qo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},bl=class extends qe{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ot(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},wl=class extends qe{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},Tl=class extends qe{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=qo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Oo=class extends qe{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bo=class extends qe{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},El=class extends qe{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ot(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}},Al=class extends tn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};fu=class{static convertArray(t,e){return oi(t,e)}static isTypedArray(t){return Jg(t)}static hasTangents(t){return uo(t)}static getKeyframeOrder(t){return cx(t)}static sortedArray(t,e,n){return Vf(t,e,n)}static flattenJSON(t,e,n,i){hx(t,e,n,i)}static subclip(t,e,n,i,r=30){return N1(t,e,n,i,r)}static makeClipAdditive(t,e=0,n=t,i=30){return U1(t,e,n,i)}},is=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Cl=class extends is{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ys,endingEnd:ys}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ms:r=t,a=2*e-n;break;case xo:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ms:o=t,l=2*n-e;break;case xo:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,v=(-1-f)*m+(1.5+f)*x+.5*p,M=f*m-f*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+_*o[c+b]+v*o[l+b]+M*o[u+b];return r}},zo=class extends is{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Rl=class extends is{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Pl=class extends is{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(i-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*d+p*2,_=u[g],v=u[g+1],M=t*d+p*2,b=h[M],w=h[M+1],y=O1(n,e,_,b,i);r[p]=ux(y,x,v,w,m)}return r}};Tn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=oi(e,this.TimeBufferType),this.values=oi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:oi(t.times,Array),values:oi(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),uo(t.settings)&&(n.settings={inTangents:oi(t.settings.inTangents,Array),outTangents:oi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Pl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case go:e=this.InterpolantFactoryMethodDiscrete;break;case Xa:e=this.InterpolantFactoryMethodLinear;break;case Da:e=this.InterpolantFactoryMethodSmooth;break;case Yh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Tt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return go;case this.InterpolantFactoryMethodLinear:return Xa;case this.InterpolantFactoryMethodSmooth:return Da;case this.InterpolantFactoryMethodBezier:return Yh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;uo(this.settings)&&(B0(this.settings.inTangents,t),B0(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;uo(this.settings)&&(z0(this.settings.inTangents,t),z0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Wt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Jg(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Da,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,uo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Xa;Ei=class extends Tn{constructor(t,e,n){super(t,e,n)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=go;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;ko=class extends Tn{constructor(t,e,n,i){super(t,e,n,i)}};ko.prototype.ValueTypeName="color";Sr=class extends Tn{constructor(t,e,n,i){super(t,e,n,i)}};Sr.prototype.ValueTypeName="number";Il=class extends is{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)pe.slerpFlat(r,0,o,c-a,o,c,l);return r}},br=class extends Tn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Il(this.times,this.values,this.getValueSize(),t)}};br.prototype.ValueTypeName="quaternion";br.prototype.InterpolantFactoryMethodSmooth=void 0;Ai=class extends Tn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=go;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;Ho=class extends Tn{constructor(t,e,n,i){super(t,e,n,i)}};Ho.prototype.ValueTypeName="vector";Ps=class{constructor(t="",e=-1,n=[],i=Cc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=ei(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(z1(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(Tn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=cx(l);l=Vf(l,1,h),c=Vf(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Sr(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};ci={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(k0(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!k0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};Go=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hp=new Go,on=class{constructor(t){this.manager=t!==void 0?t:Hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};on.DEFAULT_MATERIAL_NAME="__DEFAULT";Ji={},Wf=class extends Error{constructor(t,e){super(t),this.response=e}},jn=class extends on{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=ci.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Ji[t]!==void 0){Ji[t].push({onLoad:e,onProgress:n,onError:i});return}Ji[t]=[],Ji[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Tt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ji[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,m=new ReadableStream({start(g){_();function _(){u.read().then(({done:v,value:M})=>{if(v)g.close();else{x+=M.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let w=0,y=h.length;w<y;w++){let S=h[w];S.onProgress&&S.onProgress(b)}g.enqueue(M),_()}},v=>{g.error(v)})}}});return new Response(m)}else throw new Wf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{ci.add(`file:${t}`,c);let h=Ji[t];delete Ji[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Ji[t];if(h===void 0)throw this.manager.itemError(t),c;delete Ji[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},pu=class extends on{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new jn(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Wt(l),r.manager.itemError(t)}},n,i)}parse(t){let e=[];for(let n=0;n<t.length;n++){let i=Ps.parse(t[n]);e.push(i)}return e}},mu=class extends on{constructor(t){super(t)}load(t,e,n,i){let r=this,o=[],a=new xr,l=new jn(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(t[u],function(d){let f=r.parse(d,!0);o[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=Ie),a.image=o,a.format=f.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let u=0,d=t.length;u<d;++u)h(u);else l.load(t,function(u){let d=r.parse(u,!0);if(d.isCubemap){let f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let x=0;x<d.mipmapCount;x++)o[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+x]),o[p].format=d.format,o[p].width=d.width,o[p].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=Ie),a.format=d.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}},ro=new WeakMap,Is=class extends on{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ci.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=ro.get(o);u===void 0&&(u=[],ro.set(o,u)),u.push({onLoad:e,onError:i})}return o}let a=yo("img");function l(){h(),e&&e(this);let u=ro.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ro.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),ci.remove(`image:${t}`);let d=ro.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}ro.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ci.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}},gu=class extends on{constructor(t){super(t)}load(t,e,n,i){let r=new Ts;r.colorSpace=rn;let o=new Is(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}},xu=class extends on{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new Mn,a=new jn(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):Wt(h);return}r._applyTexData(o,c),e&&e(o,c)},n,i),o}createDataTexture(t){let e=new Mn;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:yn,t.wrapT=e.wrapT!==void 0?e.wrapT:yn,t.magFilter=e.magFilter!==void 0?e.magFilter:Ie,t.minFilter=e.minFilter!==void 0?e.minFilter:Ie,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=ti),e.mipmapCount===1&&(t.minFilter=Ie),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}},_u=class extends on{constructor(t){super(t)}load(t,e,n,i){let r=new ke,o=new Is(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},pi=class extends ve{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},mi=class extends pi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},If=new Ot,H0=new P,G0=new P,wr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wi,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;H0.setFromMatrixPosition(t.matrixWorld),e.position.copy(H0),G0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(G0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){If.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(If,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Ss||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(If)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Oh=new P,Bh=new pe,Mi=new P,Tr=class extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oh,Bh,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oh,Bh,Mi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Oh,Bh,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oh,Bh,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_s=new P,V0=new it,W0=new it,Ue=class extends Tr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,e){return this.getViewBounds(t,V0,W0),e.subVectors(W0,V0)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Xf=class extends wr{constructor(){super(new Ue(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=ur*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Ll=class extends pi{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},qf=class extends wr{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0}},Dl=class extends pi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ss=class extends Tr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yf=class extends wr{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gi=class extends pi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Yf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Nl=class extends pi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},Ul=class extends pi{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}},Vo=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new P)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){let n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}},Fl=class extends pi{constructor(t=new Vo,e=1){super(void 0,e),this.isLightProbe=!0,this.type="LightProbe",this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}},X0={},Ol=class s extends on{constructor(t){super(t),this.textures={}}load(t,e,n,i){let r=this,o=new jn(r.manager);o.setPriority(r.priority),o.setCache(r.cache),o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Wt(l),r.manager.itemError(t)}},n,i)}parse(t){let e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return s.createMaterialFromType(t)}static createMaterialFromType(t){let n={ShadowMaterial:yl,SpriteMaterial:To,RawShaderMaterial:Rs,ShaderMaterial:He,PointsMaterial:Co,MeshPhysicalMaterial:Ml,MeshStandardMaterial:ie,MeshPhongMaterial:Sl,MeshToonMaterial:bl,MeshNormalMaterial:wl,MeshLambertMaterial:Tl,MeshDepthMaterial:Oo,MeshDistanceMaterial:Bo,MeshBasicMaterial:On,MeshMatcapMaterial:El,LineDashedMaterial:Al,LineBasicMaterial:tn,Material:qe,...X0}[t],i;return n===void 0?(Si(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),i=new qe):i=new n,i}static registerMaterial(t,e){X0[t]=e}},Wo=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Bl=class extends Zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}},zl=class extends on{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new jn(r.manager);o.setPriority(r.priority),o.setCache(r.cache),o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Wt(l),r.manager.itemError(t)}},n,i)}parse(t){let e={},n={};function i(f,p){if(e[p]!==void 0)return e[p];let m=f.interleavedBuffers[p],g=r(f,m.buffer),_=ho(m.type,g),v=new ws(_,m.stride);return v.uuid=m.uuid,m.usage!==void 0&&v.setUsage(m.usage),e[p]=v,v}function r(f,p){if(n[p]!==void 0)return n[p];let m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}let o=t.isInstancedBufferGeometry?new Bl:new Zt,a=t.data.index;if(a!==void 0){let f=ho(a.type,a.array);o.setIndex(new Vt(f,1))}let l=t.data.attributes;for(let f in l){let p=l[f],x;if(p.isInterleavedBufferAttribute){let m=i(t.data,p.data);x=new ts(m,p.itemSize,p.offset,p.normalized)}else{let m=ho(p.type,p.array),g=p.isInstancedBufferAttribute?wn:Vt;x=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),p.gpuType!==void 0&&(x.gpuType=p.gpuType),o.setAttribute(f,x)}let c=t.data.morphAttributes;if(c)for(let f in c){let p=c[f],x=[];for(let m=0,g=p.length;m<g;m++){let _=p[m],v;if(_.isInterleavedBufferAttribute){let M=i(t.data,_.data);v=new ts(M,_.itemSize,_.offset,_.normalized)}else{let M=ho(_.type,_.array);v=new Vt(M,_.itemSize,_.normalized)}_.name!==void 0&&(v.name=_.name),_.usage!==void 0&&v.setUsage(_.usage),_.gpuType!==void 0&&(v.gpuType=_.gpuType),x.push(v)}o.morphAttributes[f]=x}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){let x=u[f];o.addGroup(x.start,x.count,x.materialIndex)}let d=t.data.boundingSphere;return d!==void 0&&(o.boundingSphere=new Be().fromJSON(d)),t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}},Lf={},vu=class extends on{constructor(t){super(t)}load(t,e,n,i){let r=this,o=this.path===""?Wo.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;let a=new jn(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),Wt("ObjectLoader: Can't parse "+t+".",u.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),Wt("ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){let n=this,i=this.path===""?Wo.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;let r=new jn(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let o=await r.loadAsync(t,e),a;try{a=JSON.parse(o)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}let l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){let n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(c)}),a=this.parseTextures(t.textures,o),l=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,r,l,a,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let u=!1;for(let d in o)if(o[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&e(c)}return c}async parseAsync(t){let e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,i,a,o,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){Lf[t]=e}parseShapes(t){let e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){let r=new As().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){let n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=new Ja().fromJSON(t[r],i);n[a.uuid]=a}return n}parseGeometries(t,e){let n={};if(t!==void 0){let i=new zl;for(let r=0,o=t.length;r<o;r++){let a,l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in F0?a=F0[l.type].fromJSON(l,e):l.type in Lf?a=Lf[l.type].fromJSON(l,e):Tt(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(t,e){let n={},i={};if(t!==void 0){let r=new Ol;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){let l=t[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){let e={};if(t!==void 0)for(let n=0;n<t.length;n++){let i=t[n],r=Ps.parse(i);e[r.uuid]=r}return e}parseImages(t,e){let n=this,i={},r;function o(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:ho(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){let l=new Go(e);r=new Is(l),r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){let u=t[c],d=u.url;if(Array.isArray(d)){let f=[];for(let p=0,x=d.length;p<x;p++){let m=d[p],g=a(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new Mn(g.data,g.width,g.height)))}i[u.uuid]=new Vn(f)}else{let f=a(u.url);i[u.uuid]=new Vn(f)}}}return i}async parseImagesAsync(t){let e=this,n={},i;async function r(o){if(typeof o=="string"){let a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:ho(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){i=new Is(this.manager),i.setPriority(this.priority),i.setCache(this.cache),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){let l=t[o],c=l.url;if(Array.isArray(c)){let h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new Mn(p.data,p.width,p.height)))}n[l.uuid]=new Vn(h)}else{let h=await r(l.url);n[l.uuid]=new Vn(h)}}}return n}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(Tt("ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}let i={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=t[r];a.image===void 0&&Tt('ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&Tt("ObjectLoader: Undefined image",a.image);let l=e[a.image],c=l.data,h;Array.isArray(c)?(h=new Ts,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Mn:h=new ke,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,k1)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],q0),h.wrapT=n(a.wrap[1],q0)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,Y0)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,Y0)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.mipmapsAutoUpdate!==void 0&&(h.mipmapsAutoUpdate=a.mipmapsAutoUpdate),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.normalized!==void 0&&(h.normalized=a.normalized),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(t,e,n,i,r){let o;function a(d){return e[d]===void 0&&Tt("ObjectLoader: Undefined geometry",d),e[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){let f=[];for(let p=0,x=d.length;p<x;p++){let m=d[p];n[m]===void 0&&Tt("ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[d]===void 0&&Tt("ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&Tt("ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(t.type){case"Scene":o=new bn,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new ot(t.background):o.background=c(t.background)),t.environment!==void 0&&(o.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new Ya(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new hi(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new Ue(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new ss(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new Nl(t.color,t.intensity);break;case"DirectionalLight":o=new gi(t.color,t.intensity),o.target=t.target||"";break;case"PointLight":o=new Dl(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new Ul(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new Ll(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),o.target=t.target||"",t.map!==void 0&&(o.map=c(t.map));break;case"HemisphereLight":o=new mi(t.color,t.groundColor,t.intensity);break;case"LightProbe":let d=new Vo().fromArray(t.sh);o=new Fl(d,t.intensity);break;case"SkinnedMesh":h=a(t.geometry),u=l(t.material),o=new Ka(h,u),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":h=a(t.geometry),u=l(t.material),o=new Jt(h,u);break;case"InstancedMesh":h=a(t.geometry),u=l(t.material);let f=t.count,p=t.instanceMatrix,x=t.instanceColor;o=new De(h,u,f),o.instanceMatrix=new wn(new Float32Array(p.array),16),x!==void 0&&(o.instanceColor=new wn(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":h=a(t.geometry),u=l(t.material),o=new Qa(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,u),o.geometry=h,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._geometryInfo=t.geometryInfo.map(m=>{let g=null,_=null;return m.boundingBox!==void 0&&(g=new Ve().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(_=new Be().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:_}}),o._instanceInfo=t.instanceInfo,o._availableInstanceIds=t.availableInstanceIds,o._availableGeometryIds=t.availableGeometryIds,o._nextIndexStart=t.nextIndexStart,o._nextVertexStart=t.nextVertexStart,o._geometryCount=t.geometryCount,o._maxInstanceCount=t.maxInstanceCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._matricesTexture=c(t.matricesTexture.uuid),o._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(o._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(o.boundingSphere=new Be().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(o.boundingBox=new Ve().fromJSON(t.boundingBox));break;case"LOD":o=new $a;break;case"Line":o=new ui(a(t.geometry),l(t.material));break;case"LineLoop":o=new ja(a(t.geometry),l(t.material));break;case"LineSegments":o=new Wn(a(t.geometry),l(t.material));break;case"PointCloud":case"Points":o=new gr(a(t.geometry),l(t.material));break;case"Sprite":o=new Za(l(t.material)),t.center!==void 0&&o.center.fromArray(t.center);break;case"Group":o=new li;break;case"Bone":o=new Eo;break;default:o=new ve}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.pivot!==void 0&&(o.pivot=new P().fromArray(t.pivot)),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&(o.matrix.decompose(o.position,o.quaternion,o.scale),o.pivot!==null&&o.position.copy(o.pivot).applyMatrix4(o.matrix).sub(o.pivot))):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(o.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.blurSamples!==void 0&&(o.shadow.blurSamples=t.shadow.blurSamples),t.shadow.focus!==void 0&&(o.shadow.focus=t.shadow.focus),t.shadow.aspect!==void 0&&(o.shadow.aspect=t.shadow.aspect),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.mapType!==void 0&&(o.shadow.mapType=t.shadow.mapType),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.static!==void 0&&(o.static=t.static),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){let d=t.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],e,n,i,r))}if(t.animations!==void 0){let d=t.animations;for(let f=0;f<d.length;f++){let p=d[f];o.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);let d=t.levels;for(let f=0;f<d.length;f++){let p=d[f],x=o.getObjectByProperty("uuid",p.object);x!==void 0&&o.addLevel(x,p.distance,p.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=e[n.skeleton];i===void 0?Tt("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){let n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new ve}})}},k1={UVMapping:Xl,CubeReflectionMapping:Pi,CubeRefractionMapping:ks,EquirectangularReflectionMapping:Zo,EquirectangularRefractionMapping:$o},q0={RepeatWrapping:po,ClampToEdgeWrapping:yn,MirroredRepeatWrapping:mo},Y0={NearestFilter:ze,NearestMipmapNearestFilter:ad,NearestMipmapLinearFilter:Pr,LinearFilter:Ie,LinearMipmapNearestFilter:Ko,LinearMipmapLinearFilter:ti},Df=new WeakMap,yu=class extends on{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Tt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Tt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ci.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{Df.has(o)===!0?(i&&i(Df.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ci.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Df.set(l,c),ci.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});ci.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Xo=class{static getContext(){return zh===void 0&&(zh=new(window.AudioContext||window.webkitAudioContext)),zh}static setContext(t){zh=t}},Mu=class extends on{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new jn(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{let c=l.slice(0),h=Xo.getContext(),u=t+"#decode";r.manager.itemStart(u),h.decodeAudioData(c,function(d){e(d),r.manager.itemEnd(u)}).catch(function(d){a(d),r.manager.itemEnd(u)})}catch(c){a(c)}},n,i);function a(l){i?i(l):Wt(l),r.manager.itemError(t)}}},Z0=new Ot,$0=new Ot,nr=new Ot,Su=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ue,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ue,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,nr.copy(t.projectionMatrix);let i=e.eyeSep/2,r=i*e.near/e.focus,o=e.near*Math.tan(cr*e.fov*.5)/e.zoom,a,l;$0.elements[12]=-i,Z0.elements[12]=i,a=-o*e.aspect+r,l=o*e.aspect+r,nr.elements[0]=2*e.near/(l-a),nr.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(nr),a=-o*e.aspect-r,l=o*e.aspect-r,nr.elements[0]=2*e.near/(l-a),nr.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(nr)}this.cameraL.matrix.copy(t.matrixWorld).multiply($0),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(Z0),this.cameraR.matrixWorldNeedsUpdate=!0}},oo=-90,ao=1,Er=class extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ue(oo,ao,t,e);i.layers=this.layers,this.add(i);let r=new Ue(oo,ao,t,e);r.layers=this.layers,this.add(r);let o=new Ue(oo,ao,t,e);o.layers=this.layers,this.add(o);let a=new Ue(oo,ao,t,e);a.layers=this.layers,this.add(a);let l=new Ue(oo,ao,t,e);l.layers=this.layers,this.add(l);let c=new Ue(oo,ao,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},kl=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Ar=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=H1.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};ir=new P,Nf=new pe,G1=new P,sr=new P,rr=new P,bu=class extends ve{constructor(){super(),this.type="AudioListener",this.context=Xo.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Ar}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(ir,Nf,G1),sr.set(0,0,-1).applyQuaternion(Nf),rr.set(0,1,0).applyQuaternion(Nf),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(ir.x,n),e.positionY.linearRampToValueAtTime(ir.y,n),e.positionZ.linearRampToValueAtTime(ir.z,n),e.forwardX.linearRampToValueAtTime(sr.x,n),e.forwardY.linearRampToValueAtTime(sr.y,n),e.forwardZ.linearRampToValueAtTime(sr.z,n),e.upX.linearRampToValueAtTime(rr.x,n),e.upY.linearRampToValueAtTime(rr.y,n),e.upZ.linearRampToValueAtTime(rr.z,n)}else e.setPosition(ir.x,ir.y,ir.z),e.setOrientation(sr.x,sr.y,sr.z,rr.x,rr.y,rr.z)}},Hl=class extends ve{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Tt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Tt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Tt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}},or=new P,K0=new pe,V1=new P,ar=new P,wu=class extends Hl{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(or,K0,V1),ar.set(0,0,1).applyQuaternion(K0);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(or.x,n),e.positionY.linearRampToValueAtTime(or.y,n),e.positionZ.linearRampToValueAtTime(or.z,n),e.orientationX.linearRampToValueAtTime(ar.x,n),e.orientationY.linearRampToValueAtTime(ar.y,n),e.orientationZ.linearRampToValueAtTime(ar.z,n)}else e.setPosition(or.x,or.y,or.z),e.setOrientation(ar.x,ar.y,ar.z)}},Tu=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},Gl=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){pe.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let o=this._workIndex*r;pe.multiplyQuaternionsFlat(t,o,t,e,t,n),pe.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},Gp="\\[\\]\\.:\\/",W1=new RegExp("["+Gp+"]","g"),Vp="[^"+Gp+"]",X1="[^"+Gp.replace("\\.","")+"]",q1=/((?:WC+[\/:])*)/.source.replace("WC",Vp),Y1=/(WCOD+)?/.source.replace("WCOD",X1),Z1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vp),$1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vp),K1=new RegExp("^"+q1+Y1+Z1+$1+"$"),J1=["material","materials","bones","map"],Zf=class{constructor(t,e,n){let i=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(W1,"")}static parseTrackName(t){let e=K1.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);J1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Zf;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Eu=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ei(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length,a,l=t.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],f=d.uuid,p=e[f];if(p===void 0){p=l++,e[f]=p,t.push(d);for(let x=0,m=o;x!==m;++x)r[x].push(new be(d,n[x],i[x]))}else if(p<c){a=t[p];let x=--c,m=t[x];e[m.uuid]=p,t[p]=m,e[f]=x,t[x]=d;for(let g=0,_=o;g!==_;++g){let v=r[g],M=v[x],b=v[p];v[p]=M,b===void 0&&(b=new be(d,n[g],i[g])),v[x]=b}}else t[p]!==a&&Wt("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){let u=r++,d=t[u];e[d.uuid]=h,t[h]=d,e[c]=u,t[u]=l;for(let f=0,p=i;f!==p;++f){let x=n[f],m=x[u],g=x[h];x[h]=m,x[u]=g}}}this.nCachedObjects_=r}uncache(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,o=t.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],h=c.uuid,u=e[h];if(u!==void 0)if(delete e[h],u<r){let d=--r,f=t[d],p=--o,x=t[p];u!==d&&(e[f.uuid]=u),t[u]=f,d!==p&&(e[x.uuid]=d),t[d]=x,t.pop();for(let m=0,g=i;m!==g;++m){let _=n[m],v=_[d],M=_[p];_[u]=v,_[d]=M,_.pop()}}else{let d=--o,f=t[d];u!==d&&(e[f.uuid]=u),t[u]=f,t.pop();for(let p=0,x=i;p!==x;++p){let m=n[p];m[u]=m[d],m.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[t]=i,o.push(t),a.push(e),r.push(u);for(let d=h,f=l.length;d!==f;++d){let p=l[d];u[d]=new be(p,t,e)}return u}unsubscribe_(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=i[a];e[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}},Vl=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,o=r.length,a=new Array(o),l={endingStart:ys,endingEnd:ys};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Sp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case pd:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Cc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,o=n===bp;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Mp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=Ms,i.endingEnd=Ms):(t?i.endingStart=this.zeroSlopeAtStart?Ms:ys:i.endingStart=xo,e?i.endingEnd=this.zeroSlopeAtEnd?Ms:ys:i.endingEnd=xo)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}},Q1=new Float32Array(1),Au=class extends Fn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,p=h[f];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let x=e&&e._propertyBindings[u].binding.parsedPath;p=new Gl(be.create(n,f,x),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;let u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new zo(new Float32Array(2),new Float32Array(2),1,Q1),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,o=typeof t=="string"?Ps.findByName(i,t):t,a=o!==null?o.uuid:t,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Cc),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new Vl(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?Ps.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Cu=class extends So{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n;for(let r=0;r<this.textures.length;r++){let o=new fr(null,t,e,n);o.isRenderTargetTexture=!0,o.renderTarget=this,this.textures[r]=o}this._setTextureOptions(i)}},Ru=class s{constructor(t){this.value=t}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},j1=0,Pu=class extends Fn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:j1++}),this.name="",this.usage=Rc,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){let r=e[n];Array.isArray(r)?this.uniforms.push(r.map(o=>o.clone())):this.uniforms.push(r.clone())}return this}clone(){return new this.constructor().copy(this)}},Iu=class extends ws{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},Lu=class{constructor(t,e,n,i,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=o,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},J0=new Ot,Du=class{constructor(t,e,n=0,i=1/0){this.ray=new es(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return J0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(J0),this}intersectObject(t,e=!0,n=[]){return $f(t,this,n,e),n.sort(Q0),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)$f(t[i],this,n,e);return n.sort(Q0),n}};Nu=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Tt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},Uu=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Fu=class{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}},Zp=class Zp{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Zp.prototype.isMatrix2=!0;Ou=Zp,j0=new it,Wl=class{constructor(t=new it(1/0,1/0),e=new it(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=j0.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,j0).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},tg=new P,kh=new P,lo=new P,co=new P,Uf=new P,tM=new P,eM=new P,Bu=class{constructor(t=new P,e=new P){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){tg.subVectors(t,this.start),kh.subVectors(this.end,this.start);let n=kh.dot(kh);if(n===0)return 0;let r=kh.dot(tg)/n;return e&&(r=Qt(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=tM,n=eM){let i=10000000000000001e-32,r,o,a=this.start,l=t.start,c=this.end,h=t.end;lo.subVectors(c,a),co.subVectors(h,l),Uf.subVectors(a,l);let u=lo.dot(lo),d=co.dot(co),f=co.dot(Uf);if(u<=i&&d<=i)return e.copy(a),n.copy(l),e.distanceToSquared(n);if(u<=i)r=0,o=f/d,o=Qt(o,0,1);else{let p=lo.dot(Uf);if(d<=i)o=0,r=Qt(-p/u,0,1);else{let x=lo.dot(co),m=u*d-x*x;m!==0?r=Qt((x*f-p*d)/m,0,1):r=0,o=(x*r+f)/d,o<0?(o=0,r=Qt(-p/u,0,1)):o>1&&(o=1,r=Qt((x-p)/u,0,1))}}return e.copy(a).addScaledVector(lo,r),n.copy(l).addScaledVector(co,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},eg=new P,zu=class extends ve{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let n=new Zt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){let c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new dt(i,3));let r=new tn({fog:!1,toneMapped:!1});this.cone=new Wn(n,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),eg.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(eg),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},vs=new P,Hh=new Ot,Ff=new Ot,ku=class extends Wn{constructor(t){let e=dx(t),n=new Zt,i=[],r=[];for(let c=0;c<e.length;c++){let h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new dt(i,3)),n.setAttribute("color",new dt(r,3));let o=new tn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;let a=new ot(255),l=new ot(65280);this.setColors(a,l)}updateMatrixWorld(t){let e=this.bones,n=this.geometry,i=n.getAttribute("position");Ff.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){let a=e[r];a.parent&&a.parent.isBone&&(Hh.multiplyMatrices(Ff,a.matrixWorld),vs.setFromMatrixPosition(Hh),i.setXYZ(o,vs.x,vs.y,vs.z),Hh.multiplyMatrices(Ff,a.parent.matrixWorld),vs.setFromMatrixPosition(Hh),i.setXYZ(o+1,vs.x,vs.y,vs.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){let i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};Hu=class extends Jt{constructor(t,e,n){let i=new Ti(e,4,2),r=new On({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},nM=new P,ng=new ot,ig=new ot,Gu=class extends ve{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new Cs(e);i.rotateY(Math.PI*.5),this.material=new On({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new Vt(o,3)),this.add(new Jt(i,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");ng.copy(this.light.color),ig.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){let r=n<i/2?ng:ig;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(nM.setFromMatrixPosition(this.light.matrixWorld).negate())}},Vu=class extends Wn{constructor(t=10,e=10,n=4473924,i=8947848){n=new ot(n),i=new ot(i);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=e;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let x=d===r?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new Zt;h.setAttribute("position",new dt(l,3)),h.setAttribute("color",new dt(c,3));let u=new tn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Wu=class extends Wn{constructor(t=10,e=16,n=8,i=64,r=4473924,o=8947848){r=new ot(r),o=new ot(o);let a=[],l=[];if(e>1)for(let u=0;u<e;u++){let d=u/e*(Math.PI*2),f=Math.sin(d)*t,p=Math.cos(d)*t;a.push(0,0,0),a.push(f,0,p);let x=u&1?r:o;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let u=0;u<n;u++){let d=u&1?r:o,f=t-t/n*u;for(let p=0;p<i;p++){let x=p/i*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f;a.push(m,0,g),l.push(d.r,d.g,d.b),x=(p+1)/i*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f,a.push(m,0,g),l.push(d.r,d.g,d.b)}}let c=new Zt;c.setAttribute("position",new dt(a,3)),c.setAttribute("color",new dt(l,3));let h=new tn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},sg=new P,Gh=new P,rg=new P,Xu=class extends ve{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Zt;i.setAttribute("position",new dt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let r=new tn({fog:!1,toneMapped:!1});this.lightPlane=new ui(i,r),this.add(this.lightPlane),i=new Zt,i.setAttribute("position",new dt([0,0,0,0,0,1],3)),this.targetLine=new ui(i,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),sg.setFromMatrixPosition(this.light.matrixWorld),Gh.setFromMatrixPosition(this.light.target.matrixWorld),rg.subVectors(Gh,sg),this.lightPlane.lookAt(Gh),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Gh),this.targetLine.scale.z=rg.length()}},Vh=new P,Oe=new Tr,qu=class extends Wn{constructor(t){let e=new Zt,n=new tn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,x){l(p),l(x)}function l(p){i.push(0,0,0),r.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}e.setAttribute("position",new dt(i,3)),e.setAttribute("color",new dt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let c=new ot(16755200),h=new ot(16711680),u=new ot(43775),d=new ot(16777215),f=new ot(3355443);this.setColors(c,h,u,d,f)}setColors(t,e,n,i,r){let a=this.geometry.getAttribute("color");return a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0,this}update(){let t=this.geometry,e=this.pointMap,n=1,i=1,r,o;if(Oe.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,o=0;else if(this.camera.coordinateSystem===Un)r=-1,o=1;else if(this.camera.coordinateSystem===Ss)r=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Ge("c",e,t,Oe,0,0,r),Ge("t",e,t,Oe,0,0,o),Ge("n1",e,t,Oe,-n,-i,r),Ge("n2",e,t,Oe,n,-i,r),Ge("n3",e,t,Oe,-n,i,r),Ge("n4",e,t,Oe,n,i,r),Ge("f1",e,t,Oe,-n,-i,o),Ge("f2",e,t,Oe,n,-i,o),Ge("f3",e,t,Oe,-n,i,o),Ge("f4",e,t,Oe,n,i,o),Ge("u1",e,t,Oe,n*.7,i*1.1,r),Ge("u2",e,t,Oe,-n*.7,i*1.1,r),Ge("u3",e,t,Oe,0,i*2,r),Ge("cf1",e,t,Oe,-n,0,o),Ge("cf2",e,t,Oe,n,0,o),Ge("cf3",e,t,Oe,0,-i,o),Ge("cf4",e,t,Oe,0,i,o),Ge("cn1",e,t,Oe,-n,0,r),Ge("cn2",e,t,Oe,n,0,r),Ge("cn3",e,t,Oe,0,-i,r),Ge("cn4",e,t,Oe,0,i,r),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};Wh=new Ve,Yu=class extends Wn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Zt;r.setIndex(new Vt(n,1)),r.setAttribute("position",new Vt(i,3)),super(r,new tn({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Wh.setFromObject(this.object),Wh.isEmpty())return;let t=Wh.min,e=Wh.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Zu=class extends Wn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Zt;r.setIndex(new Vt(n,1)),r.setAttribute("position",new dt(i,3)),super(r,new tn({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},$u=class extends ui{constructor(t,e=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Zt;o.setAttribute("position",new dt(r,3)),o.computeBoundingSphere(),super(o,new tn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Zt;l.setAttribute("position",new dt(a,3)),l.computeBoundingSphere(),this.add(new Jt(l,new On({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},og=new P,Ku=class extends ve{constructor(t=new P(0,0,1),e=new P(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Xh===void 0&&(Xh=new Zt,Xh.setAttribute("position",new dt([0,0,0,0,1,0],3)),Of=new di(.5,1,5,1),Of.translate(0,-.5,0)),this.position.copy(e),this.line=new ui(Xh,new tn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Jt(Of,new On({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{og.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(og,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Ju=class extends Wn{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Zt;i.setAttribute("position",new dt(e,3)),i.setAttribute("color",new dt(n,3));let r=new tn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){let i=new ot,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Qu=class{constructor(){this.type="ShapePath",this.color=new ot,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Es,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1,u=c.length;for(let d=0,f=u-1;d<u;f=d++){let p=c[d],x=c[f];p.y>l.y!=x.y>l.y&&l.x<(x.x-p.x)*(l.y-p.y)/(x.y-p.y)+p.x&&(h=!h)}return h}function e(l,c){let h=c.getCenter(new it);if(t(h,l))return h;let u=h.y,d=[],f=l.length;for(let p=0;p<f;p++){let x=l[p],m=l[(p+1)%f];if(x.y>u!=m.y>u){let g=x.x+(u-x.y)*(m.x-x.x)/(m.y-x.y);d.push(g)}}return d.length>1&&(d.sort((p,x)=>p-x),h.x=(d[0]+d[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Tt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=Kn.area(c);if(h===0)continue;let u=new Wl;for(let d=0;d<c.length;d++)u.expandByPoint(c[d]);r.push({subPath:l,points:c,boundingBox:u,interiorPoint:e(c,u),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let u=l-1;u>=0;u--){let d=r[u];if(d.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,d.points)){c.container=d.exclude?d.container:d,h=d.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let o=[],a=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new As;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=a.get(l.container);if(!c)continue;let h=new Es;h.curves=l.subPath.curves,c.holes.push(h)}return o}},ju=class extends Fn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};td=class{static contain(t,e){return iM(t,e)}static cover(t,e){return sM(t,e)}static fill(t){return rM(t)}static getByteLength(t,e,n,i){return yd(t,e,n,i)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});var Ht={};nh(Ht,{ACESFilmicToneMapping:()=>Ri,AddEquation:()=>Ns,AddOperation:()=>vp,AdditiveAnimationBlendMode:()=>pd,AdditiveBlending:()=>Ds,AgXToneMapping:()=>Bs,AlphaFormat:()=>dd,AlwaysCompare:()=>xd,AlwaysDepth:()=>za,AlwaysStencilFunc:()=>Rp,AmbientLight:()=>Nl,AnimationAction:()=>Vl,AnimationClip:()=>Ps,AnimationLoader:()=>pu,AnimationMixer:()=>Au,AnimationObjectGroup:()=>Eu,AnimationUtils:()=>fu,ArcCurve:()=>sl,ArrayCamera:()=>kl,ArrowHelper:()=>Ku,AttachedBindMode:()=>qh,Audio:()=>Hl,AudioAnalyser:()=>Tu,AudioContext:()=>Xo,AudioListener:()=>bu,AudioLoader:()=>Mu,AxesHelper:()=>Ju,BackSide:()=>pn,BasicDepthPacking:()=>Ap,BasicShadowMap:()=>hg,BatchedMesh:()=>Qa,BezierInterpolant:()=>Pl,Bone:()=>Eo,BooleanKeyframeTrack:()=>Ei,Box2:()=>Wl,Box3:()=>Ve,Box3Helper:()=>Zu,BoxGeometry:()=>ye,BoxHelper:()=>Yu,BufferAttribute:()=>Vt,BufferGeometry:()=>Zt,BufferGeometryLoader:()=>zl,ByteType:()=>ld,Cache:()=>ci,Camera:()=>Tr,CameraHelper:()=>qu,CanvasTexture:()=>hu,CapsuleGeometry:()=>el,CatmullRomCurve3:()=>rl,CineonToneMapping:()=>Os,CircleGeometry:()=>_r,ClampToEdgeWrapping:()=>yn,Clock:()=>Nu,Color:()=>ot,ColorKeyframeTrack:()=>ko,ColorManagement:()=>ue,Compatibility:()=>$g,CompressedArrayTexture:()=>lu,CompressedCubeTexture:()=>cu,CompressedTexture:()=>xr,CompressedTextureLoader:()=>mu,ConeGeometry:()=>di,ConstantAlphaFactor:()=>gp,ConstantColorFactor:()=>pp,Controls:()=>ju,CubeCamera:()=>Er,CubeDepthTexture:()=>Ro,CubeReflectionMapping:()=>Pi,CubeRefractionMapping:()=>ks,CubeTexture:()=>Ts,CubeTextureLoader:()=>gu,CubicBezierCurve:()=>Io,CubicBezierCurve3:()=>ol,CubicInterpolant:()=>Cl,CullFaceBack:()=>nd,CullFaceFront:()=>Qf,CullFaceFrontBack:()=>cg,CullFaceNone:()=>Jf,Curve:()=>Bn,CurvePath:()=>ll,CustomBlending:()=>tp,CustomToneMapping:()=>Yo,CylinderGeometry:()=>Re,Cylindrical:()=>Fu,Data3DTexture:()=>fr,DataArrayTexture:()=>dr,DataTexture:()=>Mn,DataTextureLoader:()=>xu,DataUtils:()=>Jh,DecrementStencilOp:()=>Eg,DecrementWrapStencilOp:()=>Cg,DefaultLoadingManager:()=>Hp,DepthFormat:()=>bi,DepthStencilFormat:()=>Ii,DepthTexture:()=>Qn,DetachedBindMode:()=>yp,DirectionalLight:()=>gi,DirectionalLightHelper:()=>Xu,DiscreteInterpolant:()=>Rl,DodecahedronGeometry:()=>nl,DoubleSide:()=>nn,DstAlphaFactor:()=>cp,DstColorFactor:()=>up,DynamicCopyUsage:()=>Vg,DynamicDrawUsage:()=>Og,DynamicReadUsage:()=>kg,EdgesGeometry:()=>il,EllipseCurve:()=>vr,EqualCompare:()=>Lp,EqualDepth:()=>Ha,EqualStencilFunc:()=>Lg,EquirectangularReflectionMapping:()=>Zo,EquirectangularRefractionMapping:()=>$o,Euler:()=>Jn,EventDispatcher:()=>Fn,ExternalTexture:()=>Po,ExtrudeGeometry:()=>dl,FileLoader:()=>jn,Float16BufferAttribute:()=>iu,Float32BufferAttribute:()=>dt,FloatType:()=>fn,Fog:()=>Ya,FogExp2:()=>hi,FramebufferTexture:()=>au,FrontSide:()=>rs,Frustum:()=>wi,FrustumArray:()=>Ao,GLBufferAttribute:()=>Lu,GLSL1:()=>Xg,GLSL3:()=>_d,GreaterCompare:()=>Dp,GreaterDepth:()=>Va,GreaterEqualCompare:()=>gd,GreaterEqualDepth:()=>Ga,GreaterEqualStencilFunc:()=>Fg,GreaterStencilFunc:()=>Ng,GridHelper:()=>Vu,Group:()=>li,HTMLTexture:()=>uu,HalfFloatType:()=>Ye,HemisphereLight:()=>mi,HemisphereLightHelper:()=>Gu,IcosahedronGeometry:()=>fi,ImageBitmapLoader:()=>yu,ImageLoader:()=>Is,ImageUtils:()=>qa,IncrementStencilOp:()=>Tg,IncrementWrapStencilOp:()=>Ag,InstancedBufferAttribute:()=>wn,InstancedBufferGeometry:()=>Bl,InstancedInterleavedBuffer:()=>Iu,InstancedMesh:()=>De,Int16BufferAttribute:()=>eu,Int32BufferAttribute:()=>nu,Int8BufferAttribute:()=>Qh,IntType:()=>ql,InterleavedBuffer:()=>ws,InterleavedBufferAttribute:()=>ts,Interpolant:()=>is,InterpolateBezier:()=>Yh,InterpolateDiscrete:()=>go,InterpolateLinear:()=>Xa,InterpolateSmooth:()=>Da,InterpolationSamplingMode:()=>Zg,InterpolationSamplingType:()=>Yg,InvertStencilOp:()=>Rg,KeepStencilOp:()=>Na,KeyframeTrack:()=>Tn,LOD:()=>$a,LatheGeometry:()=>fl,Layers:()=>pr,LessCompare:()=>Ip,LessDepth:()=>ka,LessEqualCompare:()=>md,LessEqualDepth:()=>hr,LessEqualStencilFunc:()=>Dg,LessStencilFunc:()=>Ig,Light:()=>pi,LightProbe:()=>Fl,LightShadow:()=>wr,Line:()=>ui,Line3:()=>Bu,LineBasicMaterial:()=>tn,LineCurve:()=>Lo,LineCurve3:()=>al,LineDashedMaterial:()=>Al,LineLoop:()=>ja,LineSegments:()=>Wn,LinearFilter:()=>Ie,LinearInterpolant:()=>zo,LinearMipMapLinearFilter:()=>mg,LinearMipMapNearestFilter:()=>pg,LinearMipmapLinearFilter:()=>ti,LinearMipmapNearestFilter:()=>Ko,LinearSRGBColorSpace:()=>_o,LinearToneMapping:()=>Us,LinearTransfer:()=>vo,Loader:()=>on,LoaderUtils:()=>Wo,LoadingManager:()=>Go,LoopOnce:()=>Mp,LoopPingPong:()=>bp,LoopRepeat:()=>Sp,MOUSE:()=>ag,Material:()=>qe,MaterialBlending:()=>ug,MaterialLoader:()=>Ol,MathUtils:()=>Bp,Matrix2:()=>Ou,Matrix3:()=>te,Matrix4:()=>Ot,MaxEquation:()=>sp,Mesh:()=>Jt,MeshBasicMaterial:()=>On,MeshDepthMaterial:()=>Oo,MeshDistanceMaterial:()=>Bo,MeshLambertMaterial:()=>Tl,MeshMatcapMaterial:()=>El,MeshNormalMaterial:()=>wl,MeshPhongMaterial:()=>Sl,MeshPhysicalMaterial:()=>Ml,MeshStandardMaterial:()=>ie,MeshToonMaterial:()=>bl,MinEquation:()=>ip,MirroredRepeatWrapping:()=>mo,MixOperation:()=>_p,MultiplyBlending:()=>sd,MultiplyOperation:()=>qo,NearestFilter:()=>ze,NearestMipMapLinearFilter:()=>fg,NearestMipMapNearestFilter:()=>dg,NearestMipmapLinearFilter:()=>Pr,NearestMipmapNearestFilter:()=>ad,NeutralToneMapping:()=>zs,NeverCompare:()=>Pp,NeverDepth:()=>Ba,NeverStencilFunc:()=>Pg,NoBlending:()=>Ci,NoColorSpace:()=>Di,NoNormalPacking:()=>yg,NoToneMapping:()=>Xn,NormalAnimationBlendMode:()=>Cc,NormalBlending:()=>Rr,NormalGAPacking:()=>Sg,NormalRGPacking:()=>Mg,NotEqualCompare:()=>Np,NotEqualDepth:()=>Wa,NotEqualStencilFunc:()=>Ug,NumberKeyframeTrack:()=>Sr,Object3D:()=>ve,ObjectLoader:()=>vu,ObjectSpaceNormalMap:()=>Cp,OctahedronGeometry:()=>Cs,OneFactor:()=>op,OneMinusConstantAlphaFactor:()=>xp,OneMinusConstantColorFactor:()=>mp,OneMinusDstAlphaFactor:()=>hp,OneMinusDstColorFactor:()=>dp,OneMinusSrcAlphaFactor:()=>od,OneMinusSrcColorFactor:()=>lp,OrthographicCamera:()=>ss,PCFShadowMap:()=>Ls,PCFSoftShadowMap:()=>jf,PMREMGenerator:()=>_i,Path:()=>Es,PerspectiveCamera:()=>Ue,Plane:()=>$n,PlaneGeometry:()=>en,PlaneHelper:()=>$u,PointLight:()=>Dl,PointLightHelper:()=>Hu,Points:()=>gr,PointsMaterial:()=>Co,PolarGridHelper:()=>Wu,PolyhedronGeometry:()=>ns,PositionalAudio:()=>wu,PropertyBinding:()=>be,PropertyMixer:()=>Gl,QuadraticBezierCurve:()=>Do,QuadraticBezierCurve3:()=>No,Quaternion:()=>pe,QuaternionKeyframeTrack:()=>br,QuaternionLinearInterpolant:()=>Il,R11_EAC_Format:()=>rc,RED_GREEN_RGTC2_Format:()=>ia,RED_RGTC1_Format:()=>Tc,REVISION:()=>Kf,RG11_EAC_Format:()=>na,RGBADepthPacking:()=>xg,RGBAFormat:()=>Sn,RGBAIntegerFormat:()=>Jl,RGBA_ASTC_10x10_Format:()=>vc,RGBA_ASTC_10x5_Format:()=>gc,RGBA_ASTC_10x6_Format:()=>xc,RGBA_ASTC_10x8_Format:()=>_c,RGBA_ASTC_12x10_Format:()=>yc,RGBA_ASTC_12x12_Format:()=>Mc,RGBA_ASTC_4x4_Format:()=>lc,RGBA_ASTC_5x4_Format:()=>cc,RGBA_ASTC_5x5_Format:()=>hc,RGBA_ASTC_6x5_Format:()=>uc,RGBA_ASTC_6x6_Format:()=>dc,RGBA_ASTC_8x5_Format:()=>fc,RGBA_ASTC_8x6_Format:()=>pc,RGBA_ASTC_8x8_Format:()=>mc,RGBA_BPTC_Format:()=>Sc,RGBA_ETC2_EAC_Format:()=>sc,RGBA_PVRTC_2BPPV1_Format:()=>ec,RGBA_PVRTC_4BPPV1_Format:()=>tc,RGBA_S3TC_DXT1_Format:()=>jo,RGBA_S3TC_DXT3_Format:()=>ta,RGBA_S3TC_DXT5_Format:()=>ea,RGBDepthPacking:()=>_g,RGBFormat:()=>fd,RGBIntegerFormat:()=>gg,RGB_BPTC_SIGNED_Format:()=>bc,RGB_BPTC_UNSIGNED_Format:()=>wc,RGB_ETC1_Format:()=>nc,RGB_ETC2_Format:()=>ic,RGB_PVRTC_2BPPV1_Format:()=>jl,RGB_PVRTC_4BPPV1_Format:()=>Ql,RGB_S3TC_DXT1_Format:()=>Qo,RGDepthPacking:()=>vg,RGFormat:()=>os,RGIntegerFormat:()=>Kl,RawShaderMaterial:()=>Rs,Ray:()=>es,Raycaster:()=>Du,RectAreaLight:()=>Ul,RedFormat:()=>$l,RedIntegerFormat:()=>Jo,ReinhardToneMapping:()=>Fs,RenderObjectRefreshType:()=>Kg,RenderTarget:()=>So,RenderTarget3D:()=>Cu,RepeatWrapping:()=>po,ReplaceStencilOp:()=>wg,ReverseSubtractEquation:()=>np,RingGeometry:()=>pl,SIGNED_R11_EAC_Format:()=>oc,SIGNED_RED_GREEN_RGTC2_Format:()=>Ac,SIGNED_RED_RGTC1_Format:()=>Ec,SIGNED_RG11_EAC_Format:()=>ac,SRGBColorSpace:()=>rn,SRGBTransfer:()=>_e,Scene:()=>bn,ShaderChunk:()=>le,ShaderLib:()=>xi,ShaderMaterial:()=>He,ShadowMaterial:()=>yl,Shape:()=>As,ShapeGeometry:()=>ml,ShapePath:()=>Qu,ShapeUtils:()=>Kn,ShortType:()=>cd,Skeleton:()=>Ja,SkeletonHelper:()=>ku,SkinnedMesh:()=>Ka,Source:()=>Zh,Sphere:()=>Be,SphereGeometry:()=>Ti,Spherical:()=>Uu,SphericalHarmonics3:()=>Vo,SplineCurve:()=>Uo,SpotLight:()=>Ll,SpotLightHelper:()=>zu,Sprite:()=>Za,SpriteMaterial:()=>To,SrcAlphaFactor:()=>rd,SrcAlphaSaturateFactor:()=>fp,SrcColorFactor:()=>ap,StaticCopyUsage:()=>Gg,StaticDrawUsage:()=>Rc,StaticReadUsage:()=>zg,StereoCamera:()=>Su,StreamCopyUsage:()=>Wg,StreamDrawUsage:()=>Bg,StreamReadUsage:()=>Hg,StringKeyframeTrack:()=>Ai,SubtractEquation:()=>ep,SubtractiveBlending:()=>id,TOUCH:()=>lg,TangentSpaceNormalMap:()=>Li,TetrahedronGeometry:()=>gl,Texture:()=>ke,TextureLoader:()=>_u,TextureSource:()=>Vn,TextureUtils:()=>td,Timer:()=>Ar,TimestampQuery:()=>qg,TorusGeometry:()=>Mr,TorusKnotGeometry:()=>xl,Triangle:()=>ai,TriangleFanDrawMode:()=>Ep,TriangleStripDrawMode:()=>Tp,TrianglesDrawMode:()=>wp,TubeGeometry:()=>_l,UVMapping:()=>Xl,Uint16BufferAttribute:()=>bo,Uint32BufferAttribute:()=>wo,Uint8BufferAttribute:()=>jh,Uint8ClampedBufferAttribute:()=>tu,Uniform:()=>Ru,UniformsGroup:()=>Pu,UniformsLib:()=>Rt,UniformsUtils:()=>Ni,UnsignedByteType:()=>En,UnsignedInt101111Type:()=>ud,UnsignedInt248Type:()=>Hs,UnsignedInt5999Type:()=>hd,UnsignedIntType:()=>An,UnsignedShort4444Type:()=>Yl,UnsignedShort5551Type:()=>Zl,UnsignedShortType:()=>Ir,VSMShadowMap:()=>Cr,Vector2:()=>it,Vector3:()=>P,Vector4:()=>de,VectorKeyframeTrack:()=>Ho,VideoFrameTexture:()=>ou,VideoTexture:()=>tl,WebGL3DRenderTarget:()=>Kh,WebGLArrayRenderTarget:()=>$h,WebGLCoordinateSystem:()=>Un,WebGLCubeRenderTarget:()=>ra,WebGLRenderTarget:()=>Le,WebGLRenderer:()=>Lc,WebGLUtils:()=>Wx,WebGPUCoordinateSystem:()=>Ss,WebXRController:()=>mr,WireframeGeometry:()=>vl,WrapAroundEnding:()=>xo,ZeroCurvatureEnding:()=>ys,ZeroFactor:()=>rp,ZeroSlopeEnding:()=>Ms,ZeroStencilOp:()=>bg,createCanvasElement:()=>Up,error:()=>Wt,getConsoleFunction:()=>jg,log:()=>Mo,setConsoleFunction:()=>Qg,warn:()=>Tt,warnOnce:()=>Si});function Nx(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function aM(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}function Gb(s,t,e,n,i,r){let o=new ot(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let v=_.isScene===!0?_.background:null;if(v&&v.isTexture){let M=_.backgroundBlurriness>0;v=t.get(v,M)}return v}function p(_){let v=!1,M=f(_);M===null?m(o,a):M&&M.isColor&&(m(M,1),v=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,v){let M=f(v);M&&M.isCubeTexture?(c===void 0&&(c=new Jt(new ye(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:Lr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ux),c.material.toneMapped=ue.getTransfer(M.colorSpace)!==_e,(h!==M||u!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Jt(new en(2,2),new He({name:"BackgroundMaterial",uniforms:Lr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ue.getTransfer(M.colorSpace)!==_e,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,v){_.getRGB(Md,kp(s)),e.buffers.color.setClear(Md.r,Md.g,Md.b,v,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Vb(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(R,D,B,N,F){let G=!1,H=u(R,N,B,D);r!==H&&(r=H,c(r.object)),G=f(R,N,B,F),G&&p(R,N,B,F),F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,M(R,D,B,N),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return s.createVertexArray()}function c(R){return s.bindVertexArray(R)}function h(R){return s.deleteVertexArray(R)}function u(R,D,B,N){let F=N.wireframe===!0,G=n[D.id];G===void 0&&(G={},n[D.id]=G);let H=R.isInstancedMesh===!0?R.id:0,et=G[H];et===void 0&&(et={},G[H]=et);let V=et[B.id];V===void 0&&(V={},et[B.id]=V);let Z=V[F];return Z===void 0&&(Z=d(l()),V[F]=Z),Z}function d(R){let D=[],B=[],N=[];for(let F=0;F<e;F++)D[F]=0,B[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:N,object:R,attributes:{},index:null}}function f(R,D,B,N){let F=r.attributes,G=D.attributes,H=0,et=B.getAttributes();for(let V in et)if(et[V].location>=0){let st=F[V],Et=G[V];if(Et===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(Et=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(Et=R.instanceColor)),st===void 0||st.attribute!==Et||Et&&st.data!==Et.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function p(R,D,B,N){let F={},G=D.attributes,H=0,et=B.getAttributes();for(let V in et)if(et[V].location>=0){let st=G[V];st===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(st=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(st=R.instanceColor));let Et={};Et.attribute=st,st&&st.data&&(Et.data=st.data),F[V]=Et,H++}r.attributes=F,r.attributesNum=H,r.index=N}function x(){let R=r.newAttributes;for(let D=0,B=R.length;D<B;D++)R[D]=0}function m(R){g(R,0)}function g(R,D){let B=r.newAttributes,N=r.enabledAttributes,F=r.attributeDivisors;B[R]=1,N[R]===0&&(s.enableVertexAttribArray(R),N[R]=1),F[R]!==D&&(s.vertexAttribDivisor(R,D),F[R]=D)}function _(){let R=r.newAttributes,D=r.enabledAttributes;for(let B=0,N=D.length;B<N;B++)D[B]!==R[B]&&(s.disableVertexAttribArray(B),D[B]=0)}function v(R,D,B,N,F,G,H){H===!0?s.vertexAttribIPointer(R,D,B,F,G):s.vertexAttribPointer(R,D,B,N,F,G)}function M(R,D,B,N){x();let F=N.attributes,G=B.getAttributes(),H=D.defaultAttributeValues;for(let et in G){let V=G[et];if(V.location>=0){let Z=F[et];if(Z===void 0&&(et==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),et==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor)),Z!==void 0){let st=Z.normalized,Et=Z.itemSize,Ut=t.get(Z);if(Ut===void 0)continue;let q=Ut.buffer,Q=Ut.type,lt=Ut.bytesPerElement,At=Q===s.INT||Q===s.UNSIGNED_INT||Z.gpuType===ql;if(Z.isInterleavedBufferAttribute){let _t=Z.data,Xt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,Me=Z.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let Ct=0;Ct<V.locationSize;Ct++)g(V.location+Ct,_t.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Ct=0;Ct<V.locationSize;Ct++)m(V.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,q);for(let Ct=0;Ct<V.locationSize;Ct++)v(V.location+Ct,Et/V.locationSize,Q,st,Xt*lt,(Me+Et/V.locationSize*Ct)*lt,At)}else{if(Z.isInstancedBufferAttribute){for(let _t=0;_t<V.locationSize;_t++)g(V.location+_t,Z.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let _t=0;_t<V.locationSize;_t++)m(V.location+_t);s.bindBuffer(s.ARRAY_BUFFER,q);for(let _t=0;_t<V.locationSize;_t++)v(V.location+_t,Et/V.locationSize,Q,st,Et*lt,Et/V.locationSize*_t*lt,At)}}else if(H!==void 0){let st=H[et];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(V.location,st);break;case 3:s.vertexAttrib3fv(V.location,st);break;case 4:s.vertexAttrib4fv(V.location,st);break;default:s.vertexAttrib1fv(V.location,st)}}}}_()}function b(){A();for(let R in n){let D=n[R];for(let B in D){let N=D[B];for(let F in N){let G=N[F];for(let H in G)h(G[H].object),delete G[H];delete N[F]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;let D=n[R.id];for(let B in D){let N=D[B];for(let F in N){let G=N[F];for(let H in G)h(G[H].object),delete G[H];delete N[F]}}delete n[R.id]}function y(R){for(let D in n){let B=n[D];for(let N in B){let F=B[N];if(F[R.id]===void 0)continue;let G=F[R.id];for(let H in G)h(G[H].object),delete G[H];delete F[R.id]}}}function S(R){for(let D in n){let B=n[D],N=R.isInstancedMesh===!0?R.id:0,F=B[N];if(F!==void 0){for(let G in F){let H=F[G];for(let et in H)h(H[et].object),delete H[et];delete F[G]}delete B[N],Object.keys(B).length===0&&delete n[D]}}}function A(){E(),o=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Wb(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Xb(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(y){return!(y!==Sn&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let S=y===Ye&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==En&&y!==fn&&!S&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Tt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Tt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:M,maxSamples:b,samples:w}}function qb(s){let t=this,e=null,n=0,i=!1,r=!1,o=new $n,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,v=_*4,M=g.clippingState||null;l.value=M,M=h(p,d,v,f);for(let b=0;b!==v;++b)M[b]=e[b];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,M=f;v!==x;++v,M+=4)o.copy(u[v]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function px(s,t,e){return new ra(s,{minFilter:ti,generateMipmaps:t,type:Ye,colorSpace:_o,depthBuffer:e})}function Dc(s,t,e){return new He({name:s,uniforms:t,vertexShader:le.cube_vert,fragmentShader:e,side:pn,blending:Ci,depthTest:!1,depthWrite:!1})}function Qb(){return Dc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Fx}u

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
	`)}function jb(){return Dc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ox}},`

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
	`)}function tw(){return Dc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Zb}
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
	`)}function mx(){return Dc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function gx(){return Dc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ew(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Zo||f===$o)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new ra(p.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Zo||f===$o,x=f===Pi||f===ks;if(p||x){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new _i(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return p&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new _i(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Zo?d.mapping=Pi:f===$o&&(d.mapping=ks),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function nw(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Si("WebGLRenderer: "+n+" extension not supported."),i}}}function iw(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)t.update(x[m],s.ARRAY_BUFFER)}function u(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let _=x!==null?x.array.length:m.array.length/3-1,v=m.count>=65535?wo:bo,M=new v(Math.ceil(_/3)*6,1),b=M.array;if(x!==null){let y=x.array;g=x.version;for(let S=0,A=0;S<_;S+=3){let E=y[S+0],R=y[S+1],D=y[S+2];b[A++]=E,b[A++]=R,b[A++]=R,b[A++]=D,b[A++]=D,b[A++]=E}}else{g=m.version;for(let y=0,S=0;y<_;y+=3){let A=y+0,E=y+1,R=y+2;b[S++]=A,b[S++]=E,b[S++]=E,b[S++]=R,b[S++]=R,b[S++]=A}}M.version=g;let w=r.get(p);w&&t.remove(w),r.set(p,M)}function d(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in i){let x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function sw(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function rw(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Wt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ow(s,t,e){let n=new WeakMap,i=new de;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let A=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;f===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let M=a.attributes.position.count*v,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*b*4*u),y=new dr(w,M,b,u);y.type=fn,y.needsUpdate=!0;let S=v*4;for(let E=0;E<u;E++){let R=m[E],D=g[E],B=_[E],N=M*b*4*E;for(let F=0;F<R.count;F++){let G=F*S;f===!0&&(i.fromBufferAttribute(R,F),w[N+G+0]=i.x,w[N+G+1]=i.y,w[N+G+2]=i.z,w[N+G+3]=0),p===!0&&(i.fromBufferAttribute(D,F),w[N+G+4]=i.x,w[N+G+5]=i.y,w[N+G+6]=i.z,w[N+G+7]=0),x===!0&&(i.fromBufferAttribute(B,F),w[N+G+8]=i.x,w[N+G+9]=i.y,w[N+G+10]=i.z,w[N+G+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:y,size:new it(M,b)},n.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function aw(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}function cw(s,t,e,n,i,r){let o=new Le(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Zt;h.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new dt([0,2,0,0,2,0],2));let u=new Rs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Jt(h,u),f=new ss(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,_=null,v=[],M=!1;this.setSize=function(b,w){o.setSize(b,w),a!==null&&a.setSize(b,w),l!==null&&l.setSize(b,w);for(let y=0;y<v.length;y++){let S=v[y];S.setSize&&S.setSize(b,w)}},this.setEffects=function(b){v=b,M=v.length>0&&v[0].isRenderPass===!0;let w=o.width,y=o.height;v.length>0&&a===null&&(a=new Le(w,y,{type:Ye,depthBuffer:!1,stencilBuffer:!1}),l=new Le(w,y,{type:Ye,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&v.some(A=>A.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Qn(w,y),r===!0&&(c.format=Ii,c.type=Hs)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let A=0;A<v.length;A++){let E=v[A];E.setSize&&E.setSize(w,y),S&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(b,w){if(m||b.toneMapping===Xn&&v.length===0)return!1;if(_=w,w!==null){let y=w.width,S=w.height;(o.width!==y||o.height!==S)&&this.setSize(y,S)}return M===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Xn,!0},this.hasRenderPass=function(){return M},this.end=function(b,w){b.toneMapping=g,m=!0;let y=o,S=a;for(let A=0;A<v.length;A++){let E=v[A];E.enabled!==!1&&(E.render(b,S,y,w),E.needsSwap!==!1&&(y=S,S=S===a?l:a))}if(p!==b.outputColorSpace||x!==b.toneMapping){p=b.outputColorSpace,x=b.toneMapping,u.defines={},ue.getTransfer(p)===_e&&(u.defines.SRGB_TRANSFER="");let A=lw[x];A&&(u.defines[A]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,b.setRenderTarget(_),b.render(d,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}function oa(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=xx[i];if(r===void 0&&(r=new Float32Array(i),xx[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ze(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function $e(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function bd(s,t){let e=_x[t];e===void 0&&(e=new Int32Array(t),_x[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function hw(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function uw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2fv(this.addr,t),$e(e,t)}}function dw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;s.uniform3fv(this.addr,t),$e(e,t)}}function fw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4fv(this.addr,t),$e(e,t)}}function pw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;Mx.set(n),s.uniformMatrix2fv(this.addr,!1,Mx),$e(e,n)}}function mw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;yx.set(n),s.uniformMatrix3fv(this.addr,!1,yx),$e(e,n)}}function gw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;vx.set(n),s.uniformMatrix4fv(this.addr,!1,vx),$e(e,n)}}function xw(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function _w(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2iv(this.addr,t),$e(e,t)}}function vw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;s.uniform3iv(this.addr,t),$e(e,t)}}function yw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4iv(this.addr,t),$e(e,t)}}function Mw(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Sw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2uiv(this.addr,t),$e(e,t)}}function bw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;s.uniform3uiv(this.addr,t),$e(e,t)}}function ww(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4uiv(this.addr,t),$e(e,t)}}function wd(s){return s.version===0&&(s.compareFunction=xd,s.needsUpdate=!0),s}function Tw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=wd(zx):r=Bx,e.setTexture2D(t||r,i)}function Ew(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Gx,i)}function Aw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=wd(kx):r=Vx,e.setTextureCube(t||r,i)}function Cw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Hx,i)}function Rw(s){switch(s){case 5126:return hw;case 35664:return uw;case 35665:return dw;case 35666:return fw;case 35674:return pw;case 35675:return mw;case 35676:return gw;case 5124:case 35670:return xw;case 35667:case 35671:return _w;case 35668:case 35672:return vw;case 35669:case 35673:return yw;case 5125:return Mw;case 36294:return Sw;case 36295:return bw;case 36296:return ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Tw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return Aw;case 36289:case 36303:case 36311:case 36292:return Cw}}function Pw(s,t){s.uniform1fv(this.addr,t)}function Iw(s,t){let e=oa(t,this.size,2);s.uniform2fv(this.addr,e)}function Lw(s,t){let e=oa(t,this.size,3);s.uniform3fv(this.addr,e)}function Dw(s,t){let e=oa(t,this.size,4);s.uniform4fv(this.addr,e)}function Nw(s,t){let e=oa(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Uw(s,t){let e=oa(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Fw(s,t){let e=oa(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ow(s,t){s.uniform1iv(this.addr,t)}function Bw(s,t){s.uniform2iv(this.addr,t)}function zw(s,t){s.uniform3iv(this.addr,t)}function kw(s,t){s.uniform4iv(this.addr,t)}function Hw(s,t){s.uniform1uiv(this.addr,t)}function Gw(s,t){s.uniform2uiv(this.addr,t)}function Vw(s,t){s.uniform3uiv(this.addr,t)}function Ww(s,t){s.uniform4uiv(this.addr,t)}function Xw(s,t,e){let n=this.cache,i=t.length,r=bd(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),$e(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=wd(zx):o=Bx;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function qw(s,t,e){let n=this.cache,i=t.length,r=bd(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Gx,r[o])}function Yw(s,t,e){let n=this.cache,i=t.length,r=bd(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),$e(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=wd(kx):o=Vx;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function Zw(s,t,e){let n=this.cache,i=t.length,r=bd(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Hx,r[o])}function $w(s){switch(s){case 5126:return Pw;case 35664:return Iw;case 35665:return Lw;case 35666:return Dw;case 35674:return Nw;case 35675:return Uw;case 35676:return Fw;case 5124:case 35670:return Ow;case 35667:case 35671:return Bw;case 35668:case 35672:return zw;case 35669:case 35673:return kw;case 5125:return Hw;case 36294:return Gw;case 36295:return Vw;case 36296:return Ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Xw;case 35679:case 36299:case 36307:return qw;case 35680:case 36300:case 36308:case 36293:return Yw;case 36289:case 36303:case 36311:case 36292:return Zw}}function Sx(s,t){s.seq.push(t),s.map[t.id]=t}function Kw(s,t,e){let n=s.name,i=n.length;for(Kp.lastIndex=0;;){let r=Kp.exec(n),o=Kp.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Sx(e,c===void 0?new Qp(a,s,t):new jp(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new tm(a),Sx(e,u)),e=u}}}function bx(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}function jw(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function tT(s){ue._getMatrix(wx,ue.workingColorSpace,s);let t=`mat3( ${wx.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(s)){case vo:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Tt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Tx(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+jw(s.getShaderSource(t),a)}else return r}function eT(s,t){let e=tT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function iT(s,t){let e=nT[t];return e===void 0?(Tt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function sT(){ue.getLuminanceCoefficients(Sd);let s=Sd.x.toFixed(4),t=Sd.y.toFixed(4),e=Sd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ic).join(`
`)}function oT(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function aT(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ic(s){return s!==""}function Ex(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ax(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function em(s){return s.replace(lT,cT)}function cT(s,t){let e=le[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return em(e)}function Cx(s){return s.replace(hT,uT)}function uT(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Rx(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function fT(s){return dT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function mT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":pT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}function xT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":gT[s.combine]||"ENVMAP_BLENDING_NONE"}function _T(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=fT(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=mT(e),u=xT(e),d=rT(e),f=oT(r),p=i.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ic).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ic).join(`
`),m.length>0&&(m+=`
`)):(x=[Rx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ic).join(`
`),m=[Rx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?le.tonemapping_pars_fragment:"",e.toneMapping!==Xn?iT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,eT("linearToOutputTexel",e.outputColorSpace),sT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ic).join(`
`)),o=em(o),o=Ex(o,e),o=Ax(o,e),a=em(a),a=Ex(a,e),a=Ax(a,e),o=Cx(o),a=Cx(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===_d?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+x+o,v=g+m+a,M=bx(i,i.VERTEX_SHADER,_),b=bx(i,i.FRAGMENT_SHADER,v);i.attachShader(p,M),i.attachShader(p,b),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function w(E){if(s.debug.checkShaderErrors){let R=i.getProgramInfoLog(p)||"",D=i.getShaderInfoLog(M)||"",B=i.getShaderInfoLog(b)||"",N=R.trim(),F=D.trim(),G=B.trim(),H=!0,et=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,M,b);else{let V=Tx(i,M,"vertex"),Z=Tx(i,b,"fragment");Wt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+N+`
`+V+`
`+Z)}else N!==""?Tt("WebGLProgram: Program Info Log:",N):(F===""||G==="")&&(et=!1);et&&(E.diagnostics={runnable:H,programLog:N,vertexShader:{log:F,prefix:x},fragmentShader:{log:G,prefix:m}})}i.deleteShader(M),i.deleteShader(b),y=new sa(i,p),S=aT(i,p)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(p,Jw)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qw++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=b,this}function yT(s){return s===os||s===na||s===ia}function MT(s,t,e,n,i,r){let o=new pr,a=new nm,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,S,A,E,R,D){let B=E.fog,N=R.geometry,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?E.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,H=t.get(y.envMap||F,G),et=d[y.type],V=n.precision;y.precision!==null&&(V=n.getMaxPrecision(y.precision),V!==y.precision&&Tt("WebGLProgram.getParameters:",y.precision,"not supported, using",V,"instead."));let Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,st=Z!==void 0?Z.length:0,Et=0;N.morphAttributes.position!==void 0&&(Et=1),N.morphAttributes.normal!==void 0&&(Et=2),N.morphAttributes.color!==void 0&&(Et=3);let Ut,q,Q,lt;if(et){let It=xi[et];Ut=It.vertexShader,q=It.fragmentShader}else{Ut=y.vertexShader,q=y.fragmentShader;let It=a.getVertexShaderStage(y),Te=a.getFragmentShaderStage(y);a.update(y,It,Te),Q=It.id,lt=Te.id}let At=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),Xt=R.isInstancedMesh===!0,Me=R.isBatchedMesh===!0,Ct=!!y.map,oe=!!y.matcap,fe=!!H,rt=fe&&H.isPMREMTexture===!0,xt=!!y.aoMap,pt=!!y.lightMap,Nt=!!y.bumpMap&&y.wireframe===!1,mt=!!y.normalMap,ee=!!y.displacementMap,kt=!!y.emissiveMap,ce=!!y.metalnessMap,re=!!y.roughnessMap,k=y.anisotropy>0,L=y.clearcoat>0,$=y.diffuseRoughness>0,ht=y.dispersion>0,qt=y.retroreflectivity>0,at=y.iridescence>0,Kt=y.sheen>0,Pt=y.transmission>0,Dt=k&&!!y.anisotropyMap,I=L&&!!y.clearcoatMap,T=L&&!!y.clearcoatNormalMap,z=L&&!!y.clearcoatRoughnessMap,ct=$&&!!y.diffuseRoughnessMap,tt=at&&!!y.iridescenceMap,ft=at&&!!y.iridescenceThicknessMap,vt=Kt&&!!y.sheenColorMap,J=Kt&&!!y.sheenRoughnessMap,j=!!y.specularMap,Mt=!!y.specularColorMap,U=!!y.specularIntensityMap,nt=Pt&&!!y.transmissionMap,K=Pt&&!!y.thicknessMap,St=!!y.gradientMap,gt=!!y.alphaMap,yt=y.alphaTest>0,Yt=!!y.alphaHash,he=!!y.extensions,ut=Xn;y.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ut=s.toneMapping);let $t=rt?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,ae={shaderID:et,shaderType:y.type,shaderName:y.name,vertexShader:Ut,fragmentShader:q,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:lt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:V,batching:Me,batchingColor:Me&&R._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&R.instanceColor!==null,instancingMorph:Xt&&R.morphTexture!==null,outputColorSpace:At===null?s.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ct,matcap:oe,envMap:fe,envMapMode:fe&&H.mapping,envMapPMREM:rt,envMapMaxLod:rt?$t.length-1:null,envMapSize:rt?$t[0].width:null,aoMap:xt,lightMap:pt,bumpMap:Nt,normalMap:mt,displacementMap:ee,emissiveMap:kt,normalMapObjectSpace:mt&&y.normalMapType===Cp,normalMapTangentSpace:mt&&y.normalMapType===Li,packedNormalMap:mt&&y.normalMapType===Li&&yT(y.normalMap.format),metalnessMap:ce,roughnessMap:re,anisotropy:k,anisotropyMap:Dt,clearcoat:L,clearcoatMap:I,clearcoatNormalMap:T,clearcoatRoughnessMap:z,diffuseRoughness:$,diffuseRoughnessMap:ct,dispersion:ht,retroreflection:qt,iridescence:at,iridescenceMap:tt,iridescenceThicknessMap:ft,sheen:Kt,sheenColorMap:vt,sheenRoughnessMap:J,specularMap:j,specularColorMap:Mt,specularIntensityMap:U,transmission:Pt,transmissionMap:nt,thicknessMap:K,gradientMap:St,opaque:y.transparent===!1&&y.blending===Rr&&y.alphaToCoverage===!1,alphaMap:gt,alphaTest:yt,alphaHash:Yt,combine:y.combine,mapUv:Ct&&f(y.map.channel),aoMapUv:xt&&f(y.aoMap.channel),lightMapUv:pt&&f(y.lightMap.channel),bumpMapUv:Nt&&f(y.bumpMap.channel),normalMapUv:mt&&f(y.normalMap.channel),displacementMapUv:ee&&f(y.displacementMap.channel),emissiveMapUv:kt&&f(y.emissiveMap.channel),metalnessMapUv:ce&&f(y.metalnessMap.channel),roughnessMapUv:re&&f(y.roughnessMap.channel),anisotropyMapUv:Dt&&f(y.anisotropyMap.channel),clearcoatMapUv:I&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ct&&f(y.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:J&&f(y.sheenRoughnessMap.channel),specularMapUv:j&&f(y.specularMap.channel),specularColorMapUv:Mt&&f(y.specularColorMap.channel),specularIntensityMapUv:U&&f(y.specularIntensityMap.channel),transmissionMapUv:nt&&f(y.transmissionMap.channel),thicknessMapUv:K&&f(y.thicknessMap.channel),alphaMapUv:gt&&f(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(mt||k),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!N.attributes.uv&&(Ct||gt),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&mt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:Et,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(It=>It.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:Ct&&y.map.isVideoTexture===!0&&ue.getTransfer(y.map.colorSpace)===_e,decodeVideoTextureEmissive:kt&&y.emissiveMap.isVideoTexture===!0&&ue.getTransfer(y.emissiveMap.colorSpace)===_e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===nn,flipSided:y.side===pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:he&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&y.extensions.multiDraw===!0||Me)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function x(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)S.push(A),S.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(m(S,y),g(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function m(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapPMREM),y.push(S.envMapMaxLod),y.push(S.envMapSize),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.diffuseRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.numLightProbeGrids),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function g(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){let S=d[y.type],A;if(S){let E=xi[S];A=Ni.clone(E.uniforms)}else A=y.uniforms;return A}function v(y,S){let A=h.get(S);return A!==void 0?++A.usedTimes:(A=new _T(s,S,y,i),c.push(A),h.set(S,A)),A}function M(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:_,acquireProgram:v,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:w}}function ST(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function bT(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Px(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ix(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let _=s[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},s[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=p,_.materialVariant=o(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=m,_.group=g),t++,_}function l(d,f,p,x,m,g,_){_.reversedDepth===!0&&(m=-m);let v=a(d,f,p,x,m,g);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):e.push(v)}function c(d,f,p,x,m,g){let _=a(d,f,p,x,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):e.unshift(_)}function h(d,f){e.length>1&&e.sort(d||bT),n.length>1&&n.sort(f||Px),i.length>1&&i.sort(f||Px)}function u(){for(let d=t,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function wT(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Ix,s.set(n,[o])):i>=r.length?(o=new Ix,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function TT(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new ot};break;case"SpotLight":e={position:new P,direction:new P,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function ET(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}function CT(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function RT(s){let t=new TT,e=ET(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let i=new P,r=new Ot,o=new Ot;function a(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,_=0,v=0,M=0,b=0,w=0,y=0,S=0,A=0,E=0;c.sort(CT);for(let D=0,B=c.length;D<B;D++){let N=c[D],F=N.color,G=N.intensity,H=N.distance,et=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===os?et=N.shadow.map.texture:et=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=F.r*G,u+=F.g*G,d+=F.b*G;else if(N.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(N.sh.coefficients[V],G);E++}else if(N.isSunLight){let V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,st=e.get(N);st.shadowIntensity=Z.intensity,st.shadowBias=Z.bias,st.shadowNormalBias=Z.normalBias,st.shadowRadius=Z.radius,st.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[p]=st,n.sunShadowMap[p]=et;let Et=Z.getViewportCount();for(let Ut=0;Ut<Et;Ut++)n.sunShadowMatrix[x+Ut]=Z.getMatrix(Ut),n.sunShadowCascade[x+Ut]=Z._cascadeData[Ut];x+=Et,p++}n.sun[f]=V,f++}else if(N.isDirectionalLight){let V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,st=e.get(N);st.shadowIntensity=Z.intensity,st.shadowBias=Z.bias,st.shadowNormalBias=Z.normalBias,st.shadowRadius=Z.radius,st.shadowMapSize=Z.mapSize,n.directionalShadow[m]=st,n.directionalShadowMap[m]=et,n.directionalShadowMatrix[m]=N.shadow.matrix,b++}n.directional[m]=V,m++}else if(N.isSpotLight){let V=t.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(F).multiplyScalar(G),V.distance=H,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,n.spot[_]=V;let Z=N.shadow;if(N.map&&(n.spotLightMap[S]=N.map,S++,Z.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[_]=Z.matrix,N.castShadow){let st=e.get(N);st.shadowIntensity=Z.intensity,st.shadowBias=Z.bias,st.shadowNormalBias=Z.normalBias,st.shadowRadius=Z.radius,st.shadowMapSize=Z.mapSize,n.spotShadow[_]=st,n.spotShadowMap[_]=et,y++}_++}else if(N.isRectAreaLight){let V=t.get(N);V.color.copy(F).multiplyScalar(G),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),n.rectArea[v]=V,v++}else if(N.isPointLight){let V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){let Z=N.shadow,st=e.get(N);st.shadowIntensity=Z.intensity,st.shadowBias=Z.bias,st.shadowNormalBias=Z.normalBias,st.shadowRadius=Z.radius,st.shadowMapSize=Z.mapSize,st.shadowCameraNear=Z.camera.near,st.shadowCameraFar=Z.camera.far,n.pointShadow[g]=st,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=N.shadow.matrix,w++}n.point[g]=V,g++}else if(N.isHemisphereLight){let V=t.get(N);V.skyColor.copy(N.color).multiplyScalar(G),V.groundColor.copy(N.groundColor).multiplyScalar(G),n.hemi[M]=V,M++}}v>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.sunLength!==f||R.directionalLength!==m||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==v||R.hemiLength!==M||R.numSunShadows!==p||R.numDirectionalShadows!==b||R.numPointShadows!==w||R.numSpotShadows!==y||R.numSpotMaps!==S||R.numLightProbes!==E)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=v,n.point.length=g,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+S-A,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,R.sunLength=f,R.directionalLength=m,R.pointLength=g,R.spotLength=_,R.rectAreaLength=v,R.hemiLength=M,R.numSunShadows=p,R.numDirectionalShadows=b,R.numPointShadows=w,R.numSpotShadows=y,R.numSpotMaps=S,R.numLightProbes=E,n.version=AT++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){let M=c[_];if(M.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),u++}else if(M.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),d++}else if(M.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Lx(s){let t=new RT(s),e=[],n=[],i=[];function r(u){h.camera=u,e.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function PT(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Lx(s),t.set(i,[a])):r>=o.length?(a=new Lx(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function UT(s,t,e){let n=new wi,i=new it,r=new it,o=new de,a=new Oo,l=new Bo,c={},h=e.maxTextureSize,u={[rs]:pn,[pn]:rs,[nn]:nn},d=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:IT,fragmentShader:LT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Zt;p.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Jt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ls;let g=this.type;this.render=function(w,y,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===jf&&(Tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ls);let A=s.getRenderTarget(),E=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Ci),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=g!==this.type;B&&y.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(F=>F.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,F=w.length;N<F;N++){let G=w[N],H=G.shadow;if(H===void 0){Tt("WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let et=H.getFrameExtents();i.multiply(et),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/et.x),i.x=r.x*et.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/et.y),i.y=r.y*et.y,H.mapSize.y=r.y));let V=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=V,H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Cr){if(G.isPointLight){Tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Le(i.x,i.y,{format:os,type:Ye,minFilter:Ie,magFilter:Ie,generateMipmaps:!1}),H.map.texture.name=G.name+".shadowMap",H.map.depthTexture=new Qn(i.x,i.y,fn),H.map.depthTexture.name=G.name+".shadowMapDepth",H.map.depthTexture.format=bi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ze,H.map.depthTexture.magFilter=ze}else G.isPointLight?(H.map=new ra(i.x),H.map.depthTexture=new Ro(i.x,An)):(H.map=new Le(i.x,i.y),H.map.depthTexture=new Qn(i.x,i.y,An)),H.map.depthTexture.name=G.name+".shadowMap",H.map.depthTexture.format=bi,this.type===Ls?(H.map.depthTexture.compareFunction=V?gd:md,H.map.depthTexture.minFilter=Ie,H.map.depthTexture.magFilter=Ie):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ze,H.map.depthTexture.magFilter=ze);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);let Z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();G.isPointLight!==!0&&H.updateMatrices(G,S);let st=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let Et=0;Et<Z;Et++){let Ut=H.getCamera(Et);if(G.isPointLight){let q=H.camera,Q=H.matrix,lt=G.distance||q.far;lt!==q.far&&(q.far=lt,q.updateProjectionMatrix()),Pc.setFromMatrixPosition(G.matrixWorld),q.position.copy(Pc),Jp.copy(q.position),Jp.add(DT[Et]),q.up.copy(NT[Et]),q.lookAt(Jp),q.updateMatrixWorld(),Q.makeTranslation(-Pc.x,-Pc.y,-Pc.z),Dx.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Dx,q.coordinateSystem,q.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,Et),s.clear();else{Et===0&&(s.setRenderTarget(H.map),s.clear());let q=H.getViewport(Et);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),D.viewport(o)}n=H.getFrustum(Et),M(y,S,Ut,G,st,this.type)}H.isPointLightShadow!==!0&&this.type===Cr&&_(H,S),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(A,E,R)};function _(w,y){let S=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Le(i.x,i.y,{format:os,type:Ye}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(y,null,S,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(y,null,S,f,x,null)}function v(w,y,S,A){let E=null,R=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)E=R;else if(E=S.isPointLight===!0?l:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let D=E.uuid,B=y.uuid,N=c[D];N===void 0&&(N={},c[D]=N);let F=N[B];F===void 0&&(F=E.clone(),N[B]=F,y.addEventListener("dispose",b)),E=F}if(E.visible=y.visible,E.wireframe=y.wireframe,A===Cr?E.side=y.shadowSide!==null?y.shadowSide:y.side:E.side=y.shadowSide!==null?y.shadowSide:u[y.side],E.alphaMap=y.alphaMap,E.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,E.map=y.map,E.clipShadows=y.clipShadows,E.clippingPlanes=y.clippingPlanes,E.clipIntersection=y.clipIntersection,E.displacementMap=y.displacementMap,E.displacementScale=y.displacementScale,E.displacementBias=y.displacementBias,E.wireframeLinewidth=y.wireframeLinewidth,E.linewidth=y.linewidth,S.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let D=s.properties.get(E);D.light=S}return E}function M(w,y,S,A,E,R){if(w.visible===!1)return;if(w.layers.test(E)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Cr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let N=t.update(w),F=w.material;if(Array.isArray(F)){let G=N.groups;for(let H=0,et=G.length;H<et;H++){let V=G[H],Z=F[V.materialIndex];if(Z&&Z.visible){let st=v(w,Z,A,R);w.onBeforeShadow(s,w,y,S,N,st,V),s.renderBufferDirect(S,null,N,st,w,V),w.onAfterShadow(s,w,y,S,N,st,V)}}}else if(F.visible){let G=v(w,F,A,R);w.onBeforeShadow(s,w,y,S,N,G,null),s.renderBufferDirect(S,null,N,G,w,null),w.onAfterShadow(s,w,y,S,N,G,null)}}let B=w.children;for(let N=0,F=B.length;N<F;N++)M(B[N],y,S,A,E,R)}function b(w){w.target.removeEventListener("dispose",b);for(let S in c){let A=c[S],E=w.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}function FT(s,t){function e(){let U=!1,nt=new de,K=null,St=new de(0,0,0,0);return{setMask:function(gt){K!==gt&&!U&&(s.colorMask(gt,gt,gt,gt),K=gt)},setLocked:function(gt){U=gt},setClear:function(gt,yt,Yt,he,ut){ut===!0&&(gt*=he,yt*=he,Yt*=he),nt.set(gt,yt,Yt,he),St.equals(nt)===!1&&(s.clearColor(gt,yt,Yt,he),St.copy(nt))},reset:function(){U=!1,K=null,St.set(-1,0,0,0)}}}function n(){let U=!1,nt=!1,K=null,St=null,gt=null;return{setReversed:function(yt){if(nt!==yt){let Yt=t.get("EXT_clip_control");yt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),nt=yt;let he=gt;gt=null,this.setClear(he)}},getReversed:function(){return nt},setTest:function(yt){yt?_t(s.DEPTH_TEST):Xt(s.DEPTH_TEST)},setMask:function(yt){K!==yt&&!U&&(s.depthMask(yt),K=yt)},setFunc:function(yt){if(nt&&(yt=nx[yt]),St!==yt){switch(yt){case Ba:s.depthFunc(s.NEVER);break;case za:s.depthFunc(s.ALWAYS);break;case ka:s.depthFunc(s.LESS);break;case hr:s.depthFunc(s.LEQUAL);break;case Ha:s.depthFunc(s.EQUAL);break;case Ga:s.depthFunc(s.GEQUAL);break;case Va:s.depthFunc(s.GREATER);break;case Wa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}St=yt}},setLocked:function(yt){U=yt},setClear:function(yt){gt!==yt&&(gt=yt,nt&&(yt=1-yt),s.clearDepth(yt))},reset:function(){U=!1,K=null,St=null,gt=null,nt=!1}}}function i(){let U=!1,nt=null,K=null,St=null,gt=null,yt=null,Yt=null,he=null,ut=null;return{setTest:function($t){U||($t?_t(s.STENCIL_TEST):Xt(s.STENCIL_TEST))},setMask:function($t){nt!==$t&&!U&&(s.stencilMask($t),nt=$t)},setFunc:function($t,ae,It){(K!==$t||St!==ae||gt!==It)&&(s.stencilFunc($t,ae,It),K=$t,St=ae,gt=It)},setOp:function($t,ae,It){(yt!==$t||Yt!==ae||he!==It)&&(s.stencilOp($t,ae,It),yt=$t,Yt=ae,he=It)},setLocked:function($t){U=$t},setClear:function($t){ut!==$t&&(s.clearStencil($t),ut=$t)},reset:function(){U=!1,nt=null,K=null,St=null,gt=null,yt=null,Yt=null,he=null,ut=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,v=null,M=null,b=null,w=null,y=null,S=new ot(0,0,0),A=0,E=!1,R=null,D=null,B=null,N=null,F=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,et=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=et>=1):V.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=et>=2);let Z=null,st={},Et=s.getParameter(s.SCISSOR_BOX),Ut=s.getParameter(s.VIEWPORT),q=new de().fromArray(Et),Q=new de().fromArray(Ut);function lt(U,nt,K,St){let gt=new Uint8Array(4),yt=s.createTexture();s.bindTexture(U,yt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<K;Yt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,St,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(nt+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return yt}let At={};At[s.TEXTURE_2D]=lt(s.TEXTURE_2D,s.TEXTURE_2D,1),At[s.TEXTURE_CUBE_MAP]=lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[s.TEXTURE_2D_ARRAY]=lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),At[s.TEXTURE_3D]=lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_t(s.DEPTH_TEST),o.setFunc(hr),Nt(!1),mt(nd),_t(s.CULL_FACE),xt(Ci);function _t(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Xt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Me(U,nt){return d[U]!==nt?(s.bindFramebuffer(U,nt),d[U]=nt,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=nt),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function Ct(U,nt){let K=p,St=!1;if(U){K=f.get(nt),K===void 0&&(K=[],f.set(nt,K));let gt=U.textures;if(K.length!==gt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,Yt=gt.length;yt<Yt;yt++)K[yt]=s.COLOR_ATTACHMENT0+yt;K.length=gt.length,St=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,St=!0);St&&s.drawBuffers(K)}function oe(U){return x!==U?(s.useProgram(U),x=U,!0):!1}let fe={[Ns]:s.FUNC_ADD,[ep]:s.FUNC_SUBTRACT,[np]:s.FUNC_REVERSE_SUBTRACT};fe[ip]=s.MIN,fe[sp]=s.MAX;let rt={[rp]:s.ZERO,[op]:s.ONE,[ap]:s.SRC_COLOR,[rd]:s.SRC_ALPHA,[fp]:s.SRC_ALPHA_SATURATE,[up]:s.DST_COLOR,[cp]:s.DST_ALPHA,[lp]:s.ONE_MINUS_SRC_COLOR,[od]:s.ONE_MINUS_SRC_ALPHA,[dp]:s.ONE_MINUS_DST_COLOR,[hp]:s.ONE_MINUS_DST_ALPHA,[pp]:s.CONSTANT_COLOR,[mp]:s.ONE_MINUS_CONSTANT_COLOR,[gp]:s.CONSTANT_ALPHA,[xp]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(U,nt,K,St,gt,yt,Yt,he,ut,$t){if(U===Ci){m===!0&&(Xt(s.BLEND),m=!1);return}if(m===!1&&(_t(s.BLEND),m=!0),U!==tp){if(U!==g||$t!==E){if((_!==Ns||b!==Ns)&&(s.blendEquation(s.FUNC_ADD),_=Ns,b=Ns),$t)switch(U){case Rr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ds:s.blendFunc(s.ONE,s.ONE);break;case id:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sd:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Wt("WebGLState: Invalid blending: ",U);break}else switch(U){case Rr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case id:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sd:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",U);break}v=null,M=null,w=null,y=null,S.set(0,0,0),A=0,g=U,E=$t}return}gt=gt||nt,yt=yt||K,Yt=Yt||St,(nt!==_||gt!==b)&&(s.blendEquationSeparate(fe[nt],fe[gt]),_=nt,b=gt),(K!==v||St!==M||yt!==w||Yt!==y)&&(s.blendFuncSeparate(rt[K],rt[St],rt[yt],rt[Yt]),v=K,M=St,w=yt,y=Yt),(he.equals(S)===!1||ut!==A)&&(s.blendColor(he.r,he.g,he.b,ut),S.copy(he),A=ut),g=U,E=!1}function pt(U,nt){U.side===nn?Xt(s.CULL_FACE):_t(s.CULL_FACE);let K=U.side===pn;nt&&(K=!K),Nt(K),U.blending===Rr&&U.transparent===!1?xt(Ci):xt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let St=U.stencilWrite;a.setTest(St),St&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),kt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?_t(s.SAMPLE_ALPHA_TO_COVERAGE):Xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(U){R!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),R=U)}function mt(U){U!==Jf?(_t(s.CULL_FACE),U!==D&&(U===nd?s.cullFace(s.BACK):U===Qf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Xt(s.CULL_FACE),D=U}function ee(U){U!==B&&(H&&s.lineWidth(U),B=U)}function kt(U,nt,K){U?(_t(s.POLYGON_OFFSET_FILL),(N!==nt||F!==K)&&(N=nt,F=K,o.getReversed()&&(nt=-nt,K=-K),s.polygonOffset(nt,K))):Xt(s.POLYGON_OFFSET_FILL)}function ce(U){U?_t(s.SCISSOR_TEST):Xt(s.SCISSOR_TEST)}function re(U){U===void 0&&(U=s.TEXTURE0+G-1),Z!==U&&(s.activeTexture(U),Z=U)}function k(U,nt,K){K===void 0&&(Z===null?K=s.TEXTURE0+G-1:K=Z);let St=st[K];St===void 0&&(St={type:void 0,texture:void 0},st[K]=St),(St.type!==U||St.texture!==nt)&&(Z!==K&&(s.activeTexture(K),Z=K),s.bindTexture(U,nt||At[U]),St.type=U,St.texture=nt)}function L(){let U=st[Z];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{s.compressedTexImage2D(...arguments)}catch(U){Wt("WebGLState:",U)}}function ht(){try{s.compressedTexImage3D(...arguments)}catch(U){Wt("WebGLState:",U)}}function qt(){try{s.texSubImage2D(...arguments)}catch(U){Wt("WebGLState:",U)}}function at(){try{s.texSubImage3D(...arguments)}catch(U){Wt("WebGLState:",U)}}function Kt(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Wt("WebGLState:",U)}}function Pt(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Wt("WebGLState:",U)}}function Dt(){try{s.texStorage2D(...arguments)}catch(U){Wt("WebGLState:",U)}}function I(){try{s.texStorage3D(...arguments)}catch(U){Wt("WebGLState:",U)}}function T(){try{s.texImage2D(...arguments)}catch(U){Wt("WebGLState:",U)}}function z(){try{s.texImage3D(...arguments)}catch(U){Wt("WebGLState:",U)}}function ct(U){return u[U]!==void 0?u[U]:s.getParameter(U)}function tt(U,nt){u[U]!==nt&&(s.pixelStorei(U,nt),u[U]=nt)}function ft(U){q.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),q.copy(U))}function vt(U){Q.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Q.copy(U))}function J(U,nt){let K=c.get(nt);K===void 0&&(K=new WeakMap,c.set(nt,K));let St=K.get(U);St===void 0&&(St=s.getUniformBlockIndex(nt,U.name),s.uniformBlockBinding(nt,St,St),K.set(U,St))}function j(U,nt,K){let gt=c.get(nt).get(U);l[gt]!==K&&(s.bindBufferBase(s.UNIFORM_BUFFER,gt,K),l[gt]=K)}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,st={},d={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,v=null,M=null,b=null,w=null,y=null,S=new ot(0,0,0),A=0,E=!1,R=null,D=null,B=null,N=null,F=null,q.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_t,disable:Xt,bindFramebuffer:Me,drawBuffers:Ct,useProgram:oe,setBlending:xt,setMaterial:pt,setFlipSided:Nt,setCullFace:mt,setLineWidth:ee,setPolygonOffset:kt,setScissorTest:ce,activeTexture:re,bindTexture:k,unbindTexture:L,compressedTexImage2D:$,compressedTexImage3D:ht,texImage2D:T,texImage3D:z,pixelStorei:tt,getParameter:ct,updateUBOMapping:J,uniformBlockBinding:j,texStorage2D:Dt,texStorage3D:I,texSubImage2D:qt,texSubImage3D:at,compressedTexSubImage2D:Kt,compressedTexSubImage3D:Pt,scissor:ft,viewport:vt,reset:Mt}}function OT(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,x=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return m?new OffscreenCanvas(I,T):yo("canvas")}function _(I,T,z){let ct=1,tt=Dt(I);if((tt.width>z||tt.height>z)&&(ct=z/Math.max(tt.width,tt.height)),ct<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ft=Math.floor(ct*tt.width),vt=Math.floor(ct*tt.height);d===void 0&&(d=g(ft,vt));let J=T?g(ft,vt):d;return J.width=ft,J.height=vt,J.getContext("2d").drawImage(I,0,0,ft,vt),Tt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ft+"x"+vt+")."),J}else return"data"in I&&Tt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),I;return I}function v(I){return I.generateMipmaps}function M(I){s.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(I,T,z,ct,tt,ft=!1){if(I!==null){if(s[I]!==void 0)return s[I];Tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let vt;ct&&(vt=t.get("EXT_texture_norm16"),vt||Tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=T;if(T===s.RED&&(z===s.FLOAT&&(J=s.R32F),z===s.HALF_FLOAT&&(J=s.R16F),z===s.UNSIGNED_BYTE&&(J=s.R8),z===s.UNSIGNED_SHORT&&vt&&(J=vt.R16_EXT),z===s.SHORT&&vt&&(J=vt.R16_SNORM_EXT)),T===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.R8UI),z===s.UNSIGNED_SHORT&&(J=s.R16UI),z===s.UNSIGNED_INT&&(J=s.R32UI),z===s.BYTE&&(J=s.R8I),z===s.SHORT&&(J=s.R16I),z===s.INT&&(J=s.R32I)),T===s.RG&&(z===s.FLOAT&&(J=s.RG32F),z===s.HALF_FLOAT&&(J=s.RG16F),z===s.UNSIGNED_BYTE&&(J=s.RG8),z===s.UNSIGNED_SHORT&&vt&&(J=vt.RG16_EXT),z===s.SHORT&&vt&&(J=vt.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RG8UI),z===s.UNSIGNED_SHORT&&(J=s.RG16UI),z===s.UNSIGNED_INT&&(J=s.RG32UI),z===s.BYTE&&(J=s.RG8I),z===s.SHORT&&(J=s.RG16I),z===s.INT&&(J=s.RG32I)),T===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RGB8UI),z===s.UNSIGNED_SHORT&&(J=s.RGB16UI),z===s.UNSIGNED_INT&&(J=s.RGB32UI),z===s.BYTE&&(J=s.RGB8I),z===s.SHORT&&(J=s.RGB16I),z===s.INT&&(J=s.RGB32I)),T===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),z===s.UNSIGNED_INT&&(J=s.RGBA32UI),z===s.BYTE&&(J=s.RGBA8I),z===s.SHORT&&(J=s.RGBA16I),z===s.INT&&(J=s.RGBA32I)),T===s.RGB&&(z===s.UNSIGNED_SHORT&&vt&&(J=vt.RGB16_EXT),z===s.SHORT&&vt&&(J=vt.RGB16_SNORM_EXT),z===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),T===s.RGBA){let j=ft?vo:ue.getTransfer(tt);z===s.FLOAT&&(J=s.RGBA32F),z===s.HALF_FLOAT&&(J=s.RGBA16F),z===s.UNSIGNED_BYTE&&(J=j===_e?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT&&vt&&(J=vt.RGBA16_EXT),z===s.SHORT&&vt&&(J=vt.RGBA16_SNORM_EXT),z===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function y(I,T){let z;return I?T===null||T===An||T===Hs?z=s.DEPTH24_STENCIL8:T===fn?z=s.DEPTH32F_STENCIL8:T===Ir&&(z=s.DEPTH24_STENCIL8,Tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===An||T===Hs?z=s.DEPTH_COMPONENT24:T===fn?z=s.DEPTH_COMPONENT32F:T===Ir&&(z=s.DEPTH_COMPONENT16),z}function S(I,T){return v(I)===!0||I.isFramebufferTexture&&I.minFilter!==ze&&I.minFilter!==Ie?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function A(I){let T=new WeakRef(I);n.get(I).__ref=T,p.add(T),x.register(I,T,T)}function E(I){let T=n.get(I).__ref;T!==void 0&&(p.delete(T),x.unregister(T))}function R(I){B(I.target)}function D(I){N(I.target)}function B(I){I.removeEventListener("dispose",R),E(I),G(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function N(I){I.removeEventListener("dispose",D),E(I),et(I)}function F(){for(let I of p){let T=I.deref();T!==void 0&&(T.isRenderTarget===!0?N(T):B(T))}p.clear(),u.clear()}function G(I){let T=n.get(I);if(T.__webglInit===void 0)return;let z=I.source,ct=f.get(z);if(ct){let tt=ct[T.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&H(I),Object.keys(ct).length===0&&f.delete(z)}n.remove(I)}function H(I){let T=n.get(I);s.deleteTexture(T.__webglTexture);let z=I.source,ct=f.get(z);delete ct[T.__cacheKey],o.memory.textures--}function et(I){let T=n.get(I);T.__depthDisposeCallback&&T.__depthDisposeCallback();let z=I.depthTexture;if(z&&z.renderTarget===I&&B(z),I.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(T.__webglFramebuffer[tt]))for(let ft=0;ft<T.__webglFramebuffer[tt].length;ft++)s.deleteFramebuffer(T.__webglFramebuffer[tt][ft]);else s.deleteFramebuffer(T.__webglFramebuffer[tt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[tt])}else{if(Array.isArray(T.__webglFramebuffer))for(let tt=0;tt<T.__webglFramebuffer.length;tt++)s.deleteFramebuffer(T.__webglFramebuffer[tt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let tt=0;tt<T.__webglColorRenderbuffer.length;tt++)T.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[tt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ct=I.textures;for(let tt=0,ft=ct.length;tt<ft;tt++){let vt=n.get(ct[tt]);vt.__webglTexture&&(s.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(ct[tt])}n.remove(I)}let V=0;function Z(){V=0}function st(){return V}function Et(I){V=I}function Ut(){let I=V;return I>=i.maxTextures&&Tt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+i.maxTextures),V+=1,I}function q(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.mipmapsAutoUpdate),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function Q(I,T){let z=n.get(I);if(I.isVideoTexture&&Kt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){let ct=I.image;if(ct===null)Tt("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)Tt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(z,I,T);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+T)}function lt(I,T){let z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){pt(z,I,T);return}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+T)}function At(I,T){let z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){pt(z,I,T);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+T)}function _t(I,T){let z=n.get(I);if(I.version>0&&z.__version!==I.version){Nt(z,I,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+T)}let Xt={[po]:s.REPEAT,[yn]:s.CLAMP_TO_EDGE,[mo]:s.MIRRORED_REPEAT},Me={[ze]:s.NEAREST,[ad]:s.NEAREST_MIPMAP_NEAREST,[Pr]:s.NEAREST_MIPMAP_LINEAR,[Ie]:s.LINEAR,[Ko]:s.LINEAR_MIPMAP_NEAREST,[ti]:s.LINEAR_MIPMAP_LINEAR},Ct={[Pp]:s.NEVER,[xd]:s.ALWAYS,[Ip]:s.LESS,[md]:s.LEQUAL,[Lp]:s.EQUAL,[gd]:s.GEQUAL,[Dp]:s.GREATER,[Np]:s.NOTEQUAL};function oe(I,T){if(T.type===fn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ie||T.magFilter===Ko||T.magFilter===Pr||T.magFilter===ti||T.minFilter===Ie||T.minFilter===Ko||T.minFilter===Pr||T.minFilter===ti)&&Tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Xt[T.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Xt[T.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Xt[T.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Me[T.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Me[T.minFilter]),T.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Ct[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ze||T.minFilter!==Pr&&T.minFilter!==ti||T.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function fe(I,T){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",R),A(T));let ct=T.source,tt=f.get(ct);tt===void 0&&(tt={},f.set(ct,tt));let ft=q(T);if(ft!==I.__cacheKey){tt[ft]===void 0&&(tt[ft]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),tt[ft].usedTimes++;let vt=tt[I.__cacheKey];vt!==void 0&&(tt[I.__cacheKey].usedTimes--,vt.usedTimes===0&&H(T)),I.__cacheKey=ft,I.__webglTexture=tt[ft].texture}return z}function rt(I,T,z){return Math.floor(Math.floor(I/z)/T)}function xt(I,T,z,ct){let ft=I.updateRanges;if(ft.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,z,ct,T.data);else{ft.sort((U,nt)=>U.start-nt.start);let vt=0;for(let U=1;U<ft.length;U++){let nt=ft[vt],K=ft[U],St=nt.start+nt.count,gt=rt(K.start,T.width,4),yt=rt(nt.start,T.width,4);K.start<=St+1&&gt===yt&&rt(K.start+K.count-1,T.width,4)===gt?nt.count=Math.max(nt.count,K.start+K.count-nt.start):(++vt,ft[vt]=K)}ft.length=vt+1;let J=e.getParameter(s.UNPACK_ROW_LENGTH),j=e.getParameter(s.UNPACK_SKIP_PIXELS),Mt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let U=0,nt=ft.length;U<nt;U++){let K=ft[U],St=Math.floor(K.start/4),gt=Math.ceil(K.count/4),yt=St%T.width,Yt=Math.floor(St/T.width),he=gt,ut=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Yt),e.texSubImage2D(s.TEXTURE_2D,0,yt,Yt,he,ut,z,ct,T.data)}I.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,J),e.pixelStorei(s.UNPACK_SKIP_PIXELS,j),e.pixelStorei(s.UNPACK_SKIP_ROWS,Mt)}}function pt(I,T,z){let ct=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ct=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ct=s.TEXTURE_3D);let tt=fe(I,T),ft=T.source;e.bindTexture(ct,I.__webglTexture,s.TEXTURE0+z);let vt=n.get(ft);if(ft.version!==vt.__version||tt===!0){if(e.activeTexture(s.TEXTURE0+z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ut=ue.getPrimaries(ue.workingColorSpace),$t=T.colorSpace===Di?null:ue.getPrimaries(T.colorSpace),ae=T.colorSpace===Di||ut===$t?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let j=_(T.image,!1,i.maxTextureSize);j=Pt(T,j);let Mt=r.convert(T.format,T.colorSpace),U=r.convert(T.type),nt=w(T.internalFormat,Mt,U,T.normalized,T.colorSpace,T.isVideoTexture);oe(ct,T);let K,St=T.mipmaps,gt=T.isVideoTexture!==!0,yt=vt.__version===void 0||tt===!0,Yt=ft.dataReady,he=S(T,j);if(T.isDepthTexture)nt=y(T.format===Ii,T.type),yt&&(gt?e.texStorage2D(s.TEXTURE_2D,1,nt,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,nt,j.width,j.height,0,Mt,U,null));else if(T.isDataTexture)if(St.length>0){gt&&yt&&e.texStorage2D(s.TEXTURE_2D,he,nt,St[0].width,St[0].height);for(let ut=0,$t=St.length;ut<$t;ut++)K=St[ut],gt?Yt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,K.width,K.height,Mt,U,K.data):e.texImage2D(s.TEXTURE_2D,ut,nt,K.width,K.height,0,Mt,U,K.data);T.generateMipmaps=!1}else gt?(yt&&e.texStorage2D(s.TEXTURE_2D,he,nt,j.width,j.height),Yt&&xt(T,j,Mt,U)):e.texImage2D(s.TEXTURE_2D,0,nt,j.width,j.height,0,Mt,U,j.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){gt&&yt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,he,nt,St[0].width,St[0].height,j.depth);for(let ut=0,$t=St.length;ut<$t;ut++)if(K=St[ut],T.format!==Sn)if(Mt!==null)if(gt){if(Yt)if(T.layerUpdates.size>0){let ae=yd(K.width,K.height,T.format,T.type);for(let It of T.layerUpdates){let Te=K.data.subarray(It*ae/K.data.BYTES_PER_ELEMENT,(It+1)*ae/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,It,K.width,K.height,1,Mt,Te)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,K.width,K.height,j.depth,Mt,K.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,nt,K.width,K.height,j.depth,0,K.data,0,0);else Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?Yt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,K.width,K.height,j.depth,Mt,U,K.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ut,nt,K.width,K.height,j.depth,0,Mt,U,K.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{gt&&yt&&e.texStorage2D(s.TEXTURE_2D,he,nt,St[0].width,St[0].height);for(let ut=0,$t=St.length;ut<$t;ut++)K=St[ut],T.format!==Sn?Mt!==null?gt?Yt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,K.width,K.height,Mt,K.data):e.compressedTexImage2D(s.TEXTURE_2D,ut,nt,K.width,K.height,0,K.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?Yt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,K.width,K.height,Mt,U,K.data):e.texImage2D(s.TEXTURE_2D,ut,nt,K.width,K.height,0,Mt,U,K.data)}else if(T.isDataArrayTexture)if(gt){if(yt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,he,nt,j.width,j.height,j.depth),Yt)if(T.layerUpdates.size>0){let ut=yd(j.width,j.height,T.format,T.type);for(let $t of T.layerUpdates){let ae=j.data.subarray($t*ut/j.data.BYTES_PER_ELEMENT,($t+1)*ut/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$t,j.width,j.height,1,Mt,U,ae)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Mt,U,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,j.width,j.height,j.depth,0,Mt,U,j.data);else if(T.isData3DTexture)gt?(yt&&e.texStorage3D(s.TEXTURE_3D,he,nt,j.width,j.height,j.depth),Yt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Mt,U,j.data)):e.texImage3D(s.TEXTURE_3D,0,nt,j.width,j.height,j.depth,0,Mt,U,j.data);else if(T.isFramebufferTexture){if(yt)if(gt)e.texStorage2D(s.TEXTURE_2D,he,nt,j.width,j.height);else{let ut=j.width,$t=j.height;for(let ae=0;ae<he;ae++)e.texImage2D(s.TEXTURE_2D,ae,nt,ut,$t,0,Mt,U,null),ut>>=1,$t>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let ut=s.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),j.parentNode!==ut){ut.appendChild(j),u.add(T),ut.onpaint=$t=>{let ae=$t.changedElements;for(let It of u)ae.includes(It.image)&&(It.needsUpdate=!0)},ut.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let ae=s.RGBA,It=s.RGBA,Te=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ae,It,Te,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(St.length>0){if(gt&&yt){let ut=Dt(St[0]);e.texStorage2D(s.TEXTURE_2D,he,nt,ut.width,ut.height)}for(let ut=0,$t=St.length;ut<$t;ut++)K=St[ut],gt?Yt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Mt,U,K):e.texImage2D(s.TEXTURE_2D,ut,nt,Mt,U,K);T.generateMipmaps=!1}else if(gt){if(yt){let ut=Dt(j);e.texStorage2D(s.TEXTURE_2D,he,nt,ut.width,ut.height)}Yt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,U,j)}else e.texImage2D(s.TEXTURE_2D,0,nt,Mt,U,j);v(T)&&T.mipmapsAutoUpdate===!0&&M(ct),vt.__version=ft.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Nt(I,T,z){if(T.image.length!==6)return;let ct=fe(I,T),tt=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+z);let ft=n.get(tt);if(tt.version!==ft.__version||ct===!0){e.activeTexture(s.TEXTURE0+z);let vt=ue.getPrimaries(ue.workingColorSpace),J=T.colorSpace===Di?null:ue.getPrimaries(T.colorSpace),j=T.colorSpace===Di||vt===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let Mt=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,nt=[];for(let It=0;It<6;It++)!Mt&&!U?nt[It]=_(T.image[It],!0,i.maxCubemapSize):nt[It]=U?T.image[It].image:T.image[It],nt[It]=Pt(T,nt[It]);let K=nt[0],St=r.convert(T.format,T.colorSpace),gt=r.convert(T.type),yt=w(T.internalFormat,St,gt,T.normalized,T.colorSpace),Yt=T.isVideoTexture!==!0,he=ft.__version===void 0||ct===!0,ut=tt.dataReady,$t=S(T,K);oe(s.TEXTURE_CUBE_MAP,T);let ae;if(T.isDepthTexture){if(yt=y(T.format===Ii,T.type),he)if(Yt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,yt,K.width,K.height);else for(let It=0;It<6;It++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,yt,K.width,K.height,0,St,gt,null)}else if(Mt){Yt&&he&&e.texStorage2D(s.TEXTURE_CUBE_MAP,$t,yt,K.width,K.height);for(let It=0;It<6;It++){ae=nt[It].mipmaps;for(let Te=0;Te<ae.length;Te++){let Je=ae[Te];T.format!==Sn?St!==null?Yt?ut&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,Te,0,0,Je.width,Je.height,St,Je.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,Te,yt,Je.width,Je.height,0,Je.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,Te,0,0,Je.width,Je.height,St,gt,Je.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,Te,yt,Je.width,Je.height,0,St,gt,Je.data)}}}else{if(ae=T.mipmaps,Yt&&he){ae.length>0&&$t++;let It=Dt(nt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,$t,yt,It.width,It.height)}for(let It=0;It<6;It++)if(U){Yt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,nt[It].width,nt[It].height,St,gt,nt[It].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,yt,nt[It].width,nt[It].height,0,St,gt,nt[It].data);for(let Te=0;Te<ae.length;Te++){let ds=ae[Te].image[It].image;Yt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,Te+1,0,0,ds.width,ds.height,St,gt,ds.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,Te+1,yt,ds.width,ds.height,0,St,gt,ds.data)}}else{Yt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,St,gt,nt[It]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,yt,St,gt,nt[It]);for(let Te=0;Te<ae.length;Te++){let Je=ae[Te];Yt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,Te+1,0,0,St,gt,Je.image[It]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,Te+1,yt,St,gt,Je.image[It])}}}v(T)&&T.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),ft.__version=tt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function mt(I,T,z,ct,tt,ft){let vt=r.convert(z.format,z.colorSpace),J=r.convert(z.type),j=w(z.internalFormat,vt,J,z.normalized,z.colorSpace),Mt=n.get(T),U=n.get(z);if(U.__renderTarget=T,!Mt.__hasExternalTextures){let nt=Math.max(1,T.width>>ft),K=Math.max(1,T.height>>ft);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,ft,j,nt,K,T.depth,0,vt,J,null):e.texImage2D(tt,ft,j,nt,K,0,vt,J,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),at(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,tt,U.__webglTexture,0,qt(T)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ct,tt,U.__webglTexture,ft),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(I,T,z){if(s.bindRenderbuffer(s.RENDERBUFFER,I),T.depthBuffer){let ct=T.depthTexture,tt=ct&&ct.isDepthTexture?ct.type:null,ft=y(T.stencilBuffer,tt),vt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;at(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt(T),ft,T.width,T.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt(T),ft,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ft,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,I)}else{let ct=T.textures;for(let tt=0;tt<ct.length;tt++){let ft=ct[tt],vt=r.convert(ft.format,ft.colorSpace),J=r.convert(ft.type),j=w(ft.internalFormat,vt,J,ft.normalized,ft.colorSpace);at(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt(T),j,T.width,T.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt(T),j,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,j,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(I,T,z){let ct=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(T.depthTexture);tt.__renderTarget=T;let ft=ct?T.depthTexture.image[0]:T.depthTexture.image;(!tt.__webglTexture||ft.width!==T.width||ft.height!==T.height)&&(ft.width=T.width,ft.height=T.height,T.depthTexture.needsUpdate=!0),ct?_t(T.depthTexture,0):Q(T.depthTexture,0);let vt=tt.__webglTexture,J=qt(T),j=ct?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,Mt=T.depthTexture.format===Ii?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===bi)at(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Mt,j,vt,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,Mt,j,vt,0);else if(T.depthTexture.format===Ii)at(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Mt,j,vt,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,Mt,j,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(I){let T=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let ct=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ct){let tt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ct.removeEventListener("dispose",tt)};ct.addEventListener("dispose",tt),T.__depthDisposeCallback=tt}T.__boundDepthTexture=ct}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(z)for(let ct=0;ct<6;ct++)kt(T.__webglFramebuffer[ct],I,ct);else I.texture.mipmaps.length>0?kt(T.__webglFramebuffer[0],I,0):kt(T.__webglFramebuffer,I,0);else if(z){T.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ct]),T.__webglDepthbuffer[ct]===void 0)T.__webglDepthbuffer[ct]=s.createRenderbuffer(),ee(T.__webglDepthbuffer[ct],I,!1);else{let tt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer[ct];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,ft)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ee(T.__webglDepthbuffer,I,!1);else{let tt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,ft)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function re(I,T,z){let ct=n.get(I);T!==void 0&&mt(ct.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&ce(I)}function k(I){let T=I.texture,z=n.get(I),ct=n.get(T);I.addEventListener("dispose",D),A(I);let tt=I.textures,ft=I.isWebGLCubeRenderTarget===!0,vt=tt.length>1;if(vt||(ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture()),ct.__version=T.version,o.memory.textures++),ft){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(T.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let j=0;j<T.mipmaps.length;j++)z.__webglFramebuffer[J][j]=s.createFramebuffer()}else z.__webglFramebuffer[J]=s.createFramebuffer()}else{if(T.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<T.mipmaps.length;J++)z.__webglFramebuffer[J]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(vt)for(let J=0,j=tt.length;J<j;J++){let Mt=n.get(tt[J]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&at(I)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<tt.length;J++){let j=tt[J];z.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[J]);let Mt=r.convert(j.format,j.colorSpace),U=r.convert(j.type),nt=w(j.internalFormat,Mt,U,j.normalized,j.colorSpace,I.isXRRenderTarget===!0),K=qt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,K,nt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,z.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),ee(z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){e.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),oe(s.TEXTURE_CUBE_MAP,T);for(let J=0;J<6;J++)if(T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)mt(z.__webglFramebuffer[J][j],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,j);else mt(z.__webglFramebuffer[J],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);v(T)?M(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(vt){for(let J=0,j=tt.length;J<j;J++){let Mt=tt[J],U=n.get(Mt),nt=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(nt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(nt,U.__webglTexture),oe(nt,Mt),mt(z.__webglFramebuffer,I,Mt,s.COLOR_ATTACHMENT0+J,nt,0),v(Mt)&&M(nt)}e.unbindTexture()}else{let J=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(J=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(J,ct.__webglTexture),oe(J,T),T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)mt(z.__webglFramebuffer[j],I,T,s.COLOR_ATTACHMENT0,J,j);else mt(z.__webglFramebuffer,I,T,s.COLOR_ATTACHMENT0,J,0);v(T)?M(J):T.mipmaps.length>0&&s.texParameteri(J,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&ce(I)}function L(I){let T=I.textures;for(let z=0,ct=T.length;z<ct;z++){let tt=T[z];if(v(tt)&&tt.mipmapsAutoUpdate===!0){let ft=b(I),vt=n.get(tt).__webglTexture;e.bindTexture(ft,vt),M(ft),e.unbindTexture()}}}let $=[];function ht(I){if(I.samples>0){if(at(I)===!1){let T=I.textures,z=I.width,ct=I.height,tt=s.COLOR_BUFFER_BIT,ft=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(I),J=T.length>1;if(J)for(let Mt=0;Mt<T.length;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Mt=0;Mt<T.length;Mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[Mt]);let U=n.get(T[Mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,U,0)}s.blitFramebuffer(0,0,z,ct,0,0,z,ct,tt,s.NEAREST),l===!0&&($.length=0,$.push(s.COLOR_ATTACHMENT0+Mt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&$.push(ft),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let Mt=0;Mt<T.length;Mt++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,vt.__webglColorRenderbuffer[Mt]);let U=n.get(T[Mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,U,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let T=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function qt(I){return Math.min(i.maxSamples,I.samples)}function at(I){let T=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Kt(I){let T=o.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function Pt(I,T){let z=I.colorSpace,ct=I.format,tt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==_o&&z!==Di&&(ue.getTransfer(z)===_e?(ct!==Sn||tt!==En)&&Tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",z)),T}function Dt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Ut,this.resetTextureUnits=Z,this.getTextureUnits=st,this.setTextureUnits=Et,this.setTexture2D=Q,this.setTexture2DArray=lt,this.setTexture3D=At,this.setTextureCube=_t,this.rebindTextures=re,this.setupRenderTarget=k,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=at,this.dispose=F}function Wx(s,t){function e(n,i=Di){let r,o=ue.getTransfer(i);if(n===En)return s.UNSIGNED_BYTE;if(n===Yl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Zl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===hd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ud)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ld)return s.BYTE;if(n===cd)return s.SHORT;if(n===Ir)return s.UNSIGNED_SHORT;if(n===ql)return s.INT;if(n===An)return s.UNSIGNED_INT;if(n===fn)return s.FLOAT;if(n===Ye)return s.HALF_FLOAT;if(n===dd)return s.ALPHA;if(n===fd)return s.RGB;if(n===Sn)return s.RGBA;if(n===bi)return s.DEPTH_COMPONENT;if(n===Ii)return s.DEPTH_STENCIL;if(n===$l)return s.RED;if(n===Jo)return s.RED_INTEGER;if(n===os)return s.RG;if(n===Kl)return s.RG_INTEGER;if(n===Jl)return s.RGBA_INTEGER;if(n===Qo||n===jo||n===ta||n===ea)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ql||n===jl||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nc||n===ic||n===sc||n===rc||n===oc||n===na||n===ac)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nc||n===ic)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===rc)return r.COMPRESSED_R11_EAC;if(n===oc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===na)return r.COMPRESSED_RG11_EAC;if(n===ac)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===_c||n===vc||n===yc||n===Mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_c)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sc||n===bc||n===wc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sc)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tc||n===Ec||n===ia||n===Ac)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}function HT(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,kp(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,_,v,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===pn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===pn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=t.get(g),v=_.envMap,M=_.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(kT.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xx),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=v*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function GT(s,t,e,n){let i={},r={};function o(_,v){let M=v.program;n.uniformBlockBinding(_,M,i[_.id])}function a(_,v){let M=i[_.id];M===void 0&&(p(_),M=l(_),i[_.id]=M,_.addEventListener("dispose",m));let b=v.program;n.updateUBOMapping(_,b);let w=t.render.frame;r[_.id]!==w&&(c(_),r[_.id]=w)}function l(_){let v=s.createBuffer(),M=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,M,b),s.bindBuffer(s.UNIFORM_BUFFER,null),v}function c(_){let v=i[_.id],M=_.uniforms,b=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,y=M.length;w<y;w++){let S=M[w];if(Array.isArray(S))for(let A=0,E=S.length;A<E;A++)h(S[A],w,A,b);else h(S,w,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(_,v,M,b){if(d(_,v,M,b)===!0){let w=_.__offset,y=_.value;if(Array.isArray(y)){let S=0;for(let A=0;A<y.length;A++){let E=y[A],R=x(E,!0);u(E,_.__data,S),S+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else u(y,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,_.__data)}}function u(_,v,M){typeof _=="number"||typeof _=="boolean"?v[M]=_:_.isMatrix3?(v[M]=_.elements[0],v[M+1]=_.elements[1],v[M+2]=_.elements[2],v[M+3]=0,v[M+4]=_.elements[3],v[M+5]=_.elements[4],v[M+6]=_.elements[5],v[M+7]=0,v[M+8]=_.elements[6],v[M+9]=_.elements[7],v[M+10]=_.elements[8],v[M+11]=0):ArrayBuffer.isView(_)?v.set(_.subarray(0,v.length-M),M):_.toArray(v,M)}function d(_,v,M,b){let w=_.value,y=v+"_"+M;if(Array.isArray(w)){b[y]===void 0&&(b[y]=[]);let S=b[y],A=!1;for(let E=0;E<w.length;E++)f(w[E],S,E)===!0&&(A=!0);return A}return f(w,b,y)}function f(_,v,M){if(v[M]===void 0)return typeof _=="number"||typeof _=="boolean"?v[M]=_:ArrayBuffer.isView(_)?v[M]=_.slice():v[M]=_.clone(),!0;{let b=v[M];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return v[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function p(_){let v=_.uniforms,M=0,b=16;for(let y=0,S=v.length;y<S;y++){let A=Array.isArray(v[y])?v[y]:[v[y]];for(let E=0,R=A.length;E<R;E++){let D=A[E],B=Array.isArray(D.value)?D.value:[D.value],N=Array.isArray(v[y])||Array.isArray(D.value),F=M;for(let H=0,et=B.length;H<et;H++){let V=B[H],Z=x(V,N),st=M%b,Et=st%Z.boundary,Ut=st+Et;M+=Et,Ut!==0&&b-Ut<Z.storage&&(M+=b-Ut),H===0&&(F=M),M+=Z.storage}let G=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new G((M-F)/Float32Array.BYTES_PER_ELEMENT),D.__offset=F}}let w=M%b;return w>0&&(M+=b-w),_.__size=M,_.__cache={},this}function x(_,v){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?Tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Tt("WebGLRenderer: Unsupported uniform value type.",_),v===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(_){let v=_.target;v.removeEventListener("dispose",m),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function g(){for(let _ in i)s.deleteBuffer(i[_]);i={},r={}}return{bind:o,update:a,dispose:g}}function WT(){return Ui===null&&(Ui=new Mn(VT,16,16,os,Ye),Ui.name="DFG_LUT",Ui.minFilter=Ie,Ui.magFilter=Ie,Ui.wrapS=yn,Ui.wrapT=yn,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}var lM,cM,hM,uM,dM,fM,pM,mM,gM,xM,_M,vM,yM,MM,SM,bM,wM,TM,EM,AM,CM,RM,PM,IM,LM,DM,NM,UM,FM,OM,BM,zM,kM,HM,GM,VM,WM,XM,qM,YM,ZM,$M,KM,JM,QM,jM,tS,eS,nS,iS,sS,rS,oS,aS,lS,cS,hS,uS,dS,fS,pS,mS,gS,xS,_S,vS,yS,MS,SS,bS,wS,TS,ES,AS,CS,RS,PS,IS,LS,DS,NS,US,FS,OS,BS,zS,kS,HS,GS,VS,WS,XS,qS,YS,ZS,$S,KS,JS,QS,jS,tb,eb,nb,ib,sb,rb,ob,ab,lb,cb,hb,ub,db,fb,pb,mb,gb,xb,_b,vb,yb,Mb,Sb,bb,wb,Tb,Eb,Ab,Cb,Rb,Pb,Ib,Lb,Db,Nb,Ub,Fb,Ob,Bb,zb,kb,le,Rt,xi,Md,Hb,Ux,ra,fx,Yb,Zb,Fx,Ox,$b,Kb,Jb,_i,lw,Bx,zx,kx,Hx,Gx,Vx,xx,_x,vx,yx,Mx,Qp,jp,tm,Kp,sa,Jw,Qw,wx,nT,Sd,lT,hT,dT,pT,gT,vT,nm,im,AT,IT,LT,DT,NT,Dx,Pc,Jp,BT,zT,sm,rm,kT,Xx,VT,Ui,Lc,we=ne(()=>{$p();$p();lM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cM=`#ifdef USE_ALPHAHASH
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
#endif`,hM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
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
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gM=`#ifdef USE_BATCHING
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
#endif`,xM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MM=`#ifdef USE_IRIDESCENCE
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
#endif`,SM=`#ifdef USE_BUMPMAP
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
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,CM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,RM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,PM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,IM=`#define PI 3.141592653589793
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
} // validated`,LM=`vec3 transformedNormal = objectNormal;
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
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OM="gl_FragColor = linearToOutputTexel( gl_FragColor );",BM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zM=`#ifdef USE_ENVMAP
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
#endif`,kM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,WM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZM=`#ifdef USE_GRADIENTMAP
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
}`,$M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jM=`#ifdef USE_ENVMAP
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
#endif`,tS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sS=`PhysicalMaterial material;
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
#endif`,rS=`uniform sampler2D dfgLUT;
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
}`,oS=`
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
#endif`,aS=`#if defined( RE_IndirectDiffuse )
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
#endif`,lS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cS=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,hS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xS=`#if defined( USE_POINTS_UV )
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
#endif`,_S=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MS=`#if defined( USE_MORPHCOLORS )
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
#endif`,SS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bS=`#ifdef USE_MORPHTARGETS
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
#endif`,wS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ES=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,PS=`#ifdef USE_NORMALMAP
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
#endif`,IS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,US=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qS=`float getShadowMask() {
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
}`,YS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZS=`#ifdef USE_SKINNING
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
#endif`,$S=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KS=`#ifdef USE_SKINNING
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
#endif`,JS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eb=`#ifdef USE_TRANSMISSION
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
#endif`,nb=`#ifdef USE_TRANSMISSION
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
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lb=`uniform sampler2D t2D;
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
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`uniform float backgroundBlurriness;
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`#include <common>
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
}`,pb=`#if DEPTH_PACKING == 3200
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
}`,mb=`#define DISTANCE
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
}`,gb=`#define DISTANCE
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
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`uniform float scale;
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
}`,yb=`uniform vec3 diffuse;
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
}`,Mb=`#include <common>
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
}`,Sb=`uniform vec3 diffuse;
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
}`,bb=`#define LAMBERT
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
}`,wb=`#define LAMBERT
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
}`,Tb=`#define MATCAP
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
}`,Eb=`#define MATCAP
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
}`,Ab=`#define NORMAL
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
}`,Cb=`#define NORMAL
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
}`,Rb=`#define PHONG
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
}`,Pb=`#define PHONG
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
}`,Ib=`#define STANDARD
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
}`,Lb=`#define STANDARD
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
}`,Db=`#define TOON
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
}`,Nb=`#define TOON
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
}`,Ub=`uniform float size;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Ob=`#include <common>
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
}`,Bb=`uniform vec3 color;
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
}`,zb=`uniform float rotation;
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
}`,kb=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:lM,alphahash_pars_fragment:cM,alphamap_fragment:hM,alphamap_pars_fragment:uM,alphatest_fragment:dM,alphatest_pars_fragment:fM,aomap_fragment:pM,aomap_pars_fragment:mM,batching_pars_vertex:gM,batching_vertex:xM,begin_vertex:_M,beginnormal_vertex:vM,bsdfs:yM,iridescence_fragment:MM,bumpmap_pars_fragment:SM,clipping_planes_fragment:bM,clipping_planes_pars_fragment:wM,clipping_planes_pars_vertex:TM,clipping_planes_vertex:EM,color_fragment:AM,color_pars_fragment:CM,color_pars_vertex:RM,color_vertex:PM,common:IM,defaultnormal_vertex:LM,displacementmap_pars_vertex:DM,displacementmap_vertex:NM,emissivemap_fragment:UM,emissivemap_pars_fragment:FM,colorspace_fragment:OM,colorspace_pars_fragment:BM,envmap_fragment:zM,envmap_common_pars_fragment:kM,envmap_pars_fragment:HM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:jM,envmap_vertex:VM,fog_vertex:WM,fog_pars_vertex:XM,fog_fragment:qM,fog_pars_fragment:YM,gradientmap_pars_fragment:ZM,lightmap_pars_fragment:$M,lights_lambert_fragment:KM,lights_lambert_pars_fragment:JM,lights_pars_begin:QM,lights_toon_fragment:tS,lights_toon_pars_fragment:eS,lights_phong_fragment:nS,lights_phong_pars_fragment:iS,lights_physical_fragment:sS,lights_physical_pars_fragment:rS,lights_fragment_begin:oS,lights_fragment_maps:aS,lights_fragment_end:lS,lightprobes_pars_fragment:cS,logdepthbuf_fragment:hS,logdepthbuf_pars_fragment:uS,logdepthbuf_pars_vertex:dS,logdepthbuf_vertex:fS,map_fragment:pS,map_pars_fragment:mS,map_particle_fragment:gS,map_particle_pars_fragment:xS,metalnessmap_fragment:_S,metalnessmap_pars_fragment:vS,morphinstance_vertex:yS,morphcolor_vertex:MS,morphnormal_vertex:SS,morphtarget_pars_vertex:bS,morphtarget_vertex:wS,normal_fragment_begin:TS,normal_fragment_maps:ES,normal_pars_fragment:AS,normal_pars_vertex:CS,normal_vertex:RS,normalmap_pars_fragment:PS,clearcoat_normal_fragment_begin:IS,clearcoat_normal_fragment_maps:LS,clearcoat_pars_fragment:DS,iridescence_pars_fragment:NS,opaque_fragment:US,packing:FS,premultiplied_alpha_fragment:OS,project_vertex:BS,dithering_fragment:zS,dithering_pars_fragment:kS,roughnessmap_fragment:HS,roughnessmap_pars_fragment:GS,shadowmap_pars_fragment:VS,shadowmap_pars_vertex:WS,shadowmap_vertex:XS,shadowmask_pars_fragment:qS,skinbase_vertex:YS,skinning_pars_vertex:ZS,skinning_vertex:$S,skinnormal_vertex:KS,specularmap_fragment:JS,specularmap_pars_fragment:QS,tonemapping_fragment:jS,tonemapping_pars_fragment:tb,transmission_fragment:eb,transmission_pars_fragment:nb,uv_pars_fragment:ib,uv_pars_vertex:sb,uv_vertex:rb,worldpos_vertex:ob,background_vert:ab,background_frag:lb,backgroundCube_vert:cb,backgroundCube_frag:hb,cube_vert:ub,cube_frag:db,depth_vert:fb,depth_frag:pb,distance_vert:mb,distance_frag:gb,equirect_vert:xb,equirect_frag:_b,linedashed_vert:vb,linedashed_frag:yb,meshbasic_vert:Mb,meshbasic_frag:Sb,meshlambert_vert:bb,meshlambert_frag:wb,meshmatcap_vert:Tb,meshmatcap_frag:Eb,meshnormal_vert:Ab,meshnormal_frag:Cb,meshphong_vert:Rb,meshphong_frag:Pb,meshphysical_vert:Ib,meshphysical_frag:Lb,meshtoon_vert:Db,meshtoon_frag:Nb,points_vert:Ub,points_frag:Fb,shadow_vert:Ob,shadow_frag:Bb,sprite_vert:zb,sprite_frag:kb},Rt={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},xi={basic:{uniforms:mn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:mn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:mn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:mn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:mn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new ot(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:mn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:mn([Rt.points,Rt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:mn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:mn([Rt.common,Rt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:mn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:mn([Rt.sprite,Rt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:mn([Rt.common,Rt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:mn([Rt.lights,Rt.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};xi.physical={uniforms:mn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};Md={r:0,b:0,g:0},Hb=new Ot,Ux=new te;Ux.set(-1,0,0,0,1,0,0,0,1);ra=class extends Le{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ts(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ye(5,5,5),r=new He({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Ci});r.uniforms.tEquirect.value=e;let o=new Jt(i,r),a=e.minFilter;return e.minFilter===ti&&(e.minFilter=Ie),new Er(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},fx=256,Yb=3,Zb=20,Fx=256,Ox=16,$b=3,Kb=new P,Jb=new ot,_i=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Er(1,10,null),this._boxMesh=new Jt(new ye(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=Kb}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Jb));let m=new Er(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(fx,Op(t))}_fromTexture(t,e){t.mapping===Pi||t.mapping===ks?this._setSize(t.image.length===0?fx:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=px(t,!1,!1),n=Math.log2(t)-Yb;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=px(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Pi||t.mapping===ks?(this._cubemapMaterial===null&&(this._cubemapMaterial=gx()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=mx()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Qb(),this._integrationMaterial=jb());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Ox);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-$b)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Fx*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=tw());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};lw={[Us]:"LINEAR_TONE_MAPPING",[Fs]:"REINHARD_TONE_MAPPING",[Os]:"CINEON_TONE_MAPPING",[Ri]:"ACES_FILMIC_TONE_MAPPING",[Bs]:"AGX_TONE_MAPPING",[zs]:"NEUTRAL_TONE_MAPPING",[Yo]:"CUSTOM_TONE_MAPPING"};Bx=new ke,zx=new Qn(1,1),kx=new Ro(1),Hx=new dr,Gx=new fr,Vx=new Ts,xx=[],_x=[],vx=new Float32Array(16),yx=new Float32Array(9),Mx=new Float32Array(4);Qp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rw(e.type)}},jp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$w(e.type)}},tm=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Kp=/(\w+)(\])?(\[|\.)?/g;sa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Kw(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};Jw=37297,Qw=0;wx=new te;nT={[Us]:"Linear",[Fs]:"Reinhard",[Os]:"Cineon",[Ri]:"ACESFilmic",[Bs]:"AgX",[zs]:"Neutral",[Yo]:"Custom"};Sd=new P;lT=/^[ \t]*#include +<([\w\d./]+)>/gm;hT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;dT={[Ls]:"SHADOWMAP_TYPE_PCF",[Cr]:"SHADOWMAP_TYPE_VSM"};pT={[ks]:"ENVMAP_MODE_REFRACTION"};gT={[qo]:"ENVMAP_BLENDING_MULTIPLY",[_p]:"ENVMAP_BLENDING_MIX",[vp]:"ENVMAP_BLENDING_ADD"};vT=0,nm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new im(t),e.set(t,n)),n}},im=class{constructor(t){this.id=vT++,this.code=t,this.usedTimes=0}};AT=0;IT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LT=`uniform sampler2D shadow_pass;
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
}`,DT=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],NT=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Dx=new Ot,Pc=new P,Jp=new P;BT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zT=`
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

}`,sm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Po(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new He({vertexShader:BT,fragmentShader:zT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rm=class extends Fn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new sm,g={},_=e.getContextAttributes(),v=null,M=null,b=[],w=[],y=new it,S=null,A=null,E=new Ue;E.viewport=new de;let R=new Ue;R.viewport=new de;let D=[E,R],B=new kl,N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=b[q];return Q===void 0&&(Q=new mr,b[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=b[q];return Q===void 0&&(Q=new mr,b[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=b[q];return Q===void 0&&(Q=new mr,b[q]=Q),Q.getHandSpace()};function G(q){let Q=w.indexOf(q.inputSource);if(Q===-1)return;let lt=b[Q];lt!==void 0&&(lt.update(q.inputSource,q.frame,c||o),lt.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",et);for(let q=0;q<b.length;q++){let Q=w[q];Q!==null&&(w[q]=null,b[q].disconnect(Q))}N=null,F=null,m.reset();for(let q in g)delete g[q];if(t.setRenderTarget(v),f=null,d=null,u=null,i=null,M=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(y.width,y.height,!1),A!==null){let q=A.camera;q.fov=A.fov,q.zoom=A.zoom,q.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(v=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",H),i.addEventListener("inputsourceschange",et),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,At=null,_t=null;_.depth&&(_t=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=_.stencil?Ii:bi,At=_.stencil?Hs:An);let Xt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Xt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Le(d.textureWidth,d.textureHeight,{format:Sn,type:En,depthTexture:new Qn(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let lt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,lt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Le(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ut.setContext(i),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(q){for(let Q=0;Q<q.removed.length;Q++){let lt=q.removed[Q],At=w.indexOf(lt);At>=0&&(w[At]=null,b[At].disconnect(lt))}for(let Q=0;Q<q.added.length;Q++){let lt=q.added[Q],At=w.indexOf(lt);if(At===-1){for(let Xt=0;Xt<b.length;Xt++)if(Xt>=w.length){w.push(lt),At=Xt;break}else if(w[Xt]===null){w[Xt]=lt,At=Xt;break}if(At===-1)break}let _t=b[At];_t&&_t.connect(lt)}}function V(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,lt=q.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(lt=m.depthFar)),B.near=R.near=E.near=Q,B.far=R.far=E.far=lt,(N!==B.near||F!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,F=B.far),B.layers.mask=q.layers.mask|6,E.layers.mask=B.layers.mask&-5,R.layers.mask=B.layers.mask&-3;let At=q.parent,_t=B.cameras;V(B,At);for(let Xt=0;Xt<_t.length;Xt++)V(_t[Xt],At);B.projectionMatrix.copy(E.projectionMatrix),B.projectionMatrixInverse.copy(E.projectionMatrixInverse),A===null&&q.isPerspectiveCamera&&(A={camera:q,fov:q.fov,zoom:q.zoom}),Z(q,B,At)};function Z(q,Q,lt){lt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(lt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ur*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(q){return g[q]};let st=null;function Et(q,Q){if(h=Q.getViewerPose(c||o),p=Q,h!==null){let lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let At=!1;lt.length!==B.cameras.length&&(B.cameras.length=0,At=!0);for(let Ct=0;Ct<lt.length;Ct++){let oe=lt[Ct],fe=null;if(f!==null)fe=f.getViewport(oe);else{let xt=u.getViewSubImage(d,oe);fe=xt.viewport,Ct===0&&(t.setRenderTargetTextures(M,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(M))}let rt=D[Ct];rt===void 0&&(rt=new Ue,rt.layers.enable(Ct),rt.viewport=new de,D[Ct]=rt),rt.matrix.fromArray(oe.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(oe.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(fe.x,fe.y,fe.width,fe.height),Ct===0&&(B.matrix.copy(rt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),At===!0&&B.cameras.push(rt)}let _t=i.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Ct=u.getDepthInformation(lt[0]);Ct&&Ct.isValid&&Ct.texture&&m.init(Ct,i.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Ct=0;Ct<lt.length;Ct++){let oe=lt[Ct].camera;if(oe){let fe=g[oe];fe||(fe=new Po,g[oe]=fe);let rt=u.getCameraImage(oe);fe.sourceTexture=rt}}}}for(let lt=0;lt<b.length;lt++){let At=w[lt],_t=b[lt];At!==null&&_t!==void 0&&_t.update(At,Q,c||o)}st&&st(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}let Ut=new Nx;Ut.setAnimationLoop(Et),this.setAnimationLoop=function(q){st=q},this.dispose=function(){}}},kT=new Ot,Xx=new te;Xx.set(-1,0,0,0,1,0,0,0,1);VT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ui=null;Lc=class{constructor(t={}){let{canvas:e=Up(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=En}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Jl,Kl,Jo]),g=new Set([En,An,Ir,Hs,Yl,Zl]),_=new Uint32Array(4),v=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},b=null,w=null,y=[],S=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,R=!1,D=null,B=null,N=null,F=null;this._outputColorSpace=rn;let G=0,H=0,et=null,V=-1,Z=null,st=new de,Et=new de,Ut=null,q=new ot(0),Q=0,lt=e.width,At=e.height,_t=1,Xt=null,Me=null,Ct=new de(0,0,lt,At),oe=new de(0,0,lt,At),fe=!1,rt=new wi,xt=new Ao,pt=!1,Nt=!1,mt=new Ot,ee=new P,kt=new de,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function k(){return et===null?_t:1}let L=n;function $(C,O){return e.getContext(C,O)}let ht,qt,at,Kt,Pt,Dt,I,T,z,ct,tt,ft,vt,J,j,Mt,U,nt,K,St,gt,yt,Yt;try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",$t,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",It,!1),L===null){let O="webgl2";if(L=$(O,C),L===null)throw $(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}he()}catch(C){throw e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",It,!1),Wt("WebGLRenderer: "+C.message),C}function he(){ht=new nw(L),ht.init(),gt=new Wx(L,ht),qt=new Xb(L,ht,t,gt),at=new FT(L,ht),qt.reversedDepthBuffer&&d&&at.buffers.depth.setReversed(!0),B=L.createFramebuffer(),N=L.createFramebuffer(),F=L.createFramebuffer(),Kt=new rw(L),Pt=new ST,Dt=new OT(L,ht,at,Pt,qt,gt,Kt),I=new ew(E),T=new aM(L),yt=new Vb(L,T),z=new iw(L,T,Kt,yt),ct=new aw(L,z,T,yt,Kt),nt=new ow(L,qt,Dt),j=new qb(Pt),tt=new MT(E,I,ht,qt,yt,j),ft=new HT(E,Pt),vt=new wT,J=new PT(ht),U=new Gb(E,I,at,ct,p,l),Mt=new UT(E,ct,qt),Yt=new GT(L,Kt,qt,at),K=new Wb(L,ht,Kt),St=new sw(L,ht,Kt),Kt.programs=tt.programs,E.capabilities=qt,E.extensions=ht,E.properties=Pt,E.renderLists=vt,E.shadowMap=Mt,E.state=at,E.info=Kt}x!==En&&(A=new cw(x,e.width,e.height,a,i,r));let ut=new rm(E,L);this.xr=ut,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let C=ht.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ht.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(C){C!==void 0&&(_t=C,this.setSize(lt,At,!1))},this.getSize=function(C){return C.set(lt,At)},this.setSize=function(C,O,Y=!0){if(ut.isPresenting){Tt("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=C,At=O,e.width=Math.floor(C*_t),e.height=Math.floor(O*_t),Y===!0&&(e.style.width=C+"px",e.style.height=O+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set(lt*_t,At*_t).floor()},this.setDrawingBufferSize=function(C,O,Y){lt=C,At=O,_t=Y,e.width=Math.floor(C*Y),e.height=Math.floor(O*Y),this.setViewport(0,0,C,O)},this.setEffects=function(C){if(x===En){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let O=0;O<C.length;O++)if(C[O].isOutputPass===!0){Tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(st)},this.getViewport=function(C){return C.copy(Ct)},this.setViewport=function(C,O,Y,W){C.isVector4?Ct.set(C.x,C.y,C.z,C.w):Ct.set(C,O,Y,W),at.viewport(st.copy(Ct).multiplyScalar(k()).round())},this.getScissor=function(C){return C.copy(oe)},this.setScissor=function(C,O,Y,W){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,O,Y,W),at.scissor(Et.copy(oe).multiplyScalar(k()).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(C){at.setScissorTest(fe=C)},this.setOpaqueSort=function(C){Xt=C},this.setTransparentSort=function(C){Me=C},this.getClearColor=function(C){return C.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(C=!0,O=!0,Y=!0){let W=0;if(C){let X=!1;if(et!==null){let wt=et.texture.format;X=m.has(wt)}if(X){let wt=et.texture.type,Ft=g.has(wt),bt=U.getClearColor(),Lt=U.getClearAlpha(),Gt=bt.r,se=bt.g,me=bt.b;Ft?(_[0]=Gt,_[1]=se,_[2]=me,_[3]=Lt,L.clearBufferuiv(L.COLOR,0,_)):(v[0]=Gt,v[1]=se,v[2]=me,v[3]=Lt,L.clearBufferiv(L.COLOR,0,v))}else W|=L.COLOR_BUFFER_BIT}O&&(W|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),D=C},this.dispose=function(){e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",It,!1),U.dispose(),vt.dispose(),J.dispose(),Dt.dispose(),Pt.dispose(),I.dispose(),ct.dispose(),z.dispose(),yt.dispose(),Yt.dispose(),tt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Om),ut.removeEventListener("sessionend",Bm),Zs.stop()};function $t(C){C.preventDefault(),Mo("WebGLRenderer: Context Lost."),R=!0}function ae(){Mo("WebGLRenderer: Context Restored."),R=!1;let C=Kt.autoReset,O=Mt.enabled,Y=Mt.autoUpdate,W=Mt.needsUpdate,X=Mt.type;he(),Kt.autoReset=C,Mt.enabled=O,Mt.autoUpdate=Y,Mt.needsUpdate=W,Mt.type=X}function It(C){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Te(C){let O=C.target;O.removeEventListener("dispose",Te),Je(O)}function Je(C){ds(C),Pt.remove(C)}function ds(C){let O=Pt.get(C).programs;O!==void 0&&(O.forEach(function(Y){tt.releaseProgram(Y)}),C.isShaderMaterial&&tt.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,Y,W,X,wt){O===null&&(O=ce);let Ft=X.isMesh&&X.matrixWorld.determinantAffine()<0,bt=ly(C,O,Y,W,X);at.setMaterial(W,Ft);let Lt=Y.index,Gt=1;if(W.wireframe===!0){if(Lt=z.getWireframeAttribute(Y),Lt===void 0)return;Gt=2}let se=Y.drawRange,me=Y.attributes.position,Bt=se.start*Gt,ge=(se.start+se.count)*Gt;wt!==null&&(Bt=Math.max(Bt,wt.start*Gt),ge=Math.min(ge,(wt.start+wt.count)*Gt)),Lt!==null?(Bt=Math.max(Bt,0),ge=Math.min(ge,Lt.count)):me!=null&&(Bt=Math.max(Bt,0),ge=Math.min(ge,me.count));let We=ge-Bt;if(We<0||We===1/0)return;yt.setup(X,W,bt,Y,Lt);let Ce,Ae=K;if(Lt!==null&&(Ce=T.get(Lt),Ae=St,Ae.setIndex(Ce)),X.isMesh)W.wireframe===!0?(at.setLineWidth(W.wireframeLinewidth*k()),Ae.setMode(L.LINES)):Ae.setMode(L.TRIANGLES);else if(X.isLine){let an=W.linewidth;an===void 0&&(an=1),at.setLineWidth(an*k()),X.isLineSegments?Ae.setMode(L.LINES):X.isLineLoop?Ae.setMode(L.LINE_LOOP):Ae.setMode(L.LINE_STRIP)}else X.isPoints?Ae.setMode(L.POINTS):X.isSprite&&Ae.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Ae.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let an=X._multiDrawStarts,zt=X._multiDrawCounts,_n=X._multiDrawCount,Se=Lt?T.get(Lt).bytesPerElement:1,$s=Pt.get(W).currentProgram.getUniforms();for(let ln=0;ln<_n;ln++)$s.setValue(L,"_gl_DrawID",ln),Ae.render(an[ln]/Se,zt[ln])}else if(X.isInstancedMesh)Ae.renderInstances(Bt,We,X.count);else if(Y.isInstancedBufferGeometry){let an=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,zt=Math.min(Y.instanceCount,an);Ae.renderInstances(Bt,We,zt)}else Ae.render(Bt,We)};function Fm(C,O,Y,W){D!==null&&C.isNodeMaterial&&D.setObject(W,C),pt===!0&&j.setState(C,Y,!1),C.transparent===!0&&C.side===nn&&C.forceSinglePass===!1?(C.side=pn,C.needsUpdate=!0,va(C,O,W),C.side=rs,C.needsUpdate=!0,va(C,O,W),C.side=nn):va(C,O,W)}this.compile=function(C,O,Y=null){Y===null&&(Y=C),D!==null&&D.renderStart(C,O,Y),w=J.get(Y),w.init(O),S.push(w),Y.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),C!==Y&&C.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),Nt=this.localClippingEnabled,pt=j.init(this.clippingPlanes,Nt),pt===!0&&j.setGlobalState(this.clippingPlanes,O),D!==null&&Mt.render(w.state.shadowsArray,Y,O);let W=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let wt=X.material;if(wt)if(Array.isArray(wt))for(let Ft=0;Ft<wt.length;Ft++){let bt=wt[Ft];Fm(bt,Y,O,X),W.add(bt)}else Fm(wt,Y,O,X),W.add(wt)}),w=S.pop(),D!==null&&D.renderEnd(),W},this.compileAsync=function(C,O,Y=null){let W=this.compile(C,O,Y);return new Promise(X=>{function wt(){if(W.forEach(function(Ft){let Lt=Pt.get(Ft).currentProgram;(Lt===void 0||Lt.isReady())&&W.delete(Ft)}),W.size===0){X(C);return}setTimeout(wt,10)}ht.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Qd=null;function oy(C){Qd&&Qd(C)}function Om(){Zs.stop()}function Bm(){Zs.start()}let Zs=new Nx;Zs.setAnimationLoop(oy),typeof self<"u"&&Zs.setContext(self),this.setAnimationLoop=function(C){Qd=C,ut.setAnimationLoop(C),C===null?Zs.stop():Zs.start()},ut.addEventListener("sessionstart",Om),ut.addEventListener("sessionend",Bm),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(C,O);let Y=ut.enabled===!0&&ut.isPresenting===!0,W=A!==null&&(et===null||Y)&&A.begin(E,et);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(O),O=ut.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,O,et),w=J.get(C,S.length),w.init(O),w.state.textureUnits=Dt.getTextureUnits(),S.push(w),mt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?xt.setFromArrayCamera(O):rt.setFromProjectionMatrix(mt,Un,O.reversedDepth),Nt=this.localClippingEnabled,pt=j.init(this.clippingPlanes,Nt),b=vt.get(C,y.length),b.init(),y.push(b),this.info.render.frame++,ut.enabled===!0&&ut.isPresenting===!0){let Ft=E.xr.getDepthSensingMesh();Ft!==null&&jd(Ft,O,-1/0,E.sortObjects)}jd(C,O,0,E.sortObjects),b.finish(),D!==null&&D.updateLights(w.state.lightsArray),E.sortObjects===!0&&b.sort(Xt,Me),re=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,re&&U.addToRenderList(b,C),this.info.autoReset===!0&&this.info.reset(),pt===!0&&j.beginShadows();let X=w.state.shadowsArray;if(Mt.render(X,C,O),pt===!0&&j.endShadows(),(W&&A.hasRenderPass())===!1){let Ft=b.opaque,bt=b.transmissive;if(w.setupLights(),O.isArrayCamera){let Lt=O.cameras;if(bt.length>0)for(let Gt=0,se=Lt.length;Gt<se;Gt++){let me=Lt[Gt];km(Ft,bt,C,me)}re&&U.render(C);for(let Gt=0,se=Lt.length;Gt<se;Gt++){let me=Lt[Gt];zm(b,C,me,me.viewport)}}else bt.length>0&&km(Ft,bt,C,O),re&&U.render(C),zm(b,C,O)}et!==null&&H===0&&(Dt.updateMultisampleRenderTarget(et),Dt.updateRenderTargetMipmap(et)),W&&A.end(E),C.isScene===!0&&C.onAfterRender(E,C,O),yt.resetDefaultState(),V=-1,Z=null,S.pop(),S.length>0?(w=S[S.length-1],Dt.setTextureUnits(w.state.textureUnits),pt===!0&&j.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,y.pop(),y.length>0?b=y[y.length-1]:b=null,D!==null&&D.renderEnd()};function jd(C,O,Y,W){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLight)w.pushLight(C),C.castShadow&&w.pushShadow(C);else if(C.isSprite){let Ft=O.isArrayCamera?xt:rt;if(!C.frustumCulled||C.intersectsFrustum(Ft)){W&&kt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(mt);let bt=ct.update(C),Lt=C.material;Lt.visible&&b.push(C,bt,Lt,Y,kt.z,null,O)}}else if(C.isMesh||C.isLine||C.isPoints){let Ft=O.isArrayCamera?xt:rt;if(!C.frustumCulled||C.intersectsFrustum(Ft)){let bt=ct.update(C),Lt=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),kt.copy(C.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),kt.copy(bt.boundingSphere.center)),kt.applyMatrix4(C.matrixWorld).applyMatrix4(mt)),Array.isArray(Lt)){let Gt=bt.groups;for(let se=0,me=Gt.length;se<me;se++){let Bt=Gt[se],ge=Lt[Bt.materialIndex];ge&&ge.visible&&b.push(C,bt,ge,Y,kt.z,Bt,O)}}else Lt.visible&&b.push(C,bt,Lt,Y,kt.z,null,O)}}}let wt=C.children;for(let Ft=0,bt=wt.length;Ft<bt;Ft++)jd(wt[Ft],O,Y,W)}function zm(C,O,Y,W){let{opaque:X,transmissive:wt,transparent:Ft}=C;w.setupLightsView(Y),pt===!0&&j.setGlobalState(E.clippingPlanes,Y),W&&at.viewport(st.copy(W)),X.length>0&&th(X,O,Y),wt.length>0&&th(wt,O,Y),Ft.length>0&&th(Ft,O,Y),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function km(C,O,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){let Bt=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new Le(1,1,{generateMipmaps:!0,type:Bt?Ye:En,minFilter:ti,samples:Math.max(4,qt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let wt=w.state.transmissionRenderTarget[W.id],Ft=W.viewport||st;wt.setSize(Ft.z*E.transmissionResolutionScale,Ft.w*E.transmissionResolutionScale);let bt=E.getRenderTarget(),Lt=E.getActiveCubeFace(),Gt=E.getActiveMipmapLevel();E.setRenderTarget(wt),E.getClearColor(q),Q=E.getClearAlpha(),Q<1&&E.setClearColor(16777215,.5),E.clear(),re&&U.render(Y);let se=E.toneMapping;E.toneMapping=Xn;let me=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),pt===!0&&j.setGlobalState(E.clippingPlanes,W),th(C,Y,W),Dt.updateMultisampleRenderTarget(wt),Dt.updateRenderTargetMipmap(wt),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let ge=0,We=O.length;ge<We;ge++){let Ce=O[ge],{object:Ae,geometry:an,material:zt,group:_n}=Ce;if(zt.side===nn&&Ae.layers.test(W.layers)){let Se=zt.side;zt.side=pn,zt.needsUpdate=!0,Hm(Ae,Y,W,an,zt,_n),zt.side=Se,zt.needsUpdate=!0,Bt=!0}}Bt===!0&&(Dt.updateMultisampleRenderTarget(wt),Dt.updateRenderTargetMipmap(wt))}E.setRenderTarget(bt,Lt,Gt),E.setClearColor(q,Q),me!==void 0&&(W.viewport=me),E.toneMapping=se}function th(C,O,Y){let W=O.isScene===!0?O.overrideMaterial:null;for(let X=0,wt=C.length;X<wt;X++){let Ft=C[X],{object:bt,geometry:Lt,group:Gt}=Ft,se=Ft.material;se.allowOverride===!0&&W!==null&&(se=W),bt.layers.test(Y.layers)&&Hm(bt,O,Y,Lt,se,Gt)}}function Hm(C,O,Y,W,X,wt){D!==null&&X.isNodeMaterial&&D.setObject(C,X),C.onBeforeRender(E,O,Y,W,X,wt),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(E,O,Y,W,C,wt),X.transparent===!0&&X.side===nn&&X.forceSinglePass===!1?(X.side=pn,X.needsUpdate=!0,E.renderBufferDirect(Y,O,W,X,C,wt),X.side=rs,X.needsUpdate=!0,E.renderBufferDirect(Y,O,W,X,C,wt),X.side=nn):E.renderBufferDirect(Y,O,W,X,C,wt),C.onAfterRender(E,O,Y,W,X,wt)}function Gm(C){let O=0;for(let Y of C)Y.texture!==null&&O++;return O}function va(C,O,Y){O.isScene!==!0&&(O=ce);let W=Pt.get(C),X=w.state.lights,wt=w.state.shadowsArray,Ft=X.state.version,bt=tt.getParameters(C,X.state,wt,O,Y,w.state.lightProbeGridArray),Lt=tt.getProgramCacheKey(bt),Gt=W.programs;W.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?O.environment:null,W.fog=O.fog;let se=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;W.envMap=I.get(C.envMap||W.environment,se),W.envMapRotation=W.environment!==null&&C.envMap===null?O.environmentRotation:C.envMapRotation,Gt===void 0&&(C.addEventListener("dispose",Te),Gt=new Map,W.programs=Gt,W.programVariants=new Map);let me=Gt.get(Lt);if(me!==void 0){if(W.currentProgram===me&&W.lightsStateVersion===Ft)return Wm(C,bt),me}else bt.uniforms=tt.getUniforms(C),D!==null&&C.isNodeMaterial&&D.build(C,Y,bt),C.onBeforeCompile(bt,E),me=tt.acquireProgram(bt,Lt),Gt.set(Lt,me),W.uniforms=bt.uniforms;let Bt=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Bt.clippingPlanes=j.uniform),Wm(C,bt),W.needsLights=hy(C),W.lightsStateVersion=Ft,W.needsLights&&(Bt.ambientLightColor.value=X.state.ambient,Bt.lightProbe.value=X.state.probe,Bt.sunLights.value=X.state.sun,Bt.sunLightShadows.value=X.state.sunShadow,Bt.directionalLights.value=X.state.directional,Bt.directionalLightShadows.value=X.state.directionalShadow,Bt.spotLights.value=X.state.spot,Bt.spotLightShadows.value=X.state.spotShadow,Bt.rectAreaLights.value=X.state.rectArea,Bt.ltc_1.value=X.state.rectAreaLTC1,Bt.ltc_2.value=X.state.rectAreaLTC2,Bt.pointLights.value=X.state.point,Bt.pointLightShadows.value=X.state.pointShadow,Bt.hemisphereLights.value=X.state.hemi,Bt.sunShadowMatrix.value=X.state.sunShadowMatrix,Bt.sunShadowCascade.value=X.state.sunShadowCascade,Bt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Bt.spotLightMatrix.value=X.state.spotLightMatrix,Bt.spotLightMap.value=X.state.spotLightMap,Bt.pointShadowMatrix.value=X.state.pointShadowMatrix),W.numLightProbeGrids=Gm(w.state.lightProbeGridArray),W.currentProgram=me,W.uniformsList=null,me}function ay(C,O,Y,W,X){let wt=Pt.get(C),Ft=wt.currentProgram.id+","+W+","+X,bt=wt.programVariants.get(Ft);return bt===void 0?(bt=va(C,O,Y),wt.programVariants.set(Ft,bt)):(wt.currentProgram=bt,wt.uniformsList=null,wt.outputColorSpace=W,wt.toneMapping=X),bt}function Vm(C){if(C.uniformsList===null){let O=C.currentProgram.getUniforms();C.uniformsList=sa.seqWithValue(O.seq,C.uniforms)}return C.uniformsList}function Wm(C,O){let Y=Pt.get(C);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function ly(C,O,Y,W,X){O.isScene!==!0&&(O=ce),Dt.resetTextureUnits();let wt=O.fog,Ft=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?O.environment:null,bt=et===null?E.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ue.workingColorSpace,Lt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Gt=I.get(W.envMap||Ft,Lt),se=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,me=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Bt=!!Y.morphAttributes.position,ge=!!Y.morphAttributes.normal,We=!!Y.morphAttributes.color,Ce=Xn;W.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ce=E.toneMapping);let Ae=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,an=Ae!==void 0?Ae.length:0,zt=Pt.get(W),_n=w.state.lights;if(pt===!0&&(Nt===!0||C!==Z)){let Ne=C===Z&&W.id===V;j.setState(W,C,Ne)}let Se=!1,$s=!1;W.version===zt.__version?zt.needsLights&&zt.lightsStateVersion!==_n.state.version||X.isBatchedMesh&&zt.batching===!1||!X.isBatchedMesh&&zt.batching===!0||X.isBatchedMesh&&zt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&zt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&zt.instancing===!1||!X.isInstancedMesh&&zt.instancing===!0||X.isSkinnedMesh&&zt.skinning===!1||!X.isSkinnedMesh&&zt.skinning===!0||X.isInstancedMesh&&zt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&zt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&zt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&zt.instancingMorph===!1&&X.morphTexture!==null||zt.envMap!==Gt||W.fog===!0&&zt.fog!==wt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==j.numPlanes||zt.numIntersection!==j.numIntersection)||zt.vertexAlphas!==se||zt.vertexTangents!==me||zt.morphTargets!==Bt||zt.morphNormals!==ge||zt.morphColors!==We||zt.morphTargetsCount!==an||zt.numLightProbeGrids!==Gm(w.state.lightProbeGridArray)?Se=!0:(zt.outputColorSpace!==bt||zt.toneMapping!==Ce)&&($s=!0):(Se=!0,zt.__version=W.version);let ln=zt.currentProgram;(Se===!0||$s===!0)&&(ln=$s===!0?ay(W,O,X,bt,Ce):va(W,O,X),D&&W.isNodeMaterial&&D.onUpdateProgram(W,ln,zt));let eh=!1,fs=!1,Ks=!1,xe=ln.getUniforms(),sn=zt.uniforms;if(at.useProgram(ln.program)&&(eh=!0,fs=!0,Ks=!0),W.id!==V&&(V=W.id,fs=!0),eh||Z!==C){at.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),xe.setValue(L,"projectionMatrix",C.projectionMatrix),xe.setValue(L,"viewMatrix",C.matrixWorldInverse);let Qe=xe.map.cameraPosition;Qe!==void 0&&Qe.setValue(L,ee.setFromMatrixPosition(C.matrixWorld)),qt.logarithmicDepthBuffer&&xe.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&xe.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),Z!==C&&(Z=C,fs=!0,Ks=!0)}if(zt.needsLights&&(_n.state.sunShadowMap.length>0&&xe.setValue(L,"sunShadowMap",_n.state.sunShadowMap,Dt),_n.state.directionalShadowMap.length>0&&xe.setValue(L,"directionalShadowMap",_n.state.directionalShadowMap,Dt),_n.state.spotShadowMap.length>0&&xe.setValue(L,"spotShadowMap",_n.state.spotShadowMap,Dt),_n.state.pointShadowMap.length>0&&xe.setValue(L,"pointShadowMap",_n.state.pointShadowMap,Dt)),X.isSkinnedMesh){xe.setOptional(L,X,"bindMatrix"),xe.setOptional(L,X,"bindMatrixInverse");let Ne=X.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),xe.setValue(L,"boneTexture",Ne.boneTexture,Dt))}X.isBatchedMesh&&(xe.setOptional(L,X,"batchingTexture"),xe.setValue(L,"batchingTexture",X._matricesTexture,Dt),xe.setOptional(L,X,"batchingIdTexture"),xe.setValue(L,"batchingIdTexture",X._indirectTexture,Dt),xe.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&xe.setValue(L,"batchingColorTexture",X._colorsTexture,Dt));let ni=Y.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&nt.update(X,Y,ln),(fs||zt.receiveShadow!==X.receiveShadow)&&(zt.receiveShadow=X.receiveShadow,xe.setValue(L,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&O.environment!==null&&(sn.envMapIntensity.value=O.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=WT()),fs){if(xe.setValue(L,"toneMappingExposure",E.toneMappingExposure),zt.needsLights&&cy(sn,Ks),wt&&W.fog===!0&&ft.refreshFogUniforms(sn,wt),ft.refreshMaterialUniforms(sn,W,_t,At,w.state.transmissionRenderTarget[C.id]),zt.needsLights&&zt.numLightProbeGrids>0){let Ne=M,Qe=0;for(let Xi of w.state.lightProbeGridArray)Xi.texture!==null&&(Ne.textures[Qe]=Xi.texture,Ne.min[Qe]=Xi.boundingBox.min,Ne.max[Qe]=Xi.boundingBox.max,Ne.resolution[Qe]=Xi.resolution,Qe++);for(let Xi in Ne)Ne[Xi].length=Qe;sn.probesSH.value=Ne.textures,sn.probesMin.value=Ne.min,sn.probesMax.value=Ne.max,sn.probesResolution.value=Ne.resolution}sa.upload(L,Vm(zt),sn,Dt)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(sa.upload(L,Vm(zt),sn,Dt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&xe.setValue(L,"center",X.center),xe.setValue(L,"modelViewMatrix",X.modelViewMatrix),xe.setValue(L,"normalMatrix",X.normalMatrix),xe.setValue(L,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let Ne=W.uniformsGroups;for(let Qe=0,Xi=Ne.length;Qe<Xi;Qe++){let qm=Ne[Qe];Yt.update(qm,ln),Yt.bind(qm,ln)}}return ln}function cy(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.sunLights.needsUpdate=O,C.sunLightShadows.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function hy(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(C,O,Y){let W=Pt.get(C);W.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Pt.get(C.texture).__webglTexture=O,Pt.get(C.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,O){let Y=Pt.get(C);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(C,O=0,Y=0){et=C,G=O,H=Y;let W=null,X=!1,wt=!1;if(C){let bt=Pt.get(C);if(bt.__useDefaultFramebuffer!==void 0){at.bindFramebuffer(L.FRAMEBUFFER,bt.__webglFramebuffer),st.copy(C.viewport),Et.copy(C.scissor),Ut=C.scissorTest,at.viewport(st),at.scissor(Et),at.setScissorTest(Ut),V=-1;return}else if(bt.__webglFramebuffer===void 0)Dt.setupRenderTarget(C);else if(bt.__hasExternalTextures)Dt.rebindTextures(C,Pt.get(C.texture).__webglTexture,Pt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let se=C.depthTexture;if(bt.__boundDepthTexture!==se){if(se!==null&&Pt.has(se)&&(C.width!==se.image.width||C.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Dt.setupDepthRenderbuffer(C)}}let Lt=C.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(wt=!0);let Gt=Pt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Gt[O])?W=Gt[O][Y]:W=Gt[O],X=!0):C.samples>0&&Dt.useMultisampledRTT(C)===!1?W=Pt.get(C).__webglMultisampledFramebuffer:Array.isArray(Gt)?W=Gt[Y]:W=Gt,st.copy(C.viewport),Et.copy(C.scissor),Ut=C.scissorTest}else st.copy(Ct).multiplyScalar(_t).floor(),Et.copy(oe).multiplyScalar(_t).floor(),Ut=fe;if(Y!==0&&(W=B),at.bindFramebuffer(L.FRAMEBUFFER,W)&&at.drawBuffers(C,W),at.viewport(st),at.scissor(Et),at.setScissorTest(Ut),X){let bt=Pt.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,bt.__webglTexture,Y)}else if(wt){let bt=O;for(let Lt=0;Lt<C.textures.length;Lt++){let Gt=Pt.get(C.textures[Lt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Lt,Gt.__webglTexture,Y,bt)}}else if(C!==null&&Y!==0){let bt=Pt.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bt.__webglTexture,Y)}V=-1};function Xm(C){let O=Pt.get(C);return(O.__readFormat!==C.format||O.__readType!==C.type)&&(O.__readFormat=C.format,O.__readType=C.type,O.__formatReadable=qt.textureFormatReadable(C.format),O.__typeReadable=qt.textureTypeReadable(C.type)),O}this.readRenderTargetPixels=function(C,O,Y,W,X,wt,Ft,bt=0){if(!(C&&C.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Lt=Lt[Ft],Array.isArray(Lt)&&(Lt=Lt[0])),Lt){at.bindFramebuffer(L.FRAMEBUFFER,Lt);try{let Gt=C.textures[bt],se=Gt.format,me=Gt.type;C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+bt);let Bt=Xm(Gt);if(Bt.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-W&&Y>=0&&Y<=C.height-X&&L.readPixels(O,Y,W,X,gt.convert(se),gt.convert(me),wt)}finally{let Gt=et!==null?Pt.get(et).__webglFramebuffer:null;at.bindFramebuffer(L.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(C,O,Y,W,X,wt,Ft,bt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Lt=Lt[Ft],Array.isArray(Lt)&&(Lt=Lt[0])),Lt)if(O>=0&&O<=C.width-W&&Y>=0&&Y<=C.height-X){at.bindFramebuffer(L.FRAMEBUFFER,Lt);let Gt=C.textures[bt],se=Gt.format,me=Gt.type;C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+bt);let Bt=Xm(Gt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ge=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ge),L.bufferData(L.PIXEL_PACK_BUFFER,wt.byteLength,L.STREAM_READ),L.readPixels(O,Y,W,X,gt.convert(se),gt.convert(me),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let We=et!==null?Pt.get(et).__webglFramebuffer:null;at.bindFramebuffer(L.FRAMEBUFFER,We);let Ce=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ex(L,Ce,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ge),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,wt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ge),L.deleteSync(Ce),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,O=null,Y=0){let W=Math.pow(2,-Y),X=Math.floor(C.image.width*W),wt=Math.floor(C.image.height*W),Ft=O!==null?O.x:0,bt=O!==null?O.y:0;Dt.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Ft,bt,X,wt),at.unbindTexture()},this.copyTextureToTexture=function(C,O,Y=null,W=null,X=0,wt=0){let Ft,bt,Lt,Gt,se,me,Bt,ge,We,Ce=C.isCompressedTexture?C.mipmaps[wt]:C.image;if(Y!==null)Ft=Y.max.x-Y.min.x,bt=Y.max.y-Y.min.y,Lt=Y.isBox3?Y.max.z-Y.min.z:1,Gt=Y.min.x,se=Y.min.y,me=Y.isBox3?Y.min.z:0;else{let xe=Math.pow(2,-X);Ft=Math.floor(Ce.width*xe),bt=Math.floor(Ce.height*xe),C.isDataArrayTexture?Lt=Ce.depth:C.isData3DTexture?Lt=Math.floor(Ce.depth*xe):Lt=1,Gt=0,se=0,me=0}W!==null?(Bt=W.x,ge=W.y,We=W.z):(Bt=0,ge=0,We=0);let Ae=gt.convert(O.format),an=gt.convert(O.type),zt;O.isData3DTexture?(Dt.setTexture3D(O,0),zt=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Dt.setTexture2DArray(O,0),zt=L.TEXTURE_2D_ARRAY):(Dt.setTexture2D(O,0),zt=L.TEXTURE_2D),at.activeTexture(L.TEXTURE0),at.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),at.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),at.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);let _n=at.getParameter(L.UNPACK_ROW_LENGTH),Se=at.getParameter(L.UNPACK_IMAGE_HEIGHT),$s=at.getParameter(L.UNPACK_SKIP_PIXELS),ln=at.getParameter(L.UNPACK_SKIP_ROWS),eh=at.getParameter(L.UNPACK_SKIP_IMAGES);at.pixelStorei(L.UNPACK_ROW_LENGTH,Ce.width),at.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ce.height),at.pixelStorei(L.UNPACK_SKIP_PIXELS,Gt),at.pixelStorei(L.UNPACK_SKIP_ROWS,se),at.pixelStorei(L.UNPACK_SKIP_IMAGES,me);let fs=C.isDataArrayTexture||C.isData3DTexture,Ks=O.isDataArrayTexture||O.isData3DTexture;if(C.isDepthTexture){let xe=Pt.get(C),sn=Pt.get(O),ni=Pt.get(xe.__renderTarget),Ne=Pt.get(sn.__renderTarget);at.bindFramebuffer(L.READ_FRAMEBUFFER,ni.__webglFramebuffer),at.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Qe=0;Qe<Lt;Qe++)fs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.get(C).__webglTexture,X,me+Qe),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.get(O).__webglTexture,wt,We+Qe)),L.blitFramebuffer(Gt,se,Gt+Ft,se+bt,Bt,ge,Bt+Ft,ge+bt,L.DEPTH_BUFFER_BIT,L.NEAREST);at.bindFramebuffer(L.READ_FRAMEBUFFER,null),at.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(X!==0||C.isRenderTargetTexture||Pt.has(C)){let xe=Pt.get(C),sn=Pt.get(O);at.bindFramebuffer(L.READ_FRAMEBUFFER,N),at.bindFramebuffer(L.DRAW_FRAMEBUFFER,F);for(let ni=0;ni<Lt;ni++)fs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.__webglTexture,X,me+ni):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xe.__webglTexture,X),Ks?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,sn.__webglTexture,wt,We+ni):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,sn.__webglTexture,wt),X!==0?L.blitFramebuffer(Gt,se,Gt+Ft,se+bt,Bt,ge,Bt+Ft,ge+bt,L.COLOR_BUFFER_BIT,L.NEAREST):Ks?L.copyTexSubImage3D(zt,wt,Bt,ge,We+ni,Gt,se,Ft,bt):L.copyTexSubImage2D(zt,wt,Bt,ge,Gt,se,Ft,bt);at.bindFramebuffer(L.READ_FRAMEBUFFER,null),at.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ks?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(zt,wt,Bt,ge,We,Ft,bt,Lt,Ae,an,Ce.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(zt,wt,Bt,ge,We,Ft,bt,Lt,Ae,Ce.data):L.texSubImage3D(zt,wt,Bt,ge,We,Ft,bt,Lt,Ae,an,Ce):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,wt,Bt,ge,Ft,bt,Ae,an,Ce.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,wt,Bt,ge,Ce.width,Ce.height,Ae,Ce.data):L.texSubImage2D(L.TEXTURE_2D,wt,Bt,ge,Ft,bt,Ae,an,Ce);at.pixelStorei(L.UNPACK_ROW_LENGTH,_n),at.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Se),at.pixelStorei(L.UNPACK_SKIP_PIXELS,$s),at.pixelStorei(L.UNPACK_SKIP_ROWS,ln),at.pixelStorei(L.UNPACK_SKIP_IMAGES,eh),wt===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&L.generateMipmap(zt),at.unbindTexture()},this.initRenderTarget=function(C){Pt.get(C).__webglFramebuffer===void 0&&Dt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Dt.setTextureCube(C,0):C.isData3DTexture?Dt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Dt.setTexture2DArray(C,0):Dt.setTexture2D(C,0),at.unbindTexture()},this.resetState=function(){G=0,H=0,et=null,at.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}});function Kx(s,t,{start:e=12,fadeIn:n=1.4,fadeOut:i=.6}={}){let r=Rn.outCubic(Cn((s-e)/n)),o=Cn((t-s)/i);return{visible:s>=e,opacity:r*Rn.smooth(o),reveal:r,spacing:$x(.9,.42,Rn.outExpo(Cn((s-e)/(n*1.8))))}}function Jx(s,t,{inSec:e=.8,outSec:n=.8}={}){return Math.min(Rn.smooth(Cn(s/e)),Rn.smooth(Cn((t-s)/n)))}var Cn,$x,Rn,Rd,as,Fc=ne(()=>{Cn=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),$x=(s,t,e)=>s+(t-s)*e,Rn={linear:s=>s,smooth:s=>s*s*(3-2*s),smoother:s=>s*s*s*(s*(s*6-15)+10),inOutCubic:s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,outCubic:s=>1-Math.pow(1-s,3),inCubic:s=>s*s*s,outExpo:s=>s>=1?1:1-Math.pow(2,-10*s)},Rd=class{constructor({fps:t=30,duration:e=15}={}){this.fps=t,this.duration=e,this.frameCount=Math.round(t*e)}timeAtFrame(t){return t/this.fps}progressAtFrame(t){return Cn(t/Math.max(1,this.frameCount-1))}segment(t,e,n,i=Rn.linear){return i(Cn((t-e)/(n-e)))}},as=class{constructor(t){this.keys=[...t].sort((e,n)=>e.t-n.t)}sample(t){let e=this.keys;if(t<=e[0].t)return e[0].v;if(t>=e[e.length-1].t)return e[e.length-1].v;let n=0;for(;t>e[n+1].t;)n++;let i=(e[n].ease??Rn.smooth)((t-e[n].t)/(e[n+1].t-e[n].t));return $x(e[n].v,e[n+1].v,i)}}});function YT(s,t,e=8){let n=s.count,i=s.instanceMatrix.array,r=new Map;for(let l=0;l<n;l++){let c=jx(Math.floor(i[l*16+12]/t),Math.floor(i[l*16+14]/t)),h=r.get(c);h||r.set(c,h=[]),h.push(l)}let o=s.geometry,a=[];for(let l of r.values()){let c=new Zt;for(let u of Object.keys(o.attributes)){let d=o.attributes[u];if(d.isInstancedBufferAttribute){let f=new d.array.constructor(l.length*d.itemSize);l.forEach((p,x)=>{for(let m=0;m<d.itemSize;m++)f[x*d.itemSize+m]=d.array[p*d.itemSize+m]}),c.setAttribute(u,new wn(f,d.itemSize,d.normalized,d.meshPerAttribute))}else c.setAttribute(u,d)}o.index&&c.setIndex(o.index),c.groups=o.groups.slice(),c.boundingBox=o.boundingBox,c.boundingSphere=o.boundingSphere,c.boundingSphere||(o.computeBoundingSphere(),c.boundingSphere=o.boundingSphere);let h=new De(c,s.material,l.length);l.forEach((u,d)=>h.instanceMatrix.array.set(i.subarray(u*16,u*16+16),d*16)),h.instanceMatrix.needsUpdate=!0,s.instanceColor&&(h.instanceColor=new wn(new Float32Array(l.length*3),3),l.forEach((u,d)=>h.instanceColor.array.set(s.instanceColor.array.subarray(u*3,u*3+3),d*3)),h.instanceColor.needsUpdate=!0),h.castShadow=s.castShadow,h.receiveShadow=s.receiveShadow,h.renderOrder=s.renderOrder,h.name=s.name,h.userData=s.userData,h.layers.mask=s.layers.mask,h.position.copy(s.position),h.quaternion.copy(s.quaternion),h.scale.copy(s.scale),h.frustumCulled=!0,h.computeBoundingSphere(),h.boundingSphere.radius+=e,a.push(h)}return a}function ZT(s,t,e=2){let n=s.geometry,i=n.attributes.position,r=n.index;if(!r)return[s];let o=r.array,a=o.length/3,l=new Map;for(let h=0;h<a;h++){let u=o[h*3],d=o[h*3+1],f=o[h*3+2],p=(i.getX(u)+i.getX(d)+i.getX(f))/3,x=(i.getZ(u)+i.getZ(d)+i.getZ(f))/3,m=jx(Math.floor(p/t),Math.floor(x/t)),g=l.get(m);g||l.set(m,g=[]),g.push(h)}let c=[];for(let h of l.values()){let u=new o.constructor(h.length*3);h.forEach((m,g)=>{u[g*3]=o[m*3],u[g*3+1]=o[m*3+1],u[g*3+2]=o[m*3+2]});let d=new Zt;for(let m of Object.keys(n.attributes))d.setAttribute(m,n.attributes[m]);d.setIndex(new Vt(u,1));let f=new Ve,p=new P;for(let m=0;m<u.length;m++)p.fromBufferAttribute(i,u[m]),f.expandByPoint(p);d.boundingBox=f,d.boundingSphere=f.getBoundingSphere(new Be),d.boundingSphere.radius+=e;let x=new Jt(d,s.material);x.castShadow=s.castShadow,x.receiveShadow=s.receiveShadow,x.renderOrder=s.renderOrder,x.name=s.name+"-tile",x.userData=s.userData,x.position.copy(s.position),x.quaternion.copy(s.quaternion),x.scale.copy(s.scale),x.frustumCulled=!0,c.push(x)}return c}function t_(s,{exclude:t=[],instSize:e=350,mountainCell:n=3e3,only:i=null,minCount:r=2e3}={}){let o=new Set(t),a={instancedSrc:0,instancedTiles:0,mountainTiles:0,instances:0};for(let l of s.children.slice()){if(o.has(l)||l.isInstancedMesh&&l.count<r)continue;let c=null;if(l.isInstancedMesh&&!l.isPoints&&(!i||i==="inst")?(c=YT(l,e),a.instancedSrc++,a.instancedTiles+=c.length,a.instances+=l.count):l.isMesh&&l.name==="mountains"&&(!i||i==="mtn")&&(c=ZT(l,n),a.mountainTiles=c.length),!!c){s.remove(l);for(let h of c)s.add(h)}}return a}var jx,e_=ne(()=>{we();jx=(s,t)=>s+"_"+t});function n_(s,t=Oc){let e=s.get("haze"),n=e===null||e===""?1:Math.max(0,parseFloat(e)),i=(r,o)=>s.has(r)&&isFinite(parseFloat(s.get(r)))?parseFloat(s.get(r)):o;return{mult:isFinite(n)?n:1,start:i("hazeStart",t.start),end:i("hazeEnd",t.end),strength:i("hazeMax",t.strength),desat:i("hazeDesat",t.desat),mountain:i("hazeMtn",t.mountain)}}function i_(s,t,e){let n=new de,i={uHazeP:{value:n},uHazeHor:t.uHorizon,uHazeWarm:t.uHorizonWarm,uHazeSun:t.uSunDir},r={cfg:{...e},uniforms:i,materials:0,set(a){Object.assign(r.cfg,a);let l=r.cfg.strength*r.cfg.mult;n.set(r.cfg.start,r.cfg.end,Math.min(1,l),r.cfg.desat)}};r.set({});let o=new Set;return s.traverse(a=>{let l=a.material?Array.isArray(a.material)?a.material:[a.material]:[];for(let c of l){if(o.has(c)||c.isShaderMaterial&&!c.isMeshStandardMaterial||c.fog===!1||c.isPointsMaterial)continue;o.add(c);let h=String(a.name||"").startsWith("mountains")?r.cfg.mountain:1,u=c.onBeforeCompile,d=c.customProgramCacheKey();c.onBeforeCompile=function(f,p){u?.call(this,f,p);let x=f.fragmentShader;if(!x.includes("#include <fog_fragment>"))return;let m=x.includes("vViewPosition");Object.assign(f.uniforms,i),f.fragmentShader=x.replace("#include <fog_pars_fragment>",`#include <fog_pars_fragment>
uniform vec4 uHazeP; uniform vec3 uHazeHor, uHazeWarm, uHazeSun;`).replace("#include <fog_fragment>","#include <fog_fragment>"+$T.replace("HAZE_COL",m?KT:JT).replace("HZ_K",h.toFixed(3)))},c.customProgramCacheKey=()=>d+"|haze1|"+h,c.needsUpdate=!0,r.materials++}}),r}var Oc,$T,KT,JT,cm=ne(()=>{we();Oc={start:700,end:7e3,strength:.6,desat:.55,mountain:.5};$T=`
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
#endif`,KT=`
    vec3 hzV = normalize((vec4(-vViewPosition, 0.0) * viewMatrix).xyz);
    float hzMu = max(dot(hzV, uHazeSun), 0.0);
    vec3 hzCol = mix(uHazeHor, uHazeWarm, pow(hzMu, 1.6));`,JT=`
    vec3 hzCol = uHazeHor;`});function s_(s){ls(s,s&&s.contract===1,"contract: 1 \u304C\u5FC5\u8981");let t=s.meta;ls(s,t&&t.id&&t.name?.ja&&t.name?.en&&t.season&&t.docTitle,"meta.{id,name.ja,name.en,season,docTitle}"),ls(s,Array.isArray(s.captions)&&s.captions.length>0,"captions[]"),s.captions.forEach((e,n)=>{ls(s,e.id&&e.title&&typeof e.a=="number"&&typeof e.b=="number"&&e.a<e.b,`captions[${n}] \u306F {id,title,sub,a<b}`),n&&ls(s,e.a>=s.captions[n-1].b,`captions[${n}] \u306E\u7A93\u304C\u524D\u306E\u7A93\u3068\u91CD\u306A\u308B`)}),ls(s,s.timeline&&s.timeline.duration>0&&typeof s.timeline.globalStart=="number","timeline.{globalStart,duration}"),ls(s,s.ambient&&s.ambient.name&&s.ambient.counts&&s.ambient.counts.normal>0&&s.ambient.counts.light>0,"ambient.{name,counts.{normal,light}}"),ls(s,s.tuning&&typeof s.tuning=="object","tuning\uFF08\u7A7A\u3067\u3082\u53EF\uFF09"),ls(s,typeof s.buildScene=="function","buildScene(ctx)")}function r_(s){for(let t of["frameState","setAmbientCount","setLayoutWeight"])if(typeof s[t]!="function")throw new Error(`\u30B7\u30FC\u30F3\u306B ${t}() \u304C\u3042\u308A\u307E\u305B\u3093`);for(let t of["scene","camera","look","rig"])if(!s[t])throw new Error(`\u30B7\u30FC\u30F3\u306B ${t} \u304C\u3042\u308A\u307E\u305B\u3093`)}function ca(s,{tiled:t,haze:e,tileExclude:n=[],skyUniforms:i}){s.tiled=t===void 0?!0:t,s.hazeCfg=e??{mult:1,...Oc},s.tiled&&(s.tileStats=t_(s.scene,{exclude:n,only:typeof s.tiled=="string"?s.tiled:null})),s.haze=s.hazeCfg.mult>0&&i?i_(s.scene,i,s.hazeCfg):{cfg:s.hazeCfg,materials:0}}function hm(s){let t=new Set,e=n=>{for(let i of Object.values(n))i&&i.isTexture&&!t.has(i)&&(t.add(i),i.dispose())};s.scene.traverse(n=>{n.geometry?.dispose?.();for(let i of Array.isArray(n.material)?n.material:n.material?[n.material]:[])t.has(i)||(t.add(i),e(i),i.dispose())}),s.scene.clear()}var ls,ha=ne(()=>{e_();cm();ls=(s,t,e)=>{if(!t)throw new Error(`\u90FD\u5E02\u30E2\u30B8\u30E5\u30FC\u30EB "${s?.meta?.id??"?"}" \u304C\u5951\u7D04\u3092\u6E80\u305F\u3057\u3066\u3044\u307E\u305B\u3093: ${e}`)}});function o_(s,t,e,n,i){let r=i*i,o=r*i,a=(l,c,h,u)=>.5*(2*c+(-l+h)*i+(2*l-5*c+4*h-u)*r+(-l+3*c-3*h+u)*o);return[a(s[0],t[0],e[0],n[0]),a(s[1],t[1],e[1],n[1]),a(s[2],t[2],e[2],n[2])]}function jT(s,t,e=0){let n=(i,r)=>Math.sin(s*i+r+e);return[t*(n(1.7,.3)*.6+n(3.1,1.9)*.4),t*(n(1.3,2.1)*.6+n(2.7,.7)*.4),t*(n(1.1,4.2)*.6+n(2.3,3.3)*.4)]}var QT,Nr,um=ne(()=>{Fc();QT=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]];Nr=class{constructor(t,{shakeAmp:e=0,shakeSeed:n=0,timeWarp:i=null}={}){this.keys=[...t].sort((r,o)=>r.t-o.t),this.shakeAmp=e,this.shakeSeed=n,this.timeWarp=i}sample(t){let e=this.keys;if(this.timeWarp){let x=e[0].t,m=e[e.length-1].t;t=x+(m-x)*this.timeWarp(Cn((t-x)/(m-x)))}let n=e.length,i=Cn(t,e[0].t,e[n-1].t),r=0;for(;r<n-2&&i>e[r+1].t;)r++;let o=e[r],a=e[r+1],l=(i-o.t)/(a.t-o.t),c=(o.ease??Rn.smoother)(Cn(l)),h=x=>Math.min(n-1,Math.max(0,x)),u=(x,m)=>e[h(x)][m],d=o_(u(r-1,"pos"),u(r,"pos"),u(r+1,"pos"),u(r+2,"pos"),c),f=o_(u(r-1,"target"),u(r,"target"),u(r+1,"target"),u(r+2,"target"),c),p=o.fov+(a.fov-o.fov)*c;return this.shakeAmp>0&&(d=QT(d,jT(t,this.shakeAmp,this.shakeSeed))),{position:d,target:f,fov:p}}}});var Vs,Nd=ne(()=>{we();um();Fc();Vs=class{constructor(t,e,n,{renderer:i}={}){this.meta=t,this.glRenderer=i,this.duration=t.durationSec??15,this.timeline=new Rd({fps:30,duration:this.duration}),this.scene=new bn,this.camera=new Ue(35,16/9,4,4e4),this.titleInfo={englishName:t.englishName,name:t.name,index:e,total:n},this.rig=null,this.tracks={},this.look={grade:{}},this.focusLead=0,this.timeOffset=0,this.showTitle=!0,this.fadeSec=.8}async build(){throw new Error("build() \u3092\u5B9F\u88C5\u3057\u3066\u304F\u3060\u3055\u3044")}sampleTrack(t,e,n=0){return this.tracks[t]?this.tracks[t].sample(e):n}frameState(t){let e=t+this.timeOffset,n=this.rig.sample(e);this.camera.position.set(...n.position),this.camera.lookAt(...n.target),this.camera.fov=n.fov;let i=n.position[0]-n.target[0],r=n.position[1]-n.target[1],o=n.position[2]-n.target[2],a=Math.hypot(i,r,o)+this.focusLead;return this.applyTime?.(e,n),{exposure:this.sampleTrack("exposure",e,1),bloom:this.sampleTrack("bloom",e,.6),bloomRadius:this.sampleTrack("bloomRadius",e,.7),bloomThreshold:this.sampleTrack("bloomThreshold",e,.9),dofAperture:this.sampleTrack("dofAperture",e,1),dofMaxBlur:this.sampleTrack("dofMaxBlur",e,6),focusDistance:a}}}});function ua(s=1){let t=s>>>0,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return e.range=(n,i)=>n+(i-n)*e(),e.int=(n,i)=>Math.floor(n+(i-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e}function Fi(s=7){let t=(i,r)=>{let o=Math.imul(i,374761393)+Math.imul(r,668265263)+Math.imul(s,2147483647);return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967296},e=i=>i*i*(3-2*i),n=(i,r)=>{let o=Math.floor(i),a=Math.floor(r),l=e(i-o),c=e(r-a),h=t(o,a),u=t(o+1,a),d=t(o,a+1),f=t(o+1,a+1);return h+(u-h)*l+(d-h)*c+(h-u-d+f)*l*c};return n.fbm=(i,r,o=5)=>{let a=0,l=.5,c=1,h=0;for(let u=0;u<o;u++)a+=l*n(i*c,r*c),h+=l,l*=.5,c*=2.03;return a/h},n.ridged=(i,r,o=5)=>{let a=0,l=.5,c=1,h=0;for(let u=0;u<o;u++){let d=1-Math.abs(n(i*c,r*c)*2-1);a+=l*d*d,h+=l,l*=.5,c*=2.03}return a/h},n}var Bc=ne(()=>{});var Pn,cs=ne(()=>{Pn=`
float hash11(float p){ p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash21(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  float a = hash21(i), b = hash21(i + vec2(1., 0.)), c = hash21(i + vec2(0., 1.)), d = hash21(i + vec2(1., 1.));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 5; i++){ s += a * vnoise(p); p = p * 2.03 + vec2(17.1, 9.7); a *= .5; } return s; }
`});function da(s,{sunDir:t,colors:e}){let n={uSunDir:{value:t.clone().normalize()},uTime:{value:0},uZenith:{value:new s.Color(e.zenith)},uHorizon:{value:new s.Color(e.horizon)},uHorizonWarm:{value:new s.Color(e.horizonWarm)},uSunColor:{value:new s.Color(e.sun)},uCloudLit:{value:new s.Color(e.cloudLit)},uCloudDark:{value:new s.Color(e.cloudDark)},uCloudCover:{value:e.cloudCover??.5},uSunStrength:{value:1}},i=new s.ShaderMaterial({uniforms:n,side:s.BackSide,depthWrite:!1,depthTest:!1,fog:!1,vertexShader:`
      varying vec3 vDir;
      void main(){
        vDir = position;
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p;
      }`,fragmentShader:`
      uniform vec3 uSunDir, uZenith, uHorizon, uHorizonWarm, uSunColor, uCloudLit, uCloudDark;
      uniform float uTime, uCloudCover, uSunStrength;
      varying vec3 vDir;
      ${Pn}
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
      }`}),r=new s.Mesh(new s.SphereGeometry(1e3,48,24),i);return r.frustumCulled=!1,r.renderOrder=-1e3,r.name="sky",{mesh:r,material:i,uniforms:n}}var Ud=ne(()=>{cs()});function fa(s,{uNight:t,uSnow:e}){let n=new s.MeshStandardMaterial({color:16777215,roughness:.8,metalness:0});return n.customProgramCacheKey=()=>"facade-v3",n.onBeforeCompile=i=>{i.uniforms.uNight=t,i.uniforms.uSnow=e,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aBld; attribute vec4 aPar;
        varying vec4 vBld; varying vec4 vPar; varying vec3 vWP; varying vec3 vON; varying float vTopDist;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vBld = aBld; vPar = aPar; vON = normal;
        mat4 fim = instanceMatrix;
        vWP = (modelMatrix * fim * vec4(transformed, 1.0)).xyz;
        vTopDist = (1.0 - position.y) * fim[1][1];`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uNight, uSnow;
        varying vec4 vBld; varying vec4 vPar; varying vec3 vWP; varying vec3 vON; varying float vTopDist;
        ${Pn}
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
        totalEmissiveRadiance += fEmis;`)},n}function a_(s){let t=[-.5,0,-.5],e=[.5,0,-.5],n=[0,1,-.5],i=[-.5,0,.5],r=[.5,0,.5],o=[0,1,.5],a=[t,n,e,i,r,o,t,i,o,t,o,n,e,n,o,e,o,r,t,e,r,t,r,i],l=new s.BufferGeometry;return l.setAttribute("position",new s.Float32BufferAttribute(a.flat(),3)),l.computeVertexNormals(),l}function l_(s){let t=new s.CylinderGeometry(.5,.5,1,14,1,!1);return t.translate(0,.5,0),t}function tE(s,t){let e=n=>{let i=Math.sin((t+n)*12.9898)*43758.5453;return i-Math.floor(i)};switch(s){case 2:return[2.4+e(1)*1.4,3.6+e(2)*.6,.94,.55+e(3)*.2];case 3:return[2.6+e(1)*1,2.8+e(2)*.3,.55+e(3)*.15,.5+e(4)*.12];case 4:return[3.6+e(1)*1.6,3.8+e(2)*.8,.45+e(3)*.2,.7];case 1:return[2.2+e(1)*.8,3.4+e(2)*.6,.5+e(3)*.15,.6+e(4)*.12];default:return[2.7+e(1)*1.2,3.5+e(2)*.5,.62+e(3)*.2,.55+e(4)*.15]}}var Oi,Bi,zc=ne(()=>{cs();Oi=class{constructor(t,e,n=6e4,i=null){this.THREE=t,this.material=e,this.capacity=n,this.n=0,this.geometry=i,this.mats=new Float32Array(n*16),this.bld=new Float32Array(n*4),this.par=new Float32Array(n*4),this._m=new t.Matrix4,this._p=new t.Vector3,this._q=new t.Quaternion,this._s=new t.Vector3}add(t,e,n,i,r,o,a,l,c=.5,h=0,u=null){if(this.n>=this.capacity)return;let{_m:d,_p:f,_q:p,_s:x}=this;f.set(t,e,n),x.set(i,r,o),p.setFromAxisAngle(this.THREE.Object3D.DEFAULT_UP,h),d.compose(f,p,x),d.toArray(this.mats,this.n*16);let m=this.n*4;this.bld[m]=l,this.bld[m+1]=a,this.bld[m+2]=c,this.bld[m+3]=0;let g=u??tE(a,l);this.par[m]=g[0],this.par[m+1]=g[1],this.par[m+2]=g[2],this.par[m+3]=g[3],this.n++}build({castShadow:t=!0}={}){let e=this.THREE,n=this.geometry??(()=>{let r=new e.BoxGeometry(1,1,1);return r.translate(0,.5,0),r})();n.setAttribute("aBld",new e.InstancedBufferAttribute(this.bld.slice(0,this.n*4),4)),n.setAttribute("aPar",new e.InstancedBufferAttribute(this.par.slice(0,this.n*4),4));let i=new e.InstancedMesh(n,this.material,this.n);return i.instanceMatrix.array.set(this.mats.subarray(0,this.n*16)),i.instanceMatrix.needsUpdate=!0,i.castShadow=t,i.receiveShadow=!0,i.frustumCulled=!1,i}};Bi=class{constructor(t,e){this.THREE=t,this.material=e,this.items=[]}add(t,e,n,i=n){this.items.push([t,e,n,i])}build({castShadow:t=!1,sides:e=6}={}){let n=this.THREE,i=new n.CylinderGeometry(1,1,1,e,1,!1),r=new n.InstancedMesh(i,this.material,this.items.length),o=new Float32Array(this.items.length),a=new n.Matrix4,l=new n.Quaternion,c=new n.Vector3(0,1,0),h=new n.Vector3,u=new n.Vector3,d=new n.Vector3,f=new n.Vector3,p=new n.Vector3;this.items.forEach(([m,g,_,v],M)=>{h.set(...m),u.set(...g),d.subVectors(u,h);let b=d.length();d.normalize(),l.setFromUnitVectors(c,d),f.addVectors(h,u).multiplyScalar(.5),p.set(_,b,_),a.compose(f,l,p),r.setMatrixAt(M,a),o[M]=v/_}),i.setAttribute("aTaper",new n.InstancedBufferAttribute(o,1));let x=this.material;if(!x.userData.beamTaper){x.userData.beamTaper=!0;let m=x.onBeforeCompile;x.onBeforeCompile=(_,v)=>{m?.(_,v),_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
attribute float aTaper;`).replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
transformed.xz *= mix(1.0, aTaper, position.y + 0.5);
#endif`)};let g=x.customProgramCacheKey?.bind(x);x.customProgramCacheKey=()=>(g?g():"")+"|taper",x.needsUpdate=!0}return r.instanceMatrix.needsUpdate=!0,r.castShadow=t,r.receiveShadow=!1,r.frustumCulled=!1,r}}});function c_(){let s=Fi(11),t=Fi(23),e=Fi(41);return(n,i)=>{let r=Math.hypot(n,i),o=Math.atan2(i,n),a=Math.abs((o-2.75+Math.PI*3)%(Math.PI*2)-Math.PI),l=Math.exp(-((a/.95)**2)),c=n+1300*(t.fbm(n*18e-5,i*18e-5,3)-.5)*2,h=i+1300*(t.fbm(n*18e-5+7.3,i*18e-5-2.1,3)-.5)*2,u=s.ridged(c*42e-5+3.1,h*42e-5-1.7,6),d=s.fbm(n*9e-4,i*9e-4,4),f=zi(6500,15e3,r)*l*(110+560*u);f+=zi(14e3,3e4,r)*l*380*e.ridged(c*2e-4+9.1,h*2e-4+4.4,5);for(let p of eE){let x=Math.cos(p.rot),m=Math.sin(p.rot),g=n-p.x,_=i-p.z,v=(g*x+_*m)/p.sx,M=(-g*m+_*x)/p.sz,b=v*v+M*M;if(b>16)continue;let w=Math.exp(-Math.pow(b,.82)*1.15),y=.66+.62*s.ridged(c*8e-4+p.x*3e-4,h*8e-4+p.z*3e-4,5);f+=p.h*w*(p.h>400?y:.86+.28*d)}return f+=(e.ridged(n*.0026,i*.0026,4)-.3)*Math.min(95,f*.13),f=Math.max(0,f+(s.fbm(n*.012,i*.012,3)-.5)*Math.min(14,f*.03)),f}}function Fd(s,{heightFn:t,y:e=-4,rInner:n=2500,rOuter:i=44e3,rings:r=420,segs:o=820,thA:a=.55,thB:l=3.95,snowLine:c=260}){let h=(r+1)*(o+1),u=new Float32Array(h*3),d=new Float32Array(h),f=Math.log(i/n),p=0;for(let y=0;y<=r;y++){let S=n*Math.exp(f*y/r);for(let A=0;A<=o;A++){let E=a+(l-a)*A/o,R=Math.cos(E)*S,D=Math.sin(E)*S,B=zi(0,.18,A/o)*zi(0,.18,1-A/o),N=t(R,D)*(0+B);u[p++]=R,u[p++]=N,u[p++]=D,d[y*(o+1)+A]=N}}let x=new Uint32Array(r*o*6),m=0;for(let y=0;y<r;y++)for(let S=0;S<o;S++){let A=y*(o+1)+S,E=A+1,R=A+o+1,D=R+1;x[m++]=A,x[m++]=R,x[m++]=E,x[m++]=E,x[m++]=R,x[m++]=D}let g=new s.BufferGeometry;g.setAttribute("position",new s.BufferAttribute(u,3)),g.setIndex(new s.BufferAttribute(x,1)),g.computeVertexNormals();let _=g.attributes.normal,v=new Float32Array(h*3),M=Fi(31);for(let y=0;y<h;y++){let S=u[y*3],A=u[y*3+2],E=d[y],R=1-_.getY(y),D=M.fbm(S*.0011,A*.0011,4),B=M.fbm(S*.006+5,A*.006,3),N=_.getX(y)*-.66+_.getZ(y)*.71,F=zi(c-140,c+280,E+(D-.5)*220-N*70)*(1-zi(.12,.42,R)*.8),G=zi(15,130,E)*(1-zi(850,1150,E+(D-.5)*200)),H=zi(.22,.5,R)*zi(300,800,E),et=[.86,.88,.93],V=[.2,.235,.235],Z=[.3,.285,.29],st=[.93,.945,.975],Et=[0,0,0];for(let Ut=0;Ut<3;Ut++){let q=et[Ut]+(V[Ut]-et[Ut])*G;q+=(Z[Ut]-q)*H*.7,q=q+(st[Ut]-q)*F,Et[Ut]=q*(.9+.2*B)}v[y*3]=Et[0],v[y*3+1]=Et[1],v[y*3+2]=Et[2]}g.setAttribute("color",new s.BufferAttribute(v,3));let b=new s.MeshStandardMaterial({vertexColors:!0,roughness:.93,metalness:0});b.customProgramCacheKey=()=>"mountain-v1",b.onBeforeCompile=y=>{y.vertexShader=y.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),y.fragmentShader=y.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP;
${Pn}`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          // \u6A39\u6797\u306E\u7C92\u72B6\u611F\u30FB\u96EA\u9762\u306E\u3046\u306D\u308A\uFF08\u8DDD\u96E2\u306B\u5FDC\u3058\u3066\u5F31\u3081\u308B\uFF09
          float d = length(vWP - cameraPosition);
          float fadeD = 1.0 - smoothstep(4000.0, 16000.0, d);
          float tex = 0.55 * vnoise(vWP.xz * 0.045) + 0.3 * vnoise(vWP.xz * 0.16) + 0.15 * vnoise(vWP.xz * 0.6);
          float lum = dot(diffuseColor.rgb, vec3(0.333));
          float forestness = 1.0 - smoothstep(0.38, 0.7, lum);
          diffuseColor.rgb *= 1.0 + (tex - 0.5) * (0.5 * forestness + 0.12) * (0.4 + 0.6 * fadeD);
        }`)};let w=new s.Mesh(g,b);return w.position.y=e,w.castShadow=!1,w.receiveShadow=!1,w.frustumCulled=!1,w.name="mountains",w}function h_(s,{size:t=9e4,y:e=-40}){let n=new s.PlaneGeometry(t,t,1,1);n.rotateX(-Math.PI/2);let i=new s.MeshStandardMaterial({color:14212584,roughness:.95}),r=new s.Mesh(n,i);return r.position.y=e,r.frustumCulled=!1,r.name="far-plain",r}var zi,eE,dm=ne(()=>{Bc();cs();zi=(s,t,e)=>{let n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)},eE=[{name:"\u624B\u7A32\u5C71",x:-12800,z:-3300,h:1023,sx:3600,sz:2700,rot:.5},{name:"\u4E09\u89D2\u5C71\u301C\u5965\u624B\u7A32",x:-9e3,z:-1e3,h:560,sx:2400,sz:1500,rot:.8},{name:"\u5186\u5C71",x:-4500,z:1300,h:226,sx:900,sz:700,rot:.3},{name:"\u85FB\u5CA9\u5C71",x:-2500,z:3650,h:531,sx:1500,sz:1100,rot:2.4},{name:"\u4E09\u89D2\u5C71\u30FB\u8352\u4E95\u5C71\u65B9\u9762",x:-6200,z:600,h:311,sx:1100,sz:800,rot:.2},{name:"\u7A7A\u6CBC\u5CB3",x:-14800,z:7400,h:1099,sx:3200,sz:2400,rot:2.2},{name:"\u672D\u5E4C\u5CB3",x:-16500,z:9600,h:1293,sx:3800,sz:2600,rot:2},{name:"\u6075\u5EAD\u5CB3\u65B9\u9762",x:-8e3,z:22e3,h:1320,sx:4500,sz:3500,rot:.6},{name:"\u4F59\u5E02\u5CB3\u65B9\u9762",x:-34e3,z:-4e3,h:1488,sx:6500,sz:4500,rot:.2}]});function In(s,{positions:t,colors:e,sizes:n,fogDensity:i=1e-4,minPx:r=1.5,maxPx:o=48}){let a=new s.BufferGeometry;a.setAttribute("position",new s.BufferAttribute(t,3)),a.setAttribute("aColor",new s.BufferAttribute(e,3)),a.setAttribute("aSize",new s.BufferAttribute(n,1));let l={uProj:{value:1e3},uFog:{value:i},uGain:{value:1},uMinPx:{value:r},uMaxPx:{value:o}},c=new s.ShaderMaterial({uniforms:l,transparent:!0,depthWrite:!1,blending:s.AdditiveBlending,vertexShader:`
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
      }`}),h=new s.Points(a,c);return h.frustumCulled=!1,{points:h,geo:a,uniforms:l,material:c}}function u_(s,{count:t=9e3,box:e=160,fall:n=3.2,wind:i=[2.2,.8],size:r=.11,bright:o=1}){let a=new Float32Array(t*4),l=12345,c=()=>(l=Math.imul(l,1664525)+1013904223>>>0)/4294967296;for(let p=0;p<t;p++)a[p*4]=c(),a[p*4+1]=c(),a[p*4+2]=c(),a[p*4+3]=c();let h=new s.BufferGeometry;h.setAttribute("position",new s.BufferAttribute(new Float32Array(t*3),3)),h.setAttribute("aSeed",new s.BufferAttribute(a,4));let u={uTime:{value:0},uCam:{value:new s.Vector3},uBox:{value:e},uFall:{value:n},uWind:{value:new s.Vector2(i[0],i[1])},uSize:{value:r},uProj:{value:1e3},uBright:{value:o},uFog:{value:1e-4},uTint:{value:new s.Color(1,.92,.88)}},d=new s.ShaderMaterial({uniforms:u,transparent:!0,depthWrite:!1,blending:s.AdditiveBlending,vertexShader:`
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
      }`}),f=new s.Points(h,d);return f.frustumCulled=!1,{points:f,uniforms:u,material:d}}var kc=ne(()=>{cs()});function d_(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function fm({panes:s,rows:t,w:e,h:n,seed:i,deck:r}){let o=()=>{let g=document.createElement("canvas");return g.width=e,g.height=n,g},a=o(),l=o(),c=o(),h=a.getContext("2d"),u=l.getContext("2d"),d=c.getContext("2d"),f=d_(i),p=e/s;h.fillStyle=r?"#c9ccd0":"#b9b5ac",h.fillRect(0,0,e,n),u.fillStyle="#000",u.fillRect(0,0,e,n),d.fillStyle="#c8c8c8",d.fillRect(0,0,e,n);let x=r?[{y0:0,y1:.14,glass:!1},{y0:.14,y1:.84,glass:!0},{y0:.84,y1:1,glass:!1}]:[{y0:0,y1:.5,glass:!0,shop:!0},{y0:.5,y1:.6,glass:!1},{y0:.6,y1:.9,glass:!0},{y0:.9,y1:1,glass:!1}];for(let g of x){let _=Math.round(g.y0*n),v=Math.round(g.y1*n);if(!g.glass){h.fillStyle=r?"#aeb2b8":"#9a968d",h.fillRect(0,_,e,v-_),h.fillStyle="rgba(0,0,0,0.22)",h.fillRect(0,_,e,2),h.fillRect(0,v-3,e,3),h.fillStyle="rgba(255,255,255,0.25)",h.fillRect(0,_+2,e,2);continue}for(let M=0;M<s;M++){let b=Math.round(M*p),w=Math.round((M+1)*p),y=3,S=b+y,A=w-y,E=_+y,R=v-y,D=.55+.45*f(),B=h.createLinearGradient(0,E,0,R);B.addColorStop(0,`rgb(${Math.round(70+80*D)},${Math.round(95+90*D)},${Math.round(125+90*D)})`),B.addColorStop(.55,`rgb(${Math.round(24+30*D)},${Math.round(34+36*D)},${Math.round(50+40*D)})`),B.addColorStop(1,`rgb(${Math.round(14+14*D)},${Math.round(18+16*D)},${Math.round(26+18*D)})`),h.fillStyle=B,h.fillRect(S,E,A-S,R-E),h.fillStyle=r?"#d7dade":"#8e8a82",h.fillRect(S+(A-S)*.5-1,E,2,R-E),h.fillRect(S,E+(R-E)*.62,A-S,2);let N=f()<(g.shop?.82:.62),F=.35+.65*f(),G=f()<.72,H=f()<.3?.2+.6*f():0;if(N){let et=u.createLinearGradient(0,E,0,R),V=G?[255,196,130]:[215,232,255];et.addColorStop(0,`rgb(${V[0]*F|0},${V[1]*F|0},${V[2]*F|0})`),et.addColorStop(1,`rgb(${V[0]*F*.55|0},${V[1]*F*.55|0},${V[2]*F*.55|0})`),u.fillStyle=et,u.fillRect(S,E,A-S,R-E),u.fillStyle="rgba(0,0,0,0.25)",u.fillRect(S,E+(R-E)*.62,A-S,(R-E)*.38)}H>0&&(h.fillStyle="#b9ad98",h.fillRect(S,E,A-S,(R-E)*H),N&&(u.fillStyle=`rgb(${200*F|0},${150*F|0},${100*F|0})`,u.fillRect(S,E,A-S,(R-E)*H))),d.fillStyle="#1a1a60",d.fillRect(S,E,A-S,R-E),d.fillStyle="#c8c8a0",d.fillRect(S+(A-S)*.5-1,E,2,R-E)}if(g.shop)for(let M=0;M<s;M+=5){let b=Math.round(M*p)+4;h.fillStyle="#2a2a2c",h.fillRect(b,_+(v-_)*.1,p*1.6,(v-_)*.9),u.fillStyle="#ffd9a8",u.fillRect(b+4,_+(v-_)*.16,p*1.6-8,(v-_)*.74)}}let m=(g,_)=>{let v=new jt.CanvasTexture(g);return _&&(v.colorSpace=jt.SRGBColorSpace),v.anisotropy=8,v.generateMipmaps=!0,v.minFilter=jt.LinearMipmapLinearFilter,v};return{map:m(a,!0),emissiveMap:m(l,!0),rough:m(c,!1)}}function f_(s,{x:t,z:e}){let n={},i=new jt.MeshStandardMaterial({color:14475235,roughness:.5,metalness:.45,emissive:new jt.Color(.7,.8,1),emissiveIntensity:0}),r=new jt.MeshStandardMaterial({color:10133414,roughness:.55,metalness:.55,emissive:new jt.Color(.7,.8,1),emissiveIntensity:0}),o=new jt.MeshStandardMaterial({color:10328724,roughness:.9}),a=new jt.MeshStandardMaterial({color:15856889,roughness:.7});n.steel=i,n.steelDark=r;let l=new Bi(jt,i),c=new Bi(jt,r),h=(k,L,$,ht,qt,at=!0)=>{let Kt=new jt.Mesh(k,L);return Kt.position.set($,ht,qt),Kt.castShadow=at,Kt.receiveShadow=!0,s.add(Kt),Kt},u=10,d=87,f=13.5,p=3.7,x=k=>f+(p-f)*((k-u)/(d-u)),m=[[1,1],[1,-1],[-1,-1],[-1,1]],g=(k,L,$,ht=1)=>{let qt=x($)*ht;return[t+k*qt,$,e+L*qt]},_=(k,L,$)=>k+(L-k)*$,v=k=>(k-u)/(d-u),M=[u,18.5,27,35.5,44.5,53.5,62,70,77.5,83,d],b=(k,L,$)=>[_(k[0],L[0],$),_(k[1],L[1],$),_(k[2],L[2],$)],w=(k,L)=>{let $=[L[0]-k[0],L[1]-k[1],L[2]-k[2]],ht=Math.hypot(...$);return[$[0]/ht,$[1]/ht,$[2]/ht]},y=(k,L,$)=>[k[0]+L[0]*$,k[1]+L[1]*$,k[2]+L[2]*$],S=(k,L,$)=>{l.add(k,L,$);let ht=w(k,L);c.add(k,y(k,ht,.7),$*1.7,$*1.35),c.add(L,y(L,ht,-.7),$*1.7,$*1.35)};for(let k=0;k<M.length-1;k++){let L=M[k],$=M[k+1],ht=v(L),qt=v($),at=_(.82,.36,ht),Kt=_(.82,.36,qt),Pt=_(.3,.13,(ht+qt)/2),Dt=_(.36,.16,qt);for(let I=0;I<4;I++){let[T,z]=m[I],[ct,tt]=m[(I+1)%4];l.add(g(T,z,L),g(T,z,$),at,Kt),l.add(g(T,z,L,.9),g(T,z,$,.9),at*.5,Kt*.5);let ft=(L+$)/2;l.add(g(T,z,ft),g(T,z,ft,.9),.08),S(g(T,z,L),g(ct,tt,$),Pt),S(g(ct,tt,L),g(T,z,$),Pt),l.add(g(T,z,$),g(ct,tt,$),Dt),k%2===0&&k<6&&l.add(g(T,z,ft),g(ct,tt,ft),Dt*.55);let vt=g(T,z,$,.62),J=g(ct,tt,$,.62);l.add(vt,J,Dt*.5),l.add(g(T,z,$,.95),vt,Dt*.45),c.add([g(T,z,$)[0],$-.55,g(T,z,$)[2]],[g(T,z,$)[0],$+.55,g(T,z,$)[2]],Kt*1.5),c.add([g(T,z,$)[0],$-.07,g(T,z,$)[2]],[g(T,z,$)[0],$+.07,g(T,z,$)[2]],Kt*2.7)}if(k%2===1){let I=(T,z)=>g(T,z,$,.62);l.add(I(1,1),I(-1,-1),.09),l.add(I(1,-1),I(-1,1),.09)}}for(let[k,L]of m){let $=g(k,L,u);h(new jt.BoxGeometry(3.6,1.6,3.6),o,$[0],u+.2,$[2]),c.add([$[0],u+.9,$[2]],[$[0],u+1.5,$[2]],1.5,1)}let A=(k,L,$)=>[t+k*1.35,$,e+L*1.35];for(let[k,L]of m)l.add(A(k,L,u),A(k,L,d+3),.2);for(let k=0;k<M.length;k++){let L=M[k];for(let $=0;$<4;$++){let[ht,qt]=m[$],[at,Kt]=m[($+1)%4];if(l.add(A(ht,qt,L),A(at,Kt,L),.1),k<M.length-1){let Pt=M[k+1];l.add(A(ht,qt,L),A(at,Kt,Pt),.07)}}}let E=(k,L)=>{let $=x(k)*L;h(new jt.BoxGeometry($*2,.22,$*2),r,t,k,e);for(let ht=0;ht<4;ht++){let[qt,at]=m[ht],[Kt,Pt]=m[(ht+1)%4],Dt=[t+qt*$,k+1.05,e+at*$],I=[t+Kt*$,k+1.05,e+Pt*$];l.add(Dt,I,.045),l.add(b(Dt,I,0),b(Dt,I,1),.045);let T=Math.max(2,Math.round($*2/1.9));for(let z=0;z<T;z++){let ct=b([Dt[0],k,Dt[2]],[I[0],k,I[2]],z/T);l.add(ct,[ct[0],k+1.05,ct[2]],.035)}l.add([Dt[0],k+.55,Dt[2]],[I[0],k+.55,I[2]],.03)}for(let[ht,qt]of m)l.add(A(ht,qt,k-.1),g(ht,qt,k,.85),.1)};E(35.5,.86),E(62,.86);let R=15.6,D=90,B=4.5,N=h(new jt.CylinderGeometry(6.6*Math.SQRT2,3.9*Math.SQRT2,3.3,4,1),i,t,88.35,e);N.rotation.y=Math.PI/4;for(let[k,L]of m){c.add([t+k*3.9,86.7,e+L*3.9],[t+k*6.6,90,e+L*6.6],.28);for(let $ of[-.5,0,.5]){let ht=[t+k*3.9*1,86.7,e+L*3.9],qt=[t+k*6.6,90,e+L*6.6]}}for(let k=0;k<4;k++){let[L,$]=m[k],[ht,qt]=m[(k+1)%4],at=[(L+ht)/2,($+qt)/2];c.add([t+at[0]*3.9,86.7,e+at[1]*3.9],[t+at[0]*6.6,90,e+at[1]*6.6],.16)}for(let[k,L]of m)h(new jt.BoxGeometry(1.6,.5,1.6),r,t+k*3.7,86.8,e+L*3.7);h(new jt.BoxGeometry(R+.8,.45,R+.8),r,t,90,e);for(let k=-3;k<=3;k++)l.add([t-R/2,89.6,e+k*2.2],[t+R/2,89.6,e+k*2.2],.12),l.add([t+k*2.2,89.6,e-R/2],[t+k*2.2,89.6,e+R/2],.12);let F=fm({panes:15,rows:1,w:1024,h:192,seed:77,deck:!0}),G=new jt.MeshStandardMaterial({map:F.map,emissiveMap:F.emissiveMap,emissive:new jt.Color(1,1,1),emissiveIntensity:.4,roughnessMap:F.rough,metalnessMap:F.rough,roughness:1,metalness:1});n.deckMat=G;let H=h(new jt.BoxGeometry(R,B,R),[G,G,i,r,G,G],t,D+.2+B/2,e),et=D+.2+B;h(new jt.BoxGeometry(R+1.4,.55,R+1.4),i,t,et+.28,e),h(new jt.BoxGeometry(R+.9,.4,R+.9),r,t,D+.2,e);let V=(R+1.4)/2-.2,Z=et+.55;for(let k=0;k<4;k++){let[L,$]=m[k],[ht,qt]=m[(k+1)%4],at=[t+L*V,Z+1,e+$*V],Kt=[t+ht*V,Z+1,e+qt*V];l.add(at,Kt,.05),l.add([at[0],Z+.5,at[2]],[Kt[0],Z+.5,Kt[2]],.03);for(let Pt=0;Pt<10;Pt++){let Dt=b([at[0],Z,at[2]],[Kt[0],Z,Kt[2]],Pt/10);l.add(Dt,[Dt[0],Z+1,Dt[2]],.035)}}h(new jt.BoxGeometry(6.2,2.8,6.2),i,t,Z+1.4,e),h(new jt.BoxGeometry(3.6,1.6,3.6),r,t+.4,Z+3.6,e-.3),h(new jt.CylinderGeometry(.9,.9,1.4,12),r,t-4.8,Z+.7,e+3.8),h(new jt.CylinderGeometry(.5,.5,1.1,10),r,t+4.6,Z+.55,e-4.2),h(new jt.BoxGeometry(2.2,1,1.4),r,t+4.5,Z+.5,e+4.4);let st=Z+3.2,Et=126.5,Ut=k=>_(2.2,.95,(k-st)/(Et-st)),q=(k,L,$,ht=1)=>[t+k*Ut($)*ht,$,e+L*Ut($)*ht],Q=6,lt=[];for(let k=0;k<=Q;k++)lt.push(_(st,Et,k/Q));for(let k=0;k<Q;k++){let L=lt[k],$=lt[k+1],ht=k/Q,qt=_(.34,.17,ht);for(let at=0;at<4;at++){let[Kt,Pt]=m[at],[Dt,I]=m[(at+1)%4];l.add(q(Kt,Pt,L),q(Kt,Pt,$),qt,qt*.92),S(q(Kt,Pt,L),q(Dt,I,$),.095),S(q(Dt,I,L),q(Kt,Pt,$),.095),l.add(q(Kt,Pt,$),q(Dt,I,$),.12);let T=q(Kt,Pt,$);c.add([T[0],$-.3,T[2]],[T[0],$+.3,T[2]],qt*1.5)}}let At=(k,L)=>{h(new jt.BoxGeometry(L*2,.15,L*2),r,t,k,e,!1);for(let $=0;$<4;$++){let[ht,qt]=m[$],[at,Kt]=m[($+1)%4],Pt=[t+ht*L,k+.95,e+qt*L],Dt=[t+at*L,k+.95,e+Kt*L];l.add(Pt,Dt,.04);for(let I=0;I<4;I++){let T=b([Pt[0],k,Pt[2]],[Dt[0],k,Dt[2]],I/4);l.add(T,[T[0],k+.95,T[2]],.03)}}};At(lt[3],2.9),At(lt[5],2.4);let _t=new jt.MeshStandardMaterial({color:15922164,roughness:.4,metalness:.5,side:jt.DoubleSide}),Xt=new jt.SphereGeometry(1.15,18,8,0,Math.PI*2,0,.75),Me=(k,L,$)=>{let ht=new jt.Mesh(Xt,_t);ht.position.set(t+Math.cos(k)*3.6,L,e+Math.sin(k)*3.6),ht.rotation.set(0,-k+Math.PI/2,Math.PI/2+.2*0),ht.rotateZ(0),ht.scale.setScalar($),ht.lookAt(t+Math.cos(k)*30,L+1,e+Math.sin(k)*30),ht.rotateX(Math.PI/2*0),ht.castShadow=!0,s.add(ht),l.add([t+Math.cos(k)*2.4,L-.1,e+Math.sin(k)*2.4],[t+Math.cos(k)*3.5,L,e+Math.sin(k)*3.5],.1),l.add([t+Math.cos(k)*3.6,L,e+Math.sin(k)*3.6],[t+Math.cos(k)*4.5,L+.1,e+Math.sin(k)*4.5],.05,.03)};Me(.6,lt[4]+.3,1),Me(3.5,lt[4]+.3,.8),Me(5.2,lt[2]+.3,.9);for(let k=0;k<4;k++){let L=k*Math.PI/2+Math.PI/4,$=new jt.Mesh(new jt.BoxGeometry(.14,2.4,.55),i);$.position.set(t+Math.cos(L)*3.3,lt[5]+1.2,e+Math.sin(L)*3.3),$.rotation.y=-L,$.castShadow=!0,s.add($),l.add([t+Math.cos(L)*1.5,lt[5]+1.2,e+Math.sin(L)*1.5],[t+Math.cos(L)*3.2,lt[5]+1.2,e+Math.sin(L)*3.2],.06)}let Ct=Et;h(new jt.CylinderGeometry(.5,.62,.9,12),r,t,Ct+.45,e),c.add([t,Ct,e],[t,Ct+8,e],.55,.42),l.add([t,Ct,e],[t,Ct+8,e],.5,.38),c.add([t,Ct+8,e],[t,Ct+8.4,e],.9,.9),c.add([t,Ct+4,e],[t,Ct+4.3,e],.8,.8),l.add([t,Ct+8.4,e],[t,Ct+15,e],.3,.2),c.add([t,Ct+12.2,e],[t,Ct+12.45,e],.55,.55),l.add([t,Ct+15,e],[t,147.2,e],.17,.045),l.add([t-1.7,Ct+11.2,e],[t+1.7,Ct+11.2,e],.05),l.add([t,Ct+11.2,e-1.4],[t,Ct+11.2,e+1.4],.05);for(let k=0;k<3;k++){let L=k/3*Math.PI*2;l.add([t,Ct+4.2,e],[t+Math.cos(L)*1.9,Ct+1.5,e+Math.sin(L)*1.9],.05)}let oe=(k,L)=>new jt.MeshStandardMaterial({map:L.map,emissiveMap:L.emissiveMap,emissive:new jt.Color(1,1,1),emissiveIntensity:.35,roughnessMap:L.rough,metalnessMap:L.rough,roughness:1,metalness:.4}),fe=fm({panes:12,rows:2,w:1024,h:256,seed:91,deck:!1}),rt=fm({panes:8,rows:2,w:1024,h:256,seed:92,deck:!1}),xt=oe(12,fe),pt=oe(8,rt);n.baseMats=[xt,pt];let Nt=new jt.MeshStandardMaterial({color:15659510,roughness:.7}),mt=34,ee=22,kt=10;h(new jt.BoxGeometry(mt,kt,ee),[pt,pt,Nt,o,xt,xt],t,kt/2,e+.5),h(new jt.BoxGeometry(mt+.8,.8,ee+.8),a,t,kt+.3,e+.5),h(new jt.BoxGeometry(5.5,.35,9),i,t-mt/2-2.6,3.8,e+.5);for(let k of[-1,1])h(new jt.CylinderGeometry(.17,.17,3.8,8),i,t-mt/2-4.9,1.9,e+.5+k*4.2);let ce=new jt.MeshStandardMaterial({color:4869975,roughness:.5,metalness:.5,emissive:new jt.Color(1,.75,.45),emissiveIntensity:0});n.bolM=ce;for(let k=0;k<26;k++){let L=k/26*Math.PI*2,$=t+Math.cos(L)*31,ht=e+Math.sin(L)*21;Math.abs(ht-e)<12&&Math.abs($-t)<19||h(new jt.CylinderGeometry(.16,.16,.9,8),ce,$,.45,ht,!1)}let re=d_(5);for(let[k,L,$,ht]of[[-mt/2-6,-9,3,2],[-mt/2-6,10,3,2],[mt/2+4,-6,2,3],[mt/2+4,8,2,3]])h(new jt.BoxGeometry($*2,.7,ht*2),o,t+k,.35,e+L,!1),h(new jt.SphereGeometry(1,10,6),a,t+k,.7,e+L,!1).scale.set($*.95,.45,ht*.95);for(let k=0;k<9;k++){let L=re()*Math.PI*2,$=23+re()*10,ht=h(new jt.SphereGeometry(1,10,6),a,t+Math.cos(L)*$*1.1,.2,e+Math.sin(L)*$*.75,!1);ht.scale.set(1.5+re()*2.2,.5+re()*.6,1.2+re()*1.8),ht.rotation.y=re()*3}for(let k=0;k<3;k++){let L=t-27,$=e-6+k*6;l.add([L,0,$],[L,8.5,$],.09,.06)}return s.add(l.build({castShadow:!0,sides:6}),c.build({castShadow:!0,sides:7})),n.beacon=In(jt,{positions:new Float32Array([t,148,e,t,Ct+8.6,e,t+1,Z+5.3,e]),colors:new Float32Array([14,.6,.4,6,.4,.3,4,.3,.25]),sizes:new Float32Array([2.4,1.4,1.1]),fogDensity:4e-5,minPx:2,maxPx:40}),s.add(n.beacon.points),n}var jt,p_=ne(()=>{we();zc();kc();jt=Ht});function Ee(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Zt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0,f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=m_(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let p=m_(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function m_(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Vt(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var ki=ne(()=>{we()});function nE(s){let n=[[-2.25,.34],[-2.25,.86],[-1.95,.98],[-1.45,1],[-.95,1.46],[.45,1.47],[1.05,1.02],[2,.9],[2.25,.78],[2.25,.34]],i=new s.Shape(n.map(([d,f])=>new s.Vector2(d,f))),r=new s.ExtrudeGeometry(i,{depth:1.8-.12,bevelEnabled:!0,bevelThickness:.06,bevelSize:.06,bevelSegments:1,curveSegments:1});r.translate(0,0,-(1.8-.12)/2),r.deleteAttribute("uv");let o=new s.ExtrudeGeometry(new s.Shape([[-.88,1.03],[-.5,1.4],[.4,1.41],[.96,1.06]].map(([d,f])=>new s.Vector2(d,f))),{depth:1.8+.02,bevelEnabled:!1});o.translate(0,0,-(1.8+.02)/2),o.deleteAttribute("uv");let a=[];for(let d of[1.45,-1.4])for(let f of[-1,1]){let p=new s.CylinderGeometry(.34,.34,.24,10);p.rotateX(Math.PI/2),p.translate(d,.34,f*(1.8/2-.1)),p.deleteAttribute("uv"),a.push(p)}let l=new s.BoxGeometry(4.5-.5,.18,1.8-.08);l.translate(0,.43,0),l.deleteAttribute("uv");let c=(d,f,p)=>{let x=d.attributes.position.count,m=new Float32Array(x*3),g=new Float32Array(x);for(let _=0;_<x;_++)m[_*3]=f[0],m[_*3+1]=f[1],m[_*3+2]=f[2],g[_]=p;return d.setAttribute("color",new s.BufferAttribute(m,3)),d.setAttribute("aPart",new s.BufferAttribute(g,1)),d},h=[c(r,[1,1,1],0),c(o,[.045,.055,.07],1),c(l,[.34,.33,.32],1),...a.map(d=>c(d,[.03,.03,.035],1))],u=Ee(h.map(d=>d.index?d.toNonIndexed():d));return u.computeVertexNormals(),u}function iE(s){s.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aPart;`).replace("#include <color_vertex>",`#include <color_vertex>
if (aPart > 0.5) vColor.xyz = color.xyz;`)},s.customProgramCacheKey=()=>"part-color-v1"}function Od(s,t){let e=nE(s),n=new s.MeshStandardMaterial({color:16777215,roughness:.34,metalness:.5,vertexColors:!0});iE(n);let i=new s.InstancedMesh(e,n,t.length);i.frustumCulled=!1,i.castShadow=!1,i.receiveShadow=!1;let r=new s.Color;t.forEach((x,m)=>{r.setHex(g_[(m*7+(x.ph*97|0))%g_.length]),i.setColorAt(m,r)});let o=new s.Matrix4,a=new s.Quaternion,l=new s.Vector3,c=new s.Vector3(1,1,1),h=new s.Vector3(0,1,0),u=new s.Vector3(0,0,1),d=new s.Quaternion,f=.8,p=(x,m)=>{let g=Math.PI*2/(16+x.ph*26),_=x.ph*40,v=x.speed*(m+f*Math.sin(g*m+_)/g),M=((x.off+x.dir*v)%x.len+x.len)%x.len+x.min,b=x.speed*(1+f*Math.cos(g*m+_)),w=-x.speed*f*g*Math.sin(g*m+_);return{pos:x.alongX?[M,x.fixed]:[x.fixed,M],v:b,acc:w}};return{mesh:i,posOf:p,update(x,m){for(let g=0;g<t.length;g++){let _=t[g],{pos:[v,M],acc:b}=p(_,x),w=_.alongX?_.dir>0?0:Math.PI:_.dir>0?-Math.PI/2:Math.PI/2;if(a.setFromAxisAngle(h,w),d.setFromAxisAngle(u,Math.max(-.03,Math.min(.03,-b*.012))),a.multiply(d),l.set(v,0,M),o.compose(l,a,c),i.setMatrixAt(g,o),m){let y=_.alongX?_.dir:0,S=_.alongX?0:_.dir,A=_.alongX?0:.7,E=_.alongX?.7:0,R=v+y*2.2,D=M+S*2.2,B=v-y*2.2,N=M-S*2.2,F=g*12;m[F++]=R-A,m[F++]=.74,m[F++]=D-E,m[F++]=R+A,m[F++]=.74,m[F++]=D+E,m[F++]=B-A,m[F++]=.9,m[F++]=N-E,m[F++]=B+A,m[F++]=.9,m[F++]=N+E}}i.instanceMatrix.needsUpdate=!0}}}function sE(s){let t=[],e=(a,l,c,h,u)=>{a.deleteAttribute("uv");let d=a.index?a.toNonIndexed():a,f=d.attributes.position.count,p=new Float32Array(f*3),x=new Float32Array(f),m=new Float32Array(f),g=new Float32Array(f);for(let _=0;_<f;_++)p[_*3]=l[0],p[_*3+1]=l[1],p[_*3+2]=l[2],x[_]=c,m[_]=h,g[_]=u;d.setAttribute("color",new s.BufferAttribute(p,3)),d.setAttribute("aPart",new s.BufferAttribute(x,1)),d.setAttribute("aSide",new s.BufferAttribute(m,1)),d.setAttribute("aPivot",new s.BufferAttribute(g,1)),t.push(d)},n=new s.BoxGeometry(.44,.62,.26);n.translate(0,1.18,0),e(n,[1,1,1],0,0,0);let i=new s.SphereGeometry(.115,8,6);i.translate(0,1.6,0),e(i,[.82,.64,.54],1,0,0);let r=new s.SphereGeometry(.125,8,5,0,Math.PI*2,0,Math.PI*.55);r.translate(0,1.625,0),e(r,[.16,.17,.2],1,0,0);for(let a of[-1,1]){let l=new s.BoxGeometry(.16,.86,.17);l.translate(0,.43,a*.11),e(l,[.07,.075,.09],1,a,.86);let c=new s.BoxGeometry(.11,.56,.11);c.translate(0,1.14,a*.27),e(c,[1,1,1],0,-a,1.46);let h=new s.BoxGeometry(.24,.1,.18);h.translate(.04,.05,a*.11),e(h,[.05,.05,.05],1,a,.86)}let o=Ee(t);return o.computeVertexNormals(),o}function Hc(s,t){let e=sE(s),n=new Float32Array(t.length);e.setAttribute("aGait",new s.InstancedBufferAttribute(n,1));let i=new s.MeshStandardMaterial({color:16777215,roughness:.9,metalness:0,vertexColors:!0});i.onBeforeCompile=f=>{f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
attribute float aPart, aSide, aPivot, aGait;`).replace("#include <color_vertex>",`#include <color_vertex>
if (aPart > 0.5) vColor.xyz = color.xyz;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        if (aSide != 0.0) {
          float ang = sin(aGait) * 0.62 * aSide;
          float cs = cos(ang), sn = sin(ang);
          vec2 d = vec2(transformed.x, transformed.y - aPivot);
          transformed.x = d.x * cs - d.y * sn;
          transformed.y = aPivot + d.x * sn + d.y * cs;
        }
        transformed.y += abs(sin(aGait)) * 0.035;`)},i.customProgramCacheKey=()=>"walker-v1";let r=new s.InstancedMesh(e,i,t.length);r.frustumCulled=!1,r.castShadow=!1;let o=new s.Color;t.forEach((f,p)=>{o.setHex(x_[(p*5+(f.ph*31|0))%x_.length]),r.setColorAt(p,o)});let a=new s.Matrix4,l=new s.Quaternion,c=new s.Vector3,h=new s.Vector3(1,1,1),u=new s.Vector3(0,1,0),d=1.35;return{mesh:r,update(f){for(let p=0;p<t.length;p++){let x=t[p],m=Math.abs(x.x1-x.x0),g=((x.off+x.speed*f)%(2*m)+2*m)%(2*m),_=g<m?g:2*m-g,v=(g<m?1:-1)*(x.dir>0?1:-1),M=Math.min(x.x0,x.x1)+(x.dir>0?_:m-_);l.setFromAxisAngle(u,v>0?0:Math.PI),c.set(M,0,x.z+Math.sin(M*.07+x.ph*9)*.35),a.compose(c,l,h),r.setMatrixAt(p,a),n[p]=g/d*Math.PI*2+x.ph*6.28}r.instanceMatrix.needsUpdate=!0,e.attributes.aGait.needsUpdate=!0}}}var g_,x_,pm=ne(()=>{ki();g_=[15921906,15263978,13225170,9277849,1776930,2764602,8003359,2045270,14209732,11975360,4081233];x_=[1382172,2106412,2830138,3812139,1911615,4868690,8006186,2902586,9071146,14474460,5913386,3493998]});function Bd({kita:s,minami:t,nishi:e,higashi:n}){let i=e?-e:n-1,r=oE(i),o=s?mm(s-1):gm(t-1);return{x:r,z:o,j:i}}var Gc,zd,rE,oE,mm,gm,C2,__=ne(()=>{Gc={x:-90,z:0},zd=s=>-54+108*s,rE=s=>62.5+108*s,oE=s=>108*s,mm=s=>-(116.5+108*s),gm=s=>116.5+108*s;C2={tvTower:{name:"\u3055\u3063\u307D\u308D\u30C6\u30EC\u30D3\u5854",...Gc,basis:"\u5927\u901A\u897F1\u4E01\u76EE\uFF08\u6771\u7AEF\u4ED8\u8FD1\uFF09",model:"\u624B\u7D9A\u304D\u751F\u6210\u306E\u6982\u7565\u30E2\u30C7\u30EB\uFF08\u9AD8\u3055147.2m\u30FB\u5C55\u671B\u53F0\u7D0490m\uFF09"},jrTower:{name:"JR\u30BF\u30EF\u30FC",...Bd({kita:5,nishi:2}),basis:"\u53175\u6761\u897F2\u4E01\u76EE",model:"\u624B\u7D9A\u304D\u751F\u6210\u306E\u6982\u7565\u30E2\u30C7\u30EB\uFF08\u9AD8\u3055173m\uFF09"},station:{name:"\u672D\u5E4C\u99C5",...Bd({kita:6,nishi:3}),basis:"\u53176\u6761\u897F4\u4E01\u76EE\u4ED8\u8FD1",model:"\u4F4E\u5C64\u306E\u99C5\u30D3\u30EB\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},clockTower:{name:"\u672D\u5E4C\u5E02\u6642\u8A08\u53F0",...Bd({kita:1,nishi:2}),basis:"\u53171\u6761\u897F2\u4E01\u76EE",model:"\u624B\u7D9A\u304D\u751F\u6210\u306E\u6982\u7565\u30E2\u30C7\u30EB\uFF08\u6728\u90202\u968E\u5EFA\u3066\u30FB\u4E2D\u592E\u306B\u6642\u8A08\u5854\uFF09"},tanukikoji:{name:"\u72F8\u5C0F\u8DEF",x:-430,z:332.5,basis:"\u53572\u301C3\u6761\u30FB\u897F1\u301C7\u4E01\u76EE\uFF08\u8857\u533A\u306E\u4E2D\u592E\u3092\u901A\u308B\u5546\u5E97\u8857\uFF09",model:"\u30A2\u30FC\u30B1\u30FC\u30C9\u5546\u5E97\u8857\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},susukino:{name:"\u3059\u3059\u304D\u306E\u4EA4\u5DEE\u70B9",x:zd(-4)+0,z:rE(4),basis:"\u53574\u301C5\u6761\u897F4\u4E01\u76EE\u4ED8\u8FD1",model:"\u4EA4\u5DEE\u70B9\u3068\u30CD\u30AA\u30F3\u770B\u677F\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},factory:{name:"\u30B5\u30C3\u30DD\u30ED\u30D5\u30A1\u30AF\u30C8\u30EA\u30FC",...Bd({kita:2,higashi:4}),basis:"\u53172\u6761\u67714\u4E01\u76EE",model:"\u8D64\u30EC\u30F3\u30AC\u68DF\u3068\u30AC\u30E9\u30B9\u5C4B\u6839\u306E\u30A2\u30C8\u30EA\u30A6\u30E0\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},moiwa:{name:"\u85FB\u5CA9\u5C71\uFF08\u5C55\u671B\u53F0\uFF09",x:-2496,z:3607,elev:531,basis:"\u7DEF\u5EA6\u7D4C\u5EA6\uFF08\u6982\u7565\uFF09\u304B\u3089\u306E\u914D\u7F6E",model:"\u5730\u5F62\u306E\u76DB\u308A\u4E0A\u304C\u308A\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"}}});var v_,y_,xm,Hd,M_=ne(()=>{we();Nd();Bc();cs();Ud();zc();dm();p_();kc();pm();__();v_=[{id:"overview",name:"\u672D\u5E4C\u306E\u5168\u666F",start:0,end:5,ready:!1},{id:"station",name:"\u672D\u5E4C\u99C5\u30FBJR\u30BF\u30EF\u30FC",start:5,end:11,ready:!1},{id:"odori",name:"\u5927\u901A\u516C\u5712\u30FB\u3055\u3063\u307D\u308D\u30C6\u30EC\u30D3\u5854",start:11,end:18,ready:!0},{id:"clocktower",name:"\u672D\u5E4C\u5E02\u6642\u8A08\u53F0",start:18,end:25,ready:!1},{id:"susukino",name:"\u72F8\u5C0F\u8DEF\u30FB\u3059\u3059\u304D\u306E",start:25,end:32,ready:!1},{id:"factory",name:"\u30B5\u30C3\u30DD\u30ED\u30D5\u30A1\u30AF\u30C8\u30EA\u30FC",start:32,end:39,ready:!1},{id:"moiwa",name:"\u85FB\u5CA9\u5C71\u304B\u3089\u306E\u591C\u666F",start:39,end:49,ready:!1},{id:"ending",name:"ENDING",start:49,end:55,ready:!1}],y_=new P(-.66,.25,.71).normalize(),xm=[{zenith:"#24508f",horizon:"#a9c6e8",horizonWarm:"#ffbd80",sun:"#ffd2a2",cloudLit:"#ffdcc0",cloudDark:"#8296b8",fog:"#bfd0e6",sunCol:"#ffc88f",fogD:62e-6},{zenith:"#0f2a5c",horizon:"#4a78b4",horizonWarm:"#f29a58",sun:"#ff9d62",cloudLit:"#eaa68e",cloudDark:"#3b4d7c",fog:"#5a7fb0",sunCol:"#ff9a60",fogD:7e-5},{zenith:"#050b20",horizon:"#12305c",horizonWarm:"#243e66",sun:"#ff9a60",cloudLit:"#3a4a70",cloudDark:"#0c1630",fog:"#122646",sunCol:"#ff9a60",fogD:8e-5}],Hd=class extends Vs{constructor(t,e,n,i={}){super(t,e,n,i),this.shot=v_.find(r=>r.id===(i.shot||"odori"))??v_[2],this.timeOffset=this.shot.start,this.duration=this.shot.end-this.shot.start,this.timeline.duration=this.duration,this.timeline.frameCount=Math.round(this.duration*this.timeline.fps),this.showTitle=this.shot.id==="ending",this.fadeSec=.35,this.nightU={value:.1},this.snowU={value:1}}async build(){let t=ua(20261115),e=this.scene,n=xm[0],i=da(Ht,{sunDir:y_,colors:{...n,cloudCover:.36}});if(this.sky=i,e.add(i.mesh),e.fog=new hi(new ot(n.fog),n.fogD),this.glRenderer){let d=new bn;d.add(new Jt(i.mesh.geometry,i.material));let f=new _i(this.glRenderer);e.environment=f.fromScene(d,.015,1,3e3).texture,f.dispose()}let r=new gi(16763023,3.4),o=this.shot.id==="odori"?new P(-330,0,0):new P(-500,0,-250);r.position.copy(o).addScaledVector(y_,3e3),r.target.position.copy(o),r.castShadow=!0,r.shadow.mapSize.set(4096,4096);let a=r.shadow.camera,l=this.shot.id==="odori"?[560,260]:[1700,520];a.left=-l[0],a.right=l[0],a.top=l[1],a.bottom=-l[1],a.near=200,a.far=6500,r.shadow.bias=-2e-4,r.shadow.normalBias=.9,e.add(r,r.target),this.sun=r,this.hemi=new mi(15134463,14271394,.5),e.add(this.hemi),e.add(h_(Ht,{size:9e4,y:-40})),e.add(Fd(Ht,{heightFn:c_(),y:-4})),e.add(this._buildGround()),this._buildCity(t),this._buildTVTower(),this._buildParkAndStreet(t),this._buildTraffic(t),this.snow=u_(Ht,{count:14e3,box:150,fall:3,wind:[2.2,.8],size:.06,bright:.55}),e.add(this.snow.points);let c=d=>{let f=d*d*(3-2*d),p=1-(1-d)*(1-d);return .5*f+.5*p},h=d=>d;this.rig=new Nr([{t:11,pos:[-420,40,14],target:[-140,54,-2],fov:38,ease:h},{t:12.78,pos:[-313,50,32],target:[-100,103,-20],fov:34,ease:h},{t:14.36,pos:[-211,62,44],target:[-108,76,-33],fov:35,ease:h},{t:15.99,pos:[-111,77,54],target:[-95,82,-25],fov:36,ease:h},{t:17.63,pos:[-61,85,39],target:[-109,85,-13],fov:37,ease:h},{t:18,pos:[-64,97,45],target:[-188,91,-69],fov:38,ease:h}],{shakeAmp:.1,shakeSeed:4,timeWarp:c});let u=d=>new as(d.map(([f,p])=>({t:f,v:p})));this.tracks={night:u([[0,.04],[11,.1],[18,.22],[25,.55],[32,.8],[39,1],[55,1]]),palette:u([[0,0],[11,.12],[18,.4],[25,.85],[32,1.2],[39,2],[55,2]]),sunPower:u([[0,3.8],[18,3.1],[25,1.5],[32,.5],[39,0],[55,0]]),envPower:u([[0,.75],[18,.62],[25,.46],[32,.36],[39,.2],[55,.2]]),exposure:u([[0,1],[55,1]]),bloom:u([[0,.22],[18,.3],[32,.45],[55,.55]]),bloomThreshold:u([[0,1.5],[55,1]]),bloomRadius:u([[0,.5],[55,.7]]),dofAperture:u([[0,.5],[55,.6]]),dofMaxBlur:u([[0,4],[55,5]])},this.look.grade={uShadowAmt:.3,uVig:.3,uSat:1.04,uGrain:.022,uAberr:7e-4,uHighTint:new ot(1.03,1,.96)},this._ca=new ot,this._cb=new ot}_buildGround(){let t=new en(12e3,12e3,1,1);t.rotateX(-Math.PI/2);let e=new ie({color:16777215,roughness:.85,metalness:0});e.customProgramCacheKey=()=>"sapporo-ground-v2";let n=this.nightU;e.onBeforeCompile=r=>{r.uniforms.uNight=n,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
          uniform float uNight; varying vec3 vWP;
          ${Pn}`).replace("#include <color_fragment>",`#include <color_fragment>
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
totalEmissiveRadiance += gEmis;`)};let i=new Jt(t,e);return i.receiveShadow=!0,i}_buildCity(t){let e=fa(Ht,{uNight:this.nightU,uSnow:this.snowU}),n=new Oi(Ht,e,11e4),i=new Oi(Ht,e,3e4,a_(Ht));this.boxes=n;let r=new Oi(Ht,e,12e3,l_(Ht)),o=(p,x,m,g)=>Math.hypot(p-m,x-g),a=(p,x)=>{let m=Math.exp(-(((Math.abs(x)-112)/170)**2))*(p>-1500&&p<400?1:.3),g=Math.exp(-((o(p,x,-300,-600)/420)**2)),_=Math.exp(-((o(p,x,-430,520)/380)**2)),v=o(p,x,-450,-100);return Math.max(m,g,_)*.85+.25*Math.exp(-((v/1700)**2))},l=p=>{let x=t();return p>.55?x<.32?0:x<.55?2:x<.75?4:x<.85?1:3:p>.3?x<.25?0:x<.4?2:x<.6?4:x<.7?1:3:x<.12?0:x<.18?4:x<.25?1:3},c=p=>p===3?2.9:p===4?3.9:p===2?3.8:3.6,h=(p,x,m,g,_,v,M)=>{let b=Math.abs(m)<700&&p>-1500&&p<500;b&&g>12&&_>12&&(n.add(p,x,m-_/2+.35/2,g,.9,.35,6,v,M),n.add(p,x,m+_/2-.35/2,g,.9,.35,6,v,M),n.add(p-g/2+.35/2,x,m,.35,.9,_-2*.35,6,v,M),n.add(p+g/2-.35/2,x,m,.35,.9,_-2*.35,6,v,M));let w=t.int(2,b?5:3);for(let y=0;y<w;y++){let S=p+t.range(-g*.3,g*.3),A=m+t.range(-_*.3,_*.3),E=t();if(E<.34)n.add(S,x,A,t.range(2,Math.min(7,g*.35)),t.range(1.2,2.2),t.range(1.5,Math.min(5,_*.35)),5,v+y*.13,M);else if(E<.58)n.add(S,x,A,t.range(3,5),t.range(2.6,3.4),t.range(3,5),0,v+y*.17,M,0,[3,3.2,.3,.3]);else if(E<.82){let R=t.range(2,3.6);r.add(S,x,A,R,t.range(2.2,3.6),R,5,v+y*.11,M)}else n.add(S,x,A,.18,t.range(5,12),.18,6,v,M)}},u=!1,d=(p,x,m,g,_,v,M)=>{let b=t(),w=t(),y=c(v),S=Math.max(6,_*y);if(v===3&&_<=3&&!u&&t()<.7){n.add(p,0,x,m,S*.78,g,3,b,w);let A=Math.min(m,g)*t.range(.28,.4),E=m>=g;i.add(p,S*.78,x,(E?g:m)+.8,A,(E?m:g)+.8,3,b,w,E?Math.PI/2:0,[2.6,2.9,.5,.5]);return}if(_>=11&&m>30&&g>30){let A=t.int(3,4),E=A*4.2;n.add(p,0,x,m,E,g,t()<.5?4:0,b,w);let R=m*t.range(.55,.8),D=g*t.range(.5,.75),B=p+(m-R)*t.range(-.3,.3),N=x+(g-D)*t.range(-.3,.3),F=S-E;n.add(B,E,N,R,F,D,v===4?2:v,b+.31,w),t()<.5&&n.add(B,S,N,R*.6,t.range(4,9),D*.6,0,b+.7,w,0,[4,3.6,.8,.3]),h(B,S,N,R,D,b,w);return}if(_>=6&&t()<.4){let A=Math.ceil(_*.65),E=A*y;n.add(p,0,x,m,E,g,v,b,w);let R=t.range(3,6);n.add(p+t.range(-1.5,1.5),E,x+t.range(-1.5,1.5),m-R*2,S-E,g-R*2,v,b+.2,w),h(p,S,x,m-R*2,g-R*2,b,w);return}if(_>=5&&m>28&&g>28&&t()<.45){n.add(p,0,x,m,S,g,v,b,w);let A=m*t.range(.35,.5),E=g*t.range(.4,.6),R=Math.max(6,(_-t.int(2,3))*y),D=t()<.5?1:-1,B=t()<.5?1:-1;n.add(p+D*(m/2+A/2-.5),0,x+B*(g/2-E/2),A,R,E,v===2?0:v,b+.4,w),h(p,S,x,m,g,b,w);return}n.add(p,0,x,m,S,g,v,b,w),S>12&&h(p,S,x,m,g,b,w)},f=(p,x,m,g)=>{let _=o(p,x,-450,-100);if(_>4600)return;let v=a(p,x),M=_>2600,b=2.6+8.5*v*v+1.4*v,w=t(),y=()=>t.range(2.5,5.5);if(u=M,M){let A=_<3400?2:1,E=_<3400?2:1,R=m*2/A,D=g*2/E,B=t.range(2.5,4.5);for(let N=0;N<A;N++)for(let F=0;F<E;F++){let G=Math.max(2,Math.round(B+t.range(-.6,.6)));d(p-m+(N+.5)*R,x-g+(F+.5)*D,R-t.range(2,4),D-t.range(2,4),G,3,.1)}return}let S=()=>Math.max(2,Math.round(b*(.55+Math.pow(t(),1.5)*1.1)*(t()<.07&&v>.5?1.7:1)));if(w<.28+.2*v)d(p,x,m*2-t.range(3,8),g*2-t.range(3,8),Math.min(22,S()+1),l(v),v);else if(w<.55){let A=t()<.5,E=t.range(.38,.62);if(A){let R=m*2*E-2,D=m*2*(1-E)-2;d(p-m+R/2+1,x,R,g*2-y(),S(),l(v),v),d(p+m-D/2-1,x,D,g*2-y(),S(),l(v),v)}else{let R=g*2*E-2,D=g*2*(1-E)-2;d(p,x-g+R/2+1,m*2-y(),R,S(),l(v),v),d(p,x+g-D/2-1,m*2-y(),D,S(),l(v),v)}}else if(w<.75){let A=t.int(3,5),E=m*2/A,R=t()<.5?-1:1,D=t.range(.55,.75)*g*2;for(let B=0;B<A;B++)d(p-m+(B+.5)*E,x+R*(g-D/2),E-t.range(.4,1.4),D,Math.max(2,S()+t.int(-1,1)),l(v),v);d(p,x-R*(g-(g*2-D)/2),m*2-3,g*2-D-3,Math.max(2,S()-1),l(v*.6),v)}else{let A=m,E=g;for(let R=0;R<2;R++)for(let D=0;D<2;D++)d(p-m+(R+.5)*A,x-g+(D+.5)*E,A-y(),E-y(),S(),l(v),v)}};for(let p=-30;p<=28;p++){let x=108*p;p>=-12&&p<=-1||f(x,0,44,50.5);for(let m=0;m<=19;m++)for(let g of[-1,1]){let _=g<0?mm(m):gm(m);f(x,_,44,44)}}this.scene.add(n.build(),i.build(),r.build())}_buildTVTower(){let t=f_(this.scene,Gc);this.towerSteel=t.steel,this.towerSteel2=t.steelDark,this.deckMat=t.deckMat,this.beacon=t.beacon,this.baseMats=t.baseMats,this.bolM=t.bolM}_buildParkAndStreet(t){let e=new ie({color:4406584,roughness:.95}),n=new ie({color:15922682,roughness:.75}),i=new Bi(Ht,e),r=new Bi(Ht,n),o=(_,v,M,b,w,y)=>{let S=[_[0]+v[0]*M,_[1]+v[1]*M,_[2]+v[2]*M],A=b*(w===0?.55:.4);if(i.add(_,S,b,A),w<=2&&v[1]>.35&&b>.045&&r.add([_[0],_[1]+b*.8,_[2]],[S[0],S[1]+A*.8,S[2]],b*.7,A*.6),w>=3)return;let E=w===0?t.int(3,4):t.int(2,3),R=t()*Math.PI*2;for(let D=0;D<E;D++){let B=R+D/E*Math.PI*2+t.range(-.5,.5),N=Math.min(1.25,y*t.range(.7,1.3)),F=[Math.cos(B)*Math.sin(N),Math.cos(N)*.9+.1,Math.sin(B)*Math.sin(N)],G=Math.hypot(...F),H=w===0?1:t.range(.6,1),et=[_[0]+(S[0]-_[0])*H,_[1]+(S[1]-_[1])*H,_[2]+(S[2]-_[2])*H];o(et,F.map(V=>V/G),M*t.range(.55,.72),A*t.range(.7,.9),w+1,y*1.12)}},a=(_,v)=>{let M=t.range(8,13.5),b=[t.range(-.12,.12),1,t.range(-.12,.12)],w=Math.hypot(...b);o([_,0,v],b.map(y=>y/w),M*.4,t.range(.3,.42),0,t.range(.5,.75));for(let y=0;y<2;y++){let S=t()*6.28,A=M*t.range(.18,.32);o([_,A,v],[Math.cos(S)*.8,.55,Math.sin(S)*.8],M*.26,.12,1,.8)}};for(let _=-12;_<=-1;_++){let v=108*_;for(let M of[-42,-22,22,42])for(let b=v-40;b<=v+40;b+=11.5){let w=b+t.range(-2,2),y=M+t.range(-2.5,2.5);Math.hypot(w-Gc.x,y-Gc.z)<30||Math.abs((w%108+108)%108-54)<11||a(w,y)}}for(let _ of[-1,1])for(let v=-1330;v<=-60;v+=15)Math.abs((v%108+108)%108-54)<12||(a(v+t.range(-1.5,1.5),_*(62.5+8.6)),a(v+7+t.range(-1.5,1.5),_*(62.5-8.6)));this.scene.add(i.build({castShadow:!0,sides:5}),r.build({castShadow:!1,sides:4}));let l=new ie({color:4869975,roughness:.6,metalness:.6}),c=new Bi(Ht,l),h=new ie({color:3817029,roughness:.5,metalness:.5,emissive:new ot(1,.72,.4),emissiveIntensity:0});this.lampHeadM=h;let u=new Bi(Ht,h),d=[],f=[],p=[],x=(_,v,M=9,b=!1)=>{d.push(_,M,v);let w=t.range(.85,1.15);f.push(3.4*w,2*w,.9*w),p.push(1.3),b&&(c.add([_,0,v],[_,M,v],.13,.08),c.add([_,M-.2,v],[_+.9,M+.15,v],.05,.04),u.add([_+.55,M+.02,v],[_+1.25,M+.02,v],.22,.18))},m=2400,g=1900;for(let _=-23;_<=23;_++){let v=zd(_);for(let M=-g;M<=g;M+=44){let b=Math.abs(M)<260&&v>-1400&&v<200;x(v-9.2,M+t.range(-2,2),9,b),x(v+9.2,M+22,9,b)}}for(let _=0;_<=17;_++)for(let v of[-1,1]){let M=v*(62.5+108*_);for(let b=-m;b<=m;b+=44){let w=_===0&&b>-1400&&b<200;x(b+t.range(-2,2),M-9.2,9,w),x(b+22,M+9.2,9,w)}}for(let _=-1330;_<=-110;_+=26)for(let v of[-6.5,6.5])x(_,v,4.6,!0);this.scene.add(c.build({castShadow:!1,sides:5}),u.build({castShadow:!1,sides:6})),this.lamps=In(Ht,{positions:new Float32Array(d),colors:new Float32Array(f),sizes:new Float32Array(p),fogDensity:4e-5,minPx:1.6,maxPx:14}),this.scene.add(this.lamps.points)}_buildTraffic(t){let e=[];for(let l=0;l<1500;l++){let c=t()<.5,h=t()<.5?1:-1,u;if(c){let d=t.int(0,14);u=(t()<.5?-1:1)*(62.5+108*d)+(h>0?-3.4:3.4)}else u=zd(t.int(-20,18))+(h>0?3.4:-3.4);e.push({alongX:c,dir:h,fixed:u,speed:t.range(6,13),off:t.range(0,5e3),len:c?4800:3800,min:c?-2400:-1900,ph:t()})}this.cars=Od(Ht,e),this.scene.add(this.cars.mesh);let i=new Float32Array(1500*4*3),r=new Float32Array(1500*4*3),o=new Float32Array(1500*4);for(let l=0;l<1500;l++)for(let c=0;c<4;c++){let h=(l*4+c)*3,u=c<2;u?(r[h]=3,r[h+1]=2.9,r[h+2]=2.3):(r[h]=2.4,r[h+1]=.1,r[h+2]=.07),o[l*4+c]=u?.7:.5}this.carGlow=In(Ht,{positions:i,colors:r,sizes:o,fogDensity:4e-5,minPx:1.4,maxPx:12}),this.scene.add(this.carGlow.points);let a=[];for(let l=0;l<260;l++){let c=t.pick([-3,-1.2,1.2,3,-31,31,-29,29]);a.push({x0:-1320,x1:-110,z:c+t.range(-.4,.4),dir:t()<.5?1:-1,speed:t.range(1.1,1.6),off:t.range(0,2400),ph:t()})}for(let l=0;l<40;l++)a.push({x0:-135,x1:-52,z:t.pick([-26,-20,-16,16,20,26])+t.range(-.8,.8),dir:t()<.5?1:-1,speed:t.range(.9,1.5),off:t.range(0,800),ph:t()});this.peds=Hc(Ht,a),this.scene.add(this.peds.mesh)}applyTime(t){let e=this.sampleTrack("palette",t,0),n=Math.min(1,Math.floor(e)),i=Math.min(1,e-n),r=xm[n],o=xm[Math.min(2,n+1)],a=this.sky.uniforms,l=(h,u)=>{this._ca.set(r[h]),this._cb.set(o[h]),u.value.lerpColors(this._ca,this._cb,i)};l("zenith",a.uZenith),l("horizon",a.uHorizon),l("horizonWarm",a.uHorizonWarm),l("sun",a.uSunColor),l("cloudLit",a.uCloudLit),l("cloudDark",a.uCloudDark),this._ca.set(r.fog),this._cb.set(o.fog),this.scene.fog.color.lerpColors(this._ca,this._cb,i),this.scene.fog.density=r.fogD+(o.fogD-r.fogD)*i,this._ca.set(r.sunCol),this._cb.set(o.sunCol),this.sun.color.lerpColors(this._ca,this._cb,i),this.nightU.value=this.sampleTrack("night",t,.1);let c=this.sampleTrack("sunPower",t,3);this.sun.intensity=c,a.uSunStrength.value=Math.min(1,c/2),this.hemi.intensity=.5*Math.max(.22,1-this.nightU.value*1.05),this.scene.environmentIntensity=this.sampleTrack("envPower",t,.6)}onBeforeRender({t,projScale:e,camera:n}){let i=t+this.timeOffset;this.sky.mesh.position.copy(n.position),this.sky.uniforms.uTime.value=i*5;let r=this.scene.fog.density;for(let l of[this.lamps,this.carGlow,this.beacon])l.uniforms.uProj.value=e,l.uniforms.uFog.value=r;let o=this.nightU.value;this.lamps.uniforms.uGain.value=.08+1*o,this.carGlow.uniforms.uGain.value=.5+.7*o,this.beacon.uniforms.uGain.value=.15+.85*Math.pow(.5+.5*Math.sin(i*Math.PI*1.25),3),this.towerSteel.emissiveIntensity=.03+.4*Math.max(0,o-.25),this.towerSteel2.emissiveIntensity=this.towerSteel.emissiveIntensity,this.lampHeadM.emissiveIntensity=.2+2.4*o,this.deckMat.emissiveIntensity=.25+1*o;for(let l of this.baseMats)l.emissiveIntensity=.25+.9*o;this.bolM.emissiveIntensity=.1+2*o,this.cars.update(i,this.carGlow.points.geometry.attributes.position.array),this.carGlow.points.geometry.attributes.position.needsUpdate=!0,this.peds.update(i);let a=this.snow.uniforms;a.uTime.value=i,a.uCam.value.copy(n.position),a.uProj.value=e,a.uFog.value=r}}});function T_(s,t,e,n){let i=s*e*t*e,r=Math.min(1,Math.sqrt(n*1e6/i));return{w:Math.max(2,Math.round(s*e*r)),h:Math.max(2,Math.round(t*e*r)),scale:r}}function A_(s,t,e,{rate:n,vmax:i}=aE){let r=t-s;if(Math.abs(r)<1e-5)return Ur(t);let o=r*(1-Math.exp(-n*e)),a=i*e;return Math.abs(o)>a&&(o=Math.sign(o)*a),Ur(s+o)}var Ur,_m,S_,b_,vm,ym,w_,Mm,E_,aE,Sm=ne(()=>{Ur=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),_m=(s,t,e)=>{let n=Ur((e-s)/(t-s));return n*n*(3-2*n)},S_=(s,t,e)=>Ur(-s/Math.max(1,t-e)),b_=(s,t=7)=>Math.min(1,Ur(s)/.94)*t,vm=s=>1-_m(.88,1.12,s),ym=(s,t,e,n=.03)=>_m(s,s+n,e)*(1-_m(t-n,t,e)),w_=[{id:"T0",mp:.3,samples:0,dof:!1},{id:"T1",mp:.55,samples:2,dof:!1},{id:"T2",mp:1.25,samples:2,dof:!0},{id:"T3",mp:2.4,samples:4,dof:!1}];Mm=(s,t,e)=>!!e&&Math.min(s,t)<700,E_=(s,t,e)=>Mm(s,t,e)?"T1":"T2",aE={rate:6.5,vmax:.07/.15}});function cE(s,t){let e=s.keys,n=e.length;if(t<=e[0][0]||t>=e[n-1][0])return null;let i=0;for(;t>e[i+1][0];)i++;let r=e[i+1][0]-e[i][0],o=(t-e[i][0])/r,a=(x,m)=>x===0||x===n-1?0:(e[x+1][m]-e[x-1][m])/(e[x+1][0]-e[x-1][0]),l=o*o,c=l*o,h=2*c-3*l+1,u=c-2*l+o,d=-2*c+3*l,f=c-l,p=[];for(let x=1;x<=6;x++)p.push(h*e[i][x]+u*r*a(i,x)+d*e[i+1][x]+f*r*a(i+1,x));return p}function hE(s,t){return s.map(([e,n,i,r,o,a])=>({pos:[t.x+n*Math.cos(C_(e)),i,t.z+n*Math.sin(C_(e))],target:[t.x,r,t.z],fov:o,speed:a}))}function uE(s,t,e,n,i){let r=i*i,o=r*i,a=(l,c,h,u)=>.5*(2*c+(-l+h)*i+(2*l-5*c+4*h-u)*r+(-l+3*c-3*h+u)*o);return[a(s[0],t[0],e[0],n[0]),a(s[1],t[1],e[1],n[1]),a(s[2],t[2],e[2],n[2])]}function dE(s,t,e=0){let n=(i,r)=>Math.sin(s*i+r+e);return[t*(n(1.7,.3)*.6+n(3.1,1.9)*.4),t*(n(1.3,2.1)*.6+n(2.7,.7)*.4),t*(n(1.1,4.2)*.6+n(2.3,3.3)*.4)]}function pE(s,t){return t.map(([e,n,i,r,o,a=80,l=0])=>{let c=e*s.length,[h,u,d,f]=s.at(c),[p,x]=s.at(c+a);return{pos:[h-f*l,n,u+d*l],target:[p,i,x],fov:r,speed:o}})}var P_,C_,bm,fE,Vc,wm,pa,Gd=ne(()=>{um();Sm();P_=s=>{let t=s*s*(3-2*s),e=1-(1-s)*(1-s);return .5*t+.5*e};C_=s=>s*Math.PI/180;bm=class{constructor(t,{shakeAmp:e=.1,shakeSeed:n=4,timeWarp:i=P_,N:r=160,t0:o=0,dur:a=7}={}){this.t0=o,this.dur=a,this.keys=t,this.shakeAmp=e,this.shakeSeed=n,this.timeWarp=i;let l=t.length,c=(l-1)*r;this.cum=new Float64Array(c+1);let h=this._at(0).position;for(let u=1;u<=c;u++){let d=u/c*(l-1),f=this._at(d).position,p=this._speed(d);this.cum[u]=this.cum[u-1]+Math.hypot(f[0]-h[0],f[1]-h[1],f[2]-h[2])/p,h=f}this.total=this.cum[c],this.M=c}_speed(t){let e=this.keys,n=Math.min(e.length-2,Math.floor(t)),i=t-n;return e[n].speed+(e[n+1].speed-e[n].speed)*i}_at(t){let e=this.keys,n=e.length,i=Math.min(n-2,Math.max(0,Math.floor(t))),r=t-i,o=l=>Math.min(n-1,Math.max(0,l)),a=l=>uE(e[o(i-1)][l],e[i][l],e[o(i+1)][l],e[o(i+2)][l],r);return{position:a("pos"),target:a("target"),fov:e[i].fov+(e[i+1].fov-e[i].fov)*r}}sampleU(t,e=0){let i=(this.timeWarp?this.timeWarp(Math.min(1,Math.max(0,t))):t)*this.total,r=0,o=this.M;for(;o-r>1;){let h=r+o>>1;this.cum[h]<=i?r=h:o=h}let a=(i-this.cum[r])/Math.max(1e-12,this.cum[o]-this.cum[r]),l=(r+a)/this.M*(this.keys.length-1),c=this._at(l);if(this.shakeAmp>0){let h=dE(e,this.shakeAmp,this.shakeSeed);c.position=c.position.map((u,d)=>u+h[d])}return c}sample(t){return this.sampleU((t-this.t0)/this.dur,t)}},fE=30,Vc=class{constructor(t){let{globalStart:e,duration:n=7,landscapeKeys:i,adj:r,portraitSpec:o,axis:a,portraitKeys:l}=t;this.t0=e,this.dur=n,this.landscape=new Nr(i,{shakeAmp:.1,shakeSeed:4,timeWarp:P_}),this.portrait=new bm(l??hE(o,a),{t0:e,dur:n}),this.adj=r,this.weight=0,this.blendLift=t.blendLift??fE}pOf(t){return Ur((t-this.t0)/this.dur)*.94}landscapeAt(t){let e=this.landscape.sample(t),n=this.adj?cE(this.adj,this.pOf(t)):null;return n&&(e.position=e.position.map((i,r)=>i+n[r]),e.target=e.target.map((i,r)=>i+n[3+r])),e}portraitAt(t){return this.portrait.sample(t)}sample(t,e=this.weight){if(e<=0)return this.landscapeAt(t);let n=this.portraitAt(t);if(e>=1)return n;let i=this.landscapeAt(t),r=(a,l)=>a.map((c,h)=>c+(l[h]-c)*e),o=r(i.position,n.position);return o[1]+=this.blendLift*4*e*(1-e),{position:o,target:r(i.target,n.target),fov:i.fov+(n.fov-i.fov)*e}}},wm=class{constructor(t){this.pts=t,this.cum=[0];for(let e=1;e<t.length;e++)this.cum.push(this.cum[e-1]+Math.hypot(t[e][0]-t[e-1][0],t[e][1]-t[e-1][1]));this.length=this.cum[t.length-1]}at(t){let e=this.pts,n=e.length,i=this.cum,r=Math.min(this.length,Math.max(0,t)),o=0;for(;o<n-2&&r>i[o+1];)o++;let a=Math.max(1e-9,i[o+1]-i[o]),l=(r-i[o])/a;return[e[o][0]+(e[o+1][0]-e[o][0])*l,e[o][1]+(e[o+1][1]-e[o][1])*l,(e[o+1][0]-e[o][0])/a,(e[o+1][1]-e[o][1])/a]}};pa=class extends Vc{constructor(t){let e=new wm(t.route);super({...t,portraitKeys:pE(e,t.dolly)}),this.poly=e}}});var I_,mE,gE,xE,Wc,Tm=ne(()=>{I_={x:-90,z:0,tipY:147.2,glowY:149},mE=[{t:11,pos:[-420,40,14],target:[-140,54,-2],fov:38},{t:12.78,pos:[-313,50,32],target:[-100,103,-20],fov:34},{t:14.36,pos:[-211,62,44],target:[29,94,-137],fov:35},{t:15.99,pos:[-111,77,54],target:[-54,95,-240],fov:36},{t:16.5,pos:[-74,102,52.9],target:[-125.1,66.4,-242.7],fov:41.1},{t:17,pos:[-35,123.4,55],target:[-190.4,102.7,-201.6],fov:46.7},{t:17.5,pos:[57.3,122.4,49.4],target:[-229.9,95.1,-37.3],fov:45.9},{t:18,pos:[64.8,122.3,31.1],target:[-234.1,74.2,5],fov:45.9}].map(s=>({...s,ease:t=>t})),gE={keys:[[.4,0,0,0,0,0,0],[.44,-13.9,10.8,28.9,-.6,74.1,32.6],[.47,-17.1,19.3,53.7,9.5,60.2,19.2],[.5,-6.9,27.5,66.3,5.3,46.3,15],[.53,7.6,32.3,56.1,-12.7,48.9,.5],[.56,.2,26.8,28.8,-26.6,66.5,10],[.6,0,0,0,0,0,0]]},xE=[[180,280,46,66,50,1],[167.7,235,99.5,80,51,1],[141.2,204.6,117.9,90,52,.9],[103,170.6,127.9,95.6,53,.75],[83.4,146,127.9,106.9,54,.65],[11.3,132.3,126,106.9,55,.6],[3.5,149.3,124.1,95.4,56,.5]],Wc={globalStart:11,duration:7,landscapeKeys:mE,adj:gE,portraitSpec:xE,axis:{x:I_.x,z:I_.z}}});var Vd,L_=ne(()=>{M_();Gd();ha();Tm();Vd=class extends Hd{constructor(t,e,n,i={}){super(t,e,n,{...i,shot:"odori"}),this.fadeSec=0,this.fx=i.fx??{}}async build(){await super.build(),this.videoRig=this.rig,this.rig=new Vc(Wc),ca(this,{tiled:this.fx.tiled,haze:this.fx.haze,tileExclude:[this.cars.mesh,this.peds.mesh,this.scene.children.find(t=>t.isInstancedMesh&&t.count===this.boxes.n)],skyUniforms:this.sky.uniforms})}setAmbientCount(t){this.snow.points.geometry.setDrawRange(0,t),this.ambientCount=t}setLayoutWeight(t){this.rig.weight=t}}});var D_,N_=ne(()=>{D_=[{id:"cap-sapporo",title:"SAPPORO",sub:"\u672D\u5E4C",a:-.05,b:.17},{id:"cap-tower",title:"\u3055\u3063\u307D\u308D\u30C6\u30EC\u30D3\u5854",sub:"Sapporo TV Tower",a:.2,b:.45},{id:"cap-odori",title:"\u5927\u901A\u516C\u5712",sub:"Odori Park",a:.47,b:.7},{id:"cap-teine",title:"\u624B\u7A32\u5C71\u306E\u65B9\u3078",sub:"Toward Mt. Teine",a:.72,b:1.08}]});var U_={};nh(U_,{default:()=>_E});var _E,F_=ne(()=>{L_();N_();Tm();_E={contract:1,meta:{id:"sapporo",name:{ja:"\u672D\u5E4C",en:"Sapporo"},season:"winter",theme:"\u96EA\u306E\u5927\u901A\u516C\u5712\uFF08\u663C\u2192\u5915\uFF09",docTitle:"SAPPORO \u2014 JAPAN \u2014 THE CITY COLLECTION"},captions:D_,timeline:{globalStart:Wc.globalStart,duration:Wc.duration},ambient:{name:"\u96EA",counts:{normal:14e3,light:7e3}},tuning:{haze:{},grade:{}},async buildScene(s){let t=new Vd(s.cityMeta,s.index,s.total,{renderer:s.renderer,fx:s.fx});return await t.build(),t}}});function O_(s,t){let e=Xc(Fr.x0,Fr.crestX,s)*(1-Xc(-1150,-1500,s)),n=Math.abs(t-250),i=1-Xc(260,760,n);return Fr.top*e*(1-Xc(700,1e3,n))*(.4+.6*i)}function Wd(s,t){let e=O_(s,t),n=Math.hypot(s-Ke.x,t-Ke.z),i=1-Xc(Ke.r0,Ke.r1,n);return e+(B_-e)*i}var gn,ma,Ws,Xs,Fr,Ke,Xc,B_,Or,z_,k_,Br=ne(()=>{gn=[{id:"aoba",dir:"x",c:230,w:50,a:-372,b:330,kind:1},{id:"joz",dir:"x",c:0,w:46,a:-240,b:110,kind:2},{id:"ichi-n",dir:"z",c:0,w:20,a:-130,b:40,kind:0},{id:"ichi-arcade",dir:"z",c:0,w:14,a:40,b:200,kind:3},{id:"ichi-s",dir:"z",c:0,w:20,a:200,b:330,kind:0},{id:"conn",dir:"z",c:-170,w:22,a:-130,b:330,kind:0},{id:"w1",dir:"z",c:-85,w:14,a:-130,b:330,kind:0},{id:"w2",dir:"z",c:-300,w:16,a:24,b:330,kind:0},{id:"e1",dir:"z",c:110,w:20,a:24,b:330,kind:0},{id:"e1n",dir:"z",c:110,w:20,a:-130,b:-24,kind:0},{id:"e2",dir:"z",c:200,w:18,a:-130,b:330,kind:0},{id:"cross",dir:"x",c:115,w:16,a:-330,b:330,kind:0},{id:"north",dir:"x",c:-120,w:18,a:-330,b:330,kind:0},{id:"south",dir:"x",c:330,w:18,a:-330,b:330,kind:0}],ma=[{id:"nishi",x0:-318,x1:-240,z0:-55,z1:55},{id:"kotodai",x0:110,x1:170,z0:-45,z1:45}],Ws=[{id:"station",x0:205,x1:352,z0:120,z1:205}],Xs={x0:-318,x1:340,z0:-240,z1:400},Fr={x0:-362,top:95,crestX:-500},Ke={x:-478,z:244,r0:34,r1:92},Xc=(s,t,e)=>{let n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)};B_=O_(Ke.x,Ke.z);Or=B_,z_=[-.86,.3,-.3],k_=[[250,232],[60,232],[-170,232],[-170,110],[-170,0],[0,0],[0,110],[0,215],[-90,236],[-200,238],[-330,238],[-505,238]]});var vE,H_,yE,ME,SE,bE,wE,TE,zr,Em=ne(()=>{Br();vE=0,H_=7,yE=s=>{let t=s*s*(3-2*s),e=1-(1-s)*(1-s);return .5*t+.5*e},ME=s=>H_*yE(Math.min(1,s/.94)),SE=s=>s,bE=[[0,[330,96,238],[60,26,232],40],[.1,[80,56,232],[-250,22,232],38],[.2,[-90,100,230],[-170,60,150],38],[.25,[-168,96,224],[-170,40,120],38],[.29,[-170,52,120],[-170,12,10],37],[.32,[-171,34,46],[-165,16,0],36],[.345,[-171,30,10],[-110,8,0],35],[.36,[-150,4.8,0],[-20,7,0],35],[.44,[-85,4.8,0],[30,7,4],35],[.51,[-12,5.2,4],[0,7,90],37],[.56,[0,6,55],[0,8,150],40],[.63,[0,6.6,130],[0,9,200],42],[.7,[0,15,192],[-30,20,238],44],[.74,[-30,42,238],[120,26,224],44],[.81,[-230,80,242],[60,22,222],44],[.88,[-400,118,246],[-20,18,220],43],[.94,[-500,108,252],[-100,14,214],42],[1,[-500,108,252],[-100,14,214],42]],wE=bE.map(([s,t,e,n])=>({t:ME(s),pos:t,target:e,fov:n,ease:SE})),TE=[[0,85,30,58,1,120,0],[.14,46,24,60,1,100,0],[.24,38,20,60,1,90,0],[.277,40,18,60,1.1,60,0],[.34,26,14,60,1.25,70,0],[.42,8,10,62,1.25,50,0],[.49,4.8,8,62,.9,50,0],[.54,4.8,8,62,.8,45,0],[.61,10,10,62,.85,45,0],[.65,15,14,62,.85,45,0],[.683,20,18,62,.9,45,0],[.72,30,24,60,3,-120,-8],[.86,74,30,56,5,-300,-9],[1,108,20,52,5,-620,-12]],zr={globalStart:vE,duration:H_,landscapeKeys:wE,route:k_,dolly:TE}});function qc(s,t,e,n,i,r,o){let a=new fi(1,0),l=a.attributes.position,c=l.count,h=new Float32Array(c*3),u=new Float32Array(c*3),d=f=>{let p=Math.sin((f+r)*12.9898)*43758.5453;return .86+.28*(p-Math.floor(p))};for(let f=0;f<c;f++){let p=l.getX(f),x=l.getY(f),m=l.getZ(f),g=Math.hypot(p,x,m);h[f*3]=p/g,h[f*3+1]=x/g,h[f*3+2]=m/g;let _=d(Math.floor(f/3)+r*7);l.setXYZ(f,s+p*n*_,t+x*n*i*_,e+m*n*_);let v=.5+.5*(x/g),M=o*(.7+.5*v);u[f*3]=.2*M,u[f*3+1]=.36*M,u[f*3+2]=.1*M}return a.setAttribute("normal",new Vt(h,3)),a.setAttribute("color",new Vt(u,3)),a.deleteAttribute("uv"),a}function V_(s,t,e,n,i){let r=new Re(n,e,1,5,1,!1);r.translate(0,.5,0);let o=new P(t[0]-s[0],t[1]-s[1],t[2]-s[2]),a=o.length();r.scale(1,a,1),r.applyQuaternion(new pe().setFromUnitVectors(new P(0,1,0),o.normalize())),r.translate(s[0],s[1],s[2]);let l=r.attributes.position.count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c[h*3]=i[0],c[h*3+1]=i[1],c[h*3+2]=i[2];return r.setAttribute("color",new Vt(c,3)),r.deleteAttribute("uv"),r}function AE(){let s=[.115,.1,.085],t=[V_([0,0,0],[0,4.6,0],.42,.3,s)],e=[],n=6;for(let i=0;i<n;i++){let r=i/n*Math.PI*2+.3,o=Math.cos(r),a=Math.sin(r);t.push(V_([0,4.4,0],[o*3.4,9.2,a*3.4],.22,.1,s)),e.push(qc(o*4.2,10,a*4.2,3.5,.82,i,1)),e.push(qc(o*2.2,13.2,a*2.2,3,.8,i+9,1.1))}e.push(qc(0,11.5,0,3.6,.9,20,1.05)),e.push(qc(0,14.6,0,3,.8,21,1.15));for(let i=0;i<3;i++){let r=i*2.1;e.push(qc(Math.cos(r)*3.2,7,Math.sin(r)*3.2,2.2,.8,30+i,.8))}return{wood:Ee(t),leaf:Ee(e)}}function CE(s){let t=[],e=gn.map(EE),n=(r,o,a)=>r>-314&&!gn.some((l,c)=>l!==a&&l.kind!==3&&G_(e[c],r,o,l.kind===0?.5:-.5))&&!ma.some(l=>G_(l,r,o,0)),i=(r,o,a,l,c,h=r.b)=>{for(let u=r.a+l;u<h;u+=a){let d=r.dir==="x"?u:r.c+o,f=r.dir==="x"?r.c+o:u;n(d,f,r)&&t.push([d+s.range(-.4,.4),f+s.range(-.4,.4),c*s.range(.92,1.12),s()])}};for(let r of gn)if(r.kind===1)i(r,0,13,4,1.05,200),i(r,-20.6,13,10.5,1,200),i(r,20.6,13,10.5,1,200);else if(r.kind===2)i(r,-4.5,16,3,1.1),i(r,4.5,16,11,1.1),i(r,-20.2,16,11,1),i(r,20.2,16,3,1);else if(r.kind===0){let o=r.w/2-1.8;i(r,-o,22,8,.55),i(r,o,22,19,.55)}for(let r of ma)for(let o=0;o<26;o++)t.push([s.range(r.x0+6,r.x1-6),s.range(r.z0+6,r.z1-6),s.range(.8,1.15),s()]);return t}function W_(s){let{wood:t,leaf:e}=AE(),n=CE(s),i=new ie({vertexColors:!0,roughness:.95,metalness:0}),r=new ie({vertexColors:!0,roughness:.88,metalness:0});r.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPl;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPl = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPl;
`+Pn).replace("#include <color_fragment>",`#include <color_fragment>
        {
          float lt = 0.55 * vnoise(vWPl.xz * 0.8 + vWPl.y * 0.6) + 0.45 * vnoise(vWPl.xz * 2.6 - vWPl.y * 1.9);
          float d = length(vWPl - cameraPosition);
          diffuseColor.rgb *= mix(1.0, 0.62 + 0.75 * lt, 1.0 - smoothstep(60.0, 400.0, d));
        }`)},i.customProgramCacheKey=()=>"sendai-wood-v1",r.customProgramCacheKey=()=>"sendai-leaf-v1";let o=(c,h,u)=>{let d=new De(c,h,n.length),f=new Ot,p=new pe,x=new P,m=new P,g=new ot;return n.forEach(([_,v,M,b],w)=>{p.setFromAxisAngle(new P(0,1,0),b*6.283),x.set(M,M*(.92+.16*b),M),m.set(_,0,v),f.compose(m,p,x),d.setMatrixAt(w,f),h===r&&(g.setRGB(.9+.2*b,.95+.1*b,.85+.2*(1-b)),d.setColorAt(w,g))}),d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0),d.castShadow=u,d.receiveShadow=!1,d.frustumCulled=!1,d},a=o(t,i,!0),l=o(e,r,!0);return a.name="zelkova-wood",l.name="zelkova-leaf",{meshes:[a,l],count:n.length,tris:(t.index?t.index.count:t.attributes.position.count)/3+(e.index?e.index.count:e.attributes.position.count)/3}}var EE,G_,X_=ne(()=>{we();ki();cs();Br();EE=s=>s.dir==="x"?{x0:s.a,x1:s.b,z0:s.c-s.w/2,z1:s.c+s.w/2}:{x0:s.c-s.w/2,x1:s.c+s.w/2,z0:s.a,z1:s.b},G_=(s,t,e,n=0)=>t>s.x0-n&&t<s.x1+n&&e>s.z0-n&&e<s.z1+n});function q_(){let{z0:s,z1:t,half:e,spring:n,crown:i}=kr,r=8,o=[.62,.64,.66],a=[],l=(_,v,M)=>{let b=new P(v[0]-_[0],v[1]-_[1],0),w=b.length(),y=new Re(M,M,w,5,1,!1);y.applyQuaternion(new pe().setFromUnitVectors(new P(0,1,0),b.normalize())),y.translate((_[0]+v[0])/2,(_[1]+v[1])/2,0),a.push(Xd(y,o))},c=10,h=_=>{let v=-e+.2+2*(e-.2)*_,M=1-Math.pow(2*_-1,2);return[v,n+(i-n)*M]};for(let _ of[-1,1])l([_*(e-.2),0],[_*(e-.2),n],.1);for(let _=0;_<c;_++)l(h(_/c),h((_+1)/c),.09);l([-(e-.2),4.2],[e-.2,4.2],.05);let u=Ee(a),d=new ie({vertexColors:!0,roughness:.5,metalness:.5});d.customProgramCacheKey=()=>"sendai-arcade-v1";let f=Math.floor((t-s)/r)+1,p=new De(u,d,f),x=new Ot;for(let _=0;_<f;_++)x.makeTranslation(0,0,s+_*r),p.setMatrixAt(_,x);p.instanceMatrix.needsUpdate=!0,p.castShadow=!0,p.receiveShadow=!1,p.frustumCulled=!1,p.name="arcade-frame";let m=[];for(let[_,v]of[[0,i],[-5.2,10.2],[5.2,10.2],[-e+.2,n],[e-.2,n]]){let M=new Re(.07,.07,t-s,5);M.rotateX(Math.PI/2),M.translate(_+0,v,(s+t)/2),m.push(Xd(M,o))}let g=new Jt(Ee(m),d);return g.castShadow=!1,g.frustumCulled=!1,g.name="arcade-beams",{meshes:[p,g],archCount:f}}function Y_(s,t){let{z0:e,z1:n,half:i}=kr,r=[[.75,.2,.18],[.2,.4,.7],[.85,.7,.25],[.25,.55,.4],[.85,.85,.8],[.6,.3,.55],[.9,.5,.2]],o=[],a=[];for(let x of[-1,1])for(let m=e+2;m<n-3;){let g=4+s()*3.5;o.push({x:0+x*(i-.7),y:3.3,z:m+g/2,w:g,d:1.4,h:.35,c:r[Math.floor(s()*r.length)]}),s()<.55&&a.push({x:0+x*(i-.35),y:5.6+s()*1.4,z:m+g/2,w:.2,h:1+s()*.8,d:.9+s()*.5,c:r[Math.floor(s()*r.length)],side:x}),m+=g+.4}let l=new ie({color:16777215,roughness:.7,metalness:0});l.customProgramCacheKey=()=>"sendai-shop-v1",l.onBeforeCompile=x=>{x.uniforms.uShopGlow=t.uShopGlow,x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
uniform float uShopGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * uShopGlow;`)};let c=new ye(1,1,1),h=(x,m)=>{let g=new De(c,l,x.length),_=new Ot,v=new P,M=new pe,b=new P,w=new ot;return x.forEach((y,S)=>{v.set(y.x,y.y,y.z),b.set(y.d,y.h,y.w),M.identity(),_.compose(v,M,b),g.setMatrixAt(S,_),w.setRGB(...y.c),g.setColorAt(S,w)}),g.instanceMatrix.needsUpdate=!0,g.instanceColor.needsUpdate=!0,g.castShadow=!1,g.frustumCulled=!1,g},u=o.map(x=>({...x,x:x.x})),d=a.map(x=>({x:x.x-x.side*.45,y:x.y,z:x.z,w:x.w,h:x.h,d:x.d,c:x.c})),f=h(u,0),p=h(d,0);return f.name="awnings",p.name="signs",{meshes:[f,p],count:o.length+a.length}}function Z_(){let s=[],t=[],e=[],{z0:n,z1:i}=kr;for(let r of[-5.2,0,5.2])for(let o=n;o<=i;o+=3)s.push(r+0,r===0?11.2:10.1,o),t.push(3,1.9,.9),e.push(.5);for(let r of[-5.9,5.9])for(let o=n+2;o<=i;o+=5)s.push(r+0,4.6,o),t.push(2.6,1.6,.8),e.push(.45);return{positions:new Float32Array(s),colors:new Float32Array(t),sizes:new Float32Array(e)}}function $_(s){let t=[],e=[],n=[],i=(h,u,d,f=1)=>t.push({x:h,y:u,z:d,s:f*(.9+.2*s()),yaw:s()*6.283,phase:s()*6.283}),{z0:r,z1:o,half:a}=kr;for(let h=r+1;h<o;h+=3.2)i(0-4.6+(s()-.5)*.4,10.3,h+(s()-.5)*.6,1),i(0+4.6+(s()-.5)*.4,10.3,h+1.6+(s()-.5)*.6,.95),i(0-2.3,10.4,h+.8+(s()-.5)*.5,.72),i(0+2.3,10.4,h+2.4+(s()-.5)*.5,.7);for(let h=r+4;h<o;h+=8)n.push([0,10.6,h]);let l=gn.find(h=>h.id==="joz");for(let h=l.a+12;h<l.b-6;h+=15)for(let u of[-9.6,9.6,-21.4,21.4])Math.abs(h-0)<14||(e.push([h,0+u]),i(h,7.2,0+u-Math.sign(u)*.9,1.05),s()<.5&&i(h+1.1,6.6,0+u-Math.sign(u)*.9,.85));for(let[h,u]of[[-125,30],[205,325]])for(let d=h;d<u;d+=13)for(let f of[-1,1])e.push([0+f*8.8,d]),i(0+f*7.9,6.6,d,.85);let c=Ws[0];for(let h=0;h<6;h++){let u=c.x0+14+h*14,d=c.z1-4;e.push([u,d]),i(u,6.8,d-.8,.9)}return{items:t,poles:e,balls:n}}function K_(s,t){let e=new Re(.035,.06,7.8,5);e.translate(0,3.9,0);let n=new Re(.03,.03,1.2,4);n.rotateZ(Math.PI/2),n.translate(-.5,7.5,0);let i=Ee([Xd(e,[.3,.36,.16]),Xd(n,[.3,.36,.16])]),r=new ie({vertexColors:!0,roughness:.8,metalness:0}),o=new De(i,r,s.length),a=new Ot;s.forEach(([x,m],g)=>{a.makeTranslation(x,0,m),o.setMatrixAt(g,a)}),o.instanceMatrix.needsUpdate=!0,o.castShadow=!1,o.frustumCulled=!1,o.name="bamboo-poles";let l=new fi(.5,1).toNonIndexed(),c=l.attributes.position,h=new Float32Array(c.count*3),u=new Float32Array(c.count*3),d=[[.06,.3,.85],[.88,.08,.1],[.96,.74,.08],[.92,.92,.88],[.45,.16,.62],[.95,.35,.55]];for(let x=0;x<c.count/3;x++){let m=d[Math.floor(RE(x+17)*5.99)];for(let g=0;g<3;g++)h.set(m,(x*3+g)*3)}for(let x=0;x<c.count;x++){let m=c.getX(x),g=c.getY(x),_=c.getZ(x),v=Math.hypot(m,g,_);u[x*3]=m/v,u[x*3+1]=g/v,u[x*3+2]=_/v}l.setAttribute("color",new Vt(h,3)),l.setAttribute("normal",new Vt(u,3)),l.deleteAttribute("uv");let f=new ie({vertexColors:!0,roughness:.7}),p=new De(l,f,t.length);return t.forEach(([x,m,g],_)=>{a.makeTranslation(x,m,g),p.setMatrixAt(_,a)}),p.instanceMatrix.needsUpdate=!0,p.castShadow=!1,p.frustumCulled=!1,p.name="kusudama",[o,p]}var Am,kr,Xd,RE,J_=ne(()=>{we();ki();Br();Am=gn.find(s=>s.id==="ichi-arcade"),kr={z0:Am.a+2,z1:Am.b-2,half:Am.w/2,spring:7.6,crown:11.6},Xd=(s,t)=>{let e=s.attributes.position.count,n=new Float32Array(e*3);for(let i=0;i<e;i++)n.set(t,i*3);return s.setAttribute("color",new Vt(n,3)),s.deleteAttribute("uv"),s},RE=s=>{let t=Math.sin(s*12.9898)*43758.5453;return t-Math.floor(t)}});function PE(){let e=[],n=[],i=[],r=[],o=[],a=[];for(let g=0;g<20;g++){let _=g/20*Math.PI*2+hs(g)*.3,v=.1+.26*hs(g+40),M=3.3+1.5*hs(g+80),b=.085+.04*hs(g+120),w=Yc[(g+(hs(g+7)>.8?1:0))%5],y=_+1.57+(hs(g+11)-.5)*1,S=Math.cos(y),A=Math.sin(y),E=e.length/3;for(let R=0;R<=10;R++){let D=R/10,B=-.15-M*D,N=b*(1-.45*D);for(let F of[-1,1]){e.push(Math.cos(_)*v+S*N*F,B,Math.sin(_)*v+A*N*F);let G=.85+.3*hs(g*31+R);n.push(w[0]*G,w[1]*G,w[2]*G),i.push(D),r.push(hs(g+200)),o.push(-A,0,S)}}for(let R=0;R<10;R++){let D=E+R*2;a.push(D,D+1,D+2,D+1,D+3,D+2)}}let l=new Zt;l.setAttribute("position",new dt(e,3)),l.setAttribute("normal",new dt(o,3)),l.setAttribute("color",new dt(n,3)),l.setAttribute("aH",new dt(i,1)),l.setAttribute("aS",new dt(r,1)),l.setIndex(a);let c=new fi(.42,1).toNonIndexed(),h=c.attributes.position,u=h.count,d=new Float32Array(u*3),f=new Float32Array(u),p=new Float32Array(u),x=new Float32Array(u*3);for(let g=0;g<u/3;g++){let _=Yc[Math.floor(hs(g+3)*6.99)%Yc.length];for(let v=0;v<3;v++){let M=g*3+v;d.set(_,M*3),h.setY(M,h.getY(M)+.3)}}for(let g=0;g<u;g++){let _=h.getX(g),v=h.getY(g)-.3,M=h.getZ(g),b=Math.hypot(_,v,M);x[g*3]=_/b,x[g*3+1]=v/b,x[g*3+2]=M/b}c.setAttribute("color",new Vt(d,3)),c.setAttribute("aH",new Vt(f,1)),c.setAttribute("aS",new Vt(p,1)),c.setAttribute("normal",new Vt(x,3)),c.deleteAttribute("uv");let m=Ee([l.toNonIndexed(),c]);return m.deleteAttribute("uv"),m.computeBoundingSphere(),m.boundingSphere.radius+=1.6,m}function IE(){let s=[],t=[],e=[],n=[],i=[];for(let c of[0,Math.PI/2]){let h=Math.cos(c),u=Math.sin(c);for(let d=0;d<4;d++){let f=d/4,p=(d+1)/4,x=Yc[d%5],m=.28*(1-.5*f),g=.28*(1-.5*p),_=-.15-4.2*f,v=-.15-4.2*p,M=[[-m,_,f],[m,_,f],[-g,v,p],[m,_,f],[g,v,p],[-g,v,p]];for(let[b,w,y]of M)s.push(h*b,w,u*b),t.push(...x),e.push(y),n.push(.5),i.push(-u,0,h)}}let o=new Cs(.4,0).toNonIndexed(),a=o.attributes.position;for(let c=0;c<a.count;c++){s.push(a.getX(c),a.getY(c)+.3,a.getZ(c)),t.push(...Yc[(c>>2)%5]),e.push(0),n.push(0);let h=Math.hypot(a.getX(c),a.getY(c),a.getZ(c));i.push(a.getX(c)/h,a.getY(c)/h,a.getZ(c)/h)}let l=new Zt;return l.setAttribute("position",new dt(s,3)),l.setAttribute("normal",new dt(i,3)),l.setAttribute("color",new dt(t,3)),l.setAttribute("aH",new dt(e,1)),l.setAttribute("aS",new dt(n,1)),l.computeBoundingSphere(),l.boundingSphere.radius+=1.6,l}function Q_(s){let t=new ie({vertexColors:!0,roughness:.75,metalness:0,side:nn});return t.customProgramCacheKey=()=>"sendai-streamer-v1",t.onBeforeCompile=e=>{e.uniforms.uTime=s.uTime,e.uniforms.uGlow=s.uGlow,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
totalEmissiveRadiance += diffuseColor.rgb * uGlow;`)},t}function j_(s,t,e,n=80){let i=PE(),r=IE(),o=Q_(e),a=Q_(e),l=new Map;for(let g of s){let _=Math.floor(g.x/n)+","+Math.floor(g.z/n);(l.get(_)??l.set(_,[]).get(_)).push(g)}let c=new li;c.name="streamers";let h=[],u=new Ot,d=new pe,f=new P,p=new P,x=new P(0,1,0);for(let[,g]of l){for(let S=g.length-1;S>0;S--){let A=Math.floor(t()*(S+1));[g[S],g[A]]=[g[A],g[S]]}let _=(S,A)=>{let E=new De(S.clone(),A,g.length);E.geometry.boundingSphere=S.boundingSphere.clone();let R=new Float32Array(g.length);return g.forEach((D,B)=>{d.setFromAxisAngle(x,D.yaw),p.set(D.s,D.s,D.s),f.set(D.x,D.y,D.z),u.compose(f,d,p),E.setMatrixAt(B,u),R[B]=D.phase}),E.geometry.setAttribute("aPhase",new wn(R,1)),E.instanceMatrix.needsUpdate=!0,E.castShadow=!1,E.receiveShadow=!1,E.frustumCulled=!0,E.computeBoundingSphere(),E},v=_(i,o),M=_(r,a);v.name="streamer-near",M.name="streamer-far";let b=0,w=0;for(let S of g)b+=S.x,w+=S.z;b/=g.length,w/=g.length;let y=0;for(let S of g)y=Math.max(y,Math.hypot(S.x-b,S.z-w));c.add(v,M),h.push({near:v,far:M,n:g.length,cx:b,cz:w,rad:y})}let m=s.length;return{group:c,chunks:h,total:m,setFraction(g){for(let _ of h){let v=Math.max(0,Math.min(_.n,Math.ceil(_.n*g)));_.near.count=v,_.far.count=v}},updateLod(g,_){let v=0,M=0;for(let b of h){let y=Math.hypot(g.x-b.cx,g.z-b.cz)-b.rad>_;b.near.visible=!y,b.far.visible=y,y?M+=b.far.count:v+=b.near.count}return{nearN:v,farN:M}},geoTris:{near:i.index?i.index.count/3:i.attributes.position.count/3,far:r.attributes.position.count/3}}}var Yc,hs,tv=ne(()=>{we();ki();Yc=[[.06,.3,.85],[.88,.08,.1],[.96,.74,.08],[.92,.92,.88],[.45,.16,.62],[.95,.35,.55],[.1,.55,.3]],hs=s=>{let t=Math.sin(s*12.9898)*43758.5453;return t-Math.floor(t)}});function ev(){let s=new en(36,2600,1,1);s.rotateX(-Math.PI/2),s.translate(-340,.06,250);let t=new ie({color:727594,roughness:.05,metalness:0,envMapIntensity:1.4,emissive:new ot(.03,.075,.15),polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});t.customProgramCacheKey=()=>"sendai-river-v1";let e=new Jt(s,t);return e.name="river",e.receiveShadow=!1,e}function nv(){let s=-364,t=-316,e=46,n=.35,i=[],r=(c,h,u,d,f,p,x)=>i.push(Gi(new ye(d,f,p).translate(c,h,u),x));r(-340,n,230,t-s,.7,e,[.1,.1,.11]);for(let c of[-1,1]){r(-340,n+.9,230+c*(e/2-.2),t-s,1,.35,[.5,.5,.48]);for(let h=s+4;h<t;h+=14)r(h,n+.2,230+c*(e/2-.2),1.2,2.2,1,[.45,.45,.43])}let o=[];for(let c of[-1,1])for(let h=s+3;h<=t;h+=9)o.push([h,7.5,230+c*(e/2-1)]);let a=new ie({vertexColors:!0,roughness:.8});a.customProgramCacheKey=()=>"sendai-bridge-v1";let l=new Jt(Ee(i),a);return l.name="bridge",l.castShadow=!1,l.receiveShadow=!0,{mesh:l,lights:o}}function iv(s){let t=(f,p,x,m)=>{let g=new di(f,p,7,1).translate(0,x+p/2,0);return Gi(g,m)},e=Ee([Gi(new Re(.25,.35,2,5).translate(0,1,0),[.12,.09,.07]),t(2.5,6.5,1.5,[.07,.14,.07]),t(1.8,5.5,5.5,[.09,.18,.08])]),n=new ie({vertexColors:!0,roughness:.95,metalness:0});n.customProgramCacheKey=()=>"sendai-forest-v1";let i=[],r=0;for(;i.length<2200&&r++<4e4;){let f=Fr.x0-s()*800,p=250+(s()-.5)*1500,x=Wd(f,p);x<4||Math.hypot(f-Ke.x,p-Ke.z)<46||s()>.35+.65*Math.min(1,x/40)||i.push([f,x,p,.8+s()*.9])}let o=new De(e,n,i.length),a=new Ot,l=new pe,c=new P,h=new P,u=new ot,d=new P(0,1,0);return i.forEach(([f,p,x,m],g)=>{l.setFromAxisAngle(d,s()*6.283),c.set(m,m*(.9+.5*s()),m),h.set(f,p-.3,x),a.compose(h,l,c),o.setMatrixAt(g,a);let _=.75+.5*s();u.setRGB(_,_*(.95+.1*s()),_*.9),o.setColorAt(g,u)}),o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0,o.castShadow=!1,o.receiveShadow=!1,o.name="aobayama-forest",{mesh:o,count:i.length,tris:e.index?e.index.count/3:e.attributes.position.count/3}}function sv(){let s=[],t=[.02,.022,.02],e=[.05,.05,.05],n=(l,c,h,u,d,f,p=t,x=0,m=0)=>{let g=new ye(u,d,f);x&&g.rotateZ(x),m&&g.rotateY(m),g.translate(l,c,h),s.push(Gi(g,p))};n(0,1.6,0,6.2,3.2,3.8,e),n(0,3.6,0,5.2,.8,3,e);let i=3.9;n(0,i+1.7,0,3.8,1.3,1.25),n(1.9,i+2.6,0,1.4,1.5,.95,t,-.5),n(2.7,i+3.1,0,1.15,.65,.6,t,-.15),n(-2,i+1.9,0,1.2,1.2,.5,t,.7);for(let[l,c]of[[1.4,.4],[1.4,-.4],[-1.4,.4],[-1.4,-.4]])n(l,i+.55,c,.34,1.7,.34);n(-.1,i+3,0,.9,1.5,.75),n(-.8,i+2.8,0,1,1.7,1.2,t,.25),s.push(Gi(new Ti(.36,8,6).translate(0,i+4,0),t));let r=new Mr(.62,.07,4,14,Math.PI);r.rotateZ(Math.PI*0),r.rotateY(Math.PI/2),r.translate(0,i+4.35,0),s.push(Gi(r,t)),n(.55,i+3.3,.2,.2,1.4,.2,t,-.6);let o=new ie({vertexColors:!0,roughness:.9,metalness:0});o.customProgramCacheKey=()=>"sendai-statue-v1";let a=new Jt(Ee(s),o);return a.name="masamune-silhouette",a.castShadow=!1,a.receiveShadow=!1,a.position.set(Ke.x+24,Or,Ke.z-3),a.rotation.y=0,a}function rv(){let s=[],t=new _r(30,40);t.rotateX(-Math.PI/2),t.translate(Ke.x,Or+.08,Ke.z),s.push(Gi(t,[.3,.28,.25]));let e=[];for(let r=-75;r<=75;r+=6){if(Math.abs(r)<14)continue;let o=33,a=r*Math.PI/180,l=Ke.x+Math.cos(a)*o,c=Ke.z+Math.sin(a)*o,h=new ye(2.4,3.4,6.6);h.rotateY(-a),h.translate(l,Or-.5,c),s.push(Gi(h,[.36,.34,.31]));let u=new ye(2,.5,6.4);u.rotateY(-a),u.translate(l,Or+1.4,c),s.push(Gi(u,[.42,.4,.36]))}for(let r=-90;r<=90;r+=12){let o=r*Math.PI/180,a=28,l=new ye(.1,1,5.4);l.rotateY(-o),l.translate(Ke.x+Math.cos(o)*a,Or+.6,Ke.z+Math.sin(o)*a),s.push(Gi(l,[.12,.12,.13])),e.push([Ke.x+Math.cos(o)*(a-1.5),Or+3.2,Ke.z+Math.sin(o)*(a-1.5)])}let n=new ie({vertexColors:!0,roughness:.9,emissive:new ot(.05,.035,.02)});n.customProgramCacheKey=()=>"sendai-plateau-v1";let i=new Jt(Ee(s),n);return i.name="castle-ruins",i.receiveShadow=!0,{mesh:i,lights:e}}function ov(s,t=1800){let e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),r=0,o=0;for(;r<t&&o++<1e5;){let a=Xs.x1+40+Math.pow(s(),1.7)*5200,l=(s()-.5)*4200+200,c=Math.hypot(a-330,l-150);if(s()>Math.exp(-c/2200)*1.1||Math.abs(l*.01%1)>.35&&s()<.6)continue;e.set([a,4+s()*22,l],r*3);let h=s(),u=1.4+s()*1.6;n.set(h<.7?[u*1,u*.72,u*.4]:[u*.8,u*.9,u*1],r*3),i[r]=1.4+s()*2.2,r++}return{positions:e.slice(0,r*3),colors:n.slice(0,r*3),sizes:i.slice(0,r),count:r}}var Gi,av=ne(()=>{we();ki();Br();Gi=(s,t)=>{let e=s.attributes.position.count,n=new Float32Array(e*3);for(let i=0;i<e;i++)n.set(t,i*3);return s.setAttribute("color",new Vt(n,3)),s.deleteAttribute("uv"),s}});function lv(){let s=[];for(let t of gn){if(t.kind===3)continue;let e=t.w/2-1.2,n=Math.floor((t.b-t.a)/36);for(let i=0;i<=n;i++)for(let r of[-1,1]){let o=t.a+i*36+(r>0?18:0);if(o>t.b)continue;let a=t.dir==="x"?o:t.c+r*e,l=t.dir==="x"?t.c+r*e:o,c=t.dir==="x"?0:-r,h=t.dir==="x"?-r:0;s.push({base:[a,l],top:[a+c*1.5,9,l+h*1.5],yaw:Math.atan2(-h,c)})}}return s}function cv(){let s=[];for(let t of gn.filter(e=>e.kind===1||e.kind===2))for(let e of gn.filter(n=>n.kind===0&&n.dir==="z"&&n.a<=t.c&&n.b>=t.c&&t.a<n.c&&t.b>n.c))for(let n of[-1,1])for(let i of[-1,1])s.push({x:e.c+n*(e.w/2+1.2),z:t.c+i*(t.w/2-1.5),green:n*i>0});return s}function hv(s,t){let e=a=>Hr(new Re(.07,.13,a,6,1).translate(0,a/2,0),[.16,.17,.18]),n=Ee([e(9),Hr(new ye(1.6,.1,.1).translate(.75,8.95,0),[.16,.17,.18]),Hr(new ye(.6,.14,.3).translate(1.5,8.9,0),[.4,.4,.36])]),i=Ee([e(6.5),Hr(new ye(.3,.9,.3).translate(0,6.2,0),[.1,.1,.11])]),r=new ie({vertexColors:!0,roughness:.6,metalness:.4});r.customProgramCacheKey=()=>"sendai-pole-v1";let o=(a,l)=>{let c=new De(a,r,l.length),h=new Ot,u=new pe,d=new P,f=new P(1,1,1);return l.forEach((p,x)=>{u.setFromAxisAngle(new P(0,1,0),p.yaw??0),d.set(p.base?p.base[0]:p.x,0,p.base?p.base[1]:p.z),h.compose(d,u,f),c.setMatrixAt(x,h)}),c.instanceMatrix.needsUpdate=!0,c.castShadow=!1,c.frustumCulled=!1,c};return[o(n,s),o(i,t)]}function uv(){let s=Ws[0],t=s.x0+8,e=s.x1-40,n=s.z0+6,i=s.z1-5,r=8.4,o=[.55,.54,.52],a=[.22,.23,.25],l=[],c=(x,m,g,_,v,M,b)=>l.push(Hr(new ye(_,v,M).translate(x,m,g),b));c((t+e)/2,r,(n+i)/2,e-t,.9,i-n,o);let h=[],u=(x,m,g,_)=>{let v=Math.hypot(g-x,_-m),M=new ye(v,1,.18);M.rotateY(-Math.atan2(_-m,g-x)),M.translate((x+g)/2,r+.95,(m+_)/2),l.push(Hr(M,a));for(let b=0;b<v;b+=9)h.push([x+(g-x)*b/v,r+1.25,m+(_-m)*b/v])};u(t,n,e,n),u(t,i,e,i),u(t,n,t,i),u(e,n,e,i);for(let x=t+10;x<e;x+=24)for(let m of[n+5,i-5])l.push(Hr(new Re(.7,.8,r,8).translate(x,r/2,m),o));c(t+14,r+2.2,(n+i)/2,6,3.6,8,a);let d=Ee(l),f=new ie({vertexColors:!0,roughness:.8,metalness:.05,emissive:new ot(1,.7,.4),emissiveIntensity:0});f.customProgramCacheKey=()=>"sendai-deck-v1";let p=new Jt(d,f);return p.castShadow=!0,p.receiveShadow=!0,p.name="deck",p.frustumCulled=!1,{mesh:p,mat:f,lights:h,bounds:{x0:t,x1:e,z0:n,z1:i,y:r}}}var Hr,dv=ne(()=>{we();ki();Br();Hr=(s,t)=>{let e=s.attributes.position.count,n=new Float32Array(e*3);for(let i=0;i<e;i++)n.set(t,i*3);return s.setAttribute("color",new Vt(n,3)),s.deleteAttribute("uv"),s}});var fv,pv,Cm,mv,gv,qd,xv=ne(()=>{we();Nd();Ud();zc();kc();pm();dm();Bc();cs();Gd();ha();Em();X_();J_();tv();av();dv();Br();fv=1200,pv=new P(...z_).normalize(),Cm=[{zenith:"#2a66b6",horizon:"#bcd3ec",horizonWarm:"#ffc488",sun:"#ffd6a6",cloudLit:"#ffe3c8",cloudDark:"#8da3c4",fog:"#c8d6e8",sunCol:"#ffcf9a",fogD:5e-5},{zenith:"#17387a",horizon:"#6f96c8",horizonWarm:"#f7965a",sun:"#ff9a62",cloudLit:"#f2aa8e",cloudDark:"#45588c",fog:"#7f9cc6",sunCol:"#ff9a60",fogD:6e-5},{zenith:"#060f2c",horizon:"#1b3a6e",horizonWarm:"#3a4f82",sun:"#ff9a60",cloudLit:"#3a4a70",cloudDark:"#0c1630",fog:"#1a3156",sunCol:"#ff9a60",fogD:7e-5}],mv=s=>s.dir==="x"?{x0:s.a,x1:s.b,z0:s.c-s.w/2,z1:s.c+s.w/2}:{x0:s.c-s.w/2,x1:s.c+s.w/2,z0:s.a,z1:s.b},gv=(s,t,e=0)=>s.x0-e<t.x1&&s.x1+e>t.x0&&s.z0-e<t.z1&&s.z1+e>t.z0,qd=class extends Vs{constructor(t,e,n,i={}){super(t,e,n,i),this.timeOffset=zr.globalStart,this.duration=zr.duration,this.timeline.duration=this.duration,this.timeline.frameCount=Math.round(this.duration*this.timeline.fps),this.showTitle=!1,this.fadeSec=0,this.fx=i.fx??{},this.nightU={value:.1},this.snowU={value:0},this.ambientCount=0,this.streamU={uTime:{value:0},uGlow:{value:.05}},this.shopU={uShopGlow:{value:.05}},this.lodDist=150}async build(){let t=ua(20260806),e=this.scene,n=Cm[0],i=da(Ht,{sunDir:pv,colors:{...n,cloudCover:.2}});if(this.sky=i,e.add(i.mesh),e.fog=new hi(new ot(n.fog),n.fogD),this.glRenderer){let c=new bn;c.add(new Jt(i.mesh.geometry,i.material));let h=new _i(this.glRenderer);e.environment=h.fromScene(c,.015,1,3e3).texture,h.dispose()}let r=new gi(16764826,3.3),o=new P(-150,0,100);r.position.copy(o).addScaledVector(pv,3e3),r.target.position.copy(o),r.castShadow=!0,r.shadow.mapSize.set(4096,4096);let a=r.shadow.camera;a.left=-820,a.right=820,a.top=520,a.bottom=-520,a.near=200,a.far=6500,r.shadow.bias=-2e-4,r.shadow.normalBias=.9,e.add(r,r.target),this.sun=r,this.hemi=new mi(14674687,13226408,.55),e.add(this.hemi),e.add(this._buildGround()),e.add(this._buildBluff()),e.add(this._buildFarMountains()),this._buildBlocks(t),this._buildLamps(),this._buildStation(),this._buildTreesAll(t),this._buildArcade(t),this._buildCastleSection(t),this._buildTraffic(t),this.rig=new pa(zr);let l=c=>new as(c.map(([h,u])=>({t:h,v:u})));this.tracks={night:l([[0,.1],[1.2,.3],[2.6,.6],[4.2,.85],[7,1]]),palette:l([[0,0],[1.2,.5],[3,1],[5,1.45],[7,1.85]]),sunPower:l([[0,3.3],[1.5,2.3],[3,1.2],[4.5,.5],[7,.1]]),envPower:l([[0,.7],[3,.5],[7,.25]]),exposure:l([[0,1],[7,1]]),bloom:l([[0,.25],[3,.4],[7,.55]]),bloomThreshold:l([[0,1.4],[7,1]]),bloomRadius:l([[0,.55],[7,.7]]),dofAperture:l([[0,.6],[7,.6]]),dofMaxBlur:l([[0,4],[7,5]])},this.look.grade={uShadowAmt:.3,uVig:.3,uSat:1.06,uGrain:.02,uAberr:6e-4,uHighTint:new ot(1.03,1,.95)},this._ca=new ot,this._cb=new ot,ca(this,{tiled:this.fx.tiled,haze:this.fx.haze,tileExclude:[this.cars.mesh,this.peds.mesh,this.pedsArcade.mesh,this.boxMesh],skyUniforms:this.sky.uniforms})}_buildGround(){let t=new en(24e3,24e3,1,1);t.rotateX(-Math.PI/2);let e=new ie({color:16777215,roughness:.85,metalness:0});e.customProgramCacheKey=()=>"sendai-ground-v4";let n=x=>x.kind===0?0:x.kind===3?1:2,i=[...gn].sort((x,m)=>n(x)-n(m)),r=i.map(x=>new de(x.dir==="x"?0:1,x.c,x.w,x.kind)),o=i.map(x=>new de(x.a,x.b,0,0)),a=[...ma,...Ws],l=a.map(x=>new de(x.x0,x.x1,x.z0,x.z1)),c=a.map(x=>Ws.includes(x)?1:0),h=i.length,u=a.length,d=this.nightU,f=Xs;e.onBeforeCompile=x=>{x.uniforms.uNight=d,x.uniforms.uStA={value:r},x.uniforms.uStB={value:o},x.uniforms.uPark={value:l},x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
          uniform float uNight; varying vec3 vWP;
          uniform vec4 uStA[${h}]; uniform vec4 uStB[${h}]; uniform vec4 uPark[${u}];
          ${Pn}`).replace("#include <color_fragment>",`#include <color_fragment>
          float gRough = 0.85; vec3 gEmis = vec3(0.0); float gBump = 1.0;
          {
            vec2 p = vWP.xz;
            float nz = fbm(p * 0.05), fine = vnoise(p * 1.9);
            float fw = fwidth(p.x) * 1.0 + 0.02;
            // \u5E02\u8857\u306E\u5916\u5074\u306F\u8349\u5730\u3001\u8857\u533A\u306E\u4E2D\uFF08\u5EFA\u7269\u306E\u8DB3\u5143\uFF09\u306F\u8217\u88C5
            float inCity = step(${f.x0.toFixed(1)}, p.x) * step(p.x, ${f.x1.toFixed(1)}) * step(${f.z0.toFixed(1)}, p.y) * step(p.y, ${f.z1.toFixed(1)});
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
            if (surf < -0.5) { float bank = 1.0 - smoothstep(20.0, 30.0, abs(p.x - (${(-340).toFixed(1)}))); c = mix(c, grass * 1.1, bank); }   // \u5DDD\u5CB8\u306F\u8349\u5730
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
totalEmissiveRadiance += gEmis;`)};let p=new Jt(t,e);return p.receiveShadow=!0,p.name="ground",p}_buildBluff(){let e=Fr.x0,n=-750,i=1250,r=150,o=170,a=new en(e- -1500,i-n,r,o);a.rotateX(-Math.PI/2),a.translate((-1500+e)/2,0,(n+i)/2);let l=a.attributes.position;for(let p=0;p<l.count;p++)l.setY(p,Wd(l.getX(p),l.getZ(p)));a.computeVertexNormals();let c=a.attributes.normal,h=new Float32Array(l.count*3),u=Fi(19);for(let p=0;p<l.count;p++){let x=l.getY(p),m=1-c.getY(p),g=u.fbm(l.getX(p)*.01,l.getZ(p)*.01,3),_=Math.min(1,x/20),v=.85+.3*g;h[p*3]=(.22+(.13-.22)*_+m*.25)*v,h[p*3+1]=(.32+(.23-.32)*_+m*.15)*v,h[p*3+2]=(.13+(.09-.13)*_+m*.1)*v}a.setAttribute("color",new Vt(h,3));let d=new ie({vertexColors:!0,roughness:.95,metalness:0,emissive:new ot(.035,.06,.04),polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});d.customProgramCacheKey=()=>"sendai-bluff-v1";let f=new Jt(a,d);return f.receiveShadow=!0,f.castShadow=!1,f.name="bluff",f.position.y=.02,f}_buildFarMountains(){let t=Fi(51),e=Fi(77),n=[{x:-24e3,z:22e3,h:1550,sx:6500,sz:5200},{x:-9e3,z:-19e3,h:1150,sx:3600,sz:3200},{x:-22e3,z:-3e3,h:850,sx:4800,sz:9500},{x:-17e3,z:11e3,h:700,sx:4200,sz:3800}],r=Fd(Ht,{heightFn:(h,u)=>{let d=0;for(let p of n)d+=p.h*Math.exp(-(((h-p.x)/p.sx)**2+((u-p.z)/p.sz)**2));let f=Math.hypot(h,u);return d+=(160+380*t.fbm(h*18e-5,u*18e-5,4))*Math.min(1,Math.max(0,(f-2500)/6500))*(.6+.8*e.fbm(h*4e-4,u*4e-4,3)),d},y:-4,rings:240,segs:400,thA:1.9,thB:4.4,snowLine:99999}),o=r.geometry.attributes.position,a=r.geometry.attributes.normal,l=new Float32Array(o.count*3),c=Fi(31);for(let h=0;h<o.count;h++){let u=o.getX(h),d=o.getZ(h),f=o.getY(h),p=1-a.getY(h),x=c.fbm(u*.0011,d*.0011,4),m=c.fbm(u*.006+5,d*.006,3),g=Math.min(1,Math.max(0,(p-.22)/.3))*Math.min(1,Math.max(0,(f-500)/500)),_=Math.min(1,Math.max(0,(f-900)/500)),v=[.14+.05*_+.03*x,.22-.02*_+.03*x,.1+.02*_],M=[.34,.32,.3],b=.88+.24*m;for(let w=0;w<3;w++)l[h*3+w]=(v[w]+(M[w]-v[w])*g*.7)*b}return r.geometry.setAttribute("color",new Vt(l,3)),r}_buildBlocks(t){let e=fa(Ht,{uNight:this.nightU,uSnow:this.snowU}),n=new Oi(Ht,e,4e3),i=gn.map(mv),r=[...ma,...Ws],o=new Set([Xs.x0,Xs.x1]),a=new Set([Xs.z0,Xs.z1]);for(let u of gn){let d=mv(u);u.dir==="z"?(o.add(d.x0),o.add(d.x1)):(a.add(d.z0),a.add(d.z1))}let l=[...o].sort((u,d)=>u-d),c=[...a].sort((u,d)=>u-d),h=1;for(let u=0;u<l.length-1;u++)for(let d=0;d<c.length-1;d++){let f=l[u],p=l[u+1],x=c[d],m=c[d+1];if(p-f<9||m-x<9)continue;let g=Math.max(1,Math.round((p-f)/27)),_=Math.max(1,Math.round((m-x)/25));for(let v=0;v<g;v++)for(let M=0;M<_;M++){let b=f+(p-f)*v/g,w=f+(p-f)*(v+1)/g,y=x+(m-x)*M/_,S=x+(m-x)*(M+1)/_,A={x0:b,x1:w,z0:y,z1:S};if(i.some(st=>gv(A,st,-.6))||r.some(st=>gv(A,st,2)))continue;let E=(b+w)/2,R=(y+S)/2;if(E<-314)continue;let D=Math.abs(R-230),B=Math.abs(R-0),N=Math.abs(E),F=16,G=44;D<62?(F=38,G=95):B<58&&(F=28,G=66),N<36&&R>20&&R<215&&(F=14,G=26),E>180&&R>60&&R<330&&(F=55,G=120),E<-240&&(F=10,G=28);let H=F+(G-F)*Math.pow(t(),1.3),et=H>60?t()<.6?2:0:H>30?t.pick([0,2,4]):t.pick([1,3,4,4]),V=w-b-1.2,Z=S-y-1.2;V<6||Z<6||n.add(E,0,R,V,H,Z,et,h+++t(),.35+.55*t())}}n.add(326,0,160,44,36,112,2,901.3,.7),n.add(300,0,96,30,70,30,0,902.1,.6),n.add(300,0,226,34,58,28,2,903.7,.6),n.add(350,0,160,18,84,40,2,904.4,.7),this.boxes=n,this.boxMesh=n.build({castShadow:!0}),this.scene.add(this.boxMesh)}_buildLamps(){let t=lv(),e=cv(),[n,i]=hv(t,e);this.scene.add(n,i);let r=new Float32Array(t.length*3),o=new Float32Array(t.length*3),a=new Float32Array(t.length);t.forEach((u,d)=>{r.set(u.top,d*3),o.set([3,1.9,.9],d*3),a[d]=1.1}),this.lamps=In(Ht,{positions:r,colors:o,sizes:a,fogDensity:5e-5,minPx:1.4,maxPx:22}),this.scene.add(this.lamps.points);let l=new Float32Array(e.length*3),c=new Float32Array(e.length*3),h=new Float32Array(e.length);e.forEach((u,d)=>{l.set([u.x,6.2,u.z],d*3),c.set(u.green?[.3,2.4,.9]:[2.6,.2,.12],d*3),h[d]=.5}),this.signals=In(Ht,{positions:l,colors:c,sizes:h,fogDensity:5e-5,minPx:1.4,maxPx:10}),this.scene.add(this.signals.points),this.lampCount=t.length,this.signalCount=e.length}_buildStation(){let t=uv();this.deck=t,this.scene.add(t.mesh);let e=new Float32Array(t.lights.length*3),n=new Float32Array(t.lights.length*3),i=new Float32Array(t.lights.length);t.lights.forEach((r,o)=>{e.set(r,o*3),n.set([2.4,1.6,.8],o*3),i[o]=.6}),this.deckGlow=In(Ht,{positions:e,colors:n,sizes:i,fogDensity:5e-5,minPx:1.4,maxPx:12}),this.scene.add(this.deckGlow.points)}_buildTreesAll(t){let e=W_(t);e.meshes.forEach(n=>this.scene.add(n)),this.treeCount=e.count,this.treeTris=e.tris}_buildArcade(t){let e=q_();e.meshes.forEach(l=>this.scene.add(l)),Y_(t,this.shopU).meshes.forEach(l=>this.scene.add(l));let i=Z_();this.arcadeGlow=In(Ht,{...i,fogDensity:5e-5,minPx:1.4,maxPx:16}),this.scene.add(this.arcadeGlow.points);let r=$_(t),[o,a]=K_(r.poles,r.balls);this.scene.add(o,a),this.streamers=j_(r.items,t,this.streamU),this.scene.add(this.streamers.group),this.decoCount=r.items.length,this.archCount=e.archCount}_buildCastleSection(t){this.scene.add(ev());let e=nv();this.scene.add(e.mesh);let n=rv();this.scene.add(n.mesh),this.scene.add(sv());let i=iv(t);this.scene.add(i.mesh),this.forestCount=i.count;let r=(a,l,c)=>{let h=new Float32Array(a.length*3),u=new Float32Array(a.length*3),d=new Float32Array(a.length);return a.forEach((f,p)=>{h.set(f,p*3),u.set(c,p*3),d[p]=l}),In(Ht,{positions:h,colors:u,sizes:d,fogDensity:5e-5,minPx:1.4,maxPx:16})};this.castleGlow=r([...n.lights,...e.lights],.8,[2.8,1.8,.9]),this.scene.add(this.castleGlow.points);let o=ov(t);this.farGlow=In(Ht,{positions:o.positions,colors:o.colors,sizes:o.sizes,fogDensity:3e-5,minPx:1.2,maxPx:6}),this.scene.add(this.farGlow.points),this.farLightCount=o.count}_buildTraffic(t){let e=[];for(let h of gn){if(h.kind===3)continue;let u=h.b-h.a,d=h.kind===0?[3.4]:h.kind===1?[6,12.4]:[10.4,14.6];for(let f of d)for(let p of[1,-1]){let x=Math.max(1,Math.round(u/70));for(let m=0;m<x;m++){let g=h.dir==="x"?p>0?-1:1:p>0?1:-1;e.push({alongX:h.dir==="x",dir:p,fixed:h.c+g*f,speed:t.range(6,12),off:t.range(0,4e3),len:u,min:h.a,ph:t()})}}}this.cars=Od(Ht,e),this.scene.add(this.cars.mesh);let n=e.length,i=new Float32Array(n*4*3),r=new Float32Array(n*4*3),o=new Float32Array(n*4);for(let h=0;h<n;h++)for(let u=0;u<4;u++){let d=(h*4+u)*3,f=u<2;f?(r[d]=3,r[d+1]=2.9,r[d+2]=2.3):(r[d]=2.4,r[d+1]=.1,r[d+2]=.07),o[h*4+u]=f?.7:.5}this.carGlow=In(Ht,{positions:i,colors:r,sizes:o,fogDensity:4e-5,minPx:1.4,maxPx:12}),this.scene.add(this.carGlow.points),this.carCount=n;let a=[],l=(h,u,d,f)=>{for(let p=0;p<f;p++)a.push({x0:u,x1:d,z:h+t.range(-.8,.8),dir:t()<.5?1:-1,speed:t.range(.9,1.5),off:t.range(0,800),ph:t()})};l(230-21.5,-420,300,55),l(230+21.5,-420,300,55);for(let h of[-3,3,-19.5,19.5])l(0+h,-235,105,30);l(109,-330,-10,12),l(121,-330,-10,12),l(109,10,330,12),l(121,10,330,12),this.peds=Hc(Ht,a),this.scene.add(this.peds.mesh),this.pedCount=a.length;let c=[];for(let h=0;h<90;h++)c.push({x0:-(kr.z1-2),x1:-(kr.z0+2),z:t.range(-5.2,5.2),dir:t()<.5?1:-1,speed:t.range(.7,1.3),off:t.range(0,800),ph:t()});this.pedsArcade=Hc(Ht,c),this.pedsArcade.mesh.rotation.y=Math.PI/2,this.pedsArcade.mesh.updateMatrix(),this.scene.add(this.pedsArcade.mesh),this.pedCount+=c.length}applyTime(t){let e=this.sampleTrack("palette",t,0),n=Math.min(1,Math.floor(e)),i=Math.min(1,e-n),r=Cm[n],o=Cm[Math.min(2,n+1)],a=this.sky.uniforms,l=(h,u)=>{this._ca.set(r[h]),this._cb.set(o[h]),u.value.lerpColors(this._ca,this._cb,i)};l("zenith",a.uZenith),l("horizon",a.uHorizon),l("horizonWarm",a.uHorizonWarm),l("sun",a.uSunColor),l("cloudLit",a.uCloudLit),l("cloudDark",a.uCloudDark),this._ca.set(r.fog),this._cb.set(o.fog),this.scene.fog.color.lerpColors(this._ca,this._cb,i),this.scene.fog.density=r.fogD+(o.fogD-r.fogD)*i,this._ca.set(r.sunCol),this._cb.set(o.sunCol),this.sun.color.lerpColors(this._ca,this._cb,i),this.nightU.value=this.sampleTrack("night",t,.1);let c=this.sampleTrack("sunPower",t,3);this.sun.intensity=c,a.uSunStrength.value=Math.min(1,c/2),this.hemi.intensity=.55*Math.max(.25,1-this.nightU.value*1),this.scene.environmentIntensity=this.sampleTrack("envPower",t,.6)}onBeforeRender({t,projScale:e,camera:n}){let i=t+this.timeOffset;this.sky.mesh.position.copy(n.position),this.sky.uniforms.uTime.value=i*5;let r=this.scene.fog.density;for(let a of[this.lamps,this.carGlow,this.signals,this.deckGlow,this.castleGlow,this.farGlow])a.uniforms.uProj.value=e,a.uniforms.uFog.value=r;let o=this.nightU.value;this.lamps.uniforms.uGain.value=.08+1*o,this.carGlow.uniforms.uGain.value=.5+.7*o,this.signals.uniforms.uGain.value=.6+.6*o,this.castleGlow.uniforms.uGain.value=.1+1*o,this.farGlow.uniforms.uGain.value=.04+1.3*o*o,this.deckGlow.uniforms.uGain.value=.1+1*o,this.deck.mat.emissiveIntensity=.02+.2*o,this.cars.update(i,this.carGlow.points.geometry.attributes.position.array),this.carGlow.points.geometry.attributes.position.needsUpdate=!0,this.peds.update(i),this.pedsArcade.update(i),this.streamU.uTime.value=i,this.streamU.uGlow.value=.04+.5*o,this.shopU.uShopGlow.value=.08+.9*o,this.arcadeGlow.uniforms.uProj.value=e,this.arcadeGlow.uniforms.uFog.value=r,this.arcadeGlow.uniforms.uGain.value=.15+1*o,this.lodStats=this.streamers.updateLod(n.position,this.lodDist)}setAmbientCount(t){this.ambientCount=t,this.streamers.setFraction(Math.min(1,t/fv)),this.lodDist=t>=fv?150:100}setLayoutWeight(t){this.rig.weight=t}}});var _v,vv=ne(()=>{_v=[{id:"cap-sendai",title:"SENDAI",sub:"\u4ED9\u53F0",a:-.05,b:.15},{id:"cap-aoba",title:"\u9752\u8449\u901A",sub:"Aoba-dori",a:.18,b:.34},{id:"cap-jozenji",title:"\u5B9A\u7985\u5BFA\u901A",sub:"Jozenji-dori",a:.37,b:.52},{id:"cap-tanabata",title:"\u4ED9\u53F0\u4E03\u5915",sub:"Sendai Tanabata",a:.55,b:.72},{id:"cap-aobajo",title:"\u9752\u8449\u57CE\u5740\u304B\u3089",sub:"From Aoba Castle Ruins",a:.75,b:1.08}]});var yv={};nh(yv,{default:()=>LE});var LE,Mv=ne(()=>{xv();vv();Em();LE={contract:1,meta:{id:"sendai",name:{ja:"\u4ED9\u53F0",en:"Sendai"},season:"summer",theme:"\u4E03\u5915\u306E\u5915\u3079\uFF08\u91D1\u8272\u306E\u5915\u65B9\u2192\u706F\u308A\u59CB\u3081\u308B\u8857\uFF09",docTitle:"SENDAI \u2014 JAPAN \u2014 THE CITY COLLECTION"},captions:_v,timeline:{globalStart:zr.globalStart,duration:zr.duration},ambient:{name:"\u5439\u304D\u6D41\u3057",counts:{normal:1200,light:700}},tuning:{haze:{start:500,end:5e3,strength:.65},grade:{expDay:1.08,expDusk:.92,highDusk:[1.09,1,.885]}},async buildScene(s){let t=new qd(s.cityMeta,s.index,s.total,{renderer:s.renderer,fx:s.fx});return await t.build(),t}}});var vi,Zc,Yn,xa,Gr,$c,Sv,wv,DE,NE,V3,UE,bv,W3,Tv,Ev,Ys=ne(()=>{vi=[{id:"gyoko",dir:"x",c:0,w:73,a:-160,b:30,kind:1},{id:"naka",dir:"z",c:0,w:22,a:-500,b:720,kind:2},{id:"harumi",dir:"x",c:720,w:35,a:-330,b:480,kind:3},{id:"eitai",dir:"x",c:-500,w:35,a:-330,b:480,kind:3},...[-385,-270,-155,115,230,345,460,575].map(s=>({id:`x${s}`,dir:"x",c:s,w:16,a:Math.abs(s)<330?-160:-330,b:330,kind:0})),{id:"wA",dir:"z",c:-150,w:18,a:-500,b:720,kind:0},{id:"eA",dir:"z",c:150,w:20,a:-500,b:720,kind:0},{id:"eB",dir:"z",c:250,w:18,a:-500,b:720,kind:0}],Zc=[{id:"station",x0:30,x1:346,z0:-60,z1:60}],Yn={x0:-190,x1:-160,z0:-330,z1:330},xa={x0:-420,x1:-190,z0:-330,z1:330},Gr={x0:-330,x1:560,z0:-520,z1:900},$c={w:14,deckY:9,pts:[[391,-260],[391,60],[330,250],[180,480],[62,690],[-60,900],[-260,1180]]},Sv=s=>s*Math.PI/180,wv=(s,t)=>[Math.sin(Sv(s))*t,720-Math.cos(Sv(s))*t],DE=221,NE=1500,V3=(()=>{let[s,t]=wv(DE,NE);return{x:s,z:t,height:333}})(),UE=249,bv=3e4,W3=(()=>{let[s,t]=wv(UE,bv);return{x:s,z:t,height:3776*(bv/100600)}})(),Tv=[-.93,-.07,.36],Ev=[[400,0],[0,0],[0,700]]});var FE,Av,OE,BE,zE,kE,HE,GE,Vr,Rm=ne(()=>{Ys();FE=0,Av=7,OE=s=>{let t=s*s*(3-2*s),e=1-(1-s)*(1-s);return .5*t+.5*e},BE=s=>Av*OE(Math.min(1,s/.94)),zE=s=>s,kE=[[0,[470,150,30],[250,12,0],40],[.14,[300,100,12],[-100,14,0],39],[.28,[60,40,6],[0,12,120],37],[.34,[4,16,40],[0,8,200],36],[.5,[0,11,210],[0,8,420],35],[.56,[0,6.5,270],[0,8,470],33],[.66,[0,6.5,430],[0,9,650],33],[.74,[0,10,620],[0,14,780],34],[.84,[-10,70,680],[-300,60,1100],38],[.94,[-30,200,640],[-760,140,1500],42],[1,[-30,200,640],[-760,140,1500],42]],HE=kE.map(([s,t,e,n])=>({t:BE(s),pos:t,target:e,fov:n,ease:zE})),GE=[[0,90,25,58,1,120,0],[.36,40,12,60,1,80,0],[.55,12,9,60,1,60,0],[.7,6.5,8,60,.8,55,0],[.93,7,9,60,.9,55,0],[1,40,30,56,3,-200,0]],Vr={globalStart:FE,duration:Av,landscapeKeys:HE,route:Ev,dolly:GE}});function Cv(s,t){let e=new en(24e3,24e3,1,1);e.rotateX(-Math.PI/2);let n=new ie({color:16777215,roughness:.9,metalness:0});n.customProgramCacheKey=()=>"tokyo-ground-v1";let i=f=>f.kind===0?0:f.kind===3?1:2,r=[...vi].sort((f,p)=>i(f)-i(p)),o=r.map(f=>new de(f.dir==="x"?0:1,f.c,f.w,f.kind)),a=r.map(f=>new de(f.a,f.b,0,0)),l=Zc.map(f=>new de(f.x0,f.x1,f.z0,f.z1)),c=r.length,h=Zc.length,u=Gr;n.onBeforeCompile=f=>{f.uniforms.uNight=s,f.uniforms.uSpill=t,f.uniforms.uStA={value:o},f.uniforms.uStB={value:a},f.uniforms.uPlaza={value:l},f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uNight, uSpill; varying vec3 vWP;
        uniform vec4 uStA[${c}]; uniform vec4 uStB[${c}]; uniform vec4 uPlaza[${h}];
        ${Pn}`).replace("#include <color_fragment>",`#include <color_fragment>
        float gRough = 0.9; vec3 gEmis = vec3(0.0); float gBump = 1.0;
        {
          vec2 p = vWP.xz;
          float nz = fbm(p * 0.05), fine = vnoise(p * 1.9);
          float inCity = step(${u.x0.toFixed(1)}, p.x) * step(p.x, ${u.x1.toFixed(1)}) * step(${u.z0.toFixed(1)}, p.y) * step(p.y, ${u.z1.toFixed(1)});
          vec3 outer = vec3(0.07, 0.09, 0.07) * (0.85 + 0.3 * nz);
          vec3 c = mix(outer, vec3(0.20, 0.20, 0.21) * (0.9 + 0.2 * fine), inCity);
          float surf = -1.0, lat = 99.0, alongRoad = 0.0, kindHit = -1.0, cHit = 0.0;
          for (int i = 0; i < ${c}; i++) {
            vec4 A = uStA[i], B = uStB[i];
            float along = A.x < 0.5 ? p.x : p.y;
            float off = abs((A.x < 0.5 ? p.y : p.x) - A.y);
            float half_ = A.z * 0.5;
            if (along > B.x && along < B.y && off < half_) {
              float kind = A.w; float s = 0.0;                              // 0=\u6B69\u9053 1=\u8ECA\u9053 2=\u7DD1\u5730\u5E2F 3=\u77F3\u5F35\u308A
              if (kind < 0.5) s = off < half_ - 3.4 ? 1.0 : 0.0;
              else if (kind < 1.5) s = off < 15.0 ? 3.0 : (off < 30.5 ? 1.0 : 0.0);   // \u884C\u5E78\u901A\u308A\uFF1A\u4E2D\u592E\u5E2F 30 m\uFF08\u77F3\u5F35\u308A\uFF09\u30FB\u8ECA\u9053\u30FB\u6B69\u9053
              else if (kind < 2.5) s = off < 4.0 ? 1.0 : 3.0;                       // \u4E38\u306E\u5185\u4EF2\u901A\u308A\uFF1A\u8ECA\u9053 8 m \uFF0B \u77F3\u5F35\u308A\u306E\u6B69\u9053
              else s = off < 12.0 ? 1.0 : 0.0;                                      // \u5E83\u3044\u901A\u308A
              surf = s; lat = off; alongRoad = along; kindHit = A.w; cHit = A.y;
            }
          }
          float zebra = 0.0;
          if (surf > 0.5 && surf < 1.5 && (kindHit > 0.5 && kindHit < 1.5 || kindHit > 2.5)) {
            for (int k = 0; k < ${c}; k++) {
              vec4 A2 = uStA[k], B2 = uStB[k];
              if (A2.x < 0.5 && A2.w < 0.5 && A2.x < 0.5) {}
              if (A2.x > 0.5 && A2.w < 0.5 && B2.x < cHit && B2.y > cHit) {
                float dx = abs(p.x - A2.y), e = A2.z * 0.5;
                if (dx > e + 1.0 && dx < e + 4.6) zebra = max(zebra, step(0.5, fract(p.y / 1.1)));
              }
            }
          }
          if (surf > -0.5) {
            vec3 roadC = mix(vec3(0.060, 0.062, 0.068), vec3(0.14, 0.14, 0.15), smoothstep(0.55, 0.95, nz) * 0.5);
            vec3 walkC = vec3(0.40, 0.39, 0.38) * (0.88 + 0.24 * fine);
            vec3 tileC = vec3(0.46, 0.43, 0.40) * (0.9 + 0.2 * vnoise(p * 0.7));
            float lineAt = kindHit < 0.5 ? 0.0 : (kindHit > 2.5 ? 6.0 : 22.5);
            float dash = step(0.5, fract(alongRoad / 8.0)) * (1.0 - smoothstep(0.1, 0.3, abs(lat - lineAt)));
            if (surf < 0.5) c = walkC;
            else if (surf < 1.5) { c = mix(roadC, vec3(0.62), dash * 0.55 * smoothstep(0.3, 0.7, fine)); c = mix(c, vec3(0.70), zebra * 0.8); gRough = 0.6; }
            else { c = tileC; float g = step(0.04, abs(fract(p.x / 1.5) - 0.5)) * step(0.04, abs(fract(p.y / 1.5) - 0.5)); c *= 0.9 + 0.1 * g; }
          }
          for (int j = 0; j < ${h}; j++) {
            vec4 R = uPlaza[j];
            if (p.x > R.x && p.x < R.y && p.y > R.z && p.y < R.w) { c = vec3(0.44, 0.41, 0.38) * (0.9 + 0.2 * vnoise(p * 0.7)); float g = step(0.04, abs(fract(p.x / 2.0) - 0.5)) * step(0.04, abs(fract(p.y / 2.0) - 0.5)); c *= 0.9 + 0.1 * g; surf = 3.0; }
          }
          // \u7687\u5C45\u5074\uFF08\u5916\u6FE0\u306E\u897F\uFF09\u306F\u6697\u3044\u7DD1\u5730
          if (p.x < ${xa.x1.toFixed(1)}) c = mix(c, vec3(0.02, 0.035, 0.03), 0.9);
          // \u5916\u6FE0\u306E\u6771\u5CB8\u306E\u77F3\u57A3\u30FB\u904A\u6B69\u9053
          diffuseColor.rgb = c;
          // \u591C\uFF1A\u8857\u706F\u306E\u6696\u767D\u306E\u5149\u3060\u307E\u308A\uFF08\u9053\u8DEF\u6CBF\u3044\uFF09\uFF0B\u30A4\u30EB\u30DF\u30CD\u30FC\u30B7\u30E7\u30F3\u306E\u91D1\u8272\u306E\u5149\u3060\u307E\u308A\uFF08\u4EF2\u901A\u308A\u30FB\u884C\u5E78\u901A\u308A\uFF1A\u62E1\u6563\uFF09
          float pool = pow(0.5 + 0.5 * cos(6.2831853 * alongRoad / 30.0), 3.0);
          float nearRoad = surf > -0.5 ? (1.0 - smoothstep(18.0, 30.0, lat)) : 0.0;
          gEmis = uNight * vec3(1.0, 0.78, 0.5) * nearRoad * (0.012 + 0.03 * pool);
          float gold = 0.0;
          if (kindHit > 1.5 && kindHit < 2.5 && p.y > ${(-480).toFixed(1)} && p.y < 740.0 ) gold = 1.0 - smoothstep(6.0, 16.0, lat);
          if (kindHit > 0.5 && kindHit < 1.5) gold = (1.0 - smoothstep(14.0, 30.0, lat)) * 0.6;
          float wave = 0.85 + 0.15 * sin(alongRoad * 0.12);
          gEmis += uSpill * vec3(1.0, 0.68, 0.30) * gold * wave * (0.05 + 0.03 * fine);
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
totalEmissiveRadiance += gEmis;`)};let d=new Jt(e,n);return d.receiveShadow=!1,d.name="ground",d}function Rv(s,t){let e=Yn.x1-Yn.x0,n=Yn.z1-Yn.z0,i=new en(e,n,1,1);i.rotateX(-Math.PI/2),i.translate((Yn.x0+Yn.x1)/2,.05,(Yn.z0+Yn.z1)/2);let r=new ie({color:330518,roughness:.08,metalness:0,envMapIntensity:1.2,emissive:new ot(.01,.02,.045),polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});r.customProgramCacheKey=()=>"tokyo-moat-v1",r.onBeforeCompile=a=>{a.uniforms.uNight=s,a.uniforms.uSpill=t,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight, uSpill; varying vec3 vWP;
${Pn}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          // \u6771\u5CB8\uFF08x=${Yn.x1}\uFF09\u306E\u706F\u308A\u304C\u6C34\u9762\u306B\u843D\u3061\u308B\uFF1A\u7E26\u9577\u306E\u63FA\u308C\u308B\u30B0\u30ED\u30FC\u5E2F\uFF08\u53CD\u8EE2\u3057\u305F\u5149\u70B9\u306E\u30A4\u30E1\u30FC\u30B8\uFF09
          float dx = ${Yn.x1.toFixed(1)} - vWP.x;
          float streak = vnoise(vec2(vWP.z * 0.35, vWP.x * 0.08 + 3.0));
          float band = exp(-dx * 0.09) * smoothstep(0.35, 0.8, streak);
          float lamps = pow(0.5 + 0.5 * cos(vWP.z * 0.2094), 6.0);   // \u7D04 30 m \u9593\u9694\u306E\u8857\u706F
          totalEmissiveRadiance += uSpill * vec3(1.0, 0.66, 0.30) * band * (0.04 + 0.16 * lamps);
        }`)};let o=new Jt(i,r);return o.name="moat",o}function Pv(){let s=xa.x0,t=xa.x1,e=xa.z0,n=xa.z1,i=40,r=120,o=new en(t-s,n-e,i,r);o.rotateX(-Math.PI/2),o.translate((s+t)/2,0,(e+n)/2);let a=o.attributes.position,l=new Float32Array(a.count*3),c=(d,f)=>12+5.5*(Math.sin(d*.07)*Math.sin(f*.045)+.6*Math.sin(d*.19+f*.11)+.4*Math.sin(f*.31-d*.05));for(let d=0;d<a.count;d++){let f=a.getX(d),p=a.getZ(d),x=Math.min(1,(t-f)/14),m=c(f,p)*Math.min(1,Math.max(.05,x))*(1-Math.min(1,Math.max(0,(Math.abs(p)-280)/50)));a.setY(d,Math.max(.5,m));let g=.8+.4*Math.sin(f*.5+p*.3);l[d*3]=.018*g,l[d*3+1]=.032*g,l[d*3+2]=.026*g}o.setAttribute("color",new Vt(l,3)),o.computeVertexNormals();let h=new ie({vertexColors:!0,roughness:1,metalness:0});h.customProgramCacheKey=()=>"tokyo-palace-v1";let u=new Jt(o,h);return u.name="palace-mass",u.position.y=.03,u}var Iv=ne(()=>{we();cs();Ys()});function Lv(s,t){let e=[],n=(a,l,c,h,u)=>e.push({a,b:l,r0:c,r1:h,lv:u}),i=s==="zelkova",r=i?4.2:5;n([0,0,0],[0,r,0],i?.3:.28,i?.22:.2,0);let o=i?5:6;for(let a=0;a<o;a++){let l=a/o*Math.PI*2+t()*.7,c=i?2.4+t()*.8:1+t()*.5,h=i?4+t()*1.2:5.5+t()*1.5,u=[Math.cos(l)*c,r+h,Math.sin(l)*c];n([0,r-.1,0],u,.15,.09,1);let d=2;for(let f=0;f<d;f++){let p=l+(f-.5)*1.1+(t()-.5)*.4,x=i?1.8+t()*.7:.7+t()*.4,m=i?2.6+t():3.8+t(),g=[u[0]+Math.cos(p)*x,u[1]+m,u[2]+Math.sin(p)*x];n(u,g,.08,.045,2);for(let _=0;_<2;_++){let v=p+(_-.5)*1.3+(t()-.5)*.5,M=i?1.1+t()*.5:.5+t()*.3,b=i?1.4+t()*.6:2+t()*.6;n(g,[g[0]+Math.cos(v)*M,g[1]+b,g[2]+Math.sin(v)*M],.045,.022,3)}}}return{limbs:e}}function Dv(s,t){let e=new Re(s.r1,s.r0,1,t,1,!0);e.translate(0,.5,0);let n=new P(s.b[0]-s.a[0],s.b[1]-s.a[1],s.b[2]-s.a[2]),i=n.length();e.scale(1,i,1),e.applyQuaternion(new pe().setFromUnitVectors(new P(0,1,0),n.normalize())),e.translate(s.a[0],s.a[1],s.a[2]);let r=e.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o.set(VE,a*3);return e.setAttribute("color",new Vt(o,3)),e.deleteAttribute("uv"),e}function WE(s){let t=Ee(s.limbs.map(n=>Dv(n,3))),e=Ee(s.limbs.filter(n=>n.lv<=1).map(n=>Dv({...n,r0:n.r0*1.6,r1:n.r1*2},3)));return{near:t,far:e,nearTris:t.index?t.index.count/3:t.attributes.position.count/3,farTris:e.index?e.index.count/3:e.attributes.position.count/3}}function YE(s){let t=[],e=vi.map(XE),n=(r,o,a)=>!vi.some((l,c)=>l!==a&&qE(e[c],r,o,l.kind===0?1:-2)),i=(r,o,a,l,c,h,u,d=r.a,f=r.b)=>{for(let p=d+l;p<f;p+=a){let x=r.dir==="x"?p:r.c+o,m=r.dir==="x"?r.c+o:p;n(x,m,r)&&t.push([x+s.range(-.3,.3),m+s.range(-.3,.3),c*s.range(.94,1.1),s(),h,u])}};for(let r of vi)if(r.id==="gyoko")for(let o of[-12.5,-4.2,4.2,12.5])i(r,o,11,6,1,"ginkgo",!0,r.a+6,r.b-2);else if(r.id==="naka")for(let o of[-7.5,7.5])i(r,o,9,4.5+(o>0?4.5:0),1,"zelkova",!0,r.a+14,r.b-14);else if(r.kind===3)for(let o of[-14.5,14.5])i(r,o,14,7,1,"zelkova",!1,r.a,r.b);else if(r.kind===0){let o=r.w/2-1.8;i(r,-o,22,8,.7,"zelkova",!1),i(r,o,22,19,.7,"zelkova",!1)}return t}function Nv(s){let t=(()=>{let _=7;return()=>(_=Math.imul(_,1664525)+1013904223>>>0)/4294967296})(),e={zelkova:[0,1,2].map(()=>Lv("zelkova",t)),ginkgo:[0,1].map(()=>Lv("ginkgo",t))},n={};for(let _ of Object.keys(e))n[_]=e[_].map(WE);let i=YE(s),r=new ie({vertexColors:!0,roughness:.95,metalness:0,side:nn}),o=new ie({vertexColors:!0,roughness:.9,metalness:0,side:nn,emissive:new ot(1,.62,.28),emissiveIntensity:0});r.customProgramCacheKey=()=>"tokyo-bark-v1",o.customProgramCacheKey=()=>"tokyo-bark-lit-v1";let a=new Map;i.forEach((_,v)=>{let[M,b,,w,y,S]=_,A=`${S?"L":"P"}|${y}|${Math.floor(M/80)}|${Math.floor(b/80)}`;a.has(A)||a.set(A,[]),a.get(A).push(v)});let l=[],c=new Ot,h=new pe,u=new P,d=new P,f=new P(0,1,0),p=i.map(([_,v,M,b,w,y])=>({x:_,z:v,sc:M,yaw:b*6.283,v:Math.floor(b*1e3)%e[w].length,type:w,lit:y}));for(let[_,v]of a){let[M,b]=_.split("|"),w=M==="L"?o:r,y=E=>{let R={};v.forEach(B=>{var N;(R[N=p[B].v]??(R[N]=[])).push(B)});let D=[];for(let[B,N]of Object.entries(R)){let F=new De(n[b][B][E],w,N.length);N.forEach((G,H)=>{let et=p[G];h.setFromAxisAngle(f,et.yaw),u.set(et.sc,et.sc,et.sc),d.set(et.x,0,et.z),c.compose(d,h,u),F.setMatrixAt(H,c)}),F.instanceMatrix.needsUpdate=!0,F.castShadow=!1,F.receiveShadow=!1,F.frustumCulled=!0,F.computeBoundingSphere(),F.name=`tree-${b}-${E}`,D.push(F)}return D},S=0,A=0;v.forEach(E=>{S+=p[E].x,A+=p[E].z}),S/=v.length,A/=v.length,l.push({near:y("near"),far:y("far"),cx:S,cz:A,lit:M==="L"})}let x=l.flatMap(_=>[..._.near,..._.far]),m=Math.max(...Object.values(n).flat().map(_=>_.nearTris)),g=Math.max(...Object.values(n).flat().map(_=>_.farTris));return{chunks:l,meshes:x,placed:p,variants:e,count:i.length,litCount:p.filter(_=>_.lit).length,nearTris:m,farTris:g,mats:[o],updateLod(_){let v=0;for(let M of l){let w=Math.hypot(M.cx-_.x,M.cz-_.z)<ZE+40;for(let y of M.near)y.visible=w;for(let y of M.far)y.visible=!w;w&&v++}return v}}}var VE,XE,qE,ZE,Uv=ne(()=>{we();ki();Ys();VE=[.055,.045,.04];XE=s=>s.dir==="x"?{x0:s.a,x1:s.b,z0:s.c-s.w/2,z1:s.c+s.w/2}:{x0:s.c-s.w/2,x1:s.c+s.w/2,z0:s.a,z1:s.b},qE=(s,t,e,n=0)=>t>s.x0-n&&t<s.x1+n&&e>s.z0-n&&e<s.z1+n;ZE=170});function $E(s,t){let e=[2.3,1.45,.55],n=.16,i=new Map,r=new pe,o=new P(0,1,0),a=new P;for(let l of s.placed){if(!l.lit)continue;let c=s.variants[l.type][l.v];r.setFromAxisAngle(o,l.yaw);let h=l.type==="zelkova",u=`${l.type}|${Math.floor((h?l.z:l.x)/80)}`;i.has(u)||i.set(u,{pos:[],phase:[],u:[],rnd:[],cx:0,cz:0,n:0});let d=i.get(u);for(let f of c.limbs){if(f.lv===0)continue;let p=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1],f.b[2]-f.a[2]),x=Math.max(1,Math.round(p/(f.lv===3?.55:.7)));for(let m=0;m<x;m++){let g=(m+.5)/x;a.set(f.a[0]+(f.b[0]-f.a[0])*g,f.a[1]+(f.b[1]-f.a[1])*g,f.a[2]+(f.b[2]-f.a[2])*g).applyQuaternion(r).multiplyScalar(l.sc);let _=l.x+a.x,v=a.y,M=l.z+a.z;d.pos.push(_,v,M);let b=Math.sin((d.pos.length+l.yaw*977)*12.9898)*43758.5453,w=b-Math.floor(b);d.phase.push(w*6.2832),d.rnd.push(w*7.3%1),d.u.push(h?M:_)}}}return{groups:[...i.values()],color:e,size:n}}function Fv(s,t){let{groups:e,color:n,size:i}=$E(s,t),r={uProj:{value:1e3},uFog:{value:4e-5},uGain:{value:1},uMinPx:{value:1.5},uMaxPx:{value:14},uTime:{value:0},uTwFrac:{value:1},uTwAmp:{value:.28}},o=new He({uniforms:r,transparent:!0,depthWrite:!1,blending:Ds,vertexShader:`
      attribute float aPhase, aU, aR;
      uniform float uProj, uFog, uGain, uMinPx, uMaxPx, uTime, uTwFrac, uTwAmp;
      varying vec3 vCol;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float dist = max(-mv.z, 0.1);
        float px = ${i.toFixed(3)} * uProj / dist;
        float fade = clamp(px / uMinPx, 0.0, 1.0);
        gl_PointSize = clamp(px, uMinPx, uMaxPx);
        float tw = aR < uTwFrac ? 1.0 : 0.0;                                    // \u660E\u6EC5\u3055\u305B\u308B\u70B9\u306E\u5272\u5408\uFF08ambient \u306E\u500B\u6570\uFF09
        float wave = 0.5 + 0.5 * sin(aU * 0.045 - uTime * 1.3);                 // \u901A\u308A\u306B\u6CBF\u3063\u3066\u3086\u3063\u304F\u308A\u6D41\u308C\u308B\u5149\u306E\u6CE2
        float b = 1.0 + tw * (uTwAmp * sin(uTime * 2.1 + aPhase) + 0.22 * (wave - 0.5));
        float fog = exp(-pow(uFog * dist, 2.0));
        vCol = vec3(${n[0].toFixed(2)}, ${n[1].toFixed(2)}, ${n[2].toFixed(2)}) * uGain * b * fog * fade * fade;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying vec3 vCol;
      void main(){ vec2 q = gl_PointCoord * 2.0 - 1.0; float d2 = dot(q, q); if (d2 > 1.0) discard; gl_FragColor = vec4(vCol * exp(-d2 * 3.5), 1.0); }`}),a=[],l=0;for(let c of e){let h=c.pos.length/3;l+=h;let u=new Zt;u.setAttribute("position",new dt(c.pos,3)),u.setAttribute("aPhase",new dt(c.phase,1)),u.setAttribute("aU",new dt(c.u,1)),u.setAttribute("aR",new dt(c.rnd,1)),u.computeBoundingSphere(),u.boundingSphere.radius+=6;let d=new gr(u,o);d.frustumCulled=!0,d.name="leds",a.push(d)}return{chunks:a,uniforms:r,count:l}}var Ov=ne(()=>{we();Ys()});function zv(){let s=346,t=24,e=[],n=[],i=(_,v,M,b,w,y,S)=>e.push(Ln(new ye(b,w,y).translate(_,v,M),S)),r=(_,v,M,b=!0)=>{let w=v-_,y=(_+v)/2;if(i(s+t/2,M/2,y,t,M,w,Pm),i(s-.15,7.2,y,.7,.9,w+.4,kn),i(s-.15,13.4,y,.7,.9,w+.4,kn),i(s-.25,M,y,1.4,1.1,w+.6,kn),i(s-.1,.8,y,.6,1.6,w+.4,kn),b){let S=new ye(t-1,5.2,w-.6);S.translate(s+t/2,M+2.6,y),e.push(Ln(S,Kc));let A=new ye(t-8,3,w-4);A.translate(s+t/2+1,M+6.6,y),e.push(Ln(A,Kc))}},o=_=>{i(s+11,12.5,_,22,25,30,Pm),i(s-.2,25,_,1.6,1.2,31,kn),i(s-.2,7.2,_,.8,.9,30.4,kn),i(s-.2,13.4,_,.8,.9,30.4,kn);let v=new Re(11,12,3.2,8).translate(s+11,26.6,_);e.push(Ln(v,kn));let M=new Ti(10.5,16,8,0,Math.PI*2,0,Math.PI/2);M.scale(1,1.05,1),M.translate(s+11,28.2,_),e.push(Ln(M,Bv)),e.push(Ln(new Re(1.6,2.2,5,8).translate(s+11,41.5,_),kn)),e.push(Ln(new di(2,6,8).translate(s+11,46.5,_),Bv));for(let b=0;b<8;b++){let w=b/8*Math.PI*2+Math.PI/8;e.push(Ln(new ye(.8,2.2,2.6).translate(s+11+Math.cos(w)*10.2,31.5,_+Math.sin(w)*10.2),kn))}};r(-136,-24,21.5),r(24,136,21.5),o(-152),o(152),i(s+12,13.5,0,24,27,46,Pm),i(s-2,4.5,0,4.2,9,22,kn),i(s-.2,27,0,1.6,1.2,47,kn);{let _=new Re(9,9,46,3,1);_.rotateX(Math.PI/2),_.rotateZ(Math.PI),_.scale(1,.6,1),_.translate(s+12,27+2.7,0),e.push(Ln(_,Kc))}e.push(Ln(new ye(.8,4.5,20).translate(s-.6,25.6,0),kn));let a=[],l=(_,v,M)=>{for(let b=_+1.8;b<v-1;b+=3.6){i(s-.35,10.5,b-1.8,.7,20.6,.55,kn);for(let w of M)e.push(Ln(new ye(.4,.35,2.3).translate(s-.15,w+2.15,b),Yd)),e.push(Ln(new ye(.4,.35,2.5).translate(s-.2,w-.2,b),Yd)),e.push(Ln(new ye(.3,2.3,.3).translate(s-.12,w+1,b-1.1),Yd)),e.push(Ln(new ye(.3,2.3,.3).translate(s-.12,w+1,b+1.1),Yd)),a.push([b,w+1])}};l(-136,-24,[1.6,8,14.4]),l(24,136,[1.6,8,14.4]),l(-23,23,[1.6,8,14.4,20]);for(let _ of[-152,152])l(_-14,_+14,[1.6,8,14.4,19.2]);for(let[_,v]of[[-136,-24],[24,136]])for(let M=_+3.6;M<v;M+=7.2){i(s+3.2,21.5+3.6,M,2.6,3,2.6,Kc);{let b=new di(2.1,1.8,4);b.rotateY(Math.PI/4),b.translate(s+3.2,21.5+6,M),e.push(Ln(b,Kc))}a.push([M,21.5+3.4,"dormer"])}let c=Ee(e),h=new ie({vertexColors:!0,roughness:.85,metalness:.02,emissive:new ot(.55,.3,.16),emissiveIntensity:0});h.customProgramCacheKey=()=>"tokyo-station-v1";let u=new Jt(c,h);u.name="tokyo-station",u.castShadow=!1,u.receiveShadow=!1;let d=[],f=[];for(let _ of a){let v=_[0],M=_[1],b=_[2]?.7:.95,w=_[2]?.9:1.15,y=d.length/3,S=s-.02;d.push(S,M-w,v-b,S,M-w,v+b,S,M+w,v+b,S,M+w,v-b),f.push(y,y+1,y+2,y,y+2,y+3)}let p=new Zt;p.setAttribute("position",new dt(d,3)),p.setIndex(f);let x=new On({color:new ot(1,.72,.4),side:nn,fog:!0}),m=new Jt(p,x);m.name="tokyo-station-windows";let g=(c.index?c.index.count:c.attributes.position.count)/3+f.length/3;return{meshes:[u,m],mat:h,winMat:x,tris:g}}var Ln,Pm,kn,Kc,Bv,Yd,kv=ne(()=>{we();ki();Ys();Ln=(s,t)=>{let e=s.attributes.position.count,n=new Float32Array(e*3);for(let i=0;i<e;i++)n.set(t,i*3);return s.setAttribute("color",new Vt(n,3)),s.deleteAttribute("uv"),s},Pm=[.4,.13,.1],kn=[.6,.56,.48],Kc=[.07,.08,.09],Bv=[.08,.15,.13],Yd=[.52,.48,.42]});function Hv(){let s=[],t=(e,n,i,r,o,a)=>{for(let l=e.a+o;l<e.b;l+=r){let c=e.dir==="x"?l:e.c+n*i,h=e.dir==="x"?e.c+n*i:l;s.push({x:c,z:h,h:a})}};for(let e of vi)if(e.id==="gyoko")for(let n of[-1,1])t(e,n,15.2,24,8,8.5),t(e,n,e.w/2-1,36,12,9);else if(e.id==="naka")for(let n of[-1,1])t(e,n,9.6,30,10,6);else{let n=e.w/2-1.2;for(let i of[-1,1])t(e,i,n,36,i>0?18:0,9)}for(let e=40;e<340;e+=22)for(let n of[-58,-29,29,58])s.push({x:e,z:n,h:9});return s}function Gv(s){let t=Ee([new Re(.07,.13,1,6,1).translate(0,.5,0)]),e=t.attributes.position.count,n=new Float32Array(e*3);for(let h=0;h<e;h++)n.set([.14,.15,.16],h*3);t.setAttribute("color",new Vt(n,3)),t.deleteAttribute("uv");let i=new ie({vertexColors:!0,roughness:.6,metalness:.4});i.customProgramCacheKey=()=>"tokyo-pole-v1";let r=new De(t,i,s.length),o=new Ot,a=new pe,l=new P,c=new P;return s.forEach((h,u)=>{l.set(h.x,0,h.z),c.set(1,h.h,1),o.compose(l,a,c),r.setMatrixAt(u,o)}),r.instanceMatrix.needsUpdate=!0,r.castShadow=!1,r.frustumCulled=!1,r.name="lamp-poles",r}var Vv=ne(()=>{we();ki();Ys()});var Wv,Im,KE,JE,Xv,Lm,Zd,qv=ne(()=>{we();Nd();Ud();Gd();ha();Rm();zc();kc();Bc();Iv();Uv();Ov();kv();Vv();Ys();Wv=s=>s.dir==="x"?{x0:s.a,x1:s.b,z0:s.c-s.w/2,z1:s.c+s.w/2}:{x0:s.c-s.w/2,x1:s.c+s.w/2,z0:s.a,z1:s.b},Im=(s,t,e=0)=>s.x0-e<t.x1&&s.x1+e>t.x0&&s.z0-e<t.z1&&s.z1+e>t.z0,KE=(s,t,e,n,i,r)=>{let o=i-e,a=r-n,l=Math.max(0,Math.min(1,((s-e)*o+(t-n)*a)/(o*o+a*a)));return Math.hypot(s-(e+o*l),t-(n+a*l))},JE=(s,t)=>$c.pts.some((e,n)=>n<$c.pts.length-1&&KE(s,t,e[0],e[1],$c.pts[n+1][0],$c.pts[n+1][1])<26),Xv=new P(...Tv).normalize(),Lm=[{zenith:"#1a3270",horizon:"#476ca6",horizonWarm:"#f29a62",sun:"#ff9a62",cloudLit:"#7a86b0",cloudDark:"#1c2a58",fog:"#3a5688",sunCol:"#8aa4e0",fogD:4e-5},{zenith:"#0b1a48",horizon:"#26417a",horizonWarm:"#a85c4c",sun:"#d0705a",cloudLit:"#3e4a7a",cloudDark:"#0e1838",fog:"#1d3260",sunCol:"#6f88c8",fogD:5e-5},{zenith:"#050a22",horizon:"#0f2048",horizonWarm:"#243258",sun:"#3a4a7a",cloudLit:"#222c50",cloudDark:"#070d20",fog:"#0d1c3c",sunCol:"#5a70b0",fogD:6e-5}],Zd=class extends Vs{constructor(t,e,n,i={}){super(t,e,n,i),this.timeOffset=Vr.globalStart,this.duration=Vr.duration,this.timeline.duration=this.duration,this.timeline.frameCount=Math.round(this.duration*this.timeline.fps),this.showTitle=!1,this.fadeSec=0,this.fx=i.fx??{},this.nightU={value:.6},this.snowU={value:0},this.ambientCount=0,this.spillU={value:.5}}async build(){let t=this.scene,e=Lm[0],n=da(Ht,{sunDir:Xv,colors:{...e,cloudCover:0}});if(this.sky=n,t.add(n.mesh),t.fog=new hi(new ot(e.fog),e.fogD),this.glRenderer){let l=new bn;l.add(new Jt(n.mesh.geometry,n.material));let c=new _i(this.glRenderer);t.environment=c.fromScene(l,.015,1,3e3).texture,c.dispose()}let i=new gi(9086176,.5);i.position.copy(Xv).multiplyScalar(3e3),t.add(i,i.target),this.sun=i,this.hemi=new mi(7309512,1712176,.5),t.add(this.hemi);let r=ua(20261122);t.add(Cv(this.nightU,this.spillU)),t.add(Rv(this.nightU,this.spillU),Pv()),this._buildBlocks(r);let o=zv();o.meshes.forEach(l=>t.add(l)),this.station=o,this.trees=Nv(r),this.trees.meshes.forEach(l=>t.add(l)),this.leds=Fv(this.trees,r),this.leds.chunks.forEach(l=>t.add(l)),this._buildLamps(),this.rig=new pa(Vr);let a=l=>new as(l.map(([c,h])=>({t:c,v:h})));this.tracks={night:a([[0,.55],[1.5,.75],[3.5,.92],[7,1]]),palette:a([[0,0],[2.5,.8],[5,1.5],[7,1.95]]),sunPower:a([[0,.18],[3,.1],[7,.05]]),envPower:a([[0,.5],[7,.2]]),exposure:a([[0,1],[7,1]]),bloom:a([[0,.45],[3,.6],[7,.75]]),bloomThreshold:a([[0,1],[7,.85]]),bloomRadius:a([[0,.6],[7,.75]]),dofAperture:a([[0,.6],[7,.6]]),dofMaxBlur:a([[0,4],[7,5]])},this.look.grade={uShadowAmt:.3,uVig:.2,uSat:1.04,uGrain:.02,uAberr:6e-4,uHighTint:new ot(1.03,1,.96)},this._ca=new ot,this._cb=new ot,ca(this,{tiled:this.fx.tiled,haze:this.fx.haze,tileExclude:[this.boxMesh],skyUniforms:this.sky.uniforms})}applyTime(t){let e=this.sampleTrack("palette",t,0),n=Math.min(1,Math.floor(e)),i=Math.min(1,e-n),r=Lm[n],o=Lm[Math.min(2,n+1)],a=this.sky.uniforms,l=(h,u)=>{this._ca.set(r[h]),this._cb.set(o[h]),u.value.lerpColors(this._ca,this._cb,i)};l("zenith",a.uZenith),l("horizon",a.uHorizon),l("horizonWarm",a.uHorizonWarm),l("sun",a.uSunColor),l("cloudLit",a.uCloudLit),l("cloudDark",a.uCloudDark),this._ca.set(r.fog),this._cb.set(o.fog),this.scene.fog.color.lerpColors(this._ca,this._cb,i),this.scene.fog.density=r.fogD+(o.fogD-r.fogD)*i,this._ca.set(r.sunCol),this._cb.set(o.sunCol),this.sun.color.lerpColors(this._ca,this._cb,i),this.nightU.value=this.sampleTrack("night",t,.6);let c=this.sampleTrack("sunPower",t,.5);this.sun.intensity=c,a.uSunStrength.value=Math.min(1,c/2),this.hemi.intensity=.5*Math.max(.3,1-this.nightU.value*.6),this.scene.environmentIntensity=this.sampleTrack("envPower",t,.5)}_buildBlocks(t){let e=fa(Ht,{uNight:this.nightU,uSnow:this.snowU}),n=new Oi(Ht,e,6e3),i=vi.map(Wv),r=[...Zc],o=new Set([Gr.x0,Gr.x1]),a=new Set([Gr.z0,Gr.z1]);for(let d of vi){let f=Wv(d);d.dir==="z"?(o.add(f.x0),o.add(f.x1)):(a.add(f.z0),a.add(f.z1))}let l=[...o].sort((d,f)=>d-f),c=[...a].sort((d,f)=>d-f),h=1,u={x0:340,x1:406,z0:-200,z1:200};for(let d=0;d<l.length-1;d++)for(let f=0;f<c.length-1;f++){let p=l[d],x=l[d+1],m=c[f],g=c[f+1];if(x-p<9||g-m<9)continue;let _=Math.max(1,Math.round((x-p)/26)),v=Math.max(1,Math.round((g-m)/24));for(let M=0;M<_;M++)for(let b=0;b<v;b++){let w=p+(x-p)*M/_,y=p+(x-p)*(M+1)/_,S=m+(g-m)*b/v,A=m+(g-m)*(b+1)/v,E={x0:w,x1:y,z0:S,z1:A};if(i.some(Z=>Im(E,Z,-.6))||r.some(Z=>Im(E,Z,2))||Im(E,u,0))continue;let R=(w+y)/2,D=(S+A)/2;if(R<Yn.x0+40&&Math.abs(D)<336||JE(R,D)||R>370&&R<460&&D>-330&&D<330)continue;let B=Math.abs(R),N=60,F=150;B<80&&(N=45,F=115),D<-300&&(N=85,F=200),R>380&&(N=60,F=130),R<-200&&(N=40,F=90);let G=N+(F-N)*Math.pow(t(),1.1),H=G>90?t.pick([2,2,0,4]):t.pick([0,0,2,4,1]),et=y-w-.8,V=A-S-.8;et<6||V<6||n.add(R,0,D,et,G,V,H,h+++t(),.5+.45*t())}}this.boxes=n,this.boxMesh=n.build({castShadow:!1}),this.scene.add(this.boxMesh)}_buildLamps(){let t=Hv();this.lampCount=t.length,this.scene.add(Gv(t));let e=new Float32Array(t.length*3),n=new Float32Array(t.length*3),i=new Float32Array(t.length);t.forEach((r,o)=>{e.set([r.x,r.h+.1,r.z],o*3),n.set([3,2.1,1.2],o*3),i[o]=.9}),this.lamps=In(Ht,{positions:e,colors:n,sizes:i,fogDensity:4e-5,minPx:1.4,maxPx:20}),this.scene.add(this.lamps.points)}onBeforeRender({t,projScale:e,camera:n}){let i=t+this.timeOffset,r=this.nightU.value,o=this.scene.fog.density;this.sky.mesh.position.copy(n.position),this.sky.uniforms.uTime.value=i*5,this.lamps.uniforms.uProj.value=e,this.lamps.uniforms.uFog.value=o,this.lamps.uniforms.uGain.value=.3+1*r;let a=this.leds.uniforms;a.uProj.value=e,a.uFog.value=o,a.uTime.value=i,a.uGain.value=.7+.9*r,this.spillU.value=.55+.75*r,this.station.mat.emissiveIntensity=.04+.07*r,this.station.winMat.color.setRGB(1,.72,.4).multiplyScalar(.55+.35*r),this.trees.mats[0].emissiveIntensity=.02+.04*r,this.trees.updateLod(n.position)}setAmbientCount(t){this.ambientCount=t,this.leds.uniforms.uTwFrac.value=Math.min(1,t/4e4)}setLayoutWeight(t){this.rig.weight=t}}});var Yv,Zv=ne(()=>{Yv=[{id:"cap-tokyo",title:"TOKYO",sub:"\u6771\u4EAC",a:-.05,b:.15},{id:"cap-marunouchi",title:"\u4E38\u306E\u5185",sub:"Marunouchi",a:.18,b:.32},{id:"cap-nakadori",title:"\u4E38\u306E\u5185\u4EF2\u901A\u308A",sub:"Marunouchi Naka-dori",a:.35,b:.52},{id:"cap-illumination",title:"\u51AC\u306E\u5149",sub:"Winter Illumination",a:.55,b:.72},{id:"cap-tower",title:"\u6771\u4EAC\u30BF\u30EF\u30FC\u3078",sub:"Toward Tokyo Tower",a:.75,b:1.08}]});var $v={};nh($v,{default:()=>QE});var QE,Kv=ne(()=>{qv();Zv();Rm();QE={contract:1,meta:{id:"tokyo",name:{ja:"\u6771\u4EAC",en:"Tokyo"},season:"winter",theme:"\u51AC\u306E\u591C\u306E\u30A4\u30EB\u30DF\u30CD\u30FC\u30B7\u30E7\u30F3\uFF08\u30D6\u30EB\u30FC\u30A2\u30EF\u30FC\u2192\u591C\uFF09",docTitle:"TOKYO \u2014 JAPAN \u2014 THE CITY COLLECTION"},captions:Yv,timeline:{globalStart:Vr.globalStart,duration:Vr.duration},ambient:{name:"\u304D\u3089\u3081\u304D",counts:{normal:4e4,light:16e3}},tuning:{haze:{start:800,end:9e3,strength:.45,mountain:.5},grade:{expDay:1.08,expDusk:.9,highDusk:[1.06,1,.93]}},async buildScene(s){let t=new Zd(s.cityMeta,s.index,s.total,{renderer:s.renderer,fx:s.fx});return await t.build(),t}}});we();we();we();we();var aa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};we();we();var qn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},XT=new ss(-1,1,1,-1,0,1),om=class extends Zt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}},qT=new om,Gs=class{constructor(t){this._mesh=new Jt(qT,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,XT)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Dr=class extends qn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof He?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ni.clone(t.uniforms),this.material=new He({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Gs(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Nc=class extends qn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Td=class extends qn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ed=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new it);this._width=n.width,this._height=n.height,e=new Le(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ye}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dr(aa),this.copyPass.material.blending=Ci,this.timer=new Ar}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Nc!==void 0&&(o instanceof Nc?n=!0:o instanceof Td&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};we();var Ad=class extends qn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ot}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};we();we();var qx={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var la=class s extends qn{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new it(t.x,t.y):new it(256,256),this.clearColor=new ot(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Le(r,o,{type:Ye,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Le(r,o,{type:Ye,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Le(r,o,{type:Ye,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=qx;this.highPassUniforms=Ni.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new He({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new it(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ni.clone(aa.uniforms),this.blendMaterial=new He({uniforms:this.copyUniforms,vertexShader:aa.vertexShader,fragmentShader:aa.fragmentShader,premultipliedAlpha:!0,blending:Ds,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ot,this._oldClearAlpha=1,this._basic=new On,this._fsQuad=new Gs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new it(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let i=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new He({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new He({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};la.BlurDirectionX=new it(1,0);la.BlurDirectionY=new it(0,1);we();var Uc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Cd=class extends qn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ni.clone(Uc.uniforms),this.material=new Rs({name:Uc.name,uniforms:this.uniforms,vertexShader:Uc.vertexShader,fragmentShader:Uc.fragmentShader}),this._fsQuad=new Gs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ue.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Us?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fs?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Os?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ri?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bs?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zs?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Yo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Yx(s,{near:t,far:e}){let n={uniforms:{tDiffuse:{value:null},tDepth:{value:null},uNear:{value:t},uFar:{value:e},uFocus:{value:200},uAperture:{value:1},uMaxBlur:{value:8},uRes:{value:new s.Vector2(1920,1080)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`},i=new Dr(n),r=i.render.bind(i);return i.render=function(o,a,l,c,h){this.uniforms.tDepth.value=l.depthTexture,r(o,a,l,c,h)},i}function Zx(s){let t={uniforms:{tDiffuse:{value:null},uFade:{value:1},uSeed:{value:0},uRes:{value:new s.Vector2(1920,1080)},uSat:{value:1.08},uContrast:{value:.35},uShadowTint:{value:new s.Color(0,.05,.1)},uShadowAmt:{value:.35},uHighTint:{value:new s.Color(1.05,1,.93)},uVig:{value:.55},uGrain:{value:.028},uAberr:{value:.0016}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`};return new Dr(t)}Fc();var am='"Helvetica Neue", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Segoe UI", Arial, sans-serif';function lm(s,t,e,n,i,r){let o=[...t],a=o.map(h=>s.measureText(h).width),l=a.reduce((h,u)=>h+u,0)+i*(o.length-1),c=e-l/2;o.forEach((h,u)=>{s.globalAlpha=r(u,o.length),s.fillText(h,c,n),c+=a[u]+i})}function Qx(s,t,e,n,i,{englishName:r,name:o,index:a,total:l}){let c=Kx(n,i);if(!c.visible||c.opacity<=.001)return;let h=e/1080;s.save(),s.textBaseline="alphabetic",s.fillStyle="#fff",s.shadowColor="rgba(8,14,34,0.55)",s.shadowBlur=24*h;let u=s.createLinearGradient(0,e*.62,0,e);u.addColorStop(0,"rgba(6,10,24,0)"),u.addColorStop(1,`rgba(6,10,24,${.5*c.opacity})`),s.shadowColor="transparent",s.fillStyle=u,s.fillRect(0,e*.62,t,e*.38),s.fillStyle="#fff",s.shadowColor="rgba(8,14,34,0.55)";let d=t/2,f=104*h;s.font=`200 ${f}px ${am}`;let p=c.spacing*f,x=r.toUpperCase();lm(s,x,d+p/2,e*.865,p,(g,_)=>{let v=Cn(c.reveal*(_+3)-g*.9,0,1);return c.opacity*Rn.outCubic(v)});let m=t*.16*Rn.outCubic(c.reveal);s.globalAlpha=c.opacity*.8,s.shadowBlur=0,s.fillRect(d-m/2,e*.885,m,Math.max(1,1.5*h)),s.shadowBlur=12*h,s.shadowColor="rgba(8,14,34,0.6)",s.font=`300 ${24*h}px ${am}`,s.globalAlpha=c.opacity*Rn.outCubic(Cn(c.reveal*1.4-.4,0,1)),lm(s,`${o}`,d,e*.925,10*h,()=>s.globalAlpha),s.font=`300 ${15*h}px ${am}`,s.globalAlpha=c.opacity*.75*Rn.outCubic(Cn(c.reveal*1.4-.4,0,1)),lm(s,`JAPAN \u2014 THE CITY COLLECTION      ${String(a).padStart(2,"0")} / ${String(l).padStart(2,"0")}`,d,e*.958,5*h,()=>s.globalAlpha),s.restore()}Fc();var Pd=4,Id=4e4,Ld=class{constructor(t,{width:e=1920,height:n=1080,samples:i=4}={}){this.stage=t,this.ctx2d=t.getContext("2d",{alpha:!1}),this.glCanvas=document.createElement("canvas"),this.gl=new Lc({canvas:this.glCanvas,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.gl.setPixelRatio(1),this.gl.outputColorSpace=rn,this.gl.toneMapping=Ri,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=Ls,this.gl.shadowMap.autoUpdate=!1,this.samples=i,this.width=0,this.height=0,this.city=null,this._shadowDirty=!0,this.setSize(e,n)}_buildComposer(){let{width:t,height:e}=this;this.composer?.dispose?.();let n=r=>new Le(t,e,{type:Ye,samples:r,depthBuffer:!0,depthTexture:new Qn(t,e,An)}),i;try{i=n(this.samples)}catch{i=n(0)}this.composer=new Ed(this.gl,i),this.composer.setPixelRatio(1),this.composer.setSize(t,e),this.renderPass=new Ad(new bn,new Ue),this.dofPass=Yx(Ht,{near:Pd,far:Id}),this.bloomPass=new la(new it(t,e),.6,.7,.9),this.outputPass=new Cd,this.gradePass=Zx(Ht),[this.renderPass,this.dofPass,this.bloomPass,this.outputPass,this.gradePass].forEach(r=>this.composer.addPass(r)),this.dofPass.uniforms.uRes.value.set(t,e),this.gradePass.uniforms.uRes.value.set(t,e)}setSize(t,e){t=Math.round(t),e=Math.round(e),!(t===this.width&&e===this.height)&&(this.width=t,this.height=e,this.stage.width=t,this.stage.height=e,this.gl.setSize(t,e,!1),this._buildComposer(),this.city&&this._bindCity())}_bindCity(){this.renderPass.scene=this.city.scene,this.renderPass.camera=this.city.camera,this.city.camera.aspect=this.width/this.height,this.city.camera.updateProjectionMatrix()}setCity(t){this.city=t,this._bindCity(),this._shadowDirty=!0}renderAt(t,e=0){let n=this.city,i=n.frameState(t),r=n.camera;r.aspect=this.width/this.height,r.near=Pd,r.far=Id,r.updateProjectionMatrix(),r.updateMatrixWorld(!0);let o=r.projectionMatrix.elements[5]*.5*this.height;n.onBeforeRender?.({t,frame:e,projScale:o,camera:r}),this.gl.toneMappingExposure=i.exposure,this.bloomPass.strength=i.bloom,this.bloomPass.radius=i.bloomRadius??.7,this.bloomPass.threshold=i.bloomThreshold??.9;let a=this.dofPass.uniforms;a.uFocus.value=i.focusDistance,a.uAperture.value=i.dofAperture??1,a.uMaxBlur.value=(i.dofMaxBlur??7)*(this.height/1080),this.dofPass.enabled=(i.dofMaxBlur??7)>.05;let l=this.gradePass.uniforms;l.uFade.value=Jx(t,n.duration,{inSec:n.fadeSec??.8,outSec:n.fadeSec??.8}),l.uSeed.value=e%997,Object.entries(n.look.grade??{}).forEach(([h,u])=>{l[h]&&(l[h].value.isColor?l[h].value.set(u):l[h].value=u)}),this._shadowDirty&&(this.gl.shadowMap.needsUpdate=!0,this._shadowDirty=!1),this.composer.render();let c=this.ctx2d;c.drawImage(this.glCanvas,0,0,this.width,this.height),n.showTitle!==!1&&Qx(c,this.width,this.height,t,n.duration,n.titleInfo)}dispose(){this.composer?.dispose?.(),this.gl.dispose()}};var Dd=class extends Ld{constructor(t,e){super(t,e),this.gl.info.autoReset=!1,this.lastInfo={calls:0,triangles:0},this.grade=null}applyQuality({w:t,h:e,samples:n,dof:i}){this.dofOn=i,n!==this.samples&&(this.samples=n,this.width=0),this.setSize(t,e)}gpuString(){let t=this.gl.getContext(),e=t.getExtension("WEBGL_debug_renderer_info");return e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):"unknown"}renderAt(t,e=0,n=t){let i=this.city,r=i.frameState(t),o=i.camera;o.aspect=this.width/this.height,o.near=Pd,o.far=Id,o.updateProjectionMatrix(),o.updateMatrixWorld(!0);let a=o.projectionMatrix.elements[5]*.5*this.height;i.onBeforeRender?.({t:n,frame:e,projScale:a,camera:o}),this.gl.toneMappingExposure=r.exposure*(this.grade?.enabled?this.grade.exposureGain(t):1),this.bloomPass.strength=r.bloom,this.bloomPass.radius=r.bloomRadius??.7,this.bloomPass.threshold=r.bloomThreshold??.9;let l=this.dofPass.uniforms;l.uFocus.value=r.focusDistance,l.uAperture.value=r.dofAperture??1,l.uMaxBlur.value=(r.dofMaxBlur??7)*(this.height/1080),this.dofPass.enabled=this.dofOn!==!1&&(r.dofMaxBlur??7)>.05;let c=this.gradePass.uniforms;c.uFade.value=1,c.uSeed.value=e%997,Object.entries(i.look.grade??{}).forEach(([h,u])=>{c[h]&&(c[h].value.isColor?c[h].value.set(u):c[h].value=u)}),this.grade?.apply(t,c),this._shadowDirty&&(this.gl.shadowMap.needsUpdate=!0,this._shadowDirty=!1),this.gl.info.reset(),this.composer.render(),this.lastInfo={calls:this.gl.info.render.calls,triangles:this.gl.info.render.triangles},this.ctx2d.drawImage(this.glCanvas,0,0,this.width,this.height)}};ha();var Dm="sapporo",Nm={sapporo:()=>Promise.resolve().then(()=>(F_(),U_)),sendai:()=>Promise.resolve().then(()=>(Mv(),yv)),tokyo:()=>Promise.resolve().then(()=>(Kv(),$v))},Jv=()=>Object.keys(Nm);async function Qv(s){let t=null,e=s||Dm;Nm[e]||(t=`\u672A\u77E5\u306E\u90FD\u5E02 "${e}" \u2192 ${Dm} \u3092\u8868\u793A`,e=Dm);let n=(await Nm[e]()).default;return s_(n),{mod:n,note:t}}var Pe=(s,t,e,n)=>{let i=document.createElement(s);if(t&&(i.className=t),e!=null&&(i.textContent=e),n)for(let[r,o]of Object.entries(n))i.setAttribute(r,o);return i},jE={sapporo:{line:"\u51AC \u2014 \u96EA",lineEn:"Winter \xB7 Snow"},sendai:{line:"\u4E03\u5915 \u2014 \u590F\u306E\u5915\u65B9",lineEn:"Tanabata \xB7 Summer Dusk"},tokyo:{line:"\u51AC \u2014 \u30A4\u30EB\u30DF\u30CD\u30FC\u30B7\u30E7\u30F3",lineEn:"Winter \xB7 Illumination"}};function jv({series:s,cities:t,onPick:e,onCollection:n}){let i=document.body,r=Object.fromEntries(t.map(A=>[A.id,A])),o=null,a=Pe("section","ui select",null,{id:"select","aria-label":s.title}),l=Pe("header","sel-head");l.append(Pe("h1",null,s.title),Pe("p","sel-tag",s.tagline));let c=Pe("div","sel-cards");for(let A of t){let E=jE[A.id]??{line:"",lineEn:""},R=Pe("button",`sel-card c-${A.id}`,null,{type:"button","data-city":A.id});R.append(Pe("span","sc-no",String(A.displayOrder).padStart(2,"0")),Pe("span","sc-en",A.englishName.toUpperCase()),Pe("span","sc-ja",A.name),Pe("span","sc-line",E.line),Pe("span","sc-sub",E.lineEn)),R.addEventListener("click",()=>e(A.id)),c.appendChild(R)}a.append(l,c,Pe("p","sel-foot","Scroll to travel \u2014 \u90FD\u5E02\u3092\u9078\u3093\u3067\u59CB\u3081\u308B")),i.appendChild(a);let h=Pe("button","ui menu-btn",null,{type:"button","aria-haspopup":"true","aria-expanded":"false","aria-label":"\u90FD\u5E02\u30E1\u30CB\u30E5\u30FC"}),u=Pe("span","mb-label");h.append(u,Pe("span","mb-chev","\u25BE"));let d=Pe("nav","ui menu",null,{"aria-label":"\u90FD\u5E02\u306E\u5207\u308A\u66FF\u3048"});d.hidden=!0;for(let A of t){let E=Pe("button","mn-item",null,{type:"button","data-city":A.id});E.append(Pe("span","mn-en",A.englishName.toUpperCase()),Pe("span","mn-ja",A.name)),E.addEventListener("click",()=>{p(!1),A.id!==o&&e(A.id)}),d.appendChild(E)}let f=Pe("button","mn-item mn-all",null,{type:"button"});f.append(Pe("span","mn-en","COLLECTION"),Pe("span","mn-ja","\u90FD\u5E02\u3092\u9078\u3076")),f.addEventListener("click",()=>{p(!1),n()}),d.appendChild(f);let p=A=>{d.hidden=!A,h.setAttribute("aria-expanded",String(A))};h.addEventListener("click",A=>{A.stopPropagation(),p(d.hidden)}),document.addEventListener("click",A=>{!d.hidden&&!d.contains(A.target)&&p(!1)}),document.addEventListener("keydown",A=>{A.key==="Escape"&&p(!1)}),i.append(h,d);let x=Pe("div","ui finale"),m=Pe("button","fin-btn",null,{type:"button"}),g=Pe("span","fin-main"),_=Pe("span","fin-sub");m.append(g,_),x.appendChild(m),i.appendChild(x);let v=null;m.addEventListener("click",()=>{v===null?n():e(v)});function M(A){o=A,u.textContent=r[A].englishName.toUpperCase();for(let D of d.querySelectorAll("[data-city]"))D.classList.toggle("on",D.dataset.city===A);let E=t.findIndex(D=>D.id===A),R=t[E+1];v=R?R.id:null,R?(g.textContent=`Next \u2014 ${R.englishName.toUpperCase()}`,_.textContent=`${R.name}\u3078`):(g.textContent="JAPAN \u2014 THE CITY COLLECTION",_.textContent=`${s.tagline} \uFF0F \u90FD\u5E02\u3092\u9078\u3076`),w(0)}let b=-1;function w(A){let E=Math.max(0,Math.min(1,(A-.955)/.04));Math.abs(E-b)<.004||(b=E,x.style.opacity=E.toFixed(3),x.style.transform=`translateY(${((1-E)*8).toFixed(1)}px)`,x.classList.toggle("live",E>.6))}function y(A){document.body.classList.toggle("selecting",A),a.hidden=!A,A&&(p(!1),a.querySelector("button")?.focus?.({preventScroll:!0}))}function S(A){h.hidden=!A,x.hidden=!A,A||p(!1)}return y(!1),S(!1),{setCurrent:M,setFinale:w,showSelect:y,showPlaying:S}}ha();var $d=class{constructor(){this.el=document.createElement("pre"),this.el.id="dbg",this.el.setAttribute("aria-hidden","true"),this.el.style.cssText=["position:fixed","left:max(6px,env(safe-area-inset-left))","top:max(6px,env(safe-area-inset-top))","z-index:99","margin:0","padding:6px 8px","max-width:calc(100vw - 12px)","box-sizing:border-box","font:10px/1.35 ui-monospace,Menlo,monospace","color:#cfe","background:rgba(0,0,0,.62)","border-radius:6px","white-space:pre-wrap","word-break:break-all","pointer-events:auto","user-select:text"].join(";"),document.body.appendChild(this.el),this.frames=[],this.history=[],this.text="",this.el.addEventListener("click",()=>this.copy())}tick(t){this.frames.push(t);let e=t-1e3;for(;this.frames.length&&this.frames[0]<e;)this.frames.shift()}logTier(t,e,n){this.history.push(`${new Date().toISOString().slice(11,19)} ${t}\u2192${e} (${n})`),this.history.length>6&&this.history.shift()}fps(){let t=this.frames;if(t.length<2)return{avg:0,maxGap:0};let e=0;for(let n=1;n<t.length;n++)e=Math.max(e,t[n]-t[n-1]);return{avg:(t.length-1)*1e3/(t[t.length-1]-t[0]),maxGap:e}}update(t){let{avg:e,maxGap:n}=this.fps(),i=[`FPS ${e.toFixed(1)}  \u6700\u5927\u9593\u9694 ${n.toFixed(0)}ms  (\u76F4\u8FD11\u79D2)`,`tier ${t.tierLabel}${this.history.length?"  \u5C65\u6B74: "+this.history.join(" | "):"  \u5C65\u6B74: \u306A\u3057"}`,`canvas ${t.width}x${t.height} (${(t.width*t.height/1e6).toFixed(2)}MP)  DPR ${t.dpr}  scale ${t.scale.toFixed(3)}`,`p ${t.p.toFixed(4)}${t.target!==void 0?" \u2192\u76EE\u6A19 "+t.target.toFixed(4):""}  t ${t.t.toFixed(3)}s  layout \u7E26${(t.wPortrait*100).toFixed(0)}%`,`GL calls ${t.calls}  tris ${t.triangles}`,t.haze?`haze \xD7${t.haze.mult}${t.haze.mult===0?"(\u7121\u52B9)":""}  \u958B\u59CB ${t.haze.start}m \u5230\u9054 ${t.haze.end}m \u4E0A\u9650 ${t.haze.strength}\uFF08\u5C71 \xD7${t.haze.mountain}\uFF09 \u5F69\u5EA6\u6E1B ${t.haze.desat}`:"haze \u306A\u3057",t.grade?`grade \xD7${t.grade.cfg.mult}${t.grade.cfg.mult===0?"(\u7121\u52B9)":""}  \u30C8\u30FC\u30F3\u30DE\u30C3\u30D7 ${t.grade.tone}  \u9732\u51FA \xD7${(t.grade.now.exposure??1).toFixed(3)} (\u663C${t.grade.cfg.expDay}\u2192\u5915${t.grade.cfg.expDusk})  \u5915\u666F\u5EA6 ${(t.grade.now.dusk??0).toFixed(2)}  \u30D3\u30CD\u30C3\u30C8 ${t.grade.vig??"-"}`:"",`GPU ${t.gpu}`];this.text=i.join(`
`),this.el.textContent=this.text}async copy(){try{await navigator.clipboard.writeText(this.text),this.flash("copied")}catch{let t=document.createRange();t.selectNodeContents(this.el);let e=getSelection();e.removeAllRanges(),e.addRange(t);try{document.execCommand("copy"),this.flash("copied")}catch{this.flash("\u9078\u629E\u3057\u307E\u3057\u305F\uFF08\u624B\u52D5\u3067\u30B3\u30D4\u30FC\uFF09")}}}flash(t){let e=this.el.style.outline;this.el.style.outline="1px solid #6f6",this.el.title=t,setTimeout(()=>{this.el.style.outline=e},600)}};cm();we();var tA=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),eA=(s,t,e)=>{let n=tA((e-s)/(t-s));return n*n*(3-2*n)},Qc=(s,t,e)=>s+(t-s)*e,Jd={expDay:1.15,expDusk:.9,rampFrom:.25,rampTo:1,highDusk:[1.075,1,.905],shadowDusk:[.035,.03,.1],satDusk:1.075,vig:.2};function ty(s,t=Jd){let e=s.get("grade"),n=e===null||e===""?1:Math.max(0,parseFloat(e)),i=(r,o)=>s.has(r)&&isFinite(parseFloat(s.get(r)))?parseFloat(s.get(r)):o;return{mult:isFinite(n)?n:1,...t,expDay:i("gradeExpDay",t.expDay),expDusk:i("gradeExpDusk",t.expDusk),vig:s.has("vig")&&isFinite(parseFloat(s.get("vig")))?parseFloat(s.get("vig")):t.vig}}var Kd=class{constructor(t){this.cfg={...Jd,...t},this.now={exposure:1,dusk:0}}get enabled(){return this.cfg.mult>0}dusk(t){return eA(this.cfg.rampFrom,this.cfg.rampTo,t/7)}exposureGain(t){let e=this.cfg,n=this.dusk(t);return 1+(Qc(e.expDay,e.expDusk,n)-1)*e.mult}apply(t,e){if(!this.enabled)return;this.cfg.vig!==null&&(e.uVig.value=this.cfg.vig),this.now={vig:e.uVig.value};let n=this.dusk(t);this.now={vig:e.uVig.value,exposure:this.exposureGain(t),dusk:n};let i=n*this.cfg.mult,r=(o,a)=>o.setRGB(Qc(o.r,a[0],i),Qc(o.g,a[1],i),Qc(o.b,a[2],i));e.uHighTint&&r(e.uHighTint.value,this.cfg.highDusk),e.uShadowTint&&(this.baseShadow??(this.baseShadow=e.uShadowTint.value.clone()),e.uShadowTint.value.copy(this.baseShadow),r(e.uShadowTint.value,this.cfg.shadowDusk)),e.uSat.value=Qc(e.uSat.value,this.cfg.satDusk,i)}},ey=s=>({[Xn]:"\u306A\u3057",[Us]:"Linear",[Fs]:"Reinhard",[Os]:"Cineon",[Ri]:"ACES Filmic",[Bs]:"AgX",[zs]:"Neutral"})[s.toneMapping]??String(s.toneMapping);Sm();var Wi=s=>document.getElementById(s),Vi=new URLSearchParams(location.search),nA=Vi.get("debug")==="1",iA=Vi.get("freeze")==="1",ny=matchMedia("(pointer: coarse)").matches,xn=null,us=null,jc=null,_a=null;async function ry(s){let t=Wi("track"),e=Wi("stage"),n=Wi("cv"),{mod:i,note:r}=await Qv(s);r&&console.warn("[scroll]",r);let o=_a.cities.find(Q=>Q.id===i.meta.id);document.title=i.meta.docTitle;let{globalStart:a,duration:l}=i.timeline,c=Q=>b_(Q,l),h=new AbortController,u={signal:h.signal},d={alive:!0};xn||(xn=new Dd(n,{width:320,height:568})),xn.grade=new Kd(ty(Vi,{...Jd,...i.tuning.grade}));let f=await i.buildScene({renderer:xn.gl,cityMeta:o,index:o.displayOrder,total:_a.cities.length,fx:{tiled:Vi.get("tiles")==="0"?!1:Vi.get("tiles")||!0,haze:n_(Vi,{...Oc,...i.tuning.haze})}});r_(f),xn.setCity(f);let p=nA?new $d:null,x=xn.gpuString(),m={p:0,t:0,w:0,width:0,height:0,dpr:1,scale:1},g=Q=>w_.find(lt=>lt.id===Q),_=g((Vi.get("tier")||"").toUpperCase())||g(E_(e.clientWidth||innerWidth,e.clientHeight||innerHeight,ny)),v=()=>Vi.get("snow")==="normal"?"normal":Vi.get("snow")==="light"||Mm(e.clientWidth||innerWidth,e.clientHeight||innerHeight,ny)?"light":"normal";function M(){let Q=e.clientWidth||innerWidth,lt=e.clientHeight||innerHeight,At=Math.min(devicePixelRatio||1,3),{w:_t,h:Xt,scale:Me}=T_(Q,lt,At,_.mp);xn.applyQuality({w:_t,h:Xt,samples:_.samples,dof:_.dof});let Ct=v();f.setAmbientCount(i.ambient.counts[Ct]),Object.assign(m,{width:_t,height:Xt,dpr:At,scale:Me,aspect:Q/lt,ambientMode:Ct}),m.w=vm(m.aspect),f.setLayoutWeight(m.w),w=!0}function b(Q,lt="manual"){let At=g(Q);!At||At===_||(p?.logTier(_.id,At.id,lt),_=At,M())}let w=!0,y=null,S=()=>S_(t.getBoundingClientRect().top,t.offsetHeight,e.offsetHeight);addEventListener("scroll",()=>{w=!0},{passive:!0,signal:h.signal});let A=0,E=null,R=!1,D=0,B=Q=>{let lt=t.offsetHeight-e.offsetHeight;window.scrollTo(0,Q*lt)},N=0,F=0,G=()=>{e.clientWidth===N&&e.clientHeight===F||(R||(R=!0),clearTimeout(D),D=setTimeout(()=>{d.alive&&(M(),B(A),R=!1)},160),N=e.clientWidth,F=e.clientHeight)};addEventListener("resize",G,u),addEventListener("orientationchange",G,u),M(),N=e.clientWidth,F=e.clientHeight;let H=()=>({tierLabel:`${_.id} \u4E88\u7B97${_.mp}MP MSAA${_.samples} DoF${_.dof?"\u3042\u308A":"\u306A\u3057"} ${i.ambient.name}${i.ambient.counts[m.ambientMode]}`,width:m.width,height:m.height,dpr:m.dpr,scale:m.scale,p:m.p,target:m.target,t:m.t,wPortrait:m.w,calls:xn.lastInfo.calls,triangles:xn.lastInfo.triangles,gpu:x,haze:f.haze?.cfg,grade:{cfg:xn.grade.cfg,now:xn.grade.now,vig:xn.grade.now.vig?.toFixed?.(2),tone:ey(xn.gl)}}),et=document.querySelector(".captions"),V=i.captions.map(Q=>{let lt=document.createElement("div");lt.className="cap",lt.id=Q.id;let At=document.createElement("h2");if(At.textContent=Q.title,lt.appendChild(At),Q.sub){let _t=document.createElement("p");_t.textContent=Q.sub,lt.appendChild(_t)}return et.appendChild(lt),{...Q,el:lt,last:-1}}),Z=Q=>V.map(lt=>ym(lt.a,lt.b,Q));function st(Q){for(let lt of V){let At=ym(lt.a,lt.b,Q);Math.abs(At-lt.last)<.004||(lt.last=At,lt.el.style.opacity=At.toFixed(3),lt.el.style.transform=`translateY(${((1-At)*8).toFixed(1)}px)`)}}let Et=performance.now(),Ut=0;function q(Q){if(!d.alive||(requestAnimationFrame(q),iA))return;R||(A=y??S());let lt=Math.min(.1,Math.max(0,(Q-(q.last??Q))/1e3));q.last=Q,E=y!==null||E===null?A:A_(E,A,lt),m.p=E,m.target=A,m.t=c(m.p),st(m.p),us.setFinale(m.p);let At=y!==null?m.t:(Q-Et)/1e3;xn.renderAt(m.t,Ut++,At),p?.tick(Q),p&&Ut%6===0&&p.update(H())}return requestAnimationFrame(q),window.__scroll={state:()=>({...m}),tileStats:()=>f.tileStats??null,renderAtProgress(Q){y=Q,E=Q,m.p=Q,m.t=c(Q),st(Q),us.setFinale(Q),xn.renderAt(m.t,0,m.t),p?.update(H())},unpin(){y=null},setTier:b,tier:()=>_.id,renderer:xn,city:f,THREE:Ht,cityModule:i,dispose(){hm(f)},cameraAt(Q,lt){let At=vm(lt);return f.rig.sample(a+c(Q),At)},pStable:()=>A,captionOpacity:Z,captionDom:()=>V.map(Q=>({id:Q.id,opacity:+getComputedStyle(Q.el).opacity,text:Q.el.textContent}))},us.setCurrent(i.meta.id),us.showPlaying(!0),window.__ready=!0,d.stop=()=>{d.alive=!1,h.abort(),clearTimeout(D),V.forEach(Q=>Q.el.remove()),p?.el.remove(),hm(f),window.__ready=!1,window.__scroll=null},d.id=i.meta.id,d}var iy=s=>{let t=Wi("loading");Wi("loadMsg").textContent=s||"\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026",t.classList.remove("hide")},sA=s=>{let t=new URL(location.href);return s?t.searchParams.set("city",s):t.searchParams.delete("city"),t},Um=!1;async function sy(s){if(!Um){Um=!0;try{if(jc&&(jc.stop(),jc=null),us.showPlaying(!1),history.replaceState(null,"",sA(s)),window.scrollTo(0,0),!s){Wi("loading").classList.add("hide"),document.title="JAPAN \u2014 THE CITY COLLECTION",us.showSelect(!0),window.__select=!0,window.__ready=!0;return}window.__select=!1,us.showSelect(!1);let t=_a.cities.find(e=>e.id===s);iy(`${t?t.englishName.toUpperCase():s} \u2026`),window.scrollTo(0,0),jc=await ry(s),window.scrollTo(0,0),Wi("loading").classList.add("hide")}catch(t){console.error(t),window.__bootError=String(t.stack||t),iy("\u30A8\u30E9\u30FC: "+(t.message||t))}finally{Um=!1}}}async function rA(){_a=await(await fetch("metadata/cities.json")).json();let s=Jv(),t=_a.cities.filter(n=>s.includes(n.id)).sort((n,i)=>n.displayOrder-i.displayOrder);us=jv({series:_a.series,cities:t,onPick:n=>sy(n),onCollection:()=>sy(null)});let e=Vi.get("city");e?(jc=await ry(e),Wi("loading").classList.add("hide")):(Wi("loading").classList.add("hide"),us.showSelect(!0),window.__select=!0,window.__ready=!0)}rA().catch(s=>{console.error(s),window.__bootError=String(s.stack||s);let t=Wi("loadMsg");t&&(t.textContent="\u30A8\u30E9\u30FC: "+(s.message||s))});
