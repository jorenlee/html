import{_ as z}from"./CTFre9FS.js";import{_ as F}from"./DLVRN9r2.js";import{m as R,u as O,r as o,s as U,q as X,c as u,a as e,v as D,x as C,n as s,b as x,y as q,z as S,t as v,G,F as I,E as J,o as c}from"./Dh0Ibvce.js";import{s as P}from"./Uh1Scs3X.js";import{X as H}from"./DHWFrPed.js";/* empty css        */import{h as K}from"./C5S46NFB.js";import{_ as Q}from"./5JjjnmY2.js";import{_ as W}from"./DlAUqK2U.js";const Z={class:""},ee={class:"flex"},te={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},se={class:"w-full"},le={class:"bg-green-800"},ae={class:"flex mx-auto justify-between py-2 px-3.5"},oe={class:"flex items-center text-white gap-5"},ie={class:"flex -mt-1"},ne={class:"text-sm"},de={class:""},re={class:"lg:w-full p-5"},ue={class:"h-full shadow-lg pb-10"},ce={class:"relative"},me={class:"w-full mb-10"},pe={class:"flex shadow px-3 justify-between"},he={key:0,class:""},fe={key:0,class:""},_e={class:"w-11/12 mx-auto"},xe={class:"lg:flex"},ve={class:"lg:w-fit mr-14 mb-10 w-fitmx-auto h-full"},ge={class:""},be={class:"lg:w-full"},we={class:"border mx-auto px-5 py-5 rounded-md"},ye={class:"lg:grid grid-cols-3"},ke=["for"],De={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},Ce={key:1,class:"text-center"},Se={__name:"index",async setup(Ee){let p,g;const r=R(),l=O(),b=o(l.mainDevServer),E=o(P.timeSelection),h=([p,g]=U(()=>$fetch(b.value+"/api/library/schedule/booking/list/").catch(a=>a.data)),p=await p,g(),p),i=o({date:null,time:null,updated_at:new Date});let f=o(),w=o([]),_=o(!1),d=o(!0),m=o(!1);const T=o(new Date);let $=o();o(l.user.registrarEmail);const j=o(l.user.developerEmail);o(l.user.testEmail),X(()=>{l.user.isAuthenticated&&(l.user.email===j.value||l.user.email==="monaliza.mugot@lsu.edu.ph"||l.user.email==="marilyn.bejec@lsu.edu.ph"||l.user.email==="applejane.ebarle@lsu.edu.ph"||l.user.email==="janekaren.gudmalin@lsu.edu.ph"||l.user.email==="macy.beniola@lsu.edu.ph"||l.user.email==="lynn.lumacad@lsu.edu.ph")?(h.filter(function(a){i.value.date=a.date,w.value.push(a.date)}),r.push("/_/panels/library/appointment/set-schedules")):r.push("/_/unauthorized")});const A=a=>{i.value.date=K(a).format("MM-DD-YYYY"),_.value=!1,i.value.time=["-"],setTimeout(()=>{h.filter(function(t){t.date===i.value.date&&(f.value=t.id,i.value.time=t.time,$.value=t.time,_.value=!0)})},100)},y=a=>{m.value=!m.value,a.value=a},B=async()=>{await $fetch(b.value+"/api/library/schedule/booking/"+f.value+"/delete/",{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(async a=>{r.go(),m.value=!m.value})},L=()=>{r.push("/_/panels/library/appointment/set-schedules/create")},V=()=>{r.push("/_/lib-admin"),l.removeToken()},M=a=>{r.push("/_/panels/library/appointment/set-schedules/edit/"+a)};return(a,t)=>{const N=z,Y=F;return c(),u("div",Z,[e("div",ee,[D(e("div",te,[x(N)],512),[[C,s(d)]]),e("div",se,[e("div",le,[e("div",ae,[e("div",oe,[e("div",{onClick:t[0]||(t[0]=n=>q(d)?d.value=!s(d):d=!s(d)),class:"w-10 px-1.5"},[e("i",{class:S(["fa text-3xl text-white",s(d)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",ie,[t[4]||(t[4]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",ne,v(s(l).user.email),1)])]),e("button",{onClick:V,class:"flex hover:font-bold pt-1"},t[5]||(t[5]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",de,[e("div",re,[e("div",ue,[e("div",ce,[e("div",me,[e("div",pe,[e("button",{onClick:L,class:"shadow text-center uppercase my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," Add Schedules "),s(_)?(c(),u("div",he,[e("button",{onClick:t[1]||(t[1]=n=>M(s(f))),class:"shadow text-center mx-5 uppercase my-3 px-4 py-1 bg-yellow-500 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," Edit Time "),e("button",{onClick:y,class:"shadow text-center uppercase my-3 px-4 py-1 bg-red-800 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," Removed / Disable ")])):G("",!0)])]),s(h).length>0?(c(),u("div",fe,[e("div",_e,[e("div",xe,[e("div",ve,[t[6]||(t[6]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs ml-5 text-center uppercase"}," Calendar ",-1)),e("div",ge,[x(s(H),{modelValue:s(i).date,"onUpdate:modelValue":[t[2]||(t[2]=n=>s(i).date=n),t[3]||(t[3]=n=>A(s(i).date))],inline:"","enable-time-picker":!1,id:"date",name:"date","auto-apply":"",highlight:s(w),"year-range":[2025,2025],"disabled-week-days":[0,7],"week-start":"0","hide-offset-dates":"","min-date":s(T)},null,8,["modelValue","highlight","min-date"])])]),e("div",be,[t[7]||(t[7]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs ml-5 text-center uppercase"}," Select Time ",-1)),e("div",we,[e("ul",ye,[(c(!0),u(I,null,J(s(E)[0].time,(n,k)=>(c(),u("li",{class:"flex items-center mb-3 font-semibold whitespace-nowrap lg:w-[170px] lg:text-left text-center lg:pl-6 pl-3.5",key:k},[e("label",{for:k,class:S(["lg:text-xs text-[10px]",s(Q).find(s(i).time,n)?"text-[#087830]":" text-gray-400"])},v(n._12_hour_format_from)+" - "+v(n._12_hour_format_to),11,ke)]))),128))])])])])]),D(e("div",De,[t[8]||(t[8]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:B},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:y},"Cancel")])],512),[[C,s(m)]])])):(c(),u("div",Ce," Please Add Schedules, No Results Found! "))])])])])])]),x(Y)])}}},Ye=W(Se,[["__scopeId","data-v-0f618377"]]);export{Ye as default};
