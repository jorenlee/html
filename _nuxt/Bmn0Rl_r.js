import{_ as C}from"./Do21__38.js";import{_ as F}from"./C0nhindZ.js";import{r as l,q as b,c as o,b as y,a as t,k as R,i as Y,l as B,f as a,j as D,d as $,t as p,F as q,s as z,z as x,x as H,o as n}from"./DDu6Fbxf.js";import"./vUEbHlag.js";import{h as U}from"./C5S46NFB.js";import"./DlAUqK2U.js";import"./Cpj98o6Y.js";const E={class:"bg-gray-50"},L={class:""},P=H('<div class=""><div class="relative"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg" class="align-top w-full h-auto lg:object-fill lg:block hidden"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block"><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full"><h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"> Track Appointment Status </h1></div><div class="pt-2.5 pb-3 shadow-lg"><ul class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs"><li><a href="/" class="mr-1"> Home </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/university-registrar" class="mr-1">University Registrar</a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/" class="mr-1">Track Appointment Status</a></li></ul></div></div></div>',1),G={class:"mt-5 w-11/12 mx-auto pb-7 bg-white mb-5 shadow-md"},I=t("button",{type:"submit",class:"bg-green-800 mx-2 text-white px-4 py-1 rounded-md uppercase"}," Proceed ",-1),J={key:0,class:"-ml-[100px]"},K={class:"text-center font-bold text-green-900"},O={class:""},Q={class:""},W={class:"text-center"},X={class:"font-bold"},Z={class:"mx-auto w-fit pl-[250px]"},tt={class:"border-b"},et=t("i",{class:"fa fa-circle -ml-2 mr-3","aria-hidden":"true"},null,-1),st={class:"font-bold"},at={class:"border-l pl-5 -mt-1 pb-5"},lt={class:"text-sm text-gray-500"},it={key:1,class:"text-center"},rt={key:2,class:"mx-auto w-fit"},ot=t("div",{class:"border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-green-600"},null,-1),nt=[ot],vt={__name:"track-appointment-status",async setup(dt){let s,r,i=l(""),m=l(),c=l(),f=l(),w=l(),h=l(),_=l(!1),u=l(!1),v=l(!1);l(!1);let g=l(!1);const S=([s,r]=b(()=>$fetch("https://api-registrar.lsu.edu.ph/api/appointments/list/tblorders/").catch(e=>e.data)),s=await s,r(),s),T=([s,r]=b(()=>$fetch("https://api-registrar.lsu.edu.ph/api/appointments/list/tbltrackorder/").catch(e=>e.data)),s=await s,r(),s),M=([s,r]=b(()=>$fetch("https://api-registrar.lsu.edu.ph/api/appointments/list/tbltransactions/").catch(e=>e.data)),s=await s,r(),s),N=()=>{g.value=!0,_.value=!1,c.value="",f.value="",h.value="",v.value=!1,i.value!==""&&(u.value=!0,setTimeout(()=>{S.filter(function(e){u.value=!1,e.fldtrackid===i.value?(c.value=e.fldtrackid,f.value=e.fldorderid,v.value=!1,i.value="",_.value=!0,g.value=!1):v.value=!0}),m.value=T.filter(function(e){return e.fldorderid===f.value}),w.value=m.value[0].flddocid,M.filter(function(e){e.fldtransid===w.value&&(h.value=e.fldtransname)})},3e3))};return(e,k)=>{const V=C,j=F;return n(),o("div",E,[y(V),t("div",L,[P,t("div",G,[t("form",{onSubmit:R(N,["prevent"]),class:"mx-auto w-fit pt-10 pb-5 lg:flex items-center"},[Y(t("input",{"onUpdate:modelValue":k[0]||(k[0]=d=>D(i)?i.value=d:i=d),class:"w-[200px] shadow-md px-2 py-1 rounded-md border-y border-x-2 border-green-800",placeholder:"Tracking Code",name:"search",required:""},null,512),[[B,a(i)]]),I],32),a(_)?(n(),o("div",J,[t("div",null,[t("div",K,[$(" Appointment Status : "),t("span",O,p(a(c)),1)]),t("div",Q,[t("div",W,[t("span",X,p(a(h)),1)]),t("div",Z,[t("div",tt,[(n(!0),o(q,null,z(a(m),(d,A)=>(n(),o("div",{key:A,class:""},[t("div",null,[et,t("span",st,p(d.flddescription),1),t("div",at,[t("span",lt,p(a(U)(d.flddatetime).format("dddd, MMMM Do YYYY hh:mm A")),1)])])]))),128))])])])])])):x("",!0),a(g)&&a(c)!==a(i)&&a(i).length>0&&a(u)!==!0?(n(),o("div",it," No Results Found ")):x("",!0),a(u)?(n(),o("div",rt,nt)):x("",!0)])]),y(j)])}}};export{vt as default};
