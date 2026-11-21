var I_=Object.defineProperty;var ge=(s,t,e)=>()=>{if(e)throw e[0];try{return s&&(t=s(s=0)),t}catch(n){throw e=[n],n}};var vd=(s,t)=>{for(var e in t)I_(s,e,{get:t[e],enumerable:!0})};function L_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Lr(s,t){return new D_[s](t)}function fg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ep(){let s=Gr("canvas");return s.style.display="block",s}function pg(s){is=s}function mg(){return is}function Hr(...s){let t="THREE."+s.shift();is?is("log",t,...s):console.log(t,...s)}function gg(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Tt(...s){s=gg(s);let t="THREE."+s.shift();if(is)is("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Gt(...s){s=gg(s);let t="THREE."+s.shift();if(is)is("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ri(...s){let t=s.join(" ");t in cm||(cm[t]=!0,Tt(...s))}function xg(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Hn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[s&255]+tn[s>>8&255]+tn[s>>16&255]+tn[s>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function $t(s,t,e){return Math.max(t,Math.min(e,s))}function np(s,t){return(s%t+t)%t}function N_(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function U_(s,t,e){return s!==t?(e-s)/(t-s):0}function na(s,t,e){return(1-e)*s+e*t}function F_(s,t,e,n){return na(s,t,1-Math.exp(-e*n))}function O_(s,t=1){return t-Math.abs(np(s,t*2)-t)}function B_(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function z_(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function k_(s,t){return s+Math.floor(Math.random()*(t-s+1))}function G_(s,t){return s+Math.random()*(t-s)}function H_(s){return s*(.5-Math.random())}function V_(s){s!==void 0&&(hm=s);let t=hm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function W_(s){return s*Bs}function X_(s){return s*ks}function q_(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Y_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ip(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Z_(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),f=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*f,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*f,a*c);break;case"ZYZ":s.set(l*f,l*p,a*h,a*c);break;default:Tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Nu(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Os(s,t){if(t.constructor===Float32Array)return s;let e=Nu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function sn(s,t){if(t.constructor===Float32Array)return s;let e=Nu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}function $_(){let s={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===me&&(i.r=Di(i.r),i.g=Di(i.g),i.b=Di(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(i.r=Nr(i.r),i.g=Nr(i.g),i.b=Nr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mi?kr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[zr]:{primaries:t,whitePoint:n,transfer:kr,toXYZ:dm,fromXYZ:fm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:n,transfer:me,toXYZ:dm,fromXYZ:fm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),s}function Di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Nr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function Sd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Tt("Texture: Unable to serialize Texture."),{})}function Td(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function Dd(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Es.fromArray(s,r);let a=i.x*Math.abs(Es.x)+i.y*Math.abs(Es.y)+i.z*Math.abs(Es.z),l=t.dot(Es),c=e.dot(Es),h=n.dot(Es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function rv(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function vn(s){Math.abs(s)>65504&&Tt("DataUtils.toHalfFloat(): Value out of range."),s=$t(s,-65504,65504),Ii.floatView[0]=s;let t=Ii.uint32View[0],e=t>>23&511;return Ii.baseTable[e]+((t&8388607)>>Ii.shiftTable[e])}function Qo(s){let t=s>>10;return Ii.uint32View[0]=Ii.mantissaTable[Ii.offsetTable[t]+(s&1023)]+Ii.exponentTable[t],Ii.floatView[0]}function Sm(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Hn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}function Ec(s,t,e,n,i,r){Tr.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(qo.x=r*Tr.x-i*Tr.y,qo.y=i*Tr.x+r*Tr.y):qo.copy(Tr),s.copy(t),s.x+=qo.x,s.y+=qo.y,s.applyMatrix4(yg)}function dv(s,t,e,n,i,r,o,a){let l;if(t.side===on?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Hi,a),l===null)return null;Fc.copy(a),Fc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Fc);return c<e.near||c>e.far?null:{distance:c,point:Fc.clone(),object:s}}function Oc(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Lc),s.getVertexPosition(l,Dc),s.getVertexPosition(c,Nc);let h=dv(s,t,e,n,Lc,Dc,Nc,Cm);if(h){let u=new L;$n.getBarycoord(Cm,Lc,Dc,Nc,u),i&&(h.uv=$n.getInterpolatedAttribute(i,a,l,c,u,new et)),r&&(h.uv1=$n.getInterpolatedAttribute(r,a,l,c,u,new et)),o&&(h.normal=$n.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};$n.getNormal(Lc,Dc,Nc,d.normal),h.face=d,h.barycoord=u}return h}function Hd(s,t){return s-t}function xv(s,t){return s.z-t.z}function _v(s,t){return t.z-s.z}function bv(s,t,e=0){let n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function ii(s,t){if(s.constructor!==t.constructor){let e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{let e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}function Wc(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(vh.fromBufferAttribute(a,i),yh.fromBufferAttribute(a,r),e.distanceSqToSegment(vh,yh,Xd,km)>n)return;Xd.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Xd);if(!(c<t.near||c>t.far))return{distance:c,point:km.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}function Wm(s,t,e,n,i,r,o){let a=rf.distanceSqToPoint(s);if(a<e){let l=new L;rf.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function rp(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}function Ym(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function wv(s,t){let e=1-s;return e*e*t}function Tv(s,t){return 2*(1-s)*s*t}function Av(s,t){return s*s*t}function ia(s,t,e,n){return wv(s,t)+Tv(s,e)+Av(s,n)}function Ev(s,t){let e=1-s;return e*e*e*t}function Cv(s,t){let e=1-s;return 3*e*e*s*t}function Rv(s,t){return 3*(1-s)*s*s*t}function Pv(s,t){return s*s*s*t}function sa(s,t,e,n,i){return Ev(s,t)+Cv(s,e)+Rv(s,n)+Pv(s,i)}function Iv(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Mg(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Fv(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,u=l;for(let d=e;d<i;d+=e){let p=s[d],f=s[d+1];p<a&&(a=p),f<l&&(l=f),p>h&&(h=p),f>u&&(u=f)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return La(r,o,e,a,l,c,0),o}function Mg(s,t,e,n,i){let r;if(i===Yv(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Zm(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Zm(o/n|0,s[o],s[o+1],r);return r&&so(r,r.next)&&(Na(r),r=r.next),r}function Ys(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(so(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Na(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function La(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Gv(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Dv(s,n,i,r):Lv(s)){t.push(l.i,s.i,c.i),Na(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Nv(Ys(s),t),La(s,t,e,n,i,r,2)):o===2&&Uv(s,t,e,n,i,r):La(Ys(s),t,e,n,i,r,1);break}}}function Lv(s){let t=s.prev,e=s,n=s.next;if(Ce(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),p=Math.max(a,l,c),f=n.next;for(;f!==t;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&jo(i,a,r,l,o,c,f.x,f.y)&&Ce(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Dv(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ce(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,p=Math.min(a,l,c),f=Math.min(h,u,d),x=Math.max(a,l,c),m=Math.max(h,u,d),g=of(p,f,t,e,n),_=of(x,m,t,e,n),y=s.prevZ,M=s.nextZ;for(;y&&y.z>=g&&M&&M.z<=_;){if(y.x>=p&&y.x<=x&&y.y>=f&&y.y<=m&&y!==i&&y!==o&&jo(a,h,l,u,c,d,y.x,y.y)&&Ce(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=p&&M.x<=x&&M.y>=f&&M.y<=m&&M!==i&&M!==o&&jo(a,h,l,u,c,d,M.x,M.y)&&Ce(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=g;){if(y.x>=p&&y.x<=x&&y.y>=f&&y.y<=m&&y!==i&&y!==o&&jo(a,h,l,u,c,d,y.x,y.y)&&Ce(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=_;){if(M.x>=p&&M.x<=x&&M.y>=f&&M.y<=m&&M!==i&&M!==o&&jo(a,h,l,u,c,d,M.x,M.y)&&Ce(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Nv(s,t){let e=s;do{let n=e.prev,i=e.next.next;!so(n,i)&&bg(n,e,e.next,i)&&Da(n,i)&&Da(i,n)&&(t.push(n.i,e.i,i.i),Na(e),Na(e.next),e=s=i),e=e.next}while(e!==s);return Ys(e)}function Uv(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wv(o,a)){let l=wg(o,a);o=Ys(o,o.next),l=Ys(l,l.next),La(o,t,e,n,i,r,0),La(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Fv(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Mg(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Vv(c))}i.sort(Ov);for(let r=0;r<i.length;r++)e=Bv(i[r],e);return e}function Ov(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Bv(s,t){let e=zv(s,t);if(!e)return t;let n=wg(e,s);return Ys(n,n.next),Ys(e,e.next)}function zv(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(so(s,e))return e;do{if(so(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Sg(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);Da(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&kv(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function kv(s,t){return Ce(s.prev,s,t.prev)<0&&Ce(t.next,s,s.next)<0}function Gv(s,t,e,n){let i=s;do i.z===0&&(i.z=of(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Hv(i)}function Hv(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function of(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Vv(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Sg(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function jo(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Sg(s,t,e,n,i,r,o,a)}function Wv(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Xv(s,t)&&(Da(s,t)&&Da(t,s)&&qv(s,t)&&(Ce(s.prev,s,t.prev)||Ce(s,t.prev,t))||so(s,t)&&Ce(s.prev,s,s.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function so(s,t){return s.x===t.x&&s.y===t.y}function bg(s,t,e,n){let i=Kc(Ce(s,t,e)),r=Kc(Ce(s,t,n)),o=Kc(Ce(e,n,s)),a=Kc(Ce(e,n,t));return!!(i!==r&&o!==a||i===0&&Jc(s,e,t)||r===0&&Jc(s,n,t)||o===0&&Jc(e,s,n)||a===0&&Jc(e,t,n))}function Jc(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Kc(s){return s>0?1:s<0?-1:0}function Xv(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&bg(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Da(s,t){return Ce(s.prev,s,s.next)<0?Ce(s,t,s.next)>=0&&Ce(s,s.prev,t)>=0:Ce(s,t,s.prev)<0||Ce(s,s.next,t)<0}function qv(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function wg(s,t){let e=af(s.i,s.x,s.y),n=af(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Zm(s,t,e,n){let i=af(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Na(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function af(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yv(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}function $m(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Jm(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}function $v(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function Jv(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}function Km(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}function rr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(jm(i))i.isRenderTargetTexture?(Tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(jm(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function an(s){let t={};for(let e=0;e<s.length;e++){let n=rr(s[e]);for(let i in n)t[i]=n[i]}return t}function jm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Kv(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function op(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}function Zn(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Dr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Tg(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function cf(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function Ag(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}function ty(s,t,e,n,i=30){let r=s.clone();r.name=t;let o=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let p=0;p<c.times.length;++p){let f=c.times[p]*i;if(!(f<e||f>=n)){u.push(c.times[p]);for(let x=0;x<h;++x)d.push(c.values[p*h+x])}}u.length!==0&&(c.times=Zn(u,c.times.constructor),c.values=Zn(d,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function ey(s,t=0,e=s,n=30){n<=0&&(n=30);let i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){let a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);let f=a.times.length-1,x;if(r<=a.times[0]){let g=h,_=u-h;x=a.values.slice(g,_)}else if(r>=a.times[f]){let g=f*u+h,_=g+u-h;x=a.values.slice(g,_)}else{let g=a.createInterpolant();g.evaluate(r),x=g.resultBuffer.slice()}l==="quaternion"&&new Re().fromArray(x).normalize().conjugate().toArray(x);let m=c.times.length;for(let g=0;g<m;++g){let _=g*p+d;if(l==="quaternion")Re.multiplyQuaternionsFlat(c.values,_,x,0,c.values,_);else{let y=p-d*2;for(let M=0;M<y;++M)c.values[_+M]-=x[M]}}}return s.blendMode=Ru,s}function Eg(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function ny(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function iy(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=Eg(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=ny(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function t0(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function e0(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}function sy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $s;case"vector":case"vector2":case"vector3":case"vector4":return uo;case"color":return ho;case"quaternion":return Js;case"bool":case"boolean":return li;case"string":return ci}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ry(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=sy(s.type);if(s.times===void 0){let n=[],i=[];Ag(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),Dr(s.settings)&&(e.settings={inTangents:Zn(s.settings.inTangents,Float32Array),outTangents:Zn(s.settings.outTangents,Float32Array)}),e}function n0(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}function ay(){this._document.hidden===!1&&this.reset()}function p0(s,t){return s.distance-t.distance}function mf(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)mf(r[o],t,e,!0)}}function Cg(s){let t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...Cg(s.children[e]));return t}function Ne(s,t,e,n,i,r,o){sh.set(i,r,o).unproject(n);let a=t[s];if(a!==void 0){let l=e.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],sh.x,sh.y,sh.z)}}function by(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function wy(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Ty(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Uu(s,t,e,n){let i=Ay(n);switch(e){case Eu:return s*t;case vl:return s*t/i.components*i.byteLength;case bo:return s*t/i.components*i.byteLength;case Vi:return s*t*2/i.components*i.byteLength;case yl:return s*t*2/i.components*i.byteLength;case Cu:return s*t*3/i.components*i.byteLength;case dn:return s*t*4/i.components*i.byteLength;case Ml:return s*t*4/i.components*i.byteLength;case wo:case To:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bl:case Tl:return Math.max(s,16)*Math.max(t,8)/4;case Sl:case wl:return Math.max(s,8)*Math.max(t,8)/2;case Al:case El:case Rl:case Pl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Cl:case Co:case Il:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case kl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ql:case Yl:case Zl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case $l:case Jl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ro:case Kl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ay(s){switch(s){case pn:case bu:return{byteLength:1,components:1};case sr:case wu:case He:return{byteLength:2,components:1};case xl:case _l:return{byteLength:2,components:4};case mn:case gl:case rn:return{byteLength:4,components:1};case Tu:case Au:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}var gf,b0,w0,xf,xu,_f,T0,A0,us,vf,er,Hi,on,ei,hi,nr,xo,_u,vu,yf,E0,ds,Mf,Sf,bf,wf,Tf,Af,Ef,Cf,yu,Mu,Rf,Pf,If,Lf,Df,Nf,Uf,Ff,Of,ra,oa,aa,zs,la,ca,ha,ua,_o,Bf,zf,Pn,fs,ps,ms,ui,vo,gs,xs,ah,kf,ml,di,_s,yo,Mo,Ur,hn,Fr,Le,Su,C0,ir,R0,we,So,P0,Gn,I0,pn,bu,wu,sr,gl,mn,rn,He,xl,_l,vs,Tu,Au,Eu,Cu,dn,oi,fi,vl,bo,Vi,yl,L0,Ml,wo,To,Ao,Eo,Sl,bl,wl,Tl,Al,El,Cl,Rl,Pl,Co,Il,Ll,Dl,Nl,Ul,Fl,Ol,Bl,zl,kl,Gl,Hl,Vl,Wl,Xl,ql,Yl,Zl,$l,Jl,Ro,Kl,Gf,Hf,Vf,Or,da,ta,lh,ts,es,Br,Ql,Ru,Wf,Xf,qf,Yf,D0,N0,U0,pi,Zf,mi,Je,zr,kr,me,F0,O0,B0,z0,ea,k0,G0,H0,V0,W0,X0,q0,Y0,Z0,$0,J0,K0,Q0,$f,Jf,Kf,Qf,Pu,jf,tp,Iu,Lu,jl,j0,tg,eg,ng,ig,sg,rg,og,ag,Du,yn,ns,lg,cg,hg,ug,dg,D_,cm,is,_g,Mn,tn,hm,Bs,ks,sp,hp,et,Re,up,L,yd,um,dp,Kt,Md,dm,fm,le,dr,fa,J_,An,ch,K_,bd,De,fp,de,Vr,Te,Gs,hh,Hs,uh,gu,Yt,fr,Xn,Q_,j_,Zi,_c,wn,pm,mm,Fn,Vs,tv,gm,pr,Ti,vc,Go,ev,nv,xm,_m,vm,ym,iv,mr,wd,xe,Li,sv,Ws,vg,$i,yc,ht,en,Ni,pa,En,qn,Ai,Ad,Ei,gr,xr,Mm,Ed,Cd,Rd,Pd,Id,Ld,$n,Ue,Ci,Yn,Mc,_r,vr,yr,Ji,Ki,As,Ho,Sc,bc,Es,Ii,dh,ze,wc,ov,se,fh,ph,mh,gh,Wr,xh,Xr,_h,Lt,av,Vo,Nd,Ie,lv,Dn,Ud,Mr,Tn,Wo,Ye,Zt,ss,cn,Ui,Fd,cv,hv,Nn,uv,ke,qr,Sr,Xo,br,wr,Tr,qo,yg,Tc,Yo,Ac,bm,Od,wm,ma,Cc,Tm,ga,Ri,Bd,Rc,Pc,Fi,On,Am,Cs,Ic,Em,Lc,Dc,Nc,zd,Uc,Cm,Fc,fe,Zo,Rm,Pm,fv,Im,Bc,kd,Lm,Gd,xa,Yr,un,Dm,pv,_a,Cn,Ar,Nm,zc,Um,mv,$o,Jo,Kn,Rs,gv,kc,ai,Fm,Zr,sf,_n,vv,yv,Mv,Gc,Ps,Vd,Om,Bm,Sv,Wd,nn,Hc,va,Ze,vh,yh,zm,Ko,Vc,Xd,km,Qn,Gm,Hm,Rn,ya,$r,Vm,rf,Xc,qc,Ma,Sa,Mh,Sh,Xs,bh,wh,rs,Th,Ah,Bn,Jr,Kr,Sn,ba,wa,jn,Qr,Oi,Ta,Yc,Zc,qd,$c,Aa,bn,qs,Ea,Xm,qm,Yd,Zd,$d,Ca,jr,Ra,to,Pa,eo,no,io,Eh,Ia,os,as,lf,Un,Ua,Zv,Zs,Fa,ro,zn,Oa,Ba,oo,za,ka,Ga,Ha,Va,Qm,Wa,gi,Qv,jv,Ge,ls,Fe,Xa,qa,Ya,Za,$a,ao,lo,Ja,Ka,Ch,Bi,Qa,co,ja,tl,fn,li,ho,$s,el,Js,ci,uo,cs,Jn,fo,ap,Ke,Pi,hf,kn,Rh,Ph,Er,hs,Ih,Lh,Dh,ti,zi,Jd,i0,s0,Ks,Qc,jc,si,Qs,Qi,r0,o0,Ee,uf,nl,df,il,ki,ff,Gi,sl,rl,po,ol,a0,al,mo,ll,cl,Kd,Nh,oy,l0,c0,Qd,Uh,th,go,Fh,h0,u0,Is,Oh,Cr,Rr,js,hl,tr,Ls,jd,ly,Ds,Ns,Bh,ul,Us,d0,cy,Fs,zh,kh,dl,lp,hy,cp,uy,dy,fy,py,my,gy,xy,pf,ve,Gh,fl,_y,Hh,Vh,Wh,vy,Xh,qh,Yh,f0,Zh,$h,Jh,Kh,pp,Qh,m0,pl,g0,eh,Pr,Ir,tf,yy,My,jh,x0,tu,ji,nh,ef,eu,nu,Sy,_0,v0,iu,su,ru,y0,ih,M0,ou,sh,Pe,au,rh,lu,cu,hu,S0,oh,nf,uu,du,fu,pu,mu,mp=ge(()=>{gf="187",b0={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},w0={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xf=0,xu=1,_f=2,T0=3,A0=0,us=1,vf=2,er=3,Hi=0,on=1,ei=2,hi=0,nr=1,xo=2,_u=3,vu=4,yf=5,E0=6,ds=100,Mf=101,Sf=102,bf=103,wf=104,Tf=200,Af=201,Ef=202,Cf=203,yu=204,Mu=205,Rf=206,Pf=207,If=208,Lf=209,Df=210,Nf=211,Uf=212,Ff=213,Of=214,ra=0,oa=1,aa=2,zs=3,la=4,ca=5,ha=6,ua=7,_o=0,Bf=1,zf=2,Pn=0,fs=1,ps=2,ms=3,ui=4,vo=5,gs=6,xs=7,ah="attached",kf="detached",ml=300,di=301,_s=302,yo=303,Mo=304,Ur=1e3,hn=1001,Fr=1002,Le=1003,Su=1004,C0=1004,ir=1005,R0=1005,we=1006,So=1007,P0=1007,Gn=1008,I0=1008,pn=1009,bu=1010,wu=1011,sr=1012,gl=1013,mn=1014,rn=1015,He=1016,xl=1017,_l=1018,vs=1020,Tu=35902,Au=35899,Eu=1021,Cu=1022,dn=1023,oi=1026,fi=1027,vl=1028,bo=1029,Vi=1030,yl=1031,L0=1032,Ml=1033,wo=33776,To=33777,Ao=33778,Eo=33779,Sl=35840,bl=35841,wl=35842,Tl=35843,Al=36196,El=37492,Cl=37496,Rl=37488,Pl=37489,Co=37490,Il=37491,Ll=37808,Dl=37809,Nl=37810,Ul=37811,Fl=37812,Ol=37813,Bl=37814,zl=37815,kl=37816,Gl=37817,Hl=37818,Vl=37819,Wl=37820,Xl=37821,ql=36492,Yl=36494,Zl=36495,$l=36283,Jl=36284,Ro=36285,Kl=36286,Gf=2200,Hf=2201,Vf=2202,Or=2300,da=2301,ta=2302,lh=2303,ts=2400,es=2401,Br=2402,Ql=2500,Ru=2501,Wf=0,Xf=1,qf=2,Yf=3200,D0=3201,N0=3202,U0=3203,pi=0,Zf=1,mi="",Je="srgb",zr="srgb-linear",kr="linear",me="srgb",F0="",O0="rg",B0="ga",z0=0,ea=7680,k0=7681,G0=7682,H0=7683,V0=34055,W0=34056,X0=5386,q0=512,Y0=513,Z0=514,$0=515,J0=516,K0=517,Q0=518,$f=519,Jf=512,Kf=513,Qf=514,Pu=515,jf=516,tp=517,Iu=518,Lu=519,jl=35044,j0=35048,tg=35040,eg=35045,ng=35049,ig=35041,sg=35046,rg=35050,og=35042,ag="100",Du="300 es",yn=2e3,ns=2001,lg={COMPUTE:"compute",RENDER:"render"},cg={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},hg={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},ug={TEXTURE_COMPARE:"depthTextureCompare"},dg={NONE:0,SHARED:1,FULL:2};D_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};cm={},is=null;_g={[ra]:ra,[aa]:ha,[la]:la,[zs]:ca,[oa]:oa,[ha]:aa,[ua]:ua,[ca]:zs},Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hm=1234567,Bs=Math.PI/180,ks=180/Math.PI;sp={DEG2RAD:Bs,RAD2DEG:ks,generateUUID:Hn,clamp:$t,euclideanModulo:np,mapLinear:N_,inverseLerp:U_,lerp:na,damp:F_,pingpong:O_,smoothstep:B_,smootherstep:z_,randInt:k_,randFloat:G_,randFloatSpread:H_,seededRandom:V_,degToRad:W_,radToDeg:X_,isPowerOfTwo:q_,ceilPowerOfTwo:Y_,floorPowerOfTwo:ip,setQuaternionFromProperEuler:Z_,normalize:sn,denormalize:Os},hp=class hp{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hp.prototype.isVector2=!0;et=hp,Re=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],p=r[o+1],f=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==p||h!==f){let m=l*d+c*p+h*f+u*x;m<0&&(d=-d,p=-p,f=-f,x=-x,m=-m);let g=1-a;if(m<.9995){let _=Math.acos(m),y=Math.sin(_);g=Math.sin(g*_)/y,a=Math.sin(a*_)/y,l=l*g+d*a,c=c*g+p*a,h=h*g+f*a,u=u*g+x*a}else{l=l*g+d*a,c=c*g+p*a,h=h*g+f*a,u=u*g+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],f=r[o+3];return t[e]=a*f+h*u+l*p-c*d,t[e+1]=l*f+h*d+c*u-a*p,t[e+2]=c*f+h*p+a*d-l*u,t[e+3]=h*f-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),f=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:Tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},up=class up{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(um.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(um.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yd.copy(this).projectOnVector(t),this.sub(yd)}reflect(t){return this.sub(yd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};up.prototype.isVector3=!0;L=up,yd=new L,um=new Re,dp=class dp{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],x=i[0],m=i[3],g=i[6],_=i[1],y=i[4],M=i[7],w=i[2],T=i[5],v=i[8];return r[0]=o*x+a*_+l*w,r[3]=o*m+a*y+l*T,r[6]=o*g+a*M+l*v,r[1]=c*x+h*_+u*w,r[4]=c*m+h*y+u*T,r[7]=c*g+h*M+u*v,r[2]=d*x+p*_+f*w,r[5]=d*m+p*y+f*T,r[8]=d*g+p*M+f*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,f=e*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ri("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Md.makeScale(t,e)),this}rotate(t){return ri("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Md.makeRotation(-t)),this}translate(t,e){return ri("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Md.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dp.prototype.isMatrix3=!0;Kt=dp,Md=new Kt,dm=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fm=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le=$_();fa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{dr===void 0&&(dr=Gr("canvas")),dr.width=t.width,dr.height=t.height;let i=dr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=dr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Gr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Di(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Di(e[n]/255)*255):e[n]=Di(e[n]);return{data:e,width:t.width,height:t.height}}else return Tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},J_=0,An=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Hn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Sd(i[o].image)):r.push(Sd(i[o]))}else r=Sd(i);n.url=r}return e||(t.images[this.uuid]=n),n}};ch=class extends An{constructor(t=null){ri('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}},K_=0,bd=new L,De=class s extends Mn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=hn,i=hn,r=we,o=Gn,a=dn,l=pn,c=s.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Hn(),this.name="",this.source=new An(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(bd).x}get height(){return this.source.getSize(bd).y}get depth(){return this.source.getSize(bd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Tt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Tt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ml)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ur:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case Fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ur:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case Fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=ml;De.DEFAULT_ANISOTROPY=1;fp=class fp{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,M=(p+1)/2,w=(g+1)/2,T=(h+d)/4,v=(u+x)/4,S=(f+m)/4;return y>M&&y>w?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=v/n):M>w?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=S/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=v/r,i=S/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-f)*(m-f)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-f)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fp.prototype.isVector4=!0;de=fp,Vr=class extends Mn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:we,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new De({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:we,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new An(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Te=class extends Vr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Gs=class extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},hh=class extends Te{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Gs(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},Hs=class extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},uh=class extends Te{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Hs(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},gu=class gu{constructor(t,e,n,i,r,o,a,l,c,h,u,d,p,f,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,p,f,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,p,f,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gu().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/fr.setFromMatrixColumn(t,0).length(),r=1/fr.setFromMatrixColumn(t,1).length(),o=1/fr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,f=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+f*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=f+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,f=c*h,x=c*u;e[0]=d+x*a,e[4]=f*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-f,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,f=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=f+p*a,e[1]=p+f*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,f=a*h,x=a*u;e[0]=l*h,e[4]=f*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-f,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,f=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=f*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+f,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,p=o*c,f=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=p*u-f,e[2]=f*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Q_,t,j_)}lookAt(t,e,n){let i=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Zi.crossVectors(n,wn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Zi.crossVectors(n,wn)),Zi.normalize(),_c.crossVectors(wn,Zi),i[0]=Zi.x,i[4]=_c.x,i[8]=wn.x,i[1]=Zi.y,i[5]=_c.y,i[9]=wn.y,i[2]=Zi.z,i[6]=_c.z,i[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],x=n[6],m=n[10],g=n[14],_=n[3],y=n[7],M=n[11],w=n[15],T=i[0],v=i[4],S=i[8],R=i[12],E=i[1],I=i[5],N=i[9],z=i[13],D=i[2],O=i[6],q=i[10],H=i[14],st=i[3],W=i[7],Z=i[11],nt=i[15];return r[0]=o*T+a*E+l*D+c*st,r[4]=o*v+a*I+l*O+c*W,r[8]=o*S+a*N+l*q+c*Z,r[12]=o*R+a*z+l*H+c*nt,r[1]=h*T+u*E+d*D+p*st,r[5]=h*v+u*I+d*O+p*W,r[9]=h*S+u*N+d*q+p*Z,r[13]=h*R+u*z+d*H+p*nt,r[2]=f*T+x*E+m*D+g*st,r[6]=f*v+x*I+m*O+g*W,r[10]=f*S+x*N+m*q+g*Z,r[14]=f*R+x*z+m*H+g*nt,r[3]=_*T+y*E+M*D+w*st,r[7]=_*v+y*I+M*O+w*W,r[11]=_*S+y*N+M*q+w*Z,r[15]=_*R+y*z+M*H+w*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],f=t[3],x=t[7],m=t[11],g=t[15],_=l*p-c*d,y=a*p-c*u,M=a*d-l*u,w=o*p-c*h,T=o*d-l*h,v=o*u-a*h;return e*(x*_-m*y+g*M)-n*(f*_-m*w+g*T)+i*(f*y-x*w+g*v)-r*(f*M-x*T+m*v)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],f=t[12],x=t[13],m=t[14],g=t[15],_=e*a-n*o,y=e*l-i*o,M=e*c-r*o,w=n*l-i*a,T=n*c-r*a,v=i*c-r*l,S=h*x-u*f,R=h*m-d*f,E=h*g-p*f,I=u*m-d*x,N=u*g-p*x,z=d*g-p*m,D=_*z-y*N+M*I+w*E-T*R+v*S;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return t[0]=(a*z-l*N+c*I)*O,t[1]=(i*N-n*z-r*I)*O,t[2]=(x*v-m*T+g*w)*O,t[3]=(d*T-u*v-p*w)*O,t[4]=(l*E-o*z-c*R)*O,t[5]=(e*z-i*E+r*R)*O,t[6]=(m*M-f*v-g*y)*O,t[7]=(h*v-d*M+p*y)*O,t[8]=(o*N-a*E+c*S)*O,t[9]=(n*E-e*N-r*S)*O,t[10]=(f*T-x*M+g*_)*O,t[11]=(u*M-h*T-p*_)*O,t[12]=(a*R-o*I-l*S)*O,t[13]=(e*I-n*R+i*S)*O,t[14]=(x*y-f*w-m*_)*O,t[15]=(h*w-u*y+d*_)*O,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,f=r*u,x=o*h,m=o*u,g=a*u,_=l*c,y=l*h,M=l*u,w=n.x,T=n.y,v=n.z;return i[0]=(1-(x+g))*w,i[1]=(p+M)*w,i[2]=(f-y)*w,i[3]=0,i[4]=(p-M)*T,i[5]=(1-(d+g))*T,i[6]=(m+_)*T,i[7]=0,i[8]=(f+y)*v,i[9]=(m-_)*v,i[10]=(1-(d+x))*v,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=fr.set(i[0],i[1],i[2]).length(),a=fr.set(i[4],i[5],i[6]).length(),l=fr.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Xn.copy(this);let c=1/o,h=1/a,u=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,e.setFromRotationMatrix(Xn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=yn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),p=(n+i)/(n-i),f,x;if(l)f=r/(o-r),x=o*r/(o-r);else if(a===yn)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ns)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=yn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),p=-(n+i)/(n-i),f,x;if(l)f=1/(o-r),x=o/(o-r);else if(a===yn)f=-2/(o-r),x=-(o+r)/(o-r);else if(a===ns)f=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};gu.prototype.isMatrix4=!0;Yt=gu,fr=new L,Xn=new Yt,Q_=new L(0,0,0),j_=new L(1,1,1),Zi=new L,_c=new L,wn=new L,pm=new Yt,mm=new Re,Fn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mm.setFromEuler(this),this.setFromQuaternion(mm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";Vs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tv=0,gm=new L,pr=new Re,Ti=new Yt,vc=new L,Go=new L,ev=new L,nv=new Re,xm=new L(1,0,0),_m=new L(0,1,0),vm=new L(0,0,1),ym={type:"added"},iv={type:"removed"},mr={type:"childadded",child:null},wd={type:"childremoved",child:null},xe=class s extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new Fn,n=new Re,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Kt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(xm,t)}rotateY(t){return this.rotateOnAxis(_m,t)}rotateZ(t){return this.rotateOnAxis(vm,t)}translateOnAxis(t,e){return gm.copy(t).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xm,t)}translateY(t){return this.translateOnAxis(_m,t)}translateZ(t){return this.translateOnAxis(vm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vc.copy(t):vc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Go,vc,this.up):Ti.lookAt(vc,Go,this.up),this.quaternion.setFromRotationMatrix(Ti),i&&(Ti.extractRotation(i.matrixWorld),pr.setFromRotationMatrix(Ti),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ym),mr.child=t,this.dispatchEvent(mr),mr.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(iv),wd.child=t,this.dispatchEvent(wd),wd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ym),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,t,ev),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,nv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),f=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xe.DEFAULT_UP=new L(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Li=class extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},sv={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},yc={h:0,s:0,l:0};ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=np(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Td(o,r,t+1/3),this.g=Td(o,r,t),this.b=Td(o,r,t-1/3)}return le.colorSpaceToWorking(this,i),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&Tt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Tt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Tt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let n=vg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Tt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return le.workingToColorSpace(en.copy(this),t),Math.round($t(en.r*255,0,255))*65536+Math.round($t(en.g*255,0,255))*256+Math.round($t(en.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(en.copy(this),e);let n=en.r,i=en.g,r=en.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Je){le.workingToColorSpace(en.copy(this),t);let e=en.r,n=en.g,i=en.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(yc);let n=na($i.h,yc.h,e),i=na($i.s,yc.s,e),r=na($i.l,yc.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new ht;ht.NAMES=vg;Ni=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ht(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},pa=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ht(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},En=class extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},qn=new L,Ai=new L,Ad=new L,Ei=new L,gr=new L,xr=new L,Mm=new L,Ed=new L,Cd=new L,Rd=new L,Pd=new de,Id=new de,Ld=new de,$n=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),qn.subVectors(t,e),i.cross(qn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){qn.subVectors(i,e),Ai.subVectors(n,e),Ad.subVectors(t,e);let o=qn.dot(qn),a=qn.dot(Ai),l=qn.dot(Ad),c=Ai.dot(Ai),h=Ai.dot(Ad),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,f=(o*h-a*l)*d;return r.set(1-p-f,f,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Pd.setScalar(0),Id.setScalar(0),Ld.setScalar(0),Pd.fromBufferAttribute(t,e),Id.fromBufferAttribute(t,n),Ld.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Pd,r.x),o.addScaledVector(Id,r.y),o.addScaledVector(Ld,r.z),o}static isFrontFacing(t,e,n,i){return qn.subVectors(n,e),Ai.subVectors(t,e),qn.cross(Ai).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),qn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;gr.subVectors(i,n),xr.subVectors(r,n),Ed.subVectors(t,n);let l=gr.dot(Ed),c=xr.dot(Ed);if(l<=0&&c<=0)return e.copy(n);Cd.subVectors(t,i);let h=gr.dot(Cd),u=xr.dot(Cd);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(gr,o);Rd.subVectors(t,r);let p=gr.dot(Rd),f=xr.dot(Rd);if(f>=0&&p<=f)return e.copy(r);let x=p*c-l*f;if(x<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(xr,a);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return Mm.subVectors(r,i),a=(u-h)/(u-h+(p-f)),e.copy(i).addScaledVector(Mm,a);let g=1/(m+x+d);return o=x*g,a=d*g,e.copy(n).addScaledVector(gr,o).addScaledVector(xr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ue=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mc.copy(n.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ho),Sc.subVectors(this.max,Ho),_r.subVectors(t.a,Ho),vr.subVectors(t.b,Ho),yr.subVectors(t.c,Ho),Ji.subVectors(vr,_r),Ki.subVectors(yr,vr),As.subVectors(_r,yr);let e=[0,-Ji.z,Ji.y,0,-Ki.z,Ki.y,0,-As.z,As.y,Ji.z,0,-Ji.x,Ki.z,0,-Ki.x,As.z,0,-As.x,-Ji.y,Ji.x,0,-Ki.y,Ki.x,0,-As.y,As.x,0];return!Dd(e,_r,vr,yr,Sc)||(e=[1,0,0,0,1,0,0,0,1],!Dd(e,_r,vr,yr,Sc))?!1:(bc.crossVectors(Ji,Ki),e=[bc.x,bc.y,bc.z],Dd(e,_r,vr,yr,Sc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ci=[new L,new L,new L,new L,new L,new L,new L,new L],Yn=new L,Mc=new Ue,_r=new L,vr=new L,yr=new L,Ji=new L,Ki=new L,As=new L,Ho=new L,Sc=new L,bc=new L,Es=new L;Ii=rv();dh=class{static toHalfFloat(t){return vn(t)}static fromHalfFloat(t){return Qo(t)}},ze=new L,wc=new et,ov=0,se=class extends Mn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ov++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jl,this.updateRanges=[],this.gpuType=rn,this.version=0,this._normalizationScale=t!==void 0?Nu(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wc.fromBufferAttribute(this,e),wc.applyMatrix3(t),this.setXY(e,wc.x,wc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Os(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):sn(t,this.array)}},fh=class extends se{constructor(t,e,n){super(new Int8Array(t),e,n)}},ph=class extends se{constructor(t,e,n){super(new Uint8Array(t),e,n)}},mh=class extends se{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}},gh=class extends se{constructor(t,e,n){super(new Int16Array(t),e,n)}},Wr=class extends se{constructor(t,e,n){super(new Uint16Array(t),e,n)}},xh=class extends se{constructor(t,e,n){super(new Int32Array(t),e,n)}},Xr=class extends se{constructor(t,e,n){super(new Uint32Array(t),e,n)}},_h=class extends se{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Qo(this.array[t*this.itemSize]);return this.normalized&&(e=Os(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=vn(e),this}getY(t){let e=Qo(this.array[t*this.itemSize+1]);return this.normalized&&(e=Os(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=vn(e),this}getZ(t){let e=Qo(this.array[t*this.itemSize+2]);return this.normalized&&(e=Os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=vn(e),this}getW(t){let e=Qo(this.array[t*this.itemSize+3]);return this.normalized&&(e=Os(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=vn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array)),this.array[t+0]=vn(e),this.array[t+1]=vn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),i=sn(i,this.array)),this.array[t+0]=vn(e),this.array[t+1]=vn(n),this.array[t+2]=vn(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[t+0]=vn(e),this.array[t+1]=vn(n),this.array[t+2]=vn(i),this.array[t+3]=vn(r),this}},Lt=class extends se{constructor(t,e,n){super(new Float32Array(t),e,n)}},av=new Ue,Vo=new L,Nd=new L,Ie=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):av.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);let e=Vo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Vo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(Nd)),this.expandByPoint(Vo.copy(t.center).sub(Nd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},lv=0,Dn=new Yt,Ud=new xe,Mr=new L,Tn=new Ue,Wo=new Ue,Ye=new L,Zt=class s extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(L_(t)?Xr:Wr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return Ud.lookAt(t),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Lt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ue);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ie);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(Tn.min,Wo.min),Tn.expandByPoint(Ye),Ye.addVectors(Tn.max,Wo.max),Tn.expandByPoint(Ye)):(Tn.expandByPoint(Wo.min),Tn.expandByPoint(Wo.max))}Tn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ye));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ye.fromBufferAttribute(a,c),l&&(Mr.fromBufferAttribute(t,c),Ye.add(Mr)),i=Math.max(i,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new se(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)a[R]=new L,l[R]=new L;let h=new L,u=new L,d=new L,p=new et,f=new et,x=new et,m=new L,g=new L;function _(R,E,I){c[R]=c[E]=c[I]=1,h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,I),p.fromBufferAttribute(r,R),f.fromBufferAttribute(r,E),x.fromBufferAttribute(r,I),u.sub(h),d.sub(h),f.sub(p),x.sub(p);let N=1/(f.x*x.y-x.x*f.y);isFinite(N)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(N),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(N),a[R].add(m),a[E].add(m),a[I].add(m),l[R].add(g),l[E].add(g),l[I].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,E=y.length;R<E;++R){let I=y[R],N=I.start,z=I.count;for(let D=N,O=N+z;D<O;D+=3)_(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let M=new L,w=new L,T=new L,v=new L;function S(R){T.fromBufferAttribute(i,R),v.copy(T);let E=a[R];M.copy(E),M.sub(T.multiplyScalar(T.dot(E))).normalize(),w.crossVectors(v,E);let N=w.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,N)}for(let R=0,E=n.count;R<E;++R)c[R]&&S(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){let f=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,f),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,f),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new se(d,h,u)}if(this.index===null)return Tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ss=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jl,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Sm(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Sm(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};cn=new L,Ui=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?Nu(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Hr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Hr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Os(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):sn(t,this.data.array)}},Fd=new L,cv=new L,hv=new Kt,Nn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Fd.subVectors(n,e).cross(cv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Fd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hv.getNormalMatrix(t),i=this.coplanarPoint(Fd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},uv=0,ke=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=nr,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yu,this.blendDst=Mu,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Tt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Tt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Nn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new et().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},qr=class extends ke{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xo=new L,br=new L,wr=new L,Tr=new et,qo=new et,yg=new Yt,Tc=new L,Yo=new L,Ac=new L,bm=new et,Od=new et,wm=new et,ma=class extends xe{constructor(t=new qr){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new Zt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ss(e,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new Ui(n,3,0,!1)),Sr.setAttribute("uv",new Ui(n,2,3,!1))}this.geometry=Sr,this.material=t,this.center=new et(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),yg.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-wr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Ec(Tc.set(-.5,-.5,0),wr,o,br,i,r),Ec(Yo.set(.5,-.5,0),wr,o,br,i,r),Ec(Ac.set(.5,.5,0),wr,o,br,i,r),bm.set(0,0),Od.set(1,0),wm.set(1,1);let a=t.ray.intersectTriangle(Tc,Yo,Ac,!1,Xo);if(a===null&&(Ec(Yo.set(-.5,.5,0),wr,o,br,i,r),Od.set(0,1),a=t.ray.intersectTriangle(Tc,Ac,Yo,!1,Xo),a===null))return;let l=t.ray.origin.distanceTo(Xo);l<t.near||l>t.far||e.push({distance:l,point:Xo.clone(),uv:$n.getInterpolation(Xo,Tc,Yo,Ac,bm,Od,wm,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};Cc=new L,Tm=new L,ga=class extends xe{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let i=this.levels,r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){let i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Cc.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(Cc);this.getObjectForDistance(i).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){Cc.setFromMatrixPosition(t.matrixWorld),Tm.setFromMatrixPosition(this.matrixWorld);let n=Cc.distanceTo(Tm)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){let e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}},Ri=new L,Bd=new L,Rc=new L,Pc=new L,Fi=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ri.copy(this.origin).addScaledVector(this.direction,e),Ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Bd.copy(t).add(e).multiplyScalar(.5),Rc.copy(e).sub(t).normalize(),Pc.copy(this.origin).sub(Bd);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Rc),a=Pc.dot(this.direction),l=-Pc.dot(Rc),c=Pc.lengthSq(),h=Math.abs(1-o*o),u,d,p,f;if(h>0)if(u=o*l-a,d=o*a-l,f=r*h,u>=0)if(d>=-f)if(d<=f){let x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Bd).addScaledVector(Rc,d),p}intersectSphere(t,e){if(t.radius<0)return null;Ri.subVectors(t.center,this.origin);let n=Ri.dot(this.direction),i=Ri.dot(Ri)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ri)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,p=t.z-o.z,f=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,_=n.y-o.y,y=n.z-o.z,M=Math.abs(l),w=Math.abs(c),T=Math.abs(h),v,S,R,E,I,N,z,D,O,q,H,st;if(M>=w&&M>=T?(R=l,N=u,O=f,st=g,l>=0?(v=c,S=h,E=d,I=p,z=x,D=m,q=_,H=y):(v=h,S=c,E=p,I=d,z=m,D=x,q=y,H=_)):w>=T?(R=c,N=d,O=x,st=_,c>=0?(v=h,S=l,E=p,I=u,z=m,D=f,q=y,H=g):(v=l,S=h,E=u,I=p,z=f,D=m,q=g,H=y)):(R=h,N=p,O=m,st=y,h>=0?(v=l,S=c,E=u,I=d,z=f,D=x,q=g,H=_):(v=c,S=l,E=d,I=u,z=x,D=f,q=_,H=g)),R===0)return null;let W=v/R,Z=S/R,nt=1/R,At=E-W*N,ot=I-Z*N,G=z-W*O,lt=D-Z*O,vt=q-W*st,kt=H-Z*st,wt=vt*lt-kt*G,Ht=At*kt-ot*vt,ye=G*ot-lt*At;if(i){if(wt<0||Ht<0||ye<0)return null}else if((wt<0||Ht<0||ye<0)&&(wt>0||Ht>0||ye>0))return null;let Pt=wt+Ht+ye;if(Pt===0)return null;let ne=nt*(wt*N+Ht*O+ye*st);return(Pt>0?ne<0:ne>0)?null:this.at(ne/Pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},On=class extends ke{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=_o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Am=new Yt,Cs=new Fi,Ic=new Ie,Em=new L,Lc=new L,Dc=new L,Nc=new L,zd=new L,Uc=new L,Cm=new L,Fc=new L,fe=class extends xe{constructor(t=new Zt,e=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Uc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(zd.fromBufferAttribute(u,t),o?Uc.addScaledVector(zd,h):Uc.addScaledVector(zd.sub(e),h))}e.add(Uc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ic.copy(n.boundingSphere),Ic.applyMatrix4(r),Cs.copy(t.ray).recast(t.near),!(Ic.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Ic,Em)===null||Cs.origin.distanceToSquared(Em)>(t.far-t.near)**2))&&(Am.copy(r).invert(),Cs.copy(t.ray).applyMatrix4(Am),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cs)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,x=d.length;f<x;f++){let m=d[f],g=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,w=y;M<w;M+=3){let T=a.getX(M),v=a.getX(M+1),S=a.getX(M+2);i=Oc(this,g,t,n,c,h,u,T,v,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let f=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let _=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);i=Oc(this,o,t,n,c,h,u,_,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,x=d.length;f<x;f++){let m=d[f],g=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,w=y;M<w;M+=3){let T=M,v=M+1,S=M+2;i=Oc(this,g,t,n,c,h,u,T,v,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let f=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let _=m,y=m+1,M=m+2;i=Oc(this,o,t,n,c,h,u,_,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};Zo=new de,Rm=new de,Pm=new de,fv=new de,Im=new Yt,Bc=new L,kd=new Ie,Lm=new Yt,Gd=new Fi,xa=class extends fe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ah,this.bindMatrix=new Yt,this.bindMatrixInverse=new Yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ue),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Bc),this.boundingBox.expandByPoint(Bc)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ie),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Bc),this.boundingSphere.expandByPoint(Bc)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kd.copy(this.boundingSphere),kd.applyMatrix4(i),t.ray.intersectsSphere(kd)!==!1&&(Lm.copy(i).invert(),Gd.copy(t.ray).applyMatrix4(Lm),!(this.boundingBox!==null&&Gd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Gd)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new de,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===ah?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Tt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;Rm.fromBufferAttribute(i.attributes.skinIndex,t),Pm.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(Zo.copy(e),e.set(0,0,0,0)):(Zo.set(e.x,e.y,e.z,1),e.set(0,0,0)),Zo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Pm.getComponent(r);if(o!==0){let a=Rm.getComponent(r);Im.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(fv.copy(Zo).applyMatrix4(Im),o)}}return e.isVector4&&(e.w=Zo.w),e.applyMatrix4(this.bindMatrixInverse)}},Yr=class extends xe{constructor(){super(),this.isBone=!0,this.type="Bone"}},un=class extends De{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Le,h=Le,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Dm=new Yt,pv=new Yt,_a=class s{constructor(t=[],e=[]){this.uuid=Hn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Tt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Yt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Yt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:pv;Dm.multiplyMatrices(a,e[r]),Dm.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new un(e,t,t,dn,rn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(Tt("Skeleton: No bone found with UUID:",r),o=new Yr),this.bones.push(o),this.boneInverses.push(new Yt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},Cn=class extends se{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ar=new Yt,Nm=new Yt,zc=[],Um=new Ue,mv=new Yt,$o=new fe,Jo=new Ie,Kn=class extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,mv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ue),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ar),Um.copy(t.boundingBox).applyMatrix4(Ar),this.boundingBox.union(Um)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ie),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ar),Jo.copy(t.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(Jo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if($o.geometry=this.geometry,$o.material=this.material,$o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jo.copy(this.boundingSphere),Jo.applyMatrix4(n),t.ray.intersectsSphere(Jo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ar),Nm.multiplyMatrices(n,Ar),$o.matrixWorld=Nm,$o.raycast(t,zc);for(let o=0,a=zc.length;o<a;o++){let l=zc[o];l.instanceId=r,l.object=this,e.push(l)}zc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Cn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new un(new Float32Array(i*this.count),i,this.count,vl,rn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rs=new Ie,gv=new et(.5,.5),kc=new L,ai=class{constructor(t=new Nn,e=new Nn,n=new Nn,i=new Nn,r=new Nn,o=new Nn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],f=r[8],x=r[9],m=r[10],g=r[11],_=r[12],y=r[13],M=r[14],w=r[15];if(i[0].setComponents(c-o,p-h,g-f,w-_).normalize(),i[1].setComponents(c+o,p+h,g+f,w+_).normalize(),i[2].setComponents(c+a,p+u,g+x,w+y).normalize(),i[3].setComponents(c-a,p-u,g-x,w-y).normalize(),n)i[4].setComponents(l,d,m,M).normalize(),i[5].setComponents(c-l,p-d,g-m,w-M).normalize();else if(i[4].setComponents(c-l,p-d,g-m,w-M).normalize(),e===yn)i[5].setComponents(c+l,p+d,g+m,w+M).normalize();else if(e===ns)i[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);let e=gv.distanceTo(t.center);return Rs.radius=.7071067811865476+e,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(kc.x=i.normal.x>0?t.max.x:t.min.x,kc.y=i.normal.y>0?t.max.y:t.min.y,kc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(kc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fm=new Yt,Zr=class s{constructor(){this.coordinateSystem=yn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Fm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new ai),n[i].setFromProjectionMatrix(Fm,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new ai),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};sf=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}},_n=new Yt,vv=new ht(1,1,1),yv=new ai,Mv=new Zr,Gc=new Ue,Ps=new Ie,Vd=new L,Om=new L,Bm=new L,Sv=new L,Wd=new sf,nn=new fe,Hc=[];va=class extends fe{constructor(t,e,n=e*2,i){super(new Zt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(t),this._mergedDrawStarts=new Int32Array(t),this._mergedDrawInstanceCounts=new Int32Array(t),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new un(e,t,t,dn,rn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new un(e,t,t,bo,mn);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new un(e,t,t,dn,rn);n.colorSpace=le.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in t.attributes){let o=t.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),u=new se(h,l,c);e.setAttribute(r,u)}if(t.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new se(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(t){let e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){let e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ue);let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,_n),this.getBoundingBoxAt(r,Gc).applyMatrix4(_n),t.union(Gc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ie);let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,_n),this.getBoundingSphereAt(r,Ps).applyMatrix4(_n),t.union(Ps)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Hd),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;_n.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(vv.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let o=t.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Hd),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(i&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(let h in n.attributes){let u=e.getAttribute(h),d=n.getAttribute(h);bv(u,d,l);let p=u.itemSize;for(let f=u.count,x=c;f<x;f++){let m=l+f;for(let g=0;g<p;g++)d.setComponent(m,g,0)}d.needsUpdate=!0,d.addUpdateRange(l*p,c*p)}if(i){let h=a.indexStart,u=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let d=0;d<o.count;d++)r.setX(h+d,l+o.getX(d));for(let d=o.count,p=u;d<p;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0,n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let l=i[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,p=r.index,f=p.array,x=t-u;for(let m=h;m<h+d;m++)f[m]=f[m]+x;p.array.copyWithin(e,h,h+d),p.addUpdateRange(e,d),p.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){let{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(let p in d){let f=d[p],{array:x,itemSize:m}=f;x.copyWithin(t*m,h*m,(h+u)*m),f.addUpdateRange(t*m,u*m),f.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){let r=new Ue,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint(Vd.fromBufferAttribute(a,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){let r=new Ie;this.getBoundingBoxAt(t,Gc),Gc.getCenter(r.center);let o=n.index,a=n.attributes.position,l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let u=c;o&&(u=o.getX(u)),Vd.fromBufferAttribute(a,u),l=Math.max(l,r.center.distanceToSquared(Vd))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);let n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);let n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){let e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Hd);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let i=new Int32Array(t),r=new Int32Array(t);ii(this._multiDrawCounts,i),ii(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r;let o=new Int32Array(t),a=new Int32Array(t),l=new Int32Array(t);ii(this._mergedDrawCounts,o),ii(this._mergedDrawStarts,a),ii(this._mergedDrawInstanceCounts,l),this._mergedDrawCounts=o,this._mergedDrawStarts=a,this._mergedDrawInstanceCounts=l,this._maxInstanceCount=t;let c=this._indirectTexture,h=this._matricesTexture,u=this._colorsTexture;c.dispose(),this._initIndirectTexture(),ii(c.image.data,this._indirectTexture.image.data),h.dispose(),this._initMatricesTexture(),ii(h.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),ii(u.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(t,e){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Zt,this._initializeGeometry(r));let o=this.geometry;r.index&&ii(r.index.array,o.index.array);for(let a in r.attributes)ii(r.attributes[a].array,o.attributes[a].array);this._visibilityChanged=!0}raycast(t,e){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;nn.material=this.material,nn.geometry.index=o.index,nn.geometry.attributes=o.attributes,nn.geometry.boundingBox===null&&(nn.geometry.boundingBox=new Ue),nn.geometry.boundingSphere===null&&(nn.geometry.boundingSphere=new Ie);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;let c=n[a].geometryIndex,h=i[c];nn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,nn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,nn.geometry.boundingBox),this.getBoundingSphereAt(c,nn.geometry.boundingSphere),nn.raycast(t,Hc);for(let u=0,d=Hc.length;u<d;u++){let p=Hc[u];p.object=this,p.batchId=a,e.push(p)}Hc.length=0}nn.material=null,nn.geometry.index=null,nn.geometry.attributes={},nn.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._mergedDrawCounts=t._mergedDrawCounts.slice(),this._mergedDrawStarts=t._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=t._mergedDrawInstanceCounts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),t._colorsTexture!==null?(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(t,e,n,i="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let r=e.getIndex(),o=r===null?1:r.array.BYTES_PER_ELEMENT,a=1;n.wireframe&&(a=2,o=e.attributes.position.count>65535?4:2);let l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._mergedDrawStarts,d=this._mergedDrawCounts,p=this._mergedDrawInstanceCounts,f=this._geometryInfo,x=this.perObjectFrustumCulled,m=this._indirectTexture,g=m.image.data,_=t.isArrayCamera?Mv:yv;x&&(t.isArrayCamera?_.setFromArrayCamera(t):(_n.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).multiply(this.matrixWorld),_.setFromProjectionMatrix(_n,t.coordinateSystem,t.reversedDepth)));let y=0,M=0;if(this.sortObjects){_n.copy(this.matrixWorld).invert(),Om.setFromMatrixPosition(t.matrixWorld).applyMatrix4(_n),Bm.set(0,0,-1).transformDirection(t.matrixWorld).transformDirection(_n);for(let v=0,S=l.length;v<S;v++)if(l[v].visible&&l[v].active){let R=l[v].geometryIndex;this.getMatrixAt(v,_n),this.getBoundingSphereAt(R,Ps).applyMatrix4(_n);let E=!1;if(x&&(E=!_.intersectsSphere(Ps)),!E){let I=f[R],N=Sv.subVectors(Ps.center,Om).dot(Bm);Wd.push(I.start,I.count,N,v)}}let w=Wd.list,T=this.customSort;T===null?w.sort(n.transparent?_v:xv):T.call(this,w,t);for(let v=0,S=w.length;v<S;v++){let R=w[v],E=R.start*o*a,I=R.count*a;i==="merged"?M>0&&u[M-1]===E&&d[M-1]===I?p[M-1]++:(u[M]=E,d[M]=I,p[M]=1,M++):(c[y]=E,h[y]=I),g[y]=R.index,y++}Wd.reset()}else for(let w=0,T=l.length;w<T;w++)if(l[w].visible&&l[w].active){let v=l[w].geometryIndex,S=!1;if(x&&(this.getMatrixAt(w,_n),this.getBoundingSphereAt(v,Ps).applyMatrix4(_n),S=!_.intersectsSphere(Ps)),!S){let R=f[v],E=R.start*o*a,I=R.count*a;i==="merged"?M>0&&u[M-1]===E&&d[M-1]===I?p[M-1]++:(u[M]=E,d[M]=I,p[M]=1,M++):(c[y]=E,h[y]=I),g[y]=w,y++}}m.needsUpdate=!0,this._multiDrawCount=y,this._mergedDrawCount=M,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeRender(t,e,n,i,r){t.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(n,i,r)}onBeforeShadow(t,e,n,i,r,o){t.isWebGPURenderer!==!0&&this._updateDrawParameters(i,r,o)}},Ze=class extends ke{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},vh=new L,yh=new L,zm=new Yt,Ko=new Fi,Vc=new Ie,Xd=new L,km=new L,Qn=class extends xe{constructor(t=new Zt,e=new Ze){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)vh.fromBufferAttribute(e,i-1),yh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=vh.distanceTo(yh);t.setAttribute("lineDistance",new Lt(n,1))}else Tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vc.copy(n.boundingSphere),Vc.applyMatrix4(i),Vc.radius+=r,t.ray.intersectsSphere(Vc)===!1)return;zm.copy(i).invert(),Ko.copy(t.ray).applyMatrix4(zm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let x=p,m=f-1;x<m;x+=c){let g=h.getX(x),_=h.getX(x+1),y=Wc(this,t,Ko,l,g,_,x);y&&e.push(y)}if(this.isLineLoop){let x=h.getX(f-1),m=h.getX(p),g=Wc(this,t,Ko,l,x,m,f-1);g&&e.push(g)}}else{let p=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let x=p,m=f-1;x<m;x+=c){let g=Wc(this,t,Ko,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=Wc(this,t,Ko,l,f-1,p,f-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Gm=new L,Hm=new L,Rn=class extends Qn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Gm.fromBufferAttribute(e,i),Hm.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gm.distanceTo(Hm);t.setAttribute("lineDistance",new Lt(n,1))}else Tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ya=class extends Qn{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},$r=class extends ke{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vm=new Yt,rf=new Fi,Xc=new Ie,qc=new L,Ma=class extends xe{constructor(t=new Zt,e=new $r){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xc.copy(n.boundingSphere),Xc.applyMatrix4(i),Xc.radius+=r,t.ray.intersectsSphere(Xc)===!1)return;Vm.copy(i).invert(),rf.copy(t.ray).applyMatrix4(Vm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let f=d,x=p;f<x;f++){let m=c.getX(f);qc.fromBufferAttribute(u,m),Wm(qc,m,l,i,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let f=d,x=p;f<x;f++)qc.fromBufferAttribute(u,f),Wm(qc,f,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Sa=class extends De{constructor(t,e,n,i,r=we,o=we,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},Mh=class extends Sa{constructor(t,e,n,i,r,o,a,l){super({},t,e,n,i,r,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}},Sh=class extends De{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Le,this.minFilter=Le,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new An(Object.assign({},t.image)),this}},Xs=class extends De{constructor(t=[],e,n,i,r,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},bh=class extends Xs{constructor(t,e,n,i,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=hn,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},wh=class extends Xs{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,di),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},rs=class extends De{constructor(t=[],e=di,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Th=class extends De{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ah=class extends De{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){let t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}},Bn=class extends De{constructor(t,e,n=mn,i,r,o,a=Le,l=Le,c,h=oi,u=1){if(h!==oi&&h!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new An(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Jr=class extends Bn{constructor(t,e=mn,n=di,i,r,o=Le,a=Le,l,c=oi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Kr=class extends De{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Sn=class s extends Zt{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;f("z","y","x",-1,-1,n,e,t,o,r,0),f("z","y","x",1,-1,n,e,-t,o,r,1),f("x","z","y",1,1,t,n,e,i,o,2),f("x","z","y",1,-1,t,n,-e,i,o,3),f("x","y","z",1,-1,t,e,n,i,r,4),f("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function f(x,m,g,_,y,M,w,T,v,S,R){let E=M/v,I=w/S,N=M/2,z=w/2,D=T/2,O=v+1,q=S+1,H=0,st=0,W=new L;for(let Z=0;Z<q;Z++){let nt=Z*I-z;for(let At=0;At<O;At++){let ot=At*E-N;W[x]=ot*_,W[m]=nt*y,W[g]=D,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[g]=T>0?1:-1,h.push(W.x,W.y,W.z),u.push(At/v),u.push(1-Z/S),H+=1}}for(let Z=0;Z<S;Z++)for(let nt=0;nt<v;nt++){let At=d+nt+O*Z,ot=d+nt+O*(Z+1),G=d+(nt+1)+O*(Z+1),lt=d+(nt+1)+O*Z;l.push(At,ot,lt),l.push(ot,G,lt),st+=6}a.addGroup(p,st,R),p+=st,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ba=class s extends Zt{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,p=2*u+d,f=n*2+r,x=i+1,m=new L,g=new L;for(let _=0;_<=f;_++){let y=0,M=0,w=0,T=0;if(_<=n){let R=_/n,E=R*Math.PI/2;M=-h-t*Math.cos(E),w=t*Math.sin(E),T=-t*Math.cos(E),y=R*u}else if(_<=n+r){let R=(_-n)/r;M=-h+R*e,w=t,T=0,y=u+R*d}else{let R=(_-n-r)/n,E=R*Math.PI/2;M=h+t*Math.sin(E),w=t*Math.cos(E),T=t*Math.sin(E),y=u+d+R*u}let v=Math.max(0,Math.min(1,y/p)),S=0;_===0?S=.5/i:_===f&&(S=-.5/i);for(let R=0;R<=i;R++){let E=R/i,I=E*Math.PI*2,N=Math.sin(I),z=Math.cos(I);g.x=-w*z,g.y=M,g.z=w*N,a.push(g.x,g.y,g.z),m.set(-w*z,T,w*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(E+S,v)}if(_>0){let R=(_-1)*x;for(let E=0;E<i;E++){let I=R+E,N=R+E+1,z=_*x+E,D=_*x+E+1;o.push(I,N,z),o.push(N,D,z)}}}this.setIndex(o),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},wa=class s extends Zt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new L,h=new et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(a,3)),this.setAttribute("uv",new Lt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},jn=class s extends Zt{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],f=0,x=[],m=n/2,g=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(p,2));function _(){let M=new L,w=new L,T=0,v=(e-t)/n;for(let S=0;S<=r;S++){let R=[],E=S/r,I=E*(e-t)+t;for(let N=0;N<=i;N++){let z=N/i,D=z*l+a,O=Math.sin(D),q=Math.cos(D);w.x=I*O,w.y=-E*n+m,w.z=I*q,u.push(w.x,w.y,w.z),M.set(O,v,q).normalize(),d.push(M.x,M.y,M.z),p.push(z,1-E),R.push(f++)}x.push(R)}for(let S=0;S<i;S++)for(let R=0;R<r;R++){let E=x[R][S],I=x[R+1][S],N=x[R+1][S+1],z=x[R][S+1];(t>0||R!==0)&&(h.push(E,I,z),T+=3),(e>0||R!==r-1)&&(h.push(I,N,z),T+=3)}c.addGroup(g,T,0),g+=T}function y(M){let w=f,T=new et,v=new L,S=0,R=M===!0?t:e,E=M===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),f++;let I=f;for(let N=0;N<=i;N++){let D=N/i*l+a,O=Math.cos(D),q=Math.sin(D);v.x=R*q,v.y=m*E,v.z=R*O,u.push(v.x,v.y,v.z),d.push(0,E,0),T.x=O*.5+.5,T.y=q*.5*E+.5,p.push(T.x,T.y),f++}for(let N=0;N<i;N++){let z=w+N,D=I+N;M===!0?h.push(D,D+1,z):h.push(D+1,D,z),S+=3}c.addGroup(g,S,M===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qr=class s extends jn{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oi=class s extends Zt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(r.slice(),3)),this.setAttribute("uv",new Lt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new L,M=new L,w=new L;for(let T=0;T<e.length;T+=3)p(e[T+0],y),p(e[T+1],M),p(e[T+2],w),l(y,M,w,_)}function l(_,y,M,w){let T=w+1,v=[];for(let S=0;S<=T;S++){v[S]=[];let R=_.clone().lerp(M,S/T),E=y.clone().lerp(M,S/T),I=T-S;for(let N=0;N<=I;N++)N===0&&S===T?v[S][N]=R:v[S][N]=R.clone().lerp(E,N/I)}for(let S=0;S<T;S++)for(let R=0;R<2*(T-S)-1;R++){let E=Math.floor(R/2);R%2===0?(d(v[S][E+1]),d(v[S+1][E]),d(v[S][E])):(d(v[S][E+1]),d(v[S+1][E+1]),d(v[S+1][E]))}}function c(_){let y=new L;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(_),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let _=new L;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let M=m(_)/2/Math.PI+.5,w=g(_)/Math.PI+.5;o.push(M,1-w)}f(),u()}function u(){for(let _=0;_<o.length;_+=6){let y=o[_+0],M=o[_+2],w=o[_+4],T=Math.max(y,M,w),v=Math.min(y,M,w);T>.9&&v<.1&&(y<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),w<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function p(_,y){let M=_*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function f(){let _=new L,y=new L,M=new L,w=new L,T=new et,v=new et,S=new et;for(let R=0,E=0;R<r.length;R+=9,E+=6){_.set(r[R+0],r[R+1],r[R+2]),y.set(r[R+3],r[R+4],r[R+5]),M.set(r[R+6],r[R+7],r[R+8]),T.set(o[E+0],o[E+1]),v.set(o[E+2],o[E+3]),S.set(o[E+4],o[E+5]),w.copy(_).add(y).add(M).divideScalar(3);let I=m(w);x(T,E+0,_,I),x(v,E+2,y,I),x(S,E+4,M,I)}}function x(_,y,M,w){w<0&&_.x===1&&(o[y]=_.x-1),M.x===0&&M.z===0&&(o[y]=w/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}},Ta=class s extends Oi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Yc=new L,Zc=new L,qd=new L,$c=new $n,Aa=class extends Zt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(Bs*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d=new Map,p=[];for(let f=0;f<l;f+=3){o?(c[0]=o.getX(f),c[1]=o.getX(f+1),c[2]=o.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:x,b:m,c:g}=$c;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),$c.getNormal(qd),u[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let _=0;_<3;_++){let y=(_+1)%3,M=u[_],w=u[y],T=$c[h[_]],v=$c[h[y]],S=`${M}_${w}`,R=`${w}_${M}`,E=d.get(R);E?(qd.dot(E.normal)<=r&&(p.push(T.x,T.y,T.z),p.push(v.x,v.y,v.z)),d.set(R,null)):d.has(S)||d.set(S,{index0:c[_],index1:c[y],normal:qd.clone()})}}for(let f of d.values())if(f){let{index0:x,index1:m}=f;Yc.fromBufferAttribute(a,x),Zc.fromBufferAttribute(a,m),p.push(Yc.x,Yc.y,Yc.z),p.push(Zc.x,Zc.y,Zc.z)}this.setAttribute("position",new Lt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Tt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new et:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,i=[],r=[],o=[],a=new L,l=new Yt;for(let p=0;p<=t;p++){let f=p/t;i[p]=this.getTangentAt(f,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos($t(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos($t(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let f=1;f<=t;f++)r[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),o[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},qs=class extends bn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new et){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ea=class extends qs{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Xm=new L,qm=new L,Yd=new rp,Zd=new rp,$d=new rp,Ca=class extends bn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(qm.subVectors(i[0],i[1]).add(i[0]),c=qm);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Xm.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Xm),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),f<1e-4&&(f=x),m<1e-4&&(m=x),Yd.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,f,x,m),Zd.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,f,x,m),$d.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,f,x,m)}else this.curveType==="catmullrom"&&(Yd.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Zd.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),$d.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Yd.calc(l),Zd.calc(l),$d.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};jr=class extends bn{constructor(t=new et,e=new et,n=new et,i=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new et){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(sa(t,i.x,r.x,o.x,a.x),sa(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ra=class extends bn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(sa(t,i.x,r.x,o.x,a.x),sa(t,i.y,r.y,o.y,a.y),sa(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},to=class extends bn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pa=class extends bn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},eo=class extends bn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ia(t,i.x,r.x,o.x),ia(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends bn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ia(t,i.x,r.x,o.x),ia(t,i.y,r.y,o.y),ia(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},io=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Ym(a,l.x,c.x,h.x,u.x),Ym(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new et().fromArray(i))}return this}},Eh=Object.freeze({__proto__:null,ArcCurve:Ea,CatmullRomCurve3:Ca,CubicBezierCurve:jr,CubicBezierCurve3:Ra,EllipseCurve:qs,LineCurve:to,LineCurve3:Pa,QuadraticBezierCurve:eo,QuadraticBezierCurve3:no,SplineCurve:io}),Ia=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Eh[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},os=class extends Ia{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new to(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new eo(this.currentPoint.clone(),new et(t,e),new et(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new jr(this.currentPoint.clone(),new et(t,e),new et(n,i),new et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new io(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new qs(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},as=class extends os{constructor(t){super(t),this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new os().fromJSON(i))}return this}};lf=class{static triangulate(t,e,n=2){return Iv(t,e,n)}},Un=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];$m(t),Jm(n,t);let o=t.length;e.forEach($m);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Jm(n,e[l]);let a=lf.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Ua=class s extends Zt{constructor(t=new as([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Lt(i,3)),this.setAttribute("uv",new Lt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,f=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Zv,y,M=!1,w,T,v,S;if(g){y=g.getSpacedPoints(h),M=!0,d=!1;let it=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(h,it),T=new L,v=new L,S=new L}d||(m=0,p=0,f=0,x=0);let R=a.extractPoints(c),E=R.shape,I=R.holes;if(!Un.isClockWise(E)){E=E.reverse();for(let it=0,gt=I.length;it<gt;it++){let ft=I[it];Un.isClockWise(ft)&&(I[it]=ft.reverse())}}function z(it){let ft=10000000000000001e-36,Nt=it[0];for(let pt=1;pt<=it.length;pt++){let Qt=pt%it.length,Bt=it[Qt],oe=Bt.x-Nt.x,ee=Bt.y-Nt.y,k=oe*oe+ee*ee,P=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(Nt.x),Math.abs(Nt.y)),$=ft*P*P;if(k<=$){it.splice(Qt,1),pt--;continue}Nt=Bt}}z(E),I.forEach(z);let D=I.length,O=E;for(let it=0;it<D;it++){let gt=I[it];E=E.concat(gt)}function q(it,gt,ft){return gt||Gt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(gt,ft)}let H=E.length;function st(it,gt,ft){let Nt,pt,Qt,Bt=it.x-gt.x,oe=it.y-gt.y,ee=ft.x-it.x,k=ft.y-it.y,P=Bt*Bt+oe*oe,$=Bt*k-oe*ee;if(Math.abs($)>Number.EPSILON){let ct=Math.sqrt(P),Vt=Math.sqrt(ee*ee+k*k),rt=gt.x-oe/ct,qt=gt.y+Bt/ct,Ct=ft.x-k/Vt,Dt=ft.y+ee/Vt,C=((Ct-rt)*k-(Dt-qt)*ee)/(Bt*k-oe*ee);Nt=rt+Bt*C-it.x,pt=qt+oe*C-it.y;let b=Nt*Nt+pt*pt;if(b<=2)return new et(Nt,pt);Qt=Math.sqrt(b/2)}else{let ct=!1;Bt>Number.EPSILON?ee>Number.EPSILON&&(ct=!0):Bt<-Number.EPSILON?ee<-Number.EPSILON&&(ct=!0):Math.sign(oe)===Math.sign(k)&&(ct=!0),ct?(Nt=-oe,pt=Bt,Qt=Math.sqrt(P)):(Nt=Bt,pt=oe,Qt=Math.sqrt(P/2))}return new et(Nt/Qt,pt/Qt)}let W=[];for(let it=0,gt=O.length,ft=gt-1,Nt=it+1;it<gt;it++,ft++,Nt++)ft===gt&&(ft=0),Nt===gt&&(Nt=0),W[it]=st(O[it],O[ft],O[Nt]);let Z=[],nt,At=W.concat();for(let it=0,gt=D;it<gt;it++){let ft=I[it];nt=[];for(let Nt=0,pt=ft.length,Qt=pt-1,Bt=Nt+1;Nt<pt;Nt++,Qt++,Bt++)Qt===pt&&(Qt=0),Bt===pt&&(Bt=0),nt[Nt]=st(ft[Nt],ft[Qt],ft[Bt]);Z.push(nt),At=At.concat(nt)}let ot;if(m===0)ot=Un.triangulateShape(O,I);else{let it=[],gt=[];for(let ft=0;ft<m;ft++){let Nt=ft/m,pt=p*Math.cos(Nt*Math.PI/2),Qt=f*Math.sin(Nt*Math.PI/2)+x;for(let Bt=0,oe=O.length;Bt<oe;Bt++){let ee=q(O[Bt],W[Bt],Qt);Ht(ee.x,ee.y,-pt),Nt===0&&it.push(ee)}for(let Bt=0,oe=D;Bt<oe;Bt++){let ee=I[Bt];nt=Z[Bt];let k=[];for(let P=0,$=ee.length;P<$;P++){let ct=q(ee[P],nt[P],Qt);Ht(ct.x,ct.y,-pt),Nt===0&&k.push(ct)}Nt===0&&gt.push(k)}}ot=Un.triangulateShape(it,gt)}let G=ot.length,lt=f+x;for(let it=0;it<H;it++){let gt=d?q(E[it],At[it],lt):E[it];M?(v.copy(w.normals[0]).multiplyScalar(gt.x),T.copy(w.binormals[0]).multiplyScalar(gt.y),S.copy(y[0]).add(v).add(T),Ht(S.x,S.y,S.z)):Ht(gt.x,gt.y,0)}for(let it=1;it<=h;it++)for(let gt=0;gt<H;gt++){let ft=d?q(E[gt],At[gt],lt):E[gt];M?(v.copy(w.normals[it]).multiplyScalar(ft.x),T.copy(w.binormals[it]).multiplyScalar(ft.y),S.copy(y[it]).add(v).add(T),Ht(S.x,S.y,S.z)):Ht(ft.x,ft.y,u/h*it)}for(let it=m-1;it>=0;it--){let gt=it/m,ft=p*Math.cos(gt*Math.PI/2),Nt=f*Math.sin(gt*Math.PI/2)+x;for(let pt=0,Qt=O.length;pt<Qt;pt++){let Bt=q(O[pt],W[pt],Nt);Ht(Bt.x,Bt.y,u+ft)}for(let pt=0,Qt=I.length;pt<Qt;pt++){let Bt=I[pt];nt=Z[pt];for(let oe=0,ee=Bt.length;oe<ee;oe++){let k=q(Bt[oe],nt[oe],Nt);M?Ht(k.x,k.y+y[h-1].y,y[h-1].x+ft):Ht(k.x,k.y,u+ft)}}}vt(),kt();function vt(){let it=i.length/3;if(d){let gt=0,ft=H*gt;for(let Nt=0;Nt<G;Nt++){let pt=ot[Nt];ye(pt[2]+ft,pt[1]+ft,pt[0]+ft)}gt=h+m*2,ft=H*gt;for(let Nt=0;Nt<G;Nt++){let pt=ot[Nt];ye(pt[0]+ft,pt[1]+ft,pt[2]+ft)}}else{for(let gt=0;gt<G;gt++){let ft=ot[gt];ye(ft[2],ft[1],ft[0])}for(let gt=0;gt<G;gt++){let ft=ot[gt];ye(ft[0]+H*h,ft[1]+H*h,ft[2]+H*h)}}n.addGroup(it,i.length/3-it,0)}function kt(){let it=i.length/3,gt=0;wt(O,gt),gt+=O.length;for(let ft=0,Nt=I.length;ft<Nt;ft++){let pt=I[ft];wt(pt,gt),gt+=pt.length}n.addGroup(it,i.length/3-it,1)}function wt(it,gt){let ft=it.length;for(;--ft>=0;){let Nt=ft,pt=ft-1;pt<0&&(pt=it.length-1);for(let Qt=0,Bt=h+m*2;Qt<Bt;Qt++){let oe=H*Qt,ee=H*(Qt+1),k=gt+Nt+oe,P=gt+pt+oe,$=gt+pt+ee,ct=gt+Nt+ee;Pt(k,P,$,ct)}}}function Ht(it,gt,ft){l.push(it),l.push(gt),l.push(ft)}function ye(it,gt,ft){ne(it),ne(gt),ne(ft);let Nt=i.length/3,pt=_.generateTopUV(n,i,Nt-3,Nt-2,Nt-1);ce(pt[0]),ce(pt[1]),ce(pt[2])}function Pt(it,gt,ft,Nt){ne(it),ne(gt),ne(Nt),ne(gt),ne(ft),ne(Nt);let pt=i.length/3,Qt=_.generateSideWallUV(n,i,pt-6,pt-3,pt-2,pt-1);ce(Qt[0]),ce(Qt[1]),ce(Qt[3]),ce(Qt[1]),ce(Qt[2]),ce(Qt[3])}function ne(it){i.push(l[it*3+0]),i.push(l[it*3+1]),i.push(l[it*3+2])}function ce(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $v(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Eh[i.type]().fromJSON(i)),new s(n,t.options)}},Zv={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new et(r,o),new et(a,l),new et(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],p=t[i*3+1],f=t[i*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new et(o,1-l),new et(c,1-u),new et(d,1-f),new et(x,1-g)]:[new et(a,1-l),new et(h,1-u),new et(p,1-f),new et(m,1-g)]}};Zs=class s extends Oi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Fa=class s extends Zt{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=$t(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new L,d=new et,p=new L,f=new L,x=new L,m=0,g=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,p.x=g*1,p.y=-m,p.z=g*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,p.x=g*1,p.y=-m,p.z=g*0,f.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(f)}for(let _=0;_<=e;_++){let y=n+_*h*i,M=Math.sin(y),w=Math.cos(y);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*M,u.y=t[T].y,u.z=t[T].x*w,o.push(u.x,u.y,u.z),d.x=_/e,d.y=T/(t.length-1),a.push(d.x,d.y);let v=l[3*T+0]*M,S=l[3*T+1],R=l[3*T+0]*w;c.push(v,S,R)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let M=y+_*t.length,w=M,T=M+t.length,v=M+t.length+1,S=M+1;r.push(w,T,S),r.push(v,S,T)}this.setIndex(r),this.setAttribute("position",new Lt(o,3)),this.setAttribute("uv",new Lt(a,2)),this.setAttribute("normal",new Lt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},ro=class s extends Oi{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},zn=class s extends Zt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],f=[],x=[],m=[];for(let g=0;g<h;g++){let _=g*d-o;for(let y=0;y<c;y++){let M=y*u-r;f.push(M,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let y=_+c*g,M=_+c*(g+1),w=_+1+c*(g+1),T=_+1+c*g;p.push(y,M,T),p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new Lt(f,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Oa=class s extends Zt{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/i,p=new L,f=new et;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let g=r+m/n*o;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/e+1)/2,f.y=(p.y/e+1)/2,h.push(f.x,f.y)}u+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let g=0;g<n;g++){let _=g+m,y=_,M=_+n+1,w=_+n+2,T=_+1;a.push(y,M,T),a.push(M,w,T)}}this.setIndex(a),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ba=class s extends Zt{constructor(t=new as([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Lt(i,3)),this.setAttribute("normal",new Lt(r,3)),this.setAttribute("uv",new Lt(o,2));function c(h){let u=i.length/3,d=h.extractPoints(e),p=d.shape,f=d.holes;Un.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let _=f[m];Un.isClockWise(_)===!0&&(f[m]=_.reverse())}let x=Un.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let _=f[m];p=p.concat(_)}for(let m=0,g=p.length;m<g;m++){let _=p[m];i.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,g=x.length;m<g;m++){let _=x[m],y=_[0]+u,M=_[1]+u,w=_[2]+u;n.push(y,M,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Jv(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};oo=class s extends Zt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,d=new L,p=[],f=[],x=[],m=[];for(let g=0;g<=n;g++){let _=[],y=g/n,M=o+y*a,w=t*Math.cos(M),T=Math.sqrt(t*t-w*w),v=0;g===0&&o===0?v=.5/e:g===n&&l===Math.PI&&(v=-.5/e);for(let S=0;S<=e;S++){let R=S/e,E=i+R*r;u.x=-T*Math.cos(E),u.y=w,u.z=T*Math.sin(E),f.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(R+v,1-y),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){let y=h[g][_+1],M=h[g][_],w=h[g+1][_],T=h[g+1][_+1];(g!==0||o>0)&&p.push(y,M,T),(g!==n-1||l<Math.PI)&&p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new Lt(f,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},za=class s extends Oi{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},ka=class s extends Zt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new L,p=new L,f=new L;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=i;g++){let _=g/i*r;p.x=(t+e*Math.cos(m))*Math.cos(_),p.y=(t+e*Math.cos(m))*Math.sin(_),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),f.subVectors(p,d).normalize(),h.push(f.x,f.y,f.z),u.push(g/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){let g=(i+1)*x+m-1,_=(i+1)*(x-1)+m-1,y=(i+1)*(x-1)+m,M=(i+1)*x+m;l.push(g,_,M),l.push(_,y,M)}this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Ga=class s extends Zt{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],u=new L,d=new L,p=new L,f=new L,x=new L,m=new L,g=new L;for(let y=0;y<=n;++y){let M=y/n*r*Math.PI*2;_(M,r,o,t,p),_(M+.01,r,o,t,f),m.subVectors(f,p),g.addVectors(f,p),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let w=0;w<=i;++w){let T=w/i*Math.PI*2,v=-e*Math.cos(T),S=e*Math.sin(T);u.x=p.x+(v*g.x+S*x.x),u.y=p.y+(v*g.y+S*x.y),u.z=p.z+(v*g.z+S*x.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(y/n),h.push(w/i)}}for(let y=1;y<=n;y++)for(let M=1;M<=i;M++){let w=(i+1)*(y-1)+(M-1),T=(i+1)*y+(M-1),v=(i+1)*y+M,S=(i+1)*(y-1)+M;a.push(w,T,S),a.push(T,v,S)}this.setIndex(a),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(h,2));function _(y,M,w,T,v){let S=Math.cos(y),R=Math.sin(y),E=w/M*y,I=Math.cos(E);v.x=T*(2+I)*.5*S,v.y=T*(2+I)*R*.5,v.z=T*Math.sin(E)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Ha=class s extends Zt{constructor(t=new no(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new et,h=new L,u=[],d=[],p=[],f=[];x(),this.setIndex(f),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(p,2));function x(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),_(),g()}function m(y){h=t.getPointAt(y/e,h);let M=o.normals[y],w=o.binormals[y];for(let T=0;T<=i;T++){let v=T/i*Math.PI*2,S=Math.sin(v),R=-Math.cos(v);l.x=R*M.x+S*w.x,l.y=R*M.y+S*w.y,l.z=R*M.z+S*w.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let y=1;y<=e;y++)for(let M=1;M<=i;M++){let w=(i+1)*(y-1)+(M-1),T=(i+1)*y+(M-1),v=(i+1)*y+M,S=(i+1)*(y-1)+M;f.push(w,T,S),f.push(T,v,S)}}function _(){for(let y=0;y<=e;y++)for(let M=0;M<=i;M++)c.x=y/e,c.y=M/i,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Eh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Va=class extends Zt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new L,r=new L;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,p=u.count;for(let f=d,x=d+p;f<x;f+=3)for(let m=0;m<3;m++){let g=a.getX(f+m),_=a.getX(f+(m+1)%3);i.fromBufferAttribute(o,g),r.fromBufferAttribute(o,_),Km(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Km(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Lt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};Qm=Object.freeze({__proto__:null,BoxGeometry:Sn,CapsuleGeometry:ba,CircleGeometry:wa,ConeGeometry:Qr,CylinderGeometry:jn,DodecahedronGeometry:Ta,EdgesGeometry:Aa,ExtrudeGeometry:Ua,IcosahedronGeometry:Zs,LatheGeometry:Fa,OctahedronGeometry:ro,PlaneGeometry:zn,PolyhedronGeometry:Oi,RingGeometry:Oa,ShapeGeometry:Ba,SphereGeometry:oo,TetrahedronGeometry:za,TorusGeometry:ka,TorusKnotGeometry:Ga,TubeGeometry:Ha,WireframeGeometry:Va}),Wa=class extends ke{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ht(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};gi={clone:rr,merge:an},Qv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ge=class extends ke{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qv,this.fragmentShader=jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=Kv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ht().setHex(i.value);break;case"v2":this.uniforms[n].value=new et().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new de().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Yt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ls=class extends Ge{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Fe=class extends ke{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pi,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xa=class extends Fe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return ri('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){ri('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},qa=class extends ke{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ht(16777215),this.specular=new ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pi,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=_o,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ya=class extends ke{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ht(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pi,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Za=class extends ke{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pi,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},$a=class extends ke{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pi,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=_o,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ao=class extends ke{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},lo=class extends ke{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ja=class extends ke{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ht(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pi,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ka=class extends Ze{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};Ch=class{static convertArray(t,e){return Zn(t,e)}static isTypedArray(t){return fg(t)}static hasTangents(t){return Dr(t)}static getKeyframeOrder(t){return Tg(t)}static sortedArray(t,e,n){return cf(t,e,n)}static flattenJSON(t,e,n,i){Ag(t,e,n,i)}static subclip(t,e,n,i,r=30){return ty(t,e,n,i,r)}static makeClipAdditive(t,e=0,n=t,i=30){return ey(t,e,n,i)}},Bi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qa=class extends Bi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ts,endingEnd:ts}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case es:r=t,a=2*e-n;break;case Br:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case es:o=t,l=2*n-e;break;case Br:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-e)/(i-e),x=f*f,m=x*f,g=-d*m+2*d*x-d*f,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*f+1,y=(-1-p)*m+(1.5+p)*x+.5*f,M=p*m-p*x;for(let w=0;w!==a;++w)r[w]=g*o[h+w]+_*o[c+w]+y*o[l+w]+M*o[u+w];return r}},co=class extends Bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},ja=class extends Bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},tl=class extends Bi{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let f=(n-e)/(i-e),x=1-f;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*f;return r}let d=a*2,p=t-1;for(let f=0;f!==a;++f){let x=o[c+f],m=o[l+f],g=p*d+f*2,_=u[g],y=u[g+1],M=t*d+f*2,w=h[M],T=h[M+1],v=iy(n,e,_,w,i);r[f]=Eg(v,x,y,T,m)}return r}};fn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zn(e,this.TimeBufferType),this.values=Zn(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zn(t.times,Array),values:Zn(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Dr(t.settings)&&(n.settings={inTangents:Zn(t.settings.inTangents,Array),outTangents:Zn(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new tl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Or:e=this.InterpolantFactoryMethodDiscrete;break;case da:e=this.InterpolantFactoryMethodLinear;break;case ta:e=this.InterpolantFactoryMethodSmooth;break;case lh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Tt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return da;case this.InterpolantFactoryMethodSmooth:return ta;case this.InterpolantFactoryMethodBezier:return lh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Dr(this.settings)&&(t0(this.settings.inTangents,t),t0(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Dr(this.settings)&&(e0(this.settings.inTangents,t),e0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Gt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&fg(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ta,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let f=0;f!==n;++f){let x=e[u+f];if(x!==e[d+f]||x!==e[p+f]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Dr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=da;li=class extends fn{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Or;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;ho=class extends fn{constructor(t,e,n,i){super(t,e,n,i)}};ho.prototype.ValueTypeName="color";$s=class extends fn{constructor(t,e,n,i){super(t,e,n,i)}};$s.prototype.ValueTypeName="number";el=class extends Bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Re.slerpFlat(r,0,o,c-a,o,c,l);return r}},Js=class extends fn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new el(this.times,this.values,this.getValueSize(),t)}};Js.prototype.ValueTypeName="quaternion";Js.prototype.InterpolantFactoryMethodSmooth=void 0;ci=class extends fn{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="string";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Or;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;uo=class extends fn{constructor(t,e,n,i){super(t,e,n,i)}};uo.prototype.ValueTypeName="vector";cs=class{constructor(t="",e=-1,n=[],i=Ql){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Hn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(ry(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(fn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Tg(l);l=cf(l,1,h),c=cf(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new $s(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};Jn={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(n0(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!n0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};fo=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ap=new fo,Ke=class{constructor(t){this.manager=t!==void 0?t:ap,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ke.DEFAULT_MATERIAL_NAME="__DEFAULT";Pi={},hf=class extends Error{constructor(t,e){super(t),this.response=e}},kn=class extends Ke{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Jn.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Pi[t]!==void 0){Pi[t].push({onLoad:e,onProgress:n,onError:i});return}Pi[t]=[],Pi[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Tt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Pi[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0,x=0,m=new ReadableStream({start(g){_();function _(){u.read().then(({done:y,value:M})=>{if(y)g.close();else{x+=M.byteLength;let w=new ProgressEvent("progress",{lengthComputable:f,loaded:x,total:p});for(let T=0,v=h.length;T<v;T++){let S=h[T];S.onProgress&&S.onProgress(w)}g.enqueue(M),_()}},y=>{g.error(y)})}}});return new Response(m)}else throw new hf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(f=>p.decode(f))}}}).then(c=>{Jn.add(`file:${t}`,c);let h=Pi[t];delete Pi[t];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Pi[t];if(h===void 0)throw this.manager.itemError(t),c;delete Pi[t];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Rh=class extends Ke{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new kn(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Gt(l),r.manager.itemError(t)}},n,i)}parse(t){let e=[];for(let n=0;n<t.length;n++){let i=cs.parse(t[n]);e.push(i)}return e}},Ph=class extends Ke{constructor(t){super(t)}load(t,e,n,i){let r=this,o=[],a=new Xs,l=new kn(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(t[u],function(d){let p=r.parse(d,!0);o[u]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},c+=1,c===6&&(p.mipmapCount===1&&(a.minFilter=we),a.image=o,a.format=p.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let u=0,d=t.length;u<d;++u)h(u);else l.load(t,function(u){let d=r.parse(u,!0);if(d.isCubemap){let p=d.mipmaps.length/d.mipmapCount;for(let f=0;f<p;f++){o[f]={mipmaps:[]};for(let x=0;x<d.mipmapCount;x++)o[f].mipmaps.push(d.mipmaps[f*d.mipmapCount+x]),o[f].format=d.format,o[f].width=d.width,o[f].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=we),a.format=d.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}},Er=new WeakMap,hs=class extends Ke{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Jn.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=Er.get(o);u===void 0&&(u=[],Er.set(o,u)),u.push({onLoad:e,onError:i})}return o}let a=Gr("img");function l(){h(),e&&e(this);let u=Er.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Er.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),Jn.remove(`image:${t}`);let d=Er.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(u)}Er.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Jn.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}},Ih=class extends Ke{constructor(t){super(t)}load(t,e,n,i){let r=new rs;r.colorSpace=Je;let o=new hs(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}},Lh=class extends Ke{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new un,a=new kn(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):Gt(h);return}r._applyTexData(o,c),e&&e(o,c)},n,i),o}createDataTexture(t){let e=new un;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:hn,t.wrapT=e.wrapT!==void 0?e.wrapT:hn,t.magFilter=e.magFilter!==void 0?e.magFilter:we,t.minFilter=e.minFilter!==void 0?e.minFilter:we,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=Gn),e.mipmapCount===1&&(t.minFilter=we),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}},Dh=class extends Ke{constructor(t){super(t)}load(t,e,n,i){let r=new De,o=new hs(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},ti=class extends xe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},zi=class extends ti{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Jd=new Yt,i0=new L,s0=new L,Ks=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ai,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;i0.setFromMatrixPosition(t.matrixWorld),e.position.copy(i0),s0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(s0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Jd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Jd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===ns||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Jd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Qc=new L,jc=new Re,si=new L,Qs=class extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qc,jc,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,jc,si.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Qc,jc,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,jc,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qi=new L,r0=new et,o0=new et,Ee=class extends Qs{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z)}getViewSize(t,e){return this.getViewBounds(t,r0,o0),e.subVectors(o0,r0)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},uf=class extends Ks{constructor(){super(new Ee(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=ks*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},nl=class extends ti{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new uf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},df=class extends Ks{constructor(){super(new Ee(90,1,.5,500)),this.isPointLightShadow=!0}},il=class extends ti{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new df}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ki=class extends Qs{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ff=class extends Ks{constructor(){super(new ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gi=class extends ti{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new ff}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},sl=class extends ti{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},rl=class extends ti{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}},po=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new L)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){let n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}},ol=class extends ti{constructor(t=new po,e=1){super(void 0,e),this.isLightProbe=!0,this.type="LightProbe",this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}},a0={},al=class s extends Ke{constructor(t){super(t),this.textures={}}load(t,e,n,i){let r=this,o=new kn(r.manager);o.setPriority(r.priority),o.setCache(r.cache),o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Gt(l),r.manager.itemError(t)}},n,i)}parse(t){let e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return s.createMaterialFromType(t)}static createMaterialFromType(t){let n={ShadowMaterial:Wa,SpriteMaterial:qr,RawShaderMaterial:ls,ShaderMaterial:Ge,PointsMaterial:$r,MeshPhysicalMaterial:Xa,MeshStandardMaterial:Fe,MeshPhongMaterial:qa,MeshToonMaterial:Ya,MeshNormalMaterial:Za,MeshLambertMaterial:$a,MeshDepthMaterial:ao,MeshDistanceMaterial:lo,MeshBasicMaterial:On,MeshMatcapMaterial:Ja,LineDashedMaterial:Ka,LineBasicMaterial:Ze,Material:ke,...a0}[t],i;return n===void 0?(ri(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),i=new ke):i=new n,i}static registerMaterial(t,e){a0[t]=e}},mo=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},ll=class extends Zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}},cl=class extends Ke{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new kn(r.manager);o.setPriority(r.priority),o.setCache(r.cache),o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Gt(l),r.manager.itemError(t)}},n,i)}parse(t){let e={},n={};function i(p,f){if(e[f]!==void 0)return e[f];let m=p.interleavedBuffers[f],g=r(p,m.buffer),_=Lr(m.type,g),y=new ss(_,m.stride);return y.uuid=m.uuid,m.usage!==void 0&&y.setUsage(m.usage),e[f]=y,y}function r(p,f){if(n[f]!==void 0)return n[f];let m=p.arrayBuffers[f],g=new Uint32Array(m).buffer;return n[f]=g,g}let o=t.isInstancedBufferGeometry?new ll:new Zt,a=t.data.index;if(a!==void 0){let p=Lr(a.type,a.array);o.setIndex(new se(p,1))}let l=t.data.attributes;for(let p in l){let f=l[p],x;if(f.isInterleavedBufferAttribute){let m=i(t.data,f.data);x=new Ui(m,f.itemSize,f.offset,f.normalized)}else{let m=Lr(f.type,f.array),g=f.isInstancedBufferAttribute?Cn:se;x=new g(m,f.itemSize,f.normalized)}f.name!==void 0&&(x.name=f.name),f.usage!==void 0&&x.setUsage(f.usage),f.gpuType!==void 0&&(x.gpuType=f.gpuType),o.setAttribute(p,x)}let c=t.data.morphAttributes;if(c)for(let p in c){let f=c[p],x=[];for(let m=0,g=f.length;m<g;m++){let _=f[m],y;if(_.isInterleavedBufferAttribute){let M=i(t.data,_.data);y=new Ui(M,_.itemSize,_.offset,_.normalized)}else{let M=Lr(_.type,_.array);y=new se(M,_.itemSize,_.normalized)}_.name!==void 0&&(y.name=_.name),_.usage!==void 0&&y.setUsage(_.usage),_.gpuType!==void 0&&(y.gpuType=_.gpuType),x.push(y)}o.morphAttributes[p]=x}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let p=0,f=u.length;p!==f;++p){let x=u[p];o.addGroup(x.start,x.count,x.materialIndex)}let d=t.data.boundingSphere;return d!==void 0&&(o.boundingSphere=new Ie().fromJSON(d)),t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}},Kd={},Nh=class extends Ke{constructor(t){super(t)}load(t,e,n,i){let r=this,o=this.path===""?mo.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;let a=new kn(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),Gt("ObjectLoader: Can't parse "+t+".",u.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),Gt("ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){let n=this,i=this.path===""?mo.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;let r=new kn(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let o=await r.loadAsync(t,e),a;try{a=JSON.parse(o)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}let l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){let n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(c)}),a=this.parseTextures(t.textures,o),l=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,r,l,a,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let u=!1;for(let d in o)if(o[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&e(c)}return c}async parseAsync(t){let e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,i,a,o,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){Kd[t]=e}parseShapes(t){let e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){let r=new as().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){let n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=new _a().fromJSON(t[r],i);n[a.uuid]=a}return n}parseGeometries(t,e){let n={};if(t!==void 0){let i=new cl;for(let r=0,o=t.length;r<o;r++){let a,l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in Qm?a=Qm[l.type].fromJSON(l,e):l.type in Kd?a=Kd[l.type].fromJSON(l,e):Tt(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(t,e){let n={},i={};if(t!==void 0){let r=new al;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){let l=t[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){let e={};if(t!==void 0)for(let n=0;n<t.length;n++){let i=t[n],r=cs.parse(i);e[r.uuid]=r}return e}parseImages(t,e){let n=this,i={},r;function o(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:Lr(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){let l=new fo(e);r=new hs(l),r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){let u=t[c],d=u.url;if(Array.isArray(d)){let p=[];for(let f=0,x=d.length;f<x;f++){let m=d[f],g=a(m);g!==null&&(g instanceof HTMLImageElement?p.push(g):p.push(new un(g.data,g.width,g.height)))}i[u.uuid]=new An(p)}else{let p=a(u.url);i[u.uuid]=new An(p)}}}return i}async parseImagesAsync(t){let e=this,n={},i;async function r(o){if(typeof o=="string"){let a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:Lr(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){i=new hs(this.manager),i.setPriority(this.priority),i.setCache(this.cache),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){let l=t[o],c=l.url;if(Array.isArray(c)){let h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u],f=await r(p);f!==null&&(f instanceof HTMLImageElement?h.push(f):h.push(new un(f.data,f.width,f.height)))}n[l.uuid]=new An(h)}else{let h=await r(l.url);n[l.uuid]=new An(h)}}}return n}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(Tt("ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}let i={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=t[r];a.image===void 0&&Tt('ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&Tt("ObjectLoader: Undefined image",a.image);let l=e[a.image],c=l.data,h;Array.isArray(c)?(h=new rs,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new un:h=new De,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,oy)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],l0),h.wrapT=n(a.wrap[1],l0)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,c0)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,c0)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.mipmapsAutoUpdate!==void 0&&(h.mipmapsAutoUpdate=a.mipmapsAutoUpdate),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.normalized!==void 0&&(h.normalized=a.normalized),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(t,e,n,i,r){let o;function a(d){return e[d]===void 0&&Tt("ObjectLoader: Undefined geometry",d),e[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){let p=[];for(let f=0,x=d.length;f<x;f++){let m=d[f];n[m]===void 0&&Tt("ObjectLoader: Undefined material",m),p.push(n[m])}return p}return n[d]===void 0&&Tt("ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&Tt("ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(t.type){case"Scene":o=new En,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new ht(t.background):o.background=c(t.background)),t.environment!==void 0&&(o.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new pa(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new Ni(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new Ee(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new ki(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new sl(t.color,t.intensity);break;case"DirectionalLight":o=new Gi(t.color,t.intensity),o.target=t.target||"";break;case"PointLight":o=new il(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new rl(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new nl(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),o.target=t.target||"",t.map!==void 0&&(o.map=c(t.map));break;case"HemisphereLight":o=new zi(t.color,t.groundColor,t.intensity);break;case"LightProbe":let d=new po().fromArray(t.sh);o=new ol(d,t.intensity);break;case"SkinnedMesh":h=a(t.geometry),u=l(t.material),o=new xa(h,u),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":h=a(t.geometry),u=l(t.material),o=new fe(h,u);break;case"InstancedMesh":h=a(t.geometry),u=l(t.material);let p=t.count,f=t.instanceMatrix,x=t.instanceColor;o=new Kn(h,u,p),o.instanceMatrix=new Cn(new Float32Array(f.array),16),x!==void 0&&(o.instanceColor=new Cn(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":h=a(t.geometry),u=l(t.material),o=new va(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,u),o.geometry=h,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._geometryInfo=t.geometryInfo.map(m=>{let g=null,_=null;return m.boundingBox!==void 0&&(g=new Ue().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(_=new Ie().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:_}}),o._instanceInfo=t.instanceInfo,o._availableInstanceIds=t.availableInstanceIds,o._availableGeometryIds=t.availableGeometryIds,o._nextIndexStart=t.nextIndexStart,o._nextVertexStart=t.nextVertexStart,o._geometryCount=t.geometryCount,o._maxInstanceCount=t.maxInstanceCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._matricesTexture=c(t.matricesTexture.uuid),o._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(o._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(o.boundingSphere=new Ie().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(o.boundingBox=new Ue().fromJSON(t.boundingBox));break;case"LOD":o=new ga;break;case"Line":o=new Qn(a(t.geometry),l(t.material));break;case"LineLoop":o=new ya(a(t.geometry),l(t.material));break;case"LineSegments":o=new Rn(a(t.geometry),l(t.material));break;case"PointCloud":case"Points":o=new Ma(a(t.geometry),l(t.material));break;case"Sprite":o=new ma(l(t.material)),t.center!==void 0&&o.center.fromArray(t.center);break;case"Group":o=new Li;break;case"Bone":o=new Yr;break;default:o=new xe}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.pivot!==void 0&&(o.pivot=new L().fromArray(t.pivot)),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&(o.matrix.decompose(o.position,o.quaternion,o.scale),o.pivot!==null&&o.position.copy(o.pivot).applyMatrix4(o.matrix).sub(o.pivot))):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(o.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.blurSamples!==void 0&&(o.shadow.blurSamples=t.shadow.blurSamples),t.shadow.focus!==void 0&&(o.shadow.focus=t.shadow.focus),t.shadow.aspect!==void 0&&(o.shadow.aspect=t.shadow.aspect),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.mapType!==void 0&&(o.shadow.mapType=t.shadow.mapType),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.static!==void 0&&(o.static=t.static),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){let d=t.children;for(let p=0;p<d.length;p++)o.add(this.parseObject(d[p],e,n,i,r))}if(t.animations!==void 0){let d=t.animations;for(let p=0;p<d.length;p++){let f=d[p];o.animations.push(r[f])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);let d=t.levels;for(let p=0;p<d.length;p++){let f=d[p],x=o.getObjectByProperty("uuid",f.object);x!==void 0&&o.addLevel(x,f.distance,f.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=e[n.skeleton];i===void 0?Tt("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){let n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new xe}})}},oy={UVMapping:ml,CubeReflectionMapping:di,CubeRefractionMapping:_s,EquirectangularReflectionMapping:yo,EquirectangularRefractionMapping:Mo},l0={RepeatWrapping:Ur,ClampToEdgeWrapping:hn,MirroredRepeatWrapping:Fr},c0={NearestFilter:Le,NearestMipmapNearestFilter:Su,NearestMipmapLinearFilter:ir,LinearFilter:we,LinearMipmapNearestFilter:So,LinearMipmapLinearFilter:Gn},Qd=new WeakMap,Uh=class extends Ke{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Tt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Tt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Jn.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{Qd.has(o)===!0?(i&&i(Qd.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Jn.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Qd.set(l,c),Jn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Jn.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},go=class{static getContext(){return th===void 0&&(th=new(window.AudioContext||window.webkitAudioContext)),th}static setContext(t){th=t}},Fh=class extends Ke{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new kn(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{let c=l.slice(0),h=go.getContext(),u=t+"#decode";r.manager.itemStart(u),h.decodeAudioData(c,function(d){e(d),r.manager.itemEnd(u)}).catch(function(d){a(d),r.manager.itemEnd(u)})}catch(c){a(c)}},n,i);function a(l){i?i(l):Gt(l),r.manager.itemError(t)}}},h0=new Yt,u0=new Yt,Is=new Yt,Oh=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ee,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ee,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Is.copy(t.projectionMatrix);let i=e.eyeSep/2,r=i*e.near/e.focus,o=e.near*Math.tan(Bs*e.fov*.5)/e.zoom,a,l;u0.elements[12]=-i,h0.elements[12]=i,a=-o*e.aspect+r,l=o*e.aspect+r,Is.elements[0]=2*e.near/(l-a),Is.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(Is),a=-o*e.aspect-r,l=o*e.aspect-r,Is.elements[0]=2*e.near/(l-a),Is.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(Is)}this.cameraL.matrix.copy(t.matrixWorld).multiply(u0),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(h0),this.cameraR.matrixWorldNeedsUpdate=!0}},Cr=-90,Rr=1,js=class extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ee(Cr,Rr,t,e);i.layers=this.layers,this.add(i);let r=new Ee(Cr,Rr,t,e);r.layers=this.layers,this.add(r);let o=new Ee(Cr,Rr,t,e);o.layers=this.layers,this.add(o);let a=new Ee(Cr,Rr,t,e);a.layers=this.layers,this.add(a);let l=new Ee(Cr,Rr,t,e);l.layers=this.layers,this.add(l);let c=new Ee(Cr,Rr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},hl=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},tr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=ay.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};Ls=new L,jd=new Re,ly=new L,Ds=new L,Ns=new L,Bh=class extends xe{constructor(){super(),this.type="AudioListener",this.context=go.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new tr}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Ls,jd,ly),Ds.set(0,0,-1).applyQuaternion(jd),Ns.set(0,1,0).applyQuaternion(jd),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Ls.x,n),e.positionY.linearRampToValueAtTime(Ls.y,n),e.positionZ.linearRampToValueAtTime(Ls.z,n),e.forwardX.linearRampToValueAtTime(Ds.x,n),e.forwardY.linearRampToValueAtTime(Ds.y,n),e.forwardZ.linearRampToValueAtTime(Ds.z,n),e.upX.linearRampToValueAtTime(Ns.x,n),e.upY.linearRampToValueAtTime(Ns.y,n),e.upZ.linearRampToValueAtTime(Ns.z,n)}else e.setPosition(Ls.x,Ls.y,Ls.z),e.setOrientation(Ds.x,Ds.y,Ds.z,Ns.x,Ns.y,Ns.z)}},ul=class extends xe{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Tt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Tt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Tt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}},Us=new L,d0=new Re,cy=new L,Fs=new L,zh=class extends ul{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Us,d0,cy),Fs.set(0,0,1).applyQuaternion(d0);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Us.x,n),e.positionY.linearRampToValueAtTime(Us.y,n),e.positionZ.linearRampToValueAtTime(Us.z,n),e.orientationX.linearRampToValueAtTime(Fs.x,n),e.orientationY.linearRampToValueAtTime(Fs.y,n),e.orientationZ.linearRampToValueAtTime(Fs.z,n)}else e.setPosition(Us.x,Us.y,Us.z),e.setOrientation(Fs.x,Fs.y,Fs.z)}},kh=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},dl=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Re.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let o=this._workIndex*r;Re.multiplyQuaternionsFlat(t,o,t,e,t,n),Re.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},lp="\\[\\]\\.:\\/",hy=new RegExp("["+lp+"]","g"),cp="[^"+lp+"]",uy="[^"+lp.replace("\\.","")+"]",dy=/((?:WC+[\/:])*)/.source.replace("WC",cp),fy=/(WCOD+)?/.source.replace("WCOD",uy),py=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cp),my=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cp),gy=new RegExp("^"+dy+fy+py+my+"$"),xy=["material","materials","bones","map"],pf=class{constructor(t,e,n){let i=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hy,"")}static parseTrackName(t){let e=gy.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);xy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=pf;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Gh=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Hn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length,a,l=t.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],p=d.uuid,f=e[p];if(f===void 0){f=l++,e[p]=f,t.push(d);for(let x=0,m=o;x!==m;++x)r[x].push(new ve(d,n[x],i[x]))}else if(f<c){a=t[f];let x=--c,m=t[x];e[m.uuid]=f,t[f]=m,e[p]=x,t[x]=d;for(let g=0,_=o;g!==_;++g){let y=r[g],M=y[x],w=y[f];y[f]=M,w===void 0&&(w=new ve(d,n[g],i[g])),y[x]=w}}else t[f]!==a&&Gt("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){let u=r++,d=t[u];e[d.uuid]=h,t[h]=d,e[c]=u,t[u]=l;for(let p=0,f=i;p!==f;++p){let x=n[p],m=x[u],g=x[h];x[h]=m,x[u]=g}}}this.nCachedObjects_=r}uncache(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,o=t.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],h=c.uuid,u=e[h];if(u!==void 0)if(delete e[h],u<r){let d=--r,p=t[d],f=--o,x=t[f];u!==d&&(e[p.uuid]=u),t[u]=p,d!==f&&(e[x.uuid]=d),t[d]=x,t.pop();for(let m=0,g=i;m!==g;++m){let _=n[m],y=_[d],M=_[f];_[u]=y,_[d]=M,_.pop()}}else{let d=--o,p=t[d];u!==d&&(e[p.uuid]=u),t[u]=p,t.pop();for(let f=0,x=i;f!==x;++f){let m=n[f];m[u]=m[d],m.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[t]=i,o.push(t),a.push(e),r.push(u);for(let d=h,p=l.length;d!==p;++d){let f=l[d];u[d]=new ve(f,t,e)}return u}unsubscribe_(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=i[a];e[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}},fl=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,o=r.length,a=new Array(o),l={endingStart:ts,endingEnd:ts};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Hf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ru:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Ql:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,o=n===Vf;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Gf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=es,i.endingEnd=es):(t?i.endingStart=this.zeroSlopeAtStart?es:ts:i.endingStart=Br,e?i.endingEnd=this.zeroSlopeAtEnd?es:ts:i.endingEnd=Br)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}},_y=new Float32Array(1),Hh=class extends Mn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=i[u],p=d.name,f=h[p];if(f!==void 0)++f.referenceCount,o[u]=f;else{if(f=o[u],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,p));continue}let x=e&&e._propertyBindings[u].binding.parsedPath;f=new dl(ve.create(n,p,x),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,p),o[u]=f}a[u].resultBuffer=f.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;let u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new co(new Float32Array(2),new Float32Array(2),1,_y),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,o=typeof t=="string"?cs.findByName(i,t):t,a=o!==null?o.uuid:t,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ql),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new fl(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?cs.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Vh=class extends Vr{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n;for(let r=0;r<this.textures.length;r++){let o=new Hs(null,t,e,n);o.isRenderTargetTexture=!0,o.renderTarget=this,this.textures[r]=o}this._setTextureOptions(i)}},Wh=class s{constructor(t){this.value=t}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},vy=0,Xh=class extends Mn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:vy++}),this.name="",this.usage=jl,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){let r=e[n];Array.isArray(r)?this.uniforms.push(r.map(o=>o.clone())):this.uniforms.push(r.clone())}return this}clone(){return new this.constructor().copy(this)}},qh=class extends ss{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},Yh=class{constructor(t,e,n,i,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=o,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},f0=new Yt,Zh=class{constructor(t,e,n=0,i=1/0){this.ray=new Fi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Gt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return f0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(f0),this}intersectObject(t,e=!0,n=[]){return mf(t,this,n,e),n.sort(p0),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)mf(t[i],this,n,e);return n.sort(p0),n}};$h=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Tt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},Jh=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Kh=class{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}},pp=class pp{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};pp.prototype.isMatrix2=!0;Qh=pp,m0=new et,pl=class{constructor(t=new et(1/0,1/0),e=new et(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=m0.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,m0).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},g0=new L,eh=new L,Pr=new L,Ir=new L,tf=new L,yy=new L,My=new L,jh=class{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){g0.subVectors(t,this.start),eh.subVectors(this.end,this.start);let n=eh.dot(eh);if(n===0)return 0;let r=eh.dot(g0)/n;return e&&(r=$t(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=yy,n=My){let i=10000000000000001e-32,r,o,a=this.start,l=t.start,c=this.end,h=t.end;Pr.subVectors(c,a),Ir.subVectors(h,l),tf.subVectors(a,l);let u=Pr.dot(Pr),d=Ir.dot(Ir),p=Ir.dot(tf);if(u<=i&&d<=i)return e.copy(a),n.copy(l),e.distanceToSquared(n);if(u<=i)r=0,o=p/d,o=$t(o,0,1);else{let f=Pr.dot(tf);if(d<=i)o=0,r=$t(-f/u,0,1);else{let x=Pr.dot(Ir),m=u*d-x*x;m!==0?r=$t((x*p-f*d)/m,0,1):r=0,o=(x*r+p)/d,o<0?(o=0,r=$t(-f/u,0,1)):o>1&&(o=1,r=$t((x-f)/u,0,1))}}return e.copy(a).addScaledVector(Pr,r),n.copy(l).addScaledVector(Ir,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},x0=new L,tu=class extends xe{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let n=new Zt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){let c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Lt(i,3));let r=new Ze({fog:!1,toneMapped:!1});this.cone=new Rn(n,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),x0.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(x0),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},ji=new L,nh=new Yt,ef=new Yt,eu=class extends Rn{constructor(t){let e=Cg(t),n=new Zt,i=[],r=[];for(let c=0;c<e.length;c++){let h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Lt(i,3)),n.setAttribute("color",new Lt(r,3));let o=new Ze({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;let a=new ht(255),l=new ht(65280);this.setColors(a,l)}updateMatrixWorld(t){let e=this.bones,n=this.geometry,i=n.getAttribute("position");ef.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){let a=e[r];a.parent&&a.parent.isBone&&(nh.multiplyMatrices(ef,a.matrixWorld),ji.setFromMatrixPosition(nh),i.setXYZ(o,ji.x,ji.y,ji.z),nh.multiplyMatrices(ef,a.parent.matrixWorld),ji.setFromMatrixPosition(nh),i.setXYZ(o+1,ji.x,ji.y,ji.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){let i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};nu=class extends fe{constructor(t,e,n){let i=new oo(e,4,2),r=new On({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},Sy=new L,_0=new ht,v0=new ht,iu=class extends xe{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new ro(e);i.rotateY(Math.PI*.5),this.material=new On({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new se(o,3)),this.add(new fe(i,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");_0.copy(this.light.color),v0.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){let r=n<i/2?_0:v0;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(Sy.setFromMatrixPosition(this.light.matrixWorld).negate())}},su=class extends Rn{constructor(t=10,e=10,n=4473924,i=8947848){n=new ht(n),i=new ht(i);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,p=0,f=-a;d<=e;d++,f+=o){l.push(-a,0,f,a,0,f),l.push(f,0,-a,f,0,a);let x=d===r?n:i;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}let h=new Zt;h.setAttribute("position",new Lt(l,3)),h.setAttribute("color",new Lt(c,3));let u=new Ze({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},ru=class extends Rn{constructor(t=10,e=16,n=8,i=64,r=4473924,o=8947848){r=new ht(r),o=new ht(o);let a=[],l=[];if(e>1)for(let u=0;u<e;u++){let d=u/e*(Math.PI*2),p=Math.sin(d)*t,f=Math.cos(d)*t;a.push(0,0,0),a.push(p,0,f);let x=u&1?r:o;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let u=0;u<n;u++){let d=u&1?r:o,p=t-t/n*u;for(let f=0;f<i;f++){let x=f/i*(Math.PI*2),m=Math.sin(x)*p,g=Math.cos(x)*p;a.push(m,0,g),l.push(d.r,d.g,d.b),x=(f+1)/i*(Math.PI*2),m=Math.sin(x)*p,g=Math.cos(x)*p,a.push(m,0,g),l.push(d.r,d.g,d.b)}}let c=new Zt;c.setAttribute("position",new Lt(a,3)),c.setAttribute("color",new Lt(l,3));let h=new Ze({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},y0=new L,ih=new L,M0=new L,ou=class extends xe{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Zt;i.setAttribute("position",new Lt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let r=new Ze({fog:!1,toneMapped:!1});this.lightPlane=new Qn(i,r),this.add(this.lightPlane),i=new Zt,i.setAttribute("position",new Lt([0,0,0,0,0,1],3)),this.targetLine=new Qn(i,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),y0.setFromMatrixPosition(this.light.matrixWorld),ih.setFromMatrixPosition(this.light.target.matrixWorld),M0.subVectors(ih,y0),this.lightPlane.lookAt(ih),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ih),this.targetLine.scale.z=M0.length()}},sh=new L,Pe=new Qs,au=class extends Rn{constructor(t){let e=new Zt,n=new Ze({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(f,x){l(f),l(x)}function l(f){i.push(0,0,0),r.push(0,0,0),o[f]===void 0&&(o[f]=[]),o[f].push(i.length/3-1)}e.setAttribute("position",new Lt(i,3)),e.setAttribute("color",new Lt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let c=new ht(16755200),h=new ht(16711680),u=new ht(43775),d=new ht(16777215),p=new ht(3355443);this.setColors(c,h,u,d,p)}setColors(t,e,n,i,r){let a=this.geometry.getAttribute("color");return a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0,this}update(){let t=this.geometry,e=this.pointMap,n=1,i=1,r,o;if(Pe.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,o=0;else if(this.camera.coordinateSystem===yn)r=-1,o=1;else if(this.camera.coordinateSystem===ns)r=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Ne("c",e,t,Pe,0,0,r),Ne("t",e,t,Pe,0,0,o),Ne("n1",e,t,Pe,-n,-i,r),Ne("n2",e,t,Pe,n,-i,r),Ne("n3",e,t,Pe,-n,i,r),Ne("n4",e,t,Pe,n,i,r),Ne("f1",e,t,Pe,-n,-i,o),Ne("f2",e,t,Pe,n,-i,o),Ne("f3",e,t,Pe,-n,i,o),Ne("f4",e,t,Pe,n,i,o),Ne("u1",e,t,Pe,n*.7,i*1.1,r),Ne("u2",e,t,Pe,-n*.7,i*1.1,r),Ne("u3",e,t,Pe,0,i*2,r),Ne("cf1",e,t,Pe,-n,0,o),Ne("cf2",e,t,Pe,n,0,o),Ne("cf3",e,t,Pe,0,-i,o),Ne("cf4",e,t,Pe,0,i,o),Ne("cn1",e,t,Pe,-n,0,r),Ne("cn2",e,t,Pe,n,0,r),Ne("cn3",e,t,Pe,0,-i,r),Ne("cn4",e,t,Pe,0,i,r),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};rh=new Ue,lu=class extends Rn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Zt;r.setIndex(new se(n,1)),r.setAttribute("position",new se(i,3)),super(r,new Ze({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&rh.setFromObject(this.object),rh.isEmpty())return;let t=rh.min,e=rh.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},cu=class extends Rn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Zt;r.setIndex(new se(n,1)),r.setAttribute("position",new Lt(i,3)),super(r,new Ze({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},hu=class extends Qn{constructor(t,e=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Zt;o.setAttribute("position",new Lt(r,3)),o.computeBoundingSphere(),super(o,new Ze({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Zt;l.setAttribute("position",new Lt(a,3)),l.computeBoundingSphere(),this.add(new fe(l,new On({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},S0=new L,uu=class extends xe{constructor(t=new L(0,0,1),e=new L(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",oh===void 0&&(oh=new Zt,oh.setAttribute("position",new Lt([0,0,0,0,1,0],3)),nf=new Qr(.5,1,5,1),nf.translate(0,-.5,0)),this.position.copy(e),this.line=new Qn(oh,new Ze({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new fe(nf,new On({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{S0.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(S0,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},du=class extends Rn{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Zt;i.setAttribute("position",new Lt(e,3)),i.setAttribute("color",new Lt(n,3));let r=new Ze({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){let i=new ht,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},fu=class{constructor(){this.type="ShapePath",this.color=new ht,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new os,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1,u=c.length;for(let d=0,p=u-1;d<u;p=d++){let f=c[d],x=c[p];f.y>l.y!=x.y>l.y&&l.x<(x.x-f.x)*(l.y-f.y)/(x.y-f.y)+f.x&&(h=!h)}return h}function e(l,c){let h=c.getCenter(new et);if(t(h,l))return h;let u=h.y,d=[],p=l.length;for(let f=0;f<p;f++){let x=l[f],m=l[(f+1)%p];if(x.y>u!=m.y>u){let g=x.x+(u-x.y)*(m.x-x.x)/(m.y-x.y);d.push(g)}}return d.length>1&&(d.sort((f,x)=>f-x),h.x=(d[0]+d[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Tt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=Un.area(c);if(h===0)continue;let u=new pl;for(let d=0;d<c.length;d++)u.expandByPoint(c[d]);r.push({subPath:l,points:c,boundingBox:u,interiorPoint:e(c,u),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let u=l-1;u>=0;u--){let d=r[u];if(d.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,d.points)){c.container=d.exclude?d.container:d,h=d.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let o=[],a=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new as;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=a.get(l.container);if(!c)continue;let h=new os;h.curves=l.subPath.curves,c.holes.push(h)}return o}},pu=class extends Mn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};mu=class{static contain(t,e){return by(t,e)}static cover(t,e){return wy(t,e)}static fill(t){return Ty(t)}static getByteLength(t,e,n,i){return Uu(t,e,n,i)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});var jt={};vd(jt,{ACESFilmicToneMapping:()=>ui,AddEquation:()=>ds,AddOperation:()=>zf,AdditiveAnimationBlendMode:()=>Ru,AdditiveBlending:()=>xo,AgXToneMapping:()=>gs,AlphaFormat:()=>Eu,AlwaysCompare:()=>Lu,AlwaysDepth:()=>oa,AlwaysStencilFunc:()=>$f,AmbientLight:()=>sl,AnimationAction:()=>fl,AnimationClip:()=>cs,AnimationLoader:()=>Rh,AnimationMixer:()=>Hh,AnimationObjectGroup:()=>Gh,AnimationUtils:()=>Ch,ArcCurve:()=>Ea,ArrayCamera:()=>hl,ArrowHelper:()=>uu,AttachedBindMode:()=>ah,Audio:()=>ul,AudioAnalyser:()=>kh,AudioContext:()=>go,AudioListener:()=>Bh,AudioLoader:()=>Fh,AxesHelper:()=>du,BackSide:()=>on,BasicDepthPacking:()=>Yf,BasicShadowMap:()=>A0,BatchedMesh:()=>va,BezierInterpolant:()=>tl,Bone:()=>Yr,BooleanKeyframeTrack:()=>li,Box2:()=>pl,Box3:()=>Ue,Box3Helper:()=>cu,BoxGeometry:()=>Sn,BoxHelper:()=>lu,BufferAttribute:()=>se,BufferGeometry:()=>Zt,BufferGeometryLoader:()=>cl,ByteType:()=>bu,Cache:()=>Jn,Camera:()=>Qs,CameraHelper:()=>au,CanvasTexture:()=>Th,CapsuleGeometry:()=>ba,CatmullRomCurve3:()=>Ca,CineonToneMapping:()=>ms,CircleGeometry:()=>wa,ClampToEdgeWrapping:()=>hn,Clock:()=>$h,Color:()=>ht,ColorKeyframeTrack:()=>ho,ColorManagement:()=>le,Compatibility:()=>ug,CompressedArrayTexture:()=>bh,CompressedCubeTexture:()=>wh,CompressedTexture:()=>Xs,CompressedTextureLoader:()=>Ph,ConeGeometry:()=>Qr,ConstantAlphaFactor:()=>Ff,ConstantColorFactor:()=>Nf,Controls:()=>pu,CubeCamera:()=>js,CubeDepthTexture:()=>Jr,CubeReflectionMapping:()=>di,CubeRefractionMapping:()=>_s,CubeTexture:()=>rs,CubeTextureLoader:()=>Ih,CubicBezierCurve:()=>jr,CubicBezierCurve3:()=>Ra,CubicInterpolant:()=>Qa,CullFaceBack:()=>xu,CullFaceFront:()=>_f,CullFaceFrontBack:()=>T0,CullFaceNone:()=>xf,Curve:()=>bn,CurvePath:()=>Ia,CustomBlending:()=>yf,CustomToneMapping:()=>vo,CylinderGeometry:()=>jn,Cylindrical:()=>Kh,Data3DTexture:()=>Hs,DataArrayTexture:()=>Gs,DataTexture:()=>un,DataTextureLoader:()=>Lh,DataUtils:()=>dh,DecrementStencilOp:()=>H0,DecrementWrapStencilOp:()=>W0,DefaultLoadingManager:()=>ap,DepthFormat:()=>oi,DepthStencilFormat:()=>fi,DepthTexture:()=>Bn,DetachedBindMode:()=>kf,DirectionalLight:()=>Gi,DirectionalLightHelper:()=>ou,DiscreteInterpolant:()=>ja,DodecahedronGeometry:()=>Ta,DoubleSide:()=>ei,DstAlphaFactor:()=>Rf,DstColorFactor:()=>If,DynamicCopyUsage:()=>rg,DynamicDrawUsage:()=>j0,DynamicReadUsage:()=>ng,EdgesGeometry:()=>Aa,EllipseCurve:()=>qs,EqualCompare:()=>Qf,EqualDepth:()=>la,EqualStencilFunc:()=>Z0,EquirectangularReflectionMapping:()=>yo,EquirectangularRefractionMapping:()=>Mo,Euler:()=>Fn,EventDispatcher:()=>Mn,ExternalTexture:()=>Kr,ExtrudeGeometry:()=>Ua,FileLoader:()=>kn,Float16BufferAttribute:()=>_h,Float32BufferAttribute:()=>Lt,FloatType:()=>rn,Fog:()=>pa,FogExp2:()=>Ni,FramebufferTexture:()=>Sh,FrontSide:()=>Hi,Frustum:()=>ai,FrustumArray:()=>Zr,GLBufferAttribute:()=>Yh,GLSL1:()=>ag,GLSL3:()=>Du,GreaterCompare:()=>jf,GreaterDepth:()=>ha,GreaterEqualCompare:()=>Iu,GreaterEqualDepth:()=>ca,GreaterEqualStencilFunc:()=>Q0,GreaterStencilFunc:()=>J0,GridHelper:()=>su,Group:()=>Li,HTMLTexture:()=>Ah,HalfFloatType:()=>He,HemisphereLight:()=>zi,HemisphereLightHelper:()=>iu,IcosahedronGeometry:()=>Zs,ImageBitmapLoader:()=>Uh,ImageLoader:()=>hs,ImageUtils:()=>fa,IncrementStencilOp:()=>G0,IncrementWrapStencilOp:()=>V0,InstancedBufferAttribute:()=>Cn,InstancedBufferGeometry:()=>ll,InstancedInterleavedBuffer:()=>qh,InstancedMesh:()=>Kn,Int16BufferAttribute:()=>gh,Int32BufferAttribute:()=>xh,Int8BufferAttribute:()=>fh,IntType:()=>gl,InterleavedBuffer:()=>ss,InterleavedBufferAttribute:()=>Ui,Interpolant:()=>Bi,InterpolateBezier:()=>lh,InterpolateDiscrete:()=>Or,InterpolateLinear:()=>da,InterpolateSmooth:()=>ta,InterpolationSamplingMode:()=>hg,InterpolationSamplingType:()=>cg,InvertStencilOp:()=>X0,KeepStencilOp:()=>ea,KeyframeTrack:()=>fn,LOD:()=>ga,LatheGeometry:()=>Fa,Layers:()=>Vs,LessCompare:()=>Kf,LessDepth:()=>aa,LessEqualCompare:()=>Pu,LessEqualDepth:()=>zs,LessEqualStencilFunc:()=>$0,LessStencilFunc:()=>Y0,Light:()=>ti,LightProbe:()=>ol,LightShadow:()=>Ks,Line:()=>Qn,Line3:()=>jh,LineBasicMaterial:()=>Ze,LineCurve:()=>to,LineCurve3:()=>Pa,LineDashedMaterial:()=>Ka,LineLoop:()=>ya,LineSegments:()=>Rn,LinearFilter:()=>we,LinearInterpolant:()=>co,LinearMipMapLinearFilter:()=>I0,LinearMipMapNearestFilter:()=>P0,LinearMipmapLinearFilter:()=>Gn,LinearMipmapNearestFilter:()=>So,LinearSRGBColorSpace:()=>zr,LinearToneMapping:()=>fs,LinearTransfer:()=>kr,Loader:()=>Ke,LoaderUtils:()=>mo,LoadingManager:()=>fo,LoopOnce:()=>Gf,LoopPingPong:()=>Vf,LoopRepeat:()=>Hf,MOUSE:()=>b0,Material:()=>ke,MaterialBlending:()=>E0,MaterialLoader:()=>al,MathUtils:()=>sp,Matrix2:()=>Qh,Matrix3:()=>Kt,Matrix4:()=>Yt,MaxEquation:()=>wf,Mesh:()=>fe,MeshBasicMaterial:()=>On,MeshDepthMaterial:()=>ao,MeshDistanceMaterial:()=>lo,MeshLambertMaterial:()=>$a,MeshMatcapMaterial:()=>Ja,MeshNormalMaterial:()=>Za,MeshPhongMaterial:()=>qa,MeshPhysicalMaterial:()=>Xa,MeshStandardMaterial:()=>Fe,MeshToonMaterial:()=>Ya,MinEquation:()=>bf,MirroredRepeatWrapping:()=>Fr,MixOperation:()=>Bf,MultiplyBlending:()=>vu,MultiplyOperation:()=>_o,NearestFilter:()=>Le,NearestMipMapLinearFilter:()=>R0,NearestMipMapNearestFilter:()=>C0,NearestMipmapLinearFilter:()=>ir,NearestMipmapNearestFilter:()=>Su,NeutralToneMapping:()=>xs,NeverCompare:()=>Jf,NeverDepth:()=>ra,NeverStencilFunc:()=>q0,NoBlending:()=>hi,NoColorSpace:()=>mi,NoNormalPacking:()=>F0,NoToneMapping:()=>Pn,NormalAnimationBlendMode:()=>Ql,NormalBlending:()=>nr,NormalGAPacking:()=>B0,NormalRGPacking:()=>O0,NotEqualCompare:()=>tp,NotEqualDepth:()=>ua,NotEqualStencilFunc:()=>K0,NumberKeyframeTrack:()=>$s,Object3D:()=>xe,ObjectLoader:()=>Nh,ObjectSpaceNormalMap:()=>Zf,OctahedronGeometry:()=>ro,OneFactor:()=>Af,OneMinusConstantAlphaFactor:()=>Of,OneMinusConstantColorFactor:()=>Uf,OneMinusDstAlphaFactor:()=>Pf,OneMinusDstColorFactor:()=>Lf,OneMinusSrcAlphaFactor:()=>Mu,OneMinusSrcColorFactor:()=>Cf,OrthographicCamera:()=>ki,PCFShadowMap:()=>us,PCFSoftShadowMap:()=>vf,PMREMGenerator:()=>Wi,Path:()=>os,PerspectiveCamera:()=>Ee,Plane:()=>Nn,PlaneGeometry:()=>zn,PlaneHelper:()=>hu,PointLight:()=>il,PointLightHelper:()=>nu,Points:()=>Ma,PointsMaterial:()=>$r,PolarGridHelper:()=>ru,PolyhedronGeometry:()=>Oi,PositionalAudio:()=>zh,PropertyBinding:()=>ve,PropertyMixer:()=>dl,QuadraticBezierCurve:()=>eo,QuadraticBezierCurve3:()=>no,Quaternion:()=>Re,QuaternionKeyframeTrack:()=>Js,QuaternionLinearInterpolant:()=>el,R11_EAC_Format:()=>Rl,RED_GREEN_RGTC2_Format:()=>Ro,RED_RGTC1_Format:()=>$l,REVISION:()=>gf,RG11_EAC_Format:()=>Co,RGBADepthPacking:()=>D0,RGBAFormat:()=>dn,RGBAIntegerFormat:()=>Ml,RGBA_ASTC_10x10_Format:()=>Vl,RGBA_ASTC_10x5_Format:()=>kl,RGBA_ASTC_10x6_Format:()=>Gl,RGBA_ASTC_10x8_Format:()=>Hl,RGBA_ASTC_12x10_Format:()=>Wl,RGBA_ASTC_12x12_Format:()=>Xl,RGBA_ASTC_4x4_Format:()=>Ll,RGBA_ASTC_5x4_Format:()=>Dl,RGBA_ASTC_5x5_Format:()=>Nl,RGBA_ASTC_6x5_Format:()=>Ul,RGBA_ASTC_6x6_Format:()=>Fl,RGBA_ASTC_8x5_Format:()=>Ol,RGBA_ASTC_8x6_Format:()=>Bl,RGBA_ASTC_8x8_Format:()=>zl,RGBA_BPTC_Format:()=>ql,RGBA_ETC2_EAC_Format:()=>Cl,RGBA_PVRTC_2BPPV1_Format:()=>Tl,RGBA_PVRTC_4BPPV1_Format:()=>wl,RGBA_S3TC_DXT1_Format:()=>To,RGBA_S3TC_DXT3_Format:()=>Ao,RGBA_S3TC_DXT5_Format:()=>Eo,RGBDepthPacking:()=>N0,RGBFormat:()=>Cu,RGBIntegerFormat:()=>L0,RGB_BPTC_SIGNED_Format:()=>Yl,RGB_BPTC_UNSIGNED_Format:()=>Zl,RGB_ETC1_Format:()=>Al,RGB_ETC2_Format:()=>El,RGB_PVRTC_2BPPV1_Format:()=>bl,RGB_PVRTC_4BPPV1_Format:()=>Sl,RGB_S3TC_DXT1_Format:()=>wo,RGDepthPacking:()=>U0,RGFormat:()=>Vi,RGIntegerFormat:()=>yl,RawShaderMaterial:()=>ls,Ray:()=>Fi,Raycaster:()=>Zh,RectAreaLight:()=>rl,RedFormat:()=>vl,RedIntegerFormat:()=>bo,ReinhardToneMapping:()=>ps,RenderObjectRefreshType:()=>dg,RenderTarget:()=>Vr,RenderTarget3D:()=>Vh,RepeatWrapping:()=>Ur,ReplaceStencilOp:()=>k0,ReverseSubtractEquation:()=>Sf,RingGeometry:()=>Oa,SIGNED_R11_EAC_Format:()=>Pl,SIGNED_RED_GREEN_RGTC2_Format:()=>Kl,SIGNED_RED_RGTC1_Format:()=>Jl,SIGNED_RG11_EAC_Format:()=>Il,SRGBColorSpace:()=>Je,SRGBTransfer:()=>me,Scene:()=>En,ShaderChunk:()=>re,ShaderLib:()=>ni,ShaderMaterial:()=>Ge,ShadowMaterial:()=>Wa,Shape:()=>as,ShapeGeometry:()=>Ba,ShapePath:()=>fu,ShapeUtils:()=>Un,ShortType:()=>wu,Skeleton:()=>_a,SkeletonHelper:()=>eu,SkinnedMesh:()=>xa,Source:()=>ch,Sphere:()=>Ie,SphereGeometry:()=>oo,Spherical:()=>Jh,SphericalHarmonics3:()=>po,SplineCurve:()=>io,SpotLight:()=>nl,SpotLightHelper:()=>tu,Sprite:()=>ma,SpriteMaterial:()=>qr,SrcAlphaFactor:()=>yu,SrcAlphaSaturateFactor:()=>Df,SrcColorFactor:()=>Ef,StaticCopyUsage:()=>sg,StaticDrawUsage:()=>jl,StaticReadUsage:()=>eg,StereoCamera:()=>Oh,StreamCopyUsage:()=>og,StreamDrawUsage:()=>tg,StreamReadUsage:()=>ig,StringKeyframeTrack:()=>ci,SubtractEquation:()=>Mf,SubtractiveBlending:()=>_u,TOUCH:()=>w0,TangentSpaceNormalMap:()=>pi,TetrahedronGeometry:()=>za,Texture:()=>De,TextureLoader:()=>Dh,TextureSource:()=>An,TextureUtils:()=>mu,Timer:()=>tr,TimestampQuery:()=>lg,TorusGeometry:()=>ka,TorusKnotGeometry:()=>Ga,Triangle:()=>$n,TriangleFanDrawMode:()=>qf,TriangleStripDrawMode:()=>Xf,TrianglesDrawMode:()=>Wf,TubeGeometry:()=>Ha,UVMapping:()=>ml,Uint16BufferAttribute:()=>Wr,Uint32BufferAttribute:()=>Xr,Uint8BufferAttribute:()=>ph,Uint8ClampedBufferAttribute:()=>mh,Uniform:()=>Wh,UniformsGroup:()=>Xh,UniformsLib:()=>Et,UniformsUtils:()=>gi,UnsignedByteType:()=>pn,UnsignedInt101111Type:()=>Au,UnsignedInt248Type:()=>vs,UnsignedInt5999Type:()=>Tu,UnsignedIntType:()=>mn,UnsignedShort4444Type:()=>xl,UnsignedShort5551Type:()=>_l,UnsignedShortType:()=>sr,VSMShadowMap:()=>er,Vector2:()=>et,Vector3:()=>L,Vector4:()=>de,VectorKeyframeTrack:()=>uo,VideoFrameTexture:()=>Mh,VideoTexture:()=>Sa,WebGL3DRenderTarget:()=>uh,WebGLArrayRenderTarget:()=>hh,WebGLCoordinateSystem:()=>yn,WebGLCubeRenderTarget:()=>Io,WebGLRenderTarget:()=>Te,WebGLRenderer:()=>nc,WebGLUtils:()=>ox,WebGPUCoordinateSystem:()=>ns,WebXRController:()=>Ws,WireframeGeometry:()=>Va,WrapAroundEnding:()=>Br,ZeroCurvatureEnding:()=>ts,ZeroFactor:()=>Tf,ZeroSlopeEnding:()=>es,ZeroStencilOp:()=>z0,createCanvasElement:()=>ep,error:()=>Gt,getConsoleFunction:()=>mg,log:()=>Hr,setConsoleFunction:()=>pg,warn:()=>Tt,warnOnce:()=>ri});function Jg(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ey(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,f)=>p.start-f.start);let d=0;for(let p=1;p<u.length;p++){let f=u[d],x=u[p];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,f=u.length;p<f;p++){let x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}function l1(s,t,e,n,i,r){let o=new ht(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function p(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let M=_.backgroundBlurriness>0;y=t.get(y,M)}return y}function f(_){let y=!1,M=p(_);M===null?m(o,a):M&&M.isColor&&(m(M,1),y=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,y){let M=p(y);M&&M.isCubeTexture?(c===void 0&&(c=new fe(new Sn(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:rr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(a1.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kg),c.material.toneMapped=le.getTransfer(M.colorSpace)!==me,(h!==M||u!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new fe(new zn(2,2),new Ge({name:"BackgroundMaterial",uniforms:rr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=le.getTransfer(M.colorSpace)!==me,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,y){_.getRGB(Fu,op(s)),e.buffers.color.setClear(Fu.r,Fu.g,Fu.b,y,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:f,addToRenderList:x,dispose:g}}function c1(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(I,N,z,D,O){let q=!1,H=u(I,D,z,N);r!==H&&(r=H,c(r.object)),q=p(I,D,z,O),q&&f(I,D,z,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(I,N,z,D),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function u(I,N,z,D){let O=D.wireframe===!0,q=n[N.id];q===void 0&&(q={},n[N.id]=q);let H=I.isInstancedMesh===!0?I.id:0,st=q[H];st===void 0&&(st={},q[H]=st);let W=st[z.id];W===void 0&&(W={},st[z.id]=W);let Z=W[O];return Z===void 0&&(Z=d(l()),W[O]=Z),Z}function d(I){let N=[],z=[],D=[];for(let O=0;O<e;O++)N[O]=0,z[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:D,object:I,attributes:{},index:null}}function p(I,N,z,D){let O=r.attributes,q=N.attributes,H=0,st=z.getAttributes();for(let W in st)if(st[W].location>=0){let nt=O[W],At=q[W];if(At===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(At=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(At=I.instanceColor)),nt===void 0||nt.attribute!==At||At&&nt.data!==At.data)return!0;H++}return r.attributesNum!==H||r.index!==D}function f(I,N,z,D){let O={},q=N.attributes,H=0,st=z.getAttributes();for(let W in st)if(st[W].location>=0){let nt=q[W];nt===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(nt=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(nt=I.instanceColor));let At={};At.attribute=nt,nt&&nt.data&&(At.data=nt.data),O[W]=At,H++}r.attributes=O,r.attributesNum=H,r.index=D}function x(){let I=r.newAttributes;for(let N=0,z=I.length;N<z;N++)I[N]=0}function m(I){g(I,0)}function g(I,N){let z=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;z[I]=1,D[I]===0&&(s.enableVertexAttribArray(I),D[I]=1),O[I]!==N&&(s.vertexAttribDivisor(I,N),O[I]=N)}function _(){let I=r.newAttributes,N=r.enabledAttributes;for(let z=0,D=N.length;z<D;z++)N[z]!==I[z]&&(s.disableVertexAttribArray(z),N[z]=0)}function y(I,N,z,D,O,q,H){H===!0?s.vertexAttribIPointer(I,N,z,O,q):s.vertexAttribPointer(I,N,z,D,O,q)}function M(I,N,z,D){x();let O=D.attributes,q=z.getAttributes(),H=N.defaultAttributeValues;for(let st in q){let W=q[st];if(W.location>=0){let Z=O[st];if(Z===void 0&&(st==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),st==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){let nt=Z.normalized,At=Z.itemSize,ot=t.get(Z);if(ot===void 0)continue;let G=ot.buffer,lt=ot.type,vt=ot.bytesPerElement,kt=lt===s.INT||lt===s.UNSIGNED_INT||Z.gpuType===gl;if(Z.isInterleavedBufferAttribute){let wt=Z.data,Ht=wt.isInterleavedBuffer===!0?wt.stride:wt.itemSize,ye=Z.offset;if(wt.isInstancedInterleavedBuffer||wt.isInstancedBufferAttribute){for(let Pt=0;Pt<W.locationSize;Pt++)g(W.location+Pt,wt.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Pt=0;Pt<W.locationSize;Pt++)m(W.location+Pt);s.bindBuffer(s.ARRAY_BUFFER,G);for(let Pt=0;Pt<W.locationSize;Pt++)y(W.location+Pt,At/W.locationSize,lt,nt,Ht*vt,(ye+At/W.locationSize*Pt)*vt,kt)}else{if(Z.isInstancedBufferAttribute){for(let wt=0;wt<W.locationSize;wt++)g(W.location+wt,Z.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let wt=0;wt<W.locationSize;wt++)m(W.location+wt);s.bindBuffer(s.ARRAY_BUFFER,G);for(let wt=0;wt<W.locationSize;wt++)y(W.location+wt,At/W.locationSize,lt,nt,At*vt,At/W.locationSize*wt*vt,kt)}}else if(H!==void 0){let nt=H[st];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(W.location,nt);break;case 3:s.vertexAttrib3fv(W.location,nt);break;case 4:s.vertexAttrib4fv(W.location,nt);break;default:s.vertexAttrib1fv(W.location,nt)}}}}_()}function w(){R();for(let I in n){let N=n[I];for(let z in N){let D=N[z];for(let O in D){let q=D[O];for(let H in q)h(q[H].object),delete q[H];delete D[O]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let z in N){let D=N[z];for(let O in D){let q=D[O];for(let H in q)h(q[H].object),delete q[H];delete D[O]}}delete n[I.id]}function v(I){for(let N in n){let z=n[N];for(let D in z){let O=z[D];if(O[I.id]===void 0)continue;let q=O[I.id];for(let H in q)h(q[H].object),delete q[H];delete O[I.id]}}}function S(I){for(let N in n){let z=n[N],D=I.isInstancedMesh===!0?I.id:0,O=z[D];if(O!==void 0){for(let q in O){let H=O[q];for(let st in H)h(H[st].object),delete H[st];delete O[q]}delete z[D],Object.keys(z).length===0&&delete n[N]}}}function R(){E(),o=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function h1(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function u1(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(v){return!(v!==dn&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let S=v===He&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==pn&&v!==rn&&!S&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Tt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Tt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:M,maxSamples:w,samples:T}}function d1(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Nn,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let f=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||f===null||f.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,y=_*4,M=g.clippingState||null;l.value=M,M=h(f,d,y,p);for(let w=0;w!==y;++w)M[w]=e[w];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,f){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,f!==!0||m===null){let g=p+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,M=p;y!==x;++y,M+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Pg(s,t,e){return new Io(s,{minFilter:Gn,generateMipmaps:t,type:He,colorSpace:zr,depthBuffer:e})}function ic(s,t,e){return new Ge({name:s,uniforms:t,vertexShader:re.cube_vert,fragmentShader:e,side:on,blending:hi,depthTest:!1,depthWrite:!1})}function _1(){return ic("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qg}u

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
	`)}function v1(){return ic("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jg}},`

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
	`)}function y1(){return ic("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${p1}
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
	`)}function Ig(){return ic("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Lg(){return ic("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function M1(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,p=!1){return d==null?null:p?o(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===yo||p===Mo)if(t.has(d)){let f=t.get(d).texture;return a(f,d.mapping)}else{let f=d.image;if(f&&f.height>0){let x=new Io(f.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,f=p===yo||p===Mo,x=p===di||p===_s;if(f||x){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Wi(s)),m=f?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return f&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Wi(s)),m=f?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,p){return p===yo?d.mapping=di:p===Mo&&(d.mapping=_s),d}function l(d){let p=0,f=6;for(let x=0;x<f;x++)d[x]!==void 0&&p++;return p===f}function c(d){let p=d.target;p.removeEventListener("dispose",c);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function h(d){let p=d.target;p.removeEventListener("dispose",h);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function S1(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ri("WebGLRenderer: "+n+" extension not supported."),i}}}function b1(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(f=>delete i[f]);function a(f){l(f.target)}function l(f){f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete i[f.id],o.unregister(f);let x=r.get(f);x&&(t.remove(x),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function c(f,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(f){let x=f.attributes;for(let m in x)t.update(x[m],s.ARRAY_BUFFER)}function u(f){let x=f.index,m=f.attributes.position,g=0;if(m===void 0)return;let _=x!==null?x.array.length:m.array.length/3-1,y=m.count>=65535?Xr:Wr,M=new y(Math.ceil(_/3)*6,1),w=M.array;if(x!==null){let v=x.array;g=x.version;for(let S=0,R=0;S<_;S+=3){let E=v[S+0],I=v[S+1],N=v[S+2];w[R++]=E,w[R++]=I,w[R++]=I,w[R++]=N,w[R++]=N,w[R++]=E}}else{g=m.version;for(let v=0,S=0;v<_;v+=3){let R=v+0,E=v+1,I=v+2;w[S++]=R,w[S++]=E,w[S++]=E,w[S++]=I,w[S++]=I,w[S++]=R}}M.version=g;let T=r.get(f);T&&t.remove(T),r.set(f,M)}function d(f){let x=r.get(f);if(x){let m=f.index;m!==null&&x.version<m.version&&u(f)}else u(f);return r.get(f)}function p(){for(let f in i){let x=i[f].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:p}}function w1(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,u*o,p),e.update(d,n,p))}function h(u,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let x=0;for(let m=0;m<p;m++)x+=d[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function T1(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Gt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function A1(s,t,e){let n=new WeakMap,i=new de;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let R=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;p===!0&&(y=1),f===!0&&(y=2),x===!0&&(y=3);let M=a.attributes.position.count*y,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*w*4*u),v=new Gs(T,M,w,u);v.type=rn,v.needsUpdate=!0;let S=y*4;for(let E=0;E<u;E++){let I=m[E],N=g[E],z=_[E],D=M*w*4*E;for(let O=0;O<I.count;O++){let q=O*S;p===!0&&(i.fromBufferAttribute(I,O),T[D+q+0]=i.x,T[D+q+1]=i.y,T[D+q+2]=i.z,T[D+q+3]=0),f===!0&&(i.fromBufferAttribute(N,O),T[D+q+4]=i.x,T[D+q+5]=i.y,T[D+q+6]=i.z,T[D+q+7]=0),x===!0&&(i.fromBufferAttribute(z,O),T[D+q+8]=i.x,T[D+q+9]=i.y,T[D+q+10]=i.z,T[D+q+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:v,size:new et(M,w)},n.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let f=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",f),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function E1(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}function R1(s,t,e,n,i,r){let o=new Te(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Zt;h.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Lt([0,2,0,0,2,0],2));let u=new ls({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new fe(h,u),p=new ki(-1,1,1,-1,0,1),f=null,x=null,m=!1,g,_=null,y=[],M=!1;this.setSize=function(w,T){o.setSize(w,T),a!==null&&a.setSize(w,T),l!==null&&l.setSize(w,T);for(let v=0;v<y.length;v++){let S=y[v];S.setSize&&S.setSize(w,T)}},this.setEffects=function(w){y=w,M=y.length>0&&y[0].isRenderPass===!0;let T=o.width,v=o.height;y.length>0&&a===null&&(a=new Te(T,v,{type:He,depthBuffer:!1,stencilBuffer:!1}),l=new Te(T,v,{type:He,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&y.some(R=>R.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Bn(T,v),r===!0&&(c.format=fi,c.type=vs)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let R=0;R<y.length;R++){let E=y[R];E.setSize&&E.setSize(T,v),S&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(w,T){if(m||w.toneMapping===Pn&&y.length===0)return!1;if(_=T,T!==null){let v=T.width,S=T.height;(o.width!==v||o.height!==S)&&this.setSize(v,S)}return M===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=Pn,!0},this.hasRenderPass=function(){return M},this.end=function(w,T){w.toneMapping=g,m=!0;let v=o,S=a;for(let R=0;R<y.length;R++){let E=y[R];E.enabled!==!1&&(E.render(w,S,v,T),E.needsSwap!==!1&&(v=S,S=S===a?l:a))}if(f!==w.outputColorSpace||x!==w.toneMapping){f=w.outputColorSpace,x=w.toneMapping,u.defines={},le.getTransfer(f)===me&&(u.defines.SRGB_TRANSFER="");let R=C1[x];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,w.setRenderTarget(_),w.render(d,p),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}function Lo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Dg[i];if(r===void 0&&(r=new Float32Array(i),Dg[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function We(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Bu(s,t){let e=Ng[t];e===void 0&&(e=new Int32Array(t),Ng[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function P1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function I1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2fv(this.addr,t),We(e,t)}}function L1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;s.uniform3fv(this.addr,t),We(e,t)}}function D1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4fv(this.addr,t),We(e,t)}}function N1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Og.set(n),s.uniformMatrix2fv(this.addr,!1,Og),We(e,n)}}function U1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Fg.set(n),s.uniformMatrix3fv(this.addr,!1,Fg),We(e,n)}}function F1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Ug.set(n),s.uniformMatrix4fv(this.addr,!1,Ug),We(e,n)}}function O1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function B1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2iv(this.addr,t),We(e,t)}}function z1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3iv(this.addr,t),We(e,t)}}function k1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4iv(this.addr,t),We(e,t)}}function G1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function H1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2uiv(this.addr,t),We(e,t)}}function V1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3uiv(this.addr,t),We(e,t)}}function W1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4uiv(this.addr,t),We(e,t)}}function zu(s){return s.version===0&&(s.compareFunction=Lu,s.needsUpdate=!0),s}function X1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=zu(ex):r=tx,e.setTexture2D(t||r,i)}function q1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||sx,i)}function Y1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=zu(nx):r=rx,e.setTextureCube(t||r,i)}function Z1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ix,i)}function $1(s){switch(s){case 5126:return P1;case 35664:return I1;case 35665:return L1;case 35666:return D1;case 35674:return N1;case 35675:return U1;case 35676:return F1;case 5124:case 35670:return O1;case 35667:case 35671:return B1;case 35668:case 35672:return z1;case 35669:case 35673:return k1;case 5125:return G1;case 36294:return H1;case 36295:return V1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return q1;case 35680:case 36300:case 36308:case 36293:return Y1;case 36289:case 36303:case 36311:case 36292:return Z1}}function J1(s,t){s.uniform1fv(this.addr,t)}function K1(s,t){let e=Lo(t,this.size,2);s.uniform2fv(this.addr,e)}function Q1(s,t){let e=Lo(t,this.size,3);s.uniform3fv(this.addr,e)}function j1(s,t){let e=Lo(t,this.size,4);s.uniform4fv(this.addr,e)}function tb(s,t){let e=Lo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function eb(s,t){let e=Lo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function nb(s,t){let e=Lo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ib(s,t){s.uniform1iv(this.addr,t)}function sb(s,t){s.uniform2iv(this.addr,t)}function rb(s,t){s.uniform3iv(this.addr,t)}function ob(s,t){s.uniform4iv(this.addr,t)}function ab(s,t){s.uniform1uiv(this.addr,t)}function lb(s,t){s.uniform2uiv(this.addr,t)}function cb(s,t){s.uniform3uiv(this.addr,t)}function hb(s,t){s.uniform4uiv(this.addr,t)}function ub(s,t,e){let n=this.cache,i=t.length,r=Bu(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),We(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=zu(ex):o=tx;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function db(s,t,e){let n=this.cache,i=t.length,r=Bu(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||sx,r[o])}function fb(s,t,e){let n=this.cache,i=t.length,r=Bu(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),We(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=zu(nx):o=rx;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function pb(s,t,e){let n=this.cache,i=t.length,r=Bu(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ix,r[o])}function mb(s){switch(s){case 5126:return J1;case 35664:return K1;case 35665:return Q1;case 35666:return j1;case 35674:return tb;case 35675:return eb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return sb;case 35668:case 35672:return rb;case 35669:case 35673:return ob;case 5125:return ab;case 36294:return lb;case 36295:return cb;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return pb}}function Bg(s,t){s.seq.push(t),s.map[t.id]=t}function gb(s,t,e){let n=s.name,i=n.length;for(gp.lastIndex=0;;){let r=gp.exec(n),o=gp.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Bg(e,c===void 0?new _p(a,s,t):new vp(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new yp(a),Bg(e,u)),e=u}}}function zg(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}function vb(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function yb(s){le._getMatrix(kg,le.workingColorSpace,s);let t=`mat3( ${kg.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case kr:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Tt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Gg(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+vb(s.getShaderSource(t),a)}else return r}function Mb(s,t){let e=yb(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function bb(s,t){let e=Sb[t];return e===void 0?(Tt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function wb(){le.getLuminanceCoefficients(Ou);let s=Ou.x.toFixed(4),t=Ou.y.toFixed(4),e=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ec).join(`
`)}function Ab(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Eb(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ec(s){return s!==""}function Hg(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Vg(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Mp(s){return s.replace(Cb,Rb)}function Rb(s,t){let e=re[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Mp(e)}function Wg(s){return s.replace(Pb,Ib)}function Ib(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xg(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Db(s){return Lb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Ub(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Nb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Ob(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Fb[s.combine]||"ENVMAP_BLENDING_NONE"}function Bb(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Db(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ub(e),u=Ob(e),d=Tb(e),p=Ab(r),f=i.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ec).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ec).join(`
`),m.length>0&&(m+=`
`)):(x=[Xg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ec).join(`
`),m=[Xg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?re.tonemapping_pars_fragment:"",e.toneMapping!==Pn?bb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,Mb("linearToOutputTexel",e.outputColorSpace),wb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ec).join(`
`)),o=Mp(o),o=Hg(o,e),o=Vg(o,e),a=Mp(a),a=Hg(a,e),a=Vg(a,e),o=Wg(o),a=Wg(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+x+o,y=g+m+a,M=zg(i,i.VERTEX_SHADER,_),w=zg(i,i.FRAGMENT_SHADER,y);i.attachShader(f,M),i.attachShader(f,w),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function T(E){if(s.debug.checkShaderErrors){let I=i.getProgramInfoLog(f)||"",N=i.getShaderInfoLog(M)||"",z=i.getShaderInfoLog(w)||"",D=I.trim(),O=N.trim(),q=z.trim(),H=!0,st=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,M,w);else{let W=Gg(i,M,"vertex"),Z=Gg(i,w,"fragment");Gt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+D+`
`+W+`
`+Z)}else D!==""?Tt("WebGLProgram: Program Info Log:",D):(O===""||q==="")&&(st=!1);st&&(E.diagnostics={runnable:H,programLog:D,vertexShader:{log:O,prefix:x},fragmentShader:{log:q,prefix:m}})}i.deleteShader(M),i.deleteShader(w),v=new Po(i,f),S=Eb(i,f)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(f,xb)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_b++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=M,this.fragmentShader=w,this}function kb(s){return s===Vi||s===Co||s===Ro}function Gb(s,t,e,n,i,r){let o=new Vs,a=new Sp,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,S,R,E,I,N){let z=E.fog,D=I.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?E.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,H=t.get(v.envMap||O,q),st=d[v.type],W=n.precision;v.precision!==null&&(W=n.getMaxPrecision(v.precision),W!==v.precision&&Tt("WebGLProgram.getParameters:",v.precision,"not supported, using",W,"instead."));let Z=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,nt=Z!==void 0?Z.length:0,At=0;D.morphAttributes.position!==void 0&&(At=1),D.morphAttributes.normal!==void 0&&(At=2),D.morphAttributes.color!==void 0&&(At=3);let ot,G,lt,vt;if(st){let Rt=ni[st];ot=Rt.vertexShader,G=Rt.fragmentShader}else{ot=v.vertexShader,G=v.fragmentShader;let Rt=a.getVertexShaderStage(v),Me=a.getFragmentShaderStage(v);a.update(v,Rt,Me),lt=Rt.id,vt=Me.id}let kt=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),Ht=I.isInstancedMesh===!0,ye=I.isBatchedMesh===!0,Pt=!!v.map,ne=!!v.matcap,ce=!!H,it=ce&&H.isPMREMTexture===!0,gt=!!v.aoMap,ft=!!v.lightMap,Nt=!!v.bumpMap&&v.wireframe===!1,pt=!!v.normalMap,Qt=!!v.displacementMap,Bt=!!v.emissiveMap,oe=!!v.metalnessMap,ee=!!v.roughnessMap,k=v.anisotropy>0,P=v.clearcoat>0,$=v.diffuseRoughness>0,ct=v.dispersion>0,Vt=v.retroreflectivity>0,rt=v.iridescence>0,qt=v.sheen>0,Ct=v.transmission>0,Dt=k&&!!v.anisotropyMap,C=P&&!!v.clearcoatMap,b=P&&!!v.clearcoatNormalMap,B=P&&!!v.clearcoatRoughnessMap,at=$&&!!v.diffuseRoughnessMap,j=rt&&!!v.iridescenceMap,dt=rt&&!!v.iridescenceThicknessMap,xt=qt&&!!v.sheenColorMap,K=qt&&!!v.sheenRoughnessMap,Q=!!v.specularMap,yt=!!v.specularColorMap,U=!!v.specularIntensityMap,tt=Ct&&!!v.transmissionMap,J=Ct&&!!v.thicknessMap,Mt=!!v.gradientMap,mt=!!v.alphaMap,_t=v.alphaTest>0,Wt=!!v.alphaHash,ae=!!v.extensions,ut=Pn;v.toneMapped&&(kt===null||kt.isXRRenderTarget===!0)&&(ut=s.toneMapping);let Xt=it?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,ie={shaderID:st,shaderType:v.type,shaderName:v.name,vertexShader:ot,fragmentShader:G,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:vt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:W,batching:ye,batchingColor:ye&&I._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&I.instanceColor!==null,instancingMorph:Ht&&I.morphTexture!==null,outputColorSpace:kt===null?s.outputColorSpace:kt.isXRRenderTarget===!0?kt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Pt,matcap:ne,envMap:ce,envMapMode:ce&&H.mapping,envMapPMREM:it,envMapMaxLod:it?Xt.length-1:null,envMapSize:it?Xt[0].width:null,aoMap:gt,lightMap:ft,bumpMap:Nt,normalMap:pt,displacementMap:Qt,emissiveMap:Bt,normalMapObjectSpace:pt&&v.normalMapType===Zf,normalMapTangentSpace:pt&&v.normalMapType===pi,packedNormalMap:pt&&v.normalMapType===pi&&kb(v.normalMap.format),metalnessMap:oe,roughnessMap:ee,anisotropy:k,anisotropyMap:Dt,clearcoat:P,clearcoatMap:C,clearcoatNormalMap:b,clearcoatRoughnessMap:B,diffuseRoughness:$,diffuseRoughnessMap:at,dispersion:ct,retroreflection:Vt,iridescence:rt,iridescenceMap:j,iridescenceThicknessMap:dt,sheen:qt,sheenColorMap:xt,sheenRoughnessMap:K,specularMap:Q,specularColorMap:yt,specularIntensityMap:U,transmission:Ct,transmissionMap:tt,thicknessMap:J,gradientMap:Mt,opaque:v.transparent===!1&&v.blending===nr&&v.alphaToCoverage===!1,alphaMap:mt,alphaTest:_t,alphaHash:Wt,combine:v.combine,mapUv:Pt&&p(v.map.channel),aoMapUv:gt&&p(v.aoMap.channel),lightMapUv:ft&&p(v.lightMap.channel),bumpMapUv:Nt&&p(v.bumpMap.channel),normalMapUv:pt&&p(v.normalMap.channel),displacementMapUv:Qt&&p(v.displacementMap.channel),emissiveMapUv:Bt&&p(v.emissiveMap.channel),metalnessMapUv:oe&&p(v.metalnessMap.channel),roughnessMapUv:ee&&p(v.roughnessMap.channel),anisotropyMapUv:Dt&&p(v.anisotropyMap.channel),clearcoatMapUv:C&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:b&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:at&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:j&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:K&&p(v.sheenRoughnessMap.channel),specularMapUv:Q&&p(v.specularMap.channel),specularColorMapUv:yt&&p(v.specularColorMap.channel),specularIntensityMapUv:U&&p(v.specularIntensityMap.channel),transmissionMapUv:tt&&p(v.transmissionMap.channel),thicknessMapUv:J&&p(v.thicknessMap.channel),alphaMapUv:mt&&p(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(pt||k),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!D.attributes.uv&&(Pt||mt),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&pt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:wt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:At,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:N.filter(Rt=>Rt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:Pt&&v.map.isVideoTexture===!0&&le.getTransfer(v.map.colorSpace)===me,decodeVideoTextureEmissive:Bt&&v.emissiveMap.isVideoTexture===!0&&le.getTransfer(v.emissiveMap.colorSpace)===me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ei,flipSided:v.side===on,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ae&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&v.extensions.multiDraw===!0||ye)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function x(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)S.push(R),S.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(m(S,v),g(S,v),S.push(s.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function m(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function g(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function _(v){let S=d[v.type],R;if(S){let E=ni[S];R=gi.clone(E.uniforms)}else R=v.uniforms;return R}function y(v,S){let R=h.get(S);return R!==void 0?++R.usedTimes:(R=new Bb(s,S,v,i),c.push(R),h.set(S,R)),R}function M(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function T(){a.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:_,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:T}}function Hb(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Vb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function qg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Yg(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,f,x,m,g){let _=s[t];return _===void 0?(_={id:d.id,object:d,geometry:p,material:f,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},s[t]=_):(_.id=d.id,_.object=d,_.geometry=p,_.material=f,_.materialVariant=o(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=m,_.group=g),t++,_}function l(d,p,f,x,m,g,_){_.reversedDepth===!0&&(m=-m);let y=a(d,p,f,x,m,g);f.transmission>0?n.push(y):f.transparent===!0?i.push(y):e.push(y)}function c(d,p,f,x,m,g){let _=a(d,p,f,x,m,g);f.transmission>0?n.unshift(_):f.transparent===!0?i.unshift(_):e.unshift(_)}function h(d,p){e.length>1&&e.sort(d||Vb),n.length>1&&n.sort(p||qg),i.length>1&&i.sort(p||qg)}function u(){for(let d=t,p=s.length;d<p;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function Wb(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Yg,s.set(n,[o])):i>=r.length?(o=new Yg,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Xb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new ht};break;case"SpotLight":e={position:new L,direction:new L,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":e={color:new ht,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function qb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}function Zb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function $b(s){let t=new Xb,e=qb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new Yt,o=new Yt;function a(c){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,f=0,x=0,m=0,g=0,_=0,y=0,M=0,w=0,T=0,v=0,S=0,R=0,E=0;c.sort(Zb);for(let N=0,z=c.length;N<z;N++){let D=c[N],O=D.color,q=D.intensity,H=D.distance,st=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Vi?st=D.shadow.map.texture:st=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*q,u+=O.g*q,d+=O.b*q;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],q);E++}else if(D.isSunLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,nt=e.get(D);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[f]=nt,n.sunShadowMap[f]=st;let At=Z.getViewportCount();for(let ot=0;ot<At;ot++)n.sunShadowMatrix[x+ot]=Z.getMatrix(ot),n.sunShadowCascade[x+ot]=Z._cascadeData[ot];x+=At,f++}n.sun[p]=W,p++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,nt=e.get(D);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,n.directionalShadow[m]=nt,n.directionalShadowMap[m]=st,n.directionalShadowMatrix[m]=D.shadow.matrix,w++}n.directional[m]=W,m++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(O).multiplyScalar(q),W.distance=H,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[_]=W;let Z=D.shadow;if(D.map&&(n.spotLightMap[S]=D.map,S++,Z.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[_]=Z.matrix,D.castShadow){let nt=e.get(D);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,n.spotShadow[_]=nt,n.spotShadowMap[_]=st,v++}_++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(O).multiplyScalar(q),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[y]=W,y++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let Z=D.shadow,nt=e.get(D);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,nt.shadowCameraNear=Z.camera.near,nt.shadowCameraFar=Z.camera.far,n.pointShadow[g]=nt,n.pointShadowMap[g]=st,n.pointShadowMatrix[g]=D.shadow.matrix,T++}n.point[g]=W,g++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(q),W.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[M]=W,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==y||I.hemiLength!==M||I.numSunShadows!==f||I.numDirectionalShadows!==w||I.numPointShadows!==T||I.numSpotShadows!==v||I.numSpotMaps!==S||I.numLightProbes!==E)&&(n.sun.length=p,n.directional.length=m,n.spot.length=_,n.rectArea.length=y,n.point.length=g,n.hemi.length=M,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,I.sunLength=p,I.directionalLength=m,I.pointLength=g,I.spotLength=_,I.rectAreaLength=y,I.hemiLength=M,I.numSunShadows=f,I.numDirectionalShadows=w,I.numPointShadows=T,I.numSpotShadows=v,I.numSpotMaps=S,I.numLightProbes=E,n.version=Yb++)}function l(c,h){let u=0,d=0,p=0,f=0,x=0,m=0,g=h.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let M=c[_];if(M.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(g),u++}else if(M.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),d++}else if(M.isSpotLight){let w=n.spot[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let w=n.point[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),p++}else if(M.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Zg(s){let t=new $b(s),e=[],n=[],i=[];function r(u){h.camera=u,e.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Jb(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Zg(s),t.set(i,[a])):r>=o.length?(a=new Zg(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ew(s,t,e){let n=new ai,i=new et,r=new et,o=new de,a=new ao,l=new lo,c={},h=e.maxTextureSize,u={[Hi]:on,[on]:Hi,[ei]:ei},d=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Kb,fragmentShader:Qb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Zt;f.setAttribute("position",new se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new fe(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=us;let g=this.type;this.render=function(T,v,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===vf&&(Tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=us);let R=s.getRenderTarget(),E=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),N=s.state;N.setBlending(hi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=g!==this.type;z&&v.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=T.length;D<O;D++){let q=T[D],H=q.shadow;if(H===void 0){Tt("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let st=H.getFrameExtents();i.multiply(st),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,H.mapSize.y=r.y));let W=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=W,H.map===null||z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===er){if(q.isPointLight){Tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Te(i.x,i.y,{format:Vi,type:He,minFilter:we,magFilter:we,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new Bn(i.x,i.y,rn),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=oi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Le,H.map.depthTexture.magFilter=Le}else q.isPointLight?(H.map=new Io(i.x),H.map.depthTexture=new Jr(i.x,mn)):(H.map=new Te(i.x,i.y),H.map.depthTexture=new Bn(i.x,i.y,mn)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=oi,this.type===us?(H.map.depthTexture.compareFunction=W?Iu:Pu,H.map.depthTexture.minFilter=we,H.map.depthTexture.magFilter=we):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Le,H.map.depthTexture.magFilter=Le);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);let Z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();q.isPointLight!==!0&&H.updateMatrices(q,S);let nt=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let At=0;At<Z;At++){let ot=H.getCamera(At);if(q.isPointLight){let G=H.camera,lt=H.matrix,vt=q.distance||G.far;vt!==G.far&&(G.far=vt,G.updateProjectionMatrix()),tc.setFromMatrixPosition(q.matrixWorld),G.position.copy(tc),xp.copy(G.position),xp.add(jb[At]),G.up.copy(tw[At]),G.lookAt(xp),G.updateMatrixWorld(),lt.makeTranslation(-tc.x,-tc.y,-tc.z),$g.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),H._frustum.setFromProjectionMatrix($g,G.coordinateSystem,G.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,At),s.clear();else{At===0&&(s.setRenderTarget(H.map),s.clear());let G=H.getViewport(At);o.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),N.viewport(o)}n=H.getFrustum(At),M(v,S,ot,q,nt,this.type)}H.isPointLightShadow!==!0&&this.type===er&&_(H,S),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(R,E,I)};function _(T,v){let S=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Te(i.x,i.y,{format:Vi,type:He}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(v,null,S,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(v,null,S,p,x,null)}function y(T,v,S,R){let E=null,I=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)E=I;else if(E=S.isPointLight===!0?l:a,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let N=E.uuid,z=v.uuid,D=c[N];D===void 0&&(D={},c[N]=D);let O=D[z];O===void 0&&(O=E.clone(),D[z]=O,v.addEventListener("dispose",w)),E=O}if(E.visible=v.visible,E.wireframe=v.wireframe,R===er?E.side=v.shadowSide!==null?v.shadowSide:v.side:E.side=v.shadowSide!==null?v.shadowSide:u[v.side],E.alphaMap=v.alphaMap,E.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,E.map=v.map,E.clipShadows=v.clipShadows,E.clippingPlanes=v.clippingPlanes,E.clipIntersection=v.clipIntersection,E.displacementMap=v.displacementMap,E.displacementScale=v.displacementScale,E.displacementBias=v.displacementBias,E.wireframeLinewidth=v.wireframeLinewidth,E.linewidth=v.linewidth,S.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let N=s.properties.get(E);N.light=S}return E}function M(T,v,S,R,E,I){if(T.visible===!1)return;if(T.layers.test(E)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===er)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let D=t.update(T),O=T.material;if(Array.isArray(O)){let q=D.groups;for(let H=0,st=q.length;H<st;H++){let W=q[H],Z=O[W.materialIndex];if(Z&&Z.visible){let nt=y(T,Z,R,I);T.onBeforeShadow(s,T,v,S,D,nt,W),s.renderBufferDirect(S,null,D,nt,T,W),T.onAfterShadow(s,T,v,S,D,nt,W)}}}else if(O.visible){let q=y(T,O,R,I);T.onBeforeShadow(s,T,v,S,D,q,null),s.renderBufferDirect(S,null,D,q,T,null),T.onAfterShadow(s,T,v,S,D,q,null)}}let z=T.children;for(let D=0,O=z.length;D<O;D++)M(z[D],v,S,R,E,I)}function w(T){T.target.removeEventListener("dispose",w);for(let S in c){let R=c[S],E=T.target.uuid;E in R&&(R[E].dispose(),delete R[E])}}}function nw(s,t){function e(){let U=!1,tt=new de,J=null,Mt=new de(0,0,0,0);return{setMask:function(mt){J!==mt&&!U&&(s.colorMask(mt,mt,mt,mt),J=mt)},setLocked:function(mt){U=mt},setClear:function(mt,_t,Wt,ae,ut){ut===!0&&(mt*=ae,_t*=ae,Wt*=ae),tt.set(mt,_t,Wt,ae),Mt.equals(tt)===!1&&(s.clearColor(mt,_t,Wt,ae),Mt.copy(tt))},reset:function(){U=!1,J=null,Mt.set(-1,0,0,0)}}}function n(){let U=!1,tt=!1,J=null,Mt=null,mt=null;return{setReversed:function(_t){if(tt!==_t){let Wt=t.get("EXT_clip_control");_t?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),tt=_t;let ae=mt;mt=null,this.setClear(ae)}},getReversed:function(){return tt},setTest:function(_t){_t?wt(s.DEPTH_TEST):Ht(s.DEPTH_TEST)},setMask:function(_t){J!==_t&&!U&&(s.depthMask(_t),J=_t)},setFunc:function(_t){if(tt&&(_t=_g[_t]),Mt!==_t){switch(_t){case ra:s.depthFunc(s.NEVER);break;case oa:s.depthFunc(s.ALWAYS);break;case aa:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case la:s.depthFunc(s.EQUAL);break;case ca:s.depthFunc(s.GEQUAL);break;case ha:s.depthFunc(s.GREATER);break;case ua:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Mt=_t}},setLocked:function(_t){U=_t},setClear:function(_t){mt!==_t&&(mt=_t,tt&&(_t=1-_t),s.clearDepth(_t))},reset:function(){U=!1,J=null,Mt=null,mt=null,tt=!1}}}function i(){let U=!1,tt=null,J=null,Mt=null,mt=null,_t=null,Wt=null,ae=null,ut=null;return{setTest:function(Xt){U||(Xt?wt(s.STENCIL_TEST):Ht(s.STENCIL_TEST))},setMask:function(Xt){tt!==Xt&&!U&&(s.stencilMask(Xt),tt=Xt)},setFunc:function(Xt,ie,Rt){(J!==Xt||Mt!==ie||mt!==Rt)&&(s.stencilFunc(Xt,ie,Rt),J=Xt,Mt=ie,mt=Rt)},setOp:function(Xt,ie,Rt){(_t!==Xt||Wt!==ie||ae!==Rt)&&(s.stencilOp(Xt,ie,Rt),_t=Xt,Wt=ie,ae=Rt)},setLocked:function(Xt){U=Xt},setClear:function(Xt){ut!==Xt&&(s.clearStencil(Xt),ut=Xt)},reset:function(){U=!1,tt=null,J=null,Mt=null,mt=null,_t=null,Wt=null,ae=null,ut=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},u={},d={},p=new WeakMap,f=[],x=null,m=!1,g=null,_=null,y=null,M=null,w=null,T=null,v=null,S=new ht(0,0,0),R=0,E=!1,I=null,N=null,z=null,D=null,O=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,st=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=st>=1):W.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=st>=2);let Z=null,nt={},At=s.getParameter(s.SCISSOR_BOX),ot=s.getParameter(s.VIEWPORT),G=new de().fromArray(At),lt=new de().fromArray(ot);function vt(U,tt,J,Mt){let mt=new Uint8Array(4),_t=s.createTexture();s.bindTexture(U,_t),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<J;Wt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(tt,0,s.RGBA,1,1,Mt,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(tt+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return _t}let kt={};kt[s.TEXTURE_2D]=vt(s.TEXTURE_2D,s.TEXTURE_2D,1),kt[s.TEXTURE_CUBE_MAP]=vt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),kt[s.TEXTURE_2D_ARRAY]=vt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),kt[s.TEXTURE_3D]=vt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),wt(s.DEPTH_TEST),o.setFunc(zs),Nt(!1),pt(xu),wt(s.CULL_FACE),gt(hi);function wt(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Ht(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function ye(U,tt){return d[U]!==tt?(s.bindFramebuffer(U,tt),d[U]=tt,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=tt),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=tt),!0):!1}function Pt(U,tt){let J=f,Mt=!1;if(U){J=p.get(tt),J===void 0&&(J=[],p.set(tt,J));let mt=U.textures;if(J.length!==mt.length||J[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Wt=mt.length;_t<Wt;_t++)J[_t]=s.COLOR_ATTACHMENT0+_t;J.length=mt.length,Mt=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,Mt=!0);Mt&&s.drawBuffers(J)}function ne(U){return x!==U?(s.useProgram(U),x=U,!0):!1}let ce={[ds]:s.FUNC_ADD,[Mf]:s.FUNC_SUBTRACT,[Sf]:s.FUNC_REVERSE_SUBTRACT};ce[bf]=s.MIN,ce[wf]=s.MAX;let it={[Tf]:s.ZERO,[Af]:s.ONE,[Ef]:s.SRC_COLOR,[yu]:s.SRC_ALPHA,[Df]:s.SRC_ALPHA_SATURATE,[If]:s.DST_COLOR,[Rf]:s.DST_ALPHA,[Cf]:s.ONE_MINUS_SRC_COLOR,[Mu]:s.ONE_MINUS_SRC_ALPHA,[Lf]:s.ONE_MINUS_DST_COLOR,[Pf]:s.ONE_MINUS_DST_ALPHA,[Nf]:s.CONSTANT_COLOR,[Uf]:s.ONE_MINUS_CONSTANT_COLOR,[Ff]:s.CONSTANT_ALPHA,[Of]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(U,tt,J,Mt,mt,_t,Wt,ae,ut,Xt){if(U===hi){m===!0&&(Ht(s.BLEND),m=!1);return}if(m===!1&&(wt(s.BLEND),m=!0),U!==yf){if(U!==g||Xt!==E){if((_!==ds||w!==ds)&&(s.blendEquation(s.FUNC_ADD),_=ds,w=ds),Xt)switch(U){case nr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xo:s.blendFunc(s.ONE,s.ONE);break;case _u:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",U);break}else switch(U){case nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case _u:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vu:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",U);break}y=null,M=null,T=null,v=null,S.set(0,0,0),R=0,g=U,E=Xt}return}mt=mt||tt,_t=_t||J,Wt=Wt||Mt,(tt!==_||mt!==w)&&(s.blendEquationSeparate(ce[tt],ce[mt]),_=tt,w=mt),(J!==y||Mt!==M||_t!==T||Wt!==v)&&(s.blendFuncSeparate(it[J],it[Mt],it[_t],it[Wt]),y=J,M=Mt,T=_t,v=Wt),(ae.equals(S)===!1||ut!==R)&&(s.blendColor(ae.r,ae.g,ae.b,ut),S.copy(ae),R=ut),g=U,E=!1}function ft(U,tt){U.side===ei?Ht(s.CULL_FACE):wt(s.CULL_FACE);let J=U.side===on;tt&&(J=!J),Nt(J),U.blending===nr&&U.transparent===!1?gt(hi):gt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Mt=U.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Bt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?wt(s.SAMPLE_ALPHA_TO_COVERAGE):Ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(U){I!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),I=U)}function pt(U){U!==xf?(wt(s.CULL_FACE),U!==N&&(U===xu?s.cullFace(s.BACK):U===_f?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ht(s.CULL_FACE),N=U}function Qt(U){U!==z&&(H&&s.lineWidth(U),z=U)}function Bt(U,tt,J){U?(wt(s.POLYGON_OFFSET_FILL),(D!==tt||O!==J)&&(D=tt,O=J,o.getReversed()&&(tt=-tt,J=-J),s.polygonOffset(tt,J))):Ht(s.POLYGON_OFFSET_FILL)}function oe(U){U?wt(s.SCISSOR_TEST):Ht(s.SCISSOR_TEST)}function ee(U){U===void 0&&(U=s.TEXTURE0+q-1),Z!==U&&(s.activeTexture(U),Z=U)}function k(U,tt,J){J===void 0&&(Z===null?J=s.TEXTURE0+q-1:J=Z);let Mt=nt[J];Mt===void 0&&(Mt={type:void 0,texture:void 0},nt[J]=Mt),(Mt.type!==U||Mt.texture!==tt)&&(Z!==J&&(s.activeTexture(J),Z=J),s.bindTexture(U,tt||kt[U]),Mt.type=U,Mt.texture=tt)}function P(){let U=nt[Z];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{s.compressedTexImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function ct(){try{s.compressedTexImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function Vt(){try{s.texSubImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function rt(){try{s.texSubImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function qt(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function Ct(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function Dt(){try{s.texStorage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function C(){try{s.texStorage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function b(){try{s.texImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function B(){try{s.texImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function at(U){return u[U]!==void 0?u[U]:s.getParameter(U)}function j(U,tt){u[U]!==tt&&(s.pixelStorei(U,tt),u[U]=tt)}function dt(U){G.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),G.copy(U))}function xt(U){lt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),lt.copy(U))}function K(U,tt){let J=c.get(tt);J===void 0&&(J=new WeakMap,c.set(tt,J));let Mt=J.get(U);Mt===void 0&&(Mt=s.getUniformBlockIndex(tt,U.name),s.uniformBlockBinding(tt,Mt,Mt),J.set(U,Mt))}function Q(U,tt,J){let mt=c.get(tt).get(U);l[mt]!==J&&(s.bindBufferBase(s.UNIFORM_BUFFER,mt,J),l[mt]=J)}function yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,nt={},d={},l={},p=new WeakMap,f=[],x=null,m=!1,g=null,_=null,y=null,M=null,w=null,T=null,v=null,S=new ht(0,0,0),R=0,E=!1,I=null,N=null,z=null,D=null,O=null,G.set(0,0,s.canvas.width,s.canvas.height),lt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:wt,disable:Ht,bindFramebuffer:ye,drawBuffers:Pt,useProgram:ne,setBlending:gt,setMaterial:ft,setFlipSided:Nt,setCullFace:pt,setLineWidth:Qt,setPolygonOffset:Bt,setScissorTest:oe,activeTexture:ee,bindTexture:k,unbindTexture:P,compressedTexImage2D:$,compressedTexImage3D:ct,texImage2D:b,texImage3D:B,pixelStorei:j,getParameter:at,updateUBOMapping:K,uniformBlockBinding:Q,texStorage2D:Dt,texStorage3D:C,texSubImage2D:Vt,texSubImage3D:rt,compressedTexSubImage2D:qt,compressedTexSubImage3D:Ct,scissor:dt,viewport:xt,reset:yt}}function iw(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap,u=new Set,d,p=new WeakMap,f=new Set,x=new FinalizationRegistry(C=>f.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return m?new OffscreenCanvas(C,b):Gr("canvas")}function _(C,b,B){let at=1,j=Dt(C);if((j.width>B||j.height>B)&&(at=B/Math.max(j.width,j.height)),at<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let dt=Math.floor(at*j.width),xt=Math.floor(at*j.height);d===void 0&&(d=g(dt,xt));let K=b?g(dt,xt):d;return K.width=dt,K.height=xt,K.getContext("2d").drawImage(C,0,0,dt,xt),Tt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+dt+"x"+xt+")."),K}else return"data"in C&&Tt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function y(C){return C.generateMipmaps}function M(C){s.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(C,b,B,at,j,dt=!1){if(C!==null){if(s[C]!==void 0)return s[C];Tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xt;at&&(xt=t.get("EXT_texture_norm16"),xt||Tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=b;if(b===s.RED&&(B===s.FLOAT&&(K=s.R32F),B===s.HALF_FLOAT&&(K=s.R16F),B===s.UNSIGNED_BYTE&&(K=s.R8),B===s.UNSIGNED_SHORT&&xt&&(K=xt.R16_EXT),B===s.SHORT&&xt&&(K=xt.R16_SNORM_EXT)),b===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.R8UI),B===s.UNSIGNED_SHORT&&(K=s.R16UI),B===s.UNSIGNED_INT&&(K=s.R32UI),B===s.BYTE&&(K=s.R8I),B===s.SHORT&&(K=s.R16I),B===s.INT&&(K=s.R32I)),b===s.RG&&(B===s.FLOAT&&(K=s.RG32F),B===s.HALF_FLOAT&&(K=s.RG16F),B===s.UNSIGNED_BYTE&&(K=s.RG8),B===s.UNSIGNED_SHORT&&xt&&(K=xt.RG16_EXT),B===s.SHORT&&xt&&(K=xt.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RG8UI),B===s.UNSIGNED_SHORT&&(K=s.RG16UI),B===s.UNSIGNED_INT&&(K=s.RG32UI),B===s.BYTE&&(K=s.RG8I),B===s.SHORT&&(K=s.RG16I),B===s.INT&&(K=s.RG32I)),b===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGB8UI),B===s.UNSIGNED_SHORT&&(K=s.RGB16UI),B===s.UNSIGNED_INT&&(K=s.RGB32UI),B===s.BYTE&&(K=s.RGB8I),B===s.SHORT&&(K=s.RGB16I),B===s.INT&&(K=s.RGB32I)),b===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),B===s.UNSIGNED_INT&&(K=s.RGBA32UI),B===s.BYTE&&(K=s.RGBA8I),B===s.SHORT&&(K=s.RGBA16I),B===s.INT&&(K=s.RGBA32I)),b===s.RGB&&(B===s.UNSIGNED_SHORT&&xt&&(K=xt.RGB16_EXT),B===s.SHORT&&xt&&(K=xt.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),b===s.RGBA){let Q=dt?kr:le.getTransfer(j);B===s.FLOAT&&(K=s.RGBA32F),B===s.HALF_FLOAT&&(K=s.RGBA16F),B===s.UNSIGNED_BYTE&&(K=Q===me?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&xt&&(K=xt.RGBA16_EXT),B===s.SHORT&&xt&&(K=xt.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(C,b){let B;return C?b===null||b===mn||b===vs?B=s.DEPTH24_STENCIL8:b===rn?B=s.DEPTH32F_STENCIL8:b===sr&&(B=s.DEPTH24_STENCIL8,Tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===mn||b===vs?B=s.DEPTH_COMPONENT24:b===rn?B=s.DEPTH_COMPONENT32F:b===sr&&(B=s.DEPTH_COMPONENT16),B}function S(C,b){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==Le&&C.minFilter!==we?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function R(C){let b=new WeakRef(C);n.get(C).__ref=b,f.add(b),x.register(C,b,b)}function E(C){let b=n.get(C).__ref;b!==void 0&&(f.delete(b),x.unregister(b))}function I(C){z(C.target)}function N(C){D(C.target)}function z(C){C.removeEventListener("dispose",I),E(C),q(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function D(C){C.removeEventListener("dispose",N),E(C),st(C)}function O(){for(let C of f){let b=C.deref();b!==void 0&&(b.isRenderTarget===!0?D(b):z(b))}f.clear(),u.clear()}function q(C){let b=n.get(C);if(b.__webglInit===void 0)return;let B=C.source,at=p.get(B);if(at){let j=at[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&H(C),Object.keys(at).length===0&&p.delete(B)}n.remove(C)}function H(C){let b=n.get(C);s.deleteTexture(b.__webglTexture);let B=C.source,at=p.get(B);delete at[b.__cacheKey],o.memory.textures--}function st(C){let b=n.get(C);b.__depthDisposeCallback&&b.__depthDisposeCallback();let B=C.depthTexture;if(B&&B.renderTarget===C&&z(B),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let dt=0;dt<b.__webglFramebuffer[j].length;dt++)s.deleteFramebuffer(b.__webglFramebuffer[j][dt]);else s.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)s.deleteFramebuffer(b.__webglFramebuffer[j]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let at=C.textures;for(let j=0,dt=at.length;j<dt;j++){let xt=n.get(at[j]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(at[j])}n.remove(C)}let W=0;function Z(){W=0}function nt(){return W}function At(C){W=C}function ot(){let C=W;return C>=i.maxTextures&&Tt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,C}function G(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.mipmapsAutoUpdate),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function lt(C,b){let B=n.get(C);if(C.isVideoTexture&&qt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let at=C.image;if(at===null)Tt("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Tt("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(B,C,b);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+b)}function vt(C,b){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){ft(B,C,b);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+b)}function kt(C,b){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){ft(B,C,b);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+b)}function wt(C,b){let B=n.get(C);if(C.version>0&&B.__version!==C.version){Nt(B,C,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+b)}let Ht={[Ur]:s.REPEAT,[hn]:s.CLAMP_TO_EDGE,[Fr]:s.MIRRORED_REPEAT},ye={[Le]:s.NEAREST,[Su]:s.NEAREST_MIPMAP_NEAREST,[ir]:s.NEAREST_MIPMAP_LINEAR,[we]:s.LINEAR,[So]:s.LINEAR_MIPMAP_NEAREST,[Gn]:s.LINEAR_MIPMAP_LINEAR},Pt={[Jf]:s.NEVER,[Lu]:s.ALWAYS,[Kf]:s.LESS,[Pu]:s.LEQUAL,[Qf]:s.EQUAL,[Iu]:s.GEQUAL,[jf]:s.GREATER,[tp]:s.NOTEQUAL};function ne(C,b){if(b.type===rn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===we||b.magFilter===So||b.magFilter===ir||b.magFilter===Gn||b.minFilter===we||b.minFilter===So||b.minFilter===ir||b.minFilter===Gn)&&Tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Ht[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Ht[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Ht[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ye[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ye[b.minFilter]),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Pt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Le||b.minFilter!==ir&&b.minFilter!==Gn||b.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ce(C,b){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",I),R(b));let at=b.source,j=p.get(at);j===void 0&&(j={},p.set(at,j));let dt=G(b);if(dt!==C.__cacheKey){j[dt]===void 0&&(j[dt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[dt].usedTimes++;let xt=j[C.__cacheKey];xt!==void 0&&(j[C.__cacheKey].usedTimes--,xt.usedTimes===0&&H(b)),C.__cacheKey=dt,C.__webglTexture=j[dt].texture}return B}function it(C,b,B){return Math.floor(Math.floor(C/B)/b)}function gt(C,b,B,at){let dt=C.updateRanges;if(dt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,B,at,b.data);else{dt.sort((U,tt)=>U.start-tt.start);let xt=0;for(let U=1;U<dt.length;U++){let tt=dt[xt],J=dt[U],Mt=tt.start+tt.count,mt=it(J.start,b.width,4),_t=it(tt.start,b.width,4);J.start<=Mt+1&&mt===_t&&it(J.start+J.count-1,b.width,4)===mt?tt.count=Math.max(tt.count,J.start+J.count-tt.start):(++xt,dt[xt]=J)}dt.length=xt+1;let K=e.getParameter(s.UNPACK_ROW_LENGTH),Q=e.getParameter(s.UNPACK_SKIP_PIXELS),yt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let U=0,tt=dt.length;U<tt;U++){let J=dt[U],Mt=Math.floor(J.start/4),mt=Math.ceil(J.count/4),_t=Mt%b.width,Wt=Math.floor(Mt/b.width),ae=mt,ut=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(s.UNPACK_SKIP_ROWS,Wt),e.texSubImage2D(s.TEXTURE_2D,0,_t,Wt,ae,ut,B,at,b.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,K),e.pixelStorei(s.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(s.UNPACK_SKIP_ROWS,yt)}}function ft(C,b,B){let at=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(at=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(at=s.TEXTURE_3D);let j=ce(C,b),dt=b.source;e.bindTexture(at,C.__webglTexture,s.TEXTURE0+B);let xt=n.get(dt);if(dt.version!==xt.__version||j===!0){if(e.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ut=le.getPrimaries(le.workingColorSpace),Xt=b.colorSpace===mi?null:le.getPrimaries(b.colorSpace),ie=b.colorSpace===mi||ut===Xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let Q=_(b.image,!1,i.maxTextureSize);Q=Ct(b,Q);let yt=r.convert(b.format,b.colorSpace),U=r.convert(b.type),tt=T(b.internalFormat,yt,U,b.normalized,b.colorSpace,b.isVideoTexture);ne(at,b);let J,Mt=b.mipmaps,mt=b.isVideoTexture!==!0,_t=xt.__version===void 0||j===!0,Wt=dt.dataReady,ae=S(b,Q);if(b.isDepthTexture)tt=v(b.format===fi,b.type),_t&&(mt?e.texStorage2D(s.TEXTURE_2D,1,tt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,tt,Q.width,Q.height,0,yt,U,null));else if(b.isDataTexture)if(Mt.length>0){mt&&_t&&e.texStorage2D(s.TEXTURE_2D,ae,tt,Mt[0].width,Mt[0].height);for(let ut=0,Xt=Mt.length;ut<Xt;ut++)J=Mt[ut],mt?Wt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,J.width,J.height,yt,U,J.data):e.texImage2D(s.TEXTURE_2D,ut,tt,J.width,J.height,0,yt,U,J.data);b.generateMipmaps=!1}else mt?(_t&&e.texStorage2D(s.TEXTURE_2D,ae,tt,Q.width,Q.height),Wt&&gt(b,Q,yt,U)):e.texImage2D(s.TEXTURE_2D,0,tt,Q.width,Q.height,0,yt,U,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){mt&&_t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ae,tt,Mt[0].width,Mt[0].height,Q.depth);for(let ut=0,Xt=Mt.length;ut<Xt;ut++)if(J=Mt[ut],b.format!==dn)if(yt!==null)if(mt){if(Wt)if(b.layerUpdates.size>0){let ie=Uu(J.width,J.height,b.format,b.type);for(let Rt of b.layerUpdates){let Me=J.data.subarray(Rt*ie/J.data.BYTES_PER_ELEMENT,(Rt+1)*ie/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,Rt,J.width,J.height,1,yt,Me)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,J.width,J.height,Q.depth,yt,J.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,tt,J.width,J.height,Q.depth,0,J.data,0,0);else Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?Wt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,J.width,J.height,Q.depth,yt,U,J.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ut,tt,J.width,J.height,Q.depth,0,yt,U,J.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{mt&&_t&&e.texStorage2D(s.TEXTURE_2D,ae,tt,Mt[0].width,Mt[0].height);for(let ut=0,Xt=Mt.length;ut<Xt;ut++)J=Mt[ut],b.format!==dn?yt!==null?mt?Wt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,J.width,J.height,yt,J.data):e.compressedTexImage2D(s.TEXTURE_2D,ut,tt,J.width,J.height,0,J.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?Wt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,J.width,J.height,yt,U,J.data):e.texImage2D(s.TEXTURE_2D,ut,tt,J.width,J.height,0,yt,U,J.data)}else if(b.isDataArrayTexture)if(mt){if(_t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ae,tt,Q.width,Q.height,Q.depth),Wt)if(b.layerUpdates.size>0){let ut=Uu(Q.width,Q.height,b.format,b.type);for(let Xt of b.layerUpdates){let ie=Q.data.subarray(Xt*ut/Q.data.BYTES_PER_ELEMENT,(Xt+1)*ut/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Xt,Q.width,Q.height,1,yt,U,ie)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,yt,U,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,Q.width,Q.height,Q.depth,0,yt,U,Q.data);else if(b.isData3DTexture)mt?(_t&&e.texStorage3D(s.TEXTURE_3D,ae,tt,Q.width,Q.height,Q.depth),Wt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,yt,U,Q.data)):e.texImage3D(s.TEXTURE_3D,0,tt,Q.width,Q.height,Q.depth,0,yt,U,Q.data);else if(b.isFramebufferTexture){if(_t)if(mt)e.texStorage2D(s.TEXTURE_2D,ae,tt,Q.width,Q.height);else{let ut=Q.width,Xt=Q.height;for(let ie=0;ie<ae;ie++)e.texImage2D(s.TEXTURE_2D,ie,tt,ut,Xt,0,yt,U,null),ut>>=1,Xt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let ut=s.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),Q.parentNode!==ut){ut.appendChild(Q),u.add(b),ut.onpaint=Xt=>{let ie=Xt.changedElements;for(let Rt of u)ie.includes(Rt.image)&&(Rt.needsUpdate=!0)},ut.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Q);else{let ie=s.RGBA,Rt=s.RGBA,Me=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ie,Rt,Me,Q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(mt&&_t){let ut=Dt(Mt[0]);e.texStorage2D(s.TEXTURE_2D,ae,tt,ut.width,ut.height)}for(let ut=0,Xt=Mt.length;ut<Xt;ut++)J=Mt[ut],mt?Wt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,yt,U,J):e.texImage2D(s.TEXTURE_2D,ut,tt,yt,U,J);b.generateMipmaps=!1}else if(mt){if(_t){let ut=Dt(Q);e.texStorage2D(s.TEXTURE_2D,ae,tt,ut.width,ut.height)}Wt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,U,Q)}else e.texImage2D(s.TEXTURE_2D,0,tt,yt,U,Q);y(b)&&b.mipmapsAutoUpdate===!0&&M(at),xt.__version=dt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Nt(C,b,B){if(b.image.length!==6)return;let at=ce(C,b),j=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+B);let dt=n.get(j);if(j.version!==dt.__version||at===!0){e.activeTexture(s.TEXTURE0+B);let xt=le.getPrimaries(le.workingColorSpace),K=b.colorSpace===mi?null:le.getPrimaries(b.colorSpace),Q=b.colorSpace===mi||xt===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let yt=b.isCompressedTexture||b.image[0].isCompressedTexture,U=b.image[0]&&b.image[0].isDataTexture,tt=[];for(let Rt=0;Rt<6;Rt++)!yt&&!U?tt[Rt]=_(b.image[Rt],!0,i.maxCubemapSize):tt[Rt]=U?b.image[Rt].image:b.image[Rt],tt[Rt]=Ct(b,tt[Rt]);let J=tt[0],Mt=r.convert(b.format,b.colorSpace),mt=r.convert(b.type),_t=T(b.internalFormat,Mt,mt,b.normalized,b.colorSpace),Wt=b.isVideoTexture!==!0,ae=dt.__version===void 0||at===!0,ut=j.dataReady,Xt=S(b,J);ne(s.TEXTURE_CUBE_MAP,b);let ie;if(b.isDepthTexture){if(_t=v(b.format===fi,b.type),ae)if(Wt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,_t,J.width,J.height);else for(let Rt=0;Rt<6;Rt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,_t,J.width,J.height,0,Mt,mt,null)}else if(yt){Wt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Xt,_t,J.width,J.height);for(let Rt=0;Rt<6;Rt++){ie=tt[Rt].mipmaps;for(let Me=0;Me<ie.length;Me++){let Xe=ie[Me];b.format!==dn?Mt!==null?Wt?ut&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Me,0,0,Xe.width,Xe.height,Mt,Xe.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Me,_t,Xe.width,Xe.height,0,Xe.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Me,0,0,Xe.width,Xe.height,Mt,mt,Xe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Me,_t,Xe.width,Xe.height,0,Mt,mt,Xe.data)}}}else{if(ie=b.mipmaps,Wt&&ae){ie.length>0&&Xt++;let Rt=Dt(tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Xt,_t,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(U){Wt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,tt[Rt].width,tt[Rt].height,Mt,mt,tt[Rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,_t,tt[Rt].width,tt[Rt].height,0,Mt,mt,tt[Rt].data);for(let Me=0;Me<ie.length;Me++){let qi=ie[Me].image[Rt].image;Wt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Me+1,0,0,qi.width,qi.height,Mt,mt,qi.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Me+1,_t,qi.width,qi.height,0,Mt,mt,qi.data)}}else{Wt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Mt,mt,tt[Rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,_t,Mt,mt,tt[Rt]);for(let Me=0;Me<ie.length;Me++){let Xe=ie[Me];Wt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Me+1,0,0,Mt,mt,Xe.image[Rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Me+1,_t,Mt,mt,Xe.image[Rt])}}}y(b)&&b.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),dt.__version=j.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function pt(C,b,B,at,j,dt){let xt=r.convert(B.format,B.colorSpace),K=r.convert(B.type),Q=T(B.internalFormat,xt,K,B.normalized,B.colorSpace),yt=n.get(b),U=n.get(B);if(U.__renderTarget=b,!yt.__hasExternalTextures){let tt=Math.max(1,b.width>>dt),J=Math.max(1,b.height>>dt);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,dt,Q,tt,J,b.depth,0,xt,K,null):e.texImage2D(j,dt,Q,tt,J,0,xt,K,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),rt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,j,U.__webglTexture,0,Vt(b)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,at,j,U.__webglTexture,dt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Qt(C,b,B){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer){let at=b.depthTexture,j=at&&at.isDepthTexture?at.type:null,dt=v(b.stencilBuffer,j),xt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;rt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(b),dt,b.width,b.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(b),dt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,dt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,C)}else{let at=b.textures;for(let j=0;j<at.length;j++){let dt=at[j],xt=r.convert(dt.format,dt.colorSpace),K=r.convert(dt.type),Q=T(dt.internalFormat,xt,K,dt.normalized,dt.colorSpace);rt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(b),Q,b.width,b.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(b),Q,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Q,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Bt(C,b,B){let at=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(b.depthTexture);j.__renderTarget=b;let dt=at?b.depthTexture.image[0]:b.depthTexture.image;(!j.__webglTexture||dt.width!==b.width||dt.height!==b.height)&&(dt.width=b.width,dt.height=b.height,b.depthTexture.needsUpdate=!0),at?wt(b.depthTexture,0):lt(b.depthTexture,0);let xt=j.__webglTexture,K=Vt(b),Q=at?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,yt=b.depthTexture.format===fi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===oi)rt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,Q,xt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,yt,Q,xt,0);else if(b.depthTexture.format===fi)rt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,Q,xt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,yt,Q,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(C){let b=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let at=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),at){let j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,at.removeEventListener("dispose",j)};at.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=at}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let at=0;at<6;at++)Bt(b.__webglFramebuffer[at],C,at);else C.texture.mipmaps.length>0?Bt(b.__webglFramebuffer[0],C,0):Bt(b.__webglFramebuffer,C,0);else if(B){b.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[at]),b.__webglDepthbuffer[at]===void 0)b.__webglDepthbuffer[at]=s.createRenderbuffer(),Qt(b.__webglDepthbuffer[at],C,!1);else{let j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer[at];s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,dt)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Qt(b.__webglDepthbuffer,C,!1);else{let j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,dt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(C,b,B){let at=n.get(C);b!==void 0&&pt(at.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&oe(C)}function k(C){let b=C.texture,B=n.get(C),at=n.get(b);C.addEventListener("dispose",N),R(C);let j=C.textures,dt=C.isWebGLCubeRenderTarget===!0,xt=j.length>1;if(xt||(at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture()),at.__version=b.version,o.memory.textures++),dt){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(b.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let Q=0;Q<b.mipmaps.length;Q++)B.__webglFramebuffer[K][Q]=s.createFramebuffer()}else B.__webglFramebuffer[K]=s.createFramebuffer()}else{if(b.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<b.mipmaps.length;K++)B.__webglFramebuffer[K]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(xt)for(let K=0,Q=j.length;K<Q;K++){let yt=n.get(j[K]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&rt(C)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){let Q=j[K];B.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let yt=r.convert(Q.format,Q.colorSpace),U=r.convert(Q.type),tt=T(Q.internalFormat,yt,U,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),J=Vt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,J,tt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,B.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Qt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture),ne(s.TEXTURE_CUBE_MAP,b);for(let K=0;K<6;K++)if(b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)pt(B.__webglFramebuffer[K][Q],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else pt(B.__webglFramebuffer[K],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);y(b)?M(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(xt){for(let K=0,Q=j.length;K<Q;K++){let yt=j[K],U=n.get(yt),tt=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(tt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,U.__webglTexture),ne(tt,yt),pt(B.__webglFramebuffer,C,yt,s.COLOR_ATTACHMENT0+K,tt,0),y(yt)&&M(tt)}e.unbindTexture()}else{let K=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,at.__webglTexture),ne(K,b),b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)pt(B.__webglFramebuffer[Q],C,b,s.COLOR_ATTACHMENT0,K,Q);else pt(B.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,K,0);y(b)?M(K):b.mipmaps.length>0&&s.texParameteri(K,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&oe(C)}function P(C){let b=C.textures;for(let B=0,at=b.length;B<at;B++){let j=b[B];if(y(j)&&j.mipmapsAutoUpdate===!0){let dt=w(C),xt=n.get(j).__webglTexture;e.bindTexture(dt,xt),M(dt),e.unbindTexture()}}}let $=[];function ct(C){if(C.samples>0){if(rt(C)===!1){let b=C.textures,B=C.width,at=C.height,j=s.COLOR_BUFFER_BIT,dt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=n.get(C),K=b.length>1;if(K)for(let yt=0;yt<b.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let yt=0;yt<b.length;yt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);let U=n.get(b[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,U,0)}s.blitFramebuffer(0,0,B,at,0,0,B,at,j,s.NEAREST),l===!0&&($.length=0,$.push(s.COLOR_ATTACHMENT0+yt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&$.push(dt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let yt=0;yt<b.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);let U=n.get(b[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,U,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Vt(C){return Math.min(i.maxSamples,C.samples)}function rt(C){let b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function qt(C){let b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Ct(C,b){let B=C.colorSpace,at=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==zr&&B!==mi&&(le.getTransfer(B)===me?(at!==dn||j!==pn)&&Tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",B)),b}function Dt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=ot,this.resetTextureUnits=Z,this.getTextureUnits=nt,this.setTextureUnits=At,this.setTexture2D=lt,this.setTexture2DArray=vt,this.setTexture3D=kt,this.setTextureCube=wt,this.rebindTextures=ee,this.setupRenderTarget=k,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=rt,this.dispose=O}function ox(s,t){function e(n,i=mi){let r,o=le.getTransfer(i);if(n===pn)return s.UNSIGNED_BYTE;if(n===xl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Tu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Au)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===bu)return s.BYTE;if(n===wu)return s.SHORT;if(n===sr)return s.UNSIGNED_SHORT;if(n===gl)return s.INT;if(n===mn)return s.UNSIGNED_INT;if(n===rn)return s.FLOAT;if(n===He)return s.HALF_FLOAT;if(n===Eu)return s.ALPHA;if(n===Cu)return s.RGB;if(n===dn)return s.RGBA;if(n===oi)return s.DEPTH_COMPONENT;if(n===fi)return s.DEPTH_STENCIL;if(n===vl)return s.RED;if(n===bo)return s.RED_INTEGER;if(n===Vi)return s.RG;if(n===yl)return s.RG_INTEGER;if(n===Ml)return s.RGBA_INTEGER;if(n===wo||n===To||n===Ao||n===Eo)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sl||n===bl||n===wl||n===Tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===El||n===Cl||n===Rl||n===Pl||n===Co||n===Il)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Al||n===El)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Rl)return r.COMPRESSED_R11_EAC;if(n===Pl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Co)return r.COMPRESSED_RG11_EAC;if(n===Il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Gl||n===Hl||n===Vl||n===Wl||n===Xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ll)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ol)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ql||n===Yl||n===Zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ql)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===Jl||n===Ro||n===Kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}function aw(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,op(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,_,y,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&p(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),f(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===on&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===on&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=t.get(g),y=_.envMap,M=_.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(ow.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ax),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=y*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===on&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lw(s,t,e,n){let i={},r={};function o(_,y){let M=y.program;n.uniformBlockBinding(_,M,i[_.id])}function a(_,y){let M=i[_.id];M===void 0&&(f(_),M=l(_),i[_.id]=M,_.addEventListener("dispose",m));let w=y.program;n.updateUBOMapping(_,w);let T=t.render.frame;r[_.id]!==T&&(c(_),r[_.id]=T)}function l(_){let y=s.createBuffer(),M=_.__size,w=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,M,w),s.bindBuffer(s.UNIFORM_BUFFER,null),y}function c(_){let y=i[_.id],M=_.uniforms,w=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,v=M.length;T<v;T++){let S=M[T];if(Array.isArray(S))for(let R=0,E=S.length;R<E;R++)h(S[R],T,R,w);else h(S,T,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(_,y,M,w){if(d(_,y,M,w)===!0){let T=_.__offset,v=_.value;if(Array.isArray(v)){let S=0;for(let R=0;R<v.length;R++){let E=v[R],I=x(E,!0);u(E,_.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,_.__data)}}function u(_,y,M){typeof _=="number"||typeof _=="boolean"?y[M]=_:_.isMatrix3?(y[M]=_.elements[0],y[M+1]=_.elements[1],y[M+2]=_.elements[2],y[M+3]=0,y[M+4]=_.elements[3],y[M+5]=_.elements[4],y[M+6]=_.elements[5],y[M+7]=0,y[M+8]=_.elements[6],y[M+9]=_.elements[7],y[M+10]=_.elements[8],y[M+11]=0):ArrayBuffer.isView(_)?y.set(_.subarray(0,y.length-M),M):_.toArray(y,M)}function d(_,y,M,w){let T=_.value,v=y+"_"+M;if(Array.isArray(T)){w[v]===void 0&&(w[v]=[]);let S=w[v],R=!1;for(let E=0;E<T.length;E++)p(T[E],S,E)===!0&&(R=!0);return R}return p(T,w,v)}function p(_,y,M){if(y[M]===void 0)return typeof _=="number"||typeof _=="boolean"?y[M]=_:ArrayBuffer.isView(_)?y[M]=_.slice():y[M]=_.clone(),!0;{let w=y[M];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return y[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function f(_){let y=_.uniforms,M=0,w=16;for(let v=0,S=y.length;v<S;v++){let R=Array.isArray(y[v])?y[v]:[y[v]];for(let E=0,I=R.length;E<I;E++){let N=R[E],z=Array.isArray(N.value)?N.value:[N.value],D=Array.isArray(y[v])||Array.isArray(N.value),O=M;for(let H=0,st=z.length;H<st;H++){let W=z[H],Z=x(W,D),nt=M%w,At=nt%Z.boundary,ot=nt+At;M+=At,ot!==0&&w-ot<Z.storage&&(M+=w-ot),H===0&&(O=M),M+=Z.storage}let q=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new q((M-O)/Float32Array.BYTES_PER_ELEMENT),N.__offset=O}}let T=M%w;return T>0&&(M+=w-T),_.__size=M,_.__cache={},this}function x(_,y){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?Tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Tt("WebGLRenderer: Unsupported uniform value type.",_),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(_){let y=_.target;y.removeEventListener("dispose",m),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function g(){for(let _ in i)s.deleteBuffer(i[_]);i={},r={}}return{bind:o,update:a,dispose:g}}function hw(){return xi===null&&(xi=new un(cw,16,16,Vi,He),xi.name="DFG_LUT",xi.minFilter=we,xi.magFilter=we,xi.wrapS=hn,xi.wrapT=hn,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var Cy,Ry,Py,Iy,Ly,Dy,Ny,Uy,Fy,Oy,By,zy,ky,Gy,Hy,Vy,Wy,Xy,qy,Yy,Zy,$y,Jy,Ky,Qy,jy,tM,eM,nM,iM,sM,rM,oM,aM,lM,cM,hM,uM,dM,fM,pM,mM,gM,xM,_M,vM,yM,MM,SM,bM,wM,TM,AM,EM,CM,RM,PM,IM,LM,DM,NM,UM,FM,OM,BM,zM,kM,GM,HM,VM,WM,XM,qM,YM,ZM,$M,JM,KM,QM,jM,tS,eS,nS,iS,sS,rS,oS,aS,lS,cS,hS,uS,dS,fS,pS,mS,gS,xS,_S,vS,yS,MS,SS,bS,wS,TS,AS,ES,CS,RS,PS,IS,LS,DS,NS,US,FS,OS,BS,zS,kS,GS,HS,VS,WS,XS,qS,YS,ZS,$S,JS,KS,QS,jS,t1,e1,n1,i1,s1,r1,o1,re,Et,ni,Fu,a1,Kg,Io,Rg,f1,p1,Qg,jg,m1,g1,x1,Wi,C1,tx,ex,nx,ix,sx,rx,Dg,Ng,Ug,Fg,Og,_p,vp,yp,gp,Po,xb,_b,kg,Sb,Ou,Cb,Pb,Lb,Nb,Fb,zb,Sp,bp,Yb,Kb,Qb,jb,tw,$g,tc,xp,sw,rw,wp,Tp,ow,ax,cw,xi,nc,Oe=ge(()=>{mp();mp();Cy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ry=`#ifdef USE_ALPHAHASH
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
#endif`,Py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ny=`#ifdef USE_AOMAP
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
#endif`,Uy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fy=`#ifdef USE_BATCHING
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
#endif`,Oy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,By=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ky=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gy=`#ifdef USE_IRIDESCENCE
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
#endif`,Hy=`#ifdef USE_BUMPMAP
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
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ky=`#define PI 3.141592653589793
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
} // validated`,Qy=`vec3 transformedNormal = objectNormal;
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
#endif`,jy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iM="gl_FragColor = linearToOutputTexel( gl_FragColor );",sM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
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
#endif`,lM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cM=`#ifdef USE_ENVMAP
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
#endif`,hM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pM=`#ifdef USE_GRADIENTMAP
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
}`,mM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_M=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vM=`#ifdef USE_ENVMAP
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
#endif`,yM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wM=`PhysicalMaterial material;
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
#endif`,TM=`uniform sampler2D dfgLUT;
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
}`,AM=`
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
#endif`,EM=`#if defined( RE_IndirectDiffuse )
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
#endif`,CM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,PM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,OM=`#if defined( USE_POINTS_UV )
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
#endif`,BM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GM=`#if defined( USE_MORPHCOLORS )
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
#endif`,HM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VM=`#ifdef USE_MORPHTARGETS
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
#endif`,WM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,JM=`#ifdef USE_NORMALMAP
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
#endif`,KM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dS=`float getShadowMask() {
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
}`,fS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pS=`#ifdef USE_SKINNING
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
#endif`,mS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gS=`#ifdef USE_SKINNING
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
#endif`,xS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_S=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MS=`#ifdef USE_TRANSMISSION
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
#endif`,SS=`#ifdef USE_TRANSMISSION
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
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ES=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CS=`uniform sampler2D t2D;
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
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PS=`uniform float backgroundBlurriness;
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
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DS=`#include <common>
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
}`,NS=`#if DEPTH_PACKING == 3200
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
}`,US=`#define DISTANCE
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
}`,FS=`#define DISTANCE
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
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`uniform float scale;
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
}`,kS=`uniform vec3 diffuse;
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
}`,GS=`#include <common>
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
}`,HS=`uniform vec3 diffuse;
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
}`,VS=`#define LAMBERT
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
}`,WS=`#define LAMBERT
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
}`,XS=`#define MATCAP
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
}`,qS=`#define MATCAP
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
}`,YS=`#define NORMAL
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
}`,ZS=`#define NORMAL
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
}`,$S=`#define PHONG
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
}`,JS=`#define PHONG
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
}`,KS=`#define STANDARD
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
}`,QS=`#define STANDARD
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
}`,jS=`#define TOON
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
}`,t1=`#define TOON
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
}`,e1=`uniform float size;
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
}`,n1=`uniform vec3 diffuse;
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
}`,i1=`#include <common>
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
}`,s1=`uniform vec3 color;
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
}`,r1=`uniform float rotation;
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
}`,o1=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Cy,alphahash_pars_fragment:Ry,alphamap_fragment:Py,alphamap_pars_fragment:Iy,alphatest_fragment:Ly,alphatest_pars_fragment:Dy,aomap_fragment:Ny,aomap_pars_fragment:Uy,batching_pars_vertex:Fy,batching_vertex:Oy,begin_vertex:By,beginnormal_vertex:zy,bsdfs:ky,iridescence_fragment:Gy,bumpmap_pars_fragment:Hy,clipping_planes_fragment:Vy,clipping_planes_pars_fragment:Wy,clipping_planes_pars_vertex:Xy,clipping_planes_vertex:qy,color_fragment:Yy,color_pars_fragment:Zy,color_pars_vertex:$y,color_vertex:Jy,common:Ky,defaultnormal_vertex:Qy,displacementmap_pars_vertex:jy,displacementmap_vertex:tM,emissivemap_fragment:eM,emissivemap_pars_fragment:nM,colorspace_fragment:iM,colorspace_pars_fragment:sM,envmap_fragment:rM,envmap_common_pars_fragment:oM,envmap_pars_fragment:aM,envmap_pars_vertex:lM,envmap_physical_pars_fragment:vM,envmap_vertex:cM,fog_vertex:hM,fog_pars_vertex:uM,fog_fragment:dM,fog_pars_fragment:fM,gradientmap_pars_fragment:pM,lightmap_pars_fragment:mM,lights_lambert_fragment:gM,lights_lambert_pars_fragment:xM,lights_pars_begin:_M,lights_toon_fragment:yM,lights_toon_pars_fragment:MM,lights_phong_fragment:SM,lights_phong_pars_fragment:bM,lights_physical_fragment:wM,lights_physical_pars_fragment:TM,lights_fragment_begin:AM,lights_fragment_maps:EM,lights_fragment_end:CM,lightprobes_pars_fragment:RM,logdepthbuf_fragment:PM,logdepthbuf_pars_fragment:IM,logdepthbuf_pars_vertex:LM,logdepthbuf_vertex:DM,map_fragment:NM,map_pars_fragment:UM,map_particle_fragment:FM,map_particle_pars_fragment:OM,metalnessmap_fragment:BM,metalnessmap_pars_fragment:zM,morphinstance_vertex:kM,morphcolor_vertex:GM,morphnormal_vertex:HM,morphtarget_pars_vertex:VM,morphtarget_vertex:WM,normal_fragment_begin:XM,normal_fragment_maps:qM,normal_pars_fragment:YM,normal_pars_vertex:ZM,normal_vertex:$M,normalmap_pars_fragment:JM,clearcoat_normal_fragment_begin:KM,clearcoat_normal_fragment_maps:QM,clearcoat_pars_fragment:jM,iridescence_pars_fragment:tS,opaque_fragment:eS,packing:nS,premultiplied_alpha_fragment:iS,project_vertex:sS,dithering_fragment:rS,dithering_pars_fragment:oS,roughnessmap_fragment:aS,roughnessmap_pars_fragment:lS,shadowmap_pars_fragment:cS,shadowmap_pars_vertex:hS,shadowmap_vertex:uS,shadowmask_pars_fragment:dS,skinbase_vertex:fS,skinning_pars_vertex:pS,skinning_vertex:mS,skinnormal_vertex:gS,specularmap_fragment:xS,specularmap_pars_fragment:_S,tonemapping_fragment:vS,tonemapping_pars_fragment:yS,transmission_fragment:MS,transmission_pars_fragment:SS,uv_pars_fragment:bS,uv_pars_vertex:wS,uv_vertex:TS,worldpos_vertex:AS,background_vert:ES,background_frag:CS,backgroundCube_vert:RS,backgroundCube_frag:PS,cube_vert:IS,cube_frag:LS,depth_vert:DS,depth_frag:NS,distance_vert:US,distance_frag:FS,equirect_vert:OS,equirect_frag:BS,linedashed_vert:zS,linedashed_frag:kS,meshbasic_vert:GS,meshbasic_frag:HS,meshlambert_vert:VS,meshlambert_frag:WS,meshmatcap_vert:XS,meshmatcap_frag:qS,meshnormal_vert:YS,meshnormal_frag:ZS,meshphong_vert:$S,meshphong_frag:JS,meshphysical_vert:KS,meshphysical_frag:QS,meshtoon_vert:jS,meshtoon_frag:t1,points_vert:e1,points_frag:n1,shadow_vert:i1,shadow_frag:s1,sprite_vert:r1,sprite_frag:o1},Et={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},ni={basic:{uniforms:an([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:an([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:an([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:an([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:an([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new ht(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:an([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:an([Et.points,Et.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:an([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:an([Et.common,Et.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:an([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:an([Et.sprite,Et.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:an([Et.common,Et.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:an([Et.lights,Et.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};ni.physical={uniforms:an([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};Fu={r:0,b:0,g:0},a1=new Yt,Kg=new Kt;Kg.set(-1,0,0,0,1,0,0,0,1);Io=class extends Te{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new rs(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Sn(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:hi});r.uniforms.tEquirect.value=e;let o=new fe(i,r),a=e.minFilter;return e.minFilter===Gn&&(e.minFilter=we),new js(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Rg=256,f1=3,p1=20,Qg=256,jg=16,m1=3,g1=new L,x1=new ht,Wi=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new js(1,10,null),this._boxMesh=new fe(new Sn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=g1}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,f=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(x1));let m=new js(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=f,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Rg,ip(t))}_fromTexture(t,e){t.mapping===di||t.mapping===_s?this._setSize(t.image.length===0?Rg:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Pg(t,!1,!1),n=Math.log2(t)-f1;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Pg(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===di||t.mapping===_s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lg()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ig()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=_1(),this._integrationMaterial=v1());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/jg);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-m1)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Qg*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=y1());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};C1={[fs]:"LINEAR_TONE_MAPPING",[ps]:"REINHARD_TONE_MAPPING",[ms]:"CINEON_TONE_MAPPING",[ui]:"ACES_FILMIC_TONE_MAPPING",[gs]:"AGX_TONE_MAPPING",[xs]:"NEUTRAL_TONE_MAPPING",[vo]:"CUSTOM_TONE_MAPPING"};tx=new De,ex=new Bn(1,1),nx=new Jr(1),ix=new Gs,sx=new Hs,rx=new rs,Dg=[],Ng=[],Ug=new Float32Array(16),Fg=new Float32Array(9),Og=new Float32Array(4);_p=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$1(e.type)}},vp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mb(e.type)}},yp=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},gp=/(\w+)(\])?(\[|\.)?/g;Po=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);gb(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};xb=37297,_b=0;kg=new Kt;Sb={[fs]:"Linear",[ps]:"Reinhard",[ms]:"Cineon",[ui]:"ACESFilmic",[gs]:"AgX",[xs]:"Neutral",[vo]:"Custom"};Ou=new L;Cb=/^[ \t]*#include +<([\w\d./]+)>/gm;Pb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Lb={[us]:"SHADOWMAP_TYPE_PCF",[er]:"SHADOWMAP_TYPE_VSM"};Nb={[_s]:"ENVMAP_MODE_REFRACTION"};Fb={[_o]:"ENVMAP_BLENDING_MULTIPLY",[Bf]:"ENVMAP_BLENDING_MIX",[zf]:"ENVMAP_BLENDING_ADD"};zb=0,Sp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bp(t),e.set(t,n)),n}},bp=class{constructor(t){this.id=zb++,this.code=t,this.usedTimes=0}};Yb=0;Kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qb=`uniform sampler2D shadow_pass;
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
}`,jb=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],tw=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],$g=new Yt,tc=new L,xp=new L;sw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rw=`
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

}`,wp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Kr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ge({vertexShader:sw,fragmentShader:rw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tp=class extends Mn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,x=typeof XRWebGLBinding<"u",m=new wp,g={},_=e.getContextAttributes(),y=null,M=null,w=[],T=[],v=new et,S=null,R=null,E=new Ee;E.viewport=new de;let I=new Ee;I.viewport=new de;let N=[E,I],z=new hl,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let lt=w[G];return lt===void 0&&(lt=new Ws,w[G]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(G){let lt=w[G];return lt===void 0&&(lt=new Ws,w[G]=lt),lt.getGripSpace()},this.getHand=function(G){let lt=w[G];return lt===void 0&&(lt=new Ws,w[G]=lt),lt.getHandSpace()};function q(G){let lt=T.indexOf(G.inputSource);if(lt===-1)return;let vt=w[lt];vt!==void 0&&(vt.update(G.inputSource,G.frame,c||o),vt.dispatchEvent({type:G.type,data:G.inputSource}))}function H(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",st);for(let G=0;G<w.length;G++){let lt=T[G];lt!==null&&(T[G]=null,w[G].disconnect(lt))}D=null,O=null,m.reset();for(let G in g)delete g[G];if(t.setRenderTarget(y),p=null,d=null,u=null,i=null,M=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(v.width,v.height,!1),R!==null){let G=R.camera;G.fov=R.fov,G.zoom=R.zoom,G.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&Tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&Tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",H),i.addEventListener("inputsourceschange",st),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,kt=null,wt=null;_.depth&&(wt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=_.stencil?fi:oi,kt=_.stencil?vs:mn);let Ht={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ht),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Te(d.textureWidth,d.textureHeight,{format:dn,type:pn,depthTexture:new Bn(d.textureWidth,d.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let vt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,vt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Te(p.framebufferWidth,p.framebufferHeight,{format:dn,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(G){for(let lt=0;lt<G.removed.length;lt++){let vt=G.removed[lt],kt=T.indexOf(vt);kt>=0&&(T[kt]=null,w[kt].disconnect(vt))}for(let lt=0;lt<G.added.length;lt++){let vt=G.added[lt],kt=T.indexOf(vt);if(kt===-1){for(let Ht=0;Ht<w.length;Ht++)if(Ht>=T.length){T.push(vt),kt=Ht;break}else if(T[Ht]===null){T[Ht]=vt,kt=Ht;break}if(kt===-1)break}let wt=w[kt];wt&&wt.connect(vt)}}function W(G,lt){lt===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(lt.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;let lt=G.near,vt=G.far;m.texture!==null&&(m.depthNear>0&&(lt=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),z.near=I.near=E.near=lt,z.far=I.far=E.far=vt,(D!==z.near||O!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),D=z.near,O=z.far),z.layers.mask=G.layers.mask|6,E.layers.mask=z.layers.mask&-5,I.layers.mask=z.layers.mask&-3;let kt=G.parent,wt=z.cameras;W(z,kt);for(let Ht=0;Ht<wt.length;Ht++)W(wt[Ht],kt);z.projectionMatrix.copy(E.projectionMatrix),z.projectionMatrixInverse.copy(E.projectionMatrixInverse),R===null&&G.isPerspectiveCamera&&(R={camera:G,fov:G.fov,zoom:G.zoom}),Z(G,z,kt)};function Z(G,lt,vt){vt===null?G.matrix.copy(lt.matrixWorld):(G.matrix.copy(vt.matrixWorld),G.matrix.invert(),G.matrix.multiply(lt.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(lt.projectionMatrix),G.projectionMatrixInverse.copy(lt.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ks*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(G){return g[G]};let nt=null;function At(G,lt){if(h=lt.getViewerPose(c||o),f=lt,h!==null){let vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let kt=!1;vt.length!==z.cameras.length&&(z.cameras.length=0,kt=!0);for(let Pt=0;Pt<vt.length;Pt++){let ne=vt[Pt],ce=null;if(p!==null)ce=p.getViewport(ne);else{let gt=u.getViewSubImage(d,ne);ce=gt.viewport,Pt===0&&(t.setRenderTargetTextures(M,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(M))}let it=N[Pt];it===void 0&&(it=new Ee,it.layers.enable(Pt),it.viewport=new de,N[Pt]=it),it.matrix.fromArray(ne.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(ne.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(ce.x,ce.y,ce.width,ce.height),Pt===0&&(z.matrix.copy(it.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),kt===!0&&z.cameras.push(it)}let wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Pt=u.getDepthInformation(vt[0]);Pt&&Pt.isValid&&Pt.texture&&m.init(Pt,i.renderState)}if(wt&&wt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Pt=0;Pt<vt.length;Pt++){let ne=vt[Pt].camera;if(ne){let ce=g[ne];ce||(ce=new Kr,g[ne]=ce);let it=u.getCameraImage(ne);ce.sourceTexture=it}}}}for(let vt=0;vt<w.length;vt++){let kt=T[vt],wt=w[vt];kt!==null&&wt!==void 0&&wt.update(kt,lt,c||o)}nt&&nt(G,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),f=null}let ot=new Jg;ot.setAnimationLoop(At),this.setAnimationLoop=function(G){nt=G},this.dispose=function(){}}},ow=new Yt,ax=new Kt;ax.set(-1,0,0,0,1,0,0,0,1);cw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;nc=class{constructor(t={}){let{canvas:e=ep(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=pn}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let x=p,m=new Set([Ml,yl,bo]),g=new Set([pn,mn,sr,vs,xl,_l]),_=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},w=null,T=null,v=[],S=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,I=!1,N=null,z=null,D=null,O=null;this._outputColorSpace=Je;let q=0,H=0,st=null,W=-1,Z=null,nt=new de,At=new de,ot=null,G=new ht(0),lt=0,vt=e.width,kt=e.height,wt=1,Ht=null,ye=null,Pt=new de(0,0,vt,kt),ne=new de(0,0,vt,kt),ce=!1,it=new ai,gt=new Zr,ft=!1,Nt=!1,pt=new Yt,Qt=new L,Bt=new de,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function k(){return st===null?wt:1}let P=n;function $(A,F){return e.getContext(A,F)}let ct,Vt,rt,qt,Ct,Dt,C,b,B,at,j,dt,xt,K,Q,yt,U,tt,J,Mt,mt,_t,Wt;try{let A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),P===null){let F="webgl2";if(P=$(F,A),P===null)throw $(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(A){throw e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Gt("WebGLRenderer: "+A.message),A}function ae(){ct=new S1(P),ct.init(),mt=new ox(P,ct),Vt=new u1(P,ct,t,mt),rt=new nw(P,ct),Vt.reversedDepthBuffer&&d&&rt.buffers.depth.setReversed(!0),z=P.createFramebuffer(),D=P.createFramebuffer(),O=P.createFramebuffer(),qt=new T1(P),Ct=new Hb,Dt=new iw(P,ct,rt,Ct,Vt,mt,qt),C=new M1(E),b=new Ey(P),_t=new c1(P,b),B=new b1(P,b,qt,_t),at=new E1(P,B,b,_t,qt),tt=new A1(P,Vt,Dt),Q=new d1(Ct),j=new Gb(E,C,ct,Vt,_t,Q),dt=new aw(E,Ct),xt=new Wb,K=new Jb(ct),U=new l1(E,C,rt,at,f,l),yt=new ew(E,at,Vt),Wt=new lw(P,qt,Vt,rt),J=new h1(P,ct,qt),Mt=new w1(P,ct,qt),qt.programs=j.programs,E.capabilities=Vt,E.extensions=ct,E.properties=Ct,E.renderLists=xt,E.shadowMap=yt,E.state=rt,E.info=qt}x!==pn&&(R=new R1(x,e.width,e.height,a,i,r));let ut=new Tp(E,P);this.xr=ut,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let A=ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(A){A!==void 0&&(wt=A,this.setSize(vt,kt,!1))},this.getSize=function(A){return A.set(vt,kt)},this.setSize=function(A,F,Y=!0){if(ut.isPresenting){Tt("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=A,kt=F,e.width=Math.floor(A*wt),e.height=Math.floor(F*wt),Y===!0&&(e.style.width=A+"px",e.style.height=F+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(vt*wt,kt*wt).floor()},this.setDrawingBufferSize=function(A,F,Y){vt=A,kt=F,wt=Y,e.width=Math.floor(A*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,A,F)},this.setEffects=function(A){if(x===pn){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let F=0;F<A.length;F++)if(A[F].isOutputPass===!0){Tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(nt)},this.getViewport=function(A){return A.copy(Pt)},this.setViewport=function(A,F,Y,V){A.isVector4?Pt.set(A.x,A.y,A.z,A.w):Pt.set(A,F,Y,V),rt.viewport(nt.copy(Pt).multiplyScalar(k()).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,F,Y,V){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,F,Y,V),rt.scissor(At.copy(ne).multiplyScalar(k()).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(A){rt.setScissorTest(ce=A)},this.setOpaqueSort=function(A){Ht=A},this.setTransparentSort=function(A){ye=A},this.getClearColor=function(A){return A.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,Y=!0){let V=0;if(A){let X=!1;if(st!==null){let bt=st.texture.format;X=m.has(bt)}if(X){let bt=st.texture.type,Ut=g.has(bt),St=U.getClearColor(),It=U.getClearAlpha(),zt=St.r,te=St.g,he=St.b;Ut?(_[0]=zt,_[1]=te,_[2]=he,_[3]=It,P.clearBufferuiv(P.COLOR,0,_)):(y[0]=zt,y[1]=te,y[2]=he,y[3]=It,P.clearBufferiv(P.COLOR,0,y))}else V|=P.COLOR_BUFFER_BIT}F&&(V|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),U.dispose(),xt.dispose(),K.dispose(),Dt.dispose(),Ct.dispose(),C.dispose(),at.dispose(),B.dispose(),_t.dispose(),Wt.dispose(),j.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",jp),ut.removeEventListener("sessionend",tm),bs.stop()};function Xt(A){A.preventDefault(),Hr("WebGLRenderer: Context Lost."),I=!0}function ie(){Hr("WebGLRenderer: Context Restored."),I=!1;let A=qt.autoReset,F=yt.enabled,Y=yt.autoUpdate,V=yt.needsUpdate,X=yt.type;ae(),qt.autoReset=A,yt.enabled=F,yt.autoUpdate=Y,yt.needsUpdate=V,yt.type=X}function Rt(A){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Me(A){let F=A.target;F.removeEventListener("dispose",Me),Xe(F)}function Xe(A){qi(A),Ct.remove(A)}function qi(A){let F=Ct.get(A).programs;F!==void 0&&(F.forEach(function(Y){j.releaseProgram(Y)}),A.isShaderMaterial&&j.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,Y,V,X,bt){F===null&&(F=oe);let Ut=X.isMesh&&X.matrixWorld.determinantAffine()<0,St=C_(A,F,Y,V,X);rt.setMaterial(V,Ut);let It=Y.index,zt=1;if(V.wireframe===!0){if(It=B.getWireframeAttribute(Y),It===void 0)return;zt=2}let te=Y.drawRange,he=Y.attributes.position,Ft=te.start*zt,ue=(te.start+te.count)*zt;bt!==null&&(Ft=Math.max(Ft,bt.start*zt),ue=Math.min(ue,(bt.start+bt.count)*zt)),It!==null?(Ft=Math.max(Ft,0),ue=Math.min(ue,It.count)):he!=null&&(Ft=Math.max(Ft,0),ue=Math.min(ue,he.count));let Be=ue-Ft;if(Be<0||Be===1/0)return;_t.setup(X,V,St,Y,It);let be,Se=J;if(It!==null&&(be=b.get(It),Se=Mt,Se.setIndex(be)),X.isMesh)V.wireframe===!0?(rt.setLineWidth(V.wireframeLinewidth*k()),Se.setMode(P.LINES)):Se.setMode(P.TRIANGLES);else if(X.isLine){let Qe=V.linewidth;Qe===void 0&&(Qe=1),rt.setLineWidth(Qe*k()),X.isLineSegments?Se.setMode(P.LINES):X.isLineLoop?Se.setMode(P.LINE_LOOP):Se.setMode(P.LINE_STRIP)}else X.isPoints?Se.setMode(P.POINTS):X.isSprite&&Se.setMode(P.TRIANGLES);if(X.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))Se.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Qe=X._multiDrawStarts,Ot=X._multiDrawCounts,ln=X._multiDrawCount,_e=It?b.get(It).bytesPerElement:1,ws=Ct.get(V).currentProgram.getUniforms();for(let je=0;je<ln;je++)ws.setValue(P,"_gl_DrawID",je),Se.render(Qe[je]/_e,Ot[je])}else if(X.isInstancedMesh)Se.renderInstances(Ft,Be,X.count);else if(Y.isInstancedBufferGeometry){let Qe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ot=Math.min(Y.instanceCount,Qe);Se.renderInstances(Ft,Be,Ot)}else Se.render(Ft,Be)};function Qp(A,F,Y,V){N!==null&&A.isNodeMaterial&&N.setObject(V,A),ft===!0&&Q.setState(A,Y,!1),A.transparent===!0&&A.side===ei&&A.forceSinglePass===!1?(A.side=on,A.needsUpdate=!0,ko(A,F,V),A.side=Hi,A.needsUpdate=!0,ko(A,F,V),A.side=ei):ko(A,F,V)}this.compile=function(A,F,Y=null){Y===null&&(Y=A),N!==null&&N.renderStart(A,F,Y),T=K.get(Y),T.init(F),S.push(T),Y.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),A!==Y&&A.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),Nt=this.localClippingEnabled,ft=Q.init(this.clippingPlanes,Nt),ft===!0&&Q.setGlobalState(this.clippingPlanes,F),N!==null&&yt.render(T.state.shadowsArray,Y,F);let V=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let bt=X.material;if(bt)if(Array.isArray(bt))for(let Ut=0;Ut<bt.length;Ut++){let St=bt[Ut];Qp(St,Y,F,X),V.add(St)}else Qp(bt,Y,F,X),V.add(bt)}),T=S.pop(),N!==null&&N.renderEnd(),V},this.compileAsync=function(A,F,Y=null){let V=this.compile(A,F,Y);return new Promise(X=>{function bt(){if(V.forEach(function(Ut){let It=Ct.get(Ut).currentProgram;(It===void 0||It.isReady())&&V.delete(Ut)}),V.size===0){X(A);return}setTimeout(bt,10)}ct.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let xd=null;function A_(A){xd&&xd(A)}function jp(){bs.stop()}function tm(){bs.start()}let bs=new Jg;bs.setAnimationLoop(A_),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(A){xd=A,ut.setAnimationLoop(A),A===null?bs.stop():bs.start()},ut.addEventListener("sessionstart",jp),ut.addEventListener("sessionend",tm),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(A,F);let Y=ut.enabled===!0&&ut.isPresenting===!0,V=R!==null&&(st===null||Y)&&R.begin(E,st);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(F),F=ut.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,F,st),T=K.get(A,S.length),T.init(F),T.state.textureUnits=Dt.getTextureUnits(),S.push(T),pt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?gt.setFromArrayCamera(F):it.setFromProjectionMatrix(pt,yn,F.reversedDepth),Nt=this.localClippingEnabled,ft=Q.init(this.clippingPlanes,Nt),w=xt.get(A,v.length),w.init(),v.push(w),this.info.render.frame++,ut.enabled===!0&&ut.isPresenting===!0){let Ut=E.xr.getDepthSensingMesh();Ut!==null&&_d(Ut,F,-1/0,E.sortObjects)}_d(A,F,0,E.sortObjects),w.finish(),N!==null&&N.updateLights(T.state.lightsArray),E.sortObjects===!0&&w.sort(Ht,ye),ee=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,ee&&U.addToRenderList(w,A),this.info.autoReset===!0&&this.info.reset(),ft===!0&&Q.beginShadows();let X=T.state.shadowsArray;if(yt.render(X,A,F),ft===!0&&Q.endShadows(),(V&&R.hasRenderPass())===!1){let Ut=w.opaque,St=w.transmissive;if(T.setupLights(),F.isArrayCamera){let It=F.cameras;if(St.length>0)for(let zt=0,te=It.length;zt<te;zt++){let he=It[zt];nm(Ut,St,A,he)}ee&&U.render(A);for(let zt=0,te=It.length;zt<te;zt++){let he=It[zt];em(w,A,he,he.viewport)}}else St.length>0&&nm(Ut,St,A,F),ee&&U.render(A),em(w,A,F)}st!==null&&H===0&&(Dt.updateMultisampleRenderTarget(st),Dt.updateRenderTargetMipmap(st)),V&&R.end(E),A.isScene===!0&&A.onAfterRender(E,A,F),_t.resetDefaultState(),W=-1,Z=null,S.pop(),S.length>0?(T=S[S.length-1],Dt.setTextureUnits(T.state.textureUnits),ft===!0&&Q.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,v.pop(),v.length>0?w=v[v.length-1]:w=null,N!==null&&N.renderEnd()};function _d(A,F,Y,V){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){let Ut=F.isArrayCamera?gt:it;if(!A.frustumCulled||A.intersectsFrustum(Ut)){V&&Bt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pt);let St=at.update(A),It=A.material;It.visible&&w.push(A,St,It,Y,Bt.z,null,F)}}else if(A.isMesh||A.isLine||A.isPoints){let Ut=F.isArrayCamera?gt:it;if(!A.frustumCulled||A.intersectsFrustum(Ut)){let St=at.update(A),It=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Bt.copy(A.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Bt.copy(St.boundingSphere.center)),Bt.applyMatrix4(A.matrixWorld).applyMatrix4(pt)),Array.isArray(It)){let zt=St.groups;for(let te=0,he=zt.length;te<he;te++){let Ft=zt[te],ue=It[Ft.materialIndex];ue&&ue.visible&&w.push(A,St,ue,Y,Bt.z,Ft,F)}}else It.visible&&w.push(A,St,It,Y,Bt.z,null,F)}}}let bt=A.children;for(let Ut=0,St=bt.length;Ut<St;Ut++)_d(bt[Ut],F,Y,V)}function em(A,F,Y,V){let{opaque:X,transmissive:bt,transparent:Ut}=A;T.setupLightsView(Y),ft===!0&&Q.setGlobalState(E.clippingPlanes,Y),V&&rt.viewport(nt.copy(V)),X.length>0&&gc(X,F,Y),bt.length>0&&gc(bt,F,Y),Ut.length>0&&gc(Ut,F,Y),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function nm(A,F,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let Ft=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Te(1,1,{generateMipmaps:!0,type:Ft?He:pn,minFilter:Gn,samples:Math.max(4,Vt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let bt=T.state.transmissionRenderTarget[V.id],Ut=V.viewport||nt;bt.setSize(Ut.z*E.transmissionResolutionScale,Ut.w*E.transmissionResolutionScale);let St=E.getRenderTarget(),It=E.getActiveCubeFace(),zt=E.getActiveMipmapLevel();E.setRenderTarget(bt),E.getClearColor(G),lt=E.getClearAlpha(),lt<1&&E.setClearColor(16777215,.5),E.clear(),ee&&U.render(Y);let te=E.toneMapping;E.toneMapping=Pn;let he=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),ft===!0&&Q.setGlobalState(E.clippingPlanes,V),gc(A,Y,V),Dt.updateMultisampleRenderTarget(bt),Dt.updateRenderTargetMipmap(bt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ue=0,Be=F.length;ue<Be;ue++){let be=F[ue],{object:Se,geometry:Qe,material:Ot,group:ln}=be;if(Ot.side===ei&&Se.layers.test(V.layers)){let _e=Ot.side;Ot.side=on,Ot.needsUpdate=!0,im(Se,Y,V,Qe,Ot,ln),Ot.side=_e,Ot.needsUpdate=!0,Ft=!0}}Ft===!0&&(Dt.updateMultisampleRenderTarget(bt),Dt.updateRenderTargetMipmap(bt))}E.setRenderTarget(St,It,zt),E.setClearColor(G,lt),he!==void 0&&(V.viewport=he),E.toneMapping=te}function gc(A,F,Y){let V=F.isScene===!0?F.overrideMaterial:null;for(let X=0,bt=A.length;X<bt;X++){let Ut=A[X],{object:St,geometry:It,group:zt}=Ut,te=Ut.material;te.allowOverride===!0&&V!==null&&(te=V),St.layers.test(Y.layers)&&im(St,F,Y,It,te,zt)}}function im(A,F,Y,V,X,bt){N!==null&&X.isNodeMaterial&&N.setObject(A,X),A.onBeforeRender(E,F,Y,V,X,bt),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(E,F,Y,V,A,bt),X.transparent===!0&&X.side===ei&&X.forceSinglePass===!1?(X.side=on,X.needsUpdate=!0,E.renderBufferDirect(Y,F,V,X,A,bt),X.side=Hi,X.needsUpdate=!0,E.renderBufferDirect(Y,F,V,X,A,bt),X.side=ei):E.renderBufferDirect(Y,F,V,X,A,bt),A.onAfterRender(E,F,Y,V,X,bt)}function sm(A){let F=0;for(let Y of A)Y.texture!==null&&F++;return F}function ko(A,F,Y){F.isScene!==!0&&(F=oe);let V=Ct.get(A),X=T.state.lights,bt=T.state.shadowsArray,Ut=X.state.version,St=j.getParameters(A,X.state,bt,F,Y,T.state.lightProbeGridArray),It=j.getProgramCacheKey(St),zt=V.programs;V.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let te=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;V.envMap=C.get(A.envMap||V.environment,te),V.envMapRotation=V.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,zt===void 0&&(A.addEventListener("dispose",Me),zt=new Map,V.programs=zt,V.programVariants=new Map);let he=zt.get(It);if(he!==void 0){if(V.currentProgram===he&&V.lightsStateVersion===Ut)return om(A,St),he}else St.uniforms=j.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,Y,St),A.onBeforeCompile(St,E),he=j.acquireProgram(St,It),zt.set(It,he),V.uniforms=St.uniforms;let Ft=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ft.clippingPlanes=Q.uniform),om(A,St),V.needsLights=P_(A),V.lightsStateVersion=Ut,V.needsLights&&(Ft.ambientLightColor.value=X.state.ambient,Ft.lightProbe.value=X.state.probe,Ft.sunLights.value=X.state.sun,Ft.sunLightShadows.value=X.state.sunShadow,Ft.directionalLights.value=X.state.directional,Ft.directionalLightShadows.value=X.state.directionalShadow,Ft.spotLights.value=X.state.spot,Ft.spotLightShadows.value=X.state.spotShadow,Ft.rectAreaLights.value=X.state.rectArea,Ft.ltc_1.value=X.state.rectAreaLTC1,Ft.ltc_2.value=X.state.rectAreaLTC2,Ft.pointLights.value=X.state.point,Ft.pointLightShadows.value=X.state.pointShadow,Ft.hemisphereLights.value=X.state.hemi,Ft.sunShadowMatrix.value=X.state.sunShadowMatrix,Ft.sunShadowCascade.value=X.state.sunShadowCascade,Ft.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ft.spotLightMatrix.value=X.state.spotLightMatrix,Ft.spotLightMap.value=X.state.spotLightMap,Ft.pointShadowMatrix.value=X.state.pointShadowMatrix),V.numLightProbeGrids=sm(T.state.lightProbeGridArray),V.currentProgram=he,V.uniformsList=null,he}function E_(A,F,Y,V,X){let bt=Ct.get(A),Ut=bt.currentProgram.id+","+V+","+X,St=bt.programVariants.get(Ut);return St===void 0?(St=ko(A,F,Y),bt.programVariants.set(Ut,St)):(bt.currentProgram=St,bt.uniformsList=null,bt.outputColorSpace=V,bt.toneMapping=X),St}function rm(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=Po.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function om(A,F){let Y=Ct.get(A);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function C_(A,F,Y,V,X){F.isScene!==!0&&(F=oe),Dt.resetTextureUnits();let bt=F.fog,Ut=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,St=st===null?E.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:le.workingColorSpace,It=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,zt=C.get(V.envMap||Ut,It),te=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,he=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ft=!!Y.morphAttributes.position,ue=!!Y.morphAttributes.normal,Be=!!Y.morphAttributes.color,be=Pn;V.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(be=E.toneMapping);let Se=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Qe=Se!==void 0?Se.length:0,Ot=Ct.get(V),ln=T.state.lights;if(ft===!0&&(Nt===!0||A!==Z)){let Ae=A===Z&&V.id===W;Q.setState(V,A,Ae)}let _e=!1,ws=!1;V.version===Ot.__version?Ot.needsLights&&Ot.lightsStateVersion!==ln.state.version||X.isBatchedMesh&&Ot.batching===!1||!X.isBatchedMesh&&Ot.batching===!0||X.isBatchedMesh&&Ot.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ot.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ot.instancing===!1||!X.isInstancedMesh&&Ot.instancing===!0||X.isSkinnedMesh&&Ot.skinning===!1||!X.isSkinnedMesh&&Ot.skinning===!0||X.isInstancedMesh&&Ot.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ot.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ot.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ot.instancingMorph===!1&&X.morphTexture!==null||Ot.envMap!==zt||V.fog===!0&&Ot.fog!==bt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Q.numPlanes||Ot.numIntersection!==Q.numIntersection)||Ot.vertexAlphas!==te||Ot.vertexTangents!==he||Ot.morphTargets!==Ft||Ot.morphNormals!==ue||Ot.morphColors!==Be||Ot.morphTargetsCount!==Qe||Ot.numLightProbeGrids!==sm(T.state.lightProbeGridArray)?_e=!0:(Ot.outputColorSpace!==St||Ot.toneMapping!==be)&&(ws=!0):(_e=!0,Ot.__version=V.version);let je=Ot.currentProgram;(_e===!0||ws===!0)&&(je=ws===!0?E_(V,F,X,St,be):ko(V,F,X),N&&V.isNodeMaterial&&N.onUpdateProgram(V,je,Ot));let xc=!1,Yi=!1,Ts=!1,pe=je.getUniforms(),$e=Ot.uniforms;if(rt.useProgram(je.program)&&(xc=!0,Yi=!0,Ts=!0),V.id!==W&&(W=V.id,Yi=!0),xc||Z!==A){rt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),pe.setValue(P,"projectionMatrix",A.projectionMatrix),pe.setValue(P,"viewMatrix",A.matrixWorldInverse);let qe=pe.map.cameraPosition;qe!==void 0&&qe.setValue(P,Qt.setFromMatrixPosition(A.matrixWorld)),Vt.logarithmicDepthBuffer&&pe.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pe.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,Yi=!0,Ts=!0)}if(Ot.needsLights&&(ln.state.sunShadowMap.length>0&&pe.setValue(P,"sunShadowMap",ln.state.sunShadowMap,Dt),ln.state.directionalShadowMap.length>0&&pe.setValue(P,"directionalShadowMap",ln.state.directionalShadowMap,Dt),ln.state.spotShadowMap.length>0&&pe.setValue(P,"spotShadowMap",ln.state.spotShadowMap,Dt),ln.state.pointShadowMap.length>0&&pe.setValue(P,"pointShadowMap",ln.state.pointShadowMap,Dt)),X.isSkinnedMesh){pe.setOptional(P,X,"bindMatrix"),pe.setOptional(P,X,"bindMatrixInverse");let Ae=X.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),pe.setValue(P,"boneTexture",Ae.boneTexture,Dt))}X.isBatchedMesh&&(pe.setOptional(P,X,"batchingTexture"),pe.setValue(P,"batchingTexture",X._matricesTexture,Dt),pe.setOptional(P,X,"batchingIdTexture"),pe.setValue(P,"batchingIdTexture",X._indirectTexture,Dt),pe.setOptional(P,X,"batchingColorTexture"),X._colorsTexture!==null&&pe.setValue(P,"batchingColorTexture",X._colorsTexture,Dt));let Wn=Y.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&tt.update(X,Y,je),(Yi||Ot.receiveShadow!==X.receiveShadow)&&(Ot.receiveShadow=X.receiveShadow,pe.setValue(P,"receiveShadow",X.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&($e.envMapIntensity.value=F.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=hw()),Yi){if(pe.setValue(P,"toneMappingExposure",E.toneMappingExposure),Ot.needsLights&&R_($e,Ts),bt&&V.fog===!0&&dt.refreshFogUniforms($e,bt),dt.refreshMaterialUniforms($e,V,wt,kt,T.state.transmissionRenderTarget[A.id]),Ot.needsLights&&Ot.numLightProbeGrids>0){let Ae=M,qe=0;for(let wi of T.state.lightProbeGridArray)wi.texture!==null&&(Ae.textures[qe]=wi.texture,Ae.min[qe]=wi.boundingBox.min,Ae.max[qe]=wi.boundingBox.max,Ae.resolution[qe]=wi.resolution,qe++);for(let wi in Ae)Ae[wi].length=qe;$e.probesSH.value=Ae.textures,$e.probesMin.value=Ae.min,$e.probesMax.value=Ae.max,$e.probesResolution.value=Ae.resolution}Po.upload(P,rm(Ot),$e,Dt)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Po.upload(P,rm(Ot),$e,Dt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pe.setValue(P,"center",X.center),pe.setValue(P,"modelViewMatrix",X.modelViewMatrix),pe.setValue(P,"normalMatrix",X.normalMatrix),pe.setValue(P,"modelMatrix",X.matrixWorld),V.uniformsGroups!==void 0){let Ae=V.uniformsGroups;for(let qe=0,wi=Ae.length;qe<wi;qe++){let lm=Ae[qe];Wt.update(lm,je),Wt.bind(lm,je)}}return je}function R_(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.sunLights.needsUpdate=F,A.sunLightShadows.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function P_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(A,F,Y){let V=Ct.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Ct.get(A.texture).__webglTexture=F,Ct.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){let Y=Ct.get(A);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,Y=0){st=A,q=F,H=Y;let V=null,X=!1,bt=!1;if(A){let St=Ct.get(A);if(St.__useDefaultFramebuffer!==void 0){rt.bindFramebuffer(P.FRAMEBUFFER,St.__webglFramebuffer),nt.copy(A.viewport),At.copy(A.scissor),ot=A.scissorTest,rt.viewport(nt),rt.scissor(At),rt.setScissorTest(ot),W=-1;return}else if(St.__webglFramebuffer===void 0)Dt.setupRenderTarget(A);else if(St.__hasExternalTextures)Dt.rebindTextures(A,Ct.get(A.texture).__webglTexture,Ct.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let te=A.depthTexture;if(St.__boundDepthTexture!==te){if(te!==null&&Ct.has(te)&&(A.width!==te.image.width||A.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Dt.setupDepthRenderbuffer(A)}}let It=A.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(bt=!0);let zt=Ct.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(zt[F])?V=zt[F][Y]:V=zt[F],X=!0):A.samples>0&&Dt.useMultisampledRTT(A)===!1?V=Ct.get(A).__webglMultisampledFramebuffer:Array.isArray(zt)?V=zt[Y]:V=zt,nt.copy(A.viewport),At.copy(A.scissor),ot=A.scissorTest}else nt.copy(Pt).multiplyScalar(wt).floor(),At.copy(ne).multiplyScalar(wt).floor(),ot=ce;if(Y!==0&&(V=z),rt.bindFramebuffer(P.FRAMEBUFFER,V)&&rt.drawBuffers(A,V),rt.viewport(nt),rt.scissor(At),rt.setScissorTest(ot),X){let St=Ct.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,St.__webglTexture,Y)}else if(bt){let St=F;for(let It=0;It<A.textures.length;It++){let zt=Ct.get(A.textures[It]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+It,zt.__webglTexture,Y,St)}}else if(A!==null&&Y!==0){let St=Ct.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,St.__webglTexture,Y)}W=-1};function am(A){let F=Ct.get(A);return(F.__readFormat!==A.format||F.__readType!==A.type)&&(F.__readFormat=A.format,F.__readType=A.type,F.__formatReadable=Vt.textureFormatReadable(A.format),F.__typeReadable=Vt.textureTypeReadable(A.type)),F}this.readRenderTargetPixels=function(A,F,Y,V,X,bt,Ut,St=0){if(!(A&&A.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(It=It[Ut],Array.isArray(It)&&(It=It[0])),It){rt.bindFramebuffer(P.FRAMEBUFFER,It);try{let zt=A.textures[St],te=zt.format,he=zt.type;A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+St);let Ft=am(zt);if(Ft.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-V&&Y>=0&&Y<=A.height-X&&P.readPixels(F,Y,V,X,mt.convert(te),mt.convert(he),bt)}finally{let zt=st!==null?Ct.get(st).__webglFramebuffer:null;rt.bindFramebuffer(P.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,F,Y,V,X,bt,Ut,St=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(It=It[Ut],Array.isArray(It)&&(It=It[0])),It)if(F>=0&&F<=A.width-V&&Y>=0&&Y<=A.height-X){rt.bindFramebuffer(P.FRAMEBUFFER,It);let zt=A.textures[St],te=zt.format,he=zt.type;A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+St);let Ft=am(zt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ue),P.bufferData(P.PIXEL_PACK_BUFFER,bt.byteLength,P.STREAM_READ),P.readPixels(F,Y,V,X,mt.convert(te),mt.convert(he),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Be=st!==null?Ct.get(st).__webglFramebuffer:null;rt.bindFramebuffer(P.FRAMEBUFFER,Be);let be=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await xg(P,be,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ue),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,bt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(ue),P.deleteSync(be),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,Y=0){let V=Math.pow(2,-Y),X=Math.floor(A.image.width*V),bt=Math.floor(A.image.height*V),Ut=F!==null?F.x:0,St=F!==null?F.y:0;Dt.setTexture2D(A,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,Ut,St,X,bt),rt.unbindTexture()},this.copyTextureToTexture=function(A,F,Y=null,V=null,X=0,bt=0){let Ut,St,It,zt,te,he,Ft,ue,Be,be=A.isCompressedTexture?A.mipmaps[bt]:A.image;if(Y!==null)Ut=Y.max.x-Y.min.x,St=Y.max.y-Y.min.y,It=Y.isBox3?Y.max.z-Y.min.z:1,zt=Y.min.x,te=Y.min.y,he=Y.isBox3?Y.min.z:0;else{let pe=Math.pow(2,-X);Ut=Math.floor(be.width*pe),St=Math.floor(be.height*pe),A.isDataArrayTexture?It=be.depth:A.isData3DTexture?It=Math.floor(be.depth*pe):It=1,zt=0,te=0,he=0}V!==null?(Ft=V.x,ue=V.y,Be=V.z):(Ft=0,ue=0,Be=0);let Se=mt.convert(F.format),Qe=mt.convert(F.type),Ot;F.isData3DTexture?(Dt.setTexture3D(F,0),Ot=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Dt.setTexture2DArray(F,0),Ot=P.TEXTURE_2D_ARRAY):(Dt.setTexture2D(F,0),Ot=P.TEXTURE_2D),rt.activeTexture(P.TEXTURE0),rt.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),rt.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),rt.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let ln=rt.getParameter(P.UNPACK_ROW_LENGTH),_e=rt.getParameter(P.UNPACK_IMAGE_HEIGHT),ws=rt.getParameter(P.UNPACK_SKIP_PIXELS),je=rt.getParameter(P.UNPACK_SKIP_ROWS),xc=rt.getParameter(P.UNPACK_SKIP_IMAGES);rt.pixelStorei(P.UNPACK_ROW_LENGTH,be.width),rt.pixelStorei(P.UNPACK_IMAGE_HEIGHT,be.height),rt.pixelStorei(P.UNPACK_SKIP_PIXELS,zt),rt.pixelStorei(P.UNPACK_SKIP_ROWS,te),rt.pixelStorei(P.UNPACK_SKIP_IMAGES,he);let Yi=A.isDataArrayTexture||A.isData3DTexture,Ts=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){let pe=Ct.get(A),$e=Ct.get(F),Wn=Ct.get(pe.__renderTarget),Ae=Ct.get($e.__renderTarget);rt.bindFramebuffer(P.READ_FRAMEBUFFER,Wn.__webglFramebuffer),rt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let qe=0;qe<It;qe++)Yi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ct.get(A).__webglTexture,X,he+qe),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ct.get(F).__webglTexture,bt,Be+qe)),P.blitFramebuffer(zt,te,zt+Ut,te+St,Ft,ue,Ft+Ut,ue+St,P.DEPTH_BUFFER_BIT,P.NEAREST);rt.bindFramebuffer(P.READ_FRAMEBUFFER,null),rt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||Ct.has(A)){let pe=Ct.get(A),$e=Ct.get(F);rt.bindFramebuffer(P.READ_FRAMEBUFFER,D),rt.bindFramebuffer(P.DRAW_FRAMEBUFFER,O);for(let Wn=0;Wn<It;Wn++)Yi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,pe.__webglTexture,X,he+Wn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,pe.__webglTexture,X),Ts?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,$e.__webglTexture,bt,Be+Wn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,$e.__webglTexture,bt),X!==0?P.blitFramebuffer(zt,te,zt+Ut,te+St,Ft,ue,Ft+Ut,ue+St,P.COLOR_BUFFER_BIT,P.NEAREST):Ts?P.copyTexSubImage3D(Ot,bt,Ft,ue,Be+Wn,zt,te,Ut,St):P.copyTexSubImage2D(Ot,bt,Ft,ue,zt,te,Ut,St);rt.bindFramebuffer(P.READ_FRAMEBUFFER,null),rt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ts?A.isDataTexture||A.isData3DTexture?P.texSubImage3D(Ot,bt,Ft,ue,Be,Ut,St,It,Se,Qe,be.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Ot,bt,Ft,ue,Be,Ut,St,It,Se,be.data):P.texSubImage3D(Ot,bt,Ft,ue,Be,Ut,St,It,Se,Qe,be):A.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,bt,Ft,ue,Ut,St,Se,Qe,be.data):A.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,bt,Ft,ue,be.width,be.height,Se,be.data):P.texSubImage2D(P.TEXTURE_2D,bt,Ft,ue,Ut,St,Se,Qe,be);rt.pixelStorei(P.UNPACK_ROW_LENGTH,ln),rt.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_e),rt.pixelStorei(P.UNPACK_SKIP_PIXELS,ws),rt.pixelStorei(P.UNPACK_SKIP_ROWS,je),rt.pixelStorei(P.UNPACK_SKIP_IMAGES,xc),bt===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&P.generateMipmap(Ot),rt.unbindTexture()},this.initRenderTarget=function(A){Ct.get(A).__webglFramebuffer===void 0&&Dt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Dt.setTextureCube(A,0):A.isData3DTexture?Dt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Dt.setTexture2DArray(A,0):Dt.setTexture2D(A,0),rt.unbindTexture()},this.resetState=function(){q=0,H=0,st=null,rt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}});function dx(s,t,{start:e=12,fadeIn:n=1.4,fadeOut:i=.6}={}){let r=xn.outCubic(gn((s-e)/n)),o=gn((t-s)/i);return{visible:s>=e,opacity:r*xn.smooth(o),reveal:r,spacing:ux(.9,.42,xn.outExpo(gn((s-e)/(n*1.8))))}}function fx(s,t,{inSec:e=.8,outSec:n=.8}={}){return Math.min(xn.smooth(gn(s/e)),xn.smooth(gn((t-s)/n)))}var gn,ux,xn,Wu,ar,oc=ge(()=>{gn=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),ux=(s,t,e)=>s+(t-s)*e,xn={linear:s=>s,smooth:s=>s*s*(3-2*s),smoother:s=>s*s*s*(s*(s*6-15)+10),inOutCubic:s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,outCubic:s=>1-Math.pow(1-s,3),inCubic:s=>s*s*s,outExpo:s=>s>=1?1:1-Math.pow(2,-10*s)},Wu=class{constructor({fps:t=30,duration:e=15}={}){this.fps=t,this.duration=e,this.frameCount=Math.round(t*e)}timeAtFrame(t){return t/this.fps}progressAtFrame(t){return gn(t/Math.max(1,this.frameCount-1))}segment(t,e,n,i=xn.linear){return i(gn((t-e)/(n-e)))}},ar=class{constructor(t){this.keys=[...t].sort((e,n)=>e.t-n.t)}sample(t){let e=this.keys;if(t<=e[0].t)return e[0].v;if(t>=e[e.length-1].t)return e[e.length-1].v;let n=0;for(;t>e[n+1].t;)n++;let i=(e[n].ease??xn.smooth)((t-e[n].t)/(e[n+1].t-e[n].t));return ux(e[n].v,e[n+1].v,i)}}});function fw(s,t,e=8){let n=s.count,i=s.instanceMatrix.array,r=new Map;for(let l=0;l<n;l++){let c=mx(Math.floor(i[l*16+12]/t),Math.floor(i[l*16+14]/t)),h=r.get(c);h||r.set(c,h=[]),h.push(l)}let o=s.geometry,a=[];for(let l of r.values()){let c=new Zt;for(let u of Object.keys(o.attributes)){let d=o.attributes[u];if(d.isInstancedBufferAttribute){let p=new d.array.constructor(l.length*d.itemSize);l.forEach((f,x)=>{for(let m=0;m<d.itemSize;m++)p[x*d.itemSize+m]=d.array[f*d.itemSize+m]}),c.setAttribute(u,new Cn(p,d.itemSize,d.normalized,d.meshPerAttribute))}else c.setAttribute(u,d)}o.index&&c.setIndex(o.index),c.groups=o.groups.slice(),c.boundingBox=o.boundingBox,c.boundingSphere=o.boundingSphere,c.boundingSphere||(o.computeBoundingSphere(),c.boundingSphere=o.boundingSphere);let h=new Kn(c,s.material,l.length);l.forEach((u,d)=>h.instanceMatrix.array.set(i.subarray(u*16,u*16+16),d*16)),h.instanceMatrix.needsUpdate=!0,s.instanceColor&&(h.instanceColor=new Cn(new Float32Array(l.length*3),3),l.forEach((u,d)=>h.instanceColor.array.set(s.instanceColor.array.subarray(u*3,u*3+3),d*3)),h.instanceColor.needsUpdate=!0),h.castShadow=s.castShadow,h.receiveShadow=s.receiveShadow,h.renderOrder=s.renderOrder,h.name=s.name,h.userData=s.userData,h.layers.mask=s.layers.mask,h.position.copy(s.position),h.quaternion.copy(s.quaternion),h.scale.copy(s.scale),h.frustumCulled=!0,h.computeBoundingSphere(),h.boundingSphere.radius+=e,a.push(h)}return a}function pw(s,t,e=2){let n=s.geometry,i=n.attributes.position,r=n.index;if(!r)return[s];let o=r.array,a=o.length/3,l=new Map;for(let h=0;h<a;h++){let u=o[h*3],d=o[h*3+1],p=o[h*3+2],f=(i.getX(u)+i.getX(d)+i.getX(p))/3,x=(i.getZ(u)+i.getZ(d)+i.getZ(p))/3,m=mx(Math.floor(f/t),Math.floor(x/t)),g=l.get(m);g||l.set(m,g=[]),g.push(h)}let c=[];for(let h of l.values()){let u=new o.constructor(h.length*3);h.forEach((m,g)=>{u[g*3]=o[m*3],u[g*3+1]=o[m*3+1],u[g*3+2]=o[m*3+2]});let d=new Zt;for(let m of Object.keys(n.attributes))d.setAttribute(m,n.attributes[m]);d.setIndex(new se(u,1));let p=new Ue,f=new L;for(let m=0;m<u.length;m++)f.fromBufferAttribute(i,u[m]),p.expandByPoint(f);d.boundingBox=p,d.boundingSphere=p.getBoundingSphere(new Ie),d.boundingSphere.radius+=e;let x=new fe(d,s.material);x.castShadow=s.castShadow,x.receiveShadow=s.receiveShadow,x.renderOrder=s.renderOrder,x.name=s.name+"-tile",x.userData=s.userData,x.position.copy(s.position),x.quaternion.copy(s.quaternion),x.scale.copy(s.scale),x.frustumCulled=!0,c.push(x)}return c}function gx(s,{exclude:t=[],instSize:e=350,mountainCell:n=3e3,only:i=null,minCount:r=2e3}={}){let o=new Set(t),a={instancedSrc:0,instancedTiles:0,mountainTiles:0,instances:0};for(let l of s.children.slice()){if(o.has(l)||l.isInstancedMesh&&l.count<r)continue;let c=null;if(l.isInstancedMesh&&!l.isPoints&&(!i||i==="inst")?(c=fw(l,e),a.instancedSrc++,a.instancedTiles+=c.length,a.instances+=l.count):l.isMesh&&l.name==="mountains"&&(!i||i==="mtn")&&(c=pw(l,n),a.mountainTiles=c.length),!!c){s.remove(l);for(let h of c)s.add(h)}}return a}var mx,xx=ge(()=>{Oe();mx=(s,t)=>s+"_"+t});function _x(s,t=ac){let e=s.get("haze"),n=e===null||e===""?1:Math.max(0,parseFloat(e)),i=(r,o)=>s.has(r)&&isFinite(parseFloat(s.get(r)))?parseFloat(s.get(r)):o;return{mult:isFinite(n)?n:1,start:i("hazeStart",t.start),end:i("hazeEnd",t.end),strength:i("hazeMax",t.strength),desat:i("hazeDesat",t.desat),mountain:i("hazeMtn",t.mountain)}}function vx(s,t,e){let n=new de,i={uHazeP:{value:n},uHazeHor:t.uHorizon,uHazeWarm:t.uHorizonWarm,uHazeSun:t.uSunDir},r={cfg:{...e},uniforms:i,materials:0,set(a){Object.assign(r.cfg,a);let l=r.cfg.strength*r.cfg.mult;n.set(r.cfg.start,r.cfg.end,Math.min(1,l),r.cfg.desat)}};r.set({});let o=new Set;return s.traverse(a=>{let l=a.material?Array.isArray(a.material)?a.material:[a.material]:[];for(let c of l){if(o.has(c)||c.isShaderMaterial&&!c.isMeshStandardMaterial||c.fog===!1||c.isPointsMaterial)continue;o.add(c);let h=String(a.name||"").startsWith("mountains")?r.cfg.mountain:1,u=c.onBeforeCompile,d=c.customProgramCacheKey();c.onBeforeCompile=function(p,f){u?.call(this,p,f);let x=p.fragmentShader;if(!x.includes("#include <fog_fragment>"))return;let m=x.includes("vViewPosition");Object.assign(p.uniforms,i),p.fragmentShader=x.replace("#include <fog_pars_fragment>",`#include <fog_pars_fragment>
uniform vec4 uHazeP; uniform vec3 uHazeHor, uHazeWarm, uHazeSun;`).replace("#include <fog_fragment>","#include <fog_fragment>"+mw.replace("HAZE_COL",m?gw:xw).replace("HZ_K",h.toFixed(3)))},c.customProgramCacheKey=()=>d+"|haze1|"+h,c.needsUpdate=!0,r.materials++}}),r}var ac,mw,gw,xw,Rp=ge(()=>{Oe();ac={start:700,end:7e3,strength:.6,desat:.55,mountain:.5};mw=`
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
#endif`,gw=`
    vec3 hzV = normalize((vec4(-vViewPosition, 0.0) * viewMatrix).xyz);
    float hzMu = max(dot(hzV, uHazeSun), 0.0);
    vec3 hzCol = mix(uHazeHor, uHazeWarm, pow(hzMu, 1.6));`,xw=`
    vec3 hzCol = uHazeHor;`});function yx(s){Xi(s,s&&s.contract===1,"contract: 1 \u304C\u5FC5\u8981");let t=s.meta;Xi(s,t&&t.id&&t.name?.ja&&t.name?.en&&t.season&&t.docTitle,"meta.{id,name.ja,name.en,season,docTitle}"),Xi(s,Array.isArray(s.captions)&&s.captions.length>0,"captions[]"),s.captions.forEach((e,n)=>{Xi(s,e.id&&e.title&&typeof e.a=="number"&&typeof e.b=="number"&&e.a<e.b,`captions[${n}] \u306F {id,title,sub,a<b}`),n&&Xi(s,e.a>=s.captions[n-1].b,`captions[${n}] \u306E\u7A93\u304C\u524D\u306E\u7A93\u3068\u91CD\u306A\u308B`)}),Xi(s,s.timeline&&s.timeline.duration>0&&typeof s.timeline.globalStart=="number","timeline.{globalStart,duration}"),Xi(s,s.ambient&&s.ambient.name&&s.ambient.counts&&s.ambient.counts.normal>0&&s.ambient.counts.light>0,"ambient.{name,counts.{normal,light}}"),Xi(s,s.tuning&&typeof s.tuning=="object","tuning\uFF08\u7A7A\u3067\u3082\u53EF\uFF09"),Xi(s,typeof s.buildScene=="function","buildScene(ctx)")}function Mx(s){for(let t of["frameState","setAmbientCount","setLayoutWeight"])if(typeof s[t]!="function")throw new Error(`\u30B7\u30FC\u30F3\u306B ${t}() \u304C\u3042\u308A\u307E\u305B\u3093`);for(let t of["scene","camera","look","rig"])if(!s[t])throw new Error(`\u30B7\u30FC\u30F3\u306B ${t} \u304C\u3042\u308A\u307E\u305B\u3093`)}function $u(s,{tiled:t,haze:e,tileExclude:n=[],skyUniforms:i}){s.tiled=t===void 0?!0:t,s.hazeCfg=e??{mult:1,...ac},s.tiled&&(s.tileStats=gx(s.scene,{exclude:n,only:typeof s.tiled=="string"?s.tiled:null})),s.haze=s.hazeCfg.mult>0&&i?vx(s.scene,i,s.hazeCfg):{cfg:s.hazeCfg,materials:0}}function Sx(s){let t=new Set,e=n=>{for(let i of Object.values(n))i&&i.isTexture&&!t.has(i)&&(t.add(i),i.dispose())};s.scene.traverse(n=>{n.geometry?.dispose?.();for(let i of Array.isArray(n.material)?n.material:n.material?[n.material]:[])t.has(i)||(t.add(i),e(i),i.dispose())}),s.scene.clear()}var Xi,lc=ge(()=>{xx();Rp();Xi=(s,t,e)=>{if(!t)throw new Error(`\u90FD\u5E02\u30E2\u30B8\u30E5\u30FC\u30EB "${s?.meta?.id??"?"}" \u304C\u5951\u7D04\u3092\u6E80\u305F\u3057\u3066\u3044\u307E\u305B\u3093: ${e}`)}});function bx(s,t,e,n,i){let r=i*i,o=r*i,a=(l,c,h,u)=>.5*(2*c+(-l+h)*i+(2*l-5*c+4*h-u)*r+(-l+3*c-3*h+u)*o);return[a(s[0],t[0],e[0],n[0]),a(s[1],t[1],e[1],n[1]),a(s[2],t[2],e[2],n[2])]}function vw(s,t,e=0){let n=(i,r)=>Math.sin(s*i+r+e);return[t*(n(1.7,.3)*.6+n(3.1,1.9)*.4),t*(n(1.3,2.1)*.6+n(2.7,.7)*.4),t*(n(1.1,4.2)*.6+n(2.3,3.3)*.4)]}var _w,lr,Pp=ge(()=>{oc();_w=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]];lr=class{constructor(t,{shakeAmp:e=0,shakeSeed:n=0,timeWarp:i=null}={}){this.keys=[...t].sort((r,o)=>r.t-o.t),this.shakeAmp=e,this.shakeSeed=n,this.timeWarp=i}sample(t){let e=this.keys;if(this.timeWarp){let x=e[0].t,m=e[e.length-1].t;t=x+(m-x)*this.timeWarp(gn((t-x)/(m-x)))}let n=e.length,i=gn(t,e[0].t,e[n-1].t),r=0;for(;r<n-2&&i>e[r+1].t;)r++;let o=e[r],a=e[r+1],l=(i-o.t)/(a.t-o.t),c=(o.ease??xn.smoother)(gn(l)),h=x=>Math.min(n-1,Math.max(0,x)),u=(x,m)=>e[h(x)][m],d=bx(u(r-1,"pos"),u(r,"pos"),u(r+1,"pos"),u(r+2,"pos"),c),p=bx(u(r-1,"target"),u(r,"target"),u(r+1,"target"),u(r+2,"target"),c),f=o.fov+(a.fov-o.fov)*c;return this.shakeAmp>0&&(d=_w(d,vw(t,this.shakeAmp,this.shakeSeed))),{position:d,target:p,fov:f}}}});var Uo,Ip=ge(()=>{Oe();Pp();oc();Uo=class{constructor(t,e,n,{renderer:i}={}){this.meta=t,this.glRenderer=i,this.duration=t.durationSec??15,this.timeline=new Wu({fps:30,duration:this.duration}),this.scene=new En,this.camera=new Ee(35,16/9,4,4e4),this.titleInfo={englishName:t.englishName,name:t.name,index:e,total:n},this.rig=null,this.tracks={},this.look={grade:{}},this.focusLead=0,this.timeOffset=0,this.showTitle=!0,this.fadeSec=.8}async build(){throw new Error("build() \u3092\u5B9F\u88C5\u3057\u3066\u304F\u3060\u3055\u3044")}sampleTrack(t,e,n=0){return this.tracks[t]?this.tracks[t].sample(e):n}frameState(t){let e=t+this.timeOffset,n=this.rig.sample(e);this.camera.position.set(...n.position),this.camera.lookAt(...n.target),this.camera.fov=n.fov;let i=n.position[0]-n.target[0],r=n.position[1]-n.target[1],o=n.position[2]-n.target[2],a=Math.hypot(i,r,o)+this.focusLead;return this.applyTime?.(e,n),{exposure:this.sampleTrack("exposure",e,1),bloom:this.sampleTrack("bloom",e,.6),bloomRadius:this.sampleTrack("bloomRadius",e,.7),bloomThreshold:this.sampleTrack("bloomThreshold",e,.9),dofAperture:this.sampleTrack("dofAperture",e,1),dofMaxBlur:this.sampleTrack("dofMaxBlur",e,6),focusDistance:a}}}});function Ju(s=1){let t=s>>>0,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return e.range=(n,i)=>n+(i-n)*e(),e.int=(n,i)=>Math.floor(n+(i-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e}function _i(s=7){let t=(i,r)=>{let o=Math.imul(i,374761393)+Math.imul(r,668265263)+Math.imul(s,2147483647);return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967296},e=i=>i*i*(3-2*i),n=(i,r)=>{let o=Math.floor(i),a=Math.floor(r),l=e(i-o),c=e(r-a),h=t(o,a),u=t(o+1,a),d=t(o,a+1),p=t(o+1,a+1);return h+(u-h)*l+(d-h)*c+(h-u-d+p)*l*c};return n.fbm=(i,r,o=5)=>{let a=0,l=.5,c=1,h=0;for(let u=0;u<o;u++)a+=l*n(i*c,r*c),h+=l,l*=.5,c*=2.03;return a/h},n.ridged=(i,r,o=5)=>{let a=0,l=.5,c=1,h=0;for(let u=0;u<o;u++){let d=1-Math.abs(n(i*c,r*c)*2-1);a+=l*d*d,h+=l,l*=.5,c*=2.03}return a/h},n}var Ku=ge(()=>{});var Vn,Ms=ge(()=>{Vn=`
float hash11(float p){ p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash21(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  float a = hash21(i), b = hash21(i + vec2(1., 0.)), c = hash21(i + vec2(0., 1.)), d = hash21(i + vec2(1., 1.));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 5; i++){ s += a * vnoise(p); p = p * 2.03 + vec2(17.1, 9.7); a *= .5; } return s; }
`});function Qu(s,{sunDir:t,colors:e}){let n={uSunDir:{value:t.clone().normalize()},uTime:{value:0},uZenith:{value:new s.Color(e.zenith)},uHorizon:{value:new s.Color(e.horizon)},uHorizonWarm:{value:new s.Color(e.horizonWarm)},uSunColor:{value:new s.Color(e.sun)},uCloudLit:{value:new s.Color(e.cloudLit)},uCloudDark:{value:new s.Color(e.cloudDark)},uCloudCover:{value:e.cloudCover??.5},uSunStrength:{value:1}},i=new s.ShaderMaterial({uniforms:n,side:s.BackSide,depthWrite:!1,depthTest:!1,fog:!1,vertexShader:`
      varying vec3 vDir;
      void main(){
        vDir = position;
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p;
      }`,fragmentShader:`
      uniform vec3 uSunDir, uZenith, uHorizon, uHorizonWarm, uSunColor, uCloudLit, uCloudDark;
      uniform float uTime, uCloudCover, uSunStrength;
      varying vec3 vDir;
      ${Vn}
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
      }`}),r=new s.Mesh(new s.SphereGeometry(1e3,48,24),i);return r.frustumCulled=!1,r.renderOrder=-1e3,r.name="sky",{mesh:r,material:i,uniforms:n}}var Lp=ge(()=>{Ms()});function ju(s,{uNight:t,uSnow:e}){let n=new s.MeshStandardMaterial({color:16777215,roughness:.8,metalness:0});return n.customProgramCacheKey=()=>"facade-v3",n.onBeforeCompile=i=>{i.uniforms.uNight=t,i.uniforms.uSnow=e,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aBld; attribute vec4 aPar;
        varying vec4 vBld; varying vec4 vPar; varying vec3 vWP; varying vec3 vON; varying float vTopDist;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vBld = aBld; vPar = aPar; vON = normal;
        mat4 fim = instanceMatrix;
        vWP = (modelMatrix * fim * vec4(transformed, 1.0)).xyz;
        vTopDist = (1.0 - position.y) * fim[1][1];`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uNight, uSnow;
        varying vec4 vBld; varying vec4 vPar; varying vec3 vWP; varying vec3 vON; varying float vTopDist;
        ${Vn}
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
        totalEmissiveRadiance += fEmis;`)},n}function wx(s){let t=[-.5,0,-.5],e=[.5,0,-.5],n=[0,1,-.5],i=[-.5,0,.5],r=[.5,0,.5],o=[0,1,.5],a=[t,n,e,i,r,o,t,i,o,t,o,n,e,n,o,e,o,r,t,e,r,t,r,i],l=new s.BufferGeometry;return l.setAttribute("position",new s.Float32BufferAttribute(a.flat(),3)),l.computeVertexNormals(),l}function Tx(s){let t=new s.CylinderGeometry(.5,.5,1,14,1,!1);return t.translate(0,.5,0),t}function yw(s,t){let e=n=>{let i=Math.sin((t+n)*12.9898)*43758.5453;return i-Math.floor(i)};switch(s){case 2:return[2.4+e(1)*1.4,3.6+e(2)*.6,.94,.55+e(3)*.2];case 3:return[2.6+e(1)*1,2.8+e(2)*.3,.55+e(3)*.15,.5+e(4)*.12];case 4:return[3.6+e(1)*1.6,3.8+e(2)*.8,.45+e(3)*.2,.7];case 1:return[2.2+e(1)*.8,3.4+e(2)*.6,.5+e(3)*.15,.6+e(4)*.12];default:return[2.7+e(1)*1.2,3.5+e(2)*.5,.62+e(3)*.2,.55+e(4)*.15]}}var Ss,vi,td=ge(()=>{Ms();Ss=class{constructor(t,e,n=6e4,i=null){this.THREE=t,this.material=e,this.capacity=n,this.n=0,this.geometry=i,this.mats=new Float32Array(n*16),this.bld=new Float32Array(n*4),this.par=new Float32Array(n*4),this._m=new t.Matrix4,this._p=new t.Vector3,this._q=new t.Quaternion,this._s=new t.Vector3}add(t,e,n,i,r,o,a,l,c=.5,h=0,u=null){if(this.n>=this.capacity)return;let{_m:d,_p:p,_q:f,_s:x}=this;p.set(t,e,n),x.set(i,r,o),f.setFromAxisAngle(this.THREE.Object3D.DEFAULT_UP,h),d.compose(p,f,x),d.toArray(this.mats,this.n*16);let m=this.n*4;this.bld[m]=l,this.bld[m+1]=a,this.bld[m+2]=c,this.bld[m+3]=0;let g=u??yw(a,l);this.par[m]=g[0],this.par[m+1]=g[1],this.par[m+2]=g[2],this.par[m+3]=g[3],this.n++}build({castShadow:t=!0}={}){let e=this.THREE,n=this.geometry??(()=>{let r=new e.BoxGeometry(1,1,1);return r.translate(0,.5,0),r})();n.setAttribute("aBld",new e.InstancedBufferAttribute(this.bld.slice(0,this.n*4),4)),n.setAttribute("aPar",new e.InstancedBufferAttribute(this.par.slice(0,this.n*4),4));let i=new e.InstancedMesh(n,this.material,this.n);return i.instanceMatrix.array.set(this.mats.subarray(0,this.n*16)),i.instanceMatrix.needsUpdate=!0,i.castShadow=t,i.receiveShadow=!0,i.frustumCulled=!1,i}};vi=class{constructor(t,e){this.THREE=t,this.material=e,this.items=[]}add(t,e,n,i=n){this.items.push([t,e,n,i])}build({castShadow:t=!1,sides:e=6}={}){let n=this.THREE,i=new n.CylinderGeometry(1,1,1,e,1,!1),r=new n.InstancedMesh(i,this.material,this.items.length),o=new Float32Array(this.items.length),a=new n.Matrix4,l=new n.Quaternion,c=new n.Vector3(0,1,0),h=new n.Vector3,u=new n.Vector3,d=new n.Vector3,p=new n.Vector3,f=new n.Vector3;this.items.forEach(([m,g,_,y],M)=>{h.set(...m),u.set(...g),d.subVectors(u,h);let w=d.length();d.normalize(),l.setFromUnitVectors(c,d),p.addVectors(h,u).multiplyScalar(.5),f.set(_,w,_),a.compose(p,l,f),r.setMatrixAt(M,a),o[M]=y/_}),i.setAttribute("aTaper",new n.InstancedBufferAttribute(o,1));let x=this.material;if(!x.userData.beamTaper){x.userData.beamTaper=!0;let m=x.onBeforeCompile;x.onBeforeCompile=(_,y)=>{m?.(_,y),_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
attribute float aTaper;`).replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
transformed.xz *= mix(1.0, aTaper, position.y + 0.5);
#endif`)};let g=x.customProgramCacheKey?.bind(x);x.customProgramCacheKey=()=>(g?g():"")+"|taper",x.needsUpdate=!0}return r.instanceMatrix.needsUpdate=!0,r.castShadow=t,r.receiveShadow=!1,r.frustumCulled=!1,r}}});function Ax(){let s=_i(11),t=_i(23),e=_i(41);return(n,i)=>{let r=Math.hypot(n,i),o=Math.atan2(i,n),a=Math.abs((o-2.75+Math.PI*3)%(Math.PI*2)-Math.PI),l=Math.exp(-((a/.95)**2)),c=n+1300*(t.fbm(n*18e-5,i*18e-5,3)-.5)*2,h=i+1300*(t.fbm(n*18e-5+7.3,i*18e-5-2.1,3)-.5)*2,u=s.ridged(c*42e-5+3.1,h*42e-5-1.7,6),d=s.fbm(n*9e-4,i*9e-4,4),p=yi(6500,15e3,r)*l*(110+560*u);p+=yi(14e3,3e4,r)*l*380*e.ridged(c*2e-4+9.1,h*2e-4+4.4,5);for(let f of Mw){let x=Math.cos(f.rot),m=Math.sin(f.rot),g=n-f.x,_=i-f.z,y=(g*x+_*m)/f.sx,M=(-g*m+_*x)/f.sz,w=y*y+M*M;if(w>16)continue;let T=Math.exp(-Math.pow(w,.82)*1.15),v=.66+.62*s.ridged(c*8e-4+f.x*3e-4,h*8e-4+f.z*3e-4,5);p+=f.h*T*(f.h>400?v:.86+.28*d)}return p+=(e.ridged(n*.0026,i*.0026,4)-.3)*Math.min(95,p*.13),p=Math.max(0,p+(s.fbm(n*.012,i*.012,3)-.5)*Math.min(14,p*.03)),p}}function ed(s,{heightFn:t,y:e=-4,rInner:n=2500,rOuter:i=44e3,rings:r=420,segs:o=820,thA:a=.55,thB:l=3.95,snowLine:c=260}){let h=(r+1)*(o+1),u=new Float32Array(h*3),d=new Float32Array(h),p=Math.log(i/n),f=0;for(let v=0;v<=r;v++){let S=n*Math.exp(p*v/r);for(let R=0;R<=o;R++){let E=a+(l-a)*R/o,I=Math.cos(E)*S,N=Math.sin(E)*S,z=yi(0,.18,R/o)*yi(0,.18,1-R/o),D=t(I,N)*(0+z);u[f++]=I,u[f++]=D,u[f++]=N,d[v*(o+1)+R]=D}}let x=new Uint32Array(r*o*6),m=0;for(let v=0;v<r;v++)for(let S=0;S<o;S++){let R=v*(o+1)+S,E=R+1,I=R+o+1,N=I+1;x[m++]=R,x[m++]=I,x[m++]=E,x[m++]=E,x[m++]=I,x[m++]=N}let g=new s.BufferGeometry;g.setAttribute("position",new s.BufferAttribute(u,3)),g.setIndex(new s.BufferAttribute(x,1)),g.computeVertexNormals();let _=g.attributes.normal,y=new Float32Array(h*3),M=_i(31);for(let v=0;v<h;v++){let S=u[v*3],R=u[v*3+2],E=d[v],I=1-_.getY(v),N=M.fbm(S*.0011,R*.0011,4),z=M.fbm(S*.006+5,R*.006,3),D=_.getX(v)*-.66+_.getZ(v)*.71,O=yi(c-140,c+280,E+(N-.5)*220-D*70)*(1-yi(.12,.42,I)*.8),q=yi(15,130,E)*(1-yi(850,1150,E+(N-.5)*200)),H=yi(.22,.5,I)*yi(300,800,E),st=[.86,.88,.93],W=[.2,.235,.235],Z=[.3,.285,.29],nt=[.93,.945,.975],At=[0,0,0];for(let ot=0;ot<3;ot++){let G=st[ot]+(W[ot]-st[ot])*q;G+=(Z[ot]-G)*H*.7,G=G+(nt[ot]-G)*O,At[ot]=G*(.9+.2*z)}y[v*3]=At[0],y[v*3+1]=At[1],y[v*3+2]=At[2]}g.setAttribute("color",new s.BufferAttribute(y,3));let w=new s.MeshStandardMaterial({vertexColors:!0,roughness:.93,metalness:0});w.customProgramCacheKey=()=>"mountain-v1",w.onBeforeCompile=v=>{v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP;
${Vn}`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          // \u6A39\u6797\u306E\u7C92\u72B6\u611F\u30FB\u96EA\u9762\u306E\u3046\u306D\u308A\uFF08\u8DDD\u96E2\u306B\u5FDC\u3058\u3066\u5F31\u3081\u308B\uFF09
          float d = length(vWP - cameraPosition);
          float fadeD = 1.0 - smoothstep(4000.0, 16000.0, d);
          float tex = 0.55 * vnoise(vWP.xz * 0.045) + 0.3 * vnoise(vWP.xz * 0.16) + 0.15 * vnoise(vWP.xz * 0.6);
          float lum = dot(diffuseColor.rgb, vec3(0.333));
          float forestness = 1.0 - smoothstep(0.38, 0.7, lum);
          diffuseColor.rgb *= 1.0 + (tex - 0.5) * (0.5 * forestness + 0.12) * (0.4 + 0.6 * fadeD);
        }`)};let T=new s.Mesh(g,w);return T.position.y=e,T.castShadow=!1,T.receiveShadow=!1,T.frustumCulled=!1,T.name="mountains",T}function Ex(s,{size:t=9e4,y:e=-40}){let n=new s.PlaneGeometry(t,t,1,1);n.rotateX(-Math.PI/2);let i=new s.MeshStandardMaterial({color:14212584,roughness:.95}),r=new s.Mesh(n,i);return r.position.y=e,r.frustumCulled=!1,r.name="far-plain",r}var yi,Mw,Dp=ge(()=>{Ku();Ms();yi=(s,t,e)=>{let n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)},Mw=[{name:"\u624B\u7A32\u5C71",x:-12800,z:-3300,h:1023,sx:3600,sz:2700,rot:.5},{name:"\u4E09\u89D2\u5C71\u301C\u5965\u624B\u7A32",x:-9e3,z:-1e3,h:560,sx:2400,sz:1500,rot:.8},{name:"\u5186\u5C71",x:-4500,z:1300,h:226,sx:900,sz:700,rot:.3},{name:"\u85FB\u5CA9\u5C71",x:-2500,z:3650,h:531,sx:1500,sz:1100,rot:2.4},{name:"\u4E09\u89D2\u5C71\u30FB\u8352\u4E95\u5C71\u65B9\u9762",x:-6200,z:600,h:311,sx:1100,sz:800,rot:.2},{name:"\u7A7A\u6CBC\u5CB3",x:-14800,z:7400,h:1099,sx:3200,sz:2400,rot:2.2},{name:"\u672D\u5E4C\u5CB3",x:-16500,z:9600,h:1293,sx:3800,sz:2600,rot:2},{name:"\u6075\u5EAD\u5CB3\u65B9\u9762",x:-8e3,z:22e3,h:1320,sx:4500,sz:3500,rot:.6},{name:"\u4F59\u5E02\u5CB3\u65B9\u9762",x:-34e3,z:-4e3,h:1488,sx:6500,sz:4500,rot:.2}]});function Mi(s,{positions:t,colors:e,sizes:n,fogDensity:i=1e-4,minPx:r=1.5,maxPx:o=48}){let a=new s.BufferGeometry;a.setAttribute("position",new s.BufferAttribute(t,3)),a.setAttribute("aColor",new s.BufferAttribute(e,3)),a.setAttribute("aSize",new s.BufferAttribute(n,1));let l={uProj:{value:1e3},uFog:{value:i},uGain:{value:1},uMinPx:{value:r},uMaxPx:{value:o}},c=new s.ShaderMaterial({uniforms:l,transparent:!0,depthWrite:!1,blending:s.AdditiveBlending,vertexShader:`
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
      }`}),h=new s.Points(a,c);return h.frustumCulled=!1,{points:h,geo:a,uniforms:l,material:c}}function Cx(s,{count:t=9e3,box:e=160,fall:n=3.2,wind:i=[2.2,.8],size:r=.11,bright:o=1}){let a=new Float32Array(t*4),l=12345,c=()=>(l=Math.imul(l,1664525)+1013904223>>>0)/4294967296;for(let f=0;f<t;f++)a[f*4]=c(),a[f*4+1]=c(),a[f*4+2]=c(),a[f*4+3]=c();let h=new s.BufferGeometry;h.setAttribute("position",new s.BufferAttribute(new Float32Array(t*3),3)),h.setAttribute("aSeed",new s.BufferAttribute(a,4));let u={uTime:{value:0},uCam:{value:new s.Vector3},uBox:{value:e},uFall:{value:n},uWind:{value:new s.Vector2(i[0],i[1])},uSize:{value:r},uProj:{value:1e3},uBright:{value:o},uFog:{value:1e-4},uTint:{value:new s.Color(1,.92,.88)}},d=new s.ShaderMaterial({uniforms:u,transparent:!0,depthWrite:!1,blending:s.AdditiveBlending,vertexShader:`
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
      }`}),p=new s.Points(h,d);return p.frustumCulled=!1,{points:p,uniforms:u,material:d}}var nd=ge(()=>{Ms()});function Rx(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Np({panes:s,rows:t,w:e,h:n,seed:i,deck:r}){let o=()=>{let g=document.createElement("canvas");return g.width=e,g.height=n,g},a=o(),l=o(),c=o(),h=a.getContext("2d"),u=l.getContext("2d"),d=c.getContext("2d"),p=Rx(i),f=e/s;h.fillStyle=r?"#c9ccd0":"#b9b5ac",h.fillRect(0,0,e,n),u.fillStyle="#000",u.fillRect(0,0,e,n),d.fillStyle="#c8c8c8",d.fillRect(0,0,e,n);let x=r?[{y0:0,y1:.14,glass:!1},{y0:.14,y1:.84,glass:!0},{y0:.84,y1:1,glass:!1}]:[{y0:0,y1:.5,glass:!0,shop:!0},{y0:.5,y1:.6,glass:!1},{y0:.6,y1:.9,glass:!0},{y0:.9,y1:1,glass:!1}];for(let g of x){let _=Math.round(g.y0*n),y=Math.round(g.y1*n);if(!g.glass){h.fillStyle=r?"#aeb2b8":"#9a968d",h.fillRect(0,_,e,y-_),h.fillStyle="rgba(0,0,0,0.22)",h.fillRect(0,_,e,2),h.fillRect(0,y-3,e,3),h.fillStyle="rgba(255,255,255,0.25)",h.fillRect(0,_+2,e,2);continue}for(let M=0;M<s;M++){let w=Math.round(M*f),T=Math.round((M+1)*f),v=3,S=w+v,R=T-v,E=_+v,I=y-v,N=.55+.45*p(),z=h.createLinearGradient(0,E,0,I);z.addColorStop(0,`rgb(${Math.round(70+80*N)},${Math.round(95+90*N)},${Math.round(125+90*N)})`),z.addColorStop(.55,`rgb(${Math.round(24+30*N)},${Math.round(34+36*N)},${Math.round(50+40*N)})`),z.addColorStop(1,`rgb(${Math.round(14+14*N)},${Math.round(18+16*N)},${Math.round(26+18*N)})`),h.fillStyle=z,h.fillRect(S,E,R-S,I-E),h.fillStyle=r?"#d7dade":"#8e8a82",h.fillRect(S+(R-S)*.5-1,E,2,I-E),h.fillRect(S,E+(I-E)*.62,R-S,2);let D=p()<(g.shop?.82:.62),O=.35+.65*p(),q=p()<.72,H=p()<.3?.2+.6*p():0;if(D){let st=u.createLinearGradient(0,E,0,I),W=q?[255,196,130]:[215,232,255];st.addColorStop(0,`rgb(${W[0]*O|0},${W[1]*O|0},${W[2]*O|0})`),st.addColorStop(1,`rgb(${W[0]*O*.55|0},${W[1]*O*.55|0},${W[2]*O*.55|0})`),u.fillStyle=st,u.fillRect(S,E,R-S,I-E),u.fillStyle="rgba(0,0,0,0.25)",u.fillRect(S,E+(I-E)*.62,R-S,(I-E)*.38)}H>0&&(h.fillStyle="#b9ad98",h.fillRect(S,E,R-S,(I-E)*H),D&&(u.fillStyle=`rgb(${200*O|0},${150*O|0},${100*O|0})`,u.fillRect(S,E,R-S,(I-E)*H))),d.fillStyle="#1a1a60",d.fillRect(S,E,R-S,I-E),d.fillStyle="#c8c8a0",d.fillRect(S+(R-S)*.5-1,E,2,I-E)}if(g.shop)for(let M=0;M<s;M+=5){let w=Math.round(M*f)+4;h.fillStyle="#2a2a2c",h.fillRect(w,_+(y-_)*.1,f*1.6,(y-_)*.9),u.fillStyle="#ffd9a8",u.fillRect(w+4,_+(y-_)*.16,f*1.6-8,(y-_)*.74)}}let m=(g,_)=>{let y=new Jt.CanvasTexture(g);return _&&(y.colorSpace=Jt.SRGBColorSpace),y.anisotropy=8,y.generateMipmaps=!0,y.minFilter=Jt.LinearMipmapLinearFilter,y};return{map:m(a,!0),emissiveMap:m(l,!0),rough:m(c,!1)}}function Px(s,{x:t,z:e}){let n={},i=new Jt.MeshStandardMaterial({color:14475235,roughness:.5,metalness:.45,emissive:new Jt.Color(.7,.8,1),emissiveIntensity:0}),r=new Jt.MeshStandardMaterial({color:10133414,roughness:.55,metalness:.55,emissive:new Jt.Color(.7,.8,1),emissiveIntensity:0}),o=new Jt.MeshStandardMaterial({color:10328724,roughness:.9}),a=new Jt.MeshStandardMaterial({color:15856889,roughness:.7});n.steel=i,n.steelDark=r;let l=new vi(Jt,i),c=new vi(Jt,r),h=(k,P,$,ct,Vt,rt=!0)=>{let qt=new Jt.Mesh(k,P);return qt.position.set($,ct,Vt),qt.castShadow=rt,qt.receiveShadow=!0,s.add(qt),qt},u=10,d=87,p=13.5,f=3.7,x=k=>p+(f-p)*((k-u)/(d-u)),m=[[1,1],[1,-1],[-1,-1],[-1,1]],g=(k,P,$,ct=1)=>{let Vt=x($)*ct;return[t+k*Vt,$,e+P*Vt]},_=(k,P,$)=>k+(P-k)*$,y=k=>(k-u)/(d-u),M=[u,18.5,27,35.5,44.5,53.5,62,70,77.5,83,d],w=(k,P,$)=>[_(k[0],P[0],$),_(k[1],P[1],$),_(k[2],P[2],$)],T=(k,P)=>{let $=[P[0]-k[0],P[1]-k[1],P[2]-k[2]],ct=Math.hypot(...$);return[$[0]/ct,$[1]/ct,$[2]/ct]},v=(k,P,$)=>[k[0]+P[0]*$,k[1]+P[1]*$,k[2]+P[2]*$],S=(k,P,$)=>{l.add(k,P,$);let ct=T(k,P);c.add(k,v(k,ct,.7),$*1.7,$*1.35),c.add(P,v(P,ct,-.7),$*1.7,$*1.35)};for(let k=0;k<M.length-1;k++){let P=M[k],$=M[k+1],ct=y(P),Vt=y($),rt=_(.82,.36,ct),qt=_(.82,.36,Vt),Ct=_(.3,.13,(ct+Vt)/2),Dt=_(.36,.16,Vt);for(let C=0;C<4;C++){let[b,B]=m[C],[at,j]=m[(C+1)%4];l.add(g(b,B,P),g(b,B,$),rt,qt),l.add(g(b,B,P,.9),g(b,B,$,.9),rt*.5,qt*.5);let dt=(P+$)/2;l.add(g(b,B,dt),g(b,B,dt,.9),.08),S(g(b,B,P),g(at,j,$),Ct),S(g(at,j,P),g(b,B,$),Ct),l.add(g(b,B,$),g(at,j,$),Dt),k%2===0&&k<6&&l.add(g(b,B,dt),g(at,j,dt),Dt*.55);let xt=g(b,B,$,.62),K=g(at,j,$,.62);l.add(xt,K,Dt*.5),l.add(g(b,B,$,.95),xt,Dt*.45),c.add([g(b,B,$)[0],$-.55,g(b,B,$)[2]],[g(b,B,$)[0],$+.55,g(b,B,$)[2]],qt*1.5),c.add([g(b,B,$)[0],$-.07,g(b,B,$)[2]],[g(b,B,$)[0],$+.07,g(b,B,$)[2]],qt*2.7)}if(k%2===1){let C=(b,B)=>g(b,B,$,.62);l.add(C(1,1),C(-1,-1),.09),l.add(C(1,-1),C(-1,1),.09)}}for(let[k,P]of m){let $=g(k,P,u);h(new Jt.BoxGeometry(3.6,1.6,3.6),o,$[0],u+.2,$[2]),c.add([$[0],u+.9,$[2]],[$[0],u+1.5,$[2]],1.5,1)}let R=(k,P,$)=>[t+k*1.35,$,e+P*1.35];for(let[k,P]of m)l.add(R(k,P,u),R(k,P,d+3),.2);for(let k=0;k<M.length;k++){let P=M[k];for(let $=0;$<4;$++){let[ct,Vt]=m[$],[rt,qt]=m[($+1)%4];if(l.add(R(ct,Vt,P),R(rt,qt,P),.1),k<M.length-1){let Ct=M[k+1];l.add(R(ct,Vt,P),R(rt,qt,Ct),.07)}}}let E=(k,P)=>{let $=x(k)*P;h(new Jt.BoxGeometry($*2,.22,$*2),r,t,k,e);for(let ct=0;ct<4;ct++){let[Vt,rt]=m[ct],[qt,Ct]=m[(ct+1)%4],Dt=[t+Vt*$,k+1.05,e+rt*$],C=[t+qt*$,k+1.05,e+Ct*$];l.add(Dt,C,.045),l.add(w(Dt,C,0),w(Dt,C,1),.045);let b=Math.max(2,Math.round($*2/1.9));for(let B=0;B<b;B++){let at=w([Dt[0],k,Dt[2]],[C[0],k,C[2]],B/b);l.add(at,[at[0],k+1.05,at[2]],.035)}l.add([Dt[0],k+.55,Dt[2]],[C[0],k+.55,C[2]],.03)}for(let[ct,Vt]of m)l.add(R(ct,Vt,k-.1),g(ct,Vt,k,.85),.1)};E(35.5,.86),E(62,.86);let I=15.6,N=90,z=4.5,D=h(new Jt.CylinderGeometry(6.6*Math.SQRT2,3.9*Math.SQRT2,3.3,4,1),i,t,88.35,e);D.rotation.y=Math.PI/4;for(let[k,P]of m){c.add([t+k*3.9,86.7,e+P*3.9],[t+k*6.6,90,e+P*6.6],.28);for(let $ of[-.5,0,.5]){let ct=[t+k*3.9*1,86.7,e+P*3.9],Vt=[t+k*6.6,90,e+P*6.6]}}for(let k=0;k<4;k++){let[P,$]=m[k],[ct,Vt]=m[(k+1)%4],rt=[(P+ct)/2,($+Vt)/2];c.add([t+rt[0]*3.9,86.7,e+rt[1]*3.9],[t+rt[0]*6.6,90,e+rt[1]*6.6],.16)}for(let[k,P]of m)h(new Jt.BoxGeometry(1.6,.5,1.6),r,t+k*3.7,86.8,e+P*3.7);h(new Jt.BoxGeometry(I+.8,.45,I+.8),r,t,90,e);for(let k=-3;k<=3;k++)l.add([t-I/2,89.6,e+k*2.2],[t+I/2,89.6,e+k*2.2],.12),l.add([t+k*2.2,89.6,e-I/2],[t+k*2.2,89.6,e+I/2],.12);let O=Np({panes:15,rows:1,w:1024,h:192,seed:77,deck:!0}),q=new Jt.MeshStandardMaterial({map:O.map,emissiveMap:O.emissiveMap,emissive:new Jt.Color(1,1,1),emissiveIntensity:.4,roughnessMap:O.rough,metalnessMap:O.rough,roughness:1,metalness:1});n.deckMat=q;let H=h(new Jt.BoxGeometry(I,z,I),[q,q,i,r,q,q],t,N+.2+z/2,e),st=N+.2+z;h(new Jt.BoxGeometry(I+1.4,.55,I+1.4),i,t,st+.28,e),h(new Jt.BoxGeometry(I+.9,.4,I+.9),r,t,N+.2,e);let W=(I+1.4)/2-.2,Z=st+.55;for(let k=0;k<4;k++){let[P,$]=m[k],[ct,Vt]=m[(k+1)%4],rt=[t+P*W,Z+1,e+$*W],qt=[t+ct*W,Z+1,e+Vt*W];l.add(rt,qt,.05),l.add([rt[0],Z+.5,rt[2]],[qt[0],Z+.5,qt[2]],.03);for(let Ct=0;Ct<10;Ct++){let Dt=w([rt[0],Z,rt[2]],[qt[0],Z,qt[2]],Ct/10);l.add(Dt,[Dt[0],Z+1,Dt[2]],.035)}}h(new Jt.BoxGeometry(6.2,2.8,6.2),i,t,Z+1.4,e),h(new Jt.BoxGeometry(3.6,1.6,3.6),r,t+.4,Z+3.6,e-.3),h(new Jt.CylinderGeometry(.9,.9,1.4,12),r,t-4.8,Z+.7,e+3.8),h(new Jt.CylinderGeometry(.5,.5,1.1,10),r,t+4.6,Z+.55,e-4.2),h(new Jt.BoxGeometry(2.2,1,1.4),r,t+4.5,Z+.5,e+4.4);let nt=Z+3.2,At=126.5,ot=k=>_(2.2,.95,(k-nt)/(At-nt)),G=(k,P,$,ct=1)=>[t+k*ot($)*ct,$,e+P*ot($)*ct],lt=6,vt=[];for(let k=0;k<=lt;k++)vt.push(_(nt,At,k/lt));for(let k=0;k<lt;k++){let P=vt[k],$=vt[k+1],ct=k/lt,Vt=_(.34,.17,ct);for(let rt=0;rt<4;rt++){let[qt,Ct]=m[rt],[Dt,C]=m[(rt+1)%4];l.add(G(qt,Ct,P),G(qt,Ct,$),Vt,Vt*.92),S(G(qt,Ct,P),G(Dt,C,$),.095),S(G(Dt,C,P),G(qt,Ct,$),.095),l.add(G(qt,Ct,$),G(Dt,C,$),.12);let b=G(qt,Ct,$);c.add([b[0],$-.3,b[2]],[b[0],$+.3,b[2]],Vt*1.5)}}let kt=(k,P)=>{h(new Jt.BoxGeometry(P*2,.15,P*2),r,t,k,e,!1);for(let $=0;$<4;$++){let[ct,Vt]=m[$],[rt,qt]=m[($+1)%4],Ct=[t+ct*P,k+.95,e+Vt*P],Dt=[t+rt*P,k+.95,e+qt*P];l.add(Ct,Dt,.04);for(let C=0;C<4;C++){let b=w([Ct[0],k,Ct[2]],[Dt[0],k,Dt[2]],C/4);l.add(b,[b[0],k+.95,b[2]],.03)}}};kt(vt[3],2.9),kt(vt[5],2.4);let wt=new Jt.MeshStandardMaterial({color:15922164,roughness:.4,metalness:.5,side:Jt.DoubleSide}),Ht=new Jt.SphereGeometry(1.15,18,8,0,Math.PI*2,0,.75),ye=(k,P,$)=>{let ct=new Jt.Mesh(Ht,wt);ct.position.set(t+Math.cos(k)*3.6,P,e+Math.sin(k)*3.6),ct.rotation.set(0,-k+Math.PI/2,Math.PI/2+.2*0),ct.rotateZ(0),ct.scale.setScalar($),ct.lookAt(t+Math.cos(k)*30,P+1,e+Math.sin(k)*30),ct.rotateX(Math.PI/2*0),ct.castShadow=!0,s.add(ct),l.add([t+Math.cos(k)*2.4,P-.1,e+Math.sin(k)*2.4],[t+Math.cos(k)*3.5,P,e+Math.sin(k)*3.5],.1),l.add([t+Math.cos(k)*3.6,P,e+Math.sin(k)*3.6],[t+Math.cos(k)*4.5,P+.1,e+Math.sin(k)*4.5],.05,.03)};ye(.6,vt[4]+.3,1),ye(3.5,vt[4]+.3,.8),ye(5.2,vt[2]+.3,.9);for(let k=0;k<4;k++){let P=k*Math.PI/2+Math.PI/4,$=new Jt.Mesh(new Jt.BoxGeometry(.14,2.4,.55),i);$.position.set(t+Math.cos(P)*3.3,vt[5]+1.2,e+Math.sin(P)*3.3),$.rotation.y=-P,$.castShadow=!0,s.add($),l.add([t+Math.cos(P)*1.5,vt[5]+1.2,e+Math.sin(P)*1.5],[t+Math.cos(P)*3.2,vt[5]+1.2,e+Math.sin(P)*3.2],.06)}let Pt=At;h(new Jt.CylinderGeometry(.5,.62,.9,12),r,t,Pt+.45,e),c.add([t,Pt,e],[t,Pt+8,e],.55,.42),l.add([t,Pt,e],[t,Pt+8,e],.5,.38),c.add([t,Pt+8,e],[t,Pt+8.4,e],.9,.9),c.add([t,Pt+4,e],[t,Pt+4.3,e],.8,.8),l.add([t,Pt+8.4,e],[t,Pt+15,e],.3,.2),c.add([t,Pt+12.2,e],[t,Pt+12.45,e],.55,.55),l.add([t,Pt+15,e],[t,147.2,e],.17,.045),l.add([t-1.7,Pt+11.2,e],[t+1.7,Pt+11.2,e],.05),l.add([t,Pt+11.2,e-1.4],[t,Pt+11.2,e+1.4],.05);for(let k=0;k<3;k++){let P=k/3*Math.PI*2;l.add([t,Pt+4.2,e],[t+Math.cos(P)*1.9,Pt+1.5,e+Math.sin(P)*1.9],.05)}let ne=(k,P)=>new Jt.MeshStandardMaterial({map:P.map,emissiveMap:P.emissiveMap,emissive:new Jt.Color(1,1,1),emissiveIntensity:.35,roughnessMap:P.rough,metalnessMap:P.rough,roughness:1,metalness:.4}),ce=Np({panes:12,rows:2,w:1024,h:256,seed:91,deck:!1}),it=Np({panes:8,rows:2,w:1024,h:256,seed:92,deck:!1}),gt=ne(12,ce),ft=ne(8,it);n.baseMats=[gt,ft];let Nt=new Jt.MeshStandardMaterial({color:15659510,roughness:.7}),pt=34,Qt=22,Bt=10;h(new Jt.BoxGeometry(pt,Bt,Qt),[ft,ft,Nt,o,gt,gt],t,Bt/2,e+.5),h(new Jt.BoxGeometry(pt+.8,.8,Qt+.8),a,t,Bt+.3,e+.5),h(new Jt.BoxGeometry(5.5,.35,9),i,t-pt/2-2.6,3.8,e+.5);for(let k of[-1,1])h(new Jt.CylinderGeometry(.17,.17,3.8,8),i,t-pt/2-4.9,1.9,e+.5+k*4.2);let oe=new Jt.MeshStandardMaterial({color:4869975,roughness:.5,metalness:.5,emissive:new Jt.Color(1,.75,.45),emissiveIntensity:0});n.bolM=oe;for(let k=0;k<26;k++){let P=k/26*Math.PI*2,$=t+Math.cos(P)*31,ct=e+Math.sin(P)*21;Math.abs(ct-e)<12&&Math.abs($-t)<19||h(new Jt.CylinderGeometry(.16,.16,.9,8),oe,$,.45,ct,!1)}let ee=Rx(5);for(let[k,P,$,ct]of[[-pt/2-6,-9,3,2],[-pt/2-6,10,3,2],[pt/2+4,-6,2,3],[pt/2+4,8,2,3]])h(new Jt.BoxGeometry($*2,.7,ct*2),o,t+k,.35,e+P,!1),h(new Jt.SphereGeometry(1,10,6),a,t+k,.7,e+P,!1).scale.set($*.95,.45,ct*.95);for(let k=0;k<9;k++){let P=ee()*Math.PI*2,$=23+ee()*10,ct=h(new Jt.SphereGeometry(1,10,6),a,t+Math.cos(P)*$*1.1,.2,e+Math.sin(P)*$*.75,!1);ct.scale.set(1.5+ee()*2.2,.5+ee()*.6,1.2+ee()*1.8),ct.rotation.y=ee()*3}for(let k=0;k<3;k++){let P=t-27,$=e-6+k*6;l.add([P,0,$],[P,8.5,$],.09,.06)}return s.add(l.build({castShadow:!0,sides:6}),c.build({castShadow:!0,sides:7})),n.beacon=Mi(Jt,{positions:new Float32Array([t,148,e,t,Pt+8.6,e,t+1,Z+5.3,e]),colors:new Float32Array([14,.6,.4,6,.4,.3,4,.3,.25]),sizes:new Float32Array([2.4,1.4,1.1]),fogDensity:4e-5,minPx:2,maxPx:40}),s.add(n.beacon.points),n}var Jt,Ix=ge(()=>{Oe();td();nd();Jt=jt});function Si(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Zt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0,p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[f].length!==s[0].morphAttributes[f].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+f+'" morph attribute.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let p=s[d].index;for(let f=0;f<p.count;++f)u.push(p.getX(f)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Lx(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][d]);let f=Lx(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(f)}}}return l}function Lx(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new se(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,p=h.count;d<p;d++)for(let f=0;f<e;f++){let x=h.getComponent(d,f);a.setComponent(d+u,f,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var id=ge(()=>{Oe()});function Sw(s){let n=[[-2.25,.34],[-2.25,.86],[-1.95,.98],[-1.45,1],[-.95,1.46],[.45,1.47],[1.05,1.02],[2,.9],[2.25,.78],[2.25,.34]],i=new s.Shape(n.map(([d,p])=>new s.Vector2(d,p))),r=new s.ExtrudeGeometry(i,{depth:1.8-.12,bevelEnabled:!0,bevelThickness:.06,bevelSize:.06,bevelSegments:1,curveSegments:1});r.translate(0,0,-(1.8-.12)/2),r.deleteAttribute("uv");let o=new s.ExtrudeGeometry(new s.Shape([[-.88,1.03],[-.5,1.4],[.4,1.41],[.96,1.06]].map(([d,p])=>new s.Vector2(d,p))),{depth:1.8+.02,bevelEnabled:!1});o.translate(0,0,-(1.8+.02)/2),o.deleteAttribute("uv");let a=[];for(let d of[1.45,-1.4])for(let p of[-1,1]){let f=new s.CylinderGeometry(.34,.34,.24,10);f.rotateX(Math.PI/2),f.translate(d,.34,p*(1.8/2-.1)),f.deleteAttribute("uv"),a.push(f)}let l=new s.BoxGeometry(4.5-.5,.18,1.8-.08);l.translate(0,.43,0),l.deleteAttribute("uv");let c=(d,p,f)=>{let x=d.attributes.position.count,m=new Float32Array(x*3),g=new Float32Array(x);for(let _=0;_<x;_++)m[_*3]=p[0],m[_*3+1]=p[1],m[_*3+2]=p[2],g[_]=f;return d.setAttribute("color",new s.BufferAttribute(m,3)),d.setAttribute("aPart",new s.BufferAttribute(g,1)),d},h=[c(r,[1,1,1],0),c(o,[.045,.055,.07],1),c(l,[.34,.33,.32],1),...a.map(d=>c(d,[.03,.03,.035],1))],u=Si(h.map(d=>d.index?d.toNonIndexed():d));return u.computeVertexNormals(),u}function bw(s){s.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aPart;`).replace("#include <color_vertex>",`#include <color_vertex>
if (aPart > 0.5) vColor.xyz = color.xyz;`)},s.customProgramCacheKey=()=>"part-color-v1"}function sd(s,t){let e=Sw(s),n=new s.MeshStandardMaterial({color:16777215,roughness:.34,metalness:.5,vertexColors:!0});bw(n);let i=new s.InstancedMesh(e,n,t.length);i.frustumCulled=!1,i.castShadow=!1,i.receiveShadow=!1;let r=new s.Color;t.forEach((x,m)=>{r.setHex(Dx[(m*7+(x.ph*97|0))%Dx.length]),i.setColorAt(m,r)});let o=new s.Matrix4,a=new s.Quaternion,l=new s.Vector3,c=new s.Vector3(1,1,1),h=new s.Vector3(0,1,0),u=new s.Vector3(0,0,1),d=new s.Quaternion,p=.8,f=(x,m)=>{let g=Math.PI*2/(16+x.ph*26),_=x.ph*40,y=x.speed*(m+p*Math.sin(g*m+_)/g),M=((x.off+x.dir*y)%x.len+x.len)%x.len+x.min,w=x.speed*(1+p*Math.cos(g*m+_)),T=-x.speed*p*g*Math.sin(g*m+_);return{pos:x.alongX?[M,x.fixed]:[x.fixed,M],v:w,acc:T}};return{mesh:i,posOf:f,update(x,m){for(let g=0;g<t.length;g++){let _=t[g],{pos:[y,M],acc:w}=f(_,x),T=_.alongX?_.dir>0?0:Math.PI:_.dir>0?-Math.PI/2:Math.PI/2;if(a.setFromAxisAngle(h,T),d.setFromAxisAngle(u,Math.max(-.03,Math.min(.03,-w*.012))),a.multiply(d),l.set(y,0,M),o.compose(l,a,c),i.setMatrixAt(g,o),m){let v=_.alongX?_.dir:0,S=_.alongX?0:_.dir,R=_.alongX?0:.7,E=_.alongX?.7:0,I=y+v*2.2,N=M+S*2.2,z=y-v*2.2,D=M-S*2.2,O=g*12;m[O++]=I-R,m[O++]=.74,m[O++]=N-E,m[O++]=I+R,m[O++]=.74,m[O++]=N+E,m[O++]=z-R,m[O++]=.9,m[O++]=D-E,m[O++]=z+R,m[O++]=.9,m[O++]=D+E}}i.instanceMatrix.needsUpdate=!0}}}function ww(s){let t=[],e=(a,l,c,h,u)=>{a.deleteAttribute("uv");let d=a.index?a.toNonIndexed():a,p=d.attributes.position.count,f=new Float32Array(p*3),x=new Float32Array(p),m=new Float32Array(p),g=new Float32Array(p);for(let _=0;_<p;_++)f[_*3]=l[0],f[_*3+1]=l[1],f[_*3+2]=l[2],x[_]=c,m[_]=h,g[_]=u;d.setAttribute("color",new s.BufferAttribute(f,3)),d.setAttribute("aPart",new s.BufferAttribute(x,1)),d.setAttribute("aSide",new s.BufferAttribute(m,1)),d.setAttribute("aPivot",new s.BufferAttribute(g,1)),t.push(d)},n=new s.BoxGeometry(.44,.62,.26);n.translate(0,1.18,0),e(n,[1,1,1],0,0,0);let i=new s.SphereGeometry(.115,8,6);i.translate(0,1.6,0),e(i,[.82,.64,.54],1,0,0);let r=new s.SphereGeometry(.125,8,5,0,Math.PI*2,0,Math.PI*.55);r.translate(0,1.625,0),e(r,[.16,.17,.2],1,0,0);for(let a of[-1,1]){let l=new s.BoxGeometry(.16,.86,.17);l.translate(0,.43,a*.11),e(l,[.07,.075,.09],1,a,.86);let c=new s.BoxGeometry(.11,.56,.11);c.translate(0,1.14,a*.27),e(c,[1,1,1],0,-a,1.46);let h=new s.BoxGeometry(.24,.1,.18);h.translate(.04,.05,a*.11),e(h,[.05,.05,.05],1,a,.86)}let o=Si(t);return o.computeVertexNormals(),o}function rd(s,t){let e=ww(s),n=new Float32Array(t.length);e.setAttribute("aGait",new s.InstancedBufferAttribute(n,1));let i=new s.MeshStandardMaterial({color:16777215,roughness:.9,metalness:0,vertexColors:!0});i.onBeforeCompile=p=>{p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
attribute float aPart, aSide, aPivot, aGait;`).replace("#include <color_vertex>",`#include <color_vertex>
if (aPart > 0.5) vColor.xyz = color.xyz;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        if (aSide != 0.0) {
          float ang = sin(aGait) * 0.62 * aSide;
          float cs = cos(ang), sn = sin(ang);
          vec2 d = vec2(transformed.x, transformed.y - aPivot);
          transformed.x = d.x * cs - d.y * sn;
          transformed.y = aPivot + d.x * sn + d.y * cs;
        }
        transformed.y += abs(sin(aGait)) * 0.035;`)},i.customProgramCacheKey=()=>"walker-v1";let r=new s.InstancedMesh(e,i,t.length);r.frustumCulled=!1,r.castShadow=!1;let o=new s.Color;t.forEach((p,f)=>{o.setHex(Nx[(f*5+(p.ph*31|0))%Nx.length]),r.setColorAt(f,o)});let a=new s.Matrix4,l=new s.Quaternion,c=new s.Vector3,h=new s.Vector3(1,1,1),u=new s.Vector3(0,1,0),d=1.35;return{mesh:r,update(p){for(let f=0;f<t.length;f++){let x=t[f],m=Math.abs(x.x1-x.x0),g=((x.off+x.speed*p)%(2*m)+2*m)%(2*m),_=g<m?g:2*m-g,y=(g<m?1:-1)*(x.dir>0?1:-1),M=Math.min(x.x0,x.x1)+(x.dir>0?_:m-_);l.setFromAxisAngle(u,y>0?0:Math.PI),c.set(M,0,x.z+Math.sin(M*.07+x.ph*9)*.35),a.compose(c,l,h),r.setMatrixAt(f,a),n[f]=g/d*Math.PI*2+x.ph*6.28}r.instanceMatrix.needsUpdate=!0,e.attributes.aGait.needsUpdate=!0}}}var Dx,Nx,Up=ge(()=>{id();Dx=[15921906,15263978,13225170,9277849,1776930,2764602,8003359,2045270,14209732,11975360,4081233];Nx=[1382172,2106412,2830138,3812139,1911615,4868690,8006186,2902586,9071146,14474460,5913386,3493998]});function od({kita:s,minami:t,nishi:e,higashi:n}){let i=e?-e:n-1,r=Aw(i),o=s?Fp(s-1):Op(t-1);return{x:r,z:o,j:i}}var cc,ad,Tw,Aw,Fp,Op,MA,Ux=ge(()=>{cc={x:-90,z:0},ad=s=>-54+108*s,Tw=s=>62.5+108*s,Aw=s=>108*s,Fp=s=>-(116.5+108*s),Op=s=>116.5+108*s;MA={tvTower:{name:"\u3055\u3063\u307D\u308D\u30C6\u30EC\u30D3\u5854",...cc,basis:"\u5927\u901A\u897F1\u4E01\u76EE\uFF08\u6771\u7AEF\u4ED8\u8FD1\uFF09",model:"\u624B\u7D9A\u304D\u751F\u6210\u306E\u6982\u7565\u30E2\u30C7\u30EB\uFF08\u9AD8\u3055147.2m\u30FB\u5C55\u671B\u53F0\u7D0490m\uFF09"},jrTower:{name:"JR\u30BF\u30EF\u30FC",...od({kita:5,nishi:2}),basis:"\u53175\u6761\u897F2\u4E01\u76EE",model:"\u624B\u7D9A\u304D\u751F\u6210\u306E\u6982\u7565\u30E2\u30C7\u30EB\uFF08\u9AD8\u3055173m\uFF09"},station:{name:"\u672D\u5E4C\u99C5",...od({kita:6,nishi:3}),basis:"\u53176\u6761\u897F4\u4E01\u76EE\u4ED8\u8FD1",model:"\u4F4E\u5C64\u306E\u99C5\u30D3\u30EB\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},clockTower:{name:"\u672D\u5E4C\u5E02\u6642\u8A08\u53F0",...od({kita:1,nishi:2}),basis:"\u53171\u6761\u897F2\u4E01\u76EE",model:"\u624B\u7D9A\u304D\u751F\u6210\u306E\u6982\u7565\u30E2\u30C7\u30EB\uFF08\u6728\u90202\u968E\u5EFA\u3066\u30FB\u4E2D\u592E\u306B\u6642\u8A08\u5854\uFF09"},tanukikoji:{name:"\u72F8\u5C0F\u8DEF",x:-430,z:332.5,basis:"\u53572\u301C3\u6761\u30FB\u897F1\u301C7\u4E01\u76EE\uFF08\u8857\u533A\u306E\u4E2D\u592E\u3092\u901A\u308B\u5546\u5E97\u8857\uFF09",model:"\u30A2\u30FC\u30B1\u30FC\u30C9\u5546\u5E97\u8857\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},susukino:{name:"\u3059\u3059\u304D\u306E\u4EA4\u5DEE\u70B9",x:ad(-4)+0,z:Tw(4),basis:"\u53574\u301C5\u6761\u897F4\u4E01\u76EE\u4ED8\u8FD1",model:"\u4EA4\u5DEE\u70B9\u3068\u30CD\u30AA\u30F3\u770B\u677F\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},factory:{name:"\u30B5\u30C3\u30DD\u30ED\u30D5\u30A1\u30AF\u30C8\u30EA\u30FC",...od({kita:2,higashi:4}),basis:"\u53172\u6761\u67714\u4E01\u76EE",model:"\u8D64\u30EC\u30F3\u30AC\u68DF\u3068\u30AC\u30E9\u30B9\u5C4B\u6839\u306E\u30A2\u30C8\u30EA\u30A6\u30E0\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},moiwa:{name:"\u85FB\u5CA9\u5C71\uFF08\u5C55\u671B\u53F0\uFF09",x:-2496,z:3607,elev:531,basis:"\u7DEF\u5EA6\u7D4C\u5EA6\uFF08\u6982\u7565\uFF09\u304B\u3089\u306E\u914D\u7F6E",model:"\u5730\u5F62\u306E\u76DB\u308A\u4E0A\u304C\u308A\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"}}});var Fx,Ox,Bp,cd,Bx=ge(()=>{Oe();Ip();Ku();Ms();Lp();td();Dp();Ix();nd();Up();Ux();Fx=[{id:"overview",name:"\u672D\u5E4C\u306E\u5168\u666F",start:0,end:5,ready:!1},{id:"station",name:"\u672D\u5E4C\u99C5\u30FBJR\u30BF\u30EF\u30FC",start:5,end:11,ready:!1},{id:"odori",name:"\u5927\u901A\u516C\u5712\u30FB\u3055\u3063\u307D\u308D\u30C6\u30EC\u30D3\u5854",start:11,end:18,ready:!0},{id:"clocktower",name:"\u672D\u5E4C\u5E02\u6642\u8A08\u53F0",start:18,end:25,ready:!1},{id:"susukino",name:"\u72F8\u5C0F\u8DEF\u30FB\u3059\u3059\u304D\u306E",start:25,end:32,ready:!1},{id:"factory",name:"\u30B5\u30C3\u30DD\u30ED\u30D5\u30A1\u30AF\u30C8\u30EA\u30FC",start:32,end:39,ready:!1},{id:"moiwa",name:"\u85FB\u5CA9\u5C71\u304B\u3089\u306E\u591C\u666F",start:39,end:49,ready:!1},{id:"ending",name:"ENDING",start:49,end:55,ready:!1}],Ox=new L(-.66,.25,.71).normalize(),Bp=[{zenith:"#24508f",horizon:"#a9c6e8",horizonWarm:"#ffbd80",sun:"#ffd2a2",cloudLit:"#ffdcc0",cloudDark:"#8296b8",fog:"#bfd0e6",sunCol:"#ffc88f",fogD:62e-6},{zenith:"#0f2a5c",horizon:"#4a78b4",horizonWarm:"#f29a58",sun:"#ff9d62",cloudLit:"#eaa68e",cloudDark:"#3b4d7c",fog:"#5a7fb0",sunCol:"#ff9a60",fogD:7e-5},{zenith:"#050b20",horizon:"#12305c",horizonWarm:"#243e66",sun:"#ff9a60",cloudLit:"#3a4a70",cloudDark:"#0c1630",fog:"#122646",sunCol:"#ff9a60",fogD:8e-5}],cd=class extends Uo{constructor(t,e,n,i={}){super(t,e,n,i),this.shot=Fx.find(r=>r.id===(i.shot||"odori"))??Fx[2],this.timeOffset=this.shot.start,this.duration=this.shot.end-this.shot.start,this.timeline.duration=this.duration,this.timeline.frameCount=Math.round(this.duration*this.timeline.fps),this.showTitle=this.shot.id==="ending",this.fadeSec=.35,this.nightU={value:.1},this.snowU={value:1}}async build(){let t=Ju(20261115),e=this.scene,n=Bp[0],i=Qu(jt,{sunDir:Ox,colors:{...n,cloudCover:.36}});if(this.sky=i,e.add(i.mesh),e.fog=new Ni(new ht(n.fog),n.fogD),this.glRenderer){let d=new En;d.add(new fe(i.mesh.geometry,i.material));let p=new Wi(this.glRenderer);e.environment=p.fromScene(d,.015,1,3e3).texture,p.dispose()}let r=new Gi(16763023,3.4),o=this.shot.id==="odori"?new L(-330,0,0):new L(-500,0,-250);r.position.copy(o).addScaledVector(Ox,3e3),r.target.position.copy(o),r.castShadow=!0,r.shadow.mapSize.set(4096,4096);let a=r.shadow.camera,l=this.shot.id==="odori"?[560,260]:[1700,520];a.left=-l[0],a.right=l[0],a.top=l[1],a.bottom=-l[1],a.near=200,a.far=6500,r.shadow.bias=-2e-4,r.shadow.normalBias=.9,e.add(r,r.target),this.sun=r,this.hemi=new zi(15134463,14271394,.5),e.add(this.hemi),e.add(Ex(jt,{size:9e4,y:-40})),e.add(ed(jt,{heightFn:Ax(),y:-4})),e.add(this._buildGround()),this._buildCity(t),this._buildTVTower(),this._buildParkAndStreet(t),this._buildTraffic(t),this.snow=Cx(jt,{count:14e3,box:150,fall:3,wind:[2.2,.8],size:.06,bright:.55}),e.add(this.snow.points);let c=d=>{let p=d*d*(3-2*d),f=1-(1-d)*(1-d);return .5*p+.5*f},h=d=>d;this.rig=new lr([{t:11,pos:[-420,40,14],target:[-140,54,-2],fov:38,ease:h},{t:12.78,pos:[-313,50,32],target:[-100,103,-20],fov:34,ease:h},{t:14.36,pos:[-211,62,44],target:[-108,76,-33],fov:35,ease:h},{t:15.99,pos:[-111,77,54],target:[-95,82,-25],fov:36,ease:h},{t:17.63,pos:[-61,85,39],target:[-109,85,-13],fov:37,ease:h},{t:18,pos:[-64,97,45],target:[-188,91,-69],fov:38,ease:h}],{shakeAmp:.1,shakeSeed:4,timeWarp:c});let u=d=>new ar(d.map(([p,f])=>({t:p,v:f})));this.tracks={night:u([[0,.04],[11,.1],[18,.22],[25,.55],[32,.8],[39,1],[55,1]]),palette:u([[0,0],[11,.12],[18,.4],[25,.85],[32,1.2],[39,2],[55,2]]),sunPower:u([[0,3.8],[18,3.1],[25,1.5],[32,.5],[39,0],[55,0]]),envPower:u([[0,.75],[18,.62],[25,.46],[32,.36],[39,.2],[55,.2]]),exposure:u([[0,1],[55,1]]),bloom:u([[0,.22],[18,.3],[32,.45],[55,.55]]),bloomThreshold:u([[0,1.5],[55,1]]),bloomRadius:u([[0,.5],[55,.7]]),dofAperture:u([[0,.5],[55,.6]]),dofMaxBlur:u([[0,4],[55,5]])},this.look.grade={uShadowAmt:.3,uVig:.3,uSat:1.04,uGrain:.022,uAberr:7e-4,uHighTint:new ht(1.03,1,.96)},this._ca=new ht,this._cb=new ht}_buildGround(){let t=new zn(12e3,12e3,1,1);t.rotateX(-Math.PI/2);let e=new Fe({color:16777215,roughness:.85,metalness:0});e.customProgramCacheKey=()=>"sapporo-ground-v2";let n=this.nightU;e.onBeforeCompile=r=>{r.uniforms.uNight=n,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
          uniform float uNight; varying vec3 vWP;
          ${Vn}`).replace("#include <color_fragment>",`#include <color_fragment>
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
totalEmissiveRadiance += gEmis;`)};let i=new fe(t,e);return i.receiveShadow=!0,i}_buildCity(t){let e=ju(jt,{uNight:this.nightU,uSnow:this.snowU}),n=new Ss(jt,e,11e4),i=new Ss(jt,e,3e4,wx(jt));this.boxes=n;let r=new Ss(jt,e,12e3,Tx(jt)),o=(f,x,m,g)=>Math.hypot(f-m,x-g),a=(f,x)=>{let m=Math.exp(-(((Math.abs(x)-112)/170)**2))*(f>-1500&&f<400?1:.3),g=Math.exp(-((o(f,x,-300,-600)/420)**2)),_=Math.exp(-((o(f,x,-430,520)/380)**2)),y=o(f,x,-450,-100);return Math.max(m,g,_)*.85+.25*Math.exp(-((y/1700)**2))},l=f=>{let x=t();return f>.55?x<.32?0:x<.55?2:x<.75?4:x<.85?1:3:f>.3?x<.25?0:x<.4?2:x<.6?4:x<.7?1:3:x<.12?0:x<.18?4:x<.25?1:3},c=f=>f===3?2.9:f===4?3.9:f===2?3.8:3.6,h=(f,x,m,g,_,y,M)=>{let w=Math.abs(m)<700&&f>-1500&&f<500;w&&g>12&&_>12&&(n.add(f,x,m-_/2+.35/2,g,.9,.35,6,y,M),n.add(f,x,m+_/2-.35/2,g,.9,.35,6,y,M),n.add(f-g/2+.35/2,x,m,.35,.9,_-2*.35,6,y,M),n.add(f+g/2-.35/2,x,m,.35,.9,_-2*.35,6,y,M));let T=t.int(2,w?5:3);for(let v=0;v<T;v++){let S=f+t.range(-g*.3,g*.3),R=m+t.range(-_*.3,_*.3),E=t();if(E<.34)n.add(S,x,R,t.range(2,Math.min(7,g*.35)),t.range(1.2,2.2),t.range(1.5,Math.min(5,_*.35)),5,y+v*.13,M);else if(E<.58)n.add(S,x,R,t.range(3,5),t.range(2.6,3.4),t.range(3,5),0,y+v*.17,M,0,[3,3.2,.3,.3]);else if(E<.82){let I=t.range(2,3.6);r.add(S,x,R,I,t.range(2.2,3.6),I,5,y+v*.11,M)}else n.add(S,x,R,.18,t.range(5,12),.18,6,y,M)}},u=!1,d=(f,x,m,g,_,y,M)=>{let w=t(),T=t(),v=c(y),S=Math.max(6,_*v);if(y===3&&_<=3&&!u&&t()<.7){n.add(f,0,x,m,S*.78,g,3,w,T);let R=Math.min(m,g)*t.range(.28,.4),E=m>=g;i.add(f,S*.78,x,(E?g:m)+.8,R,(E?m:g)+.8,3,w,T,E?Math.PI/2:0,[2.6,2.9,.5,.5]);return}if(_>=11&&m>30&&g>30){let R=t.int(3,4),E=R*4.2;n.add(f,0,x,m,E,g,t()<.5?4:0,w,T);let I=m*t.range(.55,.8),N=g*t.range(.5,.75),z=f+(m-I)*t.range(-.3,.3),D=x+(g-N)*t.range(-.3,.3),O=S-E;n.add(z,E,D,I,O,N,y===4?2:y,w+.31,T),t()<.5&&n.add(z,S,D,I*.6,t.range(4,9),N*.6,0,w+.7,T,0,[4,3.6,.8,.3]),h(z,S,D,I,N,w,T);return}if(_>=6&&t()<.4){let R=Math.ceil(_*.65),E=R*v;n.add(f,0,x,m,E,g,y,w,T);let I=t.range(3,6);n.add(f+t.range(-1.5,1.5),E,x+t.range(-1.5,1.5),m-I*2,S-E,g-I*2,y,w+.2,T),h(f,S,x,m-I*2,g-I*2,w,T);return}if(_>=5&&m>28&&g>28&&t()<.45){n.add(f,0,x,m,S,g,y,w,T);let R=m*t.range(.35,.5),E=g*t.range(.4,.6),I=Math.max(6,(_-t.int(2,3))*v),N=t()<.5?1:-1,z=t()<.5?1:-1;n.add(f+N*(m/2+R/2-.5),0,x+z*(g/2-E/2),R,I,E,y===2?0:y,w+.4,T),h(f,S,x,m,g,w,T);return}n.add(f,0,x,m,S,g,y,w,T),S>12&&h(f,S,x,m,g,w,T)},p=(f,x,m,g)=>{let _=o(f,x,-450,-100);if(_>4600)return;let y=a(f,x),M=_>2600,w=2.6+8.5*y*y+1.4*y,T=t(),v=()=>t.range(2.5,5.5);if(u=M,M){let R=_<3400?2:1,E=_<3400?2:1,I=m*2/R,N=g*2/E,z=t.range(2.5,4.5);for(let D=0;D<R;D++)for(let O=0;O<E;O++){let q=Math.max(2,Math.round(z+t.range(-.6,.6)));d(f-m+(D+.5)*I,x-g+(O+.5)*N,I-t.range(2,4),N-t.range(2,4),q,3,.1)}return}let S=()=>Math.max(2,Math.round(w*(.55+Math.pow(t(),1.5)*1.1)*(t()<.07&&y>.5?1.7:1)));if(T<.28+.2*y)d(f,x,m*2-t.range(3,8),g*2-t.range(3,8),Math.min(22,S()+1),l(y),y);else if(T<.55){let R=t()<.5,E=t.range(.38,.62);if(R){let I=m*2*E-2,N=m*2*(1-E)-2;d(f-m+I/2+1,x,I,g*2-v(),S(),l(y),y),d(f+m-N/2-1,x,N,g*2-v(),S(),l(y),y)}else{let I=g*2*E-2,N=g*2*(1-E)-2;d(f,x-g+I/2+1,m*2-v(),I,S(),l(y),y),d(f,x+g-N/2-1,m*2-v(),N,S(),l(y),y)}}else if(T<.75){let R=t.int(3,5),E=m*2/R,I=t()<.5?-1:1,N=t.range(.55,.75)*g*2;for(let z=0;z<R;z++)d(f-m+(z+.5)*E,x+I*(g-N/2),E-t.range(.4,1.4),N,Math.max(2,S()+t.int(-1,1)),l(y),y);d(f,x-I*(g-(g*2-N)/2),m*2-3,g*2-N-3,Math.max(2,S()-1),l(y*.6),y)}else{let R=m,E=g;for(let I=0;I<2;I++)for(let N=0;N<2;N++)d(f-m+(I+.5)*R,x-g+(N+.5)*E,R-v(),E-v(),S(),l(y),y)}};for(let f=-30;f<=28;f++){let x=108*f;f>=-12&&f<=-1||p(x,0,44,50.5);for(let m=0;m<=19;m++)for(let g of[-1,1]){let _=g<0?Fp(m):Op(m);p(x,_,44,44)}}this.scene.add(n.build(),i.build(),r.build())}_buildTVTower(){let t=Px(this.scene,cc);this.towerSteel=t.steel,this.towerSteel2=t.steelDark,this.deckMat=t.deckMat,this.beacon=t.beacon,this.baseMats=t.baseMats,this.bolM=t.bolM}_buildParkAndStreet(t){let e=new Fe({color:4406584,roughness:.95}),n=new Fe({color:15922682,roughness:.75}),i=new vi(jt,e),r=new vi(jt,n),o=(_,y,M,w,T,v)=>{let S=[_[0]+y[0]*M,_[1]+y[1]*M,_[2]+y[2]*M],R=w*(T===0?.55:.4);if(i.add(_,S,w,R),T<=2&&y[1]>.35&&w>.045&&r.add([_[0],_[1]+w*.8,_[2]],[S[0],S[1]+R*.8,S[2]],w*.7,R*.6),T>=3)return;let E=T===0?t.int(3,4):t.int(2,3),I=t()*Math.PI*2;for(let N=0;N<E;N++){let z=I+N/E*Math.PI*2+t.range(-.5,.5),D=Math.min(1.25,v*t.range(.7,1.3)),O=[Math.cos(z)*Math.sin(D),Math.cos(D)*.9+.1,Math.sin(z)*Math.sin(D)],q=Math.hypot(...O),H=T===0?1:t.range(.6,1),st=[_[0]+(S[0]-_[0])*H,_[1]+(S[1]-_[1])*H,_[2]+(S[2]-_[2])*H];o(st,O.map(W=>W/q),M*t.range(.55,.72),R*t.range(.7,.9),T+1,v*1.12)}},a=(_,y)=>{let M=t.range(8,13.5),w=[t.range(-.12,.12),1,t.range(-.12,.12)],T=Math.hypot(...w);o([_,0,y],w.map(v=>v/T),M*.4,t.range(.3,.42),0,t.range(.5,.75));for(let v=0;v<2;v++){let S=t()*6.28,R=M*t.range(.18,.32);o([_,R,y],[Math.cos(S)*.8,.55,Math.sin(S)*.8],M*.26,.12,1,.8)}};for(let _=-12;_<=-1;_++){let y=108*_;for(let M of[-42,-22,22,42])for(let w=y-40;w<=y+40;w+=11.5){let T=w+t.range(-2,2),v=M+t.range(-2.5,2.5);Math.hypot(T-cc.x,v-cc.z)<30||Math.abs((T%108+108)%108-54)<11||a(T,v)}}for(let _ of[-1,1])for(let y=-1330;y<=-60;y+=15)Math.abs((y%108+108)%108-54)<12||(a(y+t.range(-1.5,1.5),_*(62.5+8.6)),a(y+7+t.range(-1.5,1.5),_*(62.5-8.6)));this.scene.add(i.build({castShadow:!0,sides:5}),r.build({castShadow:!1,sides:4}));let l=new Fe({color:4869975,roughness:.6,metalness:.6}),c=new vi(jt,l),h=new Fe({color:3817029,roughness:.5,metalness:.5,emissive:new ht(1,.72,.4),emissiveIntensity:0});this.lampHeadM=h;let u=new vi(jt,h),d=[],p=[],f=[],x=(_,y,M=9,w=!1)=>{d.push(_,M,y);let T=t.range(.85,1.15);p.push(3.4*T,2*T,.9*T),f.push(1.3),w&&(c.add([_,0,y],[_,M,y],.13,.08),c.add([_,M-.2,y],[_+.9,M+.15,y],.05,.04),u.add([_+.55,M+.02,y],[_+1.25,M+.02,y],.22,.18))},m=2400,g=1900;for(let _=-23;_<=23;_++){let y=ad(_);for(let M=-g;M<=g;M+=44){let w=Math.abs(M)<260&&y>-1400&&y<200;x(y-9.2,M+t.range(-2,2),9,w),x(y+9.2,M+22,9,w)}}for(let _=0;_<=17;_++)for(let y of[-1,1]){let M=y*(62.5+108*_);for(let w=-m;w<=m;w+=44){let T=_===0&&w>-1400&&w<200;x(w+t.range(-2,2),M-9.2,9,T),x(w+22,M+9.2,9,T)}}for(let _=-1330;_<=-110;_+=26)for(let y of[-6.5,6.5])x(_,y,4.6,!0);this.scene.add(c.build({castShadow:!1,sides:5}),u.build({castShadow:!1,sides:6})),this.lamps=Mi(jt,{positions:new Float32Array(d),colors:new Float32Array(p),sizes:new Float32Array(f),fogDensity:4e-5,minPx:1.6,maxPx:14}),this.scene.add(this.lamps.points)}_buildTraffic(t){let e=[];for(let l=0;l<1500;l++){let c=t()<.5,h=t()<.5?1:-1,u;if(c){let d=t.int(0,14);u=(t()<.5?-1:1)*(62.5+108*d)+(h>0?-3.4:3.4)}else u=ad(t.int(-20,18))+(h>0?3.4:-3.4);e.push({alongX:c,dir:h,fixed:u,speed:t.range(6,13),off:t.range(0,5e3),len:c?4800:3800,min:c?-2400:-1900,ph:t()})}this.cars=sd(jt,e),this.scene.add(this.cars.mesh);let i=new Float32Array(1500*4*3),r=new Float32Array(1500*4*3),o=new Float32Array(1500*4);for(let l=0;l<1500;l++)for(let c=0;c<4;c++){let h=(l*4+c)*3,u=c<2;u?(r[h]=3,r[h+1]=2.9,r[h+2]=2.3):(r[h]=2.4,r[h+1]=.1,r[h+2]=.07),o[l*4+c]=u?.7:.5}this.carGlow=Mi(jt,{positions:i,colors:r,sizes:o,fogDensity:4e-5,minPx:1.4,maxPx:12}),this.scene.add(this.carGlow.points);let a=[];for(let l=0;l<260;l++){let c=t.pick([-3,-1.2,1.2,3,-31,31,-29,29]);a.push({x0:-1320,x1:-110,z:c+t.range(-.4,.4),dir:t()<.5?1:-1,speed:t.range(1.1,1.6),off:t.range(0,2400),ph:t()})}for(let l=0;l<40;l++)a.push({x0:-135,x1:-52,z:t.pick([-26,-20,-16,16,20,26])+t.range(-.8,.8),dir:t()<.5?1:-1,speed:t.range(.9,1.5),off:t.range(0,800),ph:t()});this.peds=rd(jt,a),this.scene.add(this.peds.mesh)}applyTime(t){let e=this.sampleTrack("palette",t,0),n=Math.min(1,Math.floor(e)),i=Math.min(1,e-n),r=Bp[n],o=Bp[Math.min(2,n+1)],a=this.sky.uniforms,l=(h,u)=>{this._ca.set(r[h]),this._cb.set(o[h]),u.value.lerpColors(this._ca,this._cb,i)};l("zenith",a.uZenith),l("horizon",a.uHorizon),l("horizonWarm",a.uHorizonWarm),l("sun",a.uSunColor),l("cloudLit",a.uCloudLit),l("cloudDark",a.uCloudDark),this._ca.set(r.fog),this._cb.set(o.fog),this.scene.fog.color.lerpColors(this._ca,this._cb,i),this.scene.fog.density=r.fogD+(o.fogD-r.fogD)*i,this._ca.set(r.sunCol),this._cb.set(o.sunCol),this.sun.color.lerpColors(this._ca,this._cb,i),this.nightU.value=this.sampleTrack("night",t,.1);let c=this.sampleTrack("sunPower",t,3);this.sun.intensity=c,a.uSunStrength.value=Math.min(1,c/2),this.hemi.intensity=.5*Math.max(.22,1-this.nightU.value*1.05),this.scene.environmentIntensity=this.sampleTrack("envPower",t,.6)}onBeforeRender({t,projScale:e,camera:n}){let i=t+this.timeOffset;this.sky.mesh.position.copy(n.position),this.sky.uniforms.uTime.value=i*5;let r=this.scene.fog.density;for(let l of[this.lamps,this.carGlow,this.beacon])l.uniforms.uProj.value=e,l.uniforms.uFog.value=r;let o=this.nightU.value;this.lamps.uniforms.uGain.value=.08+1*o,this.carGlow.uniforms.uGain.value=.5+.7*o,this.beacon.uniforms.uGain.value=.15+.85*Math.pow(.5+.5*Math.sin(i*Math.PI*1.25),3),this.towerSteel.emissiveIntensity=.03+.4*Math.max(0,o-.25),this.towerSteel2.emissiveIntensity=this.towerSteel.emissiveIntensity,this.lampHeadM.emissiveIntensity=.2+2.4*o,this.deckMat.emissiveIntensity=.25+1*o;for(let l of this.baseMats)l.emissiveIntensity=.25+.9*o;this.bolM.emissiveIntensity=.1+2*o,this.cars.update(i,this.carGlow.points.geometry.attributes.position.array),this.carGlow.points.geometry.attributes.position.needsUpdate=!0,this.peds.update(i);let a=this.snow.uniforms;a.uTime.value=i,a.uCam.value.copy(n.position),a.uProj.value=e,a.uFog.value=r}}});function Hx(s,t,e,n){let i=s*e*t*e,r=Math.min(1,Math.sqrt(n*1e6/i));return{w:Math.max(2,Math.round(s*e*r)),h:Math.max(2,Math.round(t*e*r)),scale:r}}function Wx(s,t,e,{rate:n,vmax:i}=Ew){let r=t-s;if(Math.abs(r)<1e-5)return cr(t);let o=r*(1-Math.exp(-n*e)),a=i*e;return Math.abs(o)>a&&(o=Math.sign(o)*a),cr(s+o)}var cr,zp,zx,kx,kp,Gp,Gx,Hp,Vx,Ew,Vp=ge(()=>{cr=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),zp=(s,t,e)=>{let n=cr((e-s)/(t-s));return n*n*(3-2*n)},zx=(s,t,e)=>cr(-s/Math.max(1,t-e)),kx=(s,t=7)=>Math.min(1,cr(s)/.94)*t,kp=s=>1-zp(.88,1.12,s),Gp=(s,t,e,n=.03)=>zp(s,s+n,e)*(1-zp(t-n,t,e)),Gx=[{id:"T0",mp:.3,samples:0,dof:!1},{id:"T1",mp:.55,samples:2,dof:!1},{id:"T2",mp:1.25,samples:2,dof:!0},{id:"T3",mp:2.4,samples:4,dof:!1}];Hp=(s,t,e)=>!!e&&Math.min(s,t)<700,Vx=(s,t,e)=>Hp(s,t,e)?"T1":"T2",Ew={rate:6.5,vmax:.07/.15}});function Rw(s,t){let e=s.keys,n=e.length;if(t<=e[0][0]||t>=e[n-1][0])return null;let i=0;for(;t>e[i+1][0];)i++;let r=e[i+1][0]-e[i][0],o=(t-e[i][0])/r,a=(x,m)=>x===0||x===n-1?0:(e[x+1][m]-e[x-1][m])/(e[x+1][0]-e[x-1][0]),l=o*o,c=l*o,h=2*c-3*l+1,u=c-2*l+o,d=-2*c+3*l,p=c-l,f=[];for(let x=1;x<=6;x++)f.push(h*e[i][x]+u*r*a(i,x)+d*e[i+1][x]+p*r*a(i+1,x));return f}function Pw(s,t){return s.map(([e,n,i,r,o,a])=>({pos:[t.x+n*Math.cos(Xx(e)),i,t.z+n*Math.sin(Xx(e))],target:[t.x,r,t.z],fov:o,speed:a}))}function Iw(s,t,e,n,i){let r=i*i,o=r*i,a=(l,c,h,u)=>.5*(2*c+(-l+h)*i+(2*l-5*c+4*h-u)*r+(-l+3*c-3*h+u)*o);return[a(s[0],t[0],e[0],n[0]),a(s[1],t[1],e[1],n[1]),a(s[2],t[2],e[2],n[2])]}function Lw(s,t,e=0){let n=(i,r)=>Math.sin(s*i+r+e);return[t*(n(1.7,.3)*.6+n(3.1,1.9)*.4),t*(n(1.3,2.1)*.6+n(2.7,.7)*.4),t*(n(1.1,4.2)*.6+n(2.3,3.3)*.4)]}function Nw(s,t){return t.map(([e,n,i,r,o,a=80,l=0])=>{let c=e*s.length,[h,u,d,p]=s.at(c),[f,x]=s.at(c+a);return{pos:[h-p*l,n,u+d*l],target:[f,i,x],fov:r,speed:o}})}var Yx,Xx,Wp,Dw,hc,Xp,hd,qp=ge(()=>{Pp();Vp();Yx=s=>{let t=s*s*(3-2*s),e=1-(1-s)*(1-s);return .5*t+.5*e};Xx=s=>s*Math.PI/180;Wp=class{constructor(t,{shakeAmp:e=.1,shakeSeed:n=4,timeWarp:i=Yx,N:r=160,t0:o=0,dur:a=7}={}){this.t0=o,this.dur=a,this.keys=t,this.shakeAmp=e,this.shakeSeed=n,this.timeWarp=i;let l=t.length,c=(l-1)*r;this.cum=new Float64Array(c+1);let h=this._at(0).position;for(let u=1;u<=c;u++){let d=u/c*(l-1),p=this._at(d).position,f=this._speed(d);this.cum[u]=this.cum[u-1]+Math.hypot(p[0]-h[0],p[1]-h[1],p[2]-h[2])/f,h=p}this.total=this.cum[c],this.M=c}_speed(t){let e=this.keys,n=Math.min(e.length-2,Math.floor(t)),i=t-n;return e[n].speed+(e[n+1].speed-e[n].speed)*i}_at(t){let e=this.keys,n=e.length,i=Math.min(n-2,Math.max(0,Math.floor(t))),r=t-i,o=l=>Math.min(n-1,Math.max(0,l)),a=l=>Iw(e[o(i-1)][l],e[i][l],e[o(i+1)][l],e[o(i+2)][l],r);return{position:a("pos"),target:a("target"),fov:e[i].fov+(e[i+1].fov-e[i].fov)*r}}sampleU(t,e=0){let i=(this.timeWarp?this.timeWarp(Math.min(1,Math.max(0,t))):t)*this.total,r=0,o=this.M;for(;o-r>1;){let h=r+o>>1;this.cum[h]<=i?r=h:o=h}let a=(i-this.cum[r])/Math.max(1e-12,this.cum[o]-this.cum[r]),l=(r+a)/this.M*(this.keys.length-1),c=this._at(l);if(this.shakeAmp>0){let h=Lw(e,this.shakeAmp,this.shakeSeed);c.position=c.position.map((u,d)=>u+h[d])}return c}sample(t){return this.sampleU((t-this.t0)/this.dur,t)}},Dw=30,hc=class{constructor(t){let{globalStart:e,duration:n=7,landscapeKeys:i,adj:r,portraitSpec:o,axis:a,portraitKeys:l}=t;this.t0=e,this.dur=n,this.landscape=new lr(i,{shakeAmp:.1,shakeSeed:4,timeWarp:Yx}),this.portrait=new Wp(l??Pw(o,a),{t0:e,dur:n}),this.adj=r,this.weight=0,this.blendLift=t.blendLift??Dw}pOf(t){return cr((t-this.t0)/this.dur)*.94}landscapeAt(t){let e=this.landscape.sample(t),n=this.adj?Rw(this.adj,this.pOf(t)):null;return n&&(e.position=e.position.map((i,r)=>i+n[r]),e.target=e.target.map((i,r)=>i+n[3+r])),e}portraitAt(t){return this.portrait.sample(t)}sample(t,e=this.weight){if(e<=0)return this.landscapeAt(t);let n=this.portraitAt(t);if(e>=1)return n;let i=this.landscapeAt(t),r=(a,l)=>a.map((c,h)=>c+(l[h]-c)*e),o=r(i.position,n.position);return o[1]+=this.blendLift*4*e*(1-e),{position:o,target:r(i.target,n.target),fov:i.fov+(n.fov-i.fov)*e}}},Xp=class{constructor(t){this.pts=t,this.cum=[0];for(let e=1;e<t.length;e++)this.cum.push(this.cum[e-1]+Math.hypot(t[e][0]-t[e-1][0],t[e][1]-t[e-1][1]));this.length=this.cum[t.length-1]}at(t){let e=this.pts,n=e.length,i=this.cum,r=Math.min(this.length,Math.max(0,t)),o=0;for(;o<n-2&&r>i[o+1];)o++;let a=Math.max(1e-9,i[o+1]-i[o]),l=(r-i[o])/a;return[e[o][0]+(e[o+1][0]-e[o][0])*l,e[o][1]+(e[o+1][1]-e[o][1])*l,(e[o+1][0]-e[o][0])/a,(e[o+1][1]-e[o][1])/a]}};hd=class extends hc{constructor(t){let e=new Xp(t.route);super({...t,portraitKeys:Nw(e,t.dolly)}),this.poly=e}}});var Zx,Uw,Fw,Ow,uc,Yp=ge(()=>{Zx={x:-90,z:0,tipY:147.2,glowY:149},Uw=[{t:11,pos:[-420,40,14],target:[-140,54,-2],fov:38},{t:12.78,pos:[-313,50,32],target:[-100,103,-20],fov:34},{t:14.36,pos:[-211,62,44],target:[29,94,-137],fov:35},{t:15.99,pos:[-111,77,54],target:[-54,95,-240],fov:36},{t:16.5,pos:[-74,102,52.9],target:[-125.1,66.4,-242.7],fov:41.1},{t:17,pos:[-35,123.4,55],target:[-190.4,102.7,-201.6],fov:46.7},{t:17.5,pos:[57.3,122.4,49.4],target:[-229.9,95.1,-37.3],fov:45.9},{t:18,pos:[64.8,122.3,31.1],target:[-234.1,74.2,5],fov:45.9}].map(s=>({...s,ease:t=>t})),Fw={keys:[[.4,0,0,0,0,0,0],[.44,-13.9,10.8,28.9,-.6,74.1,32.6],[.47,-17.1,19.3,53.7,9.5,60.2,19.2],[.5,-6.9,27.5,66.3,5.3,46.3,15],[.53,7.6,32.3,56.1,-12.7,48.9,.5],[.56,.2,26.8,28.8,-26.6,66.5,10],[.6,0,0,0,0,0,0]]},Ow=[[180,280,46,66,50,1],[167.7,235,99.5,80,51,1],[141.2,204.6,117.9,90,52,.9],[103,170.6,127.9,95.6,53,.75],[83.4,146,127.9,106.9,54,.65],[11.3,132.3,126,106.9,55,.6],[3.5,149.3,124.1,95.4,56,.5]],uc={globalStart:11,duration:7,landscapeKeys:Uw,adj:Fw,portraitSpec:Ow,axis:{x:Zx.x,z:Zx.z}}});var ud,$x=ge(()=>{Bx();qp();lc();Yp();ud=class extends cd{constructor(t,e,n,i={}){super(t,e,n,{...i,shot:"odori"}),this.fadeSec=0,this.fx=i.fx??{}}async build(){await super.build(),this.videoRig=this.rig,this.rig=new hc(uc),$u(this,{tiled:this.fx.tiled,haze:this.fx.haze,tileExclude:[this.cars.mesh,this.peds.mesh,this.scene.children.find(t=>t.isInstancedMesh&&t.count===this.boxes.n)],skyUniforms:this.sky.uniforms})}setAmbientCount(t){this.snow.points.geometry.setDrawRange(0,t),this.ambientCount=t}setLayoutWeight(t){this.rig.weight=t}}});var Jx,Kx=ge(()=>{Jx=[{id:"cap-sapporo",title:"SAPPORO",sub:"\u672D\u5E4C",a:-.05,b:.17},{id:"cap-tower",title:"\u3055\u3063\u307D\u308D\u30C6\u30EC\u30D3\u5854",sub:"Sapporo TV Tower",a:.2,b:.45},{id:"cap-odori",title:"\u5927\u901A\u516C\u5712",sub:"Odori Park",a:.47,b:.7},{id:"cap-teine",title:"\u624B\u7A32\u5C71\u306E\u65B9\u3078",sub:"Toward Mt. Teine",a:.72,b:1.08}]});var Qx={};vd(Qx,{default:()=>Bw});var Bw,jx=ge(()=>{$x();Kx();Yp();Bw={contract:1,meta:{id:"sapporo",name:{ja:"\u672D\u5E4C",en:"Sapporo"},season:"winter",theme:"\u96EA\u306E\u5927\u901A\u516C\u5712\uFF08\u663C\u2192\u5915\uFF09",docTitle:"SAPPORO \u2014 JAPAN \u2014 THE CITY COLLECTION"},captions:Jx,timeline:{globalStart:uc.globalStart,duration:uc.duration},ambient:{name:"\u96EA",counts:{normal:14e3,light:7e3}},tuning:{haze:{},grade:{}},async buildScene(s){let t=new ud(s.cityMeta,s.index,s.total,{renderer:s.renderer,fx:s.fx});return await t.build(),t}}});function t_(s,t){let e=dd(Fo.x0,Fo.crestX,s)*(1-dd(-1150,-1500,s)),n=Math.abs(t-250),i=1-dd(260,760,n);return Fo.top*e*(1-dd(700,1e3,n))*(.4+.6*i)}var Ln,Oo,Bo,zo,Fo,dd,e_,n_,dc=ge(()=>{Ln=[{id:"aoba",dir:"x",c:230,w:50,a:-470,b:330,kind:1},{id:"joz",dir:"x",c:0,w:46,a:-240,b:110,kind:2},{id:"ichi-n",dir:"z",c:0,w:20,a:-130,b:40,kind:0},{id:"ichi-arcade",dir:"z",c:0,w:14,a:40,b:200,kind:3},{id:"ichi-s",dir:"z",c:0,w:20,a:200,b:330,kind:0},{id:"conn",dir:"z",c:-170,w:22,a:-130,b:330,kind:0},{id:"w1",dir:"z",c:-85,w:14,a:-130,b:330,kind:0},{id:"w2",dir:"z",c:-300,w:16,a:24,b:330,kind:0},{id:"e1",dir:"z",c:110,w:20,a:24,b:330,kind:0},{id:"e1n",dir:"z",c:110,w:20,a:-130,b:-24,kind:0},{id:"e2",dir:"z",c:200,w:18,a:-130,b:330,kind:0},{id:"cross",dir:"x",c:115,w:16,a:-330,b:330,kind:0},{id:"north",dir:"x",c:-120,w:18,a:-330,b:330,kind:0},{id:"south",dir:"x",c:330,w:18,a:-330,b:330,kind:0}],Oo=[{id:"nishi",x0:-340,x1:-240,z0:-55,z1:55},{id:"kotodai",x0:110,x1:170,z0:-45,z1:45}],Bo=[{id:"station",x0:205,x1:352,z0:120,z1:205}],zo={x0:-420,x1:340,z0:-240,z1:400},Fo={x0:-450,top:95,crestX:-620},dd=(s,t,e)=>{let n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)};e_=[-.86,.3,-.3],n_=[[250,232],[60,232],[-170,232],[-170,110],[-170,0],[0,0],[0,110],[0,215],[-90,236],[-300,238],[-430,236],[-560,232],[-640,226]]});var zw,kw,Gw,Hw,Vw,hr,Zp=ge(()=>{dc();zw=0,kw=7,Gw=s=>s,Hw=[{t:0,pos:[330,96,238],target:[60,26,232],fov:40},{t:1.2,pos:[80,56,232],target:[-250,22,232],fov:38},{t:2.1,pos:[-120,104,228],target:[-240,30,40],fov:38},{t:2.6,pos:[-205,96,120],target:[-235,14,10],fov:37},{t:2.95,pos:[-238,46,40],target:[-150,8,0],fov:36},{t:3.35,pos:[-205,4.8,0],target:[-20,7,0],fov:35},{t:3.95,pos:[-40,4.8,0],target:[40,7,2],fov:36},{t:4.3,pos:[-4,9,24],target:[0,7,150],fov:38},{t:5.3,pos:[0,8,190],target:[-12,10,245],fov:40},{t:6,pos:[-250,70,244],target:[-640,112,232],fov:42},{t:6.6,pos:[-560,122,242],target:[-420,50,236],fov:42},{t:7,pos:[-612,128,244],target:[-200,16,216],fov:42}].map(s=>({...s,ease:Gw})),Vw=[[0,85,30,58,1,120,0],[.12,46,24,60,1,100,0],[.23,38,20,60,1,90,0],[.27,40,18,60,1.2,60,0],[.33,26,14,60,1,70,0],[.385,14,10,62,.8,50,0],[.43,4.8,8,62,.6,50,0],[.49,4.8,8,62,.55,45,0],[.55,4.8,8,62,.4,45,0],[.617,6,9,62,.4,45,0],[.7,26,24,60,.8,-120,0],[.85,72,30,56,1.1,-300,0],[1,135,12,52,1,-620,0]],hr={globalStart:zw,duration:kw,landscapeKeys:Hw,route:n_,dolly:Vw}});function fc(s,t,e,n,i,r,o){let a=new Zs(1,0),l=a.attributes.position,c=l.count,h=new Float32Array(c*3),u=new Float32Array(c*3),d=p=>{let f=Math.sin((p+r)*12.9898)*43758.5453;return .86+.28*(f-Math.floor(f))};for(let p=0;p<c;p++){let f=l.getX(p),x=l.getY(p),m=l.getZ(p),g=Math.hypot(f,x,m);h[p*3]=f/g,h[p*3+1]=x/g,h[p*3+2]=m/g;let _=d(Math.floor(p/3)+r*7);l.setXYZ(p,s+f*n*_,t+x*n*i*_,e+m*n*_);let y=.5+.5*(x/g),M=o*(.7+.5*y);u[p*3]=.2*M,u[p*3+1]=.36*M,u[p*3+2]=.1*M}return a.setAttribute("normal",new se(h,3)),a.setAttribute("color",new se(u,3)),a.deleteAttribute("uv"),a}function s_(s,t,e,n,i){let r=new jn(n,e,1,5,1,!1);r.translate(0,.5,0);let o=new L(t[0]-s[0],t[1]-s[1],t[2]-s[2]),a=o.length();r.scale(1,a,1),r.applyQuaternion(new Re().setFromUnitVectors(new L(0,1,0),o.normalize())),r.translate(s[0],s[1],s[2]);let l=r.attributes.position.count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c[h*3]=i[0],c[h*3+1]=i[1],c[h*3+2]=i[2];return r.setAttribute("color",new se(c,3)),r.deleteAttribute("uv"),r}function Xw(){let s=[.115,.1,.085],t=[s_([0,0,0],[0,4.6,0],.42,.3,s)],e=[],n=6;for(let i=0;i<n;i++){let r=i/n*Math.PI*2+.3,o=Math.cos(r),a=Math.sin(r);t.push(s_([0,4.4,0],[o*3.4,9.2,a*3.4],.22,.1,s)),e.push(fc(o*4.2,10,a*4.2,3.5,.82,i,1)),e.push(fc(o*2.2,13.2,a*2.2,3,.8,i+9,1.1))}e.push(fc(0,11.5,0,3.6,.9,20,1.05)),e.push(fc(0,14.6,0,3,.8,21,1.15));for(let i=0;i<3;i++){let r=i*2.1;e.push(fc(Math.cos(r)*3.2,7,Math.sin(r)*3.2,2.2,.8,30+i,.8))}return{wood:Si(t),leaf:Si(e)}}function qw(s){let t=[],e=Ln.map(Ww),n=(r,o,a)=>!Ln.some((l,c)=>l!==a&&l.kind!==3&&i_(e[c],r,o,l.kind===0?.5:-.5))&&!Oo.some(l=>i_(l,r,o,0)),i=(r,o,a,l,c,h=r.b)=>{for(let u=r.a+l;u<h;u+=a){let d=r.dir==="x"?u:r.c+o,p=r.dir==="x"?r.c+o:u;n(d,p,r)&&t.push([d+s.range(-.4,.4),p+s.range(-.4,.4),c*s.range(.92,1.12),s()])}};for(let r of Ln)if(r.kind===1)i(r,0,13,4,1.05,200),i(r,-20.6,13,10.5,1,200),i(r,20.6,13,10.5,1,200);else if(r.kind===2)i(r,-4.5,16,3,1.1),i(r,4.5,16,11,1.1),i(r,-20.2,16,11,1),i(r,20.2,16,3,1);else if(r.kind===0){let o=r.w/2-1.8;i(r,-o,22,8,.55),i(r,o,22,19,.55)}for(let r of Oo)for(let o=0;o<26;o++)t.push([s.range(r.x0+6,r.x1-6),s.range(r.z0+6,r.z1-6),s.range(.8,1.15),s()]);return t}function r_(s){let{wood:t,leaf:e}=Xw(),n=qw(s),i=new Fe({vertexColors:!0,roughness:.95,metalness:0}),r=new Fe({vertexColors:!0,roughness:.88,metalness:0});r.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPl;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPl = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPl;
`+Vn).replace("#include <color_fragment>",`#include <color_fragment>
        {
          float lt = 0.55 * vnoise(vWPl.xz * 0.8 + vWPl.y * 0.6) + 0.45 * vnoise(vWPl.xz * 2.6 - vWPl.y * 1.9);
          float d = length(vWPl - cameraPosition);
          diffuseColor.rgb *= mix(1.0, 0.62 + 0.75 * lt, 1.0 - smoothstep(60.0, 400.0, d));
        }`)},i.customProgramCacheKey=()=>"sendai-wood-v1",r.customProgramCacheKey=()=>"sendai-leaf-v1";let o=(c,h,u)=>{let d=new Kn(c,h,n.length),p=new Yt,f=new Re,x=new L,m=new L,g=new ht;return n.forEach(([_,y,M,w],T)=>{f.setFromAxisAngle(new L(0,1,0),w*6.283),x.set(M,M*(.92+.16*w),M),m.set(_,0,y),p.compose(m,f,x),d.setMatrixAt(T,p),h===r&&(g.setRGB(.9+.2*w,.95+.1*w,.85+.2*(1-w)),d.setColorAt(T,g))}),d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0),d.castShadow=u,d.receiveShadow=!1,d.frustumCulled=!1,d},a=o(t,i,!0),l=o(e,r,!0);return a.name="zelkova-wood",l.name="zelkova-leaf",{meshes:[a,l],count:n.length,tris:(t.index?t.index.count:t.attributes.position.count)/3+(e.index?e.index.count:e.attributes.position.count)/3}}var Ww,i_,o_=ge(()=>{Oe();id();Ms();dc();Ww=s=>s.dir==="x"?{x0:s.a,x1:s.b,z0:s.c-s.w/2,z1:s.c+s.w/2}:{x0:s.c-s.w/2,x1:s.c+s.w/2,z0:s.a,z1:s.b},i_=(s,t,e,n=0)=>t>s.x0-n&&t<s.x1+n&&e>s.z0-n&&e<s.z1+n});function a_(){let s=[];for(let t of Ln){if(t.kind===3)continue;let e=t.w/2-1.2,n=Math.floor((t.b-t.a)/36);for(let i=0;i<=n;i++)for(let r of[-1,1]){let o=t.a+i*36+(r>0?18:0);if(o>t.b)continue;let a=t.dir==="x"?o:t.c+r*e,l=t.dir==="x"?t.c+r*e:o,c=t.dir==="x"?0:-r,h=t.dir==="x"?-r:0;s.push({base:[a,l],top:[a+c*1.5,9,l+h*1.5],yaw:Math.atan2(-h,c)})}}return s}function l_(){let s=[];for(let t of Ln.filter(e=>e.kind===1||e.kind===2))for(let e of Ln.filter(n=>n.kind===0&&n.dir==="z"&&n.a<=t.c&&n.b>=t.c&&t.a<n.c&&t.b>n.c))for(let n of[-1,1])for(let i of[-1,1])s.push({x:e.c+n*(e.w/2+1.2),z:t.c+i*(t.w/2-1.5),green:n*i>0});return s}function c_(s,t){let e=a=>ur(new jn(.07,.13,a,6,1).translate(0,a/2,0),[.16,.17,.18]),n=Si([e(9),ur(new Sn(1.6,.1,.1).translate(.75,8.95,0),[.16,.17,.18]),ur(new Sn(.6,.14,.3).translate(1.5,8.9,0),[.4,.4,.36])]),i=Si([e(6.5),ur(new Sn(.3,.9,.3).translate(0,6.2,0),[.1,.1,.11])]),r=new Fe({vertexColors:!0,roughness:.6,metalness:.4});r.customProgramCacheKey=()=>"sendai-pole-v1";let o=(a,l)=>{let c=new Kn(a,r,l.length),h=new Yt,u=new Re,d=new L,p=new L(1,1,1);return l.forEach((f,x)=>{u.setFromAxisAngle(new L(0,1,0),f.yaw??0),d.set(f.base?f.base[0]:f.x,0,f.base?f.base[1]:f.z),h.compose(d,u,p),c.setMatrixAt(x,h)}),c.instanceMatrix.needsUpdate=!0,c.castShadow=!1,c.frustumCulled=!1,c};return[o(n,s),o(i,t)]}function h_(){let s=Bo[0],t=s.x0+8,e=s.x1-40,n=s.z0+6,i=s.z1-5,r=8.4,o=[.55,.54,.52],a=[.22,.23,.25],l=[],c=(x,m,g,_,y,M,w)=>l.push(ur(new Sn(_,y,M).translate(x,m,g),w));c((t+e)/2,r,(n+i)/2,e-t,.9,i-n,o);let h=[],u=(x,m,g,_)=>{let y=Math.hypot(g-x,_-m),M=new Sn(y,1,.18);M.rotateY(-Math.atan2(_-m,g-x)),M.translate((x+g)/2,r+.95,(m+_)/2),l.push(ur(M,a));for(let w=0;w<y;w+=9)h.push([x+(g-x)*w/y,r+1.25,m+(_-m)*w/y])};u(t,n,e,n),u(t,i,e,i),u(t,n,t,i),u(e,n,e,i);for(let x=t+10;x<e;x+=24)for(let m of[n+5,i-5])l.push(ur(new jn(.7,.8,r,8).translate(x,r/2,m),o));c(t+14,r+2.2,(n+i)/2,6,3.6,8,a);let d=Si(l),p=new Fe({vertexColors:!0,roughness:.8,metalness:.05,emissive:new ht(1,.7,.4),emissiveIntensity:0});p.customProgramCacheKey=()=>"sendai-deck-v1";let f=new fe(d,p);return f.castShadow=!0,f.receiveShadow=!0,f.name="deck",f.frustumCulled=!1,{mesh:f,mat:p,lights:h,bounds:{x0:t,x1:e,z0:n,z1:i,y:r}}}var ur,u_=ge(()=>{Oe();id();dc();ur=(s,t)=>{let e=s.attributes.position.count,n=new Float32Array(e*3);for(let i=0;i<e;i++)n.set(t,i*3);return s.setAttribute("color",new se(n,3)),s.deleteAttribute("uv"),s}});var f_,Jp,p_,m_,fd,g_=ge(()=>{Oe();Ip();Lp();td();nd();Up();Dp();Ku();Ms();qp();lc();Zp();o_();u_();dc();f_=new L(...e_).normalize(),Jp=[{zenith:"#2a66b6",horizon:"#bcd3ec",horizonWarm:"#ffc488",sun:"#ffd6a6",cloudLit:"#ffe3c8",cloudDark:"#8da3c4",fog:"#c8d6e8",sunCol:"#ffcf9a",fogD:5e-5},{zenith:"#17387a",horizon:"#6f96c8",horizonWarm:"#f7965a",sun:"#ff9a62",cloudLit:"#f2aa8e",cloudDark:"#45588c",fog:"#7f9cc6",sunCol:"#ff9a60",fogD:6e-5},{zenith:"#060f2c",horizon:"#1b3a6e",horizonWarm:"#3a4f82",sun:"#ff9a60",cloudLit:"#3a4a70",cloudDark:"#0c1630",fog:"#1a3156",sunCol:"#ff9a60",fogD:7e-5}],p_=s=>s.dir==="x"?{x0:s.a,x1:s.b,z0:s.c-s.w/2,z1:s.c+s.w/2}:{x0:s.c-s.w/2,x1:s.c+s.w/2,z0:s.a,z1:s.b},m_=(s,t,e=0)=>s.x0-e<t.x1&&s.x1+e>t.x0&&s.z0-e<t.z1&&s.z1+e>t.z0,fd=class extends Uo{constructor(t,e,n,i={}){super(t,e,n,i),this.timeOffset=hr.globalStart,this.duration=hr.duration,this.timeline.duration=this.duration,this.timeline.frameCount=Math.round(this.duration*this.timeline.fps),this.showTitle=!1,this.fadeSec=0,this.fx=i.fx??{},this.nightU={value:.1},this.snowU={value:0},this.ambientCount=0}async build(){let t=Ju(20260806),e=this.scene,n=Jp[0],i=Qu(jt,{sunDir:f_,colors:{...n,cloudCover:.2}});if(this.sky=i,e.add(i.mesh),e.fog=new Ni(new ht(n.fog),n.fogD),this.glRenderer){let c=new En;c.add(new fe(i.mesh.geometry,i.material));let h=new Wi(this.glRenderer);e.environment=h.fromScene(c,.015,1,3e3).texture,h.dispose()}let r=new Gi(16764826,3.3),o=new L(-150,0,100);r.position.copy(o).addScaledVector(f_,3e3),r.target.position.copy(o),r.castShadow=!0,r.shadow.mapSize.set(4096,4096);let a=r.shadow.camera;a.left=-820,a.right=820,a.top=520,a.bottom=-520,a.near=200,a.far=6500,r.shadow.bias=-2e-4,r.shadow.normalBias=.9,e.add(r,r.target),this.sun=r,this.hemi=new zi(14674687,13226408,.55),e.add(this.hemi),e.add(this._buildGround()),e.add(this._buildBluff()),e.add(this._buildFarMountains()),this._buildBlocks(t),this._buildLamps(),this._buildStation(),this._buildTreesAll(t),this._buildTraffic(t),this.rig=new hd(hr);let l=c=>new ar(c.map(([h,u])=>({t:h,v:u})));this.tracks={night:l([[0,.1],[1.2,.3],[2.6,.6],[4.2,.85],[7,1]]),palette:l([[0,0],[1.2,.5],[3,1],[5,1.45],[7,1.85]]),sunPower:l([[0,3.3],[1.5,2.3],[3,1.2],[4.5,.5],[7,.1]]),envPower:l([[0,.7],[3,.5],[7,.25]]),exposure:l([[0,1],[7,1]]),bloom:l([[0,.25],[3,.4],[7,.55]]),bloomThreshold:l([[0,1.4],[7,1]]),bloomRadius:l([[0,.55],[7,.7]]),dofAperture:l([[0,.6],[7,.6]]),dofMaxBlur:l([[0,4],[7,5]])},this.look.grade={uShadowAmt:.3,uVig:.3,uSat:1.06,uGrain:.02,uAberr:6e-4,uHighTint:new ht(1.03,1,.95)},this._ca=new ht,this._cb=new ht,$u(this,{tiled:this.fx.tiled,haze:this.fx.haze,tileExclude:[this.cars.mesh,this.peds.mesh,this.boxMesh],skyUniforms:this.sky.uniforms})}_buildGround(){let t=new zn(24e3,24e3,1,1);t.rotateX(-Math.PI/2);let e=new Fe({color:16777215,roughness:.85,metalness:0});e.customProgramCacheKey=()=>"sendai-ground-v2";let n=x=>x.kind===0?0:x.kind===3?1:2,i=[...Ln].sort((x,m)=>n(x)-n(m)),r=i.map(x=>new de(x.dir==="x"?0:1,x.c,x.w,x.kind)),o=i.map(x=>new de(x.a,x.b,0,0)),a=[...Oo,...Bo],l=a.map(x=>new de(x.x0,x.x1,x.z0,x.z1)),c=a.map(x=>Bo.includes(x)?1:0),h=i.length,u=a.length,d=this.nightU,p=zo;e.onBeforeCompile=x=>{x.uniforms.uNight=d,x.uniforms.uStA={value:r},x.uniforms.uStB={value:o},x.uniforms.uPark={value:l},x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
          uniform float uNight; varying vec3 vWP;
          uniform vec4 uStA[${h}]; uniform vec4 uStB[${h}]; uniform vec4 uPark[${u}];
          ${Vn}`).replace("#include <color_fragment>",`#include <color_fragment>
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
totalEmissiveRadiance += gEmis;`)};let f=new fe(t,e);return f.receiveShadow=!0,f.name="ground",f}_buildBluff(){let e=Fo.x0,n=-750,i=1250,r=110,o=150,a=new zn(e- -1500,i-n,r,o);a.rotateX(-Math.PI/2),a.translate((-1500+e)/2,0,(n+i)/2);let l=a.attributes.position;for(let f=0;f<l.count;f++)l.setY(f,t_(l.getX(f),l.getZ(f)));a.computeVertexNormals();let c=a.attributes.normal,h=new Float32Array(l.count*3),u=_i(19);for(let f=0;f<l.count;f++){let x=l.getY(f),m=1-c.getY(f),g=u.fbm(l.getX(f)*.01,l.getZ(f)*.01,3),_=Math.min(1,x/20),y=.85+.3*g;h[f*3]=(.17+(.09-.17)*_+m*.25)*y,h[f*3+1]=(.25+(.17-.25)*_+m*.15)*y,h[f*3+2]=(.1+(.07-.1)*_+m*.1)*y}a.setAttribute("color",new se(h,3));let d=new Fe({vertexColors:!0,roughness:.95,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});d.customProgramCacheKey=()=>"sendai-bluff-v1";let p=new fe(a,d);return p.receiveShadow=!0,p.castShadow=!1,p.name="bluff",p.position.y=.02,p}_buildFarMountains(){let t=_i(51),e=_i(77),n=[{x:-24e3,z:22e3,h:1550,sx:6500,sz:5200},{x:-9e3,z:-19e3,h:1150,sx:3600,sz:3200},{x:-22e3,z:-3e3,h:850,sx:4800,sz:9500},{x:-17e3,z:11e3,h:700,sx:4200,sz:3800}],r=ed(jt,{heightFn:(h,u)=>{let d=0;for(let f of n)d+=f.h*Math.exp(-(((h-f.x)/f.sx)**2+((u-f.z)/f.sz)**2));let p=Math.hypot(h,u);return d+=(160+380*t.fbm(h*18e-5,u*18e-5,4))*Math.min(1,Math.max(0,(p-2500)/6500))*(.6+.8*e.fbm(h*4e-4,u*4e-4,3)),d},y:-4,rings:240,segs:400,thA:1.9,thB:4.4,snowLine:99999}),o=r.geometry.attributes.position,a=r.geometry.attributes.normal,l=new Float32Array(o.count*3),c=_i(31);for(let h=0;h<o.count;h++){let u=o.getX(h),d=o.getZ(h),p=o.getY(h),f=1-a.getY(h),x=c.fbm(u*.0011,d*.0011,4),m=c.fbm(u*.006+5,d*.006,3),g=Math.min(1,Math.max(0,(f-.22)/.3))*Math.min(1,Math.max(0,(p-500)/500)),_=Math.min(1,Math.max(0,(p-900)/500)),y=[.14+.05*_+.03*x,.22-.02*_+.03*x,.1+.02*_],M=[.34,.32,.3],w=.88+.24*m;for(let T=0;T<3;T++)l[h*3+T]=(y[T]+(M[T]-y[T])*g*.7)*w}return r.geometry.setAttribute("color",new se(l,3)),r}_buildBlocks(t){let e=ju(jt,{uNight:this.nightU,uSnow:this.snowU}),n=new Ss(jt,e,4e3),i=Ln.map(p_),r=[...Oo,...Bo],o=new Set([zo.x0,zo.x1]),a=new Set([zo.z0,zo.z1]);for(let u of Ln){let d=p_(u);u.dir==="z"?(o.add(d.x0),o.add(d.x1)):(a.add(d.z0),a.add(d.z1))}let l=[...o].sort((u,d)=>u-d),c=[...a].sort((u,d)=>u-d),h=1;for(let u=0;u<l.length-1;u++)for(let d=0;d<c.length-1;d++){let p=l[u],f=l[u+1],x=c[d],m=c[d+1];if(f-p<9||m-x<9)continue;let g=Math.max(1,Math.round((f-p)/27)),_=Math.max(1,Math.round((m-x)/25));for(let y=0;y<g;y++)for(let M=0;M<_;M++){let w=p+(f-p)*y/g,T=p+(f-p)*(y+1)/g,v=x+(m-x)*M/_,S=x+(m-x)*(M+1)/_,R={x0:w,x1:T,z0:v,z1:S};if(i.some(nt=>m_(R,nt,-.6))||r.some(nt=>m_(R,nt,2)))continue;let E=(w+T)/2,I=(v+S)/2;if(E<Fo.x0-20)continue;let N=Math.abs(I-230),z=Math.abs(I-0),D=Math.abs(E),O=16,q=44;N<62?(O=38,q=95):z<58&&(O=28,q=66),D<36&&I>20&&I<215&&(O=14,q=26),E>180&&I>60&&I<330&&(O=55,q=120),E<-240&&(O=10,q=28);let H=O+(q-O)*Math.pow(t(),1.3),st=H>60?t()<.6?2:0:H>30?t.pick([0,2,4]):t.pick([1,3,4,4]),W=T-w-1.2,Z=S-v-1.2;W<6||Z<6||n.add(E,0,I,W,H,Z,st,h+++t(),.35+.55*t())}}n.add(326,0,160,44,36,112,2,901.3,.7),n.add(300,0,96,30,70,30,0,902.1,.6),n.add(300,0,226,34,58,28,2,903.7,.6),n.add(350,0,160,18,84,40,2,904.4,.7),this.boxes=n,this.boxMesh=n.build({castShadow:!0}),this.scene.add(this.boxMesh)}_buildLamps(){let t=a_(),e=l_(),[n,i]=c_(t,e);this.scene.add(n,i);let r=new Float32Array(t.length*3),o=new Float32Array(t.length*3),a=new Float32Array(t.length);t.forEach((u,d)=>{r.set(u.top,d*3),o.set([3,1.9,.9],d*3),a[d]=1.1}),this.lamps=Mi(jt,{positions:r,colors:o,sizes:a,fogDensity:5e-5,minPx:1.4,maxPx:22}),this.scene.add(this.lamps.points);let l=new Float32Array(e.length*3),c=new Float32Array(e.length*3),h=new Float32Array(e.length);e.forEach((u,d)=>{l.set([u.x,6.2,u.z],d*3),c.set(u.green?[.3,2.4,.9]:[2.6,.2,.12],d*3),h[d]=.5}),this.signals=Mi(jt,{positions:l,colors:c,sizes:h,fogDensity:5e-5,minPx:1.4,maxPx:10}),this.scene.add(this.signals.points),this.lampCount=t.length,this.signalCount=e.length}_buildStation(){let t=h_();this.deck=t,this.scene.add(t.mesh);let e=new Float32Array(t.lights.length*3),n=new Float32Array(t.lights.length*3),i=new Float32Array(t.lights.length);t.lights.forEach((r,o)=>{e.set(r,o*3),n.set([2.4,1.6,.8],o*3),i[o]=.6}),this.deckGlow=Mi(jt,{positions:e,colors:n,sizes:i,fogDensity:5e-5,minPx:1.4,maxPx:12}),this.scene.add(this.deckGlow.points)}_buildTreesAll(t){let e=r_(t);e.meshes.forEach(n=>this.scene.add(n)),this.treeCount=e.count,this.treeTris=e.tris}_buildTraffic(t){let e=[];for(let c of Ln){if(c.kind===3)continue;let h=c.b-c.a,u=c.kind===0?[3.4]:c.kind===1?[6,12.4]:[10.4,14.6];for(let d of u)for(let p of[1,-1]){let f=Math.max(1,Math.round(h/70));for(let x=0;x<f;x++){let m=c.dir==="x"?p>0?-1:1:p>0?1:-1;e.push({alongX:c.dir==="x",dir:p,fixed:c.c+m*d,speed:t.range(6,12),off:t.range(0,4e3),len:h,min:c.a,ph:t()})}}}this.cars=sd(jt,e),this.scene.add(this.cars.mesh);let n=e.length,i=new Float32Array(n*4*3),r=new Float32Array(n*4*3),o=new Float32Array(n*4);for(let c=0;c<n;c++)for(let h=0;h<4;h++){let u=(c*4+h)*3,d=h<2;d?(r[u]=3,r[u+1]=2.9,r[u+2]=2.3):(r[u]=2.4,r[u+1]=.1,r[u+2]=.07),o[c*4+h]=d?.7:.5}this.carGlow=Mi(jt,{positions:i,colors:r,sizes:o,fogDensity:4e-5,minPx:1.4,maxPx:12}),this.scene.add(this.carGlow.points),this.carCount=n;let a=[],l=(c,h,u,d)=>{for(let p=0;p<d;p++)a.push({x0:h,x1:u,z:c+t.range(-.8,.8),dir:t()<.5?1:-1,speed:t.range(.9,1.5),off:t.range(0,800),ph:t()})};l(230-21.5,-420,300,55),l(230+21.5,-420,300,55);for(let c of[-3,3,-19.5,19.5])l(0+c,-235,105,30);l(109,-330,-10,12),l(121,-330,-10,12),l(109,10,330,12),l(121,10,330,12),this.peds=rd(jt,a),this.scene.add(this.peds.mesh),this.pedCount=a.length}applyTime(t){let e=this.sampleTrack("palette",t,0),n=Math.min(1,Math.floor(e)),i=Math.min(1,e-n),r=Jp[n],o=Jp[Math.min(2,n+1)],a=this.sky.uniforms,l=(h,u)=>{this._ca.set(r[h]),this._cb.set(o[h]),u.value.lerpColors(this._ca,this._cb,i)};l("zenith",a.uZenith),l("horizon",a.uHorizon),l("horizonWarm",a.uHorizonWarm),l("sun",a.uSunColor),l("cloudLit",a.uCloudLit),l("cloudDark",a.uCloudDark),this._ca.set(r.fog),this._cb.set(o.fog),this.scene.fog.color.lerpColors(this._ca,this._cb,i),this.scene.fog.density=r.fogD+(o.fogD-r.fogD)*i,this._ca.set(r.sunCol),this._cb.set(o.sunCol),this.sun.color.lerpColors(this._ca,this._cb,i),this.nightU.value=this.sampleTrack("night",t,.1);let c=this.sampleTrack("sunPower",t,3);this.sun.intensity=c,a.uSunStrength.value=Math.min(1,c/2),this.hemi.intensity=.55*Math.max(.25,1-this.nightU.value*1),this.scene.environmentIntensity=this.sampleTrack("envPower",t,.6)}onBeforeRender({t,projScale:e,camera:n}){let i=t+this.timeOffset;this.sky.mesh.position.copy(n.position),this.sky.uniforms.uTime.value=i*5;let r=this.scene.fog.density;for(let a of[this.lamps,this.carGlow,this.signals,this.deckGlow])a.uniforms.uProj.value=e,a.uniforms.uFog.value=r;let o=this.nightU.value;this.lamps.uniforms.uGain.value=.08+1*o,this.carGlow.uniforms.uGain.value=.5+.7*o,this.signals.uniforms.uGain.value=.6+.6*o,this.deckGlow.uniforms.uGain.value=.1+1*o,this.deck.mat.emissiveIntensity=.02+.2*o,this.cars.update(i,this.carGlow.points.geometry.attributes.position.array),this.carGlow.points.geometry.attributes.position.needsUpdate=!0,this.peds.update(i)}setAmbientCount(t){this.ambientCount=t}setLayoutWeight(t){this.rig.weight=t}}});var x_,__=ge(()=>{x_=[{id:"cap-sendai",title:"SENDAI",sub:"\u4ED9\u53F0",a:-.05,b:.15},{id:"cap-aoba",title:"\u9752\u8449\u901A",sub:"Aoba-dori",a:.18,b:.34},{id:"cap-jozenji",title:"\u5B9A\u7985\u5BFA\u901A",sub:"Jozenji-dori",a:.37,b:.52},{id:"cap-tanabata",title:"\u4ED9\u53F0\u4E03\u5915",sub:"Sendai Tanabata",a:.55,b:.72},{id:"cap-aobajo",title:"\u9752\u8449\u57CE\u5740\u304B\u3089",sub:"From Aoba Castle Ruins",a:.75,b:1.08}]});var v_={};vd(v_,{default:()=>Yw});var Yw,y_=ge(()=>{g_();__();Zp();Yw={contract:1,meta:{id:"sendai",name:{ja:"\u4ED9\u53F0",en:"Sendai"},season:"summer",theme:"\u4E03\u5915\u306E\u5915\u3079\uFF08\u91D1\u8272\u306E\u5915\u65B9\u2192\u706F\u308A\u59CB\u3081\u308B\u8857\uFF09",docTitle:"SENDAI \u2014 JAPAN \u2014 THE CITY COLLECTION"},captions:x_,timeline:{globalStart:hr.globalStart,duration:hr.duration},ambient:{name:"\u5439\u304D\u6D41\u3057",counts:{normal:1200,light:700}},tuning:{haze:{start:500,end:5e3,strength:.65},grade:{expDay:1.08,expDusk:.92,highDusk:[1.09,1,.885]}},async buildScene(s){let t=new fd(s.cityMeta,s.index,s.total,{renderer:s.renderer,fx:s.fx});return await t.build(),t}}});Oe();Oe();Oe();Oe();var Do={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};Oe();Oe();var In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},uw=new ki(-1,1,1,-1,0,1),Ap=class extends Zt{constructor(){super(),this.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Lt([0,2,0,0,2,0],2))}},dw=new Ap,ys=class{constructor(t){this._mesh=new fe(dw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,uw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var or=class extends In{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gi.clone(t.uniforms),this.material=new Ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ys(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var sc=class extends In{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},ku=class extends In{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Gu=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new et);this._width=n.width,this._height=n.height,e=new Te(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:He}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new or(Do),this.copyPass.material.blending=hi,this.timer=new tr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}sc!==void 0&&(o instanceof sc?n=!0:o instanceof ku&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};Oe();var Hu=class extends In{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ht}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};Oe();Oe();var lx={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ht(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var No=class s extends In{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new ht(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Te(r,o,{type:He,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Te(r,o,{type:He,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Te(r,o,{type:He,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=lx;this.highPassUniforms=gi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ge({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new et(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gi.clone(Do.uniforms),this.blendMaterial=new Ge({uniforms:this.copyUniforms,vertexShader:Do.vertexShader,fragmentShader:Do.fragmentShader,premultipliedAlpha:!0,blending:xo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ht,this._oldClearAlpha=1,this._basic=new On,this._fsQuad=new ys(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new et(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let i=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new Ge({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};No.BlurDirectionX=new et(1,0);No.BlurDirectionY=new et(0,1);Oe();var rc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Vu=class extends In{constructor(){super(),this.isOutputPass=!0,this.uniforms=gi.clone(rc.uniforms),this.material=new ls({name:rc.name,uniforms:this.uniforms,vertexShader:rc.vertexShader,fragmentShader:rc.fragmentShader}),this._fsQuad=new ys(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fs?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ps?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ms?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ui?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gs?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xs?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===vo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function cx(s,{near:t,far:e}){let n={uniforms:{tDiffuse:{value:null},tDepth:{value:null},uNear:{value:t},uFar:{value:e},uFocus:{value:200},uAperture:{value:1},uMaxBlur:{value:8},uRes:{value:new s.Vector2(1920,1080)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`},i=new or(n),r=i.render.bind(i);return i.render=function(o,a,l,c,h){this.uniforms.tDepth.value=l.depthTexture,r(o,a,l,c,h)},i}function hx(s){let t={uniforms:{tDiffuse:{value:null},uFade:{value:1},uSeed:{value:0},uRes:{value:new s.Vector2(1920,1080)},uSat:{value:1.08},uContrast:{value:.35},uShadowTint:{value:new s.Color(0,.05,.1)},uShadowAmt:{value:.35},uHighTint:{value:new s.Color(1.05,1,.93)},uVig:{value:.55},uGrain:{value:.028},uAberr:{value:.0016}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`};return new or(t)}oc();var Ep='"Helvetica Neue", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Segoe UI", Arial, sans-serif';function Cp(s,t,e,n,i,r){let o=[...t],a=o.map(h=>s.measureText(h).width),l=a.reduce((h,u)=>h+u,0)+i*(o.length-1),c=e-l/2;o.forEach((h,u)=>{s.globalAlpha=r(u,o.length),s.fillText(h,c,n),c+=a[u]+i})}function px(s,t,e,n,i,{englishName:r,name:o,index:a,total:l}){let c=dx(n,i);if(!c.visible||c.opacity<=.001)return;let h=e/1080;s.save(),s.textBaseline="alphabetic",s.fillStyle="#fff",s.shadowColor="rgba(8,14,34,0.55)",s.shadowBlur=24*h;let u=s.createLinearGradient(0,e*.62,0,e);u.addColorStop(0,"rgba(6,10,24,0)"),u.addColorStop(1,`rgba(6,10,24,${.5*c.opacity})`),s.shadowColor="transparent",s.fillStyle=u,s.fillRect(0,e*.62,t,e*.38),s.fillStyle="#fff",s.shadowColor="rgba(8,14,34,0.55)";let d=t/2,p=104*h;s.font=`200 ${p}px ${Ep}`;let f=c.spacing*p,x=r.toUpperCase();Cp(s,x,d+f/2,e*.865,f,(g,_)=>{let y=gn(c.reveal*(_+3)-g*.9,0,1);return c.opacity*xn.outCubic(y)});let m=t*.16*xn.outCubic(c.reveal);s.globalAlpha=c.opacity*.8,s.shadowBlur=0,s.fillRect(d-m/2,e*.885,m,Math.max(1,1.5*h)),s.shadowBlur=12*h,s.shadowColor="rgba(8,14,34,0.6)",s.font=`300 ${24*h}px ${Ep}`,s.globalAlpha=c.opacity*xn.outCubic(gn(c.reveal*1.4-.4,0,1)),Cp(s,`${o}`,d,e*.925,10*h,()=>s.globalAlpha),s.font=`300 ${15*h}px ${Ep}`,s.globalAlpha=c.opacity*.75*xn.outCubic(gn(c.reveal*1.4-.4,0,1)),Cp(s,`JAPAN \u2014 THE CITY COLLECTION      ${String(a).padStart(2,"0")} / ${String(l).padStart(2,"0")}`,d,e*.958,5*h,()=>s.globalAlpha),s.restore()}oc();var Xu=4,qu=4e4,Yu=class{constructor(t,{width:e=1920,height:n=1080,samples:i=4}={}){this.stage=t,this.ctx2d=t.getContext("2d",{alpha:!1}),this.glCanvas=document.createElement("canvas"),this.gl=new nc({canvas:this.glCanvas,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.gl.setPixelRatio(1),this.gl.outputColorSpace=Je,this.gl.toneMapping=ui,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=us,this.gl.shadowMap.autoUpdate=!1,this.samples=i,this.width=0,this.height=0,this.city=null,this._shadowDirty=!0,this.setSize(e,n)}_buildComposer(){let{width:t,height:e}=this;this.composer?.dispose?.();let n=r=>new Te(t,e,{type:He,samples:r,depthBuffer:!0,depthTexture:new Bn(t,e,mn)}),i;try{i=n(this.samples)}catch{i=n(0)}this.composer=new Gu(this.gl,i),this.composer.setPixelRatio(1),this.composer.setSize(t,e),this.renderPass=new Hu(new En,new Ee),this.dofPass=cx(jt,{near:Xu,far:qu}),this.bloomPass=new No(new et(t,e),.6,.7,.9),this.outputPass=new Vu,this.gradePass=hx(jt),[this.renderPass,this.dofPass,this.bloomPass,this.outputPass,this.gradePass].forEach(r=>this.composer.addPass(r)),this.dofPass.uniforms.uRes.value.set(t,e),this.gradePass.uniforms.uRes.value.set(t,e)}setSize(t,e){t=Math.round(t),e=Math.round(e),!(t===this.width&&e===this.height)&&(this.width=t,this.height=e,this.stage.width=t,this.stage.height=e,this.gl.setSize(t,e,!1),this._buildComposer(),this.city&&this._bindCity())}_bindCity(){this.renderPass.scene=this.city.scene,this.renderPass.camera=this.city.camera,this.city.camera.aspect=this.width/this.height,this.city.camera.updateProjectionMatrix()}setCity(t){this.city=t,this._bindCity(),this._shadowDirty=!0}renderAt(t,e=0){let n=this.city,i=n.frameState(t),r=n.camera;r.aspect=this.width/this.height,r.near=Xu,r.far=qu,r.updateProjectionMatrix(),r.updateMatrixWorld(!0);let o=r.projectionMatrix.elements[5]*.5*this.height;n.onBeforeRender?.({t,frame:e,projScale:o,camera:r}),this.gl.toneMappingExposure=i.exposure,this.bloomPass.strength=i.bloom,this.bloomPass.radius=i.bloomRadius??.7,this.bloomPass.threshold=i.bloomThreshold??.9;let a=this.dofPass.uniforms;a.uFocus.value=i.focusDistance,a.uAperture.value=i.dofAperture??1,a.uMaxBlur.value=(i.dofMaxBlur??7)*(this.height/1080),this.dofPass.enabled=(i.dofMaxBlur??7)>.05;let l=this.gradePass.uniforms;l.uFade.value=fx(t,n.duration,{inSec:n.fadeSec??.8,outSec:n.fadeSec??.8}),l.uSeed.value=e%997,Object.entries(n.look.grade??{}).forEach(([h,u])=>{l[h]&&(l[h].value.isColor?l[h].value.set(u):l[h].value=u)}),this._shadowDirty&&(this.gl.shadowMap.needsUpdate=!0,this._shadowDirty=!1),this.composer.render();let c=this.ctx2d;c.drawImage(this.glCanvas,0,0,this.width,this.height),n.showTitle!==!1&&px(c,this.width,this.height,t,n.duration,n.titleInfo)}dispose(){this.composer?.dispose?.(),this.gl.dispose()}};var Zu=class extends Yu{constructor(t,e){super(t,e),this.gl.info.autoReset=!1,this.lastInfo={calls:0,triangles:0},this.grade=null}applyQuality({w:t,h:e,samples:n,dof:i}){this.dofOn=i,n!==this.samples&&(this.samples=n,this.width=0),this.setSize(t,e)}gpuString(){let t=this.gl.getContext(),e=t.getExtension("WEBGL_debug_renderer_info");return e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):"unknown"}renderAt(t,e=0,n=t){let i=this.city,r=i.frameState(t),o=i.camera;o.aspect=this.width/this.height,o.near=Xu,o.far=qu,o.updateProjectionMatrix(),o.updateMatrixWorld(!0);let a=o.projectionMatrix.elements[5]*.5*this.height;i.onBeforeRender?.({t:n,frame:e,projScale:a,camera:o}),this.gl.toneMappingExposure=r.exposure*(this.grade?.enabled?this.grade.exposureGain(t):1),this.bloomPass.strength=r.bloom,this.bloomPass.radius=r.bloomRadius??.7,this.bloomPass.threshold=r.bloomThreshold??.9;let l=this.dofPass.uniforms;l.uFocus.value=r.focusDistance,l.uAperture.value=r.dofAperture??1,l.uMaxBlur.value=(r.dofMaxBlur??7)*(this.height/1080),this.dofPass.enabled=this.dofOn!==!1&&(r.dofMaxBlur??7)>.05;let c=this.gradePass.uniforms;c.uFade.value=1,c.uSeed.value=e%997,Object.entries(i.look.grade??{}).forEach(([h,u])=>{c[h]&&(c[h].value.isColor?c[h].value.set(u):c[h].value=u)}),this.grade?.apply(t,c),this._shadowDirty&&(this.gl.shadowMap.needsUpdate=!0,this._shadowDirty=!1),this.gl.info.reset(),this.composer.render(),this.lastInfo={calls:this.gl.info.render.calls,triangles:this.gl.info.render.triangles},this.ctx2d.drawImage(this.glCanvas,0,0,this.width,this.height)}};lc();var Kp="sapporo",M_={sapporo:()=>Promise.resolve().then(()=>(jx(),Qx)),sendai:()=>Promise.resolve().then(()=>(y_(),v_))};async function S_(s){let t=null,e=s||Kp;M_[e]||(t=`\u672A\u77E5\u306E\u90FD\u5E02 "${e}" \u2192 ${Kp} \u3092\u8868\u793A`,e=Kp);let n=(await M_[e]()).default;return yx(n),{mod:n,note:t}}lc();var pd=class{constructor(){this.el=document.createElement("pre"),this.el.id="dbg",this.el.setAttribute("aria-hidden","true"),this.el.style.cssText=["position:fixed","left:max(6px,env(safe-area-inset-left))","top:max(6px,env(safe-area-inset-top))","z-index:99","margin:0","padding:6px 8px","max-width:calc(100vw - 12px)","box-sizing:border-box","font:10px/1.35 ui-monospace,Menlo,monospace","color:#cfe","background:rgba(0,0,0,.62)","border-radius:6px","white-space:pre-wrap","word-break:break-all","pointer-events:auto","user-select:text"].join(";"),document.body.appendChild(this.el),this.frames=[],this.history=[],this.text="",this.el.addEventListener("click",()=>this.copy())}tick(t){this.frames.push(t);let e=t-1e3;for(;this.frames.length&&this.frames[0]<e;)this.frames.shift()}logTier(t,e,n){this.history.push(`${new Date().toISOString().slice(11,19)} ${t}\u2192${e} (${n})`),this.history.length>6&&this.history.shift()}fps(){let t=this.frames;if(t.length<2)return{avg:0,maxGap:0};let e=0;for(let n=1;n<t.length;n++)e=Math.max(e,t[n]-t[n-1]);return{avg:(t.length-1)*1e3/(t[t.length-1]-t[0]),maxGap:e}}update(t){let{avg:e,maxGap:n}=this.fps(),i=[`FPS ${e.toFixed(1)}  \u6700\u5927\u9593\u9694 ${n.toFixed(0)}ms  (\u76F4\u8FD11\u79D2)`,`tier ${t.tierLabel}${this.history.length?"  \u5C65\u6B74: "+this.history.join(" | "):"  \u5C65\u6B74: \u306A\u3057"}`,`canvas ${t.width}x${t.height} (${(t.width*t.height/1e6).toFixed(2)}MP)  DPR ${t.dpr}  scale ${t.scale.toFixed(3)}`,`p ${t.p.toFixed(4)}${t.target!==void 0?" \u2192\u76EE\u6A19 "+t.target.toFixed(4):""}  t ${t.t.toFixed(3)}s  layout \u7E26${(t.wPortrait*100).toFixed(0)}%`,`GL calls ${t.calls}  tris ${t.triangles}`,t.haze?`haze \xD7${t.haze.mult}${t.haze.mult===0?"(\u7121\u52B9)":""}  \u958B\u59CB ${t.haze.start}m \u5230\u9054 ${t.haze.end}m \u4E0A\u9650 ${t.haze.strength}\uFF08\u5C71 \xD7${t.haze.mountain}\uFF09 \u5F69\u5EA6\u6E1B ${t.haze.desat}`:"haze \u306A\u3057",t.grade?`grade \xD7${t.grade.cfg.mult}${t.grade.cfg.mult===0?"(\u7121\u52B9)":""}  \u30C8\u30FC\u30F3\u30DE\u30C3\u30D7 ${t.grade.tone}  \u9732\u51FA \xD7${(t.grade.now.exposure??1).toFixed(3)} (\u663C${t.grade.cfg.expDay}\u2192\u5915${t.grade.cfg.expDusk})  \u5915\u666F\u5EA6 ${(t.grade.now.dusk??0).toFixed(2)}  \u30D3\u30CD\u30C3\u30C8 ${t.grade.vig??"-"}`:"",`GPU ${t.gpu}`];this.text=i.join(`
`),this.el.textContent=this.text}async copy(){try{await navigator.clipboard.writeText(this.text),this.flash("copied")}catch{let t=document.createRange();t.selectNodeContents(this.el);let e=getSelection();e.removeAllRanges(),e.addRange(t);try{document.execCommand("copy"),this.flash("copied")}catch{this.flash("\u9078\u629E\u3057\u307E\u3057\u305F\uFF08\u624B\u52D5\u3067\u30B3\u30D4\u30FC\uFF09")}}}flash(t){let e=this.el.style.outline;this.el.style.outline="1px solid #6f6",this.el.title=t,setTimeout(()=>{this.el.style.outline=e},600)}};Rp();Oe();var Zw=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),$w=(s,t,e)=>{let n=Zw((e-s)/(t-s));return n*n*(3-2*n)},pc=(s,t,e)=>s+(t-s)*e,gd={expDay:1.15,expDusk:.9,rampFrom:.25,rampTo:1,highDusk:[1.075,1,.905],shadowDusk:[.035,.03,.1],satDusk:1.075,vig:.2};function b_(s,t=gd){let e=s.get("grade"),n=e===null||e===""?1:Math.max(0,parseFloat(e)),i=(r,o)=>s.has(r)&&isFinite(parseFloat(s.get(r)))?parseFloat(s.get(r)):o;return{mult:isFinite(n)?n:1,...t,expDay:i("gradeExpDay",t.expDay),expDusk:i("gradeExpDusk",t.expDusk),vig:s.has("vig")&&isFinite(parseFloat(s.get("vig")))?parseFloat(s.get("vig")):t.vig}}var md=class{constructor(t){this.cfg={...gd,...t},this.now={exposure:1,dusk:0}}get enabled(){return this.cfg.mult>0}dusk(t){return $w(this.cfg.rampFrom,this.cfg.rampTo,t/7)}exposureGain(t){let e=this.cfg,n=this.dusk(t);return 1+(pc(e.expDay,e.expDusk,n)-1)*e.mult}apply(t,e){if(!this.enabled)return;this.cfg.vig!==null&&(e.uVig.value=this.cfg.vig),this.now={vig:e.uVig.value};let n=this.dusk(t);this.now={vig:e.uVig.value,exposure:this.exposureGain(t),dusk:n};let i=n*this.cfg.mult,r=(o,a)=>o.setRGB(pc(o.r,a[0],i),pc(o.g,a[1],i),pc(o.b,a[2],i));e.uHighTint&&r(e.uHighTint.value,this.cfg.highDusk),e.uShadowTint&&(this.baseShadow??(this.baseShadow=e.uShadowTint.value.clone()),e.uShadowTint.value.copy(this.baseShadow),r(e.uShadowTint.value,this.cfg.shadowDusk)),e.uSat.value=pc(e.uSat.value,this.cfg.satDusk,i)}},w_=s=>({[Pn]:"\u306A\u3057",[fs]:"Linear",[ps]:"Reinhard",[ms]:"Cineon",[ui]:"ACES Filmic",[gs]:"AgX",[xs]:"Neutral"})[s.toneMapping]??String(s.toneMapping);Vp();var mc=s=>document.getElementById(s),bi=new URLSearchParams(location.search),Jw=bi.get("debug")==="1",Kw=bi.get("freeze")==="1",T_=matchMedia("(pointer: coarse)").matches;async function Qw(){let s=mc("track"),t=mc("stage"),e=mc("cv"),n=await(await fetch("metadata/cities.json")).json(),{mod:i,note:r}=await S_(bi.get("city"));r&&console.warn("[scroll]",r);let o=n.cities.find(ot=>ot.id===i.meta.id);document.title=i.meta.docTitle;let{globalStart:a,duration:l}=i.timeline,c=ot=>kx(ot,l),h=new Zu(e,{width:320,height:568});h.grade=new md(b_(bi,{...gd,...i.tuning.grade}));let u=await i.buildScene({renderer:h.gl,cityMeta:o,index:o.displayOrder,total:n.cities.length,fx:{tiled:bi.get("tiles")==="0"?!1:bi.get("tiles")||!0,haze:_x(bi,{...ac,...i.tuning.haze})}});Mx(u),h.setCity(u);let d=Jw?new pd:null,p=h.gpuString(),f={p:0,t:0,w:0,width:0,height:0,dpr:1,scale:1},x=ot=>Gx.find(G=>G.id===ot),m=x((bi.get("tier")||"").toUpperCase())||x(Vx(t.clientWidth||innerWidth,t.clientHeight||innerHeight,T_)),g=()=>bi.get("snow")==="normal"?"normal":bi.get("snow")==="light"||Hp(t.clientWidth||innerWidth,t.clientHeight||innerHeight,T_)?"light":"normal";function _(){let ot=t.clientWidth||innerWidth,G=t.clientHeight||innerHeight,lt=Math.min(devicePixelRatio||1,3),{w:vt,h:kt,scale:wt}=Hx(ot,G,lt,m.mp);h.applyQuality({w:vt,h:kt,samples:m.samples,dof:m.dof});let Ht=g();u.setAmbientCount(i.ambient.counts[Ht]),Object.assign(f,{width:vt,height:kt,dpr:lt,scale:wt,aspect:ot/G,ambientMode:Ht}),f.w=kp(f.aspect),u.setLayoutWeight(f.w),M=!0}function y(ot,G="manual"){let lt=x(ot);!lt||lt===m||(d?.logTier(m.id,lt.id,G),m=lt,_())}let M=!0,w=null,T=()=>zx(s.getBoundingClientRect().top,s.offsetHeight,t.offsetHeight);addEventListener("scroll",()=>{M=!0},{passive:!0});let v=0,S=null,R=!1,E=0,I=ot=>{let G=s.offsetHeight-t.offsetHeight;window.scrollTo(0,ot*G)},N=0,z=0,D=()=>{t.clientWidth===N&&t.clientHeight===z||(R||(R=!0),clearTimeout(E),E=setTimeout(()=>{_(),I(v),R=!1},160),N=t.clientWidth,z=t.clientHeight)};addEventListener("resize",D),addEventListener("orientationchange",D),_(),N=t.clientWidth,z=t.clientHeight;let O=()=>({tierLabel:`${m.id} \u4E88\u7B97${m.mp}MP MSAA${m.samples} DoF${m.dof?"\u3042\u308A":"\u306A\u3057"} ${i.ambient.name}${i.ambient.counts[f.ambientMode]}`,width:f.width,height:f.height,dpr:f.dpr,scale:f.scale,p:f.p,target:f.target,t:f.t,wPortrait:f.w,calls:h.lastInfo.calls,triangles:h.lastInfo.triangles,gpu:p,haze:u.haze?.cfg,grade:{cfg:h.grade.cfg,now:h.grade.now,vig:h.grade.now.vig?.toFixed?.(2),tone:w_(h.gl)}}),q=document.querySelector(".captions"),H=i.captions.map(ot=>{let G=document.createElement("div");G.className="cap",G.id=ot.id;let lt=document.createElement("h2");if(lt.textContent=ot.title,G.appendChild(lt),ot.sub){let vt=document.createElement("p");vt.textContent=ot.sub,G.appendChild(vt)}return q.appendChild(G),{...ot,el:G,last:-1}}),st=ot=>H.map(G=>Gp(G.a,G.b,ot));function W(ot){for(let G of H){let lt=Gp(G.a,G.b,ot);Math.abs(lt-G.last)<.004||(G.last=lt,G.el.style.opacity=lt.toFixed(3),G.el.style.transform=`translateY(${((1-lt)*8).toFixed(1)}px)`)}}let Z=performance.now(),nt=0;function At(ot){if(requestAnimationFrame(At),Kw)return;R||(v=w??T());let G=Math.min(.1,Math.max(0,(ot-(At.last??ot))/1e3));At.last=ot,S=w!==null||S===null?v:Wx(S,v,G),f.p=S,f.target=v,f.t=c(f.p),W(f.p);let lt=w!==null?f.t:(ot-Z)/1e3;h.renderAt(f.t,nt++,lt),d?.tick(ot),d&&nt%6===0&&d.update(O())}requestAnimationFrame(At),mc("loading").classList.add("hide"),window.__scroll={state:()=>({...f}),tileStats:()=>u.tileStats??null,renderAtProgress(ot){w=ot,S=ot,f.p=ot,f.t=c(ot),W(ot),h.renderAt(f.t,0,f.t),d?.update(O())},unpin(){w=null},setTier:y,tier:()=>m.id,renderer:h,city:u,THREE:jt,cityModule:i,dispose(){Sx(u)},cameraAt(ot,G){let lt=kp(G);return u.rig.sample(a+c(ot),lt)},pStable:()=>v,captionOpacity:st,captionDom:()=>H.map(ot=>({id:ot.id,opacity:+getComputedStyle(ot.el).opacity,text:ot.el.textContent}))},window.__ready=!0}Qw().catch(s=>{console.error(s),window.__bootError=String(s.stack||s);let t=mc("loadMsg");t&&(t.textContent="\u30A8\u30E9\u30FC: "+(s.message||s))});
