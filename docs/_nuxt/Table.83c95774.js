import{k as R,l as vt,m as wt,n as Se,q as St,s as $t,v as G,x as Ct,y as Tt,j as w,z as At,A as Q,B as Re,S as j,C as P,D as x,E as Bt,F as Ot,G as Ne,H as ue,I as kt,M as ze,J as Ve,K as He,L as Pt,N as ee,O as Ft,P as Ke,Q as It,R as _t,U as $e,T as ce,V as X,W as fe,X as Mt,Y as qe,Z as Et,$ as Ge,a0 as Dt,a1 as Lt,a2 as Ce,_ as V,a3 as te,a4 as de,a5 as $,a6 as ne,a7 as U,a8 as Ut,a9 as D,o as m,c as S,a as B,aa as pe,ab as F,ac as b,b as _,ad as I,ae as jt,af as Rt,d as We,t as L,ag as ie,ah as se,h as W,ai as Nt,aj as q,ak as zt,w as J,al as Vt}from"./entry.3bd48f92.js";const Ht=()=>null;function Kt(...e){const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);let[n,a,r={}]=e;if(typeof n!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof a!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");r.server=r.server??!0,r.default=r.default??Ht,r.lazy=r.lazy??!1,r.immediate=r.immediate??!0;const i=$t(),s=()=>i.isHydrating?i.payload.data[n]:i.static.data[n],l=()=>s()!==void 0;(!i._asyncData[n]||!r.immediate)&&(i._asyncData[n]={data:R(s()??r.default()),pending:R(!l()),error:vt(i.payload._errors,n),status:R("idle")});const o={...i._asyncData[n]};o.refresh=o.execute=(c={})=>{if(i._asyncDataPromises[n]){if(c.dedupe===!1)return i._asyncDataPromises[n];i._asyncDataPromises[n].cancelled=!0}if((c._initial||i.isHydrating&&c._initial!==!1)&&l())return s();o.pending.value=!0,o.status.value="pending";const A=new Promise((g,C)=>{try{g(a(i))}catch(T){C(T)}}).then(g=>{if(A.cancelled)return i._asyncDataPromises[n];let C=g;r.transform&&(C=r.transform(g)),r.pick&&(C=qt(C,r.pick)),o.data.value=C,o.error.value=null,o.status.value="success"}).catch(g=>{if(A.cancelled)return i._asyncDataPromises[n];o.error.value=g,o.data.value=G(r.default()),o.status.value="error"}).finally(()=>{A.cancelled||(o.pending.value=!1,i.payload.data[n]=o.data.value,o.error.value&&(i.payload._errors[n]=Ct(o.error.value)),delete i._asyncDataPromises[n])});return i._asyncDataPromises[n]=A,i._asyncDataPromises[n]};const u=()=>o.refresh({_initial:!0}),p=r.server!==!1&&i.payload.serverRendered;{const c=Tt();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const g=c._nuxtOnBeforeMountCbs;c&&(wt(()=>{g.forEach(C=>{C()}),g.splice(0,g.length)}),Se(()=>g.splice(0,g.length)))}p&&i.isHydrating&&l()?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):c&&(i.payload.serverRendered&&i.isHydrating||r.lazy)&&r.immediate?c._nuxtOnBeforeMountCbs.push(u):r.immediate&&u(),r.watch&&St(r.watch,()=>o.refresh());const A=i.hook("app:data:refresh",g=>{if(!g||g.includes(n))return o.refresh()});c&&Se(A)}const d=Promise.resolve(i._asyncDataPromises[n]).then(()=>o);return Object.assign(d,o),d}function qt(e,t){const n={};for(const a of t)n[a]=e[a];return n}const Te=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function Gt(e,t){t?t={...Te,...t}:t=Te;const n=Je(t);return n.dispatch(e),n.toString()}const Wt=Object.freeze(["prototype","__proto__","constructor"]);function Je(e){let t="",n=new Map;const a=r=>{t+=r};return{toString(){return t},getContext(){return n},dispatch(r){return e.replacer&&(r=e.replacer(r)),this[r===null?"null":typeof r](r)},object(r){if(r&&typeof r.toJSON=="function")return this.object(r.toJSON());const i=Object.prototype.toString.call(r);let s="";const l=i.length;l<10?s="unknown:["+i+"]":s=i.slice(8,l-1),s=s.toLowerCase();let o=null;if((o=n.get(r))===void 0)n.set(r,n.size);else return this.dispatch("[CIRCULAR:"+o+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(r))return a("buffer:"),a(r.toString("utf8"));if(s!=="object"&&s!=="function"&&s!=="asyncfunction")this[s]?this[s](r):e.ignoreUnknown||this.unkown(r,s);else{let u=Object.keys(r);e.unorderedObjects&&(u=u.sort());let p=[];e.respectType!==!1&&!Ae(r)&&(p=Wt),e.excludeKeys&&(u=u.filter(c=>!e.excludeKeys(c)),p=p.filter(c=>!e.excludeKeys(c))),a("object:"+(u.length+p.length)+":");const d=c=>{this.dispatch(c),a(":"),e.excludeValues||this.dispatch(r[c]),a(",")};for(const c of u)d(c);for(const c of p)d(c)}},array(r,i){if(i=i===void 0?e.unorderedArrays!==!1:i,a("array:"+r.length+":"),!i||r.length<=1){for(const o of r)this.dispatch(o);return}const s=new Map,l=r.map(o=>{const u=Je(e);u.dispatch(o);for(const[p,d]of u.getContext())s.set(p,d);return u.toString()});return n=s,l.sort(),this.array(l,!1)},date(r){return a("date:"+r.toJSON())},symbol(r){return a("symbol:"+r.toString())},unkown(r,i){if(a(i),!!r&&(a(":"),r&&typeof r.entries=="function"))return this.array(Array.from(r.entries()),!0)},error(r){return a("error:"+r.toString())},boolean(r){return a("bool:"+r)},string(r){a("string:"+r.length+":"),a(r)},function(r){a("fn:"),Ae(r)?this.dispatch("[native]"):this.dispatch(r.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(r.name)),e.respectFunctionProperties&&this.object(r)},number(r){return a("number:"+r)},xml(r){return a("xml:"+r.toString())},null(){return a("Null")},undefined(){return a("Undefined")},regexp(r){return a("regex:"+r.toString())},uint8array(r){return a("uint8array:"),this.dispatch(Array.prototype.slice.call(r))},uint8clampedarray(r){return a("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(r))},int8array(r){return a("int8array:"),this.dispatch(Array.prototype.slice.call(r))},uint16array(r){return a("uint16array:"),this.dispatch(Array.prototype.slice.call(r))},int16array(r){return a("int16array:"),this.dispatch(Array.prototype.slice.call(r))},uint32array(r){return a("uint32array:"),this.dispatch(Array.prototype.slice.call(r))},int32array(r){return a("int32array:"),this.dispatch(Array.prototype.slice.call(r))},float32array(r){return a("float32array:"),this.dispatch(Array.prototype.slice.call(r))},float64array(r){return a("float64array:"),this.dispatch(Array.prototype.slice.call(r))},arraybuffer(r){return a("arraybuffer:"),this.dispatch(new Uint8Array(r))},url(r){return a("url:"+r.toString())},map(r){a("map:");const i=[...r];return this.array(i,e.unorderedSets!==!1)},set(r){a("set:");const i=[...r];return this.array(i,e.unorderedSets!==!1)},file(r){return a("file:"),this.dispatch([r.name,r.size,r.type,r.lastModfied])},blob(){if(e.ignoreUnknown)return a("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return a("domwindow")},bigint(r){return a("bigint:"+r.toString())},process(){return a("process")},timer(){return a("timer")},pipe(){return a("pipe")},tcp(){return a("tcp")},udp(){return a("udp")},tty(){return a("tty")},statwatcher(){return a("statwatcher")},securecontext(){return a("securecontext")},connection(){return a("connection")},zlib(){return a("zlib")},context(){return a("context")},nodescript(){return a("nodescript")},httpparser(){return a("httpparser")},dataview(){return a("dataview")},signal(){return a("signal")},fsevent(){return a("fsevent")},tlswrap(){return a("tlswrap")}}}const Ze="[native code] }",Jt=Ze.length;function Ae(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-Jt)===Ze}class M{constructor(t,n){t=this.words=t||[],this.sigBytes=n===void 0?t.length*4:n}toString(t){return(t||Zt).stringify(this)}concat(t){if(this.clamp(),this.sigBytes%4)for(let n=0;n<t.sigBytes;n++){const a=t.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=a<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<t.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=t.words[n>>>2];return this.sigBytes+=t.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new M([...this.words])}}const Zt={stringify(e){const t=[];for(let n=0;n<e.sigBytes;n++){const a=e.words[n>>>2]>>>24-n%4*8&255;t.push((a>>>4).toString(16),(a&15).toString(16))}return t.join("")}},Xt={stringify(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[];for(let a=0;a<e.sigBytes;a+=3){const r=e.words[a>>>2]>>>24-a%4*8&255,i=e.words[a+1>>>2]>>>24-(a+1)%4*8&255,s=e.words[a+2>>>2]>>>24-(a+2)%4*8&255,l=r<<16|i<<8|s;for(let o=0;o<4&&a*8+o*6<e.sigBytes*8;o++)n.push(t.charAt(l>>>6*(3-o)&63))}return n.join("")}},Yt={parse(e){const t=e.length,n=[];for(let a=0;a<t;a++)n[a>>>2]|=(e.charCodeAt(a)&255)<<24-a%4*8;return new M(n,t)}},Qt={parse(e){return Yt.parse(unescape(encodeURIComponent(e)))}};class xt{constructor(){this._data=new M,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new M,this._nDataBytes=0}_append(t){typeof t=="string"&&(t=Qt.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes}_doProcessBlock(t,n){}_process(t){let n,a=this._data.sigBytes/(this.blockSize*4);t?a=Math.ceil(a):a=Math.max((a|0)-this._minBufferSize,0);const r=a*this.blockSize,i=Math.min(r*4,this._data.sigBytes);if(r){for(let s=0;s<r;s+=this.blockSize)this._doProcessBlock(this._data.words,s);n=this._data.words.splice(0,r),this._data.sigBytes-=i}return new M(n,i)}}class en extends xt{update(t){return this._append(t),this._process(),this}finalize(t){t&&this._append(t)}}const Be=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],tn=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],E=[];class nn extends en{constructor(){super(...arguments),this._hash=new M([...Be])}reset(){super.reset(),this._hash=new M([...Be])}_doProcessBlock(t,n){const a=this._hash.words;let r=a[0],i=a[1],s=a[2],l=a[3],o=a[4],u=a[5],p=a[6],d=a[7];for(let c=0;c<64;c++){if(c<16)E[c]=t[n+c]|0;else{const v=E[c-15],k=(v<<25|v>>>7)^(v<<14|v>>>18)^v>>>3,O=E[c-2],bt=(O<<15|O>>>17)^(O<<13|O>>>19)^O>>>10;E[c]=k+E[c-7]+bt+E[c-16]}const A=o&u^~o&p,g=r&i^r&s^i&s,C=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),T=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),f=d+T+A+tn[c]+E[c],y=C+g;d=p,p=u,u=o,o=l+f|0,l=s,s=i,i=r,r=f+y|0}a[0]=a[0]+r|0,a[1]=a[1]+i|0,a[2]=a[2]+s|0,a[3]=a[3]+l|0,a[4]=a[4]+o|0,a[5]=a[5]+u|0,a[6]=a[6]+p|0,a[7]=a[7]+d|0}finalize(t){super.finalize(t);const n=this._nDataBytes*8,a=this._data.sigBytes*8;return this._data.words[a>>>5]|=128<<24-a%32,this._data.words[(a+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(a+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function rn(e){return new nn().finalize(e).toString(Xt)}function an(e,t={}){const n=typeof e=="string"?e:Gt(e,t);return rn(n).slice(0,10)}function sn(e,t,n){const[a={},r]=typeof t=="string"?[{},t]:[t,n],i=w(()=>{let k=e;return typeof k=="function"&&(k=k()),G(k)}),s=a.key||an([r,G(a.baseURL),typeof i.value=="string"?i.value:"",G(a.params||a.query)]);if(!s||typeof s!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+s);if(!e)throw new Error("[nuxt] [useFetch] request is missing.");const l=s===r?"$f"+s:s;if(!a.baseURL&&typeof i.value=="string"&&i.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:o,lazy:u,default:p,transform:d,pick:c,watch:A,immediate:g,...C}=a,T=At({...C,cache:typeof a.cache=="boolean"?void 0:a.cache}),f={server:o,lazy:u,default:p,transform:d,pick:c,immediate:g,watch:A===!1?[]:[T,i,...A||[]]};let y;return Kt(l,()=>{var O;return(O=y==null?void 0:y.abort)==null||O.call(y),y=typeof AbortController<"u"?new AbortController:{},typeof i.value=="string"&&i.value.startsWith("/"),(a.$fetch||globalThis.$fetch)(i.value,{signal:y.signal,...T})},f)}var on="[object Symbol]";function z(e){return typeof e=="symbol"||Q(e)&&Re(e)==on}function N(e,t){for(var n=-1,a=e==null?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r}var ln=1/0,Oe=j?j.prototype:void 0,ke=Oe?Oe.toString:void 0;function Xe(e){if(typeof e=="string")return e;if(P(e))return N(e,Xe)+"";if(z(e))return ke?ke.call(e):"";var t=e+"";return t=="0"&&1/e==-ln?"-0":t}function ge(e){return e}var Pe=Object.create,un=function(){function e(){}return function(t){if(!x(t))return{};if(Pe)return Pe(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const cn=un;function fn(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function dn(e,t){var n=-1,a=e.length;for(t||(t=Array(a));++n<a;)t[n]=e[n];return t}var pn=800,gn=16,hn=Date.now;function yn(e){var t=0,n=0;return function(){var a=hn(),r=gn-(a-n);if(n=a,r>0){if(++t>=pn)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function mn(e){return function(){return e}}var bn=function(){try{var e=Bt(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Y=bn;var vn=Y?function(e,t){return Y(e,"toString",{configurable:!0,enumerable:!1,value:mn(t),writable:!0})}:ge;const wn=vn;var Sn=yn(wn);const $n=Sn;function Cn(e,t){for(var n=-1,a=e==null?0:e.length;++n<a&&t(e[n],n,e)!==!1;);return e}function Ye(e,t,n){t=="__proto__"&&Y?Y(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Tn=Object.prototype,An=Tn.hasOwnProperty;function Qe(e,t,n){var a=e[t];(!(An.call(e,t)&&Ot(a,n))||n===void 0&&!(t in e))&&Ye(e,t,n)}function H(e,t,n,a){var r=!n;n||(n={});for(var i=-1,s=t.length;++i<s;){var l=t[i],o=a?a(n[l],e[l],l,n,e):void 0;o===void 0&&(o=e[l]),r?Ye(n,l,o):Qe(n,l,o)}return n}var Fe=Math.max;function Bn(e,t,n){return t=Fe(t===void 0?e.length-1:t,0),function(){for(var a=arguments,r=-1,i=Fe(a.length-t,0),s=Array(i);++r<i;)s[r]=a[t+r];r=-1;for(var l=Array(t+1);++r<t;)l[r]=a[r];return l[t]=n(s),fn(e,this,l)}}function On(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var kn=Object.prototype,Pn=kn.hasOwnProperty;function Fn(e){if(!x(e))return On(e);var t=Ne(e),n=[];for(var a in e)a=="constructor"&&(t||!Pn.call(e,a))||n.push(a);return n}function he(e){return ue(e)?kt(e,!0):Fn(e)}var In=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_n=/^\w*$/;function ye(e,t){if(P(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||z(e)?!0:_n.test(e)||!In.test(e)||t!=null&&e in Object(t)}var Mn="Expected a function";function me(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Mn);var n=function(){var a=arguments,r=t?t.apply(this,a):a[0],i=n.cache;if(i.has(r))return i.get(r);var s=e.apply(this,a);return n.cache=i.set(r,s)||i,s};return n.cache=new(me.Cache||ze),n}me.Cache=ze;var En=500;function Dn(e){var t=me(e,function(a){return n.size===En&&n.clear(),a}),n=t.cache;return t}var Ln=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Un=/\\(\\)?/g,jn=Dn(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Ln,function(n,a,r,i){t.push(r?i.replace(Un,"$1"):a||n)}),t});const Rn=jn;function be(e){return e==null?"":Xe(e)}function re(e,t){return P(e)?e:ye(e,t)?[e]:Rn(be(e))}var Nn=1/0;function K(e){if(typeof e=="string"||z(e))return e;var t=e+"";return t=="0"&&1/e==-Nn?"-0":t}function ae(e,t){t=re(t,e);for(var n=0,a=t.length;e!=null&&n<a;)e=e[K(t[n++])];return n&&n==a?e:void 0}function zn(e,t,n){var a=e==null?void 0:ae(e,t);return a===void 0?n:a}var Ie=j?j.isConcatSpreadable:void 0;function Vn(e){return P(e)||Ve(e)||!!(Ie&&e&&e[Ie])}function xe(e,t,n,a,r){var i=-1,s=e.length;for(n||(n=Vn),r||(r=[]);++i<s;){var l=e[i];t>0&&n(l)?t>1?xe(l,t-1,n,a,r):He(r,l):a||(r[r.length]=l)}return r}function Hn(e){var t=e==null?0:e.length;return t?xe(e,1):[]}function Kn(e){return $n(Bn(e,void 0,Hn),e+"")}var qn=Pt(Object.getPrototypeOf,Object);const ve=qn;var Gn="[object Object]",Wn=Function.prototype,Jn=Object.prototype,et=Wn.toString,Zn=Jn.hasOwnProperty,Xn=et.call(Object);function Yn(e){if(!Q(e)||Re(e)!=Gn)return!1;var t=ve(e);if(t===null)return!0;var n=Zn.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&et.call(n)==Xn}function tt(e,t,n){var a=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(r);++a<r;)i[a]=e[a+t];return i}function Qn(e,t,n){var a=e.length;return n=n===void 0?a:n,!t&&n>=a?e:tt(e,t,n)}var xn="\\ud800-\\udfff",er="\\u0300-\\u036f",tr="\\ufe20-\\ufe2f",nr="\\u20d0-\\u20ff",rr=er+tr+nr,ar="\\ufe0e\\ufe0f",ir="\\u200d",sr=RegExp("["+ir+xn+rr+ar+"]");function nt(e){return sr.test(e)}function or(e){return e.split("")}var rt="\\ud800-\\udfff",lr="\\u0300-\\u036f",ur="\\ufe20-\\ufe2f",cr="\\u20d0-\\u20ff",fr=lr+ur+cr,dr="\\ufe0e\\ufe0f",pr="["+rt+"]",oe="["+fr+"]",le="\\ud83c[\\udffb-\\udfff]",gr="(?:"+oe+"|"+le+")",at="[^"+rt+"]",it="(?:\\ud83c[\\udde6-\\uddff]){2}",st="[\\ud800-\\udbff][\\udc00-\\udfff]",hr="\\u200d",ot=gr+"?",lt="["+dr+"]?",yr="(?:"+hr+"(?:"+[at,it,st].join("|")+")"+lt+ot+")*",mr=lt+ot+yr,br="(?:"+[at+oe+"?",oe,it,st,pr].join("|")+")",vr=RegExp(le+"(?="+le+")|"+br+mr,"g");function wr(e){return e.match(vr)||[]}function Sr(e){return nt(e)?wr(e):or(e)}function $r(e){return function(t){t=be(t);var n=nt(t)?Sr(t):void 0,a=n?n[0]:t.charAt(0),r=n?Qn(n,1).join(""):t.slice(1);return a[e]()+r}}var Cr=$r("toUpperCase");const Tr=Cr;function Ar(e){return Tr(be(e).toLowerCase())}function Br(e,t){return e&&H(t,ee(t),e)}function Or(e,t){return e&&H(t,he(t),e)}var ut=typeof exports=="object"&&exports&&!exports.nodeType&&exports,_e=ut&&typeof module=="object"&&module&&!module.nodeType&&module,kr=_e&&_e.exports===ut,Me=kr?Ft.Buffer:void 0,Ee=Me?Me.allocUnsafe:void 0;function Pr(e,t){if(t)return e.slice();var n=e.length,a=Ee?Ee(n):new e.constructor(n);return e.copy(a),a}function Fr(e,t){return H(e,Ke(e),t)}var Ir=Object.getOwnPropertySymbols,_r=Ir?function(e){for(var t=[];e;)He(t,Ke(e)),e=ve(e);return t}:It;const ct=_r;function Mr(e,t){return H(e,ct(e),t)}function ft(e){return _t(e,he,ct)}var Er=Object.prototype,Dr=Er.hasOwnProperty;function Lr(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&Dr.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function we(e){var t=new e.constructor(e.byteLength);return new $e(t).set(new $e(e)),t}function Ur(e,t){var n=t?we(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var jr=/\w*$/;function Rr(e){var t=new e.constructor(e.source,jr.exec(e));return t.lastIndex=e.lastIndex,t}var De=j?j.prototype:void 0,Le=De?De.valueOf:void 0;function Nr(e){return Le?Object(Le.call(e)):{}}function zr(e,t){var n=t?we(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var Vr="[object Boolean]",Hr="[object Date]",Kr="[object Map]",qr="[object Number]",Gr="[object RegExp]",Wr="[object Set]",Jr="[object String]",Zr="[object Symbol]",Xr="[object ArrayBuffer]",Yr="[object DataView]",Qr="[object Float32Array]",xr="[object Float64Array]",ea="[object Int8Array]",ta="[object Int16Array]",na="[object Int32Array]",ra="[object Uint8Array]",aa="[object Uint8ClampedArray]",ia="[object Uint16Array]",sa="[object Uint32Array]";function oa(e,t,n){var a=e.constructor;switch(t){case Xr:return we(e);case Vr:case Hr:return new a(+e);case Yr:return Ur(e,n);case Qr:case xr:case ea:case ta:case na:case ra:case aa:case ia:case sa:return zr(e,n);case Kr:return new a;case qr:case Jr:return new a(e);case Gr:return Rr(e);case Wr:return new a;case Zr:return Nr(e)}}function la(e){return typeof e.constructor=="function"&&!Ne(e)?cn(ve(e)):{}}var ua="[object Map]";function ca(e){return Q(e)&&ce(e)==ua}var Ue=X&&X.isMap,fa=Ue?fe(Ue):ca;const da=fa;var pa="[object Set]";function ga(e){return Q(e)&&ce(e)==pa}var je=X&&X.isSet,ha=je?fe(je):ga;const ya=ha;var ma=1,ba=2,va=4,dt="[object Arguments]",wa="[object Array]",Sa="[object Boolean]",$a="[object Date]",Ca="[object Error]",pt="[object Function]",Ta="[object GeneratorFunction]",Aa="[object Map]",Ba="[object Number]",gt="[object Object]",Oa="[object RegExp]",ka="[object Set]",Pa="[object String]",Fa="[object Symbol]",Ia="[object WeakMap]",_a="[object ArrayBuffer]",Ma="[object DataView]",Ea="[object Float32Array]",Da="[object Float64Array]",La="[object Int8Array]",Ua="[object Int16Array]",ja="[object Int32Array]",Ra="[object Uint8Array]",Na="[object Uint8ClampedArray]",za="[object Uint16Array]",Va="[object Uint32Array]",h={};h[dt]=h[wa]=h[_a]=h[Ma]=h[Sa]=h[$a]=h[Ea]=h[Da]=h[La]=h[Ua]=h[ja]=h[Aa]=h[Ba]=h[gt]=h[Oa]=h[ka]=h[Pa]=h[Fa]=h[Ra]=h[Na]=h[za]=h[Va]=!0;h[Ca]=h[pt]=h[Ia]=!1;function Z(e,t,n,a,r,i){var s,l=t&ma,o=t&ba,u=t&va;if(n&&(s=r?n(e,a,r,i):n(e)),s!==void 0)return s;if(!x(e))return e;var p=P(e);if(p){if(s=Lr(e),!l)return dn(e,s)}else{var d=ce(e),c=d==pt||d==Ta;if(Mt(e))return Pr(e,l);if(d==gt||d==dt||c&&!r){if(s=o||c?{}:la(e),!l)return o?Mr(e,Or(s,e)):Fr(e,Br(s,e))}else{if(!h[d])return r?e:{};s=oa(e,d,l)}}i||(i=new qe);var A=i.get(e);if(A)return A;i.set(e,s),ya(e)?e.forEach(function(T){s.add(Z(T,t,n,T,e,i))}):da(e)&&e.forEach(function(T,f){s.set(f,Z(T,t,n,f,e,i))});var g=u?o?ft:Et:o?he:ee,C=p?void 0:g(e);return Cn(C||e,function(T,f){C&&(f=T,T=e[f]),Qe(s,f,Z(T,t,n,f,e,i))}),s}var Ha=1,Ka=2;function qa(e,t,n,a){var r=n.length,i=r,s=!a;if(e==null)return!i;for(e=Object(e);r--;){var l=n[r];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++r<i;){l=n[r];var o=l[0],u=e[o],p=l[1];if(s&&l[2]){if(u===void 0&&!(o in e))return!1}else{var d=new qe;if(a)var c=a(u,p,o,e,t,d);if(!(c===void 0?Ge(p,u,Ha|Ka,a,d):c))return!1}}return!0}function ht(e){return e===e&&!x(e)}function Ga(e){for(var t=ee(e),n=t.length;n--;){var a=t[n],r=e[a];t[n]=[a,r,ht(r)]}return t}function yt(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function Wa(e){var t=Ga(e);return t.length==1&&t[0][2]?yt(t[0][0],t[0][1]):function(n){return n===e||qa(n,e,t)}}function Ja(e,t){return e!=null&&t in Object(e)}function Za(e,t,n){t=re(t,e);for(var a=-1,r=t.length,i=!1;++a<r;){var s=K(t[a]);if(!(i=e!=null&&n(e,s)))break;e=e[s]}return i||++a!=r?i:(r=e==null?0:e.length,!!r&&Dt(r)&&Lt(s,r)&&(P(e)||Ve(e)))}function Xa(e,t){return e!=null&&Za(e,t,Ja)}var Ya=1,Qa=2;function xa(e,t){return ye(e)&&ht(t)?yt(K(e),t):function(n){var a=zn(n,e);return a===void 0&&a===t?Xa(n,e):Ge(t,a,Ya|Qa)}}function ei(e){return function(t){return t==null?void 0:t[e]}}function ti(e){return function(t){return ae(t,e)}}function ni(e){return ye(e)?ei(K(e)):ti(e)}function ri(e){return typeof e=="function"?e:e==null?ge:typeof e=="object"?P(e)?xa(e[0],e[1]):Wa(e):ni(e)}function ai(e){return function(t,n,a){for(var r=-1,i=Object(t),s=a(t),l=s.length;l--;){var o=s[e?l:++r];if(n(i[o],o,i)===!1)break}return t}}var ii=ai();const si=ii;function oi(e,t){return e&&si(e,t,ee)}function li(e,t){return function(n,a){if(n==null)return n;if(!ue(n))return e(n,a);for(var r=n.length,i=t?r:-1,s=Object(n);(t?i--:++i<r)&&a(s[i],i,s)!==!1;);return n}}var ui=li(oi);const ci=ui;function fi(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}function di(e,t){var n=-1,a=ue(e)?Array(e.length):[];return ci(e,function(r,i,s){a[++n]=t(r,i,s)}),a}function pi(e,t){return t.length<2?e:ae(e,tt(t,0,-1))}function gi(e,t){return t=re(t,e),e=pi(e,t),e==null||delete e[K(fi(t))]}function hi(e){return Yn(e)?void 0:e}var yi=1,mi=2,bi=4,vi=Kn(function(e,t){var n={};if(e==null)return n;var a=!1;t=N(t,function(i){return i=re(i,e),a||(a=i.length>1),i}),H(e,ft(e),n),a&&(n=Z(n,yi|mi|bi,hi));for(var r=t.length;r--;)gi(n,t[r]);return n});const wi=vi;function Si(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}function $i(e,t){if(e!==t){var n=e!==void 0,a=e===null,r=e===e,i=z(e),s=t!==void 0,l=t===null,o=t===t,u=z(t);if(!l&&!u&&!i&&e>t||i&&s&&o&&!l&&!u||a&&s&&o||!n&&o||!r)return 1;if(!a&&!i&&!u&&e<t||u&&n&&r&&!a&&!i||l&&n&&r||!s&&r||!o)return-1}return 0}function Ci(e,t,n){for(var a=-1,r=e.criteria,i=t.criteria,s=r.length,l=n.length;++a<s;){var o=$i(r[a],i[a]);if(o){if(a>=l)return o;var u=n[a];return o*(u=="desc"?-1:1)}}return e.index-t.index}function Ti(e,t,n){t.length?t=N(t,function(i){return P(i)?function(s){return ae(s,i.length===1?i[0]:i)}:i}):t=[ge];var a=-1;t=N(t,fe(ri));var r=di(e,function(i,s,l){var o=N(t,function(u){return u(i)});return{criteria:o,index:++a,value:i}});return Si(r,function(i,s){return Ci(i,s,n)})}function Ai(e,t,n,a){return e==null?[]:(P(t)||(t=t==null?[]:[t]),n=a?void 0:n,P(n)||(n=n==null?[]:[n]),Ti(e,t,n))}const mt=()=>{const e=Ce("form-events",void 0),t=Ce("form-path",void 0);return{emitFormBlur:()=>{e&&t&&e.emit({type:"blur",path:t})}}},Bi=te({components:{UIcon:de},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>$.ui.input.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>$.ui.input.default.size,validator(e){return Object.keys($.ui.input.size).includes(e)}},color:{type:String,default:()=>$.ui.input.default.color,validator(e){return[...$.ui.colors,...Object.keys($.ui.input.color)].includes(e)}},variant:{type:String,default:()=>$.ui.input.default.variant,validator(e){return[...Object.keys($.ui.input.variant),...Object.values($.ui.input.color).flatMap(t=>Object.keys(t))].includes(e)}},ui:{type:Object,default:()=>$.ui.input}},emits:["update:modelValue","blur"],setup(e,{emit:t,slots:n}){const a=ne(),r=w(()=>U({},e.ui,a.ui.input)),{emitFormBlur:i}=mt(),s=R(null),l=()=>{var v;e.autofocus&&((v=s.value)==null||v.focus())},o=v=>{t("update:modelValue",v.target.value)},u=v=>{i(),t("blur",v)};Ut(()=>{setTimeout(()=>{l()},100)});const p=w(()=>{var k,O;const v=((O=(k=r.value.color)==null?void 0:k[e.color])==null?void 0:O[e.variant])||r.value.variant[e.variant];return D(r.value.base,r.value.rounded,r.value.placeholder,r.value.size[e.size],e.padded?r.value.padding[e.size]:"p-0",v==null?void 0:v.replaceAll("{color}",e.color),(d.value||n.leading)&&r.value.leading.padding[e.size],(c.value||n.trailing)&&r.value.trailing.padding[e.size])}),d=w(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),c=w(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),A=w(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),g=w(()=>e.loading&&!d.value?e.loadingIcon:e.trailingIcon||e.icon),C=w(()=>D(r.value.icon.leading.wrapper,r.value.icon.leading.pointer,r.value.icon.leading.padding[e.size])),T=w(()=>D(r.value.icon.base,a.ui.colors.includes(e.color)&&r.value.icon.color.replaceAll("{color}",e.color),r.value.icon.size[e.size],e.loading&&"animate-spin")),f=w(()=>D(r.value.icon.trailing.wrapper,r.value.icon.trailing.pointer,r.value.icon.trailing.padding[e.size])),y=w(()=>D(r.value.icon.base,a.ui.colors.includes(e.color)&&r.value.icon.color.replaceAll("{color}",e.color),r.value.icon.size[e.size],e.loading&&!d.value&&"animate-spin"));return{ui:r,input:s,isLeading:d,isTrailing:c,inputClass:p,leadingIconName:A,leadingIconClass:T,leadingWrapperIconClass:C,trailingIconName:g,trailingIconClass:y,trailingWrapperIconClass:f,onInput:o,onBlur:u}}}),Oi=["id","name","value","type","required","placeholder","disabled"];function ki(e,t,n,a,r,i){const s=de;return m(),S("div",{class:b(e.ui.wrapper)},[B("input",pe({id:e.name,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled||e.loading,class:["form-input",e.inputClass]},e.$attrs,{onInput:t[0]||(t[0]=(...l)=>e.onInput&&e.onInput(...l)),onBlur:t[1]||(t[1]=(...l)=>e.onBlur&&e.onBlur(...l))}),null,16,Oi),F(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(m(),S("span",{key:0,class:b(e.leadingWrapperIconClass)},[F(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[_(s,{name:e.leadingIconName,class:b(e.leadingIconClass)},null,8,["name","class"])])],2)):I("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(m(),S("span",{key:1,class:b(e.trailingWrapperIconClass)},[F(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[_(s,{name:e.trailingIconName,class:b(e.trailingIconClass)},null,8,["name","class"])])],2)):I("",!0)],2)}const Pi=V(Bi,[["render",ki]]),Fi=te({inheritAttrs:!1,props:{value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>$.ui.checkbox.default.color,validator(e){return $.ui.colors.includes(e)}},ui:{type:Object,default:()=>$.ui.checkbox}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=ne(),a=w(()=>U({},e.ui,n.ui.checkbox)),{emitFormBlur:r}=mt(),i=w({get(){return e.modelValue},set(o){t("update:modelValue",o)}}),s=o=>{t("change",o),r()},l=w(()=>D(a.value.base,a.value.rounded,a.value.background,a.value.border,a.value.ring.replaceAll("{color}",e.color),a.value.color.replaceAll("{color}",e.color)));return{ui:a,toggle:i,inputClass:l,onChange:s}}}),Ii={class:"flex items-center h-5"},_i=["id","name","required","value","disabled","checked","indeterminate"],Mi={key:0,class:"ms-3 text-sm"},Ei=["for"];function Di(e,t,n,a,r,i){return m(),S("div",{class:b(e.ui.wrapper)},[B("div",Ii,[jt(B("input",pe({id:e.name,"onUpdate:modelValue":t[0]||(t[0]=s=>e.toggle=s),name:e.name,required:e.required,value:e.value,disabled:e.disabled,checked:e.checked,indeterminate:e.indeterminate,type:"checkbox",class:["form-checkbox",e.inputClass]},e.$attrs,{onChange:t[1]||(t[1]=(...s)=>e.onChange&&e.onChange(...s))}),null,16,_i),[[Rt,e.toggle]])]),e.label||e.$slots.label?(m(),S("div",Mi,[B("label",{for:e.name,class:b(e.ui.label)},[F(e.$slots,"label",{},()=>[We(L(e.label),1)]),e.required?(m(),S("span",{key:0,class:b(e.ui.required)},"*",2)):I("",!0)],10,Ei),e.help?(m(),S("p",{key:0,class:b(e.ui.help)},L(e.help),3)):I("",!0)])):I("",!0)],2)}const Li=V(Fi,[["render",Di]]);function Ui(e,t){return e===t}const ji=te({props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>Ui},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortButton:{type:Object,default:()=>$.ui.table.default.sortButton},sortAscIcon:{type:String,default:()=>$.ui.table.default.sortAscIcon},sortDescIcon:{type:String,default:()=>$.ui.table.default.sortDescIcon},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>$.ui.table.default.loadingState},emptyState:{type:Object,default:()=>$.ui.table.default.emptyState},ui:{type:Object,default:()=>$.ui.table}},emits:["update:modelValue"],setup(e,{emit:t,attrs:n}){const a=ne(),r=w(()=>U({},e.ui,a.ui.table)),i=w(()=>e.columns??Object.keys(wi(e.rows[0]??{},["click"])).map(f=>({key:f,label:Ar(f),sortable:!1}))),s=R(U({},e.sort,{column:null,direction:"asc"})),l=w(()=>{var v;if(!((v=s.value)!=null&&v.column))return e.rows;const{column:f,direction:y}=s.value;return Ai(e.rows,f,y)}),o=w({get(){return e.modelValue},set(f){t("update:modelValue",f)}}),u=w(()=>o.value&&o.value.length>0&&o.value.length<e.rows.length),p=w(()=>({...r.value.default.emptyState,...e.emptyState}));function d(f,y){if(typeof e.by=="string"){const v=e.by;return(f==null?void 0:f[v])===(y==null?void 0:y[v])}return e.by(f,y)}function c(f){return e.modelValue?o.value.some(y=>d(q(y),q(f))):!1}function A(f){if(s.value.column===f.key){const y=!f.direction||f.direction==="asc"?"desc":"asc";s.value.direction===y?s.value=U({},e.sort,{column:null,direction:"asc"}):s.value.direction=s.value.direction==="asc"?"desc":"asc"}else s.value={column:f.key,direction:f.direction||"asc"}}function g(f){n.onSelect&&n.onSelect(f)}function C(){e.rows.forEach(f=>{o.value.some(y=>d(q(y),q(f)))||g(f)})}function T(f){f.target.checked?C():o.value=[]}return{ui:r,sort:s,columns:i,rows:l,selected:o,indeterminate:u,emptyState:p,isSelected:c,onSort:A,onSelect:g,onChange:T}}}),Ri={key:0,scope:"col",class:"ps-4"},Ni={key:1},zi={key:0},Vi=["colspan"],Hi={key:1},Ki=["colspan"],qi=["onClick"],Gi={key:0,class:"ps-4"};function Wi(e,t,n,a,r,i){const s=Li,l=zt,o=de;return m(),S("div",{class:b(e.ui.wrapper)},[B("table",{class:b([e.ui.base,e.ui.divide])},[B("thead",{class:b(e.ui.thead)},[B("tr",{class:b(e.ui.tr.base)},[e.modelValue?(m(),S("th",Ri,[_(s,{checked:e.indeterminate||e.selected.length===e.rows.length,indeterminate:e.indeterminate,onChange:e.onChange},null,8,["checked","indeterminate","onChange"])])):I("",!0),(m(!0),S(ie,null,se(e.columns,(u,p)=>(m(),S("th",{key:p,scope:"col",class:b([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,u.class])},[F(e.$slots,`${u.key}-header`,{column:u,sort:e.sort,onSort:e.onSort},()=>[u.sortable?(m(),W(l,pe({key:0},{...e.ui.default.sortButton,...e.sortButton},{icon:!e.sort.column||e.sort.column!==u.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:u[e.columnAttribute],onClick:d=>e.onSort(u)}),null,16,["icon","label","onClick"])):(m(),S("span",Ni,L(u[e.columnAttribute]),1))])],2))),128))],2)],2),B("tbody",{class:b(e.ui.tbody)},[e.loadingState&&e.loading?(m(),S("tr",zi,[B("td",{colspan:e.columns.length+(e.modelValue?1:0)},[F(e.$slots,"loading-state",{},()=>[B("div",{class:b(e.ui.loadingState.wrapper)},[e.loadingState.icon?(m(),W(o,{key:0,name:e.loadingState.icon,class:b(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):I("",!0),B("p",{class:b(e.ui.loadingState.label)},L(e.loadingState.label),3)],2)])],8,Vi)])):e.emptyState&&!e.rows.length?(m(),S("tr",Hi,[B("td",{colspan:e.columns.length+(e.modelValue?1:0)},[F(e.$slots,"empty-state",{},()=>[B("div",{class:b(e.ui.emptyState.wrapper)},[e.emptyState.icon?(m(),W(o,{key:0,name:e.emptyState.icon,class:b(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):I("",!0),B("p",{class:b(e.ui.emptyState.label)},L(e.emptyState.label),3)],2)])],8,Ki)])):(m(!0),S(ie,{key:2},se(e.rows,(u,p)=>(m(),S("tr",{key:p,class:b([e.ui.tr.base,e.isSelected(u)&&e.ui.tr.selected,e.$attrs.onSelect&&e.ui.tr.active]),onClick:()=>e.onSelect(u)},[e.modelValue?(m(),S("td",Gi,[_(s,{modelValue:e.selected,"onUpdate:modelValue":t[0]||(t[0]=d=>e.selected=d),value:u,onClick:t[1]||(t[1]=Nt(()=>{},["stop"]))},null,8,["modelValue","value"])])):I("",!0),(m(!0),S(ie,null,se(e.columns,(d,c)=>(m(),S("td",{key:c,class:b([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size])},[F(e.$slots,`${d.key}-data`,{column:d,row:u,index:p},()=>[We(L(u[d.key]),1)])],2))),128))],10,qi))),128))],2)],2)],2)}const Ji=V(ji,[["render",Wi]]),Zi=te({props:{as:{type:String,default:"div"},ui:{type:Object,default:()=>$.ui.container}},setup(e){const t=ne();return{ui:w(()=>U({},e.ui,t.ui.container))}}});function Xi(e,t,n,a,r,i){return m(),W(Vt(e.as),{class:b([e.ui.base,e.ui.padding,e.ui.constrained])},{default:J(()=>[F(e.$slots,"default")]),_:3},8,["class"])}const Yi=V(Zi,[["render",Xi]]),Qi={props:{filter:{type:String,default:"dimension"}},data(){return{data:[],error:null,pending:!0,columns:[],dim:"",cat:"",filteredData:[],placeHolderText:""}},async created(){this.setColumns(),await this.fetchData(),this.filterTable(),this.placeHolderText=`Filter ${this.filter}s`},methods:{filterTable(){const e=this.dim.toLowerCase(),t=this.cat.toLowerCase(),n=(a,r)=>!r||r&&a.toLowerCase().includes(r);this.filteredData=this.data.filter(({title:a,category:r})=>n(r,t)&&n(a,e))},setColumns(){const e=[{key:"category",label:"Category",sortable:!0},{key:"title",label:"Title",sortable:!0},{key:"description",label:"Description",sortable:!0},{key:"population",label:"Population",sortable:!0}];this.columns=e},async fetchData(){const e="https://storage.googleapis.com/dp6-public/ga4_dimensions_and_metrics.json?v=2",{data:t,pending:n,error:a}=await sn(e,"$IZhDXXlJ2q");this.pending=n,this.error=a,this.data=t._rawValue.filter(({type:r})=>r===this.filter).map(({title:r,description:i,population:s,extraction_date:l,type:o,category:u})=>{let p=[...r.links,...i.links,...s.links];return{title:r.text,description:i.text,population:s.text,extraction_date:l,type:o,category:u,links:p}})}},watch:{dim:function(){this.filterTable()},cat:function(){this.filterTable()}}},xi={class:"flex"},es=["innerHTML"],ts=["innerHTML"];function ns(e,t,n,a,r,i){const s=Pi,l=Ji,o=Yi;return m(),S("div",null,[B("div",xi,[_(s,{modelValue:r.cat,"onUpdate:modelValue":t[0]||(t[0]=u=>r.cat=u),placeholder:"Filter categories"},null,8,["modelValue"]),_(s,{modelValue:r.dim,"onUpdate:modelValue":t[1]||(t[1]=u=>r.dim=u),placeholder:r.placeHolderText},null,8,["modelValue","placeholder"])]),_(o,null,{default:J(()=>[_(l,{class:"table-auto",columns:r.columns,rows:r.filteredData},{"description-data":J(({row:u})=>[B("p",{class:"whitespace-pre-line",innerHTML:u.description},null,8,es)]),"population-data":J(({row:u})=>[B("p",{class:"whitespace-pre-line",innerHTML:u.population},null,8,ts)]),_:1},8,["columns","rows"])]),_:1})])}const as=V(Qi,[["render",ns]]);export{as as _};