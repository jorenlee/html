import{_ as N}from"./BH3APOg-.js";import{e as R,u as $,r as i,g as z,c as d,a as e,b as U,h,v as b,f as l,i as _,t as a,j as k,n as x,k as F,F as I,l as P,o as c}from"./DbPEojKM.js";import{_ as V}from"./5JjjnmY2.js";import"./C5S46NFB.js";const M={class:""},O={class:"flex"},q={class:"pb-3 lg:w-3/12 bg-gray-100 z-10 w-full lg:block lg:static absolute"},H={class:"flex items-center justify-center text-white bg-green-900 lg:py-[16px] py-[8px]"},Y={class:"flex items-center w-full px-2"},G={class:"text-sm"},W={class:"w-full min-h-screen"},J={class:"bg-green-800"},K={class:"lg:flex mx-auto justify-between py-2 px-3.5"},Q={class:"lg:flex items-center text-white lg:gap-5"},X={class:"w-full p-5"},Z={class:"text-xs text-center w-full px-2 py-1 bg-red-600 text-white capitalized my-3"},ee={class:""},te={class:"appointment-lists shadow mx-auto text-xs"},se={class:""},le={key:0,class:"w-full rows"},re={class:"p-2 lg:w-10 flex items-center justify-evenly border-r border-gray-200 h-20"},oe={class:"p-2 lg:w-24 flex items-center justify-evenly border-r border-gray-200 h-20"},ae={class:"p-2 lg:w-40 flex items-center justify-evenly border-r border-gray-200 h-20"},ie={class:"p-2 lg:w-44 flex items-center justify-evenly border-r border-gray-200 h-20"},ne={class:"p-2 lg:w-28 flex items-center justify-evenly border-r border-gray-200 h-20"},de={class:"p-2 lg:w-24 flex items-center justify-evenly border-r border-gray-200 h-20"},ce={class:"p-2 lg:w-24 flex items-center justify-evenly border-r border-gray-200 h-20"},ue={class:"p-2 lg:w-24 flex items-center justify-evenly border-r border-gray-200 h-20"},pe={class:"p-2 lg:w-24 flex items-center justify-evenly border-r border-gray-200 h-20"},ge={class:"p-2 lg:w-24 flex items-center justify-evenly border-r border-gray-200 h-20"},xe={class:"p-2 lg:w-16 flex items-center justify-evenly border-r border-gray-200 h-20"},fe={class:"flex items-center font-bold justify-evenly h-20 p-1 lg:w-20"},he=["onClick"],be=["onClick"],me={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},ye={key:1,class:"itallic text-gray-400 text-center p-1"},Ce={__name:"index",setup(ve){const g=R(),r=$(),m=i(r.mainDevServer),j=i(r.user.developerEmail);let o=i(!0),u=i(!1),f=i(!1),y=i();const v=n=>{u.value=!u.value,y.value=n,console.log(n)},C=i(m.value+"/api/library/reports/book/list/"),S=i(m.value+"/api/library/reports/book/delete/");let p=i(0);setTimeout(async()=>{p.value=await $fetch(C.value).catch(n=>n.data)||0},2e3),z(async()=>{r.user.isAuthenticated&&(r.user.email===j.value||r.user.email==="monaliza.mugot@lsu.edu.ph"||r.user.email==="marilyn.bejec@lsu.edu.ph"||r.user.email==="applejane.ebarle@lsu.edu.ph"||r.user.email==="janekaren.gudmalin@lsu.edu.ph"||r.user.email==="macy.beniola@lsu.edu.ph"||r.user.email==="lynn.lumacad@lsu.edu.ph"||r.user.email==="zosette.salas@lsu.edu.ph")&&g.push("/library/dashboard/appointment/reports/books")});const D=n=>{g.push("/library/dashboard/appointment/reports/books/edit/"+n)},A=async()=>{u.value=!u.value,f.value=!0,setTimeout(()=>{f.value=!1},1e3),console.log("status",status),g.go()},E=async()=>{await $fetch(S.value+y.value+"/",{method:"DELETE",headers:{Authorization:r.user.token,"Content-Type":"application/json"}}).then(()=>{A()})},L=()=>{g.push("/library/login"),r.removeToken()};return(n,t)=>{const B=N;return c(),d("div",M,[e("div",O,[h(e("div",q,[e("div",H,[e("div",Y,[t[2]||(t[2]=e("i",{class:"fa fa-user mx-2","aria-hidden":"true"},null,-1)),e("h1",G,a(l(r).user.email),1)]),e("div",{onClick:t[0]||(t[0]=s=>k(o)?o.value=!l(o):o=!l(o)),class:"w-10 px-1.5 lg:hidden flex"},[e("i",{class:x(["fa text-3xl text-white",l(o)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),t[3]||(t[3]=_('<div class="min-h-[570px]"><div class="w-fit mx-auto mt-5 mb-3"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSULRC.jpg" class="lg:w-24 w-20 mx-auto rounded-full"></div><div class="text-center"><h2 class="font-bold text-green-800 text-lg">Learning Resource Center</h2></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1"><a href="/library/dashboard/appointment" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-list mr-3" aria-hidden="true"></i> Appointment Lists </a><a href="/library/dashboard/appointment/reports/books" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-book mr-3" aria-hidden="true"></i> Available Books </a><a href="/library/dashboard/appointment/set-schedules" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-calendar mr-3.5" aria-hidden="true"></i> SET SCHEDULES </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-globe mr-3" aria-hidden="true"></i> LSU HOME PAGE </a></div></div>',1))],512),[[b,l(o)]]),e("div",W,[e("div",J,[e("div",K,[e("div",Q,[e("div",{onClick:t[1]||(t[1]=s=>k(o)?o.value=!l(o):o=!l(o)),class:"w-10 px-1.5"},[e("i",{class:x(["fa text-3xl text-white",l(o)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),e("button",{onClick:L,class:"flex hover:font-boldn pt-1"},t[4]||(t[4]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",null,[e("div",X,[e("div",null,[t[9]||(t[9]=e("a",{href:"/library/dashboard/appointment/reports/books/create",class:"block w-fit bg-green-600 text-white font-bold px-3 py-2 mb-5 rounded-lg shadow hover:bg-green-700 text-xs"}," + Add Record ",-1)),h(e("div",Z," Deleting row... ",512),[[b,l(f)]]),e("div",ee,[e("div",te,[e("div",se,[t[8]||(t[8]=_('<div class="header w-full bg-green-800 text-white flex items-center"><ul class="lg:flex w-full justify-center text-center whitespace-nowrap uppercase"><li class="border-r border-green-700 py-2 px-1 lg:w-10">No.</li><li class="border-r border-green-700 py-2 px-1 lg:w-24">Call Number</li><li class="border-r border-green-700 py-2 px-1 lg:w-40">Author</li><li class="border-r border-green-700 py-2 px-1 lg:w-44">Title</li><li class="border-r border-green-700 py-2 px-1 lg:w-28">Barcode</li><li class="border-r border-green-700 py-2 px-1 lg:w-24">Year</li><li class="border-r border-green-700 py-2 px-1 lg:w-24">Date Acquired</li><li class="border-r border-green-700 py-2 px-1 lg:w-24">Status</li><li class="border-r border-green-700 py-2 px-1 lg:w-24">Sublocation</li><li class="border-r border-green-700 py-2 px-1 lg:w-24">Circulation</li><li class="border-r border-green-700 py-2 px-1 lg:w-16">Copies</li><li class="py-2 px-1 lg:w-20">Action</li></ul></div>',1)),l(p).length>0?(c(),d("div",le,[(c(!0),d(I,null,P(l(V).orderBy(l(p),"id","asc").slice(17925,17930),(s,w)=>(c(),d("ul",{class:x(["lg:flex w-full justify-center text-center h-auto border-b border-gray-100",w%2?"bg-gray-100":""]),key:w},[e("li",re,a(s.id),1),e("li",oe,a(s.call_number),1),e("li",ae,a(s.author),1),e("li",ie,a(s.title),1),e("li",ne,a(s.barcode),1),e("li",de,a(s.year),1),e("li",ce,a(s.date_acquired),1),e("li",ue,a(s.status),1),e("li",pe,a(s.sublocation),1),e("li",ge,a(s.circulation),1),e("li",xe,a(s.number_of_copies),1),e("li",fe,[e("div",{class:"mx-auto lg:flex justify-center",onClick:T=>D(s.id)},t[5]||(t[5]=[e("button",null,[e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"})],-1)]),8,he),e("div",{class:"mx-auto lg:flex justify-center",onClick:T=>v(s.id)},t[6]||(t[6]=[e("button",null,[e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"})],-1)]),8,be)])],2))),128)),h(e("div",me,[t[7]||(t[7]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("button",{class:"bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:E},"Yes"),e("button",{class:"bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:v},"Cancel")])],512),[[b,l(u)]])])):F("",!0),l(p).length===0?(c(),d("div",ye," No Results Found! ")):(c(),d("div",{key:2,class:x(["itallic text-gray-400 text-center p-1",l(p).length>0?"hidden":""])}," Please Wait ... ",2))])])])])])])])]),U(B)])}}};export{Ce as default};
