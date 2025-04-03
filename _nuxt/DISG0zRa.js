import{_ as $}from"./13-ixVC-.js";import{e as z,u as B,r as u,s as T,g as U,c as n,a as e,b as A,n as c,f as a,i as O,t as h,j as M,F as x,l as g,o as r,k as S}from"./dVjaznPK.js";import{h as R}from"./C5S46NFB.js";import{_ as Y}from"./5JjjnmY2.js";import{X as F}from"./CUxxZMaK.js";/* empty css        */import{_ as G}from"./DlAUqK2U.js";const H=[{time:["08:00 AM - 08:20 AM","08:20 AM - 08:40 AM","08:40 AM - 09:00 AM","09:00 AM - 09:20 AM","09:20 AM - 09:40 AM","09:40 AM - 10:00 AM","10:00 AM - 10:20 AM","10:20 AM - 10:40 AM","10:40 AM - 11:00 AM","11:00 AM - 11:20 AM","11:20 AM - 11:40 AM","11:40 AM - 12:00 NN","12:00 NN - 12:20 PM","12:20 PM - 12:40 PM","12:40 PM - 01:00 PM","01:00 PM - 01:20 PM","01:20 PM - 01:40 PM","01:40 PM - 02:00 PM","02:00 PM - 02:20 PM","02:20 PM - 02:40 PM","02:40 PM - 03:00 PM","03:00 PM - 03:20 PM","03:20 PM - 03:40 PM","03:40 PM - 04:00 PM","04:00 PM - 04:20 PM","04:20 PM - 04:40 PM","04:40 PM - 05:00 PM"]}],X={timeSelection:H},I={class:""},J={class:"flex"},q={class:"flex items-center justify-center text-white bg-green-900 lg:py-[16px] py-[8px]"},K={class:"flex items-center w-full px-2"},Q={class:"text-sm"},W={class:"w-full"},Z={class:"bg-green-700"},ee={class:"lg:flex mx-auto justify-between py-2 px-3.5"},te={class:"lg:flex items-center text-white gap-5"},se={class:"border pb-5 m-5"},ae={class:"px-2 lg:flex gap-3"},le={class:"w-fit mb-1"},ie={class:""},oe={class:""},ne={class:"w-full relative"},re={class:"w-full border rounded-md"},de={class:"grid grid-cols-3 justify-center gap-2 p-2"},ue={class:""},ce={class:"flex justify-between w-full"},pe={class:""},be={key:0},me={class:"text-xs -mt-0.5 mb-3 block"},he={class:"text-xs"},xe={class:"relative"},ge={key:0},ve={class:""},fe=["onClick"],_e={__name:"index",async setup(Me){let v,w;const f=z(),l=B(),j=u(l.mainDevServer),y=([v,w]=T(()=>$fetch(j.value+"/api/library/booking/list/").catch(d=>d.data)),v=await v,w(),v);let p=u(),_=u([]),k=u([]),m=u([]);const C=u(X.timeSelection),L=u(l.user.developerEmail);U(()=>{l.user.isAuthenticated&&(l.user.email===L.value||l.user.email==="monaliza.mugot@lsu.edu.ph"||l.user.email==="marilyn.bejec@lsu.edu.ph"||l.user.email==="applejane.ebarle@lsu.edu.ph"||l.user.email==="janekaren.gudmalin@lsu.edu.ph"||l.user.email==="macy.beniola@lsu.edu.ph"||l.user.email==="lynn.lumacad@lsu.edu.ph"||l.user.email==="zosette.salas@lsu.edu.ph")?(y.filter(function(d){k.value.push(d.booking_date)}),f.push("/library/dashboard/appointment"),P()):f.push("/_/unauthorized")});const P=d=>{p.value=R(d).format("MM-DD-YYYY"),_.value=[],m.value=["-"],setTimeout(()=>{y.filter(function(t){t.booking_date===p.value&&(_.value.push(t.booking_time),m.value.push(t))})},100)},D=d=>{f.push("/library/dashboard/appointment/edit/"+d)};let i=u(!0);const E=()=>{f.push("/library/login"),l.removeToken()};return(d,t)=>{const N=$;return r(),n("div",I,[e("div",J,[e("div",{class:c(["pb-3 lg:w-3/12 bg-gray-100 z-10 w-full lg:block lg:static absolute",a(i)?"lg:hidden":""])},[e("div",q,[e("div",K,[t[5]||(t[5]=e("i",{class:"fa fa-user mx-2","aria-hidden":"true"},null,-1)),e("h1",Q,h(a(l).user.email),1)]),e("div",{onClick:t[0]||(t[0]=o=>M(i)?i.value=!a(i):i=!a(i)),class:"w-10 px-1.5 lg:hidden flex"},[e("i",{class:c(["fa text-3xl text-white",a(i)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),t[6]||(t[6]=O('<div class="min-h-[570px]" data-v-baaab902><div class="w-fit mx-auto mt-5 mb-3" data-v-baaab902><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSULRC.jpg" class="lg:w-24 w-20 mx-auto rounded-full" data-v-baaab902></div><div class="text-center" data-v-baaab902><h2 class="font-bold text-green-800 text-lg" data-v-baaab902>Learning Resource Center</h2></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1" data-v-baaab902><a href="/library/dashboard/appointment" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-baaab902><i class="fa fa-list mr-3" aria-hidden="true" data-v-baaab902></i> Appointment Lists </a><a href="/library/dashboard/appointment/reports/books" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-baaab902><i class="fa fa-book mr-3" aria-hidden="true" data-v-baaab902></i> Available Books </a><a href="/library/dashboard/appointment/set-schedules" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-baaab902><i class="fa fa-calendar mr-3.5" aria-hidden="true" data-v-baaab902></i> SET SCHEDULES </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-baaab902><i class="fa fa-globe mr-3" aria-hidden="true" data-v-baaab902></i> LSU HOME PAGE </a></div></div>',1))],2),e("div",W,[e("div",Z,[e("div",ee,[e("div",te,[e("div",{onClick:t[1]||(t[1]=o=>M(i)?i.value=!a(i):i=!a(i)),class:"w-10 px-1.5"},[e("i",{class:c(["fa text-3xl text-white",a(i)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),e("button",{onClick:t[2]||(t[2]=o=>E()),class:"flex hover:font-bold pt-1"},t[7]||(t[7]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",se,[e("div",null,[t[10]||(t[10]=e("div",{class:"py-2 mb-5 text-center bg-green-900 text-white uppercase text-xs tracking-widest"},"Appointments ",-1)),e("div",ae,[e("div",le,[e("div",ie,[e("div",oe,[A(a(F),{modelValue:a(p),"onUpdate:modelValue":[t[3]||(t[3]=o=>M(p)?p.value=o:p=o),t[4]||(t[4]=o=>P(a(p)))],inline:"","enable-time-picker":!1,name:"date","auto-apply":"",highlight:a(k),"year-range":[2025,2025],"disabled-week-days":[0,7],"week-start":"0"},null,8,["modelValue","highlight"])])])]),e("div",ne,[e("div",re,[e("ul",de,[(r(!0),n(x,null,g(C.value[0].time,(o,V)=>(r(),n("li",{class:"font-bold border p-3 min-h-[110px]",key:V},[e("div",ue,[e("div",ce,[e("div",pe,[(r(!0),n(x,null,g(a(m),(s,b)=>(r(),n("div",{key:b,class:c({"text-red-700":s.status==="pending","text-yellow-500":s.status==="reserved","text-green-900":s.status==="received","text-blue-300":s.status==="returned"})},[o===s.booking_time?(r(),n("span",be,[e("span",me,h(s.booking_time),1)])):S("",!0)],2))),128)),e("div",{class:c(["text-xs w-full",a(Y).includes(a(_),o)?"hidden":""])},h(o),3)])]),e("div",he,[e("div",xe,[(r(!0),n(x,null,g(a(m),(s,b)=>(r(),n("p",{key:b},[e("span",{class:c(o===s.booking_time?"":"hidden")},h(s.booking_date),3)]))),128))]),(r(!0),n(x,null,g(a(m),(s,b)=>(r(),n("p",{key:b},[o===s.booking_time?(r(),n("span",ge,[e("span",null,h(s.email),1),t[8]||(t[8]=e("br",null,null,-1)),e("span",null,h(s.borrower_category),1)])):S("",!0)]))),128)),(r(!0),n(x,null,g(a(m),(s,b)=>(r(),n("div",{key:b,class:""},[e("span",{class:c(["",o===s.booking_time?"":"hidden"])},[e("div",ve,[e("button",{onClick:we=>D(s.id),class:c(["w-full py-0.5 rounded-sm flex items-center gap-10 px-3 mt-3 justify-between",{"bg-red-700":s.status==="pending","bg-yellow-500":s.status==="reserved","bg-green-900":s.status==="received","bg-blue-300":s.status==="returned"}])},t[9]||(t[9]=[e("span",{class:"text-white"}," Go To Details",-1),e("i",{class:"fa fa-chevron-circle-right text-white rounded-lg uppercase text-sm","aria-hidden":"true"},null,-1)]),10,fe)])],2)]))),128))])])]))),128))])])])])])])])]),A(N)])}}},Le=G(_e,[["__scopeId","data-v-baaab902"]]);export{Le as default};
