import{m as S,H as B,r as w,Y as _,p as E,Z as T,$ as U,h as H,a0 as I,O as A,a1 as L,a2 as F,a3 as V,M as x,a4 as j,a5 as O,a6 as D,a7 as M,a8 as z,a9 as W,aa as $}from"./BY5DGt9j.js";async function N(t,a=S()){const{path:d,matched:p}=a.resolve(t);if(!p.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(d)))return;const g=a._preloadPromises=a._preloadPromises||[];if(g.length>4)return Promise.all(g).then(()=>N(t,a));a._routePreloaded.add(d);const e=p.map(n=>{var f;return(f=n.components)==null?void 0:f.default}).filter(n=>typeof n=="function");for(const n of e){const f=Promise.resolve(n()).catch(()=>{}).finally(()=>g.splice(g.indexOf(f)));g.push(f)}await Promise.all(g)}const G=(...t)=>t.find(a=>a!==void 0);function Q(t){const a=t.componentName||"NuxtLink";function d(e){return typeof e=="string"&&e.startsWith("#")}function p(e,n){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return k(e,t.trailingSlash);const f="path"in e&&e.path!==void 0?e.path:n(e).path;return{...e,name:void 0,path:k(f,t.trailingSlash)}}function g(e){const n=S(),f=z(),i=x(()=>!!e.target&&e.target!=="_self"),h=x(()=>{const o=e.to||e.href||"";return typeof o=="string"&&j(o,{acceptRelative:!0})}),P=L("RouterLink"),y=P&&typeof P!="string"?P.useLink:void 0,m=x(()=>{if(e.external)return!0;const o=e.to||e.href||"";return typeof o=="object"?!1:o===""||h.value}),r=x(()=>{const o=e.to||e.href||"";return m.value?o:p(o,n.resolve)}),c=m.value||y==null?void 0:y({...e,to:r}),b=x(()=>{var o;if(!r.value||h.value||d(r.value))return r.value;if(m.value){const C=typeof r.value=="object"&&"path"in r.value?O(r.value):r.value,R=typeof C=="object"?n.resolve(C).href:C;return p(R,n.resolve)}return typeof r.value=="object"?((o=n.resolve(r.value))==null?void 0:o.href)??null:p(D(f.app.baseURL,r.value),n.resolve)});return{to:r,hasTarget:i,isAbsoluteUrl:h,isExternal:m,href:b,isActive:(c==null?void 0:c.isActive)??x(()=>r.value===n.currentRoute.value.path),isExactActive:(c==null?void 0:c.isExactActive)??x(()=>r.value===n.currentRoute.value.path),route:(c==null?void 0:c.route)??x(()=>n.resolve(r.value)),async navigate(){await M(b.value,{replace:e.replace,external:m.value||i.value})}}}return B({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:g,setup(e,{slots:n}){const f=S(),{to:i,href:h,navigate:P,isExternal:y,hasTarget:m,isAbsoluteUrl:r}=g(e),c=w(!1),b=w(null),o=l=>{var s;b.value=e.custom?(s=l==null?void 0:l.$el)==null?void 0:s.nextElementSibling:l==null?void 0:l.$el};function C(l){var s,u;return!c.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===l:((s=e.prefetchOn)==null?void 0:s[l])??((u=t.prefetchOn)==null?void 0:u[l]))&&(e.prefetch??t.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!J()}async function R(l=_()){if(c.value)return;c.value=!0;const s=typeof i.value=="string"?i.value:y.value?O(i.value):f.resolve(i.value).fullPath,u=y.value?new URL(s,window.location.href).href:s;await Promise.all([l.hooks.callHook("link:prefetch",u).catch(()=>{}),!y.value&&!m.value&&N(i.value,f).catch(()=>{})])}if(C("visibility")){const l=_();let s,u=null;E(()=>{const v=Y();T(()=>{s=U(()=>{var q;(q=b==null?void 0:b.value)!=null&&q.tagName&&(u=v.observe(b.value,async()=>{u==null||u(),u=null,await R(l)}))})})}),H(()=>{s&&I(s),u==null||u(),u=null})}return()=>{var u;if(!y.value&&!m.value&&!d(i.value)){const v={ref:o,to:i.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(C("interaction")&&(v.onPointerenter=R.bind(null,void 0),v.onFocus=R.bind(null,void 0)),c.value&&(v.class=e.prefetchedClass||t.prefetchedClass),v.rel=e.rel||void 0),A(L("RouterLink"),v,n.default)}const l=e.target||null,s=G(e.noRel?"":e.rel,t.externalRelAttribute,r.value||m.value?"noopener noreferrer":"")||null;return e.custom?n.default?n.default({href:h.value,navigate:P,prefetch:R,get route(){if(!h.value)return;const v=new URL(h.value,window.location.href);return{path:v.pathname,fullPath:v.pathname,get query(){return F(v.search)},hash:v.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:h.value}},rel:s,target:l,isExternal:y.value||m.value,isActive:!1,isExactActive:!1}):null:A("a",{ref:b,href:h.value||null,rel:s,target:l},(u=n.default)==null?void 0:u.call(n))}}})}const X=Q(V);function k(t,a){const d=a==="append"?W:$;return j(t)&&!t.startsWith("http")?t:d(t,!0)}function Y(){const t=_();if(t._observer)return t._observer;let a=null;const d=new Map,p=(e,n)=>(a||(a=new IntersectionObserver(f=>{for(const i of f){const h=d.get(i.target);(i.isIntersecting||i.intersectionRatio>0)&&h&&h()}})),d.set(e,n),a.observe(e),()=>{d.delete(e),a==null||a.unobserve(e),d.size===0&&(a==null||a.disconnect(),a=null)});return t._observer={observe:p}}const Z=/2g/;function J(){const t=navigator.connection;return!!(t&&(t.saveData||Z.test(t.effectiveType)))}export{X as _};
