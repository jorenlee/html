import{_ as h}from"./CrU5D09q.js";import{_ as u}from"./Cw91Fchc.js";import{u as g,g as f,m as p,r as x,q as b,c as v,b as c,a as s,f as e,t as o,x as w,o as y}from"./ydM3rnrl.js";import"./DlAUqK2U.js";import"./C5S46NFB.js";const j={class:"bg-gray-50"},S=w('<div class=""><div class="relative"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg" class="align-top w-full h-auto lg:object-fill lg:block hidden"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block"><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full"><h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"> LSU Central Procurement Unit </h1></div><div class="shadow-lg"><div class="w-11/12 mx-auto flex"><ul class="flex pt-2.5 pb-3 w-full lasalle-green-text capitalize mx-auto text-xs"><li><a href="/" class="mr-1 hover:font-bold"> Home </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/procurement" class="mr-1 hover:font-bold"> Procurement </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="#" class="mr-1"> Detail </a></li></ul></div></div></div></div>',1),k={class:"w-11/12 lg:py-8 py-4 mx-auto"},B={class:"lg:flex mx-auto lg:text-left md:text-center gap-10"},D={class:"w-3/12 lg:mb-0 mb-5"},U=["src"],C={class:"mx-auto w-full"},L={class:"flex items-center"},N={class:"text-sm"},P={class:"flex"},V=s("h1",{class:"text-right mr-5 lg:w-7/12 font-bold"},"Title :",-1),q={class:"w-9/12 mb-3 uppercase"},A={class:"flex"},H=s("h1",{class:"mr-5 text-right lg:w-7/12 font-bold"}," LSU Address: ",-1),R={class:"w-9/12 mb-3 justify-end"},T={class:"flex"},$=s("h1",{class:"text-right mr-5 lg:w-7/12 font-bold"},"Start Date:",-1),z={class:"w-9/12 mb-3"},E={class:"flex"},F=s("h1",{class:"text-right mr-5 lg:w-7/12 font-bold"},"Deadline:",-1),Q={class:"w-9/12 mb-3"},G={class:"flex"},I=s("h1",{class:"text-right mr-5 lg:w-7/12 font-bold"},"Lead Time:",-1),J={class:"w-9/12 mb-3"},K={class:"flex"},M=s("h1",{class:"text-right mr-5 lg:w-7/12 font-bold"}," Project Ceiling Budget: ",-1),O={class:"w-9/12 mb-3"},W={class:"flex"},X=s("h1",{class:"text-right mr-5 lg:w-7/12 font-bold"},"Quantity:",-1),Y={class:"w-9/12 mb-3"},is={__name:"[id]",async setup(Z){let a,l;g();const n=f(),r=p(),d=x(n.mainServer),t=([a,l]=b(()=>$fetch(d.value+"/api/procurements/"+r.params.id+"/").catch(i=>i.data)),a=await a,l(),a);return(i,ss)=>{const _=h,m=u;return y(),v("div",j,[c(_),s("div",null,[S,s("div",k,[s("div",B,[s("div",D,[s("img",{src:e(t).banner_image,class:"w-full h-full"},null,8,U)]),s("div",C,[s("div",L,[s("div",N,[s("div",P,[V,s("span",q,o(e(t).title),1)]),s("div",A,[H,s("span",R,o(e(t).lsu_address),1)]),s("div",T,[$,s("span",z,o(e(t).start_date),1)]),s("div",E,[F,s("span",Q,o(e(t).deadline),1)]),s("div",G,[I,s("span",J,o(e(t).lead_time),1)]),s("div",K,[M,s("span",O,o(e(t).project_ceiling_budget),1)]),s("div",W,[X,s("span",Y,o(e(t).quantity),1)])])])])])]),c(m)])])}}};export{is as default};
