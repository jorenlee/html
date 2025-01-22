import{e as R,B as N,r as w,S as _,h as U,U as E,V as T,G as I,W as V,K as A,X as L,Y as F,Z as H,z as x,$ as j,a0 as k,a1 as z,a2 as D,a3 as W,a4 as M,a5 as $}from"./CIc66A5n.js";async function B(t,n=R()){const{path:d,matched:p}=n.resolve(t);if(!p.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(d)))return;const g=n._preloadPromises=n._preloadPromises||[];if(g.length>4)return Promise.all(g).then(()=>B(t,n));n._routePreloaded.add(d);const e=p.map(a=>{var f;return(f=a.components)==null?void 0:f.default}).filter(a=>typeof a=="function");for(const a of e){const f=Promise.resolve(a()).catch(()=>{}).finally(()=>g.splice(g.indexOf(f)));g.push(f)}await Promise.all(g)}const G=(...t)=>t.find(n=>n!==void 0);function K(t){const n=t.componentName||"NuxtLink";function d(e){return typeof e=="string"&&e.startsWith("#")}function p(e,a){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return O(e,t.trailingSlash);const f="path"in e&&e.path!==void 0?e.path:a(e).path;return{...e,name:void 0,path:O(f,t.trailingSlash)}}function g(e){const a=R(),f=W(),i=x(()=>!!e.target&&e.target!=="_self"),h=x(()=>{const o=e.to||e.href||"";return typeof o=="string"&&j(o,{acceptRelative:!0})}),P=L("RouterLink"),y=P&&typeof P!="string"?P.useLink:void 0,m=x(()=>{if(e.external)return!0;const o=e.to||e.href||"";return typeof o=="object"?!1:o===""||h.value}),r=x(()=>{const o=e.to||e.href||"";return m.value?o:p(o,a.resolve)}),c=m.value||y==null?void 0:y({...e,to:r}),b=x(()=>{var o;if(!r.value||h.value||d(r.value))return r.value;if(m.value){const S=typeof r.value=="object"&&"path"in r.value?k(r.value):r.value,C=typeof S=="object"?a.resolve(S).href:S;return p(C,a.resolve)}return typeof r.value=="object"?((o=a.resolve(r.value))==null?void 0:o.href)??null:p(z(f.app.baseURL,r.value),a.resolve)});return{to:r,hasTarget:i,isAbsoluteUrl:h,isExternal:m,href:b,isActive:(c==null?void 0:c.isActive)??x(()=>r.value===a.currentRoute.value.path),isExactActive:(c==null?void 0:c.isExactActive)??x(()=>r.value===a.currentRoute.value.path),route:(c==null?void 0:c.route)??x(()=>a.resolve(r.value)),async navigate(){await D(b.value,{replace:e.replace,external:m.value||i.value})}}}return N({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:g,setup(e,{slots:a}){const f=R(),{to:i,href:h,navigate:P,isExternal:y,hasTarget:m,isAbsoluteUrl:r}=g(e),c=w(!1),b=w(null),o=l=>{var s;b.value=e.custom?(s=l==null?void 0:l.$el)==null?void 0:s.nextElementSibling:l==null?void 0:l.$el};function S(l){var s,u;return!c.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===l:((s=e.prefetchOn)==null?void 0:s[l])??((u=t.prefetchOn)==null?void 0:u[l]))&&(e.prefetch??t.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!Y()}async function C(l=_()){if(c.value)return;c.value=!0;const s=typeof i.value=="string"?i.value:y.value?k(i.value):f.resolve(i.value).fullPath,u=y.value?new URL(s,window.location.href).href:s;await Promise.all([l.hooks.callHook("link:prefetch",u).catch(()=>{}),!y.value&&!m.value&&B(i.value,f).catch(()=>{})])}if(S("visibility")){const l=_();let s,u=null;U(()=>{const v=Q();E(()=>{s=T(()=>{var q;(q=b==null?void 0:b.value)!=null&&q.tagName&&(u=v.observe(b.value,async()=>{u==null||u(),u=null,await C(l)}))})})}),I(()=>{s&&V(s),u==null||u(),u=null})}return()=>{var u;if(!y.value&&!m.value&&!d(i.value)){const v={ref:o,to:i.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(S("interaction")&&(v.onPointerenter=C.bind(null,void 0),v.onFocus=C.bind(null,void 0)),c.value&&(v.class=e.prefetchedClass||t.prefetchedClass),v.rel=e.rel||void 0),A(L("RouterLink"),v,a.default)}const l=e.target||null,s=G(e.noRel?"":e.rel,t.externalRelAttribute,r.value||m.value?"noopener noreferrer":"")||null;return e.custom?a.default?a.default({href:h.value,navigate:P,prefetch:C,get route(){if(!h.value)return;const v=new URL(h.value,window.location.href);return{path:v.pathname,fullPath:v.pathname,get query(){return F(v.search)},hash:v.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:h.value}},rel:s,target:l,isExternal:y.value||m.value,isActive:!1,isExactActive:!1}):null:A("a",{ref:b,href:h.value||null,rel:s,target:l},(u=a.default)==null?void 0:u.call(a))}}})}const J=K(H);function O(t,n){const d=n==="append"?M:$;return j(t)&&!t.startsWith("http")?t:d(t,!0)}function Q(){const t=_();if(t._observer)return t._observer;let n=null;const d=new Map,p=(e,a)=>(n||(n=new IntersectionObserver(f=>{for(const i of f){const h=d.get(i.target);(i.isIntersecting||i.intersectionRatio>0)&&h&&h()}})),d.set(e,a),n.observe(e),()=>{d.delete(e),n==null||n.unobserve(e),d.size===0&&(n==null||n.disconnect(),n=null)});return t._observer={observe:p}}const X=/2g/;function Y(){const t=navigator.connection;return!!(t&&(t.saveData||X.test(t.effectiveType)))}export{J as _};
