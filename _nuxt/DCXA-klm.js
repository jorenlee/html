import{_ as M}from"./RWPthtqh.js";import{_ as N}from"./Cr5XhLKB.js";import{_ as T}from"./CrZquyVv.js";import{p as U,m as V,u as $,r,s as z,q as L,c as m,a as e,v as p,x as A,n as a,b as _,y as E,z as F,t as h,A as O,B as R,w as J,F as q,D as I,o as x,d as P,J as G}from"./CZXoQHjb.js";/* empty css        */import{s as H}from"./Uh1Scs3X.js";import"./5JjjnmY2.js";import"./C5S46NFB.js";import{_ as K}from"./DlAUqK2U.js";const Q={class:""},W={class:"flex"},X={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},Y={class:"w-full"},Z={class:"bg-green-800"},ee={class:"flex mx-auto justify-between py-2 px-3.5"},te={class:"flex items-center text-white gap-5"},se={class:"flex -mt-1"},ae={class:"text-sm"},oe={class:""},le={class:"lg:w-full p-5"},ie={class:"h-full shadow-lg"},ne={class:"py-5"},re={class:"flex w-11/12 mx-auto gap-5"},de={class:"h-fit"},ue={class:"w-fit mx-auto my-5"},ce={class:"w-fit mx-auto"},me={class:"px-5 py-2 shadow-sm border"},pe={class:"text-xs flex flex-wrap justify-center"},_e=["value"],he={class:"",for:"time"},xe={__name:"[id]",async setup(fe){let d,f;const c=U(),u=V(),s=$(),v=r(s.mainDevServer),b=([d,f]=z(()=>$fetch(v.value+"/api/library/schedule/booking/"+c.params.id+"/").catch(n=>n.data)),d=await d,f(),d),w=r(H.timeSelection),o=r({date:b.date,time:[],updated_at:new Date});let l=r(!0);const y=r(s.user.developerEmail);L(async()=>{s.user.isAuthenticated&&(s.user.email===y.value||s.user.email==="monaliza.mugot@lsu.edu.ph"||s.user.email==="marilyn.bejec@lsu.edu.ph"||s.user.email==="applejane.ebarle@lsu.edu.ph"||s.user.email==="janekaren.gudmalin@lsu.edu.ph"||s.user.email==="macy.beniola@lsu.edu.ph"||s.user.email==="lynn.lumacad@lsu.edu.ph")?(u.push("/_/panels/library/appointment/set-schedules/edit/"+c.params.id),b.time.filter(n=>{o.value.time.push(n)})):u.push("/_/unauthorized")});const g=()=>{u.push("/_/lib-admin"),s.removeToken()},k=async()=>{o.value.time<2&&(o.value.time=["-"]),await $fetch(v.value+"/api/library/schedule/booking/"+c.params.id+"/edit/",{method:"PUT",body:o.value}).then(n=>{u.push({path:"/_/panels/library/appointment/set-schedules"})})};return(n,t)=>{const S=M,C=N,D=T;return x(),m("div",Q,[e("div",W,[p(e("div",X,[_(S)],512),[[A,a(l)]]),e("div",Y,[e("div",Z,[e("div",ee,[e("div",te,[e("div",{onClick:t[0]||(t[0]=i=>E(l)?l.value=!a(l):l=!a(l)),class:"w-10 px-1.5"},[e("i",{class:F(["fa text-3xl text-white",a(l)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",se,[t[3]||(t[3]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",ae,h(a(s).user.email),1)])]),e("button",{onClick:g,class:"flex hover:font-bold pt-1"},t[4]||(t[4]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",oe,[e("div",le,[e("div",ie,[e("div",ne,[e("form",{class:"w-full",onSubmit:O(k,["prevent"])},[e("div",re,[e("div",de,[t[7]||(t[7]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Date ",-1)),e("div",ue,[p(e("input",{class:"text-center text-green-900 text-sm font-bold","onUpdate:modelValue":t[1]||(t[1]=i=>a(o).date=i),disabled:""},null,512),[[R,a(o).date]])]),e("div",ce,[t[6]||(t[6]=e("button",{class:"block uppercase text-sm rounded-sm shadow px-5 py-1 my-10 text-green-900 whitespace-nowrap"}," Update ",-1)),_(C,{to:"/_/panels/library/appointment/set-schedules",class:"block w-fit uppercase text-sm rounded-sm shadow px-5 py-1 text-red-900 whitespace-nowrap"},{default:J(()=>t[5]||(t[5]=[P(" Cancel ")])),_:1})])]),e("div",me,[t[8]||(t[8]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Time ",-1)),e("ul",pe,[(x(!0),m(q,null,I(a(w)[0].time,(i,j)=>(x(),m("li",{class:"mb-3 lg:flex justify-center font-bold text-black mx-10",key:j},[p(e("input",{id:"time",type:"checkbox",name:"time",value:i,class:"mr-2 mt-0.5 available","onUpdate:modelValue":t[2]||(t[2]=B=>a(o).time=B)},null,8,_e),[[G,a(o).time]]),e("label",he,h(i._12_hour_format_from)+" - "+h(i._12_hour_format_to),1)]))),128))])])])],32)])])])])])]),_(D)])}}},je=K(xe,[["__scopeId","data-v-21e6460d"]]);export{je as default};
