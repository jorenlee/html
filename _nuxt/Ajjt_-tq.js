import{_ as C}from"./CC7BOPF0.js";import{_ as F}from"./AZszvRRt.js";import{r,s as x,c as n,b as y,a as t,i as R,k as w,x as Y,h as B,m as D,f as l,j as $,d as H,t as m,F as U,l as q,o as d}from"./D08rHigl.js";import"./5JjjnmY2.js";import{h as z}from"./C5S46NFB.js";import"./DlAUqK2U.js";const E={class:"bg-gray-50"},L={class:""},P={class:"mt-5 w-11/12 mx-auto pb-7 bg-white mb-5 shadow-md"},G={key:0,class:"-ml-[100px]"},I={class:"text-center font-bold text-green-900"},J={class:""},K={class:""},O={class:"text-center"},Q={class:"font-bold"},W={class:"mx-auto w-fit pl-[250px]"},X={class:"border-b"},Z={class:"font-bold"},tt={class:"border-l pl-5 -mt-1 pb-5"},et={class:"text-sm text-gray-500"},st={key:1,class:"text-center"},at={key:2,class:"mx-auto w-fit"},ut={__name:"track-appointment-status",async setup(lt){let s,o,i=r(""),f=r(),u=r(),h=r(),k=r(),v=r(),g=r(!1),p=r(!1),b=r(!1);r(!1);let _=r(!1);const S=([s,o]=x(()=>$fetch("https://api-registrar.lsu.edu.ph/api/appointments/list/tblorders/").catch(e=>e.data)),s=await s,o(),s),T=([s,o]=x(()=>$fetch("https://api-registrar.lsu.edu.ph/api/appointments/list/tbltrackorder/").catch(e=>e.data)),s=await s,o(),s),M=([s,o]=x(()=>$fetch("https://api-registrar.lsu.edu.ph/api/appointments/list/tbltransactions/").catch(e=>e.data)),s=await s,o(),s),N=()=>{_.value=!0,g.value=!1,u.value="",h.value="",v.value="",b.value=!1,i.value!==""&&(p.value=!0,setTimeout(()=>{S.filter(function(e){p.value=!1,e.fldtrackid===i.value?(u.value=e.fldtrackid,h.value=e.fldorderid,b.value=!1,i.value="",g.value=!0,_.value=!1):b.value=!0}),f.value=T.filter(function(e){return e.fldorderid===h.value}),k.value=f.value[0].flddocid,M.filter(function(e){e.fldtransid===k.value&&(v.value=e.fldtransname)})},3e3))};return(e,a)=>{const V=C,j=F;return d(),n("div",E,[y(V),t("div",L,[a[5]||(a[5]=R('<div class=""><div class="relative"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg" class="align-top w-full h-auto lg:object-fill lg:block hidden"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block"><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full"><h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"> Track Appointment Status </h1></div><div class="pt-2.5 pb-3 shadow-lg"><ul class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs"><li><a href="/" class="mr-1"> Home </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/university-registrar" class="mr-1">University Registrar</a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/" class="mr-1">Track Appointment Status</a></li></ul></div></div></div>',1)),t("div",P,[t("form",{onSubmit:Y(N,["prevent"]),class:"mx-auto w-fit pt-10 pb-5 lg:flex items-center"},[B(t("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>$(i)?i.value=c:i=c),class:"w-[200px] shadow-md px-2 py-1 rounded-md border-y border-x-2 border-green-800",placeholder:"Tracking Code",name:"search",required:""},null,512),[[D,l(i)]]),a[1]||(a[1]=t("button",{type:"submit",class:"bg-green-800 mx-2 text-white px-4 py-1 rounded-md uppercase"}," Proceed ",-1))],32),l(g)?(d(),n("div",G,[t("div",null,[t("div",I,[a[2]||(a[2]=H(" Appointment Status : ")),t("span",J,m(l(u)),1)]),t("div",K,[t("div",O,[t("span",Q,m(l(v)),1)]),t("div",W,[t("div",X,[(d(!0),n(U,null,q(l(f),(c,A)=>(d(),n("div",{key:A,class:""},[t("div",null,[a[3]||(a[3]=t("i",{class:"fa fa-circle -ml-2 mr-3","aria-hidden":"true"},null,-1)),t("span",Z,m(c.flddescription),1),t("div",tt,[t("span",et,m(l(z)(c.flddatetime).format("dddd, MMMM Do YYYY hh:mm A")),1)])])]))),128))])])])])])):w("",!0),l(_)&&l(u)!==l(i)&&l(i).length>0&&l(p)!==!0?(d(),n("div",st," No Results Found ")):w("",!0),l(p)?(d(),n("div",at,a[4]||(a[4]=[t("div",{class:"border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-green-600"},null,-1)]))):w("",!0)])]),y(j)])}}};export{ut as default};
