import{_ as L}from"./B4CHoiw_.js";import{r as x,g as N,au as j,av as D,p as R,l as F,a8 as M,aw as E,M as w,e as U,D as B,N as S,H as Q,o as v,c as A,n as p,x as H,V as P,b as C,a as _,F as W,z as $,t as K}from"./CDTdWgub.js";import{_ as z}from"./DlAUqK2U.js";import{_ as G}from"./C2txWRc6.js";import"./C5S46NFB.js";function I(o,e){let t,l,d;const i=x(!0),a=()=>{i.value=!0,d()};N(o,a,{flush:"sync"});const s=typeof e=="function"?e:e.get,n=typeof e=="function"?void 0:e.set,u=j((f,m)=>(l=f,d=m,{get(){return i.value&&(t=s(),i.value=!1),l(),t},set(y){n==null||n(y)}}));return Object.isExtensible(u)&&(u.trigger=a),u}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function O(o){const e=F(),t=I(()=>null,()=>e.proxy.$el);return D(t.trigger),R(t.trigger),t}function V(o){const e=M().public.googleAdsense,t=E(o,e),l=t.adClient??t.id,d=t.test?"on":null,i=Math.random(),a=O(),s=x(""),n=x(!1),u=w(()=>n.value?`page-${Math.random()}`:null),f=w(()=>{var r;return((r=a.value)==null?void 0:r.getAttribute("data-ad-status"))==="unfilled"}),m=T("path"),y=T("query"),k=w(()=>n.value?null:"");async function b(){n.value=!1,await S(),g()}async function g(){var r;if(n.value=!0,await S(),!((r=a.value)!=null&&r.innerHTML))try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(h){console.error(h)}}return N([m,y],(r,h)=>{const c=q(r,h,t.includeQuery);a.value&&!a.value.isConnected||c&&b()}),U(()=>{!a.value||!a.value.isConnected||(n.value?a.value.innerHTML="":a.value.innerHTML=" ")}),t.hideUnfilled&&U(()=>f.value&&(s.value="hide-unfilled")),R(()=>g()),{adClass:s,dataAdClient:l,dataAdRegion:u,dataAdTest:d,dataAnalyticsDomainName:t.analyticsDomainName,dataAnalyticsUacct:t.analyticsUacct,isUnfilled:f,key:i,status:k,updateAd:b,showAd:g}}function T(o){const e=B();return w(()=>e[o])}function q(o,e,t){const[l,d]=o,[i,a]=e;if(l!==i)return!0;if(!t)return;const s=Object.keys(d),n=Object.keys(a);return s.length!==n.length||s.some(u=>d[u]!==a[u])}const J=["data-ad-client","data-ad-slot","data-ad-format","data-ad-region","data-ad-layout","data-ad-layout-key","data-page-url","data-analytics-uacct","data-analytics-domain-name","data-adtest","data-adsbygoogle-status","data-ad-full-width-responsive"],X=Q({__name:"Adsbygoogle",props:{adClient:{default:void 0},adSlot:{default:null},adFormat:{},adLayout:{default:null},adLayoutKey:{default:null},adStyle:{default:()=>({display:"block"})},adFullWidthResponsive:{type:Boolean,default:!1},hideUnfilled:{type:Boolean,default:void 0},pageUrl:{default:null},analyticsUacct:{},analyticsDomainName:{},includeQuery:{type:Boolean}},setup(o,{expose:e}){const{adClient:t,analyticsDomainName:l,analyticsUacct:d,hideUnfilled:i,includeQuery:a}=o,{adClass:s,dataAdClient:n,dataAdRegion:u,dataAdTest:f,dataAnalyticsDomainName:m,dataAnalyticsUacct:y,isUnfilled:k,key:b,status:g,updateAd:r,showAd:h}=V({adClient:t,analyticsDomainName:l,analyticsUacct:d,hideUnfilled:i,includeQuery:a});return e({isUnfilled:k,updateAd:r,showAd:h}),(c,st)=>(v(),A("ins",{ref:"ad",key:p(b),class:H(["adsbygoogle",p(s)]),style:P(c.adStyle),"data-ad-client":p(n),"data-ad-slot":c.adSlot,"data-ad-format":c.adFormat,"data-ad-region":p(u),"data-ad-layout":c.adLayout,"data-ad-layout-key":c.adLayoutKey,"data-page-url":c.pageUrl,"data-analytics-uacct":p(y),"data-analytics-domain-name":p(m),"data-adtest":p(f),"data-adsbygoogle-status":p(g),"data-ad-full-width-responsive":c.adFullWidthResponsive},null,14,J))}}),Y=z(X,[["__scopeId","data-v-101bfb4a"]]),Z={class:"bg-gray-50"},tt={class:"lg:flex w-11/12 mx-auto lg:pl-44 py-10 lg:pt-36 pt-24"},at={class:"lg:w-1/3 lg:pl-10 lg:pb-10 pb-3 lg:order-2 order-1 lg:mt-10"},et=["href"],nt={class:"justify-center lg:w-10/12 w-11/12 mx-auto border mb-5",title:"Google Ads"},rt={__name:"index",setup(o){const e=x([{title:"Administration",link:"http://my.lsu.edu.ph/ADMIN_STAFF/admin_staff_index.jsp"},{title:"Management",link:"http://my.lsu.edu.ph/administrators/administrators_index.jsp"},{title:"Academics",link:"http://my.lsu.edu.ph/faculty_acad/faculty_acad_index.jsp"},{title:"Parents/Students",link:"http://my.lsu.edu.ph/PARENTS_STUDENTS/parents_student_index.jsp"},{title:"Basic Education",link:"http://my.lsu.edu.ph/sa_basic/admin_staff/admin_staff_index.htm"}]);return(t,l)=>{const d=L,i=Y,a=G;return v(),A("div",Z,[C(d),_("div",tt,[_("div",at,[(v(!0),A(W,null,$(p(e),(s,n)=>(v(),A("a",{class:"rounded-xl px-2 lg:py-3 py-2.5 drop-shadow-xl lg:w-11/12 w-9/12 mx-auto block shadow-xl lg:mb-10 mb-6 whitespace-nowrap bg-white text-green-800 text-xl font-bold text-center",key:n,href:s.link},K(s.title),9,et))),128))]),l[0]||(l[0]=_("div",{class:"lg:w-1/2 my-auto lg:order-1 order-2"},[_("img",{class:"rounded-full mx-auto lg:w-96 w-7/12",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"})],-1))]),_("div",nt,[C(i,{"ad-slot":"9892943139"})]),C(a)])}}};export{rt as default};
