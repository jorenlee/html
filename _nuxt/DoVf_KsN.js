import{_ as X}from"./gHk9-qJD.js";import{_ as K}from"./IBJjBkeM.js";import{k as Q,l as W,r as s,p as Z,m as ee,c as u,a as e,b as T,f as B,i as j,h as i,X as te,n as se,t as p,j as le,e as ae,F as L,g as M,d as O,o as d}from"./kn4BmnqY.js";import{p as re}from"./BOCn3TFe.js";import{s as ie}from"./C1zSg28U.js";import"./CL9hKZeg.js";/* empty css        */import{h as oe}from"./C5S46NFB.js";import{_ as ne}from"./5JjjnmY2.js";import{_ as ue}from"./DlAUqK2U.js";const de={class:""},ce={class:"flex"},ve={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},pe={class:"w-full min-h-screen"},me={class:"bg-green-800"},fe={class:"lg:flex mx-auto justify-between py-2 px-3.5"},ge={class:"lg:flex items-center text-white lg:gap-5"},he={class:"flex -mt-1"},xe={class:"text-sm"},_e={class:"px-3"},we={class:""},be={class:"w-full"},ye={class:""},ke={class:"appointment-lists shadow mx-auto text-xs"},Ce={class:""},Se={key:0,class:"w-full rows"},Ae={class:"px-2 lg:w-14"},Ee={class:"px-2 lg:w-1/12"},Ne={class:"px-2 lg:w-1/12 whitespace-nowrap"},De={class:"px-2 lg:w-1/12 whitespace-nowrap"},Re={class:"px-2 lg:w-2/12"},Te={class:"flex px-2 font-bold justify-center lg:w-1/12"},Be={class:"mx-auto lg:flex justify-center"},je=["onClick"],Le={class:"mx-auto lg:flex justify-center"},Me=["onClick"],Oe={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},Ve={key:1,class:"itallic text-gray-400 text-center p-1"},$e={key:0,class:"flex items-center w-fit mx-auto font-bold text-sm rounded-lg mt-10"},Fe={class:"border-t border-gray-50 flex w-[150px] justify-evenly overflow-x-scroll px-2"},Ye=["onClick"],ze={__name:"index",setup(Ge){const h=Q(),l=W();s(1);const x=s(l.mainDevServer);let r=s(0);s(re.providerLists),s(ie.timeSelection),s(!0),s(!1),s(!1);let c=s(!0),f=s(!1),_=s();s(!1);const w=s("cba.registrar@lsu.edu.ph"),b=s("ccsea.registrar@lsu.edu.ph"),y=s("onlinerequest@lsu.edu.ph"),k=s("cthm.registrar@lsu.edu.ph"),C=s("cthm.registrar@lsu.edu.ph"),S=s("onlinerequest@lsu.edu.ph"),A=s("cte.registrar@lsu.edu.ph"),V=s(l.user.registrarEmail),$=s(l.user.developerEmail),F=s(l.user.testEmail);Z(async()=>{const a=await $fetch(x.value+"/api/appointments/list/").catch(t=>t.data);if(l.user.isAuthenticated&&(l.user.email===w.value||l.user.email===b.value||l.user.email===y.value||l.user.email===k.value||l.user.email===C.value||l.user.email===S.value||l.user.email===A.value||l.user.email===V.value||l.user.email===$.value||l.user.email===F.value))switch(l.user.email){case w.value:r.value=a.filter(t=>t.provider==="CBA")||0;break;case b.value:r.value=a.filter(t=>t.provider==="CCSEA")||0;break;case y.value:r.value=a.filter(t=>t.provider==="CAS / CON")||0;break;case k.value:r.value=a.filter(t=>t.provider==="CTHM / SGS")||0;break;case C.value:r.value=a.filter(t=>t.provider==="CTHM / SGS")||0;break;case S.value:r.value=a.filter(t=>t.provider==="CAS / CON")||0;break;case A.value:r.value=a.filter(t=>t.provider==="CTE")||0;break;default:r.value=a||0,E=Math.ceil(r._rawValue.length/n.value),N=r._rawValue.length}else h.push("/unauthorized")});const v=s(2),n=s(2),m=s(0);let E,N,Y=ee(()=>r.value.slice(m.value,n.value));const z=()=>{m.value>0&&(m.value-=v.value,n.value-=v.value)},G=()=>{n.value<N&&(m.value+=v.value,n.value+=v.value)},H=a=>{m.value=0,n.value=v.value,a>1&&(n.value*=a,m.value=n.value-v.value)},D=a=>{f.value=!f.value,_.value=a},q=async()=>{await $fetch(x.value+"/api/appointments/"+_.value+"/delete/",{method:"DELETE",headers:{Authorization:l.user.token,"Content-Type":"application/json"}}).then(async a=>{h.go(),f.value=!f.value}).catch(a=>{})},I=a=>{},J=()=>{h.push("/registrar/login"),l.removeToken()};return(a,t)=>{const P=X,U=K;return d(),u("div",de,[e("div",ce,[B(e("div",ve,[T(P)],512),[[j,i(c)]]),e("div",pe,[e("div",me,[e("div",fe,[e("div",ge,[e("div",{onClick:t[0]||(t[0]=o=>te(c)?c.value=!i(c):c=!i(c)),class:"w-10 px-1.5"},[e("i",{class:se(["fa text-3xl text-white",i(c)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",he,[t[1]||(t[1]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",xe,p(i(l).user.email),1)])]),e("button",{onClick:J,class:"flex hover:font-boldn pt-1"},t[2]||(t[2]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",_e,[t[9]||(t[9]=e("div",{class:""},[e("a",{href:"/",class:"w-fit block shadow text-center uppercase my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," Add Appointment ")],-1)),e("div",we,[e("div",be,[e("div",ye,[e("div",ke,[e("div",Ce,[t[6]||(t[6]=ae('<div class="header w-full p-2 bg-green-800 text-white flex items-center" data-v-576f7b68><ul class="lg:flex w-full justify-evenly text-center lg:whitespace-nowrap" data-v-576f7b68><li class="lg:w-14" data-v-576f7b68>No.</li><li class="lg:w-1/12" data-v-576f7b68>Reference Code</li><li class="lg:w-1/12" data-v-576f7b68>Provider</li><li class="lg:w-1/12" data-v-576f7b68>Time</li><li class="lg:w-2/12" data-v-576f7b68>Date</li><li class="lg:w-1/12" data-v-576f7b68>Action</li></ul></div>',1)),i(r).length>0?(d(),u("div",Se,[(d(!0),u(L,null,M(i(ne).orderBy(i(Y),"date","asc"),(o,g)=>(d(),u("ul",{class:"lg:flex w-full justify-evenly text-center items-center h-auto border-b border-gray-100",key:g},[e("li",Ae,p(g+1),1),e("li",Ee,p(o.referencecode),1),e("li",Ne,p(o.provider),1),e("li",De,p(o.time),1),e("li",Re,p(i(oe)(o.date).format("MM-DD-YYYY")),1),e("li",Te,[e("div",Be,[e("button",{onClick:R=>I(o.id)},t[3]||(t[3]=[e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,je)]),e("div",Le,[e("button",{onClick:R=>D(o.id)},t[4]||(t[4]=[e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,Me)])])]))),128)),B(e("div",Oe,[t[5]||(t[5]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:q},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:D},"Cancel")])],512),[[j,i(f)]])])):(d(),u("div",Ve," Please Add appointments, No Results Found! "))])]),i(r).length>v.value?(d(),u("div",$e,[e("div",{onClick:z,class:"shadow px-2 py-1.5 rounded-tl-lg rounded-bl-lg bg-white hover:bg-green-900 hover:text-white text-green-950"},t[7]||(t[7]=[e("i",{class:"fa fa-angle-left","aria-hidden":"true"},null,-1),O(" Prev ")])),e("ul",Fe,[(d(!0),u(L,null,M(i(E),(o,g)=>(d(),u("li",{class:"bg-white hover:bg-green-900 hover:text-white text-green-950 cursor-pointer px-2 py-0.5 border mx-1 my-1 rounded-lg",key:g,onClick:R=>H(o)},p(o),9,Ye))),128))]),e("div",{onClick:G,class:"bg-white hover:bg-green-900 hover:text-white text-green-950 shadow px-2 py-1.5 rounded-tr-lg rounded-br-lg"},t[8]||(t[8]=[O(" Next "),e("i",{class:"fa fa-angle-right","aria-hidden":"true"},null,-1)]))])):le("",!0)])])])])])]),T(U)])}}},Ze=ue(ze,[["__scopeId","data-v-576f7b68"]]);export{Ze as default};
