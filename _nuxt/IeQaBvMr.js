import{_ as D}from"./Bg1u7JKT.js";import{_ as M}from"./D0PTCsEc.js";import{q as N,e as T,u as V,r as n,s as z,g as A,c as p,a as e,b as _,h as m,v as B,f as l,i as R,t as x,j as g,n as w,x as $,m as O,w as F,F as H,l as P,o as h,d as q,M as G}from"./b0bLhGgk.js";/* empty css        */import{s as I}from"./BEx1_QdV.js";import"./5JjjnmY2.js";import"./C5S46NFB.js";import{_ as J}from"./DlAUqK2U.js";const K={class:""},Q={class:"flex"},W={class:"pb-3 lg:w-3/12 bg-gray-100 z-10 w-full lg:block lg:static absolute"},X={class:"flex items-center justify-center text-white bg-green-900 lg:py-[16px] py-[8px]"},Y={class:"flex items-center w-full px-2"},Z={class:"text-sm"},ee={class:"w-full"},te={class:"bg-green-800"},se={class:"flex mx-auto justify-between py-2 px-3.5"},ae={class:"flex items-center text-white gap-5"},le={class:""},oe={class:"lg:w-full p-5"},ie={class:"h-full shadow-lg"},re={class:"py-5"},ne={class:"flex w-11/12 mx-auto gap-5"},de={class:"h-fit"},ue={class:"w-fit mx-auto my-5"},ce={class:"w-fit mx-auto"},pe={class:"px-5 py-2 shadow-sm border"},me={class:"text-xs flex flex-wrap justify-center"},xe=["value"],he={class:"",for:"time"},fe={__name:"[id]",async setup(ve){let d,f;const c=N(),u=T(),s=V(),v=n(s.mainDevServer),b=([d,f]=z(()=>$fetch(v.value+"/api/library/schedule/booking/"+c.params.id+"/").catch(r=>r.data)),d=await d,f(),d),y=n(I.timeSelection),o=n({date:b.date,time:[],updated_at:new Date});let a=n(!0);const k=n(s.user.developerEmail);A(async()=>{s.user.isAuthenticated&&(s.user.email===k.value||s.user.email==="monaliza.mugot@lsu.edu.ph"||s.user.email==="marilyn.bejec@lsu.edu.ph"||s.user.email==="applejane.ebarle@lsu.edu.ph"||s.user.email==="janekaren.gudmalin@lsu.edu.ph"||s.user.email==="macy.beniola@lsu.edu.ph"||s.user.email==="lynn.lumacad@lsu.edu.ph"||s.user.email==="zosette.salas@lsu.edu.ph")?(u.push("/library/dashboard/appointment/set-schedules/edit/"+c.params.id),b.time.filter(r=>{o.value.time.push(r)})):u.push("/_/unauthorized")});const S=()=>{u.push("/library/login"),s.removeToken()},C=async()=>{o.value.time<2&&(o.value.time=["-"]),await $fetch(v.value+"/api/library/schedule/booking/"+c.params.id+"/edit/",{method:"PUT",body:o.value}).then(r=>{u.push({path:"/library/dashboard/appointment/set-schedules"})})};return(r,t)=>{const j=D,L=M;return h(),p("div",K,[e("div",Q,[m(e("div",W,[e("div",X,[e("div",Y,[t[4]||(t[4]=e("i",{class:"fa fa-user mx-2","aria-hidden":"true"},null,-1)),e("h1",Z,x(l(s).user.email),1)]),e("div",{onClick:t[0]||(t[0]=i=>g(a)?a.value=!l(a):a=!l(a)),class:"w-10 px-1.5 lg:hidden flex"},[e("i",{class:w(["fa text-3xl text-white",l(a)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),t[5]||(t[5]=R('<div class="min-h-[570px]" data-v-19e95e18><div class="w-fit mx-auto mt-5 mb-3" data-v-19e95e18><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSULRC.jpg" class="lg:w-24 w-20 mx-auto rounded-full" data-v-19e95e18></div><div class="text-center" data-v-19e95e18><h2 class="font-bold text-green-800 text-lg" data-v-19e95e18>Learning Resource Center</h2></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1" data-v-19e95e18><a href="/library/dashboard/appointment" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-19e95e18><i class="fa fa-list mr-3" aria-hidden="true" data-v-19e95e18></i> Appointment Lists </a><a href="/library/dashboard/appointment/reports/books" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-19e95e18><i class="fa fa-book mr-3" aria-hidden="true" data-v-19e95e18></i> Available Books </a><a href="/library/dashboard/appointment/set-schedules" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-19e95e18><i class="fa fa-calendar mr-3.5" aria-hidden="true" data-v-19e95e18></i> SET SCHEDULES </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-19e95e18><i class="fa fa-globe mr-3" aria-hidden="true" data-v-19e95e18></i> LSU HOME PAGE </a></div></div>',1))],512),[[B,l(a)]]),e("div",ee,[e("div",te,[e("div",se,[e("div",ae,[e("div",{onClick:t[1]||(t[1]=i=>g(a)?a.value=!l(a):a=!l(a)),class:"w-10 px-1.5"},[e("i",{class:w(["fa text-3xl text-white",l(a)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),e("button",{onClick:S,class:"flex hover:font-bold pt-1"},t[6]||(t[6]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",le,[e("div",oe,[e("div",ie,[e("div",re,[e("form",{class:"w-full",onSubmit:$(C,["prevent"])},[e("div",ne,[e("div",de,[t[9]||(t[9]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Date ",-1)),e("div",ue,[m(e("input",{class:"text-center text-green-900 text-sm font-bold","onUpdate:modelValue":t[2]||(t[2]=i=>l(o).date=i),disabled:""},null,512),[[O,l(o).date]])]),e("div",ce,[t[8]||(t[8]=e("button",{class:"block uppercase text-sm rounded-sm shadow px-5 py-1 my-10 text-green-900 whitespace-nowrap"}," Update ",-1)),_(j,{to:"/library/dashboard/appointment/set-schedules",class:"block w-fit uppercase text-sm rounded-sm shadow px-5 py-1 text-red-900 whitespace-nowrap"},{default:F(()=>t[7]||(t[7]=[q(" Cancel ")])),_:1})])]),e("div",pe,[t[10]||(t[10]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Time ",-1)),e("ul",me,[(h(!0),p(H,null,P(l(y)[0].time,(i,E)=>(h(),p("li",{class:"mb-3 lg:flex justify-center font-bold text-black mx-10",key:E},[m(e("input",{id:"time",type:"checkbox",name:"time",value:i,class:"mr-2 mt-0.5 available","onUpdate:modelValue":t[3]||(t[3]=U=>l(o).time=U)},null,8,xe),[[G,l(o).time]]),e("label",he,x(i._12_hour_format_from)+" - "+x(i._12_hour_format_to),1)]))),128))])])])],32)])])])])])]),_(L)])}}},je=J(fe,[["__scopeId","data-v-19e95e18"]]);export{je as default};
