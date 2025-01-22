import{S as T,ab as x,r as O,I as j,M as K,ac as L,O as V,E as $,ad as R,ae as q,f as A,aa as I,af as W,z as J,ag as B,D as G,ah as Q}from"./CIc66A5n.js";const E=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function X(r,a){a?a={...E,...a}:a=E;const s=H(a);return s.dispatch(r),s.toString()}const Y=Object.freeze(["prototype","__proto__","constructor"]);function H(r){let a="",s=new Map;const t=e=>{a+=e};return{toString(){return a},getContext(){return s},dispatch(e){return r.replacer&&(e=r.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const n=Object.prototype.toString.call(e);let i="";const h=n.length;h<10?i="unknown:["+n+"]":i=n.slice(8,h-1),i=i.toLowerCase();let u=null;if((u=s.get(e))===void 0)s.set(e,s.size);else return this.dispatch("[CIRCULAR:"+u+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](e):r.ignoreUnknown||this.unkown(e,i);else{let f=Object.keys(e);r.unorderedObjects&&(f=f.sort());let y=[];r.respectType!==!1&&!U(e)&&(y=Y),r.excludeKeys&&(f=f.filter(c=>!r.excludeKeys(c)),y=y.filter(c=>!r.excludeKeys(c))),t("object:"+(f.length+y.length)+":");const o=c=>{this.dispatch(c),t(":"),r.excludeValues||this.dispatch(e[c]),t(",")};for(const c of f)o(c);for(const c of y)o(c)}},array(e,n){if(n=n===void 0?r.unorderedArrays!==!1:n,t("array:"+e.length+":"),!n||e.length<=1){for(const u of e)this.dispatch(u);return}const i=new Map,h=e.map(u=>{const f=H(r);f.dispatch(u);for(const[y,o]of f.getContext())i.set(y,o);return f.toString()});return s=i,h.sort(),this.array(h,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,n){if(t(n),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),U(e)?this.dispatch("[native]"):this.dispatch(e.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),r.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const n=[...e];return this.array(n,r.unorderedSets!==!1)},set(e){t("set:");const n=[...e];return this.array(n,r.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(r.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const N="[native code] }",Z=N.length;function U(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-Z)===N}var ee=Object.defineProperty,te=(r,a,s)=>a in r?ee(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s,P=(r,a,s)=>(te(r,typeof a!="symbol"?a+"":a,s),s);class _{constructor(a,s){P(this,"words"),P(this,"sigBytes"),a=this.words=a||[],this.sigBytes=s===void 0?a.length*4:s}toString(a){return(a||re).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let s=0;s<a.sigBytes;s++){const t=a.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=t<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<a.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=a.words[s>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new _([...this.words])}}const re={stringify(r){const a=[];for(let s=0;s<r.sigBytes;s++){const t=r.words[s>>>2]>>>24-s%4*8&255;a.push((t>>>4).toString(16),(t&15).toString(16))}return a.join("")}},se={stringify(r){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let t=0;t<r.sigBytes;t+=3){const e=r.words[t>>>2]>>>24-t%4*8&255,n=r.words[t+1>>>2]>>>24-(t+1)%4*8&255,i=r.words[t+2>>>2]>>>24-(t+2)%4*8&255,h=e<<16|n<<8|i;for(let u=0;u<4&&t*8+u*6<r.sigBytes*8;u++)s.push(a.charAt(h>>>6*(3-u)&63))}return s.join("")}},ae={parse(r){const a=r.length,s=[];for(let t=0;t<a;t++)s[t>>>2]|=(r.charCodeAt(t)&255)<<24-t%4*8;return new _(s,a)}},ne={parse(r){return ae.parse(unescape(encodeURIComponent(r)))}};class ie{constructor(){P(this,"_data",new _),P(this,"_nDataBytes",0),P(this,"_minBufferSize",0),P(this,"blockSize",512/32)}reset(){this._data=new _,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=ne.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,s){}_process(a){let s,t=this._data.sigBytes/(this.blockSize*4);a?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,n=Math.min(e*4,this._data.sigBytes);if(e){for(let i=0;i<e;i+=this.blockSize)this._doProcessBlock(this._data.words,i);s=this._data.words.splice(0,e),this._data.sigBytes-=n}return new _(s,n)}}class oe extends ie{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}var ce=Object.defineProperty,ue=(r,a,s)=>a in r?ce(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s,le=(r,a,s)=>(ue(r,a+"",s),s);const k=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],fe=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],D=[];class de extends oe{constructor(){super(...arguments),le(this,"_hash",new _([...k]))}reset(){super.reset(),this._hash=new _([...k])}_doProcessBlock(a,s){const t=this._hash.words;let e=t[0],n=t[1],i=t[2],h=t[3],u=t[4],f=t[5],y=t[6],o=t[7];for(let c=0;c<64;c++){if(c<16)D[c]=a[s+c]|0;else{const l=D[c-15],b=(l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3,g=D[c-2],z=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;D[c]=b+D[c-7]+z+D[c-16]}const w=u&f^~u&y,v=e&n^e&i^n&i,S=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),d=(u<<26|u>>>6)^(u<<21|u>>>11)^(u<<7|u>>>25),m=o+d+w+fe[c]+D[c],p=S+v;o=y,y=f,f=u,u=h+m|0,h=i,i=n,n=e,e=m+p|0}t[0]=t[0]+e|0,t[1]=t[1]+n|0,t[2]=t[2]+i|0,t[3]=t[3]+h|0,t[4]=t[4]+u|0,t[5]=t[5]+f|0,t[6]=t[6]+y|0,t[7]=t[7]+o|0}finalize(a){super.finalize(a);const s=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(t+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function he(r){return new de().finalize(r).toString(se)}function ye(r,a={}){const s=typeof r=="string"?r:X(r,a);return he(s).slice(0,10)}const pe=r=>r==="defer"||r===!1;function ge(...r){var S;const a=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(a);let[s,t,e={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=T(),i=t,h=()=>x.value,u=()=>n.isHydrating?n.payload.data[s]:n.static.data[s];e.server=e.server??!0,e.default=e.default??h,e.getCachedData=e.getCachedData??u,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??x.deep,e.dedupe=e.dedupe??"cancel";const f=e.getCachedData(s,n),y=f!=null;if(!n._asyncData[s]||!e.immediate){(S=n.payload._errors)[s]??(S[s]=x.errorValue);const d=e.deep?O:j;n._asyncData[s]={data:d(y?f:e.default()),pending:O(!y),error:K(n.payload._errors,s),status:O("idle"),_default:e.default}}const o={...n._asyncData[s]};delete o._default,o.refresh=o.execute=(d={})=>{if(n._asyncDataPromises[s]){if(pe(d.dedupe??e.dedupe))return n._asyncDataPromises[s];n._asyncDataPromises[s].cancelled=!0}if(d._initial||n.isHydrating&&d._initial!==!1){const p=d._initial?f:e.getCachedData(s,n);if(p!=null)return Promise.resolve(p)}o.pending.value=!0,o.status.value="pending";const m=new Promise((p,l)=>{try{p(i(n))}catch(b){l(b)}}).then(async p=>{if(m.cancelled)return n._asyncDataPromises[s];let l=p;e.transform&&(l=await e.transform(p)),e.pick&&(l=_e(l,e.pick)),n.payload.data[s]=l,o.data.value=l,o.error.value=x.errorValue,o.status.value="success"}).catch(p=>{if(m.cancelled)return n._asyncDataPromises[s];o.error.value=q(p),o.data.value=A(e.default()),o.status.value="error"}).finally(()=>{m.cancelled||(o.pending.value=!1,delete n._asyncDataPromises[s])});return n._asyncDataPromises[s]=m,n._asyncDataPromises[s]},o.clear=()=>me(n,s);const c=()=>o.refresh({_initial:!0}),w=e.server!==!1&&n.payload.serverRendered;{const d=I();if(d&&w&&e.immediate&&!d.sp&&(d.sp=[]),d&&!d._nuxtOnBeforeMountCbs){d._nuxtOnBeforeMountCbs=[];const l=d._nuxtOnBeforeMountCbs;L(()=>{l.forEach(b=>{b()}),l.splice(0,l.length)}),V(()=>l.splice(0,l.length))}w&&n.isHydrating&&(o.error.value||f!=null)?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):d&&(n.payload.serverRendered&&n.isHydrating||e.lazy)&&e.immediate?d._nuxtOnBeforeMountCbs.push(c):e.immediate&&c();const m=W();if(e.watch){const l=$(e.watch,()=>o.refresh());m&&R(l)}const p=n.hook("app:data:refresh",async l=>{(!l||l.includes(s))&&await o.refresh()});m&&R(p)}const v=Promise.resolve(n._asyncDataPromises[s]).then(()=>o);return Object.assign(v,o),v}function me(r,a){a in r.payload.data&&(r.payload.data[a]=void 0),a in r.payload._errors&&(r.payload._errors[a]=x.errorValue),r._asyncData[a]&&(r._asyncData[a].data.value=void 0,r._asyncData[a].error.value=x.errorValue,r._asyncData[a].pending.value=!1,r._asyncData[a].status.value="idle"),a in r._asyncDataPromises&&(r._asyncDataPromises[a]&&(r._asyncDataPromises[a].cancelled=!0),r._asyncDataPromises[a]=void 0)}function _e(r,a){const s={};for(const t of a)s[t]=r[t];return s}function Be(r,a,s){const[t={},e]=typeof a=="string"?[{},a]:[a,s],n=J(()=>B(r)),i=t.key||ye([e,typeof n.value=="string"?n.value:"",...we(t)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const h=i===e?"$f"+i:i;if(!t.baseURL&&typeof n.value=="string"&&n.value[0]==="/"&&n.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:u,lazy:f,default:y,transform:o,pick:c,watch:w,immediate:v,getCachedData:S,deep:d,dedupe:m,...p}=t,l=G({...Q,...p,cache:typeof t.cache=="boolean"?void 0:t.cache}),b={server:u,lazy:f,default:y,transform:o,pick:c,immediate:v,getCachedData:S,deep:d,dedupe:m,watch:w===!1?[]:[l,n,...w||[]]};let g;return ge(h,()=>{var M;(M=g==null?void 0:g.abort)==null||M.call(g,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),g=typeof AbortController<"u"?new AbortController:{};const F=B(t.timeout);let C;return F&&(C=setTimeout(()=>g.abort(new DOMException("Request aborted due to timeout.","AbortError")),F),g.signal.onabort=()=>clearTimeout(C)),(t.$fetch||globalThis.$fetch)(n.value,{signal:g.signal,...l}).finally(()=>{clearTimeout(C)})},b)}function we(r){var s;const a=[((s=B(r.method))==null?void 0:s.toUpperCase())||"GET",B(r.baseURL)];for(const t of[r.params||r.query]){const e=B(t);if(!e)continue;const n={};for(const[i,h]of Object.entries(e))n[B(i)]=B(h);a.push(n)}return a}export{Be as u};
