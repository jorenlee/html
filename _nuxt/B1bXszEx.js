import{_ as R}from"./BO7LMbgk.js";import{_ as Y}from"./M_UDJI5s.js";import{m as q,u as P,r as a,p as U,E as G,M as H,c as d,a as e,q as b,v as w,n,b as N,s as J,x as K,t as o,F as j,z as A,d as i,A as Q,o as u}from"./BpaQTjpI.js";import"./5JjjnmY2.js";import{_ as W}from"./DlAUqK2U.js";import"./C5S46NFB.js";const X={class:""},Z={class:"flex"},ee={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},te={class:"w-full"},se={class:"bg-green-700"},oe={class:"lg:flex mx-auto justify-between py-2 px-3.5"},le={class:"lg:flex items-center text-white gap-5"},ae={class:"flex -mt-1"},ne={class:"text-sm"},ie={class:"relative"},re={class:"lg:w-full p-5"},de={key:0,class:"mb-10 flex flex-wrap gap-5"},ue={class:"flex w-full"},ce={class:"border-r-4 border-green-900 text-white"},xe={class:"text-white bg-green-950 rounded-full h-6 w-6 mt-2 ml-2 text-xs flex items-center justify-center font-bold"},pe={class:"py-2 px-10 mb-7"},ge={class:"text-green-900 font-bold mb-3"},ve={class:"text-green-900 text-xs w-44 italic line-clamp-3"},fe={class:"w-[300px] relative px-2 py-3"},me={class:"absolute top-2 right-5"},_e={class:"mx-auto lg:flex justify-center"},he=["onClick"],be={class:"text-xs text-green-900 mb-2"},we={class:"text-xs text-green-900 mb-2"},ye={class:"text-xs text-green-900 mb-2"},ke={class:"absolute bottom-2.5 left-2 text-xs text-yellow-500 w-fit px-3 py-0.5 font-bold rounded-lg border uppercase border-yellow-500"},Ce={class:"absolute bottom-3 right-5 h-fit"},De={class:"text-xs text-green-900"},Be={class:"text-xs text-green-900"},$e={key:1,class:"itallic text-gray-400 text-center p-1"},Ne={class:"z-10 px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},je={key:0,class:"flex items-center w-fit mx-auto font-bold text-sm rounded-lg"},Ae={class:"border-t border-gray-50 flex w-[150px] justify-evenly overflow-x-scroll px-2"},Le=["onClick"],Me={__name:"pagination",async setup(Se){let f,y;const m=q(),c=P(),k=a(c.mainDevServer);U(()=>{setTimeout(()=>{c.user.isAuthenticated&&c.user.email===c.user.email?m.push("/_/panels/library/appointment"):m.push("/_/unauthorized")},3e3)});const C=([f,y]=G(()=>$fetch(k.value+"/api/library/booking/list/").catch(l=>l.data)),f=await f,y(),f),_=a(C.length),x=a(3),r=a(3),g=a(0);let L=a(Math.ceil(_.value/r.value)),D=H(()=>C.slice(g.value,r.value));const M=()=>{g.value>0&&(g.value-=x.value,r.value-=x.value)},S=()=>{r.value<_.value&&(g.value+=x.value,r.value+=x.value)},T=l=>{g.value=0,r.value=x.value,l>1&&(r.value*=l,g.value=r.value-x.value)};let z=a(!0),p=a(!0),v=a(!1),B=a();const $=l=>{v.value=!v.value,B.value=l},E=async()=>{await $fetch(k.value+"/api/library/booking/"+B.value+"/delete/",{method:"DELETE",headers:{Authorization:c.user.token,"Content-Type":"application/json"}}).then(async l=>{m.go(),v.value=!v.value}).catch(l=>{console.log(l)})},F=()=>{m.push("/library/login"),c.removeToken()};return(l,t)=>{const I=R,O=Y;return u(),d("div",X,[e("div",Z,[b(e("div",ee,[N(I)],512),[[w,n(p)]]),e("div",te,[e("div",se,[e("div",oe,[e("div",le,[e("div",{onClick:t[0]||(t[0]=s=>J(p)?p.value=!n(p):p=!n(p)),class:"w-10 px-1.5"},[e("i",{class:K(["fa text-3xl text-white",n(p)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",ae,[t[2]||(t[2]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",ne,o(n(c).user.email),1)])]),e("button",{onClick:t[1]||(t[1]=s=>F()),class:"flex hover:font-bold pt-1"},t[3]||(t[3]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",ie,[e("div",re,[b(e("div",null,[n(D).length>0?(u(),d("div",de,[(u(!0),d(j,null,A(n(D),(s,h)=>(u(),d("div",{class:"shadow border border-gray-200 rounded-md h-auto",key:h},[e("div",ue,[e("div",ce,[e("span",xe,o(s.id),1),e("div",pe,[t[4]||(t[4]=e("span",{class:"text-xs text-gray-900"},"Book:",-1)),e("h1",ge,o(s.book_title),1),t[5]||(t[5]=e("span",{class:"text-xs text-gray-900"},"Description:",-1)),e("p",ve,o(s.book_description),1)])]),e("div",fe,[e("span",me,[e("div",_e,[e("button",{onClick:V=>$(s.id),class:"flex items-center text-xs text-red-900 gap-2"},t[6]||(t[6]=[e("i",{class:"fa fa-close text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1),i(" Cancel ")]),8,he)])]),e("p",be,[t[7]||(t[7]=e("i",{class:"mr-2 fa fa-user","aria-hidden":"true"},null,-1)),i(" "+o(s.firstname)+" "+o(s.lastname),1)]),e("p",we,[t[8]||(t[8]=e("i",{class:"mr-2 fa fa-id-card","aria-hidden":"true"},null,-1)),i(" "+o(s.student_id)+" ",1),t[9]||(t[9]=e("span",{class:"font-bold mx-2"},"|",-1)),i(" "+o(s.college)+" "+o(s.courseProgram)+" "+o(s.courseYear)+" "+o(s.courseMajor),1)]),e("p",ye,[t[10]||(t[10]=e("i",{class:"mr-2 fa fa-envelope","aria-hidden":"true"},null,-1)),i(" "+o(s.email),1)]),e("p",ke,o(s.borrower_category),1),e("div",Ce,[e("p",De,[t[11]||(t[11]=e("i",{class:"fa fa-calendar mr-1","aria-hidden":"true"},null,-1)),i(" "+o(s.booking_date),1)]),e("p",Be,[t[12]||(t[12]=e("i",{class:"fa fa-clock mr-1","aria-hidden":"true"},null,-1)),i(" "+o(s.booking_time),1)])])])])]))),128))])):(u(),d("div",$e," No Results Found! "))],512),[[w,n(z)]])]),b(e("div",Ne,[t[13]||(t[13]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:E},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:$},"Cancel")])],512),[[w,n(v)]])]),_.value>x.value?(u(),d("div",je,[e("div",{onClick:M,class:"shadow px-2 py-1.5 rounded-tl-lg rounded-bl-lg bg-white hover:bg-green-900 hover:text-white text-green-950"},t[14]||(t[14]=[e("i",{class:"fa fa-angle-left","aria-hidden":"true"},null,-1),i(" Prev ")])),e("ul",Ae,[(u(!0),d(j,null,A(n(L),(s,h)=>(u(),d("li",{class:"bg-white hover:bg-green-900 hover:text-white text-green-950 cursor-pointer px-2 py-0.5 border mx-1 my-1 rounded-lg",key:h,onClick:V=>T(s)},o(s),9,Le))),128))]),e("div",{onClick:S,class:"bg-white hover:bg-green-900 hover:text-white text-green-950 shadow px-2 py-1.5 rounded-tr-lg rounded-br-lg"},t[15]||(t[15]=[i(" Next "),e("i",{class:"fa fa-angle-right","aria-hidden":"true"},null,-1)]))])):Q("",!0)])]),N(O)])}}},Ve=W(Me,[["__scopeId","data-v-37e84b6d"]]);export{Ve as default};
