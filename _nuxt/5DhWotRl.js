import{_ as S}from"./_HjpPkBZ.js";import{_ as k}from"./DcdgoNGb.js";import{_ as C}from"./COrOnJcS.js";import{u as I,g as j,r as o,q as B,c as r,b as c,a as t,F as P,s as $,f as D,x as p,o as n,t as F,p as H,e as N}from"./Coc7ybvx.js";import{u as U}from"./bdEc3sfG.js";import{_ as V}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const _=e=>(H("data-v-a538463b"),e=e(),N(),e),z={class:"bg-gray-50"},A={class:""},L={class:"relative"},q=p('<img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block" data-v-a538463b><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full" data-v-a538463b><h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto" data-v-a538463b> LSU Central Procurement Unit </h1></div><div class="shadow-lg" data-v-a538463b><div class="w-11/12 mx-auto flex" data-v-a538463b><ul class="flex pt-2.5 pb-3 w-full lasalle-green-text capitalize mx-auto text-xs" data-v-a538463b><li data-v-a538463b><a href="/" class="mr-1" data-v-a538463b> Home </a></li><li data-v-a538463b><i class="fas fa-caret-right mr-1" data-v-a538463b></i><a href="https://fb.com/lsu.cpu" class="mr-1" data-v-a538463b> Procurement </a></li></ul></div></div>',3),E={class:"flex w-11/12 mx-auto"},O={class:"w-3/12 border-r pr-3 mr-10"},R={class:"mx-auto mt-10"},G=["onClick"],J=_(()=>t("span",null,[t("i",{class:"fa fa-caret-right text-2xl"})],-1)),K=p('<div class="w-9/12 lg:py-8 py-4 mx-auto" data-v-a538463b><ul class="lg:grid lg:grid-cols-3 text-center gap-10" data-v-a538463b><div class="w-fit flex" data-v-a538463b><div class="mr-0 ml-auto flex items-center gap-3" data-v-a538463b></div></div></ul><h1 class="text-green-800 text-xl text-center uppercase font-bold mb-5" data-v-a538463b>Bid Announcement</h1></div>',1),M=_(()=>t("div",null,[t("div",{id:"fb-root"}),t("div",{id:"fb-customer-chat-procurement",class:"fb-customerchat"})],-1)),Q={__name:"index-old",async setup(e){let a,l;I();const v=j(),i=o(v.mainServer),b=([a,l]=B(()=>$fetch(i.value+"/api/procurements/list").catch(s=>s.data)),a=await a,l(),a),d=o(),f=o(),h=async s=>{d.value=s,f.value=await $fetch(i.value+"/api/procurements/"+d+"/").catch(u=>u.data)};return U({script:[{src:"/messenger/procurement/procurement.js",tagPosition:"bodyClose",defer:!0},{src:"/messenger/procurement/fb.sdk-procurement.js",tagPosition:"bodyClose",defer:!0}]}),(s,u)=>{const x=S,g=k,w=C;return n(),r("div",z,[c(x),t("div",null,[t("div",A,[t("div",L,[c(g),q])]),t("div",E,[t("div",O,[t("ul",R,[(n(!0),r(P,null,$(D(b),(y,m)=>(n(),r("li",{onClick:T=>h(m),class:"border hover:bg-green-900 bg-white hover:text-white text-green-900 py-1 px-3 capitalize text-xs justify-between flex items-center",key:m},[t("span",null,F(y.title),1),J],8,G))),128))])]),K])]),M,c(w)])}}},st=V(Q,[["__scopeId","data-v-a538463b"]]);export{st as default};
