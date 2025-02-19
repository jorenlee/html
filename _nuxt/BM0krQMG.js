import{_ as $}from"./sfx5KTti.js";import{_ as z}from"./CZIOoNdy.js";import{m as L,u as R,r as i,p as F,c as d,a as e,q as y,v as f,n as r,b as w,s as I,x as h,t as o,y as V,F as q,z as M,A as P,o as c}from"./DshvmW_w.js";import{_ as U}from"./5JjjnmY2.js";import"./C5S46NFB.js";const O={class:""},Y={class:"flex"},W={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},G={class:"w-full min-h-screen"},H={class:"bg-green-800"},J={class:"lg:flex mx-auto justify-between py-2 px-3.5"},K={class:"lg:flex items-center text-white lg:gap-5"},Q={class:"flex -mt-1"},X={class:"text-sm"},Z={class:"w-full p-5"},ee={class:"text-xs text-center w-full px-2 py-1 bg-red-600 text-white capitalized my-3"},te={class:""},se={class:"appointment-lists shadow mx-auto text-xs"},le={class:""},re={key:0,class:"w-full rows"},oe={class:"p-2 lg:w-10 flex items-center justify-evenly border-r border-gray-200 h-20"},ie={class:"p-2 lg:w-24 flex items-center justify-evenly border-r border-gray-200 h-20"},ae={class:"p-2 lg:w-40 flex items-center justify-evenly border-r border-gray-200 h-20"},ne={class:"p-2 lg:w-44 flex items-center justify-evenly border-r border-gray-200 h-20"},de={class:"p-2 lg:w-28 flex items-center justify-evenly border-r border-gray-200 h-20"},ce={class:"p-2 lg:w-24 flex items-center justify-evenly border-r border-gray-200 h-20"},ue={class:"p-2 lg:w-24 flex items-center justify-evenly border-r border-gray-200 h-20"},pe={class:"p-2 lg:w-24 flex items-center justify-evenly border-r border-gray-200 h-20"},ge={class:"p-2 lg:w-24 flex items-center justify-evenly border-r border-gray-200 h-20"},xe={class:"p-2 lg:w-24 flex items-center justify-evenly border-r border-gray-200 h-20"},ye={class:"p-2 lg:w-16 flex items-center justify-evenly border-r border-gray-200 h-20"},fe={class:"flex items-center font-bold justify-evenly h-20 p-1 lg:w-20"},he=["onClick"],be=["onClick"],me={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},_e={key:1,class:"itallic text-gray-400 text-center p-1"},Ae={__name:"index",setup(ve){const g=L(),s=R(),b=i(s.mainDevServer),k=i(s.user.developerEmail);let a=i(!0),u=i(!1),x=i(!1),m=i();const _=n=>{u.value=!u.value,m.value=n,console.log(n)},j=i(b.value+"/api/library/reports/book/list/"),C=i(b.value+"/api/library/reports/book/delete/");let p=i(0);setTimeout(async()=>{p.value=await $fetch(j.value).catch(n=>n.data)||0},2e3),F(async()=>{s.user.isAuthenticated&&(s.user.email===k.value||s.user.email==="monaliza.mugot@lsu.edu.ph"||s.user.email==="marilyn.bejec@lsu.edu.ph"||s.user.email==="applejane.ebarle@lsu.edu.ph"||s.user.email==="janekaren.gudmalin@lsu.edu.ph"||s.user.email==="macy.beniola@lsu.edu.ph"||s.user.email==="lynn.lumacad@lsu.edu.ph"||s.user.email==="zosette.salas@lsu.edu.ph")&&g.push("/_/panels/library/appointment/reports/books")});const D=n=>{g.push("/_/panels/library/appointment/reports/books/edit/"+n)},A=async()=>{u.value=!u.value,x.value=!0,setTimeout(()=>{x.value=!1},1e3),console.log("status",status),g.go()},S=async()=>{await $fetch(C.value+m.value+"/",{method:"DELETE",headers:{Authorization:s.user.token,"Content-Type":"application/json"}}).then(()=>{A()})},B=()=>{g.push("/_/lib-admin"),s.removeToken()};return(n,t)=>{const T=$,E=z;return c(),d("div",O,[e("div",Y,[y(e("div",W,[w(T)],512),[[f,r(a)]]),e("div",G,[e("div",H,[e("div",J,[e("div",K,[e("div",{onClick:t[0]||(t[0]=l=>I(a)?a.value=!r(a):a=!r(a)),class:"w-10 px-1.5"},[e("i",{class:h(["fa text-3xl text-white",r(a)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",Q,[t[1]||(t[1]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",X,o(r(s).user.email),1)])]),e("button",{onClick:B,class:"flex hover:font-boldn pt-1"},t[2]||(t[2]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",null,[e("div",Z,[e("div",null,[t[7]||(t[7]=e("a",{href:"/_/panels/library/appointment/reports/books/create",class:"block w-fit bg-green-600 text-white font-bold px-3 py-2 mb-5 rounded-lg shadow hover:bg-green-700 text-xs"}," + Add Record ",-1)),y(e("div",ee," Deleting row... ",512),[[f,r(x)]]),e("div",te,[e("div",se,[e("div",le,[t[6]||(t[6]=V('<div class="header w-full bg-green-800 text-white flex items-center"><ul class="lg:flex w-full justify-center text-center whitespace-nowrap uppercase"><li class="border-r border-green-700 py-2 px-1 lg:w-10">No.</li><li class="border-r border-green-700 py-2 px-1 lg:w-24">Call Number</li><li class="border-r border-green-700 py-2 px-1 lg:w-40">Author</li><li class="border-r border-green-700 py-2 px-1 lg:w-44">Title</li><li class="border-r border-green-700 py-2 px-1 lg:w-28">Barcode</li><li class="border-r border-green-700 py-2 px-1 lg:w-24">Year</li><li class="border-r border-green-700 py-2 px-1 lg:w-24">Date Acquired</li><li class="border-r border-green-700 py-2 px-1 lg:w-24">Status</li><li class="border-r border-green-700 py-2 px-1 lg:w-24">Sublocation</li><li class="border-r border-green-700 py-2 px-1 lg:w-24">Circulation</li><li class="border-r border-green-700 py-2 px-1 lg:w-16">Copies</li><li class="py-2 px-1 lg:w-20">Action</li></ul></div>',1)),r(p).length>0?(c(),d("div",re,[(c(!0),d(q,null,M(r(U).orderBy(r(p),"id","asc").slice(17925,17930),(l,v)=>(c(),d("ul",{class:h(["lg:flex w-full justify-center text-center h-auto border-b border-gray-100",v%2?"bg-gray-100":""]),key:v},[e("li",oe,o(l.id),1),e("li",ie,o(l.call_number),1),e("li",ae,o(l.author),1),e("li",ne,o(l.title),1),e("li",de,o(l.barcode),1),e("li",ce,o(l.year),1),e("li",ue,o(l.date_acquired),1),e("li",pe,o(l.status),1),e("li",ge,o(l.sublocation),1),e("li",xe,o(l.circulation),1),e("li",ye,o(l.number_of_copies),1),e("li",fe,[e("div",{class:"mx-auto lg:flex justify-center",onClick:N=>D(l.id)},t[3]||(t[3]=[e("button",null,[e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"})],-1)]),8,he),e("div",{class:"mx-auto lg:flex justify-center",onClick:N=>_(l.id)},t[4]||(t[4]=[e("button",null,[e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"})],-1)]),8,be)])],2))),128)),y(e("div",me,[t[5]||(t[5]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("button",{class:"bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:S},"Yes"),e("button",{class:"bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:_},"Cancel")])],512),[[f,r(u)]])])):P("",!0),r(p).length===0?(c(),d("div",_e," No Results Found! ")):(c(),d("div",{key:2,class:h(["itallic text-gray-400 text-center p-1",r(p).length>0?"hidden":""])}," Please Wait ... ",2))])])])])])])])]),w(E)])}}};export{Ae as default};
