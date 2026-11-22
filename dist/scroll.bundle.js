var Uv=Object.defineProperty;var ce=(s,t,e)=>()=>{if(e)throw e[0];try{return s&&(t=s(s=0)),t}catch(n){throw e=[n],n}};var kc=(s,t)=>{for(var e in t)Uv(s,e,{get:t[e],enumerable:!0})};function Fv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function no(s,t){return new Ov[s](t)}function Bg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function uo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bp(){let s=uo("canvas");return s.style.display="block",s}function zg(s){ps=s}function kg(){return ps}function fo(...s){let t="THREE."+s.shift();ps?ps("log",t,...s):console.log(t,...s)}function Gg(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Tt(...s){s=Gg(s);let t="THREE."+s.shift();if(ps)ps("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ht(...s){s=Gg(s);let t="THREE."+s.shift();if(ps)ps("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function xi(...s){let t=s.join(" ");t in Nm||(Nm[t]=!0,Tt(...s))}function Hg(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Kn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[s&255]+an[s>>8&255]+an[s>>16&255]+an[s>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function Kt(s,t,e){return Math.max(t,Math.min(e,s))}function wp(s,t){return(s%t+t)%t}function Bv(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function zv(s,t,e){return s!==t?(e-s)/(t-s):0}function Ta(s,t,e){return(1-e)*s+e*t}function kv(s,t,e,n){return Ta(s,t,1-Math.exp(-e*n))}function Gv(s,t=1){return t-Math.abs(wp(s,t*2)-t)}function Hv(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Vv(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Wv(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Xv(s,t){return s+Math.random()*(t-s)}function qv(s){return s*(.5-Math.random())}function Yv(s){s!==void 0&&(Um=s);let t=Um+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zv(s){return s*nr}function $v(s){return s*sr}function Jv(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Kv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Tp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Qv(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),f=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*f,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*f,a*c);break;case"ZYZ":s.set(l*f,l*p,a*h,a*c);break;default:Tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function id(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function er(s,t){if(t.constructor===Float32Array)return s;let e=id(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function hn(s,t){if(t.constructor===Float32Array)return s;let e=id(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}function jv(){let s={enabled:!0,workingColorSpace:co,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xe&&(i.r=Xi(i.r),i.g=Xi(i.g),i.b=Xi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(i.r=so(i.r),i.g=so(i.g),i.b=so(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ei?ho:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[co]:{primaries:t,whitePoint:n,transfer:ho,toXYZ:Om,fromXYZ:Bm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Om,fromXYZ:Bm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),s}function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function so(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function Wd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Tt("Texture: Unable to serialize Texture."),{})}function Yd(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function ef(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Xs.fromArray(s,r);let a=i.x*Math.abs(Xs.x)+i.y*Math.abs(Xs.y)+i.z*Math.abs(Xs.z),l=t.dot(Xs),c=e.dot(Xs),h=n.dot(Xs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function cy(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Pn(s){Math.abs(s)>65504&&Tt("DataUtils.toHalfFloat(): Value out of range."),s=Kt(s,-65504,65504),Wi.floatView[0]=s;let t=Wi.uint32View[0],e=t>>23&511;return Wi.baseTable[e]+((t&8388607)>>Wi.shiftTable[e])}function Ma(s){let t=s>>10;return Wi.uint32View[0]=Wi.mantissaTable[Wi.offsetTable[t]+(s&1023)]+Wi.exponentTable[t],Wi.floatView[0]}function Ym(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Kn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}function Jc(s,t,e,n,i,r){$r.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ma.x=r*$r.x-i*$r.y,ma.y=i*$r.x+r*$r.y):ma.copy($r),s.copy(t),s.x+=ma.x,s.y+=ma.y,s.applyMatrix4(Xg)}function gy(s,t,e,n,i,r,o,a){let l;if(t.side===fn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Ki,a),l===null)return null;rh.copy(a),rh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(rh);return c<e.near||c>e.far?null:{distance:c,point:rh.clone(),object:s}}function oh(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,eh),s.getVertexPosition(l,nh),s.getVertexPosition(c,ih);let h=gy(s,t,e,n,eh,nh,ih,jm);if(h){let u=new L;si.getBarycoord(jm,eh,nh,ih,u),i&&(h.uv=si.getInterpolatedAttribute(i,a,l,c,u,new nt)),r&&(h.uv1=si.getInterpolatedAttribute(r,a,l,c,u,new nt)),o&&(h.normal=si.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};si.getNormal(eh,nh,ih,d.normal),h.face=d,h.barycoord=u}return h}function uf(s,t){return s-t}function My(s,t){return s.z-t.z}function Sy(s,t){return t.z-s.z}function Ey(s,t,e=0){let n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function mi(s,t){if(s.constructor!==t.constructor){let e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{let e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}function fh(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(Hh.fromBufferAttribute(a,i),Vh.fromBufferAttribute(a,r),e.distanceSqToSegment(Hh,Vh,pf,u0)>n)return;pf.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(pf);if(!(c<t.near||c>t.far))return{distance:c,point:u0.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}function m0(s,t,e,n,i,r,o){let a=Ef.distanceSqToPoint(s);if(a<e){let l=new L;Ef.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function Ep(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}function _0(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Cy(s,t){let e=1-s;return e*e*t}function Ry(s,t){return 2*(1-s)*s*t}function Py(s,t){return s*s*t}function Aa(s,t,e,n){return Cy(s,t)+Ry(s,e)+Py(s,n)}function Iy(s,t){let e=1-s;return e*e*e*t}function Ly(s,t){let e=1-s;return 3*e*e*s*t}function Dy(s,t){return 3*(1-s)*s*s*t}function Ny(s,t){return s*s*s*t}function Ea(s,t,e,n,i){return Iy(s,t)+Ly(s,e)+Dy(s,n)+Ny(s,i)}function Uy(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=qg(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=ky(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,u=l;for(let d=e;d<i;d+=e){let p=s[d],f=s[d+1];p<a&&(a=p),f<l&&(l=f),p>h&&(h=p),f>u&&(u=f)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return tl(r,o,e,a,l,c,0),o}function qg(s,t,e,n,i){let r;if(i===Ky(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=v0(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=v0(o/n|0,s[o],s[o+1],r);return r&&Co(r,r.next)&&(nl(r),r=r.next),r}function dr(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Co(e,e.next)||Le(e.prev,e,e.next)===0)){if(nl(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function tl(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Xy(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Oy(s,n,i,r):Fy(s)){t.push(l.i,s.i,c.i),nl(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=By(dr(s),t),tl(s,t,e,n,i,r,2)):o===2&&zy(s,t,e,n,i,r):tl(dr(s),t,e,n,i,r,1);break}}}function Fy(s){let t=s.prev,e=s,n=s.next;if(Le(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),p=Math.max(a,l,c),f=n.next;for(;f!==t;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Sa(i,a,r,l,o,c,f.x,f.y)&&Le(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Oy(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Le(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,p=Math.min(a,l,c),f=Math.min(h,u,d),x=Math.max(a,l,c),m=Math.max(h,u,d),g=Cf(p,f,t,e,n),_=Cf(x,m,t,e,n),y=s.prevZ,M=s.nextZ;for(;y&&y.z>=g&&M&&M.z<=_;){if(y.x>=p&&y.x<=x&&y.y>=f&&y.y<=m&&y!==i&&y!==o&&Sa(a,h,l,u,c,d,y.x,y.y)&&Le(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=p&&M.x<=x&&M.y>=f&&M.y<=m&&M!==i&&M!==o&&Sa(a,h,l,u,c,d,M.x,M.y)&&Le(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=g;){if(y.x>=p&&y.x<=x&&y.y>=f&&y.y<=m&&y!==i&&y!==o&&Sa(a,h,l,u,c,d,y.x,y.y)&&Le(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=_;){if(M.x>=p&&M.x<=x&&M.y>=f&&M.y<=m&&M!==i&&M!==o&&Sa(a,h,l,u,c,d,M.x,M.y)&&Le(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function By(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Co(n,i)&&Zg(n,e,e.next,i)&&el(n,i)&&el(i,n)&&(t.push(n.i,e.i,i.i),nl(e),nl(e.next),e=s=i),e=e.next}while(e!==s);return dr(e)}function zy(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zy(o,a)){let l=$g(o,a);o=dr(o,o.next),l=dr(l,l.next),tl(o,t,e,n,i,r,0),tl(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function ky(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=qg(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Yy(c))}i.sort(Gy);for(let r=0;r<i.length;r++)e=Hy(i[r],e);return e}function Gy(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Hy(s,t){let e=Vy(s,t);if(!e)return t;let n=$g(e,s);return dr(n,n.next),dr(e,e.next)}function Vy(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(Co(s,e))return e;do{if(Co(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Yg(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);el(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Wy(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Wy(s,t){return Le(s.prev,s,t.prev)<0&&Le(t.next,s,s.next)<0}function Xy(s,t,e,n){let i=s;do i.z===0&&(i.z=Cf(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,qy(i)}function qy(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Cf(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Yy(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Yg(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Sa(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Yg(s,t,e,n,i,r,o,a)}function Zy(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!$y(s,t)&&(el(s,t)&&el(t,s)&&Jy(s,t)&&(Le(s.prev,s,t.prev)||Le(s,t.prev,t))||Co(s,t)&&Le(s.prev,s,s.next)>0&&Le(t.prev,t,t.next)>0)}function Le(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Co(s,t){return s.x===t.x&&s.y===t.y}function Zg(s,t,e,n){let i=yh(Le(s,t,e)),r=yh(Le(s,t,n)),o=yh(Le(e,n,s)),a=yh(Le(e,n,t));return!!(i!==r&&o!==a||i===0&&vh(s,e,t)||r===0&&vh(s,n,t)||o===0&&vh(e,s,n)||a===0&&vh(e,t,n))}function vh(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function yh(s){return s>0?1:s<0?-1:0}function $y(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Zg(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function el(s,t){return Le(s.prev,s,s.next)<0?Le(s,t,s.next)>=0&&Le(s,s.prev,t)>=0:Le(s,t,s.prev)<0||Le(s,s.next,t)<0}function Jy(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function $g(s,t){let e=Rf(s.i,s.x,s.y),n=Rf(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function v0(s,t,e,n){let i=Rf(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function nl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Rf(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ky(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}function y0(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function M0(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}function jy(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function t1(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}function S0(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}function wr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(w0(i))i.isRenderTargetTexture?(Tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(w0(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function pn(s){let t={};for(let e=0;e<s.length;e++){let n=wr(s[e]);for(let i in n)t[i]=n[i]}return t}function w0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function e1(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Cp(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}function ii(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function io(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Jg(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function If(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function Kg(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}function s1(s,t,e,n,i=30){let r=s.clone();r.name=t;let o=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let p=0;p<c.times.length;++p){let f=c.times[p]*i;if(!(f<e||f>=n)){u.push(c.times[p]);for(let x=0;x<h;++x)d.push(c.values[p*h+x])}}u.length!==0&&(c.times=ii(u,c.times.constructor),c.values=ii(d,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function r1(s,t=0,e=s,n=30){n<=0&&(n=30);let i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){let a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);let f=a.times.length-1,x;if(r<=a.times[0]){let g=h,_=u-h;x=a.values.slice(g,_)}else if(r>=a.times[f]){let g=f*u+h,_=g+u-h;x=a.values.slice(g,_)}else{let g=a.createInterpolant();g.evaluate(r),x=g.resultBuffer.slice()}l==="quaternion"&&new Se().fromArray(x).normalize().conjugate().toArray(x);let m=c.times.length;for(let g=0;g<m;++g){let _=g*p+d;if(l==="quaternion")Se.multiplyQuaternionsFlat(c.values,_,x,0,c.values,_);else{let y=p-d*2;for(let M=0;M<y;++M)c.values[_+M]-=x[M]}}}return s.blendMode=Qu,s}function Qg(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function o1(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function a1(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=Qg(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=o1(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function T0(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function A0(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}function l1(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return pr;case"vector":case"vector2":case"vector3":case"vector4":return Do;case"color":return Lo;case"quaternion":return mr;case"bool":case"boolean":return yi;case"string":return Mi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function c1(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=l1(s.type);if(s.times===void 0){let n=[],i=[];Kg(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),io(s.settings)&&(e.settings={inTangents:ii(s.settings.inTangents,Float32Array),outTangents:ii(s.settings.outTangents,Float32Array)}),e}function E0(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}function u1(){this._document.hidden===!1&&this.reset()}function z0(s,t){return s.distance-t.distance}function Of(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Of(r[o],t,e,!0)}}function jg(s){let t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...jg(s.children[e]));return t}function Be(s,t,e,n,i,r,o){Eh.set(i,r,o).unproject(n);let a=t[s];if(a!==void 0){let l=e.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],Eh.x,Eh.y,Eh.z)}}function E1(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function C1(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function R1(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function sd(s,t,e,n){let i=P1(n);switch(e){case Ju:return s*t;case kl:return s*t/i.components*i.byteLength;case Wo:return s*t/i.components*i.byteLength;case Qi:return s*t*2/i.components*i.byteLength;case Gl:return s*t*2/i.components*i.byteLength;case Ku:return s*t*3/i.components*i.byteLength;case Mn:return s*t*4/i.components*i.byteLength;case Hl:return s*t*4/i.components*i.byteLength;case Xo:case qo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Yo:case Zo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wl:case ql:return Math.max(s,16)*Math.max(t,8)/4;case Vl:case Xl:return Math.max(s,8)*Math.max(t,8)/2;case Yl:case Zl:case Jl:case Kl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $l:case $o:case Ql:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ec:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case nc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ic:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case sc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case rc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case oc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ac:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case lc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case cc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case hc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case uc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case dc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case fc:case pc:case mc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case gc:case xc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Jo:case _c:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function P1(s){switch(s){case Tn:case qu:return{byteLength:1,components:1};case br:case Yu:case qe:return{byteLength:2,components:1};case Bl:case zl:return{byteLength:2,components:4};case An:case Ol:case un:return{byteLength:4,components:1};case Zu:case $u:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}var Bf,Z0,$0,zf,ku,kf,J0,K0,Ts,Gf,yr,Ki,fn,zn,Si,Mr,Bo,Gu,Hu,Hf,Q0,As,Vf,Wf,Xf,qf,Yf,Zf,$f,Jf,Vu,Wu,Kf,Qf,jf,tp,ep,np,ip,sp,rp,Ca,Ra,Pa,ir,Ia,La,Da,Na,zo,op,ap,kn,Es,Cs,Rs,bi,ko,Ps,Is,Ph,lp,Fl,wi,Ls,Go,Ho,ro,vn,oo,Ue,Xu,j0,Sr,tg,Ce,Vo,eg,Jn,ng,Tn,qu,Yu,br,Ol,An,un,qe,Bl,zl,Ds,Zu,$u,Ju,Ku,Mn,_i,Ti,kl,Wo,Qi,Gl,ig,Hl,Xo,qo,Yo,Zo,Vl,Wl,Xl,ql,Yl,Zl,$l,Jl,Kl,$o,Ql,jl,tc,ec,nc,ic,sc,rc,oc,ac,lc,cc,hc,uc,dc,fc,pc,mc,gc,xc,Jo,_c,cp,hp,up,ao,Ua,ba,Ih,us,ds,lo,vc,Qu,dp,fp,pp,mp,sg,rg,og,Ai,gp,Ei,nn,co,ho,xe,ag,lg,cg,hg,wa,ug,dg,fg,pg,mg,gg,xg,_g,vg,yg,Mg,Sg,bg,xp,_p,vp,yp,ju,Mp,Sp,td,ed,yc,wg,Tg,Ag,Eg,Cg,Rg,Pg,Ig,Lg,nd,In,fs,Dg,Ng,Ug,Fg,Og,Ov,Nm,ps,Vg,Ln,an,Um,nr,sr,Ap,Lp,nt,Se,Dp,L,Hd,Fm,Np,jt,Vd,Om,Bm,he,Fr,Fa,ty,On,Lh,ey,Xd,Fe,Up,pe,po,Re,rr,Dh,or,Nh,zu,Gt,Or,ti,ny,iy,rs,Gc,Un,zm,km,qn,ar,sy,Gm,Br,Bi,Hc,ha,ry,oy,Hm,Vm,Wm,Xm,ay,zr,qd,_e,ri,ly,lr,Wg,os,Vc,lt,ln,ai,Oa,Sn,ei,zi,Zd,ki,kr,Gr,qm,$d,Jd,Kd,Qd,jd,tf,si,ze,Gi,ni,Wc,Hr,Vr,Wr,as,ls,Ws,ua,Xc,qc,Xs,Wi,Uh,He,Yc,hy,Jt,Fh,Oh,Bh,zh,mo,kh,go,Gh,yt,uy,da,nf,Ne,dy,Vn,sf,Xr,Fn,fa,Qe,$t,ms,_n,qi,rf,fy,py,Wn,my,Ve,xo,qr,pa,Yr,Zr,$r,ma,Xg,Zc,ga,$c,Zm,of,$m,Ba,Kc,Jm,za,Hi,af,Qc,jc,Yi,Yn,Km,qs,th,Qm,eh,nh,ih,lf,sh,jm,rh,ne,xa,t0,e0,xy,n0,ah,cf,i0,hf,ka,_o,yn,s0,_y,Ga,bn,Jr,r0,lh,o0,vy,_a,va,We,Ys,yy,ch,vi,a0,vo,Af,Rn,by,wy,Ty,hh,Zs,df,l0,c0,Ay,ff,cn,uh,Ha,je,Hh,Vh,h0,ya,dh,pf,u0,li,d0,f0,Bn,Va,yo,p0,Ef,ph,mh,Wa,Xa,Wh,Xh,cr,qh,Yh,gs,Zh,$h,Zn,Mo,So,Oe,qa,hr,tn,xs,Zi,Ya,gh,xh,mf,_h,Za,Dn,ur,$a,g0,x0,gf,xf,_f,Ja,bo,Ka,wo,Qa,To,Ao,Eo,Jh,ja,_s,vs,Pf,Xn,il,Qy,ci,sl,ys,dn,rl,ol,Ms,al,fr,ll,cl,hl,b0,ul,Ci,n1,i1,Xe,Ss,me,dl,fl,pl,ml,gl,Ro,Po,xl,_l,Kh,$i,vl,Io,yl,Ml,wn,yi,Lo,pr,Sl,mr,Mi,Do,bs,oi,No,Rp,sn,Vi,Lf,$n,Qh,jh,Kr,ws,tu,eu,nu,hi,ui,vf,C0,R0,gr,Mh,Sh,gi,xr,cs,P0,I0,Ie,Df,bl,Nf,wl,Ji,Uf,di,Tl,Al,Uo,El,L0,Cl,Fo,Rl,Pl,yf,iu,h1,D0,N0,Mf,su,bh,Oo,ru,U0,F0,$s,ou,Qr,jr,_r,Il,vr,Js,Sf,d1,Ks,Qs,au,Ll,js,O0,f1,tr,lu,cu,Dl,Pp,p1,Ip,m1,g1,x1,_1,v1,y1,M1,Ff,Me,hu,Nl,S1,uu,du,fu,b1,pu,mu,gu,B0,xu,_u,vu,yu,Fp,Mu,k0,Ul,G0,wh,to,eo,bf,w1,T1,Su,H0,bu,hs,Th,wf,wu,Tu,A1,V0,W0,Au,Eu,Cu,X0,Ah,q0,Ru,Eh,De,Pu,Ch,Iu,Lu,Du,Y0,Rh,Tf,Nu,Uu,Fu,Ou,Bu,Op=ce(()=>{Bf="187",Z0={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$0={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zf=0,ku=1,kf=2,J0=3,K0=0,Ts=1,Gf=2,yr=3,Ki=0,fn=1,zn=2,Si=0,Mr=1,Bo=2,Gu=3,Hu=4,Hf=5,Q0=6,As=100,Vf=101,Wf=102,Xf=103,qf=104,Yf=200,Zf=201,$f=202,Jf=203,Vu=204,Wu=205,Kf=206,Qf=207,jf=208,tp=209,ep=210,np=211,ip=212,sp=213,rp=214,Ca=0,Ra=1,Pa=2,ir=3,Ia=4,La=5,Da=6,Na=7,zo=0,op=1,ap=2,kn=0,Es=1,Cs=2,Rs=3,bi=4,ko=5,Ps=6,Is=7,Ph="attached",lp="detached",Fl=300,wi=301,Ls=302,Go=303,Ho=304,ro=1e3,vn=1001,oo=1002,Ue=1003,Xu=1004,j0=1004,Sr=1005,tg=1005,Ce=1006,Vo=1007,eg=1007,Jn=1008,ng=1008,Tn=1009,qu=1010,Yu=1011,br=1012,Ol=1013,An=1014,un=1015,qe=1016,Bl=1017,zl=1018,Ds=1020,Zu=35902,$u=35899,Ju=1021,Ku=1022,Mn=1023,_i=1026,Ti=1027,kl=1028,Wo=1029,Qi=1030,Gl=1031,ig=1032,Hl=1033,Xo=33776,qo=33777,Yo=33778,Zo=33779,Vl=35840,Wl=35841,Xl=35842,ql=35843,Yl=36196,Zl=37492,$l=37496,Jl=37488,Kl=37489,$o=37490,Ql=37491,jl=37808,tc=37809,ec=37810,nc=37811,ic=37812,sc=37813,rc=37814,oc=37815,ac=37816,lc=37817,cc=37818,hc=37819,uc=37820,dc=37821,fc=36492,pc=36494,mc=36495,gc=36283,xc=36284,Jo=36285,_c=36286,cp=2200,hp=2201,up=2202,ao=2300,Ua=2301,ba=2302,Ih=2303,us=2400,ds=2401,lo=2402,vc=2500,Qu=2501,dp=0,fp=1,pp=2,mp=3200,sg=3201,rg=3202,og=3203,Ai=0,gp=1,Ei="",nn="srgb",co="srgb-linear",ho="linear",xe="srgb",ag="",lg="rg",cg="ga",hg=0,wa=7680,ug=7681,dg=7682,fg=7683,pg=34055,mg=34056,gg=5386,xg=512,_g=513,vg=514,yg=515,Mg=516,Sg=517,bg=518,xp=519,_p=512,vp=513,yp=514,ju=515,Mp=516,Sp=517,td=518,ed=519,yc=35044,wg=35048,Tg=35040,Ag=35045,Eg=35049,Cg=35041,Rg=35046,Pg=35050,Ig=35042,Lg="100",nd="300 es",In=2e3,fs=2001,Dg={COMPUTE:"compute",RENDER:"render"},Ng={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Ug={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Fg={TEXTURE_COMPARE:"depthTextureCompare"},Og={NONE:0,SHARED:1,FULL:2};Ov={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};Nm={},ps=null;Vg={[Ca]:Ca,[Pa]:Da,[Ia]:Ia,[ir]:La,[Ra]:Ra,[Da]:Pa,[Na]:Na,[La]:ir},Ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Um=1234567,nr=Math.PI/180,sr=180/Math.PI;Ap={DEG2RAD:nr,RAD2DEG:sr,generateUUID:Kn,clamp:Kt,euclideanModulo:wp,mapLinear:Bv,inverseLerp:zv,lerp:Ta,damp:kv,pingpong:Gv,smoothstep:Hv,smootherstep:Vv,randInt:Wv,randFloat:Xv,randFloatSpread:qv,seededRandom:Yv,degToRad:Zv,radToDeg:$v,isPowerOfTwo:Jv,ceilPowerOfTwo:Kv,floorPowerOfTwo:Tp,setQuaternionFromProperEuler:Qv,normalize:hn,denormalize:er},Lp=class Lp{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lp.prototype.isVector2=!0;nt=Lp,Se=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],p=r[o+1],f=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==p||h!==f){let m=l*d+c*p+h*f+u*x;m<0&&(d=-d,p=-p,f=-f,x=-x,m=-m);let g=1-a;if(m<.9995){let _=Math.acos(m),y=Math.sin(_);g=Math.sin(g*_)/y,a=Math.sin(a*_)/y,l=l*g+d*a,c=c*g+p*a,h=h*g+f*a,u=u*g+x*a}else{l=l*g+d*a,c=c*g+p*a,h=h*g+f*a,u=u*g+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],f=r[o+3];return t[e]=a*f+h*u+l*p-c*d,t[e+1]=l*f+h*d+c*u-a*p,t[e+2]=c*f+h*p+a*d-l*u,t[e+3]=h*f-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),f=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:Tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Dp=class Dp{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hd.copy(this).projectOnVector(t),this.sub(Hd)}reflect(t){return this.sub(Hd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dp.prototype.isVector3=!0;L=Dp,Hd=new L,Fm=new Se,Np=class Np{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],x=i[0],m=i[3],g=i[6],_=i[1],y=i[4],M=i[7],b=i[2],w=i[5],v=i[8];return r[0]=o*x+a*_+l*b,r[3]=o*m+a*y+l*w,r[6]=o*g+a*M+l*v,r[1]=c*x+h*_+u*b,r[4]=c*m+h*y+u*w,r[7]=c*g+h*M+u*v,r[2]=d*x+p*_+f*b,r[5]=d*m+p*y+f*w,r[8]=d*g+p*M+f*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,f=e*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vd.makeScale(t,e)),this}rotate(t){return xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vd.makeRotation(-t)),this}translate(t,e){return xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Np.prototype.isMatrix3=!0;jt=Np,Vd=new jt,Om=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bm=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he=jv();Fa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fr===void 0&&(Fr=uo("canvas")),Fr.width=t.width,Fr.height=t.height;let i=Fr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Fr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=uo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Xi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xi(e[n]/255)*255):e[n]=Xi(e[n]);return{data:e,width:t.width,height:t.height}}else return Tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ty=0,On=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Wd(i[o].image)):r.push(Wd(i[o]))}else r=Wd(i);n.url=r}return e||(t.images[this.uuid]=n),n}};Lh=class extends On{constructor(t=null){xi('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}},ey=0,Xd=new L,Fe=class s extends Ln{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=vn,i=vn,r=Ce,o=Jn,a=Mn,l=Tn,c=s.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Kn(),this.name="",this.source=new On(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Xd).x}get height(){return this.source.getSize(Xd).y}get depth(){return this.source.getSize(Xd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Tt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Tt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ro:t.x=t.x-Math.floor(t.x);break;case vn:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ro:t.y=t.y-Math.floor(t.y);break;case vn:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Fl;Fe.DEFAULT_ANISOTROPY=1;Up=class Up{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,M=(p+1)/2,b=(g+1)/2,w=(h+d)/4,v=(u+x)/4,S=(f+m)/4;return y>M&&y>b?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=v/n):M>b?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=w/i,r=S/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=v/r,i=S/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-f)*(m-f)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-f)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Up.prototype.isVector4=!0;pe=Up,po=class extends Ln{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ce,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Fe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ce,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new On(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Re=class extends po{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},rr=class extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Dh=class extends Re{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new rr(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},or=class extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Nh=class extends Re{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new or(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},zu=class zu{constructor(t,e,n,i,r,o,a,l,c,h,u,d,p,f,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,p,f,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,p,f,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zu().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Or.setFromMatrixColumn(t,0).length(),r=1/Or.setFromMatrixColumn(t,1).length(),o=1/Or.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,f=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+f*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=f+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,f=c*h,x=c*u;e[0]=d+x*a,e[4]=f*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-f,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,f=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=f+p*a,e[1]=p+f*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,f=a*h,x=a*u;e[0]=l*h,e[4]=f*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-f,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,f=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=f*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+f,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,p=o*c,f=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=p*u-f,e[2]=f*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ny,t,iy)}lookAt(t,e,n){let i=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),rs.crossVectors(n,Un),rs.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),rs.crossVectors(n,Un)),rs.normalize(),Gc.crossVectors(Un,rs),i[0]=rs.x,i[4]=Gc.x,i[8]=Un.x,i[1]=rs.y,i[5]=Gc.y,i[9]=Un.y,i[2]=rs.z,i[6]=Gc.z,i[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],x=n[6],m=n[10],g=n[14],_=n[3],y=n[7],M=n[11],b=n[15],w=i[0],v=i[4],S=i[8],C=i[12],A=i[1],R=i[5],D=i[9],z=i[13],N=i[2],O=i[6],V=i[10],G=i[14],rt=i[3],W=i[7],Z=i[11],it=i[15];return r[0]=o*w+a*A+l*N+c*rt,r[4]=o*v+a*R+l*O+c*W,r[8]=o*S+a*D+l*V+c*Z,r[12]=o*C+a*z+l*G+c*it,r[1]=h*w+u*A+d*N+p*rt,r[5]=h*v+u*R+d*O+p*W,r[9]=h*S+u*D+d*V+p*Z,r[13]=h*C+u*z+d*G+p*it,r[2]=f*w+x*A+m*N+g*rt,r[6]=f*v+x*R+m*O+g*W,r[10]=f*S+x*D+m*V+g*Z,r[14]=f*C+x*z+m*G+g*it,r[3]=_*w+y*A+M*N+b*rt,r[7]=_*v+y*R+M*O+b*W,r[11]=_*S+y*D+M*V+b*Z,r[15]=_*C+y*z+M*G+b*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],f=t[3],x=t[7],m=t[11],g=t[15],_=l*p-c*d,y=a*p-c*u,M=a*d-l*u,b=o*p-c*h,w=o*d-l*h,v=o*u-a*h;return e*(x*_-m*y+g*M)-n*(f*_-m*b+g*w)+i*(f*y-x*b+g*v)-r*(f*M-x*w+m*v)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],f=t[12],x=t[13],m=t[14],g=t[15],_=e*a-n*o,y=e*l-i*o,M=e*c-r*o,b=n*l-i*a,w=n*c-r*a,v=i*c-r*l,S=h*x-u*f,C=h*m-d*f,A=h*g-p*f,R=u*m-d*x,D=u*g-p*x,z=d*g-p*m,N=_*z-y*D+M*R+b*A-w*C+v*S;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/N;return t[0]=(a*z-l*D+c*R)*O,t[1]=(i*D-n*z-r*R)*O,t[2]=(x*v-m*w+g*b)*O,t[3]=(d*w-u*v-p*b)*O,t[4]=(l*A-o*z-c*C)*O,t[5]=(e*z-i*A+r*C)*O,t[6]=(m*M-f*v-g*y)*O,t[7]=(h*v-d*M+p*y)*O,t[8]=(o*D-a*A+c*S)*O,t[9]=(n*A-e*D-r*S)*O,t[10]=(f*w-x*M+g*_)*O,t[11]=(u*M-h*w-p*_)*O,t[12]=(a*C-o*R-l*S)*O,t[13]=(e*R-n*C+i*S)*O,t[14]=(x*y-f*b-m*_)*O,t[15]=(h*b-u*y+d*_)*O,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,f=r*u,x=o*h,m=o*u,g=a*u,_=l*c,y=l*h,M=l*u,b=n.x,w=n.y,v=n.z;return i[0]=(1-(x+g))*b,i[1]=(p+M)*b,i[2]=(f-y)*b,i[3]=0,i[4]=(p-M)*w,i[5]=(1-(d+g))*w,i[6]=(m+_)*w,i[7]=0,i[8]=(f+y)*v,i[9]=(m-_)*v,i[10]=(1-(d+x))*v,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Or.set(i[0],i[1],i[2]).length(),a=Or.set(i[4],i[5],i[6]).length(),l=Or.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ti.copy(this);let c=1/o,h=1/a,u=1/l;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=u,ti.elements[9]*=u,ti.elements[10]*=u,e.setFromRotationMatrix(ti),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=In,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),p=(n+i)/(n-i),f,x;if(l)f=r/(o-r),x=o*r/(o-r);else if(a===In)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fs)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=In,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),p=-(n+i)/(n-i),f,x;if(l)f=1/(o-r),x=o/(o-r);else if(a===In)f=-2/(o-r),x=-(o+r)/(o-r);else if(a===fs)f=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};zu.prototype.isMatrix4=!0;Gt=zu,Or=new L,ti=new Gt,ny=new L(0,0,0),iy=new L(1,1,1),rs=new L,Gc=new L,Un=new L,zm=new Gt,km=new Se,qn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return km.setFromEuler(this),this.setFromQuaternion(km,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";ar=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sy=0,Gm=new L,Br=new Se,Bi=new Gt,Hc=new L,ha=new L,ry=new L,oy=new Se,Hm=new L(1,0,0),Vm=new L(0,1,0),Wm=new L(0,0,1),Xm={type:"added"},ay={type:"removed"},zr={type:"childadded",child:null},qd={type:"childremoved",child:null},_e=class s extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new qn,n=new Se,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Gt},normalMatrix:{value:new jt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.multiply(Br),this}rotateOnWorldAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.premultiply(Br),this}rotateX(t){return this.rotateOnAxis(Hm,t)}rotateY(t){return this.rotateOnAxis(Vm,t)}rotateZ(t){return this.rotateOnAxis(Wm,t)}translateOnAxis(t,e){return Gm.copy(t).applyQuaternion(this.quaternion),this.position.add(Gm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hm,t)}translateY(t){return this.translateOnAxis(Vm,t)}translateZ(t){return this.translateOnAxis(Wm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hc.copy(t):Hc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(ha,Hc,this.up):Bi.lookAt(Hc,ha,this.up),this.quaternion.setFromRotationMatrix(Bi),i&&(Bi.extractRotation(i.matrixWorld),Br.setFromRotationMatrix(Bi),this.quaternion.premultiply(Br.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xm),zr.child=t,this.dispatchEvent(zr),zr.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ay),qd.child=t,this.dispatchEvent(qd),qd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xm),zr.child=t,this.dispatchEvent(zr),zr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,t,ry),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,oy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),f=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_e.DEFAULT_UP=new L(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ri=class extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}},ly={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ly)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Vc={h:0,s:0,l:0};lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=wp(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Yd(o,r,t+1/3),this.g=Yd(o,r,t),this.b=Yd(o,r,t-1/3)}return he.colorSpaceToWorking(this,i),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&Tt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Tt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Tt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){let n=Wg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Tt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=so(t.r),this.g=so(t.g),this.b=so(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return he.workingToColorSpace(ln.copy(this),t),Math.round(Kt(ln.r*255,0,255))*65536+Math.round(Kt(ln.g*255,0,255))*256+Math.round(Kt(ln.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(ln.copy(this),e);let n=ln.r,i=ln.g,r=ln.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=nn){he.workingToColorSpace(ln.copy(this),t);let e=ln.r,n=ln.g,i=ln.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(os),this.setHSL(os.h+t,os.s+e,os.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(os),t.getHSL(Vc);let n=Ta(os.h,Vc.h,e),i=Ta(os.s,Vc.s,e),r=Ta(os.l,Vc.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new lt;lt.NAMES=Wg;ai=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new lt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Oa=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new lt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sn=class extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ei=new L,zi=new L,Zd=new L,ki=new L,kr=new L,Gr=new L,qm=new L,$d=new L,Jd=new L,Kd=new L,Qd=new pe,jd=new pe,tf=new pe,si=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ei.subVectors(t,e),i.cross(ei);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ei.subVectors(i,e),zi.subVectors(n,e),Zd.subVectors(t,e);let o=ei.dot(ei),a=ei.dot(zi),l=ei.dot(Zd),c=zi.dot(zi),h=zi.dot(Zd),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,f=(o*h-a*l)*d;return r.set(1-p-f,f,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(o,ki.y),l.addScaledVector(a,ki.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Qd.setScalar(0),jd.setScalar(0),tf.setScalar(0),Qd.fromBufferAttribute(t,e),jd.fromBufferAttribute(t,n),tf.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Qd,r.x),o.addScaledVector(jd,r.y),o.addScaledVector(tf,r.z),o}static isFrontFacing(t,e,n,i){return ei.subVectors(n,e),zi.subVectors(t,e),ei.cross(zi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ei.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;kr.subVectors(i,n),Gr.subVectors(r,n),$d.subVectors(t,n);let l=kr.dot($d),c=Gr.dot($d);if(l<=0&&c<=0)return e.copy(n);Jd.subVectors(t,i);let h=kr.dot(Jd),u=Gr.dot(Jd);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(kr,o);Kd.subVectors(t,r);let p=kr.dot(Kd),f=Gr.dot(Kd);if(f>=0&&p<=f)return e.copy(r);let x=p*c-l*f;if(x<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(Gr,a);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return qm.subVectors(r,i),a=(u-h)/(u-h+(p-f)),e.copy(i).addScaledVector(qm,a);let g=1/(m+x+d);return o=x*g,a=d*g,e.copy(n).addScaledVector(kr,o).addScaledVector(Gr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ze=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wc.copy(n.boundingBox)),Wc.applyMatrix4(t.matrixWorld),this.union(Wc)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ua),Xc.subVectors(this.max,ua),Hr.subVectors(t.a,ua),Vr.subVectors(t.b,ua),Wr.subVectors(t.c,ua),as.subVectors(Vr,Hr),ls.subVectors(Wr,Vr),Ws.subVectors(Hr,Wr);let e=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Ws.z,Ws.y,as.z,0,-as.x,ls.z,0,-ls.x,Ws.z,0,-Ws.x,-as.y,as.x,0,-ls.y,ls.x,0,-Ws.y,Ws.x,0];return!ef(e,Hr,Vr,Wr,Xc)||(e=[1,0,0,0,1,0,0,0,1],!ef(e,Hr,Vr,Wr,Xc))?!1:(qc.crossVectors(as,ls),e=[qc.x,qc.y,qc.z],ef(e,Hr,Vr,Wr,Xc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Gi=[new L,new L,new L,new L,new L,new L,new L,new L],ni=new L,Wc=new ze,Hr=new L,Vr=new L,Wr=new L,as=new L,ls=new L,Ws=new L,ua=new L,Xc=new L,qc=new L,Xs=new L;Wi=cy();Uh=class{static toHalfFloat(t){return Pn(t)}static fromHalfFloat(t){return Ma(t)}},He=new L,Yc=new nt,hy=0,Jt=class extends Ln{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yc,this.updateRanges=[],this.gpuType=un,this.version=0,this._normalizationScale=t!==void 0?id(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yc.fromBufferAttribute(this,e),Yc.applyMatrix3(t),this.setXY(e,Yc.x,Yc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):er(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):hn(t,this.array)}},Fh=class extends Jt{constructor(t,e,n){super(new Int8Array(t),e,n)}},Oh=class extends Jt{constructor(t,e,n){super(new Uint8Array(t),e,n)}},Bh=class extends Jt{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}},zh=class extends Jt{constructor(t,e,n){super(new Int16Array(t),e,n)}},mo=class extends Jt{constructor(t,e,n){super(new Uint16Array(t),e,n)}},kh=class extends Jt{constructor(t,e,n){super(new Int32Array(t),e,n)}},go=class extends Jt{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Gh=class extends Jt{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Ma(this.array[t*this.itemSize]);return this.normalized&&(e=er(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=Pn(e),this}getY(t){let e=Ma(this.array[t*this.itemSize+1]);return this.normalized&&(e=er(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=Pn(e),this}getZ(t){let e=Ma(this.array[t*this.itemSize+2]);return this.normalized&&(e=er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=Pn(e),this}getW(t){let e=Ma(this.array[t*this.itemSize+3]);return this.normalized&&(e=er(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=Pn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=Pn(e),this.array[t+1]=Pn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),i=hn(i,this.array)),this.array[t+0]=Pn(e),this.array[t+1]=Pn(n),this.array[t+2]=Pn(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[t+0]=Pn(e),this.array[t+1]=Pn(n),this.array[t+2]=Pn(i),this.array[t+3]=Pn(r),this}},yt=class extends Jt{constructor(t,e,n){super(new Float32Array(t),e,n)}},uy=new ze,da=new L,nf=new L,Ne=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):uy.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;da.subVectors(t,this.center);let e=da.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(da,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(da.copy(t.center).add(nf)),this.expandByPoint(da.copy(t.center).sub(nf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},dy=0,Vn=new Gt,sf=new _e,Xr=new L,Fn=new ze,fa=new ze,Qe=new L,$t=class s extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fv(t)?go:mo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,n){return Vn.makeTranslation(t,e,n),this.applyMatrix4(Vn),this}scale(t,e,n){return Vn.makeScale(t,e,n),this.applyMatrix4(Vn),this}lookAt(t){return sf.lookAt(t),sf.updateMatrix(),this.applyMatrix4(sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ze);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ne);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];fa.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(Fn.min,fa.min),Fn.expandByPoint(Qe),Qe.addVectors(Fn.max,fa.max),Fn.expandByPoint(Qe)):(Fn.expandByPoint(fa.min),Fn.expandByPoint(fa.max))}Fn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Qe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(Xr.fromBufferAttribute(t,c),Qe.add(Xr)),i=Math.max(i,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)a[C]=new L,l[C]=new L;let h=new L,u=new L,d=new L,p=new nt,f=new nt,x=new nt,m=new L,g=new L;function _(C,A,R){c[C]=c[A]=c[R]=1,h.fromBufferAttribute(n,C),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,R),p.fromBufferAttribute(r,C),f.fromBufferAttribute(r,A),x.fromBufferAttribute(r,R),u.sub(h),d.sub(h),f.sub(p),x.sub(p);let D=1/(f.x*x.y-x.x*f.y);isFinite(D)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(D),a[C].add(m),a[A].add(m),a[R].add(m),l[C].add(g),l[A].add(g),l[R].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,A=y.length;C<A;++C){let R=y[C],D=R.start,z=R.count;for(let N=D,O=D+z;N<O;N+=3)_(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let M=new L,b=new L,w=new L,v=new L;function S(C){w.fromBufferAttribute(i,C),v.copy(w);let A=a[C];M.copy(A),M.sub(w.multiplyScalar(w.dot(A))).normalize(),b.crossVectors(v,A);let D=b.dot(l[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,D)}for(let C=0,A=n.count;C<A;++C)c[C]&&S(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Jt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){let f=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,f),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,f),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new Jt(d,h,u)}if(this.index===null)return Tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ms=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yc,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Ym(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Ym(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};_n=new L,qi=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?id(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyMatrix4(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyNormalMatrix(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.transformDirection(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){fo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Jt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){fo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):er(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):hn(t,this.data.array)}},rf=new L,fy=new L,py=new jt,Wn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=rf.subVectors(n,e).cross(fy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(rf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||py.getNormalMatrix(t),i=this.coplanarPoint(rf).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},my=0,Ve=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Mr,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vu,this.blendDst=Wu,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Tt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Tt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xo=class extends Ve{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pa=new L,Yr=new L,Zr=new L,$r=new nt,ma=new nt,Xg=new Gt,Zc=new L,ga=new L,$c=new L,Zm=new nt,of=new nt,$m=new nt,Ba=class extends _e{constructor(t=new xo){if(super(),this.isSprite=!0,this.type="Sprite",qr===void 0){qr=new $t;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ms(e,5);qr.setIndex([0,1,2,0,2,3]),qr.setAttribute("position",new qi(n,3,0,!1)),qr.setAttribute("uv",new qi(n,2,3,!1))}this.geometry=qr,this.material=t,this.center=new nt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yr.setFromMatrixScale(this.matrixWorld),Xg.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yr.multiplyScalar(-Zr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Jc(Zc.set(-.5,-.5,0),Zr,o,Yr,i,r),Jc(ga.set(.5,-.5,0),Zr,o,Yr,i,r),Jc($c.set(.5,.5,0),Zr,o,Yr,i,r),Zm.set(0,0),of.set(1,0),$m.set(1,1);let a=t.ray.intersectTriangle(Zc,ga,$c,!1,pa);if(a===null&&(Jc(ga.set(-.5,.5,0),Zr,o,Yr,i,r),of.set(0,1),a=t.ray.intersectTriangle(Zc,$c,ga,!1,pa),a===null))return;let l=t.ray.origin.distanceTo(pa);l<t.near||l>t.far||e.push({distance:l,point:pa.clone(),uv:si.getInterpolation(pa,Zc,ga,$c,Zm,of,$m,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};Kc=new L,Jm=new L,za=class extends _e{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let i=this.levels,r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){let i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Kc.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(Kc);this.getObjectForDistance(i).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){Kc.setFromMatrixPosition(t.matrixWorld),Jm.setFromMatrixPosition(this.matrixWorld);let n=Kc.distanceTo(Jm)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){let e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}},Hi=new L,af=new L,Qc=new L,jc=new L,Yi=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){af.copy(t).add(e).multiplyScalar(.5),Qc.copy(e).sub(t).normalize(),jc.copy(this.origin).sub(af);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Qc),a=jc.dot(this.direction),l=-jc.dot(Qc),c=jc.lengthSq(),h=Math.abs(1-o*o),u,d,p,f;if(h>0)if(u=o*l-a,d=o*a-l,f=r*h,u>=0)if(d>=-f)if(d<=f){let x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(af).addScaledVector(Qc,d),p}intersectSphere(t,e){if(t.radius<0)return null;Hi.subVectors(t.center,this.origin);let n=Hi.dot(this.direction),i=Hi.dot(Hi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,p=t.z-o.z,f=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,_=n.y-o.y,y=n.z-o.z,M=Math.abs(l),b=Math.abs(c),w=Math.abs(h),v,S,C,A,R,D,z,N,O,V,G,rt;if(M>=b&&M>=w?(C=l,D=u,O=f,rt=g,l>=0?(v=c,S=h,A=d,R=p,z=x,N=m,V=_,G=y):(v=h,S=c,A=p,R=d,z=m,N=x,V=y,G=_)):b>=w?(C=c,D=d,O=x,rt=_,c>=0?(v=h,S=l,A=p,R=u,z=m,N=f,V=y,G=g):(v=l,S=h,A=u,R=p,z=f,N=m,V=g,G=y)):(C=h,D=p,O=m,rt=y,h>=0?(v=l,S=c,A=u,R=d,z=f,N=x,V=g,G=_):(v=c,S=l,A=d,R=u,z=x,N=f,V=_,G=g)),C===0)return null;let W=v/C,Z=S/C,it=1/C,At=A-W*D,Ut=R-Z*D,q=z-W*O,Q=N-Z*O,at=V-W*rt,Et=G-Z*rt,xt=at*Q-Et*q,Vt=At*Et-Ut*at,ve=q*Ut-Q*At;if(i){if(xt<0||Vt<0||ve<0)return null}else if((xt<0||Vt<0||ve<0)&&(xt>0||Vt>0||ve>0))return null;let Ct=xt+Vt+ve;if(Ct===0)return null;let se=it*(xt*D+Vt*O+ve*rt);return(Ct>0?se<0:se>0)?null:this.at(se/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yn=class extends Ve{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Km=new Gt,qs=new Yi,th=new Ne,Qm=new L,eh=new L,nh=new L,ih=new L,lf=new L,sh=new L,jm=new L,rh=new L,ne=class extends _e{constructor(t=new $t,e=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){sh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(lf.fromBufferAttribute(u,t),o?sh.addScaledVector(lf,h):sh.addScaledVector(lf.sub(e),h))}e.add(sh)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),th.copy(n.boundingSphere),th.applyMatrix4(r),qs.copy(t.ray).recast(t.near),!(th.containsPoint(qs.origin)===!1&&(qs.intersectSphere(th,Qm)===null||qs.origin.distanceToSquared(Qm)>(t.far-t.near)**2))&&(Km.copy(r).invert(),qs.copy(t.ray).applyMatrix4(Km),!(n.boundingBox!==null&&qs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qs)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,x=d.length;f<x;f++){let m=d[f],g=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,b=y;M<b;M+=3){let w=a.getX(M),v=a.getX(M+1),S=a.getX(M+2);i=oh(this,g,t,n,c,h,u,w,v,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let f=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let _=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);i=oh(this,o,t,n,c,h,u,_,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,x=d.length;f<x;f++){let m=d[f],g=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,b=y;M<b;M+=3){let w=M,v=M+1,S=M+2;i=oh(this,g,t,n,c,h,u,w,v,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let f=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let _=m,y=m+1,M=m+2;i=oh(this,o,t,n,c,h,u,_,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};xa=new pe,t0=new pe,e0=new pe,xy=new pe,n0=new Gt,ah=new L,cf=new Ne,i0=new Gt,hf=new Yi,ka=class extends ne{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ph,this.bindMatrix=new Gt,this.bindMatrixInverse=new Gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ze),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ah),this.boundingBox.expandByPoint(ah)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ne),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ah),this.boundingSphere.expandByPoint(ah)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cf.copy(this.boundingSphere),cf.applyMatrix4(i),t.ray.intersectsSphere(cf)!==!1&&(i0.copy(i).invert(),hf.copy(t.ray).applyMatrix4(i0),!(this.boundingBox!==null&&hf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,hf)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new pe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Ph?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Tt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;t0.fromBufferAttribute(i.attributes.skinIndex,t),e0.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(xa.copy(e),e.set(0,0,0,0)):(xa.set(e.x,e.y,e.z,1),e.set(0,0,0)),xa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=e0.getComponent(r);if(o!==0){let a=t0.getComponent(r);n0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(xy.copy(xa).applyMatrix4(n0),o)}}return e.isVector4&&(e.w=xa.w),e.applyMatrix4(this.bindMatrixInverse)}},_o=class extends _e{constructor(){super(),this.isBone=!0,this.type="Bone"}},yn=class extends Fe{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Ue,h=Ue,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},s0=new Gt,_y=new Gt,Ga=class s{constructor(t=[],e=[]){this.uuid=Kn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Tt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Gt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Gt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:_y;s0.multiplyMatrices(a,e[r]),s0.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new yn(e,t,t,Mn,un);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(Tt("Skeleton: No bone found with UUID:",r),o=new _o),this.bones.push(o),this.boneInverses.push(new Gt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},bn=class extends Jt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Jr=new Gt,r0=new Gt,lh=[],o0=new ze,vy=new Gt,_a=new ne,va=new Ne,We=class extends ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new bn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,vy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ze),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Jr),o0.copy(t.boundingBox).applyMatrix4(Jr),this.boundingBox.union(o0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ne),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Jr),va.copy(t.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(va)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(_a.geometry=this.geometry,_a.material=this.material,_a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),va.copy(this.boundingSphere),va.applyMatrix4(n),t.ray.intersectsSphere(va)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Jr),r0.multiplyMatrices(n,Jr),_a.matrixWorld=r0,_a.raycast(t,lh);for(let o=0,a=lh.length;o<a;o++){let l=lh[o];l.instanceId=r,l.object=this,e.push(l)}lh.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new bn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new yn(new Float32Array(i*this.count),i,this.count,kl,un));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ys=new Ne,yy=new nt(.5,.5),ch=new L,vi=class{constructor(t=new Wn,e=new Wn,n=new Wn,i=new Wn,r=new Wn,o=new Wn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],f=r[8],x=r[9],m=r[10],g=r[11],_=r[12],y=r[13],M=r[14],b=r[15];if(i[0].setComponents(c-o,p-h,g-f,b-_).normalize(),i[1].setComponents(c+o,p+h,g+f,b+_).normalize(),i[2].setComponents(c+a,p+u,g+x,b+y).normalize(),i[3].setComponents(c-a,p-u,g-x,b-y).normalize(),n)i[4].setComponents(l,d,m,M).normalize(),i[5].setComponents(c-l,p-d,g-m,b-M).normalize();else if(i[4].setComponents(c-l,p-d,g-m,b-M).normalize(),e===In)i[5].setComponents(c+l,p+d,g+m,b+M).normalize();else if(e===fs)i[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(t){Ys.center.set(0,0,0);let e=yy.distanceTo(t.center);return Ys.radius=.7071067811865476+e,Ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ch.x=i.normal.x>0?t.max.x:t.min.x,ch.y=i.normal.y>0?t.max.y:t.min.y,ch.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ch)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},a0=new Gt,vo=class s{constructor(){this.coordinateSystem=In,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];a0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new vi),n[i].setFromProjectionMatrix(a0,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new vi),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};Af=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}},Rn=new Gt,by=new lt(1,1,1),wy=new vi,Ty=new vo,hh=new ze,Zs=new Ne,df=new L,l0=new L,c0=new L,Ay=new L,ff=new Af,cn=new ne,uh=[];Ha=class extends ne{constructor(t,e,n=e*2,i){super(new $t,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(t),this._mergedDrawStarts=new Int32Array(t),this._mergedDrawInstanceCounts=new Int32Array(t),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new yn(e,t,t,Mn,un);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new yn(e,t,t,Wo,An);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new yn(e,t,t,Mn,un);n.colorSpace=he.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in t.attributes){let o=t.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),u=new Jt(h,l,c);e.setAttribute(r,u)}if(t.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new Jt(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(t){let e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){let e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ze);let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,Rn),this.getBoundingBoxAt(r,hh).applyMatrix4(Rn),t.union(hh)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ne);let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,Rn),this.getBoundingSphereAt(r,Zs).applyMatrix4(Rn),t.union(Zs)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(uf),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;Rn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(by.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let o=t.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(uf),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(i&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(let h in n.attributes){let u=e.getAttribute(h),d=n.getAttribute(h);Ey(u,d,l);let p=u.itemSize;for(let f=u.count,x=c;f<x;f++){let m=l+f;for(let g=0;g<p;g++)d.setComponent(m,g,0)}d.needsUpdate=!0,d.addUpdateRange(l*p,c*p)}if(i){let h=a.indexStart,u=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let d=0;d<o.count;d++)r.setX(h+d,l+o.getX(d));for(let d=o.count,p=u;d<p;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0,n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let l=i[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,p=r.index,f=p.array,x=t-u;for(let m=h;m<h+d;m++)f[m]=f[m]+x;p.array.copyWithin(e,h,h+d),p.addUpdateRange(e,d),p.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){let{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(let p in d){let f=d[p],{array:x,itemSize:m}=f;x.copyWithin(t*m,h*m,(h+u)*m),f.addUpdateRange(t*m,u*m),f.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){let r=new ze,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint(df.fromBufferAttribute(a,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){let r=new Ne;this.getBoundingBoxAt(t,hh),hh.getCenter(r.center);let o=n.index,a=n.attributes.position,l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let u=c;o&&(u=o.getX(u)),df.fromBufferAttribute(a,u),l=Math.max(l,r.center.distanceToSquared(df))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);let n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);let n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){let e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(uf);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let i=new Int32Array(t),r=new Int32Array(t);mi(this._multiDrawCounts,i),mi(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r;let o=new Int32Array(t),a=new Int32Array(t),l=new Int32Array(t);mi(this._mergedDrawCounts,o),mi(this._mergedDrawStarts,a),mi(this._mergedDrawInstanceCounts,l),this._mergedDrawCounts=o,this._mergedDrawStarts=a,this._mergedDrawInstanceCounts=l,this._maxInstanceCount=t;let c=this._indirectTexture,h=this._matricesTexture,u=this._colorsTexture;c.dispose(),this._initIndirectTexture(),mi(c.image.data,this._indirectTexture.image.data),h.dispose(),this._initMatricesTexture(),mi(h.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),mi(u.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(t,e){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new $t,this._initializeGeometry(r));let o=this.geometry;r.index&&mi(r.index.array,o.index.array);for(let a in r.attributes)mi(r.attributes[a].array,o.attributes[a].array);this._visibilityChanged=!0}raycast(t,e){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;cn.material=this.material,cn.geometry.index=o.index,cn.geometry.attributes=o.attributes,cn.geometry.boundingBox===null&&(cn.geometry.boundingBox=new ze),cn.geometry.boundingSphere===null&&(cn.geometry.boundingSphere=new Ne);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;let c=n[a].geometryIndex,h=i[c];cn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,cn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,cn.geometry.boundingBox),this.getBoundingSphereAt(c,cn.geometry.boundingSphere),cn.raycast(t,uh);for(let u=0,d=uh.length;u<d;u++){let p=uh[u];p.object=this,p.batchId=a,e.push(p)}uh.length=0}cn.material=null,cn.geometry.index=null,cn.geometry.attributes={},cn.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._mergedDrawCounts=t._mergedDrawCounts.slice(),this._mergedDrawStarts=t._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=t._mergedDrawInstanceCounts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),t._colorsTexture!==null?(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(t,e,n,i="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let r=e.getIndex(),o=r===null?1:r.array.BYTES_PER_ELEMENT,a=1;n.wireframe&&(a=2,o=e.attributes.position.count>65535?4:2);let l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._mergedDrawStarts,d=this._mergedDrawCounts,p=this._mergedDrawInstanceCounts,f=this._geometryInfo,x=this.perObjectFrustumCulled,m=this._indirectTexture,g=m.image.data,_=t.isArrayCamera?Ty:wy;x&&(t.isArrayCamera?_.setFromArrayCamera(t):(Rn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).multiply(this.matrixWorld),_.setFromProjectionMatrix(Rn,t.coordinateSystem,t.reversedDepth)));let y=0,M=0;if(this.sortObjects){Rn.copy(this.matrixWorld).invert(),l0.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Rn),c0.set(0,0,-1).transformDirection(t.matrixWorld).transformDirection(Rn);for(let v=0,S=l.length;v<S;v++)if(l[v].visible&&l[v].active){let C=l[v].geometryIndex;this.getMatrixAt(v,Rn),this.getBoundingSphereAt(C,Zs).applyMatrix4(Rn);let A=!1;if(x&&(A=!_.intersectsSphere(Zs)),!A){let R=f[C],D=Ay.subVectors(Zs.center,l0).dot(c0);ff.push(R.start,R.count,D,v)}}let b=ff.list,w=this.customSort;w===null?b.sort(n.transparent?Sy:My):w.call(this,b,t);for(let v=0,S=b.length;v<S;v++){let C=b[v],A=C.start*o*a,R=C.count*a;i==="merged"?M>0&&u[M-1]===A&&d[M-1]===R?p[M-1]++:(u[M]=A,d[M]=R,p[M]=1,M++):(c[y]=A,h[y]=R),g[y]=C.index,y++}ff.reset()}else for(let b=0,w=l.length;b<w;b++)if(l[b].visible&&l[b].active){let v=l[b].geometryIndex,S=!1;if(x&&(this.getMatrixAt(b,Rn),this.getBoundingSphereAt(v,Zs).applyMatrix4(Rn),S=!_.intersectsSphere(Zs)),!S){let C=f[v],A=C.start*o*a,R=C.count*a;i==="merged"?M>0&&u[M-1]===A&&d[M-1]===R?p[M-1]++:(u[M]=A,d[M]=R,p[M]=1,M++):(c[y]=A,h[y]=R),g[y]=b,y++}}m.needsUpdate=!0,this._multiDrawCount=y,this._mergedDrawCount=M,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeRender(t,e,n,i,r){t.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(n,i,r)}onBeforeShadow(t,e,n,i,r,o){t.isWebGPURenderer!==!0&&this._updateDrawParameters(i,r,o)}},je=class extends Ve{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Hh=new L,Vh=new L,h0=new Gt,ya=new Yi,dh=new Ne,pf=new L,u0=new L,li=class extends _e{constructor(t=new $t,e=new je){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Hh.fromBufferAttribute(e,i-1),Vh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Hh.distanceTo(Vh);t.setAttribute("lineDistance",new yt(n,1))}else Tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dh.copy(n.boundingSphere),dh.applyMatrix4(i),dh.radius+=r,t.ray.intersectsSphere(dh)===!1)return;h0.copy(i).invert(),ya.copy(t.ray).applyMatrix4(h0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let x=p,m=f-1;x<m;x+=c){let g=h.getX(x),_=h.getX(x+1),y=fh(this,t,ya,l,g,_,x);y&&e.push(y)}if(this.isLineLoop){let x=h.getX(f-1),m=h.getX(p),g=fh(this,t,ya,l,x,m,f-1);g&&e.push(g)}}else{let p=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let x=p,m=f-1;x<m;x+=c){let g=fh(this,t,ya,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=fh(this,t,ya,l,f-1,p,f-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};d0=new L,f0=new L,Bn=class extends li{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)d0.fromBufferAttribute(e,i),f0.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+d0.distanceTo(f0);t.setAttribute("lineDistance",new yt(n,1))}else Tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Va=class extends li{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},yo=class extends Ve{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},p0=new Gt,Ef=new Yi,ph=new Ne,mh=new L,Wa=class extends _e{constructor(t=new $t,e=new yo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ph.copy(n.boundingSphere),ph.applyMatrix4(i),ph.radius+=r,t.ray.intersectsSphere(ph)===!1)return;p0.copy(i).invert(),Ef.copy(t.ray).applyMatrix4(p0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let f=d,x=p;f<x;f++){let m=c.getX(f);mh.fromBufferAttribute(u,m),m0(mh,m,l,i,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let f=d,x=p;f<x;f++)mh.fromBufferAttribute(u,f),m0(mh,f,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Xa=class extends Fe{constructor(t,e,n,i,r=Ce,o=Ce,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},Wh=class extends Xa{constructor(t,e,n,i,r,o,a,l){super({},t,e,n,i,r,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}},Xh=class extends Fe{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ue,this.minFilter=Ue,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new On(Object.assign({},t.image)),this}},cr=class extends Fe{constructor(t=[],e,n,i,r,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},qh=class extends cr{constructor(t,e,n,i,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=vn,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Yh=class extends cr{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,wi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},gs=class extends Fe{constructor(t=[],e=wi,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zh=class extends Fe{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},$h=class extends Fe{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){let t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}},Zn=class extends Fe{constructor(t,e,n=An,i,r,o,a=Ue,l=Ue,c,h=_i,u=1){if(h!==_i&&h!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new On(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Mo=class extends Zn{constructor(t,e=An,n=wi,i,r,o=Ue,a=Ue,l,c=_i){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},So=class extends Fe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Oe=class s extends $t{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;f("z","y","x",-1,-1,n,e,t,o,r,0),f("z","y","x",1,-1,n,e,-t,o,r,1),f("x","z","y",1,1,t,n,e,i,o,2),f("x","z","y",1,-1,t,n,-e,i,o,3),f("x","y","z",1,-1,t,e,n,i,r,4),f("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2));function f(x,m,g,_,y,M,b,w,v,S,C){let A=M/v,R=b/S,D=M/2,z=b/2,N=w/2,O=v+1,V=S+1,G=0,rt=0,W=new L;for(let Z=0;Z<V;Z++){let it=Z*R-z;for(let At=0;At<O;At++){let Ut=At*A-D;W[x]=Ut*_,W[m]=it*y,W[g]=N,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[g]=w>0?1:-1,h.push(W.x,W.y,W.z),u.push(At/v),u.push(1-Z/S),G+=1}}for(let Z=0;Z<S;Z++)for(let it=0;it<v;it++){let At=d+it+O*Z,Ut=d+it+O*(Z+1),q=d+(it+1)+O*(Z+1),Q=d+(it+1)+O*Z;l.push(At,Ut,Q),l.push(Ut,q,Q),rt+=6}a.addGroup(p,rt,C),p+=rt,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},qa=class s extends $t{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,p=2*u+d,f=n*2+r,x=i+1,m=new L,g=new L;for(let _=0;_<=f;_++){let y=0,M=0,b=0,w=0;if(_<=n){let C=_/n,A=C*Math.PI/2;M=-h-t*Math.cos(A),b=t*Math.sin(A),w=-t*Math.cos(A),y=C*u}else if(_<=n+r){let C=(_-n)/r;M=-h+C*e,b=t,w=0,y=u+C*d}else{let C=(_-n-r)/n,A=C*Math.PI/2;M=h+t*Math.sin(A),b=t*Math.cos(A),w=t*Math.sin(A),y=u+d+C*u}let v=Math.max(0,Math.min(1,y/p)),S=0;_===0?S=.5/i:_===f&&(S=-.5/i);for(let C=0;C<=i;C++){let A=C/i,R=A*Math.PI*2,D=Math.sin(R),z=Math.cos(R);g.x=-b*z,g.y=M,g.z=b*D,a.push(g.x,g.y,g.z),m.set(-b*z,w,b*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+S,v)}if(_>0){let C=(_-1)*x;for(let A=0;A<i;A++){let R=C+A,D=C+A+1,z=_*x+A,N=_*x+A+1;o.push(R,D,z),o.push(D,N,z)}}}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},hr=class s extends $t{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new L,h=new nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},tn=class s extends $t{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],f=0,x=[],m=n/2,g=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(p,2));function _(){let M=new L,b=new L,w=0,v=(e-t)/n;for(let S=0;S<=r;S++){let C=[],A=S/r,R=A*(e-t)+t;for(let D=0;D<=i;D++){let z=D/i,N=z*l+a,O=Math.sin(N),V=Math.cos(N);b.x=R*O,b.y=-A*n+m,b.z=R*V,u.push(b.x,b.y,b.z),M.set(O,v,V).normalize(),d.push(M.x,M.y,M.z),p.push(z,1-A),C.push(f++)}x.push(C)}for(let S=0;S<i;S++)for(let C=0;C<r;C++){let A=x[C][S],R=x[C+1][S],D=x[C+1][S+1],z=x[C][S+1];(t>0||C!==0)&&(h.push(A,R,z),w+=3),(e>0||C!==r-1)&&(h.push(R,D,z),w+=3)}c.addGroup(g,w,0),g+=w}function y(M){let b=f,w=new nt,v=new L,S=0,C=M===!0?t:e,A=M===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*A,0),d.push(0,A,0),p.push(.5,.5),f++;let R=f;for(let D=0;D<=i;D++){let N=D/i*l+a,O=Math.cos(N),V=Math.sin(N);v.x=C*V,v.y=m*A,v.z=C*O,u.push(v.x,v.y,v.z),d.push(0,A,0),w.x=O*.5+.5,w.y=V*.5*A+.5,p.push(w.x,w.y),f++}for(let D=0;D<i;D++){let z=b+D,N=R+D;M===!0?h.push(N,N+1,z):h.push(N+1,N,z),S+=3}c.addGroup(g,S,M===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xs=class s extends tn{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zi=class s extends $t{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new L,M=new L,b=new L;for(let w=0;w<e.length;w+=3)p(e[w+0],y),p(e[w+1],M),p(e[w+2],b),l(y,M,b,_)}function l(_,y,M,b){let w=b+1,v=[];for(let S=0;S<=w;S++){v[S]=[];let C=_.clone().lerp(M,S/w),A=y.clone().lerp(M,S/w),R=w-S;for(let D=0;D<=R;D++)D===0&&S===w?v[S][D]=C:v[S][D]=C.clone().lerp(A,D/R)}for(let S=0;S<w;S++)for(let C=0;C<2*(w-S)-1;C++){let A=Math.floor(C/2);C%2===0?(d(v[S][A+1]),d(v[S+1][A]),d(v[S][A])):(d(v[S][A+1]),d(v[S+1][A+1]),d(v[S+1][A]))}}function c(_){let y=new L;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(_),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let _=new L;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let M=m(_)/2/Math.PI+.5,b=g(_)/Math.PI+.5;o.push(M,1-b)}f(),u()}function u(){for(let _=0;_<o.length;_+=6){let y=o[_+0],M=o[_+2],b=o[_+4],w=Math.max(y,M,b),v=Math.min(y,M,b);w>.9&&v<.1&&(y<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function p(_,y){let M=_*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function f(){let _=new L,y=new L,M=new L,b=new L,w=new nt,v=new nt,S=new nt;for(let C=0,A=0;C<r.length;C+=9,A+=6){_.set(r[C+0],r[C+1],r[C+2]),y.set(r[C+3],r[C+4],r[C+5]),M.set(r[C+6],r[C+7],r[C+8]),w.set(o[A+0],o[A+1]),v.set(o[A+2],o[A+3]),S.set(o[A+4],o[A+5]),b.copy(_).add(y).add(M).divideScalar(3);let R=m(b);x(w,A+0,_,R),x(v,A+2,y,R),x(S,A+4,M,R)}}function x(_,y,M,b){b<0&&_.x===1&&(o[y]=_.x-1),M.x===0&&M.z===0&&(o[y]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}},Ya=class s extends Zi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},gh=new L,xh=new L,mf=new L,_h=new si,Za=class extends $t{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(nr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d=new Map,p=[];for(let f=0;f<l;f+=3){o?(c[0]=o.getX(f),c[1]=o.getX(f+1),c[2]=o.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:x,b:m,c:g}=_h;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),_h.getNormal(mf),u[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let _=0;_<3;_++){let y=(_+1)%3,M=u[_],b=u[y],w=_h[h[_]],v=_h[h[y]],S=`${M}_${b}`,C=`${b}_${M}`,A=d.get(C);A?(mf.dot(A.normal)<=r&&(p.push(w.x,w.y,w.z),p.push(v.x,v.y,v.z)),d.set(C,null)):d.has(S)||d.set(S,{index0:c[_],index1:c[y],normal:mf.clone()})}}for(let f of d.values())if(f){let{index0:x,index1:m}=f;gh.fromBufferAttribute(a,x),xh.fromBufferAttribute(a,m),p.push(gh.x,gh.y,gh.z),p.push(xh.x,xh.y,xh.z)}this.setAttribute("position",new yt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Tt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new nt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,i=[],r=[],o=[],a=new L,l=new Gt;for(let p=0;p<=t;p++){let f=p/t;i[p]=this.getTangentAt(f,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(Kt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Kt(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let f=1;f<=t;f++)r[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),o[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},ur=class extends Dn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$a=class extends ur{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};g0=new L,x0=new L,gf=new Ep,xf=new Ep,_f=new Ep,Ja=class extends Dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(x0.subVectors(i[0],i[1]).add(i[0]),c=x0);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(g0.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=g0),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),f<1e-4&&(f=x),m<1e-4&&(m=x),gf.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,f,x,m),xf.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,f,x,m),_f.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,f,x,m)}else this.curveType==="catmullrom"&&(gf.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),xf.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),_f.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(gf.calc(l),xf.calc(l),_f.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};bo=class extends Dn{constructor(t=new nt,e=new nt,n=new nt,i=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new nt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ea(t,i.x,r.x,o.x,a.x),Ea(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ka=class extends Dn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ea(t,i.x,r.x,o.x,a.x),Ea(t,i.y,r.y,o.y,a.y),Ea(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wo=class extends Dn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qa=class extends Dn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends Dn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Aa(t,i.x,r.x,o.x),Aa(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ao=class extends Dn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Aa(t,i.x,r.x,o.x),Aa(t,i.y,r.y,o.y),Aa(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(_0(a,l.x,c.x,h.x,u.x),_0(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new nt().fromArray(i))}return this}},Jh=Object.freeze({__proto__:null,ArcCurve:$a,CatmullRomCurve3:Ja,CubicBezierCurve:bo,CubicBezierCurve3:Ka,EllipseCurve:ur,LineCurve:wo,LineCurve3:Qa,QuadraticBezierCurve:To,QuadraticBezierCurve3:Ao,SplineCurve:Eo}),ja=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Jh[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},_s=class extends ja{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new wo(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new To(this.currentPoint.clone(),new nt(t,e),new nt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new bo(this.currentPoint.clone(),new nt(t,e),new nt(n,i),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Eo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new ur(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vs=class extends _s{constructor(t){super(t),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new _s().fromJSON(i))}return this}};Pf=class{static triangulate(t,e,n=2){return Uy(t,e,n)}},Xn=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];y0(t),M0(n,t);let o=t.length;e.forEach(y0);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,M0(n,e[l]);let a=Pf.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};il=class s extends $t{constructor(t=new vs([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new yt(i,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,f=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Qy,y,M=!1,b,w,v,S;if(g){y=g.getSpacedPoints(h),M=!0,d=!1;let st=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,st),w=new L,v=new L,S=new L}d||(m=0,p=0,f=0,x=0);let C=a.extractPoints(c),A=C.shape,R=C.holes;if(!Xn.isClockWise(A)){A=A.reverse();for(let st=0,gt=R.length;st<gt;st++){let ft=R[st];Xn.isClockWise(ft)&&(R[st]=ft.reverse())}}function z(st){let ft=10000000000000001e-36,Nt=st[0];for(let pt=1;pt<=st.length;pt++){let te=pt%st.length,zt=st[te],ae=zt.x-Nt.x,ie=zt.y-Nt.y,k=ae*ae+ie*ie,I=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(Nt.x),Math.abs(Nt.y)),$=ft*I*I;if(k<=$){st.splice(te,1),pt--;continue}Nt=zt}}z(A),R.forEach(z);let N=R.length,O=A;for(let st=0;st<N;st++){let gt=R[st];A=A.concat(gt)}function V(st,gt,ft){return gt||Ht("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(gt,ft)}let G=A.length;function rt(st,gt,ft){let Nt,pt,te,zt=st.x-gt.x,ae=st.y-gt.y,ie=ft.x-st.x,k=ft.y-st.y,I=zt*zt+ae*ae,$=zt*k-ae*ie;if(Math.abs($)>Number.EPSILON){let ht=Math.sqrt(I),Wt=Math.sqrt(ie*ie+k*k),ot=gt.x-ae/ht,Zt=gt.y+zt/ht,Pt=ft.x-k/Wt,Dt=ft.y+ie/Wt,P=((Pt-ot)*k-(Dt-Zt)*ie)/(zt*k-ae*ie);Nt=ot+zt*P-st.x,pt=Zt+ae*P-st.y;let T=Nt*Nt+pt*pt;if(T<=2)return new nt(Nt,pt);te=Math.sqrt(T/2)}else{let ht=!1;zt>Number.EPSILON?ie>Number.EPSILON&&(ht=!0):zt<-Number.EPSILON?ie<-Number.EPSILON&&(ht=!0):Math.sign(ae)===Math.sign(k)&&(ht=!0),ht?(Nt=-ae,pt=zt,te=Math.sqrt(I)):(Nt=zt,pt=ae,te=Math.sqrt(I/2))}return new nt(Nt/te,pt/te)}let W=[];for(let st=0,gt=O.length,ft=gt-1,Nt=st+1;st<gt;st++,ft++,Nt++)ft===gt&&(ft=0),Nt===gt&&(Nt=0),W[st]=rt(O[st],O[ft],O[Nt]);let Z=[],it,At=W.concat();for(let st=0,gt=N;st<gt;st++){let ft=R[st];it=[];for(let Nt=0,pt=ft.length,te=pt-1,zt=Nt+1;Nt<pt;Nt++,te++,zt++)te===pt&&(te=0),zt===pt&&(zt=0),it[Nt]=rt(ft[Nt],ft[te],ft[zt]);Z.push(it),At=At.concat(it)}let Ut;if(m===0)Ut=Xn.triangulateShape(O,R);else{let st=[],gt=[];for(let ft=0;ft<m;ft++){let Nt=ft/m,pt=p*Math.cos(Nt*Math.PI/2),te=f*Math.sin(Nt*Math.PI/2)+x;for(let zt=0,ae=O.length;zt<ae;zt++){let ie=V(O[zt],W[zt],te);Vt(ie.x,ie.y,-pt),Nt===0&&st.push(ie)}for(let zt=0,ae=N;zt<ae;zt++){let ie=R[zt];it=Z[zt];let k=[];for(let I=0,$=ie.length;I<$;I++){let ht=V(ie[I],it[I],te);Vt(ht.x,ht.y,-pt),Nt===0&&k.push(ht)}Nt===0&&gt.push(k)}}Ut=Xn.triangulateShape(st,gt)}let q=Ut.length,Q=f+x;for(let st=0;st<G;st++){let gt=d?V(A[st],At[st],Q):A[st];M?(v.copy(b.normals[0]).multiplyScalar(gt.x),w.copy(b.binormals[0]).multiplyScalar(gt.y),S.copy(y[0]).add(v).add(w),Vt(S.x,S.y,S.z)):Vt(gt.x,gt.y,0)}for(let st=1;st<=h;st++)for(let gt=0;gt<G;gt++){let ft=d?V(A[gt],At[gt],Q):A[gt];M?(v.copy(b.normals[st]).multiplyScalar(ft.x),w.copy(b.binormals[st]).multiplyScalar(ft.y),S.copy(y[st]).add(v).add(w),Vt(S.x,S.y,S.z)):Vt(ft.x,ft.y,u/h*st)}for(let st=m-1;st>=0;st--){let gt=st/m,ft=p*Math.cos(gt*Math.PI/2),Nt=f*Math.sin(gt*Math.PI/2)+x;for(let pt=0,te=O.length;pt<te;pt++){let zt=V(O[pt],W[pt],Nt);Vt(zt.x,zt.y,u+ft)}for(let pt=0,te=R.length;pt<te;pt++){let zt=R[pt];it=Z[pt];for(let ae=0,ie=zt.length;ae<ie;ae++){let k=V(zt[ae],it[ae],Nt);M?Vt(k.x,k.y+y[h-1].y,y[h-1].x+ft):Vt(k.x,k.y,u+ft)}}}at(),Et();function at(){let st=i.length/3;if(d){let gt=0,ft=G*gt;for(let Nt=0;Nt<q;Nt++){let pt=Ut[Nt];ve(pt[2]+ft,pt[1]+ft,pt[0]+ft)}gt=h+m*2,ft=G*gt;for(let Nt=0;Nt<q;Nt++){let pt=Ut[Nt];ve(pt[0]+ft,pt[1]+ft,pt[2]+ft)}}else{for(let gt=0;gt<q;gt++){let ft=Ut[gt];ve(ft[2],ft[1],ft[0])}for(let gt=0;gt<q;gt++){let ft=Ut[gt];ve(ft[0]+G*h,ft[1]+G*h,ft[2]+G*h)}}n.addGroup(st,i.length/3-st,0)}function Et(){let st=i.length/3,gt=0;xt(O,gt),gt+=O.length;for(let ft=0,Nt=R.length;ft<Nt;ft++){let pt=R[ft];xt(pt,gt),gt+=pt.length}n.addGroup(st,i.length/3-st,1)}function xt(st,gt){let ft=st.length;for(;--ft>=0;){let Nt=ft,pt=ft-1;pt<0&&(pt=st.length-1);for(let te=0,zt=h+m*2;te<zt;te++){let ae=G*te,ie=G*(te+1),k=gt+Nt+ae,I=gt+pt+ae,$=gt+pt+ie,ht=gt+Nt+ie;Ct(k,I,$,ht)}}}function Vt(st,gt,ft){l.push(st),l.push(gt),l.push(ft)}function ve(st,gt,ft){se(st),se(gt),se(ft);let Nt=i.length/3,pt=_.generateTopUV(n,i,Nt-3,Nt-2,Nt-1);ue(pt[0]),ue(pt[1]),ue(pt[2])}function Ct(st,gt,ft,Nt){se(st),se(gt),se(Nt),se(gt),se(ft),se(Nt);let pt=i.length/3,te=_.generateSideWallUV(n,i,pt-6,pt-3,pt-2,pt-1);ue(te[0]),ue(te[1]),ue(te[3]),ue(te[1]),ue(te[2]),ue(te[3])}function se(st){i.push(l[st*3+0]),i.push(l[st*3+1]),i.push(l[st*3+2])}function ue(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jy(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Jh[i.type]().fromJSON(i)),new s(n,t.options)}},Qy={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new nt(r,o),new nt(a,l),new nt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],p=t[i*3+1],f=t[i*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new nt(o,1-l),new nt(c,1-u),new nt(d,1-f),new nt(x,1-g)]:[new nt(a,1-l),new nt(h,1-u),new nt(p,1-f),new nt(m,1-g)]}};ci=class s extends Zi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},sl=class s extends $t{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Kt(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new L,d=new nt,p=new L,f=new L,x=new L,m=0,g=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,p.x=g*1,p.y=-m,p.z=g*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,p.x=g*1,p.y=-m,p.z=g*0,f.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(f)}for(let _=0;_<=e;_++){let y=n+_*h*i,M=Math.sin(y),b=Math.cos(y);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*M,u.y=t[w].y,u.z=t[w].x*b,o.push(u.x,u.y,u.z),d.x=_/e,d.y=w/(t.length-1),a.push(d.x,d.y);let v=l[3*w+0]*M,S=l[3*w+1],C=l[3*w+0]*b;c.push(v,S,C)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let M=y+_*t.length,b=M,w=M+t.length,v=M+t.length+1,S=M+1;r.push(b,w,S),r.push(v,S,w)}this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("uv",new yt(a,2)),this.setAttribute("normal",new yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},ys=class s extends Zi{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},dn=class s extends $t{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],f=[],x=[],m=[];for(let g=0;g<h;g++){let _=g*d-o;for(let y=0;y<c;y++){let M=y*u-r;f.push(M,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let y=_+c*g,M=_+c*(g+1),b=_+1+c*(g+1),w=_+1+c*g;p.push(y,M,w),p.push(M,b,w)}this.setIndex(p),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},rl=class s extends $t{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/i,p=new L,f=new nt;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let g=r+m/n*o;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/e+1)/2,f.y=(p.y/e+1)/2,h.push(f.x,f.y)}u+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let g=0;g<n;g++){let _=g+m,y=_,M=_+n+1,b=_+n+2,w=_+1;a.push(y,M,w),a.push(M,b,w)}}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ol=class s extends $t{constructor(t=new vs([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new yt(i,3)),this.setAttribute("normal",new yt(r,3)),this.setAttribute("uv",new yt(o,2));function c(h){let u=i.length/3,d=h.extractPoints(e),p=d.shape,f=d.holes;Xn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let _=f[m];Xn.isClockWise(_)===!0&&(f[m]=_.reverse())}let x=Xn.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let _=f[m];p=p.concat(_)}for(let m=0,g=p.length;m<g;m++){let _=p[m];i.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,g=x.length;m<g;m++){let _=x[m],y=_[0]+u,M=_[1]+u,b=_[2]+u;n.push(y,M,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return t1(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};Ms=class s extends $t{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,d=new L,p=[],f=[],x=[],m=[];for(let g=0;g<=n;g++){let _=[],y=g/n,M=o+y*a,b=t*Math.cos(M),w=Math.sqrt(t*t-b*b),v=0;g===0&&o===0?v=.5/e:g===n&&l===Math.PI&&(v=-.5/e);for(let S=0;S<=e;S++){let C=S/e,A=i+C*r;u.x=-w*Math.cos(A),u.y=b,u.z=w*Math.sin(A),f.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(C+v,1-y),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){let y=h[g][_+1],M=h[g][_],b=h[g+1][_],w=h[g+1][_+1];(g!==0||o>0)&&p.push(y,M,w),(g!==n-1||l<Math.PI)&&p.push(M,b,w)}this.setIndex(p),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},al=class s extends Zi{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},fr=class s extends $t{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new L,p=new L,f=new L;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=i;g++){let _=g/i*r;p.x=(t+e*Math.cos(m))*Math.cos(_),p.y=(t+e*Math.cos(m))*Math.sin(_),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),f.subVectors(p,d).normalize(),h.push(f.x,f.y,f.z),u.push(g/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){let g=(i+1)*x+m-1,_=(i+1)*(x-1)+m-1,y=(i+1)*(x-1)+m,M=(i+1)*x+m;l.push(g,_,M),l.push(_,y,M)}this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},ll=class s extends $t{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],u=new L,d=new L,p=new L,f=new L,x=new L,m=new L,g=new L;for(let y=0;y<=n;++y){let M=y/n*r*Math.PI*2;_(M,r,o,t,p),_(M+.01,r,o,t,f),m.subVectors(f,p),g.addVectors(f,p),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let b=0;b<=i;++b){let w=b/i*Math.PI*2,v=-e*Math.cos(w),S=e*Math.sin(w);u.x=p.x+(v*g.x+S*x.x),u.y=p.y+(v*g.y+S*x.y),u.z=p.z+(v*g.z+S*x.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(y/n),h.push(b/i)}}for(let y=1;y<=n;y++)for(let M=1;M<=i;M++){let b=(i+1)*(y-1)+(M-1),w=(i+1)*y+(M-1),v=(i+1)*y+M,S=(i+1)*(y-1)+M;a.push(b,w,S),a.push(w,v,S)}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2));function _(y,M,b,w,v){let S=Math.cos(y),C=Math.sin(y),A=b/M*y,R=Math.cos(A);v.x=w*(2+R)*.5*S,v.y=w*(2+R)*C*.5,v.z=w*Math.sin(A)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},cl=class s extends $t{constructor(t=new Ao(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new nt,h=new L,u=[],d=[],p=[],f=[];x(),this.setIndex(f),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(p,2));function x(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),_(),g()}function m(y){h=t.getPointAt(y/e,h);let M=o.normals[y],b=o.binormals[y];for(let w=0;w<=i;w++){let v=w/i*Math.PI*2,S=Math.sin(v),C=-Math.cos(v);l.x=C*M.x+S*b.x,l.y=C*M.y+S*b.y,l.z=C*M.z+S*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let y=1;y<=e;y++)for(let M=1;M<=i;M++){let b=(i+1)*(y-1)+(M-1),w=(i+1)*y+(M-1),v=(i+1)*y+M,S=(i+1)*(y-1)+M;f.push(b,w,S),f.push(w,v,S)}}function _(){for(let y=0;y<=e;y++)for(let M=0;M<=i;M++)c.x=y/e,c.y=M/i,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Jh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},hl=class extends $t{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new L,r=new L;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,p=u.count;for(let f=d,x=d+p;f<x;f+=3)for(let m=0;m<3;m++){let g=a.getX(f+m),_=a.getX(f+(m+1)%3);i.fromBufferAttribute(o,g),r.fromBufferAttribute(o,_),S0(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),S0(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new yt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};b0=Object.freeze({__proto__:null,BoxGeometry:Oe,CapsuleGeometry:qa,CircleGeometry:hr,ConeGeometry:xs,CylinderGeometry:tn,DodecahedronGeometry:Ya,EdgesGeometry:Za,ExtrudeGeometry:il,IcosahedronGeometry:ci,LatheGeometry:sl,OctahedronGeometry:ys,PlaneGeometry:dn,PolyhedronGeometry:Zi,RingGeometry:rl,ShapeGeometry:ol,SphereGeometry:Ms,TetrahedronGeometry:al,TorusGeometry:fr,TorusKnotGeometry:ll,TubeGeometry:cl,WireframeGeometry:hl}),ul=class extends Ve{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new lt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};Ci={clone:wr,merge:pn},n1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Ve{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n1,this.fragmentShader=i1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=e1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new lt().setHex(i.value);break;case"v2":this.uniforms[n].value=new nt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new pe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Gt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ss=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},me=class extends Ve{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},dl=class extends me{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return xi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){xi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},fl=class extends Ve{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new lt(16777215),this.specular=new lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=zo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},pl=class extends Ve{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new lt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ml=class extends Ve{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},gl=class extends Ve{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=zo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ro=class extends Ve{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Po=class extends Ve{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},xl=class extends Ve{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new lt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}},_l=class extends je{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};Kh=class{static convertArray(t,e){return ii(t,e)}static isTypedArray(t){return Bg(t)}static hasTangents(t){return io(t)}static getKeyframeOrder(t){return Jg(t)}static sortedArray(t,e,n){return If(t,e,n)}static flattenJSON(t,e,n,i){Kg(t,e,n,i)}static subclip(t,e,n,i,r=30){return s1(t,e,n,i,r)}static makeClipAdditive(t,e=0,n=t,i=30){return r1(t,e,n,i)}},$i=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vl=class extends $i{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:us,endingEnd:us}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ds:r=t,a=2*e-n;break;case lo:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ds:o=t,l=2*n-e;break;case lo:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-e)/(i-e),x=f*f,m=x*f,g=-d*m+2*d*x-d*f,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*f+1,y=(-1-p)*m+(1.5+p)*x+.5*f,M=p*m-p*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+_*o[c+b]+y*o[l+b]+M*o[u+b];return r}},Io=class extends $i{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},yl=class extends $i{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ml=class extends $i{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let f=(n-e)/(i-e),x=1-f;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*f;return r}let d=a*2,p=t-1;for(let f=0;f!==a;++f){let x=o[c+f],m=o[l+f],g=p*d+f*2,_=u[g],y=u[g+1],M=t*d+f*2,b=h[M],w=h[M+1],v=a1(n,e,_,b,i);r[f]=Qg(v,x,y,w,m)}return r}};wn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ii(e,this.TimeBufferType),this.values=ii(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ii(t.times,Array),values:ii(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),io(t.settings)&&(n.settings={inTangents:ii(t.settings.inTangents,Array),outTangents:ii(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ml(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ao:e=this.InterpolantFactoryMethodDiscrete;break;case Ua:e=this.InterpolantFactoryMethodLinear;break;case ba:e=this.InterpolantFactoryMethodSmooth;break;case Ih:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Tt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return ba;case this.InterpolantFactoryMethodBezier:return Ih}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;io(this.settings)&&(T0(this.settings.inTangents,t),T0(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;io(this.settings)&&(A0(this.settings.inTangents,t),A0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ht("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Bg(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ba,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let f=0;f!==n;++f){let x=e[u+f];if(x!==e[d+f]||x!==e[p+f]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,io(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Ua;yi=class extends wn{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=ao;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;Lo=class extends wn{constructor(t,e,n,i){super(t,e,n,i)}};Lo.prototype.ValueTypeName="color";pr=class extends wn{constructor(t,e,n,i){super(t,e,n,i)}};pr.prototype.ValueTypeName="number";Sl=class extends $i{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Se.slerpFlat(r,0,o,c-a,o,c,l);return r}},mr=class extends wn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Sl(this.times,this.values,this.getValueSize(),t)}};mr.prototype.ValueTypeName="quaternion";mr.prototype.InterpolantFactoryMethodSmooth=void 0;Mi=class extends wn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=ao;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;Do=class extends wn{constructor(t,e,n,i){super(t,e,n,i)}};Do.prototype.ValueTypeName="vector";bs=class{constructor(t="",e=-1,n=[],i=vc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Kn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(c1(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(wn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Jg(l);l=If(l,1,h),c=If(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new pr(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};oi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(E0(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!E0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};No=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Rp=new No,sn=class{constructor(t){this.manager=t!==void 0?t:Rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};sn.DEFAULT_MATERIAL_NAME="__DEFAULT";Vi={},Lf=class extends Error{constructor(t,e){super(t),this.response=e}},$n=class extends sn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=oi.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Vi[t]!==void 0){Vi[t].push({onLoad:e,onProgress:n,onError:i});return}Vi[t]=[],Vi[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Tt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Vi[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0,x=0,m=new ReadableStream({start(g){_();function _(){u.read().then(({done:y,value:M})=>{if(y)g.close();else{x+=M.byteLength;let b=new ProgressEvent("progress",{lengthComputable:f,loaded:x,total:p});for(let w=0,v=h.length;w<v;w++){let S=h[w];S.onProgress&&S.onProgress(b)}g.enqueue(M),_()}},y=>{g.error(y)})}}});return new Response(m)}else throw new Lf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(f=>p.decode(f))}}}).then(c=>{oi.add(`file:${t}`,c);let h=Vi[t];delete Vi[t];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Vi[t];if(h===void 0)throw this.manager.itemError(t),c;delete Vi[t];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Qh=class extends sn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new $n(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Ht(l),r.manager.itemError(t)}},n,i)}parse(t){let e=[];for(let n=0;n<t.length;n++){let i=bs.parse(t[n]);e.push(i)}return e}},jh=class extends sn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=[],a=new cr,l=new $n(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(t[u],function(d){let p=r.parse(d,!0);o[u]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},c+=1,c===6&&(p.mipmapCount===1&&(a.minFilter=Ce),a.image=o,a.format=p.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let u=0,d=t.length;u<d;++u)h(u);else l.load(t,function(u){let d=r.parse(u,!0);if(d.isCubemap){let p=d.mipmaps.length/d.mipmapCount;for(let f=0;f<p;f++){o[f]={mipmaps:[]};for(let x=0;x<d.mipmapCount;x++)o[f].mipmaps.push(d.mipmaps[f*d.mipmapCount+x]),o[f].format=d.format,o[f].width=d.width,o[f].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=Ce),a.format=d.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}},Kr=new WeakMap,ws=class extends sn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=oi.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=Kr.get(o);u===void 0&&(u=[],Kr.set(o,u)),u.push({onLoad:e,onError:i})}return o}let a=uo("img");function l(){h(),e&&e(this);let u=Kr.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Kr.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),oi.remove(`image:${t}`);let d=Kr.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(u)}Kr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),oi.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}},tu=class extends sn{constructor(t){super(t)}load(t,e,n,i){let r=new gs;r.colorSpace=nn;let o=new ws(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}},eu=class extends sn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new yn,a=new $n(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):Ht(h);return}r._applyTexData(o,c),e&&e(o,c)},n,i),o}createDataTexture(t){let e=new yn;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:vn,t.wrapT=e.wrapT!==void 0?e.wrapT:vn,t.magFilter=e.magFilter!==void 0?e.magFilter:Ce,t.minFilter=e.minFilter!==void 0?e.minFilter:Ce,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=Jn),e.mipmapCount===1&&(t.minFilter=Ce),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}},nu=class extends sn{constructor(t){super(t)}load(t,e,n,i){let r=new Fe,o=new ws(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},hi=class extends _e{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ui=class extends hi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},vf=new Gt,C0=new L,R0=new L,gr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vi,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;C0.setFromMatrixPosition(t.matrixWorld),e.position.copy(C0),R0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(R0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){vf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(vf,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===fs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(vf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Mh=new L,Sh=new Se,gi=new L,xr=class extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Mh,Sh,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mh,Sh,gi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Mh,Sh,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mh,Sh,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cs=new L,P0=new nt,I0=new nt,Ie=class extends xr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cs.x,cs.y).multiplyScalar(-t/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cs.x,cs.y).multiplyScalar(-t/cs.z)}getViewSize(t,e){return this.getViewBounds(t,P0,I0),e.subVectors(I0,P0)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Df=class extends gr{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=sr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},bl=class extends hi{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Df}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Nf=class extends gr{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0}},wl=class extends hi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ji=class extends xr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Uf=class extends gr{constructor(){super(new Ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},di=class extends hi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new Uf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Tl=class extends hi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},Al=class extends hi{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}},Uo=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new L)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){let n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}},El=class extends hi{constructor(t=new Uo,e=1){super(void 0,e),this.isLightProbe=!0,this.type="LightProbe",this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}},L0={},Cl=class s extends sn{constructor(t){super(t),this.textures={}}load(t,e,n,i){let r=this,o=new $n(r.manager);o.setPriority(r.priority),o.setCache(r.cache),o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Ht(l),r.manager.itemError(t)}},n,i)}parse(t){let e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return s.createMaterialFromType(t)}static createMaterialFromType(t){let n={ShadowMaterial:ul,SpriteMaterial:xo,RawShaderMaterial:Ss,ShaderMaterial:Xe,PointsMaterial:yo,MeshPhysicalMaterial:dl,MeshStandardMaterial:me,MeshPhongMaterial:fl,MeshToonMaterial:pl,MeshNormalMaterial:ml,MeshLambertMaterial:gl,MeshDepthMaterial:Ro,MeshDistanceMaterial:Po,MeshBasicMaterial:Yn,MeshMatcapMaterial:xl,LineDashedMaterial:_l,LineBasicMaterial:je,Material:Ve,...L0}[t],i;return n===void 0?(xi(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),i=new Ve):i=new n,i}static registerMaterial(t,e){L0[t]=e}},Fo=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Rl=class extends $t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}},Pl=class extends sn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new $n(r.manager);o.setPriority(r.priority),o.setCache(r.cache),o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Ht(l),r.manager.itemError(t)}},n,i)}parse(t){let e={},n={};function i(p,f){if(e[f]!==void 0)return e[f];let m=p.interleavedBuffers[f],g=r(p,m.buffer),_=no(m.type,g),y=new ms(_,m.stride);return y.uuid=m.uuid,m.usage!==void 0&&y.setUsage(m.usage),e[f]=y,y}function r(p,f){if(n[f]!==void 0)return n[f];let m=p.arrayBuffers[f],g=new Uint32Array(m).buffer;return n[f]=g,g}let o=t.isInstancedBufferGeometry?new Rl:new $t,a=t.data.index;if(a!==void 0){let p=no(a.type,a.array);o.setIndex(new Jt(p,1))}let l=t.data.attributes;for(let p in l){let f=l[p],x;if(f.isInterleavedBufferAttribute){let m=i(t.data,f.data);x=new qi(m,f.itemSize,f.offset,f.normalized)}else{let m=no(f.type,f.array),g=f.isInstancedBufferAttribute?bn:Jt;x=new g(m,f.itemSize,f.normalized)}f.name!==void 0&&(x.name=f.name),f.usage!==void 0&&x.setUsage(f.usage),f.gpuType!==void 0&&(x.gpuType=f.gpuType),o.setAttribute(p,x)}let c=t.data.morphAttributes;if(c)for(let p in c){let f=c[p],x=[];for(let m=0,g=f.length;m<g;m++){let _=f[m],y;if(_.isInterleavedBufferAttribute){let M=i(t.data,_.data);y=new qi(M,_.itemSize,_.offset,_.normalized)}else{let M=no(_.type,_.array);y=new Jt(M,_.itemSize,_.normalized)}_.name!==void 0&&(y.name=_.name),_.usage!==void 0&&y.setUsage(_.usage),_.gpuType!==void 0&&(y.gpuType=_.gpuType),x.push(y)}o.morphAttributes[p]=x}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let p=0,f=u.length;p!==f;++p){let x=u[p];o.addGroup(x.start,x.count,x.materialIndex)}let d=t.data.boundingSphere;return d!==void 0&&(o.boundingSphere=new Ne().fromJSON(d)),t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}},yf={},iu=class extends sn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=this.path===""?Fo.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;let a=new $n(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),Ht("ObjectLoader: Can't parse "+t+".",u.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),Ht("ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){let n=this,i=this.path===""?Fo.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;let r=new $n(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let o=await r.loadAsync(t,e),a;try{a=JSON.parse(o)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}let l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){let n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(c)}),a=this.parseTextures(t.textures,o),l=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,r,l,a,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let u=!1;for(let d in o)if(o[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&e(c)}return c}async parseAsync(t){let e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,i,a,o,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){yf[t]=e}parseShapes(t){let e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){let r=new vs().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){let n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=new Ga().fromJSON(t[r],i);n[a.uuid]=a}return n}parseGeometries(t,e){let n={};if(t!==void 0){let i=new Pl;for(let r=0,o=t.length;r<o;r++){let a,l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in b0?a=b0[l.type].fromJSON(l,e):l.type in yf?a=yf[l.type].fromJSON(l,e):Tt(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(t,e){let n={},i={};if(t!==void 0){let r=new Cl;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){let l=t[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){let e={};if(t!==void 0)for(let n=0;n<t.length;n++){let i=t[n],r=bs.parse(i);e[r.uuid]=r}return e}parseImages(t,e){let n=this,i={},r;function o(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:no(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){let l=new No(e);r=new ws(l),r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){let u=t[c],d=u.url;if(Array.isArray(d)){let p=[];for(let f=0,x=d.length;f<x;f++){let m=d[f],g=a(m);g!==null&&(g instanceof HTMLImageElement?p.push(g):p.push(new yn(g.data,g.width,g.height)))}i[u.uuid]=new On(p)}else{let p=a(u.url);i[u.uuid]=new On(p)}}}return i}async parseImagesAsync(t){let e=this,n={},i;async function r(o){if(typeof o=="string"){let a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:no(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){i=new ws(this.manager),i.setPriority(this.priority),i.setCache(this.cache),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){let l=t[o],c=l.url;if(Array.isArray(c)){let h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u],f=await r(p);f!==null&&(f instanceof HTMLImageElement?h.push(f):h.push(new yn(f.data,f.width,f.height)))}n[l.uuid]=new On(h)}else{let h=await r(l.url);n[l.uuid]=new On(h)}}}return n}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(Tt("ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}let i={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=t[r];a.image===void 0&&Tt('ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&Tt("ObjectLoader: Undefined image",a.image);let l=e[a.image],c=l.data,h;Array.isArray(c)?(h=new gs,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new yn:h=new Fe,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,h1)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],D0),h.wrapT=n(a.wrap[1],D0)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,N0)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,N0)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.mipmapsAutoUpdate!==void 0&&(h.mipmapsAutoUpdate=a.mipmapsAutoUpdate),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.normalized!==void 0&&(h.normalized=a.normalized),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(t,e,n,i,r){let o;function a(d){return e[d]===void 0&&Tt("ObjectLoader: Undefined geometry",d),e[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){let p=[];for(let f=0,x=d.length;f<x;f++){let m=d[f];n[m]===void 0&&Tt("ObjectLoader: Undefined material",m),p.push(n[m])}return p}return n[d]===void 0&&Tt("ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&Tt("ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(t.type){case"Scene":o=new Sn,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new lt(t.background):o.background=c(t.background)),t.environment!==void 0&&(o.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new Oa(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new ai(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new Ie(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new Ji(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new Tl(t.color,t.intensity);break;case"DirectionalLight":o=new di(t.color,t.intensity),o.target=t.target||"";break;case"PointLight":o=new wl(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new Al(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new bl(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),o.target=t.target||"",t.map!==void 0&&(o.map=c(t.map));break;case"HemisphereLight":o=new ui(t.color,t.groundColor,t.intensity);break;case"LightProbe":let d=new Uo().fromArray(t.sh);o=new El(d,t.intensity);break;case"SkinnedMesh":h=a(t.geometry),u=l(t.material),o=new ka(h,u),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":h=a(t.geometry),u=l(t.material),o=new ne(h,u);break;case"InstancedMesh":h=a(t.geometry),u=l(t.material);let p=t.count,f=t.instanceMatrix,x=t.instanceColor;o=new We(h,u,p),o.instanceMatrix=new bn(new Float32Array(f.array),16),x!==void 0&&(o.instanceColor=new bn(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":h=a(t.geometry),u=l(t.material),o=new Ha(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,u),o.geometry=h,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._geometryInfo=t.geometryInfo.map(m=>{let g=null,_=null;return m.boundingBox!==void 0&&(g=new ze().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(_=new Ne().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:_}}),o._instanceInfo=t.instanceInfo,o._availableInstanceIds=t.availableInstanceIds,o._availableGeometryIds=t.availableGeometryIds,o._nextIndexStart=t.nextIndexStart,o._nextVertexStart=t.nextVertexStart,o._geometryCount=t.geometryCount,o._maxInstanceCount=t.maxInstanceCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._matricesTexture=c(t.matricesTexture.uuid),o._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(o._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(o.boundingSphere=new Ne().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(o.boundingBox=new ze().fromJSON(t.boundingBox));break;case"LOD":o=new za;break;case"Line":o=new li(a(t.geometry),l(t.material));break;case"LineLoop":o=new Va(a(t.geometry),l(t.material));break;case"LineSegments":o=new Bn(a(t.geometry),l(t.material));break;case"PointCloud":case"Points":o=new Wa(a(t.geometry),l(t.material));break;case"Sprite":o=new Ba(l(t.material)),t.center!==void 0&&o.center.fromArray(t.center);break;case"Group":o=new ri;break;case"Bone":o=new _o;break;default:o=new _e}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.pivot!==void 0&&(o.pivot=new L().fromArray(t.pivot)),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&(o.matrix.decompose(o.position,o.quaternion,o.scale),o.pivot!==null&&o.position.copy(o.pivot).applyMatrix4(o.matrix).sub(o.pivot))):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(o.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.blurSamples!==void 0&&(o.shadow.blurSamples=t.shadow.blurSamples),t.shadow.focus!==void 0&&(o.shadow.focus=t.shadow.focus),t.shadow.aspect!==void 0&&(o.shadow.aspect=t.shadow.aspect),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.mapType!==void 0&&(o.shadow.mapType=t.shadow.mapType),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.static!==void 0&&(o.static=t.static),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){let d=t.children;for(let p=0;p<d.length;p++)o.add(this.parseObject(d[p],e,n,i,r))}if(t.animations!==void 0){let d=t.animations;for(let p=0;p<d.length;p++){let f=d[p];o.animations.push(r[f])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);let d=t.levels;for(let p=0;p<d.length;p++){let f=d[p],x=o.getObjectByProperty("uuid",f.object);x!==void 0&&o.addLevel(x,f.distance,f.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=e[n.skeleton];i===void 0?Tt("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){let n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new _e}})}},h1={UVMapping:Fl,CubeReflectionMapping:wi,CubeRefractionMapping:Ls,EquirectangularReflectionMapping:Go,EquirectangularRefractionMapping:Ho},D0={RepeatWrapping:ro,ClampToEdgeWrapping:vn,MirroredRepeatWrapping:oo},N0={NearestFilter:Ue,NearestMipmapNearestFilter:Xu,NearestMipmapLinearFilter:Sr,LinearFilter:Ce,LinearMipmapNearestFilter:Vo,LinearMipmapLinearFilter:Jn},Mf=new WeakMap,su=class extends sn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Tt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Tt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=oi.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{Mf.has(o)===!0?(i&&i(Mf.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return oi.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Mf.set(l,c),oi.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});oi.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Oo=class{static getContext(){return bh===void 0&&(bh=new(window.AudioContext||window.webkitAudioContext)),bh}static setContext(t){bh=t}},ru=class extends sn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new $n(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{let c=l.slice(0),h=Oo.getContext(),u=t+"#decode";r.manager.itemStart(u),h.decodeAudioData(c,function(d){e(d),r.manager.itemEnd(u)}).catch(function(d){a(d),r.manager.itemEnd(u)})}catch(c){a(c)}},n,i);function a(l){i?i(l):Ht(l),r.manager.itemError(t)}}},U0=new Gt,F0=new Gt,$s=new Gt,ou=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ie,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ie,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,$s.copy(t.projectionMatrix);let i=e.eyeSep/2,r=i*e.near/e.focus,o=e.near*Math.tan(nr*e.fov*.5)/e.zoom,a,l;F0.elements[12]=-i,U0.elements[12]=i,a=-o*e.aspect+r,l=o*e.aspect+r,$s.elements[0]=2*e.near/(l-a),$s.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy($s),a=-o*e.aspect-r,l=o*e.aspect-r,$s.elements[0]=2*e.near/(l-a),$s.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy($s)}this.cameraL.matrix.copy(t.matrixWorld).multiply(F0),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(U0),this.cameraR.matrixWorldNeedsUpdate=!0}},Qr=-90,jr=1,_r=class extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ie(Qr,jr,t,e);i.layers=this.layers,this.add(i);let r=new Ie(Qr,jr,t,e);r.layers=this.layers,this.add(r);let o=new Ie(Qr,jr,t,e);o.layers=this.layers,this.add(o);let a=new Ie(Qr,jr,t,e);a.layers=this.layers,this.add(a);let l=new Ie(Qr,jr,t,e);l.layers=this.layers,this.add(l);let c=new Ie(Qr,jr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Il=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},vr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=u1.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};Js=new L,Sf=new Se,d1=new L,Ks=new L,Qs=new L,au=class extends _e{constructor(){super(),this.type="AudioListener",this.context=Oo.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new vr}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Js,Sf,d1),Ks.set(0,0,-1).applyQuaternion(Sf),Qs.set(0,1,0).applyQuaternion(Sf),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Js.x,n),e.positionY.linearRampToValueAtTime(Js.y,n),e.positionZ.linearRampToValueAtTime(Js.z,n),e.forwardX.linearRampToValueAtTime(Ks.x,n),e.forwardY.linearRampToValueAtTime(Ks.y,n),e.forwardZ.linearRampToValueAtTime(Ks.z,n),e.upX.linearRampToValueAtTime(Qs.x,n),e.upY.linearRampToValueAtTime(Qs.y,n),e.upZ.linearRampToValueAtTime(Qs.z,n)}else e.setPosition(Js.x,Js.y,Js.z),e.setOrientation(Ks.x,Ks.y,Ks.z,Qs.x,Qs.y,Qs.z)}},Ll=class extends _e{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Tt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Tt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Tt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}},js=new L,O0=new Se,f1=new L,tr=new L,lu=class extends Ll{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(js,O0,f1),tr.set(0,0,1).applyQuaternion(O0);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(js.x,n),e.positionY.linearRampToValueAtTime(js.y,n),e.positionZ.linearRampToValueAtTime(js.z,n),e.orientationX.linearRampToValueAtTime(tr.x,n),e.orientationY.linearRampToValueAtTime(tr.y,n),e.orientationZ.linearRampToValueAtTime(tr.z,n)}else e.setPosition(js.x,js.y,js.z),e.setOrientation(tr.x,tr.y,tr.z)}},cu=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},Dl=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Se.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let o=this._workIndex*r;Se.multiplyQuaternionsFlat(t,o,t,e,t,n),Se.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},Pp="\\[\\]\\.:\\/",p1=new RegExp("["+Pp+"]","g"),Ip="[^"+Pp+"]",m1="[^"+Pp.replace("\\.","")+"]",g1=/((?:WC+[\/:])*)/.source.replace("WC",Ip),x1=/(WCOD+)?/.source.replace("WCOD",m1),_1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ip),v1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ip),y1=new RegExp("^"+g1+x1+_1+v1+"$"),M1=["material","materials","bones","map"],Ff=class{constructor(t,e,n){let i=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(p1,"")}static parseTrackName(t){let e=y1.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);M1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Ff;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];hu=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Kn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length,a,l=t.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],p=d.uuid,f=e[p];if(f===void 0){f=l++,e[p]=f,t.push(d);for(let x=0,m=o;x!==m;++x)r[x].push(new Me(d,n[x],i[x]))}else if(f<c){a=t[f];let x=--c,m=t[x];e[m.uuid]=f,t[f]=m,e[p]=x,t[x]=d;for(let g=0,_=o;g!==_;++g){let y=r[g],M=y[x],b=y[f];y[f]=M,b===void 0&&(b=new Me(d,n[g],i[g])),y[x]=b}}else t[f]!==a&&Ht("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){let u=r++,d=t[u];e[d.uuid]=h,t[h]=d,e[c]=u,t[u]=l;for(let p=0,f=i;p!==f;++p){let x=n[p],m=x[u],g=x[h];x[h]=m,x[u]=g}}}this.nCachedObjects_=r}uncache(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,o=t.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],h=c.uuid,u=e[h];if(u!==void 0)if(delete e[h],u<r){let d=--r,p=t[d],f=--o,x=t[f];u!==d&&(e[p.uuid]=u),t[u]=p,d!==f&&(e[x.uuid]=d),t[d]=x,t.pop();for(let m=0,g=i;m!==g;++m){let _=n[m],y=_[d],M=_[f];_[u]=y,_[d]=M,_.pop()}}else{let d=--o,p=t[d];u!==d&&(e[p.uuid]=u),t[u]=p,t.pop();for(let f=0,x=i;f!==x;++f){let m=n[f];m[u]=m[d],m.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[t]=i,o.push(t),a.push(e),r.push(u);for(let d=h,p=l.length;d!==p;++d){let f=l[d];u[d]=new Me(f,t,e)}return u}unsubscribe_(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=i[a];e[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}},Nl=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,o=r.length,a=new Array(o),l={endingStart:us,endingEnd:us};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=hp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Qu:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case vc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,o=n===up;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===cp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=ds,i.endingEnd=ds):(t?i.endingStart=this.zeroSlopeAtStart?ds:us:i.endingStart=lo,e?i.endingEnd=this.zeroSlopeAtEnd?ds:us:i.endingEnd=lo)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}},S1=new Float32Array(1),uu=class extends Ln{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=i[u],p=d.name,f=h[p];if(f!==void 0)++f.referenceCount,o[u]=f;else{if(f=o[u],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,p));continue}let x=e&&e._propertyBindings[u].binding.parsedPath;f=new Dl(Me.create(n,p,x),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,p),o[u]=f}a[u].resultBuffer=f.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;let u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Io(new Float32Array(2),new Float32Array(2),1,S1),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,o=typeof t=="string"?bs.findByName(i,t):t,a=o!==null?o.uuid:t,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=vc),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new Nl(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?bs.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},du=class extends po{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n;for(let r=0;r<this.textures.length;r++){let o=new or(null,t,e,n);o.isRenderTargetTexture=!0,o.renderTarget=this,this.textures[r]=o}this._setTextureOptions(i)}},fu=class s{constructor(t){this.value=t}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},b1=0,pu=class extends Ln{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:b1++}),this.name="",this.usage=yc,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){let r=e[n];Array.isArray(r)?this.uniforms.push(r.map(o=>o.clone())):this.uniforms.push(r.clone())}return this}clone(){return new this.constructor().copy(this)}},mu=class extends ms{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},gu=class{constructor(t,e,n,i,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=o,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},B0=new Gt,xu=class{constructor(t,e,n=0,i=1/0){this.ray=new Yi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ht("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return B0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(B0),this}intersectObject(t,e=!0,n=[]){return Of(t,this,n,e),n.sort(z0),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Of(t[i],this,n,e);return n.sort(z0),n}};_u=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Tt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},vu=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},yu=class{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}},Fp=class Fp{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Fp.prototype.isMatrix2=!0;Mu=Fp,k0=new nt,Ul=class{constructor(t=new nt(1/0,1/0),e=new nt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=k0.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,k0).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},G0=new L,wh=new L,to=new L,eo=new L,bf=new L,w1=new L,T1=new L,Su=class{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){G0.subVectors(t,this.start),wh.subVectors(this.end,this.start);let n=wh.dot(wh);if(n===0)return 0;let r=wh.dot(G0)/n;return e&&(r=Kt(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=w1,n=T1){let i=10000000000000001e-32,r,o,a=this.start,l=t.start,c=this.end,h=t.end;to.subVectors(c,a),eo.subVectors(h,l),bf.subVectors(a,l);let u=to.dot(to),d=eo.dot(eo),p=eo.dot(bf);if(u<=i&&d<=i)return e.copy(a),n.copy(l),e.distanceToSquared(n);if(u<=i)r=0,o=p/d,o=Kt(o,0,1);else{let f=to.dot(bf);if(d<=i)o=0,r=Kt(-f/u,0,1);else{let x=to.dot(eo),m=u*d-x*x;m!==0?r=Kt((x*p-f*d)/m,0,1):r=0,o=(x*r+p)/d,o<0?(o=0,r=Kt(-f/u,0,1)):o>1&&(o=1,r=Kt((x-f)/u,0,1))}}return e.copy(a).addScaledVector(to,r),n.copy(l).addScaledVector(eo,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},H0=new L,bu=class extends _e{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let n=new $t,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){let c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new yt(i,3));let r=new je({fog:!1,toneMapped:!1});this.cone=new Bn(n,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),H0.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(H0),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},hs=new L,Th=new Gt,wf=new Gt,wu=class extends Bn{constructor(t){let e=jg(t),n=new $t,i=[],r=[];for(let c=0;c<e.length;c++){let h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new yt(i,3)),n.setAttribute("color",new yt(r,3));let o=new je({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;let a=new lt(255),l=new lt(65280);this.setColors(a,l)}updateMatrixWorld(t){let e=this.bones,n=this.geometry,i=n.getAttribute("position");wf.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){let a=e[r];a.parent&&a.parent.isBone&&(Th.multiplyMatrices(wf,a.matrixWorld),hs.setFromMatrixPosition(Th),i.setXYZ(o,hs.x,hs.y,hs.z),Th.multiplyMatrices(wf,a.parent.matrixWorld),hs.setFromMatrixPosition(Th),i.setXYZ(o+1,hs.x,hs.y,hs.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){let i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};Tu=class extends ne{constructor(t,e,n){let i=new Ms(e,4,2),r=new Yn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},A1=new L,V0=new lt,W0=new lt,Au=class extends _e{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new ys(e);i.rotateY(Math.PI*.5),this.material=new Yn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new Jt(o,3)),this.add(new ne(i,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");V0.copy(this.light.color),W0.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){let r=n<i/2?V0:W0;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(A1.setFromMatrixPosition(this.light.matrixWorld).negate())}},Eu=class extends Bn{constructor(t=10,e=10,n=4473924,i=8947848){n=new lt(n),i=new lt(i);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,p=0,f=-a;d<=e;d++,f+=o){l.push(-a,0,f,a,0,f),l.push(f,0,-a,f,0,a);let x=d===r?n:i;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}let h=new $t;h.setAttribute("position",new yt(l,3)),h.setAttribute("color",new yt(c,3));let u=new je({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Cu=class extends Bn{constructor(t=10,e=16,n=8,i=64,r=4473924,o=8947848){r=new lt(r),o=new lt(o);let a=[],l=[];if(e>1)for(let u=0;u<e;u++){let d=u/e*(Math.PI*2),p=Math.sin(d)*t,f=Math.cos(d)*t;a.push(0,0,0),a.push(p,0,f);let x=u&1?r:o;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let u=0;u<n;u++){let d=u&1?r:o,p=t-t/n*u;for(let f=0;f<i;f++){let x=f/i*(Math.PI*2),m=Math.sin(x)*p,g=Math.cos(x)*p;a.push(m,0,g),l.push(d.r,d.g,d.b),x=(f+1)/i*(Math.PI*2),m=Math.sin(x)*p,g=Math.cos(x)*p,a.push(m,0,g),l.push(d.r,d.g,d.b)}}let c=new $t;c.setAttribute("position",new yt(a,3)),c.setAttribute("color",new yt(l,3));let h=new je({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},X0=new L,Ah=new L,q0=new L,Ru=class extends _e{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new $t;i.setAttribute("position",new yt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let r=new je({fog:!1,toneMapped:!1});this.lightPlane=new li(i,r),this.add(this.lightPlane),i=new $t,i.setAttribute("position",new yt([0,0,0,0,0,1],3)),this.targetLine=new li(i,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),X0.setFromMatrixPosition(this.light.matrixWorld),Ah.setFromMatrixPosition(this.light.target.matrixWorld),q0.subVectors(Ah,X0),this.lightPlane.lookAt(Ah),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ah),this.targetLine.scale.z=q0.length()}},Eh=new L,De=new xr,Pu=class extends Bn{constructor(t){let e=new $t,n=new je({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(f,x){l(f),l(x)}function l(f){i.push(0,0,0),r.push(0,0,0),o[f]===void 0&&(o[f]=[]),o[f].push(i.length/3-1)}e.setAttribute("position",new yt(i,3)),e.setAttribute("color",new yt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let c=new lt(16755200),h=new lt(16711680),u=new lt(43775),d=new lt(16777215),p=new lt(3355443);this.setColors(c,h,u,d,p)}setColors(t,e,n,i,r){let a=this.geometry.getAttribute("color");return a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0,this}update(){let t=this.geometry,e=this.pointMap,n=1,i=1,r,o;if(De.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,o=0;else if(this.camera.coordinateSystem===In)r=-1,o=1;else if(this.camera.coordinateSystem===fs)r=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Be("c",e,t,De,0,0,r),Be("t",e,t,De,0,0,o),Be("n1",e,t,De,-n,-i,r),Be("n2",e,t,De,n,-i,r),Be("n3",e,t,De,-n,i,r),Be("n4",e,t,De,n,i,r),Be("f1",e,t,De,-n,-i,o),Be("f2",e,t,De,n,-i,o),Be("f3",e,t,De,-n,i,o),Be("f4",e,t,De,n,i,o),Be("u1",e,t,De,n*.7,i*1.1,r),Be("u2",e,t,De,-n*.7,i*1.1,r),Be("u3",e,t,De,0,i*2,r),Be("cf1",e,t,De,-n,0,o),Be("cf2",e,t,De,n,0,o),Be("cf3",e,t,De,0,-i,o),Be("cf4",e,t,De,0,i,o),Be("cn1",e,t,De,-n,0,r),Be("cn2",e,t,De,n,0,r),Be("cn3",e,t,De,0,-i,r),Be("cn4",e,t,De,0,i,r),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};Ch=new ze,Iu=class extends Bn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new $t;r.setIndex(new Jt(n,1)),r.setAttribute("position",new Jt(i,3)),super(r,new je({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Ch.setFromObject(this.object),Ch.isEmpty())return;let t=Ch.min,e=Ch.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Lu=class extends Bn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new $t;r.setIndex(new Jt(n,1)),r.setAttribute("position",new yt(i,3)),super(r,new je({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Du=class extends li{constructor(t,e=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new $t;o.setAttribute("position",new yt(r,3)),o.computeBoundingSphere(),super(o,new je({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new $t;l.setAttribute("position",new yt(a,3)),l.computeBoundingSphere(),this.add(new ne(l,new Yn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Y0=new L,Nu=class extends _e{constructor(t=new L(0,0,1),e=new L(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Rh===void 0&&(Rh=new $t,Rh.setAttribute("position",new yt([0,0,0,0,1,0],3)),Tf=new xs(.5,1,5,1),Tf.translate(0,-.5,0)),this.position.copy(e),this.line=new li(Rh,new je({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ne(Tf,new Yn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Y0.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Y0,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Uu=class extends Bn{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new $t;i.setAttribute("position",new yt(e,3)),i.setAttribute("color",new yt(n,3));let r=new je({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){let i=new lt,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Fu=class{constructor(){this.type="ShapePath",this.color=new lt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new _s,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1,u=c.length;for(let d=0,p=u-1;d<u;p=d++){let f=c[d],x=c[p];f.y>l.y!=x.y>l.y&&l.x<(x.x-f.x)*(l.y-f.y)/(x.y-f.y)+f.x&&(h=!h)}return h}function e(l,c){let h=c.getCenter(new nt);if(t(h,l))return h;let u=h.y,d=[],p=l.length;for(let f=0;f<p;f++){let x=l[f],m=l[(f+1)%p];if(x.y>u!=m.y>u){let g=x.x+(u-x.y)*(m.x-x.x)/(m.y-x.y);d.push(g)}}return d.length>1&&(d.sort((f,x)=>f-x),h.x=(d[0]+d[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Tt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=Xn.area(c);if(h===0)continue;let u=new Ul;for(let d=0;d<c.length;d++)u.expandByPoint(c[d]);r.push({subPath:l,points:c,boundingBox:u,interiorPoint:e(c,u),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let u=l-1;u>=0;u--){let d=r[u];if(d.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,d.points)){c.container=d.exclude?d.container:d,h=d.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let o=[],a=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new vs;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=a.get(l.container);if(!c)continue;let h=new _s;h.curves=l.subPath.curves,c.holes.push(h)}return o}},Ou=class extends Ln{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};Bu=class{static contain(t,e){return E1(t,e)}static cover(t,e){return C1(t,e)}static fill(t){return R1(t)}static getByteLength(t,e,n,i){return sd(t,e,n,i)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});var Yt={};kc(Yt,{ACESFilmicToneMapping:()=>bi,AddEquation:()=>As,AddOperation:()=>ap,AdditiveAnimationBlendMode:()=>Qu,AdditiveBlending:()=>Bo,AgXToneMapping:()=>Ps,AlphaFormat:()=>Ju,AlwaysCompare:()=>ed,AlwaysDepth:()=>Ra,AlwaysStencilFunc:()=>xp,AmbientLight:()=>Tl,AnimationAction:()=>Nl,AnimationClip:()=>bs,AnimationLoader:()=>Qh,AnimationMixer:()=>uu,AnimationObjectGroup:()=>hu,AnimationUtils:()=>Kh,ArcCurve:()=>$a,ArrayCamera:()=>Il,ArrowHelper:()=>Nu,AttachedBindMode:()=>Ph,Audio:()=>Ll,AudioAnalyser:()=>cu,AudioContext:()=>Oo,AudioListener:()=>au,AudioLoader:()=>ru,AxesHelper:()=>Uu,BackSide:()=>fn,BasicDepthPacking:()=>mp,BasicShadowMap:()=>K0,BatchedMesh:()=>Ha,BezierInterpolant:()=>Ml,Bone:()=>_o,BooleanKeyframeTrack:()=>yi,Box2:()=>Ul,Box3:()=>ze,Box3Helper:()=>Lu,BoxGeometry:()=>Oe,BoxHelper:()=>Iu,BufferAttribute:()=>Jt,BufferGeometry:()=>$t,BufferGeometryLoader:()=>Pl,ByteType:()=>qu,Cache:()=>oi,Camera:()=>xr,CameraHelper:()=>Pu,CanvasTexture:()=>Zh,CapsuleGeometry:()=>qa,CatmullRomCurve3:()=>Ja,CineonToneMapping:()=>Rs,CircleGeometry:()=>hr,ClampToEdgeWrapping:()=>vn,Clock:()=>_u,Color:()=>lt,ColorKeyframeTrack:()=>Lo,ColorManagement:()=>he,Compatibility:()=>Fg,CompressedArrayTexture:()=>qh,CompressedCubeTexture:()=>Yh,CompressedTexture:()=>cr,CompressedTextureLoader:()=>jh,ConeGeometry:()=>xs,ConstantAlphaFactor:()=>sp,ConstantColorFactor:()=>np,Controls:()=>Ou,CubeCamera:()=>_r,CubeDepthTexture:()=>Mo,CubeReflectionMapping:()=>wi,CubeRefractionMapping:()=>Ls,CubeTexture:()=>gs,CubeTextureLoader:()=>tu,CubicBezierCurve:()=>bo,CubicBezierCurve3:()=>Ka,CubicInterpolant:()=>vl,CullFaceBack:()=>ku,CullFaceFront:()=>kf,CullFaceFrontBack:()=>J0,CullFaceNone:()=>zf,Curve:()=>Dn,CurvePath:()=>ja,CustomBlending:()=>Hf,CustomToneMapping:()=>ko,CylinderGeometry:()=>tn,Cylindrical:()=>yu,Data3DTexture:()=>or,DataArrayTexture:()=>rr,DataTexture:()=>yn,DataTextureLoader:()=>eu,DataUtils:()=>Uh,DecrementStencilOp:()=>fg,DecrementWrapStencilOp:()=>mg,DefaultLoadingManager:()=>Rp,DepthFormat:()=>_i,DepthStencilFormat:()=>Ti,DepthTexture:()=>Zn,DetachedBindMode:()=>lp,DirectionalLight:()=>di,DirectionalLightHelper:()=>Ru,DiscreteInterpolant:()=>yl,DodecahedronGeometry:()=>Ya,DoubleSide:()=>zn,DstAlphaFactor:()=>Kf,DstColorFactor:()=>jf,DynamicCopyUsage:()=>Pg,DynamicDrawUsage:()=>wg,DynamicReadUsage:()=>Eg,EdgesGeometry:()=>Za,EllipseCurve:()=>ur,EqualCompare:()=>yp,EqualDepth:()=>Ia,EqualStencilFunc:()=>vg,EquirectangularReflectionMapping:()=>Go,EquirectangularRefractionMapping:()=>Ho,Euler:()=>qn,EventDispatcher:()=>Ln,ExternalTexture:()=>So,ExtrudeGeometry:()=>il,FileLoader:()=>$n,Float16BufferAttribute:()=>Gh,Float32BufferAttribute:()=>yt,FloatType:()=>un,Fog:()=>Oa,FogExp2:()=>ai,FramebufferTexture:()=>Xh,FrontSide:()=>Ki,Frustum:()=>vi,FrustumArray:()=>vo,GLBufferAttribute:()=>gu,GLSL1:()=>Lg,GLSL3:()=>nd,GreaterCompare:()=>Mp,GreaterDepth:()=>Da,GreaterEqualCompare:()=>td,GreaterEqualDepth:()=>La,GreaterEqualStencilFunc:()=>bg,GreaterStencilFunc:()=>Mg,GridHelper:()=>Eu,Group:()=>ri,HTMLTexture:()=>$h,HalfFloatType:()=>qe,HemisphereLight:()=>ui,HemisphereLightHelper:()=>Au,IcosahedronGeometry:()=>ci,ImageBitmapLoader:()=>su,ImageLoader:()=>ws,ImageUtils:()=>Fa,IncrementStencilOp:()=>dg,IncrementWrapStencilOp:()=>pg,InstancedBufferAttribute:()=>bn,InstancedBufferGeometry:()=>Rl,InstancedInterleavedBuffer:()=>mu,InstancedMesh:()=>We,Int16BufferAttribute:()=>zh,Int32BufferAttribute:()=>kh,Int8BufferAttribute:()=>Fh,IntType:()=>Ol,InterleavedBuffer:()=>ms,InterleavedBufferAttribute:()=>qi,Interpolant:()=>$i,InterpolateBezier:()=>Ih,InterpolateDiscrete:()=>ao,InterpolateLinear:()=>Ua,InterpolateSmooth:()=>ba,InterpolationSamplingMode:()=>Ug,InterpolationSamplingType:()=>Ng,InvertStencilOp:()=>gg,KeepStencilOp:()=>wa,KeyframeTrack:()=>wn,LOD:()=>za,LatheGeometry:()=>sl,Layers:()=>ar,LessCompare:()=>vp,LessDepth:()=>Pa,LessEqualCompare:()=>ju,LessEqualDepth:()=>ir,LessEqualStencilFunc:()=>yg,LessStencilFunc:()=>_g,Light:()=>hi,LightProbe:()=>El,LightShadow:()=>gr,Line:()=>li,Line3:()=>Su,LineBasicMaterial:()=>je,LineCurve:()=>wo,LineCurve3:()=>Qa,LineDashedMaterial:()=>_l,LineLoop:()=>Va,LineSegments:()=>Bn,LinearFilter:()=>Ce,LinearInterpolant:()=>Io,LinearMipMapLinearFilter:()=>ng,LinearMipMapNearestFilter:()=>eg,LinearMipmapLinearFilter:()=>Jn,LinearMipmapNearestFilter:()=>Vo,LinearSRGBColorSpace:()=>co,LinearToneMapping:()=>Es,LinearTransfer:()=>ho,Loader:()=>sn,LoaderUtils:()=>Fo,LoadingManager:()=>No,LoopOnce:()=>cp,LoopPingPong:()=>up,LoopRepeat:()=>hp,MOUSE:()=>Z0,Material:()=>Ve,MaterialBlending:()=>Q0,MaterialLoader:()=>Cl,MathUtils:()=>Ap,Matrix2:()=>Mu,Matrix3:()=>jt,Matrix4:()=>Gt,MaxEquation:()=>qf,Mesh:()=>ne,MeshBasicMaterial:()=>Yn,MeshDepthMaterial:()=>Ro,MeshDistanceMaterial:()=>Po,MeshLambertMaterial:()=>gl,MeshMatcapMaterial:()=>xl,MeshNormalMaterial:()=>ml,MeshPhongMaterial:()=>fl,MeshPhysicalMaterial:()=>dl,MeshStandardMaterial:()=>me,MeshToonMaterial:()=>pl,MinEquation:()=>Xf,MirroredRepeatWrapping:()=>oo,MixOperation:()=>op,MultiplyBlending:()=>Hu,MultiplyOperation:()=>zo,NearestFilter:()=>Ue,NearestMipMapLinearFilter:()=>tg,NearestMipMapNearestFilter:()=>j0,NearestMipmapLinearFilter:()=>Sr,NearestMipmapNearestFilter:()=>Xu,NeutralToneMapping:()=>Is,NeverCompare:()=>_p,NeverDepth:()=>Ca,NeverStencilFunc:()=>xg,NoBlending:()=>Si,NoColorSpace:()=>Ei,NoNormalPacking:()=>ag,NoToneMapping:()=>kn,NormalAnimationBlendMode:()=>vc,NormalBlending:()=>Mr,NormalGAPacking:()=>cg,NormalRGPacking:()=>lg,NotEqualCompare:()=>Sp,NotEqualDepth:()=>Na,NotEqualStencilFunc:()=>Sg,NumberKeyframeTrack:()=>pr,Object3D:()=>_e,ObjectLoader:()=>iu,ObjectSpaceNormalMap:()=>gp,OctahedronGeometry:()=>ys,OneFactor:()=>Zf,OneMinusConstantAlphaFactor:()=>rp,OneMinusConstantColorFactor:()=>ip,OneMinusDstAlphaFactor:()=>Qf,OneMinusDstColorFactor:()=>tp,OneMinusSrcAlphaFactor:()=>Wu,OneMinusSrcColorFactor:()=>Jf,OrthographicCamera:()=>Ji,PCFShadowMap:()=>Ts,PCFSoftShadowMap:()=>Gf,PMREMGenerator:()=>pi,Path:()=>_s,PerspectiveCamera:()=>Ie,Plane:()=>Wn,PlaneGeometry:()=>dn,PlaneHelper:()=>Du,PointLight:()=>wl,PointLightHelper:()=>Tu,Points:()=>Wa,PointsMaterial:()=>yo,PolarGridHelper:()=>Cu,PolyhedronGeometry:()=>Zi,PositionalAudio:()=>lu,PropertyBinding:()=>Me,PropertyMixer:()=>Dl,QuadraticBezierCurve:()=>To,QuadraticBezierCurve3:()=>Ao,Quaternion:()=>Se,QuaternionKeyframeTrack:()=>mr,QuaternionLinearInterpolant:()=>Sl,R11_EAC_Format:()=>Jl,RED_GREEN_RGTC2_Format:()=>Jo,RED_RGTC1_Format:()=>gc,REVISION:()=>Bf,RG11_EAC_Format:()=>$o,RGBADepthPacking:()=>sg,RGBAFormat:()=>Mn,RGBAIntegerFormat:()=>Hl,RGBA_ASTC_10x10_Format:()=>hc,RGBA_ASTC_10x5_Format:()=>ac,RGBA_ASTC_10x6_Format:()=>lc,RGBA_ASTC_10x8_Format:()=>cc,RGBA_ASTC_12x10_Format:()=>uc,RGBA_ASTC_12x12_Format:()=>dc,RGBA_ASTC_4x4_Format:()=>jl,RGBA_ASTC_5x4_Format:()=>tc,RGBA_ASTC_5x5_Format:()=>ec,RGBA_ASTC_6x5_Format:()=>nc,RGBA_ASTC_6x6_Format:()=>ic,RGBA_ASTC_8x5_Format:()=>sc,RGBA_ASTC_8x6_Format:()=>rc,RGBA_ASTC_8x8_Format:()=>oc,RGBA_BPTC_Format:()=>fc,RGBA_ETC2_EAC_Format:()=>$l,RGBA_PVRTC_2BPPV1_Format:()=>ql,RGBA_PVRTC_4BPPV1_Format:()=>Xl,RGBA_S3TC_DXT1_Format:()=>qo,RGBA_S3TC_DXT3_Format:()=>Yo,RGBA_S3TC_DXT5_Format:()=>Zo,RGBDepthPacking:()=>rg,RGBFormat:()=>Ku,RGBIntegerFormat:()=>ig,RGB_BPTC_SIGNED_Format:()=>pc,RGB_BPTC_UNSIGNED_Format:()=>mc,RGB_ETC1_Format:()=>Yl,RGB_ETC2_Format:()=>Zl,RGB_PVRTC_2BPPV1_Format:()=>Wl,RGB_PVRTC_4BPPV1_Format:()=>Vl,RGB_S3TC_DXT1_Format:()=>Xo,RGDepthPacking:()=>og,RGFormat:()=>Qi,RGIntegerFormat:()=>Gl,RawShaderMaterial:()=>Ss,Ray:()=>Yi,Raycaster:()=>xu,RectAreaLight:()=>Al,RedFormat:()=>kl,RedIntegerFormat:()=>Wo,ReinhardToneMapping:()=>Cs,RenderObjectRefreshType:()=>Og,RenderTarget:()=>po,RenderTarget3D:()=>du,RepeatWrapping:()=>ro,ReplaceStencilOp:()=>ug,ReverseSubtractEquation:()=>Wf,RingGeometry:()=>rl,SIGNED_R11_EAC_Format:()=>Kl,SIGNED_RED_GREEN_RGTC2_Format:()=>_c,SIGNED_RED_RGTC1_Format:()=>xc,SIGNED_RG11_EAC_Format:()=>Ql,SRGBColorSpace:()=>nn,SRGBTransfer:()=>xe,Scene:()=>Sn,ShaderChunk:()=>oe,ShaderLib:()=>fi,ShaderMaterial:()=>Xe,ShadowMaterial:()=>ul,Shape:()=>vs,ShapeGeometry:()=>ol,ShapePath:()=>Fu,ShapeUtils:()=>Xn,ShortType:()=>Yu,Skeleton:()=>Ga,SkeletonHelper:()=>wu,SkinnedMesh:()=>ka,Source:()=>Lh,Sphere:()=>Ne,SphereGeometry:()=>Ms,Spherical:()=>vu,SphericalHarmonics3:()=>Uo,SplineCurve:()=>Eo,SpotLight:()=>bl,SpotLightHelper:()=>bu,Sprite:()=>Ba,SpriteMaterial:()=>xo,SrcAlphaFactor:()=>Vu,SrcAlphaSaturateFactor:()=>ep,SrcColorFactor:()=>$f,StaticCopyUsage:()=>Rg,StaticDrawUsage:()=>yc,StaticReadUsage:()=>Ag,StereoCamera:()=>ou,StreamCopyUsage:()=>Ig,StreamDrawUsage:()=>Tg,StreamReadUsage:()=>Cg,StringKeyframeTrack:()=>Mi,SubtractEquation:()=>Vf,SubtractiveBlending:()=>Gu,TOUCH:()=>$0,TangentSpaceNormalMap:()=>Ai,TetrahedronGeometry:()=>al,Texture:()=>Fe,TextureLoader:()=>nu,TextureSource:()=>On,TextureUtils:()=>Bu,Timer:()=>vr,TimestampQuery:()=>Dg,TorusGeometry:()=>fr,TorusKnotGeometry:()=>ll,Triangle:()=>si,TriangleFanDrawMode:()=>pp,TriangleStripDrawMode:()=>fp,TrianglesDrawMode:()=>dp,TubeGeometry:()=>cl,UVMapping:()=>Fl,Uint16BufferAttribute:()=>mo,Uint32BufferAttribute:()=>go,Uint8BufferAttribute:()=>Oh,Uint8ClampedBufferAttribute:()=>Bh,Uniform:()=>fu,UniformsGroup:()=>pu,UniformsLib:()=>Rt,UniformsUtils:()=>Ci,UnsignedByteType:()=>Tn,UnsignedInt101111Type:()=>$u,UnsignedInt248Type:()=>Ds,UnsignedInt5999Type:()=>Zu,UnsignedIntType:()=>An,UnsignedShort4444Type:()=>Bl,UnsignedShort5551Type:()=>zl,UnsignedShortType:()=>br,VSMShadowMap:()=>yr,Vector2:()=>nt,Vector3:()=>L,Vector4:()=>pe,VectorKeyframeTrack:()=>Do,VideoFrameTexture:()=>Wh,VideoTexture:()=>Xa,WebGL3DRenderTarget:()=>Nh,WebGLArrayRenderTarget:()=>Dh,WebGLCoordinateSystem:()=>In,WebGLCubeRenderTarget:()=>Qo,WebGLRenderTarget:()=>Re,WebGLRenderer:()=>bc,WebGLUtils:()=>Ix,WebGPUCoordinateSystem:()=>fs,WebXRController:()=>lr,WireframeGeometry:()=>hl,WrapAroundEnding:()=>lo,ZeroCurvatureEnding:()=>us,ZeroFactor:()=>Yf,ZeroSlopeEnding:()=>ds,ZeroStencilOp:()=>hg,createCanvasElement:()=>bp,error:()=>Ht,getConsoleFunction:()=>kg,log:()=>fo,setConsoleFunction:()=>zg,warn:()=>Tt,warnOnce:()=>xi});function Mx(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function I1(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,f)=>p.start-f.start);let d=0;for(let p=1;p<u.length;p++){let f=u[d],x=u[p];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,f=u.length;p<f;p++){let x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}function db(s,t,e,n,i,r){let o=new lt(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function p(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let M=_.backgroundBlurriness>0;y=t.get(y,M)}return y}function f(_){let y=!1,M=p(_);M===null?m(o,a):M&&M.isColor&&(m(M,1),y=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,y){let M=p(y);M&&M.isCubeTexture?(c===void 0&&(c=new ne(new Oe(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:wr(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ub.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sx),c.material.toneMapped=he.getTransfer(M.colorSpace)!==xe,(h!==M||u!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ne(new dn(2,2),new Xe({name:"BackgroundMaterial",uniforms:wr(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=he.getTransfer(M.colorSpace)!==xe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,y){_.getRGB(rd,Cp(s)),e.buffers.color.setClear(rd.r,rd.g,rd.b,y,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:f,addToRenderList:x,dispose:g}}function fb(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(R,D,z,N,O){let V=!1,G=u(R,N,z,D);r!==G&&(r=G,c(r.object)),V=p(R,N,z,O),V&&f(R,N,z,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,M(R,D,z,N),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(R){return s.bindVertexArray(R)}function h(R){return s.deleteVertexArray(R)}function u(R,D,z,N){let O=N.wireframe===!0,V=n[D.id];V===void 0&&(V={},n[D.id]=V);let G=R.isInstancedMesh===!0?R.id:0,rt=V[G];rt===void 0&&(rt={},V[G]=rt);let W=rt[z.id];W===void 0&&(W={},rt[z.id]=W);let Z=W[O];return Z===void 0&&(Z=d(l()),W[O]=Z),Z}function d(R){let D=[],z=[],N=[];for(let O=0;O<e;O++)D[O]=0,z[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:N,object:R,attributes:{},index:null}}function p(R,D,z,N){let O=r.attributes,V=D.attributes,G=0,rt=z.getAttributes();for(let W in rt)if(rt[W].location>=0){let it=O[W],At=V[W];if(At===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(At=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(At=R.instanceColor)),it===void 0||it.attribute!==At||At&&it.data!==At.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function f(R,D,z,N){let O={},V=D.attributes,G=0,rt=z.getAttributes();for(let W in rt)if(rt[W].location>=0){let it=V[W];it===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(it=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(it=R.instanceColor));let At={};At.attribute=it,it&&it.data&&(At.data=it.data),O[W]=At,G++}r.attributes=O,r.attributesNum=G,r.index=N}function x(){let R=r.newAttributes;for(let D=0,z=R.length;D<z;D++)R[D]=0}function m(R){g(R,0)}function g(R,D){let z=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;z[R]=1,N[R]===0&&(s.enableVertexAttribArray(R),N[R]=1),O[R]!==D&&(s.vertexAttribDivisor(R,D),O[R]=D)}function _(){let R=r.newAttributes,D=r.enabledAttributes;for(let z=0,N=D.length;z<N;z++)D[z]!==R[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function y(R,D,z,N,O,V,G){G===!0?s.vertexAttribIPointer(R,D,z,O,V):s.vertexAttribPointer(R,D,z,N,O,V)}function M(R,D,z,N){x();let O=N.attributes,V=z.getAttributes(),G=D.defaultAttributeValues;for(let rt in V){let W=V[rt];if(W.location>=0){let Z=O[rt];if(Z===void 0&&(rt==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),rt==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor)),Z!==void 0){let it=Z.normalized,At=Z.itemSize,Ut=t.get(Z);if(Ut===void 0)continue;let q=Ut.buffer,Q=Ut.type,at=Ut.bytesPerElement,Et=Q===s.INT||Q===s.UNSIGNED_INT||Z.gpuType===Ol;if(Z.isInterleavedBufferAttribute){let xt=Z.data,Vt=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,ve=Z.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Ct=0;Ct<W.locationSize;Ct++)g(W.location+Ct,xt.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Ct=0;Ct<W.locationSize;Ct++)m(W.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,q);for(let Ct=0;Ct<W.locationSize;Ct++)y(W.location+Ct,At/W.locationSize,Q,it,Vt*at,(ve+At/W.locationSize*Ct)*at,Et)}else{if(Z.isInstancedBufferAttribute){for(let xt=0;xt<W.locationSize;xt++)g(W.location+xt,Z.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let xt=0;xt<W.locationSize;xt++)m(W.location+xt);s.bindBuffer(s.ARRAY_BUFFER,q);for(let xt=0;xt<W.locationSize;xt++)y(W.location+xt,At/W.locationSize,Q,it,At*at,At/W.locationSize*xt*at,Et)}}else if(G!==void 0){let it=G[rt];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(W.location,it);break;case 3:s.vertexAttrib3fv(W.location,it);break;case 4:s.vertexAttrib4fv(W.location,it);break;default:s.vertexAttrib1fv(W.location,it)}}}}_()}function b(){C();for(let R in n){let D=n[R];for(let z in D){let N=D[z];for(let O in N){let V=N[O];for(let G in V)h(V[G].object),delete V[G];delete N[O]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;let D=n[R.id];for(let z in D){let N=D[z];for(let O in N){let V=N[O];for(let G in V)h(V[G].object),delete V[G];delete N[O]}}delete n[R.id]}function v(R){for(let D in n){let z=n[D];for(let N in z){let O=z[N];if(O[R.id]===void 0)continue;let V=O[R.id];for(let G in V)h(V[G].object),delete V[G];delete O[R.id]}}}function S(R){for(let D in n){let z=n[D],N=R.isInstancedMesh===!0?R.id:0,O=z[N];if(O!==void 0){for(let V in O){let G=O[V];for(let rt in G)h(G[rt].object),delete G[rt];delete O[V]}delete z[N],Object.keys(z).length===0&&delete n[D]}}}function C(){A(),o=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function pb(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function mb(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(v){return!(v!==Mn&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let S=v===qe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==Tn&&v!==un&&!S&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Tt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Tt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:M,maxSamples:b,samples:w}}function gb(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Wn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let f=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||f===null||f.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,y=_*4,M=g.clippingState||null;l.value=M,M=h(f,d,y,p);for(let b=0;b!==y;++b)M[b]=e[b];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,f){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,f!==!0||m===null){let g=p+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,M=p;y!==x;++y,M+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function ex(s,t,e){return new Qo(s,{minFilter:Jn,generateMipmaps:t,type:qe,colorSpace:co,depthBuffer:e})}function wc(s,t,e){return new Xe({name:s,uniforms:t,vertexShader:oe.cube_vert,fragmentShader:e,side:fn,blending:Si,depthTest:!1,depthWrite:!1})}function Sb(){return wc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bx}u

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
	`)}function bb(){return wc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:wx}},`

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
	`)}function wb(){return wc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${_b}
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
	`)}function nx(){return wc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ix(){return wc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Tb(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,p=!1){return d==null?null:p?o(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===Go||p===Ho)if(t.has(d)){let f=t.get(d).texture;return a(f,d.mapping)}else{let f=d.image;if(f&&f.height>0){let x=new Qo(f.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,f=p===Go||p===Ho,x=p===wi||p===Ls;if(f||x){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new pi(s)),m=f?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return f&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new pi(s)),m=f?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,p){return p===Go?d.mapping=wi:p===Ho&&(d.mapping=Ls),d}function l(d){let p=0,f=6;for(let x=0;x<f;x++)d[x]!==void 0&&p++;return p===f}function c(d){let p=d.target;p.removeEventListener("dispose",c);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function h(d){let p=d.target;p.removeEventListener("dispose",h);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Ab(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&xi("WebGLRenderer: "+n+" extension not supported."),i}}}function Eb(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(f=>delete i[f]);function a(f){l(f.target)}function l(f){f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete i[f.id],o.unregister(f);let x=r.get(f);x&&(t.remove(x),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function c(f,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(f){let x=f.attributes;for(let m in x)t.update(x[m],s.ARRAY_BUFFER)}function u(f){let x=f.index,m=f.attributes.position,g=0;if(m===void 0)return;let _=x!==null?x.array.length:m.array.length/3-1,y=m.count>=65535?go:mo,M=new y(Math.ceil(_/3)*6,1),b=M.array;if(x!==null){let v=x.array;g=x.version;for(let S=0,C=0;S<_;S+=3){let A=v[S+0],R=v[S+1],D=v[S+2];b[C++]=A,b[C++]=R,b[C++]=R,b[C++]=D,b[C++]=D,b[C++]=A}}else{g=m.version;for(let v=0,S=0;v<_;v+=3){let C=v+0,A=v+1,R=v+2;b[S++]=C,b[S++]=A,b[S++]=A,b[S++]=R,b[S++]=R,b[S++]=C}}M.version=g;let w=r.get(f);w&&t.remove(w),r.set(f,M)}function d(f){let x=r.get(f);if(x){let m=f.index;m!==null&&x.version<m.version&&u(f)}else u(f);return r.get(f)}function p(){for(let f in i){let x=i[f].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:p}}function Cb(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,u*o,p),e.update(d,n,p))}function h(u,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let x=0;for(let m=0;m<p;m++)x+=d[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Rb(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Ht("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Pb(s,t,e){let n=new WeakMap,i=new pe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let C=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;p===!0&&(y=1),f===!0&&(y=2),x===!0&&(y=3);let M=a.attributes.position.count*y,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*b*4*u),v=new rr(w,M,b,u);v.type=un,v.needsUpdate=!0;let S=y*4;for(let A=0;A<u;A++){let R=m[A],D=g[A],z=_[A],N=M*b*4*A;for(let O=0;O<R.count;O++){let V=O*S;p===!0&&(i.fromBufferAttribute(R,O),w[N+V+0]=i.x,w[N+V+1]=i.y,w[N+V+2]=i.z,w[N+V+3]=0),f===!0&&(i.fromBufferAttribute(D,O),w[N+V+4]=i.x,w[N+V+5]=i.y,w[N+V+6]=i.z,w[N+V+7]=0),x===!0&&(i.fromBufferAttribute(z,O),w[N+V+8]=i.x,w[N+V+9]=i.y,w[N+V+10]=i.z,w[N+V+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:v,size:new nt(M,b)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let f=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",f),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ib(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}function Db(s,t,e,n,i,r){let o=new Re(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new $t;h.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new yt([0,2,0,0,2,0],2));let u=new Ss({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ne(h,u),p=new Ji(-1,1,1,-1,0,1),f=null,x=null,m=!1,g,_=null,y=[],M=!1;this.setSize=function(b,w){o.setSize(b,w),a!==null&&a.setSize(b,w),l!==null&&l.setSize(b,w);for(let v=0;v<y.length;v++){let S=y[v];S.setSize&&S.setSize(b,w)}},this.setEffects=function(b){y=b,M=y.length>0&&y[0].isRenderPass===!0;let w=o.width,v=o.height;y.length>0&&a===null&&(a=new Re(w,v,{type:qe,depthBuffer:!1,stencilBuffer:!1}),l=new Re(w,v,{type:qe,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&y.some(C=>C.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Zn(w,v),r===!0&&(c.format=Ti,c.type=Ds)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let C=0;C<y.length;C++){let A=y[C];A.setSize&&A.setSize(w,v),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,w){if(m||b.toneMapping===kn&&y.length===0)return!1;if(_=w,w!==null){let v=w.width,S=w.height;(o.width!==v||o.height!==S)&&this.setSize(v,S)}return M===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=kn,!0},this.hasRenderPass=function(){return M},this.end=function(b,w){b.toneMapping=g,m=!0;let v=o,S=a;for(let C=0;C<y.length;C++){let A=y[C];A.enabled!==!1&&(A.render(b,S,v,w),A.needsSwap!==!1&&(v=S,S=S===a?l:a))}if(f!==b.outputColorSpace||x!==b.toneMapping){f=b.outputColorSpace,x=b.toneMapping,u.defines={},he.getTransfer(f)===xe&&(u.defines.SRGB_TRANSFER="");let C=Lb[x];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,b.setRenderTarget(_),b.render(d,p),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}function jo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=sx[i];if(r===void 0&&(r=new Float32Array(i),sx[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ze(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ad(s,t){let e=rx[t];e===void 0&&(e=new Int32Array(t),rx[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Nb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ub(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2fv(this.addr,t),Ze(e,t)}}function Fb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;s.uniform3fv(this.addr,t),Ze(e,t)}}function Ob(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4fv(this.addr,t),Ze(e,t)}}function Bb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;lx.set(n),s.uniformMatrix2fv(this.addr,!1,lx),Ze(e,n)}}function zb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;ax.set(n),s.uniformMatrix3fv(this.addr,!1,ax),Ze(e,n)}}function kb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;ox.set(n),s.uniformMatrix4fv(this.addr,!1,ox),Ze(e,n)}}function Gb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Hb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2iv(this.addr,t),Ze(e,t)}}function Vb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;s.uniform3iv(this.addr,t),Ze(e,t)}}function Wb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4iv(this.addr,t),Ze(e,t)}}function Xb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function qb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2uiv(this.addr,t),Ze(e,t)}}function Yb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;s.uniform3uiv(this.addr,t),Ze(e,t)}}function Zb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4uiv(this.addr,t),Ze(e,t)}}function ld(s){return s.version===0&&(s.compareFunction=ed,s.needsUpdate=!0),s}function $b(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=ld(Ax):r=Tx,e.setTexture2D(t||r,i)}function Jb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Rx,i)}function Kb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=ld(Ex):r=Px,e.setTextureCube(t||r,i)}function Qb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Cx,i)}function jb(s){switch(s){case 5126:return Nb;case 35664:return Ub;case 35665:return Fb;case 35666:return Ob;case 35674:return Bb;case 35675:return zb;case 35676:return kb;case 5124:case 35670:return Gb;case 35667:case 35671:return Hb;case 35668:case 35672:return Vb;case 35669:case 35673:return Wb;case 5125:return Xb;case 36294:return qb;case 36295:return Yb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return Kb;case 36289:case 36303:case 36311:case 36292:return Qb}}function tw(s,t){s.uniform1fv(this.addr,t)}function ew(s,t){let e=jo(t,this.size,2);s.uniform2fv(this.addr,e)}function nw(s,t){let e=jo(t,this.size,3);s.uniform3fv(this.addr,e)}function iw(s,t){let e=jo(t,this.size,4);s.uniform4fv(this.addr,e)}function sw(s,t){let e=jo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function rw(s,t){let e=jo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ow(s,t){let e=jo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function aw(s,t){s.uniform1iv(this.addr,t)}function lw(s,t){s.uniform2iv(this.addr,t)}function cw(s,t){s.uniform3iv(this.addr,t)}function hw(s,t){s.uniform4iv(this.addr,t)}function uw(s,t){s.uniform1uiv(this.addr,t)}function dw(s,t){s.uniform2uiv(this.addr,t)}function fw(s,t){s.uniform3uiv(this.addr,t)}function pw(s,t){s.uniform4uiv(this.addr,t)}function mw(s,t,e){let n=this.cache,i=t.length,r=ad(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),Ze(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=ld(Ax):o=Tx;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function gw(s,t,e){let n=this.cache,i=t.length,r=ad(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Rx,r[o])}function xw(s,t,e){let n=this.cache,i=t.length,r=ad(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),Ze(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=ld(Ex):o=Px;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function _w(s,t,e){let n=this.cache,i=t.length,r=ad(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Cx,r[o])}function vw(s){switch(s){case 5126:return tw;case 35664:return ew;case 35665:return nw;case 35666:return iw;case 35674:return sw;case 35675:return rw;case 35676:return ow;case 5124:case 35670:return aw;case 35667:case 35671:return lw;case 35668:case 35672:return cw;case 35669:case 35673:return hw;case 5125:return uw;case 36294:return dw;case 36295:return fw;case 36296:return pw;case 35678:case 36198:case 36298:case 36306:case 35682:return mw;case 35679:case 36299:case 36307:return gw;case 35680:case 36300:case 36308:case 36293:return xw;case 36289:case 36303:case 36311:case 36292:return _w}}function cx(s,t){s.seq.push(t),s.map[t.id]=t}function yw(s,t,e){let n=s.name,i=n.length;for(Bp.lastIndex=0;;){let r=Bp.exec(n),o=Bp.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){cx(e,c===void 0?new kp(a,s,t):new Gp(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Hp(a),cx(e,u)),e=u}}}function hx(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}function bw(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function ww(s){he._getMatrix(ux,he.workingColorSpace,s);let t=`mat3( ${ux.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(s)){case ho:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Tt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function dx(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+bw(s.getShaderSource(t),a)}else return r}function Tw(s,t){let e=ww(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function Ew(s,t){let e=Aw[t];return e===void 0?(Tt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Cw(){he.getLuminanceCoefficients(od);let s=od.x.toFixed(4),t=od.y.toFixed(4),e=od.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sc).join(`
`)}function Pw(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Iw(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Sc(s){return s!==""}function fx(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function px(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Vp(s){return s.replace(Lw,Dw)}function Dw(s,t){let e=oe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Vp(e)}function mx(s){return s.replace(Nw,Uw)}function Uw(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gx(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Ow(s){return Fw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function zw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Bw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Gw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":kw[s.combine]||"ENVMAP_BLENDING_NONE"}function Hw(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ow(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=zw(e),u=Gw(e),d=Rw(e),p=Pw(r),f=i.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Sc).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Sc).join(`
`),m.length>0&&(m+=`
`)):(x=[gx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sc).join(`
`),m=[gx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?oe.tonemapping_pars_fragment:"",e.toneMapping!==kn?Ew("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Tw("linearToOutputTexel",e.outputColorSpace),Cw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sc).join(`
`)),o=Vp(o),o=fx(o,e),o=px(o,e),a=Vp(a),a=fx(a,e),a=px(a,e),o=mx(o),a=mx(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===nd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+x+o,y=g+m+a,M=hx(i,i.VERTEX_SHADER,_),b=hx(i,i.FRAGMENT_SHADER,y);i.attachShader(f,M),i.attachShader(f,b),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function w(A){if(s.debug.checkShaderErrors){let R=i.getProgramInfoLog(f)||"",D=i.getShaderInfoLog(M)||"",z=i.getShaderInfoLog(b)||"",N=R.trim(),O=D.trim(),V=z.trim(),G=!0,rt=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,M,b);else{let W=dx(i,M,"vertex"),Z=dx(i,b,"fragment");Ht("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+W+`
`+Z)}else N!==""?Tt("WebGLProgram: Program Info Log:",N):(O===""||V==="")&&(rt=!1);rt&&(A.diagnostics={runnable:G,programLog:N,vertexShader:{log:O,prefix:x},fragmentShader:{log:V,prefix:m}})}i.deleteShader(M),i.deleteShader(b),v=new Ko(i,f),S=Iw(i,f)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(f,Mw)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sw++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=M,this.fragmentShader=b,this}function Ww(s){return s===Qi||s===$o||s===Jo}function Xw(s,t,e,n,i,r){let o=new ar,a=new Wp,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,S,C,A,R,D){let z=A.fog,N=R.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,G=t.get(v.envMap||O,V),rt=d[v.type],W=n.precision;v.precision!==null&&(W=n.getMaxPrecision(v.precision),W!==v.precision&&Tt("WebGLProgram.getParameters:",v.precision,"not supported, using",W,"instead."));let Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,it=Z!==void 0?Z.length:0,At=0;N.morphAttributes.position!==void 0&&(At=1),N.morphAttributes.normal!==void 0&&(At=2),N.morphAttributes.color!==void 0&&(At=3);let Ut,q,Q,at;if(rt){let It=fi[rt];Ut=It.vertexShader,q=It.fragmentShader}else{Ut=v.vertexShader,q=v.fragmentShader;let It=a.getVertexShaderStage(v),be=a.getFragmentShaderStage(v);a.update(v,It,be),Q=It.id,at=be.id}let Et=s.getRenderTarget(),xt=s.state.buffers.depth.getReversed(),Vt=R.isInstancedMesh===!0,ve=R.isBatchedMesh===!0,Ct=!!v.map,se=!!v.matcap,ue=!!G,st=ue&&G.isPMREMTexture===!0,gt=!!v.aoMap,ft=!!v.lightMap,Nt=!!v.bumpMap&&v.wireframe===!1,pt=!!v.normalMap,te=!!v.displacementMap,zt=!!v.emissiveMap,ae=!!v.metalnessMap,ie=!!v.roughnessMap,k=v.anisotropy>0,I=v.clearcoat>0,$=v.diffuseRoughness>0,ht=v.dispersion>0,Wt=v.retroreflectivity>0,ot=v.iridescence>0,Zt=v.sheen>0,Pt=v.transmission>0,Dt=k&&!!v.anisotropyMap,P=I&&!!v.clearcoatMap,T=I&&!!v.clearcoatNormalMap,B=I&&!!v.clearcoatRoughnessMap,ct=$&&!!v.diffuseRoughnessMap,tt=ot&&!!v.iridescenceMap,dt=ot&&!!v.iridescenceThicknessMap,_t=Zt&&!!v.sheenColorMap,K=Zt&&!!v.sheenRoughnessMap,j=!!v.specularMap,Mt=!!v.specularColorMap,U=!!v.specularIntensityMap,et=Pt&&!!v.transmissionMap,J=Pt&&!!v.thicknessMap,St=!!v.gradientMap,mt=!!v.alphaMap,vt=v.alphaTest>0,Xt=!!v.alphaHash,le=!!v.extensions,ut=kn;v.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(ut=s.toneMapping);let qt=st?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,re={shaderID:rt,shaderType:v.type,shaderName:v.name,vertexShader:Ut,fragmentShader:q,defines:v.defines,customVertexShaderID:Q,customFragmentShaderID:at,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:W,batching:ve,batchingColor:ve&&R._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&R.instanceColor!==null,instancingMorph:Vt&&R.morphTexture!==null,outputColorSpace:Et===null?s.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ct,matcap:se,envMap:ue,envMapMode:ue&&G.mapping,envMapPMREM:st,envMapMaxLod:st?qt.length-1:null,envMapSize:st?qt[0].width:null,aoMap:gt,lightMap:ft,bumpMap:Nt,normalMap:pt,displacementMap:te,emissiveMap:zt,normalMapObjectSpace:pt&&v.normalMapType===gp,normalMapTangentSpace:pt&&v.normalMapType===Ai,packedNormalMap:pt&&v.normalMapType===Ai&&Ww(v.normalMap.format),metalnessMap:ae,roughnessMap:ie,anisotropy:k,anisotropyMap:Dt,clearcoat:I,clearcoatMap:P,clearcoatNormalMap:T,clearcoatRoughnessMap:B,diffuseRoughness:$,diffuseRoughnessMap:ct,dispersion:ht,retroreflection:Wt,iridescence:ot,iridescenceMap:tt,iridescenceThicknessMap:dt,sheen:Zt,sheenColorMap:_t,sheenRoughnessMap:K,specularMap:j,specularColorMap:Mt,specularIntensityMap:U,transmission:Pt,transmissionMap:et,thicknessMap:J,gradientMap:St,opaque:v.transparent===!1&&v.blending===Mr&&v.alphaToCoverage===!1,alphaMap:mt,alphaTest:vt,alphaHash:Xt,combine:v.combine,mapUv:Ct&&p(v.map.channel),aoMapUv:gt&&p(v.aoMap.channel),lightMapUv:ft&&p(v.lightMap.channel),bumpMapUv:Nt&&p(v.bumpMap.channel),normalMapUv:pt&&p(v.normalMap.channel),displacementMapUv:te&&p(v.displacementMap.channel),emissiveMapUv:zt&&p(v.emissiveMap.channel),metalnessMapUv:ae&&p(v.metalnessMap.channel),roughnessMapUv:ie&&p(v.roughnessMap.channel),anisotropyMapUv:Dt&&p(v.anisotropyMap.channel),clearcoatMapUv:P&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:T&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ct&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:K&&p(v.sheenRoughnessMap.channel),specularMapUv:j&&p(v.specularMap.channel),specularColorMapUv:Mt&&p(v.specularColorMap.channel),specularIntensityMapUv:U&&p(v.specularIntensityMap.channel),transmissionMapUv:et&&p(v.transmissionMap.channel),thicknessMapUv:J&&p(v.thicknessMap.channel),alphaMapUv:mt&&p(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(pt||k),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!N.attributes.uv&&(Ct||mt),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&pt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:At,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(It=>It.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:Ct&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===xe,decodeVideoTextureEmissive:zt&&v.emissiveMap.isVideoTexture===!0&&he.getTransfer(v.emissiveMap.colorSpace)===xe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===zn,flipSided:v.side===fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:le&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&v.extensions.multiDraw===!0||ve)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function x(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)S.push(C),S.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(m(S,v),g(S,v),S.push(s.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function m(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function g(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function _(v){let S=d[v.type],C;if(S){let A=fi[S];C=Ci.clone(A.uniforms)}else C=v.uniforms;return C}function y(v,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new Hw(s,S,v,i),c.push(C),h.set(S,C)),C}function M(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function w(){a.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:_,acquireProgram:y,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:w}}function qw(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Yw(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function xx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function _x(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,f,x,m,g){let _=s[t];return _===void 0?(_={id:d.id,object:d,geometry:p,material:f,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},s[t]=_):(_.id=d.id,_.object=d,_.geometry=p,_.material=f,_.materialVariant=o(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=m,_.group=g),t++,_}function l(d,p,f,x,m,g,_){_.reversedDepth===!0&&(m=-m);let y=a(d,p,f,x,m,g);f.transmission>0?n.push(y):f.transparent===!0?i.push(y):e.push(y)}function c(d,p,f,x,m,g){let _=a(d,p,f,x,m,g);f.transmission>0?n.unshift(_):f.transparent===!0?i.unshift(_):e.unshift(_)}function h(d,p){e.length>1&&e.sort(d||Yw),n.length>1&&n.sort(p||xx),i.length>1&&i.sort(p||xx)}function u(){for(let d=t,p=s.length;d<p;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function Zw(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new _x,s.set(n,[o])):i>=r.length?(o=new _x,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function $w(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new lt};break;case"SpotLight":e={position:new L,direction:new L,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":e={color:new lt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Jw(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}function Qw(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function jw(s){let t=new $w,e=Jw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new Gt,o=new Gt;function a(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,f=0,x=0,m=0,g=0,_=0,y=0,M=0,b=0,w=0,v=0,S=0,C=0,A=0;c.sort(Qw);for(let D=0,z=c.length;D<z;D++){let N=c[D],O=N.color,V=N.intensity,G=N.distance,rt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Qi?rt=N.shadow.map.texture:rt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=O.r*V,u+=O.g*V,d+=O.b*V;else if(N.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(N.sh.coefficients[W],V);A++}else if(N.isSunLight){let W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,it=e.get(N);it.shadowIntensity=Z.intensity,it.shadowBias=Z.bias,it.shadowNormalBias=Z.normalBias,it.shadowRadius=Z.radius,it.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[f]=it,n.sunShadowMap[f]=rt;let At=Z.getViewportCount();for(let Ut=0;Ut<At;Ut++)n.sunShadowMatrix[x+Ut]=Z.getMatrix(Ut),n.sunShadowCascade[x+Ut]=Z._cascadeData[Ut];x+=At,f++}n.sun[p]=W,p++}else if(N.isDirectionalLight){let W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,it=e.get(N);it.shadowIntensity=Z.intensity,it.shadowBias=Z.bias,it.shadowNormalBias=Z.normalBias,it.shadowRadius=Z.radius,it.shadowMapSize=Z.mapSize,n.directionalShadow[m]=it,n.directionalShadowMap[m]=rt,n.directionalShadowMatrix[m]=N.shadow.matrix,b++}n.directional[m]=W,m++}else if(N.isSpotLight){let W=t.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(O).multiplyScalar(V),W.distance=G,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,n.spot[_]=W;let Z=N.shadow;if(N.map&&(n.spotLightMap[S]=N.map,S++,Z.updateMatrices(N),N.castShadow&&C++),n.spotLightMatrix[_]=Z.matrix,N.castShadow){let it=e.get(N);it.shadowIntensity=Z.intensity,it.shadowBias=Z.bias,it.shadowNormalBias=Z.normalBias,it.shadowRadius=Z.radius,it.shadowMapSize=Z.mapSize,n.spotShadow[_]=it,n.spotShadowMap[_]=rt,v++}_++}else if(N.isRectAreaLight){let W=t.get(N);W.color.copy(O).multiplyScalar(V),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),n.rectArea[y]=W,y++}else if(N.isPointLight){let W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){let Z=N.shadow,it=e.get(N);it.shadowIntensity=Z.intensity,it.shadowBias=Z.bias,it.shadowNormalBias=Z.normalBias,it.shadowRadius=Z.radius,it.shadowMapSize=Z.mapSize,it.shadowCameraNear=Z.camera.near,it.shadowCameraFar=Z.camera.far,n.pointShadow[g]=it,n.pointShadowMap[g]=rt,n.pointShadowMatrix[g]=N.shadow.matrix,w++}n.point[g]=W,g++}else if(N.isHemisphereLight){let W=t.get(N);W.skyColor.copy(N.color).multiplyScalar(V),W.groundColor.copy(N.groundColor).multiplyScalar(V),n.hemi[M]=W,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.sunLength!==p||R.directionalLength!==m||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==y||R.hemiLength!==M||R.numSunShadows!==f||R.numDirectionalShadows!==b||R.numPointShadows!==w||R.numSpotShadows!==v||R.numSpotMaps!==S||R.numLightProbes!==A)&&(n.sun.length=p,n.directional.length=m,n.spot.length=_,n.rectArea.length=y,n.point.length=g,n.hemi.length=M,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+S-C,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,R.sunLength=p,R.directionalLength=m,R.pointLength=g,R.spotLength=_,R.rectAreaLength=y,R.hemiLength=M,R.numSunShadows=f,R.numDirectionalShadows=b,R.numPointShadows=w,R.numSpotShadows=v,R.numSpotMaps=S,R.numLightProbes=A,n.version=Kw++)}function l(c,h){let u=0,d=0,p=0,f=0,x=0,m=0,g=h.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let M=c[_];if(M.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),u++}else if(M.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),d++}else if(M.isSpotLight){let b=n.spot[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let b=n.point[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),p++}else if(M.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function vx(s){let t=new jw(s),e=[],n=[],i=[];function r(u){h.camera=u,e.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function tT(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new vx(s),t.set(i,[a])):r>=o.length?(a=new vx(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function rT(s,t,e){let n=new vi,i=new nt,r=new nt,o=new pe,a=new Ro,l=new Po,c={},h=e.maxTextureSize,u={[Ki]:fn,[fn]:Ki,[zn]:zn},d=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:eT,fragmentShader:nT}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new $t;f.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ne(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ts;let g=this.type;this.render=function(w,v,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Gf&&(Tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ts);let C=s.getRenderTarget(),A=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Si),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let z=g!==this.type;z&&v.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(O=>O.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,O=w.length;N<O;N++){let V=w[N],G=V.shadow;if(G===void 0){Tt("WebGLShadowMap:",V,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let rt=G.getFrameExtents();i.multiply(rt),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,G.mapSize.y=r.y));let W=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||z===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===yr){if(V.isPointLight){Tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Re(i.x,i.y,{format:Qi,type:qe,minFilter:Ce,magFilter:Ce,generateMipmaps:!1}),G.map.texture.name=V.name+".shadowMap",G.map.depthTexture=new Zn(i.x,i.y,un),G.map.depthTexture.name=V.name+".shadowMapDepth",G.map.depthTexture.format=_i,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ue,G.map.depthTexture.magFilter=Ue}else V.isPointLight?(G.map=new Qo(i.x),G.map.depthTexture=new Mo(i.x,An)):(G.map=new Re(i.x,i.y),G.map.depthTexture=new Zn(i.x,i.y,An)),G.map.depthTexture.name=V.name+".shadowMap",G.map.depthTexture.format=_i,this.type===Ts?(G.map.depthTexture.compareFunction=W?td:ju,G.map.depthTexture.minFilter=Ce,G.map.depthTexture.magFilter=Ce):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ue,G.map.depthTexture.magFilter=Ue);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);let Z=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();V.isPointLight!==!0&&G.updateMatrices(V,S);let it=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:S.layers;for(let At=0;At<Z;At++){let Ut=G.getCamera(At);if(V.isPointLight){let q=G.camera,Q=G.matrix,at=V.distance||q.far;at!==q.far&&(q.far=at,q.updateProjectionMatrix()),Mc.setFromMatrixPosition(V.matrixWorld),q.position.copy(Mc),zp.copy(q.position),zp.add(iT[At]),q.up.copy(sT[At]),q.lookAt(zp),q.updateMatrixWorld(),Q.makeTranslation(-Mc.x,-Mc.y,-Mc.z),yx.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),G._frustum.setFromProjectionMatrix(yx,q.coordinateSystem,q.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,At),s.clear();else{At===0&&(s.setRenderTarget(G.map),s.clear());let q=G.getViewport(At);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),D.viewport(o)}n=G.getFrustum(At),M(v,S,Ut,V,it,this.type)}G.isPointLightShadow!==!0&&this.type===yr&&_(G,S),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(C,A,R)};function _(w,v){let S=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Re(i.x,i.y,{format:Qi,type:qe}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(v,null,S,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(v,null,S,p,x,null)}function y(w,v,S,C){let A=null,R=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)A=R;else if(A=S.isPointLight===!0?l:a,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let D=A.uuid,z=v.uuid,N=c[D];N===void 0&&(N={},c[D]=N);let O=N[z];O===void 0&&(O=A.clone(),N[z]=O,v.addEventListener("dispose",b)),A=O}if(A.visible=v.visible,A.wireframe=v.wireframe,C===yr?A.side=v.shadowSide!==null?v.shadowSide:v.side:A.side=v.shadowSide!==null?v.shadowSide:u[v.side],A.alphaMap=v.alphaMap,A.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,A.map=v.map,A.clipShadows=v.clipShadows,A.clippingPlanes=v.clippingPlanes,A.clipIntersection=v.clipIntersection,A.displacementMap=v.displacementMap,A.displacementScale=v.displacementScale,A.displacementBias=v.displacementBias,A.wireframeLinewidth=v.wireframeLinewidth,A.linewidth=v.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=s.properties.get(A);D.light=S}return A}function M(w,v,S,C,A,R){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===yr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let N=t.update(w),O=w.material;if(Array.isArray(O)){let V=N.groups;for(let G=0,rt=V.length;G<rt;G++){let W=V[G],Z=O[W.materialIndex];if(Z&&Z.visible){let it=y(w,Z,C,R);w.onBeforeShadow(s,w,v,S,N,it,W),s.renderBufferDirect(S,null,N,it,w,W),w.onAfterShadow(s,w,v,S,N,it,W)}}}else if(O.visible){let V=y(w,O,C,R);w.onBeforeShadow(s,w,v,S,N,V,null),s.renderBufferDirect(S,null,N,V,w,null),w.onAfterShadow(s,w,v,S,N,V,null)}}let z=w.children;for(let N=0,O=z.length;N<O;N++)M(z[N],v,S,C,A,R)}function b(w){w.target.removeEventListener("dispose",b);for(let S in c){let C=c[S],A=w.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function oT(s,t){function e(){let U=!1,et=new pe,J=null,St=new pe(0,0,0,0);return{setMask:function(mt){J!==mt&&!U&&(s.colorMask(mt,mt,mt,mt),J=mt)},setLocked:function(mt){U=mt},setClear:function(mt,vt,Xt,le,ut){ut===!0&&(mt*=le,vt*=le,Xt*=le),et.set(mt,vt,Xt,le),St.equals(et)===!1&&(s.clearColor(mt,vt,Xt,le),St.copy(et))},reset:function(){U=!1,J=null,St.set(-1,0,0,0)}}}function n(){let U=!1,et=!1,J=null,St=null,mt=null;return{setReversed:function(vt){if(et!==vt){let Xt=t.get("EXT_clip_control");vt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),et=vt;let le=mt;mt=null,this.setClear(le)}},getReversed:function(){return et},setTest:function(vt){vt?xt(s.DEPTH_TEST):Vt(s.DEPTH_TEST)},setMask:function(vt){J!==vt&&!U&&(s.depthMask(vt),J=vt)},setFunc:function(vt){if(et&&(vt=Vg[vt]),St!==vt){switch(vt){case Ca:s.depthFunc(s.NEVER);break;case Ra:s.depthFunc(s.ALWAYS);break;case Pa:s.depthFunc(s.LESS);break;case ir:s.depthFunc(s.LEQUAL);break;case Ia:s.depthFunc(s.EQUAL);break;case La:s.depthFunc(s.GEQUAL);break;case Da:s.depthFunc(s.GREATER);break;case Na:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}St=vt}},setLocked:function(vt){U=vt},setClear:function(vt){mt!==vt&&(mt=vt,et&&(vt=1-vt),s.clearDepth(vt))},reset:function(){U=!1,J=null,St=null,mt=null,et=!1}}}function i(){let U=!1,et=null,J=null,St=null,mt=null,vt=null,Xt=null,le=null,ut=null;return{setTest:function(qt){U||(qt?xt(s.STENCIL_TEST):Vt(s.STENCIL_TEST))},setMask:function(qt){et!==qt&&!U&&(s.stencilMask(qt),et=qt)},setFunc:function(qt,re,It){(J!==qt||St!==re||mt!==It)&&(s.stencilFunc(qt,re,It),J=qt,St=re,mt=It)},setOp:function(qt,re,It){(vt!==qt||Xt!==re||le!==It)&&(s.stencilOp(qt,re,It),vt=qt,Xt=re,le=It)},setLocked:function(qt){U=qt},setClear:function(qt){ut!==qt&&(s.clearStencil(qt),ut=qt)},reset:function(){U=!1,et=null,J=null,St=null,mt=null,vt=null,Xt=null,le=null,ut=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},u={},d={},p=new WeakMap,f=[],x=null,m=!1,g=null,_=null,y=null,M=null,b=null,w=null,v=null,S=new lt(0,0,0),C=0,A=!1,R=null,D=null,z=null,N=null,O=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,rt=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=rt>=1):W.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=rt>=2);let Z=null,it={},At=s.getParameter(s.SCISSOR_BOX),Ut=s.getParameter(s.VIEWPORT),q=new pe().fromArray(At),Q=new pe().fromArray(Ut);function at(U,et,J,St){let mt=new Uint8Array(4),vt=s.createTexture();s.bindTexture(U,vt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xt=0;Xt<J;Xt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(et,0,s.RGBA,1,1,St,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(et+Xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return vt}let Et={};Et[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),Et[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Et[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xt(s.DEPTH_TEST),o.setFunc(ir),Nt(!1),pt(ku),xt(s.CULL_FACE),gt(Si);function xt(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Vt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function ve(U,et){return d[U]!==et?(s.bindFramebuffer(U,et),d[U]=et,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=et),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=et),!0):!1}function Ct(U,et){let J=f,St=!1;if(U){J=p.get(et),J===void 0&&(J=[],p.set(et,J));let mt=U.textures;if(J.length!==mt.length||J[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,Xt=mt.length;vt<Xt;vt++)J[vt]=s.COLOR_ATTACHMENT0+vt;J.length=mt.length,St=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,St=!0);St&&s.drawBuffers(J)}function se(U){return x!==U?(s.useProgram(U),x=U,!0):!1}let ue={[As]:s.FUNC_ADD,[Vf]:s.FUNC_SUBTRACT,[Wf]:s.FUNC_REVERSE_SUBTRACT};ue[Xf]=s.MIN,ue[qf]=s.MAX;let st={[Yf]:s.ZERO,[Zf]:s.ONE,[$f]:s.SRC_COLOR,[Vu]:s.SRC_ALPHA,[ep]:s.SRC_ALPHA_SATURATE,[jf]:s.DST_COLOR,[Kf]:s.DST_ALPHA,[Jf]:s.ONE_MINUS_SRC_COLOR,[Wu]:s.ONE_MINUS_SRC_ALPHA,[tp]:s.ONE_MINUS_DST_COLOR,[Qf]:s.ONE_MINUS_DST_ALPHA,[np]:s.CONSTANT_COLOR,[ip]:s.ONE_MINUS_CONSTANT_COLOR,[sp]:s.CONSTANT_ALPHA,[rp]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(U,et,J,St,mt,vt,Xt,le,ut,qt){if(U===Si){m===!0&&(Vt(s.BLEND),m=!1);return}if(m===!1&&(xt(s.BLEND),m=!0),U!==Hf){if(U!==g||qt!==A){if((_!==As||b!==As)&&(s.blendEquation(s.FUNC_ADD),_=As,b=As),qt)switch(U){case Mr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bo:s.blendFunc(s.ONE,s.ONE);break;case Gu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ht("WebGLState: Invalid blending: ",U);break}else switch(U){case Mr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Gu:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hu:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",U);break}y=null,M=null,w=null,v=null,S.set(0,0,0),C=0,g=U,A=qt}return}mt=mt||et,vt=vt||J,Xt=Xt||St,(et!==_||mt!==b)&&(s.blendEquationSeparate(ue[et],ue[mt]),_=et,b=mt),(J!==y||St!==M||vt!==w||Xt!==v)&&(s.blendFuncSeparate(st[J],st[St],st[vt],st[Xt]),y=J,M=St,w=vt,v=Xt),(le.equals(S)===!1||ut!==C)&&(s.blendColor(le.r,le.g,le.b,ut),S.copy(le),C=ut),g=U,A=!1}function ft(U,et){U.side===zn?Vt(s.CULL_FACE):xt(s.CULL_FACE);let J=U.side===fn;et&&(J=!J),Nt(J),U.blending===Mr&&U.transparent===!1?gt(Si):gt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let St=U.stencilWrite;a.setTest(St),St&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),zt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?xt(s.SAMPLE_ALPHA_TO_COVERAGE):Vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(U){R!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),R=U)}function pt(U){U!==zf?(xt(s.CULL_FACE),U!==D&&(U===ku?s.cullFace(s.BACK):U===kf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Vt(s.CULL_FACE),D=U}function te(U){U!==z&&(G&&s.lineWidth(U),z=U)}function zt(U,et,J){U?(xt(s.POLYGON_OFFSET_FILL),(N!==et||O!==J)&&(N=et,O=J,o.getReversed()&&(et=-et,J=-J),s.polygonOffset(et,J))):Vt(s.POLYGON_OFFSET_FILL)}function ae(U){U?xt(s.SCISSOR_TEST):Vt(s.SCISSOR_TEST)}function ie(U){U===void 0&&(U=s.TEXTURE0+V-1),Z!==U&&(s.activeTexture(U),Z=U)}function k(U,et,J){J===void 0&&(Z===null?J=s.TEXTURE0+V-1:J=Z);let St=it[J];St===void 0&&(St={type:void 0,texture:void 0},it[J]=St),(St.type!==U||St.texture!==et)&&(Z!==J&&(s.activeTexture(J),Z=J),s.bindTexture(U,et||Et[U]),St.type=U,St.texture=et)}function I(){let U=it[Z];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{s.compressedTexImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function ht(){try{s.compressedTexImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function Wt(){try{s.texSubImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function ot(){try{s.texSubImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function Zt(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function Pt(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function Dt(){try{s.texStorage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function P(){try{s.texStorage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function T(){try{s.texImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function B(){try{s.texImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function ct(U){return u[U]!==void 0?u[U]:s.getParameter(U)}function tt(U,et){u[U]!==et&&(s.pixelStorei(U,et),u[U]=et)}function dt(U){q.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),q.copy(U))}function _t(U){Q.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Q.copy(U))}function K(U,et){let J=c.get(et);J===void 0&&(J=new WeakMap,c.set(et,J));let St=J.get(U);St===void 0&&(St=s.getUniformBlockIndex(et,U.name),s.uniformBlockBinding(et,St,St),J.set(U,St))}function j(U,et,J){let mt=c.get(et).get(U);l[mt]!==J&&(s.bindBufferBase(s.UNIFORM_BUFFER,mt,J),l[mt]=J)}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,it={},d={},l={},p=new WeakMap,f=[],x=null,m=!1,g=null,_=null,y=null,M=null,b=null,w=null,v=null,S=new lt(0,0,0),C=0,A=!1,R=null,D=null,z=null,N=null,O=null,q.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:xt,disable:Vt,bindFramebuffer:ve,drawBuffers:Ct,useProgram:se,setBlending:gt,setMaterial:ft,setFlipSided:Nt,setCullFace:pt,setLineWidth:te,setPolygonOffset:zt,setScissorTest:ae,activeTexture:ie,bindTexture:k,unbindTexture:I,compressedTexImage2D:$,compressedTexImage3D:ht,texImage2D:T,texImage3D:B,pixelStorei:tt,getParameter:ct,updateUBOMapping:K,uniformBlockBinding:j,texStorage2D:Dt,texStorage3D:P,texSubImage2D:Wt,texSubImage3D:ot,compressedTexSubImage2D:Zt,compressedTexSubImage3D:Pt,scissor:dt,viewport:_t,reset:Mt}}function aT(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap,u=new Set,d,p=new WeakMap,f=new Set,x=new FinalizationRegistry(P=>f.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return m?new OffscreenCanvas(P,T):uo("canvas")}function _(P,T,B){let ct=1,tt=Dt(P);if((tt.width>B||tt.height>B)&&(ct=B/Math.max(tt.width,tt.height)),ct<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let dt=Math.floor(ct*tt.width),_t=Math.floor(ct*tt.height);d===void 0&&(d=g(dt,_t));let K=T?g(dt,_t):d;return K.width=dt,K.height=_t,K.getContext("2d").drawImage(P,0,0,dt,_t),Tt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+dt+"x"+_t+")."),K}else return"data"in P&&Tt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),P;return P}function y(P){return P.generateMipmaps}function M(P){s.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(P,T,B,ct,tt,dt=!1){if(P!==null){if(s[P]!==void 0)return s[P];Tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let _t;ct&&(_t=t.get("EXT_texture_norm16"),_t||Tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=T;if(T===s.RED&&(B===s.FLOAT&&(K=s.R32F),B===s.HALF_FLOAT&&(K=s.R16F),B===s.UNSIGNED_BYTE&&(K=s.R8),B===s.UNSIGNED_SHORT&&_t&&(K=_t.R16_EXT),B===s.SHORT&&_t&&(K=_t.R16_SNORM_EXT)),T===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.R8UI),B===s.UNSIGNED_SHORT&&(K=s.R16UI),B===s.UNSIGNED_INT&&(K=s.R32UI),B===s.BYTE&&(K=s.R8I),B===s.SHORT&&(K=s.R16I),B===s.INT&&(K=s.R32I)),T===s.RG&&(B===s.FLOAT&&(K=s.RG32F),B===s.HALF_FLOAT&&(K=s.RG16F),B===s.UNSIGNED_BYTE&&(K=s.RG8),B===s.UNSIGNED_SHORT&&_t&&(K=_t.RG16_EXT),B===s.SHORT&&_t&&(K=_t.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RG8UI),B===s.UNSIGNED_SHORT&&(K=s.RG16UI),B===s.UNSIGNED_INT&&(K=s.RG32UI),B===s.BYTE&&(K=s.RG8I),B===s.SHORT&&(K=s.RG16I),B===s.INT&&(K=s.RG32I)),T===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGB8UI),B===s.UNSIGNED_SHORT&&(K=s.RGB16UI),B===s.UNSIGNED_INT&&(K=s.RGB32UI),B===s.BYTE&&(K=s.RGB8I),B===s.SHORT&&(K=s.RGB16I),B===s.INT&&(K=s.RGB32I)),T===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),B===s.UNSIGNED_INT&&(K=s.RGBA32UI),B===s.BYTE&&(K=s.RGBA8I),B===s.SHORT&&(K=s.RGBA16I),B===s.INT&&(K=s.RGBA32I)),T===s.RGB&&(B===s.UNSIGNED_SHORT&&_t&&(K=_t.RGB16_EXT),B===s.SHORT&&_t&&(K=_t.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),T===s.RGBA){let j=dt?ho:he.getTransfer(tt);B===s.FLOAT&&(K=s.RGBA32F),B===s.HALF_FLOAT&&(K=s.RGBA16F),B===s.UNSIGNED_BYTE&&(K=j===xe?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&_t&&(K=_t.RGBA16_EXT),B===s.SHORT&&_t&&(K=_t.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(P,T){let B;return P?T===null||T===An||T===Ds?B=s.DEPTH24_STENCIL8:T===un?B=s.DEPTH32F_STENCIL8:T===br&&(B=s.DEPTH24_STENCIL8,Tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===An||T===Ds?B=s.DEPTH_COMPONENT24:T===un?B=s.DEPTH_COMPONENT32F:T===br&&(B=s.DEPTH_COMPONENT16),B}function S(P,T){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ue&&P.minFilter!==Ce?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function C(P){let T=new WeakRef(P);n.get(P).__ref=T,f.add(T),x.register(P,T,T)}function A(P){let T=n.get(P).__ref;T!==void 0&&(f.delete(T),x.unregister(T))}function R(P){z(P.target)}function D(P){N(P.target)}function z(P){P.removeEventListener("dispose",R),A(P),V(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&u.delete(P)}function N(P){P.removeEventListener("dispose",D),A(P),rt(P)}function O(){for(let P of f){let T=P.deref();T!==void 0&&(T.isRenderTarget===!0?N(T):z(T))}f.clear(),u.clear()}function V(P){let T=n.get(P);if(T.__webglInit===void 0)return;let B=P.source,ct=p.get(B);if(ct){let tt=ct[T.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&G(P),Object.keys(ct).length===0&&p.delete(B)}n.remove(P)}function G(P){let T=n.get(P);s.deleteTexture(T.__webglTexture);let B=P.source,ct=p.get(B);delete ct[T.__cacheKey],o.memory.textures--}function rt(P){let T=n.get(P);T.__depthDisposeCallback&&T.__depthDisposeCallback();let B=P.depthTexture;if(B&&B.renderTarget===P&&z(B),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(T.__webglFramebuffer[tt]))for(let dt=0;dt<T.__webglFramebuffer[tt].length;dt++)s.deleteFramebuffer(T.__webglFramebuffer[tt][dt]);else s.deleteFramebuffer(T.__webglFramebuffer[tt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[tt])}else{if(Array.isArray(T.__webglFramebuffer))for(let tt=0;tt<T.__webglFramebuffer.length;tt++)s.deleteFramebuffer(T.__webglFramebuffer[tt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let tt=0;tt<T.__webglColorRenderbuffer.length;tt++)T.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[tt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ct=P.textures;for(let tt=0,dt=ct.length;tt<dt;tt++){let _t=n.get(ct[tt]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),o.memory.textures--),n.remove(ct[tt])}n.remove(P)}let W=0;function Z(){W=0}function it(){return W}function At(P){W=P}function Ut(){let P=W;return P>=i.maxTextures&&Tt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,P}function q(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.mipmapsAutoUpdate),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function Q(P,T){let B=n.get(P);if(P.isVideoTexture&&Zt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&B.__version!==P.version){let ct=P.image;if(ct===null)Tt("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)Tt("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(B,P,T);return}}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+T)}function at(P,T){let B=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){ft(B,P,T);return}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+T)}function Et(P,T){let B=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){ft(B,P,T);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+T)}function xt(P,T){let B=n.get(P);if(P.version>0&&B.__version!==P.version){Nt(B,P,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+T)}let Vt={[ro]:s.REPEAT,[vn]:s.CLAMP_TO_EDGE,[oo]:s.MIRRORED_REPEAT},ve={[Ue]:s.NEAREST,[Xu]:s.NEAREST_MIPMAP_NEAREST,[Sr]:s.NEAREST_MIPMAP_LINEAR,[Ce]:s.LINEAR,[Vo]:s.LINEAR_MIPMAP_NEAREST,[Jn]:s.LINEAR_MIPMAP_LINEAR},Ct={[_p]:s.NEVER,[ed]:s.ALWAYS,[vp]:s.LESS,[ju]:s.LEQUAL,[yp]:s.EQUAL,[td]:s.GEQUAL,[Mp]:s.GREATER,[Sp]:s.NOTEQUAL};function se(P,T){if(T.type===un&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ce||T.magFilter===Vo||T.magFilter===Sr||T.magFilter===Jn||T.minFilter===Ce||T.minFilter===Vo||T.minFilter===Sr||T.minFilter===Jn)&&Tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Vt[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Vt[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Vt[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ve[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ve[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Ct[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ue||T.minFilter!==Sr&&T.minFilter!==Jn||T.type===un&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ue(P,T){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",R),C(T));let ct=T.source,tt=p.get(ct);tt===void 0&&(tt={},p.set(ct,tt));let dt=q(T);if(dt!==P.__cacheKey){tt[dt]===void 0&&(tt[dt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[dt].usedTimes++;let _t=tt[P.__cacheKey];_t!==void 0&&(tt[P.__cacheKey].usedTimes--,_t.usedTimes===0&&G(T)),P.__cacheKey=dt,P.__webglTexture=tt[dt].texture}return B}function st(P,T,B){return Math.floor(Math.floor(P/B)/T)}function gt(P,T,B,ct){let dt=P.updateRanges;if(dt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,B,ct,T.data);else{dt.sort((U,et)=>U.start-et.start);let _t=0;for(let U=1;U<dt.length;U++){let et=dt[_t],J=dt[U],St=et.start+et.count,mt=st(J.start,T.width,4),vt=st(et.start,T.width,4);J.start<=St+1&&mt===vt&&st(J.start+J.count-1,T.width,4)===mt?et.count=Math.max(et.count,J.start+J.count-et.start):(++_t,dt[_t]=J)}dt.length=_t+1;let K=e.getParameter(s.UNPACK_ROW_LENGTH),j=e.getParameter(s.UNPACK_SKIP_PIXELS),Mt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let U=0,et=dt.length;U<et;U++){let J=dt[U],St=Math.floor(J.start/4),mt=Math.ceil(J.count/4),vt=St%T.width,Xt=Math.floor(St/T.width),le=mt,ut=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Xt),e.texSubImage2D(s.TEXTURE_2D,0,vt,Xt,le,ut,B,ct,T.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,K),e.pixelStorei(s.UNPACK_SKIP_PIXELS,j),e.pixelStorei(s.UNPACK_SKIP_ROWS,Mt)}}function ft(P,T,B){let ct=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ct=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ct=s.TEXTURE_3D);let tt=ue(P,T),dt=T.source;e.bindTexture(ct,P.__webglTexture,s.TEXTURE0+B);let _t=n.get(dt);if(dt.version!==_t.__version||tt===!0){if(e.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ut=he.getPrimaries(he.workingColorSpace),qt=T.colorSpace===Ei?null:he.getPrimaries(T.colorSpace),re=T.colorSpace===Ei||ut===qt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let j=_(T.image,!1,i.maxTextureSize);j=Pt(T,j);let Mt=r.convert(T.format,T.colorSpace),U=r.convert(T.type),et=w(T.internalFormat,Mt,U,T.normalized,T.colorSpace,T.isVideoTexture);se(ct,T);let J,St=T.mipmaps,mt=T.isVideoTexture!==!0,vt=_t.__version===void 0||tt===!0,Xt=dt.dataReady,le=S(T,j);if(T.isDepthTexture)et=v(T.format===Ti,T.type),vt&&(mt?e.texStorage2D(s.TEXTURE_2D,1,et,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,et,j.width,j.height,0,Mt,U,null));else if(T.isDataTexture)if(St.length>0){mt&&vt&&e.texStorage2D(s.TEXTURE_2D,le,et,St[0].width,St[0].height);for(let ut=0,qt=St.length;ut<qt;ut++)J=St[ut],mt?Xt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,J.width,J.height,Mt,U,J.data):e.texImage2D(s.TEXTURE_2D,ut,et,J.width,J.height,0,Mt,U,J.data);T.generateMipmaps=!1}else mt?(vt&&e.texStorage2D(s.TEXTURE_2D,le,et,j.width,j.height),Xt&&gt(T,j,Mt,U)):e.texImage2D(s.TEXTURE_2D,0,et,j.width,j.height,0,Mt,U,j.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){mt&&vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,le,et,St[0].width,St[0].height,j.depth);for(let ut=0,qt=St.length;ut<qt;ut++)if(J=St[ut],T.format!==Mn)if(Mt!==null)if(mt){if(Xt)if(T.layerUpdates.size>0){let re=sd(J.width,J.height,T.format,T.type);for(let It of T.layerUpdates){let be=J.data.subarray(It*re/J.data.BYTES_PER_ELEMENT,(It+1)*re/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,It,J.width,J.height,1,Mt,be)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,J.width,J.height,j.depth,Mt,J.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,et,J.width,J.height,j.depth,0,J.data,0,0);else Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?Xt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,J.width,J.height,j.depth,Mt,U,J.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ut,et,J.width,J.height,j.depth,0,Mt,U,J.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{mt&&vt&&e.texStorage2D(s.TEXTURE_2D,le,et,St[0].width,St[0].height);for(let ut=0,qt=St.length;ut<qt;ut++)J=St[ut],T.format!==Mn?Mt!==null?mt?Xt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,J.width,J.height,Mt,J.data):e.compressedTexImage2D(s.TEXTURE_2D,ut,et,J.width,J.height,0,J.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?Xt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,J.width,J.height,Mt,U,J.data):e.texImage2D(s.TEXTURE_2D,ut,et,J.width,J.height,0,Mt,U,J.data)}else if(T.isDataArrayTexture)if(mt){if(vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,le,et,j.width,j.height,j.depth),Xt)if(T.layerUpdates.size>0){let ut=sd(j.width,j.height,T.format,T.type);for(let qt of T.layerUpdates){let re=j.data.subarray(qt*ut/j.data.BYTES_PER_ELEMENT,(qt+1)*ut/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,qt,j.width,j.height,1,Mt,U,re)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Mt,U,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,et,j.width,j.height,j.depth,0,Mt,U,j.data);else if(T.isData3DTexture)mt?(vt&&e.texStorage3D(s.TEXTURE_3D,le,et,j.width,j.height,j.depth),Xt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Mt,U,j.data)):e.texImage3D(s.TEXTURE_3D,0,et,j.width,j.height,j.depth,0,Mt,U,j.data);else if(T.isFramebufferTexture){if(vt)if(mt)e.texStorage2D(s.TEXTURE_2D,le,et,j.width,j.height);else{let ut=j.width,qt=j.height;for(let re=0;re<le;re++)e.texImage2D(s.TEXTURE_2D,re,et,ut,qt,0,Mt,U,null),ut>>=1,qt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let ut=s.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),j.parentNode!==ut){ut.appendChild(j),u.add(T),ut.onpaint=qt=>{let re=qt.changedElements;for(let It of u)re.includes(It.image)&&(It.needsUpdate=!0)},ut.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let re=s.RGBA,It=s.RGBA,be=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,re,It,be,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(St.length>0){if(mt&&vt){let ut=Dt(St[0]);e.texStorage2D(s.TEXTURE_2D,le,et,ut.width,ut.height)}for(let ut=0,qt=St.length;ut<qt;ut++)J=St[ut],mt?Xt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Mt,U,J):e.texImage2D(s.TEXTURE_2D,ut,et,Mt,U,J);T.generateMipmaps=!1}else if(mt){if(vt){let ut=Dt(j);e.texStorage2D(s.TEXTURE_2D,le,et,ut.width,ut.height)}Xt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,U,j)}else e.texImage2D(s.TEXTURE_2D,0,et,Mt,U,j);y(T)&&T.mipmapsAutoUpdate===!0&&M(ct),_t.__version=dt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Nt(P,T,B){if(T.image.length!==6)return;let ct=ue(P,T),tt=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+B);let dt=n.get(tt);if(tt.version!==dt.__version||ct===!0){e.activeTexture(s.TEXTURE0+B);let _t=he.getPrimaries(he.workingColorSpace),K=T.colorSpace===Ei?null:he.getPrimaries(T.colorSpace),j=T.colorSpace===Ei||_t===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let Mt=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,et=[];for(let It=0;It<6;It++)!Mt&&!U?et[It]=_(T.image[It],!0,i.maxCubemapSize):et[It]=U?T.image[It].image:T.image[It],et[It]=Pt(T,et[It]);let J=et[0],St=r.convert(T.format,T.colorSpace),mt=r.convert(T.type),vt=w(T.internalFormat,St,mt,T.normalized,T.colorSpace),Xt=T.isVideoTexture!==!0,le=dt.__version===void 0||ct===!0,ut=tt.dataReady,qt=S(T,J);se(s.TEXTURE_CUBE_MAP,T);let re;if(T.isDepthTexture){if(vt=v(T.format===Ti,T.type),le)if(Xt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,vt,J.width,J.height);else for(let It=0;It<6;It++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,vt,J.width,J.height,0,St,mt,null)}else if(Mt){Xt&&le&&e.texStorage2D(s.TEXTURE_CUBE_MAP,qt,vt,J.width,J.height);for(let It=0;It<6;It++){re=et[It].mipmaps;for(let be=0;be<re.length;be++){let Je=re[be];T.format!==Mn?St!==null?Xt?ut&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,be,0,0,Je.width,Je.height,St,Je.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,be,vt,Je.width,Je.height,0,Je.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,be,0,0,Je.width,Je.height,St,mt,Je.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,be,vt,Je.width,Je.height,0,St,mt,Je.data)}}}else{if(re=T.mipmaps,Xt&&le){re.length>0&&qt++;let It=Dt(et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,qt,vt,It.width,It.height)}for(let It=0;It<6;It++)if(U){Xt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,et[It].width,et[It].height,St,mt,et[It].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,vt,et[It].width,et[It].height,0,St,mt,et[It].data);for(let be=0;be<re.length;be++){let is=re[be].image[It].image;Xt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,be+1,0,0,is.width,is.height,St,mt,is.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,be+1,vt,is.width,is.height,0,St,mt,is.data)}}else{Xt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,St,mt,et[It]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,vt,St,mt,et[It]);for(let be=0;be<re.length;be++){let Je=re[be];Xt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,be+1,0,0,St,mt,Je.image[It]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,be+1,vt,St,mt,Je.image[It])}}}y(T)&&T.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),dt.__version=tt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function pt(P,T,B,ct,tt,dt){let _t=r.convert(B.format,B.colorSpace),K=r.convert(B.type),j=w(B.internalFormat,_t,K,B.normalized,B.colorSpace),Mt=n.get(T),U=n.get(B);if(U.__renderTarget=T,!Mt.__hasExternalTextures){let et=Math.max(1,T.width>>dt),J=Math.max(1,T.height>>dt);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,dt,j,et,J,T.depth,0,_t,K,null):e.texImage2D(tt,dt,j,et,J,0,_t,K,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),ot(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,tt,U.__webglTexture,0,Wt(T)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ct,tt,U.__webglTexture,dt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function te(P,T,B){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){let ct=T.depthTexture,tt=ct&&ct.isDepthTexture?ct.type:null,dt=v(T.stencilBuffer,tt),_t=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ot(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(T),dt,T.width,T.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(T),dt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,dt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,P)}else{let ct=T.textures;for(let tt=0;tt<ct.length;tt++){let dt=ct[tt],_t=r.convert(dt.format,dt.colorSpace),K=r.convert(dt.type),j=w(dt.internalFormat,_t,K,dt.normalized,dt.colorSpace);ot(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(T),j,T.width,T.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(T),j,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,j,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(P,T,B){let ct=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(T.depthTexture);tt.__renderTarget=T;let dt=ct?T.depthTexture.image[0]:T.depthTexture.image;(!tt.__webglTexture||dt.width!==T.width||dt.height!==T.height)&&(dt.width=T.width,dt.height=T.height,T.depthTexture.needsUpdate=!0),ct?xt(T.depthTexture,0):Q(T.depthTexture,0);let _t=tt.__webglTexture,K=Wt(T),j=ct?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,Mt=T.depthTexture.format===Ti?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===_i)ot(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Mt,j,_t,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,Mt,j,_t,0);else if(T.depthTexture.format===Ti)ot(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Mt,j,_t,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,Mt,j,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ae(P){let T=n.get(P),B=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let ct=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ct){let tt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ct.removeEventListener("dispose",tt)};ct.addEventListener("dispose",tt),T.__depthDisposeCallback=tt}T.__boundDepthTexture=ct}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(B)for(let ct=0;ct<6;ct++)zt(T.__webglFramebuffer[ct],P,ct);else P.texture.mipmaps.length>0?zt(T.__webglFramebuffer[0],P,0):zt(T.__webglFramebuffer,P,0);else if(B){T.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ct]),T.__webglDepthbuffer[ct]===void 0)T.__webglDepthbuffer[ct]=s.createRenderbuffer(),te(T.__webglDepthbuffer[ct],P,!1);else{let tt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[ct];s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,dt)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),te(T.__webglDepthbuffer,P,!1);else{let tt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,dt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(P,T,B){let ct=n.get(P);T!==void 0&&pt(ct.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&ae(P)}function k(P){let T=P.texture,B=n.get(P),ct=n.get(T);P.addEventListener("dispose",D),C(P);let tt=P.textures,dt=P.isWebGLCubeRenderTarget===!0,_t=tt.length>1;if(_t||(ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture()),ct.__version=T.version,o.memory.textures++),dt){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(T.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let j=0;j<T.mipmaps.length;j++)B.__webglFramebuffer[K][j]=s.createFramebuffer()}else B.__webglFramebuffer[K]=s.createFramebuffer()}else{if(T.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<T.mipmaps.length;K++)B.__webglFramebuffer[K]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(_t)for(let K=0,j=tt.length;K<j;K++){let Mt=n.get(tt[K]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&ot(P)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<tt.length;K++){let j=tt[K];B.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let Mt=r.convert(j.format,j.colorSpace),U=r.convert(j.type),et=w(j.internalFormat,Mt,U,j.normalized,j.colorSpace,P.isXRRenderTarget===!0),J=Wt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,J,et,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,B.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),te(B.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),se(s.TEXTURE_CUBE_MAP,T);for(let K=0;K<6;K++)if(T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)pt(B.__webglFramebuffer[K][j],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else pt(B.__webglFramebuffer[K],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);y(T)?M(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let K=0,j=tt.length;K<j;K++){let Mt=tt[K],U=n.get(Mt),et=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(et=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(et,U.__webglTexture),se(et,Mt),pt(B.__webglFramebuffer,P,Mt,s.COLOR_ATTACHMENT0+K,et,0),y(Mt)&&M(et)}e.unbindTexture()}else{let K=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(K=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,ct.__webglTexture),se(K,T),T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)pt(B.__webglFramebuffer[j],P,T,s.COLOR_ATTACHMENT0,K,j);else pt(B.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,K,0);y(T)?M(K):T.mipmaps.length>0&&s.texParameteri(K,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&ae(P)}function I(P){let T=P.textures;for(let B=0,ct=T.length;B<ct;B++){let tt=T[B];if(y(tt)&&tt.mipmapsAutoUpdate===!0){let dt=b(P),_t=n.get(tt).__webglTexture;e.bindTexture(dt,_t),M(dt),e.unbindTexture()}}}let $=[];function ht(P){if(P.samples>0){if(ot(P)===!1){let T=P.textures,B=P.width,ct=P.height,tt=s.COLOR_BUFFER_BIT,dt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=n.get(P),K=T.length>1;if(K)for(let Mt=0;Mt<T.length;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Mt=0;Mt<T.length;Mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let U=n.get(T[Mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,U,0)}s.blitFramebuffer(0,0,B,ct,0,0,B,ct,tt,s.NEAREST),l===!0&&($.length=0,$.push(s.COLOR_ATTACHMENT0+Mt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&$.push(dt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let Mt=0;Mt<T.length;Mt++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let U=n.get(T[Mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,U,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Wt(P){return Math.min(i.maxSamples,P.samples)}function ot(P){let T=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Zt(P){let T=o.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function Pt(P,T){let B=P.colorSpace,ct=P.format,tt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==co&&B!==Ei&&(he.getTransfer(B)===xe?(ct!==Mn||tt!==Tn)&&Tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",B)),T}function Dt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Ut,this.resetTextureUnits=Z,this.getTextureUnits=it,this.setTextureUnits=At,this.setTexture2D=Q,this.setTexture2DArray=at,this.setTexture3D=Et,this.setTextureCube=xt,this.rebindTextures=ie,this.setupRenderTarget=k,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ot,this.dispose=O}function Ix(s,t){function e(n,i=Ei){let r,o=he.getTransfer(i);if(n===Tn)return s.UNSIGNED_BYTE;if(n===Bl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===zl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Zu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$u)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===qu)return s.BYTE;if(n===Yu)return s.SHORT;if(n===br)return s.UNSIGNED_SHORT;if(n===Ol)return s.INT;if(n===An)return s.UNSIGNED_INT;if(n===un)return s.FLOAT;if(n===qe)return s.HALF_FLOAT;if(n===Ju)return s.ALPHA;if(n===Ku)return s.RGB;if(n===Mn)return s.RGBA;if(n===_i)return s.DEPTH_COMPONENT;if(n===Ti)return s.DEPTH_STENCIL;if(n===kl)return s.RED;if(n===Wo)return s.RED_INTEGER;if(n===Qi)return s.RG;if(n===Gl)return s.RG_INTEGER;if(n===Hl)return s.RGBA_INTEGER;if(n===Xo||n===qo||n===Yo||n===Zo)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vl||n===Wl||n===Xl||n===ql)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yl||n===Zl||n===$l||n===Jl||n===Kl||n===$o||n===Ql)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yl||n===Zl)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jl)return r.COMPRESSED_R11_EAC;if(n===Kl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$o)return r.COMPRESSED_RG11_EAC;if(n===Ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jl||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ec)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ic)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ac)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fc||n===pc||n===mc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fc)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gc||n===xc||n===Jo||n===_c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===gc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}function uT(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Cp(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,_,y,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&p(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),f(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===fn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===fn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=t.get(g),y=_.envMap,M=_.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(hT.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Lx),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=y*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===fn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dT(s,t,e,n){let i={},r={};function o(_,y){let M=y.program;n.uniformBlockBinding(_,M,i[_.id])}function a(_,y){let M=i[_.id];M===void 0&&(f(_),M=l(_),i[_.id]=M,_.addEventListener("dispose",m));let b=y.program;n.updateUBOMapping(_,b);let w=t.render.frame;r[_.id]!==w&&(c(_),r[_.id]=w)}function l(_){let y=s.createBuffer(),M=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,M,b),s.bindBuffer(s.UNIFORM_BUFFER,null),y}function c(_){let y=i[_.id],M=_.uniforms,b=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,v=M.length;w<v;w++){let S=M[w];if(Array.isArray(S))for(let C=0,A=S.length;C<A;C++)h(S[C],w,C,b);else h(S,w,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(_,y,M,b){if(d(_,y,M,b)===!0){let w=_.__offset,v=_.value;if(Array.isArray(v)){let S=0;for(let C=0;C<v.length;C++){let A=v[C],R=x(A,!0);u(A,_.__data,S),S+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,_.__data)}}function u(_,y,M){typeof _=="number"||typeof _=="boolean"?y[M]=_:_.isMatrix3?(y[M]=_.elements[0],y[M+1]=_.elements[1],y[M+2]=_.elements[2],y[M+3]=0,y[M+4]=_.elements[3],y[M+5]=_.elements[4],y[M+6]=_.elements[5],y[M+7]=0,y[M+8]=_.elements[6],y[M+9]=_.elements[7],y[M+10]=_.elements[8],y[M+11]=0):ArrayBuffer.isView(_)?y.set(_.subarray(0,y.length-M),M):_.toArray(y,M)}function d(_,y,M,b){let w=_.value,v=y+"_"+M;if(Array.isArray(w)){b[v]===void 0&&(b[v]=[]);let S=b[v],C=!1;for(let A=0;A<w.length;A++)p(w[A],S,A)===!0&&(C=!0);return C}return p(w,b,v)}function p(_,y,M){if(y[M]===void 0)return typeof _=="number"||typeof _=="boolean"?y[M]=_:ArrayBuffer.isView(_)?y[M]=_.slice():y[M]=_.clone(),!0;{let b=y[M];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return y[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function f(_){let y=_.uniforms,M=0,b=16;for(let v=0,S=y.length;v<S;v++){let C=Array.isArray(y[v])?y[v]:[y[v]];for(let A=0,R=C.length;A<R;A++){let D=C[A],z=Array.isArray(D.value)?D.value:[D.value],N=Array.isArray(y[v])||Array.isArray(D.value),O=M;for(let G=0,rt=z.length;G<rt;G++){let W=z[G],Z=x(W,N),it=M%b,At=it%Z.boundary,Ut=it+At;M+=At,Ut!==0&&b-Ut<Z.storage&&(M+=b-Ut),G===0&&(O=M),M+=Z.storage}let V=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new V((M-O)/Float32Array.BYTES_PER_ELEMENT),D.__offset=O}}let w=M%b;return w>0&&(M+=b-w),_.__size=M,_.__cache={},this}function x(_,y){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?Tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Tt("WebGLRenderer: Unsupported uniform value type.",_),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(_){let y=_.target;y.removeEventListener("dispose",m),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function g(){for(let _ in i)s.deleteBuffer(i[_]);i={},r={}}return{bind:o,update:a,dispose:g}}function pT(){return Ri===null&&(Ri=new yn(fT,16,16,Qi,qe),Ri.name="DFG_LUT",Ri.minFilter=Ce,Ri.magFilter=Ce,Ri.wrapS=vn,Ri.wrapT=vn,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var L1,D1,N1,U1,F1,O1,B1,z1,k1,G1,H1,V1,W1,X1,q1,Y1,Z1,$1,J1,K1,Q1,j1,tM,eM,nM,iM,sM,rM,oM,aM,lM,cM,hM,uM,dM,fM,pM,mM,gM,xM,_M,vM,yM,MM,SM,bM,wM,TM,AM,EM,CM,RM,PM,IM,LM,DM,NM,UM,FM,OM,BM,zM,kM,GM,HM,VM,WM,XM,qM,YM,ZM,$M,JM,KM,QM,jM,tS,eS,nS,iS,sS,rS,oS,aS,lS,cS,hS,uS,dS,fS,pS,mS,gS,xS,_S,vS,yS,MS,SS,bS,wS,TS,AS,ES,CS,RS,PS,IS,LS,DS,NS,US,FS,OS,BS,zS,kS,GS,HS,VS,WS,XS,qS,YS,ZS,$S,JS,KS,QS,jS,tb,eb,nb,ib,sb,rb,ob,ab,lb,cb,hb,oe,Rt,fi,rd,ub,Sx,Qo,tx,xb,_b,bx,wx,vb,yb,Mb,pi,Lb,Tx,Ax,Ex,Cx,Rx,Px,sx,rx,ox,ax,lx,kp,Gp,Hp,Bp,Ko,Mw,Sw,ux,Aw,od,Lw,Nw,Fw,Bw,kw,Vw,Wp,Xp,Kw,eT,nT,iT,sT,yx,Mc,zp,lT,cT,qp,Yp,hT,Lx,fT,Ri,bc,Ee=ce(()=>{Op();Op();L1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D1=`#ifdef USE_ALPHAHASH
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
#endif`,N1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B1=`#ifdef USE_AOMAP
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
#endif`,z1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k1=`#ifdef USE_BATCHING
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
#endif`,G1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X1=`#ifdef USE_IRIDESCENCE
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
#endif`,q1=`#ifdef USE_BUMPMAP
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
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Q1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,j1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,eM=`#define PI 3.141592653589793
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
} // validated`,nM=`vec3 transformedNormal = objectNormal;
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
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aM="gl_FragColor = linearToOutputTexel( gl_FragColor );",lM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cM=`#ifdef USE_ENVMAP
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
#endif`,hM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
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
#endif`,dM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_M=`#ifdef USE_GRADIENTMAP
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
}`,vM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bM=`#ifdef USE_ENVMAP
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
#endif`,wM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CM=`PhysicalMaterial material;
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
#endif`,RM=`uniform sampler2D dfgLUT;
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
}`,PM=`
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
#endif`,IM=`#if defined( RE_IndirectDiffuse )
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
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,NM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,GM=`#if defined( USE_POINTS_UV )
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
#endif`,HM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XM=`#if defined( USE_MORPHCOLORS )
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
#endif`,qM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YM=`#ifdef USE_MORPHTARGETS
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
#endif`,ZM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,JM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tS=`#ifdef USE_NORMALMAP
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
#endif`,eS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gS=`float getShadowMask() {
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
}`,xS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_S=`#ifdef USE_SKINNING
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
#endif`,vS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yS=`#ifdef USE_SKINNING
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
#endif`,MS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TS=`#ifdef USE_TRANSMISSION
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
#endif`,AS=`#ifdef USE_TRANSMISSION
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
#endif`,ES=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,IS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LS=`uniform sampler2D t2D;
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
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NS=`uniform float backgroundBlurriness;
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
}`,US=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OS=`#include <common>
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
}`,BS=`#if DEPTH_PACKING == 3200
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
}`,zS=`#define DISTANCE
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
}`,kS=`#define DISTANCE
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
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VS=`uniform float scale;
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
}`,WS=`uniform vec3 diffuse;
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
}`,XS=`#include <common>
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
}`,qS=`uniform vec3 diffuse;
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
}`,YS=`#define LAMBERT
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
}`,ZS=`#define LAMBERT
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
}`,$S=`#define MATCAP
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
}`,JS=`#define MATCAP
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
}`,KS=`#define NORMAL
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
}`,QS=`#define NORMAL
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
}`,jS=`#define PHONG
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
}`,tb=`#define PHONG
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
}`,eb=`#define STANDARD
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
}`,nb=`#define STANDARD
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
}`,ib=`#define TOON
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
}`,sb=`#define TOON
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
}`,rb=`uniform float size;
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
}`,ob=`uniform vec3 diffuse;
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
}`,ab=`#include <common>
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
}`,lb=`uniform vec3 color;
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
}`,cb=`uniform float rotation;
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
}`,hb=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:L1,alphahash_pars_fragment:D1,alphamap_fragment:N1,alphamap_pars_fragment:U1,alphatest_fragment:F1,alphatest_pars_fragment:O1,aomap_fragment:B1,aomap_pars_fragment:z1,batching_pars_vertex:k1,batching_vertex:G1,begin_vertex:H1,beginnormal_vertex:V1,bsdfs:W1,iridescence_fragment:X1,bumpmap_pars_fragment:q1,clipping_planes_fragment:Y1,clipping_planes_pars_fragment:Z1,clipping_planes_pars_vertex:$1,clipping_planes_vertex:J1,color_fragment:K1,color_pars_fragment:Q1,color_pars_vertex:j1,color_vertex:tM,common:eM,defaultnormal_vertex:nM,displacementmap_pars_vertex:iM,displacementmap_vertex:sM,emissivemap_fragment:rM,emissivemap_pars_fragment:oM,colorspace_fragment:aM,colorspace_pars_fragment:lM,envmap_fragment:cM,envmap_common_pars_fragment:hM,envmap_pars_fragment:uM,envmap_pars_vertex:dM,envmap_physical_pars_fragment:bM,envmap_vertex:fM,fog_vertex:pM,fog_pars_vertex:mM,fog_fragment:gM,fog_pars_fragment:xM,gradientmap_pars_fragment:_M,lightmap_pars_fragment:vM,lights_lambert_fragment:yM,lights_lambert_pars_fragment:MM,lights_pars_begin:SM,lights_toon_fragment:wM,lights_toon_pars_fragment:TM,lights_phong_fragment:AM,lights_phong_pars_fragment:EM,lights_physical_fragment:CM,lights_physical_pars_fragment:RM,lights_fragment_begin:PM,lights_fragment_maps:IM,lights_fragment_end:LM,lightprobes_pars_fragment:DM,logdepthbuf_fragment:NM,logdepthbuf_pars_fragment:UM,logdepthbuf_pars_vertex:FM,logdepthbuf_vertex:OM,map_fragment:BM,map_pars_fragment:zM,map_particle_fragment:kM,map_particle_pars_fragment:GM,metalnessmap_fragment:HM,metalnessmap_pars_fragment:VM,morphinstance_vertex:WM,morphcolor_vertex:XM,morphnormal_vertex:qM,morphtarget_pars_vertex:YM,morphtarget_vertex:ZM,normal_fragment_begin:$M,normal_fragment_maps:JM,normal_pars_fragment:KM,normal_pars_vertex:QM,normal_vertex:jM,normalmap_pars_fragment:tS,clearcoat_normal_fragment_begin:eS,clearcoat_normal_fragment_maps:nS,clearcoat_pars_fragment:iS,iridescence_pars_fragment:sS,opaque_fragment:rS,packing:oS,premultiplied_alpha_fragment:aS,project_vertex:lS,dithering_fragment:cS,dithering_pars_fragment:hS,roughnessmap_fragment:uS,roughnessmap_pars_fragment:dS,shadowmap_pars_fragment:fS,shadowmap_pars_vertex:pS,shadowmap_vertex:mS,shadowmask_pars_fragment:gS,skinbase_vertex:xS,skinning_pars_vertex:_S,skinning_vertex:vS,skinnormal_vertex:yS,specularmap_fragment:MS,specularmap_pars_fragment:SS,tonemapping_fragment:bS,tonemapping_pars_fragment:wS,transmission_fragment:TS,transmission_pars_fragment:AS,uv_pars_fragment:ES,uv_pars_vertex:CS,uv_vertex:RS,worldpos_vertex:PS,background_vert:IS,background_frag:LS,backgroundCube_vert:DS,backgroundCube_frag:NS,cube_vert:US,cube_frag:FS,depth_vert:OS,depth_frag:BS,distance_vert:zS,distance_frag:kS,equirect_vert:GS,equirect_frag:HS,linedashed_vert:VS,linedashed_frag:WS,meshbasic_vert:XS,meshbasic_frag:qS,meshlambert_vert:YS,meshlambert_frag:ZS,meshmatcap_vert:$S,meshmatcap_frag:JS,meshnormal_vert:KS,meshnormal_frag:QS,meshphong_vert:jS,meshphong_frag:tb,meshphysical_vert:eb,meshphysical_frag:nb,meshtoon_vert:ib,meshtoon_frag:sb,points_vert:rb,points_frag:ob,shadow_vert:ab,shadow_frag:lb,sprite_vert:cb,sprite_frag:hb},Rt={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},fi={basic:{uniforms:pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:pn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:pn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new lt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:pn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:pn([Rt.points,Rt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:pn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:pn([Rt.common,Rt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:pn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:pn([Rt.sprite,Rt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:pn([Rt.common,Rt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:pn([Rt.lights,Rt.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};fi.physical={uniforms:pn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};rd={r:0,b:0,g:0},ub=new Gt,Sx=new jt;Sx.set(-1,0,0,0,1,0,0,0,1);Qo=class extends Re{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new gs(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Oe(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Si});r.uniforms.tEquirect.value=e;let o=new ne(i,r),a=e.minFilter;return e.minFilter===Jn&&(e.minFilter=Ce),new _r(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},tx=256,xb=3,_b=20,bx=256,wx=16,vb=3,yb=new L,Mb=new lt,pi=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _r(1,10,null),this._boxMesh=new ne(new Oe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=yb}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,f=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Mb));let m=new _r(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=f,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ix(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(tx,Tp(t))}_fromTexture(t,e){t.mapping===wi||t.mapping===Ls?this._setSize(t.image.length===0?tx:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=ex(t,!1,!1),n=Math.log2(t)-xb;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ex(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===wi||t.mapping===Ls?(this._cubemapMaterial===null&&(this._cubemapMaterial=ix()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=nx()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Sb(),this._integrationMaterial=bb());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/wx);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-vb)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(bx*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=wb());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};Lb={[Es]:"LINEAR_TONE_MAPPING",[Cs]:"REINHARD_TONE_MAPPING",[Rs]:"CINEON_TONE_MAPPING",[bi]:"ACES_FILMIC_TONE_MAPPING",[Ps]:"AGX_TONE_MAPPING",[Is]:"NEUTRAL_TONE_MAPPING",[ko]:"CUSTOM_TONE_MAPPING"};Tx=new Fe,Ax=new Zn(1,1),Ex=new Mo(1),Cx=new rr,Rx=new or,Px=new gs,sx=[],rx=[],ox=new Float32Array(16),ax=new Float32Array(9),lx=new Float32Array(4);kp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jb(e.type)}},Gp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vw(e.type)}},Hp=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Bp=/(\w+)(\])?(\[|\.)?/g;Ko=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);yw(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};Mw=37297,Sw=0;ux=new jt;Aw={[Es]:"Linear",[Cs]:"Reinhard",[Rs]:"Cineon",[bi]:"ACESFilmic",[Ps]:"AgX",[Is]:"Neutral",[ko]:"Custom"};od=new L;Lw=/^[ \t]*#include +<([\w\d./]+)>/gm;Nw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Fw={[Ts]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};Bw={[Ls]:"ENVMAP_MODE_REFRACTION"};kw={[zo]:"ENVMAP_BLENDING_MULTIPLY",[op]:"ENVMAP_BLENDING_MIX",[ap]:"ENVMAP_BLENDING_ADD"};Vw=0,Wp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xp(t),e.set(t,n)),n}},Xp=class{constructor(t){this.id=Vw++,this.code=t,this.usedTimes=0}};Kw=0;eT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nT=`uniform sampler2D shadow_pass;
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
}`,iT=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],sT=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],yx=new Gt,Mc=new L,zp=new L;lT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cT=`
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

}`,qp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new So(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:lT,fragmentShader:cT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yp=class extends Ln{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,x=typeof XRWebGLBinding<"u",m=new qp,g={},_=e.getContextAttributes(),y=null,M=null,b=[],w=[],v=new nt,S=null,C=null,A=new Ie;A.viewport=new pe;let R=new Ie;R.viewport=new pe;let D=[A,R],z=new Il,N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=b[q];return Q===void 0&&(Q=new lr,b[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=b[q];return Q===void 0&&(Q=new lr,b[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=b[q];return Q===void 0&&(Q=new lr,b[q]=Q),Q.getHandSpace()};function V(q){let Q=w.indexOf(q.inputSource);if(Q===-1)return;let at=b[Q];at!==void 0&&(at.update(q.inputSource,q.frame,c||o),at.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",rt);for(let q=0;q<b.length;q++){let Q=w[q];Q!==null&&(w[q]=null,b[q].disconnect(Q))}N=null,O=null,m.reset();for(let q in g)delete g[q];if(t.setRenderTarget(y),p=null,d=null,u=null,i=null,M=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(v.width,v.height,!1),C!==null){let q=C.camera;q.fov=C.fov,q.zoom=C.zoom,q.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",G),i.addEventListener("inputsourceschange",rt),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,Et=null,xt=null;_.depth&&(xt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=_.stencil?Ti:_i,Et=_.stencil?Ds:An);let Vt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Vt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Re(d.textureWidth,d.textureHeight,{format:Mn,type:Tn,depthTexture:new Zn(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let at={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Re(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ut.setContext(i),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(q){for(let Q=0;Q<q.removed.length;Q++){let at=q.removed[Q],Et=w.indexOf(at);Et>=0&&(w[Et]=null,b[Et].disconnect(at))}for(let Q=0;Q<q.added.length;Q++){let at=q.added[Q],Et=w.indexOf(at);if(Et===-1){for(let Vt=0;Vt<b.length;Vt++)if(Vt>=w.length){w.push(at),Et=Vt;break}else if(w[Vt]===null){w[Vt]=at,Et=Vt;break}if(Et===-1)break}let xt=b[Et];xt&&xt.connect(at)}}function W(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,at=q.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(at=m.depthFar)),z.near=R.near=A.near=Q,z.far=R.far=A.far=at,(N!==z.near||O!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),N=z.near,O=z.far),z.layers.mask=q.layers.mask|6,A.layers.mask=z.layers.mask&-5,R.layers.mask=z.layers.mask&-3;let Et=q.parent,xt=z.cameras;W(z,Et);for(let Vt=0;Vt<xt.length;Vt++)W(xt[Vt],Et);z.projectionMatrix.copy(A.projectionMatrix),z.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&q.isPerspectiveCamera&&(C={camera:q,fov:q.fov,zoom:q.zoom}),Z(q,z,Et)};function Z(q,Q,at){at===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(at.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=sr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(q){return g[q]};let it=null;function At(q,Q){if(h=Q.getViewerPose(c||o),f=Q,h!==null){let at=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Et=!1;at.length!==z.cameras.length&&(z.cameras.length=0,Et=!0);for(let Ct=0;Ct<at.length;Ct++){let se=at[Ct],ue=null;if(p!==null)ue=p.getViewport(se);else{let gt=u.getViewSubImage(d,se);ue=gt.viewport,Ct===0&&(t.setRenderTargetTextures(M,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(M))}let st=D[Ct];st===void 0&&(st=new Ie,st.layers.enable(Ct),st.viewport=new pe,D[Ct]=st),st.matrix.fromArray(se.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(se.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(ue.x,ue.y,ue.width,ue.height),Ct===0&&(z.matrix.copy(st.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Et===!0&&z.cameras.push(st)}let xt=i.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Ct=u.getDepthInformation(at[0]);Ct&&Ct.isValid&&Ct.texture&&m.init(Ct,i.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Ct=0;Ct<at.length;Ct++){let se=at[Ct].camera;if(se){let ue=g[se];ue||(ue=new So,g[se]=ue);let st=u.getCameraImage(se);ue.sourceTexture=st}}}}for(let at=0;at<b.length;at++){let Et=w[at],xt=b[at];Et!==null&&xt!==void 0&&xt.update(Et,Q,c||o)}it&&it(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),f=null}let Ut=new Mx;Ut.setAnimationLoop(At),this.setAnimationLoop=function(q){it=q},this.dispose=function(){}}},hT=new Gt,Lx=new jt;Lx.set(-1,0,0,0,1,0,0,0,1);fT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;bc=class{constructor(t={}){let{canvas:e=bp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Tn}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let x=p,m=new Set([Hl,Gl,Wo]),g=new Set([Tn,An,br,Ds,Bl,zl]),_=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},b=null,w=null,v=[],S=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,R=!1,D=null,z=null,N=null,O=null;this._outputColorSpace=nn;let V=0,G=0,rt=null,W=-1,Z=null,it=new pe,At=new pe,Ut=null,q=new lt(0),Q=0,at=e.width,Et=e.height,xt=1,Vt=null,ve=null,Ct=new pe(0,0,at,Et),se=new pe(0,0,at,Et),ue=!1,st=new vi,gt=new vo,ft=!1,Nt=!1,pt=new Gt,te=new L,zt=new pe,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function k(){return rt===null?xt:1}let I=n;function $(E,F){return e.getContext(E,F)}let ht,Wt,ot,Zt,Pt,Dt,P,T,B,ct,tt,dt,_t,K,j,Mt,U,et,J,St,mt,vt,Xt;try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",qt,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",It,!1),I===null){let F="webgl2";if(I=$(F,E),I===null)throw $(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}le()}catch(E){throw e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",It,!1),Ht("WebGLRenderer: "+E.message),E}function le(){ht=new Ab(I),ht.init(),mt=new Ix(I,ht),Wt=new mb(I,ht,t,mt),ot=new oT(I,ht),Wt.reversedDepthBuffer&&d&&ot.buffers.depth.setReversed(!0),z=I.createFramebuffer(),N=I.createFramebuffer(),O=I.createFramebuffer(),Zt=new Rb(I),Pt=new qw,Dt=new aT(I,ht,ot,Pt,Wt,mt,Zt),P=new Tb(A),T=new I1(I),vt=new fb(I,T),B=new Eb(I,T,Zt,vt),ct=new Ib(I,B,T,vt,Zt),et=new Pb(I,Wt,Dt),j=new gb(Pt),tt=new Xw(A,P,ht,Wt,vt,j),dt=new uT(A,Pt),_t=new Zw,K=new tT(ht),U=new db(A,P,ot,ct,f,l),Mt=new rT(A,ct,Wt),Xt=new dT(I,Zt,Wt,ot),J=new pb(I,ht,Zt),St=new Cb(I,ht,Zt),Zt.programs=tt.programs,A.capabilities=Wt,A.extensions=ht,A.properties=Pt,A.renderLists=_t,A.shadowMap=Mt,A.state=ot,A.info=Zt}x!==Tn&&(C=new Db(x,e.width,e.height,a,i,r));let ut=new Yp(A,I);this.xr=ut,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=ht.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ht.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(E){E!==void 0&&(xt=E,this.setSize(at,Et,!1))},this.getSize=function(E){return E.set(at,Et)},this.setSize=function(E,F,Y=!0){if(ut.isPresenting){Tt("WebGLRenderer: Can't change size while VR device is presenting.");return}at=E,Et=F,e.width=Math.floor(E*xt),e.height=Math.floor(F*xt),Y===!0&&(e.style.width=E+"px",e.style.height=F+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(at*xt,Et*xt).floor()},this.setDrawingBufferSize=function(E,F,Y){at=E,Et=F,xt=Y,e.width=Math.floor(E*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(x===Tn){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(it)},this.getViewport=function(E){return E.copy(Ct)},this.setViewport=function(E,F,Y,H){E.isVector4?Ct.set(E.x,E.y,E.z,E.w):Ct.set(E,F,Y,H),ot.viewport(it.copy(Ct).multiplyScalar(k()).round())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,F,Y,H){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,F,Y,H),ot.scissor(At.copy(se).multiplyScalar(k()).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(E){ot.setScissorTest(ue=E)},this.setOpaqueSort=function(E){Vt=E},this.setTransparentSort=function(E){ve=E},this.getClearColor=function(E){return E.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,Y=!0){let H=0;if(E){let X=!1;if(rt!==null){let wt=rt.texture.format;X=m.has(wt)}if(X){let wt=rt.texture.type,Ft=g.has(wt),bt=U.getClearColor(),Lt=U.getClearAlpha(),kt=bt.r,ee=bt.g,de=bt.b;Ft?(_[0]=kt,_[1]=ee,_[2]=de,_[3]=Lt,I.clearBufferuiv(I.COLOR,0,_)):(y[0]=kt,y[1]=ee,y[2]=de,y[3]=Lt,I.clearBufferiv(I.COLOR,0,y))}else H|=I.COLOR_BUFFER_BIT}F&&(H|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",It,!1),U.dispose(),_t.dispose(),K.dispose(),Dt.dispose(),Pt.dispose(),P.dispose(),ct.dispose(),B.dispose(),vt.dispose(),Xt.dispose(),tt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",wm),ut.removeEventListener("sessionend",Tm),Gs.stop()};function qt(E){E.preventDefault(),fo("WebGLRenderer: Context Lost."),R=!0}function re(){fo("WebGLRenderer: Context Restored."),R=!1;let E=Zt.autoReset,F=Mt.enabled,Y=Mt.autoUpdate,H=Mt.needsUpdate,X=Mt.type;le(),Zt.autoReset=E,Mt.enabled=F,Mt.autoUpdate=Y,Mt.needsUpdate=H,Mt.type=X}function It(E){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function be(E){let F=E.target;F.removeEventListener("dispose",be),Je(F)}function Je(E){is(E),Pt.remove(E)}function is(E){let F=Pt.get(E).programs;F!==void 0&&(F.forEach(function(Y){tt.releaseProgram(Y)}),E.isShaderMaterial&&tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,Y,H,X,wt){F===null&&(F=ae);let Ft=X.isMesh&&X.matrixWorld.determinantAffine()<0,bt=Lv(E,F,Y,H,X);ot.setMaterial(H,Ft);let Lt=Y.index,kt=1;if(H.wireframe===!0){if(Lt=B.getWireframeAttribute(Y),Lt===void 0)return;kt=2}let ee=Y.drawRange,de=Y.attributes.position,Ot=ee.start*kt,fe=(ee.start+ee.count)*kt;wt!==null&&(Ot=Math.max(Ot,wt.start*kt),fe=Math.min(fe,(wt.start+wt.count)*kt)),Lt!==null?(Ot=Math.max(Ot,0),fe=Math.min(fe,Lt.count)):de!=null&&(Ot=Math.max(Ot,0),fe=Math.min(fe,de.count));let Ge=fe-Ot;if(Ge<0||Ge===1/0)return;vt.setup(X,H,bt,Y,Lt);let Te,we=J;if(Lt!==null&&(Te=T.get(Lt),we=St,we.setIndex(Te)),X.isMesh)H.wireframe===!0?(ot.setLineWidth(H.wireframeLinewidth*k()),we.setMode(I.LINES)):we.setMode(I.TRIANGLES);else if(X.isLine){let rn=H.linewidth;rn===void 0&&(rn=1),ot.setLineWidth(rn*k()),X.isLineSegments?we.setMode(I.LINES):X.isLineLoop?we.setMode(I.LINE_LOOP):we.setMode(I.LINE_STRIP)}else X.isPoints?we.setMode(I.POINTS):X.isSprite&&we.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))we.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let rn=X._multiDrawStarts,Bt=X._multiDrawCounts,xn=X._multiDrawCount,ye=Lt?T.get(Lt).bytesPerElement:1,Hs=Pt.get(H).currentProgram.getUniforms();for(let on=0;on<xn;on++)Hs.setValue(I,"_gl_DrawID",on),we.render(rn[on]/ye,Bt[on])}else if(X.isInstancedMesh)we.renderInstances(Ot,Ge,X.count);else if(Y.isInstancedBufferGeometry){let rn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Bt=Math.min(Y.instanceCount,rn);we.renderInstances(Ot,Ge,Bt)}else we.render(Ot,Ge)};function bm(E,F,Y,H){D!==null&&E.isNodeMaterial&&D.setObject(H,E),ft===!0&&j.setState(E,Y,!1),E.transparent===!0&&E.side===zn&&E.forceSinglePass===!1?(E.side=fn,E.needsUpdate=!0,ca(E,F,H),E.side=Ki,E.needsUpdate=!0,ca(E,F,H),E.side=zn):ca(E,F,H)}this.compile=function(E,F,Y=null){Y===null&&(Y=E),D!==null&&D.renderStart(E,F,Y),w=K.get(Y),w.init(F),S.push(w),Y.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),E!==Y&&E.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),Nt=this.localClippingEnabled,ft=j.init(this.clippingPlanes,Nt),ft===!0&&j.setGlobalState(this.clippingPlanes,F),D!==null&&Mt.render(w.state.shadowsArray,Y,F);let H=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let wt=X.material;if(wt)if(Array.isArray(wt))for(let Ft=0;Ft<wt.length;Ft++){let bt=wt[Ft];bm(bt,Y,F,X),H.add(bt)}else bm(wt,Y,F,X),H.add(wt)}),w=S.pop(),D!==null&&D.renderEnd(),H},this.compileAsync=function(E,F,Y=null){let H=this.compile(E,F,Y);return new Promise(X=>{function wt(){if(H.forEach(function(Ft){let Lt=Pt.get(Ft).currentProgram;(Lt===void 0||Lt.isReady())&&H.delete(Ft)}),H.size===0){X(E);return}setTimeout(wt,10)}ht.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let kd=null;function Pv(E){kd&&kd(E)}function wm(){Gs.stop()}function Tm(){Gs.start()}let Gs=new Mx;Gs.setAnimationLoop(Pv),typeof self<"u"&&Gs.setContext(self),this.setAnimationLoop=function(E){kd=E,ut.setAnimationLoop(E),E===null?Gs.stop():Gs.start()},ut.addEventListener("sessionstart",wm),ut.addEventListener("sessionend",Tm),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(E,F);let Y=ut.enabled===!0&&ut.isPresenting===!0,H=C!==null&&(rt===null||Y)&&C.begin(A,rt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(F),F=ut.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,F,rt),w=K.get(E,S.length),w.init(F),w.state.textureUnits=Dt.getTextureUnits(),S.push(w),pt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?gt.setFromArrayCamera(F):st.setFromProjectionMatrix(pt,In,F.reversedDepth),Nt=this.localClippingEnabled,ft=j.init(this.clippingPlanes,Nt),b=_t.get(E,v.length),b.init(),v.push(b),this.info.render.frame++,ut.enabled===!0&&ut.isPresenting===!0){let Ft=A.xr.getDepthSensingMesh();Ft!==null&&Gd(Ft,F,-1/0,A.sortObjects)}Gd(E,F,0,A.sortObjects),b.finish(),D!==null&&D.updateLights(w.state.lightsArray),A.sortObjects===!0&&b.sort(Vt,ve),ie=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,ie&&U.addToRenderList(b,E),this.info.autoReset===!0&&this.info.reset(),ft===!0&&j.beginShadows();let X=w.state.shadowsArray;if(Mt.render(X,E,F),ft===!0&&j.endShadows(),(H&&C.hasRenderPass())===!1){let Ft=b.opaque,bt=b.transmissive;if(w.setupLights(),F.isArrayCamera){let Lt=F.cameras;if(bt.length>0)for(let kt=0,ee=Lt.length;kt<ee;kt++){let de=Lt[kt];Em(Ft,bt,E,de)}ie&&U.render(E);for(let kt=0,ee=Lt.length;kt<ee;kt++){let de=Lt[kt];Am(b,E,de,de.viewport)}}else bt.length>0&&Em(Ft,bt,E,F),ie&&U.render(E),Am(b,E,F)}rt!==null&&G===0&&(Dt.updateMultisampleRenderTarget(rt),Dt.updateRenderTargetMipmap(rt)),H&&C.end(A),E.isScene===!0&&E.onAfterRender(A,E,F),vt.resetDefaultState(),W=-1,Z=null,S.pop(),S.length>0?(w=S[S.length-1],Dt.setTextureUnits(w.state.textureUnits),ft===!0&&j.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?b=v[v.length-1]:b=null,D!==null&&D.renderEnd()};function Gd(E,F,Y,H){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Ft=F.isArrayCamera?gt:st;if(!E.frustumCulled||E.intersectsFrustum(Ft)){H&&zt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pt);let bt=ct.update(E),Lt=E.material;Lt.visible&&b.push(E,bt,Lt,Y,zt.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){let Ft=F.isArrayCamera?gt:st;if(!E.frustumCulled||E.intersectsFrustum(Ft)){let bt=ct.update(E),Lt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),zt.copy(E.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),zt.copy(bt.boundingSphere.center)),zt.applyMatrix4(E.matrixWorld).applyMatrix4(pt)),Array.isArray(Lt)){let kt=bt.groups;for(let ee=0,de=kt.length;ee<de;ee++){let Ot=kt[ee],fe=Lt[Ot.materialIndex];fe&&fe.visible&&b.push(E,bt,fe,Y,zt.z,Ot,F)}}else Lt.visible&&b.push(E,bt,Lt,Y,zt.z,null,F)}}}let wt=E.children;for(let Ft=0,bt=wt.length;Ft<bt;Ft++)Gd(wt[Ft],F,Y,H)}function Am(E,F,Y,H){let{opaque:X,transmissive:wt,transparent:Ft}=E;w.setupLightsView(Y),ft===!0&&j.setGlobalState(A.clippingPlanes,Y),H&&ot.viewport(it.copy(H)),X.length>0&&Bc(X,F,Y),wt.length>0&&Bc(wt,F,Y),Ft.length>0&&Bc(Ft,F,Y),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Em(E,F,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Ot=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Re(1,1,{generateMipmaps:!0,type:Ot?qe:Tn,minFilter:Jn,samples:Math.max(4,Wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let wt=w.state.transmissionRenderTarget[H.id],Ft=H.viewport||it;wt.setSize(Ft.z*A.transmissionResolutionScale,Ft.w*A.transmissionResolutionScale);let bt=A.getRenderTarget(),Lt=A.getActiveCubeFace(),kt=A.getActiveMipmapLevel();A.setRenderTarget(wt),A.getClearColor(q),Q=A.getClearAlpha(),Q<1&&A.setClearColor(16777215,.5),A.clear(),ie&&U.render(Y);let ee=A.toneMapping;A.toneMapping=kn;let de=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),ft===!0&&j.setGlobalState(A.clippingPlanes,H),Bc(E,Y,H),Dt.updateMultisampleRenderTarget(wt),Dt.updateRenderTargetMipmap(wt),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let fe=0,Ge=F.length;fe<Ge;fe++){let Te=F[fe],{object:we,geometry:rn,material:Bt,group:xn}=Te;if(Bt.side===zn&&we.layers.test(H.layers)){let ye=Bt.side;Bt.side=fn,Bt.needsUpdate=!0,Cm(we,Y,H,rn,Bt,xn),Bt.side=ye,Bt.needsUpdate=!0,Ot=!0}}Ot===!0&&(Dt.updateMultisampleRenderTarget(wt),Dt.updateRenderTargetMipmap(wt))}A.setRenderTarget(bt,Lt,kt),A.setClearColor(q,Q),de!==void 0&&(H.viewport=de),A.toneMapping=ee}function Bc(E,F,Y){let H=F.isScene===!0?F.overrideMaterial:null;for(let X=0,wt=E.length;X<wt;X++){let Ft=E[X],{object:bt,geometry:Lt,group:kt}=Ft,ee=Ft.material;ee.allowOverride===!0&&H!==null&&(ee=H),bt.layers.test(Y.layers)&&Cm(bt,F,Y,Lt,ee,kt)}}function Cm(E,F,Y,H,X,wt){D!==null&&X.isNodeMaterial&&D.setObject(E,X),E.onBeforeRender(A,F,Y,H,X,wt),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(A,F,Y,H,E,wt),X.transparent===!0&&X.side===zn&&X.forceSinglePass===!1?(X.side=fn,X.needsUpdate=!0,A.renderBufferDirect(Y,F,H,X,E,wt),X.side=Ki,X.needsUpdate=!0,A.renderBufferDirect(Y,F,H,X,E,wt),X.side=zn):A.renderBufferDirect(Y,F,H,X,E,wt),E.onAfterRender(A,F,Y,H,X,wt)}function Rm(E){let F=0;for(let Y of E)Y.texture!==null&&F++;return F}function ca(E,F,Y){F.isScene!==!0&&(F=ae);let H=Pt.get(E),X=w.state.lights,wt=w.state.shadowsArray,Ft=X.state.version,bt=tt.getParameters(E,X.state,wt,F,Y,w.state.lightProbeGridArray),Lt=tt.getProgramCacheKey(bt),kt=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let ee=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=P.get(E.envMap||H.environment,ee),H.envMapRotation=H.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,kt===void 0&&(E.addEventListener("dispose",be),kt=new Map,H.programs=kt,H.programVariants=new Map);let de=kt.get(Lt);if(de!==void 0){if(H.currentProgram===de&&H.lightsStateVersion===Ft)return Im(E,bt),de}else bt.uniforms=tt.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,Y,bt),E.onBeforeCompile(bt,A),de=tt.acquireProgram(bt,Lt),kt.set(Lt,de),H.uniforms=bt.uniforms;let Ot=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ot.clippingPlanes=j.uniform),Im(E,bt),H.needsLights=Nv(E),H.lightsStateVersion=Ft,H.needsLights&&(Ot.ambientLightColor.value=X.state.ambient,Ot.lightProbe.value=X.state.probe,Ot.sunLights.value=X.state.sun,Ot.sunLightShadows.value=X.state.sunShadow,Ot.directionalLights.value=X.state.directional,Ot.directionalLightShadows.value=X.state.directionalShadow,Ot.spotLights.value=X.state.spot,Ot.spotLightShadows.value=X.state.spotShadow,Ot.rectAreaLights.value=X.state.rectArea,Ot.ltc_1.value=X.state.rectAreaLTC1,Ot.ltc_2.value=X.state.rectAreaLTC2,Ot.pointLights.value=X.state.point,Ot.pointLightShadows.value=X.state.pointShadow,Ot.hemisphereLights.value=X.state.hemi,Ot.sunShadowMatrix.value=X.state.sunShadowMatrix,Ot.sunShadowCascade.value=X.state.sunShadowCascade,Ot.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ot.spotLightMatrix.value=X.state.spotLightMatrix,Ot.spotLightMap.value=X.state.spotLightMap,Ot.pointShadowMatrix.value=X.state.pointShadowMatrix),H.numLightProbeGrids=Rm(w.state.lightProbeGridArray),H.currentProgram=de,H.uniformsList=null,de}function Iv(E,F,Y,H,X){let wt=Pt.get(E),Ft=wt.currentProgram.id+","+H+","+X,bt=wt.programVariants.get(Ft);return bt===void 0?(bt=ca(E,F,Y),wt.programVariants.set(Ft,bt)):(wt.currentProgram=bt,wt.uniformsList=null,wt.outputColorSpace=H,wt.toneMapping=X),bt}function Pm(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Ko.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Im(E,F){let Y=Pt.get(E);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Lv(E,F,Y,H,X){F.isScene!==!0&&(F=ae),Dt.resetTextureUnits();let wt=F.fog,Ft=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,bt=rt===null?A.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:he.workingColorSpace,Lt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,kt=P.get(H.envMap||Ft,Lt),ee=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,de=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ot=!!Y.morphAttributes.position,fe=!!Y.morphAttributes.normal,Ge=!!Y.morphAttributes.color,Te=kn;H.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Te=A.toneMapping);let we=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,rn=we!==void 0?we.length:0,Bt=Pt.get(H),xn=w.state.lights;if(ft===!0&&(Nt===!0||E!==Z)){let Pe=E===Z&&H.id===W;j.setState(H,E,Pe)}let ye=!1,Hs=!1;H.version===Bt.__version?Bt.needsLights&&Bt.lightsStateVersion!==xn.state.version||X.isBatchedMesh&&Bt.batching===!1||!X.isBatchedMesh&&Bt.batching===!0||X.isBatchedMesh&&Bt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Bt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Bt.instancing===!1||!X.isInstancedMesh&&Bt.instancing===!0||X.isSkinnedMesh&&Bt.skinning===!1||!X.isSkinnedMesh&&Bt.skinning===!0||X.isInstancedMesh&&Bt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Bt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Bt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Bt.instancingMorph===!1&&X.morphTexture!==null||Bt.envMap!==kt||H.fog===!0&&Bt.fog!==wt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==j.numPlanes||Bt.numIntersection!==j.numIntersection)||Bt.vertexAlphas!==ee||Bt.vertexTangents!==de||Bt.morphTargets!==Ot||Bt.morphNormals!==fe||Bt.morphColors!==Ge||Bt.morphTargetsCount!==rn||Bt.numLightProbeGrids!==Rm(w.state.lightProbeGridArray)?ye=!0:(Bt.outputColorSpace!==bt||Bt.toneMapping!==Te)&&(Hs=!0):(ye=!0,Bt.__version=H.version);let on=Bt.currentProgram;(ye===!0||Hs===!0)&&(on=Hs===!0?Iv(H,F,X,bt,Te):ca(H,F,X),D&&H.isNodeMaterial&&D.onUpdateProgram(H,on,Bt));let zc=!1,ss=!1,Vs=!1,ge=on.getUniforms(),en=Bt.uniforms;if(ot.useProgram(on.program)&&(zc=!0,ss=!0,Vs=!0),H.id!==W&&(W=H.id,ss=!0),zc||Z!==E){ot.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ge.setValue(I,"projectionMatrix",E.projectionMatrix),ge.setValue(I,"viewMatrix",E.matrixWorldInverse);let Ke=ge.map.cameraPosition;Ke!==void 0&&Ke.setValue(I,te.setFromMatrixPosition(E.matrixWorld)),Wt.logarithmicDepthBuffer&&ge.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ge.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,ss=!0,Vs=!0)}if(Bt.needsLights&&(xn.state.sunShadowMap.length>0&&ge.setValue(I,"sunShadowMap",xn.state.sunShadowMap,Dt),xn.state.directionalShadowMap.length>0&&ge.setValue(I,"directionalShadowMap",xn.state.directionalShadowMap,Dt),xn.state.spotShadowMap.length>0&&ge.setValue(I,"spotShadowMap",xn.state.spotShadowMap,Dt),xn.state.pointShadowMap.length>0&&ge.setValue(I,"pointShadowMap",xn.state.pointShadowMap,Dt)),X.isSkinnedMesh){ge.setOptional(I,X,"bindMatrix"),ge.setOptional(I,X,"bindMatrixInverse");let Pe=X.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),ge.setValue(I,"boneTexture",Pe.boneTexture,Dt))}X.isBatchedMesh&&(ge.setOptional(I,X,"batchingTexture"),ge.setValue(I,"batchingTexture",X._matricesTexture,Dt),ge.setOptional(I,X,"batchingIdTexture"),ge.setValue(I,"batchingIdTexture",X._indirectTexture,Dt),ge.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&ge.setValue(I,"batchingColorTexture",X._colorsTexture,Dt));let jn=Y.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&et.update(X,Y,on),(ss||Bt.receiveShadow!==X.receiveShadow)&&(Bt.receiveShadow=X.receiveShadow,ge.setValue(I,"receiveShadow",X.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(en.envMapIntensity.value=F.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=pT()),ss){if(ge.setValue(I,"toneMappingExposure",A.toneMappingExposure),Bt.needsLights&&Dv(en,Vs),wt&&H.fog===!0&&dt.refreshFogUniforms(en,wt),dt.refreshMaterialUniforms(en,H,xt,Et,w.state.transmissionRenderTarget[E.id]),Bt.needsLights&&Bt.numLightProbeGrids>0){let Pe=M,Ke=0;for(let Oi of w.state.lightProbeGridArray)Oi.texture!==null&&(Pe.textures[Ke]=Oi.texture,Pe.min[Ke]=Oi.boundingBox.min,Pe.max[Ke]=Oi.boundingBox.max,Pe.resolution[Ke]=Oi.resolution,Ke++);for(let Oi in Pe)Pe[Oi].length=Ke;en.probesSH.value=Pe.textures,en.probesMin.value=Pe.min,en.probesMax.value=Pe.max,en.probesResolution.value=Pe.resolution}Ko.upload(I,Pm(Bt),en,Dt)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ko.upload(I,Pm(Bt),en,Dt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ge.setValue(I,"center",X.center),ge.setValue(I,"modelViewMatrix",X.modelViewMatrix),ge.setValue(I,"normalMatrix",X.normalMatrix),ge.setValue(I,"modelMatrix",X.matrixWorld),H.uniformsGroups!==void 0){let Pe=H.uniformsGroups;for(let Ke=0,Oi=Pe.length;Ke<Oi;Ke++){let Dm=Pe[Ke];Xt.update(Dm,on),Xt.bind(Dm,on)}}return on}function Dv(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Nv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(E,F,Y){let H=Pt.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Pt.get(E.texture).__webglTexture=F,Pt.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let Y=Pt.get(E);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,Y=0){rt=E,V=F,G=Y;let H=null,X=!1,wt=!1;if(E){let bt=Pt.get(E);if(bt.__useDefaultFramebuffer!==void 0){ot.bindFramebuffer(I.FRAMEBUFFER,bt.__webglFramebuffer),it.copy(E.viewport),At.copy(E.scissor),Ut=E.scissorTest,ot.viewport(it),ot.scissor(At),ot.setScissorTest(Ut),W=-1;return}else if(bt.__webglFramebuffer===void 0)Dt.setupRenderTarget(E);else if(bt.__hasExternalTextures)Dt.rebindTextures(E,Pt.get(E.texture).__webglTexture,Pt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ee=E.depthTexture;if(bt.__boundDepthTexture!==ee){if(ee!==null&&Pt.has(ee)&&(E.width!==ee.image.width||E.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Dt.setupDepthRenderbuffer(E)}}let Lt=E.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(wt=!0);let kt=Pt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(kt[F])?H=kt[F][Y]:H=kt[F],X=!0):E.samples>0&&Dt.useMultisampledRTT(E)===!1?H=Pt.get(E).__webglMultisampledFramebuffer:Array.isArray(kt)?H=kt[Y]:H=kt,it.copy(E.viewport),At.copy(E.scissor),Ut=E.scissorTest}else it.copy(Ct).multiplyScalar(xt).floor(),At.copy(se).multiplyScalar(xt).floor(),Ut=ue;if(Y!==0&&(H=z),ot.bindFramebuffer(I.FRAMEBUFFER,H)&&ot.drawBuffers(E,H),ot.viewport(it),ot.scissor(At),ot.setScissorTest(Ut),X){let bt=Pt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,bt.__webglTexture,Y)}else if(wt){let bt=F;for(let Lt=0;Lt<E.textures.length;Lt++){let kt=Pt.get(E.textures[Lt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Lt,kt.__webglTexture,Y,bt)}}else if(E!==null&&Y!==0){let bt=Pt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bt.__webglTexture,Y)}W=-1};function Lm(E){let F=Pt.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=Wt.textureFormatReadable(E.format),F.__typeReadable=Wt.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,Y,H,X,wt,Ft,bt=0){if(!(E&&E.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ft!==void 0&&(Lt=Lt[Ft],Array.isArray(Lt)&&(Lt=Lt[0])),Lt){ot.bindFramebuffer(I.FRAMEBUFFER,Lt);try{let kt=E.textures[bt],ee=kt.format,de=kt.type;E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+bt);let Ot=Lm(kt);if(Ot.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-H&&Y>=0&&Y<=E.height-X&&I.readPixels(F,Y,H,X,mt.convert(ee),mt.convert(de),wt)}finally{let kt=rt!==null?Pt.get(rt).__webglFramebuffer:null;ot.bindFramebuffer(I.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(E,F,Y,H,X,wt,Ft,bt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ft!==void 0&&(Lt=Lt[Ft],Array.isArray(Lt)&&(Lt=Lt[0])),Lt)if(F>=0&&F<=E.width-H&&Y>=0&&Y<=E.height-X){ot.bindFramebuffer(I.FRAMEBUFFER,Lt);let kt=E.textures[bt],ee=kt.format,de=kt.type;E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+bt);let Ot=Lm(kt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,fe),I.bufferData(I.PIXEL_PACK_BUFFER,wt.byteLength,I.STREAM_READ),I.readPixels(F,Y,H,X,mt.convert(ee),mt.convert(de),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Ge=rt!==null?Pt.get(rt).__webglFramebuffer:null;ot.bindFramebuffer(I.FRAMEBUFFER,Ge);let Te=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Hg(I,Te,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,fe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,wt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(fe),I.deleteSync(Te),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,Y=0){let H=Math.pow(2,-Y),X=Math.floor(E.image.width*H),wt=Math.floor(E.image.height*H),Ft=F!==null?F.x:0,bt=F!==null?F.y:0;Dt.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,Ft,bt,X,wt),ot.unbindTexture()},this.copyTextureToTexture=function(E,F,Y=null,H=null,X=0,wt=0){let Ft,bt,Lt,kt,ee,de,Ot,fe,Ge,Te=E.isCompressedTexture?E.mipmaps[wt]:E.image;if(Y!==null)Ft=Y.max.x-Y.min.x,bt=Y.max.y-Y.min.y,Lt=Y.isBox3?Y.max.z-Y.min.z:1,kt=Y.min.x,ee=Y.min.y,de=Y.isBox3?Y.min.z:0;else{let ge=Math.pow(2,-X);Ft=Math.floor(Te.width*ge),bt=Math.floor(Te.height*ge),E.isDataArrayTexture?Lt=Te.depth:E.isData3DTexture?Lt=Math.floor(Te.depth*ge):Lt=1,kt=0,ee=0,de=0}H!==null?(Ot=H.x,fe=H.y,Ge=H.z):(Ot=0,fe=0,Ge=0);let we=mt.convert(F.format),rn=mt.convert(F.type),Bt;F.isData3DTexture?(Dt.setTexture3D(F,0),Bt=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Dt.setTexture2DArray(F,0),Bt=I.TEXTURE_2D_ARRAY):(Dt.setTexture2D(F,0),Bt=I.TEXTURE_2D),ot.activeTexture(I.TEXTURE0),ot.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),ot.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ot.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let xn=ot.getParameter(I.UNPACK_ROW_LENGTH),ye=ot.getParameter(I.UNPACK_IMAGE_HEIGHT),Hs=ot.getParameter(I.UNPACK_SKIP_PIXELS),on=ot.getParameter(I.UNPACK_SKIP_ROWS),zc=ot.getParameter(I.UNPACK_SKIP_IMAGES);ot.pixelStorei(I.UNPACK_ROW_LENGTH,Te.width),ot.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Te.height),ot.pixelStorei(I.UNPACK_SKIP_PIXELS,kt),ot.pixelStorei(I.UNPACK_SKIP_ROWS,ee),ot.pixelStorei(I.UNPACK_SKIP_IMAGES,de);let ss=E.isDataArrayTexture||E.isData3DTexture,Vs=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let ge=Pt.get(E),en=Pt.get(F),jn=Pt.get(ge.__renderTarget),Pe=Pt.get(en.__renderTarget);ot.bindFramebuffer(I.READ_FRAMEBUFFER,jn.__webglFramebuffer),ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ke=0;Ke<Lt;Ke++)ss&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pt.get(E).__webglTexture,X,de+Ke),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pt.get(F).__webglTexture,wt,Ge+Ke)),I.blitFramebuffer(kt,ee,kt+Ft,ee+bt,Ot,fe,Ot+Ft,fe+bt,I.DEPTH_BUFFER_BIT,I.NEAREST);ot.bindFramebuffer(I.READ_FRAMEBUFFER,null),ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||Pt.has(E)){let ge=Pt.get(E),en=Pt.get(F);ot.bindFramebuffer(I.READ_FRAMEBUFFER,N),ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,O);for(let jn=0;jn<Lt;jn++)ss?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ge.__webglTexture,X,de+jn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,X),Vs?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,en.__webglTexture,wt,Ge+jn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,en.__webglTexture,wt),X!==0?I.blitFramebuffer(kt,ee,kt+Ft,ee+bt,Ot,fe,Ot+Ft,fe+bt,I.COLOR_BUFFER_BIT,I.NEAREST):Vs?I.copyTexSubImage3D(Bt,wt,Ot,fe,Ge+jn,kt,ee,Ft,bt):I.copyTexSubImage2D(Bt,wt,Ot,fe,kt,ee,Ft,bt);ot.bindFramebuffer(I.READ_FRAMEBUFFER,null),ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Vs?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Bt,wt,Ot,fe,Ge,Ft,bt,Lt,we,rn,Te.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Bt,wt,Ot,fe,Ge,Ft,bt,Lt,we,Te.data):I.texSubImage3D(Bt,wt,Ot,fe,Ge,Ft,bt,Lt,we,rn,Te):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,wt,Ot,fe,Ft,bt,we,rn,Te.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,wt,Ot,fe,Te.width,Te.height,we,Te.data):I.texSubImage2D(I.TEXTURE_2D,wt,Ot,fe,Ft,bt,we,rn,Te);ot.pixelStorei(I.UNPACK_ROW_LENGTH,xn),ot.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ye),ot.pixelStorei(I.UNPACK_SKIP_PIXELS,Hs),ot.pixelStorei(I.UNPACK_SKIP_ROWS,on),ot.pixelStorei(I.UNPACK_SKIP_IMAGES,zc),wt===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&I.generateMipmap(Bt),ot.unbindTexture()},this.initRenderTarget=function(E){Pt.get(E).__webglFramebuffer===void 0&&Dt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Dt.setTextureCube(E,0):E.isData3DTexture?Dt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Dt.setTexture2DArray(E,0):Dt.setTexture2D(E,0),ot.unbindTexture()},this.resetState=function(){V=0,G=0,rt=null,ot.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}});function Ox(s,t,{start:e=12,fadeIn:n=1.4,fadeOut:i=.6}={}){let r=Cn.outCubic(En((s-e)/n)),o=En((t-s)/i);return{visible:s>=e,opacity:r*Cn.smooth(o),reveal:r,spacing:Fx(.9,.42,Cn.outExpo(En((s-e)/(n*1.8))))}}function Bx(s,t,{inSec:e=.8,outSec:n=.8}={}){return Math.min(Cn.smooth(En(s/e)),Cn.smooth(En((t-s)/n)))}var En,Fx,Cn,fd,ji,Ec=ce(()=>{En=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),Fx=(s,t,e)=>s+(t-s)*e,Cn={linear:s=>s,smooth:s=>s*s*(3-2*s),smoother:s=>s*s*s*(s*(s*6-15)+10),inOutCubic:s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,outCubic:s=>1-Math.pow(1-s,3),inCubic:s=>s*s*s,outExpo:s=>s>=1?1:1-Math.pow(2,-10*s)},fd=class{constructor({fps:t=30,duration:e=15}={}){this.fps=t,this.duration=e,this.frameCount=Math.round(t*e)}timeAtFrame(t){return t/this.fps}progressAtFrame(t){return En(t/Math.max(1,this.frameCount-1))}segment(t,e,n,i=Cn.linear){return i(En((t-e)/(n-e)))}},ji=class{constructor(t){this.keys=[...t].sort((e,n)=>e.t-n.t)}sample(t){let e=this.keys;if(t<=e[0].t)return e[0].v;if(t>=e[e.length-1].t)return e[e.length-1].v;let n=0;for(;t>e[n+1].t;)n++;let i=(e[n].ease??Cn.smooth)((t-e[n].t)/(e[n+1].t-e[n].t));return Fx(e[n].v,e[n+1].v,i)}}});function xT(s,t,e=8){let n=s.count,i=s.instanceMatrix.array,r=new Map;for(let l=0;l<n;l++){let c=kx(Math.floor(i[l*16+12]/t),Math.floor(i[l*16+14]/t)),h=r.get(c);h||r.set(c,h=[]),h.push(l)}let o=s.geometry,a=[];for(let l of r.values()){let c=new $t;for(let u of Object.keys(o.attributes)){let d=o.attributes[u];if(d.isInstancedBufferAttribute){let p=new d.array.constructor(l.length*d.itemSize);l.forEach((f,x)=>{for(let m=0;m<d.itemSize;m++)p[x*d.itemSize+m]=d.array[f*d.itemSize+m]}),c.setAttribute(u,new bn(p,d.itemSize,d.normalized,d.meshPerAttribute))}else c.setAttribute(u,d)}o.index&&c.setIndex(o.index),c.groups=o.groups.slice(),c.boundingBox=o.boundingBox,c.boundingSphere=o.boundingSphere,c.boundingSphere||(o.computeBoundingSphere(),c.boundingSphere=o.boundingSphere);let h=new We(c,s.material,l.length);l.forEach((u,d)=>h.instanceMatrix.array.set(i.subarray(u*16,u*16+16),d*16)),h.instanceMatrix.needsUpdate=!0,s.instanceColor&&(h.instanceColor=new bn(new Float32Array(l.length*3),3),l.forEach((u,d)=>h.instanceColor.array.set(s.instanceColor.array.subarray(u*3,u*3+3),d*3)),h.instanceColor.needsUpdate=!0),h.castShadow=s.castShadow,h.receiveShadow=s.receiveShadow,h.renderOrder=s.renderOrder,h.name=s.name,h.userData=s.userData,h.layers.mask=s.layers.mask,h.position.copy(s.position),h.quaternion.copy(s.quaternion),h.scale.copy(s.scale),h.frustumCulled=!0,h.computeBoundingSphere(),h.boundingSphere.radius+=e,a.push(h)}return a}function _T(s,t,e=2){let n=s.geometry,i=n.attributes.position,r=n.index;if(!r)return[s];let o=r.array,a=o.length/3,l=new Map;for(let h=0;h<a;h++){let u=o[h*3],d=o[h*3+1],p=o[h*3+2],f=(i.getX(u)+i.getX(d)+i.getX(p))/3,x=(i.getZ(u)+i.getZ(d)+i.getZ(p))/3,m=kx(Math.floor(f/t),Math.floor(x/t)),g=l.get(m);g||l.set(m,g=[]),g.push(h)}let c=[];for(let h of l.values()){let u=new o.constructor(h.length*3);h.forEach((m,g)=>{u[g*3]=o[m*3],u[g*3+1]=o[m*3+1],u[g*3+2]=o[m*3+2]});let d=new $t;for(let m of Object.keys(n.attributes))d.setAttribute(m,n.attributes[m]);d.setIndex(new Jt(u,1));let p=new ze,f=new L;for(let m=0;m<u.length;m++)f.fromBufferAttribute(i,u[m]),p.expandByPoint(f);d.boundingBox=p,d.boundingSphere=p.getBoundingSphere(new Ne),d.boundingSphere.radius+=e;let x=new ne(d,s.material);x.castShadow=s.castShadow,x.receiveShadow=s.receiveShadow,x.renderOrder=s.renderOrder,x.name=s.name+"-tile",x.userData=s.userData,x.position.copy(s.position),x.quaternion.copy(s.quaternion),x.scale.copy(s.scale),x.frustumCulled=!0,c.push(x)}return c}function Gx(s,{exclude:t=[],instSize:e=350,mountainCell:n=3e3,only:i=null,minCount:r=2e3}={}){let o=new Set(t),a={instancedSrc:0,instancedTiles:0,mountainTiles:0,instances:0};for(let l of s.children.slice()){if(o.has(l)||l.isInstancedMesh&&l.count<r)continue;let c=null;if(l.isInstancedMesh&&!l.isPoints&&(!i||i==="inst")?(c=xT(l,e),a.instancedSrc++,a.instancedTiles+=c.length,a.instances+=l.count):l.isMesh&&l.name==="mountains"&&(!i||i==="mtn")&&(c=_T(l,n),a.mountainTiles=c.length),!!c){s.remove(l);for(let h of c)s.add(h)}}return a}var kx,Hx=ce(()=>{Ee();kx=(s,t)=>s+"_"+t});function Vx(s,t=Cc){let e=s.get("haze"),n=e===null||e===""?1:Math.max(0,parseFloat(e)),i=(r,o)=>s.has(r)&&isFinite(parseFloat(s.get(r)))?parseFloat(s.get(r)):o;return{mult:isFinite(n)?n:1,start:i("hazeStart",t.start),end:i("hazeEnd",t.end),strength:i("hazeMax",t.strength),desat:i("hazeDesat",t.desat),mountain:i("hazeMtn",t.mountain)}}function Wx(s,t,e){let n=new pe,i={uHazeP:{value:n},uHazeHor:t.uHorizon,uHazeWarm:t.uHorizonWarm,uHazeSun:t.uSunDir},r={cfg:{...e},uniforms:i,materials:0,set(a){Object.assign(r.cfg,a);let l=r.cfg.strength*r.cfg.mult;n.set(r.cfg.start,r.cfg.end,Math.min(1,l),r.cfg.desat)}};r.set({});let o=new Set;return s.traverse(a=>{let l=a.material?Array.isArray(a.material)?a.material:[a.material]:[];for(let c of l){if(o.has(c)||c.isShaderMaterial&&!c.isMeshStandardMaterial||c.fog===!1||c.isPointsMaterial)continue;o.add(c);let h=String(a.name||"").startsWith("mountains")?r.cfg.mountain:1,u=c.onBeforeCompile,d=c.customProgramCacheKey();c.onBeforeCompile=function(p,f){u?.call(this,p,f);let x=p.fragmentShader;if(!x.includes("#include <fog_fragment>"))return;let m=x.includes("vViewPosition");Object.assign(p.uniforms,i),p.fragmentShader=x.replace("#include <fog_pars_fragment>",`#include <fog_pars_fragment>
uniform vec4 uHazeP; uniform vec3 uHazeHor, uHazeWarm, uHazeSun;`).replace("#include <fog_fragment>","#include <fog_fragment>"+vT.replace("HAZE_COL",m?yT:MT).replace("HZ_K",h.toFixed(3)))},c.customProgramCacheKey=()=>d+"|haze1|"+h,c.needsUpdate=!0,r.materials++}}),r}var Cc,vT,yT,MT,Kp=ce(()=>{Ee();Cc={start:700,end:7e3,strength:.6,desat:.55,mountain:.5};vT=`
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
#endif`,yT=`
    vec3 hzV = normalize((vec4(-vViewPosition, 0.0) * viewMatrix).xyz);
    float hzMu = max(dot(hzV, uHazeSun), 0.0);
    vec3 hzCol = mix(uHazeHor, uHazeWarm, pow(hzMu, 1.6));`,MT=`
    vec3 hzCol = uHazeHor;`});function Xx(s){ts(s,s&&s.contract===1,"contract: 1 \u304C\u5FC5\u8981");let t=s.meta;ts(s,t&&t.id&&t.name?.ja&&t.name?.en&&t.season&&t.docTitle,"meta.{id,name.ja,name.en,season,docTitle}"),ts(s,Array.isArray(s.captions)&&s.captions.length>0,"captions[]"),s.captions.forEach((e,n)=>{ts(s,e.id&&e.title&&typeof e.a=="number"&&typeof e.b=="number"&&e.a<e.b,`captions[${n}] \u306F {id,title,sub,a<b}`),n&&ts(s,e.a>=s.captions[n-1].b,`captions[${n}] \u306E\u7A93\u304C\u524D\u306E\u7A93\u3068\u91CD\u306A\u308B`)}),ts(s,s.timeline&&s.timeline.duration>0&&typeof s.timeline.globalStart=="number","timeline.{globalStart,duration}"),ts(s,s.ambient&&s.ambient.name&&s.ambient.counts&&s.ambient.counts.normal>0&&s.ambient.counts.light>0,"ambient.{name,counts.{normal,light}}"),ts(s,s.tuning&&typeof s.tuning=="object","tuning\uFF08\u7A7A\u3067\u3082\u53EF\uFF09"),ts(s,typeof s.buildScene=="function","buildScene(ctx)")}function qx(s){for(let t of["frameState","setAmbientCount","setLayoutWeight"])if(typeof s[t]!="function")throw new Error(`\u30B7\u30FC\u30F3\u306B ${t}() \u304C\u3042\u308A\u307E\u305B\u3093`);for(let t of["scene","camera","look","rig"])if(!s[t])throw new Error(`\u30B7\u30FC\u30F3\u306B ${t} \u304C\u3042\u308A\u307E\u305B\u3093`)}function na(s,{tiled:t,haze:e,tileExclude:n=[],skyUniforms:i}){s.tiled=t===void 0?!0:t,s.hazeCfg=e??{mult:1,...Cc},s.tiled&&(s.tileStats=Gx(s.scene,{exclude:n,only:typeof s.tiled=="string"?s.tiled:null})),s.haze=s.hazeCfg.mult>0&&i?Wx(s.scene,i,s.hazeCfg):{cfg:s.hazeCfg,materials:0}}function Qp(s){let t=new Set,e=n=>{for(let i of Object.values(n))i&&i.isTexture&&!t.has(i)&&(t.add(i),i.dispose())};s.scene.traverse(n=>{n.geometry?.dispose?.();for(let i of Array.isArray(n.material)?n.material:n.material?[n.material]:[])t.has(i)||(t.add(i),e(i),i.dispose())}),s.scene.clear()}var ts,ia=ce(()=>{Hx();Kp();ts=(s,t,e)=>{if(!t)throw new Error(`\u90FD\u5E02\u30E2\u30B8\u30E5\u30FC\u30EB "${s?.meta?.id??"?"}" \u304C\u5951\u7D04\u3092\u6E80\u305F\u3057\u3066\u3044\u307E\u305B\u3093: ${e}`)}});function Yx(s,t,e,n,i){let r=i*i,o=r*i,a=(l,c,h,u)=>.5*(2*c+(-l+h)*i+(2*l-5*c+4*h-u)*r+(-l+3*c-3*h+u)*o);return[a(s[0],t[0],e[0],n[0]),a(s[1],t[1],e[1],n[1]),a(s[2],t[2],e[2],n[2])]}function bT(s,t,e=0){let n=(i,r)=>Math.sin(s*i+r+e);return[t*(n(1.7,.3)*.6+n(3.1,1.9)*.4),t*(n(1.3,2.1)*.6+n(2.7,.7)*.4),t*(n(1.1,4.2)*.6+n(2.3,3.3)*.4)]}var ST,Ar,jp=ce(()=>{Ec();ST=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]];Ar=class{constructor(t,{shakeAmp:e=0,shakeSeed:n=0,timeWarp:i=null}={}){this.keys=[...t].sort((r,o)=>r.t-o.t),this.shakeAmp=e,this.shakeSeed=n,this.timeWarp=i}sample(t){let e=this.keys;if(this.timeWarp){let x=e[0].t,m=e[e.length-1].t;t=x+(m-x)*this.timeWarp(En((t-x)/(m-x)))}let n=e.length,i=En(t,e[0].t,e[n-1].t),r=0;for(;r<n-2&&i>e[r+1].t;)r++;let o=e[r],a=e[r+1],l=(i-o.t)/(a.t-o.t),c=(o.ease??Cn.smoother)(En(l)),h=x=>Math.min(n-1,Math.max(0,x)),u=(x,m)=>e[h(x)][m],d=Yx(u(r-1,"pos"),u(r,"pos"),u(r+1,"pos"),u(r+2,"pos"),c),p=Yx(u(r-1,"target"),u(r,"target"),u(r+1,"target"),u(r+2,"target"),c),f=o.fov+(a.fov-o.fov)*c;return this.shakeAmp>0&&(d=ST(d,bT(t,this.shakeAmp,this.shakeSeed))),{position:d,target:p,fov:f}}}});var Us,_d=ce(()=>{Ee();jp();Ec();Us=class{constructor(t,e,n,{renderer:i}={}){this.meta=t,this.glRenderer=i,this.duration=t.durationSec??15,this.timeline=new fd({fps:30,duration:this.duration}),this.scene=new Sn,this.camera=new Ie(35,16/9,4,4e4),this.titleInfo={englishName:t.englishName,name:t.name,index:e,total:n},this.rig=null,this.tracks={},this.look={grade:{}},this.focusLead=0,this.timeOffset=0,this.showTitle=!0,this.fadeSec=.8}async build(){throw new Error("build() \u3092\u5B9F\u88C5\u3057\u3066\u304F\u3060\u3055\u3044")}sampleTrack(t,e,n=0){return this.tracks[t]?this.tracks[t].sample(e):n}frameState(t){let e=t+this.timeOffset,n=this.rig.sample(e);this.camera.position.set(...n.position),this.camera.lookAt(...n.target),this.camera.fov=n.fov;let i=n.position[0]-n.target[0],r=n.position[1]-n.target[1],o=n.position[2]-n.target[2],a=Math.hypot(i,r,o)+this.focusLead;return this.applyTime?.(e,n),{exposure:this.sampleTrack("exposure",e,1),bloom:this.sampleTrack("bloom",e,.6),bloomRadius:this.sampleTrack("bloomRadius",e,.7),bloomThreshold:this.sampleTrack("bloomThreshold",e,.9),dofAperture:this.sampleTrack("dofAperture",e,1),dofMaxBlur:this.sampleTrack("dofMaxBlur",e,6),focusDistance:a}}}});function vd(s=1){let t=s>>>0,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return e.range=(n,i)=>n+(i-n)*e(),e.int=(n,i)=>Math.floor(n+(i-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e}function Pi(s=7){let t=(i,r)=>{let o=Math.imul(i,374761393)+Math.imul(r,668265263)+Math.imul(s,2147483647);return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967296},e=i=>i*i*(3-2*i),n=(i,r)=>{let o=Math.floor(i),a=Math.floor(r),l=e(i-o),c=e(r-a),h=t(o,a),u=t(o+1,a),d=t(o,a+1),p=t(o+1,a+1);return h+(u-h)*l+(d-h)*c+(h-u-d+p)*l*c};return n.fbm=(i,r,o=5)=>{let a=0,l=.5,c=1,h=0;for(let u=0;u<o;u++)a+=l*n(i*c,r*c),h+=l,l*=.5,c*=2.03;return a/h},n.ridged=(i,r,o=5)=>{let a=0,l=.5,c=1,h=0;for(let u=0;u<o;u++){let d=1-Math.abs(n(i*c,r*c)*2-1);a+=l*d*d,h+=l,l*=.5,c*=2.03}return a/h},n}var yd=ce(()=>{});var Qn,Fs=ce(()=>{Qn=`
float hash11(float p){ p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash21(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  float a = hash21(i), b = hash21(i + vec2(1., 0.)), c = hash21(i + vec2(0., 1.)), d = hash21(i + vec2(1., 1.));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 5; i++){ s += a * vnoise(p); p = p * 2.03 + vec2(17.1, 9.7); a *= .5; } return s; }
`});function sa(s,{sunDir:t,colors:e}){let n={uSunDir:{value:t.clone().normalize()},uTime:{value:0},uZenith:{value:new s.Color(e.zenith)},uHorizon:{value:new s.Color(e.horizon)},uHorizonWarm:{value:new s.Color(e.horizonWarm)},uSunColor:{value:new s.Color(e.sun)},uCloudLit:{value:new s.Color(e.cloudLit)},uCloudDark:{value:new s.Color(e.cloudDark)},uCloudCover:{value:e.cloudCover??.5},uSunStrength:{value:1}},i=new s.ShaderMaterial({uniforms:n,side:s.BackSide,depthWrite:!1,depthTest:!1,fog:!1,vertexShader:`
      varying vec3 vDir;
      void main(){
        vDir = position;
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p;
      }`,fragmentShader:`
      uniform vec3 uSunDir, uZenith, uHorizon, uHorizonWarm, uSunColor, uCloudLit, uCloudDark;
      uniform float uTime, uCloudCover, uSunStrength;
      varying vec3 vDir;
      ${Qn}
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
      }`}),r=new s.Mesh(new s.SphereGeometry(1e3,48,24),i);return r.frustumCulled=!1,r.renderOrder=-1e3,r.name="sky",{mesh:r,material:i,uniforms:n}}var Md=ce(()=>{Fs()});function Sd(s,{uNight:t,uSnow:e}){let n=new s.MeshStandardMaterial({color:16777215,roughness:.8,metalness:0});return n.customProgramCacheKey=()=>"facade-v3",n.onBeforeCompile=i=>{i.uniforms.uNight=t,i.uniforms.uSnow=e,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aBld; attribute vec4 aPar;
        varying vec4 vBld; varying vec4 vPar; varying vec3 vWP; varying vec3 vON; varying float vTopDist;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vBld = aBld; vPar = aPar; vON = normal;
        mat4 fim = instanceMatrix;
        vWP = (modelMatrix * fim * vec4(transformed, 1.0)).xyz;
        vTopDist = (1.0 - position.y) * fim[1][1];`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uNight, uSnow;
        varying vec4 vBld; varying vec4 vPar; varying vec3 vWP; varying vec3 vON; varying float vTopDist;
        ${Qn}
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
        totalEmissiveRadiance += fEmis;`)},n}function Zx(s){let t=[-.5,0,-.5],e=[.5,0,-.5],n=[0,1,-.5],i=[-.5,0,.5],r=[.5,0,.5],o=[0,1,.5],a=[t,n,e,i,r,o,t,i,o,t,o,n,e,n,o,e,o,r,t,e,r,t,r,i],l=new s.BufferGeometry;return l.setAttribute("position",new s.Float32BufferAttribute(a.flat(),3)),l.computeVertexNormals(),l}function $x(s){let t=new s.CylinderGeometry(.5,.5,1,14,1,!1);return t.translate(0,.5,0),t}function wT(s,t){let e=n=>{let i=Math.sin((t+n)*12.9898)*43758.5453;return i-Math.floor(i)};switch(s){case 2:return[2.4+e(1)*1.4,3.6+e(2)*.6,.94,.55+e(3)*.2];case 3:return[2.6+e(1)*1,2.8+e(2)*.3,.55+e(3)*.15,.5+e(4)*.12];case 4:return[3.6+e(1)*1.6,3.8+e(2)*.8,.45+e(3)*.2,.7];case 1:return[2.2+e(1)*.8,3.4+e(2)*.6,.5+e(3)*.15,.6+e(4)*.12];default:return[2.7+e(1)*1.2,3.5+e(2)*.5,.62+e(3)*.2,.55+e(4)*.15]}}var Os,Ii,bd=ce(()=>{Fs();Os=class{constructor(t,e,n=6e4,i=null){this.THREE=t,this.material=e,this.capacity=n,this.n=0,this.geometry=i,this.mats=new Float32Array(n*16),this.bld=new Float32Array(n*4),this.par=new Float32Array(n*4),this._m=new t.Matrix4,this._p=new t.Vector3,this._q=new t.Quaternion,this._s=new t.Vector3}add(t,e,n,i,r,o,a,l,c=.5,h=0,u=null){if(this.n>=this.capacity)return;let{_m:d,_p:p,_q:f,_s:x}=this;p.set(t,e,n),x.set(i,r,o),f.setFromAxisAngle(this.THREE.Object3D.DEFAULT_UP,h),d.compose(p,f,x),d.toArray(this.mats,this.n*16);let m=this.n*4;this.bld[m]=l,this.bld[m+1]=a,this.bld[m+2]=c,this.bld[m+3]=0;let g=u??wT(a,l);this.par[m]=g[0],this.par[m+1]=g[1],this.par[m+2]=g[2],this.par[m+3]=g[3],this.n++}build({castShadow:t=!0}={}){let e=this.THREE,n=this.geometry??(()=>{let r=new e.BoxGeometry(1,1,1);return r.translate(0,.5,0),r})();n.setAttribute("aBld",new e.InstancedBufferAttribute(this.bld.slice(0,this.n*4),4)),n.setAttribute("aPar",new e.InstancedBufferAttribute(this.par.slice(0,this.n*4),4));let i=new e.InstancedMesh(n,this.material,this.n);return i.instanceMatrix.array.set(this.mats.subarray(0,this.n*16)),i.instanceMatrix.needsUpdate=!0,i.castShadow=t,i.receiveShadow=!0,i.frustumCulled=!1,i}};Ii=class{constructor(t,e){this.THREE=t,this.material=e,this.items=[]}add(t,e,n,i=n){this.items.push([t,e,n,i])}build({castShadow:t=!1,sides:e=6}={}){let n=this.THREE,i=new n.CylinderGeometry(1,1,1,e,1,!1),r=new n.InstancedMesh(i,this.material,this.items.length),o=new Float32Array(this.items.length),a=new n.Matrix4,l=new n.Quaternion,c=new n.Vector3(0,1,0),h=new n.Vector3,u=new n.Vector3,d=new n.Vector3,p=new n.Vector3,f=new n.Vector3;this.items.forEach(([m,g,_,y],M)=>{h.set(...m),u.set(...g),d.subVectors(u,h);let b=d.length();d.normalize(),l.setFromUnitVectors(c,d),p.addVectors(h,u).multiplyScalar(.5),f.set(_,b,_),a.compose(p,l,f),r.setMatrixAt(M,a),o[M]=y/_}),i.setAttribute("aTaper",new n.InstancedBufferAttribute(o,1));let x=this.material;if(!x.userData.beamTaper){x.userData.beamTaper=!0;let m=x.onBeforeCompile;x.onBeforeCompile=(_,y)=>{m?.(_,y),_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
attribute float aTaper;`).replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
transformed.xz *= mix(1.0, aTaper, position.y + 0.5);
#endif`)};let g=x.customProgramCacheKey?.bind(x);x.customProgramCacheKey=()=>(g?g():"")+"|taper",x.needsUpdate=!0}return r.instanceMatrix.needsUpdate=!0,r.castShadow=t,r.receiveShadow=!1,r.frustumCulled=!1,r}}});function Jx(){let s=Pi(11),t=Pi(23),e=Pi(41);return(n,i)=>{let r=Math.hypot(n,i),o=Math.atan2(i,n),a=Math.abs((o-2.75+Math.PI*3)%(Math.PI*2)-Math.PI),l=Math.exp(-((a/.95)**2)),c=n+1300*(t.fbm(n*18e-5,i*18e-5,3)-.5)*2,h=i+1300*(t.fbm(n*18e-5+7.3,i*18e-5-2.1,3)-.5)*2,u=s.ridged(c*42e-5+3.1,h*42e-5-1.7,6),d=s.fbm(n*9e-4,i*9e-4,4),p=Li(6500,15e3,r)*l*(110+560*u);p+=Li(14e3,3e4,r)*l*380*e.ridged(c*2e-4+9.1,h*2e-4+4.4,5);for(let f of TT){let x=Math.cos(f.rot),m=Math.sin(f.rot),g=n-f.x,_=i-f.z,y=(g*x+_*m)/f.sx,M=(-g*m+_*x)/f.sz,b=y*y+M*M;if(b>16)continue;let w=Math.exp(-Math.pow(b,.82)*1.15),v=.66+.62*s.ridged(c*8e-4+f.x*3e-4,h*8e-4+f.z*3e-4,5);p+=f.h*w*(f.h>400?v:.86+.28*d)}return p+=(e.ridged(n*.0026,i*.0026,4)-.3)*Math.min(95,p*.13),p=Math.max(0,p+(s.fbm(n*.012,i*.012,3)-.5)*Math.min(14,p*.03)),p}}function wd(s,{heightFn:t,y:e=-4,rInner:n=2500,rOuter:i=44e3,rings:r=420,segs:o=820,thA:a=.55,thB:l=3.95,snowLine:c=260}){let h=(r+1)*(o+1),u=new Float32Array(h*3),d=new Float32Array(h),p=Math.log(i/n),f=0;for(let v=0;v<=r;v++){let S=n*Math.exp(p*v/r);for(let C=0;C<=o;C++){let A=a+(l-a)*C/o,R=Math.cos(A)*S,D=Math.sin(A)*S,z=Li(0,.18,C/o)*Li(0,.18,1-C/o),N=t(R,D)*(0+z);u[f++]=R,u[f++]=N,u[f++]=D,d[v*(o+1)+C]=N}}let x=new Uint32Array(r*o*6),m=0;for(let v=0;v<r;v++)for(let S=0;S<o;S++){let C=v*(o+1)+S,A=C+1,R=C+o+1,D=R+1;x[m++]=C,x[m++]=R,x[m++]=A,x[m++]=A,x[m++]=R,x[m++]=D}let g=new s.BufferGeometry;g.setAttribute("position",new s.BufferAttribute(u,3)),g.setIndex(new s.BufferAttribute(x,1)),g.computeVertexNormals();let _=g.attributes.normal,y=new Float32Array(h*3),M=Pi(31);for(let v=0;v<h;v++){let S=u[v*3],C=u[v*3+2],A=d[v],R=1-_.getY(v),D=M.fbm(S*.0011,C*.0011,4),z=M.fbm(S*.006+5,C*.006,3),N=_.getX(v)*-.66+_.getZ(v)*.71,O=Li(c-140,c+280,A+(D-.5)*220-N*70)*(1-Li(.12,.42,R)*.8),V=Li(15,130,A)*(1-Li(850,1150,A+(D-.5)*200)),G=Li(.22,.5,R)*Li(300,800,A),rt=[.86,.88,.93],W=[.2,.235,.235],Z=[.3,.285,.29],it=[.93,.945,.975],At=[0,0,0];for(let Ut=0;Ut<3;Ut++){let q=rt[Ut]+(W[Ut]-rt[Ut])*V;q+=(Z[Ut]-q)*G*.7,q=q+(it[Ut]-q)*O,At[Ut]=q*(.9+.2*z)}y[v*3]=At[0],y[v*3+1]=At[1],y[v*3+2]=At[2]}g.setAttribute("color",new s.BufferAttribute(y,3));let b=new s.MeshStandardMaterial({vertexColors:!0,roughness:.93,metalness:0});b.customProgramCacheKey=()=>"mountain-v1",b.onBeforeCompile=v=>{v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP;
${Qn}`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          // \u6A39\u6797\u306E\u7C92\u72B6\u611F\u30FB\u96EA\u9762\u306E\u3046\u306D\u308A\uFF08\u8DDD\u96E2\u306B\u5FDC\u3058\u3066\u5F31\u3081\u308B\uFF09
          float d = length(vWP - cameraPosition);
          float fadeD = 1.0 - smoothstep(4000.0, 16000.0, d);
          float tex = 0.55 * vnoise(vWP.xz * 0.045) + 0.3 * vnoise(vWP.xz * 0.16) + 0.15 * vnoise(vWP.xz * 0.6);
          float lum = dot(diffuseColor.rgb, vec3(0.333));
          float forestness = 1.0 - smoothstep(0.38, 0.7, lum);
          diffuseColor.rgb *= 1.0 + (tex - 0.5) * (0.5 * forestness + 0.12) * (0.4 + 0.6 * fadeD);
        }`)};let w=new s.Mesh(g,b);return w.position.y=e,w.castShadow=!1,w.receiveShadow=!1,w.frustumCulled=!1,w.name="mountains",w}function Kx(s,{size:t=9e4,y:e=-40}){let n=new s.PlaneGeometry(t,t,1,1);n.rotateX(-Math.PI/2);let i=new s.MeshStandardMaterial({color:14212584,roughness:.95}),r=new s.Mesh(n,i);return r.position.y=e,r.frustumCulled=!1,r.name="far-plain",r}var Li,TT,tm=ce(()=>{yd();Fs();Li=(s,t,e)=>{let n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)},TT=[{name:"\u624B\u7A32\u5C71",x:-12800,z:-3300,h:1023,sx:3600,sz:2700,rot:.5},{name:"\u4E09\u89D2\u5C71\u301C\u5965\u624B\u7A32",x:-9e3,z:-1e3,h:560,sx:2400,sz:1500,rot:.8},{name:"\u5186\u5C71",x:-4500,z:1300,h:226,sx:900,sz:700,rot:.3},{name:"\u85FB\u5CA9\u5C71",x:-2500,z:3650,h:531,sx:1500,sz:1100,rot:2.4},{name:"\u4E09\u89D2\u5C71\u30FB\u8352\u4E95\u5C71\u65B9\u9762",x:-6200,z:600,h:311,sx:1100,sz:800,rot:.2},{name:"\u7A7A\u6CBC\u5CB3",x:-14800,z:7400,h:1099,sx:3200,sz:2400,rot:2.2},{name:"\u672D\u5E4C\u5CB3",x:-16500,z:9600,h:1293,sx:3800,sz:2600,rot:2},{name:"\u6075\u5EAD\u5CB3\u65B9\u9762",x:-8e3,z:22e3,h:1320,sx:4500,sz:3500,rot:.6},{name:"\u4F59\u5E02\u5CB3\u65B9\u9762",x:-34e3,z:-4e3,h:1488,sx:6500,sz:4500,rot:.2}]});function Hn(s,{positions:t,colors:e,sizes:n,fogDensity:i=1e-4,minPx:r=1.5,maxPx:o=48}){let a=new s.BufferGeometry;a.setAttribute("position",new s.BufferAttribute(t,3)),a.setAttribute("aColor",new s.BufferAttribute(e,3)),a.setAttribute("aSize",new s.BufferAttribute(n,1));let l={uProj:{value:1e3},uFog:{value:i},uGain:{value:1},uMinPx:{value:r},uMaxPx:{value:o}},c=new s.ShaderMaterial({uniforms:l,transparent:!0,depthWrite:!1,blending:s.AdditiveBlending,vertexShader:`
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
      }`}),h=new s.Points(a,c);return h.frustumCulled=!1,{points:h,geo:a,uniforms:l,material:c}}function Qx(s,{count:t=9e3,box:e=160,fall:n=3.2,wind:i=[2.2,.8],size:r=.11,bright:o=1}){let a=new Float32Array(t*4),l=12345,c=()=>(l=Math.imul(l,1664525)+1013904223>>>0)/4294967296;for(let f=0;f<t;f++)a[f*4]=c(),a[f*4+1]=c(),a[f*4+2]=c(),a[f*4+3]=c();let h=new s.BufferGeometry;h.setAttribute("position",new s.BufferAttribute(new Float32Array(t*3),3)),h.setAttribute("aSeed",new s.BufferAttribute(a,4));let u={uTime:{value:0},uCam:{value:new s.Vector3},uBox:{value:e},uFall:{value:n},uWind:{value:new s.Vector2(i[0],i[1])},uSize:{value:r},uProj:{value:1e3},uBright:{value:o},uFog:{value:1e-4},uTint:{value:new s.Color(1,.92,.88)}},d=new s.ShaderMaterial({uniforms:u,transparent:!0,depthWrite:!1,blending:s.AdditiveBlending,vertexShader:`
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
      }`}),p=new s.Points(h,d);return p.frustumCulled=!1,{points:p,uniforms:u,material:d}}var Td=ce(()=>{Fs()});function jx(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function em({panes:s,rows:t,w:e,h:n,seed:i,deck:r}){let o=()=>{let g=document.createElement("canvas");return g.width=e,g.height=n,g},a=o(),l=o(),c=o(),h=a.getContext("2d"),u=l.getContext("2d"),d=c.getContext("2d"),p=jx(i),f=e/s;h.fillStyle=r?"#c9ccd0":"#b9b5ac",h.fillRect(0,0,e,n),u.fillStyle="#000",u.fillRect(0,0,e,n),d.fillStyle="#c8c8c8",d.fillRect(0,0,e,n);let x=r?[{y0:0,y1:.14,glass:!1},{y0:.14,y1:.84,glass:!0},{y0:.84,y1:1,glass:!1}]:[{y0:0,y1:.5,glass:!0,shop:!0},{y0:.5,y1:.6,glass:!1},{y0:.6,y1:.9,glass:!0},{y0:.9,y1:1,glass:!1}];for(let g of x){let _=Math.round(g.y0*n),y=Math.round(g.y1*n);if(!g.glass){h.fillStyle=r?"#aeb2b8":"#9a968d",h.fillRect(0,_,e,y-_),h.fillStyle="rgba(0,0,0,0.22)",h.fillRect(0,_,e,2),h.fillRect(0,y-3,e,3),h.fillStyle="rgba(255,255,255,0.25)",h.fillRect(0,_+2,e,2);continue}for(let M=0;M<s;M++){let b=Math.round(M*f),w=Math.round((M+1)*f),v=3,S=b+v,C=w-v,A=_+v,R=y-v,D=.55+.45*p(),z=h.createLinearGradient(0,A,0,R);z.addColorStop(0,`rgb(${Math.round(70+80*D)},${Math.round(95+90*D)},${Math.round(125+90*D)})`),z.addColorStop(.55,`rgb(${Math.round(24+30*D)},${Math.round(34+36*D)},${Math.round(50+40*D)})`),z.addColorStop(1,`rgb(${Math.round(14+14*D)},${Math.round(18+16*D)},${Math.round(26+18*D)})`),h.fillStyle=z,h.fillRect(S,A,C-S,R-A),h.fillStyle=r?"#d7dade":"#8e8a82",h.fillRect(S+(C-S)*.5-1,A,2,R-A),h.fillRect(S,A+(R-A)*.62,C-S,2);let N=p()<(g.shop?.82:.62),O=.35+.65*p(),V=p()<.72,G=p()<.3?.2+.6*p():0;if(N){let rt=u.createLinearGradient(0,A,0,R),W=V?[255,196,130]:[215,232,255];rt.addColorStop(0,`rgb(${W[0]*O|0},${W[1]*O|0},${W[2]*O|0})`),rt.addColorStop(1,`rgb(${W[0]*O*.55|0},${W[1]*O*.55|0},${W[2]*O*.55|0})`),u.fillStyle=rt,u.fillRect(S,A,C-S,R-A),u.fillStyle="rgba(0,0,0,0.25)",u.fillRect(S,A+(R-A)*.62,C-S,(R-A)*.38)}G>0&&(h.fillStyle="#b9ad98",h.fillRect(S,A,C-S,(R-A)*G),N&&(u.fillStyle=`rgb(${200*O|0},${150*O|0},${100*O|0})`,u.fillRect(S,A,C-S,(R-A)*G))),d.fillStyle="#1a1a60",d.fillRect(S,A,C-S,R-A),d.fillStyle="#c8c8a0",d.fillRect(S+(C-S)*.5-1,A,2,R-A)}if(g.shop)for(let M=0;M<s;M+=5){let b=Math.round(M*f)+4;h.fillStyle="#2a2a2c",h.fillRect(b,_+(y-_)*.1,f*1.6,(y-_)*.9),u.fillStyle="#ffd9a8",u.fillRect(b+4,_+(y-_)*.16,f*1.6-8,(y-_)*.74)}}let m=(g,_)=>{let y=new Qt.CanvasTexture(g);return _&&(y.colorSpace=Qt.SRGBColorSpace),y.anisotropy=8,y.generateMipmaps=!0,y.minFilter=Qt.LinearMipmapLinearFilter,y};return{map:m(a,!0),emissiveMap:m(l,!0),rough:m(c,!1)}}function t_(s,{x:t,z:e}){let n={},i=new Qt.MeshStandardMaterial({color:14475235,roughness:.5,metalness:.45,emissive:new Qt.Color(.7,.8,1),emissiveIntensity:0}),r=new Qt.MeshStandardMaterial({color:10133414,roughness:.55,metalness:.55,emissive:new Qt.Color(.7,.8,1),emissiveIntensity:0}),o=new Qt.MeshStandardMaterial({color:10328724,roughness:.9}),a=new Qt.MeshStandardMaterial({color:15856889,roughness:.7});n.steel=i,n.steelDark=r;let l=new Ii(Qt,i),c=new Ii(Qt,r),h=(k,I,$,ht,Wt,ot=!0)=>{let Zt=new Qt.Mesh(k,I);return Zt.position.set($,ht,Wt),Zt.castShadow=ot,Zt.receiveShadow=!0,s.add(Zt),Zt},u=10,d=87,p=13.5,f=3.7,x=k=>p+(f-p)*((k-u)/(d-u)),m=[[1,1],[1,-1],[-1,-1],[-1,1]],g=(k,I,$,ht=1)=>{let Wt=x($)*ht;return[t+k*Wt,$,e+I*Wt]},_=(k,I,$)=>k+(I-k)*$,y=k=>(k-u)/(d-u),M=[u,18.5,27,35.5,44.5,53.5,62,70,77.5,83,d],b=(k,I,$)=>[_(k[0],I[0],$),_(k[1],I[1],$),_(k[2],I[2],$)],w=(k,I)=>{let $=[I[0]-k[0],I[1]-k[1],I[2]-k[2]],ht=Math.hypot(...$);return[$[0]/ht,$[1]/ht,$[2]/ht]},v=(k,I,$)=>[k[0]+I[0]*$,k[1]+I[1]*$,k[2]+I[2]*$],S=(k,I,$)=>{l.add(k,I,$);let ht=w(k,I);c.add(k,v(k,ht,.7),$*1.7,$*1.35),c.add(I,v(I,ht,-.7),$*1.7,$*1.35)};for(let k=0;k<M.length-1;k++){let I=M[k],$=M[k+1],ht=y(I),Wt=y($),ot=_(.82,.36,ht),Zt=_(.82,.36,Wt),Pt=_(.3,.13,(ht+Wt)/2),Dt=_(.36,.16,Wt);for(let P=0;P<4;P++){let[T,B]=m[P],[ct,tt]=m[(P+1)%4];l.add(g(T,B,I),g(T,B,$),ot,Zt),l.add(g(T,B,I,.9),g(T,B,$,.9),ot*.5,Zt*.5);let dt=(I+$)/2;l.add(g(T,B,dt),g(T,B,dt,.9),.08),S(g(T,B,I),g(ct,tt,$),Pt),S(g(ct,tt,I),g(T,B,$),Pt),l.add(g(T,B,$),g(ct,tt,$),Dt),k%2===0&&k<6&&l.add(g(T,B,dt),g(ct,tt,dt),Dt*.55);let _t=g(T,B,$,.62),K=g(ct,tt,$,.62);l.add(_t,K,Dt*.5),l.add(g(T,B,$,.95),_t,Dt*.45),c.add([g(T,B,$)[0],$-.55,g(T,B,$)[2]],[g(T,B,$)[0],$+.55,g(T,B,$)[2]],Zt*1.5),c.add([g(T,B,$)[0],$-.07,g(T,B,$)[2]],[g(T,B,$)[0],$+.07,g(T,B,$)[2]],Zt*2.7)}if(k%2===1){let P=(T,B)=>g(T,B,$,.62);l.add(P(1,1),P(-1,-1),.09),l.add(P(1,-1),P(-1,1),.09)}}for(let[k,I]of m){let $=g(k,I,u);h(new Qt.BoxGeometry(3.6,1.6,3.6),o,$[0],u+.2,$[2]),c.add([$[0],u+.9,$[2]],[$[0],u+1.5,$[2]],1.5,1)}let C=(k,I,$)=>[t+k*1.35,$,e+I*1.35];for(let[k,I]of m)l.add(C(k,I,u),C(k,I,d+3),.2);for(let k=0;k<M.length;k++){let I=M[k];for(let $=0;$<4;$++){let[ht,Wt]=m[$],[ot,Zt]=m[($+1)%4];if(l.add(C(ht,Wt,I),C(ot,Zt,I),.1),k<M.length-1){let Pt=M[k+1];l.add(C(ht,Wt,I),C(ot,Zt,Pt),.07)}}}let A=(k,I)=>{let $=x(k)*I;h(new Qt.BoxGeometry($*2,.22,$*2),r,t,k,e);for(let ht=0;ht<4;ht++){let[Wt,ot]=m[ht],[Zt,Pt]=m[(ht+1)%4],Dt=[t+Wt*$,k+1.05,e+ot*$],P=[t+Zt*$,k+1.05,e+Pt*$];l.add(Dt,P,.045),l.add(b(Dt,P,0),b(Dt,P,1),.045);let T=Math.max(2,Math.round($*2/1.9));for(let B=0;B<T;B++){let ct=b([Dt[0],k,Dt[2]],[P[0],k,P[2]],B/T);l.add(ct,[ct[0],k+1.05,ct[2]],.035)}l.add([Dt[0],k+.55,Dt[2]],[P[0],k+.55,P[2]],.03)}for(let[ht,Wt]of m)l.add(C(ht,Wt,k-.1),g(ht,Wt,k,.85),.1)};A(35.5,.86),A(62,.86);let R=15.6,D=90,z=4.5,N=h(new Qt.CylinderGeometry(6.6*Math.SQRT2,3.9*Math.SQRT2,3.3,4,1),i,t,88.35,e);N.rotation.y=Math.PI/4;for(let[k,I]of m){c.add([t+k*3.9,86.7,e+I*3.9],[t+k*6.6,90,e+I*6.6],.28);for(let $ of[-.5,0,.5]){let ht=[t+k*3.9*1,86.7,e+I*3.9],Wt=[t+k*6.6,90,e+I*6.6]}}for(let k=0;k<4;k++){let[I,$]=m[k],[ht,Wt]=m[(k+1)%4],ot=[(I+ht)/2,($+Wt)/2];c.add([t+ot[0]*3.9,86.7,e+ot[1]*3.9],[t+ot[0]*6.6,90,e+ot[1]*6.6],.16)}for(let[k,I]of m)h(new Qt.BoxGeometry(1.6,.5,1.6),r,t+k*3.7,86.8,e+I*3.7);h(new Qt.BoxGeometry(R+.8,.45,R+.8),r,t,90,e);for(let k=-3;k<=3;k++)l.add([t-R/2,89.6,e+k*2.2],[t+R/2,89.6,e+k*2.2],.12),l.add([t+k*2.2,89.6,e-R/2],[t+k*2.2,89.6,e+R/2],.12);let O=em({panes:15,rows:1,w:1024,h:192,seed:77,deck:!0}),V=new Qt.MeshStandardMaterial({map:O.map,emissiveMap:O.emissiveMap,emissive:new Qt.Color(1,1,1),emissiveIntensity:.4,roughnessMap:O.rough,metalnessMap:O.rough,roughness:1,metalness:1});n.deckMat=V;let G=h(new Qt.BoxGeometry(R,z,R),[V,V,i,r,V,V],t,D+.2+z/2,e),rt=D+.2+z;h(new Qt.BoxGeometry(R+1.4,.55,R+1.4),i,t,rt+.28,e),h(new Qt.BoxGeometry(R+.9,.4,R+.9),r,t,D+.2,e);let W=(R+1.4)/2-.2,Z=rt+.55;for(let k=0;k<4;k++){let[I,$]=m[k],[ht,Wt]=m[(k+1)%4],ot=[t+I*W,Z+1,e+$*W],Zt=[t+ht*W,Z+1,e+Wt*W];l.add(ot,Zt,.05),l.add([ot[0],Z+.5,ot[2]],[Zt[0],Z+.5,Zt[2]],.03);for(let Pt=0;Pt<10;Pt++){let Dt=b([ot[0],Z,ot[2]],[Zt[0],Z,Zt[2]],Pt/10);l.add(Dt,[Dt[0],Z+1,Dt[2]],.035)}}h(new Qt.BoxGeometry(6.2,2.8,6.2),i,t,Z+1.4,e),h(new Qt.BoxGeometry(3.6,1.6,3.6),r,t+.4,Z+3.6,e-.3),h(new Qt.CylinderGeometry(.9,.9,1.4,12),r,t-4.8,Z+.7,e+3.8),h(new Qt.CylinderGeometry(.5,.5,1.1,10),r,t+4.6,Z+.55,e-4.2),h(new Qt.BoxGeometry(2.2,1,1.4),r,t+4.5,Z+.5,e+4.4);let it=Z+3.2,At=126.5,Ut=k=>_(2.2,.95,(k-it)/(At-it)),q=(k,I,$,ht=1)=>[t+k*Ut($)*ht,$,e+I*Ut($)*ht],Q=6,at=[];for(let k=0;k<=Q;k++)at.push(_(it,At,k/Q));for(let k=0;k<Q;k++){let I=at[k],$=at[k+1],ht=k/Q,Wt=_(.34,.17,ht);for(let ot=0;ot<4;ot++){let[Zt,Pt]=m[ot],[Dt,P]=m[(ot+1)%4];l.add(q(Zt,Pt,I),q(Zt,Pt,$),Wt,Wt*.92),S(q(Zt,Pt,I),q(Dt,P,$),.095),S(q(Dt,P,I),q(Zt,Pt,$),.095),l.add(q(Zt,Pt,$),q(Dt,P,$),.12);let T=q(Zt,Pt,$);c.add([T[0],$-.3,T[2]],[T[0],$+.3,T[2]],Wt*1.5)}}let Et=(k,I)=>{h(new Qt.BoxGeometry(I*2,.15,I*2),r,t,k,e,!1);for(let $=0;$<4;$++){let[ht,Wt]=m[$],[ot,Zt]=m[($+1)%4],Pt=[t+ht*I,k+.95,e+Wt*I],Dt=[t+ot*I,k+.95,e+Zt*I];l.add(Pt,Dt,.04);for(let P=0;P<4;P++){let T=b([Pt[0],k,Pt[2]],[Dt[0],k,Dt[2]],P/4);l.add(T,[T[0],k+.95,T[2]],.03)}}};Et(at[3],2.9),Et(at[5],2.4);let xt=new Qt.MeshStandardMaterial({color:15922164,roughness:.4,metalness:.5,side:Qt.DoubleSide}),Vt=new Qt.SphereGeometry(1.15,18,8,0,Math.PI*2,0,.75),ve=(k,I,$)=>{let ht=new Qt.Mesh(Vt,xt);ht.position.set(t+Math.cos(k)*3.6,I,e+Math.sin(k)*3.6),ht.rotation.set(0,-k+Math.PI/2,Math.PI/2+.2*0),ht.rotateZ(0),ht.scale.setScalar($),ht.lookAt(t+Math.cos(k)*30,I+1,e+Math.sin(k)*30),ht.rotateX(Math.PI/2*0),ht.castShadow=!0,s.add(ht),l.add([t+Math.cos(k)*2.4,I-.1,e+Math.sin(k)*2.4],[t+Math.cos(k)*3.5,I,e+Math.sin(k)*3.5],.1),l.add([t+Math.cos(k)*3.6,I,e+Math.sin(k)*3.6],[t+Math.cos(k)*4.5,I+.1,e+Math.sin(k)*4.5],.05,.03)};ve(.6,at[4]+.3,1),ve(3.5,at[4]+.3,.8),ve(5.2,at[2]+.3,.9);for(let k=0;k<4;k++){let I=k*Math.PI/2+Math.PI/4,$=new Qt.Mesh(new Qt.BoxGeometry(.14,2.4,.55),i);$.position.set(t+Math.cos(I)*3.3,at[5]+1.2,e+Math.sin(I)*3.3),$.rotation.y=-I,$.castShadow=!0,s.add($),l.add([t+Math.cos(I)*1.5,at[5]+1.2,e+Math.sin(I)*1.5],[t+Math.cos(I)*3.2,at[5]+1.2,e+Math.sin(I)*3.2],.06)}let Ct=At;h(new Qt.CylinderGeometry(.5,.62,.9,12),r,t,Ct+.45,e),c.add([t,Ct,e],[t,Ct+8,e],.55,.42),l.add([t,Ct,e],[t,Ct+8,e],.5,.38),c.add([t,Ct+8,e],[t,Ct+8.4,e],.9,.9),c.add([t,Ct+4,e],[t,Ct+4.3,e],.8,.8),l.add([t,Ct+8.4,e],[t,Ct+15,e],.3,.2),c.add([t,Ct+12.2,e],[t,Ct+12.45,e],.55,.55),l.add([t,Ct+15,e],[t,147.2,e],.17,.045),l.add([t-1.7,Ct+11.2,e],[t+1.7,Ct+11.2,e],.05),l.add([t,Ct+11.2,e-1.4],[t,Ct+11.2,e+1.4],.05);for(let k=0;k<3;k++){let I=k/3*Math.PI*2;l.add([t,Ct+4.2,e],[t+Math.cos(I)*1.9,Ct+1.5,e+Math.sin(I)*1.9],.05)}let se=(k,I)=>new Qt.MeshStandardMaterial({map:I.map,emissiveMap:I.emissiveMap,emissive:new Qt.Color(1,1,1),emissiveIntensity:.35,roughnessMap:I.rough,metalnessMap:I.rough,roughness:1,metalness:.4}),ue=em({panes:12,rows:2,w:1024,h:256,seed:91,deck:!1}),st=em({panes:8,rows:2,w:1024,h:256,seed:92,deck:!1}),gt=se(12,ue),ft=se(8,st);n.baseMats=[gt,ft];let Nt=new Qt.MeshStandardMaterial({color:15659510,roughness:.7}),pt=34,te=22,zt=10;h(new Qt.BoxGeometry(pt,zt,te),[ft,ft,Nt,o,gt,gt],t,zt/2,e+.5),h(new Qt.BoxGeometry(pt+.8,.8,te+.8),a,t,zt+.3,e+.5),h(new Qt.BoxGeometry(5.5,.35,9),i,t-pt/2-2.6,3.8,e+.5);for(let k of[-1,1])h(new Qt.CylinderGeometry(.17,.17,3.8,8),i,t-pt/2-4.9,1.9,e+.5+k*4.2);let ae=new Qt.MeshStandardMaterial({color:4869975,roughness:.5,metalness:.5,emissive:new Qt.Color(1,.75,.45),emissiveIntensity:0});n.bolM=ae;for(let k=0;k<26;k++){let I=k/26*Math.PI*2,$=t+Math.cos(I)*31,ht=e+Math.sin(I)*21;Math.abs(ht-e)<12&&Math.abs($-t)<19||h(new Qt.CylinderGeometry(.16,.16,.9,8),ae,$,.45,ht,!1)}let ie=jx(5);for(let[k,I,$,ht]of[[-pt/2-6,-9,3,2],[-pt/2-6,10,3,2],[pt/2+4,-6,2,3],[pt/2+4,8,2,3]])h(new Qt.BoxGeometry($*2,.7,ht*2),o,t+k,.35,e+I,!1),h(new Qt.SphereGeometry(1,10,6),a,t+k,.7,e+I,!1).scale.set($*.95,.45,ht*.95);for(let k=0;k<9;k++){let I=ie()*Math.PI*2,$=23+ie()*10,ht=h(new Qt.SphereGeometry(1,10,6),a,t+Math.cos(I)*$*1.1,.2,e+Math.sin(I)*$*.75,!1);ht.scale.set(1.5+ie()*2.2,.5+ie()*.6,1.2+ie()*1.8),ht.rotation.y=ie()*3}for(let k=0;k<3;k++){let I=t-27,$=e-6+k*6;l.add([I,0,$],[I,8.5,$],.09,.06)}return s.add(l.build({castShadow:!0,sides:6}),c.build({castShadow:!0,sides:7})),n.beacon=Hn(Qt,{positions:new Float32Array([t,148,e,t,Ct+8.6,e,t+1,Z+5.3,e]),colors:new Float32Array([14,.6,.4,6,.4,.3,4,.3,.25]),sizes:new Float32Array([2.4,1.4,1.1]),fogDensity:4e-5,minPx:2,maxPx:40}),s.add(n.beacon.points),n}var Qt,e_=ce(()=>{Ee();bd();Td();Qt=Yt});function ke(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new $t;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0,p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[f].length!==s[0].morphAttributes[f].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+f+'" morph attribute.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let p=s[d].index;for(let f=0;f<p.count;++f)u.push(p.getX(f)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=n_(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][d]);let f=n_(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(f)}}}return l}function n_(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Jt(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,p=h.count;d<p;d++)for(let f=0;f<e;f++){let x=h.getComponent(d,f);a.setComponent(d+u,f,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var Er=ce(()=>{Ee()});function AT(s){let n=[[-2.25,.34],[-2.25,.86],[-1.95,.98],[-1.45,1],[-.95,1.46],[.45,1.47],[1.05,1.02],[2,.9],[2.25,.78],[2.25,.34]],i=new s.Shape(n.map(([d,p])=>new s.Vector2(d,p))),r=new s.ExtrudeGeometry(i,{depth:1.8-.12,bevelEnabled:!0,bevelThickness:.06,bevelSize:.06,bevelSegments:1,curveSegments:1});r.translate(0,0,-(1.8-.12)/2),r.deleteAttribute("uv");let o=new s.ExtrudeGeometry(new s.Shape([[-.88,1.03],[-.5,1.4],[.4,1.41],[.96,1.06]].map(([d,p])=>new s.Vector2(d,p))),{depth:1.8+.02,bevelEnabled:!1});o.translate(0,0,-(1.8+.02)/2),o.deleteAttribute("uv");let a=[];for(let d of[1.45,-1.4])for(let p of[-1,1]){let f=new s.CylinderGeometry(.34,.34,.24,10);f.rotateX(Math.PI/2),f.translate(d,.34,p*(1.8/2-.1)),f.deleteAttribute("uv"),a.push(f)}let l=new s.BoxGeometry(4.5-.5,.18,1.8-.08);l.translate(0,.43,0),l.deleteAttribute("uv");let c=(d,p,f)=>{let x=d.attributes.position.count,m=new Float32Array(x*3),g=new Float32Array(x);for(let _=0;_<x;_++)m[_*3]=p[0],m[_*3+1]=p[1],m[_*3+2]=p[2],g[_]=f;return d.setAttribute("color",new s.BufferAttribute(m,3)),d.setAttribute("aPart",new s.BufferAttribute(g,1)),d},h=[c(r,[1,1,1],0),c(o,[.045,.055,.07],1),c(l,[.34,.33,.32],1),...a.map(d=>c(d,[.03,.03,.035],1))],u=ke(h.map(d=>d.index?d.toNonIndexed():d));return u.computeVertexNormals(),u}function ET(s){s.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aPart;`).replace("#include <color_vertex>",`#include <color_vertex>
if (aPart > 0.5) vColor.xyz = color.xyz;`)},s.customProgramCacheKey=()=>"part-color-v1"}function Ad(s,t){let e=AT(s),n=new s.MeshStandardMaterial({color:16777215,roughness:.34,metalness:.5,vertexColors:!0});ET(n);let i=new s.InstancedMesh(e,n,t.length);i.frustumCulled=!1,i.castShadow=!1,i.receiveShadow=!1;let r=new s.Color;t.forEach((x,m)=>{r.setHex(i_[(m*7+(x.ph*97|0))%i_.length]),i.setColorAt(m,r)});let o=new s.Matrix4,a=new s.Quaternion,l=new s.Vector3,c=new s.Vector3(1,1,1),h=new s.Vector3(0,1,0),u=new s.Vector3(0,0,1),d=new s.Quaternion,p=.8,f=(x,m)=>{let g=Math.PI*2/(16+x.ph*26),_=x.ph*40,y=x.speed*(m+p*Math.sin(g*m+_)/g),M=((x.off+x.dir*y)%x.len+x.len)%x.len+x.min,b=x.speed*(1+p*Math.cos(g*m+_)),w=-x.speed*p*g*Math.sin(g*m+_);return{pos:x.alongX?[M,x.fixed]:[x.fixed,M],v:b,acc:w}};return{mesh:i,posOf:f,update(x,m){for(let g=0;g<t.length;g++){let _=t[g],{pos:[y,M],acc:b}=f(_,x),w=_.alongX?_.dir>0?0:Math.PI:_.dir>0?-Math.PI/2:Math.PI/2;if(a.setFromAxisAngle(h,w),d.setFromAxisAngle(u,Math.max(-.03,Math.min(.03,-b*.012))),a.multiply(d),l.set(y,0,M),o.compose(l,a,c),i.setMatrixAt(g,o),m){let v=_.alongX?_.dir:0,S=_.alongX?0:_.dir,C=_.alongX?0:.7,A=_.alongX?.7:0,R=y+v*2.2,D=M+S*2.2,z=y-v*2.2,N=M-S*2.2,O=g*12;m[O++]=R-C,m[O++]=.74,m[O++]=D-A,m[O++]=R+C,m[O++]=.74,m[O++]=D+A,m[O++]=z-C,m[O++]=.9,m[O++]=N-A,m[O++]=z+C,m[O++]=.9,m[O++]=N+A}}i.instanceMatrix.needsUpdate=!0}}}function CT(s){let t=[],e=(a,l,c,h,u)=>{a.deleteAttribute("uv");let d=a.index?a.toNonIndexed():a,p=d.attributes.position.count,f=new Float32Array(p*3),x=new Float32Array(p),m=new Float32Array(p),g=new Float32Array(p);for(let _=0;_<p;_++)f[_*3]=l[0],f[_*3+1]=l[1],f[_*3+2]=l[2],x[_]=c,m[_]=h,g[_]=u;d.setAttribute("color",new s.BufferAttribute(f,3)),d.setAttribute("aPart",new s.BufferAttribute(x,1)),d.setAttribute("aSide",new s.BufferAttribute(m,1)),d.setAttribute("aPivot",new s.BufferAttribute(g,1)),t.push(d)},n=new s.BoxGeometry(.44,.62,.26);n.translate(0,1.18,0),e(n,[1,1,1],0,0,0);let i=new s.SphereGeometry(.115,8,6);i.translate(0,1.6,0),e(i,[.82,.64,.54],1,0,0);let r=new s.SphereGeometry(.125,8,5,0,Math.PI*2,0,Math.PI*.55);r.translate(0,1.625,0),e(r,[.16,.17,.2],1,0,0);for(let a of[-1,1]){let l=new s.BoxGeometry(.16,.86,.17);l.translate(0,.43,a*.11),e(l,[.07,.075,.09],1,a,.86);let c=new s.BoxGeometry(.11,.56,.11);c.translate(0,1.14,a*.27),e(c,[1,1,1],0,-a,1.46);let h=new s.BoxGeometry(.24,.1,.18);h.translate(.04,.05,a*.11),e(h,[.05,.05,.05],1,a,.86)}let o=ke(t);return o.computeVertexNormals(),o}function Rc(s,t){let e=CT(s),n=new Float32Array(t.length);e.setAttribute("aGait",new s.InstancedBufferAttribute(n,1));let i=new s.MeshStandardMaterial({color:16777215,roughness:.9,metalness:0,vertexColors:!0});i.onBeforeCompile=p=>{p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
attribute float aPart, aSide, aPivot, aGait;`).replace("#include <color_vertex>",`#include <color_vertex>
if (aPart > 0.5) vColor.xyz = color.xyz;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        if (aSide != 0.0) {
          float ang = sin(aGait) * 0.62 * aSide;
          float cs = cos(ang), sn = sin(ang);
          vec2 d = vec2(transformed.x, transformed.y - aPivot);
          transformed.x = d.x * cs - d.y * sn;
          transformed.y = aPivot + d.x * sn + d.y * cs;
        }
        transformed.y += abs(sin(aGait)) * 0.035;`)},i.customProgramCacheKey=()=>"walker-v1";let r=new s.InstancedMesh(e,i,t.length);r.frustumCulled=!1,r.castShadow=!1;let o=new s.Color;t.forEach((p,f)=>{o.setHex(s_[(f*5+(p.ph*31|0))%s_.length]),r.setColorAt(f,o)});let a=new s.Matrix4,l=new s.Quaternion,c=new s.Vector3,h=new s.Vector3(1,1,1),u=new s.Vector3(0,1,0),d=1.35;return{mesh:r,update(p){for(let f=0;f<t.length;f++){let x=t[f],m=Math.abs(x.x1-x.x0),g=((x.off+x.speed*p)%(2*m)+2*m)%(2*m),_=g<m?g:2*m-g,y=(g<m?1:-1)*(x.dir>0?1:-1),M=Math.min(x.x0,x.x1)+(x.dir>0?_:m-_);l.setFromAxisAngle(u,y>0?0:Math.PI),c.set(M,0,x.z+Math.sin(M*.07+x.ph*9)*.35),a.compose(c,l,h),r.setMatrixAt(f,a),n[f]=g/d*Math.PI*2+x.ph*6.28}r.instanceMatrix.needsUpdate=!0,e.attributes.aGait.needsUpdate=!0}}}var i_,s_,nm=ce(()=>{Er();i_=[15921906,15263978,13225170,9277849,1776930,2764602,8003359,2045270,14209732,11975360,4081233];s_=[1382172,2106412,2830138,3812139,1911615,4868690,8006186,2902586,9071146,14474460,5913386,3493998]});function Ed({kita:s,minami:t,nishi:e,higashi:n}){let i=e?-e:n-1,r=PT(i),o=s?im(s-1):sm(t-1);return{x:r,z:o,j:i}}var Pc,Cd,RT,PT,im,sm,VE,r_=ce(()=>{Pc={x:-90,z:0},Cd=s=>-54+108*s,RT=s=>62.5+108*s,PT=s=>108*s,im=s=>-(116.5+108*s),sm=s=>116.5+108*s;VE={tvTower:{name:"\u3055\u3063\u307D\u308D\u30C6\u30EC\u30D3\u5854",...Pc,basis:"\u5927\u901A\u897F1\u4E01\u76EE\uFF08\u6771\u7AEF\u4ED8\u8FD1\uFF09",model:"\u624B\u7D9A\u304D\u751F\u6210\u306E\u6982\u7565\u30E2\u30C7\u30EB\uFF08\u9AD8\u3055147.2m\u30FB\u5C55\u671B\u53F0\u7D0490m\uFF09"},jrTower:{name:"JR\u30BF\u30EF\u30FC",...Ed({kita:5,nishi:2}),basis:"\u53175\u6761\u897F2\u4E01\u76EE",model:"\u624B\u7D9A\u304D\u751F\u6210\u306E\u6982\u7565\u30E2\u30C7\u30EB\uFF08\u9AD8\u3055173m\uFF09"},station:{name:"\u672D\u5E4C\u99C5",...Ed({kita:6,nishi:3}),basis:"\u53176\u6761\u897F4\u4E01\u76EE\u4ED8\u8FD1",model:"\u4F4E\u5C64\u306E\u99C5\u30D3\u30EB\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},clockTower:{name:"\u672D\u5E4C\u5E02\u6642\u8A08\u53F0",...Ed({kita:1,nishi:2}),basis:"\u53171\u6761\u897F2\u4E01\u76EE",model:"\u624B\u7D9A\u304D\u751F\u6210\u306E\u6982\u7565\u30E2\u30C7\u30EB\uFF08\u6728\u90202\u968E\u5EFA\u3066\u30FB\u4E2D\u592E\u306B\u6642\u8A08\u5854\uFF09"},tanukikoji:{name:"\u72F8\u5C0F\u8DEF",x:-430,z:332.5,basis:"\u53572\u301C3\u6761\u30FB\u897F1\u301C7\u4E01\u76EE\uFF08\u8857\u533A\u306E\u4E2D\u592E\u3092\u901A\u308B\u5546\u5E97\u8857\uFF09",model:"\u30A2\u30FC\u30B1\u30FC\u30C9\u5546\u5E97\u8857\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},susukino:{name:"\u3059\u3059\u304D\u306E\u4EA4\u5DEE\u70B9",x:Cd(-4)+0,z:RT(4),basis:"\u53574\u301C5\u6761\u897F4\u4E01\u76EE\u4ED8\u8FD1",model:"\u4EA4\u5DEE\u70B9\u3068\u30CD\u30AA\u30F3\u770B\u677F\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},factory:{name:"\u30B5\u30C3\u30DD\u30ED\u30D5\u30A1\u30AF\u30C8\u30EA\u30FC",...Ed({kita:2,higashi:4}),basis:"\u53172\u6761\u67714\u4E01\u76EE",model:"\u8D64\u30EC\u30F3\u30AC\u68DF\u3068\u30AC\u30E9\u30B9\u5C4B\u6839\u306E\u30A2\u30C8\u30EA\u30A6\u30E0\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"},moiwa:{name:"\u85FB\u5CA9\u5C71\uFF08\u5C55\u671B\u53F0\uFF09",x:-2496,z:3607,elev:531,basis:"\u7DEF\u5EA6\u7D4C\u5EA6\uFF08\u6982\u7565\uFF09\u304B\u3089\u306E\u914D\u7F6E",model:"\u5730\u5F62\u306E\u76DB\u308A\u4E0A\u304C\u308A\u3068\u3057\u3066\u6982\u7565\u8868\u73FE"}}});var o_,a_,rm,Pd,l_=ce(()=>{Ee();_d();yd();Fs();Md();bd();tm();e_();Td();nm();r_();o_=[{id:"overview",name:"\u672D\u5E4C\u306E\u5168\u666F",start:0,end:5,ready:!1},{id:"station",name:"\u672D\u5E4C\u99C5\u30FBJR\u30BF\u30EF\u30FC",start:5,end:11,ready:!1},{id:"odori",name:"\u5927\u901A\u516C\u5712\u30FB\u3055\u3063\u307D\u308D\u30C6\u30EC\u30D3\u5854",start:11,end:18,ready:!0},{id:"clocktower",name:"\u672D\u5E4C\u5E02\u6642\u8A08\u53F0",start:18,end:25,ready:!1},{id:"susukino",name:"\u72F8\u5C0F\u8DEF\u30FB\u3059\u3059\u304D\u306E",start:25,end:32,ready:!1},{id:"factory",name:"\u30B5\u30C3\u30DD\u30ED\u30D5\u30A1\u30AF\u30C8\u30EA\u30FC",start:32,end:39,ready:!1},{id:"moiwa",name:"\u85FB\u5CA9\u5C71\u304B\u3089\u306E\u591C\u666F",start:39,end:49,ready:!1},{id:"ending",name:"ENDING",start:49,end:55,ready:!1}],a_=new L(-.66,.25,.71).normalize(),rm=[{zenith:"#24508f",horizon:"#a9c6e8",horizonWarm:"#ffbd80",sun:"#ffd2a2",cloudLit:"#ffdcc0",cloudDark:"#8296b8",fog:"#bfd0e6",sunCol:"#ffc88f",fogD:62e-6},{zenith:"#0f2a5c",horizon:"#4a78b4",horizonWarm:"#f29a58",sun:"#ff9d62",cloudLit:"#eaa68e",cloudDark:"#3b4d7c",fog:"#5a7fb0",sunCol:"#ff9a60",fogD:7e-5},{zenith:"#050b20",horizon:"#12305c",horizonWarm:"#243e66",sun:"#ff9a60",cloudLit:"#3a4a70",cloudDark:"#0c1630",fog:"#122646",sunCol:"#ff9a60",fogD:8e-5}],Pd=class extends Us{constructor(t,e,n,i={}){super(t,e,n,i),this.shot=o_.find(r=>r.id===(i.shot||"odori"))??o_[2],this.timeOffset=this.shot.start,this.duration=this.shot.end-this.shot.start,this.timeline.duration=this.duration,this.timeline.frameCount=Math.round(this.duration*this.timeline.fps),this.showTitle=this.shot.id==="ending",this.fadeSec=.35,this.nightU={value:.1},this.snowU={value:1}}async build(){let t=vd(20261115),e=this.scene,n=rm[0],i=sa(Yt,{sunDir:a_,colors:{...n,cloudCover:.36}});if(this.sky=i,e.add(i.mesh),e.fog=new ai(new lt(n.fog),n.fogD),this.glRenderer){let d=new Sn;d.add(new ne(i.mesh.geometry,i.material));let p=new pi(this.glRenderer);e.environment=p.fromScene(d,.015,1,3e3).texture,p.dispose()}let r=new di(16763023,3.4),o=this.shot.id==="odori"?new L(-330,0,0):new L(-500,0,-250);r.position.copy(o).addScaledVector(a_,3e3),r.target.position.copy(o),r.castShadow=!0,r.shadow.mapSize.set(4096,4096);let a=r.shadow.camera,l=this.shot.id==="odori"?[560,260]:[1700,520];a.left=-l[0],a.right=l[0],a.top=l[1],a.bottom=-l[1],a.near=200,a.far=6500,r.shadow.bias=-2e-4,r.shadow.normalBias=.9,e.add(r,r.target),this.sun=r,this.hemi=new ui(15134463,14271394,.5),e.add(this.hemi),e.add(Kx(Yt,{size:9e4,y:-40})),e.add(wd(Yt,{heightFn:Jx(),y:-4})),e.add(this._buildGround()),this._buildCity(t),this._buildTVTower(),this._buildParkAndStreet(t),this._buildTraffic(t),this.snow=Qx(Yt,{count:14e3,box:150,fall:3,wind:[2.2,.8],size:.06,bright:.55}),e.add(this.snow.points);let c=d=>{let p=d*d*(3-2*d),f=1-(1-d)*(1-d);return .5*p+.5*f},h=d=>d;this.rig=new Ar([{t:11,pos:[-420,40,14],target:[-140,54,-2],fov:38,ease:h},{t:12.78,pos:[-313,50,32],target:[-100,103,-20],fov:34,ease:h},{t:14.36,pos:[-211,62,44],target:[-108,76,-33],fov:35,ease:h},{t:15.99,pos:[-111,77,54],target:[-95,82,-25],fov:36,ease:h},{t:17.63,pos:[-61,85,39],target:[-109,85,-13],fov:37,ease:h},{t:18,pos:[-64,97,45],target:[-188,91,-69],fov:38,ease:h}],{shakeAmp:.1,shakeSeed:4,timeWarp:c});let u=d=>new ji(d.map(([p,f])=>({t:p,v:f})));this.tracks={night:u([[0,.04],[11,.1],[18,.22],[25,.55],[32,.8],[39,1],[55,1]]),palette:u([[0,0],[11,.12],[18,.4],[25,.85],[32,1.2],[39,2],[55,2]]),sunPower:u([[0,3.8],[18,3.1],[25,1.5],[32,.5],[39,0],[55,0]]),envPower:u([[0,.75],[18,.62],[25,.46],[32,.36],[39,.2],[55,.2]]),exposure:u([[0,1],[55,1]]),bloom:u([[0,.22],[18,.3],[32,.45],[55,.55]]),bloomThreshold:u([[0,1.5],[55,1]]),bloomRadius:u([[0,.5],[55,.7]]),dofAperture:u([[0,.5],[55,.6]]),dofMaxBlur:u([[0,4],[55,5]])},this.look.grade={uShadowAmt:.3,uVig:.3,uSat:1.04,uGrain:.022,uAberr:7e-4,uHighTint:new lt(1.03,1,.96)},this._ca=new lt,this._cb=new lt}_buildGround(){let t=new dn(12e3,12e3,1,1);t.rotateX(-Math.PI/2);let e=new me({color:16777215,roughness:.85,metalness:0});e.customProgramCacheKey=()=>"sapporo-ground-v2";let n=this.nightU;e.onBeforeCompile=r=>{r.uniforms.uNight=n,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
          uniform float uNight; varying vec3 vWP;
          ${Qn}`).replace("#include <color_fragment>",`#include <color_fragment>
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
totalEmissiveRadiance += gEmis;`)};let i=new ne(t,e);return i.receiveShadow=!0,i}_buildCity(t){let e=Sd(Yt,{uNight:this.nightU,uSnow:this.snowU}),n=new Os(Yt,e,11e4),i=new Os(Yt,e,3e4,Zx(Yt));this.boxes=n;let r=new Os(Yt,e,12e3,$x(Yt)),o=(f,x,m,g)=>Math.hypot(f-m,x-g),a=(f,x)=>{let m=Math.exp(-(((Math.abs(x)-112)/170)**2))*(f>-1500&&f<400?1:.3),g=Math.exp(-((o(f,x,-300,-600)/420)**2)),_=Math.exp(-((o(f,x,-430,520)/380)**2)),y=o(f,x,-450,-100);return Math.max(m,g,_)*.85+.25*Math.exp(-((y/1700)**2))},l=f=>{let x=t();return f>.55?x<.32?0:x<.55?2:x<.75?4:x<.85?1:3:f>.3?x<.25?0:x<.4?2:x<.6?4:x<.7?1:3:x<.12?0:x<.18?4:x<.25?1:3},c=f=>f===3?2.9:f===4?3.9:f===2?3.8:3.6,h=(f,x,m,g,_,y,M)=>{let b=Math.abs(m)<700&&f>-1500&&f<500;b&&g>12&&_>12&&(n.add(f,x,m-_/2+.35/2,g,.9,.35,6,y,M),n.add(f,x,m+_/2-.35/2,g,.9,.35,6,y,M),n.add(f-g/2+.35/2,x,m,.35,.9,_-2*.35,6,y,M),n.add(f+g/2-.35/2,x,m,.35,.9,_-2*.35,6,y,M));let w=t.int(2,b?5:3);for(let v=0;v<w;v++){let S=f+t.range(-g*.3,g*.3),C=m+t.range(-_*.3,_*.3),A=t();if(A<.34)n.add(S,x,C,t.range(2,Math.min(7,g*.35)),t.range(1.2,2.2),t.range(1.5,Math.min(5,_*.35)),5,y+v*.13,M);else if(A<.58)n.add(S,x,C,t.range(3,5),t.range(2.6,3.4),t.range(3,5),0,y+v*.17,M,0,[3,3.2,.3,.3]);else if(A<.82){let R=t.range(2,3.6);r.add(S,x,C,R,t.range(2.2,3.6),R,5,y+v*.11,M)}else n.add(S,x,C,.18,t.range(5,12),.18,6,y,M)}},u=!1,d=(f,x,m,g,_,y,M)=>{let b=t(),w=t(),v=c(y),S=Math.max(6,_*v);if(y===3&&_<=3&&!u&&t()<.7){n.add(f,0,x,m,S*.78,g,3,b,w);let C=Math.min(m,g)*t.range(.28,.4),A=m>=g;i.add(f,S*.78,x,(A?g:m)+.8,C,(A?m:g)+.8,3,b,w,A?Math.PI/2:0,[2.6,2.9,.5,.5]);return}if(_>=11&&m>30&&g>30){let C=t.int(3,4),A=C*4.2;n.add(f,0,x,m,A,g,t()<.5?4:0,b,w);let R=m*t.range(.55,.8),D=g*t.range(.5,.75),z=f+(m-R)*t.range(-.3,.3),N=x+(g-D)*t.range(-.3,.3),O=S-A;n.add(z,A,N,R,O,D,y===4?2:y,b+.31,w),t()<.5&&n.add(z,S,N,R*.6,t.range(4,9),D*.6,0,b+.7,w,0,[4,3.6,.8,.3]),h(z,S,N,R,D,b,w);return}if(_>=6&&t()<.4){let C=Math.ceil(_*.65),A=C*v;n.add(f,0,x,m,A,g,y,b,w);let R=t.range(3,6);n.add(f+t.range(-1.5,1.5),A,x+t.range(-1.5,1.5),m-R*2,S-A,g-R*2,y,b+.2,w),h(f,S,x,m-R*2,g-R*2,b,w);return}if(_>=5&&m>28&&g>28&&t()<.45){n.add(f,0,x,m,S,g,y,b,w);let C=m*t.range(.35,.5),A=g*t.range(.4,.6),R=Math.max(6,(_-t.int(2,3))*v),D=t()<.5?1:-1,z=t()<.5?1:-1;n.add(f+D*(m/2+C/2-.5),0,x+z*(g/2-A/2),C,R,A,y===2?0:y,b+.4,w),h(f,S,x,m,g,b,w);return}n.add(f,0,x,m,S,g,y,b,w),S>12&&h(f,S,x,m,g,b,w)},p=(f,x,m,g)=>{let _=o(f,x,-450,-100);if(_>4600)return;let y=a(f,x),M=_>2600,b=2.6+8.5*y*y+1.4*y,w=t(),v=()=>t.range(2.5,5.5);if(u=M,M){let C=_<3400?2:1,A=_<3400?2:1,R=m*2/C,D=g*2/A,z=t.range(2.5,4.5);for(let N=0;N<C;N++)for(let O=0;O<A;O++){let V=Math.max(2,Math.round(z+t.range(-.6,.6)));d(f-m+(N+.5)*R,x-g+(O+.5)*D,R-t.range(2,4),D-t.range(2,4),V,3,.1)}return}let S=()=>Math.max(2,Math.round(b*(.55+Math.pow(t(),1.5)*1.1)*(t()<.07&&y>.5?1.7:1)));if(w<.28+.2*y)d(f,x,m*2-t.range(3,8),g*2-t.range(3,8),Math.min(22,S()+1),l(y),y);else if(w<.55){let C=t()<.5,A=t.range(.38,.62);if(C){let R=m*2*A-2,D=m*2*(1-A)-2;d(f-m+R/2+1,x,R,g*2-v(),S(),l(y),y),d(f+m-D/2-1,x,D,g*2-v(),S(),l(y),y)}else{let R=g*2*A-2,D=g*2*(1-A)-2;d(f,x-g+R/2+1,m*2-v(),R,S(),l(y),y),d(f,x+g-D/2-1,m*2-v(),D,S(),l(y),y)}}else if(w<.75){let C=t.int(3,5),A=m*2/C,R=t()<.5?-1:1,D=t.range(.55,.75)*g*2;for(let z=0;z<C;z++)d(f-m+(z+.5)*A,x+R*(g-D/2),A-t.range(.4,1.4),D,Math.max(2,S()+t.int(-1,1)),l(y),y);d(f,x-R*(g-(g*2-D)/2),m*2-3,g*2-D-3,Math.max(2,S()-1),l(y*.6),y)}else{let C=m,A=g;for(let R=0;R<2;R++)for(let D=0;D<2;D++)d(f-m+(R+.5)*C,x-g+(D+.5)*A,C-v(),A-v(),S(),l(y),y)}};for(let f=-30;f<=28;f++){let x=108*f;f>=-12&&f<=-1||p(x,0,44,50.5);for(let m=0;m<=19;m++)for(let g of[-1,1]){let _=g<0?im(m):sm(m);p(x,_,44,44)}}this.scene.add(n.build(),i.build(),r.build())}_buildTVTower(){let t=t_(this.scene,Pc);this.towerSteel=t.steel,this.towerSteel2=t.steelDark,this.deckMat=t.deckMat,this.beacon=t.beacon,this.baseMats=t.baseMats,this.bolM=t.bolM}_buildParkAndStreet(t){let e=new me({color:4406584,roughness:.95}),n=new me({color:15922682,roughness:.75}),i=new Ii(Yt,e),r=new Ii(Yt,n),o=(_,y,M,b,w,v)=>{let S=[_[0]+y[0]*M,_[1]+y[1]*M,_[2]+y[2]*M],C=b*(w===0?.55:.4);if(i.add(_,S,b,C),w<=2&&y[1]>.35&&b>.045&&r.add([_[0],_[1]+b*.8,_[2]],[S[0],S[1]+C*.8,S[2]],b*.7,C*.6),w>=3)return;let A=w===0?t.int(3,4):t.int(2,3),R=t()*Math.PI*2;for(let D=0;D<A;D++){let z=R+D/A*Math.PI*2+t.range(-.5,.5),N=Math.min(1.25,v*t.range(.7,1.3)),O=[Math.cos(z)*Math.sin(N),Math.cos(N)*.9+.1,Math.sin(z)*Math.sin(N)],V=Math.hypot(...O),G=w===0?1:t.range(.6,1),rt=[_[0]+(S[0]-_[0])*G,_[1]+(S[1]-_[1])*G,_[2]+(S[2]-_[2])*G];o(rt,O.map(W=>W/V),M*t.range(.55,.72),C*t.range(.7,.9),w+1,v*1.12)}},a=(_,y)=>{let M=t.range(8,13.5),b=[t.range(-.12,.12),1,t.range(-.12,.12)],w=Math.hypot(...b);o([_,0,y],b.map(v=>v/w),M*.4,t.range(.3,.42),0,t.range(.5,.75));for(let v=0;v<2;v++){let S=t()*6.28,C=M*t.range(.18,.32);o([_,C,y],[Math.cos(S)*.8,.55,Math.sin(S)*.8],M*.26,.12,1,.8)}};for(let _=-12;_<=-1;_++){let y=108*_;for(let M of[-42,-22,22,42])for(let b=y-40;b<=y+40;b+=11.5){let w=b+t.range(-2,2),v=M+t.range(-2.5,2.5);Math.hypot(w-Pc.x,v-Pc.z)<30||Math.abs((w%108+108)%108-54)<11||a(w,v)}}for(let _ of[-1,1])for(let y=-1330;y<=-60;y+=15)Math.abs((y%108+108)%108-54)<12||(a(y+t.range(-1.5,1.5),_*(62.5+8.6)),a(y+7+t.range(-1.5,1.5),_*(62.5-8.6)));this.scene.add(i.build({castShadow:!0,sides:5}),r.build({castShadow:!1,sides:4}));let l=new me({color:4869975,roughness:.6,metalness:.6}),c=new Ii(Yt,l),h=new me({color:3817029,roughness:.5,metalness:.5,emissive:new lt(1,.72,.4),emissiveIntensity:0});this.lampHeadM=h;let u=new Ii(Yt,h),d=[],p=[],f=[],x=(_,y,M=9,b=!1)=>{d.push(_,M,y);let w=t.range(.85,1.15);p.push(3.4*w,2*w,.9*w),f.push(1.3),b&&(c.add([_,0,y],[_,M,y],.13,.08),c.add([_,M-.2,y],[_+.9,M+.15,y],.05,.04),u.add([_+.55,M+.02,y],[_+1.25,M+.02,y],.22,.18))},m=2400,g=1900;for(let _=-23;_<=23;_++){let y=Cd(_);for(let M=-g;M<=g;M+=44){let b=Math.abs(M)<260&&y>-1400&&y<200;x(y-9.2,M+t.range(-2,2),9,b),x(y+9.2,M+22,9,b)}}for(let _=0;_<=17;_++)for(let y of[-1,1]){let M=y*(62.5+108*_);for(let b=-m;b<=m;b+=44){let w=_===0&&b>-1400&&b<200;x(b+t.range(-2,2),M-9.2,9,w),x(b+22,M+9.2,9,w)}}for(let _=-1330;_<=-110;_+=26)for(let y of[-6.5,6.5])x(_,y,4.6,!0);this.scene.add(c.build({castShadow:!1,sides:5}),u.build({castShadow:!1,sides:6})),this.lamps=Hn(Yt,{positions:new Float32Array(d),colors:new Float32Array(p),sizes:new Float32Array(f),fogDensity:4e-5,minPx:1.6,maxPx:14}),this.scene.add(this.lamps.points)}_buildTraffic(t){let e=[];for(let l=0;l<1500;l++){let c=t()<.5,h=t()<.5?1:-1,u;if(c){let d=t.int(0,14);u=(t()<.5?-1:1)*(62.5+108*d)+(h>0?-3.4:3.4)}else u=Cd(t.int(-20,18))+(h>0?3.4:-3.4);e.push({alongX:c,dir:h,fixed:u,speed:t.range(6,13),off:t.range(0,5e3),len:c?4800:3800,min:c?-2400:-1900,ph:t()})}this.cars=Ad(Yt,e),this.scene.add(this.cars.mesh);let i=new Float32Array(1500*4*3),r=new Float32Array(1500*4*3),o=new Float32Array(1500*4);for(let l=0;l<1500;l++)for(let c=0;c<4;c++){let h=(l*4+c)*3,u=c<2;u?(r[h]=3,r[h+1]=2.9,r[h+2]=2.3):(r[h]=2.4,r[h+1]=.1,r[h+2]=.07),o[l*4+c]=u?.7:.5}this.carGlow=Hn(Yt,{positions:i,colors:r,sizes:o,fogDensity:4e-5,minPx:1.4,maxPx:12}),this.scene.add(this.carGlow.points);let a=[];for(let l=0;l<260;l++){let c=t.pick([-3,-1.2,1.2,3,-31,31,-29,29]);a.push({x0:-1320,x1:-110,z:c+t.range(-.4,.4),dir:t()<.5?1:-1,speed:t.range(1.1,1.6),off:t.range(0,2400),ph:t()})}for(let l=0;l<40;l++)a.push({x0:-135,x1:-52,z:t.pick([-26,-20,-16,16,20,26])+t.range(-.8,.8),dir:t()<.5?1:-1,speed:t.range(.9,1.5),off:t.range(0,800),ph:t()});this.peds=Rc(Yt,a),this.scene.add(this.peds.mesh)}applyTime(t){let e=this.sampleTrack("palette",t,0),n=Math.min(1,Math.floor(e)),i=Math.min(1,e-n),r=rm[n],o=rm[Math.min(2,n+1)],a=this.sky.uniforms,l=(h,u)=>{this._ca.set(r[h]),this._cb.set(o[h]),u.value.lerpColors(this._ca,this._cb,i)};l("zenith",a.uZenith),l("horizon",a.uHorizon),l("horizonWarm",a.uHorizonWarm),l("sun",a.uSunColor),l("cloudLit",a.uCloudLit),l("cloudDark",a.uCloudDark),this._ca.set(r.fog),this._cb.set(o.fog),this.scene.fog.color.lerpColors(this._ca,this._cb,i),this.scene.fog.density=r.fogD+(o.fogD-r.fogD)*i,this._ca.set(r.sunCol),this._cb.set(o.sunCol),this.sun.color.lerpColors(this._ca,this._cb,i),this.nightU.value=this.sampleTrack("night",t,.1);let c=this.sampleTrack("sunPower",t,3);this.sun.intensity=c,a.uSunStrength.value=Math.min(1,c/2),this.hemi.intensity=.5*Math.max(.22,1-this.nightU.value*1.05),this.scene.environmentIntensity=this.sampleTrack("envPower",t,.6)}onBeforeRender({t,projScale:e,camera:n}){let i=t+this.timeOffset;this.sky.mesh.position.copy(n.position),this.sky.uniforms.uTime.value=i*5;let r=this.scene.fog.density;for(let l of[this.lamps,this.carGlow,this.beacon])l.uniforms.uProj.value=e,l.uniforms.uFog.value=r;let o=this.nightU.value;this.lamps.uniforms.uGain.value=.08+1*o,this.carGlow.uniforms.uGain.value=.5+.7*o,this.beacon.uniforms.uGain.value=.15+.85*Math.pow(.5+.5*Math.sin(i*Math.PI*1.25),3),this.towerSteel.emissiveIntensity=.03+.4*Math.max(0,o-.25),this.towerSteel2.emissiveIntensity=this.towerSteel.emissiveIntensity,this.lampHeadM.emissiveIntensity=.2+2.4*o,this.deckMat.emissiveIntensity=.25+1*o;for(let l of this.baseMats)l.emissiveIntensity=.25+.9*o;this.bolM.emissiveIntensity=.1+2*o,this.cars.update(i,this.carGlow.points.geometry.attributes.position.array),this.carGlow.points.geometry.attributes.position.needsUpdate=!0,this.peds.update(i);let a=this.snow.uniforms;a.uTime.value=i,a.uCam.value.copy(n.position),a.uProj.value=e,a.uFog.value=r}}});function d_(s,t,e,n){let i=s*e*t*e,r=Math.min(1,Math.sqrt(n*1e6/i));return{w:Math.max(2,Math.round(s*e*r)),h:Math.max(2,Math.round(t*e*r)),scale:r}}function p_(s,t,e,{rate:n,vmax:i}=IT){let r=t-s;if(Math.abs(r)<1e-5)return Cr(t);let o=r*(1-Math.exp(-n*e)),a=i*e;return Math.abs(o)>a&&(o=Math.sign(o)*a),Cr(s+o)}var Cr,om,c_,h_,am,lm,u_,cm,f_,IT,hm=ce(()=>{Cr=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),om=(s,t,e)=>{let n=Cr((e-s)/(t-s));return n*n*(3-2*n)},c_=(s,t,e)=>Cr(-s/Math.max(1,t-e)),h_=(s,t=7)=>Math.min(1,Cr(s)/.94)*t,am=s=>1-om(.88,1.12,s),lm=(s,t,e,n=.03)=>om(s,s+n,e)*(1-om(t-n,t,e)),u_=[{id:"T0",mp:.3,samples:0,dof:!1},{id:"T1",mp:.55,samples:2,dof:!1},{id:"T2",mp:1.25,samples:2,dof:!0},{id:"T3",mp:2.4,samples:4,dof:!1}];cm=(s,t,e)=>!!e&&Math.min(s,t)<700,f_=(s,t,e)=>cm(s,t,e)?"T1":"T2",IT={rate:6.5,vmax:.07/.15}});function DT(s,t){let e=s.keys,n=e.length;if(t<=e[0][0]||t>=e[n-1][0])return null;let i=0;for(;t>e[i+1][0];)i++;let r=e[i+1][0]-e[i][0],o=(t-e[i][0])/r,a=(x,m)=>x===0||x===n-1?0:(e[x+1][m]-e[x-1][m])/(e[x+1][0]-e[x-1][0]),l=o*o,c=l*o,h=2*c-3*l+1,u=c-2*l+o,d=-2*c+3*l,p=c-l,f=[];for(let x=1;x<=6;x++)f.push(h*e[i][x]+u*r*a(i,x)+d*e[i+1][x]+p*r*a(i+1,x));return f}function NT(s,t){return s.map(([e,n,i,r,o,a])=>({pos:[t.x+n*Math.cos(m_(e)),i,t.z+n*Math.sin(m_(e))],target:[t.x,r,t.z],fov:o,speed:a}))}function UT(s,t,e,n,i){let r=i*i,o=r*i,a=(l,c,h,u)=>.5*(2*c+(-l+h)*i+(2*l-5*c+4*h-u)*r+(-l+3*c-3*h+u)*o);return[a(s[0],t[0],e[0],n[0]),a(s[1],t[1],e[1],n[1]),a(s[2],t[2],e[2],n[2])]}function FT(s,t,e=0){let n=(i,r)=>Math.sin(s*i+r+e);return[t*(n(1.7,.3)*.6+n(3.1,1.9)*.4),t*(n(1.3,2.1)*.6+n(2.7,.7)*.4),t*(n(1.1,4.2)*.6+n(2.3,3.3)*.4)]}function BT(s,t){return t.map(([e,n,i,r,o,a=80,l=0])=>{let c=e*s.length,[h,u,d,p]=s.at(c),[f,x]=s.at(c+a);return{pos:[h-p*l,n,u+d*l],target:[f,i,x],fov:r,speed:o}})}var x_,m_,um,OT,Ic,dm,ra,Id=ce(()=>{jp();hm();x_=s=>{let t=s*s*(3-2*s),e=1-(1-s)*(1-s);return .5*t+.5*e};m_=s=>s*Math.PI/180;um=class{constructor(t,{shakeAmp:e=.1,shakeSeed:n=4,timeWarp:i=x_,N:r=160,t0:o=0,dur:a=7}={}){this.t0=o,this.dur=a,this.keys=t,this.shakeAmp=e,this.shakeSeed=n,this.timeWarp=i;let l=t.length,c=(l-1)*r;this.cum=new Float64Array(c+1);let h=this._at(0).position;for(let u=1;u<=c;u++){let d=u/c*(l-1),p=this._at(d).position,f=this._speed(d);this.cum[u]=this.cum[u-1]+Math.hypot(p[0]-h[0],p[1]-h[1],p[2]-h[2])/f,h=p}this.total=this.cum[c],this.M=c}_speed(t){let e=this.keys,n=Math.min(e.length-2,Math.floor(t)),i=t-n;return e[n].speed+(e[n+1].speed-e[n].speed)*i}_at(t){let e=this.keys,n=e.length,i=Math.min(n-2,Math.max(0,Math.floor(t))),r=t-i,o=l=>Math.min(n-1,Math.max(0,l)),a=l=>UT(e[o(i-1)][l],e[i][l],e[o(i+1)][l],e[o(i+2)][l],r);return{position:a("pos"),target:a("target"),fov:e[i].fov+(e[i+1].fov-e[i].fov)*r}}sampleU(t,e=0){let i=(this.timeWarp?this.timeWarp(Math.min(1,Math.max(0,t))):t)*this.total,r=0,o=this.M;for(;o-r>1;){let h=r+o>>1;this.cum[h]<=i?r=h:o=h}let a=(i-this.cum[r])/Math.max(1e-12,this.cum[o]-this.cum[r]),l=(r+a)/this.M*(this.keys.length-1),c=this._at(l);if(this.shakeAmp>0){let h=FT(e,this.shakeAmp,this.shakeSeed);c.position=c.position.map((u,d)=>u+h[d])}return c}sample(t){return this.sampleU((t-this.t0)/this.dur,t)}},OT=30,Ic=class{constructor(t){let{globalStart:e,duration:n=7,landscapeKeys:i,adj:r,portraitSpec:o,axis:a,portraitKeys:l}=t;this.t0=e,this.dur=n,this.landscape=new Ar(i,{shakeAmp:.1,shakeSeed:4,timeWarp:x_}),this.portrait=new um(l??NT(o,a),{t0:e,dur:n}),this.adj=r,this.weight=0,this.blendLift=t.blendLift??OT}pOf(t){return Cr((t-this.t0)/this.dur)*.94}landscapeAt(t){let e=this.landscape.sample(t),n=this.adj?DT(this.adj,this.pOf(t)):null;return n&&(e.position=e.position.map((i,r)=>i+n[r]),e.target=e.target.map((i,r)=>i+n[3+r])),e}portraitAt(t){return this.portrait.sample(t)}sample(t,e=this.weight){if(e<=0)return this.landscapeAt(t);let n=this.portraitAt(t);if(e>=1)return n;let i=this.landscapeAt(t),r=(a,l)=>a.map((c,h)=>c+(l[h]-c)*e),o=r(i.position,n.position);return o[1]+=this.blendLift*4*e*(1-e),{position:o,target:r(i.target,n.target),fov:i.fov+(n.fov-i.fov)*e}}},dm=class{constructor(t){this.pts=t,this.cum=[0];for(let e=1;e<t.length;e++)this.cum.push(this.cum[e-1]+Math.hypot(t[e][0]-t[e-1][0],t[e][1]-t[e-1][1]));this.length=this.cum[t.length-1]}at(t){let e=this.pts,n=e.length,i=this.cum,r=Math.min(this.length,Math.max(0,t)),o=0;for(;o<n-2&&r>i[o+1];)o++;let a=Math.max(1e-9,i[o+1]-i[o]),l=(r-i[o])/a;return[e[o][0]+(e[o+1][0]-e[o][0])*l,e[o][1]+(e[o+1][1]-e[o][1])*l,(e[o+1][0]-e[o][0])/a,(e[o+1][1]-e[o][1])/a]}};ra=class extends Ic{constructor(t){let e=new dm(t.route);super({...t,portraitKeys:BT(e,t.dolly)}),this.poly=e}}});var __,zT,kT,GT,Lc,fm=ce(()=>{__={x:-90,z:0,tipY:147.2,glowY:149},zT=[{t:11,pos:[-420,40,14],target:[-140,54,-2],fov:38},{t:12.78,pos:[-313,50,32],target:[-100,103,-20],fov:34},{t:14.36,pos:[-211,62,44],target:[29,94,-137],fov:35},{t:15.99,pos:[-111,77,54],target:[-54,95,-240],fov:36},{t:16.5,pos:[-74,102,52.9],target:[-125.1,66.4,-242.7],fov:41.1},{t:17,pos:[-35,123.4,55],target:[-190.4,102.7,-201.6],fov:46.7},{t:17.5,pos:[57.3,122.4,49.4],target:[-229.9,95.1,-37.3],fov:45.9},{t:18,pos:[64.8,122.3,31.1],target:[-234.1,74.2,5],fov:45.9}].map(s=>({...s,ease:t=>t})),kT={keys:[[.4,0,0,0,0,0,0],[.44,-13.9,10.8,28.9,-.6,74.1,32.6],[.47,-17.1,19.3,53.7,9.5,60.2,19.2],[.5,-6.9,27.5,66.3,5.3,46.3,15],[.53,7.6,32.3,56.1,-12.7,48.9,.5],[.56,.2,26.8,28.8,-26.6,66.5,10],[.6,0,0,0,0,0,0]]},GT=[[180,280,46,66,50,1],[167.7,235,99.5,80,51,1],[141.2,204.6,117.9,90,52,.9],[103,170.6,127.9,95.6,53,.75],[83.4,146,127.9,106.9,54,.65],[11.3,132.3,126,106.9,55,.6],[3.5,149.3,124.1,95.4,56,.5]],Lc={globalStart:11,duration:7,landscapeKeys:zT,adj:kT,portraitSpec:GT,axis:{x:__.x,z:__.z}}});var Ld,v_=ce(()=>{l_();Id();ia();fm();Ld=class extends Pd{constructor(t,e,n,i={}){super(t,e,n,{...i,shot:"odori"}),this.fadeSec=0,this.fx=i.fx??{}}async build(){await super.build(),this.videoRig=this.rig,this.rig=new Ic(Lc),na(this,{tiled:this.fx.tiled,haze:this.fx.haze,tileExclude:[this.cars.mesh,this.peds.mesh,this.scene.children.find(t=>t.isInstancedMesh&&t.count===this.boxes.n)],skyUniforms:this.sky.uniforms})}setAmbientCount(t){this.snow.points.geometry.setDrawRange(0,t),this.ambientCount=t}setLayoutWeight(t){this.rig.weight=t}}});var y_,M_=ce(()=>{y_=[{id:"cap-sapporo",title:"SAPPORO",sub:"\u672D\u5E4C",a:-.05,b:.17},{id:"cap-tower",title:"\u3055\u3063\u307D\u308D\u30C6\u30EC\u30D3\u5854",sub:"Sapporo TV Tower",a:.2,b:.45},{id:"cap-odori",title:"\u5927\u901A\u516C\u5712",sub:"Odori Park",a:.47,b:.7},{id:"cap-teine",title:"\u624B\u7A32\u5C71\u306E\u65B9\u3078",sub:"Toward Mt. Teine",a:.72,b:1.08}]});var S_={};kc(S_,{default:()=>HT});var HT,b_=ce(()=>{v_();M_();fm();HT={contract:1,meta:{id:"sapporo",name:{ja:"\u672D\u5E4C",en:"Sapporo"},season:"winter",theme:"\u96EA\u306E\u5927\u901A\u516C\u5712\uFF08\u663C\u2192\u5915\uFF09",docTitle:"SAPPORO \u2014 JAPAN \u2014 THE CITY COLLECTION"},captions:y_,timeline:{globalStart:Lc.globalStart,duration:Lc.duration},ambient:{name:"\u96EA",counts:{normal:14e3,light:7e3}},tuning:{haze:{},grade:{}},async buildScene(s){let t=new Ld(s.cityMeta,s.index,s.total,{renderer:s.renderer,fx:s.fx});return await t.build(),t}}});function w_(s,t){let e=Dc(Rr.x0,Rr.crestX,s)*(1-Dc(-1150,-1500,s)),n=Math.abs(t-250),i=1-Dc(260,760,n);return Rr.top*e*(1-Dc(700,1e3,n))*(.4+.6*i)}function Dd(s,t){let e=w_(s,t),n=Math.hypot(s-$e.x,t-$e.z),i=1-Dc($e.r0,$e.r1,n);return e+(T_-e)*i}var mn,oa,Bs,zs,Rr,$e,Dc,T_,Pr,A_,E_,Ir=ce(()=>{mn=[{id:"aoba",dir:"x",c:230,w:50,a:-372,b:330,kind:1},{id:"joz",dir:"x",c:0,w:46,a:-240,b:110,kind:2},{id:"ichi-n",dir:"z",c:0,w:20,a:-130,b:40,kind:0},{id:"ichi-arcade",dir:"z",c:0,w:14,a:40,b:200,kind:3},{id:"ichi-s",dir:"z",c:0,w:20,a:200,b:330,kind:0},{id:"conn",dir:"z",c:-170,w:22,a:-130,b:330,kind:0},{id:"w1",dir:"z",c:-85,w:14,a:-130,b:330,kind:0},{id:"w2",dir:"z",c:-300,w:16,a:24,b:330,kind:0},{id:"e1",dir:"z",c:110,w:20,a:24,b:330,kind:0},{id:"e1n",dir:"z",c:110,w:20,a:-130,b:-24,kind:0},{id:"e2",dir:"z",c:200,w:18,a:-130,b:330,kind:0},{id:"cross",dir:"x",c:115,w:16,a:-330,b:330,kind:0},{id:"north",dir:"x",c:-120,w:18,a:-330,b:330,kind:0},{id:"south",dir:"x",c:330,w:18,a:-330,b:330,kind:0}],oa=[{id:"nishi",x0:-318,x1:-240,z0:-55,z1:55},{id:"kotodai",x0:110,x1:170,z0:-45,z1:45}],Bs=[{id:"station",x0:205,x1:352,z0:120,z1:205}],zs={x0:-318,x1:340,z0:-240,z1:400},Rr={x0:-362,top:95,crestX:-500},$e={x:-478,z:244,r0:34,r1:92},Dc=(s,t,e)=>{let n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)};T_=w_($e.x,$e.z);Pr=T_,A_=[-.86,.3,-.3],E_=[[250,232],[60,232],[-170,232],[-170,110],[-170,0],[0,0],[0,110],[0,215],[-90,236],[-200,238],[-330,238],[-505,238]]});var VT,C_,WT,XT,qT,YT,ZT,$T,Lr,pm=ce(()=>{Ir();VT=0,C_=7,WT=s=>{let t=s*s*(3-2*s),e=1-(1-s)*(1-s);return .5*t+.5*e},XT=s=>C_*WT(Math.min(1,s/.94)),qT=s=>s,YT=[[0,[330,96,238],[60,26,232],40],[.1,[80,56,232],[-250,22,232],38],[.2,[-90,100,230],[-170,60,150],38],[.25,[-168,96,224],[-170,40,120],38],[.29,[-170,52,120],[-170,12,10],37],[.32,[-171,34,46],[-165,16,0],36],[.345,[-171,30,10],[-110,8,0],35],[.36,[-150,4.8,0],[-20,7,0],35],[.44,[-85,4.8,0],[30,7,4],35],[.51,[-12,5.2,4],[0,7,90],37],[.56,[0,6,55],[0,8,150],40],[.63,[0,6.6,130],[0,9,200],42],[.7,[0,15,192],[-30,20,238],44],[.74,[-30,42,238],[120,26,224],44],[.81,[-230,80,242],[60,22,222],44],[.88,[-400,118,246],[-20,18,220],43],[.94,[-500,108,252],[-100,14,214],42],[1,[-500,108,252],[-100,14,214],42]],ZT=YT.map(([s,t,e,n])=>({t:XT(s),pos:t,target:e,fov:n,ease:qT})),$T=[[0,85,30,58,1,120,0],[.14,46,24,60,1,100,0],[.24,38,20,60,1,90,0],[.277,40,18,60,1.1,60,0],[.34,26,14,60,1.25,70,0],[.42,8,10,62,1.25,50,0],[.49,4.8,8,62,.9,50,0],[.54,4.8,8,62,.8,45,0],[.61,10,10,62,.85,45,0],[.65,15,14,62,.85,45,0],[.683,20,18,62,.9,45,0],[.72,30,24,60,3,-120,-8],[.86,74,30,56,5,-300,-9],[1,108,20,52,5,-620,-12]],Lr={globalStart:VT,duration:C_,landscapeKeys:ZT,route:E_,dolly:$T}});function Nc(s,t,e,n,i,r,o){let a=new ci(1,0),l=a.attributes.position,c=l.count,h=new Float32Array(c*3),u=new Float32Array(c*3),d=p=>{let f=Math.sin((p+r)*12.9898)*43758.5453;return .86+.28*(f-Math.floor(f))};for(let p=0;p<c;p++){let f=l.getX(p),x=l.getY(p),m=l.getZ(p),g=Math.hypot(f,x,m);h[p*3]=f/g,h[p*3+1]=x/g,h[p*3+2]=m/g;let _=d(Math.floor(p/3)+r*7);l.setXYZ(p,s+f*n*_,t+x*n*i*_,e+m*n*_);let y=.5+.5*(x/g),M=o*(.7+.5*y);u[p*3]=.2*M,u[p*3+1]=.36*M,u[p*3+2]=.1*M}return a.setAttribute("normal",new Jt(h,3)),a.setAttribute("color",new Jt(u,3)),a.deleteAttribute("uv"),a}function P_(s,t,e,n,i){let r=new tn(n,e,1,5,1,!1);r.translate(0,.5,0);let o=new L(t[0]-s[0],t[1]-s[1],t[2]-s[2]),a=o.length();r.scale(1,a,1),r.applyQuaternion(new Se().setFromUnitVectors(new L(0,1,0),o.normalize())),r.translate(s[0],s[1],s[2]);let l=r.attributes.position.count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c[h*3]=i[0],c[h*3+1]=i[1],c[h*3+2]=i[2];return r.setAttribute("color",new Jt(c,3)),r.deleteAttribute("uv"),r}function KT(){let s=[.115,.1,.085],t=[P_([0,0,0],[0,4.6,0],.42,.3,s)],e=[],n=6;for(let i=0;i<n;i++){let r=i/n*Math.PI*2+.3,o=Math.cos(r),a=Math.sin(r);t.push(P_([0,4.4,0],[o*3.4,9.2,a*3.4],.22,.1,s)),e.push(Nc(o*4.2,10,a*4.2,3.5,.82,i,1)),e.push(Nc(o*2.2,13.2,a*2.2,3,.8,i+9,1.1))}e.push(Nc(0,11.5,0,3.6,.9,20,1.05)),e.push(Nc(0,14.6,0,3,.8,21,1.15));for(let i=0;i<3;i++){let r=i*2.1;e.push(Nc(Math.cos(r)*3.2,7,Math.sin(r)*3.2,2.2,.8,30+i,.8))}return{wood:ke(t),leaf:ke(e)}}function QT(s){let t=[],e=mn.map(JT),n=(r,o,a)=>r>-314&&!mn.some((l,c)=>l!==a&&l.kind!==3&&R_(e[c],r,o,l.kind===0?.5:-.5))&&!oa.some(l=>R_(l,r,o,0)),i=(r,o,a,l,c,h=r.b)=>{for(let u=r.a+l;u<h;u+=a){let d=r.dir==="x"?u:r.c+o,p=r.dir==="x"?r.c+o:u;n(d,p,r)&&t.push([d+s.range(-.4,.4),p+s.range(-.4,.4),c*s.range(.92,1.12),s()])}};for(let r of mn)if(r.kind===1)i(r,0,13,4,1.05,200),i(r,-20.6,13,10.5,1,200),i(r,20.6,13,10.5,1,200);else if(r.kind===2)i(r,-4.5,16,3,1.1),i(r,4.5,16,11,1.1),i(r,-20.2,16,11,1),i(r,20.2,16,3,1);else if(r.kind===0){let o=r.w/2-1.8;i(r,-o,22,8,.55),i(r,o,22,19,.55)}for(let r of oa)for(let o=0;o<26;o++)t.push([s.range(r.x0+6,r.x1-6),s.range(r.z0+6,r.z1-6),s.range(.8,1.15),s()]);return t}function I_(s){let{wood:t,leaf:e}=KT(),n=QT(s),i=new me({vertexColors:!0,roughness:.95,metalness:0}),r=new me({vertexColors:!0,roughness:.88,metalness:0});r.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPl;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPl = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPl;
`+Qn).replace("#include <color_fragment>",`#include <color_fragment>
        {
          float lt = 0.55 * vnoise(vWPl.xz * 0.8 + vWPl.y * 0.6) + 0.45 * vnoise(vWPl.xz * 2.6 - vWPl.y * 1.9);
          float d = length(vWPl - cameraPosition);
          diffuseColor.rgb *= mix(1.0, 0.62 + 0.75 * lt, 1.0 - smoothstep(60.0, 400.0, d));
        }`)},i.customProgramCacheKey=()=>"sendai-wood-v1",r.customProgramCacheKey=()=>"sendai-leaf-v1";let o=(c,h,u)=>{let d=new We(c,h,n.length),p=new Gt,f=new Se,x=new L,m=new L,g=new lt;return n.forEach(([_,y,M,b],w)=>{f.setFromAxisAngle(new L(0,1,0),b*6.283),x.set(M,M*(.92+.16*b),M),m.set(_,0,y),p.compose(m,f,x),d.setMatrixAt(w,p),h===r&&(g.setRGB(.9+.2*b,.95+.1*b,.85+.2*(1-b)),d.setColorAt(w,g))}),d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0),d.castShadow=u,d.receiveShadow=!1,d.frustumCulled=!1,d},a=o(t,i,!0),l=o(e,r,!0);return a.name="zelkova-wood",l.name="zelkova-leaf",{meshes:[a,l],count:n.length,tris:(t.index?t.index.count:t.attributes.position.count)/3+(e.index?e.index.count:e.attributes.position.count)/3}}var JT,R_,L_=ce(()=>{Ee();Er();Fs();Ir();JT=s=>s.dir==="x"?{x0:s.a,x1:s.b,z0:s.c-s.w/2,z1:s.c+s.w/2}:{x0:s.c-s.w/2,x1:s.c+s.w/2,z0:s.a,z1:s.b},R_=(s,t,e,n=0)=>t>s.x0-n&&t<s.x1+n&&e>s.z0-n&&e<s.z1+n});function D_(){let{z0:s,z1:t,half:e,spring:n,crown:i}=Dr,r=8,o=[.62,.64,.66],a=[],l=(_,y,M)=>{let b=new L(y[0]-_[0],y[1]-_[1],0),w=b.length(),v=new tn(M,M,w,5,1,!1);v.applyQuaternion(new Se().setFromUnitVectors(new L(0,1,0),b.normalize())),v.translate((_[0]+y[0])/2,(_[1]+y[1])/2,0),a.push(Nd(v,o))},c=10,h=_=>{let y=-e+.2+2*(e-.2)*_,M=1-Math.pow(2*_-1,2);return[y,n+(i-n)*M]};for(let _ of[-1,1])l([_*(e-.2),0],[_*(e-.2),n],.1);for(let _=0;_<c;_++)l(h(_/c),h((_+1)/c),.09);l([-(e-.2),4.2],[e-.2,4.2],.05);let u=ke(a),d=new me({vertexColors:!0,roughness:.5,metalness:.5});d.customProgramCacheKey=()=>"sendai-arcade-v1";let p=Math.floor((t-s)/r)+1,f=new We(u,d,p),x=new Gt;for(let _=0;_<p;_++)x.makeTranslation(0,0,s+_*r),f.setMatrixAt(_,x);f.instanceMatrix.needsUpdate=!0,f.castShadow=!0,f.receiveShadow=!1,f.frustumCulled=!1,f.name="arcade-frame";let m=[];for(let[_,y]of[[0,i],[-5.2,10.2],[5.2,10.2],[-e+.2,n],[e-.2,n]]){let M=new tn(.07,.07,t-s,5);M.rotateX(Math.PI/2),M.translate(_+0,y,(s+t)/2),m.push(Nd(M,o))}let g=new ne(ke(m),d);return g.castShadow=!1,g.frustumCulled=!1,g.name="arcade-beams",{meshes:[f,g],archCount:p}}function N_(s,t){let{z0:e,z1:n,half:i}=Dr,r=[[.75,.2,.18],[.2,.4,.7],[.85,.7,.25],[.25,.55,.4],[.85,.85,.8],[.6,.3,.55],[.9,.5,.2]],o=[],a=[];for(let x of[-1,1])for(let m=e+2;m<n-3;){let g=4+s()*3.5;o.push({x:0+x*(i-.7),y:3.3,z:m+g/2,w:g,d:1.4,h:.35,c:r[Math.floor(s()*r.length)]}),s()<.55&&a.push({x:0+x*(i-.35),y:5.6+s()*1.4,z:m+g/2,w:.2,h:1+s()*.8,d:.9+s()*.5,c:r[Math.floor(s()*r.length)],side:x}),m+=g+.4}let l=new me({color:16777215,roughness:.7,metalness:0});l.customProgramCacheKey=()=>"sendai-shop-v1",l.onBeforeCompile=x=>{x.uniforms.uShopGlow=t.uShopGlow,x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
uniform float uShopGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * uShopGlow;`)};let c=new Oe(1,1,1),h=(x,m)=>{let g=new We(c,l,x.length),_=new Gt,y=new L,M=new Se,b=new L,w=new lt;return x.forEach((v,S)=>{y.set(v.x,v.y,v.z),b.set(v.d,v.h,v.w),M.identity(),_.compose(y,M,b),g.setMatrixAt(S,_),w.setRGB(...v.c),g.setColorAt(S,w)}),g.instanceMatrix.needsUpdate=!0,g.instanceColor.needsUpdate=!0,g.castShadow=!1,g.frustumCulled=!1,g},u=o.map(x=>({...x,x:x.x})),d=a.map(x=>({x:x.x-x.side*.45,y:x.y,z:x.z,w:x.w,h:x.h,d:x.d,c:x.c})),p=h(u,0),f=h(d,0);return p.name="awnings",f.name="signs",{meshes:[p,f],count:o.length+a.length}}function U_(){let s=[],t=[],e=[],{z0:n,z1:i}=Dr;for(let r of[-5.2,0,5.2])for(let o=n;o<=i;o+=3)s.push(r+0,r===0?11.2:10.1,o),t.push(3,1.9,.9),e.push(.5);for(let r of[-5.9,5.9])for(let o=n+2;o<=i;o+=5)s.push(r+0,4.6,o),t.push(2.6,1.6,.8),e.push(.45);return{positions:new Float32Array(s),colors:new Float32Array(t),sizes:new Float32Array(e)}}function F_(s){let t=[],e=[],n=[],i=(h,u,d,p=1)=>t.push({x:h,y:u,z:d,s:p*(.9+.2*s()),yaw:s()*6.283,phase:s()*6.283}),{z0:r,z1:o,half:a}=Dr;for(let h=r+1;h<o;h+=3.2)i(0-4.6+(s()-.5)*.4,10.3,h+(s()-.5)*.6,1),i(0+4.6+(s()-.5)*.4,10.3,h+1.6+(s()-.5)*.6,.95),i(0-2.3,10.4,h+.8+(s()-.5)*.5,.72),i(0+2.3,10.4,h+2.4+(s()-.5)*.5,.7);for(let h=r+4;h<o;h+=8)n.push([0,10.6,h]);let l=mn.find(h=>h.id==="joz");for(let h=l.a+12;h<l.b-6;h+=15)for(let u of[-9.6,9.6,-21.4,21.4])Math.abs(h-0)<14||(e.push([h,0+u]),i(h,7.2,0+u-Math.sign(u)*.9,1.05),s()<.5&&i(h+1.1,6.6,0+u-Math.sign(u)*.9,.85));for(let[h,u]of[[-125,30],[205,325]])for(let d=h;d<u;d+=13)for(let p of[-1,1])e.push([0+p*8.8,d]),i(0+p*7.9,6.6,d,.85);let c=Bs[0];for(let h=0;h<6;h++){let u=c.x0+14+h*14,d=c.z1-4;e.push([u,d]),i(u,6.8,d-.8,.9)}return{items:t,poles:e,balls:n}}function O_(s,t){let e=new tn(.035,.06,7.8,5);e.translate(0,3.9,0);let n=new tn(.03,.03,1.2,4);n.rotateZ(Math.PI/2),n.translate(-.5,7.5,0);let i=ke([Nd(e,[.3,.36,.16]),Nd(n,[.3,.36,.16])]),r=new me({vertexColors:!0,roughness:.8,metalness:0}),o=new We(i,r,s.length),a=new Gt;s.forEach(([x,m],g)=>{a.makeTranslation(x,0,m),o.setMatrixAt(g,a)}),o.instanceMatrix.needsUpdate=!0,o.castShadow=!1,o.frustumCulled=!1,o.name="bamboo-poles";let l=new ci(.5,1).toNonIndexed(),c=l.attributes.position,h=new Float32Array(c.count*3),u=new Float32Array(c.count*3),d=[[.06,.3,.85],[.88,.08,.1],[.96,.74,.08],[.92,.92,.88],[.45,.16,.62],[.95,.35,.55]];for(let x=0;x<c.count/3;x++){let m=d[Math.floor(jT(x+17)*5.99)];for(let g=0;g<3;g++)h.set(m,(x*3+g)*3)}for(let x=0;x<c.count;x++){let m=c.getX(x),g=c.getY(x),_=c.getZ(x),y=Math.hypot(m,g,_);u[x*3]=m/y,u[x*3+1]=g/y,u[x*3+2]=_/y}l.setAttribute("color",new Jt(h,3)),l.setAttribute("normal",new Jt(u,3)),l.deleteAttribute("uv");let p=new me({vertexColors:!0,roughness:.7}),f=new We(l,p,t.length);return t.forEach(([x,m,g],_)=>{a.makeTranslation(x,m,g),f.setMatrixAt(_,a)}),f.instanceMatrix.needsUpdate=!0,f.castShadow=!1,f.frustumCulled=!1,f.name="kusudama",[o,f]}var mm,Dr,Nd,jT,B_=ce(()=>{Ee();Er();Ir();mm=mn.find(s=>s.id==="ichi-arcade"),Dr={z0:mm.a+2,z1:mm.b-2,half:mm.w/2,spring:7.6,crown:11.6},Nd=(s,t)=>{let e=s.attributes.position.count,n=new Float32Array(e*3);for(let i=0;i<e;i++)n.set(t,i*3);return s.setAttribute("color",new Jt(n,3)),s.deleteAttribute("uv"),s},jT=s=>{let t=Math.sin(s*12.9898)*43758.5453;return t-Math.floor(t)}});function tA(){let e=[],n=[],i=[],r=[],o=[],a=[];for(let g=0;g<20;g++){let _=g/20*Math.PI*2+es(g)*.3,y=.1+.26*es(g+40),M=3.3+1.5*es(g+80),b=.085+.04*es(g+120),w=Uc[(g+(es(g+7)>.8?1:0))%5],v=_+1.57+(es(g+11)-.5)*1,S=Math.cos(v),C=Math.sin(v),A=e.length/3;for(let R=0;R<=10;R++){let D=R/10,z=-.15-M*D,N=b*(1-.45*D);for(let O of[-1,1]){e.push(Math.cos(_)*y+S*N*O,z,Math.sin(_)*y+C*N*O);let V=.85+.3*es(g*31+R);n.push(w[0]*V,w[1]*V,w[2]*V),i.push(D),r.push(es(g+200)),o.push(-C,0,S)}}for(let R=0;R<10;R++){let D=A+R*2;a.push(D,D+1,D+2,D+1,D+3,D+2)}}let l=new $t;l.setAttribute("position",new yt(e,3)),l.setAttribute("normal",new yt(o,3)),l.setAttribute("color",new yt(n,3)),l.setAttribute("aH",new yt(i,1)),l.setAttribute("aS",new yt(r,1)),l.setIndex(a);let c=new ci(.42,1).toNonIndexed(),h=c.attributes.position,u=h.count,d=new Float32Array(u*3),p=new Float32Array(u),f=new Float32Array(u),x=new Float32Array(u*3);for(let g=0;g<u/3;g++){let _=Uc[Math.floor(es(g+3)*6.99)%Uc.length];for(let y=0;y<3;y++){let M=g*3+y;d.set(_,M*3),h.setY(M,h.getY(M)+.3)}}for(let g=0;g<u;g++){let _=h.getX(g),y=h.getY(g)-.3,M=h.getZ(g),b=Math.hypot(_,y,M);x[g*3]=_/b,x[g*3+1]=y/b,x[g*3+2]=M/b}c.setAttribute("color",new Jt(d,3)),c.setAttribute("aH",new Jt(p,1)),c.setAttribute("aS",new Jt(f,1)),c.setAttribute("normal",new Jt(x,3)),c.deleteAttribute("uv");let m=ke([l.toNonIndexed(),c]);return m.deleteAttribute("uv"),m.computeBoundingSphere(),m.boundingSphere.radius+=1.6,m}function eA(){let s=[],t=[],e=[],n=[],i=[];for(let c of[0,Math.PI/2]){let h=Math.cos(c),u=Math.sin(c);for(let d=0;d<4;d++){let p=d/4,f=(d+1)/4,x=Uc[d%5],m=.28*(1-.5*p),g=.28*(1-.5*f),_=-.15-4.2*p,y=-.15-4.2*f,M=[[-m,_,p],[m,_,p],[-g,y,f],[m,_,p],[g,y,f],[-g,y,f]];for(let[b,w,v]of M)s.push(h*b,w,u*b),t.push(...x),e.push(v),n.push(.5),i.push(-u,0,h)}}let o=new ys(.4,0).toNonIndexed(),a=o.attributes.position;for(let c=0;c<a.count;c++){s.push(a.getX(c),a.getY(c)+.3,a.getZ(c)),t.push(...Uc[(c>>2)%5]),e.push(0),n.push(0);let h=Math.hypot(a.getX(c),a.getY(c),a.getZ(c));i.push(a.getX(c)/h,a.getY(c)/h,a.getZ(c)/h)}let l=new $t;return l.setAttribute("position",new yt(s,3)),l.setAttribute("normal",new yt(i,3)),l.setAttribute("color",new yt(t,3)),l.setAttribute("aH",new yt(e,1)),l.setAttribute("aS",new yt(n,1)),l.computeBoundingSphere(),l.boundingSphere.radius+=1.6,l}function z_(s){let t=new me({vertexColors:!0,roughness:.75,metalness:0,side:zn});return t.customProgramCacheKey=()=>"sendai-streamer-v1",t.onBeforeCompile=e=>{e.uniforms.uTime=s.uTime,e.uniforms.uGlow=s.uGlow,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
totalEmissiveRadiance += diffuseColor.rgb * uGlow;`)},t}function k_(s,t,e,n=80){let i=tA(),r=eA(),o=z_(e),a=z_(e),l=new Map;for(let g of s){let _=Math.floor(g.x/n)+","+Math.floor(g.z/n);(l.get(_)??l.set(_,[]).get(_)).push(g)}let c=new ri;c.name="streamers";let h=[],u=new Gt,d=new Se,p=new L,f=new L,x=new L(0,1,0);for(let[,g]of l){for(let S=g.length-1;S>0;S--){let C=Math.floor(t()*(S+1));[g[S],g[C]]=[g[C],g[S]]}let _=(S,C)=>{let A=new We(S.clone(),C,g.length);A.geometry.boundingSphere=S.boundingSphere.clone();let R=new Float32Array(g.length);return g.forEach((D,z)=>{d.setFromAxisAngle(x,D.yaw),f.set(D.s,D.s,D.s),p.set(D.x,D.y,D.z),u.compose(p,d,f),A.setMatrixAt(z,u),R[z]=D.phase}),A.geometry.setAttribute("aPhase",new bn(R,1)),A.instanceMatrix.needsUpdate=!0,A.castShadow=!1,A.receiveShadow=!1,A.frustumCulled=!0,A.computeBoundingSphere(),A},y=_(i,o),M=_(r,a);y.name="streamer-near",M.name="streamer-far";let b=0,w=0;for(let S of g)b+=S.x,w+=S.z;b/=g.length,w/=g.length;let v=0;for(let S of g)v=Math.max(v,Math.hypot(S.x-b,S.z-w));c.add(y,M),h.push({near:y,far:M,n:g.length,cx:b,cz:w,rad:v})}let m=s.length;return{group:c,chunks:h,total:m,setFraction(g){for(let _ of h){let y=Math.max(0,Math.min(_.n,Math.ceil(_.n*g)));_.near.count=y,_.far.count=y}},updateLod(g,_){let y=0,M=0;for(let b of h){let v=Math.hypot(g.x-b.cx,g.z-b.cz)-b.rad>_;b.near.visible=!v,b.far.visible=v,v?M+=b.far.count:y+=b.near.count}return{nearN:y,farN:M}},geoTris:{near:i.index?i.index.count/3:i.attributes.position.count/3,far:r.attributes.position.count/3}}}var Uc,es,G_=ce(()=>{Ee();Er();Uc=[[.06,.3,.85],[.88,.08,.1],[.96,.74,.08],[.92,.92,.88],[.45,.16,.62],[.95,.35,.55],[.1,.55,.3]],es=s=>{let t=Math.sin(s*12.9898)*43758.5453;return t-Math.floor(t)}});function H_(){let s=new dn(36,2600,1,1);s.rotateX(-Math.PI/2),s.translate(-340,.06,250);let t=new me({color:727594,roughness:.05,metalness:0,envMapIntensity:1.4,emissive:new lt(.03,.075,.15),polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});t.customProgramCacheKey=()=>"sendai-river-v1";let e=new ne(s,t);return e.name="river",e.receiveShadow=!1,e}function V_(){let s=-364,t=-316,e=46,n=.35,i=[],r=(c,h,u,d,p,f,x)=>i.push(Ni(new Oe(d,p,f).translate(c,h,u),x));r(-340,n,230,t-s,.7,e,[.1,.1,.11]);for(let c of[-1,1]){r(-340,n+.9,230+c*(e/2-.2),t-s,1,.35,[.5,.5,.48]);for(let h=s+4;h<t;h+=14)r(h,n+.2,230+c*(e/2-.2),1.2,2.2,1,[.45,.45,.43])}let o=[];for(let c of[-1,1])for(let h=s+3;h<=t;h+=9)o.push([h,7.5,230+c*(e/2-1)]);let a=new me({vertexColors:!0,roughness:.8});a.customProgramCacheKey=()=>"sendai-bridge-v1";let l=new ne(ke(i),a);return l.name="bridge",l.castShadow=!1,l.receiveShadow=!0,{mesh:l,lights:o}}function W_(s){let t=(p,f,x,m)=>{let g=new xs(p,f,7,1).translate(0,x+f/2,0);return Ni(g,m)},e=ke([Ni(new tn(.25,.35,2,5).translate(0,1,0),[.12,.09,.07]),t(2.5,6.5,1.5,[.07,.14,.07]),t(1.8,5.5,5.5,[.09,.18,.08])]),n=new me({vertexColors:!0,roughness:.95,metalness:0});n.customProgramCacheKey=()=>"sendai-forest-v1";let i=[],r=0;for(;i.length<2200&&r++<4e4;){let p=Rr.x0-s()*800,f=250+(s()-.5)*1500,x=Dd(p,f);x<4||Math.hypot(p-$e.x,f-$e.z)<46||s()>.35+.65*Math.min(1,x/40)||i.push([p,x,f,.8+s()*.9])}let o=new We(e,n,i.length),a=new Gt,l=new Se,c=new L,h=new L,u=new lt,d=new L(0,1,0);return i.forEach(([p,f,x,m],g)=>{l.setFromAxisAngle(d,s()*6.283),c.set(m,m*(.9+.5*s()),m),h.set(p,f-.3,x),a.compose(h,l,c),o.setMatrixAt(g,a);let _=.75+.5*s();u.setRGB(_,_*(.95+.1*s()),_*.9),o.setColorAt(g,u)}),o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0,o.castShadow=!1,o.receiveShadow=!1,o.name="aobayama-forest",{mesh:o,count:i.length,tris:e.index?e.index.count/3:e.attributes.position.count/3}}function X_(){let s=[],t=[.02,.022,.02],e=[.05,.05,.05],n=(l,c,h,u,d,p,f=t,x=0,m=0)=>{let g=new Oe(u,d,p);x&&g.rotateZ(x),m&&g.rotateY(m),g.translate(l,c,h),s.push(Ni(g,f))};n(0,1.6,0,6.2,3.2,3.8,e),n(0,3.6,0,5.2,.8,3,e);let i=3.9;n(0,i+1.7,0,3.8,1.3,1.25),n(1.9,i+2.6,0,1.4,1.5,.95,t,-.5),n(2.7,i+3.1,0,1.15,.65,.6,t,-.15),n(-2,i+1.9,0,1.2,1.2,.5,t,.7);for(let[l,c]of[[1.4,.4],[1.4,-.4],[-1.4,.4],[-1.4,-.4]])n(l,i+.55,c,.34,1.7,.34);n(-.1,i+3,0,.9,1.5,.75),n(-.8,i+2.8,0,1,1.7,1.2,t,.25),s.push(Ni(new Ms(.36,8,6).translate(0,i+4,0),t));let r=new fr(.62,.07,4,14,Math.PI);r.rotateZ(Math.PI*0),r.rotateY(Math.PI/2),r.translate(0,i+4.35,0),s.push(Ni(r,t)),n(.55,i+3.3,.2,.2,1.4,.2,t,-.6);let o=new me({vertexColors:!0,roughness:.9,metalness:0});o.customProgramCacheKey=()=>"sendai-statue-v1";let a=new ne(ke(s),o);return a.name="masamune-silhouette",a.castShadow=!1,a.receiveShadow=!1,a.position.set($e.x+24,Pr,$e.z-3),a.rotation.y=0,a}function q_(){let s=[],t=new hr(30,40);t.rotateX(-Math.PI/2),t.translate($e.x,Pr+.08,$e.z),s.push(Ni(t,[.3,.28,.25]));let e=[];for(let r=-75;r<=75;r+=6){if(Math.abs(r)<14)continue;let o=33,a=r*Math.PI/180,l=$e.x+Math.cos(a)*o,c=$e.z+Math.sin(a)*o,h=new Oe(2.4,3.4,6.6);h.rotateY(-a),h.translate(l,Pr-.5,c),s.push(Ni(h,[.36,.34,.31]));let u=new Oe(2,.5,6.4);u.rotateY(-a),u.translate(l,Pr+1.4,c),s.push(Ni(u,[.42,.4,.36]))}for(let r=-90;r<=90;r+=12){let o=r*Math.PI/180,a=28,l=new Oe(.1,1,5.4);l.rotateY(-o),l.translate($e.x+Math.cos(o)*a,Pr+.6,$e.z+Math.sin(o)*a),s.push(Ni(l,[.12,.12,.13])),e.push([$e.x+Math.cos(o)*(a-1.5),Pr+3.2,$e.z+Math.sin(o)*(a-1.5)])}let n=new me({vertexColors:!0,roughness:.9,emissive:new lt(.05,.035,.02)});n.customProgramCacheKey=()=>"sendai-plateau-v1";let i=new ne(ke(s),n);return i.name="castle-ruins",i.receiveShadow=!0,{mesh:i,lights:e}}function Y_(s,t=1800){let e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),r=0,o=0;for(;r<t&&o++<1e5;){let a=zs.x1+40+Math.pow(s(),1.7)*5200,l=(s()-.5)*4200+200,c=Math.hypot(a-330,l-150);if(s()>Math.exp(-c/2200)*1.1||Math.abs(l*.01%1)>.35&&s()<.6)continue;e.set([a,4+s()*22,l],r*3);let h=s(),u=1.4+s()*1.6;n.set(h<.7?[u*1,u*.72,u*.4]:[u*.8,u*.9,u*1],r*3),i[r]=1.4+s()*2.2,r++}return{positions:e.slice(0,r*3),colors:n.slice(0,r*3),sizes:i.slice(0,r),count:r}}var Ni,Z_=ce(()=>{Ee();Er();Ir();Ni=(s,t)=>{let e=s.attributes.position.count,n=new Float32Array(e*3);for(let i=0;i<e;i++)n.set(t,i*3);return s.setAttribute("color",new Jt(n,3)),s.deleteAttribute("uv"),s}});function $_(){let s=[];for(let t of mn){if(t.kind===3)continue;let e=t.w/2-1.2,n=Math.floor((t.b-t.a)/36);for(let i=0;i<=n;i++)for(let r of[-1,1]){let o=t.a+i*36+(r>0?18:0);if(o>t.b)continue;let a=t.dir==="x"?o:t.c+r*e,l=t.dir==="x"?t.c+r*e:o,c=t.dir==="x"?0:-r,h=t.dir==="x"?-r:0;s.push({base:[a,l],top:[a+c*1.5,9,l+h*1.5],yaw:Math.atan2(-h,c)})}}return s}function J_(){let s=[];for(let t of mn.filter(e=>e.kind===1||e.kind===2))for(let e of mn.filter(n=>n.kind===0&&n.dir==="z"&&n.a<=t.c&&n.b>=t.c&&t.a<n.c&&t.b>n.c))for(let n of[-1,1])for(let i of[-1,1])s.push({x:e.c+n*(e.w/2+1.2),z:t.c+i*(t.w/2-1.5),green:n*i>0});return s}function K_(s,t){let e=a=>Nr(new tn(.07,.13,a,6,1).translate(0,a/2,0),[.16,.17,.18]),n=ke([e(9),Nr(new Oe(1.6,.1,.1).translate(.75,8.95,0),[.16,.17,.18]),Nr(new Oe(.6,.14,.3).translate(1.5,8.9,0),[.4,.4,.36])]),i=ke([e(6.5),Nr(new Oe(.3,.9,.3).translate(0,6.2,0),[.1,.1,.11])]),r=new me({vertexColors:!0,roughness:.6,metalness:.4});r.customProgramCacheKey=()=>"sendai-pole-v1";let o=(a,l)=>{let c=new We(a,r,l.length),h=new Gt,u=new Se,d=new L,p=new L(1,1,1);return l.forEach((f,x)=>{u.setFromAxisAngle(new L(0,1,0),f.yaw??0),d.set(f.base?f.base[0]:f.x,0,f.base?f.base[1]:f.z),h.compose(d,u,p),c.setMatrixAt(x,h)}),c.instanceMatrix.needsUpdate=!0,c.castShadow=!1,c.frustumCulled=!1,c};return[o(n,s),o(i,t)]}function Q_(){let s=Bs[0],t=s.x0+8,e=s.x1-40,n=s.z0+6,i=s.z1-5,r=8.4,o=[.55,.54,.52],a=[.22,.23,.25],l=[],c=(x,m,g,_,y,M,b)=>l.push(Nr(new Oe(_,y,M).translate(x,m,g),b));c((t+e)/2,r,(n+i)/2,e-t,.9,i-n,o);let h=[],u=(x,m,g,_)=>{let y=Math.hypot(g-x,_-m),M=new Oe(y,1,.18);M.rotateY(-Math.atan2(_-m,g-x)),M.translate((x+g)/2,r+.95,(m+_)/2),l.push(Nr(M,a));for(let b=0;b<y;b+=9)h.push([x+(g-x)*b/y,r+1.25,m+(_-m)*b/y])};u(t,n,e,n),u(t,i,e,i),u(t,n,t,i),u(e,n,e,i);for(let x=t+10;x<e;x+=24)for(let m of[n+5,i-5])l.push(Nr(new tn(.7,.8,r,8).translate(x,r/2,m),o));c(t+14,r+2.2,(n+i)/2,6,3.6,8,a);let d=ke(l),p=new me({vertexColors:!0,roughness:.8,metalness:.05,emissive:new lt(1,.7,.4),emissiveIntensity:0});p.customProgramCacheKey=()=>"sendai-deck-v1";let f=new ne(d,p);return f.castShadow=!0,f.receiveShadow=!0,f.name="deck",f.frustumCulled=!1,{mesh:f,mat:p,lights:h,bounds:{x0:t,x1:e,z0:n,z1:i,y:r}}}var Nr,j_=ce(()=>{Ee();Er();Ir();Nr=(s,t)=>{let e=s.attributes.position.count,n=new Float32Array(e*3);for(let i=0;i<e;i++)n.set(t,i*3);return s.setAttribute("color",new Jt(n,3)),s.deleteAttribute("uv"),s}});var tv,ev,gm,nv,iv,Ud,sv=ce(()=>{Ee();_d();Md();bd();Td();nm();tm();yd();Fs();Id();ia();pm();L_();B_();G_();Z_();j_();Ir();tv=1200,ev=new L(...A_).normalize(),gm=[{zenith:"#2a66b6",horizon:"#bcd3ec",horizonWarm:"#ffc488",sun:"#ffd6a6",cloudLit:"#ffe3c8",cloudDark:"#8da3c4",fog:"#c8d6e8",sunCol:"#ffcf9a",fogD:5e-5},{zenith:"#17387a",horizon:"#6f96c8",horizonWarm:"#f7965a",sun:"#ff9a62",cloudLit:"#f2aa8e",cloudDark:"#45588c",fog:"#7f9cc6",sunCol:"#ff9a60",fogD:6e-5},{zenith:"#060f2c",horizon:"#1b3a6e",horizonWarm:"#3a4f82",sun:"#ff9a60",cloudLit:"#3a4a70",cloudDark:"#0c1630",fog:"#1a3156",sunCol:"#ff9a60",fogD:7e-5}],nv=s=>s.dir==="x"?{x0:s.a,x1:s.b,z0:s.c-s.w/2,z1:s.c+s.w/2}:{x0:s.c-s.w/2,x1:s.c+s.w/2,z0:s.a,z1:s.b},iv=(s,t,e=0)=>s.x0-e<t.x1&&s.x1+e>t.x0&&s.z0-e<t.z1&&s.z1+e>t.z0,Ud=class extends Us{constructor(t,e,n,i={}){super(t,e,n,i),this.timeOffset=Lr.globalStart,this.duration=Lr.duration,this.timeline.duration=this.duration,this.timeline.frameCount=Math.round(this.duration*this.timeline.fps),this.showTitle=!1,this.fadeSec=0,this.fx=i.fx??{},this.nightU={value:.1},this.snowU={value:0},this.ambientCount=0,this.streamU={uTime:{value:0},uGlow:{value:.05}},this.shopU={uShopGlow:{value:.05}},this.lodDist=150}async build(){let t=vd(20260806),e=this.scene,n=gm[0],i=sa(Yt,{sunDir:ev,colors:{...n,cloudCover:.2}});if(this.sky=i,e.add(i.mesh),e.fog=new ai(new lt(n.fog),n.fogD),this.glRenderer){let c=new Sn;c.add(new ne(i.mesh.geometry,i.material));let h=new pi(this.glRenderer);e.environment=h.fromScene(c,.015,1,3e3).texture,h.dispose()}let r=new di(16764826,3.3),o=new L(-150,0,100);r.position.copy(o).addScaledVector(ev,3e3),r.target.position.copy(o),r.castShadow=!0,r.shadow.mapSize.set(4096,4096);let a=r.shadow.camera;a.left=-820,a.right=820,a.top=520,a.bottom=-520,a.near=200,a.far=6500,r.shadow.bias=-2e-4,r.shadow.normalBias=.9,e.add(r,r.target),this.sun=r,this.hemi=new ui(14674687,13226408,.55),e.add(this.hemi),e.add(this._buildGround()),e.add(this._buildBluff()),e.add(this._buildFarMountains()),this._buildBlocks(t),this._buildLamps(),this._buildStation(),this._buildTreesAll(t),this._buildArcade(t),this._buildCastleSection(t),this._buildTraffic(t),this.rig=new ra(Lr);let l=c=>new ji(c.map(([h,u])=>({t:h,v:u})));this.tracks={night:l([[0,.1],[1.2,.3],[2.6,.6],[4.2,.85],[7,1]]),palette:l([[0,0],[1.2,.5],[3,1],[5,1.45],[7,1.85]]),sunPower:l([[0,3.3],[1.5,2.3],[3,1.2],[4.5,.5],[7,.1]]),envPower:l([[0,.7],[3,.5],[7,.25]]),exposure:l([[0,1],[7,1]]),bloom:l([[0,.25],[3,.4],[7,.55]]),bloomThreshold:l([[0,1.4],[7,1]]),bloomRadius:l([[0,.55],[7,.7]]),dofAperture:l([[0,.6],[7,.6]]),dofMaxBlur:l([[0,4],[7,5]])},this.look.grade={uShadowAmt:.3,uVig:.3,uSat:1.06,uGrain:.02,uAberr:6e-4,uHighTint:new lt(1.03,1,.95)},this._ca=new lt,this._cb=new lt,na(this,{tiled:this.fx.tiled,haze:this.fx.haze,tileExclude:[this.cars.mesh,this.peds.mesh,this.pedsArcade.mesh,this.boxMesh],skyUniforms:this.sky.uniforms})}_buildGround(){let t=new dn(24e3,24e3,1,1);t.rotateX(-Math.PI/2);let e=new me({color:16777215,roughness:.85,metalness:0});e.customProgramCacheKey=()=>"sendai-ground-v4";let n=x=>x.kind===0?0:x.kind===3?1:2,i=[...mn].sort((x,m)=>n(x)-n(m)),r=i.map(x=>new pe(x.dir==="x"?0:1,x.c,x.w,x.kind)),o=i.map(x=>new pe(x.a,x.b,0,0)),a=[...oa,...Bs],l=a.map(x=>new pe(x.x0,x.x1,x.z0,x.z1)),c=a.map(x=>Bs.includes(x)?1:0),h=i.length,u=a.length,d=this.nightU,p=zs;e.onBeforeCompile=x=>{x.uniforms.uNight=d,x.uniforms.uStA={value:r},x.uniforms.uStB={value:o},x.uniforms.uPark={value:l},x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
          uniform float uNight; varying vec3 vWP;
          uniform vec4 uStA[${h}]; uniform vec4 uStB[${h}]; uniform vec4 uPark[${u}];
          ${Qn}`).replace("#include <color_fragment>",`#include <color_fragment>
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
totalEmissiveRadiance += gEmis;`)};let f=new ne(t,e);return f.receiveShadow=!0,f.name="ground",f}_buildBluff(){let e=Rr.x0,n=-750,i=1250,r=150,o=170,a=new dn(e- -1500,i-n,r,o);a.rotateX(-Math.PI/2),a.translate((-1500+e)/2,0,(n+i)/2);let l=a.attributes.position;for(let f=0;f<l.count;f++)l.setY(f,Dd(l.getX(f),l.getZ(f)));a.computeVertexNormals();let c=a.attributes.normal,h=new Float32Array(l.count*3),u=Pi(19);for(let f=0;f<l.count;f++){let x=l.getY(f),m=1-c.getY(f),g=u.fbm(l.getX(f)*.01,l.getZ(f)*.01,3),_=Math.min(1,x/20),y=.85+.3*g;h[f*3]=(.22+(.13-.22)*_+m*.25)*y,h[f*3+1]=(.32+(.23-.32)*_+m*.15)*y,h[f*3+2]=(.13+(.09-.13)*_+m*.1)*y}a.setAttribute("color",new Jt(h,3));let d=new me({vertexColors:!0,roughness:.95,metalness:0,emissive:new lt(.035,.06,.04),polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});d.customProgramCacheKey=()=>"sendai-bluff-v1";let p=new ne(a,d);return p.receiveShadow=!0,p.castShadow=!1,p.name="bluff",p.position.y=.02,p}_buildFarMountains(){let t=Pi(51),e=Pi(77),n=[{x:-24e3,z:22e3,h:1550,sx:6500,sz:5200},{x:-9e3,z:-19e3,h:1150,sx:3600,sz:3200},{x:-22e3,z:-3e3,h:850,sx:4800,sz:9500},{x:-17e3,z:11e3,h:700,sx:4200,sz:3800}],r=wd(Yt,{heightFn:(h,u)=>{let d=0;for(let f of n)d+=f.h*Math.exp(-(((h-f.x)/f.sx)**2+((u-f.z)/f.sz)**2));let p=Math.hypot(h,u);return d+=(160+380*t.fbm(h*18e-5,u*18e-5,4))*Math.min(1,Math.max(0,(p-2500)/6500))*(.6+.8*e.fbm(h*4e-4,u*4e-4,3)),d},y:-4,rings:240,segs:400,thA:1.9,thB:4.4,snowLine:99999}),o=r.geometry.attributes.position,a=r.geometry.attributes.normal,l=new Float32Array(o.count*3),c=Pi(31);for(let h=0;h<o.count;h++){let u=o.getX(h),d=o.getZ(h),p=o.getY(h),f=1-a.getY(h),x=c.fbm(u*.0011,d*.0011,4),m=c.fbm(u*.006+5,d*.006,3),g=Math.min(1,Math.max(0,(f-.22)/.3))*Math.min(1,Math.max(0,(p-500)/500)),_=Math.min(1,Math.max(0,(p-900)/500)),y=[.14+.05*_+.03*x,.22-.02*_+.03*x,.1+.02*_],M=[.34,.32,.3],b=.88+.24*m;for(let w=0;w<3;w++)l[h*3+w]=(y[w]+(M[w]-y[w])*g*.7)*b}return r.geometry.setAttribute("color",new Jt(l,3)),r}_buildBlocks(t){let e=Sd(Yt,{uNight:this.nightU,uSnow:this.snowU}),n=new Os(Yt,e,4e3),i=mn.map(nv),r=[...oa,...Bs],o=new Set([zs.x0,zs.x1]),a=new Set([zs.z0,zs.z1]);for(let u of mn){let d=nv(u);u.dir==="z"?(o.add(d.x0),o.add(d.x1)):(a.add(d.z0),a.add(d.z1))}let l=[...o].sort((u,d)=>u-d),c=[...a].sort((u,d)=>u-d),h=1;for(let u=0;u<l.length-1;u++)for(let d=0;d<c.length-1;d++){let p=l[u],f=l[u+1],x=c[d],m=c[d+1];if(f-p<9||m-x<9)continue;let g=Math.max(1,Math.round((f-p)/27)),_=Math.max(1,Math.round((m-x)/25));for(let y=0;y<g;y++)for(let M=0;M<_;M++){let b=p+(f-p)*y/g,w=p+(f-p)*(y+1)/g,v=x+(m-x)*M/_,S=x+(m-x)*(M+1)/_,C={x0:b,x1:w,z0:v,z1:S};if(i.some(it=>iv(C,it,-.6))||r.some(it=>iv(C,it,2)))continue;let A=(b+w)/2,R=(v+S)/2;if(A<-314)continue;let D=Math.abs(R-230),z=Math.abs(R-0),N=Math.abs(A),O=16,V=44;D<62?(O=38,V=95):z<58&&(O=28,V=66),N<36&&R>20&&R<215&&(O=14,V=26),A>180&&R>60&&R<330&&(O=55,V=120),A<-240&&(O=10,V=28);let G=O+(V-O)*Math.pow(t(),1.3),rt=G>60?t()<.6?2:0:G>30?t.pick([0,2,4]):t.pick([1,3,4,4]),W=w-b-1.2,Z=S-v-1.2;W<6||Z<6||n.add(A,0,R,W,G,Z,rt,h+++t(),.35+.55*t())}}n.add(326,0,160,44,36,112,2,901.3,.7),n.add(300,0,96,30,70,30,0,902.1,.6),n.add(300,0,226,34,58,28,2,903.7,.6),n.add(350,0,160,18,84,40,2,904.4,.7),this.boxes=n,this.boxMesh=n.build({castShadow:!0}),this.scene.add(this.boxMesh)}_buildLamps(){let t=$_(),e=J_(),[n,i]=K_(t,e);this.scene.add(n,i);let r=new Float32Array(t.length*3),o=new Float32Array(t.length*3),a=new Float32Array(t.length);t.forEach((u,d)=>{r.set(u.top,d*3),o.set([3,1.9,.9],d*3),a[d]=1.1}),this.lamps=Hn(Yt,{positions:r,colors:o,sizes:a,fogDensity:5e-5,minPx:1.4,maxPx:22}),this.scene.add(this.lamps.points);let l=new Float32Array(e.length*3),c=new Float32Array(e.length*3),h=new Float32Array(e.length);e.forEach((u,d)=>{l.set([u.x,6.2,u.z],d*3),c.set(u.green?[.3,2.4,.9]:[2.6,.2,.12],d*3),h[d]=.5}),this.signals=Hn(Yt,{positions:l,colors:c,sizes:h,fogDensity:5e-5,minPx:1.4,maxPx:10}),this.scene.add(this.signals.points),this.lampCount=t.length,this.signalCount=e.length}_buildStation(){let t=Q_();this.deck=t,this.scene.add(t.mesh);let e=new Float32Array(t.lights.length*3),n=new Float32Array(t.lights.length*3),i=new Float32Array(t.lights.length);t.lights.forEach((r,o)=>{e.set(r,o*3),n.set([2.4,1.6,.8],o*3),i[o]=.6}),this.deckGlow=Hn(Yt,{positions:e,colors:n,sizes:i,fogDensity:5e-5,minPx:1.4,maxPx:12}),this.scene.add(this.deckGlow.points)}_buildTreesAll(t){let e=I_(t);e.meshes.forEach(n=>this.scene.add(n)),this.treeCount=e.count,this.treeTris=e.tris}_buildArcade(t){let e=D_();e.meshes.forEach(l=>this.scene.add(l)),N_(t,this.shopU).meshes.forEach(l=>this.scene.add(l));let i=U_();this.arcadeGlow=Hn(Yt,{...i,fogDensity:5e-5,minPx:1.4,maxPx:16}),this.scene.add(this.arcadeGlow.points);let r=F_(t),[o,a]=O_(r.poles,r.balls);this.scene.add(o,a),this.streamers=k_(r.items,t,this.streamU),this.scene.add(this.streamers.group),this.decoCount=r.items.length,this.archCount=e.archCount}_buildCastleSection(t){this.scene.add(H_());let e=V_();this.scene.add(e.mesh);let n=q_();this.scene.add(n.mesh),this.scene.add(X_());let i=W_(t);this.scene.add(i.mesh),this.forestCount=i.count;let r=(a,l,c)=>{let h=new Float32Array(a.length*3),u=new Float32Array(a.length*3),d=new Float32Array(a.length);return a.forEach((p,f)=>{h.set(p,f*3),u.set(c,f*3),d[f]=l}),Hn(Yt,{positions:h,colors:u,sizes:d,fogDensity:5e-5,minPx:1.4,maxPx:16})};this.castleGlow=r([...n.lights,...e.lights],.8,[2.8,1.8,.9]),this.scene.add(this.castleGlow.points);let o=Y_(t);this.farGlow=Hn(Yt,{positions:o.positions,colors:o.colors,sizes:o.sizes,fogDensity:3e-5,minPx:1.2,maxPx:6}),this.scene.add(this.farGlow.points),this.farLightCount=o.count}_buildTraffic(t){let e=[];for(let h of mn){if(h.kind===3)continue;let u=h.b-h.a,d=h.kind===0?[3.4]:h.kind===1?[6,12.4]:[10.4,14.6];for(let p of d)for(let f of[1,-1]){let x=Math.max(1,Math.round(u/70));for(let m=0;m<x;m++){let g=h.dir==="x"?f>0?-1:1:f>0?1:-1;e.push({alongX:h.dir==="x",dir:f,fixed:h.c+g*p,speed:t.range(6,12),off:t.range(0,4e3),len:u,min:h.a,ph:t()})}}}this.cars=Ad(Yt,e),this.scene.add(this.cars.mesh);let n=e.length,i=new Float32Array(n*4*3),r=new Float32Array(n*4*3),o=new Float32Array(n*4);for(let h=0;h<n;h++)for(let u=0;u<4;u++){let d=(h*4+u)*3,p=u<2;p?(r[d]=3,r[d+1]=2.9,r[d+2]=2.3):(r[d]=2.4,r[d+1]=.1,r[d+2]=.07),o[h*4+u]=p?.7:.5}this.carGlow=Hn(Yt,{positions:i,colors:r,sizes:o,fogDensity:4e-5,minPx:1.4,maxPx:12}),this.scene.add(this.carGlow.points),this.carCount=n;let a=[],l=(h,u,d,p)=>{for(let f=0;f<p;f++)a.push({x0:u,x1:d,z:h+t.range(-.8,.8),dir:t()<.5?1:-1,speed:t.range(.9,1.5),off:t.range(0,800),ph:t()})};l(230-21.5,-420,300,55),l(230+21.5,-420,300,55);for(let h of[-3,3,-19.5,19.5])l(0+h,-235,105,30);l(109,-330,-10,12),l(121,-330,-10,12),l(109,10,330,12),l(121,10,330,12),this.peds=Rc(Yt,a),this.scene.add(this.peds.mesh),this.pedCount=a.length;let c=[];for(let h=0;h<90;h++)c.push({x0:-(Dr.z1-2),x1:-(Dr.z0+2),z:t.range(-5.2,5.2),dir:t()<.5?1:-1,speed:t.range(.7,1.3),off:t.range(0,800),ph:t()});this.pedsArcade=Rc(Yt,c),this.pedsArcade.mesh.rotation.y=Math.PI/2,this.pedsArcade.mesh.updateMatrix(),this.scene.add(this.pedsArcade.mesh),this.pedCount+=c.length}applyTime(t){let e=this.sampleTrack("palette",t,0),n=Math.min(1,Math.floor(e)),i=Math.min(1,e-n),r=gm[n],o=gm[Math.min(2,n+1)],a=this.sky.uniforms,l=(h,u)=>{this._ca.set(r[h]),this._cb.set(o[h]),u.value.lerpColors(this._ca,this._cb,i)};l("zenith",a.uZenith),l("horizon",a.uHorizon),l("horizonWarm",a.uHorizonWarm),l("sun",a.uSunColor),l("cloudLit",a.uCloudLit),l("cloudDark",a.uCloudDark),this._ca.set(r.fog),this._cb.set(o.fog),this.scene.fog.color.lerpColors(this._ca,this._cb,i),this.scene.fog.density=r.fogD+(o.fogD-r.fogD)*i,this._ca.set(r.sunCol),this._cb.set(o.sunCol),this.sun.color.lerpColors(this._ca,this._cb,i),this.nightU.value=this.sampleTrack("night",t,.1);let c=this.sampleTrack("sunPower",t,3);this.sun.intensity=c,a.uSunStrength.value=Math.min(1,c/2),this.hemi.intensity=.55*Math.max(.25,1-this.nightU.value*1),this.scene.environmentIntensity=this.sampleTrack("envPower",t,.6)}onBeforeRender({t,projScale:e,camera:n}){let i=t+this.timeOffset;this.sky.mesh.position.copy(n.position),this.sky.uniforms.uTime.value=i*5;let r=this.scene.fog.density;for(let a of[this.lamps,this.carGlow,this.signals,this.deckGlow,this.castleGlow,this.farGlow])a.uniforms.uProj.value=e,a.uniforms.uFog.value=r;let o=this.nightU.value;this.lamps.uniforms.uGain.value=.08+1*o,this.carGlow.uniforms.uGain.value=.5+.7*o,this.signals.uniforms.uGain.value=.6+.6*o,this.castleGlow.uniforms.uGain.value=.1+1*o,this.farGlow.uniforms.uGain.value=.04+1.3*o*o,this.deckGlow.uniforms.uGain.value=.1+1*o,this.deck.mat.emissiveIntensity=.02+.2*o,this.cars.update(i,this.carGlow.points.geometry.attributes.position.array),this.carGlow.points.geometry.attributes.position.needsUpdate=!0,this.peds.update(i),this.pedsArcade.update(i),this.streamU.uTime.value=i,this.streamU.uGlow.value=.04+.5*o,this.shopU.uShopGlow.value=.08+.9*o,this.arcadeGlow.uniforms.uProj.value=e,this.arcadeGlow.uniforms.uFog.value=r,this.arcadeGlow.uniforms.uGain.value=.15+1*o,this.lodStats=this.streamers.updateLod(n.position,this.lodDist)}setAmbientCount(t){this.ambientCount=t,this.streamers.setFraction(Math.min(1,t/tv)),this.lodDist=t>=tv?150:100}setLayoutWeight(t){this.rig.weight=t}}});var rv,ov=ce(()=>{rv=[{id:"cap-sendai",title:"SENDAI",sub:"\u4ED9\u53F0",a:-.05,b:.15},{id:"cap-aoba",title:"\u9752\u8449\u901A",sub:"Aoba-dori",a:.18,b:.34},{id:"cap-jozenji",title:"\u5B9A\u7985\u5BFA\u901A",sub:"Jozenji-dori",a:.37,b:.52},{id:"cap-tanabata",title:"\u4ED9\u53F0\u4E03\u5915",sub:"Sendai Tanabata",a:.55,b:.72},{id:"cap-aobajo",title:"\u9752\u8449\u57CE\u5740\u304B\u3089",sub:"From Aoba Castle Ruins",a:.75,b:1.08}]});var av={};kc(av,{default:()=>nA});var nA,lv=ce(()=>{sv();ov();pm();nA={contract:1,meta:{id:"sendai",name:{ja:"\u4ED9\u53F0",en:"Sendai"},season:"summer",theme:"\u4E03\u5915\u306E\u5915\u3079\uFF08\u91D1\u8272\u306E\u5915\u65B9\u2192\u706F\u308A\u59CB\u3081\u308B\u8857\uFF09",docTitle:"SENDAI \u2014 JAPAN \u2014 THE CITY COLLECTION"},captions:rv,timeline:{globalStart:Lr.globalStart,duration:Lr.duration},ambient:{name:"\u5439\u304D\u6D41\u3057",counts:{normal:1200,light:700}},tuning:{haze:{start:500,end:5e3,strength:.65},grade:{expDay:1.08,expDusk:.92,highDusk:[1.09,1,.885]}},async buildScene(s){let t=new Ud(s.cityMeta,s.index,s.total,{renderer:s.renderer,fx:s.fx});return await t.build(),t}}});var s3,cv,uv,iA,sA,r3,rA,hv,o3,dv,fv,xm=ce(()=>{s3=[{id:"gyoko",dir:"x",c:0,w:73,a:-160,b:30,kind:1},{id:"naka",dir:"z",c:0,w:22,a:-500,b:720,kind:2},{id:"harumi",dir:"x",c:720,w:35,a:-330,b:480,kind:3},{id:"eitai",dir:"x",c:-500,w:35,a:-330,b:480,kind:3},...[-385,-270,-155,115,230,345,460,575].map(s=>({id:`x${s}`,dir:"x",c:s,w:16,a:-330,b:330,kind:0})),{id:"wA",dir:"z",c:-150,w:18,a:-500,b:720,kind:0},{id:"wB",dir:"z",c:-300,w:16,a:-500,b:720,kind:0},{id:"eA",dir:"z",c:150,w:20,a:-500,b:720,kind:0},{id:"eB",dir:"z",c:250,w:18,a:-500,b:720,kind:0}],cv=s=>s*Math.PI/180,uv=(s,t)=>[Math.sin(cv(s))*t,720-Math.cos(cv(s))*t],iA=221,sA=1500,r3=(()=>{let[s,t]=uv(iA,sA);return{x:s,z:t,height:333}})(),rA=249,hv=3e4,o3=(()=>{let[s,t]=uv(rA,hv);return{x:s,z:t,height:3776*(hv/100600)}})(),dv=[-.93,-.07,.36],fv=[[400,0],[0,0],[0,700]]});var oA,pv,aA,lA,cA,hA,uA,dA,Ur,_m=ce(()=>{xm();oA=0,pv=7,aA=s=>{let t=s*s*(3-2*s),e=1-(1-s)*(1-s);return .5*t+.5*e},lA=s=>pv*aA(Math.min(1,s/.94)),cA=s=>s,hA=[[0,[430,95,20],[-60,25,0],40],[.14,[260,70,8],[-150,20,0],39],[.28,[60,40,6],[0,12,120],37],[.34,[4,16,40],[0,8,200],36],[.5,[0,11,210],[0,8,420],35],[.56,[0,6.5,270],[0,8,470],33],[.66,[0,6.5,430],[0,9,650],33],[.74,[0,10,620],[0,14,780],34],[.84,[-10,70,680],[-300,60,1100],38],[.94,[-30,200,640],[-760,140,1500],42],[1,[-30,200,640],[-760,140,1500],42]],uA=hA.map(([s,t,e,n])=>({t:lA(s),pos:t,target:e,fov:n,ease:cA})),dA=[[0,90,25,58,1,120,0],[.36,40,12,60,1,80,0],[.55,12,9,60,1,60,0],[.7,6.5,8,60,.8,55,0],[.93,7,9,60,.9,55,0],[1,40,30,56,3,-200,0]],Ur={globalStart:oA,duration:pv,landscapeKeys:uA,route:fv,dolly:dA}});var mv,vm,Fd,gv=ce(()=>{Ee();_d();Md();Id();ia();_m();xm();mv=new L(...dv).normalize(),vm=[{zenith:"#1a3270",horizon:"#476ca6",horizonWarm:"#f29a62",sun:"#ff9a62",cloudLit:"#7a86b0",cloudDark:"#1c2a58",fog:"#3a5688",sunCol:"#8aa4e0",fogD:4e-5},{zenith:"#0b1a48",horizon:"#26417a",horizonWarm:"#a85c4c",sun:"#d0705a",cloudLit:"#3e4a7a",cloudDark:"#0e1838",fog:"#1d3260",sunCol:"#6f88c8",fogD:5e-5},{zenith:"#050a22",horizon:"#0f2048",horizonWarm:"#243258",sun:"#3a4a7a",cloudLit:"#222c50",cloudDark:"#070d20",fog:"#0d1c3c",sunCol:"#5a70b0",fogD:6e-5}],Fd=class extends Us{constructor(t,e,n,i={}){super(t,e,n,i),this.timeOffset=Ur.globalStart,this.duration=Ur.duration,this.timeline.duration=this.duration,this.timeline.frameCount=Math.round(this.duration*this.timeline.fps),this.showTitle=!1,this.fadeSec=0,this.fx=i.fx??{},this.nightU={value:.6},this.snowU={value:0},this.ambientCount=0}async build(){let t=this.scene,e=vm[0],n=sa(Yt,{sunDir:mv,colors:{...e,cloudCover:0}});if(this.sky=n,t.add(n.mesh),t.fog=new ai(new lt(e.fog),e.fogD),this.glRenderer){let c=new Sn;c.add(new ne(n.mesh.geometry,n.material));let h=new pi(this.glRenderer);t.environment=h.fromScene(c,.015,1,3e3).texture,h.dispose()}let i=new di(9086176,.5);i.position.copy(mv).multiplyScalar(3e3),t.add(i,i.target),this.sun=i,this.hemi=new ui(7309512,1712176,.5),t.add(this.hemi);let r=new dn(24e3,24e3,1,1);r.rotateX(-Math.PI/2);let o=new me({color:1382172,roughness:.9,metalness:0}),a=new ne(r,o);a.name="ground",t.add(a),this.rig=new ra(Ur);let l=c=>new ji(c.map(([h,u])=>({t:h,v:u})));this.tracks={night:l([[0,.55],[1.5,.75],[3.5,.92],[7,1]]),palette:l([[0,0],[2.5,.8],[5,1.5],[7,1.95]]),sunPower:l([[0,.5],[3,.3],[7,.12]]),envPower:l([[0,.5],[7,.2]]),exposure:l([[0,1],[7,1]]),bloom:l([[0,.45],[3,.6],[7,.75]]),bloomThreshold:l([[0,1],[7,.85]]),bloomRadius:l([[0,.6],[7,.75]]),dofAperture:l([[0,.6],[7,.6]]),dofMaxBlur:l([[0,4],[7,5]])},this.look.grade={uShadowAmt:.3,uVig:.2,uSat:1.04,uGrain:.02,uAberr:6e-4,uHighTint:new lt(1.03,1,.96)},this._ca=new lt,this._cb=new lt,na(this,{tiled:this.fx.tiled,haze:this.fx.haze,tileExclude:[],skyUniforms:this.sky.uniforms})}applyTime(t){let e=this.sampleTrack("palette",t,0),n=Math.min(1,Math.floor(e)),i=Math.min(1,e-n),r=vm[n],o=vm[Math.min(2,n+1)],a=this.sky.uniforms,l=(h,u)=>{this._ca.set(r[h]),this._cb.set(o[h]),u.value.lerpColors(this._ca,this._cb,i)};l("zenith",a.uZenith),l("horizon",a.uHorizon),l("horizonWarm",a.uHorizonWarm),l("sun",a.uSunColor),l("cloudLit",a.uCloudLit),l("cloudDark",a.uCloudDark),this._ca.set(r.fog),this._cb.set(o.fog),this.scene.fog.color.lerpColors(this._ca,this._cb,i),this.scene.fog.density=r.fogD+(o.fogD-r.fogD)*i,this._ca.set(r.sunCol),this._cb.set(o.sunCol),this.sun.color.lerpColors(this._ca,this._cb,i),this.nightU.value=this.sampleTrack("night",t,.6);let c=this.sampleTrack("sunPower",t,.5);this.sun.intensity=c,a.uSunStrength.value=Math.min(1,c/2),this.hemi.intensity=.5*Math.max(.3,1-this.nightU.value*.6),this.scene.environmentIntensity=this.sampleTrack("envPower",t,.5)}onBeforeRender({t,camera:e}){this.sky.mesh.position.copy(e.position),this.sky.uniforms.uTime.value=(t+this.timeOffset)*5}setAmbientCount(t){this.ambientCount=t}setLayoutWeight(t){this.rig.weight=t}}});var xv,_v=ce(()=>{xv=[{id:"cap-tokyo",title:"TOKYO",sub:"\u6771\u4EAC",a:-.05,b:.15},{id:"cap-marunouchi",title:"\u4E38\u306E\u5185",sub:"Marunouchi",a:.18,b:.32},{id:"cap-nakadori",title:"\u4E38\u306E\u5185\u4EF2\u901A\u308A",sub:"Marunouchi Naka-dori",a:.35,b:.52},{id:"cap-illumination",title:"\u51AC\u306E\u5149",sub:"Winter Illumination",a:.55,b:.72},{id:"cap-tower",title:"\u6771\u4EAC\u30BF\u30EF\u30FC\u3078",sub:"Toward Tokyo Tower",a:.75,b:1.08}]});var vv={};kc(vv,{default:()=>fA});var fA,yv=ce(()=>{gv();_v();_m();fA={contract:1,meta:{id:"tokyo",name:{ja:"\u6771\u4EAC",en:"Tokyo"},season:"winter",theme:"\u51AC\u306E\u591C\u306E\u30A4\u30EB\u30DF\u30CD\u30FC\u30B7\u30E7\u30F3\uFF08\u30D6\u30EB\u30FC\u30A2\u30EF\u30FC\u2192\u591C\uFF09",docTitle:"TOKYO \u2014 JAPAN \u2014 THE CITY COLLECTION"},captions:xv,timeline:{globalStart:Ur.globalStart,duration:Ur.duration},ambient:{name:"\u304D\u3089\u3081\u304D",counts:{normal:4e4,light:16e3}},tuning:{haze:{start:800,end:9e3,strength:.45,mountain:.5},grade:{expDay:1.08,expDusk:.9,highDusk:[1.06,1,.93]}},async buildScene(s){let t=new Fd(s.cityMeta,s.index,s.total,{renderer:s.renderer,fx:s.fx});return await t.build(),t}}});Ee();Ee();Ee();Ee();var ta={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};Ee();Ee();var Gn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},mT=new Ji(-1,1,1,-1,0,1),Zp=class extends $t{constructor(){super(),this.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yt([0,2,0,0,2,0],2))}},gT=new Zp,Ns=class{constructor(t){this._mesh=new ne(gT,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,mT)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Tr=class extends Gn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ci.clone(t.uniforms),this.material=new Xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ns(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Tc=class extends Gn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},cd=class extends Gn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var hd=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new Re(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tr(ta),this.copyPass.material.blending=Si,this.timer=new vr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Tc!==void 0&&(o instanceof Tc?n=!0:o instanceof cd&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};Ee();var ud=class extends Gn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new lt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};Ee();Ee();var Dx={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new lt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ea=class s extends Gn{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new lt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Re(r,o,{type:qe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Re(r,o,{type:qe,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Re(r,o,{type:qe,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Dx;this.highPassUniforms=Ci.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ci.clone(ta.uniforms),this.blendMaterial=new Xe({uniforms:this.copyUniforms,vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader,premultipliedAlpha:!0,blending:Bo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new lt,this._oldClearAlpha=1,this._basic=new Yn,this._fsQuad=new Ns(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let i=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new Xe({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ea.BlurDirectionX=new nt(1,0);ea.BlurDirectionY=new nt(0,1);Ee();var Ac={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var dd=class extends Gn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ci.clone(Ac.uniforms),this.material=new Ss({name:Ac.name,uniforms:this.uniforms,vertexShader:Ac.vertexShader,fragmentShader:Ac.fragmentShader}),this._fsQuad=new Ns(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},he.getTransfer(this._outputColorSpace)===xe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Es?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cs?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rs?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ps?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Is?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ko&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Nx(s,{near:t,far:e}){let n={uniforms:{tDiffuse:{value:null},tDepth:{value:null},uNear:{value:t},uFar:{value:e},uFocus:{value:200},uAperture:{value:1},uMaxBlur:{value:8},uRes:{value:new s.Vector2(1920,1080)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`},i=new Tr(n),r=i.render.bind(i);return i.render=function(o,a,l,c,h){this.uniforms.tDepth.value=l.depthTexture,r(o,a,l,c,h)},i}function Ux(s){let t={uniforms:{tDiffuse:{value:null},uFade:{value:1},uSeed:{value:0},uRes:{value:new s.Vector2(1920,1080)},uSat:{value:1.08},uContrast:{value:.35},uShadowTint:{value:new s.Color(0,.05,.1)},uShadowAmt:{value:.35},uHighTint:{value:new s.Color(1.05,1,.93)},uVig:{value:.55},uGrain:{value:.028},uAberr:{value:.0016}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`};return new Tr(t)}Ec();var $p='"Helvetica Neue", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Segoe UI", Arial, sans-serif';function Jp(s,t,e,n,i,r){let o=[...t],a=o.map(h=>s.measureText(h).width),l=a.reduce((h,u)=>h+u,0)+i*(o.length-1),c=e-l/2;o.forEach((h,u)=>{s.globalAlpha=r(u,o.length),s.fillText(h,c,n),c+=a[u]+i})}function zx(s,t,e,n,i,{englishName:r,name:o,index:a,total:l}){let c=Ox(n,i);if(!c.visible||c.opacity<=.001)return;let h=e/1080;s.save(),s.textBaseline="alphabetic",s.fillStyle="#fff",s.shadowColor="rgba(8,14,34,0.55)",s.shadowBlur=24*h;let u=s.createLinearGradient(0,e*.62,0,e);u.addColorStop(0,"rgba(6,10,24,0)"),u.addColorStop(1,`rgba(6,10,24,${.5*c.opacity})`),s.shadowColor="transparent",s.fillStyle=u,s.fillRect(0,e*.62,t,e*.38),s.fillStyle="#fff",s.shadowColor="rgba(8,14,34,0.55)";let d=t/2,p=104*h;s.font=`200 ${p}px ${$p}`;let f=c.spacing*p,x=r.toUpperCase();Jp(s,x,d+f/2,e*.865,f,(g,_)=>{let y=En(c.reveal*(_+3)-g*.9,0,1);return c.opacity*Cn.outCubic(y)});let m=t*.16*Cn.outCubic(c.reveal);s.globalAlpha=c.opacity*.8,s.shadowBlur=0,s.fillRect(d-m/2,e*.885,m,Math.max(1,1.5*h)),s.shadowBlur=12*h,s.shadowColor="rgba(8,14,34,0.6)",s.font=`300 ${24*h}px ${$p}`,s.globalAlpha=c.opacity*Cn.outCubic(En(c.reveal*1.4-.4,0,1)),Jp(s,`${o}`,d,e*.925,10*h,()=>s.globalAlpha),s.font=`300 ${15*h}px ${$p}`,s.globalAlpha=c.opacity*.75*Cn.outCubic(En(c.reveal*1.4-.4,0,1)),Jp(s,`JAPAN \u2014 THE CITY COLLECTION      ${String(a).padStart(2,"0")} / ${String(l).padStart(2,"0")}`,d,e*.958,5*h,()=>s.globalAlpha),s.restore()}Ec();var pd=4,md=4e4,gd=class{constructor(t,{width:e=1920,height:n=1080,samples:i=4}={}){this.stage=t,this.ctx2d=t.getContext("2d",{alpha:!1}),this.glCanvas=document.createElement("canvas"),this.gl=new bc({canvas:this.glCanvas,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.gl.setPixelRatio(1),this.gl.outputColorSpace=nn,this.gl.toneMapping=bi,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=Ts,this.gl.shadowMap.autoUpdate=!1,this.samples=i,this.width=0,this.height=0,this.city=null,this._shadowDirty=!0,this.setSize(e,n)}_buildComposer(){let{width:t,height:e}=this;this.composer?.dispose?.();let n=r=>new Re(t,e,{type:qe,samples:r,depthBuffer:!0,depthTexture:new Zn(t,e,An)}),i;try{i=n(this.samples)}catch{i=n(0)}this.composer=new hd(this.gl,i),this.composer.setPixelRatio(1),this.composer.setSize(t,e),this.renderPass=new ud(new Sn,new Ie),this.dofPass=Nx(Yt,{near:pd,far:md}),this.bloomPass=new ea(new nt(t,e),.6,.7,.9),this.outputPass=new dd,this.gradePass=Ux(Yt),[this.renderPass,this.dofPass,this.bloomPass,this.outputPass,this.gradePass].forEach(r=>this.composer.addPass(r)),this.dofPass.uniforms.uRes.value.set(t,e),this.gradePass.uniforms.uRes.value.set(t,e)}setSize(t,e){t=Math.round(t),e=Math.round(e),!(t===this.width&&e===this.height)&&(this.width=t,this.height=e,this.stage.width=t,this.stage.height=e,this.gl.setSize(t,e,!1),this._buildComposer(),this.city&&this._bindCity())}_bindCity(){this.renderPass.scene=this.city.scene,this.renderPass.camera=this.city.camera,this.city.camera.aspect=this.width/this.height,this.city.camera.updateProjectionMatrix()}setCity(t){this.city=t,this._bindCity(),this._shadowDirty=!0}renderAt(t,e=0){let n=this.city,i=n.frameState(t),r=n.camera;r.aspect=this.width/this.height,r.near=pd,r.far=md,r.updateProjectionMatrix(),r.updateMatrixWorld(!0);let o=r.projectionMatrix.elements[5]*.5*this.height;n.onBeforeRender?.({t,frame:e,projScale:o,camera:r}),this.gl.toneMappingExposure=i.exposure,this.bloomPass.strength=i.bloom,this.bloomPass.radius=i.bloomRadius??.7,this.bloomPass.threshold=i.bloomThreshold??.9;let a=this.dofPass.uniforms;a.uFocus.value=i.focusDistance,a.uAperture.value=i.dofAperture??1,a.uMaxBlur.value=(i.dofMaxBlur??7)*(this.height/1080),this.dofPass.enabled=(i.dofMaxBlur??7)>.05;let l=this.gradePass.uniforms;l.uFade.value=Bx(t,n.duration,{inSec:n.fadeSec??.8,outSec:n.fadeSec??.8}),l.uSeed.value=e%997,Object.entries(n.look.grade??{}).forEach(([h,u])=>{l[h]&&(l[h].value.isColor?l[h].value.set(u):l[h].value=u)}),this._shadowDirty&&(this.gl.shadowMap.needsUpdate=!0,this._shadowDirty=!1),this.composer.render();let c=this.ctx2d;c.drawImage(this.glCanvas,0,0,this.width,this.height),n.showTitle!==!1&&zx(c,this.width,this.height,t,n.duration,n.titleInfo)}dispose(){this.composer?.dispose?.(),this.gl.dispose()}};var xd=class extends gd{constructor(t,e){super(t,e),this.gl.info.autoReset=!1,this.lastInfo={calls:0,triangles:0},this.grade=null}applyQuality({w:t,h:e,samples:n,dof:i}){this.dofOn=i,n!==this.samples&&(this.samples=n,this.width=0),this.setSize(t,e)}gpuString(){let t=this.gl.getContext(),e=t.getExtension("WEBGL_debug_renderer_info");return e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):"unknown"}renderAt(t,e=0,n=t){let i=this.city,r=i.frameState(t),o=i.camera;o.aspect=this.width/this.height,o.near=pd,o.far=md,o.updateProjectionMatrix(),o.updateMatrixWorld(!0);let a=o.projectionMatrix.elements[5]*.5*this.height;i.onBeforeRender?.({t:n,frame:e,projScale:a,camera:o}),this.gl.toneMappingExposure=r.exposure*(this.grade?.enabled?this.grade.exposureGain(t):1),this.bloomPass.strength=r.bloom,this.bloomPass.radius=r.bloomRadius??.7,this.bloomPass.threshold=r.bloomThreshold??.9;let l=this.dofPass.uniforms;l.uFocus.value=r.focusDistance,l.uAperture.value=r.dofAperture??1,l.uMaxBlur.value=(r.dofMaxBlur??7)*(this.height/1080),this.dofPass.enabled=this.dofOn!==!1&&(r.dofMaxBlur??7)>.05;let c=this.gradePass.uniforms;c.uFade.value=1,c.uSeed.value=e%997,Object.entries(i.look.grade??{}).forEach(([h,u])=>{c[h]&&(c[h].value.isColor?c[h].value.set(u):c[h].value=u)}),this.grade?.apply(t,c),this._shadowDirty&&(this.gl.shadowMap.needsUpdate=!0,this._shadowDirty=!1),this.gl.info.reset(),this.composer.render(),this.lastInfo={calls:this.gl.info.render.calls,triangles:this.gl.info.render.triangles},this.ctx2d.drawImage(this.glCanvas,0,0,this.width,this.height)}};ia();var ym="sapporo",Mm={sapporo:()=>Promise.resolve().then(()=>(b_(),S_)),sendai:()=>Promise.resolve().then(()=>(lv(),av)),tokyo:()=>Promise.resolve().then(()=>(yv(),vv))},Mv=()=>Object.keys(Mm);async function Sv(s){let t=null,e=s||ym;Mm[e]||(t=`\u672A\u77E5\u306E\u90FD\u5E02 "${e}" \u2192 ${ym} \u3092\u8868\u793A`,e=ym);let n=(await Mm[e]()).default;return Xx(n),{mod:n,note:t}}var Ae=(s,t,e,n)=>{let i=document.createElement(s);if(t&&(i.className=t),e!=null&&(i.textContent=e),n)for(let[r,o]of Object.entries(n))i.setAttribute(r,o);return i},pA={sapporo:{line:"\u51AC \u2014 \u96EA",lineEn:"Winter \xB7 Snow"},sendai:{line:"\u4E03\u5915 \u2014 \u590F\u306E\u5915\u65B9",lineEn:"Tanabata \xB7 Summer Dusk"},tokyo:{line:"\u51AC \u2014 \u30A4\u30EB\u30DF\u30CD\u30FC\u30B7\u30E7\u30F3",lineEn:"Winter \xB7 Illumination"}};function bv({series:s,cities:t,onPick:e,onCollection:n}){let i=document.body,r=Object.fromEntries(t.map(C=>[C.id,C])),o=null,a=Ae("section","ui select",null,{id:"select","aria-label":s.title}),l=Ae("header","sel-head");l.append(Ae("h1",null,s.title),Ae("p","sel-tag",s.tagline));let c=Ae("div","sel-cards");for(let C of t){let A=pA[C.id]??{line:"",lineEn:""},R=Ae("button",`sel-card c-${C.id}`,null,{type:"button","data-city":C.id});R.append(Ae("span","sc-no",String(C.displayOrder).padStart(2,"0")),Ae("span","sc-en",C.englishName.toUpperCase()),Ae("span","sc-ja",C.name),Ae("span","sc-line",A.line),Ae("span","sc-sub",A.lineEn)),R.addEventListener("click",()=>e(C.id)),c.appendChild(R)}a.append(l,c,Ae("p","sel-foot","Scroll to travel \u2014 \u90FD\u5E02\u3092\u9078\u3093\u3067\u59CB\u3081\u308B")),i.appendChild(a);let h=Ae("button","ui menu-btn",null,{type:"button","aria-haspopup":"true","aria-expanded":"false","aria-label":"\u90FD\u5E02\u30E1\u30CB\u30E5\u30FC"}),u=Ae("span","mb-label");h.append(u,Ae("span","mb-chev","\u25BE"));let d=Ae("nav","ui menu",null,{"aria-label":"\u90FD\u5E02\u306E\u5207\u308A\u66FF\u3048"});d.hidden=!0;for(let C of t){let A=Ae("button","mn-item",null,{type:"button","data-city":C.id});A.append(Ae("span","mn-en",C.englishName.toUpperCase()),Ae("span","mn-ja",C.name)),A.addEventListener("click",()=>{f(!1),C.id!==o&&e(C.id)}),d.appendChild(A)}let p=Ae("button","mn-item mn-all",null,{type:"button"});p.append(Ae("span","mn-en","COLLECTION"),Ae("span","mn-ja","\u90FD\u5E02\u3092\u9078\u3076")),p.addEventListener("click",()=>{f(!1),n()}),d.appendChild(p);let f=C=>{d.hidden=!C,h.setAttribute("aria-expanded",String(C))};h.addEventListener("click",C=>{C.stopPropagation(),f(d.hidden)}),document.addEventListener("click",C=>{!d.hidden&&!d.contains(C.target)&&f(!1)}),document.addEventListener("keydown",C=>{C.key==="Escape"&&f(!1)}),i.append(h,d);let x=Ae("div","ui finale"),m=Ae("button","fin-btn",null,{type:"button"}),g=Ae("span","fin-main"),_=Ae("span","fin-sub");m.append(g,_),x.appendChild(m),i.appendChild(x);let y=null;m.addEventListener("click",()=>{y===null?n():e(y)});function M(C){o=C,u.textContent=r[C].englishName.toUpperCase();for(let D of d.querySelectorAll("[data-city]"))D.classList.toggle("on",D.dataset.city===C);let A=t.findIndex(D=>D.id===C),R=t[A+1];y=R?R.id:null,R?(g.textContent=`Next \u2014 ${R.englishName.toUpperCase()}`,_.textContent=`${R.name}\u3078`):(g.textContent="JAPAN \u2014 THE CITY COLLECTION",_.textContent=`${s.tagline} \uFF0F \u90FD\u5E02\u3092\u9078\u3076`),w(0)}let b=-1;function w(C){let A=Math.max(0,Math.min(1,(C-.955)/.04));Math.abs(A-b)<.004||(b=A,x.style.opacity=A.toFixed(3),x.style.transform=`translateY(${((1-A)*8).toFixed(1)}px)`,x.classList.toggle("live",A>.6))}function v(C){document.body.classList.toggle("selecting",C),a.hidden=!C,C&&(f(!1),a.querySelector("button")?.focus?.({preventScroll:!0}))}function S(C){h.hidden=!C,x.hidden=!C,C||f(!1)}return v(!1),S(!1),{setCurrent:M,setFinale:w,showSelect:v,showPlaying:S}}ia();var Od=class{constructor(){this.el=document.createElement("pre"),this.el.id="dbg",this.el.setAttribute("aria-hidden","true"),this.el.style.cssText=["position:fixed","left:max(6px,env(safe-area-inset-left))","top:max(6px,env(safe-area-inset-top))","z-index:99","margin:0","padding:6px 8px","max-width:calc(100vw - 12px)","box-sizing:border-box","font:10px/1.35 ui-monospace,Menlo,monospace","color:#cfe","background:rgba(0,0,0,.62)","border-radius:6px","white-space:pre-wrap","word-break:break-all","pointer-events:auto","user-select:text"].join(";"),document.body.appendChild(this.el),this.frames=[],this.history=[],this.text="",this.el.addEventListener("click",()=>this.copy())}tick(t){this.frames.push(t);let e=t-1e3;for(;this.frames.length&&this.frames[0]<e;)this.frames.shift()}logTier(t,e,n){this.history.push(`${new Date().toISOString().slice(11,19)} ${t}\u2192${e} (${n})`),this.history.length>6&&this.history.shift()}fps(){let t=this.frames;if(t.length<2)return{avg:0,maxGap:0};let e=0;for(let n=1;n<t.length;n++)e=Math.max(e,t[n]-t[n-1]);return{avg:(t.length-1)*1e3/(t[t.length-1]-t[0]),maxGap:e}}update(t){let{avg:e,maxGap:n}=this.fps(),i=[`FPS ${e.toFixed(1)}  \u6700\u5927\u9593\u9694 ${n.toFixed(0)}ms  (\u76F4\u8FD11\u79D2)`,`tier ${t.tierLabel}${this.history.length?"  \u5C65\u6B74: "+this.history.join(" | "):"  \u5C65\u6B74: \u306A\u3057"}`,`canvas ${t.width}x${t.height} (${(t.width*t.height/1e6).toFixed(2)}MP)  DPR ${t.dpr}  scale ${t.scale.toFixed(3)}`,`p ${t.p.toFixed(4)}${t.target!==void 0?" \u2192\u76EE\u6A19 "+t.target.toFixed(4):""}  t ${t.t.toFixed(3)}s  layout \u7E26${(t.wPortrait*100).toFixed(0)}%`,`GL calls ${t.calls}  tris ${t.triangles}`,t.haze?`haze \xD7${t.haze.mult}${t.haze.mult===0?"(\u7121\u52B9)":""}  \u958B\u59CB ${t.haze.start}m \u5230\u9054 ${t.haze.end}m \u4E0A\u9650 ${t.haze.strength}\uFF08\u5C71 \xD7${t.haze.mountain}\uFF09 \u5F69\u5EA6\u6E1B ${t.haze.desat}`:"haze \u306A\u3057",t.grade?`grade \xD7${t.grade.cfg.mult}${t.grade.cfg.mult===0?"(\u7121\u52B9)":""}  \u30C8\u30FC\u30F3\u30DE\u30C3\u30D7 ${t.grade.tone}  \u9732\u51FA \xD7${(t.grade.now.exposure??1).toFixed(3)} (\u663C${t.grade.cfg.expDay}\u2192\u5915${t.grade.cfg.expDusk})  \u5915\u666F\u5EA6 ${(t.grade.now.dusk??0).toFixed(2)}  \u30D3\u30CD\u30C3\u30C8 ${t.grade.vig??"-"}`:"",`GPU ${t.gpu}`];this.text=i.join(`
`),this.el.textContent=this.text}async copy(){try{await navigator.clipboard.writeText(this.text),this.flash("copied")}catch{let t=document.createRange();t.selectNodeContents(this.el);let e=getSelection();e.removeAllRanges(),e.addRange(t);try{document.execCommand("copy"),this.flash("copied")}catch{this.flash("\u9078\u629E\u3057\u307E\u3057\u305F\uFF08\u624B\u52D5\u3067\u30B3\u30D4\u30FC\uFF09")}}}flash(t){let e=this.el.style.outline;this.el.style.outline="1px solid #6f6",this.el.title=t,setTimeout(()=>{this.el.style.outline=e},600)}};Kp();Ee();var mA=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),gA=(s,t,e)=>{let n=mA((e-s)/(t-s));return n*n*(3-2*n)},Fc=(s,t,e)=>s+(t-s)*e,zd={expDay:1.15,expDusk:.9,rampFrom:.25,rampTo:1,highDusk:[1.075,1,.905],shadowDusk:[.035,.03,.1],satDusk:1.075,vig:.2};function wv(s,t=zd){let e=s.get("grade"),n=e===null||e===""?1:Math.max(0,parseFloat(e)),i=(r,o)=>s.has(r)&&isFinite(parseFloat(s.get(r)))?parseFloat(s.get(r)):o;return{mult:isFinite(n)?n:1,...t,expDay:i("gradeExpDay",t.expDay),expDusk:i("gradeExpDusk",t.expDusk),vig:s.has("vig")&&isFinite(parseFloat(s.get("vig")))?parseFloat(s.get("vig")):t.vig}}var Bd=class{constructor(t){this.cfg={...zd,...t},this.now={exposure:1,dusk:0}}get enabled(){return this.cfg.mult>0}dusk(t){return gA(this.cfg.rampFrom,this.cfg.rampTo,t/7)}exposureGain(t){let e=this.cfg,n=this.dusk(t);return 1+(Fc(e.expDay,e.expDusk,n)-1)*e.mult}apply(t,e){if(!this.enabled)return;this.cfg.vig!==null&&(e.uVig.value=this.cfg.vig),this.now={vig:e.uVig.value};let n=this.dusk(t);this.now={vig:e.uVig.value,exposure:this.exposureGain(t),dusk:n};let i=n*this.cfg.mult,r=(o,a)=>o.setRGB(Fc(o.r,a[0],i),Fc(o.g,a[1],i),Fc(o.b,a[2],i));e.uHighTint&&r(e.uHighTint.value,this.cfg.highDusk),e.uShadowTint&&(this.baseShadow??(this.baseShadow=e.uShadowTint.value.clone()),e.uShadowTint.value.copy(this.baseShadow),r(e.uShadowTint.value,this.cfg.shadowDusk)),e.uSat.value=Fc(e.uSat.value,this.cfg.satDusk,i)}},Tv=s=>({[kn]:"\u306A\u3057",[Es]:"Linear",[Cs]:"Reinhard",[Rs]:"Cineon",[bi]:"ACES Filmic",[Ps]:"AgX",[Is]:"Neutral"})[s.toneMapping]??String(s.toneMapping);hm();var Fi=s=>document.getElementById(s),Ui=new URLSearchParams(location.search),xA=Ui.get("debug")==="1",_A=Ui.get("freeze")==="1",Av=matchMedia("(pointer: coarse)").matches,gn=null,ns=null,Oc=null,la=null;async function Rv(s){let t=Fi("track"),e=Fi("stage"),n=Fi("cv"),{mod:i,note:r}=await Sv(s);r&&console.warn("[scroll]",r);let o=la.cities.find(Q=>Q.id===i.meta.id);document.title=i.meta.docTitle;let{globalStart:a,duration:l}=i.timeline,c=Q=>h_(Q,l),h=new AbortController,u={signal:h.signal},d={alive:!0};gn||(gn=new xd(n,{width:320,height:568})),gn.grade=new Bd(wv(Ui,{...zd,...i.tuning.grade}));let p=await i.buildScene({renderer:gn.gl,cityMeta:o,index:o.displayOrder,total:la.cities.length,fx:{tiled:Ui.get("tiles")==="0"?!1:Ui.get("tiles")||!0,haze:Vx(Ui,{...Cc,...i.tuning.haze})}});qx(p),gn.setCity(p);let f=xA?new Od:null,x=gn.gpuString(),m={p:0,t:0,w:0,width:0,height:0,dpr:1,scale:1},g=Q=>u_.find(at=>at.id===Q),_=g((Ui.get("tier")||"").toUpperCase())||g(f_(e.clientWidth||innerWidth,e.clientHeight||innerHeight,Av)),y=()=>Ui.get("snow")==="normal"?"normal":Ui.get("snow")==="light"||cm(e.clientWidth||innerWidth,e.clientHeight||innerHeight,Av)?"light":"normal";function M(){let Q=e.clientWidth||innerWidth,at=e.clientHeight||innerHeight,Et=Math.min(devicePixelRatio||1,3),{w:xt,h:Vt,scale:ve}=d_(Q,at,Et,_.mp);gn.applyQuality({w:xt,h:Vt,samples:_.samples,dof:_.dof});let Ct=y();p.setAmbientCount(i.ambient.counts[Ct]),Object.assign(m,{width:xt,height:Vt,dpr:Et,scale:ve,aspect:Q/at,ambientMode:Ct}),m.w=am(m.aspect),p.setLayoutWeight(m.w),w=!0}function b(Q,at="manual"){let Et=g(Q);!Et||Et===_||(f?.logTier(_.id,Et.id,at),_=Et,M())}let w=!0,v=null,S=()=>c_(t.getBoundingClientRect().top,t.offsetHeight,e.offsetHeight);addEventListener("scroll",()=>{w=!0},{passive:!0,signal:h.signal});let C=0,A=null,R=!1,D=0,z=Q=>{let at=t.offsetHeight-e.offsetHeight;window.scrollTo(0,Q*at)},N=0,O=0,V=()=>{e.clientWidth===N&&e.clientHeight===O||(R||(R=!0),clearTimeout(D),D=setTimeout(()=>{d.alive&&(M(),z(C),R=!1)},160),N=e.clientWidth,O=e.clientHeight)};addEventListener("resize",V,u),addEventListener("orientationchange",V,u),M(),N=e.clientWidth,O=e.clientHeight;let G=()=>({tierLabel:`${_.id} \u4E88\u7B97${_.mp}MP MSAA${_.samples} DoF${_.dof?"\u3042\u308A":"\u306A\u3057"} ${i.ambient.name}${i.ambient.counts[m.ambientMode]}`,width:m.width,height:m.height,dpr:m.dpr,scale:m.scale,p:m.p,target:m.target,t:m.t,wPortrait:m.w,calls:gn.lastInfo.calls,triangles:gn.lastInfo.triangles,gpu:x,haze:p.haze?.cfg,grade:{cfg:gn.grade.cfg,now:gn.grade.now,vig:gn.grade.now.vig?.toFixed?.(2),tone:Tv(gn.gl)}}),rt=document.querySelector(".captions"),W=i.captions.map(Q=>{let at=document.createElement("div");at.className="cap",at.id=Q.id;let Et=document.createElement("h2");if(Et.textContent=Q.title,at.appendChild(Et),Q.sub){let xt=document.createElement("p");xt.textContent=Q.sub,at.appendChild(xt)}return rt.appendChild(at),{...Q,el:at,last:-1}}),Z=Q=>W.map(at=>lm(at.a,at.b,Q));function it(Q){for(let at of W){let Et=lm(at.a,at.b,Q);Math.abs(Et-at.last)<.004||(at.last=Et,at.el.style.opacity=Et.toFixed(3),at.el.style.transform=`translateY(${((1-Et)*8).toFixed(1)}px)`)}}let At=performance.now(),Ut=0;function q(Q){if(!d.alive||(requestAnimationFrame(q),_A))return;R||(C=v??S());let at=Math.min(.1,Math.max(0,(Q-(q.last??Q))/1e3));q.last=Q,A=v!==null||A===null?C:p_(A,C,at),m.p=A,m.target=C,m.t=c(m.p),it(m.p),ns.setFinale(m.p);let Et=v!==null?m.t:(Q-At)/1e3;gn.renderAt(m.t,Ut++,Et),f?.tick(Q),f&&Ut%6===0&&f.update(G())}return requestAnimationFrame(q),window.__scroll={state:()=>({...m}),tileStats:()=>p.tileStats??null,renderAtProgress(Q){v=Q,A=Q,m.p=Q,m.t=c(Q),it(Q),ns.setFinale(Q),gn.renderAt(m.t,0,m.t),f?.update(G())},unpin(){v=null},setTier:b,tier:()=>_.id,renderer:gn,city:p,THREE:Yt,cityModule:i,dispose(){Qp(p)},cameraAt(Q,at){let Et=am(at);return p.rig.sample(a+c(Q),Et)},pStable:()=>C,captionOpacity:Z,captionDom:()=>W.map(Q=>({id:Q.id,opacity:+getComputedStyle(Q.el).opacity,text:Q.el.textContent}))},ns.setCurrent(i.meta.id),ns.showPlaying(!0),window.__ready=!0,d.stop=()=>{d.alive=!1,h.abort(),clearTimeout(D),W.forEach(Q=>Q.el.remove()),f?.el.remove(),Qp(p),window.__ready=!1,window.__scroll=null},d.id=i.meta.id,d}var Ev=s=>{let t=Fi("loading");Fi("loadMsg").textContent=s||"\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026",t.classList.remove("hide")},vA=s=>{let t=new URL(location.href);return s?t.searchParams.set("city",s):t.searchParams.delete("city"),t},Sm=!1;async function Cv(s){if(!Sm){Sm=!0;try{if(Oc&&(Oc.stop(),Oc=null),ns.showPlaying(!1),history.replaceState(null,"",vA(s)),window.scrollTo(0,0),!s){Fi("loading").classList.add("hide"),document.title="JAPAN \u2014 THE CITY COLLECTION",ns.showSelect(!0),window.__select=!0,window.__ready=!0;return}window.__select=!1,ns.showSelect(!1);let t=la.cities.find(e=>e.id===s);Ev(`${t?t.englishName.toUpperCase():s} \u2026`),window.scrollTo(0,0),Oc=await Rv(s),window.scrollTo(0,0),Fi("loading").classList.add("hide")}catch(t){console.error(t),window.__bootError=String(t.stack||t),Ev("\u30A8\u30E9\u30FC: "+(t.message||t))}finally{Sm=!1}}}async function yA(){la=await(await fetch("metadata/cities.json")).json();let s=Mv(),t=la.cities.filter(n=>s.includes(n.id)).sort((n,i)=>n.displayOrder-i.displayOrder);ns=bv({series:la.series,cities:t,onPick:n=>Cv(n),onCollection:()=>Cv(null)});let e=Ui.get("city");e?(Oc=await Rv(e),Fi("loading").classList.add("hide")):(Fi("loading").classList.add("hide"),ns.showSelect(!0),window.__select=!0,window.__ready=!0)}yA().catch(s=>{console.error(s),window.__bootError=String(s.stack||s);let t=Fi("loadMsg");t&&(t.textContent="\u30A8\u30E9\u30FC: "+(s.message||s))});
