var T=Object.defineProperty;var M=n=>{throw TypeError(n)};var I=(n,s,a)=>s in n?T(n,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[s]=a;var D=(n,s,a)=>I(n,typeof s!="symbol"?s+"":s,a),F=(n,s,a)=>s.has(n)||M("Cannot "+a);var j=(n,s,a)=>(F(n,s,"read from private field"),a?a.call(n):s.get(n)),U=(n,s,a)=>s.has(n)?M("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(n):s.set(n,a);import{S as x,aa as z,r as E,E as q,K as L,ab as V,ac as H,R as K,B as N,ad as R,ae as k,af as G,f as J,G as Q,A as W,ag as X,ah as B}from"./dUq-t-_n.js";function Y(n){return typeof n=="string"?`'${n}'`:new Z().serialize(n)}const Z=function(){var s;class n{constructor(){U(this,s,new Map)}compare(e,t){const r=typeof e,i=typeof t;return r==="string"&&i==="string"?e.localeCompare(t):r==="number"&&i==="number"?e-t:String.prototype.localeCompare.call(this.serialize(e,!0),this.serialize(t,!0))}serialize(e,t){if(e===null)return"null";switch(typeof e){case"string":return t?e:`'${e}'`;case"bigint":return`${e}n`;case"object":return this.$object(e);case"function":return this.$function(e)}return String(e)}serializeObject(e){const t=Object.prototype.toString.call(e);if(t!=="[object Object]")return this.serializeBuiltInType(t.length<10?`unknown:${t}`:t.slice(8,-1),e);const r=e.constructor,i=r===Object||r===void 0?"":r.name;if(i!==""&&globalThis[i]===r)return this.serializeBuiltInType(i,e);if(typeof e.toJSON=="function"){const l=e.toJSON();return i+(l!==null&&typeof l=="object"?this.$object(l):`(${this.serialize(l)})`)}return this.serializeObjectEntries(i,Object.entries(e))}serializeBuiltInType(e,t){const r=this["$"+e];if(r)return r.call(this,t);if(typeof(t==null?void 0:t.entries)=="function")return this.serializeObjectEntries(e,t.entries());throw new Error(`Cannot serialize ${e}`)}serializeObjectEntries(e,t){const r=Array.from(t).sort((l,f)=>this.compare(l[0],f[0]));let i=`${e}{`;for(let l=0;l<r.length;l++){const[f,g]=r[l];i+=`${this.serialize(f,!0)}:${this.serialize(g)}`,l<r.length-1&&(i+=",")}return i+"}"}$object(e){let t=j(this,s).get(e);return t===void 0&&(j(this,s).set(e,`#${j(this,s).size}`),t=this.serializeObject(e),j(this,s).set(e,t)),t}$function(e){const t=Function.prototype.toString.call(e);return t.slice(-15)==="[native code] }"?`${e.name||""}()[native]`:`${e.name}(${e.length})${t.replace(/\s*\n\s*/g,"")}`}$Array(e){let t="[";for(let r=0;r<e.length;r++)t+=this.serialize(e[r]),r<e.length-1&&(t+=",");return t+"]"}$Date(e){try{return`Date(${e.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(e){return`ArrayBuffer[${new Uint8Array(e).join(",")}]`}$Set(e){return`Set${this.$Array(Array.from(e).sort((t,r)=>this.compare(t,r)))}`}$Map(e){return this.serializeObjectEntries("Map",e.entries())}}s=new WeakMap;for(const a of["Error","RegExp","URL"])n.prototype["$"+a]=function(e){return`${a}(${e})`};for(const a of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])n.prototype["$"+a]=function(e){return`${a}[${e.join(",")}]`};for(const a of["BigInt64Array","BigUint64Array"])n.prototype["$"+a]=function(e){return`${a}[${e.join("n,")}${e.length>0?"n":""}]`};return n}(),ee=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],te=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],ae="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",b=[];class se{constructor(){D(this,"_data",new O);D(this,"_hash",new O([...ee]));D(this,"_nDataBytes",0);D(this,"_minBufferSize",0)}finalize(s){s&&this._append(s);const a=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(a/4294967296),this._data.words[(e+64>>>9<<4)+15]=a,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}_doProcessBlock(s,a){const e=this._hash.words;let t=e[0],r=e[1],i=e[2],l=e[3],f=e[4],g=e[5],m=e[6],o=e[7];for(let h=0;h<64;h++){if(h<16)b[h]=s[a+h]|0;else{const c=b[h-15],w=(c<<25|c>>>7)^(c<<14|c>>>18)^c>>>3,y=b[h-2],P=(y<<15|y>>>17)^(y<<13|y>>>19)^y>>>10;b[h]=w+b[h-7]+P+b[h-16]}const _=f&g^~f&m,v=t&r^t&i^r&i,$=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),u=(f<<26|f>>>6)^(f<<21|f>>>11)^(f<<7|f>>>25),p=o+u+_+te[h]+b[h],d=$+v;o=m,m=g,g=f,f=l+p|0,l=i,i=r,r=t,t=p+d|0}e[0]=e[0]+t|0,e[1]=e[1]+r|0,e[2]=e[2]+i|0,e[3]=e[3]+l|0,e[4]=e[4]+f|0,e[5]=e[5]+g|0,e[6]=e[6]+m|0,e[7]=e[7]+o|0}_append(s){typeof s=="string"&&(s=O.fromUtf8(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_process(s){let a,e=this._data.sigBytes/64;s?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*16,r=Math.min(t*4,this._data.sigBytes);if(t){for(let i=0;i<t;i+=16)this._doProcessBlock(this._data.words,i);a=this._data.words.splice(0,t),this._data.sigBytes-=r}return new O(a,r)}}class O{constructor(s,a){D(this,"words");D(this,"sigBytes");s=this.words=s||[],this.sigBytes=a===void 0?s.length*4:a}static fromUtf8(s){const a=unescape(encodeURIComponent(s)),e=a.length,t=[];for(let r=0;r<e;r++)t[r>>>2]|=(a.charCodeAt(r)&255)<<24-r%4*8;return new O(t,e)}toBase64(){const s=[];for(let a=0;a<this.sigBytes;a+=3){const e=this.words[a>>>2]>>>24-a%4*8&255,t=this.words[a+1>>>2]>>>24-(a+1)%4*8&255,r=this.words[a+2>>>2]>>>24-(a+2)%4*8&255,i=e<<16|t<<8|r;for(let l=0;l<4&&a*8+l*6<this.sigBytes*8;l++)s.push(ae.charAt(i>>>6*(3-l)&63))}return s.join("")}concat(s){if(this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4),this.sigBytes%4)for(let a=0;a<s.sigBytes;a++){const e=s.words[a>>>2]>>>24-a%4*8&255;this.words[this.sigBytes+a>>>2]|=e<<24-(this.sigBytes+a)%4*8}else for(let a=0;a<s.sigBytes;a+=4)this.words[this.sigBytes+a>>>2]=s.words[a>>>2];this.sigBytes+=s.sigBytes}}function re(n){return new se().finalize(n).toBase64()}function ne(n){return re(Y(n))}const ie=n=>n==="defer"||n===!1;function oe(...n){var $;const s=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(s);let[a,e,t={}]=n;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const r=x(),i=e,l=()=>z.value,f=()=>r.isHydrating?r.payload.data[a]:r.static.data[a];t.server??(t.server=!0),t.default??(t.default=l),t.getCachedData??(t.getCachedData=f),t.lazy??(t.lazy=!1),t.immediate??(t.immediate=!0),t.deep??(t.deep=z.deep),t.dedupe??(t.dedupe="cancel");const g=t.getCachedData(a,r),m=g!=null;if(!r._asyncData[a]||!t.immediate){($=r.payload._errors)[a]??($[a]=z.errorValue);const u=t.deep?E:q;r._asyncData[a]={data:u(m?g:t.default()),pending:E(!m),error:L(r.payload._errors,a),status:E("idle"),_default:t.default}}const o={...r._asyncData[a]};delete o._default,o.refresh=o.execute=(u={})=>{if(r._asyncDataPromises[a]){if(ie(u.dedupe??t.dedupe))return r._asyncDataPromises[a];r._asyncDataPromises[a].cancelled=!0}if(u._initial||r.isHydrating&&u._initial!==!1){const d=u._initial?g:t.getCachedData(a,r);if(d!=null)return Promise.resolve(d)}o.pending.value=!0,o.status.value="pending";const p=new Promise((d,c)=>{try{d(i(r))}catch(w){c(w)}}).then(async d=>{if(p.cancelled)return r._asyncDataPromises[a];let c=d;t.transform&&(c=await t.transform(d)),t.pick&&(c=le(c,t.pick)),r.payload.data[a]=c,o.data.value=c,o.error.value=z.errorValue,o.status.value="success"}).catch(d=>{if(p.cancelled)return r._asyncDataPromises[a];o.error.value=G(d),o.data.value=J(t.default()),o.status.value="error"}).finally(()=>{p.cancelled||(o.pending.value=!1,delete r._asyncDataPromises[a])});return r._asyncDataPromises[a]=p,r._asyncDataPromises[a]},o.clear=()=>ce(r,a);const h=()=>o.refresh({_initial:!0}),_=t.server!==!1&&r.payload.serverRendered;{const u=V();if(u&&_&&t.immediate&&!u.sp&&(u.sp=[]),u&&!u._nuxtOnBeforeMountCbs){u._nuxtOnBeforeMountCbs=[];const c=u._nuxtOnBeforeMountCbs;H(()=>{c.forEach(w=>{w()}),c.splice(0,c.length)}),K(()=>c.splice(0,c.length))}_&&r.isHydrating&&(o.error.value||g!=null)?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):u&&(r.payload.serverRendered&&r.isHydrating||t.lazy)&&t.immediate?u._nuxtOnBeforeMountCbs.push(h):t.immediate&&h();const p=k();if(t.watch){const c=N(t.watch,()=>o.refresh());p&&R(c)}const d=r.hook("app:data:refresh",async c=>{(!c||c.includes(a))&&await o.refresh()});p&&R(d)}const v=Promise.resolve(r._asyncDataPromises[a]).then(()=>o);return Object.assign(v,o),v}function ce(n,s){s in n.payload.data&&(n.payload.data[s]=void 0),s in n.payload._errors&&(n.payload._errors[s]=z.errorValue),n._asyncData[s]&&(n._asyncData[s].data.value=void 0,n._asyncData[s].error.value=z.errorValue,n._asyncData[s].pending.value=!1,n._asyncData[s].status.value="idle"),s in n._asyncDataPromises&&(n._asyncDataPromises[s]&&(n._asyncDataPromises[s].cancelled=!0),n._asyncDataPromises[s]=void 0)}function le(n,s){const a={};for(const e of s)a[e]=n[e];return a}function ye(n,s,a){const[e={},t]=typeof s=="string"?[{},s]:[s,a],r=Q(()=>B(n)),i=e.key||ne([t,typeof r.value=="string"?r.value:"",...ue(e)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const l=i===t?"$f"+i:i;if(!e.baseURL&&typeof r.value=="string"&&r.value[0]==="/"&&r.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:f,lazy:g,default:m,transform:o,pick:h,watch:_,immediate:v,getCachedData:$,deep:u,dedupe:p,...d}=e,c=W({...X,...d,cache:typeof e.cache=="boolean"?void 0:e.cache}),w={server:f,lazy:g,default:m,transform:o,pick:h,immediate:v,getCachedData:$,deep:u,dedupe:p,watch:_===!1?[]:[c,r,..._||[]]};let y;return oe(l,()=>{var A;(A=y==null?void 0:y.abort)==null||A.call(y,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),y=typeof AbortController<"u"?new AbortController:{};const S=B(e.timeout);let C;return S&&(C=setTimeout(()=>y.abort(new DOMException("Request aborted due to timeout.","AbortError")),S),y.signal.onabort=()=>clearTimeout(C)),(e.$fetch||globalThis.$fetch)(r.value,{signal:y.signal,...c}).finally(()=>{clearTimeout(C)})},w)}function ue(n){var a;const s=[((a=B(n.method))==null?void 0:a.toUpperCase())||"GET",B(n.baseURL)];for(const e of[n.params||n.query]){const t=B(e);if(!t)continue;const r={};for(const[i,l]of Object.entries(t))r[B(i)]=B(l);s.push(r)}return s}export{ye as u};
