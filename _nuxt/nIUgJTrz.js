import{_ as N}from"./CJMS6i14.js";import{r as x,B as R,au as j,av as F,g as L,ab as B,a1 as D,aw as E,G as b,Q as U,q as M,H as S,y as Q,c as w,o as A,f as p,O as H,n as P,b as C,a as _,F as W,l as $,t as G}from"./nwF0sMHc.js";import{_ as K}from"./DlAUqK2U.js";import{_ as O}from"./CkmCXSYS.js";import"./C5S46NFB.js";function q(o,e){let t,l,d;const i=x(!0),a=()=>{i.value=!0,d()};R(o,a,{flush:"sync"});const s=typeof e=="function"?e:e.get,n=typeof e=="function"?void 0:e.set,u=j((m,y)=>(l=m,d=y,{get(){return i.value&&(t=s(),i.value=!1),l(),t},set(f){n==null||n(f)}}));return Object.isExtensible(u)&&(u.trigger=a),u}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function I(o){const e=B(),t=q(()=>null,()=>e.proxy.$el);return F(t.trigger),L(t.trigger),t}function z(o){const e=D().public.googleAdsense,t=E(o,e),l=t.adClient??t.id,d=t.test?"on":null,i=Math.random(),a=I(),s=x(""),n=x(!1),u=b(()=>n.value?`page-${Math.random()}`:null),m=b(()=>{var r;return((r=a.value)==null?void 0:r.getAttribute("data-ad-status"))==="unfilled"}),y=T("path"),f=T("query"),k=b(()=>n.value?null:"");async function v(){n.value=!1,await S(),g()}async function g(){var r;if(n.value=!0,await S(),!((r=a.value)!=null&&r.innerHTML))try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(h){console.error(h)}}return R([y,f],(r,h)=>{const c=V(r,h,t.includeQuery);a.value&&!a.value.isConnected||c&&v()}),U(()=>{!a.value||!a.value.isConnected||(n.value?a.value.innerHTML="":a.value.innerHTML=" ")}),t.hideUnfilled&&U(()=>m.value&&(s.value="hide-unfilled")),L(()=>g()),{adClass:s,dataAdClient:l,dataAdRegion:u,dataAdTest:d,dataAnalyticsDomainName:t.analyticsDomainName,dataAnalyticsUacct:t.analyticsUacct,isUnfilled:m,key:i,status:k,updateAd:v,showAd:g}}function T(o){const e=M();return b(()=>e[o])}function V(o,e,t){const[l,d]=o,[i,a]=e;if(l!==i)return!0;if(!t)return;const s=Object.keys(d),n=Object.keys(a);return s.length!==n.length||s.some(u=>d[u]!==a[u])}const J=["data-ad-client","data-ad-slot","data-ad-format","data-ad-region","data-ad-layout","data-ad-layout-key","data-page-url","data-analytics-uacct","data-analytics-domain-name","data-adtest","data-adsbygoogle-status","data-ad-full-width-responsive"],X=Q({__name:"Adsbygoogle",props:{adClient:{default:void 0},adSlot:{default:null},adFormat:{},adLayout:{default:null},adLayoutKey:{default:null},adStyle:{default:()=>({display:"block"})},adFullWidthResponsive:{type:Boolean,default:!1},hideUnfilled:{type:Boolean,default:void 0},pageUrl:{default:null},analyticsUacct:{},analyticsDomainName:{},includeQuery:{type:Boolean}},setup(o,{expose:e}){const{adClient:t,analyticsDomainName:l,analyticsUacct:d,hideUnfilled:i,includeQuery:a}=o,{adClass:s,dataAdClient:n,dataAdRegion:u,dataAdTest:m,dataAnalyticsDomainName:y,dataAnalyticsUacct:f,isUnfilled:k,key:v,status:g,updateAd:r,showAd:h}=z({adClient:t,analyticsDomainName:l,analyticsUacct:d,hideUnfilled:i,includeQuery:a});return e({isUnfilled:k,updateAd:r,showAd:h}),(c,st)=>(A(),w("ins",{ref:"ad",key:p(v),class:P(["adsbygoogle",p(s)]),style:H(c.adStyle),"data-ad-client":p(n),"data-ad-slot":c.adSlot,"data-ad-format":c.adFormat,"data-ad-region":p(u),"data-ad-layout":c.adLayout,"data-ad-layout-key":c.adLayoutKey,"data-page-url":c.pageUrl,"data-analytics-uacct":p(f),"data-analytics-domain-name":p(y),"data-adtest":p(m),"data-adsbygoogle-status":p(g),"data-ad-full-width-responsive":c.adFullWidthResponsive},null,14,J))}}),Y=K(X,[["__scopeId","data-v-101bfb4a"]]),Z={class:"bg-gray-50"},tt={class:"lg:flex w-11/12 mx-auto lg:pl-44 py-10 lg:pt-36 pt-24"},at={class:"lg:w-1/3 lg:pl-10 lg:pb-10 pb-3 lg:order-2 order-1 lg:mt-10"},et=["href"],nt={class:"justify-center lg:w-10/12 w-11/12 mx-auto border mb-5",title:"Google Ads"},rt={__name:"index",setup(o){const e=x([{title:"Administration",link:"http://my.lsu.edu.ph/ADMIN_STAFF/admin_staff_index.jsp"},{title:"Management",link:"http://my.lsu.edu.ph/administrators/administrators_index.jsp"},{title:"Academics",link:"http://my.lsu.edu.ph/faculty_acad/faculty_acad_index.jsp"},{title:"Parents/Students",link:"http://my.lsu.edu.ph/PARENTS_STUDENTS/parents_student_index.jsp"},{title:"Basic Education",link:"http://my.lsu.edu.ph/sa_basic/admin_staff/admin_staff_index.htm"}]);return(t,l)=>{const d=N,i=Y,a=O;return A(),w("div",Z,[C(d),_("div",tt,[_("div",at,[(A(!0),w(W,null,$(p(e),(s,n)=>(A(),w("a",{class:"rounded-xl px-2 lg:py-3 py-2.5 drop-shadow-xl lg:w-11/12 w-9/12 mx-auto block shadow-xl lg:mb-10 mb-6 whitespace-nowrap bg-white text-green-800 text-xl font-bold text-center",key:n,href:s.link},G(s.title),9,et))),128))]),l[0]||(l[0]=_("div",{class:"lg:w-1/2 my-auto lg:order-1 order-2"},[_("img",{class:"rounded-full mx-auto lg:w-96 w-7/12",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"})],-1))]),_("div",nt,[C(i,{"ad-slot":"9892943139"})]),C(a)])}}};export{rt as default};
