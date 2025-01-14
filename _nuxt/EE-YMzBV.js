import{_ as O}from"./CSLAArwD.js";import{_ as F}from"./LsjlMaKL.js";import{u as N,f as U,r as i,m as I,g as R,c,a as e,h,v,e as s,b,i as X,n as q,t as g,j as J,F as K,q as P,o as m,A as G}from"./5SbS4Jb1.js";import{s as H}from"./Uh1Scs3X.js";import{X as Q}from"./CFN1lZZ3.js";/* empty css        */import{h as _}from"./C5S46NFB.js";import"./5JjjnmY2.js";import{_ as W}from"./DlAUqK2U.js";const Z={class:""},ee={class:"flex"},te={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},se={class:"w-full"},ae={class:"bg-green-800"},le={class:"flex mx-auto justify-between py-2 px-3.5"},oe={class:"flex items-center text-white gap-5"},ie={class:"flex -mt-1"},ne={class:"text-sm"},re={class:""},de={class:"lg:w-full p-5"},ue={class:"h-full shadow-lg"},ce={class:""},me={class:"w-full"},pe={class:""},fe={class:"mx-10 flex items-center"},he={key:0,class:"bg-green-700 text-xs text-white font-bold py-2 px-4 rounded-lg uppercase cursor-pointer"},_e={key:1,class:"bg-gray-300 text-xs text-white font-bold py-2 px-4 rounded-lg uppercase cursor-not-allowed"},xe={class:"lg:flex"},ve={class:"w-fit mx-auto mb-10 h-full"},be={class:""},ge={class:"text-center mt-5 text-red-700"},we={class:"w-fit mx-auto mb-5"},ye={class:"w-11/12 mx-auto px-3 py-2 shadow-sm border"},De={class:"text-xs flex flex-wrap justify-center"},ke=["value"],Se={class:"",for:"time"},Ce={__name:"create",async setup(Ae){let p,w;const u=N(),a=U(),y=i(a.mainDevServer),D=i(H.timeSelection),l=i({date:null,time:D._rawValue[0].time,updated_at:new Date});let k=i([]),d=i(!1),n=i(!0);const x=i(!1),f=i(!0),A=i(new Date),S=([p,w]=I(()=>$fetch(y.value+"/api/library/schedule/booking/list/").catch(o=>o.data)),p=await p,w(),p),M=i(a.user.developerEmail),C=()=>{S.filter(function(o){l.value.date=o.date,k.value.push(o.date)})};R(()=>{a.user.isAuthenticated&&(a.user.email===M.value||a.user.email==="monaliza.mugot@lsu.edu.ph"||a.user.email==="marilyn.bejec@lsu.edu.ph"||a.user.email==="applejane.ebarle@lsu.edu.ph"||a.user.email==="janekaren.gudmalin@lsu.edu.ph"||a.user.email==="macy.beniola@lsu.edu.ph"||a.user.email==="lynn.lumacad@lsu.edu.ph")?(C(),u.push("/_/panels/library/appointment/set-schedules/create")):u.push("/_/unauthorized")});const j=()=>{S.filter(function(o){l.value.time=o.time,o.date===l.value.date&&(d.value=!1)})},B=o=>{l.value.date=_(o).format("MM-DD-YYYY");let t=_(_().toDate()).format("MM-DD-YYYY");x.value=!1,f.value=!0,d.value=!0,l.value.date===t?(d.value=!1,x.value=!0,f.value=!1):_(l.value.date).isBefore(t)?(d.value=!1,f.value=!1):j()},Y=()=>{u.push("/_/panels/library/appointment/set-schedules")},V=()=>{u.push("/_/lib-admin"),a.removeToken()},$=async()=>{await $fetch(y.value+"/api/library/schedule/booking/create/",{method:"POST",headers:{Authorization:a.user.token,"Content-Type":"application/json"},body:l.value}).then(async o=>{C(),u.go(),d.value=!0})};return(o,t)=>{const z=O,L=F;return m(),c("div",Z,[e("div",ee,[h(e("div",te,[b(z)],512),[[v,s(n)]]),e("div",se,[e("div",ae,[e("div",le,[e("div",oe,[e("div",{onClick:t[0]||(t[0]=r=>X(n)?n.value=!s(n):n=!s(n)),class:"w-10 px-1.5"},[e("i",{class:q(["fa text-3xl text-white",s(n)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",ie,[t[4]||(t[4]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",ne,g(s(a).user.email),1)])]),e("button",{onClick:V,class:"flex hover:font-bold pt-1"},t[5]||(t[5]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",re,[e("div",de,[e("div",ue,[e("div",ce,[e("div",{class:"w-full shadow mb-10"},[e("div",{class:"px-3"},[e("button",{onClick:Y,class:"shadow text-center capitalize my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," BACK ")])]),e("div",me,[e("div",pe,[e("form",{class:"flex mx-auto",onSubmit:J($,["prevent"])},[e("div",fe,[s(d)?(m(),c("button",he," ADD ")):(m(),c("div",_e," ADD "))]),e("div",xe,[e("div",ve,[t[6]||(t[6]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Select Date to Add Schedule ",-1)),e("div",be,[b(s(Q),{modelValue:s(l).date,"onUpdate:modelValue":[t[1]||(t[1]=r=>s(l).date=r),t[2]||(t[2]=r=>B(s(l).date))],inline:"","enable-time-picker":!1,id:"date",name:"date","auto-apply":"",highlight:s(k),"year-range":[2025,2025],"disabled-week-days":[0,7],"week-start":"0","hide-offset-dates":"","min-date":s(A)},null,8,["modelValue","highlight","min-date"])]),h(e("div",ge," Sorry! Can't Add Current Date ",512),[[v,s(x)]])]),h(e("div",we,[e("div",ye,[t[7]||(t[7]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Time ",-1)),e("ul",De,[(m(!0),c(K,null,P(s(D)[0].time,(r,T)=>(m(),c("li",{class:"my-2 lg:flex justify-center font-bold text-black mx-10",key:T},[h(e("input",{id:"time",type:"checkbox",name:"time",value:r,class:"mr-2 mt-0.5 available","onUpdate:modelValue":t[3]||(t[3]=E=>s(l).time=E)},null,8,ke),[[G,s(l).time]]),e("label",Se,g(r._12_hour_format_from)+" - "+g(r._12_hour_format_to),1)]))),128))])])],512),[[v,s(f)]])])],32)])])])])])])])]),b(L)])}}},Ee=W(Ce,[["__scopeId","data-v-a51e3745"]]);export{Ee as default};
