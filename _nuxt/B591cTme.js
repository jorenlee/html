import{_ as O}from"./B5o8oL3p.js";import{e as N,u as R,r,s as F,g as H,c,a as e,b as C,h,v as b,f as s,i as P,t as g,j as A,n as j,x as X,F as G,l as I,o as m,M as J}from"./CIMSVYR2.js";import{s as K}from"./BEx1_QdV.js";import{X as q}from"./pFadSK3T.js";/* empty css        */import{h as x}from"./C5S46NFB.js";import"./5JjjnmY2.js";const Q={class:""},W={class:"flex"},Z={class:"pb-3 lg:w-3/12 bg-gray-100 z-10 w-full lg:block lg:static absolute"},ee={class:"flex items-center justify-center text-white bg-green-900 lg:py-[16px] py-[8px]"},te={class:"flex items-center w-full px-2"},se={class:"text-sm"},ae={class:"w-full"},le={class:"bg-green-800"},oe={class:"flex mx-auto w-full justify-between py-2 px-3.5"},ie={class:"flex items-center text-white gap-5"},re={class:""},ne={class:"lg:w-full p-5"},de={class:"h-full shadow-lg"},ue={class:""},ce={class:"w-full"},me={class:"w-full"},pe={class:"mr-5 flex items-center"},fe={key:0,class:"bg-green-700 text-xs text-white font-bold py-2 px-4 rounded-lg uppercase cursor-pointer"},he={key:1,class:"bg-gray-300 text-xs text-white font-bold py-2 px-4 rounded-lg uppercase cursor-not-allowed"},xe={class:"lg:flex w-full gap-x-5"},ve={class:"w-fit mx-auto mb-10 h-full"},be={class:""},ge={class:"text-center mt-5 text-red-700"},we={class:"w-full mx-auto mb-5"},_e={class:"w-full px-3 py-2 shadow-sm border"},ye={class:"grid lg:grid-cols-3"},De=["value"],ke={class:"",for:"time"},Ve={__name:"create",async setup(Se){let p,w;const u=N(),a=R(),_=r(a.mainDevServer),y=r(K.timeSelection),o=r({date:null,time:y._rawValue[0].time,updated_at:new Date});let D=r([]),d=r(!1),l=r(!0);const v=r(!1),f=r(!0),L=r(new Date),k=([p,w]=F(()=>$fetch(_.value+"/api/library/schedule/booking/list/").catch(i=>i.data)),p=await p,w(),p),M=r(a.user.developerEmail),S=()=>{k.filter(function(i){o.value.date=i.date,D.value.push(i.date)})};H(()=>{a.user.isAuthenticated&&(a.user.email===M.value||a.user.email==="monaliza.mugot@lsu.edu.ph"||a.user.email==="marilyn.bejec@lsu.edu.ph"||a.user.email==="applejane.ebarle@lsu.edu.ph"||a.user.email==="janekaren.gudmalin@lsu.edu.ph"||a.user.email==="macy.beniola@lsu.edu.ph"||a.user.email==="lynn.lumacad@lsu.edu.ph"||a.user.email==="zosette.salas@lsu.edu.ph")?(S(),u.push("/library/dashboard/appointment/set-schedules/create")):u.push("/_/unauthorized")});const E=()=>{k.filter(function(i){o.value.time=i.time,i.date===o.value.date&&(d.value=!1)})},B=i=>{o.value.date=x(i).format("MM-DD-YYYY");let t=x(x().toDate()).format("MM-DD-YYYY");v.value=!1,f.value=!0,d.value=!0,o.value.date===t?(d.value=!1,v.value=!0,f.value=!1):x(o.value.date).isBefore(t)?(d.value=!1,f.value=!1):E()},V=()=>{u.push("/library/dashboard/appointment/set-schedules")},Y=()=>{u.push("/_/lib-admin"),a.removeToken()},z=async()=>{await $fetch(_.value+"/api/library/schedule/booking/create/",{method:"POST",headers:{Authorization:a.user.token,"Content-Type":"application/json"},body:o.value}).then(async i=>{S(),setTimeout(()=>{u.go()},1e3),d.value=!0})};return(i,t)=>{const T=O;return m(),c("div",Q,[e("div",W,[h(e("div",Z,[e("div",ee,[e("div",te,[t[5]||(t[5]=e("i",{class:"fa fa-user mx-2","aria-hidden":"true"},null,-1)),e("h1",se,g(s(a).user.email),1)]),e("div",{onClick:t[0]||(t[0]=n=>A(l)?l.value=!s(l):l=!s(l)),class:"w-10 px-1.5 lg:hidden flex"},[e("i",{class:j(["fa text-3xl text-white",s(l)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),t[6]||(t[6]=P('<div class="min-h-[570px]"><div class="w-fit mx-auto mt-5 mb-3"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSULRC.jpg" class="lg:w-24 w-20 mx-auto rounded-full"></div><div class="text-center"><h2 class="font-bold text-green-800 text-lg">Learning Resource Center</h2></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1"><a href="/library/dashboard/appointment" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-list mr-3" aria-hidden="true"></i> Appointment Lists </a><a href="/library/dashboard/appointment/reports/books" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-book mr-3" aria-hidden="true"></i> Available Books </a><a href="/library/dashboard/appointment/set-schedules" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-calendar mr-3.5" aria-hidden="true"></i> SET SCHEDULES </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-globe mr-3" aria-hidden="true"></i> LSU HOME PAGE </a></div></div>',1))],512),[[b,s(l)]]),e("div",ae,[e("div",le,[e("div",oe,[e("div",ie,[e("div",{onClick:t[1]||(t[1]=n=>A(l)?l.value=!s(l):l=!s(l)),class:"w-10 px-1.5"},[e("i",{class:j(["fa text-3xl text-white",s(l)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),e("button",{onClick:Y,class:"flex hover:font-bold pt-1"},t[7]||(t[7]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",re,[e("div",ne,[e("div",de,[e("div",ue,[e("div",{class:"w-full shadow mb-10"},[e("div",{class:"px-3"},[e("button",{onClick:V,class:"shadow text-center capitalize my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," BACK ")])]),e("div",ce,[e("div",me,[e("form",{class:"flex mx-auto w-full px-4",onSubmit:X(z,["prevent"])},[e("div",pe,[s(d)?(m(),c("button",fe," ADD ")):(m(),c("div",he," ADD "))]),e("div",xe,[e("div",ve,[t[8]||(t[8]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Select Date to Add Schedule ",-1)),e("div",be,[C(s(q),{modelValue:s(o).date,"onUpdate:modelValue":[t[2]||(t[2]=n=>s(o).date=n),t[3]||(t[3]=n=>B(s(o).date))],inline:"","enable-time-picker":!1,id:"date",name:"date","auto-apply":"",highlight:s(D),"year-range":[2025,2025],"disabled-week-days":[0,7],"week-start":"0","hide-offset-dates":"","min-date":s(L)},null,8,["modelValue","highlight","min-date"])]),h(e("div",ge," Sorry! Can't Add Current Date ",512),[[b,s(v)]])]),h(e("div",we,[e("div",_e,[t[9]||(t[9]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Time ",-1)),e("ul",ye,[(m(!0),c(G,null,I(s(y)[0].time,(n,U)=>(m(),c("li",{class:"my-2 lg:flex justify-center font-bold text-black mx-5 w-full text-xs",key:U},[h(e("input",{id:"time",type:"checkbox",name:"time",value:n,class:"mr-2 mt-0.5 available","onUpdate:modelValue":t[4]||(t[4]=$=>s(o).time=$)},null,8,De),[[J,s(o).time]]),e("label",ke,g(n._12_hour_format_from)+" - "+g(n._12_hour_format_to),1)]))),128))])])],512),[[b,s(f)]])])],32)])])])])])])])]),C(T)])}}};export{Ve as default};
