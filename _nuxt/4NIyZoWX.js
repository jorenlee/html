import{_ as O}from"./DWQfG1Pq.js";import{_ as F}from"./DeouVnHy.js";import{m as N,u as U,r as i,s as J,q as R,c,a as e,v as f,x as v,n as s,b,y as X,z as q,t as g,A as I,F as K,D as P,o as m,J as G}from"./mxn6a8Zp.js";import{s as H}from"./Uh1Scs3X.js";import{X as Q}from"./yeaXRgD0.js";/* empty css        */import{h as _}from"./C5S46NFB.js";import"./5JjjnmY2.js";const W={class:""},Z={class:"flex"},ee={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},te={class:"w-full"},se={class:"bg-green-800"},ae={class:"flex mx-auto justify-between py-2 px-3.5"},le={class:"flex items-center text-white gap-5"},oe={class:"flex -mt-1"},ie={class:"text-sm"},ne={class:""},re={class:"lg:w-full p-5"},de={class:"h-full shadow-lg"},ue={class:""},ce={class:"w-full"},me={class:""},he={class:"mx-10 flex items-center"},pe={key:0,class:"bg-green-700 text-xs text-white font-bold py-2 px-4 rounded-lg uppercase cursor-pointer"},fe={key:1,class:"bg-gray-300 text-xs text-white font-bold py-2 px-4 rounded-lg uppercase cursor-not-allowed"},_e={class:"lg:flex"},xe={class:"w-fit mx-auto mb-10 h-full"},ve={class:""},be={class:"text-center mt-5 text-red-700"},ge={class:"w-fit mx-auto mb-5"},we={class:"w-11/12 mx-auto px-3 py-2 shadow-sm border"},ye={class:"text-xs flex flex-wrap justify-center"},De=["value"],ke={class:"",for:"time"},Te={__name:"create",async setup(Se){let h,w;const u=N(),a=U(),y=i(a.mainDevServer),D=i(H.timeSelection),l=i({date:null,time:D._rawValue[0].time,updated_at:new Date});let k=i([]),d=i(!1),n=i(!0);const x=i(!1),p=i(!0),A=i(new Date),S=([h,w]=J(()=>$fetch(y.value+"/api/library/schedule/booking/list/").catch(o=>o.data)),h=await h,w(),h),M=i(a.user.developerEmail),C=()=>{S.filter(function(o){l.value.date=o.date,k.value.push(o.date)})};R(()=>{a.user.isAuthenticated&&(a.user.email===M.value||a.user.email==="monaliza.mugot@lsu.edu.ph"||a.user.email==="marilyn.bejec@lsu.edu.ph"||a.user.email==="applejane.ebarle@lsu.edu.ph"||a.user.email==="janekaren.gudmalin@lsu.edu.ph"||a.user.email==="macy.beniola@lsu.edu.ph"||a.user.email==="lynn.lumacad@lsu.edu.ph")?(C(),u.push("/_/panels/library/appointment/set-schedules/create")):u.push("/_/unauthorized")});const B=()=>{S.filter(function(o){l.value.time=o.time,o.date===l.value.date&&(d.value=!1)})},Y=o=>{l.value.date=_(o).format("MM-DD-YYYY");let t=_(_().toDate()).format("MM-DD-YYYY");x.value=!1,p.value=!0,d.value=!0,l.value.date===t?(d.value=!1,x.value=!0,p.value=!1):_(l.value.date).isBefore(t)?(d.value=!1,p.value=!1):B()},j=()=>{u.push("/_/panels/library/appointment/set-schedules")},V=()=>{u.push("/_/lib-admin"),a.removeToken()},z=async()=>{await $fetch(y.value+"/api/library/schedule/booking/create/",{method:"POST",headers:{Authorization:a.user.token,"Content-Type":"application/json"},body:l.value}).then(async o=>{C(),setTimeout(()=>{u.go()},1e3),d.value=!0})};return(o,t)=>{const T=O,$=F;return m(),c("div",W,[e("div",Z,[f(e("div",ee,[b(T)],512),[[v,s(n)]]),e("div",te,[e("div",se,[e("div",ae,[e("div",le,[e("div",{onClick:t[0]||(t[0]=r=>X(n)?n.value=!s(n):n=!s(n)),class:"w-10 px-1.5"},[e("i",{class:q(["fa text-3xl text-white",s(n)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",oe,[t[4]||(t[4]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",ie,g(s(a).user.email),1)])]),e("button",{onClick:V,class:"flex hover:font-bold pt-1"},t[5]||(t[5]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",ne,[e("div",re,[e("div",de,[e("div",ue,[e("div",{class:"w-full shadow mb-10"},[e("div",{class:"px-3"},[e("button",{onClick:j,class:"shadow text-center capitalize my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," BACK ")])]),e("div",ce,[e("div",me,[e("form",{class:"flex mx-auto",onSubmit:I(z,["prevent"])},[e("div",he,[s(d)?(m(),c("button",pe," ADD ")):(m(),c("div",fe," ADD "))]),e("div",_e,[e("div",xe,[t[6]||(t[6]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Select Date to Add Schedule ",-1)),e("div",ve,[b(s(Q),{modelValue:s(l).date,"onUpdate:modelValue":[t[1]||(t[1]=r=>s(l).date=r),t[2]||(t[2]=r=>Y(s(l).date))],inline:"","enable-time-picker":!1,id:"date",name:"date","auto-apply":"",highlight:s(k),"year-range":[2025,2025],"disabled-week-days":[0,7],"week-start":"0","hide-offset-dates":"","min-date":s(A)},null,8,["modelValue","highlight","min-date"])]),f(e("div",be," Sorry! Can't Add Current Date ",512),[[v,s(x)]])]),f(e("div",ge,[e("div",we,[t[7]||(t[7]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Time ",-1)),e("ul",ye,[(m(!0),c(K,null,P(s(D)[0].time,(r,L)=>(m(),c("li",{class:"my-2 lg:flex justify-center font-bold text-black mx-10",key:L},[f(e("input",{id:"time",type:"checkbox",name:"time",value:r,class:"mr-2 mt-0.5 available","onUpdate:modelValue":t[3]||(t[3]=E=>s(l).time=E)},null,8,De),[[G,s(l).time]]),e("label",ke,g(r._12_hour_format_from)+" - "+g(r._12_hour_format_to),1)]))),128))])])],512),[[v,s(p)]])])],32)])])])])])])])]),b($)])}}};export{Te as default};
