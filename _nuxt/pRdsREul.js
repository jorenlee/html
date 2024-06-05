import{_ as ms}from"./DweFUO9q.js";import{_ as gs}from"./CWD8_FWf.js";import{u as bs,g as vs,r as _,q as ys,B as ws,c as N,b as Fe,a as i,f as h,n as fe,d as z,k as Es,i as U,v as Ce,j,y as xs,F as He,s as $e,l as K,Q as Ss,t as k,z as mt,x as Nt,o as P,A as gt,p as Ts,e as Cs}from"./52sUhDZz.js";import{X as As}from"./lvCLui-C.js";/* empty css        */import{h as Rs}from"./C5S46NFB.js";import{_ as Ae}from"./vUEbHlag.js";import{_ as Is}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const Ds=[{title:"BUSINESS-RELATED COURSES",description:"(Commerce, Accounting, Business Administration)",registrarsAssign:"CBA",department:"CBA"},{title:"ARTS & SCIENCES",description:"(AB Philosophy, Ab English, Social Work)",registrarsAssign:"CAS / CON",department:"CAS"},{title:"ENGINEERING & ARCHITECTURE",description:"(BSCE, Bachelor of Science in Architecture)",registrarsAssign:"CCSEA",department:"CCSEA"},{title:"COMPUTER STUDIES",description:"(BSIT, BSCS)",registrarsAssign:"CCSEA",department:"CCSEA"},{title:"TOURISM & HOSPITALITY MANAGEMENT",description:"(BSTM, BSHM)",registrarsAssign:"CTHM / SGS",department:"CTHM"},{title:"NURSING",description:"(BS NURSING)",registrarsAssign:"CAS / CON",department:"CON"},{title:"CRIMINAL JUSTICE EDUCATION",description:"(BS CRIM)",registrarsAssign:"CAS / CON",department:"CAS"},{title:"EDUCATION",description:"(BSED, BEED)",registrarsAssign:"CTE",department:"CTE"},{title:"GRADUATE STUDIES",description:"",registrarsAssign:"CTHM / SGS",department:"SGS"}],ks={providerLists:Ds},Os=[{category:"A.M",time:["09:00 - 09:20","09:20 - 09:40","09:40 - 10:00","10:00 - 10:20","10:20 - 10:40","10:40 - 11:00","11:00 - 11:20","11:20 - 11:40","11:40 - 12:00"]}],Ns={timeSelection:Os};var bt={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=function(t){const e=[];let s=0;for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);r<128?e[s++]=r:r<2048?(e[s++]=r>>6|192,e[s++]=r&63|128):(r&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++n)&1023),e[s++]=r>>18|240,e[s++]=r>>12&63|128,e[s++]=r>>6&63|128,e[s++]=r&63|128):(e[s++]=r>>12|224,e[s++]=r>>6&63|128,e[s++]=r&63|128)}return e},Us=function(t){const e=[];let s=0,n=0;for(;s<t.length;){const r=t[s++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[s++];e[n++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[s++],a=t[s++],c=t[s++],l=((r&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const o=t[s++],a=t[s++];e[n++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Pt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<t.length;r+=3){const o=t[r],a=r+1<t.length,c=a?t[r+1]:0,l=r+2<t.length,u=l?t[r+2]:0,m=o>>2,w=(o&3)<<4|c>>4;let p=(c&15)<<2|u>>6,v=u&63;l||(v=64,a||(p=64)),n.push(s[m],s[w],s[p],s[v])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ut(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Us(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const s=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<t.length;){const o=s[t.charAt(r++)],c=r<t.length?s[t.charAt(r)]:0;++r;const u=r<t.length?s[t.charAt(r)]:64;++r;const w=r<t.length?s[t.charAt(r)]:64;if(++r,o==null||c==null||u==null||w==null)throw new Ps;const p=o<<2|c>>4;if(n.push(p),u!==64){const v=c<<4&240|u>>2;if(n.push(v),w!==64){const E=u<<6&192|w;n.push(E)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ps extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bs=function(t){const e=Ut(t);return Pt.encodeByteArray(e,!0)},De=function(t){return Bs(t).replace(/\./g,"")},Ms=function(t){try{return Pt.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=()=>Ls().__FIREBASE_DEFAULTS__,Hs=()=>{if(typeof process>"u"||typeof bt>"u")return;const t=bt.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$s=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ms(t[1]);return e&&JSON.parse(e)},st=()=>{try{return Fs()||Hs()||$s()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},js=t=>{var e,s;return(s=(e=st())===null||e===void 0?void 0:e.emulatorHosts)===null||s===void 0?void 0:s[t]},zs=t=>{const e=js(t);if(!e)return;const s=e.lastIndexOf(":");if(s<=0||s+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(s+1),10);return e[0]==="["?[e.substring(1,s-1),n]:[e.substring(0,s),n]},Bt=()=>{var t;return(t=st())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}wrapCallback(e){return(s,n)=>{s?this.reject(s):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(s):e(s,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const s={alg:"none",type:"JWT"},n=e||"demo-project",r=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[De(JSON.stringify(s)),De(JSON.stringify(a)),""].join(".")}function Gs(){var t;const e=(t=st())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function Ws(){try{return typeof indexedDB=="object"}catch{return!1}}function Xs(){return new Promise((t,e)=>{try{let s=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),s||self.indexedDB.deleteDatabase(n),t(!0)},r.onupgradeneeded=()=>{s=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(s){e(s)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="FirebaseError";class le extends Error{constructor(e,s,n){super(s),this.code=e,this.customData=n,this.name=Ks,Object.setPrototypeOf(this,le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mt.prototype.create)}}class Mt{constructor(e,s,n){this.service=e,this.serviceName=s,this.errors=n}create(e,...s){const n=s[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?Js(o,n):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new le(r,c,n)}}function Js(t,e){return t.replace(Ys,(s,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const Ys=/\{\$([^}]+)}/g;function Ke(t,e){if(t===e)return!0;const s=Object.keys(t),n=Object.keys(e);for(const r of s){if(!n.includes(r))return!1;const o=t[r],a=e[r];if(vt(o)&&vt(a)){if(!Ke(o,a))return!1}else if(o!==a)return!1}for(const r of n)if(!s.includes(r))return!1;return!0}function vt(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t){return t&&t._delegate?t._delegate:t}class ge{constructor(e,s,n){this.name=e,this.instanceFactory=s,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,s){this.name=e,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const s=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(s)){const n=new Vs;if(this.instancesDeferred.set(s,n),this.isInitialized(s)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:s});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(e){var s;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(s=e==null?void 0:e.optional)!==null&&s!==void 0?s:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(en(e))try{this.getOrInitializeService({instanceIdentifier:ee})}catch{}for(const[s,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(s);try{const o=this.getOrInitializeService({instanceIdentifier:r});n.resolve(o)}catch{}}}}clearInstance(e=ee){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...e.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ee){return this.instances.has(e)}getOptions(e=ee){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:s={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:s});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);n===c&&a.resolve(r)}return r}onInit(e,s){var n;const r=this.normalizeInstanceIdentifier(s),o=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const a=this.instances.get(r);return a&&e(a,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,s){const n=this.onInitCallbacks.get(s);if(n)for(const r of n)try{r(e,s)}catch{}}getOrInitializeService({instanceIdentifier:e,options:s={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Qs(e),options:s}),this.instances.set(e,n),this.instancesOptions.set(e,s),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ee){return this.component?this.component.multipleInstances?e:ee:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qs(t){return t===ee?void 0:t}function en(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const s=this.getProvider(e.name);if(s.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);s.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const s=new Zs(e,this);return this.providers.set(e,s),s}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(T||(T={}));const sn={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},nn=T.INFO,rn={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},on=(t,e,...s)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),r=rn[e];if(r)console[r](`[${n}]  ${t.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class an{constructor(e){this.name=e,this._logLevel=nn,this._logHandler=on,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in T))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...e),this._logHandler(this,T.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...e),this._logHandler(this,T.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,T.INFO,...e),this._logHandler(this,T.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,T.WARN,...e),this._logHandler(this,T.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...e),this._logHandler(this,T.ERROR,...e)}}const ln=(t,e)=>e.some(s=>t instanceof s);let yt,wt;function cn(){return yt||(yt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function un(){return wt||(wt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lt=new WeakMap,Je=new WeakMap,Ft=new WeakMap,je=new WeakMap,nt=new WeakMap;function dn(t){const e=new Promise((s,n)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{s(Y(t.result)),r()},a=()=>{n(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(s=>{s instanceof IDBCursor&&Lt.set(s,t)}).catch(()=>{}),nt.set(e,t),e}function hn(t){if(Je.has(t))return;const e=new Promise((s,n)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{s(),r()},a=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});Je.set(t,e)}let Ye={get(t,e,s){if(t instanceof IDBTransaction){if(e==="done")return Je.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ft.get(t);if(e==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return Y(t[e])},set(t,e,s){return t[e]=s,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fn(t){Ye=t(Ye)}function pn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...s){const n=t.call(ze(this),e,...s);return Ft.set(n,e.sort?e.sort():[e]),Y(n)}:un().includes(t)?function(...e){return t.apply(ze(this),e),Y(Lt.get(this))}:function(...e){return Y(t.apply(ze(this),e))}}function _n(t){return typeof t=="function"?pn(t):(t instanceof IDBTransaction&&hn(t),ln(t,cn())?new Proxy(t,Ye):t)}function Y(t){if(t instanceof IDBRequest)return dn(t);if(je.has(t))return je.get(t);const e=_n(t);return e!==t&&(je.set(t,e),nt.set(e,t)),e}const ze=t=>nt.get(t);function mn(t,e,{blocked:s,upgrade:n,blocking:r,terminated:o}={}){const a=indexedDB.open(t,e),c=Y(a);return n&&a.addEventListener("upgradeneeded",l=>{n(Y(a.result),l.oldVersion,l.newVersion,Y(a.transaction),l)}),s&&a.addEventListener("blocked",l=>s(l.oldVersion,l.newVersion,l)),c.then(l=>{o&&l.addEventListener("close",()=>o()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const gn=["get","getKey","getAll","getAllKeys","count"],bn=["put","add","delete","clear"],Ve=new Map;function Et(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ve.get(e))return Ve.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,r=bn.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!(r||gn.includes(s)))return;const o=async function(a,...c){const l=this.transaction(a,r?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(c.shift())),(await Promise.all([u[s](...c),r&&l.done]))[0]};return Ve.set(e,o),o}fn(t=>({...t,get:(e,s,n)=>Et(e,s)||t.get(e,s,n),has:(e,s)=>!!Et(e,s)||t.has(e,s)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(yn(s)){const n=s.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(s=>s).join(" ")}}function yn(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ze="@firebase/app",xt="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=new an("@firebase/app"),wn="@firebase/app-compat",En="@firebase/analytics-compat",xn="@firebase/analytics",Sn="@firebase/app-check-compat",Tn="@firebase/app-check",Cn="@firebase/auth",An="@firebase/auth-compat",Rn="@firebase/database",In="@firebase/database-compat",Dn="@firebase/functions",kn="@firebase/functions-compat",On="@firebase/installations",Nn="@firebase/installations-compat",Un="@firebase/messaging",Pn="@firebase/messaging-compat",Bn="@firebase/performance",Mn="@firebase/performance-compat",Ln="@firebase/remote-config",Fn="@firebase/remote-config-compat",Hn="@firebase/storage",$n="@firebase/storage-compat",jn="@firebase/firestore",zn="@firebase/firestore-compat",Vn="firebase",qn="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="[DEFAULT]",Gn={[Ze]:"fire-core",[wn]:"fire-core-compat",[xn]:"fire-analytics",[En]:"fire-analytics-compat",[Tn]:"fire-app-check",[Sn]:"fire-app-check-compat",[Cn]:"fire-auth",[An]:"fire-auth-compat",[Rn]:"fire-rtdb",[In]:"fire-rtdb-compat",[Dn]:"fire-fn",[kn]:"fire-fn-compat",[On]:"fire-iid",[Nn]:"fire-iid-compat",[Un]:"fire-fcm",[Pn]:"fire-fcm-compat",[Bn]:"fire-perf",[Mn]:"fire-perf-compat",[Ln]:"fire-rc",[Fn]:"fire-rc-compat",[Hn]:"fire-gcs",[$n]:"fire-gcs-compat",[jn]:"fire-fst",[zn]:"fire-fst-compat","fire-js":"fire-js",[Vn]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=new Map,et=new Map;function Wn(t,e){try{t.container.addComponent(e)}catch(s){se.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,s)}}function Oe(t){const e=t.name;if(et.has(e))return se.debug(`There were multiple attempts to register component ${e}.`),!1;et.set(e,t);for(const s of ke.values())Wn(s,t);return!0}function Xn(t,e){const s=t.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Z=new Mt("app","Firebase",Kn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,s,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},s),this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Z.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=qn;function Zn(t,e={}){let s=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Qe,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Z.create("bad-app-name",{appName:String(r)});if(s||(s=Bt()),!s)throw Z.create("no-options");const o=ke.get(r);if(o){if(Ke(s,o.options)&&Ke(n,o.config))return o;throw Z.create("duplicate-app",{appName:r})}const a=new tn(r);for(const l of et.values())a.addComponent(l);const c=new Jn(s,n,a);return ke.set(r,c),c}function Qn(t=Qe){const e=ke.get(t);if(!e&&t===Qe&&Bt())return Zn();if(!e)throw Z.create("no-app",{appName:t});return e}function _e(t,e,s){var n;let r=(n=Gn[t])!==null&&n!==void 0?n:t;s&&(r+=`-${s}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${r}" with version "${e}":`];o&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),se.warn(c.join(" "));return}Oe(new ge(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="firebase-heartbeat-database",tr=1,be="firebase-heartbeat-store";let qe=null;function Ht(){return qe||(qe=mn(er,tr,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(be)}}}).catch(t=>{throw Z.create("idb-open",{originalErrorMessage:t.message})})),qe}async function sr(t){try{return await(await Ht()).transaction(be).objectStore(be).get($t(t))}catch(e){if(e instanceof le)se.warn(e.message);else{const s=Z.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});se.warn(s.message)}}}async function St(t,e){try{const n=(await Ht()).transaction(be,"readwrite");await n.objectStore(be).put(e,$t(t)),await n.done}catch(s){if(s instanceof le)se.warn(s.message);else{const n=Z.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});se.warn(n.message)}}}function $t(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=1024,rr=30*24*60*60*1e3;class or{constructor(e){this.container=e,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new ar(s),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Tt();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(r=>r.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=rr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Tt(),{heartbeatsToSend:s,unsentEntries:n}=ir(this._heartbeatsCache.heartbeats),r=De(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Tt(){return new Date().toISOString().substring(0,10)}function ir(t,e=nr){const s=[];let n=t.slice();for(const r of t){const o=s.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),Ct(s)>e){o.dates.pop();break}}else if(s.push({agent:r.agent,dates:[r.date]}),Ct(s)>e){s.pop();break}n=n.slice(1)}return{heartbeatsToSend:s,unsentEntries:n}}class ar{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ws()?Xs().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sr(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var s;if(await this._canUseIndexedDBPromise){const r=await this.read();return St(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!==null&&s!==void 0?s:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var s;if(await this._canUseIndexedDBPromise){const r=await this.read();return St(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!==null&&s!==void 0?s:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ct(t){return De(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t){Oe(new ge("platform-logger",e=>new vn(e),"PRIVATE")),Oe(new ge("heartbeat",e=>new or(e),"PRIVATE")),_e(Ze,xt,t),_e(Ze,xt,"esm2017"),_e("fire-js","")}lr("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="firebasestorage.googleapis.com",zt="storageBucket",cr=2*60*1e3,ur=10*60*1e3,dr=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A extends le{constructor(e,s,n=0){super(Ge(e),`Firebase Storage: ${s} (${Ge(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,A.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ge(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var C;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(C||(C={}));function Ge(t){return"storage/"+t}function rt(){const t="An unknown error occurred, please check the error payload for server response.";return new A(C.UNKNOWN,t)}function hr(t){return new A(C.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function fr(t){return new A(C.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function pr(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new A(C.UNAUTHENTICATED,t)}function _r(){return new A(C.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function mr(t){return new A(C.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Vt(){return new A(C.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qt(){return new A(C.CANCELED,"User canceled the upload/download.")}function gr(t){return new A(C.INVALID_URL,"Invalid URL '"+t+"'.")}function br(t){return new A(C.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function vr(){return new A(C.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+zt+"' property when initializing the app?")}function Gt(){return new A(C.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function yr(){return new A(C.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function wr(){return new A(C.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Er(t){return new A(C.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function tt(t){return new A(C.INVALID_ARGUMENT,t)}function Wt(){return new A(C.APP_DELETED,"The Firebase app was deleted.")}function xr(t){return new A(C.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function me(t,e){return new A(C.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function pe(t){throw new A(C.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,s){this.bucket=e,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,s){let n;try{n=L.makeFromUrl(e,s)}catch{return new L(e,"")}if(n.path==="")return n;throw br(e)}static makeFromUrl(e,s){let n=null;const r="([A-Za-z0-9.\\-_]+)";function o(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+r+a,"i"),l={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const m="v[A-Za-z0-9_]+",w=s.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",v=new RegExp(`^https?://${w}/${m}/b/${r}/o${p}`,"i"),E={bucket:1,path:3},R=s===jt?"(?:storage.googleapis.com|storage.cloud.google.com)":s,y="([^?#]*)",I=new RegExp(`^https?://${R}/${r}/${y}`,"i"),S=[{regex:c,indices:l,postModify:o},{regex:v,indices:E,postModify:u},{regex:I,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<S.length;x++){const O=S[x],F=O.regex.exec(e);if(F){const G=F[O.indices.bucket];let V=F[O.indices.path];V||(V=""),n=new L(G,V),O.postModify(n);break}}if(n==null)throw gr(e);return n}}class Sr{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e,s){let n=1,r=null,o=null,a=!1,c=0;function l(){return c===2}let u=!1;function m(...y){u||(u=!0,e.apply(null,y))}function w(y){r=setTimeout(()=>{r=null,t(v,l())},y)}function p(){o&&clearTimeout(o)}function v(y,...I){if(u){p();return}if(y){p(),m.call(null,y,...I);return}if(l()||a){p(),m.call(null,y,...I);return}n<64&&(n*=2);let S;c===1?(c=2,S=0):S=(n+Math.random())*1e3,w(S)}let E=!1;function R(y){E||(E=!0,p(),!u&&(r!==null?(y||(c=2),clearTimeout(r),w(0)):y||(c=1)))}return w(0),o=setTimeout(()=>{a=!0,R(!0)},s),R}function Cr(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t){return t!==void 0}function Rr(t){return typeof t=="function"}function Ir(t){return typeof t=="object"&&!Array.isArray(t)}function Pe(t){return typeof t=="string"||t instanceof String}function At(t){return ot()&&t instanceof Blob}function ot(){return typeof Blob<"u"&&!Gs()}function Rt(t,e,s,n){if(n<e)throw tt(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>s)throw tt(`Invalid value for '${t}'. Expected ${s} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t,e,s){let n=e;return s==null&&(n=`https://${e}`),`${s}://${n}/v0${t}`}function Xt(t){const e=encodeURIComponent;let s="?";for(const n in t)if(t.hasOwnProperty(n)){const r=e(n)+"="+e(t[n]);s=s+r+"&"}return s=s.slice(0,-1),s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(te||(te={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,e){const s=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return s||r||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,s,n,r,o,a,c,l,u,m,w,p=!0){this.url_=e,this.method_=s,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=m,this.connectionFactory_=w,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,E)=>{this.resolve_=v,this.reject_=E,this.start_()})}start_(){const e=(n,r)=>{if(r){n(!1,new Re(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const c=o.getErrorCode()===te.NO_ERROR,l=o.getStatus();if(!c||Kt(l,this.additionalRetryCodes_)&&this.retry){const m=o.getErrorCode()===te.ABORT;n(!1,new Re(!1,null,m));return}const u=this.successCodes_.indexOf(l)!==-1;n(!0,new Re(u,o))})},s=(n,r)=>{const o=this.resolve_,a=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());Ar(l)?o(l):o()}catch(l){a(l)}else if(c!==null){const l=rt();l.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,l)):a(l)}else if(r.canceled){const l=this.appDelete_?Wt():qt();a(l)}else{const l=Vt();a(l)}};this.canceled_?s(!1,new Re(!1,null,!0)):this.backoffId_=Tr(e,s,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Cr(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Re{constructor(e,s,n){this.wasSuccessCode=e,this.connection=s,this.canceled=!!n}}function kr(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Or(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Nr(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ur(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Pr(t,e,s,n,r,o,a=!0){const c=Xt(t.urlParams),l=t.url+c,u=Object.assign({},t.headers);return Nr(u,e),kr(u,s),Or(u,o),Ur(u,n),new Dr(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Mr(...t){const e=Br();if(e!==void 0){const s=new e;for(let n=0;n<t.length;n++)s.append(t[n]);return s.getBlob()}else{if(ot())return new Blob(t);throw new A(C.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Lr(t,e,s){return t.webkitSlice?t.webkitSlice(e,s):t.mozSlice?t.mozSlice(e,s):t.slice?t.slice(e,s):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t){if(typeof atob>"u")throw Er("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class We{constructor(e,s){this.data=e,this.contentType=s||null}}function Hr(t,e){switch(t){case q.RAW:return new We(Jt(e));case q.BASE64:case q.BASE64URL:return new We(Yt(t,e));case q.DATA_URL:return new We(jr(e),zr(e))}throw rt()}function Jt(t){const e=[];for(let s=0;s<t.length;s++){let n=t.charCodeAt(s);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(s<t.length-1&&(t.charCodeAt(s+1)&64512)===56320))e.push(239,191,189);else{const o=n,a=t.charCodeAt(++s);n=65536|(o&1023)<<10|a&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function $r(t){let e;try{e=decodeURIComponent(t)}catch{throw me(q.DATA_URL,"Malformed data URL.")}return Jt(e)}function Yt(t,e){switch(t){case q.BASE64:{const r=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(r||o)throw me(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case q.BASE64URL:{const r=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(r||o)throw me(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=Fr(e)}catch(r){throw r.message.includes("polyfill")?r:me(t,"Invalid character found")}const n=new Uint8Array(s.length);for(let r=0;r<s.length;r++)n[r]=s.charCodeAt(r);return n}class Zt{constructor(e){this.base64=!1,this.contentType=null;const s=e.match(/^data:([^,]+)?,/);if(s===null)throw me(q.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=s[1]||null;n!=null&&(this.base64=Vr(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function jr(t){const e=new Zt(t);return e.base64?Yt(q.BASE64,e.rest):$r(e.rest)}function zr(t){return new Zt(t).contentType}function Vr(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,s){let n=0,r="";At(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(s?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(s?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,s){if(At(this.data_)){const n=this.data_,r=Lr(n,e,s);return r===null?null:new J(r)}else{const n=new Uint8Array(this.data_.buffer,e,s-e);return new J(n,!0)}}static getBlob(...e){if(ot()){const s=e.map(n=>n instanceof J?n.data_:n);return new J(Mr.apply(null,s))}else{const s=e.map(a=>Pe(a)?Hr(q.RAW,a).data:a.data_);let n=0;s.forEach(a=>{n+=a.byteLength});const r=new Uint8Array(n);let o=0;return s.forEach(a=>{for(let c=0;c<a.length;c++)r[o++]=a[c]}),new J(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t){let e;try{e=JSON.parse(t)}catch{return null}return Ir(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Gr(t,e){const s=e.split("/").filter(n=>n.length>0).join("/");return t.length===0?s:t+"/"+s}function es(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t,e){return e}class B{constructor(e,s,n,r){this.server=e,this.local=s||e,this.writable=!!n,this.xform=r||Wr}}let Ie=null;function Xr(t){return!Pe(t)||t.length<2?t:es(t)}function ts(){if(Ie)return Ie;const t=[];t.push(new B("bucket")),t.push(new B("generation")),t.push(new B("metageneration")),t.push(new B("name","fullPath",!0));function e(o,a){return Xr(a)}const s=new B("name");s.xform=e,t.push(s);function n(o,a){return a!==void 0?Number(a):a}const r=new B("size");return r.xform=n,t.push(r),t.push(new B("timeCreated")),t.push(new B("updated")),t.push(new B("md5Hash",null,!0)),t.push(new B("cacheControl",null,!0)),t.push(new B("contentDisposition",null,!0)),t.push(new B("contentEncoding",null,!0)),t.push(new B("contentLanguage",null,!0)),t.push(new B("contentType",null,!0)),t.push(new B("metadata","customMetadata",!0)),Ie=t,Ie}function Kr(t,e){function s(){const n=t.bucket,r=t.fullPath,o=new L(n,r);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:s})}function Jr(t,e,s){const n={};n.type="file";const r=s.length;for(let o=0;o<r;o++){const a=s[o];n[a.local]=a.xform(n,e[a.server])}return Kr(n,t),n}function ss(t,e,s){const n=Qt(e);return n===null?null:Jr(t,n,s)}function Yr(t,e,s,n){const r=Qt(e);if(r===null||!Pe(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(u=>{const m=t.bucket,w=t.fullPath,p="/b/"+a(m)+"/o/"+a(w),v=ve(p,s,n),E=Xt({alt:"media",token:u});return v+E})[0]}function ns(t,e){const s={},n=e.length;for(let r=0;r<n;r++){const o=e[r];o.writable&&(s[o.server]=t[o.local])}return JSON.stringify(s)}class ce{constructor(e,s,n,r){this.url=e,this.method=s,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t){if(!t)throw rt()}function it(t,e){function s(n,r){const o=ss(t,r,e);return W(o!==null),o}return s}function Zr(t,e){function s(n,r){const o=ss(t,r,e);return W(o!==null),Yr(o,r,t.host,t._protocol)}return s}function ye(t){function e(s,n){let r;return s.getStatus()===401?s.getErrorText().includes("Firebase App Check token is invalid")?r=_r():r=pr():s.getStatus()===402?r=fr(t.bucket):s.getStatus()===403?r=mr(t.path):r=n,r.status=s.getStatus(),r.serverResponse=n.serverResponse,r}return e}function rs(t){const e=ye(t);function s(n,r){let o=e(n,r);return n.getStatus()===404&&(o=hr(t.path)),o.serverResponse=r.serverResponse,o}return s}function Qr(t,e,s){const n=e.fullServerUrl(),r=ve(n,t.host,t._protocol),o="GET",a=t.maxOperationRetryTime,c=new ce(r,o,it(t,s),a);return c.errorHandler=rs(e),c}function eo(t,e,s){const n=e.fullServerUrl(),r=ve(n,t.host,t._protocol),o="GET",a=t.maxOperationRetryTime,c=new ce(r,o,Zr(t,s),a);return c.errorHandler=rs(e),c}function to(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function os(t,e,s){const n=Object.assign({},s);return n.fullPath=t.path,n.size=e.size(),n.contentType||(n.contentType=to(null,e)),n}function so(t,e,s,n,r){const o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let S="";for(let x=0;x<2;x++)S=S+Math.random().toString().slice(2);return S}const l=c();a["Content-Type"]="multipart/related; boundary="+l;const u=os(e,n,r),m=ns(u,s),w="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",v=J.getBlob(w,n,p);if(v===null)throw Gt();const E={name:u.fullPath},R=ve(o,t.host,t._protocol),y="POST",I=t.maxUploadRetryTime,D=new ce(R,y,it(t,s),I);return D.urlParams=E,D.headers=a,D.body=v.uploadData(),D.errorHandler=ye(e),D}class Ne{constructor(e,s,n,r){this.current=e,this.total=s,this.finalized=!!n,this.metadata=r||null}}function at(t,e){let s=null;try{s=t.getResponseHeader("X-Goog-Upload-Status")}catch{W(!1)}return W(!!s&&(e||["active"]).indexOf(s)!==-1),s}function no(t,e,s,n,r){const o=e.bucketOnlyServerUrl(),a=os(e,n,r),c={name:a.fullPath},l=ve(o,t.host,t._protocol),u="POST",m={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${n.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},w=ns(a,s),p=t.maxUploadRetryTime;function v(R){at(R);let y;try{y=R.getResponseHeader("X-Goog-Upload-URL")}catch{W(!1)}return W(Pe(y)),y}const E=new ce(l,u,v,p);return E.urlParams=c,E.headers=m,E.body=w,E.errorHandler=ye(e),E}function ro(t,e,s,n){const r={"X-Goog-Upload-Command":"query"};function o(u){const m=at(u,["active","final"]);let w=null;try{w=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{W(!1)}w||W(!1);const p=Number(w);return W(!isNaN(p)),new Ne(p,n.size(),m==="final")}const a="POST",c=t.maxUploadRetryTime,l=new ce(s,a,o,c);return l.headers=r,l.errorHandler=ye(e),l}const It=256*1024;function oo(t,e,s,n,r,o,a,c){const l=new Ne(0,0);if(a?(l.current=a.current,l.total=a.total):(l.current=0,l.total=n.size()),n.size()!==l.total)throw yr();const u=l.total-l.current;let m=u;r>0&&(m=Math.min(m,r));const w=l.current,p=w+m;let v="";m===0?v="finalize":u===m?v="upload, finalize":v="upload";const E={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${l.current}`},R=n.slice(w,p);if(R===null)throw Gt();function y(x,O){const F=at(x,["active","final"]),G=l.current+m,V=n.size();let X;return F==="final"?X=it(e,o)(x,O):X=null,new Ne(G,V,F==="final",X)}const I="POST",D=e.maxUploadRetryTime,S=new ce(s,I,y,D);return S.headers=E,S.body=R.uploadData(),S.progressCallback=c||null,S.errorHandler=ye(t),S}const M={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Xe(t){switch(t){case"running":case"pausing":case"canceling":return M.RUNNING;case"paused":return M.PAUSED;case"success":return M.SUCCESS;case"canceled":return M.CANCELED;case"error":return M.ERROR;default:return M.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,s,n){if(Rr(e)||s!=null||n!=null)this.next=e,this.error=s??void 0,this.complete=n??void 0;else{const o=e;this.next=o.next,this.error=o.error,this.complete=o.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class ao{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=te.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=te.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=te.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,s,n,r){if(this.sent_)throw pe("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(s,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw pe("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw pe("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw pe("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw pe("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class lo extends ao{initXhr(){this.xhr_.responseType="text"}}function ae(){return new lo}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,s,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=s,this._metadata=n,this._mappings=ts(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(C.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const o=this.isExponentialBackoffExpired();if(Kt(r.status,[]))if(o)r=Vt();else{this.sleepTime=Math.max(this.sleepTime*2,dr),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(C.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,o)=>{this._resolve=r,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return s=>this._updateProgress(e+s)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([s,n])=>{switch(this._state){case"running":e(s,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,s)=>{const n=no(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ae,e,s);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((s,n)=>{const r=ro(this._ref.storage,this._ref._location,e,this._blob),o=this._ref.storage._makeRequest(r,ae,s,n);this._request=o,o.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=It*this._chunkMultiplier,s=new Ne(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((r,o)=>{let a;try{a=oo(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,s,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const c=this._ref.storage._makeRequest(a,ae,r,o,!1);this._request=c,c.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){It*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,s)=>{const n=Qr(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,ae,e,s);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,s)=>{const n=so(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ae,e,s);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const s=this._transferred;this._transferred=e,this._transferred!==s&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const s=this._state==="paused";this._state=e,s&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=qt(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Xe(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,s,n,r){const o=new io(s||void 0,n||void 0,r||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(e,s){return this._promise.then(e,s)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const s=this._observers.indexOf(e);s!==-1&&this._observers.splice(s,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(s=>{this._notifyObserver(s)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Xe(this._state)){case M.SUCCESS:ie(this._resolve.bind(null,this.snapshot))();break;case M.CANCELED:case M.ERROR:const s=this._reject;ie(s.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Xe(this._state)){case M.RUNNING:case M.PAUSED:e.next&&ie(e.next.bind(e,this.snapshot))();break;case M.SUCCESS:e.complete&&ie(e.complete.bind(e))();break;case M.CANCELED:case M.ERROR:e.error&&ie(e.error.bind(e,this._error))();break;default:e.error&&ie(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,s){this._service=e,s instanceof L?this._location=s:this._location=L.makeFromUrl(s,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,s){return new ne(e,s)}get root(){const e=new L(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return es(this._location.path)}get storage(){return this._service}get parent(){const e=qr(this._location.path);if(e===null)return null;const s=new L(this._location.bucket,e);return new ne(this._service,s)}_throwIfRoot(e){if(this._location.path==="")throw xr(e)}}function uo(t,e,s){return t._throwIfRoot("uploadBytesResumable"),new co(t,new J(e),s)}function ho(t){t._throwIfRoot("getDownloadURL");const e=eo(t.storage,t._location,ts());return t.storage.makeRequestWithTokens(e,ae).then(s=>{if(s===null)throw wr();return s})}function fo(t,e){const s=Gr(t._location.path,e),n=new L(t._location.bucket,s);return new ne(t.storage,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){return/^[A-Za-z]+:\/\//.test(t)}function _o(t,e){return new ne(t,e)}function is(t,e){if(t instanceof lt){const s=t;if(s._bucket==null)throw vr();const n=new ne(s,s._bucket);return e!=null?is(n,e):n}else return e!==void 0?fo(t,e):t}function mo(t,e){if(e&&po(e)){if(t instanceof lt)return _o(t,e);throw tt("To use ref(service, url), the first argument must be a Storage instance.")}else return is(t,e)}function Dt(t,e){const s=e==null?void 0:e[zt];return s==null?null:L.makeFromBucketSpec(s,t)}function go(t,e,s,n={}){t.host=`${e}:${s}`,t._protocol="http";const{mockUserToken:r}=n;r&&(t._overrideAuthToken=typeof r=="string"?r:qs(r,t.app.options.projectId))}class lt{constructor(e,s,n,r,o){this.app=e,this._authProvider=s,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=jt,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=cr,this._maxUploadRetryTime=ur,this._requests=new Set,r!=null?this._bucket=L.makeFromBucketSpec(r,this._host):this._bucket=Dt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=L.makeFromBucketSpec(this._url,e):this._bucket=Dt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Rt("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Rt("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const s=await e.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ne(this,e)}_makeRequest(e,s,n,r,o=!0){if(this._deleted)return new Sr(Wt());{const a=Pr(e,this._appId,n,r,s,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,s){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,s,n,r).getPromise()}}const kt="@firebase/storage",Ot="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="storage";function bo(t,e,s){return t=Ue(t),uo(t,e,s)}function vo(t){return t=Ue(t),ho(t)}function yo(t,e){return t=Ue(t),mo(t,e)}function wo(t=Qn(),e){t=Ue(t);const n=Xn(t,as).getImmediate({identifier:e}),r=zs("storage");return r&&Eo(n,...r),n}function Eo(t,e,s,n={}){go(t,e,s,n)}function xo(t,{instanceIdentifier:e}){const s=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new lt(s,n,r,e,Yn)}function So(){Oe(new ge(as,xo,"PUBLIC").setMultipleInstances(!0)),_e(kt,Ot,""),_e(kt,Ot,"esm2017")}So();const b=t=>(Ts("data-v-61b39198"),t=t(),Cs(),t),To={class:""},Co=Nt('<div class="" data-v-61b39198><div class="relative" data-v-61b39198><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg" class="align-top w-full h-auto lg:object-fill lg:block hidden" data-v-61b39198><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block" data-v-61b39198><div class="lg:pt-10 absolute top-1/2 transform -translate-y-1/2 lg:w-full" data-v-61b39198><h1 class="font-bold uppercase text-white lg:text-2xl text-lg lg:w-11/12 mx-auto" data-v-61b39198> Book Appointment </h1></div><div class="pt-2.5 pb-3 shadow-lg" data-v-61b39198><ul class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs" data-v-61b39198><li data-v-61b39198><a href="/" class="mr-1" data-v-61b39198> Home </a></li><li data-v-61b39198><i class="fas fa-caret-right mr-1" data-v-61b39198></i><a href="/university-registrar" class="mr-1" data-v-61b39198>University Registrar</a></li><li data-v-61b39198><i class="fas fa-caret-right mr-1" data-v-61b39198></i><a href="/" class="mr-1" data-v-61b39198>Book Appointment</a></li></ul></div></div></div>',1),Ao={class:"w-11/12 lg:rounded-lg mx-auto shadow-lg lg:my-10 my-5"},Ro={key:0,class:"lg:flex"},Io={class:"lg:whitespace-nowrap lg:w-3/12 w-full px-5 lasalle-green text-white pt-10 pb-5 lg:rounded-bl-lg lg:rounded-tl-lg"},Do={class:""},ko=b(()=>i("span",{class:"bg-white rounded-full lg:py-1.5 px-3 mr-3 text-green-900"},"1",-1)),Oo=b(()=>i("span",{class:"bg-white rounded-full lg:py-1.5 px-3 mr-3 text-green-900"},"2",-1)),No=b(()=>i("span",{class:"bg-white rounded-full lg:py-1.5 px-3 mr-3 text-green-900"},"3",-1)),Uo=b(()=>i("span",{class:"bg-white rounded-full lg:py-1.5 px-3 mr-3 text-green-900"},"4",-1)),Po={class:"lg:flex mx-auto gap-5 lg:px-10 px-1 lg:w-full lg:py-3 text-xs"},Bo={class:"lg:w-full my-5"},Mo=b(()=>i("div",null,[i("h1",{class:"font-bold"},"Note:"),i("ul",{class:"list-disc pl-5"},[i("li",null," Appointment DOES NOT necessarily mean we will release your document(s) on that same day. "),i("li",null," You do not need to come to LSU. We will call you on your appointment date/time. "),i("li",null," We can send your requested documents to your address through a courrier. "),i("li",null,"Duration for each Application is up to 20 Minutes.")])],-1)),Lo={class:"my-5"},Fo=b(()=>i("label",{for:"registrar",class:"block mb-2 text-xs font-bold text-gray-900 uppercase"},"Service",-1)),Ho=Nt('<option value="" disabled data-v-61b39198>Please select the type of service.</option><optgroup label="University Registrar" data-v-61b39198><option value="CAV" data-v-61b39198>CAV Application</option><option value="Good Moral" data-v-61b39198> Certificate of Good Moral Character </option><option value="Honorable" data-v-61b39198>Honorable Dismissal</option><option value="TOR" data-v-61b39198>Transcipt of Records Application</option><option value="OTHERS" data-v-61b39198>Other Certificates Application</option></optgroup><optgroup label="SAO Office" data-v-61b39198><option value="Good Moral SAO" data-v-61b39198> Certificate of Good Moral Character </option></optgroup>',3),$o=[Ho],jo={class:"lg:w-full mx-auto"},zo={class:"lg:pr-0 lg:pl-10 px-2 lg:mt-5"},Vo={class:""},qo=b(()=>i("label",{for:"registrar",class:"uppercase block ml-6 mb-3 text-xs font-bold text-gray-900"},"Provider",-1)),Go=b(()=>i("div",{class:"text-xs mt-3 mb-3 font-bold"},[i("label",{class:"",for:"PleaseSelectTheProvider"},"Please Select a Provider")],-1)),Wo={class:""},Xo=["value","onClick"],Ko={class:"flex items-center ml-5 font-bold text-green-900 -mt-5 text-sm",style:{"font-size":"9px"},for:"provider"},Jo={class:"pl-5 text-xs"},Yo={class:"justify-end flex"},Zo=b(()=>i("i",{class:"fa fa-angle-right"},null,-1)),Qo={class:"lg:flex mx-auto gap-20 lg:px-8 w-full pb-3 text-xs"},ei={class:"mx-auto gap-20 w-full"},ti={class:"lg:w-full lg:px-10 pt-2"},si={class:"lg:grid grid-cols-2 lg:gap-20"},ni={class:"pb-3"},ri=b(()=>i("h1",{class:"text-center mb-3 font-bold lasalle-green-text"}," Calendar ",-1)),oi={class:"w-fit mx-auto"},ii={class:"pb-3"},ai=b(()=>i("h1",{class:"text-center mt-5 mb-3 font-bold lasalle-green-text lg:whitespace-nowrap"}," Available Time ",-1)),li={class:"w-full"},ci={class:""},ui={class:""},di={class:"h-60 w-10/12 mx-auto px-5 py-2 mt-1 rounded-md"},hi={class:""},fi=["value"],pi=["value"],_i={class:"w-full mx-auto justify-between flex"},mi=b(()=>i("i",{class:"fa fa-angle-left"},null,-1)),gi=b(()=>i("i",{class:"fa fa-angle-right"},null,-1)),bi={class:"lg:flex mx-auto gap-20 lg:px-8 px-1 w-full py-3 text-xs"},vi={class:"mx-auto gap-20 w-full"},yi={class:"w-full"},wi={class:"lg:grid grid-cols-2 gap-5"},Ei=b(()=>i("h1",{class:"mb-3 font-bold lasalle-green-text"},"Primary Information",-1)),xi={class:"grid lg:grid-cols-3 grid-cols-1 gap-3"},Si=b(()=>i("h1",{class:"lg:mb-3 mb-2 lg:mt-0 mt-3 font-bold lasalle-green-text"}," Contact Address ",-1)),Ti={class:"gap-5"},Ci={class:"lg:grid lg:grid-cols-2 grid-cols-1 gap-3"},Ai={class:"w-full"},Ri={class:"lg:flex mt-3"},Ii={class:"flex w-full"},Di={class:"flex h-fit"},ki={key:0},Oi=b(()=>i("i",{class:"fa fa-pause","aria-hidden":"true"},null,-1)),Ni=[Oi],Ui={key:1},Pi=b(()=>i("i",{class:"fa fa-play","aria-hidden":"true"},null,-1)),Bi=[Pi],Mi={class:"w-5/12 ml-10 text-center pt-3"},Li={class:"mx-auto"},Fi={key:0,class:"w-full shadow"},Hi=["src"],$i={class:"lg:w-full mx-auto justify-between flex"},ji={key:0,class:"mb-6 py-4 px-6 bg-rose-400 text-white rounded-xl"},zi=b(()=>i("i",{class:"fa fa-angle-left"},null,-1)),Vi=b(()=>i("i",{class:"fa fa-angle-right"},null,-1)),qi={class:"lg:flex mx-auto gap-20 lg:px-8 lg:w-full pt-3 pb-3 text-xs"},Gi={class:"mx-auto gap-20 lg:w-full lasalle-green-text"},Wi={class:"lg:w-full lg:flex gap-10"},Xi={class:"lg:flex w-full border-t-2 border-gray-100 shadow-md rounded-lg"},Ki={class:"p-5 border-r lg:w-full"},Ji=b(()=>i("h1",{class:"mb-3 lasalle-green-text text-center border-b pb-3"}," Appointment ",-1)),Yi={class:""},Zi={class:"lg:flex text-xs mb-2"},Qi=b(()=>i("label",{class:"pr-2 w-3/12"},"Service",-1)),ea={class:"font-bold text-green-800 text-xs"},ta={class:"lg:flex text-xs mb-2"},sa=b(()=>i("label",{class:"pr-2 w-3/12"},"Provider",-1)),na={class:"font-bold text-green-800 text-xs"},ra={class:"lg:flex text-xs mb-2"},oa=b(()=>i("label",{class:"pr-2 w-3/12 whitespace-nowrap"},"Date",-1)),ia={class:"font-bold text-green-800 text-xs"},aa={class:"lg:flex text-xs mb-2"},la=b(()=>i("label",{class:"pr-2 w-3/12 whitespace-nowrap"},"Time",-1)),ca={class:"font-bold text-green-800 text-xs"},ua={class:"p-5 lg:w-full border-r"},da=b(()=>i("h1",{class:"mb-3 lasalle-green-text text-center border-b pb-3"}," Personal Information ",-1)),ha={class:""},fa={class:"lg:flex text-xs mb-2"},pa=b(()=>i("label",{class:"pr-2 lg:w-4/12"},"Full Name",-1)),_a={class:"font-bold text-green-800 text-xs"},ma={class:"lg:flex text-xs mb-2"},ga=b(()=>i("label",{class:"pr-2 lg:w-4/12"},"Contact Number",-1)),ba={class:"font-bold text-green-800 text-xs"},va={class:"lg:flex lg:text-xs mb-2"},ya=b(()=>i("label",{class:"pr-2 lg:w-4/12"},"Contact Email",-1)),wa={class:"font-bold text-green-800 lg:text-xs"},Ea={class:"lg:flex text-xs mb-2"},xa=b(()=>i("label",{class:"pr-2 lg:w-4/12"},"Address",-1)),Sa={class:"font-bold text-green-800 text-xs"},Ta={class:"lg:flex text-xs mb-2"},Ca=b(()=>i("label",{class:"pr-2 lg:w-4/12"},"City",-1)),Aa={class:"font-bold text-green-800 text-xs"},Ra={class:"lg:flex text-xs mb-2"},Ia=b(()=>i("label",{class:"pr-2 lg:w-4/12"},"Zipcode",-1)),Da={class:"font-bold text-green-800 text-xs"},ka={class:"lg:flex text-xs mb-2"},Oa=b(()=>i("label",{class:"pr-2 lg:w-4/12"},"Notes",-1)),Na={class:"font-bold text-green-800 text-xs"},Ua={class:"lg:w-full w-full mx-auto justify-between flex"},Pa=b(()=>i("i",{class:"fa fa-angle-left"},null,-1)),Ba=b(()=>i("button",{class:"text-green-900 text-xs border-green-900 border-2 bg-white font-bold py-2 px-4 rounded-lg mt-6 uppercase"},[i("i",{class:"fa fa-check-circle mr-2","aria-hidden":"true"}),z(" Submit Appointment ")],-1)),Ma={key:1},La=b(()=>i("p",{class:"text-green-900 p-10 text-center w-6/12 mx-auto"},[i("i",{class:"fa fa-check-circle mx-auto text-7xl mb-3 text-green-900 block","aria-hidden":"true"}),z(" Successfully submitted! Kindly check your email for more updates. You can track your appointment through this page: "),i("a",{href:"https://lsu.edu.ph/university-registrar/track-appointment-status",class:"font-bold"},"Track Appointment"),i("span",{class:"block"},"Thank you!")],-1)),Fa=[La],Ha={__name:"appointment",async setup(t){let e,s;bs();const n=vs(),r=_(ks.providerLists),o=_(Ns.timeSelection),a=_(n.mainServer),c=([e,s]=ys(()=>$fetch(a.value+"/api/schedules/list/").catch(g=>g.data)),e=await e,s(),e);let l=_(),u=_(""),m=_(""),w=_("APS"+Date.now()),p=_(),v=_(""),E=_("Jo Renlee"),R=_("Luna"),y=_("jorenleeluna24@gmail.com"),I=_("09210689089"),D=_("Philippines"),S=_("Ozamiz City"),x=_("7200"),O=_("Sample"),F=_("https://firebasestorage.googleapis.com/v0/b/public-images-cbecf.appspot.com/o/public%2F1684826293302?alt=media&token=6bd368c2-5a1b-4d13-9c83-eafccfee8fd2"),G=_(!0),V=_(!1),X=_(!1),we=_(!1),ct=_(new Date().toDateString()),ut=_("Public Users");_(y.value);let H=_([]),Q=_(),dt=_(),Be=_([]),ht=_(!0),Ee=_(!0),xe=_(!1),Se=_(!1),Te=_(!1);const ue=_(null),re=_(!0),ft=_(0);let pt=_(""),Me=_("https://firebasestorage.googleapis.com/v0/b/public-images-cbecf.appspot.com/o/public%2F1684826293302?alt=media&token=6bd368c2-5a1b-4d13-9c83-eafccfee8fd2");const _t=ws(()=>Math.round(ft.value));function ls(g){const d=wo();pt.value=g.target.files[0].lastModified;const he=yo(d,"public/"+pt.value);ue.value=bo(he,g.target.files[0]),console.log(g.target.files[0].lastModified),ue.value.on("state_changed",$=>{switch(ft.value=$.bytesTransferred/$.totalBytes*100,$.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},$=>{},()=>{vo(ue.value.snapshot.ref).then($=>{console.log("File available at",$),F.value=$,Me.value=$})}),re.value=!1}function cs(g){g.preventDefault(),re.value==!1?(ue.value.pause(),re.value=!re.value):(ue.value.resume(),re.value=!1)}let us=g=>{Be.value=[];for(let d=0;d<c.length;d++)Ae.includes(c[d].provider,g)&&Be.value.push(c[d].date)};const ds=g=>{p.value=Rs(g).format("MM-DD-YYYY"),c.filter(function(d){p.value===d.date&&(l.value=d.id,p.value=d.date,Q.value=d.time,dt.value=d.provider)})};let de=(g,d,he,$)=>{Ee.value=g,xe.value=d,Se.value=he,Te.value=$};const hs=async()=>{Q.value.length===1&&(Q.value=["-"]),Ae.pull(Q.value,v.value),await $fetch(a.value+"/api/schedules/"+l.value+"/edit/",{method:"PUT",headers:{"Content-Type":"application/json"},body:{provider:dt.value,date:p.value,time:Q.value}}).then(g=>{console.log("response",g)}).catch(g=>{if(g.response){for(const d in g.response._data)H.value.push(`${d}: ${g.response._data[d]}`);console.log(JSON.stringify(g.response))}else g.message&&(H.value.push("Something went wrong. Please try again"),console.log(JSON.stringify(g)))})},fs=()=>{H.value=[],u.value==""&&m.value==""&&w.value==""&&p.value==""&&v.value==""&&E.value==""&&R.value==""&&y.value==""&&I.value==""&&D.value==""&&S.value==""&&x.value==""&&O.value==""&&F.value==""&&G.value==""&&V.value==""&&X.value==""&&we.value==""&&H.value.push("Please enter all Fields."),H.value.length==0&&(Ee.value=!1,xe.value=!1,Se.value=!1,Te.value=!0)},ps=async()=>{await $fetch(a.value+"/api/appointments/submit-appointment-to-gmail/",{method:"POST",headers:{"Content-Type":"application/json"},body:{service:u.value,provider:m.value,referencecode:w.value,date:p.value,time:v.value,firstname:E.value,lastname:R.value,email:y.value,contactnumber:I.value,address:D.value,city:S.value,zipcode:x.value,notes:O.value,banner_image:F.value,successful_request:G.value,appointment_confirm:V.value,payment:X.value,request_delivered:we.value,updated_at:ct.value,created_by_name:ut.value,created_by_email:y.value}}).then(g=>{}).catch(g=>{console.log(g)})},_s=async()=>{console.log("submitForm"),H.value=[],u.value==""&&m.value==""&&w.value==""&&p.value==""&&v.value==""&&E.value==""&&R.value==""&&y.value==""&&I.value==""&&D.value==""&&S.value==""&&x.value==""&&O.value==""&&F.value==""&&G.value==""&&V.value==""&&X.value==""&&we.value==""&&H.value.push("Please enter all Fields."),H.value.length==0&&(G.value=!0,hs(),ps(),await $fetch(a.value+"/api/appointments/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:{service:u.value,provider:m.value,referencecode:w.value,date:p.value,time:v.value,firstname:E.value,lastname:R.value,email:y.value,contactnumber:I.value,address:D.value,city:S.value,zipcode:x.value,notes:O.value,banner_image:F.value,successful_request:G.value,appointment_confirm:V.value,payment:X.value,request_delivered:we.value,updated_at:ct.value,created_by_name:ut.value,created_by_email:y.value}}).then(g=>{console.log("response",g),ht.value=!1}).catch(g=>{if(g.response){for(const d in g.response._data)H.value.push(`${d}: ${g.response._data[d]}`);console.log(JSON.stringify(g.response))}else g.message&&(H.value.push("Something went wrong. Please try again"),console.log(JSON.stringify(g)))}))};return(g,d)=>{const he=ms,$=gs;return P(),N("div",To,[Fe(he),Co,i("div",Ao,[h(ht)?(P(),N("div",Ro,[i("div",Io,[i("ul",Do,[i("li",{class:fe(["mb-8 cursor-pointer",h(Ee)?"font-bold text-sm":"text-xs text-gray-300"])},[ko,z(" Service and Provider ")],2),i("li",{class:fe(["mb-8 cursor-pointer",h(xe)?"font-bold text-sm":"text-xs text-gray-300"])},[Oo,z(" Appointment Date and Time ")],2),i("li",{class:fe(["mb-8 cursor-pointer",h(Se)?"font-bold text-sm":"text-xs text-gray-300"])},[No,z(" Contact Information ")],2),i("li",{class:fe(["mb-8 cursor-pointer",h(Te)?"font-bold text-sm":"text-xs text-gray-300"])},[Uo,z(" Appointment Confirmation ")],2)])]),i("form",{onSubmit:Es(_s,["prevent"]),class:"w-full"},[U(i("div",Po,[i("div",Bo,[Mo,i("div",Lo,[Fo,U(i("select",{"onUpdate:modelValue":d[0]||(d[0]=f=>j(u)?u.value=f:u=f),id:"service",name:"service",class:"shadow-md p-2 rounded-sm mb-2 w-full"},$o,512),[[xs,h(u)]])])]),i("div",jo,[i("div",zo,[i("div",Vo,[qo,Go,(P(!0),N(He,null,$e(h(r),(f,Le)=>(P(),N("div",{key:Le,class:"mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"},[i("div",Wo,[U(i("input",{class:"lg:flex items-center w-4 h-4 text-green-600 bg-white border-green-300 focus:ring-green-500",type:"radio",name:"provider",id:"provider",value:f.registrarsAssign,"onUpdate:modelValue":d[1]||(d[1]=oe=>j(m)?m.value=oe:m=oe),onClick:oe=>h(us)(f.registrarsAssign)},null,8,Xo),[[gt,h(m)]]),i("label",Ko,k(f.title),1)]),i("p",Jo,k(f.description),1)]))),128))])]),i("div",Yo,[i("div",{class:"lasalle-green text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-6 lg:mb-0 mb-3 uppercase",onClick:d[2]||(d[2]=f=>h(de)(!1,!0,!1,!1))},[z(" Next "),Zo])])])],512),[[Ce,h(Ee)]]),U(i("div",Qo,[i("div",ei,[i("div",ti,[i("div",si,[i("div",ni,[ri,i("div",oi,[Fe(h(As),{modelValue:h(p),"onUpdate:modelValue":[d[3]||(d[3]=f=>j(p)?p.value=f:p=f),d[4]||(d[4]=f=>ds(h(p)))],inline:"","enable-time-picker":!1,id:"date",name:"date","auto-apply":"",highlight:h(Be),"year-range":[2023,2024],"disabled-week-days":[6,7,0],"week-start":"0","hide-offset-dates":"","min-date":g.minDate},null,8,["modelValue","highlight","min-date"])])]),i("div",ii,[ai,i("div",li,[i("div",ci,[i("div",ui,[i("div",di,[i("ul",hi,[(P(!0),N(He,null,$e(h(o)[0].time,(f,Le)=>(P(),N("li",{class:"mb-3 lg:flex justify-center font-bold",key:Le},[h(Ae).includes(h(Q),f)?U((P(),N("input",{key:0,id:"time",type:"radio",name:"time",value:f,class:"mr-2 mt-0.5","onUpdate:modelValue":d[5]||(d[5]=oe=>j(v)?v.value=oe:v=oe)},null,8,fi)),[[gt,h(v)]]):(P(),N("input",{key:1,id:"time",type:"radio",name:"time",value:f,class:"mr-2 mt-0.5",disabled:""},null,8,pi)),i("label",{for:"time",class:fe(h(Ae).includes(h(Q),f)?"text-green-500":"text-red-500")},k(f),3)]))),128))])])])])])])])]),i("div",_i,[i("div",{class:"lasalle-green text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg uppercase",onClick:d[6]||(d[6]=f=>h(de)(!0,!1,!1,!1))},[mi,z(" Previous ")]),i("div",{class:"lasalle-green text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg uppercase",onClick:d[7]||(d[7]=f=>h(de)(!1,!1,!0,!1))},[z(" Next "),gi])])])],512),[[Ce,h(xe)]]),U(i("div",bi,[i("div",vi,[i("div",yi,[i("div",wi,[i("div",null,[Ei,i("div",xi,[U(i("input",{id:"firstname",name:"firstname",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"First Name","onUpdate:modelValue":d[8]||(d[8]=f=>j(E)?E.value=f:E=f)},null,512),[[K,h(E)]]),U(i("input",{id:"lastname",name:"lastname",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Last Name","onUpdate:modelValue":d[9]||(d[9]=f=>j(R)?R.value=f:R=f)},null,512),[[K,h(R)]]),U(i("input",{id:"contactnumber",name:"contactnumber",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Contact Number","onUpdate:modelValue":d[10]||(d[10]=f=>j(I)?I.value=f:I=f)},null,512),[[K,h(I)]])]),U(i("input",{id:"email",name:"email",class:"shadow-md p-2 my-3 rounded-sm w-full border",placeholder:"Email","onUpdate:modelValue":d[11]||(d[11]=f=>j(y)?y.value=f:y=f)},null,512),[[K,h(y)]])]),i("div",null,[Si,i("div",Ti,[U(i("input",{id:"address",name:"address",class:"shadow-md p-2 rounded-sm mb-3 w-full border",placeholder:"Address","onUpdate:modelValue":d[12]||(d[12]=f=>j(D)?D.value=f:D=f)},null,512),[[K,h(D)]]),i("div",Ci,[U(i("input",{id:"city",name:"city",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"City","onUpdate:modelValue":d[13]||(d[13]=f=>j(S)?S.value=f:S=f)},null,512),[[K,h(S)]]),U(i("input",{id:"zipcode",name:"zipcode",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Zip Code","onUpdate:modelValue":d[14]||(d[14]=f=>j(x)?x.value=f:x=f)},null,512),[[K,h(x)]])])])])]),i("div",Ai,[U(i("textarea",{name:"notes",placeholder:"Notes",class:"shadow-md outline-0 border border-gray-200 rounded-sm p-2 w-full","onUpdate:modelValue":d[15]||(d[15]=f=>j(O)?O.value=f:O=f)},null,512),[[K,h(O)]])]),i("div",Ri,[i("div",Ii,[i("div",Di,[i("input",{type:"file",onChange:ls,accept:"image/*"},null,32),i("button",{onClick:cs,class:"ml-10"},[h(re)?(P(),N("div",ki,Ni)):(P(),N("div",Ui,Bi))])]),i("div",Mi,[i("div",{class:"text-white bg-green-900 transition-all ease-in-out duration-200 h-5 flex items-center",style:Ss(`width:${h(_t)}%`)},[i("p",Li,k(h(_t))+" %",1)],4)])]),h(Me)?(P(),N("div",Fi,[i("img",{class:"w-full h-56",src:h(Me)},null,8,Hi)])):mt("",!0)])]),i("div",$i,[h(H).length?(P(),N("div",ji,[(P(!0),N(He,null,$e(h(H),f=>(P(),N("p",{key:f},k(f),1))),128))])):mt("",!0),i("div",{class:"lasalle-green text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-6 uppercase",onClick:d[16]||(d[16]=f=>h(de)(!1,!0,!1,!1))},[zi,z(" Previous ")]),i("div",{class:"lasalle-green text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-6 uppercase",onClick:fs},[z(" Next "),Vi])])])],512),[[Ce,h(Se)]]),U(i("div",qi,[i("div",Gi,[i("div",Wi,[i("div",Xi,[i("div",Ki,[Ji,i("div",Yi,[i("ul",null,[i("li",Zi,[Qi,i("h1",ea," : "+k(h(u)),1)]),i("li",ta,[sa,i("h1",na," : "+k(h(m)),1)]),i("li",ra,[oa,i("h1",ia,": "+k(h(p)),1)]),i("li",aa,[la,i("h1",ca,": "+k(h(v)),1)])])])]),i("div",ua,[da,i("div",ha,[i("ul",null,[i("li",fa,[pa,i("h1",_a," : "+k(h(E))+" "+k(h(R)),1)]),i("li",ma,[ga,i("h1",ba," : "+k(h(I)),1)]),i("li",va,[ya,i("h1",wa," : "+k(h(y)),1)]),i("li",Ea,[xa,i("h1",Sa," : "+k(h(D)),1)]),i("li",Ta,[Ca,i("h1",Aa,": "+k(h(S)),1)]),i("li",Ra,[Ia,i("h1",Da," : "+k(h(x)),1)]),i("li",ka,[Oa,i("h1",Na,": "+k(h(O)),1)])])])])])]),i("div",Ua,[i("div",{class:"lasalle-green text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-6 uppercase",onClick:d[17]||(d[17]=f=>h(de)(!1,!1,!0,!1))},[Pa,z(" Previous ")]),Ba])])],512),[[Ce,h(Te)]])],32)])):(P(),N("div",Ma,Fa))]),Fe($)])}}},Ja=Is(Ha,[["__scopeId","data-v-61b39198"]]);export{Ja as default};
