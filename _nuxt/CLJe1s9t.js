import{_ as M}from"./13-ixVC-.js";import{e as U,u as Y,r as i,s as F,g as O,c as u,a as e,b as S,h as C,v as D,f as s,i as H,t as v,j as E,n as g,k as P,F as X,l as G,o as c}from"./dVjaznPK.js";import{s as I}from"./BEx1_QdV.js";import{X as J}from"./CUxxZMaK.js";/* empty css        */import{h as q}from"./C5S46NFB.js";import{_ as K}from"./5JjjnmY2.js";import{_ as Q}from"./DlAUqK2U.js";const W={class:""},Z={class:"flex"},ee={class:"pb-3 lg:w-3/12 bg-gray-100 z-10 w-full lg:block lg:static absolute"},te={class:"flex items-center justify-center text-white bg-green-900 lg:py-[16px] py-[8px]"},se={class:"flex items-center w-full px-2"},ae={class:"text-sm"},le={class:"w-full"},oe={class:"bg-green-800"},ie={class:"flex mx-auto justify-between py-2 px-3.5"},de={class:"flex items-center text-white gap-5"},ne={class:""},re={class:"lg:w-full p-5"},ue={class:"h-full shadow-lg pb-10"},ce={class:"relative"},pe={class:"w-full mb-10"},me={class:"flex shadow px-3 justify-between"},he={key:0,class:""},fe={key:0,class:""},xe={class:"px-3"},ve={class:"lg:flex gap-x-5"},ge={class:"lg:w-fit mb-10 w-fit mx-auto h-full"},be={class:""},we={class:"lg:w-full"},_e={class:"border mx-auto px-2 py-2 rounded-md"},ye={class:"lg:grid grid-cols-3"},ke=["for"],Se={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},Ce={key:1,class:"text-center"},De={__name:"index",async setup(Ee){let m,b;const r=U(),a=Y(),w=i(a.mainDevServer),j=i(I.timeSelection),h=([m,b]=F(()=>$fetch(w.value+"/api/library/schedule/booking/list/").catch(o=>o.data)),m=await m,b(),m),d=i({date:null,time:null,updated_at:new Date});let f=i(),_=i([]),x=i(!1),l=i(!0),p=i(!1);const L=i(new Date);let A=i();i(a.user.registrarEmail);const T=i(a.user.developerEmail);i(a.user.testEmail),O(()=>{a.user.isAuthenticated&&(a.user.email===T.value||a.user.email==="monaliza.mugot@lsu.edu.ph"||a.user.email==="marilyn.bejec@lsu.edu.ph"||a.user.email==="applejane.ebarle@lsu.edu.ph"||a.user.email==="janekaren.gudmalin@lsu.edu.ph"||a.user.email==="macy.beniola@lsu.edu.ph"||a.user.email==="lynn.lumacad@lsu.edu.ph"||a.user.email==="zosette.salas@lsu.edu.ph")?(h.filter(function(o){d.value.date=o.date,_.value.push(o.date)}),r.push("/library/dashboard/appointment/set-schedules")):r.push("/_/unauthorized")});const V=o=>{d.value.date=q(o).format("MM-DD-YYYY"),x.value=!1,d.value.time=["-"],setTimeout(()=>{h.filter(function(t){t.date===d.value.date&&(f.value=t.id,d.value.time=t.time,A.value=t.time,x.value=!0)})},100)},y=o=>{p.value=!p.value,o.value=o},$=async()=>{await $fetch(w.value+"/api/library/schedule/booking/"+f.value+"/delete/",{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(async o=>{r.go(),p.value=!p.value})},B=()=>{r.push("/library/dashboard/appointment/set-schedules/create")},N=()=>{r.push("/library/login"),a.removeToken()},R=o=>{r.push("/library/dashboard/appointment/set-schedules/edit/"+o)};return(o,t)=>{const z=M;return c(),u("div",W,[e("div",Z,[C(e("div",ee,[e("div",te,[e("div",se,[t[5]||(t[5]=e("i",{class:"fa fa-user mx-2","aria-hidden":"true"},null,-1)),e("h1",ae,v(s(a).user.email),1)]),e("div",{onClick:t[0]||(t[0]=n=>E(l)?l.value=!s(l):l=!s(l)),class:"w-10 px-1.5 lg:hidden flex"},[e("i",{class:g(["fa text-3xl text-white",s(l)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),t[6]||(t[6]=H('<div class="min-h-[570px]" data-v-1da0df43><div class="w-fit mx-auto mt-5 mb-3" data-v-1da0df43><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSULRC.jpg" class="lg:w-24 w-20 mx-auto rounded-full" data-v-1da0df43></div><div class="text-center" data-v-1da0df43><h2 class="font-bold text-green-800 text-lg" data-v-1da0df43>Learning Resource Center</h2></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1" data-v-1da0df43><a href="/library/dashboard/appointment" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-1da0df43><i class="fa fa-list mr-3" aria-hidden="true" data-v-1da0df43></i> Appointment Lists </a><a href="/library/dashboard/appointment/reports/books" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-1da0df43><i class="fa fa-book mr-3" aria-hidden="true" data-v-1da0df43></i> Available Books </a><a href="/library/dashboard/appointment/set-schedules" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-1da0df43><i class="fa fa-calendar mr-3.5" aria-hidden="true" data-v-1da0df43></i> SET SCHEDULES </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-1da0df43><i class="fa fa-globe mr-3" aria-hidden="true" data-v-1da0df43></i> LSU HOME PAGE </a></div></div>',1))],512),[[D,s(l)]]),e("div",le,[e("div",oe,[e("div",ie,[e("div",de,[e("div",{onClick:t[1]||(t[1]=n=>E(l)?l.value=!s(l):l=!s(l)),class:"w-10 px-1.5"},[e("i",{class:g(["fa text-3xl text-white",s(l)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),e("button",{onClick:N,class:"flex hover:font-bold pt-1"},t[7]||(t[7]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",ne,[e("div",re,[e("div",ue,[e("div",ce,[e("div",pe,[e("div",me,[e("button",{onClick:B,class:"shadow text-center uppercase my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," Add Schedules "),s(x)?(c(),u("div",he,[e("button",{onClick:t[2]||(t[2]=n=>R(s(f))),class:"shadow text-center mx-5 uppercase my-3 px-4 py-1 bg-yellow-500 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," Edit Time "),e("button",{onClick:y,class:"shadow text-center uppercase my-3 px-4 py-1 bg-red-800 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," Removed / Disable ")])):P("",!0)])]),s(h).length>0?(c(),u("div",fe,[e("div",xe,[e("div",ve,[e("div",ge,[t[8]||(t[8]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs ml-5 text-center uppercase"}," Calendar ",-1)),e("div",be,[S(s(J),{modelValue:s(d).date,"onUpdate:modelValue":[t[3]||(t[3]=n=>s(d).date=n),t[4]||(t[4]=n=>V(s(d).date))],inline:"","enable-time-picker":!1,id:"date",name:"date","auto-apply":"",highlight:s(_),"year-range":[2025,2025],"disabled-week-days":[0,7],"week-start":"0","hide-offset-dates":"","min-date":s(L)},null,8,["modelValue","highlight","min-date"])])]),e("div",we,[t[9]||(t[9]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs ml-5 text-center uppercase"}," Select Time ",-1)),e("div",_e,[e("ul",ye,[(c(!0),u(X,null,G(s(j)[0].time,(n,k)=>(c(),u("li",{class:"flex items-center justify-center font-semibold whitespace-nowrap text-center lg:h-7",key:k},[e("label",{for:k,class:g(["lg:text-xs text-[10px]",s(K).find(s(d).time,n)?"text-[#087830]":" text-gray-400"])},v(n._12_hour_format_from)+" - "+v(n._12_hour_format_to),11,ke)]))),128))])])])])]),C(e("div",Se,[t[10]||(t[10]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:$},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:y},"Cancel")])],512),[[D,s(p)]])])):(c(),u("div",Ce," Please Add Schedules, No Results Found! "))])])])])])]),S(z)])}}},Re=Q(De,[["__scopeId","data-v-1da0df43"]]);export{Re as default};
